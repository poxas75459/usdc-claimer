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
    "3muB1PVZFYBQbsEbr2w6kHiQzHXVG8PtE6eoq3bYmN18q1ujonXKQcUFztME4eaMJq119ZR7doAqG8bQznpgyXrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fuKuRqisuRyGVuSd3qFjvjiiz4wFkZeRS9HtLFGQpiewbtSF46KQXxiAMzgqoapkKK9y4VTHoFpyfzBC8YX5naW",
  "key1": "2HBmouzQEsm9qYDhBxGmFmebk7oA6DgmBuPrKiiK75DV7GDfmg3rGBoNr4h7sDyJEPnmr4qFoU3fvVHQjsPq2cof",
  "key2": "1j8k4yWvptotD7trfPj2b8hVwCQqBfenY8YLRo9FAAAta1qAXtp149UKENg6HhpBWkN6FcNYYGawQFAe4XCMoyU",
  "key3": "577FLY1ZU9FBx29EhJTyb1yoENnUhRKxWF3b3pLpBdzBKKz7n5eBJXNoGaJ9XYiLjtTwTRUhjH75yVKGrxtZvJzB",
  "key4": "2fMLErknH1imkJwQe1L7k4FgkbNBnXLEuyZj8dXMBpTJ3nA2DXHjoHbkT9XqJMNZkeKSm5MaBaVS7uLkKsnoJn8P",
  "key5": "2YFt54GBSSaM11LfqtMnmDJQN4GzCXQpGD5KadHnx9HPaCSW9AhJSPiVBFZsr4Ms2pc4FRJVWT3b86JQq3UwQXPz",
  "key6": "5xZP139JekQ9XEeQvGkXTrswu98FedCCXBdp9Q5wGDwEBZ2FJnMuPX8ma5yhn5WeuVHw4TXi2xW8V7NpC1cR1cdA",
  "key7": "4sZbJSVpuT2h6hk5A6y9CTh75ZGF7PfQvp9C84RK6kmWGAN9TJE6zCXVUZKr8K58BgG55E4DnxdJHpeAA7RMg3b4",
  "key8": "6BWWBiVuPcF2e2RdCU7XJFvtuzPpot1GZWZDdGJmhua7kiAeMe5BdsBVdiM6sgBek2Df2TiAptVBHKc7ALmbk8T",
  "key9": "4EXoNrR93EHCFkSKZKfhgru3rBWWSPBFh9NqYt7fHm8yHGgtN61DAKnTAiq5ZkQNrtT1HrKPetE9Uuw88GYF6JuY",
  "key10": "5y11UrdJbDstKbqyGtz1gS7rLonDg6ruvqaa6EJ9Tast6HoTQjH8WhDpeqYGhvC4GTyQ2TSSGF9MW58L6oJtBEoa",
  "key11": "HJiJNprYhMruGK3uXQGXQvTdNNN7cudhNqh9djyWBdMh1Bfx64jChWrpNQorvshh4iynr5sD9qMbqp9oQkzfbxB",
  "key12": "5rXqTLvc13W6XY21LPChjqKPP45u5suSZGVxPnfNwkvLYjQEiboWEvkgnQXgGCjYNpFcELNv5iTgPvERkb4Us9RP",
  "key13": "51teYVZDVS7cH78RCS6Mq3kzdL5NqmdUyN34HC4xw4Zfww4axcysiGq7rTVH4spzAvRYRJRVib7GyWz36gmoJRnj",
  "key14": "28DTd5v1XTbx3kgezJ8saGi1gfzXjUykMPrUexnPEAJYYEAamSKHxZVWYKg1Lr5jhgd4S6pNYum1SGDmr466Lu1W",
  "key15": "5Mvbr74JieDJno8xJrMrSKGJwpQqWfhZRABv8gdXhhLhpVjosNUD1Df9nRBLKVozxoszgxNiHedBVGcnmRsyQ7Xx",
  "key16": "4A3nfZKEzSxFZ5q3Zd3PHfjHV9ZRH6yCZSrGgeACdFb3HiFNaUQrPi6rNuvrSGshDRsZh94pYN4UNpmL3HqwKLEq",
  "key17": "Zjbib4kddJBSo3vSp1NK6s7CUKfnx6d3uYNCaqCWLH3FRBTK2a3gwCDcR9fx6tTNUCPDQ9fxJErLLCceL1fUYhP",
  "key18": "5F654NFSo2txfpHVDKoJTc4HJUpdFebUSZVN8FZCsVg6Byz7Kqg9xWU6Aef4vP1Dm969i4FZjrNCz7gjXciNNNTf",
  "key19": "28jg7AytVjg9GakaemoDJNdUxcRaZ2cSKtwGYidAFcCAnJQCNwdQa2JhhMcoBZ7iTn31MUnStnp8foj8amQyL88A",
  "key20": "5nWS4rv7GRmRWmdXdGqrwZKsaAQJH4C1i5Wnx5QAwqPLzj6uQnSoY7CQ85WC1DAi4smC7SrcfWcAPDACQMDa3vy2",
  "key21": "57qFGETQEZXC1HGaBofkyXbuz4pnqx8T253vBiKaLF9efuhDHFgBhfGLsd5tAZ8qnxbTrcuvT3emgCb4sKWFSjic",
  "key22": "2rv27yRP9fPCccWYGdkRVfXy18AkeTjwrSiUPrF29NCPV2HjgvXcm6pajR1zcBREPiy385q95RPrugpvequE5RmG",
  "key23": "4bnjaHPFRnr8WhH3g7riRTQWLddvEaDNvHj69Y5T1aUxp23jVeYkKV3n2k7tkvxH2b1Tq7yE1wpfCqL55TN3rFoA",
  "key24": "4U3FXpufSRJUuLX6fnt7sYpq2iR1n4ih3ksHXTTU5PykUxFHkzhMxsP2FhydMWKFPggpEag5eieFCvgrNvnKBQHD",
  "key25": "5yHk5ThdTJuimCV6qdjaktGJ4SxfwhzEANa1aXf6SoQ6Usrv2K22TjjuZXR49XqwXV71kNh1XMcA1Pbh1ggNu6Bp",
  "key26": "53dLmuHyVYmGChuk1guKTWtzqvsQtTZJsPvsVkFkaBEBPNJHkT5skHL6ueCJACQZFrLaxS29Vf7NJyJ78ejioVBe",
  "key27": "4UNt4twUZ4MviTDQ2hTAWrzxTdoQCDGhbWH88LZBp63cxEUn1iEiNZJXXNbX62Xjn5k1h5mbEWN7ZteXnUrhS1Lp",
  "key28": "Aq5aYb87s4RebbQmRk7Tdf2XHdGHEiFqkSyzYVEC8crauva6CJcnkhrHugeYPn9kC8wsa5fsSQwLq43Y9UZ7xgi"
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
