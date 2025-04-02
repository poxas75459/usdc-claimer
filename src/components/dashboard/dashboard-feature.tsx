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
    "1eLPGMexVkmmHFHtak7JUdRATNKydJnwZuUesckFX2i8BPyuEBMt1UrY9qLou4Yprw8LRRH3KPCMMMsWtFPfMAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RatRbHfAD58Pf1yB2DJopDVkoExq9TJv8kECg9DG5JHSPjihYk4tmAJgutsj22QiMyGt77Y36iEimceStvDnvj1",
  "key1": "2o7pNzjJkx4C3xMa3HV9ECsLfwuQeJaX2zu1A9NnZP3oGdj1Fik9oju6Y1GXqg1KxkTw8dxgpmpNUGGvYjcWq6JY",
  "key2": "KSBdXJJ1ZFP7qm5wcZ2haNqEMzR3jtf8ryQ4Bcq8mGvyLzxKANcKmSadNt7vk1zn8wzYrLihLepneHFoLWHFTJ1",
  "key3": "4wEgfZakfpZHAXmA9fYcPqY5AmdmrnDpnPsDJsnQUJVRu2K4hNBGxtHQKkWdVcRUVjvycNpyrdviceGsDWPZfnvy",
  "key4": "2pFFNfQ38tzN6FBCe7QNcY4sPVSrgkD2VJdPUNvpFx9Gd7BGUU5ZGV8KKSj346UjCoY57eF1aXATF2MaKtrZyCMu",
  "key5": "266JdkgA3KFmNyQXgyaXMPS6qfid9G9je2P2VF88wbDJwgAzL7ZAAgSQpcv49bPnzvsyQR1yimoj97EbBbnzUm4A",
  "key6": "VnhJC5vj54eV4yChrkc9fBUb5R9nxPX4Riyj7nvNyeoKTjFmDW946SXe9iTU4b9Gyyo63pvJJm8nT5BWgqHEyEK",
  "key7": "5Cyaev2WyhU15LUpQ37sw1qPymK1RWv2MJjYoFztfnQ8LvYYpK3n5F4NTkzN3ZDa3FL7v7n6W3edRAfogpemXiF7",
  "key8": "4Pw6yME8mndgvJxt4yYQrF646e2vW6ZkQ2mxej9THNuZokHDmZy4HypAtu966ZzGzMrxTv4cZSu9u1ygDDnxy2jH",
  "key9": "5oJ3G3J9aGb94zX4C9orPfhJ7VETL18WfgrZgt21KfpQ3ShLQr3yPyhFVygo6FXqtkdnyPKP16xFvobBEfB5p313",
  "key10": "2SKZazPUVYS2uSKFfVaLVS3P13sMFwpkk8tsbRft1nMKYRNsZDSBtoxd33bRTfSzXB79YMYqTPzJYCM9yTwj2LdR",
  "key11": "29LjH3GdqGq936V9NgFVLv2qBFCoT1Hdwhuh8PxDtVgbsErRcB64yyvqdnuwfh9LJvbhwZtw8mKmHxt5v7SwbifB",
  "key12": "5esvYJ3MooLhcAtDdPoazXwAYqSZDsQ8tmJXW1QeYBFZKsBcMVCQafES4UAukrVM3jnTkTrYFbgrLztnDkP482Mu",
  "key13": "5Rd33zLyucxKkrDLNNuxiqFzNkxF8aLhox8cD7F6bg2tY1m2aNU58vR5QwKNTkcgWa2ZMVthPSvrLcjwYzCMj4Gq",
  "key14": "4ZLKwwQgWwCz8X5aTJy3RcmPc7chcPMSojkMKsUdeA8TBMPNe3cdD1iBcNmWLaztprRk33fDTNY9M3qzRXY2qkCE",
  "key15": "37QSdJxfqQgBMo4KYxKsFounE3NgCDtiy72T25NnKokNGjPdv7ViQaeqiWffQKxLNGtrEhmBJAfGuzXUgPXgYYta",
  "key16": "5oQXuoUCfxtaCq16xibQqqEUhieTbGyKn414G72DSMzYb3Ts6Ay1Zm622VZtmJbXwVRiQqHu9sqUhiunyYzF7nFR",
  "key17": "2unHbnQqk7nwJ9hB4LqcyyoNckYZx7C4SDMyiChwx5MHgGyhdDB43cxkf1H1PCJD92ktuDKev9KbqKEd9sX2PZcV",
  "key18": "5t59tbj2qRAnf9AMMEbCmomRpp4N8ki3btrexUe8sa52bq6ZkysZUXJmye1mAoPiNhEdtaXkjSuFFkrUCBg3D82E",
  "key19": "5Ey1K42jv5osfq6KLCSJ4RdupagLGukv9vQ9n8ZohJ9korCMZS9Rwbue7N7PPT9Ng4544ADEBCHsyfEbvADtfopk",
  "key20": "3nAcxqafvEyxRjHdWKwDiCg3x3b3XsMXHJBuQy1YSQ9eE6Nvemk94phywAbbpdCbHxJYgdgANTxcjp7waUj9zpFR",
  "key21": "4te246p5kXzvD9LZpj1aGSSz9fbZ1HCn6wSCNE23ZmzGXeYu8nsHGoaAKyv2DTcDFdHw3xXc3LWNhuAc5sqCaHDn",
  "key22": "5MR7vC8XuahrigPZH31R1JUTrTg2xvNfTnqX1JSH4fd1CJV4LevjjyP59usb1RRie51E9tG1QRDBPAfq78rRqRJ1",
  "key23": "23FPXLN5mpXUT4RAv5x3pzwWz4SU4j5EpfrkyccbXwwTu26qk6cvzjgD2X4Q8WuZj2h5Hr6tyi8TsCvpQeUezHb8",
  "key24": "Lt3PHyr3UaEXvPHZsrSdYGFYV1ZMZckKx1Tkw9BdGnLGf6MFRfeXPdVYDGseCH3zUomdC8deBeYE427QeKn2uac",
  "key25": "3ZWtvtY41869xwPbbLWzMHYTZZSJetH6D1tYuzgaAaaf9n2endASx1vc29TLeMu82YtLUgvzKjsfN2yH2hjKspNz",
  "key26": "42oyPiM1ZTewVgharfZhFQLtPg9GmNR64CmxCqeD4Yc5zpvHGR5z5EyHMyrRYrdnAtwsAM8RRrBJedQZt8SqT37Q",
  "key27": "2smizHkTKs4H99MiJXBn7eT37SXHzpt9qanEz8mZhSqFRhGrL2SbZgsbnMHUir8PRHRHGAgv9X4gzxebsjbX8mZ8",
  "key28": "4doUwH97m2a7wH6aUM4Rqq3y8TWPw2zwnk2vj2p5CRz21F8XBf3kXjsMmoQVfdTKP9c51VdKmHhJ4nFoUy3UCsLm",
  "key29": "3ii73ZfxLnLuuPQm6ZuA5BTioDMPexeGANkroy1PD4cg6ebAfjSKE8Am6923nayHfBvmZsPkJmqqaA8KjHR1B74x",
  "key30": "49b2sjED7VvatNAqWVN5sFoGs4mfsbWkUBNdjCahrd4maf3Wf8cZoDmD6RBYwxLxLWZSW7FJdg9gZ5Qm4eg8H8sx",
  "key31": "Zmh6W8VEUhdj6kE9CFDYCD53W51kT3TFDgnw42idzX4QnD4PaZHv81ERCh2rG7VipE2AxpmSDTtrTxKTeniMAZ4",
  "key32": "5fGKLRJ2NhtsJse7Q2sY1uNvjgkDayUTh4zdgHFruv58m2vG3YFF5o6z8ZY847admaGVXFHL6uC4PdA3eSs5LGwz",
  "key33": "3gPKD2Pt2P767ovkisohUphw2ugsQjLJ9JnD3BaUebNhJKBLTsDBrhqAXdkTbGxfBo2pxARgjnyp8VsnnuX5iAyk",
  "key34": "31iG4wA162eyAg3TxwTFAw4tDoT22DpoUYaHpXagwfZ4VmX5pfu1dt3dwR1WtaRRTvsVXayXRmBwayCQ9ATKd7cz",
  "key35": "64hJXGUp5dF5rGABVkiGLtBfTydLEmKvJEvmRg3g4mLznnwc4RTgBHJexuEZzevLuDbAwm8Q9fJFcUaGePRup18n",
  "key36": "2dgjq4SHv2YLt5zU6aJTVBtnZfs8ESb6ApG9ojju7kTWGADYBUeetS2EK95SgbN6LHfntgZczdZqtfALSCkNtEf8",
  "key37": "64SvRSn63cnNMJns9B4zoWq4CMEyktgb6h9Sk2DFMKa6yVBAs4nwcrKYX9TTVzNrYmBUsp54PkygJeYRWUuCVp1v",
  "key38": "vNSboNWeEcgQfYdFuQuARCsvr4iSFL5jL1KV2hxZSaVJHCdPsWSJa7oznFpwnYUqG6Cq9gSbHpiUm1JM4jFu4Wo",
  "key39": "38aqyfktqCoqbkF5Cxnp5V8i4E1YmiCXAZ6zuATr34doPXGrp2J5pxWQamGXqnpCRjgbNebHt1oLvaP9z9Kxhqed",
  "key40": "mAXA8PbD9h2ZkcQJRhiadzDhAiejzD7CXrw2LBYXvEVyHLQ7QRifrU77TCUwmMotfucpk5wf9HpeEdcFr4m736D",
  "key41": "3NC25depV6AFaBVsFbLP1sLTNp8BAF6F5xQp6JVVpga9NjUZdDbutpMaQd9YygRRN6bPJzASvoLzBqLjC6mFYxEj",
  "key42": "5EnMrHpUjYMAUNzKcyNg1pH7RgiJAiAUDnZdvKsP9Fm7Ji5LCDUAbCbATNLtBJpEege5jh9z8rFc7n8pLkMNY5TS",
  "key43": "4ABtvx8fT5fmEaE8WHcs7RB7fUx1UP8w8dqyEXRyc9qW1ivdiiCWdEriwM575PhkS99f4Rz632UinDnAo9WGSmSF",
  "key44": "3WPHrMeQQuUdV48DRSL8taf4yx8VfDNsMExyF3Smd7AEkKDZQi9GVkgyHw4U8umqYy2ZneUAE7XwFgv3xnNUDno6",
  "key45": "3pvjCWxbL6XbM5a15YZstcNFydbbkL63HDHWbvwmUPQgPgaR4DZxdVDi6GyunhhnPtkUPoPPHPEm5hA4Efmrz8E",
  "key46": "3Ap4SNNVWmuLJuwM5rKFRJUCK9mtEP7C2RRGoJQRNzoQjZtxBLvyaVdAgQfcT1Fb2Ght6pdshyFQH57aPLaLKVmM",
  "key47": "Loxx2xXN7jPhy39jZW7YaXBsM8mmatgtS1BcWNEgteWtBhAWN4BeVjQmY5BYG83m285u3EbbnJCVNFRjoq5eiMZ"
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
