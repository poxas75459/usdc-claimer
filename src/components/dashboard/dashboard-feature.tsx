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
    "5oJGUsUAe825qSfwWa8YbZtHZbmLrrn54uejQYKdY5XkiD8SojPW239qyHWYLnU5qBC7XKgLYu1sQGiyQaTPvaZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ST1kWDVVdfuqps6FTMQm8VzwH7yk2NwaYpWpHwVBBVwggMeEyEC1rCTzyLr6SPRm1rZDWsHobSszrtJb17ckb6y",
  "key1": "4jWpA7zN2vtMnKSqcj7odLwcf13XS9ws8svFTeqVo2eHPxFntmAbyLTkAVnapcfRzJFUiPS1FMkTxJj1iSkK9SCS",
  "key2": "2vqr8RJ8GwS3X9JY6bjFeTgVSxNCbnAcgr886ynRC5hNREuphQmCM5zJhKAAQ2Cg11b5eGKuH4mbHGxZSpibpuBi",
  "key3": "93MxnhVYvQoEYp2pXZyrSemtCMmLVdQBJJdi4pw62oUKZxmjgwzJTCdeDnLRXBstMmqYdT8uUXRatvTju6RKKhn",
  "key4": "3TkFV3pi5e7v1noE2TgF3wKpMLaPi7Y9j9MN9D241TKdfy1r6oGHUsHvc3GrdQ4EwNZDRf2QwaxSkLJ7PQDrhZ3S",
  "key5": "53GjF1rwJjiWychx7S1yjyFj81EwMdFTsQWJK4Epx9wKsyFVJeyPtX34kNV5jzDzYKZotTV9b4bqxb4Nk1k7anDC",
  "key6": "3Aa5SyA2mdzsqd1ahzgUMqzK32AkvKjeYmXPdZUN7Y8kkLUELCx8R84hQN5ETsv2meigDVjoJnbVgDsZ3fb4RCKk",
  "key7": "4RD9x4SGYDjXoDZGuLVgLfWEXwUw8cyHFzMqBQV2Rvr6DqrQqPcTZf7J9KTheKHL5Hiy1UaNVWTcbMMHucPt2CFW",
  "key8": "2nrGJmu5jT1RptMweJZnThv5EvMjh1MycTGPvrQxdsUfauNgqKFA9Ft2PUehjLvMsd3hWE92Mb158cG8XjE59bjE",
  "key9": "2WuzTsoTeEn1YjpWDXXnLyAgTT7x7d3847stzuBEon7dCt1aRzbCVjS9EWo44FaizQ9JYuygf5xXpW2qt8kmZidf",
  "key10": "4yd6AnY5R7PcmfMH5GcQ8WBeYd5MUwL9BahR1YDjLxsqN3VwEe1888aDGYKU9hXQSkeMEc3qZCcL8oxh5gdTVPYy",
  "key11": "29ij9kUZk47DAj5zWsmh3n1yZPT7MpQG1KdxTdCE1b4rT86qkCgtjdudMAXLb487HnQtw198JQV2EiPpk8QJrgFM",
  "key12": "5pjHP83gN35LEWbRSKgdPa5GS9j6K3aCWzepVkw1qaqMKwWthhiAtLQRJnAiHv7ei9zCrVJoooirxnaJ1Pi8GVea",
  "key13": "3j47hjVMxvJDZQg1otjnDVs8hdLAa96eLKck6tMAsMHr3W8G6PYzVnBNxBbqouw8es4J1ri22JM2XFpHsEivqtjx",
  "key14": "4p2f9CjhrnSSzz6SBqEDe4n9Wub1tjsKg4F1RSQsvgcTqodhtxTnMyCqnYjmCZyUzXJiAWc3UCTAcciBaPFHLSxG",
  "key15": "2N6itJHJCKfwMigM8FTkg7vaHnbAagyFfDvQSv7KDJhb7bryWDdoAZTiFR5Aj9AWSDgjppKKA3pYxGC7CH6TUido",
  "key16": "2smFaaogKJA4boo9QBQmX5jVpnzvNLLiLjKMmUovziXjgsr2kzRNNRx14b2rQXDCzT3ZZjUNR3kkxHuQrxiiPLWs",
  "key17": "4xMfDfNEMAvLg6fiazq6vVdSCKFG8Lv1QuAt8Q1YDGCFTNjhR7vv74o9DwVxFj29rmnCmq6HwPBfgVoMPKzn8ao6",
  "key18": "5aDsnNknyydRxdqgVejuYrHcHnBdYPBJ7DxwnfUi9hnDX55Kyvj8RTyYnvkEqBd2ZX8tgxcPE7d3gTjDrdYSXFoL",
  "key19": "3geJ9TCmLCTBeZQzQPJpr7ctTThN34x5ZNU1mwB1CFZEw2Bgg8BMUfFcGgwU4Rcc9p533aR2nks7yTdMkU5v6yp8",
  "key20": "4vFbeCPARHc4gvMziLBSsE79GqWnZbqbivitahP1EgyPYbNxJFdvNd4somQvL1NehszXEGwCbW1CDQiAYmi45zbo",
  "key21": "oLG17yFwP6DWNAGgTebNxiH9Q1DEHTPFLXd5YJC3cRSGfrP9dxTj2VXqK8n3MNd8bAzEkN2XAyyzohZNLP4aAHV",
  "key22": "29LwTNpDHXy7VSvuL5ueVwSgZa1cbFeUSiV9XAHPfpd7xKWLCSUMKVvnsRBkR8p6yCdtGa572nyF3FusqTXAKSt8",
  "key23": "4R9qsMXTahFYGqAWr6sLa1PZEpzwGwmRgMSQzmCE52WT21uV6ZFvFkva6T2o7ruuFF2H9P2RiSnS56W2oq1TaPnk",
  "key24": "qHgm3DvMHXvSFXB1mNtiYocQiH6yxRusPKhB13vhvmHiMrLqymHR6t61W5h7hAjukFTvHdjHQLH483zLxuaFxTb",
  "key25": "39XVUCiSasFHaHiHQwUhGc4TMEmHK5ye4B2jTrjtTWGwWS5stTchzdHAvTQLQeUco5t64kMzujWBqpw2q9zh1LxJ",
  "key26": "38um3mdQokRuZShASTdMzbLcyJeaoESfcWZSV4VvKwMv4bWsoqmTUAjiCsgxaKKzgWgCTpfyo14SjyokK2dHc7Fv",
  "key27": "52jVJvDBvDeY232LT18jYZNdyP5k8HqFxeeVey3xv89pWiFqKTPmztSVaL5qALmDc5JhFM8PBSYGWHgrDjUis9zw",
  "key28": "5vzvESmP1ReTVtFx5ifxaj5LPMMQnJSFuH6dTRbEDnWqg6YWXcjBrZZvz8SKgPzLkq1FQnBXGiXuHY4tye9ZGCXd",
  "key29": "3jPFsXLam2hu5nwEQNVzPPAUJQyPLpmWZHrpM9fuDy2EfXon2MXqFesdxQ75CQV8eCSwXVPXJmUXmZD2RK68SWBn",
  "key30": "4wXqkdfUDKVSXePtdg3pvGkoo8fG5giN6DKufBQzU66zWyYb9wzQPzAayW4aRQGJFHGuBpYxi7HWRGPyMmiuJZiu",
  "key31": "i4QsUqW9c2VTTSzT7K95myw3fuunNtDycKKM7V7ZY4F1EH8PTvcccYd63pn7b7wGkHXR6FUyMkCvV8dobiv16vN",
  "key32": "5YxJyDfQArRRwPqZhesfQoY3WiqhAtQEgyM1et2EY1XDmbvNXRovEx4srRqdLU3nKZPo9SauTrYzPHhx6kbwLjiJ",
  "key33": "D2qgq6sZHZsSCQKEcww8fXFcV3x4UYxVEkfT8u9JnCGSTsdjujyXMdWskTJ9HSppN34u3k3JDrk1QSQar6rp85V",
  "key34": "3Jdu84mDwhd75MK3rNj6ZgoxLSUnr5zajvio9MLKG1EYDNjEEzFGYm9NYYzxJbtEELWHaWcrGBRHRtecWnLn6W5F",
  "key35": "5SpESqQAFktDuHsKdJcZhQ145wK5Z9LD86WpUi8CrJ95GBEZEPDhrVVuWgFA64XJkR5zub2rd9x5BooTEs7UQbab"
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
