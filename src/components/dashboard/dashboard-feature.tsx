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
    "FnR3pFN7JgHLboANQRQtBU6smBF7TGYHb4xM9NnckugDZZffy6RBjrhqLdzenVXsoAi3FnvTxxsUX2cMQ4SSbmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JDTq7whLMWZVQJrs2veHVgNUkLp2Q8XJnRjrmqA4F6b1pGzZu8t5QS8ii5iEqSdaP2bVPa7PD3er5fqaXmDvNbx",
  "key1": "3o9LXyttDZ8HX8UQHGGNs1uGSgDeFu7TFZjiYnAYKC63fQ3EjcLyRNTWeq4aDUXe4YCzs3Y49NWJ8qtDNB9zxMwp",
  "key2": "2jmcxsni3SsbCz3wa2hmLLEcSp7gWvosqHZL5qt8HZNtFMMXtcujf2dUTUy1zmmvM2hg9P2qfqyhc28LempHPsTi",
  "key3": "2DWe9XukxYNxfpsdHPCmHjuwRqpntiCBmLroPrjXAT9g5c3mwhS6Kqzko6duYicYBDtBVmjmfNAcrgLTzQ9GFr4t",
  "key4": "jPiwTRwz432M9PVVXrKWTtb213y5kX7eTC8xTKx6oXYGReTJxC1tRfNP2WB3b8zoNo7GgYHLV1L4ueahu11vXvL",
  "key5": "4gtW2dF61UdW32vBGSciz2RjjpEmxM7GBDVVqN22XmULhGvchmngZRQKvpiraYKFZtom2DagYC8poLMeLKJ6s7iC",
  "key6": "36h1ESiuze7gZ242CibRV5GUyEJgNZJpeR2S1G1wJJpDFKi8cF99TB61QuBBkY2NfwYnEo1yK4uMJtUuxECaNuxe",
  "key7": "4TFv8GStufzzfL3H68At5Jck7kqUNJqWREWLy6y2vWEz4Zj3vrLqnbPKNrUVN42ZUMrmyTw3fWKxTrnGzTvfz6UH",
  "key8": "5NEsCMpgb1YMKn3zzyNHTkkHNthadD9pQ3GnPueibzffq3r1o16e7R8QxREfU6mVdMumxgAHRpdoXPa4BaD8ECzn",
  "key9": "5F3NT4bL6Gxp5QSwDHWCzbZEMhyAJFrp6ZNbT2dtZpg1NzqEZ2u4jD4FvGGKuatBBmWv7FXJ3c8gHJgXyPp5mA7V",
  "key10": "tjTNtpUh7ypswbveFdvmi3omaupLQtSxnAb5G9o6jyzBFBHBwMjGrQmVWt4HsR4Z5JJS98kgJYxdA2CYNR2azA5",
  "key11": "2qbqLJcALnEAYbktVnuRExVXv1VPTmc1924qzhffqMMAsQCr6L63NuDSkCCPV19a4darj6u9fyaDxpVCyMwzVFcn",
  "key12": "4r6pWJBZ1XLjq4D7c3Jh6hK1jyZ6J6QtCkt7txtNRwuJqjgVGECBgtVWZDQPKkpeXb1ErgGR6FoUHajxJmAt2AVj",
  "key13": "jaCsiuUeXTEKY7hxSrD4Ac3hck7meTGJW3ofxUK4tQGwUfRwHMSacRNQn5a3gox8jJWf1M15PkMtbiG4tV99aYg",
  "key14": "66Xjnf4qg2Kbv3SygK3DJ16onkYxxSxddpkdYwPZd1C38nSCd72ZWeBpSRxLSLmUxeDEz6G75iMRnRmbd4ywe9x4",
  "key15": "4xSu1ks25JGZijC3NVp1QofHkeVBmub96REiGWnqwuxLUgLuUGW9Vj5P8a1aAfDQidYuDVnFq498SjscXVM1LTHb",
  "key16": "2M9iUnWFZ3aoiWhDKWg16x1Y7y5J69boDd6kJjvDEn7LL4QWQQCfMHmfya6K3DtjuHLiPLFpUT5Tt4xQpMeLZ9ry",
  "key17": "3bQ37yF4JdSbkprrdU9m7w1yFz6nVDbowQNroGMbG3dPttNUN3RBarptLsfg16ywKrBrDsqgkgDJLB9Ki1SpJnbt",
  "key18": "3g3Vnwm4UuxupGgonTds7RkJpfbmkPe4pwXC1RjmG4zvN2DMEttJZSY4iub1pWvSsxrJewAXAZG9fifTxztpzxMA",
  "key19": "26KbLk6Ln1Pkj7UhTjwns5fbgAAp2Q6SjwBe8QFATt1hL1tPVB3ABL5R7vvgN1QTBysB4rikKh42qEVdrQWg7gxu",
  "key20": "36HkAXYRkQWz1ax8i7MZCcdHJz9VBNV2N7U8sMwZCYE9yF5afZo5rP45vcCUHcYJ6L66G9ge32uyRQNnD2QFpWAD",
  "key21": "2aiVDpLFHqXEv9GDSTrvnQ8Fd4xtd9g9f348XsVCvAt9zpWiZuUc4zcv26g7wdYkjCaUCJ5BB17PBdDnCjUEzc2r",
  "key22": "kSUCWjEPGsbqoAPkQ25Txr2F2NBvLF436HtiREkfzACdfkpaPbQcCBrYsVfsR8QgaxNVFiQZbreHVWX7YoPKgSA",
  "key23": "aored5WCk3JtFYiRjJbzqZmyZ16EwDbuVxEB3AwJmsXjQaeSpmSvFoibyLvUFkYvWB9mvDRpMRWgaN1J8suy956",
  "key24": "35NWKPRNLKwYBQspE6W4seXE6fB1BMrgrDwzUCc9w4UjeaF65nGvA2jeCEgWfv3pcA5Ef1KjHj2kwoeyhRYYBAWE",
  "key25": "4zS6uqqYdKyZAmDz7mGBG3xrh1MZHGxzerUeLj1GZtC4dzPp15aVVnYLFYomCCoEs81DsWkubgE1Wg7er4ecPovH",
  "key26": "3spjtjrZQBY3NbZzX1rQFuHBMpLGgQzsGom6rZ75fk2yk9WV579D8GsmAcNhRCK9mr4aQuaFyo6M5Upnc7NpYVkW",
  "key27": "43WZyHfodaMtqhahNhmqZUUNdkhDe4GW3mnxgExDsyb2EsjYodv4QeMUkmoxgddyTetqoWJLwbS8dRBRzGSRqKKV",
  "key28": "5bSV6TFP78BBFPiBP1Cpv9iYLEyJzpuXjrD5H4mewUj3WxfBvRBA9F5ikoXEVthhe3v5jLrwjggf7yoX2NpZdvni",
  "key29": "2v5jf2LLwoFKxPMmfbhDtcnDuJPHRNn11gjbffjKV1ma5W2YqZF72cXm72cJn5WGe49iDyYsKYePtmMvbUED24D",
  "key30": "3mshMMSgYnkteWbCGkt3A6f1AMQYUj4s9wcvyB1RGgvFPMnRA1iqrsJugFcjewmPJs4GSwafNvvYxeqDMc7yAhji",
  "key31": "3qf1kKFXbjHBithq94LfnnEAXRaoJJyJFhek9KCQztLdysqDgg5VZUxXKmYWEt7PFewc35a1HGkqfLQ86PqykLnb",
  "key32": "cVsb6EaR6hvyyKyMSUXxumCMppKpw9UqUA3Zwy8fQGYEsy5JBsYu3z2AeQWQWG3UJeMyKquwBYJj2bVcDrkzRxq",
  "key33": "fdSnPKZffmYJisWZ8MZohXFSudHykYaShuszS94xsG6osTBGtd7ndGtr6Uw71oHyPoNFif3HZhzj4sStBgG6Zom",
  "key34": "4JtnoqvvNP11KYmDEh7SnLkdJB2c5thhnSfS82jZvnRXRc4ySqCkXyeFK93kVeyoRgW53TagKrBztaCuqQeS4Rjc",
  "key35": "2PeTra8SSzskpoMdk3gFFACfYLqooi2ZiJSxibqVaVaSec9Hp4tSEJXRMCXgVDHVfdsUXHvB1jJojrVMsrjR7ZDJ",
  "key36": "5Go41TTWifwvZTjHQjdutSMEC2KrFg8FM53KkgV9phG16doK79yqpgmog8FdeimfL49JDo8oKeixbtgKE3k2f5hn",
  "key37": "4gT92KGkGsHvWaht7B7Zq1YqZS2RqbA3RTWNEKMfdDk8ATLSp7A8ZrjCHpgzYHoaPoqWgru4fxJnnRZ6HbkDDR4Z",
  "key38": "2chtLivMMz8DkEYVrRViYi1PtnTqfBj5P6Tr9oAQEE3NNTo9VXi5yZ1cRPZLB2Fm3uVtBkPePXdaeJKq3HQRP7fb",
  "key39": "3QBTuYiuWLcxVNvQU7amF23qZjTca1V81nkhakcejQZ7Htki71YYhYcFT3ty4CsfGsFQU89nDLT8rR3kfm1c24ak",
  "key40": "22sWiWwSUjpX7zAPeQorT9AeREAtkhrL8yBa4qLm3FTNEZG26QE4s78Wn5AAYwnp7jnPpuziKStHF2LaUeA2ViRJ",
  "key41": "dm3otpqDqQHKGLFbu898EsjvhucQ5tVzadSy6ksiJfMEadx49VRGpJ8bthNfiuQHY8NujsjVv6XCGKpWvhnzeqT",
  "key42": "2WSiCJAzJYDNyPX5UhANtb9TPosD76VJFhmLqs2J89ckDY3M4vVWt4TqGAw8nEvvNs12ky28QBuQ3f8UXLYDqmER",
  "key43": "39hV6jaJcDTRWsX64U9ogjEewqsdJEnyBXJgsCDXRSarg3cEmGeGagoa5vuDyVB47egKjU6iyzD8HXqec5Sxb2tM",
  "key44": "33fNJphEktcJaiC9sBB2jA3nJZhGrFaNy7eJUWUC6Fgnj1hpTRa2eoUDCfceeZM7aE94TrKn196Mc4T85E6XViaQ",
  "key45": "4eucXP3N64w8RYFpJH6fTcEFVePJznPsas8Hv6NXr7e7k7dLQGtt8ivnWfNybtB576SVwijevNK24VFpKWfenCiZ"
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
