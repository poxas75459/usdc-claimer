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
    "3D9btJi691J6sCs9TPeKXbnwsD8AuY8VMkPWSfWq5pDVcs5uLgDf9tNdYrzWewuasjnshzpYwvL3Ln4ZBwjKZStf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YtYRs44wfuPZ9YMNxwFWYTcnK6ia94JTMAWA12ZFEgBXynqSDVgjSxVhqJhUyhFxwazqhuUJzy8a3BtYwra55rh",
  "key1": "4HQ3S9C6DyU7kiBTLrQbxXJ8qb9J6xWNmM1zzs2AmjpgJB2CYxD6Svhfbf7PJdRo4VMTE8vqodhtCyssgjRjFKk1",
  "key2": "2HSocAs7re9YvhztsYgK1sQw77UTDKxExndm4xPwZh9k1jHQ3TkwBFXBQyFQg2zTJKUrspXjxwPr3nLM3FH5ktVQ",
  "key3": "35t52YbvzdUtvm9JeTA9n1NoJbKkhaiSQP72i9pmHCBmE6cYi379xhs48B57XWpKq9bD8W1RAg2zp7WJj7R9PYNB",
  "key4": "pcqx9jn19vmMQwZMr5AZLGK89Ks8BKxuhZSgfeeovpsFSSWvXLRTE7n8U6JQvwHzpHyhZvG4h6PjJVmHmvR7Ev8",
  "key5": "5bkYooN9MyguoJJM2btHPCwg8uvSt6vFuTDEiP2NRNyyJEuUYXzRyDDRUdUESsQGX5yVHVTfUHTLg49zH8eC8rtQ",
  "key6": "1Q4kxzQwuB21V5E91Gvcaf4L7ZzmjCqUzorqGw12yEfnwYu1ZdKY5sonkVrxgWQbFuMDXPm31SnjnHXNm1KtX7u",
  "key7": "xdzK7gvYqUQo9amtBJWospscFfPRyqcqG2Va3Wqd6xUM7UWZE3Ltz1T96Rav7AdihW88c1tANpiEdUpnQbHnG6f",
  "key8": "2Vn9BYECjeNaBmgY7A9BBdMxws1d2bhk8Yiqm7TGMQGNuHPJZMBALhH3RH9sutCoNbJjFKB3jWEB56SsK377ZT8X",
  "key9": "44ajatbjhfJPeURrDRQewtzd8PbBSUNW6XpFW7PE1ys59S5NHpYcGXHMFdY9kYvHW7HuxzcM8jJQkCdbZA9EcEUs",
  "key10": "UM554K9eMQnnstV8YjAHyeR665DZShwcmtKDhHhwouofyrCtkP6GpVqSwfnxUHnUx5gZxUGP6VGtzmC9vuTZhJU",
  "key11": "3PRCYLHp8Xh4GZXDdA16qvnnpddzDs7egDvYAyCnEzrZVuLSvYumtrU2JCyN1mnP9mx7WASwCqZyFm8hExZ5wT4x",
  "key12": "3QAAGQqc9XD7R8wirheNu1ukLYEbzSJoySu6ZRf7Hniips8pti1guNjTQVXJ2kJS69YtwELxQkgHiYdBFphuTL1D",
  "key13": "5zBGYDd7S1EKMnR7t8ELHK76jMjVVAr7NQGEYcXZsPRJHq3YJFELXeehkYEiB7DsaFMRXo2QLxJFaibb52ofJB6e",
  "key14": "5kmaPPMe7TMEfyB4TCf4VpuH1LXPwU8fziqgzHjPQPvR8dGRvxxpHUgKaAuuFT2pmFDqA1bwuGRwVsZ9xk4yFLhT",
  "key15": "3rfUSypJCNyxVoauz5zAy9xdewqJMd4eZCBTFdCSk62b4BpVjY9jPh5nHHu1gTzicQaVqVvkBNTcjeQT27hPNzyY",
  "key16": "4M9PdPFjBgUXQ9ksofLne63wohSvN41bgUUWzVB99sZ6fw6J1nTLRt5qNaF53sdWiLH4aCkGgZbqeuPq5wowxybg",
  "key17": "3oAvmCa2DZusrncYgjk3EiwX58rdqKe54kWZ81LUyaV2ZZ9mP3cz6oRvaqKBo8izFnao5WFRZMVsrJGL2hzJ6q4w",
  "key18": "5ske3CP3R4cbWv2s2ZXaE8d6mxnJDeRtrBcMyanCJf5UqBDPaCRWt4K6K5adAyMRiwmkJvgVXTNHNdEQY3CNQvXt",
  "key19": "4jjm4k6PXkZGHpWPDQV4thAQpuPi72DEFkvEFi79wBbgaJejjScVmXXxwopWvWHPBS4HMFoXmppCQ8GjpadfxPgK",
  "key20": "5pLg6rL9HenfDXVwEgNJ486FR6tdpn8Mr2h3U8MejsrwFWtQqB5RTFat2pa4iAzkUYmMpQABAiVVZTvqPDQVNd2B",
  "key21": "38JmP3g9YBSFWwyjM1scz1wzuoYo2aqET93HkkvYHxizHaDE6ZxJ4Hbrj3bHqAa3EmTQzEyxpAmUZgB38D8PM9wz",
  "key22": "Q9eMjMB5T1E9TVnyTrLXznW2otTg8pxeCncZhHwUGSRrato32b94faf1Vua9B932hE2ECLr5tAtSYFmnyFpusZr",
  "key23": "3FgkNpgakXTtSf4L2rwvewDdsPRdeAqPpgt9LwqrVkXD5M76Fg23eE3MBSzvUsBV4ybvYoVjuHAHdK9o68BsLoDx",
  "key24": "4qJaJUc3bibhwDyqSCHSvKSuhVjSVZEo58BrwbUuqMvKQSo5k8Qq9zwuZZHEAJQAGo8h84NjSzfCnXgnX6p42BA1",
  "key25": "5YEwtakeiewgiDUNmQiwz3xxGuTZ18VDNWYnST5sdDVCfHSRzeT9v9gf982baQiec7A7wXHeDo8ZZvYhpc4um8w7",
  "key26": "4pAbVuqG8Hxs5nHucaD5FSGQAodKVTXy3eYPKYuSiAoM1ffWiLfiSnL5SJALMq9bkjJTLquwnpP8hcHdLdLpgxao",
  "key27": "58hSaenLrhYkVHTq2USc9C2WxG436Huy6ifoCrnd5xYpHUW7DApPQCoujbCmjtAVgikt73SG9Cp1DiEM3CTzepM3",
  "key28": "4xt7muTN7Xp1mWKA3obfgY28RcTiAAA461hJHxKDP92aKWTKpT8QT5r85nemvQxwxowos1YGZSDCyqQiYUSE5hAr",
  "key29": "65bxKsR6b7kSLA18sBU7EM2a65cdaGhDNtTHqgsQTPjLohPiaA6XUfnDsnBTkLXoWTtm5GidCCFFA12Sj79FxQij",
  "key30": "67oUCA2hJ1F6vPNpf8g4HpG5AA6EtMsXB8MLfqEpLi2doXaZ8dsNFsSvqc5SaGB4Sd7pv1rucUFAzEnLudF4zCjG",
  "key31": "VtMXVkvVtg8PKxiBX3KKTERx4b8Yb3Hn1hQa3T5byDSjbcrnTq1REvREKqATMRScC5ztLv99UJztpSwhT5Dygf4",
  "key32": "3BptmQZZZzSY44LLLT2dZ8Hbc4h71hLsN8aFQniGByyvKquJW6THGzNVyGDowQ91DbJGh7ozxPeNBi6B3SPeZbyF",
  "key33": "5Ra1zcRoV8vdytCmF1Es7o97cjLsBqsX63wuW8xXvQuHS4Eqzwn4jZZXd1vEuXie3uZdxfgTTkNHbojXJeVUjpWz",
  "key34": "3nYbpL48XRx4cGTJHwQSCwkPA5F5LHgh1fqHUszCFkdsj7m5qWry2MFWtbWyTSkKkgQwjoyXGLEqmCNDrzMXxkZp",
  "key35": "5RXMcPbv5wq9icSzfLKZL8NuGtrTUXDeoYXxosRBENvPmmbYaU6SwJy91HEDKEBQjzZf31v26hvPJYsDpQQ1Tsp2",
  "key36": "wVS9nBHcgqqZmGM6RjRcKhRGTGKvwoHYEUQ5FjN2vuxVrW17Hxr5UPf5uBGsGDXqQFTgwoVeDyk5tLxhmJfejJB",
  "key37": "5w5jJySnYRcVsoC8Rsfd7U8aAomWmYamKtJScpqrgmg3Hece3e96i3GF9iW3xrfkR1mDg9xtpsDcKBgt2ayXKHad",
  "key38": "gSPESWf8C4oRjANS1XXKdngXRonm91mrRt4RVXWJYiwrpxSrnM9nNxuJ7UjvXdwRevpVjCyTaGyF21GU8Hkm8kG",
  "key39": "4phVJUkxvuaecMPDoSUxFqTLMpwSnPpzKmsZW8ocKwjwNrPY1ie8wzYjwnxfM1g7La9BjCEfZs3LSfwnUue5TgoV",
  "key40": "3tSRufz75DfVvMiv2dZjzJ9yMoh5Kb8uxCoPABw9nUaiNxRD8QFVxKL7MEXhFXMFgauhHTSBKSSKrgE2fWg1ipgS"
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
