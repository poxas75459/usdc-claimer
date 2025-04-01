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
    "3kijpcooBrjpaiEgfiHKCk15o2gr3QbiELALJsLb8dxKXA4uf13v9g8K6Um32dfgejXgkY9wCTfUM14nmdZR6rSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4umf7wBBz3nRjuY1YYNWgqHWmV1HA9z5fPG393BxaMjEvZwb3xNLEFAs23pUDQJv59bg5Yrj8jjsz6QK99jSMh6z",
  "key1": "2PHhPZ2fd1n4kNNdNDW97Xv7byk1ajrxr7s1VLgWS6iezfmVaMfFGQZuaFR3Ya49EaA7Ng7JpjyZraobes3NRi9b",
  "key2": "38n5wdGG9rDL31DWuJj3vH3bJgaCoHAMxQXChU8v5QNhkXywtM72pNGLgYPzcTYVC8wENKzpjLRLi1WwnbQmX8Go",
  "key3": "4mS7pd5DGVsU4b3gDzNrNaPTDGHnJ4d2LryZdKxREciwJH2JGQH9K4LKvbiTbHVaauLSyyFB1YWCTDv98ADvwbzS",
  "key4": "541BkHEFQoJUDVd2YysTpqNCQ5Tmup4AHJoxjSKEx1114d2iwqgfysTk2hbcVYgpFLt5hUbbEhZeDxu9zrYepCPL",
  "key5": "2pVsCLUSCMtaGbVAhZgsdcSKrD7t3K99gUgPkiBk45h7UUtvJ1B9rJtpi7sUBn6RQoaioiQyn5rtGPa1fcsRaEFf",
  "key6": "43e7oYAbNB8N6v5biGyBCvNpiECLaVbweZ5nHPe4dz9CyysJ2jDk4mKwz48oWUTHWtU1iFWxyb8o7tvMTVJgrUhC",
  "key7": "66TDw5fA6k7LqjPQBQUxP9zqykmu6i8k4C1JpkuWWeutayP9JLVCY7u7YtiWe1gkdSzW6seH2hSiq2XkwjMWYyEZ",
  "key8": "4WjK7ycqvn3546gVkQexyB7rvT7GVJoQLA5U6oA2BaMJVhEd9LspiMNpro75Vz74hNyiKsGovu9nhuu1LKK3ZWCJ",
  "key9": "4aGZG9hk8JsvFRAW4u6cWKRWUXcqFWfbGwQEXs2r5b6MTfXiwGdPFZYmL4PUnvGjztmjKPGbrSU8UmJ7rEibee2M",
  "key10": "4iyocEdoaUiS7YXgvrRVCoasaKHyB8HCkZNvN2C4tiZsYnmUYamwhzgBfxqGSSZsHenoB6kU9JejJeKzhhTHPEjU",
  "key11": "4dkXezaqeHpsBzJcTxa5BY37dE7yFXrdpU3ZmE7KRkCWv3v58xjiT7kztHzJN8UnH9KdzHNrfSPU3YVVrk8eQ8bk",
  "key12": "54d5USVoXjVCwsXbwquMbyk8CmpNbLhdkrvVKR1PiMqNTzdcUkmTotVL29wZStWUjyx43r99wE7mFRE7N3KNhz9P",
  "key13": "5FkbdL8UdxaqJksTm4onVd2oKJx116j9kYxfkevYLjJBY7VGn8hsPjdWMcPTi1vZrWFGAcQp73RsqRbT6fqwyy6W",
  "key14": "3VHfYwe45KkYsg3juqmwwBFg2WJjL5mBDKtmBzxFYqBfdDVGEeA6ZBv5t1fSa8oY456zZ4LLDP2unm8ogTNsmF9Q",
  "key15": "3u7cUKSh39kL4WcWWjdYCzoZR23RxnQRcy6BNZwksZosyhzzgLGZ5SL2Vpj7mnWYLH82bLa4NHSXQpH919cQdni8",
  "key16": "q1SiiBcg53mQEccj2JMNAB1XUyZMwXXVAhJFsP8QRZQAT6XEq61G8srQG37jaJmGzgsALL7ZVmu2imxJ1nimFMc",
  "key17": "2qVLZNjZJEMCUP9tPiuXx5wo9axecFeH7rKW9QvWw8oDhQqNFkrvAmfcsGoQQXB7BH4XkRAu9sZdLSyZB4YxVYMG",
  "key18": "3Kqrrok9DGkwer2DNhthzEQwvHr1T5kjxPbnqThXExmxr6f6GL4NPJXBvEZ9vgtP8SFhTr2UAU8EMRoHPo4oSVv",
  "key19": "2jz1Lgkj9XPBi1tsBhS3JX1QE8RhMCn6v4Wcfh6oiqv9RT8hmYVUNPisK6HpUe8Co553yX2apuoVYnN2ZC2a2LSR",
  "key20": "5UbGBLkCLdrWonq4Sst9G2NG8SBfuoeUFP7UnMiBsNAuY9aboEgHZssBZjzy6gTfWfnbj8GxtX9bzdfdZrRVmDev",
  "key21": "EtPL1RuWsWxPz6xEw3HLWKtWnAhiz4VTVjqPhuexdkC6ZWkZzfcYBrQvYHS36zE1fJRgZYbSS9K1Gz6qVpnZefm",
  "key22": "aXvLE9aGSZut56H7zmsRM4cRMkZ6GzBuRS1CrSYw6GzYNs27YtwoUCv1t4grPEkFGxLzfcY9mKtjKmHo3wr3oxP",
  "key23": "5TVbrC1wKPXn4E3v8DYGrUyvRYE1mVShqwMgJ37cYqqRZETQGjxZvCpbuZjrp5fCQSSKyp6iwT1KnpsLNbbaCatM",
  "key24": "21JJWVMJzJPaqjMMu72BP8KxjaTsdG6MYz68opx9BddVSrh9VgLWcLgvqgL5aDpXemEjY2V2fe1PAr8EDscQxcDn",
  "key25": "2TEnwZshQETafjAbLcCSkqs185Qk7mwqCTjZfeA2Gyg4L7YUsK6jGmZsbeoow35jQCaWrMzLzv2yWVsWH8EaDwdv",
  "key26": "4QMvLD8CGrdfjCDajBADoJaKM7uPRyoWiCkzozzMepabKTKyGNrBrdwWDQV7MzY7HK5jFqRyjKfU33XK6VyHeo2b",
  "key27": "5nkzosJaV6566Dyvnt4sRgL8CHLsn7Jk1A6LCQLvsBdNaNJ6LYdUSAhPxrmytTTRNN68sKYgjtb9pp5kRPioUPWk",
  "key28": "3iVkJsZmbsKZktVTJcPS68H7gBtFxnHzLbtnmK2QpwrfPkxwCAaLhcPgzmu4hqoPDRRRdCrMMBhFaMEAzGB3cZaX",
  "key29": "5rwmEEuhB36ekui12Xpxos17xx9kWZGn4gVF6qwKLjgmga9qCQ8VLbDG1QYqNNegBjoYVA2wgrS91mchNQZY8ncL"
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
