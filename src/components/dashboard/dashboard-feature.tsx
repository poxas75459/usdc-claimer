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
    "2EUvwVFxnQdH8c5PKbzMJojp5bYKhqvancCjkLNs4LjDRvo9USgRY1KND1dzVT6BVbhCdA4Wkk49bBwYuAkmDeBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t6GYr4adD2AVPeviCGqRChTjLAivWX2FcceKEXfpHmeparqzkdJq2kW5QfiXzDxJ3QSjrAcEZqvt1S1R9QYNv1n",
  "key1": "2CwdJaGVsmQSpYLKAcnCsjt5y5CBFEkhqHf1zoyy3X6Db1Z4aNmFpfxbCMkqKTPX3L4Z5vBLSXg3vYEb26juLU4e",
  "key2": "5Td2wrvrLhxQaZxVt75DFGQ2qGDiWFgNq66eNro9n91yf9aNgboqctYx9vn7eVnGSZS5jC8b3wbtJYh3XmixKsDP",
  "key3": "5Py4HLRanneNo47RFqy9w2mK5xT4rUJ38i6i78e5jqTn41uzH97X9Cmcb9Zhs71XCNvMbitARKMi8Z7QQNAfmBcT",
  "key4": "46mYLDv9gxCSjGpz3aZmR5HoDxwaLM6nurMpxsWavfzSyosm72ZvM1yzcVjkuhX8wVTWfFTSFrvJesfmbtddPjsN",
  "key5": "m3QAdeSotxa1qCV1ZmeTv2oDUaY44Di7Nkj3ANvWXrTxE5K9pikgGkj5apGHrq16vGvGe7hZVo8BdnuN4XZLH9y",
  "key6": "3g4GD5AT2Mpm2byK65GrHbkXJV7pxT3Q9tmqfaSsRmZqeQeDPwdXpK1tmjJehQNU9J13wE18Nwmi1oUt8x5wdLa7",
  "key7": "4WUVP2hPMXcLMW3tqSnYw7cmL51SSfPTeWjLXR5xVPfLDMRqbfgQUn4JyPWKKPpUx2FXBZYpJR6t5iqpm9Jwt4Xn",
  "key8": "3pHwswWGerLW4zgwj4H4HpZfbsHSWi7LVb2opEBhKWWZmok6HavnKRVM3411UC3WYMx8LhEDnKfpKNWjmAqYptJy",
  "key9": "28HsSFTkbtZFVWo6QjHLD5UmDb13UUGJBKfKDzDr6gVY43i7RbVofJDruw8w5YFVsqZHTL98PaUpo2yP6zUJKkdx",
  "key10": "28Y2GryKyCTmC36Zdqv57GjwpA7UAFNDcHS8wdhjgb5XZ9h21BQxggRpok6SH6gguYDJMjmz4f4s7NR8aoeV4XA9",
  "key11": "38ffVDifNz8yeFs2TsUFyBVsNHgfTJ7k5ZtqTYYggWoYfuY9jV2GKQFKZoyrJxfGTRPBPNTv4Mfv7XoqhQH4E7Q5",
  "key12": "gpyV3wCS5cyrLoNZFero6mF9r3SSNx5VhXuWvNvzRBLasWo3FfeGref893a3pqeS6xkM3UBH6njTJzMn62nqgTw",
  "key13": "5v7B27N4WVcQVRNXjMzGZMWQDjeBKwexSTmJRV7LchHmzaVLgvF2Z4mdfBSG3UdY6aLs7vEaEd6Vw7sH8JE5BUe6",
  "key14": "WPrw1HUAcTBPfetaGSb3GqFUPiE1z1K5LK2SRUUtRdTxdvtqVNnki3TaUX8ycUkxHpZG4m9cWXkkmQs3vdLPdqc",
  "key15": "66NuWJzJfPqzWcVBcsPe8TzhMJzKqYn5PbHjVswNMopCje1nakfVbQikpPd29BeTi6hWLrMKpwbLX3FMzfyUAXPz",
  "key16": "37w38UvXFFiMbrJ9YvZcdFthnH4mawGuZjm9eedD7HS7PuGddpeicfYHxvUZhNz1kyyvGmJB3RUv9mutTdN546rX",
  "key17": "5gMK2VzwYEnSaPRKPzdzTkzEQ762H9kn4DLJx3nqdK3Cxh6s9zQm1kHhij226J3dn1B85du2ZWYmmDQktoqVusSD",
  "key18": "5BcJWindGmD6HzSVRTDt8aZQicXdzjvspSnUAmxjxzXaiLPJj2zC6SUwNDEENwEcvfoUiWXuU2CoG9SABubAqLfS",
  "key19": "496QwuJwBiKWPk5vmNQ9VyFQ6bi2E9aBDzF7fxV3jfS2aMVzDV1Fou2NEQT815e1eQCgdwkSS1xenP5jC161e2jf",
  "key20": "3MnfXpUhXcaQU7nEi4pxsX6qnW87mpULLdSGyEdM2wcXedZwuRsmFs2f44aSg1nh3mFGy1ztt2Dw4MfRCqtidyUe",
  "key21": "2vYTdFZAj2N9fuNavRvnfUQVEpmH1QbU2HAEcgX2qGDoaK9jqSP5a9PqsLWgjWKEzncEoNgqqhraDwf9sMhjQxqo",
  "key22": "2YY7HFbpWcoVuefwzh55NSf3WYZ22b3RZRtq4XufHYhAhgbn4UKgYCiLGsFkZaa4cTrs8YSn3y6ZytrC9cvMcDyw",
  "key23": "5ukvLDvYn3dooSmmEC8DBFbbaMeajvJdhDnQnz2c39zeFUNFzed1oNmTH2cPPqi18VepJjZ54dGBnaAxgWebVyyc",
  "key24": "EUM2759h9Th9FFaPQuWJTdbtHirJX5ffxYyAk2USfLyrJZWmLmUaZUyfEeCu9DoXUn2nfQHcvxdMo4X7pzUogEM",
  "key25": "LaKow7CzRjEsGW31Hqi6YSjT2kydx1Dv5c3yu22u4ALekV7WfYNDjzfb8VQRZSRNNuRV2VCEUBB72QbJH7suJxS",
  "key26": "WxQzifNNM5K3Pr3DeWjHTqvJviv49nn44s8XmXRF1gwR8EutBoh4PbgfbHR6U5fuadw4puyyAehNkqwWoET24Sj",
  "key27": "UWMajk59qAdeg7HqqV8DUXnYw1huxgGehTwU5sL63yrBv391sxQC39ML8GKaYGdTefcMzDbohNc3jU4LK51Fppt",
  "key28": "3FBRExWe69K5g3mhQYjrXyTwVDkmhCRA78m1xZu1nHWp34N9TyoUbYEcmour2Jha2A3Fa5esUssFAjKQpgnJNh1D",
  "key29": "kQiHcnr6NpUWe2U8APgPun1ConJ8cY855Pp8LDCd3Mpn8zjYY2N32Pppj6yqAoQViZhAoUcu6nnX7RoUo72TTRv",
  "key30": "3uCks1Mk1ogS1uXhXu4n8YaJgtufupgcesZbqq99Bwh36urrQQg6tExLEFUMhqeeQ55v8iWQBTYmtDm5LeLWYnVb",
  "key31": "25vR5inJqRhBww5QMSQqHKM447Gho18dJqCwNDwzJtTqVYpX7PADw8k2BAPtfktKYTr7cziuMMNN4wyEXdejJn46",
  "key32": "2cx7WSF9JsdgvGXkp9XKu2kdLACy4GRDwoLbHAWc8ohpmgVt3LunuPSntDHY6nAxbWwC15bwoC9QW5Gz3Jkrj7a1",
  "key33": "2pWmGBAfMMyph4SLynjBafbnfCMQ5ZeK9WFZEAof9PPFnmfPEkqvSyxZCXnc7NdNDKQ51nf3v8VHZnpWjTfaEJt1",
  "key34": "TyYveSoV6R29AazzgizT92p8Veigs7u4Sjj19heyUPNTttQnAqjuu9kU3V138mSfu6z1Bdx8dEbMvYt4wikgoHG",
  "key35": "5eindiFiRUe2nPundMdrJ3Lboq4ZP4h9fsDHZUm2T2BTsCDtwwxVJ8XqbLqojNYXrE5N4Wd1PTG8UXLkDMheSAbr",
  "key36": "5A4P5DL9cLuiPL4JgnLgw12xCApg8JUr4ZvbCmCrCpzhJiftLtJBfCtMF23wwjBnoNpWwDpGWqPYUcJgTPyzmwUX",
  "key37": "62Ajv2sYcqiEJWVx7Us47SgyWLgHy9joWnfVw9FXD4m9A5UJ5oS5gMbCDmSpsX8xmjPNUwd34A4Zv4Tfk9B16wB6",
  "key38": "5uNb4HsWmpY1Sa82EuAwiQPqD4XyCqUUTYYEsYNHasqkp1aHRHYif7U3vkPTZTpq9zPHB2AmawaHKrWj8hea7oMc",
  "key39": "hTvmwXZgSTrXdV3eDBDbVnezQG8cs1darWYnmoWYRogS3L1GMiBMbxjQtSppqQX2DHdALCXSHJqDdxLFnNmcSv3",
  "key40": "5xQDUwTpxLHgYGeLx57mDqeMUBRuxAucQqXKvghf4TWSYwTXxp8UzEiwhT3D6jDSQ8Gz36r3Mdg9Byg8cbdthzks",
  "key41": "22j1hjb8RLEXQ9xTgsWW2UwKA9ENM4r9Q2vNdbYK5CDuJt6jA283MYyzfv2ftM14b1Dh3gchsHtBzsb26JgvhJEJ",
  "key42": "5E2gKSRePFzRpcZrhafF6dAJRfqmvDbpkL9iaiQVuuDmiyyssZfUTyGggTbTykiUCu2GXyg8eYyfBwYmxZjh3njj",
  "key43": "5f3dgrnX8wNuVHcYMAtSCq5BjQ2v3kXYxurMgKxVWBRafLRagSEDsg1savKdyFZc2XAe5uS3CrR4SEFBCf3Lphzq",
  "key44": "3mSqF2B63zdkP2ZeS7X4Pxkedf2Muvwypv6jXX9VRw5LSyVcXFWGZtJugVqmtBM5jpEsJzqVMRnvoY7sL5pCuMbZ",
  "key45": "4weaCeHNS3Pg1Dwn5x3WZLJiWDQSvdd8D5CDRbHf9N9f6oxa44eHVKbH8b2oJvU1VzoyE4iKWGfZKnciTof2SFPt",
  "key46": "eS6oK2qH8saqvGPb1unFrTys94zPkHs4CdFBrZXi8oQng1HEskyuaJCgJGEMN49BrriMagjqsnBeTg4qii6EkjA"
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
