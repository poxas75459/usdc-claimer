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
    "31i7yH5h6QvpfWj7dTr4CuFAR5bMpk5cpAS7rqJPks9u3LoTLcyMjGptwfUE8CRUj7rjCG9fi5YwrGHszc2NCS22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A711u1pxTiCUgbvQEPupKyNH8SjqDeZ2D94imwdc2dJVdxR1XL65yV6UsBkm9MGnMBkswStKxwnRwkrGreUdhJV",
  "key1": "3Pe472DDNsdfESerWXcuadL6PQSyY77RqSjRpjLK1DmCCi3Wog2koXkdTb4FrqrM4GoeHsNiu4Q3HwoKEuJoCjYn",
  "key2": "4bMXYj4QnQepMhYxGNwZ9B2xwVsf2wXvutNXxd3jB6aWbZ8MaKqMayJGLeGPM2jaxfCRxs6CP6LEranek2GVznYh",
  "key3": "3vMQRpTzNEjDPxr7pjSH4R7xmfPVnm5bDc7AkNtaaX9KgYdagMtsUdwTuykJs3zNuSCF7g2sKqHWhRDVERZzqXUx",
  "key4": "3navsrKQkj8FU1JTitC9kqzsQmeEZVJ7KxRf2JFJAxfhsZVrUJE8nR6UDFwCdqXKtxT4NQ3X2VyT3aUMCMEV3D9B",
  "key5": "4Jqjqzs27iBiwjmppGYPq99noiWoSzbnmJCxemDFq9SZ5v8xQJoKioJ34Pu1KNNyvyCJxPRN5qRfwmCju7kkmdS7",
  "key6": "4hyAwoigVr261d4ZPdh51U5URLBKR4wUY24oEVdiefBMz6EzLW3ZgtRcrppvSWUnceEVphEZSiWoXmyeHufMj9NA",
  "key7": "3SsSK5FzPQcjtU385uD1aidgBuFtyWdogJUM53JHEcXGPwfewLWidr6PjfYj7BTdsPgh6HpqBUc5USzVu5vo8BUQ",
  "key8": "dN3oLWyjBX1PH1MAdkjFLYQWZdRxFBMvMHi2Rieho5cDVLiKRYrrHQJ5Q1gRNMaHNKCtY7gG1VeCWaPwH8M3vd1",
  "key9": "3nMuWytmv13UnmG3nXpTEfdcTGZwWEpEbGtgnneV7qXYV5m7fHqfUcTxSBdoAXT6hFeRQZ4ke12gHoghTwv7Uf6Z",
  "key10": "3SNzQ2RxVraVxAqnW9XR9SsGQYz2rmUG7VASYzdqFHCvggXU7k76jnXN38NHh3JMkyFyvCaD4iUTn6y52uc4huqU",
  "key11": "5Qi3cL48TPe4ED4WViURTEVyitpgpQa5XDwf26vTXJvUsBozMvY8tfgDiShe8Eo7MPevC7X3kpNKSfEwsHabzG8m",
  "key12": "4eGjLHzy4GcNJsPdus9vCxAnyVHd5CErVxXVgZSWcbQcU5quqzb5P3hv29b3W6o1ehEUrLM3tARo8fnzTGR3rKBw",
  "key13": "4YnLm2G6BwFjsbWsRLEGkns1LcCwk3aH5nrGAD44UWdjrGfCmxK72BVvuatYgxxjmcbpcCuSKLAENieYA2C4Lpi4",
  "key14": "dWusmQiPHX7dyFp8PW7o9C3pqgWVYiYmrufaatDyWJC1m684tBXTkFWfwWa2CFzR8LkcbjqmsqauQZN86e48dWo",
  "key15": "33sk4Q5PKcbQaidb7b29G8hKMzAy2M5AE2J5BAyLDfHwrtLT6YqLg2Yp7XsRSZHXAVciuedAJ4JaK3JkZbGKTRWk",
  "key16": "2QNhEqoev86aZSFgRN5EUQscNtDgBsBozwWaBhetFeN1ztDeewWvW7qe6WN5kfc6uCtSY6ewwa2aNakzB9iKhHLZ",
  "key17": "4NuqnT5UDBVAEUjgQaagmqxGbodv8MmG3ccGg4KbKjrfTyJWjWWs5Ang1gEZAkVkgykFaNYtDSNVtoheSyMcVB7W",
  "key18": "5pZSJGKmtMSkzJmtFZCACGuXva3PDwnS1kJA5z8sam82NWQL8pUHcph7n24yEEUfjomKsDDU6tWKytwMsbbNMpqG",
  "key19": "479PFfvsfDGnUA3N1pBLs6DfqtdcwvFYjQGhxEtAxFCxT5zsW4SCJV2DcwjMDcUKc8irGvZEwqzs1U1jFvvZXt1U",
  "key20": "4m53TtBSgaEtPpCa8whcTRX7JjQ5iDwKvcrCNN5LYCKxXjDMWqn3gTK3zSUCcthQmgToxNBGwKJXQhWVWv6frSeH",
  "key21": "5S6EHxbdaLeGyExUozjk3DAPHpxxrJuYzycqTHwTef5L9MZZ9yswvz4LEDna3m36DkB1e9pr4Awvv7aF8yhxxYVE",
  "key22": "3VMS6J9hbmYs3HSrNiLVhNatnFDRmZ82vodqnmNLZJcGA5kfawCj2ULYjzQt942x8kV4v6o6Nik9xpToPevcDFP2",
  "key23": "Q6i22DPJVUrQvK5SmuzfS38rCX7yNWYVqYvpjtWNSSzLyqUYqnHMoz463Ced5YjpewpB1MgdLMdoYkLv8tD5qbE",
  "key24": "5fE3Vc4SKUDyufFH31exdvNbrKcUNJmE6WRA2ahcs4219DwmuRBNCnCR5DCgU4F2tnv5HERLBhfhahDmdJ7uG4r4",
  "key25": "3Bn5kTqUCcWd6td19wUw85MGEDsWdbCaXWmytBAVi2mftDicoqVMqBQqXqE28jGeoqG4hx5Em5hAt8orzR4vnD9t",
  "key26": "3Xs798ttBLYi5TCQ2qo4SNLFsBg5PLECFSS2aP6gEiMKx8jawpV8RwUb4kBnURGcypUtbkMic29Hw7A1xXrxTgk8",
  "key27": "uatCBadeq11QrtH44aAgv79FChEFQBpuJ43DgMFtoPbbsBgeXSAkdxRM6ftCH7Z3Qe341YbkNxtPSiSneGNDBy4"
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
