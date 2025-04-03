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
    "3mSZoMdZuZbk7Sj4jZxL4dVgRLu9jKNuXbDgbvkUDCeBpUkLMkfruBznpz6YERjhfhBZLAyrJGx7UBY5ScUDpa1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44LM8VvnbjNW5byAW8dWe3Kuxvruk5eqND2GsQmTntbnnHnMYUSx9S7hQTKTr5FarLtxAzAg1cvvimsiBcbALNqm",
  "key1": "24RVttqJePPgaa63iJB2JZ7mpup8rE9CqUwt21ye5aTnMHBuNwnwiXSGy2KLGa57WEyPfsLinhPk9zhewir4FvD2",
  "key2": "4Bu8vXErCavpRtgfHYTNHT8kuo7iMxfU8haNrYShjzRPMbrH5iQBdxHzzwHS9m5LCKg7tjM7THMPKHYtVMG3dcQb",
  "key3": "2u3ZLGfzfL9L2uXhnwMLiia1Aro1yQsQ4GhCzJ2WFVNegheP7DNHzV47nhxUNNnqLFspAzQ8sNxFaKaNrXfGKPFx",
  "key4": "3wUEEbWDWwmroPXfgwCNaiML6ixArnJEyoxa1NKPR6hG87zLUCRyRXXFh65A4EgoVtZHwqG8BTn7Xo61vmiUCW5Z",
  "key5": "4wNtLjYkFZTddnTg6pyUQxYk2PDHocrZoSHE4rVfssGJQ3UXGkUVjaRe58GsQsxAM54AuBKzWhyC2SnuLBhuFm4Q",
  "key6": "hxNzddqhZjHgbDKvEsw6ozk83hbYYmGDBcU2Xy12JLe3soT4oX9WbHyni1D5mXQzoemKyuhRqCbzVvjf9qY5nyj",
  "key7": "3tWPvYRcyfZaSjVhPfnvzgGuwf3QYfRGRpnPYVVyoCmTUH2uLGYshcMahFebGoKk651mqbVoa7PSo9H6yrX6uWBV",
  "key8": "2fXAao8hHstKx3ZGgsDdpFymnniKXt1U7UDpWPTbvv4ZFjtcYyLt8DccKXR4favDcEbMLFARwB9hRTjYRSZzKhCP",
  "key9": "22zct5NQw9cpuhPS4FCm7XjmhX6kv1QefkGXSmraZ4MFaijCghugvwXdoYSBdDreL4YRSH2QBCzBJH2CJzDRjajm",
  "key10": "sJvP28CyQmMvmjQRk9ZodZs5HQ1dn5S4joyrHrywgmNqZjV2WFDjXf3DA5KtA5DEx7YWZJHT5YFhtgdfDr2E94s",
  "key11": "29pzB1Q2Kx8ugpfyGdX9oGCQ7ftncLukNkGpzXoJzw26mUfiP12vNkqdJJPoUtHBED93ZDTyYckJExRcrzEXwEqq",
  "key12": "2L8MvXurmgS65sNRNBfKE99grFDZtQp34wmXmAzfafju3Mo2ivsnQCYz1uZPMXpUFG49UJKegYKHDQgVD5QzEd8Q",
  "key13": "5ZgxwPVJfd6VMYVG7GsEAkcBAQvT7U3CsjMTA51SU3xvdbCoVgzjn8TnNSju1FMnnZtT55oC7QdvEPacvGEeepdq",
  "key14": "4jxUqCrgUYy5WwjcJCbwWvKVPMfWGyyFmTdfLDdvTL573Sqt7YnmMw1GA2wxq56qLHNUn5yJUxrAHb5xsYa3oZHD",
  "key15": "2dkUP6PQqG45c2BVnDYos9cs733oURdhrUaYwiTtmfmwTWL3CJfsbJKNLpJechvGZRSnAnzZGMVXhHB2Kme1X6HY",
  "key16": "3dJp2DKPGrM1PXzZ3mxjZuKhG25XQyHHGmPSVJ5qiBqWFTPT9KCh2wPVAKgpe2pSKYM69Cj8tDngy8ty8gARYvbK",
  "key17": "4nUL1dHBwUzoxjfPc3PgYSj7UB5Tb8UVSNun464scmCQAkRwyA3ct8ajGv1herrF4C2qGSTniUm8oBJPHLiqhgQ5",
  "key18": "3r1jdkZhTkQy42ERvt2pgQ14F5urp4hXaKPoEmwwcMsgHc3bNoLPsgmWysKfxYDodNC83ewx7bxUDjZSQ6QPUfPy",
  "key19": "32zqpcFrcSodr4xTrYZZZLMVsEPVBG5knchhvTcGu3tDfeJmq1AwSUpaVBcjT69uWmXezw1nJ68ZHLRYywHQXRue",
  "key20": "5nTngvoiN1pzczSyE7i2jAVRrrPyTukLt3jDFfUm5aByru4NDRFy2AjZc5G85deMHrCmzXiKUJRzSpqdndJ1VfCT",
  "key21": "4dmS19WBRWTtwkh26CwHNLkN9Ygyj1okXipZhpVtqg8FWw66NEZDWE9Vi1CFAfVsJUSgFgAFK4fTa2S6H2VvZrYT",
  "key22": "221dvGjMYJAYQmhpqdLdHuRYsmUwjDcUdcFVAbeeqNBGHURwW574qq3J7ca1d3EyMmZBg8XtnahxkNAhWdKwRM63",
  "key23": "5esA3PqbV52MMtQeXU3o7A6CvnfvNxWHQK8ij85XATNtF9YyJz1VgKbn3oFFmyWiQJEUWnwh6mtVtan5yPqwevYj",
  "key24": "3WDPeR6P97m5UkgtviW2tVSLr9zsVc6ogjDJ4kYAeRf1MFgUDPYD2awCoX9vRM3GYaZYfr5cYYtqEFzrhXVZzZX9",
  "key25": "2q7pnxbM3ZikKNh1RVDyvrw5nMqAWHSVRiEDNBahC2guw1p4x87mG94E7GvgiLYPHQvczL9dkeSEzi9AouW4Vpyp",
  "key26": "271dm4riEmB7dMBJSGCr8bgXrr8J1g9DshbkrX14RNwQoYKYbSonn7Cuz7qJGUXg4KociiAvfk6cLcAKHWe6v8Ax",
  "key27": "4VFux4hVd4h9TnjC2o9TRmAJBXWr6bB31TXSTXvvpRGx1uzdEoKE2fgzHTUxaFdvPiiMrvCBJdHsmaH2wXCzitQ2",
  "key28": "2EATT3owpxexRcQP7SScDk2W8ihWz75Lbde6N7jSS8uUsVpuew4B3ZDoKyJUEqG9Vewrsrcf24sDV3B1majavgXA",
  "key29": "2inb19a9VBS5q5MrtKwQyLeVKrvH19qgvAgJJNbTfggAgSXYsjX49WQYoCUSMuW9Kiyo614xXzJDeqgDzhvVvFfH",
  "key30": "WuEsTfEmnMRx5Xd9tjxYhJnbjBSYx51Tpp7g67xLrq5yzj13yCCcxH3zJnSthBUARmMy8ZMm1TJZvuCNjaypgRL",
  "key31": "1i3528CYRAeu1UwesUjayN5yjHsX2aTvYMmqVoBhdwGtg6eE7TUvHVd6qhy9porAJhfN3Vipzg4pbtr2qf21nX3",
  "key32": "2wLHaQU9d2CCtxymKe8rYZXuBgGpGA4uUwJk8ueu6ZyCvofoGSeDXYPfkodLmyQrWU78Jwmyx9v85j46yBaz5Y6B",
  "key33": "yngGFSCrjqx67hamdZjaphSC8Vi2d6zcCxJQTorhd7jctCCXwft5fwTcNXxL4Ky3JLczw6EtYGM4SuQCFXkrMca",
  "key34": "5Jhsgn95cTead8RrA6hjYNdUqyMdzL3URKdTkJhfrb8YitxkhAsaCdpuGQHMzmxEEqmtmVC7m7bsd3vFUgSxcKPB",
  "key35": "5PaVuYDXkz1EeGjHYxmsoQYv7krNMkQGxjwif2sS6VCyz5R5xRDXUVg6zGzdwkPpqL8fQKgJqoMrFkWiNXdSoaGM",
  "key36": "3JLeXHFLKDzV5a3nhPAwjGtu88qzdy2kyQVrxaHsfA5AqqcBaaWZgVVhmnkYmrnerpoinJ1JpiH2p9JwATiC8h8H",
  "key37": "27tf8LbERvwgcgXfmk9KCLnazxhfrgU5TLjZ3ZgSaGEtwqbnJTbnNRvLuxAZ4uhaVhkFWTDHrWajCxuJw2Yjg5ka",
  "key38": "54gKz5atyLPvfDu3wPmHTTUkf6MdaFP8pQXv4PvRfUrddQt5mFte4L2xAwZ1AZXWLHP562LqpKM53DtCjN9Wpjem",
  "key39": "4oSrPVe6MtcUmfmYAL29aCX3phFJNDWs69J2WRPYCQ3tPTjYCG9cC5azSXUWxXS1GPF3K39iZSUoPSyVdh38bvFA",
  "key40": "3X9nrS8AWcC39z7Da6EusuvZcaias6S1jf2cHngEumqkYUhHoaaUKFoYrsQ2LutdbfDGQA96kjna58svkF49itPv",
  "key41": "pkpSnHQ898XHxCMQPNpjccv7Ak9eHkPyDjX4NCLM2PA64YhAN4vqvcfFdtiHrPv8MLCvaQtuEYTfQVgmf5y8BUh",
  "key42": "5d8vQUW6QUMpouEmgX7sejRK9156xujZb8caaewFajsPdyjuhfjtQ3Gfsy14PtvWDy9k8nSLVSHv31UdFQJj5jYG",
  "key43": "46GFWr6eHdRVedXTWphpMJqACR3eAk5eTxbEvGaRzgJtGcZp8T3qAkuxJLrwKKniBVmo11UuGgaeMnWgr8oZcouK",
  "key44": "53Kw8TrTP7PruPQmWjsQWrEHJyoPGAhqcyG5SC4qRPTVjHyqmX73e8vo47vQDCPA4mSpdL8A4erUBexd5usejPSd",
  "key45": "3RC7TaTrwXc14KuMgitggrP6wkit4sX4wSRG8EuzaSf7DkyfCY5ZAyyufC3tFwJiXDBEpPHGMHoCuDXDxHHh6PT3",
  "key46": "4BHRMTqDQTGNTNNXL1jRM9QrcoxZmnZ3Mf3ezHqmNv12kX5XBPkLiFaN8eC2vtYwzWhaG3g6eDspPb14ssn9TqMc",
  "key47": "44S2wfpBnxfywajxhDqTn6wDGZrUkwYsHq3UcGGkehRd5ZhbwBGdAf5x1Y8A4q9bvwRdtfR6Aru4kQ25gxc6wT4X",
  "key48": "25aisG9oLpgSrYyxPdHdJzM8ZyrwygYut2JPexdtgQEBedEi8oBR6Qf1TyPDyj2v9tz5mDBkm4TJu9tP4EMTzTco",
  "key49": "48A4b3eu8wPqh9UoD7iX2EpZRrZ3uejBGi3WcsMPxJYf4tfYJxRA1zSR7Qm788tAjxAUxhUrF51QCDyeTJRq4GZf"
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
