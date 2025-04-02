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
    "42QfSLjQJsQmjBiCMeNAoomcwr5XZ4DL2S3rQkGQ3PUHpbQ9ZizHFTBv3PMNAJRkCZgCMwg5cpykbWdKh45knHk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G5BwvVdikL11Wu8tfumqpzt3sja2D8QeUTzzkGntPhz241CxAzgHM1LYAg7RkKntAixY3ET44VayTZeFZ9nyJtB",
  "key1": "3TNR6gqEAGZsCqBFXWU15RVq3n5FprndqgAu8RWc34xcfWsnioErdaTAe7GjDJEcyqxgixKN9dyTQhuygMdYFTwx",
  "key2": "dqhaQ1CTXcXYcr135GtxeUjbFSdG6VpdPs84DDZN7fpjdY7uhyv5hwwr4Us4iBfn6QVwtxBisis7p6MxKBd7Gq9",
  "key3": "5hQDXqv9uS6PtYrtqrsQd1qwY9D6CbcNPVGqS1NxzmJypMPGuspni3vkKeHSu6e9gS9zwS21y1MQNAmBVU3MypKz",
  "key4": "4aWaYh4iTsxcTPUr8RF5A6tnrmiNUMcwwdBxdarLQ73VJ2NNy1ReNCPx4SoYJtrCPXRkHvnqSdxsatVmYQbbC3Ho",
  "key5": "2Ax1LKb1CmJ3mJb9yE2dqieQzq82tDWqSxPCD3Fc8aobjFJMgVp46zE2V6pq9U14QbCGDCfNgZzzSgPPzVUWKa7h",
  "key6": "4AJuRLzGjdiyxa7rc8ynRsjoMgvWvjJ7pp7BwQqL3c5TPT8h61GxYK8hZmw8RvexiToo8vsZFJh6NWVzhfhdxvAW",
  "key7": "2ys75YHkYrBvEfoYWhavC6ZCHbb3k8p48PWBhaAsjV7oqKqME8RVZkGhQoSV7ZjEo6d7yJ57HUNngzKwcvLsjr3V",
  "key8": "4Uzgu2HXvcc4num7RXmgA39A7hPxfomhPi7nkWu3huTFaqLRrnQvygYLN6C6b459xpXDCMyPTcay3jfWBiKnFHTg",
  "key9": "2pAHPjc6enCxtSsVGWBe7iy5dsuhN9zFmAaV5w9oWToUKgYVHtvh3PQBV9GJsBThr3Um5RnnWMEqJMg3mDBt5VJi",
  "key10": "2WrD5VTyKS1bRtTekdUccKqMoQrinBNnW9DfkybYJnV3EWNSq1Kd8mrzVTKbfPk3axHc3gNBX4YhwL1xvSgURk3S",
  "key11": "384kGBrd5ZLhKyRPZj4v1X3GG6wjMUvusJjZVc1dGBrHuPu6jTBY4iPSX7yadXLc6xnZ22ewB3JXKafNSNgLthcK",
  "key12": "569SotaGUYVUrcPtFsgYgUhEuvmdfjhvGQqvyvpMvZfasDSrHL5yQma6n2KXPKQVRDbEvUUDtEwrHRLeb7oANUzS",
  "key13": "5Ga1LpM95RWRukhtjGhyQQT5rxLB2UV9qtGjKGDtP9GRFiKwgEmu2mqwk7P9MMjGGJMQTVaqbcsEskiRz2Jj1gdR",
  "key14": "tcqNQSSFZFHsi3SZX18XSpKnvCWz3UtbueRpAh8v1u95pwRpaJduJmmsq4BusJtS8bdnMjmMJu459QdZnZc2LxT",
  "key15": "4ogXBst5RJRMoXQM87Q9GfifA3THSmwKJZG1WzpLwBpFSWciK4xfw4NbnGkSgURRuy8SJYLkLviCMVWYu7J5fVqj",
  "key16": "664YePQQiXYXoAg8Ngz2HZvhLkKQvzFoDF5rA5r6ipwuCUeuDEKK8U8wzjRL8mYmMYpeVQqmnCrdja3bfaEjb9UG",
  "key17": "4oFtrtsG4EP3xDjhWz1KSQW1ABMNqwkbn66Nmf4rfKHm7K9wpBnDLfpfwZwPfsbGyBCx4qnDMg6ZsYHuZmowfnNs",
  "key18": "22hvb9mEDj5TPKT1p1XX7fz6ZVgrK7gpFJpWtPUMmYMC5eXrcU9KA76fh8aucp49Q15v3xBX7wuieB8Zhe1q9v2a",
  "key19": "4qd2bcxEsG5eo2SJSMLvbesfi6x7BS9rCC7VKufTtaspM4wJcVCLYjNLeS1k6dPTb9V7Wx4jzvtBYtHX7w7pYaXd",
  "key20": "32fvVNpSQsmQqT6yfH1Wi7hdeWNPBmh7hthUU7D2mW8wW7e7sGMTKxMZfYrQCycyLZUJntXT9ox9puDdsfxqVura",
  "key21": "51eKaXcz2s6taitViSLNyfwTKLWXpy8KBpX1ygXR465LdPYmdSZxG5nTrNt1EiaCFhU68pwF7iXUUDQTAG51sJKb",
  "key22": "56KrzqA8FAHR53arDuaHB7TPhTPryFcgZvN4TWKTX1JERNcjPJXodArY8aHryKt7WLmEh9bY7hS8jbCbEdtsksqb",
  "key23": "vJdGackSBeBNJXBwPjHohujF1RKLBznNNJJK9HGakoUNntcbWw9xvrHfnrzm2HsokdWtGCFEgYG1mM5dVA9Ujhg",
  "key24": "47BL6ySaaS2YJ93DxqkNQFJiZBErLAJKxXYZi8LHUTvvBLfWFttuMNwwB8b3AjiqJzL8GZoMLZNrBeK3ApnbpqJm",
  "key25": "2JP4pRQX3Xw8T2jFgGhiHeUHkUU98g2zh6DtFEAhQukiRK1aYJCVmzm9tJpr9pHutgSqzF5beJFZGeM3WEZB6igm",
  "key26": "5TKWeq5tDUqF7CpckG9jhss3EYxQzpoKgD2HfEtUkex48SqtqYMa3YpufQhVzFPK8nHckTCKNiuEci8ksVLhSMBp",
  "key27": "3FUvQEQuBPmsqWvwxFQm2fqnyWeeeMgN9M8Csybfts5SA3cYqoekHYDmPhR12xkpbyBtdtWPKrPVdAR84a9NNHf6",
  "key28": "5NuJdVrgdGFwvYAigHHQUZsw8u13KhAqAdSkFrKCuAsF7aUMEo11dDhH5eKfpom9nURRk77VKgK4P5oJkT1MfUv2",
  "key29": "3hGM4cwE4FYniJwLDvdAsH7xvsPDsbsXn5N6KzSBZ82ZM8u6nukTM1CmeXSN7PcjjGBXSRM6LgXqDum5dCM6bdkj",
  "key30": "4dRwb3F2ydmb1XfMyxase2e9tpnXxvUharmFMkwBGFBH4JPPFh9Dfjm3wyBdvm9Q6RPH8ULxpj3z3HxyYbd4cUmK",
  "key31": "3vjBZNkBp1R534MvcBG2fMVv4vQW5rsJqcJ9FtiStYjJV51CvZyD8SpoMergdNV8Hsaxiv3MPvtnsBhfrDp3NbbB",
  "key32": "2pxE3LikyX74dWihfYZ4F96RLzBzEgTy1LG1QkgsE72vwDMYWzBDtYGs5PaJqNdCEraDtK5Ey4C62RvbJK3LcUz7",
  "key33": "2e3NepXAxjeHwPyQbcMSsHenaeWP9wmUYM1QcnNnwxqbztZGauCZqy2cCtnYfZ5gDqhJa1VGPGZkWr2qfhuaf6U3",
  "key34": "2wDBeaheCLrT6kgPuRfuy67uWDYF2oqDGWqRMbTrGdetMH2pbMvpSAqXc83az6RWfChoZJR7hG1aGhawSu5RscZ8",
  "key35": "2yiZJvBhnm4uMzLRmirHF82Pn4Qtn6Bo4ypbHmag8Tuuy2c5HrhApz1n6mzdrL5hhDsB1QtzoXJJb11h54MqvDWT",
  "key36": "3xuS2eMvykBfjPBHSnee8C5k8pVvEWSoeAhre8iDJP3dHifqbt1QVGhjd8joJmsaPPzHq4i2Mg6s7FWHkVNF4Wqb",
  "key37": "5TyWj4H1oFCvpAZNgPoqctvZycVkLKPU6W4kFEygnzmwgpPUWNWPtSZj2NHynWRP5BnvedUeFDeNcB6SteJ3t6pU",
  "key38": "4FFLkVpjEZc6FvkpkHF3czn7j66P9PuutA1Gi5csBAw73NSwKV9WjMcTBbGeJtD5Gn6Uu8tbZK6RDfqugVU5fkdR",
  "key39": "TWQ44cTopT5MPULoryTxdunmYBNBTYu33cuZc21qxRjv2LWXtgwGiWagnfrxtvXTUKqm56Ft6CvwVbtFWnXSKbg",
  "key40": "2Fgfw6sGjSfRuszRTG8kaSR1i1opChAbZYKBQJaBMomqX4daaRcRBA1W32QEwa8FfmEuzLeiNjBmc4qsSpjBmvHn",
  "key41": "4P2CTq1xTCqF8fNSBm3attvUr5SSJGH39rKUVGZbZh8qtV6u35TfRSdisb13fbGneYxMfxvK2uREdASvAQHT91V1",
  "key42": "2GeKAwDbNy1a1bUiCZz3epShRUttkAQHsVCkHd8GGMPSksjDz23XvH8jC7NFUpY1hWk8rRpfT6pCFNNNB4fWhec",
  "key43": "33TbuTuTQ3AaaPa7ew2e8q7C5AiZzUJMxMNfKZ3ye9oaX2N6Gva1DmmLwPXyDwQKNJKvsTE5GWeqrLH661HEyB6i",
  "key44": "5hscvQywErYfV1cKGj5in9xSjmaXph7RhxhE4BtN134P7aPrf9ZKqeC7EjdTyQA8PmpFZk2sCZ1JBSXR8Qa1gagT",
  "key45": "4PzgsX6c1xxiBxGM1GhRyq8P1FFzdRRVGPd6CNLV7wzVmshu185Akz4RPUMfYPLEeYsD4pT7VKtV6zb3nodLCrr3"
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
