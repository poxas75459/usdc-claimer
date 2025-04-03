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
    "vqLKVXwSxM5PQiotKa2jWGqmjQiG6JrWYzbfBzpgKq1ZiTht9HqHDKHJv1gWRUwDMZw4mJvCz79ik7FcyE6QWmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "77Hp5MjdXdL3oxekzwHRF1VCpK3NbLTSRt6kNDmEQ45DYckyDnR714AfenXMmXWsszhLG8eqNkLAkxbo2rmf8N6",
  "key1": "4SZDP4hPdJSTb3QuatBTgYwu1UFx7j7qcMtitTPanWfiRdSaiU72S3V7coTKvLDFXDV5PHcpsSmBpHEupuMNFa8p",
  "key2": "21QqjSmAp81sATbxMGwP3RfxjFafGVUGZCchKiMY2QmW66UU7zeSaKpMYhH8f6EezsnZA3poaZ7r6HpLqDiNjhmN",
  "key3": "5ucg4x9RvvyvKpUhW33XmhZYxR2DELiD5n5YSgY2DMiMdaw86bpAXcYLcDvu8xifJocRGi5ir72wkZ7n33UUNtbn",
  "key4": "5dd7VRNjZLKLAAcaHHHoHF59jaHAXuFE6HGXVoLiHQ2iw4n3SR9VCmZvVJAH1wUzX8Cgq5mgNZa1ZaSobd6EGget",
  "key5": "k8kqErq9r8NV2Fj5pRZ9Vin5vyvbGzuJt1PSgBVoRYV26na2TPu91qNQYAamdUGyfuj5QjY4Ri5yajkwu4g3me4",
  "key6": "RZy2MyobjC5KYDsRS8gZUm3USXspnYwcza1eTQG8Sk9iK6d6Ymi4jqrccYKvwtmxmtHHx22gQQ66J68y7Td4qVT",
  "key7": "2zB6JcL6nKwB91DwH4Ftd4EpQR7eiCx87xG3zLWY6qZZHVpQ5nSRreCNuygf1X3xiUgQNRTsYUVUdJM5SgC9kBAh",
  "key8": "5aXZPQowX2cMDFACbQ1rJeCdzfZ3SHMAfxifVfP4dRiL1hvYWko8ps7AWYiy11v5vPiHJMznL1agdoE6AmFvdHe6",
  "key9": "56V4yQsS8dpeV5JiwkNtTouRS7NkqbMq2XngiC4dBc3bivpfPBGGnHeUdHthAmowUfo2EC7JdEtdspNt9zFk3sg7",
  "key10": "56tu64iJajdKxHpr1hm4H9Ybeng8i1fmmANGCKjuSTbAWdhiEnU19oTnoqvSrTYp7Y34tigbu5FVBLqYZ5vCLdEn",
  "key11": "3YkaMnJcpi2E3xx9oM3hctoxQZE1NkouEeTxox2P9Y1xX82D77GTLtbB7badHiLqaqgYe4KH4igZromV8bK3wjFN",
  "key12": "3aeTuMjtNiUvnb4TDQ83PVkREircECRWLPQYZ46oGK8zKr4wCSceZ2BqLtm6NMd3vkMYrNcPe2Kgi4rqH8skaa2q",
  "key13": "5CfwPoRG9WGf83TRz1q3PRBXNNcBNr8aajxoo1mxXvzPYsn1EitsyguTFgVAbAaHjz75QxdgA9pkBus9mMZNL9hK",
  "key14": "64pYi9uq5dVXAE9hVo24UJdULspk5uGkd3uTJqMno1sFfbYQizhfDKHvVrrsFFbi3dcw2uE4pNn91637MYojaQGR",
  "key15": "37mf4mVgWmpWu7bTLun2tTnxKw4pKqf3NLuwPnXPZbvfmPiTjrxNy85br1ZJc2rQk59LmRfASYG675NJQQAbe8xQ",
  "key16": "3xzCKkN1sQN13HoUtpAPrFKT1FktvqhHgrNyRxsskrDdi1RERcfdadb6sYhWF7Lwdrhq1ULqauA8D1aVDQYzacHS",
  "key17": "5rFG72AWXJdAH8pBY37af14qdPSNeNqKTxdMH69V86vsV9QP8LKQN3tBCDRdyLreBGBVxEEJ3ePtB36LkCfEcEZX",
  "key18": "2Hvao1EXRk8NpTfd44dBirv97RjjG1cVrqyT8CdstnBThTbtXwVc5Mr921qVVKXUcctHFQ871rue6i6P5miiLmcm",
  "key19": "Y8EPgbxSg8DhKWjqJKcYfR9buJWRwfgX1cG7eGLrocuGZfUCRc7CXF9q5etoLVSdkQwf6riLEPnCvN4skZieAST",
  "key20": "64cdqgt8GQQNsMivBeLoGztaH5qUjCbNXUrxqYxBdsPWQQ4PAWKA1uYPV8e9iyPR2Usu3ZKJK1T2NrNcUY91smFG",
  "key21": "25V7aannK1muEWytnStfG47i4QDvpePmJFTmkavTurXEXbwaK5ePTpoPyM2UsaoQAvqg1m3gjBFMuad25qNgb3E7",
  "key22": "4ywS4M6Pyg2mH2VQMVb5XPjfYx6sAW1295VxptAtTBMupLCdxUy2767kLafuiymfcwnoBWtFaDaZBiTjKa53S3aU",
  "key23": "FtiGsCa9Xdc4a13P7vgerHAtpB7XZWPY48fxEFCamSjogpRH5ek3JvMftNqsfLeEc1WcZ8YaE9KFKQXf8575tdU",
  "key24": "2AiLWxYKtZwic5dQ62RTXSyr3pdFEJZKT2zNL5DUseLd1WcopxZPu7AKtg4dhyLk3tEJgPiYUorDpq11FVqPBt9b",
  "key25": "2DAFiBAH1T5FrXh6MhRmP2XhcW6rf7Wpm5MJsduuhD7XEN6ncdyJzEKJs8tvB9dTgmxL65pbRmrK77Wi3NgedM93",
  "key26": "2BrGoofd7coEA3uZ5pdR6bjm1pr3EmP2RBKx97iV9tJTJZm59zH2X7fakMPxigQurG28BrcYCBquZieBcDGLzCHS",
  "key27": "5ZbzqhyvBgHaXZwSJnRVQvZoyyV7fof4VWDbcB5M7vQNMXAfFpNByWPpdMfbE1sVEhHbaxNdBf1UNmiuY7UaeCUi"
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
