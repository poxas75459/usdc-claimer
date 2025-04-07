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
    "vbnTnaAte2AGxf6WkfSWRvPhWE3vVDs84WNUQd7BXCvtRHqQ8oahakDA1Fipy76V9phkTgZu1zKezhNw9upnoXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rsPchgiJ2XBQ64559je8UiuW6W4fzhLhgdCyhCnp4wMSmqAjncPcivKcZ4Bp3aUEP1JxiBx14BLcBJHpgKuGXnG",
  "key1": "2s8YKAPNdkNvQCRQwoytgcCr3vjQDTXqZCsPsAVtcj9LgcQKFsKcwSjR3pKp1cpFRSenGpNFhX2biGsbGtrn4VNa",
  "key2": "4huiotry8suQ27YGvFG599QuJU1xXQA66RFVaqkdiCuBQJRNjFo8yAxNyUiKcJAQu2oTcb8nHnaCNpD8WyCDTxww",
  "key3": "5D25FSupJPuJKL6VviT2Dv6eZTf1grGmdkBSWnUaZMFnmRcUNVfzjSTEYxHnmvgLFgiro2nkZ1MBF7UGAqGSeTk6",
  "key4": "3PAQHBfAHtGGQKdFMw4xdrMKXaLyJ5ia3meKsc7VTwghnX8M6JsqRB2QAoFJJ7ghBJJBbUANq2dwY6jwWwk3HAW2",
  "key5": "3UZMgQG9H8CgCpnJ1jpvsp9o93crw1fefNeCN6onmbQJrGkax7XrmJHRRG4pvEhUqMrAnyVtREG2j7jKgPCt3j8N",
  "key6": "256hDdY8nUAfAtXCjw27mR5usQkzjDuuSR7ddGLafo3nGU3aG9wcFTbMYrtDP1eghsT1d3vRGgTBaWjmrLiALbjs",
  "key7": "3ChmtrhGf484nEWtSRpS1JWmDoNguEscrATETZm2WjuX44111JN6ChGUuruqyYKuu6eXD8hmd62tjmu9xcZADyyx",
  "key8": "5Ci6PsSXMssaGsRGMCg7GbyzqQugTAYUyv3Bw8JbvvUxpNyDT9Zw2NZX4kFuv9TcBMwvadMBTMk5GQVFQq66v3MU",
  "key9": "Gud1KwUtoASQQEnK3HAw7M8M9349HUBjRYB37GcDRUyuym19EncSPu5o3wedo2ptgVasLxzTGE7xSNFDKj9DkQ8",
  "key10": "2o3R3tUHh2cHVMZXLeYfsMWrNm8tWKnqskm5NHSjjbq9jp8xsSvhy5HW5ZhtyiHc9uuy2Xh5k7sgyKErPSSMv2Gh",
  "key11": "3X72m1zABSRLDepsn2vACq4AF246rVrLibHKPo7kYeg1HrFxJcStXmfRXwGmweweSKfWeFEAPGBcTySSMiURE4Yr",
  "key12": "49aUMYKL8AwPNLqD7fmrnRh5YzoE2G4V5orQNnDt5FDgJ7wd87GJxFBRCz44T3jY3sLfPrAQb5LWswhheKZg6Mx",
  "key13": "2NExrPAXp4UwHYva3MFuxGhAA62MGnB1bMUeVG5NuJkjVcKzuww2iWK8roJYx23XE2sCh14y8pDGHEzf2tqV4VDA",
  "key14": "2nT1p3uySeMEgCWYGvX2TBxGvENHkgaYqg1zngUYSzBP5QviukBgYCvCXFGkae1W4cT7asbcve3jPKQF93XPPDBw",
  "key15": "hF14xmsnZStcRD7S7G776TmT2QW3JA3FX29Df7nCG92QKVWGey8CJw7XsGcggmQgnKsfDQpb2Yid7fDgvRSNoM3",
  "key16": "2FRMaGw6KHoUqZQsyxyxuA3eaUGREm1oNVaST2VHuBUNETLqt82TxMKyyA2aCugsytAAin15KxEZQ5wtFrP656QC",
  "key17": "jgdYcwbRBLkvK8nVysXENhseNXsvBFXugKJcWt56rUVN1UrMpFhwkisnrw6e4nxSZbshpJ4GDdaWzq6H2Sis129",
  "key18": "28GgYht7MzQ3XZJ9FLgkin2jDBpXNMZgE37aAsz1fPjKwfewUXEFGt8ZdYniqSNzEmj6F45BzHKqSS786v68R9Mf",
  "key19": "4poCMLPrQwxQdpopJn8dvwtpX3SKGPL6xYw8SAFX1N64JnknhwE81pmETSnQa1oPMJdr3rPCG1cKafSwcDn1TZtH",
  "key20": "3txsTJcvTbYCahzpZnRDBbT9PQNqbHaFJVbK1HVNhNfJZEgWeDZdrKoytKqXhZCJX9hqzNqC356d43cxEmwzRj28",
  "key21": "5qFcSHHmMYFyXKMrMLrujYzo3idpsoUePGsSS3SP52wjNH1dtBA5XpaT1f4eP8wZPLddvFTUX6CR5WHGHJKewfvk",
  "key22": "4Xjjsfyp2HbytgiriV5rWbSTzUCLQQ6iXU7iLx4stkiJ6PF3Ndf6N46FWdgiJ3mdtoTU4v8sH4DNRYFJmzCAJ8Tk",
  "key23": "EaB7ea8GiDG5eHtGFJ3SS6wCZtac8WAYSNBnvmTuuSPp3ABMvBMErftBpCnpkauyJDeqMhZktux68cahe4kYX7f",
  "key24": "44xyrHoDbdUSzE3piTY3nGPzdyYAp4AvmJDE6unSPeHjzwv8NcP1GtnmFP7PJczG4LPf5UqGqbwzPnkyX7fCMyq",
  "key25": "4KooyiZDhN88CK7miLUGjMJT7LyRpH4tPL19muDbsLroec1N1B4Rf6RPKG8B7QWKp9ukey45TC14kY46pKM8cjXF",
  "key26": "z46HZjNSNVwzSyCh4PjAT5dirgWtLTCphM6Y5L818snpm79RkUYF6eUhyBhZywSeXmGTrgDV1TiegPuyEoKMqAX",
  "key27": "3LUgD7a6pScDSBh3dUn1cNbXW9P9YrURSvcFypxjWvjuesFDj34TPf9zAVkDvKbbBJ86W7AUf7pEjHokTrwdp27w",
  "key28": "5zciSDs5d41NkUzV8HsYoGL8y5pDMAC2apfwidFn9fWFUDEFLQ5PoGWvVQQTKyjwgWGBMQ1cBg5u7vPEXB2R2mBh",
  "key29": "41qo7PpgavCSvGSo7eCXwSxsM2BmAy9bfhc1PdWnW39ML7vNvgUw7A1cLisq1J1RTBNDZA3d7Cn1Vfh6ynUR3YbB",
  "key30": "2w73pWuhksQqBzXunXrw9DkgV5nNUUZfSe6mRPAqCxVvAwDk5xK9KdzyAB43T1XUU85pPX7XEyashc2eVkuBoiUD",
  "key31": "imdmWvxSCHEjcBEe64tQyubeDZ2wXPTcsj5TEfntENsjRk7Wzi3h48Fxd5cy2VWEie1JNaVFy65MWckbrzsmFr7",
  "key32": "5xcN6GbFq13LvtXngYXiDNhKuMoHknjjn4CdoQk9vyNky4p6UdDy8uDZykZzFQWc6oSNo3KKMBFqdupSpL1XisFj",
  "key33": "4rvGVgGDKgjoyeySnR41MTbQn8NgYAF1h2deLZtHaGu3Hkh4WQAKtZ8pq4TS7CtzLk4ACDwYMhY5hrGBcRQfTiYc",
  "key34": "3yjfbows97JrqMLecqdzmd66MWhYaT4HnH3h14b2UdEFxjhrhny9H5KzufDEKgwm5fU8SFgsni43Ga4Xg7s8cdDe",
  "key35": "3mdCGsjkQMzoi4M6etSkPmSP98Br8y4BkHJrvT6Ch7DA2pxHcsQKMYLJ4sNurs76AGysCYE3LdDGtc7SaZhFdvJA",
  "key36": "3aTYuVd5EuX9uNWKK63JacyNDDU4q76nacitaq4FWXhtchQ8MNEdzE1gxNKWad8vPB5NUvUM88Wn38xLyVCLPprU",
  "key37": "x41w9WrDKZ1PfUdcLxYx7efBADJUVUBGBZw59UPvDN8iTrnKBRg9StPiMLG7wcYsvjKRCosf7jDnJWt5YeNxCMC",
  "key38": "65DwSmDvKHfdB62T4j2RDikXRYFPZY7bYMZ6vAYJP7MHgixDoWeKcoEbcgjF6bKs4D6jrhyKtZd2AZoTYDWg9y57",
  "key39": "28yxPaFRtk9b2kgYffa195ggeGakhiYG7Ua87RTgpotVwaMHUDEDoB7QGDcAp7JmiX6LSLny3j3LyTAmGgoS944q",
  "key40": "3h6ugUfC22AHBDymqpwLUankhbZBdhvCMHLKCACYJ3sLpT5BHo1P7RsywXYBsRqN3ecoesMQLbKmfJgUrQoL52do",
  "key41": "RfejbyanFE1MbEuwXnJuT4ThRR7PysDCmrzJYBdT1Z3pTWtDaBygrkcixXNv2ftZueFUdCX3L6hA5pj28mWXtTh",
  "key42": "7vW3DvbEZpASqpsWceAceWgFfnEPTVBpgYp8XveC4AChHQDuKekHsMmLqASCBK9dBVY5EkBg8EcTYoXLhNMMq1L",
  "key43": "2d2PihpH9hy5d9sjAMKmpDnttpQXSpBuxRmxXcuPxhZTjQ3w6YeMWP7GtyLmKo5ReJQbdMyh2QxkPXdmJervuxBw",
  "key44": "2XX3L1CzaMKsz8evDJ5oF41sB74rdT9G5LHSGX5QrNZ7nhdgrZBKqWMMCNfskTcpBMU8A4cb7RdWDwHfzfu7JYXV",
  "key45": "4tiU7x3RoC9UbHL5YQmQLcxn35p3LHswLpQhMBuqBWZyea1uSJh2urL3zm5ZP2c2uUQ29E514cYx1Uas2htRvjxC"
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
