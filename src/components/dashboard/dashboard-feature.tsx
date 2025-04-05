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
    "3a5kC7DFGesETYFb16t4YbzTGzPEec4YhZkkYBcWheu2vApSCynbodUMr7P9fppsb4HYa47bsBkFCV3LMrL8cP7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bKWMWZSibK19k9d648oxnezvpXcY7fwGKdFPt1XryBw7S8sv5wUoD8xcuPFUnpnTvk2v8REHd24erjNTAjDVT7A",
  "key1": "64AxArnUNTP1bTDVZuQrSmejjJDpN6efQKEpqkNFMy3d2qiTy2WfovusMP92xagCnGk99eTFEKiLcfuTnyiGHz94",
  "key2": "3W8EeA4Rgh3uU8jTwjWJxAZg3RsiSjR7ABi9juMMytrnSPowX6d7tr9XcPhZUuTF9SUCRDXBfNN6vUEkADsvTBNX",
  "key3": "2W26TfReruTuxJpQya7FL4CzYbTzkKF6mWg2NuFoaXN1Wfjs4b8FfV8ZKog6G4W2jf14pg6XCREg2mH53D16PYQd",
  "key4": "2GXxdRg3NGNN9i31C3y3i69TJGbC2azmvAvhGohqxXMifvWUv41DG1NhmBDmPa6uJSNQqNkCyPD17CJQcDTdEztd",
  "key5": "28z7zM3oRrikkWPrqJYYnbpdCtxBHnXhpJ9K4Nmrc3CSVrmJHCiyn3SGXvbgw3g1oR5dsntiXNv1JdNAEqqps2Aw",
  "key6": "3VbvrEEARnWrxjA2rsVRSor6AvHUwqzJ5E12XeZYsDUb8TX4V7JY6Fnu5e9JpADMc116p52HBoHAYWGwpFcycViU",
  "key7": "3eBnYMtPXrKb8GwZAuZhVbZnBgrkdHs5EW7vk8NY4ibjksZdbfzqCqWT81T3UcGQSAV5of3EeWXyyBx2t7QeY1M1",
  "key8": "66rpnsa8rAVpKdUJMGnhVqSa9GFRRAxpFCtv85nBpqXojbDpyvfHm5G8j2VJFWs3XYPzxEMM5sUHknsCbXo97iYa",
  "key9": "5p6GieSVLKs7qVFRQoFRs1gDH2jxBH4JHSvkj4B5Qksvu6wvBLxsudzkqVbLihnqqRJtsuE7qWzYknzsFuEftyQ4",
  "key10": "5Ku7Ym88CSqYc3pcesJd47bnPtrvXyfsDbEq6ubk5YDaZkDdwQMyi3PkUNWUZttxBANzQtwoXiGVHgW2KRE9G7cn",
  "key11": "2eg2qmBM1H3XjTF5ZakPAnyafrwjqQfo2cB178YAdbmgVcGXXconb9yHW2w71JeNPDk5jXdiNjQfQb9LeJP7RcfE",
  "key12": "3a1qYNXohjmSuH9UPPTSKXF7UAEEypjuQKGMUW7kmpAaPLmSCiBSTyWQgr3TEoRiUWSAjAgGPytjUXiJFCRWGjVc",
  "key13": "56SPm3wBBEXKC843iqwyGaDuerTttneidzRTkQv9vrfuB8hDV1azsMNeirgoLgx2Tcrt6w5x5co2XjZYqthiWncg",
  "key14": "2GpByuYbE7uzttxf7qCw4FtTo6L1U7XdNwzJmSGC1HnYvC5jJy7R2ggcjpvyrXRp6QfKEChfff7VmUBgwj6cDrZi",
  "key15": "7muAxNhmdB5MFhxvCoy6KGiQw4V9uD3J5WmS3ffHnZptwWA4f9FiemiMHMZ6FzChid4KLPtK4FDYXEWB56nfonR",
  "key16": "7oPDrTvCYcpWtdnMNgt37n6Z79sBCFWbvbiQ23DkCA9z5vzxVKFAUpy5NpLmSoxWusDHm9qd7ikJF4H5iWRqga6",
  "key17": "5manePoSMhSPcSPTn3RhWiJXzb7zpr9sYjrAGW9UomThiohsg5QNaJSgciKEEf7AdFmgZibdfhe5cGMCAaWaTXEn",
  "key18": "5KZEwJWPEvN6gtEbjvvjBA7E9qCEc6pfhASWmS8iELeQEqjYHRg7dFmLmStm28pG8d5CrYQdR3ZzTJeV1MvtJqmY",
  "key19": "5TJwwyWsXBZp71u9jj9YEDx3veLcLcZNYAdqL72g6Qot8bB1L9irHC5R52pVEYyGY7qhqK8PXKpb46b5ktDiecfx",
  "key20": "297t69k5Rm5xMMVAXZddjhRuJj4EMS2G4WmnRnDSCQAgdnTKtXuiCDCu5vc2fP1aGCGzXoLWfnUuMXFWwv9DxBYa",
  "key21": "4q2YG9hZZms2HG8tiWiqpFd2VKc6KMmw1PeojCv7fMxhc7V46fLeSuz1xC2kShKvBFBmFF8D622V2MdUfEsJLxLE",
  "key22": "4jj8dC6DiyacDpJMoqB5J5xMARsrBvNoq3bpHVmvhSVprFrhpDeZLySCvCuPMWuHurw1RXv1ZaYSXKoDnjVNDniq",
  "key23": "oftSg3gcNh67PRBCKoZ6HSdJ7sgxFhhuDnFEmUcyoALtUF5Nc3QZf5mCrvWer9wqzpG7g8bCQyYzmSTqSfcsL1q",
  "key24": "3HQKXsb14XN35JTM48JYfd4DQUZVaid97ZRjRFk7EWrivVEQ9LWctgde7YiEKm8broxN4u3c2KVtey61QSW5VQkb",
  "key25": "pzE2FdmMKacc1KrdNyxyRa9tY4MZgnodMhHpwjaNqzb5Rkrk9wDTJF2HYVUCJTHXhXqmANXT3VRyLycrmtEHYuZ",
  "key26": "4BLDQzAgtVxqWte3WE9GHKtiCJ73jvKV6te8vyHnuBDgwytqZgwYNFy72Q9H3gBeXrD1MDgHTAfTo2bDqaw3Xw8F",
  "key27": "5C3c3AypHDuwZ2f36aiSWX3D2tFXN1dovhCTbAUHxLhzH2XDiBEg9QMAHEbocVPnwaXwtwdZbD1mV5ujigfxNPRD",
  "key28": "2LVXToCBzQoMvDBSnwvVufjjNc9NRSWBzrqFXtXPaamMgsZox64aumKXTspjsfDzb2tXQ237DEYJZvZtcfWkPGtP",
  "key29": "4AGsndYv4LRfTFc5fsxxkggE9ymxcYsjBRrF8JHJUPBY2uz25kB1ufZVdivVrnY14AxNBMmt8MRLdsG2YUbfjvRF",
  "key30": "4PF13aE7F1uKcJnozmDZmZoh82nqGu5yi78haCAPDzYCPABRmdnL8AGWa6NnUe1ciccXkCA3xq5DshwfzoZcQcJ7"
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
