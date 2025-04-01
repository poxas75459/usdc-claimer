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
    "FthxQgCcnexbMfBjYzHEruPj5Znbf7bySWsgYrBFJVMeT7cvhQsjTxBaokEJ47uNWfu9cNrKpZq8XFHquMUWQeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zAhb6EuwVypbtCMoXboNPCz48iPN2sKhnXKgWJXnQtzRxMcgnFvhkVd7tNNZHAk88H6T9zqhqdkEvuN4aK2epB2",
  "key1": "3dsJAKNeZ6ANd8xqu6hyWkSQ43Pjef1nP1MccoNC6xjrXhsDgGMhnQ7t3N71yh5KRNoVvtH5vnnU4GQ77wFvTmAW",
  "key2": "2sLMnU7XqLndETQjXceu2t3ZemVuMG5dRt9jkdQrwVKtbiSYcJWADvkj53jgwGDJJYTeAFBPkUG8ZSpKF9Vn3Hgn",
  "key3": "5NVWbGLNfvSzYnLME747nTyAhWRtLSkya5kNADX2bNcqJVgwCsG24wEdGyEq2UksJ447aSGNHuoe4yz3kEVj6kkr",
  "key4": "2XAYU8PGYvnromfRrSqad2Gz2mfBbXRfxENhgWjE3Chknv8h3zsPuVfFbnhwkAJAkbVttic8XVNfGJDZhJr4o4ew",
  "key5": "4ZyXdW4YQfixKVYLGkhAYPjAdkQHoaPhRwzBRkT6s2QAMTXxJg6mJSSeJGpiThGHThc6sQADEyw5c9REXramVy5z",
  "key6": "orNtdFxnia3Eum7qmrXT7DiUQJt9q1ZLWxwR33eNqn1neuzyFe4ABzCFPMS5NX9jkbVrvgRgw2UtsGsriEaRLAk",
  "key7": "61YYEt2km6H9G28b9dTidZ7NroesEtSykGppYTDBrrbZdNNjHMWvh7CCJZYhNfjzSz11WrNbW9jsLHWsP4zhMy6M",
  "key8": "2T1Fafc6kKwjpGPfRsYoSboX89zaVQbh8aFbaLsZMdz4Urs2EMtdk9zHDEs2X91r2zZ4snN87Z7i8SY4ax1yCHnK",
  "key9": "27Lvy8inMhB7PCRZh1kN2NuCk2GLEtgDxwg8qYH7kdtJ6mBhh4Z7gpU8hGyZp3RGmmRdZNUiPjadYa5iV6ufcMcL",
  "key10": "4BVgJ5jPTApCWa7W7mHtwVmLiNGJmTpThtRNghQiFW4LEy9BWeeDwicmdbSneyQcaH2SAhwSb8qMT3UEVKPL6nTV",
  "key11": "4VGWJ3gbTMkoXk536RLQHRbX8NmAWvuCyS17SncgruTghUVNMgXejbaoLqwegsqx2oJvRWh8Ye2nAVEQWxFiSuk7",
  "key12": "xLcq6j9zWXsugSgjcgMc6dVfi2L2Tju54g13XNMt5PxA6JWGUTw4Zb4KtMVAFcVY5xhQfDsBxwHff2VRczbHJC9",
  "key13": "5CZpXgqpVYPSDJKAyCA7XcrmChthm6fBra4yAzWBQPKTp2TgYbGrMxCoShRMJaH2VSXJZVRPTN31H2tSiHJEMdfy",
  "key14": "4M5kiX8PXtxrX35Fathmg1GkCG2azX5mrpA9dkedgV5bcagLtouD3vf71bd4Dzf27xApTSQqky8xLEm2VUhfWtUk",
  "key15": "3vxNa5VJgVSjqYiffQX3RrUejjSz2PoCmWtVFLwFggMSiTzdgyUS2WMrz2sBq3x1YWU5UEktCaLYB6buhJrbqfLj",
  "key16": "2MgKEPxeuGeXjkBquieq2Zv5pJk6TkzAyxTMzPPmmvieXpoGBVxcsFH6BA4THfiVgBNQLixXAFd3nEbYgx8Ncj8t",
  "key17": "35QaXvbA7BTm3haoZrUPHsuNzu2KsYXxPNonGjYRXXLkWe49EMrrcRZuZH8TqHavKeqRByGVKY5HDS4buood21HY",
  "key18": "4USNxMiqKNuhwUdawRzpAesgJ76CTprY94uuKtjkCD2PUA9s1Sgw9gz3HBZ75y6uAUeahKjHZxqjD2pB5ZcAbUQ9",
  "key19": "43D2fZZMC1Be2pNGBh3yMpQBEKYXsChGiJoS3PJMFSBE572LjHzrAK3vy66RsUhCZBDb9PzwucHUY5MrrYDREWKg",
  "key20": "49JK83HchAimangHyhc9otX2XTn92BgfoChJHnu8EJSJ5WgSXAaoW2b8H8pDdywLmFUeUPBoMFReqknr27nWsvVx",
  "key21": "97B6qk4MfHxUTMfCSCKk4wLSFaGgnBmAN5hk2sc5f2hN9bXbgKCvWejYLRuF7fGxdc81PtCM1PCW27iaQntRTpn",
  "key22": "4qdFnmzeyy9SXM4U6J5dNdkyc7ZAsDPrT6YTy8b3THRdC2riptTNcCjKQ9jTVpnNnPKiGqzVHsKKBmhRDyKxkc6p",
  "key23": "3EPJAPYTvPVf7B8kQhkVETT4mnQxgFEZB78wtKaBv71W3TQBcaEKJC8XkgHkqh7gqYks2tbhm5MbdwbSE2q5EhNH",
  "key24": "2bEs7fPw6dqyvqJdoCPU2bnNA9eMzxQLcyNbXCV8VvjM25EiaUJPu471g85J58FcrCjvcW2EPj4KHkdDBcnaBomm",
  "key25": "671BuJ3qcsRmGTPXwyuFAeWLS66hSKtQfbDLV4iFk8p8ZRPZ284dAftCLvX8TeMApdLTGkqDyfuvhykVw4SFqvuK",
  "key26": "2HgbV6Y9qGHn9zmuHRuTt3eJdPxEV4iDTT7TiuVkGwYyqYitxU6eYVEiMVxgMWKiWEBsNXBfgPdLA424KtTKcjGY",
  "key27": "2XpbwgNMky7EF87hWF3im9CGmHB8uKSxsfpnabkgvAiKv9TgfKWCdc8NyAEW49bZMUzTtV2SyjBDDmKbYktUvZ6o",
  "key28": "tg7eF9oNLNd4XXSrNkVysLCPULQqs1aiB2HyAjvHX8aLekCSrVqRPUKfYBdYiSdyF4XFn5LC2Qr8KD6GSoobtk8",
  "key29": "26CXcNifETWmjDe1GiAcFrN5cYB9EEXwfKZbgEdACWgd79RZyut2ec9CQCk5VEUzDMmvDAeqyyd8nGPfQBEu6uMF",
  "key30": "5eVcn8oD9JBckP6t9diM2wSuj86YETHNHytovmC6B5DwD3aphidyAy26oxRUWMiknxP4vj5jQ6UmTmm4ouv6HwiK",
  "key31": "5eZvu46G1a7mDemwkKgCqWT3EN2VNqRKehqDCF32XCYX8kVuoUmDhWr8khtr6gEmNoifucuGUSTkTdBmPC55ie1Y",
  "key32": "47P7BWnJ8J5xCKCwwNS4JPn7HnFkQC5jpgDrLuXBs14gGPn9oi7S2XKMtiDBBBaZS2fFJ8bo9R3fBtoWJmSwXF25",
  "key33": "4XZ2XuRap1ZFo6BT2DXLMm9VUoVvy8tuoZMFh5d35iVp3oJpTvhMpnBi3645NFxWabhEgzwbBqD7mUdNRXaLh1fu",
  "key34": "4bBMLaZh6NBWJQc9g9kJoPvt5Cgn1xwZNVsEeB893TxF9eD6THkXtycYgxPmpbGqPhU2P1XHTu6p7bEFTeHfGhLq",
  "key35": "4k2xSeahoH12y1aBpHEXhV4oG9Miu3CinmcKkn5sv5Mdd4EP3s5qaPi1soBcEppMMZuyhkbhHep7LhJE2oziqv2j",
  "key36": "sHdYzrVPrKZjaUaNooEhhSBK2fwFX8s3iVcP6Puau7hAPnJ9A65WFdJrfKDTbKpnEtgfdgVacKaPUX1SafecJdX",
  "key37": "4MENffFddKjyZ8wqtn7a92VwKgqUqAKhs4HQYS3NsoYzNE8XUR5H9VTRcLy3XVka6EQyGofsABT6QQq7ukCoJcpK"
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
