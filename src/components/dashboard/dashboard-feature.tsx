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
    "5WBzn15D5TXTwK4YX67so8Dx8Suat7swGeUUn4daEs3mEXdpVRRTyKMSnq2sDbkyGmbqRB6pmtmR4Drv9kyPn2v9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uTfwjLf3k8dprVBT1FfoW2ScwMxrKw7ayxh6484rEHS4bNabTTvCEXA3bfvSWLsC7TMoBvp6wY2EpbRmzqBH4mz",
  "key1": "3P6Ueh3Bi5fhRK4mKJaw8qCsShKR9dNxtnAQZHGpXEG3NZ8w7m3ZgiRu4WVCTsdBBKNeqoVdcvmRpWNY69H8pPGj",
  "key2": "2XMKuF1FsKm7R2Pof82rCYYXz9pej4ajwPPtRCqeZdy1omsRGGXqqRcVcUdQ53T1Gcs8mLR94RwksA5DxxYGAJ6a",
  "key3": "4QXVv9HnJLDUU6hERUr9q37PxQiYELd4uknWCUEnbvdFpAmjAuZhyMn3iyoGyzRtiG1jP74MHw4b5ph7NiZcGySn",
  "key4": "4yuqbbjCiB99eqEnKiYDcLVrFGcJJBryqvBurxyS5iNt41eurk2toAfwfAD1mBgcBDUSLTe78pJJ35Bh3axfgsqv",
  "key5": "2DeBc85tNJpo6SEP5HhDr31oZ51r3wqd3w8N81WGShVyj7FV1SmWLufHH5mDCqCAu16cUremnjvDSKiE7JVhqEGr",
  "key6": "3QrSV6fw4gT6dzVkr5L9JGCcCb8WrqkXRyAGo8kh5UWWKuk9AqdCsv6sX2S8vb9hVJvJuiRJVRhmwCGX4hkXASiD",
  "key7": "5dQL55qzFpThpE7Je3s73dAFrM54heX4EUJ8QS8TGFKjPNy4rvY9Ae2LYkGw9TM4w9UqNS65hAWkX6w5xyGYr9pz",
  "key8": "4x6g2nKSMkwBMxu6GBiWJD8SF2mFJqkt4tPy1cdPccD3KifhL9Zrr7i1jf8wUTvTdrtQEK81UKyfP7bcn811aGRY",
  "key9": "5AH9WZfvkih7EAREtxnWF5BJYukwiyXNnRnCLpB5JdXvFPTfL7hQVmUU531AspF6exaQ4vQeNnPtwMCsj5ZwSBS5",
  "key10": "5DUWWMfJuBLbMJjsLRicgyGvbVDBmZkZZ7kedw51KVsMkBViUtXhyY6oesMpRTijVFmcRcn7QsLm2wJ3xYim2Un1",
  "key11": "4bVaPBeX8EbaRT6ZCS9YUDYR2U2MSG3b6Vg3483rxQ89cMTYE6uqVeP3rQMG5232BSNpTcEdXVB5PbNmhjv6yYU2",
  "key12": "5hxCfwT3JN13xJsbNPkpAXSFa1tCxYnAbPESvedceiyp8ZjCdShE7uq4YDPZ7ya3ugCqocntWZwGzbRv9Rjdx8fG",
  "key13": "42J6mrsc4Hb1mSQvtGEkdm1g36R8ktuJnDN2wyibdiLy8JwH2fc9dbuTNYsJqeKCirqzhj5GKP9rZuaePCVmPnJQ",
  "key14": "4jGYfYrXRDxpTAMR3Ld7WBfmj6RtTxzvaSQ4W24s46wabtUbyRnJrXqosoJsz6zymtoKJpMoFx7xJYqFS2Zm4aTm",
  "key15": "5sebEEcgaLpiQaV7JC5wUeWmZcMi88KRp2DzUhPkEKE6CMXZM5o5tzWFoWy6XUt1RnyLHREBzUPgCaqMFQMYwjH3",
  "key16": "5KaQHdQ7BudM769YS7sKy977xr2AvZLNRwK6KGBhKuZ5Si1185Kto9P9ji64MT6W3Q7p6927MimP5cMEEyCGs7My",
  "key17": "5ob4TwkZQcikL8sCcqf4SxyV1VWecST2podGwpjmscDnE7z6NdRpPzvKFoRgq5aA5ph7eBqNE5RrBRzMkhne3XkV",
  "key18": "nov5QsMNnrfxd2cihNDuPmQbN7GCvHXhm5zmMU7vJ5jwS5GjQ6V3YkV6XgAwS3ob2N3PbKymcP5kAfRTpxDj2Rm",
  "key19": "2Z3hjXyVAx5fT8H9X7YdDGcAyHxqheViLwzmKLdGeRz81PSqsBgjDNij6hgZ1KX2Rns9HuCapDAPttVytJJqRF5n",
  "key20": "5SRim5pW9tkFJnoNTLLNNP7t2f98EcjpicWCMigTL7Rt4V1XG4SV93SPpCYNwtN8hmUvQDDJXvsnERvTQT9WeTA",
  "key21": "3nRQMy7bgnqKh9KgMxmx4ToYcm3cA8AP6E31GmGEo9rn9XyNCKjcpF4zLrHoZGNh3JWVq9x3E5SNW7WCY6kDtNvN",
  "key22": "28B1pRLxQgrjbmV3rgWmaDdFrq6cgmmFis5ZP46srM1GSwwxjPNDHWGu8ND4W9rcAn3LxQkoyXRJuXBPbgXVYhqR",
  "key23": "3s8FxdvCDeoUC4AViwtM7Cwh2dQxonq6w87DHVc1TxfohqG9i1oJRzm97ubhJfVQqiXXbJZNAYDLRxPCxjz9HHib",
  "key24": "4KnLPPbiU6A3eHFbEJp5tMLrVD1HeHXqjJT786P9iHqzt1yiLA2tvq4mjK1JLAqKMC2D2UpDPLMYJ59FawQoSZ5c",
  "key25": "5CNePPrcxEusR2oCbF9Pw8ktnvvb5FxVsrNrTCNHBtrewJhnbJmFSXo4tNnPMvLYuqELDiyFPMasP4Xx1iD2MuNR",
  "key26": "423QdPJWwy3N52r37SvYcYmX9MU9QynMB1MoXqe62bLF8iS4CuYrTnjG6WDftouwrgiaaNzJyivF7Zj4rHraKjsx",
  "key27": "22ZVk7YSHifnQwfpdypHtr4BdAMdNzfq9vrGNrg33Ss2cfN5ZcmZecf48vNif9H2d7okiGgmCV6tUyDfH3zMyLC8"
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
