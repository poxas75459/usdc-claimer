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
    "3nE3L4CFfhwmUmP4dWw3PYqsvYd5YYQca3LN99akyBdo3ZFXV3ocUr3uTJXkHrYkhAhoVGyPT6hwLJA1yRZLTKQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qQN4fsRTrNMkZzmiHdpkHbP5CFMDDRoNc7rWEcZP9vmsqu4HTHu52GkfdEiyHAnocZLyCyJvFA9N7H8jJ9Ug8qa",
  "key1": "MtsfWXAALBmkWn3iFYhjK55j5knb2i18VsLuxAED33EpFTG522UvL1k9CaEBMn6eBN91JsDME7qJqjtdaRHSZ8Z",
  "key2": "4F7ysPqYqp1EMfCyUV6sTicy5KthBRQe7fhPfuvm2wGZodNqLPvwx4TkCs9A2KmMDRP94fipzAZU1SQHWFFBDNoh",
  "key3": "4WJ6ZmN72LWEV6CyXeaoPTAYvE9ei46Se99u9w2WefrFwi1ghzBvC7DUGm7FPdVTtN2jUyCwN684EGuQhqMcPDdK",
  "key4": "Vnwy8qk2MMLguep1ruzX9TE2sUfKuv9i1bAkts3L7Xqeb6bSKgrnXCJyux38x9ze7Pzi6tsH8d8FnB5PPUuLgN5",
  "key5": "3WVTKxLMUoAY4nirJ9xMqXigKf9Gnn2HtPRhx9E3HTzJscnzRhF9yxdrU1avPB7ZEzRSJBL8qKVNRVZUNmyiZgDW",
  "key6": "2swwYHnbrUXB9dWLfGZaBgkn4FBTMrmveDGqRwQ47vZsiyqtrbizCea86AxTVbok7Jf2PvsoW1Aow2jjDhBKHH2n",
  "key7": "7X1HFPNmtXb9gMceWYmmgxU5HFpLdtxRW2j7nJ7UEFjoY3Js89xX73BsaBGvBcMD345whdsKWynxXZfS9UNkNhw",
  "key8": "45tvJgiYxP3ooR9vka6q1Hc9Vvri6ugMYhDaCaR3PTxSCeESbhLZb4ZrmGafkiSDjVUWDPPnZKJC1PEEtpGEQD68",
  "key9": "395PwZ3sUMPS2HbqJU96pMk3GEQXSMyjfXpCr5ViF7NahVnsqiu1J73aPiWacLmyayWedWEqUGwgMTzoegmBWzAe",
  "key10": "31QPcKvPJ7jkt14QpmGdjNPcGH9172Kh2UmUghyT3yRnQBrnmcRQn4j9HnTidf37LQTdY82G4XDUp4WZTRyXgdgU",
  "key11": "4VGT6YEwW7ibKHWPLiYC7PxuLL3zttUfqnsgkZU35Rj7MAwXgKC9GwDc8zwkEs69wuSswiVdJyxA7DN7f2TZNaJW",
  "key12": "5QkN7a3xEYQ61WpVGsNi78W6QfFHu5ECh1BMDNe2pHwEqQCMCbvSREr9XmUH869YiZS9D99JmDYurmgKmcjSn6dN",
  "key13": "58LoLzuxEdotVHnBPKoctwPVYBeSzFRyDn6U7LqSMu5FZmBk7CS4MjTk31U62QdDxNcN7JWEp3aqU1QWcrYMBgyD",
  "key14": "5j5pX4Z3Dg6FwAugAWkXKQipwYQrtcmW2BXdeVqfHPrrJf9mcV9Qxg3Y8KzVSk7dVqY18rwoJAYwwWYhYSLjYeug",
  "key15": "5EaMRaBa3Ad9VVE3veKo2wcakUBpFe8AscyqYtsttvx7vXQijMexYzdc1iW9jKz4G7mz1Qj1dpXoZCrmg7Jt5vMZ",
  "key16": "NejDLZ5s2NGmfVZM8qjPo2WVabJdMHUP4P6ijjMVTzoi4cYWHgipdpeRzA1PyUoEwCdHXkk6jqmWNma4F9WiJ5j",
  "key17": "5hzpp7uT5x53BQ9EkyrPHPKmbUbFS43BjwGw9HdD3yrHkG23jUMZky3x7qz1VTPPHV8tEvKp6oKUAk9AjtpNmreF",
  "key18": "5aMiH49VVrNfhcEqeV2qAk951uX3Xjkn6tjNWFZ1JgsTekG9rBWs2MiEpnvEnu4WnfUjzntEU7FAaKvyugr1SyrP",
  "key19": "2seNZAjgZCXMSTnpetXncPfwmtK6G8UoA7fJVC7HwDRFq7v6ZjafRNYMAyWJGVLT7NsuDvhMD1SJ54TsuduwutER",
  "key20": "5X36iUuodtLQnuE88mtGh4BtkL4EXfPjdKCBRovkx24FavfAmfXWLoY9Rt5XVWJ7A8K3Z1vPQMEVPJ23GFD863Ua",
  "key21": "4mah3TS9Ax8EfhLo7shf5p8DRrFAs5uR2WiBguWUVU5S1X6MZsLicAzzFi8rX4xBJc84GNXFYoAWBLpacYBmBVXJ",
  "key22": "39bHxG4ACD9NJujBcLwgzKeSbanyBgSoWGVjmWsm5usQSe1JVF4vF3XjRmvUC843kU84FRdQQfZQvtNyoz8S9M6U",
  "key23": "2nM6oSeo8GwGstBDZd1YSPji9H4RJoCFPc9pjWhAhmp8LghUzDw3yUFnLBawiXRMfU65NsGxrmtL7GZvro7a6tni",
  "key24": "4iXcC5v7qewpFHMPApWZjqDEUSGGqYSZGJm6ZYQNu2oLRsCPkdegaVEnkA7uB9ip4SQCGrMZLf1HvxwDhtE23r6y",
  "key25": "3GztnACemxqbq1HNwzKdr8vSXawg9LNgj3CtTBxLb4NQyttdR9PVDsZ53zrhB6v2xZ1RpXB5SQFwPo3DwLXL5WG1",
  "key26": "51z8ADmZtb2gbZ5QXcSZxjVxEYmBb2QTDA4WSeFX2XcUb86JVijViunfaQjyLMbYHDSrwUiJE8oKwCUdtKvZPHtG",
  "key27": "4NedgPE4FSSRTHqcyEBeAL9D6ZGxuLjARuqXQ26JfKzvRnhFxs2SdCd4MsEUYCC9r1tdBSxgqt7tKTCutegkAg9v",
  "key28": "eUE2ZJsMyBVcqVpD8qE9YGfYcAS2Q2U9CV8uXNHyDpkYWNsc21Kkddt6cPUmrXVCdmHJhG2DnkYsP19sZAmgAEx",
  "key29": "4UR2AFJNGA1ZoNEiUoXPG1tN6Qq9BMiQhmkBWvGnYX3Um56dxbhTgdMcxWHCw7WYYD7Df8xTw3nS9wS13jopLKyx",
  "key30": "2qfmnGCU4UVLBsmneXmWtHswqJioTiaTbn6knyJKnxbJjrMbHg2JdaEn27Axvcox3GJgkXi8kVm9HKRUrhCpkojF",
  "key31": "3DXRodsio5j8oprd4zyBDs7L3uPfBcAVrF9TkgVuEud8rMVFeJoKseKwZE5sxGuMN58vjCC3raYwF4W2nQ7t9J9R",
  "key32": "5EjxtyowUgnC3i39Lb7AKeUrAqgZUWQQv9x7HZRvHzuXHFqsjuvtP2Ta2iVUi2bRakni8qqucQ8fQj6QgvgLxHGj",
  "key33": "2jDsWmiAq4R4M8Av6pL6NTE3H35r2utSiNA3M8Fny2sJJwwbUratLUTSb7S9EXBSUNoZYDPM3mMCFLXkk7gN3uDt",
  "key34": "5YAoUrRAmCrwnPc6toS9c3jyfpL4uY4GjfTY4NcQRnHYZyvuKbw5wKDnmKrRzBUas3uMstqvrSrG5eFJyyHpc5HX"
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
