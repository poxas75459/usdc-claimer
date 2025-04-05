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
    "2K6orta99fWRDRr7T62exLBicE3Gg8dNRK9Yhhs3BKaB7RFZgKzqQc4P9MxEugXoTLnXDnti8mMxZvWiQWrCfkVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38RvNSPdGqXqg54U9JzLdK9bijz6yTZGuVojMPE9ptPeKeiquGoGYpEqTapqAMwHoNUFhjWJkHt7G3zCogFJE6Jt",
  "key1": "ZgZ9bmLyjHCTeXXdHdWri6rw2aWztve33d44PWpMaQhpkAcMoaFLWy7RTfZH9TGZTLPTTNu9x6droPqgfQKzQJH",
  "key2": "4LYjWbnNWKdffEg8QN74rLKzs71FYTES7Q4zKcxyNGeMJytxu5HY1DNzR59379ajfYsZ3vSZ73yZAX9mYyMbmm5J",
  "key3": "uBAUutSNHyyMkWNjThxUn9W8TwYv1PRfk2f2EFLtjbW5e8BLbbvxcD9ZKZ8ttCt6SsWdCPYEk75DLdZVHmU2YdV",
  "key4": "qa261HWV4kH98HDezJm9LJ1gxwk8tfkDB7zL45ujriyVeedYcvRDA2D3rUoZ3uwwmUjJURZgQXHgCyLbq8CEqbm",
  "key5": "4gfgxTDuDe3cNRxZTuBPJo98BQNfzLhu55F6ze3zA2GWquZEUbN2VyCska8CVSu1xU56CMwERA8L1r6BRzf6hABD",
  "key6": "5BAzNCKGtW5g7LFG8LTQiqPDceBDk7PBNGFMzteswZiAaeQSMGXPdsAhdJZrwtyiC9JuQJ9SokuBrfYZ1LveWVRR",
  "key7": "3z9z3CzJ4q9aBEwn9qSuD1Vuz3VihgT8MaeTcw97JDx8GT2UhWidoutsGx7rhA7z5dPrEHv1MsyWrr9eJJoDkebD",
  "key8": "3uEUc3z5H3Zut3UWJz69TLB4Xf9fRYb8Bgi7ruAptMBpa8p4qL72T5XiyBNXvd2fGpLVS3dCxzsjF5g4iCVjkjzr",
  "key9": "2TB7GPKmA2EoKSRWDrmoYxfoxcnT9J1qQ7AZcqsCyJt3kpsgsLWqbZQ6bRFZms4WiNpKxWMk3MGgkHhBwMta9KHk",
  "key10": "4zSqLSPpVZvxiTbtFDXzk987vBipMhZ1qjJm9ogKcgTFVKvkhUJ6FFxpsKNbXm8RCLpybqUKGQ2DKsdwCuhV6Sk8",
  "key11": "4z9Z4n35ah23dFnuPPLoNkwJc1UZxuzg2dzU6bzV9JFbkcGm8UpJDVx7rp3LPG4xWhGfsRBwh89mqwmUe8r3nNje",
  "key12": "2yapTh9dXNJ4yFGqMCqymKjQPsnAnLCb8cRBteE32SuFFCda91QEachbVZYj1wEENgMzcQF6H7BzfrzBGpLrpKTa",
  "key13": "4wLgnHWcXhAwEdQPFJscRcnHNAESNno5f7QdeXEDxgzXHm4C98zBLCWjouAEdhZ4HESNJgQuPeqLK4msX9hnodZX",
  "key14": "5DoXhQcGhbhdiP47wiNRbU7ovfBHW87fJamQ48jensEghgco7EL3vtFU3xm62LRDY1QhmkRCxDRTRbpEaV4ZcBAn",
  "key15": "3wYeS3mNZPHYWeaDnM1XC6MNx44PmKJrpzQJCGKXPkaVhw7VQrAhisGmdGarFZg6q4oAH8yzdD6L8eGwqSXQnrSt",
  "key16": "3KMoxoB5kBmFSeLd5PU6F6Br26kLtsbvZXCqmgaGdbzrNkz9nEufEkWQ3WUFU4NqodQhPQqUNqHzhPVtA8tj7a5q",
  "key17": "5StwvrNSC6cTedXFM9RTSHgX4CLfTnYqjo2B72fnbaLGvWJHVCdTNQZagxJA7VJQZMqDNwaFW4hFNVRF5sC8CdGc",
  "key18": "4EKb6NzXF1JSEPfnyuMvh4f1Gxw9wDSeK3KYSFhBo5eSsqNjvSQjzZvma62bGUCX8JvAS1uvgY2jNGkL4VWBxmxM",
  "key19": "3ctEBzEDi2HgiJEAhK3ujF6jLPA7X4B9LVYo7mLEqhHTbW3jo4d8qsdzZombsvbbuq2oFuji8LNxMjxPYPh8JP8u",
  "key20": "4VL8GUJA8AAoqRMxr1XSkQxfPatRWfcxkYaFGRHLappH9Q58NVGpbSyyu3po2LQuhw8jbzRg4X1d8Ry4oPmPDPDa",
  "key21": "4Cdy4BxNTmaKH1JbTtKJSjiLpLVuTa4eGUXdNTVcpRqCw287enW4b7TrpCK67fyDASnEnzwvRKbteDywPPMs9rio",
  "key22": "4MrhHZsdFcDLYWkucaxcMheWBxbpnUrFmCYj31gyoFKHTG2mM4wEwZW3tyKQSBQxKW9pXAa3M6td2y5mvs4xbvbo",
  "key23": "2ajogi5kuMsmgwbbr1Vswf6BGut5AxtBYwNmYsFBaAxj1FFajCX8WiszGm9dwvXUDLe7VsJsrzLa1KtALcNyiFhw",
  "key24": "AMB5k7cYjhpsHfKEE9eYcPJ5x6NzK5GpWvcMeTh4959McGS24P8a1KH5zhDk85uwuP5Z6REaLJQzoeSGwLFTgmK",
  "key25": "2CJwBsHM6kpzttToLRQZiRZ3QCVvVw3CQHnXwPw9oAiQWyFxS5XYs6131gBnVMDsYJ8qZgXAk9XGZLD8owhAoq7J",
  "key26": "4vJTB6JNfQ7EaQrKZLe3pg7mTi5piULj39RXLKa2YbKAkBanUd6CRKKMjyNKYYDCWQxwU7R5MQr49AM6KNUueX4M",
  "key27": "M7UQ1aE8P36cBkhmuGUEFP1GdKSS77N2xNeUR2cCjm86dWa8eSQ1j45UdNH7TmgdbaXVQYqBXYzHCxuEx74obNv",
  "key28": "3paoNb6MtuoMB8ie2iuDuEfGS8ndNbtJ6QuiNq6orKcfq7i8s3VoKSxt1beNaB2U9kkLWxEANGDjHVvk3k8fz7CU",
  "key29": "ZDWiTTPRNeezvWLkWHotduSArmA9EdVTNpsqT6XA8edoXNm1P4gX5QNCYyeqSprqbzpB7dfRG36Av85hg3xMU1Q",
  "key30": "5g9pa3SJRcRCGaHZ7LhKaiE2mLBziCQatdV1TKvdfdFJ9uS2UKPDZuCi2yhE4CQ4bqYgBDb6b3xKrt1aBL82EV3T",
  "key31": "39z7pxVTYYhCWRfHQ3DVgPdMZRRJps5tnBxFmAaZJLwm8sU4t6hYyfWhFzWEC7L2sV5Pn8dJGFanMdsDY7WL8Dvs",
  "key32": "2qq8cFokks3MtXjt6geXLaEHeFNmMjWWysDuczHgAxVXCbTrKWYL83hDb5Ruij74zEunPLM6nK54JjYHYuRv5Yhz",
  "key33": "2H7BHq4h4MaqGmwLh6AxT5a36Vx2oYUbX4WAVTd2R2TrXJFD2qjdqD1J3hYT5m5L3TjnYd2TU8qtKmbiUBHoiz3n",
  "key34": "JxdXXhByifHQNuzgQLRDNRFN8qTXZ1o1YJz49D3Jxc1CwsrSizEi9NYcKPFrifP8TmF7uorACwrMkSRACewNhYF",
  "key35": "5ZJq1YwsiZbodb3AZkd4tS5SQSXki32C3avaNzy6uz7ouR45dLW3RVfWgAddcpBXwyYwAnnABAPkHaYbkYNgeoMo",
  "key36": "2n3Jzamavyf6eTT6iDqxcw5onjfvhHRTfTMKjj2indUuv96y1PY3B6meR2sc8BH1mybsNWmTaVUyGeKnTrSF2nxA",
  "key37": "24Abmc4iqUS6om8efoQ9SFwCad5m3nUNS5VttjVg4PEfnFRjJ2ZWQN9mME4LhZR2M7EsiBaDXZ2D4WA8Pz5TqXqB",
  "key38": "5URFG3j9tGaH6L8Lnbd9xCKGNYGu3VsR3JkdDAAsY4T9cYGfB4JCR5LxPVTKR4H1a5pHmb6FSmqVkZJRzaNziMci",
  "key39": "2WeFJqbgdBVvAhNLMCu8drALtU3K7a51sapvqDEWWHU2ieDMQC7N77yjUUWG5qY8UeriyiTC5tsKMAuqTMqE247r",
  "key40": "3j6wCgLE6594WehrAUZuovYKtrtYqSynLWArVivJzmfE13yBzpQeDAsprPbxo54vC49dopZBCNt3LE9YfD4UjD9F",
  "key41": "2iQrveVNvSBMf7ar3DwNWhKsLgbQiLbWDi5sobMLCUWJ4wqyqpFwC2mowPmyMGp88ne6qYLLM33BGBUx5wwhj2t1",
  "key42": "5ciWbTQQ8DAxVMv9aeWqMPBuf13JDoNxELhKRFafri82F7oeHyvKTyF2htQyx7s2HHahMuReBjEMPqw1vfinQhqs",
  "key43": "2GA7zFqviQ9jVb87HrJfm39LfrsTivnqPEywCRGbAQth9Bb2jtipXUyQkMakBfVS8ZidnHXwp3WZCWmRi1XtcYWC",
  "key44": "Lnmx8muUwaM8XmQhMzRY2XZbaD1wExcxkwZvyJPp7zMSY8vPfQHDT8qyb6GipjrZnVtQFZy3VMHvEFXLjYtSo97",
  "key45": "3REJaTVQXgttX2NVKEeoYtcDgrV82AUwgNCKiAz5K23K4GgTRWePPKzjJQZVAUfVZjMpS1jFhwCbGJALhyvRCLBk",
  "key46": "5HSoWh6fMphtVRk6fbKMNF4HtqS3MWe4yb52fmUwf5oawz8kMWKKtsLAp5zurixb4YXDu2Qqf8MBpEmMzZEFzeKe"
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
