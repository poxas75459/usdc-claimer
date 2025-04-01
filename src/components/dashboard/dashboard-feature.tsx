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
    "5xsDtwNojgxgYvY3bTk7QnSRWXNWvAes2hDx6HdPQbtFwhtqMgHpraSBg87pShB2h2ipwx32ZSpFcZymg12kLW5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EKezW6ysLbL1eQRaAQNEBnveTPqqLEzTunmsUZpCKmRWRiSGrU8muuEy87Xv8QMYq7YPpUvq3CJUPNxhqdT9oSs",
  "key1": "4m1mrsnNuiNGmHjS9inhunWMEDMHtHaPg6CbiCKSkCWmysQoMaU5msnPMjtpeCmXuUGLJMGfubZoKvgfGXue337s",
  "key2": "zNEEqYZmy7bmYDzpCASNCapLApMkCr6qXdW9e5cH35FwUb18RCu9AeLggdz9vEdu3p1MZ2m6tFdkfhu2hbrgWck",
  "key3": "2a3xKvRpGLvcNnrbDyu44VPeB6XFqzWWYpshgwod8cx8xj7dNB34zHZHX2W2eAsqRuQZdKhxXQ4M3FupVA3qukXv",
  "key4": "5sYstg47EdCzZxbx3wGjUCuiHfvfYdGGffyUqjm419Dmq7X8Lr3kQV4e9iSAAJ7u1J8vUYoyEej8MxW2Aun8u7mY",
  "key5": "3gHK3fga7V3fEJFkAVj5jeChV3Tu5XtMK1zGunDfbHtjk98qcrTirybcVjvLE7KVR8d2TmCxUeSpK6qc38yYrVxU",
  "key6": "5WYR8fPPQGvfzxC8NECBFEmrFXrXieEavV9nGd3FeJ5DAyRsSLmr7c7Sdy94VVfN8rodeEjoKCZJMMssFbZsaWae",
  "key7": "JkQD4KZMvHtpoMjwZWB79AzsTqo9PAZaqAMLsTFC1mXgSNy4Sd5DQNfzQoSJu9UqGdE6jLTdNsEXtCB4pHLCQDs",
  "key8": "5Dd9AcNQQYryUF4sL9J9oGpicSreaEkJ4BvrYYL8pdD2w2HD9wF9wdpXzCcWJ4NWT9ovJACep3ZAERHzzTm9GCRN",
  "key9": "HPh9JSMZThbFBaob6kKynahhDwyQWqVvDa1tcY2dC1ozjQneux9k6BK7E4VXYqkLTeCU1nYrzekwzyXbFw7eFem",
  "key10": "3pyTZ8acBC3zzQDyEEqzhrXdtBKjUCoJy5H2PMznJTikaCsCKoB7y8uC3kdUgANKP43DoqPS9gdsz89gdBY4Zjaq",
  "key11": "2QLyfcs72i2oGBrRMSCWbbwNBuZvwHKLYiyYgEaZPEzTCsqZ8RBJLrSc7ntmZHhqKZZgNeV6qn9gUCFPErbFwBXs",
  "key12": "3gGgJyNHoD5bBh1m9LBFfbp5A8KXGHAXzzexxWCamvKvyoHTJ4AhqLXad6o8TVcWHz5PHsN2wL4P1k8tchtuJtc4",
  "key13": "4KRqVg27yKR6X1kfcTWWy4hBc9JR7mY4MfqyXZ9V1UapzfctgtjVHMFTeCzkNxJvFwYf38BsdRukqtiR9FTkWTcc",
  "key14": "3kCuN9WHjBTmKwLaBRRtPtsAiiybatd1WkRwRJgowCKpuJjhkftFr8TFWtmXBy2nqoKydNCuXMsTh4WXWZK9os8A",
  "key15": "3b4D2KmrwU4RA2H4nZ7WChzu4VJeo631jtMiiPnWK5cWg59jy4sxt722KgPDWvFcaUjmtu43voDNo4pF8Fs34ZDX",
  "key16": "Na48D84kQTS7aX3C5UXhP2ogjcxxvPcZNxe5eKuLgr1qa1AyAJpv2vUwKjWbVUNzv1V1zLdZN6QX4cAsobThCL6",
  "key17": "3F3mgdboBdViNgrSX2PG9NcN1eVym3SeqEdB5ZNCtAZ6Mit9ocrdd11LngTEhpe8nZ3PXEHPR466K17BkC9dmtQ4",
  "key18": "3RRgoGhJKQS4qC8Jit2wwNcTYR3taFWhY6yBaKL4ANAiitE6MGppJz5CR6Msj5FzyhhdJYgYAWtWcj1LkuP1CyYv",
  "key19": "5rNcivAp5rR3iF8eg8VtokEh1diLGQHAbXLsopykbPCkhBLmDH96a2DdjF27MJLnFnhfSeHNvfTcd2zw3arpjQHM",
  "key20": "2LZL4g46p858fM28hPWzkP5NPfyhxhTyC9NZLVXLjwXUcxFnhKToD7gfWdLBABxoRK8J9eNGxVrnqWAZNnVFbT4M",
  "key21": "5PMH1DVCqjuHBduKipRD821ZPoom1NccnNrVrgQE2oFmC7gE3HedPmuabgyWFsxF7GJ8SJoQkTYN48BUcpWBd5nP",
  "key22": "2RVP3awkQo1QhdCG22fTH5d76d7yLyXCyn7DU3kwqmXoCdH7Zdvk4AWeweLpriFXbn6KKE4Mzekc5KhcJPzEysUf",
  "key23": "5JgGsPuia6hdLYdDTAo2V2MesKNEtpFroC4zjJzxJDW88F38a7wzqymoHcLoVmZg98edSmbYdsxtMVoTh16gcVmD",
  "key24": "R3X6CxjmArESz4BMvmhofUQnow1Y3TgyJ6TLPPTJdqaP8rK1xMEd5rqHbwVTmKqQFbRjGx2v4nUzeY5YNfTrgby",
  "key25": "5hx1n2gVQ9oFB3zRjjdGPesdWsJ5DFqwzk9eHbX7AXv14AMkf2qzSFfwviCq2xdUfY3dcb1UqsHQu4SxQQ61jACv",
  "key26": "5SsRSoDgokhH4u6TcWhRftnMW9yPVyWQfNmakJ1Ytsv8XK1eBdq6JkPeP75oYtPvY8YQchYiF3HTUCZ3YSSaDa2p",
  "key27": "3aR6Y6sLQ761vQkCPreXkhFzLHtTPnbhyiwq5QzhqtjiEShQqrR7xh2W9v1aQ5g3DTCsBERtgnCPeePL2GSTggEK",
  "key28": "2socTzDcUkAKqzABaZJYTatkhBEFn6qMsRDQRMEz4ECwy593W8oG168Nm6TQZqPgyHN7pvAcDHWj6gcrUGowvgM1",
  "key29": "65uD26tL4PPYHzwvRXnsCvgvinhB3oqKkkNyabeauKYsmZENUiLZCw4RBVjHtUPDAHoGz5LaBocnPPYGjus2vREM",
  "key30": "3TvMC9EW4wWb7gLxPJxAKFFguAgenVp2eTkBGK4nNvDZoeo34oYBH7ZtrMkcaofnGxQVu2mn2DJF1eKJkwzdhdry",
  "key31": "w1xuc6LyxsoBFfT3zxa4Yu6EkzFB8KFxMfTMHGiUkBnyqczHxWCR9Cn72yT2pTbmErrVRtxyqeNGm7hnkVrgMdk",
  "key32": "P8eNNcCaAzBYBfBcyWFG64rkDoHboRGsRx64p4KM3LPv5N7brPyxefXkphdJ7iBUjJ7ckuYDk3j88maHRDt6Z3e",
  "key33": "51T8aPnS3ubsHYz43JS6GBdDCbDGqK76CUJo2UhDZNyg4pyeZL7REJuMD4dSP8MUMf5wSp224tWc9rGH2bAciZjU",
  "key34": "66xMKYi3goQ1ETBVE1h7HzjhzxyoQ1xUs2hhtsvaV3LvpipzpWtrj76XHREx2Qt1XoDXipuNhiyGQ5GTqPzGsgup",
  "key35": "s4dbs69c7f8p4SUXS5sJmLRCpGXHFZmzSf58MPhDUW5mXnjydK9S7bZXBBtJhY5BCG4Sx9b6W8a5zMtcNaWENet",
  "key36": "4ExhN2SKQGv3Jq2fSzFqwHxJq42kMdJ9TkiHz64g3KWiMetxDSmoAefabC3QLz3TNerFxs4wnwJMtsEWStQzC6KD",
  "key37": "2ZSj2zxAUb69eD317DSfck2qyE4HFe3agDn6hxSHvT7ZYcKJZyCSMwgav26W4Edhan8NdujruQYZn56SAvCJkm4t",
  "key38": "4behaArSFfVaQAVrvLP9rR8RAWnnpijyqykc5rTy32AQVJSwMQ2BgdGLJbToiF8GvpD6arSKSGWfxhcQBCioCVU6",
  "key39": "35A7Utd3iWNPhGj9oZcnV5msSxr1ehQ3coDuDz4FvL5LmqxHyCBiBei2NWeh4Q6g5os16K8YG1oV52z9zb4Ys4Bz",
  "key40": "3sFxDJ3njeyxveb33w6jxPGuy2SNXFYLpC58vhV9VKcFSy5P6QgoewEVkaMRMoLZaJ4RLVD6W5N5EdkDd9n4sPht",
  "key41": "xXABbK6xe8bFqRoNmC28heyJE2HoZRATed2LGmgPzodZFT5DWuPu7iH4BBeLzpA5XepfXHtGc7ihsf9w5H34TvQ",
  "key42": "28uobVoPj4PPtVrBHKejdzSqkATLKaShzabBEuNMMp1GLXfmzmDAyB15fiJoZEtJ4PcgcKQywcP2atcndgPK7R5J",
  "key43": "4b6dpFt5pJs36DHuN4hEMRxTeEjgAhSEazSq8GnQuC5MMk4PrH58BVLnUaGDHg7c4weU6YStfoKbVFjidB2qvSi3"
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
