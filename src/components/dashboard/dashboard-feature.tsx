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
    "b2B1comjT8yhP7YgejKFMDHTw2xjk5iQieiLuwygVoyy5nStuTHiQyHWFLTaAzWGcmSe92KzasdtHkga8QdbUmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mUytaH92KubFsASnbFBcKGXmij5fMV6o6M6YWfZRrYAfXYY26UhWKtrvzKitEajk39C5s3iqHZrP5HkHoEc2DvZ",
  "key1": "GsU9jRAfTdrZFSEkH1e5aGX8FkhqVHKKwrNaDBpCh3mbMZHLk6asGouqhGZXQsjwAnf8H644NRoGVV8yeTJvjk5",
  "key2": "54DxuNtopHUGnSj1vbv7Go5yXE9Qiu82jqbASutLe5VheHWKN3vR7jfc6aEb71fw5wcuBvL3yFq36cHHdpRm653s",
  "key3": "5ggDaJjTxc32DDEtzhSJBZK4eBMYgo1YXr1dmkukAptWb4xdMJ92kFcVmSsLXEswAZnQRWH47Q2ia6DzbkBqnK9g",
  "key4": "3AaXdoqf6AwfAHqGurYHxbrNKrNne4WPQzyVLnnXhA1jLzRDwzqKY4EgTuUfnv9ZiZuHdD3xPxJ3heVWFM2kmSmX",
  "key5": "2SvAanym6ho3Amw4J33ToY2kSPdKUVgvURd5UiFQsn4iwcpFZSoythH4Ct9UBxSqytFLxQEMteg4Qn8By7XeQphp",
  "key6": "3UrZG1Vw6WysKjmpiJuRnmGE3SRyrgPR5RBMy7xhHjmHtVZRKVSGVzPQzPL6uvnA1ijEaoh1zqPoJHgT4bqqEqNh",
  "key7": "4DEbPh95EqunkF1MahvjakAetESesDMGRotixeoeZ2PLM4mUsLzstaM7cRN9Y65kCNgZzKDj5SsMm8PDn9EGYUkc",
  "key8": "66NjR6tEfS6m7ioUn2Bq9qmwPZEDh32bWeyi8yEvc3Sryk6qVXmXYEbD5LmEue2PNru1irQnka6VUW8YxmSGrFFP",
  "key9": "3hXLwKyLLuNyuyCiBMuFsZzHsH84sb42eyihSFS5od1SjgSh2hBr2KuyBQQgQsTivduFv5sXsgJqhWRjXcqsCPDx",
  "key10": "5T6RKnF92tkbEzpg1FUNDj3uFN29hunhegZ7T7oXJ2rAktrHGora3SHajxKu4USBhHe44iSYjcPsj37qqkafAdSG",
  "key11": "4gruAQpRZGxxwJoQ84JPiWwPPXtpPLijS1vi83icYxFjh8uWq9NFjjvZcvkBJFWBJ28wEhnnRHmX6aNofMHQi221",
  "key12": "3kv8FgabbmsSMDT6rKR8AXBxKwQ8EowwZUEoUUEBAuBYYAHYrr8DJub7b1RvwuxyUfXkDymJF9hoZN6fLAyDtDHb",
  "key13": "5ZkJxpSbG133B3R9fDdNbHQT4XJUu9EKNZgzo4iesVWJyCUE9HroF7miVSLJhnimJryPxnAmyaBtLYjKZ2o7oqsV",
  "key14": "5huhFXf6KiimX1dd4uUuS3AW8hgy5TiGetZLR7z3v1AZjpyYJQPKgh7nPyk2Giv11LHNjUEPUQWsZBHWXapUpv9D",
  "key15": "2EZSH5qupLaPhTMNf3r2b81cGx7k76sbpvATcYBQHaGMc2QVsw5Thp6mpmTAJxVkbNzxZVKGcj1qKinL8p5Hk1VP",
  "key16": "3DYJBjLeEyL88NMaZqoaziiwD1kUT2AvvTUDoRC5YmiSBnaJt4nrSyStrb8xgvGop2ncwUj8qiupC7qaANAhAqsR",
  "key17": "2GxFefGqseFktNmyUR4KrnKD1pxVKN2TCuZveXmPgVcMi7u5hPcqMKXgvfWeZP5JzFRzbP9pNoMfjGd4rvr2HT8z",
  "key18": "4NY9CkQzC7qsMtFkYyDCGnCzVJYJHLD9LJYoevrgoFqcGYNB4dKiq5pxfGabujCo8pjtd2Wt6NWtS9yFCzXwbMZi",
  "key19": "2c2HG7oCYbmzFrB1GBHYPGvopZhYVqeksh7Mpoe4shK9ZDgWYnDudRZkwrFBZ4VdQNA8sWCCWG44WfKsdCPm9E73",
  "key20": "5bV1wfyW4NSMjSZsLRAM2AdLQtbfvt3jYjGKpdm931phhvuAUHXNVudRD4dQHd3uT2B4geoiqj7uNBj1SYSwM2Eh",
  "key21": "475rBvnQeuRK7TvrgAxNkFTLByfhW2HTeSUuMR1Pyc18th9nWQSAwHHYXj5eRMYroUNpufkBv5yb8PT5CqGqPjRM",
  "key22": "2KcsXt5kTZHetE2Rj2cCvNqBs56rj2EG2LLg9skPMrYtzQ5Y2o75QffuUmRTytV9qc1VG2uJcNYVfvpttC7r62Sv",
  "key23": "33zJxpuMssZtQmkTnYYB8ZC17d37DW8D7ddhjTScAwigi8R1XySvLCzpEWwkk7Wr2ZwqEd89SWTBn2NA176PDUke",
  "key24": "4YHdLazohqAz2KdP1ASovJqti5kManZVMLu6s9fyZbSxrYXqvLvSfYcne5BKy1LxTvwYnGev7DNg86CQFKvMZrxj",
  "key25": "3X3u7xyf5375ADbrdSyKDWKcBhz9ryY5c975s8Qsq2Les9nvm224jDi88VkxzGbb4Qxz8Kjuot1aEVfTGJvSWgfb",
  "key26": "29KNETh1KnwviABA6qx9nix6x6sMRP7vUSPk79wPA4ugs5Kq6qXC27Cpp3fN1QmqSLAR4ZrFj8hp18oVaCW2kDFH",
  "key27": "5tQXhnAwCbHpe91ryagW3KXUBcDk4FPVcdEuuXu7YRAdTahQRNxaU2ZWAXxGQtuuznkkSBe3wqidw3WPbMw3JyT3",
  "key28": "3nrHBGahdCXSAfnEgyRrST2NRKg2dYBUsnbnvEJjSsxWbXcCNyaqsxMF1RXGjpi5RQTTzCfc3xVkS3zJ4TtHxBst",
  "key29": "5xAE4npUJSFUKGYSdNNURsi2LXq4Npme5u4JBiJYNicxGfHR3MEExaTr61Mqz5PyXNrfwU8fh38qb8LwHMHaqdS9",
  "key30": "6kUUkP6McUcYaDA9MUy9789XxMmmzWp2Nrm3B52jhpngoESNkrP8oSDzYBksHF7kDeWc3tVk8Z3oiW8f656YwZt",
  "key31": "4vjb6CtkxTTX7qaJhR6g7jUkNsZV9FxHuHTFKh9Z537th5UyTA3YyUedWAejVGRqZaMjYwqVJB5sWE6DcKsm2PMQ",
  "key32": "47ynarr8uvc7TksrsNg6uq9hYvxowRHeFWZLhPBu4zEmdBRFMNzuWCuLT7ib38rsgvF64DdB86YGBkU1QuwaZfkV",
  "key33": "hKtyPJnvah4Wj8KodHUUTeqn3s2KuiWukpkfGgbpSXBuGkgALcc4mfSN77Aep5k4MZJBgdWoRHZuDCjZaEGkaLQ",
  "key34": "42itmgjMV1tmksnVi4qvvpyAXPJXPz5Mj1b87axCitZSGVGu3fZ7awPWoGVs9dK43qUzZFCPBhom4fnTmYLKbxjt",
  "key35": "ocFjAMUiBrYe8ntxMxwe64sogRBfDZ82yRWkRXcw6R4uLGA5LUJyBe78KzXHHWU1iaVowAyfK4Y5bWaxGSABf5z",
  "key36": "w3GcPuLSHUkAQEaYaeRnNXToHPFb4ZK3EfKgReFLrVjZs7uU5QPuFUvxj1RHnrtRcyM6oR1SM2U8KzRuQtrysGT",
  "key37": "5eKSRQRA1zJozkYsLJcNm4RtemnfXxvXjdv1FZGMdknUFRzkhxrAJRYdzypdqT9NhHiX7urm4wWhzJ4TDcf9pakh",
  "key38": "avdj3UY5HETvVCEhpdLF3oRannMGfek9ygXpud8EHPRLFq7HsQJFxvDW58rv538EhtNvEYBrMUsdX6LWMgvK8Nn",
  "key39": "3vtEaoLYeWuBbj8d9azgF4pSUKdhEegeS4w1sud3XW2yvgVSAtEZ2WrALnfoDXGJES5QLLmvey2hA98xeAgmBkvk",
  "key40": "3voyWnXP6HrdTD6YYKD7K3brBQc678KYpAb12bjVVvFkA96nosvFqX3XaAp2h2gLTKwRYLqDVKvXaRBki68xtJqD",
  "key41": "3DTDdNurpWFa1do5MqCQWvPAdD6gjHZ1Ye22kHZm7Cn818c5qn3DTRPaivzrdJH5be1GdjfDw94HUGbEfYDa5Ad4",
  "key42": "SvahrLuQFvqXfP2Hsg2FxMsKSrAjqG7BP1oogPo6HZtfjr76JpVJKsmhanPfa25PiqjM6ptL3Ga2Tpcfms2AaTP",
  "key43": "4qGJKgqNt66NBtTsy3LczLUPDDDn6BeFaXJHMiyp51e44JDswAkjrcDtcZtTaufr7CASYTvZwpEYM69wD6BTaS4f",
  "key44": "5yqPwgNcNaWMvfgXjuZTbpXj6jLk6TGBtTYpMhfrw89dLRVbrdCBf89gdYiTuhiVfpx6f6yXzFKfBFSq9bnVNN6m",
  "key45": "5jKhKADGKw9taNGXHJ28CJo343Mz1ukKpVGbHmUEaqHhMYsPQG9fG8XGmzReEjYmT46uhBDVJArDjXtt46rsXa7Y",
  "key46": "3emZGzc8StfwAhacTPEMXUSAyVNnMLTHutYf51e1wjChn5Qt4jfHHU96YAGyfbmt5h8hcDjomqZxJtA6cXKHCryp",
  "key47": "Xsc1Eh7LzJrUxW3zoybtREQwJinqTgycWYasm7PTku9YFAZbS19oX2Vn2my8ZpAgpx7KKo1evKAV1cg9qfQddyX"
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
