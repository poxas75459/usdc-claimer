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
    "4BxrgeYoU5rneX9GzUgfe5Vjq1tH7RfyWDbjpjbrT9rRXMGmmbZBPu3JnmBSsccst7W1wNFZmQp2JYzAPSCSSPLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JmJFmGZUgY3Cu9WUfqUous9PFqmLBMqCmLaTJocWgy5DgatMi8Q9S4Pj2LaVMvrFksHKME4zbLeHE44D147gYeR",
  "key1": "24LbVqzojFENaWfv7grPRQ9mYH2CMn2Tw3WetvisoVT3ooRakRszW9dPUuCKa4AYfGvDpVEiAWPDdFqbzciwEdhZ",
  "key2": "2GXMWcBLoLSo9eorcYhQfeeuShbPvx6hx9q67uTYQ9wJiEAcAWBHs9Zq7RS2fTjyPsqS8FhxtQ5552E2gGkhMLY3",
  "key3": "4ZyTxpuuc18m1XcC5mUWot1cBsPxxBSYwBczoFBB7XwH5LG7EYsA9eskVePErFTrt36TnEdzxKwk6eB1ij6Uycs5",
  "key4": "mZgd4rMUsUTK3ttQkuR4T8J5ZKrt91BVCdJdeRAsLf5oTRkQfAayKgnaELw4rL6oQ7Zd7R5pFA3hm8soV6tPg4k",
  "key5": "3VHeecqPmgJqyieDvFk92cektgPgYwRVdNPM2swb4UkoaptU3tBm9wdghnGyNJAGmBfrp2ZSJJXzG15PSdCLypAr",
  "key6": "4xpVEtbUc4tfW3TUt7wQJ9muGFWYHqYWsb3Was1Pbh65nKQcUwztfs1b6NKf3YnRngvs6gMtSaSr2QWAt2hHWj3A",
  "key7": "5BKJojqud8iKstsYWH5nHc8Vupn3L9WL9Ss5K2LFU6ZCfvA2xj4eRpSWZpWC6Am9BdiiCQFTJXKKu9eBZdZdTctG",
  "key8": "Y8ioQ6qQHVRieX5joUAmE4VFkvu6C4Pp9W1q3Y52haF8QEBsX7pX47Tz9VyhneshHZioBpu4BTGtyLz1MNEmvFU",
  "key9": "5eb8BFYqAoksovssHGxc8FtKGUEYis24QEgC7jG88KYwQHZHriJuFM7j7HWJbUaRynTsHZiMBPfhoxF9NTNX6TjA",
  "key10": "3F1NMfLC12RdSKkUvh8yeycFxNrSWSxQmrf45Jwfh5Nzjt2yAQDqaaJ9V3RWxgFn9n2VfpcdapuRbaQ5bKypsKrL",
  "key11": "9rpG3c6Kjd593M9ZjE7cNWRwgt68g52vjRF5ykwTR5MUHTvo8qzC7RV9hcqkhrTYuhPX2M3r7obf7X8uwkUJ3F9",
  "key12": "oQUbAU7f8tbj9AvjM4kuX9LFEoaGEdh2SXiEA2kfgkbUJFH2xKwJWh8cgFqLMJMixWGcMLEMXu3xYjyMc5p4tTr",
  "key13": "3RC3rLUP9v677fid2GFubDuk7p83Ax5hGGvmhMyZiWpdBE3DP6DwK9Ln6rjC15C5rVm6BpydK5iioFih22UWWuKt",
  "key14": "okxRtUzt2E1iLSy2tVDvbhGLe9FqicyNHdjpHTjQGsoNQici619nqS8PVtmHVYQ71o7inuzWDRMTmkmBfbC3Cko",
  "key15": "49K3hmTYFc77uLfV6xq6n1iABdrmmrkrjVDUBYhSpkSG4foL4YHqm5sWxt7dPZine6JHvosiuTe3UFmeLuRZgGmL",
  "key16": "4cqTEZV5YTRWVfkE8ckeiZCiTba2T7cyHYuwUe6Lskac3ubUAgWK1CNVgoD5rTXP3aoCJN237cz84vRVQnh1vyKp",
  "key17": "5rq1NzscpfRwMiogPfH29qmi3fMp38PFvBwzudhMqu2CR9jTP4G5ghxw7qwcyan3GxWWztYwEmuJczkg8U9aswTo",
  "key18": "4pyGTi8RUf66FHXeYiidNgzA5pTpyZwG3bDfEeimULXR7Ban9PzeK1wy6MzNW7BdKpUgS8ULndnzhMhRHrjMAv3J",
  "key19": "2r9BvHbfpr9Vep6yr2MVgbF7LoR2yGWTB9w93LcS6rqA35iwTkCNuGydu3weCgjuCdAj3R9GCTF4nXRoBB34YGkt",
  "key20": "22hgX2sisfb9pwgdVHitmFNuMgaJiQHYR9q5TvLJFfytmUu4GD4uG3KMok1HiNSEbGRwTdjciMgcJtMFbYM4gA4G",
  "key21": "3uQsDC5eLrQHA3kc6iZdMxdJbbRpTF5dNXaZ7pw9xSkYC79uDpJqBErnQqTM9ixXmk19hJ4TcqCcLd1wxM9RAN8Y",
  "key22": "2FpLoqNAEv2rYAoGnw1M8MEQBoGwbDUVg9Qx9s9vXHwKSVPK5f3GmpcHnFsf4Nj8TYGLaA5Q5sZU5BxZxVyjBRXj",
  "key23": "25Auz5gtanRkpZUDwJxT9p9ZmcntH3SwsSRUkrK7nSw7MW8hR1ZtJtVWYR2dhyf4aWdbwxGm6eqo8p79xCjJdbzB",
  "key24": "4jBviHLeh16F5vpzqZtS1iPDBSFb5aP72NqSndcmTQ2e6nsE1zRjuaUgaM9yDVoGRYgm27MoEyQUUEcjsJYiPVB7",
  "key25": "4BjGwRHEcQKfqEkparLYyxxNLmgrozRQ3GsTQM6ajzH3yGSuJiRD4TDDkCV3Nkj5HQWhn5tsYerJ3R7CGGioort9",
  "key26": "2XAC2QzNefteSKqd6DREJkToGiSgNAf3zDNxuPxfLJTQQXQQeY5s1cuJ8BgbNZyhPEqQDwmwxw3vZfCvjv3qmbKW",
  "key27": "2kKAxwep3C7MeZxsxVudPbqt6fxGoxu7meAk1FgSBk4LtV5ESdMpmM56uM6bYqtckuzbto7aSBRD4MQVozc9S7dt",
  "key28": "41XgM3hb4Bm1C7VXU7Vds6eoU7CbXWDULTxe42zt4HQpW1UD8dds33eFck6oHgVsT8hwhQMQFg6hhAGXy9twf9d1",
  "key29": "4wtLKgHpavnDVBefHsSLoYP26uTErDNo5z269ySZGdP2kLFLD5fF1GSFC329W9kiJ4UkkxqshcTsJEwwxFitn1ck",
  "key30": "3yJgYjFf6MFHhNHN42rm7kJqGxBhdmwNJpMPS5jSHkSC3dXMwbF1r7t25ZJESE9zmV5wfyunrYLAs4CoCy4rj47t",
  "key31": "5LHC9KMz6H5vyQhR9KgbbegUYWiUdKKQhqSRdN2ULdjSfDUErX9No8YtxhH5GFHKVrkdeyRpfekrd5zHJp79eM1B",
  "key32": "2UVWSBpu9m5nzXh27CfjoQM7iRNUcY11MPJVWdWPWNk3BBoRpLnMqpCT8cB7JH1ccD4cpa6vnDySTvA3wrzPHzyy",
  "key33": "4Am6tFAh3HghovxrYNKN44J5HX7egtV39RyFicjoxfEE4PkvKioETCLqYGs7w1vxTELvNpwyycbyGvqoPucSPBeq",
  "key34": "5iEY9c1iTf9nfcKmr5hJAn5r5oxkVe3Up3HXyPtVqWbrpDmtY6JFxnY16LAWbSgMR277LqG86NGsoDwRfPWmr85H",
  "key35": "2CLQGTknvGadzoJVsT87APonTA89tWZRVnerQ87JH5fDPpWj81PsgZ2Cz9qFHzWag5vDN7Jn6n1bSxmaNu619cCd",
  "key36": "5pBDSMsLaKdnKz3RCfY3omDvKVcQEWxepYL6MHjn5WGGRNYoMxd1K1Mo3bvXQ9BnfsBrmACS8Kv8yQrJoQ8kkwnK",
  "key37": "5vsy8FZMD9Mfu7NBPr5fjcnqMon7yeydwjAF1PHt8JoZjesXjd3eFqcQfnfC2KRBbz46ruRf53nSw7Y456d1aH1S",
  "key38": "tQ4QaBMVPbHHiYbo4yLU6zXPDY1chPq69ShatVYxeYKA2wgoBFxPeLFkTX2LWjucbAtNjqtxZ9HjN9A4SmRj5d1",
  "key39": "Gjrte7SVjpWiBr6rPT7zDNUsSqx8WU1zXWYYNHvfBWDxmR3XwroJPENh8bp8kWeGH3JN3BabxjrACxLa7sFkD5Z",
  "key40": "2z3k8AVXwMug4SsfaiDaTosRoyEVH2jU6hWWvd1siJwru3d4Ja6oaFkWGo6dUBToak6tH9jCCxDU2K6pM7qgrVnj",
  "key41": "NpCGgxq9WrBZ3RsMQMxxPf76ANELK78ZGRxp8nvnrHrt4CPAFUfcuVHzNLQqAiUTSRTykW3tXu39dk4r5XpjgQc",
  "key42": "3G7D6CeEmXStL4rK1mv6HibWss3NeYmXPydCjxbJMfDw8rH9EXQrpoRP9b1zZYQ67SiSdQL75vZZ1jfDrdUj2W2t"
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
