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
    "3drbzENhuVbB7fUKQjVC7ywuqiqPpnemt298K16UGy9YgN6n63F7gu7ib4nWC2Co2K9MeenP44bqbFoMtt2Cegh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yXTt4JiaeVecYwuk284UVQbsUN23RS8QA6z1X4RpakHk49bvrYHhYuVkwh2rpBM574hFguVPRRDHPjy6RtSJWHA",
  "key1": "4AMNwwAiKmAnqm1djF48iwvGUsWTAJHnReiPBKhpE9dFLpjRgNavWsc5HcK8TEDV98fQLUNj4K8dwHK8Zq663Gzz",
  "key2": "47mpR3YjLgGrNuwy9KWhQbVW96iC49BbozweB42ZR9rKASiSnfwn7Db24WKiHVFGwrPaR32GMj5W2LHTXJywu6QV",
  "key3": "2BB4HgKibi5NjHVbYgJGVEkCMH86tV5v9xDejx6Q2e6vghdeWGG9fSGxJxP7xgrhUwentXfkMHYB5dNufhCjqnfP",
  "key4": "2Cq8mYK3RcJdgemfLe4jeUwCPzpc2GDprdChncHqBUb9KjNp1AxMwRex74x6Hq6V4jhQmgPZ3WuJoVRs6sGHaLjt",
  "key5": "59SDQGb9udYJgZUcqfveQUjudT1ZBDK9ncyvcXevadc91FX43Ec2CgkyoSuSmbbUBLstGhnTa4f6x6gBBRCUvAgP",
  "key6": "2dvnMYQARQFeUbPeJodSMD3YbgRnoUFYqooNHmr5EXcJrKfeiDYYXzqcjavnmpUct8ZdtUkEqbCszc3VgkyhRhHb",
  "key7": "4rxDYQVPEwNuYWAw27mLBQoAPuGxVftct9g6cyCvntCiPK1GTnEKsG92Tz8EgH6mGGvCLPffAyQTWymZr8T2DByo",
  "key8": "4AhooAfB6HFExgvnR3b6MZH9Q73KSxstEDKG7q6EXEZfMEbpA1SUsXEZpPFnrfhspUbEDpJgjCHC4Qnqpjzj96Sv",
  "key9": "7bXMd77u9zj3Thc5drE8jdMCPDkyaoYcjCQHY11PQ5ewD9K9SfCZPpFUVHTDxdwiYkY3zRWDJKg16MzGbfWcnuC",
  "key10": "5sgwAMvfS6et2dyDh7RZNnyrG6sCvCNvt3qzMWadppnHX3nbyR82bm3dXJ6poXGtANjb9TMiEQBLcPm9X9aNw6Uv",
  "key11": "5c5B2RTJcPAhm9odzXXZ1exgA3NTHKiD2aBKR7c6ZSubei8ioZA5ov16UJ8mHzZXTJX5wjzCW6176Z5puzT3VJvB",
  "key12": "4wq5SPdBTLP38nnHJRmYnvm79nf2ak5ZsTwXsFBbiTEZ3A5BUfRc3xdLs43Xmf9XAennAbgWouUvu3k126N3bLyW",
  "key13": "2EjEEeSBVLDfefJBzTPXUyL88a8yba6pahgPdJC5qSqb4bvGv4VwjBb5xkEp3B27qEAGUrWHymfsjWufaTViWwm5",
  "key14": "4e31pr8YiXt24LS7x62pfFPRbnPjAs5vpTmxPdkWBVnh154kESowY3N8iNLZGtGyzZCDXGoU87ifXx3LnYpkAtd2",
  "key15": "5PRnaQ8vsAY6E1feup4c22d1Hj8JZvCw1smwHVMaf57C5etPTghpDxGGJDJhRtHPYbeB5xSkqiKLyVPb6Tzfm11u",
  "key16": "4FmzWwfR4kkvnpNtNFiJug8457hrXdYwmz9p6mBa5J461ZHbKZamW3LNeGvt17R8YWCNdWDaYwWRGM8w4rqKjy1P",
  "key17": "49hwcjBmx4TkvVuo7irbzefWMpzvtRj9y3yJ8f8QQszgAuEhh9MVendWCYFqQzMNYaWw83cXEz6nNT224E7gZgA1",
  "key18": "4F9gEzhHBps6vuG2zuZpuo4rEnJC4ZzRzyma7zDFWdsfJPFHgMKq6N2iaHZEzd6FoBZSueA3DoTdV6Q3E8vv4kQY",
  "key19": "4UUZysLgRVnztvJuiHxdGwk2CBHpZGRXjPG8TdeYuupqoT3agJVjKrb1SH2tRtbWYhuWuwrgyAj43B7KXggEJkhf",
  "key20": "3ZXQFPep5NoPzYEF6KDt1hZ1Xn7xjRAR7tekH92YCQr2eLLyqkb4ERtRainPdqUF6Xq39Vgii3HKA63RnopQeCB8",
  "key21": "jNHyG3RBUrcdJ3YUVzCNZM4SkifsS2s4p1CLyFQrTv3dB4q6Gj31H9gvMQaJ1CeXw96eHHS6KctJQHDwBpAhyY6",
  "key22": "4oXWdBiRTWU8aP3ymWCvuURQ7iYgE3y6bU5tLBpWbPMGgnkBDMmr1mmzVDs9cJfXj4mzrjrs3Myr6Vnispd8EmTo",
  "key23": "2GfS2g3ktTNEga8wqexTbwXjcDQpCsodWiw2sect6Z3RfTzNEv47jwnwcoDWcj3o5VBcjZEnwDmnAH4cpZJE1sfK",
  "key24": "56NerCwCjjTR9Z5uGEfCoE7UMFckkeLMb4UAKiB1h7CupJnq3CcNzJtR8ZjiGgZbRMPUEPw9DpgQAaMxCGsoii7B",
  "key25": "4cTQucKkx6aXLHtBsVkC9MNXnhWRhqnEyqUsGWHcuqVwBr5eUNku9hrEL6RZC4Y4WciNydYmts4ME8NykQaFj7ae",
  "key26": "2tVrxYupyNibVWaCroYurRqga1yfajP5agh5uXjB5XpfRoZ9iYKEXVFKxuidpDxqefZ4c486q9y8JBHJxxuiEZe7",
  "key27": "2brgoYFPFKsKE9RMbyj3T1trZtZzmUcps4QF7bce7sqosn2VrQiasBrYLbEB1gJQg1Qr6nUCGTGtSq5bmBhbhwFm",
  "key28": "5huwPV1dDi4SA7T3aKgAhjboy5De9kaqFvbK1vKGgfNW6pEfRYkNnPdv3ugmKTU7NuRVZXK2XSKCC7puu7gY46oK",
  "key29": "41irVdY2bebRFozHRhhMoSqULe17LqmYYPEqLqHeupSngfzkUbZKwbpzjfmsV9Z5pf6r5AyrpCUxwF5tZMAr9Q7M",
  "key30": "5RewoaCYRA4sXedLRqWh7EVoqxw8pA9QZZ1H4fYkwt7wSBBT5zDeL9C34HmQk7oc2xQDuWRt3uznux3RMHdQJq5v",
  "key31": "3KpET6GoiXMhUaT2yesAYQRz7x69Weu2ETdxd6Efa3DzA7ZfCs8Ur2yee4v1Eg3nScbNA3H3og71sC8MmAcHhTGm",
  "key32": "3hy7TEEavXYT2bs62W55jKyCnZFaU4hdvHSVsvS3sMVg2nPS1gviVtgaTSe6H78AAoCuHQvDDV8aewBoUEAYpaZY",
  "key33": "rAKxLtYpqUjSffYhRWh8UEmCervPqSx68L4YGs24qXsJwxo8nN6A5fQgSJGiXQMwQTfNmHaFK6n9BY87yAeiEkj",
  "key34": "LR3K6zS1qcHnjYDtCQeA1Lv2cCkRijWxqfhbtFFBdWJBwngcsZPMXjFB575RP6hGu69P9HUz47KzRDzUR51vRun",
  "key35": "56Stg1zu7VavUFFTGFeAbSBeTAzBvhyHB2esqLUdbVVMUticZb3hsWKY9u9a8mM6GYLPYzgiwsUpvZkiYyDAnwyr",
  "key36": "c74wVpwhb1m2ggC9x7q98LW2iP6UriaxwDF6h9Qkh2p9FvGrq8JxnNw1ZJ58yhT9pmXX251gUXks4gUojBGnpez",
  "key37": "4cpC1utkpmuiGA2DTDsH4xsf1cnRhZw8Dyvga3oHGnvHKFyeeazZmHwGzJFYZfeGfADHyhmz89KwE8f2f1ebExE3",
  "key38": "3bSRR6vhzqty11Ji7Eha7FpVJ4dU7uiQNAkd7Hb17DJ6P3RBSFWr87gwiUVdqWozQCBPBkNUc77upwcv4K8e8FoE",
  "key39": "3AgSXsHb7AZo8DSxCpy4wsKmcy6Sd4eVRvVPAXzf9ks9hcibdj6PAKjzSqyZz3ZZ1yAJVJqK44MgsL3gi46HDLnD",
  "key40": "3FUdwATEfuohWeEmfEudyXp8fzhTQy5UXpMHmMAaQARHnSiSobE7jZCVWVwmf3rvAXDTBDd3CfV1gAVJAgaU4vDL",
  "key41": "5XYWYXwyEnQGBvNw1En9wrYe6yhzsr2ZgoYLKCREWyW6gZZmufR3o37VWZZ36wQi2BXejczBBnimYisgYd4nK72i",
  "key42": "abfAdgMXxFsAmZd4pmUAZ3TyhvWQoF3kEPoTu46HREqSWhzsbMxHxW5ZamFn5fKimZATsC3GQ4JQMbLsGjThdPD",
  "key43": "4EizaCBX6tAg4BaS1GrnVP35fXeWRJXXqJPvuQWQvSMAKSenQJP9YobRCqLaiyz24LxqxQpuhgXtdaaRSSwZsUiT",
  "key44": "5ndffemA5sFHE2ENmKZtatuPquVgLzzNCSkqSsoRFdj2ziU5fphPmTtbxMLP6YbX1h8XkjdMuqWAjHoJrh1GCSM2",
  "key45": "2YQ2j2zozgijy1aKSje79WzWE2WjgThUpxVBvLdtfHVP8bDogFCdtbTJwZuGz7AfqKFXxGiQRbCRBnJDgVzFrP3W",
  "key46": "3Db2XyciqV5XX7Wugn18qeM4k6FEcf3DpVqQYsSoWehPWhUZzuie1CxNXugMLn4KQUUxyyQncxUTTUYkFWcdNEac",
  "key47": "28irJBMyhP4r54tnNGPgEeiykpnUT6Axebv1eR29XhkrwtzzYYaL3T2t7zncsjD7hc4Eiwkpk8MrwAY1KW4czgGC"
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
