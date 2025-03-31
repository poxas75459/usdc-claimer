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
    "4Gm9CbSFyaUmazw32DptfBL17ndpz1i982L4QwZN3FVubY3JjD5z1yaudbxhQnhdXr2ZveLhF9ZB9xMaDgfSnvV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eud72p9WrpbnV2gZx4USjCrtYkFTpLAzxNWSVvZHJymcy3CyVtfwqF7D9XZGuJfUpDrwu5kCxMXppvBWgU76xd",
  "key1": "5h4GdJPwGTWaz8KNwjv2AX3cGC2HJZ1M9duTqUvTQ5TTT5UDrRXXL9NosWhZLmQsmKQz67YSsf1tUYQjwAz6u8TL",
  "key2": "3Rn4uqN9NsH4c3idkQc1BsWm7Wrmf6pc2Bz8i2xPyF5tVc8SE52XWhtML5uJsQYChjEHf2rThHQWn29Xjo84zMFi",
  "key3": "5ndbbJcwCL5RXRpNpfa9W4Go9J48UUxToExAGSQ8TBSEVSwtwtndVo85XprXoWJaE9eGeFVsrVsD7PGdYVT5Hpjr",
  "key4": "5jfFRVyZXWQUj4EY1NZ3q2GcJJX6moSunMisSJcpaoLLvWm14CyTPBYNsh6aQjxcpdYCur7VkrDw6Jff3w4Ue8i8",
  "key5": "HZXsxAUMTmmqHTQas5UPP1btiCdD13yLm2qQgJAsrLsiYzgGiUZbzj3YnexTkq7HMwL1BiyjeXxGNGyHokUHCpw",
  "key6": "S5XMiUtLbFKBL95tcL8jkHHeSRK3qwrsWgzn4ugWydaDw96Dumvfp3R56QgLjoMDkBJa9Ruz76WTTHA8i6JhNSG",
  "key7": "4zgYiZf7TYrrEFDiK1u8gaMoed6HmsKKEtPbaqb1UCUusYZFsXVzXBo9hz1fywLrf3RjrZK1CXkQRfovfg6BuN7J",
  "key8": "5gCFTRgmepWkrSqCLcGrxxhAokhym3jWMk9EX4nEW9oe8LZ1rWoPncZnS6inJbxQoZJi6C9qjTg5rneU7Z1TwqVp",
  "key9": "5ECHFkDwv69xExtAyT4b8bLTVghgqVpRf54VXpvJ5gCtjY2zyNLhnwHTgWf3YATPn1n7SKbasvxzrcSzwmfK26yB",
  "key10": "4e88ssaNnddmxbEfAeCZtvdGoZaRCcnsgQzMMW5CgH7QHreaQw5DWEKt1WdCJ9pQnT3AJPo5Ke4sAGhwfPRNTTRF",
  "key11": "c6aEdW66puY6g9NMJebkUM3AaQreCRnXVp5mhFbTVTgd2ZutUMhV7ncRhj7W8aLd11ShXUDHZq5VjcbPC8NQY4Q",
  "key12": "3X9P9kyHM74iJHPPgBK6iUVqMzabARxBUgVssCnQxsT1LwhX1ETxZiuykgyJbJ1qfHV656ApTKm37ohGgNGQC5jf",
  "key13": "3f99aV2gqnXu7UaY8iJx8gvooTYpbRLK2GWBv7bzq7g4j5A9AXWHiGrYYxx2mP3T7BbZeUrECDPZthjcJusPequw",
  "key14": "52USsyHxPbJZt6MnFYx2wSJzqiaVmM22euQoyjMJ4eGJ7xe7VpS3qGBnRqCGoBDknpBUa2yH6CsrBg7fhSmghMhg",
  "key15": "7KCtNguSNSzZvrdabSKz641w7saFVZ3paL6jMJx822uJNPiFUNqKBiYfq5hvKNbfggcMrTszdd7cRMjs1eJRaA8",
  "key16": "31e6ZZkRx3Knq4iwqq72CUem8ypbvnNT5KELxRch5bXjyP9vgRpQb1vShpRbzmiacQkyLZcAZHHpmyrawWAxKCDW",
  "key17": "51qxBA2hb1XhAEWVSe9nDE4qR1k8YHfg1hVz3Nu1YD9wBryNtZjauhrP57XUpGf6VAGDp9krPDXFY2LDrvGaNM5w",
  "key18": "4T5PyZVyHU7ffx3NhgRTbq7owZSQEwYTAqu2RZ8MyebzSiUj4yTQL8ZprGtZhHGvRZKU7c1oPa22QG14nKoA8kSj",
  "key19": "deP5XgJP6PZxLrZtAF3z2kdFsa4L9ssVEEphm88oLb2dnJpTNve8JhYkVAceP4SMmD7n3jvzmcF3sHdte7wTv42",
  "key20": "4NRYSAkEo7KcP32UbT9HQh9r8HB3WvvAnCPUjsgmamMLaMBUNwxN4F9JsVr39MgAkYK4BKLB53yhT9252qBFnAey",
  "key21": "273JgzsnrgpRW9ZiddMZttXu7XbYTjwfYazpWo1LGNX5wDWmsS1EYhRRs7v19SHxnm16YVFfGwShwzcJ91UsADLi",
  "key22": "AQNVPxcy5pzticCA2ZizjJTvxtPpjWDur55siGfXakJm31fT2oWBFvS92HkbSsdztVRfe8GJ2PFiFuY3RbZMAGW",
  "key23": "4PSKnrcAGFmNyVbU5RuNhh2mCMUtmJJQembyHx8SiZUmsbjTr9ggYNRUVaF8yqPQExovaeqYdgUqEE6fcrRhu3F7",
  "key24": "33s41exm4rRznJwpreE8VSJnXM2ULpc7qWRWe3HytGxXMdcp4CyoZ5aYy5i34272iGJ5tFtBaRnJDaVLosJ78cRt",
  "key25": "dZadabykdBTtxJAR49AiymQV12T5wwSGNHpFZfweCc98SP4q6NrHBzJT5DNqfLFtdkqNKD5JWqTbdsWtJT258kC",
  "key26": "3web9hyJKpAKXqpuFkw1Z7HBCdyDYtc44ZBtJp1QnwSomGS7sGVKTD8oK4TrKszrFtER96dAykb9E26fkJntjxuR",
  "key27": "2taJjEUC769SrYwrbLj6SYezpgHLsKLSKK5qpYE2tsoFWEyWXyoouUVsivGHDfMLk8Qu2N2zXTc4yc6TSzw2m6yF",
  "key28": "rvgsTjCEz6d7d1t5XTEbjm9ugAAGbx6S6ebeJWHt1FnvWzMERm9vm69kCq6FukXCUdEBCWTaaH3pSZq5UoG9GTC",
  "key29": "5vKG9nF5GxPyEgdE9oNemW6ksJoeK9JJDyF711YZMPkqKgVF532Nq1KdpnVjzJnZ8NrZjkJPA9iX9L7yPGQzNTot",
  "key30": "5taUk3BJSgo63FbE3SK5f8ZSM1eoSNpQywF6TWZ99LtSjqdo2HVncdj64kTVPVK6ieP1hBUvHtrVGf226QYXDvjo",
  "key31": "SUjVb9cuARMM3zJpAjnrL12nNEwBKMczLSFp92uQDPRpStsRgzfFHut623C5kjGL2BA9Kra6x5eMWuFqCn36Wri",
  "key32": "AXLs652N3TWc12afCNori9gkbWCdReugDDPgKvZoxyHoZm3wvtfwgj3ciyCQDTfTwM5iUK5ncpBB2ia57af4M6x",
  "key33": "447aHEqNtfoCtf3SuPmwkskqutVhkNjekUSdKB3mQ1N4J1UpPSEr14bE6sCppZ6VpVYVKAEvuzAJYy9Qm4PmM8r6",
  "key34": "3FLxtfqu8tpx28EgWA3Fz4C4L6qE4kcQJ6kmv4zgDtyovD5aJ4NHmkMNDGWqa9xg7zurZwKUdzPL47QQfShqe2RF",
  "key35": "3cKpbJUzJ7wQHg8Tghz3n6tZpJAhieJF76UNNABvUF8TsVahNEE1VjQUWs1GGo9CFCD3hEwavQja5nBF6Mxh7mEN",
  "key36": "3FB1myNbWrt9vzAZX7SEukVt44RpKRQddJkNxq2sid7svSuvzFP1vMYdoJS9uHsp4eHEEAL9QA9M2bHgaRSGYojy",
  "key37": "BPcAN8XCqQiFdRjraCpQ11mHuYaw6fZtkq9Qc5V6E17aihCKxgUJxazE7MAELh87JQaree8ZqeWFnFBFaKBj96R",
  "key38": "2fvVzV3uFtzke7ry4yArS4ttHyEcWY8RxzGoQwd8gS8pK28gqS8DMDXWvzEno3iEjtQoBr9yL1sv2nExSKvUa36a",
  "key39": "5fCnrwmrHeSgiMeKjJyGCMF2rDMNiMSMXJXCvptqCpirzAjSPhWbi5CLFjRukwhkoy1vxeAt1uyd1AUmVXV8wV3w",
  "key40": "2V2r32xyrKtUwPXEEJvyCMfLNpQU3jREXuJxoFhiu1c7LYKNU1y8LQia7C8YBhmFwV4fw3S4xrwajooqfR3iRmU3",
  "key41": "2C1WLVMy1VFhrtDGuUxK1kcwtQTKkDfHt3LfsnZfcvh154si7EAMFnrKA1JFLxwu3zMKUyR5CDiCNj9J8tiwhRKM",
  "key42": "2ihaZQFR8ciAXH33PnQaafNU6snySSj3emXWKJKZzn4n2Ruiya8hdTupQfLwoZ6jB6KavuzT5PM9ojLCCen7o7PW",
  "key43": "5eqPhNEqCkB4gJot8smx8PwvpYx1EbfkafMqAV2ntb1cA88BBLcYzyLu4cKAaLiXN6M83FU4BEQ3NMBK6wVarrYe",
  "key44": "2zXWVJwJ5WCbfFBL6HagwE2DP8kHtxzSJLetnBHgxLyBUAZzGZxF5o3PxVqpRuDHDcoRq2ZcSZr2yu2YQomw8XCa",
  "key45": "5kPpCjksGtUZfS4JJtdoe1LeD65qfZDTDXpifCvXHB9kxov5mea5NZ1t7itSRhyozUvKnNFPQsd1N3g4x2EFqgWm",
  "key46": "VchKPYswXyCtA712cjNHGYw72mt9zHrMUyyMHBdusc65wLuvMkFenBgKvpRKPKNs3hGXCop9pJtPxEC8SPQBmRn",
  "key47": "5BRN44L7Tf5VMELXMqiUQaUGG4tqQrqYkawPEUiwsdkohL4VxNYrsJFanemPueotFJ1VfSPsrBjqnzyCk3UhuMAr",
  "key48": "5ae9k3GfVn8gsXFsGYKVQL7AVGb8DXKcKW9djaEkP12buuFAEEa9XVvYEhnmKbnGMK8q8LoxMovtJzFGLXKcSoPz"
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
