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
    "4YP59T3XhCFWzGhSLVewntkCVt1RGf1xeD6BZV4JwXaVvXLqcRe4vtdUzRi5tjjAgaA6m16w5uhLKZUm8AAp6UnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YyC6MXC5fTLsvBEchDhSfHS4K6SrjMT6hjkgfPsf6SxjuUQY8o1aowAqqnwpTmL12HkyozNRnn1yRA2t4wtZ1Pp",
  "key1": "RsUCeTw7fV41KGsMjTGpNLuVWebAzVcHh7yBE5r68sAKQcdtR8eTCMGg5kY47SrTreyYCH5EyswgJN4XUqf5Qq6",
  "key2": "3winLsevodS2Kw7gdPzo2xqg1mzNsfBur2kN7LKR4L5BezKGhJL1141f4NTv7EQsDWHz9dhHrrKa4bZQmHgtcwrt",
  "key3": "4KzgYM8tQm8oKj9W37d5ArVfsbbjw6Nr4ELTT4JjCuGuMrEz6ueKoFz7RDPinj4vADdvRWQ1UpkVCnKMyeF53ipx",
  "key4": "oCGvT5CG89TNqRUQ2KonqzHducRztvmiZX7NPsJKY6mghN1HQcDCzpgzCzvv7HMiiuisgrzZde7CoQkuuKK3Z4Z",
  "key5": "4dFfyd4mKEYbJnk1FH5ecDtxcKBStSQAbdWxivmfk6CzJXcUd57qLsC9W4xc7xfhVgXTA1ucRko8N9YhSefC92Yg",
  "key6": "5sSsMgkA4SwRUGkJBYMoZTarvARz7zTNqPTpK9Cx4zSSqrhxZXz7dUnoMJMNDUecMxvWeNi8Uh5kFZmNmyJAzLxc",
  "key7": "5oLsP8d3W5uJzKhhKWAzxrU7LFuTordhCWXNgQsA5tgDWHeUsCzacswje8d9uaQyRHo64uA6yBUVwvcyPicdiX2A",
  "key8": "LNhyq79APYg2UnsiwgZTtbnWhoUvpXevUH7qxTg9eJHcDV7GtWESr5UB9mrQQBVdGXfxukkgTzvceZVVAcPGCBH",
  "key9": "4xNtYoQ6hPidMhADA4HxWkLDXre9Z658jvhj9DQhqUUTuKKGKyahiuMWuXvZkGdBJuXi5eSJgh1JVs1FokTApo3R",
  "key10": "2YhDr8qTLdu5QWSAf1nFfRAYMMxafzLw7duL6AGcr1VTrvtZ2zegnBXWCMX49zD4kF7nDvhoXnrTbwzGg6NFx42M",
  "key11": "4my3QG4nnPQCjNoTGJwpEqbvfAJjK4ZwQnNHATk5yeiGTVuUBbj6g6csV3Ssav7b8fXMKXB26yV1QJET6xFPL5Jh",
  "key12": "258CK8Tv7Y3LNgMuoPdvFQBHwjNbwb1NippZBDBSH3jAEdWX1TvsED8PHrTorS59txfM29Qx571jzQAjWPCA8ggf",
  "key13": "CqtXtwff9cL9MPFtog3cUqkQbDLTR498qwDcHAZsKubWn81AaFFsxvHztSLSGrNSYWBtXyNTb5XWGppXTWyGzcU",
  "key14": "5nJqnuct6aeXZu9DWALNFaYEfacQmaCJrxzEZCPWLsHgKcqkQeSAYRwb2iY4v4pyh1H87S9r3Gm47rHScF31mkKY",
  "key15": "5ECpNcW7x5vwLiDgZuGPUcBBHGAYwe6HSta4VHkT2VuFZVYJmpWird8KSJRDEyYwRPMcYx1BG8k8TXdCqNFYRNJo",
  "key16": "4wfJrx61XqQXK6JJSWVraTGtshCLPfYZnMFSNAp7CLxzW11ALTqR2hceaES8Ka2ChqfMh52rvWVP8Mgxybd4fzdQ",
  "key17": "24eT5k8AzjVKg4XiYHVLSa8quf7RA6nQsK7ZjrjY3TScekRGMnPrUQaPrnFPnVoJKe5WYC3unHZSvKJAVe7bZKnW",
  "key18": "2Anf8Hqndof3LuwD5nyFjFdd7d61LwbBgEhAeojsLgiXgdPwPK1PVDCLNPFe9ywyc5W7wHWMZ5g1g5qEQGXTApiD",
  "key19": "4w5mJjDZtruq32oyBpjL29XafUk36pgsDBYV2bu85kWBLBVrQFfMS7zNNcn2osT1FG6jBZk7c2981qddBwNwRXuS",
  "key20": "3f6zJYCmFdZtQPCUji4gbnnXEDFrHkke3FhryqVwfwQ9LYV2fmTgC1QKVJCTQitXs4jJQixWwwiDTsMyTroPBtVp",
  "key21": "3FJpbwXh9cBXML4vew5rh1t1xLxxFSjv7XVawSQaVYTUNHLRyNWystUXDnJZ3phqLHckTUYi5MdbEKKLqBjK6FXW",
  "key22": "4zuGvCEA7NZGR7oEqDADcXjAnNi1AJUYXQ9sP7ip3zTGRKRSqGdM7D3sFqfKzYaUGddUWoHcPfcj7gbAyPAyH9ba",
  "key23": "3NRsZupy3exrCNweuCoG9ef7C49ZgduvjLaDcqt3qQdfCbBQGrHUJ6B5AqaGrVYPgbUgwnQN8zhxptoyLjYNRbJC",
  "key24": "2jNYSUWecsSp4eNCcAhB3jkqsteko4q7BMUfXW4EnNT3MCFicmB1Uww5Tobj9mSyCDTMc46WMo5v1aRZ7xGEGjMM",
  "key25": "3KErzUZSFpJgeEwtT3wy1vkNMnsLEgWAsZHMkTQ2HCBkDMdBo63LtMZ72ENjDBde2WodDZfaagebS1bVTUafB86A",
  "key26": "1csUAGzRgeWvsb2t2V73e4QPUFYW9Njb65EJRBfQBkgMawEMnATYA2CBxoeh3UHg6UG7yB3tBqgsG4B3ksvFzE6",
  "key27": "2ET4JSucpDWtYSaxB5PchqSw4T1hYuohMbXrFJA5HejwbkP5Mwr5AV4mtsz6XUySxn9TbuGzQXmFdyBB4dxRH1ux",
  "key28": "2AFKDefgNipSJqsK5z74HF6Xf4skdYgUjXLfYt64Cj8qSxmv1dtDaE4sPjAYjkXLZo3MrG74pXWXLT14i9AV1Xxx",
  "key29": "468FKt4ng9BkKPGQwPJ98J5dc7VCZwnLPbggGHY3prZHhD7vvqKTsA46sQxn688vL9XzN9DAg9d4bhnkfKZZFgaB",
  "key30": "2nALkgydKrJpYvXEV4cJufSvo6gmhP61MPJDp7587rMXajuaPRmwUw22XdM4PaooaqkZnqxsPzpN1YkFPYuhiqHw",
  "key31": "4Hb7MprHX7FZpTioMwSfuW4WiwLx8RKQzQJijoRiv3FZ37bsaQRNDpwN31ed1yJbpHYPkiYLLYXwrCzsYb9UgDBZ",
  "key32": "4zVxwjk3vFGMtGDuJt7kxf7S7wsLkk6YfGhvPceWct2sVz8NUqBjPM3WpgstA2Na4cr3kG6JWn6Q9VP9ncazKXTd"
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
