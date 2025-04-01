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
    "2LEEzmmHPqDHYbau11zrLz1Ay8N2Amjovhiwqag8ffmLySf1ks966mwCquS3wjNDQbhurhYoqGYHoMutH469x6n1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9NobW92sYw79DZ6Q3jTSxWZFX2RBBUJRWeTcc1hndkDpWo2tRr7ExLAa8q4f2xqczwaxM4GeqQwqFmtjj8Lk1DG",
  "key1": "2NMLmUbmEB8mcLWjR3rQu6Se764MHVFTw98kPBJe3xh6Hdbnggmop52uh8sEviYGmxuVLr9XCi21k4b2mrd1gDfd",
  "key2": "35PYvafkP6kg3JT2FFKFActeVGBDMMqpZAcVkfRZSidHQimVMmBASUnPe1U92JNahYf5D3WVV7JpJd58ZaN9z8iS",
  "key3": "3nUyRvc3iNiCuN7jP1E9RmRg3cb9v6U4ck2YqYhf36myQVSfxL13QcZDr1rCt8KzRTxUWm9geo3LS2bHR9vqba5Z",
  "key4": "HWqKiHTCBnytgyhAtN2RQ9qDh2L5s9DXSkQecE9mM8qLKXSheex5mQBrDY6yTZPcaJDcQtYQNTSBuL9Ta421S3F",
  "key5": "5v2jpne4GSHwnoJ3kZagYCcd8buvL77hS9fmHfugWLwLXqmRTW4gYPQjreZoEgRzHVQBcZvVu78qzoQ9xyiMyXn6",
  "key6": "5EqZLWPigWuCWYbZL3yTvmhHhhTVeCwnF4SoXby3N8PYrds3CsbDTfP6LNE9HogV1w8KZ3VpHxJYiG4ZRjJmUqs9",
  "key7": "3v7qk7NSwtVvWQv197C23Ud6QRFUyXVyFexrvx1foTVvQsBhk8FYQXurwxDRaUv1viyDeudetCDT6n1YVCDPrVqY",
  "key8": "4yfMAN4RUEnKRXxdSKYeLFJuaCWZN2qngSuPdWPriedL6cCttP52P8DjK4CywDDodiP33QXEdA34xHYoD46bjztJ",
  "key9": "3aAZdrFShY8Wba4Wqwx1ysNB6XcXbYrG3DzN6BnYChtfBN6wGRa8nsvd54sozKyfRwtRSYBPGcYohWJ8PTmucV66",
  "key10": "55N6oVKHXv4bTGYSBh652erBBTaVicqA63KJo74QGJZf8gp1hkBXD8tv83xJUEsDYnHvDgJAAUAmJzAcnFoyoV5S",
  "key11": "2MBW31h4VgyGFxWSsnpjrVWSfyru6MMWnkvM4ugphACCoNeeCtGTstBVP2t8aArF6PdVZXAMxrirpkrbzxaA3K3a",
  "key12": "4PtbKdkrYz2Lqk7SoSXevGzmQFH3aGgkfxMgM1KeH91g7zMA6WJyGXT3S9n52CRDCx59uUj5MQrnqrdgAjHznFhR",
  "key13": "5Lxdv66BxGeYyKmPGar84c5ndZWS4ycAEqFCCCXXePDq2vz1qptPoYFLsVfcCaLAoHa9YNmC6Ge2op5tcW6wEUAY",
  "key14": "DxV2kkGuJwsFLLKmXbTC3NkXCEBaKKnX2Vc5Cuq9KKXhM4ML8Qyr7BSmQLWBC22PJmhqjQZ2hdd4na1pUxK2Ypf",
  "key15": "2A33otWBsK5ftYWCD6N6LWCfLQ5kmzgmpSqzo5zDiF65temWn43dpdmjqvSfciRNa7tZasJuLKoZXnV9yYKy6bae",
  "key16": "3J41FDMw1RyGN8ZMhnNu7HM1vKXU9GLDacVBT9ap6hn8u9LxA2u4sA1g54WZ3gzmxChXrXEbWskPD1qgLUHxyLuo",
  "key17": "ffZ6D9MS5pJ63SBi1UTY77k5G6U2mTiDQBiiko2yTP2b3ZZ8MxfEJDrbSZDRsdEWUtPNxrxCSL8HHW1DKvKZPFy",
  "key18": "61kq9A9kMJ1Uk5k5MJbtYzddbiuWpwkMwnCcbkfijFjpyqbc8VX9x1qrWLUYGUbcpuzkW3ASM8QHZxrMJ4dbLP7D",
  "key19": "5e9UUUXiXdnKXSFsHoGgZPMHbPG5GJEuYfSgpTdQhdBwkWDvrvGfJaXRVLn8rv9yyTLKwVUV6XPMw1vCByCUdZzn",
  "key20": "2RgTgaKPcRmLUENVsu4hnkmNYbz4CHszmqXkTwPr9LjQu4HH5MEWXng73GswDrKvfJqhhUq31omkKoDsPvvuhL7W",
  "key21": "5E9PAWnGik3jxN9eSK1EuLfs3oWoiL3iCrVWLMiLYrPB1fXbk7peJKKvynJmHaL2kNHuwCk6uZRJ7RtZJbZepGXa",
  "key22": "qRpVSfwKR5FoqtrbBBFfSKMGSHY8MMCqXiBndy6EZqSYcQuMfaSRMZK3tnUUYjxtrq89Gb1vFp7p9Ef3nh7tiEy",
  "key23": "2wQvBc2oeoGfTWtkr5xVpiN956ju1MoafpZ78GTxBtZ3yb5rM2MXXugFzka5PuvTwFJTWrdxT5WLZuyZ4rkoDqzF",
  "key24": "xgK2vbm2xdVi3dr197iLfVFiwfsRbGjMYAgUuv63GUFJMM1aJTt3fQLKq6pJkNaWQwGBeDcAXhFMWMNWKdgpmCx",
  "key25": "sh3gaxH4V9DgUk5eeJ3t5NWPCFvtyVZiugZWJJWbqpAiDkxeSzQ6YQyoE5Akugog4AsCri9htdubza5oAqgPtPm",
  "key26": "4igDHTZU7JTjX8Uee9Rk54oPf8Y4mze1JNvkutCdcSqUFXSagbLk3n4orxqm77ATRH5vimo1uiedQcgn7gLyvg2C",
  "key27": "4KNqPLQfmuo2fqyHXVfK4eFUJLxwZPHbZTRTikQDAP8N8zqgs14jbwTqvrKn63eZajfmcwFZUVkN9mKGGKW9e4kZ",
  "key28": "3JCVatwdWDwgDJWeLn7Je9YnLsrgVErBaYCWhkL7L7cFuGj6AzQ8FMjhf4CFBQSY42RKuASbmv3gYFxfMVTzaNMR",
  "key29": "64DxAbSQ2fb3YSMqEep5zNybro9zDCCiChqbQYffrjQaJvSGq1T5LK68dMejZzS2H8Z5ZbSkyDeRRSsoMb6MBZkA",
  "key30": "5gE5hwmWyqZaCL8qgcEzbystYEXFsXbD5H9upvH9QG9qcNuHGaXonfjAk5KmQWULPPjrHaEEQo25SJ2Eg2JmtJ5z"
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
