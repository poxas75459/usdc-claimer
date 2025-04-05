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
    "5BDTLqUssJy8zTZiz99YMsunknNqHtsNN4jwmAU2bRBy2JbCeB3dvXBjmYK4ktrHYBLUsbda5u5FahmVXS9j8Rmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f8WUpNMX7C1hHUDcVgNkz1WoGKpQ2nQuamqTRz2qpnuncJRWVt5BwT95PwW44DrKC7fnNTyC99NMASRdB7DJRsC",
  "key1": "5d8aFZ79SvYY7p3qQpohqEZ9UBPxWVif8PU7WB6WUsh4jZjEzkGpiYf88ShEnHu1JpMv4RaX76iTCW3b4ieU6Mbb",
  "key2": "5e5tv5d5tznQpqj3um4RmRM873W5PpQxrbUprNWWvejJZKrm4q8W1MbEnTWi1gk9EPr4pvubfJ7m3syjfmCTFojk",
  "key3": "27kCgEqnJbomX7Vj7RvN1VzzQ8cVyn6zwUAFRBWT9ftZSXuPTgSjshWY9Cgo9ufUW2vc59smWC8TNJVKGEu25on1",
  "key4": "3kohAdqBbepRKbLttTsMLoveUbEYUhvwgHd9zwX1qMg3Qfg8icGayVpMm3KsqNRg91kB9ctrHkiWiNpPMpARzSuY",
  "key5": "5xn5c7ZYUyFQ7r8snXpTKDPr5DnH947sZaAknpTZKmTYy83qnmsVnU5Hkods2Vtnnnvyqwbeghg62JDaMz48S4fw",
  "key6": "2bYECy5fu3sfQA4xbzAjZXAPKHhjyB8xpu5QMLa9cqL81YQehKvbC2fVA5hH3RbjH1rbmKNYiw1Tq2EzTi7gxLGx",
  "key7": "4i1xzDrC3NdAdAHjtuhtKDPhMwfpAsyB1m4APz5SGks6owX2MxoCMRE5haJhNhtqsbsQLb7ASvrVnhJFsuYB6Xvo",
  "key8": "5rhmy66oKJ4jZB8XnLXhQrhqBhBAiSFLB48umSyr2ssBD3YSpPQYvurSLjPZbrgdFheCeXtxLa28ndCYWHUPah2c",
  "key9": "3vx7T5ThFnrhPXRnVL65rdnuXYo2kEqVB2e4fx2pGXvQLXzT4hC8ew4K5pFSTKEknz84DtVLdTW5SUrVfSYT9Vak",
  "key10": "54YDb59i1UGKbtdSR4eciMrz3fPzMJxMjPuBm1VpkHfoK6Hmjj6D1Jkk5nTB3LgS9JKkQuiCo9RwaC8YgxAPxLjN",
  "key11": "43P2y3e4mNZWfyCnvSnQb1jTXsvCPh9qns4R4CxNH6JoRV8wesUhFBpbxeh63gBmJD9QaVE45A6AN6JW6cxLdyLF",
  "key12": "23qp2FNvjvk4uyTvmLbH3bvR1beRRJDxZo9SN3YGnfVdgzp9Do51jDo48aJ3fumHFQvZT4aVkyaetG6o99qV3RUC",
  "key13": "4XgMYkekrXPpsjGRQ4aXa88VX7HpDP7bPGLDQZA5pub5GTPS9r3Mu2TXmLnzqnFsS8gUjkvNcvd4bN8KRR4zLV7i",
  "key14": "DnBcDe8VxbXC6vBEgDRXak5V2HtZDNHemitGAsBQCpoyV3Cg7KRmCigyQFqCvcDm4BhMUoBSaYdCV2hs4Cyr2CH",
  "key15": "4gZep8D8ZsZbsyiooXStZZn13ukEfBf62eAgauWChyEmR6iRtwH3jZnCp825m48E3hyUjh4LYmwSkmGrpP3niBkX",
  "key16": "YdHVuSYC1zpSomN22xi63M8Wq3VQE4GR7y3pCPdVL1zePgzYcEuSo1w8BBidfMp5voYK1ZhTMp68tit8wGLDs88",
  "key17": "2bQmLK6RHiCfB4WchkoZJ1j3T7s4PmiZCS5wdCF2pbUvBo1UYyDqR3py6cUMMRJarDpyNDn2gmFCgsagwDDHM43n",
  "key18": "3ovot4Y5kHUfMgGLQVhV8GYMrDMPmLKGTWniigCVj92pMh1QoyC7qJVg3h4J3YfLyXY4uEDjifyWUPESDSErRzTR",
  "key19": "5jLYWzF8FGXG1zjV6FBpDBC5QYnyuAan5MGnWSak63f7R3V7LzV4bGtNVXFaHH7RySFHQtpMJBzX2Gth2cstddEW",
  "key20": "2PudS2VVseJUcqY1kcN9gTdfuNBs8QedNiBMLX1SANm2nmehbMF8A2iCVLEfkr58MVSjtgHMBXr2CPt9c1nrqJoH",
  "key21": "VRVesBfzG3Vd8bjG1QvGFqmur9RfAoCvXC9ZNzbY2VVfGekwj7mFqmjd93SCmscukSbX6AzNaR9jjKy5zbnWgbr",
  "key22": "2z4kqYe6Lmcg3fUPwJP33PUEBDwfLGSPsjg2dfeeWEUZVFsVMB7JnB8hYTMGSjiNQXkVXLZL2825TX77sTZWFmtM",
  "key23": "hQHNZN8tpFyomgpic5Sy4HynNqwVekCmAXkN9avbDooNsZt5fQHsmxii3Rv37r3SwxyWfgmTY5PH6YvPMmp5ES4",
  "key24": "2iwiYeAHHNpg7cYetaGAT1SViEtpZXGc1T8YUJiana9rPA7U53PTA6wBgGYQSokYM9gLYxZvPFoJ48LvTTxEpKJJ",
  "key25": "3bZsLif31hZfbAfwX8jVoyhTcwbrWTse7ydoNH5PrdY6EPePx6by5QemqCpLVGeVmvvXwnequidtuNBSMyiF2zT9",
  "key26": "2MUqoEbLocofjBgb2etzF9n5XAtcHkZfJayJaT5jFi2CvxuhaaaxKnQQPyXtfuxSBiHng8c6mrRdUvkuBWBe7fYq",
  "key27": "3yajdWvxRPRt61EAhtQ34QqyxuvoTzH38Ahh5642vUrJu1ReA2eBiiBMhC47Gzvf4w5yJE9rf3dP3ot95rGNVWZR",
  "key28": "D1ikVocUksnkVyrjpF7VKVd45Nk5ex8zD7BZQZmd4QBakB8wLzKRsJHNsU9Mp2zvKjo5W3E2vA1FSmQ4VpbrqvE",
  "key29": "4dEUY1rmzRZrMNQz3PMv6QSNhgeMktxT7vxdSKGVaGbYaqvzbrFgEDoeQ8we4nNVDYue6xRT7mwhrjq2sCDHc9ny",
  "key30": "5iiJCQnci3sofPVagYSTpiapTmVMRVADEZ1RFQ9F53m8bN15VUSzsnQxgPTpJ1peCiKBKzy3gYUf6sY5GiXjS3Ac",
  "key31": "3FUVqmcgPtuw1XGnZR2VWE6VUzdaHWTV74jrsvnNuRNsH2oxQwijBsU5F1dQS3ehdfipa8xKwe5SESxaf5GdiXry",
  "key32": "3MCkchuzcHbnWjfcwZRJmVAn1qqUHS43SRuA189jQT3gvN7b9tsqL5GvUH3NLxbhznEB39Wb77iaguGCVR17cw3F",
  "key33": "3sk3Q3njGMKGUY96FNgwqyWVZnhaEAbamjgvDDbqsBPXiAL2fkQR3GWG5Tix9iCpezmKScuqj3qzZkME5ZLGz4Zd",
  "key34": "3SESuMstkgsWzcWKYRM4mJwAv5YEyD8M2uN3vLiEpix3P9mrczztKzApwPGoBJMtgMzxoHrYkRRXH94TeWf2a8Q5",
  "key35": "4m5HQg7Ld5gp2M8z5tptmponZwoJRkkQ6LX9gnUAywdvdagFFGhUJgpFkdQgcR1KEo18TArJoou1yKADSb7niueq"
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
