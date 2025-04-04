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
    "4Jr62tKW26Hbm4UN1YsVczEEVqfGyq51oLeNfTn1h13rVp3LXHb8kvQ5j8GPMLirsAwjRPc7jznvjLyvagzFQbHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gu98bnpWyLSo7Q4Vi2RqaHYqtoKWmk4BjjyoEgVpYVr7W83RtcGhzoXANpGZk1K9z5Kna5xVruQXdiumDDsu4s3",
  "key1": "5kYcP51EB86KskGvD9NdbXVC9pb4WV628ipYQ1an3ucaSmTRHMBC7U97kQfWKCEgcqXWzFCTJtc5peMhWWPH13G9",
  "key2": "T8PLHYCPMcfjVFKqGRZ3QeD4HwdyT5MbCMu54cf55aU1PJLoKaw35UqwxixfyMiExVcZNYyWjBW9Ny85g4f8YCD",
  "key3": "5Vq5QWNqcD2GqgR78HSDzrKEKnj4dVq9kqdzEUfY4N7kMMwpynE6JKb9TyvnH3fh9H3nJBGL8ihhtSD1adMzaVWY",
  "key4": "5P26JYmPLW8RbpRRjzhGX5DNvKuDAEMN2kTHP5rWHCWfF9hcgTo9uveGeUWZmJZMk7rsDhMZ2QhhR3xZ7P9vPDdt",
  "key5": "5DD91xJ6Z67BBPwN1PUmqs1cnqxM8XQWaZ2Eg8JFBizua8Kwiqk89kpiSoRFTezpoWKzTyJ9usJd1CqMRkRspvLA",
  "key6": "3KGCfnGSVuEXQHuBDaSLJ82mj3jQPZJY3oxGD1rToBWfBfJscZmj7rfBAxRfzTptXdbm4cvG89qWPXKctGJ1R9JP",
  "key7": "5feqgenai6Dsn4zMXb12RpausJXys9ZpFpwM2apB1tbFakxC7RAoiVdm4JSw4dNKjjXAFUUsVA2FuaMk4g1oTHpc",
  "key8": "KspvGwwQrhXrgq2PcktF6YSXb17GoEqQpGRuG2MByq9mnRsFjYEGbxBvJx8QWSiHxX1XcNAyteSHhRZDSAnS8BD",
  "key9": "4UYL2px1ERPF2rx6fYs64ecNXsKwFp5kUkV4HnKowAeuGJNGkiJpCVnyoMRaHVXGbE4avFS7cGSDRZcwxkBtSAvM",
  "key10": "21MGnT8CA1xXeJ8xUtwQtf9ihtbzxvyxhTGVWb5JRYTjPQoCBqDGUpNUE21tCDwm8oc8wN12Sdz1sUeDv7LKgtrM",
  "key11": "F7vE7NeAKF9NLkieYDrkbZ7MUyYREMJxAAD6fzA4fjDXcoN225LT9khLPGMYwXekeJ8mJ6FZiHsvU8o3ZXCxZMH",
  "key12": "5iQbeMuhWfUzUVGEtW3V53KDxySf841cYpei1UdkbUpDq7nD9qJadgCeQtZwaD8LQz7SHvZ5ig14NbaXRkbqbrFN",
  "key13": "4TMEf8v7TAeyh11c3qHWSBEaa6dSzdMzs2SHeUXdqFSEWD6LBjZTfMyBedJ1pLgC9S2gMqsnmYPa1xXK8qfvtquJ",
  "key14": "53cDkTVZzYmWfcpsyw3QSYEbdwNMCo1nnUcMufEG287LDAX5MxGURQfvjDdEgcbvxiWYBLDQdnGG28MA2NUQ5XN8",
  "key15": "2qNTJU1K7Q9dwqZY5sgMKoJp8W1RD9MGAEPUAfj3cn3Uky4dH1r3qv8NnozqgYLFPnSkdNgGPnt6uDNzcACtqPGy",
  "key16": "JNQcP9BcxRYF3mR7re6USgLRvdyCvgR4ZWvDp821RE2cvopuGj8Mgo1epHvg9dTxHHhASoySrDXKzstLkTjrF2U",
  "key17": "5wTAKftVHk67E8vfQazpwwYk2WeAzrXqv4rTxnTN4c49TrAq1a6DMQEHWT88MRXPXBeYgpE31AKEV8YrK1uL6aFU",
  "key18": "TUiWPKE48PpzWwEUjSomQek95Skxd7NdqemBWGJ5ATkENxBcVkuCQm6JtBooJyv4Xb5etY6rWka9v9rsd8nVUsu",
  "key19": "2jkqhsr7USTQex5Tgfae8fNTSXCzKCrHKuBSGzdoC9mPciTqK69YD8PCai173ZyjiEgazohHUubGzZBNP6ckBPho",
  "key20": "B2PAfAUKXN6Cafd57MEkhMQH64EhPsfoTTyNUTYm4MsoxgH8ZtKqNVKxAB8uJTdW9xj1hrZm7zBBGVT2qz2aBWP",
  "key21": "5d8tkMGQqVjrb6uYzA5Sk6fdGsdXkX3UGYPvgcdA677QE825uZ973rwALcaUi4rwLgoMKLmqneJ6tMg1g8W9gM6D",
  "key22": "WkYaqRw25Wwu8iawhp5b8C2pPYqVtt8nLaJHnJ8DWw3BiUhqoBUi5VWgd1HzwnTb99feHNkstJ66w5mYqvqy824",
  "key23": "5w3zMYvzJ7gXRsWxJq3y1QnzWc1df2DYehUA8jf18fK2bsmRHWM4Sv6SZv9Xy49VgikHhDphri8CSewsXFGnjsAr",
  "key24": "2fef9aYLspZXZbWyUn3qucVdwhBPjfddWMu6SveMpBLh7FuzKDp5JVESVhpKcLvunikSKkNohMDMkLrTCL614nfq",
  "key25": "5xdieRVxNR9qG1kgszJ1rkkTXnNBVeLGVFzmPVGU9j8vo4JwnE2s56FN7qAcnDZjYRArc375qewE4jB7N8fV3BcY",
  "key26": "5Ckw7aN7nbPRqSvGFsBAZ5bL91m5UXaeYfJyBYbUVEzo8BBMYBTk31wGr9tKvcuSVpwkHx9Y3SF8FDqoqyArH21g",
  "key27": "3RjEcGM4hipYJYkwMXqrAtMGoMpMee4GqxrAoRtAogpoFpfV9eYUVE87Lg2RtdhJXmcWsV3Mi7dckD1PZyKJ7eEo",
  "key28": "3KAq7Cy5LNuTXNKfXkgED2wVydwdkuYnmnECsrBnUNXquNKn91shP4ATRrMwToVQL59vba7GPWwQkrpqC74UYPaR",
  "key29": "2t8yaW5f8WgkZXK4wEgycvhNhHMSqeLEsZh3jkuPpFxmNx8qbyH87iSTXvQb7BeCyeaSkAvBsXyCEouL6JzQSsrQ",
  "key30": "4KSLXjpbzepQCojnhoxKVpwxTVBq9AzoZ36w84c79cYdPdySmh8YCwysmmRiJ7kpoijfAXRmVPgGAxNSnwYcVyty",
  "key31": "WZXnp9jkN7xMaZYfSPYhuQiT9RhD9CaKyh8MgssgTxPJazxMnBntXFJcj5UYSs1HptqUtDMVno8DNRZnLNhANsj",
  "key32": "2wLSKw5RQEEB35dSKZrrp6791397EWRLC65haZdxupwFsPN7RFQ2JSKDQhG6Rwt9tMkCucjizJCdJEyCRTQ1FaS4",
  "key33": "2HW9XtjKiibU9Kkfzd4v12gf8up3vNi5ZAt7eXagkjURKsrXDGi4SL8qFiVirBvU1DYhiZEi6N7mMA9333QQPCdQ",
  "key34": "4t5wUp1WdKKv9tR6V4gMpHbBFD6Wa3V4RKBo39S9byNXUgnGM5iVENuiSu2XwWMPSv8L5MSMSvmFkWpqXqUmBJcY",
  "key35": "3HkY5QxK5dnqK4HxmYXvtjBMhtrzJ7ZZePAF676RcAhskVo34viTmJjTZnPuwtbfb8WX4KEjf1Mgk1QddMwrESjd",
  "key36": "2WTDRai3w5eRFuEkX2dgm39jhjWc9XRpzac965QRFC4nL1jfjQdTYzcaDG1DbxfyxKvmibydmNoWiYfNgLLnCc2J",
  "key37": "5peAcNPVU2ia1kVyBgpo5qH8EfmdndKzCGJXiiKua5tQHhR5pXnWnvP8BJUGH1WC7mQKAtR7YciczccoRDg73Rcp",
  "key38": "5mEdVbKVRkf16MjdjtGYRRMwDb3y3i4naR7zCaQXQVYLk7HP1JEj7Wh65aLbZ7MoLmVWJVjyq6WMU4jk21JydGwe",
  "key39": "4uPQa9LdsJJk5qdmtkAmLFLnKoiLhosPXAUXiFHJaCjerPPyuJ29o2TEWc54snTnZcMJASyS5zCt5Xpc5QAX2HTA",
  "key40": "5346FRN2AcxuECcbjYpKkwfEFZMkv3FXx8ZZeV7eEP9EDJE3d7yfjNeU4xiDWWE6MPW22MQgYrvEQPG8JK2xDF78",
  "key41": "etaUp4zg3ZgZrAn3JtQqfrc7bM1jEQ7Pm9qP5pcxCMpd1Gmj9L7yt6gKXrLurKXegiWvPYcwK8wEBZUDNqCozWk",
  "key42": "2KHJe8EeD2iWXCsJvCTH8RZBT3j1EDbFt1SP6L48RmERG1b1KUue9vk5ucrcUfrD3V6xroqPN7njck77Sd7yCyLP",
  "key43": "4F93Sm9YoNFGpaVgGDNb4yX6mfvwLt4ixtncBKbTAQrab3v6R3VPJraLMwajie86TByotPNi1LzNFWTuk7PjGuLn"
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
