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
    "JuDb34izbzibGuLeyPhLsZUjZ3SCBjD3hohparyXXar4mW1wLmTSFkMDdjZTChZ4LwUuYnQjGVtNBSUyJgkfSpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GdXaWjTWooyHCFuUaDvQUwTCqHQvajT1m2XcPjkRnNfDZ1ngcB6xDKKTriNpbuNS5YfkcfQAj4Nr7USf3t6pToE",
  "key1": "5HxReq8YHP4CZ8Sc8SrBiRVtyAgh4ke4vvBpDfv3zebD1AWyqgRJW8cYPrECdeFojdLDwNcCCff4dxrf9aa71N8M",
  "key2": "qznXWB8beXyrhaisnQ4A3VqLJZbUsBYn9S4YH85ziK5ScUvm7jtheFxaQ6kMx2yeCmkAMsZKbji1uCU2DJxH4U1",
  "key3": "61je115t7ofcnvUDX2MyCX2uBWong4QDZELSgXX2rnvVXdAXxqQJjhhKUYxnfoYih5osayEHtP8YS4BH257QJRPn",
  "key4": "eVDfs4wq4SVDWm6K2Ry8ZRJE2EaBSdY91w2erdgxBHJxLoqwK2vy1nh1P6qckzzHCkvfUgq69FG9WDe8xJHRrB3",
  "key5": "2MuD1cy5v8coLo47e7PHw38ypWS9nTS7yRfBQVtxVhEgtWrHP6uJURsEMQFYmYijiWLfc5uz7zbKzoFH6M2Ke49b",
  "key6": "3woVvHG8pC7AvX7j879wyw4XT6n9P16MWW2E9ZF3PW6CRTC4uKyPrgmKeAvwQjdjpRY98LBgmwd5pymMTMfz7kk8",
  "key7": "5szoCywhDZVYHBc7yKqrGZugncRVsfajQTvLMemjQuKSWvjU7kyXcvW9oqWxmdnJoiEPywsnF8ynanUvSaGPgaCh",
  "key8": "2keznZK1fo1fxwo6YQXn5oiLwj9u73mThL7ivV5oexHrLT7CDMk9zVxyzMxcs2NCuAC279bJBpSW8qmJN5SiqiKA",
  "key9": "23zwqZPpknsMYoxKAYBRnbwCY4V7FxfEVg6f7gDzvwaC4vpPkN4g16jZ6kL3sV5db6n9wMDk3eF18YnNZC1MymZ9",
  "key10": "3eZi2BsC3LGoYWz7vPuZiyffbmjapd4kUPP8iKCAd6prbY8Yk4ghrTDwFEP7kTZNH2f6QrGi6BGWrUtgcbJVgmC8",
  "key11": "5HYdGoRK6rFPg77mN67tDFs1v43oYcxvuGpbBBUDTG75qgpy5gCjcjVuXJE1UpRZsMyqUUWAuKjj5jczp4bboQ8M",
  "key12": "4A8aec8r1YVubwq9rs19vsFKQbJRpuf6cujTW5mtaBbjXYXZDNAvzjtkHSvvU3idBZAFr56VLL6WtcQh99rVqBA8",
  "key13": "5A325FuZ9CPz8zqXx6FE5wfNfaeK9XJzLZqhaTXWWQ9sjG4AkrH8QLkrnFrtL7oTrRawUTYdBRPf5sHyEeUorenL",
  "key14": "657jskKjhB8Fck8SBmq6sjVmgLRamBAqJzRa1hex5rfsNTDG8XQosQRv46wgkzMRFo4P1vQkidTM2j2Mo6ALBAEL",
  "key15": "5Lx7gxpGFKS1fQBus2JgbhsUPiAzB3KiEDSQGx7UqmkcbvAYbpg1sbNPVKNafa7BQ54nQ3roYRLuiwfNNDVtzNcj",
  "key16": "556VSL8tNVR8iv2ARBWrC6ZJbjmJQYbgwEhdv4J16xWcfXtFHA7MJMkDUq4C97zBYSJUdYaaPJraK1iGbo4S2UY3",
  "key17": "3rf4upKVqMkVvAGBH7kj5zPTScCmQ8MjkR5mQn8KuH564ZVcZ8jLei4wHqCXjz2xnu9eDcexewYRFnSxxbbzzZwM",
  "key18": "3pCotsMrN1EQWeMqYPXv74xmRif1XXkPu1t4vxZAe6yoF4fNx6h1CoVHfBgNRV8AAxwUDzQ6eyZQM78jB9wkkUaw",
  "key19": "2mNBF4izDrvKabUkwTq498B1vDR2eT6eaMuV3nGQqx9Bf6ZwJFXbJrajs5Yfou7LYzUa7zTCs8UtCQogtXZKui9V",
  "key20": "59MJQh5F6igbT9Fb3bAmNfQV7TcJLeHuihzEansQAMPZBrn3mZmarems9bmjfgsmbiZG7hkuxi4aN2YoMHrzrDYB",
  "key21": "5zfgzsGJSfEtjnPFvZiB7cVutTzYUZBR6kgXFbbW1yzMC9EZSqWpcKJeQLcGN9EUQ3XbvyCc8pYSmB3Ga1WGCKSi",
  "key22": "tMQBp9DsumHLK4DJjQN3SchtfbLuo72y4AJpUimCLEAfh3FLCeXT8UzBuF7mfn8Uh7hAnxp8xAGdGN4s3zdVL8n",
  "key23": "2sV3zbaBdvBq1ASdUiEUArAWtvG4LXbTXhLTroBTrmyTSrgHPc1jswcmP2T9VdR949edouv6LcmUtC5bSyTjmeW1",
  "key24": "3bHECsx5NxceptzsJjTZQ3TDEu367sFer2ZEKCnQoYtvgzDmVULAMLjZaQWcaYxuehVSu8rurMLTPaYWxpc7BUyN",
  "key25": "4aT8VthdeTfaNwsbfTqmhHxLZmW4LLP1W8LBA2vs74KeLbEVadnJ72rAU8xG3KyPp2dciqJzpxdafz9TH8rWWphZ",
  "key26": "3ybhjDVmJfz2izWPCni9v6ntmbEVW1kr5ppu7p5QzzFdQg8Lrx4w4NwgB4Kg8iiHUrP1wmDpWmm1t6GqKaYhYC1H",
  "key27": "55Lnn2p3Amf7dv4qVgT1ZxMsCpsVukiygFqCvH564C2SM3844HzHu98Z2JMTgnZGgUxQeBfxGaHbr944vWzXbSyi",
  "key28": "3DuioTyPcNu5qPChyxFXL5BcjKyt57uccKqnFs94AezjvRi9SycUHmrqfPttRtV29W5A51XBYtaxKWdx4QiPM1ti",
  "key29": "3jTVoX17WQfsXkJUm79vUxMeS23HktxKyZhXVTNfWngGy251UF2cu5EhMffRZVRjnxXu4dAyWMR5pyZfXuCT1L2k",
  "key30": "5UFF7wsbQhG7MPxzZuk1xuV89wes33kvhJUiLYX4ouaVkqnYrjAMpnTkDy6VX1cMn2sLCmUd2vsGViXV68V9SnSt",
  "key31": "5KHeJjf8ER4uMMufVBYHs3ZPvvMrPNi3hPh11sRH56ML4HyeFzq9zLKeY4aLaHMZQansYGwgY35pS55Ncc2oNGfL",
  "key32": "2SentDGhGN8jx8peUELYaavDuAwZvL4oQxKqsccYoMcvVdsVVHQyryoY4q11zw9r6srJ36Nb1Aq2SMfEChoxVks9",
  "key33": "2iXUimcST6H7jgaz3iAor2JAjAjk9bm5VskabWY7YFgnYVuxAUZRnLSXe4GcnuXxsdvuR1qnWVtPC7GQc3TxhGfR",
  "key34": "4qzgsv9tKsL8a6iCvgc8DHFivamAkkKA5hHVD7K2K2uDraER7EAwmZJAkRbuetbDVS2mR26jUTYREkPzJLgn14iV",
  "key35": "5VomJqzEkYGZLb79svTAYfjBCByQVztCtFty8KbEaqpvNR4WNc63WbDmDLXYSLKCJHbdkVNF9WXQ3nuSjKAKmBDR",
  "key36": "4czfyKduqxBBnuSNKCQzr7VXxyay2vUrrwubBRWe6iHWj77eDmU4wzHYGAs5cBNwHFxcMFQiJoMvU2JCC5ZMjbaH",
  "key37": "5QHdrvxHDeLJmDkScMSgizEGBJMsEG6ai5ZqvtzsHU2XE7KaEHTYvQMQV8b1M2s8K5SJKskb4wq5gJ9x7uFXDw2D"
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
