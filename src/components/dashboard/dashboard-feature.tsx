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
    "B4rDkAiQ9iw9Q3Dwys5t3GdESTRMbebPjbwzSvvKT7VuhZcryaDHJ7Jzda3VWkz2EnJJsU6SL8DnGuAfLkHPwXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wXL5Q36E8SvXQpZFKzsc2MLFwKzDsaeRLbNdwsjRsiyaEGNu8aZKQhVK5LtyfAK63GaVzXWyFMBJ6Ehsr24Nf5x",
  "key1": "4iFrqc6TSedWut1zspFcF7TAEY6GEeyQUCNeKz6hZ3ZuReC7tX9QtWqJyVz99bag4cqniuD5hQbieyQGbWjhb2n6",
  "key2": "4vVkmisuYxZnMpc1uDxM33fkj5YpkYhNo5xYA91yqZk1UbynWnAvSgiTr2qrHm2NjqL7ozQbGbuBJqVEwi1fRr3z",
  "key3": "Rn7yZDR6UzFChRrgLm8NanseqSESbtjCuVqhBed6ysQuZnWMTHmgniqw1dEiNTpgdocs6DVwsKEBSEYmedsmgoc",
  "key4": "4UU5HzD3aspnamx9BqiSHZcScg8AQMVmMrNRxYbfmLoRbMnCysudmVvAJ8SGaMLJrxcuWL5AifAStweKV9yyWBEt",
  "key5": "kNt6sbHiwy87ZRXGqfeQAciXqYynaiRfscN5dDvimAyKgmkyL2gRLwreWZViu3BhwSAeJQYkVEX4mdYme8328AB",
  "key6": "34da6VzgptNnTdiDye9RFajLSimdekUzgxJvgqLRao9nTBcQPKNgeEEHaSLfoG9e5Lwpmh9a4CspV3tQafTDvHT3",
  "key7": "bKaDZGZKeXJNTD3bjS8HpmLXHKUCZYJuR4dkJhB57gq4KJt3chhFgb3U1xLbeZNC9WtrTnVkhpmT3DkDZt8igtR",
  "key8": "443ywjEyjNGZMsyAtJUNTbVJaFAvrNoSaWMjNR3cmGGNdPpuhtRpmr6WS1dJXvjScsiCLbK35a4qyUtTZ4fjsT4D",
  "key9": "tWG6oDqeyS6M2iZYRMzBxRqoQwhbyisGRrw54qtXJWtt5frVPvFaWiGBATMWkdK8FbySiCazJ1AGmDWjqgEZnLn",
  "key10": "4FjcKqQ5x7DdfSF6tcVA8F8qdP9KwNfep9stWE5nHn6G5kimzHD6PoHusJiEsxTe7fuUnhF5NeTKhGT8XB1hJd3c",
  "key11": "2wF6YQTTR5R688rrTTuWFbFkjRo3NQhuBWtdzTYHnxqNquMG21bJ5FzFVauGfqyk7kRVf3uTG7CbBnKQCArLtZHB",
  "key12": "3L6AiwTusb5krs5PAAY3QtWAnVbPX1jbw6RtTFcqTEegvA8vDxrb2BdufCTGS9ndguv7nv19oDAzYXb8KgCJJvXh",
  "key13": "5XpH435HfhBnpxrzj1hn6Dqqxshs7ZFkYTwoTDnvG7RpD3Kd3yni3J3STUsAzjVPituihJxekM2zv5BrVuh12aYh",
  "key14": "2mi3uQtVEzvdwPqQuUh8Tfx9gQu4BgBTDbeXkU84MLuNrYyi1sAFMsRmgT3TCV2ogKxWEUR3ow7yh31RJBPkQkHb",
  "key15": "41i7AxpYiXjs5FLjZps8RXMZzqf1NNXCsqub9fSGiV3FrkaebbvKrk9vgAjj3GATqrhFtAPLK2YKegBbuNvNL6e6",
  "key16": "64mu4aF9r3f7nGvSvtHqHsSxqmfjorvyUJaz8Yd5CbmHHHBUD6QzgM2oq5MQTLYphv6xwWn3yyoBhSjZ59djALew",
  "key17": "5UeWqZVoFrS55DgUc2GjXmwF4p1HCt2iR97wKjLEwiuajiKueR8gg5EJDZ6CS99cS15f9WTuBKxoVCSmy5XbfuME",
  "key18": "5DpbPmEvZGtsmr76Te5fgRQ8kLZvy8JUxXtHggujNL1kGu27tXT9mtSt9xvt3Z1viVLmd7LU2gTBNNgDDHPiJdrV",
  "key19": "hFt4X26oTpgBNX9HmequQ4WwXhZFwHSM8zmfRhjY5kQNjYnr172LJUci6TQHrfVKcddLfdcR8RLy9kPnQxziUqV",
  "key20": "3t5h1badg2JoP9ggJTphdSTkYW84CjfSi6JxZxa74ZPcTm84vcH9ZSJCvgYbGo5wEkk8PQKruVUomE3nYFW5d7RF",
  "key21": "4u5pqWXcX6pTYL2EqZ6cHsXvjg7oVPtXGbnscn9SUe4HmJKDKSFa2ya1Wjc1EUd7ppYFcFLvgJ2fDgMs1yLjvY1j",
  "key22": "2nztFUXUyoqzZVt2dPHqNyMihCh6CywQyAJHbvc4x9hUDxbT5fmbFN2AS2Lv6pk8xisSzrpBSiQENJyCq1k22Bhd",
  "key23": "2YsP8YizfSWFwz46e4TQaN6Qy7fzC9gY7AEt1Pt5xQxFvqjtuKXZqXnMUZtfQQRYCkFVgcGDZPNK4mSfZP7fXft6",
  "key24": "2C5aA2ptzWrB3HqKXQFKa21mb8gXVyxYUWHCcVGfjSrgobDi4nQLhQ7CFvryaxVgmDPm56USeWWMDCAVx4TCr4NU",
  "key25": "3ty9n42TD5bgCCHrKgevS8GMxEsreW7H5NVPG5NGf2MJ5fJ71gogLR1F7joe889kgmxrCAByoqmFY8z2z6CvQbEZ",
  "key26": "4J69o7kx5Cn6MVWCXjjijcoAneUqreKAY7K7gUKhEBZyWU53a4NDxHtYLBVg3ENmrNRhmLBs4Gd2cx5kT6p93GPw",
  "key27": "3H3JF48USNnXq2Gucy5kczuKcXj3PCMrYXm44tRf4T5BXQLe8exvSJgUVUrKppMY7FLutMUUr21uYMT21ygH7RC",
  "key28": "3FopugWSkWfsatM83HnMFrdA5JZCT1Uw3DU7SKqLTWYS3mA8wUVynwLFmudN5bYs7VLNXzJ1zeeUjXRYzVbF8gYp",
  "key29": "3TXE1df6FKMDTHrdoK6muiHNd1R269xv84x6wXHF5f9adiGvvMkDnDXLMmGthDdJSiJd3iBZRA7pm5WEQNMmrykD",
  "key30": "3YDfThcZnr79SDJXp5VKq1UE2R6Van99F9QJDizVnyQByzPwttdWR95NRV7wogZeX4nZ1WK4c7kQW1xXX612rnet",
  "key31": "dby8DG5VTrajkWrbwxaC8WRRJwAZEwkNCAwzqEAoea8AzwXEFRQD4GiRPisVwWE1Scm3BujbFy8Y13VkbDPbBAU",
  "key32": "4K2Wym3LQabLNmFkGpqnNdgkgaZcT8g9393xhCCfnW9Zhy8op4KvTZop8xwpKN9sfchMivdyW2Nc97844XRZ91Ee",
  "key33": "58NpkDSaZz4Pz18WFPdGDWYBdN6SYdtgvkEVLTb1SBspGPE2TnBu8udMkGDVaxWrnELuztUipsa3oBwKwoQFAAX9",
  "key34": "3JfuUnpMhuPAAk2EoG4TrePGXnQdCn5Urg6bvn3SxyY3ybLoV8KX62yRYNaut4qrt8myu6ntRivSRCRuKDqgZZ1L",
  "key35": "4szgvGipByicfweD9GQUyiK2QVkjUnsJhRHkMNgKP9mBoGF1YmfcZComqcQtQwJuQY6D1BfeQZMqiBy2oJHNhTyj",
  "key36": "5AGnTRa1TDAQECqLig1dnfijBc6DgLJxu3dvh4yqE1h4MRaDhNyxvDG3XQoT1xVUUBHVmemoNpcX6FvJEUoVeVsr",
  "key37": "3SMF9PSha46t3WqDUX47hyoV9Zt3H84bhaLN86egbYVjCUX7omyxxPLYp4LYk6rUSn6y9VN1eirJYsiEtySHGNi2",
  "key38": "2y6XMLDJ4jPG1xqTVSPchW5punqRdXWcTKm3NuLcPSHfGCKGBEg1fefjgJ7MkM7h1NqnPQ2iPXs9KkCLMLUiBKMp",
  "key39": "v8incTw7HoQp6ZE8citFyy6pNGsgqPHRteyEYzDTMUTUP5SnyQ3oy7ES4MVeY49sVSypWdtdDsECrwQPLQqGHRZ"
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
