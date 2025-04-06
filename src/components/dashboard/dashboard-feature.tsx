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
    "3wy7y4wfK5Sp5ajRBscDwFHm5vz65nzySfNkKK9bCYav83Qu3QyQ4MAKjnJBxC13uQMbDyJjpXL5e7KNHh3oQYWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UsxsJkXuHWVhjc3iNWwZCXi1dL1auJn9SR8avWNVTmufrf6bnjmfFrhkGpRewXfDQRFzSASDrjY4VX1C69VSZuc",
  "key1": "3jUfYG6atvW8seSwKmMEawBByocKnP1wa9GdC1X8aJTha2PG7MgzFtNcFx1VpEas3CrqkPbmdB1Jw9Gj8fNevM59",
  "key2": "2ZpDCL8btSPDVA6ZPGN1aTApkTpDE1j2csigwJdUFyz7jhfaCfbiV1Z3c11Q21tEQv8MBt1XYNh5yRb2SoxPohJV",
  "key3": "2P68ZSNpmgcq5Umycov4n84mghkCdqCnx5FtvwyTbbJRbL3raQHx77koRQVJ7A3mw2MPUmY7mriHyBnfhyjmPLse",
  "key4": "3JhzTedtWbm2qwLn7NQziBS1LFPoTWsDSqFyE9HdCxmBNVnmjSaD18d2FFpyL3obMvruCGUU7gR5SbpsYFc9VjMb",
  "key5": "5YPBfGhjuFmmdZt8LGd3GPtWSxBuFuTJmKzEAap32KJ3GZ3bnB4vDrfH98Kznk7Mkn2jQXhHa9XsXxVybh9AJafX",
  "key6": "5mMmUhsmPZHXcwTpk5uwFJRiaXCXinYhLa9y4qFVAqcf9bGHg6s2XF2goxQmdA9JBUrSX5KKzymtYjShSsxkR9yP",
  "key7": "3kkMAP6bYPUjyDpnSscYdTq7JZZQEzpMic1zXCtEsvSgCbyctkKdh2eYHYxbRbC9zABDqJxHdgsZ4jATjox9i3x2",
  "key8": "2vKowS2PmiUk7Y1p37P3eYYjBCXhWD9SpDBDAxtT8kBHgc9EhWsiRTTaMaSniDUdsFxDiz1ZSadGEqSLS6paBC9y",
  "key9": "2e6hTWY8Yzg1rSox1YPqjk3jdjXAiXSyyYfrfA86ose9TixxW4wr9pWohpFDCH5Fctr1cwwoKH8YRvezhJACoBEh",
  "key10": "4nugSHdKcPCeQL2pSd8fdR2VkghKm3bV19dPLhisdHpGf4jQJtTdXTfH9R3uFTHSzm5VtCop9M9T7hcsky4ooXSu",
  "key11": "4ZVmvKh5SVbckTvSuhrxGQTPVMB4HQ1MWUV5woZT4nvLEt6m5Pf2sXY8P3vHtdXiKeSx82wujZVsXx6zMqhhwwvQ",
  "key12": "27equked4YKahySrHLuqcqJS7y7e54FKoUySBo9ai4h3oLugMpwQA47ZjdscVjgaP8burHu6fdmDhYFvKCyuBLEE",
  "key13": "2ht3ikHN31h5PfaWG7j517RTTWyPbdn4epskkJeSiyKbBqTC2CWvYX4JKJu9Uo9su6eAFrTCuR4Wnoqfm3TMhA1N",
  "key14": "2nLgbNeTiWXUU4KADf3uUWVDJ5tDV5TxaM671nLU7SQa1H5gdGb7TztSSPoGV7Feue7TKgooF3SMErL3ykszCe63",
  "key15": "2MmUchST56fqh2MFTisrJWQnsyZWLtJXASXGpNvE2575V22bHEEBMLdH7Z5h3Jyrv7yCwr3QPFwZ66zrFP2fydZz",
  "key16": "5sippE3bHR1oWJ5s5gugjg8Aa7FUKt44TjGmAwxpjaeUwUeD46A7GbJG9aYTBVkDFFQQV1EbpHmEKiE96Y1YZ4yr",
  "key17": "3vUQpGhd3UaZTr2vmoPnK5RPY6ukSCwv5K57ZTzv9aGaJbwabjW46VChFsfM36jALytgrfv5uLLWWwvegKMU4pBC",
  "key18": "4dfPESJ1biThyiHxTRVZjtKW2d9FEhaoi6XHVwUFNxQ4enazpQmbackzzHLzVZqeFrWUQUNHyo7J5Dosr1417sSF",
  "key19": "ZeuMRWQr79uWGF5sAmr5mb87DbT6VrjC4aMuEzR58S5V3kicG242oXNtbhikou4Vz99qDYAyvtTa54WTHb4APEk",
  "key20": "5f9bhZbBJJqbyFiSdZVUrXXLqHTcE6d3tLbQqGe61k9JQUF1FZJBDcjVBV8CFPWoLBg5TfBYjjWrSTeTZ4STjG1t",
  "key21": "3dxToZWg93Grozgc6QESSbdgf35V6We1DenzzUH4ckoFJo8uCyEWj4B57oTv6J5VLq5zzeayvQ6eif3W5mmqrGSg",
  "key22": "5YnqJEpnKerh7yNF3XWhuJCLeoxYfFEhs2yY5aUW6h8CmkefbHMYKQZuFj5mfiGHTys4tgm7xZJUJttw2Gs2vqGw",
  "key23": "kBZBE2t7Yew7Szi7RJK4RFTjFWgovTdfojmp1pfrmcQMZrYL1JpQyKsER2p2vCaggJ8oLRrb18LR5p6ZoTtus2J",
  "key24": "nVktnTqkVnbWbZa9aTqRZvDA9FfntXq3maj39Ahjw1s4PAN1EYdZc9op1PKuQPjpmX3Sm7gxKm5ud89D1H4Mu4L",
  "key25": "5UnB5rEMqNne4KRMTw1ZXRpTDbBLbrsGJwDu5CkVKNmFUrMSC38Se7da1xPSabWVMZGzqEGxQemkCgT1DYi1md5a",
  "key26": "ZqSDuiRFpYW7hzJxGoQTpzbXnt6PeHj4QBpR1hAsghRWMso3q7aLqKtzFbQhaZn1JfF8w4jKftsFKvyrockgzCQ",
  "key27": "2wB4QqpSgKFSXGF3xDEHoqmAo3fLRfbV4xFi9wDjWDePNTbbvXNB4HyNov3qKH5Vv2Qc8dBWRRdpEaVGpx8UNpwD",
  "key28": "4BbJrr7UNVu3T7syzsrmZawTNHY2eMhoXTkXn3GXvYQLUVQPUWaj6oqGbNPwaB4ugjcbMFBRLYocgaFHPcrfqxSA",
  "key29": "4fCFmH6MmioitxrjAsykyzphCJ23Z4hANNFyttXyVNpjAsq9YBJdVBtKgEncBcokGJSWx3TJxmNBnpjrufekvqKc",
  "key30": "4wwQSGkvUmPyB6mPJxc3uDA437QGrdEXnaw1ApEyH17wTjGhSencMTUXyfvYWBaXF4U4wMau7iXjG3vafNqMFozL",
  "key31": "3TLj8etoroUDKyMtynqzeu489tYEuWwvjhWi2sm8KstLT7J9DMpLjQ9Xj1D78aZCdkAYhsaR2nGMQjfjAjpYndzQ",
  "key32": "3hA1bqsQ9TKoaULZJc9ADqeBT1q1LTK2R2ZFmp4zoWbh3JNYk3XQuFLKwpjPyFuKWXSAnTQh8UKjyY3tq2Ab8Dex",
  "key33": "5RPDtJbAfFtcPjNn2YhDbQk7VhD3uqJ3dtZVwFVzLe6CjhN3nTEzREYPbick9hV6sxDgLvknb2VoesC1XhhoRBhG",
  "key34": "3YdKzzs5CVr2ZvY4G42kzg3ydieZ7ePvjEDnXnrmDiLe9cdZY7mJA6UtUPYBtcQa5xy2HhwLYTpwzeKGRhpzXnSm",
  "key35": "e6gVb4AxEqG9LBW9ojSRQPnsxmJkhVavcHoKvZkSfyod9k7L2vDv8Tnm7mXygT5azs78pQSETgJRbkyaKxo2eHa",
  "key36": "4mfphcbVjig6agRzdCNJJ4Wcuaoo9s8wzSPdrCVbJqUiAXBQMN7ySFw18HeGcwTBtVwsgoR2RPQVoHzbaqLdtk3g",
  "key37": "5hRGYS7aWbsuqYrsiM1izSS3DGXCpEHBJz8hGALWe63FURvN4CDU3vK8Zy2SaWS39MXRZoLC62h5CafoPce4prHP",
  "key38": "548tqpzss6CNnk7xvoCDhznVu3NAERWkeDskhB1Vs2p7xCvqRebvNxgdvK8rNn6UxhNmXk3km6WrDFyFGG4FEgaU",
  "key39": "3Qo3kkwkHy8LDVaeJSC4vXophY5o7njpWivv1yBLTEK25gtYaWWqken2kziFyuuvAHjVfFMux4boc6KPxhCtAEw7",
  "key40": "37ZJRnMJGtvaXyShryspZWD7kB3Vkx9PqUASXuN9rPSH77YJVxY4aEq9yjiLTNL8E1hL4y6jvDRrrwqCYCN3Jbwg",
  "key41": "3C8SAb8zHdzCnNTxyL8a6X4BXUvKxhaHeZ2MutREqvMG4FEG4HzeVqaN378YrKUmGMBAv87iivySvxsKxX6VoNmB",
  "key42": "3KJzSStqP5sGRbz791CjLhNaG63sdcpbezJGEGyrArwnrjaVzEd6VzRnkALPzwg53uPRVPmgN2r2ZB8suLxvEAf7"
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
