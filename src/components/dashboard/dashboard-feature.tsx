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
    "TBwLYkFSkNRyKRF7kERdWvKykPu2uKXTBYuZbuwcdwFbqdw48zGY5qjjPPB28wWAcW6HfaghtTmvo3jeA3cs4qN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jGkcFodQ2eHAnZzNJntJtMKidH61GWbwtunh7Pp6jVXaBZV6t3bxJun4FnTS1u1NtkahHoY6WNPxDTVGb17c5PV",
  "key1": "3VPTYk8zGj9kvPj92i1pGwHBU5q1Pa6rYo7i9RyupC2b4gPHLEFa38gx6sugMehAHGhx2W5GVCdxajozZG27au3Y",
  "key2": "2er3Qd5iX3JQhagaFnUz8SWmSt9jAymDWayC1bGhp1DFQ8ozrVKb5ZcRibjcmi5MXSf3xBB2WrinGLg6xVipXxwM",
  "key3": "3xo9JYLvjqr5YnZfe3oTinv1r25oo6Y5Uqopn9EYeF6FwGLsxXxabjmiBXznZ45pMmhF5AE6A1KEz4M2R62ffngX",
  "key4": "2CDJAmygqRoHzYYTytrKX2RRcFJYsxEToWHeTxXB8adoreNgTtnhEGRtokoQGoe33QhneJ7M7LgRdzw4TkRGrWhz",
  "key5": "2a8efz4uXefESLmqjgxE9JvwCsgDKktsW3Rw7nQHV8VoL8YqwqNzLi7qvoxXAno9vskDwTweqUMFrtZnVxu7SehR",
  "key6": "2fjmwzedwLjaEetzdyvnVrsRuLWwBGnPQUT6igQMaoqnxsupzHz1cnYWVLyoVwQsCwU7vtWgMspWRxFoSaNHahX3",
  "key7": "5HgEWFYng8wzkW66dQzGDAqDfbEmQN1sUJQ9jbHVyqenEAGhAvNSrZ9jgBN6LqyVbodY2rhV3fjfdmDS2Aaup3k",
  "key8": "2sirA7Up8YzrzZgfkDXhAgMu3gXRdCinBvXRJrQPVCwdJ79GDf4YLVPAd7acAq6tERH5ws7QFHp1QSzLEq3if9Wg",
  "key9": "4CRtke8mCThgYfJQu3upsZcfpYoE3AUqktkgrdikMBZL6rxYAuWLFyNf3h8hMBAHVbytmSmT4TGVFbEpgCk55QRx",
  "key10": "4DKxsx7vpLFuqeYPPgMqBDzaE4BdiZynUTRsKL3vhjujkQxrMAp6Ys8eLA9RrCSZ35ynx5DAuz4Tm1jcZ734qUuU",
  "key11": "55fq9gjskHN75UfyqtuVmjekZk9MBfPef9JRTJTUhypJpLJ5QKZH1SxkF4obZvPmotnFMjYo5YHABYB6VmhKS4y9",
  "key12": "4aAW8fE7PJPmatzEf5X9qAwQ6ixdHJ4aWFdpS7JMHKEcTQdYshGpTZhCsZNyfL1Ui6bdhxYErUH2P5rshtU4M5VA",
  "key13": "42PXiGzY12DyM12Af7SbhaZWGKqhU11KHLEZwK9Vt4udz9gnZUMCdkiQ8EACR1DnbdY6bdMHuEydoeyR7CGJeJGm",
  "key14": "5SGtVe1VkgwZn88Hu3SLvQGbnVgUrNj28iNpVtjscDfW4C1RfXDoQjbYX8KyR4pAjor5UnGd59a8Wg7xBfaqB6mv",
  "key15": "3rFnkRynFcgRcxnaoUVd8ypCz13HMewCNXPwDa4uQxpUNA174D5uKBQWrKaKRr99ycpyGXSnwYHXWGs4WihdQT9v",
  "key16": "4A9S3uUg9rx5NPNZMP7hSkaUWZa3zSpAftwMRFiTfy3Jr3JANixZpieRh4Jb4Z3VvegNDPifAoaBG2WS1y3kCXGd",
  "key17": "4rCMrhipXziNBX1ZNFmwYKty88582MvjqmASxjRKRfTe858cK9gLpzK6e4CXdsXw8C8mgJqAnQRCPfgA6AMhtEgh",
  "key18": "2Vo9vpB3SJTQWqaJRQJFyZB1wyG8QZ3Rggw3j7F6TbXgimt8M679dxiJqy9QPpvZntU1U2Jj5X7DGDxMBSfMRko1",
  "key19": "42hbsnbe4wuyZmKrY1Uv7m3eeQep7toZtb8cZE7YcM8j6gER9LyqPksNoUZQiFFYedHhkBg7jfLT4GqGNTMreigE",
  "key20": "3oJ5rNNUkPoE9yxWiVChapqRRAHnSXpYNfPyZYU7crPShAJn3VNrJuYmJzAPAdcMf2ffmq5E4VtBX4KZfYG6AfbB",
  "key21": "5HcdT4rCpCRrqiQ6r5H9MgAjLcpSAGEpwozHkpCde5pXvCUwRyKCiLrAJknD57izGoUzDASjZ6RAgd38YESufyWh",
  "key22": "3caVWKwDY7JXnwF36RK1hA2Pdnn8SDN2XA2JaYo9NQw5b4z63o4fivpTdALQXvdk5Fw5GKSYE4tjdsC1r3BPatCW",
  "key23": "3x476gxsvHFxTusVhaTefwCtzo9pcX2QupbJ43BXxqqgfRUZtfELwRBFJDT8ycwjG9fn3sjFKSdRCoy9kQ7DigE2",
  "key24": "yBk1kDKTBtcNA54uE947Qfef2vxRkj3TLUcwxZG77VL6pwSzCMdxPx8EijiGG2U7NNM5oV9nyx6SSzysBfxdnNY",
  "key25": "37VzfKQrkATjtgYuXjPHciCSXmSqBaqHvZb7uhSixsd7uWQmw6jjAJBCceBFiTrgdzsG93RyXgyXqDjASeCQ9r4G",
  "key26": "5TjcJgFsLAmBpVAuUBdWrszMr33bFF63ty6PVByC48zbXqAdQviswLRS5Vj42Yy1wQoLw9WFmhcR4CB5okJViccs",
  "key27": "wEGEKa1Cb6GCgPRuRPo3RvvLCfMcLPbUTeJSUvXK7xr6oEb8ao7KxAsnotqCbQxMJZj81ZsXH5atw7nissBLWmE",
  "key28": "65djLJenUwQkP9fNsL4azGRDTEHZsbrCbDrePsPCsoanLGjm62apXw9YPbN9W7d5EPrwcwo6LKZD9RtMwG4JvfKt",
  "key29": "2knn1RwDY7Ag5JGMs2yaEdZ1rkK2GQfCioKzvwNhMtqNHUrriqsPaV6SD5tivuigsaCfV4zwJFGLm2MSHgcWq2MP",
  "key30": "4o9gHDATHXwbyrmXRHdaEQbh47pzCnubozN5eHECMd4aabqo7AjpL7wecqLN9f675cy6tXdKB71GpJ4BfgMQK7TB",
  "key31": "5xoYcPGkzCjiuSt21tx52Aw5V5GfWU1k6fWJSXA5AxetvjVbMGBTEKhcGehti3GZUs2K9A3iZsvdRXpptKcw3MVw",
  "key32": "4w3yAkVdjgch9g74Sh4KBX8ctC4EX1Y2FK1s4LM4WsovwWmVmuWWx6icf4qJC8HJpa5FQEm6kgKykUQtdY9rzasM",
  "key33": "2X55WynzLDCDerNkYwHVwckFC14aovXUvXzxQ2ixddBWbAGUt9NtArzueL2ZJUPvwNfWs7DdV2XBYfMvLvAAmYQN",
  "key34": "26zdjhbNVyz7KXQXndAPKTyeLcz4x1FWiDTqVcsLjbDEK3Z6NMqLgeDD7sfhTsvih8ZVFU7BR3YP4wwdVjWRTnZm"
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
