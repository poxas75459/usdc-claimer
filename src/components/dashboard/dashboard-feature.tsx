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
    "3Jcre9E3qaw9WBfQPVAXjtPLmtiG95bNDxsttaZsNSFy3TnQ4f2CYX6SWSbR4CoBkUcueQgCE2YhdVGLvEc8s8w3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g2ZPXkQHyQo3Uh4mDbLZiqYwwkH7gmZFLi1jnD2wjT5bfCyUamQhPVtZtjQYvSQ8ug4SssziaBA11HZmYCiVYUu",
  "key1": "5vPLFqYjqc3YibbgvCL5tbvLqkz8rTcYdxESdinoFk1EqpmFv98qW8Egrqk3BaUwUbpLv5RjyEcrkiaoNiXAnSDp",
  "key2": "sY7GHPek2uUH2ePGX6s12TFN2C6QNMS3mRMxTfiAzjkudBTHVtP5MHNUz8EBb7zNYKQQuv1oEuJoaf26BGTvYbY",
  "key3": "2BCNkLgbJZqheC6VHpiNFnbAL4s7raFFvHBUUWbaSj5VdTLxhqUysqkxqBQSzgfLozG74ECg3VNgCUzgGDZzm743",
  "key4": "72wmZZPQea2AKtNJTiHSEeViPNfX7iXzYQsVkEhH6VcZVrKnCEWaKtmE5FCnxpkps7HcQq1vqctVy24FBRUeAjo",
  "key5": "4DsFngJgkXbyEhSwAnsyhsYm8RheUBtHWK3eQeaEf2yS2oooh2gQMqwKcSbHkcT6pSo13qrWnCeKeN9FSxKQjgEP",
  "key6": "2cZY6g1V1yXazY9b3srVoWQN6MtcjfBGEHDgRq1jS3DCp6iPKuWi3Z2iKggPkhXuB2wrrRuEtu9VzUC9C34k6RVo",
  "key7": "3duf52eto6Mf1EUXtJfdwEY6GhF4t1gAUP1A8AsymDzREayBKVUesJaCiGT9HK2a8zB65y57QWk3T6oEXDonf4Ln",
  "key8": "5afRZmPMRbCATEQmimSGALS9PEM8vAX6rSP55WkgtVCxQ68cuhjuQ4G597nSnVyr2G5bWGE79CBRJGiT8Pcdumzm",
  "key9": "34Q53cMAXtFTsieRXjCXiDBuBSXsYymuWdS5fy3UaiXzai9wDgQbGCZ6p3wQtBufAnAwZcsDMYdCvQmEAwrZa3fA",
  "key10": "cHCuwWR3dJvCEQKF7vxHgMuutFrFfSonrp8rt2FmwjpeE4QgUetfDJ2Vjted2Pt9qsQDJCf1EmvKSgTrgCQ4M9M",
  "key11": "5ZtDkuSZJgw5iy2SUAd3ZRyvm7kZ9Wx5Kc7C8qJ5BEdssq8daMKKEy5Ss8oYFcy9CdVkrh8cpnKxsA44QP4GUvEN",
  "key12": "5stNQbmrVqXZ2Eou3e6GCb6pjwKnqSYuzCCbzZ72kHyawGRw4XGRTXECozdn94WJzzcMdpKxcXHHAp3fJkcRTDMk",
  "key13": "2HBHYpL3JvEBmmtJr4J8yXAwGNDVqZASR26S9hm9dErF5NNpRF3FNDQcCNE8L6f9PdGvXkgaKV47ENSb862FLwbU",
  "key14": "3APK5JZ6GDawE9dLNe5SoiPHLajsq19h6XQrWepE86o8x5HDp9CSQaPz6T4kHjhCbDmXh3GrBpCFYEqGTD5LQeY4",
  "key15": "55w5teerkn6cadK5accRhdaF7nqsRioqczAMp1T5hbgeBpELtikb5Wit7j6HHyskrXgyGT9srZEnC8N8SwZH4aC9",
  "key16": "3eLMmc3jHqdhSZarMzVDvo9H2sHLEkEgAhz6oZDZ22GgS8X6J9auhxXRvziyztXdQK9KitKR3wtoPknbR5xAjeA9",
  "key17": "V1YPZua4M1xGQPoVSWSNFnSyoL4BVzUQCenimiHy2XE7SNRJ89NNTSzYhrvwDt32h2g75mk1isSwX4yT7WXfz3H",
  "key18": "3qVUcbr457sGVeqyjLZNN5PqS4Q5FHYvmWPpLic7Nm1kbt8oNAqqwEYKjXiK67Ys19f9RTgHob6h8hcoqJ6yKMiu",
  "key19": "2XMyuo2vjyw4pLrMnj3KneKuVkeuXeSLoJfAZtuffTmDaqKjUwrtuBuubWxsMcxuGzh1AmM67wSgQf4MbFQzYuoB",
  "key20": "C6pSJCUqRpsZ3ccM65yjxSX2EpqvYTAAaJxBVTF3jbYrgscvhD3JEC6fwPigeZFJXSSs4rUTQAe4kyXXZkcQqov",
  "key21": "4yWqTYj19zpsBYQDqYh9DASLa59owsmANWxU6RJbbLCN9FttW34BPcAT17Ujjbo8xHPRUiJk4jnKpa26WUCD1oLc",
  "key22": "5WkEiejP3u5bH38sPqGD399Uun55UCrEGqvqACgrRYgcV5yppeXxctFesZfKwqTwyod3Ds4M6ZCbrQSuW1xNzyLA",
  "key23": "2eoafRh9Wwi9yFhXHw2jAdq37Zit4VARGmfrSocsCwTB49AjKYatcvPPY7EWamgxeLn6KwUDDAY5psTJwr15JF9H",
  "key24": "3zQBjGHYsA73ZPrCNcWmakViYMqyaz6CMQyVNgv2UvyGZ2RM8XoepBrnZK1hUAYvDqvEoj21wNxwWV9cNm9DoZm4",
  "key25": "4Vg8dyRyp8smNoEn6wfRYwhrw9vSg2W4S7oYoNTdoFDWJiebYdXHrYSTLNwX3WYCUspoSGn6spMVZKi43cPuk2Nc",
  "key26": "3bAkYZ4HHDJN12zmeWVPQ7JjnBDWSoWDxMf4i5Jk9xSFmrbgcReQcEaDdgbkxpwhWsVoKXFGbk1NgXpasEo2d7V2",
  "key27": "3DmEHNUbkGcuBhDso3BH7Ne6AVEd8C7arY5RXNhBCAkuUzdVDvebzCk3QCgEF2M1szjJcWDPasT1fqjVpNtsjpuR",
  "key28": "4NMVzkJ9RbxmutiyaJpwq9TnaXttDTfrFAdKfBUJgLuBZpXtgCTajVAeye1K2NT1HNCCyBfKKmo9LLVZgR1DmDiv",
  "key29": "KxT2grU8prjuduKn6Zeb3bJvkoXuEbwP1J1y3X69XMCNKosWrNgYA66WBXJ9ErQ4U3QVTk3tN8HQvZEKeKXhkqa",
  "key30": "2exVwigXuDimD7Yf6rhvRrz8x3ZCsN5Mzcjk3Wtv1XekGo2QvsiREP7U3H4RoBtfPJM71zA6xyHxbeMDHZVREZho",
  "key31": "3GpfbAtFSCQEM2fvDLQhGv4JZ9uZmJRxUpX5JUVr8xxjwSDnFkTjzsU7Qt5YC3J1qCtE7nGmygvVYyUckEMxDQq8",
  "key32": "3j57h2kHvJz5oz6dPs6HKRsFHb6Vz5mHNXXGBC6v5j9KawQ2mzufpABG6wSYFXbBwvaSoKb6xAoSmEiCyMfpF7fG",
  "key33": "b3ufLF64KhuxeArTr3kio1SgkCn68T6P2Ywj3kX6qWxHze8MvZ1hf71RcUCVzMTH5BBFLE36Jg6ckzLrxBXZhGk",
  "key34": "5DsZHJssypha31jy7wUZtC5iAxd5EUZJgoUtNiGZS68rsTrjqW4C85g3gD4r1EhnvP3DSNaDBh5m1kuYuULnBfqm",
  "key35": "fabHCp3dXzee3pqo1hbcwoJnmBJvLdxWsAYsXAUNCbSHzFiTxvaBJVY3njiGd8auSQfp1hTkGzKyWbhukDzEYox",
  "key36": "5CNZTW3i7Gp1udWLp1K4guharwmJsshgikvHUpYL7K4Yg3wNdNvb9W18wsWJY4htWKih5zjQrRBpfSvyFypicDuL",
  "key37": "UBPLZ5ojGi7gijgJCc4VredeBmRSCCoCC1VCuiKxpXeyvDsUdK782xfH63fexdxzbmpt9yqCDdHTFgn87M6kk9a"
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
