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
    "2QMKFcN5KKZBNdV2ek7Lb4JMqBqzp3kWjohbdwfQGMKzkv11qvxYmvYv2XJk9xFwmW6Cou1QJESREJK52Uno6Wyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R1zo3tCBWz4DuTpz4KtRapqiuHVcvMkQ7PFNpXEkuBVcCJVKzRr8tTVtLsdckVAZbbVdjWRjmE73pdsvD7vnf9g",
  "key1": "5kUUxGaqo7D2TnbERK9KCsAP62Jq5NNdnExzMT4iGj5m48mpwv9UeVMTGPZggj7ktMg9j5FJNzgYXXjUG1iPKJ6S",
  "key2": "qfRfqnx8YomdAopRvTGv3wFYHPJA9e5ERxTdMc1xPdGe3FhdLDm787YSSMr1K2sV9MwFf3bk3Ccjh1Y5zcbUwiT",
  "key3": "3yzDrv4rcDhTZrLHw441SLbm3JBmm5sEpHFGLNtBMgAwjE97mmY1hffSacjAh6Q5XzhbL97Z42Dy5cH9xEwzfeuS",
  "key4": "Qj1Z4mUUCfTvVWZxRxnY7mw2P5hNDWYFZajcrdPW9e3xQegBZXQzjpF4xCmjbaqzoe4oYpCzMdwaiW7mbLYbrwZ",
  "key5": "5BnzL5TbLbmZG5XS42pzBU7FX6zryDHMJZhbhf5i58PtEnKqiQXYrTSpUEgPSD24cqxwKSgYPiF6aj51jvQaeUxj",
  "key6": "2XfrRw7cLFmZ6ZujM8DieeyRnxHbexazrVo3Addisnqj6UVE7wZiTCqXieP8CeDrT9iXVe3f5fV1X4SxSsweh5CR",
  "key7": "3ifEwbgJdeDPcfbf7vFytVtqJrMp4rxczeKWmP63YpEeHejseQCJXpN6GG136RDjWacm48XpdpeCmoYtCk4CPWWg",
  "key8": "4RqRVtDziGQczXA7HW2DzcxrsjijDGouawsMdAWga4jidCpq3GjXEUtJKQ3upXbyK7TUMKDDioVubsgWecYpThwF",
  "key9": "53zzxyxuAX9nSXrWpj9RLUtEHUWbixbT4TbrM4X9hc1vtKgftwqGaPwrs77ZeQEiJkMVUDUXTweDf1FCAQMkE9Hu",
  "key10": "EXT9jUyArgqMQbLpkXLtwoHRwd6CDwXR8FB4Tvc2Z94XRCgginPwubMaXRcCLH5vFhA37Af3xy16zS9Ur3Nn364",
  "key11": "iy4avsy9M3gHzumvqVf7YrQHK3W7YAGku29fuDjAXPpFqPFgqC3T2KjS1ywfY4LiLJXvdvchP3Gn7fu27K5u5JZ",
  "key12": "5pf1tfx7Q3bGKwDdeM7VfBsRzX7SBy5g4meS89TKBr7cpVdBy7fD9mtD9YYdr28QdwDZRexWix8XfGRv2WkZfYrx",
  "key13": "6Z8mmeTVJxUWjYaA7RZbgZ9eHDAyqcqf2a6mpsEgL6WjD9LDDNRfE3QggB8MzBvvLjWUeVJD9Vc9yXyHgWuuEzC",
  "key14": "5NT39yhLEi8TFX9Te4z4ZaP5hjyc6SqG98Yy64i8YdyvKiY6xoPPMtc9H3uYdQnMiVTWtaFavCMxvVnWschZ7WBc",
  "key15": "K5XB2meybMNmA5g8Si2JRSAYmuNYmNALr9jYpqqKyao5xgiRXoBmaSbWoMvguX8XV5Wj6UiHdm82f3Mr2nmVAje",
  "key16": "Kx4tBpQEp9vGBGwE932PCoHciyM2AsdBACQJStsnkX1SBj7Gu9jY1njWyWboj4dpCB9bzxgJBzsGHmhXMD1RTZu",
  "key17": "26jtTpzSPPTRh5XAfYYvYgRJxBRPw56L54nvZMMPAfgVcUCn5K4SVEiMmJXkJS8Xir46QiakS39H5PM972Lpe2BX",
  "key18": "3rXLWUXPekNpqBURoPPVTTiDZ3DHziCHX1wdxtW7xb4gPB6MdaKKrRTWFgzDzyTJNzUvpWWnZuxZur2gEDSggsL5",
  "key19": "Y41JtZxWkUxGpdWeRhNu8TsM28R1NgmwcZ1UT3bDnAEJp8oFwMTL7XAJyCi6sAxkLMMwU6A79UWWWY93ZBRiRYL",
  "key20": "5uxMMT5qt7xcHxSmA6Fx3CYXFtb3u2keD5hFhXiWHc2S4dBXDJT8i7Q1qyPhSii1WxWDhQwNM7z4zMECrP2nfX9d",
  "key21": "3MtsRcxHS3j5u2Bho9vGXjw7x9adcxU6PgsP4zW6Xugc9AFrs4Q3xjDcWDZbtTYRzuJbK4a8AxQX26PcpTYfbarq",
  "key22": "3nCEuHEn5JjJVZBXMVAAKXiwiDiAjCXZWdVCGkYXJaMgjzXvDe8ehq9ZudV1pEr8XHACCwZba9KiiCzFXs2UPupx",
  "key23": "5eSUk4TsKzb4hDdSUBq6hoAkezVxFbB6vxAPUi2KdLuKYmw4YjBzaBmVdh7KygAX6VwWciHMZmk8GT958AigDWRN",
  "key24": "4YThrgsc3aGHPMuB8a1z4ZogvZeM8oHQKCXb1yXv3pepdraE2DeQorNFc8hX4Rv9bN4K4ydBAw3fnXtFDksdSfBt",
  "key25": "2Jaj9tRYMVVPKoD56Kgd5iU7DLP9bUHT5L1esNrHm5WKPumV2gQxQJF3saWyA8aN7aVp6iEMMBMUL1uJ2yifCVhz"
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
