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
    "DGfcFuRxk9WrB8SVxCuXv7WCg4a5w3Su1UQzUJd33ZuJwgKptxUDTQVL4Px19XmgRtPeSjMo36WgPaCzVd5k8S7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dXPTuHGr46NYMYMuRv1iYHjghpo5KmGM355Hg8K5TA7P1iYAb9keSwcbUd8Th1Wy9HwNsieajJMjdzrbBtQ4KFu",
  "key1": "3N9PAzgAMJxUxTNz4Kpav1xcpwgBnN7eP4yNPYNynbi1brJTdmykkUaRNNaFKiDW3jo3wyt47z3QavpwkDspRtfU",
  "key2": "5TVP81B93RfL9N5gyggqz8qMxpiKqRR6YrszxPHGDu5yXFwLevcUrddMFWW6XygCp82FZSxFj65DZgQEAyEsz7WH",
  "key3": "42F2TNDGRqjsssToqjRMdJbDd6rtJt2dwW9qbuKUggtcJLnDXxdDqh8K8NTKdNvaSmN1ztmMhovksfccjAa3eAQi",
  "key4": "3uRy9cnZqcZQ5fQdSy4jLFq5Zx3PVJZ6GiF3rHvk6H7JYrhyXwetjaEyBuYETWYLG2XZWqhQuHBDJGjVtxgh47QX",
  "key5": "48FQmf3vhhuTjDbrti6gMtad2fqH2ns2q4UFjMf2TsLMAi2KViBgSz3jhorzUQibNnUsezVmbBugVYqeARfAvJJ3",
  "key6": "dWDzKUBZLheSbecU7umUHk73qbyaGHLgsFELRgTJjXEJBYJAVbN5CpDbApWKQxTq32FHFBpKmiJHB11cgNtNT4Q",
  "key7": "YjfGni7WFVEC6PwMquGtqkHht1H3JUYVzZVPjQunbmYjngBbezrLE9SZ768UDJMJocTEE76mMFZ6A53Y4gRwfeQ",
  "key8": "3yaWRP3xqdFLdag3RaJ5267V3Uo9cRTTETczKr26tPeeC8tU8kq6sUFpSohguyR42GqZYF31MHvnGug63MstBgcj",
  "key9": "5SeVkQ5MRFCo3QtXPTaKEAKxpErNm6ZWqXwemiTyD7ozmwcueigEzFSx76C1RMuZnnYX4cQXPTbf3z7o4Mo1Gu3f",
  "key10": "5N2oAFBRzVvCPs3DcfSNhuaTEkDCQAfK2Z2uv4VqKrbsGURXtbwqkssC9qs9DvZmU6feHjQ2U4XrM3HGj2fzm71j",
  "key11": "faFhFPeuogFuTVko3JoDWpr7MPNFtedV2P16suoyc17emUpTcrvDmCDq8jbhKcikr58vJkj2pnsBCeHnKkbYFkw",
  "key12": "3EK931vmuCTf1qdt6LMHK4ckGynxHxtmATjxd8koNc8aXix54ogVZeFyfqx5X2KbnehTzfJvZSJuUmjtTDDxXE8a",
  "key13": "3ZcxZD6dBgepzYozLVGSQZsLx4HNKMrCSFHGNPE9Wx9fMdjup8313K4JfuN1WZD9EtDrfXLcLLjTxqFuxcmVjp16",
  "key14": "4ENt6YEigpMRaQdHHvrgbtdnoqoyA7cFTYDhttXK1BXv7G18SiHbYGEm6x98a1rcQgoDzj8TunxUDbxoj5dx1rym",
  "key15": "35bSbQ3g5u2Qpg7eNS75HrBPzHTNUfigHmx18RsTQLNHU52AAqXTAH1anEo9oXDjcKk8yAq3XDuYR5QEsEk7EftL",
  "key16": "88nUBXr5rr5o5u7zanHW41UPeY3U8pLxJX3fpnD3e5Ps5hXkdHBwo9fudTmyf9CCiX12V2muvGzoyKfB2SnqrXW",
  "key17": "3fHtkWkJ9Z4iWH46VhWpLDPCgEq1VaxgyAgA297Ay6HmuDUcnTnbqRjuRuNHr5qiD2B43GhWbh6E5J7TstbqXWqk",
  "key18": "3TAB3HHo1RTEdmRrdVDcqVH94emt6DFc1J1abnts5xA6P17AYaDWuy1zGo52K4o1pjk2DvGUvd7uUB2F86Jvt15P",
  "key19": "44V9baxLof26L1nSC6gV8mgSKdj7QQ85qjHQDzhsjotAPuCgLhGj3UhHox81CNTD3VfjkJHqUEFRZUTdU9iddzxt",
  "key20": "612e4gG7SThSZfnN81o4PF7wGwnEdeE8RCmBZaVNkpwhNaVkuJWpCHKvoJ7QxWyTXHjF6731ThJ7oUU48HG6bvEx",
  "key21": "Tp9X4JdzMubdxASVuvkehDX5KbLB5A8FEWTigUiuVfYFuDwig2egYDXwxdHv17C824zUKwbwumy93dKLpcxf8hT",
  "key22": "2KsqyyrunPdxijQj742uzCVZ49neFUyTP4gRFvhWmGLd3EYtiPndYw3GmrwPJT8KsVAkizq79PkLqWMyhx25Myyu",
  "key23": "2DuTtzULCcLZr51hihCisdsJQbPVg2Jp8h3C6XxGcuM1qsZC1M1MJ5KdwuaNNMnntUqPJ8i9AtSH8bea2ujXHzbb",
  "key24": "3dk5HiNmyJTNWQzatP9LJsLwnS3EAriDc4hqQtyyWk6bqFELXFm6ANHX2sNZFxLKtHQgusUksRu3okVgrMFAjUPm",
  "key25": "2HJGHPR6niXR9UomftTze4xfMTxvpkkEfM9rD4iJJ8QVkxzgttmGyLH3A3vGKSmXAVbJ8ats345nRY9tfsQuk7NZ",
  "key26": "5gZiEo1zCKfVpGUacez9YZDQJ57EgedWiCgLmJGRRRi5qM4NsMP7nYwEAKcb7BVZqEyQNQT9nK9GeVhGg23Ts9hM",
  "key27": "5V9zXDrbwAwtGxW3h1KgbYmLnGhT99VjZYkJcKLZ1ec2YXrqQJpzVYbcoLa3PXstqKcJCyNaRifG7PeEAEqmEnSC",
  "key28": "51aqk289Moh2fVGMAwSo12RpTiRPGKDvNftX1Li6BU9ttvj4Yc9au8pSP1h2gYeE5pgJK4fdvVTQ3m4d7bJf18Ad",
  "key29": "Ek3snVqbfvGdFGM3HWN9dj6chxyKxgDEmYSYYDz86bwVbzmsdy3G6R99H8qw1dDugtN2e6fQba5SQEbMBWdoCmC",
  "key30": "2iy42dpWT5FJy5RQRziKasFcDzPYvWXWgS9Zv3Rvdr1g4eMeP4rwjHLMkAahCfw8worjMzdEGU7N2UTkudkKmPRE",
  "key31": "66KHr9JdWfMRHNkn5NusEoQJbd7tTPysz2gGtcm7wp2NW15oW4WXy2gm3a1rTjNFd7xLqC9DeXXLtcU5GfXw9Zez",
  "key32": "63MsYWtLA24Jws8ontj9UZjdmvG5yhuFmk8aQJjxkZ7oWQ1j9ADHVyj5aBPktFqqRUuha45bX2AxzpcUZYPeBXL2",
  "key33": "4VCjYnYcmXTSPN4BsFD8k8Sh7oZtASCbu2vgcHC9mU4RR92MUeoy33SVVD3JUi6qukRxyfg1JztmrsrbbryeKjj6",
  "key34": "5e1W43R85pNgg4NVkP21iVCMZ2rvJiadDC2SZnNUuxyXd2doBtMxqiXoYYZSxkeifW1r7KzcSSTbmPzrw1Eiy114",
  "key35": "5NXepZDKs8m7kfHdLApks4m4KbPJjK9VvHq4tuckqazyiz1jdoxrGeh5cs1Jrtmcjdi24d5ZBVhLhYZkorbnbdN4",
  "key36": "4fsB1AdDqb2SvnNMrcAnAkfRU3TgPae9nMn8g5qk8SWRtWdN4hQhCJJ981nxnZnx4HgF11Nun5yt9rRMEScA8fxV",
  "key37": "5UZgYCgGXx1fdaTPnsJhSKRq55SiDG8Tz79fqmK6AKd6gEqXnw3bTfG1p3RL9Z57nk72bGfKz5d3PebHReGmSnk9",
  "key38": "5BLY59fUBD4QXAVqahbK4wPV5wHhU32NZjzrjBgCvajV7QGD6hgfeqKegJkADxhVTSZA24PUzYHRcXKrWRboMTzU",
  "key39": "5SUGT6tRo4F4D9AprhQfPrCTGgkPTySBKNdDLUpkxj6c7tyad5QoKQ3nNJpCngw9dY7St43G5MxCsdLj8QbSoK8q",
  "key40": "5qCSiVudMCgjg4w8WH2PFescLEhewASdhqf94yhsRHL7q8x33QxCnDFUPhrxLZdMDYbussusLmWoUvtvD28jRDTz"
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
