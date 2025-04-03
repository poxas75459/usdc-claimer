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
    "5GGNUzFissuaaXCuvsMNfamVuSa3XPLRDJFEF5XmxLs595vYP7785VkiVotRXFthpJRPeEe4fnpCbtqmnCWGo4te"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9gJE59u7h7Ty3P5GMSTdu9vcLdNUxd2NdsKujZppLnGLXvKBq1wz48WU4tv8YUTZ7zy5EkV5d6B32yzNKy5HYJp",
  "key1": "4n3eNG5XHCcE4oF8FJ4K3PywM5YX1TKHH9xdoCnumR3apuWbDmf9jazLy5tFQa79YmZV8mqgGP1KowdGe8tCMAVF",
  "key2": "32Gje75tMmHeDhgDWVdrPoRxLA9z6zTkeom7Gqt23VFMkoHrwGNpdNurXn6z4k1keab7sCcqNLTKRuvYCdQBXJzG",
  "key3": "4GjFUPMLDewFTPqTEp77J587uiB3KrJCNGeSUeXDvpSSuVhNhmfhqFHXCcV6k4M2Woc4Ke26JXAqzkuTMb5EKNiq",
  "key4": "3FAtK4gB9QcjtWgw5shJwG1fYiV44XAtXP3QmYSARQChhxW4BsoXm8VesEgfDSC6k8PDwft4m9TuhfJbYiPBbKMa",
  "key5": "2ivYAWePLtexgZNWFd5V1mrTH2K5Db43sRk4MvQZZ2gzcUZ3NujzekFbdBcTdcu6fAGQWUdPC1ceuJVgoZfddd8u",
  "key6": "5k2Y6XZF6ZPv9udBBJUGuFPGvoGqi8gFSc9moUYUWYWfUyB4PngYRBmzHHPhBcuCsh1zam4S1ipzw5nRJ127Sh8P",
  "key7": "9uoVLgvjXtkUtiMQhhcpqm8S8arF9bHKsHxvi6GoQPrCGtFwTXJqTrN1xHFyvRC9fPvKirM8ZTTGJYq6oUJoBK4",
  "key8": "LzTiZRuF5AuyLzm1fDVB1cwarLMALoMnA1ji8exFPe26fErGMw6RTJVs3pjNGYeQPekVswqmPJUs1ENxFysDQnJ",
  "key9": "y8uNxoXQLZEKFPz8BxeU6HEjuH6oLJJzHGLjC1rx6RDJCUMVS7xGS8nNAjkNBCRpCtL9dDtoaDZyre3eQGXMCAS",
  "key10": "4Qf187gxAPFV5pR7dhWpnbRSsu4K8q92RVDkvKPSnrmRgSoMQ9tLE49KbXRMZUEhioysFuw1dC8SoFuTWJeLqb9t",
  "key11": "2EV5w8AcUuYCskvWBZLoWExHmTwm3aD3WFUadsA1fpmEFEVM5NpW4vVLcxh91kCLtoVjwbNQRwG9QAZ3Ekkzewtd",
  "key12": "2cBugb4DMHkkJmPLb9yNB4nkEGzUPEU3GoxciaVWbEpJuNdgzTribtwSayLog7udMe3at5wERJfFoterb7QVt5bf",
  "key13": "4CiYB3bZY8P1FsE3jswmxfUa1aSjZeVKoS1L3Vxx1Kwtt5hwhiLVuDtxzQToCf2ttouSheuBuNTgnM5TyRqe6NMJ",
  "key14": "5eKHGxYnocuR5LcfCXJuqzhY9L8TTSLX2Jk9fkqaUy7mQgP9wcUX9rZGjKEtZWTWSRgonvy4zrRzzvdeuwkxvMjo",
  "key15": "2yFS9tAcp3Fpa67DmoWrywXqVJXeUdjHVaGj8HYKXs8qqFoALy5832RNEFRNBtuf6ypnoYs7T8Wh92kMw3ikf7EF",
  "key16": "5DReb4RVTv3QRzjZY2SoZuPLD6wB1FiRTSkotAcxvELaauyvWUDgCGcoBWNaoRxkrhDZAJKYp1ztrB8Lvrs69iju",
  "key17": "2ZjKjA8iAyKLBNqVRw2d17BoTDnDkprEUZ2MwKrxJuKUPvnQ6KGkgugAKcsqset9DwfsiZVbKGtSfdkUpxfge55E",
  "key18": "5z1jPcHoNf9ZRxbW2XzX8C5sEBF4rk919wNWJv7JqY64rePsumcUB8PoWkVojvgerJfDUH4RVdi8N17ZcDfsNnxH",
  "key19": "XYews57sC6QrEUqZ8YPH53qHcaizEdJ8kLEv5HzgQ8mGhUXeA9FZyXLTUyWd4hDCj2jmSSBGH5ZrEaHyYMo2ysS",
  "key20": "49BkY4HJrjKgjRZSwiWtGbcSjoodbqvUT2KNg13aEF37cqeUfBAJVrxdNzmCarTto2qHDdsEJZKPoJ4ngTHt3569",
  "key21": "4xNp4pFpD1hP9Cq7K9ME2Hg85JyibGvg4pwEEHf1idyrBcUCfqcqtPBwRqxRiQxgtsDUUYp7ZhntGD4rv2xE5Jrz",
  "key22": "3dR8PUqEz9VRo1y5FdV9AvhcKjcg3JstPHSpo6iNMf4UNNgLoE5knvEYy6k8ypQSingCYSwvbwtRWGC8n1zK15og",
  "key23": "4mcEya8wmdQX2RGaYjjxhSVHAYPGe65kDUdUX5MLeZakBgAi98JPAJJUtCjtEi1VBjALteoLsEQbAxeKJqkqz5ch",
  "key24": "3RCSk2Th7jfjSCG4R1AAUDKvwj3BGqro5ZNUG9nYbZumcrMX9USe4RTo27BmUC1hVD6TUbWV3qNVnsCXZbqB4HmP",
  "key25": "66gnaP4vpKyKT4opzuTzLx1gSZjaQSuJhiETBLZMWvWiQ3gyQ1ecRQRRDMSgokYLN4L6bEcQvNNmjZpRBW1G6Dim",
  "key26": "2vVf7C8Zu8oxD9M9VdayJE2UQpwonMEaGt2U3bA83t9Pp6uWwUDWfTBemZyZDDJjGhWq9QppwzeFAv7pZP5wjcQF",
  "key27": "4mSW6Y3kKSSwZxKwmZgrT8q6V7zX6cQr9NzXQPDzpSkHqC4LVvfqdbdkaL99BRa24urVGRshf8R1WTHeHk2LAHsj",
  "key28": "5Hg2ZUMu4f1asfRBwQmT5rhLpDCCcbf6BNqwqCcgxntFq55Y35vixp6NMPnogj6P6UzfLMdXJRh6rbD5HanuiHZ3",
  "key29": "3LL6x7pP3CHiJwKFCpcsVo1cScRUvxSbRpWWEaVbmXt3mJKqpQt3KYrxwkHynWTEk7d9QgLhoP155JC2ZQ5V4Rw5",
  "key30": "2CEfxSnyoDhTki9x3drZXMTTPZm6oA5a9n6xMfcqz6bxhBaHjaaJQj1AzYGRE4LH5TM9DP6apiKLhCkLgBBBESnn",
  "key31": "4TQx82x4gPYdfZf99d1ZJkTQiQ5KATXdLzCepXaAJFySs27CJXFocsC1XLZcF4vUJmPt46MfuC8QWfHh5xewefso",
  "key32": "2uN69G6W8pV7it24e3yC761hj4MGgSVFw8P9HYk5kJ3BRvUPGFLX3n7nnyd5bU19AC7t5SC6ya46impvwAQ3nGcS",
  "key33": "5fGYLhphKbeU8viVn8q15rxweG8nkL3wexgyavQ6USgBaudVfqquJf9pw3QMGLta4GJzoh7Tqgs35PZmDAzecVKf",
  "key34": "nXQrWkTPSzK54Qv1TDUai6Lv5cKqcr5Zi3A1PoTLdkbLMxrvmXUg6uCQNM71vdLYckwLAN8PF1aXn2pJDU6TLMq",
  "key35": "3LDaztTjQVEr1NoJNbgeTKMpcZRMeHhEUNPjU5pMwwno6uHUGmLiqHVxFGxVMmCU3sJMoNq431GbEbXRQ7gQ8vRT",
  "key36": "6xky1iyc5sdPpzzWGXfcB5dbHcFahv9kP7tfgJgiyHVU87vB8kHEoGRztVo8db655rYwT3NvdtyFvjRQkzA41r5",
  "key37": "CZYU3UPcVu3yAUQMps3hW7BDAAUUZPKECMVbod6cQnkBAr166X5dDtPWAT45JTGtKGDP26oxZ1Sic5VeR13u7Q1",
  "key38": "3GNvwhSA2smyk75v1hdFK4Qun1J5yrQbzC3TzHroauo8inYzYX2G9hKdPcqbcn7dAFRwJNrCfypjnAF7PyKZ1fBZ",
  "key39": "5ni2W4HpCGXx7yCoLWDLwTYgL9tqGUNDnfPgHVwUBGSdwgaXxARGS3skX9PzVLyRd4XJSiNMhBrXgGqCZJDX3LQD",
  "key40": "gqAXn8iiNydq9z45D3vdxRizLen1Uh8uqozTpb9iFA1QN8xK1NRgVWTJ885gZZQ5G5VubNkBJfRDszjUPPHsoQn",
  "key41": "2jNqJs3YgUzK4s6yXsqCAqkFuM9AvnrC4VWyMFz9Zq51ucqGUcw2wECAhfLkXxGhyi7wALLkNM8AzGfHYSKFoY7L",
  "key42": "4cEhgjojyMgByQ8feJZPqNFy4ZeXV18SNLmbexAXWtPuJf8ZdS8b3LkWbFyqn3V1UkNnmahFFb6eC4iapWX3S2RQ",
  "key43": "hMsKACeDcekWVf1nPojsdxY7QdqdJ16jVtpaJWnZkUneXX3h94Egr92WqAa7yJCWScTtJ8dZ7KD5oE8qsKLP5JR",
  "key44": "5nWiTdYgs5PWD7FERHHptrGBqrUxp4kd13fRGoeT6NyT2kqmWzTQcj5U5hK4QfxgmgA3mdYm6aEiRB7kphuwpTpQ",
  "key45": "4vDC5CtdCXBCdVq66WbkaRo6RMihduDkGNmNBbfYJazLvEh2BYeC58qKYVYVSczexEWjpM77M1iaFcJpFt261uox",
  "key46": "CP7VisT6Z6cT2koUyw14Tc7LRpHnZuGWxWDUwSuR8W7Pv47PY2joq79brM9uxGJXmEzYqn7rbuUGVAEqhNMiXVX"
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
