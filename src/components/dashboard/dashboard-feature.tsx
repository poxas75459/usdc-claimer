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
    "4tDLLVrU5iMuB9rA4ah3iiNFyf1UuUruPLxJv34PHvVLVqXQAfMiMcx7M5Td5cVtudXcdNBwVAN73XzQWxEnuT5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w2fpdS81xcvfMHnFmnY9NqZz8ErD85TFgw3KPLYwTs42nYX9j5Gks895csd7Uj2nbBRuFTKqtz7pYnRBwhbyRQw",
  "key1": "u1iwAT7ezuPdrAeBSV4Tfn2kM47KSc93KvmKymfNRVDbSuG3MU7vNaZ1sgSeWFBEihcE6XWpjdugJnrcXfYTREA",
  "key2": "2uEwB3346unnKt1LLfMMp1ZgK59ZANuiXFgsf5EZvbQhCuhA83Y6xcfqbEx26kQZk5r2TZRrhZZjFxGRHB91TbaF",
  "key3": "b1ZbkY4gzqCmBH46sCooQktcrUWkXu9mYqKL86qgqbp1i6o4U1egdgeu8xtjXmNYFDG93pXmEg9QEAusoKM3ysp",
  "key4": "W8XQC4BxTiSKxj2nHigFLgLuEE2Ch8PgpwzsaSvxWC3G1DXiXX3KfuxSRiZ6a5w3e4T2PrytkuS6jzDtQ21FrCG",
  "key5": "2qGSamsKWg3nwnKb9F4EzcBWkNqGdzbpbnqREekquLHjC3yxPPQQ2HGuD7NjxkjUZm5hkLr65auYnAFx1N5TocK9",
  "key6": "iYBW8c4n7wEqtYbBUzNFZFNxb69Mms8J9BxsR2br4euc8R2vW3toUokwXZh65MYip8hE5QGjBgDr7bzMen8DoJq",
  "key7": "3kMHk5nzNgYpkpC4VsT59ksDpLcjrBmCX5eccfSzRusRi9kTQswnEVjehnjagnnmR1LJsRvPrp13viZZZxF83RLM",
  "key8": "2XddRuv8QQVTvkVuFgLEekVp7NgpfoWxRoKsKY8BTG5aoYFQ7dKjigBQuokmhjhLi8dpwgELasdojoTnvk32rvKC",
  "key9": "27J5JU8XnYZRT3ig6RTw1ZgLEA9C2XYjsaJfqHBd5XD9PH88RBT99D5NPJ9dgPaSm8v5c47FXGKNg7H1uAhdNUMe",
  "key10": "2c83QfJdWJFGHaZbEUn9jmkGmBvejZX5ZoHMKUsAzRmhutT67TZmRdzeWocvmoGtVfUWUB8FN5AjzG1BXUCyr6V4",
  "key11": "4GH6D4PJUgaoQpwCjSDirzEQ3hrQA6p42AtypKG4MXJPVzU8GaSGfw1e8bSQhqfPs2Mp9X4euwc4dCsDwjDcNv4h",
  "key12": "2QvkQEuUU3XC49V2qskPrJv3APgeS2KLE2SUZa9UVvGkJrNUKgzp8z3QBYzhRtqj7pfFGmHsoPwPPabzvfgB68n4",
  "key13": "2h8te6FdhXhdPFTsE3x6ryQLZqStY7L68fyGbgJSFAi5EwcTXR3ho5FR3VAwNzWpJErKkn9Q7cvE8rFqe5n4kUFg",
  "key14": "2ccDxZUp8fPKENWEyqvvRDbgoSHkvpKV8gAD5HuCE4mcbuqW3qKRTXaLxcE2BFjWLeYe67V92akh79vCdXhd1rzM",
  "key15": "676V7G8R4f2RR2a6Np6mPuuyh5AQg7wzNoUsFLrADia76Umo67Mc2GbENJcPWHx4jNkvjkey1NgE1q1j552f8Fdk",
  "key16": "LKCvbJFH2g7LH8zNJAEiAFmDGPvTf5hF98S5VbPLyk8QUJeFZ7y1SCSU5avXRwrvdk48ySvGGvgTbqk4peDSjHu",
  "key17": "4bRdqJzQGUFSNG3qZPy9We74daxCRdTpZ4sVrgDVvyrAdrKvXMFgLVc9vvJBaoA5vcrRsFGGErRowAqV9AnXc7Y5",
  "key18": "2D46babL2CzWccQEkknmR53i5rMorGMdHPr5Tngg2AdNy4Tvq84ZqkW1hsW3guCoMyekQDt5gignYusM5M7N9mxS",
  "key19": "2hdVWDgrScePrYPU1LC8efgawXnRoWZ7VacfWbeh6bN87zZHwjfwHLgcYKhnyT7KjbZ2ywqVm54S8Yjyrp9RYCU",
  "key20": "4Ze7JBVqjmiP3UhtAmVjLnKX8EfpALsgqRCvt84hNoWgBXYnqdUkm3QxUq9uvWQ8GYzUrMMoPRbwDfoRf1Ew8Cdd",
  "key21": "3R4pbMxq6Q7PF188zWisf6uMRew5wpyAMUN7hxHAxJr9Jt9afCvSGFM2o4DRytSo3S2aX5RfPqNBVWf6Bye9LXcc",
  "key22": "3wNsrp8BZmugVMNC3sc8iQSkHVShDwHirvKycMTfBCCokcQn9nqqibvnQE4MycaBLpXtJSWxCUqXdQ4yjizHsK49",
  "key23": "4utDXtmY4FhMEDdpuEChA7GVxBcmZ1PGDEGfYjRAFSUdhgcA2WfNpCdBWGaKDfV2MQyZFfSkpHeZyMJH7gpxgz7E",
  "key24": "33CZ7ks5QsaiheTzPaxn3F1BsspbVrBEhns4SYgdmFaT8EYjBqJG2Gdenzj7MH7Dxkqdben65JQbJpMFdfuDimc4",
  "key25": "2EemSKFukeM539QPN8ZbQkRpxDB1z2EqhSsjj4S7ZcaFBzqjaLVkLKMgXHC6v4YYecTKuH5BduQTbMTXGfjw1gt3"
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
