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
    "4CNWVzwDjP4ziRNxZLdqwKUsAA1FkdJh5UKRA8jdDaQG483GQZ7TSpimVB4gJFvSKNBE16DvZw4GG7ND7Zd3FaXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iPy8PSQTV3kxA6Vp5UBxgJ6eFPweZkMSyihnysfPT1RwdBpQRmVc8tXZZauLnPuN7cxkHxMeuq981E5ym8YRkqk",
  "key1": "4Nk4A422Jmn4UWybtV2ddNr5uHsaJYoAm8raFPFX94zSVNucjWTcLSa9UrfykUeuFigUoDmM19A5HKnqh2wYMVbh",
  "key2": "5zNLHbf1y2ZkFj8yswsVt14Z2FCw6NQ71jQCMeR84dZNZtTTrgRZ5NcZWKHzbyktZBJ3pcCZstCwWV3rubzRZ7C8",
  "key3": "5QrTpfHznfNdMC2V1eP4SuKFKfsyQugZG78GaSoQmq2QTumY96yqxM2gEsyGDD6uawXYSeTZPsGXXTpqBuEDbPUY",
  "key4": "2FYjUAQjFgMpUAwN8UWdqirjuaojy6GzkCrxwDVvidmhUj3saEipM5iBCMSMHoywLHRLamheNCNcF4AjDvwPbcWK",
  "key5": "2xKhL5RsNUnHehCvPGLehH1djtoid414DmgDqF5KHdrBBxhzKtzFmvER4NBSzEQEWHh8z7Yx2Z6DETxY5scr9pcq",
  "key6": "5cC7wMrjwmVCcxUNrQUm8C3LQNbf9awqzfh69dDCGemZusJPUCvsUmi5ryMxmNVRYThm5GdsHrXNZf5gJvz38zFy",
  "key7": "5gCyXNkEmTa9CT9azHUZN1zEHK8DUtBEtuaEdrbnFqh46CJmPeQT2McKzoa4R2549ZyBXRH7fvjXRZPP8d8foVH4",
  "key8": "4XzAG9AhRNwh4xiLebh5tCb5Y5Hnhbt2hKcMih281sMEPumHo1gA5BP3pte3hVUVNr6CHb8hLtcfjogxuwwaMomV",
  "key9": "4Mw8hhU9f2a5cpk5sgcN1HF84Xwh5PorKtM1aLtpDKwT93WiwfjMsdKvprBuhJxhsNMFT2zVkEiFUwVQe4B923MG",
  "key10": "idnrLgGSA9X1St1p5e6UHmsf3RFjh675ZkJE5Y3fu6ngXhbSctLWvdr5CUQev5BHruxcvuvWCiy2pEZEj5bLs2c",
  "key11": "4YXeiwNZSe9sXSr5m9JLFw23f6Av4u3URptcqbDPz4Q9y8fRtoqZHDYJdjyNu8im3PQgeG3rz91MYXimCi3aJV4y",
  "key12": "3GNFm7XfaHoi37uyHEnhov2XqtYRG3Nak6A2DvF7tE1cMdViymSMuJMWZ3hLHYbTNveGmyrcCirsALxijBGQBcz6",
  "key13": "47ffchFHTLtCeJjQ6neLjgt7FmRwiZmuGqQwcUWot8SitRrRfXtcZJzz2dCmTTzjZPB9bn5H79rnH9idGFCkjg2x",
  "key14": "2vJb7u96zYh896V5VSLB8q5CgiVrk3VtNXGoSw8ifkBSUjYokcM1AMwmRYj8dh4Yq1BxTu4ophJL2fdPeAPqGutD",
  "key15": "2oCNfSk7uTxHjya5Tdv1wo3Bu36d9Ht3fKqLsy7exTM5gWNreEAc4z3nxGivHFaBzJ5n5dshiDW1itGTJqTBh3ih",
  "key16": "h9SmguRY14kaxp9G2dQuwJPJty82Eirm5k5jZZ6keocniK9oP7PsPo53hsv5Vyw2gu5bbTRWLoTXXo26maMby7w",
  "key17": "2j6proyRo8fDzo4QjZQKE1Vr2FfWvZJrVM7HeXceV3q21ge3N8oo2tVGXTEW5EEKZEx2ivpPaKDGNb3CBkZHdLKS",
  "key18": "4yqyVSQJmhGvzTCgbfJr1pkqN7kCKN4cJsuTtyRoAzsBRgFENGDu9uWre1mtuNGCH88PpLzVt6JUaeKVJSxV8JxT",
  "key19": "5GL7CGzAma75eh3qJNPe3utxS5nPuUFSjx8z6cbjAiwjFPgCRS3DJV45mK5qyRpd8Q3LZuPZvm4hiE4iQN98LUKE",
  "key20": "5sM2B3BxDyyPyrDvax9dZ9bwa5zSAL9pn5k8mV1rKkZi1a1vRkCdcAv9ACkN6xSW6xkjAXkCxsu5HhbGgTRUFWC3",
  "key21": "58G4NHNdpPFqA7Q475PJXaVnqz7w1WXAQHNcE8v4inxQm55TuYB2kSpMBsKdDfpa8cKNB6fY9T3dQcbFK7Z2vgj7",
  "key22": "4KP5fVUthZBQzWrqVt87KRyMnbYrvDMnorT2oytGaoVbPs1htvMy2oJxvRqzVwRxyvKGXQHL2ejxq9gBZgJUQHjs",
  "key23": "44nLHUJQeAYetG6ujN3XVivFsfQwSeQQUpYFastLTxocM4jqFNPcdce81TBJseV44TYgTdoYTyBRiC9TKF3YznLf",
  "key24": "454YFjGFNvYMbJZEAcCSP3w6cuEk1qz39UKx7xaEppJF9gXDtVmzREcZGd5zgDrAJgSAMqcZx4DNVFPAUeX1dsPw",
  "key25": "67KDwoxHubu92TCeTARZfed1dKopU2qNMP4vw8JtxMTrR7SfzcJUPHzwMsZByGFQjVMhiwdCBAPRpspXC4Taz7f2",
  "key26": "2FbWvzC9BJvJya14Fi2ZmApBNyRiNGcoRBMtUHwsKySkadJJ9vxKcDzDT7VWr5XWDusiHT13bttt8Lp8zr2Z8Szt",
  "key27": "2zjubHGaUUdDMQQVqczajegqMsXZ8m2ejnkCNN6LWrhfbg4TtG15kNTrGfmYnYdxQPwecqowxmA7ojR6N1E2kqZi",
  "key28": "4ZY19fWfpE6brcgHPFkbWVTCo28jH3AtJ6Sz8u4kfVxbTrKsjinrc4LHtC1jmZFmTujHKQi4A1M1Q4KVEwUZduTm",
  "key29": "2JMRn5mAdBgqommzTD5ThVh6SLYLNVuGrC32g7621mXftpXiuBgRNwBoCHAF2A2PePSdoxnRjyAMzgVLE62jA3a7",
  "key30": "4TwTNkmSqgnuTjBo8DFH46xjoLXKMzdVZLHzf887MfRNdb47yUT7AcfXtGFJfFT3qenXoMzB7LPMvEXtmCE1hYAr",
  "key31": "4x9uViSb69yieEMWR4bE1QQhhAYshxbsMF85VMvaJnA66bmi8GxHXhN2xLuHmkVvLJg4qQgy7TZaRfvjPi2oaJcZ",
  "key32": "5nST5bHh8NsWNnstdqyMU3YYQVFSnz9v48qpNCF7QTZSfpkbebbpJbVbkNuxGNp1ShCRdChqMvw3z5P8PUf6ZxjB",
  "key33": "6ceRSvPM2JrT2HaCDRwntEDEA4cxKFSYgL8pDhSzWagtHQtm1G6wuNMD4nVm4TAcrx1y2XXGTKN2zLgpLto7H7x"
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
