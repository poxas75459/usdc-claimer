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
    "286EKMsaMMwvymZiMH5jwgyJyfMPuwvQxu6GvmNaWqckXMf8Lfmj8hQ8CckJpdptjSucJeGk9cMxEWPEejdUFnVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BxCFS41DGWHHvr1QYLiGZZhqFRuBhWUcAbKsmNx1rz4THAher6d9hNSHWxorNedZJPbZmhwAWrrjn5QzhsLct5m",
  "key1": "fy7n5JmQJTbLhCBbYqbsSxt2B76mexNNQu6LzZt5XCbr1TG5LRL8FS7pjnPicCuWhBYsaZcasDkTN83xaHep4it",
  "key2": "2vF7xmHtHZhiKrhefty4sSgS41AxW7zheJejWZUHGsM1rKYBQKy9M9uzoRL3t4fEk3LtbHNTNtFkK9sGNT8Xqqv7",
  "key3": "32UNFjNJQhouqZvvzLJjYVPmg3fKXnVKYkZ8w9X6AS1FpyXprCkK9qhDd5vfzyQEvhvciZui5e5RfhPFx4oyXmvj",
  "key4": "2qCCpWFqQ33YBsohxf13oXsGdG4n45BA7jXe5fCoJkdWqDKu1CaGSSPgBpz3AzHyauuw9SNnMMfxkgEDXpf6TTxv",
  "key5": "DfYnmhNeb2vDWcwDsfZCKH6P5gyWevHgiQBTc557Mt9tLVipLcMJpPTvYJruiJ9W5ZMp6FaonMcrjhQhmoAGFwZ",
  "key6": "4DnEGMSPV76FMqtcyjGR6bm4uvH7o9U2fwnygFfKZN5aFsTdhLrmaowockGHFpvYtTDurNn7dnyrxQf8eV3Knzch",
  "key7": "5q6ArqUg4HAE29g5vtGXUT8GNP8tEcHfiM37o7hwrSDdgqkYJc8Tg2Ji5HFaqXscWMZYepcDe46o6SKvyfmctxkK",
  "key8": "3aYYGzXQADKMseYBLudCrKwkESRG82FzXW7dRceNCURhysvvc2kgG9BLp1i2u61sxVhX2PW5raTUjcsjeQJCuTc1",
  "key9": "25VKZJCBqwRToj2f8wRXWYRaE63V21oMm9hNWWhVkR3n9NsNb3Cb77rSWzrYFMjNCevCP5eDvryLZVW5rtJ2UYkK",
  "key10": "4vaJe5PTdCN3Gk5iiL4AtjyDnAzwirDMCkFAZdZNeaEDvfLZuwRmSXsUgxyCX9NtjVQqW41nkBFzAD7G1qEupNFj",
  "key11": "2kATCsQRyqviTcZ6Rs5iN426XeWueDTi2Vv4hM1gKnvrrh4Najedi1Lihie6dzveWv9dMEdEkZMCwx2PoaHVmbLS",
  "key12": "5zbjL9NELi5FeFyfUTPbFM4nSFHowDxvXpN9qDCxKB5SPKPT5JvP2TTvqWYNG8mgincBrvWu1bJtPvxuoNH6KEJr",
  "key13": "9NjmTfM1x91T3YNJdLoisk2mLr6MjJdbsU85hRpN51wKWQjmXbq2AL8BqdxeyZwsqeXvqKVW2xbGhodEAGjmSme",
  "key14": "38UvzVDUeMd1qgu8wDgiKVsiLiBB53niPKHU6xU78hkvzgZdg3iKrDvN8eE5cuCaoMsLDhHY1ZzC1wSzrXN4ATbv",
  "key15": "3Xttq3G2VceQq85UaetrqSwkaFEFeougzXAhW1uD3MmmkCviFXmbEjJwuVa1BuorCcvPCGXA5gLJkQ8b2f7kgRWD",
  "key16": "21HStCtwLnNU2M8sBcP7khvY4fEZEKGVmASECdqMb3DReMgGwAFjEGQrpQuqD1GGBbb3jXP9o4EtyeYm43dXSHey",
  "key17": "52DcxuQadi3owdnZufayPiqc56396bqxpg4cxsY5ojbFfyq7pG4SVD1k1sGQYzEqu2Sc3F4VKg4Nvg7BZoRbUB5S",
  "key18": "3P9gDMxz5UdoxGh8UKwfkaBUAc5oTqyoPUuCd6pg4vzERwvdicuCbEYBc3d3GS9SN7Gw3BihRBSjEj34djXXfEvq",
  "key19": "5tubJrFv7GLsHquTfEtfh5Fd979HCJDdzrR8F4D6GKEun3n3Zx9LpXrnSB64Bn1cXa1Joh8GuWBcArkcqev5QuyV",
  "key20": "2PSiGzFvUMoGyQYG2ycpZkLUKHUiZb95p1reaozQgYSKprexbakg9GjWnKPEepd9yCpbqerZfDHgcqVKRgXBiKnE",
  "key21": "5LZxeaKp1xF1kEohnG7CoLa6Uk8zDmu2pGEW6DMFKWo4sXaFxzUxPyopZEnT8e8NkLqcPM1vdvzdWWG6SCKcj149",
  "key22": "51wSLhL3S7GedsXiv53wjf9tDaTNxNvdAaks6CC1JtaxVh9Fv8k3WgSFP4JBn9WpSw22YyY31VC2ZDJjw2MS2ZpY",
  "key23": "7te8cVLEdTq6nSifZJNic87ArXL8SfJ5hXHCCGpy6i9kFVk9xtyT2E6J4HMnYPKqKMgmhu2W8nQbXtQYboAKcPB",
  "key24": "5SmaffjKaUPNbkhp8dNVmSPGU7Zzx31ymwm28o5qdNTadnKAXnnXweCGhnoZR26evv4vFV2bPXMiWaxjEx1js41m",
  "key25": "oypFux5dHRH2hoqK5DunbWEv4LJqEA1uPcJ4QCn4MnPYtHZZSi6CduKX1VvN7aqHetuCb8csCugfq92jPhfTMkB",
  "key26": "v3sXLhDpb8BPR7HiFa7B1YQAX3SBKb7GoWddX6zDpY2Z826qzJGgZJff5xLqVYBvcBaUEaxpQec1K7uRCRnCrHC",
  "key27": "3QeFFnwcgAFtLQggBPcHyNcN2JzcoLDu7FkKpx86Jec4UHPnFteFvuJiFHeCX6fLJmbTyuqSfCu8o3v8tLwnLnVK",
  "key28": "5YLmo971qVHCQZQoxebdRhdqJE2wCKM26jXStuERzkWEN3tLxSpG4NeupTqUqjyLQyH3fuH7sg5ynYSL6AJL3jG6",
  "key29": "m5ZQMtbYoLwHNyAsiyufrQb6jieSBbqQ2Dk5HzgWiMAb6HE6pzN2VnSy143XqxdbbSkwZKD4G3YJDr12Bff8jFZ",
  "key30": "4t9ggP887RjBSn26aGXjfPpfnUdZJjfniJJsWtgQLBPhXrPns3vx2vnXkhvwp7gBmC5zpRu5B1pRVFLYiLmdKfDw",
  "key31": "64HmuVoQkgHM86S7MDhrBa6kGEtK9ejmQdAo9Kqyoqw4aEwLfRPbBC6Zq5zPdVDKXr1dMsrS1VojZrgW1GBh9Wfs",
  "key32": "25U2Ffmx7q2Rtk4n7DkwLa6ZETfKyychhH3jGPW59AAEg9ExfW3TryaNXbwCNaDfLnQB8mH6cHu8pqtdwwuoNUYz",
  "key33": "TgCobANsjnEnkggwZ75qNF4yHdPmMrKyQGjCnPASq4ZGmfgvqbk9EMWY4jFLQA7M9i3pHZZWRRWnuG74pe4UXJm",
  "key34": "2ZXCwTsNsah6c9uvzLjukM5eqNDuRcLBigbGDFsBitsArCFhrP7UuAW6s5tWBQkkaHenWCZbun81QPMo5Baw5wxi",
  "key35": "23PkLWrVcSkb8uZfK5EUNhTnKu9nVuiZhDk5By2fJ6F6osgVQVvsHhuvMV6giipeAWSQmMSUWdTk5t312LYZTmSi",
  "key36": "HoAJ9irhVK2LRCqEzA6GiFMg4ygaBB7NgwipEL3bhswXiGvHDzT7c84kSTZaFHz3H2ymCvtcqpyGsV1WHfCLtaT",
  "key37": "5z5GyXiAcPqsjebq7hP5ELZVCm6fHTKnrPcMcvM4uVtNUj39sXHFiiUNPeQeAtnDiF2QSVfu9As5VarMVPbyPJ4N",
  "key38": "3Y5wc3fNoMVo36HNvDqo1fj2sg9BHYWTMTF4W2u2P9AdZ71ngjjPPL3N3bWMTbHu2KvGxkj5MsuixrnVZbmAv1ze",
  "key39": "3eKfi3fssBWcfvZPDm3tt8vMkY6kKjQhkKBUPCmT2C6jRG8oW6AZRQFarTkcZZVyndesY7kXYwsyJfmbNWMK1Tuk",
  "key40": "3J9L1wtgH4kEzLcy7KBfmsseipQGucQRpx7x3FZdHP1F2kMkFQf6iCkcKrZuBcjBF8J1LiQDDknKnDNj9k4GdhC5",
  "key41": "3yKvhjqXvpADJAXBjGcqjmvG6r8kyj9S3eJKRszYXSv2CT9AYdpmFWdEqJc8kdGCvAQkNGvQgpfHHECDfUUkUXJx",
  "key42": "eDJ49hDzD5n2ztdZ1nKDgLGyaRM6gMk7uF7goNfqau6TsW1ZCm8BqrN8PSHaHShJ8Ad64WcK47atsKn9Bapqbni",
  "key43": "KkAAAWyDbeqNdAyBLUxei29jEA8KA9vKewDH86hKKqcWAR9khX1mrvcn8nDzZkaV7BnEEq5QGgfiGpa35Hu7Z7o",
  "key44": "2DgutqTXzb5TqfYZi5z5YSZJZUxMhumXkVXGUSvQjYYEmjzwwkqRSRyKPehEY4DYScgzaQRQmQMhb9X85d13jD76",
  "key45": "2FuwMZLwC8UPjXs6cxEdE1BptibCiCGukpSGG7Weimi26hyCCaUxU9wDtaA9fLr1F43Kiu45rupfN5STD8bniuM7",
  "key46": "4J6xrsTgrLS96aE9f5AaDWJRHY92sW8FvwokduvxH71x9LVnz2MwijkZPEcYRR7RmuVnXbheDMCDMCL2jARYvoWD",
  "key47": "2Q1fmXkfBhZaMbJA7Kzzqm43aZccXqgzK7yoRNiJaKyPo5VdM5wrzdRqWvvvTdyc1t9FCWVUkvGctwUfozC59CrW"
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
