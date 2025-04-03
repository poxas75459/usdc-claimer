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
    "2aa2LYkkzFHwiHhoFjMg3Lgb2R7veFekVuaM7CyZPccctN2548K8sADLGKhRzymXDm4hdiEaDv2nq1YKPjFwjXXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39C8aRtHYYbmKP77nCaVXbANbiLpySV9mFXfKK3CpkDkkVQAzJe7Ty8c1vbzQs9J6z4KU8xfK51rjJMYmtJtHtgp",
  "key1": "4UaGhUswfrzL9yL6oJ5gzLtDYzR2zfDxRxs1DouDTRhfsk3cUpiCj7D2enSjDp2BY99sutCYX9yLcJThPtT5jSFh",
  "key2": "2iGYAiF6BheBZkqRmzRH1AydhE6boETcSTyr6eb8CFjuh2dRMzBCu6K2RkdfMLM5ThFegy9NvfdsjT5TDvHXoJX7",
  "key3": "qL98eFeHYkGnFA21iDCo5hhHaRbnqmFvaMtHtqnkFPgTyS4f4Yx46AJcGjQZyPi27tnyZPhDUJaYBupAgoSdxw6",
  "key4": "3YUgK4wkX1tr3gZ8LxQj3cYu8TMeYf5gippa5CyVYPERgTJfyonXd3GyD53sibUCq2vav4WnnpA3kS2HjrnX8NEe",
  "key5": "s1rC9oANJoPZket7jWzbwqn6qWUBHW4KdhEmocmSVw8qVvNQdJuHW7DPGuX6CdU9HdeTe9JmFJUCx9tBpknDz2W",
  "key6": "4AUnoLgsotb4xfapYsnwMhm84i8KbNpDvVRKnWoMu4qgu1pHhuRXfPB5HbzPrsyGh3iQpEpb3LQzocAP35dvGdzg",
  "key7": "4nooaowvFj5mvn6dtd4rhH1vGcRAesbbUwoodmEYnwEYBPHsh8SSWvN8ehaLhC2s6Vsv2p2cDe1nwePu1imnBoxu",
  "key8": "2fte1z9uFH1bDAZ9QSsB66bxVW32TEFK97t6W82v96GmUuWg6kJXGQKsw8HX2iKbeQtnWyV2vcf96FcKfx1fUdS",
  "key9": "3ArgofKbCBGcX51CK6JDjFGs51Vtyb3kMfZRF5U4v3RvUE2M5pBiu3X9ndHxjfg7KDh5oB8MivvuNjykaT3EfTJt",
  "key10": "27uEoKX8gqSiDGDLKqneWcfXoVi1dHhDD7PjwsvzBcPin4NxAyem94tUvvWmUSEvrZ7CGGv1rMBDZwiymwGxEyGj",
  "key11": "29NHjHzGRjyG3kZsG75k9wVPJzWF35rHmLtDtLDTAd6RhXqRRu3UvsgTgr8QyiuE3o3CjEwu1H8BsY31a7quYkrd",
  "key12": "5Rmc9W9vdERDAZqsn4URuc8qnB2ZVq8QyWQKbw4TrgvtzbKFKnHV1cH6RtQcztjANCyKSoBwSsfSu5ffQLUgQm1r",
  "key13": "25PjGV8nUZ6UgdgFwoWWf83Xs3zmc9fNdiijKWZu55FmHYyRJJGwz2TsgLdsdxWsJBYFjXYqmQiAVYyaCVem1mEN",
  "key14": "31VKnz2xai8yBHnKdSc8AsVhrBCuh8HTmqirXo3wcpFWAaXxvPoo82aqP8mRdoEE8xvTwEq5BfqJr5mtpUaSErBk",
  "key15": "521gt9Wm3t9gvd8oZjywp54uv4d7zaCoKZE6NneDjVMn6afCj5ts8h8Mo2GycqRZrqRmdNvpykkrWBrvGjEpjSES",
  "key16": "3eSonJxjmwX3sGCWv7GCbTtYWScc51CkcXxg2r6jY7cZusgux8mAeJK4s7prpucEaq93yywU3kNHJkpeT3g1wvyY",
  "key17": "2pUiEpsJyZYY1p6A6t6t6DsmB3g8e1vNA4yqC9HXg3SxAurc5HgcZAvS5g3qCvL73ZQNmWDFNZJUnLkqsxb41YBE",
  "key18": "4EpFYLig9hvWcrMaKKR3iv2DyJrUAdw2NXcnYkyEE66hjVQVxUto4Rx4UCpoieHGG26PjUKpxpwSwE263iCfSdRv",
  "key19": "2B2HMBWjfePZfDMJbTT8uT33RVKZfSCsViHwi1hteSUeJcEfE9q3L9YtbhrwwmSSyE3HbiRvNHHi1AcnW5bn5oz4",
  "key20": "4QavRvrQkhPiK6CZePc844ZKqQ9kzLF4VT4CrdMqTifgAQMTgdCFPqRwid3JYFcts3FXNrJjk5B58hbUBu2wW82m",
  "key21": "3FMcQ9rgG4Zeu9Bf5WP4is5XzNe4gkD2gyDwjksZjk3rBhnXkJmbdquNYuwGarezxPbMNiGMKAi4MX1pSMnnMCXF",
  "key22": "356S9AVkYHxVJTdFaJohBR2HbGrq2RBZf5iL5G1tjp3iKnYQ6k3PwuaBufSAkjJL8JpYGtD88NxUKXb2nSwkuYGa",
  "key23": "4r56YbNuTkpWrdayY9wHRV22cfXpFcmhqAL3c69e25TZxvvZXHM11PqCf7oVBe34ALkR7Jow5zBWUF1dGEq9briP",
  "key24": "4wcLAveZrTpyfkTD4hiMHXM2v9tWjD22cRuyq2zqXVdjAGw1sW7AyUFkxdfUewV5VQvNrNEA28swCEBRntSunrMv",
  "key25": "5kBGgY2i4ZSB3XJDYdagT6DLiM8gHXHTp8kDcsbvvKHVnzkvuKHKo67kMPyA41gWqdRmuG61yzzXSkDNnEdQZJK6",
  "key26": "wJpfTR7ofGhiDTqMvefBAVfzbbs4mpugC9jwsD7CUHgf5LFrJDHCKpUMMdhT7puEpMQMhRNifGNdgkLHd63i5wq",
  "key27": "DE3gwDpRWFtivb6WB1EHjVGjHwdLtx1jbPGn3Cmxf3NZCvUGa77dqtwyy36pmT8WAMGTCXugfHEwGbGt3rtZhVn",
  "key28": "45CVw16nexVwbqec4hagppWTorMrYmRxnjbhr7TNJDhcXE1i9kXeH21U6Hgf3GjqyuEtQL2LyXbkiZFsae98VnK9",
  "key29": "53x4P86GFphFaqH4ZFbwmgPVfz4ur1Ut8NFYTad6EP2URxsrMhxQ19GDmRZczSPttN7kN6f5LzEcxvFqK47R7LSb",
  "key30": "21gmN1VwnF9Rj3qUtv6F9dKVPEdHnE9FipH8t3bUHfHjqYgJK9sbNWRXiChijjkpXm3FuDntgfB1GCtCr4WTou87"
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
