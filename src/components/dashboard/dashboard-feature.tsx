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
    "5AiD9H33weia5zTXRDRRfeLF8BPewKHVu2641UAvHdVbxP4Ci3TuUmCvd8SiULYthE22TxRmaCsXpTXKnoZgQ8oZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EJymZL9EurrAdPmhuSZVCs8vMcCuNVqZbUH6DE229rXfMFMcoxENmn2FsFoctsEpcw9KQyZwKSg2ckwEpDBP8rf",
  "key1": "3bmzLDEqLGCWr6Ag21E5PGmqAr8QVjn8Zvw8H37L6i2M4fy9RvSS8NzHzwPAMs6eZHAaSEcfAtTSWKeuLea9Mdqa",
  "key2": "axBYNnMyc8kEznVryB3EFiNjV9YATSJFaq1zXM8KgxUhxHrHs92usyT82sZCKC8VwL4sLUUWiRKKNbS3C8XFWkC",
  "key3": "3aazsxM2EfSwZXMRGVAjGj9upzXeWhEM5V5LvcsycarV2mYTQgEL7QU8jUMk5TA92QBfdDsYQxTefXM3Unae5UVV",
  "key4": "2RsawexRuamJgas7xFvSEEn4zKaRByWXM382oH6d86URytPPpWJPffVwb4fJniyzEPaWbZp3XgFcDZXBWYQEdurs",
  "key5": "4XnnGUWNtnuUqb7pAxmAJWxSHsTc9X5ab8ukcGNi2mCBzhwfMMXnv4UDbvWHUEKjUhsMsJrH87wsYY7DAcNbjPa6",
  "key6": "2w54gpvtdscdSQnZPyghoBin5JfLv7ij93tGqxpbcTnqa7JeF6uG6CvdEgSFsPEKBWxcGQLJcYGmUZcQhStXgGde",
  "key7": "MFXVerua6eZBKZkHuZttZyksPUYmPLR2yV1ksFzzTeeRAJWjbj61pJZkW2LrYNpy4rXoQ7C7XvaPys3DTBjAs2o",
  "key8": "3aEG6dmu6HRWDzJMY2qV4PD9hgJhEdhguvnphJSC7sgytTmJq8z9w3GuCtXfbAXUqPLmjFnepExWnB855RwjYRze",
  "key9": "3YjV2UMekHfzjZEE18Bat586qAcimj6wJ2W63oRpVfzFAS8pEzBSA3UsP7UsMyjndC1E5z1Nd15iQWb4QgS2ayiJ",
  "key10": "5Grjam9EkvBETThQJiYT9GciNESxKwS5mNjtPAwRmRnbty1xMeJkFjgWevfBxbiFUainJTaroF43UV5F6McNzjHd",
  "key11": "thCQaygPBSEDgiBLVr1F77JHd9nmiDDLSSZ8FXkwVmy73iz4eREqJUrA1iXeXSTkS3BxR3VVveQ6bnxSHxJ3a7W",
  "key12": "2bRNvhjzsLBeaXTrn4JFZC3dycVA5jNQQCiLxqJCjCSdw4UpAayfry3c6YdGvFvHB9BTvHHgrmLy2NyqquCTCzVa",
  "key13": "Yrc645sBG6QH3weMpmh4YifauWYvguHiSZRLQi8hAUAX2JopU3KxjUQQ5pQSZhepHjiMyNnUbWfP7AQZEDb5DLW",
  "key14": "2XAgMfbGX2HvCouBBx2hsYngaiNEaR4ULF4uoVMbdmUzdKezVY4iovMLdG8Lo27oxqhagcKt2f4T8YHKmPefBh4i",
  "key15": "2aUmG9MuYJKy6hp27RY1VKuD8qWxgvNQDmGJcunDTQ3bsmXiytvZHPQhXKEdCSQ2Hig2Wkc8aDv2rJHuy48YE3HN",
  "key16": "4dyZPWe7TLXHwNwdeg6e7VJhoqw8kWCaZhVpHZdGrQn7mp6iHEjgLSrs5H7K8pZqKHkdbX7kMLkBiQQJwRkToV4s",
  "key17": "4LjJ7K45TWNUgD413SxqcTGwzefDrE1qKNxDtehaQaJCmtLBMXZ37PTmh2txT7xrezWjhg1SLMjRAp7sGf5md6Uv",
  "key18": "4Kf8dXJKsjGaqB8M26wVg5ZaLRAgEwq9NZRMBNwfSMsMWdYvdkYhoW7hq4PGKh8ARX33v9DB76v4Tjsxf1aXMVuf",
  "key19": "3ZsWC4c7ffHgCjZPWaUhCXtmnFhJKFPsTFecDARmPqcZGd3GXVwiosnPjTsVY1U8QkJrup6iQWfZHS5MxyGm6C1N",
  "key20": "5hUNwVZcPU7nRoiW29sxV4k8GL993Fj48P7RV4zbJ5bhNZavzS8dDWrvxmawR9apWV5zSHNw9AyUj8XebkL6thGh",
  "key21": "2fvrkxKVKLbZXpdhAzo1pyvP23xgKrBSPdLk8hYhsLN58fH5dEQwsaCTBpVGM5REQHgHwCyXKZPajxnUuErtisht",
  "key22": "4uymZrsR8Y65JEu2E8DnpieayvqLhKHwpVQLueYMcx1TFEva1joFsZC37jiRN8TKoZ4YzeShAPtN1gjBhfV7QNrj",
  "key23": "4kiUMfDEqqT8AmkHnMR8TuL1Ukf8tb3hLMwV9HtgqM65xx9bJydmgcZPhXKugaTffQoxj5CWQj18Snfd1jc2W5ZW",
  "key24": "5L6MRC2E3EkYiwMebg9XW3Gig4RYgKyZ9VExi1Ajjdg6Ao3itBDXG6gaLLpQUhikmdwM8BrhbyE2tx1inaRqux94",
  "key25": "2j3wXQQhySdU5G37uf8nwErUUoj17AuyU6cybskatopzLLzGniSdPBb3Va6Kh8s3GdZBxXNCGcquyiNdpJJ7EXVC",
  "key26": "31duotZftSSgXLdZ8R4oAbBezNWMDrGg6uiuvYyvnZ8EyKg64FxFcv7Vbx3PPJvc7ahApTs7YPjEyi8Q5fGAHZ96",
  "key27": "2W6u9q5fZq1koB2vuzz7odE5bCWo9jkCB2z68JQJyaFGYrDJ1iWnQUrEshBYjMDyPLb5eGHGgU3zo1JG8t4xuvmZ",
  "key28": "4j81AEX4YVoD216iGVET66AQTCp9h9w2y15QxoGJ6MCbiuLUSbpDuXHSWjcZESbNt1MghCrFmWJWBWGaVjoTcC6D",
  "key29": "5F58zw2cR8zqCT6T3X95neRKRYR7qhABeMocXNZYiiHgCzb7rVX6UNEgbsZY5KfoE22aHcByP4gtTB9kB1nnaT1H",
  "key30": "37FWLy84DDksrUSSsLMr1nWSrKkqvGRhmFRJXryUUsUv77mog8TBWrKrUX1xgqY6ghJz3iLjGjYHHMi9dFEXtxBd",
  "key31": "3SDPHhEGCbqDagbZeY6qSPQuMEumxcQVT39S6wEyM4KtZsZU3wjBVRazaxtF8N977Mx3qHVcuD7kyaBn8B3fSAkG",
  "key32": "4xKe5DfoFn6Nawdn32BTUUe3Ek551AsGfLCDdLZHnFVBokMdhH5ftTA1xaWiGaRsaHtWAXjMoeZVfbDP5zCRDSE7",
  "key33": "61qdhXdqWiJ5riFsmXuW6FNTUq9CLqB8VLBgxUksz4DTwDNJfw2oEz1zwataUrikqZxYncHxPKyv9vjSa9Ke5BGm",
  "key34": "2oxgCunz8tQJ4jHASvzm5xsivoam6EN1Q7MAuywGfJ4DChN5MdVgDHSMPBNK9HJthWNmhictV72NkEHds7PoCBkq",
  "key35": "66k1bPoj76W3guRr7Fyq6YR6wdUQ6RyhrGpfQR2UmdsFYqFjyLYfXByU4DcdfhP3cpaMJt4m54jipMXXV9JNEq4F",
  "key36": "3z8oPVL8WVrvC2w8q74ybQs9j1f6uNcHxCNsAGc99FLyfN2BRrZ4qEuTZfFXnd9zfosZXnrJUfRajhNV5dhbFzka",
  "key37": "49N7JLwt1X5uiAeMVpK7ZXNBCHkgCaPJKEPigDAP25eNu8Sqtig84yY7fsFPxb5U6WeQHfHU8UrwM8rUUEAGjBcM",
  "key38": "5DBrb6BYi37ZSqR3jbNn7PVsYJRsLA32nSpSNe3VqGVVPwNqkim8Smf3TdkqgDTtcVC2o5938CCKDN3rPFADHocs",
  "key39": "2LHsTMoyS1CXtucWV6MK58BwzrAAJzHR7TQPo4hrrWBJGj9CgxEMDG4YfT35PA2upH2DkPUYiRCrZGibZPPPNFhx",
  "key40": "2mpyBh5RpZpcVXokNU9VRWj4yZ3LXYZwxJqRfWPbGymZNZxuvaCT3dVWjyEkAb3u7BCZRKCA9Jdhwzkbbcg646dv",
  "key41": "5nfUXBJaJgQiE7NSQr6EMr4vm6kAAu9GGib32Wrdh7MSuEYvAtyd7BJj9J7bVxteQ5zWMa6ZDFy9ieBuXrvTN1pY",
  "key42": "2HQMaJMA3GQg6tcwh2xAm2r2pRAUUyFhJnmoVLJrqD1hFkZS3GhmkC8Wc81PKi2TwTB363yhveNbd34s21qyFMBi",
  "key43": "3mYEV4Ria7HTs2StwjynrEZPqx8krptsJhJWUZ1BCFfcWo3fpyjgLfUPk4dWVYKrZRQoPRqqs2CuVMfQFdprsysv",
  "key44": "gfunh6ADT8jFG6PmqG6RjetSH3LBfwmeKzhcZEndzrCjwo7WdMYDsJ3fYWp7M3LBFfQc1SAgsEhXXT3Mx3QKaU4",
  "key45": "4pVqeaatYNuF4YX4WQXzPZGy1sqjs2Eo6h7t2oW9u1kW2dohtAJFK2WbroBCX26fvGPUgcrXG8SkXPzn5VjCQkAD",
  "key46": "3YKRNKEoWZpANHHMWrXzQmJMiWzNPPnKiXWqyB2CsXNwVbdaf4MK2eoqD2asFM6PFetGfbe9QcNRoYhyguZJ3q5N",
  "key47": "5oze6kS44VoisPXxw2YsXb1K9JMiUH3D4f4iGHgHxKpSYhuSPw3WWuZrmMr8Zj6SUY1btHcVJXSttksCCyS9xz5R",
  "key48": "3zWniMKKCa4FRh3XJYUQhLtsYajFZP14CesmeRts9pJ7Ar3uEwEw4HKS7QQzq4zNcxVuKvUwBiyziZXnaWcTm3Y5",
  "key49": "2JWyQEBsHMWVHGkU5nwpz1Ts1o7nBaTpBvQ75gbmfvmcucYtrtXqAuxH2GQ7iuGXwkhzpkK1vQvmjpMPcrD6uXac"
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
