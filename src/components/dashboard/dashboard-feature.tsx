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
    "3Fc1AuhGEF4xm87anjkCzychXkdFospW1dtHdo5DURX8Fn6RQz749L1th9Kcap5wfSAPvF7S8gL9tGmzcfJ9ho34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yfCbGgAjjrtipx7tn7g2gUPRaWrCbRLLyhW18BDp3sFeaGw4uKrMXDJcgeDAowCdAe7zbuDfqC98hJW9P4AmgA4",
  "key1": "5tyEt23SJJv9NHt6H7PHw2dtJLjqR2VBfvWckpcGbYDNVJR5VUGCb2TbidV8vfc8x2nW5TzQdM6581q9exBpYpo7",
  "key2": "2FA19s9XXsMEado4GWqAX9kS8yphqjd52Mp863VG65MUr9xCDtpCcgSLsozEsPvmjsDuA3qEigCK77dhuXbw9okN",
  "key3": "635BaLrkD6hSMHrYNQgfiyPqwu3QD9PmECpinKHZ1ocdKUpiar2KXafq1gMnnyYkaCFGD6JCdiTWx441e7RvebGW",
  "key4": "NkLkViFX5e5Gdj8boF2wrZEWEuigNWRQKEe6ZVaHv96E87w1yqJB8vLvSeoPirH85rdchey7ttWK178ThVpb6fi",
  "key5": "2HW6JjBADe2aBZQYuHovSq7qTejae8q2TFUqhKmVqy2iS18w3UUfkNyX8RsiJsNT77cYVqZhFeDZoDiSfjcqXKEY",
  "key6": "4BZ6cXSrZctFhRD1xxB6KiP3tRomtDH1uVehejGSe6Drko3z4vGXfbVhSk1ppPDBJHPKww9jm6ZkL7Na63WV8xQE",
  "key7": "5zujtudftW4aJPycrNRBRi65gsS3DjxhbV2Sw4t6Qr1M7qiMp2D9BEgh5mLShdqm5KgXtJ3uhcDyTQ84CZgBac7f",
  "key8": "2XXSB3XX5bxwN4dSnN8ER9PTSy33tcL5h2x19h4gsKJYsT6ZqnC8BqsdLtMu2HuLQaAJULf7o62BCYpq6JRK7mFq",
  "key9": "5JTfcdPPBGKoyJeFpxPdQhUR3wYLE1w9qsf84mEjz7xfz4uzVvdR6tabGowsaUuWcxepadZXzjxQfGce3LNRX2ks",
  "key10": "2gNUvVT5huFHas6eNH4yUMkkbcdDiXg6ZRRQQS6kJHCjD1UNR8sinqCEBoT83b1K8SyrK3xrnqXjf5s8tyZ1SQJP",
  "key11": "3qgSGVpk9ZmBdSxdzCuXc7CqiULyPoRzVEYPsjz8m4f4EjTAM3RHMstaxBrhsLRUE5uGRvgzkifXqs7Th6Z43HZM",
  "key12": "558V4XtpRtnrZyxetfQTgkuigDDgKYUbvzPzCodzW3jog4y8Nm358CaknK8nSZ5TArWp5hKnRnv3g4dhjutXbAa1",
  "key13": "5tcq8k9XWxm9DJrm5nr5ca92SWdcZLS7x2bXNCXscHUTRGiLeLV2SDtdFfPSMbVx2Bohja4ETJyYzTTxwtsikmSB",
  "key14": "t1ENGEJiEC5n1AgP58S9qh5PtvnHpwYN7X7o9up8MUGvGGRSVFHE87Q5nVnZZSGsE6rYCMKBNxjivYDRQLt6oc7",
  "key15": "3ghPLUE7ab6tu8X3E9WbcEsNqcfnEj4B7ZdJZjy8PJGY88YRRWMjx6Mqbqhrb4kxi6vBwSWeJ1g9MiSX5ENTqUUT",
  "key16": "P8ZjBiHhyB1nXJryW6TSTTsj5n3LnNqfFpRpkTCempHvBBFBwcdCvGJnxco1deRmPoKEMd5GBebNUAgawBK2A3b",
  "key17": "2LuRwPRSstHmeAru6HjgYxypWDrHoHLC8cVYs2LPs17LJwGvfsexBJAZY6dcv5Nn933cVwVpMG3ZtKx2QAmBVmF5",
  "key18": "2d9NBiMetn8scfaLaefe9FhNqcjeyQUZGGAkJqKhbWAfmTUH6QQEDKfvpFujx4vbyS5kNBDJsug2ko8p5TZzXm49",
  "key19": "3aBUhBVLq2dRsRTVjaWyknAQbwekdZnHesKfUefpfw9rd6FQSj5wXjVK8ficcU55yZEXHhaVwCQMiQcurJhSyX8M",
  "key20": "5U8RkJ2hHi2QKjzniWni2bC3dzWoTLR86AZGp8WtR2MGiJWxFH9JWTfcGkiyJPUk6Y2WAPzt8Juvu9EqVCC4NqjZ",
  "key21": "2Rsj8T7STTikDHJ39FxgbYRegDcQLQqhpqHKaLzbjDnqfDfyXdXv3Rn8FGz39hXWnkJAW4yEoNpf7QFNB6pYx6mR",
  "key22": "4sd8c43z6y8jFcMckFyJt9N8yaoXtR6BHzBA1NgMvnMVdpicFSmUVWgX2YGX4LcAKS5y17LjZ7qM2vNkCrMwfQjx",
  "key23": "32uJ7fNUSM67X1GpUymKxnkUvCTJPCFVNANki7AYw4rFWZ9LZsY2mGthWKUo73YGYbMCQ6R8fJ6R1hcM3iLdKChR",
  "key24": "5LS1DwcmjbmAtEMbjLRkKpCWhsGZmE93Qhx6esMB4uuhLwQs1h5bsBofUpmkteSG6cPifLKXiFxgga2Wp4wqQ3eb",
  "key25": "sWKdnKAVjrLsezw8UJnvoPko4bxAF4XHX5yuQKbzdZRbD468AyvNoNoUCwbxmieaaA3szKTkABTxGHuYBRuVcar",
  "key26": "qF7Jdxch7bLA7amcDAWtwwew1rxCGBm61w21W73483fPzqk3yxyuhxJiGKempc347Ponj6uG4bJCMWzj3gHLXTc",
  "key27": "21MAvwUy9fgKQF9YqmsoKDq2R2cS5iXfuk9k7u2253v3kfETD2AbSYjc3inETtSPci6k3YpsAeH7tTF6wVfLCpjW",
  "key28": "2H5nnjKj7PH6kGnKrZ3S8uMYGSBhzooDFY7tKwx47CkhkRn4a5YTsvKzGszDM4givWgoGbVpPYLTFQUUFBQVtRnf",
  "key29": "31765YdJ6oaJ42oBVsyU7Zi12rXtX34kSfAuVQdzrRRajV75EgJ4dnJamgHXi41iizNsrcgQveAVRSMFbxeTtyXo",
  "key30": "5GiniM3ZkjrYQ1FYZW1HUEq33qfRiiibU58oGegkXZ4D34fLswiHqVy6bauGsqbn5mzvRvGSY88DkcRyi5P7P9eG",
  "key31": "4Yd64JkkGgSkSQd1Z3MmyshMa9J2LwHRJ2kfmWHEXh4cguzs8ZU5uXqAyxFBTZ8joCu4H31gRWzHGtvbUVRKAE2r",
  "key32": "3tPmKMEv2F3fcWWtpsLpE27yCaaSF1a3JjJDWpRc65U8oTsoMbaq5Z7NC3qU2VgBGSALqqPSuardq5B68thVCEuA",
  "key33": "36AoaLhtC12e9HEptshe1xPnWX9SPdyz3Nstwhq4A8REeokLDpKmoPkLpQ2cX4JM9uswDxcPQ8sb2kDcjD67JquS",
  "key34": "2P87hyez2F6Tpu6u9icwQC5SRJWWStnwt2vScsBAj4Ck5egujQoiBpcw4tBMJZvMrHBmQ365oQRPsjksdBvwJbND",
  "key35": "4JWRg753n9RY1SRCQyxMHimZagYUHKxBvsjAJt4oGv4VdvpTs1G1UELXPPh4Sg4Vfg3BLmi6aWnVcJG1rNSCsFa1",
  "key36": "5MbzZoLWKW2Wc5hf6wNo7jdgaiGuao1cXBotHBseGj9mExS5gnvHbV81KmNCXVFDrkK4GxJ2RAJFMszbj4WsyEhJ",
  "key37": "2Y9WCBrq4a2Bn79nWam6mnuRTWfvAvZ3EnYEs9AZuVy4iyJcjvZeUwjBeFKakm5g5YY6K1u2YrS8KMdQ3qaKVCyu"
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
