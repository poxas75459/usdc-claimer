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
    "2oGRN1cWRX1MqZH5sTDEoDsysYWWTH1FNBu89Mc8mt314QmBkY8Dd4eFbJeHm5V3rLP6LV1Mcn1TrVgy8thJ2VPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52bGtagHEWzYgLdhTv5YE9gCsGcYYRpZhLSb5Q78YUYDC1qWF5HoCVk1JKTxFeHNMM28X2b8JRW3TEnjkfsRD52u",
  "key1": "YeVA6WQwbuY8QLUqPAeW6RSE33qx9f8H2ttoeYXSDRP5b3JyCZShHXXrYQB4pHJgwu3px8Nx6P3o2HqXp4WVwma",
  "key2": "HtEVLLDjyzcsBqM7Qutkm6WVgXRekg6mB6Yv3YSYh4HtmALApZjL6zWP8Y1k2bG4HLahZW8fgJo2TFBAFu9KBX8",
  "key3": "BEJTaFapcVuz4PMMY2X9XiGq792NgffTrRuWCWKceA5X8RCKfGsstdBGc3niyK2aTwhnaY7uvSSw6e7yYe1gWNr",
  "key4": "46Tt5MG6GFQyV4TAhTUjyUW11b8fNz6ruaGyQZF5ZgFUMHvt1grhpwABzz8P3w4UdbkhxVPxYP8YcabUURCVSSqk",
  "key5": "5QWW14tJauxPGswixvvDEwuwsGJCYhjGWeTmSTcvQffnD15MUmdqhsWAqYUC1RZQLhMFsYUYJpMK19DzCSRXWLmp",
  "key6": "TXTqs2v8yX3PXrpq5BtHoeetzmKDVA3ybntP1UpPxFwiZsfmGBQt6UckpvpgwmeRUuEtQkaUa9Ra2Wf4FQysjmW",
  "key7": "33ZT1kkcRYeeWFYgyh4cw4gezHgiWR5k2xLEVNoym1yta32dTTddm8r2PstJMzKaEiZY7gb6ha66YW35VcfHwrGK",
  "key8": "4dZReojhpqnzxDfGpzCriawCsuzvr13zcchxuRZ9Yty154dnmDzyE3QLZgaiUX9tLr2cgsKcNtGKWzoBFURSQaGx",
  "key9": "2TakaZU2TfMyzimq6xHPNrwBYjZyAYzK9tQBBdAFDhgYx2H4sEPdAKcLwCX17pCRgZJ4LCsoKwwwnfw2qTsUgFsb",
  "key10": "3PvYZDXRLJYfW6561QuioxP7KZhMU9XJdkauYM7VtjRXvfnaLskFWGpsWC1ep4vDxA2mDPva6XSXrGkQSy24Bs4D",
  "key11": "KGoCiujkq5toJjD36hzAmQrswZQqPknbbMDz3i5zP6ViPVyXETFtJWdFTbx2RVutdtBUJM65hfYJJmUp9dGZL8m",
  "key12": "5MLUWqRy6H9XghfqrXnSxRiFdwH7at4zfgARbWDQRQhwgUtdDr73uYYjcA9exhJxhmqN1rwFPrF43uayt8i2KFdP",
  "key13": "36LtSAAETp1QU8FgtBi1DMx3BeKV5Ce6RyJmhDF25VAtT6AYrMyZpCMCvnzfYJtLK7o3EfGaM4WTGoAHfkA1dDUJ",
  "key14": "5XDuUMwToFUkbpSTDkc8wY7wMRGenKaemxavuiryXms38de6kdtfuadcbgpCqZ8pa8RqyYpdZLNVKUTAitXVKUaS",
  "key15": "5Z8RZ1ji5TLGPUZhidR7C71NzWfezJ3C7kBGkK14y8N2b4ht25P1y783PqvHzNnxLjiL615y1jt6tS6tjq4hy5j5",
  "key16": "3fZkNaYjDBNmsBbjyV1cZkb6U5mfxqmzgHAzZxF5rmWpryfEpV7mNSvGeiFR6fDRBHVrcTPpw93jjhcL66bAzGi8",
  "key17": "5nEYSQXf1s6icBgPv98qj7woCCETtpc3q7tYTkRA7NZiCz2BeVNgWR1RSWmSSy1A3wAQ4U2t1BgFWftJqVc7Yhky",
  "key18": "4wVtzLfoXVo7hGbk2scxtfeZXdSa6B3pBksXMMNvL4maXzgacTmeJUXByQj2FWjgdYEUFcDs4dFdEVabKT3m2pQY",
  "key19": "3ez9J8j17Kyss3zNfBueMJSqjgETgJKUcpDRVnH6Sx8oNYpztEQdQBmxjEyWCcD4jjRKXLvABNVevo3Kdv8P3ork",
  "key20": "32ZpJY9pBHDzLy7kP5s1Rb5KzJRC6AsgHirttwQMruYHjLgTrxY5hVvWWii6HekdnFfVNbZLkFAz6zLQH1VrEroA",
  "key21": "2m8ug1tkQUEdMwF767NyPXvai41QaNLS8KHDuc3jbEPNVdc3QyGvVMXE4KsQ7NjD3sqRwYvzRmkPsiCEBEfp9F7j",
  "key22": "4YV1PUsmwPfvepr5Nvh7iSPU5U6vxqqmKjhJr96LqTLauuGi6Chm3ad5Ptu1FooW2zpYRE9rp1wNneoCVT21TANr",
  "key23": "5bigMGeuYL6L2Zswj873CCqSGDL6ndnxKe3f8Dvodqj3RWXF3AkGEvCR4anp2n8oYyWTj33sWubgd2vmmUyDQGna",
  "key24": "HLNDuhnC18HbwzfY9tSVT69mwYJyt6NAZHGyemM1btowRh59Xrpikk6gZoY3YstN3CTpZY5bTxTyB6Z2K7n4TbM",
  "key25": "5WPoJb12x3cBR82tYE4xVUgwRS8u3PEGCVKdd4FvC7HaF5WGiCRAssQKqQ4ZBWfc26PZfFHkudsfcZtqD5x5RkNy",
  "key26": "2fw2qnPmYUfXWUg527Y2E7w8NvUR3U4FDrfcTSDkpke5psV6NwfTCcXZCq4gHgsBPWvEC4RZWK7G3TEd5wKnszUi",
  "key27": "2PBPWt17yEnLon78tyePMJshAQnWaRBGE89ptAHpnVuWJ4uGAR1EYeGZqadZwe3RjGrT9rQiUJyQhHs6sQGQYZbS",
  "key28": "56oTfnQQVX5JNVED8Cf9CCeiqECqJRwGP8aU8SqmiNdWYfiHw65YYLSH4xRLwoVggV3btTHMuBp45AvW2bmKiF3E",
  "key29": "4NrQ4EVBJjg7CK1nqQHCe8VkCqCdWmZuQPwK1LL89icNYTi6U8kcWN3ct2ycQdLZjH8FF1c3hhMyugHxV8UR5Sie",
  "key30": "5KAERUDvtqzLAPHpCLNYQBYrCPHTJu28ocNsfksYZ1hLx3GoLefRWJYmhWaHDMg2SVGLPuTkoWuoQ7ZKAqE4gWf7",
  "key31": "4rEF5NVdxS5w83G6rdZxtHtUgEo3nu4GYgKYFmXvhUiuhE41uVCJ3Zstu8FjASDsUaeCg4qvg52RfLv3AenwgR2C"
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
