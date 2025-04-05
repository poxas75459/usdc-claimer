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
    "3W7GygD3L7evZ5HAgtXiRAehkpW8qCMhkmY5EPrZFFZMWSdAq5VvHQASxoabYZgfnEQZsSLU7SC5MWZijA5Ub3vd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pqgLAyU1hN53na8tc2Umb5v1pxzQauWcBu2JnnEXXPR5tPVbwThkLXFXteoDP9ZJzC5Ppe8d1rbUe2yWDopv1gU",
  "key1": "2eoNutWbmbehFe8d4dfGdFEbtATEqr8oDLm72sJYAdbGUbeiG873MJzUXVwqyScRZM6UYREGHBHSVFwoLMWELFxz",
  "key2": "4Cb8z6nnGEt4PNa539XmjugRKxm6NgyBAEC4RBEK5oZgct6G3m93cprKUo3fCdMABBqsVmZzp9MeTw82k1NZCaTj",
  "key3": "5SMztxYpjfNFdKeDWSYT4aPzxFuCJagTGM6tzPV9Yz5FhQSSePGaYn9gnxbsUmpr5wt6R9SXvvuPfgPLkd6TdbYA",
  "key4": "4cnsnqYjh7PmoExWzVExPUacJgR9En4nuggBwvFkzc6ekJv7MVRTFCchLoaKQgP8YFb145YjjHGoYGcXA7njZFAo",
  "key5": "3A3MeSF1CWCiVobeAZim7k6boLr2mfj51UBzE4cE6EMd3dquTeXVkTYBchGESJfxL1BeW1GaW7FwPVikKczRgsrz",
  "key6": "5DQ79veGRWHkQVbyxB7f4BJujhqZTpqimA4U1vjqdMgEgVsJLxu7VWLrtLZypPN8wVMewbyJV3KE5iUbj8Ajit4S",
  "key7": "5oVvw6VZFqJQQKA8HdutnZibY9dBShxCcs6YLqcopBue92pa6zZwea7Q8T2JDmWRJdxStgjvLRErpUw2TexMDtaM",
  "key8": "XBxkuVwnTGtDNNbPwvUNrGAyVhTVzGjLifD8cyyDuSfsaJGZDFdkKnAhagd7HdErSBj3ZPAtDJNAb3DxBzfWHQP",
  "key9": "5oRAZW6w9FyPL62HYFawnZWvHwdknjGEiqzwgsivipCHZKY5eTsnWsVZBd1pK3E3Fv6gosXUN7nDzNVq8mnDh5dY",
  "key10": "56TeLyQuZMnvqbBuHGyquS9GGkGxNreH3CHTAo57nSXmi4nLr7BUh9vNZtSY9B14CTgUBUBrybPudEaHKLUJN4Y4",
  "key11": "3cF8Nrp2JS38r9QV44GVwagXvanyC86mxKGhirXjZSynK8h2Zoz3JP6Q7iYaSaEpoFz6Ur18sudzDsWW2Qox6pFG",
  "key12": "5xAHHXZ29fqYNo552s9ZRiLVwEZu4ob5faq9s5g1zujiNNRyhcjM3mWVLScqBuVAKsBjk58Ngp8pxAbhvLP6sy24",
  "key13": "472JZZPkVTXPE7kB3edDTZEAo5GuJj83fMBPMqaAj1QJzC4qeSG2bFY2CGVWuxh16RxskDVWnA2zJ2FBHC9SkD5F",
  "key14": "5BtYXdesbXD5M43inNtw5PWzYZuH1z38pXRitbMBkd6LbtVSyEEGuxWVbtt4Kq76aKfz7CocK3jLXYNF8i3DLFRk",
  "key15": "2Jw9aViNsPCeFRCx63nNzeaivYH8rwfj31xu7VXDGTQhKydMF2Mo4ysqTbzbwqHaQyfP3RTMpKhyawv93EJ1PD5j",
  "key16": "3eaTCb3VBRbLZ5xXurh86RXS6j6JUrXuxSafeiav6tS911g2bgM34Yy6HmY5nsFXoFHrcWLLknguD7nGZzK7Dk97",
  "key17": "5wkcxyBHHSJ3e2j3Bv2oBipgryVjFpHxLUiTydLntCNkRS1RmTM8G7uVPfqy62EVtYXuxqb1f73eMgtnS7ungMwr",
  "key18": "5LnJoi1Y6uG4Ho3x9568R54CftQM667cMhoTMAReGKhbToLB67MbXTD26KparHoU4YAmvLdQ9T8vKB2Eny3K454c",
  "key19": "3ruxahD3kqiAoyuPbRRsYUk5rJ5SfK2fHJGyC48L3pBWUJnVb7ynD5HAxQ5hn2oKEB1AKS2BHVNWQ2xFFKg173rU",
  "key20": "33SiC1cggdmAHRkS5oV3EFhoAhsKY5Xxqr8Xut87P5SxmBJt8ZtRuMhFYsvsfC2YDymRgvLRW4TkYTkgJaY8oXxJ",
  "key21": "5SxhQtJDxvQMAnagV9rEVLVsj4RJiT7tGhYdDJUonnGemGbf4uQZNW9N5rnZHog6XmjzHgbzsjQcAcVCfJLf4uXk",
  "key22": "eWGUWvtYiER6hbih5UwJPRSpffDsD2YcRb9sbHTJTP5UtR9R78W8A7C6oHkpouC7hkohAzYXuaBowookS1MN3ML",
  "key23": "4KNYnJLdS2vPk9qhgL2UuZPMeG1iunX8pqFfid6WPPx1m9RGPbepDxx4VVAdtKTcXnB89yDJccE33AgYcYiEZA8Q",
  "key24": "pi8qiMgLXiMmdhPBnNUu7kZCHtGvHB9TCR58qE25C4WSD47hFfYa1N8gaTypSW5csPtLCXqXnQ9qgyJANQydrrJ",
  "key25": "2CQy5zk2WkpDJSMXNQrm9QVwCRMNLQS5oqWZYDw9zhQqrJ1b3ryzodkWxkwRk34t5A4rV2BpzyfrXATifgHr5eum",
  "key26": "5vhEehymUYCo2M7C9xTYFJRvitVrEundeQ3JsYvTsXcuUZDyanQg5yHFigXyTYTMP2t6ntDq9zSWCsespqShi1wE",
  "key27": "36Fp9NDQ2yXQSApatRoFDm9pxGcNAUZKCxPPp1dkAVC96LY88WuSWiJznac4jZGBcaszWWtyv1QrxSfRHmLBo6Hf",
  "key28": "5DvH7nViWoY5wiXppa7SiEPeoUxhAdBEgqHqA2vL5h4hY3sfkwMca5Q7bz7zuxHVpWBtfYz3ScXMSjgUA4L3sZmG",
  "key29": "3XE7Eg2sto3sysuBXUkP1MwmthYELRBLoGCUfGsUYPAs9HNpzbuYTkULrhHJtEA8TjiFeYhPAo9JU1EsrFZNZcVP",
  "key30": "5d5ZNiMZ5bDFZmtL6YY5ZXWD5TNvXnyewr8kMuHZvn87fGwoZLmhVEQ3T2UddMvXQUUmoP3nLxAkRCZeJ4C2RQJL"
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
