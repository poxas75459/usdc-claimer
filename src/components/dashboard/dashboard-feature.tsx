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
    "4chMnWMYaCwsRGmFzcUZPbYqn8XMi8TVWV7jwMzWdUtRuoenrxqaJhKar7aDpZEWS2VuRxD3EP36zBX1YZEh8ctm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z5RJD2K7q8gv2nu11HP3G3VqHWLcxaDjBKmDJhfuvbfcbj3uTvSezSxdnUtfUMRCYTJ4W64jQ3gsGdPidZA35AN",
  "key1": "4XqZsMv2iuLChvn78BiwDY1GPpLJzwUQJEB6jvcyVaGEF8JpbgL7N5sANisvcYks2NVEXPW1J6f8TQXztYSBcx3r",
  "key2": "4c1gepYpzh5kjVqBN6D3cpTqLN8sW134Sn9Wj3x2Zsg92f5geLkjrbfcdw6t1vP5mvuLgwZ1NV1NmzAvC36UzVYT",
  "key3": "5gkFVf2Uf8G4P9hXFo3dGSEqMHvT4krLMeAAu2dP9c8JtDJVdx2n8JQwuvuxSyZkrtMwNnyMfctDnjRHF5toSvpE",
  "key4": "2Z7jhGwrooXU7goUQXme5x3Pfyj3JWcUZ4Q4whauXmXrYrAfHaFTbNnKVXriZEwPc77gXxRsZ84Mc65Kk82AhQBq",
  "key5": "4FdRLbTf8aPu3CFmE9ojZPyvKfaGPiCBGNmCdsQUL8NziGkCZPpHock3abqLV7pRmtUfa4DVA66PZaafAFWcPbRh",
  "key6": "5wmX571suE5z8XSvWZajGEpyC22BHnXAL3zsDgfDjMfG21LtmjQUMhRe2BgS6fLB7RwRcCiuWji7iW2xYP59SA8Q",
  "key7": "2GYJJBno5GEnsU5YKqCtgpCZHASxyNVyaF8pKGzSbddipyJuddc3HtYt2wtuk9hW3Vxc5worFphCoqRCTNKfjG7o",
  "key8": "48wmPdVRMJuAkTVfQA4pXJDEAL4FLcoF5V6ExRuyuTPotAyenEnnrhXzVYqtYjo6RRPosL4x149TcJjtNJykUT5h",
  "key9": "4ethPjYJhxqHZs8AhJSYUh5EdFohV2zn7gouGQvhrvQqXu1BBxug2DVNukLh7EMzc9qmqJxtNpn4gmkeaY6tvQhC",
  "key10": "dkQGCcs6tD3mnZabxW757pRWZahHidWAyMc1Y5SaM5izDyWCqHQppY6aquT76e5AaAZcWvA9togKgySfwNHosLd",
  "key11": "AhZWGi21iHuBzGNNKUK6ALAnkcSWVexjotQwhxoqYKivcSDZF1qKiLXzRZM6c1dBhoYQcvBePB7PSwKVe7UQfu3",
  "key12": "UueNZ4gy388z6YkQtQmcRV4Uni179FJTtQVo9cQYZs8Mks1syk1ufBDSWKvcEkWxsShXiiprZioGSNMsvdFRxob",
  "key13": "5p8YPBEV5vbUCEJmims9EJHVYX8AQdmoWvCzCb5W5fNHZ6JifuaJYKbV5wPqSnGb452AS1juYJNcvGGbGFzDjX9g",
  "key14": "3zk87cWJZcUQ5d6Mij6nz3sM9Tz6PdbLiwBkQwjXXniEqf28cTcq83q86tAUwcy2HXNtvyKNaNZgiE6omKqn5TN4",
  "key15": "2f8uDW48pSzHjWF4jWMLsKyhCW2Z5vJq7qhr3tVjKZMGc918qteY7p6BrYKmPuJvJfCDG5yYYSLE3MGMMiAF7psr",
  "key16": "3RHn7yyWg3wJEuMaYSY3WcheKZHrZ9Kc3L9C6VTaBnDDHpk3fghRUdqpbZBTp3DAjFGLDBK4okhouL2LnpQ89RYP",
  "key17": "5SYyL2qLNopCPzo2SDmQrU48qWnH9CK2Zr8V2RJRAtTqAWCiQddT7eR3rveyfenD17EWeRurPVNZ8w51Wm86bSPs",
  "key18": "4TGKkiZw7HZhqWbDZt65NYwQngTGAsaWFrdrJr3xNtv9GUXbCsK8mFNezPZ7NBCKwTBF51WMUnPPyZpRkRA5gxPk",
  "key19": "53DbWgbLdHiRit2s2rV7U5Ny47cvdNgBHRpjRySAFCFHHK8H7z6vJcdMDHbysUaTt923anJNDpyc4YY7z1AFuSvW",
  "key20": "URhSkRCwqc2ugUHpUw68SVrPTnKvVXBxEjE4KUCoYyx47GQHEN1U9YF2kXxQgZC8hAsPcn6anE18fbqcA8iDBoj",
  "key21": "2Q85qC4mQ5YHaaynWBRnxShVpffCypCM3DtFaibXMrJWsVuKcx7AjahmfC9YSu2cLkkfYzimh9DwADp3kfdmbQGb",
  "key22": "3AXXu9pagVT8j7wcEpbgcJzdv4tJ1Hr2mRs3ryEVuLYDRT4wYmcApdCLZViiytfHr5qudaJ8DnEZQAmkTQfc4EFw",
  "key23": "ah4oAcBiL9fp6dv775L7kGfh13RDRGY1JJrCw8qtBqzYHsvSavtLgJasSivFhXLN7nMcRK3Q8VzBzZHijkhGame",
  "key24": "4HjpsCGKjiYjGtkYUqVVFciknVre3k8JXDmaYLtYxCN2tTXTUaZxYoCmvMKD5zV7WnpaPqHrwwCCW6xnwnt6fXGX",
  "key25": "5AVhdL8JDiNBcfXHVkyw3fbcbThVY2WWAy3r4WQFdJCVu5NQzvF374aTXzHzHyjR5MvNgk9dDfvhtx3CxVA6LeY6",
  "key26": "44aaLRzmeHxuKdgV3RByQuPQVhiM66LYn4A6PvAXtyaU5y5rJBm5bj1PDSZqhQkB6ib2RcKBc6ze5DPUyybJVRVe",
  "key27": "4XLX5dywnF9bVp33TdhR9RGa1M1sxznJU2f1nLZEbKALYA5TvAHfAqUKdMNS41YD8G9piGZdsi467bg3djn84DTw",
  "key28": "2bB5GGd4FqjjWSeymzxaHrojbWQJPfVVdxSNhbeoEVWJQ5jyYxW5mTT94XjZsVo2y7PHCJe6nnkWJQiCbMxykhaS",
  "key29": "2rpbiqGnsCHf7cGjpr3xdR1gugg8KJvprzKzngoHNXChomAKqemkyQakrbJHz8FM5P9WJTTcmGS31aXid3aVGoDx",
  "key30": "4rG14JBUXZyKkrhN2gbcGrGc74tbroTkA9fa4cZ54XQPaYRfpJ7pfvXcF36jNKWcwZECb5w55EQnLgPzvHqVR1eZ",
  "key31": "eeKPmeoBohf3K1TmPm1tUDPWgH3SaRwGvnin9goY4NFuiT5diTuQFyT73LrA3AeSjViFvQP1TFmBZokPkiHyVH3",
  "key32": "37JTiUJTfstCXzjeStH6ffnewhTAXMEzm5m9FFyLmureHvZYuiUJmM4boJmUEqhU4EGAo7VSz38ZPnUGzezp88zp",
  "key33": "2qD1mVfALX89RoRrL7rWDsxuEhUwNKRwqSf9TqeZK2QEekqF3rHzDpEnx4gpHcP9b7w43uU4APsrzv3yKtnoNwTk",
  "key34": "4AjtSfKXKYP1cUdyLdJseAxWwf2Jr4bhocdFMP3rLyD8g11fd8Wmk9KH6LiNhaPFPTD2nS5b87AnLjpYDp9CZcko",
  "key35": "gC1UQJcw8srwLgJ4iNyJiXjVcNSKRM73rj1NvaSUeEtkVKbjBgWWZ7Y1TqwAsPTYiWvr8SVh3JncoxPwDkYoRG5",
  "key36": "5HrP1yim8m6n6vjvTLbvyjEn6P3WnrXJdrsxXVpkMCtkxuskVbhqFAfo7sLhZHhqPZv9dMo9nGYPsKuwb6zqvXwE",
  "key37": "4ch5omWgSKkANZf1JjpP71hTzUae63xUmqnfYqfJrPisKpZX59ZomqoD9JqDamzAiaSu5AAc9LXgJoKhYVjm5H6",
  "key38": "2JgqURJtmGD21pidWFsZrvkeNjKxusaa8j9tEAPuvKX572FRwiVjTmLyJk4PKvTL4u6dPBFt495YoSvUzuJ4xMCw",
  "key39": "4byThiApkR7xwyqYLyM1xbrfWWuCSxXYbkLwT9qgDFcn9VY7ohfGvnt6DovCtSG61XU5wqz1k8CEWMgfM9oEnSP1",
  "key40": "23VyFsj9vVnVnJiB31wK8EnogjxkPTEjBEBheXGxsu8h2fwmoSeWj4o3iBZU9uNZngDwe6aRZx5UddK7kqizMYef",
  "key41": "2yQz1zCbohXq6ykZMeF7AJWEpNrpFb9TBTzhfxyTBXU7UfZ11tH1V1J3KhnEhAq9u2qytZMbYijCdDj1h8ePoSe6",
  "key42": "2vM58ZzGvT56vRCx3ZVo8qQm48AD9Gha7FkGwBrCziEragLxtPjCPTbf6HGwiSFTQYmfNJ642Qnxmw86zDPnJRp5",
  "key43": "2AvPT68ciwGvPiQjhrFhN8kFx7tYFbXibX2Syubc1EMZqbSVbTfUMdhQkq9mvVUCkTjYqsDBWzbRMcLeLixYbpMS"
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
