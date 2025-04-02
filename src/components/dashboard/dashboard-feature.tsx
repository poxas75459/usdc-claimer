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
    "4mxp3jmTNnVCojSmmQrj5vLEFUUSrrw9egvwovoVhKLM8SG3YbksDKV16sy9wRnY8HVWHKDJtVTSXsXXKnTMK7Nu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UiXht7sNHRh6aaVETmAjszzFeyjDjQK3GP1EqM8cUuGpbE7crAU2WCLZRKAKMK7PP9X9jEreyrwCNiNydTqGRit",
  "key1": "5PQQnth1xswBdjGeAUs1i3j5Uhychfno8Y6Ske5sNkcpiWaExZ5g1NpQcXwh6iz9pKP9DMv4wQfZuoa3V7pvNabe",
  "key2": "5h8JQWH2BSUjuVMMaDFfP9ZPjMfc3k4G5DRHiAkRHWwVaZqAfCi7frGieVy4i9RioCJuNhhdMdeAiSKioTBb1Neo",
  "key3": "3DmTr9tS3gmTzHca8Y6R7eAunZCBtoVuCKk8uMLmhxt9KhVHXLhcHXPNsDTfhLzNJtk3NRVKoLrGa2GpRRXZvbvg",
  "key4": "3avvWyzcCq9tquFbEUxJg8en2WaRvKpS8dY1JAF1yZF1LD8mA8JW8bqpp5DTPn9sthoxB3Gc3MAQsimDYnVGH1z5",
  "key5": "2jucas78Hv84im4AFZ4SnA6Cpc93kSdJL59XbHcF9KfBfDs1w3V8wRA4MKd3KSoK248cR7EZHB72u2vZ5u11amYx",
  "key6": "4iCy7gLzGbD3GRUdN4Gd8H2mDP4d1Wf6WD6sfb5DEf4U3rt5yeGHT4TKZtbV2iZRgBwFE8JvMgRPrCJkSQehRUgJ",
  "key7": "5T2YrLPW8myxHo3HALVWn9ocMFtaHBiRu6tJSnn5izkXXg1aXB7WAmRA2pU6zqURLxsv3KarrjAU77tC9E7tUvi4",
  "key8": "T1Mn5i2qfdZt2t6vVwsZuVJzGkAsfWggagD33LWTh6QZqsF2aK1Twc5jDhfhakyciEPi6HTygxnaTSKevLgvbNS",
  "key9": "3eujqXYiand2MUP88sRNvc6tsgGuE3bh1HacVKFxcUz4iBMEaFNVrAs9Sonp76MzMkmMFYMGfwcq92arhJxdypae",
  "key10": "3nYyqiWvQEnRanU1uaGyPNCxHmdzcHQJb14xzu8vpDJ2R6cQ1HSJvCB4C9MKTumtgycSgu1YGVuPCzriMFqcR2wJ",
  "key11": "3fH6vaWYT1yTwyzWZbjP8mXNVy8XVUrNgjFHu9nksmR6mdBrwrrYKmwgzaL2zkE7oWucnZGkpSQHMWyDHsdhnDBG",
  "key12": "2KAoqNfP269SZH9KDdvL5YToG2aGPhdB3L88VeGR1VaZaXB5HzDZ7JtQnSPZsj9KzzvbZYZUsUPencYoaEZiqeoj",
  "key13": "d2vUw6t6rVfugbLMb5gEV6nt6jkM2b7eRvL1ugdYxENuWAQwGzAQL3UdigCerJaapjgep4iwCFGibSSgm6CbXkQ",
  "key14": "5TYPHUaFLyWQNMHSFuGqPra9TcuPXt6RpcqrHL88FWhajevRGBGbNemhZSjuKXun8EfsNx5jrCnLCPqg8muCdqao",
  "key15": "2JVg3onJXBg99UCvgRaqWgxHdJ85QPK2mdTfd1ven4Wf9mghP5mrZPKTtSP34ekDjvfb7FRHsVYbfTxVQJkFPd9i",
  "key16": "3GfjtJrhenP74rHgu38EdyssDb7FaLdt8zCK3BtNNi38J6GA6Ve11Qsoh28KE35u68UjfdWaZnATcxpr4u1m62Mh",
  "key17": "3qjM58tPKEZAvcQNb6NbSMfFiT6TfzfZsX93CWhyU3G5KDGE33SL4aL14s9WYdXAGp3YaWmJguQZNvJdrWJpDie3",
  "key18": "37QE79EksJxY1D1yZLuQU86Kf3KsXR1qJ7JtwdyRwopGScKtbsPDAeMRQivPHmXe2WkSNvun4yQZ3jfHMD5fidxi",
  "key19": "34eUEQ7D6BktwjGX2aiSTZXPWpCFLCLwQyPT7JCLFyBWdutrD7dGfxFmr7FBoLwnJzzmyEhzArWr6qEN4HyhegA",
  "key20": "5BqV4ukgssAxLr5VSRkN1KDHRpHFSjePZTYJz5QHKvaYrgboJ1QYskRQRxXXKoCF9S1mp3sHhfVy65y9x3SuqnnX",
  "key21": "4VHPmH5TNGUBzmq3qwFT9B3gwFKQsjQwDYHfXVqZnK2iAxhjNaMmr2SqY9iCD27fRQkov3KpJCvgv8UB1ihjVuNc",
  "key22": "3ZNRRf32PtNfMNQfxxxNNQv16uwPLQYQ7hBhwtGv94UyoWZxMHXqtFcWixmdGrMb7RPzj2mXfGxP9QiWhJmRiuFa",
  "key23": "4w8UXE4kiC2AXc7SJXyTD3Z4cBwKbQL1emaGjDbooFeivczLPBaLniAwVntETbFDbdwPuf1sDqu3w8jZ49pvG9Tm",
  "key24": "2RGSPDYdQEi7W1hq8M3LndkP3oyq6q6ZFk692QzxoFmLFSWG12AG3Lpddgjd6hyf9gpEvRNeM8guVVJS7DYfxSXP",
  "key25": "3g3yLKpeD5avJJhAmed6Mhz22h3RVnmTEx4XzTCHSPPdmkXkmGVXvsFL6oU5HTPnN2GqVxfcgSVzzSzj5Cd4VRQV",
  "key26": "4x5PC2x6WgzhhMRKowatUrr6mhzGAmKEoFYYhfaB7h4SsrhLP5JPBEKWFYt3e5sULaAmCQH9BcyTheBjaiVPCiLM",
  "key27": "54Gzu2nZt1hkB4nidjH7PHDKioYmgY9vLEHyKDCzTDC6wLqDh8463yM3uCEL2V4X9dRQWrp96ttfSNaC9DW7VcSC",
  "key28": "4HFR6w68tfU4Jc7Lfny27ztWmGLHty6dN3oHTd8JMsi3vwVKoxHcNdgZZ5LjpKhsLKQokWJFSWMGTJxiT49PJucZ"
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
