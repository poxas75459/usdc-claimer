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
    "KDkc6qPcVEr54n4PxDp63czLRiXYrEZpv9Y9LG2DNK3pi81MgEdwbshYiSS3GS7vRzeP2sz75usKYFPjcW9t8wJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v2E92FKHXak9cYrfGFTpdsUjA4a7QoChoV9avaWQxfiPmCnx9gTkvGHk6EUGT95g6aJ2PUd65Emv2iYPh8pmhXt",
  "key1": "3e217jN1d3ZhFGoiLKYeP2Yd7L1zQ1FZpLwbk2FgNzQ9VgYqHzDjGGS16JBoNDHD95b9n9pVw3qfzkKB92g4hUDj",
  "key2": "571aLBTRscKXt8Mjy6QKrVuz6z9EFcEQaXFc6t7Zi4fkbXDW64Y4kKy4647vYPL8LLWCv6xYrLtPXLkCUyTjwBvq",
  "key3": "v2WrKfhy7Y8ckqtWysSSm6b5U6SW62Vj43LiDNjfWuS1nzDyoHTWG6mnStPeiCQdovo3fDnqEm1h8ZPgG2kHJNe",
  "key4": "F7oHKu3PR8MToeTwrjQCmgKnpp4y6Gr2mtkQHSUjQ7T9jc8GTyrKq8oK3gy4XfNTSVqjF5bctamu9oNhYjbjJEU",
  "key5": "4nmjtjWQ6Lm24ncmpTUjpdJUHBZF64APbmjcjyxbwAC8UPeryZsw5AXfMUyFHNDySqFWhtszb4Q4a6vfHnATaxtF",
  "key6": "5nUa7DQwgYpFPkk7e3SAKfwRMNCj7MnWhJsnvudqyfrKnESp5buC2npgLTScSAvMhGn7ZtzbavGiurGmeRnp8kwS",
  "key7": "3kFrrKToJZrsRG2vndZLDus66XhHHworoxGMrVP2RD4uGtd7DLiUd3j8FbsmpWSuBw8MiCxrjh7hU2er1xLmAYk5",
  "key8": "4iks2LuoW2GCMN3KBJ6uj1JdCRtaxcsL7EHhk5Tu6Ehss64v4ngof1xyyHaCBsGjb9je95agtjisBGwdFGktWD4B",
  "key9": "5yUqFQqt5DmFt8aqXa7t76r3U7SAH5sEVryrJb8LbVoc2rM8bdeNmT7YtYH1DSkJ2ArZF6tL8x4dZSWjc8yiYCtX",
  "key10": "5U5nUXBAxjWFqZMSS8sYhbvZzV5JufzYRDEktkd3VSdCoZ4s14gpcjBmE7pTQfKS6Nq9amjCeMwy6cUW87oMYYGE",
  "key11": "4fN2oQByt1LVATiFBw3KPm8MDfqcYBfqUUPpk3xvhvoeZfhdMUsvo8BUzgKT8j7eQWvuTBXgqN4TU7sTDj3fSPUX",
  "key12": "4EFKb6uy7DWdymgiUXikKicM6mXbQwEZ3Kw7DstsC5wDUfYBYFiubHy7htaLzPTPkJ2RDgWyR6avgmFMe4Q83erh",
  "key13": "5hJrjx6THqSP8rxeoP8aCq6hZfHN8yskynEWepXtxCSFJoXFdKiSRKwa16naKJf242emjfKobHZFScuGVJvpJZis",
  "key14": "4vfjdwzgBPrzh5S7YGLCB5xCt8MTn7TDpi1UqwFS3DtCFu1a5UVgUc84ge9Ec9Xij3iseSfyhR57AsMoU7Rfg3EZ",
  "key15": "TJuEE3uCr2f9fgWwNywfqPgQqjfkuWvGF3ifexEhapxi1z6HzEictUodEqZRZmhaLyCEjXjBxQvhiLryhgYWa38",
  "key16": "5Pj3X71mytFiU3SZJWHzfZqsGvPq7yvhbsjjopcEnXJBpcZJrBrk4nDt3LV9XTf1VHgPS97V9AUhnHqnKkJFmfU7",
  "key17": "5VjoWSjHSbBTKyXetoRYNnkzJCzc4UHsZRyk7rfAMqeVFCRqXgUv4L6nbSpaXyDCP2KGH9mfZJHS36tXg3TvvBNS",
  "key18": "mHXUg5XpViAJcH9pQufUS55NXw6s2BLfVsmnQLynAUq5uHuwzbHtkHsWsfuSSMT2crVmsXmmYEAqApon5U7mvgX",
  "key19": "5YLZ2iiE7z5SMUWKA2KMfCCfcphYNLic2vb7D7UfyKDjsGk2szLUsuRjpjSjuoPD8Qmiv79dwS7bRENUVi9ex6SU",
  "key20": "4FaP8jgqr1tXbrYsZkz6hTvcsi2onVADz6Srz8wHg2UiVZJmKToPrhrP6swn1gUKXr6f9he1uq6Ay2aUStNL4UBi",
  "key21": "2jAVS57cMv7Z5gBEqnqqU7nV9QJFXiSHdJKieXYSdVfmRHM91tjrLHSHZYucziLp1wLodzk38oAGp5HnFH5g64yB",
  "key22": "2HnZ9SXTHyMio7X9xUkGg7qpgwQ4iR3F4Ab3TsJPBR2LEczNQu6WLSoy7AyBGBSSFjNaKih7KfwbYvZ7E983AD3j",
  "key23": "igXQnNGahiMAMhw1BE8gJxpaMCXWdWtBMWgfMSyNtYJfVBBUHqFq2o5yEUw4UjmZosxBcAst3zebfyTz3mWkK53",
  "key24": "4DkjrpNGxdpVQ8r51BEcc7ftkz7TRbbX5VdyN41JPKS5JzNuRza5mHm3CA3BDCZTtjAdpKmahYkVroWQ85o76oiz",
  "key25": "2QkfdBt6B1oJLv5u6BGKZ7HGbm9Vi3qvyMRmmi6vEgskzq2tyrnrvR87s4HjfpwyhKaD5NYUJ1DwGzMeHade6qCb",
  "key26": "399bBuxLSLzAvoFK3ZTnJgnLPxEvJb2s6RS2D2bZ77QFUb78KcEZA2kUCctiDzxGCUdsoqDmvXQ4kA2qD7FRw2aN",
  "key27": "5Hpxhm7eshdsztVcmyAaKX8aLwFhV4Pgeg9TgPzRvSHveCLrb9RqS1f43k1xu9jqMVYzq4HZnQVQ2dd9i8DY8v9f",
  "key28": "431CjJ9kPpePio2ivocSXMmQeN2VFRGBBLj8XNh4GGpaQmidnV9GRaMdt3gXmSFgH5gc6CePzoR3Zt3nugxGVX1P",
  "key29": "Asevqdi6fyUUtimWGRRe97BEBESrReJKHuTSL5Z3fdXagfuaBJRiiKNk8s9dvGtrfYN38S6zz2cwu38HnXPnCaU",
  "key30": "Yn7a4u9KYmzFpXLVxhgtpQW5rduAAp3MqV7fWEbPDcNnNTUVmgmzVFVuaVocDqsqBpo2LsWSPvGiVFV3AtAdYay",
  "key31": "565tRruxU1BGBnohAt5JW7ZbcvMfcGQ27Mm7EqNHZdU7b1pJbRh6QTxSguNXNTu6Rw5m2WoaeoJ1ycZCcxKwZnrk",
  "key32": "2Ee6Em6MYDSGXrSKAe1pBfw54wnUa2x5LGuZkXcLnQqtUq1unWsZ3vbTu8LPENH1s7y9351u4mhkaaEDRzmke3gd",
  "key33": "39aNqW7vNKVh8T3ghbdnfB9YdfwYWSdrixYekjEPxbbrWnG5mtkXgd1ChdKqWFSdZYGpihjKEAZaFWfZgyggqc5v",
  "key34": "2CEswSszQvyjzjQwcpx2wztcZhTVSPt6vSeSDMAaRvqNKiN871yPGsLRcRSpN6J2qHcBZrKF2DSzJiB9kmnZPCtq",
  "key35": "2Ntx32gCNkS7mTWWAnG9eZZeLaMQ2wL8ma2t1JHpijjUvcnKT4Y12zyYpjDFPFwgkRmau5kge3nDCQjgoAM6PPfi",
  "key36": "iFrgEDiMU4sjsgvn6p1YLZPS5SWEGiqqKYULCZz8YThq6HdEAJHhuCC6tUEVjcdeVH8izf3V35Ch2ZddXTnPLs5",
  "key37": "5U3uqX8noSMMfp4JAve29PJ4HNTcvdBwjqzSTrCkRE6sb9jDwCFpjK6TVJNyqiKnS9fdg3ehK2yH2Wdib4hRoBd6",
  "key38": "FZ1zBC8AonNm9rrjhNGcBa3C25Y7MkWKbMecjSHEzoPJN3jzWLTVYcwuG3EPAVRoSD1nr2Go7ebuvLDTPuqT3yM",
  "key39": "FyU6MUgJddEERetxhQxEC9oeFUMHkXeoAFeDvthUUkm39k3hdnXzQixmkuDUJQfPXq7jjU8DTAE9tAVppEb7q5j",
  "key40": "3J4NCYaZRXD9EgZ9MRrByWXjeHac1MB9gNVaJH3h1yXvmVdxukHLUBpBJgRFkokcGMyhNsFzhCLC5DRcbGZzn23C",
  "key41": "msxRvrCuScAuorAe5L5uQcHT5JxeP2WgfryHuz9kaoSsgzX5t6mojghA7eTck3riX3rp3MgTAUw6g76XXfSkZgs",
  "key42": "5yd9XkpJ8LkewyCC4ZD7o25AmBctbkFzYPaAL3UxH5mWoFjJ34dmMKLPY9S2gwVCbqcuwHV5YJdNH3GgvPk9EhsR",
  "key43": "4ZQkD1cfcHCiiz1rY6csMR45qj1PbVyad3nNQtSqNpMPRqXJc7Zqw6UUma5XCeGSWDuqr34ci5qbAfFvn7EgmfpD",
  "key44": "RkrfDfdnu3WdscCbh2ay79dGto43a1FPJGdLGsFABQ3YCTU7hneU9hhxFi2esAgYZ9SkF99QXUPwHKkbkU2fQMA",
  "key45": "wqPioi7g3sUhrm5947sivoZZSoUT7FR4Ti5PLFZKenrTu2j4M4Rfskt9sSNrSLaG5td63j41uYgZoEG7MZxPoYx",
  "key46": "5VM18UvP5rzwsCFQuNPTKD47Fp8DousiV24W3K1azVdAU81D3nbVYCPaSVZPHRtWZZvF3SeBKNZ6uvvsZvsiY5Gr"
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
