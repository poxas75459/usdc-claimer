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
    "2hvdyPsxbxpZ1yCtxczJCavWuhgSVcJ7eqh82twSkLpTxnbLCDja4TVKiw31qdPjmX2FAT2a6kWmUxT8CShVj3YK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EJZgG5vFsemoX7W1U4z4tfGQ4V87XGq2Vgq4jWm8xyFEF3dFKWNJny9pdnpV586RAdiKDP99vEZ2aTRVXHVPM9w",
  "key1": "3rdVUs4bKvQ3ChJYU7SCqhD2DpcXgkxL7Smb3VSz4KTjG6CtBZX15deJXfCiEaQAoz4wQJFNx6pfHXAX7aAKkWE9",
  "key2": "5xrJ36QGzoKfHifuhhXc9U6ZhFVTnVgtbE17mshJkRK3FgcmeetxnhKjDGL2m5grWQyw4eawseZ32xJVAWMPJfcD",
  "key3": "299BUsB33bkvCRsa8FFxt6ceu6EESQyKcstjeDE6HTNJJmPZasUjhE71seWtJ8r5nxpki6zmszfbd1Rq9tTpC7Bs",
  "key4": "3sR5Fy7VivmLroabTezHcpC5xpw7c9ijBg8Pr3uM71ZMXJ8ZPVqmKNN8PpubwFz8mdeVNjaFnY7HNp8YAAdK3QNi",
  "key5": "3MgmKiRs1mPNKncPzF2GNs4wV8z4hd2NJetd1G6CURUTV114qbCTnvH9ykWFFgNcBZ5j566tHkP7A8dudZHsw3HC",
  "key6": "NfJeeZNvxMUcMs7BKnHNgfryEvrESP4pWXBTbEcspBordrBLKwemwWCAtCGUWm5QgQpRuRzdG56yEWAy74g3Jn3",
  "key7": "29BkGKf1B9TwUzdanLfi4FEBMh8ZcNJUAuhjWbU1uBFPUm5jtPCdj58f98L37osA52cb1iCTF99jBVn8KZzABwZz",
  "key8": "4uKsjFrLpMnQBvABdakb4BMnrtuGmtkXSo4a5Jf7QgHAhc2BpKbgaBJd69zrwv3M7zPoMm869ncka6EVnAt2xPip",
  "key9": "2K5Pz3pS8eYb6WAwGBWU7tiN2CFEwoDuMS6U1mj9E425bNJdWsqYLikizjp2FApabrYMHWJm3qiuhcCZ8iNsYjCR",
  "key10": "2FVXvkxpTABgc5cFe2uAbbVmh6SDAX3qCb61FToXaECqzdXXrAHvCRE8wM5CasfNYFj2gh8D4i3zsWfjb5698usY",
  "key11": "54cr5MYAoCDMvL24KU2Ch3BJ2JJdD9JGNEStnhKPxvc3Cfyepu7gzzj1zghgqPH1vSj7rEAcxD2GWjiaCMiTy6Wh",
  "key12": "2Z5euTEvfgVQt6a8mrqkhjMTtD1NG3LPDfGQe1hNN8kMZrJefrhcJK6aqvBUbaENXm6SjdeRYtMq72FSh5CpFvVE",
  "key13": "3hsYceBmrwUTAwyhPtvz4CbqGnVBkkqAmqH8kH2AGch28ixho5fNjosM9r1QjpfNjS2mkLrouEHfDZ3V5XiShw3G",
  "key14": "2WWgUy9Gfs2f9LYLQQrfegTAiq2RWFKyYCAJezkxTFS4cNe898fAyAsjFz66eNDYK9N3XHddeBLZraLqoTMRVMnf",
  "key15": "3xZYoAS9fGNgRSmh8EgtFsj1dUfxXU674HCps8vAfrDgbBeVAtj5kVYEVSFwCHfFfjCnQDZvGHmevttLKJL9SqEa",
  "key16": "5FsnmuXsZPynRFCq6vRe6hJdSHVZKu8zAeqmMESzW9ftzAahozghBgEmog72ScfLe7Uf2Ld6kzpkUqiXoYsUKPtQ",
  "key17": "5QVjNNTLT7Zczwh9JCS4CR5JDb84FD8X3UuPCw1oaQJje3EorwNbXC6XMWchhsCd8RoTBrXWpVTSwHu9e1XtwQcf",
  "key18": "3zfFguiZiMnne3Ukfjh89rfFX9LTJjPExQquX1AjGTMSXiwTztznm5cqp72fNBXKCwHkHuUR6qP4ykH5VQK19gjX",
  "key19": "4pDrBiB3k2dZSsuKyE8GsAja6Fwn3XmXedSsrsH9eGgfJQGsUxrExaCGpFBsfekUH44XPnrHLDBPsPvuCFo9NqPC",
  "key20": "ixrPYdwEHuv917APenrgy5RSwPGP38r8s99RsssgdRpYA6RRQLQgyeE3rmavW7PHwkPwcUdFcLDgYoXs1UE5tLd",
  "key21": "rsfduLnhGGSGwhx4ybasdkHtrmpFDi4FpawTYSmtPi91bRSuyUa1367jH2BpwSn2Cpk98a3B6hMR4tu5kT4Dyky",
  "key22": "4U2CLovLbu87BSshBurnpxAeF4pjp6zbmdv28Uq4DqN5zwtA5mg7TygPBCz6DmqcvZZ2uDRGJaKWnjWDBiWZu9SL",
  "key23": "3NeNsXLdPiv2SN9a6cQShNC7qmMfGwC2TFgENQcDfcuagHYSiQTVRFKaJygHXVeznCyMA4QPNLed8zBvXRunFLWz",
  "key24": "4LTCQrjxY33GQL8kP4ds4DANQ5oWxcD3FfNEth9XD8z6w8SqDrFvxguk3SQm1AV2Zrrc7fs7fLp2gb7LtUQTPu9H",
  "key25": "5Z7WJHAvD8Wb2STB5mzqted9d4unEHxUPrK3XuvRxPbfCT96uh6VsvoAWBUnn8PpyF6ET2pumCNA2BSccab46cSv",
  "key26": "5AazKnDVx3ezKsSyirux3Cr6rKC9v8StvTXhschi8sJaVM2poEdaWw45kND2ixZLqyeCZESXxNCAJHTpmtXspfX9",
  "key27": "53Y3HZkH12Hm3W6L5VZ3F8gePGJUmXxEJnrn1JByK5Mt5nVWxnrR8QhnN1YmCaNE5A8zHVs72Chzh8n19T41MJpW",
  "key28": "3vDQG8eJeWHE6BCBwzbPmVcW5qErouNzBY8iXPv4TdfTXV9zAzWCmX1evsKPz8A42PiHypPdKtLVCRjygZGvBZfo",
  "key29": "w6i7zjAKkHrHSZiSRrovqARMtVakFnZn6jxBx3cKLXqsQGr2ZHpvuTSGg42pr5jr5ARKenFnXEL85YsJnYZjDeG",
  "key30": "otx9QmjyCPXUwUJbMowLoWzPzPkxbf75pbyuQAeAxwz5cSMwKcPw51HY47TA8eZx4v1LEths7edh59JNM5398Xc",
  "key31": "gy6GRYn1a9PCS5EYuEmabgVDWpBxjnYZz74nB9vqP8cqeX9WEgTRm6oQfNvbzYh2qeuZmBJgRRLvDuQyVxZasBJ",
  "key32": "5GBXDZniF5z59E3BAWy1GbUGBX1yuLwrTwF6M7iK8u86CKGZNdqBFzCqF2Pmsm1iou3u6qzEt1XEVvt3ijuBvJ6t",
  "key33": "2bmvhvDR6HUiWUB3EYa7p92PLfvNbYvhZpxvMDhdgWZ1p6phJQDgf4DQEtgW1qJ9E2KZ981TVzCRmEpBxGzmFpyp",
  "key34": "vWA281SMKnuSbc8TNtCfDDjZjA3qkQ8fDXQUf1b3X4RCd8TSr6N365pdDZFmMj8ZobLszX1vKAQK1vqT3zD1vaY",
  "key35": "4htiNJXwTpr4oVVuh5bexeQcro98m5sEm6br2tb1SN2Dci3n2HG2u8FqUkUcePhg9CALYwfaYV1LhscJc6zsvotg",
  "key36": "MUALFJFPTYyarKsxCXBViYRsNuS32bN5f2xv5RhJbUVmrS1hHvKB7fTNNKekhB9EM765Lm5H8WMu42YPmEQ9VRF",
  "key37": "51f3SB8SDEqvxqY8PaUUvqb4ZHQZhMsQcbda7uiDgeZPYQzgjSMWicDnN5dDxsWzwMJb4RwX2YefmUYGuCt6B4R7",
  "key38": "6oZk1aYKLK95EbfMwNJd5BKk1ueoL1ECMmccNsvrpyCJZpK1DKeFW5pqFcPABRGWUPRedG4nXaJNKoXJ1BJTeur",
  "key39": "2s5S9Z1CR3YHTbzrLxT2sXMQbupRwH8M19mvfEFwokVfruj3hAGPGaeSJjPJuacp6uhzeTH5TjQ2vUgrimWN9XR3",
  "key40": "4yJC6r13xinGqY8ici1g2xhoo5TWyb85AgnPRrtf6VQk4Cba7bCCtXVNmTcassBaDWp9EaCV2HQox8E5xVGT3XrL",
  "key41": "3H37fQj5p4gnAX51BKmVpVWt45Zw2Nn9UcyHNoo6W5JyPumqQHYZWTX3xAuNskohHog2YCWjMxUrMD92hJCwgYsW",
  "key42": "5shNi9wrKDRwEuH5KWnSSSDJtzhAKvGAmcMSkUHWmrWSKNFEnkHXAgU96yNokc1hnm4x2Gq6T7BCz6PkrsLXGtd"
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
