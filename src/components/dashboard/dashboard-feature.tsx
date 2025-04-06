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
    "5KTmyf746S4rnCid3JhkBw5jpdayxxNq5nJabYx9x1MMCH6aghgsKzeuj5rzG4Lg4VAvUkX3NPNbgx9RYtWKfqf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ynALKjfG1ZHFhxa1pN4K3fKhT9upofBVgirBEZYdVWNYcQ6X6AQCioFZCRwAhepMtYzCaoD5Jmm9qgsnpUgoZXF",
  "key1": "3EaRxCGuDYFheYcN6js3fa7DhRKwdzMLNPGVXbu25C65ypvvnGLPvpfMU7gU6kEab3MXwNvnkxZVqkJBrUBRzv8b",
  "key2": "2dET37VSwTd92TxtrxhJbn5PgvXEZHf29cQdDd6ZMvBm13yoBcdinvMTmoLHJK1rNXTK2X85GXT1ngrQnQP8pNQ7",
  "key3": "4rRd1MzCi5PVMainiKQsPS6NEAvnJkBozLWQCrrinQg4SHAWqY4Dg9Y6CqK4Zpxi6DWZxd8v6mkqK7fcVW5pXwYM",
  "key4": "3Xr4zLpjyuZwaVBESk5gGfdrmdagdUFgEDTgaBmtDoVvgWAT42TLA97buEuXXwU5dU5pqV3SihrLs3zZ1VS2um2n",
  "key5": "2S1NTMHcbmgNtB4RqB674sgTfnQB7GM9skUmB7Q1guYyBGs84DYNZYqF65KcrdJXzMC2SPvbH9RnVBr9CzV7rfSn",
  "key6": "Q883HfvzbEkMnu9ztXmVEEE5NMXhRKm1AqVDdKvTs15vvH7qd7EJigwDRtu89BeqNa8hhbFQPb8Cms8zfg4Eu1w",
  "key7": "3NUQeMVg2ZnE12fHdNmTTWBVJte5jw5wZSLaspaZHfaQrjZvyzE2VhD8T1vjG63MHknh8obrXxDGdPKesVqBpp1F",
  "key8": "4Z1177rCAEyxge4LbYrqWeThz2A8u1GxVp4CkgibSLSkaSJ9Q6iZD3xuACniqsyqXYPEYWwQBJMpMtnYQfEKrB8J",
  "key9": "264TgxMjtAw4zQhVcCMtV19EGKerQpa3AFdRhiJ8Jttx7Ei8jqPy6F5KKdLV5E3qvVSpJuy1jchzMXUvmoa6bmPE",
  "key10": "Ru8p9X4WX8zwQJSst7BPjSKLeF1gaWAMvDDhhmrtTYemiKJe5xJbzjjYFrCESEbfdVA7RQnJMjuPsPtGgK2gcHs",
  "key11": "4g8Lx9xrZCGvf917wuLLjkpyNVAbvCedD78Xj5EpudS2sxYMbZQk9gHo7ykkfSijGdNScyAzvnVWi2PdyNmh78zC",
  "key12": "4WZhiXtDhm4tXtwq8rtKPNpiSiFEX1Et9YRC4aYJ76JD5r6A7fmdb9TPU6BmBe6YPdrkFsm8keJCTWMpEXCtYZ6F",
  "key13": "ns5BhXcGHxS2yLXLkr2X2qHyBE6rWCspbP8E41doAkpeLdSKQVLgCq4ZCdgrVH5JhCXdFZvGbq1u5nowzqoKrY1",
  "key14": "5Ta3R9Y8UNyWaXPZspdSwGTbKXzUF6VMuhqEsUQ8BnuBMbukHd5CjVr7xmVqe1NevZuEFmpbzCuSMQtLNSQUDduu",
  "key15": "P9owQc4g2HQC2ejGVSp9HnLPor9eZTiPU7iXcfyyk6TjLvRh44WEBCQMWSwKJ2CNtd3QtvzbDcKNGceNRaD8CjB",
  "key16": "5HzLngH3UG54NdfCrK3jHCwWKsyR6VZc6EmZuWZ1QQJ6JkHpzLZYvvrVtQxim89YT7jko91mphNUxzxiwGPzGuh8",
  "key17": "5UeSosyjBELPRUWjwCDZJwx3Yn9t9VrKk1MzFxa4agVpu2uv51272Gk2o7H13YWDbA4jeoEWLDVHhSucU7wuawFV",
  "key18": "2sg6YkK4juDWVtpbRP7tGK2sEQMDNZKGrV12T4Cg1MoHxBtqFk1P7mdxahd6Znarp55HmojxaYoXZGTRVC3puMWN",
  "key19": "5hJWnqqQVseD9UEn9KAkT1PXTYQsndRbrwf6AjumyfppxrmvDb32g9FYtRSRhGBgc3MR41qJ58r3iaWeoRsvpAmY",
  "key20": "BJatuVwwPGBPdxSteEJocYFms6ieJeribMaUQU55MRcg2bKqT2eREra3WeBBTAtvAind8SiUc1EP7wafoWFd6Wx",
  "key21": "4fuasVvELw5VK7NBPWUaxjcvndBd3tgFFCkwp2iXVvDEmyVyDWDQdjuZ1Q3fihPN5CGB97fJnHzarzAnM6gHRKw",
  "key22": "4uv8PUry3bAzG1a4vPrXZS3oWNot19muAUbwf7UkcKccrcUCUwkiPVmppFLwt7c3XmJZmjTJSgqCUXbxLrEJ7utn",
  "key23": "2XDT4o52xdGDiSANrH3nGW9RMJGvmP6Sf9SSvBfuvpAQdWBgyJF2k9BvYDe85LYgPtNQpPNSULN8aM7HkWoqdw7i",
  "key24": "uTBNpUrKiguhx6M24vxWUNtfRUT3h8g2VzN8Aw2eh1RFKgyieUJoP5TBk3obYo5itYLDCN9JE4B3TyJkVim74eM",
  "key25": "4XULpF8uzjYYYUZpaEjnH2tFxFLubhrv3rfq9KHw7hPAWo8kxNYWU7s2aTyTofcZqdiLEDeYQtQPEUBCxDzki9Rw",
  "key26": "3tZuUbUX8MruV3gLw8wWutH5Vt8hA4iRgiqjtYTqftUCHBXNJMGy95NHGnB4q7rdrYXz1KyeRgoEJUk7pKroD5ij",
  "key27": "2N8dSQewCRLPcstC2Dz9ZEChSYdwq2Aq3HGuSkyaAe5UWcJuAnoJaHHZrUFjaXPVVgxdZVEr9P5aoQ4HaQDBMmFH",
  "key28": "tWJdY12hHYta18bJ5erMYrdD5Lt8i97xnDLadpcG2oF1G5KHV1e7JYTX9uFvNLyVGUfRza9AciKKbJVvG9gwQj2",
  "key29": "4ByHdjTPfMKxx2UNZVycvhXg5LkzHpya1pWBgHLQKwsdfpw4wpFEhoKoy3drxpbygLH1cChcBEAwQK4gdQio5MPt"
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
