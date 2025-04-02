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
    "2sFPqPbkveHWv8BabMbfF2aE1uSaPW7sz4WZn6DPmLGTKGfjB7SfeK1bMSp8dVmFRUH66V6gY1eP9zWAMEwZaNzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "559Xz847nyNj8aZZQFMoYMUgjNEDaaZvwGRVLXQp5UngB3YT2zjUxNX59AH1HRoVP25B5Rtqkb5aaTreKubMDtZm",
  "key1": "NJazBBTB4jSmMr6sNfYJsGykdvpJ1XU8MHwQDDRLgnYj7dnEwKqGYiTpnDZfWxjP7RSKVFhwapirR2rWzjuLkQg",
  "key2": "2XDrWBR1Dk7ybBZpab6wJX38NubBUMPDce6KXCVZsMSMp94SMdUjitKDN8sjAcrN9ggfXNGnpDyfRMJDN3cS6VSC",
  "key3": "fEXcrmYbx78whhfy8igFsqkur2syt7xztDkBLeAYYKvfAQ8n1EutcPvBvKpvEShtYSLwSCEBKKGaM3hsjvTcjkF",
  "key4": "2MaMSLSYZ8dYp7tAkbHhP2dVCdF34JqxJiG5NmAtMjV2kkRJmBCsSLXa62j7vH9XJG9YJVDH1mScD9MrPwfYRvQs",
  "key5": "46TkxFB9WioSU9nFjVKXYLSD4GwR2241RSxy1qh5h7tBtctbxrBVEQfDLxmdCq5sZd95E6HvPiyk462KcgDxuwkk",
  "key6": "5YaJNHHpNDueeycFQEGpG21SDUehL2z9LYwAYHZKJksN2oQNaHjkqfDExVKti3stRmFrurPmBauRTShEEM24sb53",
  "key7": "3hFrjUriPDeyjVZQ5boMHRfFzavqsumX8wuqgEwqMEZ27j9V6VZDcGsRF9SgwYHj2suGJxmwiapwWEq7e23c4ans",
  "key8": "2JAQUtrRKs887VGiWAYjDPbwLityecRgR4SyFF2niumsLVfjzym7o7rd6azbM6UjqtgerzMnxmYTrK4RRKRRf5PA",
  "key9": "5TiLH5RnHbtnCUDFJtwPoKHMfF4UTvPNDoANMLk3TWXQe57FHBr9HJ4TJXknsYai8an2Yw5QDwWiCrZv2SYsp7VF",
  "key10": "3UaqTCXjH6XcxGVKPQ8pCN9WZwnqcicBHxrAgsc3q59K2M36niLduiGLUUw7Z6s8UQrcEXPimCzYusgNs9RFD5xE",
  "key11": "2f83hVV498CE8Cv4RGwWKPAHS8vBJoFG9FcomtqPwSUZUqEX6ZP7sMjobWJeq2ZQ5DRwsBh6Dde4RbWpnYbN3Wst",
  "key12": "2mrRcR23Kmi27zj1VZUUWBTEaVPNLvPzJqq2Uba6xG6MxX7AyHTazBkuSdSQ6pw47AVxMC96RUqNFNqF48zt39sz",
  "key13": "H8BZvrmyBGECPXJsCYYWvtYKaTfzhNdNpyiz4XPu8VFmBDKdcpFxBj6umGmM5cUzBKzHoDJf9gN39TqYkwDTkUG",
  "key14": "47HdyCUR19ieGrF49T1nZNfKLs9dgk5hTbgtPDJBR8iRZnny5RSWrbZUm7rKZm86mPvrcRGaA8FmpDdbqHgPLFig",
  "key15": "5x6pXWyzgdDAkXuHpoJESZvQ7GcnNi7ff9Zf4N9f1kDMvxznj6tx53ibKzcZnihitaY5j84uks3n4gW6BB1GLobb",
  "key16": "3258RxEmsjoBHapYZxvhGtfxnSQZ9bBreKBBhgWF2mQGmgAfioAZYLe8E9GBYmPsc9nXjDxPpSaNQqi4NaTdMiHU",
  "key17": "25i283Zs2xLrCfe1TZM4u9Ljw87EcRReFMEUycgx8DyJMgemUAVE6yEBp2qojgzrRtXMkiArECSSyTjFEFNfHrSo",
  "key18": "4oVpim23AypVPiQkMAN8hizsrL8vASSUPyjzTxKbfSHE4NVFyiVjmPiwAgfuDmQ6KLPNfz8MUdpgYjGBm4UWgHmw",
  "key19": "5HYpx3seei7oa9P7YBu1EHscAPhSy91xuvy4npzgVAojU9H45xhSkqHJxQZ9fkNLoDemwjPa876kUAspUasauKxt",
  "key20": "27xmvjwur1degXhzwY8FrTbFpdCkm2qbVv7knD6aXNNELNxZUg27tYEMXhvSjYyBTwt9p4xH8CczdtcdfAt6R1Xq",
  "key21": "3pzCDm8J3s5A3QAxGEBYNmb7XZyfAk6k8XEPgQC2ucvGqpzMVfxopTiCUNWkXMfdGnhi7CMHfyixDpabCTfJJGRz",
  "key22": "5xzLpVjU9aejM2m2gLh4nBx4JK91WtevV7JN2jiJoGv4xVWJMJHviRK2V6Tgf628Ly8SZRs2WnEXB5kjSzvZt7u5",
  "key23": "56oLiD6zJHJTBVkkk5KviBMAmRNkxiahWLf3Wf6a6sKTpfZvY1TBidGWYvwxSkV9fFXBDuJQdNzzuDyNWwZSyVCR",
  "key24": "5pP7wvVH1Lm7XmtQJtztJVmmbghPXVmoYEetikBqiob4KxpuzJDgMQKzWei2WmSyGqV1y6io3UxPaNY5n1gjbk6S",
  "key25": "3ZvskS34MyXNNsC3SZ8yRqghY9pp9Fp3DTxK8zuRLan4cKFEE7tKdD1oeViToXC52CvTxopgCyN1ibZ1GoEnLCJe",
  "key26": "5UfXvMbe6sjpVfnfXTBgzwizLTTg32xm4iixMra4F5xzMH7Wf6ceBFwK93DMBBmofXErnvMk3asExHBPmuFpJKDT",
  "key27": "4p2D7Qddxs7QJpgzqidaDZcD6WUctpWhcuEpKfsJM6aqbKsD9CN3DVGPuyadL1LhQecDcRhiUb2thMxKrP7DpT6K",
  "key28": "5CDDD5Z6Py18QfBuKeampnYLiWPrRDu4h1ajEtsSLMwhAkm8hQP6Q7j3KD7rznYVWUrJQryGFYBjt4GmHJPWH7Lq",
  "key29": "2ktenhz5113srvqd1AU5zBzatHd2vfGma3t2CJXPR9GFmb2Dns5Vekpm8hbTKqbo7w1NVaCTJpRuhyGP1GyvXtT3",
  "key30": "4ffyRR4Yc4bgk2uudXyYCzyHj9DHVSa4wdLES7YMthyrFixLVHv2YDeYiy976s9KMeYoUwE7xqznJSPK8ChJjwQH"
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
