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
    "2senpBn2h2GcceaGagYEFgjBx2Sc2uaVCVJrE2WpTSX3g7pnBGMKg1QYGdaD4AMkfAGHJyrpBicUQwZxhQ3A6gPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46n4NnGoy1mn2CWDzaZ9N6pn7cVa1d9Ljef7ouaXqd2ZBWQhsuLhLs4MSKHPQKyQVRFBrHa3jkswMvcwQL1qisj1",
  "key1": "4fEPZ4ZRmYc4KgxJab9rB3MXxpgw6rDk22AkjraeNagR3fKMRxzuwNcpn4LALEDMeE7LubBFgFwZ2PhaB2YDG13a",
  "key2": "4zphBZkZt3RpHXuJNUmvRJTHAan9SX1Jnwrju9JUr3E8Uwv7fScXcN8ukAyZTeSYMkwztEzdV1XmDS58kjQZKWYx",
  "key3": "7DfDNQi7cMf4r5H13KuDM15P8tsqBYSUpqKi7tSdbb37TJvdrJqiWWoqRaAp8KHsaY1JU1Z11FXZaQK5eseK1aG",
  "key4": "3EBSNMV8ZhHDiRkv4RHaBU7ZVjcCij7xwnbjUkNcg5b2yCUR2Bm3uFRS9WW8qfNnztt8CJm9jD4oJn9iQ2H1CkQn",
  "key5": "3UhynR5QBnEqxhTaVMWEn8x56Q96rWoKSiZa6AwH9jbeowKbVHqdiEKLyYadDgG7sQiGGDYwGGY9fvZ4emW1pbZq",
  "key6": "2GYkuJ5TbLoAeFdPKy6puQCyXqJZMc6nA55ufM84ntAQAmFszowkVGFaibVSFtRnsPngjDaEBPij75oA7VftH2f1",
  "key7": "3SupwuZD8RgnZkD3PaAnaYWhpJAbJrsV5NTEdddpJjGcyNCaHU1ASXYE4nDGJx7LWi6q9nJbegQMe6trM4aEaiHf",
  "key8": "ifgeY8aPrbaWCn55ArmFeMtKx1xaoaXsVdT2ZAu8eQwJTrApLSCBvm5RmUDLfsczQ8oE5axuCBpPYN3jiMMFGn2",
  "key9": "2aFQrvvsnibB8NWmJ3Pgy8B6fdMz984oUPVMjK9cMF3YMw3i6KqQJnnX9umJGJXDYaW8XhbcVJQEDCS1a4ozYVw1",
  "key10": "RiGJvMh7DfaNEf3QtspDJq7A7HYSHV4EhAovv3JnnimmikyFdyxrxxxvMa6HgtiLqukrAU28aCtMd7U7JYjDPyG",
  "key11": "qE3PyaV6WQJpHdNCefEokMATqqL8jM58Xrfnx3UtZ63aQDKoqD9L5jeb8dJCCr3GnM7gPTrKSkiTKc2FB9RBkG4",
  "key12": "5XAuzf626wDKSJ6396BgGaYDRua2rRxZ6qb8TAj9TN9RtHtBp39gJZo7zkz48tRLpeAmyifDTH6V7MPKjwKtPqw9",
  "key13": "3Nzq4feB5vvgTzjoUeshaAgcKbPXs9sNukXVZ5BQ1CUcQBCbY2gDsbBAgkUMtPuPdVVcAhe2fE387iQ7PnnprgtF",
  "key14": "5faC8rrtMSkcVS4nqR7EZADDkCk7FnFzoSjmZ64zfhKijgZXXJM9cFxix5tyvhcjEoy5EjguR7eRhqx3wFv8jBZa",
  "key15": "4CcutRjU7XoDRao2DVvk4VL57UvKtFsGQ1qxXuTuoxhtka8ttmK1ZyNNK4F991vj4cf8yau96spEjGMjhX97XZzk",
  "key16": "5aiPMWCNkdfE9wQFdLbn9irQGy47wUkXLZsGJbSeE9vnbYWSKYwCQRRtiz6KsQDdiY84EoLWQzQZC65njcL1NrA2",
  "key17": "2HNdMJbRVvfLYiJV3nLMW8Eid1SBfomoy6rMQhz9QDZxgGT5k6f9toD7aY92mZNFP1eZeseXQHktU9vzQL3V8tEf",
  "key18": "2QnVuy8ALkLvqoZuDinXHdZJU2k45hWw1pVpLP2vkjM1PXCyU59Ytm6yokYy9Sj33GujVGj97rCvN5ihcnpSX8rG",
  "key19": "2onTSFii6E9z7Q2MVQA4ZcSWKdDnkkpeo4PffG2Sxjt32L4wQh2D37BTpQK1ujHNnZDy1d5FfmS7p6sJVKbkYJ21",
  "key20": "4PuA4D7DRfr9zu3efoWXwTDrMThmoCorKd5rtG5AuPNv1XphZatALFKVpvfvsdsLyvDxD63CVmZmTWmuBfVkugCv",
  "key21": "3zbM4TfEjRSdNvEzNfPfyqPpy1aVin8H9NhS4mUQaU5JFpsZ8jxAkkeoXfsfrPE3ZMHC4ajtJtLvuFFQ2TURZEGW",
  "key22": "2minhSmSeBpxt4Qiv49Sgkahvtikx6rcEks5qqCtyyASdfd5Nd8ooYvQjyxMBQARuTgYLS47zGtuxY8KtGiDZevh",
  "key23": "2gLfYsFfmfTW1PYxJBywiqksMVon7cnCsW89BHPRP1Y5JbbNGtrj885XcXo6pZ4AZmrPczikNn35FbsPr5jKCY81",
  "key24": "59vT4JXLJ4n3L2gDvKCoZ2q6hP6y6xPK4BccF7eeEphwFa9cv1Ym3zekW1d3tm12eDp5gHkQwhREqDUnRHsMnY5F",
  "key25": "3TtwzLgxWhWM8TSmwrVYTz5gaezRhHNR4dYExwSifXjj8pkU4pFQiSsD42vz4zK4QV6fScHcV3oknDHk56LFUbJ9",
  "key26": "2QTdXfuai62DKuHRLXAoP2HWrkPWyGcXDgbEPpg5s4SPGCZVPZfGGrNFQVhWQXvx2sWt9beZaz1U5hLBquBK3Y1x",
  "key27": "2zoK4ghc6ZW1Qz37CsgVjPp4fbH9gHQB3sm3FAzu3GxB4fjvwS8L6n2hyER9SRUS3iMGtT3cYyF6YX54zVxSqtLJ",
  "key28": "2roLg2B1vcR14UHckzT4eAMJaKTWWV8cJ753ydWyqWxsfmCGxSCnaFJQN75MFEUDRxmWa4fwsjUZC4Ud69zBhX33",
  "key29": "49uPJUfnNyT8LPb9nRwAJinJ99nscorzhKgiGhPxY3CNWGk8ALFviDRRpnLdNijYK7PqNR1mw7XVQwSoCh1sTLYL",
  "key30": "4ammXJg7bcZWr4BzV3x74ee77YqgaB5CtdDMFYPNXCPBJByYh81cQZHjBMFat33pDTmngHKBQ2ZiiBB2DDR7FVij",
  "key31": "51j12JYy8wsnjvNXNFYc6KfgeFceYfJJL2EzkCyt4VJicpCzyCYXzQ14gGkCEPqrsgJq7q8MNa5U6iuxP4brtB4r",
  "key32": "4BzdKcxmPUjodQhroZmFbfFD9FKvDB29cgoek7SQM8AhVwsR7HprpnJtgtbYdQuS4z19cqttykZSuC5qAWaLhjGc",
  "key33": "2Xzb6oM19jK7FLGJSbx1c92a34AyS2ZGpKmQRmktghV9fcBfT9TGMDWcw2zCBWfAzrcP6dAPd4J2eMwTj5e3HJD7",
  "key34": "48958eAPqqLqDr9QSy3qDRUVhA1eZj5MVzbAHXPFDENbaSgciJkvupg2EVfLqLWNfNav5HoxBRVfKvuUevNo8SLu",
  "key35": "5kwzf3Tr9asQamwrYTRLpuHQh1PEpz1ajmMvhrJedXtJzBCu5xt6KkmyoP6x7mwthvZRBUC8eQE4yAGcMyMgWKtR",
  "key36": "31AnkKmXWWyNUue2pjNQ32P9uRqvHETfJ8jJqNeBaFeSYRcWQw3z8VZJqzqAjRnZ36Aa151VYpqHpWZq6Tjqpr94",
  "key37": "3m1NGQJiS9KEhtP5BWfB5TYeUxNYGGsZYygCAQiyPQWTPomwxgWgRsDT6exsz8KLfDV4SHrygozVQe722zALH38S",
  "key38": "4GaxyQp6seEAbvEpCJbo9v9Nw4XX3kNJXtJNsHXP9xyobjp2KpYAuk9yagZgEccnPkDshAsB7KUWZrLA7c8Q39fz",
  "key39": "5fzwf4zHavws9pYLVVyd7c2URupUjXuz6FAwHEwyFdmukFUoXBRsmD23xByiBmb7kxXD5WGxTijhdPd83P1pATd7",
  "key40": "2Sj4htB3evrunnxWDhqAj3x294tLBgDopdUn77dJgttyr13VGmjwsvM6rJp2RkzviAqk3Sw3ZQcWz8EAo261jsev",
  "key41": "2LQrVHZSqku2g3VVn4hW3Xw4LgJ5kv2GUoPsivoypN4NXApzHxoJNFzgZcFHNNKtUZm8yYBb3RYN2ds6rWPbtxkB"
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
