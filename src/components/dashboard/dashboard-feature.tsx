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
    "hRwkpMyb5oPTfPkEE3csDfDPBhqHyHjJrdd2i5i51kaNAtK5Nq8mbyY4Qr3kjvT8dANbjR2Ek1Cg7J4np89M4s4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54x3pQGSewxVhoKa5sHiwwfdYAnRAuMGS6vUPok65mmYgayHRBcjzGX73unSjDuZWA3nr39x1qReVtwp3tCZw228",
  "key1": "MWc2jCdTGa8PmkfiQ3bc8U2VdJYk67kZL9XSTJTm8g4LpUnC1Vk7XY9ETRH2X15MX6NWSvuVmQv7XsuwgsGskci",
  "key2": "5JYiR6KzYkRfTsfKsVJXnVXGypkoRAWEjqUSuv78pxniRTQjnhdDmWsfxZLv23EAjJaVhW9bhTgnJ5UX3PfwNasF",
  "key3": "2dU7RkZ4919MQqAKu9FZmit558N4Hy44mKS9Tfmmqdn9zq5G8uGMcCiBHWdHhx7BGv7AHUCfpq6MKuVfRhorxxG1",
  "key4": "5wrWV6VnSDNX3523YU5yghmga1HzHfT3PT6muGqDgi1Z5VAGTM1Ez7U5LiAFb8QxxjXUsVEAWeU6YwiDYcNyHaBp",
  "key5": "uXWmhnTjy6iMhiceS5NTaRG5is9BE7ip2SHfyVdas99vdPKug2GjTTnWBfPRNRmZK6ZrHnKxVBZ2fnT6wNQSKNZ",
  "key6": "4RtzKRJv7MCQYMqq8fVProdA1yeJgHvnEx17YMBWYJNyv95nz7diQTh4gEMgFbXLbsbHdJZPGVuXg2zpvd4GtZav",
  "key7": "5nuXMbHZGh9K6p2KTQi3mYAuo67sWszjLSsmZ7PNz3ZoibekPRtvndB9GRwV3g8gyf198Qgpi3BLNuMeZmhLm75p",
  "key8": "5dJBHTDZNE5qLopHQXh6wTVBAxNRXbc5GGr3u6qhABy6zKNGdXgZF2ktvCNjo1tsEgmgREsEUVwumxuU4ZrQ7NfM",
  "key9": "2pGjmJBiJ5FfWWjEriGjuhvBta1HNJYepSTcbhxCRuQgfAaXghKbdfrqrEsKQGCpLELvCgFQYTY3UQzaKpj7ed8t",
  "key10": "h63KyP2iJyBTGnehREUZVmPBtZypANFTctdawdBhXSN4ULD8MNLhqTjSL7eJ8qn69BBWoKh8ZmusJKvQhgCJp8g",
  "key11": "5fhwczVGJxaezgJ75fZH2cEdVxxegLbUVFGEVdaMf7suaRsaZMjbKVu16G4yeKgpzUwYQuCx9HQy621bcZygmRub",
  "key12": "3cyUeqBTom28knUJSb97PnW16FtDouNSkRiB9uLjUYgBcMnVpegXQQGqZxuzSWCzwKgrXPiArTVVVjnx1ix4oZDH",
  "key13": "3fbjweBUW6WUV7rjPngm7zgtjfhBxVmGQJo15YTKhm7GgkK8j3Fa7M3EXGSC4op1vBFg9EUXiheb4xaFKfre9vcR",
  "key14": "xGTXqNYt5JjSiKjnhGrfNBAK18QkYvdjDgnHrP7csddErzndytE8QGddeB7QbrGCQH7uaWfGRFSb43L6gdBNFEz",
  "key15": "2dZgWc8a8ugY7PPJo2PJAnvS3M1pvh5aUcJjXanyaLSsb6fsQBtNcPp2KACaX3bWvgAjztPT5R4vfidStZW2dRpM",
  "key16": "n319cbgmao5hy6XaZYbep7cJbDgf3Wo1wFvdHdYLo9cDTHZVgPjbicjXvENxneqgtcEhTE9vTYKGUrJwPLAtHfA",
  "key17": "66ZiRVfrzvsyCKxzuPMGDJ54aw9t7h1knJHexgkqiWg5HvYintRpttXNvgD2uy7Ag6Ram2R2UPr9CLJbmYgmLoHC",
  "key18": "2m9X8dVQ9YcCeHo6omokkcuh7kqEaWsUveveEtKGGYYxoQhvRSzYzgySw39AeaApUmWYHGbwfZHKvvPxuGK1P43d",
  "key19": "28Cak7zCuxYYzzM7pz1kHjiEezrYPndYcMzTB8ubArRJCnA1QUovA3GHUaJFBESxNxgmmSa9Wmudx8cPR6Rz7x6c",
  "key20": "4WgLsuVGez1KPMFyEiG7fBUvuBvMDBiYAbnfSg5VcdKsxebDxCViRLiARdX9SpPVvhLC3RiHJELYsfzGx3exsLRL",
  "key21": "TNdTsij9EMpVvwwDLhAYae7asgun7ebhYGXzazScMG8H7hJKRDvyfZCoypiz92BJ1UaGreuaGP2djHQfFjRpdRx",
  "key22": "5LeBHcJysVZ4TRCXGKtKhzaXtTKUKGN9RBAHjaETYYRAuPrjupC5G6DBebcvUMuejLUQVMf8E2Pc7vJkEmKnt2Qh",
  "key23": "38gGePYukBUrpWc3jXniWr7hT4WjBCbz3Mf9KBGYZoPbqDwoJ9rd8iohhr9yGDQWjPzkZ32G7FtaDeKxmeooPyF5",
  "key24": "y1H7bMy9S4YGBia5byPEx94jGN7Uu3CXZV7DWUGRyHLRdSuHPwxnZYJTjhaTVftekqzX5fdGLnZ9o7XZYkt3pMn",
  "key25": "3kdCF55jDRkJJ6d14iPCtAErLYwW6bjUDmDdE3etfyEnXPFojwMq6ACm6L2qgwJ4mPh9UpGp9w3w3XeB6NEAahwz",
  "key26": "HeNoqBw6XaP8wU7YwV414AbLuckEePwe1FZNnvPWfFDafSNPLfEzrwRDvtiEoBua7vF3s45TRDxC37mRH3673Ev",
  "key27": "4ANEs7apRniE6gJajB8ZHjB2FX6srYsHuUYDsVcmGZYP37pQBUhw34uWRZ3pawf7zN9xif8YUnt6dncMgt6QqRwC"
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
