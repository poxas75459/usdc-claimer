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
    "tcwL7JbBbiRuWZAfbyuGZc9g95ppECXSDf2L2prZF5pwiwbAzuSGMeuW5cNijAMWA9c3ZZ1VWZAgrmT98uHxfRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DLnJreXMZzpW8afz7wq45kUjxWUoufFgfEqGdS1CwpyGN8YnptEkJ2gUzxtK2fVCsJxaDCEYYtrSJCuFtzLUfXg",
  "key1": "2gutsHqnwVyAtoDcURz8hgfQkVkT7TQjNuTVsN3K1pg4YMJfnsnR3PpkaAar1ydKFhKM38r82shNytiaXEeZeYBX",
  "key2": "5WfPBPTZnH9EEwhBt9emjXLEagCuFCPEs6xjgCtEkMPZqUjXJxxNXFXYnGdNxS2wj45SdefX3PV4EYgHts2fxXmx",
  "key3": "zSgSshbiBrRu3FdrxnC9MPS3Qy6zT5Q85LWt2PSGWZh2tkCQ8qGLcTb5vuCzqW1USj1oCZohP5ntVKRsbLCymny",
  "key4": "3z59L1p8GFNQ4UQRVZS3R5qTpW6vNoL3bVV7fTXxxxRgH3tj4SEgTo7nKcbfF1rXnAwHLiBgsUsQb623GiixBwvj",
  "key5": "2C1eLQUBzuKQd9BaXLM5GKAifqZcxewbGjfbyvUKWK2hTgw73fnKBquwPDCCAki6Bx6dPsYzJvbh2WjZyRoB7XLw",
  "key6": "222ji8169gWN539VimUXADUJebQ429pAwppAoAtV2Q97sygvKovrqKck8CK1Zs8rQEm6z1FdCFNsp3bFBHNMGTBU",
  "key7": "4TR8ZTyTrsoV749ePQFTnpiLzPX3F1wyM7uNJhHsKXmCqM2vHjCiBAw4LConfgjgkG71GVgGeBuFuwnQc3N6v5so",
  "key8": "2cipbyQJqKe7VrHksAw9E24S1KczFJWvd7HLJ4QiKpE4dTjeD9Ty8jApjtwbbxK7NTarwvGPjiAxim18dW4yaEn1",
  "key9": "4o7wAvjtWD992kJoxUGjqC9h43hHFLBjY9d7zixippt26z1Wed5PKdzKVohW8kikjdo9uzX4henn9XJ99GFmEzc4",
  "key10": "5UjbnzDn4t9VDkHM4CYi2wKX9ZxYy4vF52qbe2t3g8ocgV8RcdJKP9YVQ13XUUcdMT3mERjj3cgJELkvqXZMKTKJ",
  "key11": "SBvaLg1LMhYbHzXrSgrRfpS7LwjF4xXqcGJ48hMhqUkPb4Qz9v2GETmgBKwtporbXb69AjWS8bzZkmSmCVHeaPw",
  "key12": "zLGgBcnwJyF2QtrJLCnfDVFEeXoB2st2HoXqfY1hDQnFEbMRwQgxuzLF6Z9sJMozTCUS8btnF4UQ8M5u8fmTnw8",
  "key13": "2cF35yMFDevHGjJqgAKpK7tRtGdaehPRqrmeRHqNWCzbLowy5eq6J7AweozrYaoeAqDZD2Rr1TgVJgmJt9fn3TaB",
  "key14": "5AJzRZ9v47pip3nJwALeqW47MDfYzqFVkNnEbTQaqXyh8ySXGbF2yW7BCq8wHv5HN2RfsCba6x2EXCG66Agjv19K",
  "key15": "4kX8pzSv8Y4e9GYsL6eBDFNrKCcaJtnjnyaQYZv76QRPdKbWHereMwDTaVpyDGZy9BQqcqeqWRwe531CwxSvpTGc",
  "key16": "3w8KZ118iTAUxVPF2YyVixmHN5C2FqmaVw2cA3E4qPYzMLmHQMPw473qzVwZFQdLPLbvEgG8faqEH9RA28hkvBKD",
  "key17": "1Y2dh5bS8FDmVuLkA6TiFX4pz1ZUMimZXHsUSVt5YPNbifdbVCJRvaCjThA6PLY1YgTBs2BMEoPo1W4FRQLEfys",
  "key18": "23WSzmkUcQQeR7qH1XviMy4uXsEanRCtBoUkDvzywGiZUZvDX96CevdTVAQirPM5vQsnbSeCEHcaQHkzVjfVkXAH",
  "key19": "4ZWxKQSCicdVcqWMyuNUW9V76eunBKX3TQP9FNjCkCvroqnkLtJmxzuZwFhY3Y46QUxwPJdG1fsDmk5BViHciys2",
  "key20": "xzvYwbJkBj6ffgEn3KZXksgmVQrA2s2Fha9GvKH7X37Eacy2vD1AU6wKPgT8YmcsJZPMAy8WKSqEAFPuC6A2Ff6",
  "key21": "Kc3JH6iAZE5S1jo6M2DZgRPrFHx2RmC6GuYAqqzvkFYeyvTi1YFBxHawSvCMWkdMmz5uApwyt2dNXYkhD6NV5tR",
  "key22": "5Fevz3DFtcSjUd2vgnovjg8JAhFkheVdZrtgLTnrWiTqps1tzMWN3BP91hUGvwNvdhUxLczxN6zg7CqfgiaUSNmu",
  "key23": "2hoawmKeaxhM8gNE4oohA5omZmQkJNHjpbB9wF8qqvYd9TdrXx51TaLVfLDbKFqcsQUSkX8steEsk857ybnc7gr6",
  "key24": "2Vv4FNgeyu7v4d7TwB47UXcoV8T74mS72ZdgDi5eURGLXefdsugZYM8QFws38HuPXsBrjcQB6C4zYUFwMrCNzGHj",
  "key25": "2mpKBEUzZY4FEQkEvNAeFjYohccMoscGizvw7R1VsdYDU5nmYUz8pkVwFYKC2bXH9x1dmqvtjEpACBE5TFJhVQ8L",
  "key26": "4SkKYFB3Gtv3NQpptcu3ARmahnqrJsxaFJdLsFvApfsr54oL7s9mzX2mNoBD59nnWq79Aw94GxZjGzGtZ1ud8f8c",
  "key27": "X5Jv6UpYNDiztgbcmy6hfMs17cij7NZpcRBev6AU9dMxfBPYt1Cu9rzrNvQeTKyi2554C2jf9dhUcy6zWJDYEfU",
  "key28": "5LaC84gS5h4wADJdqHyCSNS4zh16oaMg1ybA3v6YkJ53Y5tqcw7VwggXbWP1goxeqrn3SjCMLSH9J84i1dRDD3zN",
  "key29": "41je9KQibMJzNxnMK7KkzpYsRh3Tw9GQepm9JVpD598p95DBkbnqKV3mU3KpozCDH6UNSBcKiU434XoTByZ9wara",
  "key30": "2i1k7iNoDw1pbnvmjBCjYc1uGPurv8jL1eeB3js84kDdv8J5sebvAPQbTPHgmecEFnnN8k46Me318zSoxxGdnTw7",
  "key31": "Ega9NHvREZWn1aKyhU3gBeXZRvmw4LC3nZ29hPteY5sY7e1k9JtGFmZEtieHPLJpLEFvfAHe5QukJKsuGrLZYbH",
  "key32": "5PYVRUMRicL1LvTw2QPtke2rhZg7iDmAm5tswwh2PEF83LZAw7GSjEGwAP8Luo44hkbKtFGaD3aHSVehLLXno36p"
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
