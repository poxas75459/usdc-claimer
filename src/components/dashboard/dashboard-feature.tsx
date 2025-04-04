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
    "49V4K7GYkqYugbVcnL35QN5HsxNauXHeek1t4URobK1rPgQrajGSsoXVF1kbAR4vwuYebXUxZxyiBeWQAbbZQFVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VYAVAb5LtxrNbkBnT1kQCfNKVRu7waK9gtKojPrahmKrpqFWRqiWvoiVz6cVWphhXtWipQgzURHVNTdfVqHcKs2",
  "key1": "39zWk2VYULgKVNzwrYSLnf2NUutD9WesNHuY47eRL7JHe4PA16rzQeQhHGfyuAFxZqAV1qpxPL5HrHh95mkedtTB",
  "key2": "4cUigJQNvAbXtPZyxPzz7rxMCQyb5hfEBydCPFAZ9kAPFTEJJ7MfLGfcpUjRbitfbrGAPPiAhNT422yCVXj9D1Jx",
  "key3": "2pEZh6WNQFq1SaKn499kWUem5yYvVEnJeafexidbxmdbqQTjHNtCjbXTX7BS6aj22ctH4LpHrzF86kY9Czba9792",
  "key4": "Z6hRMLvtv5kcpLtrf6tLwR11xPt253L6nHKjDju77MZDSeS9WpYZjirHtuXeMbEgeoD8aaPRjAtC4cLeRJwJ89B",
  "key5": "2sLFDK3ciWnR4AtBJ2GmQX75K9CsdXqEUMADiG3Vb5uTbR4EWxjeXSLRjGQiTBGBU3TQ8QArRU8Vt1y32BGEM1Pv",
  "key6": "384jkKSy9cJsV52oYJZ2vT6A69hHCjAy2i6AGDpv67WFJhLxeh3R1uo2JBNVqUhtBL9ibpGdSoeHyGkKHiNK2C1m",
  "key7": "4gwcgRwRkwDMRVD2dvxaqoG3vxg1UBVFmUNhHcb7MGHPrhuQCes2n5u5k9r71j81aGxE1E2ftYiEvzpMsuCSWRsA",
  "key8": "Lu4Nq7yiYKzR5EWGooRp5D5RgN1xK7fwk53dqKDrLrb5iwfCY9MnyRsNjEbkuGsgpTHAVs7PxSTYWRqaxt4ew9i",
  "key9": "5ghS3ZsnXosnRwrXUg9eBeoTmKDQSqAXpgxEusLuEV5KrHqQXC7NFuJTYPwB2dnL7vafkiGWJSJhgVaxcrMmQMzB",
  "key10": "2biTv9p9g9veU33C7WYuXpQFgmsXpiGs14yB7unFRWbrnuxKbKaJ2RtS2QSes9ZitHFTU6Sd3G4zrLLzxqoRS6fs",
  "key11": "2FphrS5Fj5u46NnRDRCnhsgjfwKn7Zpfdtux2zeKgMQmgVrLowneFacWPpszsfrGwDyTQUTEZcKqTB7NVAB7UZ8d",
  "key12": "3kBAxCFhww3FBJnTdsqZoyg2AbL84r7vCF98RVARxw3dwpsnAnbUY7P9fBm25TzzmTkvoXyqWvCHzSYXtvKu41zJ",
  "key13": "45Qonqbj6KUtB65mEYQhXgRBY6gUyrfh8X82JreYxogvvEsbrUikDnaSRComFFpJixiBaKk8DZg2G4qJmsY93AxX",
  "key14": "CrDR5wYtZ7bsU6Wk4uW7SqxoZktmABPzDJ5R3oQp3sqkP9GUcsrnqquqV8n4ZELWQ91qZLkPjXUgXW3m6hpvEjC",
  "key15": "5f45YnjcSVg1QqvoStqo6D3pPFSeUhSGEQmjW2VLGmPBjJAVZAydkFx9RvKwmpD344bx8F2iTa7muVbFnmSFuSXF",
  "key16": "B4t9zTohfZ6rH9pqmduvt3FUherT4bLQuA8bfLzBfoKjLeFqa8QtNPuKwfPFCxMHGTZLiYUtVtD1ocC8jPky3Sg",
  "key17": "23TLipsQ54krCacBigSTGWDQVXXdzLk3SLfFSo8DeRbbJThTgD2Q3CJY2HaHXYwT7bhjhu9DEFyAiaphEMYnRUo7",
  "key18": "5DZ8FajHUNvYCZ46fXFJ3bupZYMdu6yeR3UdyFCALCJSHrC4ohoqnRYzBT962aQyuFa9teJ1xcMtTH8iK7XitoMR",
  "key19": "5ZwgDhwRYb1VF1AArjaWNDRQJSaooVoJNTXfu8gn5Sq5vALZAARYWvP2g19bxCSuQj3XQQoWwPnPUCMGRXXFxaLu",
  "key20": "4HkGRZNmvr9tZeiDFKJ2rAhVzxMqS6TitZWeCEwwfvu9MszM3AvAPjQ4R4sVe1JozKrUo99zbpoaNkRs8SWnsEqs",
  "key21": "bJKN7CxVZe96EV2HqY9v7zaSJKZbPyBbfUM7rfqQqYFSJkdZyrGYs58Yv6axDR8io1chCT7RNnn5N7GowKdpsCp",
  "key22": "i211oV2jfMEAww2TQRX6CtpxJDD7z7x78iRqS4ajQP8qYD6cLFsMwhGRTZd1d7E2ktAYVxtdCKBydBKU7FWCf6q",
  "key23": "YN2H9eczDUKuMLS7b6RfmHvoJ3qcg3RJdoKMe87KGAcL3vuumS2TnNckvVRuFg4sX3jXk3baQjBbpgSDqQcx3Xi",
  "key24": "5mWhgDJByBGX19qjzgc6BxUJwmNMUz7ipJa3Du1W3TmZEXke5qncmydbtMaVnM67QDfQ9UGgeXvmEEC8JtdqY8kq",
  "key25": "2iKbhHob8juSfPvX3ixqM2ydpFEtjUcRnHqjhHZqwXrxPBdeQWiyazZohCwkSVS1t46RfgQFdY9JxH5D39tHwsYf"
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
