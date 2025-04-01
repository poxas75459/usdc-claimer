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
    "534kFdZ8LzhTeY4y1gGJgarqgC24H1N1tht65hAPXf8q5LjcZ3rJfAXfaYw4iEuxNaDYSxdaoUSf3fA2CUw6jRkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kMXBBAxg97HCU2n2C7EEf6Wxd1brGzrJ8c8mNfiHyo7i2bvE3okjivxD4dcepg21oGizVePoakL7nf9rUBEKavd",
  "key1": "3Gg5Cw2vKvNW2bADRYSnXVxfJwDVAwtxgDpKDBrj8m4nSjQzBXGYNTbMGE2nMwodLTF4WazfhGRpcu7EN34hypC2",
  "key2": "K459g1goJ9ANK5tD2hguip9y7DwfzPsiiAUR5vpqpzRHYQLWzNZ1Q8TJq1uT3jM5LYxDZDF1eNj6WUnnLLKn2vm",
  "key3": "4uThmZsnsie5jezxeCMH1kYq6aiUvSNaJGMjjCxEaX37pR5Hv5oqG2x3QFqe3gXwzwYA5PbjLysGFGmTa1SrcSBZ",
  "key4": "WxpBMNzEy1vc5SmFsx8apx3cPRYRZHhnrv7HDf2Y7jSNrcs2UR6qXYPn7SzEdxZR9DTFCt1VnjG8NThL5PPieop",
  "key5": "4hkvvRwdEaitaBZaVmvGHQkvcCFoFT9UT7wdyaNcBZMnmyMxc5AwXKK2rawmFjraBxRXuNJkxG6aS5uHU9MminsS",
  "key6": "2UkCuGWjgTuimqRiGzhbQ3kAKwxVPNvmVrhmQwZ8LW1RrhnidZpgfGXGCeNu9GxRpLS7aarNXxGaVNidX8xFXBko",
  "key7": "5vvqr6RkXssgsJRq3ZAADov76796dKPfh6tctanrZxC2DTi1egZ3FVabTTdXCYKzvKvVhrcY2CZdwGqyycQ822cn",
  "key8": "5afgccpYZojZgGZL9yZqwMv4pQnsgqqeCrbwCzFoZhkMyncgSZUxt46V7sqkKLndPh2gFWedWy1LJvHtYGBwUTgp",
  "key9": "2xiHXBDgrpuNxWjAmDUHbFQZgVWRbVxxwYRg9BYHQK11TG7RBtS9chVV148t3YMCbT81TWZ9gjZYoB2NjsVF4DyH",
  "key10": "4rdnndpdeEHfWtCeVBmTu1TWEYyheHb8qCyvd7rQGKEnFkQ8EVXtCQZT5zykobdTcT1Ui8EQ7HNoP74qoYjq99Ve",
  "key11": "5augUGWn6rrGhfumhbQRQjwABS9FVN6hGRERjunirhhri8ck3sUuUQoqY6966eWWUeQRp7y9g8jAin6ZhEjeoA3V",
  "key12": "Sn43JexdGJR9Xoxj9fFKV7y8qK4m8vAzu2qKyxW892xGmG4GvZhd6wcDXgJUfTaaXuwQVJByFQKZRV2oxvbuBYt",
  "key13": "62mtydUA4arK5izjbXAuWFNbpbWnSXwHwtiBkyePRG3WvPDzQiXz3eqfP3ND7QdNpL1eqSjQpANCnkN4F5ExcL9w",
  "key14": "GEZNt9DNQDa8er6AiTQfr9HiauDdwyhMzbdgsCKWK8dCgNGXQytz9jNMrxj8SwUnMso1jHY8qWXCrLuTPzQS36k",
  "key15": "Nc11EcmhswGKYW52seB9PqTxdPbevu4nt6mm1CpCMeL18UYdX9DchbcvukxKYPyHEZWAbphv4RHWauy8xB94jXz",
  "key16": "2LtCr8nUpb3DeVspQ9zHtdU8yhkBytZEG2oCWdj8UqwauoKzMsfsERBzwPfy6qqR26jZRjPW1FXP7gxXdhUxSE7o",
  "key17": "56SFq2pmBnWZfK8juGQmNdsTyRyYuftkkWk78T2NSGZiphEWtmcabNTRypcaFfAZmDgsZu1W9CociD3mXCMF6vUf",
  "key18": "45MctD9fJFzVrT7BbddB4zfXz5PkmKxSifmZrWhCRUKcXqZYLYkEz3qdqiyrKGKxrsyL9grxL8LbMwKmBFtDQKcQ",
  "key19": "64DHFu16yJtRnxEzUzeij5j6BVHpC6qgkg73NSi7K4WWGxik3Kd4HHMPKTgxqK9DAKg8ZApqTD19dF3gqcoS86r4",
  "key20": "5EkKeJ8PtQZkiruvZRwNxu8htdm6vvx8tUxSpvi7DYCBFQmLHangDL9XGk8FY7179mfE4gcX6J6iAcvP3auMPKcY",
  "key21": "2qD9nBtPRPYws2wL3WxpVDw3TEfkRTk59fk9B89YMXoDKnPPyRYQBAnHFdkV37g2oxWqMKcEpC6zjSsALY7wj2aB",
  "key22": "48oA7WUDXsobZqcVZ2awLeLE12SZWuxkjJWbESRcXkQG22sfGQPdj9GLbPQBRUgADqEreTA9xDeuLwN3hijt4Vup",
  "key23": "38LBQgXrr2ZkSFjpNuEhcQXNHV7BpiAGSjaozcWHfR5FmBPM7bQigGwWWATiEko4d8Kxn4yfyFYsrEJJAZPDxrjJ",
  "key24": "3ELVYQSvtRTdCGfLR5v9tSKC3GCCYTPqGzm5MFc9FphaXZCAf7aGyvBMqHxDS8JpqRCGDFgkG1qGXsszBRKPohqC",
  "key25": "5hNsXCtAUurW4wPmvafLQ1io5WpBLXChLQMMzXGCRPRAnyzD2W4qzWDhJofBQ85JmvBnAz2dUK51eKmFwfaYq7fq",
  "key26": "5KJagRDLhZn5NaW1has1EmkNBoNfVWdViEaPqrZkr1PLxeCSskD466w1u7EwkGe5T2DuEAU7NK2XFyeSGbwNzL7T",
  "key27": "4cjn1sb4vBLer5u7tcCkEEnRXaikKG8PxJS26LhVd4dL639Ahq1oShiK8o6PsCKancrnNidatvHAPwzEehPD3Khy",
  "key28": "23YnQST3KHU7ZmctW4dcvTCgECUSqdVYeFBUnb6FgkVwCKonvdadB6z22g6ruH2hTrzgUdyVswHbd12xcbo9R41C",
  "key29": "3PXvRyufh6Run3n49HeWkXJMthMyfDMdRVP3BdCR7So9bcnCLp4tyfC6yrim8HkV9WGUsKGdQXUqwRv2LCNJgnki",
  "key30": "2wWZVLQfPZ8xrA3TVJF1coaU3bVrua3PWVNUSoLfa1ea2VqDbBcVg9tch8ragnZm68n5wMdznN7o9USmS4aDG5aF",
  "key31": "55jhXqS7wFD5Hw9rUzqm9tLhvYjPBbVDa2L8TvZDc4gUVDwQybco853aRwgRNa4ep3y1QVUzSLtRV5xh8RBndFzo",
  "key32": "45xWoHmJ2QVTcXybwD4C6EtUNwij229DFfXwSPAyKj7FnfAAwLpScebrisQooDvP7PyCoHCLDNAZ2qE4cMg3WRie",
  "key33": "seqQH13nzzMKMNyM1cJy9K3Dema4yYBNNQCaSfRmRsn2Yphi1xV5GfxRCjQw9ttPkBSep6UojVPWeWotd7vLBg7",
  "key34": "55u31GT9U894FwHaNvKdRTKtXm6eRcnu9hwmRcG8CEdkfr3gU6QwdZsfm6VtfUoPtmfHuYAYL6KhV231AjwzMPT1",
  "key35": "3BKGfGAA5sUNNr9X7TpyX4g3jSFV1VkN1mvEp5UDNQhDvJ8G8Hts2RJwifia6NSFyGDm771Ahusf5S3a6hTojVFX",
  "key36": "5djVbNca8Yg6JLyAtDoGChTTWvUGMQnkS8cVW9U1PXhrqyFTaJ8UeWgruufCMSfdkfV1aZkwwfhaf44Q3GqLQAKM"
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
