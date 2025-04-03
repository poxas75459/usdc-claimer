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
    "5gTFd6AjqawKpTRn9Hb582riLvbNazFg27znQ9DGvnE9wrZ4cYAcEgowB2tBe3E7MYVC6UGqJiEKWFYBBN3VVwXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zLDo25kdogtwPueW2Mn99du6vaTrpfoi51DnQLbGjaAwZ6gm5iUKdx4ho7aRZACNXJpmBaxrc2nsgCfhtespmR5",
  "key1": "5yMsDWbBbJi5bgVy7WQU2ENBxALQJPr29RrG3C7GFjhnByMty5bXZbNseqkLLanB2U82jhTpeYNBJMBVMahajYS9",
  "key2": "3TYEaz9rNERSi9A1uYKuwh5bSx94T5wZxVmFMHB5SRvr4no5T2f4MRUtkuJjiusG8gfTJRMQxk3EEtrVmoeCZBGo",
  "key3": "3PTGWVLgVHEUTvVFbsaBBLgKpgxGZ7J6Kofg3JUo1pDZJg1mFYgbNzs7k2qUiHgoZH2idyFVCkX3y2uLmgQiSTrs",
  "key4": "4113JCX9ghEuuApg9nqVsaAPFgGD4LUxBdqqGMLabHZjB74Zu2rRSnbP2iSp2ZyieDVyE4BwynRdwLJUXNQCDWuD",
  "key5": "45XVnwQH3FfJFGsA5RRgYCLkfhEA2fZrh2DCzV3eZqvi4osKCE9RkZL2Nw1BDJrJ4vkoV8Le2XyByyJp1xyMjudd",
  "key6": "5RipBf1TiuKZGCs885sFcKcXCQo374wbGEGmE4umzeSPXzCNb5Lepy1XKUb2gcUugxaZDWnFRQSHmHLSiCTRT57s",
  "key7": "7SsjY1E3Hra5biZt8gyMwYv4QkD97CRpDGcggFBPJKDPMMo59iL87DBTCyfBK4Dh9B3fXkP3cZrj6Yw8nkpJomJ",
  "key8": "3zgSn8jgP8RX7DoJVvzi7jaGNAiNa9pVMWebif3Z1KNrfzmievZtaxY11hS2VCuSBA1FaDyMNeg2jgXoU3mhT5Se",
  "key9": "5TqdvskAm8xqSqWB8N3pp6oj6UQH7c1M9k4szX6A4ypdfLF8tCJSHgXjztSWgfM3Dv4Uw2V8aAnEvwENCLQu6Upj",
  "key10": "5iEKNv3Ry1kaSuowoQors2w2PjvtvPbM4LgJBfNT8fpi2VexCMhARfjrKa6zrq1bqHBrTDV4ykoAL95kqJ2H9F6j",
  "key11": "3uqvskGDPNhTZrLFvUthiGDGCqhXon2WaDmHa3thTM1B5AzP45t2LN1UMaPMiTU7hAJqFrSt58pJSUdtj44MNHGT",
  "key12": "4SM45xsZqWaiCtVhCACmsmuVLo66y7XbieDR61c4TK6W7QoAJFFzmHoVMcMUk4No9trqGtP6nB2KLjRJgU1eDmSh",
  "key13": "3e3gDLvJzeNMudT11yDYgxYUxz3Fk3FvXD5MpEjrCQobD3wc4LLzHFnhJPZwrvYscz9uQzdBWB6JD8Mwb8PE5HjS",
  "key14": "2Z9K7uUd1vwW6ra6Yj4c8Bk4doUJpQq2cNL4iMP9mgi5QsB4Jnri6p3BUapgmvpiMASyjqCUjffKG14kBdKenUy9",
  "key15": "647KwpzJWi3MF59manr5nbuFbMNG9u1PXGpZMH9PE6H745K6XYHUFqwcbgxou8wpxJrEbzKPR9cixFezqxPFpXNt",
  "key16": "3HuRQGXAqki1ApQ9yUQQtxW3HEEGnJ2vTxY3xamGQjamG78WvhXr3xb6S8A61FDXMsW6vSp9aEpt6wtScg9KUK5J",
  "key17": "4iEtcjJyrSL6JazxMHKiZBSyWNFFnSWCReVv7LHWu6KpdY7qWHsqKbiy59SaLVR9Br39SPHP5EDU4Qs8f4Codm9r",
  "key18": "5aERQ25fQM3Q8ZSk1TmoEGdDSUSrCBf96C1uYd9zfv9YDjg8b7s8mjHjSLDBWDMwyjx92fGYPPtxbujHbFRaLJXz",
  "key19": "3Vex4dhnhuLHso7qrnNGBtuimy8NiRkyCx2J1haDyMQf9erAVXBypFaDqwASqkBchEXUiAp3UqNp81bu8UHRTJSH",
  "key20": "2ALcFkGMBHzhmhKsBTCFoHiHsCQLtM1Xpd4wJwXLcyuE9KqwcCwtSHR9uefnZapNwegbGhwGetsCjiG7nGsDxPaM",
  "key21": "5f6obtaRvz7cY1HGWepJxGaZYPW9AEvnQ31VMvzYiUqMZdQ64jcNa11Fd5bUKEviNMaC4jsfzadBGxPyUEuQiftb",
  "key22": "3EsRwJPuYvz68HbyF7zwdABV6GZeUkRTjxccCgqzoDv6DeZ2h47gdxn4D8m9nzr4bNHJw3WfVsSNC1NnZWqBjJBJ",
  "key23": "5iLY8WdAZuYKaoFYD3wdwV7E5MNX2DwLbED6dKNViKxzxKzNanDiiDHvqMLpR1Ekeb3seAiWZNGghQ5jQFceTGvP",
  "key24": "44FJN8rMXiBwtteCFqJnfMkLH5ANstBtWUrchgzjtmHqVzyPBRSczosLDymC22SDccM7jAcN3tTE1Hw6vG7Y3Mgp",
  "key25": "2j3m6waLaZUphEUteetQW5oHbnCPCUeu984kgxezTkBkmpeEe7Y6mrbwLKpkg9YXcC275FMpYjWYpiHFF7MsceRg",
  "key26": "p9EVF3dQYGcXLwuFpVBkK7umqLgPfgTSQVpuqfDWACdpjrRthvD5DkUKg1TwCUSJ987RBHpucuwPLM8AsvC3kRk",
  "key27": "NBtKSeWLkeGfr6yqnPn3cmAyWPbosyZDL94goRMdgAUmifWcgh7YSArEsu9WJFw63oxooxtSwHuQzjx3VnwxUix",
  "key28": "8cL6tKeUn8Zcy8nJHZX4qASQzrPrVGZUK8F8RZmzwb3L5q5adzoLsYz9Zb3MgMFZQzYQebnFttR5XVMoQUw5HTQ"
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
