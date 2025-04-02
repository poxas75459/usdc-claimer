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
    "2uqpjm1T7WG7iaYv3iGoQMmoQRNkLCfyv9YPWXoRxdCCWVbFK6in3Gx4kCf8S8Nxr21WcuvBN8ZRqKcysjeY1yfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qPiRddUa97nRa1Lcu21jGYZMQcdNSw9r4hmRmCkbGPUsq1aHBhEp1okJxermWe8Dw3GLWPbehSZ9L7w1CGyxC6S",
  "key1": "29kSv4qLCKbodDP45XJMfD9YhmU91q8dqfLoEP1qmAoGEDD8h3aRMsadXCBijYKhmRFgMQy4RippM9qNx1ogUTzn",
  "key2": "4qWWWWAmkdSZMTf4hBVEpdcqNPU9iJXBmt17kQDpKXivrXA2ZsFqbCZ31NHeUn14gfhiLS3TmjHa9JELq2haR8uD",
  "key3": "3osdDFxHtv2NaDroGnFxAhUWbZsnK6G4km1nWdrHFkCviMa3rDwKRdET1L7jroqQXwKDVRz2XSRyGk7H5355eyH7",
  "key4": "3rVvpQin6DTTyxqoHf6YNQiLepLsgCtGHakGwF692brmhFNss9fD4DGQ4vwZevLza8Lt1gyqCiyXcUnDqdrZnr9K",
  "key5": "5VtbEJVjmwo1NMtjix8s3snxxeUdFmo2H8247pWjWBGZEFNV5BYd8CGrcLZoZMhGXYetiut9QD5oXuLeaUWNh92J",
  "key6": "5kmADtktfiRby5aqVADnjGwZA2yNG3MzDwPTqGAmS3vjeKAf9z2rz44X7HgdH69QrTvsnAUz8kJiL8vmEEw3y7xr",
  "key7": "GxXkiM81Q4Jkgb9Nwq5XbovzZjFvLkBguwXYEQM526zsDQdYpk9ed9Zu6YQkvC1j4s7suGRDqz9mgg6yUD4KgWD",
  "key8": "HUivSeY9ixjRmfqjYTHGMK4bF3HAmG2qAbmdL2FdsPPFcc6NmEe53yjM4dLXRPuRuakF6Vqc9jDxyiQTkAqQrbb",
  "key9": "4nDrNHbzMpwXCbJPYyD8eQXXJrS63qyk9aaTtTf1aSLg9JFeREwzndecu25QuehJCKm5efL3Vp81L1ohADEVNvDx",
  "key10": "2mgUV8KDhvK9HTqLf6s79NrxXGmQZWAXPtVLDThpTykeFqZuUFGhPGRsxiLV86AovfsFc2TAL912g2b8BSV389Xy",
  "key11": "5ypfX4ZfM5JMfjambkw1mP7spZH4kH7a7Rc1NHxMS4UaRwgfBSpX2fczpB59mjRs51meiDE3BmXcQJTSBGm3EZ2f",
  "key12": "5JqYrj1PzTRd3kqThQzopi6MipRx17NkXyJCvcRpiG8hLYrEyCMGBuE5hJg21poqifU1byJMFGYB6hmR27mgmUFU",
  "key13": "zMSi5BCcUZvpMX9xkWu5CZdJPmiXkwiUZoKEbWcNUyFr6iG73GxCXKtHTTVhpT7A5cLrgHg7eqDEQoGwmavXtkn",
  "key14": "2tcZCmWhKvQEHtZHNGVNGm7GVXwDZvFwsvWKfjMdbA2FrLEb9V3uadth3PU53tcEXeVRLn3QohtQkPTDLyH8jhPb",
  "key15": "3DTjHotqAqR7N2v6uxxHvLvEVTmkvTmVDCpBSK54Xq4SwWPf7kfKsnSL381n3ge7eS8AbXeToYfjRm1ZpUysN3Jn",
  "key16": "4GD7dVBBG4PU3Q3HejDm4Y3fJp6EWfK14CxMtsCddTd3iXinTJrzfhfeyZ2BPGAFoFfg4DEYz8dT21T6hHL77VW",
  "key17": "56nteLeUMWV7WMLQCRWRnh2d7UEnK5VXuFCQxwqeqy9rsNa3U3a4vTsrpECNiTM3mDrBP2JsNSY71ZCjq4wxUvGp",
  "key18": "2efzwfQBbsoeFMwca15vZo77LHnnNsTK4oeBTMDcQrU4WLH51Sd2tBezViwh57BDdBmLwqqqQj1dVpWRbVr2nvyy",
  "key19": "X96yo77zyERGKRtSwoQsQpuJHrfKmKHCNpJTvMNCyMwGZXiE7ZrqAp9Pq3MsFzXkarKTWyAUJuXqk6jrLevk5Je",
  "key20": "3UJqYDYqTq962kAxwSqiAwdR73n9HiLaJCikyraTGfJcNvH167sXUWiMyR4HbhTupdhiz278CzgfwAHH5844xDrH",
  "key21": "3tS3naYSxLr1D9v2CFUcNNWGV8b8hUyWwU4r9mHEmnPdpGyqUV9ziXEkxVzGa9o1JNoV2DsHn46AnM1MPVBDgk2r",
  "key22": "3Do4seY5ZNKdrNALtzZm23tAGBgZaEA816Y7HQtt6MWy8U4bAhHW5rwFNKYSEzPVM9225Mb4RsXjKGMeCdAg89dN",
  "key23": "4aMrPj27QENC7hHw4VfGztHmNcgt3PcHogAmomMLafRdwzoXRETZQaLKj2vpnwFK3hbnQzwzeTK4HhQnaGevz4zS",
  "key24": "2yn2dXj5asQCgcBukyFdDZioUvsV2aZ3ygYVN8Vd6dzRcu2E5U2V6yAQFDBUFst1Ctq9qfuTpUdTK8tM6syoY7k6"
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
