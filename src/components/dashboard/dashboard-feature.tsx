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
    "5roJMbvJrNCZLhwdwvisME8QmnEhJAcCRnnbuaAyBn3hsXSAkabcqBJNaidR1XY5G8RMsTg8GosnqsfRUwV7st6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38pogSxPxukBsnT8PiuRMeSUJjpxA1fBgHyVhwMNpAwHzN5YWnGatxtptTYwFNfU1s7ndPVe1cL3c8k1HTda2ChP",
  "key1": "W57LzqtgvrAunU3tyNpS4pfhF6sFx7mfa8HV4xe8wCc84mEnbQNTeEmo39dReYA9Nf7uh1hPniyKmDXYVqQXLAP",
  "key2": "59Vna1xj6Uti5Fz6z2YUCBTT6d2eH8qgJG2DGmWY7dYDbhTCzySo8yiPahLp9AEYy5m8G8kTo5dE1x2c8UeQsxYv",
  "key3": "tbjBKX56FtBxqsWgrJJGxK53PgTaXzcABoSt8ygfG1gQH3sBGfJ9pCt4WW823RusuXLnnY2UspXxrzWR8vCrDW2",
  "key4": "5NiYQtyVBtVh2FS15ShzpiJy8F6MFCpHtT74iVyMytgNTG2CPdVAPsLcxcHKdV4LV3HFDQu2nFwPM2yEzAJgYy8z",
  "key5": "5XGLwf1AU9gmNsxcAuY7nBrE9GomzPQHc2ySBLqgqq78EwKGaQCZUuaqqim7zSc1JsWJkUy22sqoXytr6jaok49L",
  "key6": "5qN5RzoFzk9fWZKv872LwxSW5y8gNZEWec9SBi6kc6vGnmr55yT84Y8yEvy993Mozf4L9yGCt9i71MEyBFkaDHN5",
  "key7": "2P7CxcY9cuHtUgFtTuYwvA3yDWhuAh4WxYUnyfycPu6x8MMfABKMMcnTaQWdutGTcjtEHmQYUBv1P7QCWuYgDX3m",
  "key8": "37kbaM9Y1tyhhBACqVBc5Yu2aB1t8tfEHqYeAy4KU4uKuvsbMtgR6fzh3mC2unGiJmpNSENZrAdzSGmwRgxkXNF",
  "key9": "kua4YJ3LvqYWmioeQQ66GY9CXMbZjfQ2dJrSpt8aEBexhpxfGKECpSzos2ZTJWyAnqZhVFTsxNEx7YM3DGd5q1o",
  "key10": "5Z6LLm7mwWFx9xfr46Nf2G7yx9p5qdyvgKiizGEdXjc3MZQh9i9pPRr2ucS9DvPXeegyEniFX9TBrcXs8yU2ytzB",
  "key11": "5pVWyHsMxzMNrscaRfFexQR8XjmfS8Md6BshQnyrgV24PtjQo83dTQLALQGMoz1m1FE2CPH9bkqYTdQiuERp52tF",
  "key12": "2tcGYUC2SrcxhF4ramsTZ3894T9YufdLLifGPCKGWDbetJoQRoKHVqoNtcez82n6X423R5FvCA9seV8nnLkWAna3",
  "key13": "4Kj8hh61Euyaz1c495ywmF6chgv56SnWe1fgBmE972wUHw2kvxeuBrw7Z3TeJzcscwfMHXiey1aLMCg5FU8WEXgK",
  "key14": "4j2wQvcb18h2m86fvJm4LSUDCJNH4STgskuWQDhGg6SEA3rr1NBKKEd6QkfP8EhHzzFaRPN5H4taSGHQWEzAyYU4",
  "key15": "4jJVdE1MogpRRSBsYKVRRYQxkeT5p1Jjhc18h1p3Mvsy1DBwRdH9V3cpRJZnFXJL28myQ6TXUri5BRUfbEvcKJXS",
  "key16": "VeMp45X1EcJExjhAGvFfBLHbd9C1maPC7SiDRcf28s9Qck3pZ6LDGVq35tnnZzVKGLWxGzNzXRpjrwZ6zZMD8hw",
  "key17": "5BrShrb3WxMyu4BoSX8772eaSUwmUHfwiXyS8FRx2wQxLt9WFHhutkEWSYUcgnEVboB9FXWHpnrxiHGJKkQNxieU",
  "key18": "2bMcVDdCaC4YWZjsW6D6wMbeYZ16Cw3HTyPV7X2dwtPsqMhrySzaR9Z5kjArPtiXKthJuRNLhM8qFqoGagYaW6jn",
  "key19": "2UCbhz3ASkm4Rb9mxUt7D5F8R948wa1gwJjqgaagrZheKVh4Dza2D2JQf5vgNv2B6z4We5Vqo2VvpDrnTdM7PC8N",
  "key20": "43FFbbUWHTwmNQU8kUBhqg6J7hJEmfLwu3JMiNHM6Ynhr3aJyPnr1npTnb6Ati3sgdmHLLpDoSuioQi8gmxgaYTa",
  "key21": "3Zi9cGEgA2gqoMaxSzvAqrxdidTMJjVeHbyK1C8FxFzZiKjzsNQsUb13XTvue2t2dRBJNnP2Ym3KVAdrM6VoTWhU",
  "key22": "3nQJF81PzMp5foqmVHTGrrTKw8QWvCypYtJueaAt4B7mMbP9amL7n3Qn1pFJXDmYjpvaPAnGgfcErKJHdRFkMTes",
  "key23": "3x732e6BxEFRFRc8a11PcW8jEYpNcxgG2GcdFMrVnFn7WxfsdJW7drm8NTyQUcKa2USB6mFVAugDUx4SBm6nuvs2",
  "key24": "2D9BUHHdV2E4DM8KGPJrGnPYbGA5BPbiiq1dvofE8kfMqUN3LeWUvJay37GgE5ABFjhrRjYmbvHfXRc5ySeB4ysc",
  "key25": "61twFGv8nL8VWSBj9PHEiWL8dnRTghLHGFa9fpMqHoYCTUiQRhEZWjM5omL1tVeLxs8Yn3Lmkwp7oKHj1GHciBqY",
  "key26": "27sryzU3EawL8Nr247CgdqYryDFVEbWL5WtTzKEzTUJfXsXpUqiYA6EPt5Q3KDq4Sm75FRbQaKAPBdYEm2xuD3pE",
  "key27": "4GUhhyHWUGDXyQz74rr6BminCJHcPxELZv1Ze5FzkYavegqn6s7ThVgbfDgHoghZTiEeA4CKbR3W64HV4zufGkw7",
  "key28": "62u8m6kMUZQubD4WrnTu99QPUwr2pbM9fSRF2Q3uR7JtioSQiYqgD252PqrGKCoAvbNHBSQ6fPqFcDKtjURadwTP",
  "key29": "2AWnRGvpyGaFi6Brq1i8oe42XfzfeouNL8zw9r7ThZdNkEFbTmwmtUdjbPkX3RNWSpGZRC6j8Zzw4w7mrdyw5yQH",
  "key30": "5xLZFukyeiXfSsbDtaVGoiv1gy1wxJgajJsZm63vFT5Kzh4pGhLZPKiWYGaqY4fAVLmc8X4E3aohStW7Y7MCiGFR",
  "key31": "2Bt4FheF7ys8FcpC4S5z2To1Q9AGwv6iYLV72c2kBvj14YTosMgtQSQX97wa5ZvkaxVv8VbkdNVRJvDzArTvRfg"
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
