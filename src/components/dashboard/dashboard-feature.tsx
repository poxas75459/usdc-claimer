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
    "38m8R9MFWWBU5CXjgiLqVWTGfXARZV1MAT1MvaV4qjrvgcGnRr6ecQ9BLzQJCsFn9iR2hMCcx7Ndd1iLrGbmqWWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56SCczCkuHc8mgt7o44fZU3UTTB3WVD6HwhE6RvQtTwTWpbHCGUazzJ98KAnr3YqY2EpBvL1vh2ncgSgRE6RWaHF",
  "key1": "5jxBEDvKYLpi2FrDRi3dondexwq4nLxSQ7kBNVJD2Bp2mrSjawyx4Uw2NyJhAUu77Fd6s2RbskDdvCfCZUHvr5dM",
  "key2": "3LdyaR4MSdPZymzMPWaVeQ3GhuDAVJEZrft5Jmc4KpiRVph9wRW9QXAiB7eQ3pv4GcJB7hdauMGa72mBFFDhpfnp",
  "key3": "4o8yE3ApKoSZW8zuPCS8grxCCnzaesWaggNLFQVvH5o7i4VBFUkMP6dFcHDtARNqmkfBXYqqi1et9tGnyJPzSziP",
  "key4": "2qAB8oF65ojp4YUFTXViggPdMdPrKBc2Wv2fRuU6iWanWZtXR2GHD1bwRujY7uF6WcSqJozTYtf9qHccsLT21Jrk",
  "key5": "2BMtKNg9p5KLgLKQ5ShkbhrARFPqY6EHZcbtVAfnC4xksiDeruSt7nwBrzPwJMXSpZuXKNNdrTDs2zbpmpnCaAgD",
  "key6": "dAi8gtvU8geeNtjkXnyYubjq64zWUi1AucnCQstXAFfVWKDCrRxqJfanrUvwCfA4x36BuibVvPLapQP4RkenRom",
  "key7": "8y7yGLBxjDxQu6pxRGPDLsYwSsJnnJ3S6os5XvXst23hyzGmBj8sPU5vEdF7X84xNbXYAPUGy8xk7mQLyhbyDwU",
  "key8": "4av3UDJjuzzDE7EmP7M7sDxkZnJKHDX7qu1mscQWYAzymdjxJKE8cCeSStHFSgE6DtaQaVNJdVBMCz5YPy9dfoF",
  "key9": "5zaaQoV9t15bmx9qKeNRCUdZBT7iXimQrH48t4R5CDbCr48fLxEjKNKLn33n1xFddpmxR95yxx4UmkWCTQADnNUt",
  "key10": "28utcMyCB6dhZsDwC5pEGAdsUxoeZLeps25LrKbn6NQbxW8eJtTMfCviU8LNu1XvQMS4VogGz7DjgXfgDjaT1cKN",
  "key11": "3JyFz1Us8kuZkJWLA4kgvVZn99EifrenPP8z37XhQztoSf8NDW31sF8XguJnKhPz7iqq9A687dwqZDeasYkkCD8h",
  "key12": "2j9nNHmhSAhDKaq7RsfZKvvB6Ena99iruAPdRw92ADQWFTWAxWzgRLmyGbwkCz4nwWW1uYUcAyzsHcQCeYH1nRNR",
  "key13": "4F4M3tw7WtReDwh9QprJgQEMabMSCUQfCpJJbC8XRtjUutC5FqCPXheAifgJX5vpwfBrqnXibdy7XGm7bSaQUfrM",
  "key14": "3inrSkk64RBa4vQt1cX4HEzLsvprR8fFM641QbM8Ge3yLTm3fbLSzieuk8iCQR4zMjxkg7TyRq64bdCjK739DgVZ",
  "key15": "MbRHPf2d3Wd4D2dpnX7r5tfnS7bPNV8RjeHwGfQfexmqwmJe8WQEnfuJd7qs3W2boYGqxhLz9hmxKW4c2bCGBWZ",
  "key16": "uvBx89QWZa2RmxnQX3oeSL5WVje7yxi2eVW6vbTsCgRyE9dKgJXpTLqH3FaABxQraGSP2um1YDyCQ8B9ReuHX4J",
  "key17": "4JP9hP9fuFzEDkvJrpxaXsd1LgddSdWNALpN1hKxsAGu2qjhGYGwrJXHa17JqJqDS6cU18TV3CR2JjsYreBoCZ1p",
  "key18": "2jWjfShRcdgptK4Lwxy6vm9tfPyCUgdrH88QX7YVEUDLJqR3fiRs51C7uQ8xnaW5mfYdu7dGER8owxc9KXbz9kPo",
  "key19": "2AyNmgbh7VEyL2FuUfiZ318MHNNbx4jgS3GpBvigjWJQVD7G2NymhFtG5x9R6cNhrfVZisiRBedohB8mztkeohmN",
  "key20": "5PKiMa3P5s32rj4o1om3cGmYLqX4jkS2jrzceitPkHy1dSC21Q4rk2fvRiixSdENX5uTxaLTCbYJyuwa4c4R3Cfi",
  "key21": "2QcrJGGe6hv3gbLHk5Zz3JKHYHQxohnivo2CVXBjpWdmjJywAwJVNuPEwt6sDhQM5ahtrjWRi55kQiSCZyKa76bc",
  "key22": "5pk993HE3YLdUjRzXYcHya29YqycSwdUgE1xsSigsfUrw1Dsy5UX5YjnKkJA8bURjjvZoAJtHZY1inZYGLRVUUBD",
  "key23": "5iXQyrWokpcGZPVtyGnZErx5B6hQ77Q9DN8phPtU1iDBWnRFuJeTPTxysoN6FcobwH7qJ4GqWPdKW17CXJzQKjzj",
  "key24": "4A5r2hRxQaKibwE5QRzEWGKbpMxQHDd76zUB9VfSqDRftFzzzpJy7R3YqBReNaKbJ3xtCUiRmWe6BxRJF7tEJNNS",
  "key25": "121hDk3VFS45kEKhsce5TdyFXRCEEqn3z1QxXWQdntvwwKBacBtywvmo2Ldj8gWgRKn22ZnbSr2cZTqKyEXJ31U9",
  "key26": "33KyeKr7gDs51cBsDoAwsmKgJKxUHzPbvKtgGj4LZ2iyamXhFWipL1rXhcmxZGCDuzfaXBDxXEV4AS8WTsFsZU4B",
  "key27": "GkQW9aTMNWQZxKxMyAWZcUCc8wrxzXm2R7Z5EGmwj93PTPGGF4SUs9SjXknJ7yA1MAcdikVP42JCaxiCbQQGDaq",
  "key28": "65ydgQUvRLD2wEw37jqXmrDXTRq39JhDnCnzR5BMqxPKMRrJdAHhVhXqFWeXW1Zy25xVQcReGkb94sQZy5YYntrz",
  "key29": "56BW13m6wKix8jT2ujCAehvpX6unFBRfWmvkre8T9YHNuS6CxxAMbMmp7PbzhaJAPnW8UHDt6bAJRNVCrZY1BUyd",
  "key30": "ypjoRqoC6FcHzRuzYEGdCpZV6J1EW6Lw6hbXfqyrGCqKY9dWTG2G8WCjwq4M9MVUs5PLmU5ankbPKaaiSF5zuEi",
  "key31": "22dFLaFoxed9LGniUm1e7i3fAD7BLKxfb2pjsCAUTqpbT2ApB2mxbuMEEiF3WEwtKukSV9ebDRMRiuJncmQGK7GC",
  "key32": "3wZx6bXacRzaAhJcyMxYhjhHgmchzxF6fmfFypDo5rUhR3N2u5KBcBxMUjsKmFr9eMnG5Yknovrmph3fSKPbksii",
  "key33": "3mjqr16NERHfCBHYx5S8oK4ByWzgEBJyTPeptD2zzXCBZyfQC7DuZEKNX613HKQVbH8ufVcaofPCjaaghwFC7ZT8",
  "key34": "58QG4zHwqLNDk5DkcPYsiALrKNWr2SRMEfTeSKbnhC5wEcq3YU77kAuqHEPfXQXKKQUPCJYeQ4P6ffgVSdJju6vN",
  "key35": "qyr8T7RGFLjbX7gc6reNQgEViGjm5NMDzsrv3JbxnwXMiYAaNqqPQKT1oWq86LKLyZf762gtHF9X17ofEePDkvi",
  "key36": "4mhobEYcAkg7sMddLuAckwPresGYHtnPJkLvgYpRMe9VbKfowntmBZTxy1kYYj2hyq8ZvUii1qdfoagYRmGWe26S",
  "key37": "3Nioq1N9Mm9Wnq8QU9KThRcsjbUg78KP8uVRrXd5nAmmwxVBo3mKNoEkzQYTQc9iKJiMzpWweVmQSTuSy2BXwrUj",
  "key38": "5UzZsu8soegSoNewSYTQDgoV6ugzrdHcRzctDUsaD2P1wtmUyVf4rx8vq7xDsA31Ud7XKeku4TSz4idM6EQ5862k",
  "key39": "64yzCD64eARxsRtTx5uzGyqhaWXi5ymB2SpJChjGgZuZ51xSmLVpcm28DBztwe7YuKZD3LV5xpL86nwbQsewfgiD",
  "key40": "3rg8299tMxA4dt9uyjVxey3uc2EuivuZbsg4yojmJJaLnN6UMj43vzS4mSUwrgU85eJLMr8DdEk5Mk63zwB7cGrg",
  "key41": "2PsYmxfHiXTWL5EP8nPVQnUsWCSMid486a1A78xaZBy3VErzvZw5wHEBpMqj6yCbFmQ6SFnX9EwRj3ZdFSJSgHDu",
  "key42": "x3UuHZEFU7afDUfksrWMBqBx3Go6Pn98jzSp1fZvS6M1veWdLDGH2DVUJrVRDJjvaJr2JTyNmwPGHf8AC69PKU3",
  "key43": "gCqi7rxKps9qqwaFNcsh84a7L21Kv3imcxDT82hDtEpRuuewkFsgKTUAHoDFdBdm6KPzrUPBQT9i7oftDWP9JDE",
  "key44": "65w53DqGEL58pTGouHRd7wCDRMDS4nEfG3zLgKfavFxPCap2qJq2AnEqw8voqrZktbm9ELqT7JwBAG1JSj23mwri",
  "key45": "3pJmMnij4yyogNuxC7dWFjYHdTEj1WymWq59hzMCHXNptCYVtzkzFtfF5nzMXQ4w8rvU2dHTdUDYttnCFBj4jMMN",
  "key46": "5w6E6XFgojaDhxBdMg4j6jaJ1VrS317osX2xCekEY8hejioRmYCNz1dDrX2Fm87siSBRjG7LF1Yz3Pi8sLskKwzW",
  "key47": "3cQmqDMhrHZZvP77KiRTVJcKSLwVEXZdJQPNY3RWiHYDWpY5P6WiE3t7wBQZGXwDuVEnkqr74dYLzbdXBFVWL5E8",
  "key48": "4SHjQ42wmJz4jQZUzwLv7W7yAxUkihpdAWNSP92pfECKGCDxDjs4GWPMNL4yARktj54auS4toreBoCNEDvU4XK5c",
  "key49": "4ViiuoDxcxMiESDjNLxCsfjorKPuzP9bwSkRUzy4giQiqVWExY7yH1DYUWQc7Mk2PDBkALckgrUE12s6KfaD7beN"
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
