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
    "5qwx1nfjxouZpPKkRinuFddxAqKLpvAV33oCQPPgL9UHFByBFJBMBC9BQzPhmavyuXtEJ6b5w6FcjE2fv3Sjd9EY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mbKS9TZY9MmUwhT4f3rmh2JoCMxHJDwBLyXnQwJkmAK3Q7SqYrKk9QBafPKt2CUodfgJNMWgREeqAkqJPVZfwHY",
  "key1": "3j1jtYiot1oQTfCvsr9BpXp2MDv74vLMPN61tSsD3eoUU1YKqoj5zJCnFoxA1jnNGzy8JqwKr2nAAoQcEw1cvL6X",
  "key2": "4hijp6S5Fi7fcB2AjGMCf8diYQukKM3cUinJ1Nx5sP9RBmffvvDJVXG6hGKrhhNrrnofapuYCDd6cUcMtvHZDx9q",
  "key3": "3U3S6vs8PyKd6fdWmKoAxsv4f7vigzzrwWA1TVdFcbbW6ZVCMCTMWWXWNrJjeWpDD5BFGMqzvANrnVHexZAHnw8o",
  "key4": "BLjbxbPqM38PyXx1nzqhJt1heJUboBmQceH52PHkKKx9vXwkkheJF3vZAMtGxBHuRNSJxJsH5VFuTztYZg3Bq3T",
  "key5": "2s7npD9BYfEDnLPJ8BAVos5e9vGY7cKP8C84X6ApWncqVYsPPjhLr49PWbsYMVMTo4w14Pg5o1dEVWCcWqafU9XL",
  "key6": "3rVMnJgZ942vtgPd9ePsH6x1iv9M4jLUhpn4RJ2qJZ5myfiXZWtYJcGj9A8DgZKjpbmJBALxSFYVhAkiVvTxT7ZS",
  "key7": "4PMAz9yPzn7bQordFvs7tdcsECJ4NyTNMFkDPEaSsixwRhoqm58pUyWwYtwbGZt8J8i4vYs6y8ypecgcMiBwBERr",
  "key8": "53PvUi8675Wfez1oivgEoZHqyvmkerexEgtWt7SighW7kwMCk17sgYRpRRv61zLj1vfHcvdtQp3uJrLHHSJziL6U",
  "key9": "2M43zy3p9vomak9XpsZEic4xfdFMWsqgLR3fTnMu8KqCrfXi4XpE9Y4onjuL2i5hUXJCrZgnLxuzM4K243UnAiws",
  "key10": "5RVs7zvdQq8ZpZkHxy22HT2aqZH9sfXhwo3EuBVBjDFzt2aiLDjLjkyzu59WDbyvieefUnLxincVS6Hanjn4SPPu",
  "key11": "3HkbBpLz2oZ5FNNu1x2yzq2U6kWY5LKefF8DdsXjUFUuQtPJWpfZyxVXCtiP8BhRcxMpRoQnKimkaC8cxnW4nfud",
  "key12": "2B7QKEGzhvceVEs3gRnLoNybQqTrgpPq1CVUmnXBUrtirC4yKZCFPYv6V8HWCjFPQqfZLRyWGP6b3xNmipjsGVp9",
  "key13": "4thcjkwzU1xPcnX5YTMzVZVnYfPSskbq7N1Q66s7TMZmhoZz4DVNCSw4dXUDXVXuq21LjNFsT5HbVGhN7btfWY9S",
  "key14": "3TPmtv2Yx5Y7nANZSjnXtggCm9tCupyK3xXoZZzvtxCusqg365tYLGAZXzdFprLZqZjGjR8cS8KGaG8RShMPKvdJ",
  "key15": "4YURjgmTVyPYTN1aKzHfuhqCZiAD2K7uPQLDWEzcW1z1FJDbhw3MNC7UFS4TUEBRzM5CJALybL2g4pjFJjtza4Wo",
  "key16": "C1JcS5PzptAS71Sdi4mpKdx55q4BCvQqL8b7t88uQLfNcTkBBgh4LijXJEMDyNxRW3aoHZ6Gj2dM1XnCjdypr8n",
  "key17": "553XC31ZrzX9mp5jxyyeHE8LE3aM2SVmNGWLpAUwq6nNiG2NfjMsN3iq9h7q1i7uHtVEcYWBVCbDjbJPhfvXTZd6",
  "key18": "2yJQGEbvUFgGoRmXgjBPtQKfdnZfARtya4tNHyGi61Poe2VTuztMCu3qfZVgg6Pzrtu5xn7PuyfPEZuLFcXqy8hd",
  "key19": "5XWgCLLt8QR22RP5LZCwZTZbyj8CeG77qS89fzkBvofAEeBtMV2J2gyQ6EZwtRfz196VUtkeYHyHZbiirkaB6Gts",
  "key20": "5sGXeDabXp5mpbmoFS5GaWbMARpRDhPPAsdcfhcyjMswP7xEXeJ7ofVFh78uKPcduGo2AhjY8fF7wibv2rwgE1xS",
  "key21": "65e13aNCqbWxjxuyLGedyWX8cJdfz7PVRmLpw1oadjCZS76PFSXkpKXPQRvEu52jPA6oGN6Cf1oBgoX78MUcsc8Y",
  "key22": "3W6vbxoPqNNaYJtGAqeNdRaMrtmWK5sGCGxrU2hBdQTpBmLYnY1KDVwJ94CBgvaYxWEebgH3bERmQSRbkp2uky1g",
  "key23": "46NhQtu2Z6ZRDKLRs8PT8zzm7VudBvi5RjKGWAxNGYLLnrfJBNAFvU99cvcaxeQnuN7oqzd59qowvjKsFtjXuqJ3",
  "key24": "5Yw1H5vZPX3yzbwXsobNFWEMVwGSbnGdoeV6592jAzjbPbRtR3nzZFxrvq9jUJm51FfMcRscMHLFrxgGbSqhJ15t",
  "key25": "5gL4DG9VLVzLntjRTJHikSwa9hohHR9pa865xdr4Jow9co1tySxwnSNDv5McjaUCxNZNWbhZnwfG1F1SZgAbLuvC",
  "key26": "3Ao8eLeXtjakxntnxijQVbFAsPu9v7uqPzBtneaePYJKCmUTbskMDe86vqT9xe9ZxJe3zRyNP9J7kdVs1DjCF9he",
  "key27": "48inxDZ9SBdVSh2ueXH6Hv3XvTR3wo5V9hVjMxihePHKqCqy95BSJH3XkFYx5W7V53zps9gf2jEhtXW5jTyk7yyJ",
  "key28": "5p4oYDNLj3Eea2wWFDdkLCYUk2Yn4YxEL88jYALCkHEKek3n16DzTCwMdE2K5fqBU6cXmzo8ouTzzz1ftgEERSvn"
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
