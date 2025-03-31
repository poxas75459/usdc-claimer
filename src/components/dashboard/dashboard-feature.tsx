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
    "2c3o1paekMjfhWMDrPDFRji38DDPGMvbih3Yu5DkAwy8GZQish7EkWoMhuQNKhWgenR3zFs61jMXB7FipEjcgHiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25t7CVsDp5vX12F1j49MepqDgzooEk946b9ddHodJceQSFdod5z1hvqnJtxkNz4AH789Rfd4EzbDRh4dS5hauj3d",
  "key1": "2S6yFFpUNaeMqBzLdXpuGCL9JZ1bfW2DxKjbco85qCPM9UfzGA7tcf3A836HVtV9hxyjKuLf7qshVsRFgUMspbTP",
  "key2": "2qMWK9pTfvKs8mXBdv2q5tjZAfgy2f7y19eX4U5kFQBRTLq3hLgAaYbxuoxwxprp9FMmNckYyraRp8pGk5XzNUpi",
  "key3": "4RLeBN38mqzcB6wEHCChcU7kHpUEGieeYkfHUuWuTreBoYdgCmkZyTHWAG1o5mYv1NtsCwek5pGH4GEk5TjDwKRa",
  "key4": "ko3tH6Q4BmAtVgRB9yKLk3ETQoCj4F4RvVLLDP84Yt3FXLxJ1T1vXSVmxuPTN76XVZjm6655URgpYtZvT3uFXGF",
  "key5": "2ZVUqUTzcD7VaBVAVZkvgBQQZYcBfMQqDxQtSGow8Nj6w4D8e3Gj5Q7SZTgPkWY4WNHtQCC5ibgy2HMAfJEQW41t",
  "key6": "3eYmWQiQZ8tWGVkpm2dYrF1rHYtjiKX6gZJLAcbGXFMNPFTKwR9k1Nton1Phhmi8gEdgjijwg95SZksUxG7Z6ZEJ",
  "key7": "4AG63akjujaV2uj75FtHkdrEp3YovMh7qc54jiA322qDNrwJJAfN1YUBkMD8ep3dU11WKHHWdYCLBAdmDVVu5ef8",
  "key8": "4M1A1Eu1J4GqunaeniGX1wTA1FjzJpyCGD4f5Wdu9LzoQNVjYiceRBcUWxea5c7A3jWCiSsKaR7pRgY8Wkx1gHdC",
  "key9": "4aggFdRS3RrW7kdtEAHhnEZ1J1KNsYrNGAZuorEThPi73hCNVG7FhNJxuBUs8KdtYJWk2gZtNcBoFRojazkLoiqb",
  "key10": "5dWnZyRZUVPapLN9QS7ySRisQigavKgBQWXPpfbkcK7Uex2Kfhjr2wu58r9sEfejqR6J1xgKG2hKJpZwim3xQy1P",
  "key11": "4aRWXRRcnPmhqDWWj86hbBBGSsP3GJxMBB8qqrYZdzd9pwhYxRnuPFFiBHQoc9x2naa11aFxfcuQXU9ccPvEEHA4",
  "key12": "5aduSEJrDXetfvhsaZGR67tFq6YQdiuJBLwrnadEkuLwx37VYEePb7DMtJf25heWHYKHr62BEi7wVxsnQ2QHbxSK",
  "key13": "MW8E7SQ5TugQSJwTRiTjdqhRdBrkbM9sapxSPpseDG2DyfUphx7zuSUrwvXhMMyeQEippmX3U8bbJNSCzgryJvi",
  "key14": "62MWQer71QZSEyyWmGu73e7vAgESnmmAcyPxm7KyvK2wDotfecmS2fGB7TAUNqfzTveQz7mDUyLR4G2MaDX8fH8B",
  "key15": "uW9FLWtr2XpxTfMo9yHYJrfZYJYP91Fk9X4KADVxtaYEtgiRZ12BK4hEZ9G23NziovCUzzctkCeAuZ5SR6i6iJR",
  "key16": "29YniqsgVnJzLTR2i2RfochrJSWm5QvRi61cE8eGZdJckJdUA4MM1tz9aZgyYVWw8T1AucBakfEC8hMSd2HcEJQN",
  "key17": "5DYCjUDVAZMwPfNZcr8gAyuoZDdyhoH36XNvdGj77Q6GrHdJp1BTJeNyyyitnTyj4uzbMgsxApR4WyRcoL3fohNw",
  "key18": "3fDFbDeK535bDVHbWrH6NmvdKXNwzY2V9dwv4KXvDuEQZut4L9mcGxH3Efnp4MtS23BLYcdyTBpy61zoRnifPRe5",
  "key19": "67k2f11p6LA2Z7tXU7rDxt4A88r3rpUyEcVeXHQq6rBrAUeKpPY2pheYhJN8KDt9QajDVoHDgvKdPb7gu9tWUDXs",
  "key20": "67H55zj9qw2FoNsT5RhTG2MzF3mEREJCDa7cozq13azBhuq24F55PbkgHxmuGaZoCtLzVC22F4h3BFdX2UVKJeGu",
  "key21": "346Tx8JtmprYjeJS225QXVBieaEWxJpTwfZNPnG8dAnbntRfbSE1S7XQ6DvyHw1BxL68Yby1PMvfKzenKXorigAg",
  "key22": "52rtydqHJComuDtWbuETLsMs3Art1CK6Y5FEA6XiNrwx6W3shuuCWEAgWGbbYgTLSygD8R6dxm4vYiCeBzgZsuLT",
  "key23": "3bBBBk1ETbCfsSN3ikqRATKF5BB4jiMUnnXPV8u9z3LAXeqboAWyseJ46AQngjkJAEZA67sBNzdNeBpr3DpHDw6L",
  "key24": "4SYBSdC8guu59pzQEAtqBs6Xqy5NMacZELTAVQBS7254mCeLP1voBbUSoGcGdXNa9Bg9QhrgBSDkXwwL8jJJmZsZ",
  "key25": "4WBiHLkHdkBcN4pdKLJt2HZbFwM5En7zUjdQWTdm39SzVtvSFbkqmPtCmQL6we97VjP111z436HwW14QQwM9E4yY",
  "key26": "EBvPL2LLd4KbZ5YZ52MswrRwuUkaTtedq3Rdd4izBQ7mBobeo78g615W8TZtWiMjRjNMcs3SnaL1J9obPQkgVUk",
  "key27": "5mZdkDiGQPHLHdEgaSUBDL4DfGHWkiuubBGrn8GyJZsBFo41oRxDsaUJTiTxiEnPNoTHRiBgMz571cVZe3PueD6d",
  "key28": "2WZYDQVfrKLPvS4PNXBqppqrRReLeUf6fhWafF2yjLCHESCJ81TioU4QsYCUU65FGRpjYVK2jYEyZiijznXiYE1X",
  "key29": "35R8K1ZpBwAAitmhzMHKmajDz2isDAi6mATeRjMaZtnY4KFhAuBvHpvkVWrZM1EPx6yvWLZ7gjRu97QAhCwvFvef",
  "key30": "3BaeZfvBtGF1LwVP9huuchUumWddnWXk7gn8NaQjHaeehWXRcqFKsLrx93awr4pnfgjVUx4Wm3aKGS1HityXPnRN",
  "key31": "6zPNDWXKCHvrH3hqX5fN8hy2Et8dvZBfEPeS6Y4E5kdnQTG8jTdwCvjJVmy7BZzV8tD4nUs5fKfwL35AzQUVpPn",
  "key32": "5TQVsHGy1mvxmnhMFY8ew3ifruV4bS9EJk8CdBn2Nse1gS8RZn2Kco9Fz9KdPQcxTZCGEpGPFBvcqsMfaNeMbXXb",
  "key33": "5wKbKFJyJcNd6Qap8kfSpE5rzkDCuHjzxfS7NtYS3M8A5nn7Q4g2h6MyTiNFcaz3H4BPo7gG6zAa9TDBdJoyrfvq",
  "key34": "9aU5pgPH4LGPBHo4SZawwirHw4ZdgKiqERjqD9LyfvT4fVrgtjvs7oT6wAQdGfYTJRFVMCdifzLRzTwjYeXSUmb",
  "key35": "5S5WyH6SFCfAcQzK2VttYmxLuzBKJYR2wVzBWvF4WJkNcBxtzCrkqZEFYtwBYfZNz53sY8Z3gcpdtP9cWBDN1B4y",
  "key36": "mxLRBDcrA9f1vwsphRmjZvckKMdyYP3rmunFPw4fA4Mc79oM9foKBhzbiJjebgSN4DU8RAgVzw3JSiLMVXnkuBt",
  "key37": "25avSsxG4EsqJRChVwuai9YJajWBKp4JsXewz5zvVR3TWcvZoTKHG48aysPdeqhTSH1Yz4dTLRBoBpVbV4bdXHcw",
  "key38": "5hEp4FLTWUEN8p19ybtiixkubB1uqCg5xSbS38yHUJGE9JJdk8DYTNhQhSnNB4KYoQUTrmmVMcpFuPb8PCwsawet",
  "key39": "24GtQfetRP62U9XPxb6BHbcWLnKwUfchYtT4sdBibio7MwkXpHTZb4v6JvqJz9EdgnaSHS4QzwkUdJrNfkHM9p8L",
  "key40": "3Hmp2aHPD71TtRkjnkCYscjucSGFJgzCYFyG3oqikvnmBsYyXnL7CcDpmhdWKjXMWt39LrbeK7S4d3JaqNUSEi9F",
  "key41": "j4HprMx6i3gnCmK6Hc8HvxDzGMHC3w5QMfHqhXJDvCoAjwHjLQqG3TZSULgGyJUMdA61vQYbfTNVJ7rv2JPNbXe",
  "key42": "5tqKk2kaU7Q5qcfSenUG3cbEBzsHST6y9ei8eSjUdaKaAZiduLkWD39sdzMc6LtS1gq8Zs9es5BEQ5rL7Qn11hPK",
  "key43": "3eLyxbRThd6U4KYKG2VMmejPBnwG2SGWGhGgjjBcW288XhDCkbkMxEUUdTFboJjXNuZUgJ6REeGsj1bRVupui1Cq",
  "key44": "5TtwP64BzCBDaBbmC7XAtaHMURhkpcFxhJJbJQNksus6CzWuH6hAbAfHEN7EZT6hyxqiScEYQp2KzxtTZY922QUF"
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
