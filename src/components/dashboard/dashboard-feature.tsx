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
    "2yt3TFoiEpcmyEupm2HfRM3BetrZD1eREJPvhBE8gLExeVmTHbfwD9WTCgVpP61bZntjSkEhfM3uHFY2cNZGXmk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MY7d4w3K4mDvFBGvWwLZyZHgzwFbQH5N7D5eDzJ4CaSzpc5ZUDoBhNZDnMFFC9dXkGoYWAv8FVSc7nBqTgVoLbQ",
  "key1": "3rty1yU7QY3d4LcaGgK8atRttJnuzWSzqpGYAMpi5gMac3uZ79tKMFweB7bj4896EHKFptRZZqejnEdvQs6o2bM7",
  "key2": "2hvpyKHffjLMPfUAEoahr5raQd2eNpxzVwjrD3AA4DYJSWBshp4LgqWVahcjeyfBWSSpsBVgabbCWCw4wqygUWLA",
  "key3": "2jdfpAYpDQMtPAsnZwdiSL4dStuxxxKgm64iiDk6Zs5Qz9GxpjUSmpL29eV63ide7RY2nfUjrNDSYR1LMMAKp5Zt",
  "key4": "4MjPSmzxXZzCoWdEHcxoghwJQ28pmvNrAtjtvQbjiBJFeJwQsq2YSkpK3UppNscA5ZJKXpuvuaXzc9Dcu82LKYPT",
  "key5": "BfDoEFP5yKjXYG19gghHfAjfSThgTrXd3gvHdjojszcDSt1UXYQmiC2mKUp9ijG29zhEXYGs4kBJurjP4eNy4mk",
  "key6": "xe2nx3WLitA2dMe8xFuMVv5FC3pgtRExQYwV25kDHRYSyn9TBSyQkdNsHobiTcYtUYhihDH4nHybQJFNf9QfVrM",
  "key7": "2tNrG8Woxn9Q9Tm9kpQn6JWhukc5RKNnPHvLcLgYzXw6WP3xG43bdt7SmW2eGe18sfGskkDm8AdQM9Pdg1TbdPfo",
  "key8": "LEY7ZE8Mu8FXDGDikJVUBLK7n3g2MxgyDKXkGcyzsHv4yK2y6w3qRpX53JVK8wNMm5UNEhYHGtt8hp8XTgC3TTQ",
  "key9": "4bSo916Q6pgrkCcvdHvuNbmuvqZ3LvonzB8aVVbmfxBGd8316PJvqgBqC3tZ8ScjwLZCRQoWbQM6NRXaDKSTLjHP",
  "key10": "5ndtepXsReLQJi1WfygGHJ4Mbvffn86L8ETan8Cg7AbHr3bgQ6kRaKhgNZnHweHHpWRbvnKN5tCbGwYPwZz2FJhX",
  "key11": "5kFfN7KaWJb5shhFUDdXeAFVEKU2ktJNzVzzs2bN4B139soxT3RUJnHivAP263T6Us2XFzpQ4kGz8qVFoAkSkBxL",
  "key12": "5X2n83Y1QPXYdvQ81KCeVXv1gHzSLFdRSXPVHrovgoChaDWPvvpesLXNiYWWJibVa3d7y8WC6SnqrjoPRhywUQmW",
  "key13": "3rfj2xi1Z8pTUgbbtfrSdVNuSfn5VkZ2RoJR2XberzkkLTdqQskJT4YtN8deteKooFmeGLiieHwf1WWogko5WVnd",
  "key14": "2X22r5hs8D1Cxv834mtsfNnaVwGJrHjxQC8bqMkTvfhQDYhyFPQezMUGXCYHs6reZUkbiAvgT4PdZ89XpmdqrQP4",
  "key15": "5NheEMyAbhL32pFhWnJicRmSuSrpV5e9Vrame72zxbdttXuK7QEnxYNPCULSJfiupMky24PwxR5JSnNka8nk4MMn",
  "key16": "Vhy8RwJX3XepVNRADaRjSUARdxZhC83AQmemPZq4emjowHZnhRcPkXL7vmrSn7DkEm7oavso8fCZqjtd1GxXsgR",
  "key17": "5NZVNk32J8noCfuUWqQXrcZseWdYWVXUPU7K6Mi7TncHN1arLHDvH84ReNKo1G9qj1uB7iDAZ2g8F6zvjMVJRDhi",
  "key18": "4zfB1m4qW4xFRYaiaEMxXxFQuzGPqjznWcyJ4FzwCp1sQDaux2D9uid2k13zUispxvHm6qJv2iMvZmsfg3p72bbC",
  "key19": "5d2WTsxYVUHVNdZQH3xSvXfgMALV8Jad9zjVgsdw5yUw3nLDTyTVThSDkheZjgr5Tc9cTsPCskrGzQ9QVF16Wg4o",
  "key20": "cgHwVJe2DdEu7iXYnQkCwqZvWidjBsAwnQpADQ8PfRv1UgLB4Q8L1FHW6MCgXbjeLcED74UsEcDfTQD96PKGqfU",
  "key21": "4d4LBE27VtLHLXBFLT9jytYzBz7FnAwxxwRJPZ4XCdybmhsyogiMutSYYpPuFtM9qbpyV3oY56aKtB7WT59g6k54",
  "key22": "WQqsCpt7QfwcvaGvp5LXi3G1m1ZPczbRtZdw17Li37BCUsACSzqoaXMLFoh3DYdoSEBm62gGNsT145WjgScSD1U",
  "key23": "37om96gowweW7SNiJxSEWXGtLTZSoMez2kwFYHdJB1pNJqnnY1LRRR6N6jvbRb8C6cbFqMcuP4yvBaD9oYr744J3",
  "key24": "41DYAqTPWHWDfS6EaMtyeEuHGtg2yE8oEaRx2qjs1Fav2KfmhaXHMCVGBDKXabHRjFk3JPbN4ckRF6wEUSKWk5fA",
  "key25": "5kj6AgeD1BSb2YGKfpKwPSkcgT33ABtPWr7AqrAjENcoNyMk7XroNVH6LAeBPppYsTBJma6ZjVuSr8ZeaB4v5AFF",
  "key26": "m8HsrTRNbUfyiMkjKAByTAX1sZ5CDCsTyufYxBBSUg1BcF6242XeN5wiaYm5qu9Ax9RSPsDE39esq4yceAvXPr4",
  "key27": "3fbn2AwzjvervpBgHKynPHt41BNrC1cf5ZGJEC4wbfvtdWyeJPa5izSPRyRY698sKqMDUmfkUUxAxkmBuk1zgVYt",
  "key28": "5Zv32mzc71t8cBWGGDmmuxAk9fZiJApQaeyYjLSmXXe2kNUT5hjkxGAjh5rSeHQ3KdMSogU5RNQbnvPqPrmTaRaF",
  "key29": "PYwEHXfuZnxgMR5qRLxiDAcCMgeZaz1nEYmfp5reZGhrHGNeZoqT3L1wR5MaeusQTwYcq1fCuvzowYbrAkM7FSd",
  "key30": "5bgmzok3W3eRpTF6QTb31xHuxY627UL4HbATkK9ua3U2tr4CHzM2SpubMh9st3kaELECeaiSYaYVxsgoz5MH7KkW",
  "key31": "4iqweusS4xZ2JrzNEWoZZk2ro4YCVPsFqcSLDYsq8MwJpNAE8j2WYAvLy834f71SEvZ6ZdDvPQHeQ7KpQKNK7NZK",
  "key32": "1iukWGMkKSTfAzJXZQLrNUNY1h6WVwFepUDRP6ud2MxdkkR4EDmib54DbS6oHRJVbhjrgoizdDo27msgCeea2UT",
  "key33": "pDmiyuuiDAP6hWEm9FcVkxLBvF7zwKTKesJ83TYaVTDV9GBhWyrZrDsnyD12sBPEbdWrWJpBMKfoJQHUkmDAGk8",
  "key34": "5VS92EoQhnqBVyh1NfV54KEGmd6K2fSo7rjg53cGnx2Tct9c3PxSTQ4EFvGUYKwXnqoEMWcnSRmDdGBTbMvujFio",
  "key35": "sJLJh1jyrr1uMTnBpX2XBHKiTTu7M2rZR5fs6pnCGxaNceYYVHumApm91kDBihWpSRhhTZM8CnadHrDmCww2N94",
  "key36": "5KnxoFFkftxvQ2zANhePZJdAabZ41zGoNAcUaiR97vgcraKjyfwfhY3cGxAn65RVkoSkF8dSJWX7Zot7XCPv6Pmu",
  "key37": "5QRS6Q8D3mEjju8XkQENFuyrcQnZHvcArrYyGMhKh3FRi4ayY5wXjUdcF5k7vbWKrBph3yXMkbnPcWw3x2XA5Mrw",
  "key38": "23dzGTaCuvSQBj7wUHqV3sfBVFXuSsnAez4JqMwNirsh3fiwJCtVoVe8tjXscqSSuopUqPqtyi3wN43dsKvipbKq",
  "key39": "5MUiT9KggNfKfaYzxqVNpdNHLJmCh1Fp6Rz4WW5CoKZhzugqV3dWFsXJU8Vu7PyRsgMFqUkUYHBWJwXSvpaPWyPi",
  "key40": "2HPcMXTVg8XQ9Fq4kCjBLkZvyyeg14SorNUkpTkKcckpxJ2vQvu7fMKn2PiZi2WqnkJwznbVJySMye8U7ssvjjDg",
  "key41": "2TraLbfLTocEo8V3xw1HCtK18ZzWQVLxhQraiRB2f5FWKNgDYPmFufeVZCSSEDbMryLN46pARThLsDTsFDCfRCt2",
  "key42": "RkAjEaVC3XnKN68GqhkTh7EVP12d9aMKBJi1qwWhREc2qFH3UgvNV1UUHg6uFEwRQgFv5ZrGmXtHyiSRWQHnzUz",
  "key43": "5tLiNjMUsr16skrpC3oR9YWJun2nfZeBZcmwZejfWLNcXwFpZDbzncBJxqoMJhtZofHtDwJN7RWWXcTG9MbfHtAY"
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
