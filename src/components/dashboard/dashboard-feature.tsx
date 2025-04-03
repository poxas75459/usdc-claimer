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
    "rt7PUn4FS5q3Xy13anCDJhV8Z4UwMBuXsDzB5xbuijyD4HNRBW3j87VCAodwTREVQYcQZmVm1g3UwTLGT73Vadq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "okLwySet81jeQV4WK4H5nRjwBP1eZksrYpbgNrgrjqHGNizmbJ8ZKwDDGoAuU9XEeWVmsB6GGphP5bTEEbc325R",
  "key1": "2T1wi8vMRt5XfDZmuayTnGYeCKuXjqdmRKJEiqUwUdnvQj2tTZ6vxsDNkoaaGWv18x85MmamaJw8AxDiyrsvF2sm",
  "key2": "4dGBdDCbcwXR218N8RfaWBaH6degEenSjmes4XXMHHLVgph3GAB4ExTYh1Qks4K8zibG3gNG6u1JTLmJd1NkQUYo",
  "key3": "5fYLPwoJUUyxMUzK5Pt7NoUVsEZB5aqYakG9Y9snAuCQTmBd3fb77q4uBcYA2aUxuaVyiDwvZ4dAMaor5TADspgT",
  "key4": "4gu7rpAJYHsZqNGHj7aK2twW6aPuZoPkPZAZv6syjcSpoziXYYfEiUidkTdfyov3MFrLeBRJJb6rctwNMGJrYmV2",
  "key5": "H9QRcwGVZtALxPmpxutaowNVKE9D6Xiv6NncpDHUqbmwvmr54471PGRJqKNH48FzGyJ3xfedhprTDQ1q2DWvLWN",
  "key6": "1EB6dJ56SDY1AYthtxvPBdfmUS7UHpAmyjSz8Wn7wffBw1aq9KbtVFmZKG8ddk1viSpjCh7foZETimdhfqVHWBz",
  "key7": "5th5tNikS3oSgre8uAFuPc8D7w1GGshdtQkNmQmyN2DnDRFVdr2N9Ttrhb3AqAqoMBLyBnS9fDTk4tsc1LGbG7BZ",
  "key8": "5hYhAtLuCLnzL3P1ujMqhysagjxvJex4XargUa9JiEapf8NQjLNw7EYQ4ar5bA7cBysZDBWMo1DBVxo5JfgX4UEG",
  "key9": "FVzeVhrobHQH6ARzqqcgKDq51XHgzynQxVBw2fyMHFg6s331CrHh2ZzVJiw2jVDgDq3f27LKAmMU7iJw34raAgG",
  "key10": "5F4ENizNkmFf5KbLw9wnqAWCkJnzzNn2PnWrf2g7TvPzJJsoRW8HynwHdjq4wcyPGfux61kUtg49GFXe8mwKxHdq",
  "key11": "3tfLf68a3w1Xdw7SYH7AV4BAFayibbKa53D7EqrfDjpUwxefwNgrCwekGChrmUwvYqGfeAUDpQmnvpmAUUnHkDcz",
  "key12": "2stcuS3VpgB5Beib7QxnqSo9zs8ZEmWgY58EeJbdAp8XAW6kx6Afaqtcwc9V7XmDwkjxLm3H67XQSWYHpJZbc1tZ",
  "key13": "3xeKRaGAcE3RGngANkbTEgYyYj7sZ6jwEjpwCKR2p2nLeNNotUqGGeFiVL9D7BxaPTcT4zTR3WMFLmgEAgHrmB5",
  "key14": "jv4PQV6P418EtiUK6rfQ9Yt8oqcNW9LzxrzAgkKGcq8GynwRkvsLeBcZYDX978PmBEdvjFqqKRWpkaGh8HdLorc",
  "key15": "39YYTaMaV7BkZVup9R3nvKnHz4Y21CuYyAoHaeF4PfP553MtZp3Pyi33jSjZmKDjkTAkHUrCde9gNU2rWvMiMKNj",
  "key16": "AKd5RkfjFwUXLqkKp1GU1aH9ffQPgBQdgScMFSArzS87PSL2CrSLk7DK4CY9ginu5vquLSKYKdB2y7gHR1dJUgY",
  "key17": "4GP9smswdWWCu2DQysRg3iSHuzJ6obxweYq6JuV5sNiVZghzWbKKpa3tmSoULtQiur9APhLT1BXg4K518xTxJ7Wu",
  "key18": "4D828gGy1ksXuCs8MLynHS82FxNduiE3mpoCSXtzbmGe2EXJKFBskJPqEdrvZU5zxhN7f3F6SXaVvfnNB1qYGXhj",
  "key19": "4ZHut7STLgYJUSTB9RVYmy3aqwoMVZwobnVMZDgsMRdoZLGVDzWMGpLNyCzgtZzvu7n2fG7w9cuvd3Q5x78fBJKq",
  "key20": "4tykEH11msBCk3X6NygnuiN2DvTufN7EUV3Nc9USFVZGY4yFPfTuRk2b1RXW9Efv4du6T7YYBSZFSUfNup9TjRkp",
  "key21": "5PCZPDGWazJ3PTrPmB9B3iKAc7e6WDBri8SnGL7uW9CnSvq7W7uVcUjVU4a92idD7cnPLC3XzfUxk6QMHX5FjnPo",
  "key22": "4TVww7nePsCDa1cxQeBNw96bzT2VXcCKSsqGGS4ae9mCP9S3DjUaJprgebX3EqHtWqTpUUsVxe578B47CKboXC7a",
  "key23": "3wE2zWi8sCmZMWYcEiFpbXQDwiJC6NEjwfh4d2z3ZZCJ5kckz8vqf7gUjUzHNtrJ9tEP7p7KKmTHmDpRCkvirqgF",
  "key24": "3GiUHR7fB9nvDQLPnesHSBGGnSdKGtXvCvVCx8aWgGZFy9pxUwBVBpXzFm9b4WqQyGzA5waoYbZRApTLGNcau6kL",
  "key25": "3EEBc1iWng9Rjrv6NAG1u8stjuzVBMhRZANDmF63mkyyxDxw29r8iPm1dE4wiwB9LtsA7iejE4FVfD8sKVoBiDGp",
  "key26": "3VtanM7eH23agswSBQqJWEPs2LtyykyUqcfWEftUc5YSCyULJyBLLCcYwVH5mFzAagNKJ5Vr5iek4PFz1w4D7mKo",
  "key27": "oy38gztFoSypudKvQauAwV7DJivrwMve9CdoNtEkP4WrrFgnDwoWJP7eV3JR8HY1jkvR1c73gop62576yQvt8vh",
  "key28": "618YKFsZwN5w4vguAaBKsU5KTqVmqjhho937hYiaRymLzP7orLtkGLD26yiotXXYzyaDxnmq2HgPQCr26sapikEw",
  "key29": "3kdJRvQ1WghTcPqGtjDCi5r2aqukGL3TigJ58q8e7jVqVX6DpJnrxP9Ph8QZaqG2JhuUYdTtd7xzPpHvm9apDBuL",
  "key30": "GkRGhdkWiPnUb7Y8DZ4ZdMvzLoLhXfKNHHANxPpAT5RweiL9MCM1RukWFWb6arbpoa9orBAKBLvfucFZTztmqFy",
  "key31": "32HMjt6GHdpK1RGkuSMesfX3QEZgFyRMWEF1LgL4gnXAyFy1m2yGherfB7qjTySBysRiWh3TqsqRFhTV41xHKhr6",
  "key32": "5XKT1zBGANfAiAtYi2YBMUBencVjX1i6S29wFoERrXfmeVNWNQaCE29NV7Twd53XkoxhjpN2JJhCKe6F6JphZq6x",
  "key33": "R1Y7x5pJodLAF4HRCLS743NgpguKwFjKtD5rKudtThPFjNXsXErS1bwKmJfEB8m1PtFnUrbXdFxM1iteCXwaug7",
  "key34": "5XH6moAjhWsQu4G5JiZeWRXc2ZoxbiUYkT1FFoGJZknpV5xuogdawxv2guqBdQdahfJkewu5zBhXwuAp6zoArXPg",
  "key35": "4tiRe1JtGQe5k5Z4ioRiwXysKgzhPyhQsRrL68KGSonAySRpRr3hTxpUV4tXJTcb8or2pX8Q9ZBCAuFWk5k5C8wz",
  "key36": "48SQN52fwLUKoMchYH9Ex9u1pxoCrcbBvC1fnGGyFEyGps4fTW7vJBL949uzsvxg6HPTz2mUT4WrwFwiMLr5XUMT",
  "key37": "3g45rCrZL6FmyutUSmiroRo7SaDXvATfmKCfWwgFsUyjgKQ5GAKbgXJPBxwhpWmsFFRzd6M2SavyVdq4qkMhmJiW",
  "key38": "53qb6mxGphFQoW67vyFK4zTG6vNfwv9Hxpx4gWKoMumajXe1Rv5varuzeFkQeYPwq6StM6kqdKgCRaVfCT1J1ELz",
  "key39": "3NHfJE1EXne3d3EYpa2j9myenQBZ3Pp7a4PAc7nhNohuiznh1Y6uRdgQD5sYfaNFm7zj6CAJ8M9xmqMrWkH4pyWN",
  "key40": "4uKMfgdEtxzh7Lihw3WGt7BmvnvNkFFrNMRBKdUsUfCMfhuPZod4JVR7KxZTAJqn6FRBPfUXrAo4tNugbCsH14c8",
  "key41": "62WxDB9BiHTGXnMVd38L7vF5wgfFXHP3PvV3qDCVQpsFtjr5yCBdYS8ctfmkztMiSMLiH1erxuGxvgW1txQiVU3s",
  "key42": "twPeRw1NbiX5FeNJWGdkQCxuy5ztXNnjqbBfftwnexDASLZoWf7AWpDbxP3C4wpTVXUH8XryjqTAXP9NH3Sjpje",
  "key43": "21LraHYEseHqcjaWqkyBVZQat134KZZRF4SpMu92kMzNuAGqut9pPJU1xDSN2k4WwbDnYE9TaYR6emVwSmo6vkEy",
  "key44": "37MAnRdkY6VSAkGBHwENUU6iAiJME7md9hdvJSpbnKZvKqvsEPWMFHtUUW5hQC24VSthJaZZpt2L8nzS1RaGVPp4"
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
