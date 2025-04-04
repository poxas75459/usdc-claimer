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
    "5vdCK1YyUnDE6e8UBNvgfGwWDyopAWz8nFSpEsincbqpa4Fp8BrnFxNXEn4qUUtAa7W23dgWfnn92YZXkDuSAomk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nbRHvGfEnRHHGBqzSfSsxWkG8eSxBen2ng2AV4fdArToS93L15G74qUdHuBaW2MfWoRFRBYc7zmjGCMDLAkHraM",
  "key1": "4TeX381fdEwoz4M3MjnmV5i7r2DS8pnC3gPcMAP4YJNLZWpxiVz1k5zuu2ra6AnTjTNqfDZPZK7Jek3rZbTyU5w2",
  "key2": "5RNFfox6ixULRsC5ozeeo5Qf1sTBRtUaFb1kERMVhQTRkJ5gDPjtPGMZkFZpBHAt5NQeazt1jovWYyzvSQkTiN8p",
  "key3": "kAfYvesLoE4CtjB6hzAtmUd9oiTSoYWRXv1fWik7jGFpdAi7XMPZ9K7zoMGmePCiWuH1wuY8hjecdgBWEZgQQcz",
  "key4": "32kBoiPVLuA99fwM1qaA82SxxYV8pw6BBUVHfBxTZXQmt33AGRc2rwpMfdQHsEThFLbBNvd2owq1y9WhbHiCtQr3",
  "key5": "5dE3A4aRgwUf5GKLEs4u1KByz5zv7Ea3GALiFU6Eap7k53KKLsoKWGPPoUHu9CqLBuSPDHBfEMqxjNXKn9gKz1yq",
  "key6": "zUbTot8xhmvCk37Bki4zp8Afi2q4T7XBmyNVcnN6gfTYts5Wc6PLYQhLdXxazP91E5X54sfHZ4qSwgiarRdoeuG",
  "key7": "4dsaLFNa6B3NFACVsD1WdGGNMVSLWHdEKTifZMiJHpNAsjXbJXcuo36Pfejxo8nr5R1dZf5NktbSXaHobg7GZE4k",
  "key8": "2soExrpBSgpuvmiZJ7Mm9Ggh6AhCDUBkFsF7A6oBsMcKPpYpLcAEiAhwo7yRtdXeCxvHZdGWbj1eDGDGW5SPTqzc",
  "key9": "4QGfY82ZfGBpHQGvKVVyiG5TpftZ7Vg1cnaZvZM3Pwr9GDBk24rv1seJARK24aUfztC3E2XRJpt65psCkDBBEcN9",
  "key10": "5NPd3JmXC8vm4rRAJtxPiBnnVckaUtnWFq6ibu89zVmzUoGBLhBEcy8VkcxCcThi5esYkeVUTQLX8HPH2E9i8ncz",
  "key11": "3dfGju4Do4eDG31vBVgkvh3RrdC7G1kiSqKdSL4HNG9YCJkwPdmNSAru8PXtgnWyumePySGuvLP6yfwJGKfuRNDr",
  "key12": "5jcbdCqNdQjQC6CoBaqkEyWMRBtm8H8tT62Ey4mnjSsQiZw5U9Cxs8Y3WDiMgDoNSKTH934fhxuG8pHEfz6oHKKS",
  "key13": "5YxueXNpSBZZWWNoUKBHKQeYwavJtrXTsukvpZL7UKjCPUWCTW4a2frxLKuRemCwBPu53yNP3keskxBi7teC85Cp",
  "key14": "4ZFtSqbQoB7rEpG6EuCcwZRA9RQfJfjpmRFbeaa8J8YqWyfQwkX8wjnFZwKx9fzDiYPWxyG3qy5vCMnk4zxV4hh1",
  "key15": "28fzCbeAovuoeTfd7Ys2zzfk1M4z6mKTgWky4BHqVA7VbFphsdGUU9xUKLT39MvMyJyqxWNsPVx2CUVVpnfs8eGg",
  "key16": "56XAFdN1WqTUQLVfvg4iWr1TYvEWB2NVabJtFugQfxzanfWgVm68TwfjRZNzev1oPND9xTNVQn5TSskuZ8XanNWL",
  "key17": "2JR9VZDrMQRsE4aXPWGnraaMbeif16gfVKxwHvzPGfXGAt8g21fnvfn2xudjbMPJdUbdSoYSpuYHR1JHzyjJoGBv",
  "key18": "4QF7qiy2DDN1ooVW3hCeR9QBqY9KmQ9nhAQ1tYfYx4EwS3GbNGTnAXYqiqWoVd8R6vHw5P9hPWBJUCrvwmZ95Ps",
  "key19": "3ouyJYfM7w1x1LnqWEkNNcBgGZxkGVXGuXEbUhXWtGYThGeqEk1fVZv3gEH8wj31SnH2sen35SfQuRZWWdDUvzAL",
  "key20": "2HcMKzKWhudDv26Ae9w7SSjDD1KKN7YqtTjUjckohB36qwkXRXr7j8cda4NyouceS4LwWwoHdnFKaoYaWMtpyd3s",
  "key21": "4CZjWkwQieeFtCPhf8jxBNKrzky3TibyHVGMaHmygF1cc1fGptCAxz3f5W5UDsRt6iPF2awWhV3V5R6w47rMtLzs",
  "key22": "3XR7FGiX8kghbsXNUFJRtp2N8U7Z6Q1GrSAnWAAMma9Sgjzn55AXA4qpUxDtZnm9MAemEc19gBfNE3JtdwCY8aPn",
  "key23": "krKG1RDD3bLvucKAH1E1XwhibgL9XVZimgCqn6E2MBN3FnEuKMfEAa4HTqWqXD1aTFYBuVEWCcuHiLGBeYHSaNL",
  "key24": "5m6EeJrSaTeFzpDwhmdn4CLkwTWNgsK89cvo7ndRBifQ5T2epsawDeTQQEVQ2RQsxpQXzdopjqNsE3g2iDCBjr14"
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
