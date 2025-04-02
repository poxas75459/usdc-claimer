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
    "yjibgNqit2zMZJjbzUFSomCMg9i4X6UsdgA88KWqLtb4PEWc42MDU4Lasztp1bUiGb8towrgofMvgiasvdnoK82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31WA3QoFT3CWZbtCku9nXG6QNAaomuwvnv5Nw1hfc8WuEePoLNzsr1JPR9vZ7z4S2Yad6M1jbnBSahYvUcuzxi75",
  "key1": "4WWCFJXedBvG1apKAiFp3TXednyQmubLHT7HHwrhVnvsRw7tJGwKjHZgscBwx94CBZeZzjJA8uwNM3oNyVN1K9iP",
  "key2": "24fk4HtEDMy5Qa6v7wWtQk2aCXrzBM5r1US2Py3hDakY3tVMtjRvKubjYsZ25TWKQXndnPn5DvCjBFH3EwcMZVTZ",
  "key3": "52eK1Dj1BVypN9EaKwAo4ohGxni2B4uWtcuKVdZirMZx2VX7J45S7jeduJ9b7gXEUpJKRgERhczn2WBnF8b6cn6b",
  "key4": "2n51Zez4YBtqP6yRfHuC9XcxH39UdeJ7ow1a9ujCwqhwFLmaQL4j5P2pBKNBE2wnbZ2FdXSeKurLFEFs77gZ9JS4",
  "key5": "2roQ9fytcEX9VUzTSVm6MTy8hgxhgzGAaJG2K5dWeQRUr6WrxWqj5jRBjo8KtyCzJqQXMGLUufQpcE6eSawhmXgw",
  "key6": "4RsaEegz9jk8QJDrUypaXxsBwTVRa1U6rB4CKrrxEkHToqirRyvb6MjXus6T2cXY8QutBUbnihyTaVQ83JtCwxa9",
  "key7": "3kA3r3KQXmDs2gnWManZhhqms6keHjg6TwYrqhTzUJYjTJEB6Rpz71yqDuFGqiC94BwXMgWkQKfwhzo9r1d1h6x1",
  "key8": "2aPtJrbr4USye4FLN14KHBYMjm7nbyfHXeJX99owV7GoNLvKtvZQCagYGbFghWBEfKes5rkEcxeqFJcMh7aNqBS1",
  "key9": "x8zTsXm8GVvSVCMvohpGceHaoFsFYryJJnTp7eYQgv3KPcjZ8xJpfPDZRsQBHAkCHbQM9v7FJ5gUZvpt1QH1Ym3",
  "key10": "3Cc8T91hfYhQqyx7UUE8LXKWtgkTi8MM89KKLCB4xASs19erAxRYNg7N5THfq1q72LqJJzkHKM8nEUvyoFkvMTDK",
  "key11": "2myW6WTtfpRGZ7rhN3rQKZhLRUVHXMvmBDLv7mSuJYW4f4UEdPtw9F2ETzetjFpsKWQHec4g8r8RxKPrstedv5sa",
  "key12": "2AUjWiCjThgFfbwj5xypxgF9n9QvtG11TEh3mNz1aSt9JHL2dKj1KRUsGm39YvA8Y3DFc6rJV3aquJLrKDPc7AFh",
  "key13": "5Gyu88EcKGaAsjozVwVkT6JZZwH2YkHRd7h821dwSe75HTSAfBLTaPzWABuR1uFch7VLRpkBrsoa8r2WmpFHtR9w",
  "key14": "5PcornXA3HhEKhGeL8Lsj2H9Qwiqg2X4Rudnb2EkFNgivJfmRJ9Qo5QFjZgW3nGPy2iYHPFMxH1t2gHdqi6B3uyf",
  "key15": "5c8aRqY2RwqwLX75DrhPJEJcY9KLD9qzsn9e9hXuivGjtkMufAusLC6WG72XsbqRgzAmWFBw2HCAsXH4A5WtM3v6",
  "key16": "46Gekzwp2wPLmXqHpPM68wusWcW3geDt8xtxkfsdNyrHjsu4xkhuq5cmXCTPUXmo6QesnUpSx81Kqz2zNPGGuWLB",
  "key17": "Ep2ZxmS4YUW3eenqmgovfQuohvFnHRNDhBRYnKj7JXALRkD848RZA2AZkC1yvRaZXGTEbks5uYHZ9PGSe7NnZ2F",
  "key18": "4gfr6MzAXmWRGQ2RhVxEzHpeJw69A584MqGFJHhhBZieto2soyhSwKiKw3aHHna8R9DDwF7V5e7HiSYbAxLkNwD4",
  "key19": "48cXrAEa7MXW28K4zvvv9oWNCaQrDHpt2oUkKDuWxzKyLxsoV5SeCbivdRAe698NWVhQTRiivxCr7naCGANyxAFM",
  "key20": "2DebEEf91R8r2rj39d5wUEaFi8yeFEfNQbd8Xbwn7UDZFnJorPu6GMudXQ7hvpDwkhyzNJxWyZ1XX8PF9HponPkN",
  "key21": "Vfm5zvsYdXWqj1PRmDH94mu8GH9C31SyNvoRuesB8hsZY3n2Tgz2bdwHxdMmvXntEUVAMvjM3FQbhPZUwEsLNNN",
  "key22": "4N3dc7ua1ZYrEpTG2nTvXeKGbFKrUtGrs2QnQE3kfYcGnZDwWKKqjDk6KGxyV3Y4zQutascaVdpX8EcZd9nnPt2f",
  "key23": "EoeuZ8rGrtv6rkQN73aVZPGJwk2CqYkwtAcVAQQw5a9j5Eoii73bVHSodkA1NhxsHViJFyroZidHy7ZvgqSvc64",
  "key24": "3ECQnyQHjtVQ7SrukE3y4Q8YUe1ip9SLUF1qBud3WRdrqub6M3RS5yDExW7MS1Xm4S6jPbm6saRRAvW3dJi2nb3K"
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
