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
    "55xVfJspLC1TAZMzd4LEVnbHncbNtasPLJW2U3VameUcARw8R9SbGFt8N5MMUePmdHu9TQJncyKZfsa6MuCB39Bj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pGr7ADnkAi4WzvCrj5TNwXVBnWzUrEv46fe8Bd1TBvbwsN4L3wKwkt7kLB9ESPobJEUakZWeJAzEbeUaDJSxhCT",
  "key1": "2Br5hduJZ3cpKUPnKEdP2pqchEs5ynQisdu7eritqg6y5kpQae7Eiy8EXK7KQpQUiQoMEstek3ockXqJjMgqFgEh",
  "key2": "5sJhxqMtCkJ9vDbaTHPwqjFsJK77wTnfphnC3sF2CD3RGiJ1hELQAaW7beFr6z8VJuXRroGvrgojrkSrxNDW5jLv",
  "key3": "dPJuDC8nNpLTWwzor5KndrQbaDwdNfzW9kzzJm7G1UfHR8vp3M7Sjcj8MbXQzcpARQCHHxyvy9cPYvDMuBuveEM",
  "key4": "4bu4bGSTYgGDfBbcxFMdhBoMmUhqWGbdcEAKChd2vNFHW3eHtZkQpDKydinxY3SbYCPCMqfc2u259kveK6q4tNB",
  "key5": "4VzHq7gE2fECjPv6YNzFzfZjRqLGZo9VRXdYYHgETFLqknUE397PT6zdrUU3dA1u8xBrUcE2vrquxnqDfiyB8mCB",
  "key6": "4UUBQVyGLFnxR8d4umvTs4remdYZsYXbusFodcq89BkyqzpoDkJzBAwgw39DeTRNzuEgXjs5ux4Ms6qR6dt1mium",
  "key7": "neQzfhU77jb5gKDobM9RoCTQL8v2ak33S3v9wLLoAEDjPf1H62twRLc8vHmDaQgAB5ddML3EXJKWoHJMvPZynM5",
  "key8": "29FqgnkSZsrtyzX3e4vHsEGkyUe6QDVGuayWKfFQieoGxWW2YrMJQgRiJrQfoTygjuVLEKEGT8CbfMDqfLwxytLh",
  "key9": "5FsFzQYxTTLmDDRiWrqzvC9AnBJYRUenK9gVn6ZyXEdcY7JtznuN7ZkeV2fzezd6Eqo4Czo4cRUTseptpnoCcC4z",
  "key10": "5ChEXGt3WFM2DiiVKWTaMCPaeWxHY8SGn69kAiiWZaQGm8UysiKYa9Hm5jSvYtQwEUtRtKPCcKR3bdNHrzNCceRu",
  "key11": "2qF4vTrLmtAzQxkZgKYWc2TUZiMaZuZGkotiusksPDDQvByWWDtc5HtxubVJL9snshSr8gENDKy3YzRsubVJiQ1C",
  "key12": "5Rr53iPFrzL9i6SvXDKj3VJpMXjvAwXzJeJ9c3AvmLkwGS8R37EWcVsPuMnKuxvF2GqGYo5BUhpiG1q4kNtWbco3",
  "key13": "2noyhjVn4VVkEs1dvJLnrNgGS4dvWmRKsVDe1zVmemYizwRYUaw423H4owZcGqvPTPjFXN57BkXkzVNETGwF3uMh",
  "key14": "3WjdjYEijpqcYAKecAJNkanwzfuxE4MsWKppAZDbKYXf3G3Uuygeab1SMkLJ4q3npu63i7fWi4KzG9WweCjhCUUA",
  "key15": "5GDREo8dpS3vJCZVJhi73m6J42sS31bogtqqtH5AEwqbVrDFij9XtqDLarsRsuHSuL1bLGBY7sVnR4AhAxgD3bQX",
  "key16": "iypT35EyDqxR1yBDVHYcZYFztM5TdfD6KeSixbvwXWQ1j4HxkKdmtedMxaNe7cPoJQHDtu4BCS9uPdR5bR9HUWb",
  "key17": "4uBBpKjsopV5TnFsU92WTCVjf6ijPMnxUP4hWDRm6Jh1HPhSyAHwM5H381JshAxHkHMMeYC62XGDFyiouuQBfWrc",
  "key18": "2pgD5MZdN2FxYfgwcwft2UCF83VQvoWLcthJ9vTNa8djc1StxrCt5myR9uDMQmVnW4zpNLwiZjhYx4TAVZERhHwS",
  "key19": "4TY5QLGQ986roStZjSfgfTsdb24kxH3Vx1jrw5fuLF1YR3dTxm2nb7TEFfUHhZvgPBXth3LzML4FsA95zp8dE8Ef",
  "key20": "5GpTSWQZ2muAFoHfWD8pxzVcowsmQiNzizYJdwrGZHWLsC6mGzy5iQkgzRbQbwf3hyBgRTW89C6ZBsE99k7qnP85",
  "key21": "4Kj56zZZMveEaw8XeY8TsqiQJuL1fNH14wEF8JrkjuS7qk1DfhXNmLMULphjBLLodeujcRMPXkZ9aztMrV7Z6pWn",
  "key22": "54NCNgFvgpCRDsv4DS8yeAC6aGY1w9hEq5huRA1WH64NKEgSshpw16yNUuucgusWoXT9BUkEHJucVhBATwkR7nAm",
  "key23": "4y4XQeJTqfmoFRAtznesZe8gfwTELPYndxqV3qdV2z8hRXFCgjFTJn7GkWempV3oD74aQtQFCLMofMkbDnn42vqd",
  "key24": "sVqSGNQGgepJaAZJmD17wtD3jJpjwzWvwDehv65s8HPjEsupNXEyqQhZXfJkujac3DfaSesL7ueRf5e6B8b62o4",
  "key25": "2utEbV5Whsc6bW4SHVWs4ZaGA7CHFvhKxquJFUpPyJMvYxUYkkyKRgohZReN9AU4eciH8HWViqD4ZbcxPvs6KLjy",
  "key26": "5jRNNhoDFkMvs6mWonaby9vv3bWTQzrFpfrGXcY5kCVureCSxiWVMbLWCDY1FBmJWAnSauish5MXeoX2SQxMefn2",
  "key27": "3tF2LyKvRRqX4PbWzksqG3G25qRuKBUmPiohRZY9rpFgFnrZYu6Re6g5Stsw2rV1Pu6MAZXuZGvkzeSAnKpsmxqL",
  "key28": "3Avs7xZvodUdTZ32YJ2XNLWiKJ1vpKzNBRG2hSJM95ZKAGyYBAtdTssdSRVhCZxW18TrkKPveZVr1jRqKcgMVMVh",
  "key29": "2SDCFcXHPDvEEUK1wvuA3LaSLSJDkH2hy1uCnUMpkEHQT4Z8XopEwBHTVTLanYAY1Mjb1PmvaukSUApaTnwzMURd",
  "key30": "3tfWAkMH9EQ8QY4FcWm3bZFAHCNYNzfMTu27WaFkqeMjhudeg7yoLqJ4YDQimfCwa1VoF6bjAY1s3BZW9iXbrHwC",
  "key31": "3yC1ANbPmUwUq9HcXMCPyQwCtfZUBP3KLYFCGMdF29vWuKQth27XVHRT9wEC7brm4EPRoF4W52qhTEN2GGNCtvKt",
  "key32": "3NmkywxeWa72gVW6AzqTLZ7ZAuiaro8pgoaPhRQghvCAEpuNfFEoJVjnxMFHuULrp5foo3z3JDuwRYVRSZYbyXvt",
  "key33": "5d4tVtL4Uf7Xrc895QXVJBTMefM8pNxhJzH8LAVmojsxeJeojmWa8nNSqydcxMnetTb72Ds4D8uSQYcCuy4vZEj2",
  "key34": "2Gb6K1uhiaaLezPu2pznD3rF9yNR7yhx8TLVK1ZNFh9osjw1c9HCZkjoCkGordXTKjeaB9BhiptALBubGTtARd8z"
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
