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
    "FMSdPMfsu9z1q6APJyMJqzgtYiNXxU42x3hb8rH8mbiaXereJQKUnjPCejdw4e4skBNg6BBxTVNg7JawAVfE1J2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oa5jp93nw6ooJnqz3KAM391yhJRXfj4VuSCSTACr92k3mzGXdBTqpF9mp5uAQJahTdQC7bHzXDkEGXD662vrDB",
  "key1": "2sJmxwi4tqPMLFW7VAkKb69954Mrdubp9rz9XYHC5yBiCMohsKMcpqXRXvgbPiK7rRJCeyA8xngGkkcZR9aFihCq",
  "key2": "67ciFRdThci2WPoYcRMoDwFBzXfdbLLEQo69ZChaerNLeikSXG3LY9TiCqbA1ox3t2JMzyutL3dn4v7K6H4FYGui",
  "key3": "4fhgpfdV9Rc6xmVKnVgtrznRmcstokZhHEYuUEEVY2wVfSYsuQZuAiD9nzmq7bmAgLmSGnNE2bgvYDR4nqKJvx3q",
  "key4": "4MmjFe5aAhSmxpvNEhN2pvbF1vwYzKbEbttyGSNEtzy1vMP9Ha64ZMt8EBhJBM8n7bDqz14h3dNwJveT8ykz7dNt",
  "key5": "4mua4jHKbPDiQQE9hQYQKDhwg5WWqXdoq9Zs5CWHhy54dJzjmgz29BnMGFTwoTC8axHDpUuEdz3u9FHxTkrsMeNS",
  "key6": "3TWYB42mg9t9tTNhoKnXDGBDeeq3cap9omUVHCAUEVtSCi7mhaYgZvWBDN34GskJqcNL4fcXgLm51aU2eU4KDxPu",
  "key7": "2MVnrteuHp1z4R21s1VDhV4mVKszEa4JHJ2sc4uJAT9xHN4tdvgUhxYf5VZoAN63ggq2seLcaJNogvt83QVnR5mV",
  "key8": "qLox2zKwkwb5ZHox7HMyHQmjgNrHs3Ka3oBk1dRaFRitGUzaRtjGS5jTwpV1ZPnVHMcHB9A62M5JgA5W7D1rChE",
  "key9": "3Jqp6kLxj7LGqrJKzE3VVyi2yVGtTf1TwjoSdyBQSYkKame3nX6CJSt2coJd3zaFd35QBnrwyhkJxc4kByuHHs7J",
  "key10": "21u2bS3hWTf2Wwmgp7vMmATKq176wSmQDxFKQ4243zuGUt1ALj7eg8sL6V6H6w4UfKSWNRFm8FxWmGxZn5QJ2Ubn",
  "key11": "3oY1vuVxmAVw6mrpvhvp6c8dUaYYiWmEv3xfZtAoSxP3oVNTBNGvELYWRx7bHSNZQ1uTSYoQ9EVqh9FmvJmCTuH8",
  "key12": "3JcrdETLEuJLa6NLchMqkEgf7XguKFn2Why4fQSzpEHbrYMHn2u3hz95d9Lxp3htbiAMPiBQr55yCUoHBs8b8hEV",
  "key13": "6aUkZd4bwEQtMXVarpZKixxLuxTV111R5iMYRNiW7uvx1jRitVE1vLV3aFJ3QGBaJKup4uGM4jXgzBNFTZf21yD",
  "key14": "Z66MhYDEbjGuKd5PnNKTMd3iXjkPF1KWCZjBRHfxhbbA91sKBQiC8Zp2eJnb7yygPupmTg1PZyb59YNGbt4DKPm",
  "key15": "594cTzDJQHLcfGpvYUbRWSXcCrZhXUC9uou7B7zRSfN3nC1Jd6UNiX5qwSLdUvGVurW1pMShTXsuTLG4TiSxu31S",
  "key16": "3EeiZASSHxa4KUzX2VQEGpWb4Wz3xaBSBdFQgRPaTUTi3DhP58o9YVvEaK32uYuFk9mwvPvE48feTkf3MR66dStQ",
  "key17": "4Yexsx7H8XByUdiqihHAMgi8HHqFMjRUFNv6YUwGuw8jhP8VCXq4vY7NDkAz2wgcwxPUvssQyBtykTTsiiZjEjQp",
  "key18": "2iU8WC1NW9QBAkedwq25C2gQWGPDGtpaSaJ3Jb32nyhwCEBcoLLVYdpheESAgWR2NTyVcx6UGpCRUmRZmbsscNYE",
  "key19": "2Wh4ghqjU7mJzA3gaG8defadbVPR9QacnJaH88N55dDp1AmkpgcEc9EErEXsyVWhLYSKp41s3Yg7dbpaMzRrUH5T",
  "key20": "3BsznC8QZNcEiG5DJ61T9CPd5QQLkwjx39t8RgC5fMRgyyu9fvTe4xgA7ktUrNpYwFTEJD4qVzK1WcuXmkXoa4dz",
  "key21": "3cipTeUuNbxVAyvKUEiQKhTe4bHtT62Vq8pN1TWqPk1SyrdwtDysMVgyFVUZV38hRXaqfzuJKnswh5kDMHVRDny4",
  "key22": "67LVFMW8vFYzRY6zqS5hMqJPWbUCCtdBMUGg922rrofwYWjtYjR16WAaue1xhNoemuqLocPubP3iHEhPFX2B2K3m",
  "key23": "4PQZRqxXDtyuCXNz7RndWX9J3hxxCzF2F35pVpSPjt22PPNiXPvEqjs1BR9Du7dqdtHXDeZSPgTr421NKyT3UVTK",
  "key24": "3PdSxVLu8ZruW3t5yQpttY1fdFF2BUn9T5hrbdwjedZFtW5ydj5TrzQ66kFsC2Hrb5wwNDcA1xSMPkmDak3g7mJ5",
  "key25": "2nMGDTBTYqWVC8gPJqr7G439R5vLqxVTdYmPfSbLfkoeDQkV3PBGjL5zHxUFurBRnLdjM8HGRf8rengJiHsrDqoE",
  "key26": "5KrDU4gR6RrNvjqzUDyWaFEpLwGHj8xfZQTSsCf9ZkpV3Ka7HFVpwgetmsLB273NtBnZ8vSBvxFMouxvN2DLE9mK",
  "key27": "5zhPzZ1PTBaXKJi3oqXcf7taRLCgqQwCwaUGQfhxYufVVtCi4tqjQHQn7LaGjQYwgePvzhJetWfGdCh7raMdLvtn",
  "key28": "5YtLp6Tsw5iqFZKm9hoTZPfTBhR9bjdCK4MEzrrzzjGvbxuycjBDMPMeXhSEgFqbWmnpbic4awJXE8bdQXLxcWg6",
  "key29": "4ApXLBZugLMmdQoeQ5Eyqfj1XPq8CvrgqkzkRWYXj9sTvACtnMVHXqUqzsUPHnK6KHx7Y6vbPcP12S9hqvZpV6Wu",
  "key30": "yUMoq2YN6C82a53uBQyPh37BYyUGT2vo9nkG4JE7AGYibnGM8CKAviESgzPmTir8ZJ74hfC328f64ZkSkFGTxUk",
  "key31": "2zQdcsuCuEe4LSiKbsX9bnTRsRcyBN7TKTrj47ks3XhwP7izyChHid5Sq5Hwp1VbjAbSDuwbYLQYW3hCfqk1Kmcs",
  "key32": "teWUqzHNEhMWoydUTDsc72hPKq62S4irhsDXTLT887cBybUTDuep5MbgowNNmbjhFLmLKn4CzDcfSXLU3NkfBZr",
  "key33": "4RQDibTVkL79kLGT4AM5ziQMNL5LHDyjd884p2eo6gWthsQt2VWNHgNB35SAPgtP28V41K5wyqsCk83biQ3hzi2Y",
  "key34": "5ovgKi9QkfiLzY1eLs9qDcZ4MximcQ6BMNSMr246amvgtm3kxteQo91u98YzvBuMP4h8Ck3dpvff8HCStkgVRku4",
  "key35": "667C2xk2pnf4NhMN7VeYocibEG67FA7fhy5Fqu4NtMdaJNBdrrMYRzpVXXeTvFDMSFiZXyit4sGmzNXKBaiYoaMW",
  "key36": "5JDNXRx2VNzFMiFQqbLSj7RMpxGgA9YRuFbMxEdNDBw5Co8LUddHSwXmuNHfoJvek5RBQDfw4bd81zc9jWKR7TUw",
  "key37": "5n8Hj4NJoFcu8sb3Kd54iXQVfjajksaPuNfWUAQtKyPqfFetnJiVfZXmT5xrKS33bDcpJMExRBXhZBCGk8ode6WN",
  "key38": "hKQHJpBhWeh6UJswnhXXWVsSJN3YwH1Q1hnvCxZXM8JAHoeApMzAuZiKnkpTgzDAjcwe78f2ivJ6qSNJCyqSmoL",
  "key39": "1bejAFfPCDjmcXPjQvTx6nW2GgzrzjyZgTPiFUNgGPyJYDa9Gxb2S7L3Lk1MVNCAZVevMiUfSd1aWEMkYuiHvnj",
  "key40": "3nZcuJhVyMiSy1n2Qcoh5qfJ9FquCxjM8Yc2JqqfdJrfzWN4vJwT792fscqv7C1hCSKib2amCvgy1tSWvNCfoxHv",
  "key41": "3eEN3rqGUmMeXCdvi8nzD3WsN6LCosFfsMwupwtDBJB724DbiR8DQ4mDKmjvJMJXRdJDwDwjGPFVL8Lht2z2D9HS",
  "key42": "66VdyqNg9eqRiMHqMnjfyDUAL3Jf65HFY7EkyXReA8WZEAsVe3PPRDWh4P1N1TqA5a33PeX6J6T7Uva4bgSCVMh1",
  "key43": "38ug5sB7oin8bHisCnS7Qd3NyyNzn1LczV4anw5SZvjNDogVKGqfV5sJx32SyYjNAP7RtAmzrnTgZi88mPA2VARB",
  "key44": "GUUnCuy8oWGywGjpNuqMn57u28TCVe6cJ7jhitVS7rKwosmLavfofmet7A2bq1zniSrzwWpbuiJh5ZciyRWkhtd",
  "key45": "354iG9sfk6CxSJU2JUp2fsuGcWYEh1RZEcQHAn2hYHb245oxsRtPCRFJq49zt5cfME25qDQuc5ckbcV9x1kcaiBN"
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
