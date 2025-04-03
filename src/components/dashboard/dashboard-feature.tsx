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
    "2tWMCh1C7uwmUfZBgNhKbzEQGFU5ERtjyZYV7xChqFDsEZzBrqGRfb9Jq4RhbmfWGRZgCgDrMVUtbrQAr1C8NU5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5puYLka1xL6fijgPaGyJnK7zPVSKcoQmZRpPjWbvfhxhtWX2gop2QKxxC4gbkBqscijxjYrwvjZiZhKEHBJ14emX",
  "key1": "qUdWPmYw8jFrqxyMm3BYvEWZqJ4dZFWu9zbNC2tMFPeCTDUDnpKuzmXdKbqeL1prRfQKSwD57tdNXLRC716z4We",
  "key2": "4RsxP3XoP2fnpSckp4D46KBhmwwEAk7ah9QYCuYMDJtHTrDAmLg3yVevdjkjQ29WqZVCak3g2eBsippiz26PfhqZ",
  "key3": "4KUwsPLXFQF1JvBJSMpe4NQAszeGMqSvi1DRMuxfEjWPYH9Ps7R8zjhyqhUYPrkjBXiQLYMWVuiYMX8TDCaxKWpC",
  "key4": "4DvF5E6hR7zEh5YJTX9GdwbyLBPvgy8WFmTresjncib4ecJa3Hb47h81D2jzqtAxzFmksUaGaXq7BMCnP696uoVH",
  "key5": "49drcttjVVBtzyCiEHRt4SXFy75vsdkF2Bz6wjkB24EJ1h6NP6SBH8263e2rXy2Xi2A7qC353vqaNHaCNzBvsXE8",
  "key6": "2BBXYwftckxtuuchZV5HpdtHuyicrifSjDBeqDpCt28PajsHFXaZCW35QvkNqAShC86ibH3W7ikbzqgD61Z3o8wp",
  "key7": "36n4VMrMMFVfFDjgzkYDHEfSRCsh3548EpcZkjCQQigTpqNwRoNCinu45Y6hL1J66Q2ig8A4DKz14ub7PYnDJFPi",
  "key8": "514pwuNT9vWdMD825G5NkBcxayPXD26kFPmkxRWPn3GCn2EYQ7D7nzn8U4iK5Q48h1kQtc5Wr3zsKfznu4aNqrKm",
  "key9": "2pKjVW6Hp5Go7VwGieXUU1A8RCthS8SyUzBWJnZbiWzD4rgPB6eGBMfhtwQLzHDhao5WfkgRccTrCDRK94yt1mTN",
  "key10": "2QCeMTjLMvejapTLMWX1DZpdKPjQw1XoqmpiyF62EHjuRb8oP5kLAw367DEtFhGeqUTBd663GCUxZUZNiLqyg2PC",
  "key11": "GXKZ9977EbBo3jS5KxSn6dNvh7nJ92UPz4dXDEbyPm8YdRsKQWZ7QpfEsi8G9aFiCFwywKoveE5Ke6iu3JWon5o",
  "key12": "2kef8rttJttPn4oojQYLpWTNBroUYTC1CE9HdSKcPAhmSHCjnhzABo9nBzLTGyVAEqDRjbGEypQRPzWeFjEBcP6b",
  "key13": "3dN4BRqtXQg2gFm2fSospJDhb5e6hpy5kj2GHKuU9kAoMW9ovWdVQEvA9cn1XY65CVU9xSMKivWzYV4Q4JofVAuk",
  "key14": "4xXbznqy2yCC2GPLaYzCgsE7YwoY25GuLJ47yFPG6553LfDCs58Xcebd9brBWgNXi5aLY1U91D59bbco2Z8To8Nz",
  "key15": "3rVj7jVP4E5nP2rmfBQmdAM5nDP6Je6x7BhsY889bjh9BcZHddzffiw18UGJZUhmJkUhVzGcDCraWVWEkKZrVqqC",
  "key16": "5fyMik9nDaS3NMMkL8n5sDbgonWUD1uyKJ1BaWrC4u6eorJUDvuP7fcKHbUFejGQb2oN9moaYgypzaTvnhJfVirR",
  "key17": "4uMMrpNBw8S2KLf5UhmboUugkTH7SrpjjZ91xKMiweau7KuFSYf884QZg8YseGNHFN9WuKaLu6u46sFpDT6TsZrE",
  "key18": "67CZkhbTHQFccQaxGEa8c8j7iJFRB6tRiQt9Sh56VurBS7GXXRF5EJ9SBbieZnEd6K3qkFivAwjATUacSvHoYESA",
  "key19": "mv2ctrzmvxBvSx6eMbzoNT2CS8458RLx5r5vdRLFe2b8pkDwd6fVneLx9vSY5Qur7AvMoVmdiboK2GtteLdHjqp",
  "key20": "WVnbmwoSpbLtMPR8TsvKChe9Xk9dsJ1wVUqVecCPxUiDtS9rtRDzRYUnogiEbNnxg9Lx2e6kuirHJ3z2yDFJ3Cj",
  "key21": "3jjNiQHXKwGgqZN2rSCRZb3VqDGw5veU9GEusajQWij89BwP82EvBdobTRe2vuhfBUQ4YbnKTfGEMCcTnYarU7HN",
  "key22": "4rphYWvALua9RVVaYJr4R7T7MBThSdiPS1HL6qNnmi1hUqsZMJZyZtoMkkZ45hWNCcKrtknWsYPeHCv1w5TMcM7L",
  "key23": "2g1jzpcshinSRxXhPZLaFXFyxzdcrugHSyDAzPkdWic1AK3Zo1kS2RnJyyMUU6RioJpVvehVvMgH8Z1KDBuiVg21",
  "key24": "mnAkThVZB7CP34c72ciMHQHibQnBKgC1EgVZJyjhCDjXPLDMy7Gw1JvUFWPPmHL3H7J1br4sztNSNzcEKHFQqJH",
  "key25": "KBZre4uFUCSPpuGPPkBHFic1KVgYpVG7DbkjTQgjz5NewPLJRUyifqhy19GwqW95pebE49fBirShsLePw98feYP",
  "key26": "5t1oFMv4y8w7AnVy9XBFsqTXVSVnntDrrw6XLuuUYttVT1FdoAXA2TNehubEnhvqBono859EDLGQyPQQKkQUkHYZ",
  "key27": "3xHaNTG5bBauFD142s82Ftf8wtwJNMFenRb4B4Mcx8CQMoDNM2UYnPCMpWkTEDjZ8eFxyUy64YzkttGuufkSRUSk",
  "key28": "HN6qttr5SZBG43TEohhgu6m5d8rjBwB5mux1yXtgdi6kjQ3RKVsPVMinKsVi7C73UfkLkLD6gBNcYJkgqq2KgdE",
  "key29": "2A7oKKGvBN7VU2oAwx6MK8WRoWCngBMMXdPr9oAwULEmwmeEWzdM5XHJThPMt6ViouW5SUFqhbymzHshoST3Kc7m",
  "key30": "e7Xi8dtGGu7RhAjZyowE9vPZU4bP1XxouVurivmFuTTWpSmR8PYzcHT33WrtJz2uWMSYfeHwBBc1WY3Cnm2mpGs",
  "key31": "fY1rxEPscsjWbpK5LCrUTAcjmTfwV3Y7EieJC3J2ruXvV9p6gqTYTH7YiBXwSLWSMN7JTrRS8a62WQsV1oDBGaP",
  "key32": "2WuQXmuQ6cPYzQqyyaqrSY1HWMKGmmKcKcY25VA6BcgEcrpWJ9sT6uqBKgkC1xdLTYoH21ksnSAmSx3AdNMPmxja",
  "key33": "4z5kP8NMU5By1jNk6ihEcxwLZjZxBX1LoBvGCDsRrVkWZTV3EiJkcFq1jHjq2QyaLk1MKCB28jep1sQgTVtmSntp",
  "key34": "Q6o81o1qcThFXD9rP9Mih3yEjswPkbxdCS4KUUTVMC4fVX6oZkvBpesy6gQ9Lz5vpgS9bhcsVfdBTtvCizHsLBb",
  "key35": "4A4s3uFYLbevCh6uyVUkVeTzLevgK3Rs6SS1yGzZMXPWi2yiHMCemH1ssHdYxCPbcsepFFirSoAWBJTM5VjExA5f",
  "key36": "39NJ2Lkg1BKMqFLLLGX9Mwn1cxrx7La4Y7ciKn6f769F9EHpwjXRMMpkDfJXzS2i9SfsTMFaQA9aJiYkW8gSQZJJ",
  "key37": "2pwrg1uNxaML4pVqmnbMSm1cVSmqJ3j3orAzWgxNqRobZ1kMLZJXKdTZbos1NvQtvN5uxcLH6Vj68nAekvv2kFVW",
  "key38": "53s63QYwo4UxKD1WuM8AWK561ycnvFzGFPhvRaVwaBok4PNJFUCfLiFebzEU5t2GW8XqyKHZihMRFr7XKz27QVE4",
  "key39": "2W9AEoEn3JdozNogGeW1BYWWToyHhVTXbM5iZo2Rxhk9Ycrff7ChqAaAAgVR9TYxeL5oRqRHzAGd5kvjKsX673sQ",
  "key40": "3917sA2CBvxpsgWoxTVWM1VsT6Jn6u48wa9zpXni3Jp3jtkRBREGVTq1Yc6u6XJk1J7SBfN5VLfAvUNmQYdYarBU",
  "key41": "8e9ZYS3Uc2jfXTYDjY9uLMai3PE1X1DeVeKnhkdX6z1R7Z6yZzkkrUVrTomqs492QYJ6QTYGFdGNnec4HoYELDi",
  "key42": "39Y9GF7m8GtrakZyu7R521CStN78bLg22LELf4cghp4mmCFdnRhb6iVPAwWMnUEdga4qLcZwCPE6YhDJXMH41Dem",
  "key43": "2VHp1aXJtLz2gyKzTyo5U9eHVdkdEaAgNCwgWAnWqqKiaKzGhrqRirCC8E8MNmhQN9A3zxWkenKDSs2XwTJKZEDk",
  "key44": "5aTfqD3SWW8EkjfYnvDL6pRLk2BKwywxJfX3iVnj8UvKxcJ5GdUT8VrX4AWCJKzeWuYcXYaqLmMeYjyAY7hXJYf1",
  "key45": "4XakuuVo3RQQuRMgc2ngJdfH8B9feDLyRedSTsVJJZJvNECQFxzK5ibdjfwsmYmbJ1Jv35sWjCH6kGCtg8b9jW2f",
  "key46": "3znJe1kPXNrsBXqDjcow5RSbn8hp8fqaBXYvAfnCXY6W7xmuVisHfSVWatk8Zo5S35LQMjhGNNA597FR8bxMfh9P",
  "key47": "2k15sTheSJvYnpFaNyyPqr31ZYo9PXyRznX1mPC878LV97HURK2wqwPXeQMzxXM9CtuDfSgS7qmKvBtsc2oqKbce",
  "key48": "5KiTjw1Yo7r5haNdcYx3J6EVQEovbNiWTbQFPSwojssM9QGXSJ2TRm6XTuCEzjHzDGos88VPTobgcy8D2rpxaFuh",
  "key49": "4q8bL7231fp4GXwZUmHexZEgVcwaJbvCAzBsBvtzTpgXLe6WxPVfQxc9x2DUvbVULSGQqeoxLNuzG5nB55p7aAGv"
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
