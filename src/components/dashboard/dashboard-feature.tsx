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
    "46FhLVkpgKUBLnXeUh57Gao6GLSzRYaiN2YjjYxbwMZfpJmrYQtTaoroqSYReYzZMkMvPfgaKesnDwhVMBtobNtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jKTrLRV3eGCXWMTyeYvJMiogCDNg5Xrc9Za2vQJoGq9VddrmtcD8st8Hr4or1dRNa6HY5jB3rgDhSCqzWeH3UQy",
  "key1": "HjiSirvYbLzKSBEZvFANo5cwV46SmR29RL3qmx4xDpNBxCVHp14GDC6yGZRSNXE4pfSEraREnotSJm3xdpybJCT",
  "key2": "2w18qPB6TzsqV9NRWTjKf9YLMfFgTjKmsPmxrze5V85DgevkpfV5bphwr4zPQoofJATSPHQT5KwUJ8dsLxiQGsrT",
  "key3": "5ocuts8NfujvTkqaKmzUEyWph8My8aw93nW5s26wZrgZwPTVCaSggr9VyoTQkhMQXsmZs78222ZeXvuXgyPzeu92",
  "key4": "61kCZjGKpqQbDczGBNYEJBps5QaFy6QEkZ9zpL5LmvoEALT1U81cbNV2tF8m5EHJLeMmp1JjQFCFcyKX6Yf4Uz7R",
  "key5": "3QYfaXxKawqz7G4crY9HXCZNxvHsDW4nkvC82S167EviJNhGKtLYp4HBpziNTAwPeFzWHPM3UHZRLfYhx9WtTcaW",
  "key6": "3KwUxjxWqvYcEJrg7bLTVKbzjt7nB9pxmwzfNEMMDoL6WDFHRsVob9r9TX2qyMTjopxsD1p5zpXzgWEEv3yQLrhx",
  "key7": "2LaKF7UrGjpQw5bRCQN2se2eApHC3MdYRi1djepfvs7HF9f8gCk6jY9WgRQY42K1skYhCbRsbeDrRGmPkbK8yhNc",
  "key8": "2gywxaJ6oNp3zBGa93GJWKsNtuUQq7hgGVpPpsJcBesxrav5DC4FXJxtmELTU73pJaXFgMEb9nGcr4tY2iUv8BVc",
  "key9": "km7gC5A237jea9NF1uBq5eeDXtuTu9jevNTS7VkXToBiH5NiUksou2r2UpoR6DssNWUGHmCsZ5htXJdHLQ7aRaL",
  "key10": "32J9rvtzeSrbE7SWd4YqbDcC2NwcPoEDGj2yPLpvXYGUwn7aAHKe7sjTzdUmrPPHZK6T4XpZGW1MPBCRrFgEt86Z",
  "key11": "56bGpBcLUhx58diezWWgTNraQv8huQQ4qwBK4VqGbdn4cVtuPDZPqrSKN7GEoQ4x6uPsS7mfW6c8RxA8eQtbCtcW",
  "key12": "GV9iGQDVZ4eHa49jXr7eH6U17ohNzL7kEmnALmbTccky9ojGxbzCzciNs4pquqAuXqiTqPXDmuP6w1vCLABx9SS",
  "key13": "42EpNFAsfr9Q5jFsKhzY9bSijNHVaLrgwyNZpbThJ6rxZCAdXEfafBpVAD5EtgD5v3Vbyqnad3NZtCAp7bT6icNz",
  "key14": "3qti5HhdbpcmkseiKL4wkwbSEfb92p2xS5Yt9nWs4GMzGLietp4bBe2SrCaNkpzaQHaQZpZ7BbLKb4VsN2dZmreT",
  "key15": "5cHiVBTCRF5eihyMfL2hicgpx7CE93dTrmGwfW3waxBPw9M4RAvzco8QDrEUL28tFWsG4UfCoQt7j2pE3s3VvWxZ",
  "key16": "zYBSgBJkqJtAspQpyFam7LkSysEaoy7JxurUkMdA425cBoQtXf76GgwvZfof2iw5u9dV4nDFsBSkaN9gTtUZmHg",
  "key17": "2WCMJuJ6Aw1PZSDTT9FW8nGEiuqRUAQC8VorFPf5a9NQnevTKyYqDVTBAJ54hsCjt1WKpYu8NmsUAntfj3nGbTZp",
  "key18": "4iiuZVefQEum351tXPr8yVYFrMHonKWDANH4xECk5whvakcwPzATUs97n7tffTW5MyRqCYcpmdLUzGFnVakZk9DG",
  "key19": "4STZYpAhnaJKNGSpLjHYBr5qmNBjFdo9Cn2yihpbhiTdJskMZbQUPagiK6uUyqtsWK5uYxnVVTE1HRQtKe2dLPGD",
  "key20": "3DTe9kJqHDZhX9VxX9eU3cYgjknu1ExoKcGUUHPE3LzLs9M3i4hsiuYAmZ7KAfiCMyhF2Q53DtFEfE6DLHG6q2Tn",
  "key21": "4PJGA77k2EtuFsrwzy6DnXA4mnruy2W5Tzw7m81iuYq75PkqPzuf92mKQK4TfB4au2Ug3HkhC2uDjh9peXRf4teb",
  "key22": "5L5MSBhc71CJo6kQ1VbEpWtE13F4zqZF2ReDXFSAEgVTUhnpNVh6qCFsHGnAK61GVHg33jBypNTwVEsFEx8LMwKu",
  "key23": "2sX1PCUcWgSKWdcqEGJsmjatausEvHzk5wGM3d8VpC6U8DZHm3YVczG8qdVwpmWt7GMtwCVoThz6kz2vRmHi3gXq",
  "key24": "2JS82E9R7DCnLfZSVHJ9XHEXBxwoPiycHiqPLySgnmRfnTufbppgcgNRV3BE4jiNBon9NpZsz5mwqw8GbgaLj539",
  "key25": "2afXjKKn8ETTfoayA4meFv9cVuinurJnRWMgQ45UwMST6PA5ePWaJpmSGJtZXHsB17tVX1omhiq2HR2FvWeXP3ya",
  "key26": "24R9EJD5t4reE9Lw2tTSGuzgsYNn8b6HHrTHfjmaTEQ5RKAmP4i65dYdNMsjHraPuMCEhurss5xBZGuuEgoD8fcu",
  "key27": "34HSBEia4fpfeXbe2saoujhUXG9UMpxPDKMTaHsP5YswKVTc9QoKdaT17ATphvS8pGHZGFJGWjyHcMfkhSptszRj",
  "key28": "5QrT7rfJVATTpCX9mSgbTgsU3WYgXFUmz7F7E2svQCgkVhYWKmsy95zuVjjUFF3vWVFrMfbmrFDfhTxDxcfPWXVL",
  "key29": "4ot5NsqpkdNmWYRr4Xax2ofwdqYXicsSwNGf34FxhC7jKdkf6oYXx2p8ftJyLFSKGiarpsRFKNE13WYmX7NQPchj",
  "key30": "2inLcVLW5nC4aXmAeW1aqx9NibanuJsxNyWK65Ti7sfqsJb3omEyZiaeum8kchE3NkaRtKxmxSsiUzA7T9iSnd1Z",
  "key31": "31zdy1zRtqE1pMsB46cvxBadB1CXSsa5cM3SvnoPdDsVCj8eKJmtwDdKm2rig2oenDhYoEvLotu5APUHiRjS44xf",
  "key32": "3BovBMdj8iTuJefgUsaxaQqMirKKCb7ykeJ7B1RaFKwensprwh7Wes5viWkQQUMZYpo4PT9ZJYhCSmSYPD9xPdrd",
  "key33": "56vcry8qGUS9yGFZ7CEhHzTwrucymkTEQf6GnrqhVaiH7GLjGDjAWn7uD6vdrzJ6qx9dbVeKtkuhX4dmVmQR5DMs"
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
