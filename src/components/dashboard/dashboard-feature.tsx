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
    "2zs8npqcv6pa7QhgLygA4iUsDGnXGFgCFAyoYBNidf1sgaX6ddThBh392GpXWXLynxhw2yirb1s3SXRxnC2mycPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z7qKyEwm8sBrUg9jC3G5QQrFqbFnjG6ywixP3GhkoTxLuD4F7bvvsbDse9wxqya6fJqDL93Qbib17Yb66DNhqxT",
  "key1": "4qWX1A7GESxJZtkCZS7gyi29GWxMr8jZ7qfFdEc4Nn4sfWZpBCrRkNsrtutB74uFvdMrN2ehipBdwiWm8CXcMi5d",
  "key2": "2KgFVQECZF3LMUfsJEnvGVzWAxQfN2XQDf7CeMjbJRyy22LtZMNGea2mPcxH7rQrgQ2Zs1W42MZAV5aHmGZmvR9M",
  "key3": "24JbMv4KvRRLNnGEuEvgozTXnzZUvpyjvwnqzt37JsxeorNuwfs6upBSpdtDrhMBwkXLUBYYaZjeQuxW385MBJuw",
  "key4": "LGxzNc4AAebdidTvhKpY8B3PKcE6PiKDuC7ANXZ7U4RGYgj4ddRRUniJ3D7sNR78buo12DAoif9caypBWEsUPUn",
  "key5": "5uKD6TwNEdvvMzskJRuJhW71J8NMh4LapT6NdYRnyTV6AHTU5gBcUXcNCTZFhUT55kBhMh8yJY5AVQiyVYzxU7ev",
  "key6": "f4nbHmagA5J9csyvUiPhMBC4CdvanjTQnNPaUmVXhuuRb2g1nP6ihnMVJkAj9zSEY6yvVfsi7xxB2E8bh9bmjac",
  "key7": "sUHmUXe4GAgSHoujqZgoaC6vVStTjjkvgthoKb8DrDnCqVTMd9FVXTdN2pGFJTp1xjjKLScmueXk9iwtaJmwvLw",
  "key8": "4PiuoGmeg1saBmncEFCq3pZsy8GAjKfACKNrEviZo2zyTCDw17X6J4QCPLZ2F1UmKStzgjFPT58UD3NsNkazjuv2",
  "key9": "5ZmEppGcmFJeAv89k3DuXjHjA7uFQ2B2c7TpWeWgr62pxtEA5EPDmrBZ3onttDmWotQXs33Hsba7iZVkWFS7jH5C",
  "key10": "5nSfk9ZWRVMaGbhFQmaHiVUsPXGcNA6o58rcNebqBuPxar9y7nhurBB5o3FcoarrTCGCE9TTkb3q8DP1JYeksSRJ",
  "key11": "24Hn7mscDwkFmJrDsmk2ByCWKMCtg2nmYoRDCPJzhPQVU9GPG58gMKMLCppbCQwrf97HVyGgezMLNnHH4bxERyJf",
  "key12": "5QnFHur1P11ukTW6ASur46SkoFjDuFJYhBwLuffChonSyABgLzokz7vQNCqeogMBJyJD3Di3dVuzMzztLzuAbbyY",
  "key13": "3DmzggcfnXENgyRu4pbxftWoCq4YUqZqRs3fpkfy2z1dXise3Teh7cjnS8xQRmsmeMiU7rNPKCdRWStBfoYaaXXs",
  "key14": "63rEqzZLqSEjSJ48GG6aUEq18fU3fawKRPh5d1XE6WK7VfYkfGxhm4CPcQ3CuQ8UBZd8EfqsZS4czZCcnp9nYqhR",
  "key15": "3eEbjkL9dAKURoaupRUaZy4ANVK8yNSzZyKjoVj91bbecJPFYY3MvLV46UVovYAsJHhJNXMfaiGxKpmauGeCxLxj",
  "key16": "5p7mTfJMLG5eNhH7GBXMfepu3vSkJbis515veZnqaKGqmcNt6LZXzBteJ1PG8FSAa7yr67EE8i8CxjcCatjyCwbJ",
  "key17": "4trbXzVLhx2SpgNiJKfQBAezxNGJsgZEg194LXWu9kDdptYivnt6Uhip2kR7a3XF4mZWcpqhT4pRusMe7CqBfgW4",
  "key18": "3dmsnmt3byzQ1RB7kU8oHuFmLPLdenky5UZjj9bGrYxjeWiaaui4EwFWjtPoYsqPGzuPmmBEiM5vW1V5xVNaMRdH",
  "key19": "5gdwkSdbi3qJ56QKkLq5WdYkyuUAbbhysrj3xuXiwBoT5Dw9oTHvBSHWxCyivNjQfRtvxa28tWF8Wb5jrYdWH8Es",
  "key20": "21Wcr3a6WcPiXukyVvdppR65JaXLM2pKGrdA8WP82JNjz9qeiSfpHqtDnLedGr2oWfGgYzuGcYv2WJcbehVMQsYJ",
  "key21": "54swM9m6boj3cuK1aSbNXieRmB2NkQrBPqYBDdgFG7BLexwoAFpSrkVvshC6Ui3eSkWs8SZjnnWjhMack2JCaokJ",
  "key22": "5gVEt2EGwkUaeB2dPdQydtwjLMYB3abwEAbt57QFxjxmyrKjzfMM6UN5CLQyBPy63Rpf6nkpHLDSEZrrzZdGSoQM",
  "key23": "3whjk1uWStpLNJ8LFXiokg1gx83h75wAdDJcMvZSSfwFQFJa3AAhu5onztpFyBaYV3kwEKsTr2tSbGmRyvXsEYHv",
  "key24": "Yo6qfR1hvWanGv7uMZwsVZSJvAra39ztXj1a7XWZDahvGDxyxXjbghc8tSBH76WBXTRMkMQKiWAVV5BvCqyJHHR",
  "key25": "MmLPAwz26uAcG4tSEcQHpTVHCnQ1X1SwoC2M6Py2pB9axvrjJTVtuVVk3J11oGCRbiHR8qur3AoSg1KDQimNT3e",
  "key26": "4j8MhE4Bq8Vha74cfoobNj6u7Ad8nGUXiWtmw9E7ZryWxCDMNBKDz6DJLMmzRv3NECDCchY5iLuxP8fQGsYD1YjG",
  "key27": "2ZzHqHNkHkjWnYXBDP85Ky1sW2n4T4c77MakCMk98YiK3tEJYyMUE6PJcAA9T7GLm91uBo9saQ4DmeDEShipfLsk",
  "key28": "4WV581hp4nCTgzeytTyDRp9rjSKKch4ftdLj46J9URaJMxkQDcfoE1FAbGuQZpT5kqcMDNvJarv4cENEvXwbNdsx",
  "key29": "bpMjvZ2ZrnXbKhAeXXojZ936sKU16EURZoYhYeCUv6xbrhDDF6VDeUaBEU6XQqc1ekoYJYwduFYqbtN5D24AZp5",
  "key30": "48W1bJBRJz3cHYmQtFYQDAV3s6TZvYL13SyauvkGok388Gt5MUXH7krdoWnHHPxLibpNd5r6N4665e2hWxFjTWqS",
  "key31": "5uFcrjAtCPedheJNud4SmZzj5SWUtXsaR2MniXyh1Jbn5aq7XTs1yyo6kkUwbZA3KWoq2tvZCcQE6B1CE1qEBGKG",
  "key32": "3Di7KAwmiBpwFMe9H7KvNWHcME8PjJgMX9p1UgUbiNDVAgSwBGREHdAEM6P6rhZV42egJupXUBy8J8thfV7NQvmz",
  "key33": "4SPiuj4gkaPE82nnBssXvjN42vK94j8R38y5caKNfK5efyKzBHzhs4F7syLTn6W2avT7FDkauAmtmAh2yZ4dpcsW",
  "key34": "4Rv6nfaHA8VzY1JuA7N16XXqSzStni7rAVisGdrqftnNkZeRzVuNdqo5LQ3bCeqhtfdaKT2bWbHPG1sZfHc6Q9UN",
  "key35": "57NVYbfQbpQZYh6yC5oa4cwrCgmJ4hR5hsecoxfiYsu5UYvJ1a6NjcQqypiUkphH2oUDh975B5L4c1jGHFt9PHUT",
  "key36": "3PnUR7GeGZkK5BJguGzeumSatwysbDE9o45LkJuGVRDJyFSeynnnBTvFGrVMdEQh91es1M5EQujaZpuMJeh9g3ie",
  "key37": "4mxwSPBVFgFSNx5UECL15A5VmLgxynBKWBsk1yz9vYNQdZ2znMqDeCX6nmTvFeQgHPs3i2dZZgPjwNe4bt47dGxC",
  "key38": "te4MY8XtwbRWjdtNeGvWaAn1dbCpTBBc4qkgp4Kg9RntuLe3i7oYEXTxkBQqj8i75nrEwGsrSGPKKV56mF3R8Fj",
  "key39": "34PA9aattbZyDTczxc5PbzrGx3ehNiq1fikaMhwc1VQcDeQmuwQgtT4vnfiXqQ5ow58H6mL4JsVLkQMFcNRV9wFC",
  "key40": "3AjW7AkNRc13u1J8DbZKyPPi5KNn635NdosKNH1ZBcPoYPcVq4ei92AmyqQxkvyCqwJz2mzJ21p5sbFWSEwwxU7u",
  "key41": "25T8x9s1PeUFEEVcnjTTmoSEBZxAPWCfbxgMhNUAecpVis9hrwPTrLW34Lx2kmvaeCVdGefCQNv3PUsJEbFEDa8G",
  "key42": "3wXnrt9Fc8UEeWgFaYJtEUvstg9PLhfsRd4Kc93NbwjkdeYA3Fr4e4jvxH1FwwF2rVj1PVf36fJv9UbBMsZ9h1vC",
  "key43": "5qZtPZukucUM4nmoAhr6Lw5UMMwZG2srRf1Lz7N2f2PZ7sTt64XCsyPz3MdetAKgQh1dwbuRTUgn3Kjtk5CbcsfY",
  "key44": "5kCEUH4ZHhftysx28qhZDFVWDYd4tu1rXHbwSy5GjajEYu8VStWaMtnH4pf7mWg8oUMMKDqrfRYUvPtGsRJYegsN",
  "key45": "374Q3imX3mxnhxH1GDqXVY3VV31PSgR4yUFyCvw9xAbiik1Bu6A2fB5BLLSTU855vUqHPeZV1PSK1824X3GajVN1",
  "key46": "SWeZgUCo7EWfvtQy5p8XWddfSxkDXpoY6QffPV9swhGwr25nJA4aXQtrRtydz5xKr3QCvdPHupXqGU9W485v4PP",
  "key47": "2MgB9eQpWzh7mMArrtYSs1PjGVsodFnZWeDgPDrH9vzL26xpqNiSKjUZwpUYjWn1SA2x2Dw9NAgQ5vt3bothoHKB",
  "key48": "5acYfPuGp3DW7QD4u36j5a1dLAF5AK1Bc24RKqpj6hPLVkTpFFFiAdZqqBJ8UMpTzbaweSyFRyt9QmuXZWNxs3Ww"
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
