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
    "2Qfo8hi1wDvSTtuCMHtZEjatLwE5V9Py9AxEJBmf5qjxQnzaHV373FX86ugGpY2oX4Hz6drFvhwUmjrEB3pk6pd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2irqD93JpQRzUP7ueiT2ncqCufSkYaSzv6HCEz55s25VCgdCSGsmR8WDv15venSKW3UhrRViaM288DNea7zVLuTJ",
  "key1": "2cMGTQDq1GuWFKEEZak8RGkWeaS2ggACX11o4QTzJbPmY3Cam4pH3BvU4TdGq94MGD8NvkTx7nUuLdZN7Xze2vgW",
  "key2": "4bn9jN69JSZuYmUuN2G8CQ9Vv5TRSk1drDRSBYGsv4Y49TQpY37rg44YLwcBzKSDjSmbmYrRSzgiyNyA9gwN3tZd",
  "key3": "2PTAEMQPED5NuFTBNmekVvvxCuP1WAXSzrvHUrjDaMUCW63rPNnWiJvQes5nESkJE8N7orLTqNq71j6hEpPpXfH2",
  "key4": "2RjurugwqpeTa45398anYfzcLmL39a8QVets7MQH5aarbpvHRRarEawGDsToxQMxHC86Rbg22PbrDSgnEyiQyoUf",
  "key5": "27m4vSW6XDfq341Vpc57vziLY8i7Lky6J9YStfPpqQqGMrVkZcdacWPpU4yWPBXYETR9uTeXnbAdTmbF7znxGSPs",
  "key6": "bvvG3n5poZpCW4C45PnV6yTjV7RSdxbnKuhnHdpAkiwobY1hDT3LHq64WogPbtgHkWSZfTsVyBZhDTdBGJAbsiB",
  "key7": "PwYJ9YgwQW4zMwPoW6YA4RBPGczQLc8Z2d7edvWb2tB57d3CzvB9P25euXqfzcJhjarQKHe3FoNb2cHVt4bYhH9",
  "key8": "4YKFRvw59ntPvYgQPeXAKRS6DDCcCGMoknykYMHzwmbuhG1yPt2XtvcdgCGtXbF4EKMDX7RzNJ2ox8ZwRk2wsH2N",
  "key9": "5Y2qTrYQRsAj6FATrNt3jhWox9Cf6D4sGQB7NZwAGqBCnNcAJGaQ3RieCMzkCBSoutq3n6jMvDCbxRR8ag9VYoKa",
  "key10": "2EcsPZKFp3PsVK53qTEYZYmALdArH5XrpT8ZZLr5DeS81YAmafsVfKUiWGnhthXc8vNE32cWNe8v6LiyhR7RW1UW",
  "key11": "3XWj1CuaHCSEmoHN3CWUmaEzuNnGdcAQx3D1gmuPMvRZea4wRW6RerghLzGQ3g9Cmoom88c8tGcSMUsmPSAT1dGA",
  "key12": "3xCrWM9HSEF4MhTQcfipMwjFcopo2duV2EebVb6CZkS4RRZTAt5XcxT4aG2aTkR4m8uXJStUxGQbwFnC7KFDN2NA",
  "key13": "5c231nFLCz8ye5Qz39gH2W6hiz9i7PWsLtHc8zYGL5UWKgqea7HLcqyFuAjgSN356ovKyBz3iZFj5GSfwZTvZAg2",
  "key14": "437QnuPCbUF9RwQtabJq574mMtvud3Xrq4AMBSZZjfwg2kKKsAeQVdGervXgfxRf5qJLW9q3AjyEHtGZZxT6bsYJ",
  "key15": "53rG63CWYmtM4iiecUuQ5RWcZLUgSKHCnhW7sx7UmTU25ZfqBhNEEvGgGuvdfZMUs8Srfmr2Ap8uhbNcVSx6bnBA",
  "key16": "62aymMkicJzWn3uyRLCv8eukq1PAmWBHNPgr1EUS5HonVzcbx6MKM5Skr2gHAnRL2vmgLwPjmtRjKDvd2y7kBKky",
  "key17": "66kqztG7QbA61QDYZ6TEKSdYBg7sSao9FJhGqW3UrXn5szQfSYXM5FPpo8jg6VCUkyJXLPyFRfngEBMbNZpATpLQ",
  "key18": "2LRaS9c9Kx1JgmCXnYRyutqjUrENv4Gjpy2Rx5d2crd3rd1W3TAyj4D9JYQXsrj74Sm7TYpZTU31ES9s8Pd2tUq2",
  "key19": "4YEintGFh3WNDQZ7Sz9mJSVzzr4sXsdjtTRSBToLFypcJmcfrWAHtPiY3yw7nuHUrbjw8c2JeeAvwaHgNXX4PHzf",
  "key20": "2vheckp99kMzCyF3WC8an7JWmkBwqWR7Kr54FCwVyWY6Dd2LET2Qhogaqo7s7618fwXmZEA4RtjGPfG1GQQSBUqk",
  "key21": "ccfbgE74h1eFbVBYWjgzKHmfEjcYwM7F7GtCVDbacXHfftnE3MTV2QW5zimnv9pWGfnc9Zx7hu2SYkvWacHVyHR",
  "key22": "jEotx8tRMM8gsaCfgGnsUzRzwruh3uqLWRdJaAzTQUUCNpj9nbJNo5dQ7FvqKitVC198yFCsz8Vg3jU52hhwxvD",
  "key23": "5M9UihsS2VNkHsyE5cNXB5E9Q3dtdigGLWZAs9HmUDruZYnhU5Y51ALoVipYFtAvbygWoASZidviUCyv2RG8YmxL",
  "key24": "4MGxiCezT53Qto7oEWtq4cXw57rcY8nD21kCzVyLcath4GiJkPMney9nNrNRF8m9JjKfYfjAbgUgRBPciKfqxbwW",
  "key25": "2kwhBCByou5ZHA98BG4f8g8qEVVNAuWXXdfRg5oAqJBGcGVsqgKcAi1TJyK8Y67dHdAh4U1UTU9me2foi3iPDUSV",
  "key26": "3D5LeENTKeJUkCEU8myK5pyhMcuKBv11c1tuNVprg6dzyWrPJJmAeTYP1fBcUovFRGbsLqA2Jk9beQzF4i4RXbNL",
  "key27": "4XyExSGWzRVkHX3JScuaiukaBsJzagGkbSGyhRaRpUkip5tPRN57nXKqrCW5FyRzac9z1McySNntG21EVTKYYgf5",
  "key28": "3YYZygJHuWL6J9Da7C2E2ssw8hShncN8QFWE71KGWCDe6GjWPoPNQ1ddX5or8Mpt1kSRGK99VPu86Zg77jAQR6go",
  "key29": "3L5fftWWoFgZpWdKAXTWyvAZU653V16DubYRnstWKPY5gMtRNdXfv8FPQcM7gJxkD8zMkJkjnzApBEdgFZ5kG3vq",
  "key30": "7zD74L5hakoejnucZSb6BTKJmoNGUocuWoLpaCUp2UKX7zmqopchkheMbAznqT5FC5EzKptctGSVUwqzvr5J2ii",
  "key31": "2Lfb5GHsSciGVGCJGgBaQMZaYwP4x2dfWwsmiuQyBu7RVNrpGVFJ15KMiNH1FfPdGrsuCv8dyUK8UEwxZaPQdaGq",
  "key32": "63adNvgfKuir5ScdcMnm2JWY4Su1dDaTrGrhdsq8XSFjW3nEm69PAvLk6E38r1DCpaRNijA3TCxSd16b2DwfoA8v",
  "key33": "4ymd1hd4Tv84UTFNbfGf8FbEuMbXALJAZ52Mmq1nCL4GUANi1Feu6zjJVWqRGYqJ7C3dwpMrtNpJxQ5YGKaVYXS1",
  "key34": "YDqXbiZH6nSJF2APRaDXFNa8839mET2abFmQJvFZv48qwjzCGUaLmFDcdLqHQBM8QEnyesjJYujomFxs9SUMTJK",
  "key35": "4ftJA359wVQc1MZaxgzKrnFHiqPZbkr4vyXMs1kpejhQFhb1SHd13pogRbQewvL55X2JNZ53sY3Fv5yGVqQXgDnv",
  "key36": "67ZYqxL2nr8NAEokxQuL1AiJPXBLnzFRqjQd6LFYQEmK2SwuSNArRCUhbuZLnkabvmaTUReukrTTtr3diRRWBU8f",
  "key37": "2irVrEbncwPbNYU41WjmQtnCDynZw8i8jsPdZVcVFKymQzupJFNhSwgoejNZPfKotvL4H2Jkbs7zBBVnRVc3ZqsU",
  "key38": "3pn5gSo6tq2c28LwUybv4xnVMyQ6i6vH5sTnWkcYoVuwXHNFgoNVetE2cWYkrgqzgv7xfFPtztzLRwf9xiYMMFVQ",
  "key39": "MN4RNS1UPmMnR4nr4ZcYovCfPki51Q9VCcLNh39WjHATUGDixvWmiakzFKzu9EH4jatBgPYRzQz6PTfZWmLhopj",
  "key40": "5pV29E2UQ46xi3ramPoWHafoAKFCrG8cLEUFXX8Xy9YUCv5UVCkgjcbAbmbg2a91XkzgGubx3Gcutoi6Dy4DkJoa",
  "key41": "29ueyHmGzFw5nkhvXKc6Ngyn3ASsMMh44svgU5ywEaDiVc5xt4WFf8mRFB2NsEDPVdECivQVG3d7KYRfSswVFC3t",
  "key42": "4gQEoyYYSzbzmhodFjBMqDbNasGFtZKQNiuzTEgvohWuusLhz3t6b2g41r4Uooa3FeTjyyAWMUs8B6fd1MCxCjtE",
  "key43": "5dsJ12PtYtidLo9nXupn8BEe7TmrRXitEsFiFQkCZTVytiozNVC14F56tFQtivmRLDbDFcs69kuuH9WBQBBzuay1"
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
