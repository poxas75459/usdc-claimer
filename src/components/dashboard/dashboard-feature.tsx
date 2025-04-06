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
    "3ewArBjpL7qXL7hYxDBRagUJYpkuaXhgkoU6kywb99EQZAJe8Ba8SE4ybsaFnGUj2r1zJGYAxEso14krMwp716wm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NEx9Z6QTZAvZy9Pbyeez3h3LvNviq6jBJgbQ9JTsYixYQP7zF3uUyerecmBpe2aR811PLcW1tJdw43cn3Dvgwgm",
  "key1": "5tti9DDpdrDmunLR1zvb92sRY1QSF2rFu2UuL614cnGReqqMgNB6DCVBUHdv7UsZK8pYWM2ELJFf9mrYgNHMdmns",
  "key2": "5vLGXKFgyRw189pXEBymsL9RsUck4oHCQrgkwL7nfgVPm3SkCj8DXtHSiKS9qHzmmWKsm8FJpmoD9Sygr7xDtqgC",
  "key3": "2gvWKihvgnVgEw5i6dPp1pRXBtWgT3vdVKV1P9sxRzaGzPdpXK4uE1dP7p9CD3HZv9uqUjRRjWpDTjAmEgNr7j4k",
  "key4": "3mTpZPsscmsxnrhUf49vcxFdbPe4EMq2HuZ6P5K4ZbRZxMbzPkbhjnBjZTHuz6gxZCJ4WCbNQ2XxTc7jAtd2Jh1",
  "key5": "H7cdDmLui63oSUTVNXf86YJgiUzeVYfxSVX31MaiekGmTYfz9jmHJu95zXHEBrfHcsfqZ5cZV6YXuFt5xZMLky9",
  "key6": "2YpgVSu2CA5ELEEiA2B5qaR6U41ev17emgKk3mn4am67c5Wi2RUr6RnFnuK3eAdXAbVRQvrUZ6cG7qyb2TZ1L2bL",
  "key7": "5FbjWuPYW9WaL9TusimuviJ9v2BFyGrXq17d3QubZK4AAgxJMCXX2Np6UVjPj93h8T1Nw7jBLtBhKGxsSie95Eey",
  "key8": "hQ4omwK7DPLvmh66QHLWjamFtWkubnyJEzWaFHyiSBvZobfWRWdSwmohsFbZAAWuGiJEhFz84iSk1ovBDPLGMLj",
  "key9": "4c9bPcYzDid4xgGvtxRkJdWb8abKF5UiM1RpM6omShvUQVmB4mcnWYE7sJKufkfG7hHKfMLedVjH4HpaAVLMRsCw",
  "key10": "5KTWz5cE8eckHuEoN4ZRXF5NUzp6iRVwo3QkSvtryGAEv7hcp9perw6zcgWbygGzS4nkK85SAnf35FpZfESzYQWF",
  "key11": "5zuPJ1WeHM55QH7ZRWt8uWbRCJrPMGAgtDZ8D3P3htuUaNGpnbVWkE354FQ1QJWzFsjTmdnGLQWHL8us8ume5okr",
  "key12": "GVJajKBS8qTd1CaSUivi4ManGbt4z1zc9GxtgjMDrhijQSKCBhoKxUxmWnrSMkHLkkvGQLEftVP5a7nnPdw3yZs",
  "key13": "tBTSFb4T6qK74qFyQMC7ofYTWab5FS8gZtPPtzLdATbgwgsP73XY2AtgsXrQd1G6enJPyS8g5zcPFewZ2S9BJRM",
  "key14": "4WbMcXtMYzn3LAoGmFMPrrdRjT58fmi1QYamtKg3sSmw6T9GqcrvgJdMjSAs6zys2kJK2Pnxg1CJrHxCtZKxHHfx",
  "key15": "5uLshBfNYAU5WDmyTmzUQAWkCu4c7mbeiZkezuoEyTWhAxMscWheqeKzUuz2qeJvXCtRYcu1F3DgtnnzjBKvhAvh",
  "key16": "412jcWE8oJLCPV2fEf5qmwNi12Vu3Pkn4pn9BQfShuC6L8yFecfLQiXP6Pw3WQCTmWQ5jqc9j2DREyVLn7a93W58",
  "key17": "5mQPWaQ17AHgjo284ZVeCmV5AWqqyU6qnc2k7RovZvqahkUiShPM2VtQuNuAQSaS2hSx44LdpeaNncn1YonMWXRg",
  "key18": "5oNPHs62DEqERZgkw6eGmL3RzXrmqCM2DeGdKudyzYchADnNmappZicr7hmTSRWVM6k9RaEcj38SRYDKRswZJSg9",
  "key19": "4b4zCkztKcdkCvinKZjT4MduJgWhGbpy4nbhVdNyAH4C6U3EJnWjv1bqX9aHM521mE17hbML2YsTcE3TiP3UyLMM",
  "key20": "5RpH3hSDLjix3S8efXLY88pUc9z7L8tignx9xhDcvF19rw9mbKDv5GUQ4ejsMhjtbuLvUhnRZ74YUu3RrTg18t4F",
  "key21": "4CYFhxFuAJBvd2tg3CxWzp2dcKm3YDpcxpjoaYetnd5GCD2NLZM9MsbfcAuU9f3Z8r9UvmKk1b6QvvZdkrgZwkve",
  "key22": "2x4QyBxMSjh4QkvrA4urzfwamomjVU2XHeyftvNA6enpu232XkMPkoVpCU3cKKfgXsHBT7o3q9kBby8Vi7tBnqh9",
  "key23": "4Qjt27Ebj1ZfjjKNXTxFezq2JY8jV7skHzKxGMxvFX37GwPE9xgt3yhzjWEqbkvfSXn9VsiaqfCQDSSbPpn2tkKK",
  "key24": "5fNaJBhY5A5uKANnv3NuMarwQjhZ6sQmUZNBRo3NCL9hVhvZXy3cH5tXLD1nxnrUaje1UspPZ7Sf9dMVKypKdUKA",
  "key25": "5GreQCaSQQHnPBBAztsMhkgTuStwDV49gMd2bZ6StVhocnJaSr9t9c8fAKewjTEQwjwqEWEiJqKMhRZ8vcVGbRts",
  "key26": "3e2adAtEjhiepBD6JELw4qjCC5BcRLwzYZn8k8iWTP3WPFt8RwqTWAHc84dgQjoSwVL8pozfeitdVaMWfsQxo9vZ",
  "key27": "4bwQpbLjLMfJqkex4Lahf3bEmpbzNX6V3gngAqHiGsaHzyzoMtoDirRyWsPsxC5o6jX9xEeodRF6TQ2Z7zmdgr4o",
  "key28": "3KKPTwTxEMhThMYF5Ma34APZTdsVrNmdqhphsS3wDbYCdZnrWjXBMFDZYGPjLAX8dTJ8HJmUEW2ZyiLJdowKeHpy",
  "key29": "587dotGENaYiLnB9yCDA71XquFFBjDGEx683EtQUACVtTWX3bVhMoj2gnrfAn3UzBGLWMa9AiXUwcGMBbU63Njvz",
  "key30": "2AvydyjULJVu4CK4kwjC7EzYs4vRputanghRLyYsdo4JCuT3NQCvxoghdSZPsk7TeLifCXX8xGxBYmJnRwyo75ee",
  "key31": "3iaq6tPFvDoSgTniWvxJhDBW2KPEAjscwDRWzx2eLxyv39iNpGhoS5uPZ9AoLT622F5Z4J9xZM7yE8pXF1EwejEJ",
  "key32": "3KzqRM6G8D8QLYbEnfZkNRuMN65HX54yQ7a6LupUWquJ2Xzwz8GbZysvbuJpDxuPoNR7GNX28ssfXHCD2HtTKg2M",
  "key33": "vUgthb8ZBuUNoqUy4TosmkYzDPrJvwgxR2pr9rMUN1k3N6f3Q1f6oWuNkG7PueTzi8ub6H5PAsD3EA59hAUqVbW",
  "key34": "3XP1CME8szJpDZecx4iRWCKZYKwxehBAJsAybSGYwuAD8W4xiBxPAeBZqXGmksXKyb2ppPDWVvuGyG6NawU6GSvy"
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
