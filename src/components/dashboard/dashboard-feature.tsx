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
    "2AQ28Esidd3Dk1Y3pTvJJ4tyBkSuZ7AThoVzwQqHRgvyMaKxnWnFUZRvENPdT8iR8LJWycBgnbV4YdTYXrJdQAQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NbjCzvP57CtNoAhKFxuuWs4Z1rJccoxZ7U8BGAGRtJND91pTNvxAosihXznxz8BpNvbwUV7Wdosbun36HN1M67A",
  "key1": "4K3KFrJkzgbAdTxYps2bnCkZEjktqSSWr3uNfC2ro2qxWJWXt6imKdor9QEf7gT2Lfq6sxURneogD78uYXxn9mnA",
  "key2": "ALHCWcLLMyUXSH2e2PVctVrrDz6ZJtbLR8J3ZLMbpf3M8B7J2hSzKbCu1HusxZgfsZ4AGYFnV4BTshEcUy2ofmp",
  "key3": "5ma3D3jY3YQevhbb2yZwHfz7G7WCygVZk1XCuYLFTqw2uNSeTTyxHuQbwp8ecZ1AGEwgrDvwyCmfijgBUvvsC1ok",
  "key4": "k8qtuvRT2Jrky2Rybzfp9pcZGLD1UW88Pge2Z6QkvkpyDwhGauQxAo2xfBS5rRc7J9ni7VpW5zLUPiN7dX9UCJn",
  "key5": "3wmYbscWfAeArrNVewYWFZZ7qonTcNRKgizBGaM4KVioZJsA55xXQxoVok5V2efneciPXeDWaFBPz5TAPXfbGcgi",
  "key6": "4BLoSWCF9LFYkk4CJZqZBim7JU7W7uuHMm2hvHAZ8niy3iHCXPHNH5rkVSMLqc3eqMTzPTVqKtZx2zYPiGwDxyfM",
  "key7": "3QG4RXEjQdYYC2EVru8i1zMqXDcztwmh8eY9kiuz85tzKuAZerUEhvRyCM8P4SykYfJto6NV533BXrC9oMQechkf",
  "key8": "Kc1BkMhgeJS2KDoJgndsHmrRmJ9dDcM3iinEwikVVvUXKCfnECgpKgWcYU8YbJUj9s2U2Aj41w9HMHpLRSKjDBq",
  "key9": "3atk1m7hrMWZGEsCwN2KLmiyyuawD7tdm8SU9TzKvyPe9RDaSDrySAfGucUAjxrqVRBXxsFjLtF5ax6eY3bGzWSv",
  "key10": "2ia3NVsgQuwhcWsogBFTwzAMUmLeUyPUYnbhr2t6jsk4F5HvsdDjJeP29xYKztFof7WGVKAC53ER3twC85uux6Wd",
  "key11": "46ZorGhHmcV2qt3dMKNzUpMfXDaAPvkiPcQ5hedMpGKaCXGeRZVWB8yP1HTfcEYbtZTqft4GbXszvkdmuYkt1E1t",
  "key12": "2JJPUoszrYCUmVULEizg1X9n4XBhiz5ENJ4QmnMz6LKQ1TCD9Ur63Nd1F9ha4DeR65bUgSktGJomYCVLmCPXmmeN",
  "key13": "5Kw7oAM9824fcmMwQ8ura4WQKETMFDYQ3FvbUuf2ScenUP1pUVapxPN7r2YkSv3gLLCDFf8qKeuv3jD268QrKRvZ",
  "key14": "5yao5HfHJ2GL6nKKNfWbLDjz6edECnYHoHyGeJgZj85PFqhW9cUxLT1rC2YtvgLYJBergxZN8WxZWPbnL7EGG5LS",
  "key15": "3SDwvtywXxMe1GzNWpKL7gVzVqpijS7v1zQD7RoybwJKfNoDJWveyVEUoYsCAtwXmiaV3Munix48TNDLvFcrorAS",
  "key16": "JRRnmKGVUH2gHU1A3yWaPiBHKD4tcWe1ybLt1uRRrdUa963D236ySop2RfRHFojN4UxEB9LDrgqKpSg6ysxL4yb",
  "key17": "yMAaXjZDF2ChpbBZaSaDnLhJGDYLLqR7p6ERcwgyuTkRgG1bfgbZvMWrKE6pAjRyvrBHqxS99QajmtVZP3qYDF4",
  "key18": "73UTrrkT8nbs3ZfaKsF3B5Vw127zNiSnxYR4bCHMSJRuZfkuTShAeTPuTCRgacncYDTApMugaKuB6mbmaTVUmcG",
  "key19": "ZtJF5M4FHefDuvRtE2RjEmQV8B8NsPumfbHCF94uAsxtEwCJmFtBy6nnpp3oa3Ew1W2o5pNRZWDoCToazPsZ6tu",
  "key20": "5WsxwSvxt4okfKbrFH7hpL7ukaRiNqvoQcNFJHJDLEHAhRFaFeEhVeS795s1hFXsKWNZ8VX6j6vG2qAN8s1PkxdE",
  "key21": "RVqtiCwLo5fn2FCT5HaWQrYTEnV9itX1nxSJ4oNzosWBbM4Tfz9b5fEUGdgEdR8X4wPek4CfSY3wQ9yhT6cSRZX",
  "key22": "42X2FMFDr5twG28VohH5TrJVgsj2S5gnaZhnAg2SfmKJx8um2mAwbZLbFdnwEVWWyKXmTTf9C7Zw4ci8xfSqzQN5",
  "key23": "3oReSBy6XKaePabqBViViLF2Dk7bo9b8jKpPFwcxAyc9dR7YKrsAWADuwgZ3GyACFKx4SuB5G4FAJVHUCSo62sda",
  "key24": "2BmxkzDf57sWrChvhMJjC3qoKut2BvGS4NRC9frccmMdbq3SLWCxc9tudqPR5vaREkv6vuHYN34hDiaPp7gYkkhC",
  "key25": "pYt761CLg63pB4PbeWzDonZdjxZHSqYvkEKnatXv2RVg1RkFJBEKehh6By7H64ro2YAfrZUXDE7qHUdFk4iDKoW",
  "key26": "31CVdUcoQYJEPkY5jegaJ3pe2Navb5DqVtfG7QsWj2TDHBhhwQ9ewBFhhPiTU6jvgvgMYiN3o39afgoNtiCvcSvD",
  "key27": "5zSzfyFdKMeeuMgCnBP67L32CeFFWHyHgBproECy2YRYLyM43B89E78RGQjEcgZjGigExpPXHUeJJ3Prhsk8vp5v",
  "key28": "4SUBbfSXKvR5pNrim7uXsGmZQsUnkfBu76vK62ZQFh93ZSJcUmyBJYePQ2kLEygUC4oiZe6hGkRw77aw2FczLioo",
  "key29": "4xRnSEGB7BT4qJ8ume2oUGY72cR1uxMFRUrvep4jSGtvHhTEwrW8WbowVgGYGJxxKRCzJx6DjuB6ZnRwgj2yFfMs",
  "key30": "519B1eFmiihC7r5z2bohFAsQxDCiKjjVBhparARqYAu5rpxC78LkysV4ZNErKeL7KXodnCUGwvbunWqSgSmty4fy",
  "key31": "5hhbHaqtt7LT1FcPfULvEVHbKzELddAzEG8E2T8u6NAwxTTizhWNchAUZHp5CwSnht1sRzqT686kuMYcmpogwf2P",
  "key32": "38kttf5vztchBPv8c1QqXM3w9LhgpNXVTMHjVetnB7JynXmq9DK13MyJ9xvQJGzR9sZ9uvLASC3yZBUxBfX6AfbP"
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
