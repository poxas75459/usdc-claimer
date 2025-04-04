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
    "5YfD3fjsFqycKek2QRXnFTxjxVGYDC6EmHShs2oW1wJtJZ2NVSS3DAM9diGAoRT9JPdqYAHegS27vtpqes9rRqKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZcJW5bo5gtR4kyiZCDwaET9GcceAFRe57kSjSEtmvZY51H6fgNFAxt7UdrT7LsFYRSqKnwXUL6bF3dDRMXRxs8o",
  "key1": "2qDoRYQPgMxDLErDhGanyoDr99Brm1RKzZy3s2UHma3DYqFsiwPj3XfGk8FB1UpGXfsf2PBDVaieigLgvKqvkFXr",
  "key2": "SXk4moQnChqi6hxx8kgxfkAYLLB4TJezxHUf2ZrtaySqhshwWDcrUzmHJWwmpvocE31tbqkhVXit8vcP8rvjS2Q",
  "key3": "2NrGBE2zQRCp8yy6otFiwXmHWeicpVQZN6nsEiF5QC2QAoMUTddPjAzYnxC5ab2nMpFhecd8emTwSMBf2BPYBwZv",
  "key4": "5MhwxzYMo5WoBXVyf4W4hffdJCKVLp1EZBQ6xNiZ37sfFtiCHawJhQcG6ybvzCTSV5D2uYZPVcmpB1FKAYZQC3FG",
  "key5": "5ZnMWBzyQxnnYWd2dSu1pe5MgPvj924JhSRSfdfuFHyPbZiTVVyYLeKBQBSCPBmhyN3PUVurpQddehhAebGWAVrm",
  "key6": "3QMPTgfsfd7SCjiVA2BDSbhs4zDRMx8QmKvQRL8GKEefV3ZCsBGk6FHvmfXsp63UB1JkP9TraXZQ776DvrXu5qDo",
  "key7": "pVsQpHM6cBMDwF2L3LUS14osWfjBiWZTLmRUvUeGZ5puXwd1eeW7FxjCNCdXPJEBuvT25xnk9hGgFLVHd3wwgUN",
  "key8": "4VJrfeRLy2MpsgDXr8jwusN6Wktw8bevBvFGuXPiA7g4sNQSH9xyUs1FftnnHZq4uiJwpsqrWM3UgG4m4PJUCcz5",
  "key9": "5pyBzYH9TqBYvgqvthC5fAnU72ih3FtzunuAxw1aEDbaCadSYT52DZZWBPLAtg51qXPvLhYigXQf3EcAdPtTfYb3",
  "key10": "44r3fVEyFKyBySyMxioE5vH32GzActTtzDU6SvQJUShmiMVtsmuygM7f7n4hobvEMpfwGXTPbinSe85NdAnvnV1G",
  "key11": "5FA2odBsAxA31712FpqrQZamaFLinsdK8vfTpnh5abJLgwc5JVwxUNK82e3rSd4d34fpvSQHLpvj7XuhEEumB4yt",
  "key12": "2Rm3hC2cnYBrYL5pg3FzisC2np4wtLvE3pxgV77Rqiny9J7zqUnv4Mcih4B6L6iiGctiUV9dYLyixGLnt9A2g9Ap",
  "key13": "3VT6qqG6tkeF2kZUDzspxeHQSZ3o9uGbjEkrywm3LdDAdSnzFUwwzouftd1zodn3xmijxXCfYt2o3caY3eGY9x9k",
  "key14": "2E1oK9ZzsNx5bDg9APTzcpqq1KFUT5TdQR6vQcydmfLyN4kkskkoGb6roKBGDPk4t8EmDDTAmo8vkAJtfzo9G4Uh",
  "key15": "TNcxfhtvoStX1HrnJH4GfkuBs7zjbAVSEEjDaRXHbKYsdGQdDZXBvWJ88rMkJCrtJ72fJoGyce3YxsXi7YUmDr5",
  "key16": "tk4Db5Uh7aEAGeR5wKxAtrBCZRF4Rr9zaCMH4LiUwAE4ij7TPHKkAPpnGduAYvYjNSgfgB2DdKZk23Bm6NyFMgq",
  "key17": "5zwkoTbFCyBzQoKnWP1U32zNekum9cXXqwGwKYV6ED4TkUC32gBXTLs8JUGLwVRxnACDN9m52chGPQXA9Pcxahuj",
  "key18": "64HgSp52jT3TP4xRnS3n6KbQeX1RD4TG7VCqAr7aDRBe6jczoBL9kWDfgcxzk3CRVHVbKQR5N6DUvM1ove6JTEK7",
  "key19": "53usV3YFJLA8EcSyyB1Mvt9bZgHU3PkqPXjdyeT22Ky6PRYpHzPHtsJGE9D99hd9f2T57wEG4JJ4zG1ncMqy5w1N",
  "key20": "2Cez4nFmkkbqJYm5x4jgTFMPw1oFR51KmLJkzYFm21uo28SCvipqQnCZ7KfZkQuWkoimbp9jTu67yPeQs5qxZjmA",
  "key21": "4uHENxq5jekKxbKSE4V38L5Gu7BvScLFYbpTPcQZw44SZBpxxNhzNb7g8j4Me5HF5DTWs6hzSZfpH6qMSw6tXkJW",
  "key22": "5XX8P5vCoDyY2C6fdZgrrnzQzK65GNcNDDYdsr3BVrHyfAkqodYG4g6ftdwKChs3DiSpP49CNXwaFxPFUDYVsHsv",
  "key23": "64TQrVcZYnNrqtYCjpXRKmejKXwRkbdi7uTxnDi7Y1a2BX9mf8NnJYULBiZQqdyEqkudH1xkjFwaQ48Gwyjd7vmZ",
  "key24": "4acPCXhQ1G8k36tNhAL4JUsKdpeZZSqz6jcbiDcnYbcwyXPKRV5bcLRjpPvzpp3ja4aRed61VhtgAHPoBBRhcTDc",
  "key25": "3NrHprQmfHcmm9BAR1wMahjicSNQ5HBevSrMaEUzoggTiE4zcU2kHJ3mjmgoUkZ3sy8Vx9UZYR1x1wtdWjFS3Bvc",
  "key26": "CmNUAzqaojX1sC1JGWM2qQ8kmfno3g9Rycc1gvBGidN1WKgXFuvcBA2SYhBuxyEDAmERHpZeU8mukXCVWYkrtKo",
  "key27": "5vEqYs8ep6d6jyyRSap8uLd3eVvNAXgR5CRuWDb5JnVBEDq9CSNW42MBs5ymCSrqhP8v5cqnH23jG4pruxXCBLFQ",
  "key28": "42Q19KFHWHxkcqRwWf5fpGAw4BMrGYoTpMfLAZ7HxM2mjjgRB2jv5qBiLCRSw1jr1iKA7fmiXHCGYvpzAazUe3Zr",
  "key29": "2THtfqre3BgNyRMG9cSkD1oiso8g2TUe2hQPxamAA6KtcG8J8AGVt54MHbaGWEpCJfv2uBkJD4JguUSeUtLzjyVE",
  "key30": "d7pPwGwJdPDHCNZe5FqvtYvTues47sLy2sSgSmLtV5H1c6mcWVLcJrxETGN3XeQrUGnqHRyFakSCgpvUzk2m2oY",
  "key31": "49oFY3QWbBvUDZ23A5sdZCz6JSzsFXSz5H3VS3yDSs1SAMdyL6iv6kJTN3Rfj268coVfgcmgpH1G9rPyMdXaAQcg",
  "key32": "x69w3FUgddb7Egr3Zz2RRteZu32ouwF3MitXVfemriYrj5gAQpjcizErWdHpSt93YNRmHpCq2qqHRpiMtpERomt",
  "key33": "Lhswin1tcdNDb95tghKdfYkB3jxkTBZbSDU1UwBrKuyH4H9vDTbvmJcHJyGETbznqTT3b6XgV8xSFtZsVnCsYG6",
  "key34": "5f1JXjbQtVPALeXNNHdrPh79Dwthi8mkxoACqWc49GhWSHDhg835ryoYkFuLhQiPD84GWTru9B9bsoSb3RTmMtKm",
  "key35": "4Azez5FwRGFXcAbsELikSa9xGB4ceQv4ZKZjxBoPCxaLFrorbP3Mfrh8qqL9ofsveshAdAsqHkYdehPbUkdZ1z8A",
  "key36": "5zpHviDBcruPCL8PzN3ks28W5zVJGw272hCKu4rTF2giXxmagSZuyir3HYZ2YYA2BSxZW55qoAWHeGc5PtRwquD3",
  "key37": "4SBQcTpkqTbAeDNRAp9RQCQb7wSwWvkTUV9DQNfpoAKmAuQch5Q26pw9hXcbYpbcGkmP2URB1WQgEPctSBMnrYcR",
  "key38": "4xuCYgZcyrCaPXYB1Ughmk4Kr52jcvykz6P7XUQtfesMjNrhmf2yFFUDeDVnB41fYwZSryqxGaZnVHrLhAtBi5Wd",
  "key39": "9uzN9gKqSSdnBgp128SREdxh9QNCY32dQbzkMdAG7wypraA3LM3ZFCNgk2dLweXqrk2hLqnixX8vZ7jLu59n6ck",
  "key40": "26Ye9dxeChgfWZeR5mq8eKD5JFDRvAdQMhg2bnJ57h32en6SogwieoDqjp19NZVUYqChGxjbtFZzSimXGpwpy6Pu",
  "key41": "aTF6QhQdufoRqxubNAt1nZHJtRC4qWeBSN79AYYchXhLjz1n4jZYXxEJ52vATbmFRK6i5on51vQguXoRBSuRwnx",
  "key42": "4QQ8GUCZVEPNWeBupRRHyhfiYVMtMugVC54GguYGzPAzhFnnzqsD5dwSroza5Naa5HPgB1F55STHoML8cqRmEf9q"
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
