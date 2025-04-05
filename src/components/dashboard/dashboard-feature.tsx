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
    "27WTwBsYTxUTt4fdBCtuXGdmnRkzkC7e6WAB46rJwruzwosVth66sGLbRs8TZV11nYe5tmWv1gpHZKZZfm8uwp9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21NTYQvpq867m7X5ajekqQ24N2XsemGqAqcuARqiDK8Cs5JQac921PRsBzDDi84tXsKsWucvqxD4qEnZsWGky2A8",
  "key1": "21rpSuGv76RndF7crrVT7A8Ex1C7TMNRStsgrNs8Qn48hCoP8d62gDRjb132nYni2qrY5GVPC39Ca4j4hD5aB8B4",
  "key2": "58TzqkQuAsHigCvQ6SVdeg3doLTaJG1cYBp1co2xqpd2rJJMf7s2yxwtc3mMAksqkaNjWBwaRfaWQq81W8mh8HoT",
  "key3": "5ZRsXBkB944dLZH1mbLA6UuT5f2fMbdrGvEnN4LyDY9sqdeZ2MBsXizQDYmkaBXjmbuMyi1KEkiJqixgxcaodDRi",
  "key4": "67ZfeAoQg4YdC76m3M1SSqUTRgVUvC5aPvtszGWLHKpcHZjBiVP3JVV4kBPBmCVt6ws1fe6mf54ENGvrnDvGMMWs",
  "key5": "2FkLEim5RPvSjpCHQ58pDFt18b1iVRkRS983z5icbLFdhGYC1NJapw2PFkREXFQQZ2o6rteMmy3PyC8tQDZYkwRg",
  "key6": "4Uc25B3yhcY9S4D7bLPRGAg9bx2G1cU11RrkBfNMun1WMDYsVrSyAJ4kq5VsTL7M7Lng1YHkz9oLFBS7Zsvx5swP",
  "key7": "49J5vYcub5N2c5sWRRCuUhq71jK336rE7xPkxh72kdAvW2oY85yKvoGmCQH5GVDNdY39y8EWTiY58iAVmvPPk2qA",
  "key8": "3zUNWkfkgr7gnDD73T42FNjAJZ6Mwhhsm75MgLXJjRBUNEr2rNFuCasrSBVnw25y3gBGrd3HbUL8dmQVQCZH81HZ",
  "key9": "7cZEwM9VXHdNaa2oK5SrJDtM1cPSyhwNcMYvRuxFELAQeJQ5mxLmSdr2HHAs32SHMB6BMmD69SDxK6x7gyXcKhL",
  "key10": "5teHbNtZ6T4iiG7CBKMyAhBL392CGJvNp8daekPzjcm8A8k5wGrTTy8MDofytcUN5HRrmTJSkmZK4BwBZdLGBFK6",
  "key11": "5XUVJYbkJrGAjzq3MxnA2nvxGC1QwappbRWLgT7iwXpPtyyhBHBGtCv789mcFoUirHL2UsJPMXZrmN6JHAbY2HCx",
  "key12": "2E5P751HJZVUaA2fXqqwvXPzzCVX5qXH3HNdbz5H3ZjDSaUYh6n5AxpTvj3tagAMq52sVsxdtyHHnq3RqSX6eDH5",
  "key13": "JEExBd71JaRbUxNACTPmFLaaVLobq9r7GNq1xJ4Ti36mD4WKnsNMTEmk2XCTU4qz3gY1tL57Si54rQPtYSy6kTx",
  "key14": "5dADMJLB1cosc3oQfef4w33xyS5ZLT1AuH3f2oE2LSZFGz4VgzWmGRm7j3W6KeSwKVf29bVHgS52krLXGGjD5fSs",
  "key15": "4nGMozCVCKqeTkKmBrN7aTvQxrWjbrW94UJd6A9CcLqeSk9Qk9HHBrgo9stv7US9jX1NSmGSc6dBC2miWJU9pVY1",
  "key16": "3VQVn8DL2C5Cx5JHtVBjvMvSJ14PZtynv2ah8rYw7vjEgLFtdiGJMVK8euAajUrWLPEeXGdNtmpFaUaS2Z5Zr2Xn",
  "key17": "3zyRXodiTwrpSDqjPzC1J6gWiop84kkfPtLgykBepWkq9yBpQjTzjNbMGw2uS9ZXTByV7LsRKQRUAqtTiYSDpX1F",
  "key18": "3tmWkSTR2k2SNVaVHYzgZrB5BegRFKQZN83NcT3dvcmT9BujYuQEs5hmtqxJFQ48zjqt7LpSzJ1Pho8GkSZw3AVe",
  "key19": "33mB4spwgz8Kb9pfRpdDuyxKqQBFv69e68Jt2eUJ73y8z5mQLpA1ZaFRaAU286Wrv3ugEQajpQbdibKgF5PBVB57",
  "key20": "2xZ3FqkcujwfMZRLQCb1Q8M6uEG8QKpBpTmSEpx4BTa1zkZsdVtptNNzNb2zF2JEoTHSEvqe6k58PQRPNR96wUm4",
  "key21": "55mZr4iag1atMkgvkDPd61MHegrGVk5CXytMVqXgKNRj7MW5MnFCnPgFcRY6Uyz8HdbW39fvCbUEwx5Zp5N7f7sW",
  "key22": "4boF9GzEb6eCcoLJ8hW69KQHasTdNsHM9DgYLAjPstkgSyPePRjom74Go2xscrbkS5YR9YVM1k6HsdzdQV62LUFo",
  "key23": "21mZoDVyHiApTQ7rkV8mURQXj6HWccMghumQEzZKpmrG2htQD6yGDqGuHZd1HCGyiuGUzNxF3Wzas6QUs52nCo1p",
  "key24": "odp3NDELfi2RtdviBGJ36eBdFh6iTwHLodbD5qHsS3s5SkmEBFmQSyspN2kg18V7kkXTxmeWd5axM3NY3mibaDp",
  "key25": "Z4q1wdVS55i7zcmqCFHKxyXSWD4Fkk8eV5Dan5TSgwEEGkaFMnS5JF4viqktsxTHGrunCbqiqz6jEKnt9b1V3v7"
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
