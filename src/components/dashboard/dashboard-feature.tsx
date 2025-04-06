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
    "2nsxhMWuicCEdQ4gr8SSrcsRUhdAkQcQocLGzHeJXrQTsmSwD5ue8zmaMQqXArwPHFV5KaAn4QrqsUDG2aCNmwDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qikyhgSjJiRyYsXasTun73KBTiRDkPQTZorFjRCY6munTeYZzSaeZZQKZG14eM5BevcXjKDwsrLkMz6pgDeEDBH",
  "key1": "5YXvCAnJ5hYKwjewGt6SnFwANevXxgo69oqC4VVT71MAPBUPpeHgFPi6FdYz5JgU6ofNMs5EFtC1neBrS7aD8HhG",
  "key2": "5c2pX4vyZoJWJa5jaMCMg4fWXUQR3tiBktiX8Z1xed9XiJ2TzUudeihWEuC9X5NKwnSZPLFwAyfbMc2nn3B1K7cm",
  "key3": "3ei6xB8NYn6kH5wXBxqGPiQHyUb375xANkpNHBAwzVubsDtVbM4142gYrVbEVyyGG6LMpmYEFzzyRuEgfprXuMsx",
  "key4": "587CAKGqyjdd4Ve1h6KpoHtWjvzWXYRQmNwv4L1n5Yf3f3MVc41rdWW1mktAfEYdRyqobTXwpkQSUJtQN2JADQ2E",
  "key5": "5hxvQ1N2KFnz97cEFpT9ECXmHKmynixHEkn6US26EXKa1Fh5pk2fcPGi3R3rBgfoh1iYktE75vogYSuh54rLrTFi",
  "key6": "5VkNZEoe7BvsvUxCaAkcRS2n6suvPQcUMHZoFAJ9BL92uo4BXrwf7wiL77TQx8pwqEFQqxmny6ncSJH9ttR7vMAP",
  "key7": "2nZnanQ4m8Ajn4P9xXyzRhqZ6113EwauEXy8VY3jEzN9iJM6oeQak9YDnqXbwfsg7Bmvdhrf3u8eyscwPrRiCbRx",
  "key8": "5VCzPEWwTaCUfssZGRh7RsfRCuaFitg4VVR8TiwQoxPGoEzwACtZkHCS467rnrc1T3xfKxf9m45YtdrRy8rtAfVm",
  "key9": "2wL2osjexySWVBXeWpgyS2Wi3JnN9Whecms4vuwTvNVRbETKPX522BqFABwdzRh2FDUAxBYrykSfxFN4gUZazKDL",
  "key10": "32ErpJbgMhr8yPNsmBghdbQwR1mJYfLayDBk3kiHAMuDuTTGiTMfD8H8rkYLg2i6nCXeyHL1e61o9hxkZZaidDUL",
  "key11": "2hj77PC3tbxBDjTWtxEjLfTk4FahU4YQifwRo5Qs7Egcftz1GVHkA6uy6vMVYiQ3mULqCMnhxsJBTVKaxLK5HrcG",
  "key12": "3K3Ph6JzPLNrwxKGKZcm4Kv6f2K6jnuLBxshyqQzxcNCuqoRj5H3fi6zu8N3N5ihkaTZ1pcTrQY19GbwsSwoYCcE",
  "key13": "xJqQLTaQrVqM243ZR6Uoqg215RjvpZFZwVVU5npaogZPddaZAQu7YwCtzREwUNEi83xrhoFqQ83zGa6mBVBd64f",
  "key14": "3imX5irTVmQ6grezqUZYm829SD98jtbVraGrpfD3yikJ2L6VtXWrtC9zsCGS8Vw4yo8ziF1GjC3DhEfKtSqUdWky",
  "key15": "5nd3HDfuQTHrcHeSnKPeK6ZzLzGUvS9QjDx5MgHcraHRWyPik7djmUs9NH5nJdeVJCrKUJcQPCbu43pMXrxjbp2W",
  "key16": "5EKLmLEoZpZ74BuwvyXiHQXD3SuHC3EUJ4VkYHurj6qPoFJys8MRnVAXQYqbN5d2uXSTZofGdc1Ng1AWDmexzZji",
  "key17": "iDjv47VK3rUKJEPpMZ8SMShnxs6m1Ramqk1PG3zpfTA4NJrXQekoGWqoRZytdcBxWwsiq8RiYVL3ixBtmryCkmZ",
  "key18": "66ptcKbQnmwgVPDXNvADKtUJ92maA2MrKEaJKaCQoZvgC5CdXtmUAiEzeR1b8TGZmdQKWWJoUcZExMaJHpPsTYpp",
  "key19": "5PCG8LtSRDzjMiYgZKYzd1WbiepNN8vumhHzyJvdpHpMj7Vk1VBPNyktsHD5UhJE2S7e4wK8m4eN8RkfWaExB1UL",
  "key20": "3tdWuSC8e9mxi2PQNogpidi9dU1wUdYcBh4C9rrE6zpnkN8n7YWXEoEy8PG6ERJpmfeTLEqZmAURR5LhuSTgKoFk",
  "key21": "5TFhdW9sFrWzj6zY6FLCkgNUXRSqPi2r1zSB3qdo2VxZK8DbjkVCW9Ev8zHs7Z1eR9kRCTUaePw1ZCFEdbkKX569",
  "key22": "2NmuJ9XcKpEDod9BNpvDGaYeTwdP17G2H6Wdefb6Jxp9V2ycNf3bEt2kzoLnXRHxpA737QqgXpfdm5VLKZ5PAjvo",
  "key23": "4BQcubek3TMsvD9tR1j5PuxiN5c5r9UC42ZAsTNYUHBqvS7KFca9y1iEXu7REnNokr9XccsTXmXJptA3Yzo5zcNU",
  "key24": "5DWxsLxF7NpGsNk6tMR6rbSp6itni2vKSpJTGYVTF9BLB3hBnEwbJPtJq9yD36WTQ1QzorHC9o4ekeLLmB59SvqJ",
  "key25": "5mwn9oJf4djh9RBMKXaspcoqBN2GndUYKHnMvqoMJP6ZNqes4qmvy5L8tZJr3pHP4a3oJydKvLzum32TfmSmfX5G",
  "key26": "5R19hWmwhetQpKQzgjA1QTaLWf23oUzbeRySZgd7r4WX3jDd9JbgsNxPQcRh6XvewChdDPVfRbtegspzuH89fhqb",
  "key27": "4jscgNc28Qsogq8ShL13aqU1nfpGN1KAGUMoDFfvBZjHr5P8bKFDUGWBDESWhhWz9HFax5UsVXn5S9SdginFnnGi",
  "key28": "ZGiP1tUz6H7RmyxVMP1mvZsYwPJcQi2bfCY2JoR33ChN6Dv9CSiwUnEAhB8hkqLYhEX28nfB7fuin8wz1VM3ng3",
  "key29": "52Njxn6jzHY2skgyYd1G7HZJMn429tPC6Cj2R42nibJUGZBLyHtSV47JjTSs216janQGeaEmo9tznkE65MBHtn4S",
  "key30": "3bK63VxPx9uyrPMUe2GHFGN3wWR6edhUBnEDXZqWDZKP3o6c1UtUZyFfJC8F6gd6gJZtqimSA9FcwmqUWYMZg5dA",
  "key31": "3G2SKL5L23axDeRjxD12gNWkWwRhEgep5TqyGwA6AbDBNFHXiVAjEk7ML78rg2gNnK5bTsMyDGrEHxNHjz3F3xmM",
  "key32": "E7LAzsS27h7Lw4Q6hsShRv7C73rHs54Yb9zCtDa47UaPmF8QRUfQJdKXTEBh5AAHLtmqQ7nPQ1ZJrKRxZ4W5c8x",
  "key33": "43qzs1NPDvG4DCYwdhwt8LSLAxyHUMbk1QKzVgWGBPauZZD5u1SP3Py5aGZraa5YA7PG5PGNdFjeF6i16c8X4FQn",
  "key34": "2Ajt8MBXuKi1U4GoCFURzxHnWqa166AinuGoCuBXJu2siCAVVrsKfcymtuWt96VVVgRDMy6Vc5eQfpKeyjsdP5W1",
  "key35": "3HY3hatqoNZwBXJjoiN2y2wzQds5hMAgwhpuWpYoXsww827E8uLKYspfh1z876P4XwJkfNX4QrXxSc5Kg1vYwwwE",
  "key36": "3T3y6qAKYoKuiov4rgaVRH8MQAdq2gjWnoYx4ouGwKhSyeeWzoJeqF2hLVgh9hLJqAEqaCgn6JuQiykUrKtuoKnS",
  "key37": "2Ni1R9dBZ6x8zdkbHpc7mBh79yGcyTyVqqCoGr8C2mdtGnaPjwLsEVpdznL8PSAyffGz2smJeiTWhZw2ThTYtcdE",
  "key38": "25KtGJH2gHCpFAY7wZnb7oT3FDGQ2Xpy2QGRRVtBGGmeyhPTGxSRLpKqN2xBcZsXkMWtDQLEm5uxLr1D2Bkoo9hw",
  "key39": "TkvVNrnb5M6HFBHxkpAMjjvogJTHqt9WcePXktKuB5nKE1jANmCq8SFF4i6JYFxpBvR6ZCYf67BPQjpPyHuZGp8",
  "key40": "2o5Fxkm5a4xjyEWQJB5f6UhHt6WbAZoiSKZjrcBfVDAnCiVz12okhq8D95DQ1vRXG7BydsxnitQ3yjhfPfQ8uLGL",
  "key41": "3wSzuU6aE3CPCgbRHEo8S3M45ZABNXjhZ69PaKE1Az8xLS1J85qCFECm9geVWnf25764qCsGRRKEjkwka3HLCab5",
  "key42": "5bNZcNutoNvQ3E39ejtpRz75f8YDLirtS2igbnUcJn3yhsTPGXj4qNE9iKJ6NA6gebujuJn2ZXt2rvMFsKSYG6GP"
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
