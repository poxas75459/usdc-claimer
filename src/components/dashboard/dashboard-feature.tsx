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
    "5ApPov5NzjKFfjmoVwAnpMecXqh8ZyZXyEjmTn4vdcJXu88aAzcCpb9dbmvrin8NvcQaBeXxrTzXKnLoHNHqLH21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hn8q2ZorX4mrgv3WqdptUEL6PRdzPV3hS7vdxnBQiWWDaKpBZ4PpRWv4pMAdnbzryyCNezwxRXZJEyP2uceXoQN",
  "key1": "2ioZS5wz28vJyvLW6EPwysp4kDkiB3DhYEfzAfXFwGVhupgjpWqS6UK58LwxSgJ54r3ChRhbpi1xPEiVimpw5fcf",
  "key2": "31i5PT72QMxf7Ax96PpHQEJDZY1LYc4hc3BbhvYpzwWV3tzYWTsAZRtsEupAXiTJW9kqmHJZb4n7Q4maZKQqsuWs",
  "key3": "5VAEvXnhhg7hsuoXk9uYZMRayaZNsqetFHV81LQiALx7kq4kmsMpWfNNRrhFCqC1Dw8YUMmwfEG61L6wsveGUgDf",
  "key4": "5hXwzjgNQAYc3ZmvAvqxYNCFsENEWeWEQiXBqDwzutq5vUn2pVC9BYu8y6urBT1Z66q2fSoyYdXrf3cqxkGiTeDT",
  "key5": "4D5rX93FgSwwXgsbjwDTz5gGDBDg6XyZFwuSskboHb3R2xrKG6bnF3qH4a4LZMZKJRaj5CD8Vik7Fpp6uJokkjo5",
  "key6": "5rt43gXrh5gmcokePLs3XKyVLiv573NTNoiyoeLfoErvAVWoVEmEUejTYGDMjBCRLSfLSdmeyLcwpxL9viZNtmFF",
  "key7": "2tzDWruaLDvYSTEvjUM44NK278mt53HrU3gBw9GTg8uid8dP8jMHGL5SHRwuFhN7FoUMufuoLv3H75idoPBfLY4k",
  "key8": "3Qu7derB2CRk9yeg8ef4x4s2dtzAdNCKZQETiXU1zFc65X2wFczi1LwJuXtPsZZvEEu7z24eoyGKHMLTVD27iitY",
  "key9": "2ez5Lxur1SPSPQDcjgBfa9dt6NKJFCjouQvoRfUCKP7ykaaCbFbcx8hHJN1bb8WfBDxrDxaA3q82qtoDX3FFubQR",
  "key10": "2ENpqhRmRHqtKGnqYr17LzLjq7646JpHftdV4JUSQYsoTdrKD9K5annfyPembmHVnK5KEYGZ81keyVHcHmPaKXrf",
  "key11": "4x4bn7kCt3EYsD3o89n6HSfUQJSaLaVMJBbVZzHYD9o7HMPcSBKeiUAZucb912VGbVvPcJzVBpUyiFf2TLeBCRQH",
  "key12": "4p7ivUB3ET1y8vcDyJT7gmxbmWriAhbtFvWjikb45cwZDwJYWWs2LLvbqqaYV8nD61ux7z2hGtd8U2ExTUBgCVa9",
  "key13": "3wjXHgS8MYHy7RcdyLcPBovGNVdXcKZZ4Gno6YuwapydSbC4sGyq7j9AvSrKKrPquZZXW2EQhndADcfGmfJX9Wb4",
  "key14": "5Vi3ZZxQ7FNDz5fnPS16nrTKkfcZ39PsZei89Szy2dxAoqy9eYRit9FxYhMFdmUKUZu51JzYhThbN4ZAU1KNDttj",
  "key15": "5VKKQNsDC6orC1TYQhGpjZTk2YPYwvvPSmYR2W8DVR3rgfJbnAkGE3e24v8WSTvELEmVwi93w8vXE7UMDeAF8gJ8",
  "key16": "32wkd7MkT2G8TmN9NKstXMyN4ktmZk7Z3wBbWQDpucFuFXSQJwFD1vmAQAXD8JJQqx6eWUYRHpNBpDf85QJ3RfwU",
  "key17": "4dFg5KDZVfybxbpscmofaJENXkUBpfnBd2C1PCFBzgshLDfioAGJprbe7dZFx9MB4EbMaMMpm7Wfame5vwbsb9Xj",
  "key18": "2gfj3vuNS7ZnbahHPcYoq2FCmCzetduViy4zyL2rCi2RyzpyGFtwzV1tBxDqLX6ic4JQ2oYij7TnR1CZSS5bFDsw",
  "key19": "5egtZW81hWrsWq2iZB7gXG6WyobTdD8NLY5m3zdFBjJqQo8CAy7eocLm6CPa6dtpTG6juH874CBQiF6Ubx87mR2p",
  "key20": "3TjM6LgDpf7CgnZ2ce6aC4Mf8GzZxKxUedEXsKRdeP1f42VTWydxpJtbPQMTDTc9VXgZ56jEqS6aHjpFkK1nLXdT",
  "key21": "2VvgvsqoybhyAyDUqhYofYWBhTFHexxvSjfJ5yaxdg91s2Z4VsVmXGgmuQDerAGQAEtmPKc2NoaozHSmaeax2XJW",
  "key22": "22CYyncP4Wwd6kagiCmmJNzB2PnHpwNCas54TH3ywbFj4enndhGy6BHGwh4X7VVHhsrWwEjth8hs6znG9vuZi79a",
  "key23": "zmNCUWudGfUr1ZU5f16Uv6DJo62NJbP666sDurAurfNpEMBwn4DaM1PyVYgSwCx84rUjmkAimBxaJM2qvAdXyWq",
  "key24": "5kRAuvpqKwky3uFd4ZbLknkAs6atc4md6A8hKLfrFd57wz9ry7wREQ9PsV6vrfjnSsdMerfJcKhnM7kThm89nHAo",
  "key25": "5CW3Va9f8kNZkPoQPMmTorv2tkNdo6uhrNSMeBJmgwzPUHF8nFqxZVuppbo2HASgFD9ycyqNZUmm9rVTYimr4FH4",
  "key26": "2J1wbecUTxua3yDmAesx6CHQqLHu4z27B7X7JNKH12CrsePX7LdeUVtjW6WAyEsiAZ9dbevvPWbRLh7bcLfeL9hi",
  "key27": "ydHHr7rz2i31pvKbtup8RnfwX2hyFHht7uZ4or5LbZfsfv3xtP6FrWMTHUK66H6AXv3wz55XetqHRA47iq3Z65j",
  "key28": "2mZuBs4vXA82DZSHFnz2F7AbGDoHmZSPmeXrvar6gHPq51cyaxATWSURpCMgPyPjdgaTrALts7bJRL3QHPPQPKLn",
  "key29": "5kiFvpEp7DHnow1Y8Z6QDSxwDuynvzVpXnJimn16JhnsdeDYujuDU4JnCLDFJP6QUHD7JqNXgsVK5Re2vy1Pw9Ar",
  "key30": "d4nSqa8SToGycW4VJRkc6yJScai2iW4tF4bJcUnsxgxQGU4NxEDzmv89BWLhqicKcSB3kSBjjjsfJgmp5NvjqHM",
  "key31": "5GVTVonPDsd3tfPjUCZDhSbZuqK3jcxfyR7KkCD4mBmCrjw8Df87yQKv26bd78q4RLRodqZwfsgZuJaWAS3XzsaY",
  "key32": "4yP8adf1E5r9Rb4Z7CFu9n6Hti4vKCkacyxREDquafrhvNiYFcE6rkF6jAfNCMCo5aqt1tFEL8YVBhpf2z2M5Hob",
  "key33": "3WJwfvpbFSJ8w6uZwKbkDh7nQqXPnREosrs988an19YabuqQwVNA2t55qSHdNSsdepbxoqG4wYtQkrwkfK4tfhnX",
  "key34": "5aLSFfUJJENwSKm8DztjrjeQ3FfqmDqCqYPA6vo7qaJNwmAbZSd2XXjxyyKkCsbUMV6nvUwER1UFjiPXgyAzqg65",
  "key35": "5wyybt7tJKUJ9oVaGMgrZZ6Qbwmfut2GU5nbWzg97aQGbKruxUjxKF672YRhM93cs6U9xeHRJqxqznN3LkmcS4Zq",
  "key36": "5xg7G4aybNzRfdCGpMf2U5h69btM2n8eNR4SLGi23oz76pEkbq8bWakgABuy9nHGVa1d1KTqxpPi4pTuhaFFktsu",
  "key37": "4Ud1EUwxdwarVU3Hr3CciLahHjw7aJZupLLR4kqLketmCMSXFrcUZ4B3k9CsB4G2kykk8gKCfZMyBs2tW3c6aSRh",
  "key38": "65t3JUn487uvgHaLattfybM8pv3oAjLqzPbW2FZRHNHmmwdJxD3CdiDPGaRHzTrACmuvin3Hn7eVk2otKGaRX7dq",
  "key39": "5foaDtXPv82fmWZ5982BWaRWfgHzjKgeSV1NfJ9w9dVrYRR4U3kmai2zujSMwtG71QBkhN9tjU9caDC9D861ZwC7",
  "key40": "294K4GHRUc9oam2sSVebpDeNAwN5yZ9sjkmSRSu5Nj5NqsHi8U6Y7Y2YJpgSN1Vyz1oiaTfKvsCquWjKBxYnHTQw",
  "key41": "28R3r3LYGyiUuVxT7Qhbf9NVMFUpZrL4SBBRyZRJGNEz86LxV7HJ8Be3qVcQ2a8TqbZYwAPhRJUEw73sGdfeQhek"
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
