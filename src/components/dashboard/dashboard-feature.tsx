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
    "3GwPc6q7BV8vs9PWhiU2EJRKbGqr5YGf8sSyPQokf1atSgejTSuJpw7VL2bQvsxV9PjpnEQ3ED4d5GLzcneUPG52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iXnfMwsGQP8aJjeRgkAnzPMWb5j4k3Yrvegw56dy8Whddz1YiLcEA9HTFNojRKGj3W6BNv5deEE4vo979us8UAi",
  "key1": "P7aSfKqPFpNvqFkMuBcG9Rjpb91vn2XLGah7SNMgcEyh7HYMSVtHN5cPri66gWg85NuDVh9N5irUPcG42NyvJuo",
  "key2": "2fiHfZd5V65nUGHFN6jWx9BQs3ceTWnPSowLcBFWyjQRyCJ5879gqDRUPvtkALn7uEig5DaigzEJDLjNPX1hMoUm",
  "key3": "5D7QaBszYPrmDFcT1KfmjyLqQKBn57qcDHCDmTWdFdS9Tf6mAKx8aSm1KGixgXfiHtVsvRuACq34z1vy5BJvLndV",
  "key4": "3bukcGMyH33cMxWToW8YDjsrbLXWG69Zfyo8W8QWtVeMWTwkekuriiPjHBfDiLnJLY6CouaRpdt4yNRMc1ffyy7L",
  "key5": "2iKhb1TjxaPJCkY3qcKFebCsfD9BURXxm5cdM6cTTpXWxsBRLafLiSHmATXsZpGzqqpE36eXEcR6haAcXxEn8CXU",
  "key6": "ADU8F1hWk3ZmfpKSbMJxbhpA9LALy58ehNPhY3f1vm6EkjoMbJqtdQ4UDDheLj8Athv4XUyJZ4jNoEfJRJQ11Jm",
  "key7": "4mLZbTEp4zeCP1o5WAqFRm7vvArxaSkpDcCuTWtkSh8kC2w8xvNzLKrPQYJ5UvxfBaLK8MtVHWEynKNaUwidnvr8",
  "key8": "4daHVs2fKh4MSciGFdaUAXMpeEqBhdLmjRN5fBSHbaWUvbcSCgfjEK6gZDDXnMw34dCzj5hjaLut8hnh8CZfTvpt",
  "key9": "5ukLTzDPSyZfGTC8xF8zPWpdqfkfW1oHSZdB79DsAmLBknsYFvQgh5cdZ4iZawDKpaccfgSeBBnrap8QCv6ELi7x",
  "key10": "5ueNnr7ftugfEkp3jcQNGBNCc98EC5Kr61dn3S6jeDqDskxDmWjcBV96J38eYLddkYtAnhHAundo51Ezzc1KnTrq",
  "key11": "3y6ioJR2n1VYiMEQbVna2XSiLHwibtbAajthoQHbW6dbXc2H86iYsq4cbnujiCu1bLcJfsWPriQsgJfmJg11K1Fe",
  "key12": "5qj6EDgGQXVp6ZXWSNHUX7hV8xU4rc4SUF7rsAHPkcEDZ1dv81v8hjmJ5oMLVqt8d9mPNoHTU75k45kJgqY66wNB",
  "key13": "3VZoAFB8rZdtwhc9Hb9WSCkNaCMUDyN59fSd2cgxdGuTDrfTnVDRb2HgF1yQDwhaJztrRFa67yvcXHKVC32tCkvb",
  "key14": "3cyCFWBjybtyQHHY6Q8xzbZZevL7CeiBbZNCofbCkto1GYUe4NvVkBkDswzAARTZQyK8q5rRfr75pNVbCd5Vs4ud",
  "key15": "2LVjFJsbLCYRDYfYSsrh6GSb2ArktztPhnGjtcXK3PmQrux1FK1hm9pyQ9yrdNquqdhX7mYVTUqqgWdFB1jErEZw",
  "key16": "4TMnk218Uo8bhkGP1AHEuUwAzzs4KGcKSt21A16aneU5iHg6FiGwZQXP3c1yniX1JAwaTjb1Aszp86HPyrMeKqHm",
  "key17": "CxGLwQLUcFQucbHEisJAQGab5f6MEcUjZYmoGXV9JXHvY68Zzr5CypNFy2D2EHAgVe1Zvvbc24DFHXamA2mGdBs",
  "key18": "4MXDct9TPPvM3i58kESJJJKqDLJjqCk7ePHZwxkLMrT9RwntVQn1VF33zhx5KR5GWwX6VGKqgS8hp37QU5H5QwxW",
  "key19": "4xiTEjJLvQNJdBWsXQR6FKHCwAtMiuHgyyKnfqabN7tjULpXXbmMFAsi2NCL1eDhMNFjZ3FbVH7Vzowe9UXy7HT6",
  "key20": "3fk98hjrQiUqjZ7qEearwh781yH1MysmQ67x4KBM9v1eNcrAWXK43T6o2aGbpkkQcpHCZVU5LkykpWpmVRXcxsPr",
  "key21": "4ysaGuBVe5By5LMZ8Xq7kBYemonPtsSuwnB5iQEsF9qGKKrFdGjBThjU9hQ8hPG56MTqNN8RrkULu3NKvqD1e7GG",
  "key22": "nax7A4mDJSF8gmSSW3eaBQ4Q55MpiBxCLbYmqxwx2whdBde8TYgEnWtNZnc2S7JS4xzCX87Q7tbSpZFnHgwSYnn",
  "key23": "5u55uMvyjgTG8GHeKEzBA6XrQXaECSMKqNEVR1NqBN2fZnqvferRiDqJyoWAbAruGdBHCvNBjKmuZHtWQ5ScvB8h",
  "key24": "51LbZxAnocQxDKETj9aPfuHTo11DW7rK96TGNNbkyAG9mAwhNAJeiXZTRp47Y3tGke3d1riHJ392iHa1mcyArE8e",
  "key25": "5rHL6CS3fjwDCAwGcxJW2eAf5ATkLVPuGuK18qveXf81QT1KAXg2UYpN8gGcsnfw76HMLmWen2LAXLHwczhduzHi",
  "key26": "477rpRWE96AHoyfBiKu3kQfaWHXwrRuZgnyPiYwLRfNe5NBbZwkbkyPjesGKYEJyzgkHEYcsd1ZYp2Uuz93sArcj",
  "key27": "3PygqiGZcDdB5W1MVjQiJ6N7N6zQtd2ojRr53X7dguUZVVqFEAH6VFoCgG2ZDgfPSeknwN2s2M5niRmzec7P7oa4"
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
