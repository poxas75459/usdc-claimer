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
    "61rqfLQgrgz2ZTLKdUjw6QFPV6ZYU9ncQpy1C2u4RgVxLPnWECkGPdMYowiUfQCQJwS8ARABkBtUNfsWBRMvPF1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TSzEE1mheQfb4LTbgwyukD1M1KBXMbj5Zu3cpyYXYfYxc94jncEFGLLZBugnb2tHrbmHX3bC118docvV6HZ9zS1",
  "key1": "45L1s2bdKJSvx4GfhDt1MUGWhzwcRuuyCa6AZfg7CK1o842DBgkwFscwAJecwZjP1tPwqhXR35NXyS8L3ifrQGpe",
  "key2": "4EjrHdSGRPcMWKeiKdwanFyhtCmdhwYvFWnmreTackU36AD8xNUshCUzcapz3s6q1jo117cfLrRjyA1a4EoBDQ9K",
  "key3": "3hsrps585tFAsKCRVt3RpcmHzuwFKVgGytvpp3DB4Lw284LuNdEuDraB56fKGEe9BR6VDmc2V43nneae2LZhbAS9",
  "key4": "VPSVKgNx5Tfra8BUSmiGsxCqkoYdUjWV1mDhnuuaEC1oRgyWEAdsazKok7ZUA7hmDAzZDXZso2gCRbM6ZgtwHW3",
  "key5": "67o9NSiFuK5WFqcEBbn7aW1HUMiu8TZitkvwgjvDvAPPRs2LbbXUrWskVnbB5XBhUSnFYm8N6oJKLWfTFrjWfEAN",
  "key6": "2GiWERVAQR3cESn6RvrazMjGBJKimrpHHbj6nzmKTbMKC1P6ePZT6wen5bWgoy1c79vxzK6QpJtGWmeCvKxG5cBU",
  "key7": "5FyKq9QVscCentqVoSV9QVx3pH144rzhhNdtydjzasfYeNTHusmPz1LC7ETBgtYsF1J15t7AJDwWnLVn18QV1mhT",
  "key8": "npS5gHdUDQCqt6ZjRCNCSUMN7wPbJvgTrPNSgBXYiSmo14AhA7JjA278jTJv5jhJbQAB37vmrM8hAmxSB9fZ6ii",
  "key9": "3hgt6tXnYZDw1FujzMk96x5r21dLxfXB5sjS4AvoGfn27vn817hfCqvX6ahs1drJUR3f4Knw2kqmSSTuNbFE5RGt",
  "key10": "7jFVvisiRdfJRRvHTFbHMk7hVb8eeoJYNqG4nzUFvaswXuacTZjbZk4aj2Vfssjo7JpZmUenJ4TsGpssRnxdZu5",
  "key11": "nDcF9D7WJg2PCiUA7JZbhGwtko6RTz8wM3d45f7EE2xjeX8rVZZWAdQXzxEwfME1pihDp1yn9ZC78RA4qKTVwUW",
  "key12": "3q3JUYakTcu5aCx5ney3bHK96dEAT1y3iXuGtZsHVVQSZUEUVs3Nfihr6JGjrKUeLnsrd44i9gGu4ZcRw9ZFoZVn",
  "key13": "4eFGDXrhsEMKnAHbhheqMR8gVfsinttpvFWZ6Nf1kyQGkRftqzTcRuguPsokEaGZmaQmRB7sRcnJnVvtmiDi1VrM",
  "key14": "gvXuXM43r7qBQ4oshYPDkm71eMNnPdTWnZCDorrUALQ6XV9bS5bg166xnLUKBsKHC26yxcAmMz4E8rEKXPywCX9",
  "key15": "31YK9TuFxTScVp9c8p7XYGjZZkkPyG4QjQ1UBJmzf5Mbah5uiNTkYtS1pjUs4Dgdu9zBHeFATrqsH6u5SX16i2r1",
  "key16": "46QoDdDw7Bfeo6LVg2yqWnaeZrHbTZvxqj6MVDmXTNjCpe5gyoEw1PePsNWEwGxBFPtSuYCVKTMEwwWbxnQTUVuR",
  "key17": "3JHT4pnJ92esUdNjduJKnW2GmMoETunBQn38jUyAZkSBB9jGk6Zk1weiSB1NULKNANxz5shp2LByd3Xyhd8XVMfH",
  "key18": "3JgTiJruNWwD1RadKydZ7xXM3QPGN8ZQtdcnWW6aRdgWSebE5742avTWS4DDas46wyk8TndxgUmFkAq71Syu6pWF",
  "key19": "5SYiWNoZBSnsW8AeLmQMMuBu2ExmGZ7svjDUF6dtKwTAij9fMzLAJw5KeYET7MDzkoXoy9yadXJc7URik1qrB4f6",
  "key20": "3WYMChMqU3C4sX9ovmS1Ue5xupfBPB18Q4Kc72JNeRLSf6nJrA9zitAuDRUwYRL4fvDgBcC8G7QDMNbq57AjsbnT",
  "key21": "28Ny4ZpCcPRH4bJgvSgJVQASSjorGGjUS7fqhN8cGW68cZLyPhYGbQGJeHL8vfn7jUhCLGdUEpwzP1hkhZHuo2eF",
  "key22": "4A2GsNipDbecGTCdkJ4qVpur5GzuXVMVYqMe8fbfXajcdbtbVmiFDwNEcwJy62zpvAz8ovchevATpyyRDv44F8Nw",
  "key23": "5wkeobmSgkZV1A1KA2wbLQfVp2ZBAtdhhpYq8U9U2kWoVrxVYd4btF4CTa9jdmKzZ1pWWWL2TZ918Ukkt83a9Wy2",
  "key24": "29P2cbQPnxcx77PeDTddJMw9nYz5kN8ttrZ9WmC6HMNxkbyLZNHQzZLZfrYQLBHSbYijZujoxhrUWSLgNsyw3ois",
  "key25": "JrrMeDE63KXGupAHsEQdY847N9MzjTDo4ptuUofWMTgTsVUTFinkpWyw5JHXrWec7Q6hzJMdtKDsmzVEi4Bs4F8",
  "key26": "2kbKiNf71tm9S3GqRKys1QWZ7FJA6gzbs4FMzyL85KqgSxQgscgAtTyoRa2EkdoHBTijrFoU5aAystmUPTLtyfCp",
  "key27": "3aXykRQ7QzgJLcQ114xKCnkeKRT5AVByHGb2zYvLyYLSwMVHw55WsYL9LwobbuTr9YcwCXTzTGasTmZugD1xuse9",
  "key28": "4qDn57y71iBLtbuyT4PjDTumMxjbWVTM3K7beDV51vDmKLzpQJGUu1HNyCdV9aJRrXfm5NxVWQUrF4fWCtaVdGpG",
  "key29": "4tmtThzx7gekQSSpYEo5ef9LarMyPegG91AgxorhySPndjyFDtBvnnGB5met5TE2JN5qsRVbVa6M9so1TuyrZNiE",
  "key30": "3AHxNq4R1THLvvvBubqTpWM5k8e6kstB18aLjrAGBTMMX8dmsA22QUFZJYb6GfRSA9zHH7EvkUwKPf8bsYRG34G6",
  "key31": "WGN1avp85tK4FiXKuD231KosF9jvfgYeiWozf9vdW2p2nRMqKQtw8mB5fcUSxDbjprSr9CEEZ3rQ4hFnkiAKUsf",
  "key32": "5VPxmKf4gSa4wLeQr3M5JXbDep2RFwF1197rA477h22oV98BT4vqDT8rcba7zqYbP5grygFr5mRV9JvqSVA8sfMq",
  "key33": "5QGvqsP31CAuvqtMwkMFpjureBGEZRzFb12PQ8LBtWRrAjJuZ9UfKfzkabk8vcj9JXvXrQcFgrSvWF7EodqDT1jr",
  "key34": "3dyBUc1XepHiQgzw21eb66Q37YEpVfTXznLFnf1mSZYEMacmoxLawQonNmK54CSkzjFo8xJYYGw5AtLymTty3e7e",
  "key35": "4QJF64pftnbK8mZSnznKsGJ53ney36zRjVCApAis4uBvDwPw4hgjALe1jMqdHuGQ5VggauYictbNDCx5Ed2HxRrM",
  "key36": "KvM7MxPZy44Xhhm3cHeF8yuFKm3UU3kKF5jDGPi2nBdQbBoUQoUNsqTz9L3jzEUTobGcLsUgFgHgRKEJWoRpmqs",
  "key37": "4ZKTqPm8rCP772VjVWBt7HMtvmdZbvjsQ4fSjC2MH1LvB3TdF7u16AXeGEyPmniPygmZJScP7ejG2vjk8bzVKBoj",
  "key38": "3yoP9BvFxhP1c9FyXtqYN7XonPe34xtsaNSt9bNarnMLHy8kKiLwaevLewaNvcBnC1STQu5ythF5fwp7JTUevKJk",
  "key39": "26QfNpRBbvke8DCmiBGH5CkM6PpqP5jPQEUM3gcBTz5NeZqzXZtcrM8wag1qVLgSVZ54RtzYXsTX9EEoBMzQTa1q",
  "key40": "twQU6pC3H1YbsT5ho5JuzhXHom8FmzVGWkwvqWhiSq3EXn3r9JGt4wdv3wRE8Frdv6iW7NLnTyTBccAWnSYESq1",
  "key41": "2oxm6cArA2SE2iUMxDVrGT2KGSYA3Sy1yF5bBqyewfZzQqn6WwhX43nkSvEorPtc94EFUegw928TGJF42gRg1cnF",
  "key42": "5R2q9wHWoVpLCS77tfYq3uS2ZHpxZ4rVeDLQaxSESEUjEynu256UeExcHzpenKNZ7krSxBFc6cYRnzbnBZ99MkE6",
  "key43": "Ddx8C3HaBndNQ4v8qEtPBMHmmus1aSABRsDCsbwdiPsmSYWP26az2aTQeqLqgdztDfK4Bcx69jczqgPNbD1hkY6",
  "key44": "3Fq5VuFWQP4QDBS1yqJ5qinbMr4xnTroLmG7AMivUg2nvUndr9NgmgcNmHZ6TftUJMkDVPjfLSQU4EEysX3nZ19S",
  "key45": "3KLfqPborQ1o9MAFVKSz1LLCNcbZn8VhLcELBWEH4zFm3htr6CN8SpGgmN6eNRFofHYo61dYwJL2vCTjXfL2VsKc",
  "key46": "4jQN7KSgApTvAXKSCBzUTEaGNtzMc491vX4GnaCwew5xBzYsYHdWic2xx99C65yeXXArf4rP9bxGB53jSfNuqfdm",
  "key47": "46EEtR1nDf7KVqbJmmnNHQ7jp6HQSKWKgZdPgg9M9xToG7tQed6Gm9ijwraEhGoEK7b2FP1BDsoZVtkm2b9peG8d",
  "key48": "2HMsbKmWGFJ6xTJiJLUSDKu9UaX3pMYGpwt4ujkAt1a4j42r4F7NsLyLFAVtcpfZNr4LAQkgdqJ6BMyGZ6r3rzgB",
  "key49": "3Bqb96riWJtXYJBQL73fow58GgaP7wFgvuVMwkjPPymdut85deSvm8DskZ4xPCR6YjP7Khg9XahnphWYzoezMnAk"
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
