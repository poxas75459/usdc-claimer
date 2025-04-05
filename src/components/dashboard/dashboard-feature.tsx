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
    "3vf5ciMEqUeP7D3MPh2qGxtVAdY1PQCaGVZhefg5WtK9rwyEgSAAFtHdhjmdPNSUprbjmWbXohiCdQMydiZtbaJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CMjyXWARyNcqf6mgVW4KSXSPsG76Cv1hhfcwzd3ycnQT24XWEpzjdrMn4KSdtzSLtoooTMA9Aa36u68uSXLb3Kd",
  "key1": "39dJWoRkpS7kVgh2ErWJiFakQUwQFNcXmUUxwwf8yKX5KTLPCGhdKR7YumBGeAGXVJ61XabV9FKyU1B1TXhMYdue",
  "key2": "3CnBY1YPpJ3gGeJXAS8etqaSpYvc2FnU21APnLQ3xSHHYjgihvtFr1aZGAH2QNQtQu3rBYcp5MBydV9bWQ6xGrzS",
  "key3": "pJxfrmLEkArc7WrivqrmrHgz35SekNuR5FPkcH62ETLZUoYB6UoaAT39C5L4j778pB4Rcpwj3RNouHmZmdQPcjp",
  "key4": "5oVZvFSMJgrzLmJvEpHrBsLd1y7oScgCMhGYWHQs3mdMkDgEA9Hdsq4GuaFuxJuhjDWV954dGXFomGtqGoqiB4tK",
  "key5": "34doFMv53kwi4CNwiYahpBSg3TyjDqB7EZBSxYWGR1hr5BrCV5PSEWdeANfCaMU4VzHVzDNZmgETQonU7YsMn7NX",
  "key6": "3KeMqDAcGUdzw1msuTaFLAPpcUYEALzFTMdUBKXkopKGgs72mjQfz7tifPSX48SusCSwMJbxB4TU7nA43jd1Jw8i",
  "key7": "3ckdD8nNVmhPTmXQubNc2zz7mCGGiuC8aW1JkG73S26JMbCoGienjtpHDt2MGmBJXjaYnVpHkcLqr4uNhogezAoB",
  "key8": "5MU5kz6M7stWH7seG8ufcTSE5v1un3STUerJEuatpQcAL6Vmb34afQoQSBLorQ5qcQLGB7UVhx1hwseazjMpLBre",
  "key9": "5yZDqUi7d3eLwcSXmLK94EvBwZkvCvb2wy7493BDAa69ZwZwu7MWsyK2M65pX4MqJaFUaVuF1vHA3e9AEfTCqHZa",
  "key10": "4nPrWYLdgUuXsf566nKfQtd1FQZaTME8E69eAvPkwBGtTsRq2BbhfmHf5Pf3VFvL3VJeE9HozRQc2qMBBEN4u7bx",
  "key11": "4KFsWw4m8eVNo95bJEsczRYp6oYSqnFtjSGnMM4HC2LrfWkfV4tAe57b3CDkpHuMv2REoC5NxLV5Y9gQ5giMcbdT",
  "key12": "5QRBp3HBiXAThseBwdPUsCNSpxNXXK9VGh8nmsrSkuHRh1Hw8TCBWYckFrzwgwESYo1oCxwqiPhKDyS4XisKHHE6",
  "key13": "2yVY7oskHY3b4hQTwoMZq1jWMQ1KweSoSHkVK76apjn1XYC4J44XDTr32ruUs4XJrRss3FY1Ua5zAXhA6YL6BqXq",
  "key14": "2vMQadWY1DgsM3nLfg2UA3y3jZoX6xk241XMc13rNy8d1C3w1CisTNE8Xyrin7LRDEd2rEVVyt9kN1oc7KhcWYJs",
  "key15": "2QCuYGG9Rarn9xx3TazpobXUKaZvhvofxqcF8jqXoS8cDqr3nLPZAZvhvYs5ovdmpzGGQfL8pVoYBXegYM897dMW",
  "key16": "4JjxYNXwSteaRa7fv64e2fTLhgddUApFAF4gR1yhFh7RfxTadnjysF5HGTK7WqvXVhfZ4XQKpBY6LjSzoFAYA4wH",
  "key17": "4V2yKdrjmu47T9VSxXV9Z17cHE9ik3ERSVKvDZQoNGzRfxTKuzMhLzyhe9Qi7V3eS5wfaxg2PxnLmJmj8AP2BBbC",
  "key18": "67du16iWGWsvdRpnD6SdneWUziD5AhTasdx3MXsskkbzFvfMHGAjkEy785GqwByAWsywGd9aJGzHY3jUyHYszq8a",
  "key19": "5tb69caLTkzifDdBGAHdmtVzEyPXoj6LQz4XnPHEvm1JJMbV16BLMEWwv3hjCja6idiZJxo1kMgdYgdTiFtHsJ41",
  "key20": "21VNhxiLfDnwScSy91Ed74LdoVqjhWB6pRgopRN2CqQiZSsQWmFxeyjXntYJ3QPJqzrG8mELuz7HpNBpUDx5xwic",
  "key21": "uHzxdM6v6rXtWCXTUiKvs7NJazu4Cfjs7ByfQYo8j3RScmUTbAceM4nnyqxrgCJDnwNdwDkjfNaQ6RDy4xDhPrw",
  "key22": "HfVwZrXKPBgdVswod5wpFryQR98oYNAVMJm7pkjRshgk3Ex2y3estzdPzEvYMufhKuyXW74bGiWgz5uebgN8p4j",
  "key23": "TRnkQzkWGtjudomFfp5cD1gifiskmecgQpaX5oSK9cLt6sGcDtuoP245upVkYK6FtJj9vQmG1YwV4Y7PgNhYFw7",
  "key24": "3zfkbGywCYenLbi6uva7Acf2afV8VQRehyMuDPW4C6EsXqzUkas9T48KxuGoiYDuAKjjekLnaahJ8TLmifbZ3Bpd",
  "key25": "5p9ti26LJBzoRrwVgLpuwLFMNWWDPqscNhNQU29xxwBcc7WF7dxzNCs5hjArHk6Ry7mVtezUXh4caz5SbU9MGjbX",
  "key26": "3GXd4P83FZiSQbdvCYfmzB6kBRehHs4uoh7kbV6EqQQEsT9zohHXeawrrzPBFabqUrhfemKTMfUHkmCMehJU6uzu",
  "key27": "2zCJYejqX1uHeSRNCrTQAvafyomewAUzcyfH82ocZFg9ketPXQPfvhVLeCDtWC68X9mr8TYVYGfMjmFrQLEC9MT9",
  "key28": "v35wzR2c23KyMNn8pCWRKuDGsD5Cs8UpNwKhkfzX1YUQytwJTxxqi19ij8Q769GAD1JqWJJi2ciMfmQSKkwF5fm",
  "key29": "4G8BfF7rDn6LeEuCJpVhvCxtJ4zn18mfmzbu9avXWRQRcPNp2dBzP2UbwVC64B9xx3rgEq13A3NxhYH87h7SoHY8",
  "key30": "xkrtCL6eYztsTEosMzDQPbud1yhJT2updwaV1NfaBz9QGk6jU1NDbQ9SWLo3qnBYUZDRF1riu8css3GnZyKXrK5",
  "key31": "fhQofZ4EKWdYL7Y4Bgog5r8uxxEG4fz6FYkQ42q1SbdstS9aGSdshK5pWHio8sHuKpQ9AnsYfvj1iTnFqJWa8zC",
  "key32": "9Q8sKrvV49boXRE8LSa4rrUXMnW2jBSfjCFvgr6af1Z7JoPsrnbG7kpAED89mR3VEvQZ7G4rbjQF3AqiR2wkS1X",
  "key33": "2shqN2r37wGpqM4jy1CirMymvBTJhk8gWS4ALQPNyfegudoYATA1tCx5uFAeXZcgcxqSVKZGfftm1mqihTBdbn1G",
  "key34": "4Xg43YT7FZbPV7o99cUaGgkg4624CEQ3oopcgg6wFHSUoLMxxGzoZVU7u4ToRVTiT8t3DSV7emGy97gsPN7sWd49",
  "key35": "4Kfi5UCajeYvxyEbyPwCjHsTGixXebopsFJKWqk121V1tApgq7NhjQsJnWnRgq5qn7azGRhpKiDHkzv8vfTmWw8X",
  "key36": "5pe37YQxuhPkNpCGEpt6XXLDsMAzqLndLmJt4uJsjUVWpLnKRPk6gWrdnte7x7WqAmpB5RJBT1DfB5eJPu9go8X2",
  "key37": "2JmnLJBHBTDzptoCCurzfjXwNMtFZLXf5VqWVfReEY8SfYq7ynmS1K6vxEsSZgCYyXujtic11un1mrPLzSnmFYzC",
  "key38": "Ur5kMsY2uUiKWT1N75GKSLmqvvDR9HfaXNUEXeSu863pgYWG9iUBf8MSdZuFU18wkdrBpCd235AjHTLBZz1bAQ9",
  "key39": "2HB9575geyCxsJFv3BNLdq4dUF2dJjPFRoS4DdGQENyHQjCCBiqzN4GAa8Vp7VkuHAi2mzrqhw3d2rZuDyFkejB7",
  "key40": "4AJEUzbmouuz7JVrYnA9u85b6bKZ85tW4vAQvNiSs6Z7pGvW6YTFvZqMsP9WQhnsu5YLcqjZoe4eTF8Q25BuR7R",
  "key41": "3ViYa11mgeMbKvJSr7NbC4uTUUrsJPbJfBTU3nNsGaf68LC5WDvXjRHncLB3wHCrFbRYVBzcCBXaeG9uHSW6mxZN",
  "key42": "4w3tJ1T98wKGGZjQDSjKXg3ZFsUraTGn5VuzQjsUS6As4rFAQC81mx1B9SARSNbMjKZobvDchdoSqaE2nzCvz3rv",
  "key43": "2YE5uusbUN78gLUJcGVxahVJwRV9i1Fc4dpacqxU6d6mkhKtPBrkfJ65d6Q9thFrWr8HwDPNNUkYKDku1Rw548as",
  "key44": "2uJBr7XiL5r7WVPqpDcuRMC5KiN3cwFfZxitun96dYA4Do1PBfhWo4TyPkwAHTZ8WzqxRVoujBGV4jbLtQHsFjzW",
  "key45": "5SfDg1JvDqnQfRrz9cCtCVWk9PaqKjhMndKvJU8QtXu3YYTuP1Ec7wCXSrG7E32AFGK3a7trswa5659sMXy5hoYb"
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
