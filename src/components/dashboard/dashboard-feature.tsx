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
    "3uRJPPtLkVgnc3FKmHuQLKWs7uAHb3ZitXbPw491v629kqAkK2DHpAjDSicwZ1iHj9kswBGtp8NzQmknDdmDXjdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VZJdcZPnwt6eMS25AUYLmCeFascMJcz6vVTNfqkqzpyZS3d39epajtcGYGLC7ajJfTvqoEBJ6GiU2evSVAs2yhp",
  "key1": "3WG9dEeaT5TRv5H7JjqTQSaKJW7Cb5TyML1mxCaNUhxsvx4ahenKbor2iFKdbmGMHTuam3tLwMVSzz8ebCzKP43G",
  "key2": "5dKaXYnRZF2evWiYNkptWaboDnZC38LPtSxrJiahEHYmbe9BKAcjpghgkkofZuMewDeXEvoHLDU4yxUkAe1A2dNK",
  "key3": "34KLiGtByokBEzyudj4sHpwbeem6ABzYZpn7mJ7g7MarANNHjNxsJ9v3EiwhWUaHijKJ86qWcpAP6J1XVmUwHBw6",
  "key4": "3zgncChpLrqA5GCgF4CRLBYupdyMWU3162ZsUpypskwWBHuxENnbMj917r34vPXAiUAYX2wguPc1Doy1WC9eJSAQ",
  "key5": "4uGjA6JQganm2wMeiTLffs85gbHHmKTsGPajgHTShSQovrkiSA1zP63Kbh2e9hogUTWoo2MtS3tLso69Ruu1tFrK",
  "key6": "2jtE2UEcZsbfqd5vwY2wpLbpHMV15F5kpL1H231nJehhESz7cgDCFAC6Pr3MGX7Eq9ESrRYUAhCawtdpywbAH22X",
  "key7": "55ubuBvViv3KVpmmHyGPzgMQh8MCuKYgPkFvWe4K6znATt7iMSJpFdVAF8umGCwKpmxA6C6pNNERAErNvfGUxSta",
  "key8": "5TB6YAt7aG3C5YJeTGLMfxPMhViFfjAzhsT73yfrWa13tTXkNCz3TPbfoAuBbg65JmvvnqfQ2QmqNakYymy9Z5VL",
  "key9": "2fwDJaY84THPkbnNPkLhhq7QXaNcjQbxJogHhHqT53zRaNgx7nDQxw7uH9PPJsphz2wu5e92m18JYScduJERdFtZ",
  "key10": "3hhdrtLfEQKLcbzNbXv7QTgL3JjesHNREBgaL7XX4QKpiLDwSjrtd1NVdYbVTvbVPbLM7vRoQMEjPtojZ5pA5GM",
  "key11": "5Gsre3GrfM5mzsK3EubTVJWFcfWr7P27PLNHH5FUJdi9J6qzBbE83RCecTvAzFW7i37urbnsh3J5MZwvF3Y5bomp",
  "key12": "Kb3hGsZFoEbtRfSfGBKw2MsZ4bhmnt64nQqzFqVrDN6QDJs8KepGDMq4m3vYtLLDXuiFtg9AsW4qgUpmwtTpD81",
  "key13": "4WSaHkUWVpmb8cKNppVdKeMY7k57HA6yWxQjhvJdyKEy5HSQx5Z14mgwf1okFga26HVuG1CT4KCWM57crt2L1NSp",
  "key14": "2sEEu3dc9dYpzAYq9ukKgGickuueb6X5jAsVZm7E7SwiFyKcB4kZbq5hpgcdCKQo5zxLHNkokPtyZ7oKbqXANA92",
  "key15": "2voQVw17qUoyeRSnZfCCV7boAwCW37Lq9NuuVp9PVdsMHxzXr7r2cwQVVdLfoHPCT91K7i546JGrLdo1VgcngHgg",
  "key16": "3eFd7sfMfsf42mHijx9kocwPeRgtuztqNrcaqj1pDgJBHw9q6788XM9hFw8apakNHDPBrsowtAUxxLA1yYdyN8JK",
  "key17": "3z9BsHixUDEeJNNzriJrBJeLcynmGHewMrgeYz1aH6QTJRLPmFCcpiYn4uJQaFf2AjeXBf6ZAGv3njEeddXUKa64",
  "key18": "3kxyVtwRh1KrcJ7yLYeh3Sj9VWhr4JLE4EQqcL2pcedui47S54oKV7PHtbQzFhyk62DJf6rCUSM1NhFPBjcxaX3a",
  "key19": "3Cc4tjMKiAhRCwHHGWiZS73XiidRMbBPpfoCpMB7fdTQATc5qXJiqTM572rJdpUnYco6fMPcBotwid9USeNrUk41",
  "key20": "63wYCtdUgUC2kjTDJrfE8vqKnketmMa83tmgQN1jZ5RVNE6fDFLHhDBkkC5EmYhL9Qv9jTSEdPbVHu7w5ZbE3F4i",
  "key21": "4Vv5BBtc1VpxMpv8N3SaWCZ7Jd2XawPiJ9irW9ieTJ3s5FgiiHFgbnbvXGbX8hrZrD9kzpXzy4jFCHaVBRvmeHL6",
  "key22": "23etL7CF1Nm4UNxTu5rqaqWhB5nKonpRBcPRGSQaB8pH2jxsSpmYuX9uRcrX6b3fhYpZDxKSSrgftv6HdKzwBWVd",
  "key23": "4B1tJJASefWuyPbCgU3PUPPEFvRJHbAJDK6YzoArBXxUmLGMuayR7nXQGdQ2ECdqHUVX6bePxGAq2So2rtopUHjx",
  "key24": "3idXmjey4FCPeJSNKLbiyLQkNJaoiDTJbeqZR7VaCTrrRmqKjwjHX6se2nnfxMLg8gEHEugvnAv4xE2qEhWqvwcG",
  "key25": "4z2k3aSvoJKnWkdNrErPRCAhVDpfHDmPg3T2nUBmCsECZZvw2XDGP33XSYU65N7qvqvEvtzprLVXuKmN8C8MFxA9",
  "key26": "uKe2tpJhgstLfivbiwEBufKa9JmL7oYDzVgmHPJPzDEDemkPzhYEZBPhp36QcT5bP1uJh9tii5nfXWTxZ6tM8vV",
  "key27": "4kjdKLJtr1vpdTLPvwtpXYXieZ7Ba7zExf7FGyLdfjhQeFB46jAAfM5GRkxjUCGwF9Y2xxqw4hF9FCa7Q12nZE1g",
  "key28": "4adjZ3n4CV9iQPm2XRNfHeFyGN47yQs2KXujMrVBuBw9ingRNgbLfsijRx6jxvgTvUJXKLgKy8U2Tdm2EeSkWjHh",
  "key29": "5egtwdG6NY5xmXfzZNNT6WZHPgAT4WpJ2kXHRZkjwV4Hf3QRBJbMZi5FmwWz4MRCPESWAcAsZnorQDGn5zFey7FS",
  "key30": "64QHThDMK8UGue7UYSExHaYwpG9PgvdrT7PYTCXxnCeMxrvpseAgifgMWG62FwneHnXAD1URUTnQE3JtTHdK7QsV",
  "key31": "24DxjEbCoinGxxjNqzUJAKtct2sLWqTbVPgcspNptt4VwUY7LjgJyeNZDXp6SYumNdkkVEBjWwGqAzcjAYxK3UQb",
  "key32": "4omvHR9FkE9nrUkwNsVhHKmGz95h9BqZXzPqz8nQosrFXU8M4AxwQEyqsP7VUfhk4mPPQ3ijVtA7kvSgzh3yYfYY",
  "key33": "5t3Pi4r7qmKoUjpHytDRyr2HnzbLbFMf1AHWD3HnxfYzVUebAV2x4v8saktuAYvDzEmdhmjNXnwHK43gzRYPgs8r",
  "key34": "5T7PUwVUpmJ7PpNCwi1n6YqtC6FPb8FrAS4u1sBVft7mWAZVfQwPTn1K7d39VdFxKaNc9rw8iwYMHYowjL5bamg4",
  "key35": "5zmBuwwUGkEfiaf9V1umY9FXYsa4tXefHCUzQGaTmbC2DoUhuyBUJ6WtxsdktdvsW2DFgvZ5Yp7BQGe8vmcrep9c",
  "key36": "2ee7wRVwBTf5Yt3PMr96BzrFcnfFqAmogVgR7wECf5xBopxhBp9pca3BTLJF2jRtsA97q2vZikZ8Am8CiLnpwCQk",
  "key37": "4afL71p6J5XQwKjQ2gpY2xLifRvPZRvtynfmNeaScpUAYD5dLqASymLURRqd72kFMWrMBTob3VQptY7Y77B36uz2",
  "key38": "3rG5PuAG7CHoVuABLXyTmJZbsSctuvF8wMFwooD98KGmUKxvSMx8hjPiNrgE5zWRbzjvWAFri53PXkSCaArnVGSz",
  "key39": "4Lrn4ZQbmueXzhxFtkM5G3z39fNbpia7uhouhovdabqfa4dFJhhhKN3sriNcD8qbGbF2cVfN6xn5hp6k9wuFrD9p",
  "key40": "8M1N5FNXSzBHAtarQCWFVG3QZvPXstiyHSU2VonmLuSG3PB5YtwqQ3yn4K82JWS1FoB2pQn1nRyCfYEWqZPjhfJ",
  "key41": "5pEvykPpw1MPYKFZ9QzvDmv5ix8No4tbFkZJfNpMPaHPRsCHAXRU43Nh4KDtMZsBVzko8iyi7VvyEvh2aXvbHE3U",
  "key42": "2JVnNp9eami7ERR1rvTmKockM4vNvQ4rdKcw1AeHzCvP2Tu7LACxq8ryZBWJb3yZFGFPzav2x4nknWWGaHUQdcwN",
  "key43": "3RWZobrFxiEhi2kLQR59gZx2v3dGm8rQ33aw1arWDwui73fHJ6H6ZVh8qP7FV5phXTHqzQTLnFCswX2nPpGnA69Y"
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
