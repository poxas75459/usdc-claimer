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
    "2sPaXsJkRYtCFSHwPNGcRh8DzJWu5kqav5nNXuhs9R7KVdXsXx2gPHYuWhnzA2qM4KNwUYBfJi499eCmEvpk5n7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oKndBB6sUbDcP7aKzCoanE8cJCf73iSHqFT8Sx4v93ecixbAxDwUeZnfPZwFbxYgxUXfYx9hmEA5nGA6rs52uJV",
  "key1": "2Vt121g3oXDQBkaKWpG2sM1GHH7XsErqdcR1P1smp6HduDKCRgXNpq9SkmujB3QF8sueZK8E1tFTnQo9uf7rhkfD",
  "key2": "4JKB7vTq3jhi6auhZbku3QksirFD4wbjsUQsD6YgqzpyaPq7ZP5rjuBrs6pF9dxq8VtcM8TBDUzDaH4FBcNu2Y49",
  "key3": "CcKkHttiXWypiozPAH2PvBioCtYBTxrY6jYzrnFpxcSmB3CYtHCkUfNgcGeFePjTVDe8dDJVB9fLCcGfttWdwWp",
  "key4": "2C7xW2PgeCH7DNomkQpsLcsdsPjs7USZgpqNoisjYRfJe8Zv6TF5Nh3q2CPBAtbW83bB5ZQsDi853hfEWqw3NTu3",
  "key5": "5Fu2JwmYT6U1UVZcXtFZvGVSCeEqEno2ayWnAsjzUxnZVaPUcAwkRS6EKsm7G3EsKft5an4u3gEKWKJExkAzdrU1",
  "key6": "4WZ8iEjRhh6JQzDXozenougBeXv3CSBEHBxuNbBmrDmymWRc3cBwgKupmWkeZp8Lro2KuuLgTjbg2XDVBFwudWHG",
  "key7": "3evGuyipUxNthuq8W4JqjVhszGcyMHTH4r5qzuJSUqQyoDG9Js5uo3Dk47NyxEEg4k8UxVqNMkL9ebn3Hr3EyF26",
  "key8": "5duLrn1dB1Ebxtrwbf1hW36BLd2ZmMkPuwDYivUafYk73VD1rc6mfbafwHWrW4oi1HaZPxn97v8h5b2pHiuAMmB4",
  "key9": "2yhS3VzndE52NQC6rUcnmBVwhsZvW1mkMWBVSPPtNk5xRMXqyFHP7h9WeFu44J6MSvJnd5EhNtpQxW8At12huWvC",
  "key10": "4rcbQEbv8UQ8WhDf6btgXd5vGv2Tv6RxY954zGqPisaubevtbmHuvERTxGFebbrtEkvRcNyRDY5RUGZLCz8UV33H",
  "key11": "21Gp6fnCRbpWCxWojNwqcRE2aodzg7hQGPSHx7pqsgo14m1eTdN7LNmBxkqG19BRcQ1g6WkyHPgpwQsGSifiynMv",
  "key12": "3VxPBixiwKHutRgVE7YuhDg18HSQX4MVUwpc1vohBvjoefVMDefXCCMYqJrfuQnzCCDrD2aY7XZeF5XfmjaQhERH",
  "key13": "5ZhqLDvaXV3UmejLHcdZRHkkwXKgDAbPYSKBKoVXYifoA4FwjZ1U6N8Wye4BDzGpbqLeetzNdutFfx6awQZj5Ebg",
  "key14": "3n8pnLsKTUz25rUhgoYWxq1SYG453my6zsGEr8vH7Met82DZNCw26ebf2gBTqi8WsFhvz5d7Szp19FXGM7YZDucV",
  "key15": "4Y99pKwrxE5V1DHe67JLwb5VjGDV1a6Y2UXJhkqKfwALEBr8CHpthNzXaioQNtKcbxXFBrEAaEiRcaU2cdibkcg6",
  "key16": "3QEhtzhNBQiuKiqHSAm3vLZ3qLtgLmUXAokAaoyCtU34DYP225153kjnJhwarV7KV2ixayuXTzEsmNjTeLWJzsCN",
  "key17": "5ydRLjvPs3VYD4v9PFhiudLXUZAmyerAr162GccofM2T2AgXz78pb6HbVs2JgUjPCHhQ67YW1fZFLMrSXXsC2JrF",
  "key18": "5r8hCEfsZFL3myJFB18nMf9BTt8hmDCPRutHj9nWnLSxtEgWvbFHBceNvk2bbCkTGxzW7MW6oJPNubTyLYGJyLdG",
  "key19": "fv9yNcPVWJUcPDTV6BBQzL4yVjKTeRaYKStJwbtUvuEmgPhm6LQdJnNGTqQNtZZbNYWwyUKoSkdBoCRzfuMrg3d",
  "key20": "vspHkU2Xz4VwfvvsomV6Fr8bpMub9FrZTaP9Z1U8WKTjM7idG8a5LTNWm3nxPCin9HcERDTSu8Ck12RpM8DEUCJ",
  "key21": "5a8bhpq8FpMJviP3Ro28QwGBqWaCVX8LyhhNGbgAUVhc8tSy5eBTCYB8FkHgevQq1JCt4JXZLe9HPiDwcLosNBYc",
  "key22": "4cqinszMYL4Sq61wRdLuwgvCzBY5ejjLV6fc7NMaSrVaWe2nWvk1LQrxaYQZPGRrfyF4XRHMj28dNyrFuLcELDHH",
  "key23": "2kAAR6M5pri25QkizPqwyyrDjBD4MmSxuZuujLD9647zcvcwXP6oh4XHQ1dUBkxtydKpc7BeABuetuCXnSQZZcXJ",
  "key24": "2vrPAfBwcoWEuauVzYEbLEuGdduCpmqu53PUEEJHDxEjYvy4sFDK7Q3UzBzNLitKyWENBas15v8ASMYjLGA5qUTg",
  "key25": "3jCrJuX5suUTwKV64H6rYouLf4KsSnmFjqEqjQAn6tiXDhStY623soJxjxCrx6dfuqtxNZv4Fkz1Yw7h8dnUaMuA",
  "key26": "3QnpepWSYdxCYRB4TkvfmHin35rZUAB1xirNp7ez8ncKhHqaABz3g93sczaZZt9jdWTARSDMR2ALR8GXw7gq8G3Y",
  "key27": "4Lftek86Q3kpxKbLaMtSHw9qse4dZ6uKs2kLVPHa4Zi5AMGDURyUnBhtZrkp1GbnDGKuh8s62zs1ESjQN5oFcJ7a",
  "key28": "vrcNtuGDmFbbw51uXkMvsXvPaNhbAJv1MGHaMqULa8QWcaryw3GXvXwTKmiod2twva8ErXKYBzChhhqYWUXRN9p",
  "key29": "jsk2ngr4xbKnRkNTLCq8hfZnRCt9piwZTfUfZzPYqDgrkgwB6J1X5M72JTzLFEBhazRevqwdXaTCHRhxNs1zVs8",
  "key30": "2A6bqYdK3xg1jVoYyoJLaXosLnpdJ5s9oJcEuuvM3agAD1wJn1isJgfDwDdT8ijEA1UUivL4jDqwp5uQKXs9PTDv",
  "key31": "hkXdgRc8pPj35cq6vyHs9ghX9sYdziXDgmfSiFPEAHwEY8G7XPVnTfkxTN9CedMjEjUwoig79tZXYTcoupi23J8"
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
