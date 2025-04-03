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
    "5Ab5RsXiiHQH4uqdSJ5xG5JczBPJHPytJSY1zijgD8HziCbKDvYiWhvsFFYHX2u1d7LaeQWoC3EAcfbWr6ggyfMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VDxeVpHb5UhaVZs4LThbuYHy2KXLkdiuFBnoEndEqep5ZePosh5pYMCarrEt5mmH6w1CTbQCmGvr8XkJF5WQMsw",
  "key1": "3Nvy95bB41kvPjQf9XZkFQ7Vo4R992HpxNB8ifqYKuJjVCwrEXRaD3oyj56G2AsWEwz9trFAWZfCJGJLwah83NEr",
  "key2": "5xHCENnJmHv9BbufaDrsudathXM47UEShmixSrR1xJkbHDkZBKzw83Ugts9HDTnk4cZohMDPENNhXDtsuY6y2z2u",
  "key3": "3tXysUzQuWFMDkA5Lf67CQqwg8WXziXYLuBKwYZPzxqAbUosHKRDRZPw61DZt9XJX4zEqCMLpAXdNRnt7rzyGshx",
  "key4": "3mnXCSgQ7hvEcTH7VP17Ef895SDKJsDmDhyu7Dk7MGof3xWjrqHp2grjYfWdzeYXjNtNFDomnm26wzA3cc4aMoTw",
  "key5": "5CVAgKexeraiDgBqerMnBCyTpf71PZQqopFbK4vWRyG8CPvLzPTPxh4WBKhbKtWuELdJwJYtNu7TdH2hdhAm69RZ",
  "key6": "4NhNTKnMcrxb37nU69Wj3Y33pcPK1Ph7FgFYnhjX4PEFvNLqDVSqHPpF6b7NtH1szi5kJrwfVNNtvbvsStuekrPr",
  "key7": "3LPqowWr91yARAkRKQRf78h3UZaYNAnaQcKGGYg7mrgLYJwwnw6BefyBsStaCNCupnk1xyvvtDBY2d9Q9k4uRDUh",
  "key8": "2mh6uYwQtvfmNeVnFGP463ytNMN7TLejQoGdnugvKqqN3FDj8MAFKHseU5ipA6uiJzQSuRyChfkmjG8wVSgeMEhL",
  "key9": "4tczn66yBwSWfPuNNe1eM5Y7ntEuqiwHafTgNVVi7k1QCxez2ijfjY66jLbk9Y8SDBEQEjcnGRy9HQbYCzi3Zyiw",
  "key10": "TBLEETQeZyN4VdHt7ruGTrMYmUrYPkemUbzpHfJmhMFZ37d2XCuHopbe1eETkY2guWAkC4as4eros125B5RMYQm",
  "key11": "bAsDmQSrJ3WoZ52aET1vfZNqtYsYGejnVRMjCYpBpt5yxkQTH38dhr9rgniWGnUYt4brhF5VqdVb8dqfjj85ffH",
  "key12": "61vqPeM41ToLjAcRkFFzesQPHvh9nVpeQwqhR7NKcQAnYpdwbvfyrWt9TuLg5U29s3kTkWoR7ggDx3AicU9coDFS",
  "key13": "5fEu7EKHN144Q1DSBuxFGu1z7TVAmHf28GswVUHoPCyqH3xLpe5JgDgsPYaDCjYfqyBg4SXNnbDxazkyZT2UbwYo",
  "key14": "3vcAcw5ENaNwWciec17tmKiSUEhLWmD2NNNv1SfFLysqTDgFHKB6NRkQJ48nc73wr2hCvLLkHSRn27so5vVhgB81",
  "key15": "41k2zVWWy7NFnWaT88rtaWK4BeGq84m8mohnp4cPxYV78bejafhWY635mjpkYYeStvmtdHnmhQchNNDwmBJRB63X",
  "key16": "DBicyoExjbCh6QADp3mAr4DmwhpkfzecTvBEmgBFqTRVZh96MLYEBsxxwXwN64wvqnFwc8wtEbM8y2i9TLDLfw3",
  "key17": "2pXPwc93bkrFqQnhybCfDFCM8yTZKetr1qq3apjXcjRfiHwQuXgAQeNheeqZj3pgXdBoaSUq8d3cGYyWb5z6XwnS",
  "key18": "5J3THn8TRoKtowJzDDueQMoP8qNWqmSvkXjScmEY2EcNVXezE25qr86GPniSHd62LqAXrKQpVB1FwvvCXg4PtUS8",
  "key19": "RB8RyFmsCkUqzAA3fKkYNukmrtLo7Cz7dmW78gTLDSTLnrCz4FTnh64eGTQrpb7xZ5wmfAmFSb8PH1vdd2fWydK",
  "key20": "3iNhmwbrpV9Y51avrGGVDEeyjT4bXree9nmxxCGqyCDBPxMhYTaT9KfNndEsSZMaNaqMcGERhkNJpT6JDjfYtj81",
  "key21": "4QeY687kxChmiA4dwQ95ueqh7oswtCF3zLNCxEztiLdwc181vBwFJrxx7gVDDULcEWLbreGBVx3MEKmhycj6NQeh",
  "key22": "2UVK564rahpgrLukitBacfkchDo87gtFfn95fP36tUgstXK2ELmEiEdamtGHzrV5Sfhvj8yUdh1okEhZHKsvChs7",
  "key23": "4RaxanX4x3GWdxqmX12NFi2wF9MMhjLD3H7PtQ823WegGMUjByT9KSUR6KywgbrFsztsYKF3zJcy2LBktuKiYbPt",
  "key24": "3G7CGbUiqW2e5Sr9auCSUkXpis2gdbEruQ6Q8Mkp1SgdzCZwaGvgmymPp6uKCxDUvYMcsbiakFXawnf6k4GV3Gzv"
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
