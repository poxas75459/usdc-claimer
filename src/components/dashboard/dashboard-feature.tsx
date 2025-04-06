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
    "4vmcbaMQJoFNdjbpLRTzXNd6FEJciL5nq4BtfxQc5So3ydCyLeGJoPjKK9s9tKcv2mV18Sq8W31ESSfmXgtd8mwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hW39vajahEcB47xv1Ny77urFop8rSmKCpE8SCTGTKoxD5nJStcCnUKPeZzhr6p47K1vTdWf2ELeRDC9Cq1T9nMR",
  "key1": "2cj8EemgJ4kaJHeG4L31X6ZTMKKzRpD4kNoQwiM8SdVuGvRqLXgCSxLbYpKUov1ABH75cv2Ru9Vh5Kbz9LniMyV1",
  "key2": "7RMjcDUWaJcT5yduHFrGjfwPipiKpmC9dcFV35QkUbHBbBUQfAsEqRD9ho5oDLJWTMLPdHh7xbwSwfdh3iaXVEK",
  "key3": "W1LYnwrtwggpb2oR7FP3jt8A1oR33nonNFJUnekcRSee3d1usAMCpKfGqZKLcnswLiBYjpXvN7V1YWqFaxYx7Pt",
  "key4": "3tZtr2rBQimYELBfKbcHmmWmnN1fXvoxcgYxkdKXeu78e6jZpvBqc7bap1TiTLxdLLsg3j4gtePxBY4B5F272GkM",
  "key5": "37o5qAXUVBn43RYfbQF9oL46KfTe2B3PCXqSStr6ET2ymC4Hc9r2rumPWQNSBwDXoDrtvPAEMEk19Bo79AhZ3YNg",
  "key6": "3XYhk5u42RL4KGQD5p7d9NU5d4mjyQ2yUcguYEivDV2SyyfmL7f9uW4dSQsnG4WKGvw7dYrowAca2Ek1YkWcamym",
  "key7": "2m4DMdh71Nkd9YiJ1q6bfPg3Y2YRTa44Q7YdTqRUa7pKYeUyYnx8mfjRXDvTuqbsXyGkzeryyAdtdNs54oTRoo8E",
  "key8": "3zbB998nvY8dWX5RAvHeTzMCsjCronKPKGa4FwvRFw3rrA2t9uwdq7T3s7isjTQSwCDrsx8JaMj6tFmb4Aq22oGE",
  "key9": "296XeRxZA552DSWxqtGnWF429zymncnVDSkCLxmXe6LM8ZYwxnASyompytYxVu6wdDdTPNksoG1PLTmmTEtFZfo3",
  "key10": "3mAt8ZWb26DXws7mr79VpGWXBWVR43RNE48rY75tN6DdygSVD9qsoPfL52G1zpPwdQANKzBrNFw6YfZkJ1ckhXRs",
  "key11": "63hLfzs8F6Cewj28LFfpWaVop6jH6T4zrpGCAu42xeDzAyYiztRfLivZuCZvv3cnsNXbvZoF8BvFGa75zbC818eg",
  "key12": "36hafUWWjkKDcUETxDVSN1kQer1VdZoZhm5tep2aZtEheAZaybpeYZWTAoMTXw7p64w9MRGLAEp4qcSxRFhmBaBz",
  "key13": "yZyC5pEJGLnaYZBZCHk781rve3FtiKHR8FurbVtjSMiUf87myxukmKkLuyQzmWq3Dv1XqpWsdV8AneEjcCGpjod",
  "key14": "2UgyhDmWkT3PPvdta8AW3szCzZviPze6cCaeCk9DpR65qkZoU47s974mT3gtUkYMKjJDoaDhDa5t1WG6Hz9N7GAH",
  "key15": "4umbvtzw9MFap2aYR6cjCv9g63hkPox9HwwG1YASJBQKLwwqFu7EnQjrEyVuP7Pvxr6DnQddfDjy2rVt7qzQDfwg",
  "key16": "3GsRxuRMQAfk793PVZDJdWw4km8PXnAXVJUNGLXZSY3c9n7TXYJgS39rakJDoZddGiEnXhNxNoJUj76y8Jm7SFuB",
  "key17": "5tBtB1HRX41obbBWusWKngUWBAtAeHhDR6V8UDCx2SfT6nrzi9c98nEgwB981j4CMaPjbkanZyiu8RdrF3TEQBCH",
  "key18": "4Z2jfanxadMPb16jZK4EhqdRmaR2Db78rtnUga8WVLBdNA196GuyfEhtHLCL4hhJNG27kt17jQ1tFaWxZridTPwb",
  "key19": "4fNo6YJErZTDSYmSuWuPbhmxV5yya75ra5f3k1WdmbfXhUK3ZGJhYVdszAsYTWxi35jovsNyYrwVhgPkgDQZESfn",
  "key20": "4T7zRuA5iWyezuFRXddTnDhK3YHbr1vC16K2J9texEQHmJR2HGX1dp2VQzKAzU3K3exooYhs5EF36S9xvR9dSNTV",
  "key21": "3HWpLc7boWPRu6rUpK4NYgan9jAFd1UKzuNMyctKx65HLgGfNwWm6kHAWvXqLKsHVTkVUUbqG6eQUgwrEAqjy7LV",
  "key22": "ZX63VSkxXHogVvwGrva4Hn9f5NCwV4WC976D7ExSyRqog86a1gQpWihLHAbqigeieQGgsPYC8dNSTrYWsNA2QDT",
  "key23": "5MLMjvYX1oJpxDQuQJQdywZNUQCVR4seZsotHiXCqyikKP5HcwWVno191zggBb4rWfX3g7sNvfsmZzRCdm6fiK54",
  "key24": "4jT6s18hLJdrParFe7vYKDNeRRbpswvQZUfX7btApKzNPkyBNsZZnPF29ddzmahjodagUsmhLYfs2N7dkDJQpswL",
  "key25": "2fjPbYCSZMkWQ2FQfR4LCM3zEj8JLAR3Xcq4wtTV7sYodEF5kad7vcgVJKSC6HQZhTw792QSRBcC6H6uay83KBFy"
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
