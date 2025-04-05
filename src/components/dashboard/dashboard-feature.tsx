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
    "2dF4CUhTukWg6S7MCKkZBTukmP2kSktNgVnBwNAnnhqS9bNiGpQbDARp54Jg8YVHoF1j4LL8r17XFo3PMMKLtbAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4arAm3Z4GC9mBk4gvDJ4c1TXNY7cm7iTKfzt3FtUCa9T31yBbFNjf1X5vsd4WZscd1B77V947wbZJN6J1cNRWJ8n",
  "key1": "MpJko6WJW8pEXwuiz7M97HteKgBhR3FqgSpeJpx7bjfjRXMUR1hNGrcH8WF5eVvCJPreetPJ8etciThXbPogjgm",
  "key2": "4ZNx2exQjFpBrC39suSfD7DML6EjDS78oTkGjtpT9aCGyZgRoBPWtSdE8Haxr3fv9JNmqyEzPoaPid1EFBNdJYjy",
  "key3": "5TnT9NFqXvZhYtNqdAeMHh3UHyxGvUXkNr2tE6tayfxqqVoc7AfebDsSYswCSVBDFZHJnxVXG4qdzjddm1QhKbrq",
  "key4": "3MVTWUpNSRmU8paYGPgQPRR9E9YcUKKAq8zPcZCyNjiY4STXyJdB8mfRkw67MjQjxt5QFdLfbE6A3U7kGZCWW9Ww",
  "key5": "5jbu7XWCEAyMfpeiPDX9a6yDcta5cUssbfxEkqhqRo5Q9JQVkYrNpjDoVni4fEPZMfBU3mJeUE3nSJ9M8pL5uaet",
  "key6": "4xG7Ghegm4v84BX9gcafnHKt5ucfqGMhGPFNnPboiHLXaRaFkuD5V9ykuWCmhKrNKHG7KidX7gtwqDatucewsqVD",
  "key7": "4gvggYxa6nTnS1SN4XrzTC7AVBhsUKW2DPMQ1mWZ99ibzfvZRFxNi7AG8mbaZ293nNLW196wpEoyBkcVfGQ96GSs",
  "key8": "3GDCLYupdvB6abj67LDvcAN3KJUM1p3PqDfiBSZrPk62a2SLzpWujeP8mezVdodZvGTaW8FmZrCsobsQFCDxQ1YC",
  "key9": "K95BYLZ5766pZPqiGcKZXcJGhivPaBHfhBpS9ix8Qx83whUMPF1LXbapwwxekqRroDbAXbMdhrHYjUwZ4NBrpLQ",
  "key10": "5tSQFx8eZ6MZPqr2YqAAp3WCSdv2LkpyX1znQFu83cfz765Cnb7Rh5nYQuzSZCTbny48NBVxUcZhYt5yztgtF37m",
  "key11": "3R5GTPF2TYpXJfYkina3p5yJFEfHBBTqk58EkENEASZzqy4tLFcqmdv55aSvwfRo1QkRLwMnCPbGrrv7dLuaCqH5",
  "key12": "4KppBVBSJCjJwj4Axc5vvWpNcBxervsfCffBXLgxg7YfXP1Qwc7bdysKzaf8khTTbUAQ6ZoBLkmxPHrJ68Q22iqA",
  "key13": "3RZFWkZAiWwMnc6qe5zL1QjDVXXiNMTwuWdxemscP8zQPYUHMHzdADQE2s31BWYSJT7yLtZ6o2z8apSByjBMxEgd",
  "key14": "PMCZpq7s1hemgMLuBd3qMA9oYGu1yocWuRxgpNQRJcd4mCyTvVERz8XZzefXvX1ABc9cC2qTC5rqrPB7PZdNpAt",
  "key15": "F8oqRW7CNFEgCenKorc3NHvbSmMJ12MT9xdoaEnnKqceCLvLRP9LqPfi3Vt6B8kPUfJx9FDXt7QXCVSi76rCQTF",
  "key16": "475jFTbeAkExqcCX29NPWsvcm7UL3cCo88QVF17kLUxKxWtvRVBVif2uA15oBbpdn6xpFfmGGDGcNuXAAqkB7gFJ",
  "key17": "51HZsF5KtANiKbcynutn4RTN3FTNZ3WZ3CsqhQRjtHhkevwi75ogw116Rh4Tn6r6h5o28EfsoVLj4jd5MKnVNaEK",
  "key18": "28ufjaYimP7EGDeeEHNDrqmpox4DfLjcZpwC5vcXKF98HaJKpAAcAPFahsVqE4Tiy7Vmw7441ztkUmK4ifQ9AHXj",
  "key19": "33V6Ej31tCErhDCjeZeR8cyCPtv3ghtBH4evthxi1QiwjorAGHjRg1MQoAseq9XU8u1fijxG3Dez9aKZwVhq27Xf",
  "key20": "55drHESvQmFEy48MTTAvrR1EqpDH7wiVW25vqB6sfAXGF782SnSwetYEatgeXrsVyQSxTMVSMjA7PSzQUuh5X4c9",
  "key21": "5iMFatR16JK3BANQXPS6cKZSnEjN97Y1cnpoEtChaPyh1fL7PL8CzPwZ3sn1ejN74Xaacq7ahfQx1fa8NMAiEHzM",
  "key22": "3To4c6jM2dRaNdyaksbwoCxLLtbgQPCLMXdshnNqcyKUPEryzThU4SwhiNtQp1uAn9ARViJrgggYaNafPXGT38V5",
  "key23": "2f5Y9Mg8GYXKvXskxf5p16TTJYW7yKT2HZdEinutWCA24HvjXF7LRSGKGuk8uFN2aWzRdNGvVpn9UhRZm3WeSyuZ",
  "key24": "4ukiWzZrc1WNJbs16ByYhXNoUUSVXcioztCXTQ7hHjcQ51PoGjbe1Eo8mGJKgp7Skfxv2oE5FmeRULbfWBRU3AZg",
  "key25": "5HkQBLrKVMTX3yEpxBGj3DqykBNmJ7iiA9AoUqAi4AQfJDVSuVic7yMxUZE1LJWEFWxvXtfjxi8Cp4AdKok99ou8",
  "key26": "2Z8iMqxbYdUinzy3i1VnPgHcJCDWNnFMmFwuVTbf12rRy5jTrBZFvXSgEMoKTrcCgsMPSZMAy152Rwq5on36miHS",
  "key27": "2NNUM3WgQchA14YfiTDwbWJU414XErtT6bUHdsWbCtNArqeL2q3nXS5sQboiKZ34qWxwLWKmNjMBhyUJyTzDbiwy",
  "key28": "V5rGtycoLkU7S8m1CocAMXKDbMkfGKbURUVxKLTtArzD1GHqab8VZnrhqAu364xiKmtB51zTZuHMmScndvbRfLn",
  "key29": "4d4F1G9kdCUZ6G8bS7M6ypLsCMDe6m3RRW5REqPU6CJPjMWSf8rhWgTxe4FkhLrx1bqAqqt6QHCXRzVsT2McrcXD",
  "key30": "PsANjfRpnb7ft784Yc8kgjZQE9GPfLwymZMk6J89cKHQUGq2EWQgDp9SR4WXL3EcieEnxWbBMWUsQiWpQacVG96",
  "key31": "3DvsabFTaY2TeGdvDK8bziXYg2FWMSqwAGRpoTx9G71NjeREmA26PRLPtAfCTPAL7VxBELwcv6WDNwZtu9uL4JBq",
  "key32": "2CxmnRJE8LEmcx676EYDDFfwPpTZyuNkUAnhNr1JbQ293PpbcufRsP7MZ3QJXz7q4DLNzvZnv1eSoANSS74fyKVC",
  "key33": "5Qu7z6ydquBShTfqz1aUpiFmcGg6iu2Xmgkf4BnGnEzvWgDcDxmPtL3qno8W8J5ufSZP7MFxQujTMMbCc2TfkwuV",
  "key34": "5yHPPx7zqtHhCtFyKd9sa2gXvU9x3dksJhSQMPRT731xtfe7oDc4RPstexD1VaCZfkAShnG6LRNgHLiTBEznHfXo"
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
