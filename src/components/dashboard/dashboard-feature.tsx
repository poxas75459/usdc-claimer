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
    "5Zoky4k2VRF243hca21Ac4EkJZh2j8TNkG5w1M69i6EkSBC2T8h2GTy79ZZHFqkr1aLNYU2H5VfyXEA4dZrnvmM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XroFKym4HdmNK5w3sDvRzmzuAQb7tcFqgGH92GDr6YP1C9iSgFbJraF7Z7aV8sxdYab9bb96KuQLcPpGPf1zCZx",
  "key1": "5CYFcARPQeaFTn2BpAzCGdQPnZKMFMVG4FaRy5nbW7dhCaoGGjmRJ8cHq8zxKsWamwHm89m2yvogjy9qywgK1Jzn",
  "key2": "46JcHrEKYjqfFH5WcKf1GCDsBgcA9amteHEqmJP8X8Hr8pzzLGSXGKbMyKPmeYZnnA2NtzqYTWCzFUB7dS1LScp5",
  "key3": "5QRz4Z9ehSDzJHfLK8kyNZKujqmw2CQDw9UeTXUvVmKJ6nvTxC7smYKaaqRhzBZ4aG55RfiBgNfrGFdtHjrALrmg",
  "key4": "4MNitKDqhaNe9pcX1gg3oxnGfREJkJj2uDEoAJ8LvZKQq4KgrQqDcDPinbqA6PgTV78cq9Lx836rZJS39YKrYWkw",
  "key5": "5idTy1VhSQ8MmaTfVjPfNW8awo3tPM5A43yD9s6gE32S2uydH9PSMnNMhFrAxHmfGXty6722YQbAFR5Jc36nCmfG",
  "key6": "4duTGzLXgCka1kRczLU8KE2ERUT8QWtHH6j182ffC4yK9DCGW95rUv48j2PNTxBoScVgPC1X26oKe4HfZ8BfcTTF",
  "key7": "3Tzk5xN3RYHSwZMJyQRqRaufWE8rPiHUXFVW23LMmsfgSHULmwzNZqnqQfccznEJ4Dbo2j2wm96hMGLNXyN2oq4H",
  "key8": "3b27A6rGXhNBAwQTWuH78U2sfFQUVvV9MxuyB7VB17bQQjvMtbUMungjiUa9yZibRnC7Rqp3yB8Hf8tDpDGow1Le",
  "key9": "48LvxVpg5acKxDvkad8jdLFGPBqdADZDHGKSx98UGEwobn63t8vMgWbDxkATB39CTveGW51cnStEE6CM1TsohWY3",
  "key10": "2H6hUKczmg7odxAVZZaAfdBq6XU55aGEv1TNQfJw7cYhH7Ywb9nLm5KXzshnYgMCTcz7qxoGha1Tq2Q5PNoZnfZP",
  "key11": "XEG5esAaLAu37sKRuHG6F8sRXj2AJL7UkBhZMzANsv9wdexdh1j2QYt9tXfaSbxnDu8YXTFy1LAym9mjrmEZpgN",
  "key12": "4Rdtnbw24NbNSKpWeLMpiVJjoyRU7RoGTwHcWFmLSKUhggAfhoXnhVyh6yDW449kqRB3WxGrkoU8zuedcCbiRTd8",
  "key13": "3tDfPKcgrMWAjTJHWmnGvXGcHU3Rir9KfL51ipCGsjwhu17Cge337UNHRAeSkbxKvFj3w82ejxTxiTX3fs1kD1wV",
  "key14": "4euYpRGdjmx57ENMTPYJCY7TfvZy4nR367U5Mzy2BUA9KAXruyeKKDkEt4JtxrccLi53EqGv1zpv4yKULFdQxDNt",
  "key15": "3US1tp2UF1YTPtso16twZeJK2Fkt9v2GhYctCTXvwnFYdtrUH52SSYk78MTq8sBpThr237yxvJxCh5FKMVtsKe9w",
  "key16": "4jk4tm8mRNHnP6yWqttvivQJZUWtqaTcnuZwyvp5j3qLSze83t7VHotWGW29SRdrdKjNSCXEZE5TjHSfCAexUxhi",
  "key17": "4Vi9LvpjEfU4qMCVLcwM72LUDAcF33duJE5c5TUfEVCTvzNXej1iy4V3iUkpfbujdjtUcCDzgvAc9C1T7nWTdy1P",
  "key18": "25CyQNW49gLoomxstcamohm6jVWoesAy256tgd3x3TdW6Z3mz2wftq1TvDs1kFqYA1pvJoVzF87kg8uxawNVjFWz",
  "key19": "2eFXYzQhAjeCMyJdxAh7mrrExaSrmwrkJs9XgWVZnFU8qkPPKKT41Jpz3foHKhsrDst5r8GhtgoiGPWgZfdCe1nH",
  "key20": "4CtGdmZXqEWQtyNv8VNg5EeLwxAtRdMmEzz3cXjvQu46GvBxgLpqgcDZYY2P7C8upzcaVY8qxC7BUxtDV6piJncZ",
  "key21": "wzwYPcZUtzHTDKDAEJra2xWJ5RL7Hutv4kH9yDmtCkdUGhsYkXCrkqj5XyHoXppB5p5aa28HQ7RPdp4cDjMR6sJ",
  "key22": "H1efg1RJwuRjYFBFPku6Eavg5UBBuUHE7HF41MaHTsDubJPkTSmfWGSCCrR9UXA1thPsKZcGCxdEwjdjaf1mE9d",
  "key23": "4is5W9x1aTkpv6L4WMorwNYx3nwGnhob9d6PtvpSDdN8Nsj9FKGoHRxM8nzFzsc35UhZRavRCP6ozvTkE6FACQ8x",
  "key24": "3jJWub5zaJpBoj8D5AdGLB8fzF5cBJYG15BzMU8FDMh6nyNa5HEbniryeoMH71K4jP2eM77AVnG91ikovfEZTtBi",
  "key25": "3Ci6fAZvcCusFB9d9UzZ9YUJ3MYPecAqVyGyWv8Ka5EsNaivedfS6uqM5z8ZnCZDu5F26a3kb1PmhAGc3fULvsqS",
  "key26": "4sadHrqT53AxTsBXyjdFnu2aLD6fm9PhJy6oHvtMxEMU4jGUi7o5YY23huoJYDdy4LK7rEz2p5pHZHA72pPtC7NQ",
  "key27": "ZWXhJCoxTxgmCc6NAuJJbCBnGtuMQQvTKqNv6Hc1Np15igxPdxxoLmVtbQ9ggw9kKwfC2Axh8pxZLtpG2k36nGU",
  "key28": "2dsWmdCNosvbp6SjEr5n2Fmn2EesZJviy5JiGiavsnm9r2yBsHpE62YPqdxGBxWNxUybTG3yPjdRsvCv5N4w99aB",
  "key29": "5HztXBGgsd9qyB3nTNnQ2sPxjPhhrQp5V7ZSYMXSTNM44UvsnNNpEX6PRgApDHTe42YkUeDVVEQGPNn3KdY2FiFF",
  "key30": "3SLHs7Dwf12u6z8XPfBQSEzqjZeknppAxVsj4yPU7LBGRATtaqg7C1BzkNREni2GRvwuhmEH9K1qyckbot7qibCX",
  "key31": "4uhU5yYB3zSFPLpuJqJeJUARjinhbs6HEny8YDSvCkRuaQzShMPopGAfSwzXXCvZMA6LYaqQFkyNfKrvU1NoscAM",
  "key32": "5AZMvEuQ9GubDVcoBB5a6DC6Scc48exrX16DWGPoCimDdR7qNmAMDXxJcQzBXz7rSqG3dT2Ux8oCptRAG5zSeouk"
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
