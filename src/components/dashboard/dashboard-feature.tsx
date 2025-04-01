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
    "xEBsm9FyzSVCbkAQyxrJrypaDGWziXxJSggmrcnzAEPHeK8KjuM6YhGNE1n6xrSsjfQmRDF8vSQa11BuvEDzQ1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1PzPKYHSpTo9DND3C6H7njVeRDwDjcUmV3t5NZvMB1KyJLUfap7pwbi1RDHuk1k6PnqwZJwdwBokZsB9oHyoYph",
  "key1": "4j2tfrirUk5EUo4gand2mCw3uzubWZ1CwF6Rx42Gbo68pJknE8VicoCUqYoamEmjNFKmr8DCM2TFNAqmmDLbetaT",
  "key2": "2ZGRY4ErwveikQakeC5WtesFvihP48SCEkTRoJvqkYDb7isZHkbTUMZFndGAaWg746UovaLgn2kHC2MMdcAhGkeQ",
  "key3": "5c1jb52tq3kJMAXs4LmVJafmNwSmmuQWxFEAMWEX8Da5odhXmhWdZqtzQAd5PhjbYK2tBL4DZfkeDtuVjxMXTcfT",
  "key4": "46WUDAAA7yhrT9YC1kPPJsn2415DgxVm6AYpuoC3sercqYohFSCQCkY2d6cKA5yrFiAqFu8BU94aXbPupYuVspJT",
  "key5": "5KkguT67SF9NoNUb4SS1AeWf5MNfz4YnzbgSE3kf2ghrHcbViwv2MRLnmUSxi5vZk8TXYGHEka2XWPfxyzF8qwRt",
  "key6": "2bArYg9He8ZAT1LMBikc5THQCHXqsiXgBfzkztE8SCRmVp5FKd9DgQyKjes8mY9WA3zmEHh31oJ21dxch3pMJKx4",
  "key7": "QKdW2bxeDbcmZvv9ksmYoUxcxgcDQekRTnNUxxS5HZmSVd9BjjWkDnyXiD6Ytwn5Zg78TSeRnGudvpWZDsqQxkG",
  "key8": "3fjWd3aYpt6etVhzLttunRfFXMG3HFQjZhxvw43JcdshG3192fUeBYB83XDUXFPpHAWqz5dNTvWBDoEGbywfKSeS",
  "key9": "2U24zNDoCE1rQNRjHtpD9nMQdtZp4dsuY38m4stD3MgYVi52JpzRm5B8aLaFEcRpPVSBSQ4CGqTVPuzT1LYK9XEt",
  "key10": "2vX16oMi7CvL9EwrG1V63yHjytU4T6hFkVHeG6bRNzAvyDx2QnnFRyQTunY9bjD2VW7KRDPHS2NcCqYNiPHEWgqk",
  "key11": "t8joNBeNt1VeqH5Qq2LjU7TxMqYqqXKqBuvUAnHEjgtS6xjY6ajzyYigesxGrF76xCo4AYPAroLiSTCHrQjFKqH",
  "key12": "5qTCo8wNhKXh1mQocDw8iCaWPZ5X7YsBXjLVCYMEGfwgz89B3NXeY64BcEGQExwESbqNd7rtsdgqBfisfHToZtrd",
  "key13": "4fj74u2dcg9hbj1sXgykEiSS6LFdfSBzxLGtUnBMA4LNkenwUUWY5i1FTvRJbGT9tTUzgedgoGNZEbLoRpJmff9G",
  "key14": "3NcpDKkJjboMWg572MNxFQbHLQduwnMztBA4oqKs1VVEAcf9to2YU39ibvWWUvkmyFLSm2UXuowZVaKq7hKqdbrp",
  "key15": "31h6n5ya9HzLLGxcxC3M2qHGCijND3b2NNwbrkQehogDtgHodYwFELWuRPw7QM9Qm49HJRwDbDm62XAQ6ZWZ68V7",
  "key16": "4D9QVidFX5dd5pm1jbJZezSKyuEttyBEHX94fwo2yxYAtSfNSph4Mjy7vky9XF2QaFwYAAn4AF69XZsEkcid2iEi",
  "key17": "44WEJ4Cr31Xy5Wa4fEQVq8dtZyhJeuUKQtC1APh5vW8hHZXrqym1faggKMaBGt6yWLdCCA9gpKCPubsXscetmxP1",
  "key18": "65sfdKP1xEKz4CPuo6rWdPYE1aVEiVp8t1h8tuN3dqTd2qMhJ98XmW3vcAF4Bmc7rFRuoneteaWJKeAXyJ6FkCFM",
  "key19": "Z7Gxq4sKrYgoqUpRMTExf9Pr75EDhSNhtTDR7bHQ8b4Sc8XTStwXnumVdhP1cMLU5mAheT45uhiwtxKu2tciUZu",
  "key20": "2kHDzutBjVsNfkd7mZbVHjSYTtKMm3qL9pbvNBSgMTs9AU9DNgmuHKEVzdYVA7KwnR9ertbyx45sh1tzzp1eN76m",
  "key21": "izYQiNfYrqPiziGqwXCyJexwpSgt5wESYZoDhVLyrk9k7nN1TqcpzFwQXpESPxqcaVykxyrFBxBFTT2eRam4HM3",
  "key22": "2ErTFDMpxD9qhqcgKrKV51Mz1yV4JhoFjFXKrzXxzrd9UEBe4PnYnmVAVw9CeZfsJbuVZL61WibgGzv6CZyrXH34",
  "key23": "4B1pSw5EPbJCYf74v5YRHF2sEnNYxP2iZrrk7yraBiLHpCBbbxhFraQjBKycBDPxAKmAXUvFg5hat7TDRQZMrfnb",
  "key24": "m5h1F51diLfKTa3U1oHqdvFiQeofKSCB11fkRhmTMGExP7rp9zpAwgzT5bxN55EnFHmVkL1NaAB5DFpQqmQ8Kx8",
  "key25": "omBibaV4E7tGebjRDkjhvEjqCdW4NZePHCeXGQrThiYfRMYzYT2tXhgW2ThqGmTP61sYsJnZoyDNbsZHcqMnNjq",
  "key26": "59bws95dwLRNmbLyxA6p6fekvTuD6EcpvWd3qzsfStSkWZsbzQfzfnBjFvrQZ8Wa7Wu2HjYPqFNP2QPSvV4cVzZk",
  "key27": "565A3qeFnDPPYtzHStrLxXknx2BWf2DRSDFKh1gm2Wt4GeGxzfdrbfakvWJ4vaeuJShUhh6BuBYaHozGgiyAtBR5",
  "key28": "rHxuHtJD1VJgnFRCXiRLPU6ssnjYB33WKPisswHchFDHYedBS1jCNUcr82SD3GrYEfexxQZGWQs3Yvtnk1f7p66",
  "key29": "2ZohsGnHTcEAfzv2QJWpAkoRVReY5f4bzwXiqAgZUz8sQy2SSm11FacwxuApkk7UepBVQKoMMuoyMjfCrTJ5kbqy",
  "key30": "5gYbPKWc3FU6AsnW4Y6aY3h8Tja4sKgiYVm4y7p5eYTYc36RPT21JFb55kHhDgNNm6PGzDvttyvp1TdzusK8vKBh",
  "key31": "d69gNKmhdN6Bv1taRUMcjUrDzdrAMUbsrYUxacuDZYsZ7NzTrYMNuZdDuPTxGtcZUbVoHWYgimD9hJQLZ4E2jV9",
  "key32": "qe6npmtiHs8op96oVztrEfGsHw7gcRcAMANjFPCvPrZW9Y7euLBMbv88awZvTkb9JJfucaaU9Tppu4rMiU5cLpm",
  "key33": "5wVv1qBFkygvTxNDWVjVGY9jrA3YuB1NjMFx3eUAKgyMvjiniQwh23qznYtLbBrg1p8w2zvv4GRLV1FeGZjKpKe1",
  "key34": "2P299QQ8ytzifCJxq1uABUAgiu4cjhgSJb4i1SGfujDsVh59UtDeQanqZ8WeHFDX9376BSYu3ucr4qw7YRonYZsg",
  "key35": "UCsWX36oN5cd97KL9E4b8FBUG7UGks2UFCdxjEpFWRjdW3Sg3DA8Z6YAKR1Y215ndn17CYAjH8tGnscPnUAfwRA",
  "key36": "ERASP5zmFAhTu6ZqgMsiXjSHMURzD4oQkgA4BNsppXtyaZi1AA4RepzRXf4FXzqVsi2QfMpciw1cd48muampFAn",
  "key37": "2GptvySLtuAQxzQfAxERQHBmdYqjYHqBuHsefdzCDtfczP5sWoXbZwXcGWRa4TQWaqbMyDJ8Qd4ExN72o1dxAXMR",
  "key38": "57u15YGBfAh94XE4zTRDCrX285JWfDKbNQKS6foJZKEj8NuYFd6LrxyN8XqjGATGTsgMiVW3HcYALiBAMuErS62K",
  "key39": "3TEm34GYSftF9Bp1kK97Wt7R1sHFQ38sY3wNR31GcmPBGzkMsWc1Jy6LV3BuUrihkATGMdgQEmzqLSqeDWE9Wiyi"
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
