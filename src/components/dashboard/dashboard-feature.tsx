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
    "4fSEgTPQp91LeiiBS5d3DcqfkPCqDRHus3D67aF6KN7dkRZgcupvpeTK9RDgVc9MWEqF5RWZuCJrqsCBUjk6DKZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y1smYG4mP38iSJvHqjSbuQMXQm8AGxyygwnyJZVK2tCNajAdCF1ifxzCcKoqBDAQL2Lnrae4vzYmP9xJyaYo2du",
  "key1": "2o3BnXcWRHuQfzxNX7pouTgm7hdq8px5HFvNghfxbVYqXLxWVjNb4HupwRdWfLrFTJ7EW6cYeM2hhePf3VRccCte",
  "key2": "1b9dBhriSBuLrosYdyU62op4YqXdfJug84iL3Zz5sziyLkstWMDofdswRRVSci7ov4ARAmzLoXJHeD6BsJEso9J",
  "key3": "irgyHLJrNXcr6dgxLcqedoEgQwz913k4YkBgPxrai7Gjrf5pkaCTxk5jjgWrUuAA8cTidz8xjxPYnwBZp79G4sG",
  "key4": "4R4frTUjGYzYTo5kanqZUTNjLR1iewXTbEXUZc35CnoT4Ckxj5uZoMgkTg3BWWWTjcA9jP6GzmhtJYz2Jh8Syti",
  "key5": "432Sr4B7JAQibNjW1jV41PabsuSxfpUx6yK62KW4oQkZyVfxkmtahQypc7hGgWjCLit112tniMAQjdh4M7sfS9Ps",
  "key6": "3SJAdWv7eidgvtMtp7u9JvB1EEKhEF7VJz7reNNL3kQeu1kdSk7KjLccvnTbLbQi7fCLXE6zf1NM8TaNA93uGHCr",
  "key7": "t2TEnS3azLSwfCTqGj8gfgRk2FRBvd9aTEv8vZjgMw4DT7TWyxhpzqa7sVitbMDoMgXqgCywvkHZcvPvRjRdQWA",
  "key8": "zw6XLhJzqcBG1QdCzD5SdUGobhLx2MTBe75bN3xPwoeZo6ugueVFyUpYuNq75yEvJKNVtoUU4S4a8L4FsDg4xaQ",
  "key9": "2aL1aMgTp9Lkf95Q9UZv7M8YMupfEh3Hn1Hwi8yetaCuhMvpK5JvxfkSXSZgAfdthaEAWtfKreSpKaRk9r5hLEvp",
  "key10": "5dMYbL2fBAKSRiHdqWB2a7fhhuCfMXVKgsjGzG5Q4n52WA3RY9q6TpKE9WfnBUuegjhMY9TjBtsT2NfWURHVYf2h",
  "key11": "5m4QJpT9C8ttdeChTDzjoHudNSmTBu9ZkTSwJMFRX2Q1nS1QP9zn5dgQ8W7Jm5HrMUjMwgpLfSdczG8645Bfyjc5",
  "key12": "5ztBZsuVBfyuPfvuV4QPBz6Gu4CdoseX1Zxwk3wVpSANQafmc9zZ93SS8jWEa9WPqWZq1Jjie7Wxw3o7BSqtGJmg",
  "key13": "3N9EPXFj7XbyujCUMnFvJpZvMFyy6a4zuP1xo22kSPjQrkCVZeJVjjM9NNzcNdcb3ks9g5FWc1pHDB6UvU5FxgD",
  "key14": "2qSBqrWhQ5HHnNhV9P1ysmYX6reBdvQqgiKFdo3TdhuG311yvi3SA1wHjn2w9qP3GBrcSGUgehFn3N5WR8kKhRtj",
  "key15": "4aZ5wJTQ7p6CZP13FCkMt6KooVCR6xXGC1pziPeXzBh7CmMX1s4URG16wwF4tGPjFpKVCib13d34xV5a9apA4kgo",
  "key16": "5GPZtaHC7Wjj4dbzxt4K8XH7ttaehdLUAjLhduKr9VkeuSo7FZzzokR7APnDYVdfe8Fg8i6d5pAEqT16J27hWrNy",
  "key17": "ntiEo27yPfF5r5hyatxTuiF3emruuJGeZk396RYqNNPfSa28kVcCnLiFREtPMnB53dEFks2awJLnmBy81oHqA4B",
  "key18": "pawuewNiCFYxJrQNrtFkjHMfBg6PqvHGYMK3dU1bfuaFLL3ysKkhjMZegoHHzHDWsA7XezWwSZR8sdBsG5GrqSM",
  "key19": "31noQNowde9dNCQ5Kj7na5R3NyovArkvEzvYAxb9SXbs327btjEHd2ykxyBHiZWZwb7KUv4wTqHCqKbvAsXHXXcM",
  "key20": "4a21XKPSzkm9mbnSbzLga8z89tGNv5bG2q7i3XPfVxP6UYz1FEtSRcKkFskn4z9qk3Phj1Kc3vmiBVVbeuMgukX2",
  "key21": "4BnBHbEfJMu63ekXRx7d3XNsLV2WfjXnCDfgty7oyuNFPPqR6fHMkNwcMhuPRijY8xSdjWMPbPrJSseH5dGFX1qP",
  "key22": "15nJT4Wqk8sBsB2tnGmngaJm1qLiX9SvBPFUTshDF8G8Etq5DH5csoZizZJWokhTEEuhf378ctzaeV4aFksygWN",
  "key23": "5bB98muWDQjYksPgtZdtGtMzCWxdjqY35N9QUqMWeQmqJkd4qoKfSLJr7gkzQP2ugcYuWisEiydaroLnZ3tWv4CW",
  "key24": "58Pak1LBXL8R9pG2uaTiViGwJnzecREWYEBzDEEYJZnPvsga6PUKqhEqjX5xPqsk52BZR8r6PJiNTEQvSiPJyD5G",
  "key25": "9HdE2TcjkVFLax4b8xziwZmZUTeSFnUFKhrefH2bHLtwyCGMdSCLE3EYjhtzErMCJrZR3Djr1D2y2ZL9YwoaH4W",
  "key26": "3McrMaVhziw467MdtsW2PT1D1n5sgjEneWpTX2pEVDWSraYj5mcmznFQtEB7g6TGLudSLK4WVvJXGFvJmNWEC55H",
  "key27": "2Gw4jHPf8efZKb6NKzVXMNt5gCse6B876pPzcDfJvqgcqZzm44LGGMka1N2LiEjoK6BLMr2zAHSiEgJhP4h1pM22",
  "key28": "527ckjX2CsLS5ti1FwAwdnptoaNZooC6LkjozVZudXY2cr9d9Lt5zeinGFHGrmcanfC1ZLBUTEjboMZa2yjv65f6",
  "key29": "JjyLG4x386WErnPELY5MSxFMkdpmk1gqgkPJATmMvgBrrkznNRrwADMr24UCud36mBg9LXuthTd4APwTw1cNhX9",
  "key30": "3ebwj91GbXRdHFZ5bXqPPptV55CRBfZBVEr2BxTQQGAyQRk4hGAsFMMLMwJKTLdxNEjAFtZ2fMKd11ic48ZokubT",
  "key31": "52YAquaGXYk2VRE1g64yxSqPHnZh73BP5yXz5dmkeE41SFTbLU9nYNjKLUK1F11dKyx1fKkaxwgXtWrgfYNhPUbk",
  "key32": "p8pJFZ9M6T15YAvm681FzsYQjGGHnrydbQR4uATapCRS45SYetscH1yaofgwP6MCsQb9SN1SGiCnqeQHhshLuDC",
  "key33": "3CRyBoHGQqffWYjLuTyQKPhPswYTkhB7Z7Xjh5tCuw82bJmrzCiRJkRdqqih1tS5KpiRLcrc3XBGHLeatvGE97y2",
  "key34": "3wHkLAYGkbaVmUHh8xL5x66pQ94bXg3aJinf5yowjGHh6EaiEdzSmG17NqaJzkGX2r9mFCjPrsMijA2ian4aEr3r",
  "key35": "2QNCJ8kqcZndCiKJBzQ8id8urMt2n17Qvmp6w9Cpfpf117xUBVanywPFREX6jYMTsTwzJc4AZmgJYh7Q7r7vnZDb",
  "key36": "2MDnLGTMS4ZV58XKwqk4rqVkVzu5Gwt5UkNKtntCMsxKHbwZSMRjYDtqP5yWzdaoMrqqQU23keC8D3H1VAQV6Wkf",
  "key37": "2Pv9B9fLFpDcPhdBMBKFhxwsdWyMNcNHjEkUbtWNRA1m4xqKyTTetv5A4YAVkJzqTT5T8Bd4tCpUMcYpwv1BqEV3",
  "key38": "5FZUNRvzER8Sp8zwGCZmqQJnPBGWNafyEgftUmFBvJWWuocuH4Mj1TFAtRr54mi8AHJ39QyQDcDFxNvh4nTxvsub",
  "key39": "3s8inYRW8Fp9QNwNzaiGktJzKqbtDFrsoJFQjBqCDfFMNMr9cBpHYdPayp78wBNw9VNyuovtUnBJpkNdw9EyhNEK",
  "key40": "4sz9WSUDGf8L1veBccNzmcd57k8KZcENYoxWAVn8LocAsDaur8SsMUguqFvN3XjzCgXsh7HnLUcHKn5XHyGZVNSY",
  "key41": "4Azk6zXzxVWjAC9dwFeRXe2qjMM3tbgeCZogkFDKBb3J6dZxwEqK7u6WnTo8Cv4NpvpWBXNMT4Ma2AzDvXW3C4Ax",
  "key42": "4rjLZrRfyEiWuEiw6DpjoJ7BUUTYbN2JEPccEG4B8vHHuCmAWhWh7JDBThiCSodXRP6kJtVCmAz5ERPChrxYf41C",
  "key43": "2bpZg3Xmh4DeaKShN5sHcuDvqpLNZxcjkns79dpBuyP1jiT2Kgaz9AsfMPmbUkkuudK6JG8enmhDxHER1ZTULxVC",
  "key44": "2eSdB1Q6jTfrhiQPtQZRJXbnLxKwFa1MP3g5TNZKNoVVYxJWsKL6aVaQo726uEPjpYSjAxRFf3QxTgbe6tg9kS5X",
  "key45": "4W3F8xgQvJZ3eWZHbwCscabXe4KuYX7iKJ6rjvFMnEUnqRiZCDisnvhGdVdNayhGrERnCBbx47wbMsKPpTfJPr3Z",
  "key46": "5W2cJiFwMrTJD34WyitBtKJ1Xvpx2WdJtFgCAx5APWoycf9FkZJNzpHt4HvFY6Vmh1hd794LsiQ8ty7CsmDbcLHR",
  "key47": "61j1KZSxaphJZcWGMjHBzJqvU975mUmSK9fBUkMBjHiC9qnoh6iNbem33JqHWHJxEQSB9h2xzLdyXUgBcWZmmr2K",
  "key48": "4yeqK14388D3YhrqTAPiHzUEbQUCyKMuBYuc8hSJgdbbwJqGG5ZUTzCyr1bb7Gziszrv9CEriso6zudk4a6Uppku",
  "key49": "3qSagfE6H4iCTRbRAh9ERsXcMJsjvnm8Fx4Qt7362iBpdPv9V6SaQAPSmop8d9ozKHSwirtW3r6q3DWosPBB8knz"
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
