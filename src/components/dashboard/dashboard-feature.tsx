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
    "4cFJRvcTfgeCtb5AVFxavNi4TusqJc27wHMTupYvRAmmHDUtxiBn5kjZt3cub6MsH1fffBWBRRWrr5P8rDDvL4QX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jFVzXMSnNy6Gsw3bdyugosVs5PJDPNZssssYt9HqofkSwNxeuRp4wwkTn59EV5JuH6JANKnZgv2hJGrFgZbH2uJ",
  "key1": "5JfGjx6rm2hxomnffi4keb2ULA7wSYXUHbncfCDsRZ2BrLNv2thCcPG9TyxEc4wsxWbCaUKTv76ZkXzEpj95Qinq",
  "key2": "36j7ijx1Gt6nLUhXvtLVeyJi8pmFQm8QMYHhHPtMjhCc8BSJxGAUNT2KR6Lihb38ha6dJXnVrEV7MEr8Wwtqvnx4",
  "key3": "3q2PwuLGMvePk68Txmj5mMJZhuuDw5ttSbHuxg48K3TLGQSFBsehijUuxBko3rFXuMsQygZGW2rSe9DHLakq4198",
  "key4": "21doAhs2jrs8f68YxaFujsHT9n4wGbNtsTwUu1abAymVW15NNwTphu2KFkMCrToS17aaYjgZcY5oQKcNzaMp5tig",
  "key5": "LpVYqcR3z7H7HVPZsmRYwnVoDz7Y73JZ6JNuBZjRbDEbCdnvCboa9bc7ELhCFhJG8qLEm2iveHHv4DzaCMPVnaP",
  "key6": "5fZwo56bNBpVb34FAaKWi3FPfhs8JYFoDydQY2pjLm4AtNtUGje3mLTR2EHGd9Fgdb9mjcGc9upqtbziHUX9spHe",
  "key7": "3zXVr2ks9o23mqsEjgWA4XdNHeK2784qD9ZtXUqkTXZCHASPJRwQPPKjRKAJxvENFTE1VkufPb6NKnGqJcdPJFtz",
  "key8": "4gNmq5VPSt3rinonStGFVwvyn5xVchB2vyTVjFb3PsiZzY9AWfmU87iio5kAohg332Z6gPhnozYWe5tgDPiwy3En",
  "key9": "6GT8rktDfEWHFnHqQuKCVuYrmDho1SFH6hV68rd4HHMw8ZJTfcWHZnrqZ5289bpGBj8ZHPpHaa9jJPdSDxyieUa",
  "key10": "2NYTzAZiRW1bDTUJ87PfYk2bgSro8BhnBNBLn3eAsaQ4SwdJ2dorTeZeZ6y8tcKn3gzVHEbALegE2afGHrFFUG33",
  "key11": "3hJAnTBN61So2Vw7qZFXYCq2bUUW3Uumo4h28e65AYk5gkm7KacsHhbbar1CzYnn89avnhU4C1K7Tc3LxuwbvUxx",
  "key12": "62UsMksXaF6vFJHvunAGSNu4qT1HWMaxC2uERroW9iZ6yDirA9wvCXFsnFh8xBmnTPEar24c5V8EdS4BG9RGyiM",
  "key13": "4qDyqs3GfL6nNVKRnvSq22sp47sapkhVK9wVa2ekfpNEoSDkLHbCYuBWPLHcWhyWipEdwFqjXSWhv98dNjarC47e",
  "key14": "2y56szr5uJarfS5ZzpnLaxoKWQ7J9dqE8Rrnpc5cYVKYpNk5kMvek4WGBwGDW3rbpARQiTGxjpMMXWmiJRvKu9QU",
  "key15": "4MeuTzM18oy9s7AxrzdTdy4pnyT4e2Emqr3FKPG5aB9q6BK8oGH71qUcyBpHGWmFzWipUFv1Bps684ekVEYz9B4h",
  "key16": "5uK2L9u83qN6bBKLCAuX6eZU8mGWwDPPwB9TfaQHp2dbY7mh7YT3diAxBYoY7TaHSwetjtymzLpkehskSJzQU9C2",
  "key17": "4LijSif59Lx1MM9zajfWxEDEDd5pTygdsUrfJpBphd4WbnfWsrJcrjcVt6TxFGqsMNUsKMGiRJ3SrjtuZCFfNrt9",
  "key18": "4evtLx6R1sbJpgHqJqDMJk3SdjC5c6KGYdashHfDVAPwedCCQxGnBAtpTawshKdJyVrXXg5qc9L6WWijr4S9ipGQ",
  "key19": "SdXrnFzYj113UgrUfKUnLKnB8LWjeSzrRYsu6LTFZcxE35unYeitsPdRvhkzd9TTBN2AU1Jab6pHc1bryWFphDh",
  "key20": "5qi1WZzA4cuP3mNyyxYL7sSyZjZKB9sS4JUh3Qw5GGEpqH8NWFDto2CtL8tnTt3ST1mrnTk3BoyUZodzopVaLrK7",
  "key21": "2McJ9oTgkChTGbmX7jemQiBLuZWp44VynLCQpuKdS6MA7XLGsgN5TPuk1idsCXMTknMYkwqyXcUTJm6VjrXYa9st",
  "key22": "48NrBhNu9gGUMtzVZCZpZJoGCPNADKoKCe4bDmsCoXUSjdf3DeSFCzLoCK6ChZwzmqDyYFqGDpomCJMPY2EambDK",
  "key23": "2w3cetDiHtG31CYnNk9Wmgy1Sp4dnmD9qeXQj2GvYUmayN9AkfVo5Z4ERAjw4y1MQ2HHdkWZ83wuc91d7uZwoyEo",
  "key24": "37rusjFzbGg6Yu37v2KjXEyLQwSjgiEQFmVjEgwgMxeryMTvY8wUHQzaAFHw6vRnak8rHm3huVxoY1DzR1vNXL5G",
  "key25": "5h6oMqMKieAGdWqVLGDEgWvPBdwj9krZQm6MCtweABoQpANHwvkK22r9kHzk35mehfsFqb5uMTjhMWGbbe1ZLxwn",
  "key26": "4ZdZFXmLsTefPJ6DmuTMjRc2oa1FTd8qYzMojh84M2iVSN71UJwQxUwmeKk2smXvr9DspM5iB5Rqr2kV7Vce6kkZ",
  "key27": "4rF6mNFt3eaoyEQdkFkDC1WuVcFNgy5utDD96PsudtFstDZ6kd97e1TEH9UwAtg9cQb322d2jAsavQGxEXYVnPDA",
  "key28": "4ja1NS4gUoWmaJtVH59RJ5N2z9dPJZHcZGy4VdnK5B9wVdC3SnKPwtL1Vqhpy7RaH1ngs5qv2Qvi9MoL3nEUkwa9",
  "key29": "3Jpsh6LzdahtcQxtNt5Dt3jLf9qQPsRznHzgnyAh3DFiKndLkj8UkBAz5GZmFxFh5nB9rPL3JDdQn1pZK4vEuf2b",
  "key30": "65SE7iTdcoxWi61L9K6GkthTtsLX1WguafchinEXzMaPj92imzuoQ5K5h1GxQWV9fifPEt6P76pooWXoL2WNCAGn",
  "key31": "5T8fboBv9BRBGHdeT5R7nzB6xAUnMqZfUckMutEW8nWwjsESAAau2914PTWqe8GuQUgy4FhbKYs6DZRDgzfPYJJw",
  "key32": "4nbgPVvvfHSL5ge11pXDpWR9VLj1JvC9iPxsZPTdxAAoy7HmQ2uxoAFBWbn7Y5bLaLK8qm596kgKGzjFR8NvSHjS",
  "key33": "499ytMmaZeMuYWkqkpYDaJ21brnSyJ7EmhHmYc4ue7uGi6ivYxdTFop8cjvjLekKqcUPeyTojn6bKfrxGux38PHh",
  "key34": "5tp4V1AoQXMECYHr2K8ttCBtKUfJF2UyK3zJ7dtSB27uR9xyk6XQdgToDftYxGAW7SiaeNYqF3d4wJw8YTshwkxQ",
  "key35": "5o7P7YP81bG4jdGxmYuuxAvbUBfffEW5MYJhdf424CfHiMhpdC6iiLwSkT6LT9NcF83dJwKGpgeSajHq3u5xwAs1",
  "key36": "2YiX7Xk1BHrsmbyVgTpv3mZmGegW5mi2E72F2g6ADhFsNfJ1KCPBpPCBFpaN7tG2RaEJ62tzxJPuyxTqcFV33AxJ",
  "key37": "478sgA3WtpNPhw9JtNySMhhBPtN9v9uebjv7AMx1GV4hN6r1ULZ2twH6BXdQVaUBuAuaAjk2gGFpKyTXMuqfiRgn",
  "key38": "mVF2eZKa1NpaGuaQoMYzy2ezgTHY6XuZD3pAPfn3HHCCs557nLUhsGKG6iw9TCYhH4UtnSBDGrtTNYfxkRS8aR9",
  "key39": "2stpFVXRN3ABYbnbUtJ32DJAWGKcdeTpTcncjHdRhGDP62nymSf4CcBjbigYmG4gUfLrw3ESK9fXNWnkAggxsidK",
  "key40": "dADS57DE4BXf5h7HpkGLCt5NnuRs8Q7ieV9iQDehVWDAQKpJM32NmfuktgPP8eTdhwx3g3d31HbtuPVSv66EtwJ",
  "key41": "5fMYGmqSBw7gkDn4ExrYPSmZaL62zTTWhWaRFhVpo6mXfkoGRWgD75uaTt5hqmqq4826mgNukjbhSaXE5YVpwZ43",
  "key42": "UWmNJWiBoAgJpLKWgpQm42j6HVyiHthYfVNmGjCX9eF8Mdkyhj3gWUaXfuBwbB8eriPCB5ph7gaWNvcCzWEtbXj"
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
