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
    "5WBZh4WziYgKWeDJ9RiTj9GWSVYfdNBibYZ8K6NiE2Qr8Nm9ZhxwF4p8NCk1nwN3U1cwudkM3BRJ5EEDKqf72ES4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jQuWyA8sgy2jcvgd5JTeMR685xpAifY2KE9gFoPsykjA6k4rZoFs5adJrNQUG7HVv71d4rH2Kp6E9SGovPzkn2G",
  "key1": "5qnNap7E9JJ6R2ruiyeRyjh5mJxeia3nKnBhAu6JAoR7DunYcGjrPVTBV9m7kWMPZtiTyYbgxP8CYTH5MZj6YTEx",
  "key2": "4hFsrKrgTdvGp6A93AFmptR7mRpB2Xx1cgzjYrNZwkz6KAizND5KB6rnRth9FEsRMEnDZHHhKzybB4zuX1KRi7he",
  "key3": "53SHKHuaPPqrnw3EjtSEji7CNwfRk9h88gsgzBb7NM5rUjv3QwBvB2kpLFfXgeFo6sdQ3o1wozCXJubKz959i3rA",
  "key4": "2b1jCveqVLexvWqaxL8w55AiBaiUKzj8Ssa1SGaycAVf23CftdX5gDEteHfKmS8rmLVJU8oewxgqk8NkdvCEmnmj",
  "key5": "29AToEKjcJHyi4oTHhgFy87qGzk58eE52YH1VLcDEgSBy5PKPhsqoQF9kVwpNcdSBmyfa1ZBbDvS4LhtUXRMpAwz",
  "key6": "HVNHveZzAWEWNFMmvavivy4gHGAU1dXqXo66JYjhYBkxSHoARiW15bmDhtbxvWfLEYnSipuRshWptxat8uXYu3J",
  "key7": "5USLqKa16Yoo2g6LMAj1iGm3RHTam4JbmL1RwULMMS9Z7d547Hh93rLmtnqgzLLKw3rb6PmRnUgfAtsufcejnsJf",
  "key8": "2kUW8ZGHCG5wSVe51sRygXJ5atwmJognSLJnFcHYeHKxmnLR8aVeN63gHaZF9miwf2bkXc4FywjxuyMYWJZVTsZe",
  "key9": "42win1VQdXAMkFqTgwrBPADvHbhNPGeWQXigLZvVJKd2CqNMnLGYz5emfsjsT6qVMQNrXBpKgxWgtvr1K5CPeEU5",
  "key10": "3qeNhyxm76FVUfAQZNQpirjHvM9Yw1xM33pmXkaDoe3Goz7EddB2XuTxQ7gnyYnk11BNkJBmz7Ch7BwgetayBi6i",
  "key11": "2PyKjhw3Rw92SboVSoDJefjxmMiXgJW82CDSwVkoNKAUZBsFbxct3sTQd6JBiMh1bdQfbFU3ecLiE4DBiF4389Yr",
  "key12": "3CPvvX4o3cRGpokELDjGLA4y3sC8qY3TbLyxG1y4V4hP76qK6CU2t3v2Ze1ix37SuWtH8HCcHGSnNLojq9LjMEyF",
  "key13": "55SBRCaTaoBQ6BhuK5KtN3g2e8g9aANeatg9zmfCPntMDE2vzT1L4DXAYGxpnZm3usP4u78W9wnK89ZCrUVZjSc3",
  "key14": "3dTKdTJAq8Yjsnt4e2eT9mykviaNGJ7YnjqcnXCZd4QkxoSWZhNNZyjLmALfzsU7Gt65xQDcPebhsWsrJBN4Nk3J",
  "key15": "4Qm4pnApCt35d67h3tiokWrmBcjrVgLo7PDgDhKUaGXXXUaMJ1ytwvot5GbMUGCmKESz7DC1ytGqspHMJxd8FQpg",
  "key16": "KR6JESTy4om6DFcTghrB6VvoaEtsZpLAbru6QRptQsSrkPmrMdZ4MWkek8sUkaR9qtbjes9N1P6nR8ySUn9SuY5",
  "key17": "53rgR1J8khEY9XiK7WcUyRupXpctBQp4DHLthQqJe4f3YBjqy7jFsd955nuU1EmzNEq2DVM4DBSauuWLRjXr2pYt",
  "key18": "2TERhXf52sGG88P6bqLQs9brfUapDHTKgNzA82Kxq5okrZB8k6wiZLjCWFsspH6XzAx1KGLcCXFr27Spw9R7o8Te",
  "key19": "3REqRY9pc94U9En9X5S3jbHuevUvbRoGH8TFkq587YcVcH2juskgEGfwmwFGoE4KeDAnQXDfbuhBZGgehryp488u",
  "key20": "2WYEDxfNzoHF7fKkrFaTtbHDPF2W3xkpPiR3zUivtMrwFN5VKRVPKq9XEEdk1kneeDgAnQd9qZdh39UD5QGeKUyp",
  "key21": "x8ypGT3Ht18PtBfAQfTZMUBPqX8JvimE9m8qK84oiZX3ftzndCiSbenJwtAVeeu82Sd5mHNxYritgN9GhUsjJ2r",
  "key22": "4ex1MiXcwNf1BiHYSRUFM7tpK5G3cEfP7Fe3hYBY5y1svs5NmEHsxByB3ew1BhDByEZ3wdXhuJvT1SaBXNtTkoPw",
  "key23": "5FXRG4KJPRtc4YKMUzwHiePJhiNCnob5wcWPmwTMWaM4DNTH9R73fmdW2DViLyWRzJBDT6HCP6kss95dZbTSsWhF",
  "key24": "4U57PQrHrZFRtMX8DCjGFyPoVwaNZWvewxmUyjvNjvQFD6MinMSRUhyxJNDkBYH8jUnA1R4TVVApjVxhuQHWuGLN",
  "key25": "4KhLhp36j9MUq41U6Jn2xTHtqGknW5h9cBMM1QBmS4DhbNEaDHVuibHUHrxwx4ULf1qEkV4yf9kaiDtXTPViKskT",
  "key26": "35pvptP4HYjdSaAy8KFhqckpf7w6QSa3UdPFHe65r5iZfz8BJbza41VyfBECjmuT7sFTHW9XWB1RiRix6DT49nbW",
  "key27": "2jibNr494bNjF79bWshnZNDqWPTArYHkuZiNZaeKeCR6nDT1y29q1pZKkRdHFb388QpGqTNcKzqZR8DWTpA2Znfw",
  "key28": "2jVPdFkzxMe4JawXiwm6LeZWwzXHBTE1s9AoBcdN5xyisa6A2djJ4TvY6oLbu3aqrQKKMsvoryyDxwwj4H6YiV7x",
  "key29": "2DDd7ufJFWjFQozKcaD1VNsZ9xCjesnkyHYBSL2me5GwcXCaJTF4eueAQ1CVNiGpEwgK6UGa8F1YigWSsHzN6gb4",
  "key30": "5e4pwuCr5u2m4iVhtiR6LEeiJS6aCgzgi2XpWNV5Fh8G22zXr5XhKcyAiT2hQYr9ZJeFe3cbNxhhPWSNJTK8Tpe1",
  "key31": "641oeMmWVpJq4E2pjMWKjsvi7NMqGf4euTg6qAz5J7JzXhaZdQUKFQvwm8du9cSnh4rsaeYXwSmov1fJd7UHjb8B"
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
