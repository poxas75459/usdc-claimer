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
    "5KBUyxw3jfBSwF5w37izXfDBCYrMxp68yc8zzXg33u6WttbTpQkNDFLtspcCrA5SJTfXwnPp2Hzjao6STbvrCWFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hhJNKpXCtnAgBVfZW4Yy7BhLS2i3dXQ2hpRPJdGrdLopjW8yAddQQuJwttiuv4z5AeGWaTijJcqSgj5f26Xu9uA",
  "key1": "dbgPqft2sJvYM2VkToVFUwm6crbWq8EV4Ad8QCawrUECmwaASUwzsHwASacdid4mNEC7NU3eMxqajKSACaj8RAX",
  "key2": "34fL1TVU5iaJ4SGowRVdsLEFkuUGsCszNdTUDhkEbK5W712y4jozfgdfqGMkPKrhpi3zero5GYN2DAs2mjrGSJw",
  "key3": "2VCSuFxqBMQpNq1jG5LLeX3e2V8d5wBo3CfVFoxdMCn7z53bm5cKWULupCPxTDbjJei7zNhRz6JFSHkp8aYJLyJ3",
  "key4": "5eGv2wo4vxtQoddMzwieKqAJiewkRMPgjZEwngBxroBz7kTMEjHrKLB8GuAdB49f1nwVUEqZaRaYC4WGMouoNmcr",
  "key5": "2a6J19sQgsD6PRdToQhEdTYt9JSvzsk6eSnyMj8SJM2Q2PikTgqTeo9et2ZiTwESurmAX3EZXhhXYEMDB7f6pJEn",
  "key6": "28yjZus8A4AKJrZhhHrQaF5TGg8drfNZdyp41ztBC2xQWehmex7F8QuYgMaT81kPxNNVNaajyaTAVPZBpduxnbno",
  "key7": "3nMAgSQ9ptTLXGWNaev6UoDbPrB1TbnyKfaLfAKPHfbs2DxQmBs4mubJ58MPfc6uDnVuQLzQ1itjiMCdAWMVqJbj",
  "key8": "4izkJoyztQQistXibNAc1GNkYstwUvswyvCi9ecAcRbwcuPEJ4SqncfMgYsyzKfV6kLNWTfqwemqfxiMzcDgusxd",
  "key9": "5Ds5axZRBk3HkDo26qefYvoNkPw8WhsgnzyPNZ9tNF2REKg3TW7sEmtTEcAvZHkH6kg2HXyzNxsRouiQj3bUY3Af",
  "key10": "2zoob5cw9K8fQLW4JtcBVz2dxrqddVF83HdE6rNU6v8PMovoqULLFcV7ydLyzizgH3f29H6adMvzfL9jqwwPD8LY",
  "key11": "2WeTAyxQGRHEcCXGGM7M3rzRuoHMLywmX7rtzv8MjD5d18fQ4bsgtL2u7gac9Lr76Tz8HNAxjtjqDNjdE5PovHCv",
  "key12": "3D7LSuZGrSyRaWCuRBMWivyhvigadG2uBsu2ysWXfmYC7Ve5bZoW1cp4UC8J847VyzqYkEjy1VhAMWYS6LbBxSMo",
  "key13": "64TmJTHnXCYM1C33EycqsNhPjKqw4o4en44p7yi2d2Dz2tmWHp1UGpbkTykKPYvqLpEbPUoEpKW3LpvzRuwCCd4Q",
  "key14": "3XXatMJtZdyfS3VBA8DytzgXRa2d2xJFN3RwjXqY3n91cu389iFectU7q2az59Eh4fdzgGKfgp9zKyATW3mvg28b",
  "key15": "3uW7nQG9WioMbALWEcz6bE2F792xpqCcVZMBUm8tetyvPDr72uDSc5GoVjHUTxFzVwSKnfw7FDFrXmtudHAbutTC",
  "key16": "65ssvhcfHjfGLWKNkhPrHbB8z2r4A4NkpD2m4Nw9pmTfdG6DXkpN43niQsudnQWGWwQXpremkdbU71GkeU9JdS1E",
  "key17": "3uWscGoAZJEto6F4hzcSUpQv4Yo4DtRs6jCLPvVARQ7ZyyQwijCbnDWheftb6QfsnZMrVEGzHXTFT8xRpZiZHc1m",
  "key18": "s8cjk2buSxRBXVLYoyWFwNSmzQdLypEVimT8isZvYfNEfeG4tDczcxn51fu98oQAH53Urb9hgo3wHqkX2LNCnrf",
  "key19": "2G3sQwQRnTzvx74bQUrYU5s5NPe2RSSvhhk8FiyJNedGrqdRvnD3ZwZ8YbEubYyoD61JYQiK22Bmnbdp5wsiAPy",
  "key20": "4wBG8JshfkdyJp25aURcUtxBdiqX5gjb39YYSGXSWqZ1LRNiCgFVQBZ4zKX1RTwt9s5gzLVvoFyxzPypGmNdYtNc",
  "key21": "4fD6RkF4cEE9BUas2M7cqikmpyF4u31etsw5FaB8mmH8ibjWbt5DJ3jzGgqw98xtYbNKfPCJAoVW6gwiRiXupUkY",
  "key22": "3nVE3PVL58Gn1om3YjR1yv3a7Hub8MyJKZTEazis7Q5S6nWs6RyhZFsfjn81FQxBkLyHPTNsia89dF5xH3ccsTDY",
  "key23": "6dsrHvt76fnkHsyfmFMkbbbyy2tyK6bncuZYfp6X5D6PzvKPX6esLGpLZs2S1bV2GrANo5zzUbm6XNHBtAcbp7m",
  "key24": "8NUqq2gJk2q9f1N8X4yVs4aKPzwarwBBYdNgSd6y63V2c3CrhnS7cnNNvoAaVEYiWEcvQWahBw9uvqDwhhHFyRV",
  "key25": "2LvfyrKAYTUPUo77FpW74faYAJ6LNtTSXxkJsTa4wyjq4geXy961hEXg7kFrhDhgQMkaip2gQq8i5bAqueQ1ne8D",
  "key26": "4ro2YfdFYEgXwUzkkA9ryU8RBhbS81CYwwZeHjt2G6mdbHUV7n2mmqhuVg2TBeCnKcRm5ToGeFrjCsFXhWbrCEqX",
  "key27": "31NYzeBgvDu89BLv2d6ShA3w18tfXyYTVPSZrVWkzGCT7xazNYqWPtBuAC9Cuoy1WqTvKb3i5mKjmEiYGE6FgnzR",
  "key28": "3547ybe8w1j4rGNha1XYzUgNWwkCAKeEFJDindGJyJ5T2tZtG9tYzMUDHczAu2Nj7gppAuJbtfq5BGTJKHpeZdqy",
  "key29": "41nXF5AqrXKzC4Skk8Rp8vgYoTGMym9VZoDwkmsELKY7Pv5x6F8g95FEB5rScBQdP3wsnnpG9TwkxroUPn7NpLdf",
  "key30": "4EA5ZuMVaHK9adiMUxNJDU2acQabNze1E8p2zQfiHkWRLc95JLRMZi2soAmEDpzeXDtxsWwgNMbcUYsvSMCGPJdX",
  "key31": "3p2N8DGxTUXr5cXre6sFM91bQWeThp8CwTSw6SBGdEJBpr1LzyXfR9chgm27J6FVS8LER2LWgymuWnrKNKxT1gty",
  "key32": "54oYLkoSakSWdYJp6eLcHHCyPJTYHMGRDHtCqyCjsgdR8STZr4UnHSJ59VdySV1uzBccJ27RG1TyRw9c4BqzY18i",
  "key33": "2k1EVgYkxmR4PYt3FsicvHRtPdn5cLhES3nph8oNcspAC9NYkM6uduRK4Ma2tEcKxzn6rPQr2S4WNDPV1CMbDiCA",
  "key34": "2uzCKyboQ7VRQACWTWtbwT99McKYBtdZAMcmDQjUP8tpMUw5ha6bF2REmXdXQoST8gxzew3PrPRv44YPAiVUVAxA",
  "key35": "4rPsXtHQx4QLjrKpgVvrV1i6F1szWUJZzJHhbuk3JMBPh7wgdvwXS2Wn1SBbkMoyPXyEhUdLsYdeip9GweVpcbNT"
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
