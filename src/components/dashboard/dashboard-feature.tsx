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
    "46io8zwwdTWBhdRQtjiuHQoitN1VPDBwvq76cncS53qqKiaK4ot5egrqXRMNeix6MiV6UzxaGVy7W13EfF4EdWRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DfiRHGuaY6ndJD86Mx8vrGJk3quqzKV5sScFm1eZhHmDmQ9DQVoudQgbkhfU2rQ7RyZz3YYH578V3DhhShu2DCw",
  "key1": "5UwZdf72JnM5AcHKwAySaMuQBCGoG3q7zesxb5dtwU1cTt1yjSNN7wGjSmBFScWgtmhr1SUXAyqLNtussAKwHXu6",
  "key2": "5za61qosAj77JWq5drL2XnTrfqR5vMRNPq5V7t3nFGxD5muef4yrKrqdtfivqMpL2tSEU2bTofE7UdmzB5wGg4EQ",
  "key3": "3g9YfwcqHii88Z7dPMau4g25CWmZiSWFaWsCHmA7n4CR7YDBLhV9NLpMkepLdk7gerShw7hfaXG3WwKVMaTdKF6X",
  "key4": "4kvbJMXQ61sawFu4QB3km3QVybXikEhsTXifiihinF192SZePwkDj5TDWD1xSe6KcBQyZFBgmYYqwpzs5yaBFuHr",
  "key5": "4bHgWDsoJPg5qsu4sYBGq3eWTwbdU4kD4iZ7GnKWSTDA5vPrXinFEu49VE3mDfcNvaBgthTGnBQv77vQJaq1QLRv",
  "key6": "3e7v4LEMSqffYgBzMz5squkhzHqW689zYgKzjhV3TqLYFMsMiVjaC53adZwaFBFz6xUX99FFhcseVMGojkMWmXq8",
  "key7": "3ZeWR5trvLbkwBesyKjNopt7ZRieEfkM7yE5KFMEPfiLGNL7MRJa9PxVZqRkfTyyK253X3E4CACuQoLCJ6yD6gg8",
  "key8": "2nq62bpBRN3ht24yLvePhvRqSQJsg7zBh6UeVCisK7eyWQPEcpEsbMy7uKjuf2R7oWEEAkNxi23tGm3qEw8Pnj5t",
  "key9": "48jwvAgB49ctYWeM4yYgfRZWtVW6SVPGt8Y7mfPHwir2HcVSw9FFohGwWdBZpDktAd81rMdKaVs3T7ngFbiPzJk2",
  "key10": "5sEzSXXvtwqnchZNN47eYbPJyP9mmeCFumB4KzoDatpFMMRsvzTNocdGscU5y51FYpiapzcVEqs8UCSwueq1KvSp",
  "key11": "3xWfDUiTp6td5uJczdNHcycupmznA7AU8t144nLkqrHUryET9yR9TE7idQ7PeAFApG5zeUaSxcUaf3q858fcyPBW",
  "key12": "4h6oX8cKr7vr2D7tXn63jSGorhkU3ab854aWaBKJXKvHcHEsP4onmp99hdNMzTodac4L2uocimY2xFVX32b1GvzK",
  "key13": "2sx2z19qk5rprLCKYz8pi6JitpsJyL3CFVzpp8sMCsEuq5MbJs7yxWCYuWUpwuEzZS4SiocSazwvwjRn9ppqTNXJ",
  "key14": "56c9U4kBQhx8XMfMzPQdbrvDmEFARBezRY78RdoFsFMs5Ccgm6NYampcyHeGBzPeigUE74vbzDhHjX9n78UFndj6",
  "key15": "35FcYGZzCH1wLJ8URMh7AAmDhyhmf88psNAfxcLTPZiUbiYoA3wQFyoGToLPZp1bhetPMhykvAn96A9oU1HegYs7",
  "key16": "5SsSMeezBqbysp7buybSaAwkeGAEvBfmxGiAW5ntXUD3geGHpwfTxM65Kc4LuvfLyyU12pSq1vfTskfcKTCZE4nT",
  "key17": "2h77DxHLnuRU6YmisD3QnykanfrnZoqXTXdEUZFtUkvzWexuUTqgFJUbQT2Ku8JqQSbZ6NzHqvrLtSh8Dv5ih4B",
  "key18": "dzy5BkkTpXhAMHxdnUaMzEMJwUT5pJgb4LrNRBEMafek7bJ9aJy6hyR4op5yGCMy6JgvxDJEWURdyLHiTebk7Cn",
  "key19": "GACFFNVZwNVTkbMEJnsN3tr1EEb5YLUQTvw8P2vXfwJ5gDwUbnLy65kBHLvJvJ1zh97iDKrRzGvxLPb83Z9PmEJ",
  "key20": "5Xp3kdDk2cr1Lbcckx8Wn3m8P5R4akGjJzg2rQa1DiQudhvf3e5SyVqWjQNxhQ79HHePEhm4HbqwRBQyC5mgTxSb",
  "key21": "41CuHLYJWZz9hsV274kvstCY7dLtMfQn57V7eLoxCSXk7jCfnxDtW9N13m1ajKf66DbkhDA1mc1VULfDF7XGMxYh",
  "key22": "4b6AEi1LHUwFmSM58RYPL4HSfRmYDbnvhMME9oXErmHXhMkKBYX3GEFtXxKvYkjS2UZ7RxWo8VcqR592TCp56Nto",
  "key23": "5xx3kJV2RChj7ymTS5BwtovYGj36q9oFvYwoDGN4fhX7DyA1z9BpMsMVoyogRwbvVmFRRmVMycHWuvsTuUhJ6Tqd",
  "key24": "5j8Pz53qsnv23w3kB1MS7jDNC3WCwkN2B2HbL6Q989E4otCBHemf9rrdhTEt5Tx6DrwQFtn4N9TyaVcu9WoaV8mo",
  "key25": "63aGHai383feDqkExF3fFU3P9crLBztR1YpPti6hdkTYtir6dA7QAztt4jZFQXCgMgWENYFyMKpvaYguuf1XXnZA"
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
