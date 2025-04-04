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
    "2RHnV83rLWqTKKmpDwUG7aJDwDb3hgzhgyo7kBhm8daLQqRGJo4VmdCenTGc19oesetWoVXRHwK2xjUYt7tKn1DV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MPotHkJNeKVE8KvFuZBeuZ1vMmPWbZVFgfWnMujj426mNrMbAjvK4tfypMVdzdziNdUSFmTAcirb7HsLXnbY9ES",
  "key1": "5UMHwE7V2ziaSXjNkTLiLnzR6EzEJt6gpTCHkHj19aBmqvvExpri4Q1TUSZGuudj6jSFfyFPWrLTg82fzsgjrfZy",
  "key2": "4Kd7Vaubh8HTxKfS1L21x9uC7yQvpnV9b94cVHzhSu2WShuquXp4SEdGxXfwGXrVWppmYXq7Ukf9fWHzWuXT5jEV",
  "key3": "3eueZsJtRR3fwQUAsJNfX9781UwgG6bmJawTmHbvQvrdVYkU2rGTCtdbJvDDQ8TNjwaSSkcgnMY687n8GPY9uURz",
  "key4": "4UuPpA48tGjDMaRYUBcYz6m3TWQsKtQ9LoGdA1cRPh4dTTYRjqqRb29oLanbgDJLygGCywF3KgPo9XsPH9FQEnT4",
  "key5": "4y1MoPZL9LT9U3bjuRBA6v96U82TttDz1YhxccFAK52JD6N34ErTqsFX7jbdxfqo3r6by66j9B22LqZtijchP1rS",
  "key6": "4GeWUGKJHt312Tsz9hihMn9fGwTVXoHEJBFomEXQKg4tBsboeVq62kg5d9EnDN2tFhEGkdgSvcaGXsSTpvQjvzne",
  "key7": "2TAibpcLXB5MogoAoz9gVLjjo7uFJWdtrcmR1ME9tFUDFyuUSeB8ZCzqYTdtQDCTywqdbNNNbcmRsjKssT1Suq5N",
  "key8": "wgmJV1iHEVaEadcaV4FSqpGMewC623qouR4CDmNeQWuwzJD1orcp7b7Ye3Q9WHh47PydQJobireenEekGJQDnAa",
  "key9": "mgHDUQjnp1C7coYp93J6RjHyjydGEqi1tCSg11UWwdahtLWZrsmFYiB8TCT1H2qrCn7a5gxk9CsUTd46ftvS6Dy",
  "key10": "2zF6Uj5aszfQsruwSVYCEbVLNaZm4EdaMc7rk9AJmSqo8pTv3LPtgUurRQBRDcanQC3dpEb2Q9MFq97iHKgp3PUQ",
  "key11": "hGibfNAzh3KA1ZZCbAo3d7KhxJNRcnrW9GCWmfkDiciuyFR25VmA9QPtjfVrSsa9TSU8F9TpDECiwmPsnRV6jRm",
  "key12": "3SMTsywCNYPvCQvMm1QnZZG5Rg1PKPxSJ5ELzGyUQVY2PodQJ4aeqw97uomuiG4vGKNtRy3oWykAzkCNiU9R9MWJ",
  "key13": "37GgN8JgHpG1HPcYKYLzW7SwuhQUb7qKi8JmP8Xg8Na8rwKobc5xcvXzjqtPQzyRhH5xBF52r44fFNmqeYSuBq6R",
  "key14": "4e9PmwK9T3mLfaaiQcMYxCkmJMexPNtzbbzadpLhJcodfY1Df9nbzXFs3DMTurPmhwrnfQob6pUweuGDVPaykvbr",
  "key15": "4pQMTE85ovKH928eyjCNWo7sJ9RMmp2MEWzq6PSThcTKBK3faX2HvaFdRYQP8ooQLxistUbTvyaPTxjmvR9N3Fhx",
  "key16": "4vAChuqQhnEeJNAcyxW7AZo3MVZGyNqctejRN1u5ghJAm8PQakAkDgtbbLLkQuhnchYmx92SG6vcUHRqAUR5z7yy",
  "key17": "31qpNY3x3xJuLRpsurK4HfPzNrLLok3NnEuRCNDcwspqR9yo8QUz5bKginLon1wUH5Ek4r59prJqVyZpvhZijEvW",
  "key18": "5EHH8jX3pqsATDSqD93cH1KPd2Gntf7EpfMg75zjvXAxxUZwfEE47RvdGVLGXE54bMsrEfLFDSH1dchvnV7Sc2oh",
  "key19": "5zPYDxxPjVaf3JQXN9fgTW2Lh6FScaPCkQi5R3nqncSkR4fNQwkPMMexea6P1GzbLfLDPu2yBLWriEKvkNDZJNJs",
  "key20": "4FKjwkxvAYXjAMf6qJLiDGcjd4LTraMRgR57XFCW6SYjKaWjYgLoZx7bFRuncsRbR6A6rsELpLBMRWd4xpCbdpN3",
  "key21": "FcmojnNXazs7hfnVZUTA3uNNbcXpEku7pCqoUqqym9YePRti7P62MC7ABV1QUsGKmrSw9qjDiU5384pNQM8jfZp",
  "key22": "T2PjiZvzpjrTMJvNsx3chtKTUf8QFXvzSHcUMCQzoo2zuztMbh1YMGao3X8u5e1C2PLWU9RKe74S376mFcBLri6",
  "key23": "3itAkj9wJQ5VT3fo6q9PFam1VqW4ZnkgZMCe3nu5a243BFqn11mLJF3UU5e6oio6inoWvWRUkwnT52PYGGuVrnDi",
  "key24": "4df3S4j38PkBijpNwgsRkVhUS47TowSe96Z2uiy1K9tmdi5VnV8zDZ8mEC9NKzPBRCaNMEDM2PooESRMB6kxzEi3",
  "key25": "4eVGawmzPQX3EDskyesCTDfEk9HQnb9KDxdBip7m7jQYTPNEmiWERW5cdozAVUSR7gtqhNuWhHY8McQo8Eu56mvJ",
  "key26": "jv6FdQ4Bjt8aWwRzQdGpJo2SUFs9Ez8Nb9Q744c51eRtYUFsV42xML93C3iTF4dwERU78BPNbpyBnedUP1c3Gwc",
  "key27": "U9T3wYRw65T1yGt9G989rfx1LuRovSammN4YA3jwvasWAUoa8crvT3NB11hCRReM3qaT1Ng1z72Rfz87aYrmqu7",
  "key28": "3HrBAZF8JL7WkERDdC55hPUZ4tNpxvzLAcReRySrcvs5q15Yik7jSmQAQid5Fqoo1V5Y1dnE5vFWJtmEU2Yo6i2d",
  "key29": "GvDVz541PQVhsJqQ53D35pZrNLAFVCYkaHzEUqKzWoWKVNrhE3mAR2ai9aeAvtiZDLnHC49M352kY6u4sYaojnJ",
  "key30": "54ybsvhbKeTe62XF1kR4HRmb2cE8F6KD2k113R7tTMWbJerHrNVUWVosi1EpSusorwYBE9C2HcVgDYcg5zMJw95",
  "key31": "5eKcTQTqPRrzV1ZJFVKfrHyCUMUa5UETDPrRLeE32mciwCATtJAsHwusvR1qQFVNLggNSXzwoKVwVZ26nt4DTo6U"
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
