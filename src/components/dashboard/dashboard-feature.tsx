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
    "4W6nqouMfQcYDXCpQ38AFpuQ4jA1JYuNjWHSS7GGnaqsghEAwJEwR85Tzfeo5M3Q8ayuKXa7Jb1nHVFHkxkCX63Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kPBKQR7pRLM2BenxgMRdHvdkwRcpgjrdKxcTz5arMT3bP9XGQLzd5kTeMAiXb5uoy73htyG8yNqC88ZzZmjcQaR",
  "key1": "5V4TKyNhaCsXPKq61ApPdLkJUiWfAC8RAv27FhTSnMJweD4Z2pWT6aAhRyY5UcLfXhrgvMi4BRMfnUHy9nLSrYeT",
  "key2": "46xxea96dcUrwR5hsaAKcAVnhPQ68ANtZS633cbQ6CMywwT2geVfzFgDPADsAqDKUFNex9h74t8urrEFMNJ3sH9F",
  "key3": "BJegbZHyg4nYt5n2yWuW6uFDLDC4kwn1FquZ4FtK5Xk81aHzqJuEbGZt5yRCJiUMCgx42Lf4WDYnAFV1YcgP14v",
  "key4": "sJ67kqX8hfqarB5tQLdkAkoxnFVP6RqA444rzfrUb1qceSHxWvk6zfuaF5AkgH7F5v7uDevi6dxBMz3VwVvf6jL",
  "key5": "3WJQSUJF7VrGyhNVoooH43Jngs6CV1zqxFg3K8kbsRcb3v7UR9zukRDbhh8Dx5WBjkwM28gJfBD4JjAjRcfNp1xw",
  "key6": "4XFoK2FEfBUwu9X8kFmY9cEReM4hgQA5GPT4Q6aaPrjx5eGXBxPh97BomCPDSi9kZaedwAbHvH8HC9f6mCWrnBaV",
  "key7": "5TDt9kSw6UBX64n9oNjeXM8HPPHxHATtVEcJf3WkQD922R2LDAKXvaM7YX6A3NKEE1yHFZkiSHPLoWjUA7M2nPBu",
  "key8": "3jm1KopZezrQEmJ2tKg6XRKaEi11KZkFKWBj35yakeqZfHMLA39bmmwSy3DVGoRP4SS6ekiAyLm8Asa7M2D5ojEs",
  "key9": "2fZenmuSUrXe44uPX4xrPXcq6aPZ5tBSthR5x4wnZnE593UsVo7PK49TYVW49AtYrSfLaxojzvcRBRKmCPG4JGcv",
  "key10": "3V38wGexi5UqauenjJGRLwcLP2k6oKgRenAbJeQrggvdbJjZEVx9vRPC68DPte8r7M3Dm8ToV7HxKQLyDegNuG2B",
  "key11": "2DHSkXGpVyViyAAThWm9agajbWyxUWrD48TNr4qgBy3dVvDUFJ7EJEQM2XzTLBeoG73exKqeuKGu2wgjenQdHbww",
  "key12": "2essWdfR4zkSj1XgzuH4ub7K3wvbeLQHBsNAeu9YoMp7smTWniSvz6UUtFehLXAbtdnqr6wEiyqoy5e9tio5VoRJ",
  "key13": "5p5FUY3gxMBP62bUf4SLyhWwqaY4EU85hzKsBjCZartU5ZV2wZXc33zZiUKJwwiGBJEwxbePBj49odATSKoNfs1U",
  "key14": "5UwxmQHGHRELHf33kgbQPuxnSYy3hMkLu6xwi3Ki76b8oDWPznb1QJmTok9PSNKAB7budTe5hoNwTAbdkoTWUYPs",
  "key15": "s9tu8cLxyxpUbC9L8Bjp2jKGf8n3L4CUnANpu3HczaHRk98uQqE5HU9o5Vfp29MNsWjktKPqLR81JJBkqnLCwuv",
  "key16": "4u9a2WvuEeQJTohRntNANYmF7HhK17PvED4vMuFgEL7nL2PV5efCZyHU7QB7siGGBwzQq9vaDmgTX5Ea7H2yiLy5",
  "key17": "26AAEYCWNpkJqtuVJh6Hbr2YtUwLVC1ZqTHGvE6Wpmrcdwz5JzKbtx1UMH9KkVMCf1grKHujoijVvJyn4aj2qcrL",
  "key18": "2zymuaiBeQhkPcM1rfHAxP8VBCVokfrps59gLfHPy93EpyUeg4BGWYkMMnvdiH52A9pm1pBDQiEeVGEi2dqcHwRE",
  "key19": "55iX9PdwUYQuXNJJCgZix3BGKa2ACE5sx4RU98giRRhKZ4u2CqbLHWwJByWuEdJ3BrwEkDVDKcQM2LEtxuNqrGpb",
  "key20": "4tmsZXtkZiHxgsb6qckmcnyD8NfziecdXTMVhmdwBxfWRavqqGjrX8xBR7zG5Q82Ch4xjhgh9ezaeuSU169DkBQ1",
  "key21": "5tuKYkSVZYBNJkXXruhjSeGEJEbj4g82SL7VZsAZHPinC4VRHTyKuK9k2CeQ4FNVCpvQsTJ3Yy7zQHaNCEhn6dw1",
  "key22": "22n4XAaALNPz9KPQX5Rcvkx2dNSH8eGLYwT5EqpS2awb8uYxSNeWdbgVq8GFDwJEBiLmty1oaSvAs9qoPs8DmV24",
  "key23": "4cEJmajjpU68RSwpcupnYz67kCPqBjNx892rt7qtY2EFQYFpaGrnwPtc4zRr6u4441NYPD3CbudCQ3sNERTKys3X",
  "key24": "2rUvEdMse2LtEGwCNNCTJ1g4hqHybTCLeKC5GYHLYBZ8XsRbij9CvGrGhQrJum9TSNfTQFiGTArZ7cZnMcvCFChN",
  "key25": "3n5ijaW1x6TT8uouY4tnsMQzw7FkAQq2rTrDSH7zUvbTT6ofVY45jbir7mt2X4F7rXKeCRuzjVtP18qm2aEKRUiH",
  "key26": "2EkCyeppcNXbvF5wH1u8Cq4wcJyZG2HciCF3Roa69nDuo7YjwZ17JHi88j4RUYDxaawFVneEEDaFiHwn1fynFBwN",
  "key27": "3y3UsgYqSh2e6cGw4b51k3NW88qx5bEg9zXJsYmYEmw2wyCfv4fHaDD32yKMi6Ph54U669PhxwnKiXSBgyoZK5D7",
  "key28": "5C5djehuMsroRpuiXNfUddpgrMz2eDMrh6gsYUxwJv5taAji7X7HXBr3BtnNvoEaXbsLycDojv14LqsQPAXRpsQZ",
  "key29": "5cfwPVsifezSFujV3X4LZJxCwRnNWB3Y4EBJX8AvGFK2sGZVVNz166TY8yZ63dABHTMxh111rVmMKykSYthSZmTe",
  "key30": "2rah4Y1p1hNGGAPmCZeAfxyc21UD5TDxYzmGM4UE9AC4XiEuGxQLCAa66ufkpiAhrBNvPX3xa1XKb6hGSkDCLUB"
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
