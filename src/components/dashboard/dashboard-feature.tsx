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
    "4Us11tArYknmumDvo4Yr4c6sfmZTz8srCGfojn7ogQ4hhUpisNWymJX1wtTXRJ6grVDLsFSsJtSAKjdwwkDKYqHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zxqkJiHHLNTDYRW4hqKNS5ep3TWnJH9xXdC26FFyvTyXfJG2PQA33cFKg5B7WHGuQMmNmXLxA1EUgHe31PcTfym",
  "key1": "4tBaQdH2Rv7fe4T8njkn1j8T1fDr2qvJyXV87Ts9Q7WDyk8oMMueCkpS7nQZsrbWbNMdR8VXhEudSrGjuncgo8WM",
  "key2": "5NZTbdTpnTtMa9zMchkeHJ6MUwqum3XQYvPN21JuqYTuMUxPjQTMZK8p415jmdiQiYUyrnUTinTtzePKmD6gTFeU",
  "key3": "CYzLUfPTDxmU7RiftVBfUY8T791XMDJRausC3trRo4eXAnLsdnBJXvHcm1n4Cg3pcxctSxeGGbZneyDFSkQbcPN",
  "key4": "4tXzwbhSE7Zrxe4qy2snAyiHFnqirBUbbS9XrEQkk6RcJz3aEdyMb9gZ1nNjFHjuZQ19GKCQgdzQXFFqgDvWhv1D",
  "key5": "289sT9uZVt88AHfciLeX8AMnFvaSXs2QHfRe7setF5xV7VYfrENnjwk3Lh598MaoXWiaqGUH4DTxgBuygNt8kw57",
  "key6": "H7HRcLimF65977Dh5ai9BJVDDYSBShMQG722Fr5e2nkzS5PiZepMYtrQrhN9SSRi3kPGDBH7SLTTsPMgPYB2JYk",
  "key7": "4SsaewnWW15BMiYYDmnH9Dkv2WWdbJr6UVMjWneBZBfNzT2o6aAujaLWm62B8DgqbsosLMLbMzQwJ4ctFpknmyGv",
  "key8": "2poyyh4BQ26ybM5x9TZLPvuRqYU4LdKqQ5AVPouR3e3HoLq3VvgRuqknkh9wSmxa8pRb9rTibmzYfCjBNeMLWEM3",
  "key9": "49yX58shXwEwQvonRKJtGK643DWx6LNBXeXQdAtyHpwbTJiR68W4cWMeLFLpyBJWCRsVASoSh4nfE1Ftq3pBuguJ",
  "key10": "2hqzzkkCBkhBGwydLrb6deEdgsZ5wV7KhqcL9et4dUjcVe1nd1YcSCBTc7ZYpTMHRgrxbBn8ajhP86aibBQnjCAx",
  "key11": "aR9SjvLmUBJS9tWWiWywwqj4m2Wsrn3HbsghPG3ekemWQH1kAx3oSp3SoHKULoY6ECssTG4BQ7nPEFTfzFJ6JNh",
  "key12": "35NfZDcWumuAvrfvahthqLFYrhufwkwBQmaCbqfp1mtMybm72MDoRphkLePT2jtaejhcw9kUEaPNCgUWTXrv8zXf",
  "key13": "4Yr5XHGF9LwD6HHTo89eo3FNHftBxabt6gQDQqjEksCkDH7u6QZdUuTMUJEfrHouZGeWko9jZfj7TtHqvhQHSdDP",
  "key14": "4q6Agz1kWttrBgLgEFUu6SKE61PKVBz4KFi6QT1hsvJ7o2cxMqNhqeNbe7G4D32u8nEmA4MDP6TWb7LLcu3kwzJh",
  "key15": "4QL2F49XnMJ8taY3ts3cZF2Uoqtayv7vRvkdL81hbBSSr51r3EAMdEE5TCA3sdM1Nu9CScxVJ9Bn3yaSkzeHWHj2",
  "key16": "HUJPqCDpvJ5B4tRyYceNb5ZL5TSK2Vy5mDUNkx74zCuqgHmFBZePrFFuUcyDUrrxMcHsBLJsiDkmfFwdWY49qSn",
  "key17": "2WrCEx2qrj6eTEmmdE7fvJJFRxu7p7cNZQBqJzsCBWEXxiAF1EXq5BJxDX5UZz7f7Vt8gjLSE6XjsFf628eZeqb3",
  "key18": "5FfW7EiPQfTvevSsFRmgG5dhdGbJfRii4tNrnrR4CTPEkdhYJFzBjgfJGjy3yZ1P3kMSSyCKYt5RZQwD7BqMH1HJ",
  "key19": "3kt17zxnb2GFa2Du247wcyqHk6eBpp9ouBwFj3sekSsnsKYxMW1oBkLFwuS2Rd98RGYsp4PxHcGnEeHzGs4cw5gm",
  "key20": "2na4e3X6RxDHQxcr777GzErZwLDrm8NKGYHsBTQRmoYSdceBzkrBiv1N5gvKm3HcHATBhLwQehE42kYsmtM395S1",
  "key21": "4cDBZfFW8GYwpq8LRqCGtKuxQzSnMj8xcZgQVRByABUmnmYy5AxuXT8zoQaTuLVePaKwaoSmu6ZFWYv2s61GUCLb",
  "key22": "LAaJZsLqtxBgHwQKKre3U5kXFQB663FzJ6LVqFtgmt9RUK2gNPSYMSZsVVyMiyjpKyFwaRMamZHKDaujsBFEudw",
  "key23": "4UVowc4EZv8JHpWvKSTLmLLr74GYaVU8NGmkir1qP7dirakLMoW1ds36PvhEEFtMNQxUh69sEEcYgszFz1FNdvKU",
  "key24": "5BsuCvQu9w2giTdD7Gh3apKerP4HnGSvY1oAkW1EvSEsATiXFmzMQ4XpTNVCmrxGEVBHUjCZHvycx2vvCiU5Uc2s",
  "key25": "54E4bH827kihg4pWU5oC7Dc3uNFCR5HsPoh3H72Q21E5EYRN95QAwe719wphGvTL4VqB5VSs8w1mUSSiX9QKQKkB",
  "key26": "2yLSPQTLvm9pWTbWvS8PA2YeszG6yqgBt3rHyQU22Jyycz3i7SqqTxNxDjxPa65uh7xNNCCpL9PQXXKEo8qXKacf",
  "key27": "f639zsgUgsW7T6WedqJeoPK2tTJKqKnhjR2FDtDxsiy9dPVqjnH5G5XTWmiNfC8HPv7XjZFrSY21Rz4B285aoXU",
  "key28": "3rdXdNdJdybei7HjjK3sgBGxzBFxd7cTyTDRcWSRBaXU9SFhLGFDQqg21NzkYxugEYPcJRH2866fYYPRwYNqMp1X",
  "key29": "bw5xFHqUVV2nTsu4YdHKkuP4YUtFFxnJrTbJxUVUcoSUdFYKzcAD8SMsaJGkS91C4osykmsXx4gV6rkEGsoBeE7",
  "key30": "y6KBHmLLHhSxTH68yQTYRYtfDSZXTmJrM8DiR9x8ZW9q6ZjKZneC3VQiLnPfQXiwcxjnRF8vAC6thPHwoMMrXTn",
  "key31": "YAkCRyfJZuhwQmxN4LnRGvp6oAYnqcnQjoJ6UfLRcuLKgjASFGpQZE1AxvPv94FTY7iV3rVNTDtimZ5iG2s3AqT",
  "key32": "3C6MzYfSdtBPCgKrNiD8XyTHtq16KY8kUVsY9qt5LCHXsNUoqKmeB1athmbavNMkNBjocFLkGHqChwBGmrNbX4M5",
  "key33": "99CizQD62PQ7UFTp8Kkw17X3SeGe76DhdajKGHVtvBdYeu9CYSVVAchmpr5zBEksfpeK7k1TZvE6WsK5byGw4gi",
  "key34": "5gFwb4EJi7EGJLq6CDwio9FCkG9BqeVKWmzQn1wwRvoknvd1HpMrGdaX5B44nemU67NCAmhkC67RognpspoL1tBV",
  "key35": "63BgwybPktr26tRYGQXYxKKym4XcBpwroP4T1QNJLWTrXZVQdATPgavhZhuNyTWC8QB3Uqie7bh2FysHFqbRonvM",
  "key36": "3hB2Zz68xTSzSHgctJ6GdWYmMcAc1bXnnfhVCG8X5wYTxKmDvzde7yce4ppMu6Q2CCSv8Y886T6nYhq6teNZn9xv",
  "key37": "233ar6tUpgxrz7B1ByM3HDW5jTFH7ih3SsQHH4uQwPf8dBYepPKtdMSJWvqiRhf5jG6CXYFb4befoEeTMJiTS7Tp",
  "key38": "vu5FfJRpdaVwvRmCBvbQfT9mQ3ZwfVAjCQvyh5AAjJb6VKW2AN2ckiTZrg3w7ZUyUex17DNdpGGX7EYYjS72jsT",
  "key39": "3LW4HixtT46LMW7bLxxHEogMYkEdYGWqpPhTQRKAgwqBTYQAq4gzx8FJmfZe2PuU98fHDcKyHW8aUqSjDHh5JxCH",
  "key40": "3xue4QUL5oTbyci3EcsUMknLt3RpBuBiEL9Ka7E5nt8zQNECT2c5ioEnQVg5DJtPAuLGiDb8yqqusZVZjdhxrdRt"
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
