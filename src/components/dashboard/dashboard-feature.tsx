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
    "5tybKjPzJDuyYuQXphqSwjcJ8pD9af8anStuMq9we8yMn2Janvh1zMxArAP1dKT6RAWpu2P5TkZRUzxq7LDEPZd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2edQE4F671X6KRk8po9WZDQPj5QZhgedrJFaXAEXKhtf8XgkSbmD5zv8kcNE6KGEMTtqaeuzr63SFtVukgF61XSc",
  "key1": "3ZefSkmJizXYbziRMUZirTEupxFk8a196i3ZdFwK4hXA4D7ZAQpZoYrhmCdQn7zj4oXLMyXbd2jFZTLyx8LQj2dM",
  "key2": "5DjekkZwVVTpfuxPLUVDins8ZUF6Lss3nMyihTxtygH7whAhmaj7rib5DUo5oUr9KxsCCNUaEq2caqd5fsMamQzT",
  "key3": "3iFUrRZyi32inpEefcCNz8X8BNVcfsUpTMvpyb144TEveSrwPzM4Rr2eiPVR6ANgmzEtyrRkQSzGS9ezVhayC33z",
  "key4": "5rdD2mJrrBmwx136BxSp423x8ip6LQ7eUHpUQmxhKMsWDBJGbf1d9wru7GZmBczoNVeCGUXE3R1cPfMWb6ZVCX2G",
  "key5": "54yH4JxZAZQdQQjG3TSNDDXTst3CXUQqj5WY5V2aiaFYGyHwRMPWNsEcM3ecrBwXiVSTTfyfHJw9tZYrEzkbi8qk",
  "key6": "4L3Xp3VJUkpRCSUysUEAZyXtnMSeFGFdUm3CSereiahgwn9PVV71a7WVYmrFHWN8CXCzBciniJtfvCN4mp7v9cNm",
  "key7": "4HRwP5L3KoFq4uW1LpXLazmuBVDZuTHuBUfW8Bimxgu1U3bdKzBUpBQRj6kA6stzhTjx7qWdwZKEaahEiLiChJsM",
  "key8": "3gEJXWzSPRpnF4uxibtFp6eU1pw35dR5bZFKYKa1YcgzyqFASmXsgQcHYU3tG4GnJMdjPwonPNryM1YP2WCgxHTE",
  "key9": "3W1QBvvTw8EcprXAxsatTB2sfDDHdx7oxiSZrRUSWU6uAw276c3gfR2MmGjpJamJ1W8FiBEYBDHSe26TzAq679be",
  "key10": "47hXfeWLQkDy6m3fKkLRXDPESkwWZfEDALHg1r2KFMSAtCswXkPp9KC9NXJALwp94cPSpZexcAPF4ndZ75PsAVDy",
  "key11": "5AdZfFTd1mwRQBdaa6F4VgKF1YnVAdVaEY2NxdCSAKcKoaoy1vWFRegaoSQBtj4cGgRzRobpnJK1yPmiJpT2qShL",
  "key12": "5UUDHR2GqpHHRUPKtaG48wMqZkCSM6zEtGeHAXD4zFtCZZTBniuzGYZpsvWfX2voczqjjwQ5gXjLYN9V8w5poFxz",
  "key13": "2tmRyVWuoLsDhKZNUW1MHuRfbbFtT5UCLu2QT9kWyxcSReJUcwpB6YXgQ3vpaR12yxnFTu2D8RpVVRrAt7F6QLW9",
  "key14": "65rQRXGVoWebXL9VhLDsAystJihP65hhcD3PFjy9rmXuUiUuMoQUDZT67eGKq4GkStiBRd61tmHXhJCtCjaDCa8o",
  "key15": "3KgYGDCNV4Qkc5MkGtjxnqKo4xZo95vbLnz1S1kXxAtqfttv8J3pL2gbB3F1oqUcTxGFdRv69yu2iWgPLyoTYEhW",
  "key16": "27XPHJC1L2cbQppPBGth2ms2HTzgd7dnEycKfZV8mDaPWdxbbxLE85LTA4iGVE9UEjjiNmPfCyeHTF8fc2dzGVSm",
  "key17": "4MMA5nRq22fFjkH6QJ8bLZ7tWQkuh7tEdz8qNT9bcHPD6RoCJYJYsFRBmftbAFcDZnhWXF6n5iB3eoMMR8fDFXyX",
  "key18": "5R3zqivNjXtMLkJpSub1bn6iV3baYDd13KWZRaqvVAhybgeBP7g6CWg98uzDPFGiZ5XfvEQnobBvJrjynYwYz5go",
  "key19": "3H3HQXDSGdmprsYLfJENTpGgsm4DnDy7GhETWHMZZpZ2LhqPwmeZx8uLMMwfKdPjMgTAnUzh1XuV5g19Vkw6mEjP",
  "key20": "eVSHUz1nU8rbooviQnGYmAZ2oJQFhq6xgasFgHJkw4stPfFkyrE6R17ATy8Soh8Yybmi8k257b1mRiLsnbEbQHh",
  "key21": "3RJi5pYvyhj17Zkp2Gvp6zULafKYvgEC7u8TpmMTFxnqAWvp4DhR42oWBoBpvUv4uaCEm64MF6c5Vp8LR2uoYv4T",
  "key22": "3EeVmC5qGMroCA3gsDcgqLkQr2UPvUgkZEACgAkMb5p1ou4GRZb4Hh44N4C5sKatjJ5KyBoYX5Nmw8mDmpuRpkyt",
  "key23": "3aNehb3TEsbf1H7kLng8D8rE2Nx36pbtJc6mZ5B7pBspJZ82WLn3WU4Gb72jGZCUf4x64atRVR4GD4XsAdao7KDi",
  "key24": "3hY73XTxEFbNs2PpkhpEPuQxSWCLbkduxLMfRtQBsJ5M7i9xT1opTNcwSC93Q7tGehPaFFTT4Kq4dtrg3imdn4Jm",
  "key25": "RKy1PT82CecLTRQ1maxdunHwseqAdY7LbQjJhNsATAfjo2VKFxbUcZbRwNsJy8Ub4PR5hHCoutaV35hgYSJ7EwV",
  "key26": "3WmPxHPvQsixWt355vBKqsUzu5rNUwa5wzt5FeDnEZpLbHM55B6sSPE8MVVCN2tk9izJtLWj7C4LD3pzkrJ6QfAE",
  "key27": "4L6sXGXDMSmMCjL7XQ1RjgJHKccYDoeirL7Cn2JTCnZstMArH6qRnrLgjJ5x72GUPND1jyoSYRLD4EDRUPuxjKep",
  "key28": "4LpgPfsqMLy2LK3dfzdu3615babMWG2sTs9JNy4Nmg8WcFwx8wLSqtLkrKmen9VcAjyxY2uBY89S7WCxxLcN2TH2",
  "key29": "3LxmV2hAajc7Lj5Cf6UuTfLG7GwqgwH2thUsSkt553KWKNUcywCWdyYYchKPYuBhZkTAfrsHxfg8aS9MJJZgXSk",
  "key30": "21YACzcctQeMGMWRhXS13cLS8fyUKegbj1Et5sfgmK3sCJadMAPSMx1A7vjDKeE7pG3ssQAV98H29636DvBv6FBT",
  "key31": "3eb3qpB3VssXKcJddJgKk28g3mqXigXXYk4ggC3oYBFrD472DuuYQyb1yxdfifvECGqMfnQ6YvYkg4GropP2xepS",
  "key32": "4STE2PknSwNB4Exh4b5AyebFe4MSVM4hG5gdmGptYyXQstVfy4UZDt2DSK9tfHniGL6AL5uiq2PwzaRhoLeVKoZ4",
  "key33": "39ebcaRYGEsauMTCzCBBtP2J1kc7HxkJfNTtB2zzsGvZ4hA4VeyzfTUMCrRFvvzMF839cHN8dYLHAugBgw2VtMg1",
  "key34": "3u24rGEv1Kt3TbvRX68AMXSq37FWjMK2TDFTn5i7wxY4NMWWUzQsMWLDhQW7ouBwJMcdkEjvE6G7FVFY2MVDA754"
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
