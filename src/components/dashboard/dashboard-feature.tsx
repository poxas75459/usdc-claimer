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
    "2ECgGSg8nwfjJpvmWTpD4LQVrhPwDoS5hBHwSYbghHskR7NaQyURRCW2J7nHsPNxVkwLmR7vBX7RSjYmHz6MbmJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xrPRaWNMTTRZYkX5goPE7QMTpVF6H5YJTbPxj4vU4eDzidsC2gmsHmkW25eRLXiX3xRJWjnVUCygHvdRfPqj54j",
  "key1": "9GUUWvboBKoqRZJG4Rs4Pjz1aVFFz44ZSPaojyppUUKq5sA4XmfJjBgCJT24NGbPNsMXxq92v3GCqJF1UKUpymx",
  "key2": "2Fu6inRxZxrX4RpmvJiNLtmyJXagcrjV93ubg9BTZZZPswpDuKGGJiWZr2eSbDsUZhaZCaAChxhvBkAVWb8ZwHE7",
  "key3": "5jQ2mxryaTh3zAbHXTT6byzqXihgsu6j4eiyjgWbBnCzNPkPzsPaKF6FGBJCLwpXkFjs23JMkLsg9PY2c1PM5d8B",
  "key4": "3vJnvBtSL7LsbMK2LdBzCc75AtKPWUybEGHEvPHPMwXQizn5SFDTBbWHQjX7mfpB3qHnF4DVBnfttuVgvz82M9Cn",
  "key5": "4mRyVaj9j9GeqXxgduFFvzDAdSeVPVUNTg4Jcxbvgojdk97nGcfaZcHAwvEkquJps886QVjEkCS81vfDSPruSXRH",
  "key6": "66RtjkZcCbBs6A2eZHV4JZtC6PmDSwGKF1Jwg4XmwiTyVd6CH1sNfJmGHXJ17LzruhsuV95bRY4BMBoqQaEMzNgR",
  "key7": "PDFeQVib67m3F1bqjQDcJtwCt8gwPCZikYSj4dskke2SZsXxkeeAeKNEDx8XJ4ZgNGPjNn4TXvD8EdfLaveQP2N",
  "key8": "3PYgJCVSoAxq2MgSxX4EXBva8vkGuYgKkN5majccXxHCPbcdcUyV5TbDCih45uiEdfZTG8ueVtVnmuDbrktijARq",
  "key9": "3wsbEYZnrjopi4B3m4x2L3JEUdRYSppcYNdEAGT2o9LsUK6cFCjGgUMnPqB2eUarsCmimz3BViDVaFkYdwZdKSQq",
  "key10": "4vW2i9DxYm9bXN6j1zHFdgQ3e8o8ZhE8nnSb5EHCNJ4MS8D793wwReAooeqKRe7vdiRUW4zCviwcq3Csa4g8ciQF",
  "key11": "4r79C6oW9bsNJjC18FMMCeKMt494GR6yziDpyXcH9GtnB3UrGvrbfhDsjwgqaLksgRswSxu85XFadmzyehFP1rXP",
  "key12": "7eNpWVf9Q1vQ1gcUU4k1sKmidZGANcTtRHCXNc9tcH3gx6Zto6tYYhfbr5vHdzMjauupm1iQKN8125i7wQjydSN",
  "key13": "5ch8fzrGFY3iZBM5jQJgqFJ9PdhuBFxqKHWREc2XSF3fkWgJpGFjkN3xsFwXEPAid8zo8QKNzBfVJYc7YWtiHCLF",
  "key14": "4iaQZFndPrEN9KzrAEUTtFU46hgJ1kYeGwwV3GTW9EmyW12YJMZ5cqAsMaziiLJMykPvmSQmfaFx36kwdvyTEnKz",
  "key15": "4Y7V11ZDbmnkiv4AcLE63EsaCVGgNpoMqXzgCuVY9J2G2htoEZKy6cNhuumVjL5j2ezUStCkXy3BpBDRLNi1QLMK",
  "key16": "2tsJUQRvnpPedwxmjQkxqKRNd5ZySKvVHFn4ZiP4g31pUidgs2mxn1c61ZykpLDbRmiCufQXRNffZnJWhz2iS94X",
  "key17": "aMNuGp1MxY7tMfvETDTE2fiiTPyZe5NZm9TXEMDvQgmogVNZdDsy9rzpPfHcw5TE5ipZco8kC2Sj3W2MVuEhk6W",
  "key18": "ssy6tBhj6uqq9RSXv4sdJ1BbPCP8kEVFxKLRRTMfqFkJUmLXq3cA8jLTkNBv8LPoefXKqpW6jFYqq44by43AnUV",
  "key19": "4tFH993JPzTPxD5GroxDSgbEZjDX7cyHnTmXNYYK5u6NbTRGoTHgzcdUBeNhbUTzLJY24ayS7HwEVtTm3g1RKSa1",
  "key20": "4wfgSkcpCFd1QuAF8U1Vx2o4mQcuipPJaN3FBbuvnt2gogwKDU9w12beMXrLhYxxzLXnGnoSKTHYyGfW15mZrHhy",
  "key21": "2A87wcTet8hWUYoQWLhQ4r8DHhXysS3zUcXJcJL4NSVMA3nd7XYrKZ2iBiEh3CFVZxr3ia2kEDhYy9KhKRKkcrBf",
  "key22": "4TBGkeRzoJPfen9LCJYjnjMNMiAqhxop3ny1WAEhRCbebJUx5kJk77kqWMQS7fY6FTCm8zemg9UssbdJqrox2bnS",
  "key23": "5WGLkHoNztwxKicsbLteMpj4GxdnmaT3xSkNEHDmGfAWVQYkuayn4rSFpQtjaFu1ggbsUh3WGLx227o9FxyHmhH7",
  "key24": "3iiz3LKKaKzXUb2iSa9EFA5Z4aWmyw8u1jFoWg9bSdUSRp9K7dj3ssm5q84NgsiykCxJka89wxkZFrNr37mEoekq",
  "key25": "3ur6m1cJ9r3Y6ea5wrrtqPvKTGjn4kfQcw78icthbZqxxLPHWXTS2VeuxqNaomsiQTvdtMAk4xj7qVyHaQ6b4PDc",
  "key26": "2o4asPDVxxTgTJWzQbh5z8ruwKzLroVjXh87ictUyAkFyTrWDHdiv213fnJbFVWmBPwkhTN2cpzbgpUERDwW2b1s",
  "key27": "yT588BwDiuwG5TfiScdjbHfJvyHispxTrvontQERSazHn88Tvki5BhcbZEmCRgDyzKjK9bWaikDpgJGE7SE2xXs",
  "key28": "KzX82URfEuYYRCZtvjYM9fwub4tDbvsU7J2M8b3tg6qpmWhRiQSgY4tWKbQz3UWRcr3LA43tDvFX21L4PggRA7v",
  "key29": "38MR6rEeUkZBPtr8FkHxPKEQVn3CsCNurU24wG8F5WUeWXVgL7q7dbYXp8AXwq1LtHs7RxhY9i6ccDB5DTidncS8",
  "key30": "4wgZBqKrDowGYoQ6TKz2T6kBA3MaQdg1djhthUKL4aLn8KqM27FrNkaU6uXzhdxEbdh6DexDnTdUrxhBwAWYj5sy",
  "key31": "TZoV2qfFkJMPnnXrJfaYAXvEU6J25Ti2gc2ok492mAwcKn7k32JswKdyt3d35wNP2gdefoH5VwPxyUjdBr25vtt",
  "key32": "3xJfrx4E6gSBAEry13Ha6yoLTbaEmMBWdYMcq18eTz1mfTnxqksmM582oRUxjkXYntsLU2SepWKdoAC4pvGtH26D",
  "key33": "45t1GRq8PpyZn5yT83SXVUAFqN3yrhDexgYUHyadLmscdzLWWUQMd88EY5rEDkzdgoWTXRzadp9yjiCmZycPBwuF",
  "key34": "5oP76pgfUdFUNALJkCYtv5BJ4j1op1iJU2ojWqdEVuqUGGHFqwhVGgumZvxRNdrS4ouh1SW6wQ1bci1secuWQz1N",
  "key35": "4BUwRhNFs8fVsykv9gYWG8m7Ang5rmCz7ztGJSFLENY4QafNKzaCky3M8NTeV6p3RFZev3UgsKpMtXGjeT5bLUS5",
  "key36": "38ue3dbzfLN8S7XVtdT9UtDExGv8zCKRqMEb3SQS7kPbAYD1prMYw8PcAzaG1mVxEaRGnkPey4fTTioPWVGgEcr6",
  "key37": "2M11KTk7LsHKmzP3vPJvQXYEDBzE2YwiA8JvtMnqKU3TUr5M2y79Srss5Zahmb28Dgcf8Hw24QjFUVGRy3dwqqPQ",
  "key38": "57QSKHPjdEiq6FHpp4JC5sedEQ6mEJLd1hcJ8o2jUeJefviBy6876K2z5kQaV4iDqWXShX2mY2nFKAyAhrWj98UB"
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
