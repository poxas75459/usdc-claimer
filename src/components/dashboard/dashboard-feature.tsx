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
    "MTYWfYmfxXHHDnhdHeAGMTcBQ7RE4jwUz1ntDWEj7Vk8YjtJrHws9dKM82CsNdbfy9UPKA7XKeRoaFkBEcfXMYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SEQYsL7pKyPGa9ZZkjaVddNuXa9rQPLzsspDFCpKjBHZBeHmTmv7tRG7cFhwdTaDJo1EHyRXAuU19sS61FhBRGN",
  "key1": "5C3rY4d5MKeo4X3PzUvVfXQuyFT5Ni8EpTMYWDpkeRuUqFe39jjCA1SX3M6xsoTzftER96Cew3PcCLMLxJ6RoJ87",
  "key2": "YdTqjMfHA81Xa2TwmAcBsTa6UCAjJhuce1mK6VQGVJ6nCT7KVutszHrXNGusrqpiBSmhHjy8JMrnETq6edr4csx",
  "key3": "MWXitVyFK9wK5N8k7tU2S1n7bfdU3ixDLPqZBss23X1yrdhtDK2Qp8DAuZZH5yhJF6jET1DWfon716WMTw2539d",
  "key4": "2EZUtXZGbi95J9e5tB1RgYwEcMph79yGj8UDWyQ3k8KPY5p5ZuTMaPbY2S9VqZ1DBoTNivSznwA8w4ZBYUufLdX9",
  "key5": "5WVmWzMQePD1rud6hUqxS4aWukds1XeXgb4GCxi2MJdKhnoRoMk52kgxyGerPAVKeb7ncGLqMEVL9nMH27ey7oFX",
  "key6": "2NMuM3JACo9P83ro8R1JGnybebpU3uFv3pxnyQRtTU74m26VepTeAKoMx6pXYdyq67pdVfdKb49otdozZqRd2EYj",
  "key7": "4hZY3VzT4hJkn2eb9xFY61rY8zCULmpxgJFwApg1Dq6F36WpUhjRenFqU52BQYUhhQkam6fmjw4EvzNrc2y12WYX",
  "key8": "63ErrnKtVR4wPeLWcvokBLVQt7UiZTVCLWiLWQHeCNmbyUSbovNPrFkQAXhydqmD3hmQKnFpruoJe36Pmm8wByvv",
  "key9": "WbMUCVvXRsAW2cFCz4wNNbKpj1eedAFdq79yZg7r9hG5huQ3GLhw4pXsrQkEughENiYVf1k8K46jKuK5bwY44WM",
  "key10": "5tYbyYPJ3VGXKMroajZRDjqrVxCkVWtgAc6G4BLSjxcTj2hBwgR8Y6GGYUfTjPoYPJXbo6gHqqU7pW4DKg2YdDzG",
  "key11": "2G8ZqQaMcDt8wb7GkU7cZ9oqzugnuj87ozbZ3P7DaVq2zPK2T2GGx6X6pHHQWER6Djjfx1uLUvbyuyM6q9pX1Pdx",
  "key12": "678kSmQM6mB5R7vyyTZKMxXAZpYtT69fMZsATgQJv9t4CXntsi2KLCJUB3VTnA45HYW6CkE3BiPssVQqHSExFDAD",
  "key13": "4Ebpju5NS7Ns5BgXFRvyaLQvgHjR7y3NWXbbxsEsyTBVvFbsBr4TfUgKZ9TFMFND4owGYPq1B9MT6vPcigask8va",
  "key14": "3nxnk2B1HiDHPT84CJdDjp65FrU8Qp1AtmKAzU1DbtoFN264xuVidXzZLwNjsdpx9j5BjU6B9f4ray7p68DqcC22",
  "key15": "4iuR9Cjw8U9CP5PbMs5RyaMbiSbwow2JXZLn3ksZaqQmkN5fBYKS2utgrfWCoMUU2uEJAaiUwy7MW4RQYp431QbK",
  "key16": "bYtvdmhGioBcBusRo9b1vKwo51hJcywCufCdJK33WAK6cbpC8e98Kmzc3fuqZkiaUNFDh9T6iQVXZWQnn3TL69Q",
  "key17": "gqUPeq5tW3uRpwNMUydHtGzKP6716QPoqiTx2onJPgZEzhX5n68Z6uJrG4RPjW91e6cF9n4Mp1biZ2x4chcHPKU",
  "key18": "2ZUiH3PYmMSWC44yAb3GF5MqmC5jJ4tGveH6rDwWSAgbRXjuNmaAdjKovMhrSC8AeNCgX8sRtNVzd5SjYzV9WXhU",
  "key19": "52rWasVBTLq3TqPhDTEVXRy1WbLdKyY4gLpnbcmxgVjpE9rNfiTU4fFnSzcVNjkMgM3EemRpZZj2skpnY6uLFLQj",
  "key20": "33cAJ9G59HxknnprPqWZrHqWNKVSKnhCxn6aLS7X67ETHDfhin3aHHhUJBbUmxV7s9fzmfLUvKP9vn5jbShEj1ka",
  "key21": "2m3Kd3G4SyEQThP7tG41kSGDeLiaKzJ31SDBmxRuhBrhgJw5oWebYRPqjNyxE43DrHFRGgp7r16kLGpd743p2Ez",
  "key22": "2r97GrkM1XCHfkZz9RfCEHD4YHUgicN9ezaQXBXimYBpgG4Zo8bFvmD2WbtzQTrky1HeNoBzx5vZG5xzRDtoQvGE",
  "key23": "62GqWLQZWzFTdHgQrv5CBCKV9R1L5o8prPqVKFvcfwu1Jy876fQaoxbbrdYwvTydmruBVXC65Ld8BYDAfMXyVyTq",
  "key24": "3JWGpoMDfkULQww12sQotbPRUFPECjUXwvdo5YvAs7WitfcT9unJEQy5A5PHGfGbuzoYoEs2K4oJLL5x4Xn5eL8E",
  "key25": "3vuAVXcBBEh5xbQ1tBsVhRLMcGxkeaBTDrJ1RmnxLHn9jKJFNs4i7FUtqP2JzUXHTDK4ZZPjPvce3k2JPwpjZfGp",
  "key26": "4y1egokMbUJLLFQZjBtSBVE3UztJPnVCBU3n4UyDGbV3qrB5LtrjvCRx6gnoWaVfLcXmQmGAsBf1JmMJjZQ9DCUd",
  "key27": "4z2qHrfSKd61digKQBjq1dpMfyKfBDWxw47ekvzULpKFZb3zXfeopK6eop5F67UDoyLMWGyb3W734R4SUbb2etuk",
  "key28": "2xpEP3yRLWKnKZYT69jpxcviiNBSF5UxjdqU3de2Pb1UqA6SLnyaD3Pspd3YWjvXqNA4ZYBWzMPYFqkF6BTvdWi9",
  "key29": "5V5fXM6nn81zoZ89ar4pnrYUHYdhyLbw3xJGpBzQSNr4VMvbuVJqEEPCtNHbZ3f4pxR2doUc69mp4Txv1YAbqQa3",
  "key30": "Q2HUkB2qFkWSaEGZ97EF3uVyAWmdH6N93FZGFNYjKCiAFSopktwjYknRAudvTaVrMkSQPrTGCK7trCKN8oTXrr9",
  "key31": "35wMnML5URcJSnjAj29ipCLRCcuP6uNFL5NtgvMh9EyS7ZzXV3CdePXKQegiqghNPz9qXN43w8JTtbyJd7JoEsSb",
  "key32": "4NkRsmxbZADpYzoyNkMVmt6TJbwqX2EGt5d33BTisCAE2qdqPd69tNdxpC1yYyEkdet5x9UN8web42LS6strjbe8",
  "key33": "XVxDo6HvmBZxQE4aiiURTyg8dHgeu4Y96aumiMQW9N2PB6oYwvWUf3b1CqwgF2Xb9hZwT2yfBZVqcwLHdXwnK2d",
  "key34": "2EMwE3DthwVSeHRmAdKJTFVPNMfQU6RgJUBKvyWP8eryxkAN5A7YzUpzPoLEcH9G91eV9RLfutAb86A17DEDwz4m",
  "key35": "3vB1SVFg9JYkAjs9KSMMfdxR4uiudykYYJjbbmNeuaBpErTmyJVHGEsRQMpK6su4C6RXxRd5djCLWSYbDpTnrfA1",
  "key36": "47DsjQk9inuNR8DVHPQu2V5f7vwA6PshN1zBFbupSDwYXYkDYyirMzNh9yi3HPTxfhf7yJw91NCQn83MXBQYFmU",
  "key37": "3zir27VEq3Fm4wtU1WujBRqs6FUCsk7QcuxwxMys4DMshhckTmnrZGHpSqRjM63ycopQ2TqNjkFjnjvmHyiVwXS1",
  "key38": "TpNYGew75WEMiHTcJnGcyfTHgqHpffBoVg5kwXApqQZ2m5abnogg1UL3iypQVtXuJzAUZy8a4RMCBN3hVa1UEuy",
  "key39": "4UfRNSn69MRvtUCPRbpwhMyeLvLWiJFgiWRH2xbumJFRuaCmBPuhRaVJUiwPaWt9Knvpz7nF6sRsewX11fKh2PUB",
  "key40": "5rghtGcGDn53dBbCc9RgWs3LCxyD7E73Zb4EFzhytMdzDtezPXxy88rsCXoH9ZQt8zKgMzm1gEuxwYNxPwLB6XF",
  "key41": "5HAefGWTnp1VEQRkoTyKprPyEn8efbo1jeCFK7ZXNMVk1f3Wd6RAZTqTEKnA6oECg1b2BUKf7396hTqNYPGZzksX",
  "key42": "3QzUpMM8grnkD9VEpwyNo4ki3L65oAXMZeTzKZbsZHXxXi9d6CC6Z8iRuHP9eAhXuqS52Ahzf23i1rCJpVYnGjEy",
  "key43": "5aeKxbeHQuoSP55hxBgKCtvCxMykuBcKJcUWkTscSrJw1URA6hWi8JneVChK62UWRZY4gHP1dae6hjwZVpFGaMbS",
  "key44": "hbjJdZLnZRCsPXd4NGx8jY6PAmshTsBmUS872Tk69HWpPaWJ98LGaPmJr4eAGFTeeLaKHywsxGmDkLW5K766t1M"
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
