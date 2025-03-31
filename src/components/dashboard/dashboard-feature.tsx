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
    "4jLiWRwksx9pLzQt1D7oPrM3FuNeBx5sA1NiLnRX5H9dUjZnzz6MFhMwwM6aG7DW3K7TxWWnDvoAab3PxWsJ1AsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BHh9MJwzq6UNMLYiLBABdrHn9h1qFzgqF66psaxWMZyvbrse7NvBWVJZEuzFC7kGxDQ3cbnQY3MU4p1t1rsYK2b",
  "key1": "eZhSiEks12fvywJvTf9q8AGic8bp4ECPYe1LpVTuRKMwu7Uawhd8cS2ZRSnigVEru6qUJZuwJigpSnYHbLQmTzH",
  "key2": "4Ava85og3X7nyvTVfigoreajAP4SM5mf32pjXXSD6TXPsmYCLwxugdPqw4pXaooRobPHDSvRvAvCtJc6sX2rwq8q",
  "key3": "2v7W557dsE3kUaceAUYZzbCTmmeQXFsyXXHGDQh7H3DLp6KVbEywncKfHsdnZaiigwg2uThv7RUR2ScAhwavHqek",
  "key4": "2ypQ5uVc3yUfx2E3sbf3FRYNQgqjMMf9d3vtyqin2vQdHvQVsxcco8WA98vNgRUdBkMeKzcHameNAEbhKyytDLMT",
  "key5": "5cUmuFaLh6uwfQXZNNcZkJqDpuy6WkrN4J3VKiAD4sSWvKxQZ5a12Q7WVMuWXMEqdouob3WJ8pYfgDrGv4dMTMjS",
  "key6": "5qzwNDHQKsVEK5aJm2SepZUZGpRTHBcBZzYvBoHJvxCfL1LP9PWD6EEcSnsDKCdk9ZHmMkAvESseYhZNd7mcVrDx",
  "key7": "4yiixZh7HVxT9aiHQY3wLHuobzHjwCNTxnqAhHspDCho7gJWEq26GFrfX5ZJGQ5VyLLEwWfrB9k9rcrbBL5t2Q1Z",
  "key8": "3oButB4rLYzXBo4Wd2JzYxDjWt2BNqtwk8i78bbcLCvsBNVyKpo7Sn9WAZM5UJoa2dqPbm5t4TR6Eb72HWn2N1U7",
  "key9": "2JZ7xyTRWnp6eufcBuQAPqseq9mKpUgL82Hn7KYt38RLncw6HjTMgE5c9mB4VRCJdUk3VpiPFJzs9GXipmjj7PT3",
  "key10": "3HWgaqqtAm69ErGnibz52v8tTij2RU8uHSd9PR8dLQWtG3pCuVXkdVzdmxNnoVFavdpdFfzksnvk4J98nAqqCsZh",
  "key11": "2RSn3NkxPLgabDej93Wej3wwAewMti6Lc9mQiFYroCy9a71hAwtah5e5UVXCfkjQNEZBPgj1njhB8dnWyrDjt1yw",
  "key12": "2yNvg1rgconX3mN3vZ5CwfLCeVbCfo62E9YrtJZ7cmE8oCevB4qD8FxdMpcAxAqrbvJnAp7nhuAKPc3oe6xokqYj",
  "key13": "2RGC5w8dUtPktzgUk4sUv4AvcZhuiVuHqwQLb3H8gtT5C4LDo8JqkBTmPGPgbJA2rMfu2z74dL2Uv7KiXH29T5yQ",
  "key14": "4RWHpag3gJ8cGkLMSfiLnLwZVvAgi5J2D9LmU3KXt2b5QVoDMZSEWshg54cRHDP2HP6CLi61YDpS2g88vVSKxUNg",
  "key15": "KgLaimWP7Vtx72ZLcMSVRVB6LEY5FdBTUAZG1b8amgzbwBLpAXUieXY8BmWiPUdPhqnum3XCPdr922YerrBQzqi",
  "key16": "JhcKjGNsPNwgMYDXg9ufZmF2ibDfThW1JiJv8GVqnhwZRjnXbvvLzHSHPMJa8b2QeNCdePprUGBKEZWPmxU1iLj",
  "key17": "63zSzXxTcZYQT4Cw6XhafX3Pt38hp8NVRPfkfrZaLrbCfRpy8oCUi5Qbbn86Z7cYy5vC5Wr9xSFy9ATSffFd7c7D",
  "key18": "2K3ruy6CbHFAYScBnjgpYHHF6jznLGNy1HznwJSTMuXytghZZ9F4jN7j6b61x2LBAciLNmy5NmZBqorfGQZboMDR",
  "key19": "4PxznThpuBUSVdFpb6waQo55MJ8Me9GP5R8gBi3fEkCQo2qHK4JxyTVP8Nr2aoPdkwDxitC2riviAXTk5dQ3Jrct",
  "key20": "3fxz4WXe28QkB378WCUuj7TSSgXmV8iv6nErBmvD1DqPQVZ9fF2JWmZavAe8eyqjasU19KQsWtgstZgwsnwt9BMD",
  "key21": "F6xbYyYGDUJDZKfDCSb1yESfjaB31a5Mnb7NRzUERrz6D7di6LNmqHfWAqG8oUJPLwtWXNbVBFgzkWJ1aXErMAh",
  "key22": "2GZ3mtbWPJY8wtz4cisfp7Uqnzteace4FTdsQQxkfsj48krZih1BerFpaTpCwncsUYYZjh4s6rREtiFyL4ShpGAo",
  "key23": "2DVq94eYNUVg3XVCmFdV3aPJt8WjvdqUjMg8V7PkFJq5cQ1DFyPZQgbVgvg2yYf4SmsqwDQohUtZahBU18sMuw78",
  "key24": "4KFv9nTZRR2ZMv1NDWhT6ob9uKYeYTz2rTb5dRZn6Dtor1giYgoyYon3eqQt5B6kJqe8C8EVqCVqU5g5oRMm4RRh",
  "key25": "2F9kCScPwoZ4TxSE37aMGt8W2aRZ4bg3d4k7t4HBaZjHM1o3JMG8esmZttcFJh5VuN31cGt86voUSK7trvpdmcia",
  "key26": "5q8HvXe3BdgAVpXoEVtprf2pVSUDqzUuAniDsS3ubdbBsxxTnBcwGWkqjghSc9Y33aEAtAxdJhonDcTjmzKF1eoY",
  "key27": "5W16hxxgNEBRT11SUxyn1mHtqDs5HD5nuNwouywVFzdkysvHPC9zQLyZwAt8T6EkjhEfzfv2vKbK6dayvG5KaprP",
  "key28": "3uw9JFdjA9Kmx7B3krZTuTccPfRcRWH3eJ3u8hsncZQJJgXwomtCMAabZNCEwPMzacNnq2Ja3yGjASCYUb9FQQ8w",
  "key29": "2ah3PqjSZvV3K32N2dpGUhTS8U9KUhXY24KMPs9FpAzUBQZj8JG6y9msQhTG9ta92XQjYC3uUtmRtzdr8fiGEei3",
  "key30": "525hgVezdaAnUu3HDwPecdPEwYfUoAwbaND1nXCTWFRNwdjiPsiuJJufViTULmxFC7FU2b9pqyYcNwQ6yKx3ztPd",
  "key31": "4jyB7Qt5mbzwTT7FJH8PtPF5u1WU62xkQL6tDMpHP78NpHRaHJScsQauRegmB7b6qAuKzDBsbTK7s99NRtKLNgs6",
  "key32": "49pRbawf2zGPT9qRZp6tAH8yG129X4NHfMFYdqtznGXtQsEgkKNvcE2ewHHnKcqu3vr7LfPAR72aXw31iXAM3edU",
  "key33": "vaQ8NgtMnsBNEW4KHRr6iCKBuoxQmX4eWfHfbqBM2B6n7t3nLbdAFE9UXF4mQxWi7F2U11MP7q5itfzfY27B7DV",
  "key34": "5BKrgoBr8wPNFh89vL6obfTnk6Pn7EYCtETXCgZjVJekSEVxfqnzisA3F1h5j3uNcvmyKCHM5yf8so6WaQ93AsLo",
  "key35": "2kXLyZbrB4f8vacqJTFx5pTAm7HdVD1UGttuzMhLwQU3EwSoxN6Rwj4kgWvyWkW9D9QkVFQRgcdZce5cYYccjovh",
  "key36": "2JiBinzyzWnYCAEwVVfKUjTC2UoKAMw5ZfgBfDuBAJQvtuFpuSBhXwxzyuYQs5Arf9HdFLy7qWWje4RS3Ud9H1op",
  "key37": "2j4zKZasAzkbtiDEhBvuJRrcRNeTLrSKXKzBTMWSvpgJ7irC5jTUGE2By4N5UF4x3UgBSHhGVLp4mDWEcZ4SGoJ9",
  "key38": "5vJG27YSJDuaNuGdTQCVQPSF6d8u2fBcMKUvWDEUJTo7tZPMDQrhZVRqJWCyvSC1r6vYD7jgQ1gjBjnpRPag3JVM",
  "key39": "2jKBmXznn9s3HAMM6YVUCQKQMkiY5wqRpxT6gVBbgVRmvAzCJyLW78xz7JrA4YoKQNosRyZD2tujauBeEJpw4qXm",
  "key40": "4fzCDHiNXFwV2r74TPG5aj4mJX4XLXv9Q1CS9ESnc45LojmJdcM9ssw7ofy5YW2CBAtmpkvYtQ9eD2mYyZwxqf2N",
  "key41": "5vywhAAGmxnkKdp47rSQxe4qCnfWdjiuFznVZRcxh1xD7yJfaDwfbruLbpqiUCnEpj7QJ15J9VdZAQREAj4oNAFH",
  "key42": "2nmsYun2hsFdUKeDCGbQKZK3Y2Zxof8K9ERdf4T1GyTC37DpZwJFoKaWDsp4bjEpn2L7QEnSq1fXcQNR9zzj5Mnw",
  "key43": "4m1JrxQTbEz9goBgo2kxPBAJnJEpRh1jfZNssY7gziaAwSPeTtJwcB1WR7ME6PzQT1d3g1NPiLftHqTdMdTRgB5Q",
  "key44": "4Ce8K4MimzscYFf6gzp1c5kxwBTUTSosq3En4jVUzBKeT34mSCVAv5B3tHu2vzyJyvPgJj58hQWP5pkNvJVcGWcS",
  "key45": "2cp7iuv4vjJieMc2RvjR8pJCpxLUHgGrw8QY7bCmZMCDwmyGXQF75svKYFhpNLmBUioqCaYLDZhwWS89XXAdA1iS"
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
