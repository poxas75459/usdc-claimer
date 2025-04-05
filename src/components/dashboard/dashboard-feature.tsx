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
    "4AGE3AyMMz9DSniqKoPWPx9D4E31UpJcagKa12hT5RKZaHbMuowQ6yttnoH3SikrwsY9fK3cVWQeGYMvr9GoyZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ohRoLqceYc6UwwY7S1VE95qZPYegREpET8kniWUgB7MvtiLWQANjMDUuFa8tkys9J6bSCMJ5sgwn82ya2tyXqP4",
  "key1": "3c44NLkFWTDaPXBuXWPni4aNy7Xmx1iLaiVuNBZmmbsFoxJn2K8ZhRpRUQZfBujLE94S2jp2gfpB1t6qZK2eQcAC",
  "key2": "4qcD12Ta1wnUWPa5xGy2cEAHzYM5NrVpcGaSs2ye6PgbdqPizBwhDDo8wGEDmjf4cmJAHcKBAapMymuxuij5BddN",
  "key3": "4R2a1e2aiuUjYnM5vZpZ9QAgsRSB9DXjMAiyXN1A5Z5QEzmxXXvZT8AQsPsv5RLC8a5LwLPTPAxuEgEDvb1k4KGG",
  "key4": "43A3b95L8M1fNhXUHHpcQM5um7ZyUxvuw9qmnCq6UJEXZeg6pJWkPdVd8zQDCWySYPNFrGtHJ2VqkURwJbrYku8U",
  "key5": "4bqPqEKed1AXk81ejoU8wx3J7YuhmwHLDfbibfoggAgmgw6DhNmA1ZEaLcRh4yCS47PgygGXhoSzBnwHUrAGod7C",
  "key6": "5tHKs53C4FpmZhQsQoZP6EyLimrti52mEcnpYpfTyqdNdLfhChQb4vS4XgyHHBMMY69XEPBhVgLYxVqrvLx35VJP",
  "key7": "5B8Ni3PVJXzFG7RsAVuMyjg7cEshfHhnyzDzikVEeqsRmnnwUtM8a6X5dceszQEW58AwdV4NZoPaZpWTygRkV5vd",
  "key8": "2o1enQhV7EdBx22kRttpGNkB16KAm7v4zPcwCRa7UyBdyL26UuFGnAJrYJEaACRyfBuznYQ9Nf3sFkyD1mePhuLH",
  "key9": "4qCabeUiaqfULwmR2mwf1E6n72g6QR3KgjW4LT9N8KoeqpRo3dKihNKZF8aCVWSpRX2DqPm3WyKA8pa3DFQzAT29",
  "key10": "dZZC58dscBmXMgrvwCpQvkDyu65hYHNhrtpt4BLU8NkdWKLHBaCvi2iQcywbxWJejUqMS1oDXwo7K3e5jAjx7WZ",
  "key11": "5oxR5n1zjJ7PMNH5UqHBB2X2HJdrG6Zhyp7FBVm4dAe4LSy3MDAyh3hJRYWi7tjiez56pHJoQfka2176244yqXJs",
  "key12": "3x9t4xC8TEBRoSc9KZBXBBqRVfqm2stJb3PkocTyY8vYyDGnDpFYmpdnuErD37AR19GGko36fAikMTBYtXfL9eZ4",
  "key13": "2YHE5h3V2ob8fqqpN5AUnxwiMq2FWWW2ZpoVEr9TmEE4NRUm51Yd6rt47TRupha32YqL2fEB2QUYWHgmnuzg3Hjp",
  "key14": "4r8zM1Y6r12hhrW8mtPW6BcRkfcK4vpBc5iTHBpFneyrfsQKtFdNvyzDDgxCA1A9bmgTfo5wKZfzrHEGM2K7Lfvg",
  "key15": "LjQnkTdoNjhsiBpjY8T3saqKu3HBGP8x9DMFhZV6jkUfkifKFhEdd2AD6brxVHzEQ2aDp2rUVjn3ADhxkGpMytX",
  "key16": "WAUZ2AEMto8vrD1B8MKZ8oNn9cGWXpm4aSn3h5NLZ2pJ4guHiYVqXBJXTdz7B8SL1JDeuXiGezzW7TLqJizZD3B",
  "key17": "3W8hiuKkptqHgBjzbVBPXLZScyTS2nDvJc3NSjfsRuKTgaXpGQ5RRYHz2fcoLDoVaek9eZAjRMYMKctqiZZzbRzi",
  "key18": "4rVdtkFpRMzJH441sADqEHPcjetYQPuRWnZ77a1D66mvCiBjpo9pNi6URbydbGyM4tkG3Gx5yPKSuEVmSR7Jr2hs",
  "key19": "4h2NtyHnJjQUHCzg9LKSGc79dN994tWqtU46gZ5eBZhkTR3EhqVYc9maYcLDLvz6qk4ZutrdTn2zKmTsb2FMBc3n",
  "key20": "tCHjqxi8wXGMc7Gv6EqxxSHoKDVTB597t2fo7rykybd7YrbMfDWucaQPHiLinQPuLu2vrm5CT7foiLztHpMUyxF",
  "key21": "5oWziPNxzUhKTMd9VQTH7dFrbcBH37tAqqsoM2gcuQXTBbZK5ZSf33hcYLDWZB6THFrTxkN26N6KyMiVkVRpPhEm",
  "key22": "2Bd5nj6KfzN2re8VHQvijt1D5nJ3kjeMZgMdMWBLgWe9Do4myqyDaCA5jPq2Gb8usdova5F5KVWzTeSndtab3Woy",
  "key23": "5GKZNdq3Uty6eYNiXAKRfjHRUzvqRnV9VceS4gaDKcXYmqh2QAatZ5KvGebWEqXgofLubNHYmDAUYdbZrhX9DAyT",
  "key24": "MQow2xNQ6jHuJGYNJhsCHbZdBTABqxxQzvsRidFs6TzeJkaH9UQZ3c1v85w8pzZ24gd61pxLDN6D3eGLBtQw8xa",
  "key25": "2Ru8jF1va21ZdpH2dcCWJHEfp1nUbwGfnpUzPudWDxg5P8q8o85Z2u6QS7TFG9t4D9MLC9xiK7jepe5wBeWagspm",
  "key26": "5xz6Uv9Vk2VAyMn9TAycFscesLEuivC8ku5j4voAosiuYmfyfbkFEcbVaMMrnpLTgYabxvdZzWesdWPAHnYzmPDV",
  "key27": "5qatjx7ymwepVE6C7tUqgNNe5J5mWSwCW1XdEcy8prgE6UkhsffacroGesDQQ6Ejqcgvt7VTyc4kqvRrb1A3XjYz"
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
