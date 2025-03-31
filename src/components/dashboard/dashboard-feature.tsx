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
    "4vueWUcrKkwcQjrdA1sWwmoAx5YzvUPsWM41vgDfDtrzRjXxnoyrBj78TyEzYLGNU2aKnC2A9qunEtC58v1EeEwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JCZ8XzuA5KC7gQeBAPSFNGWG8NSo1VgHrHb7Cn5gK22SMXj12ereSqMkNPmiBufKaACb5YSS1sbHsLjvkKd8Y43",
  "key1": "42buzKvqBtbLZVgs3CdnHKHAHaUW77hhvM55TYsnGXaZuoczor9udZX31SsCWKwqKnfJQkV2mMB4qAF8x2NiSgwv",
  "key2": "2pYXUwDabVxWGk5knp2AdafVUpAjarAVBEaTqSdJfmowrRr2UxQ9AyTFAMZfgJr2q7RbbsXq1amTZx89XntvrwGL",
  "key3": "3HKRxvFnS4ZRsuja9UVihu58P5WhmYdKRTvafVC3BfNBZgTEA6Xd79YyE3GHaQ93DZoQUk8TigiS1QAP4BBP8Upb",
  "key4": "2kpZGVytVgL2APBiDVADGKjPuzk98Rwg3yiyT9GQqCAGYuCJBuCwbzNvHGBrq47V5UTcuXwyZ6iivUACGowRbMGG",
  "key5": "34JwtvESXtA2iTnb7pSx2vTChb7irqDDpvuLpbLA4T6CqNY65HFNWYNB7VSVkr6AD3YB6ftxyKZhMrayoZXk8gii",
  "key6": "26xbCkte9UFHPzERTRa5ssoKwy5wp6LpL91LsRNjBojBRJ6WbBHio9dVBbaqwECgBjiaGzoznrwEmR6JkiQD5ytR",
  "key7": "2a6gNfkdixpjbVbnA3CnsThUP6C9B5FPVPDEBqXx3ChRefnL1xXNuwr3rgxuNAw8z3oQcqAtPBLj8NxXSpcptKkB",
  "key8": "66QPSdP36sMJHJmxxSgKxH5BMpwUMshfe92jLNEm8L2Vp2Wi2QiPMNbKoqoGbbxxUmHxwT2v2TjDRdxTzTcWcY9V",
  "key9": "2h3BJFSfKJffhY8fpsZ8Ez1RXdC7Mr99uSxuScg956j2aXZQDbyakt5SawAkqGqUqBf4Zpt5zz6jnNR59ZgqZiKX",
  "key10": "2q3CmbHzqNKK2Bf7BuX7xfriLdAiEtMp9YyzuxqxGVaPBCAar6rQxxtFsiE5kjACySrL5PcjTVTZBb9qjCzs3qFh",
  "key11": "3Li3G3JcruEbZL43fAThAV1ZMXUnKxY9yid1miQVFnbZETaANRin4bkB2QbYStmWBVHV573GdJ8F4CkczCuTmaGG",
  "key12": "4qw14CwndGRuLW7khLvq5fJnwYXXppxjRDtB3Cz52o4RVhBS9XEQEhQ7LzMRTtkL175RLLy5ddRuwPN9EWoSc1UG",
  "key13": "2kJiR1gL6p2AzNKuZJei5pcawohrLhEQjtPX9ZY6ZMi61veurVSF1ny7PPErMPEoB6AbLV1Qt2Wp8eUyH96vPTEp",
  "key14": "4isgMWuCk3V51DExYKd1GRGmPH82Cy7z2ABvvNpBQnoTgwJiTEwiKMQnPNFJK4U7M4jPsFnH2325SmNG7moaqq6r",
  "key15": "4q1GkX25iCSAPuKpnAzqWMk8cannF5v3cQfTeRHovFaFQxixWPAAibKFMcj4TAxJ7fmQEzYQhhiuZck6TjAfHghL",
  "key16": "3T3j1nYQU4tuxoafZnhKjPjsggrFLy1vwRT3PphTB9qYkXz1i4CfFiFUiWZP41xGeUeAU5QbSYKVSj2KQ9YnMJ6s",
  "key17": "4jR1HikJHxMZna2nFB7qZux5vxjoqwEkjBF2NAQdkNeep4ytckkiAK915qRKhyRqoGcBafx4ud8cjAYKW8KdzCv",
  "key18": "LAojoBvuRoz9bMA2p4yCHj8CM39DjA3DnCM43XSKUtzXdq1hq5kdegoMpgjFep2ac5erZT2NtKAQqTDTCzNXTWK",
  "key19": "4jpgVpcDBD5S3WX9EnWk2ZCp5vqtjv7fmYDbXKou8tWEo7DQPXrf4znJN9XtCaxuXd8ZURNc3AV8c7bJikJWTcma",
  "key20": "4m2FZ9hpBAV2mVNbWk2f6snqg8Va59qPuD82TKbuRf5781G59hVDYPF3LVxAAbCUqpgArEKPsj68touZyqQG8PS5",
  "key21": "4NoewwQ5dD7JpDMsRe5SNq5FjLvgZYM1JWXe7g6MPoeKnXruLJakoW8gDrx2SjMA8fQ4DNySVE9TGGHba8BzFc3i",
  "key22": "6183vvttHzf9vDfSd9AuEDiuCEBbLxUEqKveib1qbLPs7METAqG8ofgCpe89Jz3q5YqXELm1k89rkSHmkt65FXNB",
  "key23": "59ZW9RtREQ833imQzqmdGWWe2hkgNvTRqDoSYrjZMUHwAWSiy7ecKqF9AjUB1noUGhvQTehL6HLMb1uSXhQ36Srm",
  "key24": "4Cy13HFxXnRj4Qxp76k2oCZSFenTfp4Tggy84Bm8uBpLBjQMNFTXjBF6MEoPJS1R9Tn6sMoyc1qJ877UnKKWihzB",
  "key25": "3HbHwp5qYAsGDwxhYM9sRdjQa9sEWvnuNTej66Br18uTw96U6YkV5XsBJ1kvmrHxGbUrBTV39hFREXP3eJSrKYpz",
  "key26": "r61zjtgPES2k8NdX1jz6jYPhdCVcZ3QzptTLMttKuzDLaX1RnuKM2FVXNyQV1tiYcDkUWoCRgVduuGbTtrKrymS",
  "key27": "3bWSAD985v49v83jBgzYuuKaaCnMBZ3kreAGNrJnMXPS3KXJwf7agBH73G39EFn1ZMYB9YQWFrAu3Y1HrMCP8dat",
  "key28": "5v3RUW7rKtjKNPfNxowPfFcTtcuj6Ag2VoRKUEKQ6cAio8igAotCiWSN7bANcYyzvq6eJLk5TPnknnwyghckYgxc",
  "key29": "eCmt7V5CxeTHXRtaPULA3MmrhvkxHGXn7DLEMZRYaKZYJjBvY3aUh6mWrnABJHbjjxpcCxxkH1UG5FBqGFjDMvB",
  "key30": "GQvk2iHhWiBV22PVLMWJN3J3iNfDf6gwUYE4pJpTudPWXUAY5uVHWuTnABzLXfXAYLbTCsi5uXe7y5fJStC2z6Z",
  "key31": "4PrHjd1Gaa9T8cV3E7qF5NEMfrCmHNvHpu7R9rsgNyqVRh3XACJeFSgsWonRZyQ1TurMpwyyoVdrMTFgHfhXxhh7",
  "key32": "4g7ZT4oTTwybrKNtXURLt4tNYYX5ugFU8Q5Hm8weTyQDn7ZfoDWZMqg2hoEZiT2iakfUU6czLwcLU2geSCJ2Kk97",
  "key33": "JtsBojmoniytHfD2MUwHty7BtFP3hc5dvQeYeMsZUGbLVK6YnuD6RbDrUkXvQ7UYZzCdpEAEYGh2bBhy4yS31Y4",
  "key34": "3X7s9sDMqLN5XoCzZqcjQHTE227n9NFUbbxtWMpnhsTVFCB8V3ujYj8zDxwZ4USmKRwMYaNae9okDMzUZ9FVQRr6",
  "key35": "5VdfDDEpUz67c1ouzg5ZSP1Cun837EgvHFi6UCtJA4DV7wj2sYDBCJkzHhAafaLGcYMGPfBXNz2zT3VucnBv5FBx"
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
