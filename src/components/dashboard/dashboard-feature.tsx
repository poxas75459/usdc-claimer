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
    "5UcCtMeg3eTCY33gbrXKzcFP3pGAVLXXsXLgDiec6zYeTKSdveEoFS8R7B2qcXPNFw34F6mzcosXfR1wrjYVZLP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3czADuRAhRgxq37fZL8DmFmXwnPiFNPtPfphMTKoC81ZtPTyBEY3yfPiPz3tZ8nUxRVtj6MdYjYSzLZqQSkqfyin",
  "key1": "3CUfqd18KdheBwnQuMNTe222cNUnDn1mb1vagApyeuogXkSPFnX5PXfFZQ3J8m5DT3yUt3wiisRaM6pwr6cNJVsn",
  "key2": "26nWxcwQZexDj57tjvUujFKN4g9ebf3gX559KCP2PuR5BLgU2vQK5TSqEM9ZVxZHypAuadw8HhQrNAhdDZE1TpEk",
  "key3": "2ck5aVaLTwDaBYTCbVTiBBNQ3gopi7i3bfrEsGnFYoCBSH3ds8NmfMYRvioWRah7jFqqsi9qw4fQCuiHaZXbqVKE",
  "key4": "2MFLnnqL6QEHxr64N8ucqrXZbUVeUF64cJQJvwsQaNdSgrVQqesoTuJKAiQswoZheJrTYdEjCtdSNLH4hJPpZ4f9",
  "key5": "5YNzHn6CB3GYptxzDsRzidCfJAktst7ANduJpMVJqYdyksDcY1RCaDsDbWT8oinfZgovUhJKKzHgFf9vh91iymaE",
  "key6": "5Sh6NDkTKSrkBDU7BNPPrhpmpKNZZWm3RLqqoPSaHrkuGZCSfLB159o9iWa94hg4jRJpX8iHd53tMkfgeckiz1jH",
  "key7": "2JpfnXQuFjEnT8m6rj6cB95NWNSN59LmfegFegzNc4JJrnZ8dVKsGt41wd25Ki18g9YjgS5J26Da15B6awmt8Zsc",
  "key8": "5i8j9gizn4qKQjYs675rsj5pTgYCs5TjLdeztQMeqhigew8GY3MNFNsRZWbxu3X4toASirwqcs6EzP9XSP7SfeGM",
  "key9": "PcfZxCzvy25SWGgc24E3CjVM2M2cgRiFCKSJTr6e285Ut5Vz5F71MWjVyAPuVxCCupeCqAx8KvNbfg4H9yfFH61",
  "key10": "62Tv4E6r73KKR5DgYMHM5Yyqojo2g2S4FNTBS8xi8No2XauhQ3WCagTXw2xLDqNDEsnG5asFvRMj1HAUQ9H5WcK2",
  "key11": "3Fc4tELfnaVyBsCFJJQu9LyJWdCPL3yVJPjvLPPLhxi4FFT3X4hMBY5oScvKNytqkYpoLApUJVkvRiNhpWjQwGo5",
  "key12": "5GMwTXcJCTAicbPcRLG9mnC9fZWTQpRUaQFGDNpSFK6JexhXA6pCrPZfNVLuukFnsRqesjqrvkoNazgaCuhbyU7D",
  "key13": "xt3k6gCY47nv7pvxg6u6eBZRxcfzPRm86AHeN7tfTcB51ZdwdRXuK3CMWkn7cuEot4jyciFuPEnDWNznq8Er9nM",
  "key14": "3fttLcxMVZ6U2UyuXWU1re1qXkWy9geKK1PaMoLssH3GD7qNSHhsWjPamoBvkWgpwcigfE4wKybmLZrWTk6AXHy1",
  "key15": "3LQsn6MHyUWu1QmZUjJ6EJbdMUjQb3JSdQJrnn1FDC8C6ZgJnWoSiJh4a33cqeD89CwMfC2TqL4eqttmbcwk1dGF",
  "key16": "41b6Fah9rZCqvcaxHxLFMWWuMXq9DtVT49NNy4t77UuPoovjVMT4F1HP97BDVXQfxD7bJogCqSkKLoioSrPwk7Mr",
  "key17": "4Jd9Q8jtTq4GPWmeo97qSK6B2FJzEBfwNt13w39NnxNhHgEzmWUbig9v7g294wnzRbHCZktbS5z7dMKq7TWpEH8z",
  "key18": "4duEHH7Y15s39ECAo1XFoRhYepibJx9TFAjVnBg7vadgAYhrDpsqjWFh9WfdxSLY5AQDqTKvBmsTQ1AuwzDY5sLQ",
  "key19": "4C2rauaaqWxgk2fq4ez8HmxyuompshuyrkBwHBjd9dZwo15uybMb9dxUAFC4ggDSDVJtBEyubpagDZpvoqJqC6pW",
  "key20": "eboaNqKT2q9fsXGT5gaVWp4g8qa1XhnsTFvExMGLfUEXFsWGAEXm9XqL8xu3Cpejyz43vwMY1Hz7wprYc35r8u1",
  "key21": "29EezzfxdXnLZU8qEzecFvkaHNZyqnjvkqGSbXzFZGACjCBuCDCHBX3PGL7WR3fPCbESkqE7CVRRTb9vmFzVZpvU",
  "key22": "67QmuTDwFDUkvnT8cfuj8PHrzDCDadhfdUjZ3a6UXJJP1aaAyArRBrAi8h9pvPdcFdKDUVXQPVRbp5AfyZPAxH5W",
  "key23": "3hMutdsBcYZZDCdRmmgMxTzQ6P5Jyt2wzNkNsuixW3f4X6tsAZZxjbJLsHXE5CpDreRo4s4g27UhEEDQ5nbcxgbR",
  "key24": "2U5En3RDHysph9ud5GYGcQaZsq772rTEzcVekg1eLotbLoArp7SfsGveUm47XA2F54SqtN3ZGxBqiTY2FhqJmmrg",
  "key25": "2ThMCAa7JSyn4RtA4wY5m7d9UoBFuj2ZxTKxLTip5T6NU1H6rUQ6dpA3efurkygLLnc5k1qj1e37EfBCAbUkL59K",
  "key26": "3C7q1TELwyNU7ZXMnsHFC8tHBMfsHyD6Wp9vgJMyiLGpgAx2fNY79ws63NLhscxDXBpx1m6WAema6EigCu7FjpCL",
  "key27": "5MkLwLHH1xmzxGfhSAG4DoUzkXAvMqkgsjJbYTWjA4WrRJk7ahmQ3BYxT9kpC7VC5yKZ5Z1sdPyF5QSMzEFm55vs",
  "key28": "5XdzqekHVfmnaB7tWoNu8oxpotZQMGcJvrarNMUWKvy7r1KzRu4MdZaVzKQB9EXYmbWzY8BRTJL9BV81FKwWGCs1",
  "key29": "2bVZ4tMoegoSKZRmVQs92G6QA3Z7a8dcSMBsToKftywnu4dTd47bRcs5QkhkiyubTViZjq88LtEbvX7QnkxVseMG",
  "key30": "2TF2MGbLJzR8eGiUZpxXfCGaXuA4rgepH9eARfBKQvvucJyWk9GuEbHqxa4ksibhpWcxdK83PWMV1rw9uDV1gxYA",
  "key31": "5P73xtiJ63yCM5nUBoJqgSdUWd1QayQYpJP6p1GiaYTqktRKjwJBLLvMi3PQa6QoBWVsC8pkKQViMiDQpdveeBxj",
  "key32": "2bZMWKKW2vY6W6gSXWQmRz8scfjLZy4psXkkkjNVAAd8VUaUuxR84qaW8TsF7fqDQusiAnh4cQiZv2zRiucA9c7L",
  "key33": "2xiF6fhGi9Up4cvfQ9rx1x8oWCEr5HzzamijqJv8squXALErHoDPWZsjW5NiNKV73zFpDnMxA72Ua4gzc6uTYY7W",
  "key34": "YsifZUuLzCeX8PkrSZapXYzNLRyxGP2sBQGmnJgAQxoME3G7mpPw7wgosoCHi4oYRFcGJDvg2veJtsnb3oLvZw7",
  "key35": "5o23BgadMAA7akvke425x9YcmTWuKUFprM9WYstfHNTugWxoXD5g3xVPPHoPSfyixEbFHnUv2xXkV5MREyAKW1KT",
  "key36": "638hCbzBreD7tcQqLDqu6YEShkEFXvcQnkDc7zyqo9VzsHmwkmJmYsC1U4rnB49DvP93mXFBVYwkt6vJxBunS89r",
  "key37": "4iyqnKCs6AHCzdddpdu36eKXRQ5WQsghN9TWKq4QrUDHfJxyC6V8mn2RHKFCkgiYxoqCrXzbEpxMvqTurM2qqCng",
  "key38": "4hBfCKjW3yJuXzKprUdTBx5gANPELKY857Fn2RAYjVfWNDQWtRCc7cXkmzbfZZ8hHHfN15NpeGqCsR234qvp6mNo",
  "key39": "3pxvzjgDS8Mx9NQSTue4dp9kPBzgkv159zJQXuMxEQUGuaccinc71BDo9VBaAucM4Q54gM6a8Mn5onXWmgGtVjSc",
  "key40": "2sx3XbKzefR26HauBHdBMTJDgPazXggiHiCDuqibS54KNJ2pvP68dRpkFSpCcxo2JxHqvBYk9gjE3JSNRKALiMJM",
  "key41": "2hnL1uobByfTF2UMszPTMY8rQ2EpaoABEc28gj7LsHrftpbYTKnsM3F3QUe28QhDbwmRQTGFioKAs3viAFVyHrgz"
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
