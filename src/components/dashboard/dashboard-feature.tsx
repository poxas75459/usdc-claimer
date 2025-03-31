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
    "5y4A61s9LJtY8BGkPqZigzKd8eCMwGidCpkcg2Wp7YkffVjqYcQAzrrUUpBELuu8M9Bk1hkUnJzykG8JvUG8Aqfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V2K2LB8zgnyi9Acmw6wiAsvVmsXqCAD2wUxPvRy5jdMg3wpCvEEbBeKdzwEEgCcG6HysAzA6P51asRWrusim3iZ",
  "key1": "2R3ZGXU1SSQDSn97UiAGZqinjvQcNGujbeyewtXU9iGXEz3jrF2RStoA32aUEW84Wrz7EkxkZeBVBMUDVEjzxKTQ",
  "key2": "3odnhjyfRPSMTRv35hE7fW6SoaEYnw6GKLzPcaM6f1gzSEbdqp5BPTeK9wCJT745NYA7ndBrA7mceMapx7eTbkRo",
  "key3": "5ar9PgjvrAeHnCmdinDAs5ZmbYrBVKscsrij7zZ3BAtrRJrGSJnZY7oKoz9C4w3NqErwtW6VbZx6YbJVBdBdBunV",
  "key4": "3XmJBUZmDe6cXdL1B4WVmkoAj8Li4QTn9in2R5vCGJjHPbKcWz81xk6voozGM9CTS9g2cpcxGtrs3hhTYnnfc4jH",
  "key5": "DAdB7bu1gxvBnqYFNaJ5n4xja56CoUTM4zFayfJA1yENbAH54WEWZ7G3mL1pnU6N59dMM6vmu4vJScdRLLRAYSq",
  "key6": "3cT5yWhXrm4bJGjLeWRdQEgQuUjYizUPap7exgKmrdsz7sWvpM75VL4mnRR9rJb8JWMiNJMxrPvmTpQioWLjtNJM",
  "key7": "5VXRcTziGWCVArSKfFyiGMjp2yCh3ViSw8DN14baL7TjYWMiva6XWkpw6218wg1xHWg7FSMswpxYgTvz4ne13zmo",
  "key8": "2TPArrBkD7ejkaS1UJsi1PUyZX5RDgWFnrbWRJMirWAVbfNZACKo94KqNcrNDmd6oMaTSxkaJ3NujTadY31fkdW9",
  "key9": "pTQVhixoQeidJ6oZExR4hFQMaRKKVtmAFfMd9sHsG1WXf5PyDBXfehhGVw9sco91zz2V9H5a535T9CRXBKRQzDi",
  "key10": "4bMud9XE9mLanAh1jXdYC49m6hH9gQ2BP6avAMFcGiqZeYQ29gcgCVHdHvRD1ccVfLAgkyw6TUgHCLUy8GDR93aX",
  "key11": "3cV6n1eqpistkiMaocqwu5gdKhUfQQA7fvfPGMvqMJdWc5mqV9DLVbK2zQxjxvHTeoxCNDniFEuYX4mCUBeHdFqC",
  "key12": "3kDKkeMx4T9xL9ArMTL3fau1BkjiTbWymghWnDFVENU8L8Tg2n97jTvgkKNjkczGEgRQdrG9H9aLN1UQSTT6Xpga",
  "key13": "VtJbsV5mGwRQtSUJBrmcUKf4Dm8ZkhVCqAJEprv4hZ9P9GiQkq1YHRjEkgDo6mUnQVFAWZDLsnD4H6XAq7snGwf",
  "key14": "K9QSX21DuYQ3DxWsj3sP1AMPGLt5UBkEo2VgK7Eoooht5kKWUTS8aGWf77zYKcr3J3FqE7URsa71JB3PpvyHo51",
  "key15": "2r3jFfQhcFtBUJRY1Z1RwrzspcxQuyUFwK9wNtyrjsySBvnEGRKuS6FVaD7sdoh2NBVJ28nuWdCRVHRSDmGWd45p",
  "key16": "5ivvoPza3gzLTZkYFASGhaodMgSUCxjRizKPTKQB1ufgyPSxSFHmxFemzM7PbWT95BL29uP5fdQB6PcdzVLjiqd7",
  "key17": "5fgTDQV2jnNMj3cWfSvFt7d6ZE5XQrG5Ut1BSp2YHKRedtoPSGKvLiUEdAYecZJ7NgQQoY4zL18smwbCFyjHUYcg",
  "key18": "34PgBtWkHTiN8MgxeuRiSH8WkEddczLk2qcrJUnqy2pZa6KGNtbdkHzkj158XsRk1dqhTbuxHGeB3bCPSi7ZwqdS",
  "key19": "5fuVndoxR5zC5p2YLuEhMjcLbHhednz8wnKSeX2hfMWAsWUbe5jt8V81xh994zX57cUtdCQbyHLoyNHbuxz9tM81",
  "key20": "2jGV6E4gXLQUSUKAkWSBH9ZWJCvgbha2cCxLdTnt8k9sstXJkYrxxCkwttKsLvJxQcAK1TFX2jUp7sTGkdvMJqnF",
  "key21": "4abP9CPe7QbueK92uUSBCKYKoer7cKQexPudSAfwgcicBznFrjNayWSgz2ptNrRDSuLU6kTm5sv9hoL22DCxiaqG",
  "key22": "4vtxGofQwt98jrGhqCGD6R5ZVnoE3XHUq4bNGvVr5wtEJGKuWojGkVdPZbhnq73T5yDP8QsBY3cUd9uzHS87unaC",
  "key23": "4erVDnnLeb6LKAjtAtx3e8RRw4oifotJNrn7BWxv4BCGr1i3dfjEvRW9BrXUjB9GMsWE3AA4j67M5KUoPGsV1L1o",
  "key24": "5ymQcm8XQkWjHw5i77sSqwewr172LutqV2NTyyA4taAnS9VXz6Gz5Q6BMESmb4uuB2S1L7C5oEnH72AkF5XK2hyu",
  "key25": "5jfx23iLKpPwR9uXSKhTR4irB2VVhYa5XTfEPPYiupxjBAgbcMo5VTvD6E4ji4qysLi86PQ3PUm6zQdk78nBzdmM",
  "key26": "JCJNtrMSALezZUHJkqRNc5CmtSUDi5WLZxbtGre9hfv6zMiyQKyutDhiMAMEyAaomQ9mS7dK9j6iVqsWthJ1Nut",
  "key27": "f2fuyLxmHDgj3hfsrJFRSeq1EgXvkzDo37gWG88mvPwMLFWvdzgMXrYufecVT5it4N3ZC6fyvDmqrrScQ1frbap",
  "key28": "d9xUGRuhKfShTZpm3Ldeb3m1sRvU3oBAQQeUyhjJyiCtxC4oW1sD5bp5NCHKoCgV7ptcBA6oWkWRkMMkCEhnf6B",
  "key29": "mHtqeP6bCoXo9Y5AAzi6xmVACU28H3JQZC42y2kg3kBaBdcm33pruUQwwBFKWrc6iV1y3sW6JLLwbntrYvx9B2w",
  "key30": "266dpqMBfgcidH5bUw4v1yAzmrFFNziUM31ixfbc9fCJGgQCx1ouWzApJSBvqVhpBaNrnm9BsNW28tr2N7oELJYK",
  "key31": "3J5eGGc5vnoMrEkywynUm8ifVSL5CceVCoWmoB16ErWA9huQrMBRfh6RQkZf3B6W1LsQAPEbJejhPFrGvjqE9EcN",
  "key32": "3LGy899c4tqV1cpYVDb6TdR3nZhm4s2Mp6CPd6LfDHp9eCsR9ETymyAJGRRg5Z7Zeef1JvV66MiBhJB6Bd3NTJMx",
  "key33": "2y7hdsHyDQmSWfnfWK5TjVVGsVj9HhpPQtw7crCRg1P1G8EtbwUUYZEybW7wb9yNuPD15ZWimXviK3bSpa8BoPxC",
  "key34": "2KuFYnpdYk9bHDtqUYM3LKikWwiBpUnJ6CcWpTiTgsT1ugc1iVstu3QKCPx3Vvxmj61Bo9o7981WB85CAQT7f7SM",
  "key35": "9kV6oWEFuKjBVWppUHMMfAHyZnANs7LUwikj4avwWgFV5u1DeUbyLbF3XGBe8oShFbqtbqDC7A4BmjyMExr7BRk",
  "key36": "4ces4hUrE25idQvV6QsdFwRJUmeyCd7RpALMWLpPQqn8NU2sLftg1XW2KrDn9aCQTFYxWJ1icwuvRuQRd8Y3r45B",
  "key37": "bozLQebkuYiBL3rEfdX9rWkCAJ6tN3JETnCJcajUBGv6GFoiBHAgG6gEsqppkn5QXxi3ZYMDRt9L6ztCE2qUFm1",
  "key38": "3Z5TSV3qDB82urgqnJdaHzanFM1gAYtm8FwgYCdFB3Rojr7sTdBag7U5AZeNXPhTcsXrgNn2nwL534cR6Sp8WQXX",
  "key39": "2WwNP7rD9TWuwt4w3qpBA3GtVkKftYCJaxDNgr7gKEmBWhqfQyAruHCJ2VqB9hdwR3uuK54WtJapLm2Yjm6ok1Dx",
  "key40": "4HqLnCFcYhYQ4T8rpFHLdnrn4LuhzTRKiTQCbXnsZkphq53VDYWzFKTcNLQuZezyt1av3ZkgqRtP59DcsGiZeKQP",
  "key41": "5MRN681sQGuExxyBPVgyCojC5hGsHCZBrVsH6HBRG9bfs8x4XLF9sbaszfWRTdNHx94385x1UtsBDjSDeHFrC565",
  "key42": "2VuJfFsBKWqNZBsf9ymEsL5xEUX9Q8Vkqy6jXptVUmZRfGVmVkna8xrgBFQhcMfyDPxsJUcjoSbftrSvsJVGir7h",
  "key43": "5GMdyLUvPxgx7S7QbcxbW1NFSeGzq62izEYpLCxGv9SZguPZEE6sipG7Gbhb6i2BsoghYEmcGqY4sahniwRmpNxX",
  "key44": "2Xkc7gxg4LRS7qWUYtJGS3aPmQ4XCSW8uWzEDdjsi1TJzSpVinom2zMaoBxLXMhGteF4L9HdDERzMNqf8Q8Au5wu",
  "key45": "591FA8fe6FQ2UwLd337iSDVZvXanEQfBpNV4Ppr3Fj272a498GYc2CVBCTMojNMWg2TnRWGPfP4JQDw9jihQsbwU",
  "key46": "3K6ZuCECBJV12YLety2SygJ6C5XdJJsLZwnCpeirhj76raQukbRhpnHLUQBzXP6GAK1L9ksUmt7C4Wi332Xysr5x",
  "key47": "2op2gn8eYFFiYEBW14AkiqYVF5LgYJCMzLLzJWVsQXxMWZ9SrEXbo9C8sU2oGGx8FwssraeLcpfvMhUCCkhtVKEc"
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
