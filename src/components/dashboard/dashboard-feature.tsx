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
    "4sGD7RbQHALdwcCEKw64Dj1MFk1hCMK89ML4qpdJtrZgxkyy7CACiESo6pjZmJv4XMos2pS9JaPBSUDTZUpiV6cN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PAQZtUWtTx8FJedJNVYFUY1QuTxAUEgYFtdf8Vc1FfjTpNW9UQzSAtqzgQRQRfULqZ8TvhW5WDcgjCkgemBTwLM",
  "key1": "4Bvtw7YdVttJtebMmazGkunsby9n8B6tfsFLtcneq6uLVSYrS1egoU7KR9XdMGUGennH6mmVP6131UaCtMuDKSnH",
  "key2": "o4erThuKYAnDdwRBSVN3tiv8pPuNG2YUxZt27jXz5sGxvCRWRvWFFmFCXH2uLjXr5n6gUUzyREWQwWRtagx4kXG",
  "key3": "2QnRBhHVURwPeggKmNXVhukMQsSeQhT9Z7Fc6HKarefkDok9dfz98iHytfvVwZfF2S9V5YiStqbC9qJVqSCxPvyx",
  "key4": "csR2oipPdXHSJZ26Yckq84T4UDkkBfMAtpAWAAwkdk1MXirZmxB944gdWU3nDoPHgkoFg31Wv37dPYcz9DbLjan",
  "key5": "26H29j9xH58s5tbM7VH3K7YntEiLfBoZ6SPDGqvTPn4z3ryD2ExH154pnLy3oju361NupW3Ja7ZNwKk3BBNbAzCR",
  "key6": "3gtnNNszgPRWgx49ZgEBYyoSXstJhmF8fLWribFVa2Gs5qtsZGv75egJy2ogzM31StPqDazhCXY5ngeskpdA7cwL",
  "key7": "mXByT6x45qZEKFJXtuvMURjZasGsVhUu7khdgPFZsMjHYSJwv36KqNQ6JdTbLgJrkrmjs3Gnwrc1t3VfXpKiUFM",
  "key8": "5yAKjM3Zs9NGWiHjmjDko9YkEcfthe7NiWnY2a2xKvF8FBSb2fWP968eQ8LH6yYbhVP1bjuNDhva9cjZV4m2XhRZ",
  "key9": "5ngdQGYTyccDixet8CHemyYSxLnU3vVnBNHiuJaXqrp82axqLiCoxnhHBCm8SkTgsm5iV3M9k24GRueNWQbWdA1S",
  "key10": "gVAj1aHMeDhf3QAeoxmNHZeni4eUksjX4qvi7huU7pLUrih6gmVEGD3LPnW8DE75uknh7n3U12a2fGmzn97Hffc",
  "key11": "3qm17hgfqdkET4oN3DpnToE4WG18CQnaPVeTRpZBKi1uZ9MBrn48NcagGuxumrqcLqEVmAX9y2c6RZvqqoJmx93G",
  "key12": "5DqwxoM5rsBpfdwkfDg7yKqeSVXragWHd1yXHMVmrDY3HEpv3nHsZfNjFHfqy9KwkYkzi7xHhAhLZ88KocuDg4b5",
  "key13": "2QTGDKQHnrJgg5pZYh4BZfqyrSZXaiAVQMGjUqEYG1GFyCXTqs4xT6Cpu9r6zr73vQc7GG7sRG1wspXM1jcsih5a",
  "key14": "5juZJDorkvdeEBL44sccXAQhkJz3agkXzdnr6v9JZc6xNBwFWke11hBsjJ6vL3wkjjk8o893eVmLgBUEsWZixSKK",
  "key15": "jXWAZJ7vX8H6SqKSXMN7aiRKj4dRGzJtuRtWHvd4Hb7z6HqkoouSWQGG4gdBkP6ZrAp1yhPjjvmz1tEsSB9ody4",
  "key16": "4JwZimzJuezuHUfBLDw5a1w2E1DJmQF47kt5xkYsBXhDUJpAVHkVwZ6BhEQQZPAeb3TGraaczoeVmZtcPFpYx5fu",
  "key17": "34itPZ1SGR9vMqf6ZLf2yJgCynTEGGAovXbJZYAtAt6gE3HuadiRLN1boxN5oAXKjpBrPjQPW2TXYE37dqsvBbUt",
  "key18": "bM3JVq77T1KDoN8hAejZGHLbnv2udtpjzgWKbjQ4D5Lru6EK8DegFoGYJYVFe132djp42pxWAGoXDxqLpmuTcrC",
  "key19": "4JGNx3uYLqxacpmpneX15ruQTvaR1qPX3wjDhuz5tkMLXgSa9X1ofEoeQv6F4GQS4ZBPWAu6JhMSgWemFihmUVPC",
  "key20": "55y4W2L5Sde8rVNcTHp8HsaJ6CjMZAiFn5JEB12qG6V2jgAVaoY7XuoayVEgropHe5vouRKxApVYxbAsihGurdXu",
  "key21": "XKZYTKtU6uJbT5DL2Qi8Lh8D2kTHxwJ8vpWZb77FUE7L5vNuZafsx6mjZEyDxg6CzDycgFGNa3ovags2SAyhBWX",
  "key22": "2mAChGiqWeuG3JxYF5w5AjRohM6ARQz9CGpfqPjzmGU4Q6SxjEBZcq8VeYTeftA587GNaoVUfYh73JLRZEf1LJVc",
  "key23": "3hAgabbFzffotyZWrTLXQf5jwUXhw3a6KKRjYSR4adocqtVpRAyeKToyLA8eWXkpQEFL2CzjEnWhMDMJrRD7ZNVi",
  "key24": "5YtwwqT9bEgqnWk2znRTab2UjFMdUJbdYzEB2XbFJMwyYyL3yKg8EFHhJNZxwNiWugUKo7NTRgrBqLDEmRrB1LMz",
  "key25": "36aZsSpyLT5kWWc4duqkx7EVuMTivThSCeVrn7Q9US8h1ncyX9WebGHne7uagULmmMKrw2uRqCy4VW9ySv223myt",
  "key26": "5WTi6H1Los6crbqwfscZ16YF4sCJvknc3EfxqVGFJHfhnzLBBajv7u4TGJSHzgrmsNBd2GLtFrFq2Ko783QPN2sS"
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
