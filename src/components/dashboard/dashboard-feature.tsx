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
    "4tFVCgfKMSwcKAzv8vH2wmtFnYpxzpWZovTrnCG2rHA3WGqPaXLRtGcsZSZH4VTf2rxYbpGcvrxHcq12yGZ5jZzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27iZvPAcojpYV9bvfmtW2b83y9CSzFf7X7qVteJ6EYFTo4oVvQvDe2kacu4wAXxTi4wtzPZ5mK1wQ3nv4Xa1B9hR",
  "key1": "3UPWzxCHSyvBXV25DXHebbjNfv7k2tQ9iWRQ3EXrh6UpHS7m5oajDqrMFfWR2Bi3HV8RtNEUBSMnrXdwo8DAqHcW",
  "key2": "4W5uEqZsgpsd7hRnMc4HZuhJsavUcav7V5mEY5X3yXmSMWJ7qmREt2m7d29yHmRFL2YJ7axLC4PzHEL7HBwsSxTT",
  "key3": "3DxTh3686653hun6eAarKUMoyRcdGuFzhwrWXqXQ2pyLyoHyu7KnNy1xnNYSUidGxHCaYpjz2SqzofVoMZkM8oSL",
  "key4": "4WQtfUdUkZMse2XXRbPN85zu8NkN99PbzF9SSpkav5DQ62ijy9BbrJTZzSfwgpnbue4Nv244Busnh42dkVCi95mD",
  "key5": "4VG6Q1oeJEYT2tHTJzjNoMQ4BcqeGppH8TUiQNXFLcL8zd24Fu4snDQHyssu3bjM65nsoT73hodKyinbaGBkSD3A",
  "key6": "24RaFsfCzVPD258gzEQrjZDGRgQgnwgHEvHif12kJRM4rDbfTHSL59haQMLYKNZU8uCMZiSDsheWVn8PLnxU3vRm",
  "key7": "2fmJE1LwAyWrHBJX8sBKjr9hh6HBQSGpWBeSDm846g4avyxJ7ryvgDJfczTjAer2hit5aLoWSKPWWUrATsumRWpv",
  "key8": "3YYvaKe13dN5QYnvchT163oGJtgbaxDADjMb7ZaohzeyDgRtDmypmdnRo8BiupGjQzyrCGSQnvguoXofLcbjk7bV",
  "key9": "5vyC9k6aqU4eG52HdJzEryt7XM3eVuPXsFsqh8p1PJjerHdcDG7WZpRuUq1hKexHVHM258gfb2by88bkb1E9gDPR",
  "key10": "5YbbPv6xFCY1prcMBTBXN4Nis7ts939cpRgGA664dQJyvxcjcRKnyaLPNYeyDXntqKQhURXxBvV8wLAx5pzFozEi",
  "key11": "5d5zYSuSfRQXAy5f3WkaEAeV1YSHPt3Sv9vScfeB4tkqtWy2RLntMEfkEMXvyAr7CGQfvpLB3dafL55s9BL8TBrN",
  "key12": "3Hu85JKAVALb48sb75SBPwd9QwCy5gij2XetDoFJtMkzqWxp9yDj4J1UxgiRs6fZmMMd3jVv7XBGYby3UhmQEW9C",
  "key13": "3Vv3FeSirrrHf1ZPCrpCa6pzDV1rX1gXh3yAxUGtXTqxVrFQGuZmE3M7kexW2JA4m29LdtiBjysweqH7KEJT7CzQ",
  "key14": "47ZE9uEtN5N6P2rRCP7RBLfg4Fy81qT6V4xHQiVAwJqL8BRoNg4CBqRBfuTn8PNafQLJiWKRsoed6zps7D9cgAdz",
  "key15": "55UZEjCCjz8zuDaeQZkZZPk1ow33EeGRM4SQTFpusbojdXXH4FFyA66vnns8WjxubGLdq9UuV6NroRE879tdDys2",
  "key16": "3LYLbBG8vbdiH3edMrSiTjat1qgydNBNkjwVKem4kfy9MXXVgw4jJemfJjrkEd1CtApTZFCMksvmEneEHdDpwgJG",
  "key17": "2payENYThSB9vG4Vm63yinqUci5bt9sgjzTGTYcspKUej4fDWof4sY6HTPzWWXPesp6XfXJYi7Zhye784vXwWunU",
  "key18": "2EMrf4EZpPWU8HPnUPaJsXVJ9CheHhRTBQdMH4bDhL7qb2EA6yEkXEqspDCVK6VRAeaDX7zHrg7zSqRMazcJD6NU",
  "key19": "JKN8gAT7ERhhuv1QEbiUWEUeTbVATZuQFQ1sv1Av6cYSMxtonmHYcAZs4BSHXxVXTF5KfKVCbrNLbhcDxpegJVg",
  "key20": "5H5hKy2uSkwdMJYgwLGNJkuhGYQZk245DEU1KXk1eLbqzY3F29nD9KrcPGqqwZAqyaSQb5663TFwk9gkDFjJBRtC",
  "key21": "5AmASUKRqfoK7S9Mt9BbitZZd3r9n4wnyKWEE6d7romXhSJd8s1APSeVm69UFDUorthaUgwUvP4qpoaugQgCg44p",
  "key22": "5uYRhGRa8PgB6Sg1GbJEo9xw1eC7vhnF3WNQuFTfddGDBfJSzLM9viWzvyPzbZAQfAi9ezYPz4PaTjSkvxjFPUMN",
  "key23": "5hMTubmkxYYD2KoJnpxGDoVJNhTumo3638yVoUS9PJ2NHvTDGT2RP7kmr8LwYnDf3EaCB55GEDi46x2mdmsB4Zhn",
  "key24": "2AtuczG9a2RcPfnHwQkeY1kfzvYLnjEJw96cvpU74pVJwYJ6D9LkvrFXKyFtg5ma4nm6zGrXrwh9a3J7tAJo419W",
  "key25": "3ynq2yphmShrC6T5fN9vYqTrNLgZQ3YHDjzrzoqGYZ5w6Werby7G1dkFuG2AbY4pGiH4nY7U9G18NWATbNQNf6wf"
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
