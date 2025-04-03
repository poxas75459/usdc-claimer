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
    "A1GmvLi8B5JggF9EmB2a334xr5PzshyrryL7EcN3wzNLCYwbamrhMxTs4oJC6D4fay2K5YS2QgUjS5t7JeeEgUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QkzkUYoX6eetB2aCHZZdXUrwcyPKWSBw46yTGrmwBJGR543W9yxorWY9ZsNTiZ9GDFvmkui3D1sjsstCt9EfoZp",
  "key1": "2tjvbiNY2yyaFLPCjZQXm1ZbVB8F2QdRZHrKtEmF7uPmy2BVsvyEL9X8R4b8PixrWCi7RWXZDRrr89WzvtgpYpYa",
  "key2": "5oEmzWNjRavjA5vJuf627TZfcodcX9EAAD9sy5moUaH9he4NDD2oVzndy9ZpSuh2zQm84ZvM3Bbe8N16EN9M7xCR",
  "key3": "2uBmkSZC8Gvu4dSZXMWXdMzjn4sRVPyghiYh7bBKtzut4yNvJmJyXvg9W4CtVryaESL42BQFQoRZxNdBHneAj46c",
  "key4": "4aChsJ2PAiKiPCSrHVcBYbneFp2FUB3dDScH27WW7wDEcqMY8CAFpixL68u8nswWAugMBzpFx9saMA5f1DqXBzA1",
  "key5": "PcBuNac67Qdh2LTmgpUFDkVdeKTDhhTQuNxdBh7ZbGSSLnwpd7SXBcwPxs9rVLxhJqhRhwibfwwb1Ao4f15HkYN",
  "key6": "sidm6yaVsmSnXAgZgjgr7DLJGhrs45X2SiTQueRg58zvoTjz6Zv1FGF9H9K71HpoTqbUtLVnwJcHDQgHJnuQ8Ds",
  "key7": "XoYo1r83xSySaLpaP3ciz9B2dWfkM8BZJgUjDA8YJrbnVF44X5HSppdJPKzTBoTMdW4cuJGrSbGybhPBGi4tjiv",
  "key8": "5n5XLUBf9dTpgf4B8ui6P9cwqXoAHpFJEJ3427zWGavJSs5shdD7ELCyryouLg8Ces13357U4LfQwb7poeBWBhLx",
  "key9": "5Ut4wuuqGUCKE3mi1Ld9jZngmZmu3M5sodRenp5qJuXZZLkQBZxye181wbir71efiTdX9VRV7ebTQt6SERkbWFjV",
  "key10": "4Hq3L661CvSLRimcY1PCuXGzTXwZyQgKDMACbwzMxNMLBvgW4CRTRaj9fcPdwGLZ8Aq5bPdiPi42c3FvcwTnBYUL",
  "key11": "WyckH28TWiCNWftHEVDSoZgRHehzsu4TMkpPeHmymqeKu13TFjKu4c41XLQBuNJCFSc5uXXPXSoUk9BYHGxapj5",
  "key12": "2VqjXcJsatM4ozPZ2nxNav4wrMrGGQLx9DecYx2jHxF4mentrJfPJy27hUgBXC5VMGSN13oCHD2iVMaphvy4L1jH",
  "key13": "4s4wQGMnmpwbuBwJcS9q5YcgU925QwCdZXYJG46Z1fEY3MZ1vMgCV3tihwjW6Uo2xZ3knbyBf7dFvqzj7fSrMwbe",
  "key14": "23LniLhndejEGPwkQ5X6XhV6fXpvCDNEVm8FA55VwokHQy46idLPiKvPK9s1gNKLyMvwop7TGenK1rui26ZtbH8Q",
  "key15": "2voNNPTMJnKuLKpiuvqih85iNkcAbfxBSRF1x9XZMEPDfc7Yxp5MfjMC8oA3GmoNHuuuuYyhPfq34NrRPZg2oUjn",
  "key16": "61dz6hT4HqK9cmEJhQ1q8sgHfn6XrtRs267iR6AaoqP5aqkBvc1x1bEfGe6k9NEkhBUaun9dKqvQHtpcWwYtVvNU",
  "key17": "2ut4TrQ5otLTpCY6QxeP5UTXeoue52x8pkBMh7qxL7sdiPWUApoP5LjpppM5JTGCdN5q9SxniGKjxYkj5sya1MG2",
  "key18": "5BVwP1JUqAV7k2iFqDrVXEL9cfQzYAdmMgZChrTvBBvQa7mkZeHzSPLpCq5wm1v78vmHJitSnZaJgnix4XxSHYK2",
  "key19": "3LoXLcCgsGdfTr2VaWa37SCgz1S2WmNfKDXhDy4Zk1hUGRQwdCfFo4vcwSjFpnnV4yPRdsMH2Dk7PXWJpp3DhZaE",
  "key20": "5jdDmXLzmAYAmN6ayqxsm92Ts8LwByE9sE61cXZcK6fNjprCPfvQrqpiodnFRcN9EdQXkwdhzRxDsQBg5YCaJGUu",
  "key21": "bcFdejt8TRGdtTdQetXCSX15351woLhCc4aoe3Eqa4bnVWx12DiydwMUY6fuiESNQZ261KJLh74kPsE5ZjajJm3",
  "key22": "53EyNsQoxAYwBaZVUTptYAo9A5LegoPRCmZQndyDqsJPjZFYfxAruM25oYKdKh2b7Xd8jPwV2JpMa94LH4Y6VsH2",
  "key23": "59wYzxdwUgyLwh7JDd1QUFwdsZGUdzMGizCTQCDfd9y4PaMjWnVHwdriSQmhz1NKvn7T7RyvbMmbjDjuELiHNLtv",
  "key24": "4uEThDyPGAQwCTjq7xDVGXULsxFmwMw1KxsBdxzsT8vknwd2LBnQL8B9Kw9XGbUrJpttcjb2dSgMvF6DxEVMD3ui",
  "key25": "5n6y4kr3TvMA21UomsMHoTJ8ZUgDkB1TDpmPeXwvkxUarKDnxngDAZicKGzvrBWDEQbQV6M9C7qawYhueXUuAqew",
  "key26": "4dFzB2RxmHph87cHFG5vCRrsgGKdyciZYKNya2bMqnD78YBEiV7akfHbmAfLtCU7x1HTX6HDUHgG9bhNpC16ywhR",
  "key27": "hrV3R8P9RGWXzwVn9pe1P1CrpGVzKnNEuvAQvX1EjfyQybAPPxe3e94rMJf3KuqPqRt5q92zKnBDAbp3j9bdU6A",
  "key28": "48zMJEVoUHjEBufpKHbjR7Hx5oGJGX3oVgUaA3urRCD3Y3peQLHXyYVK1tqRof332KypPVCm6LTDQjSvEhMbAMTd",
  "key29": "3tJ4D67QCr7uJkGEz7QxwrYmrbanWUsVndcJhUp1QSCD3oqmbL2bpQCCwNp11KTH4h14T6W5DgYiofPEC2PE6RpW",
  "key30": "ggELLj2etk7m624Ga2enyxnoUfEYS2fZ9vimYQcoGbKv8BQ2ZpYAZW8BbC5BSjCwrkBqwEm11WyvTjdDpFHmuT6",
  "key31": "45CxdmX7JzaktLNHGfTj5WsSraPWdRLXwbCpYNB3QgUvZjp466AtY9MDDrYXt8C797Fdo4GWoxKzvzfpYTeuvcRL",
  "key32": "3dk3GXZH14UaprZEtKGdzRKt8QzhLBEgFQuT2f3PKafqpRDoRrG3w6gBiUa8miBGhR8E8WBbaVjAvdq7USgtHr1v",
  "key33": "3sLmXwiWMBRv94P6uKrDjZGfAS63oa6o7NcbBxqGyzKZJ5qfbkYenpwpdEXg8Bq2XPGrFUKBQYRYJtceUw9VsJZq",
  "key34": "3xK1oPVeycZYXhSwhFbZQ1Q7EAGWh1xDt7sXeBhRqxxdEGLURmMmREv7weTfRFyzohacQEqPD4nrkbDVuyZv8MYs",
  "key35": "3uEbx5B5mZ8EVdeRiQSf4AXGMbZPoGydB2ZbrXJJbWYWcmxXq5TxPEq2MG9saeBo3MmKxYXF8zrKDrqepDre6uu7"
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
