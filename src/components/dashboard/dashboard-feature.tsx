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
    "XnC3NxMC7QejyW4dnN8YQA1EFweAd3UDqZD4heRdA4G5JdA2XbDKCFgKhV2yo1NWv2Hi3VqXi168j1g6iNQj1yU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MjFSidBqr6mL2rX5imcLvw5hT4JsnpopEnBQaWrC3a1J2JSsqXyFZvh3rnzJjqXJTKx3R9PkkqjTuy9Xr6NBL4H",
  "key1": "3SSKEaGc5S6Ni8VEyZWARweFDCX9MkzoSv5x6dQjGLbvYG1xz4GdiJ61wis3Z7S2W5SCTJPdpsnFFSphdzdMycaL",
  "key2": "4C6JGBNqtcBDcsjs2n3wfdHLti8UC1m9m7osVXUcDFVsupqv67Yq8d8ZaduZAXtFnwkbVsPxZSoUtVxv7QeELktZ",
  "key3": "2r3pWJAKg4PJgmRAQGwFprkn2Y4Juno36ZCbaKye12xrAm8jnSURd3P5T64P7m31yWBfSeWAP9AnrULPe9zEJ55z",
  "key4": "3SSnGMqriNnnuLgcuWEHere6Xapf5WjdZhS7c1wRJB8KRcxnHLPejLvLu7ZusMkEcNC5ZrdtcpheeydeYCzNQxXX",
  "key5": "25ukAA8EtPqmmpQjA88iERDV9ArxzCab8FLGz5XiXUBvgxqe8tvMUsHUAZD9nuPq6o6eFR4UTfNBA7oMiFuKwzng",
  "key6": "5PGXM9DEUqQRyugJAhtt98A714Q6FzfEkJzwVeG5tNAKtA5Bj9GSrAp6bZQovMUZEfNaJX6Me5wiQFgYy3awRnyZ",
  "key7": "4R7uazNw6BXZLU4H5229MuaaNVgPVeNrgqw7PFQJK6meASB9EsMHnSGtxaR5VACppdZKAo4K5iCeYwu8RvXmYmYY",
  "key8": "4xetub8k32Fseze8rV7ws5uBuR26gQ3g4XxhxvdKE8vTM2fzkTREBqmfWb6AA84HMwA2caXACBT9o55ntJoJitoR",
  "key9": "54o8NxkQ2jK7AKuvePGN3mB3n6Kzvg3wLYJN4mmUo7ej2n8b7DqgzoK94QbTSsrrQ1NZMavEBraFNEuWb6BcHH3n",
  "key10": "4pUkAmocdDKzSH9KZNf1u7Y7ZzR485SKVr2UpiEqfBEqC3dEpBBRAfnVktjhNuYekxdZfgZuXTBcQ8eh236UxdP2",
  "key11": "B7GrEjSQwufh1bYwfPRt4qF7jFB19psqTtFiVz9rfEvvmtT3WKSfTVKZMKjAjDfo7oUr87LtXddLzkhQakDTWzw",
  "key12": "3KAzQ7Co4z5e3aJ7UET9Q6WUUrTCrfwGXAdcLSgtdgYfg8YoE6Js3FbJX8PzUpydpZDRqY5YgkA6vaJ4whk7maUy",
  "key13": "5eAt6AQs9R8si5RPs8s9zJCA6Rd7wWurJYBmmrh2inuqp5iB1jTwqSXzVfGToR79e7TrUjLAfZnGYsxQ2voN4n3R",
  "key14": "UjgW8o4i3WUcBzp2646ddTfimKWtqhFDLBGSZY35zqzGgwhoipd2nA5CvbekuRGR61T1QCZ89wfiff3izSSoSmj",
  "key15": "dXQ6fgygkaaBfE9yw3DcMan1Nrsc3g8vFJTmwoUP85U4Q1AeiFB78hmVcZFsSSQNFLoyr5rWpUy2q1qWSqBDoq4",
  "key16": "37z21iGuNerjNqNQf7FeYTcquAev2MzKUM62zkDqoWuAeHwv5vLmVza472oEBQHhuRtogy59gtj6aDWrNoboHCJp",
  "key17": "2Z4JdbYXTtHs1Hb4F81exaq8bJFkhmRN3QZ6Uh5Mi98kjYZwsGgPFWoGBSxnmd3jCUwumdCigVchP4yueXNB6xVL",
  "key18": "jzFGeP1iqGvihKpqeTHkGcSWwVizP8ADL3UC2nruyKm6KdkVPHpc6MXwEXmmRUoxk7AKMSyAULj9c1Me69QgoaR",
  "key19": "5zqnU3r6cGxPM7XkrXWkoEmKSC57QiVorSGGRBQBu5oScPUeKmyCCeXdfMc7SPYLf2rZha99ZJsTSLqEe42VDFfX",
  "key20": "7rZpCNks1YAjCbEMhVJ2eBe3owM4kqqRbLri1FxDiGswUvEYji4af4wJ2dUTycMUZ8fyjA7LA5yme4ZX13gATex",
  "key21": "2rQEB5wWfZz5fWg9Zm6jU37MG2SqGLFVbkeJFcmd7NaMETHgS8LF2caJpnJzuJooMVWaaWftLJodPKh6Ydk6LfoH",
  "key22": "4N3wa9Y9xn3PnFnkQp4tgd1aB81ZsPuF7LybUJKUJs6iF4cpX3ho7edwE4EZiv7pYEayG7MYnVoEBYDFWiFBVUWK",
  "key23": "2f6erCFDTdB5CKD3UqtcKBm1WLuY6jeuqWSoZ7L7LpSFF8NUupqXETMyZikH1aDS5EGuaFXzhqUNuaUMhvNzHFk5",
  "key24": "55M3ZNdkczz9imFx2DVZ4jzZjeDAT2s43hneENTsD5xZZ6pv5GyrbcJ2ZnrDqBRpwVrgqJPWtXkXpbZEkaW3w3p6",
  "key25": "3Ntn6ujAR98Jdo5GWwjTcA2BM5RhAEHTJLCEwcsgJYv4UKzKCkZgH3TeHqpvoxk45ZbDD9wShWBd9QoSsWnfVEVH",
  "key26": "3C3XV2NX3KnGbcmZXqbtKahAdLcFBNzCUwvJuZbvY7EbV6RrksVNEUwk2QsB1sRvoeVY6Rt5Q3VALmPwLjmAgBj3",
  "key27": "3MVxwT9kWigSjv1nkNKmLQzi3RNgmv49qGsk4rhzjgr1S4z5BQR3j8byPNqurCFN8zaRcPPiXQkK2YHnRq4muHgf",
  "key28": "4zULs2zWxpm8acrZkbFb6W71NJvkA5axUbo4hrUBbAukQMm6jQAy5aTD7WGFXjF3PHcj4TyWxivvLZzpK6YN9Ppm",
  "key29": "477iNMnxkJ8m3pma8UjY3XinXy3WDWp98jMeEKUfUdUW7tF8f3LrLgEMzxYzJGdWQLdK58dDzosM55ZHJ4nC13yV",
  "key30": "41FsTdfvKEGZqw1p9H9fTyJRyooKDFzGnyi1kY8vo3bCSaJ3x2tQCvdDBcZTHuC9xDYAcr4xwj1y2cVYxLjWGHvN",
  "key31": "3k3umAta5hmMFdzQ36VruWdPiYc6ALUNS79mfGRHdUYWx83EWYXN15Qym3r3ty7JxvtsEaJGCN8Fg15jcAxTPHzo",
  "key32": "3LqE1mQc1XPdzJKYDam8Hp7XfH1EMBWavGoEQZRqJG2KAEVJFX8AoLNxcxDnDE4ENFU3K155vdDEbeExrxpAba6P",
  "key33": "36JNo5jesu4DBSBrS6uQx3kMF2Eoc8DjibqShXeJkRziMLrStLUztR4wiWpoc4tjrz21tj13tVVeQimZ3yXyKRKK",
  "key34": "2nC57YsPL8djhzeyeNC61WbmG74vSQjCc2p93K7462trTMPwGLHpmjPEUYfpSaj3ASoEek6ry3SW8ifD5gm7DjL5",
  "key35": "2PaUA6mA7qEet5kAESMr5odJtiwGU83qogXJLnm1dTpsir8QhJeJBUCALKYet143ACVAHrv84gPkUNw5451ZYU9d",
  "key36": "2cxZCQM6mjY65y4nD4KZQHJzvocsyX9RjAtsgnoyp9CWK2otNX4st1u66nVPZFHZd7ifxbX4tXK22tvWyohzTW3e",
  "key37": "5Ge6KPmp4tA2roU7DdWrrZefqS4Tq6BiKPTr7y3pzPQ1sehkXM9WD2KqXU4LPMZqJCBHa4U2qoGZkyXjZNX9eCCq",
  "key38": "49k9TaMmz5UfziFU74Rgs6MGz9e2RCoVqUdb4NZCwLrGPtwXxaFb97QNvfYhAt1DeTsNhFRK34FuGEhDVGcwEeCC",
  "key39": "7HqBFabeXAzTgUMaGVrML5KqWSZqcb4zEcwmgnfBcRFcPWScMviAFTJqcthHNTzSaB2ofMGmRCrL8e7BnV7mv9u",
  "key40": "7qvvqkGYD6unCqZERvE21UBhuY1nWMDUBvP7u8RNDsxh9now4owefKhzKbsyYQoT22D4eMAzmtVh2AEMUjDUnUM",
  "key41": "qArtcm1U3PZ7yHK84XZd49ehvrnP3y2xrnMVNb8MUdS84BwdCytxuiNtPbpTa27YRiwzTLq2oJ5RkkTx22Njw4f",
  "key42": "4K1zqLjnNwBKTq1YzF31J6PzGHqteCJhk8KsRHnobCtM7S7g4cbDXMeirhXvoBnRuE3gxUJciqB8RJdUEyQpqgap",
  "key43": "4nr6FrZKha6swhbYTEiaAFFDKZx4pxFZTA1BZqrWr9gDQz4Q8ivzjfe4yWySVWvHzM2juaprWs8eBe58VC9YzBR2",
  "key44": "2PeVD5SZ63NJtQKNYGVgS2mFE6F6NcsgiFvv4f3TabUAebckwLBeEDGE9Yuf7LScaBkyhU6w1AEU9NgiWvQsqtqC",
  "key45": "4PKWk3x81cNCBobsjFRUBYFxhDbnTkTqPpWdesUP1MwK3sqGpnE5aty41mT8XymLLVQuBvWUkt4hvYC9Ea26XV5z",
  "key46": "PNTNk7q826V9TJNbRnt4ef74owV9T4eekbKpc8j1bxbrhpaH7cYez7tfRkxV7prWA9dph43NRHSEK5awdwHAgfg"
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
