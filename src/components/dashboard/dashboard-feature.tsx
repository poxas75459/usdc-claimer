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
    "4FaR6LZBtrnnmxfRJQkHbaUEStySvv1Jg24Kcy4ZDPuu6GfAWsevTF2Sp3e7rFwA3f7Kn7NYNY2QsBdqnYD8nvzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UqyAMmARSBwUC8J3L16QGBt9nC1GJ7wciw6HvfbrrXRgySmEwEB4BXWY9YM8jV48c2VMrfRtWWqnpReBJFkMody",
  "key1": "5w12zzgJP4DEkb9Lmgb7hQGe7eEkCNb6APvy5Evg1C5xT4xwU5NEhZgSzfVtWbxm5xVWhEvgRCYN7ZHXMeLRfQAP",
  "key2": "5wPgCHemnd6SyZV3ves8VPP97vKcwKH4h7WeF49xThHhHkPDypNdzjmVNo8LE3Cd4XmP8czrzcjNS2LERaADrxTG",
  "key3": "3KDdfRkgCAhyY5UWiK5HRGjfP66krxRy9YZSGFB4c3zpQRsNoFq6R57FAsPqHLMa5XsHBkfPQt16mvVLUF6dNZFA",
  "key4": "2PJbYdKoybMD2B4oPZuN5cBPnnAVAgcUXL4vSLooiuMntRWR18WeUfdGhiAKDMHDTQbw2QNGi7NKswrPnVsN8uN7",
  "key5": "4JG3Fdt7KqpxLBfW4cVqjPvto7cx485CWTbyEJiz3viEJBeDU8Ry66nG94bA9pyEP2DVVWM5hUCznqrxMnZzzvTp",
  "key6": "4dN8Di46wbF6ZFQag8VbRwoQVPjqfDDrivjL1Zxkw4erNKFYscRoZm8uSMTFoHB17L16EqDo5LfNFX6wmifjgzav",
  "key7": "61z4jMQAkVxWe83Q5ShKDA8N9Jt35vbAN5YutEvWoeriosdWZyK3YRfZaRw7uvp4U38mPVhN2x4GwcfqNCwQhL2d",
  "key8": "2643veVHjqeVovXsMR4uUyMfmp5tQCL6T2bCaLAobQ4uWkCAgRRefWi85kFiMxqu4d5PfLMW5d5e7mczKMwVoLj2",
  "key9": "n7ESdtEgtTeCWFzXeNtVT9HkpAVsz42CCYba369vPGW4sdMjN4QirDBLyq6Jx3gaRJToRv3x6QHLo3aUrGWRwbj",
  "key10": "4Q5qJwTzFWDfb3ioTc7gT8dpewGRSeSfGDox8oshQ1krV7KBr4MK1Z7ZD1cepfWQVLzRZuFexhoHZAV3eJVFhTdD",
  "key11": "3WusWNpEsUKPMAKWH3rLPUyhp728SLfyHUD4yGEcfkULoHPJhYJoNzqyeMRdmqzxpmfRSMiCXJywCrXh4HBmD5DA",
  "key12": "5oaPn8MiacHEBZhdQfwFrWRUa8Ejhx7APbHxFRr8srDhvQkEdQ7UceCUhGq9nt1VMNLQD43R3VxoUCuHi6TBPNiK",
  "key13": "67SYimdoxzfj1qfs7zG9V6MAmk5koeKjVtD4MV1ejBTqoVQQPDk2DFJDLRHEnQaubUFwjvo5DRPSiWggD2ob57B7",
  "key14": "2dFScS7vjgVzSkRuqfsLUfunn3ZSGTeAXUpyuFukpcDaAuPH38itsfZtbkxFYK4J6tUBmgpDmTZEtdWHG9vTA32d",
  "key15": "5BsNhKoPtBj8Y35za7CJH75rH6kk17z6ZzLVnK3pZ5kGAP6fHeEkvA3VZ8ZECWiCYbojj6cXXzct88thSDoTzb11",
  "key16": "5QRkSha7CUAYTQMcUVGMaGBJZtPL8dxEVZXMvf3fKSk3ot8aqLwRnEru6K79dsteDW7U5HZJr5QBMErUydrdHkFm",
  "key17": "5fPZ7Qp7m9embjgWqeEHvwNeWu2bRVdvF1HTnXuSGCaC5NLqgYD1GbfUxywQneqSYeRfXfJUjX1Rqe5JrfiVqPHC",
  "key18": "4VBm6882jxKaBnunkC47eq8qWPZ5DroD1awZSYtRd32DL8R9WHf4ZvayDcHkU85r4WopK37AsQwPwRnvJiukkCB4",
  "key19": "524Jh2eQe8nCZDndJ6VPTrvRQQbXwUizjbqsQhd3bVTNUJFMxE4huaH5zFMUphvaueCMio5zgBUSGXSU8vwxraDj",
  "key20": "2mhiQoHosWsJ4X6RTemLLn2ErPstV3vbvuWohGiuuQCdcbxiuY9Dp5FoDBCNSGUD964fUQcYzmiH7j5NBNUxUiet",
  "key21": "5ZngvabuWraAXHJh7Rvy21sBhuLbZGYCLmcr2kCW8oihHjmqhgfWNMGHQHC9PTY5HEx7CThTsxie7yynKfWMgszx",
  "key22": "3TmsGDE9eZ6LEek8qwhFsctxyovAKM4QeGCfGiMfh5LkuFonCU3ejRrEJXmP2tEkFyPdTL4qwuKoeQG635YubTXm",
  "key23": "4m1rToggAYcyXGSs9vpb7pax7NGjkAkh9grYY9rLNJFfuvFr79xiBZoHgUeCzwffwKsk3d7nAzqgLktyr56wMgMV",
  "key24": "4FRVxuQddiRZjsqAPo9Fmhthmb3kuXFvzPZfkEbNJDcifVA9f4fZodPgzRKgyrKfjRnQMWtoEU2tsCwLM3WDZUPJ",
  "key25": "SFAXGPzEKStc4JBQ5T6d3XosjYpi9R6TbH9Ze5Mnecs8MwygLWmjX8LWhRPCguK5YHL7rczdXY2nskEtZVAY3WD",
  "key26": "54xMSzxxrvJkAqaajB27f95UtVxWRe7Bm5C4FfGmqf8joivDz61A8srxMfEh6tkzYAkbQRFDAP6YfALZMXH8Tfxh",
  "key27": "42dSVTgvXfBXymKqB9NNTCNMYGrY55jZdDZEMMWn6xMN1e8XGYh71GKWiWZRZqSE1GC8veQRCM3FSgnJwMdR3jPq",
  "key28": "5Pt9TF3H66ghbNVBEdn6YAdMQC6gJXZTDwSND268iRg4Ta3cBWiAWS9ZcxFwMhCvSpfdM1y3Zyx24iiuGJKp1tmK",
  "key29": "m5RdyFgQykjhFxfg2ydc371sgo5PQg5KjhUx6wdMih9iLYEhT1CRuksCwbks2wazAuCAyXUsrXwqqBjNyPnwcKH",
  "key30": "24xG6C5o8aEtxDtFwvLq6RJoVYghvLMoNKuRJ7zBqAUNzx2Pxpk6fGRDGSCWAwLQZYT5zfRymjhQUFutNNDLULFi",
  "key31": "5X8iS53ZQEo4n6iP1vWg9TPUzmgkxRjzQjcwwpv4AnySExpUGEwJ2E1RohvQ7W6bHGZzRpMKgfKpAcLdgCYAj2vn",
  "key32": "2wcoxcvsnTYRUZqyoHAUQmsJHaTQPEzJmTcmoG9eAk4izmaCYENztEQ618gmTLpPzibp3RFvzB9dLX4FUP3PsXit",
  "key33": "5dumCx9jeDePXtTvsq6GVo5Ct3XDCUjLJWqFarn5yAKcZ78BdVpc9MBfHi8sSMNLZWGS8GsN5wcLHKa2UspdTNU4"
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
