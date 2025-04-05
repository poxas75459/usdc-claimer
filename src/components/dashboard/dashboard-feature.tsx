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
    "4p2amRzBtWAWatGw1PXytTLFb2CvcNbrm1KtgY1vPxQd72UUms2gS72YVVnGyBa6VjJNif9ooWaTcMeptXD3SxrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gstHRUyPZWu9ebjv5eCL1AxeembB3Hfu7VBeB5T5uz8ev9L2UMdfg8TcCDMKoujxLqqHa4guXbLjA6cnGJPHLkL",
  "key1": "5qS3LaRUBkDqTawsn59QTkNHAmkEc9n9XwPCaUZcpGfYhzKcLiLnT4kZunKRAodtVCQJXwN1sdbpaLUqtM6ubTAs",
  "key2": "PtEnmn54hz6FrUdBhudXhro7vE979XWDAS1RPvqKuTDebU89EkmeuyHyyrG947La3Ukqa9SjTK8GP4gMWa6Vz3Y",
  "key3": "359ZZkDg58SjCp5itKvAqTvwczx9rj5V1iUoLPUm1b8t52BG1M9AYwwxJBrz1zQx76LtjWTJQBX2fix2jF21WHP5",
  "key4": "2w8R17ngVBBi6Jxn8wS96DEsYAoEujDnQ6UbPoquWAWd8LHYjwu2LNHXqhkJNQV19Nd3Uf4sWaW4xELzV3y6NY1Y",
  "key5": "3NiV6JVDY9ZdsAAdRVdRwW3GG4Q2FsZW2sm2n5ufRQQNYomJU88LrY5NHjiDGWt6FCyfv5tSRz833aGAySNKMmft",
  "key6": "3Cy7TTUBE4e8do4LdBeLaEN577UgvHuEfZC5zQdYWMYU1hQ8KVpWf78ecz71xQ2gUk9y5DCxer3qvNEDjidNvLQn",
  "key7": "62gbZUdqaXAX4A8oMURCY95cd7U7dF2xDi9TLScJv9j6wWtVUBftQxxftcVxNFtATM2zt45mtSirrWGusKkJCZq9",
  "key8": "CVPjB2WmrF31v88DNZN2qWLd6dRVMp8TCWFqGeEEt3RSbEkzBHGkhgDit5dgxsL1cC1JZu65L5WA78qis3e8w8t",
  "key9": "3QMaTtAba7dVjQBbmyoawPrUtf9gGnsWvNutudowh54XyosiTGsE22UuyyCH98tWDMjL7fvJLmLogdCHfdvpBC66",
  "key10": "2tLNYbxqT81EqxDnZp8FzAUBZSr3ocUgd9q4zYj65zKvr2aSkmrmzhHacP7XFd38YGUHrhQrJQteV8fN25oDBYqd",
  "key11": "2zCjexeipwFf4ACMY5xQDAWJXVoYef3WdNkH8y6XbFh7RL8JkMpHYimT6hWstf1GBrwtmKTrjizQ1bKCVDLZirTD",
  "key12": "2ZJ68csf8qhoY8TZAhsgZggVnaHHJqijj4DZNm2ibWghKKqGSa4i1nizq9mQtxcyC5samqCxpyY5hiC1gCP2whk9",
  "key13": "3VxefQG1tLHPXfhSnBR2TYiTGThZNg4zUeLL6xmJQ3ZJ4rmkWhLJJUsphUzG12URpSP7vQdxBD9bFeT2vw7AaBhs",
  "key14": "5td6zYahbmaMYDzwyqm7ZjjiufYyexPGr7GhaqvSfMNNpSh6cY8wMzGk6GN2MU4ut8jXrwaSxYnG3jpjsAYSbNgw",
  "key15": "5k9E4shnh53Qqvb6neKtH2b5o4RodStLoFVsFR6j96UhbHjuukpGiWTU4tB8q94Mqpo2EWutqK262Hubg6LCTJ71",
  "key16": "2WQpPUYvpKX2AzSAERTfcEFjuu83KHYQUj725wPsETBbBhBA76tgUk2X2HLZHAACAW2opLWttMgexbEKCZdrjN1s",
  "key17": "5p2GN2deH2bEKc2jpAnEVZEaYXdyjHiVLJRfrSyGov3BiXuVowVf4UPNjZsGUvnWRnBJ8DqzPDE6RxJub8mkNYkM",
  "key18": "2cMgjLRbetFCdqTodayQoEwoebXEJn3QgsnDtck6wZ3cqU3rE8yCyW3HR1VPm8PA3J1npYz2iiXJfwFaweJkf3xW",
  "key19": "4r3Va8nWn6DuLw8JBHJ9pbZf5TpLAPudZwh8sX22mnS3AUvPTEGLGR9ivFzirEQYRAw7siT2wSFwupybXUwjp3B3",
  "key20": "5zs3yhq3vFczTYtCz1MmGHb96PpkQw3LouJFb3T1nkaK3FViNuaagsRnHctdsY5EM4r2xdfKGFJGS2Li9DPQt4v3",
  "key21": "2HcttSGG211wvdhvYkQh9fLWbT7FPeHcjNQE9Cp9vdc1xW8yzqQ4t9Yk8xtEHjQLHRjwTzfWFXe8Utw9UN58qUJW",
  "key22": "3cV7t7YGVgySyhWCmZm5yxa25xVfaHqHitRRy33JszNE5BvjkNGySeEzFxwwru71n2wo1baRzrsYsdfnGfzuhz6p",
  "key23": "JqydE5me68AFCRq5cc7S5sAcPCqSGQey15GpnZQMjKPB2TvFUguiYgnNo2z1NhQeCP28EEyn9kEQQ4pSWscLLGS",
  "key24": "2KM5vyDRCoVYpFDY67SSktRt4w5UNNeDsfb2vXqp5ZhpEALAhvPE4d9AEZu8EEzTuHvxBeRqwnhEE2ju7b5QArtu",
  "key25": "5GzDWBWWSbNu3atw5nFnvYVyZq1zxKWWFAtBC4bbWG9568KqJbV7aNLsfaSNBNHmvvVgxDBUkvaTqbet3zrv6obL",
  "key26": "5uqVH228AwALcEscmxxvvPvPsLrmxVKzo6DcGrm69RzD85m7Mmo5cVNDNEQqX6iZbMvt1uG72TfyjCGT9CEMZRcD",
  "key27": "661KVaKXLEg8aLb5SCAJgDf2fi3ys7FBgqyB4tUW1daJSSoQTqzZu3tpZLt3oi2QYSDTiJKkKmUVoDDLf8LBMh4J",
  "key28": "4hmPVoeNNBgXrmPXsQju1zda7i5p9QDmG44jc7L8jat7XnTFuiTVFmimVmceQDPE5K7Fw8ueoHtJTExymdR19beK",
  "key29": "4RYDBrtdPkk46Y9kuVXvSKHZhqTFA7wNTV62e9UbYUxr4p25FdamETRmRa42Wu8EhYZPPZXFMJezGicyq1kUgDHD",
  "key30": "4wBo81sifa4acbQwUEVuakLvz9HC36phh8JeTLbCv1gCZp4iZoafB3cj1YA19cRHc48QTqsC8LxrhqPZsimJMt41",
  "key31": "4X2gsCDcbmjsKdzgUfoxZ8N3eKzMdBEih6NUdEbDrt9xrxkDSkykBtu89gPQk3u5zfGGDzUxzu8QuDG12bUyemcy"
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
