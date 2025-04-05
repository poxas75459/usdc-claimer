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
    "4gNSAL6itGsKBwTsLfCG5m9JRpkGqd6ZJsXxGgMzcYuKM6yNBqyC3MxUdh8h8ZjNpSs9XGKeXDpK6FBQ5CZ4M5WK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LmX58ZDu898UfADYwnokm1J29jRr2jKEZpsFqSGvGYKENcVSsEi4y8hHw9CT4t2C7Ly6rDazyBUKyG5zE79HRuj",
  "key1": "4tNnQt3JdJ8JLAUVjYCDmB4BdH7mopJziy34L1qfykJg3j1bsUBq6K9UBDspFSFjJhtRv1qTVLNCfz3h31CSqM5z",
  "key2": "oFkCqJR9GSU8dVWMkdWX26aaeGjNTk42Tjb1q91NAjLFTAdVD7aWpyVqiyzfUMMJf1tfkDsw6kYA2XNvCjhy8vt",
  "key3": "5KZAaoVDewLJxqeFK9S4VKde3sxjiddo7Kxm257fCgsv7McJft8kLNuMffXtghPo8MvsbnEQCNmvpR3e2RUrMUMK",
  "key4": "3aTKjiFHiZfvdqVveGL8FKMrJkvovCezYnYzY6gb6mR5roEu47C15HjssUVwt91fANXUxf8o7brG6EhwLJdgBp15",
  "key5": "3YCH7LkXvAMM3NDWamQPJGSTwMCXnyRpN1g4kC89uRiFZpv9mhhdRNGRZJsUMgYYR9zSAWQaMAegrWHSkMbJ6TGY",
  "key6": "4iExEfwUwKYYg4xL9jHHeQrJHWaNwQFgqeCCaev5s6DT3LFLmqLeZGRaAVsCHr93VDkf6kFhbsdVmjaee6x5W5f9",
  "key7": "XFc2J1EurdUYeDgFZMQqGYbhoBzowZY3hMTzfthkSAv7NfMGv26CXayXWrpdWe6KLa4n3ZHTssdB1vDYWLq15tc",
  "key8": "31ArQ7A89Q4Ed6425yRFB6VZ1agXPBQEcorG2u18tAe6i7hsQy3zcFMXzU2jpGrhGFiCRV9uSHSYmCwhHFyDYcV6",
  "key9": "4mW9yYKNbSPZndiGBKEZZyC6TU5hdBH38WpfdSzB8yuvcvew6arrcaEURAdyFhe9xhMYMPfg1KfB5v45SBfet3vT",
  "key10": "3YvYsTGZ1bw2ALMbguLdFfHw9EohGxvU1prQKQrvTqZhqjEXQ6WB3Q8EWE48v8WYa9KwKCzdibDhLLSx8SWEX1xe",
  "key11": "2S8CjSuCgGmaZY6JRBFUXrK7zghmgHdNauT6BDU6zuJbCjVStmzvYXcd7z8pvYBR15rtgyXCTaE9R4vujFJJaen4",
  "key12": "3zKifxVkzVKXeaiPgTx181y5Bd3F96P9ujksrT4CNWjJZXCKoMGB4bPnTFFFbCmMTrtp9ddy4HbgHcA1fffxNDKw",
  "key13": "2niGMeHY7HWz77scFozExWZnoESAoHchDo5K8JjgvXaKjBa82d2BXkjWxNjAtyyzzt9pbQSjTkmMomod8zy1U1dQ",
  "key14": "qzfFS7DpCCcZiXRxe2RRzAsQDcHPvhXJ9mHcZS4UP8ocGVQrLnPcv9AbwyZ5jaR8S26bR7ezfRk59A9xa9k7Jd9",
  "key15": "5X4Ps5MBhwNBu4d9wm5vp88f8RWAg6qLnpfBA2Dv4DNmRXGus2JEDaJmkdBScGYjXihisdLKD2Hhedcr8DUWJPuo",
  "key16": "2ptBURm6CrRgixbKDxyte3sfxk5fKbsTDEjsWCpRwKM59qh8sZU8ur96YhfirM1ek3SUcV24ez1A6nQVaoWxZieg",
  "key17": "5vYk3ksiDf6C2ersJHDYRnVrktiYV55bbtXEvBVLd8w1H4eDY5wdY5WGJreCgSkoqPzN4ZoJk873uGypE9jvi5S1",
  "key18": "jycfTy97PHW9Nr7ZAdVB4rmgShTNSAi3eU96m5NPUs2SbHx3DA76yxRTbEBPjUoJ7kL86aLw9vkCsr8B7ppJHj5",
  "key19": "45D5WEDg52o1SsSsWDg5QCXci38J3CKPxnS4dsR18g6nh81JjrW7GHKc682gTctPkAATCJKKsn7DhXJ3gCQaAFjL",
  "key20": "5Qb8Lgwu9k3tREkGSayLDppRtpgQYBSs668q8MWUGFkToMNUtA5YrdMWkbt5ttCD16yqZa74rhRcPhbSxzR19FCZ",
  "key21": "4gDqg4xHd7rqVMaVs8uuFianK4XmP4UAEL6ufANrrVBpPwwzkSkR6Xtv6XcenK9tZrA985PBBr8G4nskpiaDR1AY",
  "key22": "5N9E2gakJhp5gPGSxmDovvTS71MUw68p8uw7ZXcPxm2wWFCHvpuHrc5TPtZ45kPbnwNDKLPNBG5kRSair6ATGdjK",
  "key23": "QbpMNAeCVYP63p8FNRAmNiR1d2oLqkfhc9qPM1Tx3QJxGgqPYXeUta8qX7Qee7kPpWcVddb2YMj3tk7Jjxbk6oA",
  "key24": "4Uf942a6yxmSEB1kkHvPoDU11jyc3WaCi6mtj58jJd8ym1tnSPxUG3Mb49sYb4NgEDZbRHNXdyVjnS9mvmKWjz5T",
  "key25": "3L7FjM7kryCviZeTuiegNefvoj7yWu3hxukjyyFoh4PY9Z5yAnHdEAWZcJhgN3s1n8dcJniYkaN8gXBbU22x1sut",
  "key26": "4akJrYisKzdGGajyENTg8HNxPYTjg9adTAcoCoWMai3peuq8NrofktkVJiApsgWhZfyDt2FMrxFg1JHFJyoQAWRn",
  "key27": "YuVRt27RaoUcct1qMZWZUQ2KcAEsiVrsqRTrzTJbyZt81jEbHbYfb8ouhdfNUgkkvb778DfpBu63TxthmZw1mZb",
  "key28": "66DRD8Eeo3sKZ46Wbreh545E4equMKYReErK8nbJ1waeQVbQK6Q37YKeLh1m2qwd5TXzJNsAyZkTvn81ugjYdN7L",
  "key29": "3w1s9dT1AFLVH72rkDNVDs2vdQWNH2AR5faXYHdL9TWhwBnB6aAwCbsa4S5UbhACYqYWv5LzYx8tniCf98zwZxXT",
  "key30": "2RVpYa65JQDfHHpmrcAbxD1rQUi4q5ujz8fFoDe6hjTqQTr7EsjTdN2cBDYL39nmSy6NaqGMMfP9ZAdHtzKJVt6Y",
  "key31": "5QAhnAXs9cjDfQsjeGaCcWS4aJoscSk73sEVeBm4xcU9ZkvHBuBmnRECq3z5DF6SiJnSKVYxpAyzZNGQYovwaqfw",
  "key32": "4TKw8CPmCefCkb5KG3prXZ7FfbigFuQSkYrrnpZ76L5do7EHR2cqZctQhNntUax8jMUQrP3iHCawm4pfmBH65gRr",
  "key33": "5CdTrm89CMFSbYYtuCKRSeyrZ6xVxcqHAVErcnh2UZjAwVUG85z7E4i34EK8nauGDwLKBUqvbxvVLtrcte4k1vT8",
  "key34": "3QXveS8ypbBzdZWxN4GmMKxrTa4iJsXvJ3YwKmL2jT6g9yjg9iLx7Z1CXdzojvfwPEPF6u2jTEQ7a9j9KkhzL9gh",
  "key35": "5tcTW7nSJ5WdT9HYQv5j8Fdxkzkj8U6VB9CKooY74FTfLjnmBQvEiWp2dR3BRRCHNEvM5xMoKX4CsGyC1xMeQSLo",
  "key36": "2ea3uPRqdcefdQnDSsA7zCCbi8LoM4PCnTpPRaeX18wgH8Cg2tennLxaT7fT6g37GKYKcdjwdwyK3ottiXVAXasY",
  "key37": "2coCfSb7hRAkxck1B98gykzM4wzu1ov53ySFUbKE3EQqfArh7m1r7wJKnARJwxbJzfWFvAP2mbocxD3WGfs6oLVo",
  "key38": "4aNnkvbnrcmS1LraMWcLyNtsGWK63sNrpZmx5kfcTRs5brmPdc7sRgu5QcMGdNJzR4qfdgyi5fxX99T2mgnyQvpn",
  "key39": "611qmekf5XqoEMiHT6an8fYeePWhDHZgAB9Dw8QMPW56x84zaUCyZkBx1XmBjdVw5SUdm1uPCwtcBsP5GBnethkg",
  "key40": "2p2PNR4WVsmEU1vHGsvwALpsMP6g8ZeQaF4Cx7M1Fra34CnZ4pCrEqf4SJzwaWjErmtJ2W3iFGgmwku3U7n8u3sp",
  "key41": "2G9tuJRyVQkMXxpSTDDKUrCfUUM6L4bxMhy4fksT9HtQDQ8yL4HjLd5EyKVcUXHQqkx475As2KtJ4pbZvPik3mp5",
  "key42": "agAV4DqzJb8ckRiKHgSpTJDnXvCJEzYThigpmerkNToD8DTBAkbDMFwiwvnoavAayw9RKvaCTatzsoeroBfHiHM",
  "key43": "2bah1Pw2Li1jptjdi9rBgSTjvJ6WFAEwFdScd2qzPHBjeoN2N4FNCn7kSDqNBWBot8kP9qmHAbXRyxbYmDTNNrrN"
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
