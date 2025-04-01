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
    "5pJL8VKDRhnDpsdSQPkWvWuQyj8LjTeuFeJG49wzE8pS5Phtjf7Aqzx7UNdN6JPghDQamtLZTk34zyA1YtwKwRms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sLZnXoodutJKx5Nwif3vefNc9QwaLsKmoCxN3Qz8YeX648oqUZcsiCgrhyZph4UuTUWoK5R2ptybE1rJ911dGGz",
  "key1": "2bNUTVS2Jsp1Mf9iAuhgqbyWiaixFzADadcdHfzf5GpLKPPeLGgmbwB3WG1RwoAUYLkocv9FgFvQkjFSFM1FTTPb",
  "key2": "3Xc18T9HZgYXGxRkKJ7fbWkjtveruQxtVTmn3WCbLxJ2YFuU4XMD5McQcipLmUmU8R5N9Y1ECCcTC552Yqr1GYF5",
  "key3": "V3WSnXryUTGtY6ejSXKANZGSQPU3gUDhykRc4xWzq3sjtiiArkY3rL3sLHpT9kPNV7gsW6rfDro1ypbHpa9NeKZ",
  "key4": "44dXAXJ6G2HkZNcq3YSuFpYaMnEZMFUnk2C864NAozvZPdc6Cri7ZRakdUZa8WU2f3djaEbQtS2t7nm3rQTXvTWs",
  "key5": "3xxNdaoSaDZ5mRt8GTwFFJBVHL2d4Xyqcdy3uzBR3CpZ2dTVfP6iMRLZJDPmXCY5h59dUwd4due1hrQgVveBBjAn",
  "key6": "2vJvribrhJ4bAZ4d47hu1XswSDMw2RoZU2p2tiApWHQzeS84MTRAWdUNvrgeakdDD8VwbjN9qTxr1HzrSGz4sgLj",
  "key7": "UD759HFJLwscUymStnVbbkHdkgWxfcWWxhaAMmKNSbYKLFcG6R2jGBcVQHqSo1DkSKbgC9kuUe8a1HG161zhn4G",
  "key8": "4ixCpM2YxrtaKz8grtRFcnKBj3eW2GxUu3H3zrLVjwXT4nFrpv4sBcYgmQQqya7ixN1sm35ZRSvWJ91bMRdwU7Ms",
  "key9": "2xaauHpBUg4ZA6mQoi3wd2aNiLTXxAjxZUakYJXUuUMxHKYuyUKZ8r6rbmbRVvVECuJjTfbSZUTuxt8GCnNrNsLx",
  "key10": "3UQRcqwxULCVVaPRLZ8N5ip6jajDfaRGqDw9gUPUcindsLh2PKQyGEuaHBRJhSGk1ptgybhtEKdK3LCV44hQk4St",
  "key11": "Y5wYFKonnSo2azhNKp4Nyv9uRANp4vgwf3qWvB7kR9Mj35zqDPZ1vR18e8r111EhLgf4edkaVJv8GLfezAMfNbe",
  "key12": "47WBvhsthzbW1zTZeqq5vSb4bXrTaXHh2Ju1qRWPorzHSQ92rd1HGEzyZHd6DMjpPxTmvMLdtkDszM5oeZpdpz2K",
  "key13": "4KBRpWeYDFmhy246MmfqQYNCTwChT3R6J8qDnocht5L9x5E1doZeZT3KRqtVLtCqzs3teMWXYrLNRn5vxnLsTKLm",
  "key14": "4cDyAZJDy5VRJPdTjCWVJ6a97VEP4XnCjnmKCfhXVwtUEyXh7xUbU8SwYJKAiGco2ABVyix6VqM5DXW9gHW3pkUS",
  "key15": "3rZcmBFhFKY2nxAAkb2BYJYubw7pkTVWJzYA7QjEpQKg7jeGrnSb6p6f8cFES6sHeetMU5vabjvpDaNjYK2m6smV",
  "key16": "2t5UX9shfJuFbJeRTUcnVorGhHT7ZsY3vFq9oLi51P9SSgFPVjyYoSWSCZaUvjWSfog4RhZVMt7kF45yvi2SzoWE",
  "key17": "38Bz57heymCSwjLoa1XDofum2UVP7R9fyBp6AJimjCm7t6FcDa1MhZpgUcm9wndYaTYfPA7xFfHv2EdgFifZ1obB",
  "key18": "32Zhs4BwivnR45hw77vzGKUhzobDcc8vLend6beanYEiFZ3NpGfmRpzrNiFrXfP6MXPvuGicVfUHhP6CTC28kyYu",
  "key19": "zwhdtscMxstdMYYqTkszqCMsCGSjsCH3batfNdgusp8n47J3Km3goMC8Pd36wmmU7NjWRThH7C2CdTN2kw73dVu",
  "key20": "amXhaDHCzoX1SchjgQTLnN53awzBJLdSjnR6fCiqnPXgtnRuoUnHqUFL7VZGiFDFb2zPrbpU6y5x1ZgCSwSwk8V",
  "key21": "82UtgZxpcchyR7o3CLFMmH8GH9syaELVLYAat182sk5xeKRSuJ6fh6nF4TRRCkvnZkc8WuQiSgS6NsHTTbX3hhH",
  "key22": "4EHM9khPYmsbdr5U7NCW99dxLWjYzi6vvmUAQytppNHtrMwLrPAfUEnW2okZin91JeCsmRyCT827WfWv2TJeHVGi",
  "key23": "3is5CPiYPPi99cZtU5cEe7dTgrUekYhmr6FcgT1JD3He5YY6W7b8dN1Pw6M5v6rfWixCG4TRJL2Pgp7pkpQPNavz",
  "key24": "5R8KmZFDD3JbYggza59vcUsSYKQ1rnyk7ATueocVCfFY3t2e4MFqu5922UQhWiCgW6ZvXE6dkaRFr3mbxswoQiLP",
  "key25": "2HviUNof4czS78ouZZruAij87jCzBVEkTxyaP9SabGLZjzWqZoZtkZaivSp9pHBhy7VDswxDqW5ZoDavmFmKZFz2",
  "key26": "5JWF9TZTqMgwbdfJR9nXiUUAvEyFRKwuRYxxcjnfEeQ7Xo1HqUeowTsF1BoUEyci3NUMvXHm2VWFwT4ENX7zKoyr",
  "key27": "65r9FruCWvDUvbcDym3HhTJVQBsFwxNyfHZDw5wZN6efaMAF1hiaScg8vDP4hNrnXTGV3dmp8Kqgj6SZTvu1MLb5",
  "key28": "5iZMQhfoPis1bEDxiXLqDXpYk3cWukB7CBJETxvXAeXNATpQYnu3ELqbNQerr6hiP87tK1FkZTSdRxGJh6yBMuq2",
  "key29": "2gGgyaGwmWjuegdX6epKjhpwxJ3jTcMVgHzMJ9uiNmJykYVsfS57PD9G9CAKVSxA9zQ2gSbaXoVYAiKpjifshby2",
  "key30": "TnRo17LxCyrfKVer42wUCdfJaC2gwFsHxo5dLVoA6V2R1H1rNzjN7VEysewrxjHZwoimpM4qHmKmwZAK3jZUFxA",
  "key31": "4HjXFVvqiTBYeJspzVGEU3Nup7U5FwHZZibGBkiXSpk8WJWSkeR15NPoNpC5dFiUGKo5tuX9ZhR9LCrahSo8zhkp",
  "key32": "5RhTDBJzAZ3WiL1gv9KqovtS9PhNvPUTAbnQ23DWow437rQDHfrsyycqq5QeTzBf2aEkQPb2sdD67WS3hh3YhZ5a",
  "key33": "3xSfJ8AznqnfRUQcZQh8w4uHAfxvSUAoZ2yrftj26ayEgrnz6jEFrsMaZDJDJ3GkyKPVd7g5N6r8SCwAQMaxdv1g",
  "key34": "5wgfbb6rc6oiy2zNqpXQRjte1E44smhmgpYknAr2YB9QbS3h9V2LUxP8oDPftnMmPKxCQQXYgLPfD5etVQi2grkC",
  "key35": "3FNJqJjWZKcpyDMivArF8et7gNmnRfS77Hfs5idhg8vi2gRzBpfJMsCyXrDqC9E9BJrhNm7jUb5hYjGwJWM6219B",
  "key36": "3FATfG7txssPA8ZgBikSnPdUN5YvYMemqn22sZMdcGg7y6JwG92kmdG34xURp8oVuJpksVmtazUQrY57X33DXgD6",
  "key37": "4GKYxAiRRqMvmMzTCrUTLkRB6H1rDy64LeNenHmkWmYxrLuYKwTDba81JrzWx93qfNatTFxbfcqeqZthBsnxg5QJ",
  "key38": "5iKSKzTne9Bq1oHNWdLiGY2VcyWGKFqbD3QFLRn4gqZAE6R9gX3jPwrX6dZY125nQuXpPe6VxfNNugxvokkhT9A7",
  "key39": "5HCVEg5Wpb55Mzkt9xUpMMHNhuiU4x4wGAhyiU43NJH1WsZpRwkqPAk6vuhY6QDTWCPbBzRUicSqvBxEizZCEFAX",
  "key40": "49BusSreKD8NLWdKRkBxtoTWZy8jLukQGzqers8aHA75zP23FLUvw2t9fpXRsrQZS3eBW9QEg7yUkgtiz7DUafd2",
  "key41": "4QzXLQ1egFGTGNc2PxC4DStBmmqt1VtbP6etxcxRzaqie94cYGZbFkGmLCfsouGox8UpTCEtcxxVH8x7isbNeGLG"
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
