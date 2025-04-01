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
    "2qVysRE1aMxjcAuT7JMbFcEnHA4vUizNgf2eTAR3qfs7RHiBzwStwEDzXf7VNR6a91kbonh9ddvNcXixLMbcaDEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fC53QGAS6tdpcf2HuYm8yEfDhpgsM9MgzYAp2TLoTTESZmKj1P8FYuXFp5tNcr9xzUehDFC8b78kFgSpqHiUpJ2",
  "key1": "5dt6bbASJu1TkDW6uEicX87LJhx6ATiYBgZFDq8P8LA1qF3w8MvHgcwJsjcnNPQ4aW7x5Y5swAjBRWXteEYurnPK",
  "key2": "5Atw5e94Cc3TgYqV1ChRghUjAocd1wQZKRBTH6L7mZae3gk7FRHkh9KFXtovAaNhw2oBoE3YS6iveR98GuNtXZmr",
  "key3": "3hxZwBW56NScrR3k3BdojED5umeB92kB6tuZJp74VUkN7Xt9oukq7NRDYHz4QHULkLWpDF5QxWpdCdhpgkurL27g",
  "key4": "2wuuV8SopsUJuwrY3nKAAHhjiqH1MHgEtwBs117sUmxqgu5zncjMYAZ1sHpkjj5sNM5g6CbUpBCRkDct8a9B93vm",
  "key5": "UVu1To7GWG4oMHjeJQjkmX5MCdEVwdvPHA9FmrWGoVLmupry7ocJxErwajCY4peqVGm3sqiAXVdWLh8C4zhPewU",
  "key6": "4iEyKxjbm3BH8F3dyew5Wb7t3PxZbXYFRKQucTf2m6jE3AR5cHpczCX9TTmBz6cJWmoWm1LzaBaGPL9MoLbANQGx",
  "key7": "25Kyyu6PSJcDVBLYMTgm22r1yukUFrk3BWkGJjtKpoLNdKWm5cPhGpYcQXw2swWBfFDpSwdTYtytSh7wfwRqZUTC",
  "key8": "fWoWSXwPwz5nUsR7mG4nufGx5XdjqDfEc2LsVvyW2JqdxUb6ntCVSQA1rVQomsy1VY29569Zh1PzisQewU6usQ3",
  "key9": "JV1ZBnq9SiGTuCRAd3KoPnRYYVzJw2t8JBbj4CPgG8DnXwKY47WXGSnYhPyY3N6ATEWX518bB42eL774WgZmTk2",
  "key10": "4SwxvoQi4F4v5VnGkB1YHz6PjUYZwYvJ5xEChFt6kcpswdg2XXK1GxTKgi2WjjpLUfVPtdiNdLeEg25sQL53RFA3",
  "key11": "5jYLs84u2tCvAtGjhJCbEenbidoMpqXDpQRdfy6cQ19637pUiuzH1U4H8y65zMNYKijUfy7qSKL4PjCp37bykmPz",
  "key12": "9HZ4FEYtoLndFjtd6PrTu5z3yqxBy2nWetrNiy4PqzSsspesLDftqyaTTAqUAkKCk4NmawXpAAgujVxAXVRqPuD",
  "key13": "3vDSVukwv1LW4VZr5UnVGifabE4TQYpzQEoUNQfZYyEzy9P22Zu7ywza7uqzgGQigh8hgANZkitsrGXR1nBoVJ3C",
  "key14": "5p2cSxRQKSLDLKp1npVqvKzt543Q2CPwPSiGVtWoYz7Ssus1rmDf71hb7fpuBHWXSTkZTXzPosP4jhnA7ybWWYas",
  "key15": "4bCNQNXGTRJ6cuHwHqQwHcGP6ZBHWjbn72JnmGmpkHNMsAdRBrDquxNooAkfEFNafyqWziYjysP3xurBRDZoSs2K",
  "key16": "2CR2CW1XBvSr5i8XijLSgJXG1QagSMCeGcBSqRikdouCzeTF1rhMDBMeWDkGDys4QSR6yTY9TV8P4azy4UTDb8FB",
  "key17": "51yBCiCJKSRPVLm1t5uKGfPtjXBiDRGzPu7tQCfKgpQSWUqGN8MF1zWdHjttapoP76wZqmMAN9R4FANQobwZS4fC",
  "key18": "324MypDoabPe1rgwNHPxsmL5q9MeRytrWv3Rngah9ePh6VJPQpWybtnYHNRJ4eTTZ52D1HkZ2WJ9BcRTDRb4ei6P",
  "key19": "k8sf8tX47x2qCtc5isAB27sya4xnYBJKo4V3Ep6BKF92TgETaixgk5W8eLpjyXP2NJbCQe4ZdXHKkxGkEZAysju",
  "key20": "5YNVQ13jBFZLfDe7p4nW9feVHdiXdgQTQBtrtb3KhE5CR5Y2usvJg43Vdu9Hs4eoPTk6TBzaJ4CfDHrbW3us38AE",
  "key21": "2PSims7kNqmjVm8JMd4gEYDyh5HD8rnYQKGW1j25jCjTtWmn9tNMytui9eifrJ7h1H8Mig1LRTLTnnLHRjdyRBvr",
  "key22": "5QwuzpytLqXZDCETdGufGdfvEndJKXNpPxEHq4xB2b79DR9QjvTPKS7e8PQ9PNb8KRBCuUacfdx6uaErUuXSiQPV",
  "key23": "3rrkpHfg6AscatEHLfHJgHnodNSnMBnUp6qUgq3AHpegZg1dFvB82X1XrHjhMdaWZ38hM2HEDvycGZoUF3HeVKXi",
  "key24": "3eDBcAYWdk44eCWvTa3HTa5tD6UQvQxY51heUazK3fAAjR2gpVwTHTt1mn7DymEFj1fRTYBfKPWfetGhAmTXXLyU",
  "key25": "4idNMkvNLVkyYrTC3hrVobeARRNx25Ps95AK8Hgqiv1nm1bKUJbfciP59pptTB5BU7qRqqiW1dp7eK6Lzj2sUFmz",
  "key26": "7viTxERsoBj4nLAwHdRwva73yhjLqMWEHze8nqLyWebqpTAcGRRGVP4ea8GNfDVTcPmCb4WHVEZ2YZfBKsRheey",
  "key27": "3LTyqFxdANTS7VwGPF8CCsrfSCZuzbM3G9XHTejNLYDgR5hpD2vKG8NSVzuhSGtepmt4dbtDfvSrTQEPDCzQKuXy",
  "key28": "2qzQq1CQfveyq2LLbrDhk4pEpJfqdz2gG56gUnxmD8N9uKBJpKdmF8Y5mtxWwrSrYfji2d4qq9Rj2ewGfkeDpDGM",
  "key29": "5x99Ps4Mesxt8xjrSTNGknAnNdkLbWTtBVhdjHfRGA3c23gBWfVQxv929e4KGbwSSZuw8ZLVX8cnsiXh3P3bbpKP",
  "key30": "34Uzx3yJzotG2aPeTMyXKHZVedPrMwaTRhfEM7ZDeTFyAsEpjB8vvNupZY2w48zbRstXQQycimGUx5JowozoxGps",
  "key31": "4Fb33XvPYWjDFFH2ELGFqZZvJT67LoyKYSpCLETWVjvEf7JEjAdVxPiiw7GyaR73Eywy72eiNQd7f6fGqGUMZNv7",
  "key32": "5YVhXWPM8AEE2ip3p8y33y7HSE5BbMEEMHPvBrw7mivc7KwnyVBBFX6qKfHRozxHPAfZypuderDCmF2doSLtMmie",
  "key33": "63fKtqjmQV2MBQDZUvj4mbbSjdynYDfM5YjRsjxZj3jb5oCg9v3FexXrtcKE5kDarWGmN4zTdrQxzZ6zo7fKTa5b",
  "key34": "E3cACwGGVrZWKJU5X4WrGn786ANmhtQMq1YVbyRhhm2PqCGekkjyxiCiRr6yFP5vdD8WyhLfQXxdB47f6up9CfX",
  "key35": "3zoJvLvAzUFBPXxo5Nxsr3mzoXJ8Dgz8x8GCWL9QRnFWJugs4FyWGforEiobzgKXbqqXYXN7nrodUpAG9JUzPPDj",
  "key36": "2W2v2vdB4jqUQSGu4q63upZ9jb11baeeue8BQ6taZpBucBkb7mr3m2krQ3DX1vDDgYJxXGVBh3i6kx5nLHEkhGMX",
  "key37": "3agC4wseDYWy7QXLgRRrwfw2q6wNUuq87c3aac1PWajACTWVVLWGDLtBgefWSHKiZZGob3CLiJhhywv3PjyaccDv",
  "key38": "2AQDjoYAUnDRRS4A2UmbTuteZM14NqVE2dtXAHYtL5RLc9mRXgnzUyWVvESbchL6Fd4fwgQF65moXKwm3Jdv3mmk",
  "key39": "5Lj5shPxz2So6bs6yT5oZeg77Li1mhpFmtHvnxprFZQxsXVHtz5SgWx1p4KtzzBasZ2Tb9W6x1s6JB8UmFTUtT9c",
  "key40": "47kLkJKXg5pwvdwa52hPvTFoJEAX7nQdwzNvJmA2yuRFx4b9CgpARM68kvawyEUSHcw7tEcRDkXvKGNRcacLan3t",
  "key41": "d9LtKCScvQDg5BYJA8zEScifkSanLejScnB6ey7AvQkRDaakgkZU7unrRypHwvt4qE7Hi8HUfayEjs7e4LWVG3T",
  "key42": "5KdGKnEfTpU1tQouoyiS42JNP3XxDTLCFcMwPwGJ1jPSCMpbRP8EceBdTfs1rv6miMNSJuQnGG4iZEGmpP45cVAh",
  "key43": "3f1er7Z8DZr5dVftoSzgL13BPJmQXT271mP4xbn6twiDGJQdqSz6UrB73iCdW8ZBbVZ6ux1Xra3hipp1JTMdKipo"
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
