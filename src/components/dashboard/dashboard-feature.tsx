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
    "5wXmA1H1ChxbkgnUe16vppVCVoXgKb8N6kT6PJQuVVMhc8aa3N7noFGqhMHZkKQJr7ATEEuudMgzaALnTzfsYHhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VEhh3VLhcSAEsYoArdgktGbiuh8uktZ6K33V893jC2v2mq66JAYoubqMy2A2bFP9YZVGdwSM2tcUQKTxYSC4SKL",
  "key1": "4Kewk8YfyBWZMqLTVrmQYeeVoBT8XNqvrrJfmdtDUD6cbMhjErohJRW7HUhXqWYej1KYjQnCFAPzp19Nqhnzv5m7",
  "key2": "5TQtMguHjjNQbijqGkrJoRNsBq1xeC9gJgaQHENvfMz9gupjqXpNpJpgvUdSpC2N7hxPYcPvCi9UTuQZiqChBaz4",
  "key3": "SSdA444Un9gcNyCEMXBgUAYGcYnggwDdSfuSMWjqTURNHyTfKj2S5p9xe1NJDe2RcCjQhoU2zVcCqpKcdxAKw98",
  "key4": "4vS9sGAMFQ3a43PqjC3HgfvzEyba1NyGi8bYbE9juK9DLAW15Kh5x9g6GkoHWcguhWm3gCheDwQ32JAnfaNhzw5r",
  "key5": "5HtkgCoGJxYH2wg6oPn66JRKZg4msGHU86QsaCYbYMKSbe9SKLAhbRWd7viFAV9aajoS444rqUhjXiRfmiXHN3yr",
  "key6": "5BV8xaztpGMxF48njPy2yi3LK1VfWF8iVnPEeZddKgc1PEM4o739yQb2sccdmjPPvpz5LeXvvr3pWyVsVVKbnwUJ",
  "key7": "3nYsM9m4SNWWQc9Ugw8yVPiQ3yAqRhLDGXqvbiKqRQBZ2csXGrJy2ppcbWwKFPSGC5bivuT5PCa6FajxUfLSbXPP",
  "key8": "2Zd2KZJwti3gaNrEUQQBVE4F8AxLzEe8PrJmKvLZSHCPzQtmZN46Nq8whsd5oPA8Qb9QNhUpfJas4r8dbC79rnZD",
  "key9": "G4ff8jpUVsQxthhBEHNGsDWaCknEbvu9sqd87JvoMAGZyjEj53LBtWKAGWGTaaf8YGWWzPxtnDLZznGdCt1qQ7W",
  "key10": "1wV4ANF51dLcraMDxmkdPGVZo98NnPgrdBt7SGrarJJ7hcx1FcKbJs38M6kVURnp7FrnrWawAvVmS8GGUZisk8D",
  "key11": "B1PYtm6WkSYW2M2ikULdZxf9csALxBk8EbQKEbvFJVYL7gPtvZdkdoLWMVdGhp2bpgDrGonBHtaeLbKkEWqYtWY",
  "key12": "4d4DND4tLcy4p9Xkpg12QeotYJeqLseQ8UcHUE6vARQahCEwJmqNNEbjvPYgGQCY9CAVa1eHF2RLNNR92aKxaGnF",
  "key13": "5YP3EUK8iQ1GbrqTZxZDufdPaU8LUAesjYxsvjSCsuiKuJQTXna1wJ3JxzvS5FjCYF66VuNLeSN2G8RXsqPViQzG",
  "key14": "4W1muH2nWeZ2G8rNKLs9WTVahs8FH5dYU5JEuB3WzmUX6oSedWKveZ2crNqetgDUK5SmHKyHU4uoLk8WR1Zy5TkX",
  "key15": "2vhLzL4XWXCmh6TbG9u1PumjtuKFb6Ab1Z889SzLH3rTLfqDMDgVCMBedazNBLiyWbXnVbbMQ8wTKK38igvouayL",
  "key16": "EYnEfVHwhTDrzanTjW9RuXxV84yyjPEix6JhcECQ9gxqEVPkqnsKVWd9B2ndQV5LnmGraPAgSqVn2GWpwkESR3b",
  "key17": "4HUX5rc2rNWMTR5Wct4baJZdPkTjnBTEXLuXtzF9qTh8w1WdWKQAVYpUVZta3du7Gv9CbPPPAoCKHG1fTvKVwtWZ",
  "key18": "2NkS6jrZRbApzumeUi7R9kfxBBQUvFqsyNXecSVfrf5LRzbb1DRPSMG84DzeUMxz41UdtrUMDTCDzD3yGC4wznBN",
  "key19": "48QowXWa4gwSy8QHUnm2qdztAbyW8egMfRK1UyAeLusEKCWuQp21j2pxcoGSMHZfrJ2VpCUxxkvz4mgbJJeYLp22",
  "key20": "5XBZ3G6F19rQvc6ZhKfaUviLXuYAwkAc1NiLhzGdfZ2EH3D38DZju24GKUqqt3ypBWoyFQaSfjsSabWkDiMNYc6C",
  "key21": "CxNNMNDmywnNqR25NVwDHCaBT49FYuFQkZuo6bAKoztUcQU7PLiJdD14fdpGBeiuV2SyohyorME3esBKZNYMg5f",
  "key22": "5meP6Linf9AB9TbcJ3chhVYc9MXT8rccB7FkKhW1eX9HkVeELKPro6gXcgi7yEqjTXqbnDchsZqQ3wwJhkJDCTRP",
  "key23": "4uyjdrroDBXno65xDwoSdUF2w2R6kKu2svUfX5zNDYsuY8MgWXhvHFPWMXpNWnf783q9uYoAQ3GrcYPnZnpUh2o1",
  "key24": "4P6qLMfk9c2GQweE9mMYShH38DmGUR7XHh1H7kBPu4gKC1KqgTqzAVVsQqNtBNJwJAdNdzDghuN25UwAKTEEhif8",
  "key25": "4vf1CohWUtGj1yXDsMnU2hCANUyoi4vfhApeK1vnz3WK35oELfq8XdyBD7QriuwLMuEmbBssyafhva7J3DJ3GeZ",
  "key26": "35iwADq91wWWHoFmptc5xZee6JAk1P4XnGJHDDuiHcZc9UUy7xgYcnupUe7nG4w76hcgXaD4HnHU8d9YKk6Mjk7x",
  "key27": "5XeaeSno13M4o1Wnq9v54nyE6Vx8STCxyc6ctHoiGgX2QUgTqtHuRBtDypffhybcAKC2pd9UmxZB7cnHLY9wwtVn",
  "key28": "YqSFs6hdExcC1pyN7BJtwFiJYR22FzEZgCyfHWdCotg2CgTWnFksrRBQMGoWYReeijvgZvErx8cHPBzcE4xvpc4",
  "key29": "3igcZxZgiFhTLZx9gEsXQH4PdHexN1BTxYxPE7puBoHZoqor6MevSUCcxp9YfACBT9yk15w71FcyU8LR29QofB2e",
  "key30": "4YUbyPxzJMS7jwXunoh4uCtWcKXLRxcnGBa1whCxihsT1nWRkjGmcNmwFf54QJHQ2HbkuiwkJi18D1ZhTuDn9x5C",
  "key31": "39gBh1hsY9UtSiacjVM69fNfxcc3teY6W74bgj15VQPCpXnd6aGBDRqRr56LvtH1nkyTwqimWBsE3498cqTnpKie",
  "key32": "2FFbmzLK2BCUWEuBBdUMAdmsvX8JPK8xwbPMH9NarKchJQFfoVtBvnN6JbrHVapTZ4pno1dnPFhzPf8S5Dqw1CpE",
  "key33": "4rvfE91QEyd34eqbiCTfiq6cW7Vwxsb4SBWGfiYHEJGSQjATgiPDpusYmXSC8hKrSoZ4nw4jS2diJBVGbDacqNRt",
  "key34": "3wFt76ADh1zhcw5UPjqtG4GCrW4LyEuHv5dbdPRw69eHuYTSL2wqPuk2kjEGUng57VTCCwTrzyzEtrJyyKAWX6TZ",
  "key35": "64HWv12y5naY8BU1Qr3Lhd12AuNziWYWmWp2Na8TjEYvkHgvpXHpqx8tZ7v4WgfUSBZRAjtfkKxXdX86BXMNtMqz",
  "key36": "5YyWU51uetVoaqKZZw7WYWcrELfMsBDf8RECj2Zs1rEDqGZSqGuWEGKPowv8YweuE4koMvb6fBQFkLGJKH1h1kHy",
  "key37": "4aDc13A3K35cMPWdoHnKuj7vTDbRi7ihESTmpy3APckCofqCkhZh3U9iWDzLmyxbbiuvoP2WPjkkh5tp5x73a3WD",
  "key38": "3DVKpNLzZDwFiCeShfYXmwrzFfjFxvFgNKu9n8ZqqXowYdpTDC2DAqg91tcxeiAT4VTJbDzN58e2vpBdMGX1Uofv",
  "key39": "4MKFnxzTSNBS4qicQTQMRnNyxEgbuNuFhsoPuyk8mHTQUMpjYFw2jKTi5i8zSnyFsF6dm3KdpVr8YytX2euPSscY",
  "key40": "5S9rZAg4Ftjk4u8E22m1sc7TaC8gBKuAnt62VU9vNC4XCtYnik5MaEujQw77ko1sHTBGQQQpuK27Vnner2i6etqa",
  "key41": "tg9db5op55czGRKnwH6566ZpWHTEgtPTorkzw9STHWcTLQAzUzejp1ZHrewxQcc55WMFGVgTg2bc8uJ3azRmmUg",
  "key42": "3rmwwnd9N67fg6Mjba5aBUTC9VXtLTCDgmoH4zrBjnd4KFDXqCYJYpYxnt9EcfvysQt5pcvGxpnLFBzQu1FtwkCD",
  "key43": "2eaMh6ZxSeZeGJyCKRNAHweYvpEMsPYo2hjiW8487nmJZBhoHMZF94UWfkFJg9DujBqzzaBRGh2D1nAN98VfXHb6"
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
