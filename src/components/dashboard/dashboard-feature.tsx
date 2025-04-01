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
    "4z62w2b8pYRaR8ZSAfMEJW8P1XfcvFkFWw6bXP2JH5f2CujwjDYse85ahX3uJGKEzUQ1Kf1cVAcjxm85wFoXq7so"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PEgdsWgmPoRvDNbjaEJut7bw31WPnhdLNMj35CdyCUPWtvTpXdGCag9dqj5w4DHH7fBURYNnRKX2sTnef6eu1ek",
  "key1": "28HbUbSkav5zDT2Q52VCK5uzMeQEke4bPujQoWhSw6qZ8oEPp3tCDb9FH8W4zj3SHEquSDhf2kMENF9fjHqSfRdJ",
  "key2": "3rtek7y2ATQv2tYZ4sKqmUt8fezAr8wy9wbwgS2sw3DUa4jpsZVfpxyRHT1gbZR9XTUPuE7d48VXtbM3jwtKthf1",
  "key3": "3Sz88uLmDoe5faFYwrNtYyaKEA8SfgwAxnkUyxNP139Q7QqF9HyEzvTFGxCabYmewirwjDTKiuuPheWLn51GFkZs",
  "key4": "3iyfBpw6aGruXbiZHWBAWvX2eVYPpUM71dZ9uBoUKMGnqffFMCRhocjuPYMANsqDwnY8Hx4h7cJ5rrcTaTa9JPtA",
  "key5": "4maAdeJ9UdS235eH8RHZYiDKhn6yKUvY4LiPbvv1UwfvPk2NDvtmkh5WWVGfmTWJZQVQNhgRHJ1AF7eZBJNdMBia",
  "key6": "5tp7BCmdWscb4K7xRCbmLiVykoKzsLtrGKeyMgr49e3pTcMt6oraorGwj1v3oFvNe2p1ZsrsEMM17uzpL1Za8SJB",
  "key7": "FAAYxy1piiKppHgk8pmxiQDsYPxKKsNukPL1rdhXUcfCwCFwdH1qds3EF7h6TpiS4cG7FTrDX6v7oCorXSEtMC4",
  "key8": "54wSLWQx1dVc9x3T39D2a4tnGxoepYcWPBavKzzTmgVfLbnQfaJ5PRypaGMgZSTiByFXDGzG6Mb4ggVoJJgZGQ8J",
  "key9": "49pZz5cJKuLMdcbpi6vgTW5woxo2V62mo62Hh78eqk7LRip5nVhGi94udjWGZhykjNftU9SUheFoEgotmiMsTVsm",
  "key10": "JqwLdwjNqA9jPBq4SQWwf9CtFDVDkLyfV9fi43D5MyqhUWMW6A9o75XmxSsHnP9YBzzG1cyZ6srSDCWCmcUywPV",
  "key11": "3dKtyqPadoFRLERNrN4MT7TaLox45pgDhPAE3Vgrb9Z74Z2Re8MfSmJG5LNzaxAWa3xHqG9Cj2LRwWqjQLPjsAwe",
  "key12": "tn62uL5c3g9iDFPzkUkrzL8Kec1XUJNQXJjWvVvwiJHib9PsLwyMk3FR4uwujTtfhCvuxk2MPZxdPDTh8PVv7YJ",
  "key13": "58bXGZK21iKanhQt3u61op3aGFJgrGoTRBumQ8AuytpHYSMev2jWDKRYac6bCV7qCWiLjYsp55UwQn5HhDWFyBAe",
  "key14": "ft4swev5n72bFU4mBZAuw2GC1KS5uvjwetv42ws36TRGbnTUeQnmrfM8YdWM5GExdHbUitmgaowPZHDyBRVhtJd",
  "key15": "5gRLxHUX3Jmy6y9SUmxSyV28UnBjZTHnMB4FXaAJ262mLcThXSh7vNMJvqchzeQ96r3jYjaHh2wDokHe1rXTm84r",
  "key16": "2ttceYVxtJDrQh5rD8ar2U9p1XtcomgLfjbi573BaLyjgsVCfZqbxCqmiauVdzb1EwpdgVatsRfWenXME4RZ9QLK",
  "key17": "4YDXtxArvbCK3wBfLA9tZGzyPhomgXfz3o24mvgiVgGJmL2gVprLURryMbmdVfSvx6haMBpWpngjmcohrq2u3FNw",
  "key18": "2YF1zUXHCN5Hghj4jZczwGAgFm9PB8bihM41pa7Lx9ShQpPwF92TYfU6pkNMwDsZYKGH4NocbudzPto7cUUEvjr9",
  "key19": "4gd6EoiJeqHYy1GRUCtweJ3VpfvREDxWVnGDr5MgTRjwiUxemQypqbmtSHfvkDsEQdvgGi3eqgbCmmZNdKCGtCoC",
  "key20": "62x6ZGA95opALydEkVQKbmuqePJHyVeKMCt2oP1NXGskhT4Liqv7hjyduCPQHUY5k6K2AtsP9rUexHBv7WZR3t96",
  "key21": "2N95uViE4jv3A4BkxLVMrnPpezpqpgbuGisYkdcorim2NGQTcFLzPtkYfYS45qKje6bu1m5gjYSWuEU6qJToTmVW",
  "key22": "3YP3vPtAajDH6WFEDRCay1cnkJZvvVgNqAbkyLdXWsGi7diXjTJfjFBobJMh12CStTvXYWrsPV4mk138ET5Uti6M",
  "key23": "5FqgWHUmvXcWRHaiQbAGywvvej2iRwFYKpTup47PRqvBRhH8msr9x6WomSwXfdEuVJAPFywHaPDXLdcLHNvYurYV",
  "key24": "4sjh1Kf1atEPXzDWbTAuEwjpV9jiAVdLjYgVwnB57QwodaJ8WEFThBNYFqBNsdRRxvvYk9fmnHYAsjvc1yLCwrkw",
  "key25": "4HucAUUfueMa4fTDDfkYg9MD7bYZdGrgZFgbDNEU9iSmTX78bGKco4jbTpMtUPbgaCMAAgYxmAvv4iNNXML2qHLz",
  "key26": "4W5BMiVvSiF8gUpDVWL24iZ6V8KVBNnKPmz7MScin8dNtLoMq4ra69DDSqLQs4fipMoRTbmNUESLHB79t8tbT273",
  "key27": "JF1cr7i3gCsZ9SkqEtk8KwXhsr1STdwZVdpX5AzyZUzBfpj9sYDhvKykfB1VqiqUc1F36rMJCBH3Y7X4Y2XYk6o",
  "key28": "461qWM94euAfSqghv6NYu8oDmJ3DbsLDFkr6VAkML7pRynbMruQweffGHdQndy3Y2rqfRVtCS63E5oSYsT5BFvSt",
  "key29": "42eqGVcpfXFCD1aJhpizzq8dvCYDFd8vcYNj12BfvhsZaRwWCvWwCCSLEZahgikUZ7jQpnV7dgQiBhDzgZC4FygS"
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
