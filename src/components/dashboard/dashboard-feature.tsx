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
    "YmRngD4MuA3D6c6hR5Gk39mi5nQZiDfbiEWSwdXd1aqDND2W1cnndCZXpT5DCoKSFqRxQeFTD3VfJwJwKxSQMsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wyt4mVcnWSVVCewjEZmR4pqcX1APQwtmzfqN6EsiEgn1KEnYsRHexKNgAjMCGB4MZRLM14trx4VcE5Sw5ime8t2",
  "key1": "PdDFQFBEsuJRbEnixbDrH1LcfYxhKHbFF9JNY4pRi8juwnPeYKu2LvHSyHYoeTn1DXxQeTn9QVLK1BHEFX6Z2qU",
  "key2": "5JeHbsTzbcyPFqsEiFCMXavw7msNXozwpGMvDN9rF9NNLPwYJw8WGCEccaoF7rZrf7Uz2LhVAG8WZmQY75bBfdMq",
  "key3": "2d7b5H7PsEnKD7hrHEmENkDSohwQTstujFgjq1WXm9LD47YTDJRZWya4vBb8ubkbSrorRsk5hfncTFYGwuLeZpSS",
  "key4": "45NtNb7QDxeJsWK8kD3U6WcryhPPgiJ5CEBfrkFUXdtX1nzjbnhT4ab1FteYxE4XfjNwnf81xwYcRon25ZXZgpg5",
  "key5": "4yKtt4XTeU47ah8jv6XcTpLTsWD1VdpK3CQ3EdqzK3tCuW94vWtcPyeb31QPtakqndZvGSE32pD5CMUc6ms56ErU",
  "key6": "ZiW3Gt1S8pcR5oGUAPcyvqXpkDrVjFWkxf3M5Tp6XsiK8rqim1uSWkwscEsRXpYfyRG3dxYENrJ4LtwX7PCsQs4",
  "key7": "5RNjTCwLedYRjZrC97sRF4otX3NWYDPPXzXjGdevpvNHZT87NTftRSVuy4r5HMc2ZdXTuKpofvUsuafYjrFdvCjc",
  "key8": "3hwKc2gNVjgpNyLkT7BbgDxmT36mT6YtQEzMjwMrQQmSZMMGfrqmpmCWD19nh98hLnAJ1679HTCpB3mgihvUdeyV",
  "key9": "5vuhjKT5BAptUp7bd9h67JkggRTxd4FScPTDHhmR7RaFo3cKHxuC2up69ZwVggGVe3aPwFEdRpxMiYHui39aehGz",
  "key10": "4EFhxxNgwemvijKm5bxn47N81CRa3dkFRNreM7zAmycbHjauYQmMsYptx8Kek5nyCXCQ8ckB2DrudbRVWVRCN67z",
  "key11": "5QRwNQsM2reYLTPGocjwe1cKxRdLTE2jEmaeSSeKGRWuGjvwamcRAD19GaH7s8AZgjmf2nyuYBECFvoE2dVr7eRZ",
  "key12": "41XAqznNcHMw7VF158mNi47dzi7gurfpcb6a9tWFCkiyxapBp44hLJ4TNvdTKDLnuiUisGAxXmAEfjQmzhnEZWiZ",
  "key13": "419jd6sSxgbTULDsjpSmL7tmMU6J7bqikTvJE8Y8xm3QbXvmqgkPVVCWjKQreo693Sv2uxzbkBUoC3YHNgcUevEn",
  "key14": "2vGmc5D4n2Xpf1iEdKLTXDnXM7bnnbzeqWJ1qJxwYe591behdxcYAvpqz8Ntti7584nR1vRKdyJitM8vZt15hSHf",
  "key15": "5ShMfyqQFrAV6b5e3QAbgbPxKr4mKGtsFjQFgAyQpxwzeT5fKdo3UPZzL2rKpWeij3WJyQ1zWEsMXnNSgXLH8szt",
  "key16": "4s2mBf47AQv5i28Ny5oCjNMcyJqdUn7HnQdh5mEyAKUKpMJq96y8jQ3JhiYGgJD95y3CVjWFX7vXYjoQUZkWy6d6",
  "key17": "UipfFTprgpBq1Jkt3hjyT1hrbLV5Y8zpiVPL3YFAkc6QM17APgHKiiZpbK2sMfs2h8U5y83HPVBrqbnDk2ukaca",
  "key18": "W6PqHuqTWVARCwaCAyDNj5SHPTiQwyMtpPsGUmENfAC7yaDQBPuQ16s3m91qjAy2pY7KmHXrHD3rhWYnDUoHKaf",
  "key19": "5mTkSafizyepZUCZH64ADrt8At8tEDwt13J1gnipihNZ7xQG2c7WVMk4T8DTBE7UWvJody5W42GrTAZG8AosyAxD",
  "key20": "2Lk3Ak87dj5wbrb8riHcXY5tyN82LMrY4DAmrgiheKNW9YFujrv4c7LPpyetw6tgPTGEyfG5Ly8VM3zL6BPsPqnb",
  "key21": "3GTrmfhB6g5tJkJwheP86KFzcFgQSj9LiPLHeZtyBTyxQNuseC6SYFgmLhNh28V1j5rNsNbuTEUFS9NmWVryxPu4",
  "key22": "2tmm6twVBTpHpSS6SiFLPUBbs8JgaW5CSmGznbjyWwSP2naJ9os7ryEadok87WMnKHCMHdmedPhoh1Kb6gy94uET",
  "key23": "BxBB4AegkxtKDDTnyY5Jxye5VkAtqcofTN1UUVE3N2DVXr6y4GpZ5sdJTJqiSTdeoSz3NL3pevvLSWCfcunZT2U",
  "key24": "46eRisD1Ja5rbfwJGSuJVBDk9bRy3xGjBc6DS4TwQdwdBMFUTWzHSExDj4brg1JvK8renBjTqEcuWwAwz1GLwx4g",
  "key25": "3rFbrwDCpzREK7rKaG2PdZRgYASm3at7qsiqtv8LsDZ7U1Gx9dLDbsKEovGuJ2saEancxLQbuTyn2KnSYXcMK4n2",
  "key26": "5Qs9xMUy9ejeYhbVcsuQT27wh9SkGh1Dy2gUPMD2m6BicPsRz4tUVXgGEYnohq3JFQ7cA4W2VwxdcjVCDRR7QMKP",
  "key27": "GkTFyPBJf6FnEfUCXSZGodthWiqXBtXPGb9yqZ1zx7e8L6bFhg6pYBqugSkwbizTJLL9ZVcHPhwdRALRh3zRyQ1"
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
