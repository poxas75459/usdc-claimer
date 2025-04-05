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
    "4gGrE7GXgYUSby98oPkQLnKStGnEhvTmALQpS6RUHp46PmPCuQKCdegswVy6SDXeigYehRwq3SPQ4zNiqKhb1MRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EmrHMBTzXGToqwWFntJBVostFxntxdHNs3bc4wSDs1LM7ajdWGDUiYZvGJoRwVqRFmxgPJq5gZpjvjCPComwQZi",
  "key1": "3Zs1wfRJqdBpfwGgdpbBcnG4MKho89AU25qge8MXE1Vzq4GqaRVPuqZFUs1nMmXpb6iJ5GJg9pqiDyBnf1hka2g9",
  "key2": "iiDtJ1qbboRzpNf5AFafqe9xhk2Ft8X7uhwSLpQj53qpXryKaeQJE5uSBpA9RMAz8gTP72BbyxXBT3fu8QC2cvD",
  "key3": "5cbbjS9s7pceYSpXEVPg7kgd235mwPY6H6f9XKiEoic7tVE1acaQqJSmDULmuT9xG5wCCXhGWREiKtjzcLHd7729",
  "key4": "wxYEdvzMZ3oi4D4PQ22XtGnmkVGDtJ7m4EWRZi3qxQQUnoQmiSWGwCun6jFP9kXXaRdeAtBcJQ3o2VxaS1rMWuZ",
  "key5": "28DMp9L1Bnt6ARvhCixj1KdeBRnqhA7x4tvwSqVc3s12bT8j1N4YFYYCLRKNmdrec759JwiTyTBejnRZMsT48ssb",
  "key6": "4vZhkSeFH5RCyJj8LoMEMjjUTu5wSHCbvvnh2w6kPCYrwrZdZhcbvuYB55ZL4Jcn8KCazMxT1zMVVks3xgPuGZRN",
  "key7": "547MeedoNgpGze8hJgiCGqczn9242s8B9UofAoLtk61rEBSq9tuWbexYriHMMXaiT2ne9Fftxxii9C2ngoiPhw21",
  "key8": "5ZTz2BMXkFoaobe1ViNBywYFsBDxNRmdbcDaJq6TAgL1a9dEW4TyRNRzquJfAQEV7k2433he9VpYU3HvT9o99h6Z",
  "key9": "45juk5vRQaWKVrk7tNQDNDRf4xkQsKzfRLtrbvSmBv4PCGSetfNyUrUsr56tnn1LTaua5UAQCwRiXSK16zT6sCh8",
  "key10": "P2FaNDGmgN7AKXGHSNGmnZ9T5rk4BJNRZaRvu5cRGzJKf8XEXue6GV8FCsYtyEyiEDWdwNgDVG8DVcvwYg62qY7",
  "key11": "2WCLnxmyxiB41updvufwHqfT2ydfz2nFzeBWLUmGMbxkqtiVb88yH4C2sztYGQTxdSywZkE4pjSpmBEChu6U5SZZ",
  "key12": "R6av4vCjkQhaWQgdr6MKDRven8YkiYWtpgNd4ymVGfNzRC6sL5AC7MXSpUYuUHGJkrT68MSf9bhsqAtuFh11x8c",
  "key13": "2P7F7UMjRCGjBGpSuTax9iaB7Zmu63cm3aPtFDy5cCrHMrRS7P3A1vbeYL4Fjfq7se6nWmL8LdznDaonecMr3XpW",
  "key14": "2x7maE5W854gi5dHVYFUSzm3BJYuxrBDaSetR3CSWVYNgCdC74GGXgUAWGpod2wBF3fhs9wA94jw2SamLHSUV2sb",
  "key15": "66bxv8gbhk3eUEgHCv3CHfMi5WA27NVoghkDh9T85spWX1rRfVXVauT2uZbC7MX7KJ61RnCwYmXDso8M5VibMGoV",
  "key16": "4vDWkdQqzKv3SG4yHg8giWCXckW435jRzMUEU6zPh8VEXApioX4PXDbB7GFvSDKDNbEr9e18Y4t26azj1iNS3mU3",
  "key17": "2AEELycrSiTJP3ceJWjDUKVBxujPRsiFQfd6WubFDnvfxE1Q8i2t94LNDhxLSyF6PomS4rqiwuU2Yj6HoCzDHEdH",
  "key18": "MaR34E1L795RHpQMAbBGa1jExSs9otW16pG16xZhHMinS1fTo97i69DUuPr5a4JmPNqxzHhzakfzXZkVevjcge5",
  "key19": "4XbjSJibQfxJ37NyNHZ6E3muDuehnugrgBeRDmnCaVYaN35gCiP53Aye82H6rBU1FN2xY3hThJtvZE7cFQaCvqAP",
  "key20": "3xmu6cXGgYkUfAbBeK1PL9jLDspwp1y7S5JKokrPfDxDsZEsDAUp23DZhJYeBx6WGdbqrAhgNj8h7od7KneYyTj8",
  "key21": "5NUe2TzYbJS1vHreHKSyd8cNRJ3HbZKUWZYY9n2Nq6N7iAXonTwSmsKyCFns1HHVvyob6joBELsxBSKuQjxRBewH",
  "key22": "2xyNSH5wVhc1cTNYKQiFUQN7vD9mim4gEtzY77M5tkagnzSB9ufK4YUEWevo1AprCLmgeZqaXR1NP8VsuAtrL6rx",
  "key23": "3YRzT7izUaEJSYHC7idQPCkibaM1q5aUfUX9wD2G7DF9VDYfHdL6AP2pbnQPEK2wCfKS6xA1qDTrP2FqSvgDXzKY",
  "key24": "5oHJJWQDQPTzWVsooe3B8NFyfMNnrNTAwTagcKAKdTAFfbYNBRxyoKmoeHtuVdLDuCLDGcavyjNx1Nk9B58Hb8Mj",
  "key25": "tQRM4fDDBWJnFDS3fF3e6rFJSL9PYmqvsxTpr7AuuaY5hELfoY3ta8vm5PRDuBMCjPKJBFCCF4CLavsVRXGTYiJ",
  "key26": "2DvE3cksB8M5set8BL25PB1K1tk5fYosRix1ojaDpWvrhkZbFaenFNmxXQPMvg6yL8Rmbj2Bu4VBws8eQRnpHyJD",
  "key27": "xnhSXSAPgoYA9JiznmtdJwMEhgxGkHQ6L9LrKmDVRtz358CkxRFVS8oyKpSDoz2E6Np2cvhsGZZ9E1UbVUq3gnp",
  "key28": "3y6H8jGFwfGt31VUegkRox9tXGhHQE44qno2boSir3mfXGWGnS1FtuiTw9s8jfFkpbYpWFmzvB4QAEue8vW1oc4G",
  "key29": "Enw7NpvNwK3G5ZECy1M9LjqhmRQmCrnPFrvJMiKSFVKdeSqzAajXnc8PFYdmxzb6H2SFjywxGqps13zN5xiRzJZ"
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
