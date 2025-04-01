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
    "59E6fWsQPw4uKhucA2KfURZvKq3jfEpqLuJWTrn7W1wBKgEyDop8WYnZA1HBFtkEJpBE7BVBYAHyZG584iKzsqrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NJH72VZK8jQtVJ1JK8qrWbB3rE3zY1J7HPwgqYGYkwd19jEuh5xvGhFJgeUdePw1mKgrbiUTrTyAMc8uHvKVTkA",
  "key1": "49N4aE4fV8HqY2nempzMmQz9UBpm4oneQYdvxud7zMZAeWrfyJQjEjHn3AV6maxqoDxxCB45txkQ1T65kZMdX1XK",
  "key2": "5BB9znSpEBtCyybu3sNFoxULJGTCoCoYrg2g3HQdfnKHWWHCgrWvM3fyQiL38E8zYo9ZPj41jvG3VPPzTD4gdBjB",
  "key3": "7Av6c62RzxtMxZKtSaQsvJVgGd51rg63RhFiA5NL6g4kitoYGiCi1NhjUp95mGCH1LbCZfN5Dzrxeg5qevbEFf9",
  "key4": "3SkbwskvJNJhLZZwTaRKZSWVTySpxXUgdSrh22dsGms6B8RbM1FQveLZ3M1bqrcQkS9UeSmXxAhfraKDCAy2Mpav",
  "key5": "3PJHLLWKVhHZrisyPpj3erc3JrthwaLUtUFsc1XQ3ZqP7i35BGRNXk6F2z1cxvcX5V1N4Tbfgx1kAiXe1AhdzU76",
  "key6": "5XifHmfL2uDH2dSBRoUYcuYXWHWWZuHTCKEWn5cSCpr3UrDdesSWFDA49oGGjdWsSUv6BswMihWAwPPkzYbr8pkB",
  "key7": "3woyZckhoRFHknv2tbgKeN5ygfFxUuiXvDF5rnGe6PP5RfthquopT9sk2aL1ipa1pC8zmE2b1hNGiVxHUe2A29vM",
  "key8": "4CNJvrN4jWEiKZUwkNzFRr565TCfvjngXF52Q6qnNZSbfceztkehsP5fEzmXVKZyKLTJwHFh42167YaJuBwWdZeb",
  "key9": "4Rtrac9sj2siGBX4B6xnLPzNZ2oMuv9AHwmr94AdW8vwjTnfpnV4N6LYvBQGfuqwgevzVYBLNEDPRbNteMLrw42k",
  "key10": "4i6x5Myms7bGLvkLBFgZQwtdWVRBaKzHS78BPrkrBcFj6KLw1MQEno3So3d49C9Gp3fwygit18dKwSahdX8HSWWB",
  "key11": "ArvcfnarscXtMGqikGzdPP6Qej8h2RddxMChqzNEPQnJ6nqf24BoK5x3boUJB77dpCkYdWbNYXmgjr4vXgYcH4W",
  "key12": "2hjAoMM48moUcLWRWihrbPiYoUaJaCuCdqSbjKzmuxKEPMKoYepcmTcDhcEac2uXprwx1JYBnKAAG63dYpJvRsZV",
  "key13": "3bgxGpKGg5amm1LxfDhvhUtAMYkX3PnWANYSV6M29NwUP8F4PcUBKijPx3SgXtKDBU1mBEAULQ1P89xxPDFTumSL",
  "key14": "27pWwHhAGTgvny4MPuyEkNFaJdUfDHdcVPiTVS8wXnkmHEydzpB21YD9UXLPekbNQfQ2BY3jVB3iBTiGRmjVt1wp",
  "key15": "3i7BhQ641P35wbuSny8tSFvDhynMYktd2oY8nCywJDkySuw5jadU5TH7HPg3rNG78swAQ7joSYa2rT3ctEPqLHET",
  "key16": "dT3CHT4ufRobVJfARwB2PAWQEBXsAU6q61oymvqGcUug7C2c2jCH2QAY5H6UHYCgAEp4YVyNdsH8DV5NBexQitd",
  "key17": "29UiXCf2Y9GQ54bkRPSokLXNwRMy1UDuRk9CzkRFVhcospfBVt5yujPBsVxZDFfkgYw23s1cGedYi51FabqF9C2h",
  "key18": "554fC1zD8f8XEZ31R8T1TSGCEzBoT2uhL3vpr7FrfjJq7cmoG1qvrDfkSh5NuHGDXyeuX5T8rQGr1oQ7as5ZUE1r",
  "key19": "222u6xWJEJfCGTv9D9KoBzuyqAG4fGLTq3kU8VT4EhZkDqsoKj8hVrrFU1se5HxB2rqC2ze4yG93B78LLXVfaegf",
  "key20": "3VJ6anGAUKd9F1edGgv1Job7rseCYhwnczfwiNNkf7ob7yjAouuLQ2JRT9rS9uqxpTskeAYUcWNfXZkd3z5ijUxA",
  "key21": "4Kz8Svze6SQxhfgTGZ6y8N2np9Bjf8wEngvm1eXyNarwshBRFTJY2XG5bpt2rKfag2kDNGEJkrktNV3BoMSFR2i6",
  "key22": "2ctxgHrmVpQ6BWh6EPDymmLZEPQzBtpujL67LzcB145Dz5mQ42hkbRAfpBPQjoiqwfmBskr8x6z5817WcBvqqH56",
  "key23": "2LbCs7WBqRXNbMAHiso2nDzQCBCTNCu6vjwgAYeDtC2iayw8tVDi5X8LjoQVDEaxpiQBdZxziACEGoNjE9szNjvE",
  "key24": "acE2TyiSM5VZDi2cw8t7p4YoWvbg4byg4Jg4mHWrjqLvv5MJBHz1FKPphQUVUoddCEWC44qdZXMKs1UnKT3x5kS",
  "key25": "3rDspMFh7huAhQTNEsCoJBsvdkPYTfdUzgKGPqcvaTEok5FCWeLK5B62DhyXyi5kaFESm6shHoNquapTb3CLe4oo",
  "key26": "2tREkGqGU3cm27pSzraMzFG4QYNyjHr9puh1h45EqAA3qcJS8WwRGS2s2ed4AJLhcHg85X1igWfekvkhtmLaDYQ6",
  "key27": "3XbSWZQC8nAyJJon4PmAWNaG5UZqZn5v1rU63QEwNLcRVBzSb7oPMjfnrsuCYq8kUaUCPskk3vQdSzbikFMthyYj",
  "key28": "5LxyLt3LPnzLRhJi4R5U2sDYJufQexCkxxHdiq1wWopwm6KTmVNz7557BgzTrqZBQt5TSePqXGyp27RsX7wM4Uz2",
  "key29": "36gR799MecYUgpUakhi7nNuBadLGHrVUg7AWZRnRmp1BPfSDcjepnfji4FTULDFXUXvm8S5WTpbMsDJXkUj1vfT",
  "key30": "2smip6MBwEzeprXLr6DHAv9ekWFqg6Kac8GDTLpZ6b159QRk6EFFkYWTKWdoNBqNFKZZqFaNDkBKxCHGKBjMeJzw",
  "key31": "4gFvk66LA4eZirBtwLqKstkafBMQ2LonwG6Bg9RBFZimxyR19msxjQkaoxMVuwp2HSdpsXjBCR2stCBzfXb4EaX2",
  "key32": "qJ3kd84TBZCrTJqcsFnoFDHZhnzf2LjXs21Ei7S3R4kReiegsrTpskqVdAPUC2ss7axf5srXyfBGy9JsyptSjta",
  "key33": "3Mr9AUUMAJnQw9g9bReemK3iFyU8vnbKKgNgm9pHckiGyiNU6FcByYBY7d8XtdWJgaz6qo5Nrx3Urfetw6ihaWhC",
  "key34": "2yDMDbDQpVkGSgPJGLxKbaPdhKkpPRCJs3eocntGN7bqs835NsmsJJcY9U4nw7ZPxZDiovVKiqwVn7FCSvDPyEeT",
  "key35": "3Hkz74TsCy1CG5jCsrP4N5CPvHve4PLZnRufdVy7HLg6rndTRmY8WZ4DZNfDXdDnCet2ncwAT6Yro7Eup4nek6Un",
  "key36": "4BHE1TH2iD7wpSc9tnJQcATsS9WQ5HMXmydfeVbFuEKhRApoh52KCnRMYKyvXYR7i162PCuc3jwHT2tjZTxFNqNr",
  "key37": "3Q8S8nzPgH3Dy2Z1WzMQByAfJKiBzf4Hw1jPLiKA9b57vuf5pRBfSB93SVkpqVjEDCNSSBESvuGPzbcFnmSkizT9",
  "key38": "3qx2k7dEeS7pFRNXV4qwANbVfE22Q5gbV9cG2wdcUvc8XdtfJ6AkLa3b3WDZWhsmkopjKHJt3586nadFqh2QA36T",
  "key39": "4gvd7aUNhZEbKHo2x5Xh8aakRuu2s2prvWwCHAu81wrTocyaeHqokEv9KYeW1qhq4GYSGBZgEhfkaD594maj1MDc"
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
