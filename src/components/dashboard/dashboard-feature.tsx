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
    "5EDz6dXo2aLyexWw7ZdiBXY3LGAd8Hpn84kkE2BiT39obFszeeW33Uo29PH6goKaYGVrRtA8hgnSbnTA15pAKGeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FUetcNWjoCmuijLJqMF8F8adWoT6y17Msp3bJTZ5CS4hhUQrK7Zwm6SeQtJHpBLxxWaWdwRA7kN8r8NeKw666G6",
  "key1": "5bWVXDDfEKSoQEMW36DqPZa18hH5kzUDRXRwYtUrvHj2Hkx7JHu7efr7v5D7XgMSBrUTPs2ynfuPekUMsiM76oGT",
  "key2": "3ekm9s2TKiTPgcvSjzxysMGH3GMv4UpDwpeEf2XTqE5jTxARy1wSV2xpYypduUtjtLSp9tXKtysGeP9GyHfZiDAJ",
  "key3": "4SByuY7o38surivbud7JWZGzJvgYwph6e8CLJadsvxLy1K8hKPvZkEmyCazrWHP9pGyozLHZuoMxh3pJD6Tg9sSX",
  "key4": "32XVrj82o3CCsmLQppkFpGuP6PqHafov1B6oK7iacBTMkhU19MxCy64qgpgxMkxr6Gtg1XJipY4bHtQrcuPqFc6S",
  "key5": "5SB3ybnBPJ7A7RQaLBp3KAD3xzKetcpCNLVfsy2ErQxCBf3igyRStZMGgYqYYYX3eXbhJ958sTpQs5qDedeSYwMR",
  "key6": "gpKWDoFTWNrcAowGGnx2LjpkSLyj3cY9DCse2AEVL6ynVcx7mxpMuSfMgxkyirA8aYxiQeZN8MBN98Jdb5cCef1",
  "key7": "2K6bQUXqpcuVS7RT3w1M6sNigzBKszPnTk2SmrESFbtpNMceieKMwKGk3wgoKJftMDTU6sppgXUeVqLXH9AYSVvn",
  "key8": "5d2gzeUfQyyhBQzxVskrxntfpjnGELyHJngM2NMyvNzTbUyWNfq1LBzASTvqM8uZiMaPFBXjQTsTABpLBRmELcwm",
  "key9": "328V4X3DKQsJ8qicsFdUFYcMscRasem6jVGdCnxCQBSGbHCdgKsWoZ4AJv5r6SwDGXEt1sv2c4PGz2MsAi5MDBPy",
  "key10": "618XLFxB91nWhhFcQhsn5ckXzpKt5r4bdcZmnPe5ZRfwUdsr3cqsQBPe9KUfyRpZPiQZRfN4ENKKi5WjG7eZ77pL",
  "key11": "3cK7bLawttDLGSXBpaqgfMYG78g3tNFmod9KRrfQuzGTGvof6JRu1fEfLRS9VRKr3L4MXVzKaU3ZLf2AXmyMX2SA",
  "key12": "3jmzhJF9vQGV294v34uyQpaF4UF7xpNKDWjNtA684EDXGq6gRhcpUt7d5B47WDttEFRL5ZktN2QcJZiT2SZBnLVn",
  "key13": "439gqzC9WGvbnuVzirdFVyqNaN4XA7jiqYsrdMbYb1MCaBMJ71ucSb3eBsE9w2FWueSgn4cafE9L17pXwSD8fJMS",
  "key14": "4Xf9J6f5uiaoW1rAaUpH82JuNtCheeFqxJibGUViz3EEKszvS4xM2f6r5k4cXEn9s5WSv7VTrp689EkDayWuyGgs",
  "key15": "xJSCFZfBzmPnGk6BMNBUKhKx4t54JQTVpttiWy98byXW8Zd2FHeWamPUTsUkDU9Ssa9A8PjpnFHJ5BBKLNjJXEm",
  "key16": "3pjfX7cY7upapQ7hXJTYaFCMjJGJrGdZK5wzMf4VD5mcpTQRAPtCjGrD85rXH9VCX6DapHMBT6WXvATojrCUTmkd",
  "key17": "3TyRK9ogrgLSHJq883qGvBRgXshDfX1RZ1KnLwuXVde4EaiHpF5rqr6rUHAGhAUvqpHRbvn2Fmuyj5ugpAnknZv2",
  "key18": "2WNJr1rzL8XPcS4bwjEMC31SDgz2MZFc6AnPWnLW8Z8x1QGDfUoScvUKci6BFF8TbTsqzwZhA1hVjf9ZFtJ16Vah",
  "key19": "4VVTx1NxobctsFa5mrCFKeLrBBFu3iNQbLaNPZfJiBgVmF9K9h96NdzzsW6vHECCKCBkwRTyYydhbFw6V4Wtn8at",
  "key20": "29U9K91mzrfZBXYvz6YgcZcTcjr68k1B9TfASakyjfgqwt6zbUhnojvULY743NFztcxYYpC5CZMhL1AwVnRXz3cT",
  "key21": "2PWpJE8fnoKgN4MhmWfpSTWm75YryxuLxJjHa7QRpnm7KxQaweUwUWmoEvMAqTHag7CMngQsunjMpgPp6rULs2aw",
  "key22": "2PxCobkUJ2GssdU91ivnq2uDZXMWkwuLrumdWe9wyXn9BKSo86q3KrjxsghJufv4BucA2i2HAhZ9bQtvZLSzNH3d",
  "key23": "FACdPg7T8vuabvyKdKZcPoAn51FwxoDuyJbFPrxQ1FfAN7SFDRccfYEqomutzzH54pgwQ2qiogKiFbx4vLGBFVF",
  "key24": "mLPZSpiEj2N4p5viqvAnMCdVLqZiFtGhrfe3mXfUgDd4sxGx42qJCPNCULfEyvvqeipcfAJ7zzBmf4krPsTeFPc",
  "key25": "D6xE9RRQpLxhF8QTGAmt3if8cSXPT67wMP5JeVZNyjpTdEVqiNaKk3dB2jUduqLrKVgE1FGmL3frXKU1axKe5EB",
  "key26": "2jhSEcNrJV2pXpzvZ44rZucnH9uXsKp6XYoyukkdEsxAwpBeCs81Vn6Qr6wT4BbG5cHhYcmpAAZdLZBRwje6r21U",
  "key27": "3HZbR7ckVtxtsNrm6e7U6BPNGrw6Dw8Yf76AUXTnB9hyqRmx3hC78vZ8CMYgVHdo5jWD1pk2EoaZ7dTw9v2anZeM",
  "key28": "3Jh4HFDnd51RtdMN4YEfVTZB7hALgfoiSyx3SoZG8A3MfjTYm1drWL3Z5LwaM1fGrzcGQYN22VhaWMnZE2eX1W6a",
  "key29": "47k5LVwShxriEchbgJb6mqWtiQGGkPxQD79yzXudi4v5NC8YN3bQjHNuUXnoddKU6hkzDhUtmoCPEojjz7qU8isQ",
  "key30": "2WRW2HdvyWmjbhuBB9BcJv7frzKnMBsq3DWq1Rw2LgytDwZE5GDFXFX33f17ojMBJKuxVcoHXjPqc8vfMErnZG3V",
  "key31": "qYaySWuDkW9sSqTiXBusRCA6eMudrZJ4snJnJdNC8cwprGt2Df9WCochmK7f1JzbtAb7uApt9m6KK3XPvGvLaND",
  "key32": "3yH7DVmEkPQq4xkdwciTgBKzn1UGNRxvvtXaHWbZufxPEfsHHW4DwBezDwzGZewjeqXLMsV2MuNqQGpcpdiqNpyd",
  "key33": "2o8834qXWbTrjQTJeibfVtTY4heXUui6KZqbXFfp2tsJTdkStyHVGEYctVDdGAgVtyBQW5toaw65MPvjkMD2sHox",
  "key34": "65sGETDRLPx8ZSALv6L7iQdnzTJP5U8DqRUzVMWod89uGYRvWpPrF4uQ4GmD68QAAGmSDHSNv6y21oPD9wV78vcV",
  "key35": "2789vr8oXE4uZxTKVRJETB59AvZKQspRMBpyj6VJPfQ77MBTHTjjA4z6FUgG2DoYJSEftsM8TqnF1Fi3NvFkKkCi",
  "key36": "4YxToXjvdH3DwhzSsRTC6cnLDQryYRFrtCbFALmbTdbHAJFf6yscvdYKUA5gBj3Qicss76YxMi2K7PaRtyhqNMyR",
  "key37": "SrLCWVpTnvNSDrrrnGsDjerTFsDJRZJq5JaQCfiusjiLmg8uuyvxh84tLHSo65cTUuBLCP97a45RPo7txnEM198",
  "key38": "UTVAQanP6HeNW95EJuaSo7V2vwZeug4W2eURGnHHri81dmzcAooYFGYvGT8FMj3dTw2YMxpmzBmadMsy3gBPV67",
  "key39": "4sKshwwBRUN5kTsjEHzAgjsfgi4UeaugaL87nJxxk4XJBgnRDiHyy4r2ui5f6q1WMPx6Yw4Nd2Rp8Mi68V1epX4p",
  "key40": "5VBDgSgQBAnLgDVhuW41WXur12pU9GGYmcWvjQr1Ppc6dk9k9gyMmB9C7163hP8PmC95gdwVzvjA4qhmjrtukCfS",
  "key41": "2oiCdjF5Z9FJdSCkRS3se7TnkCqwZnRTxKt1exsXLAHSUpmYHwrJ6a9oGaz5Fxi6fyo9Y3PNfHKxx7XcKvyZFZZt"
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
