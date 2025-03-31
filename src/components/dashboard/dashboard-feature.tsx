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
    "3mYNsj7cTTcAEwxvWMJKCqofi1oK6X42GyiQjHS36pnwUWGPZYuFCzYwM45JnHdzUVPfp7UkaAMpR5X7ygq92vJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sFhTjVDYjfneduKv23XX2p8QgsT3TsbRzWb8Uv1qwLaHYuxVSqMSNB9zgKzZuRSSYkP9xcrGwXMyYqkY523j3fY",
  "key1": "XaHsSRsaHeaZEP39MaWqUBAqEL4FH1N5UsYUfuCMjHmngay4PFyya5UQLbb2neyBJqFKVQZL76N3RVqkb1YgwSL",
  "key2": "4pr9L2FeWvaCMzVAb1tHhzVejHXDwNf8wruZ17gML6JYF55EYSSQvgx73kcVswrmXibZzZohZPAKqz1BBz3BxCYE",
  "key3": "22TSaF4ALkHzs8ixouWEHFpySVBmreubYthRQhqcFr9uVfFtxXAZFqX378MPYRafXbtnAjJqoXmV9KYVVi47ATw2",
  "key4": "2dWQ3fE63bDmuVFHt9Zt6pCji6eGFy3B9kKaeaDSaTFWArfwmav6kmBv6dKu1T1KckouHbGh2pn9psVdzxYGViat",
  "key5": "3NSD7CuW2qoUe7Hb7sViFFRUiSRUaNkrd3sVj36dMZRnNqmuHheSpKJ6j1GLL1BZWt6y4J3m4tepPx5jGMd1aJui",
  "key6": "5QbyQECidEFdhe95vPiwnh2YDhrkJTk3inHW3rJkMwJwSnt2Xaj9B2GTw6pGf17Nx9CiPtX3M6aJKQ2imHb7Mx4S",
  "key7": "2GknujQZe4DeJC8vYJDKrmSiEooeB7NYCbbJ8e9cFULMBbcfY8Zb6VhCULj7xF3fioS4ZvgbhucUeqUn9FjWkB6T",
  "key8": "2LY3K7sSLvwPiXAbycrzsYCJnT4GgQALEckuMVMm4c8zNHR49H22uPDPXdWq8rbn2fpiLhXzyE2kwcszmk1M6CG4",
  "key9": "2A2uFtNJHgKgErXRTwHWTCAFxf5AWqYdeJg45zrD4MUtc1R3jkLQKdKX7PTeNmYtzLhuRsgGTjmKE6unvW1xkzpv",
  "key10": "3bmwDbMuTKpQNRuKRdYmCixqMBwf3muzTjvKikV6bdEybEYm77sTsicE3oMvnjks7kHN1Z8vTUDRqHqiYANJEVMV",
  "key11": "5qVsYQwDqQnzpw68DTJMkruUmHsmhCWPD8e3b3C4ZX5mKGbJkLL2YM6VasuWnQ3vxGDaXyNJrs6uTpNdGYG3xh3S",
  "key12": "3PrD8rPs3nMoYcLxkrURX2WDQXSSgBZ8AMQbZBjU2eJrx7EkvV8rZNscDqeBPkJ1Q9N9v9tuUyG6aFpgbWfJECfg",
  "key13": "5YECfbPQgSYCiQXeWDPntR7cohHUKUPJHeBDVxKSPqKNC8A4pEvbC4dx7cbkVpnhCodw43T5iGbLLL8Vy7WBoTkP",
  "key14": "4zuV39zGVXS9NV4H8pE5Pr39hSRhR5hjMpEPpB8GVq5YGjzPh55pc8GZb2KF4sj7FC4bcDbLQ8aG2bMXFNyqET1F",
  "key15": "44Ug817zR1dS97yjvmMum6HKVdqg3E1XbT4csqG63FuBHZ862fNTkDkTjD7yt4cHVcx6j6XmASLYmaaqd49tKzL2",
  "key16": "4D6RAf15jw6jyLPX2wXZ76XRiZt73LQLaYgzZ8sNJCTAfjm1QNuYegnpeNMguYp8FYqjthc5gfyNFYv4FTU7xPUs",
  "key17": "4WphphKe8DpJD1uUyAPDfWRCmVq1kjEBm6RnoZgR4yGskaZCGXzvDvAVL9csyo8UDquG3wZPMsjgYLjiHX6cVmvv",
  "key18": "4EnPwDjXknngwyZJMGnsKzi8TyN8WyYaZEBGeAQx37JethEKD4N8B9XcbkhFbzJvPdENKM5VFanHHMt19o19ukoB",
  "key19": "4vL3gdHeFWk8oYdpMjk4eufFQ8Uax6dTP3ey62BcKh2VxBwdeV36XY5SLj7dnLQb9sxCWjAYusppDTfxpGs6g5c3",
  "key20": "2ohrXMh16DYTVFo6qfH7PAgQp4GDijvJJJPrKYXSDes8aL9hapXkvHdY83frdhgeCxHuhk39BsvGFwh3R85VrRSk",
  "key21": "4vtqk3USorzdPwLN2rzZE1Yy86BVK7g9nTisLSP4oY7Ag6szV5qVWMzgC2dysK9QVB19L9CFUS7SkzWhrhvn43wq",
  "key22": "3jRVJTxr45gDCgC8c5Ugz34srYD6Nr2zjPQzK3Bh9CP5BXwFG2T1oVoYmLaHfGbxoidrY594fMtccjjBGf8Je29P",
  "key23": "2iYoa4BWJCQnh5vPpL3inL6FGjudZwGfiLGCo63FmyUgFK4YkwPUgstjACBSuakeiuaavo2daMPEiHg4ZKEQHjYP",
  "key24": "4VRbpLs9VaoNMtVRfpWz38jPQS9b4cPQJUd3fyQnY1sdBn1odHk3kUfRgV9fDnd5TZtgqRZuiYRA9TwhEY3qokZW",
  "key25": "3Jw4Y9q7AjUXNZKa5uakHEP5N1GXCeWX1y5JvqRivuKaJaZX4YDGhYMRGNqDcPoLUTv1MTm9d9zBPRKXWziR4WPa",
  "key26": "3MooxCJXUVuk7uzEUAbb8NC3Z83Hf4jnpSfSJc3N4ZKpqGNYukdEjSgeFnuebz64XLofPa9jbSRmHX73Hxvtwukt",
  "key27": "4ybrAPjdw7uig14KkGXemJrB8Qaz1SfmabKXK7t4b23sbnhTNgMwnAWqWqbgadakdvKMCKCRWZo3GtY9PrNbvakv",
  "key28": "2m9LKvx5bHwPDE2iSKY9dtqNKKyTFomnLs6en1StpXcQRdEtgcwp6LbPuuX1UyxmqQwyrcfdgj2h1GyM3bBZ4Syg",
  "key29": "2uhgDaNYoSthfZEb3MX4Fjm12faUq6EUzLygRpBcYTLacXJaVCSLhKdffXqnScqjAbE3YimWx4hBRqtpauTVdUvc",
  "key30": "3hL5Dn4VEeVSx8Sh3NTZZ6hRXNzerDPyTDG6qeno45j7wXwR4vr6fCaE7txryFPu33ozbbcsLHcVsgMPDvEyeGRm",
  "key31": "4dPT7T3n4KBw5sim96Z5GrXH7UpS12vDNcbnbBWfrR2wLSDyazsgQdNm3tcsr8Jg4FrH61gmFJJAsu9Bc2XBwNbU",
  "key32": "3ELhshLYFtcR8Uww2MZ6VPQ2qUVVR9Ufm9BjWt5jsRrvk45Tkp5xYyqdj73og2iY2PeVxxayGWapqiNfXuFGKKRj",
  "key33": "2QMzUmVCCgNZC8SVMK1Kt899V1TTqaJ6oZz2xh8cEbdDdpLP5GED1BCxQVykzbCyVZeNKJVjWsAEwTvd3Tm48dBy",
  "key34": "3qAmjimuynnESDvne8xpwCf1RA2Q4mUjFqEW9adS85qUMfmBVBh6Svsqii9AEGybUGkPEJyJ74X7ctxeg2mSNmFi"
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
