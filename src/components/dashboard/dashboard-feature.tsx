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
    "5hv3pTUF8sJifFZBJoiXitMjqbGoRsh2aMZkQSfnPvuiebM5jZywot5qAgS6tTRLXNMFMWz1pwwZZ1i9C9r7vCQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VTSR7Wz6dC7kQb7zT6M8Qa346MqMEGGyBSmqxU6DPcZdXcXpgcidwrCDLMUe2s3bdBL2WUx6U5ZEdTzdi8Bgjqf",
  "key1": "35svaxeZQE2LRKG5MfYyjSWpzpGz7haAA7reSb34PywhBUMmabyAJctp4Yumuf7K5EW3qYkbf6mQeGaHo9oG3caB",
  "key2": "DNX2xqUwjJcYghRFWVmB1h4efx22eT6WnYCM839Zi9S18Vm1w3kwGkx5iYMTFX96WBRMZrWUMdkrhmzbshSBPPW",
  "key3": "Y1A6cMWcwy9cP5WE6GVTQmYW8F36oXExJFZSorbGrCotgXW3gEvbprD97Daugu4JBGjuSUcV41XNwPRhQUGiDLd",
  "key4": "3RgsXHdNPJNEUVFKHJQ8BLYKAWSM5BwDF1GW9REPK69z3QMw1ZHk2F7nKoTtdyHaPSyASUc3ArRdLoEpoj6fe7T3",
  "key5": "4FmgrY7Y2V6qbgviPFzYLtwAFJt9ScUAZU9921kYgo5pEKUKYtGZVjbVjC2zpSxB26BN5sBnyiwn2N4UZQsJ78hu",
  "key6": "3gsQwdsBMiMvsHGGFTmcqFDZ1CXWPVCKDti1LZHQtJF6qVhj9T21sa3AYLpFcWBf2XxSk8VdqFmehCsUd9hZav88",
  "key7": "2ztBTWwg5GMBhMrBeqzTQVd6PAEUU4XbjREv9vcC8wgw9X5f9dtQHEM1NUVUb1Y1L4FZsUHEFw9796z23HMXtvsP",
  "key8": "4SrEjhXnNxay8PBgm5wg22jrX5ydQnbD3kZLpzHSRsW4GjgBU4DUDd2hNusVVw11QvuyAMtFShiaVTLx9CGy7gc3",
  "key9": "3k7bx8EzGUKc3JP9An4YLJcLPfquVnGak2HyWSht7nNa9rqK4SaiZJrcUdQdHdLcTVG38JuFG681R9e1cawM6Zx1",
  "key10": "3WJpRfsjDTg5eES1XCBgggvBveiN4p5obK9QqAbyTeH88vTxpYeRSwLEijbmUUGzvYDshuVQiGFRzcuiLKtogqE8",
  "key11": "2ZA6SRcy69NnNcxUZjd1UhTBzQSZmQ9ZiHGRaMtkxMCk4hTMbTsYo7zU6pPAkbCVwTM3VWVX3RqNyQg7tMsf3YNm",
  "key12": "34wXUgw6r5FaZjd3wQFh3chapyFXWKxDkongr2cv8Wd8uqE9dd9C2CSNBBpqQRpYwxPQyneZqDMHrHze5S1NzrVV",
  "key13": "ozoUb431ubn6TepBooHAfuW67LVUkSiMui8crS4Gyz2eQmWoEYcGcQ6NfibZ555h2aWjqDqEWJoXP3bXST1dtY4",
  "key14": "524WvXfHkSbDo1RaTToJpNiQeeHkf5PDEaRWRYSEVTxhtmp2bFngVuSXYNtAefh3AiGRM6AuPPueuzw2GBAtEkvZ",
  "key15": "5MUTEYF4Km1mnWph7sSbzwwhj25yp38qfwvyEygJwZLjXecGsG48VhxjvGjUaEy4RJWW6B757Z48kXdAiApjT3yh",
  "key16": "y66hoJNYAa1G9ZamsLgBn1e14nsnbqn4xFEv6s6AuWG3LQi4Vk3vnQtt34yg189CzgF6RqcpWYRjT5nfffFmZWN",
  "key17": "5QnYBSDgReqbvLbXMq4nVRGphSvu2GgjBKgiJDoyN4RtC2v9VdRMkEsyCcMNymP7yT9AhKUZK4DPNguUEE82J8yA",
  "key18": "4ToMHeJJmUFGM5BnT9UwzRtXqpq1ympvGnxWWgHsrjUW1zzZnoTEitonHQVLkFaH5U3PtnYKksACgBLLfLmw6ekS",
  "key19": "3RsBC9uJygjA2dKhjqsj6M8sQuiFwRmiXDafWp7PjMPRFu9ngpqs6rtezWwwkRnkzN6iKd2iCoPJASQ36RfecBbv",
  "key20": "5dR6nVSEemEKTbo8KzxDDk9NibtmWxWkfeyeDEYvcZrhwgCBXuhvTH7tYg5mBzqJMffbKKaVzgZvfggxUNdM6k4a",
  "key21": "2qHgNtuW3NtkPPyqjWrBvHSySYh5uHFK9s2nADhNH8sbX2GaKiaaP7J4sf6uhvpAyt5DmN32ruQumaLhdzDhLWdW",
  "key22": "3reKQwjRCxSWeSzWZNi2cPHkFu4dsjBwq293LK4GDA9D8BJNabHqr7nT7VfMjszNVkVxkud7Wc67ySd8vUVVHaAJ",
  "key23": "dsPRDtrWw11Z8Dnkqeh63vTo9yiAWpkN4jqi8fQMW7dtZV3anUimHD2dCcz36tbpY8q9frcV6Fj5BdBXRqCZSPd",
  "key24": "dJWNbzBcdCn83mexTmhMmTYBAduh663DtiqD1dVwNQKhqryj34JvwhpX3Uox33c8qKRXBTPXgvvXLE57YvEptNU",
  "key25": "4BoDVkHSNhfcrNTPLEMUuSiHKNxDUF1LTWJdEtr8yBAUW3HFu1STgW2F1JvtLS5F3goQ9Aeoh4V4dwe9BrFfugjQ",
  "key26": "3NF1eN94xqn6f4WkcUGes5TFnoDBfLr72zWWgeWuxRp1X4CkvBi7UZFaw5WThpsTwFJqANU25GPzm1DXJZyMwkC4",
  "key27": "4xdq82SjxLh2bgUYt8qaJtu2grL51VcLnaUEaGG5uf5Gefb7J9R5Uz6QGURox6hFg5uPH8WkUzavgFRWEBMmMZoX",
  "key28": "2jVf4aSsxidPNwFvqW7cMq1mxCxbVS4pUwEGGgBp6Ju9uK7S4uA1hoiZJhpNw8CMYsEbMWrWunG2qXPDNNrpGTTU",
  "key29": "4Bf4rk8kva4zkL7hWCiXJ6twp5dpkxZDTnPkmPci2eXMCph3DgrJyMnUaUeJwU9ZGxWDgY93xzQeJyxSq2ZPnF4x",
  "key30": "5Z6unXX6uNdZGTVLa78kNaNszVauBXzSbHLqhmt3TKQ6uVyg8CW4jgy5gMWB6ARx1iZTNDhUQCjpM7eFVS9GdeZv",
  "key31": "3AoEFnoNGZwb6NwKEULNC19GYSBSu5eVsrHgZPsHN3qJGE1dCGyJxkW3QYm47iJoLBr8gGGk47R8bQUwaZybrt78",
  "key32": "4tgmfPRF1HGgT4seGkYW6WE3YPrAoMtTuysT6SeTx3UQ4jje1mrxSVhkywQLMYYcGgxaSmJZw9zfNmfAnYBE3VZ7",
  "key33": "5hYqDmRXdbhq6PTTaJkQmqi2CysWRLm7GzHy6tYxyvfKJeL1EutNXjHKE5tqTiGDF8HU8pPNikvg6wd6HPeK3NW7",
  "key34": "P9pXexScBXrQqENQ1d4s3rdKjYDBSaiWHnje7c7NQ8NXnALEzNRjfwBzR4JMo4hcZRkJLif4Rn5SHprqV9QZpxJ",
  "key35": "8zbhAgHHcLZHR4bgYbZGbtuKEqg4xeqTTD6AwPcH6ZA3bpG3YXkEKntHWnX6E6YchJAnE35pVL7EAD4yTjht51G",
  "key36": "t8oE8PBEiwwKmXyFHtfnyL5R93Qw6V1tncLe17K1eCJ74QM4T8J9Gvdte9zro4QpGNRpjDYzfQp372wvgrnJ1QP",
  "key37": "4FoioFS4pTiUxfLdQE3TDbjX3oE3fuF2JGtyGuEPNdZUZfucUN3C9dKx312yuTsEKicNVA2MDKKNhkqtpLGEYAGP",
  "key38": "st4wWSRAA9A9GVMCxn9JAThqiiFoATYqVgxQm4pPjeYC3nVS5W4Cgns8dN6K39mSbddSiagdXww2vjSoieGmbTP",
  "key39": "4mFzqC3BUzdQUfN51KMfXEtWtaqDuLUiZNQ9JcjUkH8TBEM3mcdyET4GjUDANu8WE9gT32Shrx6Jkxgf1qd7WbcM",
  "key40": "teUutwP28fngiQkb4ebrYgNUR5yBZcadipbrvyufaxm5QrHCC1DwbTtQFjJhPtYwmkvfGMLUBTX78W8jX3MRfjR",
  "key41": "4LzJSbRPnVqoBaa67eWWE6DczV4WauaqW3A8SfTSHyyQsbcxiweTen37iDLoF1D4FgyMyck25U9oS1xg7K3NNydF",
  "key42": "PWuHNkqq3m8jHwaRW24pU3kcfJ2bw9RnJoLD2QsoswwYxNEwcee8QYB6h6UmDco15ymKnVT8TP39UGgesbRsKYW",
  "key43": "2aXu4Zr3GstAWVagSYzBVkHV4hck5ZqbLptk5LJbkyNJrY7Hez5k7vCmmmtDBJ7cH2PCb3VQkhhMKikLnmYbnxQf"
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
