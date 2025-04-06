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
    "4aZMMFML4GWcvYP5HMsBcEqjifBg1xCRDc3RFHuCELnEwkVEoo6h6DH37aGUy3y8bea4UzjyqpmqdjXvwZFo1rc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AsqtSWLFSqjz5PUZPCoQdFgAHCw6cvhubS8VU972FE3emY43XGVMdDcuMsHG1Ye6KDMavDR1xJ44ga689tf4JGp",
  "key1": "3gLHbQHiWCy3bs1k632bUywupwgQJD1HPnFNHQFnPbHR66qnanXuAsZAFCGyiH7fZN7gBsMrRbnzj2mZjBsRbAzh",
  "key2": "43dWjJVfobTh9s5yqj72xui4ePdmoDYmZo37ifS14YEnYdztuNFR1aTugjB3MLCoe53QEAJpCbBnETJqqfH9idBh",
  "key3": "oWFztE4m2NWohpWFFD6sm9VVS4DJ96dGspFpAaebuY7mEyspW2ntzFtWDtRFWaj5WjQCQNRtCtu63yT253uLwRh",
  "key4": "2RYWrmcjfjB9AXWCDw8YozESmgfNbuhbnSNYRWQth8sz3wJ38xrXHv7Lo4iTJnt5aevvuzLxZNcdR7JrVCbtJdXK",
  "key5": "F7RWByVLG1CqeDR6EASXm9CFZU7zxvdpwYst5E2SveJigWwJukZFEDNLxkbL5R4ucWHXEkvZFhJ9cHgGP3B1Y3M",
  "key6": "5t4DinAaVQhf5na49TtGZ76gUUKjdwUYTVd8uTBfjSrnHpNX4NTbmDAumGSpTXUsYvXJLJNw56YJsBbF4FtuzaUD",
  "key7": "HPdmjrQr7m12g8GK6HynuNkG4TEmNtdX5Rc35st2kbJfBs3M9GCaATFd9VNsAwJNeL6cVe6ybMDCTmSB5Eo4dWE",
  "key8": "rVxQpBJyGHk4BfpCQANM4wS6VJRBb3TtTwuZcHMqwxdi5yZQFc6twdaWrDXV25W5nd8u38rbT7sdGsZXFycyEEQ",
  "key9": "FwvKg68Qbygmk747KwUCfgpeQeGaYVfg1KTJ4CWFfWsXX9NjaPKDqdYF87msnDHr5cL4GE85KREQzRs11Wq9eeb",
  "key10": "54LEQbtwo1EDQcnLZb5aYyVNxaMyFemMM9cLeYLTGRX34AqXMMSM6eoJtyQMWYfDZRrmpZG8ZzTKex7EkDTG5mqz",
  "key11": "3murwXzPSFhGKccEzrfNYyLH23PeVbQPYQKd4DL95jHbuMAdoVygmnuViQxj8c79aPWbtVRvh3efoce4Wv7iiEdq",
  "key12": "4iLwHmezTWodLRDYSt83JwoGXUzsP4zbSsEqybcRY2Fy9RDQg28YdGHD178X2p8cs9MVkJdDMDMEgga63W3YxzLB",
  "key13": "44fs53qcfb2pVuYk2YTdnWdgcxhF9KLCFLQshDE3oez2jj8LSxMTW8zk5aX9532ETEJBK2baViQxS8yDdQtsjwkt",
  "key14": "311daifTB5H2RwefzVTeuW4JUCb6Zz8ouavbzu2uBHXv3zcezdTZuMm9bJtjS12b4nACBMVbhK2nayBgmmE5CodM",
  "key15": "54wJXfDyknr3fqP2KBo2hZHmVJigSjeegcRVwzje6yZGgjkdchRMhrswqTvopneQTe9r7wapHJ6dvrfbJrGHmmh2",
  "key16": "2X49qV7NuThZYrswidbWupQiiWK2MH8NEV1HxZmWCzKXmuktYcBT3AFjwzpDDhRce8B4o7Tis6LrckYZDWYckVYE",
  "key17": "4iwAfyucJtQAu8E9pdWaazZFsJwwNd2d2wh4xxicpKAjq7AeYS5K4YMPDdPBPcJHVoaz2J8EsPcHUFniBF6gDeKs",
  "key18": "2YzxZiHWZ8HjSX7PuY98mcwKpKvczuSdPeh6jnmPpX21qprHmAeUTJpAKH5rWMR2DK6nLV3nfpUvyPQsLPjf48gp",
  "key19": "2q77ngBLAXwVYCGfXY5ZM3YxkCTGkg2X3fAyEPmBsXj9ZWjQFT4F3Xt3P1SeihUyqWDBMhUyAxRiXKJevesVFght",
  "key20": "4oHZvGEJMkCmgHk75Y4jbyQbxzZ7oAR4v1AAwAeqXe2rja53iXh8EdC6SGR2u1txsiUjKgmVweAq1iRApfV27Hok",
  "key21": "5hFXEPyznDZScWshoyiwLU2CEYJRXnP6XJWpQLBDkEfwQVVgya9qWrDz8X4FQRPsw2c7RrHfVNZASWoitnBN8XPy",
  "key22": "44Rq8zBDvARqnGgnhgtGJmMPRAJMrmj3VSSWYHJDSxw7755xXcEQFEgjnRtzGh4JVmAZMtxNfmF3ceVwQwGXB1og",
  "key23": "2TytGcpctcnXw8spVxTtoU7k9MxJPijJcdvj37XkqptdiNfoitMmGboVS5kjqTJm4CWpBFV5khNGkkbxy1MsYEkh",
  "key24": "uYqfG1tsqyJ1S8jk9XX5fdAQ1fvW2W4nQJD4NWzByduRSWVBeAByNzmVGhgt81QsU8oZv9iaCKonnQj8gxHEiYz",
  "key25": "5g4TNTBT26hYr5Twa8gBgSmmRReZn35SUpJ2Pr6CCMRsZiCm8vCVjPeHK2HCkDx8a4Mf5RNcaSWLwVe1SPCLfKQ6",
  "key26": "3TmDfoQvLrTGrduSFH53fFHEyGkf3pNUTyiXiS1esSEHpRaTpQZZJBZ8KsGC148sfuW6uPoSQVtdeqZuadGUu26r",
  "key27": "63Y7aBYu5Ms4uv4zhgt4NHs5qZQEjT2HzcyVF34WTTynKf9AgNNatb4tDkEUwMuv36gVDJ5XaUxk6tQwVDYYNr3u",
  "key28": "4Xa3j6ZKMLixKyaNyZqGjfECEZjeR1HxQte6Qte89k9gcGwbugBsjcw9nKD4CW4n8txCBErZyevzy3H2zoPH83Dx",
  "key29": "4E7Qozc8fyqKL9TzKCcMcy13KyYNHZcdijFBUyFSvMgeJkrZLj5cH2339mhkHND8CzMoGxteYj36jW3rDUNtUaqW",
  "key30": "QPtHFJnQGnmss1iV72QVpzvuVGYMQwRVJJXku9hvK3382nJC2jEU3c1Pkq2qEMDtE83oGg71cHyfBGCfK9Hdcqo",
  "key31": "2xjF8zeqkZatcoXXau2MLvU3Es2sf9AW66yfvt7wpV9qAEMBjH2ScpTe5rnLukWTsYFJHtGA6wu5UBFJEUMHtcZV",
  "key32": "2w3qiisop8dEjsbwcW9kLtdWQTCGAexvXVTqFTfWbdUgEMFbkq5RVeSx2sQpTtsPFgF9br6y95vPzp4t6MSx3CFh",
  "key33": "23VjndZLmretLnz41W1M26HmkrETY9U4izXaAu5zSy2b7yyre6HAngBNHoUsrtvrF7Kf4xqMb2firSeZv9hTfqZC",
  "key34": "54ckPvBAgT9ewLWd45C5cWr9c5u2NXxtxaLPtAHFEk3sDHdmFbuSZz6gHaa33BeprmYtfiBYytbViPG2hkSiTzJ",
  "key35": "Nz6KpWWXTSGwJJ5MqHVBaqJyseWyKU7Sa1MZEhE8gi4hz3Q82k6od8GeRfeARCvXQgk5qNdsr1vD7xwJjbZs3g8",
  "key36": "4owpg6ei7FDi2iKi4zkrmbhAuQsgRKGZebFAwXYMt2neFiw5twGZZjBW6wugK4L6kWF2vDqET1zmC5s1oymC5DGo",
  "key37": "61r5xWzBy1mnummjYpRPVhHhgPnpuV2Nr3S61two7wa2LeuGTFwP1FHvHxCjZJpHpwLEFmrxgBcXHhQ96EdEKjRy",
  "key38": "4ySVyswzEi495uz1aQ1xFYr13y3q6ku9G4GGhuhSqg4XMkDmcKNjLnJBRzysVYXS63V76g5BTHM2c86UKutnAq5F",
  "key39": "4xT1hjf4JvB1NUGpnBschnqqzjiwZ3eR9DYjDk6o15wMUrypnGvQPri4fqrQ8KxSnnS7LLfzEnYj1oLYT2e3KGhb",
  "key40": "7YwNoKvMtePr592nrE6wjowzTrphLQ4wpuyhy4fWeZ3rURSFDyVtb8o6GzwDBGJrhTsSWeV7UYpnRLepvLM8mED",
  "key41": "4cFroxy6XG3edrCXXBphhkKQo4dJJNxEGR45jYPXxUXJ4nBbQXRzgPjks2BcJ9C4kNXqocPFTujFncAA4Geca3aN",
  "key42": "pD48Z7Jq2BagGf2fLPhtdUeCX1N4BBLL1Mt4uUygDBBjaSeXrnVtKQiZbRR7CTdqAJoV62p72F7iSBVK5AfHNQV",
  "key43": "61XdFoFJ4RuSx7mNinnkdwWcJgToq8VakFHgsW7s3rbsvzSDZwKt9jPcns9kEqqXqVRyQagpzXxVt2KC4nm2iPAW",
  "key44": "3Uj1UiXv8RR3XkWXjQtmXgJB6KmMAzBtdP5kRAHDh6YE9ArLy9y3CsK3VbDeUEJKdJhRNSMFcjnj65E65oTSiYRr"
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
