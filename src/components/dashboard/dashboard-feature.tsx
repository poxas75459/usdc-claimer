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
    "267BnsaHNi4GyNW8UDGBxSavYprMcmGkfdLg4nWAWLvpJikf3ftoeoZmdfEtJQxNDmiBNp7bk8m6HQF8Qh44MuMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T6DiQUzsr7rzdasLZZMpCPQRCKKYZYrVGg2tS9NuhqSsT4hPNrEF7fVrwSVmTGKH2Fx7zwdEHM3E5K8xsH9MvDC",
  "key1": "3DisezgedULkedEutWEzNmsBxEwJmQuVnXmTmVKhK5uXjWFM6WQMivsN8noS3U6DrCjWuJhBT24P31ZACTCt8vPV",
  "key2": "4p4xntkqzLafxEywVmxhEvqQbjH3aTjL3Dv87jJTNLVCd15EFxfeizR1UZBmX857bErgNes9cEfDiGtSXQUpdyDM",
  "key3": "33x7Lnh6p9LNBbW9hy16HeHzevhvKztTYF2cCpzXHvSpaJFPmLi8PLqQ3nR3dStZxGTVgvLds9zY9DMAqpvn67Sy",
  "key4": "3bFS5FM9gV4FH7sLSDTC6wuUFmvHQfRPHUuW1hUg6QiUgAUtYEKWLk8P8xZtwTxPg7EKzK5HpGE5EFG4q2RoBJYP",
  "key5": "21P8RBdZn6C1mttKMRBne8ZE9jAXECNj3ktuCzdAUG7K4yMx4DD5bZ94UPRhEoxXYB2mWeYqB8Qg37JXmzTxByFX",
  "key6": "5XQXymVTBYATEfoZCi8uXQpAGSPvkKATfJcQXT8ew8qiWQrdBfxCpEqcfmGgSK9v9fBA5Zm3ogL565SG7aCYRpjn",
  "key7": "3bw1fApDLbxaQH23BSMiWnYXXaRdhNWWxDc5aEEVzUoig6KaiEZ98KA89Woi2mR9caRrdf8tiXFXHfrHccqzRAZw",
  "key8": "39kA82QajGwKyo6UTRZDsn3Y6gVvcKj2mNjbivXiu7ZptqxPajMc31DopQHMckFa8UQb3guKaVaNVdz29dD8W9bs",
  "key9": "5T5jGjHir5wTaizcEySmys98goH2JxuC65YoYESwnbx7fXBTufXEbtjAZALp2JDpzfWUddCYGsFKDYYnE8pg8v3Y",
  "key10": "SHBJkeNyU2FM6DtDrtpCPion2U12cqs9Ydn97x5bk23KtsXLCat4fKKoA5T83Lm9dZfXjFE6a3tW4e2vQkyMNJD",
  "key11": "5NuXucLqC4n9E3WmHruMCSQC9xn2fuXPt5U2MWDyKD3wkCdbRFN2h1gosLhewHGyBJaHwjjKmkBZDZcctyen5Zbb",
  "key12": "5Z7DZDnDnwEnQnKF2Rue6kyjrmspSwXtLdoDoej6jEL7XmivBCW3vtjsy5rYEaAoPoGztfFQb3yLmMwnMbYZZnXv",
  "key13": "3TnY4yH9DKe9xzbGUddvVG6PGPz7aRdVark2eqFwNdazDBncRRL1w4PqqnmXqCV3tS5UJfV5g3zSYW9oU4xaEm3L",
  "key14": "2JymDKGej8FQbuRZXYShwqxN9sXJdXNxYxLXVbNV16VSbszF6jKfC8oGg2ZHhPQiBfhpkiCAKiH2k4uaYQc2eEQb",
  "key15": "ka9crS99k3p1GaiZRuyY5ydvNkwjkR6Gq5dbmReyoniN1oST2QXevgv3V5951gok7PdjKxNbQAS1vbUV4pycXcw",
  "key16": "4QAUk5uffaQw3me4yi3z222ryzks4R7Tj6fHGtnB1zy42bbc7UskELuLBikZXawEFi5SyShx75TNmQ5c24htE2eb",
  "key17": "2nJAgnKMz3CRYsbUyoiC9XxEQirJvkesGXWTdtdfKZ3Pb4uavCapGzYxYe7oJRXjhNegz4rAabHbv1jVgxihTyjU",
  "key18": "2uBtVStZuHgbhaFA4KVcwTYui6CPJPGSFhvCyYNSe1VPcj23pfVnfKBG6riDYwqBoes92U6jUMc6PJFfDVqV8Tye",
  "key19": "4LzNb1L3Juh5X87YAyxnkDfWj5tKBK43kpNXjQRhfLcMgq1TYfmB4pP7d9Z6epc1qybVwbStZFsrgAu72WqG1Sxo",
  "key20": "2B6uoCkj7koYS5k9hZDrWFV5Q5FdeRZHqwLiU9vW37CRCdfWPcWNWp9tusuSn3PJgTUguxMBZEq7cnB8xLyXVNmt",
  "key21": "3Xs2aueZPf3iGm1Tr7tscXNrmjvEEvFW8VMpsFsQJfzi41UcBiN8x71ixvFmbLhxqQBPgSz4Nngc7tot9Cbitc8k",
  "key22": "5bXoJnURDmVHsMgKhGcrdvofBP2eFP5jaaRpC9cmfgkq3AtYELsCGtRZSXNa6UQAv46SAzKmhip5x1WKUcetZMZ6",
  "key23": "57mobYtQyhPzKDaP3xBBk82ZxSQB1GLeHkpbeRirnb1NGpmiZgLaPWTSbbnhgN6XhbS5haMeG2bjKcwYLxYHVVeG",
  "key24": "5KBmFp8LnZBoaoo2SGQmmAL2jo9BbbSmHdFtdT5bC3pmMTJA4yWGTeGxdMHhqRwgqDF2hSx46s9Hcaii5DZfH3Xv",
  "key25": "5bDqcbmibuto62jkfUv6q9r7Xz3Rw1mH8k9ejTmm6YEp6qG3278kb5VwbmnA5UvS7eWFkx5vzxSeNnEJcBJzWTG",
  "key26": "39Tg6FcEDqmNRJpfj49vd74q9wru5S2JfM7BhA61VtCveBnDUkU5vULPT6fnVPiS8FXftpgpWHCuimZSHHBYW5b5",
  "key27": "4UM6V4zSwPSzcfWhME97m6NcR4NTMCjRpDqwbjshQyMCZFfTGggTNp1YnMwCwg8VtzzHgXK33VtwU6S9US9NuD19",
  "key28": "ULnd66NCJBP2EkxQwvDvWM5UKh972XWCpAfMKSBVE2gi8Pf6bdzW2eyJUn59kPxSb3oGB64gjzYDN3vMVqyA9Ke",
  "key29": "5Gvv9mGWp6vqfuNPqpyoN4b1k8xp2dEAtZ2VrUikaTPq6SmGnWuLAbScLXo7DufXjxUD4Tmgg3GGUGGTZ1rRZXnY",
  "key30": "66usBQ2avyiGb1HgRKxUpc5KrgQfydZrEkF5746ecfRHdUtbUceGiryEsLU56fx3CfASRtkp4nNek6PeCX6bGS6S",
  "key31": "E379fSJbim597u4mfu4Qdw3vwuRu3KT3jM3Srm9ysE6F1dAp85APn9ACimWSFh33bAMR6aQXfFfyCuKuQZUqtzV",
  "key32": "4dquEto1rxaBwZ5K8VrduJTxzGWB3pScajKGXApJ3KfND1ddCSNHMusyVXeNYcLtKirYqxhUhb8YjNESwCLrrtma",
  "key33": "4khGPeHXinaCQ7cttxCpqaJGL253Qcjg9oKSDKYW163BxLfSgxXut3Fy6FmFmBp41vTRs9LRMoV2aV7T3RXmg68Z",
  "key34": "4Ja2Sd62TdcuenDF8KfpWQdQgKVCxyhZakEkuCLGWBb57jQt91PyATuRwXKxtxYNCBADPGNJfCsoTghUgtEX95kP",
  "key35": "5PQR612bxFeF64nCYUbruEBG9U7P4hTB7Lx8uPFhsi56k9ku5KvHHYyMjoUa2Z3kAGzvnnM8rTJAEXYQThPk7DhV",
  "key36": "eafqrwtnkRgu92zebuMx1o7DCZBCsiaxuNDuZMku11QdgS5sE2mZVJf8Z4op8RjdM2CXV3htwiHjXxamtwmkNQk",
  "key37": "42FTvGdJjvamRB9EvUv7TxUUCMEx4jHeP128TsUmiK1B27H6ULFNqcR6TbBe2AVQ5XUVUhPHh2Wv2UKFN5m5EoAR",
  "key38": "3tMdEGxNzo97vFMarvLvoXD2bg564L4vuGs1ehaJnzhaCf7WsKnYp9JEE2ZeZ3RjLNBPPvQcVPHhQmQRQLmVbYyf",
  "key39": "4QQaN7e7FijasSkMZv6kT31LnNW2zHpfxjS1mLsRfuCaeqXynmVScxTVxWdtN3csnB6mSq3oL2xgRBeZXfHq8Px3",
  "key40": "4QKGfDf12Ug97CJGfWzHEanGYAVKKUCgtxhfzCSNLDWHyvBHeCN5Z98Bgy7rLgmr3zbh456EFyTDSAKTdvkgz4vf",
  "key41": "2EfmAQaoWPNjdxYzSMDZevkyEbrAfc8gy2V6hrB4WBKuZzQrNLGSYhcCaWQQcY4d1LZLz8rBDpp7c4qcbVD3N3Gu",
  "key42": "5o8qheGQSt6JRaqdXS6s1fpqcB7ktVHGbaFrz5Vdfc9V4jjzHame3UfGp6Y6V1Gmd3T9WPJSRS6j5mTiSc1kwuUL",
  "key43": "4E4w8XpQALsTz1p6TSWsfCMkqNKW5pfA1TfRe6NXXqqY8F564wE4VVHAF7TH6uCmZ1diecAp4iaqG9MGgQfvswtA",
  "key44": "3wuXocas8YfADpnpHU31hf1EvxDBsFSn9gKiwLFxye9YMQrUjWGHdjdHrb1AokyF1wzEBCowHUsQqWAF1WDDak3P"
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
