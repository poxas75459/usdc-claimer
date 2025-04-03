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
    "4LZvCj7WuCDxwu48BzB1JWh4573HyzRCzoDPgEwLpTix5RyB3NFGctrbwBzzbfTfrcFEYSbqdZyVNBXz8VRyHKek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52qLQ6AXxRkT7fCJsohqEkSayAkzqyCDhJt3t5n6xYRuGEA7hWAvQ8DSaZ87DWqjktMhD4BLsuE4vD27JfPrG3Xq",
  "key1": "KMQMU4b4eRsYtPowdX4GSsH3Lt9VwcVedHEbJiyNZYfngwrFkqtHHqzPyYGMfqzsUA2LFQWsGxVWePieJoxBNfn",
  "key2": "2b3uqtVXvLHFNwFFnSZriGUvKk2MPaYduT2zMA5GsZpLWVbtz2XamugUzfW8PTEb9Gi7598Gm74zdvq1WCUAhvb6",
  "key3": "28LxiT6gWjXajk4huq29H6RUGzeh5P2Tibr6H9PhZ8qaRjVwF9WyUbBHpzdTfYenqWcTFEVu7ESUyh9o7BfBebRR",
  "key4": "fa7ZYkDmtJH3eYtjLvgqmLYrhmD2Wty2YiiWbTiYpWCseYjqs97vBt1NUX4PZNdqmK6KFCqcCuXMbGY5AXBXdtr",
  "key5": "213xLXfyGR18De8eJ5KhQ9Q7abeYsSeFikqkB7EfkedJJVh8XJrS6cJ3QRaXkibF9T8oiFdKaZhPf5SKBKx3Xfqo",
  "key6": "nhwjehKTxCecXdqVUeCCDPUT3icYgFudjiJobYiheWyqabhyxJbnZazYqyNx7iAougrRDrjML39SF12pF91qSnh",
  "key7": "7RDmE9gDzsewmLoJvpdCM164CdLUZPjw7EfbaBBhjX9mBfYBt1LTRd96snAq1bMRTiP2fJGRLoVxfNfE9527JTF",
  "key8": "4STTfgNfdjyf8CnPTRKwPmWw4y2CibuKArtnaVoZhyjVHWoDgD5qa3W3GUpKfL3G5EMCvdfYQshHFrT6Gvs5Dixg",
  "key9": "4u4jCUu96pVpthc1DNJkuYFsQs6hTQZRz36M8NmADgdGBUfcCaTPnajzJUNahqPBKutR2mvKAG8ptdgs7xL8fQ6H",
  "key10": "639cDgLJhJoLZ7cFTKLBkNwd8B8JqSrG12TiJmdJ2fW9zAixRggoVVkuBx9Gxscy85uuqVi3Z1STGSykF4TLp8j5",
  "key11": "Z9GdktwzugUDGhTtgHnYipyqg3J52Y8iNTM483xc1MfzWaozD4Mg7vMBDoZ6qK3W3p3iBNx2AXrbaLeU5FKRt6i",
  "key12": "2jVb9XmGXzT8VzCZFuhjcusZ8JeJUf8t795T5EQCci93UKi8rcQusBNyhNWuncL9ixUnBcWXk41ak3zXoEn18q5x",
  "key13": "3W9kppMV49DJAuiP2sznfAfYncDWbJBZBgEBXrfhzWyGDtB5zwVRhtAxS3rFHhXANjxtcW7196qAEgEGjdXTJBtL",
  "key14": "4CzvD91EyVPM3zVLsjruvu5CpJZQrMoigb4ZkpLbhhbviTuphjxPiWJZ3gZVuZEmYn19yCVRiYtoy5J2C5W885k2",
  "key15": "5CuEb6kQURwKKCtRuAZYdCR66r1JEw882czjhnGcGa2pVK5ShXWM1xzYXTkykZyAL7f6PH4d8QDadfiMf6USy6xX",
  "key16": "9ZyZqUCTyaMatMSr7ytE4fN7k7nBPh3piSZBDtNhA2ZTN8b7uEdA7gnZoqnH42DRch5RyiD9k1VztSEh1trQCDz",
  "key17": "4SuPeksZLwtosv8FodgkHXnFYAArAD71WXA9fzYYB69PAct8xGoRmU1Fc7e9f7Er4CtH7ozdAZd5CPkqL3ACdyto",
  "key18": "5zTffRifgtM3jSkbVa5QyNkDiFsqCfcMKiHRA3EH58pSyNGjkz4fduHrcvsq63UBiZQzsXmNFhPT1hyynCfx6qQx",
  "key19": "26jqv97TgpYEpqwgGKq4oc882ZsUtWTREFzL1huzBMNWLRreCtr2Pvf1eis2LJmsd36YYitQEmQLGimmck8WkfvQ",
  "key20": "5qZFEwKDRoNQxqVz8b6Be5iKtc8jCK6GhSBPBhTDcmKJkmekbzeFJP8cg4K32yHYLYSsmed594jAbHewv197MgV9",
  "key21": "2gXhw9C1aGZaWxbJwJnkAEdJUmwMRcGwerMKb2XtTBqvDpBEk1TSya35QE5FK5eHupiUcAaLWiWeSmM9XcGzvdWx",
  "key22": "663KMHqNHuTftzCuZQBaHCriwyFs9yrfo3nDZEL2CdNFweCjiMb81uJHe7yp9CHVFQvJCTUDPf7YSsdReCLtzWzs",
  "key23": "44yRLZkmnUNcewjtf8MQWSExbBCxdbAoxBJwUXX6Mw5eSWBWaq4MZcnU1kfg2LEzYCsWZsYNtWJHpccpwb4Muksg",
  "key24": "5kpVgSoZMpMLj5uTWwm5Kk7LgVyCsdKhB5bnxvTkkUSt9nLfxv9GgA7aaRpAqRNBKY8wDJ1Rcgs2FooFNEBF433D",
  "key25": "kDjhhipt3Adp1RaJvnS4BKXUXTkPWbzqbunmvyL2sFnVcYkYjEFjib8RdeLf3JEMu65YJcu8BPZL5RewuR8Hu21",
  "key26": "3F4s4RCj964W3awBCyGMbMwyTfMvWssye4AmZpHHukG2BgX6f2fkyh3e2XHa72GCcQnog2oNAkyhp8xSP8z12evn",
  "key27": "5Bth5x5QFmE7oYU2EZ9XNa2tUa6piJin4SuhY45YfLo5uw67fXMntVs3JJQgbUGVFCa1zPrMCjNqD8mEjudD1NEf",
  "key28": "2oKGscfuZ7NXmJprNwA9ZKsUmCp1DPk9kddvKLMS6jJ34DU8HA4WUFsfC3bKUMDvjgjwZqCgBdS1XkvLGD3gUu1T",
  "key29": "5jft6t9YYtsrTAQjBJ9fjxFgCxUJGkPJ8gisH8mw4yrG6PLHZdqs2xsJrsz8aQGP4LzjcutePLWrTqjK2op1joGQ",
  "key30": "2CYAYk2fF1ePkfCFG1vM559fwKGmfd7JeozVbhcP4oACrFE6Qnh5gmNhuqD92rwLAkHuJ29vJduPRQvFNQXizHHL",
  "key31": "5YgeECZZ9rXWZU2p9SHTiQ3SK4qcUDU7oocDqxj78oVJccBRQJgqKpmBPatnNUPe3eXoVEZBpWKEE1kJDQ8qnRFx",
  "key32": "3LHe5eBRRQLyCfsgF3c5ASYbUmZSZ1Uqr3EQqaQmzT2qdh8f1eaECzxMpqNRnte7YacK6M1dHCf5cJoxsZw2F9MR",
  "key33": "332pxUkUpMUB4En7GHTsvsDXZbdrKPVc4mcornyB1r5pN9B2r65pAfuizz4SwvyvcZa4YwJUgoziKqnp7H57NDyp",
  "key34": "jmTiU7WEZXP9AnjHfkShp3wVupCbjGKgCLGPFpdXW8N3nA5SoJEWb2bSkEtu6YDi1vQdCTP6C9RUR1j1E6s2Hmv",
  "key35": "32coYhwSCUAoxWautbjjMpUhay2B1RyPJUuXPvC6DPMxQddW1C95Qc2wqVhbmTYk1kAHCrXhW55HL19g9kzZJW7W",
  "key36": "4KfKDugGkR1MsSF6j4EwAjvMHyir7dgfJgUzP2yvNs56Cys4sbCaGvTzHgY1syEEkB2nrcsftLs2fKo8VmLDLQoM",
  "key37": "3eE7EtGtVNCErdVGfXGgzojM99Do4nWFJuojGbysXdxmk24K2rEk2ZJnLACHLMFpb1LYWtCQcmrUhFa29QAZtH6d",
  "key38": "2TzR2aDEcYvowtg2kQmdXGwy4x6T6iyz1PNZvoqB4vj68CExNRUAW3gjRYjdG4Mn7pHhYLHE3Vqu4sELJzsM6uju",
  "key39": "rQ877qsDo2FAbXk6iwuK8s8AxrkGeU5YLwWrWFUcx24MzGjzXXQLZx13RdGwKWj1MHoyUbiLBkWC8URNCdenJ1B"
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
