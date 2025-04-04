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
    "49tRCJgdxrBW14xS3uNZsk9gTTz1PAXicoGqUBYTSdjDJoHHnYRpHwkU7kGPgw8oHgBVMLXyHUKRUdmVg9ayVvmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28w2TrXtL1Zjs29bvPKAuEp1jnskU643YxoyPuMFiur6Axp3RGZuw7RCJAARf4k5ehCDxLxPVfbUNddx6qNASrcx",
  "key1": "sz4XqUAXM3DbGCXPgDtRVL6zQ5xTpDrZhGcTVUKu9o4k6Hr4KYbdYz3Ab3cpjBJ4F1aUuCC4kuwnF6Kjy9CHK9Z",
  "key2": "4wMGgLVaGi9f4zEQtDgoTa8JqZP1mXH2PjcDhU1rzZkUEqHkGmHNkZqUW1452y6zMAxPraH1vRHBy7bw5hkCLFs3",
  "key3": "4mUpNtEzZSzjbo2AzftWq5SaMazNwyTSvuZuuuBBtL3yxij2eYJ5oi1eb4MpAsed3pPvgLDSAfhV7DsZUC18ZSKG",
  "key4": "YdAJRWJxrhxStJW7A3Q7Xix7fokYPGs6Jn9mpZv1CQSgnQLTEgAJRHuDyXwWVWqghCb8R2PCLvydAV95VpZsBiF",
  "key5": "bFTbhkmdafPHFiPs9YwZkGwDnJQkkMdFHgCaALJGAeVq925CecJARZYxZaYkhVvdAGkCFMVbHkypi8TN78E5BR2",
  "key6": "55DEYDi1SYwejEudcGbMKC3pWyJrASHr3quC7pYCFdGocDAuwUJsmCupyq8C8rnyGSbyM212Xi4CWFnygv7kPAbJ",
  "key7": "5L34x1BYzBH92p7aoAv7RkCaDFV3dTcBJ1bvpxqjeE8xidoQE1xrGkqXp8Tije261EMgKL6fJ9BFSvdVo9TuLgTd",
  "key8": "DiAkcex5J7deeDjiMUUGnpfPKDKa9heyx7QZXg9VYPiqGNRQ3wwgfyKi3GJTD3t5FozL7W2kaUg9Zn7azGQVtGm",
  "key9": "3c5adZSJtrhiwWHccWwh3c9bacsRxAi6FdsspB2Wq29uhAfRMrchPFGkVrXxNNcV7RAWS2AmaoPd5cDAySSJHRts",
  "key10": "5qAWxGWGTFinuRGumLuSF6GhyQR3Wg8VMF1GkhjcgN9VCd21YgBxrca6qXTvL6ayk6bjSiF1NQ82rYtSxc6zxKPF",
  "key11": "6hbFjehgrnnaW35EbQ1pnge4ZCo8uGDNW5644e1X4wbjwWkAuobjQYmvHMfP1TsotEG2ahQjxz7Pyk1NoyTRhoK",
  "key12": "4vFeW7B53B73QE4S1MTLAcqQdLLsxgUZ7izosqccbR5YfN2G3odyx7YXp4msHqx248SNkXP8aM3J7GxdJriKSEY6",
  "key13": "5tBEJ9qNxhWjrtd7Wn8L2YNczr4JqSMAV3uk2cpUfmY4nTsBKBJg3zUh7aqSDBu8onhxuK6TwXA2ARu3119CWvt1",
  "key14": "38JCsTj7DH2yNvDN4q36tnaNQCp6nZc6MsfWj7uBGWJfjgD5hCuYpKL5uhRkaz6BepoPSGu2u3yLaDR511iQgfL8",
  "key15": "2wkBkHCxZMRVMeHuPQaSQQQQ8T6in1KzBVYzheUXW21inK1KbVvJfYL4zKzHnkDs8R9hJQ3YF2io4hgAeWC9Kg9J",
  "key16": "3qA7hbunt3vPeK4mThrGysqiaj3629t5V3kUzf4Rm3x1ECREFqSpULHXEe729z1b6Rp46QRm8nn2f55uEr25HFcP",
  "key17": "5QDqVccXuDGcHU12zUEwsRCXfZsuKzn94vhk9YTkF9sqbbCEqHG517YLVYMDtKyqCXFstrRibDYDS5UhdGHHKBHw",
  "key18": "4BHcQW6Lu8wQuHHCCtosgNdqr7ug3cfcBtdZ21GYCpHxZTxAbZXRFEtqLHZiYmJpjJTNZTDCsRom3afw8gpF3J28",
  "key19": "29oxtjzgptNwGiMSMHKtxgboMSmzrfgW3dmwHxdu1KVKYYu7uqcpfofZioWPRN5SXLSsLQLtSu5UeSCMVm6VhnKD",
  "key20": "37st7Twj8tWdq4ht7aEziucH7VzTSxSWVdAyzsJdJupVWakbHvJ8YLgFztWweEmQ2VzzmbWbEvhmpdeQttG4v9ah",
  "key21": "6WrvBLfSxLkGf2Qru6RpqMGAVF2n5kB9p8jvdoJTgrXVHdhaNyNjMJ6zfj8U2oP4cBJGt2QvJjMq2FxgWBgYAbF",
  "key22": "3fspwLhx5S92kKkTVj7HjbMhS2XVm92c4vRTrGEsFZkdmehQJJUxAbKpoCz58CATE3PFKBmggQ3rHRd55JphYiaN",
  "key23": "5gAJ5KbzSZqbMEeNANpUyFW3Fe3MstFNjNPpbcihQDD3B1WVVCmhgQByd7jVe653jw2ppE5PgvNuKSiaP6B6BF9h",
  "key24": "58XeCMTScHcB8KVkbs86pnNzBUtr2cNtNioEVSvoweAs8g2kH6KmYKmku4vKaPX5zuZdoquzAcvWbkTXKeLUvtsL",
  "key25": "25MesbpCZyEswxgFuE1AF68Vafbj2iJApzwBjRsBtKpmr1fjZ4gLS8AcSBhCxstiXeny1ba4dxHdRA3FpYBxDEJ9",
  "key26": "5ZQFTD8Ydr7DsqUtoBf1SyF2iSp7ibPvLB8s9kGq9sQG1Y3SQQyWCSB9JRSQc2LxitFet6VrGXWgeyPDfNnPgRCG",
  "key27": "CZn9kunwLPX1WjQiyyN9P1kFYShiERpAAF8zNBnivrV6LuEjVDrUXZMaPENdjSSQQyyeNqG1T3sJVjSrsqu8bKN",
  "key28": "2n6gU2vR9CNuJ1bi1jAD1tnc477GoVUAuNkRRsM71zh8e68yBxWY4PmceYFqmvdsyEFQfRS21FGoLXE47tvWY7uN",
  "key29": "5aGKc1ymUaDjo7A2LxttLHsrm5N6m8secNCHSkWFHNbf5eZ2urJP1D7wiKurMafbWhYgZd5zQY7mUM8CtPE6DRNN",
  "key30": "2wGbgaXUJCBc4Ext3HCdkAo9cdz752VXCKjsz9nAyyH4iwy3EEFfmKisTsZnjey35BKPxq44zDbJbX3AauMm7rF4"
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
