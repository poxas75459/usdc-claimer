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
    "2Y7GW5Zxrjwv7kadniFsXB2k5NdmAz1EAGFFzi69CGjj5fqUhFMru4o3dpoJ6MrfWS2McteMbacXi5UBJ2JhULA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CjxhYjdwVvHCkHmDRRqbgPuzx97ZykqDNLWznWWSo5PPEV9SFeq74UnxPc3dCj3KGjSFQoEGGummyNBsAUQ8pKF",
  "key1": "3bqUuAteNXTX6f5vFTGuGkykMpg5VLSgxTtonhGqMRiZqjBvpke1VqyYmJMEjfURTU59HexPrmXbxMMZiVkEV44J",
  "key2": "2EiWv7utsFnMf2q7yUCdJ4JK2xexkatpsHTQbZcS1H2wxcBwyxsFV87ukGq1ktcobT8sjSshezxqLVvoMAB2zLF",
  "key3": "3YzTtEwaMb1D8yMUxsYmUSfBFC31KQ1ACUVwfBQBVeARWoAGE3QFoTa42pjK499rmNc8TV3BfpDyQe2mjsagoqMS",
  "key4": "59gf1KaHiwir2e18nAsx8mCKCUA7TUsxh5N6XSuBhJztyErgDFEHCVricR2oGNzuh5M2Ei8A5xoPALsGUERe6Mcd",
  "key5": "jitFSuyrZ31ZSg4cqTEyo9ET9cXP3i2AELKTjEMekHgN1Z4tUyk6YDLfT3H2WMS9GBP7tjPFs4Pr1gYyHQfmHZT",
  "key6": "5B6Dd1TcK29mCLMK6PUMwoTEQFkc6bwBcHkukNNG8zKSvQkpG5hvhCSJid7cj9t16TyaBACvusEKySZHXwWSYeXZ",
  "key7": "3avoWsFGZfp8e394MpeHoxf3ekNnjAvJvLK3S18EcQqLR1wCdyTCZuPiQhm9mFXTqtQKBb5aRaKg6dPP3u2L1cQ9",
  "key8": "4pbjxU6HAQWrb5n77pb2mLxCH5jDopbHEajyHoLE9iyZnGggc5nD8pj6HdLoPeBkfvkGkjVNZNYJEkerhCRHr7RD",
  "key9": "4Ew6uLv5hustUKhnLtcQ3B7ugVT1S5jHZBq1YHfPNb2w3MuAf8qvieLXt16LsqfR4UNYE1J28rFkbAiS7K4mfLdW",
  "key10": "2cJUbt7LwjVSJCe9PnFq4DLKmeFTaCivcKQUdDmRop68DAMXzGa6zg68NZxKHf2g7egbtaiqXqjgEGnsQ8kJiWfP",
  "key11": "2okiAs1LpcSDz2jVnazcVE9G5uUm4u5TqR9niNFsqFLxjdrbf4ZJPz4KmjUJ9LnJQMymnXnoN7oPkKjRegVxBr1W",
  "key12": "46Rwopn6YNLenVPcVVgss3n9XLNAe7nHELm2PMkxtPzCX8d5SnrDaaj8jxd68q7tmJjFiXYrzB9pFixwsRunM8q",
  "key13": "5w6mP2BwFCG58gwvSRWtRzypBL6osRqMhZXJiEjerYpjYoW82ZudUoQyYzZMLhcgvrxmtwvw9BKRepGw8xPDccKr",
  "key14": "nfRcxesTXnNNM3q5fqg712qt1qTL3kRZsKsM498gQc6aySQMw4957dE14A8cpKk79ffnKJ9R5tBZsbsQ2BaHRRK",
  "key15": "4F3HevNGQoczajKU6wEJpgqRfjFyvt81Rz5oEya68eadN3wptbmeFvvi7jXojGQQveRras6QxzwHuj1Z7bMYxGm8",
  "key16": "U4tukWHT32Ts6bZH7vxHbXDuBgJtC7amjWiWyrEZZLpVQ43Sq4LRatswk8UB2YPHaFi4YwnJbbvZX5BvirBbP6d",
  "key17": "mvNBsYxibbsdvPDk2CkfZmBGkxgyK5LfgS5JToHFpjuWDAKGkSQVjgaWcMQb4eHDmVcBCFxgipqsgpwSCFwY3E6",
  "key18": "46U31ZoSq1C67111NCqkHiCXiyBRsHWVWNZaTBkTAcABvUxHxYLJsKuCaDJAnKMg11ME44i9t3CjLTryMksS2dWT",
  "key19": "2emxxi1hqTZLLKKCwprLCj68QgzHYoi4SjMnB59vWyr3sez3yvKgYcdSReNcXAwhdnMJnqEVb21Su3huNm6P33YD",
  "key20": "2qHVKy8rmmxJHjRwdiZiEZTRcQW2L8ZqsNSip6e6453LRatV6HMPbmsaUoj6hUWHsFKTpSUXJm24ov82FqUSQ8Lg",
  "key21": "2zoMFDEiQMitmhNhWKKXaPs57PcXmfCZSX1DMJT42EyCPWhthsuUAQCW7ChHWMdoV2zoLAaUgGBHyRP8FHJE6KCi",
  "key22": "5DyYyRJTrc3FgU8vYNS4CjhNKxZRSQF7BYhaS6tkR4k9c67xPC4jr5nLP8RxEzrgJ765CPcdH6a493pL1x6LHxhP",
  "key23": "37mEAfPaRMiJkafJZnLe6nDSz3mV5MKPxSD7uQuABkpzy1MJCvJYvyBTZUnmBHzywXon5aH64FuckB84ZsCyAXJv",
  "key24": "5VhMmePD2kPya11UdWoJuPXtjJgMjCG7VPnHP5HtyP4ZzdjDZYaKtFL7diNL8VsmvhXoetjFtbw9iKFkGF5K9E6D",
  "key25": "4aEBiJ29WKjF83EoFizLpZeAo2HkVk6PintwUATifFYNCnodUQ6KSizfkdPAdqiHGvezc99G4N3kPgBdhveV45bD",
  "key26": "vPzZVdf6vvFtvwyFHbQKLRcrrKYfvDgyk5RyUFfEgt8NSoJYMpvHgW58ZafqDpBtR8HEnKcA46ErZ5MN13e3V97",
  "key27": "5uH1w954S3vFXF3YaBH69ioxS8gfk2LqAe6Y8jfuPMyMgVkYbTTMX232acSkZNrPEtKGQdVtWnHQxuY8VAGnob1o",
  "key28": "3okUmot4jAFPXTjVsF2xbaYWvExUVab9qUp9pjqwF4pPgwkATbA6KodVBrTpYeCUAoFhDj2NqzYTdpbaohPhTf8D",
  "key29": "5RrBkTsF95csCHJu3tfoB1dQAw3jZTDbP6zbiqKBnWss4aAU7ZWXDqb1fyqGCftCpd1MLnkwdiFcUvGWMNrQYFNj",
  "key30": "pgGw86ZcUQWVNadXvQ73im66GPfs3QKQEVaYR1xfs53eCozrJYg4Vj4UwtqdGnCAY8DZ6eeeCV6xCij4cELJq1o",
  "key31": "3ECTs5CHZrTZe7J6GKqGThhKLzax6Ck3FFytvPozH4dBty2gizJSqxLZLii3rGurENsEwHuUP2jRWnLM2DFfmz2R",
  "key32": "4ftE9k5iLFtL3UEd5aGGav5JufXqBzJGbz8ntuFehMNSWh7KHDTSK7tYnruTZpMs4iodDGYJuGXjuwwmCdR9mG4w",
  "key33": "41sp8WkinwSX9jxnyRA7Fyi6wDCYdwVD2Dik1ezgd1fQJ9QpFEoGUAqMk8ZbD6kE82crurr4FySV6vrBeDcb7RWj",
  "key34": "3E8gSeUxaPVsVN3pjunDaw946paWS1N7UoYLsuKio9utMUKY1HGZTLE3QYxoHHKarqCyNGicUZQg2HGcJub2BaTJ",
  "key35": "2HH7vGDUhhPuFhY5GbMCfWvGZLMJ4iL9Jq7GxAohcs9PpGxiQmxHa1AE3sZQzVFxboDU3ZjeKHxH7NBWLK9wZFvj",
  "key36": "3EuDkJ6zk2X2hntvkrfUABuAqzzV7sxUPyLmKcg2b6FigbVKJNFL55uQukuxEwomhQswM8PyPmNeThZy74BEovrM",
  "key37": "4qiwN2vDyRaoAhbmCNyWxrgyTMMp8ZnRksuQmQtmXwuCiwsEXiFHS92iwpWU5GGPfewqieCNP1K6ae4DsRHV7yVD",
  "key38": "5LsBtqbgYtqkxTDLjkP3f5qu8iqFyhMqwUMQWYuDryyZuVVobkfyPGn3tqWguHB6YywjkYVKyaFeKm11rusqoaQS"
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
