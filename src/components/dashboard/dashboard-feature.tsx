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
    "5Uco5C1PX3SiJqDxA3ibkdyE1zYZhvdbwtg4ywNf3sUWSBBc3y6covzoFiFAWV9pJ4bmuJiwM7Cm8HivTNhQzn7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jULH7G2WzhEZdzZTFZ2VpQffaKr2PTgty5TNH9KCYp1BWsihM9nHbrMHM1tFxNZqQAMDEViagbxfdhPhMS9sZP9",
  "key1": "2ksQ1q22AhVavquHmFoqmF6XY3ypWxuhEHT1h3pysks7uypX89VeQRdhxauegLhCxuyUhWKszTU2Qugp1hBiBE4c",
  "key2": "4ZwdcKaSRu7PVADRTmikxzgzkBTGfFVQq7xzf2ZAew74zEaZTfjYVgiSqnxfGvY2tGJFAUbikHS7eAR11KR1DoXq",
  "key3": "2XZiNn49KGKhmY6tD4yNnTmD5g4njxh8YSvgn84JYjG3qi1eALRRWVLuk3yYsJm1piMTad7xGvRRwufTbTmPP7xT",
  "key4": "2gbDcGqDXC7A9umwsCDcDDAUvwqbazLj9ZyBDbF9P7gBQHek6DuyzKL3FNXHL2JkMg6wuiDigAxArWX9QZXURyUd",
  "key5": "2DZZyELagxFKEq25Mkz8ASF71ZWMx5kFRezR4ommAARcD8Yj88TH4uwJJ7nbuYqDT4DQ2dXaa9H9fYdFY38YLq8W",
  "key6": "3WKAaEcySVJiuBX9tTXwQbR3mKqvCyoZ2KN13RhRtWrZA5hksXadUhLrgpjUtV26aNd6kdHSULgtHPMFPty81Jm4",
  "key7": "21LwMf69XNmE9xiLDtqpvYzNjnwQkZagD4h7dQP9AexsXdYbpZPmtzzTXS8sAX4m3nprUmBdXPtG8y13DM5ecHLx",
  "key8": "2P4L2XX2ZFkCXAvkBKinK5rDbmoScVff1NqTLskbXtf1Zx61YVQ79zuQyaUStgMMzRjJXijcM6AwYinb7vktLWLX",
  "key9": "XoWu3S8KAzUdT6tEQgeKSLqPPYgf1mrM3E95NK2QrHsnzyKd3p1waE4xrpGRzNKftAoWr9y82f7rRjPktQXaRWt",
  "key10": "4dCtZUENymF5SVoVJ4vaTXf42pGqbutyGNewmer7KZqdyyRucpMAzP9WrvpDQx4kH4hmjtXVurMarDUdCB1rz3xL",
  "key11": "2ewYubJ97ejBt3WeunWQ6ASeQ7EnsYFKwz4MvQkPVGohxQESKqhTccE4mYY9ncfunPjbAi4zv1fp9KtPJLKmdw3p",
  "key12": "4A99MLyqB8z15PYiydXizULKQ8vxKJiXaTodsRwsj79amehWkFhnmtWbE28jaxh6KWMQi2AVb2fjD5kFYrrfWyUm",
  "key13": "4XnHLc9wrj262XW7ysY6tDb2nZm6J1uAp21vU4Dda5geDUz9z1b2xybogHvPjVGUEHHazPij8K14NyS1sDizMzW1",
  "key14": "2dz6tJTJLHZh9LVb9pdkbSQvDjv3AdEzCF3RwsVRo9sXWVXrM6k1cC66Yorn7C5t1JHXqCzv3jH2QDLxe3ULF9kW",
  "key15": "k3S7dRkifi5ectQGChvj2tj1mrM91FpEEvhQ44NBVNaqvLGAWWrE9FdVVr5etZpQGsUe4h71x9hypV9CFuNo4Pj",
  "key16": "33ULZaSHGyb1X7pVNA3MrxDbhd6gSCVVGSsS7zmVQKV7np9TiDopNShniizNXBXnw2aeX55L8TheJQQmeB3x1XRW",
  "key17": "3Y3ejmvTw9b5a8aQ1SAUkov8hDAMqZ9bUDZRg9hrJ3dnxQRQykALMopzLJQhSvEgex1wgb2Dq1PQMpRxyMLkx4Fr",
  "key18": "5hNAkpgb4Xy5gvttfcjtV4qgZEKMmfc16TJsDuR9er4aJ7JkDaLyRFavs7uJiUjEWrd5ED34Czbyo8NA6XR83hvh",
  "key19": "26d41q4Z7qPWtq5gNPuxwRe5wrDYe63PfaiQ6fTaqztzrhTZ2dScD5ydoxfc7mRKPt3ECgcGMBbY2912yEF8A6oj",
  "key20": "5ivfcSttHpB94SQsZ3CMgx3bTqvCbn95m8eFaoE4ncCgFjiV5CVdeGy4qdnD9Cs4SvN46Y1wDreoLjUmf7xKh2EJ",
  "key21": "wta3ZvxyYetDsgsUpUzgiGWbc5EH176vwox4wC93twZjzTU1cLWitcBYucUNj7U84uKoPsvhHHB7D5uTQGA1ibt",
  "key22": "4QBJgsgUKTPRZ1k1oCm7vCQYRFA3UYpAcpy37a3KJfBj7seFGzEm92WykNZ6YFQg83JLZeTVqRv6xw6rhfrH35RT",
  "key23": "4vyYynPKRXJUmG1bPYMFjvaShKGh632HAX9oU7XpPgnrMB8GocghsvrCTmRvL7wsjr8HhQZx9T3FNMTMAqk7UJYA",
  "key24": "3zKUKgr5zCY7iGiqZSnnGqSzfZJpEyqr8CH5bHrGJvF94aoz2SQkB7jGKkVnSFZrcFtSAJ3hPqgCdp46CFNFYWQq",
  "key25": "46bHHDwdfR4v5nAagRkgaKgPiGbYAUeGMC3427yytowBegnKQ9HiwuHz4YzBu85XkuAfBKTnpXzBm38yQUUirdx1",
  "key26": "2BsWpKwdVpovu851sfm7beyqcMjBL9r5ZrqBXvgeUHiuj8tLXPR7JPRPtiNyrvYqJtuVcinapwNGHcxARhM68k2h",
  "key27": "35EWDzk7bicREnrYtxmkk6LCFnZZRNix7hmc6FBsxi5wLfWMdpVnrTdo3Gwdfpdg7P3GY4zdvCjXNWKadwWaSWoZ",
  "key28": "4kmW6sq2JM2Y88R6f1nxJ41UFtbtRsPKEV2sPchaDPa9zqY99Kdag1tMFJcFh4N99G3HeVLg9LyF42cGURKKaK8i",
  "key29": "RwtSnBwhpzqWwSyU3wfVsUgb9rejHCQgeZR1VJenWUKYfs5TmkBq3vEKCZK9fHoWiXfFx11wHmPssNiGbu6xs6r",
  "key30": "wSsCWZZKmG7ahjAfvXjNivWA3TdJ8Mzk3n2s7A1giyomgcgYm7rV7oTVvV7kt4iw8MBxfKC2wph6MhZqi8vS3rH",
  "key31": "5zTwTwg1KcNxKR7gTwwUg91nJQxX268TtyjNmkiACkVhw8HQLEPrR9QEZbBX3Rr9MsRu5nmZrHi5sLozw8hHF7JX",
  "key32": "36oSLsxdx9d8ZuknqW21jZCZzPUXCjb7QSSY6jQ5SwAtKtNoCnCPUtuSiBjyc2wcwxmsNUDmqnQtm8Lxz9w7P7fF",
  "key33": "47kRAKHeqzLT8fTUuTQ6cDdCQ88cHGr39nveLAhkcmXHZ5MVkuhYvfaCKnSd5p3WYDqdZm7oueEU3npEntuJRHVp",
  "key34": "3Euf9kN8ZCyCTGNMA76MRp53FNZBGVVsGwmWp8dXC7r4TpdYc3kppFu7A9MAUPwMjGM41UXshgAgDXtZt3bXoSCt",
  "key35": "5zsjT7CBjf8X1RrAtFUL9bA3oUzgztsoxy6Mc2PUcvkYoS2sCUGF3QFZNmBvbC2YS7XQj2FhA7ykichBqA5HQHwZ",
  "key36": "33JhXpKKPnULvVZVenW4DUUBkYLf53zhSma39Tqq5nQ4o4bxUur92LhiB7gDLyJrrb35hqgxtLwFc6bXZdEXqtqb"
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
