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
    "3RKe7JuTKMrvz8tmTTYx53tHyiUygeyFDjArVEqYfYVDzxbZNEZf4i8h6fBe28EHpAnkbGbZPR8FQbqEfy4sFrLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wWCFpgAB7S4mJVSyotvzxPiPkqrQBL1GzJnByPFUXAWzyLCUp1AAVpLMFRkbj7Q6AewwbS29ZiyfdPZXtKtJ8PM",
  "key1": "4QjwkgCVLBmnPe13TPpkhcMPTew7Zgkpgdya1xzqsrinCnTUbvrZmyNtWnaXozaMx1KSTCUHjj67s97uU7RbRspT",
  "key2": "25JCdYWwisu8u4uejDFAfTUMu5rRi2dYC6EyxYcR53BiSukVQMu6PU2rMda8sJMVbN7WiLzRjBiohMefSCYe5ckc",
  "key3": "37e5w3AWAGVNs47dUnrhTV3L53FsGKkuDcmkfxYRvoNyHHeS5KsDX3PqYfbA4V7Wt5MqqD6FkAByPAXXcrJrxDQx",
  "key4": "2ns1ypXGbdA7YWrPH4Q4Hycm66APdY9bQYeFiRaudyKS5RxKmPwGZavpv8UCfKcE1ptYG8tXQmmp5vMhxXBC7gxZ",
  "key5": "52JBtP9zRuymyAwK3dA8JX2piaWrVNYC1ioUxe5m2z9rx26wU7j5433jvNxyDrdb7xfAceSG6cQuEURJmXG2jXtA",
  "key6": "3WeYtYAdM8HyAeMcxBLkvUuy4PbJ4cNbXworNwJJJ89PHJqdnN8ws6xw2FNrVzL45fZLuWnHxriKTst1m9Nj53bg",
  "key7": "mxdCdM33FgRYmxd4FU4DU9aXk8H1UxYgtNtEnUeDyX6qcyCDAAgnhWSGi32QCvmnLuqzxsA6VRGAdnd4Huy2pA1",
  "key8": "2CyfvthnRZhKRM9ZjdbQk1DVv3kP5PNVW7DEPdFRdgr84S7Z5rMDvJEiN1cdFVxh1yq1kyzFXt6WybN2cRKaCUCT",
  "key9": "5uhXStcH7ChkSV8bKmijc7YntwJE8EV1fLdR8DsWTK1hew7BTbLz4JpFjueCSAKV5V2fD9bR5rFW8tUFekDieUL9",
  "key10": "2gdDN5CVPMtuULJXFuHw89vBjjJhBgyXn5Zd35aLJRbXyXbCMKa74ssyE37kztmyYGHck8MNAFeEmGTHc4MXHwv1",
  "key11": "3bSaCyQwova9gKpzUxAuchzn8Tk56Yywb5e7p3Qi7NFQjPTHezX7CbrFMh8Ad12Lb15WC97KJhUvNekb5uk8EuWx",
  "key12": "3kx8z1iPHTVSnrPg97bnX6jJoKa1FkBUA8BmowAN1oGkSfQb8TpZig5DsRhsSi6dXiZhbjjQFhMmjjjHa6FNcJCA",
  "key13": "3LetumFVMDhmWDybCiGo1a7JXDKGrBMc3fwB3tTLtTNcVjCE5qq1Tn2nkKwkJfjpJToJVkSkCCbq1A5kDfiSEN9m",
  "key14": "3cTfUYK8KtbyHKUAVsN4Qv8kUpARcRHEXokuQpqNmBUCJBohgL7e3a6eTTJei88E8NBU3XwqwbMkvtkr9xPZEGQv",
  "key15": "5vFvLtEyexNdeP44ZtSQeZLjtiPitUQJKcETYKR4awxCWG6xXYR37s6T2GucbkUkBecpEYmXqDkXq9X8ouxAcV1B",
  "key16": "4vj6V5nF96Qtjps4eD5zUQyQb8H15VjHD9GD88VFJVi3hvEMrCSyUbk6zBBDoCSzGzQ9N58GKLgGcW22fidrZG1t",
  "key17": "rXZ6jHnMrNzGQwSrZpBeR9Ta7M8e5srfTAgTRgnLVFKZk5cQwDKJpB5B2Zvdoot7VSytgMxTo8UWKvzazNSuX45",
  "key18": "DgcLKmZhwNJvKKipY1zMMXtRBW71EVcoorieHonfLJF1UUHWwXmcq6SyccW2rZgLyaPYV27UkLBerry8HG9A8uy",
  "key19": "5suBdLAuJp97L8VFAcMB5W79pRtkKAxksVWpeEcpAu6Fv3dXvqNqWj7bDPo3145o29pC4Q7vzFHstSCfRJD6Hetf",
  "key20": "2LnNVtkA9ZDSPecShqPC9huMsx5UJKoxVTucutswyWdeT7mopPhj4fT1kJkyanyjvteNd3HUEPoEM9hv6L9zMuC7",
  "key21": "3EpTB7xCT5f25QWJi7d2PU6im6i6fcUjo99Tpu1MGdvmCNJpPv3p4Sh3hwc1bN27gmPqtJ58DCdNwUT9xXJXz5VA",
  "key22": "SE4Yhg9nWiE7kwpLNADx4urHfzLiu39N6PpTrX8yBDjLu3g5nGMQuUgrFgsRjjjZuFoNMKMHZrqfx7ipLqR7kzv",
  "key23": "5DXbBW4KKzdQ2PotEqgcpMSVW6SzxvQpwwjhq3QWp46oPoVG3gMCu48id1VYKYvYbme2GR7WsFNVaCTHd6yiydvR",
  "key24": "5DuDeW7FBaaLWu22XiscEE8sunnpRXGR7QuVVwm6foZucNSGmQD7bJpHmnpJkHL3afJLX4Jd9FGnnCBwwj4Wt7Sn",
  "key25": "3aRAVzhRYHHVwVsh5aDBo8guMmrnoRYxFXZEcqB74DeibMLmjaKoWYFA7AjCni8nyvtb3Dcg8Kdw9QZYHwvgxGEB",
  "key26": "2axLTYYaJq159XMzvGv6fHxnqV2HTzRDgpdNYEkrvHeBXH3cxSi4Aig2kpsUVXCDAQyRBtK6JyqroLYobaH6NubG",
  "key27": "2S2fsKR5PUhC6cAtzphKQe1qe9ZTpxWhiEFqRz6F3pQvTcWpDujc7MCAKzhps5ESfuryDPsZ7kXiXri17CbZyZfs",
  "key28": "LTq1s2fJi9kvgjMYi4JDesxSng9L6LfmS3kySforaWBWTmgrxqBLBtYEonNbXuDLnGY9193aTQViUVcbkdLDG4s",
  "key29": "4bReFJVJWbDrefME7WbsoaxfuLV3pyvyGz92a2hhSkY7XeBzFaWPFtSUreoZZYbmbo1ubJ1qoTWEyhiftQhXwRzK",
  "key30": "5pXMKmFKWUDWhwMsRUA7qPuvmY5ZDEiuUtLQphdM8mVhYoMaBhHH5HwX5QWBES5LyZXdG7tpaDAhj9nxM1KSDoRY",
  "key31": "2HMc4VFYiExTh7Dfqhz8p24VKjj3X1LJPbcxhhLBEZAKVXWY9DGxNCV2eufoqdb578EW6QvHoRcDjuJJszq6pBYc",
  "key32": "5i2x77TQVPzxgp2EUQDiztGLWxSYMosVazdvTs5LW8AzuGhp7hWTt9xXsSzHjc5fcmgASqLvHDtJzUy5bsACx7Jt",
  "key33": "5Zv5RMqWfVtyYiHAzM5sjWax6AFU3zVife3Zy8hLz84wocfaHgriAXu399gMY2K5x2LgM5nN8RJUHmjXYphuVzdj",
  "key34": "2ju7rvYiuu3X1tAC98Qc4Jx8ktbfwfigpExr8nbpAfB2sgHh8C5W6Q5phTx1UAntYxFi3HtdHt8LfaQsoNa7DJ8F",
  "key35": "5JUP1Hkd71fDzQJkH5Tp7j7TEzKNMdhmDnYViH2fTyQYW9edFgt8Jg8RHSoRiJGp2qidzPTAE6mfX4hvGoUAYf5A",
  "key36": "ajZKRqyqdQrreEzcJyRGG39GBasSC5GStoAeLC4xpqrjPmoeKZw4Midib8iQxpg1ed5RBPcupG5wHGPEjX9nCQM",
  "key37": "Zd2aFj2MrBNrUP7Q78ggzaBZcsmce7v6tjudC5kEKNHnD92K9AfnFeLp6UFoo1kCdnKbejAShHEbWXRpBW1jjkK",
  "key38": "CrZKddU9FckYzqmw4r6yGLGGkxpGjce3Z4VNYB2fUvCXzTUAaDfTEKaRh6hGus8jeKU5oBP1S6aQSzo6j9pnpeV",
  "key39": "2vt8uTJXCBn7wGmDMMajseqqMG972F45Si754frKP6h4PNVZirmzR7dSFA19fgXWeoBoF3tc6vR2G4bw7FagPB64",
  "key40": "sXQjseZAbU5jKD42d8RuyHKu4hKcMpxQ2zGZRP4sKADLCfDup5PC4qp4G7j4XRUY4vbv597BS6mhCmJRLu66Ays",
  "key41": "5VtCdMf2bdAKBignbePjFGzwLRRyZLvW8E7NUZkuvhgsVPW2bFjRvpfjMoY38pYne7PJ4c7oehmLiCSVunk9J8T2"
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
