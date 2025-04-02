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
    "3XkjPYWAQqF9uLc5MTzkecj9sBKyi5mxKGHza4DVtk72uGKUykjwnkSYU51ZNEkwiNwLEgA8aLD7sDAMpMJtFM5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2As2JBCn2PpS6ytP89jz2zkWuwsZtoyZ8gUteW68W6StqLHoUV4r2EMDRe8MeTE83EMBbLHRRDVjhgjPc8otPbKS",
  "key1": "aDu1i72tEbca48EZQiJQrbiffQavRQEj1sRQMpPbeSzwmSgfbR7gSfB7n4XoEUcmd89hYqVR18xweV514t3md4n",
  "key2": "29YTHPofGckGFFjU1WqUhT4kjE2bT7pyGMrbzzvuPZ5CpFg9D69iysBTMqJaLfXVLbbQZZgyPCr3KKyUya1S19NQ",
  "key3": "auAeyyGjDiuL17ycwoDqdfZiJB26wRfLMHGYXe6xcr8n9EnVX3Z4V32Feg6Qygsb4QK33RnEoHRxgJNjhnFPnnZ",
  "key4": "pm8pVeWsoXEcBaP5W1GaM3mKvKhmTEq7trCquzi9w85RPrLabguphFKUsDcxY9NN2n6PRFwdLQi3PW5iFLe4LTq",
  "key5": "Vt8yU9jnasb5Je2XXWtUyNdBws1zcQv2sFYJNmmqEtDn7EU4WFnVkzSRg5ZNYr2UQpCZJfBGP7pBDj13kuWjmDU",
  "key6": "4KNaSCHAQbJY8bjnzpy9Qcf2GnAqGGjvpQpryKPbwwYZRLVZhMpbjto4PGLRT7p5HwxWmYXcpbBZuJpkKwc1kEY",
  "key7": "3cthb4JRUQLyYZSsiPvbZ9B2SdAWxJqhXRuGmLNaM11Y2nyDaGn51Fy1FnozqWfKsqZGy5TMJ7bp19ShAfYMJdDX",
  "key8": "2UtUtZwdW96Nt8WFad2XhSSuN6Gk2zuhEVr3Gr1rV6ABguQ2sgijKsj7peyYTF279o8Z9cRCXLApsZJECjCN1ST6",
  "key9": "3AvEk7SxJT3wFs22vACVZvswpzKSWUNDpJ3tZggpUrCPiKEE6xJKQ3ngMnSH15bMrLi91eTD3S2HcssTP1eZhozN",
  "key10": "3ow3Uuu41KD3nb1Xfq4evsYqVZF91p1tDi6jrkd5E1od4PayuDXJWoe41gvMDfdqn6bcg9ioWKeoBQAKCHCCXWk9",
  "key11": "5BZ7hBiEHXoztyEy4Fkisz9idBZBvDXXpVXar6TWAaZFoiyTzPe6WA3fDQbsX7TQLadr3QWxS3UdBRjWoG7TXufv",
  "key12": "4Wa3jb4LfKjzasnxQu9fG3b8kMtkMHnLkTQZB4LfLcY4sTaKwjfrH8QUJrTkV79Tm9hm9tvR77WYQxT1mUVNJjdJ",
  "key13": "63q7EybW1obagPvLkmGRtdQ3swwwh2dKYVFTAkTHSSS3pAk4yujn2arKPPRJ1tqa6ktvF2vEPmpfL6ck2fKVvAbH",
  "key14": "T5QNU4NcLTo6GyMz2Jguq7fPiqcj8twb99z6SkP6NeY5KT6rnQDqCkvaNW4bw81bUYPoy1mgBNivR95pjbh4pzZ",
  "key15": "3Np8FxQ5Zi9LiNWRe7LazH8g1qBRHZfv6odemanSWtACmiwKGthoyqDRgfL33wqoMoWeWSzkLQqEWUE2PeTCGKQT",
  "key16": "3Uao2fmm8zLkQwu4sSR6s6btduQ3XTQXMwifZgMnF7h8bXjbdztkreXgck4J94EGCgJFWWmJ1EbQaN6Ed4EHaUof",
  "key17": "5Et16sM8AjoREHma8ni2Lh398pJFaQYappQFN5eGgtkri6LZcVfeswiyeqQjaiS1buY3qMz7s7DkQNLcAdTS6yaJ",
  "key18": "44yFAEEnsy5RHreApP3DMGfp7eoNo4vwdCLGKMurSSPLSzUbAehUVbj9NKS82GZBFbV9TQ6ZvvnozfA25kFCLCtc",
  "key19": "Wa45arCcAaHCmBsKUZbgJixQZWygjxDLpbCcP4ufCQif9DfHjqhWGiVinyLiciFx8qWr1n8s6Xt16KEq27z3FGb",
  "key20": "4q92q1CDNsrSpt7tA6Nw8zBocJFu8PGvFBgyVciWoqz1hMgsKF49AYKLpP5N2mbZj1XYkMiJcGXMnW66GC1PPK4r",
  "key21": "5U3kfuLQShhcWSMG4Wg1EGr1gzzPAibDTUa5QMXouE186SXEgGZoz4tZoNVZxRW6iGyX1XKrVy3r4E5vXdmsViLc",
  "key22": "25oeZ1LgQtjuRV9N8bcaj5yPU2aqPosVSV6Y5uiPzzi2VMKmugvai5xgMBaUPYciMN7TCtATjwHT14pCndjRUZo3",
  "key23": "39Tu5eeQSfyNWZvyzZwXbT32nNS4yYEPUwwBMwzfwCVpN41cwLLtnGQpGWB4zM4F7UZVSJJLvAJM8NRw6zRhmCzb",
  "key24": "qMQ2qbbAykworDadu6eSdzVareDdePqDNoGTxEVeWd5FbmQJdgMQqQYdKqyiKPbkxep1wj6MwGJDiuyRRJzpZKB",
  "key25": "2xQqmUddCrhyydfUKJQsEyXk8mwPRYv4nyVtjKxmBWR7BKbGwyysTethQkKYahrDXE1whqq1gfwdsKYPCDjjqm3p",
  "key26": "5czVxeWmMWPV6x8X1jU1P2Z4du6ayHEejaiwz8WTVJCh9xFXg1829nrteUJo4421QbSiw5eKvUtn52udnjZji8op",
  "key27": "4EW3JyC2nb6yDvqRvLXqPp7JKpvPf2qVPFMEkKJFtk4xCjugtALbJGJuKb6BJjERWJHW9T3U5apfRZUQW7FAh4wr",
  "key28": "2CAcnQKiEU6eLqpWXLK4Mxf3Xcjygb5BChWCFHt5U2bhb8KyaMXuX4MErY2xiysx5KAZZi19MtEQ2jrh2op5Vr41",
  "key29": "ZsHfk13kQaJ82iRL2YChJM5CC37jVBTKGhYJirEgyEHQNXjBdW3DgL4Hj8WLMACKirhATSBX7zfmTABRoUU6pc7",
  "key30": "TwL7s252o2K3sBLEp2woX5vTCsa29ukRaZffTDuqrrNQFAQNhFQMhfRZKgmFoKcDhtVZnUyNBQgEF3nzDrYooKo",
  "key31": "QbhhuTugAefuzi3VD4MEeNpaLN6LZ26S465DDcSBuuBp8DCPdBg8itF8Np4KsjLk6oc7Nybak86bsLSS67bq8iA",
  "key32": "2LfLf4toZ4PKxpahKwrHKEyuHNorRrMNXMJudqf7afXHKPowQE1TQARAqwJaCMGE4k4nzLE1BC3tXh5Eev6Mcrvu",
  "key33": "2noMDS2efrEqFgUXWy5qsUPhiTwULWaBDodyWzUaY58Qqek3PKe5h4faiki3nkWQvgMvarrQJJyTN9gFRUUz22Hc",
  "key34": "CDiEgC3gxJsZC4tUdM489StijZPmbyqE9v6NCSerYff4gJZppN43GnmgoDJJybjVu8kma7n4Tw2ykx9676zcJo4",
  "key35": "3X2L9TGEovfSckHAoJjqqaYicLuuC5Zh8K3xzFJFDhrYbMZd5ADVm2C3TntEzQW3VLyYKgm5V4kJ443q2umza68C",
  "key36": "2gGqGVv8bTv7DzpbbWxqc8xz2eBH3f9mVShVMdnNriEWmzDbrJMJxgwB5n4W5LMBkdND7dfAVpQ7sjFZrmKFzcu4",
  "key37": "bkcewYNp6F5mgoYFF7AFWTfM3hhMzVg4HSYua8cfXBWDJRM5xVPbt63mVXwyemggAh7aQvExpT2BLRWriPssXMK",
  "key38": "5r4z6i5GFLv4hL62k49s3QCZ3u5yCs19ppuJAQYvfCuPBBaZMBWpEmQbmmCANMJkE47wEVQzU4az1sAN1u8HRitV",
  "key39": "51M4oiFrCatcEKQzvLvRpv4XBBpjaH647AZkQ16JTpKqYxV8Z2XS3MmgaPLEL2cEnvGBnTXjGH53pgfsVfKxPxrR",
  "key40": "2XaCg1V7ML352vqTEu5fPv3Vvong8Zb4UMfYEPDmdp7bdgJ5Viy7JBGXuNNWMXV2deNCoLdcb3HKh2MLXoNVEz1x",
  "key41": "338SmE7rSASqjgv9PQTokdMJSLGQVnVP7se2uGTUVmyQ5SznbWGWF8na7UCsWC7AoPNCxRKDYrcn12pJz9Jv6pfv",
  "key42": "21FpVZ36ZqhNKiMGTruQPKTgxPJ3pKSZss3JAzyTo5vDRnvonk7ad9yKkuZiM7gp1vHFd9J1Hm2xQ2MPdy2aibg7",
  "key43": "37iggXEg4ciMQ69KbxcSPm46Saccox2MntJiFf8Ho7jkrejnBKrMDkoDDmmkdeZ36GirbyPKYsjLvv86ixweMu2X",
  "key44": "3HDZSNVGJkSJi9Wn3WBjoVGGuBwaxmYemb7EPLX4eFQRrWM3bdX2j3See7hKbu725pqUhEx2T2Vf9JGqqnk5KknA",
  "key45": "3mL8u1qhVCDZDJMjCmpkPAbteAy9TRjD633Q2nvVSgFuiun2hJPQXnB2cXvNi1f5XLkLJDF6KtDTodCooUQ7evY3",
  "key46": "5sR2QJLHFTbbjEJBDb5ewsjqZwdsU9hftdnKincTkJrkM6Si1yAqeRZG3Jgoe2VH1ygrJ8xBiqazHaUefrWJ2v2K",
  "key47": "2gYFSjDiAJgpd8CZ8XQTh3mQbJEy5df5XQ3Q6QZ8YFoNPfck5bQLzZ9Cjj4evqu9f55MX1obA5m2oPeyF4Pik3L9",
  "key48": "2dMgvqyhN62YPFDNrsrUFw7Fn9ZWxC7by7HNmEzBnGyqSJfDRpkKc5cxqQRD3wS2cm2cdp82g6M7Dqx2tSj6oHJU"
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
