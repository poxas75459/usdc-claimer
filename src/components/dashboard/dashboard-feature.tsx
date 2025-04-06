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
    "2SmEHXrGdF6ZS44P9hGLzCjPQ5uQ2o91Q1XmRU6K1dVdibg6pg88pLZ8ms4jWvX4pnoCPn1hgvFfm37u7QdN6XLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66MahjBzMbgoVZCY6y43yD67wUdV31ud3s6W9MUZqSC6uEGHjH9ji8DjJ5KSpprHmsif7m7S4zErvynJVbfkUjpo",
  "key1": "5zdoqibmKciyewu4LCH5rcUSjjsXttmD62Z9QyV11ebUq5HfCLnkcVBNBGP2RMNWK2zE7VHjzt4Bet5hZjo3oFZ9",
  "key2": "6332ZkFJQF4JsyaDyNkT2ZUQrMpTfY43pp8bk47tDbhTxayDRT25cqTMw66cMSpD4F9eCndWimMYLrcne5cUsyoy",
  "key3": "4182rDhzSnYWZLJrb5Sbc82uZPJ2JGYuyDp6as8eBn8sPRmzYfGGZTWZH48H9siyf5uYC2jxwnjD28h4BN86tANN",
  "key4": "3RwDTQF8yhKq3oo8UqpSxa4P8mz9c7KScAvfXpQ9KLswSCqHaYeBPz9kkukuEJfz5TXRCwTXDkQ3z5jNVkym8C9M",
  "key5": "4Ka8PegktnVbmidbMf4kTLK2ebzDMiPkrcXkojiQgbeQ63nsZo8UmFPJeGEtFw4riYev8UVwday1U6ppW1t5DgwB",
  "key6": "66iFmnUwvAD4pGDFduaJhKrRUbgTodxYWsh9ZgXx4PgaLFXHuMXj3bBkirQjiRzASaJNTnTepnYpYTy56dbcrxJk",
  "key7": "3vHCGYHFL5wLHyMJPEeENkmVmzMgEMtxNjV5aQe3xwixyLsjuLRmh7GHHU82cka5CkBd8FpeZHMkRbovoewVQHgC",
  "key8": "2WBcyp3JGygHC6B5d77ctrnUyt5ofdVQFcGSxKpV4kGMLCPk6Ex5sb5mszYs7De6yg8iaEUM921ZSMw8MR5LU9VR",
  "key9": "2ncj3qiZkEGKhTZBxZuewKHa73y2MgsUvynr5srtm6QoNMU9BJXEeAXovjdkqiXMuDR8rayvGQVuuq5VXyPtJxVU",
  "key10": "5CBdNKNXiGW4Lk4H7i9DX8fzYUpwNwPcvwXc6viMHwQ2yNfSgFt3e8gkD2HREtsoah52czG9DEDaamkt9Ebmk2LQ",
  "key11": "65icbtSdmK19fai5twDomp2zTo2NsUtgjA3auShkqceEPnGDPbuF3pr3dDPHDfWCUAfqZiNKYNSZuYWMoGhYrcbk",
  "key12": "gfECFVbELbNE2SfEmfY5XnpnhigcM6KvdBMupXCyPxZTc5zcVj7NQmMjAQBajzAzuhgPEzmUsbGxAJQZ8691NnQ",
  "key13": "5ifYNcguvrV7oeouEY2yudoyraPhZ3MW2zGYs58FP5EkjuXzynEBHPAjdy1hFrwtVRMFoSEjvmeD221KCbAvJbZM",
  "key14": "vc9N9a2W3Aegdam6HdCNizCBUXfGj1svRAXQRxFGiQnD9rYfQTBht53Jzq7EuGzpbdpB8zb8Egt7KD5iQfcQaqt",
  "key15": "2Z5A9wgArNJa4Gi5GeNfdjEZWtkf7T6ZFY8jTxVgFtMmhzAxL59BNQ1RZ9RXT4AZ2Y3BVBKQya9rSme7dq7ifmeQ",
  "key16": "EQAvbqQxKjS4TFJWdVDmw9GTPGWfcHaKQCTcwi8LydDKEQEGRJLoNHvnAaujFFBEDqav4pNkiq1EKthPxEzSP7L",
  "key17": "5xSKFTx6sxtp74DG87p2ijUa9FW3VgFyuHdUfPBF1JBDz4YD8NVoPiViSwKFhBnSj3vjQdDPeQZG6PYSiBg3AxeH",
  "key18": "3qjx1mC6umngqDT3mgtiJDpXvfkcDsyvWnGHT6ru3CeJ4UkyY6hkkNKkDw4pU4yjyNTY8fc9KPozDUQnMTefmqN",
  "key19": "4gWbwv4heD7tJLDwFHFbLMm8tgKTnftebGvYVudN1gpSJrZLRfm4V88DpXvdPaL8mpFRnZXnaT3GFEgKkGGjDD94",
  "key20": "5sbBwgQdGr8A6nR1bwASBBBnaBCZjMLV6ZaiSe7E6yEc9FMEHGBuZFwitZdXeVyowLQxvPZkpUJS5vvwfLH7dnbQ",
  "key21": "5WaKfX4JXfQkNRaaTPa9Kb1nY75JzNVKrMCna9Kwz67syZiKdDP8LwHrntqSpX5ercCjkbQpgTyVZA1PtVPjNYmQ",
  "key22": "24QndPpCMsEA2ZUq1EJj4wvzHHuNQBHzqaezmqLXwiQQiPeie5wpZZNDgsBHBAGV3KSyM2RN3xa6Nmz6rr7pN4WH",
  "key23": "3avi95MgZPhgwrZwAu2bVpeuPQ4c83TafZmwmvPAogjWDDjJgPAkvhaxG5kC63tZ5CT9TFqEYvtwGAVYrEiEJNGw",
  "key24": "4SdaQ4XADYQ4wjiC3wy5gzcCinWgazh92GJomxb6nDrCn2QdqtufCJjYFpo2ra3RcoybePvL7b7DhVxgtoBXxMKF",
  "key25": "Mcj3f1LqQhyqDf9bTxZcNMwobQmnpAQJKsS2K2kDQAnp9dkyja1jLRyk6ycDJ8ydthiSu8SFG8Ph4LUR1YYYzLr",
  "key26": "MqinQhfFEeQPNXn3UEoQmvGrEHgpRS2A5iVmWW5HVbjRanxraV1MaJsEa5AHoYbLWWAQ1VtToq8ZKf32jYvZm5n",
  "key27": "495u49rki3s5AY9EsGqPvSo8JQFxWjmAxMmkj9ywhBMY8BHDZivcap8fkw6hVL49UaTxMiPNJ8Vopp5GdhQedBLn",
  "key28": "3uaYCxPMMVkSce5aEHXXTffsAwEGuGsxhmtavtk4Jesed4eGuVAYhtoQCn5AJcrMcmMdg6erV6GbpbPQUauUHafa",
  "key29": "3pGaibgRPCjVkeSjvYKgPfJPsA54K4WHyfsGiTs7o748PfXNt6wJhXZhQEoCkynJxNGZEYCxBLNo3hnyWBppJdiW",
  "key30": "4rXoASowJRQkx7E6vjegoJvozNSfzm9rj48RNh4UBuqQ7ZxwweFe2upT8Wknu8HCZ8GoYNWEDCxJwwCyaUPUEjgr"
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
