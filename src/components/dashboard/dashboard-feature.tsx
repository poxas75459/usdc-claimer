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
    "2Rv2k5M5cH1oGRptejjt9a4oBtE6TDybipuCNXewmohNPdP3eySPPCZPJ7nS6H4iTxsDoxJCechnoCGeBo2uaVWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hwJUaR6VNtRquTpdBVAqy1Kr2i96UPecAepGYDGpedUVHu1wuAPcZ8gywpMRxuKgpvjiwS455r8F5SVa7YNoEyJ",
  "key1": "2X3YPxnCz2XfosH8AAvGo1zxUqZStRTxNRxZdbdj9tkasGQsMP1jMrz9JYB8SB6fRK97wFnVPDX5mAHTDhsyHjJL",
  "key2": "2wjwAbQtqauLajKpHZdSvivrYGcFyy6bzMKV7AQJpBiaF2oQPgwbhZkWWedauE3rA4Hy3Lsp8hviLaSeTzELrvhF",
  "key3": "4dp72VwrFAuXVh6gThx4cxhNjbgo6WBYsNLHK9isx4EHYhU7WK6hQceLkLRcZcxcj939SbJyVtJac68XaXso5Axv",
  "key4": "3adHR2LVQBkWmVxdiCP4qFTX3BWPWw9fDpqxkXvuTeoDns4KJ42CRkBv8ryC22CJ64q5Tq4iWwRhNqEsNFB5LnuV",
  "key5": "3P1CstUHTQbHft7zAV57LSpkytL2VVpHdLXcQPtwf1K9WhEnuWoRL4JpjSQRc96xVKcNG4FVPEygqqagXLdK1wKD",
  "key6": "3qfTuiB9URPVb6mr1m3JoLL62zU4MtLU21bPKVeYEGoJZ6eX3mHS9JXSFLb1aCGR4ysgKaLRZfycB4LiximBxcBq",
  "key7": "4qZYaSAx3v3dNrwxE7kfbx5LAMc39MnvBttBxM4ZE7vF3LBWDmHh1zPc4RC4a6BYjPnCog86Sax2P573AEW9Mkzo",
  "key8": "2yDS9kt6HmLP5AKfR4KxSWJftubCXrSfgTeVgErP3ZiLqYGrGAdHn1NnbB5pAPZZXFXekhB3bTsqE5yfnTm1Tc9e",
  "key9": "4J4W4gqB9YC4Cezdw1AjAFxNoHVLvQhC6Bb6mYfBp9h1h1qM74iPtsKCncYb74jmrZ7LXnbjNU9AxG8o2Xkh6Kmu",
  "key10": "4g6SC5FrSKJhHY9AujWdnD6NJnXenMsxUwcxihDGD5LQjqCwtGj8ZVYxjf11tMF5iatFpa4TPgYzKAkLzviL8t7t",
  "key11": "3EvtSGAQWNdYpMFxdF1NTXtnXxubXdDozWNyNBFGCirTNASv1ge7GAMfN9TskvTmg7HHqbCmmRJw5PiBracGxGe2",
  "key12": "5aQudiNZBK3wrDzh8adzCxSzTbHKwxEGoeywHzoqp8nzFHeY5oTZ7MfBS49pgBn9ArXFALmHvFr1z58DoLw9k6JL",
  "key13": "4bxKQRScNHT7vxG6vxF5ktViHnxAJF4hbY2W9sC4Tg4pNpPbfcG5g8r4Yo3TWG848kBSVxR1A1HTBwxsBBQqnyin",
  "key14": "2LvXus4Zo1vCYTBB5r9X4BZMP3ipR87hoAtNMHmwWSE2jG2pHZNHQbrJsASxQ3xVrCs3J9o7jKb3D8mFUqPckqpP",
  "key15": "2hqs8JGjfuKr4ZEt3864SkgkatZQhv5APxFQkNuWjHZrKYECUzJAN8g6wiHfFnUcmPv5L9exUkYJk4pxyLd6QE5X",
  "key16": "3nCtHQwBgBEcj3G9vdLEx9SzQnTqKLDovAj5MMnKWyfeanpQu2tWE7uKPQfa4QCsboCKtj6Vt6RJfZuH2bMhUHkm",
  "key17": "yhAGZ3JaPxgDbMtVpf7geTEchjmXuDiCTTo3K8x8Re5gviYhR6J8dvLy7zE8b1MF6wfAP4a3n9mVvDnKiZ9ovjz",
  "key18": "5DD8TFLZkj1gYCrQ8HQGWfz1t1SGaUXBiH8wPJt8C56McFrTNS33isiiUgBYPKravTuVuevmywNeTQuy46cSKETJ",
  "key19": "7siE9SsMtWRBiXnrJgawxZvFNAFQjdCCRseBd3J1NT9rao94CaufsncXH6AVUNxMHDfUKJVL9YUr2f1jk5LatCN",
  "key20": "3eM8MtUk1SJNSC3icbg4MSTbQCQxpDPUyN51Hh2dtFcGqYo1g9XnjTAJ3f6D27V3eZNJjqheDUejPTnihaQt8eHa",
  "key21": "4yKC3MJ1F2Aet83xCnxcTuiCqNrphQtujUeeF95dD4B1V3zFxqNG9GfkBqvssLVFdGQYp8ZrVX17r9Ljhhku6ywp",
  "key22": "5YxHCvEb7EAYWninSFPUxHW4Q6KhUenbTTuzsTQJDgLqpCzSNfGdgLXprniHaWXWGGvjpQ6pZ4jeNpM8c1KAHqHS",
  "key23": "4DwLeFHg6j9aRiewgx4BK8xuwQqARUiuxJ3vNPkRFChVoPjda68oqv5bzF6uCuqc16BtSn1cbS2cW2nUXXiniGgT",
  "key24": "44viHbvkCJWG4rxsZYjjdfBkP1Y6GRdoLegg2hD6fpauowAdVbsApf8LzW7UyFg89zQ9NvKwT7ZCwsQV6igozaLK"
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
