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
    "2c1Ls5Ej3AGUio369JkupbLa1NJ41B5CyrcZXDszbUbAXcJUdvL9xDac69ENLq7nSCz1jU4fdFRrzxNGB5eyCXnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eXKsLCnyuy3acf2hHL4gJGLCi8wprRYVEbSN4wmBSi4WY6ffxbHsUTKoSPCUg3VDD55Mi6RvGNDVpfb4iz4sxHw",
  "key1": "2sDUEtBvxAFSAeeG5GNZp65pBmQPZk1v1QTN1Fhaxnmj36r2QLrnJMHpbTfxcM22hBmvndsiiZhcnAa3dnGiQEeZ",
  "key2": "9t9uqqEmRyQ9mXGK6T2Dqb1RhscJG13Nt5NaAUbPfGtgdNXK4RMuctiG1QBa5EDLXCy5Zm4YwzKu6ZYv7UE5D9a",
  "key3": "5safxKMtMd988Mm5gWhtwG7td1fDnRqm3csVYAnDapkpdHhf5GXuf1q5zA8sjFeseuCbdJ2jPoMLMsA89YWgC5Sf",
  "key4": "5jupHAi2mivDqx7bJTmSdoEgdaNU4STWHR5aBp5xbgp93AnH9U5z27wwSuhqpuNbbidC1YYG3eErudL9h2WQcGkv",
  "key5": "5eihUMqMbLUPPSbAW2ZsjSN2wpeEFZWkM24hSQFdsAE17G86MsDQkbC4QpkyAJrAqHH9KFdNq8nhafVm5UqXsBAA",
  "key6": "2Ly8in4JzgEqzPDDRxztLkBAS9JMpZWADjMNPmDNt7PLQ3ubTEpkg4rNehQ1hKfe9DinqYABfcbqDyRhtjFz93ZZ",
  "key7": "wP4eYTxb3DtWoJwVsMzbQ1CGX4L6bWww7uHpN9H5Xbgx7iBz8rP5hGgHKtUxcDpaHWHqERzrP5xDszK8vTdmg8d",
  "key8": "5ixvqMiYfoP4no5ixJZTeqxS5atm8buMCXBcVDw9ZRjRS46ASnVr55DkwkVvxB6Qogz68TuCQ5Q5JBjvbhnHL3HV",
  "key9": "3X4Jujf1Vkoc2FuKjWHwtuWGf171e8HBhGU1ALK7Eo9ESg8FL79Zj4yeXxKiUkkP8aEyUdN2wZPdvA3s1Cy6Vxre",
  "key10": "4SZXSqZu6honCSVrmwuvbULgmrVksSqeaJpePFEeCCJQiAyN9Lm2tGrb1oZ4RWmmFps4JfuatwWjUu6LAMNgUBCp",
  "key11": "45mXJVGWfwxxq26YSGheCmvVejMBWJvm9PoQmFLGbrPdF4TZM3hCN3YCz5FTnHcqMR89HfkQLyRdepEjL48MHViF",
  "key12": "3qYSX9unaWAqMVW5C3GYLAgHhPBrzQKsQZuzeJPheAhF1vyo1CQuNoPFX2cykTdEcdo1Y1cfWqYSven2oU5b7Svq",
  "key13": "4uSMhZUC4qcyoaS9QbmPAvrRHXrAnofmuc51hQQ96EM3Rd5Q5323MhjB8TeJ5tomyH9sEASwNPg1ie7gZ97FMCbD",
  "key14": "5hB3mi7T1YKeJe7YugM5YPFkuuXcddhyZ8MjmQrtUQp1UCXFzKomFcFQJ39MHsRMqjq27RgQiNJGMgJCTEUMR65A",
  "key15": "5UsK9CHHgQ4k1Ld4xV6FpZLyFWKg5NM7mkrFfhFMDJRFK4Hsy1x5ZqCkXeY7memb56UcBc32idbdnnBDNMW82Nxh",
  "key16": "4ZAmJg6QwzyvdWKW7GpArAMXAJsNEfSzk2YwYRxDHRxVZ4qHRZ9gJuNjGb7LXs4SCUrqR53tQdCuWnaf6DXg9yQG",
  "key17": "4RuoyEVjSD1MtzBPJnJNZtCWjyxRi9KT3ab83H1vdHe1toNtgbLkqQpmExG6iUfjhtRTDsKqHm8zx4bwBFfjSgv6",
  "key18": "3LQDvKU6194nosj7PSUsS1ePgPDpxSyKVH75Sy98L2VF1XrMwfPmovQND2W64mY8jePLZ1s1tTJfC5VFAemrzFVM",
  "key19": "j5t36iTDo5Xp42ir8kgB1kyf1UghxL5qBf6tSBVE17rAScWmYxDv6ugci4zL2ZNnErYRRnAZrY5merXWMmnCXMM",
  "key20": "5RTcxoxWGaucYhcZHmmiEGEFU3vCwfWtp9VxZUVh8188NPcYMbY1CyKbt2x6NTFo45shVt1DTdDD8g8ncPeXzHH",
  "key21": "4oZXoGieW3Zu9quoWmRvu7divu9y3cZGmNbADDe77Y5xyhZUkmukaMSrVi5mpVGoboNENkSf3oY8ka7rSLCqyWX2",
  "key22": "5uP7WM3di77i5BW1oH6bZq7iQ2tzuMGZnJkNsZndJWSfgbuZdKn8AvgpMftJfpMAiDuwCL4bd5UtkaBJA9vLT1pn",
  "key23": "uYu3fH91GuVXGVkUuRkYHWb9X6ZCXfhhXJ4ePKzqiVtGvrfkTJTzhkzgZVv1SFBvwhjCopRBjssGvvHMsiHVfhB",
  "key24": "5hNfB91K4T2EyW1gMEsdr4uCVZhUsAECo3LZPZRZCTYjPXquW7VgNU3mNZVWR23nwmRGoJpMrGM7sSCtub3Gcbei",
  "key25": "23vvFgGQrPc1NSfEs8e6SJ2NW7p6F1gN9z2CV5LSsQTxzUsg8X7eF6FxDfGRLnjLu957KiTyYshJV5bX2NdKGRXv",
  "key26": "2DTreh7KQYppC2KNrSCoY9ptSVZf8JzDYwui4ecn3dND4Ha4j6myWvXsZUm6AJFckTv6wmucNqDEoDDS9Na9Wdn7"
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
