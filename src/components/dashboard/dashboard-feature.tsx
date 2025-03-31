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
    "5tMLaWGWmHReMTQNBWUQMPVwfLXonwe34aNkH6sk17LYAfLRXUh3B7iZVKcGc1TuenDkKmvhTFXCYLy8SaUXRpp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cEhpVGqetwsZAvQXeXLqUFun1ebhB5vgFvVkJLU2s4MAff7L74sy2osG92FLbG2LR3RndohfFCBWUJsCBm7ZkCr",
  "key1": "bDFLLRyLe6rAXNKsiaLKYbPHCjLx3yFb2wyFHJDKNhppurp179UFDyQJJAPA8bFhuoQVMF3xKuEmiTVUN1n5r4o",
  "key2": "LQGf5BS52QTGhvixRc96exuZPDEfowpZfHYqE1BwYpGgkgV4BQUkE2giGidgaSDbUiGF2knitCWAMZQKQVWuCV3",
  "key3": "2JHKMh5fjLxN3H9cnoFWzPRDJAVZSZ3RqzbRSuWWU1QcNm2dbZcSoJ6rbrirksPMgn38BoQ9QE2jbyqvJmu7jAUm",
  "key4": "3PNBF9vByPmvjekncqU6gtzKBCz1XHjpSnENbk4DQ9LVcJdtBCwmuzySdYjUCGrAmGicq1ZBihbFCCsuTknkvury",
  "key5": "xQFbYbuxjkS9KsefZihvaLNetAaJ4eSuVLL9UL6GP4TfLQ18eiQYmKjX554ut3uKxBF754JNsdi4AQMMdKYoFaR",
  "key6": "2MEB4tGsa3vfvDad31aJUoPuKRctzs3sbNPwoKMrvyQazCV81BxLg3wJJP1xv9oZ76HinPM73CLhhvomhLrE2xU5",
  "key7": "4vfEUL8on4AppWFrLmzPUS8vyeu2bugejq5QH4eDoQXxj7G9FJCmNzDUu74pQKv8KQnziaWCKNjHQm3eA1ghYAnp",
  "key8": "4whJHW5uByy6i39QUQLrM6a74tTVrvbWh2gXLVCri5JEeZLvALA8LrRJVNf1kpcsdfwJZaUTdtZuMzCvC5J5n6qF",
  "key9": "63PEsCSn6xUTFzuJh4xMKfdyXWv4qrxX9opWwtyQMAk867UVNBMRuLkm3K8CU63wQMxd1EGjq2rEsLGBW4ApzZD3",
  "key10": "578H5LrA2K3QcD934nrDBxDiNNMfE67Lo9kKtTRZLePFa3dXwV1gj9J92bmbNfr3k86FxtXhJzB9zzBuwLf2c4c3",
  "key11": "2vmhz7GuXedWL9advtRBDJLCFGQYJ1twkrdnbkfYccEasouUsrc9DF7pF5PEs97vaq8b2hUxNXUZxr8FNLJxirbx",
  "key12": "3BBYBGDpWntAZft6FepdwW3HStoPYSoqA4hvTj24A9qT8kTuCDgGWKJ76kiJRPnRS5f96afjDiauECNCaCSFcTvf",
  "key13": "2JrsHZPYmtSxb1iFzMFEPF6zMWKVdEFvH2NJ4m5Ga5n7koAGXsPTZBCe1svF7oiinrGrgDo7wLShYmYpiUzhpTFT",
  "key14": "4vadJ1StJgXHknH4D3bwrkshxpeJcmHckXzKKmZRas3uNuG1p7gMzwAuGcatRcaxXisi5SJrpxZkPFUmPnQi2xDb",
  "key15": "ZrrpX1yktoVqR4Merg6b4M7mSe4QAe8yqBhYAB7vFsvEm3KSxEuoM2duPqS5PB3McWXguBESxemwFZxJrRGkJRL",
  "key16": "22Spa6KLie1cuog2KByhAXU3D1ANbi47XyWSQDTnyFcQ99DtawhTrYhA2iuxtqdpDWXVqjVDpASH5LXqeZG1R7qm",
  "key17": "4atGZeFGdioCHqty9RGgWKmTFzMVjkoEBCrgjMBp9NctNiNqtMZEvUiWhyqUN2LsMusUq9hG3QXdhY8fzVKPUmip",
  "key18": "2oTzhwEd59GyhqEWsdziWQwZGNvMrrDmfpjPBLebvCQt2PvKZ7gs7J183mhaQYL3vSGDZn9HDwnoCfbipvEPhixZ",
  "key19": "2GsBUtSNLuk3jsPnJ3f389wRkq4bsamPLjJGtNyTT4Vc1YVxz3mvG7XxCtMnMSxEeXyGuJLBDHotFQx36uggL17u",
  "key20": "oLyNTLgJCjcagZepHwpvQ3tbvovjjNoB57wRy7YKzZ99RDQ9P24hCxuyWbML669Lsk8vtRpnTefwRZ1jH7ipC8K",
  "key21": "3AK2bFAP1KYDnMRrH1uJbmCYU5GmbEiPpR3xmqXn18CzKAgwAVbE2H8oY6VtrUGS2VPRFqGdHa1AXkCqu8PFxJht",
  "key22": "3GLmozRnPmo64H6AUge4tHn89opkA4y8PcRMgN6j25e1Vvn7uaSRxUYNiqUkK9XauNRK4SVTdZppgVwU3Hy8TDGE",
  "key23": "5ArRHrz36RT5cULFCYRn6kKuxATMDt4CepXSbqppcADCwnfL9aniYLbSb66aLKhahhziYuUvS6U74oiy6qWbPHQ8",
  "key24": "24xHkJ3mkTYN5vdUrm3uqumbgTivBWahC4cqzbCmf7pbwYqYCa8kE6mYKnesU1CfGQLVWiN6zMcw9XusYCK3xd8h",
  "key25": "3iz9qSPc62MwVg3Qqs8BfcJWxs6DReJj83f4GUsyvQh18uGv8voqexvRgs7uQenezEtmQfE661W7TM7j4JHX58RX",
  "key26": "5K9AryGD4axK4MzFuWYSesfnaXbF8h2JR1YZqw9jdPF5B4cCMxeUfTj4x7ygmQQy7Yk9W6TkJvHdTokgNnNCf8kM",
  "key27": "4i7815duUHzPDGgS7WhvpHPZHinjsmtCHVWR5ZHbjBNAVUUVdnMew7y1oWL2xE8iSyYGsUVNKgdwVGeNAvLDTYjw"
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
