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
    "XEAfdzo76MJRZN6BpPtBmjMiT4cx3ij2TFVNprrEHJ8mS13rJpASC53YZnAg2K2GGaJQAQa91ts8MmMtReu6wAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cBFFda7Gxsm7bzvuG2qQNwSQq3d26k3dpq3sXBFyEJAaNKLpg2PG7ZkM28DLiSyY64DN64oViiW4CZL5ZZSeaZz",
  "key1": "2xmaXiVy3BSH1yiGJETap5QzeBoVifDfjeQU6PvNnHZuK82de2CQESudCEQJAzEwkJfuZLzugeBHNanCzdGJttuL",
  "key2": "4Pyhdf4gbCYnTuTvWPUtikEzEwE7m9nbr2UUR2b9hjyaoh5XFQHfvimyXetvCmLp4v54zRiq6SHDjHF2M5ZqMCCN",
  "key3": "2uVMEm3HdpHoWxRRx7ZiZLWYxSjRZ9WgfRigyCrDbAJcpUXyCJJqeysjCzmZMDG2zRKjQNqtr8ofMDKNaDJGrtbj",
  "key4": "5Aa3ry83C61THCRQUjpjws6badrwUrXYTvr4JvTCQeGFiMN6ZmFx1Dj68krYfTbktGHKsx8HQW3acv69423oQQzW",
  "key5": "pT645fxamMNSUUBY4VbATjiYNszKTDTno5YfZHzv84DqTD1DiiWfUuLkV7176tXT3vLcbGm4pGcnQSTFtAfTuPA",
  "key6": "5mpdVvkMgV7EzK1NVvFXNJcgZ57yemGJeSm372wuzNRZUxMAivvJHVJA5kgNmD98VSit6peQ42d9J9GX8V6cCSxJ",
  "key7": "2aArL6SFvmFcrH8WqnhKnqMomiUTSs3SmJxCst8zmECj56pvNqjcZ16afmxSpjgofiofJhG2VydDiKLRbjgVUDGB",
  "key8": "5vHjcVdH4Ar5Qh8fc58DCGqAEupqAfRBmkjETFxipACg7iWSfJeE7WfD6JpYYx4ySGWv2eTWYt9AHHNxaLbwcyhP",
  "key9": "2cG6kqveJLkr3qUaLaCwpiMAGUx5AqQHdzuaTuSYBbMss2BLLQPL3cR9owNAAiH9DqhVyz8ckyVqJefG54ss74YA",
  "key10": "7eCtqX6dBUj7smEo9xFjZZwtxosuqGasMH47EaRYqYVjCTsiH5kNocP79RkUkRZdNfZCTPZhRD7BGuFkjMHstnG",
  "key11": "223Vkm3hNRv6rfdLTnwvtPUEZ5yJMJdN5odH6ZHboG3vJJtGKTvJ6D5NSuxYWeKdXfHaQiv5RU9PoLKJLZ7Lycmf",
  "key12": "4ikYFxacaBMKoYswWfPvxoByjHuJDp6cukZdCedsfjmNNkfr8EmNQ1UJQUXmmpWQh9Gx6VxV7w189pgjgbCxSxNT",
  "key13": "2XzRpXjwvyrrdos96BkdR3Rwhm5cgHy7Hays5gnBw2abaCAEZAZnzJeW3f2cnuxJrdpxzCmg66w7CdmB6GEArebk",
  "key14": "2fAHzo7snX4Cftczwp3vKQwFNUy53Qu2NMxQoq79EQZacQoyx8ZGoBa1Up5zrUwRGJ1fNyB6SaCEN8Fd4YdHeRE4",
  "key15": "5rQFQzWcW5ncMNJmiyHA3STirSTMcfAPqApRENTQ6fkdvVV4PVmpZP2rCLtccrps9kujbX8omaBdPp9MBhXr5syr",
  "key16": "gFcnHvZ2ALnZpTZQXe3njUzcCAsQrTEDCbDVU9onWbHi8vVCG2QcA2fFMR4VNo4mAe5NPvuMpgnfJyqqm9q5pjp",
  "key17": "5GSnJodJknLnaQYRUfyzUYUFGDQ2cSXpCkVYhPZrUtwdteict1jFEgxXsRsqnovTDSSJ1T6R2SgHDHDga45pqBD2",
  "key18": "pG4WpBfjckZg8ShfeLJ9mJb9kQMPpQ8QspZxh2XERKf9MEzCDMRNcRqqCP83nU2JgCCgFsuyEhoKxyP1YsmdoBd",
  "key19": "5cfwjzfW4EpsS6sG9bWfSDry61FmzRsdf9GsAQgNkJ5tcVwZLXHU6yPaDfyXUxNeRUfmgnehBfGcqAKY5pL8jExw",
  "key20": "25FwwkAHXktG6SK66xD8bbGLApWQyiD9LMGUN6yBYMSx82uFa2hgye8AfxfQh19LY9JJ3rzhXn2MrdMyqM2qmB9i",
  "key21": "2BvDo59uCjyqV1eczAAU3U1R9kNTDCtBNctJfbr2xVaYmob5g4tRvHUqzgatrEJFFhejXC5BKsSsCuYzqxu5DEFu",
  "key22": "4MsURMaTjEqAQhMwzsVaTRSKHCWqvn1atJ9j6iVdCDya4YRvxHNFWDWjR31EmyALkUR81YyXH7rF4BsKmikc3qgr",
  "key23": "2d5VkL3fhLArumCtVkd5PtG5aujwqHNGfPJxoptU9gLiKTiQkZVmGtkbAS4D4tgjoQWcGon6XH3YbGrqMX6MjVUF",
  "key24": "r56h83AZUqdVKD6W3cvaaQqv3yBGraJf3kAZQBuYKfwEBhdupKWD9HtTwnfGke8bWpe6aL6VpLLToWDDQTUMSXg",
  "key25": "2um5XJPHSiDqmms5qC5cCWqVATioR2mVvu7M3FexYB994xFJbtJLkuG1sTCbrafTAPp55LwPfGBobssz79Bo5uYJ",
  "key26": "2ad475m4kVo5enyEd7Z5Kpudac61gtBnJo7VqX6uDsSWSSBfVUT6i8WrCeUsbUbzKf4zL9MGKUDZFMTiCt5Yfrpv",
  "key27": "wLqSTBs8tQQMVx1SPmzEgkbEFR4sPq7B4BQMyocgdKhMVoeaCRjcVjWziqo7uceTsfphmxYyXh2Nik9EsGzQt9D",
  "key28": "2ywqyN3Ro345DVvHNtjgyeNGFJun2pSR77nhuAiUQD9SghSNFJGqRZMwo4hyAtqNdLKc8yTbV8y53EWU2DoerJws",
  "key29": "2iyoMppkLsFwgLSXkLupquLNtWvQZhoqabKdAwGLc6YPdu3EEX2JDmf2sj7RBuAV28HrCNXUiBZDDf3i1BEQhXzN",
  "key30": "2zZEaMJauRn2yAAroKTtwRY5zrzNXd8i4NRfL4HwH93bRh5N2BCQEXrgKUnMR4SwZs2osFPGtHB2kJmveWMobD9p",
  "key31": "3ia8cFwcChyShv8hGpdhbvwroH5HR2tgVHB9QUknp3HNETgD2X7CZiR6CRg1JCTfLXFxaDoGznT5NojCukQTzFsQ"
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
