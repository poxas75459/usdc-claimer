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
    "4xG8hCfNCEpVDFAo38naXxgAW4x1UGiLY5LoJUZ8mEpgcM4igR8PaWzzaU8Me5ZjJaCEje8vtPSBwuHDWrzK8XZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KogSDoB45LgcmAy2A79UD5QSMettyyMBEvvwMrgzgTXtt7eCUzHmHsRkTenuD6Dx37W7zbJY2AgBTXYpiLakrXa",
  "key1": "5EQkhFyRqjkggiks2fm9uCFp9YQXSvSWvXgnX3ydwUrSyxySbPXStiYqX256xTaVAmUgPCT4Kn8gPEQXpwcCVSE4",
  "key2": "4heS94y1v32EdZ26qNjVvoDpcKU54LzM8jrpnhGho4XyrfAqy8CBB3GrNFWPq35XqWhH216Fie6PX5KHH6vktHQB",
  "key3": "5XcrX6cij86xPzQQFC3MaeQNLd1ah3tVSyS6GeFy9rGNK1bkvgJPaXobfLfk9wPPMZGPE49KxyGKQNTWHzUqwANN",
  "key4": "2nsCTfj4YiTK7cu7Mr5gWNaJxeJTiSm4R6SoArrsf1eH6HqzACybxvFZ1yGBjuizMQqnqjj4keyQK65AwkeYY5Xh",
  "key5": "5utbXMzMiqvBjfce5jxapF1kJntKJpXz47me5yWMdjYkMyrrFrY5D9ZLKnsvZBhReDWiUfUrn6pisQEfN2d4oi8N",
  "key6": "4mUQWTSvAJbmXF3ZHi1Up6M28M8kFYzaWLqffJ79wyj9A3SWsfKxBtvRKR4b4kLaEMdgJPsdsutziAEQP9uqnycj",
  "key7": "5e8qFCSCMm42txHy2awUXCKMiwuc7uUsjLxhbfzcQ5AP84vvJbcshcYYnJnqxP3W4ibc3v11UaGAzoABwx4ZKM2J",
  "key8": "23YbiFmBpPT5UYtQpFAw1BGbhixm1FNbEysTiJ2ghLDGnXsz2g6pRg5JvdXreNQNDnJpjVL9bYS9XsmdSLb9q9tF",
  "key9": "5BvgBBdsnNj7NPwHKhByCZamBhyzZvRBbpf9oM6q4wFTJv7YzQf6ka1caeuysLeCE9VZ9kkCJSTfcK5VREKvtZdS",
  "key10": "2SLqWoa12GvsycFqFeZDfS5RgdcpEM28RSEgnyvbGss7jM72y6pApWQvBZzrgPWAom5HBBLqhj1DP5mqhSKPwH7f",
  "key11": "2Zod3E1meQwxDPkar5QXz1SUr2CwKF9CoryyaEngNkfh7tet78csG8x5c27qzJrLZLx34taz4tysmKVNf8rAC4bu",
  "key12": "3ZDpaey9w3SkkcRani5WBWzJMyfXrfVpbFfP72VrHqtNeNLckMVwYZBNJCAtE9qWSVX25qFxguUzP6BV74rkgzhf",
  "key13": "5JfQ6gWwXMoJ4jQ1amnW73KW7Uxw8eBMcMzyEwECBJCYotVke2Efr51jd3bpJUYJPRhNzJyPg37WBNPbvvaEXrZF",
  "key14": "KzXRSKkUDBoSz2PdfuT2KEjnYXXDMBydd8zgW6BkfmbKUWKvgjwmBguQgDYMNGRnxEb3FxrFMdqJcvkuTsdiLS2",
  "key15": "2EUKfjyRbaNa4eqnJzrsPuMak1quX6VRLoM4CYTneMVo3WpmkxTFtYYtUR8xziXk4j4AcNPdufVy4ToQMzzHA75N",
  "key16": "jxWpcvvCMKq4NrApB91rLoSauFdzHZehhm3PFyhARR7fEuBDkkMtsw7LxYXZC5iKeeRs6pDxV8xntrc1jjc9Mb2",
  "key17": "53XopQNDkCSLfhUt5JnSjQz7HyDDDkg3h7tvAeXSJFBdkHitDLR3zWwZVWYTRZsWELYGYvDjj8dazgNmXeSJZEj3",
  "key18": "kjND151xN9CyggDWjMLFnfUPwBupH17tCkuFSjFLVUBvsWf8kLvpQnLs8acCWKHJsGmtg7nUxu1bn13K7KRMrC5",
  "key19": "5Yan15BKcH4U2s4kkh3s99Ndv123f6jGaqJWa8zq1gQs6TbyVxi4zgdCws2CaYU8w6vY2Ei5TKg6WSmve5BFVeL",
  "key20": "53gwDrQTWBnoAs283Ywp35NVMfUXvDXnPyd2K4ZaNmwDDz3ZEsQ4S9FTfU14eZSZTTanQBGfCsWm6m8heZprfQmP",
  "key21": "DTCfQnr9H4auraRBxoR63mdr49dxoKm2LgzDKoKE2pwpMj5f1MZanjMBwqW8cAe6ze8SzDL1gfuee3wKjYD9YKs",
  "key22": "WvVW4iFmB61wgLEC3ZSnWL4ruDUVKur9tSrh4WJ1eHtCfWpHLDrPhBq6HAkAq1sEVWkGmtrCdQRUtDkUYsE28P5",
  "key23": "4u2SQzw6VFRZpN5hzma6rvNZTyhsZBPQHQdB7yA7DbLDj4S3JkMSSMhhXkMs7EPdnSPiV6xrq2EyRNndFRfugQYb",
  "key24": "2oUpLGtBsJEDGpAfcTVezX5mgp6PbaW6LVrH7gsHfXXdHAkpYHoU3i5np8pmwPFdWK69SMwkwrAvRT88cMy1ULht",
  "key25": "553zUWRqKnAuHWFLEtutx5WwyMadgVkjf1N7HudPfBFhiUkVZPrr1RfqUKWsJpeGMas4RziyDhkgitvoQdz2gVW9",
  "key26": "2a9bPJNvCqrJP7KhSGGResHjoecUU3UB9fbNaA3M4apgLEekP8uG4ZbBnrr4HeGhQfQkNdWHCwy6q5xywEDQ5jhK",
  "key27": "m6Q8KBG7w2nEZJTYJPfVdGCu2hxq9Ks5GZdTt13xa6g1bxSVqYCMdA3Xbf7bmtMLwkNMRjN1FQEpkmbe8VwtTro",
  "key28": "59ZCgRyxzwNnBB4R2D9M2yuPYSqjxbYWsxhtFAZKdABdzf6zG1Z6WJ8yBZQmGRQvkRJBQRVdYdaEN6KkqGDrg7D3",
  "key29": "2kqpc3PpJWGRkUN9qPvGas5tbXipCTiPYeT7xxwQbT6n7PBUDC3M3fD5aUKWYk5HB74hknug1unrxsM76wzaVR4e",
  "key30": "QZ1L4XduDFms9cLG8u9UJj3xN4HEeAdXj8NyV45wqkwzQfeFbv32i43KWqW1fWb1mhAUkV6a6cpXEMJ3hMQppih",
  "key31": "2RT75RHdT5ekY9adVAVZBSLvfBxUZddihF9iD8gvg2rK3dh83KadsRYSGveHntmcLiemKcLSuYhSQB1DUkJSt51g"
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
