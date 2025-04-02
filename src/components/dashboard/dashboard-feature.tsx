/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4kXvNcrxZY1o9oC7eKsmNVo5AjZbBViJNkJWh442rPq7QUzTn79EoPqDWQHmE6hwC6SGQih8jLuJtQx1xDg6H1F5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VBtgPcwHLKkcSYFTJpkgmSRVvNsqxcPzLZW5Tf9ReeoP9vmJRUjbBqfUKHyEQkpRUwpdvxJ6rTF5fYFcHWH4UCY",
  "key1": "3ZAYmpvviS6s73G4oVWW6M4PGyp7Y178Wnkp16e7sGW8ZqvE8i7UHz2pXGqWpNvTpu7b9voAJg8JoroQkCkEf3nw",
  "key2": "24fBZ43epRN7AVJSxZBjddqjfbnRPx7PdQCwtvTNNn3xdzRj6M9rxknbNzD8QLQ4ExSwYLvdJ3fpEvSB4h4Ga3Cy",
  "key3": "eVc3dWfGc7W1sb3vQ9fQFesUUMPfHvE5CXixBkJj77tHYFtEvBL5SJ7DMRfzS5ao5oKFBeXB4LjYJEn41xHk6Lj",
  "key4": "2PD28iPJj926GME9AAqYVLmUyGHGD4LcCKsFrcfxYADMJbig5dMXng7gPPMbXbahVa8fNYzMNnfhndkyfyd2tnbD",
  "key5": "xJ8pU2Fhr8MXogV9ppmdGBnwu249F9DRBKo9fvKzUp4FRMCQ372CU3NgdZaxwsLSFEd87mcAjWGRscnRh3VYdmK",
  "key6": "5SPVFzkoP7bYCtQmu6uGRtG1zJb6cHbDLiFBga4NdEbXNSpsvf8tDFCSGtQbYMnUNJWxkKaMMgrhK1PN36wfdesB",
  "key7": "3wLjZusms21UKTkXsocLuzeKybgr4uKhfLUWqcnGmc8udiGWeBFNNS9N4oVQrmKLpgbTQoAr4rdZqxNQJvy4YZPB",
  "key8": "EMBQHLMEJ9PGXeVdkj2yMDWgrHcPxk4psViX7t6kS6LmrBMBmKtGGCNNh6W2k19yk2XMYcpUtU9WGk23T9jzpyE",
  "key9": "2jwNu65TGWeQ6SCZUkHdbAQnzJVQc43iGKCyVReLwsVXahyABXDfvxYggFZ7bR5fqCMhX1QbYvunEqU9MPwLN5Aj",
  "key10": "2ELbAkCEnLAgWn28vNJWazaqRmc5R1K9sdJ2PeouM2km4Tqf6HNGnLsRRDgm2mR2RZuXenZGz4dDTLkYQwUx6m7q",
  "key11": "4fDKRjkVZpKaqFor8fvKbceMi8bpSuHzFYHe6Dp11NixxiMJp3WgxHkLzm7Bv3zexNHCUehTV59K7UdNsVWxUJg6",
  "key12": "3LvXg7bswyCTXhx62NxoDNocdutbdeTmDXNbB4cFPoKm8uSTsuLZRyAPrBFv6vnX8SDbARyMsi8Sa62Xjg43moem",
  "key13": "2qjzTk4bdbTDjzqZF2avZdexkbpBRroxxMZu5xHhrWRyrgWjSzNNfqBGRx1E3qNbJMHjFdWtuogiJU4CexiDQRQR",
  "key14": "4DcKbBKvLM3ebR4t3AZsfrvHcpp9jngp6EM8FXRuu22kb1kKgUs3PXuZv6kEJb9Tusx1LHFoAtDLFzEVPXUCYaoE",
  "key15": "3vUamPWuk62WHdS1QFEcozfK1Uhs6qGFCKrhJnUxSBAZKsgr8tF4HFmw1NHvvh6gh8o2NsjkeH75W3EfE7XM5M4D",
  "key16": "4Ug74mfmidLmiTEJk6kVT8B8JDrsyqVUQjGdQMQHfFmJiHuztWBr4zjFsPJ6X9ebGWKCKcY1ZaqS3EdKvcgLHL1Y",
  "key17": "38JUvBYjbjbz9hULePVZCEA8QETXk7oBobg8vaqKBzbKyC44JE3eVjs9vxTSyQsLBMch5oXmpPgzNdB3zWmiGWCQ",
  "key18": "xWuVHVUaCdgzCUaeTbnDE99MkYfK8raTWRfhcTF25Ffym63CJJcuiTqk1fHJnR7igYCJX5Qu7PvFcPVgqwhrs4s",
  "key19": "5JooMkL9TBk2R5psfT7xxNSMfVaosLP5pmcj4vmSTu17K5r9EemvEX3HRAH3N8bHWsNGq5R7jqTenfLwACnbwX6",
  "key20": "5tsFvnRiFgC6rFrHvQfTQ1tAPeyVrkU6kkNuV5nRVVuEEnbbN8icb5aXDnxNPkXG7sjSNqioA6TcywMiak7Gb8iW",
  "key21": "5oNeozzgNLk8Ffh5hDaGxJNXXdtKK6y6n4jEpnsyxdfbJvpcC5eZkmKWznwp3VjzrySATwDHtfFrtgyRyVuwGSNF",
  "key22": "4Kx6FX2eqdF9NC8JMshYbRMLBWjTZGFnTk9TaxcGmRsrEcFHfXnojxYV1wU9NwfXFMjFwFoUcZP8cNc13fMrjSmy",
  "key23": "494UVSy2kv8KmWBRAwNQrdNRk4WvK8da7Nuq5NYypsz9xhKGeGqYXFssDHsS2hkC8aQUScNC2u38LMFRrbybfY6d",
  "key24": "3kDuhMCxGmu5eK9iWKPnHqfQ8rgYrMqVJqDs2jzXrcYrDxjS1DCqLqDQkhaTpwqLGY2RQZ3Yoi2nMg8n21vyfk8f",
  "key25": "46HNSG1CkeyhizvSWgHpZ9kP7EP57QKge4KJMv4vWXpGxJjU5yVeFTyapekEYr5MLJD8fYdsWzFMeYFpSL8Y7Wxj",
  "key26": "dxqChJ8s8PNDnz7gdsvpXpuh63PYG9xdCiBme1S5mY7ZXVzZQxdSsfy7zbqXXjcywmqbxYLG6dCZZK7P39wKB17",
  "key27": "4hriaSPEgT7Gi49xTAm2WwEkJgFmz8YtPHSHEQBP9rT85F2DR8BkDSVxtk5miL8qZdtzpKBGJbYnooAic3jHZFf3",
  "key28": "5TVUhEXvFdiM3wfzJntUkgiFC7oUjduaUftubAzKN1MQjdGZzH3aEWyiVwFBbfhkZXKWjKECNnBuHwZ8rN6L9Zdn",
  "key29": "5p8dYbFRFa1fW7CBDoq2jicia5QsAiEnsQ1mLYua9wZdDthpTuZ5YHWYGRNLCNmdyLAxbRGoThaaobtLPJ8wBXq9"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
