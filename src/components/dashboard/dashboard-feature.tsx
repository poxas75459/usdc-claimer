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
    "3xz8uRX91kLJrrxNqpU851FgWJ7kFHTWmF8VmnaTtN3gMVhLDF1zo74aJ8BVVZ8U29YrY44cyQEj7eeBXPVDM4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q4DCvNhr2i2y7SAeZZwAE8ZdrJCBi5Dv6oRxSmGjrBFtH7KERvaJmN3VwYRkFmvC9thbkT6HJak7ST7xeAYRBsY",
  "key1": "6qLKhdrjxX4v9JLnqsDiLBdo4ohHpF65T7F8P98QbeMh5Xtk6fpat52BYR7HhVdJQ5NuiGLnhgz7EbMWxXVzzB2",
  "key2": "3XWrVmE8V85qbsZDq1brX9bpaPewmTPhXoNYvoFcFzyFzXNij5qFMGbz6gxShj5L9Uuj6v8Y21gsx5Z4FmB24VKL",
  "key3": "5RFzp2WgYqkswTCpPg7tNZs3d7kve779wWEjWvjGQ6xc2YfAiURcaRgAKttchfqzDNUSo4NV8osPhzYC27seviMU",
  "key4": "AtHjfTAKrXCDJZYZPmjJGg9k8wG8ck51izPabFK7uFod7wrXxXBZBQzD2CEc6MfLwHaagd1GovdzQXM3594x4dX",
  "key5": "3xw5ALAaYH2U4Yxr9ijdmFqyZJfHf8UQc3ubxtj2jtcwsKUzHg8hwyjFH445fA2AMkNfTAko4Rk8kfag756u9o8b",
  "key6": "5AEdcG9Qg7fgjvyZBDGWQGUvdBTix9Vw3MP1A4Y1g8xCQjbu9FRTun25bxHiS2m2ineYRVXGvCS1a3ZpCDfSm8ku",
  "key7": "s7rGy9UCbzjGL7MLTfRPG2itPqUdkdQQWK2HKW1Rbfe9S1AVRsL5TYzF5J2NkY4cL76xGU8FpmVApBRpgenkkdi",
  "key8": "4aEHTFCzJwX4oejm7fasmSRMj72tTiKNzJxDm1vQR81svmuqeRXB7dXfyNoF5BbDKYm8GJ43FTgVgq76xB4dChvu",
  "key9": "crQpYtGxVei5yPmUnqDy7VHCGh6DFdXrS1Rcp8VV7aUZ1twppnrv4uoxcHiEEgNR3Gi6FgiZACMqrMSe37DgwwV",
  "key10": "2jayrtdM7Uw4tULnRTaHYjfkKpeh4VPpeYujbpUzZhqkTbScQciUcVMHLkPGDram9goWZLaFraWQqsPiPV1NMHD1",
  "key11": "2WTJx4EvcNFCAahHTyfmxCyfGNzyR3P7vP7rPE2PoKnXLnaZMn8UrtVDeTuyVkNWL6waeWo9yueQkS6iWqD9oSHH",
  "key12": "5vWiQSKCTLNuwSquqctobav63HvGsnAzw9TBWuVFS991C4nZ3YaNsGRhY2T6abB4sv4mC7nJCmpTcEhJC6QzsTnf",
  "key13": "4yFfkA3FCDqsYZnZuF6QFSarcSq2EkcvrM54iYbexDDtkHwfcRvgW5t1cgr1KBpJd9FARdVW1YjhmHeVpBzL3u6N",
  "key14": "5yts396q5ykYS247HgFQV5ZK3rb9p9D5Cfc1WspnVxxA9bFFUaKUK9b8LXRsC1AAzsvUAD5qQXZ6QmU5yXJJ3ZSs",
  "key15": "23wPrL6BzV52mGyLsrenKqENkUuu5dRRqVqANQrpEzxt3168Ttr6tNeeZVJNCpqFfZ7m1FRp7XtJzAvBjm4dcmeN",
  "key16": "R4jd6WxMDwEXXo5WWdX5838zbs2xwraoRrnj2M7HHGra4f5ZLqWN8R3jgMV62VzAJ3UT9v7UJ6PEpugrFd5bNWS",
  "key17": "4FE2vjEwaeN4cTXxUadBfXrFQNfXcRWoQ144TsW8PduiQdCBW3AeWWHDkqio1JgNU6XvhUb86gVMLmaquz3iaHQH",
  "key18": "3enPoGPKGXKhQhLc5KjhEgpqeriwpVS1hr27iMi118LoaQ4qSfcP3LmUyjpmnE73YNqidLb6AC6v3kNyXZVbQBpB",
  "key19": "5V6PHiTey11PunDHGjmYbzXHgWKxVGGcoaf3XEzTGD7TbC4VxgmG1M58efWQ6PeEpz79PkUwwiNG6W2apMXxkswK",
  "key20": "49HfJtEPqXVMFeLY8wFWGDMtXYfHtFs3h2bkG63Knjg56wNNxxPLW8iyC2hK2n86ZACmXE2TmQHyYRUAvrJL1XiF",
  "key21": "2vJmPLqZcJC9TAx7hm3ygije8sGhHgScQqruo5YskgEuSVGctgEYY5JC5AWYzxt77rScSTyjgxR3etf4puWwrix",
  "key22": "ntddV1HNmu7P3E2C9vBBEnRBwbgbuKvXzbCfETVeM6nk34SZhGVKvr623tda3ehCy8C823RKHWyRTBveB6hJwtq",
  "key23": "2KBVSxLe5Rp8N6EpxuQ3NUNL7HmA14D6Jr4Lk2Cg8BjbwDQtdFmATyVyXa6gu84Z5NKFbyCcAkon4AqBvnw6pAqg",
  "key24": "64BxvGLefU7YEiUgGorvctX8mWS1g7gd5APFWo8vLX3pg85M71419965CsTRrWWa2Zdn9D9Tk6uSfriQNXMd9vga",
  "key25": "HF39ziXh7b1nP3mJE9CCr1uhf3qRJ7UV3UFy7VJ94rwvuhbMFep9HLtBsPA5YwYDmsuys5vZgZnCn8FPRuEkbJU",
  "key26": "23t3Lmirem6zY4NgPjvN8UB6qAfmNLiw1fCVtzkmLX4w3d94HGJWpgQsyvPqovMSKcBDVqNBL551813fc7xtwkEF",
  "key27": "2ftB3oRu7v7LP1hXHTrrxphGSJwuJpWia8HeHbsywn6DZvXhHQhGDUYqrALivJP2NF3MkGQddBCa5UUXM4PAEtCj",
  "key28": "5JjwMfWz5bA9moca5BWfW1XAgL65V3BrWkpHCYW8LexmXkH5bZEnGKVag7bPf2eFW6EN6Zjx5HhZgxqqqtYpQrS7",
  "key29": "5bNFP5GDGWGmjqz2mNfV65tFN22RFGBiYhhdDbtoGt3F68NAdgPtcWWvdJbtrgE2e5BQgPD8Rj45kdrUdx9gQ9qV",
  "key30": "4AukzQHJa3EjV6mLHYnvdNEBi9EgmKnbJ7ddYMZnxsz91uJJPv5W5RAa9DabhraNHViDowCxdcR6yT5NhKnXvvLQ",
  "key31": "vrQuQvXFbmBakojv8XrTgQv8ZuECgYrGyDnX4ms62aThFdtwA6zBpN58FxCDyNR9uiPypQGpgjKu4gueNX9VPCB",
  "key32": "2b51tkfwc3g4wSWf4KoD5FCDXhdBATsbZ2VEGPr3g5uQnwtSWh2Lcfh7uJ86N8w7gD9ZXhXFpZkvEyKTVaRd6e9k",
  "key33": "4LVzC3CbCPvFiGroUPuen9fhQ5qQYNRF5ux5KWTaYnzk14gRp3yspLBpvR2K8f2dxZ326Wi1dY4jWGVphzMPaUYk",
  "key34": "4tvELmHmhTR4Q4Kty9hp81w7qnBxFQ6o1iBMpG8A2oiuxAZtKZ7ZaKLYpXCE6guSkSL8rqCkyRgKEhSWr4ndz1LB",
  "key35": "9G22NCogef8scPii6CrbjyxMYbm3W8r2M7LZmPTS7v1wSqPVZHQ9y9RsswbGfPxUj16wZDHGFVjZDaL62nRjaHB",
  "key36": "2Kvp1sQ1L3LZYSCABtNk1fcTxWabZoay1tNQRZVp9jQr32F5fpyqpFtdqTqj6KuoTbtPwSXz1z6Gqsw4AzYLRoV5",
  "key37": "2DST1r42jDPB5S54q8kNRfLjRPZ7qZGcSmaGA8DFXXaTQDs3EcUom8Fb3KRYgSJh9ivxkw7gejDD5bX1eYRN9LeZ",
  "key38": "5WbYGTJpHQngnC4GQa6CbgCnuKyBCTsXsxGiKbRktth3QUqAB7nfFukwTuKeE4sbXrSNMtfH87nfeMdcJBCk4Rua",
  "key39": "3QYsznj24urdGB8uk53kKsU3xGEZKE3qbL6GbmSgNmroZAiNpSkaD2LTt4sf8nRNV53wRS45DZ9azYAHZ9aJsSJw",
  "key40": "46U1yXkGBkD4rqi5aFCaMBakRe69pz43oUP9cwpNY9wJBhF8nGkSdUxHVgeVnUJdZfLdxeosFbRt6oGEXoG2ktTy",
  "key41": "4dY8PqTrHKuSXbxiAJKSrAHtCzKVJhyGjK6k7gsgacnex589NjxBhPNwMErj9biRXfa3M4f8RKm4Jxpv1DweD7iQ",
  "key42": "r74ooc6LbdWP27RZMK8jSEN1bkfZijgMwqrTwDC7LYbeb4s2XxGc4cPh6tAuhJHmAk2sb2gnisKDMySVWBTWH99",
  "key43": "4zjs4viEmpYimZbTgcbYTDWebmEL8u9e1RKBvEGTv9u2FemNrviriVG4FxUPXt7ekAPdTQofpi14yJXUHKyUSg1h",
  "key44": "5HXaFAyqEqRapbrhKUQuqdQcccw6J7siTyTnpitcsExCfgXS6T9WJUHetsgaQ7pr8QRsnEFqQChdro7WuowHkQLq",
  "key45": "tcypFf3KowA1evmfGJRkmwoEH9hWCdnR7ygcSNBbXgcUwF4RU5wGjHZX9U7jZLcRVycg6798Psjp8AJjyLPKrYG",
  "key46": "MZXccWHBN4pWnvd56riMkRPnAehh9ZMmSUnAVtrkFqY5JLt6hNWHMJwUtqrZ3zVaMcBqHtC18HBaSrQUuWvdW22"
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
