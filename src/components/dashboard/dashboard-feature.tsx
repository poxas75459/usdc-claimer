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
    "4sMWEz9VUxX6SwdvucVuMCPcqA8jJABsT53Cv984dcFysmhxmbQootXfRgav6FNzyB39ALuNL8zLZ2h2PQXDQe99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FaMKLYVEYMMepgkFaVkYz28pQxveRSFsDfk4ZXuhmu6DFaW3cZdQsjRWYMWenX3JfYzJrpWikVuXyejEMMSkDX3",
  "key1": "ZTTKV9kwEmTGGxZkHBNkgsio2zMNoyz3fyAsKPq7PEaYBH69hyhJ7pyMfvHihTgkvCzqbBAPg6EZYL5i9VM2fXx",
  "key2": "3e8wBuTQnXTBw7ozZ5KNbvcHgddBVYS8u3C92U6GPtQd9jFsv4bewZAPQD8nqXdeuBcxJtjS8jAj5ATouDj9gS8Y",
  "key3": "4FVDJqZPk8iPvZuF4bdPMcABjxVud1sm6cKVa8evrnPDPwcgsnkGhitNspKTo5JNHgREUWsF8a5rKAvwFdhDxqPJ",
  "key4": "5PDrQUgLAFFV5nqxoAJSrMPDRXLXttvPQAzqLvJALeSJFcdbMG5Bc7gqPkR9cZdrJkFk14vQUfzU9gn7UC5xgUNL",
  "key5": "49KTGN6JQAhANb43M9CKGeMqrd5YS7UDcJWkACWfxoTTAq5BYQYZy7oe8LiJmD3Z9bdsbDLrhk6xN1UGjBWqKHa3",
  "key6": "5ypdCBtFARZH5hebmGjTM375UcJDnZYRSRepMEAj7NdGjsP6G2FVN1sJ57K8UBKZFRSFfBvqxbgbcGPm15o1pKjT",
  "key7": "3fv7H8PJLiBJPB6UBf2Zpczjz3xegrKcxbtiraZ2uSnzeYJ8xtzWbPuxDFyeuurDtcP2f4SjCGFVP4aAvtTBk8uc",
  "key8": "5s8LWvDKxjZuu77nFooncghzvi1ZEpywBDEAEmmLvk7Yn2yND7zEJNHDChhkVTaHUwnA4E1x84XQ6PuvqQM1exfW",
  "key9": "2miTCkY817a49Ubt5Grizc3CMCKo9B1yJJuKvgpuDGHcwzMAaiZejeYnAi2WGiiAPrbUhiQWPPLubqfcMkjEmkFU",
  "key10": "56d7Nvj469pa9hoE6ecye5FXXHMBweZ4k6Abg2LP9mUdNogFZdeShXqC1sY97tnrwzxB9DxwrFmHtvCS52GHGKCP",
  "key11": "3MZF7pk34vFZfwhwT2TcMSgSEim5ojh7N8PCKt8vRNoJc8xDKnyA1zXqxGJdw3PZ3YzTtXc5b6LpRxE5BVeV8NrP",
  "key12": "63TrABf16sMLPpSM67cwAYZzEhZEuAn9zBj9AvXGRSpP6kHoDZwxUFL3mumdL1fU88f4BwoZhbitEAxK1Ttth6AR",
  "key13": "3H8PtUmdxUjiMVccmSY3eGtxveiLM421ZAct2mZCZqp2485oE2ukwjuubMFXqtztM8G4G8nJC5MKZFyckEYP4dXr",
  "key14": "25QJpiKmgqRQfbojje4zzQSZ35R9UzHm87DnNLnLEGH5RA6c5JvVr7Y48e54pXTDzER4eGzRCaM8Uz7t2fSpJfL1",
  "key15": "3Pe5UiqmSkD8DEYKZPKKUpJi6NCDJZ149FsQnqCRqiga34sPkJaqvBxQbi3By5xKohZnPrqBS2xwA34aHAd4MxGf",
  "key16": "2gMfzmJGBCf9jnhQ6k8tv5o16HUBumjeTM8z6ekZKjqhW8BM4H8i9sB77th6KWsmMN6wofrfU4VYYY8EtHcFVKq",
  "key17": "5RuLjkGnFMbb9XmojshvbTqm1QNkcTrvpSbibwqvm2e3siKTc2vTZo8aSp5f9yFq6ENyHUUL9rSE8mM5cFYv1RMM",
  "key18": "62i7LamPV2bB2ngAhYhgaSGwa1hg9z6iM3yjAsYktcJLd37FeugWaad8jfR1R1MjZFnSwtfxp5QzvyGicKnBVDff",
  "key19": "32sHiYYAPeHgyz26tKYthkhwicLuTpvruzH8kYjVpyyZWaNwiYzcRsHjEsxinu8NxESuH8My7G6jkRuhb4RFkvGV",
  "key20": "3hadhMY9b3hPPmnPCdDSh3n2mSij3A2ua3xv9Y1jaiBuHBdxUK5wTdXL2M7FKHrh8nXCyAiDPjuyBTXss2nMcmJe",
  "key21": "RWuzDRNJAF1wCF671MwDubf6BiFA2YXTPd4MNG327nmhHZtbExFJNS722jAEoSuEXhKQNJeyWi1UYSwMcDrHumT",
  "key22": "5H4x2Mzx5U2ZJV2j4C48Ce2TdrHgacdhVUz6b1uqwFvTvZxqC6iipjwT58Sw5eFaYo9yazHqwSthSEjNCTyW4Wd3",
  "key23": "3Vvq12n2UfoVx7NQfdWFsu9q3NbPQ1RQfHQWm52VvmrWqyG2UU41YXaFRgrP6MfVsHbh5C9gBu6GHeNuqjjqm6mr",
  "key24": "3r5chGpvjaq1awrRd66YxYmhgQjz2qsXE7csq8EhSzr1NLgu9RrVhqD6vhpcMb3spdgtNj8gw2PUsUFf3DaDy3vM",
  "key25": "2WgBLbh7qoFygmzTy2kfHKVNA7LMRCDPZCmFp5YeWgdtHaqJDZatnK7WeB4Nq2NwPk9UVp11r6KP1hHUYP3S3oyY",
  "key26": "JefRPDBWhJiMuJmutR5qTd9H4UNqQu4qhamkpUjY8WKAwLcpv5DfaA1UwqGP5NnqQAownJLgxU2HGLuVHnEhLqg",
  "key27": "5PhGABtB4zzxHNwwZSYq5BUcNUQTGVfMDAB5WuMLL846x7spCwoGKzZEiZ8ywmvPMiZpEbfXpJ7BP64rBJcLVTWY",
  "key28": "RsjxfahqCBFGpnndYaB4Jik2NeJXLFW3QGMQpsvRtsKc3CqDyQq1Vy86nHUTUDEvwQdGb8LMq28CfV4X8UjDotp",
  "key29": "q7sUTZqnC4gu2s8DBizYNZGG3F11eidtsj5tRpFRcDzJAFC89BQETnyNUDRLC15ujzr8NXa9qyk5aaoErrGZFJ2",
  "key30": "56bdA746sd9euZUGNnKFyjcWvLitmFrTcLdcaKc6rob1yT1BHtzmxGbuD4W5zncSZbAYJ9tbZy98xuBq9gALivN1",
  "key31": "3ueVby1dyd7gVe9vmdHiKmb5ne6PqaPfpLfT2g87CGzn3BcDm6dn4tT4SkX8t6VEjQvXyTe7eRx17QUfaqNkyeLL",
  "key32": "3RL8wcpZ77XdvCyFMGTd3547tzSZLYcdUge6ZUrxLH3j27vJwQXku5QKJDmXS9tuuEvGwpMzXkR1QGJ9Hfzq419n"
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
