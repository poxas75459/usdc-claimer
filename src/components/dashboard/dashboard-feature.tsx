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
    "2HtjB33GPyxQFQMe7JGh7vr7XkJYh7sgXYDrp3CggX546hnQwb41h1mpgtEJWhCxprgBsnyFUbwYv5zjh7PNkZcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GW73P3dfN1LPCWQ89FfzSRSVGutv172JpLbnU5eo8rgctQQnTVQcmJwWAttrsTJKPYQxGY86JS46HP49H3pughQ",
  "key1": "2LPNEYbReSPbn2b2K3EAE6YKgR3vPVj66YQkyUki7toYMN1aVt2rFWZWDvy5GgBb2ZdhtN8HT7VHg2rc4Ht76eiz",
  "key2": "a8PnadSNW3mEnXHPubPucwuJmHRFURLw16osqUJzyGQQHdJj45ybQbFRHMBSQc14RA4F3jRG65gMM8tHnpFEbvc",
  "key3": "LCa285pwmBw9E6FasnZxWm1C9WCiy8cPxYbmPd4eJQj8ZYqBJPnWG7viGQodtLPofRUWKihk6FCaHUQpereoHbP",
  "key4": "5sbo9F7rs4xFff8dE8wmbEffzwgAr7ys2w4BZz5L19AprwJhN9imhWvSVjFsym1zfun7JjmDrYm821dn2eLYEs2p",
  "key5": "5ku1XJoxX3PHaAdxLxp4DXZqruBq33LB7LAfEfptRa9FdkT78QgJWjgnM6oGt4F6CtczNUX15ffhhg51xKKdYntm",
  "key6": "f1hNuJ2CeHZNftHsyVhn1Z8utHaYRmoX15QkGvWqTbRHdzRdA3rvKDJgGX6bpZ9S2kfWh7iC1H5bs1xB734Dowa",
  "key7": "5fUbbSUi7C19MXRkxQF3KcXP6y43Wuzozt9kp7PEzwJrbfofjVcFnmDUuvv9nDkdLBHHf1xmbyzL9HzDWRBpHT2K",
  "key8": "5zL3dwHuK1orVX3aDU6CkSgmFSM45a6sP7xsexDJ87MfCwCSpMPyZox8bVKwxQ78eV36pPsGxbXhsfCexY7PHtor",
  "key9": "2fgii5PvV8MBhzReTuocSAfYQ5jhoJdUitpYh2sXkPEgchCHsZdtajaZXYVRwaVb73XD8eir4vZj2U2vRi7X25j9",
  "key10": "5jQBYsBqjXzSHbSXBUx35S3CcoxXjMsgUvyi9gwitzmhSqLqxWX2YK2DLzt6dcCvGaQtNzhApThhMMHV3TeHR1bW",
  "key11": "3DygMnvoqEo8QL8KeDvxadkHdJN7nrUETpkrDtkzNbjDtE8osAH8REJpditqjTCZ8DxZZTz3xmme3QyxZykBQnSR",
  "key12": "3Vk2ewDtzczzrQ7hWqcPAR2nLDst5EdH1zHJTj25CcV2VRQcSNjGpq76QUBzL8M6k7a2PHV5oA8Rk4vJW9Pt5nWs",
  "key13": "4wU2upFn5UNnMAiEtR5XtCiUZQbvtV5NowuBzAQEooBKsFjoPdx2CzsSBjdExoR4Qe1EWctMz38H4j9uzi3UxiwR",
  "key14": "2GT48n7TjkG5g4WJwCjFEoSPeSNVuA6gyYp48JubbjFCRRDicZnMTQsfJFLPdZpwSDb5VUMFxDQESWCtFLhPWJLe",
  "key15": "2zBK9bteVBv8BgSYiKx7VMh2fuPHAdZZejA8uXZFU7gu5fuZVqPDQ4RbbtUxAfHtSU9wxy1A5ggEmL7qzKdF4LJ",
  "key16": "3xVZJG51eVFSDfoEHMdmqgBdGYHFjfX78TGfHKR9inSqF2XpoeMWu2V7X3wvMf7iyj31m6dNN3VHsWc6BQBULDKo",
  "key17": "4uxQnMEDBdimtYUV4rvXin7Vg27PuEzKomUaKX28QECfb6iAapPa8BuGXTn5CnqQ9oqRmpFX1KBPJRrwwf9g9fpq",
  "key18": "2Lpcoke1VKWmwsaDJt2GeACadz5kECSFRid5MrwNgk8o8ubta4gi1Tya7egk6CsRsg1KrC7GMhUp5jN9tTcugMjU",
  "key19": "4nYxgJbELcgW6XaSWDaBGGDrhk5PVdVzqxYfkGwsnRTmGFcqQCMpXNV5meaj8FyyUq9S5VSKhAsFgDQtc53bYYTF",
  "key20": "2xujJQCaAVhJKt6YxptNCGQyrWrbXjFpgBpvLPWtkEvfwsf9VNCC85wcFT3T8Z4h1JSkaBjiZxuwVhxy66eY3dp7",
  "key21": "nbvZbLxVZtaMwELwCc9shtgBnvDiApPuV6JrrMx5T9A3o17skwWJecWSNhDoe3oY2ZbuBaNSyMKfqEXAaP7ZRDK",
  "key22": "5g1DgeWpFqGEhGi9giRCDMv5oD44PAc1YrnPMm3YyG63iFmTcGsUU8f64ZmwKbQ2U9oM3Q5qfha8wk2CTBHzy5UR",
  "key23": "TqsLoTQuDWcq6j1NZbSFZNfmpM1y4632J1fPiTPSyy8d512t9X5iWAvTcedJUPNjrURFhKNdcvrkBVPKEUriGew",
  "key24": "iZwgPMfb1s1bfe75Z33QPRSwegJ4A99G8JuGkg2E1sn3g2gQj4iYENadVfgPpb3n5aqc6UJjbxhfQViSPZ3wRLv",
  "key25": "CvcaVebP3PraBQ3YPpyaGHdT2hi7GuoUmxT1o6f14AJZfNDioGW8b3s3NgaZrRugz7Sg6cRTKu1DwPE2PLmjLBP",
  "key26": "3WEzkJvzEUjWMco5EcaJja3ifgm9A9QsQvwyKzAn3VQZY6EtY66Rd6kfvr8g95G4H3jqcEaEzVPQTY41MQp48KdZ",
  "key27": "56FeTYgbWeDUNGPaC4jvDNLoCP13QmzsTsjFdmBFLxpxsrJpMk6r1qCmr3mXM61Tr22k5SJxdxDmoGmT6aDoqQxb",
  "key28": "48DEfceKmpHkNRK4JP4f1HQmpX3zzVCTssPQnyeqRjg6zZMy21cfohgCiQeMKU2cAp7PVwkBMMdzcV2P34nWC8nR",
  "key29": "4HSxemmnJGRmWE6wfCtpZ7E8466Ydi8xBtF2fTR9qLi9AUpcRsxt5UmtGqZcwPpCrFErKLGxCRcjVnBeNPJu3Sie",
  "key30": "4nAhpE66NUQDXfDQEKKwWC9ewpMS3LhzrABn42wUiibPqtiCG76cRHcx7ZvYg3ojfAUXxZZVvRmWkB26BXR9kN8c",
  "key31": "3XRxF3BNm3L5dq6GBBB7djLBnBvVYXovEfHC2u59QYXPijmhr1SpaWuRLWchDQr3fK2an9StGPojF581NwJFYdLs"
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
