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
    "3c6yYuFHxvvRvE5g5L5CcCBTx8U69NP2CoSuAX6BGYSevqmozcZGZyFuRCVG6SDZhXQ7wNS1cBi8gEF3CcYSgvWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zWtTKcW1XHAzR79GpDNBAAKKRZUcQZbW5nfvu13FRbiHjM3wYB8ZcRGLKEwYKfpzXeZuLMRu34RKdA1MeELwQYv",
  "key1": "K9SZ96cdB5Cf6iKik6h2PnTp3vjNLvzHgmW2qshKPDk4JbLWTqQPaKE9VeaQwLHveWDPgeBMBhsfQRKuenCfdV3",
  "key2": "3g1yTrFa8YchedQj96gK5GV3VYCEarxhoRjQvpL4S858BRMUvSAeV67h4MWQuqcmzyBbXKYk6AtqGyB17De9asUv",
  "key3": "5iWCz48bo4raewqqBoKuvrRaw4RF5MuPVasj6MiWcuwYX6UeW5fYjTb4SvKioDRMyRxBvUjW1NSvSLq92WvYZyfk",
  "key4": "67KTqj5WxjifKcgWWL6qffh84RQsFKBwdY85umrp2v9c7nkRg7VBs35k5Dq5zBPbR9DWb7C1MQXsky6siZoZUN1G",
  "key5": "25PLKgErej7LUf9ckstDHMFGLdKZbqWBDM85HeVNMLcFNM2VkFfykxWYYdgrwevdE8JUvJkLXcZoEsYTEW2PeDJ7",
  "key6": "H4Z4Gmm53zYUkjMWjDGWHqY4R8wkDd6Fy7nguvM8gNDn9gZJpsW4vFn9eWB58rTxv3hUxjA5XVoufYSvdYPg6rc",
  "key7": "36LPu9SgGAkJXFKe5t5RxMfDW2uSgx6r3DVBq9Mz2BvghTwPfFDmE5Rw4v6xnkYKSVsjtbmjBrUeDN4C25eH2Jey",
  "key8": "4MJWduJHB4nwi8pdCRAsaDbrPgDDf1ZNUEMKEoJoq85xSLd6SYLLE4aKDGURcmAeL59X8KChZ6mBpiLa53E6Kr93",
  "key9": "4F3EZbcdhhyCJq3spAxQUEfwQEAL6F1vh9wo5V8DDQvnKhdyLGp2heDTj87XreW1GPBUcKkeXFq44r66QwNmC6S9",
  "key10": "2oTzXQVWfDQRN53eniJkAkDbmJ6jSdwWUE7cJJcQp5x9cxaZB1i5qLvs1kZazntJS8ywLMFEjaYSTgBVRxGfYQFK",
  "key11": "3NonYx2uMCLtvnUcQEHTcmMM7oTekmUKrrDvQpZhda9BW2Jk1Vit5hSGqLh1qMg3oX96kJJ72xek5zhn2CsYRvps",
  "key12": "f5zQSwY9jgqFpNarQVJCBJyDudSQQCFtn2N1Qhto72BA7hCwp7sdqg2Pun8swBEVT1wB3J5khcbSr37ipqPc4tD",
  "key13": "4b1beY6Uv9rYmX7ZgssLywhGbhKQ1kWuwUit6TBkgecZibFShcmb2LPp12BVbuQDHfJws3rDZGUgQfWTvfW3rjHW",
  "key14": "peEjiiitMQjzS1Mv64j358v3nRozbgcWveAZHBG38e4NeceKuGY56AFVJ5Kroznrgr4vygAbDGDvwfUSCDtHaF1",
  "key15": "5kuHm1pSnHq6SJTXkDrS9JtZBxtDP9pJXn8qMchG2eNQvkXMXPWiK8iAB1xhCjNwKUDTyCXYzbvnKm466kPx1Ugi",
  "key16": "2UKs4vFLDEjyxCHKqkrEqNV79EK8uEVvkaTjc9jG9s6fFm3fjokH2QEzTfJQkG6ZKYcFyQQNyvkFPqSaXcVvfXQd",
  "key17": "75j5SKgoE6v3wYbes39QV2eAheteTe6dGNfzEUHmpz47hTWPzQdc5Bq5LXrN3bvqWDV6hJUTsDWMWriZR1bmHRv",
  "key18": "R2JNk2JtedCgHX3S8R4ieZWv5b1XKKJ2WMsVjb9MNA33bTjX3FuqXJm6LeVKG8KNuB7sRbbSzDD1UTpBCi7QZdh",
  "key19": "2hXCW3pYkKxW9GJ2nCuZRNojEVpnCGadJ2VF3SXjgLq1DM5MA8dxqcyn128J7wTozCKdQ6n89rXCdmeJAznMdgTD",
  "key20": "LNkX19zRQkAEaLgpxDRkogQUSckeWeGMkfsoBEF6Bww4vqAatVaBdvM3AEPcDSe6okw4SL8EgjHriWmMxNmx7t2",
  "key21": "5pK9kg9ZYaD3ooB7Gs7WcseZZjFU8ckg45Kc9KAW1hb4wwJC9iCujuj8gTJeNw1KKAn6wyjLSEwMwm8oio5BJaoL",
  "key22": "4YFNA8dfkc6Jnt5J4vdQsXPRZGfRj6dSxK5JKzbVyL3xCda6EMYw3e6DR9C8pLiVu3CnfJM9DYjqaF2juRu2P6Q",
  "key23": "4DxGQ6G84SA4rNNDLum8RH3MHXkncdd57FCqJEQZE1scqhMd8Nvh2KBaoCNRLm1ofgXXpmQtdoLZF3yzvnRxv7Rx",
  "key24": "2YNvBxDvQRJrHMWD9Fn14pzk1AD2ZNrq5EimYdXebNvkCwbxu63TzF6ooL8YvqRgGw9WMjj7q7jiqKbB3rsgFvra",
  "key25": "Pesakd5kMQquKVbLGHv1gw9CipMYbKy3pNtVNvhyuH2rELVqmorDC5nuW5dkuaskw5YWzVqW3kFfiphh2RpsGCQ",
  "key26": "22ojAYBYtnqc4TVD2Wtu4YPueseEwVREyyTz5gHqzrDrzniNt2krUtvGeZbcriTWQTeiFAmZDFdC6sZ7Q4Xi6Fr8"
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
