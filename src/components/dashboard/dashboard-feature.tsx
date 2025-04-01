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
    "32HXRR9b1KovUi5tRuEYN7BxvHZjyWtZEQHeMKBEDrGnzCfwFnmd8EzrbsohvVpq8wPMmFBPodi7dKBEQ4AEjgps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sm7VQsyKKDB9zr2YRGZ1j241fWirqATe5DSb7NG1dPcL2Z8YDkfMpkzEEP5NHMykkE792983kjetdYt1jnF5kJG",
  "key1": "3aRwizr6BL7mA93DMvEXbevscGcqKgGj5v1wPeHieheoxFuaYnizuNU8tVRxTwfm6FaVQL59fUWCnR41tDD3adUL",
  "key2": "5BXdvCoAsL39MtyVnSKQ8oVvvsqApjsi1H436zehm2J9ChFhVgUKQZFgy5H7rqjqjcvQBpyWNeCvEZhqL7wSwCrv",
  "key3": "5nzA8uJnMGynXXXuFevif5ohc4w2uPboQrMiTGLJ8d4NQsKbG4X5fXQTG7GzhmmbYSqv2jUTJfroVx9AJsXZ1TBg",
  "key4": "27VWEbftzN1wBgFKFhdY6LA5DeigjZBkUCdDNQjxoVYPaGwdhzpizurcapUVXiNS6AH8hEHAesfzXvxf55zZA8Rw",
  "key5": "5SkeoAKqety4ysKgV9Y58vztvqmGjkhtH5W78htA7kvAzCeQ7nKPQkyHLeFhPUdefoVmTZnELt66ERXcA37bEPtD",
  "key6": "3BPrg3ccFJYqwWQUkSeySNSdumJp3LMMkWN7QBodPcHt4mawW4Eg8nTmmyrPczeCfDbQVouWnCoGbp4ai5AvgeDQ",
  "key7": "2ZR2ZfBWFdtS5JNPentANVYXK5R97h5th3Dk4pgznHcUqv5wkwz77duwCY3BXts3ngRfGEZuSUpXS16d6jEXB9LD",
  "key8": "3wCUBP2SdNNPo48bHKeALEejq4hR7A17SaFJifm5xbgKWDdjsjdVQYTNz5sm1ohHYUWbygyUpcguFmUtYZHAU4vC",
  "key9": "2n1M5PSBptyHjsYAte7ZKuAFQq6L9PrznKPrJTsEvrEteZXfaCvtcLBEjpPLqmYSh8WNx62YzhHLYfnEUyumbsen",
  "key10": "3NW4rXQV3WKR9SeF6ty2SVKeZTZWh4cffFRHSo2Rp53DCkkbC8UFdPomb1nkbgBSf39BRw4uJtnyVw7PKz276Tqm",
  "key11": "3HVzfJSPLMRarWpRNrVC7U68XkQ8vewDxUMw2g4zLYh3GEQHq6X6RHkrRZwcnv28GSWWDEtkdiT7amxiiqn9pnhc",
  "key12": "3giygVDqDwPPVvhxKPMt82B2QCy2T3RmmU7ysQMTvX3HXGAUwRNNnPRukn1XgdU8u9AmET5Ta6PCEULS3Pptgxyb",
  "key13": "55U74Yc7HBa66tkjf2KsZQfsmwMzLXCXishakpaXBGE25BKohCkHuZEeqfYo9pqrcumXgZ2vDwaMXug1tiANhMcp",
  "key14": "2fapRaAK8jwgxekvmqn3Zb62Sns1t26cDkDqzS7fq5y1UHdaDu5XWQagxPNkFoejFCxFC6yfzraCbB8ov3Cmmzok",
  "key15": "2E4tX7zxwW2VXDxgFhuhyLxKEcTpY6yeaEi8jTyCksdcbKQHGxQEfVK2PFhfMw3yHbkaYXNRXsejLf9PBg2iw9p8",
  "key16": "NNe94ufVZnVXG4rbvypcghtrps2j8so96tgXqMxsDqNsAVM6rCaC8p13VCCPoX7pMUBxvE8p7QjaxS5nJnekuXY",
  "key17": "2GR1ENNAaqaf8HTWyXruutUjgvG3moZtKbp6Pe5hAptw16iY9knHi69M1jmYMUXKu9fC5ogVX7Jzqd8X88ryBX4s",
  "key18": "4wQV4wkRgtzPzWWGj2mBa8tFvMPRnttaeFCiipocumuDudcktFovoQMEGhxQc89cu1EhsYkkUPp3YK3n5dZARSLo",
  "key19": "juVpxLE4tdMLutZ47fUb2gJFvzpa2mERPNNwBfB5D6MxZ6vCyFv2snn1csoL2tbcWazYyVqoQSbRJYco9heDpV3",
  "key20": "3YKv3FBPttjtjdbWaFcwLHjAaaPTG2KwtBnsPmxeYqVzGh8BSg5xQ3TEJGeTfepxj3nuwsHrvE7hx7K9Yr8A4Axd",
  "key21": "389tscaJYUVRLhqt47auVEGnCggnNw1u92kpwGb8UYiRHvLeuTgJ7fauGJkA2QZugtQgeUhgr3XRMsgE8U1ACVM3",
  "key22": "TXkhp6eecXBLMEMQXdU6Nt3SfxVarTwAGd5nzVyG4SdGukQXpmQzufGfEnWodZ1rFJqyzNu2LeTzcZBVgyT6M2n",
  "key23": "4a7pR5K5WWHVa33FNZ6dqskQSsRxGqsZpZFgvCRzJ8WssVdRn7xsENFVeFWLCqCRjUyqmuBQKj3iBoVvEyce7XF5",
  "key24": "2KsytbUPffqzQ8paFFK9mxcWZsksRpmBU2zpv8JpMt2ULSPJBKNtK5WNi18dpyY2VWJrxACnE3TrtGKf3yN7i3im",
  "key25": "4DLdSKqoHhDqNWhGF3EVsNcopem5PnmL6i4d412yYDcZSbe7XJfo76Pqjm2FjuQ4Yo7rD9edDSEdFyVPoFXXWSsC",
  "key26": "47HHpTezz6njxrVVJCfVExHYRvUiKxhv4TxkxdNKznvoK8gJniPnjeyopSTqiEEqbUaTsmCkSUBoEoxRUXqSn2wh"
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
