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
    "3ZUjD5RLfCzpj1PRjQUuJ15MfGkKYZzxKU7mGgJEZsL5h7SRCS9PiHktN3j1ZFS711vKuVbUb67YBW1RwHM3WmxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54PdMNVwVY3FQGLqYxpozME3zduvRcczgXsmk5FXakcdLt5Xs2yG7gFwrfijJFEDPmui8WhjE73X1f4PS6xMjpPK",
  "key1": "DxsHkKEu5VP2zwQ1KbQH89rpec82QfB1AtNy3fKcpVG6WkJizTcqNDpZ78aopMmaPLdpirfBmRdGfv13NJQMNRS",
  "key2": "2kZbHkdJMd9Sjzi5FFXnTRXdkfTqbf96m5LMFmYgg2soB24S7EJKGPmJGHyFjZcYowtGNGsVCEjGEtdehgygCgmf",
  "key3": "4ZGUQcY9RmuyiyuzgJ4eReNHTbFphmB2DzTddn1qbJHYqXYKabfRJUSPiZf4jDE1ZF6TFFKYgB9HoNguzqNxeSQ6",
  "key4": "3Cx8GD8DDSwY6nc7LytMujvkPX4oq4iKAjiPvn8mXWp4xeFkaouYCvKDoYyC4foj2V536cKg55Ci8Kem2LKyfSbF",
  "key5": "4T2jGyDLrNqMBnXdfYz2ByRCrcfrXqfHERePXYK9PrGEtwnparXob5VG1t6wFyWQqTzLua5nyhnELRHAfQoBtmhY",
  "key6": "5TcZGAU7vcNSkaDi84En89CGSaE5e2QhTqJNTSNDVS5egKs1hF7jmaP9dtZRJ1yk7RRaMfMkvcZ8V33KsQkJvKnc",
  "key7": "2PYcpk4KQVmWptqQ68rCRYS66HjHnoVPH7Bcunau5PLKHuiDFVfy4R68FyRfgwehQmvCkZt8J5efsi2Lom1FsfLu",
  "key8": "5QkMjhgAhrZ7bjVW2QgVYMmuZ46ach59wVAv9YjHMAmnUWQWyc7jgjxthFDi7RXmLmmyDKrGw5Frt2xqzKFpNSRn",
  "key9": "3rq5rUfG5VQcw4WiHLV6GHwWhct2EQUE5vFbHt361WTEsXerR9JkkVbXJcp3GP3J6AbNrXr1AYjmAqvaiG7AkEkM",
  "key10": "5WRGchRYg79Uupj2sg4h1WVppTE58RoNJ2j3CfTcrfAgri7SP8e6YL4YfB4CQBKojBXNQ94edJZrhSXos7xMXtQy",
  "key11": "52T6HJXpx3ZWD7Qz8b2fdZc8AFWK8PDVHCFG4KxFoheeWwGhWvMfFEre5agbbYR7E3N4ubBgokr6JHBgsnjbjbiX",
  "key12": "2bHxuDapHwZsBqgvgoxqFxHEUqiNDqYC4cB1N4TP1c15zq4q6dMbxUHGqPiMRpD2ZLF6wHScVjqpuMz73yaio4Ca",
  "key13": "2UatE3goyDQzr8hm5f7GEhPmYpPUgBdXdvHuWMTMTZ85EjWCp9rvnKssfnc44Eq7B3WEtrfFAyEeE74ctnnxcdd9",
  "key14": "5EavdsNVVdDLFQy7yaQJHynW6VcjD4hmFFfecD4jm9piSBcynkGU4AhMrPfr6NQwGRo9wm31SEFLtxv1aUaWeCro",
  "key15": "269rn8dWtzE3xyo1nngtT9DLX4CE3XvE35XkJDgqYKr8scKbsQujMJUtWw86H1k1K7QXiGTHRzwd1f2oV3JhFL1W",
  "key16": "2hbJXSpVq3oWK99kw4rkHK5yhtYg1Lo587XSPZAbfAE2xmw3rQ1C9NBorRnWDfYonRMwuU7iHd3zv6nffzwFSdL3",
  "key17": "63Q8seqcGVvzs1U3niY8Q5jsd8ppoD9hxzAQHUCFnnEb7jZpbq8F1mizLq8968KVV4DfbtcVT8JGL5UWKps7xviR",
  "key18": "4p3di3c7vRs9kDfKBk5YTFueYypG4h7AVxnoDrS4oJW9sM4FGQGLwBxhGxjknyu3ok4SooYW2zX5WqG6sjpMADSB",
  "key19": "pY5f2stfJ5CDXNMus56BJxSzVHfQMHfnWyNaHHiYReeXsiGd1xsfbWncHFSwQkWLfj8CtG4PDA3LK4rmuUrtNZP",
  "key20": "rSKLwhmVCArwrzmXbx3LHtYQWLSj9WcLvXc3msrvKqVX1aNRjPyDYWP8b2TXjry7TWTNiVw7aGmVXFz9XwyX9WC",
  "key21": "Q1GdmFJy8BidB2Trr5QkSvesoJLN2kM89FK1uGDBB3TApXAfAkntAM1wYVYUn2NPi2zpZ2XV728jVKJ7MHU2gzh",
  "key22": "2AtycmiZmyU2ySdaroUK5A8GQeaw4d3bVuYdvVvwFVav7352YzcfxeaEuP8YRYJuPYxJkqUGLnxubcwKPnsyb5v6",
  "key23": "3EB39M8R1ua6Zbq6ANJ4z2tovCS9JG7gYBXPLPE1SbZopn8kq641dG4kpVLzhJ5NAchZeu5suFGuBz6mVhjTXmQV",
  "key24": "3joKaCMTwA6vqMx8w5xYREnaY4YWS93tQRbseKuc3uWzvvaDjAq7PfS3Gjv7jRjhTzvbp4wprm3eA3YiRgy4yGxf",
  "key25": "MLV2SKViidVSDmdSZwd6GK421avpr5vU3W7k63bvM7ePYS57V7iKaxaAS4fjNhN3daMAgAzxTWgq8zWWdT2dfJK",
  "key26": "62VadqQ9bkXYA8jEEwJ3sD9DZ2aJ1uyCD76fXAad9LxUesokQwayBg7sumNYHjJrP8zdcSyM7fjmfSCmV7CdyL9m",
  "key27": "3KxuELnvmM8fouGsSR5AuDutp8AxPas128PVpQqkPMZ8LnRACTHkdg5TpotGy2kmQMY1jh1FVdH6A8pyVNGDaxKj",
  "key28": "9BDPtQ9gF3hjv2vNYRvE7PnscJ9PJBodTPeEaWtpTf2gx9o9bwAph5gNUzCYQJUtrr81TAz2e75RMheEJPMAWh9"
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
