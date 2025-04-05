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
    "5pv4poxDtsbi9yX5L3ujZoSi7hzF2CCtxz7wcdgzXorFZEwoqzNCAdxzKa2CkEBfWYe81YWKLFqA228n45yg1wAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HhMY2diWbVj4L2e3nDDmybUVUmE7TQ7h8u2QUhxh563KMMbdNFWvByqkJf2RjX5qocxj3FAoCchZp7C47jrc7Pq",
  "key1": "27efyH73h8B7BCqwKXGdHNJkb9WJT1V7oumwGvEu3CKWTiJ4rx6Z3jPQZL6oXVvLaDgaq3vtMVpnCPK2ejNNxg34",
  "key2": "BjLzK2835DoSvHdq9ngzwLpy1AYAUpiTQ6zv4svL2Z67h1T4F5QDJtjDW9mjhft89nEQFVQTn4MWYqzEU3Eoq2c",
  "key3": "h7kgB2VZDBiaRSVcEoEADgCVFphM7BwEtUMTkiTtfoM8xA6R46k5qDR4nBRrytDdN9yq6WX9VyM2hxqe73zV7U2",
  "key4": "63iM7u2yAM96DZxGnCQ1Eh8TBX5WYRwKxZNce5f9jgTG2c69zcQySiMrcUtcuTtbt8zWX5YrE7Z4fdz5fbayysh3",
  "key5": "5UH7y4LJe7KwjsoHrpHFBrwRmhodYh5jpNrUq3Y9dG4xRjiKMmJ6AYNfqcUp24BxLQCewVFsSinQ6A9Fgd38vPyq",
  "key6": "35d9wcWZCpyi1HFSizdx9vqhnFsEHBoYv6jcK3sZwTWhrTDteY8b4MHabZ6wXTaaoaNNwzhVbohmGpidpHhKHEVX",
  "key7": "5MDQh1BB9uzMn7oui1PMLXwRA7rvFw9GTCdop5u3TV9Pm4hPfGdb8fCiLYFfv4RVByHyKyYeDvqCh71bdocDYzcz",
  "key8": "5PHyRLDaGUNNy3eTc12zZdLaBqZjGzGL7VBsc8ucdTwi6nEgPGd2YCXHMnGfR2eU8Kq77N6WWvhmPhbvXrhagGqR",
  "key9": "4w4u4i5F1iAjitghgM4ci5UPfibvZ5bndJK2HBdnCRkkfhUNu3pHadVn88LNb5y4WAhAkMoeagGwdkT3rTRDb4Tw",
  "key10": "1CxWF4JLvJ3SZ8Gq89BAJKrBVVdLvdcKxcoHeBEeCiHgQKKSahHHF7CpCHkp77bhXdtVNqe3m4LmbgF5r1RHrBm",
  "key11": "2prkqXxkGx29XAYENKrcRHkgwmy4ErE8SV7CDo11qB2ZCYcS8NSXWEFam5opYFzfKHvHpDv3twMKxLvcCrgwbeUF",
  "key12": "5RXDsQfC3sGLQMFGakMaUvHMbGYSKgoX7GGdjMgs21DZzKCCxM4Kzv4wzgMmLBm4gwypH84y59PLyTKvuNUmQ7Lw",
  "key13": "39yxN4JC4kb3HiZYMdw76AAUg7AoEvcFQQUDgoEGwpvDDJAZybmtGg1mNC8712EkkMd3M1btu7kGobptNArvNdE3",
  "key14": "2KNruLo5A91Yaac3y5AXzuFXchVcigJzzvnQDyDE8WfJpkS9bR4hbVvh92pb5wjRZFawSuAhWqNeDDYgkCADTURM",
  "key15": "41GF4vdkDZLuh2TvpXYBto4ePqosNCWk9mVAFXW11iPj27ALPLwpZMW2LDJdqfAmo6tR9X2ZQwYj1zWpmqrdLwnk",
  "key16": "4sY7DPDzDLQgBSmeEd1nBdN2WC1QdRyGMhXGtVkZa9rxp5gdpUEFpeE8chRuyRZpPu65uqi6FenGTTL2c6J6dKvb",
  "key17": "2SbciXuk85T74P7fW7529ALLvEaeTjGs3VxmyqKhZWuNW4QnFDMqxCEUwyMY2zXySyZWrDyVGdxmKQKEYKZgLpeP",
  "key18": "5WhYkjKBxam62hmTd2zJyutBZq3xoEtggzmLCGiQpYCk6RboKZEHgkig2j5PjSqXggqNJVrPvto5gCbmVCEhN8Gs",
  "key19": "2hqtwqufpu6sEN2subkwc57UHQg4SbJPr1DWBAyJ6bMNWN46nKgEaQWFax1rDmEYAMjXNxor3SAGY1E91LT2h3B5",
  "key20": "kUM6HerwdqPUgCERbg4MMZSmaifXp7nKHBrtErnT1NPLNdcXqjJaQoc7azLD2iL5J2nWgThWFB1hTT8uNnNeUcD",
  "key21": "2nYLSop81gJuSXrH7238gxcjv1MoavZwnLqGTtZujbgU4vXuqa1RU5P18HdptTzuXG1mEppr4fcm2uWStna5icpK",
  "key22": "PCyNRf97rXXAXd1Yz8UCyBEMrkWia8cM9qDvsz65seWhByGk6MSUy2T5gRGwMc4bD3ykHaaTffXF1GVjFhB5jZs",
  "key23": "2eNnURTZXHNGQVSVvsLJwbmpmn3eRAShqnrsS32Ninwc4rn4UEPVBV2gVAFyLrjZatytsyKp2LfWb844ZyfLcbfX",
  "key24": "4qu3J4RkGMixCaykCJHFwTUAHJeFW6FQw1c9RnKHF8vsCswq2n9DcUagQNoy7g2pMS9AU8GCVbAFVjNtqJG1P2Wx",
  "key25": "3Y9JUcRCuK92ydZUo4xa3Fy1EkTvTY6jxZPTLJ6n9v9mzevFTWx2JEKytk9Wpr7Xor7MdKVLCfRDDvufPi8P58kq",
  "key26": "2KMhd8zuLakQx1N2JfBa3eBfXXC5VfN2myYCvEoc2w9DkQ112BzT7ZNvDXTs4E1VCa2g18RS7i6qexUFWkkAwohX",
  "key27": "6ttJNoWSJG9RcW61jVJ88nM9vajP533wus5RmpBKshfUN7LLwWDskTnE7kiJtzafrvkBWf56DQdKoHpphwenTUE",
  "key28": "7e5eqkUhz2z2agnRfqbfcswaioyrtH7SiXZ1GJ1SaL4y2fTf81USZE6qfohc7bXrAMQGkoTj8L7qCko2DH9kCMz",
  "key29": "5R2oxeq3Y4fPQzMWKDKmtxFZwxSiqhqv5zqEJLLz6SVvVwKXx69P56qpy3jWGDTkjW7aEzzxRGaz8kVmVREc339U",
  "key30": "4AFdszcXSGfCu8YAdbkK4QiCJPHPEx1jk97WMCphvQxf7EmKfRKYcxz7ig4msTw2hQW93R9VqxU8DdFU3ArJsafC"
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
