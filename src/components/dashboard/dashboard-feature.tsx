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
    "4B4W81pRKybupQ5hjzZstyyoYpyXSSu3NmcJj82QdRQ2rjygs2FcX83LkFkW8aAw61M6qAaWm3BhkhvVb2bsHaZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fS3mZniW35PsndVQbyrmaJkrCu9jD6CJG9tdefQExwd4mqdTgk41DvNoRUG3crjWWMWgLxA8HBcaHSo3dXS5Xms",
  "key1": "4h53wHVQVaTKubWRqWZJn2dt1CdXB2JtcR9yvmXRtxattHpZ6mvXBCGvdeAWRELn7WxyTYFyoDtDMiztdh6Y8rSe",
  "key2": "3BE4ZuvL7qoLqvNuBKVXN1YkyVpPeF2KXoxwf3NzYQxbho5qftS6zRrvxvVWbs3GpxaEZ5ru4BQv6pkVXAXZffC5",
  "key3": "4thT1TJyRuB4JQXUnrnNQpsDAie493tyLf4CS9gZURWwA5oeeUWFAxV6YdjBTu9HmgvZ72NaxiNzNo6EWtG4ux41",
  "key4": "MAtLLARg7a9eUMYUXx6BLD2ejChdVczRT2M5nJgebkJESU11g1FfeTk4455CQAvSS5HwfVwEvwBgAQSNPRzkDCX",
  "key5": "21A1btu4r1fGTVGZdDR4ERChLjNEeh1Lvuo8iWHmgyyu4kiJEwgRe8b5E2Z4tHNX8X5A8UcDv4MYeZR9RWGUDMwT",
  "key6": "2KU4ybeuu53Q6piuv63otEnRPuaCbxYze3cQpgMGxiPB6AY7p277TXWzJmopK1M8vaj95QNcn3MPaPUGSRzcn5ry",
  "key7": "L6Vhqid3FVu5uTPvxpN2waduBTxe2zuiZYemzHpY8DPoo8rVFfNwTk9kZdxiuo3YgrMPA8vz9xpPvcZkAxJd4RM",
  "key8": "2vVo7Nwh3sytSPUBjhmKnYeC8U4pWKycUJmFzYxemHrqWis6ok4HXUL7fS3Cn4XxSUvA41aXC8Qi3Ebxf8zoh1h7",
  "key9": "5pLETsgA5xXs25qJWjg5JWNvtbqYHqPu9fKoGzAm4ZYvBT67kEdMLb7syfePZgNtnaWY2yLzFqDoXYQjYivJRqAm",
  "key10": "2omZDBnS6Kiz17Cg4ZqJde8F16c5xy8GPiTaBLsJVPBtG2YisRZunwrsaS8kVaWYScdxdofrHxkFmtK9n2zNbXSD",
  "key11": "2eBKLt5N3mwH4kxmszpZgwsr4J7tfLPjhCYEwi4TmYoQFVQ6qm2yekughZBhCcgAQHM4hWQL6S7Afp9qSJ2M6xdy",
  "key12": "33JkdJqVJpRPc6ko2q5nHKEUF5URnFuUQZtTcBGfdF7gz6esEqBe3pU3fTtx46fwdJGreCx5UfMsQC83QaRWahod",
  "key13": "2zFqE5C8ZWFRL4Z51w86iJnET2mbkKdTEncY26L9iYoELkm9HCcqXac5KdpBn4RHJXK25mh3DJJP9nSGbJHpFrxX",
  "key14": "5fuvSg9JScnoYKCg4PPVYJThY4NfLuy9U9pqLLVeiRBXpft3i8g5k9WHPRsEivr4E7BbmWNck6uyb6yMbZ9Bg3Bh",
  "key15": "3cCHaUiH9TUxrBWuSuW27PL8196XtrTW18xdqjCbAwBuT7DEz3h88DHMou47YQDiJAwXHSFEN1gKwqk4c225sjVc",
  "key16": "4yJNitFnKpW3ReDAkGCvN32HTL9DHNSyS7GVNgdzzpTVpWpxQUr3iGnAHXLF7eoHTK2dt4y68HWYUjr8gzyxUr8B",
  "key17": "yx3qPF2gG3Jm8n2JKiYH9ChXvwGPpf4SQVKDcqPGhpWnjxc8HvS4CbHp4ya8qNoiR247m28uEhwoabddEsczerr",
  "key18": "4HH4UzY61Q3sRggTso8GeoAN1h85YmDs9mTLsw8XT8nXYasSbGtAA8cFrB4dSkP6nqhfUUD6VnD8eDTcCAnqd6Zm",
  "key19": "4r2QoE8Wh6gxL8T9zQG5LpqTdgQskLSBtYKzCokFzLwpVAqRkttcQeoiEU4qsMSKNxBC8WE7XDFV5JM9xu1qWVLs",
  "key20": "2Ywsbup1tCzNACVPJY6NoZPrxmTvvgtVyd5JfWTjTKoyGkonFvqBam9oGwVYc2vtZDDb14r4zw7cDNER83M84Pth",
  "key21": "prt4mGLMFTNZfpduCcRzibQbGLM2cG8jsPTa2nKDCpirmqZhQFqYzHyDVyu6Dc5qQrD8HK4ZDk5yaE562vjRimU",
  "key22": "5os815yRA4P8Rhs5Da1HZZvY1QLGM3JwWwkDHhi8bkjEBPVmTFpro6tozCSLntu64HHkVhnpwk1Qx6uTi52tRBdG",
  "key23": "27mYh6YSonvvDyuKStFQAksjkMdQG5KhUKWAsQJSazC1VvofoRdHy5ok7K31ZDtgDzHh3GkRb55jK9sFLEzWoXT3",
  "key24": "4zwivPxVfiRr6XuLhtMvZgEZaCx4xWm9WaKEXyUBGqE3LmkjoHPrgVQWGddyo8VKUn7PzxQ1S3MFY7spfE9RGeNq",
  "key25": "45oxi1osiq4WAdgwRy6yGmoUdh4WkDvviN3QZ4K4kKKdPYmdVVFxZEBoAsot9GxuddiLCh7XJUnt33mRKV3RWiqz",
  "key26": "59L1wWNv7MpJeDwh4DZJFCesCwTD3ZujFndYwPeVVZtkNVg3nUBg4pLECmkDwB7cNTjnWrfqkXJvJepLybQM3wHz",
  "key27": "5ZhMEL6DKiV9PvzpNZhxBqnTQEqzHwKLhECq93ruYGnZRaSKPEwmj6esezJE1FHW6TN75SGyFoay69z2tFBsBTyJ",
  "key28": "3PYYcC2Y1cw5q623wVhkjT4THphYZiq23tdCvbGAXjQ9MiMcrqy8kfLiTYFoTEAatY6wrwBL1jvSvEUJaPr6kjuy",
  "key29": "62VzhPa6fRuuCg8SPBespwhazZhhfYTTYSY8aXjGAMGqXEV6dAgBHKSwVnUrvVU1xDcvdrBjiqa2892uBD4FUndU",
  "key30": "4PfxavEorDJ1j4EHoTw2tUTwTuMYmgQQaKecThf3WTD39WQoafyvokroRW1XNFty2gpcKFnGfyzGiUhB11HTEtUW",
  "key31": "B2H4vupWBEHQx4F7mLuUktAxr71e79EVkrBhkgfpfpQgtvDbCY2EWAVv5MaqXAZ5Un4cJuuQUtJYtwRvNamM1wb",
  "key32": "MjLf9T2gN8XaixkuQcv2g6T9PV3jQ2Yqt2ARypDxg4njtb7A7KNFUZetbHWvWz5tmJcfQ5tsEHBbRYxy8VndWPa",
  "key33": "2FJQucNpuAHsX436KNSmVoBjj5CZQh6X3YEf6jKRVmRRQBaiFW6eR9Mnmd9QSt4cPRGVtG3ysLuh5ssbAEsRmdUY",
  "key34": "ihmXqmN1DcWYcxegWv65AXwd1RhDh1Ypt5Acjoutufx1nZHKHi1NynLXBDsZ9iEZjcaqiwUpVhXcTqeMFpgTBwn",
  "key35": "5rrKnPRV9UgjCnsYhphSZPp2eo1YtAutu1DGhNT9SEBUoaAdEM8UPZT2BekiYHFZnZET3ZBuy1V1PY2Bgnam2T5h",
  "key36": "icq7iZysmaLpdffxHfD1syzBf4QbsWi6LQFKLAA1Vm3UeMcT72K2Q81HosrtLSJiZSzzJb3Ne11vueyEMcHDLC1",
  "key37": "5SHQ9hJHJ7K3ifTqfWa8pco3kLyrni2chyKzH4Z4mkHgMU2GhpQ4CTdL9pMDMRmsLgEs5eLQKeVNYfM1xCr4RwzB",
  "key38": "3ATDq8kniLEnC1Ad82yX3fapnwwLgTSVBzBnCHayMdDWToVfg1eD1uhvQcNmboayJmqykrHEihWDMoUCoy83hg2Y",
  "key39": "253kF6bHMyNkuQf1krDsxP3RUdWt1tuFUFah7jA9jfknQjkqdVMHbivFPoRa5mMHKRBLJM3XxyRk4EAfEahaixwF",
  "key40": "4LGUcudDzkDXxnttWPRMqtEF8oaUSU4FaT78TRZCxT3Q8QTNumagtJHeBCAHyXFc2GHf6AenmaPadSuRMNbS6tsD"
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
