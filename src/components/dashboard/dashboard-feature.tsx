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
    "5e3revJLfd7qgXw7BcpLt3AXXw4j9A3Wo6fd6VRFRTWgrqQYihvyrSXvQTabDgUrsxzeJpEC7SEXZ7kiUJvBKCXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GSe34KRaNNTakde6oiMAcZkTxKenNBym8b3SKyzRmVpSEHMfwGzxCrtgpQLUqNfx897TwP73iQ3CQ8XEQ7NUipg",
  "key1": "5Vemz2eW8qPNtXKwvk92pyHBWdJx6kYGegUtWJjtux1yLFvhtotaGstcPpjVXMxrD4KSnVWWYQBkdJgow5ZiHgpC",
  "key2": "2gCP6dYMVAPDJzNTuf2HLLa1VA5CxU3XBNiRc5aBcevzSGycaWQUyH1jEamtQpviFtgUKoDaLZHx4aKSsqRBsw4Q",
  "key3": "cALUdHV4fNi4c5TFx1mSUahc8UzFDtRNNgHE5kudgWLKsLtsRn6ZNQzcVv7ekdMBB3epNUe84bkXDkg8cNeo7eC",
  "key4": "5LPcRYxRt9QAYXygYJfDqJhT32ugS3y8z1BdAZf5Te7KNrL4UaZx6oaFW9a7sGAaHYjpytpudihLFziRLmwTsjWm",
  "key5": "3QRVDGbHVqxKJ1dbJRcYmeKXSWEd3P8NzVa9jrnE56RhUckq3zDGbnFSYBhDX88fs882oqhmZxak1gwH2kKj5Gwo",
  "key6": "5CXGQwChMaHaRT5hmDLQDmt8MBgwZC4iUJ857DAmvLvYWBYHnMCPpzSU78svQYKqJLLgvcFu38P8sqdjyZZNvnvS",
  "key7": "3A1ofsEWA2w5L9TZdVFHsxq5dc9Aung2FucMJJcjTSTeUoLCyGWBysT3Qc3efkPiVyJcmzRB5W1bAk1XUFvqXqnj",
  "key8": "2oaSbwrAKA2D5efQwjcxXfwbQQnb26YUjhjtwHiEWguX8PczizFTzXjucNpoPACjz9WyxGnYwMcRv6twQueqFR6m",
  "key9": "4fW5BAcnB4BM5bRezZgwj8J6FHcGsPPZrciiGRFA3N66K2CrovYo8YNCBefJPwWRSv2gFFyspK8m8TghXM35ZHxh",
  "key10": "2SSmMyVi6DkjjfsNLg8AanXTH2vSJuRaRxqzmEmz41mnquPjfTeozcBqSqT8MXj2JxqGeqtmzYhw9SYutikf7QqB",
  "key11": "5r9fSFKg2snmUc3txcCqeWVp2funk3QeQjHaZSTeEYTSjjdALthbBgUCqmC9Bh51J3Ry7XKZdNBFUVmV1sg1ZnaP",
  "key12": "58W7GeSbdsTEUEnGbAa4mUrAm4VLRzRkrUeh4WoSog2AfweK5KiPCL7GY7oMcj12kS9eZNvRempQibfHS6HQrvwH",
  "key13": "5VtbfXBnGmuTbjax8LmatftaaxuLou6ukiB12VfupjyCqth2pBhqNK2hqwYHVzumKpN65sJXoZCnrzNQmrKiHv89",
  "key14": "hjFgrXJW2zg9mfJqAD4Q45qsstSohB2ME2aKnW7twaMVQemmCjQwym6ZD94szK3B9tT8cP1NRkyyQvJBY1CzKs1",
  "key15": "66Rj3LiAUWWzUhhXiGCv7Mm7ANPiaoHskhym6mqDtMbnk5YjqZawXfqPoHwgBhYNZxYG8TXuKK3PokMefDsTfgeU",
  "key16": "5ewAfk3pN2cCxWi4prdFBoiwjPG7gzo23KW9asCAvkE9podZmqzYb44U5g1vxumbg6pqhF7Zna5xvtxdt9UomzGe",
  "key17": "4sxiSwSuCy35kjYyyoefCEEd5fzDczSXDGzxpugW837cYtAJUZoEmKv4yGnViNMSVoXA2pk2zyNUuJTb5rTLErzN",
  "key18": "3LySjy8Bx6agnAJzqbvQTQSV3zDzizEiXr3hnhyKNE12jSr9HegiKL6gKFNZhLjyQYUrPcCD2PPWf9LkGN6nuRUo",
  "key19": "4kZrKLxgwpMdJds9hatt19jcP3HbWdoiC8Qo1r2rs5GdjCSdBYvdqfe8gAfWMry6Ttbqhy4ubzD52Uj85JFz98T4",
  "key20": "4g8LKb945M6k3k89qTvXotnojV6RAvzT9m3X2sHYFkmjT2KdyzLoRvQborgYzbGZwPR4J8tQRMn7XpibX9mvecqK",
  "key21": "2ZhNuqkQUgRa5AdwuWog3iKuEwQ44wi3XeHLQmK1RzorKMYXY1sztpqGiULu12upEoATzVdjN9qpUuGwKggNJ2xx",
  "key22": "43LNrWYRPTSHF7GLSqMWh3UiJ9daonKdYzamJp6b6ReeNpTWjaNq9yso1TM9jJa4kRW2X6bBRrDjindE9XrGGxq5",
  "key23": "PJcugyR8C1mcFYEaWGe2caJ8VVrFZBtv8GKnGHmWW1Q5DTbaZ4qv78JsctpoAFhRFLvNR2kmgrUJX1UETLtqxfB",
  "key24": "2Wj24qWpisWgVhBMKDAdw3BSC8rE2vBQBbbVYoiDezEiZQXxdpeYEfttg32CxqbPzMZTZGpftfEjhqeXnLUjvz8B",
  "key25": "34D7s9pVFyqk1GtHs3k9CW8PGW3rpNnwTkMGKimEHc84VTfHHRxvRK2KaiZCCDot621Q9mqTK6xPgMGs5aZYSuQT",
  "key26": "67bX8tPojYRxy9CLhjzUe43AxV2DPsqQQ8Sw9puQdc9iS4Tu7EeLhNrVHQTwBydkCX1RenYPuYVeXQ32jnYMx6VM",
  "key27": "2uYSgNZwwAo5SvgEB3qwQ3XPpejGCnpodb9ufJfQ7TNGTqUf9VdfNVoUHWSCTMQ3tWuFc5CTNAqTMvw9jNxkQWam",
  "key28": "2iy4gDALCJaNH9SgsTf7QUTKL4Q9SHCrvaMqrtxv7819xnJxbGpcrPQFaxVSM6hCJyazXaLhB5GzxN8ZfLgQHjYM",
  "key29": "2yGp5YVGsZnhepRfi8ALvL4GfgQ5JnxvnzjgRugmHzJGsVgoFLn3ByvTxVFpF9QVdyeG45whwD1mPUnznz2X1i69",
  "key30": "Ba7aDYXbiGgaad35qjwJxppT5ezLiXRe3Xo7T5xeMdojSBjK1upnPVLFJuVJAjKe66RHGteiG95Ch5kC8LtSmDd",
  "key31": "5i89ntZYCYnDk2nzBt5zA1uikJTsR38uRQDdCd83EcMtafweVoaVue1RfKGheUc7pQA9c5DrqepaKykX3piDcTNv",
  "key32": "3wqLHCsJJ1ZxrggJ9ZVE4g4L5m39rECoWDfibtDubLVqMzTz34Dr7QhNiMEeyUGQjguRfka1961oUvgd9w5KAwXQ",
  "key33": "4eQDP72P1hcyLd6ajxGyixm7gcc9p1UoxNbgtB3PHx4Ud36XaQEc9aHE5zHxZa2WYf8xSSC9Fvo22dcFQpyhAQ1h",
  "key34": "5ZZbmeZaJUfaXCUw6Nph48UMgK9gm2uuE9qHiV9HWbL3jc61LNyJX5xUkaLc9p4WQG3FuU2FNnh9cFPXzsdzYGyA",
  "key35": "4nbZc9jd86vG9ocW5HpgBYCps2H5ezqukpGCrEC3fEgy7iUP6QXssuYHzg3QZTk3kKy5V77XL4i8u4q6AhzMQo5i"
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
