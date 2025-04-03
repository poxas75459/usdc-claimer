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
    "ssyeECCX21bBH8eADm3BfaNwzC5oscQGDwxUoQhwCz77KWYXvGCemtgYX2dmjeNpEURRC8kv7ofdPJAuwV65vTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "quaurz1jHaTe4wApiZfMf4LN4afTV8gGtcGdMi2RwNiwetPaM3KjHBYorMtdCaRg4EbFFiH1Rk64nERprbxCZfV",
  "key1": "pUHsuj7MVsJ6CeV5geE6sFchsAnjQnt3v6FPnYWPozGrphjBgbXFfMFc4U6BrGvnivD3fcTiBGLDNioKJJtLWTM",
  "key2": "62xPvJonNzu2kGsqYFHkBUm9LYuW4w4MGbUAKN7tMK1Gv5MjfLdbn9ah7cb8z1gE62BHh7iNoypgxx92K4r1Y19G",
  "key3": "4aF9PnrJ2DCpPSej6ayphsrGZBAFYGxxPgfgirdHoqorAyd1jdnqEc1zU4rb8bTNuix52xEeKTg178QcH9rrt2dg",
  "key4": "3CJZDiwpcHTGMAH5uTfm5dj8ndPE1RnLGwKarEUAnYQvTdgzVDSRSPcTMm5eKDhExQi3mVA4TvQHHhRqWSPfwQbF",
  "key5": "52Lr8FzDg2bziQiaSK1k6771G5aXhf4mbqCWFyDt2xYyjU3FGUD8zEP8o7AP6ihTZAU4Q6jAp3PyoRqjMRCc2rZE",
  "key6": "58LVrnKrk4HAFMQqm8L923FU7ePkSPbnRe332shQrWD9mejeUnbNsHXwKFHgFhmRzrgcuSfmdKb8cTCmFDULMM2V",
  "key7": "4p2LUzg9gfp8GSScPUNYJbdYVDMX4A91wTbiTi9upm3HmKYapGYihveRDCGpUxoWiMaHiEcLhMnJ67vcz9EuZ3UX",
  "key8": "2e2HLZ5FhnaC3nnVrKf7utzdmhL65zJ7JA3WgjkFZjj2AxR5TLT2BygQFVerSYWLLNdLj6VQZKjc94qLRUe5cWzs",
  "key9": "4isVTHqZsVBtTuMuBT8N4bDrK6e32FTC7QUho4ZvgJqejNRLD3hPzJXbDZbSf1gyvA7U1MyQuzvLKDz42HsR3921",
  "key10": "3o5YDuP4HJpynfUi4iiA5zXJC9FwcAQJyKRoQDw5Fe5sbkCTF77qyhHV5bp8cpWjaH8rsa7onn1ob9UFSPQujRH",
  "key11": "21pFnbLnxJgBj1P1wnxd6441gqN21Ehad6rmfA6QQM8RKvv7BF57GbqY4B4k1XfsK3o7qSDJ7Cp27nkVkFxwuXbT",
  "key12": "2zRrCBypBarfc8SqgzaCmH7m7Pgr5vRW3R9vWgT4gRTdipF5LiBfwZnbnAff7RhAzEAq9QccPWnGnqrysH7T5Kn7",
  "key13": "3diczSfTbPYGznXXn56n181q1jgYr7pFChHo8mgpUy7rhBRmfiXkBy2GDKfJRPFikv42ki5eV9KoSH6RrcZSwBDB",
  "key14": "44r8z7cxp72b8f5Abj2TYPFJUBeStsq7c8yFgQ8Cs5EyaDCtDD2RyaJyeeFGjPbpXrvPfTVBtjNFiDshcTDsFLQn",
  "key15": "57WsPyahYdTDiSsf4RfBedSXL1Up4qWPCZccGZfe298dedLZUTvYxgzpwmc2RRw3CgTo7DvEDJJH7PXhpib1zr71",
  "key16": "4FGhgGBPW7R3rQTCbTLK4fXA6HgWJgr7WPf6w4aoooBUVrPWMonaG1yPBCnTsQR6LqF2JitvYVq1can4zhbqrqPB",
  "key17": "4YqMJ51rJp7ofzVp2wh7RDNLhLWBVWBMJy4UnWhpYyTUyVotN7fZdCi1Kjwg8RDptpWedguZLwwdcnLEAAjWYquA",
  "key18": "65gSpaAgeRQuNgfuBFf1pTs683pMFaFZMUotu4vmxerFNtWa4kdFdxwTewCZQxa9RXV9HvfSPgtSjnAYEWM22231",
  "key19": "27coAAuzLdWV7a977Jtj7D5QY4tryePSP7bx5ryYHPQmirHjmTqBySRT351fSkMeZNpfHfwPVK9jZtUzqC5vyX8i",
  "key20": "wE8S1TwYRrPJngoyP8WvhSTRPESygJvr23ivU98vg6BWEfov8AsK1RXMBpaNdPXRsPjr3eLiuenukCTNFCCDpW6",
  "key21": "gfmjRXRftPiYVqhVqYUCxpcdV2uJuZRvtFC5GHmke8fyRB2vivBjt8aE8UXxPbi7U72mCNEmx9H2Xs5HCXF1QQR",
  "key22": "4VjZDfaFGy9g1KNuyMUFvJUWweCbNVJCZLmm4GMiQR7UNSnjFmMuBECsApqaLDmLVcNa8FXf4srArfzjC2Q2f5bo",
  "key23": "2gjgx8Pkxyr2mgTwF8LVn48VtFPTgH86zJjGR3TyvN5MytMx1wsFFUVXF2G4ouvK3QfQKmBjRaHZfXbik4g8CdMS",
  "key24": "49PD3GKjEdFnEvWUrg9LSU3pM5BKZCKyPZRBDCFNyfxYQVSJhxfTaDhZcRHevqD8dRhz6dVCRZmqh3NQF4J84dmW",
  "key25": "5mcNHHqoUDrAzaBydUyuERGSoZ6qPCUDB4AYk8LgDGNmchp9mcnjp5jcsxJFWRwmpPf4wVigHmWtrDMzPJDfsZDH",
  "key26": "46AfHKGPZEeezRg7SX4R1TARy3qb3AVuUebzLopAw49WZnuBe5JGtnnZLth8pqdRakSgNjSBuwcgBJo9WxJHYvPf",
  "key27": "YNqPuqHxczzs1B8TUeTD7Z198D8enqYJfySfoqumm9ZiFKfdBcRF649gqg9QS9DXnfbhdV1pRZpXsJpB6D4Z3ZM",
  "key28": "5oGKyiiq6nCowxHqaWmy82wvJ1bMJXsJouRPxf2BbD5RSkNngN4s87UasmAW3U4afJjBBLr5YrQ8tcBwcaTmZMED",
  "key29": "24U8n9W8bFad3xSKUNeuzJdoRCuB4J1BkorTx4gYmFFdNVBKeVkGwKz3xkQRB5dc24fFR5KfNkFramiuv2NGCmgP",
  "key30": "yvqFVH4yr3RPdtbgaXZbBPDGgei8579nzowRdY37v4CeNUjaWnw2WZbNMz9pKGpQrvVeqfRpD5TthGBWSnm5SLX",
  "key31": "344dEW4WXWcix7vPmSpqvn1K962xGxc88eLWd2tfxHpwPwBQn3gH3jB3kH2xeYLsZbEqGRa5Y1ZrDWdtvwbUAHYm",
  "key32": "RLP6AUitpvogeN2QWuewxgBX6PNN81d766neikAvz8bXshsCKhwVvNBRZir79FrNDXsr9kVBq6yD5dxZFmPHfZT",
  "key33": "hK6fCnmUHKMc4YYmAMGpPBJwaTU4YjdfKQTfeWSPLrBJUL5y5VVa6SpY1o3WowYEDeHie9YqJKVKt9meAjeFE86",
  "key34": "3wuFDWXK1SspGynVjFzMJqVPGTDsi1tR8WJqBCZr2LPA8C1LmhVqFzxAnaiEcAk4N2smF1gkNj9PepkBihhiSp5H",
  "key35": "2C7LBYMCJ2WgtVkyxmvyKuqSALgYXt3ZjRdQCEALydU5tBRiBtfLMcWrm1LRSLim7XVxemAmk7m7knU2F3zGJe6x",
  "key36": "2DF7iQgEAzby36pb1XYrqhJxU6AjFm7LhVw6o1qCkm4i3fp5AHvMco4QXw91kh7xZgYRNtUBUDzyY6oC2NKz4wme",
  "key37": "2b7td2ZrrApmcJtwxXLdK2tPYLoXUo8feP1GjoDC5o951EPSaxEnPZX8yR6rUQgSxmju1ZBWhDMUb4woa1BtdcnT",
  "key38": "2mPJPJJEYw2arqh91r99yZZKxUjgSYqtDp6ygvaTNZkJs8LwKxUWdqEjvrKq7XzZdi58DztiwUFxTABDidJpyyQb",
  "key39": "u7iXSRXi9RLY1FJNeeDjnBsxBYZKaUy3XW9HnX6SDeJbpdd8KuPUszewiEfwZjHfrwHL2tuAus4FumWGWBFnJzt",
  "key40": "TwpiVz5JiX5KHSPJqGuYLiGG5FFJ9q8QURyXBfm6Lr6MWBbpFHbXebYwpQoByzkHEuwUD56Q5wi8wyuM4DVTJqX",
  "key41": "5qPKL4y3RvLdqRUqnUtpgfDvJSgP9N9a1UJcSXR7vQqK9MT1ngjbrXdeXbk7RsRjC6hAWVRQ3cnUgfdL3CWcMDLo",
  "key42": "2kjug6MPWJBQ5YQRHGKuiUhFitQM52euSN13aA3vKTNqgfqTyyKg21n9Se5TBHzYeHEhwk65vHYYicePyJcJMZVE",
  "key43": "4e7FZQpaSf84yfaaw8VvyXP2kMPWbJGd6XGPEDQdngWuXCgzxs4SRVaAJF3RVwyMjTn2tFLUeLmP57zwZhUym8vc",
  "key44": "2h3uZeXtrzv6LwuDrFczUhpSiidZBpPnsECwiuXmxcWHAWiAKWjgS7UhP9jT9MWR24LbFcGu8X6x9AZJ7RxdEX2C",
  "key45": "xcPjkBbmGgwEDDz7arHHejXovfRsV2geCeXJG97uNdJZaTXZgWTzMG9CZjg8xdiAG82PBccjLZoVjj3DzHjmfrr",
  "key46": "4DPdK6A7jAV3wg5Xk4oDMjRY4cgpvaCJKJjRutodHqtoyQgdhwf2JvgoSgoUVLaPkoFnAgZqrhgbj21ev3Hyzfy2"
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
