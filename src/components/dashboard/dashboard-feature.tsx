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
    "5BNTZUp1gQ3WZQxKzipFdSDGb9cejsvv5Az3oJEASB3jS9jkQ89N67Ed83Ey6ZTCT6A4u3byPSSzfczSZnyEcHJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63LvqEwbuaoqAcGgCry4KA5LBV8egN9gdTDSAMxuzHRg1YDmyd1ejC3bStGotNrgMCSL5j71wDjqzdeTHZfCPQpx",
  "key1": "31AbHvi5LgamrsMUMx3WmHi7g7LnUSCMCdGk4AJJX2iwBB35U2G9AEkMUGP8wV2xKUUNLSkZ4SaQ8K337fa2pzEa",
  "key2": "4V7DuW9iz944sxTskQvZVd3DphsGG8cWHQc51UHdjRyeZKkoKtRMb5ueMpbFD9gWiwRbq9DRy4UxgGmL7kPfQrEm",
  "key3": "5UZ3ZDkgkoBXoHkebhQHrgA96e8bsYtEtQ9aktrMmm46bZyFNsQwXMfdPBJ4TRWW6hDLbAkUWP6uxkqEu2QfLvn9",
  "key4": "3CCcp1uEzj5YsYknzJasLxivDR3uaYxcAYswFXmeUHMBz2h9G6wa6U8BhVYALc4Fbc8GyumT1jPKHmYX6fDRTst9",
  "key5": "6GBavXUKYGqpoU4aY22VS4YG3ARErC4ViQ7vu5KZKEzLkB3cwMnzdTcAnUz6cwprXP3j7mRtNkaiNthFAhtaQ3q",
  "key6": "5rPL7U8sTMfZaMkbgVfmnUsZxTxiEXyj5zDZ3tyQ4T4jP3iBWfJezEd3w5gEUHFS8KSNw1mHp7J6qribYZcLxSny",
  "key7": "3fz8Rq88btPHMMVvBwAUJ8QskdEX7YKyT2735FYf9JjigKNiE2X1QMsheab2ciHiLLJrBz8p42sLYK3A5Cia6dav",
  "key8": "64NKER7UYSVA6aJQoGqc8U3y5r6rSFwEwCZoPaK5s7c4MkVqtpSSzCwDoNVinuy9VTTUDZkJNRcxzZS2GAjSTyPN",
  "key9": "5tAwK25NEzpxzPcAXRKouVFxvGSR9qMzN7enF6FB6MVpb3M2mJakEnWJfivt42FhwLiauaSXAvKifkcuNkTdKt5M",
  "key10": "34bYdbLwcSyaGN3xe1sX4wHJtVR3vpTVLhzMuYVsHQRitynY57dVBbZEYEhXVnupR3ek92hjDu1DNG9bWnfjRHBh",
  "key11": "4r42aq4Z6NDJjQ5krzKgV2mpLt3YVbhCbtYd4ZB8YB6jMCeBdacVojwVUjKPiBF9DMPF5GqK4rj5ZxkJBBm4DFnr",
  "key12": "9sdMKNfXiCaXQUUxsKSUgqLSB3qAeFzAMRDuY5XMssGgF8nUbMUWV9gs3c7boyzt18ZgmaiKQ8XJbdm3LBpH6Lx",
  "key13": "4aFM2KjncyDb6pVZr946UjTF7jWZ1qHuzNiGvYKWPFQMd9tFptZAd6JLniVun2nzE4uXiK1xo6eNUMr2WgBaZQSr",
  "key14": "26tevhzeV9f6wDmCEBWq1k5CobPFqq1niNb9BGA4d2PVmiwtfkM9E7MwMoK3SDb7nM3JhjZrscMguz6xn8rGyASt",
  "key15": "eTit5dq9R6dbwe4TnUmWBvgJ9FaV4DUpjWyYNTVEx8UagmrJAxDVWQUCzS3YCJj8D2wCuuChW1gvbMmejDXFrMM",
  "key16": "2sJQfgFsBsGbabi7V2NvgfFyF4P1YBzF1eRCVAj4WthgQVvuGkenwhFwK34LvZJRPd4VeXpQ7wx9yEbC83naLHbg",
  "key17": "2RiWvNPJfxRQBGTunC9UCR3ZBjicuZ4PSZQvaEPJzRxbobZawrm34C38LQsEAtU3Rk7jNV73m2j8qSsoq8SzKABS",
  "key18": "RmkaaYcaz62MvXdLcEQEYqzaKgHmqkVvjkmSjYpgDYW7pvUfMXAC6MJMYc3hPriF3c76RVE9gwvYHMgJeTxGGam",
  "key19": "3vbXLeferY5hcNN7DEXiD1EhgBpwzXzRfG1zxe9VkBJUt4tfzrjJBr5SMHyCo6JSsXgsP89xthg5Kc2xdnWVEBxZ",
  "key20": "3HtEhHRt4gVsvpYyTCWXWe3pGPNFDskghJv2SqaJUZZRBZZH2SqmccUoa71w96UwqXgwf4uLepopEfhjf6Z1FaCG",
  "key21": "48pRHPQL9J2a1BCLoXP8AUBawQi9B5823NTtUbME4E1c4fGPGo5kY8yvULaiQPUmLBSAEv6YZGUawme31isZWikc",
  "key22": "4aT62pGGQSFC9kpMhsx6WLJG1SGSQgB5f4MXtHgS6M3whcQJSbAhxaxtEgAXNcmvzAZs9HCJDb1JqYek6Ch9Xbic",
  "key23": "3XFjMdYu7zfdMBKx61huzuQLvyvgRu8Fxk19gU5uCy9npdnp1izBxzUCnTvKjPSwACArriqswCXm2tU5Fw5rm3LT",
  "key24": "4rgx8Ah1NaHpkW1h96CSTMbMfyQxZj4Gi1Lgm2QVVZP4DtjhsQHk9BDMna9R4Xsb5ucgjc3wW4YBwU1aSPrdLqRp",
  "key25": "2KEuA4vRKpMYGJj7EetoQs6KjHceu7T1NmBXD7Wy83sQitwvJfracx1fJgvXVM241xJCxmQMuojGFdqP7WNr1gpZ",
  "key26": "QhQWLuDM4JTzEForrFBuXuogz5syJHcET21Wvnz9bew8WhKuVUVbT5aFDDXqezn4a8MJZoKmG6gDznjV3AK3zQp",
  "key27": "3CNPBozvUEQaD72XW1mZuxcn4BiNjT7ebPAYjs2S7qbjA2TTUCxSbm195oGoSvMW1bPDHvCRJ3MtFmZ74AN3WTTg",
  "key28": "55AKrRq6rNQCz7kzztubA8Ry7cdyBv2Ke5g2CLx6inMqRjUQzmPAugDrwQzCvVrips9hYErmVaCcnoTwTHHjjAaC",
  "key29": "2V8VQLmSv4KnDEr6su2u8qHswb5rc6aTS49PobNZLznnbBuwngJLRad5Xw5giDRQ8szcaw6Wd5ML7WZdhCfqqVCL",
  "key30": "ZEBdFZSAGmsP3W9mruKqKCULMHmYXq3v2kLtE51xVn5sh19fqnKTtJNSbYbS3DckD91RXaWz9ydPBeEyocfvdoQ",
  "key31": "2F4rzNXiQEgg7UDTStTWWNSE6JxR32wTtyUVxHFUZhqz5kAwuBiadPskwaAzUYumXMdFAofQNdDsfUGoTEHLeqMT",
  "key32": "41MDhBheL4G86vcc8KZeYsppgpJLZ7nRMiJFdSRzM984tFBB2etmfSkYSXyza8XXNa8vUKmu1798wYEQi3Q7SyCb",
  "key33": "3DDt4qEjkkCSm7u9hjTfEDiVpgXRbm9qyJahf9Hgb2wPbnvbxgpsNsEVwpPy2nkh3usHTSXbxTBfy7ZDg5a9gVoC",
  "key34": "3CSsVm55tQy7Qc9F9QEV9hAQ9KuUTvbLoxLHPJTreWHw5YsqxF5cDt2jiB5MbdwjsKhXFT3Zf8tDzjtRCwmyqDku",
  "key35": "5NgdD9MEzYt4Lu7zy9sARAjwbokyJE42xF7BMrxbmQASFMTcJL9DkFK6QRFBnRQhQBUSFrJo1RdnJweEuQ2fo4BM",
  "key36": "4oRw1ryWWMxTNwEcPygraBc3bDavePMXqrXjspRZhk3mY5415Esn2Migw4135gVCE7RWsh5GBsxHsHFCbJv8tE4W",
  "key37": "2EULVfW1LHWdvfx4mCDksGDnMK2hH2WcH9korGPZ5QNzt4fKANf8qy56tsXkWTrHzzECq9A1BDJBTGJMiYu5i74h",
  "key38": "4HEineAHpUTpVW1qc7cnTNCKYET8hE5Y1RHuJHijRYLiPSpGZFtvQyixmXx48gRkBoXhgtyST7D8n5KzpkZoaZtm"
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
