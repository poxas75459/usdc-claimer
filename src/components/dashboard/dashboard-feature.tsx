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
    "5keMfScVogmc4TN5n2C2bevuwmhXMVyP5k7ZeG7gBXHNFVqTh5cbeoKFuAsyG6Y3VpZMUqT9iMivZEwPnHRpMvwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5shFeKeG184oX66Ttbv67PtAmzZHHpPyN7TY8xFZconjZBCvK4jT6HvTtp5LqeQ4m1ZoCQFir5uSmTL1ajcBoJJZ",
  "key1": "2ZBmoTsbpTE9YDdbnFehLDJUre4wF8NfjivgdXgb94oiaTDx4vhTzoWaTpMrPXKWciUkSSvyD28WvMoXGaaFpsLr",
  "key2": "kPhAkfGZNhuzujrM4gSoeUUcFvci6NiTQw11M2TBTDZm1MdD1S2r7Aobv3EZHDcnEr9b1qxzvLHUhTtYuLSYEjg",
  "key3": "3bDdaPEYampFapbmKdu11zcjAANc9CrxqHJm3PrNDcxAnSYLB7RSBoKtEYjHa47Prth5Ffrj9KyamhDtUTom7vye",
  "key4": "2dzmgcijguxsCStJcBSi1JpcmMPok7cWw8UWDBgVaMjdc43SAxZPo5hWs6BW6DbsUGjao9BSoF7um8ver7HJCCSx",
  "key5": "3oXYi9iCsQdfXAUiTjehQmUzm8AeL8zbFBHa6yZE452dtta8FEgN9ezYf8GrTKAdHqnjvFBqzQRwcj6kJrcoaZuV",
  "key6": "2wH1yUYNe1GogWAjZnGNzxV59C6osnzbZKk3QaUGkBLBsFRCAxdXqnJz8NkxLUw8oQvLFPeGvXffZJuUF28WzjTe",
  "key7": "2MMg8VRtoQSaGxNV5nSDrYeoEKZcog96DdeWAbHi8RDFoNEdXTyo6GD38Zt1rbiXzoJf6tX2wguKNEYqi6vjoM5A",
  "key8": "4AYunNnmbtSmSXmXeH6ACYUw9T1UbuFRFpkMC1yJ1aqAQSnnkBaBwdaBP7ZxYRvCJxb22mtJ8P2xwXZVGNM3VBMM",
  "key9": "2VoauR5ecWiNGMk8jBKMEmg6m7PcPu4dj5k8GodH3tpDaVAFML2AKxEccZLbGpdcvGS8oJrZa93L1KZ6Jv9up1KC",
  "key10": "dMAzgAfkz5f5cQ1Fuux1foi6X13JEB3FaRuSKuw5zV7m8muDdmjabDD8s1VqscYGSqrbV84UjbyTX62iU9m5khT",
  "key11": "J3HekdzXUsPf6TNMSEjJfz5Rgo7zv89iGpFgxgmcJqAVwoEHPZG8jPbd2yTuQofkMhHU2rj8y1YQucu3jV956Hg",
  "key12": "2WfcVm9Mqak592Mwaenfxcv1poH66U8HmQGhK2nP5DtwpxNFF6V1JtJhryyvfZVsMJt7enVPK6z9dGfiuN74RdrT",
  "key13": "2yvL3NdZTdgLcX3vMkoCgLcXuzDepj8KtwjQZcje6oLbuQRJrgq8NtiYbMHAC4ZGvRgLSgxvVcFRyoQNpRRBAAHx",
  "key14": "3FXQByWf7BctyrNQgAantBT4aUiJU3wVDn5jwSEpNRF6Sr4sX2WNkWfN4yLabaz741YnbUR2AxW4AmWWLiGGVbLe",
  "key15": "j1w9W2hdw6deFfwFwTB1T6znm1mRJjPGv6qS7Z69Uk4kjZSvVZGzkfS7WxgbS4e1ZHvG1WeRTnaFqRYFVXLkoeQ",
  "key16": "2B6sHazxXSstpTSWNWrUoA8ytoLUD41XWH6WZPqnpAsgYVaYoCjrivw6dDykJMWdEas8ebGaA6dJhuh6bMtS4ih9",
  "key17": "5ciCPur7gwDtrkkHcrYoRyVy43HEYnAxEcR3rZWMV77J6PvNmCwzDYezHvkoDDvZ5cYcYmZdf7dgYtgnjL7MrQ73",
  "key18": "62mwgxzsyjYB6opudfZcGs1dz7LLmUJXXNLVp4SujbKEHKFMG9Nn7utJfcuSgritmSc1wrfBqVmRBVMAStcUwhYb",
  "key19": "5B5ntgh9uRveC1vBwen99c3FnrR3GvtQG1TzJBSH484MweTmdUvee2kUhGfz2GGFfM3bvUekLYfJpZnrS87ggyzn",
  "key20": "5kMDNrC4QV1xyuahw2LAixouSSzbP48WT4cp9r4LhSEM8ZG4uGk4ywM51BD5bmsKadUnbtUmBjgg6HkKcvGbBvx5",
  "key21": "66S1LYpSQjXaZZpiY73MC2MmVKoLNaaye8Mtt9EbDYfNV1EDMmKD4CNvosKFzDU794qqjDLPfwYiyAvLAFcsA8yN",
  "key22": "xqhoCwWQzu7ruyN8gStqqSeTAttje2TufU7HvTvR4Fq96UJPzHk46yjXDXbnp665ycrJhFs8WTZP2GFVDzAtmnf",
  "key23": "4bKiqZxAEbTYe5qKiqzAeDHkMReHjWE4KnDF3gohjLPxPcU1voecW9GQaLDhGtCETi5xuYSTS9dAerttarDzHsj9",
  "key24": "thZA69vR6VNYpFLmHDg5Ca9gH1wxjt39Wop1aR3oHQkgDqtj6LBHxPiT2F4sSQQ4Z6uQvPfXK5Nq7wEMejW8RFk",
  "key25": "66NyH3DTNKpMYU5NKNuWx32hgkogABbnhrhb94NY7E6ofM84MUiPpfpg4nK5iaf7vZbTjMdq1cKUXxfa7iRzBAcS",
  "key26": "5By1xNSE8VPdmQjDBbeGVXsTHEiJ6DHMkjfmmhiqr6M272MaYib5YBSe6nAA3rp6yYXszfYWwws3UQXCyvwLkP65",
  "key27": "4RipcbqCqkVCDv3r75NrcCjn5zbWYCN7sViLuxZtuZ1jDT5tf7sfkZbqX2K3sVwY8eT5RRwstKdGdHipiNYJc2nR",
  "key28": "bnrxkoMi5khJLUGmHrr99M1jEDgq54s2yjDTBBXTKejye1Taz1mjULeH5ycUchbWNsmo6vfZrRvmAhNgU21M8w4",
  "key29": "4EYgNGxBz7PmyfTPGJn1nV7MDmPVgSRqXcCvyCUznmWXWhgpR2ondGhsxbP4NwZqyHV1Jee3Y3BzQctK54UAGq7K",
  "key30": "4ybQko3mUdkW2yzAHo9Nqd866cQx17sZVjf65Rz6Zns2gSg6cv85wcpXUS6aBYBeR49iWYKBwDorTiFWet9kDvz7",
  "key31": "4kZVqQXR7kVe7DWa5tgKPjPhEwKqKLmD1CbwnSairoX3gudwctDmLGnFkbKfP6oyiwLvuhH8aR2rGhknbxgC4MVx",
  "key32": "uerbgu9tTG7yvX29seaXpawdepQg3agetisvgYpVfuo4fYQKQocmvE6H6YKWKVFvUBYjuW18DuJ5WKTmrU1erEn",
  "key33": "31MCYk1zqoVrV8tTnjKZ2Ncc7dFFfUem2DLDBq3bBFGMiiMhjqQDJVUACxk9TA1wemSLAaBpgb3a59hW2mpYykXr",
  "key34": "5ptojZtoNhf2aczJNzL4pcRZuTWcvsjCw8YKbFXEvb5ruWMNZgKdQuAC9S6cRvew9PGS9Rf5EGs59V1Nk73xVgVB",
  "key35": "3ciH6DA6NhVr9hHVPnVrxtd33ZrYFeTirQcagbHNXFcqanJ4TpxZsGtmAdCwqthf6nr1bkeoiRNs8b5XkRJWAxRy",
  "key36": "3bi6gAFXusj5iqbMoKxcXvW1ybag3unq5iqkcJbNoZCSbH9K27DEKZ3pDuM8rgEz8PeHoTniGnhghV26ZL39hXb9"
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
