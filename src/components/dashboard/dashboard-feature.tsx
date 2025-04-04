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
    "2W1YDsMuaJjDeAzqhzgm1SkRdQpA51waUAFaWtWWozmNYR69NWufk6h6nT8mb9krff8pSwdsQSdqc492YKKD278J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jgv1qxqjSyR3WMXW6Tgd1a9m4bPZhJieucrZEbxj4VhQMe2xZQgEUAeqoNEKPQqWZVVqSokm1XothtatTdExpXe",
  "key1": "4A8EdqAykdBqk6hS1BVeEM7CZh1EQpWmPJCnSRxFoijdraL3gSr1STTxE7jahzN1GXFCybQSRu7NFrUfU1MYP4ii",
  "key2": "DJVmHdxUBYwcqRqmkH5vLz2ZxxKYcq2rVHjYka2YzYEpEv97hJiTZ1f6odV8JzVfDCEtysDk1nTQjur57uq8fFu",
  "key3": "3VNC8WExBEZwrnvXpg67BjTGsKQhEUqAdi4xBhtUzj2GNxiCxa4dvnEQrtLb1q5nKh5eCdTw54bzW7DpoxbND3TG",
  "key4": "3w4XaoNCYXHrwWf2BPny4AEeKt4AQzpEFYzdyiLSNGMnt1WABrgd3pU5tG3a8Es3BapKLpaFJ56q9kdPtmXCqGYT",
  "key5": "2h1vceETtU5zwVhA8AEqZyPKzikEpua34Fuqm4BXXBR2agbXwd4mas2QUUB2axK1zGQbq4MDxCrSWBB9ZWkpgkez",
  "key6": "2JRWWw3r7iFLXHTcScds6MiiUVgjUpo5Kcv9B5dNw5CSZGDvTLUUSr9FevngTCwN6wTPum4cUxwVT414g2jAcFWV",
  "key7": "5rddoJvXy7z2aD4zJeePK6i2EavHG1vjHmQ3ALs3cQEFEkcRLiTcig4V8YDHdcgis6T5zbzo86iJqtz4CamXipm4",
  "key8": "ejZteC35e4vNmZ4HXQV1i76mDb8iQ2bSaH5TBxTWhZ48ZEz7aH2twHjTRKXzQE1ViaeJiGpXf76w3ZR3vWknBmv",
  "key9": "4RMqDk6bNm3ufYCpoBzBXcp7kfuTLdLWs757PJNhMeKued8KuNjdXFKiWtCykFDohF7tGhhCGfJ2DJ81Qv5Lgr1U",
  "key10": "DGBQ5VswZmHSdgsfWBAi4riNkDnyBWzs7emDpoak2FCdYhorbK3TeWN2LoWVLrC3eikoVGSiYNxCDkQHTBqjJ4J",
  "key11": "3GZsyExDBP8tFyo5ZsteL8NhC2H28sw1Wd8zhPxmxeWgNDCZBi18MNSjAWoFb5q6kLvph5nQhHc6K1RoE2taUKqi",
  "key12": "5hnGy5KPQa1SjKkFcj5q7y1fpyc1pefaXrYVhXdFjFQFopM15gkZ3aM9f2KotCeZr1QofYaBsJt1xAEwzbrswYso",
  "key13": "2zwCrPDhiitGc5U7hEn7dR1H4saDyo9QgvufNbtvR8JEDzxyvLukDXftyHyZU1xXC1cgQq1XX7KbeyLr9SDQP72V",
  "key14": "4jBFRHDowh6ZLCM5ncWBzy5E7ZYrYMxAKjvPeJ3Qmo5TJPzsbG8TxjpYdonthEqmkFT6ZYdWWCXSEbuZoKdRyfF9",
  "key15": "UcVNaRhBLx4BwwsVqRVsHUJghEEPBxAeSy6jauzPrBuDqKoNJ1kX5h3cotK2chGVdJtc6suFGM9jzScfdiyL6Hm",
  "key16": "3xa6AUiAdFXh1woML7LQHzAmP19Q63qGYckMehcGV4yQHk5kgr3sSyPvBsXer8Xt1ch4ZVJKy5q2FFXe66A7XTF8",
  "key17": "3DQysNmNmNyU3nVNaZUMVgtiasxGDVYRnpSK3gqnSWxyGuE8tmGeX8cEosowYNTHYDUW5J2vsKdwpniCuZ97UyPH",
  "key18": "4QCYhD73kmWd11hKBpRksvGxvBJxMJQNDVrrMvJfV3xctdBJ1spPREbUYasfQCtPTZvNFyuN72QTyXU7j6SXYYqT",
  "key19": "2Mh4QopJqDPB5Phvj1s3mEA9BaXBXYHLdckCoEAzerPyvWnfnY8E8eR4Jxd5HZJs9G7YBzM3wpCivp1Whck3t1Dk",
  "key20": "2T18xaNAPXm49oot8VNHPrV5mMrhm6A3BJ1zPiM3kdP8ZkkdX6n8MtgbjG2ijy5MnECk9BmuMAhKtNURfWwny4Ge",
  "key21": "5RJKed5QUmRwqAMf7AuwQrRVUxej2ALKbYYi9hKhGHr15jxD5ahT4nPsYvJj1CexneMMq5Nmc7ewhJQNmRRFo2yX",
  "key22": "3tgHXfu3akwxUjSV3RUBeWdMkXPMNdncymDbmJMCUsSqw1yutMeKqRaRfFpV6uVhGN383dJGTRXQSfLbiSwh2yTZ",
  "key23": "5TrVudqaW8HYr927p1akGFimaVR15hmCTtFoVHQ7ni59XBVaPNnHKCo1mKzeUvNgm1HkvTF1xqkvGETYUX68VzQm",
  "key24": "31rpj4CAfotdyDzvmbLaaxnyPgYcDDrNPYbGnDvaUywdYKjbgZf1Lp9nLoFJCknLRgob3gDnVRGHQXhsDpzJkfM1",
  "key25": "2SRyizJrPuVV4badsxu4xm3ZxZHABtU2wBseaU5b77NaWZshkhkivn4rZpEUyQJNkYRe8Rq8EF8b2KQDz3MnNtcw",
  "key26": "2TLgqnq8QCjRkWfQA1SCoargQTbJMmpHKWndwUaP5TPe3dEumYzMLxeJsmcdKYLSRt2Vb8JXv6bwbomZjEoPjhGW",
  "key27": "5nwbVSwGLod6HmjGyK91F2KRzENzxMfiftC9iyqbTvEztvgdkmw5ETsXFpto1zYvKorTQFFYqQYZhpYvMfaKbmVA",
  "key28": "5WHy2NHE6TAVjAFxtEsGKS88y3g7Z74dBxsW6adinK4oz13HT3ajW3rhwifpmPDqhwbjVb5RLUQTAnEQTef2FGho",
  "key29": "SxDDDNU5gjUcWDyFbuXqJAhiubX94x9WmT8T4fBnaMxrJLSdBayc7ZHG9Hj5WEFUgvEQxKhoag4AtiXFqZ8Kh2K",
  "key30": "4o14YxEoxJ9VUGMorFDhTEipGgFZxddp8V911YnUsoJqJux5vRV9R1veDptiGbKHabRL9hMAeVmMNUeSrJNRUiMY",
  "key31": "3k1e2gfwp9zqFNDq9wScR4hu2ccY5wzydndV1XQPLaEKz85NAijdKLaheobVXzvjudrjhoqyqJPf9dXsX4y9CrF4",
  "key32": "2Lttq8Czjy3GG4J6dKu4QgZavE64e9cQvF2Htyv1hjVU61NvSMEvCtu1Rn3q8XTHUituyufdeiiEMpRzyw67WLC9",
  "key33": "Xy7ysgyP2nnzL7EEsge3zwvJ9FzPWVLvexpfBSdNMZNRJkTzqQhYcWMY3Fh2n2u9EUyoeAVLKy1VRMe9X8SedJ1",
  "key34": "5XNg9Yc2tK5ytruoCCGsGkZotmgRtBXQkcDE8kKEjBNTomGbhpQUpgYy5SwtC28BqYA8WpqpohBVTPy7VDiSJRPQ",
  "key35": "3WKHwvUsCdr6L4Ho3HGMrCngVtU8vhH1RPHY3QEvp21zWXUQ1B3XjGw2t2nDmAP8fvZoioFziMztTJP3XdkGnVPZ",
  "key36": "5gAuDMywCkD8Pcet4kJJeZe3XKMVk9zZd7z6t3355zXynsBr5tjTY4oJ6WFF2q8yLJGu6NtEeQdPfP4HuvcEN9fj",
  "key37": "QL77koGFfCR62H13TkS9SEH8GkbfbpUCjvtJHrhiRZCCJG55LWR6gg5SWzSfYpdbVDeMaLKvUojshcZos76SX3N",
  "key38": "2RC3cQWbNErVzT4cG3hfbcEE4RPvtxTXotHwJfcz8oZLAsGkfPQvnVUwdnR4UUTCvFpvyKwkvvVTr5WUVe5XdNYj",
  "key39": "4LFXHacUYNAQAAkyZUWGSascJN1j6siSn1LZruXWwf8XiTiP2UDSd7yiS93iPk6rWizzBqMDnhoyUvY8Cu1eaqmc",
  "key40": "22RhG27brgL6a6cWFZeJm7e38WgoFFKVa7e2sVgnJhutcBpeeeJmaksJ4BgNgQPYSDarMJCrS4yJNccgtnKFR34P",
  "key41": "5ky6knwWY1AJF62XswTfAsNGLwL3uEKnXunLrMHkx94VUHQNHPS2FprKnr5PcPaKVbMfsNQxSMQv8C7qvmnWhcnY",
  "key42": "48pvrsemy13sfyxo4gQKFXqGnoYb4V8332rPy9bvA84tUpr6WWehZuu6izk73eC7BFEe9NNNvPir7BAg2LdVLKnc",
  "key43": "fwkSjaN9bTvXHLmH4mUSHuoTbik2iTRVTDDXPcSbEiq7ZwXXp1WYB8TpFwvzMnrk5RVejaVGfN4Cp2d58aQu2fM",
  "key44": "5FPUJDbQ3eaPqzPa4jgsGgpryQtLnaXbvHMd3n6ZahPGkSnkLvUJZhf9GAGQcjncgsCBkxkYb6ei5VKtYAGrC4PV",
  "key45": "5tp4bDNhboDFV8NnKAwt3Co1Eb7SM5tNLnVRw5sQEirPtEZrtdzuhkNpLctr15eRJBSLFHVJmAA1SmgZ3yzecQx7",
  "key46": "2m3Q7xb9VcpLz28GqoRDECf7EqEzjLc7Cvn4hKwNCH2oBhi7sh2t8rsqLoYRDrnhwxmU1LzhGd1pLfvvDe6mCMQd",
  "key47": "gpBTfoQpYWBAHoT8remB59q4yuPuTXMZ9V8DJERbT8jncUXi1Zf1G2TDRvFW54hkp483B3cPE4GgaxyQrJ2s5iu",
  "key48": "3dBQTz9NX19JnVthRP1xhdAyoaes94nJ6sLUx5Sc8nhnhaoeEqSDagoS7sr74Ev3yMwTRppDg43xgq3mi7GLEdp5",
  "key49": "4HYTJMKkhwadmahPosKaXXokxqSXbMekRswX7Ea4ef3mJQCenJVU34p93SwcW6PJidWS42EAxEYHYu5iR4WyY7Pe"
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
