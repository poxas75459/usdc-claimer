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
    "FJJ7vpru9Bt2bN8qFUvnavVYHiFieSgoBSW5vojXTUsE47M2CkBU7Q2FaZCqjkKULzEMYa28aHxEtoJyLkMm5mB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4anpKahr1y4gaunsaafDkjjJD1gt6j3jeWXdBh5nEgics5hBBiG4Hsy91jvg3cQPsMcE5LHWx8ewvriQwsh9t6tc",
  "key1": "5zVTCxjXgDz7dzumDnQJqc8fffaKU2MFqB3xgoJyh8WBXtvGHyFbw4QujYqCyxS9CGKTNm2EJA4fq4Z7p3yppPAA",
  "key2": "5y6NYnP6FrngvSEe4XaJM9Y2Mo3iLVqGf6vUeP8DthTLgWoBzadwyvRg1gq9gqK6eo9fiP6GLF3SuyED9SBmZoyW",
  "key3": "32oBnYK9LfFx4oZkke5i26z25hfLMJqry6njEcSKCf52DYUSraEMHSvCKyJNV9NPFqn1bEKpJu5AcVxGeu4NBaym",
  "key4": "4FezNFeWTuYotHxVnrknfpjtTR3AkVSUFSvoXtJccSkuDrYFvvAaRQkdrBWzkCFnyyrAdQCvUzsdz77KL4KGeUtw",
  "key5": "2qzZCpodigrcvaiDdbLmcTDfwgiVvqFQsurVuzUQC1qtdRpNKAVRnpn6HEk3fw4HKrLzBk2CqxyvfxRuzniZwz5D",
  "key6": "5bKv4S6GTMYq1p6RwFMgKHHVT2juaCkUKzXS5XRoN9oTCj6Fk4PeF7JXczUNQfkfmeuR3bQw3eJHPMxgeKDfaTuh",
  "key7": "5T5B36LUpeFrcE5UL4Um3NGxXdkQVFex39x4jAerrLJY255z13Wx3f3ohKg9aHJChgPQbhNenduyizofBeAVuj8C",
  "key8": "23yf8depergryJN8q8P9P2miQzyzAFfpkkK61fspnVze9xxWtxXiAqtNkDBtX4YUBTK4o8CHmMXa1EuuEoLZXXTC",
  "key9": "5sYpqW2ZGqhPs1MWp5HQkjsM82KXcbYGyJGhSKZCnVuQNATpoVePLvLbhM8kHzVyeC3ZE4aZHHGirMZ3L8j8F9F1",
  "key10": "4APxN9RHWMqgPyUsk8srx6h9fXWJJzywNTm9cPgEvoSuMsk28KaPnNmBPBEa5Qxxr9hynPrNUDysEJmRnHFp1Zpz",
  "key11": "5XK6TAySqPeuHCTBvGqR7BepvFKSt8ncxMq3N1Qe4zSFYgWZiVgYh6EQxUKmnfDx6gpEJysD6AuYeMXg5Kp3Cax3",
  "key12": "3knvnJikqhEgKtNrvJrCrGfnWamMfQEFy29D6qxMzBJmWq7sdHW838NsckCsLUrEsvsKgKfKxfhYebPRNDYGjvQq",
  "key13": "KKB2geNofJ8nnfW9BmFr5oFAfrUziiqdYEnqaGQ3Qy1X8aEh875LaT3Dd4LWQRZ8PTkzCYy2XZKusY6EgS6p3XB",
  "key14": "4GKjCSHG6iQG5MjNDteJG6w8PLb82GszK3UohRzx9T5xiiTdvQrrChBKz1gdG5zoJeDt3AMCBh2S6At5APGcPeGJ",
  "key15": "4V7UAKuFpEwrvdfDAKzgJppK6M3sVwfFChnEeDAdUJdJ2JxWmYZK7gWw9kjqAN5gbwL3WaiwjXbaFuf2ywuhAp7v",
  "key16": "5eM6Zgd97mY77eHJ1B7uBFDW6aqLdLsJ8EN1qFtd3C1etVY8WypvBhYF5egKGVcdzqo7mP564vYS4SyB4nxdwqQv",
  "key17": "4PoHQde1tRg75ugtELmyEECrYGSdbPGLiJ9AHhkLwLvRPEbLrCDhr6eK8ApctCAHAuw9R2VrgTZeCay3Yd6FzqfD",
  "key18": "5CLDnSFPgoLZ8Dj2rakEprJK1PExHGduLCau8aTHGK7R8NXmrR73JEnPcC7LVmx4hXHwGNUCzbZV4vgu23c7sr7S",
  "key19": "5tSaj7gBdYoa4YxmEAjS3Mu4cQ1CTt7kWLusSUMpVrCQmzMfabMGjwAc12ivfSsQhrsyxxPNDdNdEfHA6bTKUcsM",
  "key20": "5YkuT5iMxQKbbxfhGb7b4RngB1wHRoXriCdw74RHA1sWZ44U1MQ8gBVFKZFXuS5LPEzUMrvBgJYBm9Gb7dEiEsXy",
  "key21": "28rFJzW1YLhPWfLKFWEHvLU9Xp2L1PAzy7Trx3uFG181iWvY1KRRpoN1LpM1tFCwsb6qaaVa4r81C9x4ZD94tkQu",
  "key22": "4QrWJCfaA2N7kdFhbVcFyoxPARmXN12uSpXdTYnhfmVFf54qFeHU7TPQv6spdpS4cpcLu8pcSe2YUGD7Ju74SWwQ",
  "key23": "4cshzyS6hfJXDtgyWCC8D8iFzE3F8SAmNQRcf19khCf7qCLbb2MNs6NLCjYzRKXp5tSRdgDPWFTh1CBkNd5zKYme",
  "key24": "4gHifTgZjD6wt2SrpuHBLF86scj7xiNsLXAHkWJbEkTfeoPLPxjRTqpwZdDBARpYNGnfuvgUpsyzmXdVmT21ANPt",
  "key25": "67cnniNbz8HuKomhHpvha4UHpcG7AANDfXPwnqup6vKY1EBdnf16PDmeBewDbdEMih4MSGeVJkou7oeGsviKo5SB",
  "key26": "EDuu4RgzstJArYZoxzcLJCdSatSfeWYx5EzGemF7QjjZUmoH7jkGoppWfyFWG8cbMtJdVZ1j3keqXFtaRCJLg6Z",
  "key27": "une1K38tzJYvBZcH9RKyqwp42o4siuzfXiPZL1G51obfDHuiT2Wp6BxnFTHeHUjbcEBmfwyh1q7MAiaxuKDcbiM",
  "key28": "5cJbVRz2a2c32kY4d1yNszDqCRP992Kpd2EbP5KUqyTsRXPhpzAJVgxLxq8aAWRf4aUce6sxJtnLLNFh6kd2ufki",
  "key29": "39y2aXMeJgWpck1Af3mHnqVYa1GvEVggCwtc7B7GNi7CdhEsft4HCeFxPfMhhLUS7j3SXqqWTFVfbQmDvC3N5gRH",
  "key30": "5jeGaXKohvcQf9vP8ymwKr2UabfuoiXocvQQVBnemiGVkFi7b9594ye16p2ihsHNyUizFXvMdF4dGpfwtZcX3SgL",
  "key31": "2CnzgipMg9CdaAQpswWKc7gXErBCqe73xE3sZNrSoeYD9WvFMbJLAspCdLyyiF2dzaZrUipktMgdqixD4L5XTMxV",
  "key32": "4G6hm2PUwzmGR4PkeAQs5GHKNZ1Vhj2EDjjN9PkwcGBX8afAcTwFwcVLUAVzAQGRXawDo92vnRUmUB3Bgg8VreXd",
  "key33": "m8k6dYUxE35rp13g4AY6TNyxCr4eRDC9HnoGEJy9Q372v9oNhGQERVQvXtpk1eaLgXc37dFpNEFSrDJescz1WPy",
  "key34": "46P4ybXPH5cBQUXAxU6WX96CKWM1WHKQp69qWfPVJgvrw8sQNZVDq8AJ2CSfPaFZnTQztE2PjDJFYYe7sdvD62Vb",
  "key35": "jKG4SpvYgYtceZgZ84yZdq1J6yefxUYaw4Y5A64iHGoxohc2q8Xbcp2kbErsLA7wj3WhuJcDnBNGJEH4HyXKhLk",
  "key36": "5VbUFZ6HYMaBk1EnZ1NrP1dyfqnJFMs3tA6i1VjR6JyfT7v1S6TRrryyB6shWAzs8NU1jT2SZWT7ocUiWeDziErH",
  "key37": "54VkuUurwmqTx3S3oNCaKdTDrxfSWhhXfhk84jMp4T3xMU29P49RzJ1MMssYZiBZsiva5N44Pcj5JKA51ysH7T3B",
  "key38": "vzE7z7j3YbfW1Tf4LjUjoi2VsJvCDXfSMLTeE9U4ApyoLL4BsFEngKA3KNBfK9qSZmNAgaUCYNT2e73vKShwaht",
  "key39": "3FnhK2jPUr5nbWK467shFh63umpK1trbkEQ8tV2bew1QeMYJPYHho6918zAkm1FgdyAuzG5Ev4gNwZeYThqMfS8m",
  "key40": "4b28saLbsLXgDRpMTST6xEyeeBYD4bVWAKSC2dsmZXGf1sFXBSoCbaNpJV7cwJcckLYbzM7fmENqJBoyb1UUi8Ph",
  "key41": "5erkGSNay3jnZKNPo5MTzETWE67Q89ncQcu5kVoecWx679kfqNdDT5PfbbQEyHkoV3uQ4gHbb3tDA4kv1SGDqUoR",
  "key42": "2aFdwFKyYP98MCeaT96aqNYse4Jw1oM4LpwsHTJzAZ4FxhsN4ouWdHvguJdbb15pDzK7M4jt2YNRjzP9omsRh9Vk",
  "key43": "59mH6ZvxomvsyvdaHGGgyssqhTSX2tp7hrq4DfHVPwJ6zKHsr5skZVJoqy6YnsF4jsDzprbcHCtUaP3ie6gTPE5i",
  "key44": "2aZArwjgbYrGMoFFpgZL9A3WJLLfgUh9jvyCdjb8Dw2VmC9BPEABHJiZaYdCerqCMhuV8zWL9FkFbkeFdpFBSMdV",
  "key45": "5WDsDuA1EteFQVCNA1N86cwbUZt9eeqSWmTjdjci6JwB8DQMUwYY1avesisWtNVNVP1yLwpZKw2NhKAPmeYnEKM7",
  "key46": "3M7uGiyHRF5zQA4USKQBFodQfhSKxrW4A9bwR6r6X2umaJFwgkyXKwiimM8qswkWihbc2kCHSsiXBH23uNJFdzkH"
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
