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
    "5JPciN9n1b9F58PRx46U9ytQKs4AKir8y1vuYMe7TqtzS7Hm5EbB2vxLzotHrVsD74GhCQMFixTSModTt5e3vc6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39rYnAcQoJPrm9eKjCQxKzjMhiaPs53VCB7CyH2MABoQTfQ9Jo1mPM5kYRMVZWMDYfKPUGjYssrNvjst9q56FRJc",
  "key1": "4YP5vLsnNagc8U9zthYX53PD7eNBohcxtbLaBmYeo8QGynyPTFhDikoKg6Gxfnf7X6LCvuNPbemstGQpP46hwp8U",
  "key2": "4h6vBQsA3QpgDvU5Td8MwrQ9BN9x3xL7henKhRPbLSPfbLSpTT7F7K6sQsqFppgjLw3spNtmQfq8pTtyncv6dsVT",
  "key3": "2ZrHSoWqxmYcRy25eufEQuurk9SoU83ZRJ8W7kqPXDaJu88YqaqjLZJQub7mw5WTQ7cMDMZ6hZfHprLpAsD1ZXkt",
  "key4": "5fgPkEPLbZGLMDw9eqhUEFFWfug5dBmiNZZwsq7RzRNkKeGsR3LyeEdghdXAKzWa1DtRjebkDAYFD6GTtNSKQrQ2",
  "key5": "5yPffnL7LBc1oMuK98UL6zqmgYgCPfiY9dc9B3vSgCHruvLZpFgfKAJRmdXG8Ybwfaxb87cagyzpdTRPWHAqrhNa",
  "key6": "3eWV2vK3TxoML2sECw7HZLqiM4UTLf59caTB5TgNZSDnxS3XCYmq2BFPaJi9ppu3w9WciUGdSQasZYQCzBXxzoRG",
  "key7": "4p8Qwk6Kki3DqociYActdFXhEcoanp1dBYSxPGh1W7jSSuF5s2cLVL8dDty8XgPB1NY9qhZneQyQb7Enut6r4iBj",
  "key8": "5DaovD82U3krSdcELUbdN9MvdTk3J2JZKo71r9ummJM6aVDLiFYnP2Q3ofNR5RTqasQj5cadgKWkFKmKn5yLFvTa",
  "key9": "4SyARk85RDtex4Bg7Ve3Wa8nRwjG7Pbu2tzJHSHVwCEWDac83y2oJMocYuXjA27o4AQm5EjWGpQUNerDzggiUizv",
  "key10": "5qDPkHZ48cYrhHyFqEsxxmiAkSiEha3RJRmFqPQNw4Wdr5QZYTBhYB7xKVjbnfLSnEvpPuV81qy5zkb7NAkd5AnA",
  "key11": "rkzcU1JpAWBzoi52JywDrtV9KjqJ99SaLtYXx3733c81fQWdKtZg8A9xSqoFsHjLsEMhEsTf8YuzZ7TwCYUbThE",
  "key12": "541hs8vdor9GCBNEEpHzk9k7jS8Pe2xosjDea3zGhdXnNmwChhmUUSj5AzGiaDCib79yK6NaDGNwzcYaqsTu2eXc",
  "key13": "3eiBKkTXZxC7h7WWimMtUV6miQqSGvrJk6ae7zf81dUj8huzbVVjveEHDSzAxxumFbfrg1vvN9meCCAcT8w1WjTW",
  "key14": "4ZXMCDzSAiU7Ujxmw4f2koxxLmTFP7AA3zKVLtr5Ek2T9UvRQjBimbkGzqMJkmseXfHCQiUdBqAjTgp8CTsXczdY",
  "key15": "xFViWPVRtsr3H6ZxbxRKaYk8WZ8vgXUWBtLTBQTLs9MyyLuAWo3rTUdxFf6F8MwcYZFCZ8eUNZ89KazjpZRFd3H",
  "key16": "2JH61pnscpViCPr2PuvoEASiL3atFhaX4noEiRT97nWxVGFNc5JvK5GHYo3fKFpvTGvgin86sxT4BCpGkqigY8N5",
  "key17": "5krCzq8QE2J7j7Gz9LFTUFXBKVYHAYcP5Q59J3hY1syXrWeY7vmn4hxkjqTs2pV8F8jmAmacPi4pwczhRj4srwe7",
  "key18": "4CwLaLFSBUxeEiiFvFpYzuuoG25aPCQfGWmGrrPdeJBBWLwHkmHp6vot1u7QzEUQ3F2x2mc6hMFnBt4S9gYDDLwd",
  "key19": "2VJQRiboCreAkQVJnB8XA9EPc5gnvMCxzFeopgCVt8e3yUNTRPt7siHx7XZYzGw7Qmw3QCZ1LavWcXyvoKYDfKxV",
  "key20": "3s7VTJzKEZW9sLMF82MBymowBMgPNyVjjv9YnJCJDC6sbtkcyQotKszpg36Y3utJ79FTqcS7QSQAde2moEuG4tqh",
  "key21": "3QP2GYsKZuKWhfJRwdiqRHEr6i6ZpqrMkwgkxec5DFjdP7tPkd2wJgJ6RVTPajDy8ciDiZhqQQAAonQVxj399UMr",
  "key22": "56TTxv2Wtk2vQmQ4rsS2LTT7j9otg9MPki6y2mokSogbgCTX4CgpNVaWQumNdFFjyPvWU52sVnASkEvTRZwG786e",
  "key23": "YzrQ5Cx4eTH6L6g7PSoHMczsBXsajZrj6tRBowxeCuXZUUwGqqTyVkqG4D7FYoBsEGfZdE7FTDybwjDRMDeDGKZ",
  "key24": "T9WUiCxZNSPGhHAH45MTZt7CHx7tsbvygGbuZGi9s497rrKbess9LdWy7nSVV9ksVa1YWREtDzzk6b9cjgqdVUR",
  "key25": "4WHzK9h6s1uLZX8t9xHe2jVDjtEAx7CXjWWMNoTGNcNVdkVsGFmdLBmnDaVRd1m8qBp7ApXk8QWEUdYfcjEhYy19",
  "key26": "4Qpg4SJRjBrjxirUnNkc8PQbw7kHgTrrm1GHaouKwQDCx8gN9rTsi5g1pscxvYWBhJmhaFzKXbPQKU5TER9sEMbw",
  "key27": "2rbmrL8K7AbFcAFj2tj8n3ioEyAwDLutVBB45Bey5jsXaLpqgYwsW1oDmqsnLdiUJBT9KZkbzNzBxC6nWQB5Uhaf",
  "key28": "3gZPEm1VDycnwRdMnNGWR4joQiKE5Bir4vEKhgpFcjqWtRuS4WRcHvFzfhVQPu2EQC1fcyWm9ysV9w2QZi5i1G6S",
  "key29": "2pYjFSdfBX8n7v99yAgxCFdrbD4xdn16BqLKDYJkdjCLJWx3yboKYp7XYXQEUwjXKVdvtAWdavpGVQtJYUzTmv9P",
  "key30": "5qRuYq8ocisKicrbJJ8ip7tXE2edPaQSeJhkpgSNWfgDgyQag9HmLXrEL1gFzDuBA4S9sWwyNXJchV5nWCPQTffQ",
  "key31": "5o7pdNtPLrkDFrC1sGD72LRbvwUTV6tu25FC4bA5TbCfzYETZNxD8o61jdNcYGW4PC7BBZRWq2Uv6pvrm6vqeqbc",
  "key32": "4goWxrcovyEkjDxcPoSR2niup5eADsgsTpNMiDhBn7JhmSjytmvcmz5yrQ41z9343gkS81kERUBGyLvDD1CMtYXu",
  "key33": "5WQLKLW2og7NTzqRjkD33uFgYAfqonh2Dj8QtWC8z7isozm6DWtXV2qcGMfSdmPLzg569wRQo2va46CkQfGqVTyd",
  "key34": "4WZTX9MDi8k4fGJT6VubgzLupSPNznuPeA5z1gsQ3vzAWPqi5yq42zDdVYjduXqjZcCdS9eQGtwJx8MDqJRstXDs",
  "key35": "4f3uqSAVfouUoHeSp6s9SMTvVCvZn5tomBbyxghKqQt5TLBqpd2PGvnKTDzF7zWLhYcFmT8F7MAQpoo23xS8Kkrn",
  "key36": "3WhzAv2Kw9C4aXtoCt1QSpf3NvwMJnGdnKxT4aoi4ZMYXDXKryxmhnHQ61jjcSg1HAJdEbZaFZonDMAMnHDvKHjj",
  "key37": "435B6kYhcy1khrWDJHi9cfm4iTrRGGnL1zfJfob6KFcfEosUrmB6VhWjCpK4ruQPT2XX1quA9TpqyBPQnB1doaGX",
  "key38": "27G65jBhFAnMgsAh4fijkVRBycGCcH8PgaPx5uVpFgoUFoBf8nRprWaajY8yTPZXQvECRiXpL4V4uwX1JAc6qzBE",
  "key39": "581QGurgizSUgv5BsZLcEiHn2C5tFzq6jKwTkSEs53pewCq4rWwaxRDndbNPaWUmqnwzLSct3DvEf8shjVv48qrN",
  "key40": "2zpEUTFgzf2y437DYHEb5c94eG2ebbD6i4X6HM9eseMxUFj5SUbvb4xGMU7yJL2CzHDbTu7epqySPmxenUBRhiCV",
  "key41": "4k5k7CLZ5t3LYez4hQEryq4yenoQn7WnSDibaaFqJw5VYZDrT73mrwi4KLEemiSQKhhGKTNDAag8LNLxom8zRLCJ",
  "key42": "5bqHbveXdBktCr8GFbERE4qGsh5iqbHU5diKofCe3fjPv6W6GimiRmPGWy3Za7HeaeyE5n885Yej1zy2bf9CYbnj",
  "key43": "3miR5xszGLBBNtxm9XmVrhmt72SgDWHYPHxGGzUVMGJku259q7GzNtAFyYucM7E1Bm7dEQDjupvTQGTE7LasyCc6",
  "key44": "5EcEfJ85j1HrGjoDFX8iNNuTfsEduwBvZ6REPeW5TKrLqRkjenQ1SgwrDfifCcJbdJfLd1ts61bc2Fgw7B7iyZrm",
  "key45": "5yL9wR65gNwxat9yMDQr2pKFLSseWcRvXL4YJp1dCdpbD9fZkGbmQwDBWpbF7PeX7pcY4SdLL3gHvbMA29fVB2co"
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
