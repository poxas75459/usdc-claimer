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
    "3i5EVckg4tRMK1QkH29dmnt31FE8rpmgiMcXQedpft6qZVkRh8PW3nryWsWF29FQyy97PBhu2FeXGX4L311PyXtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sx2C8VaE8kD2sRVEahiUDXY6QicGVxDsjgwfVgArakjwu28fpvxhRjDAKX3ZsKZebMhQbGVwBJ5TPSTQ3svhAkS",
  "key1": "5DtLm4tijpBQH7wPPwGRHM17Je9izmhGoFtxLSbFgbrgSMCiRVjvNcsycCGAAUoro3FZYSNRaxPwezBvMpkA39GN",
  "key2": "2RUpbDN3FunKBSa4vwnrMcVGGZP4dWbGYMRGF1coa4SFP8eNW1Px9CXtvdnPnZJ2gpMk1bY46rjBhyn8m5MyEDjZ",
  "key3": "62Q6tR956tf4ANsuc1TwRCvdELjHN7Ma6dzBMuiWgtFHThn2qPFHAfoTTSJMKmnL3v7EGV7mzXEDHwqa67qLc8sS",
  "key4": "i8NuzQxSgLLXj4sNWPMyxvfK3bxuwW9wsuHyrTm2mobZQxgeG278AS2AmxZdgrNUc9McmNgKsnWYczEasyaZ8dT",
  "key5": "rsEznHTB5Wwtmi8iFdWBVd8wzuRE5H51Nk78S5YeKmjaf828kRV9G5eH98MojKmECnbkpjxwVZptHo5QHa4pFmC",
  "key6": "2L6JZ6B797Rkvuiy1h8CXuwjVHvy6ej2Nz9ymELvFFH75d6kKn46x5GZCasFVbfkX2UT2wiSMDscJcwbEZRHa7nR",
  "key7": "5wGLtQPadn97qdfoHVRy2SSrKCEeFtuM1UV4Ebynv6sJbmdpPMrTGtJuSVkyC9AgmnSqy8oPnV7Fxg6HEiNpV3Jf",
  "key8": "4fVhQkLiMKGJtvR5Y1r4vUAhBXAPurumjALEWhardGWdFi3hfZwUZUSoF9S5bGwt7t3qLgabDfiR1KRT28N7GYd5",
  "key9": "45fLrhMgkh97aGLDaUm1P4xxBFdm8N6gBXRYt9r4X4buKXbXqjQDCN6d5UBJEzsdiTGB77dNGLsN9yiFrauueT7v",
  "key10": "2h457JRRthW8zeusEKKEGC7cB14TzBVNx6ypHtZP1KkQdx4gb5k7iDGu8gYWPjHthXQX6dk29uCA4TEpC8rAkWXi",
  "key11": "5gPgLPoiMewz9U6sWy4q9kMBHLh2QiUh2bHceSm8nKXRD7b5gBCCHVBLsrsuRuX5po3PFEgrJ89DUr2pRwPZnzyr",
  "key12": "2ExSSjkkewtN4M8dNKvWoQtmLtWEReC1pJAZQ9A77hvuGCtisCsgnG2qKgu5QfK8WXrFMyeHT9CD9Eirm3nFUsmA",
  "key13": "2sxkVnu5RMButucCBkVjbh6xAsdtAW9AVsVWCtNHLo13NbLFYurqrkpLUmgP1tDpAx1N4xMS4NksGSrJmqT6ppqt",
  "key14": "jbkY2oRHcEWRUW2AmgkffJEYrPr3yrfLBRGYDEErC6yGa729XtQLqBt6QD3BNFdXAyGHaVC77ZpT37FUH92jNgo",
  "key15": "33qwQ2V1vN7yFWXVeod9kLDUgTtcVkAtW5FkrXNNFNBnxppdEudB7M6h7gUSKqcQSAtEj4xbcNQobnt7524XmrkY",
  "key16": "63oCC88qwXkJ3HJ9BuNi3PdQ4rCMHnnJ4vyaAw9zC8vUhjZfm9E9yEe3EJBTfCjVaC8b5EnqhGeh7Ug77wHMpfr5",
  "key17": "27WfcVLGvtfpfdHNStSq8Na2r8W6J4rfvnDMPGaAk7FjsyfddVr4MGZUZX5i2UaYduUwa1VpapFSj2kzGmpZmgAu",
  "key18": "pEjmraMwLFVLmU2BLapUF2Ygyg3p1ehDVcwT1X1fXpNd7YdFZzmtEuxreY9F67KFSU1RK66fXwpBzPYD6ejiX7e",
  "key19": "28aGkpvaxeU8B8NBLNEpTsucXjCgjZTU5ufqFzxG8gDuVY2ENsBCCjLih3JQWDAhZYhf2DcGzYfCaRdDt6AhpnVX",
  "key20": "2hZc4m9r7kVvafNdtyjfkhiHLbShH8ZeMJWSh84EGfucfsWgEuyTx8mVF9jqpDs2uL7nsUUAkCfkYZLhEfKcs2Vx",
  "key21": "3491GuuQEXi8WSTc5giiA5E3mGQdtTGxRYFRZguyqZU4iedYGMS519TouNx5xwnT1sjEXBXJMaH1LdJTZukyn4rq",
  "key22": "265vJfsrk3mMLerNUzRDf4zd37ZX7se74bxkHNX7jCtmRzutkvxsUpZGd8GKtkcyXmBNrwBC3DtmfL1NQEgx4V7y",
  "key23": "57dc4vTVzZ4ZQUQE2c43LpXPGLTtE7A7S5jZBNgJP58KjyJFLeF32H3amGYRHufPW6aZVppVXSeFPBVBZZ3hCkVX",
  "key24": "4kXEwWE5rJJoyNxPSd5SvWqUXh2hbfAFhePkvNDeDzhs331v7hPaMZrCLroSytsuPtm1LMgpxnki5tNGKX8DXfzb",
  "key25": "5pBuUi9RWgjfhhvD2RSuTNhWQEDBq2tvHSDKoEuhYboC7UVbTe7UrjP5frdq3fupuNov8eYEpFqqdM5a3mRg2ZHt",
  "key26": "4VbnTuawpwgwMD8mbrQeiePCMYegvPNwGxhaARPjpvASACXKc5upuQ5y8vJ3v6sZJuPGJqe3gieVU8BNixtv983i",
  "key27": "2nPxuxiNLkXumXgRe8MPCU3c5zSRXEtgQt6asc2q6QJZBG5ayfsx7kLK9Xv1zd4Z8LZMHLyE1NHRLjsQ6nLPWaNE",
  "key28": "2Q23RRV5v95Wj3QArFJdCpPq74dEgD2qvhMc6GZkw2W8ir4vGKtu1ruhXnnErtsa9tCpaHWubzfdaMsLaLrPE8JE",
  "key29": "UbDHp6exAAWhQWRVGX7i1QsyT2JpiyXuJoPCyBd7Zr2Jbi6m73deuW8tqZXsNHmmN3MgQDTd86mbpWRd6F3wXvy",
  "key30": "5bL8L1SuQ32SAPFEkZnxpvrfMsDJp5FGajBjZsxsVEpnNmgsQJLEN9cqQTmBc2U2x1ZUhjk2MYap9Lyr6ZQGwfhJ",
  "key31": "264toCs2QNVwMdxkCaBezDghjv5wJt1zmA1eodt9tAmwUhnehQJSjfJDyeL1c6pnM3vcBLNP2ketNbsAQqgqFBkg",
  "key32": "2N9mTgFEhZPkzDXAYAVM8BPyh8GrKB6CWKsFKHqVbp3ZTWtP2yZRiC3wgY5gnYhZeKU5AcJFcfppPxZZiRRkyDMs",
  "key33": "5UFJWAQ8rQvvoK5X9C8FFv7fyTKgQDuwPYDDk2enwRX7nDhAhR8yoQTgw4goWcDxuFrGVNXGCD2XrwmVx4LGKizR",
  "key34": "3q2AXxifuYAe8tRHoGNi9nV8w55tZ7VU5cinHuuHW1wdP3A9v4uB4WaJD38eMkiZ4QA8ecCCqsWYJZ4yDz7Bbd3N"
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
