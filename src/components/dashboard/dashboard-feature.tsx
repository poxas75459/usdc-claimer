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
    "21ehfNESbARYGK5eK3fdgPnfnHSQsVccNa8E6Y46dABCASeYEeiSGWbbHE1mgdpUG4DkT3yJ79zhWbyTm2r4yGMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28KwWMpa33njC2ssp7Vp8yeh5sCmnDFAxTo5TNTz8gpbg3FSJKRCmzqbsGoqH9xRQFkkXMgwhpRgJi5NS4vdwRF6",
  "key1": "5i7tYuVsJBBUTCiNuEJayBig2NHjkCFj5DZvAYFFR7xmTw2BcYDtZiVixp8mEHFeANGVqGSzFYqZrrQLhqgzYxQ4",
  "key2": "3Sc45PboBbxKGr6ZzStQWiwH4jWuQNdRjxt3UZ7Y5eTFMVg3KrQbrYjvMhjzBkm31BfqchX9mW9NKLgs7FaqBfpk",
  "key3": "49LzCMJmPzmmFJP7wvxNeyPb1KfpXjnsuaK6yVyLdryPPs8Mzd34Pgo4FDLKRnPi1FGGNs4ntaWAvPq3bYQq4uRy",
  "key4": "8o2ed51KA7bJGNsTydLxg5aYsPhxm5VqPPJdh1wMq57bzpas2FGn4sCrCm34imugiQ7VzQDw5UVfQW3Zj7w243y",
  "key5": "dKg78FZrbuk2nHAsfcNsd2RqR34KAZ1CpoKccQLRCMrb9ybyTpX3Zn7jgCSkKtE4r132EsFF61xerw4kVm4texS",
  "key6": "3Yt4QN87bKsXKmWsEqn8fdWAqdGmegqKut6MMt4a2WmbtpygN4yxzoyDeyrTMDVRH2uLqgVA8bhjrMY4yKnPFZud",
  "key7": "4PHdz4knG5ZMDwBoSPLNwKX6c9PHM9H2D1Xy5aqQ7HBN7CgnicUVGexbLZFCudUWvDfJYB2nMpS1xtsa4oJDuJX1",
  "key8": "5EN1qj6yoHC4Xo2Ld896qweCSeLZwHEqJ2u95xPKKFhdsa4PGaJ78jReRvwEp5SDZ1eHHkT6goeDSuT21ShmQLD9",
  "key9": "qk92sBWUSAnewAwgDkugV2NWKNpxXu5WbWU6MCzexUcZFgZBjaMSJqLkenkrbgf8oQxXwLo1R2VTRKbEDWGcDst",
  "key10": "3bxmWfL2C4A15Pa2EyyuMj7XWaTH93cu8vt6HhEuk3saoTEYqxpSC4hdYr6wdHKLCFdrGdXe5LpJAhXQ5tBXUCCt",
  "key11": "4XF1XiycChDk5ovcUUiJLAxZMpGLCVP4XProuj1aEUTgMYBrukBfkiz6d96vAqSLcrSk2MR55K8T736YFzWX5gkK",
  "key12": "5jSxXPJkFLRpfygBSW13LsXthzXVG88nJ75xPR5ajkTE5cGtTXY8fwc6xk7Ysh1YdnYoaNSuEY9kL5wCy5hf8kCj",
  "key13": "4PdxsPAXkXtFnckNvZKoHNwu9qgNdGRiPNMNRdEV4ErtVt81bsEJ9E1UaPfnNYbKKRfWYu4amQ5yWdFY4pvPHPwg",
  "key14": "5W72TT21XeRYYDXdBAYDJpYJ3HJSdPq7NJkk6ni1wqNQrd6bvfN7yBt3gDddj4tSTXkp8tUwB2TjniGbobzR6mzA",
  "key15": "3mJ9DsjHaGTpJeamrcabqPi3R1vpFjurAy2dscVVDPNiXqEDb2B8Qmc95timtcUSHGs32WVzvqP7bPhVMBThkbR6",
  "key16": "57AyTcnRULGZ4uM3BtxExWd84oBMWERszizxtYPmqCVw581MR6JgWEUJu4NiBXWnvdoG9YmC2w833H7FBQ1wq1vz",
  "key17": "4oqi9JfWPUwNaPJdqR1ErxV4FGSG5reyw7vyt6VSkoWudA58kV2RcZikvywjgq8bKePNNXispsi3x9o3GCyPtsCt",
  "key18": "228PFivDjGgjXEFWbnrQHbK3p5ZNRUVtCsDr2z9z5gQqfHV5s16BXfVehqh8ep2t3N412hnGc5GWGXUpG6zSGQCK",
  "key19": "28szfcPU1Z9Y9TWc1K74SsoNPCoTSFvYjcgK3v9evF1PtL3Tc6dVHJEDK2cQPGbAUfJ7V4tZPi1iVbk76uz1B29J",
  "key20": "5v4QbPE2mNCtdBUCZa19S17u8aq9B63YsjAz3p9FvXBMggsqpCnL5F6ZjZJX6tavL9CBdBxZYPW2NgERAjWQvJpm",
  "key21": "hiAwGedEbMrUNjpbBupKVTrcWbmTnp6mdjPrsK9CuyfYZRE3AdnpANdoEZUuU5LRxqJsPKcTNYd1BG61dAWWz8e",
  "key22": "mjPubZSJa32uv3xBmTorg5ESer5hPya6yBm2fryWJU728Rn4b2noMBqNfQQZDzt36use1Hz1udjDcoxyXfCgLet",
  "key23": "MaRxixcKqSPvbwqpH7RZ1caqcSfrvScwNeSGtKMH46cCBaMvN3dVFKe2bbaKns9ZvyRdPdDPuojUiq3HKw3unWn",
  "key24": "63KhuWYTDKw4o4S4b1K4dcFkzavwWKksyN6jB2R9Y8cYRwqAosBouUAXyw7jZGFaNiNpVNK3x29Ybh3Wtyx9Jrkg",
  "key25": "37jcCqKjPze91p9TW71tv3gToCY8GEEfbLSsp3dWvmccvfH8rC7DRixTgGKXakiN2MLbB2hZ8PJ6kNDZwo3tjE4a",
  "key26": "jKdJ5SpkimzvhYfymKNiU8UpRzJGCucsXtLCecor9kh1Y8pGktgyi1crfiY7BxNV4zsousnZ2nNY6hy2a6u9q7t",
  "key27": "3LprQmf7TM6VWj3U9er6WdLubRvHxcN8DdrmnEbqk3T3inWmgAudjbRVBBx2XB1ujnWxYgt5FFBVaFFUvaHAkFNm",
  "key28": "3UuB1hg4fU7Xp3Yohn5Kn8Tqz3A4BDwF9tLG2rnUiosu4GvHMdcUqFebkSVhcghWiuKpRhn9WNpEef9997qkYC6Z",
  "key29": "J9BZgs3JvHeAme6tjn9hED2Lr8boLfWJaHUngtmfvhctNzCTqmEFbBb8oEyjK9hDUWJ31CGhjKqQwgmbvDxGuVz",
  "key30": "23ZqtaiB9pALpZwpzi59c7SY2342unbNY9t91WCTFz15NHzy51qHpnLmKRTb4PyXTteTqDz43YBHUtjAXi8MBcGK",
  "key31": "5Hn7QQHv6uemyh4fEkAHXBcFgHdaNXM3MHRBACL1xmeaaPuQR3Q6qMyNahq1jC8XV4ukegwA8Rt83iPhudqcezc3",
  "key32": "3NxpcosbdUeLVLp7sFDusT5BUDicWVzAH6HTucXVbtieJB9nUj6GJauDQFY6uUgM6nyyLMGXGhaMdH2RJKxz1D6C",
  "key33": "46PvG661JbNGpyYLW9oGkEvE8ZXpNkRrp4gqaFNMY5pm9pA6WCCnPZFmNALpJTQbZxvr66Z7kmyiHvgqrcJwgvPT"
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
