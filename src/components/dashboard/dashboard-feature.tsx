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
    "3T27XB6L46Qm1XYPNyp3F2CrLsFfeRJWHHn5PqtGzVRk28RhmB5xey9fayNpShJbNvb8ALcXNKVmS1eg3J5RY8dT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59bmzdFPz2xwC3gKtCCVYV9uBcaMec5D2Gn4MYgbxxjGSiVVXMwZNPcKuqnzWJDpvHXEy8KkGc6PScRnudK7VGK4",
  "key1": "2S2gPFefqDqhnRrUAFpK6quTi7rt7CewAHqEe7B5zcTg7ZZQ6dNrRPN7Lw2JJ93Nt7BZwxByVRYs7nE1fpQZApbe",
  "key2": "U4HF6bXrM9xDMLxa24grqh52utt32GP24ViU31WCzs8ABm3FPkWp2x6RsKH4ayNQKWrDZ1UxVGCYPQL4P3PPAaC",
  "key3": "5rUHMAQEpAJokaSgGBU93Zkp2woES8NTbDAVMcghU2jY2Ax9RVZ1LCsUDLM48qHAZDSvtgqMHqhLFW1vrnUdNb6A",
  "key4": "3ZqXenhg4T6sBtFEASUq7Ta7k1y1cyCH7p2sav3imDXJsuMcpkTrMpxcH7Qy4af2cU5uKB3P9sqi4KLnFtWu1czw",
  "key5": "4Mgr6nDAWVHXwyxRhkzr7PAcLZb9fjvFf8saXjAK3xaC2qr5wn3zVKZD6KtqGn4exrRAzn9XBwUXWaazcrMfMBGW",
  "key6": "4VApCRHdpLDjCuAm449WgpvtfUqCx9n27jQTepWx8HHY2X45A9LbnWWUenL7tBNvL4tYqY44SuRY9Cx1rNqvoFYw",
  "key7": "sMdSgyNktmS6vvj6GG5nUyykrrgzAqboZ8XWejSegAnUCBHahacxxN8vYzaKkZGGnwTgm3BoQfFd5g93116sFHG",
  "key8": "2MEjqDaFYbHGA2LmZQe9fZX845EvpYot7TzAGr5tT5B7tzmoa3LSDqFKTJ61hj3xYrqSZQEm53N6CCMkwrn4ztuv",
  "key9": "wk79W36nULdVnCZyWvv8srsmZ9nptCKTbscdGoxzuMrsL3EPFAc4RVkTbB5RDAXqnRQjDMXhPreTHvzUWDEtHi5",
  "key10": "38NToM7o6ysak2iUsKRGa9cXkD7Sh8yukNdu9LdSmtBtmR92KaE6cnr3RY1mh9BSo8BApnfA47NyKYPFxwNVEya1",
  "key11": "5khHxqhCwJHEn7qJUMm1MBmqv6rduKYJqdMmusihY9C8wKpcgDdTWuEV3ZRtfNzUPxq1EHYBEk17M2cTcqtcyTFf",
  "key12": "2LWYpjBJUkDM3dvrcrH7nR9ZRoAtWQa1dgwvFNvQGabL1kwQifKkeUJsss9nVogWUTSuRw81C9z3ApwrdGr2yaAS",
  "key13": "4x9RkspY5Xm6iHxeZF68TFfEiDjSuikxtnS7Eh8ZbpCV5bXgbBQkbtZMKHiJyy3CsbQcA9soFHsbMpYMsXoK6qyA",
  "key14": "5rN4W7miUwfaWjWJSmqn9phMHkRgcVshHGJWShd1VqU8bor3THJfc4deyvvbq7HLqzZR6LrBRuE9i5dGFV9uajRt",
  "key15": "4Z6gv145odYSWxM7YxyXPDjnahE8JWHKeYPXXwq8xS1CWCKDTyQmFLNC1npfiszqgFf5Eg1eMJG4dniw5kMpamc3",
  "key16": "3k1WEo1hktwy4QWpNy4PNyPqqpLjFZJhTMTVEnpyHiLjxhhkieB6hyoDuuXMCV9ZaTgQMTqaBvcGTN9HXPw868RT",
  "key17": "5dVEpm88V6XipFk8EErnBZg88JRPzSYNyCJgUyDMCcQUewoHctAEjSDkVwR4WM5PnK9DpDh8vnYRKJ4qsqaHLdee",
  "key18": "4PaaLKSwNBXXqTLrq5mhdFN5ybj12bQicMNN8WZuN8MNFPuXTVU4nk2gHEKAKH3AQf46XEyD8fdvf8iSK4JhkCLe",
  "key19": "5ftuiYxAkigJVoZkAoM95YmCDSkABnLyRn1e5KwFhz1XeZvSw51T3QSz2zH2ywDwy2VA9Ebyd1tNGGveB7Airx1k",
  "key20": "4vn1qpcPkzcfxRg7SrHJVy5iR2PRjdPHwuYekqdRZJAqUz96bB79EzLMbePosYzcgf5Z6NJHhu4ne7yL4z9FBcMY",
  "key21": "4aMyG2wp48ViHPUWCaaXbxAgvfHJt9uqPNLvw6yabctPUpVLmEKB16KiKeLzbDFCuhqjwN2HhA8KtJd4e5D6JP9F",
  "key22": "2rpKR9VktVR4fFd53ZznmUQjK4t2uTMQuWY6mgaTSuPVPJCdU6epLncGYY24hYq6v6ZjR7wMJMjbFK5FwWPxg9oi",
  "key23": "jueXJdXS7uj66HZVGvdsKpSosHoTRBf11D3hdfy6FZenU76THgtgP6diDRnqyJ3yBY7PHgzFNcZD5xFReDY9BNS",
  "key24": "4SpU5F5RgdrAU6nzDwt5BH7Gu4kfEAAb12PYmxErcJdk1pY6ZH4pDy9PMNpe3w3pxFcL1sAeyukQRocEFJvEeGhA",
  "key25": "G8HnPiknpPj8YJJDWQ1NGXLow5QqGi2a2ivaSnGKwWeWruxpMbpD8pxX5BH2qE4UcHbQotmm3yMPR4DeTSb76nm",
  "key26": "2K47XPs9jhSSM4RS935u8YoHygxrPacJQQj4os5Ue6BZc1DAva6KakPyvxb4H4bW7bjm2oCbfBFggyMiQkQggY1s",
  "key27": "rvcTGvzn3gyDvJjTFs2dJeGMTdaY8A5dFMhFXTFMnaQ9X4CnWGpzTZs4wqNZcLbw8JJfoUa4qLS1FAXJi7M1J1X",
  "key28": "c7JnFnVoeD9uYrKujJVqTasEPZiJZockZAM4BLxCeRPNfUB2MSMnfNSDqhwdoeJ6VqrqmD6knyXaPbfxxnRGchp",
  "key29": "2nP6vrDu6LXzQzeMjpRrDrxzRsRV2k3fH4qyVnogixEcDCS6DQRGi8gRb2bryYMQMAcvU1Z9upDRv1wBdCQevzJS",
  "key30": "Xct435km6USjQtBURjbkTsb9ZHeZHE5hvk9i5KoJCNa9cAnCfEZ1JDox3Sy1CqPxwdCJ73HH7uZ8qtyYC4qLU9N",
  "key31": "2GtyHcDFHe2NN3y8zahczB3AqqZtwGQkBVfouFuVq9u1opfU3Jq3YZ7qxEiH6vUmLMCKV8AwNzFFooVU8VqYSbeb",
  "key32": "38hnsJHZh9FZagcCd23S76fK62uQp4rysQ4hvNAysbE2f73GdfKqWDoqEDDPhkACG7XRx245qd7cjjghxQJ9hBar",
  "key33": "4iAXs3HSeAk3SBX6qX3CuandgFTMKSYfAYs7zGTYTbMMXqDgcgXE9tp1wY3pX2NAx8y7aGmgaZu583sduVMm5yjQ",
  "key34": "2sZphJ3nuh5UgKKYBv9mUq8dPMV6K1d4EMPeKML1AgAvUELTMYgkDBLy4vrPQypTz2ibjviALAqonJpAxRowqGu2",
  "key35": "2ADf99H5B8zyP6L7ckTAXg3dB5qE2Qoeig3NaJRU8AwBm9E72bMEePvjr7BGC6zshKHJFG8wnXqN2EyWcNXZrN5m",
  "key36": "Cb5QtydG3DCAGLTDUvLKwNW6tH7u7aZ3mmuHJfQmUvTMPrfKAw3WL44S5bus68upgtXHLjM8T8ry1ougQ9Ejt8s",
  "key37": "5Masd4Q2s1txsFHUE27T3sDSuTeX8tAAN7idWNJ85DPBdccuj3dRDQXxob8mLiTLT16LLmc2YLHevias6boscWc3",
  "key38": "63wauW5UvKcWXybYEd3UXzqYWb5z9W7naBctxH8CwwVFyoyRCbzMQxnDx8gb6vxd7c7B5xKXHyMsYVNNmPgPoFSX",
  "key39": "nhAWRYrZQENrE7RT43Wxb24tEVjWHkGXpQF8x4HhwWnkvqjyfx74NK8deM6NZUAK3yrj66e5B9fBAJ3TGeb9LjP",
  "key40": "2h65kXQCt1e1h4vZvmMEivWVKrtLPs5HcNFbU2gQwViwgAzFnjtyRwuqnqR3XAA5TkcXUDmn9wYnx4MFSxhxBzZU",
  "key41": "4zPDCZ2YpoySq6nNhF5GtFQcxVC1SZ9kazgmNFipZeUthRjegT2VodFTw1ipoZGm5tyJug2HesErvX9ZTNgNkJfC",
  "key42": "5yK4n8pQzCr3xdDKaMEgizeY3sq3o8qwyoKGypvV1FXE3ikLpjpvmGPNXwkjr9yjoTbbsxqX4qeiF8L8Y7EhnGf4",
  "key43": "27Qj3YcJCmBjhdr6HR8Jir9ETXexSzcr7RiSBQURLsAre3FZFxuhsqeX22NnrnyJJP69wDr5moGYp6QmmsQzUvpv"
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
