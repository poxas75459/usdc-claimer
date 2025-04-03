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
    "UsCT9JWfYopJDnygPjAhDY1qNtgkj4iy731pnH7Fj2GGYiUENArnKHAYjRidfUCmEw7ZVUY1RNKp5e9NJKoLU4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gj79MQyiLeagHHZbdHm9ZNF5LAUCNSBR5gpXi7FsLyAQtrArqsG7XNsNMaaV6SNys51QiJN1hSAKJ2GyFTZ9LcS",
  "key1": "3CSjaTnrgWa34mmUZhbxiH39RLKk3PDuMwMtc3eeu1F7N53RUWbwo7GzUuZL4ctHauy7LUF1RKJ2SMBUdD8ydkec",
  "key2": "5X3uR5FuTzvz2LSR5CQMiEbdMy6QKg4qStGSzT8cDAmPKougFvCa3fKnuhgX9SN6Vbn9eDsGvgSAbWTcbUe9uw38",
  "key3": "QVAk4LHiWaAyZ4B8mxjXxKi7feosJ67zALG8xhQt4yN48bxZDm5VcqrstfNgzch5rpBrJuGpaFhkpwdVkWMfaYg",
  "key4": "2fP39vAL9AY2wS6h9egywTQShEnCwxG7rpNwcD4teDhasiyXSaJZEB25J1aXjAyg1bVeRnzqRwGRCC4NcSsCo4XX",
  "key5": "5GQChRu8zJ5CTyQVp3aSxp7dEsrms1NJxzuoUnzj8iyhpAuyv1X26mW2DaDUA9XfdYANfKW6PVVQ3ehjbYhPhW6k",
  "key6": "62DRZhAUdAhkYxsEWgBJWojNLhFd8yi6a9AVfQzBARdmQtDK3Y8nUuSRpUaCTDkbkvjQq9Yt9JvCfFVyfpimCCHC",
  "key7": "5NCQUnUQ4VF5gZN1e4Q928mhtfvNTwtj4MEy6bArSD3pENDRycY4wkcSiWbYXLzgG4fEV7UrHL9ZgnQH5j1JN2Wr",
  "key8": "5opM1LgDtjCqYbohsAqfsuVrbwiXHzddrob4xcEnP4z4rHxjQZCSbeomvDsectVVRAVR7c8uCEKH2XWmqGFznu7S",
  "key9": "5rprWKzJeiUmiPXoVddvptizwWSh9cDppYG8TQA2GedXngn4KvaKE5bX4TxGsXAhRU2TVd5Xwv1pe5zFG2xtS9xR",
  "key10": "4SSc6eVjWySuc3ZcGbcvUgtXDJviUNjyequB3yAWrHVLJSJvKaSrsvMZnvAGexjAvEv9A28n6tNKoqLQLwC7jQ1x",
  "key11": "2C29qLS18NVMRErcFzkjJJX7eBKXY4ZBfUoAdtWeCqwSBLifhAU9ArtEbZWkzry3ufrfwsDb2cfdsM7bLU6SbpKV",
  "key12": "V4BS5bXrsz3cvH4N9WXLYUFT9Xd7udj7TzrGi4FkW8sXynHpVvJXu7VuknHiUeVU4gbUdc6HcNSUCNPAdphgHyq",
  "key13": "PzpHea5pEt93x5FTQUFRe3jQE7mPoKjmvhjUDHqNNbnajVm6WANTX1XwGaGYinAHRD3YkwseVBQcopAJUvy9RyU",
  "key14": "5fyJzJRPapW8QCmnJzKR3hYaPBqq4hBRcGFp8V4gMi2zq3b2796m2bNcXAujBriCmecy89aVSA4kKPLiAEafqBmT",
  "key15": "45VFChzypCDbkQocYLszpsQZUFarmDJGvX9xx2hp3C4zth5Z2ArVBn5eJceaf5xkbPozpLFNBag2Gj9Z665cfUaq",
  "key16": "2tktJPt9pQHsS2ZsprxfZKvJN8okyAHYa3MsTJkkyVeRNFstJXfb2mxTDsupjMD4PRvN1AdCBsVTNZq3DYniAama",
  "key17": "ZjnjAgne91g81Psj3gH9PioFpg416gqdPBKMxTMKa9hkiikdb4VRYMZniNpAFXn2o2TsUoQMmNgiX8PLij3fHLn",
  "key18": "4YuxURyGpsfm8vHcX1buMSLbHwM42kiMa4crFjng9wQPMbCsaB6uUqFG17WdZcBK9kyRKjAmu8mT3TBMKU8nVnwn",
  "key19": "64Lk8Rs5yAwDL2L9pSGqN2Xjsy7WPUQ7Gm9sBd48zJ2amg4q32Ab55RQgh4J8negb5XLHqurm3kZTcgA1jP82aAK",
  "key20": "nSQtZCsaVSqLRJmGKQWSnm4mqigGPECA2gZ3DYf5XJPatR8DMJncfHy6xYsP1fqftNXg9r1EJqvTSx1qKMpzb5t",
  "key21": "53tbFjokGjVEY9Q2bB6Zbr5xzxgpfTUBvEXPVUVrQdSUXHTWRzMMyrAbT5Svkp72pJ5egPDdug7HJQDgHTiGwEeQ",
  "key22": "2Em4fKGFdaZHt4s7wngZ5x4grnxrW25zdMp9ja56Eaqb8A2EnXdMNGQS7fm4QV5cWo1vpXwyas34YvgNVLJNCrpE",
  "key23": "2kNJQYTz8efQoikhQ7K1ZUb9bEZ4fSt8WCvmLDYkje6GGyw7Z3YsbbZNppbT2rRqayFHLaWnbERiWGjbGVBPCJ7k",
  "key24": "5744NJynLN3QD2r1A5nJWLMnbZLrd4LRb5MiiNXuwTBzwPCKZXvCxj6KXi5bsNZNE8ZTrWBmYGHSYEMHvjMRF9Dq"
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
