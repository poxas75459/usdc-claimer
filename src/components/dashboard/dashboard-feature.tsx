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
    "oeuX8qQWGFvEWPvKnkEHaSPMBkJdJUNTNKZvZJVRQF1MqNeX3joJhMhzzUxwL7ixd6EY5tVcbajf54dryeC946q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KtY3tbJ76PU3hFPHdnvoGawWB3YEivoAay5rVGTySvasoYW6ZgvrBKZgfvJGyWcLEcL9ejZafx9paSr7BRx5L3Q",
  "key1": "3hSKZ7SMGyqpVvnZwX5iLjQyemnWeGyQ88s7JeR4a46vVXA1krNvDFQANVegadYhUpNcp2Cx5tdarsJFjCeKYbe6",
  "key2": "5rWXEcE5MpFr9bEohD5AZp7UCe9aBucALZ1bE3JdEuoLHvRkCWm9yEzFM2wLV5P71fwbduP4n8VpvDLPHuvdWD92",
  "key3": "4bE8XDnk19hv4GBAGfzExUnyKFaytks9obwjXie3zorTubrgowpKwbjQbaMfDSQA1BLt2B29myb6bDcGE6szD9EF",
  "key4": "3iPE1Jv9Y1sj3iGDx17rf7W2senqunJgY1LnsjjA5YRdXtGw4HshSQVS8sDhWoyeG18xmpPZzB68QMszNTRjHx8e",
  "key5": "SvwUcNpVbKk81oZUMG6VWCv4tsTEaTYN42GzdHFRozURHn51ZqG4kjQ2RjR8F4iBAMpFB4cx17HF5iyw7sT29q8",
  "key6": "4BSvW5krhpJouU28hA9CVyVmUyRTcNJoeaQfTET2odq3J8u2SChtDDAPyw47TprzBjx8yw9oEoxBLpufyhRuwy8J",
  "key7": "2A98YAHvbgBSf7eXrZRnLSnSnvKoXTGnpNm3zaxfrfyjy4rD3bcVfTGCfKbsKEhQbqU15YkGgJ7iC3tBd1MQtTJj",
  "key8": "5YJhoZd7eNz3iK6M6c2GQWtUBqrKssL4BiJQu5yoebyUm5dxRzqhQ7CNfAbHYwNVECNTSbkMroroRc3H3Vfq6npz",
  "key9": "MDGSNbadGxcb9e7evueSorSwzxLVsBjYaMBkxhxdvCBWCdPHHpyaESfNyLHDzo7ev22f8REPZnHsv37bHr5AKP3",
  "key10": "5x5CAZtqpbjzoAmmrTUJYJpKesHpGLiPkbYCkFspCE6GFcjJZ5bo2abEELunt7WWhYg44T1srgPu7D1QF8TFfQe3",
  "key11": "58quzSP84nNC9qPYHmwHGnKvBZdwEUmvxFhtpb65eb8cEMLdg2PmP8CczMGfDiLCdZgq4G9cZvmfhYJUoj1dB2YQ",
  "key12": "u79pS9zL51HtW3kuZQnS5joHoR32NayegDHTJRxFhbtomQEoonHeCFZmCUiSFwVLzXZAqqbGetRGRwdSsdp5zjZ",
  "key13": "2njCjKsQrzxavt76hScD9hncGjXPJZkKdXW6dAM5xoxVj2oG6uNoJ6W4R69ik9FVgWtNnAenEwY8fv8CBhaZ1ii6",
  "key14": "3YMAB5D7eZP1cHqDq1Sov63F78DHh16wwC93YqPNhK4sQNdnUaZQNCcjQiaibX5RYKJqP5HwKXPAiZJ3cHfEjzkD",
  "key15": "3V3NjRCQJaw6Rt37hjCS7K6wXDce6wv17p24NWXh42HWP53ixBC3PmLbWEdsEtpCEGXMBUP1e1sihvpS1VtySeDk",
  "key16": "41gRskstsJHo1wmXbXMxvxa3r4eTtdqwsWKMfxwoGzGtUfyEfVrboTY6N4Cp7aJ8gxrN12TUcQ1QQ2UGExBFZb6W",
  "key17": "gYioNooEGncbxShxegiPNyRbopCGVwXx6VvepioHfPPuSYMm4h5Kz62J7pNVcFgqjRhTzCaucPJjDUJimRFpxBd",
  "key18": "2uSW5M4g1oRmhWjxPtmBzPHLzxCLhppYEg8W1qmGeRehtHcdkLDwTSJCrbB6zvDgnSkoYELWKWuiTeECSj7WzBLw",
  "key19": "3ULZ6fHHHe9dxjroP3KwqCctgqWpVQ2hPx8hMfQsNigQCuemYSD1UCLzk53QW8zyjT6Hn15f5AM5NKk2iSKrEEPn",
  "key20": "4cheismeJdYGLsSJFbRCKPiLqTGqb5SL6RQtzB9g7tioLjfxvw5RDVAKp2JXHfSkScEzE1ufEtpParZDX8737M4q",
  "key21": "3mBfXNWtajq2VD63Xmq9pm4aS1WG8GEHX8fcos37P2fNMnkfPUpo7NQr7iUqJkWgoG3WBoiWefWdYMGhLP535BuD",
  "key22": "5GfzcYjj6An4uuz3mPNPcL4fD4P9xhupr9tEHw6Ks2N5fzKqxSEva1148xuMrAEaDQTZgJS1n6dDPsqwYepxVeuc",
  "key23": "2io4ZSxuDnX619FA3sxRvH65gX3vquGg9eJvn6RKu28MKbSn7mxryVoaiZUhuskqNoKZ75SYEduwW9AiKm7LTeH7",
  "key24": "34Hje2D5exDNRHLFzDeHJMHMapBJGsKxdjxUYZLa9SucXcwLDTBZPDdrdeofm7Y2szZDvKxFDG3wF4qLGKyknuXz"
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
