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
    "4itwNALipgJPqfVsS6hrwBKBYoiyWAWUQ3fzR37PRakc3e3pPvzEzJCYnoDVbw8jv2saCyYcLNN9CP3RtXTdzF2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bA8ULgkWcGXdFoTJDR2VZYjKSTercLvehaniLeQ1gRfncXJ2wCWP49JkC6QdWPvDhvRKhEQcrM48huXSc69QZJB",
  "key1": "3rEMTYrG5BjPt4p7QWY8z8DBpmXz5tWVpTqpyEBnVLZccpczLXX6mGY2ETWDtXvUxxKTJ9vd21Uq6Yc2f58yercx",
  "key2": "QRR9FrFTpKpGduj1c9AjKVhff5N827abAiKq9fdMATCxQmeUHWEWRwwh1EW1v2Wgzjw2YMKmxkzybt7zHS55ZxF",
  "key3": "naAKuekvwrDzYvsuBt2DEKWokpY9AHUEz3Bj4ybdZBosiN7wsoy4So3PGuLAqburtcboSr8KzvRkhsgZVFFpF7Y",
  "key4": "2mY8rGkA5HunyzTwRcsEpgVMA6cUXgepBS19rbCPixyg7zwF1NiTAnoNQrFsmVvBmGq1Nakczb5oQGTY7nAZ3VhT",
  "key5": "LJVNkvz24p42CUn9nR82SEzAE1o7MepFMLUaTTXCRivLcc13ER85ByryzQ69k6AF4WP3PNqTYjzwzL7BPTRuW5F",
  "key6": "2fqyNSHhoVUuFpRWyhPvt4c6PdByX9GehXev4X99AMLtx6qWRUePhQLg5Bjdc95hTkkXqEvqLtZvJdoVwcVSU1Ah",
  "key7": "4FtfJ7RFBW2zP3Gg7grwYL3xyzGMdooFHoJBSehpTbLfcoYAQx9R3UzFXCRzP2D137RPrtXyEg9EfoyRwCcRfn45",
  "key8": "w1ebV3cjWDxq35LY1NSXkQmpsyno1wvsajQYQftyf2fyLijUGp9GvofwtU7MP1STK6D3skgS1XS3KpjbcFU2GtR",
  "key9": "Qos1cGVQjduzyqGxG3RMZJnaMuKjBQzdxMM6dHiMLXakLJfd8HVBJeJ1dhjitvDK8uNek72RCXxYdzSusKvZU7x",
  "key10": "2AsX854aVNuqXPUNX5K3VGuc57x9do4fuhevbBE47cLvvTE6omPk1N61QF52okCgac1zNB9zbuh2t9EM3Ydogt5f",
  "key11": "2VuNbiRdJEDwDVs1v89RLhNnhi5fM1nVFcVb2VY96rqz4QWoKDACAE4ApCQFVjNenMKXaBCv59LosJEXKsrg89Bh",
  "key12": "2F6RURVJmSqVZKDjdX5zufL73Jm21DMcrxdP5HaaRQ4aFstdT1W1FTM8fJxGTBSnZRSQ2iTsJ5sENif4nYXndNBv",
  "key13": "c17osqfk1UigLgbnkMRi6pTYkoXLCdcEz4JEeA625c7RWwKc18r8eWj253XoQZaQ4zW46MtJWJWVbAXoDQTdrHB",
  "key14": "pgU4xrYLkjdz5wqDNbn4ZTTSbk89PfsEhrrkGcbVqt66a3sRhBzD2ExDTBGxaB6EFGM7bLFhv9U3sjj21sXahDZ",
  "key15": "5d8586d4hvYGnJWBeZb76WekSPV9N8wsmdHTFse2SjUoPUma3rHK1FrgkoKy4CXAoL7j8fmmXE2dYd7zavimEta8",
  "key16": "2RFWT6vat8hzW99EqhoqEqzEeuPGqPuUEY4pepeQaAUxG75qQbBu24oWQ5VhNuvjQmJRK76aYhCKSwtfjLvPW3eR",
  "key17": "3d5jMKdcYYi2VhLpGBEQCcrTrNjvjUCXZkUkrufY5QYwETPJL1kt43pJjTCnYPVA921PqWPLJBS5dQXJaLdZ8Tnc",
  "key18": "2MjGPjg5QjfKA19eM134J5gJniZVBgLFrXKSjANSB69bBHDchCJrZrdhhL294bm8f9Rp5gDqphPSBRNVY8qnhYCi",
  "key19": "5r4QFwpTHrXihiqzNgs6wLERShicuNdnNrPySDgEnNjXHWxK886AK5vYDZtzeoedNaDYfWWJbWueNzEAJCL5ExjT",
  "key20": "2dg8ZpEXhyogo9M5zMQh9fUuJMFZoaQj4BG7GBqmqhmtNTkZv17chE8KzMmbDsPaWa5b23iXNoZLod1jtPrEEroa",
  "key21": "RHZWXft4sdV36BAgNEefm8w61tjKFYqkYzzgzJKqFudtJMpKzKzUVG7gD6PaLzHbhsAsJQsmF23c5rjuXQTJkv5",
  "key22": "5yzSGF8eejNrUbPXkD9wLU3Nh8fBzJR9tieG7k28C2r5Vv3gGBUwR1BH4AxaE7ZVunyq8q2ssBEW3KvnwDn8X3pA",
  "key23": "3DV8uAkWPP3BcXYaTp17rsewf89RmgDnvm9Lrmb954vRUcKTKR9A8hJcj49SDXZ9UnqQnQyXESZdyw2dRUN3cbT3",
  "key24": "4N7FCsTpj6NLYnbKUPmKoGK8iQNQEUPzfvUBrovq4kcjgPS4dGX8BWaUCcHwB73mhHmUWb2Gspy4mmnBmFsMWiPa",
  "key25": "57kFLUGbUgwMS8gEMG1w9M1fWWCr2UKaE2nUTxovKx9MXPuoaHET4SdQ2Ns9aUDEyiAAhR8qSUKA92qDvHVNFBnE",
  "key26": "2itznihJX3XbhBEuFAck4Cgwz1XPX1LZAX7QqpQAVNXXpgrn4bqyvTkz2pJzdxnk8bzm3yN3jVLWoAo7ammPTtii"
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
