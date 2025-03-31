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
    "5SUZfu5R1CCeaUdWf2U9YsH3HLfkELKrZwfJZWhEfjJxMLpPSPQYgNnk68p28guxmMAR55DE73g3MSPDCDScRPaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S2ML4ij29rCDDJ7c7Ce8hJ9mnSdyRNtA2Nmf9XSP4ArLoRmUMa2Xqo5pDKP2xdhKeXZHPuc9MLvtY3hpVz3cxvZ",
  "key1": "1gwX9RNP592BLu5Pq4AG92NRbUgjofusBJRHCyXATi6E4MPiyk2sWuUM8XPi5f4fWoRmP8zc8QEkHeN4C6yvwww",
  "key2": "2Fi6JPuyDbbk8msxMGh4xSHE1PwJdM2cvYWsUn1Ry8e66hXwBkB5PEr4Up2HZCpePrNimn8Ro8fCMpKW7p3TPat",
  "key3": "24qgTHRtg5gMqgAoRWtjPtVxwYUBKDwGLh7K12W8JLB2rskAT2Z2SrpGHBrusLYcgyAYmjkRBMbVLrwu5whFwn4F",
  "key4": "4aVYXZQfu8qYFG46VrzhsmfNP6ehfMBmyCeFNQUALWeBh235ppJ67UPDfkhvDZTibg2GaC5qFT6raqVRK7U1aDBU",
  "key5": "2n9TMiwhF8CKt2sa8uMQ8EimM9aeyEZtEqwCs9iwmg19ZJcn3dHTSf4TxbsosKgezQ9vHPXebvT8p8WZ8V5zHU2F",
  "key6": "ZVHJCJZoNKyYd1RjfUji5KPcBAusAKMK9UZm3NRFLacgeMN2wrsjMNYVVXk2jtVkbwBgKz4ANA4rg8d14uKKVRo",
  "key7": "3BKiBEToiEoVFJZ9t38YkajSagnLJn3uUemph7HNZeVz4AvDzJUH5mx9t2ndzZ4Rh6H6vQ3gkcpSw7bDau1Q63Yd",
  "key8": "MoqXTtRgzSMyK4VoEP9fssRjJ8JGZFoxzvqXVaUH1wTEAPkJ514fpfiUaUEysGqFicLtpAe7zkL36ySoXe2u9FU",
  "key9": "tZRdFJrfBcTWRxHhXegVEMqLUGacEcpCAzATkMi1LdB9TumyNsRvnDnd17asHNW8BtgsffyBcRqyKqhDYU2goWx",
  "key10": "2Vdkyh6ACG5584G2o9mMAqeCzz6AGSNqKg9FZmMoJyYsvTWGecPf9a1xeZexPVZH3Q4gxLc7uvd8XkBzT5R5J51E",
  "key11": "4P2rUraZN8o2cNEsk5A3sXPkXzYTtquWNzfdFxunrt54UXNM4nPkoyC6emEyprRcmZXwrfAaVRozCgK6tknz9RbG",
  "key12": "YpArRLEiF3pidxAEMQZ35y2NVZaYAW6QFuTsoUY1J99BUnzLEKXmEXx3mSyTWVSZuQeoFcD9Q1BHThfmLBsCB2k",
  "key13": "AbzyyL7DRKEaaHCgPR1FvceTEdVgoPRqAoidXTdPesJ1Tp3nRebqZAipjR7SJKu8sGcTkWAsC5c21nsN7pfxg54",
  "key14": "2nrqfmPzmHwp25yQniKmUL55pxRAdG4oJ72QbkDZ8aM796tnRyntRRpnBRjttDWC6NGNFHvV7rAcnX42CyAMSTh4",
  "key15": "65JquoBS5YwGHZXDRy84ymwFvyfNQxbHSkLw3Y7M8devuVyaEs1mViq4jpomgsRgbYW9BTwojdrUF2TQpnonbus9",
  "key16": "4tCtE376iYRVqH77oUBpK6eA7M54eNC7ReJzd6wYQq21FtKvEtX2yCWwKuTu7LcST7wb3mSjSXTEh76Z9eBaw9pN",
  "key17": "4Yt7NGvpFCGgK2jeBGR86uwazKU3jPDDwaTZAFeEEUuEM8MuymHQpyHpHqPujiQUY4MivLGzqccoBrLi357mxkhe",
  "key18": "5JwK9hKyrr2nzepUra9sAk13jDhGuBQevHJWtA1Mu2shhnomaGmJ3QKFfEDybnncKxGF5GJW3qRqgLsCaqaaJ3dr",
  "key19": "5WDxg2PvJg3TkVef5zhJGacnrGMw6zaCvkBpBQbDjotmdqU1MQPwgBN9VUfEnTMHHBd2f13QM2idrj46vhLHp1ga",
  "key20": "4NRYqp2PkJbPSxhopyqGYGKeZGuME9hN29eozsE249BHDxe15bu8mMpfJN7R6k5Fdrme83K9kKAYaTFuPgzxpwBu",
  "key21": "2dPFHkfzGEU3YTza2ybpx5sw8bCj3pQgMCegaH5pmLy8B39cs4zPVjxHJHpNwG7nysYox2QCuZURH7NCj6yx2pjP",
  "key22": "4ppDoA8UJUyQG2oYRt56SuJ3H3cbJhkdB2bmXq8c8GFnz3zV6wxqTEt57k1M6SyJHQLVo7CHoXkdmoZDz9DdJ8Uo",
  "key23": "Mo4hQyKiNwLs55kQRprHm1Fs9TnVK4afh3jcxb6MmKDsnRJ4n3ezvPy9cV7sAUgVkjV3UYLWF6HpyzkiaTB2Bhn",
  "key24": "2sMtcMNThTX4gR6ET19eXaV1Haqjq7R2rgyansmmPmaadjDAJcB9jhLGXZ1RChDhsRuTQcpTh397xSAc7ddz2bTd",
  "key25": "4mz7JUUJXWc2bSXkve2McWJUk8A7VSTSZFMzp4GEmaW22TuZDYq5AaTsTxwtrXH9eufgwesH2Sq7e9Y5aadCbB29",
  "key26": "3mgQmVt6tQrRXCDSEamAfSLNTW77GrWaQBphrJokgxLTvybmJFzbra3Et6sdzNhM7WKFousEeBBm5QfeST69sKgy",
  "key27": "2QLhX6EQHaxV9LqKnWKgFqoi2VXJC3eicX5gECsuxswzrJKaF3gzoY2Nq56EWQeJekH3yPgmitCz4eMMikwH9hcr",
  "key28": "5ipqbsS9QYTpGNZvNLa9RrfeniU2F5A8PdhwuSMEPEKXGF3pAYvgsrfn9SrFEWZ7jNNUUqGaAxj1p6oDrHHR5bnN",
  "key29": "LyNNBEfrahyZqBXu4wMYiZBFWF563gsUFytA4kjeBxiYNQcVnyCLDuGDu8NAa22ayyqppH9M3WMzqCmSrk6X5wF",
  "key30": "7EeHUH2vj6yitvhA8JigFSDFkL3zF5yZdktYkXRaSPb6e658BXF6wtvH6vaJ9mBYLXtu9UK5MohH1iMtkXUNUkV",
  "key31": "4aiLGCWXZXCMG7Q6qz9hT1psGYvCVvFXLqAX6cmiKucBTySqhenRsBz5dedNzgDhcZoamvV1LcRtuc3jMJbA2WnN",
  "key32": "43ArUnm2krUrk1KtcTRqcLyt4A7PfxyXyXioW7zy6oGtyKWhfpqS91cSrF86yvC1sibYoE6zjPGPZkeENpQXx44R",
  "key33": "2gPGAcjGUiWStQ3c3geyWkK62oBXGssfobzHUkwWA16CxanqKgsoeGkiuh76aR61QmjdBp46HYDyTTirDTyenw38",
  "key34": "2j4CJfSAewJkA8zMbhGZBdLVvyuktRmPZNqciHko8aZeseBaEoFvqUNsTUuW1cHJURPWXW4pm5HZ5EkpAg3ps6q8",
  "key35": "4pLy4GhkFhbwVEPk6ut6Dmb4KDLAQncoaCN7CkozC9uy6f1h1NWs42q2U6rmyrUY4vPqrfVmzY8XkLqNWUNVTJSh",
  "key36": "3ShRwsF5wXSWhE3SzarsMQGJx5Jy1rx5Xo2DxHJN7cu5eiL2bTvCZJHpN2N1vrZAYuEkEo3G4vpJtzM7qs8GKHBY",
  "key37": "3Ma5e7SrXMn94tMQmwufMpYqwN5qesdbVtrfjGLt44MVjCxSYruE9qEANHwnCFm5tix5he5g6E6gRTe9FjjGXGLH",
  "key38": "59R1UGjGSFTwZryh7MV63aHqjfpmVVRhh3nHsLQ4R27ezQjnfLRECh7TjCbgyPihnqidim8MyLYNB7ttxxi6GubJ",
  "key39": "4G3DgAnq7CZXvbMjvsbvpY21ECFYC3hDqVwYwApLjUJ57aqCas5u3KniCeuNjyo18E5N74ySwiGeX88nbFP4JW9L"
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
