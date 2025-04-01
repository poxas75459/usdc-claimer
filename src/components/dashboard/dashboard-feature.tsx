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
    "5JaAwLQ4J93H4pMfh3gqCgD7rj8pYVdY5AzxqtMQvbR4yLsjgVXScpGhUoP6HBPbFVypLBuj9VDEdtKbfdWZ6hRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d33nkbH3Ass7W4dy1Hq6oeBrgaDeTd2jC93otvX6jcabVQ1ktvngReidWqq8qiBpaKtcmsaDb5ek5UBENXezhm9",
  "key1": "4iUgs2TsVwC7vefkpJ5Dj3egyyvnc4n1CtqbmPwjYbQcHAa3r5BGdXx4cUTCG1xaX68AEvLKTVU4u1yLm2HBUquE",
  "key2": "3adcd8uTSGw4HXCsT9qRCNXwvMY4AWNmsasiY9TygLopS7KdKfdURUExmabUs9pDcCECN1vVTJJaDZm5GQf5gtCx",
  "key3": "5KYDE3fXATrnUMGSQKRUjEffEJrxKEbxRgDXoSfF5sQ7Ui22DDhKtj5kt8AtNeLFBSXUxLZoCzFkNAZQP823Knmz",
  "key4": "41Jx8ZcVCCJ6yVmqYJkkoGHZBNYvj1TU61XMFpTpFPEuoQ1vtfyHnH2joLKQE2yT3UgFgbsqK2uZTzARvFcoka7G",
  "key5": "66BTHtNfnSETgtQYaU7aVeVyJ4DCSGLR8Ge6F48pnx4Xq7LhJ5PEBBUPgoDY3NvJn7HvQEUWe1yA4cW4H8asv9W8",
  "key6": "uAsbBDgvcH6867YwtVwtSA68Def3Jsp3Tf3wCepaNjF4z4EPXcxottAr4d65uwTwjXAMmoBXJer2m3s8NGqJEqy",
  "key7": "Wo6rwPhXRWYTeQr6mkbMs3vvHuCnw8mDtUa1GNh3A1gTaLKTfmFZFCAQR1qxnigiJe19wZ4T7bfwapm7dkdqYXa",
  "key8": "5AP7Bv8UfsuLbHKMDsWm4mppdyh3Mm4Ew4L1iCz1WPiPkKHrodQqaQ7DWxG9wwq3gQDAd4WQkgLGm7j3WUqGHWC7",
  "key9": "25g7uuyVimK8TVSSmVU6YQXPzcWyKpjWyTdysbcH9VCHrwkTioi1Ban5PVBeUY1Am6iFHCHkGWkswFTNMh5hTCFW",
  "key10": "4JCGGMby2siqbqn1VrJkoNBcNG4aEKVxZ6U6HYzvbfGrFBwNNbZxST7oaKto2PxbvPkNJakRiQFxX3Lcw2S4sdyB",
  "key11": "4po7ciXoZwkQTbiD8xiV8X96KJFSUSoKAqVtYjMvk8Hq3zdXi2iS3Ba7kx32rL8tb5vDf37ZAH8NTyip5hFuJdas",
  "key12": "5itWATiXtBFcniGCgFxafWdwBAx8vH5JoX1BiC6BKRHCqzWWJ1twWzQZpdaQgakeMqpEpsKUvkveTs39ZAQK2uD6",
  "key13": "3dFKzLtN3BwAcT3M4VqeMDETQqS8Dm4nPUL17kLWEBjBNBaQymjAX5XXQGQ76GudrmRnPHaYAdTzd28RFuWcWYwA",
  "key14": "vt2oRKfZskjTgwHaM1ywjY6SgWTf5xZjCmMxphPiquCmHDmynqr2jBusMjVgLiKa9GBjFBEfVCSjngY9Xa3FMdr",
  "key15": "649f6dWBD9ZvMisgv8U19qSbgoprd6qgeNsRxXuqj7U6uuNFq7EuFfvARGvEaBZMciB9mQEwZZacQZUMCXqjzPxq",
  "key16": "5ovYziWMH2AqLDNWfBrxNStBZtSHfRxAfXeuiC1bNEjGp4gd4stByb4A9tZYA8PNAndsb83PWhH3B9QDRMepFu9v",
  "key17": "2S7sHvc1NyyNQH3h18RAstjwMjWMGye91tNpNo6DbJqL6DEWcg2Y1hm3c7hxsuR9NR4FnivMTZivWpTkWbw9UdN1",
  "key18": "SsqxNci9p8y5U1oUxgmscvrAQ2We5WGHBjLnDcBivodjMYcsXyi7hTMW2KHJN4CeMhRzv6RVKsbsMHv8zjFQ2d8",
  "key19": "54FpRvZ7W6vSdskjwZfwgwKaqjzUt94bhwh9Lf5RyGq9kfsAd9eqJ9FHCuAmW2ePgddvpsn6AjBoLtftBrtBk3LZ",
  "key20": "39E4ir6P428pmwZ3hUcfePLGQxMbvkxQLjNw9XA5bG4dieFASsqt4FWHFQjGMK4ZqW93KSbhjAaR3h21qkLonsNS",
  "key21": "5Hgmz83qDEHqCXbfiY2GVa79r49wn393GXaxMf5h5oUhR1k9ajf72N76G5N4YbkW6AjjR2kDuDxGDjgeeo27z1kH",
  "key22": "3nTvrcEWhm4183SoXVSchBAvC33bJQQ1Huxzj3hbbrVHH7dvdNiDJDfgEHA57PxBzcE1uPi6EPzFfsV29MjNbNqg",
  "key23": "jHSWKGbeRBK5G1qGjE6SdvTrB7CX3GeRpdckf2FLZQuHXqQfeYSCcDkSZKVGeSQH9dJTri5mqjRCZggdjFRmeVX",
  "key24": "5F6bF3s2yfPiySUmYgt77gV4UZodG4rFeBQ3fnJFknjosFnLWAcvDsir6rbcry2bbKrgCm6bcbRaZa2cDVnoGd2H",
  "key25": "5deYzfH3fsfr9egP83rHpoXVDEbBEZ3BgAbkYssUW1sLFTPQe2gpbYwu1Kc4rPmMXwoayQJBCSEWgwqgiwfbJ5GZ",
  "key26": "423oDdtADpPUpcHYHmvZMCA6VtwQMqK7cSc51iPniR5BCMrNaZCctZjcKSCYmg1fn2FLdefGJSKjypmgUE5CtyQ7",
  "key27": "59gmt9dJFZ7zx3xbEVhgRXJMTQwBUZssZ5YFsdy9ud6k7AiqD8JEk66CCFzemnQcSWtCkR9dtTMcEnryr2bppqBm",
  "key28": "3T9L25sCzoaDAEdfb256Fr6DvATxu5VDcNPRKgjNR1EFpuhN1aJH1C5ksuLyAvdT88w7Tbt4dRfPDE5zHAPcLmnp",
  "key29": "2k8AcnoRz9qbvfXpxqXHh7tejuH97MvpyR2Z8RutUjm5Hsrg4MWWyVLjFh1WWDKpBEaZFvax1WgXikBTJWjBMKGj",
  "key30": "2AFTNKqrYWwK4FW3cmivF5D2hqvrqcSopXaiC2URxmi1DVMvq7f9epsH8tBs1XA19njhGbnYLV1AeMub7Zcpbx9u",
  "key31": "B31nMSaah65R6Jqa1ja4QrjZEZjnnnsE9e7zSPmf8d6ZJD6z5KEWhHP8u3Ms7QktoqPrCxJacEgfyQbF6rkMWRR",
  "key32": "5Ypzod2RR9XhNiRLoDPCj7QhvrcF3citdUz1KwroBkrcqNN9HPD43c3f1HZqL1E4KymaveDMRsWcZJQGsNiGmu8W",
  "key33": "5SNJKKSrsx8y3LGvAf4NrGJwdbaazrRkS8i6KJ3qn1tE9zo9KffK8QocSieTfzDz7qpDugiCeiZTZxaortyY5c2X",
  "key34": "3JVdYRMjzji9vDHsLcL3HnAZLBxJ4RHQAbuiswji6NC6zhUsHKfoYRyBhVRTYL3NP9n8vQ4oSPcLqVBuWs5NaxyT",
  "key35": "4dBNmbDQDvyJDy37kwf2iFRhuD6zKiweSECFnUfEvjbepbdSzVB2ss1a5yhD6C71pRRT7iXvjiDwUEsTSSTAZWpy",
  "key36": "4WHavZS5XR5e4dvnVuft4wjs31J92fKwZSXSP6ptPmf4RUdn8npzjE5xKAyNxj34K4mbxAmFmzs6YR8i7hiriFt3",
  "key37": "2y2GCAJJz5hZ3Zid8TVgxxUxMJUhkdB9Y2bFHob5SP3Xp2PvG6gcGW2NCK3JAdQFy2o9qLmEs3rCtx1J7YLWmiMX",
  "key38": "2MagmMD22mtjrcfdupXmFdxU9WhVCJSkQip1cLrPJWMia6E3KYC9wk1o8xjXB8LgpRSVYapCTDqhFAPb8d9Z6Lkn",
  "key39": "y4NK9XGKzUB4iRPCCyqe517gQdeTeBsU6zDr9mf8pLFPSYzaAhzttxnrzqugxNZNCHq1j3vxQp6w7QuoWrt7ZNV",
  "key40": "2KpFCUpxufe7uyHUr1usfJ21U1M4mfkMSroPpTPkudBJ4A1gLRG2sHAvXScK5bi989LKSwRgqU9ctF6Xrx5Dt7Yb",
  "key41": "5PbUdgp98fPDXtEcdBZem2Eo76vpG3b6uWdkbqKqGM73r5o2Qpov2CJ7Tt7J9QLK3LKJ77S2fDDR8Y3U3LsmLTK1"
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
