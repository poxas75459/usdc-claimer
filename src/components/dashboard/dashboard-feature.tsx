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
    "3HQSms9txwfbpRdudFPDbCLpQ2xxwTwnbtyMAr3fhqFuryQbGvXQ4tvxZWFcFRL88r5xkvq4yRRrqVc17ZTUK1RA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DiBvYhrk87vGLsPkmufKMeCK84QMK9KK17i5CpQfEyNd68mcp23mWLMJurtYWACUM2LWGKPza8ShgyniMci4uYJ",
  "key1": "3xiVXYhu4dF6xjtS3iLmwC65eNj8UDBo2eGiTfybm1JzeZUPZh4of4cZNzLZ7Deo1veZ6SPYyENKy8d3jk3xvvrv",
  "key2": "GycSiBUAixhMdt1xKGzV3CKpkZ6sq2AxHQMZotDnkSYZhEVxYqr8WLRYdKfCstAouAbKzJnxGbzfzhQasw4RdLT",
  "key3": "4ZryZXEnkQzRvEiSrX7rpjDtQDntAtPZrh9CHE6Gu3iizqYdpeQ6cAqhhZStUY9p4PXuwp4xMxCwNBrx9fddiNEf",
  "key4": "5FU9QKDjZYcFdbrcD8kqYnYfQYJ92WBKbc9XScsypaZxP9PosehBmPzBhsJFwYqoN9FW466i3nQxmERaonVXcQM8",
  "key5": "2WNJMa3VGnx9VFCqLhRWVn3iBeN4A9ocw2tB5s1nGPPcQZJYWmBhc6dAQhqQb9eMoL5dp9DZiLVBp7kK4XmDuzo3",
  "key6": "2r4RbNSj2DHzA8WkLFcKzi493EpH2fHMP8irFMTWLRguxJP38htaHxpbKyQK5fPQaSSE85ujrZ4YXb18db6BLLyP",
  "key7": "vCA59NGQY15QHdxgYLZrN1imyCafxoxCg3L1u9gDFAw5sYqXjogun48EsX4QPEDNkYEfTvGs5Uj6ujF6L5iFRYc",
  "key8": "2nz7DVHBRyHsyhu4yYq1Feuqx5DYLkcSvQygasnb3Y853pBnrHgqCih5Hyzcg2zunQAbJBTjAz7yg3oDafL8kbx2",
  "key9": "2tNrsmDboi3L76Lt5Ar8a2Kxw2CMpTDx4TghqtccMhRYGP8CkNTrMppgNoPwvntSHseCfT2fvi6WMTGZsyhBm8ua",
  "key10": "n7DBKQYUK4ow8mhsmZFkprdbQTCg2rF77V1pXHvqtPt7UoeydyLsDToRiVYto1KT3hgsLdxz8bYcxrnHMc5atCS",
  "key11": "47HPkqFz47w4phDb6sJh9mqcu3jyQdj82e8pwMMzsmviRfBZvfv44HSBhWVJgk9nz4kebbServ27zSwkdkKYXaev",
  "key12": "4731emtJRPhT9GaWzHjfR63RopaUZovgYdAFdyLMi59vqnWoFTeZvvHkwDFysob2CWhqZpwDJ33sFVd4qSxgsSMM",
  "key13": "42eHR7BkpR9hKQvsrtHFbnnAEXZ7NZQzAESzvyBLKMpAocckx9iiNKygQ1nnoZVizAJ3VTHtb4Purv7M6pPgoGRq",
  "key14": "SQFpdetsAz7xYj977vejRyZK3tk3iEfJ9NfciMdKvZ9r3om58dgsdvMsvwQXjvZs9deoZ7bFy7M6mAjPGhr67cK",
  "key15": "352tr2CWqPH3fC33o2PE1hrKqjJfxiVgxbAPFNfVmdtHLxkXZnk3JXZpdMPb7bYs5aBG9j6h4RAKBTaZV2V8Wu5L",
  "key16": "27pFmEDsF2cpwcVyt7G1PsR2PRmNQ6VwCwcNsWtxaXvGMcKs6uM4RW4TR22rLur4sUNFptnXANn4GCgXUxbAo7aC",
  "key17": "PUgTmj4RM4bvT9fLNqSWoV9zjBKQTieWVAvQrgcoDdpW3mMGBQQXd8B9kxXuFzYQwq9ctn6RERBgRusb8Z7LPun",
  "key18": "4ZMqd3FT5Lck6TVGq662UNNtC7iKUSdny1gs217Nr6b4jWLihytCvpA1f88UG7CtZ35Zs8uU9Z9rvgFD129umVBn",
  "key19": "4gpVQCKyRR5DSkp7fQYGQK6BVxPbftod46qaW8a83XQb3Jy8gff9kZw3JHdareaNhWm1rsoPwGSZ8tcmnvUPNa7G",
  "key20": "4vB86TrJGBHBWeX73YnSCseJnccHd7xFnucR7XbQejXQo4etGDjXCJQ8ZAh2FUiEdvTivtkJmuof9jY1BVF9RWnW",
  "key21": "5AQHrfEcR67PcNP5bdRYVGNpiodi4fVKHBXguyv66HgqQjUgXQ1hbzm86vSdLmBxfU84iYumS1wypKoQB6xvCASR",
  "key22": "5gcufBaAFACimdFtfqvYv6HHKFPKw5143DHFLc8p2cYfm8LsQZ9LvJ9jgPTN9V6aJ4S4WDYgs5De6AsW942rKsX7",
  "key23": "25DUubmjNA8ungzKbxrnqKgTcrM2b69f3cEVjGBjk3jmwB1o2JVrovTGgnNERXkpmLgjMpbZuq3agC1ymCVZnkm3",
  "key24": "4DozYE9hEUYVQG8J4tew3MywwYNYz81u552AuroVnHMmX3Viuc6cp6NWoquQ3AaVQrtiGaDXvs14BLr7s4YQNR4x",
  "key25": "Gi7q9f2N8npwW4gAVS9UUHdsgy4nCPK1ZTLwWxhfA6ytdDBQU1AQRPSWg1DPEEsAL35qcmGfARtAnPbUo7wPEcH",
  "key26": "3rfAQU5KeZ89AXgEavfejhHYXzLuP3FbQkjmXH6CnWwJVpxVeihN7kwM8N6XA58kVm8BwmA4g3Pnu8nhbvAEJjfY",
  "key27": "szjv7YweyVDLxu66hpNswzRsph6X2Ld5PAzDqgvrxsiUsikQd4q9ppK15aE3hEdGJUrYMLXrbuMtwBnGW3BWbdu",
  "key28": "Y4eB8BXt9RmxDyiZraM2W2JCKi92qs8uh3cAfRSqvNRmuHqia5Ltg6ctDw1QQz3obNLQVswKETcgdvH63ECVNP2",
  "key29": "3RWQR9rAbcCTegtVHM1XTiL1oAboe7HdG6wfKcu9aAKnEPLCYQaGpmMRt52MjCGZjZPXtm2ScVevZpT5PHU6csLR",
  "key30": "4VwdirpmFVyzNWhFRDccAxqM727zzXGw7R8z1rQHn4YFPZ2deJAExZKQh9oP1nN386eYSj3Msc2ehT9zoJgg7ifL",
  "key31": "oQEpYmyr93qCCxRiL5jCUni1D4yNHyqBSeBHXWaMHKJkgvi4Ldb4oe2BJ2EAyGuf5sPZ9A4QNULF7tED4CGYnh6",
  "key32": "2LcY6EUAUKAymKP1KHULRkqniSAhYvm4rpoFeBpS286DHfvwUfnBEY3GG7aaejt5rKyEwWoAgKW8CzaLRbF7uYTY",
  "key33": "64rxf4PvDg5SCR2j4Cc9en4oSghNguB7pXpw9r8skLPCGsvtKd5N66MXJdv5RhdbqvxhCaM6ptgCANQ6QjCEgpwV",
  "key34": "3FkRSK4VXpNAxnHAThsQEszWPPoiuCGwD5Nm2PpmezBJ6ticDBTTkTMQbwqn65VZW68Foa4QNV6txQJncsYxzGzC",
  "key35": "3Mq3kskpemexzqvVDRGxLXqJT2Kv7wj47k1c8zM8cTR4VcoskFNdcU1eQnhbwrEmx5fEd1tgk4XoPxFQmeGQHKv6",
  "key36": "aDXbU73ApKrYHUAvfCvcSB7XCVz9whhNHnNZCTSemgEYZ3mUJww3GJHZrijjxLQDfVKPUM7Sy4DeVkPSicks1Xf",
  "key37": "3vUUCa2tCW2bVfXsyGyS6AzYHEPC6yEUj47X5JsRYSYvc4JuMSZsdwMJro4g4i58MmzRA3Aqnw4M34AnW9yGSh3i",
  "key38": "4Kd6dzUv4RPPbMLYFbnWNGjmomuxM1N9Za4hhfyTAFCzzoKGUAXB7SvuAfY1JgFFQPFnQBgLDBG1vV8ygjSkszye",
  "key39": "2APckGqqudFr48eZwBN4Mi9NzWK4UhMQsAeT31HDNvjvb3xkoxZBdhtc95AEx2sKGxNJyFzSKMyde3PicK9Qd5Fj",
  "key40": "4SPixdPtt4g1ezpSe1rm5bYHgUUTZaoPdbsCw7iC94RzE85gFAANL8d5iFrQu2E359WJmJyPfpwHCuLxvsXLQRmc",
  "key41": "4HZ2bkW4KrMatZom7ehtQkYwX4dAhpBM3GMmSPoFSGz8hSfgM7cmjv87ifda9uhSuAaMzyXtgjjWHxi6vKioafhf",
  "key42": "64T7dSuDjhVpVNs8XqkgksHS55ghSn3bx9RE2YnKvPQsYPSGbLYvBNthnNN61XG11tTFm7SNABcFBjPdXpqVcxSA",
  "key43": "4iFCocM3y9x8UsoxtdeHi6SGKAMkfpy2gaE2d7JVbPjK5TRyyXsEZtj8kZuQLvWLhbnTMyUHXzpxcMyceGVjz9CE",
  "key44": "4TTzhcX11bfWv7Dc72gAvNUV9EMvn2oGhVnVKHzbGppZGZQYfRV3ubfq1gngX2pk68GLVAvhJYqzssp2PsaWNybU",
  "key45": "2UQv5TxR8osoBoUM2Fqxyx11r81KdgMFs5dmfxZuCUnwA1ARqpCcAqrtLP4v2zS6XxMqPbhG8MY2zSB1up6zY7gh",
  "key46": "5bFWcLmDrLCLTEM27WNB6RQJDbxG6ExACV6H9t2GYm2rfXH1sN7npi7RqW43iRAFGsWsZgsBj671eZTMbcM1cHoi",
  "key47": "94K1SQftF8LeZUa9QpJiUKJbbu4ApPCyyT2UU4Qsud6RkngbyDJSBVojLv3nWcm2TuzJuh579QGMxekhUZoQoTk",
  "key48": "2h9a6wWtxcEfr4ZsoNF5f4TNfQ1QJhUpLiDngxWZgQE1uMLYiVEvd1EBKT4pMcausDs89i2JTgxRAWYJNbUyWCjU",
  "key49": "4g48fNvCEjBQW8KVXSbe5CFLQ1Wxs85C8e6koStMdbsduJcRh8dtPZL9itCvWXpA4NPTGNEE6GVWGZLHrxjj8197"
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
