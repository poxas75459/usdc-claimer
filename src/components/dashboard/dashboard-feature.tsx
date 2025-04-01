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
    "5GSX6AbPCHHgnXNG2eAhrDjQoaCHEHMhrvUuLK7hn7YMGQVbqWxzHeyCBN1NxYpg7sjKy8UuMfBNLfeXprrgoi9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29BqtTZEFZMJaxRcQirckPyLsDoaq6HJXHHoHyLSEButVjeZBSMFq89DCVHNY8EkhY3QgHvbVYW4ToccgzuPGrYP",
  "key1": "2zynAAANFbGVzjMRbUDxxpNeqNXtZdSssVER3b9SFRpuuqya1NfPcW58gC7XUvegtk2oAx34QLL7Ek3xWYBHgMXp",
  "key2": "5TJESxcCTjDVtg2vtKfaDiaF4MvLSPJFTizbcimAMhQr8cEE9zHrZGN3LJiUbSX41AGx68tesWxboDKHVrtFKYQM",
  "key3": "3SM3Awj6EVKxuDDxgVy3F4mABb4eBpqwaQNnThf7GoczSBf6eDtoKUPB79twzyzmXGygb4yyPFyEmZtYMV64TK5R",
  "key4": "4QREBhuSocJoZZFBCugrqkbNEZNFVSwzbjmV1sUFYX4bJ5xo4cuQR4NgQhT7RLrsgK1YZmLyRA4SewkyifGb3NgB",
  "key5": "5gqxx8Jvtu4PrvaFVF3R9LPVEjVt6cUCCVyPTvU316k6HNMzDCxJFfbZkCPq9rRumadxKru6iyV4h3UYTMKbZ3t1",
  "key6": "5igpnoo3m6xdZ5twghiUATegCPZf3vm7R6VQf6dapp64d7WCG6NdhDyXLhyZqiVH43LTaGp2DxWWQdpCZeNydgcL",
  "key7": "52krBv1yvF6zuyD19QoSDPqTWNsKG8n121oEDmnc3oCLe2KwbTZ3uxQbfxghKAoJnQPYYPojficT5hnhULbedNG2",
  "key8": "5ehEnLaAVenqpLP1Cg3rRj6xHtBpgCzdkqcjxVecjCWwgmQ8xCPGC8asjh2qtAvyakmvinwKyNNBNgiK8mjJXURc",
  "key9": "2Lp5bizmdB2kkD1hxUsrGx7YVNnm7diJh6iCgCY97X5RyQK49LiEFrC91DW6QeaA3PN8YEZGSP5DXEKoDkpTiwKV",
  "key10": "5B4ozhWaoumg1KdPNzwi4FZEsuRF3BYSEbNkM234Fjg1yKeCoNo68voFaFk5BmNoispUv5hsPtX6Jb7eNJciiRgX",
  "key11": "nZCctxjbqNRFRkbE63XiWDGXP9pyRNybxVk1dnhD8XCxzUyFP5xfuAQsgHtSFQa53FK6bBy1erdKyJAFTCvZhZY",
  "key12": "5ByQtqb695dt8ymCEfmVij7uj8MTib4oMQq5MgXxVbAtAWqfQayQr2N5PMk4hDfFBRD3uhyDgZN9v8U1yyCxqaut",
  "key13": "4eoTC7zWuirczPPpzriVWFbqE9FHTTKpTjDefpsFg3A2YeoFqZJg1i6DaL8e5UFtUhasNTUBpgXpgnvNHdv54oh4",
  "key14": "3LJpP7nUPnb5Sj5X8pA8e9TH6kBW7KiZLFAMvmUwo9EoDMGVMFP8tw7RUopDa7vqra3Vq2nJLpPGVTg45dAtJ1LB",
  "key15": "5EYPyr5Y3MKuhm26kqrZPc92rJxvoLM58waU1jqnApgzU4Jw1ymvzgnRf54gV9n1mEkdSdQiJdKndkSVw9rHB7ru",
  "key16": "4vCpgJQirk2s8dCdRMvJFgSqRT8aoM87sJMDuHGZKaKX5eG4XtG8X89RzH1LGACgNpbbPP3XtM1QbZMWFX7KD86u",
  "key17": "2wqquR7HmtwoVLXao34suJo1b7MwiRkbaoC2SZtPHoXmZ6hHBPfozSS8t6KDUBvu5hZScFcP42kgcHKHjJn5eCME",
  "key18": "28tkVhhvHUTDadjfKdPhsZ4i3kwx4cFJTrWgmfLDkDjQw2aLBdSgkFMFkLr2PfJdsdUATPugKRZtnnUjmyM9o1VS",
  "key19": "7kfBtaQyQf6WbrnGsfpXqqMyFu1YW12GEdjUFH7bGaoST4go5HzCdkks9HPZZVi57xG9LgeTH1Rf2oEphmZezT5",
  "key20": "4Bx1KFGPieFuWYgSSn9ww5AaN7h12tiJthcrKkaD9rM2iyqNyogeZQe99cs8DEZjzrFP2aahpSbWCxWb88rmwnWB",
  "key21": "3sBEKJWB5ux6VJg14XTKag2v51QdhPvsYSzTv6swYwXZj7UkL5uoA917yEmJCe36Mmv2nVEKAQFX7Bs2RFVSSkAQ",
  "key22": "5aVzZsdjm8iRm92uee3krHb3FwfspGAdyJ3Fo7D5zePDJ7MGTHp84viMPVSi6pLSDfZRYBcBVqzzvpd2RUw1mTjt",
  "key23": "3QNMtmQ5CeNdTQayPASLiF25yaXwtYcG7CdxckcAoUQNygvuE42edTN3atkJn5dxhyZrbquLYnrzHuGtqMCJHAmH",
  "key24": "3FAsWKtTunF2bXTG6sbZgQQweV1pZUrXhWLd3tiUXc2qr5kpecZhhGtSfdRysnpxqLxDe8Tbmr4D8Tg9D3cujHZy",
  "key25": "328EcJN2esJGb4FqWhshWcP1mqP68xrpvYhzztr63x1YWoseG9ZjnSY35nNp3JbKvJUFdUNhBo6Z3dRTJD7rojbJ"
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
