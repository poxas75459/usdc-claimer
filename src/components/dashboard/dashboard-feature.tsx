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
    "4ng3adqjJSuwUzPHqtEZvqa9fBasUT7WLvCA2YeVhxawp8uKkSag1Qzfo1NxUVzCdqxFbY839XzeJEZrXz24n6SL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xvg34hBtF8Rdx4BePj6HPn1BjpiTzKWPGQUX5nCFYsQxWdTkD4prNdMyPAzAdhxRNanRtJTBMk59LicxXwUtYpG",
  "key1": "X4K6FGeAcCEXL1om4Kb9c8Yxoog18km15xvvodv89Jt1GytSGhhbBV1BsAKcq6aestMNJh7c1QXyFW6tttpXSRy",
  "key2": "3hrj61rbKGau6nM2KFfXiLfvjQccicb56YK4CVYRGvkUzjSi4oTgv22FpHhyL7mppZ7THKvLxxBCs9WnBPz9gwZx",
  "key3": "3x7yyH4hrD9tbGpfsPLJF58DPqdBW6Adx4sYmGVP5onRfZxt5hnkfbVhjFJEmY7XQzVMNJdZv4YWSCgz3ASy235G",
  "key4": "GRPcpA4Lnn3iFLqQzmNJfrdghh4W7MhJ3Xx9yNE8Yy8cGrBCszgGo9JKYteseAGvWzVffX2do4Bas1Be5KA4M6L",
  "key5": "TMzqed5DFoFsbDuwjxKGbHdW5PS8MeNL8RQYkLwiaW634ixXejjTCM1KGtqjjHzHRLkpBGo2E2vFxB6NhwemYS8",
  "key6": "4HHkLUKhWqzzUj2DUwMX6hb6BZvsxooxQZMpv8UcsXDyoxMt6kTvPNcKRZsBy4wpRyPd98uwpuEfNw4RWkQzfkVa",
  "key7": "4C7yhKtGPT2Z1ZYMQa3ZbczcVdM5yEDTdrHRpnaCnyJgpxVX7XZhfbsjjTFpqc9mZ2JuuoMHtWMa849UD4MN3GX7",
  "key8": "21h7LHqt6PJRqp9KZfkoTD4QgRPGQLon8iWWZ1bsWCwwC7gh8N1mCMDLbY2m3LPaL9ucgyiYux3nLzoRwz5u28Mg",
  "key9": "3Hur5NV8ePtSM22TFqUBakpNd4QYPU6TnHnxAtNuucNdceAEMYkyLUsE7VkkWT3o5TUyGoi7UniNkqyLwXaW9xDn",
  "key10": "495HBQ8RjWVUYuCdh8xZBu2szAMAWhAWHT2noMowcbpfETKjPh2jm1G9nwFGnwiXkfQCo7mesnMkdxVHa5z4WvzY",
  "key11": "3jueEFQCJDXmvfnEPaknXQWk8cuMWSBfEWUM7z6kszTXLenUiPPU9si3wu5iWToMKMNn1qo3RVXRbAUaAS3KLWVd",
  "key12": "2czMMCfMfvYXyHzGB8skzqyoJmoY1zQUDdnSx8hkwXHaTZe7LJP8JkdfEpyGeRNfkWDtFUzhs6suMaCr2oLzvzev",
  "key13": "2MpgKyZo6n9E14byDhaBM76D7Jo3VjuAhzKdXPcqxGcDCLPy5gabkqvMeExRpJsY3pgSGNFNDdTmczqwatFL56Sa",
  "key14": "5kzYL9MdXpfnMBKPHwojykCDkn7ttttBhnoDWyKf1vsMVdSs4xPgCTLg6zAS7tZ4mR9zs512HnBcGWBY1421pCaa",
  "key15": "3GE89ZKMnncq69N2eV9F3q5PhsN3Lv51AxKfqbWRfw1LE2GtJJBwx6pQwvBaBiGffXePNipSavdoaaRbaKoVnaUD",
  "key16": "5FWXjX3B9pJTXPLgWDXECus9GKSTQVmu3Nxxf1hr53a4DXytx46w8c9cv8Q7xAJ6L7GqF9QJqh7ewX4t36Zn2RbL",
  "key17": "zwSFhp9xZEyxYfVi1siZYYNT4N7FKA8CPxby5av2JoneKgXFyQ6DadXtAEE7avDepbJiMWD4D3UWrtDAxrvnSas",
  "key18": "3MjcDs5s7v9ihiLHj8DVkGrXeDzjeGBR8iJUFRV3gA1je9VTTqFVDfkwX9DbUGgw3KwnF2D3kN9fDYbSi541cxy6",
  "key19": "3NZU6XsWRXuLmYNadSiX29jL5awtvjh47NwtmE1ViNe9RinvX9cXozvkePiPbRuTPdDYeRmbLKVA5AfYiMYiuQbq",
  "key20": "5UPny8f3DJiT5duYfRAwptD9mXby6YRydkaz6tFnEsgf197ot2Q96yqChJLiRDKdsX47N3yy9GyantAyxmzofjyA",
  "key21": "BAvJVvxMtxC623s6YTXLkK2NbaEMVdSQ9X1zevZAMZkkW1Yij7jZCNA7USvxMrdm7mBXCrpyj38DVaDJkH5aK2c",
  "key22": "3fvrqFX68jPgzKZ7GuHe4defthH1CqXWfHqkxm4QXLK9cDGGtSpKz19biTCvh4X5j98KF96oAhsCJrHyRWEDsajt",
  "key23": "2ZmYNTxQzpyvaFnpbLzTswGDjxMSUr4742cS9PZa2AbRQZUMYNtTrL27quEkdr4CPUADQLYiC7rxYAXfHc7w6Ft3",
  "key24": "2rcAz6cpCEnCHPpcpboyv8tYQvfi2Ghqgu2uvF6nddRaipQ7cEkaC9UHAtmWvrPJzds2CE4A8CiuNEDShNPRjESp",
  "key25": "2RjNeS9y4zsbcVJzgV7wetQkcZrxVYHvNrhK6XS98yAiz8U5BNWcWL8CyN4GTvmXQpRxXr1AK23kJRd4Rsohfwht",
  "key26": "5vn57JvkH4sFZ5jo9GGJwjxuDouocm3bTus5eAbyuVXGGtTx4TnZuxk9E3EBWNmRv5ghU7AvFifRGvHjt6Ygm2Gv",
  "key27": "5Xb5CiyJFBjfBc9e5GSCg2XJNav56hi8SYea7d38Lv4PEUpDFnXhDLim5LQD7DCXmULLWpqauGCmHgweYPBZbCbf",
  "key28": "52rau5r2gTD4RALMdKyy9LFmwKj2rDhSPVzV22f4UtHxEN4B1QLAyg7D3sHpUfNkER6WndTmoLRPNqRmbZNLPiPr",
  "key29": "3YEXcvkE5J5NptkogQwk5M78soL1EdpkAWZT4zihcBpGBdA9M9Bm8tbcGEUTXYgN1k3C2qr1j15JKYY9aoEGE5xG",
  "key30": "2uHYYFY4UsFnSKjKPR7hs9ykBY3CQCce3FBDe1ULMFpsoeE3Qhdr2eazYAnzBh8Mh1812qmhbL3SCSQc6977uYka",
  "key31": "4gX6daiVgDw9yWasKh7oB48Gv28QNPrwpmQ6rG2zaXNRzUtMe9N2SbwgjuoBBDYBFozC6Avtpammm1JsR7ZqJy5w",
  "key32": "4RRUqng8Tf1cTdR5ztGk5KAp5hfTUQbgr74izqY7XFeFBo5muD8PhhRGuWVq45JQjXAz5JZCQtuyGgGD4AJiXAeD",
  "key33": "4fKfqUFjaUtCPfBFFSp4rntnVLrUQXFFm6EPZTWy4uJCmgcrvbzbgrtAshyJ6X7iQW9M5cFMqJzrmf1WebQELxzG",
  "key34": "5tuKXGnWKE449DFLx6hbTq3mzkYHC4z2AD6v5nRC1X13NpjqDjec4CWJE9wB5ZZ97zaDQgBsipgBDHRuv8dA9ZCV"
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
