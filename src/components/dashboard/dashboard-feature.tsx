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
    "3cFaiXJU89kyVM3P7PV5JLEqijn297n8XC4rmDFpnnT6VGMRRK3SiABt1WGMA98yNgkCiooUxRg7BeV8HE5CUYh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AHpey3XYBYHVetBqSRZDJAcfeFZxxx3WESdhUfWWNhTQZ94fp7C2iDUwE4dSG9SBL4kPXaWfwZrtmuQLjbcchN4",
  "key1": "3vZ6toNwkHSBaXhHeuEMNPVCpAtLokzWn5XMNJWzFsKK6F3jKjnuvVVGT8NDcKyHeXhtqSZcHHPT3pMWT6P9nYMG",
  "key2": "5CxRnQMEmQHv9ZHKCLZan6EbaciNGVxJpf2vUSt1HobC112ZyN3QZ2PAzHDnhEBSFZTkquEK7yiFy82Rwsa9UckW",
  "key3": "3Fb9xCfoCPBjrss96tvuRaMevXL2W4bSZVGLdBrpTMRAxqCwsrQ5mkQZAin1Y7ntGcxVgCiHEoFuC7DMGAvEmoYA",
  "key4": "kfSAbeumYewNLv2nATuKeYRmwWYHWnWbyagdt9DMfxc4zYUQJM577NWzivZkW5SM5GNNZ5xbvnyyKAJBigfESMZ",
  "key5": "4DxW3X7DGkKWY9eXyQRpkbWP3i4hvGcXt4u3HvCX75KEoAByrouMir49fmYHDrx1aZbAAZpf2NFjVLCzhFhpfFt",
  "key6": "4X3dUQhJuRFpKSPf5KXGh9EqzhYQneGwsowz574u8wfRrxzYH6ATRuk87fUE9NyrJmzyWCcXR9znRvjj2MBeThTm",
  "key7": "5zyreY1eVAmbpwMrXZU4tZhXAjGmH3XZyx77DMtrGnAKDX3hnTn9f7SquWoSdCp5ZE5cEQZ1YLUhktvea7LHQF7u",
  "key8": "hqHzLByLDB7MaGCnUPfNPfiqiXjqB8Rz7KhhTJJhzwHiGaUi42VoBvJpxQpta42vVygkW2WEf8z4DQ7AXkWSz8X",
  "key9": "3zWT2hkq9yYhGKuXQfDvq91Ag46NeDZ4Pe4jFbpxnCQB2rHPYeKkXbpsASLkwe6HFojX5v9E7mXo9nNzHzJj3LFE",
  "key10": "5ZvKHB7PpgibtihofpqHPwDx3H7o94YNdqby8YfKY7tR1C1e2E3Eu1zqTZwujcMPZ58A4oGLLUMmLVWa8j2kM8zF",
  "key11": "4tEhdW8daTyD5xfhx3Jkkos4nWnqq82BQY5iLuowJsdTqxUbbcfMAbUNtv7GvThnfqncKjREk78JLahBSiiiqJDx",
  "key12": "25qXcjxkcsn5QzpdR533wZDbYRw8VGipNaEsD8jvXwyMwF39vjUaYQJhgYWFjzAKFPHqzsMXrR4EjA5MnLFnYZRb",
  "key13": "3cXBxccsjP9B724TaWAHQEDmxwDH5JftdDgMje26S8eJg4Yvw71zivm1HUpBmTfZQPqdyw4keejCfvggEoEuDuUL",
  "key14": "4uWsKU1GWS2Az439ArCA4uQuXixJtMckGZoVEBsU4ctoU3zfdxTzowmpB4jAhLfcUPRuAvLVs1MMTGPNSHdBcsuL",
  "key15": "44yCfUzci2oELcTTt8ccg7gS1D2LYrrGYt8HmcfD8yq6twwLn3rCBeojfmafbm7ZR5eNjiZeZRtWKGT5wurjGxjG",
  "key16": "5vkRxhTQepHecMFkCxNuF2v4XFqpLhweKQjhqVGTwLiHa9hJddQYTqMWZrzEUbW4NyaUwXmrMkQ8t21U4SjjLmjv",
  "key17": "d9hAVtevVCZGUBo1Qxc8MwgM9ASD9orwTa7CZ5SEBvB3MdkhEZLkQoG2nNodmR7fMAkMf1BgiRNEJ764dPKuDqs",
  "key18": "4RqYXCccD9HzN61C2oJqBM3GsfR5va2Jn1GiMqk9sBzCjE5Qx17uiLmVyB8sWPgwKuGDgo5LbwqfvjSqqXvnAphU",
  "key19": "4jBwcuqfeboKAoDNqfnfhHcZnbpzoD9DJyA8riXMWNz8NKNUVzU89VY46CABErrKVQx5F123KUKZBqBT5PRegs3b",
  "key20": "2TJeS9LJdXiMj7syLaJDDUAd3Y1vCTJLJJdPsJnxdwYgZLSrDQxXMDi4fBCixAkr81JHhc642vR1Dkf2dTmnFHqp",
  "key21": "4hsyw5VFLLTk7KreJugBaSTu2vTAzME4SwaBDtkGDaWnXGU9scVttKaBjfdRudEyqPVrhsH9CaDiPrd58cGE5dJt",
  "key22": "2bBC2f56sZmPFsU33DVvcrpEzjVmbMN7RWPdyDHMJVaRpJ3VdGSV6tv9kjs1RfzJPPeJtqC766J9YtrvL6mdDfyo",
  "key23": "3SmVaMgnbxKT7H2RXWbFXgFceE1SyUF8iazNRNqeeXVmpn2gKB9UcdTE8cjNkCVK6kY9W1SxtqGsMbBzJ6MRCPHj",
  "key24": "5ioEUmDUnKJCjTNK62XacKdG5o8Ui2W4XnSVbJ57VHLeb6BrgD4NyLpKgGhwg2CuXSRWpuk8YRHoHBkvj9s73LNM",
  "key25": "2uEeLcunJFHeyW6aKoXtGS9Vasza5bEzERaMYeCVKJ7Y7QJzwD8z72ErawZDmE4hnL1cGfF8negVcEbHghcD3k5u",
  "key26": "4VKAsMm62aSBoEajz9uS35kbRJbSVrrJDeBPj8GMmnyxFPyVswHRpmaEvWKi2L4d5KNovQS5MoQ5vwfUsHr3vWeV",
  "key27": "3r9ZBpSNSrGJ58c69LDXHv86wzBhN4AtzZDHeSk5Dbs4EE4412BxgxiTrET6oZG7xSTokLcYTAyyUYa4qvm4AE44",
  "key28": "9Rs6VAWHUQMJsqhpR2rpHa2WWrexoHhdKYKsNLfdR9gr5Pka1qRRNYKsnGGTiMMT68ttRy5hVHmvuNkwx96tVaH",
  "key29": "4jDw5UsUxsA1itqD3J6KDzMeeBrAKizrR3q7N3jyvUvZ81wHtbcvVkc5eCX3p9QjDqDwCYxaAkQw9LTf8XBDbBNH"
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
