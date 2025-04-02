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
    "4ueY3QYszAC7yJExo4Hmcsud83VJf2VnopVmorTSrx5AWjDm8FQVh84iPV1Vr6SJQeCSrAGaxDJhv6ZjevrDL2gb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iQU74yjS938dXsYW6vUE2E45GZycxDbe48uB1Sfun3oR1DTrvJJipD2NbhKjyLpoArZUzSjgdcD3eBvuLJXswdM",
  "key1": "43nA4JTsL5zq7szq12wGfs39sLooz51KZk48b2839UtfzrcKDf6NoWe1hjTgftZiSrM2aqq1N8aKEr7ahAmvcVzm",
  "key2": "ZVq8SHX3jAPPgv57di2npic57fCbopx5CQ2TJaNzNo8eBE5HueQ3LjBTkswWEL56fxpXwf4uEnXiEk1ZLc2uDwh",
  "key3": "sEMk2krQYy4695Q4PkwQRwzV4Rh4bJAbwzb5UodTMCWP6h3cHV9m9oVF8Mm44hD6kJwLALV63JrugHMiMNoNUzU",
  "key4": "5fNqdcuETKGnzrTTtQnPgVgDZYBBLhmKERQ16HihDAGDDqgpwzrvZPEAinqx8AwD2jxEZAJmLgbc12CF323JrsAE",
  "key5": "2bTZ2k5oxj99ewBV4mpx9RnuZP2CUjBys7hVuqSZCNFEy14BHcHHWEjhzNdmTqC64omNWEfmihj7sJhoLsoEhsuH",
  "key6": "5TcUEFa4HXVUvPVcxtjVmoozE8UQJew5kDJiJkxM6P6ypBkJxhMpa8XquBjLW5JS2ZnhjSLyByXy6HJVKV1gGQgP",
  "key7": "HvtKUTvq5G9ViDSRFR1x3ob1AMPRLZDkhuS7nGBugr8YbwykjB6v3npXnnmzppW3adhoyEro4RySgEA8n97GYAG",
  "key8": "4n4gSHwKXzZwf9j2JbMx4vhndPEMH3qMscWto2hG2mctja69H68sEGK6yi5mpMhE47h7T2k7oYeH5UEtQNuH8VXw",
  "key9": "5f5KBmvEEdAtfTysV4tzU1LkNGS9qwiipwy8oEFYod2TGpZtQaS7Hyxf6jUimbWaGVhcEP6rrWMY2nUDoWukLxUA",
  "key10": "2wBTKhgLfABDFrHbG9dwbodC7C62VTiuutuNAq378MHHUihDY9Tn69r85Sp9nXAUTSVXKscfgacgsGEwMfo8Zwf7",
  "key11": "5jHnRHQD7y2uAC5gXpD6pBTTQyQExbFhq1kHXG8fnCGHRS3DgUFCHg8UfkTuauJy5MXKmLmqZtLvSAXc53iv1tMo",
  "key12": "3CLoQVioqjq7EmfqnfG7DXjofKiPag8JtrTMiqknctckRqXSHAZ3WDNFTcvAQ9AirYQoewZhwMmfLbLDR63MMRcY",
  "key13": "3xAazNaYP9v522DqZQnfp8yi33Te8NabCUxHveYFnumHTT3LBDC2W6kAshkiRtJT7nic4cBtaHhgE8BBUcoqVm6A",
  "key14": "282cw1L4YB5vAqd1NAiJNww7gXjCXZ5Shsf6tS5W4abN2e4FQyvP2YYuotHy7XSDakRsLhNvhMGqVMgGUWY8qn8a",
  "key15": "5VhYVBw9zZedwdcaRvszpcKpEjY4ysnbqYwM6aSSaMUTqXGZ9gA2unz4oVAX4k1Dgg88CnbhvyP5uCXLEsmY5CVW",
  "key16": "36dch5cN7HTEN2hhm1f8d6B28EcZaZA3B6pKpvPj4HR2FhhwjkBevSRbamfSx1CTxy7XRxF2Wt6wdUSQbaGVzSqa",
  "key17": "5gDEoy9d4tLyxAAVStcK1TySxwRg7EYkQgpb8xsgjC1UdRa71F5cxnFpHKemUr4TW82fW3gRqsjUb3hYKrNSuWM7",
  "key18": "4W6R33hLEmcEWrp74LW9TEiGJxKD4KaLuwRbKPg8orE9YgXGdU69xCsxnmKLJNcAvGCAR1mFSk4iqkGJoCHorM2A",
  "key19": "3yZ9hJYAykMKE4soZXbZJhn8mJwz3saZ9wkF8sUUKfqBTab3p2ZDFBvKbVnBqpBRDktTGcNrbD4iHGRzkDwecxgT",
  "key20": "4XNvyTu5EnEP9nMPiTLq5XmXzGQBkKYBi4TWbyVT9wB64DNNQ5vpzF6mDSLsoCe7FSvKh1MHRbrVa17uAG552gKb",
  "key21": "5HmQrG5uCe2zmNZY8iocfxht4qwQ67WsZYzatjMfbv8jnfG6H29aW6ZhC5Bgkn74QP3YDEZyYqGkTEbpPsrybht2",
  "key22": "4u79w6nxZ7g77t4WycM5pMJnGNrFK6NBHCTrz4eYGHh6fhiZbf4sQfF65qh4x52syL16UmRgHvWcSkUynkGjtYNX",
  "key23": "YTmrvLf7psdviMRJeXDorB8i4CEJnRUb6DR3kWS9G7SeK9sKotTs6YKK3B2hqudP26Azc9jCK77re21YsrwFSWj",
  "key24": "2d2EhACPnccFXCP4peitADN7ptbraqzPFJezNPdwk5oE4jYmJZj9aV3j2X5ZT6sMvr3uF8SUAFTHecscsMw7ExXp",
  "key25": "5EzEu2JCKW3reUrKBbahJSs6jCVHXPsHcJ3oxenmy8Qvhqf1CbLd9mc328aVAvcMmBCnaSAqH75Ejewx6KA1LJYo",
  "key26": "5pVyHhiuzLEZRsZY3DXYQXYkH5Ujf3F2FrkFoLWrr5hvhGEx3oBJUfDCVJCVJz1ggfyCtwHvxJsmXiELBz5tyCtY",
  "key27": "LxdYh5vQ96W6wMJEFH7jxbD8WV2Fxbd2mBUGj4LidvzkQg6B6xUC8K1764cbF9njjA8DRRQ5sjHLRHapFuPMAvy",
  "key28": "4L3VKaPmHTvoH6o65s2TuNfUqBeofJ6B4tNJbDo5e6eTtqEik2vDo33Ljau8zss7BafDRCjoCLYegYLJA9SBgUSr",
  "key29": "UvrzmJSPwkKvAA7Srs6rbYoK9dJ4xTrNshjzzmD6ekQ5RzorFqRLrY7yQ61Zgcr9fdxVkyoTTJJyoKdJZy69mmz",
  "key30": "LEerXrozwrfG9Dt4NcRX1GhpP3ZTktoSsLcwZY36nQkeNc5Qh1cvaBGMacr8iznEwm4NguTRdg6HPCfRNuHGnxD",
  "key31": "3qVVsnnJUEw4Fha7oNa1UHEkuYZ9QDcEE3rSQwAWibEMYJDerXMaF3KrYqht4PJveWWkyusmyjYLGP1W48B7T7Wz",
  "key32": "3hXRofg2VxPNQh6r7ffTuvVTJyEiyyFLYMqt8rkBynrDVpXx4iAnQPB79rYh11pWbmwZxtBLuwws3Y1R9zgQmPME",
  "key33": "4wZPVJU7xtj3BY7zoF25hXNc3bb6aUVteXP5gUivxyJhAbNH6WtKgHRPL1f19XjXydixXfhNtKKkZ78S7fjxpVkq",
  "key34": "3JPM5QYdi4sQgSwMvFoyqcPvTt3RkKBvSRX1mUeGEmDTSsDEehXmNXLpupD1jLVVZ8xGWLZe9rkiqDnna5DGAGPt",
  "key35": "3cPh5KxVCBKCPzYKkjo1YcP2vnPYur6tqTviaoCZ5Gp1aZ1DBv2NXeccxGYRuzikavXX6LUVQvZTY6xeT3VwKBUz",
  "key36": "3KWTERFL9fof7FjUDXvLUHPuHdZe81cWcss4jNeuecEVKrcBSNkwnno51SNuCk8wDAfBWmpeqPSfFvZp34tcRk7u",
  "key37": "iBBDTS4JnKnHm1tvpXHc8wsYRPoL3rTf7byNatyyEdcsLqRXcEaC32PorHnuZw6DKjwUEJP8EzPMFCRpNfZgsZm",
  "key38": "4EB51n3EeY43eEMtTSsa4qWwy68Z4Y9LjPkr3idjVrforr2oYVFgirxncSaYPxD61qu28wtrSd2cofoUsEwjRjW9",
  "key39": "2XYM4CpX8SAPtbTR7aQpYqqgPXnU4qN76sQHwaQdye8ARoFronw1FUQgFCBhmzjhfKVzcGpkAWQ6HtuKLVkaRmqp",
  "key40": "4VvUzgQXgToevoefnLhPHzVNzQfwF3oApDBnZgbvCPVVoLtjCgTyqfBEQhsfXDD5k3zSNvLfwH96LX3LuS3gjQpY",
  "key41": "3MHkjDVjkc5XWYnYRCBMRcqewCeVYNNXEACfDpEXuMtt8eckdrxDE98iGKnCC6YzDu9sKu6NpDAF1gf5SqNMm6GH",
  "key42": "2ZafhYYY929vd9hPMvhLLtbDWxW41xFpfbVhEkTdPnibFGv3WjeNh9iqDvyRWEjG5vpaMuAqXxwpgGvxXXGxR2uv",
  "key43": "395CvDS4eC9sAfkgTBouYQmHsf1EGKSwH1A95bW65BAKb8VpLNMsyrUpXepgnhyQWrYsAHKxG9BS9j1EWBtmuWmJ",
  "key44": "2oQRuobRurHQQXPikBQRxTv6zigzbt28TLaoHzUfVqiA4z2NkWKh9xv5mxcf3snaMmrYrW4AW2Q6GeQKoxzFkRV8",
  "key45": "BxtLLQoH78ZuuTSgeMPe7nDfcBNJWCgFNi5wEHader2FE2xtBs5nuUELSi4yqXCjgsWqDU1fgtDtN3Fh8dSS3RA",
  "key46": "3zSzFdNAvSTif94C5WsMbzFYFPyDAQDB7QVJGMBPa2PX2mygPTp3CrTBpTnctrpr28EPNBy6iaymJxDZ8zptrDMF"
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
