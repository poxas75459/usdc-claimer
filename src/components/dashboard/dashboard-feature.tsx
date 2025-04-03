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
    "3Y9VCY5kqVHsp7Kpg2j1Em2Gs99oiC94Yko4RMeKNfkgdN3dhJLPP1scFSYNAU1xU8L5rwjMTkW9NHkCDGTupPtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q97v8hNe3xZ8uRAdKzGteh3t3bBHkboEsFbUDtXxAazf4v3ApmM6in4z75n8dFBKpBtq1iijFQpE4YZzqA1RbUW",
  "key1": "5sDC3N2nRtNCMKTXtMMG5NDbYUC3RceZCy2Fearu2dupyZW6va9BeERgYbHMWjCt8ePGsoZNnb3rWYfjEvM4J2dy",
  "key2": "4Mc7twDAbzUjjFXpxkCSZBuBTkFV66oKKfUA98iTWEHWEtwCezBSBUkTqDKmdqffkgqpLVYSGnFCf6wJ7YPVCUmM",
  "key3": "5DXo4AmQAQki5upazdGA77SEvxLizUu8jbcWGr8V9m7FEmvAG2cihAtqTHguQRrA22cJB2PDwTUMwpnTyDhCuhvc",
  "key4": "4TLqy2QYjoDrxc9p3S92JCd1wFun1BUXm9qfbtvZpgLRejNHqcj8qYpFT7Cd9E3P4Sok8AWpFFFZi36rY1zikR5B",
  "key5": "4wKXKCKQMDjhBqKKpQxxrmSiBucWSSYgDz7myUgJMwUajNWwTST1NEw5A7UNpDGYxhMoTdHDYX9Xr2HwoKUyqjbg",
  "key6": "2eXJmyFYbfLU74XbKjD6DtJ15947RcjBRkUiPpgd971RxgTiKU8NcLWeo6RhQBDtWsqcwgJL5WMbfCXtWxyo2URr",
  "key7": "3ms6Q26HUsPjodqdhpcChShxsjmoF18VnftzMJsjavmMfpeJXdkYReU5DwLZnkaiX136nQ9ChHMqmRMw1tepPctA",
  "key8": "5kadFz85WcprBsDzUTRNnVRt8qx2ao4kuEF5NWSt5v7t4HNhs5r4MMnMEuMdPbGvFiv3S66nrsMDnSE2tJgo6SwG",
  "key9": "URU2C1L8nnKMR87FeaSCH7QTEYoJUs5ZsXWWnCZzKWPXxTMHaTCBJ9BGCHJjjpujrRAvFH3RxJTz2pvgGMyQvRb",
  "key10": "ms7B3Htu8KWC9nQqXK8XLuhsSaATokoxdxAiaMAU6LEH9pmu57QEs8XPoUSc7yy8SaEDeQhgJccT97LfS1KxcND",
  "key11": "51UZMcSpbntkZPfaGMoBXeWgogDGcquoEnbSRSiAYp8xSiJtyEqfCXsAnVMdSGr1Bzmo4jQAkZmtrPZ9i8MHvvqA",
  "key12": "22k3ZHzboXucihZDVwdbkuvHV3hriuMycVvi4Cjf724rSYAgtz9aWU89jTz5EKU9599jzm3bNjr1SbEPWibZaQtv",
  "key13": "ucNHTzQf68V5KMWehdpPAdf7ZKNJrusRF96HmgW9rVnMJqndK8BoPB8zcyt3PbPrWSTcy88xTm6tb6un2p1eYuM",
  "key14": "3Ejad4KdWhVfxRQ3aKUjfHubPP25xYxZ97pEsgMWP4zAwYigHCKNXvTiBM6C2SZh6GWyqmBc6TrgbaAJrApb32eR",
  "key15": "4bBXQ1T11jTUV5sKqExi4czeHGBq9cb9VEscCUffALE5YGk9GaUQEr1TwzVKxNfuyXeLJhUwYfEoP1JTDCt6fXcW",
  "key16": "2AReHbwRuygu1EXFy7DHh8oriYXC8n9k4x1W4CYfR7ku4e4i4jxmNXvRzvUpyrjVxcZcUymvJnJ2KNCM3E9qMcQC",
  "key17": "3zm3S6MqCZuA4wNQPfjhi8rTQbzqCUSQr7sxBGxuxZxiFmM9HXAjZQq2CnQ8JTNP4zUN9uDQQdEKAoWbHiK6EMP4",
  "key18": "5HKKMkFvdqrN2fLUJAaBxFaFSjpT4EHVyVVehS86pCkuQ3cEbKdw7VcipA44Su9srU1j61NabbYgSfqj9g7SbLQh",
  "key19": "5A78BEEz8nGEcoVmaECmxt2NRGWat2wDKw9f7oudPJbASkVdpTP5Gmqvj7zYxdDW3DE9KmsUt6dBYPE7i9HrC2DM",
  "key20": "55nYQMQPoUYixeKKQhZmoTLMcL5saGnmxo5ztpkb4CBRTrCoZsspTVZUrPbLuH6n3c9LGPKUp28MRcDfHNe3gmYE",
  "key21": "7EQfn1A3FXtoNBN1ZmJ1FTXubafhfsyjiwrtcUprQTNW1jhX8iv5BktwZvdBeZQHKfQkWoKgZVw9MgMPxGZ91F6",
  "key22": "2ybdWmiFjJ94rF7yuUeHF1LAkRmzhzzezeu3mjBat2QAsjDKH8LJ8HkXK3t5gEbRLogh63DwcQHg3AZGVo2Hq4j7",
  "key23": "4zeocWfnAaYXpwDbC3BQCEcv1iqnDg4REz5w35eqCZZjHDCivMGvTM9G7kQnbc72T8VZ7b1bRLm2XEecbyDCgiEo",
  "key24": "5igRrAyFg6J7mXBafoFjS11UutwGMQfPqCyx2Vq5aoz9cbERXSLy2ECUkTgMhV7qCAbeT1uYHXjP5khkqSGNZqsV",
  "key25": "2fiRqQ6eARTh5grd2hzKqW92mfyywC2y9ynubuCK2iPGJD97dy5qkZtpDhJjWKpiyREigUsFqNtN2YMSCa7HDS9t",
  "key26": "5tVkjNd2PjAUBTi581Vof7SECVx9pi8fVzBv27P8fgi4cYgRTAhDgffPs5wFGdTvEEUHmdRxCyxSGNNPBSLxyCtA",
  "key27": "3P1raj5XaCgSDmzuKXy9DEbCpWB9QpK2JJEjS57y9i73ws5M5CL9u3sVPRUPerPvGMKn9CfimStj4NSLHWj8gix",
  "key28": "4wbGpWSLnzrKPGZwWvgSAqHD8giVEpG4VhH5cL2FFTDZR43zL2pmmgWdBCLVnioM8fT7W37C5UAUuvGn792MutVk",
  "key29": "3Qe3uG9b5ZjhYQSrL9Enn8Z8YZAL7zNkpzd5AUGRihsVGrCPL48KA1cgVAKa5c94Ey8boRyhLP4Dj1AJ4K6vwVmp",
  "key30": "3mcdTA5EJJHZ4Qb2oZP4VdfeJH8Eb8SzR7XJEHb5jDLqJ6S3T65JS3j7yo5bmjzhFfbJkJDPXX5iJugGrzpzpzrZ",
  "key31": "4ehHcKASj5yqNaj4iGJN2CiUV71SbcZUMRx1wNwybbpKLH1vteRDxmdpCMyM7rZssB4J8Wrgiin1r9YYfiAMa4E7",
  "key32": "5iuyZU6CoAJGxk92VHMpX6MpRgu9w5byMWDcXAtwaSrtiow3QFSELMBSSVq5jseunwNEy16WB25berRK5CGxupmM",
  "key33": "4ZtdJNfj83ygTCNFCPRYPaZ3ZbkVzZXa9YYZhoqbMsnW53fcr3vTmYXan7dVQLLP4Rdng7UGDne1E8y1YAjyUuGo",
  "key34": "ey9R9At32GcGxez2CxJhhgXrn4aQeAGrPQ6En9QJWW6TDqhbBMeBJxVZS4gQ3YqCxHHFqHF4TKXXSPaCCvLeNXB",
  "key35": "4oV3gTpGAP3mND138Gui2pJcMXuvf7LRYPXXFEuBSaw85pgaUa2XHoigHpf9hZKsdjWf1yg3w2Wkn2pYhs8ZTYnK"
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
