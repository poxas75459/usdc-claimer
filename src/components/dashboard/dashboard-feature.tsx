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
    "2z6PqAJvu4C3W4Zbc5GzmngKDmRdPD4Vw7xTcS6UHHYh83baQv5zXgGQVchdT42fRT8Gshx2nfMQP25vSEwLq96t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RUWer9F6oHwjkJkanHmLrwaQWiz3Ga8r5CRuNctNTu8AqsT15T4vzBscXgkoPUG7Uore5QV8FN3kyc1JJZUbTs6",
  "key1": "3VAxMBSFtq56qcoVmQ65QMsspHHAq7xD8R9MzoCciYbvu73e5mjH26bRKFofbeGoLRhordmx4X7Z3jDtBus3yQxX",
  "key2": "2Qrusg4PnLBAs51XPFSQsWSLzX1yfSVvVFzywDa12i49M4Gj2AzTK7bPcTYp94vFKeyndpT7K5B6qAskr2JXMfpf",
  "key3": "3VajhUSSpgH8ahLDSVp7DQLyqZsrYCkWT2RAz2pNBgKX5fCLQvP1tRKZQbLhNbyXwsx9qGRMcN7Avpgy2TfrpjPn",
  "key4": "34ZnTqMnfudq8Jmu1KaC5ATQ4i2dsVuEH1Avp8aUqx337ngYZEC9iCLTEVrbZoUj43iU9zzxxVggjtPidtwhy52z",
  "key5": "3qkvKd9DtKgq4cvAvfu168YVWEhH5mzA6FENKjtTh3mSwr1VGZVEjdGk951MiFHfYoS6rRd6pdJeWjs9a6rPAsv4",
  "key6": "5B7RHHRBY6nTee7Z1WWM2PtPxCgFnZyRbeix7YEhKDnPz6vo15FQGDbCW6vx84Jfykbz6Ku643vG1sXsGromNiTj",
  "key7": "4GawQyb6qyobyq4x76JpMzmoJLSfhJUUeZ23MgmMrDPnwFs9KdfQXKfhdGaXnua1U4XeWtcC4t4BkVHSCkWLZDYm",
  "key8": "23WBrmnsRnF4zSbftD9kKxb57moJHj4uRBLfYybEAmKcgkcKhHfmKkTCUpYgcYDyPKQkUc99BTok91pPzq22U3UW",
  "key9": "3RxbZ8383sy3tPQcWc5pMRRnycVk585S6qXXyWiyyjmvTtFXA5XeGRGUGPjWpY1k8zR3VYd5ZL5p1EfW7g2Qax3p",
  "key10": "3Kuw4F6V4Rt1aXUkkLNncRFRFTb7AfD9Z9BgyQA2UA3DjbbS8SnJ4UWumwpCjxGQjwZRVK6LpgnL3pZjQHkbQ21t",
  "key11": "3KfLQGMqkqW2kjH5Him5LHZXVERUY5eFqSDGKXJHXqCyJRAZZvXTQ3DtHCfddR4i1Xyia7PLeR1SMKdTuubRaVhZ",
  "key12": "67AGJChUkA1RMoj8bXMUkf9dUHjPshNacuiYmgBaZJQvBfoqkwNXsaQEu4Y36gdmujNdX7MbZh1V4V891kmzp21W",
  "key13": "2YqWmfx6A6hMZbqLoDeSSfrw3vrnUEog4AwNUhezrnqj3m92qvniK5Ude7xSCLkaXGc9nFYrJrKfbkb5hJ3gVbZt",
  "key14": "4u4fwr3RqKUmjgTy4mee9Y3DQQj13DiJSK8hcXh5qLjwVPLCJVK7xEAtS8V2k6bu95UMjJWapunRpdJLhDsNAJoa",
  "key15": "4udCvkZbMCv33Nb5ytccHDay4dMGStvD3y9Qjw4qy1QQWiQfAkqwzMvB4YMwQcGGSQFqbc9dvdusyYng7WHMh2i2",
  "key16": "QPyVvLB3CgbZnvNQ6iJfvwiwR4pkmEey7LAcJbD94Fg2QC33vCJu2MorivMgc8SLntoyJbCzhVRanhGesD8GDdU",
  "key17": "3uBkonJccASrMwxkPfBf7gjvXZoWcPHmpVdsRYPRacThCKxFwomdfhvJ4jbN29x52SX1X8bqYxzb91bboC7tTyfb",
  "key18": "412deEFypmVd2Z3oVfAmwYNBVRiKpu3xftRXqy1Hz4MJ2L2wCamFnNPAYWJqvMJv45Nsnnm7bvkJAbU3TctbH2uv",
  "key19": "3LwPpkh6SoG7DxvBE5EndVyuLmUXZ2FBeNx2wYrboxTUVJ4N9Tn19gd9wMTd2KV3Cyn4pEyjMcPPv8enBuFBw3C1",
  "key20": "5na2HxWjQ3NEgqDTLzdpEqLrctxQm6rfJAtiV3BfoRARJexrz6kvKZrcE28o3UiPepr6hkrdicWQ8S4au65C4qxj",
  "key21": "3eeYo1Geoec4dSVc1VgFmDL7bZou4T6UHRz5KDQRV2akfZK5xDB4gbyz1pdSvVWoyC2MMpAAzyFGw9JVmgjYQd4v",
  "key22": "3NDd2ePSPyuF4kaScAeigU4xp1tQSv9jhLNKishAxCxZegYCjQYZXfF2z7N88TYqs37QGBuBkKZ1wHb8XLMrvv9T",
  "key23": "zDytfg63F5USURZkC7RNZp18S9odV37Evg5MGEE6mBT7DD31Wyxp1om5ZjtRk7kuatQrU5sYj271Jzoa1BVXqQk",
  "key24": "32FudGgKctBX7iQoHJU2xsDkDgaVKbcMqPqRhA7eHNoQibo2TrjahiDmMihALyXcF3MJhtvzCi6iZbugspH638VV",
  "key25": "25WPgqMBWsJYtHPxDYHKP4QUJMKzNP92hkSn2aAYCfmZ8Gn7ZjNnBGVJnyZfUKX5jGo6QYrL9PNUAYUwiPJh3L1v",
  "key26": "2PBjaPcmBQZ3yqeAiBNyYzgCTwa4Z81xAAUGzkZdc7iX88tC6sqz6Q8wpBGGDrgnMEXVwwJuzoQRY3s3nk8fu8NH",
  "key27": "4UfEEBSsyxzyypAJYA3ocE9oR3QxVRVLpnvm1PxGu45apipzhLubjfjfAhTBvGNQyYfzuLdEtiXq5oFZua5okx6S",
  "key28": "645dyUVRKFERCj88DwzL1LQdb8C3Jged5eYYw8wR71tdK5jhTh3oT128sVAsYxzeVbWN6M8zE9gMJtZLr7n5faNS",
  "key29": "51HjG9D42a7rwr88hoiVCVCJxRm4CBeF1ZzYuRtsZAyUGfvzvYPusMhkMGSKY9dTWu9rbY43zTMVTof1UEb8FhM9",
  "key30": "3H7X8iL7HuWDReZNsohWpKGyfrkGVKBvgwtikttPQ7dKYeC5pVsvkMjzGzZ5kzPYQcpcCRJzPAesmh9snHmfE5oF",
  "key31": "gu9NPuofsWDzpboF3Bs6Vb5nvzxcc8LJ5kPwQ2Ms5SL85NNrVAH55NfGHzsp869GrBWFr21bdQ1h1PwxPCUcdWL",
  "key32": "2nsQB3K29BpDFuPNrjiv88TBUNq86Q8VpNXojcUxwPYQn773yyW8cqTx3PfQQxhcirdbcZ1rAQoPCsJuJCYbNKqc",
  "key33": "zL4HxLaPQyAg15s5xcQKGif53irqbfFSzK8jMVKsUiJGvR3NA6nErq2qvU5xwAvS1px47jzNvaaCZMfj1g6Fv6R",
  "key34": "4drSEbh1rv5kzwyizx1KbLyLrPgBZUQb9uWB7aW1nFr3QtdB6E9o5Rdo2siwktrqTKNn9xqNbbUXMVq36TqT13tg",
  "key35": "2pGNhLhQByheAMbxRBFUL5j3aQMf4Mi7ckMGmtMcACLNRxqbCFixNg918kNr1qukMiRMEpEhScmdniWGcNJGB9NR",
  "key36": "3bMrZaC3werKoEVL7dusZX8UzKdQQmiDrvGdyV9u9zCxQZGYd1oKvwn4yz2YUiKnd6oCQYb4gW36YGa9286umEWL",
  "key37": "3doKYbVxLqFj5AWV7txPHNyfmjdhV3g8CDQbW7v7EC4STWgWRr1FAWnSnNU7jBMGQL1RZoV7Nn7XFHZkmURnLdug",
  "key38": "2nH3xp19Lpjjg8qwFJ4kXprKqS9ntvXn5mtv1vjVZASGvshTgMPt2oFf2fQqEcXwocTHL3fDDkcUEJuRzu9rTe9D",
  "key39": "27xbzG85g29b3u7pofLSqyyLa9ceHKFms22nszkagb7YU2DFAwg3XLi4xbojqRLKxk1JwWKa1WK399trGEG7yzSM",
  "key40": "5g3GEXrF5fzQMJtUxmk31uTgMuKnEGuZiwkWaPcgxss9zWZv3P2nYQuuDuUFqrs58aZiwTTwMvK9exTefL8VygzB",
  "key41": "4si6GJP7QMaGSHurjqawCyeGeL4k4zxjNB5GtuGWsRvjY4XGEapu9emoUwLPrAiCjcXwKvWJEcXGJg1j1yR3ScRZ",
  "key42": "2tTnF9TuqSw9LPksZJpqaCK79zeJyBWSpSAyzr6uasEUXiEwZoM2SvVBJTfpcsGhJ6Cn9GQKGW1d94LFfF1tvX3d",
  "key43": "5Z6gtgsGnk2guco4naaauWtnzsYbPkNTTHuUJKpJfuQQUjhu5WAfTcvYB8LwzezbfcK2dZKRPqnn9JkHrYg1xNCU",
  "key44": "33b5pQBtVmoaZfiEQeL5B8gCeMs7aPX3h7cWL9Q8SLABtaL3KbmojHJDWnC8iXR1a6cK1KUgCy2BrbeSFaP6R2Cr"
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
