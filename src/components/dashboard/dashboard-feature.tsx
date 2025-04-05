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
    "271X7aEZbNQkxBbRsD6HQfoGDu48TVxzDyQD5Ycdsa7or9N7CfeikQ6Z6DWvgXjF3WyV9WwBLDTZ8ZE5vfApNLZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45UspmCgT1pELLDra6ZckH4wNduXQDEeESL3U3RBWkwFUDytdKS7othjawVYdVttWXqnBkcdfC9rfyCGJtfYHEoA",
  "key1": "49yjXYrWQvacBWrQ9Tdni9kiEkTCX8Tu9nWaVV8yZtnwAzkyggmtNosraVMBJbKh6Y6haF54UKoBe6uhtZV9REK5",
  "key2": "GBpA6bQYWgv4AZSvACZGYgLyMYVhNJ9aUtLCQg7Je9UdoQnD3pwpfahp6KcRgJnzGsygV3nkXrrHxLJktoWYb7i",
  "key3": "62TCUrhBTXaLaqNcZG7dSHSwH8w89n5YZ14dm2sedEvHGKGonR68erL68bH2qTa2dBTAS3zD1spusjWEDNxoUeTy",
  "key4": "PUfwQSHQLaTENjzQNtPZcYjQWDDunC5PbuCeBRSq5PoXtawoBG3AE7xwzbMuEBS8ui7JYVVw3QmEGa372Ehw1xt",
  "key5": "3r5rE9CAr7jG4Fdk62hTzwZfYPrmbyav5GU7QVd28xLQGMyLNxVtDbwcscozCLEh4v5isXHhUcww3XDwnAaw59b9",
  "key6": "4PsafwE4179uog8kbYsxttndZ9cQCwQfQqvKfzTjaCo2TpGuysSbLky4UYGxqiUZXbWKMFAsy7q5sMWTcNKu3bYi",
  "key7": "3JfWy22zLkCEdwB3oEYSLBqumgxPgNdqZecEFYVA4iy18Qyhfo2eJo9sspcdUg7sNnfYsR22U9iTrU7suBEJagHf",
  "key8": "2Uauyz4eYxdxWnrsj2ZrQMjNVv6yod1aysJDhL138Z5ZWjNNCAxdShG6kMYYkw4VJAhrz9zAjKi1erNN4nEtxaq6",
  "key9": "2Cv7e8JJt3KKqigMg1UeY2S9ZxWoK9GCcKjDHR1Fy6gCvmgqZEXkffiJcMvwBMNGEfiL8VhMs7PGXvG87fNvF746",
  "key10": "2ipsoGTtB1pSPmYKmf3ZK8c4N3oCYfAR3eVZDoRV9QWBQo8UA8pGujqi7AJYbfdgn1FAbhM2pvYrC3BzBjrybY1o",
  "key11": "3e8TPXr7gojLzyLi76wJSkGmRfRthrWcttGcEVUkpBdS5b5nEwyG33MwK1rU3pNNERMeBRLb4hNAAVfdP2kVVbV8",
  "key12": "4yPeNc3ocP6Mnpx6fViVcBWR5eURmB3ps6ueSGx4LrbDCM4KfcEXWyq44B31mm4PyQdhgp8mQXoL53Jt9LpQQXPh",
  "key13": "5qkhnGsDFxo3dWvJnwAbVrej886CRS6Ayz5LCu36L2HnEc9zZbc5Zw2C3tF2sEyMH8F7Me2XuyAGxShXiFHiGTyA",
  "key14": "Xjnk9nZFVmoKVYCuk7UpzVzLv9wEihRoJw9YLZC7vc3uwyuopdzCccf1JfkmsvGY6wiyDXA8vB8ZAax3kwJJFoC",
  "key15": "9SXHvzy3mVS38codJmdzfN9JtTrnNbFPXpS2RbDmYo185tP8T56yJxKcwsPNNczU1wfdSjGYszYJ2aZPyQMzPAP",
  "key16": "2sYrRNCNiDkYdSguQ7fHw5mjMyzuZeEHf2VyaoEesVCb8fSQ1zyMc3onA9yc6mFJMzhqkpkvSbRHnN4VruKWJTJs",
  "key17": "51yfy3wQeUXcewvUWjiXthWQZk4Tk2ExsHaRqdLs3JMKbeVDLipVbeDfWG1tVxTVDE5Gpcw6YpFiB45LkJfYUP8G",
  "key18": "4iwnvDgRFvLtje9jX9V8fvGBFtdoLhjp5HYbZLYRb5VnYoJbqJJwJBXHavcyr7ZuWVYW8s3VbLJQbS3qiZvXGoGW",
  "key19": "Pf4AJMkuGoxkhHQABhdeCpQLjGQ3EyeDBw3a1EFYVYWQzsbvZF5N3yXwn2QRf3DFyxUuzTRMZa7YyREtvQvTpUm",
  "key20": "5iZiFRfgKtvNPEugF1dmsyD9VpR4PZR6NNtKi2Fb1eqtNg8bz4t6HHfDbn6AxqDNTQDVZVphnLsn56SxoDtgmFXV",
  "key21": "3skYo4JyRqJftm1tZtUWZAwaaNdFnMjcViQL941QkKgoErPQM9iHpVaLZk3Grm7r3BXDN8Z35Kgd87uqXAhjcbhs",
  "key22": "9S7u9kpCKStY6JyYnaxuUKYkMZeJa3yNsCiqhUshjcuTuFadacXks5HwNotEqGBgZM7HrePAPzb6Hzbd6W8YzrY",
  "key23": "2TZqdSJN9uMjTATRsrYvLKeo5e981DzJ267oBuzyEbWJdaweZaxskRtkLJ9PXFzpKmNpTTESrrUDK6D9HyavmMDk",
  "key24": "66RLc1NvnU4LmHfqbi43bkUvh7pYpV6tKLVngLVKReVxrHZHK4VkmDbqQh41Mj6YNyqfKupmBMGkRByYeBGhSjYp",
  "key25": "4JRC585Uy6C1Qwq9PQvNZwoMzx2eX6BEtsQ4qfzAac8utwBVoBC71KYshxqyY48LVAm7uef6oBdEQG967xRyJXYJ",
  "key26": "fx4RBSKngBmmXFypMKKKB6Qz4SdAAnw9HactpbMZz9ThGS5zdbhwuvsaR6dW7cQoT4o6XmZG5zNtxU66h4FvbYQ",
  "key27": "2cAnC3AszbrKBrVVK1zc1Us6ULh2fEeb6mQxgQpouhHMC9XTGKcWCDK72as9DzCNyU89kv8qmQ8xA3HUB3rsShpx",
  "key28": "4UCkkEk69oBoAAczJ6vbiAcWufaZDb4NRCkutxpKpnPZ8azLzhYXipNqAqnz7Yab4e69iaC88JwYRvXRXjb4fysB",
  "key29": "5DN9cJKYMzWb4p1j9JeqezkLe8Q6HFMaN8S1U3Eh6rqJzbwK92szDLnmxrPjaGf1hAVRLFuPMvMpgrqWkCs4HhP9"
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
