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
    "yfdxLMdKRAzjPuiSNXSGCf63jHYgUm5iyiHvGfWUrNCGkfgX3jXA7hGz3QHq5WLqmf2dVmMBV3cb9wsA7p3T8Vk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yzXCvjBDHeipownhCyP5QKqgwGUdvwWEfBhPoicWPqKzDVMmUJ9BDaNNYX64m3QiriUmPRMk2hkTe9NNd9FaxwF",
  "key1": "4ykwfX48CZFBKa1mmWqaELRLbyx6aiYdowSDcXBCkwXYbsvZg2326EB5jKUkVA1tx38onKzC1GdXBMkyHb6i6S42",
  "key2": "5Lfwst4dGaz9YEdbZvpvyb1eh7NXihwxdXp54wnKAbvjyRxSb8rRY2iJ7vpJ9Jys4PVCLMb1LkgzH66gTznXzRQf",
  "key3": "5E4uW5J2BH2tmEwiFG48grg2KUNHhuHGKDib416YFwSSQ7WX5GR8RDMcNjL4Z9mBBYLhYKSAZ7C42JHerRtw91Sc",
  "key4": "5amuYCA9koD5YgqSNapFfvnhprX1XFbYWrbirDwoaGdCMjDumHkK6dt5B69JSHJnbNsW8bEDto6oDZ6h7NBmkaXp",
  "key5": "k8k9BaPFae9SGak4hj7WGJA7p6PcGb8x4XFjuXi3eiJVrAJ4GJEmSBoSd6prhtyNCxiiVLN3G5j38HT9b4EUmoa",
  "key6": "2s6DWitxDJz8wwrbA3EwDS7aZqJXX66SzZ4YxNjC6HwCFaivXQQDidrqDc8p6eS3p44FKMiiXQWJUAQu6NKJVTFM",
  "key7": "5gzq4XVNzkQTQFbMhL3K58MshUaEbY1YsPwQFDoYu6gbvJtykqaWcW1DNd9MyBNs3uFjpoPGYgCPYzU5TW53wLei",
  "key8": "4vfwipD2H49frrqtXHkse2nZnn83HifE4UHdJ98PAhvagQGb5keNhnet3sypg11sjwvK3Q9e5NSQ4XPMyJKSk3sQ",
  "key9": "2B1q3s4mvwLJzaqHmMLnAU9thrbZ3RR7KyUTsVZDW9z3Ncw882cJDMwyM6ui7Ey8gZZGcRyJfsq1ZVwoiLMcHftM",
  "key10": "3K6neiFufUc6tXyjpcJYGcntUXPLguiTzMLoeEB5zGEnhTdm1UY5ifve7HBn7BDqZo6LUaPFQi8SpCzKyRd6QRZZ",
  "key11": "2yAgrdfzEP5u2LNU8Q8Ko1uZE7YWfkb8nBrfU6HG6JNSDX2vsifMHSSvrks9snra1YeiyXUBweaHxtmT4vAN3DJi",
  "key12": "RgbESQHY59cCQCyXN4RK61ukxH3XhWL3n9eVDjbyNBgzJdmhJ7W7kNanQugcz1tYdaxYWBqYDYxMUhzVefq9C2C",
  "key13": "4sTcndCrsRaR82edVG4TM9zrakGjNu8TkWLgBcWMbbzesJYVNoAE2PfacU9LBKpaMcZdwvef18bUfHtvsw5XZLzr",
  "key14": "4rnk7NuXh88bkREBSCcNTgkGcbkTW6bfYNvTJvwNAHtk6LWYLpRqhdbwjVw4CGL35pPtWoPzq9rLgGvaKCkJpiFr",
  "key15": "fFsQgGb8cFcmBFtBJL4BdRaVECEKx8PNRgCP8KywT1zc149spMYiKMACskzEXkoYXc6CLNyCV5vF8vW7sz8Qtsd",
  "key16": "4Z5hZZaNFgmHcR9MTR6tNcFVRgaupkDKABbN3aea4kxKe3RKNPN6h2wJ2o3X5hGMTUUh2fEbR8rzsaEPWZFZDBca",
  "key17": "7G11xZEiAEmcrqjmB57bYFMbSjVjfHvA3jdpE3Yi9jULbfx4acpaLwb7vUdjuErKegR7QNAzMy19vZwo5jhDNJ1",
  "key18": "4yVEqQXSa6wtW848WqyP8qd9Pbg1FdprRoJvRH1UtNVncTLAaLLczkknKk99okK9cQmLSkMwCaBPPnY23vQg8Hbx",
  "key19": "2nLH2QPXbfoFLFHhPjUvmrGx9FNKEQVJPKM5hhQdHHcE8XExaJSPeTw5sx8x9pHHpqAyQzVcrcktwKw9yzyxdYXw",
  "key20": "Y1HvtLKTkr3X4QrNytPaWAMRKsvDGAk9DT5f48YqdJqbwtsMx8E8RXhXRpejBqtLc63NNYpf4VoCoToxaRdJ2J6",
  "key21": "4F1z8ALmCQym9rHwf34JruJJeUHRgcmbi21WuHN8iZnde1TNyDvLgfTdtg84eijq6GXa69KZG9yDoNwneRFKG1xY",
  "key22": "3APacg8XFhVmpeNz44yRFFfHAG5CvQkn2meS8ic44ZQCib3tigMWuBeEsdiQTjCrukZKfR7vPZuNxzCHBcMmsD6n",
  "key23": "EzYXtLCrJnjqqQTpg8uJ57pqTFPPr4P7jdeRNJQ68fKwyiW4KsPH49wboDedkGGYhr969mUGiHJkzzePCwW8hKG",
  "key24": "2yZzBuBG3CNv2iktR1kP59NAL6LCUdh33ZvXAuvcgjqPyBNmuNnQhASM1Z3KoH7nga8DMp4f5Rctsbr8yPFPXMys",
  "key25": "3YwWHmdRfNbTNt74ia5UKmUwYShmHbDyZwqgfCUS9NKF5QCzLNVaJkPTwArZ1wgC4wy3jXeQ8h2Xwn9PnSsubSvQ",
  "key26": "5ntcfP23UjkcTpKT5cytnHrf6TFq5S1w4kkYyXvCi8ThZtgmqz5eQMfZk6graaR4nHAP6jxypEeyLFi3pkZy9GVi",
  "key27": "3x6FecyeD88KSiE9u1iqvbJT5EwC5RBfCsd3UzESKoc53HbMdikuMiTZ9c7jzkfcaFtofXoCUfg1rH5myEeDpzvM",
  "key28": "4Qo8ipMLnCcuwhgDzkhEyvR6CEP2ksQBGBTRxTPRkNYQf1M4hwMCh9GD2pg3mnaTjAui4VCwUr3PEcPWfrFc889R",
  "key29": "4ecXTtuSwswQe9EtruvBeiso8r2T6a4SjAqSvcvbHGL48DbVgLsAYdSdZXCNPFEbWWwjwkWvFPzwMUZeRqVQJRBM",
  "key30": "32MPwY3Q8rdpwHk24p1FXjTnL23zhJR4rauRmcf1hAW5QrLK1KcZEyaNH5jVXHA4qvWyAwRwGQ6BDdkpcN2A2U8y",
  "key31": "2F13YLLu7r7for3BL89cFaRSMHBfwQGFMqbycq2TY4MnJPJv2rvS9TkmdshaMasW1M8BTkgxCnLo1FpkRAkcLoxq",
  "key32": "2r1L8gphTxRJMbsjHNJqqpyMoPs5kGpCgYZNhPqLa5EgV7TaVNojbVAZiNjAHpRa3xH5MHASXYYjkcPLait4Aubw",
  "key33": "f2Stp1oEuRLr6aaGVpNqs5TEDAnY5cx8XYiwyEN6UMXKmKoKFoof5RXBe8bN6jLz2aDYzDRsNKS5vkftq4LpQWo",
  "key34": "2K8yidLNgb3KmmT84uRzKkZjek8jhhCEagXGajkd6ssa38Kq8TNNu51U1F9RUwqtAVoNjkT5un5VNfMqqW7t8GQ2",
  "key35": "wGrAnBukjagAmhrb6N23AFeUY1x4PokRau2v3TWAgLSDrLNdERLucfNfdhmpwGBEDSyZ6QdFRoTmgz8bXJTJKGe",
  "key36": "33dkitBEo9CCaxFAF7eVqZnLU6yiNqQhWAkrFFEqNEvDRJfF96nsFZhkJTaACTckParLyC6VZMvaPryTiKMdYgw",
  "key37": "3BPcTi5ho3KwrtTWA8R3gVJa49zs8WnSARbGoK6HGLfikTRLuyd68RtPegbP2nJeqbZ8n3WVGyxgpNZMouMLnf1A",
  "key38": "AoSFQbxKRGcTtAeDL858koz5Tf3kehHTQxRffZNnx8VEEXwmJBxVn6X69zqjLVhCEfBXvuMYgbpWbhTZNLYijHh",
  "key39": "46q4Bzj4pWHBUMd3gupwgkc7jcbXJBFvQp86d51mKYam66nQmcJSqipnommrMhzn2XW2jKALtuRJnWJ2Kj6uEbZv",
  "key40": "2CLTruZpCNv2y4ytvekmfgMNcd5TdMoGVkAepr6kDLS1xCjYWGQFo9zSdRPMPegLvxmguknNi993CYsR4Cp2SRAF",
  "key41": "5At1mHfrYEoZ1cSoD51LvnfTTPdM5sBjmJXhsi46H6FewW9aL4269mY64D17cyhoAMT22QrL5HLExL56mfPvZLbb",
  "key42": "5KoWmGy6QaEv93AvNHVyjgXC2ANsoqSQaWFLwKotLnKfwXpi6X7NyzQRrvCJVuYYcbaKyewnoJJMycPM1rGCxvjz"
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
