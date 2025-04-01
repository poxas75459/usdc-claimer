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
    "5edoVMYN15KgpkAE6VTSPmbcKK8tTySW95vDCDsWUknoqG6862ChhCwUP9daFp8jT4AJxQnbKKSpzqa7s7JhisZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XNH6z4D83rrCKWMyW54fRHLhABoeidNcGvgg2rbgVmwUarbaZAwdmCKif9evnfGGPvxDZfe6peHd2nQMbEb9oxm",
  "key1": "5W8aaTwnG2owCPJjTiQVNA7ACJwxmtKTRrKLaj3kxs4jPZsqoi6KdY5uWo9EhrLpvR9ABbyNctesfjyRXZUrPSC4",
  "key2": "3hzjHqofV6P7no7CL4ao9QMSx9jNwYGG6eRor1dq8xzbBX2nQQjyPQsgchHuGBPuN8XZdh5CgfgUfEkSSe43ZYP9",
  "key3": "ueMnToVSjymytwbv8qTR5UGEkm2WJHepJhMeTrMmYUYn8phzcT3hj96vzB2DwKNnT8zqN6eRJCKWgcZwob3ATwH",
  "key4": "5ze7cadMWB5G8xbiiwzjrddW1rX9CyMVsv9Jqsaaogs2M82kkxwLFau62hc79gRj8Vp827Ep1Td6GgcVn7zUkwmx",
  "key5": "2isWjQzRkAus52gHKErPuwrUwut8nesRNC6n97DKgSgAomNzTPPxgvs1qUYTU4Yep9TG7815c4LCyUpcbMkg4QFD",
  "key6": "MUMJXwW5bEd5Cv7k3vCnuiJeVVnTg1y39YH5wan68T68486QwaeeUETsSSE9rHBSGY1eKhRZ36vpPAstu8Wwsgr",
  "key7": "5J5PbAaFQjiHJ1drkUj9YvPMDvBXcEJbEZ5eExZat2ZNu29YURCgHtto8EyAKVGwPWRyMvCJ8adqPuhG7iUdGSPk",
  "key8": "USuLLVemrWuma5TvSCLD7Vt8s56EfKJL22W62gqthepsVaUbwYLGnwpNWHzCFBnmpVkRc2zmd7k7U25UPwR53rX",
  "key9": "2anF6zok59UjeJpj23DjzST2yyxkNXx51T3hYgatWeXVPVqdumt8DHZFBhdy4og7wMQmhDQ3R2ctL6YrNYVduoe1",
  "key10": "3s24tdU4wEpGaRdTGJP2Qsiz6JD9MaC11PbGEdGANDtbaWsxkuz3V6SDeWYYbDFeiAqbaeVDwFhCuWrLSqbRTYsy",
  "key11": "3fpzmwSwzq3jp6dgRhAzQBHUMfPhwaUQHLLFN7PL5M4ZgU1ixr51KWBA1XBzGvo18E3zZAtHz5WqGW6XdhGa46ed",
  "key12": "47YshcXWCxESvJaAHoGR5fY83Nf9gaA8zjWAPTkZDFofuMUdB99xekQeumJpdz5YqXJzAM6PGkrbnpHHj7tFZy9N",
  "key13": "wYPZn1MWdUKWu5uqXwFmtkNEvyDmNhYZayrnYRVdef66gYnihwdfszCdpB2Vumb4LHBLVVZLuSooqVRGB9vZpDn",
  "key14": "4mnpmd7PChCXNQvcM7MKVQj7MDgrdoYTQgtW6hW295kfSZxa5TZugp9sSWGiqVn4NtfBZR9pc9hofr6sCrt7NoXv",
  "key15": "4f3hhU3NjbDgK38gep53Xd4jvdzBMHUJWWWEp6dtNzgam4rGrQ41Q4hgCVKfyJy3eGJtdnVQB1PdYL4EfMYi3Dav",
  "key16": "2Gjw5yFda8h83aNvyUcZaKn5CU47JuMXiTZ3J75ngRYBoAzxnF1C1x9kXJuebPHgc9tEZMwGuRR3KWaiCK2M32NV",
  "key17": "D2ycxJ26w4zRoJ6QMnncyguJ7UdS7N9Coy4oE1P4hJMYFv2owtcLspdDGCeibYhsavDHsRfheK6E3SxjW8sHBWk",
  "key18": "4cj4gTVxYuXTfRwho4vEZZTw5NPd2gDrNtzziAb3xvkfbZgecfRujmF7Uj322TYNgHAnKEGcHaQk6mXkEFnEUQMi",
  "key19": "5rQDAA694ZgTtmANCiK9Yy4WVdSGDF647Ur9NYcKPHb5GBosVxwiiEkaTvr1UurnRuXRvo13YTR3iHJvQQRkhYAq",
  "key20": "5scxfNNgLvvkfALzu8KHNgGpU6fN7ne9K8hQTLs9G21i4h38J15ibN6r7KqsjEs6Up9jJH7GSKKH5y5ojJ3kVD1N",
  "key21": "39ckstLm3zSxxe2Mcg7y3Ep4S6XQ9ZNTDqtBt1rt3Uui5vXFVA7rRqdxeY1SzfxkpcYkMyJDpUAqQ8LVjABq4GG2",
  "key22": "5XacChNLMKNvyGMcFuvwghq1acENBj9rh7p5AYJBmQWaswRhSvf6iwZoncZYXLzEEsjnr8h4VCBFstZUJQxZghiN",
  "key23": "4WHm6j6w18DovNsNiNdegPRBUYyuMKsFcmJYaJ2Cehdsf6V8vLk9xoJt6WZVo6a54Wy4qDumaEVX6RS39rXZDQV1",
  "key24": "522UTFLE9kLdrwr3f6xstgphntGeDDHRM6CB584zuJ7LZAkfo3XwK8JL8eHMg1zb2Ut6QJcpPouuwwsLDW9qdUdj",
  "key25": "5R25epva5S1g7J1gHoNZArALPB12eQUrSksWhe7m4xB8GepKnM3U1uNnrqCdryUTLKX7T7P9HAMeWjPkKwk6pxj7",
  "key26": "66m44kvEvqjjR6u4dzDaWUkdrsYdUZCC7aj5MZ6jvfw9EdsXozn25NdSyzuG3b6ecP5exMTep3wQBetrVr8bMa7c",
  "key27": "NFdnQhw7WPAG1wq4XNNdjn8LABXjtt7TkdmeHB4XgmwgtPByQ8A3wqRaxNSiGwKv4Fnoy3GyM3NM65r3jfBVh7Q",
  "key28": "vtLq2rBesxzvDYWMwu5E88tgytbkjUCHKw6YWsvoadJKD36WuMvXynTXCWXLW6Z7ZyFtchWHK27NLboohhjZaCv",
  "key29": "SSwQajNoTku7YH4AxW4HZZksebyjYRziDVCGovP9H9MVrLJnoF193fiwQ7Zwft18yRrH6fogC7da35PbwKLNLFN",
  "key30": "2cJ1KjkizruYPeawJztUhfbt1VXvucTUGT3QA5yTtnjdjx1dotEpk5dwijBsKMpAHE839eFXRHJLQmCwRKgJvBvK",
  "key31": "2zAs2rqQQREMEmpDnB1gCZrtR5v2AANtWP2Td1S8jH9yoHBs4B8ghe5pPXDs34rbKEDBx7RXmaNVX6hGikmwnJoQ",
  "key32": "6FnsvjhopFTG5HKEFyKMwnVamLKw7B7LkyCYeaKBVEW8GtBf651SdUuXdui7WyeY7sJ4QBKxgYN4xtuLGd4qFLR",
  "key33": "3KtpiK6kKWBDusgkvoiwCfdWzJko9EnpGfvdD41nCRrQNnHXa7pZuGNYnQKzNGJr5pcze6heuutxwZa7ABoq4vXa",
  "key34": "5TKNteP8XGTYoG518S1aWUNEB5j2BzeB7KMLuMDYd3REfyc9W4LDoe5bLvSkq6bjQG63UPa1rrJQDKU2eMzeS6jM",
  "key35": "4C9Mdwsg3USYuWYpqECr8SRKdywux3h9C1QaPBF586cEdAV9VXAhiQv9StqUBsh9dxd6VA7LYKgkfyZD8jBusPQ8",
  "key36": "5FeDAbVrPRVCw3EAAN2w5wzeCMGj2NBFYdU2GzKhxmZ2SVySxGFqvp5okcPDG72YJLdJ6Aez6yFFiMMd2VekZce5",
  "key37": "515rrXj64cHDQwBQHMBohU2f4oWbGfURAikdFZj5HUpQLaV52u9HJiuERBh2iMmieYGum2ryXJAgorAsPE5tUXEb",
  "key38": "2mMV6sYNpJKLBqRWbyE7Wx3QAU3L8Zgh18wPyN3Uvgbc7t19eYL5Jvg1vHVzd7kdhCh4EoetPDtmxAyHehCfKEnp",
  "key39": "5V7nRLMCNkteiqc3YgxAugGcThDyUeEa5QiraDs6dvxVMihB63647yfen2g3gLAASBhZsSXnGWxJGQbG6Vdi3w3j",
  "key40": "39ZbGbGaU4bnc2BhH89fujNBmVpzJxQKmcJdX5E3MgqNPoDCCxGrE1ViHWGk2bkh4WRqKdR7DY4oDcvB3EGx4nkh",
  "key41": "3Jos34ANTw8G3LfCWSf4Dt4DhQU6ay8FTybE5GXijs6UjYmt2jPiXVd4MUDpyz9HMbuEQ8Cc2H42HPaLfeX8GXsy",
  "key42": "44cXQtxBfwVEvTJizQ1nafvyvg9BuYzK833xmJh4LyoxbsGjJuRHMoTZzw89gUk4e5hcbn8ACK92sQdJ6LoP8k2S",
  "key43": "Cph4a3QKgsqgi4pdUwfwDVB5dimZMFHfVHCJchrBLVwTU5d8sGJzBsYE4wNFtrCDDsFnKH9sh5McnGeuSZfzeDC",
  "key44": "4UnMCnqLytjnZmsqicGpxP2uLK5ysDQLqPDS4TSCP6JR9mLcRaCnYnYA3szfvZsoCxrMB2WCNNuK3tHqmg6eqDem",
  "key45": "2ewVorfvdq6Bj6wE7D29teRavrePPudnxr3dUmtmjjhJKcD1BQATqNwenA23qoDQZ3CUCX7aDxPD67NwWeu4WB4N",
  "key46": "27e7TQ2uVh4Wm82kiY5RzMshoRaUkMLe4mLfG5Xfcj9w7WjwDb7JYN4cAvLufpMiGgsLnZRB5kJWX66MCc8vfg53",
  "key47": "29fwoqUGBRf8VkEMncxC6uTEC7bKyUGrZoMnoyz7ZawrogkeHbZ4oQMt2PrWqocrn2TD8dHn57tRkTfwwdjr4vWj"
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
