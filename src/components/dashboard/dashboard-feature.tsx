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
    "sEocPxhQNBsg5CsSWzXL8Co4Y81qPkbBmHjDzeSc46sKh2cyQxEVqUgeyc8LDfEVu877KtnpncL7Bt1gC9gMEf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QMqhTRJXWBRW7m4FEpYzro2nCuwJ5ZFgbFaEQcfuofG3LdXVwgH3DvFptGitVAAq5JBYzkSNQ44MPBX3fHp9gF9",
  "key1": "4dtnBcjD1pH9hMMCUVd8zULSv5X6jbEgssqUheP6ZLuF2KmUhCbvEVe7hjeGKzQEn5hYVhuA8X1Dy4FHWyhYAxAL",
  "key2": "4MXdpRobQNVCmDnEErz1b4BYteMmNXJGN3KJPdZZjW8uVeoJE4NS9PYKfYq2kgTPo8cURCErkPz2YWUwx8EJbVrv",
  "key3": "2K259zBbuUQCDTqCyZRtw92Kjy9qcAnwsmxtPLUoNRKka1xFt5iuWKo7qf5NAJ19Bn2Naso23aX5F3dsUK6vYMc3",
  "key4": "4nZZBuRyF7N85RCx5g7tQ4p4QQSfdUH6hfo6q5r3qiHrqeD8bEwaoNCtqaZcAi6fC9UW9tdbEcESZJ1eCceVzY8g",
  "key5": "5H7CmqfCxTgkLkqVJnSuxMDbUkkf8ARpoN79yMoZhGwQjWk4FQR7fyhJbtPMZ5rhEm6e7QHAmJv1DhorXfrmytCH",
  "key6": "5uSvyABD4aUeCVvML3swz7HW1qXuzZfqnER6pfeuBd6RYyt2q7KCayvDnbgYv4LPdvqJAzULtjZYAE6p9YNf4Bfu",
  "key7": "2dZFdJrV4NzvZtEkNcE9XFomYT6t5FaaUZhN1xzNPQibz18YG1PXDSm3mhyWduS8TKGp7499i8AXUku1C5ERd7e6",
  "key8": "46kBZeHFEW3qwBP1ePULiEqjkDAHzxzZddhN19LxUPxT98bnz4A1DmHbDnd4j6S9CJbwckTZyjvB9fCRuuhkvYRL",
  "key9": "578AHXW9PwQmMooJsijEh3BwVTPTzeJRbfFkBVRxZc8DvAnRVPJ2qXGDK2FYHCUHyujkpkaqs7gYe87GET84oY7P",
  "key10": "47mTDkQ6tbqnoGYrLUAEpe1jShHeDwF1dA365JiFhqTYhMKXNQdwMS3988mdgEpq6QKe4NQYkKjnxPE1MxeozT8T",
  "key11": "3buVmHtrA92oiEfXFQwRfyVf8M2JPitYwBLhB3Q1i8unTHrpWuD9P4TLheSsWNnSEoVL45PBN5rC1KAdz3mPJ4Ci",
  "key12": "3PfBbetWbb3rFRfj9UUD8TuCRy4BuQSDp7cg6XxVE1fK26tfHbWMMoGWahydLJ3VEjTubUY68XFwNVgDpsYWqCXu",
  "key13": "44XbmyV2B5aNYY7a5r8R1K7WR6XW2TLjtgVVzmUttsPAEAAjEMZ4tNgMxdkTRjPNnCk66QzkJo8gVSHzAQmaVjxF",
  "key14": "3zbVKtrMmZN9qUTuawRdKHSXcJAaW49hNpaBaqwrZfePa1wqcpgQqhdoc231nU68EzsHLffXKrRE14PoiasaNE2g",
  "key15": "4o8hrmBApFSN6dFBgMse9KenSTBf3rPWvu1q5KfcYPXyKiEBFnYQurokDUkenofxA2mgDo2fjTjeT5vbaV95TkQJ",
  "key16": "7Le7rJZMxqENf92h4Fxm9sKBeoj1eU8YaKsxh15DepHeVYv9tDXQxZVL9ddLZmdVscAKLMSqdvD9m2RC1yQcmAd",
  "key17": "4k7UA5WSHSvNNxLgkJhfdHC51CNvhSLQt9cMyowbXoTUkSHSdQaLMiiunkg5Z4LkdF9RA8M9ZXdn6VoktyrZw5aj",
  "key18": "qNPoSh5seAm5bcgvdYTNn3V34JvHuvVUsVcYWEFk1cg59MrPyHKMiH1yznQiEtRdEALRdbiZibkXgn1VrmoWZsM",
  "key19": "64yBe3m5pzWe4kaX43yUKUYCD8ecwV1wnRF8SEmHURtgzxThSUFtwBTnrk9SttKwTEHMxzu9FSdeRscXtvEHs8X6",
  "key20": "3rMuDicqL3gtPuGmaVzk1v7qEa9NqyiW6bjADKNhtagnu5dSSXqovVpFdHMufijeZPXXVpCLGBaW2GKuZAuUsoYR",
  "key21": "2xshiSw5e1NfVC3FV2USYfNGHTSoSPYDTbaJGMnqbdTfeEaoCJS1s6NCZyFo9XtwCrit53Y8wASbijoybKxXhwAs",
  "key22": "3wZ8NXtnPTQs7z7i4rLxuipD5pWV5RvaWendS61JBpwDm7opQMQC8twUk4hDAaJqdka5GgTjyG9spAzXhCHWSBMR",
  "key23": "4SvyXDj2mEd7Svw7zwmTi5u1zicfGjh3mCgMTcxmkAQ6yDvJnh6Lw5E7gQPtTntKBRzwgeB1ujEur4eXcRx7ZuKv",
  "key24": "5JkgvQ1tRPKeAzD7z4YszaWCkgLDk9Tyoi27QKzCLmCFrDXi1cagM7JX81FJgy37Tky3NY2vtRkEHCDrbBcVDS38",
  "key25": "fbG4RhFPxrvo7rYJWv7hHj1idYNvQ25BHyBw3KoytGKyZ9hm3SxCPpMtrDykfLy3YgzfLzbrbFCvruquTRhfy8d",
  "key26": "5xBht3V2kgQssJMUh36wC8ikzVbCHnjp9LXgtsTbvwYCzcnYJkVnRD3t9yzHwHQaE9A8qKhbGsKuG3cMQzuGJ753",
  "key27": "26G6UumMRAEKw7XhgVeVr8yiqc8ycb2XXSNimnaEpLYARFynxCexKa3NQems39YeCSKVk9i8ZDhjARMgKh2VCB5M",
  "key28": "51TYkRBngvcqG7Nmex3GCsP57Nxohe298jdsz26rykg6txourXSW3HAYiY1w6GXJY8VujhC4EXSNPDAhk3FXgxDK",
  "key29": "66UAZK9hZyZ26bBC3qdUpzacLugNuctcsmDuYF4H7VNruZCpA9BnKdR4mdRkaZ2ajwSMBwiJyB3Lyq6578QJ7H9g",
  "key30": "2SLGFDxyjSjxr3roNqstPYjYgoeGPDoKf5KUgg853w1Sn2wPN5LVafv1YDi3HM3KrcxwgpPtxHLDaK5hkuEeQf1a",
  "key31": "3sqntw93XSQaNyYCZsvLU81HKchgFgVdFHkwHna7kjQ8XLqq951rrt5sVhmFN1g4EqhvFL2JNPg9EF5yUg9LXbue",
  "key32": "5bRA3jzk6uUzTmmDL7HPhiETmxcjKpQozPeiCZnLBWFBCnJGcn32hyTHJXTfU22vBxSN5dgtpg5pDYKY2M61Nfsc"
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
