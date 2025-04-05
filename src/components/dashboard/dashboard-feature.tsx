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
    "4LNg7ftCTw59wzrM2GAK2wLFrpAkXZGiwvkQMu33ba6oj73afuduWoYBCcPjSrjxSgmLBAxTsSgbesusVr7LzRhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NQd51exS8R2mQaNhGkoNmdCM2ZpRPszsAYzJhTQqNh9zUBTXD2mkXXLZxJewoekT7MXp5ergWFzhGdL3hgo9EMS",
  "key1": "crBNCdB3VqrusFBxFTCgajsbR4hctf8ZvKUjvbSKEvvTv79kTnwr1R2jQLtq6SHWZDnKXPvmQ7iSrRgn3g1iqfj",
  "key2": "63X1UJf6SdKoRysxZH8nNisPDuYLi28eVxcdjjPoHHQ4HWwtCtXgdEtpXXAo58zAFoZ2ixmExWH8gMPb2RehnSuj",
  "key3": "26HeXJRdXT8uLLYxmbY4rSETURRj1xTTWr6xFQSB8aZBSLfvNTz3GaAUoRvVeBDUBbRHcDYXL24cz2kdfnWsNkCT",
  "key4": "2K5QWGyKgSrPufUvWm8U1rtA7AovS6B4sxR8Wer3rw6RxBBcgDC58YZXswTw9LhRfZ45JRWJyiQAjsm7Zs9QmLW2",
  "key5": "4tphLHPvmgntWo84eDNQm11N9ytSn6R9YNkyTQHnYWD46FmJC3gzTeh129vif34ihFe6uZPw2EjgmgQtwiqYdGsL",
  "key6": "4t4NPVt2X2WrFjLVLFuQ78FkSxieNZFLYtFwGFcJWxUP7jSY2KwV3kvDsTQGnu4UgD945QUJmAyGyVbxrnBYxL3k",
  "key7": "2FjYk25KX2tKGV849w6kFk5XUzdc1eeM2WFkgGeJuww7T77vWEG3L9zxYVtBRjj6J8tbjdGaDTV7Np1XLUiVcWJo",
  "key8": "525Eze6haHLAvV3XVag8aUQjK3QViLCU17pvZCWFrnMiZPxwJVV9Y3Zbdh4pFPESSbBhaRjt5GCr8fT5AEj1f8Fo",
  "key9": "2Em8NqeNgJtFsGVztbWRByLCRwfRsR2iXUS6fLpYBMj1HGzCeQJ2AkY75gmCj2yJk6SodKQLnVqZzrjYeez7Kaq2",
  "key10": "2tL5iLwCQidMz2eVXT9UWqNhnaY2b8Qx16H51Pbcg1ACF7Ukaqmct84Qpxwr2QNPSkHCDpxgqdBMneePMyr1JKaX",
  "key11": "2NEF6zpe6G4D73VeZe2UHyDdSqcphQNizUvqUPfUaDwv2CgHp1jkBzM4JXkaUEgjn4kuqCAE6PcLEYzfxPdD2UoP",
  "key12": "4t3NCLaCukqhsFDmAq2c7DJUri4DWdru5SU6x7mgU9xr9SgmK7fCp5itsy8JJjCdaXwD3RyktE66eK7kvdnGscdo",
  "key13": "5E96oaqDJcZ8426oRExDAEBEEUnJv1xa7YkaVpBWZ98KRwVV4KzAmi71fZ2f3AeWTNX95cmEZsoXtBwr1SWdaobG",
  "key14": "2or9FfQjYrB6tsgiU62xfwtoHQ4muzmGgVpU8hUPj7XeeB3tXj9CbAPBtHFcaK27XyqfpDmbACbPQCjeFojkeWXN",
  "key15": "5Z9beJ93gpfmpoyFTXjWF9da7maHpFPdLR21vMBD7eUvgHdG3EsHvUBntqxTxuEDorPcZybBXYDTNUhajsgxoeiE",
  "key16": "3nqJo4QUNqX1JZBsSymriPM3Ki2D5BeU16gez86Md39y3bRkjxk73bKSDahzMTmYi9GPgPctt9tyG3eagztW2j3k",
  "key17": "4ytHeDtJi6siDNK2aAZohhf8o118BeYPxne33Mi8pVkrQPkXzYMWk8YBDawNzUtYX1MqxD81hs8mHVDRbnq68xXi",
  "key18": "5SF4dMCCDPDaB8duHtWeAzrFXvFzBsZjvQG67xgzhDt8oNHVGiqv9ybBFMPwgE8oJ1w6aoE3exNnpr7zQeWZD95e",
  "key19": "Uj3B4oP2Vej9QJKBs1yQd9v8QjaFYDYh4fK1M16rYqY97vJpXHXtEsyjEQMM5cXBVzCMq1K81Kfkw4cGXUhTqjz",
  "key20": "3Bu4YEHDGKsiMq1LyyCxbYUCqLMcABySHoupeXKFnxR6uRGiTkG4hSmgBiyNL4xUCXSfeXDknw6aqQeNxThDyz3A",
  "key21": "2FbXW6vxtB2XemLYD4cTgxDsReaZNf2eSr2DySGBU8aEKWkjJMV6wZqzChYshCQBqMFUo93vbBMft183eMx7H7nn",
  "key22": "oNRpb5ck15Z5sTXQ8MAqGVA2kuxiWqUBR1wU9aqG8sBeHihMcbimuUoccGp4f2PqPbWkr14zY9jj58eyxMBWd7o",
  "key23": "FDYR8SDYY1XA6uSckHF8uSeZd6QsvaGZDpyT4fT3PczQcQGFv9LwJ7h8pduMQvVhBKUBToGXyyBMdEYPZH5J3Xu",
  "key24": "4zed9pd4NazVgcFQ3Kq6QG59j6ATSfRuZoVsT1FdxGjLRq3J7yc7XMh7uWxeuAps1gRQt8JvP83PCQw7CpyqmNtH",
  "key25": "2GrsFMUmKZMXjdT61paDSsRorKexPHgVcBEYU61EFZ9Eg7cXFCwM9XwhaKqbS4kix6DDP5DaKtvf8DZs4d9vAKbA",
  "key26": "2LsbRJaX4DyximDFc5rETbYozyC7AbdPzdiBToUVmLcjK4zS3NCz1Wxvx74bRw1nESdAiueQXVQCteFfNAL7LisU",
  "key27": "2TGxMjxPfixGrbVQ6TG7kWpSCodwEuadpL7NeEMickT5SZTmXbF2GgTADnGNxsC64Q1QxFnHV2n6KcjZ9R5aDZFD",
  "key28": "2brr5usB24MKGM7ybFokFHpFwU1SSXuMqYuvF3L1NuXcqajuJzwHpbh8sRk9cqm83UR1pWeztrgQAaLirEoh9srR",
  "key29": "5j3gSeB6ahhZmsgxYQ8yn7mcFBQDk6prXAz1Y5acyLfsUiNBLiswN61Uxzqnz1aG1vs5977eKBiG6W1TdCMq9s2G",
  "key30": "3WWjc22ZCjDSR2N3Gt1YWZDo8GriegkKTh26pWftxQ4C1uU8T3ZofhCykDLcg9Nm5wmrWBzwsrbdXJgmEA8o3kAy",
  "key31": "Mn2CNTPzdN7fTKMozHYgqjAQJiYjcoyCq7ms7diYpLy129Vh1W6XNMJz4W9BinKtvnAiUbiDdqVwVqA5BT3a2Ef",
  "key32": "2BFvhX4RwGdS5rFoCiddmLvMQq6SGog4xaJg8BhPkbYXLx98NNQEyaHz8gNxpFkQmGebGnrNTtxbX9gDemuSGfUT",
  "key33": "3naoqnBExPoEfMD4st8prkgtZs6VciEeiNbb4dwx7AyK7qjigyK9Z42JiXNoQ1MQWyGtP8Kkk5TvUjnzmbzV4sNC",
  "key34": "4mPk5SgFhMUFi3w5RmeGrzNeB8khWn1psTqtVy8MTzfB3vx17HaDdsjW8yn3Sgfm7htw2SsNSZKZJRgRqeKkFntn",
  "key35": "245yseeD4Cprh6PU5hEozeDfJMDrPngqHgYgPpZqcuG13D8ENHhPY3yez4ruAzCg2zAUQAxDkQ9u2yKBfxLP2oWn",
  "key36": "2wemYKPLpp3CcZqb1ZRLsfbPdxoWPy5yLrhgbiSS8V1weG8xw2AV6yGW1D6tKV9VoQWtdQbdXJvQkvJz2KXYH1tg",
  "key37": "2d9Cc3BuLaKBRsivsGvARGfe2yS9JdyFgDe6wb7watATBnE5j1f6gCxCaZXttaFX1edCLPwYbgmJXGfjf7p1thNf",
  "key38": "47zr6rf6oUFuU9iFjUJLH3fzSahoD1K2w9WLsMH1yTBBLCWfUMjKuS8UwGAwXG1RnEWDhZ1aqbC1cXsqot47dPZx",
  "key39": "4rZYubS5gvroyKoFnkjW7EJZ74NoDvaNXh17iqjeq2AMWwyA87f2jkWzxeBPQaM4K5ZhHhP33xLNdYKDfLaBkoHy",
  "key40": "3Q5Lx1UqXepAE7DCEN6czaqdYQ8XAD4nuL7Cn4EEEUbRAwLLehm6KNqsgzvJTisKQRmmdEyzTUAiTcfa1g77Y92U",
  "key41": "3Sp36Ksk5n63sR5WmdakbX3J3qNiauEL88PWzMJ1fs9FA3HmTKCu41tdSYY8hAju1Cc1umtmtDhkVYnPQWFXRP9g",
  "key42": "gXRSEL6Mq4NVWsq2n7xBc4K97vnQkqBX3VbeCFYhqNZLtZ9pdPELb1bhtg7hvJ98ikYEANkgqsGc228XwC3fzr3",
  "key43": "4ToHkkMxY4J6YobkeKjWDnUc6SrFeUA6eB998xUg5XtxRP35pgL2yhTS1quFjRXyG9Xe8yMcuLF89xDwbuXY8V3Q",
  "key44": "23qYwcXtnKyebzeTGss4tV433Vozr2mAGQMjTs5C6NraVpRqW3EYhH9QhQ1ACEBN4nRqwKyA2GZ5B9crTygoHwVD",
  "key45": "3PYxURozToUEzKk4Te75pbeYSzqrV5HdXgN9ZtU9iw4THtA2DySzXCuHxmNspapPSutLEp2LKp53JoqXJe5EgHzM",
  "key46": "3HdLfjcem9cNt3mTYAb4fivHkttHvrT1npWN3QmBSMM1xxdTgL1GfLuj8waciGD4mPh6VPA5DyNkaoRoJhyXQceB",
  "key47": "5r8iSJZJuecpC6gBav29VsehD8vsQhq9SxzFLtc9fwUA2gd2TNc2LSdJ9iqZDsPNtjnQ4Jo1cseWwoCwmHHz6q4i",
  "key48": "3bPSmf1nY1SLmo2gJPCnY5zcwCwRo8RxWGvvcjfpWWJCpA7CUdtXy1q4ZJykjnYuhwLMjQvvMYdmpmZ8YBM827Z8",
  "key49": "XruRqsVn8t3AWnu8vTqFwouqqjSvvNvoPsWyxczJjnveAfuKmKmMUhUeWN1ZJahYEuX9DBUz2YVvjh5h9EvzQEF"
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
