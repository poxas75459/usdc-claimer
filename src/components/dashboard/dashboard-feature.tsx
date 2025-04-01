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
    "43pQLyJUi3MsSdXeBDAsWJx52Gv56WSxPfppXBZ5EXzoAcoNeDU7wdJetrXyPiPR4r2zHGZy5stGzBeVQ3j34M51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y6o1WzMepZPLn9bUBeioppiicFfwVYHVgfyfNEwRW7SkuWi9rSJwPXxtuZUpoTtk8UeYxvgy8w7Fr5zAFvCxiRM",
  "key1": "61ohDLacj7sjNmnkwMhTiP3XJncrGmXyzmDFn9RtGWuqL7fzg4KU9rnenHvvUkJt6jS9MCCFssyELv35b25FT7BF",
  "key2": "23M56YnF2bL9Ygv8roPRtbBQC7oEQiim2wDGxfJjBrYQmCKht21V36GbZsy5D9Rp4S9DebxMLuCLZZDCkLEHG1AF",
  "key3": "57sxfqBFxyJ1XfpoPbwdXNzXoa5AMwJwtso7b9HQWZeh61zMaUJW7CwTPJTACSFVX9oygfp1KucqNATybrVYCgbQ",
  "key4": "4AwTqhix9iLkAFXFu9govm2M9xJUz3QgX5aSiKC91pfPC8UXV6ZLuJUMLCXaGsRDYwWrNQKYNwWv8p4zompHuBRP",
  "key5": "5DRzUYXMpbMnWY1qQffrPfPY38SGgpHKr2fwp7wr4qzKKwjkVVBkio9MphDKcasoZWdHZbcrCDCdg3ewyV7DQg2g",
  "key6": "2NS2df7oHxrQB1ftU3J9Ahdyre1cyDTPYzVdrw2iYvxfa3i1wV8tL8q2BHrQ2ed8a7WHnK5daCXB5xSwspqgSzJT",
  "key7": "gLcR7bmHHh2hN9uA9ps69wz6yGZG4XijVW2eVbyj7RDGef11Pf7gYWK3Wymt5z6ucqUapwwH2rF5g5zjqjHseN3",
  "key8": "3d9i6hWcitge7SteScCRux1HwjEupfma3V1igQbpSCURFNdRmN7HXBaQMtwYvw4cYRkceFvqDoqrmzrFzFVTBQd9",
  "key9": "3F3XwwguVUpHiN6KzAdWp1HSgU4bQQpzwzQbJaeAtVgT6aGUXN2otkCFb53D6QWpUGEFEkLoJToDzRg9u6345wNj",
  "key10": "3PjJkbF1kMcfdXeRpMmVFZJd58b9QZhZPHUicBdTh55LVLJvawpPAVXyN2qVKh2qeq6bbURpKhcnUbSB8pzdoHaZ",
  "key11": "Ah9K8JzNU8HfF38U5k8GhvEzPo3kKvWwna6nbyFboGGxC9RMDX9aifhjp9aK8XumP1oESuUQxeT7Vdt8Tagp6j2",
  "key12": "3stAQFJAPefB1cg7RNRAPAgunK3E3h74KtnvhxMCyy9N96673jfTwnkM6eDCmKihDrAtPmNn7yDqvrKSFXWu3JZ",
  "key13": "2tVUR4BTs97n8GGGdK1FUnxpdxyWXGDssjWDy2iavLoswhYsKUPL59dF5rDxZNLDkKVnKxksaRfNzDoFzEUT4ZDn",
  "key14": "Y5bxX5d3jYDr2P1aB9TthKfLZfcjeuds4J97t7TmPs9iWSP6QCyGgZZsgnx7LCpGowYBCc96toQxVYfoFGdocps",
  "key15": "22h9Drgdh3FUzDzKxFxsQ4reBtJQGjmXGdYtLLGMnR8h9HJdWoxygCJPGWyDjk7hGotxk3s4FipTPxscPPAKCGjK",
  "key16": "5mMbXp7WBhHAHH1QeBZ32Nj7BALQmv8cR7YoJZLbp5fBdgjkeSaWoPAzXjXF4oTagGXrhXux7uCHqCNzcJviGPmr",
  "key17": "4g1NxN4w9DgUn6macrPaNhw3q4Qxkp3FYMGL9MgYugAYyEgf44SZTBsp1RWCCBZumDpLb7tqc68NoXaX3B1xKNkM",
  "key18": "2rCBRZ8p44jxQCNjUJgeV4i8bRV4wnBrYWFcXpa8UCm7zNhs5cQXKhnv1tbbnPajGkWCfWma4CYkJJHMRZjdABuw",
  "key19": "5NsPZjiGv96Csi7z5AHCDdbA9QuGthWQxnbno6RZz9Hhsetv1gaJMbgeLTr7NMf1BK4gBuktWeXvrNYLU3nMNo5D",
  "key20": "5Y6H1gNrejsA2uMbyefsW7MGPD9vCoBu1jQYg64jbxq2WmFxjk3A3dkjyBj8Zkmoyut9Fow68coE7FvCV3SAstTm",
  "key21": "3v4QM7d4ikMsTA6ibM18XsxpJ7FRxgkBrpDFotHF3y5SmnAtRNqwbgg3qfgapMnXXCYLPpAW2CQ81vbLSFcmes1X",
  "key22": "3p2EwfjsSrm1zhEzew7qZqiYYpDsGJAUUHjYbUvCGjRmyVKawVYm2ehPBPYtHnPtotoPMWZZbniR6uQuvnnXkx7w",
  "key23": "3VExGmpyrDxg46F5dWvsjn7f59J15s3BWV8RYDUppvxqdycwQ4vCDc5eKJD9mX6ixiBz53G5ezm9LsJvWJd1rhmN",
  "key24": "2UhK9AXBFQ2ic66grTMdbomAj7FTXgfSeoFeU5neaT1AwkZ2CueHBtrZtHa5PXk7EiaCS311mTUy6PHq5iGRis1v",
  "key25": "2uT3toiu2LtQDQaEVtRcetrsqkMqpYNQeXN7aFY2zSpSbkuAZ3jGFwcqp98rKy48i23JRZaRHwmm4uwViDineNW5",
  "key26": "3BnCzPonUgewt4B96ShLpBHy9s9mywaohf1oTkcG9vdXqE34r5BYBxonszzUCk2aiuZjGmnrVGZWLoXts8XzSVW3",
  "key27": "3ReShtBP9in89i6YMA8h5pYFFAEWyntYGdQwqYQaHTkxorY3pDnheQVkJa6UZRfeXde4Ygqz2SW51TtsXpoKqyaw",
  "key28": "2TQ4BgeUNFprqEoJkkiMbxM9W9GVfeXYVoLTCDMpof88jVbHk5dRD3v4nedPRDcugBDH9Jgtkc2UgTSzcxWEMR5W",
  "key29": "3poQfNGAV7GbqqkXEc35UACgdamD8vrk1owqB4ay32hvEVwatHkuHHFNqCoxzF7p9ze6BKbt6Vpcpy81NtFSFucc",
  "key30": "5S6GKF4e8EQzRHs4sTM1coUx5YLNZtweeook2UvYYCR4vDkwfc1x1q3mVskVKWYBqTk3MmeXzopZ6HvgKU8C79WP",
  "key31": "y3udUVvZ5G6udphHaJmX2gyi3JCbhFjiwTBwGtcpd1d8E5R6jq15UdfxAa97tD8z7hZsqaUBrUHbRqvC4vEeKug",
  "key32": "32MzNBQoNTacmsk57oiUkm2ggMRJWUyFhCArgdr1gTkwGxVrrJQUya5dFkcTVS9JhXfTkxmhKtpCYDoJzNH7F6Vx",
  "key33": "2kYfx5ecpX8CP5ngKD88WAmVxm1fGRjt7xnjEQiNt6hcwPk4jUYRib4xYhAEX3PZN2WXgkpfup9K5cJG8aVqrjg1",
  "key34": "24pNJXoQoCJZPh481fy2r8jqaK6KfEfEJ7TmaCYpF6yqTVXpoYivzWQWD6781SEq14f7rZ8W9aK4xAXK3Cg43tkr",
  "key35": "3xM6CNvq9ucAhnpG997buQLmaTQP2FJdugtkxs3uPqpup16VCmS8NrYs5BWfx8ipYx1siMXsXPzhiubKGQ2odLr5",
  "key36": "5ap3ywqt5dWXz2yohfGS1JmaZxPF3s9UkTfMtzYkYEA42wpHGwncCdp8eLymsoncZqzX2GfhpNDGfNJHBW6Fznah"
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
