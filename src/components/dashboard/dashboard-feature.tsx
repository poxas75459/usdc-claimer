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
    "2u31YL8raRs8KnJFNN3q2MFDGKeQWBKGS9KXQa156RwhqvRt4kZsRvmZ47nkPCEBBejdrLAtqrcbKWZXJWT8bViN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JVkbjmUNch6e8ub8sNzL4khT3JpjHjf7q3692pQLzaE413hoV7nNDefQ2CC7e8rxG4wLQZougi3mtnZnXnCMBrV",
  "key1": "4nvGTwfhyZsbPyWqDVSNZd8szpd3NVgjfBZf3c79ZfXMpzsQzHpepfNDsn1MgtYfoVLowm1kB7gEWa5ycGg5A7CS",
  "key2": "2V9pouwnxyR8eFz1ATafPj1qdm5CgkLDRamRVd2i2CVWDoffyoaYzhEPvdi23EHuczUWok2FJhcHoN9MjGYKJfSJ",
  "key3": "2DxMzpgzru8Zspm4u7yw7Lsbr8429spwCRBF7uh2Vd2kz4Pf7rfNrq5VQVAWhhzMjraRAvXdZ6rcMm6tbWKwUF5x",
  "key4": "rEGm6jSCd5eZ6dSdGXY19D6NCjMgoPdiyDy7Kmh5c4cmrnhsKAom29zyVSgfgDxCJSxms2RZaye6v6BzN8CnZZS",
  "key5": "4b3V8iKnKQHFvvmbt5kTm3CM8txfeujaXbn3JcfNQGai3erBABzttLCPVFsVvKyznE2B4aRNog2FXxrp44Q2TQfL",
  "key6": "2HwYAkjFjnhEtTzmd4LMNihEahS6yZ6z6KYz8rn9j8rqkXf63XT57WMhPi4Qx7Pu1LJWievRYfX2fyi6tDVLcdBh",
  "key7": "28Rcd6tj12MzaqWruLrTGjcrsbt7R9mMtXMojZ9PnXaxcQ6q8n5VvssypTaSR3waamf3nUMntRLyjVeQKFvNecJr",
  "key8": "5HPtCZw4aKH6SwNJLae5g95p1eqJjnBruaeb5tzLoNbX6T3ZW2qSriNHFzzstvzG3DWTNXk3zAp1uRsmBkKVNThF",
  "key9": "5qzPFskgEpUCnFRdRJ3XxrfsHcjEmzVwEvAMVBnS6WmTEkLqsPmkQhNvdUJprgbk6qfoCBSdvJc5z5Ao738CDM3x",
  "key10": "649R38WZMaEq99ihudEo5ApGUWcvMrMsDChpzgCJNFx7j5CwFhzDsaCQ2nuhjwSB9WHMpWBVsLeMb2mpxDXHuobm",
  "key11": "5RNZqBhKwM8qFwMxDZe4UPHFAuieZjfFcgsAonpjZZ4voC2RDbtgFRCAqEgA4VqGExbUdj9J1Se9pyJ6dMS5Yn4Q",
  "key12": "2qVoYVxNw9iWSnc7a88poE6ZoRWP5Nr5gZMwot9WKiKVe6oUgpPCLjUix4qrQnFUjAY9b4N2Bkukz1SjHJJQ2BER",
  "key13": "3s5HNEYCtUy4iEHJC9tC9WpY7cvGW7z3H8ni1CWBQbibFAbH6reVYTZvct4JTBeCvuWSYWzvtLHjAAntCXf94f8x",
  "key14": "2sGZ9wmp1qz4QwgaUeFgucYKDibzwsgAF2595oNsoKiDaHsdT4U2pBjc32PPzLog2BBB1YkKqtRMNNXJeAc9G1kj",
  "key15": "KA91kgaSrTY18cBUj56ovgmvSvYm3WB3MPfbvwG4AN3DcPxdcuf3kFm9N83tVv2NHz9YUpSH8uq4EaZcyBFQqBz",
  "key16": "4Tifx3Ah2PcFKEzpxAPSQtDSycJcrnSNAjtezb4gzRXYUNdrQ2ybCnNnzyjDKRVkWDhrt7GPSeqjvSfei8BY5tog",
  "key17": "5gpEwKqMRiddppV7qm3n6fUzmkdBt97C7Zis1svpBpVhCVdPDA7nxr77aya7FBVk67HXYocz76FJHbFeFpNTsbF5",
  "key18": "5Mg9DVXqh3tAeyRKHquid9Tuc2FBye4dLg4eEMTBtw5vEhbKC4mubuxY31SxhANZHFhSLoGN4CV1MLZgkrcgDPuB",
  "key19": "2VMAUHoctVn7ohGQNipxy6NBMoSJ6V72dw4XvgFtnPmJhvyC4hy5V1JrWe5cZxkUhKa5YMJWgavPnv8WHrNNnJUE",
  "key20": "3RvWGL6vQkuE7XcncWfUiaGRsL9yq7mK8soYYiFkGSV8qBW8E2LvfjoCauAj5hJDkv95xQnSUAqyFFfjQUtKn2xu",
  "key21": "KystT4bQdSiDhrjmXp6gkgtHKVLPV2AaGch6jcacYiRyvuNhC5tCvq6Nutpy7x7WkSAgsLfeuFvx1mPLpAnXmev",
  "key22": "3DmH6nDv75UWciTNuYnYZCHHQSb4aB3CnL9DYx1AD4HCDQgajBppJ67sxhJaWbxxr6ZTYmAYMLk6wSTtAgdfTmvd",
  "key23": "5thn3a4AMwLANr2d6h4Az6Ga3SY2ojxFr6Pz1BhrmvomQ7qKspvU9p338srbzVNEQyGMP8btByDJiT8AKJy5xxob",
  "key24": "5RCxBnrJ8Ze93MAmtQjzyEwfMnehw72YAwEeZhfZdogVPUcfoZ1JsU6zN4bSHZ1wHfxTAKygJphyHvvRKotfzLLG",
  "key25": "EpCC4d2EkK1eLWpG1zqUoLjk1zQmDLdpPEC9qyftwwJzZGtuLoRyUG3waPtuPqJDvPKZ4C4K8LSoNYUnw8TAp2o",
  "key26": "4d1CyTNtYfMJ4WGsHX6zFxvffPtoUZZD1hRM4x1dLxBtd9knho7jGF5YNuAbhJjQXk2a8CcuFJ6HvXnz2xMwk8A1",
  "key27": "jAw6xvSzcGygdbrqdmQNgdiwvGPimWLCmSxBAsF8QMdv4TwTwaX84SAmzUW1cPfibovMk9WqorJPCc9Dxw9Gh2c",
  "key28": "55mNQkFVk1RgHiCYjH9RDh3ZjZCqAPut1AuJyeLSw8HcmK562eUX1mAhaW4MVx9vHWB2ExWKduBRpWyNuc6w2xCv",
  "key29": "JeaJEpik8hFRQ6TD5YHdBV8NmBAMiHWVxmBEff6NNtx1aSY1cpibYjLM3hTXFePFy6cjmkR8JE6f6rRqy3bqgeW",
  "key30": "94utdHsamvxTUkZysFkk6ccLH3WCAmdmjuK36BUdFZJRcs6XB6qnbpJ4R42GDazhVB9xxZ6PrRTbMH7qgvPcwsG",
  "key31": "4K2pXCPGhDEnTrVzzqFKBwQ9ebSkBJGgBmBV5AwTTE5sSL211YpruXidbvUKw3kgmb2cYFGv7JDyB34hceNsnF5f",
  "key32": "3z3hcXrhEtu8WxMmc5diUbfkNKEgSc71hxLXw6pUd4f65vgRFq65ZMjq7dRQAn9BMrnRteRYF7o5dLDxsLKCntNm",
  "key33": "kcYtRcAz2QtY8oUDrm4LF15hTu199X2a79eFqPgZXZArxmEDAZCDmx9gHTgfLgSUihZ6y6SJHG3jWAd8Wh6uwV3",
  "key34": "f2rXrTUETeA2o3Tged7MSxNiuWPczqbjVGBavHqqpkJiir2M61tmMEQmDUJKfPF5gKj1Hq4WS1v6MYVMpT5gUUD",
  "key35": "4idHNRTfDxES3uno1Q1TwtMduA78JT3kNWsfE8ReDFrzvToGPX1CmeqKXqzAV1vC4u8L1VxYD72YN2xSXjuRKruK",
  "key36": "5ppWvNiewkPpFM8eub1zRx3sYjkrnz5X3QvvgUyi6LBmiCqaqVpEWQ6A2oJTTVnrBoa6532LR91qVGmL3wfR8bsf",
  "key37": "5HYZ6RmbVRGVXp5MtduSEoTuAHCtFACeft8Z6VZyftQYYGZGztMTFkKKpiTsZBcd5GHjpmPr1ubY5PMhcvbKb4jy",
  "key38": "2jNcJmnEcFvC5mHViyuK7LNtCLnrgGBkz7CxHyju8Y6fzVeewDyX2qj248feEBHDgxEaa88ZW1dTnsooejJ2jMDL",
  "key39": "5TzBMETcmznDCg8h6mtdAkVPUboQFaURTa1xiHAQPGiRgsrcCa18XiMmPgwL1EN5DzLtSeRhmYispVUderpWdWt1",
  "key40": "3t28oiTJsSybujqwZaBY2fNWx33xGuotra6J9E89RkxkB6wJuzbRNsAZcSCLFuhv6vf9VXLiDFm6K1QDSeW9KEru",
  "key41": "bzTKMU7sJSFXKF8uKt5p1yp7CFPizP49pbm1Y1MLe2NzumHbmeKPTuiZvTy4qNWyD2VUSNfVCEuqDResSg9VLec",
  "key42": "2mMdWP3roj5cUJrdAmzRMMwz28EDsGeMYNJiB9YcHNrpYmkXxQNAUygG8G4txzsfAPc55UC68dcBmZATLf1K7A5v",
  "key43": "3J2jKPdVV6pXRtC53touNWMo93mUePijYxjRnx8nA9xBbvRebE9UnwwHrCW4vRwFzYF11HhcEzHWBfocfNdskVpT",
  "key44": "3WRpZ9e18ej7kBhViTr3SPBtMd5McAzMqWT8iCtiGum2uWKdCDVDHxxKNgKQNFxJFyzYLPUQDDkqwz1TZn8tsZzo",
  "key45": "38NrFgEQRge4VEofV4VqoLTXpZ5iz2AvNmSpCctJ5DaMgEifdghHsMDgG4yJ6pCZE7vLiRajT2vMvJP1zoe3xG52",
  "key46": "5HAfHWCsS91rLXhCZHCawhpCAJSBHzSDdS7KidAcXD68c6bJ12ngAtmAULJgFZQ2673wBW5U9pGULCyN52rrFnhi"
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
