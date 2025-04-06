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
    "5rUTbr1FhddvAvsV4UPJuntwmmq2t4j5xWB8NxwW6dCofGB3k9jzRmefnKsUFZXZ5LBDLLeDMa6A5Ycov2iPWm9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Prn4gdiqxyMZykAHfouxdtcE6PKwXef8R3c3mohXa1mTJ7957vzRsUiiGhfrHRvEdR1LDDSBnwDqySmi1UwGPCc",
  "key1": "8g819svSSMF9UHKAs2GxyphSGdutbheLaVSyNKrovMev7Zq37UvZhHTj2nMUpMA9VFCcCoShwSBU4xhxkozqrsc",
  "key2": "2FPVbpFiUNANBpTKtHR2f2suoZbkkvA5eWeDBa1Ln8cCYwvJ83yZ2CPWLNAQ1x2jbvmfv6Rux9KfKh6oZXCxJbm2",
  "key3": "2wLcKbUedmQ6V1JLKjbVGkS8DLBJEZrTkffeCnGA4igMSubpoYGwCVvZ5P4WwCpvthq79cKXjz9XUfoW8iFLawDJ",
  "key4": "54hYivnTNrcD9pMZCBysvFoRGhaq123jB9NkvG3m8uCkhp8j4XvM43GQUvWH1cE91j2SLCRMdCF3JgiesqaWGJKJ",
  "key5": "2E9wgA6QMTfZsjrTXT9pBNLWt21pb37NSe9SSWDDG2HfQdz22eP1GTkRdDyUtatPcojauASWcrTkJbssNiPtwEZW",
  "key6": "3LLjFFuAvQpqPvU7BHbw1QpVKhevFBqH29eksdiadR5cePX5idEW92u2dbpVviSYwPxE4hkt6EwDaxpGott13eZr",
  "key7": "2uiJviirBePw9h2PGn4uc3pA3X83wGqZjgqdgu5tWyGR6pFpASWRZagsXLkP4zwSEW1xdsk1YDHA3rc3FDDbGbxz",
  "key8": "2x2iiT1tvuzmwu1ZJbyQ1QK936gtaXx1uJS1AgQmnnpUatLq6pHwtQcxQCY6ZqJ269BjhvJXuv5SeekGR4HgM7Mn",
  "key9": "54rrKq9fswnMR3WHbtgzs4dsxDWGzQCUVcL2BBye7YEmhsy5n2RbcJqjnd2JCPEPKoRs2D3L2HGbjfxhcY65ezsC",
  "key10": "4JiKk8agzAgdZNyDuZyrGZDCPUhSjbAzqzdEifqc8Q9E8ScyXn7j8fDgAZ3XDYFHtc6DJgL9w6Knimo4M3eUXW1f",
  "key11": "5zVMN13vYc8KkNwKD2ndbdrQDK5GE64YiG23fShjkWzepAt1i75KUgTXpMZyBXLRb6vhEr5WnCAtDnzHxEKAB9b2",
  "key12": "39kn2fu9HdGrqXRm1kxBFuE92ZnZNTq1YM6D5sUPupy6H8fvTZnjZo5aLtVDNv8En8e3Xd5XxGfqs25sya1DpQwm",
  "key13": "35VQhNEUAidDvafJhFiJNuXVh4BKqC2CFhnF5XgzoYG6PY2GNLixYc44c2wHPdhfbVZ4FWGE89ggxuG5tKMz8a8g",
  "key14": "2HRTvyrEzjhKQi5VXn9X21uJ9P1K3G6x6Djv3tQWjrDCWEP2NLL7JG7bi4zDeAqHBAhPVS9muGqc46xedFA7z5ny",
  "key15": "Tm9ckW8mkSXC5bdSiikiorMAjm3xiGwxvwuthHgdnftewWUC3PGkifVH78yz7LpcotiQBxvwezgPZvd1vsA8y6m",
  "key16": "26vTD8SxQ7rvqWtZ2hhVirp7tex69dVC13YgwBwCPtJa9ReRq22DEf4gY2ZFN69ELhybD2AVhnPCTeLT7sQnVCZZ",
  "key17": "3ivXZwVLUjEgrBpmHYybSGaBDDszXsAMgWZrpENBeRuNKmrMc2qtEpuabhL92AoJtBGkqbFCx5Wx42AQrXYATkYB",
  "key18": "2CEm42kw3f2GKrW78EXvFSbFv4sdAiypRezeNmDNMT8yb9mJJcbd8YiqW1nLwbyzLDAvYXoyqiuXbeka73jnt197",
  "key19": "41nH2jGbFpyzkQdydwSNQ8gdJoBs1cAVrjn4Y51gixuUMW5kAcZ4DNoY4TGTNhLHsm7BYkiNUEZUCJEFwLZ5ZHCV",
  "key20": "67j4hiEqp8G7nmn6CMNEqjF8FLHpqK547rKa8ZNrfwJSGdEjPEFmqHT25oCRzWuh5bxiHYDKmZPacq9V1ZyzLrd4",
  "key21": "5BM65WZv4RRbmKMfxMCTwJYqxqNskzNCvSwBmjBNgLRbtwyqezkej4WfxSVXAfnQCmG8jFb5jW8k41qs4V5TuYHq",
  "key22": "4RarGLKEituT5fSSz18Jq1aunzHXKaELqig6J5Ctj4RTgSgkCqgzoG9u9SpY1QT9nwanXnZXhKWtcVrGDu37cbMU",
  "key23": "2D1WAP7Mb4oicFpP63DYMATaCesg6iUqKV3rg5haxd3r81Staf2mCJLzXMvMWCngB68Nc9TVb3hsxZgx3t82CvJL",
  "key24": "RCfLmLmxBNydvaFRXXdwoWt2fFevXF3vYRK1Ujkh8FuCwyi2icVNUdVHgV4iKFLUDdMe7ZCaX9FFGpCQGem3xqc",
  "key25": "617PZcrMdQLVYEwgPoQLwkAVN2RaCtJFqGvD3J7NfqgUfR7Fsxg6VqZQTXcpea7ja8TVpwWA4UryXtAm5U3ALsae",
  "key26": "2RDofrMAvirmcyGyRKbCnSY6v1FYZA4dUBVREyyX29nEDn6WuyiccajP81B8z1iAs5SZqxTzixcDyLFevxoEzLuw",
  "key27": "3mpw61XqA4m2ZJybD4jE4sfwcEAR24VCrKhzn3J3L2GJzChXxg9pzqNZAczyQpLKqqJFKAEHMRij5g5Sn8RVAD3y",
  "key28": "5BwRfKtPNvnZYWGYBu3cKj5kekWREtVASTNas5KHGzLHFm2hoLLLRrtEJhS8Ksqu8uMLVRZheieu7tPRs9v6Jc9C",
  "key29": "gzD9eFpK9B4Ad1RKDa4YNk5YoswTbKAGgRT4zaWvzdCLeM6sNLnhizsyaszgKpfp9doNfvbuwPsnKtZ98UCfYBi",
  "key30": "4KusL1aYoFUftTyRGooe3dDApQeTy7qC47EUFYwpo2F7hxdpqXQNgW1c2xL8Pjyp3F5LM2P3ENQ34jCHe8FeNDU",
  "key31": "2LPT7UwwRmXtPZq6PyiBKdPqXVtVeeyLatwcWWFa4Kx2e4WWCJhv4unVjgUoDHsTKazzM3TT2MKWUJNozda9tS5D",
  "key32": "5fxUrJn5rvhVGYMvNyCGyYP3fvcBqYRbkBH8Xfe4n5DhbL7UrS9VNz3m2PjiLtHhtdtt5KMYX4aVq4BTJk1yBKJd",
  "key33": "2bfbsTEaKV9wBrFFJynKW1dLAvf8LNxhqe5CJx5SQwy4VpR4sFNBHq93gAHDKTVerCXkwe1gQn39ZJxRLrC3Kv4u",
  "key34": "2o5qyn6jVYYpcPfqhiunEGq9K1oYjEv8ivyrX9YpJtbP2f6BVUb3i3kxjM9cxzv396puWEh1SqSQc3qAoJqSgZrh",
  "key35": "3m9jnU15MUygAVugGr2sgadgfXyfcmN5pdW2QgwAEs5Zqnc2E6opoj2iaNqtMSYVRdp8mHR3LoVV8vJWT23Zbzpo",
  "key36": "8N5498dVaEoMZMbemdejwopRvZitAJB2L5zWwNjDiqyLV9Z1RmBJSihNEgNnyLe998ji93DS936ShaWjne2t9Tq",
  "key37": "2FuqKkpGZb24WA6EAJBred8YCDMTcPQjpQw9FvD7nzNGrLCeGirpSzr1f2sEmp1GP2WfYhZfuDwrGZSxMzicFS42",
  "key38": "B3obCnJf8f5Wc3vctsvp9vvJQcLzStEP5V6L4TktEfbMdjAVYYU2emtWnLMFGHvgPrguV3NQvRWcw8x7XpZvDTd",
  "key39": "31BDgTBR4k67dNLXAtE1ALy3dEaxFta3qmR1FjoYvWxTKNE9qcinF8SphRRAzg15zYvB4Ej2zzpxDvyJ1UM5XeE2",
  "key40": "4TMHiE2CPinhgqJDBBb9b7uBQU4i4GHaNa9bzCuLQLgJbmCmTjfjF4suWYfWv5KZ1zWe37nx8T64RrN4JfG53W63",
  "key41": "22vDs2vRWM5RH2issttL1NVhcqJzNnJS4CiTb1qENmP922hfC9FbWinWJcTtMFA3j7g8KZdzoeHbxAc8whTNWnBb",
  "key42": "ZyKNvwDnq5aLdc34Zv73VMys7LSZLfD5Lup8n8Nv4ZkgoaQMGAvZF4c7KFWijxKNEdrtn4URCESHYuggV7NePTi",
  "key43": "uFAfaTDVuiTVHKoVZ3u24djq6P9tQP8k3rQwsq772AyGVkMCbMdwPTFddeUbMysC4nPHmn8NJdFney7rnz6pYDW",
  "key44": "3QoTeAoSGBSbLamfBTjv7gT9ftVMwVksFhsu9bJ6EhvRmvymSmwQmcqu7yCD9SSeYcFxjoyBMGu6mQxGpF18GfLd",
  "key45": "3sVrRp11Qx1S9uo8WD8sWXEF8TYxhfYyJpgsAgfsG5pQvUwAR9aPTYcoXWZMacikYwfQx7bqTDKJuReZRxWE8qhL",
  "key46": "4ZB72L4xZHpeoMx83AnbadXGpxRkptDvoSe8MytehEnjiFosM9RqhB4aRgbvLb246q63bPK2ZHbQgQnWTXfKcVE4",
  "key47": "42HGJd8phhL7MUUxHBpbmz4Meq2xUgTwdUxAj1W18ZJvubcyaYJcHHt4JUMVsTg43wueXtsJh5EBD2eGEd4WRVTW",
  "key48": "2oJQjNL24KH7csfKwhpqRnyBuduLtgZxFSrrXxMEUG9o9Qr46qvE9L3Jr3hzDez63DCQz2S6hf7LD7AWFvaGwXFP",
  "key49": "2SQikts3hVFsGnYacCMFW5h8KX7GGCeKvuBpcuosWK3ZD3n8ebxSFYmHg4efZyJokvFkPzXaWzhk2Tix27shXvMM"
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
