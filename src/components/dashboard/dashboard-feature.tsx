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
    "2TUdX8jz765mToPnsjvhx58PMDrJyEyybxrjJAeBurExCJZGN6DZqKBtgRyogn5yLawkxqT3kJSf5kEPVJVQ1FvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dGBuGfbkR3Jmn8eoC92jtq2nVbcATAQa18bVuApsCAdhwJGcM9yRPa6bwd29kfqrXnpyq34DPdKy4FKyyr1ivi7",
  "key1": "5xZjoh6MLSTqUVTg2eopwdP5LGPuLuwGUxzV8CJiYV2H1HzvFcduGmaG8pTuDJKFAGfza9myxiNNgBn4jQqwUoHS",
  "key2": "2ZUe52x8LnLNdvcy35AVcN9esmjM9BXfo7XVvWMLBWiJhiyHeTDAbetRCid9x6sDiFFFzwF6Lb3YPnkpsPfdzodc",
  "key3": "39keBURJcNPpDgDrNu6nh7BayXKuff5FzQMd7Gy1Qau4RLLkKsLY4yDNwHqZxLM5dzzMKEnJjCSJz9iTr59ihL2G",
  "key4": "mBW7otvSwu412rrew6USQMZyRZA34g36fyFBiBYKSGwxKfYmkvKqstvzvokiw6gMNjwnjywMpXeK1wWQW3bVsut",
  "key5": "978SqzNpwJviRjiVvurnZVPNYzXhCt1DkRLxubTo3ApY1nrCR5yeUnC7hrR5NJzKj9bV97yD6Jij4fyFrSv7Wwd",
  "key6": "4yGUbuuo5rhHTbisgRMJ2tuFYMGtjE2e2KHAUHN9srbNzKaYPK3Dm2JANsoWoQD4atDzzsrWcQWCjpHUDReouBAv",
  "key7": "3FzDKPFZR95LKrXLCLijszX1DbrRZF1yoaFFW9p2ByicrLRkxJ6zR7wHHGhXnL9C7RerFQieuoAzXfGz89ia4mwe",
  "key8": "36YApL44mgGYSfkWChXSNyPWhuv8htPgX4kHBsJxe7nbTYhc63SQxbhHt1ghCHeXFaE1q7e8wse4icfygvDmvdbL",
  "key9": "3FQEX8dBYS4Uct8Ujnw6T6iL1HUj8HBeKN5ukpJqyC3nXLfWagCAVzkssPVCtRhp15E36h9M39hrxHFt8Up5iC13",
  "key10": "2R5Xx3W3AhJoEsR1hWd9iT7GcaCAPVe12RmFbF9UBEcSiXyq56uU9zXMknvpa4LiYQ7J4VF46S2xsk4c51mNHM8y",
  "key11": "7e9WNyU6t75LRQHDTdLR8661k2mmzb3rv2nEfUbZ6nKhUkMfjqDCjnJBrJTHBpbyGtjqX2tpfgUPuzAaUqWywcA",
  "key12": "54vPtiM5Nxfy8qN9vk5MR64HxKPD6RUhZMVxh7L5GB1JBWPB9nVx5PAa1KFXtVbBXt8swmNJh5aqurYhcmm6nJ62",
  "key13": "4LEFQtMitiSvvZxWTGmxzNgx1V6akHU5Evmn8i82swMYonms3sSp17avTFSkUArKeMcgPezTmYytkjcA6aPBvzVk",
  "key14": "2V81rGbPgf19rqY2wDW5xYK3v1jNifiAe65mbxLDZFiMa1mTJbAPzoYdcGw41JZeDqzuaJYZntHV3iiSPb76Qjpj",
  "key15": "5uhV9ZJ3rb6LJdnZbfSRrdaUJufMeiP1tK8jjZ5HgQQxtfkKYvCuvyThNVJUrM7kLhoxXhmqmGXQ9mhHkYTMVHp3",
  "key16": "61xPL4FCsq3YDcas34DkgHoHULRR78BCJ5asWaNotKeDdMW7VycEbt6U394rtnmk5TAZLN5DD6H2iTyATw6846zg",
  "key17": "4mcXU2BEkh7CWfGX7ydQLgM3gQ7zW1rUdyAdzfHnsjon8tKosCUDMfc3xe96QmqrBe9KXPaSBv6p4fx1MP2wGojY",
  "key18": "3JPombEL5wYtarWZHeGqxPJooGJPSPTDvpPt243EB6ePZmEMT2maUmrc61HQBVXiL9gXmj1Q3Wc72FD1sWT5HYQi",
  "key19": "5KhDEaezDJq4qM7yiugpN99kVb84pRfebaVPvJ9dDbSQm3tRtXcZ3e8ye3HZChSHVG7QKYw9pweao948k8TVRY2n",
  "key20": "4QwNSbLREuxPdXL6p6HKVP8fzpibiJYxv6xhiL6YCjJAGMxh3rq69BrEnX3PnN1xtuQTPyKuAAc5P98yiwVwz1PS",
  "key21": "c8VhRdRoc83Gdayp6WN6uH3CLPBvnsgZUvnLhQ9HXRji59UqRvRymJVnX9fErkBoetwW484xTLqzBU1LP4bX2gH",
  "key22": "3oGku5soWd1SoAEdZM8CtJwhtFaEjsXdEWe5wUCxHjcWztB9QGGYqUTLJbhLzcLzHfdKPSnER2qHSQwyB7wTGdkn",
  "key23": "2iFRX9kEVnLem1BWEpkoSRFCwUBD2d7QnrLkt7XhPjzXmTMsEVLD7Nyjs6HjYcx1NKCvtK8jG1CvqSJ9EE9Qs1yR",
  "key24": "yFTLSPWFyvn2WQBomu1tt1Z1QRSqbQsBgVGwFYzNfoRgRk1uP2jYisWAJiHhHvkFMwHQScQyrL37V6uepy6co4s",
  "key25": "CmganvKkp2MRANDQSkNnTfC8N45z9T4xPHhrgKAP7Z81mQDDAni2M5cHxS8GQeJcdyehr8C5buq8cVhKtqtM31F",
  "key26": "56QHCoBEu82ybqCvtUfpzyH8EhBHNY4X7wKzHv5dCNYv5mBPZY2L86q77Au4DzAJa7PFFPtAtCfvW7XyLb3FpdJA",
  "key27": "4hGBt6GCX6QFKGaAcTUzBmgQsqzKTXhkUguNx56C8yD3wAewLsfxBasPfAVuBpCfpeH11JnML7PJuGxMsciWK446",
  "key28": "3QPz5BYXSgzY3GFYbzHaKdLJFgBxmpQTpaPG3NBwwdeWUzBXZxij1W8L4ZzX2Dc3QJXEGn7BTAG6gXzdChaKeb3F",
  "key29": "5MGawjWsZpBrsQGRzBBQ3w2aDuSm3D7HrcSUdYkZfJkUsC5n7xWvLbcskgaCL85m13TsuHEzcSfdQEbnkiDcVYpY",
  "key30": "4UySk7mDCzw73N4BnmSDq688ZRFenbLjgu1HtY3hBfsBMKQE9y26qk7pANEHcRVHdKQZe18tRfDjX4MDMTYh7ms6",
  "key31": "32FtEi5zBiiYLTm5d8fYtQEZbMHYY43FUX9MwE7No2DQ7dV3f6w2tFBP7Fp9pz78D7eoxuoSFwQ5uKTPzdBdAAZb",
  "key32": "3ciR5nuSpM8xSJhsaGJHH96kqZTfX4pXoQ91veML7PnUTDwha59baweWj3Dn6fwYGuPn8F7kxRRe2S8fQAZGYfZV",
  "key33": "3A3QsGJ3CN2J2LQYaECjuR5xpWeneGSnEsCTV7TbPcxfX12fvW7Ke5o1uuCmXR5GA8AUdVsgkGQ1MSeigQveDQvn",
  "key34": "5sT4Fj8RQraq7dUbhLUfji3Ra2AVFL7qoE9CkrbkZV92spJBkV5nd72cHERf1wCZjbwvkNkDyDrqsbsMpsdgfNGD",
  "key35": "64xn7Vyu2nur3g3guWDmS3VEumjRd3t5XRPci678zB7QiNoEumt9G2xPLLWKdaRWCccU2Aj5xui1sukinJq189E5",
  "key36": "3cqHg4Y7bsp2mLJcZ5iWwq55rvdFymwGt2AYyeTyPBRYGzG6D2vqZTQazWogHyw1dCmjezKubYcF21s6sRvQHcdp"
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
