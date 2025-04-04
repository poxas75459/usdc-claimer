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
    "5TzB3nnmFXUspCGGAuvBuHrFfDB44XJgrrkDseeYhv6fyhnZtN4FQbg2KddC9Lc84qwLZPM6d7BE5hVXdSqu8KrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LS8xitoHntLE6YXiZFEeY5Map4bgrnpKJjhwwJuQjney5eYD7vSPVR5j5VeZCwz6eCtzX4PNXXFtCQDr12zUyV7",
  "key1": "5PJVk78sNgLZScQaovFybNkC9G8tCUZDNnGTSwPY5BpW9XZbx4E8giGmrqHxqV7Rsp9U2Q7XqN2gzTubELvKdrQM",
  "key2": "25gqbRDrDYzZtyL5iQxNpVJg7H6MrWBSSxeje1etSULoxxuhmJitF3N1HbqJaQTmaGsbLYqFTRpZ5Rr2aqcBHZQF",
  "key3": "31EXH38cBYQ2kP2spYAuG7Ud4K2ZDNuhKsii4fobyXsRDsjLdKk1ZCLq47VAXKKtNhVH7Driz2y5cJkfwhBhDyTb",
  "key4": "3wQipjzPDLaTptpbyXU86tTiUynSnDJnxbNw8Cp16GWU7GdYMSdkPsz45Tfq1nWG9KaooUNSu2SLaUBzmZgQhXb3",
  "key5": "5miqYrzK4XgvGuGPfbr5866CdsoSfwvxCL9miV3xmD7gPGzyt7S1f2XpCbk5JU8GFKe4XYKdGSAjv6JTZAnF1wD9",
  "key6": "3gQqpWACikn8SBsqmZEPcAzeafdLb6SMGRxinVDdd1af7dLGsTWa2Hx64HGTsiEGNWzeL6T3tKMQ36zQCCT8m4Xr",
  "key7": "53oPBEAxBcbRH5RHJ8KTnczHyZgY9KFbd5Vx2KBLbtQdF5QF3yPG6RRywbvc9oE2RgeJfyifuVAJomxB1ZL9CxUL",
  "key8": "5e3gVb1dFUcEDn4hgbUuUDtcYMsKpEBcME4jgaji9Jm23E4f3HYDuidKQTx2wrjRTMsNYxP7ZD8XNvejstF88Gk3",
  "key9": "58EEBC6mfYAgkbhQwZbN2KcPRi8e4ibz5Aa1u1vqZhKAhq4SY9ha6oTyb2PBL5hcdSKzGxH73maLG1hgyD2uDcNi",
  "key10": "4q2Md9P6gSZhUqs4HvTfmUqUvgEPoCmrYjYRBpz8ZDaZdLs6r78fr9DjHKLy8xPzQ3mL9qG5FXXvQrbUJHvndedN",
  "key11": "5aUuH7U3guX6PszYufb8qJSPept4FrthdETxiQv1Jt2zxa7HEVe5R6PG3UU5mfPwgpqaRE7ukbp9ov3i2FJF5J7C",
  "key12": "2PnRhPi5xnQ1VxRLur729jJkRykFpo5fRfRmvEfwwRgcQv3sL77zQp7i1A9YjhAtWXCd6d6AqyKRYDS6BpGQZLvB",
  "key13": "4jYM7csXjca6RXPbq2soXtkZip5kt9P6DdLBHV1m67X3zRT5pyw8gYdN6QRrG7GAqmfoRY6HJC6x2tBWC3t5T2N",
  "key14": "4qKj4qs6DfVMFrkkuBX3fdjka92UU4cHDL4V4G9H2aBSMvfVKVZ5Kz26srgLjJbSyuQjn7j9MAM7BN91WrxKf7xa",
  "key15": "5aoXrFdQrm6AhFD5D3egbLwTNyRheYnQoX1smsZHYjb5U1PoLK3QB8JEBt2iZru9WEfunC6VhjFZTQHvEvfi5r51",
  "key16": "QW4Kkgm8GTx4wib1tiSZu7Ni5qnWjS6oiK9vuRTf2BNWASRFZsfXMi5pEmUqVdPtGQSf4o2Ft6QCPfyegbSKjUF",
  "key17": "2Ykf4qL9iZNjLCYkxjGRtT7gi6QvQHjsDP6JEcSdb3ztNcH4Q3GSAuuGtY8b8RpRBVMEv52FqMeLdgWTKDkvhj4C",
  "key18": "JDqQ5sypbKcV8GmTzTHEyM14Trmk7chtdMmb3SweZTeMLhWFEquoS7m2XckULEAa42Ein1rFaDhA1nKC4bRGDUc",
  "key19": "5Xd8PpvTQNm1q4A6jd4DSgWQY8emEG95jVz7rPh4zeqRcyLUtRYfcsaLcsEPTESBtdF69tF2bjyNUz7rjsiRfZYo",
  "key20": "3eyQvMjXLK4EmS8s5xLwfwUsix4esSZXNL7vAAdKdZzEorzL7vNivgGUFBBjyKxEErJrcb8Y54tbgBrU28NWPYBZ",
  "key21": "Dk4Kr4wQ46d4tNA2KYwqi7a2ifLcezSbnAzF7GpkFTWVStKxeZbkGbsMMFV89HkSoFaFCoaJhrWEamaevwubfix",
  "key22": "T814Qz4KFWMwfbQAskteifBeaFCVeYQ5T276NbkMwQpxPkovWhnLgHzUoi3K6QTmLaL2KWndwJpjdsXcP7WdJMh",
  "key23": "3LKKhJME59P3BfAwLzvZY4cWbUswnJNAk7T3tmF5BDQSqsrxPhjh26bkgpq2vaQ6cK4x9CuKP9Sx2KzrJPvYKBAN",
  "key24": "3D8c1QzYnMwhBvEsrCg4QwAKPYRyCeEjLVuMdx3bGFwGvRuWM8WusbD4ZThhZFV2UBkcQkNVTs5Dkc8oDz39YjA4",
  "key25": "4QSyGfTPPhQCKEX7xyHRL33CzyAUxLWzDAWC2rx1ijGpv1uTSfUA1yAEpEr8TVrMFVv6nAkv8PEEvNie8rLCAXYa"
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
