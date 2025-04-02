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
    "2j1q5oXTS9YWtNHzqy8E61aWaaWgT6ctCUsFoDkA4tgwb5Lij8XXH5Bkr4vMadQxiXXpDZh7vqFpCMHexx4fM9KD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56nTBKqpSFFQKv2xJzAmDYkxXQBd1iezCJ3wuuB6dnt4GqiT2eyxME8WvupSawG2MuPKG2XjcZccwQHa4JVuC712",
  "key1": "2dJZcJRvEcdYnyv1aos4FWDXs4ErBSnXU7xM79SpaaRG1vWaxicWrT2yujEAGaj9RsLYaUzKuuJjne97wvgzP3ek",
  "key2": "4JKNM5taBcJPs6zvco93gmbbr32917412vJk36zKk13Fs2EJuHi38v2sPV6JYVZV4aP5TxpMgSY17RzUD7m4ALDP",
  "key3": "3kUZ5nJRhZR9JsWHz9sbcWerSxfDCy5FjZxymSoHFE5K4v45XwgfUFad3DhyTPX2VRK7nKRZaSwKXVAuhe71Pz9x",
  "key4": "2UZZvSMdPweJMUBjwUtXmvQHW18roS8ZX1C5aHpg8BXeaZq4gC29c7ZW2Za46udiiKwPvKNvc85b5iPtGhBupC3g",
  "key5": "2HjuHKwdvRQzdei5FLT2CN66LbJSJ2xE2XXCSe7VTYJjkC4RuhLYoVhX9G38y7exQT5rpfbsKnXbGemvKuCEHTHs",
  "key6": "3Qq8McqD2F1oFiV3K1vm4S7kBwTgp5S73kxM8HGVa4KWTXgGSgd7USF96ouQUCdGx2gzrR7dUJG5VT1V5sLAVJvV",
  "key7": "9JJjHDQ318wRfQfhfRAAAseLm66CaJzoWzEDPVA52AjGuJ7Uh7rpEm66n7TcvKHNYiPPeskeMYr1nvs1gb4wXjH",
  "key8": "5QZiVaR3Gfe1AAfdgcDrh2nBCkjJoZPagGSqJUCXTgELoJ6BhN2QHg1VbwD9Xu42A5V9B322FWxXNh56i5z2KaAU",
  "key9": "4uqmDsc1d4MzzyC2LzdX51dJh7gX6ZuvhRcdmkEg4EeHAjS4aGHHfJN7xR2WjFhjL2CzmUcpJNwP4ArpHBp2FNKu",
  "key10": "2kfto61LDbyWfUTAR9i9VF6rP8jyKK5tesM23Ez9Hx6Yq5rr1MRNf3o4DG7yp6B1yv3bnc5jWs356GzbATb7VoUZ",
  "key11": "2665r39DHpvw461USoF8PXdwpdjpDMNKj6B2pf3eGLsgiYb3gswsVJbHGhGs9HmDmbw4SLT8SqhMNrsSXviRxB2C",
  "key12": "5v4pMuoTJY7nfGScf5jjY2iCA263Uxs6cPW6QymZYa4Zp2ZvbmRQPkerN9uWhhfo3SJ7hu2VTaeboN68MXycKD8q",
  "key13": "4qiVoxGK1YVUfcQ4rWMSqcbe2JSLNYMZjMQEGu9u2h2iYhdvGYYSVEYC7p3wLkDSX7RCkkF89RGVzhZdpudfK5z4",
  "key14": "26AbWqoHRof7aYsJy2VK2G7Ye46S8py8ch6FRZn3kaRVyDemr41wGEg2CAB12u6CNBWiSirm6XHRZ2cuiyWhgDGr",
  "key15": "4iqvpFVhckxecHiKfgQTSrAmZAfuxUAkmBxMUgJJQQSvGCrEfbhjbVJqmfgs3j6hZ62CZYs9mr7D76LSgu3KTuiv",
  "key16": "XovTHK6pt7ZoF8yFNWrjYjNC3aqVtjQgWXHiCrNTKD6bU9iqsXfYEUfkCGHt4TcE4iYuCNcC8pANWqrm5y7b3Ah",
  "key17": "652v8gUxYn7FLuBCRmPWi65T4z56GZR3sonacwAisoYWBYn29pvqyRBiZzUZ2SGLLtiX6wN61cSXn2TvU8qkY512",
  "key18": "5CMpQky5rpQzpVzTbtc4cWBjkS9XtAU8aFyDMvUrw2KJgAH6y7BjNUjJuDWefWQBsm7KMiKSDzEHwtxY4idHpWpQ",
  "key19": "4Euh3xZq1XvijbPuJcPFXwPHpiaXuYJ4ZdXNWCMc6Nm2YdTao48uh4bEwX3YoVkNAcprhJsLNBqRxZk2HzsJKkpK",
  "key20": "4Lahy1xZ1q2JnMLqYwi5R2DvrKqbry583KRY1gPPwfgoPfyXprXdB7CYagYNccXZrKoEECN4RpM6uVfvechsJ8kL",
  "key21": "3NLnSJx18VLNMcK4wLn7CgoR9sDrTMahgQhTRonE7E95wnRKAFPP9zS26MDHeJedhZnqxN3uV5wE7btc1hv1oLZN",
  "key22": "48e5aqXuiUkyy8k4U2GZ5o2D3TqUwvgscRmW6TWtScnZZpVneBU8QxgZmAduzwYuGv8gYUnn9tGs3TjTKZfwcL3X",
  "key23": "2PuUSttewAuoUSZRUNMD6GgwivaQkREbsBUdBsV9tYMZCz11LbcHo2og6eFHN8rbY73nh8rrdU64YCphUpCPqcXF",
  "key24": "3Cx8cxr5KqPRH2YueGZpp6XC4HjQFfcW8uyPcgEQZvvctqsSoLF2FSMhZcXHA6kERj6x6WdfhKkS4b7XesEMgzYj",
  "key25": "35PZfWFaGk2Gv2XhhncTg22UaJMatA6qXzy3vGwUu9tfWjPKRT5Q7y5EeVbkQYZw1KsNn2oZXSU6V5qSz11A3yqQ",
  "key26": "3UkbjZ3cE4mEMQTbWzzDjb2PMFRgoEYfHCJCDLMTU7VeVM7cyfYvXTnuBYGLL2xWtsRZXiUpqwbqmu2MNZvFermY"
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
