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
    "25ZnrwTTsL68XqCaBxBiDJZ8TzJ3Y9x95ViYUiJsL631gausDrTzDtcwU6bz7GAW2NDG6GT67m4xVBcSWsFJh9SR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u63FtoS26Jig5dNcdfLAdJhGtPQifaFEkZFwJu5RgfnMcKXuhZ1iGma1kQBAuJRsSbgHJyetqsouwS8GwWVP3U8",
  "key1": "2gsut9aYaCCgEUxuLBChjHvJPKSvtJ5CuFjQaUaNx2H57xczAvo74VLFaAZcZcVgFhhKPY94dQw4veeUEJxkAKkL",
  "key2": "QUpf9c5JCqKnevXmehmmrc8GHiEn1BhGiLWgTbFb7QpTezSszTMnu99b6ZcqJQxKkTfuWwwpeRzcn11d6TkDzRv",
  "key3": "3FqCzsYk5JJ7MB97KxjXe6RnLBW6wVH9q38rPeRFoeAGpX1xdb1xc7YvoCUd7Vqs4AdeLHaKdXZTFQrYkHeJ8R3p",
  "key4": "2tSLMVxHXUTRa8ioVzFrg9SDEfLiJSUkisYxfU1i69g8psdJkqTSMMzuFWk4hcQF3bRPWspHuXzrogdmFDQ43vPN",
  "key5": "kkB8bzmaP8FAmrXX2XuguCC57phciEmpQ82gU9YR4Efti2e7in3dvF6gqSGonyzinJujMb5H3GJj5tkXreyS8ze",
  "key6": "5fTmxhkVmAKCBcZ8W3baApQLNgsFMovbpg6RT4vRVoRrya8yjdGucsGwCDMmMPhbRbhfq3ZFX7MrFHA9YW7TU1AW",
  "key7": "3jZBwAF7GwFSqR4bVaBaUrit4zqwdvCgmuecWC7U8RoJ5oBxCSW5rDBN1DC6PR8Fwo1pUsT6jar8nQzJgPKJp9Xv",
  "key8": "3D2uD8uE7h95SJvK5QVHv34CmXELeRxZ4yyidzWEFSwgZ5f2HPUoy5y4HA63XPj3f878zNNg4vh28MN6X2D8jhwn",
  "key9": "3sbYCGJ4D5ydg6HJsDDLQfxziWLmPap72wcYi48diARPPkzHZpotvBhExPiW2qqTv2RtqMA9tXL7m5uiU6ucb2uR",
  "key10": "4FY62pkS8scT36xzMwQYehkcdfHv94Lm6LrG6RZEotcHutZ8v5is6Le31urdhmquLsxtqjamnMUiStuYJmXdwEbH",
  "key11": "26rLJVsezdEF2V81CyuHBo5gXUm8GaPs52YjejG9X6YzQDm5YnmVunMgEuBQtHHYdxHakCXjbRF4dxj2pCEw3Y8Z",
  "key12": "57yna54wBsdeCnyggzBL3rjxeaBzj3A4hkH3xX6xQrr2Miqo1vVXCLVwaEF9qeryJDRsxoFfuXpsxn7JCKAJcMWC",
  "key13": "dfkXr1rmEdfGEqtU7SNTVCgGYVNUjWqxd9djsNpP3MHLQUxPSQriBNTbsSmboPFKMqu3cbT4NPmwZAnaSzjJCzp",
  "key14": "3PvAJfikxL1gc1Wroa2yZveZpjFfjst9SBtaut3Doqjnbe1FCYPegpL74G2R8WaZxr29xhE5XFVEodrSQsGai3bq",
  "key15": "4NNHnMk2a3qERYCfp6wmnmc9ydULVxrDm1tEbSRmfUq23sDrwN6T6zHkjaLd29WnZJwrdSMLPPmJC2tATgwCjgK6",
  "key16": "2p67mN8X81jMawWneVtiUt5HVjePgi4MTywkfjh2f95V7yg14s25Sm446ieN7CLY8jJfT133tVG5cwJTzQXKpMRV",
  "key17": "4TGuC4zWVN5XtU8kiNTet1WJD1nzmtK5rAvGvDPxA6b7sc2sriu8YtPZ2rafeZYJ1c2V6WPehzszGzNeeAdzoPG6",
  "key18": "4RaXLuoEmQku3d5yFEwuC94LtQEYT9PDo9EKk5BWfxWtEa8jbazNcBwWmt8FrQpX1bp5JoBjpszhyQpP6c1HXhn5",
  "key19": "8tcK9him88bYn9JFzWULBbrkCccJMG39D4Af8Cg1y1kMECNdsPSUhLBaz27g7nnZWP9n7eqVLeeK6VmLcfEH6M1",
  "key20": "T7j4ZjSp3NLgn2gBvCdQLZWduhqFD8i6U68Yn7RELKTSry43cBbRuyQPuHLKHLNdfj46kFrQnDgUM1TckQKWf8q",
  "key21": "56WuakpyJREwUF5PHtHJgxjdTYpxYnRGjcJNqYr8dqVmceTi8nkoq8D9GNrjM5uLXEGEmS7ntMMMrmmmwgag3zFi",
  "key22": "4LVHM7m32rLw5PA6L7agHnHfMayHMC6kVCzLfAKvQ7e4CUtw1XVDQAbUr8PbRZophCki7d3r1XD52ecELE1b5Bju",
  "key23": "2yyCZmmpfUC5KganJBSqaSqXj6Gxt8JMHdAXhyDtTxsCNJNEBy1CKVBqc6LQthQ8KgixrcFLEYmzipUkp8GnDuLN",
  "key24": "3opCPH2eUDmULVTKUPuRvuQkEd5vZqsfrGp8xzcrX4esQUihNpuQodG3r44Wx1SuEUbSxwayhnZciEQpeWjJbtk1",
  "key25": "2fJ14cwegFsziDGuiDjM9jMX9vEf6ZiFHfjf2KBmJNNjNmkJ3gcsEtybTKfH4aAtxFhHC3QN6ReErbjJATqdumbM",
  "key26": "3nxDZpnejwGG6LGt8btR3cV42R4Siocj2iYAnyPBKnKaqFw1JdJya2obctYh82J9MmhWV5K4AVPHiLrjKtQqP2gh",
  "key27": "5PXkWzHpgX59jhKjTcNFb9FU7gDEmaRrEDNJrTVsCye3n8S8Crc1LmrRczjU1BcKB4M4Wxj5W5PrnofuB4DRN4Gt",
  "key28": "35JJWnTFMzuek92sm5UeH6ZRcZF1cauT4Ds61EAVGVpmvBoNw7Zfo21VKqrdSYMmx7UuiWSfAssLSbhDphkEFg6i",
  "key29": "j1PYZGZWtREryvGZLavDNG69fCwQw9XjPinPN6JjZ7mxsiGg1iqPhL1QAS9JUAvFHkTYBgDpqx88e6Ge6MEN6YW",
  "key30": "3fxVn3paYgiEYBL8A8zwsTZJvLf8Csc1bZfox8hyQL37BX2Te5hCoY2n4njKc4u4Z7b8gbkyAQncsmfwe1ci16q9",
  "key31": "4Aatb4GAMSg5C1HCDQVw8PJPVXjEJt6q3vPgrVyeX4u3U5kY3NZZFA5VE6gHngqr3yN1DczwHdTYWwthCD8qbzxk",
  "key32": "2e8vhQTvZ15S7zoSAbgqGxjdLYn88n4nMjrHCAEkq9FLRHAFqR2pqattRSFnzP7bXyeGcgXngbM8QXcqBWdjadW5",
  "key33": "3ATpKc4wQdBx7YaAUfWQTXYcWTCpxo3gDv6PVLgcBWgpV6SSVzAYyzj2aHnDMgzyVBY9QfqiwzPRskxqEkZwS3Vz",
  "key34": "3816eUdaow7tuMSF85S315mLizjRwf9EeKHMc1PyPFTRGjcawJcy64wDvALGwfdQD91Cm8ZkgMK5RZV1tP6tCcCQ",
  "key35": "3nYuh3je3Ww14wwwBphiv6BWp5S55bpDJAWU33y9YDp2apJMG59JjshSYD3qSKbR8gybgvXqsGzRE9dHbq6b5RHp",
  "key36": "3kSCNotPFAJkmBfoaJjfbFM4SNLLQCKRG9t9T19G1UvXLfFtcQcd6nuuEiHjm6yCDQZ7AUERnMVRmvNpS1r2LgLY",
  "key37": "55j821zi4L2BCXLcoi94F2i9YZEHiUmBoWS4ACN3z4cgjSuegBRwPXYnJJ7bCjE3bfd32UAhGnxm2rPkoXfn8V45",
  "key38": "HzLTMQdvxUVMN2qvJvFyZvwMqYADK8Y5PBumb5X5XsTFoJoKzoagsUbUtJr8asK3nHqC6NidVRkRAde4LRx5Sqz",
  "key39": "tfwKt8s9t5dtPN83a8RQCeojwg9BMcqL4vHui3QSzLZuPfAbgeK3WedL9aTWVT2jC6uXFVXykaSxfyuxBBDg1k3",
  "key40": "2VtTY9qwxGbE8qHVP6nsY8zR9tLSLcUiwxpCgLwEUJkGTYR8bAXyKim8jJA7omt31eENv3ELc932X6pVY6w7ZJrg",
  "key41": "kxecMhKCG2fBHepUX3UVE1j87aZMgJFzfYr4McqZtJRPWfmkHK6knhRjmefdYTT7NAhfHpfF2ExF5Gg3Dr6ECk1",
  "key42": "4r16XeJEN9tkWJjgFqBVVCso55xB8BGiFVDSh2QUcQBq5KnNZGSUY5PsJ2UqV3JPu8x2DxUN7thD7UNquJgRxBfZ",
  "key43": "2EBaHLJ23SsC6crMaFw1GgVvpUTaLM2Yv14v68GTy3imyABsTkXSD2cVDnA58UKWxUyPYHjaZHXR3MMDGoLfxvUd",
  "key44": "oPSGqmKeCnbjhurd6jAMn7JCFEpEMfziLj9fiX9uy3gZE94VrQk3Li67ZvEiBuHeAqTy83QTdC5Z5gsoZTiCdpM",
  "key45": "2rZ2gndTnqQpzTdLJz5Bs42VisfQkvoxqGuk7v8vWpsk4biqQSSVKoGzsuC9CYPLi8cTRDeG4utow8WtCJ6ejewc",
  "key46": "TFjbaGakqZ9ZsckCu98viJNoCAAmmevuWrnt7nknxSSkAsXsqVuFDZxnAGj8tSvRkRDJJrQv37g3gDsBFtadMUx",
  "key47": "5A6qaD9RoYRdi69E8sJeCdSj5QBxDEywVT1ht6UPdK9qxT9wQvVyndn9AZGK3syNUSUnHeHkqxgW935rWJhkgUxr"
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
