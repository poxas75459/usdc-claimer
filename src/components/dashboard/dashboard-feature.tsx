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
    "54qBm2CC6FfgAfjK7RCas8qCFqByFHQnZePZak4C71qFYd3kc9ajB94X4RCKmG8Rkihdc26H7sczdjh2GrjPm7vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bJ8w3EbZA2dChZeeCYzLH8anhvFFfnQHDCdsuDnMGfumsjTkQSTquXfsn7bmCYT9CBbibrBsf9cxoUPThkC8kmC",
  "key1": "2KPzj4aNPZPsRKWKX1SNW2B9v86Mb3gA2Ux9dBFwmu6scNLZ7ghV6HDNPtoJSsiXfgUWRWDi9djd9PjKTdfn4D2u",
  "key2": "4aZtYSsT6eMFZJUNJNzEX4WXaqeqYmYyyag7nbXnsd6xgnMkvLJVaR8WA1iXQDdRbLa2a4tRDUewQDNFsg87rW5W",
  "key3": "wRx9B82pUtDAY66idbkeFcag9eHSNyZF3aKdtKnUf2nDLeEbAJuB5F5tGbJrFLSipWBLvBm38DE8seSUnDo6vDL",
  "key4": "prZckMkEbiRWMYJFYAVt6qr7dE7nVZtS2ZfaDycrgi1CwyFRjNdAdC6kDzgtRh7V51prNEwMKbiSvuhe8XSLVDh",
  "key5": "wtXK5x5xgPe6AsvT1R9ptXuXqMDPo4MNKXStYGhNYib51DS75v7fzRfyMwegrPbT5HTip15sHxznVZiZq4zp6A6",
  "key6": "3GmiqWXtDurJMGYZupaX9tzUbbGvT5swMd1Epa69Q81M8yjVR8kf1jpoSVEudayjsTyrZmfewVv2p8kGtcGMSoz3",
  "key7": "5p7aj3Dcw7dMPHqL83uJiQy72RzR3oknTKKgeiyFWV5N88z9bK4Xghrowbb91RUr1CMCXaygS8h8gqVNUBN7azaP",
  "key8": "4VYty1EwtigtkpnkqNvTGs73KceeRRr8un8sBvyTENXSRtdzxdjuKENFovgV9H8yA5mko9adB9Hnqu4ieepsXVYg",
  "key9": "4KUAp2owP7jVSqZd1N4Yq3Ux44gKapRjkhgyFojPrPnZujcNbe12AtPaa6iVnvv34F4J5gjG8f3MGpciSWdrWEwN",
  "key10": "3Mxd6pq2dXAsMzDnMx6XQNn6VQ5QjvHHGK2e7T3cwtNRe2947W2ZQwaGBYsC8U9HxWyyzBPSoL11bi7whwtTgtzg",
  "key11": "2FxuzTwRA6Uqg7Kjo93GrQsDpPoyF21xnQ9bR7Nc5FTewBaQmrgg6NCG1fka9zu37NdYC1indLLkv8xabkY5BSmb",
  "key12": "24JoiPxykEsf9MrbqgpHTpc5Uj87Gdi8mmWSPbJ6cb5eZDhuFcueLAy2djWnENtQgacWPir838me7vZQeJWwZnC8",
  "key13": "5TTQNa686B8eWSuXrWpGZu8syva5ZtdCK8a4BbJQWEHS3bMByb8WrM6PcwJH6ujVtNrquaQXMUXcvra8o6HWNx3D",
  "key14": "2aUHxEhrvW5dhuym5QsEzfe4wBzUxWkxR4JtgudX7N5ZHYsibM1hwaJXjBt83SvG1ET2U3ZCZquf75bVWco4BQJj",
  "key15": "2hSiFgL1KthPpjGJLrWETufvC1846cj5PP3XQpe2Wvwd49gwxXwed2ycfHxo4HZmR1UdrGcLrUBXhHZ22BkQmktR",
  "key16": "x7RWTZrb5pwnSiKh69ezK4vqx8GMCyAFJRUed7iKRV5ns3zWqurYnCUpLgsLM6dGbY3y4aM7oRXM3BNQK42kfgH",
  "key17": "5Ncw2hiNvfHoiNsX3t9unhyxGtDKnVoodcwxUFJihPgQpTSuLFC9kvMnbTQFeHU5qpZZatNRCuhe6h5r291CensY",
  "key18": "2qPZgDQTrtz4MePLExwjS2XqfQ5pkbB4LsCDRsf3siRLfRfPQ9uqz9LEejPDRgEzqqLvwWA5N4Qjxqe8ZFx4A24X",
  "key19": "3V5d8jfsrLSwo3eHk21PjnER3Hxcm9XSioc8Ege1UQ5ovkqeQsEhiTrHfbDA9HaqViTskx4fJtMQZuQVXiuoFuDj",
  "key20": "4YNxqWsVbYNdKWoPq7KNwsFGBozRYRf2fqCK5Zm5n5xyXnoLiCBKRSb1b72iiR3ZdoLKcnJoDcxSaQWY7zbmG1F4",
  "key21": "47i4qyhQymKTQFjLsnRVBFBUMmkSNiWDGBbz5FEgR5chTHwSnQmBHu4diH7MvnGk7eeARP51NUG1azg7fFR9v6gb",
  "key22": "2vLGfPjGwowQJR5g78oB3PgNGgBgjoNpA9Hp7LkqsFUCijwcBYsfoE37GWuRCmEjwsSriGygDQsZc6Uz3aLCNtx1",
  "key23": "dCvZLYGsfwmFdPfntktHbEvwVTcYGLFLnWhzcDrndQbZwc7MQ7NrMLrK1Y2BmxqNit99tAeAK9Za5J1AiprfUAH",
  "key24": "2JefFSZxWxMksaddM5vAWnKvfHE2AmFMx3R5bvEq6Xk1bEVmpPdAQDHFSyCptAwQ8NC7dDLY9QUxjtqyTBNHqHiB",
  "key25": "2bYbFmLArVr5cPWGQBjkhL9w1E7QQLi4o6SFwanTXmpoCccogqa4fPE1pvdrgHGBT1Y5C4AQoD3BcVZSyjd5c7HP",
  "key26": "3nSkAcqK4PTnYDakeDy4pXk7qPu6iDYjfqMrRKZDZF8L5hiExQhr7Vm3g4pQLAeNVvoAVYQ1EirB9HUHdKaLcFuq",
  "key27": "23bH2YAAQADrNNEoewvmRgXqGVCG6YGSarPTxdoSMBdHCBCARN8k3DkyFGw14Tz4CHPP1LGMDmeVpmyu4y6cn99G",
  "key28": "5cQMmbwXtN9iHHt5HjHma2rautwt9Sd98ysaedRKR6sgyRmqDiwSnzdW6phdqQeSfRfMvd31eP6xF8ZGyA7dhhir",
  "key29": "2JzxWMxU8qATMmnzbWJUkHnjyEc5BYzeCXJfCtKrpwDZ1AeJJuSX6iXeP63vi82cEgX7gmVgj2jb5ymWWazDJjhh",
  "key30": "4nsTbnyz1DVNcHKjZkpzb63TtrJJ9EQFvDeLCPDvZAaHP1kAZSrRSC4ZJgsyvpkiXMhzYGyR2CyVgwmCXsidYKJ2",
  "key31": "39tmMANmFmpyTbYrNJKmrvxbvtn2kASRogAkMc84Tc1KosytgScePHbd7EXSCNa2Gd1PqV2Pvt4LD98XMNmW4nXP",
  "key32": "5mNK3P2D69gipaC2MQNjSFwKrMjRe7iH41rcSiAFwqaiSUkLxJZczGqKLCnqJDqDzU9pTjC2o4e8hnTsDCryrJrp",
  "key33": "3oswDCQSeEZchzzTCx2D1QhwqrLLL8971ruS57CPeStxCVGaUUzjeqah7T4zP4jLuz7vfA4dY18GnApJScaHE3s9",
  "key34": "4p3HmFyRXFKRTR2pAytd9sZreF9mkbBwZ9JrmMiTQxwutHPGQX1GG636qaGJdNajxmxwKyNQ25WGvjvZkX3SR6Ji",
  "key35": "2upWHbHZpznxq96R3fJjbcDsXFwJ8rNoNv1FEssro1BxNs5HCjQwknfdY7F8y3fnogvzDMuLTicPMfbLzR21z6E",
  "key36": "65ymWyKphRpWH1ZyASrpMNoHwhPknZuih2Pvr66kLbjsDTG5HSfWR7JG2tE1YWmmXJd9t5WpuWpd4hdqxDqTBr1i",
  "key37": "4oHdsS2G2D7jTajSdq3n8yDFMbcRCKMGPpCjYFfA7TosPML5vVr5HWN2HTrhjz8yCrW4TpW7gyAckQUddnxF4Y9f",
  "key38": "5ERheNYYQdUxgQa7LXkz3SS8tUFz2L9ez9TavXmh5ax5J8PK5kUXaQpD6dj7dpSvm4HutKEwHHmrSDXwCB2WTPTC",
  "key39": "4ExNzjX33UMrM6SeDyrv8kR1kadJgw3jSu34FVsquuCkd5zxBBBdHkVWtfEHERMuc79Sepx4SBQiYo5VJVb7Tzf8",
  "key40": "WSdab6d4enxEsL2n6C5RZqe355bXruBzf5USCtPaf4tL1Dv2aiiJt3G5htXK7DoQyvWj3Yfn8387pBAmFM8Q3rA",
  "key41": "3nfHPXkan5vgToHDL8yk1HRy8sBKgGedsHRNNy4PwkjRvLXaEgcNku4Jt1JiLEQ6G4ePfLKfjSN2FAbr9AWJS2n",
  "key42": "LidrWsFwgcaGA3xHMVdNzsyM71Sdy3tyEPuJNtjxavkpsnQHxmxdBWPsR3r9mUgBirY68zPw4AhN9pB4U3tkcec",
  "key43": "5WAuQagCWpVGwPZANiWapJtzCi7SnhW5AkNPAgSbN6r6qZLt16g62mL2n2iSgxWxvz8KF28Q6iQ3eM9KcxxphHmT",
  "key44": "rr7x3ToQkwcFPmwAFCD6oGTkZtuHhjczR6waLixjJSfPnMkQEhUW7wPrTK7nrwJmXu31ssiAZ7tZB3wL3zSTKar",
  "key45": "5HLbZv2P5dR9iM1Y2qCxzyAj3MmWPnnwwzzCZctpWVVch1gcMsYiUKnMZfvxKM1m1jX8P7XSRdw3PjYyELs2e7sH",
  "key46": "MZKcSF4vDWYszqBNhC3sz3vwAcfCa9jXcQu3kepHy27ATfxPxhfRWwRcqmoGK5Xixhj3ikYqY4nJGmR6XMdmfwc"
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
