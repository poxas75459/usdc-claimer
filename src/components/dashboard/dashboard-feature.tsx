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
    "5gMpy5aU8rRgZEw6j5x84w3YHCq9T1VZ1EXEg2K1n5cAiLWnzJ4ydg17JBGaCrgrAbtGwHvpAKX6LeGRuLke95gu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iQpXMVjB68pkQQzu474kSdfhHFdJSjgBXHP7QK23C5XeYg4pD698VSij8Qe7k45GqKe3FcSXPWhzYD7MSVeJe16",
  "key1": "3QR1t3rPFtjzVYcABXcMZjZ4RHRvKFu9grF9ELDBxe6adJS8wG7UurfdDy1QAKZqEff8T3SmoK8qMQ7tSDTfCCyV",
  "key2": "3DcNk4iuRbd773LaqxjUmECmawpgjwzkCX2UNrR1VBkW3MXoT587TSo8AzncMFfEQBisgC5pKEw2dMSsRDxuTpLm",
  "key3": "5qjMcnhv11wVx8Eak9KagWqEibd3BbMSU3aKCuuBLxttxmTPdqEZ7BnetPHVaV8KPYS8MSpWraBjcAi1fHcW7QmV",
  "key4": "3EEw3GMVJgodnGmTEeEhi2dJEoMwV2ASm39AQjcxB6xddoPLtNkSa4NjmsGHZujJodAhYfTST3Cejh1iS6U3HzEv",
  "key5": "5Dbg5xi3P2WMPFePkQ9Nwvnz3goHmVYvPq72stHoLxMJFjPCLxhzNutbB8UqCiqpNszGnPEPkZtmUJSpQ435UGCb",
  "key6": "63GzWeJ9s9aiuVEPeE4oGhvazznDP8kN5jsXJgEaDk56Xf6v6dS3zzohHaDmKTRBPJ8VunY67ucBuDHA9hduoXr8",
  "key7": "5Zaeg8nNq1MgVEUk5UC2ZUfUaW1P5mt6Wx1739t3LF4mG64oJANUi3dStYRJN3TebGMg6JXY7LQUjtJmmZ7ZVN4b",
  "key8": "2mmMvY7pJiSwuhEJH99Fpoi7qxEGXA3X7yq83fqdVjVieTuZLAcGN2FL81ToSK11SvfFnLDu4iw69wxLyuCa8nGk",
  "key9": "26cNwYvjYPdevWewNHrC2MSttS6yBgVkZXDTanvDH5p8WXkFTjmKzBxyv57HDTbZLAKJhCXQSKCNT5tGKW9rRXfU",
  "key10": "3jkRsyfCcBrCjLe68wePwJUuquQzaRyBM7fBPUuk2bBeAHXRrXXvQRB6ZRNqzkCUXoNj4mhQVfg5jkAk7YGYnFyi",
  "key11": "5eyRWmBKwaweksrjsoQmjvz9qsfhD4dwJkcBLX4Qo8vtnmujEiwAWo7LZA8sEWq6HfaWxJk5HFbqeVC5VrRqoJDv",
  "key12": "2YVCLSi2N2R73roA6XxDWr4CbnaVuXXAvdFt9Ah4d5XYiGdwpKtiQJ3ZxBLMSSWmUP4eSptrrhX7e8hXA5RJejk2",
  "key13": "A6fiMPv6LZvWjSx9EWpMqZcgzRAvfK52MeTBzKognLweHKQGgaxag6B9ZDyNkyT46EEMDzvXdPURuA3HE7UHDab",
  "key14": "5A9sP2MjhvNXemvZeXykWUepxG7Acnn1NAXDAykNVUzMUpMoTN2n2m8rkdKfDqtFMT8jr93m9zf4QLRf19WGGJ6A",
  "key15": "VZR7nUMm4JoyE4WrS6bSaFKcbEzAzr4gPbLff1bVWJpxCCqfmbnFJaLB2e1nguuRQ2pKHknLubqGuHmPHYMRQpR",
  "key16": "4Q2NPssMrc6kJ15KVeQjjLg9iTupjtmcLsjDiL8D57fU9hsCyV2jEHGhcHuUsBRSfosAF8RogEHqY9XZoyptJnfG",
  "key17": "2NhD6t1opJh5HsB3NXWAmznV7okfZksW5KAQqNuyp9VcJzc4LFgbAkFQZ7WNbLx2vB6uVpniv1Dps7mPzjgGc3aQ",
  "key18": "31VKLNzKSxiFbCV9mxsqir97JuogjbcyrKcYSgZtPfLpTe557QjEqGaF81zqbVqjwwN3KYy1qRm5i7dubiPs1RuU",
  "key19": "5Xegh1DNQBmDkPZThcHzaYXkqMh3Svr4DgvQ7KCx7vkbTUjX7BAyC7JfcxeEx83zTPFcd4qYDRFAUZU9bWxkPqUe",
  "key20": "kmathmfMEjakJsVct5fSUPNQcXFRLXcRoBA4vdNwkyN8JBh9Fq3kGtHq2JayUyF6FiiqVRagLLQBfaeME33NUCU",
  "key21": "4tPNySjKwb82pwzhQ8QqyPJwRzgCuSX5BqWHqv7qzNwt7fD57FnW7jaHMcpf2uNx3up5gAUt57oCCRUxjQp7bX77",
  "key22": "5Y6YtUU5gePVYaP73nu9zoDv3nZ1XX8uGaEKDCMFwWWA5qrwhLesy13z1DitqjtXuNCixKqXiwMjegrHwXc2QCNt",
  "key23": "38xDXd6JJkdrmt3g8koyge2hX9bekyCT5HgrvghuCfW3fapKkmLfJDpyjLRJCs9sxyg4GL2r7EBY6WwxuLMoES6F",
  "key24": "f44Mj16WUy5xkmQqhrBnAmtdnac2LogmYoyVMsNfqGexunnTHnWcTsz5skJkcExvLAByfahJTpS3dLjgsDxRCJp",
  "key25": "65sVrZ3FTMA5kbD3w7EJqQxqDPKFzYtEcNPJSogXDcpce3Nsw9hteqbJLg4tf7zXtBNtD5rqvyFKT9a8sN7goLSa",
  "key26": "5qQb4WHN75fHX81teWeHARuDDeZsVfp5z3uk5j7eyFMijpR2KXnbqhgLkPBm7Vk4TUmmx4R1AhvrEQF66zkGjBQv",
  "key27": "5zmQLdzvZyQt7uWGtSKMbLwgThdroryQ1wCa7vhQLqG5twMmmeqSSxxXGZCM8TvcY2KfqozS1fJf6F6cG5EmLVti",
  "key28": "3RGREXqGonX5kyEikvh5rJX8gFdyPQuqUcGCAwdf7Y3h1tHwz3qG5JePhn19KSFQjR51bWMGjTJVu89kyUp8KQjK",
  "key29": "25bHBshRdMqX1mJMQGz2AriokhxDcERDLxra7ovtnHbe4ax252sbtqMvG5TbthYZeKDvpGMdMiXdpDouzrFgz4XV",
  "key30": "48hJvwgbb7Uo8fpdHMx352pY98U4DpwbuE4FoaHCW52xRwnRWfhuHytCY6ku7rGDRbWutWBAbLDpSMkVPbGTkzx6",
  "key31": "5hWcSxAaLbvajqGWHV1PCGe2r2d2rQeKNdk6uBfeUsMTZMFkeSGGaoq1pCcBECe3yVrhR9Pxrjg22dN1iRvsTVtj",
  "key32": "66AnNrBpbgXTu3iubEZYphyZjZU7Dmb68p7FSe7T2LyjrH3XLEJxuyxGhtsvSRDLcuYoMegBGr5r7yKuDWYZDJ7o",
  "key33": "2jATZnfYgEZNJJ28Mqa75464RCH11wFjmwqNgkwz5MC5bpfCdBQFG33LTUaij5iTg3VPW4rMa4ziFj8D3RaZwpmK",
  "key34": "4TzcP8ZNZUmvxCAMni8brNs4TWa5fCwQLaPk1VFuwY7mnPKAWCeypA4aMj4QknBfxrKf8FK9WUHwZD5eMWDNywWg",
  "key35": "29NeJ8KECx8YqSXkhmfJjiYHBNh8fBjPRNRWugoAphhDLPsVSRPjqqkUvidau776jPb7k3jinSNqudniF3Tckg4r",
  "key36": "4bHPSH49AKwiDkoEmmNpHLfovwgqUa86xsf12agG9dyGow7P3RtoRKe87ZpNnJiWc4GnKtDxxqHxnyimPaWdjGhm",
  "key37": "3urSjFdEZh4mReqnBH4Mcim5GzS9zSgVWcSsofQG6PbW8xkKfJmC9FVKbPZE4RZecQ8Sdcsk2i83QsL6ipZFuvT",
  "key38": "3iCHaRsifzfcEmZyDJkDEezNNQAahGfF3SJmgJPJNQmNRjeqTgfYPfnp7rnDZst3sDaKioVqaZJ4R3WvijGRuKma"
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
