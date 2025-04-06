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
    "2XcrL4T7BqYxL9tBo1ZzuiAhQqqegad1K345CCnS4DHCgNx3Rzo8ehVMY9YviQ58arkwnq8qTmuD3tHGwKJVRhqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eyeXNvXPRBx9KerpEYAUdeNbjFf6rYNN4fqSC8XrRfE2LJmZP3n225BSsgy63riD2DQHRQXXMUUgJ5e9othKF5e",
  "key1": "4MU41UnRfxBhfEn4zMB5MBmi4tSSx6xGZzXREfZmwnpUWrx6bigSUxAqwg4MGNRoM8sS9m4m4UPT1s2khSsP51J6",
  "key2": "5ztJTMfSEqMLVMqZ12oj6Ee4S5H1M8c4RBYFV2UPwYX7gofz5khzdt3TRAjshoETUAQFzwzpRdb83beBxAEtDt4W",
  "key3": "9SJTteDjmCgNAXu2yhHv16mzN1jPB86NMKxHhAUiN15g6pEZRss5awhzwVhjhgyfdXNHetjwhjTFsdYwQfzXQs4",
  "key4": "5X5GG4ivdrGHvXVwDTnTNmhSctwFjhCdWDWHgLVS27CtAJQr7W3EKPufXRtavgwAjLE5gv8b31u6cr3sPbTBDSXN",
  "key5": "2GWv7aeMEBVWaBwUTsG5UU87ZjmJNLK5NP2zg3fqpNw7n8XB5Q5LHBnU5DYnPhaASPRaJaYRi9VFjj985z6PuqDc",
  "key6": "3tyUrV8sB1SVMbG71yDJgsbttV7uBQJQehC1WqZ9yGkJ2W8DfxwGH3QAaK3PkwUht5gaBcf2p6uzkQ4HtwKLW9bJ",
  "key7": "2MBkMgPs4yKRD87FgsJQJNtKH1YQwXZQJygBpnerXMD8Zv4iLX1UefC6pg8yhFCAFy4rzP5EDw74giMizvbrN9iX",
  "key8": "2wnMfPjLL6zhBXkCgeoCsUMcBiAZEGkrTbum6iZDMCPyLz286ztDsAVZwBzn4cexJHhEn3zAMnH9uHfBHLRF5pj",
  "key9": "3WKHSukqoacwXeMHHR6T22rLGwTFHfRiMDA1JvUE9nq9NTS772aFrtvyBaRnXFcnEQXoRkkSY1dEUnywUAkM7wsA",
  "key10": "pR4NZ1g45FapnQqkZwGC1JZnf7XKULHaHQdct2drNDL6w2w6q3vkZP6kEmBpeVJrW4UEmrECBtSaWJJBsfh1SR3",
  "key11": "4FkPSSPxASCp9sRdxdGLmbMyFtiqmSgfVSJej4cmvVBvEENMUicR8aT2QC2gsRDztH2JPGNRgt4tNAMzrtG7vTb8",
  "key12": "3fnLZ6tKniZdJWPG6k4XpzS4uFBEgfLvKgX138AhzKJagcFWbURKxetUB5QHcnSTJLQJSokvbmXnTU8oPCsB83ZU",
  "key13": "3DXx5nZjtgab7dF5sEo34ZKbgtrFVto7SAJ6L5jxJoiVpfF1aS4c7LPNdMCXFk84wssLAD2SUPbjHWKW9nNKKMwm",
  "key14": "2ErDobvCSuK4RjNAA6RbvLy3MQjhctDuBbFz3mFTiSSK5ro3BXe3cGHvuMoZcR17TNbPBBAEtnrMcAy79c3ywiyk",
  "key15": "3Pp8Pcomw6LmNmnadoWXVZUean7TTFDmjnCAzjHNgFRL4tLLZYjoa58gAkrA9TUjZgE5CV2LgkZEngE3VkoW757n",
  "key16": "28PpyaWqCKP44cgFjDBcxWW78XD81d1APgSbKr6Dk24vkYxL5VYCJwWNDWHyegoLUc9az9czZ9LMkefFF1rN7gdV",
  "key17": "38uzy5cgDx7LVH9Nn6hX95qJPVhb8a7bEZVRGSkrmeQ7KeRx5fdPyvxcWJSmc9mdKWDK1ZePeW2u7rJGf4BaxFPQ",
  "key18": "3UoxrzmwDg3ADktswsYTeSeq4L3JH2w8JkHgoT4DHRbZW1x7y3WyTztuFLuYgJVkL7xLXBSkHvnTLVPskXn27jvz",
  "key19": "4DzuGxcjpH1YTgQtR2sxAj1cyB4kbcX93SRctgDimfq55WkVErgvYff9D99zAtGTj4fytLfwQfVydG4kkxFF1KgN",
  "key20": "3YfKqamBpKmWtS5QjDoVRsipvhtpbsTL6o6f6Xi2dtWfUjYGKCaEhhwvjruDUQNQHt5vfjFZMG6kipNpCEY9pse9",
  "key21": "4U3ikMGDdgARypMK8cn7BmGzQHnwcM89gNUvozJsrXMGYq6HUN1hDfqWn6PJMrRUwAP8XpuFwpXG3YaMkv28Ptqp",
  "key22": "RUxeDm2NDGC6vifbskwfmk9TCvC1CQUsyP6Y95wKm37icoKqE6xu5RZKZYahDoFGyFvpuWJKowDT2v7ryi7Pdpe",
  "key23": "xmfjgg78FJ9EEyXDk35kha8rgkVAmHX4wHgL3rzMKVpoQM8jkDhTctKV7CS8KE8UY39egjxNLuHZz9WAvY7W3t2",
  "key24": "vvjnCRJUNk81iBNXiMz2BYdiH8xAL6f8DNdxiUax1h55YVLa7buYjVHo75iMT5p5YhsUQ15auxvhHGnzkfxcFEw",
  "key25": "fwcT842auG8KTMN5SVufd32MQMfsg7iRfkJtyLxzaNxxbDirmMnKUkACCVh8DFoCFMwbjLCBAvPqWsDyD5hgznr",
  "key26": "3Nbn2kxiURioqR4ct5kGGqQNTUGdEDPBuoJfBCqyxDoCxKeL3pFoQKitSusZTLMwZpM1rM8ykyRZy6tRTH5wNfna",
  "key27": "3tEmJMrHAtKqffFEyCXZNcCXStddRzyL9wcw8Qza4MrV2QFguu91WEpoKt7sz4KKzi5pNryvk8Vnt1mJ9DZ2TbAZ",
  "key28": "3HctgKkNGrYgrS4G8LZ4PeGxGdsvKNZG828VwdNAVd3pcbUrbum3mehaQGVTVD7orK2mcsPYcfWohDB91GLk3dP2",
  "key29": "4yZivvXtfMsieuF1PYEaneS2ybxMyaK8h6CDMQha28PVMBy7n3PxLqm1dqfTm1Q4Ex1A6BTEiXLrnDuo3BPnngSy",
  "key30": "4ekU4SoUKWHWRM1Ahfbqb7NQ2tTpSLkiKLkSVptkh9aFw3ej15hapgY7kiDxWcyDaYgC2rKsx1BGnE2obeSZkxkE",
  "key31": "2jHRqMN762z3cFf7NekduN3xJmPEwvmZ59kT2ycmhUDWRx1gyUHouWNr3MTbL5ef8ETnhqsCUiCvqp5oRgiAG9k4",
  "key32": "3NsxjSVpHb4LiHFmRfsztgMJsvQNWYaLQ5rn8v2VyivLmSGSWqSX5ggdEXE9FyREiYSQgLLQ6CPeW1reKgs4zegC",
  "key33": "4bLyshKZBohZmYepwh6r6e4dmKNVBx3JMh7jHJPFVUQzztWSfkN94JwzczTr2seKUpJ3TkBjF5Eoh7u1GzTobbc2",
  "key34": "63Y14FhHMH824W4yvAanHxmN8ezo7aQAwJkEz4SCNMWBu7cfhNvffkuBWnide3iwA7XGf4KbkCcSEkwiwKU8NZWq",
  "key35": "mWi1eiVmuvdui3nk9xPCBckMtWnRCpN1LUpo2RoyJ49YQEmNZ9fU55HneNc8qgrEJUokDTwY6pwikXtdd6k1nib",
  "key36": "5gz9RsDyMhiBaEBVBYuh6zsnymNoPRXaAb7mbfPhtmVWpfTVii5g1APek5EwREbbKjiWuEQwqJkcDDH1KWoRp44s",
  "key37": "42Kf5ud61CmyqX8LxuitJAXMUGijTHD6n6JZmaxTwkpAxvHakNaVNGmRT1TByp3NjRxMqoPqPZi1vFZ83Q4VvK1T"
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
