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
    "4wVnr5nMeUn9ZWThWp7aW88WDnTxPXPMBKMpvaxwzo4YsEHmT5uf15dXbvoj4UQd5dtwBwd3iGtReAz4i933fTsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rCjqTR3Sk9cPH3SdNDwHGGMasbyp1pzJ4YZTJPfSVJugNPFsp4nRrE3qEjUzUTFQakEKgQpqrmTKixny8SkdDjW",
  "key1": "5E2cskTtveXa2TcMVMQi6DHG1TbCoT9tfCb48C3YSWnSZT7Epm5hrLUzsAZ4kMa4CxSCqHpo7wD8cCvcr8ievads",
  "key2": "5jtk5Qq29nyzftWUAPSSUqsnEZHKCEkreSNXzPPCDuJsBot1XKE195uSBB35bDqwKrQUKoQny4WyuzL9U56Js5r8",
  "key3": "28LtTK4FHicrCb2HtdAAdNoWcJgTLqyYYNrL1t4LniAjV4Zr3Su2Ba1pzKiiGcLkmdoM9431DktSAv1izmrAdz1z",
  "key4": "4zaTHkV4GP9mn9FeRKaB3dpkKEKZfxSxz7bqwWw6nPr8r6jHUiUpLFMmkNkahn7LrW8W423HkGwpDVSvV2ZSVNUT",
  "key5": "2qNhZvovp32eYYsZrMuYwi1z8tt6PNvWH4AJnN2po4LCBJJyAoe7puptXo5czdcN7zEaaDUPNWVmKJ6E1VQZtncU",
  "key6": "mgETnMR936V9qNAhNJMEwGx3Zu2M7B1RZVTUpyBGrnsSmDxmgpjExjKdXFLVrKxCZ2YnrF3GYANNeFqJHtM9P75",
  "key7": "27D77gEKxGPtSWHXYP8eG4oLbb8FpCueCodcJJ8sZAuyrJ2JC3aFutiJmgGonmkvW1fSkgEEFWQVkcvib7JHcZet",
  "key8": "52kBGqyVTK97SY4tdw8ZBJSSmaPfYo6SHJQqStBSpZxgWtWj3yzy19ugEi6SiFa8hEthqnXszwpnMw9wtEZb1Dqn",
  "key9": "3etb7kYq5VpJzGjwkr5Qx8NR9AVVNLrjhxCxaLAWWQ8BkvPPLfp8AraMEhyq2tCzG9eUokZXQKsYC2TcsJhhUmc5",
  "key10": "J7o7P7XtLruhtBnVX4gT9CnxqU95n6y8fb6y4Wfri93qLejKED26MkdyhvgVjJJugps94tpG3Z9naCWpczxJdyn",
  "key11": "5r9NdCFFq2Z6PT4JbjdotepeGZFbRsAADSpLE1q5RajxBe46j1LVrbi3dDQVso5u9TFUvsaLDEtVPqNnx5U4uCid",
  "key12": "3W5BQwTPavq7VLNAVC2jZZvBWWHiBbwDH5JaZ62FTG5GrXa1KgMbu3kSbNELy3KxCdvG54yQH5fJUkPnvtyfpTN9",
  "key13": "4vJgGcaRt1JhKeRPzEA99A3PJD37v8bhMwwzGQB4tJ375cXpLUEysv3yboUpUQypBhydUp5cnYiTX1QysG6kvcFQ",
  "key14": "2QFr45Uw8z2qBHGhi3xw6DPd3xHXVhNCpvq7EP8cpoYHxCwx7u4yyFFEpg6nptzD4z7kQfy5T5zsWL67moZ2Tn3F",
  "key15": "597eyFU3vGNaUAUqYw6H9ToYDidgND1zk19AuvrGDYvCtoG9tvqHJFoi2TLvAV9KYd1tmdTUTK1s7o2fTezYrK1w",
  "key16": "3Ce95C9psNAq6L2oqLdDf85Bzo59Ee3Wv466gGoDWYP5d8avLY5pVDZsUCpr93Nuviy1nwiNyKj6kTiiz8tXGBmg",
  "key17": "3CTmrQPPcKookU9cmaRDYVtVe1fweEnM9d3s1FdgiWC8ktAqoYzqPAXQL5jxwZnZY4pBNUGFUwVz4sYUhWTMQAZR",
  "key18": "qXbQ7MNzk5vPfDNeZsGATPwkMqnRfFdpV8w8jNsaNmySmL34b7Su7pZkDrqbpb15j5bYeuKM7n2U2mQ3Do8vrS5",
  "key19": "5Vx92tKLR6vCvkymuEnsJ85r9zaG1H2Lhfxp7wtgEcEvdH82WJod3DZHyzX4k7W6Hz2QUbGG1dtKt2AugGLs4bkF",
  "key20": "27VszFwTJca7MNAwFiqrvWPEFAVbubYANcD2p9ReV6Q1A7A7MyC4H2MEWknG7mmsUQQpWUmjijBg5KCYaoMAg9JN",
  "key21": "4wYsiL8DpsKWWovemEw7BVrnjuAJHatLUoXL9s9fBEoRfqmysKFrQAKU2zf3h3ySYQT4RfwnPp1Eqmpgq1oumqR4",
  "key22": "2onyQvFuEN1cdXoecehBT8d5nuLYn3xPxHVuKD4f9gnX9thLMaZrLbv4cgXZgZhHzKGHuZegkboLksQQ5M1mxQaf",
  "key23": "3NA5GB1H7CmjaTsMkzPrU2Pd6ywvfKwcfrd6hpL937gMLnvJfxYUAGt17kxw3J6vsgpGD82YNXvEb29HTarTihmy",
  "key24": "3wUQf3P8MF5w1yFgHfxMTEvoYUtuLZCY7penLioNfmfcmcgmweCaoHgwgbTu645mdA2uVeUivEmxNwcFSaQrUHpr",
  "key25": "4zKTN7JkihyccadKHYR5LMPySE4dbkYAvDA8QTZ6L45fyj25EbMRpaf1AJUcW6pL4qJJSwzrSvuVzdCzT3uUqT9L",
  "key26": "pe5a6Fnmt5iDK2XaDnsXAQR2ny1SnN2jgwgdoyF6vuEVUEPHp8ed5emt8qWLfikZuRhb3P6W5QTLnRYQFDpjNy9",
  "key27": "4PiNVbLaxUaNiFxi9CyThWB4bcuB4EPZKHXBcmVeeTSQx3XECg27VTcHuqtKGjSVVGs6Lir2KcKiGrdgsBNCWzbx",
  "key28": "3u3y72DR1SJxsPtvvDa6yEZQ5iobAv5qE1kGjhcjhDrzUsSR27az9dyAYXhKpUYatLxgLmxhkB1xTQcJhmRRQ2cP",
  "key29": "2jzCZHDyjm5F2E4GotLPkKGDCXtU9E8zizXzxEdGmRDGFnkj1AvF3kizonBwY6uknP4HRupD3TEZJKCU1vGao8co",
  "key30": "4kH31Vry8qupJEzY16ev26JCzDpdDx8e3kwGAyi8p9JqPzV2qHdsg2KSt8Bgxw7b1c4tKRLE1Y9VSZnvu2ByVYzX",
  "key31": "54MzCCRvWrk3j95uK9qsyfrBmuHEkAxvkRkFwn7uWQWoM5icrafXXjNCViBAPoT75iDwqyw8KhqmNdrjdQDTwtHK",
  "key32": "4HxPbp7pG7SgWBwnKLwtb11vZSq7gdZmEn566kZLhCmxwRYXVG2zocgWJZPu8PjJaEjWLAUkhadFiz7LDxsL34VC",
  "key33": "5NHXcazdyQFHYPUUqYzm2M8pZ43UJ4KbwPC5SiGCuUZ8mprzkUgFrjec62AVwjrTfSrLMam5Z3xqqmaEsGPYZiK"
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
