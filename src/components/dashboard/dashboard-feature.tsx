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
    "23pUVxyD6NbAMLrPGCuLnj6JVw82T1ZRQoEbCiUSEAZxV7ae9AiS8zpkGjnCsNwGRaDMNQFvbAbviU8AMH86bNi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rWzG1APHYZvQYi21VtyEUc26eAjUNZ9aVcMKMUFnHBwbYFNgC6MsUBYUTevRXTSXfb6iP8Nx5rPdUGh1WVXqK3e",
  "key1": "2V63uhMMdr56dgN89LFFcrSVbGHCVwmDnTA1G5bpoS6xQdPCAVkkuEr9sspkyyUBa2mz3WLMG2yPSXJJ3ZeHoSuT",
  "key2": "hjdZWCjPuctcVjD5j2ehyPACnSpHYPRrgdT2w9M7NF4EfjFJ2Py891as5Xcfvtd1nvD4gNBFpsTmLD5QbdwzNJP",
  "key3": "4N7eo9Dgj7Qnt2Vu4ZpCEwMUFWhS7gNqdRFimAZzFLXoAd8xHN6aphXgkPeZWnvgq7vN3W3tyERYkzXUK6Uqjwr8",
  "key4": "5kAFBP5w8GByMdbkYZoR1RdbekqoEVV3WPTfA4dytzNx56mtTJhqtSRCVM8fefhaLqpc7eZToeEHEzt7fJaPWdRz",
  "key5": "4zM27NcSz112DaUvx45sJCyE7jwa6fvpZkpQ5aBof2hMP4tBA7dDuDXJ4F29E2dCaVnjh5BydTcHjfUy4BRbfBEw",
  "key6": "61hmPYZzWaYhG9bNeFg9CaPmrFi7ah4NKgVKHi3V3J4kenKB5KC7Hnn4vHHqPG73nX6LBx1i3CZ3qyTwixCYmW3U",
  "key7": "61PcEfwBBBRBBui8tfUTwYek7giEq7SUD9KGcSDnYYk3QNc93ePsH24mg5utRALp8qp6t67NYKyZkPY1wV3JsngK",
  "key8": "4taUx4VbF7mK9wiHEbr8DDRvu1Fsqtx85oi6QWijnNzXx1Dy41jVyifJPDM16sciW3Hu6DW9ZRdQyVv3GeYq1JEq",
  "key9": "24zaAh2CTM2AyWx98sT8H4q8QNtpnDgnstrgEFkQMS6FpznkxJLZvQe5mopYkcK75CWdW5fZ1jzcNrebLg2GU7Nc",
  "key10": "2Eba9689KoUrm3yLutUAV1cShmsVZKeutosNdSD1tnN1b8WLFn4yMBjk9H6iZcTXLCuimSjWeCmu2mbf8yWV4Gfr",
  "key11": "2PBguod6wNJPArcZrVxSKoFTDMXNJHGRGASPzBfSXBeNTrMfkrULL4u8X4Vg9wUcVy1tzrrmLmgAK852yGxPTQj9",
  "key12": "25cH8aJoanhgtviA8aaQKe4xX2rwXwnvXgvsAZY7VUnN8s91gaPGuREmETEbHb4d3v8qFikkF88e2iAJ8jvFPd7u",
  "key13": "59zrsAGTc25yZp6H1MRhS5usL1kZEoP56txJrhZejuVbMKNxs4c85mtL8iWrZisXqgc5ahf65BQqHhUtyHNVQVyo",
  "key14": "59yXZqqHLaANgFTTgrzffA79RDsPjchmzv7wJqxqsCHvxxcMV8J8oXA8JhAJERRrwPyMHbs2e7tX3twN8R1ZhgKs",
  "key15": "3UTQw2cAYY9kwBSYZHgcGiCcnJranBwgY8o9pcdJdfzRyC4acTCWbB98a4GfEVytCpFBPuuEs9uChXBBnZWHgkXW",
  "key16": "3MfsoJBLLDUTkxngEWhM4b6wbqxdxB8WYMacspkH3mmbCh2RJ8PgbRhAPXzHb9x53jQGn4XH7Wdzg5ytN4o9mf5x",
  "key17": "3234F964drAJSz954bQnVGXpCrZZuUFYCCRu6Dcp1Z9bgYAaRgG5Q6JvdLBgQYLUfPqZQGHpmAo8RUN4HvskAmzg",
  "key18": "58HFDjFS3BN6k3WwTQCWHCbxR1wLvTTRJT7TwQsJC14ZtoFNkvb327Ht6jnCntE1dYyES3QvkjnzxrfLFohXTnvA",
  "key19": "42MCCochB4WLosv3p5D9fd16Lx1YEL3XjU6zobEdv2uWapF49hekLgnzNMu5NMmSaRjgmVZ2p83zq6CGhQYXkSNd",
  "key20": "SDPNKUNvhdQQDTo9LkfLd8rG9xmpNW5ipHMxrc53LSEZSRS2petJK6udVBGP6ATuFKciEkPFzW8CjZxYPqiwGMP",
  "key21": "r1vyJ2CTch7Wj5rtdwDAnuQnnmicwxnxnTMkGN81tV8hmh7NRfSqZ7E5Q3R1YHdLbJiUG6aGVktgg77BxLrsLgd",
  "key22": "42ef2oiEzSmbxsWTDzrma4uMz3cePRuDdESxsSC8s5dE6rfSzthF6Yr5ZTd7p8zs8k2i8MbJSz2PcWwhWDEyZFBU",
  "key23": "iWYWJ1wGXMWy7qGS7M1pVRFLb8d4qbJWufeC83Lxg7gE73eXLZ78QfdJRt9TpTqTB54SvHExVBQFjR1LG1YuQGG",
  "key24": "9sesLPSf62fzoUH7x6kG3LoGTYb6nHHMYk1f6MH8QLxrvidVmixmBf6KRXyS53pjXrGArp7WzS1BroCdETCs71Q",
  "key25": "2LCLkX1pC4q4Dt39bhZBYQyeNfF4AnQL8bYwBc5Ka4ythoPPUkTpUG7sgKaivTPCAE3uGAvgXhG4Doct2b7YSjGY",
  "key26": "iHdfth7Sd177XdLpyqgTwuZowUzXE8pub6PnaGHtRNAj4T3GgyTorgQ3xwtG6kRHsmZbuoc6JStFoUf8Piu4KH9",
  "key27": "9SZucwNeijh3tTQZ7eM8QsoLExrYSES9EiamohXuVijYgSYGdv87XzACAPGpEXMFV3y2nazTSAGnEB1fCUmtqvx",
  "key28": "2cCK5VgdTgeNJQTHTrgo6dGyihgoVzp5WwEiyJNDugtBFZ2CVCZcWgNv2kCfzbKe2xTtWgZBJLgMAFzD7HTUC5Wn",
  "key29": "3TTWssKVK84bcbAzSskMi17PfmzqTHQk4kfYkQnNb34ZEf8uTxFEhzH3GeG369zAsSm6AoP993Cpoj4yRkNj4pKh",
  "key30": "63zjfyJergcUjQmZJoYKfnr1CKwLZZukft1YqqwN7CEjqmoKAs4PP5x6eKFi7aG2LgJaD2yqi1ZBMzUPNE3MvUBq",
  "key31": "52rQxWuDaaERfXjJxDNen2JFsqF2tyyDjxkH59423AV8NyS36YM4FssvsBUhaWQ4tS9qKx4KFEssy65xkoyQexNT",
  "key32": "65tQV4csePYgaF9dZyMucUC8J2xoXKTHFvk1k3eWk9PVh5MAFpauYFme2mY1HPVdruXH3mbTB1Rpcfy5PbaDzA9f",
  "key33": "66KcNGV5yTuABCiEC23wbYyoSKmRjCdPdc1XE7QzGWbjPqRVVWunRuNx9MLkpBePKze8uwootHXCZ4Yrk473onqf",
  "key34": "4rJxs1jor4QjiNdqSM4x9aif3zHWc3xR7rgBUzWnQcujS5VdTHHkRrXXC7tWGQcEum4W9KYBjXDgdy7Sz2TJAJ1Z",
  "key35": "u8KZrKTvVcXLDVFfKUo4WR3FR1F7juXGJk2whbV44CngF3yv1ppjMMV9skWPTF8YCLp1G1jdG2ouJeu1o9AuRuv",
  "key36": "5RJD6DmUNhHvtC4qTaHZM83Hr5WUPvLwuVBZij1T3F82ZaXiMk6DwpSkeSYLx2e66VfxP8cCEoW9fMYXXnTqMpvx"
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
