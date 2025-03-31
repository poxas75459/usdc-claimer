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
    "RH783gbP43Mmv88BFknMYHwhc4bjWioyZszSeixwH9MqNoeqgLLzcWjKi9PBXMG1Qv1KpPVc4j39Z3K9P1rLgVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44KmFLPm5mAQMzr7dhE9WVxy9dDS1s7NiAGDvj1aTwBhnbhXX8eLtTBGC84nFAuJTGYngKYPsjRbzibX6zhwxaFm",
  "key1": "41hDryS5Z9KANKy6g2Hr3CMLBd4QKG2tsfLQBMqgM1V6FHHLMuJdGWgMKDCyqQVYYAntx5tLevZGL83G6cRCexB6",
  "key2": "4nz7kQpQk5w4ADoQvcatDWdADeKc8Vq8mYjdZBYCV9n6hFVZJoi97PY8KGzGbadAxKbcEC5AuJjvX5pmycN2eEnx",
  "key3": "5iJ9Nyyb1Gz9XJDha3zXUNjwBT99117EiMPc1MEfGLNasT5aK735au9Yejb6P4tch9VHqDvnde9YwUXd9US3eyUv",
  "key4": "3euXXXv2Z49KB3xESKVVejCd1QhGWUedVihHHW4YmLCxfYn1bcR2f6wsRLogiQKjnAuJ93mmnUvhrRCLzesgcWY7",
  "key5": "4gMjb3EzgUXfg9TWWHmTQfrb7fFnVNkH5w85KwAbmaTqsaAwgfrdxEnqaHivGtYDSYa33wUc1Hhi5GWJY9BEMTFC",
  "key6": "3eXcLbif8qsBQ34i3BVGjxUk5GefqLW5St6jvoAuujqFU3kNt3oETvw84sMJkxjKfCesU93HTpKsiWJ77GKMSESQ",
  "key7": "3JJctfc99mRdhHevJU4g16kQDTPzjrTxARbdKGuQvDCLUXoEj9fjpaX9Qt15JmvmnKHUGKxNZZST3mR26ZeMDDBK",
  "key8": "gm41kwbcsVNf28bhxZC7a8fLNawCMkNK6ruCZpK9WdtFFpBcXzNNGbwTicNTjk23k92RgB5bu5c3VhwqZmf3YCi",
  "key9": "5fKxALgvGju1f5Dwr5zepWuDJHnqNX8y4yX39QRMtM5uCzKdrksb7iiW3PL7LX9WvYeLDaZWc2kWUpEAnDM2wf5E",
  "key10": "2K6nUhUdyJDhbYKxBNs44pSphk89v4DJp5qgDZ1WXzLhnuystZtcDxsxqRKG9fcR3y1F47fAqQXdFvMu7macAbeU",
  "key11": "36kaZLpWQpVgCx2vszLeCRRkajG8amLazskicqeuqQefoXWVKRCYKyY85E43v6BRcvba7Mu1HXqhCrpyZQZY2oDC",
  "key12": "447jhofLaD1TncNmmwLqGJ3jLmMBoZXVhWRVUiCLobCzbv38nMFEkMbeQUteVFJgkfyKWX66HJBCT66hoF8nrTWH",
  "key13": "cHgQr7jwPy4JgzZS2i4b7kM5LLwoZUo1tf5Edg8qR9bbMWJJ5LQ7X4W1xCmRDRBWYjDXX8RkXFBSub3RK5NrFUH",
  "key14": "3KY696bJEcJ2UvxagnGzXtVQJW2WYqT1EDmsBmfGh1oVj4nfn1jKrctAouPDyXbQ5j9G3EYNPoQ6UV6up2pWtf8s",
  "key15": "zYQoUP84yEDayEt26G54fpFRrKigT2WmXqcEnsKbSFsAyahueCLPskZPVj2Euzbipra7DJsVXT9doMXvERowU9j",
  "key16": "enwm2MNgN8Rj4gMBqybeBCe5C4ZmXRpu3FyuVv7kjkKNRUYFywXXFHeC82uhTKdSKq8ktYdEuaBPTvkh2jwfgWW",
  "key17": "41FuHD9tYTn1MP8KnapacKHWFGBPRmQZVHtXhBvhisW6EDjeS3tb4GCEmuYnQqjr6T1Kd3BEP2pnfiAYGHySkpyJ",
  "key18": "5zTJ68dRYwhKRhNVw4z6du37C6H1CoFz6Wk1G51Q8FSPwkPTrhduUkY57UwT9An1MNPnt9xf3nynnbrdPyw2TaYE",
  "key19": "5vf63niWUnzk8EpTXK1AcXM1ik2ZrMMtd5TBrSVGdUFE3Rve6kZMmm92KfHmWzGPN6HtNaUCfhfN9DeC5v4qJAZo",
  "key20": "4xrBQFmEqnD7vmv4MMdXw7Mp9qW1yTxBkKMVsr1agfZsngoDWukxtSdwQkBKeULPGnxcahbwBb3xrSXg3mJs64CE",
  "key21": "iMxubuVRVPRnVab9Wxs4scW5Udt59pSsandpUHV3JJt5aYEfMKS2xpstUxieMPbxvM9qDPpe5aUJB1F6QkChVRK",
  "key22": "5LgNyrNebLh3EUn39QQEdKY9CjNzoqU7XVN4tFq2WuwemnZZeEjLS5AVYeAjmyakQZU6WQjLDtZnpo2TGudTPdGF",
  "key23": "54DbKCzovz8tuKofocedHVRRk99obPjyvP8fXVZsVXMyf2APFQ96cnZrL7wDFpJHSX1xjT7TWuiuw4MSu6EmU42",
  "key24": "3t8gcJtqFTthLnxf16iUKM57rRezNQ1QHpu8EHgENmgfzzDu5aLG87cADqnwi7UUBzGdoiswfa3ui4Q359sY3SNM",
  "key25": "3Hzuyhe8CdmZLbrDpoxKiMjSFaUTMypT2q1wU4t7oRycAG4djTzddZpABzYgANPWSeTKNoDw1tzJACy9NZV3pxgY",
  "key26": "5GcnZjKqjp3Su6eGs5wR4fxagapZKvQZDVLHCsiN1TnsQhNe8vV61xP79dVSxMeRgA7iwPxjFTWnEemAxP5kLQpK"
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
