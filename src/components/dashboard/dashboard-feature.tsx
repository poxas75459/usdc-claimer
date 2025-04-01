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
    "TQkfBGQLsiTjZ6QwFkQT3nhL6NUL7XS391AQaPqJcxM8dykhhVDAKkSUqbeX71TmC3R9MnpahSf48EG7LRgJEhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kX3KhYDTHKDmYJTS4Rk2eqVEaNWNhRzpE6QYSJi735zMJszznQ38mb5C11whKwxfMEG6r7FfYqXCFF1muFuB1nf",
  "key1": "2CmHrRFgdUpmPTbyEFnrYBT8NrDjFwaXoheDCAqvCZdGb7AE7fuKvJyKK8nm99LEfDokixK71jx1awM739hPPvzo",
  "key2": "2TLxzDkpQYe4eGQs6XT2bdei6PjAKSMPqecdHXYeTji87yCZ9aGoyk5sLiGczwfiPk4w71zHjCyV58zwYzqoAkNp",
  "key3": "62WEVFMVAA4fq8EaYvGHnYg4mF1HexanzFgfLn2v3gt4MUUEG6LA4yEPaWLJmRBpcCAaSEAHtrcveKu5XsA22Keq",
  "key4": "7xd1So9ppFqGdm97zcF9u1NUGQWAVH3eQnEuFF3bTCgbBHfnZUaU2d7zkXAqEEWt7CzVNoKiQm2FffizmLJX5wo",
  "key5": "5Wofu45nCPzq9fnjmxEu34FbjwAPuPQtJHYoStpEe8REVSHaj1zeu4NvL6V9Cg9bXs46wYhRwKdMLRstggHjFBwm",
  "key6": "5eoxH1HK4qXSXLxm4J6TzFAkGyYZRY9PTZKyGSZiFEcj6hKZHJZ2bjL89E8SsRV6mrHW4VC1usPVgNYJ6EF5tvw7",
  "key7": "39CyKm7F6CoR1rr8zvHjJEnjF8U1P4kj7mu1FkET1hZPovVrtjSJygXsP9HmZbQwB7BNEktTQkpDerLabTosA7PR",
  "key8": "3SXNeKWPaSopBjxBNewZqjiNW2pp5JxBMwHAwHH6DHVWSg5zmUt1hXHVAzMeoubUQLyQrc4qTAT5vhR6Gd1cr16p",
  "key9": "7bExFYCmt7g1tKVbXvZPjNRhPFrDehhYqqHh4pjnCzbbfdvpMpaXo9J6wZyspsFHriqfrFRMZeUdkP7GX8fa1aP",
  "key10": "3mLGJYphXHLUVN4Nk9VvdzbSsZvGp42WezX3sr6ddrg694HuDNTNCBw4v7EWDKoG1bkazUJbxsnh4Np6LqXDFidT",
  "key11": "5kypkMQ1epz8CeoxvQrknpChrQo5Usd4rQaaNGQXTaCPhgKPNsAt8jLPqxCBeQV1zkoYwPoBusmtFF4Qs9nj4twu",
  "key12": "2ubVKBnJ5AVnmD7KbNkdpVaDk6DDZRDNpwtZcwuJfeV44xkVkWekQYHvRb9YAetjJUZr1LDVhTSku3iqrLGdzZpr",
  "key13": "5CKoPi2r24nDEvaRYc7SfVYFvpNwv96wBBsV5c1YLncQVn2tQFewVFBoT8WNiejvr3fZfz1WHmcXZF4kvtw7CdKs",
  "key14": "4izHCzKQqhPWRzsL1zxkaxd2nGdVWrnXUXmETTuB3JizLLpNSNBQAeYw5Ytrvpjzq4hvJcQSjRbsva1mxXkhqzN5",
  "key15": "4wREKxdndc9ttCfJWrAYQpjNwuXt8Fvc3nTmsANdJm6WApJy76G1wxHy5KrKTUhutgB6AwU3ZFvmZeuA4RYhWXBy",
  "key16": "q7y3QqtrikXvDf9bSas4GVvNutXXf9c2d4Nc9bRiAU299u6twyL94r8biFtig81JBLgAuaBMZQCJpKxjfjmXQZN",
  "key17": "WRhf4gBEdzDwNrG5UnVKHNQXcSzLzH1ijqoLEQsvtE6mEM2bDEBan6Hg4yFSWBrAK3EQveTikUR7vL4GjPMWZWt",
  "key18": "4c93KuvBpxKHzxm2QBQLKj59fNJc4r9k8364rQbbGY1xNPxjjHwvAuqDp544fwSCzuEfUerTqSLhLugbaB3DTcnY",
  "key19": "3MuP6yeQeXgDWHqq9SYtByoE6DxfPkkqQ9fY6B3vNTEyt3Vf9qqW7YBDBEu3gmgqkzZj7x9mUpYHNyBQUXVuhhTG",
  "key20": "Z9uxg1c4ansJyjaoF2YA6zZC9Wu7yqYQ9UryrxzxrtjdGxdaFHP9JDjU9p9nb8FJ48m4tVL9PJJvH7CMoeswMV8",
  "key21": "nZTLuS7Z49LfVKvHH1NRZ5HKtHJzR5qUM8hgifyT7ChTf9oZicK7K6QCF1k42TYrLVoFsKQ74xiYP19TnkmH4P1",
  "key22": "4gFDhC3PMwqHEJdjhLBxtC4WW7iWfKNPF5Gnagtwg53Z9dcapWY6V3RWEgjk9GnmtoZPxQuxez8fg3WDRvDabTvY",
  "key23": "yjtapx5UWGKCeFUjRvD66LhVQ9Nt9Fh9dMx58ga3Qdd7Frn7WbekSWMRreNsVwBoMcCuqg5SvV3DrpMbUFcC7ZQ",
  "key24": "2oLbTSk3UZf4mKRRjUB94ktaMKHGAgpW7NPEW8txGQYoPdLnXAcCTZwZ6h45GiK5SzdQ8jFzaKM4LgotpiuEXiLq",
  "key25": "5XvTzAQcUz7A8j1pTigYgr7khLDE8KDGd88bRCCRRdV1Nvp6xUqQLyAfAHwkBWM365ypLMABeJA6mcX6FwuCQT7C",
  "key26": "4EhBRcVYmse69M8JdMKR8BuHt43xLQomRkJKHR3iiZpHeiWn2Fz47owq12U3rSeFhLiiT3qpoftucdSzz4TFccXN",
  "key27": "2yMSszjWfApC8mkwCeQFMs8ad1guKRFdo1Qwjx6AhoeP9PoktnNkdvH6DvGBavtKWNibLtDD6uizDpE3ZirLk2Ep",
  "key28": "j8jNTQPUGYDeoWyPWzShtQZ9fqD1SKjifi9pbwygSuWZ2aBFcGDotjA3ZzzKhTmScQBfqirLtRGXSKCr8sZ5RGp",
  "key29": "djcRRbBWRLUVQhDrRFN2c3n2t1XddzRx5hBPn28gZupWBXYBNfiHUkFzr63GKXh2DmkoSmpiNiE2csNr4yadHQk",
  "key30": "5vBL3PRMYKZxwBo4kj39vE8d3m7pYYgrPgGfz6vnWCTvLcz72xs4zhXT4wiWzSjaxphDN4QJ5Wit7wrQhN86o4xU",
  "key31": "3eNqEVLnPRKCtc4fpCBA8T4iaDQvodWfn3bg7DYq1iRG9AD7iUBqvqRtG4tEd5MbQtYrEf8UUC2T8VKMw5udLRzF",
  "key32": "5nwQoFEcPmMVQg2W2hJiMvjUf7VJGYByKxPqs1XyxSAgP7uZiCR3UUt5hJTbsvbbi6e3MgHtywzqkDXatRW3Huyd",
  "key33": "3DdjcY8gSSA85arXyT99vMKFSu6fL6ZmFMoBBmYUyTcFocj6BwWnryW6Z8rJFV6r7ktFScF9kXH9KfPYtfgV9obf",
  "key34": "5ACCUAkvgicW9sNZnJbcs7KAGVuqMeYLB2oonu8wQgEFmRWY87yarPzE7AYfNaLebpLmx2VkRQ4BkKeb2UxGQknS",
  "key35": "Nq8TWK36XnKc7xX5xyVK5pv3beXHaMZE6e8LksCNWwfxRuk9HSWD7Y9A1X9Hr5vVP4LrgEkfFBN67jyjkTXDHkb"
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
