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
    "4nbTdhKgWLQDhdMeUBqwQocFbzh1CGqNQmtzqNH62jdAg9yZC1KAruoAnCrwsUX9xQEAAKZB1a1CRn23XbMvZ8iN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wLz7YogU3xk7FnXUeuSc7EQAorKw6W78CMe4cJsRb1VBmpTUZ9RWjjNwfAXonP5ggq7MhjUHD5HTHa5iKjqeP1j",
  "key1": "2C8HUewxjzAEM7889teLoNWxbyQN3ZrVh6UjnmdbJVSEfU47EGN8WFS95MHwX9hV8q9J4oMH5bpamvrUm8N99w7L",
  "key2": "3CN7DeQqiADc2saqscfGHYpbg4RnnnwAfG3APqTZGNbMiqA99VHe7ZeHfuvMVWTvQV2hi8QKcqpwBHjLHVWnyhhs",
  "key3": "2aimCz9vdSBuGrQgDc1YrDd7pDdMXuFN9vFXt6kMpndVD1uLvE3jqD1tE5Y6Enp9XXUoDiQ21WtVhmk1yHmqj5Vx",
  "key4": "49rWbsmaWWMAGabP49fQKL2MCdHVy5D6C3Q3ZfXd32DwAkNPh4qtVL31thmsBBzfLGHu7PJ89YaW7QSF38KAdX51",
  "key5": "sYoK6NMHYhEGhuv23s9BSZUPMeW3VWctcvwRnQcZrxULrGtMiFBEr5AtkyNF8nQf6Ry2gD51xjd4d7GSDsZJ9LW",
  "key6": "232iwtY3UHUeX5ai3uj5RkH7Wpkz7SVHAMJDTTVdvukt1kxMMwRmJSrPiCXhjwEK5zUqX79QDwQXwWfbZTpYmuuA",
  "key7": "4KEVZGcJRdSV4hR25haVBQLmk98cGqxPSXNRnL15uhtGGhvd55CPfbSLqSxWrfSPPuDB4RyHoNhf1hTmkqhuaPjY",
  "key8": "4ngD4LjwsFVaeUmS1dphap7yB5KBygwGUk6urFFCKwN5khC3AwvepgYQ9cFpQBHrsy5sdnwPxRkmpA7rHBEirP6J",
  "key9": "5NBGkJDv6Ei4KizTEFTekdwQfresRDu7ULrsCKweF5XoP5GusLv5o8ggL2MyxAonJV5sytXpWXY1wYidxji6oMjM",
  "key10": "61fGtnHw6QHf6jQZG9Ljbguw7Dde61ctHWAoif8HbvrBQcDc8xe7uTERiJmVNoR48XgyxLE919u9dffRZLFT7r3Q",
  "key11": "28aa4DKV4YwDXakCQxZGM3mG7J8AFjU3AZ2uJDGnJzKqecDWKwu5eQH8kBoaExjauK4kXnB44wcjqLd2HQUJsMeC",
  "key12": "4iqb2ccspebA3cVvGU875sV9PuYuZs1KJFf99EdCM2vrw2hsd7Z6RxiX5DXUQ3gaUgn4EurfZdK14w7rRU2qkLGj",
  "key13": "3y98JPNoq6ju9sLUfMdvcdKvE7acHpA2BuBJaf37pepMEDdwfuYpgaRPTm2BiZnfTatboiNr9Vd6uAFaeEPNEj1R",
  "key14": "4B5WB5F88PdrxrMZ8Rd6mgJajJG5ZGzTskJj1dUd9Lk8D7eo2V3BJuYa28SmrQCBNsa3UM9acHGoxbmmzuJs2bxM",
  "key15": "48mUEU6pYY1ZVv7tycYVxPgTjfY7Ymy8aG1e6L5dQ2QjF6XkuaJp2cqHubcR4pnPfXnjLcn1CLvpD7kB5j56Tryf",
  "key16": "JYYzBepd8sDdbDVrfbBGHPpf6oCyzzSf6p2i3PdFE3N9WViuwm6wW8T6znZBEFWHP1q68Px2DSKwLDnBFXu3MhM",
  "key17": "2cHsFpc3AM1nBrUf6QA88txpxN8sgtmnHZ2FcCmmCshpegNv9hRh9Hr8WGv5TGN7ta5QicoNNy1n325ny5mMUZWM",
  "key18": "McvZ2i2Sb89z4sMamuV7mSS8BiCBxumqVyqj7Zzhw4b78DkfHYEKybq5aBKCrFmHqp3rkPszZMXdRH7rjyhg6jn",
  "key19": "22LXRUGyE6eGVfy2fR317B8cyV72Rxu7qvR8yopHQ2BPDA4jKxBZ1TYJGzPb4aQEmn3wAGNQk43VbRACfXfdJxZe",
  "key20": "4kDoQ9YLi15XXRs4dDXQfvj5hUee19WY4FvzkZcRgiPSmmSxeigNDnfqc6wbHarvtEYroa3SD1VueVHek6HY51zY",
  "key21": "63hemLkeYyCAwShXRc9puJTsRVHCymiBDoLkSngypWmTvufq3osrhFj5zEnhtn8XKzs38Vh8VmU7tQDUVyeWe9Zs",
  "key22": "2LajNYgrwkAdQc3jHpvMP388yiqC4VTT8zzXhnBKRC3hHCWnRMX2rbvDwFEHsy8eU5Vh3khSGAqQ2SL6utQmEbS1",
  "key23": "3cw4NAzRWQtGT3vCgHunNFjcdoNgyEUB8jPuK52TPU28xVrqJZ8DtGpvnyZfVT89K9G21QtNTrXp4q9HkzVq5NFv",
  "key24": "3TqHpByXryzozsxQ6KXERVeyVy7GuyfSpktPG1VyVNE9igccauDCJCav19nsrC5iTRtmmbf7R2jTNVAr5cSCNfxT",
  "key25": "2XaviN7im1LSmesynu1zpW8Tg72DEsKBH67afPN2mAg1YDdTBe4CAg1pmAQMG2Da3Z7t6zSTtSRdJCc1m1cwZ7Sd",
  "key26": "2jgMEg54u92dF4XgnitrPeaNsACjMpWBMrHSD5SfrW1VPozy38WQifHqFLQ3JDSJqij71hwtuem4nDQF5HpmJgKH",
  "key27": "JUCnVyL6uNgJLT8AtnomdCJvt1grf9DvRHRyAztwNzwLFWoAd85uYh3aqCkqspdGAKrukoD4y7oteDqwvugRAfc",
  "key28": "5Yn6nDB5cCNM1CWV9y3xJzTSZW4cgoXALTjusUMJiDUjcR1jqZ1JNHsRgGzxjYaxsMSuCX67hzA6jkrtE217XnUh",
  "key29": "32XpwxPNCAqFMsdhCT5A6WEtGWASkwsWYjB6aF1TBY4m9AeQ4eaewgf49HKunCuA8bkQbYrqs6kj5bgihJf9w4zA",
  "key30": "45irnLn7rb7PwReMsFoFjjovR7Ah6pQrobh14w9Q9LHjtGDgwYRuHUg7SWMsaqwKK6kHgHrjAksWUE9JdadYWF5K",
  "key31": "4zvEMZNoqN4V2sorMUTD9nEivMg9v3dqjCbSZ7HEDGF5mZB9MEiHLYuZNDRYSm9qqN3mw6XKy4hL77hBaHU6noiy",
  "key32": "2jiLxdNHgw5GSDt3eGCshqQmSSHhXow8XRGJinidZCY89PBRCCRqqZTgxefWdq7AbZfR8UqH7vfFVMZ28fMuPma2",
  "key33": "2Vq9QrpyYTsS6T7Y63a33kRsTuExrEBdU8LjeqT7foTUiSpszUadEphMxMp5NKSiKHWsVvQYYAnbiTQFRAbcJLDt",
  "key34": "4PbwzMJonQihaU6fWp4BYD9JiHfn8869BWLnjvVTKMyoiDonuwz1HqDJZTpw2VR3wbs4wSv6XA1t3b4NBBpp9Hpj",
  "key35": "4Gu5yhsxmHEqMscYK74ECBUvsWpky4xEujzuN6wAgxt97MQ8GoKMSSvkJoAF7WAAaNE2ahaybet149BChsu9NQTB",
  "key36": "5YbjH3f9NeaxssQVT8VBLSavvCGs3oiKKfhcQw42pQBKMTSkuqU5aUgN7MYDnghT7NVGHAAMg2pwEc4fjx33iBhA",
  "key37": "3Nx5tC5xD6dLdj62unS24FLBnL9WwvYaqcfiE7zAPHTggXriv42MvPT12uqD9gYYwH4snZZbJoTkc41DE1VdFMHd"
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
