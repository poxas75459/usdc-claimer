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
    "ZLRg9EMWaqtGx3zPUTzmiAj36WbEasL8CTQdpbffbbfBiFh1npv3PKZz9GyK67GQt1sXDxJUWnjY2cnJ3Bu22kZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38aWoBic2p877TGjbfg9P7yeBme1gJWa2NKWdfXdXgVGy6DA9biiB4nCLPDn1UGJmqL2Lf68sRVhW832q9aH8TBs",
  "key1": "5UukAy3fHvF41R5bCQ32YypmDhtixeFGXoM3HyT7ogfEoXFYrXXBbt1XQVkkdip17YBqYdiHVb9CuvUnyHovoJmg",
  "key2": "2THm7pjgLX9vo2Wo3LRS36LBP2Yg4ESsPQfJmw9KpXtuemHnsZXQh7BHnoK4GWbKNbFLBAnisKb2yoPuuFB5AajT",
  "key3": "2DfriyE3V29TDqzawy7TKJQfGw7XW9RX6fREzn6Ku3d9p5Fe1JYKtGJbgvASeEr8JFU2CMyUPPHCqMnHV1SoZbhY",
  "key4": "3PaRmHGKG1zS6RyszPZCAHKdkKaf7MUiqtoooPsXPPmW1efMFgepeLqxRehnhUNzC4Gywv4yEK5XcB8jyx64HTki",
  "key5": "2G7QmTvwK9E81Wr4VssYz7AQK13awxid9bJx8S59YDUpAsmdQ67atarDsdqiLRUDWAnQh8R93PpqauhmTsFMiRba",
  "key6": "4gibV82Pc15chKEwVy3kzJtLE6pvChr4jAzvdRecwaLnV7yuqfJVpXrJkqe25ifweEfaJHimr8RFVy46Fb29yRjg",
  "key7": "4xzvwJA6UKUZrv6KJS43P4Pnd9LFUJUjzvERmnm4Fe8xaMqteetgUzFa6wq6JNh7FGUMPsmJX5uM2DHe6YW5N5EH",
  "key8": "3gMTCeicGHfvZPpCK6PAm53xHPB74GTSa87Hhi5o6SzMy4BvtU2VDSwLNfyjwxDTHni3bWLPnDt4C19WhgG57Qug",
  "key9": "GdChN6WfJe7WbpUqn42tAj4Eda527eAEeAvKSkCRKvmanuUr6gLXz9viWYtBoM6Px1AhCQPs5mByTaYGwrzi71u",
  "key10": "4ZUVTBfckxFdJ3UWVphAap21ywaXCq8mkXC3TkCWrHyH6vZ8bHL6a2mKE5e96tR6wpfzWq6RGUkdLToi7X7eFrf4",
  "key11": "2FnmbhjUFMxUp1KSMQc6sGKqdA2kGoDXn929PQsxWXZAXE43mE4zqRSzxuYCwq7ZzuUnhVcd5oPYqgfwdMaDpxAF",
  "key12": "VbJ848sUj1Ux9qpVK1EF5Gw73i9hriGD64Y3RbwaxYsfAwWkNh5Zv4kr5Ack3dZrZesawTLmHP7M4mvY99r8hqY",
  "key13": "4iDmetKotEMGRg7LDB339Wmeh9b6VLfLBXCNnpq4hkWakxaGWAcWGkR2mGPoXrUtJ7ChXei29H6simFMEHVdnFPH",
  "key14": "3GQZ57df3ZP6qrQ5qCrEuYcRwjtRaKNPrcdR3n8e1sU8v6QM6Lfsrw9wekByf5s4ywKeVs8TcmLayjDKQcvjsc6n",
  "key15": "EZrBexorBx6Ky9t15Ts4iDNxS9PPVb7kSH3XfJs2z9FvkJg3pHo4tzvQngv3qbDaJswJjWLaMFsoN3S1hS5viw3",
  "key16": "6qkCMxKWFko2bdptgt3YQxPDcpJe4CLjBnmC69p4rkqXGSdmaMZdLrhDuD4y35rjnwaUU88MZfMM2SYsgu7MdXQ",
  "key17": "46gSckWgT6sV4shH1MJ3Yju8jNXnp8nfYwb158Dh5q9LbMo7RGk4vTfgxdQnhogu7GhMwg4P99bBCooB8XhskN3i",
  "key18": "2AzVGK26ZVs67f6LUy7h6gmvuoxbfPcasWThZHBm1WtrhsjDcVe6wtQNdUb8hW1VyrSQyoGB4BBRgyarQaN755EX",
  "key19": "3ewGUUBCXcFwWDNNAJ3iDyAf3sHkGySztiBo5YYXm2bbEeNtL7jhPkBnGRrUkdW1dWUEDdgN7PxEZyUxqydYvPyf",
  "key20": "5YiDyiP2oHro8iLZToveunqryEV2iHuUomADPduugAK5UhrC3wGMuai7hxevefBeiUXHeXG7smN9KexsmQU2Zutu",
  "key21": "5m5hUgCnRbrXf34mBLb2LNyQKUBSpUY13rsxsFyBqs7Hp3KUF51wbtpSYbQ3jq1PW33eNLSphBjj6k3PqL4bFYkp",
  "key22": "47BiPr5wJFn6XvRcKQoWE4BFK1r8JxJB8kx2oABTBVQryW4a9a41ybKyi5mahuCDzL3H767MvitHY6AHTy8XFM3N",
  "key23": "mKs7vjvNgqUXjAULkDkqWNVEF8ZeDKPkuSdHBdPKC4Q3tpZPv7PsemxsST5M2b9FW4XFdZ1vZc6Y9QC1zg4Eze8",
  "key24": "3epCT8uddHEoVA4gHkxHYETP6Jr7FGjCJsCVjPkzUDykRWKFMsTLLSUEMLScpNBCvZghCit1UkSZiigSMrbSK4LD",
  "key25": "5kUTaD7Mk4nFJpMcCgzPtX56rph7752ufQeTn2erwYnAeRb7XJn1WzP5bvtxUUTo3rq2ZEFFewb8RHs1y9nnuY8L",
  "key26": "mPN87RBPncngLu7qmo6xQfiYTMQKW9VCjbnfi71w33w5fMca8qEQ8vdsruTZrzhzgHw2ggYShNbFSEuRfxTPw1V",
  "key27": "r9733MywiKRcKVQuNxUAXJYiPS1M8rZSjFgJJXa4n3ayv8f7MP73rCVmSk23mUAEdfFFRVpYY6juQceeTMfqECV",
  "key28": "5ipgX6WmMmC5dxYur2fkD9A5uZZ2soitQcPbJzCFcjDfBtp1h1KYpPjr8sRzZtfki6mkpHB611E6PJ8rndAu84Dt",
  "key29": "HP8GwwwcGTCzoSx3trU3p1o1dtAzfGtceJL7RKKqjcmyiHX1LkaL1meDrEYRNmQMGiYx8YzxaPazZin2DpnHvdg",
  "key30": "5rf7VmehY7Gqa3cMGg39ReUvs94n1NG8fMLeDR4bV8nH1pHq2E6ZWh5gak9RH3Ze1Vo5GyVVX3HeP6p4EjrERTfp",
  "key31": "4x2C9K2mDJgtPg7A4BxrxZUffh51fvmTEVvVHt2a5WZPQaCM5rcTzCtqLeqEeJaZvVRmc5fbGx1WmgrXrkcGEU9P",
  "key32": "48egeTVuN91FXMYuSB8oM2gZzDDXVMBqrTnhZzaqw4APA3M8ePFKyycRG7fr5eDfdz924BSzUjWeTRZhCBEdmCrJ",
  "key33": "3iaxVbbxohqGbMS5baSJ1QUk7T6vkxQVqSvNuAMYR2GqRw6LBrcumkt4pYuXVLTFBBqYSXCR6jkNZtgoMmhpcioR",
  "key34": "4gQSMHpSBjo7KUa1TCJeS4eJs6hNzMibgUCgPbwxXeac5anrkGdAabSZPYVjDqdyEd4vtfzfAdCLKWjYqCUZ2mbu",
  "key35": "4YJ7noEp6DRx5AAT7Z9BPP2FZq2rpnqy2pQ55BgCWEFQ96R9LBT8frGaTKbt368YhHpA4yhWWx1kh2a2RKJjzwJi",
  "key36": "4HS6M6G5R9wYS7termLJoteZmNqm1o1uDx6FsAziDtFUGZQZaZTrHr5Mv9B3Ke3XJAySC3C7raHRMu8PD7t4jCSr",
  "key37": "22SizXuKRjAPsQRb8RzARyczcVSCx14krKaCtiDZhxKrdR5zb6U1tMmuAfYUcDnXd3QQF5mPGV8Lk3LQzczZw7yp",
  "key38": "667SgE1jqrD1xwSrk48feusxe35Puf5rW6r4dBxf4Hcz7eS6HgTSRLaqLniCibSC5tEC8BNganwycxwiFXaVeVJP",
  "key39": "2wH5QP4H9n45DkyyorvE4Zbfa3etLksUSoVzmCdxMPPDSBL5kewdrTHm563cafXqxNHMnUfGxkrnGVGiqiQct3A9",
  "key40": "2uMQhg5yE6WDJf7cQrvoPYBpVMqYxEyV3uKXgyi7U2RJq6tGUswSTrK9c1AbZupvkSy3t5xwAr4SyDddXZDY6X6G",
  "key41": "65ythG3g4sFuP6xeTJNJqAfNFdRKcg5abUmacS7LwJEsHmyi9x84TPYmZwXsYsFS8ztNYSX7LAPET4MSBCVBBmCR",
  "key42": "2fJDy3iXenbhacS857A4PXUhBS9jLyQiGTM7oWUjrc7YUyLH2fqqSoRZXM372eTyLRoSpV26qhpwQGNsxEEJL4AB",
  "key43": "3krWSamDKXdbsNmsXPByBuWR4PKf7xYMN55tNWU2b5AG3weZRREcp5AWxYbTfMsHsYWCDNhSBTmpPU8ofy165okX",
  "key44": "3kKCUEA6i7UXb2XUu9VFeXsy54hoSTWEgANw5r4B12QHcChaXCWYw7vHvaKawHguAV7Y5NipcpYdZSkqjjHjGad",
  "key45": "5w259bA2DX978SFKPUjnktXMQupvyxx26wAma4LMyWi3WJ2fyqo3YJQvhMPjHdzewNQSaYV3n3GX2pig8Q53BWe4",
  "key46": "3TAif8H8UZ9G96Z8QJxeBHLvxwc7WtedBvYJwVe1gTrZsn1J3eZWwC8xJQ2EdtmjVNW8vM9RQ6HJAxhS4uZpSz68",
  "key47": "HqUZksKMyDUgcC5yG5LMVLLybjQ3QQE3hBVywxEwGtvgUeK3Yr7HGQW3t1Q1vCFvACcxNuBunLd8NVb8zMQ6RYn"
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
