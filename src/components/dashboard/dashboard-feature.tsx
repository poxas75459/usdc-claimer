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
    "2tRihntqfmuh5A5mBygcWG7R7KUt7oynrfYrD1NTHavT6dqLuDSuNzVRUygMLSgbRhTDoyfirdjtPjhUZmM4cmc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Xgk3TCXQNj4fqRWceXmqtJDY88VnzSP7zYmXVU5Kc5JQ51b7QJPgGbyKH4oLnzkPNcVLVnjroB6cTX4qQbhPEk",
  "key1": "3Yuj4r1v2B63MAoUZo21AJ79jiwA6hP7vGRWH7cBYRrKebv1mEgcAFxWNuxAir3z3d5tHBiTbi4Ese2gWkEuQmiQ",
  "key2": "KiSe74jGN3PxKCJsVFqmzu1quyfPs1TKRHxnWeP2p6y18UBo4rD2yA58Thf1AxzbKMNzRMiFexEvA97i8kgcisC",
  "key3": "4dLX9zZ7asaDKrNX46a9vrcJ9BwYmWzdbj5rLbiTseoqXWFV2qnFchdUojL5yzWGRJQ5ApdGdH1dQXE4R3vPerdS",
  "key4": "2AjS7jmu9RjHWCAH5GTk4vi6DrhiK3inAuGLzVkSqsMBA1cwCyj93UAwHafPkFZCD4uEeh8oQhA3rXxAJUmjmGCL",
  "key5": "2gajCaJBNyyQpvTe7F13kM93u62uTGcQhhBFE74tHdaVNE1EAffgqddiHnVUhJ9xUtzeBfY6BhzUQEQEYyC6rvyH",
  "key6": "2rU3iWEBSNG6Nic7HYew2kHAg3v3Gpk4eWBPovqYtphEXfHJXjUroMXbG1rKq5uBKNxAA5jYMp4poLvHh1fgrovu",
  "key7": "5LLi4dneu8SaMKLseiNtszgpdC5Xqi4ETsJa6z9TwQg2Zo1SzQomr24zu8wj5yE9gCkYHvpboF5ogJvaUi3iSF2g",
  "key8": "3NwyvjmoSb5bb96RkDZUSEZUeiHxXpBHtwvWnNspJUVRTTvi5P9yVeza5gUZrYoeSEbfFaimB3DBYQeptTWwh1wH",
  "key9": "oc9nSx3nfBB8iQCt756affrdQRtSeDhQdyPGSoke4gVyNFcFgBZTABr7bAgXshqyGLg1Aa4Mtg6HoeWnBs8RgXN",
  "key10": "d1yzbS3u4HjcStVVZZ59dveQxydbpcYbD1ZkGW636Rc13GLjxKgZkuQnbzrvFeKy3FqN4wyS8xzQansSR8ZF4qD",
  "key11": "2EHnkdajcWSv2npyPX4Ke6AmUuPpDSyw8KwZUGs7w6s8nMoi4zHNXmLtfk68rTx6PwoV8kzLQmJspgcYk4dRLwZn",
  "key12": "5CKtfY4w5Zv7dvasA4fXnizJkk26GAJF7tMZwjXLrKWkBAyfW6VpxU3mK1PMwvD2aKWhKCGwmciSW1bzybg53Uj7",
  "key13": "3WpeGMJV488Lg2KSkGTXBtMZCJ3Mu2x8zZXLQzjsvxwtSbiWFZRP3w1v21Tgxz3FbHLEYK6UT6d8XXPwDitHEF8d",
  "key14": "27Bca7NLhCM6seJX7j91DKHPG7WLwqkEFXKXi11gSD6v5Dvc1Tmo9ye4wZRrysZ9qc9Nm8bhpAavwynM59LhN6Eq",
  "key15": "2a4HTAkgCmVyRoWdfsjSmccRKV8MDxcFVqDjUMRbEG7YaFZSDdT7imYy7Ngo5Vh1a77w6W8xeta5uXxQFVRPSZcF",
  "key16": "24Yb5WkcBZEhMpsBJuFVo2iSnx2m2x2zisffmsLVFgdtVuzFk3GqsurcYAZsDMutmxVn7WkBmUpNrCAHGpHg7s4B",
  "key17": "4kmU2jqV9QZrTWkZYKv7vRArDTVwf5GQuGRaoHQTgT9FupCDtr56uYyar6JyDs1mt4YarcZ4w2R2jSrEkeYqup4k",
  "key18": "4aVCVay2VCL4Y8UngXmqPF3iBMDaXF9xLuR71Ki99p3Bmxj6QdeAkwba7D8bajyFSkys4jMjd45rM7R6jCYGseRu",
  "key19": "2x5ofUspgxxtRcodAHDA3DPGj9cYtaXxjwoZg9YivpwpFYq526vjLwpZycUKuGE9aJfbRqyAgq63H6bR85fLKvya",
  "key20": "4dGzEvXRgmkke5ECh2QJZzsiC6qE8hsxgNMMF5c79Na7GExkKShTB5ij7avbYs9grjGK5L1UEkz6B9p9wdPhig1s",
  "key21": "4U7ZokputpNGXn67jgvZ9PPyKNCyXjrPtssMkGsTDuRAUDTfQxCxB25xmsVfJYscvhepJKh8Qx7zRaKPxAQkuLGx",
  "key22": "57bKYpRUK8o7Td14ExBa5yZqPdQZ7xJsaL8Zpq5psa9szxHECDXbeHetRX6R6DWft8hsi9JyTJerm3u7oB45oGv7",
  "key23": "AmmLH6XgJA4ucaXfhKn23DB13aZ5Nbj9xED9LAsBbqLRiS15NnvdH1uvWwj2VWiomu2v1emkeRAnXobgQxm7BwM",
  "key24": "3MiSGyETpNp1eYRCiNvAJLBT49NiMD3MxsEeZC5LVG2zikCPbGyqviLgXhc7aAaFGFtorsXVJAktxHAbFPRipoiH",
  "key25": "6EcXEas8LqXiQXQJ9a1Dwd9Roqi2Kk9TShZv7GzmWa3ZGncXyt6XosnNGCsKKyNXhxZHdrRnHvSSsMHrqCSnnCp",
  "key26": "2Pnm4m1pUSGqSxuSBgSunNc2TrjfWKz6YhbDafnRHtEmfHTf1xtVuJcfNJw8BNU9LhccwpP2VAccfP5AtXFAhJv4",
  "key27": "39HNEF6EMattFMy7Rpv7v78AWa7hwrPtFeeSUAmEQjPwTeTEPpSpXQYPEDSkvC8nizJ7kqQwJYYH3fpCNocosSJZ",
  "key28": "4MX4V2rCJyS9csqTgDwdWys71CfsL3ZyHpB3hZdcdEpw9mn5fF6aqXKFGKy1nzVCaYXwyKoRrXFW1BQXaFxXBhQ3",
  "key29": "4EsgxiywmH5snupQXETTCCZgF6jyArDJh9GPLHo5N6iYnuzUTyVdQ1rMhjQpRdTg7Q3R953Pxbr3T61Q9nz7dH3k",
  "key30": "2DViqcJoxSEJy9JxdfjD8K5cUdsx4NuPD9HmJStwGSG7HjjnviTz5ohEnADticsSQVNpQEH75KR8eSNMKMbZiyyA",
  "key31": "4nFSGDSqe4gb8mhJEdpkFVvFS3cL7tyGFUv8mt4uMEbTzZikqJsZqzLhofkkF8VGb6BZbiNwuv2m1E3ZyUVqskR",
  "key32": "hE6c3NVEyfwT82sPnS5NxGLUH18cGdMELJSdz6nGFnx5m8mAviyVwfUo5mhKVGEE6XUK81HUyjwTjenTPLT7PHe",
  "key33": "rXNUeGvBhwYutDeWy4YEqBHKPvUKHwMporbz3jYztkjWHPKHft2yMVZ1xd7G8f9a4sC6pxVwML9DBCMTffoA6jk",
  "key34": "33CJG7M2hNLMgxVWHvKbxJxfgWQYMs32V8FrH5LjS5jPEA64qLtgmwM3xG33Mw6CqYbkJyCEKYrPENF5wS1beYRH",
  "key35": "4qQ2TAUqnc3H1GS9mBX4AzZAZN9XNbNXS4yRp4GUGzq6LG5ryVDozvDv1mxPYCcc4GMz3TzxziLozWHHtGVUYgip",
  "key36": "5McndRcbcj1zre5jdcJ4xfqFBqfvenx1WrabwXzwHhDwfTWqbVCRhXBvE1gM58DNJSqpVVSJ7K3KtCCLY4E2Uagp",
  "key37": "3AUPRFMG99x3whwx8C9eGEXCFo2UhA3VJ942CwnzuXWDa9CsR14G3f3UoC1GGMPhH4JoQKtaYn38dMKKEQNcQLKc",
  "key38": "57NwEQCNGw6Jfi6qQvu6xh2QvaS5Dnu8bm196nSmdQdaVYF2zATUaRcpapDaoSHZZKhhbdSHtbxvKi7V6Hp8Yh6B",
  "key39": "4Tgc2oBxEdu1G7sRNqErkqWyNNjrjKQUHGmCzwDhjosFtDTdYCF8nw8n2hyxuu9dem7YzuZeh2AiqR9QUY1ZSaK8",
  "key40": "4X1qpKhDqCURLjjfszXZetmaVx7nA39ZrqrAiHZNiqSq6iA8uCdsCQXdcpThPYK8YKs2dcuqXtUwiZdM4tqjmeF6",
  "key41": "3ZmGwoENPd1bCcWNQkfSWtcbGiB14gNYCZoFGPcvVu3ZyezSwn9cRgjGjy78ku7skSpWLxHpXxBmzupDKKbQxnDs",
  "key42": "5mjKE8H6u922tA1Mrr3Lf7tsqYHcpSjbWS2t31UZdgLLQhacgJumzvCLdbeieFgQXgnqLKvCQb3AxRUuLpQk2HZR",
  "key43": "2KZcSCVqLFv7ocjNHjv8jqofrNnvE1idfETFMgnMN6dzoVZfvrYteLBLmoB7JQuC4usdCW6psMVt1p6i6mtKrL1F",
  "key44": "236xLVpLzwRtY6m9gyqdWdpKRUTxjF7doyHTopVuUBj3YLzS2arye6BVexyMypSBg7x8UGGR5Cn2XxoxzNpGYudA"
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
