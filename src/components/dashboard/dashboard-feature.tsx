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
    "CbtyfV6xhhh9EFuCNsWPtsXM9mZGubrkpoKeCdUq1NG3NVzQCGCfoiMwTcpAhWJJj8UbBGWMvzbx268SXiHJ6EK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ae6szyEAjwdjJGxWy3Z95wSMqWTvTk8Awdxr9PABSskNQLUSHw4bF8jQPJosmCGUoNv6B6Wwg8j5HZMifVdS9Sd",
  "key1": "5SutLyfWR6yrivWamZGUC1szz5NdZJZuT297XYbbqaVnKSHvaF1Fz79N8EeSpgg14MQnrQokfFMVPD6fCVXxfxYL",
  "key2": "4UWYUQAC1pFYuiBirQRPnJ3DdTxkGdnU3yzWcDBnPEUmiKgbt4g5BMsuLyYB6Ev672pGTbUoKzbLpwn2pn5wMhuz",
  "key3": "3KTo7WuE936ZyoasqArzNJG2Ycw1tzaJUK3g4sbbqZ93XEy8wekjcd8NEpdsxocQGaxahETWnEj8c3HMMuxMSpas",
  "key4": "3h5XppPU3wRKgmxZsGkSQCT2KgEUcU6kW77xtfnwV2N9wzvvsH9QE2ZTYvAD613bxWuWUEJkuyempowY9hcEoMDs",
  "key5": "vRbL4DmTbXHwUUBbJ92tEdt2Nt5v4UXo5jzXaPy4JyQnJNGeVHG5hoXkZSTj7aZ1oiSMg8FCdstocJAiuXhsgdM",
  "key6": "wsCrZjPxJyjPG3bf6FhaP1pf1XikjM24QR7ZiYTGAREcNt2wtUpi6TaNz8eWT3cwEAKqVCn4YnupKLAvHQjpCUX",
  "key7": "oXxRNGdeQvjTFPpGv7pqANvPhFVcY9NrXnnL7Vj7EfAfkxd6Q1xiiyhhQwELSHCznf4wN9s5R76MakjwKo7Zjky",
  "key8": "2ksH7thazQdSrcDsE9pkSmk1zAcdC9DTd3weJxSZjztXakiLWPi3uvxckWoiucSxQ3zMbCF2oERt9YKLjpsDJ24u",
  "key9": "4gjFSjY96jFYEuieJE2FQpEYa63QWMzEBzy3K7RUKuWqKsV3XTGQu2YXadbpWikhzp32QFU6edUH6H4UnbnjL9P6",
  "key10": "2mRaV3fvk9n7YQQZ9tACqU6dRHAZVFCtLuMYKujXfTcr646JXA1xdMYNatiE8QY3wFKAiGCFN4C1ALjS9pJkZswC",
  "key11": "55kg9JBD4EzeRoNR876Tc8UP9kzNrpr5ZS8bJe1zPXgqeGc6kReq7jRdgmwkeEoR9pZXSwW7kciX3JWUMCd2eedN",
  "key12": "4BUaK8QduXtUagrUANxe8VXLGij2qaJ7zq1xx9v1mvaokRJPe7V8ecxm3jFwkHhwgAcJ8GQ9GMGi17qTj6fyN89w",
  "key13": "4hHrC1kAYCXDWDgjYk4t3x6GpQWxJiLfw5Yzpau29XEvSEr4VMB5k7pDjPKtFpB7TUQ5HCqcgfs1mFZTutdkSdpp",
  "key14": "5ji48iF7bzyVmrfbN3teXRiug5kqA6Vfk4FR36R47G7fiLgar8P5tD9GewPS9nqTaBGPnWWUk1pseZCds3eRn9Rm",
  "key15": "5DoLbb7VSaLKwAaN36FLzpNwnFrCzXGJLSZMBZz7y1KZJnB6Ky4LuuoFSsq65bc4NfNYic4W5fTCFqq4haCSfnZK",
  "key16": "pMLJicnznTjqthbBmwMjEBRFm2itcohM79SX1af56KHxY7o7B16vh6MgdRr5YC9bFx7en4tr9R5YdZSTWyeL8Yr",
  "key17": "2j8q1bCACGARorRcva1Zqgp7jVM6MP9xDxJmcUs9FgGqy3dnpD3zbGYfVRRAk16pSeMwUJvjR17Q5J2iVpcwkzdb",
  "key18": "5VQ57nGV1ejwjL1RitnDvhLni255Tg4oHFEw8knPVkAPcQ3jdiweusRfXMfdp3fQMwPsfxodKHGX4gRaBmJ27nzz",
  "key19": "KzAAZJuDwtc2UnJdL5rAgt39iZCYf5m6L4Ub8zpUwXBXpbaxpzzTU6C3Y5ZetiK6vjqqsAdn6nAhASP3SDeiZCP",
  "key20": "2fraMNG86nczYBAk7SZcv6Vk5MqEc1esNRYkFNYQvML7A3G1bDk2TP1Uzj9BxUppY28E1qbYNjwwtWB6876ku4Cx",
  "key21": "5bobDoNwsPGveD6AxsyKdwTAoAPLYtmUpa5mgbbPy9PyqV4WxbaAXkKi5tmTbcdMuxGzDtKFXCdeWGUDe79smvov",
  "key22": "5u3Z3pzE4P28EyLkvJERiPyr6tjWc5JfF9CH7CvGt6YF72ecisZCTErsrHkfT9nEMZ3bAdqvyUSgXV2UpZ8GvYe7",
  "key23": "5pDpQ6VFf3mpHVLZkVSA5qsdHjySH5Qz1B2hVCV3ukLvDbncw3454jnbXYCTCZ1TXotvvFPmCupWBcT4PTvx69vM",
  "key24": "pPA4ATNv75tAoWgCxGyM2BNRCWMfvmf3N7oxPH5s4sZmmARvUw1VtEqC5TZN6fXi2u4tViUGy6wsH1aabAszeHs",
  "key25": "2ih2GkLvhJ4PWMqS31nMSZLWUbAoZYxJzUNapDg25DLvEU3jjvDPUMqzRFe3tLveZ1n4s1jFnYD4n2pqFsbeDeir",
  "key26": "4cuktyYnUo4eD2MiuoQe2SkqCbShgc68kEMeevTwPX4rLPLiF3AVkxsmUq1Mu4nfrcxFMcaw4AxuYmgdupydxXTF",
  "key27": "2LQN4yq6KHou6s9Krhh2nz3zarLLbfutqp6SJFxTgsmV1N55xXKAbEpwXLdws7Hzp4JVssUwx88zYGsnmu9b2cEL",
  "key28": "3iqJM7U126wwEnJ5W2jm4qQsLWdskNJYey1ctW3WvEjvDyo6dPMs4QHjRsmohidAPjXt2XDmpMabTv5X1CCqVb78",
  "key29": "3es9PmUb536rYeh1kMpyyBBiudrrsruPQsLQXhqQr1hH4tVJiWQG82CTvwezCUz4vb81Bdk8tZX8TU8ArxrJerPF",
  "key30": "5oxR1o4J9cGaUuqG5BLqgGVgCtiWcLjczRYSiavodvjrKnPvjHapTojpiessgJRqXEnpTZJCvdM6ghoSwYiFGbEj",
  "key31": "4aR34u7XWTLftoZQAnuk59aEwFy8PTMp1XWsWoQubyyo3CzzwTUMKhUAZG356AsBFB2pBdFUC6u1BS36iVycEytK",
  "key32": "4pYkAPciqwiAQkHa5yZCueZH7uu5BGMmxgkvz2n6bCSyVPZMYWmELhk82J1Zm8FcgxyYB3iT46idrGBU1uX6frf5",
  "key33": "5msTvAREYgLyMLA1j8eRJGGMbDJtbzo8g3dzNvAACRrp2jUhdCP5vAxnGmyeTo1vqbjNtiaRDnBDCc7rjxgrW13D",
  "key34": "3PhBBnAjtLrj1Raer5kwMZZN95i5aj8GUFyHBnAPf3FYLGPxGCWRkvswtTrhrx71rU2Pr11zAvNMhTPmCEYFECDL",
  "key35": "51yM2T6YPdbL4DQPKPGpxc7MxeBPjoqCiKwQyPnWVQtM9vXZq49o7QGfNXddHc1GbweCPGE39WJsvt1N9dReHLH5",
  "key36": "4BQ12a2fWvrV3jCZ9uBDeYX1AdiBXw52aufT9gCaxBN5M9L5AkTtxEFJGn1dsyRmppbW1UN9eYdaiGU5NrUabos7",
  "key37": "56WZ3gVFHUuB79w6KhT9CdkC6LqpzUysRrjWNfsGbWPNphafGA8Zr4rXW4Bvrao1uuCtyKGJHBVRyFtSFppNnbT4",
  "key38": "4ft2HurRvS9YWQKcRw9X7e59RKEhB2KQoq5YAZr8QoWEXkZQWrv1ESBGYmc6DUZQY2mSEDDRNs9f9FQj7KZFtnxL",
  "key39": "EZbXJfkqGFTAEzt6Vtuh58xF4TdHrcV2NzHHWDAtpdECKNEZtZaqiUZNnSavupGFwFGfMHWVZvXkQmpGCVhYYbf"
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
