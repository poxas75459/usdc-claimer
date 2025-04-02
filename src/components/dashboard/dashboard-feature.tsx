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
    "5QBbJaZPGaR2pzZPm1aUXp4FDMW8L7GMVxUoKAFKNBEKdkkHS6snT8Yv18s2LgCcxVg8rvu9P9BowWUFfvWBEhP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cNKgMPgsNcLLd4QGQfh9RYumAWCL9Ak73notrA7TqvnzLD2F6ZbfiJPTR7tThSGJ1XUrX6j2ZEYDMtnVTJ7mvMG",
  "key1": "3ctcZXono4MjF6Rhb6U3tzSTU2nTMcMTvhFNQTsV1DzZu6nZwM8UwtXysuv7FT2PkYtHWi6UXUMk76SR7p6YpQd6",
  "key2": "4J93WEBj8tx1F1k5kuaFYpJYBnU4QQjFZQVbhCCoUTTGXcZvU1mdCpoMCdBJyS3LbbeWvSdvETsuSMv6grYSuwqc",
  "key3": "5vRaoRazgKzUhbWBrJGbNUV4S1qNu9Su3sxUktc4eWFD5ddHY8o1G7W9FuSAypAKQ4WxhQEPbjQgBb1UZszMizpX",
  "key4": "5WNKbJdd1MerD1ERTCNGGgyUmkDQwoxKYzLSsR1SvNJrMxxCG6QR2ffknxJQTyozsWhrrnVE2R4DLVq5xn5REkNr",
  "key5": "5BAmihf2BZZrEVc8aCSezJCADPbYfYEcmqffaexdwv3oFXQfNQaeYV3FyMogFBrpkXDr7TAeVNh9p9yB5TpgQNyn",
  "key6": "3LkxsHvet8JRw2VTHpxY5fkSFfDwCTLD37rpP73t3xJuCZd4585ptszpvq9SvZACCupB1NqwyrcWqKSYYn2EJnpL",
  "key7": "5j6X7y27d33Mkfg3dgY8CdSscESz87E1mEVtPhZr2qKL7vUsx856Z94wTfdEiDvdJyJ1TnAot3PSGza7mo2qs1sW",
  "key8": "28diFgWQAmBxSp35ukXi1KF7avncqY8RK7pmqswAyTXddvZRwFXDpjFR2r6TAhKtdjDGyQ1uss1Yq5KbcPSTAp38",
  "key9": "3KrGfnPSwbw35iARya5cpzghzu8B2SJqqzBfWxXmPoja1u6tB1NfuetxGq7QwwZuDB8849QAZ82Uqw3DafhxNg21",
  "key10": "32diEJsJTz66CFsjVcDKkogzZLLPUD6tAVq2cSDnzM2PUmAjh9eBAo6YQpFkpWYuLgh3CMMGWK3MvgJyd9A4yVAe",
  "key11": "3HDnP5dyRndGvJXgNaBny13VKZrNteTLafwXCBz1d7hRBnNGwHLxKkaoBy7bGiQuCGRoSoV4NmCuTP4GBdxfkrP3",
  "key12": "5WuG2afSHEY61NNEgUtHiwtq8EBDWrkkiWqSEXEHxtid6SgPsYmx4Cyo6vQorq7MneN5cGbLLAyju12F8jTG5xEb",
  "key13": "5ovVh4j8UAmBAwEQdXxsHgn2ETB5RZidTM7nBE1nZv8HWPhH1RB5E2C1YsuKSBakuzXHYg2AAEj3CMnjWHQwmEQp",
  "key14": "5LK4e9pqqH24NermiqxWYAWEZJBDGPFG8hW6k98PgHUYTLwLeuMGyBnFyCzVsbDBNh2ir4BQZqxTEHasSskfDj28",
  "key15": "2vV46aHFy7d4Wtjpxm5D3su8xFQWCL6VHF3wNHAUfR5Die2Lw2qLm3JFsdxdbP81mWTmdzvzCcdfV2sJKbC2g2om",
  "key16": "5LFJseNbRSrbXGj7gWDPhNnTvbH1fph5actzFWNEG7sxVquLUx6aCwNsuZCmoZRAvWWR4iUW7DMpdDGQj2W983px",
  "key17": "2o5DQWkEbUMCL5pMo2BXm5ffzWNquc3YVdbNYygZhiW9dVnNdiNkZ9uQNeiiZM6pc43oVrg5JxQUatRbPvWtfWbF",
  "key18": "436GXjiLnwLyffhTmj2qB1zu76KEj11qxfBYU9YdFrBknqAjzx96wwMdRQED1buyAzYEtW2LUnBWcKkLeUyGdc6C",
  "key19": "32jZEyzjY7XAXiUpNDqyLGANapgoNs7JQokgWuMAiWFfYSWwM57Bhr9nNqvkk7yhQQt4WWSdnee3XRun9MLaorLY",
  "key20": "4M9JSRmSiDA8TNfTckGxhF1mgkC9wtwioyzfY24yFdLivbcmCcrjpAUhj21y2uWVEwRFWh2J7tGdvR9qvohYAYb8",
  "key21": "PsJyenQSWiw6rDjfz4Wp6nTr7Eqs6NBkVaLSQ6gj92w6Le1Nrg7Hp6ZKJ3wRWznWYUa9EQFmsQnfeTJJS41LZF6",
  "key22": "4f7a3HELfQ87CsE1dFxcsPjjxASK79yoq4U7Wdhv2cDWoVhjyy1TfSQTBAUMQhaSsf8LSiCY7UskVPBPtMH2xLCx",
  "key23": "44pqUgGpu4yENzwUHvGiCjRnMczxdEJV3rzeiN9DnjKw5xTBJfyZ2TXp1sjA4s3nKwz4C3uFRLatYYe9oj7yj29M",
  "key24": "5kqMzp1uEriNxT6ZLTz4dxo4KPfZs1WsMNLmyPDmxH4Ke7H2eAXqqgT8v4123MTfHCaVQRR6ZySG9NucvMjJDYdn",
  "key25": "5hVDkqb3K9ULacveNfraHHhwxDAaisnGa9LU9pwFcJY9ypm9vmwrEABw89ncT5aYhfaHHGX3MTfsLtzfadpBWsgw",
  "key26": "3hENaBRk6ZctdtC6ZZRYxX3TbS4FJApHy7VxpXQbuqHJhDswyT3Vr3ijnU48o7J9vh9WGXjnaa2QnDtm7duPwZgt",
  "key27": "EENSr3ykYhRUR4b5tNTV23ECyMnrrLHujgpE8qAWy2GUKZ8N6J7vaW4T3EGX3yvYSbq32TiBzCPaAte561UZtiY",
  "key28": "4YoyxAmKqNZ6XEyGmzZwf88rUXV4Q7kgacjz3MX6SdJkP3nacubrjNeGnLAFcG6J7aFPgch7umuMpsxTRg38bxWf",
  "key29": "sVAwB68Go2LUCvQXsp9wyHyXVxD7Y7vcRuYQ2f1vRQcb4vawewNdrrJNbRKLekGdfDRAJCHuA93wViYZokojVVm",
  "key30": "554Ub5Y5BvSXrRzJ4st7meHJh5jAnCuoVHkpvtgqBAusL7J5RHfcj557FfARA8rc5526Y3FPjDxxzExAm9GYE94i",
  "key31": "2ehBuyE3zdJ9ydpznPovhQXUKKENKfrQgpGF5YajWrCaWYutjQbUVCB5QVz1Aw8PAx4YryRMbFeWcbQ4XtVnDeQM",
  "key32": "Egr87uY95smBp5QfbBhuc7r2EYLkSTt5bPsDXupvvxxZV7gHiPnWvxDtvPCpTceEvVfGm9Q6FU7rT9zE48cwjBt",
  "key33": "5UPXT574NzAoTETyanLfPWqsufSMoqvWZ7wRy51LkDTi8SoY5To3SPpjGpg8jwdmfTiiPkECZcxX8vJMp11ZDj1j",
  "key34": "2cmjQo2sNJxcvZVbge6pMMrso2MXpt693T5uLnzxndkwM8yjPoBqJRFYqVB2dZMGRuqCpKkA5ejxB7wRFbWc6BL7"
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
