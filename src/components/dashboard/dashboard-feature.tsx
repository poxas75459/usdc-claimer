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
    "5H4FDzmRGfaKw98f1tuDKhRgb6mrzBWRgLDropHWdgQZSfXi6jqACfTjgMWu9y7ejAAfwkw2Yoh1TNP83cf11APL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wuCmZPFPiDhYUMH9fThqDfS7x4EzEtGBNXCyTYd8Q6Douahu6bHXRtD73Rw9boViDb3sFXXHg1hDecv4M87KmwC",
  "key1": "3WthrqzDycNsq9fb8ohDUUw1e6pYG3kNdfhuoFyhZqfH5fR22zpdhmcVtgt12pR13jHfFegk9s65tLycL8X7N9KY",
  "key2": "2rT16Xe22gfLST8dyPexAwYwbdgxF3rjEJirHLEPRped4HHdYKKzkGqixEvp44eXHqd6wAuodcGmPDHukAraw3MM",
  "key3": "63V4PZ7nGiRP41MUdNcdvuR7jzoTTc2dTjx9yZUXRBjmRqRVNwnTqGr8C2VA1XqHy35FxGv76pChL9MEpSdgbEZD",
  "key4": "3TLPjfsYfqzn4Wzj2ZQCM4fsTYdekxnxH4a9tmZv4oFBheosMjfxMgnXDU28HGiTBjisMKXYpwFGGhHKGUkpqH3e",
  "key5": "64em9VmnRHXEnw3uBg5a2Fb56VxEuDnHT8S5KLXdMwfvoiSuUNhEpkKgZ8JKBjnyUVPpmX7ZWGaLww4zqyiRvJHo",
  "key6": "3bhbdputkK631KP1WHV9FfPpvSq4JZKXe8VMDqaTYQQRiPNJRKaxfpbe3yzQj6pSeFo8wVedimvVBfbaodWn9ps4",
  "key7": "4UCrX1yt61KJQsQX6MzYT44gLMYtXCGEDfM1iPWvnkisp1oWYismhuYEzxdo143zV9Q8H6o1FkrBsD7dVMxAMXMf",
  "key8": "5XuCFWAzc6NBUDdiPviYwqLmruX7TZc4GhXSqM5YzSZDo8thGeYAvnD978tqduAWaAy6RymBYDzZLx6CKqDssCg2",
  "key9": "54RVuNs2cHNXkGepK6GRgKj7QNfyXpJBcwFJR1ryMK891rf9WnCjXAvvzSLtrp2S7SSnLtsvSDn47b41PSGJciSc",
  "key10": "46A5vPczuW1Z1jyJG6SqcWMa3ba5LRPEBMf9VfmUdpndJjAwohwV2vAEEjU2wTnqhuXmwmhc9Cgtd6ejfgUKpndk",
  "key11": "QUEzp9oxW6QqMHM5Dk1UaKchLd5iL5X4hqhT7cD1KtLF1YisYmA3GQjxRqDZ3C5DNbrJsKSJ36D1xzJQSBMDV8R",
  "key12": "3wZ5wYPdHE6CVLznZBVtxDDMvcM71W1CFtphUMangZp8aqzVuVDuEVmwtwGUB3aYdn7AgAj2Hbo2jWszFXBff1xe",
  "key13": "511nm5Gop55it8LEjjoNdEws9ydFHhRsFzaNuQhRSJXAj8LMGSYpwc6bYy83FHhSYzYL5oW5BUtijdzhmxYvaZ1G",
  "key14": "32jXZvsHBJBjm6q6bmPQZt5FB8eytwHP1GRy4FZPeAJvMvS2QBdDiPa8e17x62DFeEtxVo6N5VBn51dfLuF4B7t8",
  "key15": "5FA5jsgFFHGFkyEFrHD8Ku6y52qS7g64wwtfii6vPHDkodKnQsV1ibzgqMXtavWkt2fpKMdELRRuf6fxdsaXRSAG",
  "key16": "RTpUn6SJ8KhJAtrVm1xLTuhnfUnzepxNxhmTdQRuzZHkPo2rBn3u9b7ooHkxrQmYAu5Hmoj5cTxDaq9xHxtcr3t",
  "key17": "3ccpHwzshTaNuTeusGXMY8ZjbV9CP2eUQNg7sSz8t3QEmdEaw7Q4egdF8KJfZ8HEHupcri4o6cdhPx9bxjgFWDTY",
  "key18": "59xhpkmMjSMRVmKCfwMFdJtiAFENZ5ksMhYMurG2DDGvSx78UC7Uv88ffcHatHZUsPkDHQdeXqzrKE1aRJ2W2RAc",
  "key19": "4Bt4vBHR4pXhtfDaw21iCn8XipNnWcMw2U6BfzXL3ifh8tFtgKWTbpb4omaz3L71bodFuxDccMoJP7evRMnKgdue",
  "key20": "4RmQthM8sp3J4rMe1JuoZB772jc8Vw4kk6KWsDEkwLX4Dq9cYFp6FtbE1VPHDH1GzMzbPmqF1JUPErDgUFWScRVi",
  "key21": "3nU8CAZZwP7f5MsVmHGnY6R59Jz3U1jioBwf1538k7YhdNCqDacU5NS7kvzmdNtL3ZfiuNwxpmrLfVrSA3tXWVNy",
  "key22": "5zMabHhiHtJytsUea1GfP9Sdo9G8t2oWgEfkcocF6yNR1cmM1s7sm5HEpncjkzkHkvyjRDEcTnpLKv7SJhxjJNK5",
  "key23": "2rhy8kmqtYTg1Mou3foPaSfHa6XuiVqqkuDN4G1zyLd2m41bRCoHsYLAZeW9cu9u55yrGsysCWdBYjHQrUXC3dL7",
  "key24": "5cAyzimpcW52CG3wZFzivUHX3MWnHE2ExnJVX8ZPFhfZS4gJrNXV4P3vNrQNGfEYyLFiPk35BYWrN4S7xycDYaGv",
  "key25": "5MYG2fCBJEqAWCJnZZTbM9osC1wPcxAQeABB3fyQQ8YYBbb33ap8GHSuimNZUnZXXxpfSuK9WDGL38vCrmuwVDAA",
  "key26": "4zoro8K6tVNFPMdReyZTh4mn5P73GjiuhX2tFxwuiGPJFpnKukXXvxXVjyA32wXhNhKC7YsUmyUPymmetVPBBtr6",
  "key27": "55u5JoMWM7kN6vETAgg9fCK8bsiGr1djE1ERGsy1UmHTve91RQkwXbzU1gsND5PPgRUTogFqQmgKHq9V6e7rW1Mp",
  "key28": "569ZjVhgniPANq913qG4T8SJKpvx3BCL4QZqzJePemqR5keLJXY13vi4nvaYrTKAsRwV2RPqc4J8MyNiW79mCt6C",
  "key29": "2e6QTdxpyLUE6748qsYPAEpVcHSnpaVuoMtwf43NCuy5taJEoENhqwE8bGabAUuc6DyvoBUm9zBvG6p8YCz7jsKi"
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
