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
    "ZuvLsgjrVoFMXHD9F6zHoxZRwsb8QszmpiRhpUHNJQz5Ri7S4jWwK12SGFV5xedkae7zC4RFbW9pEhcDm9uTZd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43a97bUh8haBpcwe1Ew9JdXhdT6ghEpRVjjQ5FjDsK7DdpySemVDqEJVagTFvWjVZ9YpePvGtie5voohLiagF5cT",
  "key1": "2Kud4UuTsRBZmRMhgakcELzRnKViMB3ur5ughet4AcV3JVp5PA4PWsd3rXihvCJwr6TAteutdANyqrxsW9HZaPbQ",
  "key2": "AWL931GyqAHzwc87mmcjtfr1ndWM13UdRgJuoDKtZBvVuZZEqZe2UsP4VuLamhzHHChQkUfmgEeBCjSWzU9DBjU",
  "key3": "2F6uHxK1aJjP7GD1r9ybSQibgh7Y5uxQiGPjNn77oQ654b3c5GjgjBTsn5BThuwYqBHaTMqgVfVEVapQR835FcLq",
  "key4": "4BaYPZGkvmcAqyKr5Q1BxzhueTo8ybkFZoNqPDS2LXyvMq2NU7MEEYWDYRTVqsBfr3EF2srPufoSZb7E5i1L1PjD",
  "key5": "jrB2gRmueq9y5hPRXCbTnaZzxerBDDyBXbqpF8D74P7e5ikBR8Nqcz95rV8fHK5EV9p6UeV7u3Lzp9b6uF2qAFJ",
  "key6": "4EQ28gNjcnTAu2WHwz62Y5rvBqf3fa9viJ3JBAkSYyLN13dkP5smp2W8oZB9JWSka1qFhPTFVYGMdMSkXdzJ9NXH",
  "key7": "5oikXaJsYRTL8kMXmB3b4xPkP3mNNBku1UUEyycbFWHq6RDoxPw1cvr51VC5Yb5c3L63PYGmkVdiUTHAG2KfAm5m",
  "key8": "44xXdUzayWVyCDatMWqj2qsJcEHLfLrQZwSksLhmnvqKVwehGnPXmbqBqcRPYY5LTfN7sdgPHowQoyDtSQFYmrHP",
  "key9": "8ebFzSfW7FUvEGZLG1fo6DqDpzaiwC2b3VgbaNsB1F1Ks96maQ1C3DZPfkaB3btKykxSo2MVoj8ZT8NohGWXzwo",
  "key10": "6MzWbToiWCQs3yUDzBga82bGq5Meamrzyb1aYnQr57kwJKvTPKd4oX7NoH6Ya9kKEtwCgaJkpkDrMUa4QmBYNfC",
  "key11": "5twYE47BHFb4HUuvAWGJ3HVhLgocL5UuGdbXnE2N5zwCKGjrxBKMEZfz9uYVU17SaXU11FDPYL4D8XCqCWvoMWPv",
  "key12": "24AjGr2tcxQCSELo2Xef1KjBWHwwgppqsiFjeCkc5cT5yddkjQgcZ3UiRHMW5nyWXnNFaRowcXqC664PSWq7An3T",
  "key13": "24CUoaxoPohHpmGxMc6MZgJUDqKb5ttMiTBfr3EMtoKgfFdj1JhHYvrroXxgoXCG3tfY1unf6nuKSzY3skHRCJim",
  "key14": "5CA1EzBiFj5nvGakRAQ9hgB7aaNR8f7rLsoqf2vSBATXaYSsRwMfpdQgUKUG7aZ9TFJzmETQuCdsWDx7odjkvbbi",
  "key15": "5apLxMEcX4uh2UWfW3uxYTNzhzCQ2suevch4PSqtSFR6cdozSkHLd72vTs3QNBUsnR3q2yZ1GhW83p4QMhLFRL1z",
  "key16": "2jwcu7cnPKs7EBZjLLQbfqJT3X5qRT3TmcN7B3eoLKikz7Hcrjzvz6ssRpXpPtbQ7KriNtQwfQWQvhh12CKWK39Y",
  "key17": "35m1ijBm8DU6AUQSSfwarrAWvw7QweRBRJYPJhPpE9Ujq1rmq4UXW9zGEkKiU8jUzapncUFcUf84WFvXAZfCWvjA",
  "key18": "5NkzP7njjtXHo4deG8N1kJVDFS96RAkTQ3qUx6eikKK8A58GWk1BrNqZtFTj8Kag9hbTTUJdHMphQuhByueXzc8f",
  "key19": "5hR6yb35tpQv4pZEM83MwzWeajm54J9Ch8zvDxqBAEL53aDjyBdcwn2cLPHje4vKuHVLY9VuT6ryRufkJFCtTHAk",
  "key20": "3UpBBkfzuK6ayC1ikkT6Jpu4nSNpMYTfqaRugW69C4HTF8obipBstX63rFEjfD167wpxGv2x3HmFLeLtDMnMvrtT",
  "key21": "3ZwVqFGgDKeTLyTMGCxyH71aMzCKUYNVvN35e8fNNkuZbCQFzg6Gqj32N35h4tYytMKqwbDmegdaNVom1WLx6iuM",
  "key22": "VSP9EGuB1gXxKef9KByvkqRjiyrhienM6Kqd5aWjSMX4L5uxhWkzEirNn9yJv36dzoN7GSBPHtr4SBbF2wdedsW",
  "key23": "2yfVEGfQTPtrnV1drBy3L9B2GNfKdtPAamiQURLL43BYnJJitSznQZU1ZfmN5cU9GJMAJGsytG2XXruS6JfDv499",
  "key24": "5cQocC1ZLvmPBsqaZ83JK7Gm2PY49T2dshDHTx9pAYJMNMeWBFpsgRg24VdsFbNCgvpNXgyL5iim5zsDA4mfERZB",
  "key25": "4wdgdTV31YwRTNH9v9LHbnwNY8R67ivFAEoMW7udgwQRiYYd7xqKURqoXJo8ZxGuPuehu3wUNywvbWWEuUYAsmyL",
  "key26": "3fENtrLKhokjUaB1djnECJdBoo6xgeaGfTzRcLkrcaj6hgBNV7Y7o2pgcLvvNgwpS2UpUfM2ZSyfQ9iTVYRsqGPz",
  "key27": "2hXYUJw8K33KeNzzXysQMjennCPHVzEoHzMP8GFUxASH1kmcwjujtuFqvH6LPS6RwBFnNDfyovSjKD7Rb51b27Di",
  "key28": "3Dat63yV9dDGi4xek4enz5FHFX5iFeSP1i5Ffgt94Y7bfJs5F4hHiCiZaMdfBL7nA2WgQRFVJEF5kbRTniFa7bJL",
  "key29": "5WsEsMKESHshrQc9HxhwEFfT44rRVrjVpZdB1uQfkiAEBPJaW6oSveuGyYrUGH1nuPa1kW8dYbiNomLLt7bBDNQP",
  "key30": "3RGQEeLXeLHNv2JuS2k1o8175VfvMag8Lf33JF5GxQipWKDkYopSaWj58sWHU8KvL6H1PgEk4XCHzYVZR6Pff6mb",
  "key31": "4CFQ4unZnc9VnpzPeDXLt7WJv6kinDf3aKr2b4NiMTa77RbuY8NiXo6VyvTRtSS7M9wEhfVM5LEgAvKjX4MHJHvZ",
  "key32": "2BRKAoeuSyzACtnr6Xs9Tip5y7tYhhsE66pUZzgHdp9F4Pr26j8pnKtFj5Q2VdqHFuBL9Frs86LaysuZGpMpAH69",
  "key33": "wUt2YyMp2H3JXsasMVrqjnbGBdcSJPPThsKcnqU5qdpPspqMR4EmgMBcy8yDVPopp9qSQM4QJEuK7eK8c132XGk",
  "key34": "2GZ7LGPZgMsSfNTqqXnmAXBwLAut3F9rdR9cVZh3Q3V41ggdHUyA3BU24pS8cLiHRKrQfRNJFq9JwoM6BPUjX9Qf",
  "key35": "4jkc3wA3HxUGCZSrU2rULi1NagiPyBELQEcAnsZP44WTdebgjoGaUcaqnkD8JNAfe1F3z9txMBuvdhe5kdaeNW1Q",
  "key36": "2Uf4tiNHrH7SXcbqRs18dePQR6dK51QQUMrsqQv2gUDNAocBuzQzcJk6LTfapsiX3JVdxpZNN6wmrmL5sa65L2rP",
  "key37": "5mJ8CriAFsMDADv9krYvcFweJFNuSQjmSyE2wa5nDrrFBZSkPrEBQ3vvSVW8wY61isHetWcABHdiBwdQhZsHqNud",
  "key38": "3ABLr1VQmkoXZGZWuzYk6Ux73QFfWsTmPid3AkqFgZQyEZ7xt79Szz6xpKN8Z4qcXXg7jk8bSvxFJVhe3NxR5YCk",
  "key39": "zvt69n6tpp573LAY5pAHdtWMz2h9rtHDXq7hu31aaExba6h6skS5vUZwF1txtZGiXEXuMeaeyB6PtjWoyZmQYJu",
  "key40": "3DoqtNaMhkgzjKypDcXU59wTuQbNTN7jzCeJwivQy6rEKZETHLE1hk7uRHcfmZUJGUqp6URL4nvaYMrTF833vryA"
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
