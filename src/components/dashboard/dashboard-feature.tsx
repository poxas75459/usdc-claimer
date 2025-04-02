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
    "49qXwpzcmgZ6jYdzwrBWUkApPtn6zZYiJW6LJuUr5mL8VAkPFtd2EvfUmomatxXQxahxDMyTbnr2CkMTrbJvMfCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z9uBcQ7u8hHMrkEVkXaK6oWH2WrV6fxvkmfR4V5UuefFsQbRvUhEHYbw4ucMfydz5FhqLbjJKgAKyKqkxLBjXSu",
  "key1": "73Pd4caKTpxAY25Z3s3FFajVNjaUv9VbuG2QkjGe812RYY3VZNebweT56xh1RkwBHWecxm3wp7uv73Mm8e5wuTB",
  "key2": "2THwJMvciH9248tpauva7Px3v1aPijKfUXFFBcNRTx9fiJW9GW6MhZXGws4dpxuZfGPe42Mi8JChyrdrGeEUF5Jx",
  "key3": "3RR4qWrREeGBibXYtviBWVQAoeDqZgidxoWJpZMgMwZd739Wn2WSLJb5wiY4LB1nYL2ZGHD9APL8WCtuMyMgVKKJ",
  "key4": "sKGBbjv2mnuBogHzWwH7d6238NhTF5QFNyNUioYj6APtKeSKpmSF81kRtpt9pncZQ3fF85Bhg7JNJpGmUBVRaqp",
  "key5": "AHY1MPocQ4qg8WqPaq3pGxPk5NaY93sBuJxVG4YE9CU6yMM2JEAvKi3Km6shwxe51WUPFX8PTdDXqXEz2K2NqYv",
  "key6": "62Nf72EkGdDyUCwsGWN4QRx6DaUvswrDQdSj3RRt9E6t6VXqypFxmAHBptRcbSDm8ZRB5uQxeNz4KEkJyhLTCByJ",
  "key7": "Cj3X1WeGh7Qgn8ofSknF5Zjed3hLVzPtY9RQCzePJrN7ZYtn2tv2RqnB8NEgK4WdPJ5RGjSXG494z1KU4bc9Snp",
  "key8": "ge9gzMCPYshZHKbAuujPr7fhsnrKJvJUKVVcLA72dP2NVCQbrNBQudd7jb4MiqabZF3kL4DzGocQMygM1xz8dD3",
  "key9": "fCV5LE7mAFHq8abzcrnNasi7yD86CPYVfWUcQVrjp6bA6DZeFeh58g4P8gMmQxEpyTKFwwRjfiSkSmn1h94XhTp",
  "key10": "5ntoc4fAk6aBeo3rDWw67bvdAX25UEFwRoPaaGvPxUCPxehMFaTJnaY3cQRS854JAHA2SNB5nhCJdjk3pAk9wFax",
  "key11": "5wThnC4ACavoT5AaPa2QeUfrqgNoLbdUFLihYtS6vyRFhjPFX97cieY7uQecD4cz6973YSsKoYbd1VC6aqNfZX9u",
  "key12": "2vZ5hd9JCHTGECr6GjRxthLgxVSeBYdn1e6NyZv1AoWXXAjAogzonStQiihi5sPWnZwvx4QqLBA2k5GLwn5B55aa",
  "key13": "Vz5ebK82Q1NwitRhk6ipVJ1NRbeBn5DjNygEhJKLZssTYKqaPVF4MAt5BDtvL7j8832ufdgAeBuPMUpMNUKy3D2",
  "key14": "2b6FnRR5QQFoLLXAv3ZGVVMdf5wFcYAhNKhsqhfCHBAB3KafjBJWAamv5aJwDxyvdofaFNumspiciG3NAX4QVjTr",
  "key15": "nhvMNoqYYxHmcjf7ouuezvX7X1mqNH2vBSfCDHRzMMNZqMns9cA23hPnhAuYgutjCEHb3syx3Pn5uiUJFMowdbc",
  "key16": "56c19dW4L9Tfe4dJ8SWV63mQjqwBW36qyCRZnK83DhsX6X98gvSVFAX7br92w36sjLJaA311dXXyDGDgJFeTUy2v",
  "key17": "2kiCUJKAE3eS3NaPiQogbo9t3eQoSycDH8bJKw8CuAd2s2sAtkLi4k1eSUjFRCNRrPEPdEV8j9XtrQTFCcckmzef",
  "key18": "rxMuauQdAjypTuwwB1SzNtbmjvmA4WhkAvETsAd38yaWSo44cKbPVGNGwYh3x9PUMRCcMzUgY8XZvzodRa1GGXg",
  "key19": "2mt8FJFysTpeLy5sPjDayPft5aiVDQwatz6eE1omTa87Ws2CaXSLZhqNDUQA9FiRZuzuD5DxRoNRjYqbfbvah84J",
  "key20": "4LZpYW9qkKyGmXvDMVeVB5ov5w2nsQpRvhDkLQbcwaT2ALKk3oHo6C3VX4bNz8UZow1DEGrP7TgkjE9kDWcZTA6Z",
  "key21": "2D3AESejdjtKNpi5rrUf1Fu8LjVFKgF8dGSXBfcrSSZZ3NQjLq3NG7ivz62Gsqs9EgtH3VJUgyt4nP8rKhxREK7N",
  "key22": "NFg8AoGteuBvmLyNJY22pP5pWr4C5mE8PteAWWdHmRLafq6c7wvZWTXSki353A6CYMy1LLrFGwFkw15t15XCTmT",
  "key23": "4LrAcNpxytenuSKDxie2j2h4ySrNuXspAZBeWQCEX49E244tUzrTedP4x5Ya8yoFYdpYRfKHBzTdqHbSWQfmJWYm",
  "key24": "2vHJcJSvupzxZxVR9cDDFGrh21GHxgGhXon9Bcxb1F2xp5sn7CRtGLuUwgkch7ueosDMHXY8um8g4KrSqVdy5QqJ",
  "key25": "3tQ17TbuLhebJymsrzMcmTzf6TWoDdjcZY7e6q32hZo29UwjstuSh1Bx6pb7UEnZRvdnEZrUQkTBy311jrTWKENM",
  "key26": "2nwhPK7eVCKbL2J3DKbKC2kBaSRyPAPvFvQR4ttxwn1EiWEmT2uUo1CNEqEPGBRb9SvAUNU2tf2bj1C3ZuZWoaUx",
  "key27": "5DXSj6bqpwJ7ZaSiEPZb4CXcPMEcZ2Nsh1ciT5Ep8MMbXa6YHpCzShJUzqXySevesLAjKs82uyaNgtZQEtVdx3CT",
  "key28": "5M1p1am67YU5JK2HW4jmfhzWxzAQSKcEFhABe4j7V2MQdixKogjXCemXEqLssFgsKedq6VGWeLgCmFWB43SYkL1h",
  "key29": "5rHPeY9C52sJsfPB3sZvwZKGrvXJSpeGX74DWAyzdPZrNtcN7eeMucaBwJWtCkKLuo9s7v82AYyVcBwsY4skhhfx",
  "key30": "5eVHHmToZYWfRpteBZXNhvjF1dYXRkRWw7m4AKVVqmxR486x1CVPKZKLfCUfWSxjmPwJxBu4MLYCEGB5jfuUDete",
  "key31": "33hqmoh31HfqP3XtAQWepTUtnDerkW32z75hBx6kAKuv29G5et1YEXhND38FLA6knGUwwmw8xpQfbv2p4DmzSb2U",
  "key32": "3pHaKLMD6nugDUajtKWdoFGkhB37xXGxdrvnBXbG8QHLu3XAxM686hYhT8tDhbnkemBufZHVH3RSdttVFoJtMmyz"
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
