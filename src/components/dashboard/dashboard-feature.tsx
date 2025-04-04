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
    "4D131LWSZpq5BXBbppnKVnfHguYEHcdkQaKnLBAWr5o2E2H8WwruMGHBjBW4VF94NxfPrgZWiDqBuZFTFstjG9fc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ACBes3vuQEutcEkDK6HydMoHiuKwf4J7jpg2t3M94VSsRUgcMnFGjgKXCAxk2dL1cJo6Gevq2NMB1wZ8nkKWe5C",
  "key1": "5jZ9NvmAA1cUUGam4v26Bd3PAJGyKfPKdBxKJ2Yhf6LJEUR3vpzJAfcFFGn3x194o982XPKpd6PVRopmLTdHSRMn",
  "key2": "5JCgGyd3zcvU43kAnJuP8EKkbcLrwGMP9EVisaJG5QSNfwp7G5UG2So15AbL5dFwumntkRGksH8oVtiZnPStNzGZ",
  "key3": "2NnBRa4SBRPCiWys7tF81LueoKiNTv2kVurayKWuxWbSq6my7sf3JvUKZKZEbXMbKQ132tYBWJdgUqyRaqakTQZj",
  "key4": "3XUZ2wjk1AKWUjKbc81wF6vjHWVQoL47YekfWnAU8p9dQ1HQoEkgN7UCZhSzLQa1xRaWf7icyWuHr2GBXXJ6dFfh",
  "key5": "5GRkyBF8jnRuSQfjZDRaGGj2CxAy1dB6GGSXUkRuJaV8QkcMjH9y9eJEkh8TtC1KNsMH7vqNu1PK3Wfx6Wiq6zw8",
  "key6": "5bvpurGfroDUnunyhy1jgWiSiQ25GbXTAjWtEKhyVDVNiY2sXeichyN3DnEQgtA6fPSSPazDgp23b2trB2X9J5td",
  "key7": "4uD268AEcAcUoUuUzQGidaqAu9nHqT4m1UDxzGmWMruoHh6sYgWZQLewefVEqeDx6Y66MPDe22hMMSxkD4C3n1qW",
  "key8": "5PDeW36Enn7EBWBaBoBj886DgjV9JhLWxuWYCUPgoS7frGBCZGCNFarGNkBjEEe5tpRuj831P2G52VDN1DzCMSHX",
  "key9": "2ktzxTE6PUYj4EudzK3XnCGoRiSJ2ukTzvch8teP12ukNdTXJtrjCswYDD7CkFuwnwUxmKVW3pHgywcgikaBvdXU",
  "key10": "53azSLZaHaY7YiVgEE4NGZayrgmP6K8BjGBLJuDXS7aAn6yV8TkRZZbAE45uDKkMytiUN88Qg2zDZLUmu9vbpELC",
  "key11": "4J7ygjUPYUiQGi5PreyhhYx2r9y9zQ4VMMzbRRPuvPq48yzN4pUv6nYugj3fghzBMCS1d54XX4rvMxo783DmLfwn",
  "key12": "3ZGDgQPvGjGRjbZi9zhVfaUaVJyqASGmQsExVS5eJkxrq3pZpKbboY7Pdbg7DTNpNKtyS5NJFZWfdMmqBdeZUx8",
  "key13": "38swV9JTF3pipnXiNYhfTPcKPRC67b4p1hBpBxXn4tLDMKHkYCwgBue1ffqNNTn73Fy9X3yhPnbNtHwjw4G1bJ28",
  "key14": "3SyEL6drXg6GfTnvakdqQEW25tmhtBxHdsPDdKdcKFrYJ1qafMn8ctWZiTQjoEgJPdQm1XWxd2XFzGJniVTWg4by",
  "key15": "4gk99fiBWtZvyxh8jJ1yzTLkeqa45axGdNXPX6DGfCYBNTrBwbjC5pP63tE3dAqygwyMTSn4WaEYEWUoMUJiFBZm",
  "key16": "3jCfSvGZYZYhNeM9kdLNb9JZTPXt3ukBYABaS3zsJedoH2AtiT6SAc3hm3xEsHLwpSeQTwUBnBV9faM15FkGnZus",
  "key17": "5vAaWvn84C36cdM8v4Wcy1vW2rJqV5E74w3i4xgLfjwoSDz6C6ofkBZ9S9yoyaezbtjF7B3AzV51xLLNyCAWUde",
  "key18": "PCPf5p5dFmzxNzy9SHFKMeaNftYEPzgx9k6sMFD4ZJaCsN79Mmvn7pV1qyRhEdkTwt5REVJZLD1MxfMMcV8518H",
  "key19": "uEvEwZbHWTQ2KTETH5pQPkxqrcUHdkXMs5Kh2FemdXSbJF7vUzrVVeRsMBiDrfgq6gegyn2FGRa7d8iEgqGccAr",
  "key20": "23ZLhkSkA6MPN1Cv1DxBJ9WLbwVnmbuUEtRBUKEC9ujrdBTFHtENzf1ssn847AC1Eu5fGvHWs5GA9UvYXntFgewv",
  "key21": "x7L2Yk8frGae7GtkKMtrWbn1E7aXFTdnMnHM2qaSfExR2fwbqGriz1aYERzwjL27RkeggYi4nFhn6RujJNabdwe",
  "key22": "3MNUMM6CNmXcW7xyznDuZ1Qzdgth4ZfDwFHC8WikkYxVj1jxdhyFrMYhDDgQuBL93ZJnB5TwtgiH6HVtxXrEmy1n",
  "key23": "fPoADxhBEoSiHWC1AzWfhkyheVD9jW9Hzx819mMDvKxHjimxuwgBy14MhwGM5RsQ5DQ5FbHyuyergQSkBXzRVkc",
  "key24": "35XXXjmw32Z7VkvLE7hhN8HeQhv3Z87CnysA3xBXeoV1rnXMPAApWNDiu5FkD5FPd4oTnUW6WCWw1t9bakuHKmPM",
  "key25": "9faVJf7CYr5fta4t3SLpxJb7ewoXsA9Xu5AijjA4XYA5jJ2u16qpckXGgaw9Q6YtRY9qhVsciyufLubi5eoRqXH",
  "key26": "4wZo2vafDepzmUnDV1sgbDqAPLLRTpKkQ2ftxmAc9Xzc2oxViLUwkEujjFJefGr8Gt6ejaoFeYAi3hPuzp4UC6G5",
  "key27": "2HtqMD4SuYXbXfqjSTHYj8sB3WLvpvSk6FxqNFFQtKeBwNAvTWbfheVjZzqSzsrxubFEMMKfBZDtbGvyG2tAABtE",
  "key28": "3DWM4q98Twa6nveq74E2ucodPESeqWcL4np7NVUTiU1CQdkYxhYpm6wK6pVswuQefSAzb4UKrtz1BkBwDZ8GgKMX",
  "key29": "2nws5fR3i4DobPkvbg5wET2vNcDs4C9NiLTBGHN9es8WJ48vmbNBmfwZYgJu8nqRHYXvq841rqvUJyiBidqvMPFW",
  "key30": "STbbpz6H5qvttEQnMbWvXHxCN5AaU3EX62Vp4Wnt5a9N9qtXnJuKAxcb6MjCYA85AUsntCu81ZgmPxSYmr3mU7M",
  "key31": "3AGfacFXHbfBrEmP73WBWZMAgaw1ouZrLHxR2VyPAr9kyNstTQd3D7wibKAiEj4ys9po7oyx2H2cAHx2ngJyhuuL",
  "key32": "31vCobMFVoYDnjMK7zpWbRZ24bpk432EWeBxd766AXGXTDkPyMkygjco12XwYS7LBFyQm5rj9K2i9avPmZZzdmi8",
  "key33": "4w9yEz93CsqnpbkP5zPPvMf11k8S9B7Cw2y5fP3KJTsxdWEXP85x7X6GJdpheafjBhiqYisqd5MfYCu9YzPU4nqs",
  "key34": "4EfKoob8fMxKCky6WktGFKH76FfUPFJFjeknEboRQzksHaXH42NGoAD8irpmxr7JHHc51sTPsF4eucn54Thm1rHp",
  "key35": "aHy6PXbKsF4aHoXX88sEnF8KLuwGFM2thejgWuPnDX6ZZeFg1jtY3cLf74u4Gp7bUiRET3ubr7gzQTP1ooSuRyU",
  "key36": "wVWiknak92EZowrG5RovAE1cYrHKUU8F5GFgsYUhDFgjSBufuA2Riw1hDkYA2iZW1CcinyHoz7xqiWmoPNvGN88",
  "key37": "4eJEUwcKLAhZCST1CL7e3VrQo3mti7MFJK2CofnYQ8i8tnLM1BChtfvspNLBAB8PEELgrPJ8tyVSrPCBHwRyRcwz",
  "key38": "3rLo4CFSm2p2FD14Uh98N9EzHE2kAYqK5XvU7svmk6p7fmTsoW4Z2BKPgS2uxWSeLuAwfbRfhdJw85cXTYBcRM35",
  "key39": "5trGb2fTexMg1HpC3a9T9GxYWq7HqEEW8f2p8HBgDkusfg8eGuowUdyuWSFmonZJWhS2BDojzic9zxMTcBcKaXxd",
  "key40": "5598U8H4uRDajJb7npW35RBerxF9Ft4M7Cgh7rcDT5bjE6vtGywhyWVcodmoNAVL2RfpEMBceD5ybjh946JSfyKv",
  "key41": "Ws5kqoq5Vth46NuSsb4rhWgSReUb633R8WkaJrkewX9FkSxLzZu5wdGiPBBrfM1f93RvxobDAAnxcmGuRRCUjPj",
  "key42": "ubLAWFp6oGQPwbvPFHiEfo6KfFC5ftuxr2xL8xqvW6QWMJ3tpFQKCPKp1smG7o5Yf9XQjQDaaV9axUDr44DW6oz"
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
