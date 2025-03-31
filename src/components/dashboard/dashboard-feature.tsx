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
    "3urrukHtoRhKAgX9cLjBHsoJ2zXz1upspp16GwBGkXjdkvBAVaLNELg2hFzeYRgfaR36uYN344kVPG2LzScPiE8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MWAEXb22g6JDwZeeES7MzEesxC9mduCa6K3eGpxZELHixCSn8QvGX538RATNvan1TLfL3eKQWpy1LB8cCE12Sjg",
  "key1": "57LpBctAQWiYDttoEMQJdVgPMmzJdY3bY4yKRPvM5xn6D6gTqrZ8vCMHCMgSA4NzBEwAyo5eJaR8pvYpF6PJWhGi",
  "key2": "5iQRWqV4AGpC4ptQAk5tRniKz29DyvWEoZMua1aDxgKNfSwFowgJCzjdvxvtx7r92ePH72ZaYvs9EJGtaDhhudcZ",
  "key3": "3ZScyXX7jgKfrKgULZpP7LpyNMA2WFyjPkJLJVNMVWPVRP8xy8sk6uNPqvbJKmjr522yQ9bjGgX7i6jA5e8NTngR",
  "key4": "4J7aqveww44tRjYdyKJSy9T8P3ptVsFpKNhTADEfjJHRWnjhtTiXEP7HbVUdXYqG5PuKaRbKGFMCefNtFUKqZDoY",
  "key5": "2gbVky3WDLgNFhm4DsQakatnwZcNt4p6zGenwFFK6cL6KHHBXHQ6k9gDUzPnm6HECH9arK8EwohdBqj1f9TnEPC5",
  "key6": "5zjQD7FTPjsdU6CAmrkTTDNZSVTsY5LBbzjHqyzzMrwkTuRRmMJXhRgfJBdxwfktohnY6qNd3BMwz75MSf97G3tu",
  "key7": "2M7PqkrbYhpcGHfwdX7Wcnzv8eGzdr3boJavhEvwdo36iiYsCAMy9qLTEubVzSX12r4tf836fbdJBosVc1wNpjcu",
  "key8": "2ePoyyn3s2XvDQNPREQqD5H2AePfdv4252g5d3E6M2QjkZXuXaXAtwEGdq91k88JULiYcJBVwZkW4wuNrtTgr2ik",
  "key9": "5sJwiZsZqQ49ybQr4UVdnXDVajztG1XWCG5SDgw2mzfGSEVWaz1Qy5ZXxqMtZ1TP38AaM7qHjz9y6p8C3UCpNQh3",
  "key10": "dWJBJqddwVdUALH99tiYEWkSSxtz2SpBxPNnKZqpdbbK6qUhx13S2QoXQBPkUtYvS1hXB73AdiGt9nkg6zJjxtt",
  "key11": "3Mr1pTnBRyttsSdyvhuHfN6Dz1CSwPSvC927R8XiUgLWSVwUoxCKES3BXsk7bSPujQf8QGSL4wtm4kJ8rUBdncah",
  "key12": "b8t8F2V1oGJrvy7p1UumE8URRx3WLAcuKkeDcAzzH5mUCEHknP9Z2zms14hP1RUndkEQGyAd43K74yZ9bB5Khkw",
  "key13": "CRkiqEy7gzEZ6vj5Sfejqfhyy8wTtPyfsE6TrsrRc6xNo4fXeKYkyanZSAuADig5aF762w31APE54VJ6kG6sQXw",
  "key14": "vXhZ7ig5tv4c2K7cSLts8Ee2QiPLRj5jQtFufdCRwXu5cMNSq9q3K8wyL4qGkJCLk72Dq7SsaRRhy1GXAA3fGE9",
  "key15": "sXpcrB2beuLseFLMNjKqc4aAsM3CJXT5or4XcPzvjkoHEkGbD95TQR5L34JoE1hWhcjq6A7wWinALUpkZQTThGh",
  "key16": "2GL8XMAzt1yypsjwnSkSiMeARVaKJ23dRhrWMDa84YG91wxMdz37K6sj8XhEQUcwAeyts1jC9aBUnJ2NHhRvczPe",
  "key17": "XheAmqW43ZfdNfRYEm7fKD82sJK68vrpnmouEckPiqeryN7ADSrJFQukQZLxrHuSyRyu3e9jQzp62ZNRe9Ce5Dh",
  "key18": "2vSLbBAVBcnf5MVKZtbde8dnUk3wrFKKWAEnoNdt22gygrzETsyv4MRJeLW8TUnPvdBht2zovci2NsCYQbpDLajo",
  "key19": "4TRbGeBMD88xpDHiFoU7EmxEnX9SyCj1n7kgiDtH7XZMUJMDrNqzuHauRJ6GCtPcEp4UydL6HkHpPrqEYipdtVq1",
  "key20": "Pi141VmxTpt8rk6SC5CQ3XJEFBPc3Ei5n5sUMk85AYxdU1gWfQPWH6dFpqxmYbthjgpUqzpip3apDt8AGKwDDLs",
  "key21": "48w1sDJ9opLfVSiQnYuVj4zt6RBaRwVBU59UJRgR1bamxHxT5VxMxZDoabxeCzQ6Qwz7CFSGW4MV1QezboWD6yPj",
  "key22": "3ntAkptxofZ2NbrwbeLN7ucksmiLyZ84mPxQ6FnuFaixNdVguLCzZgkXbmvUmwZkon8xBmHaMyLEzBo2iCdx85wJ",
  "key23": "4bRTX4SGnscZvDL5R6kU45rc2J5ppX2mZ8UWU7x8UYunDJ7JaS9DCbsGSrsVffnGeCu9Hw7rHLCjPvk5Yd6iixc5",
  "key24": "7CvxYF7EACs64FT7BNBhEuj6xNN1BMWNoAVN877wKhSpkmoy2LSYp8ybuZzXU7FFV6LdVHJY5B35kEWrjUpb9PF",
  "key25": "2gUTX4N4hduTCoRvxW18oKEzrWJww4JRW2i22GwjDPZSdix3X2MZUNzwoHCTCPBTjzwnmeyeSmsNaHgCnfrJvYPD",
  "key26": "9KcPLZn4Xs7q2LuBLMWfoLnWeaCfHb3aEGKJU9h18AyJPtYXyNRFo2EAQASk1q1EcnFuxVhmkirWdSTKivPpAP1",
  "key27": "QHjALuV8JkzoQh9E6GvwU1vhJHz2eShLADT7Atx8QXdCn4XRZ9i27CDRLgZ6Fa1xjbKDU3GjtFz4tnLfA2W5gea",
  "key28": "5r3bEMnsTuHSiyagYGdy9M35GNGjtbAWYw6wZNRDBYTMvdc6BnjK1uFRoASojTFtz76fgrxJiztBATZWVHhEcymb",
  "key29": "2zUHmnrMMTy6eZDaaHyHuXpbMn7kmrdJTHWKcRRia6sCyuqMVDULjhAbRn4FjMJMiHJa8tLAGRjZNy82Ersv8tjx",
  "key30": "26UB9FqoZ57RFkXD4VSS4vUbdCBMa39gBSLjWdkg9aoZoMTdAMLKkhf2911wF1YsUaqx4YdL6zuSVeLaa3JkisK9",
  "key31": "329dZBRNJ7qXjeSpKMqe52K8XWJSTKdJyUbXKWo9rGyn78mCoXTdq7Uk5zedxmeURtVsVBFq2TGCsgZ87EhswLQn",
  "key32": "4VQZiMyj22LBNptk6TEcpxtuFW1SSK6p61xVvenEM2CfHLLTqernjbdYeZesWY7wcosKP7TVfKEn5ux96DHYoHX7",
  "key33": "2AAUbFLeFJv6rGbXTJa4UH6CvpH2v2MBpT21McVN3EnSmCErSEv1tyXNdk24h2WAZQtNHWtpznZXDiJa79Yc9bzi",
  "key34": "4PE1jUQqgBMN4RNTcu1CY5NtyEPGcdYMRdexWUVKaKdZWtMLxDkyCG7BiaEWn6iRTADyfhMUBcpLD5AP1okQSm6p",
  "key35": "KDgw7SXhcPEu3WE6WoNCTbRuAPA3g1nEdhFfwcXcdYAXMM1Y52MQ7vmCcDtzeTy7d25iuLZyt31a2iA7iHgCALM",
  "key36": "EMWeV8eCEjWtWZ5sHWx3DqLnGqrJ7KGVLpvj9bLzYYx4H6TDnw37FV38HxQEfBqv6k5ZgpcpWHx78azpQjAreV7",
  "key37": "2Sk7jtJUYK8y4T6mmMjWAVRmZu2BxSJMj1jpMw8UuzieaBU2bXacUR8bSmpoREei28knq2GNmKUnPkeiKKECTUdy",
  "key38": "4m8jd7wdqmHDaxsxVmTd59KzVT8QRdsx9HEGbmMsgh59b8WPSSq8JagLZSyJbjLTrDXDcY9Zi7uy6id7RD6m4jRg",
  "key39": "5Lrzm5H9W2vsREboXWx3BTLTHz1f9Q1aW4hDiX7fu8RZgQNBJ2AqeKb3nZ7F5nX8dYi6emfeErFT4SJcVvNUjoNL",
  "key40": "4u6gSnALT1pVAQM3uezJJdYzuTs4Yd9vAW1gm8AqpKcQyeSYe9aCH32462Ka2XsiQ3ZvBDoW2gPGRKb5ReCwm6kr",
  "key41": "2TKiLVwMHFWx1Y6w8CaksYKFB7S9STN3edGUw7w19NWCr3pQVC7Np6m5BDncnfpyFvquBZU3DXpZc1yX7Q1jd1dY",
  "key42": "4vQPJoaHjRbL8145vsRE2fBnxA9XY6FPUejxka5SaexcBBTcbikMJtsZcfKey5dPq6W1bbmEKJZ1vATo9b4FFXXQ",
  "key43": "3pZTDYE7UC1NGJLC99JtuSCFEknDvFCcAEcR39rV9d4gbM2gHVYLPCxbbCd857Gxd81KoTrwnQwxKMuTbT9SsAmk",
  "key44": "3DbDuJg6H9paxDW2Nyy2TEgynuk3EdMVgqFbqWCH6TF3omx4TgdmZcGntFLGQPBMHkeZ7VbbJR4oLY2YDcL6XAEn",
  "key45": "3D2rV5ZrTFutygjS2HbjdtQZFL8hzdrP9EF79VM8SsVX8sDRzV1wPYRNdpt1AmtqqwdmCWtFGSiM31ew5GvExdsB"
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
