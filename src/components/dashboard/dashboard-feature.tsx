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
    "2knYkQoeUfL5DJVrkfJAyTFBqMTFB6Ri8Gmmi21Y9fdytw7VUPEnERWTAfvLrbVKbpuuwTe5xvo1dbXQMDnenZB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m3xVqfA3ZZiotp6kU283DsauahwNJdQbZr5Qk77A6BwHvLJbX8qJPtGxavPRyad55t6qRkURzDNchBL4Y2Sh784",
  "key1": "4Vvh65Q8EsEPxqEZDHiJzNWkY4aMiHpxSCC23dSzPT7qyB6PWvo7LLnyCYmd3e4ADXMVYvJjWeLjpRcYeiSLR3bx",
  "key2": "3WSX3DiWTJ9AyNyeV9bbWjm74WsijZLERZiHVggotJaWjFw5ozTeNqjPssEFyrF2sBSyXk6D45CCJQeneCvmoVU4",
  "key3": "tepn6YMFWuGVz7czPkZ6jN3QaNpeiHD8zaTzuTnv7Ho4yknVYRunQS6ZA4jV2VXhsGZWRf1xrA4QPDfzvPtTqAA",
  "key4": "643UDSCyJCuYUSvis3fYVPEQRUQR2RLKPum5jDiWVvXtMeMePn4jfirpqjDfVHERDbXEbMUVasj9FKiCSLnQTULV",
  "key5": "55vcN9QtvipokXbkXgLrjitN8tSDFprfqZwt4ripdwcDWSK5BvsAZxmhfBGhHEsQ9iM9H3cfcfaXUvX9ExxCTn7x",
  "key6": "2ioxxrYJ5fi1KytnfDUJmKf7ZUaHpvXAL5T7Qpo1SVaxwKuU7EcwZfcVwMt5cn287WuDMDaWFw5xYpdVsYAXD4X",
  "key7": "2KHmf5nqYoTp7CsyqB6mNPKHhqHpgtXVdFr4tT55xRfhkSSuR1mdfTd7wnKKjVh22T86chfRSSbbufFf4w5tHhxV",
  "key8": "2L17LhWgBmEsNTfUgTKjgzq6XqHKmi5FFYriaEupbjwLunsuCrmot54Fohe5ebr21tPTHfq7NyhE7bpiZQCqR7TD",
  "key9": "5M3dnCzUKN281XqLwieUSRTyZckaAgcUgVfMZoyj8znhcY4Ttk51U94Wx376PiRve7USWQPFkPqPxZgadcMZRUYV",
  "key10": "3cxXcRLy6mT1PQgNn9gbSKNSDPferRwfQwPx5eCQGj62CxRmT7DG52YibQumtTUhhubqi8NXXsWS5ncFmE3f581n",
  "key11": "278FnM4FqThLUwebKdReoaTGuL3JswwDarA7R89MmfH8jnwEkBTVHNRCFhCfCE15h5QanAKsgUHKa6rcRU6TE2U1",
  "key12": "SfuV5aqFsZpH9p1gKjFinTuScgTK5a5yJHvAa9yLmyYPkvYJhTnBniarzg3e8VfhSzp4bDeYEHCoYA6PtTbEy98",
  "key13": "2YDRvYsGg7GcjHguWSdDdTnDLRd5qrMXum91EL8JRu5MfHCEQzBxKCdfAUgL5A5YLLpCGV2s1KLfebVioJov51n1",
  "key14": "28MMf68DnEBS2nFoxm57qYRqyKbxq7Z6HCABAAZjDsZ1AinwMByQfs2XNEtSUNnKw6d2qkHnges8fUT3S814bHxY",
  "key15": "eMizQJMqg2TVoouEpG8CT6RMAqgo2L4oTBbUGeRJhqc8xSRWAohVnFdHns11FH16LF37AyoQiv3bpKrvoJ8FLEg",
  "key16": "5HKCWotKe6xbzCuzKmh8wms9orKXYmAwkXJ7GjtTxVcNvFPpfFoBuf2wAdVnaJA4bULLtbgmcGdy3nExJedMKZUG",
  "key17": "3PbdJaXwq3zuD9kb8grNP9zsoqzG79ujec158uhNhmh7c3Nbp82cfsmjjGSBhYJCn53jD9FGAh75JWJnsPVhedH9",
  "key18": "gMEVids2MBxQWKTYp4FHR4h3fEuCpicheJuAM7uHbnYGCjVg6rUTJaZJsfuPJab47qWeUfy91QvZiK9cHeHdcTb",
  "key19": "617RgBKjDAqittZ4pD9k9W4tABoFJnpg8pkokwziRMihHy1EEFC3gbTjj4xR1QgmFDFthncUrQCKHZ9ASa1jHwwN",
  "key20": "DwdnYHthFHjbitKKKWSEAgRHTejFRLqwTKAvANNvs4jAjzu6hkuw4BXuxeQsfD5t8f4nwJ7XRybhkNF9DiVJZMB",
  "key21": "3nLJNwrB29iiVnECMyU6WRz9yyF39YGP8cNPpK5QgisoEeRPU1jEuVJT8GVo5QTUa2TTdqiEJZLrFSY5VrB3RjhD",
  "key22": "2Wd5WY1qCCmheZhPuNFHS5cy8gWKSAUZk64iQYTNQaT7qs1x4GhCnFWBFLi9DPMBNtjKPwUJajNNRr9BUBdyDNMi",
  "key23": "Y6U8YB4qD8jU5uPakhzwYGi5XLMvU67YDkYUV5hxYSWwAheqMQt4TJBXxTpgx6AP7TFYaiRF9NMi1VDSS8eEAqv",
  "key24": "5gp9VEmHuK2YqMPnEBjR9RPEhM2bAF2dni2rGLcaVqLixLg4FGgt9mPgx6JuSJUSLiUTk3fyx4WHhvsWNUmBKSz8",
  "key25": "5sGefUmcEDxBb5NtHgGYrb3q4fvdpqwTeFafuPBYA6EoKpgkzdDgUuUaJ2fhxXd4PnTP8fEKq2qKPDaWijGV5uQt",
  "key26": "5HsYt8aAfsYyeKcxVSrxJHUqHUE3yzq76ZKHtqBDmSj3AYHgyCTvcq1uFBzGPDUF8GKKg2JiUGWoimmpA4jAh3L8",
  "key27": "NBrrxmeUVbasTcpqHVXhqsHbp4UyU1KiEtnDB33tue3N6xkLW4jxnLp6dYwJyH9kwCxBpSihoPhkHroY1XGmtTH",
  "key28": "124xQMELqsXh74oKyqRWDYUoKNf2XpppQbhwQVYWuWRKF3ghveWqXqdBTK78WNn32hAZ43a2DDrqRCqUTtUo9eKU",
  "key29": "mthxWHqcZ5LyU7bmbZKo6N5p8cRYgbo4i7WExqTcWaZK7Un3YugtWVzamXad4rZskAVFBQ9J6hYGVwz7oFrsqos",
  "key30": "4uPepSuRUkMCxjLZVNWSXbhuDQG9tQD8mGk6UYfEWvNYPvxVA9GAzvW6kufvZELWQwwYX7oJ5XVJe8PfZ6H28TH1",
  "key31": "wxqLpx23KYFRuPydGwMM6viZfzSvzpUxX8BNfGp21zxESqh11mxGsAYBkyehkQXQMphmVsyu5sEGvnSRwAyKzXA",
  "key32": "43aQysNirVwYTdcg3dSRHtjj4qwKRprJLFZPfaY74qNbMef1Q3eUP2iTtJZpkU5dNazBvmpZrWdpwcc91FxAM1hA",
  "key33": "XtBbPTDuvaFSrHMwGL6JWk6SqnT1JiZ2yxB8fCNiv9PqCq7DG57zvjqzc3WbLX6Xmnp27tY68VYEYoxA8ZaVVRd",
  "key34": "4oqBk8kCKrBvDbe8ReosCNACYG2PWu6eQa5MkoKrqghxPgtyiG1Xy5yiB3aN56hT4agmUaNNeYFV3o9WpPe5JGP7",
  "key35": "3faySerECwQL89jgzogFZwcNcMfyN4VWrkSfxyfctLRSgbUF1QUfLEuLB8CnLQ23qmSsaLeXPsUJSBgVQKJcK8Mn",
  "key36": "2J77rgNBctmn9xaVQvaZCN2akAqCrbWxSAxDP6T7bPzrkcC91bm58pU9CndgRJqZpJtANnrGBM94NGikQ1phU5iY",
  "key37": "4K2DcuCHxkgBA9TwpzzMQqANECsW67SyvpiG7NFL5hRCzSTukyYBjEE5F4vfyionGasAUeTxsjHuGWe1cksPMKpD",
  "key38": "2yHUkQuTcKsyjobdiKZEEk3pFEd6CJnYvhdcbHNdUXKfKT888ZBcuVYq1Ye35ohhe62osjWuFJwbezzsnHJnsT3V",
  "key39": "2q7j9RNbBVN4jH75dsgMVsSsGpJDdb9c3zQyutYcoTWY9aPy2yAyxVQt6NhuZb4zbVcz9Fo3CfoH7m2YpqSwzUro"
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
