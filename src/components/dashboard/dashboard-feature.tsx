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
    "Wmq4zVpQiBfRUrx2HCFYagyWFj2VrC1Um4aJAMBX7rmDN6akwBtyMuZjFXfo2ZTZWL8YGo6vV8nZhJ5HCeME37C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uWcjYysn5P5JeXtxuknXfgi1eWn7nWd7kdeQkskC4dAnRmtwiKG5XdX332mnE7zvF3rF19WikxK72iNS4qzSi4H",
  "key1": "4pvstybrvifzQYo8fQ5YXF9FPYWinamFTcywZLMeNzr7MryUkyLJtYXbyZrCtMC5UDHMtUAEyEpvisEEDj5PjCXN",
  "key2": "2Dia3XhUihAs9TnEqzffm7hzFgfhsA9XUvR3ifU1HtaRu87P2R5kc4sDNz6KG6PmKsaqwm8vawR6rtQSPNRaQn9",
  "key3": "5BSuePQjViUgz1QGtkp5qGHYgSbXcukeJy2j4PofgbY6Aswhxq1DyHRMDjUfXhaLW4MnSHkMb8Yd9HzXwkxB2EKX",
  "key4": "57VJeJiNXdxKMkDnz8VmbUgWNjJsnLmoK8Qd728mSUVt2kxc7AoJ2paKq58Z99U4f5MrCMpTiqaCDM2MNeBpTQF6",
  "key5": "4Lgy4YkGTXF28t8DbVxvm6YZ9tfJaVDvZgab8DWyekzhEWC9RUSKFdnCXcYtCemsNaae92owKqKpsdpN6mS4RSsN",
  "key6": "2Zah1zdG8DeT4pgaPF868pfcs3UFg9YNQh7yBByqjsNiC74vdrDBx4bMu55JFCD7ZqZz8YPgVSeACwvdb5BWcE1x",
  "key7": "2ih2RsjTJ8GqREoggQhoGEA8MT9QiUZe5HzudcdpoLk6uEntKvf28C1XmT3QYiGEu42PAUo1VUMUDdkpPRUv5RSy",
  "key8": "jArLjeHqZbSaAA9RFyE6gAhRTpfUyso8NRNu1GiS5FqtB5tPtEQv9hoyWDehRd1F2MoNCC3k7zHfhAciqNeeFPg",
  "key9": "2tuiRoRdobckBB2LyYx1zsWnr1SxxqXNgKdbKHo4XVLDJSnmVJqvRb6vacm6XLfoRrX1AfMCpBURCUB3nCRDqzJk",
  "key10": "4RgS6qNavwZpeDgAGWoE4ucA1o4Q1bUd2E3D7sFEcpS7LaqzfZsK2EnSD59k4ZBEuTTdEJmmqVbA9dRxMgt9xdtg",
  "key11": "4xmaLeXzpvTCDegBdr3H2yj68rZVJVrC1H4wy35y9uoFWmUXoPBxdar4MGQnDrJXVGgXV1jV5YU8GTQ1R4xkF5s2",
  "key12": "58v1tYe8awzfGkqHcuzCRGsmdnWFuP8HV5R3EauBi7wvE81YiDzQc4EjGcRD9qwuGJYgjB1JPEHktdNJpKX9cijj",
  "key13": "5QkPieVRY3VTwgyMEvdcxdrapdAqbcaxMExzMXD1xY9tzXx9hHw6x5tmPhL9ZGAYNPajdoRrwH5bsr8XHHNFqC5j",
  "key14": "3okkWe8kXgHAs4gAupagupV2R5Rt7E9UB3zfbNfToFYpLCttQDiLPenwoHFpEnEwkBLxAjQfKyewhATfvDavgvqQ",
  "key15": "gDH85V66CiEnTYvgsM2aRDAHEp14hcNedrucgNA9PpKHCBpgDhsRuraq6RPbnF7kwPBqM7uYysspsP8yodSE2t1",
  "key16": "41uDGYScvo1Bggq4QoYBcL9rzACQz6DWXxpjbWBscekYjVo4hM5LwHMkh1qxpxpjqRzBxCMqGgCJQQmLGoUxTu75",
  "key17": "3ZxG59SFsSmkXVzBDH3KHsCJnBCotqQFXVqKryxRHhrSBgUtw477JWfEMtZLL2rQzJLFZfp3XJGyNz5rv1H7MyuL",
  "key18": "2SsuorhJS4dTKRU1JxWWpdHJvbEmLY162meYTsFSGf8PJfxoVnjdV3MwM68wAqn8aE5f2VZp43VqZqgnwpZXZTkq",
  "key19": "GpTa3NzrrXGh9Cuwnobajo6LEphsfKVGisGESDEnZcB6E4umaZMEFXmXsQR33cg5yPxrsQB9Ysd8nQi7dACR4Va",
  "key20": "3wYQFxgYRCs7hT7Sz9FBhXT2ggY86sgZ6Mw5CHwiU615a4tHcj5ybZxdE1k9kMQnAYg98V5zhTwtoaCxHHY5vzy7",
  "key21": "5wxmjMPXhnojgVgCErKZCnw8GASXM1Yymc5DYZpRnbuYGQdbwappgBxNfmSTQsGaEQgDBAMtkpcvmJ9YHGZXaxc4",
  "key22": "5fZBM75tpEokNM1Z6KjBr7BtiVnUA1ots223EHmoqZFQvAfGa6Tivahzv2GVLzL2WRwde4qzesj5aTV25qgYfKGf",
  "key23": "5WHD7XKkR3oXa6D7wryqf2CcnrXXSLnvyparNih2QZZiiecc6zYahXRLYPpbaYtBeCzSAHhkaPzn9B9JA8chC4W2",
  "key24": "43LxKVxXicQdvdn4os3q8xmzdAjAfhCiLmAkBfj9kqYrPxj6eGBzsDWJXTEibu668hEaKSsEDcKjLsFFSqCKFMDi",
  "key25": "3nmvVJrdnVrAhtsjBdp2LBWoYRqbFVwpfGiNVagHtJw77TYShzS8eqpbUniwF6Uf15Th9GJYdXdVeJEika7ksxiH",
  "key26": "5LztdM2s1qp1MmkscSpLwbW8thV9kXGtC6iaTpBb3q7d6NVKEajmEViDFPo4mfqD7DGAsyjaMEBxzoTd5GjiBEgo",
  "key27": "4xzAgS5YtRSdmcvw3hRgzjpEEGbkf8tJ7ScFc2sh6PrEwf8cmJd1LRS4uqTGRrUqWkWcsXvAzHViv9jKUa8gCngt",
  "key28": "3XRUZ2WqHXCs1sWAgfX6LsJdzMxB4UPnamwhrtEsPon6qJiKjFg4pmWwcbMbueEUYcyNKu6hBH5iLv6aFoYZhvg1",
  "key29": "tHE8L3h5JzdxVnDLWmZD3VpqrR5LvxjtCRMKNJc6APg5w2v6G3to4nWADvByqnUk18krgYot99BNUNeK7v5vmdg",
  "key30": "UNRYo8uNhywZGb8okjUqCutNJrLizJTDpeE4CedwWTfrcsLSMvjqkTxBDMqgUTYd7Xqew3ZX3dDj6J6bv249mua",
  "key31": "rAFFPvBv5CWQjP4pb14bf4XZTBFtcw4fx2BfWbEPKdMVoMzJNf9UjJHE3JTG9onXggJV7k1TDKkMwm1yQLntU8d",
  "key32": "4DCR15REwmP3hQPov8sNeQkEuXFbeLpHm2658rM2PwrrnSJaX5jzCNxTPck12e6CusKsPn9Q6a25nBTgtc5UFFi8",
  "key33": "361H2dXrbbRj13oNy7ckzZEJei4McwNmbZzSaggtUbbpifeMSvhfH3qs3dmEKHW6aspTKebx18rRaoDEuC4SnmNs",
  "key34": "4AB4fAuTAp1GTYoRJyY48BHYJNK3scjML8HV948YvU4fw1gD62r9bbzwGqP3YVLbgZvczXzhAWUSZQeukEvM7hJf",
  "key35": "5vouKY2hgP1PR6QyDDx2kh4fp8dvEHAkhaC4u4np85c5jxo5ne9y5ithxUgcm3wwwyAiSFR6UebCgEFX5rSdLMYD",
  "key36": "4kfJt2zGb7tDTU4KAxcKSnRSCKbEFRZDUmCiCRmETJpESpc34PdR6MXzC4TMTfRK6NLUiZSXxVY9CqqMo3HvsJtL",
  "key37": "2eJXWkks7Hx7caMqBmzcrdoYtEczq5j7ehji2XiyHQ8T8JqKDoXc4ALwzoYwgNzBSEU33SeqZGShZudzTCWduCJq",
  "key38": "3HzzkZ6sMPC5X3jJNYqhWFUQLHvx9p8RadXYLgRX292XTj8ozXZcwaywkfCnnocsuG6YTAdhxsZ9JjtQ7SbMUxKq",
  "key39": "3hGTJvA2DWGeshRYcXeqG6Y7xNaGpFRssVmnUAkhtQ3aPtaCKTW8TA6Xuf5u2P1qzHRvXx1ZpDY1r1Jm6ugKhLT",
  "key40": "2iQGs7JMxhfAvRrbfwRn3ybVe3saG1v4KEbY4Tm4aSzW5TUJYaGZiq64BiYPkbJ2WGf6rpTcjym9XSGSc2iBDqq8",
  "key41": "W1SRVE4iJDXZWFvRG6br1rsFPALxVWsFUSmko5WRmEktKUujwgnLtuhH6Fn3a12qzEaVnT7PWjTDzLfhPXHRhav",
  "key42": "2quYXZPfm3iYAxoi7EndeVGhhtUEhMyQuGqVwT9t9dGeFs2oDC8yjpRturVYoVQXWHDfR84Rd5HurqGSey7Wuiko",
  "key43": "3jNen3BXNGFZtw5a5efTt7YFxehFhHHccf6sWyrq4hZTozrbzb7r3ayHo1qEo7h7Tg5U5y8hAcKdK1a1MxxDeoTn"
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
