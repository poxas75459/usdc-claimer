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
    "1tqLzQWd2T2SbrKE3voPW4YAQ57yXf2oGvEHCoYSMzJhitF9ovAz7Bv4WB11tNFtq3EpgBBBeCVTHKX2pfARM1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XEvBZLbdia616a8VxSmTP9WZvQaiKp86odfJCFs3sVm66yuPWwAtv1TT9krWbPqCQEw9MvYneNghPsqN2V1dRXz",
  "key1": "2NtbY4D37NAFy7oFmbkb2zNnB3m7uAWuXCbYb9XKUhQ6bLxYfX2QExuGNV53Ei88whThQaMME18pf9obfRvdP3XK",
  "key2": "3w2e79zqJR6PGi8E8omHHh2SrQ58SzrcMQX9HmeGfr5DqazvMRm6aB2P9TQpy7CxG3kTvBB3Y64KPVMWNvJXDdZ2",
  "key3": "57uACu5sRUfCVEZMxWGENtUzFn2C6HYPVdS1dk1iZF1ZLxER5BjxazsWma9hKx3vY8Lf6PKJMdd7r44vWH1T3XBc",
  "key4": "43j5LUQJb3xHzjA3uGcJsnQb5EoQHk1ruiAWTktY8c4dVpCg5V27jDwjZ88MN2cVRWdE1Qfx97R7rRQefV86fvm9",
  "key5": "cr6jsAFU6tsYHZNkvph8Xg9ZidWrD9ChAdW24xeC5Zc5F8UNsfBH3LzRxUyiLW3H8tyr9ZLk7Jvfuef6cZT4RVq",
  "key6": "528R1QpBsDyFaHChav9A5QR86jr2gsNL9BwA2RgskikCeMAf91DUx7hEE3bjFAekSmoxMV1KBxxAM6wP3Cyeq7qf",
  "key7": "5LXz4Fyvk6Bj66YA98PhxTw1hYQryMFnnQs4Rs85MsS2QMNuw8HYcVL7115fq526WjZ73xZbEH48CURSP9Bnrs77",
  "key8": "3StRoy2P6QjNqcgNGuaFyRax9aHJHgT82LVbfrzrjXGTB3XHfpjTTAEoDkwpCLqVi3etoh2NrhJWBWUHSVsYVqE8",
  "key9": "4LFemf8bYVvVQmCxxPuapGNoHiqhos26UDYhQGy7SNYHeWAaCRmMCtSqRB8B3NU67UZwpmhBrTFHpAj9d2V8jzVo",
  "key10": "5fvrwJuB5y7YESC1YBmejWu79ffLUVdB99PhPdiiiXBTwP72LwgFbfaS2pfxNWtpQBoG3zBDp2u6SykS6nzNUA7T",
  "key11": "3MxzmWcqfQPH9Q5dn8a3zFvoL7xz9HqGwyvDjFBDq1m8J4YKFntzR5qnmzyFMUoucTYkiQ5PBYLfmobm2PremBty",
  "key12": "22rjeWkkNnRtubCBDKmrtTuwHCPFsfxtdEt2zeUZVokoDQ4XLSkMfUpidT2S147Vo5ges4FMWsBLGW9GGxstYXaU",
  "key13": "38euazHTTQAdqoo75JfDoYz65bwT9ZP6YyQ449DXkNBBdEPKLeU2sAkwFwHA4aboV2fUpn4MkhLCifkiFLSDEHwF",
  "key14": "5vwfkgEQhSBt1ChTB1b9qSym3HUAzPTVM9MDewPQtGCGeLK1NgoRhDgENZe7utMUxRYEuA6XfVJUswUcfDkmqEKY",
  "key15": "5whbFLkKZSMTkT9fDmBHRJ2GqBj6EWLV5NVwugzTQBr5QnQBERqQD8ZzUPgT7YLgUS2yDjsryM1Dd7rju3PzHCTq",
  "key16": "ga1z9e31FwseYnzT59zd6ZdfnGRK28nHU5zvZvXrtkhPPGE4WMMUSnAXYdZgKTfVNmCxUsfS4akxytffNvzQMxi",
  "key17": "3waF6DSxo7gEqUpvztDdTjuMzP8pq1DKT2Lo6BZL3Aw4UfksjoX48DD5NoPVZpfbobHiBd5Gq5aQMxeM6TYumFLB",
  "key18": "2xAkYPqtFZUHTRftpXjYVdRG2EkVTamsDqbfpdYtrTi1PLy8E9cMow8jCkdngEPUQDjLEZDew9uDwTdbUKANURgN",
  "key19": "4WCLovuZzZbzNrzfxiU6uwmw5PQLuNyzdQqLxGxuWQNiUBt8CFAYefUWKRCewe6ysHe6pySXsScPuXT6ZyJhMSea",
  "key20": "4ynWEHBA5Ftv1tfRvexELWFQRwbcHC4LZdWGG1ZwhG8kTizVkJwdRwgMQQpTNUavB4xp6tc4jCNfNYX4bM246d5k",
  "key21": "5jmMoD1NtKbAen9QLyKDPqMAAnicbq5Xs2haEJQaW1GRCcm2yVHVhyaYMNM1SPgLbYc9HWEPsnvMAKJ1TBJp1n4a",
  "key22": "y43RyUEmmgATZ1pDmXJXTBiJwJs6B9VcaWYfP5y5PEn5UAWZzuxHgj8NJBVYaW2J7jE8YPoKRfTq16qa3UiBq7p",
  "key23": "4DwoxcoKdMkpvZ8JnMVheh5oCBHiCQ6Y8pKtvmPSMcdr8LuyZJ1x1mKyTaeepjm7M9CQjsRitnQn5GEPJtZNJy5c",
  "key24": "54TbYssKwrgnT8m853jYki4TDGdeKMnxr5dTQPh3wtHeUawZikaHQTATXi3mxdxWpuAfNajRjVKBQ3cZ271c1ng5",
  "key25": "4Ea2pTGaswcFJ5FxvcrXyCJweuzeEHa8CYGUUTHodu5BX9uakTa3CW4SFhG7VdXJZ7Kqj8rj8QprKDRssk9AJGNm",
  "key26": "2Jmwm4Yb7yCFCb294fQCATLMmFmdVj4vWAVxWMpf3KXp9wngDc7Bmz4sc36hVSwbF4ED25LPmgTvDyMVsb7hhYLy",
  "key27": "4mBezTTg611whSRe1D6kCgW98UqPco5miN8ces7orNsxbvL6SVi2JJeE8ishs5eRXUXQ4kFwa2Y61PN2WNCuw1SC",
  "key28": "49H9hebFbqAC6S3UJtBJHojF2ScM2ZcJqALfTbMSPAtGASM8nk7rWvY9RY419PioXwvPT5H8h3Mwn8tGxoaZJhKR",
  "key29": "5QZvZx6PXT11uov1WZkJrs5LagB7QizLcvtavoQQyMH74R3zscX1brE2S3rRLE87W9fuz8HFNsyaBt3XsV7dz4z4",
  "key30": "UTfGXbaaRNdQB7ukPWUu2CYoQjsNtaaA2L2D2Q49WzNMrzBoHddgkAbA8HFvGDhoyAu31P4Zx5XSeH3iVF4Pp1H",
  "key31": "3qjHhdTdYBRg2XYTfiWZKv8Rby3Q6ZHNjbLbm6frLmsbFqiJEdwphNSxKuKScrZDRvgFHbHMVBX9abKULqLoTCWv",
  "key32": "2zQZu9GMaCRnydjcFUCTKhgHQGy8U47QCWj8hTmjr3zD8rnsmF4h9i7Peo5mpMgCwWpcf8qSZtxEi2dFndv8ucbq",
  "key33": "4NbqD8gkYJ3aoUDYHsw3v1tsBNQ19sDLMxaAuS2Wpgkfi7JyrJK3mKRqZXfq6uPzDo5fzMsTDnDFkK77kxyXZj6e"
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
