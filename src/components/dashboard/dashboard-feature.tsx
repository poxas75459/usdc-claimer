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
    "4Wz2PrTuCETgYjo3NdhoNdQ4o75QkBtnU52YBD1JgLXZ7zC8Ss6r8q2bmDXU7eMWoee6MxCMygKx8ieXswPwgHWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L8kRJ3bX3dqAJmALNUiLSeXJa6dofPHGeQQa8cNyeebehwZSetDRs31NnV7XGV4xJ71MAooZsXuYwfQ4LNSVzd3",
  "key1": "3j1VEFxJfF7SviCbi9hup7EEweG9FrN71PrhdR2B5Far5mcmAokHJrEhF3m9oaySCZ8cuk5FFt3hdFSNfMXLQioi",
  "key2": "35LpJ31VXLcXZNViT2QGTF96fQ7hawYPBCWZBDdM5sc6REBfLBVGwiEJndpb28pAogCHW48SV72vDnhA58PKAYMF",
  "key3": "5GpqhYBQ4gMfA7GRvhM81BGMuMEB3rH8YvRQ6tpCdrrecdqjzhD9g768Ve2Uw3Wd6XzvFhcQ2GxojwnLpdAysCm1",
  "key4": "4Bix9CpuEe8u4SHqXoTdMagtT4rWmkZeYQa4o7CbBj3wSGKygaJoD1Vw7fpxWC4df2td5oeoc5M6bibpocJPnddX",
  "key5": "k5h2PhiK8aSwn5BSkMFRtoKFnpD6R91AAaeiNT7RxCMiMXhWvnKdoh95U7RuzVE39qLZbzBUrtbS1TVCG9iCrm7",
  "key6": "5VfhkpvXjKG1BhiBZRk8jPhTP9ha2YUffin7eksRsLrQbgGddMpf5PBJfJLTRRXAKzhxEf3DLnbbLj2zLL6g3Phx",
  "key7": "5WGK6MxMas31Y3BUwJ16wcQ6PotmrEvijbR5fLxeh2oNhpavi7Exmw6Artv8WYSKJTQr7DZxeh8xZpoQ9XKy5XwA",
  "key8": "7hV6dEjSGukn1H7txwwF43T5Qow2u2hxeZNL7vAggUCKVRsEpTNsvDcs4SzNWcdKmt9aJm4g5JRtZw7uGhioucp",
  "key9": "5MqPQtGYUfTGWjLVv9yxZegFPiK8oQku3LS2U2K1UabpVDZHfCzYTwSdcCjj9fJt2LkcJjT79RYsgwbUaajq6EKV",
  "key10": "2rEi8pqYcVWds6Z1By6bqAqkPhej1HwJQeNfCV96fB4pJ1VSEUaMHzEPaeusPKhySL7PspwpGBrsrmYnJCwanN8T",
  "key11": "5M6J317LARtUxMDBWfRVVLWnyvFtsiMf639w8q7cS5s58oa9kER291ytHRjwyokdAJa4u9QuPJERdTe6VE6o7BSD",
  "key12": "2q1KUiJiGf2uYr3nUjd5Di9xGXMwDXpGB2moiR4SsWpgHLVwVRaFXucZwEBQ1GefLEPjkXwgo7gvLQWtWqBf6hpu",
  "key13": "5X6cooYHDM1Qq3viRDvzi5RXkMy3EViZgYjTcw4G3asckjthzPzLs6MTfQkazhnptCjApaPfERMrnLGnxLjZezPF",
  "key14": "2pLRpAEL2wosuuPgpyWv1C7Eg6cc2oBE2hK7hn26JoshvRscKdsJ7vHReXaXPoH573j5LtAQXtVUQo8VEsi48W2p",
  "key15": "AgHU82Gc4tLhKEx2xvCkjBVVXzoCMCrwga3ThiqiCpd4xCFxTmHTppKgwNUSJoz7sN8wfa7W4ABU6Wf7s4Q1S3E",
  "key16": "218amyaCi4TnM9isBsVEHfnBLAZDXL9mNn96yTteTCBqJazByzxaUUNGBU2FmsmzXPvGSKGp2bDoLPcTqHDBwKnQ",
  "key17": "C3vgP9UA866hpjs8m3vt4sJL7BKyg8qxExbqivjeSovDdj51wkP21tyTvDjkVkw56Ls7rdb6kJHLTqEr3FJ8Rn2",
  "key18": "46LnZ3DM23oWu7b6TYW2p2qYRftBhTkn9Fkqgc4vJsCoCDuQT2BuWB9s61uNn1ijyiQ4LuWAfkrdKFS1c2fyJH1s",
  "key19": "5CXXnHVJwJXqLcV2BVwz4Btk274crufZkmNHWfAxBEwfMZziZUZYEhNJSqrDVreHfqM7ocBDT49rFbWndFQTP8sb",
  "key20": "4HYL2MKgSqK73v76TXDfMxAE7XFS2njnorPF5ofPqJftrYPqv8zuQc5v3xbRoB8ebN8nepmJeusek667AHC51ncf",
  "key21": "3RsPHcGzaLsQRwvsK7Vu1b4VTSvTdnPRhcmHGxiEYa1Ass54R7yvbFSv8d7sFaQJEypPrJ2i69DKgtPwGBA7wguT",
  "key22": "3KSLcXTumMRye5zXPgeT9T8ozK46xEcrVTJecFRAurj2MbyvY4RWUjT9hUcCzoRpGHNTmT17GgSqeiizVEyhAyLr",
  "key23": "3kGhwa2pgemZbj9kW5gYBaCJGmyqjCtrcj5Yi8bJtkeyzFXJeUwaHhrxfbuDLAHgFqLbUs3Tvw92dgik6dLkDRCz",
  "key24": "FaTwGZJ5Acm6Z6M2pEAKaRmHXVcSEqUJKGbqnM1CcaZF639T6hcU2ohd21EWrLi41K5WcD4edXnNYmpswvEm3pe",
  "key25": "41WbghTfGCxU5L2qd3hcD8S4TCtvsGp2XCpeotRsAqpAxnYbLhubgffR5hp9kYzCEjFJnRnuoECPyDPc1VA7HsnG",
  "key26": "4HHHJkMUtmK8d8uEcGE4YWdCYesg9RX4xsiqyJoFgxNWRCk21CctFErdJEhGdSD9cKXqDorF6vFMgL54K2MNJeFE",
  "key27": "3jKp69iRGUJdUB89bWh3519QbHKmipC8uWw95kvir8mEui2iiS5sjsFbR4nfQBP4iN5RRc4XDMxJzoquy9LZMua3",
  "key28": "2iw3YHq5GrsiW81tDKBqeBwouLxqaXu3EnUXwJ2y4cTScwWPEHgy4odNAQ7Nw7oi6MnrL54SKrwukQQqfa1fEQQt",
  "key29": "2ijwhhhMdru8htAGo7VvMqpTkksiw278Qqa19gzGcwJMQNSZQQa2RgPR9yJDrdaaocNwQkRFuLVTEfAm5RNmNXAH",
  "key30": "4c9zDmFqdibGfU1h3QVY8xSQ6MYwDLNKZx1fQvk3ybEcCHp5TMSZ6dcyzrqGoFeLjFCHKQZr7rWubUTmWiF4DJQx",
  "key31": "5oiqsUmA4G9XZ7XdH4h6tvtUrbM7pvzXLGBdURyFNGeZW72jJb31P1Fh6qkFx9Kx2mXEQGE7pAjLVWv6AgiqkVwZ",
  "key32": "nb9hAJbLECF3NCVtpTiKJ4uENMCUk55eZfGxZAiN9FBCPdcrU3rp37xdbyhwJu1sy7yJnDYMDxby2AuM9QeXPb3",
  "key33": "GsR8yUVs3JUhCknqKgXjrrpMJb8mx8H7F9q5XD23y1gpYojMtyPw7o9w2CBjarsgJawQBsQd4yqmMj5dWZeMaRk",
  "key34": "5kQpnq2tQCff1qYzxVcNzCvLpgy55kDNXWr6majzW1PKkcKHFePEF89mDnQYDEqKfKhmByADv27ZKwhsV6Crdpz",
  "key35": "3xfKjFNU7y6TrkaAKDhoUD1rkaH6LTVP6PtEhp2JwSRfCWTTVgjBXz1zBYZTUCQf3U1aeFNDbqGgEaGE5xrLSPvS",
  "key36": "EydNhwAcgjMqrcbXovecnNDsyax9RzbdjpbXY3kXLL3A18bw5tZjsf12Jes4rhTZU5fqgxHfJnFzhigvtYGjrf2",
  "key37": "2upT8jBLFwRuHhuAjbi3csUDSJwvTVh3teJESU9tq9HGBjdJu8M8dg2CKup2tgDcbfuhSTDhqq3Y1ZL88YhtD3ER",
  "key38": "22taT8pBoVbJnkHAxQWcGAzCep4dgAhktmCiTiYEi9kcD1mDGpCnhdr8V4zKro37pRBksFoDBCd7tK1HSs5E2b7Z",
  "key39": "5UvoeVySvH1MYnAM2eBVzgBvsTXJ2Su877RK2vVUx6qjKhpGkUV5Fh25DGrD9tC26ps2oWk8UMJWGeLKycRRbq5q",
  "key40": "64zneFHpNQ5LF9RYr4tC2sZzVaHPLiRCkH8tU8h4FDfbEPhkV6YFi3XEASN3q2G8RryJookfMUTwRtD1JXUXJ9wT",
  "key41": "5nCYjUayLdduWVJurBQzbPubvcw1w1dxFX8PaYe9Sd8exMdvzCabreZ9cpFq6yvrXGc5xve5iexB5H6C8RppwpCC",
  "key42": "2rpzE2iPdu9e241mcjXjD3KL6A5Aqa87zDpCGtzH6mH875D1d1E1LFrSgFCENAuRfoxw5d5AqfrULm9YEGjpTjKL"
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
