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
    "5e7sZyWCcGjtnuGggVtdA94jevnMYr7bnRCaVMSuD9D7tvjg66mF7t7nVKs7YAkZmDrWqoJocav3N5qVZPEDFX8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mLK6yMMAuHFSc9igoxr178rM1gZD668ahgBXw2uzuCdfGtEZDKPBu9DtnyqXtstivWNjr41EavWT84W35Lnji49",
  "key1": "3XqJyeQJMMAqTaYcRz4HHMRGQ1ENiSvbfa5hECMXeqbLE44hpiSHUNKpp4zcXjTrv91LhxJfxq1LdJfDkBg9v5bu",
  "key2": "5yirPbr3ts43kNcS5e1gRACForLJTjiQ9uNKysX5uqpPBvc4CYe2XW9nbzHmcxLTP38iun2iEmQyLAgJNrZfaAbX",
  "key3": "4FHk6mJqXsP3mt3rHyneDyBm23jPxKPd8NtN3LLdxAQhhPrCGjMHCsryVM7NF9V1pGHk3Yin2ipZorVii3Eq7Tbs",
  "key4": "3sNwJ51VNod4WA5XoxhMjwetdsTktZgjbZ5vvzeUtqJuXYpSP92sUCqHgqg3gN4xKD2EbGZ8SmvVV1qGPbjVp6j9",
  "key5": "3kDYWXQ1FbAdMqS3GhmVkxkhMjXf2CofejAVWq3QoBxh4YJEY9LMYbTKom9PcwE1zfBxCMHXpQAaHWvfypJySMFk",
  "key6": "3eHu8hL8xLnSESAp1d247HzBfSDmPxWTwSV5tmhuBEyYvfqba4F8U5TTvAXo1PGhBbZVDNSBosm2Fp4GPRtAFH5m",
  "key7": "5qBc12KsgoGVkVsiWD68JNt5r13YyehX5ma4Fc8UZk1HB5b1LxFiWgseWWBdjaT5UHGTEV7nJFR11xSGSDVhEV3S",
  "key8": "Cow5a8KEHR6DzuahwpmwX63tet1rZw8co3iakraMp2Tm5PLyHdfcKLJMnUbjogaZCxQueSt4fQPsTW7XFqELg4C",
  "key9": "dgodUEkHGwZSVSdRqDcqc1AoBTx9Z5U1FNxopEc7ukuouSiNDS7Q8Kd8LQpQvJfQeKp9xMVUkAYWC5LYXTakyi7",
  "key10": "2vdKwxWmjMiG32qhBKb6era4RHNfUzE8QAdku6zgX2LeXmg5KdyC9WJ1GoT66VsaAUWxG3jEXA1tGTsi6xQRGVqi",
  "key11": "4DxVJyfTAGruq8LHrmsHZsE6zQASj1ZVGpYogiSbFJDiCQKh6sjFmXqB7ZJ2H6vfchWiAUnDfEiogkNbZbrPPi2A",
  "key12": "LoPPcbgjsR1HrVntL1NVVoGyUi6DnXirEWMbZsAVVQQXpGdtF1DuvKqVCc16q2GJY5BYZ5NJBfLUQp2S2JuwfYX",
  "key13": "3ZxhrtUaZcavpXPeovyvHhEpKinNDZZNwix9ZGxQkReUinvVRM7EcLTEiKFVSjAgdcLoLZX4BE9uZucN4qD232Je",
  "key14": "5igD4ETk9vEpGLbXpWP1v3jtxxmfoYAH2FJys7T7jLRuXghHTsh2eLb4Ge6c2P11s86s5Po6ERDn4uMFichyn4PB",
  "key15": "qGez2ynrn9AzjBRKqeDieWACFxuYeAWzViDZ9msYsx3d6ZxPQYPuWX7sez2ZJsRs1gnjV98ENnstfBDpSeNnKTu",
  "key16": "5enGKAHEAbTBJDQ2eWN6JqLXV1KAbbeeJSjUkTx21U2jAaTHMSQgGvLHXFfRgUVcJFHYniDtyjwxJfURsMBoQVQ7",
  "key17": "CQ3EZpUPmfTMiwdDAPkmwk59ZiMjXycfzQszvRRubGwRM64EfycnRvg1XRUXD4vbbot759YCqWVXcZWH9F6Ej2C",
  "key18": "51NZMGDJt26w5BLuYNkFX97R1KW5rGcXvk6hjtXxhMKFps34AHvS2oPS5MVv2NADBPaJta2Db4GaFkiYftUknQ7o",
  "key19": "53o9mmUwDt4oahQwkhp1rqWde2AD75yCQeafDRHQFdYf4ToZGeK1bQSkKoWTJ6GcTg6URoFErTcSTRzSv73B3mew",
  "key20": "3BUFqJDx8hpNQ5DPP478espjokH6Uzo7T6ywnYxuRQeqVZzPtCyKzcfESNZT66DKYUMPEzjALGxf54dsiktufjz7",
  "key21": "4tm72YsQHvnEkwkR53dtfbZ6kizf15pCqRSNDmkhtEYh7tRo15uxBwxCLozyuyf3vQPQPJofAXaJ1s5GfnhGuy7",
  "key22": "4veuY8geNiYELMrc12PmHHBGj3H77kVqZEioWkuyrvJjV56gNtmcFrmjreJG2m7Kj78Leawm9XhcVW9bpqHFvQzi",
  "key23": "4zufHBjJD9AjWkNDZNzEnqbqD12xpEtCAkyU8LGyyV2RybUTk4it49LitAd8c7xWfKxx3Jxq9ZkQvpw4gVFuU1m",
  "key24": "i9krsrw1FcCfcZQi5mHUede7upeWsFdPrHetxEebHQ5wUfGUt7iXKApFC4226QUht4E8RUjz6G2jjoipj92TUH6",
  "key25": "2cg6GyvuvzXpQ6ZLBfSe2qZ75ZTpXFe1ozXxvLMbzdFgJoMyjrNw9AN6kPLZhtVBDHNb3VX17JfUca6bJvMY28Bi",
  "key26": "219cXoALkS1zB7fNuLDZAPHfTupS4hdBckc6FNdGCc9Z328oogAecLe1TVh3mC9m8TNTvfmLXwaQDntSL1zb2Uec"
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
