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
    "3dbd6gzz1f1D2rRgHxJhxt53sqRgqUA4V4bwj1PrubvydJheYZfGMXYjtF3BGozmtU96zdbR6ELVo4WRkPsZo73z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JJRBtpnpYW9ikmeqCo9DMBzqb94fShhA2HbR5eguTYuP1YdiHthmzD17US1nN8zDdXZ41QB8ZNQN9Bqxng1wG9h",
  "key1": "5kzSHA1tD6Bnq9d3RBpAf6mCDSytwcwzr18j2Dr1Qx7sGKgXAvTaSrm5y5rLzqq5hB3xeBcF8gmJiZ7E94GYXMRf",
  "key2": "3rMHciHceo3iU7pM64bezQf8R8JYR7ZPfRtTEwoaMpcXz2iR8gjv5sfNMDXK7mfwkYebJJrrMsL1oDP9kwc3xkf",
  "key3": "5zNWfyCaWeefohDM9KbN49yMdZTNWmqfTxV1KB5S4rwTdDQVMgMKhfuMF9fqsMnFVkpHQEMxfTbKjcv2JvWMX28H",
  "key4": "2crki8ijp2zA7nHwhh1btq7y5aoxWimE9b3inf5XGB7wEJ43kvfGAzA29FpzEnF1zBSyYxBdPQpZZxJAXXTuiYiV",
  "key5": "53FdrnH7KMxBXUfzPSK7FmbMrrEM9LroNxWbmuWCdTnTyPiBx8bzBgAnU5UEDUXdDrHKSzzGEzpWbgfqspS7EQXf",
  "key6": "2fXJnsMDSthzd8boB69XtwSCz5u4Fn2G4NJ3e1rpTtixP2puDXV3SfSqpvD4wivNHBWMqUNapQKyTtiuaGLVKVe",
  "key7": "4QeNGs1XR5UV2yEw3We9dURzQrSmxg2LFGaMhxQXkNQkGctGhtdTMqtZiRCJUBmfQSeKfSiZnVP9NVEYVYhtDYUq",
  "key8": "29X6LaUR5DoPT1JWncUhBfnKz3mEB9rsNMcRymwPpnRnHV6CmCHjuVzKersXYQstfD3brFrEQCSFprEzicTRogL6",
  "key9": "hb8SPrwRHWUpw1km2fUWgVEv5x2dULhW7uNE7fPPm8cJBaTGRXo588h7QAZbn5AuKrpKXdAFEgNaUtxdzaAJ1we",
  "key10": "4A3ZRKPg3Sb4i9T6XVHmshDkRueSz6AkSpN1b1WKohN6GpUURpqjRQMfQFEZzDZxQgYbB3ydY6Qb7uBD71Bzzy1U",
  "key11": "3Y7zHBHJf2vWXW4uEFsoQaDmubU3ngLbmTD6pL1GfNpQ13we9UHjPTZAaFtcLVgtzB6gyqT1U6jPVoSPJG2uaW7K",
  "key12": "2KrReEJuKczsPbzv2kUFfigd7JNGaKXNkjWLu8zQ4y5gvJwfmYriMWshWS3V1B3BBxp6F4Xvrj6bT1vLyZYGSBYY",
  "key13": "4b5DndvmAHDZhnv7XibWFjVeQ1L9KXMo1SSsQZX8LPKSpnkowKgKnsQM46R4bb73AAXqL6mRXp2XZNGxD47XqnrA",
  "key14": "43sxqRA4btsHR1YgcyB8wQXMgoRN6K2hWK9Z8pZNukghbkhLZ48opNQ1kc95vprfnQdcaQ7BsxpdrdY8bznxuuZC",
  "key15": "3assKtNrWUg4BJdDQhNmEQ92v8mRx1CVpRw47v1aEBKd5v2qAR3zfbdDjQSaRFRNXudsD41psRaq9tW2uCEeadqB",
  "key16": "333hYfxFHaQ6abd6jLg4AZ26tgD1W9x1y1Ztojm8XQwwRh4poETnjhdoqj2eJ81a5KzaEYGPQq2L1vN5LUKBhh5y",
  "key17": "2x9nC59UkmsKanW9RB8JyeNiWmXL51yQNVaxJVHhgym2NGN3Mi26pYgq1QC4h1n9EAf7BPXPGu4mY3X4WKY61JQa",
  "key18": "2gtvg4hYr6yZkfU3Hg14wbEETQHiRPzkBvBYs3Wt57j9v3gpSQzqGC9i32ZpR329dAmgrCtzHYgARUwHHihsUrxS",
  "key19": "3Eonx6KLuQxwLLV9ye6sX2wvGJQp6f8QYiuD9T2mFgaoD6g919rFZQuJfVSCjXW8rFtvK7WTjVr5tXm3nqfgkpkW",
  "key20": "41HVJUoDyu93h6LBZp5XV8fVy7oXyLtXA7rWdwjqXbJqhpmqYMVERpNQvKm6soFS87ngRDyfQNcAqeCaDPQuCWex",
  "key21": "73k7NqpNXQ481uq4CzBLRc8fDXYcEAPjMXNVXYkzC2Zzry5p1ByHzgVJFRVRz2qbG1BJRDJta6ybyoUr2etKADz",
  "key22": "3AbTzUmW8PiTFBVnCDnWLp6gk4iy7P5rdNA3ky3561LMkD2omWL3hQ48mb45zF4854JmFsy2Nyv4bfe9MizWiFUF",
  "key23": "CjBmLcdNYZGsn2gxQwYsi2Dx3HSNmihmBBVjYzphQxCSVhtfMnC3HuGvfuCaMUnvdPmuz3gdF2wHV2FWwZunir1",
  "key24": "acLZT2cU9CPN4f86BoYMdBKgpDxDfRVsCGeMr4GTfgtLfpVuiyRGspXaZDH5YX7TbQWRxYWvh1LLBCwVF1nfZCH",
  "key25": "4JWptZZQYgLv9TvUdWe2uzzBsdwa5fZi5mZbkMQ2R2aJhhT7U7iGjBWw8z3XUHRiCHXg9wkY7h9Gg14xkw6jLvpc",
  "key26": "4Lvnv55HbzXW87WFSfNEf5r7MLEQshmQupc31goK9CTDR7Thx2KZLVLAanFdvELxFVaER4ih4jrfWKJ6gGzp4yY3",
  "key27": "Tt6WRoz6Mass3R51oesVD4m1JvKWA63cgS2zXtrne4NV7CPnT1SX4GuvxgvuarQzVwBKWSkMpWZqKxZCd3rBJuj",
  "key28": "eujERV3KhFaC7c1pULpbxRdxeRJjvxFJ6voHBdmjWmLeFKbhMvE4GntGyMF3ii56SnCNbpkVfzARYbCb74zBVNz",
  "key29": "4cpcFfBkc2cwwfJGokLU9MGM6YqDtciQu36jQeSkqzxkYExktQmy6E5rajbsX6Eqv9AprDGcPLq2RugHygGrJUvX",
  "key30": "FGxEWgNeDTLwHJUrRoNCLeEmrjcvNngM3dPv9KAHDiVohrU3bCmrpgcyihV2ZTLkwEM9bWPxfDyYHnRNsSrDSqF",
  "key31": "4DrGY1EgT954uPugM43zqvz5ZJrSXW2qsHHX5yccCsbDiiX5FvKjFxB4c9Hu7rd4HcfWt2GzycujcxJBGntouWKM",
  "key32": "3fbnwQAcstMCXBSY3GCMRa3oJ3YM14VsHkBuArPY1beLVXEKzwRXCxSQqnfr19U3Rb8mJ4xzk1b6zBxQp7HjZoLp",
  "key33": "26jBkpBKyRPvDj2qFaZSkv4RLED3zuDjDteXprENvRg9XUsXPKt7g3H4iJ4mWh8GhQvU9ptRqQEwTgM5zZ3y51Lv",
  "key34": "2bkmWXeti3CUPm7E8ncqzJ9UbGjUkvCzHjJ4b9tnJHCTCCY1H48TbDU4MFZUYhnTZboZ8yM7FETfLMLG7ebH2yHb",
  "key35": "5b7D4Kgnhv3D93rLGp6o3TD33L3QPa827268VrwuP86h4Gk3e2cNfB6SpJMYGqtuPZcrJy76oHsxkhfiT4nQmh72",
  "key36": "63Qr1wv2W9XJgA8QRJ4zx7HtVKjED8hUrEgpq4wDht3zZY4rX7zTsjrLVjwtQvq9MnHpADSKKWbd2JdZk3Dp1z5s",
  "key37": "2crtr9aZEHnWYL4aUUgi7cp4PrT2b4SWHke9QXZ5UasLwpS8ibbC42B7qUwdTMdAbkTdDe5icmJnvwdRRNnjPehH",
  "key38": "2Ke6rBiQSXPZqwxaLQrmgafX2qNygzMVyjjHRMcQDaB7Q7eEUmkRNV8ET8XFmtUYoxeQkqVFaABVSNSATcDbDgEU",
  "key39": "2LUhyefGEzavD4dntFZsh3gxPqeXgLxvfuF17FzU1YNcQjCSp74fjesLCCvE83kKMzNnSj1tY4cNAbD4UkQ6UZmJ",
  "key40": "28fYC3Ci1QvsvvG35yCFbWxRLLnF8sAVKZQC5fgDWLxoJbg44UTXdwvF7rsgD5CRJYYL43ZJPK3FzTFGehmPx7Sa",
  "key41": "wwSmkodQ8imGjEeLaJu9QcegKEFtLyVdggL85xHD1u3kpggpKcdjPxr5YX9E3xJBM1akxbU66ZjqRtFXgyAjLgu",
  "key42": "29bpJcUggNb1iwermBDJkFYAZX4gr3su8zt1TsvzcZ2krZRgi6DPZmsDHVB4e3iB6Aq2vxoW7pyR4C62g9WVdTin",
  "key43": "26j4BRhZqDqqNhsbiLt85wnrcr1F4EKQTAc1qSPrW5b1nvqKf7NNWavXoiHYk6Zp6oJGHBfifVFCLLF8aEM1nDBU",
  "key44": "5dxS2f1WgW1iFMaCuDYP94kUyKZH2nRWhzQRkWnA5Gt6Z5kZLXG9TB91S2HraXdhKdruQqfwTc5AywV3RZbYheMX",
  "key45": "25HZBHeKEZ8cce9BE25YP5UZytYUzEsSznPGmp392ZyJRcTysCcF87FQjyzAJT1Fr7fvm7ySWbPc7iNvhqhssjVd",
  "key46": "47aWAtjLDW5d21j3XSV8EZ1d5ZhYHJQ5PTu6MNP4gxyAN9ST45qHygdUDYkvUJbZCzYH6PwovFu1ch4bAYqpneuY",
  "key47": "r4kchFW3gu1GYCnF2EmXati6Mdg579rR8gcRQP2p84Fvn1jmj8zWRNGvZ3RvheuyePoKagtG5Em41mTpwgA8Q3m",
  "key48": "unCs7z6cbAYV3Uh86W9cqmQH8d7u9QkfBBHJoXejoYL9fwofyvdzMemm5DV7CKqH6uFMZ6EXXBgES813ib39Q3N",
  "key49": "3Rdz8CgGtr4NusgZJt2No4UXgWXyznAj4MCzybE22XM5cPK565C8ZehDtC9f5q6MNzPtwx6UMf8mEz28yAoxC8Hc"
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
