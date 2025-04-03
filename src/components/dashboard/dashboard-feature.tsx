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
    "29CZeZRpqokhWEQmhKxJkwmByCJ1LbvXqSFhwRXZUZkbxdWbJiqNE58AxiYW31YkDhsyhVxjcAUefzK98EqHWiwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rFED2yQDwqBo17LZL1b3QxvYcLpWSd2FYdKoU9LujvQ1VAfBLbND4JSU3vFNsVtSiDGUhzVMJnHWNSLi3wwSpXS",
  "key1": "4szi8g4ByDe5JUyvsFqA2nud996VzanWtN8kZCQxanQJFd6JT12ewxVMKsVvWESKumHdDbMEXpJsmxfpir86zbeC",
  "key2": "4SqNKeEyXmX1RgFqv8royJQUNT267uzxxSipsVwzMpH1iicHtM9yuaMW6qFFe3oUTXDw9aFsLatxV3e8CUanVz8T",
  "key3": "2U7FgEQyM4pNgBsf9A1W8Ahvk9bP1SNLNo1yxc9Yx1c9it9UmG4bQkjNeUsN2nLsfcx1wBerojLwnYiP5yxJ4csd",
  "key4": "3uqGsqsm4bK5ttZqPnwv2HTmAPFVW2EFvpsQZGTGZgPE7YJre7zBn5eTKjiFH29qD4QxqBy6MHGK6zYngomVViJc",
  "key5": "5gTFrJbHZhJHdVtBf39c7tgEduRqKaq9GZyczCT11s851k3W7CqQVXD1AGDPAME2x2ER45WqQaRVSKg317CX8k94",
  "key6": "2KKLZx4x7LUXi6ujy6E13UmNifMkr5BoK6arm8sUmZeGgABdF24KQJdYwbxhqPBJ4pnYmoX8FFgFQrKpWDY6h7Pz",
  "key7": "5cW9rNQuXNE3363A5jxEsqoybei9hLGLp7B5FEuHjMg74vJ4ZJ2m5JTW4qTM47wuTUQviMuKGy887nunNxDTw4Nt",
  "key8": "4Ee31HrHAaQCiqe7Pz4Q4QemaF9fYbSKmtWWSKEMjBsmPVQ9PBpo5KC3T5Guny62MKyJscvbBU8i1de85KeKzApd",
  "key9": "nyhbLcF1pqvn4SiFu7qbkFhDY1ge1GVii2SFsgPSjhJoRG5GzeWXnnKrJvC8hPKwnxryUSsz8saGKANvskLyT2s",
  "key10": "36bEN3ryxTaQRo7kpTbCiRDajaxRE8dd4ZhcVcYQP1C3pyVw9cfRxjh1he6HDuNoYJodnqA5UWxEAqPycLfgjGWJ",
  "key11": "2vmNy5DaQnvpkDMccnpS1Nm7vCfo3UqcBknTcUHuqU4gdMvSMstcGAjGqDCDkYH5DffpCjtEUhsytL7exNdWrWWx",
  "key12": "8TfiXo7bj1bCupQJJyxZNWfTmsCKpYuwktQDfxxNSzcqK5EYedei3kpjLzvwTmn2eY1KK7isfFRmfE53ZpnDdAS",
  "key13": "aaJEQPVBdrF1jfb7i8Jj9a4Kbq1FDmRhqehVrdqRF1pagVEGuaAwhGkzdSBo8WAC4fyQ72DwX2dNbyHAhW75MFu",
  "key14": "36bZp7VJmjLC5jaCVprM5FBAdHQYLRGNeUR2b6wPB27no3a6ERo8YjfvM9rqFHwJJ1ViDEnYifXJ6MmcyrPVM18f",
  "key15": "39MXqwyfe7bTeGG5Dt81U1ZKPjHsCBHKPXVvVWbbuL6avrWdKYeXeEW3voA5EsjmZcTqzzS25yqsehqiVfDzja3t",
  "key16": "2QVAUZLN2qVhHQ2K5zz3BdnSYrjHHtrzCzFMeAvjhcruxBV7NmrC6fpXBq1UrkwDFtCDnVJv95b3i2kZ8rQxKFNS",
  "key17": "5hx2uPicRqdaCFsnMsiJMzozZ6fg3PYrr8pM1RLiUcs5Bn4vdDUa4H4AVtAm2oGujkYZG7xnBajxiePKjtGD9Xy6",
  "key18": "3yRFqAvsmUGCPZiwmJ2Nf8i3Bn8t4jVUnK2Bi6hXtnJ6K9FTynXfMDkGUAbEcsTk1f3ZdyYMKAvhbzRgE7HT4zjr",
  "key19": "5Wkmt7AW1p8hKX1ocy9EM5cgijicMMiZ4tCtQnfvsUCJHmiRoigPgMcHmibpMzjsZwntXupXLsaYotn2UBNVwk5U",
  "key20": "7gRtfFwRyyvpS2io6R2en9J4igfExmy3YtuGiQ3X6UHeaUZeWMWuNhKCAPTpTquzPs44NX6diL2aZRATkecgZfD",
  "key21": "24xgcNeodb7twWcKWDzdtEvx8dYsPw1NoKEtCj2NT5iTdBq67RLRnxrpp2C5Q11JkDQzCqPf5Zez9G3KsU2LjvDW",
  "key22": "4AasBJuiM5gPAUuLaLcR6WWaqetU75jMxtFN4jLXsXR3KsAkQtM28Xg56maZNJSnPoDVrt9PsaVoAEmNxvZgg6tB",
  "key23": "3NvNETZfh6F5ZXZ6s4dWayzjmMBwrfZ3D52NZnWtKXCqm4nuZ4YS4gsm95ThSF7XhGVsfTaCA82xiNxBNFsuvJJR",
  "key24": "YuhaJir7Qx72J8VEjUUHhVdcddG71VpvcAiqdJrvZEvgvh8ShdMfhFJEpiZ2NiDQSur6bZFVhiVBv3Luia3GsxV",
  "key25": "4pwwnvAjQXRV64rw1gh47CjgZ6fbiNnUcEh2JY6jeFEFc4icF72yqmEBfpiHQeedvb8dovDC36Ka1ouAbw91FnwX",
  "key26": "5ArHsYPVc1XAV9uVyVLk46B8dsLZWka97MQCnUvZbMcL98tTYSZY5DjGuDnpP9TwCYs9vpbw7GxoQDfsM4RatrQS",
  "key27": "GGNGL8sLfCLkMb8xdDtjfEYQpo13jasZZ72pchsokWFc3dxdoDf41zK71uVs3Q48Zz7cCNknJ7JuRSgCYNntBXj",
  "key28": "L65ByYFpnBT4dJET1GwutVydFxKPY4ic4iYqYozsRhsTCHV4ZBYnRxnNc8o5vLKX7NvJ7PkdUu13UZXMEDhknE6",
  "key29": "4En9hXp29Y6PCTnFWsfuYPzU2xwcXgFVv86N1Njwsih3K8n5PMN8gDApKyRLNrAupuKmoz14393pepAZ9Btyf5hA",
  "key30": "3a61dfTFbmEJST37PPvZAit5pBDuTE2DwJP7HEaMGLexYb7Gj9nrKMUi4jW76RpcznuvbCExCqdXU2hFxXFmNuQb",
  "key31": "23jAuMo6q8334RqZPXGf3oxw94qhssVSiKGzpRGY8vnG598f5Aog1QAujPE9XybME8JVZwzGo2HT1uuPWXoSxQNg",
  "key32": "2zDsMTwGCw3XpidMbYkbqAjqS9btZo1c9qfuE2JDaTyvKkHQ2Kd1sicqqxW3DEvNLjK14iRo2kCpSyJoF2bXvx2e",
  "key33": "3BDHRx9FQ97n3TLopocEZsh7uLpiJZnhWY6pKDjsuqBgjgUxv9FvFinP9sdyiZLtkPGQUxcQVbMeGBUtpvTbbW94",
  "key34": "3j3TQCyRwJjbwbZEDCSWWZbHTng2t3WuNTY1rWZqNeNQJUiQyCLeTPizCgwFK32CZYBNj2k3RZEoSYsPntT5zTEE",
  "key35": "mEuX2TjqKjmvsCHwWnfx5NEN1yakfMcubhvD8bGt3KyQmnEVYCfPYrqggdsUV26oPFrkQfA9cZJHtQe2NS6v8ZZ",
  "key36": "25XV4Ek7fgUqfyMfE3qQkVETHMXqzPk8PEoJWvuJVDWJA2ZdaNzCs33muHDzp1AbakNKxSMBBJeDEFR92aDo8P5R",
  "key37": "nn1JRyi17ZBuGZrb7BhiSwkv4p8Kkqbka6qGiw3CCGGke4EiNYMEtCi67mDKTS53xHmaMGcYh9Bv2E9SUi5y5MA",
  "key38": "4ZayVHPpVJz9ZuakmRPkFUsXfddLE4RCvx89J2NCtKUYnfHzCfTg4ZJKV9PPCz63Z1TyhoRzh26b4C5eRJ8ufSuf",
  "key39": "4YEwfDSuknHEBfagiV7YyTrf4xLmH5pitwxyPV3v75gB4A8JvZnSveqqa7BRd3XxLHXLpyckSqc2ERT3n4QnApVF",
  "key40": "5zwZ9EZV2FmyDAbfg1C7MYwrmLZg1Acpq136dLHhekmCD5GXd2Myw2ukFXeF9sRViPRVBL19wwkkFQWhyZ9vnViT",
  "key41": "1kNut3jgNzf6bxZzPXQGoUDczfvKoPW3njqUjZkbJcDcBTLtGKnegY813RF9soNHzVp7p5rHYJowADjtL1iMAYy",
  "key42": "4HNFjiGBQXWth4qP7rLLqP9cmfE4nSL6mLVU5nDJ9McgE9esuwok43a9xxNXhtT9hwGyqPSFEfdjK9rNHVLCdkdg",
  "key43": "4s7jvhfrLpAbZSNdYU4R6aPYbPufpLBPwQ6ARod2RqffjNAhjLnr1yFUERGLt8Wnm7XSG4zqieXvBHJJ1Ekh7fhc",
  "key44": "2ZJxKWL9tgQeQm55WCkY1EjhjqV1GL7Si6JvLsHYCQpvfnB3bodP7xPDk4F3EKoYmhx4W3ufokfoBpUPYPDQtHsk",
  "key45": "35nNACAjM5TtvUpSuyGYvi8ogMQ1yw3imXQQ9KEcwBa6yiLJVV1BjHgHfgMWeW5TJgv5Uxz1qXZrDa94q5nEsrsk"
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
