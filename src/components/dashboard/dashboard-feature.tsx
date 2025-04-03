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
    "5LThj8gueryYhtK6ZUMQBwL5RpsJaELmTXBxxmwUisdAq4kDtZwoUTJwb3KScyYF1Dokhz1BZ4XpyLtzN7Se4vxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MWJ9V4GTVFbR555eSbFwKbA6WgN6MAUdqDNUr9FyypyD79xVPKy2pFoGgGXiBD5azVnRoG5CAu2J2MhsEP9qu5D",
  "key1": "LbDk2THUCH1KJKXQBWA7Hh5Dp2wcFd5woGYiMnK89sdm28U2WMxUBk7mjksPGxKfBzzPF2teNGPuxhfeqQ9Qtsu",
  "key2": "3qzp52Hpjx6cKzuTACNrSMPjXNHoV37rZqeoQwSknuLoxAVEEbGXByuNWqv8oKR9FgAwzpbqfNeeJhES3NpKgUyP",
  "key3": "3rPCwsTuGSK95VBpg6xQCoixLNgGownNBhSF1Yw4JzquVzgfs1fkbNk3JENtCpyeGx983p6Dz4TPyBeFhi4hjmzG",
  "key4": "2njJD1Gwf9xnP1HNExxRgM8poBXCRKHAWk5i97VLYHajQpwq7H4teEyPB8rYd5SzhPV51E7jhNk5xgYCn5LUQfRv",
  "key5": "2mzcH1rEGvW7PcRwMER5FVHX8vLoMNsX8pAKJ5NnEjsGcTg8V8pcmZVCEKGW4xYnmYHEqRtzBjAQuibutWVxybVo",
  "key6": "2eY6n1e2B35g4VLgfmjZGSDeYSECPyV8mWaZRE7FnGHYUcjxvDvbP2MTfjX6aMayUZuCYVUd9EHxSVXri9UgJ5aP",
  "key7": "L71YpT9DAvoBhFs8poW97cnAx8qA2VVJ2ChYUTB6dP5WUVF1BRDw8KS9hiGKouEfRo9nFjdimxnwMQu9yCdFJFw",
  "key8": "4cheBAdrEEDiXzJT96ajmY1dtKf6vJGgzr5WjCvo3vPEBdxm2N186EJFMgJXfC6EdYJsRxxTEHuzChQ1VQzDgSGS",
  "key9": "S3VEgmDbL5ACjsDNQcHzhiYafRbGfTUhR8Y3owCGrPJyQFaaUwhjMQMruFCRG5kd3SozPxD9S1MQxGDLsQnwBsc",
  "key10": "5LVHKKXnZ9tGoeHrTWHy8acYhZsTAV3EbAFqADfuLW3Xh2ccQ9L4MUTRVbzzAgVgqrQ8Z6wibqHJK71VtMXSz391",
  "key11": "3FAXjZijD2HM17TAzffsjWFCcgypzLedHj2EMUxEDoSfrzKtjKQvb2b5pHUb46ZgJWzaoNGNVVpT8MJJXJWVgqvi",
  "key12": "GgCtyTqNeqNTLmcUpZYcmVXdGmpwqBZpikFod9r617xPpvtyGhEFWabmQmN26yiLZWKxgSS1Fz7XmWGJyHVxjat",
  "key13": "2Kj2pCopiAksXwCkd1QvSVuiTHtgUqwZp5RdkvkuFFtxZ8ZN6JLpdY2qeYJ4JPvmDm68HRWRcCbHDg155LPMwQsn",
  "key14": "4nc8FgKosQ5AfjWUj9cqoMLLTwY5jpYFMGbnePUYtwRU9eENDVXQyD5AwJ7h7GUMwxuGfrP9dDZMHsNkL258imZU",
  "key15": "4dYX2TRjk3RGhftZZE3y7L2Ain5peJTnu2DJGX3uxsBRop56eXnjn5N61uoMg67MJfxm5bZiewq4xYMuZTp2wz1D",
  "key16": "229BXBEJSadBqQ1u5iXk5Jasx6RPHC3Pm4YSKRG3dyLagT897RuAxtUE17u5vLmy2jU3jEZgGkq6pt4HMaQRDjUk",
  "key17": "4gJKHJ1KdDJmXgvGSxJg3pofZCJkWENmi6bWRzbnLjZbUpSSF2U58ak15m8eCmxrPAxuQxKkyfuks4fyQAD9A2Pk",
  "key18": "5L67WGxPudPaz9fuWG1nYamvUSCaCvQHfWn4MZe1CBr9hABNUmJ28VBGkvfPsQ28RvtatXPnd9ht1wXHQNDHssuz",
  "key19": "3j85SAG5V8nkdXLKL5uU6YhRcvtxCRqfRyxxZQzr7Fg1xn8WTL9WxPMN62fzUpcd99Yizt6fxZPKEVCo9veC9GTv",
  "key20": "4SFjM3sU9y21m1shmZJr9cgJQ2RoCjCkatoQVfbFr6H7yCMWp8sU714G1xMg9XfBVeVQkT8PBNzbtMhyC9GYWMEZ",
  "key21": "4tnFZ6zJHdpVCaaFBCN2FwTKwQ2BtuELHTreLAKhU4BxDUEsATMoiTCzhWbF4zi1cGa8aQfSZ2zQpGTbpwwRutHc",
  "key22": "5HZq2Z74Ry8VvL6pM5JD34fuu6UoHojYnjXz9KCe1XefByqhLvQyqV2iJ2Hfh4BDua7UrRZmPrLmjYKWrYZez145",
  "key23": "5zt5NxcXYfJobBefN77L32WaEugFKGo4hB9EatU1XBfsqxfmJVLgSPHt5t71UbkDevHafRSjXQPSFkXC2WPRdKWB",
  "key24": "2wG6TPngxyGGoH7TuZzAFJvqXUiFYmbY2mYdE54mnLsfWmdUaVyC4xRHhuk4FuzSDPhYhYi9pZfu1jusSAymzS5P",
  "key25": "3WmiangkKMmTHiVgm5XmSEKDE2Mdqo1u9J8Pv6NhSogzBKSSuMnZUgh6A56TugHmnE2XLGF3YrmgDFJD4DEDKykm",
  "key26": "5whomuKnosyTK7DskqtT4Yx6wPAT5id9PYB1toWSG2BFKrLGrBZeV3PUiFg8cf63NSiw6qd74tH2Y1ABH5GBBbwD",
  "key27": "34Fz1zSLrPNzEnkg7WNTrVWFB6xFBjj64ESwX1cQJTes2idXgJzmSJBJUGwnpTw4WK3T74KQMg372aueGiQrNgVd",
  "key28": "GAWDCxdTXc2QsMJ4X9cKUcWJg4ryKxh2vLZRs5ojsbM4fu1YeFYNY8QqZQxgrubq1YHYftNCboHcRbQf6Abt46y",
  "key29": "piAquKd3JrkwuEAwDmDnsXp7UUcHDHFZE6tKeMP1zrFvjePALswGF1FaqrXkCBGffzTFYR1aY6qCfpmmEXuDJnZ",
  "key30": "2nYU3Jr2JPAnRWogsrH9kGnfNEyFwGN1riKqziuEV5akGzEe68b9kVeqQPU967uh6wwf2S1YbuCzfqkjDhsXrShV",
  "key31": "3jsjK6m6yebEddKoZp3eQyPhtU2esq72WJanhuHCuHZHpYCn2jyaVgdPGUU2Na6xJKmrKotN5ArpusseP2HvHaKu",
  "key32": "1vxRXaNqwCjiwGfYw2W2j65zwjipL2akWss8z6jxq4LN9VaXpnn7qusWFZpMe2uKUEmDCmFdtNmgktoSTnT792v",
  "key33": "4v7t4DVgom4yJU9p69sYmh7zh9ZdCyZXeniUqvy8a3i3FGEjWHGTPrsJzpMEPDcYyvFVXoku1Tjnkg64Nk88xFJa",
  "key34": "wKovhU39pBL59NG21kLAP6r3Dvmvc8mio75sCqYrxWLk2oHXMsTHjjqSkEvvdFU7LikRhu6UysW3SuUuxPPDbQn",
  "key35": "2QeLBc52Q9W6s22Y2itqzRBSqmUMMheaoEVptxhGmccPATwaf1LYLTPGXa426MouQmYJ1PB3ynChdhddzD2XXy1f"
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
