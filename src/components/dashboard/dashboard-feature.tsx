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
    "4ZvbWZJnb67HTHjAXRDrDisfZrBp4pevZwGk7JND1fCKskHoRfu9eC8RCHpFgePsKk42JP6wEKj4pp4oQJx5B1ds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HzVE2LmNjAwCUKoj5Ca5XhkQKiZ1xPP5reEDuduwDd6TFGPBHwj34xtHwFwWjCWWYiBHkfwZKzJCAKQMXeakpaX",
  "key1": "5f2t5hgDDNAVMm9t7XX29ZWB3mRfzzszmmqPdGcACu9FKgiHJUiFAspMAYrGxi8PNsikPKbyCyawb2qFMAdXpGKE",
  "key2": "5QveHv1zMZ7b3y5gR6K7LHfTo4hGyZGT9z4LHrytZdLozNZwcqbPhq5v15FQYUWsUFDHUBphdc4U6tK4ct39J4Ms",
  "key3": "3bXXWJttKa76QdY6t8uVnxZP3vJqqUGVCC2xFvKuxPmDSAz5yi8ukwsgCs78Yy7su9CLv9vSiHGaH1zAuZ44wEmE",
  "key4": "5cMUDN6YLchP2n8Ciw3rsUJE6MvcfunQcUd7LwYGw3p73tXUSKjhrgWUAWSe5F9B7LvGysYDdCAkkvME6dKdTN3v",
  "key5": "wj35SkVwvA5Y7cBydSjh5PbiVTiMEHemVFbkd54UWF2ucktRDdfbsRyFR2gHKzNLGDYSMAaUSHxGFTwE1nH5dFf",
  "key6": "8zEJZ8tTvAAUVjaSVUsvCAKjWxgHqqhgAerNsdy9hU2cSUoa4x3h4X2VPtwVmDnWb6bjnHioTz3N3pdZcijBYDo",
  "key7": "5vamAfJB8QeopKwEu3VKN3CsDEYsQw55JYJMmZXv98Yaf4tPjmm3rSrjStnKH7TdqSKo3xHHkZjLqxoBCqxAQHyx",
  "key8": "4hAwisM9FQWrHFoVNanWk6GCuNBb6HwQRDt8kAdjnXrKK9bJ4wsckEv1dwh55ViVMkjfmJPKMTTWhyifdvX6NLx7",
  "key9": "495KsYhNovDDGHdBGzpdVp3R6TyUUrtGJTpssGCcG4Gwuaiu1uSDrbLKQbrErXDhfsCeqFqeBRx8v5KZHhaVSYVu",
  "key10": "7oAyd45YNNwN3mFdJpy4wEaj3v8MMtM2NBjx2T2u7jfKhcic9u1994LCkZ13wvRXaajcrcWcUu2BQUAGRQWpus2",
  "key11": "5mzFvGWwgh6Vrz22Px9AtuyWCUYQpoQDngqbGuzfoSaf1mRUGUF6JNe5MQAW1JGNovRmK7PfnE6Efe8N7V27m2sK",
  "key12": "5BJce354zueh8XWkNJWXrhP6RddqMvAkpgo7MTZcb54WTUK3XwUtijykfTzHJPJfRNqCFfHPf5a8jYnfu3J5amnh",
  "key13": "2RNeuCUgZUvDGJ9VKvWkZTBm8j2QV484zuzrm63U5ffTX5MKC9PXxrVkLY5N87jzM9CbQ1WrtgPEavoqBirEK1tW",
  "key14": "5m73jHgGSCnYFKMcVSjyfmHL2DE2UdXSeAWbJaxaXgX7yTnQZbawfcuimr7ZxM3Qm9Xuv7ZPaabBMNHxzY5WkwLM",
  "key15": "2VmRJbfm4fBq8HgCV9cfYwxTkot9n8cvDLyv7RJmLkZQAPmibxjrxkUMk4hQeW8Ag13CfmvXQnpnfrKinWsnuNUM",
  "key16": "5WzVPnfL16ms8ZHqvdsPnDTDipxvfr3LJWWjKkH19tjAvoiCu9ewLZ24q1VnRTPfa9yHmrxB1uNotxwpyFpo9hDU",
  "key17": "5BiRZB6H6UsaPmjgJpamXr5psLfggasYK4p5vHuAjyaCeMYBaR185DuWDdSWBijfeFLkbFaNXnQeUrgnyttuRkfN",
  "key18": "4fpBdcVRfyxDx85or78wZxwUaArF2dxjZr5Nvd44ZPQML2eKGT1qUxBP7MADUVk7LzrKAqN4yWBeqkdEdEVoSZJz",
  "key19": "3F1PzZ8VfENJBP7ZyAzm6PR69TRCdeCSfb2rGvV2LniBLC2z3FWXmSHSAzDfk9cxECjNMMMetQFtifFkxYSq22sc",
  "key20": "3og94do8WPD2ZLDUsHVn6xCjt92tcYAXSM4GsvJbqyppA3mNC1sgm6DpdxB3RmmZ3CxdjdTobpeSs358pjwFt4mK",
  "key21": "5nbvwpcuHSx5MwfR4WZY2g7RhfgL3eboxmtUGBFxyw9Zdo24WKzzAaHM6kRQXzSHgdyKThjbn5BwPz1vf4mQbnHe",
  "key22": "522YK7eew33efimWKnotUiPknYcKXf761cv29xswnBb8YFw78en6oLdyr3HJHxNHBS9evGVvK2rqvGUUvapraXFf",
  "key23": "22G94uyJXo84y6CE8NMkhmfTDXSYcj4cYCYWMPFJdWnSaN1mZfyPqmBtJhpmNrNgotUDHFksGYSUv4P7VESw5AmH",
  "key24": "46b7FU3xdWLYt87p8vpya4MSCasbCpYqwk7GEfvsTkTWvGUn7ebGvaEYF1VbEemLHFaKHzt4rANnNuSv4QnKWfau",
  "key25": "45S9hTRMJMDtGMDv18nhQTJKtURfbwCZXdrNHgfaLGDU4989rkqcoSW736KeZdqyCkXttcw8Y22VAhbeB89HfDwH",
  "key26": "PcGTaCuexsBYcQ1bUSAQeMQGX19TjD4f4faHvkPPueYiVMDiJ3obPkNtN2TW5UPjguN6dsg1C5AqHAY3iFsF9w9"
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
