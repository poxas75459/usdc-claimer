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
    "3TTLnChGg36WXovh9RxnDuHTkmgRvLvJGkupnTzcS4fWiLvR98w6Q7w1VyPotRfyY9BBqXACy1d5vjaM84JuFdpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3777CD1PUb8DrfQKpBiFYfyKp3dRUcgsMCbgnVcX8nbJ9WwXymBHwNqyXak9AARFyppgb6HSgyw16YTxEnjQPxkK",
  "key1": "5HeSD1X2CTWixyZd1RVDj2qq3ntzFtpt2AydN2qJ4CN85EHnTGuQYTgvZUezeUTkMmKCdMmiUCs1NDQW93tpYDou",
  "key2": "3Zhz1VvYdd36WkMzgwo8TrMcD8s5e8FFFGv8759gbFNCbXjys2wxJCU5U8XfJUmHVv1Sg1hXLDeJpWNBQ2mFxjFt",
  "key3": "31sbTG18DDH9JyJUGXrK8AwGKDdP4jU3QDu4UUAQeU4jqGjAjCmWEDrVfZGNQpYvjyrzMbZ5fQJvgMaucfirEC68",
  "key4": "2MYUPba4G2G7v73k4jEHnMP3BJDDoMYXTVHXwUegwqMiLwbcbk7y6KUkw7RrRmm6naDo6UzMAhXVLAhY3JS35xFZ",
  "key5": "2mXFbhEKJLgmzj69opDL23Q7CwAJYfMrhYcfjYY1NQYoYA8cbC1wHDzQmtPfZQ1p2ppLBA6569g9zYQtLkN65rV5",
  "key6": "3FHrL2K9mw3rmqyrfMMgDxreAkjQQ769CGtr9vjpgptLFhPHxvEx8yWmLvbm8WN8vHXDE2eApoA6UmUka8sc8WTb",
  "key7": "363YCAA7sT4esp6HBgCU2BBCxYt2JabjEJF6iBR719jJgtihqQJ4eBjsrQ6xSaMYfuQNjgdqvQwpP24cUNHaEj6g",
  "key8": "4hR9ac3x2uRwQ4zVbQss75BwBd4sEAmD1y5TakYJDRgw8iUcKwUe2Mgi1JgZM6nStLHrD1upazhqavkGLsc8a4Bw",
  "key9": "5S42h5qH48s8JGSMpwoBMfGthTtj9FKweTZP8g4WAkWgzt9CwZRsnVHvgBH4eobu24Szygn12B6s4tYPyogPGdbs",
  "key10": "Rcg7fNJVW2gpvweoHcoqspX4FKHGPhNniEHQpBt1LDatoccSyZH62BP26LmRGixmRNRLARqjJqguzsv2VD9aJNR",
  "key11": "9rF3x1Djp3sPkayCrrSKN2kSMwEGACToWPKLRvTfQKBPnEGXgeibFTyLtYXuVTJzVZDXLARzo7haEVhghZn3EtB",
  "key12": "3D6EXeNAx1Hd9KBD9Jd6jnZB1K2qdwZ1JSVcmXCV9fspLqbCm9p5MPoa7ss5acGRRQtAk4z1woawAwByrpU9iDQT",
  "key13": "5FD8Fjb6Mpg6JLUPjmwHyFrhQE69ojvYaLESQuobAWnhqWXtUJ57Nz7xusPJyMZWXYWk37RrEn7mmxsQwVYC1jan",
  "key14": "4d1Kxx3APoG9i5Zz2xZYyG22AEBeZY5JJsupkvRKRLRvyp57rWHx2tAqdEx79kaCaLLtktHsStNMRjWj8Dwp9G9Z",
  "key15": "3ZsD8EKbDgHP8zF4T8b3A4Pfovfdtkeh5N4yr7oCxtecBTAG8mWyUrzBFTN6yXdUZAaAbZLKBdxyaxLE623gXGSJ",
  "key16": "3RQCoHK39n1vKskBapbRitAp2cPJLsLHiFw24oeC1uZBqz1Gn4mwvVbgtJQVG9gXwGAeqEFgCuJbYEmgcHKbMRzE",
  "key17": "WxQi8Up4i4e6TwFGD7pkQ9qV9sjBuY2fn53qCGzw1afwCP6DGB6J4A9cGtgirRCFdgZSkULLHDjKUmJzPRAuC65",
  "key18": "eZaB63kJLoybae999Y8Z9gbevc9hFeG6uuE3ueyFJYdNkUianC7NMSRq1pLzFQSuipXyq8ytvDDTKSwREiMStwt",
  "key19": "4t8pqcKWfFpgZ7kUyP5tdiLnLHjCGk5PghcDrwgPGsQwHzvHtZaCxo45uGSfaD6f756gXVyPsU5fKzSD82eGDJKw",
  "key20": "5S8FMk9eep5gR3CnLTiQEhD3nPxucJC1wDEBWhqP7CDe2prk1vAzjut292Lgre1A5n5B5NtKwuFY3TA3X99R1ik3",
  "key21": "3DffjRirxsdh8FftSt9WpguD5ofQDekCBguLRXueYAt68JDRnRX5V5ekNFnv8iCuftshZssVxtcQYQdQYauStgrZ",
  "key22": "3Qx6F6z9fYExJCqcAVQhzC4Rbm9MuiQTgTMhVKYpq8v8DFH2LkWXSQ18xArgPmCD5tfpHdpcaCwacyuPKvPVZjaS",
  "key23": "LSt3WLbiifpKMRSneLTKezi7JorurMrpbRVuNAstFvS8n1n3T9g6kBSELHbCgGaJAUCwDXXp21SmG9fp35crr51",
  "key24": "5itQgsbYSdZKoAiEaUEmU23Fsy65CnTnnSs8SQQw87hujrb6hbMNSso1Cdc7hLN7xmeFKkJscH9ggc92j2XseKTK",
  "key25": "FQ3uPoQqWGvNrAkxsJcAd2RdFq6CQzyVvbs791bJDFVZVv5ukoAJ69QBUDKPHYG7C3RPiYpKyz6qo5NFg1iJrbu",
  "key26": "5mc3hPPDPhq9AP4F82EnH5W2pca5cJJuTuRAwhU7DkkyJ5vM8yQ8qji7kHqn5xFeDjYz4inUyRPk9fr9GxdceVbb",
  "key27": "2hK2zFQN1fwswfhUKRf76AuMwBdv2Yw9FB3Js3sg5pfcxgxyfbJuqT752fwtTbeKhYszgvHD1n8eEqpdM9eiCZd",
  "key28": "2SPbdaCbEZawEF7FHN2gMjhAypLdKfvC7vxNgYXAzwiZvxZ3ftBBnqdiqMeumrs81BNJDrtvuocfhxpiKJV84UTu"
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
