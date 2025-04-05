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
    "51WD1qGUbxcSBikSQeQ1Vr1XZ9pt82Uov3DP4iCfbxeww9RRTvuMvRUV2bcaXnZVBjPF6v6ZzsRN4MdkxTCLJPhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YrxAZmx31aQ8gXpNSQZz7nRUbX8hRpPoirfFr7trKTWGgQTUDCtWSnK9aFZmNdQfSGJMoXstbVGJ8EXEhUJzuc5",
  "key1": "4gJ9pXBNPJNV3RmNDeGDQsZWhRNYiXKCERa4a2LXTHfDnn6T6qJ9JFdL1aNr1PTNqvHoTmrNmagmywx78xXX1jsV",
  "key2": "3a3fs1dwga5KVAuzWrjwBBMaG2hy9Asz7B5CgCDPxyA8Dd8WNSnKCXCUeYixs6AgdEFwRzeRvXSED2vzxDVUgU7S",
  "key3": "5v1ZaA7v2YrPjePtnbhhZ3qvkvMqXL9ep1z96Qux1apcBWBhoUPmnK2zC3ACkZiqYLFejMogybcx7AvuaydD1Fot",
  "key4": "2DBqJF76GgRKSzBXtvjh9CoZitdPGkbW6GcUzpnGwDRAeqnuZiR6NhXNb83V6oCTSrwTkbocKT6AVHtkUFfuaAsc",
  "key5": "4x4LkMgZZxmZ6ZcoetexkkGXxDMZQDvSZfGx6bmmVHHR9Zpvd2K1Z7HYuWry6tg57AbeukhxZh5JEtU25o9ZDQrL",
  "key6": "2eU8xfxLdEoZByVPk8GnWRLB3Zib4aiWhqF5waNqKWHrSGwy1zNepH3REtTX4oUsztASRSkH672R1Mh5qKSEv1rB",
  "key7": "2TUp3H5WhrBSaHMJQuAX3BDoMxHjNwM4Too9mHaJEi7wBLG44AmxqwJHKm8TGZcbGwqEncEfPW31yi2uYk3jmAQh",
  "key8": "awD7HGxXqRDQozW6UsqHc1e9RNpDfnbsc4RTfiixLsnJR2kFUQdRsAXddSvDXT12YWX5bwiZionFkNY5WQRuWWM",
  "key9": "59G5FoLoK6RPTYgSAGwyZL2ahfV25ZohrtczNop9P2NhY3o825rgqxDYeVPHczeSFjm8kawTYPoacZYUFQcY69dG",
  "key10": "2odCwDmCqPQYGwumamtimSLAhsxSkNCwiXjauf1YvSnuoS4qnRVqZK4kr2hVxJp3fAyA7gjcgmcCu8u7sM7fuxT7",
  "key11": "4hQvNYgUsoS6GjZuwfTC2FNPxVGcoRfBKGNDCmEwfqNjY6tQu7QjePGHwvTAuBWfZF1NAvBDkPet3RwnbaLtj8zg",
  "key12": "3rERbhckthFBUhj7Zs3Q4CbnDBkNNZHc1Cp9ETsonbZ84dTJndCaBvt3wTPFt6Ef6x3MueiFREyf3QfjeHZbsYgm",
  "key13": "4bHCQUW75BoxVaVrHJhcDgBbPvwLmGUSrCtsJNhrxMUjWxVHZFVjXUY4En7j9YyFeAMPjEe2rwSC8yiRpLZoEp3k",
  "key14": "onA5i9XtHzBV57aMwC1Vg4UgPVFyPz6MwFaPcZeMAeY6mUg6xyRc66ntVLrUezVmyZLKqC9z5z9vrPVMzCr1XZw",
  "key15": "5CGd8WbeJyDbVW4XT49j3UJxERVQFvQgXTPirYudpkSvSj7osjuqNcTkdggv9iw1kRUD5vULxgdZViqQZZgD9VKv",
  "key16": "5Vx1uuPnBgN6UbuihkryxTTQburvR7MFeG9wMmq8rvLHief7wzLfg191PEF3u12tA2J6XmaqYwAKyNmdQX3xXEPa",
  "key17": "4JXpvj18pvJps2taHV2dhUZ9UjBQx5ezZfYZtUx8Pe7DiN9kPje1b2gM4MDULoP2F4H14zryqibuCEQuE8sPAFt7",
  "key18": "jL5jencvNpcZDJdScyy1vtHe4DqjxVuD3o6Su4Kpp37Qv73DLMaZ5RwHTfexMLMJqLV9R6R1Punpi4T8MtGGyPp",
  "key19": "Trxu1SYdxh632Ffh2vYw66Y2SnL7s8t4oZCWykgefx2U6uVqDqb4PUqndPvCUKW2ykzcg3TC2gwm65hhC4egAME",
  "key20": "4eGgQp1PWeAuAMYRoZ2ptd3AE3LRcyNPWfkbzr49jduj7NWZB2FVX4yJKXWDXXj6DX7auw7N7Hu91zTbR2eBfPaf",
  "key21": "3Qkm63RnzTAikP3ZEHmS2TrTtDoGkku1K2PLRJ3SGKzXaiEEw8tuKRoJqhpiGVbHu3ac87RaJJY4m6LU1ty1tebS",
  "key22": "5ECNn9CTc4jre9eCScU2dLhHyikU68VwMJGRF78cGqAtefvGfrRM6uKCdTUdjqfq4KdeRG6K2ii75G8ehHvPhSrz",
  "key23": "4riZ35MNjDghyq4XxwNdDLVLyDrxVggF2nqPuzCecBRMRbaV63H9cgaHjKVW8SUJWDvGtc3NrEnXb9wD1Wre67Ls",
  "key24": "2pJR6HKxEqEguarPdq9qvQfDDYTPV8gd8X2nzB3wpQwiUN2CtiX1EGhzNMP7C95CnGv9xyh5eMh7ihZt4aRTs7uv",
  "key25": "57W5QDiRx8jSsAxi26k1VNPG4KkWvAjxKZDMk2q4cGr4Ae1NmdhWhbokTbHrmyLucS1EUFUkenBSQp3agGqEKHvT",
  "key26": "5dTEx1ic2hKFx8Mi6dgSbjVScPvdVHxkLtiEpEzPqU2T58Tu7ojpCFpwX3x7xiRG4vrSpyexnfbzHcSw77icrZPL",
  "key27": "2njZ4afmhxr5D6WyVL5TZ6rbMJqdzZfpg9d5Aqa4dYbQ3eyLdWGzsr4dHM6VyARJWvbHDczdjZwnvpuAqYY6SHnF",
  "key28": "3pYdaEbTM4MPC5XfpywPb4uZhJnjJs9aoSdox5FU31MrxzdQJN3Qypo6PsPwRhmsvGgQ9VXjxFBYxfc1birT2jr9",
  "key29": "9qThBan1uZjtUqXRx4MJtuNzujpDyaD5fqDPG36VTqVMJjwnonUZCJMautvSaSdqxfaaJ5x59FnPnaCgyS7CpDt",
  "key30": "w4yfgMipAwSFEMzGdTw8zAMa5JrDdbPsEauwWgkPtsunWAeYB9LiC9z9xaUQnMFNZiMLm7bjUsoKwqE1kmwriSu",
  "key31": "CeoHvKoh4hhA3RXeB4j975sfEPDKg63f4vB2YjcS2i9ztroB34aWZ3swMHHmWzi2PCWGnSjfJBjSrMwGSbcEGhK",
  "key32": "2Y6b5n2vQV1F1XbdZbF7mMBEEM3gx7n8nhsVwTjxatLNwhVurNCxz6WVaSKpnQtLbTnRf1yLc3YL1aFY9taQKKYf",
  "key33": "4hfEt6Xx3wSjSucodatoutWRsQZUHDVTdBpuUhHGhAbSU1PXkkEc8cWYYZmddHycYbkevq8Jku2MvfWjikeFkKUe"
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
