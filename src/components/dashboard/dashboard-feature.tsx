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
    "5daNWBW9yq6fPDtUiBEk2HGnYhvXHuSvWt8SxT15aNqhB2ZN9L9GCLKr3RkdWnhZn1HNVM3JwNdasXP5dfhtSbiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ggSaNaJQa8ussZ7cKZKKjJ2BCpXX9m2s9gG5Z6nphBbhgQqcHcFg7h2shDeWHrH23MG31pRg77od6QGyD7UoZw",
  "key1": "3kMQxg2XPoncb6eYSekw3QyXnZeZ8qdxNcxWqoegiuuioy5dvwJMffEz8mQq294YrkdqHMhHuQqmqUUA28JcCXbx",
  "key2": "4HCdNkJrQF3Z181AtMJ8H5PqWpexoB9Dx8CmFZwkJdEbkdGSgkDk36mu6wQRp2qR18xwAtyk1p4MjAdZXHrcJ5Q9",
  "key3": "3oAEWNRGVMMFKJXzWxfzqjMmeQxZqeKZnpkETQnVhz9pskSa1VdjC7fX5U42r7aBSc4RqpoFQu7ZzCfZ1f8dMmGY",
  "key4": "uzokSLC9ZZ5i5FoyzkGVUYrSaBRX9yu3hdhTHp8HxdN2YHU5MoJJCtJdLjZZXJ3CRnhsQiAae3Lic5ik85GJYkR",
  "key5": "1zpQ6o5U4PLAMCsjS4nV3wmGu71PJ819PKCVWhRmS5tTY4Jeg8Sw3zDavYv8WHLEuuHgcqh9msNkZTjwgDGDkNJ",
  "key6": "4ZXFFYEp6VseA5tJKon58zUosFbf3XwYajAXzr5wYyPkA9UnjBJysxkj92vPW256buShvZ4YdobvamFz1dBu5RMn",
  "key7": "LxgscN92cZVGiVQhEZ5zoc4VPQ9atp35w26KXWASdPR81zRU5qPxthMxPHAAB4bgLS8YASpArYWzKrvPmrB83iB",
  "key8": "5owKcCNZuW94AXwkWjH2XXg76EPx2YM3Krg1MX8fxhffQHdJEy1nqBvTTsnsXyHeXyUWutd7q9hzMGHZgTGn7K5q",
  "key9": "4BUiPP4Jrrp7wMHroModofAjLBqmcbvq5FsYMF1Vx9imyHTijeiJ2Jp82Ye8YNw2Tzvp92iJQ8VYJF6NnE9kryFC",
  "key10": "4YLWXjjJc3xVuQvm2p2oT2EK6AFJy9pbmZzDvYZcSSbBcKVDWWod4NdgWBLXRwqePfkyQFV4PoPQLjipp1otFJWS",
  "key11": "3sa1nwDYxM8niAxkuL91i6GQde5cqWEW9nwEjKLdjZaRJj3XNtAr5X85xtbnfjRNo7cqmrTzAMpWyTj9YnjF9g4P",
  "key12": "5Dqsd8dqG26sh2vaBZfMwmyNKX5M1BhsNmQtFf1LtAGiq5jfM7UVxFu7S7cPpRPi99zhtqHxRR5xEqu4cMQTgMoU",
  "key13": "DpKsFMk8MpKnDabfBT3k8jJnrLaoVrg4efoj8f6ZEHkwcZJV2396wGjAidxKs97wdMFEn7r6TRDiGd3xjQDip2F",
  "key14": "2BtHUD54Qwyu1dV9P5uXLq8T6W94avyVHSSpQdXQUJS6pSb8qKujs76cfAPqLft67jarpMrSioUdTP5kMo1daKJp",
  "key15": "2sDQpcoGEMbHPZabL66Y9NF75n5bfqv2Z32pXLiZYL2hYR7zGK2f6igkRpRPGscknCeSCeehPV6m1T7J4LGQ57vQ",
  "key16": "2AtXgao7mbnfCCAyPecV6PQgSAV2JiPEYBEj5VFkkZ21Z9sQoLbaER53Ym3GsaAsv7mGVhFwZoCsDyLUMBUapViP",
  "key17": "5XoHyEPPqxefxF2r2j4FnZ76J657sJuEYYiKm5UsTxrRXjWgkZv1xsF8L2UfJ3na1sARqv5KUqZfqxjktjobFjBv",
  "key18": "3MHjjUcxDYPkVfxsAyWxj2A2J5HgHenkrx22yfowB3njEasfEG5TVQTJT6LFqmisSJQqHSw2vkuWXDsECof5uNzw",
  "key19": "2WpnkftA2XpKQHhb3uZYPY4v8SS2p7QRyCLsxm3DVYVCrk1qmeqLPiGBWek52zTXvhTCjH26V6vVH7182G2MmMsf",
  "key20": "nkkeQFyF7vAVLHgwLCXws2hrzcQPActjXasFNCc8tFKgg84RcQUoxuuG6YNLvYsG5Er7Whft4p9g3qm12Ry2cx3",
  "key21": "3j2KXfMjp6nSdcKFjqAhtJTRQF7Zgs4jcoxdnVCzbUvBvQK6D32cAyKr6WwFWRtq1wRmYwxkjigV5Rr6WoM28xSi",
  "key22": "53LhbAnCNmn8xzi5k4gbiah9wzXT9f9x2BC59SpzMKCEG1Yerzj3PQXRzzBSgfHkPUaeXLAHcxBHCL483f8SoS6G",
  "key23": "5kp2FxjFrY2gsxHeCMt5TUeYi6CBX6aHaVPoDwwW7n8Zr1tBNUquPC2rMUz1jaKn69jWaKqGv1UyvJpypAntQJoD",
  "key24": "4NnDHNGFV72eQCqyo41jaaSg19Rjeyafjv8DVoomTmWXpabz38GtrCkewE29BJBEqmaGSuuSynBksWtERvMM1dB8",
  "key25": "2KxmCLZ4zfpXvUWJnMsDQAvcdxu5t4G9wst7KS6QqX64y2Z54PLUhS2oZMkh3KVspJmPV6tEKaLv5iLzsH6nCc7a",
  "key26": "2yKmUroWXpQDQsFHbcEzEMfiNFq2bDujywp8aJc3JUJS1Zy67PecrBbdTFV1sAEVGYcyZ4tUq9eR2Hw4vYBRf4FA",
  "key27": "2VMmTnJr7eAvRW5LBhk64JxLN1YXAyJya6mpj6o2c5VqiLvuoAxp2MFAhDLAym72M75pdK4HPbScDv1cf5RGog6p",
  "key28": "3RbG2L42MWfsLq8AmhvSXwkQscSW4A4Yztngc4DNQMjnf8yEK5zGqfgy9iC8duSofbLSDaLYsTPbxe4toFR3fUn9",
  "key29": "28Uf11dWpjYjS9iYk3qaPACyswq5dcTZGL3V2tXKRvXojEPW4UaoFKboXkz64sxirRMZ2S1UFSKxcnfw88J7x2Jw",
  "key30": "2RuQCyE3HaqXQMSHucfHXRfmm9w4SUQJ7uSwNNSjRk9RboeJJDiREpfqzt5suM2LzajAr6QNuyJjR6WSamktAtEG",
  "key31": "vnXstT78kZ6BSmtfdpDHDpwPTra572HbZ4vxSrVh8Y4vjwyLqJc3UHyh74i76nnpLG66y3bMFi6MfvnGt672Pmm",
  "key32": "3tcXKbVVUoj5ArEBFnBBkMKXLxJSUQa8wY5z31hzzGoqy3qXnxe59mEvpPmJ7zBrZLEgeoS4tPrVqqW9X6b7hDsy"
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
