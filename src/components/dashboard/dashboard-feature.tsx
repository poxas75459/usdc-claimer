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
    "5N8qpehQSmpceHPKNLURYjYL5s5Rcy1PV25652GUEGqNUPxxN46pJXJTXntfPQi1M6JuyN8og21JyDhgHnQ9paqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FR9Hcxqju7hsWzhaxn6pd6NduA91Ut5f8bKTpJT8RV9ZWaLhuqncXCseGXVGmC7eSnS9bdS8ivRDyWEkjx3HGhZ",
  "key1": "4veNywxNVeiJTHR1fwWtx6HCdhj1j2e64H38KSA6ug5tu9ozRMocbSXe9bfCuHcSdXfk4JXXSYhegZyssnKhy5Bf",
  "key2": "aWBEV8NEk5LSgesnetiKaWvgvDesMFX9j1WLMwW1wq8BNbL2myLdbmNod13a2Tjotar6PwepuSnZvv5nB5YHv9W",
  "key3": "2NcdLuebMdpk8GVdGSM8Vc8ivYKQEUr9TrjqF6LxuVzRt5kCaejU1p6YeL9ddotVD5yx16sHVxtHjKMw85JJ8e4A",
  "key4": "2Y8hvYw1aqe5VoS6oAc85zpmTFDFrrhhgbENhh7FTSvnBKzD58vVPYZsvxbuNZVoeFswsFv6QgLp5FCDUx1DrmgJ",
  "key5": "5yHnTuVkDsBDTUUbZvi9JCCLS1xH8oHDzdEQcU5itrGsVHPcsmq9aEL5ZJMvgpTwvAHDamHcsS3vvFVg7824Lhq5",
  "key6": "3J8BWWKWQCeBTXZVm4WZd6amvjeMng5SMjV3YVoh8HQxtMze8ApVTRPWn1Gmy7EzraFMzN5qtL86bw3gApp1ezhn",
  "key7": "5hgkStT51pVJZzbfUKCHGNCNAV9o5ecwff4mjzuyUS8SgCeM7sFipdRZtwG5d1QRmXSB5XJ5SGQdEy9hDzE7CMfh",
  "key8": "61waUh8gKXepoS6vmqm28Eu2Y4sLLPU53Uf9tWvBatt8MNnyYEJyRGe5wjELqgCECp6NVHbVebcLzFtvbChfAFkb",
  "key9": "5pPV2XpVPH7zMUR6y3St7S1uPqDyY9aZMUYaVcxUhef3QysbxqmmxBiLG5FmZwE6dGpfzWu8GbYTZKU7pSm9DgBR",
  "key10": "3E7wjzF1LcokR3LXJ1ZszEw71KvuZ1nxtVhzyWTtG8cGWrj5iRsBNA5qjswaoiEfmAjGLxf2QiEx876UQT33szJL",
  "key11": "4chKUNpb7gSZtZ1Z2Cv7wbsdsRzweVdEwXkF3BYntWsrykWpcodHTeVrwurt8RZLbWc1PUL4YZybA1hJaFSLxAjo",
  "key12": "svVKf6uZdB5s8N6TCKJD9YryuWVAfxAzPChieP7vgbSLcVX5pem3WyBUFbsg1tvYRhnfAmjmT4DSkbZfBNL5ceE",
  "key13": "5A321yKg3cZQkftMkyFE7SEXTo7WgzVUyRhYP6YzuDrVFYzJXhQntxgMm2dMPTcmzh5xcDoFWGJycjNix3g6aF5g",
  "key14": "4ugLLPx8iNUwaWLY2pvMhV8udu8E1few9nn2aXmDqRLNedWvRMy34tBbc4EsLCSGz7arPEScLxRPitXcKgY3fSZL",
  "key15": "2ZQRLUc7G8sDP2C884JijZuKSqAu9J5tLa9iX96t9KNTdsbNxwQExZib112yCpycDsq5QaYm2eFkpCLKzzvz9Xjp",
  "key16": "3X13ZpixXrQsa2DWAqfiF2ypV3rHdD8JFXNnDz3tMmYBLasLwefLxoHJMuXZVx1E4XAEUVPpvfWh69Y93qaCmnoP",
  "key17": "4hSSkRnizBdJP1spjDJRpDCZv2Di5te12rEjEgYKM1hBWBcyDtiP4pB3pu1jDcaAtp94GmGFpzH23oiQDVujxBea",
  "key18": "2BhMgKV61P43kYpgqGFudkdCsUn663kRYX8au8NEtT7PofzgaqE2u6XFGo4ASoZgK5xdRjMRZEgRyztLCx4ZDpYJ",
  "key19": "5ooVU2CUrTxtNkPMXm6j576wqHk2AJrqtqgSUAyZ7Uxfah1APp2wTT3ki6PhJXMtRuhsqf9TeERmdJ3D5AxA6DHE",
  "key20": "3tt9qv1uYWPxKLSSjwkVPoAinzt9nwqoWFKKfjc2gZQ695fMbzWCz5c6LRnvvYoAdCFAoGoP3jCXBD98Hoo1hjqc",
  "key21": "4qAh8XZsbqbA3fZruMMJTZYRdAgQ71xh8a5a7QbyG9BVjYSLYLYcVZw7fhwDsYp2tG3cofNQspJDHLM7HDtzCvy3",
  "key22": "2tVZcH43Lvo4JwpzADgX16P77iem8LH8N5r8TaSCN8WqyD3UYy13v4Yi4V5n3a1DYYFzUDDS7jW1ys3eKAnvyyci",
  "key23": "4AC7B7RtzceCFMKppoiyBde8JHP8mLeUnv3zRZ3VhYXcwmDhsssUag8kSZFnshv28cEpjD16cPQWm4ND1GmTSGFs",
  "key24": "3vbTYikW1TzW4dRyuRMWqcWenRHjvrwjY383dBZKjYrSkqM21v5dMoUpQ6behAXvanbR8qVXtkEWoUVtR1oBBKuU",
  "key25": "4WD19EaHpBVqDHd3JEHnuMmULfDzgJxy8uADUc6EQbwJSoq8vPB325DTZ1Ts2AV3nxsE1xynNgaorsiwkDetN7s3",
  "key26": "4xBN99Jb7mwbn4AyPCuXKPW7QNDv1WUQqZo1xX7itzejC9kZUxmbhbpujYxAuXqcnbV7t99sDa3wSLv1iL8PGG8q",
  "key27": "3j7oGzeDWt552cVEfVZuVY6KSKU5tpixkVmNvMYj5bvvxRXrntY8iipDsng3YztRiqkCDG2kbspZ33yim4TUP69h",
  "key28": "ruBQ3rVFoPWmxkT5ZiBaWEQE5GwFBrq3Sc472DRRmpJiEqK4HaKH5gUQpkmmYNDW9YB5kCCKoty3nvcTsHceypm",
  "key29": "2U8sb25koz83Mn1ThXnwABR5m8iZV4zsdHLBZ7Hm1nxuYTchrCPWkd5DaFb4WzDJJSBfuu9UfdQMQKu2yj2ya7A8",
  "key30": "3YAKetHGdZj6zGhxh7SAGSti1w36xN3VisF2x6X7mV9pjTvZq8ZqEnGW78GADTubVJEi2zSFaYEtPceZDvjwhw6U",
  "key31": "4r9SbtYGbwMamVnxz9qeKZ6qBi1Nm1vkw6ZkNxQ22fUx2sJHf72iW8S1RN6xgZd7z5Rg1vq8Ej3MCJf17GwLVzcQ",
  "key32": "hR1P2yewfSzW32RSuZmKhUPs9FUJdUPgJT8AMVtDQrjQiTemjr1CJY5vZjYPHKani3MyKNyiMzqeqQLjMGuL9qv",
  "key33": "5rrzHEb3uJFbojmgRYHiAbxsJSeQMwk2mSmSgUTx6r7RnoFQzo6P9iZckVjQXu9mx88QNnMSg32FWo7XM5YGnaSa",
  "key34": "5wZjU1moCUKsVLzRNbUGEtVRAVKNA9B9JTCMNk6bUKDY4TZ54bLLqnrDxc431PyTX5n8inSiL9wx266sfwc5yrRR",
  "key35": "37ZhWdZ6gNNAWqsfkhC7wCtxP825r1xoJLRfDaCiuewA7Kyy1riZpdxRfJveW7a6vgjspJm4iHmUJA71JXvdyQMh",
  "key36": "4cJSXzg4eyirgcYKg5qxLzFgEH2H1pyR3pKTKarhQHgGJorVdPz2szwD7G9uJmHDWbT2qEJ4oaBMvg1D9i87LoMd",
  "key37": "4V9qd8TkDsugVCQE4xhxVwUYPwfKSjJxfPuVWmxEA9ZZ2wKEWsgUvAb3ehMDPRZccAyV9Y9aTfugYcmV7ww36eMA",
  "key38": "5BY4FMG2LCpgZUkJtFEqENKBTKE4ULiGXLqfJeU4tVBFzv3MLg2nVqyvjU4pgoPMEu3b2VzpbrDGuHuDCo9Rutqi",
  "key39": "Euq4wqADQjEDzoUHUNi8rpDWrEQix81HJtjd9H2SV7CiTRPSGkMGGpEkEzboUeFvgJcfWoCUhFnZVzmNBwAoqNB",
  "key40": "CDvk3XRY8fDcHdQDy4XsJ1xVDKb4fENJpSXWTffMypXb1AwhogqXp2wjHnHBxJY1SB24sHrxD7AZFeiuMVSfCoW",
  "key41": "j8KZ1Rfuwv32sJaEVykDNVtSywMYMqX5iVW5AcEijP8SxtPWLUmKsjVbg7jcXvN11G4CBUW5HLy5GQAPshu71iP",
  "key42": "2WKTuYux2TwWAo5suVbLSqZa4pdYmmkG6TE853G42E8eR3ovecZKagqsdFYN6rax14GvdXhnxTA5FyYfBDrrXsPQ",
  "key43": "66V5MSB1cREQ9uWsZZxfPRzLXoeQxzMPdbafTZG3x7jGEY2UDedZphkUM21WhNYkWW5APeEUv8Yh1dfLHjaNpnJ2",
  "key44": "35wzPcNU9QwkNP9gdKCVQVEF69nJeCoPB33aPF56Evz1uX9iEPsC2gephESBCgPFvXteti4dWs9JPq9GLeozvNK2",
  "key45": "41QDsKJM7oAtaMbLnZWwwLjunpwF5wgCfy14Jt1646fKSgndWbPJPRcw8uahMdhx3LZjMU9pkSEkZfMTFHVva67T",
  "key46": "pPaLLM6Jo94a2mFkQ1ydeBvLQXZJq91dragFRJgi4CDce4J4rxDdzLMG8FbHTvhLqQTxi4RyLZYKR8a6rNyf8CT",
  "key47": "5uo8JmUVqxvPWdTPUDqvfbQjM41rEZnZZAB3XNHBzZZHnjXbAjEuhXufbbDtAbRDivtovpcMX1AkthxJbrYoZUX8",
  "key48": "2t9J9t9CDirbyaYC6ywCCJjGWCPY99LkWPcfeKpvczJ79EftNfbwPfwrs1PL6jX3JbEQeADden7WSMkNFpp5ysct",
  "key49": "2Sg32XzAmAAGDtmGx6P8GXfYpdTXjFaSnFC6MFDVcZF3Ugn1VDVo3YXmYzFCyHAZ6X7FaM9pxgxEEsHfCaotuH3U"
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
