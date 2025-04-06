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
    "2yRzaXz9KRqFRMNs61kXycMtdXBcK3i8WFKrDrzDQVqc7fL2vabr6niFUtHmBt5Sr61Stwec6WXYhq5r3hLMyAkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j4iVeEvJ4WqUeVYq3yTHLFbYi8fUkQ7GMpdMe4rqLe6GH99yRgeZ7HR7WvqcGdauGWRCSEE1e67RubNoaGJ8Nqy",
  "key1": "2jmpfJ4NuRCG4n4j7NoyrXs3Uv8fWDKDG8JxEuX8WfsQ1ZpQkn1EjgWDfdczviPh4qRkyoA9KNCC8eL1r7HZXJj4",
  "key2": "4AbUTx7Jj7e9ACRTy1zZVUhLWjzvXe8vaCKt7tT5sg7A4KcqKhWGoAUF9apSqG6sGZbYrt31kzY12UNYaVfDf6EL",
  "key3": "Gqrpbh9ofK6u8ddTVG7uHZodbUkUhPZ1jdkhrkpxt2DGKhtK2GpQtAtSjsvBg75ZKmk3KjEuk5Ztefep4hxY4um",
  "key4": "3zrfbfjtYCQhWushzn69wSmhVuja7WAUFjqvVNimzrCBPLVRqEEBwAc3GcMUtXbssMKjNwibz8WjZTeDyqBGCm7A",
  "key5": "5omx2HpEmHFgToj1gqvGF7gcbkr5LMtmxgCjhTrWhp2H68UYzkyBsaiRrtRk2xvxV6Ks1q7nSza9KuRx3hPVLnfy",
  "key6": "4C55YoXZtce2E9E4QxKZF9n7ESomSwZaHhgzZ9hEPxMd3XWgE6xuXCppgxuf2rGDf3YYgxy4MvzM7wAyUpkFph8i",
  "key7": "3isGhCh9eCyUtShHL7fcXtKr8DMU3KDTWveZswcXrqR8dAoitTc4oj2dPeZqto1q5GVtfnsLRuFLJthkbWKzYbDn",
  "key8": "4TKQ8ehhoDhc7LdiibDgmCDowbsuLvvghPqaBzuNhLHbzaMcny5ZhJiBvb4PfxCcuKAbxYeigamSoETgtghMDZUo",
  "key9": "4khQRBWjcuFDnJJpHbJW4WNwCk6SbHjQGtnmitVFMyVrgBF9BZwzv2pnnSPzX6brAtegtsZ4TQnKJPQDJmx5aeb4",
  "key10": "3ifJa25TpTUcL3ptaCbx2HJ8wC2kukZKmAJHQydjcfRVEbTEA3nQhVhNmeLgr8Gqk7LEbQYickfB4XiXRmcfnbHA",
  "key11": "4N7MJrsUBGo6d7v8A41i2k8qzeZ4iLJhypYbDhiUfiZoMUWXLss4KJ3SSYX2Av2kpFyf4QoA87DcSZEPezvyMLfQ",
  "key12": "4w7gAyrJpWwZ3wayyUBxFWiRQuJdtQNtd5ucxNgq5JMwNB3rgh2BmgS8PA7YfegavMjfo82DcwNRrkV8xXcecA2s",
  "key13": "2RHQ1X5no3DapGjc2EgP1JBYUMhiDcT6PfFzPcRekP7LCD7NUj2bYdqYGwh5Sfqgc3Aa2nYJKJptibKhWL2inNw2",
  "key14": "nJtV2YYaz19eLCZzKReNyRarBN1HGwppzG2WdXNawykgWusH2do3cE6ojbWLC9ad8f7ej3yhKq5bkV9bdKrBRzT",
  "key15": "jemU4ftG3kRageRPMkcJ6ftvCgv1RCMa9onwMPPYEuxn8j6GmUSWCXZZfEtn8BGQR7S91sKpm5r91o14w3juP7E",
  "key16": "4t4sUE9WGtwLymftWr49fCqytUQPXKHoSBQ6RksrFdQvwbce1xKYadZYVRWsfN54wxNMbY7B3PwihVVg5qFH46Zb",
  "key17": "2HqWXb2hBn5qcQKuFZAC18TUoZHfsNCpw2vVktTSAukKcS943AsDSFSJTQpPAdv25Hyz9cvbdFpxgnen25mSZKN5",
  "key18": "5ZbvZEKFCpCfJvYT4akJeJbXcYyB6vuyWXKAB6rEGUzegc563zQuYS9m7MrNRZfqScxEcHY5TqpLmC7Ys2L7srYV",
  "key19": "5cf54Rbehxxhja1cs8tZJip8veBSJmVfCnEbXaRLfXPydqYN8F9eqPPxoXzMuFKs5MwJryic66JihYfNNSuymA97",
  "key20": "49eqrcJ7aDT3aTaxA3r5wNZLGUWWCGqcmkRHLQdbctAjBbzUN6LvCijCnL5WrFoD8d8oSigUR43fXWTAj3XDMAkX",
  "key21": "3QsuC8tQojvJhK2TWbQxy8SzxbdnCy7gf2g7TCFP1WNhZCadkeFs33oGyUBSzxUA2E62YjTRCz7QHwB5HPQZkG2e",
  "key22": "4YdFkMk8EGCd134bk4oJRbw5asyvggPKbeR34awwofBTPKyXgZYWUxBGpzknNmgX77a84oGiKHrCmr3UaN33R1Es",
  "key23": "5NDi6T4aztHgVZQLEz9VPM5Vketuv3gj1huhmfViVCf5pv5Mo4rxsotix57yNV2jRXCWPtQx5yXc2vQ7bXzL5X6u",
  "key24": "4ShWVSUyPPBDLGRFHQmPYmFiXzBo1cYnwSF75uj82AhNLBeV9R38Bvn3aWNGpwZB2Tx3StuQUbLndxUzZhxvojTJ",
  "key25": "irQ1FUR7nHsEfP2HS1NpgUA2D2J3yQF1ENX89DWojMA7GkedZtgR4ZT5k63L4uG6grMxGDEmHQpmf7FNASUgwfw",
  "key26": "hEJjns4FqRHgiGTbuVF64FczncJE5DzhQudTyku4L1KT7YykeqFqmVtMoGRwQxqCVAcsyJPWmckXQxdB1PAujK9",
  "key27": "3fHQ4VSZor6Yj2jU6LKvMcVS34ZCQ36v9SeVQ3FnvGvA66vCne7mu9YrzTsN3Na6N4FAefyM6mpxvtWX4qjWPNAD",
  "key28": "riHHEnzXaDJWBBt8hxsT5cgGBP51Lof1vW4sWxfqKm2WEKMzL9wVjgLvQqMnYfeFxcgSYvB4z7kczyuR9Ma4UPM",
  "key29": "2w3f6SZYQ68kMPQ4hmWet18o1qh3oSi2VjAV6mtWYrV6FW4cpDNy5MVFYgD58gs1sGifXfamN1CS96bC1q8nWq4u",
  "key30": "5aqiCcq7cVGcNrG8zcQPU5xNWQD4ySeeRX1Nxk39BbUfoxtHwbFB4qSdZi6Fk9jhcdacDE622yzhAdSgXxFry58b",
  "key31": "5rxSnTRN7KLJL4oGX8sE4DeCvfd6T1CLft7WU5QQzthAHYGCyJtWeHbqThmi5UuXdz194Hg8x7xcCfLJedkiNG27",
  "key32": "3YhyPSxf7euYeH8U3gDsS9U2uidmfeuXJMBio44DJMZzRCyvLfEM3wNC6QA8Tv92v6BmBJ6CbKoh8FUAk884ycmR",
  "key33": "5WuPvw91dEr16C3UNbVxdtLEMJ8sxtZ1HH5kBhFFfSeuKsE9amyrw4Df6CLCCTiLpnc5mQ5q7q7WDtiNTHo4Px4M",
  "key34": "47ZjaxSXVJepnacVoMMKgVpKDSsDimnL8iU3DW658mewZyAJW9s29diw9YJHHqJB3DFXyS368NtBkYCYf3Kk4tyd",
  "key35": "4ounb8ecqivgHFvNhFoR4pDGvqaCRxKb1ot8hvG85meQZ3XgK4kkTjDrvnvDHaqcBcGT4KKV2fef3kKU1krvxAjm",
  "key36": "4EEVTtEzTJm1jHCnaB4QnUveukhMDAZLTih6F5SKi44iAPmSLgHYzpD2UjsK2kVUKQnseqNg1kGUXztmvzcA3Yjv",
  "key37": "2pUshLYT1BYxyLMaPsFWKCG1uVBKwPi1cWKw7rU6BF7nRvPdHELsQ4eyvoiNcFpj11wUiHGYZEhQVrVC8TWWMgfc",
  "key38": "3K8KRZXauQfxaEDGqY28nfQQncm1Lh6ZgMVBR3QZUbKDvRjRpsYZW2CviGZdmWdm9bo6jGqkQphvUeKo5wJVEJor",
  "key39": "59KMCkns6EgdeHHCgMNxGjSYK3ghrDCquuebHD8YKC4RcdQ8HZFL89o5XuVFrvDXMDnBdRVDYMpRavwKtY8ZNjmv",
  "key40": "2gdznQUBvK7KTxW9krRwLRmzzATV4Ega1VHyUtGia5h7qJcGfq96KapfbdiU5DDzmikHNk3ZNeE5AcuKwxCVuoik",
  "key41": "62nDQ4YxFmB7FoJB1minxo5Dpj1NpjgcZKenPscG8yo2MHU6x7sxe6GSwBX68abZprVEhtB3xVRwMmYNi9oMLggH",
  "key42": "uWvVwcnFBeZv2CKBc3eZtQycspzQpKng721z3qUvyqzdF3YMKVg8afNEZv6dxKiaKCrcRSwqfTkRBqU7EU7zCNv",
  "key43": "uGJzPKxndMY4tPpXf34MCZiVewiUNZXUoMPmt7o3XeTxXWKtuyPQeF1EMwPWK51GXvPL23KmWajefivVtjehFKh",
  "key44": "nVdNsvT5FNcgtFpzpRd1vPCvrEcAXrTtNxY2Vx8jxaTE2yrfkCZvTRebqHQMgwsJKw4UiRaixzw7skmDV8Q3t65",
  "key45": "MLuQcemZ3jbh3Yu6pSoDCYZ5Tw2MFpJm6dJNWAL5bfEomSVG3Z2YQtqZ2ANF1oWwPsdrDtinLTKemkAiQozWs28"
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
