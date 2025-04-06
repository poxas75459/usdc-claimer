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
    "3KbteTHF9JQHNh1rdrQQBZGDaSk2JoMkfmWnat9Th3f29XVNaVPfzQnVPP3xnR4LFhJ1vZGNvobL7qf6k7oUUe9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mrsnvVxBAXgrkpWzf7oinwyMW4d5xAPahgwTk6ww65GLgXruM4Y7HCbyfbkYbY8oVGgHMBH1rXuHBP8Tcav2c2a",
  "key1": "2CuLW587QAarqvZQwfxfsVSS1LF2KoHL48Um97zt5EX8LLXZzQWYbfNPbvupbmepxoWZQaCfg9RM4iesc8CqhH6E",
  "key2": "2Km8QfK6U72qDUpQod5xMa7PRgwiYwe1ku3jeSHiWTw2M1PrCLTCUoE9SkqV3j8YKD3rXSuLhQLQ9sfpa79sGEpv",
  "key3": "2xNGds7Punom8QWcTbQaX7iRqEMLKTL953aKWhV88pdq9X4Wn8f8DjBFc97wk5SBbodpQAhtKixFRKkX9m5wAmA8",
  "key4": "p1HGxagYh3ottAf3VRVwXpKW6uK3fv5p3iBUVYJxn6cUyVv6hFyzxZjaWLih3LpAGh9o5XojfrTuAb6M2XoUvGL",
  "key5": "2ZUCKvFAx8R3SkmYifEA7RYiqvx2J76AmLDMF5bCi3FFwHfLRgP3Ex9AyMiV26f1eqLPBnoMfxtSas8ffxYjZ2qL",
  "key6": "21CQMBugifEcF3HXoRiFQ9h3WYBZLRbqGXqLrwgRRindmTYK5KJfJn8yHbcTwTtvMb52wiRpBZkg9sVxgcCLYqMS",
  "key7": "3ThJ8Rgc722KDQDdVoqUMUo9EhedJhd4oFmxcQ5kXGd78B32ZdioiC3tWRcvWk3ytQcZnjA6VLV6EQHtBngad2Pi",
  "key8": "4mjY39wkkSuQGP7wCMRm3AZTuB5JjB4MHtpnzkTuefRZF5mvmGWTgJNqFoZKtieu1RMjwTJXrM2KYJjk5p2tTmWz",
  "key9": "5M1inYbXKvx7XftPy6SRkwANWarDk5vohP8seQWdmke7XAoSwWTafcfmw7vVypZsE3oesiRTvoNUpj3evk5wMGpK",
  "key10": "5TtdCoua975zrxKwcL32b9PWv8yAQEZ73Mdh76LWg7ghFC6fcE1czPd3mfeVRKbMLFCRSWq3spinz9Lr6kxzYuk1",
  "key11": "aFfJ7yVL7ZtaCA26vYBdMm1mXe68GxgZmkoqJNqP1EMFvoLpRGCdRbi5AhvAoXe76gCAoGSiSnckBJ6VJzwKfYE",
  "key12": "2kuQh99W39DH3C7MryXCxiUL6iP3iQakqchiozHExUvh1gEMrVE4pR1bq3vV9gNHKEAeV3M62ZGobRsdJ7Tr3GGF",
  "key13": "322LZCEmSGU8T19XaziASX9LMagr2GEL9f26zcy1mMc3oF5XB39Df9yHmQRHrsQFovhC24vN8MEKbzuqFsdzoBGd",
  "key14": "KG7ZuA2h1p5ZehAvYUwWEFQPoxq79cGmrUEwpFe9Rut6DxbJrMKi4toAwmwdNUVmK9AeidYJAQszWbd85aAvokG",
  "key15": "2HnMY7ZA7PpTXwgT4KxdvRVawyyUSg6AV6vuUd3RNmhWxoBeSMHhqazt7j3zyh3We3nqJr6cWcYzGse4kbZnowWe",
  "key16": "5tnS9nzuvydPzK3LfcxmPb21HLT6jfC3D8vSH3wuDv95zBvgQKqPRQwYSgJHWMkppf6jByosXFKwGrReX5JNYjGk",
  "key17": "4ttnNkj7BorKd7RiJYd5BrML6CgZLwsbhiV5PCruPHgDWftMXACtDwgfQxgHwMQ6uFAPKCHhDUeCTWUaRPzE7GCr",
  "key18": "3Cwt7Aw2PL4cpa6WEhA6ebW1sz22nHPQ77W8S24yXvV5iWCipS1MmM76cVpQfUkgra26QYgQv7uLLbbEyLN58EKz",
  "key19": "2BigvG9AYbEzaw4q3fLsUBSTNYXvzKk3MeTENqXiE55NT8t1HsE512waN9hqBMQJ3g8iPigh3phEE45DBWtS3AR9",
  "key20": "5BCThrkRWYxq7rf986KEZVvWep9bEJ2SJ61mczDJ31u39d8eWmF6TByeqkHg88qKxcP8dapXAnxbw9RpkTFY7KUA",
  "key21": "5pU41wZuyezCtwPmKY6bTGLKf1yFEWK7QbfvDVRAW3sCstdxzziQuBahWCCDhwEEQccPCRvTqwXYNGtkavF75bwi",
  "key22": "2QeQnrN24kB9dbdwiGRpJrm1KdxKaY4nLBNTEKib55QBn9UJJPxaDVqtTijwkHpkU71FhWTG1Zzm5YTcHeWNsJuF",
  "key23": "3xX31Brv2uRzFZnDDdBWaXjFGJwue2vUoA4K7ZucysaopKKKpp1QqZMTUKeuvKXJH5cxaFhxUkQ8oanftVxCpwVB",
  "key24": "5257UG3KeDnEQVXd2n1xuHcr6iQ7N1JcFQ9UEPDbsciNen51aByijFtEpgknzVhjdAa73p5pX72RtCwXRG6at4Eo",
  "key25": "r7kZbgerT2AFW2F74atjiN4YdZkM9Xpn1BA5VV2UruaZM5NfqnwQQii9j91bDe66iUQmNwMmhNdPZucKLKn12ar",
  "key26": "Y8DgcZb2eCZCSiB5R3cakdAcGthQJmRFSy2xks4ywcgxbwKspPLY8c1riHbLdXgvZPGyGmomfpMTH6YhD1HF51F",
  "key27": "4gvAPD39SQybdGFqPWKXE8tgTuE3vwG2RWAVnSRE3fBxayXfjZjvvsPp6WhV7jX7ENYF9f2M8quLpL9z4hs8bEJJ",
  "key28": "3vC53LvkpnVp7fDpP1o3UYVJSPJVL4HbE88h7JAGAozwxj1rhW53x5oHwAcnr7HyF2UCJ5vCudCtwSEZ3dNde2Gq",
  "key29": "5k4WJRnLP7oiTYSRLXK4e9GktpimND3gESVj1HgWYQ6KG969oyKQEJLZKRzHZUJbk9X5YxRN7g47exgd8rUug1RP",
  "key30": "JZVA15oY8vQ1mQSP4BvKg9zhVNNy7kYTpWJ5mGkEfFFcTBGLuRuLzgtqa5cSZTsFJyKpkFhWSFmeGLeVJkNktjK"
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
