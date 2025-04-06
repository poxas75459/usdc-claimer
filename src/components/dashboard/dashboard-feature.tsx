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
    "iJjy7M3Xwf4AqYHyKRdvG29RhPTpEAC36DYohrtPBewYXnk2qpRJovTWqZY3CjBrJgQWt58hZoZCDbDsngDGUU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65mrpa673oU712sdMwHRvNaNYkY3rgN2NuVfqTLhaGg4aD9EFqcz82PKB4zQvdcMAmYKpPx3sFjDmSGVd2Dv7FeF",
  "key1": "32GvVFbadrHRFDs9DgTQEVZ5zq5Sh4RtqmFd6Ewq9hZydksxd5rVtQMcYg5zTPC7PpAHs8u8SAyLSAtZefA8zVCX",
  "key2": "5oHszWtz4rH6FooS6rhQRkMPCJX4vQfhK55GbaQe2BYp53ojcvtFdmCAUm8wQ5rTpdESR7CQhjMtctT2kxHw5qJa",
  "key3": "21cdX5MJcPfCHFeGqtcHRSzVNyewxZCyjkP32YxB9A97FH4eCtefVxaG4fJPmr5TyWE5RUgoA7LznjZm6cYn4jbF",
  "key4": "2jk3N2BM37cckEVTun9HcSWa386CMkX9bWRCAUB1ESJjicQ3vZMyx8jMxFBhwdrRoGuu6zwAG96HRreUTFzkWuMz",
  "key5": "5RNM1S9afP83jSWnGTVdvDA1HAePS2pLixrsbisJdXR4e227NsDvnSj6JfF2GRGMj8J18HHxxZZRMKmdJqG6pwfo",
  "key6": "Y28DsVfyZqDCwGXeNsUkQQBkXR6iBNyghyqUuktGJGH2een5vQr8FNwDDegMEP9NfT2d64yxsaqYq7Q8hXe3rJL",
  "key7": "4MGpFLczpFrmDHNUdRsKXdW9kv62KdCyAEdNHEVcJ9BhUhpbi4W6ZrFdiEEfASb6TaPNhQ4y6EWzsKaNQPYg5tt8",
  "key8": "4t1qYRtUKiknWSaZxgR1S5q3YQqxS9BZ3k1rfTYbaF3Si5LidMeNPMQ9ajoR34ekEWTZp1KH3Xk4p2NTSwuJmyTi",
  "key9": "3MkG7NxFPfVcKPtdcbceSsqN8jpWen3WHi9w5hs1xHLYMaQmYrUakezxiPuXrkaQPYWCSuRvbXGPbyN5Zpw6v7y9",
  "key10": "54F4E1eS69Xtzy7baDX3mWU3iNr8N9eekskWis4RHEukvCXYJEYfF8JTD5XCG37z7UKohAuBTSMKQrvUpg7cAyk5",
  "key11": "4BXMnaYmZkgGr3iDRhN5PqJ1MFBcsVBJiuuAZC9Q7jjHiR5LzmxpTMzAnVEonJWjPAecZt3oeKL4c8cvhgogwpBM",
  "key12": "3Mfk7z1SkwcLL3X6g9V6RDkYx2BGrogW1cVNAEvhkkfbCaj6MEEhwUhLj3hYUD6FG8xYbsjECrEJXVSU9Q8tGRDo",
  "key13": "34Zcd4yP3ELEjqU2dHkfxnv28bZJc4nDfDZ7sTKpjF42os1cmC1Dy4PR5AvcudG2Q8RSPuxKtYRFcmeJvMzjhnLu",
  "key14": "d6Qviti5z7eVMs5E1XeNquRkQg1RHubTzb6eqcxTCWJFWBQbfdxMfcZLGrwxVVT9YAkY6qhCRh58ed1rFmE9at4",
  "key15": "3ihMZzFsTX76s3k9rm72hVr4Yzg2RoafsZ3iqtiZx7nz18dxbrRzgrt5PrX1QVKBRieSVLXzyJ5qyQrLn8ZmDYsc",
  "key16": "fGu7aTAsEttSxikpnFNJW7GCVATnawLXAWn3GWmm3LoHbAqDKVmwCBPzWoqN63E7aty6ycZhcyriM8GwczSnPZo",
  "key17": "Y9UhAxe6RY1szrYqHrSJN27zzXXgS4ZWb7P5xuhH9VN313FSBw1hA9HNopYpEGLKMLENGiSjGQZoeKwWP3YLvzu",
  "key18": "4WJR6Kzb14i7MoR2HQ333j2uWgzPQXN1R8sioQtXgfJK2LVqeQzxHzdGnYVWrdrGkSyGTwPwKnFHQ541pXfahFXS",
  "key19": "31Lho953dXfeKQMLrMchbwftopR2X1A2J9HnDFEJQRGv6KW7G18AGALtWJLuZUmBHFuLefXpupMWwvBMoCmn6a6z",
  "key20": "3zVXrTW78xX8WguNCSx3J1QQbGTc82fkXAKhvzBUHCBNFq1XK4SgvAbn863BD1GJCaFqjKSLd6s98bumRNNXgM3q",
  "key21": "53HRKFHYa6NDWLqNg7HorjE79RdNpbkDzdbn4frue1vWcCaMXopgVKtFKzViGoApYMVzPzEZK1RKAC5wec7fg6Wy",
  "key22": "4ATLSFKXFHcQBADz3pv4TsviqreK5TRkTSSBmGi8QGNpcgKxJxGSsAg72gXwoamraA3wTgKS29AKYVVVf3yhG8qP",
  "key23": "8modGJHk4ddzTUsrYBkCTHCU7CRpPAtxk7vT2RRs8f1o4YUCxZ9BVunP3yj86ycr36xu13i6CLR96PDx7qptvMX",
  "key24": "4kmh6AXLQMZro2NPKznz2JQ9Uo2cHVmN6LaUxDtQsTw9nABb9RGqooQMCfFw6iijX8VUMXYwVs3DN4C3fQKCtECA",
  "key25": "37LFsBxf6oTWeNNjNs8CUcMMdSvj9977aez8prz5H44pZ4HZmJN8K8oC6xa6XbEHQe7DNWJMMNKdWdF7BNwSNikt",
  "key26": "41w2MaxqUL9FkFZn6zvCbQ5NLeWiyuZng4ftuAqCDDPEeUuZFpBYv5VKSB4DLqnAdAYR6pLVucjF49d7NbKUacS3",
  "key27": "3RLxJhEx6XJyGuxPyQJXznSbPUikJ5zdXo8gRChvjfN6ZUFu6z3MAQ8quF8DwF41XTERkRZA4HUoDHZNgpQ5YAkK",
  "key28": "2KbcDYAYhiPC4PLiLB3AdMnQfxvZcT2BMbzViXSGKqWnFhroGkv2d4rKSZnrDYJM2fTZB1Jg1LSrdqse75sxmqXX",
  "key29": "4b8qM5jY2RXNRAXgjQYcJ9cDycDkHs8QKycXrHwxMj5kt9ph7ucGo1kMNJaCFPes26Q331KwL9NuQse6AEVnrPpV",
  "key30": "5g4qA3UupqyZ8ec6a74f89c5T5UAgHNN8DnBcaYMe4UNeHUykvRkM1GWAEMCAYsf7dr93ZKuHUssB2BtG3A4KWLY",
  "key31": "4QigroNBo12aadMmgxYM88wir6RSA3Jc1HjHB4kYpHmHDRWg5iRt8MGUXnyQ3jLgp7dseiMNNhWRdxTbD52GC7Gy",
  "key32": "3mMHf3cpxstmMWZ5oVPB3utYjbVU8jEHtX9PHrENAWT7ftLScqZYyZhRWWNpTptGHueQGY2D6SPnVbaUtvMySqi6",
  "key33": "4s7npDPpmHAc3DtwUFkRjA1eoHsWGnc4MSxQt82wrY3D4MgzGnigcKCTgP4PWvsctWUK2TmT9XkzKCcchb4mP6Cu",
  "key34": "5HxH8npErQc1QjhryLnNc9xUTjKPER2meMXR6fUPTZ4ZnG5U4iYZMuARJyeJVqwHDKtLDpAmZkSqziSVEWVxxTWW",
  "key35": "544yXKXEfF3aBCBJZfA7gudGXK5e3iFcqH1E3sqAqN2wUuFDvbhitec7BxhrhKeHjmmK75uAomQ8rkXPfYJgKgtg",
  "key36": "278ZnuKJCoVtzbmtHoZvWai5conuZ3qt1Yp2LKcngyDjUMYjsD7ez8hGkdXHMVuh2RroJTaDhAmhU3ZRPSTck23G",
  "key37": "9jXuwBgP6q2yjHaSUiLUsVTkpyK22uvnsY6k7B58P2vd6PQVMTv4wH2T5LtgQQGWqsgSN82s2LYSrwbbrJfotHX",
  "key38": "ok1LrNmubw9viTwzpeX7pV7MgKTvj737LSD4sHJU47DMndHY1nkGdHuEZeCBwz8nK2VyQTppmPLmMC5VXxFJv56",
  "key39": "2JnDY9Be82GsU4vm95cEU3SM2oM7MdcX5HtfUvrEJCH8SdKjHN7xurBhXYrWQLurge8SV8Ta23YDHPZ3Xzke2ra4",
  "key40": "5Lijfz76Gsyxb4WVAAy3aFFRNS8HUATaxi4y9kG8qrCWhRzzfe78HuUUPnULyUzxfZSWqKQWGPehwjyXXeYQh4Qk",
  "key41": "2LdSZxZuoEfBFxocEtCEbZ4YbRA17MVFK9wAEFezySudCRNX4ZyHNE4iCT8Aw1qwcHdHNQMWGQupMkQXPUchNdUG",
  "key42": "3RJRTekjyDgrBv3zTc64sJqCncRGXYxDVV6wAEJCuWPeLFvy7vhHpvpJPX8fnnWhc51f3QPQffEsoua37o51ZsQB",
  "key43": "4FoYqZYeYARopefJAFiJJTKy6w7v5gpemFC9jzAmuZd7ip3iq7EPcUn7JpN5zmfN1B7AdbCfe5Tig8Kqh23L1oft",
  "key44": "5585aqtByYjgKSqM4wPZi2AuchBHKpb1EV9YSbYGkAwRV3XCfgDAe6wgjCPsLWsW5PRYy6y6AW1JP52b5nT7HWuS",
  "key45": "3tudGDmNqkSp31sT6o3Mhgg49P98CvgQKHkJ7DyzDQ1HxWpnMF6vocNNSeGfBz2gPYCpFnxcHigF1utejtpKtBi5",
  "key46": "2XRwvV1R1EbAEXJe6gR9Lqb5DoXqS6eYaigxiSsML9APh7UVZjfSasd5mSXWmyaE44Zfx3ZfU8JCru2QZhUU97dY",
  "key47": "3Rz86AWtkZ72u53V3cf3UYJy4pm5Jf8b6AA9Fe6TEDRui6BmUGuqUrHSovsj17Wh3gLarcDxejZfxgoCvdig1KEJ"
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
