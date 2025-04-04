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
    "3Cd2KAnd5fo2Q3coX7mNYQ1Yv3vwW2EF5muVB5dhFWfoPKk9ziwGHeHfi6obW1j9fqdoUa97c8YE3XNEnUAU6TKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nhfmHQQJG6D2SjG1mmWzSYBQGuU93vzJC3uBqi35yDA7tWmYosTuMUQycrYsPZUj4553Bxdu7N726LU3BJFdXGX",
  "key1": "BYDmFrTKFcvRRTxHmVSyQH53abDnpwjNec1YbccETQxN5bcCuZA57c6q3nwmJeAX1VS7RFnawLvHtvsE1nLrra9",
  "key2": "4zaSo4z89bfVvNeWaqp4yMocMVV6zW7b9PvKcCREEKTrX1rebqKCJDrb947VYNGNEri2f2PUHfMErKiXHu9QiRbL",
  "key3": "4yShY7witFU9stVQZFBjZubj7uMd7VfxGdXyQrxqutUxFNtqPNratnvGfAztn7hEe5JFwRJ2fCGm7ptiRhwc75hw",
  "key4": "59yVbx7s8P3bsJmXKTiukqyhgpgY6hgr373HU8NNVMbmoYjt7qFHiGVFZ1aJd3fquYtaLAqDesg99V1eKSroTBQN",
  "key5": "RPaJmoou8G6a25RBCwRj3bjVdjWJnJrcdyQUwof874ydgnBoV5fcHmsz1vuuZS9NzNpRH5HWqFKhbLZMz9Xg5ch",
  "key6": "4ST9DndFUb3N2iFhguVkuytMs2CFVaFbQmSHtpVm2doMXAQ3nUWGeBxRsKCLKRUALsZVabAD2SJtpQr3WkcyePRy",
  "key7": "2D4FZhhgCeaSsfmmA19b1NEAGGuaG9xE6dwSNR4LnPN9uiLZPU856AmJo46RTU9ri4p2o4bbTswdgRMM2wW8qdby",
  "key8": "2oVD1PPykWcWbcucTSsHLSkYQfqXtNoZ3vysgTxQ9c5niW3zm9BAvhDoL7HEsDrGotKktFKnkFwpRWM24imGJAdb",
  "key9": "5fCmKCRcSAVNPmDf24bYGsC24g41HtAMEVVNDMnFhex26fLTCGxMTto4rn9X834WxfKh8hV6TokkyuhDPEsY5nm6",
  "key10": "2qshne6vEcFGzfPRw6zE9eBc67J4hyudCLcY3ijVS4YBoeerfUNLaxwK5oNLsg41Xc6DAhMuZ7V5rWzXBmRCMdLS",
  "key11": "QfwLqaatzZofPgp1sSqw1AyReE2vJT4cePLtEa716NRKnm1xzfpAqUGsVJL1WPZF3Hry1oYj81MWVrs4AZ95qis",
  "key12": "4dTGa9qN1u5f3udbKBs6ys769ACFTijTVKWwYrctXBVyAYXGo3sojif26D43baaVfeW5SJMm9vKz2DcgqDxEnZ87",
  "key13": "2H5i4giaV1Mu4udRLdUR82i53pb4f5EQYZ7v85DGnqE7Hyse5j8UCpFUYLkmG8ncN6c4Go5ZDTzBtGiraTzJSNuW",
  "key14": "5c9XoEEDvGnTL38wrqLw7NCYiHDhEgqPmGouBGvds12BQWutvM8cx28HDEHfdwSU3Fueic1VtCKzYG5JKSyanwQT",
  "key15": "3zehDSEj4628TinuTcc2kRhNMat1sTUVDcGYr2km5dokpuSDRtsjn2iJwEFBwCV5UZNHbhtiPJAb75KDtXFk1MMS",
  "key16": "5wNLURGmJ6EPxaknJj7KUtrfot94segXHwTuEs5mTKAdHTicgZmwLnSY1JBMJaxtGs16Ms78vdNsu7RF8Jpm2gwg",
  "key17": "3nGNnmSXpEK45DgVmRZoXyXwvCi8xEYcqFpVkTp9ekmUC59eYF8qekTUvRFSH3trxqf2hcY4G9tpRPuq9sdQmPX9",
  "key18": "4QKBh9iQdrrBZXZm8DPXHAG7VSiGKMZSrFU67z17iRS7ZHjV8FBPhU7FLSrXuJqG8TLsDhhUne7pqPCf49yZxeAZ",
  "key19": "3muFtL8c1CP8mZFF18ig5KXcEX2erDcfcdmxRSgoCAd6fv4oyJ1PuPhaic9Y95bty38dL84zvaseakCjs34dxz5h",
  "key20": "dvQWB99GPGzHYNwJfbcixdTz7bMz8n1ykqi25w4imB7hViceZH71tSzHep7q7cWApQPcSmVyjAQ9WX4HbqJD5u3",
  "key21": "3thmwUvbcXKGoXd5iifkUENzGBbNPtpuG9nyEtpVHyjmDXBq5Jnp7XFg8UqGLzVuhhLNHBL2TDMn356idTrSQeHX",
  "key22": "3W8cZ8iBKpruSNpB2nzyt2qRNbK7i34gsQYQZQCLmY2UXZiDHEbqhDDFbLYF2tMQufpyLoW3H7qjK6sev7yrNeLd",
  "key23": "3EKsc41wMfwpLQtE5iS23VP8j4Dav7s4DVC4Zz1ArPi6NCafpe8JxbrrfzZd9h8WAkMFFQ1758wZgqonvEDDHTaM",
  "key24": "2iiEnvodYoowRKomYHGNWBRrM8Vrc7LXxAWndyj9BJDi22yJJpxusGTbkHFhEsft7WLuy4nEPw9KaFi6hVrXobuV",
  "key25": "5VN8TucYkSuspxnNCMt4Er7gV6yy3B6jzXfgwyZokcrAbt4cGBwSYicHtYpQDLR9EKyv2A46hMDaNFUZhNh1w3AP",
  "key26": "JmcD7VQC1ojKzbpm8xjfA81J7o41xnVL47kdd4qsQFvq6CgGakDbi6r4smoaGbbR9cocRoFPsztbhaPKJkX4FT8",
  "key27": "38gswJh7YGSkWUrssozPpi2tL8WgD3eNZsSwxNrSgDewUhX9cG7ZwfpunDJx4wF1d3m7tob8cftJUDxiSfSBPf1Q",
  "key28": "462YPySXm8zwrHWgTYPFKwvWHSQdWzijn3mZpjTFT4qWsghNBVQ4NGsoUmp2XKKiWr9jAvrPY59LLGC4UMa9bTZy",
  "key29": "2TiWrrQgLstKNqU33otBnZCsVF2fR74gjAZ54GdSMx9nphTwovfnqFDuoa12gHjr4jMfAbH25sGWguKmMZLCrjxh",
  "key30": "2dZpnWe467U9ebJkMprYkuUW2wnsq5VthYNSJLzA1ZzWqBSRr5AbWHK3fw9WVuKgdnMTha127APJi7KFymEx4eNx",
  "key31": "3Jj3v9DDkdjgfjWG5eARDNCANm3jh2K4QzyviKr2vsMWFCUxDEPXKiBGjt4X2xJVU5EnkDGmJdGR8Q96y96YJs6M",
  "key32": "o2tKHnzVucSZ6QohYYda6jwQsgSscq87SPRubpo2Bo4aoyeBN1rSXa5rkHFdaWfgYUrpXpPVbfzLe3CDFSZtJ4w",
  "key33": "4co2cZyyXbNGyFS3MetNkefNrFxJ3MbaQwDVta2apEdA6F2TmN3yMD1LrqzZjnmBoSf9ZVonHx3ZbV67czvpaSSp",
  "key34": "5JkKPT7kABT1VyT9TaTBZMjBBYnP7REMZpXqFP7LHHvEuMFQwohdALEkUzGkveAuSAYtKgfLhsuhWpapxwy6PmQf",
  "key35": "38PnWVBrTQQ4CUfwviQuhriwFnmotpTGWCbfkdhjYwxbQ7ikEfHt5nMsrdPtjCvf85uFjmcJ47wss97KM8tFrd3Q",
  "key36": "3wU4QKrneHYZmSZEBYUAUpFfAuftNo1zwhZLWEjbZXfGor5Udoxjkfhr5EtCAHKJvh2H5HeqU5u314N9gMyuRfdk",
  "key37": "FKoRYRBY1uKMx1jdtLD2q9brAZ9sKE4AS4ifkZzHXqskXdaqPBb2268gVA2RSPFwKQt6a5UqJ2XtMiLrgAX3EZA",
  "key38": "2PeXzRG7wabzizCyGjTFxfjJLpAeayf4vrSEnqBHW8D6P225iC2BZ5iPC6fB4ch6s2Cw3bagKS69Gtr5Kcrw7r2p",
  "key39": "4sAzQCqMwZLaoJJ5ieJChy35FWdkcygsNgtxfrexCB49keFvXPoNQYwWwE5YXogHt3HAcSw3hfMHe1uc1Ld12Mk1",
  "key40": "BCvAnbQC6N3y8QbERYzVuc6SiM67Cc7YvHZ3QH8cGnFStFCxpbn3MmkP2HC6EK7N84ufr4pj735uegCjiozkFLZ",
  "key41": "jvZuEgWjLg7vcMiBcDtVCairKd8xGAeUJvHmL4YaCSYF8ifg9rZa6RG53ywoLpMXfbRPzru1TdUS6GaBqLycpMt",
  "key42": "5RcNuCiQzFmfEMLhATqmizvHq6LyHkyJkoEpwKXGAEDpuVRxNwT2H13zUKuxZ8EEig3vTVJBFbYy8UFSVGTLG9DZ",
  "key43": "5cRw8iQUD9uZbLRhXPFVdnqXALzScSWkBGWrAZpYWWQe6kdzLNjVThkvnj8oQUBgTbKHoqkFJMAFfS77UCY7AqWh",
  "key44": "2VXfHSQJErH8iJUsEC1wDVhLumaCMrHNzmyvBoxYGmSYCTNhq2YzbZyWaQywubm5qL2YrqhK6UZEXZaBtJiARCFP",
  "key45": "4cSgVLtoJH7nAAFtYvqNHvgLzt6Hic1yfNnPY6CZ5jNWBZ7RR3tgmFo2CMUScoRn8KgyTep43UdcGGcUxBrpSegU",
  "key46": "58MjpUbWJh1BgUrYDkFmXR2ptGmTFrM9yY2U2VhNdAzuoKzekC2mtRp7Ho47UndSYMxumYsNjR4x9AFT9B7x986M",
  "key47": "2158C1R2DALkDzRQgv1yK7uUkEvZRHc4ja9WnSW1zYRMCiF2JmQbTepuKvwHusePFTGkBFaSDWgoVygUTyZwCmPC",
  "key48": "kmhoQ61S98xmQLcgqwpYrdixAPQ2ZUvqAsBSn7ShmjPF182HVuDwXu63oAvPrXx5Xv9es4VYvTiH2sMettZtJeZ"
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
