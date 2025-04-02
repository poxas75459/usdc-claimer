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
    "3x7o22xbmgVFyBqu85vPh7CnL18MFwfEc7neawHstJZbBHvVeiYDpVGSQzzqvSsmrUvrym8ps5jBpDjnVLw3BrgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uUzWk7jp7PAwy4JfuwsDrBAQ7z2sjzuuxHsbewVkj5sVccaPJqNQxo1fuWkWL2SLwMZbaryhECqvDxcWxsc453N",
  "key1": "2G5fdVsdvQcteYjSHmUmyjersWVFUWvNqDeKvmLDqsDn26ZYjikR8QDW822NgKmQnNG1FGaDbef9Ltz1Vrwqiwim",
  "key2": "3ZNvxSgVYEA15obnTuaKNT6WYMPokjnMYQY4PHXxLwwAsBfToZE8Njj8RRJMtcFEWFJS2Ybx28sahYdeJtPXxyGT",
  "key3": "3rkTt4VG14Y12B8HM7EfggKVi9QBbTvRccgJomYrMYNsUDVqjhxs75C8p9vVuYubhNgpFM5rK1oJo8xtd6VmPPWp",
  "key4": "3AAe4wVf5uwLJvKLS4Mb1WfmpzQjwwCjnWzUxoB23t8p9tuMcjhjfQamfac7fDEdSfqNszqjunQWRsXfcP3ukzs4",
  "key5": "4UR4AHyKzmz4q6RRYt4Q4HCJ3q4Vzkf1s76S9RTaMdPu5RVZeNkBfQnNaS5eUWR4TjAKBJJxSxwhaqKdJCr992B6",
  "key6": "Nu6tEfSPYbjRNLZfT8ehFg3U6ob3R6JMq4nsi4rbGYmNtgtygkuypSbCpqRv3D9QHdfVpZgB8Rg1Jizu9JAb9pp",
  "key7": "5ywmm5fZB9a5RrtfHqWxorzpEiyeJEQLhNVzR6RBCNA57o3e29MXvLkebWZPnPozdjwLCocdJ2NnqnFGXqxPyvqc",
  "key8": "28EHjZbeFWAgmuvrBWEEwE3YM9oFBvT4dTbCHpiDAro58QkU7FEUqeVBXcvDwKormzcRfZYhSTSrNv4Xnf7X1coL",
  "key9": "3po8g8j5kBABwWd5cEXf9pk1RGkdxwDhar63ywyM2esxZnVWXHw9kWUWY57ADUfR6xfWLMCu51tj1bJUcDaCRx5f",
  "key10": "2qhSnkUjy3Qd4xSe3jFSjfH5GFo38xm23pbgMDuqDarCFSA31xiMewLFH5XW9pxxHfoYzmGKdqWPKH5DKJjn3o7h",
  "key11": "5rtaCmQ3Ldb8PFNLkn4idgZNbF663pic49ss9F26YeNY31sSMcPUbu7e1nTXx9RQJmcXMoVJMNTWGPDcfnCrhnuV",
  "key12": "2XNmhWUrnyceB7X5kfuSArYTrn7tL7L9PseWsA7NMVytdTU5xKygaAwfTysDVLJi2GQ8yUJiWQnjhdb8c8TBKcvZ",
  "key13": "PrM3Unij7pdSPxHVgDoQk1HuTMwDVYxEHPZnmDc6qvRfFm8Uy1wtWeuFoBRKpUEYsEYdKFQdfkhqczHrpmTMoNy",
  "key14": "4mvywuLKPRiRct1gJFhXrnV75aPNNgekaMadtaxeQ1NQJgYKRJVPaEpoSVem9BT7TA97eLBEVjLMUAHD88y6Xyo4",
  "key15": "VBihhi1vjmZZaPGKwyTT2Z8di4JddZ9iiPKks8JHV8eRSJzJuRUc8fkGVeNRw7oCZMD7gsQ1wd1JxeBRhrdot6G",
  "key16": "47HEtmBV7wPNdpa3ix5RDVcLZzQwP87RDmC4Zs9h8N28ztmmMa49z9eVXhwcq24SG7JLK4LSs5pexHdc5FWrSUcu",
  "key17": "2fwJJj3iW5K4hUKJpHf12efgqj3KXZo9FHvKzgCEbbcHzeGdS5TNQVx64x1rFKGoauPFKwa68VzE33Fn5aX9gtW1",
  "key18": "5UfzKQmvSej9jiR2T2pNxVS2joDUD6ypV3NgeAj7MWhYGfsGBCSNsBmPQd8M3LV6bzneNMiejij1KihyguTszHQ4",
  "key19": "5T6GbVbVTgH9Cc7KwnbBTndeoaxUyrDYbHsQNpXwKXRdg337LxEynPkVGUbbxqYBg9NxX2Nba6DnjEGy8mvuz3Ca",
  "key20": "5AAVcYxttPtQMraeJryontyJcB5bH1ZpMktsTRhco1AW7gxZpYBwBd7Q7NAuJHB7ZBqNhxuPHYTwU6o3vfdsfwj5",
  "key21": "m3vY5dRTuTMSYgp9tonhWHHajdbbmzkJMmcXggcwoFy5AGpM4RTxj8bd6xmWipveouAxYxv2frTbmpwYgVDnRyf",
  "key22": "3XhjrnLJaDQwkDrAL7jmAhY8REow6vejP2QRXETRmZKA3uEiPBijuVd2PSExzMXX4chzT6TLPa98BC6ymqBn3kNi",
  "key23": "65fimDShnSvyByJwj68Ec6F5Viy2jrZVkqcaLRMUJYVzTvdqBAjhDsZa3E6yWyz5xUiUAYeUcGqdJsLFjxzUsA2Q",
  "key24": "32WHvCKqXwLC6YkChmwVR8fxEcDCdLqzCiMqivG5h97XeQECsgunfiJfrDYn6vJnhUaw1rMYNvjXjiNK8aKZDBFa",
  "key25": "28oeBXdrrPLZ7BDNtjGEdvpD2J5CGdgCNwprNf9Qo3tvpEbHaW9cgzj8TknhMGHGDhakKB5fcVgNA5jQ2ZVc4tJw",
  "key26": "4GfMi5wfBpaMTrubBHwX9zhbWTUWu9sdJTPZYuiN5BB4dJGvCfPkHx25utQmjxXxk2YATyvfiwoXzvXQCoWu3fbP",
  "key27": "5r6tLUyMVXdiHTaUSjbctbPusXvXokExqPnohqwBmbxY21oJCY97YucejkcuyQ9VVt38zx2K81igAYRdEFC2i3JC",
  "key28": "2pa4cJn3WWFhesNj8Anv25CGbweZbVnTDmzKz9c4DdwkEhphbHN3PiVnRR59egi92QQ5UCTwvF4NUHaTz1DiTsYK",
  "key29": "2DFyjYkbWvpzKE8t7tGYidig3xbGmGhGdkzUJ7ziYwx5sTxdh2kj7LxqjmDsHHmwVBt3fAYcBHkzajKVz6tUJYtH",
  "key30": "2yXqpd19H3jaJNQ6Wvxh64i4oSoMEGySSodwDsCWw4iDr5P9wSvekSpisSHY48PRMmuhEjz4nBUZN7JV7BZ8fJ4g",
  "key31": "4Q6yyzdBaZiVJWgh1J5TK7G323Rm9UDCwefmjqmYDve2uxb3axErhqxoFYY5ySaAmHVmicKRirXnVffFzjeg1Jp7",
  "key32": "AeJxdWgpWgEp1MiUtXZS9MphSzXsVYjaWY9JBreRz6QZLbVxnkzkwpTTy15aAJUziym66qkC2L72vsRdhh73khk"
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
