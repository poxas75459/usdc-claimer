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
    "5xD8ibseBX76ZMXuVssfhuvZmwaHHmWkTAJsFcXdCjBh7q6HBMQwA9aFj4NB15wf6GZhixSoz67g4rXyEnLg31JZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fN9QZt2dA5d4cLEcRd5Q3igJmkFaXMMT4XLDR518GQaxMEVYLxFkg51LgXCK9hMRWvCRHyk9wYKPaezBcyK33Zw",
  "key1": "4vUwiBMeC3otPgxa6CudyVSzNsucKWLCjwDSMnEN5ThLChKpK3RDcHcVnhWyUuN6Aga81ha7mmgVqqAjNnq5F6T5",
  "key2": "2hHQ9yhfgWvZdXBsrqZskUhGTFvgFh8K2pnhMuZfF5mbF2aUufWt8eBvCCCMhExJVvB88uijN6EpmkbEy6touGdG",
  "key3": "5tsbdvaKS9MstzPZcckn2qgXY2hGrpzqY1GuDbPGn95EvYk62W1j2n46u5FLkjRvQn2zhZ7vswCxQvu9opqg1DjK",
  "key4": "21GQgrYzc6HsUkWf1FKnJsPCQ91xDqSooa6q55uoeGrnEir7CBSw14pUK4iy3HwyzKcDD1p3vJts5Suz4ioSSn7P",
  "key5": "XPF4b7WZ9XpnbMb9ELZvF7NpLHE6RmbFYJvzecQk2JLtgB8Hux16LEcGiwAbaX18C1nBmgybGfR6DzWrpACFviN",
  "key6": "2fcAFEABraqx79xtFPhChRu1Y2QgheKHwL6yFuLfSZpG7AjUKQ78HYDiLigNK1Ka7Azo4W3WAZ4xe7AW4kBKtAWR",
  "key7": "5KXL4EJQKeiaGFcU2RWuDY8NMXhmqK8eiaQNFCLfPnR2mckdMYDMVRTgJm2j4sxjTGHUvoet4eekLYAEfZLRpLBY",
  "key8": "5vx2QXBiePsswYJhYyeBQoRYHVtYfhreMNRNcB7KNoufodeVdD7B8kWqHkFwew4QUycAgXinkE3nnjMrisjoyiVz",
  "key9": "aaqTRK3Pjkzc6KX7F8cYVSgc4p5xqWAt7y8KMD6WRW4XBBvUoHfabYn8mJbsHah3qJXsNuwdBs3V6paPDErEsqc",
  "key10": "3CjCBP7GW5zmyEY8JE4V2XVQrHciH5FJQpZbbhQxyDBdqJgKcUJ3mzrJCUdLTA9f8bE8GpRNj72WrduxFBGYEDTU",
  "key11": "2WvzxnmoRYRTDenTLpenrLR4ijRCBPFTq4kwdf4N2p5Eept8CvJw7pBm2iMuQePgwFHTC3mdneJjL4STEPp2NycK",
  "key12": "31KGN9HD5EcQSE4G8Avq5Zwx33WJY95f6VJ5NZMkiz1UvK4LDknhegTws1PemyHHZLmPu28zNA7ySmSobVtEuj1t",
  "key13": "47YaHivn7Q5GsWnaiQErtYKLgYrZZPXQ64aoW7ZEieVasHr7sW4ZJ4h8g1KotVWzoU4GyWAENU99gUxT3YMhW1Cp",
  "key14": "2NqAZ2sYTAf3CMA6dStnVCMgTQdJuy4YRh54kknrXBMpzXcddcv6WrSW5pPbQhtNcMsp588ortU1wnQx9EPmF4eg",
  "key15": "4eQgxC7Ny9Ruw5SJhQvAArwM3fyRx4RY3NyQQ7qxGVdL8H47SKnyi6EznVLyvzN7tWmh6jpkPk5pSkk4w7XeUdHt",
  "key16": "3DhKyL79JybWoY4jWpbYTWNSZuo89K6CX7J1Z16DR7PzQFTmXxP3xvYSFAu3Y1AKwad2eELYufgwmTHUQ3ftGurQ",
  "key17": "5cdVhv5bx8xgzmwUeazdDkmraDRq95Ti9x6Dz8dLgrDwr2UQrYJjYeaEphydRnzgkinbof1UcbzVAwt89mGSqmML",
  "key18": "3uHjqEBGJ1wQ37NeekrPLwon3nUqWBSr8d5bAm7j6bi1AuL1TgWwkUMjmKvmGu1LCP749BESLaXyqrxSqj4j6SFp",
  "key19": "39CpBjP5QRiA1z8cUTWTp3PcK5MsGg1u35EY8WENfJRjvmdi3WPGt5Bf8raxDt3idi2mBAX8FsjSAnL4VhquRWbF",
  "key20": "4aiDk1ATb6jM5SFa7ADKVgLZM1Bv5DJA9WDj6kAZRLfzsu7oCAaLEfvci12VJ2WDXBg7RYAAjqWh4TaXpCuXsMhL",
  "key21": "CaMqTBn55ZtBqzc6zAsAD5vtEqQYF156LHCT8WrvduewDyiu9ZRNJ3JsnTTfxbv4VGjUc78RSvq4vLsGrFAbdur",
  "key22": "24kktZVcxbrhV6Sk4dg2cqL72pHXUxkzqatYaBvda1fcfYM4WiWGdgx6fcHoWei9591upYDjLwh1Vf5kg2bgPrCb",
  "key23": "55qKih78wrNKfMWgzvchUbyMAcshRvQjwVnK75DndfFfos1pPPxMqwtRqGMzdYDdguC2iwKfFSPFfE9XKhPaVncW",
  "key24": "nrcLzLd4HqmWJxs17Ukn2tAUNtR5XpWSqT8ifSoVFcueNaxVV5A5L9BH1inHTyVkcK3mhacU3RgPhwUS1mx6enk",
  "key25": "39h39tSPTs9xiKVFDsuMBbvxQR12t83AP3cbCxW6A3SWJzVKmEoQs2MhbBJx5dMYZC87WDU21hRHcu8uhwdjQrPT",
  "key26": "5TEhr2KoHUAM2P26xv1dJ7XwY5T3eLN45VvMFgrvQSFVG3zLRevfgQcHLHJgi8njBANxGdfT21TnEhPV47xY5soZ",
  "key27": "4YQwQL3SB8Yw6ZfEGFuwzuTtzm6ZkJiyBwDBH7aEFohppvMMBDVvctWe3r7BAxedwVxvGaLsqGctxYdT4feTE4Co",
  "key28": "xWr3Kpqm6Nzb5hAxiNf4epxPUbHf9yjWC1EHCvLyaSq24Zxt8AUdv28EN4LMbTaP5zUK3eCaKuX3pci65dJMD4A",
  "key29": "5uYVzaCugnnjbxvCrdUTxfr2jU55c5ZzHCH8vbK79t1Mv6juj3ZodemhQ3BNVW5dij93nvJoFH7vcgeZnjn8Zszk",
  "key30": "2LSbdexeYH4UkYoC8fkcrrwmyojiEupvpffVmivjVrKbgBJP4U3NHZBC1wYkWRu6TmwxQuKSVXtXuYSvWtiz69kG",
  "key31": "5NSMy6vQK32BpbHp8YQ2QfFcFL8LFkPLxrcpPVxD38xZDcMpLoJMJTZXwr2SXHXUgNiPr4GaizaP29CV7xNo6HuA",
  "key32": "4ee8Fdd74JWKvefALTXBsYri9ae3ycLqWaPthqTDpJY3ybAT3RbQ6JguEV2d43MQ73KwXsquzW4ynxjjwbdGrdcx",
  "key33": "21CM4YFHXRxXKYZWHLtJuq7yPrSSYJ1iymowYtgLyVDVBFPQ6M6GBGmVQ7nUCPbKWkd6deueLwe8RiAh4XChdRcb",
  "key34": "2QaN9rneoW6jDWczr5BwnA2MCJt3ANYYnToQRV72gM3SvpP1GzgsNXaRS8bvR95LmP2MQAcrouBFp11FTQxwChb4",
  "key35": "D1AkFCFM1jbvYEtasgYQzH4g7UmowHoykoDCzQNf8HDhdreWJYJXwKUY56r8BKPXWprQavwzC7xpF7DC5uHPdsX",
  "key36": "44tJmwM67CCKBN2FWqZvNEAcipZuQ5QRzqCCnzU2SVBh7Vbf4XnkQgcjmvCmGVzPhdh3p3Va87dr2rELxhrfUZSr",
  "key37": "5oj6UxjGPohURDDu246wH4maKbTfWxeEFEr18wfnDA17THCaoewmCKcCC8Ryz3xGvS9KVd87kzsqwJe1oHwXHC7u",
  "key38": "4reBh8D4vvs8uWu58BeagV5WZp938PsJyaa4jfrf5ATAyM35dj1bxZZeLaQHFwVcwbfuSkEKHNnvXV6chMYHNLV1",
  "key39": "WEnbr39NGFfxvaoVTMM6nDQ644DhY2EMqF7XWREWupny6tVvdKTj19v7rC2WSUiSJDxznpEx7NCHhG5J7htT2T9",
  "key40": "412uxogngYY1Xxzr8b4U5MiSKNKC3TEhx8FC7kVBVTm4mpGGuKphyoB1n1PRQrYqsphGBDUStacRSWb36KaEa62s",
  "key41": "3GGVKpB2Mt1tU8BCPkbMyuj2ubV3STzzKT7s9676TLWsFG44M2VHfZ1fgNdCDCbqTLgUXyEXhGhgYao1exiYC1BF",
  "key42": "5gs1qr6MXVyyrdzh65pRhyNGgXtxFZdZJpLgYKG4pmkrQsNv3Sjttv8g7nQZtjPeniPYecan7CKdNLUB6yUmRA4B",
  "key43": "5C5T5GHNbqnpTA3ygxH5TLGcKndT7hYUWiDPseHiXQhHnSBVRA5h4shJytK5kULkkN41Gi5UTWrGjy9VaGvT6huB",
  "key44": "2mtUkU9KPYxDaRCfcqByZkddsRfJ6X9tfmNn3YkysbKdKFY6gcEWMrX46KB8rbwPKBEsgmapxeB22tJjYass7poR"
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
