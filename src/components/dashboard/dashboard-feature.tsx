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
    "42hjQfkiK4vEYRb2WqDw5ohojmcS6xMbhdaQmutj7BaVGSDcCJt1YWGLZyTY1AVwGUoAUYQhj8H7UmErHbpzKjSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23xZEyEyYjudETauFuLNo5U3SftiHau8uN1CuqWSBAbuWvmGV8mxX3SycDEyyCi5nX7ucPo1s6yihXT2y5VysZiq",
  "key1": "2xWkSYqxkNBXQRc84CvKEK84enLCPV5kCTwAcyuTmpjqTNNsoyWkLCe5iJx8BjbcTtxCCBHgRKxPjuGe3BKepeUy",
  "key2": "4V3GN3EdWYmz5W8TE1f9amvcdXm8uubeoZ8Bcmzgddu6RmnrGL3MVAbNdKDCZ7A7RDzFq1sQVZfTsETwDVjCedCA",
  "key3": "5z4ZiNVmsGtKVsEd25wuTSSPH23oQbD9Dq26ALhdzgHPAK1Mp39rgRT22VMZ1KXgGM15n1UwVcdCbsL8Cio4W85n",
  "key4": "5bvN8xKdLQyZLRZUWiFq6dVqVdwpYn4HYoHVrYP3t7XNCncKZkMgsqswYmN9NwVCFppEtiDrWwN8sokuDPWGfEZL",
  "key5": "3XpEgYv73RYYkyPuaxykhstTGoQJL3A8Mqfh6afL9GjJUDdyJBVKbab5fXbjAdrcu7dxSy7m9MEePAxpBuudVXs4",
  "key6": "58bVRXyB7vdJ6PbwxzhwZsXVkbua357cNxqZtzgpaB5j7DGSy2oNCq3pDC5JbF7uKy4yuhSPJDfyEJiAC3H1weF1",
  "key7": "44AJ68Ytz9ok6ABzk6wmuwGUbvGyZ56erB3A3isBYjhKw9NkL5L1uynF1imzXyaNdDoadpPDfiKtk7ppMEdvdne8",
  "key8": "26favFjKtntoYFLbJ8nuoERLvyvD4KD6ZmgHv1YD6cSvvfgewCHxg45xBkdbRGvNYMWaJE6a3Mtb3to5Xc4hvTGh",
  "key9": "362Rs8KQXLAnNihE5PFCuSUe7AyvkVUYNSMrdZn7SGemieDLHd5yWmgiBhWHB4cHfpPbsN7EybsoWrTC8HZc71We",
  "key10": "4s5NyrbnU3CmrNFqdzLm5xWn4cLVeCh2vVq5SiEX8GTEXMNDsiLjJwHzHYKq5JWJLGG8Xr3s5bcb5pzfrip3VVcB",
  "key11": "3sygnG4uJD8cv8zVH9rT4wvRmJbiCLUhCwBcoJdYuJVgnjMvFUycJYfU8frXzxqtZE8BceUZmSdDMSKUrx1NG6jC",
  "key12": "4XFgEiudn5MiJQscTb1BBHQ7LziTJBQzKTgXB9em3LAz4tKLLoQNiBwfNdHNgnHA3oaTNc8Li4wZ2DL9JbzQppoJ",
  "key13": "3TV8Ky6KriWsxUR5xMwwNcb2E5zUcxRPcUXoYD5tTqYqvPkdzGkskRa85MwF2479hxnjeTDirwj2anmYDhMYUT9r",
  "key14": "3QXmCkbdna8hxXtJTH6iKwpW4yAAGmxKrfsxvZEoLhfa6fLvRCo5yy92RWEofEwN6THERBEDBqYbCNvFxdEjmnvw",
  "key15": "m9TvP6tyYALWicHnwp4121dUct7VP1yHx19k7VuccfDAoLjxp7TxYq9mbwmtUi2u4s8JNvb3gYXT6cyDPQiNJLF",
  "key16": "5fxmAGRjrht7L5hHHnYauL1hiaL9UDDohQ5L2pkzACWojBvW4dYceCVt2wD4XsNCU84dEDUSe85ZnsUjGGxE1Jg2",
  "key17": "zNx9gPHyFp9A1wuaPuiSEFPCYyFTnctQxDAsfSrgCh5bwuxL1KaRnjsxuAPSjvbVHoton9gNrUuxPqcKkWdnCdi",
  "key18": "4sEur7MLRTkvxMepc9s9gN3xPJaEoLa5DNfgg29x2YqPHNUc1dmQpBkGhXMKsM3hcMTikpBC9odsWtZttyw5Hxe3",
  "key19": "542tuYH4Uwz1BZ8mX2UQCXbwnGvfybSUhG8qtu89WQ34ByEUH5xBWLe2J7PJ3pxaa6pFwS6rFmUd81DDb6aqBL9W",
  "key20": "3bhGQuSTx8aA2zkgRz3Wki4HbgSG25yTosMkMYyVJodWaBCELYsiGtoLQ7LZGm3NSN8B9cGDmMNtupoBCJLV9EQG",
  "key21": "2HGBRBi61oZjdHrqkWGm9T7pxzyT9Xr5DCVfFV4pJepxZsdGimzp3UBrDuYFBPLRBNM6ymBq57bxaLBk8W4s9zTv",
  "key22": "5y5mkc9MaEpYhSMYZCgYKART6zsxg2SeFMnGcPmwR6fNBbrvAnarmuA7QxFBHxghpWTsxjRdUHZAm43ApXwpJhZ3",
  "key23": "3U8dJbRFsiyZiuUJX1vNNanB3ZjoA6AsDQPikcaoJJy9d12e5c4z22PCn6cg8sPeYrBV83XmgUvrQh8zYUJHnnJA",
  "key24": "3WYDwv84uQHvggSTwtnFrba3MfdxmDapjCRnjTFdq5jv5xxeomdDPTCAekgpaZfh569YZig5LmV92ayrw4JMUB4F",
  "key25": "5DHoRFaxGjpPj8MuPXooxB189D7J5jKSUpdtyJ6fkDj1QzVnuQcax7Bj6pYcobhcpY7VrMgtXDnGPaYQLAypJ79q",
  "key26": "26UtfohDL7tC3wRCAFmsjefxfYM5LqLFp25Er2zHRtiDC88theTCQpNFWSkdZpUfpHnKBeqNKiHWsC4bCKHoBBkg",
  "key27": "22j9T1ScJDJPEvpHPB5hMy6rwzVDgP9PzNaqfUBYnCgeaGEAfhHAsGVbqf1YtTjRj2tvpkRMDmrkVs57mybBjooz",
  "key28": "Rkh9kdGvBzaNwdniS34YpW3VPNDR5Toa651oeakJBZMbri2MAgX1c3uEvTUTr2f4Ty3tYuuHvbekPi9HGCvLVMM",
  "key29": "3fx4JTFnG5cT1A9jepW9SoouAZmgMBLnE7jaC4duzseWyTxsSeUv2WHoU5XVjwBH4JaJVE5vUaN3HQU1z4Ej6dp1",
  "key30": "4Ezf3fKyabK4Z6VrSrzkitAJoBqu3UnS52nuXL4nsCvZssaaNUNxEhrfMeQQ1hbZx6NW1eerNVPhvaMVUP2K3aUJ"
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
