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
    "2VWBLk4zUALBkeoSLPMebPNPNKhUrqeZYJfkwjzRqWjN8FtkodHS5DSB2phChbbFqcKH2stNJ6SMid9DtkUQXG9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LwzXMMLUHLcFabXdVWYyhtNYE9tQPipEMeSPoCTUDdLLvZ5PG87aAsE3c1U7KZtqg2TJEqFtQpU5eBt3bPWuxzJ",
  "key1": "4yEz57fxLxXjSqCVCQkAh61Cnz4eZRZNMDRgE5hJUunByYHjxo42EBy3GFdwqaemfbkF6yJnDdVuEeDoUSBk6JnP",
  "key2": "ALd78t3AowftdMAL6KdhNfWdx2acRELEu3WPJq62J8oQUPy4gPcotFRNgmzJsnDYJZ38VjhV6jhFXCfkMko3TCG",
  "key3": "4M113jQyXLqNSuyhVucGyZXogVia7c7iF6KiM6i4nHujKme4VX3bJPmQPtq2DfTAr2jeX1wCaFidb7QQedC4agjp",
  "key4": "4f9MhCbvM3R9h6fdFBjF2XqYRSzNnoganYUR35mke5oEDf1VPpaKdqSySuWEiVpm1FEGxF2L6WaWda6vtu59yC1r",
  "key5": "3UbmB3eGicwLNEJXwLvhxEsHr7dNEcFpkEHEr9wht5dN3FTu7Ls1hEFkydPiiVNnrGdHvdt3yZgvgrss6fjVoh9U",
  "key6": "3ukKT1bgDQRcbnjNW6sE9sdsrFms5D4VVL2x5hUBZc7cJDLZDWJuT7Gw3uKNn42ZAK68ZgB1VG3YKesqaGD34ypA",
  "key7": "4wdR83oNQuSHbuzEkmVhpkzxMQiqkvNeiQ9xWwybBHK9qgo7umTDsi2RY8S22HuxK3HQYXH9LXyaN9rL4NscPaMU",
  "key8": "3DPy7zMCYD6EYMq9FUk6rWjKM9e6aYZ69Tcuy7JrbUdDy5ZR5AnmkLBWWdCTTFTLEKvLDc54YSGJaS89iyQzZpw3",
  "key9": "4wynTnwg9DoCfK7z4fybNMQ7EsEAhDMxemu8pxk59FTYwBhMSHU6SJrkwAGhfHbdX2BHkSAU3LCDFzmacJuCB14m",
  "key10": "3WbaWTmCgz6qmvVc1jbWSjmJaDFPTosUxQndUCLNiv8rwVtEdt7jZ5YHfWxzqENuJYPFgA3L2AjcsfYgM5QkDeFV",
  "key11": "2TCLGat8qjn274wx2tG1C2ZLVfS55jd9CTZS3xMqojUPMsTT6EAGvfCsFB4hXx49DiQ4UfdidYKWwPVsFyMDz2CV",
  "key12": "vAxD1yTxWzh9VTPvhEqTvGivqVnaDh7X23Ac97D97uWyBQZWxRB7niRmdEpyWM8ermjR93wKwGcjC71s6aqHCgP",
  "key13": "47Y95nGDYLxQMDKNzwksA2WYNMkbtoeEjaoEMp22eVsovqETXBrWGGjkcZwbfZQ9xX8NGWgx9cP2V2pFPkcebQi2",
  "key14": "3X8TbV285A7QBJpWaTqp8YHkzsvHG2M2zjCshNdmbKfRoAyjQttiXsXAQhCX4cFgyVVV3Cz85pqsG6qBPYbMyV25",
  "key15": "5pVUFvUX41xkc4XTqajT4R1sRfv2KsjpbTpu1Zv5SpDFS8WN5tTodVEeJtxGeSxLcZsGCrTCG8THQJwiu84wUsX",
  "key16": "55mrUnoTGPoRGQGKg9tDAA8aC2yjDyqxECy53Sxgix5JLwExWGo9CvoB4j5xXJ1dBg8TsqPAXFou18vXDGtySXcr",
  "key17": "4D9kTFxfKYKagGthvbeGAmjSKHSnnsD9k9RUFLTa7JhTxHDfd9Lqx8THc2nwPdGg3Y6ko7aiwef2BDJ8JmeCwsC4",
  "key18": "47ajrGavxpQQ21u9iqTb3nx7uFuQwmK7sdJYCHa2dQps3z64VAqL7SUo76GTjTETuqKnrckcwSo8TBPZabr8Nz6a",
  "key19": "4QR4rnZEcJvUgsmcJ9aPs8ndZA1XD6crdKTXT94gzwHrG2ptjuVysRKT4zvAHjJhGRNGWPwwHYTUcJPcfv1NA5Jq",
  "key20": "439ia4zEpXLVTPuHxSY5DMqXpH3raVgTWKtxekFhbejA41BZxMEJVuAM6u51CuvPbJjqgZuux9r6sZ2Y2CXi2CRN",
  "key21": "2jUWTpK8A6UfPWYV1ustsjBrzR32wGcLhyW2Ksc4Jx7s7gNxwSQzEpjZT47wAf9pziQyDKax1BzmrJWLf7dnsbYd",
  "key22": "49aAAXtLfuRfkPWAijYmHiqpMiQcRYyf7pkcG5qLBrPMiX9Tx9X6nxJnFmpUmrdfgVB95PFK9qECpQGonqKo1Ltd",
  "key23": "3GDqh4uqkgg5tcge8qFqaKLd2fXUpaCUcQ54KhDmmimGhZvb6UnDAwxtJ8NRLfs4iWhLd8vuhKs5pofuW2ZDAjJz",
  "key24": "48dDv3NuYHP1hW8riPu6oZ3hDffSjyHVjSZgW37YGMUHuYggpf6je61iUf5Jj6bwCyic57Uu7uhJ4jg1Z29F7mZ5",
  "key25": "639uKnjssrMW3v4eQH7kTrSnTMrneRGtYqbnWyiJzVG48CQjY7SJ64UfgwytqvigfeuSsXo6shZdtUosyGpd6gNy",
  "key26": "c7kMdPtXCJAUZRp1ThebqwGvxvo1L4nn7Ph32UqeAA8BxBCgnZi9Rdr1tHms1Pyqj6Fm1rVHAprn5KBwhdvcYzX",
  "key27": "272jUzQBaSxLQHKjEP6hegoMy2M9DqA3AjwW1RWonztx73G7aNbhZoMrWpqrqeGKpcA7NvSEw36Wqausfx7P9AMx",
  "key28": "4v2G8MdXRW3moFuGhz1QWVi2d7FUq6XLhV3W4E5SDC4uWRzEe2ukMJVZeV5CvhdaFUf1KuR277w1KqDCLR9kSJWL",
  "key29": "4c5GbTBPpGp4fHL2iE4N6QvfEKXoCkqdDBu5caupKAuNYUzcSGKaDL4RHLHknNauCjiAT37bNG9RZ4T1bqcChkj9",
  "key30": "2UzJaJZnww3nCkJajUNJb3WvBWQk2L7amxcHfhfXkN1G5vuDP58vs6ma5C75tUv4jpm5hx2QBVotAKTeY61QhTot",
  "key31": "5cid23gf46bfRpXLNgpA44Vzq6PvPtPgtz89VkqMysoNvHsCfXBXQa4SW2geD251jMVSLDSP2DYjzHYjRUVs8yU3",
  "key32": "WE3VcHaYDPsasE879yrvFy3FYb1mLqcW2mHbDmf52wQVxzcXiU4wVdzhmBcyNjRcb6xb7BkykhfT8kBtSkrLHbP",
  "key33": "4BqnDczpuR8LfKnT2B1uXBAowE2r6nfE2MoPaWbZqcY5FCmc11Deq17ZbmhbFUEKLu3TteYHZmNcGDUXKF3QdnAQ",
  "key34": "3oTbUtvfMQTPCQH2ozZ3XUJKc8pHLRcqQYEJdaQVMxMawuMHTwvBKgn5yiSMNas5tBVnrH6crnHR9tPtpGmE51tr",
  "key35": "3NKyrwau25uSW4m7Sp5NtatWaVk1E2nMbyo6Pv63LmbDWRSDjtSipSHFJn4JgUNF78FyST3x87ad95U5KSjTa9oY",
  "key36": "5phjQPUrCVEQHD4kVPviSRyHuRdUzzdFyB2cZDNPNiGpG5JNT2srsJYp6XXPtSBPB2ubQN6FFGNwiQ1MTLmJ8WCX",
  "key37": "XnhxPwBmo3Y9Vq3rCxvYkjguK272y4g79RzdTxeGCKWifp5GVXjEKzVCkuZ9B92cTsC3SKT24JUDdyrCVoSQVY2",
  "key38": "65th5o3KrXgCfsC6jicmBLgPavm6Ur6DfdQRYDRPnVteP9zrgRgj42Ybodpn7oEz3QNXEaKpvG5CSx9ZMeYbde5S",
  "key39": "4HDRQDWpUnvzpBC9SjacoetjYxYe1TKENyWDTLgQTxKo3QhzMn5uBcubJJ5wqVgCz8e8cUExWcayzvSLDXeycpyt",
  "key40": "3DqncCuKk1YwscRNPzHxVcwV1QkDASZPHpW6q6R91bTbVMwEmPK8s7wgFKXNhAM2ehynRh2iynTvNrJdfqR1NnAy",
  "key41": "5NFKKjwNLkUae9XvquPwhjBrrgkuxmdzULuXSfYaTNAugMMMkAypGfQJzJK9CKR5CSdF7hHqAhUKd2LP4HxxKtQp",
  "key42": "5D2TxXjLjgbCEcmLUGeZKniSPWzj3kTa1HQu9NRYgjyYpx25JzSfkDYCMFrU8DBm9Axu13GRCdeQSsx6Ax9WkUcd",
  "key43": "4aCetWUF35yvRHEAgvL3taJTULo1qEHmPxj7W3NFaxiDCyJMd3u3uGUU5N5DHyxwRd5jH8qQGGVvzQ76PxYoiN7K",
  "key44": "3YQwNtSMjBfHF836YZUvMfgsZ82YQD6kBaUSnTEqUUdZ1aSCkZ2z4uAnFSzFkYfDZpFnBLYppkbaERadb62ZS3tL",
  "key45": "doYJjsUFJSTEgqALtRDQ4Yk6Gbz3PRDoxJGunv9qJ7s5PyBLTH1Hzn1s8ZrD4bGbNFegp2PDt2D8jduxmEHqeZA",
  "key46": "2279Y3XxTJzkWbE8gHRuJsBQ2jDaszfz2MRMQQrY67DJ9LQF27HG4Gx7s3T8oGbqt5f81wtc3vCTufvcFEigCv3g",
  "key47": "5hYpTMPYqU7qZxtvEY9pEE18pYB96osJK3jE6DbMt7zVHFt2TTEnXuEZJAp4RnY3xFrNwg7Gkr1VFjF2MiujccEu",
  "key48": "5xtSTbGqu82K12tkiNswQfze3ZV9Y4R2imCXunm7NnJnAdUjqX5FT7KFi86nqiqpczak9XkUv2g84dCMXVooxHg2"
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
