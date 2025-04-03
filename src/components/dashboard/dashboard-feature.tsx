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
    "2sY5vguk9Q2YojVe6HWH9MPNYQcSk643ACSWMbDjYuVLzZ9jSRGkbJLJrLQECDK3RP485PeTrKZmUP5pUDdRtzqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vdPvpFbJkwjLjucBzMsjEbwHeUT4csR1DX3YZKBJERY3k5nKSseUa2m5UPByqyUuKuwq4uaTeZ3nBXNwhkmMuqL",
  "key1": "2stVWZSiFnVpXVC6WzdrXCUHTvbU1bcc6fxXXbyweHnKLvCy68A4Q4fVxGVYNfcLn1UrXoTqYtDSkj3FkrqxFid3",
  "key2": "iExnFJ6WMFhtDbcNnGu1KhnHrsHpBcZRCaT11KRxv1ZiNw6HWbhVnUtUP73DP76HKiXhPoP7U5cZokoqzFJRMoB",
  "key3": "4ngCQ5uv8fhxZxVSWyaHPT96FuUx4mh95mA8zmchGu38BEeB8pnp32YQ4q7BDbY1s1N9cmGMw2xScur12pr2yZyf",
  "key4": "52RT25Ng6dpjUVKMmKKbayyKrg6mzAfFTyigpzYAaqKD5AAcvEEGR24jDVKV8Xp7MBMDXuBqPbWpRaBeLtv8zCPd",
  "key5": "4QtxEpj91tY24HcLEFdV3h2Q2CbsQ5p5rD97tSTnDzzWyR4CXPS5Sqa8DTvrwpvPS4vn6XQUhrbif4TB143T2yxS",
  "key6": "39SjJxCErS8ugEQ3AnC4Gx5YfW6TFxvCBQkw9nKoRQbE916SAQBPCaqeV4oanDhRHjSqSpn2uNd29dfNQ7t9xhvk",
  "key7": "3f4b3SP1Yyb6WVmw17RYvbbBXtVmAXh2b85uvrFFh1uBdX83SUatKK8QYsP2fXidEMZb8zc6Bju5LZx6V2UQcLfi",
  "key8": "4zLsqeWxxJRWcyS67bTE6dKNMjGCxzTfmmGpVEBuBCAqEsPAZdtYN4mocYYsRbpTMGGyuNZWf4vU5iXm93BSsGqB",
  "key9": "R8nr9QWXpgE7syvPk86uY5xAvbFJaaoNmBG69AjQpLx3LtMJqZkm9jBddQdRjin7UvPHR4k9ktFZontjViSUyrp",
  "key10": "5pk7acSPugXCCccRQrJmFf3TKHX7WjjpfrXTLVtwH9fDNnCp6YDj1kqBFuRhC9P6AG4cCJ7d2wkgNv8hoMSekUey",
  "key11": "uFeuYFTqkpKUEd3vgMTPNkhTwZom1U9uqLqhh4rG1SGKAEJ4ospDDs8S8wpHupHYvtFfuz7uDzyEinH2xZjU7Ay",
  "key12": "43rfY1ZHrLQMf5SLiagJQiFS6TFzcf75FWoEaiFf8kXvT7R7c9f3zHZodFLsWUqGbk55hurUeyqLcZcSZKd64Eef",
  "key13": "4i1ZKkhyi5eCnvqzUjRo7JN6pJ6h8X3oVLiozquRMrbbWDWe4pSuGsgub5BsDqzb42xKeSgirJCbPUSf1rvbnbSd",
  "key14": "5VcvqCADXqqB1rZQi5CknUjhHC9e4mvsr3XovpCmio2ArhXdv6oTJ4LRqecc1TysRugiZfHpEJT2izZGhoZcTkEx",
  "key15": "3Qun15vLPDdDa5yrtZK8Mm4GN4XuPCBoXpmmqaQwpBCCAWZLPCSNERAJmQoHN1Eko3MqPadsEHSeBKxeU81Mgggi",
  "key16": "4WLA43eKFRZ1BSdvBTBRwaB4ByzvDiBq9oa1u7GcF17nitgwYoRDtWTa3GXaeBnQ12Hic8sAEWqWDUHz8iKueEjm",
  "key17": "K6LEVYEuerwcHVvD5ohh4558uBpVehLk28Z9Wh8DY33y9z9T7HN2gLbdbqp8SxyqDfqWLtxkiuNEXymxWbCDzz2",
  "key18": "p6fYmvkduNKwEALQAYim5R6wdrbB8DficKyq5EBZuBJQG3pQyGvrBW5PjTm4vxZBEemzhB582DYDbJbtKBPRrwP",
  "key19": "4c9cvsXPdyJaVPZrXhJshf7v1XDutN1Q636yjXKmEWctXKjrLf35KHe2GaQ6VDhV4CYuwkriwbsMD9bmouegHyyi",
  "key20": "VV7thKTdTVdAP4tLokgFEVf5FhtbeRS5K9Eej1uLdcWyzWhQBsoYDHpFVneN79e1XKSBMj7t8cifXWPg2JyWunQ",
  "key21": "659kQjGp4bwoEavEhg2yTEJtqh3mfgMMyNg49CK7TZ5myBuMoZBwiuXBYWkpUGSPLpctHsRJPgnCAesdXFZ6rh4f",
  "key22": "3KCUfCiv2gDYivoQ8YYoUHXLNQwiYiGKcy86NiMd9HVZ6QUvjaXNVBjq4fPmxLBFMpWZ3ZdVM5Z5rgqUiYAzoXKQ",
  "key23": "4YABr6MRfSpq2txhUPwAPEcorwdP9aCQ34ByCkzv3e1zd76up1ps5uxVdBXvxg1CZosPREgPWaj3qMBdFffcS3DE",
  "key24": "5KCFVg1Tm3CcG1UTJrv15MhaLPVsdwLXzEizVzfFAyBZQF1PYa2FHDU5PPV2KWnULgtMH8Jjm16pCPoDJhwhP9zU",
  "key25": "4bgBbPhxfhuTmxoBxM9poy3fUnreDyBMjp6wYAnFDNyMEyxB3ABKhvXdPRQqDNateoCvG1BNY7UM1PpDuc8SDrtr",
  "key26": "4n4y1wtsvLaRT2XJQne7pieFTYZvr9BwvF48SkEEHRfoU8pMWo52RagNdoiuuVBuidK3yE7jSBzjxP4iZnhGm5xS",
  "key27": "5qJqS8WhcZxBMmDAcKX1SQEdx3VBpAmRFRYZPVMHvFGi6TkdFXoqdmoXqHaF3gFtUAS4t1LqnEywuxG2DysDbT8Y",
  "key28": "m1BnxTcPELBYvh2AwQjsRm9ctiuxd9z13NpLrJg6reTapQCc8hHCQ3V7HJKkiAAprDeS3ewVyr5ZTG8KwMvXXSn",
  "key29": "3YtrhZmjw7UvbnLEbEBwGMppMnNTCnBsX5bQrRrAbNRMkSvpBHHjkn92aXvQ8zRPyvEj9TqDqzXhPuSygFrfo6P",
  "key30": "5qyKqia16oeyrPp4ZUmY86v64rbopmJSErXSNcAg6mxLa2NLBjRvg2ZsMURz1hS4SmzPKoEUxoF4tFa9iW16wz46",
  "key31": "3XR6SUiagHhssbVgG7tVu8VRRJBFTnjq2EkQnfNiU4AYteJvc6S1DXG766RoR6smaB42neWGkypJXvrgAExUM7MU",
  "key32": "HLeoeoSKJhXmbipMNG38uVZRhrbibtdnFCCH1CGaZb1TWbZo5X997H8Z8GRtCXYHPSwr8bd1rq2pwyvYogbUqCy",
  "key33": "3Y6JBD2UCFDJXj7VbuUdJ4d1pUtQyXhtazcoGsNX1ARqEervKFxPjGtPBqRTCx4NJpWTqYVURhsmcgHcyJKspzat",
  "key34": "3mYDJ2oXpVV84bqA72vfAB39rbcy65qeXinDpNkNrk1ZRbkPwy8EVt1Qd5hfwisg8du3QvCdRj3raT3W199zD7hV",
  "key35": "4t2DSL1PqCfpooPse4AHAGG4LWquHuKX4uH1gXLZmnyRhJ41BLz2CEa2VLPvxTcurj9yKv2ZmZ3rfuJUSvwnm3zC",
  "key36": "2pj9zxt59GVdQ6Q4eeQRE9Fq9C9RWn3nBN7C8yDXTfvUVshr5WYodVVHSUM4XhRsqtySwPx7NMG2S5sSJ7Q2nKeg",
  "key37": "5M8sGYKJy528jKq8fteVyqrCR2g19ngJFsZoqQongF3kgbm1KwWLfHAnz7eJBb6NNp6GxRxVnDj34tzQuXWaXZg8",
  "key38": "59iNffWZkLvP7f2VRF6Tqc6uBodw1w5AsRh1wZck1wtQt8k1HTYge3TniHBB9rs9sYaZkzyrZZs4gjDyF5HqccJT",
  "key39": "4Ho4JehfRPpx8epWEyhTSzrQJMvGnz8zo3Q31RjQyhPdH7KdC3fyMQ6mHwJogQoWVQk9M3XrvuLAPMbpDbgGPaZc",
  "key40": "3Qwia2NyjKm12NtaHMyQd9tQJCW8pdb4hS9vXY9LjgHTip7ecYW6TEnRqVW5pLYmvW4yVxCGpADzouYsnq7MRPQM",
  "key41": "wjkpw3dwbhtmmCsGsAFmsUDorGJSMHSeUFyHPRpC7gFDvSdWnhD8wzPpigHzm2GUMWUvrRJtNCHKyreoZAMeoMG"
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
