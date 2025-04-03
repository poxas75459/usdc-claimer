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
    "3tZJnG8DRVHqsthPeUxjjEUm1Ehf8sC2FaiEKVPHaesGhBDxmHJCFtZgsx4CXBDZC5Tyj6sPbLNP5596kmjy74tY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51SPwpYjBEiWREtJXdW9j25fjAmzeTLJrY64Mm5gpxke1TD7hN6VXaEGqxhs8cvUE1SzhdFw6DWPbeDNQvTYVQN8",
  "key1": "4nyKorPMwrfad462T28sCP4ANNKqeoWgM3s1jCjjXW4TfYij9KudNK2xDxrSx8JmAZLenAEJMVguGHkSL4ztKzmH",
  "key2": "4MTn65uvchowKt38rK142BfDa62aB9DrWwhDNFgDpVCksy1qybFWCoLrXbNNeYhfvWmG85fUvuFYWitJ8ukrKSnE",
  "key3": "32VcJBevo2cMdY2dsy72ken5C28evQSGWEgj6oEDJRbohY6HwmvDbnfoRLJEqcDK8N8PKEE3pfXEtm9CdaZSqKT9",
  "key4": "SEVhpyNxPb5jN24BaEsf27TzQ6wnzQKKXXmL9k4AtJV12qj1V1zj3db8uAz9EgW6tLY4oXhbaMqAmMVAiMzS3CX",
  "key5": "669UtVJbe3z4DF8ceVS35mM8pn8df9EiRoCWSv1TceBzL2LiVeoM9RbPuAqELYv9ThyZRWYjGHqYTeb83bEm5VqA",
  "key6": "223v8JKLr1DXzHkoK6f8Lzk9KsATnVSAvjV11AzW36e5tCM5MGZ7KsCkTUz7DFA6hKQnuuUD7r3jTZymG8eGVGjJ",
  "key7": "4ZWMbeyvLqiTMzoYcuiW3xpz6KwwcJSkqSvLpo3C7Vx79MTFMxzZDreMM6uMGeRhRn2eV1SQptKBACFihjA7qton",
  "key8": "23FDh9NhzsEoUzQUr1Tfp1SmScDZF34ChbCBbmx6DPhv39frLLYMEJRx9y5btRUbDMkzpQ2CEfJSxPt1Bud6wsGf",
  "key9": "57diAPiKyNct4wr86MKZDhna8Ckw3qiGgxUJczgfTfV2geyh2gzMBQwr4xQq34Td4ALi7osJx4cyAhkEnVT6vVjv",
  "key10": "4EyTmt5s5Ahw7ZtKXkQdq4gEwtGrAMuP4Ub13a6f1zyF5WfoHw6TWN6kX7eX6hXgM6Es4wmozLfZ8wYuKZmZ5mzn",
  "key11": "3XuSD9QpMTKXR11quW7H68DvwFJ8CYRnLjAuX6RAcAtWhhgB5Y9X86GSDzcrpW19MmNDhNiZ3WAhcVaUDzwbmjFd",
  "key12": "2uxjdjXUPvJtM3NFa4vWhJxxWBpq8pHFDkMXBg443jDRdvMdunVN5UYtiL5y79uVfytT6YoPNK9xsYQrkPTpYK9U",
  "key13": "2n7zfiMNZ66DuAf6waF16eqkmh1vN9VnLDy1mS8gmTNeqqsfR9mEy3bqHQNCFCZVHWJ3DTXr5Mgw8sKP1b8fdS8b",
  "key14": "jqDcxmxTr4GtqSB8kJwd6cyHiz3LfGUzzQ14bHLLEN5MAHCQzJUyUhX63oUdYVVQ7trbZ5PA8869KxQmEmpif1Y",
  "key15": "4dVD7fk4HswaJdHbXvtuuqXsMVtCXAdHr5DZsKPPNb1SEnDokR5BodZf9AdWDktUBCiHgdt8DAnNMqnGLHVirMYd",
  "key16": "2r3k9VaeoKtzosVHQLJKMVxc2Cav9WAarv5xGu5r6g62FXhLQCDPvzdkhb8o8a55Kb99vfGtCs2UGkyQYgciSQwA",
  "key17": "3SPzhPMNb1yEHtxtGsJFejpKURw6vs9H5s8QuLHrAzk681LAAmq3c4XxkjigYq5WmCWdnCkVDNkZffZcDxWyj787",
  "key18": "dSQTNHDCH1hj4UWBRJ1Rn1nveRG89QRhLm9CMfZarcFqhDiacEdkP7qR4QYBDe7a65brEsPDrSXicYzhMeWqVSi",
  "key19": "4SaG1heHBndtUKH24p3JvyVQXbbkpqX1kiMfiwSXSpLMqmXAH7pL76n2tbfuy8t2QsNZCxUgb5541yKCP5p11VNK",
  "key20": "yFZ8jwCG8JdE5JVyJFmB2uBEbHE3jscnbr6f3gST9AjH93yidEn2JimujRMyPP3Bz8AksY8SihAQi5px1aY6AKM",
  "key21": "3mPvLBpm7B8ePcRVPhSuANfGh2fADyXCqxsFYV4dLFvh3i4YhVVbLkWEinyxeFSUxpsEQyzcee92akYJLEwjUqTP",
  "key22": "3jFoNLXq1mYGNQdrXSDK2DDPoiompujYyEF2NEX4kqHqBweg8pQS5tudiXtnymreVAmVB6StiLDKdAEXy7ryKiyi",
  "key23": "3mRZEw3Sx7xZa8b3GMTFMKUxoCCespawQaVhgZPbiGcnqovNt5tetRJNayd8D9k4LsTm1oNG6ssenX5h5AAvCLuh",
  "key24": "5o44P3hd5eaQNdoadMXfKHy478KDXoiCmFuZMyKjpN9rQ9gCGjCumrhqcBZJMi6VQ5d7QPLvXBJdRVPxbNveWGSA",
  "key25": "41nxP9eMxXBmjNaiwAv6muKyGCXtLVoGNp1wVUV2bLQqt9CNZ3s3xaVHqCh9zHvSvtwfAW6qvA7YioAfvJmHua8m",
  "key26": "noJNHeR27AkFYrPV6vaoHvFqJc9cwfMDbSwvBUSwYxneKgKjrk2U2ZCV9ATAZVge6UNYuFkUsJpewSFS6UWP2C8",
  "key27": "4gQ9NjZzrvU3vcgjXnfwRme9Deyvgz1hNL94jkhCYJgkLBC5wSBJWzrpNsTTpaJ1jEBD6p2MCbBjnXRsp5S5CzMW",
  "key28": "626GwVwpD8YKPZwmsk7JWkCvVSeMXkfgQfZH9xxCUH7DFei9YeAsFVeAWvmAZdzk3UygJcG56WpBFzz9kXFUEfhk",
  "key29": "3nA6NLWcSez3dbSYKw2EDK6j1Q7YWbq5NqKM9JyJmngdo4kBRL9vEHYCXszcsagic88HNY8LgzBNPfcei8aorp4D",
  "key30": "2iyiTTXe8LHozpp2dBbn524iJFNuwFbQd7sPy4ZNvziZBWvEy6c6FN3183tcd54A2JY7gwyuqk1WB2ZyAfsgkwpJ",
  "key31": "4sRKbGW4U47NGNdbtzD8jfjWXQ3ogTFrYMh85b73Xcnn7UfSHVkUaCF6Bhq2fXn6ehnXvZaGZLSCAF4ARxHXyDeL",
  "key32": "3nYgA7CRGPQnrSq7v8LciZWHZYSBatLzSFYsQqK98LMuUbfwEp69cFsZgR7cxyjxww44LBAY2sSearFbkBpkFeGB",
  "key33": "44LiBL2cxe7D1S8jk3BUJs95ZYJZTJR6mRq8sfkmXLgHcVh8xCzS5rmkWAmHKktbUeqkpB34gpYMjwpUKxNWYHZR",
  "key34": "2tRC93QQzaYmpv6Y6KtfmHriFKyYy36wkSzyyE85PZVk8ej8JHhkK5C3XmMqP5S6LeQa6NpPSTMb4CMjUsP9FYki",
  "key35": "4HGhNPgqBjPhWKYA6GuSF7TbLaHo2XQB25VpBEuYwQWg8ot6CkBUZ587YjCjFqHQB6366q4jD3jkPaZSkD6vPiC3",
  "key36": "4WNpwZkD4KeuaAEKQqJvDSr5dZDUBGGsdChw6XiX4NHihaec46C74hBosY1dwz2VL5ba3E5os5n1XfEq6CjBaRHw",
  "key37": "wdcmnzxcHfiUPnPgSMesEk2EdARVyPNseHYg9puPSAsFNFvVjjyECqkNkyxJ9yNJcoVuYAdyy25SZ8XCoGSBkKM",
  "key38": "c4LvFjs6hVeZHkDdHUZXDdhWNwtcqjjkyV9SvRHscQ5jvmPffysKBBgP2nZuxD3v4Nt182txmX3HzRjEQGAACas",
  "key39": "5F8WrhKnaKjcZT2bv9T28inAXFUqWGfkoo2W6AxsMRUZJYozRLsf8qZY9gutZpm7ZgMDXLUJKfAFwaFMGXZEsJgh",
  "key40": "2ip4dmpsVojwf1TDWbmt8QtEEBwF53A4xqnjeg76YfjD44YtNidATqVtAAW8bVJ4uG7AEb1sBUL1xQaFQU6HkwWH",
  "key41": "5BMLi6r8E15pF8fNd56yFQHchoBytovcy84ogRj6EfQgpRHKMD9DiF5HDDZsGNEKqLrWfvuQvU7GRVySC6WDd75r",
  "key42": "4vuhgWzjFCZGbgED6rseYmM3bRCfh1VbahE3VqvSR1SfqzHadimoi9gyLmFcpTqzvUmtm7UEMnhNVhhvNunLSj7W",
  "key43": "3fUM7uNkRWjghEVHUnZeafnhJ1J8tDTmyk6We2SCvUzXNngAd4CH8zytKwUsgyZ38znqjYaGuJCzPXCEXC8uGYq9",
  "key44": "2TfursULUREVHzQCXFPrVqpfSThvZUxGceRczE87QzMZsV91LFz57h6V1ooASoHYxPRCKfEzgZgmfR52kfpnoRNK",
  "key45": "JuaivGcJnmBxqKrqPPKewNDF43mik6722jZVUExVbDbiniqe2omRVi38DMXUT72zJzMGzD5DrYbuwK9jgbopWhf",
  "key46": "4s1wp95PNuLkhHs4UdoueySpcEfwoXPueUT9Hga8RTCaZFPZaXyjRrSGDSHN5EBmC4SUR4WWWxc62rD3jGBSwsCs",
  "key47": "grMFpeTkaAYm6Dtm6UwSLtEoeJhUi53t4p5jHVws6Z9VuxjewvKYcx8L7r4UfuTwukfLwzvSVzu9ejV9dGDjYVC",
  "key48": "a453Ehy2GMcYC9frWgdWHe2YzjDx2yNf47hKLsUiadNuvb88quJmAiSjRcnT451mAqjjEeFtn6X1n1p5Lezchrg",
  "key49": "2nHhUjTRcm7q3M6pLddqzn7WsqguXWZHC9wnkqPPDgXiAyaHU8CnRX8ULvsaxtidaKK2mGW6SVDkCf2mBUJFK1SF"
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
