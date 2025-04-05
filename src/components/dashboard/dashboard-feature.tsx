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
    "6htZyMEwMq3Bm6nWzCSXnEWcUrazB9Kjypn2hFuCcGYaDoh1JuuwsiwxtEyra2kZDEUdKAfaERetvFG6Eoufugo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eyLQ3tcFmgepD5jVrAUkECx7DpEwkYYsGy3FxUQ6AoHLA4kGJWoLtf8mWNj32Dv24KnTbrxeJDuh8w1aKTdKCTn",
  "key1": "4hUShBKyqu9eGpUv3EvH8oeLCXzCqS5rScesRePtDHTprXKHpoJ1GyfmzrPrVkZzhxHBQir3mmxcXobp1xHXegE1",
  "key2": "24j5u5jhkckWyqojsvajjLtesAXxMeTPPLVmHSqUdLxPBHQNHQhF9NqDaDnRTLZQvw7NEL3gnAEcKCRu4VNRL6HY",
  "key3": "54VyyZPUteTaGkTtPqXB1QosopBtRd1PPP3kcrHy6zB95BzJA8TGFQ5g9qq5Vo1mpihUGcSwRE2s6RhRP1Zmdgv",
  "key4": "2DFg5YKrQ7HzBnyRgendaQzqqdfTDAnnnasTEdXLbt1LyA91SooEx6chrkjm7Uo32bNW7HMRxLn7NxtvEpAf2r68",
  "key5": "13YsHcg6GYw29Zm4BoRxoenndhwtWasKZCWtNN7XG3j3xnpdk8VJacLVxkbgKVFeo5vPuuKRos8NcWqoyncudyQ",
  "key6": "4dLHB1gARc6b791L4ZZUZJ1Y5nPwJN7fnp8rCWUG5WTfnAnNk7bgZS1hJXcq2DSKF2yRg4XPJyV4enaxxg61FA97",
  "key7": "3ey6RLwvRnPCtXVtXQkTUdhThjT5YU9sb5iGciTVVYvGGKpJG4ayBnyyDECeeEuBW4p2KdoiQj7HhJnFpG9kJWKj",
  "key8": "3Nke1UyJuqKfEWAUUhbCkonqesZXdRWMMLHfjgegowtkAaTwCE1jQ9hKwuHYarTWGkvfx4bj6ambqjVqR3aM2YmT",
  "key9": "5EEBRLZBLLq3TyB6ufzezZ12nzxU9p8Wq6fQzjbSBk4yNDr4MtDivCWa1rr5moyTaCnrdn9VmPTLJUBLLEettYaw",
  "key10": "3K3RZjMNDjy8hsuYWiGTWg2eyHGW6ypio7EkEY9XDx1zcgfkGmG3JMhVpZRNYk4jTstK11f4CHNeM9yxQ4zcbAW4",
  "key11": "5pb7jSQhPjewPnPCVSCEC1UjFh3TmacZdjdCqcGuDZntUEe5ms9vTsSFhN75PKb2SsetUPcoVDWbexZQ6GrUX6QY",
  "key12": "5SPMg2eJ6BsvwVmqfBRG1uJnWfHKRrzDrszCRFNQoM9rj7KeqGoEbzvhWpPs23KRvgEZyaY9CvECYfCGLBk6UEdq",
  "key13": "3Xrh8qjYwWC1vwQk3eBYibrCnXZ1CCa2jZvfuTQt13j14eV3EqSC68LLM81p5iYFdRMq6Z3hv7U4uB2GKmHPH2GW",
  "key14": "3z8wtuANmtPSthjE7Rw6FaXPdkp6Y6yzrGWxPpBdSiF2raeVAqJx9GiwjZRcGGvPdhAx7cB121y7guxpRQFkP3J5",
  "key15": "4mqUFLvSUJDXnhNTx5ppV56A7K7XTJKKBMNA4ngDQDz11QjZuzeECm9BHDw8KkKZDPiC1iF7G1zRumF99gSpJtVT",
  "key16": "2r2a6cVg2nnEpqQVZe76TypDcSXYyDtWuXcVCqRpi5zEBfEq2PhzVS3VEV36uhYopi39rA4gJhGaDJ3JMeARY9u5",
  "key17": "BjEky5icQPS5RCswv4d68PNUDKX3eoDdGFjFzTgZD2upfperCmfmaYoMQiSoodziqt4wdbdGpGNifdQjAQiShHp",
  "key18": "rhaakAQQ7E1rZLDtsiWowxcbZwEUVnR7uEkSfVsh69YSZDwSGpBqyvonMZjEteQkVtQ5EpsEjeE1tmPS6rxuDbt",
  "key19": "3pE8jxHuw74VttToxpzTP92i3R9az8jWHmuLDsniTUWKbMbjkQFfaqJjBeDwdLxnUTPmAVycBjWLaw7BoAZND2RY",
  "key20": "VBnS1rznrx5SqNCQbfZVEMz9vsxL4FGeofoqsHDmbDaRRSyyNTaqEXS9aDB3SYBqVsywp9Acq8mNUffM8Zy327L",
  "key21": "3Gemf2LGtSSPadVZs1GgRReyRCurmRAsdxSGR8xgps7hcPNj8p5sgT4W6s2eAV5stFGNW9K4Nqjem8inmnRNcYw7",
  "key22": "4i5JPFHCMxVCB92r3wWxQPPk6ihFT1FyyxDc3FJ2uXXTn1XmtnHE9tHTEaiH4LLrZyEjRNxAeXHoJSabpNpU27U1",
  "key23": "4WRQZuJDvCaVSrF6B8921d79fEgruPecTnyGUkssQ9qq9rkhMXt8P7NxLVhs1qhWKhwakMPNzMjwcbrQwxt9pz7",
  "key24": "nC28XgPsMQMZyXL48H55dQBXg8BtGqPLf7FpcGSdWJSYG1FmEzo6ZVPcuFoGqFX98sB4ysYd4msx9SrY8vkBH4h",
  "key25": "42Kdx4rpRxzqgcSSmknYTPVJwuivC7EavLPk4ZZ6idd2YmBZyvcqTn77JT9sXYtW63W5PY3L815eEc9qZTqeVfps",
  "key26": "DR8FSrhUj6y1N5d3WC7ymeUcVNcFfuuAoFL1iWiMuQqXB8hay2WpyZwwfEhDY2kpDN3BRSgC3RWHdxaNdKA55yj",
  "key27": "2JoJcTEvTs57MSNN4Nyg6t54Z1dN1kywcFrQDojC3gY1cnWxnMnfs3bjLaP8ymhBVEijhH3dfaSQWHddXRVWs2fu",
  "key28": "3xAhBdNXrQDifwd8YMc8LKXWwYj9UhSXjnjF2wjPpgFukdKyboSsihpWp9MfAE7iCdWAKvEBfHFXHnpmgRvSb8TX",
  "key29": "e4BCdrVtUBW9zdYPGe3pMaJ8xRxJcXnCJXhT28dVkSV5w6pAJ3gF4QbPmo9LTet6PyLx3Y98NyxD3BMVQRqLzs1",
  "key30": "2A1qctF8hitzjewB82WcT5PM8Xy1XsrwtS9e3YSKL556Kv2HuCZkTV74a3R8nqesVqq32vVbhgyAv89swJChhXiH",
  "key31": "5EY5Ja3TcuazUVPRCuFDQzNiMbWLV8tgLUgM2UX3xBhnLxpyCrs2693jfRb51bsZqxoq5XbkfHMoL6ggMxHJZ86j",
  "key32": "5pQqiXsXzJMLLLAdGNUCHpRyYyt76F2Q6gnkTvYFAb8LyuMaf5pWDSibqqtKifuJBW8Dw9AtL5ti8dwmz7wPUb3",
  "key33": "3VxYWhhC9wvmBFE5b2zD7EAhmutWP9UrZqgvkoqDzKZuEXrFRet4rXSSsvCPPsAgAr89bNh31eMmpD1GSfZJ4J7t",
  "key34": "5DacBCkzzzC9sFKY3KJ1puRdw9xJgTt25ikEeZ2CVnhPKCUbWVkrFgiAPijh3mrHFt6GDHGV8u5xV65SsXggofRs",
  "key35": "4aYuadrrFQMuhJM59iwqzyTwNA6Dp7V9fbUBgmVbKYJF3bVWjLytqpoBkczrtFNL3J7FBbU8uh5mwjivqA9mDwpw",
  "key36": "5bdEuakK9rmBdCs27R71gTYrScUiCXHXV7ZiDwg1q4JwJSFmaHEfoBJ8PVJyHoDL7hsXQuLRwZ78Unqa6M95Htz9",
  "key37": "5GJ8eW2ByJ3UJp8BHmf5iJjrU9FJ3kUxdupF8N66kd9ath2LBtCNepAWZYtJRZ5W8xkZhXVC9zaEAyni1FxEy6mb",
  "key38": "3CshE6Z2EcksFegX1hRB81vcgrgvmy42AiAGao2zUffiBCuWrJHH5PSrw7br4c3mpksfFXwi3SQk2w3mQCK9X6Am",
  "key39": "5sy2ZnMYxzP6pPr6rvZbMbzPmovhcuidVQb1zrorKLTZ9fVTpu8WwUtNdKFZ9BTGtstLETKe7fJKxtw7BEsNGMRL",
  "key40": "4mNMJZArGWVYqTjHeEaGabTZoWzjQJLFDRi9C3U5NPQKvT1N4paNqi5iD9MRyCofmEbe3kK3uRd123EyPq5quou5",
  "key41": "5WsA4YY1Zdj1gyWF5qD2GWe84SeqXMsFQVWGGH5YEQuAyPssvmekub6yJTpyHRJctyADzad24cAqTc1XFMW17PRe"
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
