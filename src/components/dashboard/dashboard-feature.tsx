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
    "1SsDqDRv3Z4f1ZsN72pkRYnmERzgoxZJ2B6LWPvYPWAzTesm5YHhVd6k6i1zWFP3oy3h4Gzk2pSgUzM25XWqT4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36mYzjVUL7vREk9pz7VkANdxE3qmWrF9Rws35YQSQHm7c3ZMrJvzqa4jE1b7JqihKyJagmD3YxTHrnDvmH5QYFnh",
  "key1": "4BvdEboq1AsMprVXp5UrQiq6vBaCMindk6crq1fpcoFR4V5yqmTpdsnDteNCMjzspco6cvVtb7aB873GkwSMLmJU",
  "key2": "66okFoRpaY62AejjLh3S1W9Z2p5GbVo4SRMjkqMfUV4GT7Y8ztiYU1VBaJrc1iNXhq5Mx2u1T7eXhwhfEV6mriH4",
  "key3": "5S9j3ExUBdiqCQ3XvgEmmE3wcEcMQpZAxUCVQkV9PVZVwtrNouTdMRFj1P3tN3dxdzvsYQXxq6xyMfWwgbB6hPEb",
  "key4": "2owQ14AN1KJM6xmQ46shibpdgBE8CoHwNw6UYVnJCunBDGEmNtKCpTGX14xygTzWh3E1JieXrAbNFXF3GgAp6pRB",
  "key5": "3iXePgjNDfaT1hjHV93afu2A5Y5bz8smHhrmP55Eg2HwbdtecTfRse4pgfJejgexZR8ZX5uz4TwYce9EBUKPhKhU",
  "key6": "oEfr38M4Xn8am5MW27L7KbReEmCn7MxvtxdpUYPRdNnYoZuiggpdFVUnJx9kPyGPywagfSAiC7an2BLyQ8YdAoF",
  "key7": "5uxR3a7FtxEA8LfwPqsFELZ2kDbZNQrE7e64fnzPwXqSCpPzkES2NF8Bvdw31DNMPp8737HA3kCFNTmX137sEyF3",
  "key8": "5NjoQn9gc958stgd8k2RnShhPj25XAgJdpaZEug5Wj9pARu2MdB79mexLisq7GYU5o1sy4yDu4LcuafJLvLWtEti",
  "key9": "5bY1etX4UQ9n3BrKsHGbQ7ryZ2EwVnEH9XCSDyYtRQicVSyLWCuoXPzqo3vuaa1R2DPqQtHUY72CAdQ7SJhDdjNQ",
  "key10": "5NAhCRFMHGPU9uiCEa7pWJV4zw2W5jNLeH7sLSPTadyLhQchUGcJviPc98veR5vmrPK4ymRSNhbUobvHptB9Zcf2",
  "key11": "r4cjBa9UBufGRaLQZXBDaQXNJFvxbYKxDesbQrUDDkBggAFtK4HvrpWaUCLD6HeS3LegmpGtgC2irNPrfwSjJ1v",
  "key12": "4jVpetbhFEDYeNzTuPc86tVDeJjdzp2f9okf7UPNoiJDvz8jJUqsr2UgC7WodB69TEvnawhnqcTVzB13Nb29yuvo",
  "key13": "3WvSRB5ZTDEcU6CKSXwSBb6zQXoibtGstEZkB9hbzBBcX6WftfSfeUbCtDSmz9QGiEoHQSdvDPQWVVjPtWPZJyNa",
  "key14": "5oNBqFboGAxEjTrh2xRK4MfkEBUxVSTHHNNdeC7oQdcE6v4jApAy2ReqvGv7MmR2cMov69fZozdvxZ9JfLgcMPYY",
  "key15": "4755LrzgaZLTCfPgrPNP8CTwvzjXGfLCZL9mVPhcLh28XUR1mecHi8UTiWiiRWfgRmLErv4CyawLSz1JP4n6osP6",
  "key16": "W1C5u7qd7pazU8vLfkJENkNDJPzcfhXUNqpc3TMvGjUyubmDD5mvTthcivzXBxvhcAKytE9v9ZcSbksTgRovVS8",
  "key17": "iurswFRLXYBXW5SjM4BB88iRZbJoBT6FWfJqB9PU5bVE1isswB2y7ryorKVVQSKctvyh1es9f146ZWS1CQa8UF1",
  "key18": "4GQKeEUAsXWPSNVZgeyQvEmTiYogzbKMEt5Nkmc6sFoVE77ujQaoxqwjTuTUUdTiTsceYmLr1rUDJngn9q76KqAP",
  "key19": "5tGt4PvJDgw4ALYTisHyoTAQczutWbh1rGFawapuRDpdhWcsrvaUcGuxoRV1fhUNL6ER6XB1BMmgz7CbdUw4QvzP",
  "key20": "5oJrhy5z24phFDtnzPnD2vh3YipUJxgNeDUBCCcyQJxkocjiNr2wV4iCZuTJGDdojHd4VACBAPWzzc1Y5w3ic2ot",
  "key21": "5PQ3xNN2ADAoKYMy4GAYc88KVhAfuqrD9yBJQvaKDicGdjLH9Xux9SXCz8qMKWcXfVkrdcsHi1pAephdHmtc2bQ2",
  "key22": "2hbJrYFLaHJwhcyNz3fDn4bMp2yi3jGRijf5ThaHhEuuHcSV7New3aDDaSgPbKD76TuZBxG9Du9S9omu5Mpan3P6",
  "key23": "5pGSFMxYKBBwYWK2pMaB1vqx9TvJLZDmWKXtx5kuPMPsTREb2h4broe5t71dhneZwTYomj5AoC19vZvrRgYZMoXC",
  "key24": "4TFRnWAMESennPToK9bRMYvpnxtD6Q7bTSU8koARBPjmatKFUCcC56GzjXLiivbm6KaYqbVJogENVBZbUVJsVgis",
  "key25": "5m6BmdRNmrVjNN4r8g6PPTBuP1LSs3kxKB5NTykJmhZ6W7FySgbvmpF6iXonWbs7ujysBRvmovmAKu9q6apub1Wz",
  "key26": "5WyKhFqQgYeTwoxf6r9wcyqB8N2yRL3BXd3zPXa7f7brNSkGLkTbTNU3PoLuTA8vVrTo9YhPVargqmpTMwy91Pce",
  "key27": "3VWzd6ZNUJAChpwLPmJxpYdxBRptoJMKcKqJcWcyTkpE4kuLLywrAvnLUpxuSc7e6YTpcfv2PiCefsPgMidDDT1e",
  "key28": "5LqxuCsPkb2u3BNDTwq2mdcuoXjfZsi95oKVP8hmNQV7qswoZ2Y97AffoM8T78MD3FuXpw31moAZFACkrmXNHuYE",
  "key29": "2q4DLkDyWXdY5BzgU2pj4VkMDsdG6gEfKMMVRNtGPpqz1gGtQCMkuW7vrinuKEAo7myAX8bZvrW1Er98K8icTQ6G",
  "key30": "kGtvngeYnRGgvVaaWckUa5Mo2iSNDXKJNzErUPMRb9BQpyRgNqC2oHeqdSrY9ijdmSgxwsK6pcV789yMiJ1quGk",
  "key31": "2DDG9ERtiGxcpGQpQJaXkwPQMxbQH5XiDkgDh7Vc1hamugSmMXrLnGs1NSPDcPM8gBFs1dCQ5fQ9FFotc52L3EbU",
  "key32": "456gzpEnmkddnsP1p5pLGhAyUheS4EVELTafmr3w9A22iRetXPEtDCywpar5j2T1UX6Lt4w5v3TJYgfdpX36tbwH",
  "key33": "4qma8UNscZJ3qpt97mdkDHL9dv5MEbwQSMEcc3qsUKXZU4MdnKr74fACp7pF82wr2t2RToEV8STKRbsb7EY2bfKP",
  "key34": "5Bt83dDKEo5msnKJ4LU2FV3yAcb37tumwLxKVzvf3PaLZ464nMk3JG6WJdxsavjTEEchDosyT6Vk7YUspPTQaHca",
  "key35": "3AX1y5peNxbbhgF72XHXBUUNLDsBd2EQ8KzRjVPbSqQoRHh4ZJBberUSvS8gWZsZjjN4CdqsG9mvkiwJjsoTtkZg",
  "key36": "5CasfSfCiJwzAkz1eL5A9rJ2XUFhzRFgS6rq4nLBuagmcW2Dqgr9XUE8pDGuk45J75u2XwKUvLrdjhN5hdu8Uovc",
  "key37": "3WTwwZ6QfX2DgSArYZCpjRj1c3zv8K2Pri6quFAPjYYkZrZATSLw34KDNkFb2dgXa3Qt5wSkdgCkbgRpS28H1ABM",
  "key38": "3GY4P1YzqAVpuca4nZPLCvG4y41owwnBYnpXMXMqLkVX9a6bCXuisGPLKwigPLKdzRxVU2SRwKnz7QtY3gkEDJ34",
  "key39": "2GCNeRHGJkxS5jVpNCoGc2Dh5DY6N6ZabQsQrjNQaEYicgd8dwMxaZcyugSbwp8x4KD8JdZACajrpGbkHE6P4DNe",
  "key40": "bocCLNN4RuXGiCc3FEUtv7TsnqAuvimHCSegRkxF1PV7tTCpLVyRbuCwx52iEMr47PFhk8yntTCVDjaFG9jgWEh",
  "key41": "4vMH4vhPC5acUL7f8uJXPcJvVtoiE5Z4hg3D3Z7tBp7L5zpReY2vacqtaYMN6PANewBvtp44Xj18zhaV4HBpP7tC"
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
