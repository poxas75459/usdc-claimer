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
    "23ngTUM8eKU12LA8RX7zcmPhbJ218TexTH9wSpCaUndcn47oWW4q9TYBhtp5GFikFSjPgan8gKoD8ShCaeCCsDiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SHLepTb2oKgcq9tQ4RXWjJGYRdhTc8AGX2xJhKaK2dSS2DUn16Hf6vstT57miPBJkdPGsPVnzQvdpWrUmoG6QXL",
  "key1": "4LxRjCaXxdoLxbtm1CD9oqb4bv8rK6oPDVSUTadcJYtjoU4kYPkrqofzi3yYDm7BzyX8xjuKDkY2JrfuFViXxmF6",
  "key2": "3x6EArhrL1dAU3vXqwRK8nMiqsp1Bxm66HoM5anUnEx89TKhBPZAa21vb2zjPc63KcZErc9TPXPvMhVbUGDyB7gF",
  "key3": "4C5wHcvV1byVopCR71WswJRqesS8WaaQ56quypCUoaccPiHRYyzc2Ci4UyQbtjbNw5H4w7br6WaUq46ekExh4FbJ",
  "key4": "423xFW2oFruJE5mSxS11qBMoxnBdsSRSgyigkE2GM3DfYqjP2eQMkhaiLcHMppx8QeguvK8C783fHdv1JDGPmnZi",
  "key5": "2WLnzqDny1hw9n7CpiSM9jutAQB4vmWLUz5SLRsqSX2GnfpxyMzb6KVFhWUh1aYWQoQaQSLMimv41NjVaquTVXko",
  "key6": "4bRoekRH3nQhfEXkJC24BLWM2wrvmNK12BrHxNcz5FCJpSEUxb5adBySY3SUNuhZ2qnc4jea8NH65kwF4ZVxAw3F",
  "key7": "QtRtJZTabJ2orN74KW4hwmEX8YpDQRwBkSsM3Ab4XDS9RYy7zmTGn7QUZnUuGTKJP3CGCz8fGC95ZtYhBLTbnEn",
  "key8": "4u4EvCfQDhRwVmHQ8B5XdbCqvznA31Ew6znSnRXFQbFMvvuxihuZRpJyHY4wirbvgTnXCeTMQUnQy1pFL7cajvmu",
  "key9": "2Q2pb8yujEVjoVqmuzHpigYXexjCktpE9K6weeLyRhMhnumgvnkhYbVnUiyMEPftJeAKNdGf5tnZ445qZfu54Gti",
  "key10": "4Kshkyf3QwqsUk5HwxiycLboECUhGfwrZg2sic2FwebsBFo6euBwBzEtt4UfztA9LudTFT9qWX6FVdoZ7QqcDjgv",
  "key11": "4gKqypsrcF7MbQQ6uGpvA1fV4pHFWofYTsNgi6416DVviFKuU2QPvqwbEUih7QFzMVZjjyGScvb93xSCUvLhPFaQ",
  "key12": "4tZd5rpxQx9e2Wxpt7h3Pz2PtshkBAEDZoKh8TeuqFziqjTkZtaT832NDaDKJsNpQYWK9FR1P3NpgjQno3aozxjj",
  "key13": "38FsKrFMQHzUvFxwD47Z5Mc4Pkoqnr9FvsALJCNL1Voq5Sg1mdvQhAejTKzSwydwEgJX9smtn2YtBtdn5CgxFF7M",
  "key14": "2v8PQtxMr5LdpxUSdp698ynfANu7n8x7WMvAmZjf8zRy33GvK5o5SoZVYy8NTkqnZ38BKdtpfjQCM75faWgqsY9r",
  "key15": "44saapTWSq9Eqb7cVTS5VqEnyWyf9vimp3b81QQjc9eMAAqL8KCXviJRKznG6NJGMJTsQHdiW5p7z98iGyRfoh9",
  "key16": "SDx6EFn7qYDTzLXw1kZ3U4uzJnVdbQqivxqWUz8mAZfJk2rQiJbmbNqfmLcgrm7eu4UQXLSRwP41Sz9KE7CoFFv",
  "key17": "XNbSW82iyEu1v8zge36eKpRZG6x7PA4ZDziKDvoBWV1FkyFV8GwnUmAsfY6q4C6Fybcmim9AHTccrUm9eZ32aEy",
  "key18": "39gZXzypEUgvGB7xzGgktPZKqvspSwpDm95nmrVD27EeAbe2wz7AQWmtQmbAUw98sPze5vQUeKzgz9RWoRdWWaLf",
  "key19": "5tRTTP2Z7jKEvVuCxKPd4dFM6PZvvmL88vEYiTU1TMcpVZ1M2dqwoEgzHqVVqZTVZGhdxDgrJfL1YebZynwCoxKL",
  "key20": "2SY8EQW13aE6aPVvJvk7z6ksPT816bzbLpQVtNdMgC1bYByme11fMnkVNTeGcj915PewNR8s26ANQBc1Qori4vPd",
  "key21": "5haPH8h3ctn1XV9NjZPc5Bf8xv6FqHwSzmf7ckJDHjkyj5bhCuB6GrNa4ZY3YF9PJXeuoxiD6uDSf5qFAAALppJ9",
  "key22": "2YAX2AdBzvg7XDZcgLopmp3NxtFes85mGNUDsS9pWVoGbSzUVCDmAeqNRXZ86drw799XNELLVxJY1ec6UdqjK18E",
  "key23": "3GRJJAVDy4H6yEHjKThG6gozcKcWeXD1428Vz2Qf5oPqcoky8qmRQqZhvswX8eCzV7QvmNaAFTufW4xQPKRyLTh2",
  "key24": "3d3LQm1tVB9yVsBXtwTnWxGmfTTYwjMFmrPHWZSRXFNnGwf9XxjsBufBLaDDXr5BPtM1HLVgQsYsgcsRJh7uEtyw",
  "key25": "2nEnvDpp8hxxX4nYz8HwXAGtAZGGWdt99GGC4txKj4GBU2V7frXQm9hiwXJ1LDWr29vhcqcjKsMLhm6VT7c62oUT",
  "key26": "43WVBXQ87yot1ikULedVpo89vFTDMutocKB3Df3UHQktNvsdoJNkTtB4gdPMAGkbsA7sG1BWyrCamdDKQLrGjcdx",
  "key27": "5aNSFF8WK36FAFMdpphPsNRGivVKGnMFK8UGgMWVUZS48sm73UBF7GmzNTG1jCQmXXunWQiTKLmGF9Q9JkCHUFmp",
  "key28": "4gqMocPD9aZerd16x7XifRzPMtkDnmSdBpyLzL63YhbwS6LTatV2JgLqDNN64NkBToa1kdrQjh4bzBSgW5qvpnXd",
  "key29": "4jHPCabGaUcfZJHpAqh1R9fUW2JjcrRx3sdBYYWdJeCz6NAEhKDWSJRpUDsCxyxjpdckg1sPy6Y9KZCh86uc8Qzr",
  "key30": "BAoLHSZ6aU7qX2fPkJgZibSeFG2UdfXsEYSKaknMxgLHYQVDNgqDSRG1zDAV1G2ZWcdGgDaKaRhj3LSv5NuniRr",
  "key31": "2mRZyxwcMUYwtq6a1xEeSEnjH62jPyGDJvedH3yj72tZ7bQnioBHot46tVwKqhLQ5dhqUhU5ZkcmxYJ1qP65qnb1",
  "key32": "4M2cWTNcmVr4w9vdJsXgGs4HLH9JfyxeD4Jiw9DTvmey65PQg9HoFYQM5SGT1MbheCpDwbSzowLrnKaRVc7pw8UF",
  "key33": "27sruLoHqXwACBMJTAfrKBYSCJBpybuaWUfBpWVnhBdwK1vp1LtV61VhgP7i4Ly4Aiimrr4SnCjenDnrqYzjLUYA",
  "key34": "5qL4xKgAhuzxRJ4cRVbsee4tcJxxXfX3ZuiPk6sCs8mVbJngMeE9VyCbFxafSwRV7VvvY6giXcuDFZ192mUnpxPL",
  "key35": "4aF9J2J3wVho4KNJzCayeuETMFMTbQvbSvHbuVqZbahTBBfDbPkBikiech3ZUDgoYdtsePFg9wvdSod66zgeWmMy",
  "key36": "2FtB1utNyZTW8YhfKonzT5k1AU82K24DYWv6BTUxXNyfnh4VxogfU1GsBWAWbQpgQjGPpDRdX6sEaJRSzbdZE9kv",
  "key37": "36FCwN333QjMXnPXsuMgNFPBjYfznzJy6pCAur6Aha2aEUNxUaFAHy8td5jpYsSDsxniUtV7qRRnv9mDVWjhKbmR",
  "key38": "65BaAmjGypv3zajAFxE1Jdt68QTm5KpxkV5MozZRMhbxBEBR3TuopHHNQ6Ao3Sfpn6uYDkwdj4eMor94epgjmFU",
  "key39": "3zyoTopuRrCbucTUFp2RNiq2LARqEM9PghTkxpsSGYxQhFYXvbw4sn2nVvrMUnHR6UbjpYFw4irYbX4NcK3GH8Gt",
  "key40": "2KPnGYSAZ1U1pUMzqNBTiefdUXuoTL7bYKjBDJShRpG46hcAS7ufkfYBv3edQLGDj4suv28TzCgGYLKHffjK3eqy",
  "key41": "2QefCWRc9gsCiwburPtYdMgFRJk8FV5acoj369NpakwcVzaxkDL62Q5uv6PPmhHQjYjKSH94xfX5simTkP8V2jDA",
  "key42": "3zF2A26wim7hAhim8BG3dfSKVBX6owmKCGz67aB3mmhppuRYHSrJwGXiQsKBzRaUhuCPofJTJNcT6jWyhS59GKQJ",
  "key43": "32oR3MRdGr1QXZrN7gyRoPmCGztQxWKMr1KP7AU4qdzvVdJiHsnMf7SpXyBE1oWFTQ6RWxUtvLsu1yDhP1kDEkeZ",
  "key44": "4x4ZGVDEHtTgYTdBq7T14FBwB36dHFz9GfRjCgjNAAiQQLzCHrhXszmVasgVMbvAWVjMzDRurbAHZcBLcdmp9xUo",
  "key45": "4tBfo5GgGxZHmZZqZVe89qgQhKyUUTuQmVaRhDB6Kgya54qFcSzpt8yccMmXj2zgAJLz1FY9VM2A5qtbfJxBjNzM",
  "key46": "2UN2LsDGYs7oNnHxb65NFemv6ubSqN6NjMzsxPGGs8AAaRv86Lu5eZQnT32zYqBpumq8xWeV3CnF5eo3qbhoWir6",
  "key47": "3DSqC1SaZ35UeT7toLWymHE8nhKmBs1aMBbXAAmbJmCAVNxyqmNbK6UnpXeemZjhkVXWPPSdN2zwzU3et4NpZq4L"
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
