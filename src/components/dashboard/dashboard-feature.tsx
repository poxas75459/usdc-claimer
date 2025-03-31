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
    "3hZGSyxWYZCtSGXNASVmFbAQYmtpccnHFrMqs3e4HgsDR8Wy7TtpXund78Y6bsfcYREgCy5A4Vwer13HcAzrC8jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qSLm4oJdHb6mjNJob1NYVDdtbMzuZ9XTBsptYUU6cBzw8gaqiVUTdvvq49xZ5Yb4yumsAtJSmueegVvsPgJzirh",
  "key1": "42SA6eo1wvSMbPGRM4CAUHiDZ6qPUxX7nJTnTnx9tEWHvJfnJB95tmRmfhgudisiYreVGqiDmx5Ys4TdmNpWcmAd",
  "key2": "32t1h6QuHBXaCN3Trw42qpkD6z1YBLLXK7MbtPvCVc5NXZvaZKZCPaNG6Bnz9pv3Ky926RbAeFMUCZQ3JhLXdHZ6",
  "key3": "9SCXhuE6dsLbbYjt4eJ1xx1MZqaA4biVmCiQykcafE7xQMFQZGn2QhYRtnMVwcZ7f4HBoL89gSWyKeNRcATYUyK",
  "key4": "3k21BmyFRzgR4mVByKaN8HcvkCFA3GWjiRghYXDme8HDcNCDqPt9KGZ2p283TXAaGGENZR5f1BLDd2d8PDFnTgDN",
  "key5": "pyipuZs2FbCtLCmTRWdDpKeS4Y3Xo1XuD114wPmC9KEEuGTGDZV3SvHgbhTznJWo6nspw9d7PvJ7JWFzLs3zF5N",
  "key6": "g81W5qhwVW9p7SKaeipyjZNvWH48f6aTDsSEoAvDf4K3ZuyD6drkyGVAAFy1eaHA6m5C4uMcoLYe5btWMPB4S4N",
  "key7": "32meLKTHrdrU61TUHYbrXUDhKGCVc1GWUNPFN2y7ematpbHNRUwQrY3gXWXCsk3GbvvywhQ2GNY2NqXLYZ761aNu",
  "key8": "3e6fcdfFD2R2m4cYymgUbh7smnDRLaYqPHrAQAj9ctDXGMUj9D8JcjnUaRUAJKWo59yUXKuMaKENaiF2ASXQU6Uh",
  "key9": "3nHDH2eBwhURw664AsmKxx24WxJkbCs3KEJk1HkyZqdkpsFWSmkfYbUzYG2XMLqYm4exvTYCGunizigtAcv6JAkD",
  "key10": "C9Dht3o9zg55Safy3QqWEfqWuCUzZMW6x82EGVoa8i2sL2DBNsD23RvoKBn5TeViAawxFVSB6waKLF9Mo7BwDa1",
  "key11": "2XD5uZtHRX7w3VQJNqZyeQLh6TQvpgp7ipLhuonsNS6ytN64dDyXj9jzonMenLooxLa8xp8bZ842ZuXqYRi5zSHK",
  "key12": "3HZ4VXv81quZxAme4WSukgumo2PGfXRQfxh2QX4LftrddgSA4ScgBJNrqP15x64R6czh5NG7SSbVsFHKJ13fvHmp",
  "key13": "55kYwCHcCz8WMCgUxXrPXWDDAb3U17eCGgodZiEKy1emQCcqNjwgT6WG1RwZ5YwXRYUNM27GMynTRB58nZUHFwmS",
  "key14": "2L3bUh9LYFBA9o6gE99bE3SE6rJCgxNTBxhc3aqPQYcTRE7Q5cnsFZzFYVpKRFovRpAdBpPiF2k4w3KspBti1BVU",
  "key15": "8dgAQ6TzFHiBakY9FwhedmfxAosY1vstamT8AubLWoNZvK3ScAufNgDFeWCcgubDi3dRLxEbpcYakmSPqY4SpZP",
  "key16": "5eWkq1fbMaSWPAGUYHbhhSVzne7FRfUUo7LygzFwmKoPNMiKc7qGSYNJbWqXPzujibyvNYs9bR4qeUUK5saNFP6S",
  "key17": "4yps7n4r854AfRQkmeyM52Y8KKQDQHzhXCbVQaa2idCHUVCucWr7Bvrhc46vm8gTBTWAb4KopTzp7AMK5ANDJ8PS",
  "key18": "65pGTgNcAg7vmf5WLgcFEmycUmiGYtitbAbhuQkeE1qnu8FHH3t9bvPBCzMF1CwcSj5Eo2bvEmpk4urm4BfekGGC",
  "key19": "47HTA6mhp4MLtvKfVNcQhtPb61pEh3sLZxucGgR3SivpRCr4uchDKr6pB7VJq73aPwKR6dqFQ2m2HddAKUh7a6EK",
  "key20": "4zYS4VN24YNHrZzfSAsrXUb2rsUvRWqS9mkrFf3gW4BEw7VkdXHsoi47kaAjHKxos5nzDtQSPDXTvgNiuF6XY1e4",
  "key21": "4LFNJEUo3cDLrdZni8W36Lb9e1NDP2CFasdkiiDLRP6W5DcJ8DyUkaAKgTGWtkMHSwtxkG9CYJunSK8KN8ibTfQG",
  "key22": "2hsH6jLY5fdJMgPrA72YQRG7NszEgYTPLegbTFji3xd81qZNkh9AvCVd14sX4unPiKFUeujgApVGMboF4vT3Nkeu",
  "key23": "4bfGMQHKShC93myHTufWRvTts586RTuDoAf1u4qKqfsxfZ6qFtSrpkgpeZi9NT3W9sswGy8LKpz448oSA1GEphQB",
  "key24": "3Y3FZLom1jkfPQA4ao1ptaoxBo5mvqD9euh57p9kN3hEWzE8eHGJciXgeif3G3aPXhS91CHtBiafdALKgj1QkMu3",
  "key25": "5hinqeoTdhyztd1BPt6oCZPvFq7ABdWSHVi3M1usETtJ1G4H76WcU34Dpd6jSdBWdFKZQT7HVSLq7Wu7ri2U4SKQ",
  "key26": "39ueJ3qNe1G7A8maPmAetYj5KaGVp1Jh3ikHtdwftTkaJNLcKAgA8H4WbLp5aJ7pHRUjdjox7A9jGRRfrvbRkhfj",
  "key27": "3SjUXa8GE27dajT6arTts3TjAZ9npVifxBbdkB5ZY88kWXURGoqCUKsBwFWq4PJXzcxxxoTVMvKnguPU32TEQfE8",
  "key28": "313zAzXF4ZyreYMg17pSveyGdsqxFepBu1Pn3TraYB2movcofnhYthKiRCYSQGhBGRk51XMRBHxzyUPg5NoDsm54",
  "key29": "5BgCgT1u7vW4DuZxsqrJ5S6vunTkeqmgmD467XZgQpCu7Z8QzkAfvRLHt76ini5ipBkoAbyLZiRHqFSFiMRhaAyH",
  "key30": "3hQDj1HatttPwF9PQqrVhqFMSK7Y83ofhdjdMPD47ofwBdN3cmH8hjfrAkfwdwx39ohKrgihuEgR4EnnzqdB1Lo6",
  "key31": "3B5QeWa1LRpK2cDKGZxFKub3JeoYqgdxnboxuGsRmmD4xS7WdKj4Z6BewSA1K4haMVn5dL72ueecFFCtumh2zxPg",
  "key32": "2bK3FgELdkGMHdMwVPXAtKceQpzkEgoHcqvFRLogt1ZZL3BvzQURJATdzEZjLFSCzMA2Zz1ZuV6GdPKjb57B1Feq",
  "key33": "4Eb3c7aKLzUg6P3SFEX7eZnPJjAg3ZMe3tC1gF4JRSEMYrdSaTxGFRF7efGWCnwN32TqZSpQeaRiAXEBeuoPkJxZ",
  "key34": "33Mb2fUnkBaUdrwx3dXSiuKqi1fTKj97DHcMXJYKB12VbY7R3S4UKqeJUfdetQ6YaQQvzXR9GySfYizu56gYjMvP",
  "key35": "3xP87pW3JNkTu6M217HptZkZqFqa81Jq8Np9iHDPaL2iUX3e879uSJptFKqixAAoZ2pN2M1vxuiBEaidihYPCLY8",
  "key36": "5szKXLLeR4iV8jCLTRN6ozNyEKGjCnf5RKu7jjqjm6A7McG48pbanMRLTd4ffSZVSB8doCquVuv24bSCMHURLfaF",
  "key37": "5gLT59r88KYzNJnGq1mc9E38bsiU7gTX6FkKRGLYryYR25KboNYQ7tRB2vns1fdPoAAe6tbE6cK45Ypv8vdBXEdp",
  "key38": "4PWrg1fBkEJgy2vQgQeA4ebm6b3waq2qmW1wjmUNN1FhUqFQbHK6gc1tqcphPTbfrx4WkmJVNYoi7UqmX1h9CLdT",
  "key39": "3wqAwPwM7kMTKGPr6n2tbsfQMUAFFDLYkJuDppD7XCJQuNCFNiE7eZuU2A1Ux69jx1fwiYPVGq2WutTNeZgcngKC",
  "key40": "qyVwVzau4tzEXodC5FAwXfdg3odyPmEdyYVDv4QB8KC6ShCartEKKj3vMiabFuvAbhMTD6XvbTzqChrjjVLMYeH",
  "key41": "5LkjMZi8zS9rCrz9sz2RPo2VhpPwsnCgktcHeGX8S2rdT7q8Cbyim4iPyrV8NUqPCpa7qFm6z6SMeABnSArYaXXF",
  "key42": "4BW71mz872uRvyo4wTpSMFYECtMWUywjVDs7De9FZd3K4NoKAPnWHQBJS3MEVC9LWVuGFwPbTQzJ8hEf8Vrgr1wC",
  "key43": "4wamFPm2xoiPUCN8eSYRGU4bHK1P8aCafEd85Gk9L2wpiFXJhGCPEPaPjKTLhooU2HrURveYtr2FUysQgAvp5B4H",
  "key44": "45BrizqduqM3GRkbbdyAT4DKqtaETEzerijDWzsrKZVw4cHHGoLx8vgsXJVct3SUD8LLt7UjfawrxCwneuRbwNz9",
  "key45": "RWopudmZNuAAagyoEDggPyTmcyAKj3iiYa8BhR1tSDCa5NMJ82GsxByJtJ1KYZagUGju4GNRdUUfEb9guB5QMc9"
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
