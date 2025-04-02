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
    "21ZDG2jzYLfnUg1G6SmgUiWb34iFoCABm997v648SA1NLGTmEQAstSB5xuccsqeQGPQLaqWa4g222Ndv1PUpePMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mMFKT7go3XAUrAJ9MRt1UAyYrjhsM8xLbaDFSUKE8isEPv5S8RSLzZ7zsxqMYG5S5qMkU9DgJicJJ6n4yyByqS7",
  "key1": "KTjaPGX2WmAqRuEooMzA8m1R3oz9T5Lvp2iizEyMKBdWLPLLxjSNaJXEEzvz9qD4AkYF5MZmd12vro4DLu81zK7",
  "key2": "55G3s78Nrg8f6tz23z193W7Qjqtwaef64ZqjRdwZPo6qWcVvETVYJzCR6ZbzW3byqbaPqXruXUWL3jEuWWiueB6h",
  "key3": "4Q6wiy7YnScjAqQ41uJxzUVyuMFghpqH1C7Gp7gnmkQwnm5hU96T9YFBE4mMJFwikeovwaWfFu4NSZn3PjVyUX8H",
  "key4": "bKEhunRnNkDcJQcKEtiP5UCDkMKfnoUizbzwpsHivLDr1iYumW9pu5f2Ff6W3eoQZ14CfBBC8mn5HhDTnfcDyjo",
  "key5": "AHDKBXLSZMj9XFyxNvoa9S8pXVYaFnGb9nvaXcNxeQ8RBbmLT9Rr3V1wVJZQ3FH5HpWjsoPJZ2CmqyBfuF3b6PW",
  "key6": "61b3aprKHLenTQX3J59RPMB9SjAVaaCVRJNVwBHRpfKSjDHq4Efus7V2ryDWQE2VDJXhSm1TaqFju5X5nDxsuNTq",
  "key7": "2NeVsVFGp3mNQfwLoxcqapgoayRkeYZ4Dac8JvsuHFx6uhUYwsYo3yeMTQZCtGm3niGXKtcwrfv7SsV8t4pLvjst",
  "key8": "Xz45yQFfLK3sFrpcaJ9HoQLFX5MAsKhGG4HExTQ5abB9xxvx6zhKp87z6hapGJ3ADeAQYSvh67FQaa8L3qTKQ8b",
  "key9": "JBP3f2TGK8xvZsVkZgmetJBYQE8RDEJFcguJN84wdrAYrxTgsptzHiuB4qGUNvctqDV745PZNxT4XtJeuZpdBw2",
  "key10": "aCSmMLh22BGZySnWn2g7fwztcvdcXEZ4uDMKrjcn3X4ZFrrQE4HdRBmAq4w6AAWxMVHwwn4N1A3ffwKaC7sMfgt",
  "key11": "5krLxvgeNiwotnHB2rdTggHyyx1PBXsCiU8PXHuAP9toHCvGN76yhsjAMWPUPzSay36qvrVBfQqGQBmgtYwDbuYM",
  "key12": "45tpfC3BAZSFru1XpXuBgpAct25auangQzSio4H9yTi4ykjWWgnnsZQ3VNUmQLtCXHXrZxJdhSiYYhcgAaCVrbBB",
  "key13": "3r9NyYPSkYgUmy25ponshFFhnHsmYtyvfcff3NGJ2ewTczdMVUrWQrpcPKbXNk45WCYFMSPqCqAsJHVnMkmw6Jpt",
  "key14": "S86Rr7Pw61iTBJiKzkaoqgaD61QafTDxRe4A22F2EkRsDh8Y2tVcKKrsncFrNLbaCDpH8kXuyNyMWaMp2L4M1PU",
  "key15": "2W5Vff5XYAQsQbSQ3MaojJktspfMEGR2DSwxMqgZhCpWyHmEdqrEd12UBv8cVyPWUeYxPxGJjNww8faw14SDLAxh",
  "key16": "JQLadvfB7qacE8uifWorobBGrtevMydBshmj5h4tUZmu5XxU3Pn6vPZJhje2KJE8nM5YE9vQPpJRu546gkypxF2",
  "key17": "4emwNciTdbwviqTzB71dLpBfA2sESv459yFWaFthBtigiZE3G8SK6mKhWsr8s5VZ3gSRUvc4oFtKqWsvzSZch4LM",
  "key18": "56f85coe2nxoN6WEAZk3v7CEzps5a8rnH4nQ99M3iUzQuwepQtStLHCYSDyQ5kkBz3rz2wp5GnkNvpFyEvvf6Coy",
  "key19": "4xU8uoHqZfstbdBxVMqwQrscNNQ3EvLdBQBdtmoZWvcB6K9W1hZGP3vkPXWZV74TRaPMXufkMJt8TFdZyvre1mxH",
  "key20": "56PRhfw6EtphQeD3uVPRx9Fp1JLzkjobLVaCWaJVX9BBP5gKUTs9cyTSyBgWoTi8Zdme5W7YBx9G9hsPECe1LBoB",
  "key21": "xtr56QPE5WznQanLrYQRyszkCCJYpxLuXJTPtXeE7qgou3UEVqtmdw1h6YhfmE6UaYRYydKTK9WhmUNBfnL7TMN",
  "key22": "6n6t8WqfuL1jgQLjYZfH5jNxiFiU3NhHRF1BFUkDujA854LVtSSxNxtLiVaZ3FSncnjmQ2tDuB6muL1nmzcPe85",
  "key23": "5uByyM7ELDGM8Vi6YseicY7afpK41gQe2181gJjvkS9UeUcWvXoNnXPvri9RQa3638yJg3ECFWHfFLQHCA25MTv8",
  "key24": "4VVcYcWfdofPCWuPRVNjp6mnHvQjUWUHNtDhcgHLBFgh37fKx2MSTvPyK75xZHvPHidgazLqsY1iTVAUKYM4uw5p",
  "key25": "2HbHSHmcCw2b6mBt4uDvuLG9JAL1yNPdQgps7G5VLNiMegqA9x9zs2Pr7aSiv6BGmJjdXxAccFsRFcKYnmVsFbCH",
  "key26": "66USq8UpHbmVStQey7otRxZ3N8yGfQMgPLW5rBvZo54oEFJjpBfru4LrE5Suhv41tciGgwDDxF7X4kmxbcHPVir2",
  "key27": "2vFbNDY5YpvxivkprE8ceBWBGMRJKPcxzUhdTaPuJ3txaSvUDZJ2DcJBoRhN8aqfRTc3x3Gd36mdJgaomiuknCZY",
  "key28": "3XzWbp7ptDgbHDq6Lwj6QdsZpBZ6SQekCapbPkCThkEyxA2XLfccrU3dGSypS5MXAhf8BUn5utwrmpWNGAurNJcu",
  "key29": "4RxQghanyYjr9r9mEHConWUuHfDd3YkSitgVQjcrzxgadSemjFzRW6BwkrCoaX7ApjdEchbR6nuPM9tSNdojp38a",
  "key30": "2YkpDh2x3KAp5247nXW3P9PUmNJHuWEA8GQCopNdji2KJ4nNprMmaVgYCdPL2XNNAir5PPMySo8zixPjppdE7LbA",
  "key31": "2vgJLT64KFvaLVeYMABMpBXNmHsdAe5KQT6pTjNam73kFAwAALK8Jxj3J3NbMXMcHBQoXmC8JYcVMLmt6SfEF1S4",
  "key32": "3XdQppEbphHM9iGA6rG1ueem6NAjiwGwZaUaMU9CWWLX8z4muxCFeTQGLpMXBRyZ19Z157YxmgvwDHNc9Y3kCMP1",
  "key33": "5T8R3FgA5wzJ7skcTfH5d2R5fZdViHwqvpu6e85Mwy1X7cx6RLyoHJD5eGHh1AwHxKfsz6Xxk5VvJLkTsA1su2Zf",
  "key34": "5FZR5syDPqLVfh9bcgvSiP6GRiSbuxUdB2eszp6q6Ddc3jYznhqMZXUzc1WFGVHNy3LWww1qRa58T5WnLgUb1raV",
  "key35": "5MuyXthN6Yt22vZ6cWxbCiXu5NS9yJatA9kc5w5J6oEWfN3TDg2dB8n722ry3SvSrmHYkhBqPMD3yV9w9vyfL5pm",
  "key36": "24fuhcs7tppqCNqNLh5U7CcJwmRnnoQeNWwUoS61qx8Qvz1VSkucsB2LjcmiD4pRojsZojz4ja8DugnYF4ppGmRL",
  "key37": "29q4MrzUUAA9BhLdMwtPEppgt2aLTSNySHHkcTnpbn9PKPdLkeieYXGLzhaH1NbDAjFbmFrvTtD7FZJbyqdRvms9",
  "key38": "MVZRPxBx7vi6wTwmBFe1SHJTEa6dhJeSiBDxmgBMhQqZWYrJtn44vEojDhmH551XnZRyn2rEuxwZjiNv3eELwxN",
  "key39": "34RHgQRTKzn7LrVSuomeEgxRREwvPU72xC8aZ2wdz47kvNyHpZH8pwQG9HVerVCHUuPnJaMcGVhCfTWNYwkppxNx",
  "key40": "5zUUSPfc7MrBQHSyEinDAUfHvkda6oJcTS63bqzUGdTcMVkSAFqSkWaTkct7DZXEDxxSREpsmBEtvwr33gWiayDb",
  "key41": "3JXqgBcgnQ6mHtRcqadtps2KSx4vCtHJyNxMqo2rtydDSwJJztBXxhvXBGXErKZ9Ppt4vcy4weZ29bnDbHQvrdd9",
  "key42": "67DooCniyxZedpa28zx5kjkby9nYh71m92NSXtT3vQ1uGpVCuj3pPELBAqL1cfD9DixWsKHjpcEs2JXUBJKq6cqh",
  "key43": "4kaFxD1k6mqX2z9UMYFqyWExai2MFqgyNwWXXjn4QfB8d7yrUxqbL4FF8mwdHN2ULYszz9hd9nAMm5yuoPxQQJkm",
  "key44": "3Cmr3Wy5GkDHQz5FaHHBaYPhcp5pLUs9QbbNypLZTuJWfzU9AU15comHcDBuRYM6F86hadeeKcyPXZqCbAmJhVUN",
  "key45": "4LdjRjfiVGqQChH4dbEeuqBXq5F9DCgcqwpMK39daKkcBocPhaJ446oN1ZKQKoE5ZMnqk8xB2SKL9kLQzwEe7DNX",
  "key46": "3F6GuMJEZTzmEaWYVgLQrMbDLE85NnYkjCdgxrFRF2XtyDrMwH8wNzNRmEaGatoaSjvFQMEnZuu2xfotE51c9EVp"
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
