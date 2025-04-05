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
    "4XjERkYQPSGhfC1sWtkrNbJ1C1G1gjsi16pW1Amtf5wgTQ8PE5ZSV7qCuqnSS6uS8SM8iE6hJmV24UDAC5i5hQeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "492uYQJnW77AY67WV5QJpEY17qA6dWnGQ9ewPVJzecmGe1Mr6weZkDDv1noe7PzeppxoJ8uxVS9SViEBDoGXsNBj",
  "key1": "2f9JPXvVFKm9KXoaXRP4AE9m1F3JsySX6bGo32x1fS74h8ucCb7dfBu18tBPhuLw7y1dLCDEq8ZcM93Q9RRyre8u",
  "key2": "4jB7BXw8dhXJxoT6cwmEj8HuMPR6HWaUFLZPBpoAf7gT1c9cNYHwCLcoQyn4vZcPsR6vbeiehizFTArtty3JNWUT",
  "key3": "RAVN7owJ3fj5uiCHoS33a9L1pyC5ksFwcmiMxm6cR5Kf8Zyvnuz5S4e4xtiPD9i7dqiLbqhwNdjoqxDcHoo8EtV",
  "key4": "3BFWyD2HPj7rEqQZr6vPGJABEECZ9GTRjUVFehFRvn6k2Mbr3xWqVFWeocSdurKrEpiqHvRkLZp48phAVL68RtZM",
  "key5": "jJzc3iMAQS5ZQkLCSmVnPvqVh65Sf7sfY93xb7mckpSkQnmY63wvFpxS7iq8mU7rFYNrMjdQzktn1D9nct3WKy5",
  "key6": "4JpmdA6piHUGmuZJ2WCNnwiu8bztoZpjoqCBGfpF5m7SFGkjdXMpYRx7A9eBNpy3CxAdpv9G6361s3cD8GJqpebU",
  "key7": "3mQMgkmHTbUp5uds55dkRoyujLzzWCmxafZAt4jPz8caxES9sf1HkHJp5prinkB8htsjGgT63BL2PbKRJG3TA1wv",
  "key8": "5kEb5At3pRFeS8nszFQhU69LvX9EzbTsuXPHvTZhAwan9hhxbumksieGdsPTkQHtsT7hHRCGFfyAXXwHkDn7pwSH",
  "key9": "3uNBfaUoyeJnvMfjrCwfm5giDcMabQL1K5CRmRTHx1KxeeNNCg2akvdpEy6oW61D3fDBR14YJHW9RhBTvvaWd51v",
  "key10": "4cxanB2AD5djddNkdVNpeN6nqtXG3StY2k1RjhkmtY9wu3FRXGiyHfRAyZ48iEwLTKr6SEjCHMrRJAHF6FLPs7zV",
  "key11": "4CVPGsSDn9TEZBEozYeZjjzazo5D1DWkwTfLwQGz4SUhY9pq8YnAhm4dGhL6qfkPDNdTrQEK7rFRFMJfJowZa7aV",
  "key12": "2ExZj3JUyfpY2a4N1tvdgqzTc7xLZ7HEU8WsPYz8epSUitgJzBNMuTTKRJnqxyJPrdK5QgvgrPPZBAofd7zJjS1U",
  "key13": "21AAysYt7YgzDdBxt4ZXp3xjLNrKDcZFkVLu9o9ntZoi5njUzEw692DqEDKaBXVPz5doWmm3cEsr8praHoUL3k5S",
  "key14": "2GAfRnR5MypTYVQPC39TMGbWwpDDtDZ9UfAqLmzxzhGWVzaCmAMrVYQXT1qdCJ6ydyzPtV2oFZNoC8JhK8u2x7to",
  "key15": "2UYHU9MzeMBXYYi7Q9UbJM6WsUhCrXcFYQCcAgSFip7gvRPorZYST8TxhEavCc9UgUGYRgSBRtSA816WCjdQ4YeH",
  "key16": "5zL1KZHuiD31vCXajrrqydyLnbH1YPfrYLqmD5jndQokicmpjiaox6t19vJxCQGr7HF4pCAoRWrwoXh1Rm9LA9bN",
  "key17": "25azgqZbCeGJoNTfZAaXWUBRU5JRxWuGAsFRaKBa9FQcubvdfz7CFY71mHy4KQMz3WTTJ8iSaMjNqwBAiQkTxCJo",
  "key18": "28x7hqb7xcL5jVwLkeEBbP9R4epSNoY5bgBAZwfEbJ782dUanmhfR6hvKeBXC2k7tVUe3awtfsNb9Dg7F65jS7te",
  "key19": "4xgBRHPizDr55jR29RfEvjvZFucnbuofzu2psJP5pbeNnpPXsZFY6k3cUF3Y7JpKhF3NNpR9bv7UHhVLtRr3Re2i",
  "key20": "h32UKo4kELFWCq2ZTChfyoD2kyYgeKvJp1GdqQjpjd2keFWixEBkkf3zpnjYkQjcdhJm6joNZdgt3DDJ1VBSYKe",
  "key21": "N54cKdKqnKtz8fzufXYdHeLFLTtHAPmkwZeLg1tKNzR9w6nR4k6QChgqDtwnNM5RQFPK4MSqidmPpBmwnrhBi9p",
  "key22": "Xn1w3CnSrWKqnQFvjucHi2sP4ZWBXHdAY4jutcfm4tMyvmD1PZV2SABLkzispaM47YEU9ZnCHRj3h1Gyi6Uf9Ej",
  "key23": "44HDCMuEoEtdPi2MrhbRzfsZ4emgtVJJz4gqqugdPFKbirjwfkY27TTRaw7XdWvmkm8MCopecDKfvXuAsPPjQgVo",
  "key24": "2RUz7datdM6yLPX2yFBHCdpVFXEiB1yf6aVe5tMqkYoGxFBDBrYrsM31r6h1AoX7NYXFeGGhz4FwLVqHvG4gtREq",
  "key25": "2yFynBLHaYhq61TKoLE6bnD693TpbLY4m8reuEX8brtqTd7BrX4dTpQPVdBdPgDGB3VMPQnjmD6K5piJjamkxxFu",
  "key26": "4kitM5eTM4soMEijAL3qQEyKSSAfw5UNb6sHaMMhYRZA419BpSupFT5xgBV2ebbJ9L6NRCFoRFmRhjsePY6bo8Jw",
  "key27": "3EkRup7SvtPCP4aqyEEURRHAcANhTg6MsaEXcKhZTMJvp8TM1tAeXZ8EiiKkoTxjN9jQ7uXMXyFm4qNRyk6MxdQs",
  "key28": "2CCHozmJefJYoBjTijjM1wrcUxWCFUf4NHS37tTYyJrEb6RngvdJFic9f3qCC8rPefUcRAkXAqmwvJojxRvNbWfs"
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
