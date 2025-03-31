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
    "SjodnyA3vQE16GoDGUYhF3pmswGX97t1F7eYN1XuZoSkbLMUsdr3LV6Q1uGSps1ZMy1pUipUPxFeyoChfedZqYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66F9dagjbqcSmoWq1wRaui53Wa8HYdrV3ccUtL5gJ8WzvcgBL31coA3RsF9npm6pzMAbRVGgCTpnpHpgid5Rz86q",
  "key1": "2Tn9v6AHzTE1gixcrJA7m5uUKXd8F6Y1NchHem7QDRBaUc3Cpgpj2Feqa8yeitaf9FU42MmcCNBZ5E6GsUBoWLL",
  "key2": "xuiJACQCvzkFC5sY7RA8ipBckm6yUL9eaxMnoS3oA2VAPmmc2fsfvH5rDy96Rzy6y2N4ovMjVZk8Ph1mkJNSNPe",
  "key3": "2aTsfd8sbsoT4meYKVTb7xK264dFzDowZgU3vNQrqc1taknJ5X61TTxqvFGTFACteHp7MQEUT15teyy73qN9dPuy",
  "key4": "5srLX1Up7zn9BafhGprbQvFnvqT8C4Rbz2v3jp4YMduJDgQSu9njtSfiLR5DxP8hAFfAMi2gVUvZGB4NTMLeMQky",
  "key5": "4KjxNs33mZjyfa8qPpoZSego4E1F2f7RyCttRN1i2SoobEqERppsa7Bg6vCW9JyvTcF5yqx8xDSqJuGNv3rvenoM",
  "key6": "3gfsa7JouW6RLXnPS5CN1fQLQkNsZBdzUhG4ZGBnyxzbWbq8pJWgGeHsHFasP9xvnhouNwKi8PHSyqUZ3fzqNP3m",
  "key7": "2XihJsJCGJoCiSxxRWjtDU2pMqvMdi83bVg5MNtuBWZSdkkfqQ8MYAc2sGq8EzDjuVFte6niHFwaDc2eaDHsvSqw",
  "key8": "3MkPGNHyAWY3NZPFXCiQn1USR5TgAH7qQwq3FvNqY9V6nZ2zb7dKQt8A1agbsPPf1tF6WsA8rEYu4RNxCJikjnBH",
  "key9": "2FDrEPzge5af8WyPBWQDWBpKoEtvp8dkgTSQABsc26cW9L9dFrEGDGY9v6QV5x8unLvYfQURdX88s6ULNbSCYog4",
  "key10": "5ig8pNTCFzV345vQufK3G7MZz2ZFfebQZUeghDbiuU8ZVeabcedqMMAaVBfcS2rFwPZAwLXvGnDUuzWNUjTHwhiW",
  "key11": "4Q2aoYg3qfn4U2GeWmycBYVqWxdpzfBpxBZndtdEWSBkP8ZbXBUG2UmZyyjGZcctFU3SJ65LsKtU8Yw1AkohaHSw",
  "key12": "gRcAS6ATDLufY9TXjZRyrY8hoo1gq8xDbb1s6bcB53pUoxxFEAHnu6RwzNLLemWNqc2jQWTwxNhjMJrx7j7phBM",
  "key13": "2nuhAnp2mo4TP15BymdXMsp4gkv1oZtp3sTbFqY97on7wWGTfo1Pxbr1QQYN5dnfNE7e2F1C7qfC1LK1ivf9JGxD",
  "key14": "yyJ2ovDjBRfhW2UAeBpfAF7XB1VfxRFPqUxXcthFbPvtzYUuvK9E39ZnFkUq1BNrKLD8YvvmipRqxkWsUGoRXdt",
  "key15": "2vc27aS5xSiazqAsJLzqRnaMcEw9YAKLMqDgeXRGtDMVsHvqAmiarwR5yWameTjSXmRz8vrqtUATen3dSqBZandJ",
  "key16": "4k5PqctP9o32x93juFQMrU68Mxs1HGR6GMkXnhZnqLYEQbVhu2KwT6SEZDcyRRvcLDhA4cgGC1CDXhQbX3nPh2CY",
  "key17": "4Tx6bwwtQdFysrVAv7QWELy5L1j3sz9avAUb5QwEqn2UTNyxbBPuiCyRcbVmyDxr2rtnnZ5e636KvRCPUerM2GZG",
  "key18": "4SQT9jxFy96Z3Z2Cjmb8moPPJeZ6u72cETY6o521ytuJvfsV9UsXknq4ZqkJFYJPMZkgbSAqsimVstCM6uKh34Bw",
  "key19": "2qUNeMqu4RWGBRAoYmYvp7dWbxXVSGKiEtPTTzXG879tkpiCr4K3NAWhWutUdmcGvboWJubMXpEBsiQJP9Vaa3Qh",
  "key20": "zq3kG9CjWrZfcVjUuCCs1mioSG18M1sx9q98aq1h4desy835isQzV5QB5tXVJH2GjCjmADMSrYBhm976U2Ego8o",
  "key21": "4xR6XoUztzJ4pxBzyGUxQ7jnCeEzj11s4hZgTPvEfWbrk4gLngNAd6Pqxj53v7CnGvvMp3cbCRoG2toysFSKqpaA",
  "key22": "5zWvHVNnJWhzXgAGzBaZMypryAYzYt4PVUweZADhEMLuVDoUXMBxJT4cXMm6KwsDjK4mUSB176sF9vD6fPK6EzMo",
  "key23": "2g4S3B3xQPKBfEdVEezPzDaTmTRX8dB3jy3guSw8Bj8Ttxo9QLwN1G4jLh2u1sw4g3oVtGHoiwAmGiLh7ooCC7ME",
  "key24": "wVq2zarQL8WAcPrEVFgJgEAEChL7W2KAnXm2La5zfRo1XHitcBVch13UTSzwHU3eN3QoxCjGan2H7AXrNEMoxWx",
  "key25": "2qZDXwq1XQt3dpWwntKRNgJBibkKwUUbAABspWGK7Q1Emo9YjiMvcWciepa766pgHng2hNs6XYySVPHznR3JGZeM",
  "key26": "4YdcwGntZ4F5KwCWo4iD91nyyW1KC4RjxFWdwqiSwYgszpP5m2mfp7HU5kzCVaHw8vf35MdFsmp66d9PyhLysYPS",
  "key27": "2PhDkeDLE5zf68sSDZZWi8Bcwi3sYh6TGHFMpxy2DZdiKXbFotX3xKGRtQREMJ91SsfvEsU8DTSyy2iSfDq2T1xU",
  "key28": "NBsQ3LVfgvrR3iH8M13xyZRgDTt9H7cgCZWqv7rvUSBaqgd9tEtpZziSCQB7DVtVGntvVnurkXzaCRqCipDRCfY",
  "key29": "3SMEFfmAdLS4jbEgoqCDgp99xazVaf9pBtsZTEU5v1kuLwxEAXrivhDGm1ZPRrtDWNSbcHpJtNXpthisisB6puH8",
  "key30": "5D853kUyiqbAcDqW1UXNs5yNSetU39zHh9vgV4yPooTdkQVTd7PaVrpod7m5keRV7Zfc7N5PQonDjVVVdNqsXCVy",
  "key31": "2L3yyZoLCteaUucw2NmU3odtWWgEC5oNwe2UtMZWvpuqWVw8QxW6Jzcubm66Wi7oaqiKfk4q6TwLTQJnE63CTNC7",
  "key32": "37PYFGZXTnS6ugLjdLMriWBsN2FWe5KioSSkfQF2Q3Thnu2EZqjFD9Rx4YoKSudUCp2gRwu8bjNFgQgURxqLEuxZ",
  "key33": "4W4XpHb45xiGDr1Lw1vPy67mwffwFtDv8zuPNV2m2eFEo2SvjFw9MucrGNbD92jism9odYE7XwNFkpQnpF7VeLgj",
  "key34": "2erB1UJcqWcmyazLEBQTomvG6VKn177jxqjrohRMdoC7DieXpP21nNYLFcJdt8XZHfyZM5E6QtyxTjvw4uEriKcc",
  "key35": "5vmtsqeR7VaWMtVNik2byr9x958gxv4qw4D5sKNUdTJf2NJF6E1Dce47brMCGV9zGRA5un46UQ5PCVM6pLWYD9YP",
  "key36": "VD5X9V1xSPJgEUGgps6xuF82fmWwJc7CH8CwhAVJBEVXR7RqnRUs8idBsbkWbQ4AS9uusJtmyiF6EZTzv14v9tp",
  "key37": "2JWpPLKjkiS8kszgmifTUVwqPonqeUQ8rCZ4HS1PKcvv96ZLV8VUjoHEK4BShGkZPBff8sVfBe455RSnHXAuLxhP",
  "key38": "59W3vQ4mAhy5iqrxTMYpncFhxbs79KAheEaw6DXx5oFdW82rrf5GwL1J8KpWLdbb8ByHw5bJds3bxqRYHfUJtXML",
  "key39": "5PhF1fHzQ9kkzL5f4anihnUwmLrScpvK9NGLzBx5BTGKVYA4qUiZo8rG9mQUhX2GLWzZkqydZCbhEag2oqyBzY8U",
  "key40": "5Yfc2HfwnyRmcbmevcjSYre8GxvGx9cbCQF8WvCUk3qhEzj3SVaEYp2CBQaGsbS8MrMj2VJ7AHaWxPkkDGFLVN3x",
  "key41": "4iLGR5XnTr5NBU3BS7czaxCiRsT7YGbGLiUgQa3YkPdjzeCrttVFsCQgeZrkMVtM2woxLPenHJpPAj8X37UyME1Q",
  "key42": "2F3u9PbBTipEu8Gvgdbq1P47gfTG3962E3tes1rjP5vDVYUKkxrYKsBtmPX8ULe1AWzafGy312e66DLDZEqBSHBL",
  "key43": "4ngPtFqSvFywQWEtEnw19SVFWVUMRYWm3t6PnCCRyged8Pz9xNicmRa6qQ6VUawCTdkf4WXPRst3oQgeRaBsTfxr",
  "key44": "65WDmC8fFomurokkCfdJCL8ifbBxVGUbZ1vwpXKa44SGNCRSnVejxaus5sBexXgcHwm9gesihSZyCEsh7He65waL",
  "key45": "5x2p4eE8UcRzCvSbTWe9J9vQP85tEuLVP98Y6WeTN9v48SGTpiWGUAFZQyRsNQKYePTzHmV86CfTVxrNSV43ijwt",
  "key46": "5LGYqriBmMauvJvzhJGN33zoVNPrKnSdjvfG5yrjW1M4sWrTFWhEfmcCFqKCTozWBsEMFvayErGtNUzU6btjhLxH",
  "key47": "61qQGvS8o4UsE4woky4SQxXPiNsBwhadhCimJHXWtQg6Se8vBqcYEjzeUoe6nfh2FrZ8c2WoRLAFdxGuj9k2ncGC"
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
