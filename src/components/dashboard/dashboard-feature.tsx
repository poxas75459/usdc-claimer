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
    "yHEGD8xsSWUA4WZJPxkFn8EbKkfseasZMs4CerttQmZBzTxrQ4tCNjri3pYycWRQDrWw5N22rirNTdxHXGbgMk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27AmswhaGvjn8NW499i2VdgGtynSymn1ufvo4Fi3esevy5cHvdL9szWS8LHYY1TwnqkBjNekvVvBCDyZXBpY6fLW",
  "key1": "2tTuiZJdhRkyH9RMBFnjBMfbyeB6tmgq4RX9CYqG4E1Muu37NALzXN2LZJSqXhmxyLJYGSN5FGCCGCergNEiku9p",
  "key2": "51o5XGNHMWZ55hVdF6F2LkADZ12x5LDK8Z6Hg7pbqr7cjiK6JpvSpXvFsK2Yv1EgbbJZKRoNg4gdU3XHfy3XNoiD",
  "key3": "5qy5Rp2qeFVdfeLRVLv82qMLwnEEQhReofeihdFWfRtp8zj86F59RouaPDAa6TZjPHpmyCRS5QBfjhRo8NkVLs6B",
  "key4": "5UhWthStYogZgjZn9c3cpZ5GL88wqa5PPTw7nh2Lt1NL6L5L87a1kHC4Hm9hkcq8k5xC2YhDnfemzXMa5ZtmdEqv",
  "key5": "55uhCvvt1X8yTWCL5EL6RB2EHJMNX9eL6syEoDM41Kc6ehjJy5PksbMqAHa2gdSj8pByVodtZz96jJ3ViC5s1kXF",
  "key6": "2K5h5JmowJwWHjov8SnLqPdjsNf2iuyi4sKa22vegyy94h65Biuky2onDhKCgvSLKEi2WmmdoRUUwrt45KgHzGWt",
  "key7": "2dwbFjGaHZa2GDRvYYoZV35X2ogRd8ERF1HS3f6MwCb9AKnc1SxQmjTyheKCvBKWg3E8ZHrHmwJria7Dsi6bw8Ho",
  "key8": "3btX8G4AAiPrHB5CXgGqW88fWNmE2EpeTqWfQcfdmxHhY4nNS4cQbVxAgsZBEL6Nc1RAHeSo47FoyH6JhBs78QVa",
  "key9": "4Sxif3TnR3xePRCiUjKXmMvZW9NK9TXow7phkfKUsJueYhFs981LPpZct1HHuksngb8jdS7SvzqKvbG4Xeo9ZEHa",
  "key10": "3LJwkafBM5jcYcDTqSCQxCCQ31GbRNhbXG6Cyzs8ZrX7zmsA67h4Vs2k9GMaBhCXbWcWbLN9FDywJXZyVTYNfjFr",
  "key11": "3333Vy8GH64iKrEVRqBh9hdXGwvwLJkCPoBbZGbWzVHfYP9H9BPkRQcDnAtnaQdvkzAD1GoYXmNwgekcy5zb9Y8M",
  "key12": "3uoMLZuB3P2av1G7ALu5xwVRQijmxgGPNCagevNCgZM1Bb33wPGnehNLYwZebNDz4cVW2SBptnPVG59t3VbwDxZt",
  "key13": "3Abe5vmCmCiLiHZvpTiov6bpQ1HXZSTEiAKNFr5TYcGmGKGFasAg65pegutsj23WmxphBzM5xdterGHkLEcFq4Sk",
  "key14": "2mKcMidjAYvPvkwRATAwzgENPwCgDXWpkPpPeu6kVwFrNMZxcMzM1VCLw19mfXfqL1pTJ9F2Yn4z2K56ddNQ7Py6",
  "key15": "XJt8uwmE2P9atKQF25UiLjadG7oshRCBGhHGko5iZPDs9Swgim7XCbf644e9jxyUhC49M7DP1EvJA2W3ceYpeou",
  "key16": "3QUv29cEKrG3jt9BvNrKDdTh6ZhdzpKcDRhpPsCicwCba5BBEj6YZSKtg2JeXSM8paZRWDa6uJTuSfEw8GpS8zPT",
  "key17": "2opEfxKhdFN1S8comGcJXP98e5iYm3pTwRFzc29Lkh6gbjycCW7NefH6UHJZKpEJM5t2PkFCaa2XnNfWDqp2EAT6",
  "key18": "31Nx6kSZCrgdjrbTgU9Z2KEqN3gFEcXCk2PmTwqpXHcSTxLazaGr4hkiA3mhAgEX614DQiWCVb75PSq8CVwzvihj",
  "key19": "5RzMXz7QJ5Xc7e3QHaSeZRfQAjAPtdsNUUN61SRtn9WizD5bJD1RWVr488XYMfchMA4wvAAg3oGCooP14T3FyAYB",
  "key20": "3CtG63DwwBHCTPFensNVyKmyCnKvGjarieab6PoLqnXhWg88SbrFBfaazch5iuFEPzjBM4tdLmQYAj52hJkW832h",
  "key21": "56ZPVHzKKDg912dbwCZq6W8mSt1BCR3ccFmepELrV1xaUaN2HK4wYc3VG2UtUf3ga9T2efLkpkKLEVQ9wrMEMtsP",
  "key22": "2w7erjbXhjnad8TsgF2LuW67htouTnefnyBx6sCmyZhbryyB5Kfma1gc7D82ejEuz2wyCasUw5SHoS8Kq6VvJha2",
  "key23": "4JSV9Lz7HXpHjMb7Qb2ETvMoexoqFyZZKqpCDfZEs52N2QLhEvGi5ji3uE2ZDwuiB9z2yz2nvAq9SAJidVHd829h",
  "key24": "5brtDKZmaW3txFkMDgonD2t5ss4ad1c5d4FMhyppMYuTyBa727ka3ckwyLRCFBn7p1kb6QLMkj4FMwovq37cEos5",
  "key25": "Bf47Cp8sWYADDn8wCsRsbk6LdEQ3ea5rUDswh9QsKmX9xnfDQFexRwuBCVrSqxoYAfQiL6REKiwnfPUdmUiwkUd",
  "key26": "2snix96pqkxMQXzeZU6ku6uMvWaqMjjELPQpMnUgY8jWwjLBeSUdMYDajY2WHLp2c2nnQvEJ6VRfnDXxTB7adYeh",
  "key27": "LchHArrTT1hz9bnv2miG21v8RgjH6YZrk9BJBCToczQBkkzP7KEE1VvqFrCwAch6BdjyVXzo6DMLdQoExTEteCZ",
  "key28": "CaqsqDuPikx2qHmPTz4gUxwUxndBBPKHKzkzuezoLnPbRWZ1kxM6bwhW11Nphg2Zk6vrSKMwTfeMrQnfKr8swR4",
  "key29": "4ZcUHwBvjTcZqaRbBn7R4NNPSydm3qcVs1k5DsaHWz6SjShpfwVXSVz52H1N5KFWxJdpnuvo2NhBuchBEhfE9CeG",
  "key30": "4g31sgHs5QEwmBuithJDWviSavNsy8fYKnkG6uHLjHDTuauuZuCTcQ8sBo28ePL3Ef97XFsgwWSeMbYBB3ArqLay",
  "key31": "42y4GL2uzCLxKa14SieagkbkC4euiw8fu5PUenaPFCfx2fSoqZgDFb5fzkPtxk4DoSyE2rFqeBY33SBkAUE6y6kg",
  "key32": "3Q2qk4rh4SRrEjpSPq8XvoBmthTsMyfweJyFE97YnqiscBxJ5RdccaWFtDgUssdyj7gksyr8P4D7nAJbZbqgtd34",
  "key33": "57FVtxngi5RMBNHFnLQ4eBhRdGRVKSuZhEztMizHB97uJDCae6HuHayJQccf4MAXFCX6iTfhE5tWcigyBxkJUzRe",
  "key34": "4qAHLohq8kDSypNxpkENy2sjLiBdgjaessq89rmJNC3hDM1HJMxYo1BMoJqCU1NZt1XxYuqEMAZQGEicSbYSFxRk",
  "key35": "3dQHvtfcmXzxsGjRypXcGraxoZEmFc5agehtjRDjDmQGj1225FnCxyzYSfLCXrqY3PRj1DDdAmnFovmwfZ3aJQrt",
  "key36": "4fsi3H4EoDi4m2Tm2439QosAkMr2EgopycD7hNGhV3Doy6c5sEYohJYWycux6rpWqaKsv1Z6G7VdEDKdpS5qdtvz",
  "key37": "3pF4k7vXrsm9SaDJZPgMG5pzddDcvjMCdEopFLZxqFHyBAqXWZ4Yecz3fxnDuvfD2r16ey5Ffd2sZkg7wrMACQji",
  "key38": "4U1veY9VweLRkNKe7BJEX7s118iJhmbXV86V3SKMyzru9EAk2LNFdKQjsTkwkEdZZYXNQPuyoupK4HNsdpeCTnMx",
  "key39": "5oWVKvqpKzAxaqisXLy6DVtcwRFKBQ1XxrBUtQYX3vu5nvf3nJRUHZsLv6porDhXJmBpSr2maahdUG5irgA4stT8",
  "key40": "5esgzsb7kdKdeibxPuB2RQJoXUUNmZ2syhiqp2kc85PTY9dG3qQPL95fPThRCcb5TvHhiyjrmF42nP4ikr9A6zMt",
  "key41": "qMb5sgxihPcFkcLMzARkbLchLE2BdMgughh2PSzXsxMKPiMxkwtmwA6fwoNr5VTSb12GWUD51tbA5EMZ52DbsT1",
  "key42": "3AbgSAqsjmtsqu4eSZoFn6xCyAKR4Gw9MGEkBh9r1d59CDBsaNSBpQm4ofbcsyDKeTwXkfdmgVCme3FhzBfLDRJ7",
  "key43": "3B14KeaiU2HFKwKq5UXUvVHNiv2voekW8UZ5V2q3FQs8KQv98v1yLk3S4Vd8idYaX2BNhqaa2dXySu2oPkqWsfWJ",
  "key44": "5RZq23jXkDJxT8NPEWYYpZCC9WG732qtkypiu4aBbRgoHsnt1oGjokXMejiv12xcJh9xwVCMpFous7ZPomQHyWU1",
  "key45": "5XCfykFPzCjrHKsufU1nqRAZPZesE3iBbgaZQj4NUXfRSD5wajjNutGRACUawUwxt5DzMracAKeKjBQeChMutTGP",
  "key46": "5vQBCyCjAe517tePaQnrWpHUhpJiNYN2h2Mf6WY8QfReyhjTLm6bCJSb3vFQfTRR9k3sPCUQqbSxTMG7CHR6PS73",
  "key47": "26WsazMTvJYDESkjeHUw9Q7Pp3egP5PTETkZHoiqYuZTVT93EtQVb9RuffC2eJCCG7hFHjL8n4xpmqfFdFrCRJDf"
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
