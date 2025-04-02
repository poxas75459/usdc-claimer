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
    "2L54sUJxqjxMrLAubnAe4ME24WSbRFckCTjDZLUMKwnxWzhU92GbBGv4y2d3mb661QTGryzpN6xUqKg7UXZevDTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SMqxn7Mi7Yt6XiAYNinYQEhmmj4Yb5MzGdN6s36rNLxsm5kT53BgCTVUE5vnXnC6c2hkHs1boYGfsVuXeRAsbcW",
  "key1": "29fC17yF2ZQp64mkaCUA517NyoE1woWqobgRSzrRxUnd4xjLfKSLg5bjmUygozFTafasVwf9ADfd878WQfd6DnZA",
  "key2": "wXQMNy1GmYDPwFcTG21aEHE9g7MWNtEbdTdXmbZUrxEspU6StDFRAX8DqATphqFL8moZRdzi5NwAJEz9BSXPKPK",
  "key3": "3quuABPHQyXgP6yVDTtbR5ZKFfbKL6SV94yqFB2z83zCcNXd5ssd2fyKQEpPdLJgssYVtp7s2ycCWHkDWMiBF9Uj",
  "key4": "24TXXhDN17tccLR6ZscmFGLqPY462EhShXt6SZXSQgq6YrstVTZQkENM3cv3CEBBiFSY54mr9u4LqJ9bzQ42kFP6",
  "key5": "eaPxQT8H6ucg1m2SaRmCZkBp3qTK4NheroNJGxJoS7BrPEkBPqVXKE4YHaP1eN28KcDTyGJyBG5eZP3xEcgQfvt",
  "key6": "5TUpKrWJ4ipXsPXS7snahe2SsnQQhHj7tqdQQzGWr9kD9iB7zzdnPReg8MoGCqJk2y8RqzSkrXwKpZSfHg5eThL1",
  "key7": "4oj4PoG4qEjS1GZugsYQowYarHoYjSuY69zUCujhreHbxUpqMpyBjdUnSazmDu8ch8T1Riut8pWQuH9c2y1jUimw",
  "key8": "4SRvWJ1X1v9N5617x1L5xMBudV2GUtNJUEU6tcpatHQYg1QaTLLNt4QPgB9iWQXN6CFp56ZmxY9to1tGM8xACHDV",
  "key9": "w6ZkzPeNy3CQEgZV7D72ejaTe1EJCFRQrWXdZfync3kU9NHYJ9SAKEXtUZ4Gx4vGcbMP3ahbH63zVpFgW8DGrst",
  "key10": "91fdg3mbLQJVZprB1sJRpamn7hBPu6P5pBdPuPVHLEZnh7VNrw3DecbCfSTE6BjJV7kukPnzsCKcQn1XHB9g5Ce",
  "key11": "2C8uZZJ74XwZ5JW9ixtBqgkZEGzkyQqBuTKUJzgKgKTnotwS7dhBEARnGg5KW3bF5Uvd3mNE6whW71mWuzebaCSe",
  "key12": "5AiXw8d1vjR9BtaxykQ8kMeGWrKrZ6F2FDNTBYh4dKAoe8xDzWQseGKWD45gpJzqNngKCho2jpEaTsC2KFuYctw1",
  "key13": "4c7CdS1EX98R7mkSSWGMMP2bq4yginy48WUNgpfKPhVrRGSuBuocBxMjrruc7Y9PHfEDH2JZdFPAx9zEc3RLBabs",
  "key14": "2ACkVu2BDPehpu8rJCMr2MeadVM26zFN4UrFoQEAhLMaGsXoExqmRu3QHn4pLsobWcpbh3RYvCoEALtuePbVta8c",
  "key15": "5yRHHVFHUdZ6r2N2PgVaghbqMkcnDqyrVDqViaTbdrE3fD5yqEV4TctqsUvoyT61cA2ZjcEDsnR8345PXCSsLyQv",
  "key16": "34nh2eyypJuSmoyxkHMdB7g2CjaPdvhW6QHMHygvVRfmYFwe57tFqjzkNPodhBgCLvjpRdrgjfgVEQfuzzs4uBTc",
  "key17": "bxc8q5Pyhi833H6u4zFDPD8co6ynCP43BrXwFgLX2GpUYebg2iqCgHcgp2awKeEnhp3ryN112hCZeFrtw9WxDWZ",
  "key18": "3SLMTBBPjLXMidSwvvQoP2RmYsDKCD9np2dBxohTW3K2AZ72PXxc7cLRCHw4aejwFKf896dpexoBbCKPBY2aamCR",
  "key19": "5SG8qzJEs3NrMFfe34As78CmJwrFKag6anrWVHLqVyEsxWaMDf43HnBbR1yfYtHPdJa6vArBHWLXjkjtd4vMf1Fk",
  "key20": "VPZ2fdf2JV2nASsgmpXcGEehFrdoPDsxg34mx6PoryrzUgpaSqRugWCcquEtB1eYYx2yMSeKMxonDJhMrWWQEBT",
  "key21": "kttmmodMn3UA4fBGYf1AJygoo4NEoUfeNoD3oy3CwMjYvtQa68ZttLgZKSBX1hZ7Ah4xv6kAKMhJU1nL7PbjD1V",
  "key22": "2DCrB8EoVqEzWuXVyAKNmG2iPwxRDhEYccFj4jcWBEeVySdSdS9QbpHTeckJKUAb6mzzgv6P68gUbRDekAL6GRWb",
  "key23": "3GjM3eqCVj7z3usQK24znqngY3a7dh3REKAxEvf6uXEnhESxBqBjv9zhy2mq574iAEVfy2jj7ZRpcYq8RpJxKLMN",
  "key24": "5cVniE9fiEkY9dAeH76fu7LtxBKvkM7VqVaoYQAtMdBn78kR1kH8pdJoEDSnN7pggFhzJSQzn6w7ft4WQv58HvnN",
  "key25": "3D5P7YTJTrMvn7jBNWfdZv8uzKfJkYmVFCu7Yc6LkcziA2TfewUJGUXegJTFFszsTDDmU5eWUxi1WScQ9gVLLTTq",
  "key26": "ND5aqizJAK695U1QA1XmXpnbvzQAd9batkvE3jSB17P87RrtwjNbGBJmaGvgvAeSTiuLFJSoNYwddoMuwakjgco",
  "key27": "384yoXYZ6GPHZZFfXovhprLLr6VXmAZkjR7NsrhSCzZDWdkxYhit2bs1CSSoGumTCGcGw7EdzgdJDyhcKn89bXGF",
  "key28": "3CwuYammUUJjNoKNMARwGEzKcX9A61VKe6s65VosrfMaPhkmd8q6bzjELrfQ4r9rGx1SvNYrhQS6zNcA4QgR9nAR",
  "key29": "66PMpBVXUj3T5JqdvsqwNV7YaXwNp6JxrLtyQQufLvLRFhTzmUkuvUVy1HrtX7KXTPFaFMGSTKexXrPoq4MPZ3fH",
  "key30": "4WwknUk9PvePztMtHF8E5gSjwKDwKtNSgqBJYdKBGytpH6UD65XgLT2HaMQFX9cJngCPJACYEgCMp8zE6Bvhp4Zm",
  "key31": "5WBinXgMzHvDsawZksD3mUoAhhfcPENq6igD7j6pMHo2FKQi1o6y179M4hG5o17AEGNxCyjrNvtDUh5s2dQos61a",
  "key32": "4YFyxHx8sLrZig31xDeMcRmwSSQCYEbkJ7boUHpvJWNdHUdGUsm9a34z6FcvouJEFWREgM1UN1Et2MaCF1nV2k6t",
  "key33": "65Ui2DBZFaTNSYVvk3ctZz8as1U29ZMjW5RWbzAr2T766TmMdXwe4w2ii4q7ps2iyHUZsLua6XSgS343wA454LAH",
  "key34": "5P4vwPUoybp7xrnuQ1kpUikzDBhe7Gg9Q6E5R41bbdUswXQB4GrRwsYpoqZWDZU7vgYGZnUYYWScDFQqkSGGHfcZ",
  "key35": "2ZFtH3N4zord1Q91u64gJThs8KhphY7m1Djb4UJ2dAAdJPqFwR27LAzRCCcRhwxLgqfvQpuAfg2MCbtKaZZf765T",
  "key36": "5zXB6rn5B7Uq6RtJK7o7LaeAQyhjh1Ny3CeXfYjqUzi1wQ2L9UyjDDfRn9Fgsms9ioPR56LdF2h7CENGoKVZr882",
  "key37": "8xxpToSU6HijQnW6J21StDiSo5zT9sPQJvedviouSSqUYybNueXXB8amkBNeSG3EWXj5P9BajBswTHcB91XdzE7",
  "key38": "hcWCugdJFYSUbHwUJ8Lyote4DQqhuvN8H4Bx8BK766SZGohesirshAgwDD6ct76mSv6MiNHufZNFmtD2L8ZfhCV",
  "key39": "5cYDctsNcz3JLbs79E8mjm6bxR1Gb7u4cQQxaMYC8joqpQGAZ6TQuWsxoCTc2daa6DLTMauedXCy1AqZVxDk7BRT",
  "key40": "438Ec9L199dfLHaFT7tuDQv6UwxsZv5mXimKsrUtLeL1qMLpbqCqhqx4kHmTWo3AXJ2YCPCMJ13dmCDk1zZtMGF8",
  "key41": "3Y8SX1KewgjehCsSN1HHdTyvGJ62gCuT1fimWNX851SbxDPkSFgmFLEQPzge4S1GwH859m9soMDUV3eBtSgkeR2G",
  "key42": "7FN7bh1spCooX1hpRs8Eg8VdeNKuGYdqbng9wKrjYAAAZiHYZYBgK3Nhaf1vS7j678ox3Zc6T76upVKqjfDgN7P",
  "key43": "5cDnRKB9aMjSAxfnpo2so729xxWxoQE1mcGi3k7wHqih4c3kEEJbm8UdGDyjFvaPnngyEx9kWyH72dJbjBhWyxQs",
  "key44": "3omb5sFe3r2tZWKuifmSMLhiGsAw6jgxoYSBNNxSbXG7EPW1CCW5phg9SFD1J8LawxMACHbHDBbmrdnfpHbmsarS",
  "key45": "64iqLs79hfMJzaz3KYbXfVkMhTtihGt9eWf3Kuqi2cLSGxoBQu8bR3mMun8P588C3qqjkYgtojuJf628nQmVNMop",
  "key46": "Rokjt29p5V1rwJZ1PbfG8UYR7iyttadPCChnoDNfntVVQsWt5vswya7UYXMUKrSQvzybGMkvwnt1243SXbYnmWq",
  "key47": "DPspcU5bUtxwu4P9QR421TGCybicPaaLpJAtzFvhaUUNJSvxJvw8XAfBbPYYNsijCPHyhi1DM8U3XcUmADvnK24",
  "key48": "2yyD64LqGiXWbCXxRxhx1GXBgmjoQx2LmSn4LyEkGmyNzx7WKSAgWYd5JoQ1ZTVH4jkgBfTT4NB3LRpfxBXiervC",
  "key49": "67NMkQcuxkVUXkiDM7an8W4Gc82at9qhEki2inihmGpT4NtRS3XPwheP8NW2bXyfwT5pe1xgrBPjDCccu9tEXCwv"
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
