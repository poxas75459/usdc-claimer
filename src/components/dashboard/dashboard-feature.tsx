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
    "28dsxDLqU6rHvz3UJaj9GG1rGkeG9GrTd9Pw8rg2RLCifXK9sWgyCq7QyHkzAxcPQJBBam19WpEH8AYpSHon4PHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "imUBZfmKKptyDAvEQFTWHyJ9AqVYVdtgPraD36bNzCVbjGibyihTpeYXhDRf3ZDVDt6PXDXrsVkR9iwFjAKLNQi",
  "key1": "32pZb9cNxVcFZJZaYcgWtQik8SqfGaGzxtNVHUHiksQqh5FM5kP8NCNgWxF9jorVhcJoTGxKskXJctDWKyYWofkA",
  "key2": "2MBmCgtTMQ7RMaJgaakbopE5P4i8FEshgeY56GNbSTGpBreM2qag7RwtPB7MKRRLbiTEqt5Vypngf6HeF3vdi1BK",
  "key3": "2gy9SK56BCCsBaXYMAiEJ412oaDoHKpXwM4zEyZUL5tBwUtzfecdMW2eXbJtdVbcQKwugYdUzHj9ce37fxUNjRxT",
  "key4": "3yfNSqyNYmR74w86xqrNtz7QF7HZC98PVbVbjFkjesXjM46a72T2dHMz8Cr6fzZNBF8B2Py5iHBepQNYjDpSEUpE",
  "key5": "2YndXGwsd6GZXEb6VpJiT6rkChChxRo5BXQMFRtLPfstrC2ne9b5vGD8KpSXSx5cCHWsAVF5zfEeo4HAuwGn7zyc",
  "key6": "2cTFrPauHoFdaTj5Y2bkzpf7tcXaCeHQAJVxVTqJUQrvPDK5pVNJ9PMshKwc4nk3b2u26QuoPdg7MKbEc1R5hmEX",
  "key7": "3VKWYGoLMZevgNJGXSzujKTsnBvfG7SBJu8qfeK82p4UCia8bryPN3RYMNG6pC1WqkhNSBUrxoTcutJYwu6jFCLi",
  "key8": "28w75ftPPsEGqWKHxAXfB1m5K2r11PjEa8yMQyz33Prj8nzmoSd2azcZcwf8WRYgDMttmKf4r35XFaLEGAM8jLG3",
  "key9": "4bF3ZDFMVqwsvyzdA9Hb46KhQJquj2Lw6KYzUiMSbwyv29HE92nUtES74Btkd9y251UStEexgSec4LBBJ6pTJnYZ",
  "key10": "4toptDMUG6vfCBg6zP4WH8Wn77FanNksKy7Zzv9AEx9AGV44bhDoFeZeRmTy1LeP2tvn1r1DXuN9EpnDbyT8fWo6",
  "key11": "3WukVbJsC42ooBRdPw3gRB6jNtFASPuDmXo82123Yp5g15yTwFfhieucvyQxNF6cf2WeJSmpfJMP7VM5PAxxKivT",
  "key12": "4dPRDGJeQkb5NuMM7VwTsFQPFZt7Cn2WsKNZWxs1kYLkMMR4Z2WZbEhYsXDLHkJ4PErERyZJHBdf4pxGKBEUFziX",
  "key13": "4UPXVJ8KAwp5vEH58iFXZWfw683nx7c5DBWvEzJtjT1BT9m9dfETwTPZS4VxE9g4icYNxFYBRi9d5mmsw6WX4zPf",
  "key14": "2U4FenXBHeuNcPWucbmYb7NqGKKy2DntTkkopWRYXrikki9C78RZqLgZmVztb8jFdwrctDh6UeHtqASjJAmPcmQm",
  "key15": "5wXLcUQDFSbJxXeSSYrtLDN47TtvdzqySUQnrTzoDGZdsZ2WL5tLKDRjr5uoyNrNQAbmg7qUfppFkPqGoiLQ5cFZ",
  "key16": "43LUmKUCC2BNEBugPhmEYKsJfDAKMwiJUs5pAGX8VZDKJ76UzASBfRwBQUAQ1FFeTHaHENFDEBsqfotW17cZJuBE",
  "key17": "3kuGP3K9MhrerSwecS6W2dxDY2ffBSGitRVkFKDXCaHeGKppYxkVuob4sWtWXj7VWSXq7MviButcfPwFENDu7gRh",
  "key18": "3Bh9XnJLAKKvuFEGpT1r9TZgsmVk8CpNoEP755dnEemnbcf16V86kycvcuyZMvwY8ZCsxycapJf8aMDTUv3K27mK",
  "key19": "4kCyynSDAmraRtbjnE3Gi5VAE3ffp4aGJe9qP285c8LMFVrgWwP2UEG3cKyhbcxPgSziqLn9ZCGfWLq1PShjPHUa",
  "key20": "2radDJ9BfTuBLcZC6DD54k7Umcho88QSq5bgtXSXha4WxVLhaV25ZoacWW6oUsdKQSthw54bhtuXzhPJhontCy9z",
  "key21": "3hrMqjAY78e4vZhrdNSC4GCYYNbEFKgfrJ5EcfarZBZfcbcrUf8aGo8hz3asu53UBBGnp649w5bqV59tgSXucr3K",
  "key22": "352Xh9wuwwCbSms2JDj8rLaisTQHjMGt5wAiboJJS8DkYFo6HRr9epV6E8MJCtUjMfnoE8oQnPTJg13Y1BpbrRbH",
  "key23": "4fKsFz5kqgjXafzkSHC1ZMiSoo71G9JfhwED5QT2V56VvU3DE2qyonGknMavNryVqC4oEq16bFPSso7fww5j9e5V",
  "key24": "2DMozAYiy5D8CTBpVcBtdKiWu114P4o4gKYvPxf9MWqHDJEzkqa7caJSUBLMBNMGVWesvjie3u8Paa3tUx7cUbn4",
  "key25": "5KNHR6AZzFYFQJ7fxxHjFvRwLDuN55TzU8G7HWSdHbRR547Fk4jvMMDF9teVLP1KE7XnFZuJoTWsQ5vvGmSHJUQC",
  "key26": "2G7uCWQ1sovyKUqJmb14GKZgmtr69kuFpmueoP7EEpETmU99gXr6pRbaQvCYZCzkMBukirgut65hEFqED3zg65E",
  "key27": "5aT3SdE1kGEdvx18CPexU3iK3rSWfKnRFBzBo38q5G3YBX2fzQJimVUDD35zmYcrPaKBWLzTxfeH5vytjhgnZCZo"
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
