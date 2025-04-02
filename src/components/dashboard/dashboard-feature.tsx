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
    "4uyX4JtwVAjzPd6rD4Uu5Z4RGQqeYSHuUXwapLWDx85deUhgpZvhhVfdK2LkTKCpzMW8sYPCgVpJ8huTFHQSZcjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Y5cw3yKirHWpjTBzQTVVZrdZBBwDj2EAH5VMKummkh9HfaYZg3skXsRUyhg4MxAJs6Qv8SispNMaWoRFLom7km",
  "key1": "3wPHaNZtFQqgVCxFEJ14iSzCbXbYVTyDCvauoMXpnN9rdZwetdHM4MyT8KVuN8A9Hg2n2u8E8nHKxGGgA93dPdEe",
  "key2": "24Vmb1j1P4hsCKM87NGGmAvFNNdHcbiGe6ZLHBsNJWH27SupkwRKeyGsGYCqjREodgDwb37QKSL3aDssMnvzdZrU",
  "key3": "32PP6Z3aKnUqniLNrCZRdPgpetBgesQNmYGP4FGPwMH1d6eMzzKf75bKyGu5sez3QGzeruG6bMKz9TgaWHbsjXnH",
  "key4": "WN4oQtpEtvgbHkqn524eyv1hVDVeosyFYDxn5KA8mkJoeT1mXH9t82BctfMABgwn8kvZPV2YpmQsvcyiyR2EHtM",
  "key5": "5a5yB3AuUiZrC4RnHJX8tJKe2BtpoFBLMDVgVsBj3fT5gfC27tXwzGcWP9z7JrFV7rjyTdzQDnUJE76EwSzcQEaS",
  "key6": "4as7jtiuHTCvxRNuwhBuCSBnDELGhSVWPym6X1yhygiFvPuTi384FJFnWH2Knup9GDLp9XE4ck5JACyXZWKhBDsc",
  "key7": "2PDwCBhc56qxkv9MjXufUB767nMiU2iMLPA66N57c3G42Lkm6a8hjMYHfZntTekqyrsUcfsSKnz4BhyfyYgXNPPh",
  "key8": "3NtBY6gqAdeB2vNLemjuJBeQQ3TT9zV2tAmYgDAoxj7WdsLzhioPHvr9Xqo1qq1Zmp66fmy3ApXoddnqtsDuNn2C",
  "key9": "3gzipofPeruLwS9JfqNU8h4FHYUjCjASHLi6HBkZozhwkXjgyxkseouJX8QL8ZcEEVVc9av5DVqmxRFCopEtVueE",
  "key10": "4CXU4aHqLczcLHuQaiSFZZu72pAgquvthuf3CSu9TYnxzkYgQrA6JQvKcedtf4JNkTrxqkJC2uokNY2rrAfQvmCV",
  "key11": "4n3BooPrw9o12MuRPJf7JNVcCsXS9mF1QJiGiCRQpNj8AWpvhfKQ13Ej8MxCgg1dZLFZbzJ6LB5HBegZb6jqsNsc",
  "key12": "5B6B68qBzCcXu3To3AoQ9spM3k2M7yabtpbijWZAiZoCmwjqiraZVNnfm8b1Ms1KjHmp84nDKopx6QPgcY3K5QzV",
  "key13": "55EBxUsz7V7eeG4scqeMrboMw9aZR1hZhXef3vBkMQ6uopDxm2CUkuTHxmTt19qDjQi1dvR5rBBVpG5ygKMeFpY3",
  "key14": "ph4ATtiHzYs3XqzZ3bD7c4tm6KnB9Ljqs72v5hSKZ5Rg68k3PLKkjE1LbXzXwYnFq9GegC6QFRkSUTg996pijmG",
  "key15": "41T4pmX92Xr22okrD8kb96e2BVkn5sSk1RAjgD3zPsnYLfmGkpo1CyDYdLS8BeeHDJnCxf6zxVABzub5w813sdNa",
  "key16": "5ZaYecKoLFLEVUqX9kscM17euEPZK8apmY7s8qymofiP7ZrGqjNbMP3qEuFyMaBM5XaXdxKbzq7pBneBYJMD41a6",
  "key17": "57ida1CTPVfowVD3RyfmeU5rSCjjLuRdosctRHKgYFTL5jEXVwSjbN1HDVZKC6evStDNynSoVahAjF7HoxirxUP1",
  "key18": "5ptRoBmsLNj9eonPi9vcuTUx5dybRf1XFiS7Kr17kXRYUyU7dG3Ym6oVftne9RRFhQnKq2TCcm3mKrHa9rCe3yKd",
  "key19": "5KKrDrPFNNTqnps3TzZ8bh63PezNkT437zut8aPT54gMdG2q6w2sZW7G5KGGGy3eaiVHaiKrmh2xTtJq8FvDQFq4",
  "key20": "zJNpWRng5YpKFuLQVbfPqeb6i5EMtTdwuBifttVAWSBQExc6xsiJR8sdjxMVZu6P3iVUDocXF6C1ANHFcNcL4jm",
  "key21": "2ipTyumcQ3Sf6GVnbMRFHWD3TqfVNqR8xbYtfHCfJYft1uygnXi1Akw1wYBxLuqCgXjg2FG1Mm4cEfJMckZMXMbp",
  "key22": "4i2oDvMwqDbHxVQ9CWrVGQBxq4WpjPcHHMMbKThuCBSR5rHEZ5MKBWLJy5QssYKFQ164aEeSXAEBN3haVHZCGWBK",
  "key23": "ccEehaqaWSfpDCEZMKbKqPhKczbxoga785Fn2YAn46XGP6RH56dzBYbSfw8wMujUDffxX5vbKwfBPvLLLgBED8j",
  "key24": "4mQHr28iCGbRKqnydkdzfRXqSnkNZXmVUb1imrnbkdeG8hoYo5Ft45Y6SAMFfLAghw9K3zPhHniCbjmzgkFgSAAt",
  "key25": "LNqdowQXFEKFgy3ZgcXhgqeBRvoYgW4QVt54KaERHbKw1PrnxnkE7Go2XmYsotwfLVCihbhuGvH6F58xm7Zj3tL",
  "key26": "5EpVRERoc47g81XZqtz1oCqmMjfb5kfigF6hUbkjdoQzv9epJjusrZzRwso8Zdmmcnj6D5FhMakX6fUW23syV1V",
  "key27": "3pvNnoHCqrE1QVkxeD2FDbef2D25WdZ5w8E1DAT4iTEFgjZN9rnTs7y5u7Gx8tZfgW4yzR3hkByPZaWqyJdj9aJe",
  "key28": "3L74QxBjHVdsFsYeD62XUaoRnWP2rN7tfSmRa2HBZAgNmqZCNqEJ7KGPxzRJi872iY8u48qjvKUVo3RTU2whnRbk",
  "key29": "wuKgb4r6RvVBbeK1q2s1KUgSHXXfT2DyfdxJUh84eG7Lxps6f2rooo7hL6CFYH3W6TmBrYWTqkENimdmh8HJDWZ",
  "key30": "dnd2F2nJiE92g5L6DTAXCLBA4FT2sy5xKYo31wuGiDEjh9MVWaMe7G6FiDNtxBSzuQDX9vWpQDpeLgE5BXB8yD7",
  "key31": "424xGRMGHcF3Au2BUvvnRkNqN99QqDFXAdLwuFe9xUy4WUkq4mcjDbE3Vo2fhoWWzfiuotR9kh6pwr1NwYgoW7DV",
  "key32": "4b99L6Dc7xN6Nei9kwvPE9LBj2xgPpdu9PMEP5DCDwekbpYS1uuWAN4KcXBTWPoKGWNvbmw6wfUsJWC8QYb7VgpX",
  "key33": "rr4cBdDFfE2eqt1UJWFqm3rFy8vzHa8CBUdB9Hah59bqtGcWG9EXtG33RUbJ5HpBMeVEh5vFksVzrugqPybmSPD",
  "key34": "4hoZ6d2X4AgHAGNmjTb4b9gLTmsZaeAysU8zESEFWg8moSDN9MNy7eBHmaBsmBkZ1NoFU6cPzBzf2wLEcVNtGGUb",
  "key35": "3fDEwqYQG3rvBghM8d4Bgqu3tAhfTHguvprm5hVkDn7F1NYeMYfmtNvTVhZGz1Fb7DBmmRLLDkz7UjWahWR9uSuX",
  "key36": "3C5su2L8iH3VWGm2R5Sfx5xprtAK1Pm4YvhUQ1wCTYUzCn8nB6qNmq2T1xCeWNMM99LxvhcTGXagyPUYNT97L8Kn",
  "key37": "5VdfYxxNUFtAeNLFAW833oSndPnhASAYhLjU7c6vaJkYjsX6JMzReFabPktNqAieYH3wodQi2zh9fRLhy6FKJiYg"
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
