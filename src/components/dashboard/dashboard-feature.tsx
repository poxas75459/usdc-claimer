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
    "3FeJCNsreWxSvwwsWX4DUNUSSGFTiFxr3Yvv9go34bH2MxjwYHoqxeLn7TBvEtCafHW6i39a76GL1Fb43yJDSPh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DVhUZ34AXdYLJxqWcNCt7hgDM4RmAhAavLqBMkfyxghBepk3mTxKcXzfMhdpv5qCoTvoYKczpUTLL1seFazv5V7",
  "key1": "meKN5UiottuHMy4tAyz6sSd2h9VSzH375rJCnVTucExRi6fYpQ7X8bDyixQk7LthxpTHbcXtnYPSEaWpa3rfpAf",
  "key2": "4VnwyWYc9vz6xGzrodeU9y1R1SsexnDJFrMxNaA8hTpmhT13QPtoNWCpwSgcUYFozfQq7RGUSZbFmfkbK3p7454",
  "key3": "3QEQ7dmsCM5s9PWKsE3BMtGDknSxXNuc6cnJgXStG47igvWH2TXZadMMKqza9XAHURmBex6k4GFbDGjgzgWWNpsP",
  "key4": "2ssBeEq3iYsbuiiTExGDhWaTytWVeMn3LwsGPAGNMzDAqqaKiLzMahutwUdvLriRkn7YHrEZpwoGkGJgkJhXi9wv",
  "key5": "4d9ieNYmWFLdudrr6NKXfpsQ44ysyE2c94hwpv44yEQBZ9FhRd48rWaEo8ZHDBTK8BMmCSjLmJzEm2WUDCKN3uND",
  "key6": "4T5fBWGVXmK3dzRJnyTbmXXaPX5FZFb5KGi3iXVRJL7He6Awwx36ziUsAQ8NxtgcaCVhfAgUB115hERnQUfP9uo4",
  "key7": "5mzkH4Y26hVwoiVd44Y7mQcitCDxchiizTmRaMVAEzSRUCvK451nWHke2nULvoNHovofhZa2cAdpk3jbLFzTZeGc",
  "key8": "49HFoMEZthpSmWJEQjUwzhVjtKhotc48RGxefYp9YvpCquHspz4brK9P4Wrynp6FhdsoRMtogvdExSaBoH57Jj2z",
  "key9": "3fwEPkwso3cTe79g5xnvCFEumSEAi8vJTBjKE6kxLKqEVRaRCus2g9YkGY5xJ4QxdFq5CrUnEQW8PJXQEfyeaSyW",
  "key10": "3E8xaRqgvtKZw4BvDBgc2wqJR36dBmoDs2PnRVS2eGiwR7ByM8kVD7hGxGN3tYiWkcc99WzJJPCitYKE3GCg8tnY",
  "key11": "5AUgYNxFrA1RM1YbxVGJRQ6wZxMNBEnQLNZxaPzudFeaHQgwCo6ZvwB4CmM4Q4bGaQowie3bqetxHbcAnfWzCidQ",
  "key12": "gHhqKJnpwYzE597o1B8RYNxUhM6TmDcXup5Rc4ePwP3jjWwHVW2BJzTabTR2dYUF4u89UBgGaTxpPrFWyADqGSP",
  "key13": "3aKrQLyvEQsBDcB94bWZRaWi8F2Ch9VuSDL7fjTk6EuUwDRmponNk17AetyoU38bU4TB6GcmXsW9En3Dd5QFrwMC",
  "key14": "3dq6JrKLoUbgK6QJ51qgaA1UPubZ2hNb8aKqw599Zk37HeAdzfXB1JDAceoD56vD3dQTxyxQq3qsenBpZqmrnT4B",
  "key15": "5pJf43GiD9vZkpLy4wKBgYE7zCjXpZ7NzmgVsZuhhXmwjWvEEAMuqRaqMzRG1nxdoTjC7GT3bLy3cRmEQGRb2e2U",
  "key16": "3bV57hnoVVJTc3cbFmj2GXdBMgcpmUZbsgpN8FEZFj6NApZeDrSk342FiPd4tLsFUaVFgqMgQsSxiUWZPgPoNmtv",
  "key17": "768ZsSjigZTkvu6FoN8ASXzjPJV9WcakZKSj9fm2DKJ5te4UdjifkPgheGjvHFKk4w8XctBd7sZNRPqMntPq9by",
  "key18": "4w2BQAHgx6SSEhmQUyfHSP4znc4fFbSHURosVeyHvCoyQZ9o4g31L1fHdJEa7BrA3mbiUUH245pHVkU1ZG7fL58Z",
  "key19": "4UxzA28uoULM52yFt2pxbDh8k2mLZAs6CyUCZjF87d2UWiug63GhREd5DYoteW1JcThgqCDpAHnFJDF57kzzyQdE",
  "key20": "5uLtujV65BSYKE2wR7sPtGvMpj2oLQSPcmCaGgvK1iTNgGWGyAr3Jeg6wnngG9cjWnSF4yr89FnXGHpjvaf2VefV",
  "key21": "5EabAcLBiTNDQhYt9jzkXADLwdtFESecwmApfeHSMfNUJkbKUk9rVVMjtK8JVt8y1r6LLqyubUyXsNSmz9s8j7KT",
  "key22": "z8vY1QnfHH41QRhjLC9qiWzGgdTC99MisAW8F9Mjm3eNFqEYjN1VimT5zRUPJ5rgAphKu9qsbfRb3foAb4VnCEE",
  "key23": "2tmvUA2UxkbwnKdZJ3FhEoSqpr92yVnKWumDRqssnNvRsaJSZxZzjxjPhDzCsUdNPYyVBGwu8urgRRwyNf7QDSo5",
  "key24": "36sYzCLJ9vWHk5z2o6qqSrV8saFic1RXHwMfPUrXBxosPZKAZeRLhcRnNsHH7V7B3sbf9CvR3ExUMdUojSTA8oEM",
  "key25": "38fDK9fChu2iKJvj1SNMymhjt1P84oQQCHsxNJrNYeJEnpRqzDrnLyd7EFXHHoJ9UGXri3pzSFrUEdrkpBwxPNdc",
  "key26": "4RQdrbLceCwLEion2PmF4FbE5nnGbq4CvmdkTaMEBHUcgfxz46tUhNLWZKtsf5Jvvqavk3rkDkK4QQbHgWCWUNVf",
  "key27": "29ikZkbRErw66t5Db1h8CUxiRVuby5io1mUhMZk4AH6x76HzQTiXUdnDDk5QH93enEZqhqWtNfhbbn5HMNMXr3wC",
  "key28": "B2XAZhkxvLYAZu2juCSqzF9rctZxnsPRVwE7c7bWSxB6m5hJXffLxVr9ym4ERv644VJHpPSXy4syLAixRxSH9wj"
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
