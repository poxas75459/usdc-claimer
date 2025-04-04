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
    "VqU9TcU8i28W1TMo8R6tY45Ypk4XEa1LcTb9R16F3GFNa2eNjrhUUwunG1UrzUPnMMqs1NCG9WmuBG9eH8wCANG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46F9XGtwdD4SfMU6hCEdM1MkvRd4bEL1FivjNPWqt8RRtXnMyFs3yXgsGE8BiiqLwNXwPdMrZ11SqfGQd2VQGAMy",
  "key1": "57S7x6UV3Lu811v7GfYWRsDD55Zv6HRHKubh17EHV7VFiif9D31fsnehvsKMdJQw86WTPBJHL4Jy8GenczHUyNs3",
  "key2": "2b556oZzLPS2HSgQvn55SGvnmnFrmTKBZufv9GGafeZmJRRrVA1LneNmkRM3AAUZGU5HCWKpLxozpMRaUTa9z5cn",
  "key3": "5zhfGuyNpHMi66cTHiCzuuncrWcGhjbrDQu69jasv4H5PkbgcQfgJTUwh7ZBx7vtpNcNHzkGTJSsgp6ycuNozXpM",
  "key4": "53GtP9fbbJ9PRcjm13dvuwBHCPMtYbeKzc5JKMFaa5Ze7fZD3WWm3dLqFwKAaYerGch1Dbp8jBeSz5dDqDcCMEa6",
  "key5": "2Sm8itrGfzK4usnyuDQiKjp4svYtXqi2HebTGt4ikfbh2URKVomXpFe2WrhG2ZKyXC73CGSHw1Xc6Ls6s7eX31tC",
  "key6": "2o1gyHjodRdkKbzJtBYWeQzc8KdqkMaKA7Q8btqEfq6BJuHPV9xZHWmegSc7XPP472jShj43MwchBqf8BjzRriTR",
  "key7": "4CmzYRfUfYv37dvyjAsu9gVh8EuDE6tyS2s8qxhwQxDPBCTdmZiRwiSbzopAJG5DRQiFEJ56epd46quGUfL8kdMM",
  "key8": "3tRDs9VSPG3ux7zMrCRxiF2yJbmoN86pRDpT17xxKzewQFP65XxL3ToFwv5F7zLbqkotUzvyyQJnbLKSr1Sgohwn",
  "key9": "3M7yAkQf4KRFhg3v6z4zkR9HDpGHshAZr49MqBb8vZbZbhLFMovihAnxe3LcQqsx5WEoXhLd3A8L53WbugvRHfDJ",
  "key10": "4x6Noi6DmkgWxbYdaw84SgXeQqXeHAEhApFfbZ7Rg8HLNPKRuTNvjZcQbktC6HqDmTDPxMaaywTqG8HXkWp3QaVT",
  "key11": "4RUnHcunbvEWCmmqFsGWVRxaf3T7f5fq4K3ZjJSQKdkD1dA2nZGB2eUSpZTwbZXzcEQGG1446LxPgNuaejCruFP3",
  "key12": "4ejCeKBPskdM7y7knitK3Y4bb4kioqNpzMpFCbVnubTW8QADHfdtVMyYssokQ7YGymu7Lr7DMsRqyiz2U2g4JWHe",
  "key13": "2VJp8wBe3P78NVcaCnPyEGTr2Jv6BkWFpf4iUm4gCptHKpzMhQmEEEomhxQKVT1T51kgoX8DuhYyXSAvF7ihw1uL",
  "key14": "26okxNRiZn7NzxfuKUiACFo6vns3kBQ4eNejZQ8dwUEo19wqrNi8vKLzrKYzcbqrt69XWiWxxTT2RvB7Ta9HGiMh",
  "key15": "3AHqWJZRaEv6Dr3bDdjKYtqCLhNhn3VTuvagLdiqJFcuLAcDAJy8F4GhsEAKED7xHBJJ8fJJnYycq3LVgeXPbkyX",
  "key16": "5JBor59iRzmqu1vWTUBCzt8hJwUr54JL1RfJiNQezj1941Cqk8aXAXyQ7WqaaSfmTmewokpWZ6SV5h5RSkvbDRrH",
  "key17": "4c2wdFCiEDMG9eeA8JiynVDsq1HxoSterokpT75bw4Tum2RGcUaVLRw5A3M2VWNXwR6nifsqma7FExCAjQVsfaFf",
  "key18": "5cC4effKHt3EZQETX61ZXDERkwBt6Nx1BkygQCisc8PV8oMte3HNkcVTg7wYtGWsts3u3D1jm8niUUvkspeWHRsf",
  "key19": "3ShCg4grrgJFEMZDBwhBCjWbpn1hQkCUqtBwpCnudzA2P6W66mMNG81wfGT2NyfLNQYr7Wg7qApP63jL72xxvfyx",
  "key20": "4ACZ3h4HxZ5ehneMpX25MVNzVCbqbo54DbFG5oWvvVj4eKxuWH1U2bSoU5BqQ37UuhsepNgy5c5i4Fzy4xT2pzHp",
  "key21": "R1u9gewR79z6cqV25m5YM43XG8CPtb8zShV9A6GaEDLSfSK1ueFhvq4MHhNVUQARi19L2XRGCsmSGf4WJMBLLTE",
  "key22": "3Bo8p2157krVR8aqLhG4tivsGr4r4qJvw6HRWY1Nx5FaqVbnxjzeuqT1uA2M3M6Z2SX2BZi51JeXUWXZk4MFi3tj",
  "key23": "4tiDfmZVUBUb7yGf4TH3uaTHUiaNjFfTQSR2iYsDuwgSQBCDVseDAzGbCXAidRQoqbqfHP6RN9esc4yRXYXD8xQY",
  "key24": "4iC9MnE4fVZDeZGpxuJjTn6dKBevdYw8Y8sVqK5uXFCCG5mBAb6Q9KyQoU5rgEToKy7cZswKFqRSn3kJgGiXYhmc",
  "key25": "VveUFWor77dWTNUneGBkgDyzwsNKnLfF56XdS8p2RWscFNWoyTiwZsvohFngXfaVay3DxZDokpuLFDfnjtmBXWz",
  "key26": "nP9Kwi96ZgnriqFvaR7cHjkPvRtB2LvZ4bcdGeC9tvwc3AaskZxYzottTSnJk6REL77kpw3vLV1gcvyZPcYFWwP",
  "key27": "3VvbacXqQCqKKWBMkjACDJzF7sqMDdZ1RobXihnuaZXSdiMfZWvYsVZxxLRADB4pdWyVYJrf2suYem5x95qrfaZG",
  "key28": "4pwQ9XwM8c4WrBppbZ87Ke1dwEYg2X5fnx7VSGdeo4X4Qo825uXj6nYLgyYZscRoBFPhRGzREz2oPuqYTYx8Hs12",
  "key29": "2PSdNpnYdArweViPHw4uzg6ebGrZV2xU3D35fKuVfwNFWd6p33TPkj4apdQYZfprVZQkd2C31DedqixdBVkzwkF",
  "key30": "4uSJF1qDFHSmbja5Y9ecqB6nysAL7cK3BtpKCSgqpmyRy2MkJq8DYb3f6vkXuPek8VJwCC9TGJ31EJA71vUy1sfa",
  "key31": "3xTmXGaLCtJJeUUj21KDZ9QzP1JFSbRobDkyiXjx153oRAnVwxiM15BUaxbm5oc1ih6Gr5XyfuYxyJRavCg7bcKM",
  "key32": "2xDZ7NWEcEDVQVvcAoMBEkyUZJN6RVBDNrDnLNikUkJ1XXAHiPntJs9GHcjH8L14SE4JAD36sAAtGRe29oW7ZMXy",
  "key33": "2yhpy88WNi2t57M5q5dYAz1NcXhVLQXjaesPbkPjnaKNKyAfw4tzTYBr2W1naWbZG7Z7oLFkoVFnyW6joLGqH9EC",
  "key34": "GDugzzRVEu2g87ggVwus8umF4vQ5jZjeeokNNs2auNDehD7NyfsD8hvF5t52CrBU9WgmYJ2hEmKQJJTnFtZUSsx",
  "key35": "2f7wNPCnBJvozVgvdS1cRnqmTBbiGsTR8i3wreMjXMADCf4nsUib1no3bvLLGG91VDkZVmEHeonPCMeMjAhuoGZK",
  "key36": "4LEq56pPDC87EbzGUPL7kARxwVNVpgxFM4XvNpUjTpXv8Vb97zGz9msH8SvJJ8MyYqf4KXtZkirAtDckJBhLUuFE",
  "key37": "3CewZU7bFAT3A3uSnuw1BumRfwRM7JThh4Ck84qn1uNH27QagmSstVVpWCh5JxN9iVVw5T5WFrMrnzwSzfbDmZBE",
  "key38": "5k13xdjiXECiDZfkaEzHpfP2yQ2ELp8Rj59TWA7dp8Zzd6AZmysFaBJkXLUYPZxgGgxpE4yCDPXp5cc2qyTJTeid",
  "key39": "2VJWqLKWcNPwZMRfzepmn5xiZY6kiTUszLZogfXaeYJAHkjCSwz6eDPif1PYTUYmAPRU3QxoFoba7Ms6VdKkDYQj",
  "key40": "5WE2VrVUHnVQpqMHkhY7ED516tfDv2bFLoYPxf5FDSnK9ob2yBEkKi4HgqvgDAJeGW6MVQ4FVFNwFqdUY7g3ZcXR",
  "key41": "BTrrbkFJVoguxsFYz7vvWbPgB3UaMKFeAhv5DJC5mxULoSifHk6joe7ZCk6ystbZn8VyHdtuy11dGScrhYTqNky",
  "key42": "4w4VrRVsLG8d5dZ795qkR1vwZCrTZvWvEpRA9mLHfrdQZRurEpkyT3cyBE6WZEwNnjiaW2ydLP95faz6SFGntm95",
  "key43": "32dv51qnjnEewHxNziky48Mp67imnwQGURVtEZrrZ7Efp5KQGDJqHyG94BARbm2pasrVKXw85Liuj6sUQq6khBnJ",
  "key44": "2PChxyimGvQnzmE1RnN3btCXi4XJAQgTfcKgsdtt5oCvygRbdi7FpTLFSJrRhaJAXUov8BdPumi3uFdq8tVMeXKT",
  "key45": "5EJqenxYtiV969DdCzupF2166evaBTXDgJTys8LRJqTncP1rU8wQpjiCWiAuFretqJw18jre8hiQGSvbDdqKxn7b"
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
