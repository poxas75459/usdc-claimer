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
    "3xwmXxQ4XdyoR9gvbeAx4MRgW4W1QoELjpLXzwfsrQkv1x8sjSBMibMHTXcYJqykkPPkzGSSCijsKs9yksmdYKg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EbmCrtsT6M2iNVnuRvJV8X9teMfptSd6VDtntQeMBZtj5PP8ugXFdC9k7tubXb2b4p7EkLqyJN7xjNWGJ2LvH3m",
  "key1": "EYUZR7eD55V3RvG3WGXu94VFsG72jZJ4n9Nj55ED6B9ZgCSpBW1jbD5cG8YXPsHhdYS4tgiJFrtoAzoZuPhTiz7",
  "key2": "3N5cARvGWDfSZtz6QsaEw8YSURoxV6B4RvcWWCBWVzymJayXmWV2h84KmTfDjiAn1vgdd3CFJ6fNggrv5A9Y1dkG",
  "key3": "64xgT1Lg1eSgsf6H2t2qtd5FPkbeemw9gju2Hz5twLGXF1hXj8J2tC81vtixVJNdhoqWouQD1bKrE3csCeMoBjpX",
  "key4": "626HnP3kios95W5y7r8n15wZ2ExQEycKY8ayjFmeyc32qBBN1r6sQyLVwB9abfGdy9g2sbewQDCB2LwZ6XVX53XC",
  "key5": "4wEwxzspqMxDkLPKJ6sdks15YFqnVxYvsjtvYqFBebmggjKWPszHXKgfjVLAw7imNjCrkjeArWxxAd6HLAB7hpww",
  "key6": "3uauJc7ec9mLGa8uR9hkBgGhNXq467rh6Hey23hX3RhXvr5b52MQPo6LQALBPLcgBzzwS5ULdjqE5ThwLpZVkbdW",
  "key7": "riwjJLCWvpDcR46PT6gcXvEuKhRAqJ8e2pYyxdvR8kkLJDLMofpPRJ8E2reUqiYaPN2D5WQjnWsWgPk14GokrJ6",
  "key8": "57pcPShNxnYJWit7yJV9D4qBMCCR7KffkjiD63hK7oQCZAX2nZpUuYAi8qn71EUvfUZCn4Y1zAHgUzAh6WTg9UK",
  "key9": "2EXW11jPYoABHfqHWCFdyjhdnsDfuhFnBzJXzAo3n7CCQqVtqMFpZRZ2qhdq2pbXUYjBu5P8EPvunFxQB8wu4cKP",
  "key10": "5HxCEi63L1ipSEsApwyG5gvZ6SKdYReXCQt5KbwEV9HHQD29RRbm2LgDURCtKAwonEwKBsCAsaRBjSwXK8eTnXwo",
  "key11": "3di2vrrgPy76T4cy2cGodV5Bz9oub6XsYx9G55YTNyn9dwSEguCXhLvym8MnurfDxTiVPZdjrCseFLUy6JHJRRTY",
  "key12": "3FBuk9891voh6ULsBqUWr63tgGzcyZFPMYCBh8SM4Ejj6W3Jw6Lz8TCAARkJnpfdGt78HUijHoL9a56Keq4WBYZF",
  "key13": "2k3SDwXmEZqVU5hqNtxgyxDJtwAXS1KbqZiQrijLgsPqA7CKfoYfstiXknVtm1bqE6SavXQaqrc6shhd6caTyhMF",
  "key14": "6ADdSvajo3iZhtR3QfSRKEdd46Fe6NHXf51Wix3riUWkgnxGCfPdMurp5YWPqXRKVURcHq3QrcVcadwAgVcC3ns",
  "key15": "3NKkRdn5Bkv8aQeqGDNr89ip3tRH7h4re7EnWUztYgANjN5afcCC2rBVijs7DS84fjikZvtocLgHyGoMwnf9F7Mm",
  "key16": "3YL1kZPA87q4HpsMQ4HxQDUtEoBVTuHTMh1uMpcc5kTga7ntPGJFFq9vsEGEcbYyrvKzDai8ohSSk4xNtGQMmuKd",
  "key17": "3EMaG7EsGvVLHTTpqhDgr7J1QLBUYQkNokmbi85i8kdFzRYygeEFNnae3EddWj8B5bSJCVkHFjKbWFydS6UHwKvA",
  "key18": "2BDqPexqdh3S6NaaEeD42Ts1RG2qS7tupPqX1BCGKRjNPUybpAg58ebXwtGnwGwQM2etMbFHNx4MEJHbuEcC1uJw",
  "key19": "2eQghKZBVwqCbjAaq7gueXbmNMEJBNRirr81iVGXw7Pff8aJTDzreynZh8emkenuyXr6dNeaq8PzQw1MPVUpbuAG",
  "key20": "37B54LqyrLEMcVBChidv552oMTxPZ99YiaMkHiNyZD95ee7eDdav6gD3oPWjTxLGeGACQEcDtHU3fdM5eHrUic9K",
  "key21": "4X7fUHBojfB6Dy5PXpa6eAmbs6kq3KFVqe5XUhouXboMxMe2ESRXXsWf8SSzg34te2aRggZTtJpM9iG4zCEAexr7",
  "key22": "3ED5stPe5ruh19pL9HhFcF6xJeA29boVieeFWj32coFtZmffsKjBiLpxHzg4aKYDyMWZYD5hSvVV67QM4FCG5JAZ",
  "key23": "vW1vWE3BVrtRfZwRiCreexjjN5K36wyMsoMYZf1UMHnVys23Hwyyp4LVkKc5NvJTFEQWxUKkpXgsCrkJXAh5cjK",
  "key24": "2fVgUDfkWQSJhcRw9Mdv2gtoioXoTGDtS52BqL8tUy7WKqvfRkHR8Sx1fDurmcHb12B9tkvvbSbuJ2ncjcZd7h9U",
  "key25": "5K3YJR7nczB2riqv58XNhcsDR6853Q49PQu6HnbDB6WM35pGWQzuzdhKN9hyPw2brdzy8jVx4ES3caS3vS3tCLEi"
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
