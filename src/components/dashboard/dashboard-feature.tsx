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
    "4wFdfddUh24r79zLWPAw3mUjc1DmZ5G7QtvJxUDQczF3V86zYbUR6xTk5Lbgoe9ys4ZG8R2295YqW2LbB1rL4QmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UZ5vz1KpWwkCh2iWLiMSdNfEQHVm9HqsLHUyXeesZBLu8wpB4s3hkT2BTo1csG4XJAVKYQCDPXy6uusPMiH15k8",
  "key1": "5fXVtyXpkqjj2Fd9cM7icDSdqMNKuz6szas9ZKrmhQSSpupZEG3hCZfR31HEYVfGovqKBuQrVFEBS1fihQ21PYSu",
  "key2": "4TFPJzhupMSnLzy5BbDutfwrHDSeJEkPUr9HTz6uMt1rvpXqbtJRK51StPqF31CYPD3vSz7HNUsmSK1wZfCZ2WvK",
  "key3": "5aKxo8djF8TRnBZsjJubbRftDYHTkzeqKvT266KEgRTyjxKWMP6NtrSNyH25oPAqyX8UT82kUsKaWujFihC3RtFG",
  "key4": "3grEs1B5dVmtHfiY18XWrtybq57zdWtf8neiVAVeqwKJhXJtQEnurNCDaCUSpFkciGhmaWVJsLbM4FpJWu2Skmws",
  "key5": "3zWCurtbkbTgJzcHKYEAHXmAjC9PaG9kTPmjT9aBqTPcaffb14x8GQ1M4nykcxsomyPDF7CY38Bv9aCnyg8YgYAv",
  "key6": "3Wbfnu1PbRU9dENWL9KLb19KUWgkp3VpbELo5HV1xwQaE4MD9wmrAGMGwT1QabTYeuLwmUXZZBFYoSKFm74WyfF1",
  "key7": "ymDgjRMDFP1tBXNrkE6VkoWEKaYgURCT6sxdP1ayCLQW3qW4czVqvBbJ64p7mgykji7TsDAJFYjYLSmoPHxjC5k",
  "key8": "9wQ5dyoKZFQSLR3mxicpihev6C1HmQ1YwjExXEri5tTJ5Xej4t32b1PtiF3B5a1hP3ELT26MH5DXAjvAnynqLWW",
  "key9": "2GpkzujVp4DxUN7VbTEToH1rSw1vbQdd9hgsufUfRrkZVVzoYX2LLqXrSDhAbdEiT1KPe5NkoLB9YxYhCYZWrqAM",
  "key10": "8xCvNZPPUy1ZnvtSMDd9A1Ve9otPTdzyJKaaM2v6ui2bkJjCLt9DB3LgwhLQegr5u3s8zYjRFCz19HhGwnjCbPf",
  "key11": "46y95hDA5k9pUQnVWaXa6eADLyh6q6pRT9XUuGD8Nz188d8X8Nk3kVYAU96G3duNtfxMdqUgeVSmdKZUksohuo9U",
  "key12": "49Q6a81GVpCHGRUdBHJgpybaMdYsuQeBNYukVGTPzYycVDN8YXvzwug7mHGDHhMdZpWX2ftErPFVM5n3gSh5NTZx",
  "key13": "2MrVhxwG22wUfhvvc1NxZSTRfdwTgaL9CjRVJ3RzBektAHWweMGpQD1LPTkT5QJUnVVpZH2p1WQWJGCY92d5oL76",
  "key14": "3221URqajZY5tBT8rpLTZ9MK5p5WVXoVpwZZtkRShunwZV38jC8NjCq93rgAEg8k3tnCbDUkn5xjru2StABP3vLZ",
  "key15": "64PDUkji8WajA1EgdBBX9JKobthSF8PucCKR1oDKvnXeBvUyZaacRx8N9K6SEuetEDrbcbFshvh1wdGWr1ZXxGZH",
  "key16": "4HzV7pCQQZZqxyT43mNmjEsxTXYphGHcd9DzDTnCLRVcCgQaFp7hpT1MrNv9MTNTfrNNhL8CmvGKBneNJjoUr2Kn",
  "key17": "4vRs7erpw4UHyY36D2MMY4H7Jx1zzaqCbfndY6CTyedyRbZVXS6PRPnhzx7Mvr2uuKxKUkEVokGSAvy1KVK9G45C",
  "key18": "3MpRJdoVz7B4cMXErLAWaXahK5dF2Gt1zgtUXpvCwcLCvEditE6hV1viAvt7HMofrc8fsUzDLhzEySjuj9FwsrXj",
  "key19": "3PeYeZy6MvEiP2yCKgNyKo9wXqnwid8Fwtowf3xXeuNHRqJtmapuve83Ykzvx2MzzfrLvdi5fLx8rFotsn5HKMBr",
  "key20": "4SNpdVfeBbfuyeQbWNnJWEXPy1mEaJJUS7dJDkrA9H9vDfKmGftKptJ1SJ6PNesEV5wEKhmVDbhPoEH8TzetaEV4",
  "key21": "DGth9XjDB5UNryzCTZrHj12ZG251RztP7TcgRbePd4YAgZp6oGZ7vhWeKtYGcZJaexAYiThCxb3pXSDLkz8FVVJ",
  "key22": "3ofxr6Pf7nubgG7Z11hksRVxjETXqNvqDH4Cv8cw2XsNufQ5KwVx9NakvWmt2T7pAk3Nu1UfYmfWdG7vkkgCdyp9",
  "key23": "41ViNdEs3KqZRra6EtqDbrjFA5fkJBZukmPWuF8mD4ibHaWy6Q5vbX5bRxcM9RFsFSWtg8Vc2ADZRurnbK6XwnEB",
  "key24": "3unzsSAmaY319tWa2cRmPt2nRKYE644DLMFQCGNC7ziG9GzUU6beHJEnDLczu8vVsUnXjeaj2wbujK3fQBbxg5wp",
  "key25": "4Bh8vSTGpuQpNyPT62uhszhgp5aEXWUAAFQWs5EdKC5dyEFUMQ4smceoQoSPSvNTWQhtv3Y2JWVzQXRxwFa6fafv",
  "key26": "2e8suXhGVTjWpgy3ueeVF7v7EEdan4wyxkmpZdPtTJui4ijzDWjACTUbWAWA98c7vNiBminHNVAFESbadSzBDvC6",
  "key27": "3XLEjjv6DpFuM4uMTZBxewuGXgncss5LLkDfUzk4pTmFPUB5Ey43a7e1FobZF867VVuhP64iSGKC2YRo2tfEaGfU",
  "key28": "5ZhDgE9Cw1FgNwHTr5eo6QB8kx1CgGUueUusW6aJfgmrLvqCHbvrAqs4w5cdYfxbK79eJ6ukpAAsVgGgtbWDPsFR",
  "key29": "83tsofgZuWCDMxDs7LggpMBiDhk5gAdvEUWAmnKVYLBmXM2FzBLcKc762zEjxhWZFEWZBC7Wrqy8e7Jgw4QSQnd",
  "key30": "23rC2owtjE5AmX54HLC2BtLRHZbC9hDbDhdGA1cXG7xiUHD2eKB77j3F6wW1PFw6cXoRpAMwKKcPPNzDb8PBxoDd",
  "key31": "vDVK3KuRUeZ2r1p4tEzkHHaxh5KD7Y5giEPtgs2qrqZdFSUCWRkAv1rMDh49FheNZ5TuWunDr5wc5mM13JTqzVp",
  "key32": "2z9CGDTTcufJuxxU9RELnWLaXfEDvi4C7aGu3qmWuVuh7N8RuE6YqJLxQ5dKXCeJx3WgpsewQ9Pn4kfUWp3jsxRZ",
  "key33": "4dzEw7fvUU5dnUbEbbBx5Uu72WuTDHfNtKZ28sMfmxYp2gy9uuMCiJVG477mAyQKP6b82SJ3gZoUJL6fCuDweyBv",
  "key34": "4cHUWj4iYBeovpSew96kxJUsWQTJf36ggsfnQgLNTdiY4iQfELEyv9Q2mBDEAk9b4Sa8tsmY2Wn4hbAeg7u5YNSv",
  "key35": "GfZMrqPKgFvQEqa7fTpsB7rFv9WLU2vwmAZB5GF9jFq6JuvJ3uEioNwPck9DmELu9fvbxyK4wgX97kjrx4946jy",
  "key36": "4D9PmRmVRCHGQWFxoApvMGm9ECfQdhgG8vdpq9sAA8h9fVpMbBVNjw2WyBcfKe2TvFjLKYhgvd7H5vQQMkJTeuj2",
  "key37": "3aeMN5WCT8Ghw7QBRtmMK2nuJBrpab3LqF5cjMg2ZZJeK5ZYdAAvKTBTpQAb6CQR4BYWBMBzqerR18eH234AL5p3",
  "key38": "4BGJm6SBoKGeT8ZZMpRtLxhKV9aEPSPyeKNQ9x42W2uEtWpjumLiqJCGUw92PzmjBDS2yz4dNTmL263v7ZeaWiSZ",
  "key39": "2bvzFk9rmFz2xf1U42eWxDESeHgV2iDQbugAUM6sjzfK8BdrhCQdceLqqW5wi5uiW5Ay8DGu9eZfPnNG5GU8M6x9",
  "key40": "5xZdLFCxKoMfdWGHxrQ7dSxqshiwdW7ahjrRpRi3o5VQ42LnMqLb8N7Njo1JZ7BKVdAMk2ajEceVobA74GVRvrtH",
  "key41": "65u7yuG1soQiBYhr4cBDxkRiZAuTVonYtfuLGDYXB9kuBtqD83b6cPVqoDPyc6YmGR6txvP1jnHjAizi68WQcXzw",
  "key42": "yuCz19rWrvydt2cthTGv7QM2SDyKBGsmZPPFAJ39dQiwb6B6ZySDSpBFhJTodJ7iFNEtvpxbP7winRaHAafK6Nm",
  "key43": "63S3t2Nv93WDnTXX9T4xW5ZQFcfrVDw49GSaqsWRyzjiS2dUZCMDh2Dtg2PpRUHhTAFQGHdqn3vHsXv1JC1gtbnN",
  "key44": "33dwHXXJCRE5NvVnbkJHuebbjH5HiEptzUg69qP2LhfYQ7sG6eCbDFEYEKKMvEgTg9UrvPUqDg2PYKsxnbX7P5Lm"
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
