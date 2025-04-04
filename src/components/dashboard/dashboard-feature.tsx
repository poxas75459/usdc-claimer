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
    "4ZiSfnEUgkZ7JitFW2zXBAtTMHRb6RVkTMUUtwM28s2MQL7wHdqmSbLuQEChfpwsADHEnSBy7mLA8MxKqmwqHKTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bMwJrWL3waCThN5jc7FkRVuVkJ84aheoq5Z2EDJzgsoQ4h1daoEXi8ckRDztWjLA9bf47iqsaNtw31wzo9GdoJe",
  "key1": "4wKZMKKAQCSDdd4HAAru14NqGmw5kiF2qZ17CxprDtUMEsLrUCodZNXAT11N83dp9HDD9mCh2MFzGR8U2v2cVUEX",
  "key2": "2HWEHAe6dYoJknZkWJvQ268gDioqj3oakCUEF5gfB9zofEkj5G2SSyjyzFRy72WdrexMCin9C6WEEmbAjrn3M6R2",
  "key3": "67fWrDWga7n7hKVmggVxeB8rNMjhBsPRszjtLANjNDzsEv67dU1WLC8hv533an1ao5GHdWspnVs6g5jzXKCS2EFR",
  "key4": "2za6soz7Z2taPAruyjwQuRweCniW3g8iM2UtwJ5yvtGf2XnJMswjr7ptDB8XfHhr4smmt1SNJf2UUaezrCBpGDhL",
  "key5": "3ZXNQAx4yjkYM93erYuyCYAnUvvyHi9eTZCMp2Kf9Ycjt1wvXobNjphZjZ3R68YNcZvxoFfgxMKrPvza5ZPCGTXy",
  "key6": "5iBHpEyWG7LFwTKqaHWqNMwXkQRuQQLCP2fLj7uNpArpskkxUDmiR2v9Ck82kiP8kdaMMK7YD3omKJbAtsm9KwNc",
  "key7": "BXdbHWn7bg5C6VisMsfqiHBEDibkwD2pTgxeEbWJtRq6HkwTe5d4fjNxsqSeAdkeNYYXrWLZeF7r2dV7xMf7FCp",
  "key8": "3Q59waxy6CdKWRPrei2XmH4HS2zXZaudjwTofM6pnz7tjGUYz9FT8Y6z6QaxQ1769pmJNVoj1VDMay3hgoyQPwFs",
  "key9": "2dL1LhhYBNYFKbRmpLEe9b7pqTz6eJ4iYUig8SXUNHLUk5dHVrM9bFrC6vbpUBBEURUUPMWGvEJP1xwnu36ZvbwN",
  "key10": "5wbe7c7Yjebwna8hjEUwNFdZ9ioPiw6Zg3geZr65S3A5dDsvAB5BjxQV8pfZoT3HgjUBNn4wW9LTzsaZZGjfirhf",
  "key11": "5dczVdf2pF5q4rrwS8b3aqqYgGoXg9gRDYwXPMS5pruM2Xnq4QCY3jqhq3GTfDqgNTp5NMqrJcRQFThP6tH7aBQr",
  "key12": "jo3BjfBgLtMD7sjcfiYdEP3zbSyJWme5o7i13kwEkQNoK2KMRjJhpbsno1UTxRQaZM8op426vh1eDi7vk3p2nbq",
  "key13": "35LbDqWBGvz16m8iJsUW3bbMpKrRMJv8KKjmmj4E5JwvX1iXZUCKmp17aMrBY89Sn618UJaKcC14mqPjDHabW8Ma",
  "key14": "2EZrMrnvUYWqguJEbnxbhgQfPgEV6U7VwCTH8Lbze3ZHKBo5F1zQvcQx7GptFKVDvx2ZePfU5ZapKz5e9XqcgQx2",
  "key15": "3qNmKvDXr2tSb9T9FgLTKMUHFXXEW8b5KCgkKZhmT2nz8HNjCEpv9f9Sxf8pe9RXBHK5aTjQPARRUMedjz9Ushwz",
  "key16": "PURiQ2uxZY2QudmPrdTWMdSbvVySw46f8UPB59atPhnAs9dA6Nhzhv3HjwpFLC4j8BFWrN6pFEmNbmAdwCKSAif",
  "key17": "5R9F8NYbMNuSHMAvwcVbLVrUQHtbwAfjYDEeVKGQWxSxdrQCSwnXZiR2fUuRBuAouHF4NmaEADsHYHxSn8sebCnr",
  "key18": "67hFyiRJdnVgobMSj6kkUvBwvpYaZRMPTDCP7K2vJiqtFg1L5Tu24ecy3en41EAsDt8ZKST6xVBSpWM8G7JGrGkP",
  "key19": "3USHsoAW7wtRFVQomqfjFkdUgK4n6C71GBf4bthcXcVhfFXhYY53B7yXqmXzMaXGrAia2QmHQaRT38oMtUcbCdtb",
  "key20": "46vizbdvgV25ZFX2u19jEhur4w6FEHNkd8acmAMpJQXRjESJxiwA9eBMijPw9V2K2tGCmCTvWZKsQiikMSXw8nBy",
  "key21": "35zkBCfwXBV33zrAePf9ECY57MiAAH8qDL1WDgwimWisUuq4hu3LR78J2TTeDdua9B1TcFuyePbeiq5cDCGCV6Pq",
  "key22": "67JGXKdzmCGtna2QoiSUuzv3CivcsiEb6T8oqVsW4EPKNLFkgjfC5AguNmMNCEJjv3qMiaHwC4v6zNDehNe2BbJS",
  "key23": "5Ev56z7FgYfCXXadASjKFHxdqx794GSr8uqgQQKFeyKQyvF7gXQscGZ1LKoV8XLB82gC2jwTV9Ni2NG4igWrgax3",
  "key24": "3MMd1ga5gAZpUX9Gat1h6YRtEvpnMeVmRFYkFtnLZ69TLuBTAJW7iQgx1mN7vcCBfrH4nDoLVG4rDz3ZLd49nV1i",
  "key25": "63vAdg8fEVDpntj9u5YS1RMSN8xpHxLrh9mAS9er8v1My8titz27sV4LqmRacw2Hzbs3SJ1F3c5pRuRtEoA9y6zn",
  "key26": "5v4gJkgYDfXgZWVH1rmgVGerxkTNsgan2CWDi8dUh6Sgs26r5vipkEMejARnkZvZQUGmBHQUegBfdML1BeoMuKHF",
  "key27": "pcR9dVJfKURHaKF2gajHNdhtdcb1qMArpjptJFEi5e748KHLcbJm9gt9f6mwgu61QJQ8TN5Vv75MZHWUG6t1FwF",
  "key28": "4HNsDaUc2bTd1fBM9U5PraW3Yp8DqxqTwsi8abfr3yemcfP2WSYu5Le77LKCT1R3LbvFQz89k8AEF14TmShqisAL",
  "key29": "4u3Z4WmZypCpmo45YWb4b3Dkk7m3epQwhZ4VmPEWhNQjdwv1sJbHQktxXg1oe87t99ca3ZKKBKUNFZunDSuhwmqT",
  "key30": "5NZvvL8Vm2EVtngMrXujCrnanfSiPL3JePLRFdQfw7Zt5qbYmz8bpnsfXS73XZGTAnx3iNbxS5j3aoLnwALih8x1",
  "key31": "jTpnqdqJynvMvL5r7zb2V9XS3B5kk8MF3nwLoFBdGcQVFAWgfx3Mo7JNsjTn8AwSAK1SATUwr7TiN8cBktL5mrP",
  "key32": "5wjRrZsP5jcXi9K28mZdBHRm9m36Er4rt1Fe4SwgfxKef1D9YE3C4sucgvwQTh2Q2wUdHbZpjkSokEmCpdf4G5dt",
  "key33": "2CuUyLfby66xQ28TxjaBPTy2EnUBaqvzD8oWGRLSaVZVXzLtpDGFdJjHKyc6eVbSye7rt2kqkdE9BDFaQr827PJo",
  "key34": "4vLgGsKm8gz8zjsXpD8CSycB3JqP1p8BUSSHvTz2WTBVeBDiF562Akk7cfbSTXQd3QRdWdQd323t78SUzcMvPHeJ",
  "key35": "bQcwvq1PcdsNQaBKKfWSpr5pxfXAX7pdiRtxb4gexY88s6Tawej6bkdFjcKGjasKYtCw7Hkb1XqvLLLGRxtvXQ3",
  "key36": "5h7XKgLmion6b3cTm9WpBWeT76oGaM97XJFdeQ3zE5VaPbC63NLfxJK9CRZZW8Ux8WD2BK1egYmXuRfLSfRsotUH",
  "key37": "nzovYxVrdPVottC2SVeZakzsn8WpcEze3ztA6nm3pjw6eC2ci4GLiDPb56ycd9fPgitfRRqynUs3FzxszwcUTmC",
  "key38": "kjfs9W95srgdmYea4o9suaTwziifjABFBbwP6JRfXd1YiMHHLJcbL2H8FzSBxDuH3gLdTZ2VDmayzsx2XZjJL2F",
  "key39": "65imZuC37P3oousQexZkEjFrSMC5NKHuftU82B9xhu3upqV2SJgmKDADnvm5kT2rBCdzz35h4gSdK97r4SmAL2Hf"
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
