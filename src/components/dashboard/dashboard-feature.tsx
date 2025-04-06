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
    "hfAWxnaST8qG1MPvmvk8uf9m7jmYxDhf6SN5uMSodpWi558qjKLD7hVKeZryroUhJLnw39zhsVKREbaSwM28m6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HSkV1MedjzerXsaaJqj8eQu8gpvhHKYU9NRLo5q562yoKR1dTYm2wjmp8xAWZthkXHHDWJt3zuHrVHDgGnEyVjb",
  "key1": "47z8VzRh4nwvxLcWHnZCbcbAiZrj3iw43pWd7hNjNC1SP1NbDcCb2DXaytMjGrUqAPSF2YZEng3ebQvzsHQZAAK8",
  "key2": "f2352iyaXrxrZGGRTF13XsWRAiiGpJXAqsWdQMdWAKs5LxRxATLQvtoyfAiiq7vQD3Hz8t8v5QmUzFnzLVc2K1W",
  "key3": "3Dn6XPyN7zA1c8X1Vzx5HjzfvCg7bKSxcsGPeSZKgW77T6ggKybA1AcQgUdHtXGsXRG3ukku1nvPkd1xuuDqggGi",
  "key4": "c6B94Hb9xSf9HBkfaH3xR5CAJ1JDr3Xh9HnprecFyMqknCXdcJwJpzrt3sYTYQUkqk6DXHKg6dhxVG7vmCUH2AX",
  "key5": "m6iQZengkWnDjQczBxxD7SCG2j11eVBCJSuvgra4j1h74huoS7FzvGSCyLrej1UjCySdsSnRuF1McFmHw3mPM1M",
  "key6": "2ggQUjiWQyZ8SvQfettdGL7L82XphLEAAT2QCQy6R2eTDjHGN1JVaTWF1jxeoiuEkLNwdA8M61wp1jN3P4qt8UGV",
  "key7": "3zGrvVTXTnz5MjHhXdScKW7WWJ7zZWkfXRyzUnZZ71yiML433WT3BXyF4EfxwpPZgzD2uSkb2Ti59fkrGHnJ5qRx",
  "key8": "2amfNBu88r4Qtx4JDWvnh3ERwnGqBUiZnoBeyiANsQKB6iE8SKSytxVApfDLPddqWUyBA4fPagNjK8iStXsNtyD3",
  "key9": "4N7bvH4UgWUeKpg1JsSzJKgtNGgmqFcDf9uf2hnsZiunu4ZjgY5RLfbibTtYiz2g3vgcwYLgKNBrggcsULbQfQxh",
  "key10": "338N6xCv6oPbUmJf7ugRSNXdaicxLMQPvHBWVTSdrasSMCDnYGQUTxSEyTDACYSeGMbZoyYBr6B5dedTCLB9Uw8W",
  "key11": "4upDbyahrmwWGjL9TL1c3JWujYT4GEkcNaV3CK8zrGeHPXcYVktN7wPNU12grEsy5AmJGajAeWNx3mPCGqQTiKDz",
  "key12": "21x6MiN8a3cWiL5TmyPF2SMseYN3ntUefqeNJuv7NXAaNEXBx4T1DxFPu6dcASmcSzv9tpoZH8eSFcWENGMAh8ft",
  "key13": "4BKoG4UmuhqsQqzX6hudM4uZQyrPM1Miy9vyYw4BT5eKdwfrDts9bqeHWnfpbdrG58jJb3cqpJWgBFLmBFXou294",
  "key14": "3AZRikPNRk1pMAJKbo3nEFsXuebDdnp8eHDLgnasSKTCo3Pf5Fgh52Ghwwc2C7mzWfaAbsWHCzkkAed2auwqLMb6",
  "key15": "t4YmvjooJhoJC7KuNsPxzQzFswXryw72nY3suZSk9XhojhKNA7VncyZK1ACEM6Y9gjLhAfbYkJzYLyDt1jyMPiD",
  "key16": "4m5JvBNVwQCD8hj72TvHLid2tpxyPSFnJGmKiQFrLGp9VZWsmBmrUovJGG7pzTwmLt1LSvq8wD7B9HeXJSEVarUi",
  "key17": "2EaEkXkqBqgbk7f2qeXfDNKCbpSEMLnaeW7e7bJUc187dyWSZSVgtcTsgaTp66ASAXbcj2J7KcTrh9FyQYBhQHUW",
  "key18": "qCpk8yZBpFWsPw3Hw76ag2bAYa3Hikcy8tLXqtQ1nffjgLWmpvgid33NZLky752bqdngcvxpJgnTjqgvs5DZUXp",
  "key19": "4B9gdm1orU8ay5SHVf8rJym6Q2UMyG3FTW7dbdSeUF4zfmj6tRs5R5AejcfaLJodtGaxBxFLuhUaYXW46kurdb4M",
  "key20": "64aZsK5iSZ9eiSiyzDowKK6bY5v73Q8TLJxEzAh2v7d8c1P52VypC8nEov7MTwVmF8ZT2wiepTpT2xAwvLykabta",
  "key21": "3GJ3KmzSK9ypEgpf9rjQpjZdAD3x9MbsYnozhGDkmL1mXdNT4T4oCKfhSWdGfTMS9PwtWkGirS2BZMStboFgsP39",
  "key22": "3CFANNdxfnoGXbb1CY3KWcY8GFTygY86hw9zVUvjbX5LCT5RyrcKUeUPdM6GS3qTBNanzcssbJqcr9HcjG2aCnnr",
  "key23": "myhUZExpvryTHiysFk2o5trG9Bj6jpsreRJWjFbzxxHTTqJLqv61uDegs84K8P9d6ZW1Fh6YHbdVddDnwU23QpL",
  "key24": "65dU1KPHPfGHK3oCy9TgEFQvk6m7CJta1vPSdnpnVfAgTQXRgB2Y7uj6XaCN2ncaPeQAGDb2cAiBBnXySU82h4R4",
  "key25": "3JxfEABB37bmmNz5yz45pm1yj7aDVBwqw4sfAF95dSMLt3CApBa3RtgWHWaWdGZFPvSrdCi3XhTVnLsv9JARRwX6",
  "key26": "3eXissn57c9zPBxYqXA1FPgdAhzRkPc4bARdtYoVUkWtyw7ba3eRAqsNk79xpEia5wT7vjfhxezXMvwGvP1ETWs7",
  "key27": "39tPtDiwDHBeCpBt9gDcZtghiCZHksBzRsaDDotg2d8FfuTKBMezVB24rrc9Myv7zhz5wxpkKyjHwbfybguuDiNs",
  "key28": "4u5FYqNuxdahDE6FKabTpNbRrkjVFcU37cLUChfLqFdAvGLVVkcXQz5WVyh2D3PChz88YR446WD25skRUhMQQ1Gd",
  "key29": "3KcZdVyei87fDSNzvbbGNooidcWoAH8zDTg9J6Bpm6TGjyGWNyXefYxjmnJK7UWa5iUP4cpud4bt7TfUvGVrKrRf",
  "key30": "Bpso9hSArL8SMhQX1CNV3Q2xUJJVVhQr5VXFLWPwGw5S1Tc2xZBPFNf7WNy8f4Mty2DSPkRbUJCHmPAG8tYi4B4",
  "key31": "GLPJMXA2kjhJjXLu697HaPncsigJeyP9KafwXGsk2TjKSDGjeyRPEwMk4FqMtaQZR4fxff8c7yynL1XF7VS2HXs",
  "key32": "3d6z6UGSv6rK1asPFgFGuYhx4Uj6mZq49TxNkCyZ8fzqx94FrxgmVkPnmwFmw8PGjnAwTTq64yxcxrwLaFr3BeFD",
  "key33": "2MZ17MFKgreFsNmDPdf7qdMiZexYMd8X6YWqyxrP5hkCNXr9D5aE96zuKwFj5M1RMRU1xG5ab7Bc8qcvdYWDGDQX",
  "key34": "63xdtUJ34bJ9ypy7YnaMfFFmac4xQUwBw6Q2muW5fzEcDV3itpWjecD58JLRnuUTeZssWmeQGNx14rfBeaRa5V24",
  "key35": "3cFsjKwsbCJVuNgkmHEDqQq93RDYbbAqv3rignwKsPwnfa7uycm4a8f2rGkigMEoDtdYKnRTAdCD6HV9h4PZUEW1",
  "key36": "5gBfV8FJmcwJPGPg8ZW7wzNndX2mnPnXTTHurJCJCzzc1SauPBGi6vsqcKy2DLnQhYHxktWptVfHKjYhzE7oHTSJ",
  "key37": "3XYCgr5vsfBAgog9U17FvpYhzUaHvYHNGumxjv7bpYazcXhmjyLw7fziFnpoBvu9obkbRFVKVBvjKVhrhhzJ9kEz",
  "key38": "5ksVNqPFXybbY4zLsPGsYe3W8KrvYiyDEjurW4LTdfxi9LoqQaU8pEB8HpJMwad2fRFAoh7wLRShkQKUKxUDcfWx",
  "key39": "fuzbG6fPvPKkZuEsBmb3bJiBNU6WHVF4wu14jm8iYq4V8JtFpZVL9qC5k5CTHChZecisNsq4pHhZpKNuXQTYzr8",
  "key40": "5RQPEvpcEBbay9dJpQ2EX4UrZSbETm8jgojU3gaNREVzFcuhrierXDG1FqcGMkbK1FQhJbv3bBB1raEK4nL5aP8S",
  "key41": "2tjwWn4iU1HCFngg3gicbrkJbdDukGCy69NMmxHD3gJw8APNxwjS8x7Zz3h6tDiyD2yWFCrQsVY96G5GdMi9q4tP",
  "key42": "2hivFqcVW9Mptvei4ZJbTfiGA9D2aLBo4DkDTYihHeWCJYzdUN8ESfMGfDBCc6oiTmjBdP7LiMnp8UKBBUL23BU1",
  "key43": "5G5DYig1bgg66HTwoahWV8HfNqRz5ojGJtV7bU2aUAbPtWBrjbLFCAJ7Mtkdd5nXvhgXxgmFNezqKPWVePJf9Ddh",
  "key44": "3WAJTTDsujrNqoHbdkgMkCgi51kj5mrXSehrAmDf567BZSrooqLSUG62AoTBbrT7StZ3Wdp6QTx8wXK81ogDnovG",
  "key45": "24uPjEL7ZHt9dJ75WPoKM9Fw4JVdfzFWQ3tpzvGvjxQCgBLP2t4xLhcGH9WNYSjEyMzBZAFHPWbfYRNtTnETUrDz",
  "key46": "5UpUhWwxGsK1owFtckppvHJSEjPP3xiZrWqRGVTNLCxKeripnSmCdQN1Y1EZHenffpZD8RTCUZbkVDizNsXhcmS1",
  "key47": "iu536MUzF2vLPbtVkT7ZEGBum32wDdSZB8ra3RA2co5UYvL2FEEDWzbrftSLA1x6LzKE6oxgmdTRbJaYQfozCnJ",
  "key48": "5VBcimj797uR1XA7BnMi77FkGoSXfcNx26hd6R4m46pJuTzVU9FS7eqiVqLVPHXNcFLeP5gCfUGZg9nimFtCTVxf"
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
