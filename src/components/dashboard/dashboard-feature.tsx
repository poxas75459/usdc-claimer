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
    "5RQpXAHvSF8m1ZQvE9aSCDaTSL2Tn1ipfSyfbDGeNzWZjrCgwc1NXTmBfvY2jmQv81XVQGTWEGGYAkMinmjF24kg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FzMobempifKnmS1YRrhg97w9669pyN5gY3aWR1MYRfpjwxjp7MvtyjvowrabZAo9JS3r8413WDYbDUG2SRtMCuf",
  "key1": "RaHuNJYdsBfFhyKbTCvPdeekNMfgy8aVtp9rF5heCCc588AisTBUG953nYGVkFzKMTtfrtuoEM81KjSGAg6yQkk",
  "key2": "2YX2p5vSi153gxGio2bmyxa9Ba7bj4ox8DMxnhxj7u8Uii4cmyd666MjcSUYRHhagqFuouATe7JK2VzCG37FKHrq",
  "key3": "4htQgGb2kkZrzJbm52aCtjjCzaawNtQpe5SCFmZhzWDrWfsvQZNzLTP2ydu5we3Ph2B7pVPTnXYLLMuEi7fWFxQk",
  "key4": "2xvSwkPrR96EADcJ62Nfv3puQdZUaVgp8sVtt72M3cuNMBGeaU2DQ5qy91kdQHTUBb6qdpudr322rMpB7d2kh4PJ",
  "key5": "3YxYC9PruYbmxS9sjRqwXvWcYwvLQvLtXRYDxH6Pd8RvtVAEBA2n44vwbFdwXe6V1aiCWSqcAFnU6R4g58tMFcuE",
  "key6": "2DcQBC5qhGYhouu3yo18D8xQCDH3QK2cPR92gcKLfuwAX9nUaTpRqrxfpE3SASE2m6YJmCGnXoNm3wob1exZ5WBt",
  "key7": "R5bkJD8xj1f5SdAUThZ6X1vX7JTfmXyjRYGn77XVco1rSTUzHHztNyCq1TDEhJnbtvdQUoN7sQe593gSpfbJViU",
  "key8": "22HZj1BVj82jK89bi7immULVW7DNMCq9PCaPXPbtrszPeBgAR3pKCsQHiP4ZJemQpqQkpGfxFoaKBSRjnGr6vKd2",
  "key9": "3DrMPJ1M6Q9FDe1z2vDrTVErRXkGHYDd3pJNPpwpygTE25YSDXV5N4UVC1B8iG3KMixEYheM8NkYnQyx4MjjAMu",
  "key10": "5yMyUVCRHZLtqJ53fdRP8ZurcPXRgLW5BiYgo8iCyBqCdX794yiwjK489s9655kG9rHbmTGbhGaRDSH9HoVm3HKh",
  "key11": "R97ecYHW3vWGSHPT85DGhJQYWXzaFULuAGmFvAnJuuMQx7E4DRi5khhXfXTjyk4rg6mKamJz8kAXG6XxkdSZ6QN",
  "key12": "45hSqTKi6MwDJKmShRbdMe1oQeXGfqJdAECpUw9BMHZ5ZUuzBG2YJj1CEWZkCHKXayfRMoDdkXff2A5D5PRjUetY",
  "key13": "5dgRhDjwuuxWPimB1udMepVHP1oXZxdfeDCGMe7JEG3SAnUPubpyapFLsuDTj3QqapgStNN4t41RhhfUtwzGe5ei",
  "key14": "3YxSmE8zMqpT1sv2FRcW134xTv7jwSHzQj8c4C7GFtihFDNLMJKA6xWmE5QiQQr1Y8Wtb7nMuXsbBU6McW8iH8m1",
  "key15": "61VUqUwRJetmB6mnnycFgYSFo2rZ8hbEzhoXs1yvadmcCPn3ewprDD4ifmbqCHHGcyCn5MvQwX1LzgFvQAzNzv32",
  "key16": "fSGuNwX3FxsqykNXojJJnm5aQ71QBvnnHPSzsERMYJaDSio9HU5DN46jC7WTRaHihTbQsTcsLGCkudycncYPTJB",
  "key17": "31Um3iR5awJn4oKkBJBbYU8xM72VtoKKJqiLB6R5KrjnoJCT2qbqqNooKrrAAy5YXVq2FmVqiKpFwnJJF9uZo5ib",
  "key18": "3Pjs3qC8WjvsxMD5bcsH9R1EgpBKQKwMCBnqMr58FYP7oqHUFDYsgnf7D2bUdn3f3X99hcLh3LypUN5owgqQ4zYN",
  "key19": "2UrFecuivxXAjhpKTCgZn8bEkDWy88DUemTpbekdRTxyLNH5jnm4zSXZDrDVYCodPPJumQMzvsBPbC2nZxBp2uQX",
  "key20": "4PFFWAdugDzerNuqdDTjXvtHDhNUsToZs9q8v5CAypvy4B1aznXyWpoJNHR4dFHcdQo33s24f9UGpBW1B54MbG7f",
  "key21": "5njewZcYSdrHgZQppNZdX9BCRdXvLMHNYt1uLMBFKhkkxa7a1rXHDKVyzaHSkkQ4iLDvdbsDnZe2zkjbq3jzXPSb",
  "key22": "56EgaCQ161qjwdBu1qrJFiSowjYYB3ZeG2VhXEHT9KA52Mc8Sz4CPWiQZWHWTjHbadzrum7fkwnfDKnXsj5NmrjU",
  "key23": "2FSZUiKpbXuCRbBBHAijckNTzosKxnu7XfWShXFbP5A34nWXWiUtCsHrxzvjJygvfjnoTemYqa4xTjRGLf7SNTSW",
  "key24": "5CsT4JjWpijEbyNKUk6cGa78KaGAuTY9pxvmtE3GEhinPaeea8SpVo6mX5oBnvp7VGgc4fvDiznM6Tyu5q9h8YGY"
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
