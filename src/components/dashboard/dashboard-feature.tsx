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
    "2vagpsqguPNHVcJnfLbfnrfbSgcU3bjaP3zHEsXKUKwVpjM9EJkip2LDKbNRy7wKrQjab44pXSLGFR5CuzoM9Br7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eLkKgYAs1A7qFLPRKhYbsAa95hoqR7cyBZMRWzREh99pCN2VhUH4zKVZCagvHkqWjVmRWw8YpCFsJ7s22RRKeWq",
  "key1": "2E6D7pw7T926LNbAMZ39BCSoDD8istUK8SsrDer4e8fcWy655Zc3UxC5TRdo5fVezWnGX7PCxUMG76rVvWo18bmh",
  "key2": "rdFa7tLrpsWUwhP274wJdrNvLJUDBBeezGDvbGRPNsJcRUZCCxj5tTzPSKsGAqAPEa7Vmqm9rRWEKxoGvKKLRMy",
  "key3": "3o6ePCs5Qiajw7xchRkCxtfsse7qXxKE5Ho4VCAbTk5t72MTjMQ6Fg31AYVrdjqbeVALDwxCpnDMAkCG2xNTCFX",
  "key4": "66Fv9uy2zenkbEsR1AUBkmt9U6h3ZhEBFKBa7kJGr9MVadzVxPCEJhdLdN4Q9pxCMB4zT5SYvMVsiBH3jC2kR3Yr",
  "key5": "5WDfN8Eyerf3aDkhd3x2gMG5xzbj1GSCrcufrNNXQu1KNZaFwefBjSo7M2xTt4Z5T6gTSvAgJDax6oMuZnNXML37",
  "key6": "4whdys73QLMJreQoTg3R9EKx3dGtjYxrBUgdk4q9T2DYMufkshohxNvxXwUijVwb3nkPgukuAsekZSyyuJ5DQjk7",
  "key7": "8xZBr1f9Jy75bCnMvC9tZSFjJXgHhtYqaQ3qiteqHopij969X1BnwEKKxaVc6JXMyRd8hDFoUM5oE2G6q9pHPkw",
  "key8": "3MGxv531fqXWWkh6mP1WDX3m4DMU3RbqYuAQ1BZmBSSo1GrAGxsitutv7sBzAturprP6b9Q7qZiMa7SteBr6uJSX",
  "key9": "65YKtkucsVDazG6fmcNP82u9ysLMUAhC2wu8p5QnJsDQYbi6SAaDEKbSpSPLkw4CHm9K3nfYMnvfKvdB2byk6da2",
  "key10": "ymmFBDjceyAazJxCAWgL6kn2sV4XrCj88NXCpFZXfDJ4uLe746cFdLAgeLvyX6Q7tGop7sKbteptSQmnmdrzeYM",
  "key11": "2RYouyAcRfcakTozyHP6oSZzrrSkDRVNLYphM8He6PGJAXNw2cvXFLkgeQ8uwPBCzaaD2ZN18HfyWq7xh48wg8rB",
  "key12": "2cAdf8dLogbmtBW4MxNbUfqNiTsBtNc7mtsdMBJJeKJ4evZUB8yzPy7iEtDs1KqiqAMkVUBUhH1WYCQ2PsfvuvPP",
  "key13": "2sbNJxFTxnJcifuyFA6VG9CK7sogDaftZ7vHfnFxAzaiqGg5fBocKqH4M1usgRpz5QQ2oBP1XXW1XwcYroz8wLHJ",
  "key14": "sEx1UgiG8qxxRsMjhr9MLgZcuLsSkvvCrgjMmVJYCFTdjkVfeLJwKLYrQ5LVvkYPDyDpeKgxbpuenjydK9aBDTz",
  "key15": "GyJzDbZzaEuNCJKqeRtt43dkkQdH8LR811esivZ5xLrN811F2TzhMzTapgFUo8MHQj8YMf55dDRcparwj4uisxX",
  "key16": "2cQzixxNqwMUZjyrcvbzxVCumRUHiAFuPCQDEE37ov6t2tTdsqhkSsryDEufdhBYCd6VMnDAppUGLHYCveDYuwVP",
  "key17": "5dN6Famf3ViQumZxLKUnMT3qUGwfRfh7zxbTSPLHvjPY2mA61GFAK6deA6oe8qr9Zkvm9asDx6usq15fkw7hb3ot",
  "key18": "NPeVfCfSfNL5k6dBoNe3tBE5x8DnuWPM7kE2FemcxHbhADX8WphouxQbKih9T1CCcm52SEgXVoq5FyaUQHhV6U8",
  "key19": "4nKzBg7gJaAoZenBtgS2haTspwaPjcMTPCUddLMNMnY2b9pq7gA2PUPkkPK8S1TQxshyNpeXuQUQ6yqgXjV5ZWmd",
  "key20": "22tnaYxXubz5gbWFWWAAvbxvPE85FS1vJHdXySTjC33wJavxW9Hpfnx42B2iXFChPbFWxbsVzcCrnv5QZJ4rxyDu",
  "key21": "fVHrRpyiPk1GRD9UsdgjajxNeeF2EJMxPinnXB5b1kG71YAcNFVVbmVymc3YGZiffV1Kf1CfKfSbZr72NcT1PDb",
  "key22": "KZSrdjohKmsJym5R7moi1itY6NTWhEY1BsAYeK2aURZBfguZKBQfJEMEqraEXRQ97hmmbskGqX9SifXUwscw478",
  "key23": "2ZCJJju2opmebc8ptUQsCJfuDDbhBGciocjAqE4QYt6Dux4pbDebZA4gXRnevBSeJ91gEVTP2pTrenhj5WMBxLxq",
  "key24": "4Q8nFLJ6QfoKgrMYnVRRaMDnXXjftFXbxahrFvmfZcrZx3P9s55PYtnsBwuANMy1KCRBdN16x6c4wqxQzXFRGQbe",
  "key25": "4LEQ6gFyTCqteL2uyWeQzxddDayfTnuwnttXrPAUr58x446rfNteLYRDwzCxAMe99hw4JhnwpppQKUXvLvnSg1X5",
  "key26": "2CBSS8Gc9GXszUvAk7kpr16URv2YT83HtJGLcA6jVqyVYumQJi9fxGe6UE12aKsPQAU5kbfP4BRLVJpwHcJZJedr",
  "key27": "3MXUYnYeMH2sxhhoy27yHtnyXEdzHZeEDAXT4ZCGRFC4r9RYMQHcmhBhLVDnnNVLyiTogj7rvVPiJhpKWCHUA9fa",
  "key28": "4EjxkMvFToB56XPbagxqV6uwXZb7LyDHS9EayNaeipeuicwc5TdpM8QJtYumedevZ2Fw17fu3kquzkSu48yZNH1e",
  "key29": "2GweeCo4XTdjgMdYeKYzeGYGB8fcH6LgXFBv8i12HhEpzJebQbnq8oCFndsuZ7pcxBkkNbFqvtEryFidb7owV2kF"
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
