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
    "gak26Grgxm6BqJSscDcDB2PD1yu686o4CXSvZHKHJU921aUS43TLthituxnviGmZhTFcoto8j4FgnvEH1F8wrAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xfYWie9UN9h6322W7zWPeQZzYLLHMaedJeM5NGDH2LReHk915tgkN7hFzUK6JBNjRFpxNUp99iXti7rYT7pKgjY",
  "key1": "2tj7fGdsVgsLgpT1r61SfCpAEkjRRa2kMW9WBLrpU1FjXYH2JYiUM2bPfCCsjst6wiPPScoH6XjV1M3tkbY6ZXmQ",
  "key2": "5Mvgytb7oJfK4FPtg3CF3vLVrDKFFAUUtKwjNHk5X6en1j3KKF2BAxtx2ip8hfwdZrwEAmqpaXzsyeaF49qFmohq",
  "key3": "Pkt3rqa7rCSiLwvBY1J2xqw6VAACVKRoZferSXNg6XJPynRc3cUiaLjwFQaoJcPs5H5mk8KkT3a9P7z8wG8XCUn",
  "key4": "5bJMfPrAbkc38xGWcaYUGhX9a9aGvNsjKemt2jVkhSMZY8aKao18y5yzq2oVXTViyiEFRoZgTamfMrhxRnqn5B3k",
  "key5": "5XwbYioUGyAYtn1V2R4FsaGa9XjDx2vh9xruyovpukgEH1zeaGmNWugd446Lis83tynzNCKLn3ZQeHxNBBKB5wtN",
  "key6": "43uJjiygNMMLQR8HPri1KmdSW8fjxNrbQjWDXgtfqCtDdvS8x3T93DrSXieofphRC3YhfK9qAkGsSxLnHZusVCZB",
  "key7": "5zKgBQqpS5tvdP5THWo7QHE1gUkxKokqv7WsE3uwcGPjD9m214m6zyabu55nhj3WNWNWsfEAfsLTJT74GxQ49vEa",
  "key8": "62fPWqEFixmTXeRHFT6xpqZf1iAmEQYd35qXbBrjg4xVrGPhhuSQgQ66LuRhKViYVMSGcM584opxXCpz9vbnqB6F",
  "key9": "459Q3MSg22CKVw7DaPRht1Q9Cpo3uypZv91CXks1DEjMQW26Rui6JcbDiLNE3fmvRmLUGXqHDtg16SdpMT5Bs5Ez",
  "key10": "2JbNoLv9XzQJGGhFeLawBjLN2MH8eG7PZTJjAAXyMoY5wCRdNiLHX5uKMkRYiKEEuPj5mdkCCKctEfdT61YB6YDP",
  "key11": "5nytS2H6hBSCBvPBuYPQ9JCXMTdQxJXc9nqN1aPykUcptXZPs51V62LrpseMfSjK3beXhG9GHj6sdftG3hpx7LNX",
  "key12": "pGuWaPa1ySkcHyLjkd2ZS4YJgVBwECQKJtecRnL6pcV7TKbSF2sscUv7NmsMG22sJst97EKAbqjX4UVSp2TWbmg",
  "key13": "Cqwku5geBcf6fkFWsNTBY9K7HPUQBW4c1RcDWJUTmUAXSyMkWfCsSfPaPCcVknA6LEbQLsFkeW4GsXRmkY9iuBG",
  "key14": "Jx3EDqiTjmUBrhzGx9YuWYj9W8MPDNdc3MB4E7SnNYuB7vjrUveuXFdca8EBYXvaiY6TtzwwToa36FzsNVgRfst",
  "key15": "3kR6kT24EsNAnhrniS59zgLYDQKxJ2cYct6Lhwhubmh6DanM4Jrrazd27VHu2eX5AiBPVCukxvwqadDVKwLzuTvL",
  "key16": "hM23NLEB6WLszBT9kZKtrFqeUCaZFkMaQFXZkUM3DjEoVV9RURDhiVFYbodYosmTUceimZGWdeZ4SL6WZoB2buQ",
  "key17": "4DDDbmHqXfAvkVXwbcMoY1jw6mtZjdknvdivJoiAUy6WbZFicw2YiVrB4vsxgjwHFzQWfXkZVpkX3oLnJZpJrUzk",
  "key18": "5t2jtvMB92W2k3GXtijAbwc11r6Hazdrmu2g1yaE8KoLUKVxeFUAPU4jQsNbHvcA1MTpXzvdNM7dd4YLpiT5fLnS",
  "key19": "38jkUBZAVEEA3xGNJuvU8tPsRToszyUm6uRPRP5LcJNkEiw3XZuqpEpiZ7L6pVWKWcTcca8UDpurZyojHkegqt65",
  "key20": "67GPhZtkbyKNXj9CbUSgT1eXRT8qmFJUameBaiW929dCnZ2Q9tqQ5J5gn8HmLg4732SbAzEB9sUm1KeahX1BAUAU",
  "key21": "21iaLmdVB7PYnCf1t4KGUs6MLoZK61tbTch6QSFrbeYmXsCu3cssSvMRNfc5mH7QchDvFQqLZyJ3rbvNyBgV8xxM",
  "key22": "48KpYdboy9MCyk88e3srYHL63bpGN88YcoLeZB9JaACBvKWW9Ge1g3QSCRwzHs19TERZtAhCNJiN6VTP3wWfVgC5",
  "key23": "2tzThPbHzNNLdohJFY3whQPEWTqAJrygDRcaEJPRikZEL5FNFMfY4argcwKNMnXGvfabQc8494oYsX1nbo3XeRkv",
  "key24": "KWeGTstNCtuDkHNRoRZoWizReymqizZ2A8Kzyb6Ss7e94Kqs3Da9J1JuZMRaqdH8rp8hNxwpPRS48wYMQYTPR1m",
  "key25": "4QEXugAKas6idKhreYVKBXcTvFnUoM6dM64i7i1dkXUWHTVZHerYCPdTmVAfKk7mBFy27nWnr3Xoh9M17CSExYZB",
  "key26": "38Hbm2cmCAFxNMv4V1xBsB7ZymBEKE6x1KAF2knaL6K2VkpMiH1RLLebySk8huFYN7Rn23JhZMo1GSkcwfPtQVqs"
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
