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
    "PAW28Juobxv33Fk6ZfoaQRYFeveTHBHDGNhWraSGpSWwagcweWxLzhoVFiwjw1RcxJ1L2KCxZkpqEV81nEwMZQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51VqnkeDnW8A6dtK4CzPSeJqcGP7S2u7tomxbBxgoe7UW89NuNWqL58dTT6s51rmrYkfHqwQrbSEaSLNwUzZnPMQ",
  "key1": "4KNnrTCQDD6ehopuwEwwawVohL3r6Af2FdTowgEitaL7aT3FUuLbXBcg3t6XTfXYikBBV4cXcH9sHKzrSix5Ah37",
  "key2": "T8WQjNBDTEFSJXGs4T1NRqEk7ye56NNoMx1cwAF74pV3ZNVpLa9718bdg91sZfNgFUWfWYbZw22pv5woA5nfptD",
  "key3": "2dgQ5wkWv5tp978d1AM3MmsvVqVDkBciJUsanpw6fn1AaU77Fyzmu8BFk5vxaQJwDyQahQ5x1fhL8HrkNb63F7EK",
  "key4": "3RZd9p9temDKXQgCb3gRjb6YnSHqSrFDz3W2y5qenGAwx8ksW8kfPjS4o9nV33CCLdnSceD1PEaLeCCCUNoqZabZ",
  "key5": "3ygYSNZQAG8mjHVSbYVx1R6Rdmxwc7cKFJoyWndjYC4AbtwRhu6LiJpkHr1QQpuvuTDjHn65xUagyB3MjB5WMBVd",
  "key6": "67D2CCcE3szqkCQqUhcdh5w6xSYtSE8E4gyoMcZdit3K4EHnqwFVAivQpKo4dtZPX38NJkwQfYQs3ZrHjJoVFPnM",
  "key7": "351m56BjYc8MXiFupBX11XTcWGHKs6Z7Z5Avn8J2CSfHoaX4DxzC2LFpdCFe5WSyK3bjpX7Ga9MY5XKw7314APqc",
  "key8": "3gYA9ap9AiyFQHkHQTYy571F4zajs4dp8KHhHx4BqVyDyWX7irR9jwsjPP7rGpiYBLv7iWdQR8LmzvQ3Ycv7PMe3",
  "key9": "LQchoG9PVttdQo5gfGo4hQ6eemMiHc3BHaj2Up6xPm5MAyrXZu9usprrMu8YzZHdkh8absp7ne9NwZ7Xax4rCyB",
  "key10": "3cKLecWdQsMkLhquyu5qEpF5yYTLiWwRGbWv96N8fkY587pcLQtUofH9xgGosA6L5hKtTkRyw2kKusUxcbNoQLgT",
  "key11": "hUsW52LrzQ8yxuL33rpC8zg31abnNe6rjjhCYEBx1bLbEoKSJEzJmts7ZM3VY3yV2Kz1Uf3LTfBCaz8vZvrjmxV",
  "key12": "5beL9QvEwaYUwBGpPuXvDCNX37FLhd7BGudUM3Xu4fQAJNHHCFtj5Vs4PRgk2sLFa2N84iZSQNXYSvgR6gHV7ESF",
  "key13": "5VrfBAtcdXW4L67PDk1FnxgvYwYWAd9R6QE3m5FqEhrUYHLQvBkqPqtt4qP2hMrJXKwxhygidSNKwYNC4iocNVoU",
  "key14": "4gyzdb1WaYUtqpWsyt9TL23bRNkj9UVpiHo3ZqLJNZgLxMTRN4jhKzujSi4KVmr1jcsCp8pMH1DEbTHn2UNkS18R",
  "key15": "4NA928h9F6mANPVpxiCvZEJeLvvkftfTuzX5LocBCwqagXVqiN93Q6xNtutoqaPhHf4CHtLaWCgBmsEbyxFMDqyu",
  "key16": "645oPAu4z7pHrCqyobh8h3CZTSRjNUrnVCXT1MiWt8T6pe5R8oYPHD67jKMRsoeoRqRFSy9D5sB9sE8G7fsKFzwt",
  "key17": "2HfwDdEj5r9p5kHy3baZv414uZrG6tuF21jrsD6N6W71w3H3ZYq9dKb2dnq7AkHxnFd4SWGWdMmNSsUiy3g9W3cG",
  "key18": "uMxqYAFyHjhuHGiCd4hmWUevAwdedhswHBakwzDzuJZkz9kPinS2FxELmVrv4GD78rFwB2fK8in7outH4RoNSWi",
  "key19": "2kpQ5b3ZEj6B5mcmojKpacH8Pap8Xi6aRR5Q4718WRBU2ftqibFoVyxNz2ALaHdtP9P3BuW15CCcY5zZBuJALwuz",
  "key20": "5Y9x8YnDc6kUwzoCHcZfp4rzPWG3fToDT6ETnS2ecqqDA3sCxu9F89JNaeC2RdJivhrHuWAU7F9AVt4BiwVB6GP7",
  "key21": "RwrZUqC4rYoGN3hufBPqcz5YQahqYAUKGZpnpDZV9mgnaM9MzTVXhoLGwkYx2VQUf5w57d2U6qnS176GbsUFKdb",
  "key22": "5pBzN4NpJ8Kn1JxQsWxtKWu1XYTTjjDbiuzNZ8w9uEXeHAsckQAJCr7yNUdFwqkRLaPeGoHE8sEGvKVLS5DFjt87",
  "key23": "3adnJAz1T2LCcHkgs2xRtgbQFti5M9nTsRpysgx15rzjukbsZW5nrYdHRVYgztwfny9o5o8K1d5tsAk1eFj2k1f7",
  "key24": "Cv4bDntdWVPXyongapW5b4achFa2n1YZvdAny7YTnpCgdKT3exKXw8hN95FeFCcmA4oEArS6a2DiRyNFYccGqCv",
  "key25": "48Lchm64BfYpBhR2yPJRjFb95DimCn1jfcSsvZEYPVPeh2UDryNV7ktnUDSJ1Sx2hNqZtkV46iSCxwqAncGoe6gi",
  "key26": "3RH63PNoM6NErsRd7T1CaHaoKGbbK9ELz65aHH4yaJki32UWifPzw4SGJk38eZMe8geCpP4uQBBym17G1YZCJqwn",
  "key27": "2tkpDAWWzWvmGkokuEAYT4FdcJ6hWxpd5aPRgFMKwTvuCGLbxdWd738Z8vkPFDc1tUEbUqJaUvn7GzYiPTCgUQnX",
  "key28": "21UbY8MinH9yHeZa8p1yjr83Wnz3Dqe6YSzpYo4VtvoZiZX9vH7bjSm8ihTxKCEMCUK4yi8UEpJajMRnnatM18Bd",
  "key29": "5M8MtMPATwuAE2CB5G7x2FJstqX5pArrjRXky378ANEgf9fEb2at9kTA199RAUStzBrZoqWAah8QmePmbq4hQwAw",
  "key30": "3kH8ZPdgixkjtBGLsaYrJWfWy8Yr53gUBJW95cYVT1MQU77R8G5bZHK6QTVC3kxPvhGhTFhmb9429fWqnzLfTTL4",
  "key31": "2LWppgXQPXmHijZ8zL9WisZtwUGS2SQt3XNzWg3BzqRkmXg4vk2Rnu1SkRMPuykMUXJ48EeTzEEjeE3zyojwXANA",
  "key32": "4Af8eQ6QXvz1kyqcjUVPC4wDBTS9RCyV2pq68EUTw7izc2r1SG5izzG3Y8eLi9vPoGyzLSnvjk2JroxcubUV46oA",
  "key33": "4DtpE2MEo1ozEC8FR9ZVtSbAG2SN5Y3XuPF1bjfjWf5hxuLLz7Mnd1pahkcGBYYgmHxqUndxoVHTxeheW4CS1Mqh",
  "key34": "56BoY6pWMCVFWhsTUcus8zgbBw74rcXZxcUFNWEe3XXcWd3SUqNcNmnFRpweSPe2vSn25jA8kNz7YSRaNeMzUBYS",
  "key35": "5CLf5nc5Kk5UbxCsZXGqkYLxCPfaSLbT2eCADacDBHQUUESYb8MzUTtunDGwrabJTzpxznGmERkGnCRBx6ogjwTs",
  "key36": "5LHsFruuCJRivbhtGn68Xs4c4oZnkKwNrNF1erq1oEPDAKYnJk7gjNLjZHEDTAtiE1etm6r3QyN1EwnrudQ2wm4q",
  "key37": "3CRWWPzJqXtrGe6ukYWML717CV1FgbJy78PrB123fnGToG4TmuGeHzB13ok7XKypvuz4r7KPYvR6bvgrdy9o8faC"
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
