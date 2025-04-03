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
    "4rrZQETNWaZNmcyow8MpxmSMTMAqSoxSxFaV6KXgkpqys7BgcGSnetiJmU4Ci9bd6TRtvHUHambNP6YKZNUMAfL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FCTFq12mFCKXBh5sma4Z7VwttxTaQLWKWQ9A4dYanGujTTkM5z6S4xHsq3Au7nBbU7ZCP7tkegUhRepdoKzwGDA",
  "key1": "5L49xLyZ5pCCq7x5ERUUaeqeomLEj8PXTtp19rUGrRbxh5gYzSdzPkDtK37wEtmvMi8heeWgVeGEFhMBWvtJboBQ",
  "key2": "5qA1yskLkNLAXm9CV45G3QWLVzhdmQYmyeFRNbmqCBemHZefjEDV9aVtDXCeimhsP9L8rfGnoHh6FhmhAVJSd3b4",
  "key3": "d2CXRoUNNLkNSUPU4SvtEtXs2BCbKR2yuw3rswrnq4dYWrvGQbC8w3ki3v5Sp9Sbabj1z4bwRzuPij9zjvstkR6",
  "key4": "4cGbxqGagWgfAAULQXW2fEPmsQFbSCm4vVPtJPYbaM1vsvAt4cVnqu4YDD48yViCHNrgrhYyBVjKSdP8prP6oJb",
  "key5": "2ZeMxVpHE9kN8gbP4JsHv1UNkSnRqVAz9cQWBCAaM35wVoECMz46Dc94yyCY3p7wA5ZD1tqPUe5R87FcCWiqQbwb",
  "key6": "izGbfxV4RZWW4g8iyU7PPQTeW5djqKaGtbPNpKe6y2JzHq4dGiD59Wc41wpR4c9kmFRkNK9T2idZ7HXr5KF4dFd",
  "key7": "5EBnBKR2Bj4ZTPz8RGbkn7paN3sR2bRAjPDjhY1uyFh4RSHHNspdpedHeHzE7KYtjh6ady2aciQysPDM5s1HPPLh",
  "key8": "Gyfmkk8gdqLZJCwAWXpkc5DbWpM3Q9N4Zbz5kJWphSHSXWL4j17fPXfpzkma4fcVUthB4ytnPJ2NcjKbPcpzHNS",
  "key9": "5dSXQCvk61fZT5YPj8j7yDEgBR9PzWxZ1yheHkfkPhng3m85oZtwr93HTQoeQE5Z4tU16ajkR4wc2XktFoFPCw7Z",
  "key10": "35bNCUPSG25AiPiqicjLurnYm4hhUesswMQcUK3Z8gmCX9BMvBndoEW8WryUne7emRQDymsaVZmTZLLz94aDzY1S",
  "key11": "4a4woyF5FkEmBkefB6CJhTG88au3U6ncSMKBbEp7GfQh7H4vFeFjGWNiFdS7AD2pcLVoDPCAj96eEUfG2bdvRw7z",
  "key12": "3EWktxoWJEg2EPmZXqHZFkYvoPySNiLJD2DJgzUv4hfJfsRS1N877YbveCPGGyxfsRP3Q6rWxFNEftwSUcUtciZb",
  "key13": "2KWooKpne1BHe7TmFYeKMuWaHXuKgktW7Vx6aEEsqtuC8ARF1debJqWNX8abXvrbRJPa7n3gAfhqPFW5X6FweZBS",
  "key14": "5Che5rxW1A9aDgnJtcCmvCXfuGNUyGgZ1PyKpxxngQ4S5ZAzkUtvgtPxC97TnTi7X6via89g2vxc6XtvjfEQbNic",
  "key15": "5jkrbusDPRVDh1Hb5Pf9etGmRJajUvn27YnKVnWTXGQ8w4vNfMDuDtVFBNC9dv9iuTaTFCzmpc9FjhW3RL6G2jRP",
  "key16": "XnXxTktVDopZteSuJ5cKsrtJ4hJe8A53zRpmdsGh2365ZnPsKUMRHHB4fHm6NTvtrXwAtXyDrFnoWyiMdWiiQed",
  "key17": "31w6iwXXzBodqvtn7HSZtRyKwFvU7iqe1y2gGqtiLAsvGMsHQquDAu5LRP7bkcb5wiMWUFSaa1ckn4A25ELyLcT8",
  "key18": "3LnLiFcLz1w3Ezkibcc44BTnxETMLwh7QYPKkhUNQuXsfVqdcmTgHqfdSzEMNDDforw2KsHzFx9PvJP1VZMcQzmh",
  "key19": "3feuhkC8bmqdHpxDYPmhiZpMpauQ7EV3nzmwm8WUeRKYYbJCbdeY1kGGfTWaGexrn19LpKkzkRDjRx55MdnzEBcB",
  "key20": "2UMQ86UqM4tM7ccRJYWpeJ21rn4cgwJUqd1Yc8iyFpM7YrovwFp2YVHF8fAmzmhp9tH5e9TU2cdnsTCsxgmriVgn",
  "key21": "Gzq7FQMvzsKAKWoh6EHRWdJWHVQY8skqZ3cfL2u6C6UxUvN9BHNb5yTrQWh1Y6s5WcmBQ5s63i84gdTrxefnqYU",
  "key22": "2bATrUF8meYnNUosmpiQ4FW4np5xLwZu7d4rDZM1jbxvkLLB8a28kzmC31HQGuoeEDuepTVnBxHcMszyTuYCorEc",
  "key23": "5chdyL7XCPwDnVoVpvKiEVWLn2EVSAU4nd15EgGysX5qc5BNM7WuimcVykKsSFjRbgCC9dCQL65GohXttY7E4o47",
  "key24": "3uHSiopmRmbJhEPPpkXiNtQzSjmGZ4jrSihwwUDiiACUYuRwGXnRCkn8R1PwgZSkxPhgy5os9aUGeY7y26ap2eew",
  "key25": "wKa6CQdtuBYrabxtjeRxiZugq6HPouRyhGiMM96b7bFnDkwRqbQnn1GkGMwx6NyYr6ioYA7YTF1krBfKMG9R8MF",
  "key26": "3KS181NvW73DrGtKPoNF2b7tUyeVVtygMhyWAiesndn3Gt3DbL7W8TUa1k3bwPdG3npeP6DUXRjiUjuuM2zB5urj",
  "key27": "5msCc3bEfp8MdW7AoHhvoUoKt6NSTz9Ve4rBhSEPd3fRt2xCY2Px33XMeJ2FTsY1N7pVSCfxYpAnmwAtQix7qgGs",
  "key28": "4Mryk79Ma3avUBVypJ9oduKNLB7mjxdwgr9ymEsjcbhYRuK57opyqUmkY4GYKSxh16Di9hg4Kdm4vFtGakfZQ1vD",
  "key29": "pk6TpuwnXYVf9VJe66xv5do83zGr6gjXcnNXDYjDCronnmQZKWdaTsbHyis5DZftEDGf6nw9r8AFizhGT5CUCM4",
  "key30": "5EkFf9hjrm6mFZ19dcE8zYLFFtBBb3hudDxyMwaYedDp7PuAkF9LTf6UZ1vjcnnvMC3zZSvpvcMjiUwBAxaS1yQ5",
  "key31": "5vBHuv8hjC7oZstZJ5F8fkuXiryr58HbBaTXstKJ7nHahnP3cmsc3SMQbc1egWnyaeF9U2wNGd3Yx2Yg3rST3LAn",
  "key32": "2y2zRZCyHeLdA879HZL1D8DhWFKMVuC7BQvKb7bcSewiiW2foQ7BNVEVu1beTuwadB6dNTtKxuaCbzCGm5ULLZdj",
  "key33": "3CmuSqcXf9MbqGvsjvi5VXcPKvHXzUZbxyuQ1RZHXo8swgWsFAyizc4UujH2JbmcFUxeDB5cBY9i7DAGgyta9KgX",
  "key34": "2GtqSMNB4KPvtA7SQMvftKfd6ZNjAZ3DRWrZGPsoTysgidqAR8i76J7wogcFAP58M3DEXB37F39d9Q1EnXAJfFvo",
  "key35": "4ZRr4xke1XWiQfDH6JRXsTV5ATSuabdWqs5mySzX565JCJScm7PbzDU8CuPX6BrMmmssUMu9TrwewEWZV9LuSkcN",
  "key36": "5vN3xBUKVhGcSyDnQXQy2GKYTdu7i5q5E5ChNcFgRTFxJJXrEj1v7JQpigaUZxBHgs7oUDKRZZtMRS4PZE9E6RiH",
  "key37": "4eZppoEfPPj68fry7r2WThhfTnkFknAemAhXfXNEYzBodDkxp4jMLWD8NVJnVGipTAKrB6ZABpSywpRfymBtnk4J",
  "key38": "TjcRetPaK7kmWuqQDfEfhKxoWe5F6iZnB8hJdnsUsWTdHCebMSUQ9BNRm6Q12NhcR8ho5jeQXTz97jjKLPTQgkT",
  "key39": "46skrJZXot5biMRZAGWi7pdwCgH8jza53aiSDHrSts5QmW2mbyyjgyQ3Yi7wf2hbCSrszqac1P4zxJZvKayP1Le6",
  "key40": "5DEX6u4Hv3zwWcMeXgjiQQNAuociV11N9DWxe1X2Ky4aE8GUfDDzRkis1QR79BPUi7PVvQoL4SbZSjnnqjZvVcNL"
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
