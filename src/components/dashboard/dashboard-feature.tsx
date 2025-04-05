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
    "5HRnQhUf79WuqemMrKVinDPWq5GpEDhzPNj71tDihCqmohbbncL4mtYqpf4LTJ8B9gebtmRDLqj6ToXsJYParDCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D5qs6EYcz58784GmSwfHo2JQpqDBCVbbRdGEhHmnY9c3Yj53ACY7vptwoNhvXGRkPPumS5NN5HznBXTdTgdDFmC",
  "key1": "FgQxnjKSxpyT6NVDLHHfUKxhhD528SRPszoJG8F6MLvLqWSCzEfmVfiZeiHtybXKJzNTKJLdvC6ZqbDpZoi1XE2",
  "key2": "66c7U6Jhp1iTfvevE7G32ZZFn9VFgjTM22ejkEr9HKVXi1HbAFeYmYworTtdHbX5QDLy7PssE8U3J6bL5vN2BbcE",
  "key3": "4ndbwq7oXvSyVtXymfzczZCd2Rn3Pu8HM2y1B5xcQuEdZ2en6e5MW32i5hR6Uq1afFy92KgVQFKEXjT7qyKnqjME",
  "key4": "4KxXCouFHFPv6UmY39mDff1Wcvb15B55NQF1fyF7kLGaGcV5dPRiKcZ8pFgQUCfe7T7KAGiEGHneyidQCLQjL7AJ",
  "key5": "4AV38haWKrJYVSeEDTqsEn3V3EaTsHYtfcq8bcNTZY533XAKz9U3PSJCDj7JC5ifNGiH1qEL6RxkySsr32mvcseJ",
  "key6": "3aGN82d5JGZazDvy3EzJBik1JcQorLCW5Kk2pK5Zn6x8orM2mKy5nMCMvqYiUQeHhe6us2AMoLPBya93prtew14v",
  "key7": "4YpY52ULyqzFKWKh8LFHPzmgy6BLM1TVmxVSyG8bUXJZr8sYFgejcz4Y3fygxQJXWYqsE8xTpJZtiDTcNuJWRgw5",
  "key8": "2GJpVEviPGpy4UBLAokcZAqUe2hVNSQnS6b4KYg1h4ezTyU6ufEcD4z5gk7Dew8wLgEXRuh2uYm3ScVH7LZWuynF",
  "key9": "4kYDd3erUvTbB9PwoGUQBPKjrJ6Y8KzmDyNzrAeCygaEFG4rhgB9Ubt52Numa7cyFrLTwhzq1ejZdoE9gXRKHNRU",
  "key10": "4Evo4MEASugz7LModUmv7tcZEmbWfFaor3etKEmFwDsuvvs9ioyC1YrcfrPdesA5CyPzH2JZ1M23tajhafWudiMM",
  "key11": "5WJVjgTarF1kzpfdxobPnK4HrBnXexiVkxdMAyJLQG2vBXPfrUGRUSLF2sRCvX6j4VTR3naqSx3VxbR8fihgyGzU",
  "key12": "kmVUxEdS79gUJrxtcAFRg6qp8L5HDdkQ5W4iJp3UnLEHGBVHiafQ5FyGbj5LH4HBm5QLV4B4X99AQufEnfuAPGz",
  "key13": "4s9fp7V2QEVJ23MGSAoyLPkxxKyj1xmYouG29eR1YixnMj1M9RxHH4b7BvsGwnEkm6k4FC2XXA8Uypp3oLgHgj8r",
  "key14": "3BD3NM8nmL5WvqnxNVLmGLAJd1aMMcWeF6pi6he7UAvgcKwMAsWavcZmJqc9ShyitQusTKRT1prnMsRP8M8ozehM",
  "key15": "2EhxnLWdZoCY5jn6n8ZyV7c48sCx6xuXqt2z9sJQg9DGKYfpfS5BLzPdZ8bqcyDszNAGxJBS3ZxGXWW3LJ1rg67D",
  "key16": "5eksCTWGgmHQyLGWo4JzFUjA9DRYxbLvHwpED4YpzuwjRbnNLA6oHvGCurMshz3nWHGCJETA1EuzFAF81DFVEkYo",
  "key17": "ibYzUJzN3nBNCBH2ubLh6ZbG3dR2QWBqJavNqzRHPUUjxmMa1Aq4Vbor4cW8xChz5zqm23xfnKgmTWwUm5B5SH1",
  "key18": "3pRQtZdjiXfVkMkfvZ5UiAsaJrocWrX3CMfbshuXfTJgv6i9h9Pzwckdqrnn8VrDmMrS3s5xWovSdHryoC2MQCDa",
  "key19": "2PoKVwtaoooTP1GSoWQPbL2Kbw19W3pobRPaTbpPvr4M7bGqBX1XpgUJ6kjsjtCgA7Jdm4os7H5rKutAuJGQHqhd",
  "key20": "4kZM4yTfP5kWBbniL4LNB5tsgzmhWBQrByXNR3CBMM16GTVhG6o2S7rvDEneNwyLdrsZkMT5qw9A3BmBborYqt1P",
  "key21": "2j6RqK67am34dZxsJUo4QtCj9CyQHXFPfd8DW7YmpZ6cDcQnUtsrcwwdbmYJjYwdH1SsUiwizj62SJL3XZwy67Ag",
  "key22": "39eYrZpdzPCXnpoFnPu5Z2jFfjLoYxaqRyWptN6GKQBYm3PFopWzGcHzNfmjUJFhWWx9b84xK4MQJxyhvLAznpjT",
  "key23": "67QdvGsqHAgUYgFLuU7SH6pS2hVKrWw27HnAqqY1JJ2epoHmqwV2J1ecoerkHLBBgTURJnUaXWNR5CKRsyMMmufC",
  "key24": "5swfUgFWiXv7xnPfMu1eNbk3RMUC4Z2CxV1LYKMqz2kwt7AWC6qdzHpoXpbFXmL76j1MGJrCmTAB4b63xRpPiTv7",
  "key25": "3YuBaZ8HZaGAe2zDvkdaUaqFfzHmjJCcsGzu6sMecM6kidhv6bms5nEL4u3FZx3QJ6BWKc8vomTmCbFsXMMCUSRD",
  "key26": "TnQxw6DDyAK99GeiGYDwqsZjL5aV5jvon12s1nPeRKoqNKZiCjNi1SPNafxGpeSZWmXcqX3o9KyoNyYheb4HVos",
  "key27": "66fZP8wk6M2pbdrNazvLyaEn41QdPWarZA1inpuTLMypsuwBSnfpFJQH16L12SDW3NYNQn93FsnGtAYX2DiQWyrq",
  "key28": "5A7sdN8Sv7xayUzP2kWK2eEut1SxeEYRLPtBFxZvtYQGtxtQ8LCFfDGPKpVQiH6kHKijAmnsjEWC6FyhdJnTmrJp",
  "key29": "5QqGRYKzekZxXiADE2nztBTXGHRp666sMAzYsm55UweyKqDuA6zNJS85XZXtS63vEyaeYDZSHCYxDyDBQZWwVVSp",
  "key30": "28Usa4oiS4JdtiRP7dmjDxvNBkkWbFxkfdxaepy17WN3QRwtp8hKzLBKgxL25RbJfNS9upn7dsM528SiiMLhjp1P",
  "key31": "21JMsWkj2atYLkWWNba7fAqsgkBoycnhbA8KhRZp3UMeApoCVLg25sc83JTMYqftUw2r5tMZGGsQd54qpR3y1FN1",
  "key32": "2cLJvmPhhJmSabuCZCtuwMDRTBuc7MMYju6SxrRhJhA9PwpJLVUPXsqikAoyaQdtL2SojcHiuuoQ1oFG9S5cppj5",
  "key33": "5pv8UevDaHDo6GJ8entH8RmHCTV32nvm4SC1qqFLSFFqYoF8tVGVEu22EREzpBoN9XdXjqao1LAa6YSsEm8RqW66",
  "key34": "BYH5uaWc6MCZXwBSvrdpzFR46SHXe1Av6Ad95YpiPdgLD4ZmJuBACfY9xxd4STnKWJzvUV1Nj6HQ8XFUYmnc4SG",
  "key35": "3AmKYh8yShBv88ibxLJDpRQoMuDAMtMN6v2Nc63zij5YKz3fH7g7ZMPZFUz9PkgYPeU8j4S7HQK6gitmTMX3yngp",
  "key36": "2HBmbW4YrGV3Nprf46iQdbizaeAXJhMj9sAYEwyQEmcJnJeSmrT4xyEtwPS2SQLiACzijJExD3YSA3F83NjD3Fgs",
  "key37": "5J788AurHCbWQSxiC1xgQJFqe4UQoHkaBBLfhnkAYqoNkfVZBDhevLhnnSywjHLDCZAzwz9PYSi41wxxeH41J4wH",
  "key38": "3eWTzWdB9WWpqSRdUY9oLckBEXxeHjycwMGeWYKKEmLVUPMMcyG5CcgU1oc69e9jEYcSF1ZUMWnMbiCBZBWBhD8f",
  "key39": "2RP6B5hxFUvZrJLf6pnsgm2pMDjo1YPsDRceZBLxRhzR4fYZWop2ifgQLgGq5UkrFL23C8eV9wJLUvqjQezHQSwT",
  "key40": "4QJUtKvqtcfqZzHtn1L22MoBziuvXXiUXSW9qD8qcbXueqrJ7y635MCR4uPEcQ8c9bW2ptVEKwotuabTnupnQvRS",
  "key41": "4rKKK7rQZLvwCUYuggjqQycS9CofxqQ28KSfF79c7BsPxXB4ToaRMYVmdrnzFS4sdzD2hjkvLAApTUp8HxWya2Ck",
  "key42": "3QJEWMkLNXbo4dDN9g4qQBaDP1nRUKWXMpXop3sRnd9JtQw3RFwUtTEbnuGjpjmf52wQHxB3yJn4n5iRybQCM8x1"
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
