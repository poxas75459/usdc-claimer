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
    "2kKCnY1htXhacqy5VAH3dCtuZL2oQ9cDvUAckLG7DTT5SyVD7EeHVbSYvPRLuqQAazR7TypQC8o8oMdBTjYQ61WH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z2c7uqfGbJo9iBDNnpuDJQnJtqLAVXxgbqHKEQwuqxhHXGZB2F6cSqZdXYsGPS6xjggxP5MvG2KmpsWo2yKU6Mw",
  "key1": "3aGPcKXbNWMQuNdn2pZsG64bGLRcp2ADJYJ1t2djTa4XdUKPBY46mcXy4HKn4JmD8W3QmM9vUAZ381daTxsLtMBx",
  "key2": "5mSNSvMi8iT7FbgNPzFYw3UdssNMcfzYXS8dR7XRuZWfTSSCxDoyrC9ERB9TLUJw4mBb52mgKWdZjA8CsyHfMDnp",
  "key3": "4PgTBYr2aWfJGv6RJJ95hMR3tN6vaLJkKivbg7dds2mw45BwwNQpwJi9tMP72upMr4ws8gXDAmmSC2S1mCtMA14M",
  "key4": "3iAvWA5u6GdkacrkHZZEkjmsiygQUmvhJUivHLZxHtTNKGT2HynC6SdnHoyHx88G8dTwjVvJZdDAnnC76sA1tjTc",
  "key5": "24kF579cPtmDEG8ve3rMcEsR75NxB2rzg6pixGbr3Xaq2FnS9HWRuE9nY4GGVqEd5mhT3XRQyGSioAbCYsmctgmd",
  "key6": "3m7eDotcPhABNZiH4Nqi49Csiffy9YJDFkDqtVCN3Y4hizmqToDfsB8xpbTqcqURHhkQ2TYtv5fUEHG1tqAsqhqc",
  "key7": "CcHvDHkLqVzUeNCLZRAozADCg5QFrBoKEQCUqpRM1PRgcCZgf7EZMU15yPnExD2TSBxZvWpKQC6MQL6ZV95MUPP",
  "key8": "5oS5iDubXJHa67Boo14TyfKAWZmPyTvhaeoNeKAdhBPELrUkSw8XLVrypwYK4ATX3eVTD4Ab8Z342xjDkvPQuXYY",
  "key9": "2iLbMerv9PLgYYcVmM4J5AgQnMbd4hjjbLvUzyxpivTKorVUwPcMzcJY66sVapPG3E9dEBoknxFKfEZ7t4qUPbdB",
  "key10": "3HgTXhatUANdtQuFkxaefXYoUBbXBqjqLcDG7mryvXbiJuWDRVv4WAo1zaVFk5nhMP8jFPvew1aYcKEVe8QXsNyo",
  "key11": "34XcmPrF1rB7rQRfbBkMF8eR3ce9khbMuoUZig27Tg8uxEzS8GdPmazTAzciy23bs8F3YW6rPofvPE19RXsmWWb4",
  "key12": "5EUPDG39HYbpW9Usuep5xrrRJBHSAUigfQpFzvzUFHKhWr9MEFMELRHbUNeADpCskwTe9EhkXUvYeWTVqmpcdizf",
  "key13": "5ztjVPvf3VVF4YZ6Ufm2EKT6kqCmiJKzCFRZMudaoFycWdzryMMFbTERGZtaskupwATqgBuhWF47J92xyRnGygeh",
  "key14": "2src6wj9HmoRzUgPe5pdLpijYvhZt4eJxr6BoqhnvTfBKHykDh2n8APq4DwVwegRNgZggdD4EJDHCDievQzMZsA8",
  "key15": "5FjWx5CDsd91T5eZUdzFi4CYTbzuiLDmYRhsKxapxFGGVVTb8hjS9iCUGvUBL2cTWyRzZ7ogGYm628nWLCtynSXx",
  "key16": "52RnEGzMnNEKXkL9RbF4SR8EpidT5K9uexx7V17MrKYnZjzjc3JSruFP2NY68B2R6sK3PXbZYbGYWvPStDVEWp4k",
  "key17": "2k8rhkSc3Q1EzxqqxSsSdnpmCQHmuhcTyNufsFoVccUJciSq4UBHMGKbTiEnm2sstRcuLLK2ZqK87ZKHy4ZQBv89",
  "key18": "BHAsEKQvZj17utnSkjaVdYVqk1wu31LKWuFJZ3yTE1Ds2CLQ4nN3qA82mFBuKpRe8tyzF4WFJDVB6asH11gFzpH",
  "key19": "32zqwWSazvsxaqR3zp27JNnSc6iJCQ1JVzMXk6z9AgEs4qoDpdnvS64ojRR7FH4vftBZj3gx4QJM6Nk7FqcYx4tP",
  "key20": "jBrMTXPg2r4x8pKCHMWHg2YCk8dKFwQB5c3S6YgfKnEyF4EsQLpkMgQj7rwKiMSFfd3T2zFNFAugspD5Q82kaUB",
  "key21": "5UBqHPAcYRK4QdBV115JQ9WvvrGDEVCUy7apCmPdc7o1M9zGEHBJ4QJ3eM58xUbUmfYvCCrBf9XZ7KFcJaMETP4V",
  "key22": "5ZTkm79DbmcutzrRoJYzZuSbY3P5HjnKhVpa9CpNG7ixrKQ7cm61qaspjT49nKe3JEHRqNJnu2yjRPgibNZNuLoF",
  "key23": "31UdQRLG1XEQzD68dRZ8JcymXaPa4TbixnRdZWzCGHKFtEmWjS7CxU4jJzUKhNeAxvLAv53Mpkuwo7ewTMPaisyf",
  "key24": "G1nXN1QrD1v4nd4qNYciwkF2xGjSVQu5NdaieUtiiwt6mvi9Re59hhXYc6HDGGippLER5at4YXvJTJfixQaqVV3",
  "key25": "4ooRq8KMaPZvcYkBGqLMWS1Qt8JwEcYJmanWNwi44odfjepGnpn2a6GtkRQrMVgkiGqxybmd2z3zzaHWEuNm4ZZU",
  "key26": "2ToGkXDEvSpgM8AchsQT18CK4xLsDeZ4Ro4beTCGQXpH8tBvToF7n1DftJCvqZWyGyT2bg3f9Bm1D1ysHUWJuGj2",
  "key27": "5E4GcjSiD5a6QqZ27aCr3VZ3uqRQ6LHo3MSVdd7j7woe8BSSr5PfVWq6iJc5kUBAhtiiWfDMBTrYJp5Y68gcaUmi",
  "key28": "4imZpd5dpArCgxnbJ9CdNTGhLqecFvG7gYMuiFoLZsfv5Xz3p7qzG24yzAgfXHCZrnrkArbqfamxyvwE4x9xibUw",
  "key29": "4cDSFrwVbFx2UMQYp9pocyBMKvUCMprG8LesKriY2JodRatoMGV6uRT2fr7b53HFoakyYSTc3mSeJhXs1d4VyqtC",
  "key30": "2RZCvcWp8BM3ia6xPcitxSCSQACozAGucaieeR25dCm7MsoQmfDKqB6ou6ERBBoM51w1CtP5JZir6HMErbP9WuKk",
  "key31": "2Uszk7yYut294qcXq753tiAJhUrC7EwPzfWN86CbiEmBYDTXpuMW1VRvNbuELXTMx2qG47FDU8q7vGbZuT11CDR3"
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
