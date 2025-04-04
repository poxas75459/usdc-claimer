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
    "5tnXZiJZye3cVsvzEHZECkLsfFSi1JWrXoSPYvP4C66moTJKU3eqEdaz233R31uhftXGWahK59Lszd64MEVsErFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aVMYqMjgwBhAzUSSnwsKF31crEjLtDvJsVHRCqTaWPx3Jp12bbE4a9RGPSZtVS55emmJkQvYoERoEZRUksWXodv",
  "key1": "2TXx6tJo4kb39cuoaZqWzCCqL7nHQ7GpgHMU89VGQYVstt8gN4N4k16GvVmtzqvyR1ifjJYW9u4fVJ4oyKbPU9qA",
  "key2": "62k8E11zM63iAnEUxQq7tfKAqwv9SC3VyGSTFxApaJcnGZyARFufpygpekeyMDuF91FbuKoWsipPz5ykVhj3rgm2",
  "key3": "5p1VTA6er3gn9DSKoUk68ziEAEqMwbpDHyYeApkWKjvwQoPTy4H5Fu6SmcHc1TDAhwfnCS6pFnVnNfR1JqpiMAdW",
  "key4": "59s3PGMYEdDoHT3zaa7nEQob9vXmX3nWbaU93oraZRkDS5RCH6x2jMAdod6iW5oFQ5Ab8aco7izTabGwNPRGNnqY",
  "key5": "2jnSinmhte2kjbtPLHEkwS3DSQU4P7rZyaDzdnQTEJHeoDP7C7DwMZ6efy6qNAsz52NfQwK4RKgickieGo2F2hYo",
  "key6": "36viNv4oSdZ5amNEMY7XdHuLkqcjueVci7U7F8HumS6SRZTgtkVuexmf2MkxniYMYsSP6J6A1WmNgHTNrpeZJuPp",
  "key7": "2be1uaXPw38wUrqfR4ebDjx2XFhPhFBhSHUmpTz9LQZAfu9rYaWhno9QjUHaAXbMYyXLHxshqxNbJfXAeFnfpdGk",
  "key8": "3Y5et5LCFkbwnf6AmLhKB85QKb64NPGJJSjzm34zymiKMYkSMb47NzjbLRmwFH3vvuUe8vYJQ63oT1J5p8sS84Vv",
  "key9": "5qNx2WhmwnYA8MMrMZUxyW3hgknnqfdWX2ZENURKu9oDgpiRcXnbwKiYuhM3bEqKrMKvxtmBbyH6oCfTz6cNZbXs",
  "key10": "2QYMreJWngXiGZh7gE47Nutae5FMS8MumgbXkrk7ohXWbTQfu7AgVybowggtHR1SGX5dxbHJ31QWTy5qyNiomr3T",
  "key11": "3QPPQm3HsDV4ZjtndTuM4J2NYkiGvuXNoV2aMhtV7Ny3qSR8HiGbaWXKyMtaeaW13tKcQQobLBLJ9GqPHjaESHkz",
  "key12": "uehuDNfhUMBBJJWw8VxsL3AGP5rafpCzMzwwTj2efXLbzWD5QzkdqPwUYinNYGu7ZmKKLztJDWTh4N1dnrjTk2r",
  "key13": "3nMC3cryEhf9ZKRRGxFFqtwwEVnjSoUTxkzswQZbeDFKq5jym1wNBasyMysSPVZuk9432WdNbhjHsAgS9Kz5R2rG",
  "key14": "3YvAofQkhLy6dcPiYGQAbi7dSDYkRAwLhJ8qNMgRXY7rXfdSmvRUSADJFW2vHZT4veZbaN3B7pPh3i1JE8A4gzBn",
  "key15": "3XVGqTJsSnXjxPoRWDyzg7nJt4uQEunzGeAfsnJKidgYxxLoet9Zq9aVr8vgZKYt9zAd5dJvCaCntCRxHPJw5UgY",
  "key16": "4TG8oCkrYjDKrQPBXsEmxouXZxNfZucwsuPUsbVy3UFKzBuipNsThZCnBtMaQaFY3ifiAveAKhS7Cowsb2tGhFc2",
  "key17": "3gSD8WadnPYpB2M8No883eeZdB22dRo6HwtL3kXPcGtY4Gsn1QwnhWUH5RS7fGZa7Md1QyzP1K7rVHEb3WyoCN3G",
  "key18": "CD3e6pZ9DDw5oBJVYzb5EVC4y8PdhkzcKn9q6Wc62qmvgRq5VgTGXJmXcnVWkCXMBGLz42xEE3UKAR2TnKzxcop",
  "key19": "2tocXFPgzWnZYzgBYtLbHWAXcKmRt1UsQecCqBfKTVNn9QTWzXXRNYAboQnUa1RnruWs5TukDB2uuwhkxUNKm5kt",
  "key20": "4sWpqLyK1RroQ22ZnScZ8hcsEyohPbFPt2Zk35TY9MkZWB5iYHD9fkrA6euxLhrj9FLk6UpTEiZVnfk9c2jnkehZ",
  "key21": "3cmZobFQzeZQDXCrFWoiQbVNLiLZJJHdkDWw1Bb71fkcNVGM2nXbudWVL9wJ72bYE5C6SpBRzy4zrsZLMxU7azbG",
  "key22": "BxygVYwGR5afxQFdQD98BMSK8ugtS3qfmU8GmK4a7VmoaDco3A7Z5CRxzsmzJBBMYAhdTUgw8MGmMNXamtFDBSN",
  "key23": "2zRZ2Co3AUTcqXpx24qQK1sS5ao1DXFAwb2aRj9XXptt9yydGSk4JVRfxr4zLMsm45dZRs2rYVAVvxR4W3E4FqWs",
  "key24": "5N3aPEHaV7UF72iP54zENL89aT9F6N1oDbXyPoehLvjhhb6B52QRRJFDEGFK91fdCmbNEQYUac5SNjhPJwpB1Ek1",
  "key25": "2JK9kAJudDDUoQexUwsar6JeN9bhWLKcTvJT8qac5cPUvPAJFEAzBFWZwcxp9r1r9XEeQCNngWvGXSP2GjU1Nbt5",
  "key26": "3Tvc4bMMEwhJFDCVfVVhnaxM6BXW5SknrhvHMs6i1M5BuYSmgJTvQkPS8ygMyzQnwa2cXMr9qFdsq4wRdaGBgTsC",
  "key27": "32dUbhFUdSKR5PfeUxgBXEGAxb6GDbqh15CZtMztmAC3Tek5e3GCCoVXg2f1R2uWH7ESDFgiDGVpoAUvhmR1XbVq",
  "key28": "58WpPEJ7VVgc83HUFkmWNEdXCBknTiGLKrTpR99WhkJj67EJMurpfXYLgacDYset5Wn1v8HJVJcHzJZb6t8WYnYH",
  "key29": "5Uewb3zoHjy2HUukJVKzdVgWYnQX4RsFUzoCpERvEDNdSZg6tU3yER36qJV9w47pNRahAWPxVbZ7nkkfBDqAJqVS",
  "key30": "Fw8UfCmw15LL9h4gmEmaKNaywdm6qfnReUp5iE4wMJUcjMdnmDbmqNGK7n5ztaSKiMGFoNmDEHw1cuok7tvt8vZ",
  "key31": "viuC91wy8yjwHUCZu97XKVeM8VBeFQuBxfwQojRqpLEEgCk7k4dCcCMCphFUeL527BUa4a8JMtgCRgsWn4zprV8",
  "key32": "4j7zbrCYytgVqLEx7PVv2kSwpWRhyA1RiWGV1scpbwMaC5d7CxASUGmbkFfXakBw4qAeUGbQdnTYDNkquLeScKSK",
  "key33": "5ix51sJgZcgb2b1jfSdDwL8wFgekUFrsh1n4LC44774gf38EuBikRfnsyuy1MzeM1XmMoWkRi3eV6UvcT7WNct4k",
  "key34": "3hksXTjy2pkfcCEGXjoSKBDKoyZS8Q2Wr9JZL9SCt2DX7wsBdJkJWUPrSU5Aj4rvj7PdCVgUTdFnvWrDUkWACWMv",
  "key35": "KG7Qvm3hBjWEsic2v2Y333cRWRC8yvjWzmmfuU3nHmr4T8zKEoaK6YK3qdv4oRccfaYKVAPSx7357qSEBAaEFiF",
  "key36": "brbHf8XtAcJFJ8ooEikoCdGsgmUydufCW69vosTJuQuMVs6jXEncdszgr1E3JRo9jycXR6J8jn6Z5KfNVrjFZAq"
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
