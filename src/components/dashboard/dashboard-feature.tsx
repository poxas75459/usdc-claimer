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
    "5JF5v8DoGMC9vaqk9wvVS8MKw9Ukk9UoR7WKVkKN1LGverMz2kcVcf82VqGsdUeFyx4jb3NBsBBJaAqRTXhrQyRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p645QqbcBvsAbRecFH6H35dxekoskMpSEpCtXiLBAQZnctsg4Z4w3149Z4MPM6zac73vU98vrCe3EzwY4r1duTj",
  "key1": "5GFoLG4Njsza9YXweva1b4nJNkQVVaDUmU5LTBhu1qYzbwhioTQUHtZWPgXfwAw5erpMCNpD9iNDx4483vetZ4CD",
  "key2": "3yRDcZWBS95vmKPxR3uHZ6d98LmD8yr6k7QWgMcfswaEmmryxYs78bz44Fw5Hf9La8JZAcNyk3D2zpF13iAXBB3u",
  "key3": "38mnuEsSCutvZhLRccsxLda8ZR7gEkvQ8xFEV1XWRyujtP8hWLbhnfpPnmKqkq7ZYVKM3ozGqSqQVWYrjipXq3o6",
  "key4": "4Aq5Krms6b2MEeXky3pR2nT2r8UaJyJXzSEPMp6FpeqYCwuZkbRDNi84kYrRP1XXDmZ2QqZahRK8YQrPVqLVTbRZ",
  "key5": "2J2L5Q45yUXrb3sPVkmvwT1meNEJirtBeWQ5DbGFpWA89z4aeCjqPzayaoti4NbJaydUU3zMK3vkhfuU4eLG5yNe",
  "key6": "4YaE3b6i2xCLLTf39uyVLGeR8KgLYrWbfJKmtahFn2TnMt2iq3z6aMmyYvmmzrLnsW1MSEqN57F3CMVHRfth56RL",
  "key7": "5ZpBk6vVSgkPZwRxVdchmXfKwMfuPNSZmhDh8sjJKpPA5puRZPQCkjoZ6TbxazphrbcwNSwfxLKo2Ww12Wb9tyyW",
  "key8": "2BLU6bq9hsmF2WpnR1cBoKQfhrX9nW7CFHHeCgUrdecp5hQmYziz6mozNDwchb3DL34qjxFfhAfYMxiPNexBKrGD",
  "key9": "5tfDMmBi1se8UnF8fBEw49QP2JEK5v1nH3xEv9xP5C7WvSfAwGCqTmXKvui42cqxAUyvbWsuRpxEHwEeHKqJFWE2",
  "key10": "2kaRi3qvCNXR3rRQ8KLXdngHAAqsM1zppXHHJcygSiAzXRgpUUSCSVUBWYPmACNG1CCnrXJ3K9WmXENqn6QHnhxs",
  "key11": "5f3JtaeiVNPzB7qMUDns3uBbdTXaDfTubA9y6FkMavEkazGywW86ZMMNwT7xqwy3d4KU55pHpMEpvmAwcBc54eZX",
  "key12": "4ed563Aiu5rA6DMAumo6eg9nLGeXNRwnagksybqWxf6gnMqjNN6XTN2EJ4thgZX6b9JHa5rWGw57W23RAqHQFr1E",
  "key13": "2e965tpnTVb33YLQfTXrGZtmX2DAJqeAcEeBrjgVdo9d6Kaao1nQGhsNFeVbjm5p4T7B5UG48h6LbFe5HCARvpjN",
  "key14": "2izfz7d3fzvcapaqPLQwoukJwp8PgR5jjEu3xu4js7JSxE9pRVuLbKz1r5gVMHpMXEjcBBFYP11qqRRc4TKuMkvp",
  "key15": "4TYF9X4GS7gSXWUBcw4H6BfSfmZZvWAnLvi2ygNZXDnzoumBYhEEjZWVUVSk4DHMkLyoNhfwTdS7WXfu4BvNQxqq",
  "key16": "64odXvsGFqe3VkQVhZ4XPBoZPbTE1unF5xjCRh4emHqtbS1NZHshoJzM6QqAH9uqg57Hg1qC4QuQ1ZjD8aE2rHdo",
  "key17": "5WTGomX9QCQeHpdqYAFTWQPv3Qzov4wyqPhS99jpNNYCQszkokVGNHhBExn4vRMMLQwjrmReUft9ZnxBAgXe1DNf",
  "key18": "hCEtEyaKYwz8BXNqKiX9RpYBCrAxXgpxgTE64WePF8Mdb749sjWNqRoadi6awYZ3WXmZJLKGCztMRdftRGbD4Zd",
  "key19": "33Jf8fsXQ1WLwvythmjCVjSSaUrL2yjmvCpacULaTwMKasRaFgsKhvbMUX6rrqU9oGLq7ovwBdLJpDjrQSY5sX9F",
  "key20": "3xbPocyEDELcygeUDefezG2yfurYKJu8DHyu2LhUkamUXyioaHQ64k4QrwEFW5w2se9aZvC1ozQVR9H8wV8BzcJv",
  "key21": "3dHqdqj5KzPkCRSnpecnSNT2gLXgUz1qa9ZMx4S8pQdTs5ma9yHBVsNuqKGtuQjia7PxMKx5DiQiAVf9sYMqdyxn",
  "key22": "CuaiDv8uxqbUHdgV8ooyu7N97oydcf6rXSji1XwruWKzfgU5Vq4fZGRuYDdKKFEqs7KRLFeebm8G6kSQvYS36Ya",
  "key23": "23FjL1Yp2iEq67gd1DLCwNQohbhHpxbUvKhRNA7Ay8PprUkxjXZVE11tkdo8zY5vsm2S7gGryPY27iZkwVbnCNUD",
  "key24": "2B4ZAGCAy6irBTJ5a8zgP59Uu9fQDnkpo4XNrg4dAETsbGBU9CVyKmkNpnjEmnxP5Wbwm7Aba9qkckHNCDbVBku",
  "key25": "4XoRcMpGUwCQSBaeVAQvRYr84svA8APiyLYtm4CMq5gzVEBCrWGC8XMkbTchRxNdNSMZpHH9RVQTQuwfPAniBwQE",
  "key26": "5iL5nNejdKWkZxU4t4phik17nmcUCGNX4ypDVsdNneusSTj5h5oqVz515deUBgGHCigen9X7JYmm8QcxKNqoQb9e",
  "key27": "rCsxz4Jce6aVc4Vsagq3DQNZ2MXE2rBe4wgMHaHnv2qfLd38ZfYp6vXLKYSkaJn22beEB8pVVoeh7hTc2AVPZwU",
  "key28": "4QVwyvw3jKiP6kdMw8anZL1T82vFSZ5QTTr2ZmKhfrYfvLMhKMwGKSu37Kzkfna45d9Mk8osJAJSV4or9CAVj5b5",
  "key29": "2aWexHPnt1bkkNNUkAuFRWaGsVeLNKw4cDfKpEWMGCqsCa5mFuHsXfG9tvM2J38iEnF5eSohhHoRqM2QuVHsa2vD",
  "key30": "28saBCFeJ9m9ycDHCQ7AvMurbPnkvWCkrC3BQKUkajTJmeLYj5WXmzMS6oTu3kRoftWnQTNLRYKq4DRTLozuyoPk",
  "key31": "uQKHzSXGe7vRJtd6i6v92XsJJVPpKheuveQR9RT13M2Nh1ntSRgzrHt1etArejmobQRXSjRsaaz69iL8rqAi9Mm",
  "key32": "2m5VsZD2wWJtxLgUCxojZ3yvwnq6JjazQZcpyx1XWSJiDPeeEjvwnkprWR7Uy96mHFyjezgRHKWeCgBkVCyFnuH7",
  "key33": "YURX2U3TgfsKUZt2DQJni8jKdtdRU3fPZ1bqAxWdzmYvY3RJcAm1r16SWmAuFAtMHBZVtPgTvYTCsZwhYyX2GT4",
  "key34": "4UZdBWn896wNSCs6odfyeyUcTH4P8vNtJwYTmKT48KQAFnRLtMMwZDFrEwf1AQL21W6MqDoXx4i7EBpNEbRryyBb",
  "key35": "3dxrJDsoBEtMGxrZpkbJbSjU5QvpTt7HzohHjoHRYH5MopcgC2JyrL5rNNTrihY8nCroC3df1v9ZKYyx4pWdXp7A",
  "key36": "5zo1DjRTNBdwU4VfXAGZ5xmrGvRjZjTaZpab55eYVw8QKEkAMPTHENns91PfLzt2pFopEAMfP8zWXuJbqRyfuJKi",
  "key37": "4XzcmoV4R2yJaC6bNhK3SqwYKjRN4tsREeSNpPAqbE3pgo5naGpryr8KoSVQkLhRKHbAznCRtJvqYBEa7pmZQv9g",
  "key38": "2Fd2E1P1yYtP4jRwFQHSpndbHMBYeTHgkeP2fBfXoWBJQHa5tmWNMaaYdWcbnvtGspJh4VsqpDGnmvKhmRpfXBPX",
  "key39": "5zyKTkszFvjrmbbSeFAreMPCX67BPP63d9XgtecpjVcUD9SoQKB9WJWQoX38JYDx59wXSCruQ9jZQRJVkrdoNohW",
  "key40": "4cTSVvxqqceGXob2sKL8UcPQwiDQQFmFBkuL1UpASki8z47Ht7Jx9cXC9VavY1eGxSCnVj4u4sbAUGdT9x35DSNF",
  "key41": "24pt1UW7QKeVnkoy9qdXN7ESVvBGaWWJLE4qaKUzFKg8Lh59xzXc8dp7qpBKknT3uYDn5tCvf6F4Uk7Ju2CnPoxB",
  "key42": "4WFxVXuyGExS6hdtpARwYmY5e5u4A4tTgkHf73zAf28ixkfUgCxdyt62QNBnGoHmPxw93FzGCdDqzh9YQNH342AD",
  "key43": "7oACLqqQEtmPEYwc3AgW6tiLn2kcueKK3AiNBMHtMMuW1gA97zaDtWFbWceGAYuiQQrkxp1C5zfYLtMrUbbSS5G",
  "key44": "3ewfuuMqnXFt8ZmbXZ6mrwti4wSMbgPUF2pS4HDL1d5CnkeoSFibo9JEM5ufFRDZBw6eZ6XvcqKzguEaYFnUwj23",
  "key45": "4RGPhEY89LMmqgQeM3UPFGaymeAX1kREkc2QPqSSjoDKx375rJ6hY2PqmbdF9ShJ48vsA3BVha3yZUNCUaa3JNq6",
  "key46": "4NJS2GkUCMmZLLdrBPKugT8cBghUqwVWtHuRLDE3SJHTpsLyt7XByeHWN88mSWyXdmjZ4a9VfA8UHkoymVBK4nVw",
  "key47": "2dohJRwKVjwuv7j6zcHqC8rFBGnYoWffaREnnnzF5Aub5krj5S2zdB8HUPoAUs12uvFwt4a4gWVSJAvMDrTBfyqz",
  "key48": "64RpNBkh6orPtthak3anTxP7Cd5fg9V8TVpSycZMjafJudRVBM8HF5FzBXKntBqKmNkYXdSLECddsWMhKAGpqZxe",
  "key49": "4Kw5MGMC45u9JtsbVD6T5h9kB8wThmCeqrZ3y6WeFz9DPsYyTM5cb6eBg3XhQs2hQ6F2x5wCPXvJ6S1e5EEhC23P"
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
