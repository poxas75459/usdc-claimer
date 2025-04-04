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
    "3ewQ9gbn5UwaxZgj8hhAXXFFPx64oS7x8JEAv7USY49BxTJ5w5g6J1yEq3sigtaeGrvxS9rrWYDA2oYHDL7na79x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sg1GYkoq2t8DaSyuNatqbBs4YpXeZMg8WUPqbwdGJ4Y8yrkEyejKY9iAzPkY9JyPVbMJwdJx2BW53DHVMY1M6Kp",
  "key1": "WRRTeiVirmSjn2SJuDdBFbmUxZm5SqEuurVyZ1F5hC5NN76DHwKgS2SGoD4Lz1fzdAFaVJwP1LfNyaGXUnLr3Tx",
  "key2": "4HHoz49sjEDLQJ8hDwSsBPLuo7jPKwQQvK9hdQBi7eGDNd34PEinS4Q1fXDAYQhfGKj9mue5rPzYHLWN1BJ5TBMB",
  "key3": "5sCeJsXBgaD1KvCxDG1DokawkuUG67u6pu6r4NrzmpMeTpjujUyk8H8c1ftVt1zZy76eBFxnq7oiBuh57VKDGkox",
  "key4": "3k5Lv4dmrs1XBkVgZM8cnAbSHYZZT4xVLQaFnC4H2jE7DiEyt7YhrCKgjqa8Pu5TpsULgPAVW1P5VH5wASbCYmBS",
  "key5": "37LEVqsCXURLKY2NQZrobKgcgzEsdUaoMBsAAV41UiyicV4b3QwgJF4tz5fvU1cFk152Cx98qik6pXFoqm6sDjHY",
  "key6": "3PTqVYo52cGfSszF79xXGFUvosuU6KPkpD6GQgKtwFSLJMYk6fsxav81FvVuZvKS9ZWrj7RuuDx7TbUuTS25FNk8",
  "key7": "5YL8sW2HXDPHZ4SZVX7ecdgzxJnE8PxiKC2reKfHgRovZ6nayouRcnfjozgJF6J3m3kGpLi6H2wqm5oqoPc3amFq",
  "key8": "4X3NK7mQKDHDCsBkcF36yT9zdH3BNMxsvCkGjy6k1ZXGeVrHmd1haGZh82XEXcoAFvUL2zBND7iXSTVzU4m3cVTX",
  "key9": "5YRv3EvnJN86yqCB6UR4skaeecFhcq7v9usvwcJdMGPdTkTv1zwTC4LA3HVokeqGThNLrubDWoawT3Wcsu125rbo",
  "key10": "4iqZfUsYnBY7Vh8F2HXo9qDSjsuYLr2r2kax158BaKggYhuHMGVJmQwjxUGdTo1Au3c5bPD3axQWwm4LQVPxGQte",
  "key11": "38TKQ9w2fHm95RmKdpm5kytQsgr38bQo6yHeX7n18cqd5cfJcSKXPR2ctTwHuU6xJdZS6PtWQdCSxRy7zAA8UW9o",
  "key12": "WnDsn3r1wB9MiCRStWUFr4GP3Pnkz7zegxb3roEmVGZNM4pVsfWgZneMtXL9nGix4fMdmcHSbUqV6vvPaeZij54",
  "key13": "3PnU1QS6mw9wZPwERqkQdHS7CfNTCBPeEdQmEFhdkNg568kScB7esZMyj1RdnVeyDSCcXfhN3pdPNQ3n87sHgjmH",
  "key14": "fLJ5uEoSjdqBm1QPvji8D9i4Qayd58P4ovmM1cN82SBUQ9WbYZJras5z4wUu3RQaRkcJCHXxctBhLwXcurVktkV",
  "key15": "SVAAgTDyiUnKYR5r68GtMv6VKBpwXfbvknbbLSMEnLDfab6GkhBayZSykX9F2WV2r3u45ZW5wqPqWJUWU4sXDp4",
  "key16": "3pYcFhRvpnJq9BRCTJWcsjaUyTQDm35U7DgHNKXeNagqFaFdky8o3pEtySx69UmDd1V4pU5xruwrsbyPFyBCAWfe",
  "key17": "5FkzbABSxq3CA7buKmUrGmixiyEgUQVXxAWJDvU974WJGsTjhPDyZYU3fqSPCWZP9EztEr7qEBhGmRzgrPxKmvUJ",
  "key18": "PaK12teoyv4a3LHW496PjY77Q3V95zhiB38hn89pnzcH4UL1VuWfY1cyeMFP1BJPf7GThdxDmLMUbjbffYTEuzd",
  "key19": "2548SMKWHkcK9fk25UpuN5pZ19aDNxywpnQhhgdiKxSzyJvRNm8v66M5YvJFBMy4TivpWDBbYBPZSXKmoD8k5Fgu",
  "key20": "2goKxqeMyiKFHrYhXtczkfPekVog92gjoQ2nu1oBwWprEA5YkDKZ61119zjsFHaVqydasuH4SLZ7A9Je5B7Lua3Y",
  "key21": "4fx7w1ZcVA6kAXFddEhRKAG9u4fh9fpacABx5i5pPvRLaNbmGtgBeeqfCpB3W3g2C7xXPwRwVmTczmYWx88bDxQ7",
  "key22": "2DydXC82MVtrSu1pHTwgogi5SuWeHp7dUZv3dpoFRVmF683wb7zTFksaJJivv7jD1Mjn171uhCWy4fvkYQ87infc",
  "key23": "4tHRSjUMkYJs3165UiWujaFFV8NjDZPzKgZg3D5BuCWuq993bc9T1n2UP4NGW2dUXtbFUdhGNGS4isQuSxXsxsGp",
  "key24": "13wiEx45tZabivAuWx7PBRvHqpXCPWpXRZ4afNbRQx3HbtS4n5t7vWuf54Hrav37ZNWq5EkRMRgiVQnGv1dcrBD",
  "key25": "4CUEKxc336jrqD1cm7TgdgKLwYQXHqAn226nWGBcyvdi9nCRSDs1NSxFNUn8wPaXTikp6LfHdMYeDWfcnQVieN8A",
  "key26": "4D9JxL9C489jGbKTfDDU2ErC4kSSM3SyfKFVayFi2Q63LEqrzvWWCW9mKSS3zDAWdamm6Dmchwnw35r9oTwn2dGH",
  "key27": "2NdNYZVbY8SkDta1UsrqqHRNbYKcdXTeHUVp44v4zconWGvJHHzJ5rvNYifqr55hPYCZxw1YkR4dqSCRDv7Dbz3s",
  "key28": "zG6m6t3f21pzteAHoFPQNGUf2iLV84N6tTA4bxjNyrBiuZMrKpSFMukvcAYaRrKyT1DAV6NUDCiQmDxUkvhrDCW",
  "key29": "CfgudsoH7XM9SvgXCHXcaZqcBjCpqBMipJwpqstnhBAuy7EDFQGom4KwJYC95K1wnAbCnyUQG2YTSSQYxxFXC8s",
  "key30": "225ExsR1b5CEZdvvYett8r1SrQv2n1tqi9ibYCJVbE5gfrMa7ZWkiqWHamNy93T6TFU7DU1XrCCLrKki1u412osA",
  "key31": "4DAsdyTTXpS712xYwaBtSJTmL2BYZuyZqZTN3v2nh1fuqtnPNZYWPVi7TJ7n3xk84a8MW9FYswh5KiWyJ6A9FQ9X",
  "key32": "3EWZxTtqBrDLpvJmvmgiPztz9hKNXSQarqzR8byscQM2wAZNEYGV7mmWmfcJL5jnEQwJ5iiNDtM7Z8NKBouC2uJc",
  "key33": "9Hs22AYuyZrBnJLq762tdaz8qv9D9KUx9HubEFzJSAnjFdhZKkNPURn7qrGZQ8Bamb4fuzm2ABawPSkKKjgpbf6",
  "key34": "4qmaFNCMenWaQHitRtR44orykPJKjxJHrGYMELYEg5LcaA8Dw9cHHzGQ826vQANRRV8KuTmMFVWaggVksEcgs1zH",
  "key35": "4sYpFSpA7GFZvbUT6pZ87sHssUV1Lbdzq4mxArtGvVuaX9Mk2YjiXp97BAFGc18g8QQ6DmAxDd6Xy3GU8YoPETuf",
  "key36": "gjegWfG21SyfzNAgAMe9WeCogZWBa35DbxtVsWcfXrq3AHeJVjsoehDMyqhV5LDhVJ1XZac2wPGUMo6xMPqgzq6",
  "key37": "5yL1ttNu2u5wgURafbFPRWPMntdYtfJUhe5UqGnJeH1NhQ7EudGF7JuhCC78mcKa8G3isBuBSpi5jNUc4ZWr5T2T",
  "key38": "32ucUMA1JXd7dA4xWbfCizVt9gCMSudBo7WmPsawn6v2W4EuNAC8rny2zAutwZWF3uAzCLu7yFuYDVHqHJRbu5M5",
  "key39": "9wajQwVnpx1voTjueX5Ww9UHrkRo81uUaBXAZD2B7Hc9Sna4ChrhN5G5t6kS8ABaFvdFQWzip9mneRstAqa2WuW",
  "key40": "52DkKAMxMJ2XHMyuLJLUiERENzBMaEgVZ7fWzPv5L8EcsDwES24NHfZknq94kpG3xUvzyjJcUxPZ52zsmQbo9FjX",
  "key41": "m2ZrCtG7tSDutPKFWH7o7d472ymJdZ41Z49j8pNdAjo374AKGWkUWKGEnDjaG9T4m6nxgCVCCApdpQdZoXX3XqP",
  "key42": "29SR4Zw3qHS6qs23LY4Jcz8JtZrid1kBbB6ZTijo9onPdRou34NotaceE42JL2N39TrntKSvQcQX4YBWgbEaXLTN",
  "key43": "4v9ZjkLXiuz2gQi17cezmH9Zmn3ssWcZqtnN7yPrXcvs5ANUP9XqW7abgReutZaSV8PyU1oDaZnnZaow9SxPWhxH",
  "key44": "37AzWww3k5a4mL1TqQ7AvUiqpDyKZqkPAAWdRYWBFtRGhYHyGjqaAtYKM8wiXsUFZadY4CLnXJTJN75FxVHQVqrM",
  "key45": "je34kUJkGrxrauggJZRHJuiULxAkzoCM4C5NpqTqB9o57D7yUAGYyCrfzmv8UuU9D2MJbfFjEWHi6qXrdJN43v2",
  "key46": "3bWzRK5A2WqVLNAq1LtQX7fuYGnS1oxxNavbw5qzsJhw36D3jQs9P4vHYWSoVWrsZ6Vc5qbwRXoFgrD4SNRbX1da",
  "key47": "Pws9ayRxnBwQ4wAg1F6ZhJTCJcN5Mhvx7fsAzCfPvqP3gUNoD4X3rsdHCN3Fzgu7cjioXvZnDXKxZaWtyiEU68g",
  "key48": "4wDfFLeNjnzyKnVf5YFfnT2pRE2foBqHHverFb6YEkcJgBwXJ5kfLxuaPusYwJHi3QVGkzRGmMjTyeVN55is26Hy"
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
