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
    "4LHKj3JFv6QBcBEKw1JVzeVciqZqA9tSi7UnVKqBv6estdHDaDmyqhcnKoYs8oSpzBkL5ZyaQ9DKZFweTEWqjGPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ec3CrzN9jg9QY4SYjhQZ9awFWgo9Lnzd5P3T1zGda6jpW3zAusEkCFGBjSfC292uKN2KxseBpYzMkNSiDRdmkwF",
  "key1": "RzGUyya4DUThu8YUHTvYfXebftDN3TYFxHivBFWSAjxTMQvLBjqhMKpwobooqwWRj1PaoPUfEJaNkPScVkeAAwn",
  "key2": "52jj8hWLw4cbA85Hzp3Vqczf7ZJAJ5Puxiqo6xV2c3GpaAB8TWjjTKFo746QgQmHSFATHKBhAt3dME7naqsfQzH6",
  "key3": "54GJpzXbQhroXAw2iW4bQsRRipaLgRR8ELxddiQ6tosBgYSS3Qkxk7cddYZ3hi5MJtPoMzWjp9UnYgoZoS3seLbf",
  "key4": "zQ7o8PFaAV4p1swqYsCJe4VSUdB6kR7ZWkZa5TCJifxhCqhCdEWC6p5ChEMkHsRtw4drSWDyEvvAt7gD7WbdKfv",
  "key5": "4w4n6fmi5Cm2ntRY5gGKeWjvoYT5RExXUMTzjZ7HvK25owMmtT7XaLFYHsqLdxJ5Er5R9EeJ3K3G3AXngzHHYgtq",
  "key6": "ac7BcDEWa7BWV6KiwQZeuPKVZHPrDbJH4g53y2v8gcbJXiWBGsqbDidtf8uRx1XCz1CvGUq1Q1bWdMD5fwrDerB",
  "key7": "41uFYfuHc48rM4AFNbEyjyrMnzJ97J5pMLHYm8a2AxZWVmm5CS8pQAg5QFnxuXCunmhhboiVpD9H1q8mqV1TfXou",
  "key8": "q1CSYWjkfGWnxi5L3gkDWzkUe79y8ip63pdroXkcDwdggAevbPrCgBDpCLrBTEEDDmMuf85ewjveEZptHtiXzjw",
  "key9": "5kYuVdjNCsceuHFfX5qnZKZrx95oEdtRyfxgUkmrgwPTkK61f7wUH7zq673WrSXvpYS7Rj9zdFb7UkYiYyQUZ9S7",
  "key10": "3UuNbepDnXFw4xaGDdC5pcBuZ1iqFgnKaX3BjvsEcvVaHcmGSr2S7EqXVkGDTjKUebmWxrEhBc1e4kPbrmvv9mLS",
  "key11": "32oTJwb8ut1fpLepk7nuQrYxkHfeTgPnuPrUnGsxaxPzEeXwFWbo1vq3ris8QhTxEuAqnja2hHSKWNMAoo5GUrYJ",
  "key12": "4eiRM5yPQSQP7Ah4nMhnwEYADQfvc9e2jdwkiESjrfDsmyCp8ybBygEdC6dXpSkJCzhuoyVfJkJ93utVfGR5LgnW",
  "key13": "22heq6e6nBYprzt5ySKQtkjM3RorFe8PRKBPXhhqk6kJuC5jAumLdBPs3TKVhEhAKz1cxqNSwUmefz6AbY6PKCsU",
  "key14": "37Srjnksu5mNNSYFYRebN2qWhPegNnY3y31QcpyBbiMHiknugWzGd9J5qck6SoyE7g9HjsKaAQJKpaAuvTwiP5PZ",
  "key15": "64PiMcyo1Kbc3MTTEsKufmDK4RDCXbVStkS1Ku3octij3fHHEjLPfgmpjNsXEReKf59sNWWrNii8K33n4hpFKnYq",
  "key16": "2UmasN4Ap8ZYerxFgaNrMq6pxSEcpT3rCBjzo4bRWT2d7Q5PXztP2Luu4DV9zhcMRT8nY71VKQBQrayJRkswjNwp",
  "key17": "4ux6fnZYA1YiBWQcpt28tbcvvMRFhUk3mVMAtvwaTV8h391GV31gRGLQxgs4yN6V88Q2cTbv8wqkibfmEBeWU9wH",
  "key18": "23qdF639PuJ2MhbfNBeduXAdRYuHSKC5DjJr9iG7zgGxiGMLRk2CMFb1hqhZvvA9acqXN1MaYXHp5FgjdzF6jL5o",
  "key19": "4XpG2W72fNjBuSCa1839dpFrDykcnv5MYBD8mLxVg8zp578Jb4DpMCCHFqNHNkhhSxu8jbUXgTyMbzKAWUKCkLqA",
  "key20": "u8yYnEovqY3md8q2RetNYqjDcexoA6nKZ5dXojvWjvzzMRAha8yHJvP96SLEmXBtriE4MWUZ7fxx3PmjjHoEyTi",
  "key21": "5oqhXMQuCYj5ZLwr8uXG6tDAbuiopbKL627BcSehpzxhJGHzWha5J7WnPTdZyYGKBQyKmxmgbC63wLb7eh24irQu",
  "key22": "4jN7mTCshyfVrpeAcFFPyM2csMxjaV3n53hcjdFqmuH87X5cwj5Xvbuaozo44rkQ3a7zXNtUdjHJuPcJ7UiGP4S",
  "key23": "4CWs33bSHY89BfZ9aWbSRsio4yFRKf3d12xjPsWxSmGVMZyCygd1hoJHMXBpcUC7Ex8hnx7JgCiX97bqg68urhMf",
  "key24": "2SMMohBdwENawrAfQEm4CsJGxeTQVHEfAixmcVaaYd8CnaTS6vCNMzNz4ZRELCd4JcDRSJZUy8cGveJomSiMeb7M",
  "key25": "niBJF71KHbDV2tvfXso3urYjm1bDVjKxrEpb4i5tk4oRDYy8xDJTyqqhhE8jHcD7CBdttP26SoGRCMLz1gxH5m4",
  "key26": "2syyb1uas8DJ8eQuWsBKGbr1ddDoXKbozaBGfVQfkEvQ9TSMKbyDDwPjtXmJ6AeHQbQ8YovJZXuCfCfJzvQp4jCm",
  "key27": "2Bmjqp2JuzZ3q6Dyjb4KjdVkeSzPn5nG1TfmDqu59vB9fmzXDaYoK6FMkHU5yDUJtGtFTJbHavQyi33yHqEcqMSR",
  "key28": "32fgzrRCgAs8bezjvWgPPhru8NrfzpkZQuTZFsqgRuKPHKxhNuZScupCURo9ksueHdhrjBt786hMNPQecqGUDgSp",
  "key29": "21fkDP6eKyP1U7LQ6w2hPJutQyK7SYoRXnWRD3r7yKsK7UxgqNLJG23DQyE1X5N9N1dqiimmwSCEXRGGRXHg5KcT",
  "key30": "wBHuAhi1rAbd8PzYCqMPzZE4PnzH1qgQpH9UfqmeeDhvFAj9ZW7tuogNBvEhaHb1zn4dtz6PyfKzvsHfamBEk4c",
  "key31": "S3iRf5Uwt7ReYLvfrVfk3Aa9fV1meJvGRm44Y4QKZMg9Yyi2tEfWGp8SR9UKkrmgjF13D2ZxNFzQFChQeJrpJKe",
  "key32": "2RPPbj8JrQUBEnKnyCBMK5GgpP5PniUyLzFmqqfsZ79ciE567vmYjPo8WijAH8W3dCJJzWehXraLaRdTEhvMLFyj",
  "key33": "4nJeRw9DpeHAH1KtXwGUgENykRKCM1NPLfbbaXGYw74WwbYHiVAkr85aYRNvaUtNUMFDtJsb59dRn6VJHEYyUm9S",
  "key34": "66uS2rVEDdaekqvs7HnkrW1YcvVjR9u71WNXECCKPjYn9GtgjNYP1tPMRkzt7HtCCo5CvWo4GyC4wXpK6ASFcBb6"
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
