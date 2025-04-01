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
    "22afqe2AwbxU5LpEU7QkHB13ptiaTyXaw3p49zr41qeQ89bSBenCRT8ge13aYF8377efkae7hHRX2Gv9JvDY4NVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44pR98TqJteNuMuKxq2Ddu5W9KxVCmF6TNz9hE15CguSBv6iJg3KuTtgq35NudpibPtX82teEviHbm3UiUArDevr",
  "key1": "DReLiswLpCxx34SnS7zpSF93LHwhqgmmTgpbaW6f3BzZMLStcXf8FFnzvf5pLjo7rZRkyzfx8Ai9kzwjbyxARe2",
  "key2": "3W8EARsCReJwq5Dx1BGMx5HF8gTTSBgGKJ1xYutrzPB5qrHkKqJXtWXDy57KysvFu48ybNccgtSNc2qnMZcmxz6H",
  "key3": "67JQi7NFuR32WUaWMok9FzSKskUtTo2tkvC3rFNDXSRgqMWxTbEoE9b6iKo3X4GU83mKMtuWd2sSizqoLkUirQzG",
  "key4": "QcPYiVFFvbTpkahEu8PEbkY4Xm1KPv2tFUubWYYscQ1gjbNQXfuj7RwVwwZKNjjjoVdjks6vxnUEj9BYtDT1Bwp",
  "key5": "2w1VCe4RMCMEqURoqnbZWcZ6tUmH4uEJUdW34XDAczspZVvBjBu9RiaGg74yH1Ygcbvju5ueebErch983bL8cweh",
  "key6": "2t6QWX1RRPg9nUaYVdn8XG7YYJYMxbuErmhztiai8eS2W9rfGqRiNjSPbkL4ZgqRmBxjQm9PdzeY1DstXqCuzKp3",
  "key7": "ZAr2m7zJLopNmjB7khu3XSnwtnbf4sQEWCsDmwHav3APDGdnMrGBniFucjwWv4Wz7yZuycbBHUiENzss97KiGL4",
  "key8": "2coctRnfREoWN5988cBk1p93GZ1hSgdFZ3x2vsTamAxMKcSBiZ3WsSayKD41ogpYGde75eR12nqznEv8PfxLFjVf",
  "key9": "3p2RHHsDQyzzHEpJayKeoLiqWRiy9FN4XSrBoCN91GiA2HnVneRhHzUcMpvkk5pKeLeXDBned7Lk2mXgFv1irixC",
  "key10": "5cCHs8j8g6MMsK7xzta6zDPPLd4YHw8xDTfV4AUbh4dMiywEhb23ZSTU6D33nDWWZ48iyiiE6883Z21Y5tkvdiXU",
  "key11": "5jujYSSXCBmUzf7kwAKvR46BSkXpaJGRMHs5jVEPnJNVGphM9NtorA5iXZ6KY89o5irSdBUoeFNZxPYvdNNEkzKc",
  "key12": "2S97eFmW71a2g39rA5YmmRQYYKUuDJ6cSLTLYqJG7EkU2tTYM4gGSRcTkwrJVZfaw2wVT6AzMiMbE1AC5x2Ztj8Z",
  "key13": "3KLURxweSUXETvVewLWYUNUGp69w27zWd2UmAAzXQceC5gRiMQY5rHpR4u3PuLWb4L9Zk3fG5Lag47dcH6ZYFkEn",
  "key14": "iaphKXBHmLS2TWA5jaQHt17P7Lw5YzmvTnncdESnG1ucA7wnYDB7iEb4GkMSeqqJG6MPeaqo8rTxMqFqoQs87cn",
  "key15": "52QJMr24jw7iT6qfdX888c32Xqva1q7ocz7ZFdUJUL3nqjqcLNmKbP31WCgsma5YsfqXswuLPdrfVW2vxWxXT4ok",
  "key16": "3zRhV2uH73yJG8JgAZZbBdfmAJvgvrSeCFGxmGf94Vg55VXWaUiVqsEgT1sp7G81BcERKqB2YcBkSqoMwwLeFoL",
  "key17": "zAQDgpuG3trgKvs3MUySwAv74h19AwaHS4giDETXB9eccekTXXyT61Q1BRCupMh8rDz9zd6k2LvJFd584esbaws",
  "key18": "3Jw7pn6yoQmFS2N1BhpV8UxSy7sjHHXAmj33vQFSacgqnCHDAoBPmT3BDytJf4Q3TKqUAMyCZG5doKENfDs5PF7N",
  "key19": "2FVgxdWqxGcN8ZM4WYDuAg5JSxxgS1gsxdNXKv2VdSHmPs1Zf26taUQVSqxBP1wTjxhceDmxsXAqtWrhVbBXpfWD",
  "key20": "2J1Z5oa51AdSFBJTbuYqtdqWZ8fj9zdNKYU9oiV9Fxi2SWuyHSNwfpZKpnnFCjUJD4dVVD2yESi4tbVFKFF4wDX5",
  "key21": "3ZCwL897ftfsVvp12upSbWCEvmE7o9zHh9E9Vq9yckdKpQKY2RudSsuPxt8S2sAo8vmKfmNUwpUVhcZ8yGFqKvXq",
  "key22": "4YLeBuoFm2ooEJ3GAfSGodLWCMypjGFWeCXroajUjaTnam1ES4Prxuh5CJCvX1nC1hE6ttAGfNpkRn2xpqy7uqAY",
  "key23": "QJh18Eu6BSAJ1d7zPavKviJPppAVdVspWvvTXE6eBnTsR7seiqzixtmG6V46zQjc1Hb9Q3uvFhKgqHYu8TkSejr",
  "key24": "UxnkN7wKkzjkqNJNnQWuLMyu6gFjWgjAcvhvTbx4aNbQLqXwBkxRSfWAfvYACzNs8N8uZZeETzKryZkUqzJ5PJj",
  "key25": "W5hjVKYYsfuaTwaiw9dmxnzNzLHuSUZsYqDfHxpPxFyQi9spQmeKEvWxfbMHS8o1bnx2TJ3tqhABGccy79TJw3T",
  "key26": "n7AhEMvrmX4EebWSfAD1vsihK4UKZDBdiegBXfTUviyt4fpHp8HypkWgSrvQj5HZg25kiQb9km4TbjTBHyvXtNn",
  "key27": "44KUrKqb8eoaHVTvoafDDzZVCow9sWdx3dNWfq9fefA7fp989ZfmJQ686uXTkxjRK13sSqwGxku98NKv7xh1LJH",
  "key28": "4RtbbL8eUurSVrLFkHyxwjCRjQpHFVT3ZYxatJofTCaHnAUBnyvtEeYHsETWK7oPo53Ps53c1GNskybtDscKQdLn",
  "key29": "45dYRWJiCDF2h55DsJY8vTZ4wzXNA3FvAsHg4zt3ByQCHT254jrg66TaBwnpQJEnnKLpGmBMnzXCs5x5A8waxmeA",
  "key30": "5kiEjVnsSyHtb3NQBj6jaLe7PyFQTw9fC7VeJ75FjYhGhEZJcnTgMvF4CWkPTy6DAt6oFJ6Fk6XPE2hm8mhQb2fS",
  "key31": "4efSLtqyAa12GpRCdGsFu9DXf5CYfLmb2hriydKbUgBgqYRxcr3K1r8wGVvqZ4hZAfxjcEaG6EsZWohW8St9PjHD",
  "key32": "bMupAW7cX4ubJKFV3GytBkYHJwiNcwdTZLF32WzXdZmmF6K5r2qbrhVN9PeewnGdrZcYWeNW9LhW3gZ3NSGUWcf",
  "key33": "4FhRqSydSc4aLdRL518PadvdasW3sSD1wSTfKgT9jjzCaDPXeSrSyC4hBFY3GowxGqzvcupzWPLjs2gKeaEMHjuS",
  "key34": "4tr9VYQdphfSq6utNkaBMbejvJyApamUJCe14V6CmG5rMu8YSFMiG4QNRvVRGPhkSmhv1dqnkqM3SHrTPtt8iVsZ",
  "key35": "5Fnhc3ytaL7ZCRuAmaCcBy3ogY9VeSrS4CXbNKtb2SjsKroNJsVHejAQdttamVne5HnMmSWR7anpTguoaq7ixTKu",
  "key36": "2aKh5MvUPcf1PEXBsw2bPLk9NfmcrWjHJeuUhiUe8qECFCSE7T2a7eLWojApBT4k7BS4tfZCD56VFEoFy9obwJXv",
  "key37": "3CAHCSWdVxdNfEjUji53e89JRFVEbSQQznP3aQ1kmKLz5hRu98i8Rfn77FbzVtSXWjnuNoDwCgipbccidiZ7RB26",
  "key38": "5Bkqod7cew8LrjS7Va6AqechBnn5eiTQur4nXab887RYZVXTJYn9AKiVnBNzNQFPeWbZDwua7xDHxTrh14ooDRiJ",
  "key39": "5D6P2wDb54CLNM1wBg1RSTAcn3pxySCtLXk3utPgec3PDE5E6jNQ4mPrGJZR1fCfWCB1GYcU28i8LSM1RK5MnAqe",
  "key40": "5TUBsbNK5tkgcTxWkPKPHj5fVefNGaT9dUpLFMZsRBSJVYeE46unTs6iN3y8Ym77ShEvKt3ZTqwdMPqSnAeDLg2m"
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
