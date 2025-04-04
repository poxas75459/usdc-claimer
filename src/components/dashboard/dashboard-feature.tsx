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
    "opHrZerUhe31BiREAjGJSCHkF7BZqaXW4UNVttB73KTxptUaaGP4zmbf34JUBTR3xi9L3SnveomQonnGa5sjn4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q87A249uuKFJasHNf9SxoDiYzHAGBqCAEtzcKPzhRRhtpTP3sC8TcBXV66fErSeeef58rKw6nvmBhAKREJpdSsM",
  "key1": "41D5TsZ5zCgmedoiNjqj9GLJTE2NaPYJfePLFCsyuF9RqW4eiAVWeccqfxJxTSCfMzL3pQXdPqgB9DuF9tRRfx2N",
  "key2": "5Js3PBo6sYyVABYt1JtNdZebHLDZDhgHwNamZssWB7rXSHLYYttsVAt2TUYweqisjG4iAHA5pmKvc153jZ7Jr1Mk",
  "key3": "5AdLPjt38X1rGcNVAVmv2TifRS8y5SQDH34uKTGbpwCqp2X7dCbNaHrAnBvxV1m5hYM7zacASg9QsvSQYi9iR2sN",
  "key4": "3haf3T4Mvt1mdBbei4LKJ6snh4tFa3Mfd8CuCzsHtezEtbtKnfJ4WDSvMXF8nSwrdvVqmcAgwj7XefGyZQ8HHugQ",
  "key5": "2ou6zHr1s6jacTqphGx498FTzxmdNkGBUpzD9xYEV4pMqiPo9fH7iPgnFw5SPkk7sV4vRgLZajvAfqU3DiK8pgDs",
  "key6": "3zPeHgCY1FNPohuiKrHmL28KVtGxe6fwvrNFGnSbTdsnQ3B8hswWnFVB7yQuGt4Mr4sV194gLGjPgVcZ2UYNvccj",
  "key7": "fJNQS5Zf13ht1nLFAiPQvQg6cjogpLQD9yGTkqiq8YyhsY8aHZaToz5miUxjJS8Be6mt78uDg9EBcVsNbFyCc25",
  "key8": "2wYcddaU819MeZDWHJ7o2V2deAPfEeEXzaPjSkLny831fUr3h8Uo2z9zpTxeGrgUEjHZVsvYfwRyJHgZ6XpqBvto",
  "key9": "48PwCF8W59yRjJrNrhWB4gnyNC5YzKJkBHQdXYsVKdt8NjbScNZxTtzzeDgz2BpourizZ2hxyN6QfioquKDN8aSU",
  "key10": "4h5bT1xnsskaip2UkC31gPtfYTuaRy5fQQXQWo7HZAcVvC5no6aRP4pZpfoaMSG8JJDRjSiY2MYiUnKcRuBURD99",
  "key11": "23ez7bDyqKVVTg1QgavrS58uCPdDpotC997Hetu25gyxUpunwu9Rq9gw5eBN7GNYkUJaTCEY26k2iVoDjvqY1GDF",
  "key12": "3JkHZ1NZ4DqWSFe1u4Rz3iRLgqLwc3vH6tz4N1Bf5J6sHscJF9zeSsMQn1WrpMoVS2xPsw7xRcjaYHUuWUXJHQRN",
  "key13": "3qqpVd3JipTeiFiCsY3Vo3mnrymXZ1kYRPstPtPYfb5RXBm2iu7aqidvmmu1F5r9mZ2p9Pdfz5LRcMUos8B7wk2T",
  "key14": "kCoY53z7xdVjg57emKrK9dazMgtuFwNCh1Hd8oz8Zmg7s2oAQRhAmakLCqJnq5pTahxeVowADFCwjeaahEkoa1R",
  "key15": "4ESoTYZHnrqu17LRyeXhsRTBiyhJLJC1PGMMQZvgWFv9sLyuJ3ivwbJUmVjuHe31EcZWGnwyrdVzViwmKDzahtvK",
  "key16": "5b1kpaReyEHEFhkhdVHHQ14zPKaGW2jetY9ZdFW49gfcZwYfLWvizvBWmB8eWXGxZEys4JbVBoGSNy1sPE1resA7",
  "key17": "5HE5d4BsLsNe4ZuCMF51ojiczSeyFG1EovAVVvXy2A9QYkX9eWtVbxiiVP78AwQh3nP8FFonnZQKDVfn3BLFhbTW",
  "key18": "3C8rte9Bg1bREsZc5XkPjvYk4GiPDiPGBcLhTg3cAHVUeApbBoWonozPhHYosfipwU5woPByuGRw84eHkjBU34dc",
  "key19": "q7i4Mip2xCEQ7JgNBURk4vegtQkSqNzmvCrKUiTRDDmHWBBdtmpQ9iXdzsR9dBsqLy327SN7RCccxzdMV12LGkn",
  "key20": "2ZQB48zmFBjUtPy1HcGykezqBYr1axteWbUhGsuTYH2bL3zLk2Tq37tufn3Md1JkFGLR8h4QXL5fcWxBopdyqxEM",
  "key21": "2zoXRRZ81G5q5zcnsoCrWuFiYWBJXpcYk7iHiFranczExSJumweWDBP2eF2cpVXBJhixZ7ATSGmwy9Z28HLXFZEb",
  "key22": "3WoRY2Sd6rnVhU7Cx3fnDCPzFK2qTfAp6rGr4eapm79euJBidRTfb6Eg3U6yPHG5L2jfwPF6GudfSjGW2KmwyqWD",
  "key23": "3XAQ3fVEjFw9wGMfLkCbq4HRrnt4Y5Twd4pGm7HvHjbR8TvLre9yD6rhiWR3hJucRb1r1y9YnYXqyptCcfnCMcUy",
  "key24": "2AZxmBUEZxTTJBaskzrmdXafeWUTdLPN55ddpZ4hufYzumbER2KNoQkedyS4tqP11z8dGPrVLVWyGHRfawYmetRh",
  "key25": "3r8Y7SFBB5kFtteVELC6Wc5YRJ1DZcYfU7CizBm9N4i7Ab3rGouX3pi9tZBX4F1FeYE4mh1S3PTfC8HwXo8NLTuj",
  "key26": "yYqsWG6JWMFaschuinwAnE8W5A5qwyXT8rfTb7WroMDprrNgmGo86gaZSSUjUrHB1mB1U1NHRnYDomC3xwSLb7z"
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
