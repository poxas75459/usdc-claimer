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
    "29TwSgeZobJLM7jqNMHfUmzJk8BrNh4wHXJw9sqn3dsaKoKbRsennH9VZduuffXue2rV24WjCF4aF9xM4y5roNsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CPoPMQs6t5krTvNXfeW3ViHm61h6XLexQgjGrwooJpdmgRn8vVCTkpiUZqXuUmrTjggWyH7WNattKh4Q9xWPeRb",
  "key1": "4DYpkScgS3ZFe5qbz6zqZnMPA3twaTG8tU2szGeurZvcRh8tnw2tfrBt19mpugcHNb44qJxmJo9i2cZdA7zA3asx",
  "key2": "5fLY6gB9TSJ8G5WTgHxBKFrcPKXeM74TBJWxDQgEdkDp5e7x9SAEbXrbiPArzq99ocUXCajWo4tEUxj7sDasybhT",
  "key3": "7S6rGb8tmEho86FnGvaJt6RXKT9j4djM8XVzAqfuAJvLt7Li6oqsaSWYDjzLCHV6WpowkvT2uqhFLNCA8Ez7Lug",
  "key4": "5KEYxiAGYFwK2MwVePwfXyqHYanYvmrbGEi3aerSQSisaRFSLmf5bnBWisRtWymRc8S3pxTE945fsadZRhtsaMDK",
  "key5": "4ofHRxpe4JuKJrTTqo62YgvoUuRJW7TKkdmHVytaCwyo8kccnt6akyR4wGxkc8cXA2MpjRfehXv1kd6eXD5RWGdn",
  "key6": "2YLQPr45NQrUgt2wRPzPAqmopDrHxbetce2gGqUzoZMsnxVbDXjDBnfo1uZp9HPZFJqhjH7W9wdxyWrRbTK67o2k",
  "key7": "3yg21tEsLYAgW35qAwgyQs5pYsotwDSgCwrhvrwUKVdPV4XEfbddzgi86iCDYpJFTQkdEF5CQJDvZ525zsR2wrgZ",
  "key8": "2SB98kjk9WeT7n1kkF29JLHCke27jGaQJMF34FomJxqFjwYT9AiMDuM3EUy11JRFmHun7d2iJtNTC1CDChY7o1iG",
  "key9": "3Ufo6pAynYRxv7MeRBWyA6BcXo7beJVU3Zn7ow7i1pR1eBU8XgnxKXtLMo2HJUzVojRX4ux4zd7anrerTJ5P8A6Y",
  "key10": "S3UiGAJBXEGP7dxWSNupujEvwHS5MVCSWyp2QPVrNmDqHGxNtsqJgkRVbQQ9fuemcAu4PEV1Lfo7sRbG1ZVt7Wm",
  "key11": "nU65g6qoLfG82yGkxFa4H7VKWeVpvPFbbN1c7RsVJJM3QJQAxcjaoCJyWyivut6C5UMzzTTzbztEow37TG658bY",
  "key12": "2JhbMLTTLdDgEqbP5LYDseXNF2njJ8TqNyJiATqGkiwoMkbD3Cx9pgZ1mbCKHcQurypvjRecKBa97Ha7yqk4AZvT",
  "key13": "3hNdequDZpzpWLtDL3ZdEaT4Wy7awdHP1iz8Z1QNdHx7QweWPFpw7cyAE9p4518ot7HiDvjRRvF4WoWWNNMWiNQ5",
  "key14": "pWvA9wsZf4ya897eRGL1hztk7RcawvWcGFSbUNVwokytQE1RD3vDBEKLyiMFvhPnyzkCJzpUac8U4Q96STejc99",
  "key15": "231o1QyxWRNViHkG2oH52usJUKuTbb9VxHcGBDtxwXHr9GiwChx4Z4saHYB8oZEi9Sbot1XonUASVo9hirTQQ35b",
  "key16": "3SEFmxjy6p9zU8DMSDbWELiE3r8csfDwfqnE48QyaDuhSJu8TbMYsRvn5pyM3TUtH3Qdd1NDTHNLh7BiQotaVRht",
  "key17": "4E5HVzS37NzyUaE8v3Yaqdq6G3ECZL1N4aNKxZg2QhacmTuwckXD62ZKUfMLkU62nsFurjUWWJ1rZ42ExC5wqPLs",
  "key18": "2DBe3T9k2j8BCnvquZVFThXTn9AKgxDFto4J92JKLtz6MrYUwX15EwqeRXQxktMBVBVGtrwe9Y5iVWaKHP2P2bKJ",
  "key19": "3hj6oBwFV1ixg3JNQ52Ph5vSLhAzivFhJD1GMbreTQouyGTkwfKAUzUFbuKfq6Y6eDuoxgXmmtfUVe73LePToto8",
  "key20": "3D1Y6J8neM9dMgtmvf5dUypPSPtvX3JgChAffxNfpUrZ13X6EtBTt1B5H28j2gjkj65ULdEsV8QiBPtQHpXGaZua",
  "key21": "2U2NpUdwiRzqLUnh27taKsmVJkhH3uA6UhMWzPNoqoBJPH4pSHYyLaLc5JYCiYCVQcSUC84QNAvAcmZjHw96t8bF",
  "key22": "fjoRxaNt5aNKCwkYq2uPAtzkm6i2FJke6wx72RDBRc6rc48Cbn5S6V4D1A6D9r7Ux8tR5KphFae1eeNj9NcRv22",
  "key23": "pvVxndzcJaR43wvegVJtyx1Am4MipeXN4qfHrBKN5VqQLBACynVYuERqhpkYs1wGryUi2rosZqFXhiGiL6EJ8SC",
  "key24": "3Ls2RMZjWKyQSvYM5zzYTdy1GczDFuJfJNLcqyxonFY2ggnJXEp4646SkxyQ6JcFP48zwnGKuN9eU2FULWcPQuFm",
  "key25": "5y6NFMNmV8EE1MvuTcnTinGHp7sTjeJneeypwVMtT2wy9RtnwzMiksaBJRSxX7qYCKccEsHHNH6fMXSgRc7nWVKu",
  "key26": "39uHWtyFyAcp5YVmzPfUfmTpmB9d72Q9HSdA3oGXpw6F7ebYHBn7o7HagiiGsTSHpYcsu2HBH3J3kn64GHvQpSvi",
  "key27": "3sxKeaJN6AesaWeveTJf2b8wjamcLV84VxigCTopHJNRZ8EQVc275ESHWj7tVyqsQSfaGEA271sySH4ABGZvmgpp",
  "key28": "2xYMn9iKfQYaAc3NzBZBTaHYTxhtQWTCZZd58GwPmXQ1Lxkjsm2L75u2G7UXHLiohh6VJvkexCWudWfSV5GxaLuL",
  "key29": "4F7Mou4Npae1ENf5ruLFtdXsK81WeAmGidDaXQ2e87tRLYxSWpNc7F8J2N9qVR2kJuuwEe8dj6eiUWqVWmVW1xMa",
  "key30": "3Tx21tpgThRojHVYK3iVP2ryrp5zxKPGzSZgEseFS7BJ4bjqNBqWVsXgr6nFkKE7cpvmXEkrHc7aFD9zmLFNSyR9",
  "key31": "41KCRVcCiyHPzf7dK7sU4GmpuyveDZZUkhWn5etuv9Y98QxorpEifYHqaVqqSHjJpVp4qu2WCRoeRmQnGebJLqNc",
  "key32": "2cLRsb3gvFAVthcyMEVzRcpqefsVfRun2aMA9C6PB6PJ5toHYU42VLTnUqaWo54Ggu1XKfDNcFo66F7ZFzjRd5HS",
  "key33": "pMi4x5gGT7uYrD2VmVhahpdWnW3GgwgxVReVPEdPpKksQUFPCgZFH8ALT9UvbjSQ4buGbbSqtRoMU1Q2n6FJSBJ",
  "key34": "255scSLRcDzYXnTXLEDRyf1GUJHcbW9wxrW8aVZsJi6NpKses2BdTWD8N3AcJj2uu6BnoebM1oRkpjoZaZmjCFqa",
  "key35": "3jQsVXupwc7s74sPLaXZEBrnnTmxQJZ83YgtPz9ESksaXq3bwqLgVvEfKepEaGYwiKTERxmy7yfpCe1fFwXkCPFq",
  "key36": "4b7enNaT9qLZdNdWYpem91dGc9kCwjkvy4BKJHifrjcQtPQP17zaK2ofqY1gtZMYSiRUwvVWVnjUMoZVsAH64iTS",
  "key37": "jCJW3rLb4dtufi3JMVTANryC2RvdSnsqqoLCLujgCGnLfwU6dSuHTh1V9GoRmRQ3mC1cYr3W5SP2M2qS4R1jBDW",
  "key38": "3AT75EgQXdwddwkpKaihc6nr7Xz42cC6XjEPyb55kWpGDsPCU4zM2Nj5uBahFj3n4BQbRk3TgB5GAjKjFotuxCUe",
  "key39": "2q1TFqftcJbrDEWYTcRshZmZKXzusDRkjuzU6t7H7JTGWPx2bY59GQTbK4WNTyMm1RCu8amjmXFonbnqfMMx1HMn",
  "key40": "2En5KtFtrUv4LSYbs2sFDjsjvAoaBkWtj8pYehYPMYAfGoyjK3su8UZ6w7QhmP5S7MZxi9ygHuLRMBRWW9g7ZgGE"
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
