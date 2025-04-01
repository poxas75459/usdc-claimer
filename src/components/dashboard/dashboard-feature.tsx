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
    "3mYj8yBYMbkcgKREXxn8BqNgJirguAn5RanhMPr8jtgyQJRxKHPydX75J5nDuDFXwGMZthXMGnkc62uDza845jXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42V8W4AdQVzNit2byRb9jF36G6PqmEZEv7Be7hM4LPPgwkH5EVUQ76AnqhHxTmtjTGeM42ToBn4DySp5zMJUd71w",
  "key1": "R8tn8j7auzMnt5wRMG9tGSeP4gDKjGGyS68SJrhefZhomqb9z4pZr1o3ryHPLrwbJnr9fEpmd7TgcrhTHPnNgpb",
  "key2": "tpXtCfyiviMKK9pnd8pXeaicMFL6zTTVwadhPuawqw1qu9796uNyG3oc5GB14ibVa4nyTjgEpte49JhPJo38KVJ",
  "key3": "39jsw33QZmc9xq2xw6rRVghCzq6mDGJMmaWPfrP4V6tdVZcTvn3wC4BwRg6dd37RgaFfrYnbFBkN4LVXah9Ku1az",
  "key4": "2hRJgTLfkZQXxXYsgvTnNynLVo9Rucb99CiGMG7eSsDqcGDkkpF5djsSPUQGzDxhuNWtD2XJ46vcDNoCgLKnbuaV",
  "key5": "37UiLtwQrkxBYDtLNRfgFEiAT1GUpf8YWQXRFDfi7eNYsTDnfVQMNqjrBfzXKytWcGLtXLB8ZAwwqkPAciG95UFf",
  "key6": "4JfxJtWUPaVuiVzMx3ZLMdLqx1EbrD4FKxTArsT8iZSUtMuKMN1gZ4P4qbnVbBoYZfkgdc93ryyJQWskHeXXcZiS",
  "key7": "4cy9k2fijEKEAw56Y8m1TW7rpy4nG2SSnwhRH6BMcBrrYZSEc1qNQARAjsmTc64fBDJ4zxyS94gTTYa7eQQUmRA1",
  "key8": "bkgS2QmpEyaEgwyN3k2fQyhDNccGREN2vfb9wZqqPSrExwRhBx832UzBGvrLedBf1PSbbDzxDvKYndve1JtJnzo",
  "key9": "5mxXa9JVc2etm48Fb7hdun49fv1mJBuHzEQ1SQZqJVxj5SMY4toLGpJSfQsNWBP9QgvKSJ842vNpqk4JXKv7d1zT",
  "key10": "4yMzDquW82UfnYm7vrbiCavk2XcD2FoVqSBp7qqVbsRCaDYrpXdPprJWmFB2FLmzoJhLTUXRYpBYnNxDY3sAN15n",
  "key11": "2nSMymfSJxUCvuzihjmXQiyhgTw8VnAGwhzRVH26AdqPcoA5k5hq5DWjZ8LFAsvYU7zAAWKoeyR8nG48cNaV4LSx",
  "key12": "P6p1cnqCWaGc8vKFJ1VW6MzheXJC2R4HvS4UmAS32hJ4C2KKNbvdH1sPUJXw4UEcz97z36TKbvpVULxhEefPhCG",
  "key13": "MSPajE4WyMSF4am5dzGowMMTAXVXaBvRtWhrnLzCiGQQJoQEkUZUrPvM9rVarH2xYnq3cuQTLC1QCSuvqGGkdiy",
  "key14": "3b882YcNJMESbK8vieCUongJG81sqJQqQUBKDdPR6o5k3vswdv5yeT3XSrqkLNAFex1BfK6PQ6DeD78bujzG8oat",
  "key15": "2YZxZHu4UUMnLUCkyJysJ7SR8JC81s4xebS9gqgLczqj1XXTSVQWLudmXqtJGchjhevUzEXkzMhGt3fWdUkdMSp8",
  "key16": "5CC5wRuRhnUv5Rteb2L5uz6cVpfpbguJAeVvaHCfBNEBZ5gGXDneRWjk7VT4R8hZMiWjFbgjW12Hp3xZhKhgrFsW",
  "key17": "4ayjuTk1w5zEDqveK57vv7pkTYBPzwP9gBwkh9mhDbCFTKmWCSnvHVG6JCtGUwsDFb5Em4qpkkrZb8gW1sdkpt3F",
  "key18": "G1vGmuYJV4if1n13SKLnAJwA1ZVesrvKZye9oVuJ42zbtGEDuQV6fz4LFBS3JhnDQocb9djJX79ng76WcQBNN2z",
  "key19": "Pwntg6D7UMWB3P5eqCCwXqHjNshPfG6euws5fyQVTTqjHNZ7TShwf47QazjjcNRVYsfuXm315aH56mCJhWdAsyj",
  "key20": "3BawiEprupdMzpjJYSJ42VPZtRWsed4FvubcNkPngn9J9jv919NWqxnUk3h7SRy5SabyHuAGbovYi1zw2sgKV1T5",
  "key21": "4TvoagiyjhAP6q98dRDxQdB9DW9VNrkr5iBtHKhxgNcjSSDsQJZvZhWiiiDiAwz5EjYjaW7StxCUSCung7XDAs9",
  "key22": "5juUVvRfYT9Zw1vQeFKtmfqDH6CH5RGCx7zmzcmWzSb3SHGLoJjX2djaFgMwyhA8TekmCki9X7aqP8KFnAJrXikr",
  "key23": "1evivcQVsPS1ZLKSD9KGfSKwv2gwyzSbWaD6edta1kHw9phdrKmB3E4GkB86ufgHaVLUbssuD6kqvyVbhTNSqh2",
  "key24": "2KxWMwzJehnH8UCWjXK2pSXpHzUs6GZ3xB6trm9CRYR9uXSNHFxsqintNtc4gYXYZ4wvedgkSriXUHvRKZpxg2rz",
  "key25": "3AZFosbK3g9JRZcbcgxepNjuhMU5ejnRF7zku5ZHkQRdyerdZoVgkgWWRdfZRPHUJcpPZevMu6NGNzmXmbR5nJvS",
  "key26": "4EFGEYuXWhXZ4ztmzZJGLZdWVa1x9dwioFwsH7KNaJ6jqzzZ2sBRfyuaJRT4b47MdGToGDEsvUoTLE3oyNHpc16E",
  "key27": "5qmLPAFQYnoCLjd26HYWxVgmRMpaUccnFXmJ682qFtXYiYj7EK5tt97TiZpZSmnwV3rRN3M6H66mbGPwuPSbBzFV",
  "key28": "3gumebcc7xfbeMSwt5X7vruoBqJC2Q7cfxsApWC7hUnyFsMEiEUvDgWVFVwfHXYSy5k1Y4H3vMHWvwrUMnABswoH",
  "key29": "58haHiCCEkVP8HqLARQVbTH5PD99VMfrQVKaGvi7KVupunoLFHnGC3mSgmqmXiMNUoChm4ZTSheqbtHhgQqZxeTM",
  "key30": "51z3GXiP2UjH3br4DarVjJcpsjcGz43WmLjsqQc4vT3iLNHv9acowZksey1m2Ra5qCnkABcGNg44PDwwwQPvMqCV",
  "key31": "ZTQ6CcR5a31AbnLbdhb9By5Bf4dqXYhjbkNkrxmKmVLd1Vuq54JDe9Xqwa1P2pYFYjCW3KMNcqw1Jk99W3R5GDy",
  "key32": "2yPVKezCpqCDxYA35QEwv33PeEQ1hrCsxkf2mMshzXZc4gVhLD6jW85BxLdWcENm8dVvyKNo2iPRhhUL5F3uhucU",
  "key33": "2NTNpkucqb84Q3tv7qYoSJryVexnBfxVe9dSbCrd3ncKgKsJ4RoQ7Jny9s9BKnP7kUcAXZmdPNEk56pofkPNWk8Q",
  "key34": "2fS1aezwMcSt4Yq7hituHcV3Q4wcemfDRcYWCC3CRjQEPHpPqrC5og95yDzrUE4pXzP6y43DPvJf8VCQvkiQudMA",
  "key35": "3b5QUiZqqs3xtqFzBaoT8JkqwbSY9gxnQZjXqGyka7hdmuvvBLmPcGLmtgPUArhGsSwzhzjvf5xG4x9aKwADuU9z",
  "key36": "3Df9heNGc7FfiHU5XnBg93KQoEtZRzV2uT8MUmba6s3V71cBvYtfNhNuEcf9Vt9GQ29VT8jWHRQwGCV4jxjkAnB1",
  "key37": "4KrYuGhZFX3Uc13WwbU5RLe2KkU9GLCDskg3EcTNKCj69DJZU9QYFRzPZPaMP72vXweSHfbA8Rj12esg36og5r4V",
  "key38": "3wEYg4hSpGwqkYim4JXPE8h188v3etQd4WtWJRpB1XGw8oPA1Xc8NBx9oCFZ31em5k3huQ5wAbcx8PourKNWZTr4",
  "key39": "W8LzTM5cBQ5iPkDFe9ELZ4Vi7CLn23vh8gH3xmCPt4LKu85H6e8K9kGw7f8Z3xCyQJpPhm3dZo3KPvWyymYNxe4",
  "key40": "5B6j2J2HVCFB2MNMtQxM4LttntfRrcp7oyfGhVJP4QrYiK9hipfbN4qFtiheYzG2AAtfYBZf433pFo52zC2i1RGY",
  "key41": "3YGJTJnK5C29GbgR4kAW2B7tB6zG9ifqpy7t6EqG6EcLLRoPu2CXBQJRi1xTX94dWcjhYChf4Rd9N8XBW9qAbCn7",
  "key42": "5BkqfFf16Jq4NtHtuZfqfL99nVyEnUYKJz1RhBWupefBinovLqzhn9RH7kSqpnVxQwEioey5N8hmtj8jQyLMDW7R",
  "key43": "4bui6yYEmXiyGPCsX1GYzAzLBazAo7iprYKM1Zd11YcdcpXPq8j7TqNkGCHe5FDKe5nseSPrFvBgHzKneaayhDki",
  "key44": "3mseAn8W1Dkvusvw5XhZRXQSvGYDZkYoPEcjmjLhKDo4ywc3FBYKCs6nRHYu1kTciVDFnGLxSr6A4AT2nAHvUmnE",
  "key45": "5SUEYerfbkodojc5Y76F2fQG66rSDCCvttQAnZffA2bsVerH6q3TFRAGFJ8XC3qNiShVfsHPYLGptXQqTbAHyoTQ",
  "key46": "4AHL3MyMzDyhoXYELjfJ8NjhZr6wXWSrvXEmT9vDuwvdK76DMCqLF3JFtncHCiaZ7GdPuWjM5vBcGDbKV8DyR2n3",
  "key47": "4ENEhyt9pNSb94uuadbNqP43akcL4tTLMGiyXct9itKS19SNjyhGW8ZnAP7FehYeDae8mBGSn73tJQM8x1XGzPgw",
  "key48": "3X9DBNjRVFNrpwFa2Zyr8iG5nZpkGahxVtxKWJ8HmyXoQRSW4MtprZ693E9N9suoP8ETaHtxrSaCfbh5HUMpe6BV",
  "key49": "4wnWAoTe1ZozHungAPZF5JSovXhVaLt9Dugk5xLuD3HirbgscLiusBTsdL5Zz35yzVEY7TciFWq57iLjmBxViePs"
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
