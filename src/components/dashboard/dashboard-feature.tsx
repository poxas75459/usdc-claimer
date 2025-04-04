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
    "3fPJK7xv2rbw6WQuFDmoW3S1yZtAfBSecxYGTBvedyoVFRAJ7kX9yf5e4tv55mxHQRPp1u2PWg9roYBsiepAyfoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gUCWyBsBwhhz8Ujk57NE68PoXVkR7fB6WuWn2nPy3pgv7TTaChnZJixmvq5kpkUq6GaDDCXF28RGQi8WJ2VhUfZ",
  "key1": "8KgoJp6WMsCv1UZcz7TBmKnsEzMC7vy8nSYY3n9RcvSMgJqvupEC1eeAC89FWnk4y1GfQtv2eWJjQg7gbL6Sqrq",
  "key2": "2bHRZf1Wa9zpzxL7kbpHzMLF4PKiTggWTUZQdutQ1QyxiNQEvYUweJEfncJdw38qF3pPP6grxmHGHNNVUkpFzDXp",
  "key3": "5Ez8cNZmjDkd9LSRzpz7BwU13VPQjnhpvm5vbUMRmdiJ5YcP896gvtNgkzo15TbcFJV8TZE6jmPnMnQGGrZdFcn5",
  "key4": "Kx7vxsTvCHsr3Bx6fBR2XeR7S2ujRUW2z8H7LWR9N2PD7tYy54ZcnPLB5xQbXaXqFydciMrYtRfAEUvk2hokLU9",
  "key5": "yLjzoPwXykCmjnAKMZDjCjEzMgJD2gwHtv8c2Fo2SAqoytsK7uPyh923Fzp2f15t4F1qGuyh5V6jbRUtJYsPYTS",
  "key6": "5BMkKKyZvRVaSyCaDZeJoHuxJNUUPCdJr4pbhB8Hq1DgaE1gTLKrff6jPBhCefTcu5hzTHUFCHdh6Lwsodii71YK",
  "key7": "4xiXEQNrb4SiKz2VzZo711zrqq1mR7CTgCLQnEJeaygZubLcugC7fHiPoeLuSeAS9hyJhkESYSKJRfgxu35pedgu",
  "key8": "4pdxoVt4dL6XPFEgM8MNDNgAhSxotwyxfhNBzpSUPjp2gdDSYxiZNnEHzXQ2EMpD3sy9Z5PdyrT2y3mWRTrRK2a7",
  "key9": "3Ht63U3ntEVyUmsciJJY96nj3TZ9V8M9eocUKB9rmsR7GgfQyZntkAbsjsNqygqntJySyiVim296uYscpKDMBzRH",
  "key10": "3mrNHrwFPzYFZWmVcKWGSLkZXu7ysAUQT9N1BezPeEjgsZC4UhNXRoTshZtpmGaFXqgnZTFniVjqXFTGjbcJ8sCB",
  "key11": "54Agrzh5YdSfcYUQTqHNXrUDSLChr41BgXuKxeM6zrYoWUyktc1h7vfV3tFeNBKxvtNN27oacZ5y7iueCw2wY3gi",
  "key12": "63uFrrmBvrC7DqVRbZCRPu8PD2ci6n8a8WmxbvwUfhDJ7Tz74inkGMy6wubeW2ArLFqKynnTkwRXq6baFhSx9Ag6",
  "key13": "jpGvvMi2K2erwty8R1RXXFGwaShdo98zrF9Z45PuSQwxA8HBLhR51vg6SLdaBWDW4ZQzVbTuZJQijDhtS2DA9mc",
  "key14": "3Dsb8wXdv6hcpiLyvsxNLdhuDneyF9YMWE2ikrQxk1fPkwLuWtz8v3FBC48sAgYHmr9HTGR1BWfHoNagByyGGuuu",
  "key15": "5keTkL9iKDYx1fgabjjT3S9re7hSAcWMrZYKasFzMrXdoybr22iJkJg18eYXwK5dBkn2WEe3zeNQLDNPfcj3XgYY",
  "key16": "2Wnj5a4HKCktnWKE46yNh58zRuXbw2KMByF44hktq8c7nTCyhUt6q32sj3zfPDfdiBdKvwn961BfEbSdkQk11AXs",
  "key17": "5vkbgbutwaV6MNCSz9w1wLyyRVQwHQmBYJ6VmprbrSqjr45Kxuj9WbY56znZz1cqfGtsKaLJfGkPa6BPAimpPszn",
  "key18": "2nidj9N2JjwxfjaFbyu1FXBL5fRJ9QU3BuydhM1K85KwXhxnrAf7DuWdD2oFgDs4rmowt11N1GNGNGMf7AqtqxB5",
  "key19": "3rBjceadVxXUR7Nb84HzjAYarixJpJViMwjVn8FiKqUNfvixcjK4ckdWpth4EQFU9ZBALktQfdEaYaZFAY2SEiYk",
  "key20": "4oJ1nrRytmB6WFtkmqZXezNz3vA1LidG2w2fxQ88LATrjHhdgpvJoLpaZKctSqfEqT3p1GtUeArMtmrc1Wi8UddA",
  "key21": "sodxjkeAJa3PD16KaKX5a3FUm53rMngzmqGV7zsbHrUfzYruazPkes1VbEBM3SYL9WNGcavMQJSJhVCjA9aE1S5",
  "key22": "5SidT6CensYM9DoqnM7bYDDdeU4EuePeRzvAqtWYdjvYQkESMjkQkhqsffA3zMWLXuf3d5g7D3DNQUna48YM4Wob",
  "key23": "7rF9dQSGuqt68Lf5JUWMTWMS2v8uywZbWaC2xcwHcN2oUphMtSfXqH55N5tydz491YkSSGdbysvBHefMMbiAcH8",
  "key24": "2K99oKScatgAMsEDuKp6mRuJ1t4zZpXBT6bLF3D1y7HgnhxiH1jcb9hSao7BKGvdQfbAaXyLE4cqS3ugpvyJuoNY",
  "key25": "2R2GExMAajmZoTzXeU86xiUetbwZaXgBC1veecujabpHNyZKhLXTT1AhjyQ8Kh5mVzNNm7etUxJ9s4Jnzdf6KP4R",
  "key26": "4CCg4zdB5neMdgsqqyrMfsnxQyQAeGWqWgsneZSJ1VUrJ9VxQMBCrkA4RCcksExr6HKYYF2dXSn9XbfDU4Q2C9yp",
  "key27": "4KC9rx3NwvGcP984MvAmeorQCJaxEa2nTiBJXV4gT3dqmY5GfSNo9cQKY3tJmiBbM4PeqMH7TbVLbEYp1zzVUt6a",
  "key28": "4xrSb5WqHr7nbxWtPJJ8m6Y3pZmSP5iJg5EVfFiUxP6rYKVHc7QeX55nc1KGdVx4QwzYBEYiyAGtXviY8wxpwSkx",
  "key29": "5V9fRKqQTahgqqUr1Qg1KUtFPGFb6oK5geCXekH9ZNp9MreuTf3r55wJgQvivQwcAWMLxX5q8j7jiVjzUjKqKUSL"
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
