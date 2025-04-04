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
    "4z56TdSRwJhtC2vmRMibpU752Gg1Jfy9fiowXCMxYhAxzcbVi8BVcAiDLTUUS17dFP47bmsqKqvQBEmgQzU5fAhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m4axMVoTVh7iymhpnxMw43EYP3NaV2DKQcScUHzYskTpu7xAWPfkjdb58DQZAfhYr7SofZttJWsRJqr6cfgdkgr",
  "key1": "2twrAhgXrTaUgi4eyBULcF6hY2gms9Crxw5pzd79LUyJkNBbpA9bk9RhHrFDRW9i2V8X2ZK2Prra3RSczPXm69E2",
  "key2": "3Rdez5WFcDTSquATozwti7ChPtcGRSyEZXNwB8W7cMosdaAfczTGw9VBoS2dPcxJeZcnSzZWSUCNskVEqX6BKx6e",
  "key3": "ykBwW6JNAQktucxMNHEg7tiF5wYEfKSr5v2QkTHmYzELM32WGtnnABe7SMgE91TJP6UfmcMDCFy2wwhEgC9kRqm",
  "key4": "5hgptEPV8Gi5jpoDRBryrgivyjvvqXC9EH95U7N9Vs3ThixVCHTAR5SMFHkwECLE4TS3fFuu1E9Uy52nAySgFptG",
  "key5": "5DTyURjFiaun1z1bp4MgkJqzniPu4Vrz5L33auiFBpFR3umPAjTomsD8umZ1z9RLH64gSccn2TXxVEQFMD6JPFed",
  "key6": "52Gnxorfu6zDsugQEcMsXPfwMgxy6wipzRL9odWDcvYBPAQn8W4yQ6LyePmDYUiehMHyy9pvhLNKK4pYfzPLSDxi",
  "key7": "xzUeU1oDB4WpjtcbjVbUHLcjgPsg5u4qzsAvsULTi8vNagDCwjXcsH8UZFd58F9LV4np1pMmc1wnjBGCyyzqXy6",
  "key8": "2WRv7dNMVG7xQogUmHPiMCnkN5TmFWZgHn5YCvkzxq2GaWJEPzcBqydaMzL2QqJQHwMrFa8fibg6A6WQs9gBoz1P",
  "key9": "5jWJBfMyL1Kjc5v1bpXW8rzUAuSbTkPpd7RGyEevBSLask5BcQuqqE2hxgJz4pzdq5ZBUgMtTUsxKzshECnNjvJS",
  "key10": "5NwCRjsV7zYk6Cj5xNqKCXiYPNQjP6LhPe5a3cmTgF7j4rYED2kBtMv7oJxkbRZ6a4VseNAqxKmrjETD9LSW7fna",
  "key11": "cQyXru2NWs1jdrTP88Es5XyWgE8MKUibV1LZoCXYmXicKHexS8r6CdAht1gLX1LDsnsvz9SWsGosrBC8tPdXeuy",
  "key12": "2F3V8AsVnFzVBB2Yxs2bbEudYnq89nVoBVWiKyvaSew18L7Q9WfG6ikuR52fXAmacY6pHzuV4dzbP1wQp6un7yKi",
  "key13": "sQzoXUzfpcztdQjDHmLS2k6RjeaXeh6eeniC7bEBhkgGzfV4vupAibEKNQAy4B1xzGzwbqoe9FkPSmqDGZv4iZ4",
  "key14": "4kU1eARGPACi4CjCeB6FPfy6XL8i1gERtbDUKVuErpmbKibUAvJBETiWKjRoFU1WFZq6YiEuK4porV5h6zxPLEGo",
  "key15": "48y7US6Em7bM1vppWYgp75vLZGh986DMvpoqViD16VgNgG772LtvMvRNG9mj7rLNWU746oxpkj83zBCHpGNgmGXV",
  "key16": "2LRjyVnmyh5C79PWTdaYGQYhMqVTwCkwrPkT5TGpRKBLABEcKeotrBvTNQtnYz3ExSQEaymJqkcWaE6Q53r4Kc15",
  "key17": "pJPCKwMYFNjrJ9rWvyFSv8SMvXS221jht1yvjpouwKHmdq7WPmHThnY5LJdVM8VhJbeMrpw2h3P4m2RykoPL8Tn",
  "key18": "31fAqiU3scWbBArkfsw4HdZARg3MjBm4yCRBHvTpYd7kmbxUN43w6Y1H2TRTkyQcW5JcUcQp5F9zw4fP5SEP41wv",
  "key19": "2KTuDjxAxxqERY78X8nbk6ZyeSj2o4sJaPGE9TNwP2Df8KLb2au41e3Gh1mMyYahm117fqTbM8cGuHbVSJvMGVZZ",
  "key20": "5MmsUtBk4uuWzkWa3WvYdgvkbsZHyfLPnkuUSJpDgGXfQdUfxJjaXDXQadSpLPEzMDPg9GPfQAKHQWh3t8DVqeAY",
  "key21": "3LwcHmn5sj4NzMSB8VQFr8B4bKPwaYTyQBHgnDPfbcxX5pjsTUaxnjWfEjAspY5GoUowdzenyT5T8PwGJsU3jgDC",
  "key22": "4U3cDqWG3zpUVpdU7ouJaMrzQdg8GyhtTPKfcHDmF8u17FTckXpV49UrRYtpoqrkoiNw7eCTc4KB4GZuEuPXPaGy",
  "key23": "onqYa4Tir4AATPSZG8N8Tph3bdGAJiaCAZ7pxhvUaxHFaVuSkVv8aqFVWApsoZfdQFPw93B7RYemo92htfuK4MC",
  "key24": "2M8JmjuUmbDX8NMGfWW3mLZaTm98nUGeEqhAFneppgkq7nNc5zgBGhVnodEAHVMSu5YQfDdTE7hvUmKUhciSVsqL",
  "key25": "Z6WZA7518A3WW2uXyhii85oYv2UcsqiV2Bmicb3RKEBWTkyMAt8qbc3ARJk52W8FEP6Z1d79Dj2H2LY1btAkoxb",
  "key26": "3dZ6RpAz3gcjACqDeU46mErLawYZWwL9NmTdBr5aMKDYkpH59mWT2SgtmjpKshgcz576xC8hSa5aLMkK8CgbXZ7X",
  "key27": "2wRYViGfAeZUEvEtxAauAJ1do3ePsSdRkqKfK3f3thKPEAVr7rBcTs23JdruYydWXCKgcbnP7cWrdBfcFVrvoa1b",
  "key28": "5E5KCkz4fVTSP5eXgzGnyrceLwX2PuffgPQUSBaqW9dmFhbLcFr26QxeeTqc7jAAsZ3VHvAAJ1XJf6LdhfM5S9kx",
  "key29": "cRB7G68iFdmZN3SwPf88WraDhoH8DnyKxB1UF2kH4aWEdqWYAQaonjLF3JRHhpGkZB4UX7Tn7MowyPr882veYwv",
  "key30": "66fcMjFsUp788AHz72DuprNHzVzhKoQSCnjoL38QVChiGqSriU4SXmgakecboVxyNukcLswDJHN23ymGamuzUbE5",
  "key31": "4Tf29CcXPrgQRp3wNfFivk7k5eUhnaXsf4kfvMJx42dLVvpXTrrm46vdxiE15Lrr44qVzRhLRMDnV2okU7KTU1AL",
  "key32": "D1GCdT5VVvWzzJks14vNDwpRgrS2syA5izuqX2ZfwNphQaTeabT8ceEedy8qa5MzBAnNHSdnZVGoLu1S59FDXzz",
  "key33": "tj4yEhVDeoVBDbxewewmYYjiB1fzVmYGSPaKBCvevqoe8zhSMqaT4UtEa9kHbRsDFH4eES7iwvR7P5faKt4Ts7A",
  "key34": "q3YWf4N1xAXuKdPPoJ1z5D1r3tG2pjgaXAermvbmtvWTpKAhyWd3BhxH1pG1TGkDNTkW9VUYeZfeVs9iN9igzDz"
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
