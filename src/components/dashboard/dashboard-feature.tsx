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
    "1aunFMAuPKWGPnB7APBQ3BmVGf7qLwjpu9jXMiorRsf4GJBWpBDhNR2UijdoQKikJkUG7tG3fX57D8tFN5MPXjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z8GWiuU7xE3PHaXutfREkpDuuVK4K88yJrChW2xnKVCsBnPwwqKfeyoJSppqaNoZ9nT1RYmTzJkALBNgA5NWi2P",
  "key1": "3jtEQRyQm3jF1kUCGsrDTq28MR9g8txuF8oMMTM9ZP3jmEoVXtKNLajMTebLdgFP71zTt44SepzERpaHJYMEGMxo",
  "key2": "3jm6GfWH3uzJAEQH57tt7WXoThcdd5QN8xc82GLAwwQtnJxADazzqAtguiiK8uQGvVQdJB59F52MgVtWhs1unRgs",
  "key3": "49edirfDpawzG1CDrFXp1FWZAnDcEgTwcxj61Mc1DenNgoE7jE3mikGF9LZXutbwPXvnptsepTXQnV4CHffMP3r",
  "key4": "5u414AnaCr6v1BRf7zu7oVfeLYrcKLH2vetz57wDtogHK1rSu6m8xeCMoBB2XxAnXjxEW5GHZ9dn3o27KuZEkJ61",
  "key5": "5VEVWz2PtNUTN3Mh1q33cyvNVGL755HdijtgSk7jCQd4vt9Lq3WHb8VUhqxU3NGbGj1y7mqqfe4Y3kP1d8AWAkWq",
  "key6": "4D6Hn1gPB2C6sw2CD8qMkjjNTzMw9Gjv73NkD5h2yu8HVLDhatTMFQQzznBtHJq4yUJ1rMk4MSpgqDv4aQsnwhUV",
  "key7": "24oy9dg7a3k6AcEgfERUAjZjFFh2ZzVevqu6d2bHXrciWF9pvGwgMporSAgdLHsw43gCDKUSFR6PgkmQ97sDvFDH",
  "key8": "4rFoUc8JWUXs6yq1aWJzScNYpUwKQkHicCG8SNhEWJdBgY4oZ95BHR4s4CKajRAFYmgUzCUBhN8jhod33LGcfyP1",
  "key9": "4xoeyVr5991Y8jyLmXiw26cSbSn3MVQ6xcgRJyy8UuiZFDafyynfvR7D7nvZbJCALaTehz4SbbFKBPyoeZYNT2nn",
  "key10": "29Y9HQYJnwjtKLSPbiTM4eR84tKJYCPFSx4L2vmrv8fULFv78sZ1SFK3SUQMZZ7UGKoedauvwHG8VxXSC5gDikuj",
  "key11": "4zQ56zoea4fYv1aNwVhUTNpT7c4C3m16hskDja4nbbpSG8dwGu9VYYBpVwvhiwVrJj6v8za9UyRSvhxNTZdJVjoS",
  "key12": "2VFNSqgvZRCJfDtGQVK9fTHp84kyXsPwq3yM5mcQHfmA7DoCVBBrJ3RoQeHENR3eq3CMZCB4jfGW6eEBWshTThPU",
  "key13": "3Hk2w7FJCHvL5fPutEgQVKHEbaqKGNufmtnTodQ1ma1LAuStfXGCRMc2LKXeQEabGMwPF1iMFLfrTqU7ojcBHeBT",
  "key14": "2T2q6PdQQbjrzqSpZKH2eaYhX25WTXWEDLANriqSkFVMnwv9rKCH3JFznx1w7xswJTJNZPH3DXbjdFwW6toe9jD1",
  "key15": "2uEbr47YRfBoNgvQBox6g4GB3MffRP9fWjtWqtdnaduD1Ei1M8W63z33ksRJJuT72dnKq9wNa3P8f1GNbmZ1Lnhv",
  "key16": "zk8DMjkMy1z5w9X6YM7a7PsBuMK4sk36eGeNtJFntsVATwGm4XzGZAMPZgLYu1Zb3N5fnaPn7q6tQcadjcas257",
  "key17": "dNpjdQqFseGzH6ffrtfxXe8HXkaNXvK3Ccmp4mR1n9qbNNSyxNPcJNCvCHHcAT8XCXnUj63X61zXZmwGzdms966",
  "key18": "4p9adRubYAov898L5da9WymYTqTsoW72bYoHe97bcauPq76gmf6xwWXXW6LXELMQhgbJXw4Ybdyv8hvSzjoav1sJ",
  "key19": "2cVbYLNqp3eJtG9eo9DX7sQqutEe7FMWHHbRvfnvoHsMHtLFzvyVv4i2Dmq5vYoGpY2U97T5xvx2kR3L18EZJBrJ",
  "key20": "3SdvttS8TGMiM2DEqAafB5v6TPYYrjfUsRLMM5QVFzBBJ3XrEEAScGduddsnqPt3grvZ4bhzmrjsqJqwrjrjVGSo",
  "key21": "2VddWn78eTYcyte9gEaHebBqujZWq7ZcftWxyea9Re1XV8BDQRkpMoUpXjXyrCBPVgQAKyGx3CjMDn8jLpqJJSWU",
  "key22": "mQT3eqf71RjiwV19pjADFRBbMw4JsWuvjRekxAm9WRhKE4uC92Tr4887GLpH744e1fhQ93vRfdckq77RgeHL8uj",
  "key23": "4JXXXTzT5mkznsnT8aa5uzk5G6XgqPjL92C3VPT4otzy2FuH88rVfLXQMjdpxARyeZo7Auc9ZHKUaqPBGyD3ojZ2",
  "key24": "wtzLK58cyVC6yW89shpZkKPrKCSTuKvHBVSpy4p6dJHBo9w5fYtmw5ynka612qPoCt2WRe74xRKFJLY4ExjxMPC",
  "key25": "3A21BosRymHEkVxHaP8uL3UkiVmnZZKKvcifzxym7pDj3fUoi75wCFRSByWj8VdQMrCh4h2ivne81NUm84nUQsHw",
  "key26": "4Xk4qEJUTFGr7tydg3QhfCML3az8QnfCjDwrs4Cx1pRxJZ5PbHh3Wc9VseqmfTufVBdpHna4tqDftvV3fKYBcVfL",
  "key27": "K1vM1s31qRWYWQAckaCRRvZrpu9g52H7WzvvitA724Pk6HE6DQ1HWZ7tahaaziixXJLWipP4UsFwf5KnHQLoDoc",
  "key28": "jQZN9sWqYhDK48U6RWhMTWtyzFrMiW8n1PRVsK1USYNMwHd7BhXShWJUmfPoUbadmJcNwybLL3J38Jjp7ngPQwj",
  "key29": "56wmSXDxAAc2t6c42swiwjHxa6zNULGwVKYTdMrzqDPuDNfGm5orvup6XUzD9D4vA21mkwcc5Cs7WeqkJJPpoKFf",
  "key30": "FZEssu42FE6meN539zpZiuBQ5KvzVEwD2PhiRNHgGV7pDrFJsPht8RHRXB75nCs2JAMxJczX6HhouSYHRnYCFx7",
  "key31": "54Pp4r87BkGkGNttnMzBKKHYXwndW5K7SipoQkgfP4orS4N5qZHtXbG8h4sey2zb4a9MKRhGJqviKYEb2mJELUgx",
  "key32": "3Q42mSZG9ZVYiFkdHG6Q9h4Jbtaj5MtrzCzaju5iE4rbqiSDUHWW1AU4T3U59KJkMJYUmy5pxRbcAxhSDYQiVG4p",
  "key33": "5fREHpWujSFqgBhehy737SzXEGkqqfmdyFmBDvAvfuABQQtm5r9p3aU5RBZy6AEigCNtqG24qcAmB1rsS3vCvXAZ",
  "key34": "5pjH25S2NyWXe4V3AyQbsTXSw7RcdZspp17Ui1drot4UaYfZ8JJ2LDdSMKwWiKZSDVU9Dpv17a3ySC8um3ZfbRYP",
  "key35": "mDU7W68BjytiDJLmu9qfhjrveV61iV1me4QmhvkyhXrFqsBwaAaXgfF5Zt2bFDhQU1j12J7p7EiM82QvmYNUVeu",
  "key36": "41nu4McgL2h14qzbhimDkrzcXX12BCRp7v9hNzstsjaphUSdZkzzpGN2mXkE9oGakvM3hbSUKng4reCXn1DYzouK",
  "key37": "3wGeDFVxuJJYjgEszxgcPhxxKs5aLzbzuyCMjhmRopBAxvyqz7GcSSzAi71ySR7QyP8KePXVpjoDnUQ4xnZ7vBuq",
  "key38": "RHSYZn4oAvzDTJQ2eHxjFBXXy62hBUuUiB1yA156g55La1oMgUcejytnaRCb6D3g7UoTJrZkQjAKxPLJmuLJZcB",
  "key39": "5Q7ZhEmsZtwvZueWit15WZdw6PkcayZyMGCgbBBDPDKHAnsYFz75Sar5Hecv1vm94GL41YUERc4AckZgmqqkzupv"
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
