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
    "3HebzPk4AZ2PrEVAP8SgPDKE2jcgpaZKsKbKmWpaS975AqsjVEXowuELYXsojBGJwGcjbbMAZwg69AprDxpD5XLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KZQ7Xft9GDF9CLARFT3iMfsydF6hUP2pykZeixCtGcH4vDJrK9Pbkvm1awecwciNL78CeGG7GogeCw43FjpPY6L",
  "key1": "32VHd3RVVgVJZzvyPAqSPuvQHHZyWDvvEg7ANrWLrwrAMrnuSxxayrvn19A1mzQamR9s9PUGRHtdje488y31oinJ",
  "key2": "2BWJ1yRpBTg4AgbiGBvksfxD1R6c2svdKvPzujupPXPKS3iobp4wNVXmsv711a4d3vJMj4EyxG4ZQRMyJHie1Kdp",
  "key3": "5yFqzxWGQc89DcfKmhnSyWB6ThfDtNYB1pe6A5DfYEpKWA4nXKrah15wLs879BWeHuEg7ZaXLxxsnnx5wUY3eYwC",
  "key4": "5M6RDf74vFWxskCEoZ3wJhkirTcwV3eCEtN6ELh7NEAEWdiDJz6GawzniWBstbXkqjP16NUUvZcrP5oW7NtXhh2S",
  "key5": "3RJP3jGuigdx6inGUW9NEHu5vpWaPnSfVHwHL9F1Vnsk1ktUqZMz8acimgRRovveWBMg68k6b4FiPDabNgi616q8",
  "key6": "48n6B6tPdcmUgxL9VesX9NhL9NuVKhMEw8ZaAow6xfjCiR3C2n12Dyp6St6i9CtmJjwY9e1YUMn1TvRLK1X936gU",
  "key7": "5SQ5X1fb3U7mFTVuHFZcTEF6zqkMu2VwxWoq1mWKhEUpnhX5aLYmxtQor5FAPMJWdmdBi9hHPdfXNmXv7Bpzx9KL",
  "key8": "5ddPtSwYEygbTrWUxSp1ZbnpaWehJLD1k9dkmtS1EcFHXzau8nVda7tr2uEEt7QKdmsayxq8mzSQMKWzabekq4yg",
  "key9": "2bEX9kGL51dgH2r5UXgyamGJRM6yRoBPLoAhbjsbrB1BTDBJU8MAQaFwtCpCRW4NoV2AXoaYJkNobutQDH1RuTbq",
  "key10": "4BvXjhBmPt4Fk4AiKJZpwnVdECSTkcqFtFYUffDB8ZH1FjtzhUPCUWvSKyq1vnRTSa9oyAh622QzvMo5FqiHQTWH",
  "key11": "2C6jKeeiBzjrR8jHUeJLmpgFzG8kzkAtNLpP27oVcgG9QKBLBJBqotocKMRtRwu8igGPXyYeXUD44PNhpJNGtUYK",
  "key12": "4vUCGuV3sYAtruFWjNDKzL8KBcJhtAi681F84LAgfB5Kj5c4enwqfDiZUhbQtc6yYL4HLki5B2GvHeQE8cUCwUgx",
  "key13": "Qk6SPFHWeUqm4MW9LEpPgnn5hSq6Ygy9zhGgY1KJfXgg5KUUUWCktTeSM7eUeJNVYkEGic7nSZiEXYuR6tcbPRv",
  "key14": "5W7fto1RssHs4q269HxNR1GD8RLdv7KbnD1tZUKQRvPqpRCQdDcBrkodK4XHmtzXYp73DZh2CTE97kWDRZkd2e8g",
  "key15": "3x7q3cG6Q2BdLFpTtMu1j6inrRdUeZkCUgvsg96VY8SVCA26vkvDUPVKJpEuW9V8hd8ueRBRfk9tozksWkutrkW2",
  "key16": "2xfUMKrtnWds5jVZeQgLkWMP2CEFM8VNDhpdv6oD6PT7y2mgmMuwoYp79EFXr4LYdMFc1NNRfbRUfJgYgpjdLuAc",
  "key17": "2k8MByBWm5RyYkQKVjg4DzgrUvSqBz6stHoGxB7vALa8Myv9HHT1YMxFbrtxqFiATYV5fjJ8se5XxYaERRZNQDP6",
  "key18": "4Szr7vwhLybmCCV2MV58Ur6dQuoVP1VaqYzsTHfAwxLQt79e29tjgAsEA5nYEBfFw9pQcGo24cq2NkPXxNt5dph7",
  "key19": "4X4mnnVoRMK6vLV476mcTEtvHBNefYXLtMzuXejcZ5DCpqFy3RoXhnp7xfM8Fz9tx6DbAKZ5vfVNjBu8VQRRt8wa",
  "key20": "5j5AmyGpiFqwiW3GMc8kY74XCJVNPLrxQ8MEgivy6mnsMaon6t9AaXk1orYdHxKb3a73Z8FxVZji84zpH5CLacot",
  "key21": "4aKwAJg55PhozNim5kAFMsFp7tSw8Tm46aRsjwegfHS2VoKco9kc9ZZx7KsQSKXZ9ubShDNPkhXWVd5xS46fqGyb",
  "key22": "2opr6v5Ka4ncGgxFNg44MKo835BkedcwTPpwG3Ae2tv7f2aNw5YfhLEk1iC63AEwBxGkJw2rfFLXVpivi1saQVd3",
  "key23": "2ebtGFjsFzYnfxRDBdrSnUGRJFJw7dRkFrA7Mu6wrJphqDDJ53MZaZJ1AcqrUQhGKSuMaF2SgGXdoHJnxTB5o8bb",
  "key24": "51CjfpVGtV6AhEXMS3GMz6SJsFvWuuZhKWM86c24zNDDKsZdaXU9P7Rh313Hbbnay84hnsYg44PdX9WhPPMQ1V1x",
  "key25": "3BJQ3GhXGkk4D9aKjZgb3wurtQK7hfyfBy7mkqoyLCRTqbWzWBWsvahLrkv6eQaXbZ4dkZQLsGwQ4QeWZAVb2kiQ",
  "key26": "2xdCs8Rbam5i4kYrnftiQ38FvVkXAo31vrVBopMdUVnXhR7s32G9XAyThaYsFJ9ywqdJAVUxrmNrHLbVgdRmXbPi",
  "key27": "3Ed8HW5yDihv8cbxLwmxpqJVqWXBUtgWW64U4aCWD4aVNvH9EbCqGVKxx2mhjCoVL595wETjHerHVetG8dTj244k",
  "key28": "5RCHQ6nTjxT5TvAS9MrNNBxz3oPc9LADZ5XzH2hMjmF8vFjYQ4Za6swc1ZdvMTiyPjhPsGoEotummksh8koksukn",
  "key29": "2vNUjr7ipM74ELefFwji1LHYoY1WPhRUMGrvWGC1TnmYqVHAk4MQ2csRDryhnGcz8rQa7RUPFPpbeJ7PK7qHpfSt",
  "key30": "2KEKLtHbUuoy7JM9oqv3UuS8aAXre1B13pwwQHN6EHxVomXZMBzwbp1qVkuK8TQmnNw7L3BXng2dFEdRKz9vu5mc",
  "key31": "2cB622hdQwsNj4beii4Z1r328htcE2XzNvRUsfgQcxM2m4KDhiKqVtVukqnKvzgdrn3DByCc4aC9eiJZqgEz112A",
  "key32": "2isx1BnFe7LdGasHkqk9caJXE3QnGz4zutAJYo1cmHa24TmBVEiiYNt8HaygMw6RvsVSVcVdLV8wNg3w49a9R1XG",
  "key33": "2NUkBfarEV3UQUiKjSKfybxxEsc4ztaB8fRepHBTwpsLGfPuPL5KbxiGUgHT5ZueMHYhpYQEGF7pizqRWjjPYbr",
  "key34": "2p2dC8QiADA3stVAFKvJ8V1wQWWC2bqMJYGzNA2q8VEW8suneA65y18SvKeohq8i6ygWBSTVTBmhrFDLjVCWZN26",
  "key35": "2CwKg3k4hJpTEcrHXYmY8gGPW6pdcVNqgUue7xn7vyVCD1vvEK1dAoX2fn2nGQ4FzJDD98qtbWHU8WmuMRkoXiuF",
  "key36": "3P2Uje5w7vMygx6Nwdp6zsrDm4XxERyhWStqZEJySxSvrrcDzg8xypie3hNwsKhuN2C8qzbgvDKf5L6ghy1gNrqR",
  "key37": "31h8tda73DbiE6SnoH9mTbPdK3tgMdfE7hwkZVtBEQ6pRdsC6YNCkktWx8q99ssPWRE8nXwmt2nayvzPe2R8oEBN",
  "key38": "43EpuHDyzCWqBLBBczvHdeMh6wKnFLP5GGuv4qQPxXxVTZXd95S6yJFSi6BspWmnEVBS9pQjuV9XeNF32RNLcdSR",
  "key39": "3vDuRGHVX3xQGBD7r3YjyF1RGWCYzoV6aeyk5sg8aGs84XMt1eaCnZM1Dyc5DHE1hLTUAnG4bhRJmD8vBX6UzjLC",
  "key40": "2ux6SYKWoUQLgynAU1dA6u5XtnWvid54A12tP4mbzoJVg1eSKCeBmFuExDFccKtC7NeoaLByr2UGPTtn7L3WTAFQ",
  "key41": "64VH7MpPn7azeArZPZeC6CyHYYkWYiJwcrpj6VY9vBmC4c6HUt8Nz2roTg9mmd1DZ83fVstxepkNebgJhX85NLvu",
  "key42": "5Mxjz4jXoVkZAEnXwmaWU8JN5qqgRcdeNAPXcSUAHyFzScavzL6z7BtuLsmRwvDUtCLjkcNkCRAaFXN4AruS5xn3",
  "key43": "e9a1i7jM2LWQXpFwUhaW1h8YhnQBhvv4kQm4UT49gy2QNJbNNVCxmGrr2rWe4px1DYVjaQ9ZBPFbTpWgXVpktS2",
  "key44": "4CEnouese6HT4pMw4DqjzRL8ciSdKHgQEbMs1AjkGZkwURwrFkUkbtjpSihRwNaaidQVyxvhKU6aagj6Qn2Gr46f",
  "key45": "5JQFsaiBpys8PvxBX91DptN75p6koKHHnQRFnwtXRXBCXgcxZxowBowMUiHQj4xowrmm7atRVWRXm3qLWp6tVg43",
  "key46": "58vzJWDatE9Mjd34ubkXzwvCihKboq4PVmrL2iXtxeEtqUWZdb5wL4DRp6RiJY8XHuDpnt2BQEfuPNwxmHHxnSqy",
  "key47": "5VfBuGvnY3WkVNyCzwn8uYXZYjKpn6ou64xdjWw1H7J8he6MaMf4EBpKVGZHactnUqYwfwdvbjp1Ajx8Pevt8Wos",
  "key48": "5D6Jq2TctZrogUvC5Yi2ToYURiSTce16bLp2UdoFS9dRsnk4pt9PeWnkvdWjA5TjXvhkVFnJewzpA5yt1HFH2k2V",
  "key49": "27vSyHsoRpinu9keG1RcDoCQJSBxxRrbag3euumi3ZtCBjHa7FEJgGjvm8euvBNZ6qZn7k7sFmwfp1aLD1LNAAie"
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
