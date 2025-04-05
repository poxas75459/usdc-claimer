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
    "4wEXoGtV9mbfJvNkKK1raUCqhZLBzfS8geeEcuaLFP3ZooiKRpC4ZNHbNnX8EW3pnJbEaiHyni6kSHb7UTxo5aL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ryr5tRRX6UvzTXC4AEp1RMZDxdTrcd9iHMnTpVFFGJ7cmuHCUdfgnRcDsUiALEmMYLeppaWY6rQb2qjigTvXcfQ",
  "key1": "5C9VrzoARvSmFscNvpAP5maNzFNt9ftM3R1AFQ5LYsKRShXK6bHZz8mRiwbP3HXZCkK4F8xDJ5mnaCBKsa2GHYAx",
  "key2": "276W4vGrBvJTGYMs4vMpdBpb58ES1xGoNW6D3RZ9WFAo2AgN4skHskCfsZ1t4F9vbHzyKkPzPYJkt4QdTTG7iU7B",
  "key3": "euUqopMjognfM4kub3nBc5HJNhXHKoUu3cKBCVaZb8B9mfuGA4V3D25vmtSkQvDoScrmCouF8zFFbsMe8amWAKW",
  "key4": "48GC8G7EHgGMPoaFWaGqcs9Ddg1U38YaE7ZUQALp81NiHADgUgDvzeUvkiG2q8R9QxQPwJz253UC7TuMJ6SwHXfL",
  "key5": "3MevsetvfAJxxqt9B1sJML6V4qdg73H7njWrbqGx1pV5itrAAPyEEuARMx4oCPtcyMHhWwEFt4EhattRk9wxPZcE",
  "key6": "65WDFa1pXp7WaqanJ7fKzBeL6bcjiwLxSPjX8qxkphnWNJYBNoCeA5o9qJ813vjfLbAsR7Nrc2kth54aNCinpKv6",
  "key7": "R6iupExSRJeoFKLDfgD4oPV8KNPDwiMcFohdGNK75FTcgQ9wg66saDUuxURRnsNg9RKW4Tt391GqjUaaMyDmmCD",
  "key8": "Bv3U7Jj7mB3n9zdPYYBfVN73dv7geYFkDmkzFpieWXsArixAdEej1th19J4DKURDHLpTuaNgCuQL4UCEik3P9TY",
  "key9": "27YEMepQgcSkD3FFRJnoNegTv29uxSrmZPWfaNxzLkaaPoqhZDicm9hnp7RuFPhMjdSzmKhJAyfnUKGbLF7s7qjD",
  "key10": "27XhJWJcvLRwi11HEGxTxaqrHnU1EgZSJuLcbRvGdrBG1Mt1ET2tmBsyQLEXPZDksaxJmhYp54ZUCMcejsjskuaT",
  "key11": "55tNNwzoN8hWhC63TeK6j5dx6ekGbaFpTS1MPEnYBaNkRbSqBPrZvCACwFxSbAhhxA9nTeDv1zNEHm4ZRVsqtduj",
  "key12": "4iftqk5HffvrfkvN8WbgXqo7iyzsaipWVsjqsJpzbYdPLJbKikHfcgKZTBzpDBxSMzvaBjwitmNhm2Wjaw1LQ7Ur",
  "key13": "qKaDhvaPEeP95PgV24eUJgDf7b1cEjftuuLVtEhZCqujTmaj3uvsDyT4T8sqxVYoKLxVD6XkYfRnSuMEmq7hmdb",
  "key14": "SzU4qKyotXkVSJR1n5Pqy51A4ZHVcyMvwTyJu95ETZPhYZdGfgB8nDcKBkvpP3FuqYPc8xfmyeCEj3hEpqrASMX",
  "key15": "4dTT4G8D3oTCa1AkpWTBE22PETRchcL1BLwfyyCpevNbxvdDuALw8HgKhEaS5FCVYK9FuWYDBFssAJE5QfMgdrmw",
  "key16": "UjG3SifGQeDTFwvCcGbkKtYetBHjyNComGd5BV8dEJ3ByFPUdMLyzptQtLUScfsTYBcRH8b54SToNtXnG635gXu",
  "key17": "N5qU4mzjgtAPz2ZyRX6KDrJNbFjp6ttsAN1SM28sLwSa9BZpxhjt8sUVJwg4VXVvmiZdpeLk2xqHTJZjEaF1WYu",
  "key18": "67afkNQW3ye2GWL1CDcfpZ8hq4sjcomGPammoDJ2jrzpchAVF1EK56rxwBDTRfwmc9851NK3fLLnk4EigqrShaiC",
  "key19": "5YNfmGUt82URkDtGATzyPy92vQQHZmXQTAfAf3ChphZkE5Vg3tWzMUe7jxiwqxxUrwyQriBx7kRmstfvMzWLBP7S",
  "key20": "FgAnR75ELpWZk443t7PWf5LNrvQduqheNKEsTLcvSxBVUDcirmvoN27GQ2uVXJvcZssVaAerj74LcqnJ9Pjmatz",
  "key21": "jw6FB6hBpUyoJfap8NFSYPugvvNS5pGcCsvLJhEgHhTQJsJxoySanQktBjV9MM7Et9EwuhoimbC6tQGWSXiAmwi",
  "key22": "37YsugjtfAuqMXE6KagVhNtS5cu9A4f9ieQXkAWZtyhp2ttDQfn131sjTeP92pFzvAYWPMh5Rsj68FW8a9bB4wdG",
  "key23": "3Yz68EvSJg6V2KdaXokzr2kuzvVpvrgKbaZ8baBPRV8HGRXi5ucLE3NW3GW76hWyhzNVkdQV7AeMJcnXtdqWz441",
  "key24": "59sDYk1KmZEWNnsDHcpzdjDtHD5TzDFdRzZhozoRF7ycYUG1qULFFzo6z3bb7ZncuBYUsqEQChsT6fhbmnBKiwV",
  "key25": "58MVzKRD9kWv3bNjpeF8zuzGd2ygcar64HXAZbhcx8jwxVJXZw12Pi74kZTcBKw3x1mfwi4TKy91npHUfvEhpGVS",
  "key26": "2qAonPgxfFXE5xJYakghRtCuHoYKScr1t8DjQGEVf2v1UHbQvP4LSQ4nFyi7poHQ3Gwsz3xWY5YUpUsMwaRZhy6z",
  "key27": "5uR52vjwE6iiFFhXRikjxBbr2FQn7tWxSPgfR6dq49sQ7742p8S4hw2MrR4Ns65uyBQW3wH8KW9cxSgkADPypwBY",
  "key28": "3RzNLCUcWdgubjejU2sZ5s1VRv6dnu7v1cz7SdkkbM6nURQpvaBYCY8KSzsfpUXwsTyQSGC4yR9tWv36gp1A73pj",
  "key29": "2xPkVGWdaxManTPhPRSJotAMgxyWmzJVsmfWya31Ua3KzEVnCDjxDmn6UwPJ8eHLPGipwNpZyA8FtxNBzkEFCuGs",
  "key30": "2ByGZg3AJWayhFVJumnxSDYH3caddzkqZZP2qfRto8sqcpK6yD9UbUY82AH6q5EQ7w7p7ftCQMgwdXk3xxmjA22V",
  "key31": "2xXKB7gDSrbDJYAYwCntdFSCbYHsQpqkwTKoxfQioUashNoTD9kZ2MAAd83DS4bQeUhvSr1RwW6MPLtnkRLUnfrn",
  "key32": "3fexsNq4zNPEJ7ozkaPqwDtQECeGy6GpCd3TEhbRBMtjjRaBskcWcvwW9eun7FNELWs4EfvFNfr6woTvHiyyHfsn",
  "key33": "5utJLH9dRTnx6fDsYw8AhxroVboJWT7pKW91jni3BfgzVsiG4Kyvr1wDuERmJcVvLFbKinpoPsVwakidBtQ85ufb",
  "key34": "3xQ7DLQZfZ7HLoivAJRwNepBNSriyj4YFHs8GTHjxreFYyN8gBYFt2EmEqSWZ6HyJAHvrRfVCFWwWQpE3uxs5pM9",
  "key35": "554AxKAEyYfMJPW9tMrriJZAg8LaHMGsFmPQrkZqMjmyG35UzAHEQu8Hfyo9jP53CXr4sXbBddL38o1gRrrAcGHp",
  "key36": "GDMDtiEPFAthmhw9mTQy8QCURHpWYWHSFWtAFgwTtQKjsrCnRJ4c6BBokqxEwqrUY4KQrdNXaY88BummRJPC87E",
  "key37": "BPJ4iwmP3R668uaP75hG3bwUE5SFAPTqCFgrxc54ruzx8TbDyNKjdZvUBA6kSeqLajZ4wm4AH8qdTqnPKSLS5x7",
  "key38": "2xqzQTxF9FFhrgsNMBR23FEUKxCRoTF9iKVXURFaVsAr6uV5iRhrkkG1xfgJ3j8kijhUtPDckikTusT1AiYRPSUB",
  "key39": "di8dBXtsHBc5p9mjJSSDz4HaQQbULEgWoiocdExFGbPwm1f2aMMFcMV5DfujgyHq7CozwUBapdpwdVRs92zz2D3",
  "key40": "39oYR2jGkXYPJg3wiN6LcYaCX2YsFebEejuoPhZTe6QAcWm1Cfst8nseQSUyVLWwicNjbjMX8DxKzdepFuabfGfH",
  "key41": "2TqWAuvBx5DSSaWrhkG2DBKDqXaDKsvWHcVUw8Y8GujwcD3Gqo9MPqXU5LGnw8u6H4isrnd3QA2r5pkM65nhGxcB",
  "key42": "426EypiTQ5RWF9s4Qsv6124UMCPFP7dSKVrxrqRVWJNVP91YKEPNn1Qv2Vxg7cYBe3iTpd3Fqdx6sQjNQ4uYF978"
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
