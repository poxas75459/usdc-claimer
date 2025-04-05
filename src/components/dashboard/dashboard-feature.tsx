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
    "4HdFLVCMdrAxaXHPzaRxS4Y2Lri4Fn5szFaspNcf2AhX47j8xPzQeL84H2dB8og7hM3an4umeK26wGricV53g97L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gHR7rTcQrsk881Tg6RsCxRkkT5YCFdDcT6WeoLcpdmFvhPT61GZpLJyXc3RDGrKx4Ajj4X4j44DjGxrGBvRbnqa",
  "key1": "623x83hzZbEwv2yLPHCEvRnVyYyKXtZx7qiDs5Qdqf5KXwVFfnJ9e1226KKuKhDrzcZtgkJx2MBQMC95Sm7cH2Ka",
  "key2": "4uw9wP7dtUQqrjfAByMTrXaQeqkK1n7GeGWubCrUCEQUrRag733B2rwDy9QTVD2Xd2jpC3XZmXajY2H2gCNreCS4",
  "key3": "63tW2hhdvoRNuGiEnxytVrYwagSh9JCQBzbX5QbXYzpkK7pVkovHuuGrXmtXrVoYdpqAQn5CEVrHnL2aDf3VxDWD",
  "key4": "iAjjusmCTgYJ3DcBWAaHadrF63TgYAL6Poo2T9mZeMQYWxGaVmaZHATKUR4trbiRCZTGYisbs5jeSCiDTBCPCaq",
  "key5": "Afxb3rryUfK72Jzf2R8krKxtwVVkj4XphJck23ud5dVdoumPqwLpaoruFVbYp4zrRNFNpkjGxiqobph8XVQDKag",
  "key6": "5DevmvZFUd6kdUWWtxKpiiGDQHNEzSMuYVjnYs8pGQ9oatUkNetasybhSR9ycUmbB25d68QLDsVhdLk28nLk6TCw",
  "key7": "2c9RwPtM3bQTz8aB2QPfP8q2aVmBCYrjaMmMR6Qu9frnVmcTjQxzTRGeHjHD4f3g6XqcaztGLYAoaZPd3Ky6a34u",
  "key8": "38omwHRUqnsZ9qL3qDoX3a3UUxL7gQWciGXCirK3S9KLQpHHS4RVUd8PA6QzeV75gEmoEhzuT6GSMRZnXhfQo6cV",
  "key9": "5gvPRNa8Xc17CsPxtsaRGMvjADdB8GsSQo2CkpjUEXpMd8QZckzipCqCxWEMNatg2b4jBRzSFCAsKXAWkzjaAkzh",
  "key10": "4F4bp6yE6DoNjkR7HUiNwVhZghzGArMhQYhxxNoFHP3He43z5cPxiiPiQhweFb3W1xvvr4NLG9bdp4SFSzH12vai",
  "key11": "4k6Wf8QMmUsYJcthB5HAE3TsRRdNQJkp4HHg52ho2tUsmiGGMMEw38FwQs2EgPCN56zrqqmJjnD9o1yHmnco5H2p",
  "key12": "qb9gsx4eSfB2ov5YygcEKuBwtYAMCKwc1oxktx1AAZtdT96poCLVAnvLsdDeXMqJywYYKZU81NGkaScPpEf4VD1",
  "key13": "3XbWmPsCzu1RajmP4ExZCMjy7n2ewPk8gJmA3iinRt8LYZcmoyNZQ2DbXFZ5pHRpi6JY3jkYsqgPgkNHYL9HHN5L",
  "key14": "C5jyMLrTAfHsFzKso74rk7SLJHJF8ztRTkkDzRUddUv7zL4prukmrAHp9dHoyyH5JNqhegDxF9kC2GdEYJRRy6m",
  "key15": "2A6QGr74Zn6UG9DDGdcDCfZe69tRgjyfLJM5RuQ2eiTSkyCHBvKhWz834R2EhzqPsguyHEXmTNxpPgdQcFWcEASS",
  "key16": "5MVzvyX4gtNP32YPWnS4htCFCCLZckwp1m6udfyoudE4TvUWwTbrE3wzsumahwJHcWiqqCHZxr6BLghEqqHm577Q",
  "key17": "4Q4RNJJ6BzmZQUvp8U63ddxAHCakrjFCabrLi3V6RsSNRGJu4LXQiCtUnMhdUg3bpsVmJ3MFU1xiBMHnfSSiWhAV",
  "key18": "2c7A4TTxfhVwBeUADD5drVCiy74MvgWnoV3CCh6Bmgk25nkmtu2ubedo1dbw2ffMNrs3MxcyUxbDxxW6upbS9JKw",
  "key19": "HAd1LcHn12g83GU4zKk4prGNY4wdZodyCzDLSNRLhgBh5hsGW6oxTEYfsmXYq6bFMjLTFtmA6An5XoPvazTRawL",
  "key20": "2Ttb12WSmGVQ1woJwoTENdGZ1MeWLNDnUcJifyQtH5pBxCUVef3P2nRmEinwzhqmuTNuScniF83moNKvu5RGFG4k",
  "key21": "2PMZxeEzePw2ZEAmzfxuZNtZ8En8SDVr6fq2gbF8kLKnoCCHE2i62H2BmMAfZM3eSq6emfbap5VbYTDFNU9o6zPN",
  "key22": "639vq2XLkGh6Ep6LmwdjiGFdirReBeQqm1teVASFt9gSbcTjrRJMXdd2gvBViUGxDN6dpUNGvsSewwhTdX1U42Z4",
  "key23": "43iHZVXVW63iWCnrPWAPnBK93UhixZXviuNuo7mBLLvpngRtJ5BBHpYHXejbnCdKemvEFDSLi8y1FgXmnTkVeYfn",
  "key24": "6U2wLo3XpsRi8qpZTScYGQLMQ6ePYB3hmaQSVRTREsRt5KxebbkWhKTBuqQxnA1fhiwZxqMtVjt9iLw8RCNbiVY",
  "key25": "4w4MQSzBzXPcqQ81SDomBxiCuHrwj2LeEer1VVGbj1AjZMDpT86mSufmcWsZcwzNVYJ6U3JQ3xyiRZAPbJQHaB1v",
  "key26": "yUwvrgahs9zWieLbpBK5ZkCaGskm9cVE1CZKCv2Ta9taq12eNsRJsf3LqQaNiwP8ifpkh5CStBcTwoZvAqVMYWu",
  "key27": "2N6sLjrC1tXmXguhrT6qMtp5HFkbk66f1Lqx4Nop7r8nGRNQXTjUjoHa5XH3GLBPUDML4Mq1hxsdA4oC6e19BqW7",
  "key28": "5WvoRmkj5o3nSHDZmRwp5svSprhfob1JZPp7TTbc14g3gvjCMWi4Rj7btC4sETzm73kDuRSE1UNQ4sTe8Y3hqrAv",
  "key29": "5cRK8jm2Kix5pBd1xc8mQaHz9pr4yz35kffMGNGmaZU1X5zB6gEipWcRiMe4opphDStHyfR7RpBrbuZ8AKDgDnG8",
  "key30": "4WkjV5bf6Us5U6B7M8hT3WLJvZ2YeBW9QRrevQYkztTMD7fbucwoTpwpaGuegni6wpFWVmWrrj65UqAFiwJJmTp3",
  "key31": "2aNtKXeQiLC6KLUzeHt42RAJFerPmZA7JddxmEZVzoypuQv7nitWrRXZo6jMU64h2wW2cgLLnBnU9k8MXEun8voG",
  "key32": "57vmaETQ2Jo2C64jDDb48wHbpH7886MnkNYBSG15XkZQ6NhYem5p4cw4oY6AJPCG2yVCxprQG489pzptaeDsWh2Q",
  "key33": "62YdkUH45ywwpu3HMZRRtbbpRkRrKDnbmSeJUCMzikSR58kHZQFKV6pfo8drPZN3A77o7Q1vPBZbiYEZNgoY77Kq"
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
