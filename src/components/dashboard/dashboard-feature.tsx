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
    "24Y1KkmYnBz2YG3nso2Jkvi3ZGWedT5MNvBH47djfunRpSAu7uFcZ3xVE9swZgS5qatYYhgYLpLfFywK2dKNksW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pGr1KwQT9unPghoW5Z74rpL5ynXTX6DhpDwCebugQaEwEVnzNGPKbjRZNeEjM5G1vNBTRBQ4B82DE6MeW5zHTKp",
  "key1": "5yeFjRzRdt8JP5QrN1u9pSifUW7AwhupjwaErWUQtjK5pLcGmtt7FHbRgNGD7xnhXCvvD9RbcchKicZGZabTZt6c",
  "key2": "2nMB5ynHHJNmJa71q87sthvhS8mVd652Z1YzpmAwBcJG4mduDSSQXWnizPvgHAc6H7zM3JphJGiaTEThFQPgnjfg",
  "key3": "xo6mEPxffChUonkQk6CRgns3aubNWCszdwurQ6pKp1gmaYwwHVt534mzoTkYUnv1KEuNrJah66DzkEvffSbdRWQ",
  "key4": "4PeYeLrZLGuQ5NLtLgs58Cs5zdBe8jxD1yHkMrhkm1P5Kzbz8d1GADgtBfDzFZu3ExT7DRZx2SRRZjYE6dQHTQr3",
  "key5": "dhKmx3kF1QVWeVyf96xMgoJd4vW1jxgE5pCXNQnzPGzwCiLENiZmB4WYXUwpK8QdxfEYEHfVBTVafFkcSWfpmuh",
  "key6": "y57Cdc3coAxui4FrJhvmQijK3Tr7oCHmX3YiQvaP6LDvdRpUT7e42pwmb6rcPLNNNmc3pvuiZNvJdHAnici3KF5",
  "key7": "VBb2HvT7bv2SMxksEe2CWcr7ajjXWyYo2LjGmsF2qy5ccHi8G5oyv1ZDkcGfbJE1DUJXJC5CdzDAUpKQem7SrNQ",
  "key8": "2AouAMN9gobdmDyxCfyYrhmB1Y6NA4rGWR7u8yAms4LFx1vZeHpWAAHUzGaQX8ErGGhn5pxjnNLY6mCgtC32ePoR",
  "key9": "a5TPWiwGSPsFTFuyhPDDKHagKK4UCzuMVnWDtp9sZugxV8fFtTmZK7pso5R6jTjeTqR19n5CVw5Zgayk91K8a8C",
  "key10": "2SDgMijbVNdpeonnCT1Gazy612p4qFuLV7SgXGrbhBtU9szjoRxFUUiHH4j7Z8Hnz3L5ES42yqQTy2toXSr9paaF",
  "key11": "eX2trv44X1fwJWEu2cDKoR6TZs8gvFMRf1cABRyzPjMH7MmfHdhEpQoZ3UDnADB1eRFqpPJxTbExML2c9Vn7UD4",
  "key12": "2Hd25aiKtS7aPCkNvPUK1MWSNcsPcdRU9HF2C5QsQuQsd24cSmYcFSogch9jUPHtwwJmVxoeSGGUaQ9xnFuheF7o",
  "key13": "429t9rfZMe8CrtnDwAW2GTPiq1tCCxvAvVg2tXhontCfuf9oZxeLj7ST7HTc1phjfciNTpRzNHY6LwZtSiQjNoQa",
  "key14": "643CiuEpcTJqEqknPSDisjvGDDaHPxLof4gqN42AkP8TYK4RRHQou3cbXPUiT8dUEdgM5igiFsQn6SbtR76CqgUp",
  "key15": "2ABSvt6tHP8NSjywueBx2oN86U386giRhj6gxJcLctzWNxFRSjgBnDH4V2Y4ocf3EyFMohosehSvKPcL7iwPHnDV",
  "key16": "2xinUDeWbQ1zECif4DwnEeVsC8GmZScYGB6igYvmW2SDnSVyHVkP1X6U2MLirVnxR1h8SbsTZMKQjSnzzmy7DYFb",
  "key17": "5oo93s52hQaJ2FXG2WmFuZkWYV1dEhsiQwxQoYDYUcVbg4RvQdx4XJ5uv5YZbhurXqH93u4vTeoGKPaTuQXLd99t",
  "key18": "JWJVSgZtZJGYMruqhLe8y6HJUTBQn5WtMg4wutZk8TNW3FNFjK89QmexrQ7GZswKi5gnCerhYDtvzRho2w3dgYK",
  "key19": "5WXuky9h65svjvRrSAcQEatUJkBJtWdBA9qjFUvnNpczKim6Kmx14qTFYfgANUmVR3Q8zBa8cykwAW3RgXo6f2kK",
  "key20": "3Sw1PDZEtncSjC8PtjGmsk9wjd7S7jFcw5aNU7s4kyN346Bsi37UNcdXRv88RXcHkYRGxsAxwuMqUkk6M3fJgAfx",
  "key21": "3sNnPJRcooWgUQhYhNhGQVAeG9Mfw2zih3cr1cSzS2f2GCgZJAbayFPvQSMsPJt3Yk9TmgGBLvEEATYoWH2B6fRP",
  "key22": "83Fm7cNpnbAgtRbD6hDdix9j2xZTQohrREP1cYxPsWTtdw5nCqYMst3HjD45saPiawppVKKjJioUAVDPgEoreu4",
  "key23": "Zpm2awfNSPq8e776jjEANcxRoqxNmmYczKSsXkvTFj6mszMXFJBLPZLUBeL6WeAeWJoaM13YcDnYT3BfGsWiWor",
  "key24": "2rieDhtxMFg5wrPcWHcWz2WisWyXG444iUK1qH5KXA3UFAzu4TSm8AStLtKDLi7dgQ2X9kzWthBs73UxP1kg7Gms",
  "key25": "8iwmcktNFzo1bxcWBf44vQYUekscn6yYQoWCy1T79ogWho5tStCAybjgFjh2pKUbRprQyy5Zzcr89S6XYDv3Q9f",
  "key26": "5wCv7QtQyyc98XgdySmRyuThKFLozjCM1ydAkrfj14couYFWRqGRUyy7VNSo4p8seez1waGxXVe47Mwof5sMULJH"
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
