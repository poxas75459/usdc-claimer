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
    "MJzaKoHUFQxbV3orwhLEpYbSCTKpZC8eLTkH6kynezgPQfW7RSSvnAWn2uV8tZ6dFfqwpGEt3DgS2DDjPeZGVv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iJzxx4mvBUG8e1FR5BGXaDxwXkGHdPTGtCyjdNiFhyHYNLS6f7RN2NVBYeLe6SwWXbLuM1EDPfPj8RXJ6CRndTf",
  "key1": "2LLbxgA5xoANVLbxg3iAmtTZYzXtJWdkW1YQKWBP61Ev6QdsSPmXvwMPZJzZSb1yfaAmSkBaiNYu3kuiuofPS4Dc",
  "key2": "311QkgQDUtK89oLWTmEYSdPFLrHP2THkutchmeTVaiRvutBCHKjvHZKA2mo3ALiEG9H4qGZ3Rp4NZmVxABzwBUdF",
  "key3": "6211vNju4rBHPmAnaoX537LEfpBkLh57D8A5qBq3eAEXJNrVqrvmYrkcdAoRSdsbmjX4eZA6XTmHvrxFcy9cL52V",
  "key4": "4FyWYxtZuTdDWFJWnr4uobGF4rxLgTbNWXVerNMvHCXVGH61iAUgMigGMgxRxB1p7RspbGGYAoZrrQaGB6ioHmdR",
  "key5": "2j6iqF31jK2PMTgkSoLuTauPoBbbmivz7u7fzqpjEbqnLhxUMGVfQTAA3ixahhQNmNFvmFP3ZHhdbHNM4TJeTozn",
  "key6": "3HpasFmbpehbDnSvV7a88FaUJbScdBtQSnPura93XDu83Z8mGsQyWxxKn8KpmyBtjqbqor8GHxF4BZAoBBWhJTLp",
  "key7": "yrWKsgBsN1N8krkiLNxnQdiuR3tz2k44UaZwXKDNhZqZ36w19uwMibnjGAnqJh583CCUpZ9vcFfNffFgwCWC8ZU",
  "key8": "5f2hUjtJ2LYkos3voXTLmwEixbd2fr2LcjgBzNYyM3A9CcTSHSZaFQ8RbeWxGjzJ51tHniMTiGxvNwhjMmKKgoQ1",
  "key9": "LXnduX4hos79KKLz9uQQLtwHjj8U1VCRzD198qm9Qh1yHnyumogzL6SZW5zBoJM4XHcnCNUcQJLh1tZZBGdzSgC",
  "key10": "tkKE6yZZidgubLDq2MjRVVkugvnH71dBt67DapRHJoNSnBcKdt4Wcyip69x8B5Pya5cDbWx7qTW2kLfQe3Ch2co",
  "key11": "RmekFGGSaPFZ6PcmN98y3Y7SVpmaVAH7XB5o1opK1PLyWtZMqKx5RJ83at6hs2PKcqMmuq7Wb2uJmLuERFS7xnB",
  "key12": "4bFYtBaDiJ1QRFQzchUndN5NZ1zbnmes3fpbhtmxP8g1ujywL2A7kq99B7hMy6QVeSuDk45Wih4G6zsHLiCbjLFe",
  "key13": "EwcnatX2oHG4hmKFXjUGGmEahyvxQ6DTV6YrvenyK2SjzH68hMqYc2aotPqoVmtUrnvxMAzJJZLEwvhhPPwNoQY",
  "key14": "4s5xaneTKF7wxa9rJ7ZuXAW6vLKnDogAegbnyXRwPoWcVuYWxhuCz7NDL3GrxV7JZHQotGvvuVWM7fWwU9qiNUxz",
  "key15": "aBYp1cY4pj2s5zPLKB5ytjMMpGxzchzXgZGMDsVpVrSSBaam8vUvzjxUnsDP1WyCfjrDUC8tpHCHjMHdirRVgK3",
  "key16": "3Frrt4eQxKk7phWD3Ky8oNA2Q1WnuXghAGRLFw7nwJ6TF5aujV3bxq9NDsdQSrKXVpyYzXZrKFMBcvEiiwJpb4iQ",
  "key17": "4XTTFBSdrFdjtZYHXyMUA1WSFmKcMtEMCWibtd62GVFC5cPgocxZQbdpQWpp57M27Eefcm8YBPJoPtUunhFvMav2",
  "key18": "2vVoCYRzGudCdRM3Xtpcg35aZpqE3PeYT8WtzL4KLAFCbNLTiB1fYwa2GigrySidYQgq7ofydvNyVvxqN9Cj1sbm",
  "key19": "2SLwvXGHnexHw8KDNVrszw8qPsma4fNbKA2j3CH5CxnmjLBqwsRJ1cDYFbTUoKahU9ywQc52JJK2oisnYLmkKkEG",
  "key20": "364d4GFQQwCUq43Jfk6hgS1YUEor8SejRcAo5TcTYDthqX85KUASUNxKKPG1hV3x2hfKyTFvvQck3cVbMVhVeb6Y",
  "key21": "36abKHzfbcRSMh5zVmZ74KF8aqrVoNfLFqPUzgCAtWi5LNJNFERjNzCZXyDiyHT3mmHLBtMmGjCaKXXyGRiNbLc4",
  "key22": "53RXMDheNtQR6egAsqLD5LgPvYRnJdspFx9HABsFQrxBFdBi4CDstcEbAXFrCobDiAMaJXcTu4oVudj8s7nn9mnG",
  "key23": "6549fMRTrWVW4b87PHNU9vDADiXBbU5w1SY3Zm657XMWygx8cgG1ffTpo9FWg8VScj9uKjgkyamWfa76Bwh9fEJL",
  "key24": "2VM63Az2kLxwbTnXGjFiUNTusAKTyHn471qa3oeawJthSuzdcu4Uudp7Ek22LwuqHjVVT8y7ChQnKbp941SwUwt4",
  "key25": "5ANwipKSsACa1mQcQHvEVUBpeKnj8QE5RywSJBqnQMVVtDzXkLzCBYsBwdzSm3Uijv6jqvVeRVBPvfeSFsimjAuJ",
  "key26": "66kRrgiGcaQFqSz7xAdJpG4KJmq6Mf4BSYQTjr9d9nSYz5WmrLZjJWN7CDguKPcSMGaMmxhqBaVSgLkZMScEEa8g",
  "key27": "3TWwsgnpcpYHaMNjMVDPrkhUGnQudaKpTFvGtWBoFLkDp1Nkf4b52mHL1jN6UE42N67tXFM4FoazfZHVjuaDx1Tq",
  "key28": "5VqotjGeYoPHsqNcifAAhvt3DWbs1FZHXNfwETPqCaBNSM7pQDxTf8i8ftqTFZZssM17Q67omMgZYwvVJFKQLQiY",
  "key29": "3UC2j5i3DmRvRgtt2DWFV2DQ4e54GUcc13NwUEbmqH1jcDU6HKosk8cfLiKUrk5h1ugLgWCcLvqigABrnxHok3ou",
  "key30": "26kuHpCjhBWRtmaGmYbxRVH6A7VGKnwuwiBc1WYvCreSrC8JAtqwonF5X7t1StgySzuxpAyd9JyUa2UU3CjWmbCA",
  "key31": "2M9aRVuWia9zVFVyaj2owboL6TdtMsgWvUUEqcictRXGWRTsv4YXgNzRu6W7pehk1PennPF1kde2ABsSPfFv9F1H",
  "key32": "5foQTrMtWTsRZV5EFa2ctpJKWisXcyZLHAxvz7zk7ZMbm4wQhQ8TR3q6Snc1UJhYeJHVR9s7imLqtREAP8wPjLVn",
  "key33": "515seG7hLdaSXkQzBCvmdz1hZkcnS1pw3HaFJxmZJSVGH15yxeRyWodV7m9ZAZwCZPqPaZ1XFvNSdNSQAvT4mLNJ",
  "key34": "43JkevJxm7QUPhMhaJ8vhdt27iTxuLfiUiozJ74LLdH9MxWpdHeA82RLkaXNv49jELHPo1BEKDTmFh1pQZ4USPfq",
  "key35": "5imYHoMxJnrBcsxpz62LkJobWm81k2kkPTcNjVvYVjmc7VpXmHDhspMYHAAD3Z8knGfu9DjNWSUWsQU7bPUb1GrQ",
  "key36": "4fjpqJXm2RrwniHRU6vsCN5x9Y37rNKeVYAtGCxVQgqT1sbip4ypDFQReQtSd1Hf8NQ9mKMSYtNf87xMxJ8CAG1f",
  "key37": "Hh2JXCvNFvb6wUjQhCTuhgjDq3rqeP87vzyrigKJD6Kyv5y7JLMzm8mxQa5PXSgWcMuZHonVx5Yohjg7CnagYXM",
  "key38": "5H7TN3tJS94N4381GcKfe5BAVtyUD2hrXE9HyCz8YVTwEWBxmryv66o3kXtEPyNE4Vg5QngGPwH1FjkoE4H3Ei6w",
  "key39": "4NSyQRMzBNc4wyGg54xhsPxUaNic8PcvVXAhFRJDXPb2WvSNbt2SxenL4GYTUyEkWiT8un45Pfb6KnxC1RgN3TJs",
  "key40": "3kuYaMGnvopQGNrFtExGSy9y1Zxk6Zz5TJjibxCzH5kLWkq3QAz2DYZBtiXvPxcTA6wMbmCrSEzwYyaPPr5Mud8Y",
  "key41": "32UrQDVqTkyKfYxiKxrbTyQ1hwNWWP47GafGaNDA4wwyP83F8qoS3ZTmBWGUPu2Pnb9DAbykyy8R786KzPqSheqf",
  "key42": "4UNgrwjaYhnkUF9XzKNSF2GQu1Pcj8JBSZrWXqk6ctB5oZLh1rTwaLbaXRV9UfsrSFKjsrUUwyJmN649CU8wE8A1",
  "key43": "2g8CzGikNjB3Kq9P9ojRCxCz5toumEwSdYms8oC2PxTDWeq8XiQmq1vBQkB7quwzxPDSMXMAExs7J2DJeeXbi5kb",
  "key44": "4DWufNd5H4rAa96PUBjP1kcgStnD346MuLqEBoc2aTZjr1S38dEYYjs1HhrLASz7eTJB5Wu3s6NeyqtfionYuTaT",
  "key45": "56B45EeJ884GJbsPRjRP5SJ7CZiX7UdxwGABtx5jff7uEcrWJPCGBhR5Xpokszp7hn9JL8oVKNJuH6gbnLiXRqBG"
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
