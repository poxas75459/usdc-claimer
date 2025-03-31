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
    "eGt72NoT1gfJcba6pL6ALGaC9vdwqBBxmnq21M7uYY8JVBYgKkXi4AYBRRbCTcjE9ChZSW72EWCJPw9CAEYTiZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CuVgFFuAUkEncZr9haKcSTj4CybMmweUSt6UwpZDGnC3wH9k1CBhDEDiEZBxtX94zVG8bRnkUKZfi8m8Ypkwvcu",
  "key1": "63vJ979VxvhPutBGKVLt9pCwwPkHMw7TmvnVQRPa5FFryCECMMEGzB4SVW8W67jBgGe1aFNexiHPCCivoRKg7nHi",
  "key2": "4hVXpw7MBMfpqF1cVp7mPWfwmp8sRfbQrPrpYj1hM1NNAf3MXKFoZV3ufPMgNb5VLH9oqGEuXWYjpwjUvQ5VHdRb",
  "key3": "64dddDpqHbMeZFcGqnrVu8Ujff7E6aveMyEXNC6Q3RJxm6XE6oiSVMm6Tiix3YnFiUhtuvedm9Dh2dFKi9GsUwzo",
  "key4": "4pkJjXbmmja36SwT1V7QwWGVbD6bjAyse2NLBjEexUfWAcKywL8iT3P2Y2TBQ8yPDu2wvK2DCcz2SNv9nrqk6nFM",
  "key5": "yH8V36eSK3KpjwrhygFuDt8bFGBidGWGWH618VBPR61Ea9zQyESvgSZzzZe7NHs5TBejgXZ8PJoLFii9cRNSoCK",
  "key6": "HUoTTTQoKNA2j6oT3hBX1iex12Qc28gPARVrA7MuQbivqHC4nANbYVTHKKpSMLpBQ9AE49N5kcxZ4R4rKrqRkau",
  "key7": "2T6q8fwtKD6VLm1iqAD95ALF7hvtUmPc2jRxh1J8VjxbWLsqErz6WsstB4LRzcK3kM2SBxmEA754Uv1W5MGLWFvN",
  "key8": "2cw7ADcNx9wjaGerqa1Jmd1oPZoW5QaFfmExayMda7zpSpCZdtoMZbSzngjvdCBcaE632q7JDR2dJybqVBEaRLN8",
  "key9": "3mLDHrJs8eHbtZa794UF1845zRPgyb2p3HTGG3TMgA3bRUenc9DX81MFXGqGFGVAV79xHRNTznyNQWjCF4DEow8k",
  "key10": "43Pt4onAHEr1TyxkGE1WE2B8w1kWTQE5QBDvrCNdfVVa5c7PMSkXf3Biy9ir8bocNCzXHE11SHhsp9SDnYGc57S9",
  "key11": "2svE4yMeH9H4dHLdinzUU5FWWTUvD5D5p5yiNM3m2DoUPAhTrF2Vmky7MydZM34ZYAmY6rMme6KzC62NHhKakpwL",
  "key12": "4sjuk5PqvJmejCKTgKbrqDjgm8gociSVJ4LN4eirz9bM8D8JQ4d8PBdJxd4n6gzEx7DjUyLoDMmc3ZETWT3wrdot",
  "key13": "2oM1DFumDPudiF15rtFA5UjSJD7cdzGgtqgef1XyC6XWvfG9MPFYMGxFRqFtLXv4qu1PaDjr1CgyEvhVzyJ8rU5Z",
  "key14": "3aE85q78w3DuAeSYuQjLc8mxheW1ppTFXnzHSxSMnB1AqdhnYrnGLjRnsoiC2gsf8cSaFMuYQZSdMPjnXp9UcqNv",
  "key15": "jtnnr6qU3NAZubmRxUgHn54a8pQMFttqNB2wjH5UbgD2QagjTZiqi6W82dTCwo45jzbBWDa4tXDAAwQvDABF65k",
  "key16": "2sW1vjZCBNymaFPpiMySZES2Xz61dFfXXATCAQMDdn3upJnQjjkbhFzS7fSXZYNomPH7FLSbcC3pA5vSAyKiERuY",
  "key17": "3aDUmNEPkk881vD964bWKNEpJbyWUbR3DXtp7fe3HCs7UfJvkfVv9eyQLzYCSZryxhwCUfFx8jMqz5WJUSzkiPUd",
  "key18": "2oSAWRk8EStYcaA5Gbmc5Q1g83yZ4fL25a2Uugofo2VdPEKNytbvYdJQeNRCXtV13fxBgvwnC8uKTJWiTVtFrArQ",
  "key19": "sdrL5KVbYeqDhyHFxf29AE4uLyRnd2DwvPWBugyvvHG6JrPWL2FdeE8bHPefTahCNP2H9yhakAjpF8tzhPQFyEX",
  "key20": "5BhQbmgALHS6hpsAbmg8vnRMS12ytZLoc7xuyUVyZS3JjUoV4HF5PG3SsEiER8TxMV8RS4com3gx96xSxNeTdjCk",
  "key21": "4kobekYJDGcewRexdKWytTeCwscLsnJWzh6oqpzM3D7xho962ehTAjLy6SqU3pvSs6VttebRUeQ3YGuP8vuQpoFZ",
  "key22": "ewYR7pN5E6cnuAqbyoh6NuyX3TnWVfaukBJnhfyc6uRYYBd3axJMr4YcULyyzqrdjpUxChYeWMJWSsWYKg6cxmJ",
  "key23": "2EagyRv56B4hTmpiskotwodctoWdumMWMtLgSN2bNGfQKAkUJ2tj8xBXUP1JtQww58R9S6m9XA65SDVBxbck3QoQ",
  "key24": "3NXpsXU6RXg8Wv8iHK5B35dyfmC4rgufMf6JeokQykM1jpcWLrkpTrie1dX1ymndZXyah7HVk3J8K6dnTWqhM9N4",
  "key25": "NkUKwS4BrjKEbWu27btNUuA7bKGnRD9Z8rkNdER4AfNcfzR8AEsdCuNiA5biEQapgBT97Vcj6YhetWKPY4A38wU",
  "key26": "KpqN3AZjb51GNQ3CMGVoNDFNHr8q8iMEyNTti7v7LKoWPTWvouRPiBmyrU72cExbXK4AtZuWXVhxKFrgisPHHEc",
  "key27": "5PFmwWAEqmdhYfzDzVXHXbqtPE98YW87VuvHCp9aq9uhUvDwviBiDwrKbkDrMgUy43fQVhCsySJUjHYdLfJLGQf3",
  "key28": "3rQsEsa6o675Q3iFgCRfLdm9a5kFjo46tDZax9EsNL1sdQQzfShPrqPKoEhyXuSwCansNLb4sKwJahTgWndbEYxb",
  "key29": "6V4C1WNNskqRqaoKsBmUJPzyRYrpbZpwkDyNXnVZwUFZGpubS2ziZhETXYSGKCwv77DEhwBjQf4T5iQokS8AQNW",
  "key30": "42oz5zJqymK5suTpJiaZWKaUCT9VnedN54ao3AqqAvz933pXue4ftt9JwiyC32bxPpUT84fSvdVfqAyAoNaXdsWN",
  "key31": "diqmXtA85HwmSwxGvk3tU5SqJwKkxhSdtVS4eMQAFpeXy1KrLZaadzzTpmoUbKB2uwHZ2M4JtdiAZhhPF4hxjF1",
  "key32": "4NqUCCT5jtADctpEwhY7Z88cBrCweNKE6bwxAXth3wjkKfrZQS5aF7sqtEcdBAiKiiBEsF1Xk1h4VK29bgsdV1Jq",
  "key33": "54CUUNyo6gHhwmXd3kwFphiSDR1DrW1xP39TXNGL2DGpERJw5sJkL16FvBn6Hhy9anFfsM9iQih1KmCdYyjGDUpV",
  "key34": "3v1Kx1pKzqtoJ7WJQnmjXZd5NNWc53PSexvRRnNXQAGxbdkTGiyeccbQ88cHn1M6dL22t3cWJc4UG5mykauet2hh",
  "key35": "5HPZ7ho1E8D5NLshXpwAQLKSzub3he818ao9BWYiumgLTkWyp9h16QH4FAgb6mYMtn6hNEq24EYf5P5iey7pF8Xm",
  "key36": "2p3VD7EfPYH5DPpBh7TjzqWvhEi6NmQ7XCchdzpV8HrH3S37Ks3UajfAekCHoE6catAoYEEn3sjQFnqNv2sjtXr9",
  "key37": "2sGHThhN5zfksnk3accJfmnGzj6YF2WjwY8obfFkKUEqGE3fxkgfRFCTbQ3KVkRj61JfDmN7rwVK3Q3q2Vi3BYaH",
  "key38": "6Yh2tjzj6g27tA3LEzUSd4EU6eEwfX3gjBwpmjJ6P66iMAgszqM8Yc4hCytm7JzFPj9xsZBGCLcnPzi52UhTbyj",
  "key39": "Wb8wM4dc2qiNo2ZxzkxqwhdWRQUyBtRTfVqCDM4oHXMz8vRzZXY3zugqKptCVFWgGYcKuzVR8K4NqVwKpEwkHea",
  "key40": "5yYidwxo9JEVGiQ8nrS78g9Y9rUtq9nUU2zg7xeH953rPaj7okEUTfD21rjYwLJ7oSvkW9rkZ3q2jE4wiwZXgVnq",
  "key41": "owtkE3Zep9bVNYxupKTwZssW2zyqfYYDU5K6z94n5Fo7Yw8ZmCz5WXY37gAsGCxNEoLuQorjsztVWtzKjRRwbpU",
  "key42": "2P2khKPXRTc5ciTuxvfKNKr5kR6qKV63ToEboptZ9bR51G5gi7qvxNo1Jq1MwwKHP8PB4x8zaggfbbZrE5cWVBBw",
  "key43": "3kXVCC8tSv2HU57UUdbhKo9HwfUsdnDnzPesUicPLr2xEYVrRJoxq9NcL2Q5LGH4y7qwEUQqyyztBzcKQWHYkysM",
  "key44": "3mWxu6o2BvNLc6vZ4VPJ7LhxoPA9wNdC7EdY92YATmhQsbnSri8rkez8C2yhGug6THb8PhdcuAJAPxTEnNq6v5Sr",
  "key45": "5d5dgSAAcmUpEoJGHTo9twhwtqnLQL8fddXmP9SQECsAgELXYmNAKQLCLXchy5Ff7ct3EsjK7HCkhMvGjS8gVTdt",
  "key46": "4VDkecDCAU7Bho6gxHV4KvzbdQw7SbYPmyGJBcGJNVkR3WTfF9dpnnMnD5dvztircuESK1yACaD2PoLvs8JNPXXQ",
  "key47": "4mFuck4CxT86kv1GRyeqVcZ4RFE8wSNACfjGLjqQ8SNRZceQ4obqH7ddk4XtpsxYAhZbD3v32FXVQmq6KwU9g3Wx",
  "key48": "24vuj46vwvu2v71S7GfyXb1J6WozfZiA2bjg8T7GAHxznr3FQG8dCYJJYDHCL7Z1RdD88KtZqeDmSqytympA1MF1",
  "key49": "2tN1XaH7gtZvYmGdgbVbWXoAnrdtyym5RyvgXrShujnwbWCkbFtrtZfzJcoNvwLm268V2Ef7rgxKPtBKiHxsruxG"
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
