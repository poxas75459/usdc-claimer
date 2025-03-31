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
    "66sSsXLb4JJVJjURpMsU7F34MPjqRBhm4ESms94tc1hdCxHEoWHoJnWbqEtdzabupFKUf2Pbv7uoxAfNA5f65LfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KjXKGUUFwHfQutUoiwTu21YMWEMxxiVUANXT1KWfhggJycr3AVpVLfR4XF2RkpwMBo1JuEsfWsrTCsBd16cWFLX",
  "key1": "47rZ6UjNE7wjtuBQtK2EbxnKg5vs7Y5KkFbAAfXdcNtNRkKi5UBMpUBvjksDSsXpbw1F3QWVe3Pk4APaxMnEy5vj",
  "key2": "rU4qxYor6zEw21snqXxtWK9c5AqTH9Stm4ocmL8aYRraJ3ypcBjL6mAD2YknFh6TergkMF7kcfaKFPcRyYvvMAk",
  "key3": "3618jqSoNQste8qGULFZtbeyT7HnBSkt1ocZVFwbc3tmTJoANs3B8vWMZHEp9SoKKxCK3dEFqgWf7XTj3S8Ns8sp",
  "key4": "hmcHe45oxKHYDtA8RENWbcVLbGvxPj6KcCRBiQinucEpp5nJzsYH5a3JZKixNA8Jx9YCAgDpk5ZaapmjtLuFtaZ",
  "key5": "2jKgAwTXE4aYwEm8UiE4BonMheLEVxjEnmSRzo819AxtF7MqYf8qdQSAe5DZeKGm3ua5bB7xUiRMQv51XPKXhe8S",
  "key6": "3THwGmfnPzCuMi7rKDpmjhx6yqnH7U2ghRDfssUo9ZoGQMxiQzQNqaASdGHSjfQ5W4E3ZJwGWofLXpeYxBrTzash",
  "key7": "2FGWLBMAEXSLVyqkUcqRNe9GjmAAZqiKUzWQNb6DRziSAtoeM9d1TVX3zoFYe8uAULD4vpcN64YNvoheHG2SNxMe",
  "key8": "49McFS4Z8mpGAjCRxXq3fcQjBQr8BSnFEv5ALd78MnD3HruJup2wcM1XhaVTveDTXwWHo8Vc7NhrBYgf5fUB7YtE",
  "key9": "39Dvzd18xmWAmGDPQfdBNC6PjmQepCUsnUpRMnZFzk5XvmPCX7Lk2vxcVUVtQrXWCpyaA3VKP29BUTp4wHH9szNH",
  "key10": "4fyeqSdkYTdfJALDnaUcLL62BagYcJWnNaBnawSrCdGU6mrnTAUcspK35ERkcNVuLx4tFX3wgZBkmvSo6TKXdW9U",
  "key11": "37ZKR5CTYcTCckxbrkK8a956irk1hxhkZchVmcCgHa1eCekyfFLgRaH5WYb5BAegzf2Vttf71P5XNxtTJ4BLM3Ek",
  "key12": "43mce8SVstwqvELnrzVTsB6TpymajFPbA4F9KCKXMHyVmxBg3D5awxYwNdXvcNxpNeZSodvNG3iR397e7CkWtFaF",
  "key13": "4pFbJfFSthi2TGJ4XB3wXLLREzGxkzEzwW9HzCS3KC1ewQMwfyZWnEhsxyCT2tUuweT14iahauj8785kgnAYdbfN",
  "key14": "1bRQJSqp71aZC9FiDTJCz3HRaYbWpW3X4msgN6vDyGX78uCqNX94w38dBHXnmXS5ii2MyLK1H5ucTTPvrZp6XKd",
  "key15": "4B6jS7e7HkWDSsD4gBUJ9A4h1pXt5wwonN4UF7ViUiJ43KaBR664Gp5QzyGvN2ch748uq9BbG4iCN7s3a7gM26aq",
  "key16": "24WVKscoQxHJ9rBmbydpnjCwyxe5KvyZi8kCLELEuoLPFw1rhonNZCJ5A46W4J5hMBzAcvAz9ECdX836BBtmCFq3",
  "key17": "2h6MW2Pxnsac3JBQuH8oirvmk3tLyUJViDNtxmLqjBXgf5SfgzE3vtX72fsMgqJAS7KieJ1ASRbSnXK4ciJiWTFW",
  "key18": "5ezcyrMkn89MXXaDq4CJfKXDS2xYYQ5MRaTdRYr7hrjmjHw7hpt1dxUN6AZ1qhqgrEP6DAtVpeJqTg6JWvKXsYwW",
  "key19": "4KUAAFhMc3YgCXHR1SF62SRjpYX9PcXnCG5zSe6hKb8Awidm1fexqYML7rV75SrBS9yThCtLfhosGyBpDFdtKpTf",
  "key20": "3x6wtr7os6V6dXcPo8fpGDxk5SkVponEbNRFo395pubjMEyz6F9SMXNXaFtZkQLS2XaN9W2yvQF75RaBRos1ij5f",
  "key21": "65LZhXcm2svXGt93w8KsLNqU1Cz9a6mxwWxJzGbwKRwTDAhiyt2zpHgwTXpAh8m2yMChSMEe6ui9Vjdnh4kmY67L",
  "key22": "4MgYHVBLUBKWDEf98Mzr9wVbuVmcLZmZfyPJDAYWyhvbQ7bXpwW8bCa3bQwFRPW8RB1SpSTYVZ2tCLeuvK6JFCh7",
  "key23": "2FMYW8zBeNN94bWnPwS2ioeviLtNLkfpfRStQEKUT74QCGPteuQGU2ACEnGkQxqzBLnjsQoJUTy1wj91iic3tLjb",
  "key24": "X5UCQg74jeZiocYDes3qhTJpW7MVJAtfDSybKQEre6eCc38Wqv5q2jqCbfumGTi6VeEQ1Y2ewjqcvU2RzqewB4J",
  "key25": "59ow8uwkFJi1Y8gRjd64BwkcXVYYymykfwQHH5iH9a8L68Y3rie5XSCianBQk8ndxXyBVhpbQgoCJyqixL1q4m9w",
  "key26": "4qzMqxjasaeGCbG9yjjgNJcUfP6ivKLtF32wPXzXj23MNcNDbcTDM7YxCtGVjZT5xysAa1AUSCHTVdtyfZAqoZ8n",
  "key27": "5U5j9dR7rPtbBb3sZDessU1pMrqCHGp78YsGTNkv7FoUUMDbeAPKuwLZkyvQ8uqzDVmNFxJnxTW1DyaKVkxLeU34",
  "key28": "4rYDzzwR2zCwCG5MVvK2aDHLK5cFcpzJ3UZXrRbazk2Tug3xUbBfTxNV92FMFo6XZ5qBs1QSzYRTvMLpyf18MUEk",
  "key29": "3DkckhMSphYQXiM8YLyTmpKh8FdxQ5Hz5D8hqpxqR2Dtu8DrkptnzmdECsxmzr6nc8MpoEbsu5JimnCP7ESjFNqc",
  "key30": "22erDwktFP7JdYk3vmKKFv6af2HMEcmg1Gy4sKw82tnBSQeFACVdjVPxTEn23xP5xB4MSTrLrMy9Sm5SUxqiBou7",
  "key31": "5g6gsvBWChP5WbthL4RiTbXE1725kwGbRq7QbouRBh1iV5SCfyVZsCudAjgb94jYPDKyPXk2dCN179y55TCAzoMw",
  "key32": "2WiyWxWs6ugqZNADFuHT3QxLogNw4RpU7cpe8gxfcLqxChvHv64cpA5fB5j4QxTRDXqXUaS562vjZ4fPZBqNSZ6",
  "key33": "QDbxCrYDqQR9Wy7gs9XvMPBsgvHs4E9YATVW69DYcMHpXVmN81ZmCcQkaPyPtjrxo4szWBkzvoFiSRwndL6cwTx",
  "key34": "fM74KbBCDqDXkEp1AukgeGxqpHRuRbJGzUEFRoL8C2CExcW8bQifMjD2xkZPmM9oKVrR8ZQmJn5SMU6mDkWLkEs",
  "key35": "bNzK5j5dENXC4xsPDQ7yL6GJYeYK5EtnFMwgheLjDs8Haj6iJiqCyRpfK7HEwLtY2vNKMUbw9z9H7osp3JQBbnd",
  "key36": "2UyuzkJGx1fhp4RDacXfzYi4Qu91YkNUWbGtAmPsGnJkJyrru2xutUxTLsgkUHs1YqCDq2Rc4Cu3ukpfUo3pi3GY",
  "key37": "48v3sZyuTStzivT8kSZHXhB2DAp4Huz17v1NYKZyAEbc8AdeXLK9YT7c58QAm9uGNdvQeRYbibfmUUYU6dsQuURB",
  "key38": "46nyD2BfoYFHwpxzS62G7prLwVwwpWoP37jd1n1ipKqWyyDosFVyiNn2Crb7YKH3AUhWhyRzoMTLr8RcKvh1yxEu",
  "key39": "65LosUCAgFS5SUzawgL9LNhwYnBgSUwRaBZJbgjwrqt7wbRD3wB1N2qsoV7C6r5MBiJqBV1P96q5J2aJtx6pfaNw",
  "key40": "5YtpjB2ZBxdrBgqzq3ALqcrfyNeQhcHX5pKPuU2n1e7FaSAPsZ9kFXd32GvXo7mE8zSX8gqPtSiKH4AGSRJnhKaZ",
  "key41": "3GKQiwYUktnRq84bc36yDvVcLLxeeLcGBxSMYisz7Cjaevpn434ghcjDFzpngoAy9ma1q2S7XEsVsoEQe1dxHkPj",
  "key42": "2KAW6dt7bzbqqxbvGg4jtHawMDpYueyJrhaMjprBXSr4bBDTYtbhJihHXfZe4hUibme2FAK8bir5QDhKCvzAcLEz",
  "key43": "5rUJa9rBJUpEXRtDpy8HqssFB4ZenDLVnUWxAcJVUtJUu79Jso4u3qt4dPtsz7joL4PZpq1MRaezFAtQuTwi9Jag",
  "key44": "5cDCiYzkuJdf9qN1DTwBLjSirXCNR3bk6Mp3fUCJ5vNAiNMBpcMSFacdGWapfexBpLaNfGjyMcuabXYHjeuRC1CD"
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
