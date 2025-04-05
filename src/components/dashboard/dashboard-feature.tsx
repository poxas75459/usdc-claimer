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
    "qpN7kUS1ApNELXB5f6rMcpt9iqAvimbNmi9vByDaWSQCGrT7NbL82bpGqPSZD9PCyD6pXBZLRXvCSEmMgipGWge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aeMKE2kS4ujYGVqzBZgbs4fDx7SMscPHcptLQqT5LTFPDtRiTfv9ffS5S43JXjBYEuPoNpfcbCDUhPuw8kVUQwv",
  "key1": "2M22Ty5px9fe6ivZ5XkzLzmiRbixfY4iaQ9Q89xCbmycADEFtMBd942bi9LErsKkfUGU9wkTuFCCwcXXc1oW4Auq",
  "key2": "127tczTQw8V1Zsz6VEqSmAHjFwtEJy9Wjh3hF5PXQ2w3XBgomJjMXn2YJNzdJGLZot7Y8mQ9Xos1wM8cvULdHfw4",
  "key3": "2dcCQ8woh78UfjEXmd55xRhzh8wk9sy7GR3AT6DzJnNVxxWcdZpjtWnKWPPwfnj1J5xUriJvU3iNiYsi6ReKEDGr",
  "key4": "5DiXR5vRVXeid9GndaE3XSci31ousmuUieWB6SUwfxGQLgMLhSRiP4dX86ujASMPyd9LgfPbtRQXkmWuQ6Afwwe8",
  "key5": "28S3e91yoNYLywpf1xPV1PZH2yxG5dV4YEdow2xdFrU6xN7meZecFCtp2NhxKqgcj5EYaqq4NBiu5G86umsrkLFj",
  "key6": "3q1nwnFDZTK6isEU11Y4GWzA376RUGnbhRS9PTk6Fm4odjHcDrtyxBmMKof5w9YnRjB8Np9XE3gXsJuRy232hAAC",
  "key7": "5bZGK7fFJr72Q7kepWWurrrwxRTPFxatWvzWF1aRAfccY8ZKwDprd2zpB636pe65JiSaeiU9nzz8ViF3FXccDZwL",
  "key8": "57DWRd753MnHQ8RDkaFWyeqJbdM8Q3jrEY6TzYZgeB8Fyy3deUK2f5RbSBSR5VFWtYMi4DYhgcxRxBGBS6MiMjEQ",
  "key9": "35EjMx2X6SikCxBev6v3M2PZk1qrSK3ya4N1BTP7ME4NX6vVMMWsRA9yq68HuWUWVEFBeHNxTXU4du6tfmSNeZN3",
  "key10": "45FhxRoY4B7idYUTHwzsgimpb6G4WuuuoBDJuSN852RKhJD5bHSZsJdYahDt9A9UQRNCp73CXwkHtHUWpQHpPEGT",
  "key11": "5BMrWv47Px7gk29m3Bw61mXM94FUTRLhPaiv2EQdzLA7w1kMbTXnXc4npHTBt7GRAeNpxinCxn5xtZKxmtvk66Mb",
  "key12": "4pdxEYzeCd6AxCyxgpHpMmURGdArkAUj1k9uAinYG9QmtcPQtccgM8bLqb1wXpKThh3n639qMtVwTRiS6peBQaA",
  "key13": "4kXVw2Akyh5HuuVCep6pVJpTS6uY9nM5VGvLsDwzcfDRGB73dExFqEnNxsrPNudG6vermyT8CniE7oncsdZhAgjR",
  "key14": "374Z5kCqqshSJfmhN5imE8UGFmj9Bu3ngYh3NEmRVdicScVdJ6ZtujWpLKVNZSkrKdsbAtStF6EnHzG9HaDwJA7E",
  "key15": "2odpJqGYqjxjGbD2gVYANfCtsy2cK1uLdy34VJEn5G6nLHwnThC8njdqaSzJUhZqifgJLUSztWHbrJpRNiu5wYiC",
  "key16": "5P3gdE5KtT9gquq6dexT9rrszziekpPTFBPaoKSk1sqK5g4mbfQh81kLDqMDMkyVH8MtZGCBzX1eLi52ntNfri5F",
  "key17": "49FWM9ucjhkzDuEBFKBhvPpB5oxmxpaWZqdGiyzXooG2VuVNRhKbjznusc8P7aMsz3oU7XmPj7bEaHvCrzCpzxyw",
  "key18": "4NAAPtpj6XRR3HwpFruzUXGQZo45TeF2DT9NvKkT6C7mgUVHEGDt9qgrCn2LzLNjHDipmRrdZdvM7FZ69UFJuRQD",
  "key19": "2JmJtfCjowmohbYDjNndDFrd3t7rtC4TK4nAW3JAfq6hpNmK3H4r5HLbWwJfw2KhBdnCNa4FC9UGx6pE8J2ow75C",
  "key20": "yPw6UeRgesP6WBkatHTpdwEfyRNuqTURbFachTyHFhd8KG6ftwM9KSEFFFW1PHdZfhLHVe5uTMNmw7EQ9BepZdj",
  "key21": "2V5L6zQeGkHFGxsD32mcLQfAvseqxAhxVMefr8VAr8s3SgEpytmLfoMAsDt3DLrPu5ELgu2avmnbUuYdF2tWZyMm",
  "key22": "JpDdQ8wMCqpNWxoTxTnaJk76wXKhE6BemnK5DSj6LTfcjm42EEp91aAcXmGx2DDmXog9D5CuTQDqTdxhwfiLThA",
  "key23": "rrDgn3LoSnMpDJ2vUHNDqU9PssnhvwtF36ASXiyXeFEWpYne5SYtnD8M1UjjJiDT5NUnhPmm6tr3JWMnhkqimJZ",
  "key24": "3jZbZmWS4CcBVX8QAuRVqhC4nW5hWs9aLyVVvcshnDTzu9sJ21KqDLxk6NC4Vfh2oE3ib2rgevMPT7DTh1Kg8Fxi",
  "key25": "37KW5LM1WciBxj6J3jLdYA56WBCDJ4izPX8oRMqJWGN3R9gvcnWZR9SzseR1fEsUJH85FwgW6tRiLEYPNDZqbG2Z",
  "key26": "4grUiNoKb2G1EA6LsapmNN4z9bUjvM7xHYHUo7ChMrm7HWwR7j2JXgMCQVp8QqgZq7XursRg1PVTJ8JAS7EgTTdU",
  "key27": "2YjgVZixCz69HULW3fT599hgpnCq9mWHbrNvFWLoJe9EJfKyaApSQGBq8bUu6RUgGuV3bcdn732dNd4a2SLAxu46"
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
