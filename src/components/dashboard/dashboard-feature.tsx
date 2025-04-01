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
    "5KuAWWhHh7z9nL86hR8DBGKXeL3KgCH4gweaQop2uQiz4gFgmBLaXdhgC1dxVnUn9jnZiD8s6ZxVPUQ3me7HZh1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E2TdqNjQjU6wzSxgWdDMJga3Hq9MTjw29ipUDCdmbsxcD38Jj4AZ4mLd7BbWMYwDjzBQ54WDXQnn86cAnYRwqKG",
  "key1": "3f7M4GrEhQpVHNrgBuMgDGPdc6L5wyzYCBRCQvfN2Qesdhx4cV3cz69p48czYNZPpyckZGEnNh5bcTVKLv3BiUnS",
  "key2": "2b1b79fqjqgnXJ2JVsenJpKPwNZ4UdVqH8wAyxLL4qKMo5DLf1mfQecDMxya5RNE3wfkMGYMD6ErfYi3DLrUe6aM",
  "key3": "skUWYAqr2kiiFcWM7wfC1dkwAEdQwzo5MarpeUHeKMDb14RnhkfvtzR4rZ8B6j8QnUVwy3hjshA1Zm1TQSY6BNt",
  "key4": "fUcA1HqQrvKgGbgVTpRzDNVxorBzu2M6s1NKkHZqgqfVDznFj6L1zx1ESThz8qHd6ozgmU853EKVTH87UPztdkA",
  "key5": "28N9ESPoxbD8ZuPJvrg8wEMcusH8VCvFo7gU4kWMgCjLTeikYypDtgjTaDgjNQjAptVuizCdsCvsaWFzYh9g19pt",
  "key6": "2jB6R5RLcJdig1kvRHhpp23QgLPM9bg2yAfrc9iCEkxDSXYx7yitqAhGc5X4dhHL7xnqiiXvFh4BdvG1greCMpEA",
  "key7": "2KQpv8zhxjatchZBmjPZrDabESfAjhh14oCbvbLiQvRhBmF3gzfQHufnuEqHTRfj3zfpKs3RF232kbEsrZQyTHwP",
  "key8": "o11rT7YYHr6n1VuSZKKWZYAACccoc3AUjGkQCfkkNTEwdz5nUdjfuxghuvrvDogQCSPpyyaj2AmwSWqKAw33xc5",
  "key9": "2qUgumLYBPaT7XbXab6ru53MveqhVtjHnFSKaDnnBEzZY3o2nsU1NVFteUTaB5i9W15VAV94BBAbW61bfo42oj8u",
  "key10": "GXmMHeDf3QcELsme4i7ZgurZnKVd3KAeNZwhzsYdPuX7CCGpuiGSPpSUEkesrhaxzDyrfgPWLfG4grNt7JNj3Fo",
  "key11": "67aUYDV3T7bpycYdbmoHHS28EkCRNKKC9YDs179cY4hZVbbF4mRtCjkkQ9z624AYMz6vjMvBjrbS5gHMcKekKhws",
  "key12": "2ATF4i7K3Be8kgDzvKTN4Jjiwsa4W122mCzm8froKAS5r7PwwMjiMoMAGREP2N9gGqJAbaUCxJaxkrDYxiZ1gZqF",
  "key13": "5NPWbHpMxdtQMzeWZN2TxvQYgKW7rKhBKQ92oMFddzncCF2w5icisdwHhETjfawCuqNn7FFkDhLDNvgxkHbwVPAA",
  "key14": "3bD5Xy3M8M5UGNrdiXrebJZB4UT85dDUQ1Dm9z95PLYNxp2uw64Ei6SAwwB4deP3Gtd4Ucg4BzkgTwAAbeW4Sgsr",
  "key15": "32rvoeUnR4papV9S1JdywiToodWvLyCpCBddKQaxFiJwQYMxH7YcChtuc1nUcsiatbxQN6KGQ2vSDoXKZvYWTFds",
  "key16": "4UGwPT1EGZB89D7CGWiX9XE9GitFTJ7QF69XBaxs24JQ6Xh9ckx78pRPHWkNMyg2rLwW67nv32hNkR5M3GuN2Wss",
  "key17": "5n21oFJeZMqwbeiyrhA5SkTM5LdDQJrivRkyM8Ma8WcA6M79cYooL8GKTCoGwK2kDxC4fAtj7W6bxJfPBvwC3AVv",
  "key18": "EX8eHyTTLQrn5mHAjNTZiok8QvQfo5AGPNPWu4sc8vxParXfbsYdNa7RUqwKJ1cGKKNFbaoMc1diaKyfCDqu3k4",
  "key19": "2rfpYvQu5i2ULAcBEjMbontfqLeWj8E8HhAexoh1R5Mn3SejPtP4D2v37hu6gHw6aad7VRu1azmfqE5U6XJR9LNw",
  "key20": "3ei95YZPdYjQ2ebWGegR4MRSEuYYuGB1xw5DcDXeV8JGrGZxjoVzY2BmGdGtqNSuwo9UU165LvZ7o87K4RFzUzvV",
  "key21": "gDXjymLpgahfeBARA8cVuNDPqB9cxzTm6GRwtG8WnjaBna2VVGuF47ahnaUSnXihArdd9usg9dL5UmieRCgqqtX",
  "key22": "3b5EyZMSJ2aperWPoWupphfGRAYpPKYn4XuupzGCTFQ8bDwxhqHtEthfDX6nC2SVvDvhoYXqseeVujxgRaoQY2uU",
  "key23": "5RMEGyV7cvWZEqbNdyxqypn43fXN6dsBw2yPXm8UHKdthE1dS4F3KiWupgXcBpWAgPcwyXHvA8N9TgTYaB1zKrEQ",
  "key24": "39t4ZxekV8zGoojRzgyUzzjfAYynEvWoyP6ookFnSUbdyDJD29pTCYscPeiSW1Sa4dJgdVwcEhGsmgWu7ieeeC38",
  "key25": "2gLE4K4rGRiSXaunE6WDYt4qd5uDUr6n5dCqvFmxswYecTQNxi4HTJgtxFtRBMMxN9h3EWU9f4NYkYbHbXAKAxb1",
  "key26": "4zKka9EhkNaEWqnBBEvmZfWjsFKESYn1pkKA6uuVh9Y6Y5VJBYxpT3GMx7wmSUNxVWGZkvHFqz91eVQJCzC8TRqS",
  "key27": "5uLcs1kd9PWTZiQAaZHnR1HCUL4iGHu5GF7aZCX1g2c3FewCSQmhQKStroY9daZhzMXaCMutbE33vNLhxm7uu65i"
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
