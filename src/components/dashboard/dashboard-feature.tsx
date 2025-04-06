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
    "31Vgtrpch7HJBdhEPFQG8mGejBZoVmFGEQpYtUGSFZu8AYFD5h9nCjhrsNBiAWZ8MSs2hGRLVhoQf2GJgWZRjQ6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bhR2PGtgF7jVMPL3Dyx9fbputJneLFdNpFJvFQLR9ShzehUzhqMN75BtHFgWQ1Bq8715e3kTYRcR5dfthrApCJU",
  "key1": "Y2dugu44sVdUkmcWPcD12a96nk8Fx4ufrouXMw8e9waP3AnEMqZS9dmmW2FCTFMTQyucWgt9ifTWZu4ExTAtLE6",
  "key2": "2Kbs8QuRuj6ociyGkW6Gy6SPuL2d9CDpWsxFeXeHNRtkB8aQ7c3um8Ro91PGQeAnvSrgJftF849Cf2QrXitimSVd",
  "key3": "3P5WjYKdHubK7mnBGuJx4Y1BjsjZp5SqNMd93ttMCLTQsUbAUnBskGGo7dDQcDh1Ajx8KBCCxrvNZnTYzDe98KJq",
  "key4": "4VmGJbHUkNNdNZGVCmugsL9Yt5gtW9BuU5Ng4BdYfD1XQ4ydrQuDom2MM5i9yG59toZgi94vJtUywjwcgityhhhR",
  "key5": "5yMH5zmV4SjZFcg7ZrpqugTfCy2x8j6DhWYEgqnYHiyKymx3pQSZAvZCztkQwmSPgkVxP5PHdkxei5X59P7jJ5fi",
  "key6": "4xMpj7rvx6ysYPvnHfyc7pEXeAQuaLghbEYfhKnJtbS9aUSSEz5ErhEQHgeSY3ZYRv9Wq611JfVwnWxCWGDXTjRw",
  "key7": "39hHLKqxyJ2MwG7gt3DvmJ6Em5iiQcky6aVr5YtMVXzzpseHd53L9VfnouvGTPUyoj9KSqUzbKWVCCnU4eG9E2fJ",
  "key8": "5vvKJb1cDzrn2ASwM3U7W4BvorJHruigMtLgFtsQDLTueGLJitqGWR5GZ7Nw3TYYJjKgEtsnohpjm6AVUCkZAquf",
  "key9": "3CejDWuUTAUPoCtNa9vnK1pCGH2Tv7vii1YZrTmNa4EqTEKbTh3upYpvjAFDBuT6LMX8yDogBkRQFDehi7J597Jz",
  "key10": "5UDVQYAA19U3Z2UjsVmMCMGtgoRi9aCNGQ26d1yW2HSTbZG4ztDraiqKf8Ky9b8MDZmqDjHZcm2Tdm2wLk3TwQb6",
  "key11": "2EVqrCgAePqg3k76Q6oSW2K5vUMihAEcZtoR2DNr3yCC9w29c86vNdtrpbkLzuhTvi9W16H57T4gNz5ruUNNmNC1",
  "key12": "3T46Ja788S6KVCgSMfVi4ecDuLW9pghPBKfpYRQxNNoscyjGjkXHwES2oNwaMueNLBTPWW1tdmgqAQRnFfQ58ZxS",
  "key13": "H7amzVk7vzghrmYxZXQpuEkNPH7xm8LkHb1aoybzC8n5YsXPcM2MS84nJ9QTCBfYW1b3wm4sUxFBusaQwm83QGM",
  "key14": "2nuLm5Kq7tMab6ceoX4acvxGuYybL5axJEifFeE2ruzQgFd6EtV1SfNcY2qvs4ay3rFt3k3xrgujmA4WkCB16rsL",
  "key15": "4dL3qemwgaxDLzzcb9APpG91Q3dECUPc385jncDxYqLZAjgUw8agpz9YKTk9bgjFWdGgVa7SCjMP13XuYHEkZup7",
  "key16": "5kLze7qbMLap3a4XFKxiPfRf2NxRjCgK2ygH2YQVhkG6w8JUQRrmut7HHTaegK1YQYYmiDpz1zvU6sqsJj7Qmw7a",
  "key17": "39X43NKgVfHtrxN8o4kRES8v5NbEYBspQTBmpwgrkq6sNSsPNKnuBCnoJR9m1nqiPNUtETRSADWtuv6wEibh81Zu",
  "key18": "4RZUwJDvD3bX1qxQ93qmPkyTapYPjYMCDR6JYKRCMKXZFboSTkyoLaLCDL94gNT5T7vJuRrDBVswUo5Rj7Fb3qMD",
  "key19": "248jZ7B61pqeu9HadcoRe8mPg5Bro1MEV9SQjNTEx62jXjCqf78tZF2tm82c9pokRNvQXMLPbYSQz7LPMZthBBzY",
  "key20": "5n8MKFfhKTa1SNWtNo33uvhPZ22JwD9E1M21aJD4TmRUv5J1nSkzvpU6H2k5e4H8fB62ZGi6bPZbSqTJTWXqLw5F",
  "key21": "2uFderjrY87R2kidfaS7qAgoHazENgAU4jmSABtCK7siwUhirfZTwbGfNU2b1kToYoEkS8hjTRJs2foLgJdn3riY",
  "key22": "TZAY7W2cBavGM8BCfPZR85YkL9X7t3ZeQ5F4xQWr6UVZQoLE9gKjthytZbH1kLRcPDyoqjqPNyLvn6pMumHkAFU",
  "key23": "5cSZWBsEXv6TnQrVvS6CaJV33kHpice2sPudcxvgNkXzrvMdXodRvFf9t8p6JGbaCjxobCxu2LeYREGWdqxghhXD",
  "key24": "29GpTC82R23L4wk9qjoC32NS6e93UjorEiwiMuupZMRKVz2X59FYe9jE4Q8qrFgwXYcpu767aDyFA5v4szXULSwS"
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
