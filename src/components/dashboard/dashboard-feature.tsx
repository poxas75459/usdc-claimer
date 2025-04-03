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
    "45oFscb3nMMWRYj67cKtyHfHafQ9uEqHbo5x5sMwh5h7j3R5J5nsrL6AWJdouk3bQ5iBxUp5VGyd3wYRFc5fdpNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2apQeseeWDgLqQdEBv78Ft1965pa9cq8UDTihWdzWZEcj28ebQ6rwb2qbUQPaeVkP8FWDbYnTQwgnwd3pvw34nk7",
  "key1": "i7uJAJ4ByG9uG3gRz72YGugY3dNAJTE7GDWuQycPfPnPS7GqBq9pW6n4DF6agYaJHUFkLFfvTvDJuG6eZyokRN8",
  "key2": "4rYpsbBvpE9u7Gqb82TyaLzYk2E16mqrGXYtG19ZL7murWLhbdngK5sRRuMuEK7qZojuv42a2KxtuacCzy3M7jJN",
  "key3": "PQwRPU1zYPZnr44FguTYjcuctbVQT86eyZu2H7cppb9piWRZ3cg7hF6wixVcr9q6DgcyXZC3pW1i4cfrPeC86rd",
  "key4": "2WfJhSU21qiAPHVfj9rFYpnivY1HmPM8TvSQhpHfjeMEMHBuntRULoRXSoX8gfGFR6V6xX1k2pbC2itdnUMKkC9K",
  "key5": "3yLScTxiFGMeX3KbUWJChht6BejYzLr2rSXe9ZbmCArFWJdmugAYY8iQq3Gm9khVLqxABmcUVQVaGbS2kTDDHgFv",
  "key6": "BVX2M74qmPDRrbrYyszeiusTg9b4SwSVocHq7XPZo8Gv9z8fvwLa5EnDbXJsxSv8tNmodPM4EcZkW4hMrPVi9Yh",
  "key7": "5STMWEA4vTjMNSY4mPKG8b7SVT7A9WuSoc3ijQnoTrkA9F6hJraZYMMFui7KFV2xjEcqDLxBMrYGwtJqZhqjm3db",
  "key8": "3JqgodyxihvjbkdKwCeXB5hRWySMp9g7MLTUjT18XP87ZFj1SxUme5BzRRXaDnC3bLVHgSuTByyGn7v86JKZmmKa",
  "key9": "3FDPdi1hzMoucMg68H2aZuFHshsjfJXFqqywoLbZvAT21LTd4N8nBp9xK44LbA5mu2wPxHUPCEHMMaS4RF5g1tSS",
  "key10": "j3WDUVTgaz97ie4qxN9LuWf37BC1qtdaMwLsWhCd585xzowBJ5gKD8vZHsbjJn79ims2fxsCyUVQdxABdZSjFib",
  "key11": "5UdJXS2K91VWx5kApBeWvr1YfajFtzjiWyQwaRUvjfGZYa6xkvQXuwEP7R7GZsXmeDna9vy3rdTJwY1sc9DSUdBX",
  "key12": "1ovDr1ewwCFN5XpiVGA1mEo36iFgUWQ9KuyzNpyjdM9oUNKaVoNzjDkSVFE4rqqsSKW9xm2D3c1MugQ56URZUEF",
  "key13": "3RF4aTcdPwAsrQ5RcrSBPegQ4zYGhdimRS8BmQffQaReNwUMs3DuhQXuGfvbm52HLHHj7oySk4VPsGdfWUgecXCg",
  "key14": "41R4VckivYvmt9DDot7VTUXP9jA31Hgrv8MjHDMrw8kh9sNzTyh6gvbzFaomDWsmpwdMuEqttdYCJuXCfqZ4GHut",
  "key15": "5Pxe8UENj5Teu2idai8eCYo7TR71tpft9Usip2i1nK1tYWb9mLR9DDr4bgc9WjW91Qt2yczoTMunMWHHoUyBGFCa",
  "key16": "35Lne1qtY6XqyBi8LmqTJvPma2LUuJ1caopB54dRRKPfHLTDo9pMhDtxFQy2UAQt155wi3H4FN6rg5dymPxRws59",
  "key17": "4QMbyuvFL7LB68y9DvT3i4PTXwfhDiNqYSEyDL3jtDHo5aqY5MQ1iUo86VUSRU7GgtFAYghExLxqnmXLEMxpG34",
  "key18": "vv8iiSUZ1DiksazwiSqRYyGWi441SnQJEB7JPGPsKCzRm14tSr5r47Qox7gxmyfuMWtjiE6qJh9uEgkgtZUpYyB",
  "key19": "3joQPQ8SjdPhQkBWtC3WWEQJRtRyMm9V9UQQzU1Hc9etKQQAMHiY5FvLink5LuPRUJEHTMdjsN7GC1sX4NVZLrHn",
  "key20": "35cWt8LLmZxxNke58eNa52BDXqhUCK3dhxpNihd8cedyFogEfjHSj2F4Ux9vKGjZdsKzRVkVxW4Ad9B9DQWCLszV",
  "key21": "5RXi2LA5Nb9Ggg7se3tqHc7Zvs4fekoqqoScvxo44kcpzMoRfs2TfTmw2Mfs7dXzv6pVKTnuDi1dXLDKD9VRSy1c",
  "key22": "3bHiVEZqn3U1jZJMxYMurnSEvhwN8cZgVAw9pymvM5VscyAzoVGiyL847s8sTX1iAcS2mr2cZmThZgLBJPzjMwwd",
  "key23": "2eG8K92teAp5pezneooYLCMskycDJEWAAfEX3aWNixtm9cGHbaGoTX1Y34Hm6BwXLZzwFijBasYeg8hN3paVjrBg",
  "key24": "4XYPr5u9oNoUG3sEAV6TUkRAxktDLXTRr8sPcLenSqE3PsNa5P8hemAbGmxeb2kXH6zSxxBTQpfmam4af6SNPmcj",
  "key25": "qLdZ7EM9krRVx74jSVtHGPN26bwPCEFbLCvQfrRV68ee4DGhif8qzgukWv2dVhzhVkVD7sShwuo3DmueDVp8hYL",
  "key26": "rTS2v36F8wxi5DxwutjAjitFD5CvEqhw2G8q8fEfZCUMCraASHjgU9MrQx8tbZMMwXzTiA36d4W9E3yJDuCc2pY",
  "key27": "2MUvi4xfsufrb8qnVtc3qyCFUcBRXHEXL8rQb7dqFpB42JHxq94ni1HLCzfka13GxwX7wcwYF2RwXhrTsP8VToDP",
  "key28": "53xVx9EXXhEcASCLdQ1aLWdJihkeQVjR7w9XumTbheadV6VMUWxLZ5g2tkRgEY7y7kNQywtvZTsUDV5aednHd6gF",
  "key29": "43BADcHazEBgochZv3i4Zt8eWuhMAaZMmzWufoaxQhBfm8qw4JGgHYri4coRT2PNXXpGrxjjmsk7esZbZ8uz4hgu",
  "key30": "5ys8SeBdzB1UCeEXLDbVEkZy2xysfoBLHrZsCnC9wUQh9gV7rhqjaz77MExYWDtBtjDXvRFup2QqpFMmb6QJt4nw",
  "key31": "fMwZ4y1WQPNvLRzUgjCoSweWgPwPBATBwYFQfNWwaQQq539Wstge9Ys5kAEzpMHJxeSduFWKXCWC4suhwtB7RhY",
  "key32": "bC31umr7EqHiWUMz9AqgAQzfZnwS3zqY7dMuZsxayf27e6RLfG9w3RuotCSEjrpLhJKo5GCibCbk1hCQJcpqW47",
  "key33": "57jFZhYjb245qkedoxoqGjHwMEAcdGBzDHwqbYAqYxx2BmJodkL8auuW92tRS1Nsf3oEk31gfxgUUC9jmczuHytF",
  "key34": "62cxbuDTTTnXicD59AK6MamUrJdLNNqyQcM1Fco2EdbLA29em2BWwZ7yGgu51EAG6qiJtrfcsTnUANs4MTXGKq53",
  "key35": "2y4zNaah3KB3T3hivECShQvu9jogcGNwVhJW8zWvnrfyGsb7iPdRLNwCc5a152FpuPNykQ6oETiBS3TrqbGcB1w",
  "key36": "5MaiRNRw3jxWawT9SWTxDMf6WGKKp4ybAgWetUqBJNhSJ62XjEJudtABPH3HRV52e9q9eni52MsBPG8F6rPgZT3A",
  "key37": "3upP7fcbT5JTABMFYAWFY8FfBYjTBVkobbrqqrG9U8j6SoBWc9AezC8Dkdfbpg87VgakkMZ733JSXwiPoW2YD54k",
  "key38": "4thhqgafC8mUsMEfeErvQ6YQe1NX5UWC89jJt2iFdrVTb6tEwv2k7aTedD4n7Q4TFHy5B9pRwS5V5CbEbuyDLSiT",
  "key39": "5YmRAPB4RkqNc9PFtnmXYfUy6xpdkonFrGKYTZskCadfYyQhzVN2Pfi1WabEj3EjqYAFN7gPeDf4Ri2BkBGSy6HF",
  "key40": "4dXw7X1C1w5ndA1yG4CbSwcnJ62fPQbnG9LDSDuQnryghkne9WY7M7fb5dY1w3obuLBUTtXiPJRRrjxPY73dHFqf"
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
