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
    "2x6MjEYLprwc8oxbybrUgYreExhib3KzsbopwpKXgWG63SQkLuk4rogXxMLcyTKZrJqyKT5qSh39FxBdQTRWeDwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2piMzoVie63Mxy9tDxooi12EA89E5vi6qTgPsisDTHqwF9fj4xvQkJDiPpF1jjNioifL8y7ikPJeNFyBfuFm238n",
  "key1": "2ym7u7Cf9kqZQPk3MzB7uRw944GUjuqs6QefYsntWeGPd399KWG8dqHHSUkbXe4Xrs54CoHjLqMRPCjzTjmQqHEU",
  "key2": "2waoduJQ7HNHT7CaT4TsGuour2b23BGs2UHQr8jA84DNA3CqGnxwc2HeDNpYWEymeAswk4NFsC1mpDmvbzDdNtTx",
  "key3": "3zj1NjHug2yDMq6CzMUerRyndTM2sr4JrVsnNKxYZTphN7vkbd6VaVdBspvuQUf69YtR326xt6XNhLAuSYqSJHXi",
  "key4": "2ST9qfYQyMApLZ5T6xGsCenCEFTVYEx5VMuFqq6hr1GGHHztjz8iRrSv6dp66nLYM9kFyXN3tUY4NsUqa4TZ5761",
  "key5": "scN7LNf3JrZumVpFqgo7ujEYhJ8qX7MmmpzzzkE7TRMM2fWnFW5Eeg1qQwQHZXtxhogzVxeck58117PPf6hNZJj",
  "key6": "KFsmVsqm8a7F6HokUmpWWntDUYwWAcjn1H6kMrRMqFCfhMJJpKFSn3d64isUodgTu3WLTRB31VUwVcJ1JtiLkgq",
  "key7": "5WRVvJYby4x75e4S5fpzUmrzK8N91k7DeR2KpKRhMGeue2Jf27Kt7rFszKEaw6Yi5ypo77aCEV4gXLy8PeBZoCw",
  "key8": "4LjojonZcFAJ65ZUrfjw5idXsw1ysmAYntVnr3Fzpw1NYtg6RJ8YkiLMziusRNxmBy7UiDgSGCgVWsMSbaJp6pbQ",
  "key9": "4MnoNrw7xxMWQEP7v8DHuDZchdU2vspZRtd3BzQYpaEitiKMWS92Ais4GPm9231bp3UijV5a1A4fxeRHoSKmb6nR",
  "key10": "5FHbHQWGAxDqyYsiUepinZNuK4ipReUAY1Z7F5qrNSvfVCu6uWJU1jhBRRAhFjCydJpKPTswouKry2MgugsRoUYM",
  "key11": "2AsUyg8sYvr4FJR7GF2qHpfC89jjGTKp3KzX9HKvHv8VvujUp5K66A3Sd3JVSKDwFTKwwZ7vkfNR6AYyXSXbhL3L",
  "key12": "2rfgM7FepLEqP8dihafRZAcJLcUkiBPdG2tcnd26CHMyvq9UVZA9UPC4zNiscUZzzfyBvmz99jLZCLNZDurtj9HS",
  "key13": "GczxPspkLCmFdPs51tL8M54Sac6Skj9WH9JVwEvHWu63Ka6v2LdJgzmXoRvnc5PZWLA26VsuGwEaB1RmhFt6P4U",
  "key14": "5PdA9XH7Zn87GCay9uWKXGv48RcbFWCyN55iJifwzNpvzZyNSLXkQ5kMSMboJnx3SFe7xUugB3DemefqyXekxMxN",
  "key15": "3s5e2snfw7MpotVbvGbqEpS3Y4Bq58K3Dz7WiSW4R1VqrzStSv52C7mtkB7r7kqwh7r4KJnKvt8HsJSkuL4uQR8h",
  "key16": "2QVSKdTUUNgvcN2ZjDuXLcW9KDapejuuRNhvLWCGRYqXDBLu35LxqnC8NFUdvbEhwn3S7kXghBpZ7TLMCtGSDTff",
  "key17": "4m2tCmX19QBQ4UABJNKS9P9ZRH3R1HAB1z5ty6soJbDwSJ1yGGnmiFUpnXBo4H8yWxLnN7UshpvXhtZ4nWMuuzTr",
  "key18": "3hTt33ULMBTkHP5bzoU7mzqxMbS86eSzLmGWiefhdgwzGEBfTd3V7Z7dCDWgukVCWtTr8yQPps1Z2ADshow67tFJ",
  "key19": "vCNA7jfNeN2UxEzcboaPdDceH4AmTpoGBhPa5ZJu2hQmgbhP9QqfZVHiSuHZrxhzMbX9EmDv793aeCebEwocoaM",
  "key20": "516Z2qGCLEUL27M2uAFKS7TTdFHpxHzFyJWeFWHnkAzQvtsu5REGpbUvcaNKmDm65RLkPB4GDxu6xx4aD5wWZs6i",
  "key21": "4gQccB8EBZFknrGuTyLJuLeScVAAFpzhzukCBgVFsTxszCtJd7BkXzUgP2s4RvJ1iCgtBbkC1QDPYargDwUicfof",
  "key22": "27SFMtYRGBzWjJWcmZByTg5K6NkKotHnVWWwhM7YUeLQVKqdQQiQDSsJkScnvdXPrNWFB1vTw87cir3qTrnbSDvQ",
  "key23": "KHADx6sxPZBVy95vCEYhuJZ4cZDCm4RhvL9zbmNZt9A4XXKJgV5mifUaZShN9bF9Sc7KzpeCz7t8hHLqxyYW5RU",
  "key24": "3jdeyg4YcUYFspScXhsAiV4RK819s8539KQPRSM7G7UYoUfUp76zDqbieBWeJYWXRp7e9TkQQbyBAedSaekdKY6A",
  "key25": "QUjDKnxp3Xu2faAH5XXFKU8kgWgC99kLTwXqH8QmCaMLzUZbses4bVFx4NVN1DQjHF8RcJW2Vobg9H6on4Qmq3T",
  "key26": "51E93rry38LbkyE2ivuTrkcZ2PuDQ6kkqPx7JQgwSStBxZpWMvfRCMXJYRJBuZGFv4RcN57LGroT1jxkqqsez4HU",
  "key27": "4ESUxjVJX7Nc4pgssKQFSnvbXd2y8iVou8hxEpjhe2DKT1e8ppMAgL2Sen6fdYLxcdXsvsEExeEJM15CfHQDcJE8",
  "key28": "64qMw2ZpFDzCUkqjm3W8J19TnM9aUds4pEvEKXSvwYf6Hcbeism5gYaD8wHakqZeXKittmUXvGYfrzXGbzCj9M6o",
  "key29": "2TzamEP9dACr8iKAXd4ZPNCTAcpCQtdv6aUFfbPLy5saJkmvH8hCQikspZfrCczGmrTqB25yfBUDAkqH7aak2Ggn",
  "key30": "2anhpzGHvbT8a9Y2sST44pzrBpaVsUPuX2JrF1kVdJspNLTgU6Sb1HM8z1U3yrktVFKKbXqov8e67bxf4MCSENjN",
  "key31": "2iTJNmoD5Vx2D43So2Hmcg7nbdQqzbQuRfLbcdqxam8aN3X8FAhgfQuhHC6RkBcTJordU2QgajM4qgFo7wosrnjS",
  "key32": "uqM9kC4kcVYRWGLgNBRy8xVk9Ujpv8cWD4QB5Vdgwra1qwYvHQYjZj6zKo1n2p2SfuPDNNjTsixXVB3JD7BBP5x",
  "key33": "2s2N2nK5YHCqZYoNEancGqMptf6WY52sCy9uarznPvQVSBm4JHYm3t88cSCAwywxeUJtiofVaJBba1VzAjtrNQyh",
  "key34": "5xrmahHMLRtH5Z21Tgn7jymXPm36MVXgmhcApcbzfbGX3tccDaqfuLMWDm1KoxeUT92ZxbhJMHaoPQm2935BzNgR",
  "key35": "2MJ5g7SyL3SPDeBsDVfAGsBhMu79kM8hP4aE3XmZPx1px1NAj6nYHWS82KKkPkjJnRsTv5qdExJWpR2q1zMTkPp9",
  "key36": "4MLP2RBjdbp2SwWLdoFpiNx5NS4cvhKqfk7nv6XwkcoekUZp5R7s28YJymwW5PnHiUrwWnFD2F3h8PiTgoXbDUWc",
  "key37": "3NQ6qtMrV29NwuGZW6zgxsZowaxjnYQ1zt5F73byA5XnnKERvnfPxhZGH6MHB1PLZyJCWCi8s8nVJv3JzeWpAUxf",
  "key38": "2zfYGfeQwGpzPGvjMaZiceTmYeHpSjtfmGDCKNcfARDEApQJVwKn9iWEt5mE9WVwvVGLmZtUpEViPFBnSGmadAej",
  "key39": "3HreYDoADVyTB6oZqLugnNE24LMakz5jVZUVPqJG8NZqbPEkaswbTDAHhgcbGQnPvNjSBSt7WGkCHgzC5rwVCvk1",
  "key40": "3SpniB8v5weti5a8QJacHqNVm85Ru9jEnAVTUELvVX5UVZXmPx1nNfJ73cANwnhKkbH5KNpGGcBipRpkS2TNqBwu",
  "key41": "21PRqSBZW9M12QpsUbSLWDh1HAL7QoFdoscEB4YERJ46HUXexDdJfWx54UqavhzdrZsmBeiie2fXNwWeSYzdTpa1",
  "key42": "4CVARtcFHyMTXNx2iJUyf1ezkHWb4jpS525cQAEpWaVCR6xFDoeQqMEdZevnDo4vf5mdEqL2CCbC5iqrDM81zVNf",
  "key43": "5eZfWTdLq8NBaCThq5fxaM317FahKfXFso9hzXaaDE6HxfxBvbgSZLQKdjiyCLgcEDBzoCenptyGfuGwWcbKJpt6",
  "key44": "5sKwxfixJTY1XuBc2nWerG2Gy6QVrcqyjPbXqxGhUHrN6H3sQDwqFwXSjAS9LM41KdTHTZwBj5cXUJBBNLRN2L3M",
  "key45": "5zF91BxNNzhLE1RAsRCaqMb8jkDHkP6BCUhWfyb3NdpoCEzz3UF9bwTKK48o15PwJVa5zKKctvjdTg2BNQ4W7djQ",
  "key46": "5wQHjA3Prak6bes13U6TMqN898ajQCVQxVWwUeEd2XVi8d4GdCBjk1fwUSZqDqZKr6xdTpnmKe6uKDrbHwY9jrYa",
  "key47": "48vMC1XuPaTWzHQVFmxx866Q6UDdT2ZSu8LMxqLYCmN4RnBQnNikk9V6EXVxm34SzPgZi4UgkFGzFe5vLFfKjDEw",
  "key48": "4q3dxTbLr6eAtGqSBuJQ1t2ugdgqmU1kQeNmg9hQDayLyHPDHUB7eCH4MbCjnxY2AcKYvyzffy6qygi4ToP615pK",
  "key49": "5Eg8oTu8U1r1AVUfgQfdGN8t6HfsbrWSHvcZyc6L1Kr8zjTC2DncxMVgCyX7zMsuQXCfxZxnPPhFvLSn8T8nsArw"
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
