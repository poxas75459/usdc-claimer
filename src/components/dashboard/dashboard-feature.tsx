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
    "3brs4ZxxratFkZyUr7HeMw2CFv7df1rz5z4EGASWrRHKc1qSP5LQKPvUBexFszvSmz7uqmsFGDA4PkVGWrphjRFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66vUexDNwfsNfrYGvsw2dPiV9UCVyBfNdUFr5i4ZKukAzUfU66XF33jjzdDq9BfPm5ieoHRXCJLojVkGyYeGZo4F",
  "key1": "2n5ctrYhG2USvRfnyM6DMRAHViyrfogSQuAgasm49fwCyPZdLWQfJ4a7JZVLNxHU29x3LYEvZg1RCaf3vmPTWiLw",
  "key2": "3pRr7vXwDFE9EWbDdMcQJXYyW9MUZKBqFvsaSSxCJjubxRbfQ8fysxxM14fzYUnbLRhPj5nnnnNomiFUoTvm9Ybq",
  "key3": "341KTXUAwHEBAAePepV34yjAdmKcrnbapAuSGxsDNZ3qcC1SWprcaERGnQQtqQd8Htb2N7KQKbesnzjLc66fRxPY",
  "key4": "bHtHzd6Aq1KdGgk1fANX5zGHSn2VRRgDwmhdamBofCcbgmiyPEvBGsoEHzix3DkRu5rP7XzxHXSkJ1shsFCKhB1",
  "key5": "5dGecgVdbrueXswjnCCMjRVYLZhQN5xPCp6xi7kAVJF9bncgb2a38yKd3PiqfccvX6id7PocutFYEB18KAYkP1qB",
  "key6": "2hk5n2dLxFooU9dNURBHr2xVdtNwSh38WecBARekVHkzRjs3uuxrW1pqYkgRTa9LNmbam8J7MG1TP7vbQA1Stnp5",
  "key7": "4RTWXLG16AogBmur3G1HGfHTCzWdN3WxttpuKkFBNc3jPXVCur7g3Und8TQ1iYpPsT75kUekpMXJrMCfwP1oozh4",
  "key8": "5tQqvJ75MY2tZ9qH87QJaDVhHnCASaKPnqKBFnMcyvYSk8KLVoFP3sp8phuSj45YpJ4AQTYyCAGRcVs5Fiv92jMq",
  "key9": "4acty2cVUqNma7SCizbLuwftmhVnBSV4rW9jR2vjr8bAPM6wgzcVMQSyYyohUTjGZ39DrVeSEbutgXjKUzMidxm2",
  "key10": "28GVJvjdweX2G2qv9NGc9PHMCmruAHvdbrnfEQRncG8S68cVAPdBWfPWrV1Hp1uekrTfyRxRpyfqhpu3XZJvR86D",
  "key11": "3KET3GHjHnFPQhGspc2UFheswRFkw8RziiBhoynJMeBxsw5YyaXtPzXF3Lyrqkukj68fRr7ScFdykMnX2FmZbZRU",
  "key12": "FyYxbHhw7GhjgBQ7juS7RxnLNAB6sqyBcu1rCsMVzoREonufmLztHF2caAYiEdWivhrtBEZ8oivPLjkn1wTreVC",
  "key13": "BeWfJKEoSU8RdhN2cMKVHV4A6AQPtEcWArimxhGt74h8PekCp9E5t42CAJDUhXavYmPqkxV3g1sERTe828dXgZZ",
  "key14": "rYSoJpHr3RXvVgoTnao9u3fAts6aZPX91Qf9Vj5C4jKfEtKNiMvKzoja87X4GAhKsZdC2JSNguyPutN7cM8Hr1t",
  "key15": "3ZzdfzmQYQfoGjt4tTzyTxThqRHKtVRkbUyJTbYRvus1kVRyt1RmiGLXbdnwSh183KZM9fSGdnRPjK46UT5RJQ4p",
  "key16": "5fqfQo7m9BVBThgavi4cWahp5jvYzmVsc3UUXchhfG4R37vpRA6cgPxaCEZPuz7JUHWr7CdNc4WH8Dr8qc3SMt5L",
  "key17": "nNhGc8RaNdNdLqF9FzoaZXQrjaAT4PSrz3gon1aoPcbACH3bEFtHJepW6wB6czfmEq5TubB4vFFpC8uBinFRzff",
  "key18": "4SwbrxoLaS6TKCCKGNw6ANxcVXvoGSYnf9wQPdnTqsMCzAGuhWJY9RHB4igNWCjLAWgVz489ibTDsdMtJFH4eQQ5",
  "key19": "2TKpb2eTK4zyYsGPUHg2LvZBxtBq9qGZDNSv2HED6M2PrsnZWcSWzy5hLH1TRwc8KwchAKesz8NeaYBZgAzWb87L",
  "key20": "xz62AkcGzjK8Uu5gSNAW7W9Yzsr6Dp1cWCB7ypHDpg3TYEEyyf9YqiwokE9k524YQmzcSZMuawq9dSB8noURxjH",
  "key21": "4LwXUcwAkMev52yYAZBBuNXV2tzB7RsFNcAi235tajhDV2er14FCMfFh97bahmYbRVNZekwGVgf5MCjBGuyKpfNj",
  "key22": "4gWMnpBit7bS4VPcDF5qqYEYaGWM5sENpVugvXLoPR53SowV4XcXN4kPDufrMKULSUUDvWJBYjBr4kQHygu7dXEK",
  "key23": "3qp9HnUaB9Q5F9BNFGY9Hy6iaFfGZSAvfqYPUd7gnTx522GxT7x3BmLf5ASd6qTgujnJsTXpHGMLhjpk69JqLizj",
  "key24": "5XDT9z7J8Hahox2Hfz3qRzW8NxLBCZSiRfLPwKK6DVmjGD9M221sJazXgjkPphfiALbmvUNRknVdYbny2rDrBfHm",
  "key25": "9iHwT2Jo9LSg4yq2CCDiQjWJvbLc9ZwFfm8AKekn3fuWK7s56pac3rEacmfgGNePWNEjYHbx61JTF4M2roRffF7",
  "key26": "2EB7gu43fbaTi7k9SQb8zjk7BYtW3nW4LkGWihgpHsn8mWYL7ycTQccpKCb7ussmjgAJpWJPT66NouQKtx2s2Qi",
  "key27": "3xtUqm9AWgQvM8pQny5Ftnp2CALZfTLUFoWWCRjGjY6zVLDMPceHv28m3ctZ2W6cvugM9hKqRpLJF8UA4U5t8SZj",
  "key28": "3mWmA2ztdP7umKr7VksTiMKXYtLGGgvApGj12ZgneK2eTugDyfiaSk2bBCz14G9xktnvBacNEqjkJyZpiSSLCjSg",
  "key29": "CLtq4Neqhw7yn9wraCFTGuP1cpGW6fMQytrZqeJsM77DTPQrUFmkvQN9di1GSb73aoWdBpM5x8USELjFcMKXvET",
  "key30": "3awF82CqjYy9sVNpvhZvyBTLHsuvAhDG1UnmctcebMNRYBKBZ2jF9AkEpDra49nwv2zggPdapRiwXTLYUAPLrgQL",
  "key31": "5TuVSp2BhGRcFWHh9AV2Fnw2Yf2oBeCfsB3eVG7tGuTHH1tHyvf9ThEy8TqrYXDCmRAm1pTFrKDjHXLmFf8uSVak",
  "key32": "3USQJfTeJRrDS2pAi8oP4B9DZAKZCezQuU5e8PBWuA1sXNFBJxy1DdMqqysbgUAvHUyGFMMCvU9n5nSxRW3FYLJV",
  "key33": "QH3gCziPoZoCepWn3QjGv87Yo31DnqgmQvxkALTMKcZojAbLYnF17jFErR4NSH1Vp8DdT1wTQCpnS1E59PU9TYQ",
  "key34": "3YFbhz1m6JY5ZevyftZ2G33LgHxCCm3HtS6y6dagwSSVDbWKimS5gnEqBqTDHprif4pKKea3jCojpoYh6JWRZBWu",
  "key35": "359ed6CxtRu9c7fpGkiFwtFq9c3DZGeBFohj9RzCBJFowiYVotQDXrao4TLV231xYjS1RoTj9nu1CFthEBfNNn9g",
  "key36": "387wm6jDLxuMP6EFN3nYwMVygJNYixV7EZ7uUBjC42tHbvDPBD6DSbrUyYgb5pvuy8EMVAARmMfySVnyFRaBuY1G",
  "key37": "4u5sMmT58NXSQYNNsri2CJ2G5WbxCcEbomMAa1XP9p55qPU57DxnmsBdgkwmhy5vMANeL5d1PihpfyRNJBbjG5jD",
  "key38": "2HLpYTJKAHprxFbXR3CHJSePyfNCzihacDvBfDQS6gxHYHy98bjN8R3PZnPBNGbqvuDE7NwWCvJmbncN1UBaZHzL",
  "key39": "5ANQRnrnea5sphBQyvQFmroAZ1e7VAxtij4DHJ4C1iau5W5JPFmBCh53uN7dVNQGL9VM4HXmfiRwjFtBL69a5gVz",
  "key40": "2biKjdNopNBiBtiChRqYFYf4PzN5NNT3sRD8F1Twdk2iD1hPqSVso1pn3mfWSTq5FiHKpVhXG946Ef3o5BhARq8K",
  "key41": "4Em8mMFnx4iBVXpio8LtFFWcvqacV6gd4os6GBJwrLsVk4jgtq33RGuCfBHi7Rq4PbuCo5tcnBmaQwRYrnerTpp1",
  "key42": "3vS9m9T3dgvqvurDmYfQZyRLgMKFxgdWFZBgcpK4hvmnKYaeqMw6NCDs6fNx6uaGRFSuF7njX6q9qtAMG9ra8Pnu",
  "key43": "2v2iNdbVEYVmgoMdZf3nFewDy8t6hHqrmGKSTn3Cw9NgTx53yawuL1WLgaMgeWsyVQzFqEFubcUgrzneyFD4iBQ9",
  "key44": "21NjQmspEgpe8Ko6Q5svAjtqmYtkzUHxFCbWMc12fSuD2Sc7US4vNPvAMfAo5E6NL2r9ccfbsfJRXdBgfo9LnzCU",
  "key45": "Lpa78AJURjBr96URm1S8ms83ukBNqnrUYVnNatkH9AmHCFzqozuSHgTMKTVejJgmGrWvUh8wULTjE6qAZjVbuab",
  "key46": "5ad1bpBmTUZfsovs6tc6VbZCVLKiwR32VbkRHuDJV8FUef48eFFUdaX93sDECEYv3XaymhXnv5bGiWtcq4sUy5uu",
  "key47": "5r2qxLWJH9FLPFzvLXZxGhWrnsSVVZKtDbuXnu7RVRT1ge2xHyh5RyPwsGu1UkdtP111NBN6rBcZMHqAWNBE2w8T",
  "key48": "2or18F8HaVfsRFYa6Gz8UNQ4qP5xoHhcRXpFTRroGkJMrrajzZGU7MxcQMJLX2NnZuZqvC5rEgAyutKqf9bXregZ",
  "key49": "2bggKS95dVm63qGBxi4s1sxxruWiqUeBs53BgSeh4qmt3VrPW4yoZULCq1MpYtag3weYozeY8VGcRcjzE8RCt4rH"
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
