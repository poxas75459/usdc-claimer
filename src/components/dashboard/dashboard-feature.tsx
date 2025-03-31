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
    "2FKTA4B6XKJza5MujCtCtSYZqyPqn7ueCMgmbazBhAjaNPZjHgsSTqf9gR8Mg8aUYnsNJbY8GsCnyy64bWMNSijs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26yPPxjGaWy8cefmaFCx3UzhY869mrXqvhaWQofBKgNQnyzb8Vtod7RbvEay76cdsj3WexRtS7yfQPSuquo7NgqC",
  "key1": "3FCskfgsw8RLpQx9m69yzBdbeWz9sxBAVSTYZqcXEPoFtWtbkmGVoxbAdDHYXZecxtQxwnJSFYToE9K4r1sUgRNx",
  "key2": "4i3a6upUh9qSm1qVukjpdHwqqJzkg64d3i1V3Kt788C6kPcugeQPNMcxfH4sQPp4TdMBkP89b3LeVeSyFADB6k7b",
  "key3": "bm8M52xKMgLZC5DPm97umh6YHg9wSXZrm4ScRwhovs5Utr8V7L9TdNwgvCA6m1LRxh5Eqhs2u19XnJPwMweWAPQ",
  "key4": "5wrUs6KSBAxGRzPfa1A7E62B6ULff3N9brpfDAbzrTDVV2XzS9hsiqavQQx9qs3UrZv8xDv3PHQD42Ma1oYgyg84",
  "key5": "343e3UAYGQutaVMJWNb9qg5jAy8fWMFYsDS5sxfknuCQHvik8fqneGxtB4pTmgZ6MyXb6TEMRH62ttM9uNutXGyt",
  "key6": "2qNbsdWJzWXPgbhUCrio1JsQ2RFTUNs5mhHhaz8ABsYKtRFizUa7H8YQpR4eZDinqGWLoRGRptf2YrcoAftLhcwf",
  "key7": "zEW1rdZmtzQdoUSd2S6paUhLB5acnP1dMnjYsP63J4aJ6wurZWdRMBTFUf45ox7saXSnPUeq2DM95ZJvtBtWmv7",
  "key8": "3zT2kWDutURUHZTfiriEiXC3h5Jy3Jn15WpbkbmG2gxS4CxNMzRTjU3S4eAQWcaxoVD3qowNPYS5ozmHUVC1CRv5",
  "key9": "Wz1oMm4PpBSZaUj58fW9tH8QJ7PN99p8RWwpaL1yyihVDhN1QEunz8YTzu8BexTYZQWUf1cSX7L2a2SwJkN2X6e",
  "key10": "4UZSjzxTJU223ZZucBTvrAGijCz4YCJ7gG8XMjVYBf54wPNdyoPfVKHpj25YnYEyBBw4LiQKtJF23LEcjwgBYSv4",
  "key11": "2gk6r7jdP9GwgQ1ELAD3JPARp3pQHxEUqzacA9vzAwRp1jPykhpPb1tJmmMhH5gnGBipxyCKNw9SRUjmSojepiGX",
  "key12": "3c9qX165kUuzzytzxyLcLMZHAi3oiP83dfF3WddQrGWTEDmgBR2sV6quKSpQHBozpFUBSQbLePC1Titrc8sb84vJ",
  "key13": "3aZ8vUnYmVHY7vKyehxjvuJDGQNyx9fksVASPKaGvW3Hg6RXLdXhkWWTVV6CUbp6huuJpJt99j7tkcFEPZz5eHWS",
  "key14": "WaQinVHBgkbqqLWkRRotfGUwWe2QL1UgZDvJxeqj78SYJsLVaubaym38ub4BhFukS86xK15qhDbbPdGh2GGBGC4",
  "key15": "441UhFJfpvcbmu8xVLDsBcff7ep9CGYdiSgiKXZCzUvWAszwrCBSFKTjoFE1RfXZxBQXUfnijXgciZ74SUxwQRPm",
  "key16": "61wiyDU7Bcfxo8AKdQ21p2fZTuZq9eSfUb96VFBeFthoFgnD4i5VJTRWpFJRDJ7U7uL5ePvdJStV5xZ3yQdbDiax",
  "key17": "3sL1ABBoVv9bEfCjE81ywsPXpnv2mEHzWhXuK2AUNLbnT1WZUNeEpYSCg2DEHj3cY2EznFrzh6Vmt17hftpJryK4",
  "key18": "258aCAZ4bVs2rKFsCJ2AK8QLWCxWX93XJF6SGjfkzcEK9EAoxpNuCQXCk68k5847wpkSmCY3uXtQibMZB6JfgpU7",
  "key19": "UsnZ3Td5cgzhSqmpdtKg41DaAEkkpYX17bHzAfUc2DasK2enLXABcdnZ9xSH5KG6WfMhr6Jpm998z1qfzJ8c76K",
  "key20": "5PvT6stWXX2MkGt9QizYUceDYkJAde4Cc3PBNjyTr1cCc3NqC9T77kJ6WcGEmUdV8uwurbLyHQFiQkbCaXVB5DGv",
  "key21": "21NryjSVXDaFqB8tt7wfRkCdPWLBNdHQ3zQokdYq3MbG7XYm53BBZurPNkfSdGqCxRUXBRzYKxKLmMYAL35WgM9U",
  "key22": "3fKY2XDQ9Gf9KbwMow9vo1TBmdmkrCg6qAQYrp8GRppE6XjgjrkWwoUuHuVpCzaEf4VbbVQCgNwRkJXfbjWzfKhr",
  "key23": "2b2sU7eCeBYehHyi9jxB7kSnXNMmGQgSDy55UPD5PNBRVSi2GAw373kPQALRRZPppTktSWKxqVWVcXALzD24jyf3",
  "key24": "uZvvLXU4g5E8LJCm9ZQoWZXpf5DJJgQhqKuuPY11hcJ7JUyzmaMGejz3HUpj8AxMKncY77f44tfSrpymW1piE4F",
  "key25": "5mW32sowz1sjuRwYc6SEeWpufmx2cyaAJjNUYMMpUd5pyodcrjFinMVwfwbBbuMiDQXvBpqcT2Nh5s8DjtUBcMAb",
  "key26": "5SZFdRTFuHekMWspy8ex7bCLK2DmzjmpA4eKYfCqgYZfDek2eNp1udfMRgJ2XoaSz2BP6Cd4XLs75y8cp9SWhTLf",
  "key27": "54C1mNy7rNPMtwCCmHjiK9yvL4iUJLC3yBQt9GnsKBUPEExVTQ8nhRraZhQMUiAisff2oLMX6wiNJwCh5jCusoq",
  "key28": "5NGH8P62f2aPK4ZfHbEEm9FPqEn4suw1RF2AbFR9aGBzHV6Hqqhbpr51zLy1FUvbUAwjzNqhW5aM4ykVMa127mZt",
  "key29": "5vTfHBiecciwh852rPVoH2iSrgP2vqWEbz9Fy74ZEQwdfFV2wBCoteP5ZGdHqH4oJRw3bMPLn11xhxZUVJydaesJ",
  "key30": "3gKjMhgQX3KjWphxRW5P4KXbVdaUFUMGjPU8jGyBycm2iLzU8cTu1LvagQuimJeQSi7eKEhW6Xhg3RMjH26LZFHu",
  "key31": "3Yh9UQKq3upL2JHxh6ASJSzcRXNQJi9wEsBgWsgAd2BckwA5n3XdRMo9dVo25uifodnbjZcAjkKQ1u4ntdPUa81t",
  "key32": "2MCq89x1MgLx5bpY5QwN7FmYVCbrnvB6rrTdrCQYGrLq7yZSWu8Es8LBXQoShrwVaPSBd9uFwKr3iMsmcMexusrf",
  "key33": "3EKHJQam5uhufSyxpUQ74drut6CuLmrnMgea5LH5wYDRGghcyzRb3g37smskJWAXhUYayYwd1GdVDe4ZraioA3wm",
  "key34": "4USuSfeSXJHtUhzWNS9NPUzM5X1Qq9FKTKda8cx1FXhkM6eHKg6yNyiWiceBQkWDumKLRfHmWz6H1773MHJFH5JR",
  "key35": "TkrXzLjVfYMMVdpqfbN9Jm2nJbkvJKkKjGQvFd12BSyWV3DJ3APoqiLcHmSfzK97K88Y61x22d5AoZ9EHpATS93",
  "key36": "3cXGKWCkFBVtUkpy9wbGbjATFCNhcpD4jvVc4Cd7VdKoun4baYJc6e7CSPfPW9QFTmothvcmPHX48zsgGGSx9hHr",
  "key37": "2MDxbHAW6mmVamXmMLpphgNe64yEmCc3VYpotdSRsSUxeYqjncm7SpZbr19ktogWCghm85kKK7Xz4NrcTCAxuB9t",
  "key38": "3msJLkxrs63HbVidEaUSi9TgG68yDwmGBp26LFqLSQDFdSrQ7PtZDPRZLop6P1NbuKagBLnNvDE2C2LdhnLWxPf5",
  "key39": "4ZYuFqaHegrW9cc3oDnT7GRwVBzW3nZDTxAHnpuToeMy6gK9dzHMarSB5V9fxQaxAsamZFVPr3VWrtkRPKKxW5Pa",
  "key40": "ya4pfAz7Cnw282pfR2bCboDpD7W7aM4oqjpduop2cbXSbus44WxsjD8tojMSx9CW2orSPFBwreoW8SYwemvxrSu",
  "key41": "5cCozTtghjYeErLkWxY7x96Z5rTMLmifKtiTPfwnX1SHMJtzYNgbr2U6Ng5oEMckcW9ggSTC1Rvj7RDzRErDmmaB",
  "key42": "3TjEbaPdrrRa5MhiMUZ8cNe78Nr6NQuLLBK5GbU99tHhh9ansRECwshjhQfsWzVnD33jzGgzv6rWeHeDZx3zc9K4",
  "key43": "44DCqDh2tA6WyPMymBUG1ZEx7WKVtc7XsCLsxqZTazgq3xNqb2jb55JTcojdsGghpsWb2sCEY4hZWEKMR9mUdH2B",
  "key44": "5A4QBKkqrikXRcZia5DLB5EaxqJrNjvm8nctoDUFkTppDHwmKWxpuSTaL3rSzttMVUneJdU3AYwPT66YimY1dNjV"
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
