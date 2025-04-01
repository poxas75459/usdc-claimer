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
    "3bs8tztoFJv6kqUS41paGayu8miisBg4w9sEoAyjH8ykYEiJxpex1YEgHZ5WcLMJZPFDrto7nndhappmAjSUvG1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66smY3coFKN8hXPrQrKMLm1i2sTVGKzSDxhPYz8rLXhb6atTpnM6MycbV8MPzyiMRbCm856m4YbLwi9vHMKgpnZ5",
  "key1": "HJpsaSE9m4EHSBJyXZwdgxrSSMunWNm659ecEM3RLMmjm23HKkFMDf3gsfvxHApvHZqUQMzpJrErM8kZCbHpzsG",
  "key2": "2QDVbw9vX4FXzuhytptKwGVV3EKqARCaLEqU9x2fxpcTxfWcEsC6mjHguneVKckU1DiMAtGeSGrUagAQSQ3WtoTL",
  "key3": "5xvpvLzQq4ruZK3mxWJPW9TF6QRTi52CQqLvtmS8bYtkzXjgRx3fwrhF7kYfyjuvG1rmYjVpNn1AhtwBoCN374cc",
  "key4": "d8sGWXD5jENGwYzVagHhmUnYbPDPkDKrMUKBg3ibS1oTpgHYTteYYnfc9VU4uz9XTgmkE2HGxFy3aoSbtEBD1xC",
  "key5": "2ZBRUrqYVQo3TpENonVCS2NZLH5GAD1xpD4i1gQzpRjPR5AvGV1LM6DwRHNUxLFCWGChBxuNh57A1vMMxf4X9qDE",
  "key6": "5JYNaKn9tCFTyTQRYgnnKYm1buE6Db1d2oYbeKZfhmNghYRpr8ruLrzzu7bXwNwNjk5fPbCiRSN2DThbAMAMmHxw",
  "key7": "4J2f9VMamdbM7nqv3DcCYJC9pyBzt7xfvmY8kQtwxSosTWWADkrbZqhCYDjvwUWbyKzbWKwCrgGE4uSimdaB9FWx",
  "key8": "3VKy747EvASK4wMYUWo32dqXRctqb3RzrWhskR5T89f5Zx2dx9kuGJYUnHbC56WM3LcifGnqKnvjZv7Rxk5VTDUE",
  "key9": "j4WaN66mCsBDuKr3d7zobeEFnsKE9PE3813zQBTvjUDSTt8LqeD2ZDVJ6z7489qubacfsDSQPJxLdpU1gZXZqQf",
  "key10": "2mvc4DUp9ZVet2tuVvrLwhW8yqTA2LCeRQNXqFyEwvKrWugfUH8wFSnM1G1bqEMWEPkn9PfCh7hb7BJmzVLPfS4P",
  "key11": "tiWevybJgPzgfiTtdUwXGLdtAFe3pGSKjJTANm1pFYXGdE92HXuUGYgSFjWeiCaV9VRbrjqE7uNxiGBsGMKGsid",
  "key12": "5CtKx2iUWBzZ4stMZXMuKmpn8jnoyMbFvoTPhP4xYkqis2bfgRtxes6tDppsVf9W9kYRVBkaQUnB6KCKq479e15r",
  "key13": "46SBGqCs1qsoh57W2AC9BnjqXUtSvMucSKs1UURgPenc79NMdWDk3PzsKSQVsbpQ5sLimzWNzCvZT5jFNojZjr7t",
  "key14": "3MUiGLJ4tFRzttM7UzVGtwx26fTNC1RuzdYfHBA4hkNbe3vWetCwMGoNNWvQ7DE9JRBYXJvakMbxuonjnsbjm8Xk",
  "key15": "4yYbyei3pFdNrRqbzqVRhXvATotjmBESunNbpcxPN1Z31wBB5UdNFGfSGJHzbQwkSnxjTtNC6ufbrP5hrGxDGesn",
  "key16": "5x9b3JoohZ9VovsiHT3DYD9trMSvZJHFHgrjL4rcvKPpNBhd2zNiiztW5sH2bqMDx2Q4TaBYshPJEX9tVJJ3KuuQ",
  "key17": "962ZgAmoo4FfsJuzAstsdXZ1oukefS3MvVR2NJW16vq4f6RJsQYr2VCQkSLMG6YYKFuZ6iqoWbKsHtid6kctdBN",
  "key18": "2CrtUvAjA7eMkbFKqE5YgRXZhGB8Nq6xTVaEBFnsqMnMRF2wbM145Z3TpyCQgV1ARxyoj1MFxrvT5qcGLzNQbz15",
  "key19": "3ELbywe5vxN9LxLnnz7dNDgyxkZQTcAuh9v53Xo7qr6jAvNUE3GaG77Txa44oVdihH2cZefVQ5qTaiGGfKneQEjR",
  "key20": "4BJBdHPCDsBVFYuwVJpzD3XJCr9sDK78DxiTFGmzEoRFKLwPAZcNYeDaYMk8uTHZqGqLyLNuUo7go6PSZVKWAMt8",
  "key21": "5J1v6vGpca5a9dngH6QvGJRu7rFgMyyFcagjhWkp16vKG26M7hFuZy7K29HGY8ZVCp5LKwbr6gNgKg7gDWUxyejo",
  "key22": "5VZG6pX2PL2Eqo4TLVxqrzheDwddsuGhVZvuU2f3LGB6mwaNb63jBkZ8KMHHX8Q45LUHwXeoqdYEDysZJggTRKVb",
  "key23": "56d9afwAoYirUmp9ZNAXX4dHp4J2CzrqapbfyDYieYe7DCZnSyrAwdpqCR2sRiNtSCs8ohiYCG9sjbPVtyponcHJ",
  "key24": "22huXgbsS5EbBEvekgZtur1pMvats9fZfzMfxzYz5Bgyqf3jxbWWfUJozJYmE4fWRFE69DfxXTkMS2ru2k1YUTj8",
  "key25": "3ei4wCebsJfztJW8EZy9ovKpwmR5KEHVyRQ4sKZYmCswyZRJxmBCUarresHP1wQXbfxMRbXWSDyR1x21jAk2NW1U",
  "key26": "ziNTtUNAs4bmr9MdF6nXZCwwYRKvRpP8K7wHtvDx8W5oCFmYVkAr5Mzz3wSASfSgkL8uEYDw1sQH3Tqx6PKLJ67",
  "key27": "5jKoNsabJsTT6zhJJwKxhHwaDocA1u7QZYwydn8oQ7Np19ZDUoENBDJ85BKKg7rpHmexGA8RqcHJjj1jdd7gExbs",
  "key28": "372uJWbGK9qs7M7ronxnr9An5ehoKaJend5vNsvESGLRMiE64sdjgCVKxg8NEcRWf1wmCtZbvyLBBRKGTPF8qiFY",
  "key29": "4qEd3ScPEncB4ky2vwyx2B3Ye4js1ifXDffh7WE1zcMPBte1uJ88Gqu4obJMRLkK9BRVLfWr9GrMfTag8JE3CC1H",
  "key30": "4jGvc26cLuWpzw1HaxQuUfB6W4t7SbHgYKLbrnxpMjmMefHWMraR2mDe7wqZQnva9a9mfWbYMzfviuaPLvA5LysD",
  "key31": "2gJiLEZnt68ygjvqSW1GC4RHbXQkrkLkRbbJwM9ffC9af9f8R8f2h754VEfUkGAhz1vdcKYF6yUwMsNbWnKqtfjL",
  "key32": "26wGPMSLPJiYaJ7mxMtLMAsQBsWjKyr4HTC95FC8mFYZWXHLQgZtnSFnRDoEsrut7t636giTYFELuPrb8gJiw1sx",
  "key33": "5WHjaVGcYHu5ororJqMDLz5jKezMWVRb8htdiVCTaFwpsMxV67NLaMvg6QwaAgPj6YpBjiDY4rygCzAJBsp1yrmt"
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
