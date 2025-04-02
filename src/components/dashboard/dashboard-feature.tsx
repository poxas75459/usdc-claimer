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
    "5S1VZPYupaXoyh9L7JyoY5EDDwJ1C1MbXDYfih5uFAsvzdj2LJDNobzocuzXVB2nFFhsHapT42DN215WBT89K5YX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CFFceGToBij9PvYQZ3WESiFxTGio3Ty81tWaZazqASmEu1FsU2r3JDDWiKHvrNwmrAtYAwYjZ955AV2G3S3YN3j",
  "key1": "2Byqdf9Mbdbgu9Qk1GptpQMLD5TAZFFKnPEdDm983QwQoMuGFtdEwvRc1nGpM37uqwndqwbHHJHucYTBHRBAqeWX",
  "key2": "3b9ZmDY5qKwdNJvLsDcdcRR4dU3xEJedmQeqpJxexyeVz7ZP4SqRcNwN9tg67xDXWSTXCq9sdsTXnCnxx9ExsFwx",
  "key3": "rNspDDm4baSCHZQQdWAAJDtKyduNhgjnCMWv7QRZQnZxxUncycyPLFAvgcv4Bo7BPNRTixhGpMxPmwCToVXSXYq",
  "key4": "5mW5qgtzeEmEXCnU9f6oQ5kvPYNZfDHvMDrkEtRJj9uh3DaP4nXnEU8aUSewfm8eymqyuxeJcpwh9K5Bko9pi4EC",
  "key5": "3RkLN2dRUzp7RYFhME6EoYC33darvomYPXU399Dogxi64cUH7wbDBeQDgp1Vp3Kyn43CsW62H9H2Djeo1KKdDZbV",
  "key6": "FuUimF7qbm7TgVZLtN7pi1xF6PnQEzdiPXAFw36QmDYMAawTQQr1vGF3xhGmEVVL7xJa7isGjU5hGP1CJqbPELy",
  "key7": "4hcYXGdo18d2CqXE4hKgjrxq4QncWzvxBUdmeFzemVNDd6uZgENjNRQL5ZkjF7FeTmccAgNNJyYu4LyEjtXCN8Ji",
  "key8": "UhqKRmL8F38uhU7vaMQ3sp7GHHweXS1CBiecMhvqNUxBParJAxF9o6d2oaf7gARoSF5ckB18HVCVsH62R5eRmMK",
  "key9": "2FUDwMZojPq6BDpCdxLihxqmk6FjsuNuKNXX86hxs61TUsJ6Jx5HbF4jfiRdHF6KXosQfbsRfAPV9QPRFP4js9fq",
  "key10": "4m7LPCagJwGwHk9dHdPDctUkYmWYCJgwz7QbvstoKoHn2Jd2Kt2EKSpUFwn5XMxquA8vFBEHBJwnD1jue656f7fU",
  "key11": "2gaE7PNzk8FWvkY9SNJm7b8ao5nLD3nAG2JqQvm7Kf7oDdrnYgsZFwb1zbsJBjSmi6gAaPDdzPZ3QnDS7UtRQAma",
  "key12": "51KXFmP3GqpixkC2JAf4fe6HdEYKr9nz3SqA2xCAajtoWGn1VKHVY59N36ujGmuPYV71ZfQZBGuuWSYK2s85eYsq",
  "key13": "5xoYDV8thmMZzdJPCj7GQrCzHBCNELsaTq36PQb8gyWeboXUVAt8AkohXvpgDv2CbxRLeMvhXiABjrtB3aMCzK5g",
  "key14": "4AF4aXJq47iboKRxKPqUcjAtEvRS2Z6y3MHwhJdkMZVNttELAafDxyJy6ZSbfcNXyTSJHPZxuB7CArPSQsnB8FML",
  "key15": "QH6kEnGdWWtMrXk6ySbh5uhRxCtHCi4wZjx8fGvRMKtQJHEFFSe852ZV6djpoqfQCvEq2NS1kEdRdLXLg8fzu5V",
  "key16": "2hkieBBav8YKR9s4jHWjdEJo2QngVX2TKB8bE3Xk9BDiUuc6PwtLcJgx1J5mkbDeGJ55F1sjRD2duBFfA2UBkDuC",
  "key17": "4XRtNM6cXxKSq54fYrHT24QFcnK8MisRt35hCR1QyFmGPqvmXvLkJgKjQghxH6RLHYjeGbddEBK92dCaytenEjxM",
  "key18": "GaeGVCQqnkxtEam3iDNERr3aUciDvuX9jTvZRdfoKLbJvW4ePb7hJV6JMaTT7TkAyLaWnBtyM2ikqDgCN5xxsAn",
  "key19": "5Gnzw6FsiDygieeV4ZmGKBXDXbNrbxHvd1jtBAqjEGZwNHGNmbCCBae9aFS8PVbztDfQ9ccfR6xWVmUPurNH3tmb",
  "key20": "2o8bBB8WapESxAh7U1CdtKw1KBafQinnS9JaBMajqmAXiN3ZjsRT2w3ETkU61HDAPVffwkSeMgAJfFchvSJQNjB7",
  "key21": "5MkDcabjwjkj9QC544iS7PrHWppXafiKzs5EMLKdXUrXBp4LmZsVCXr9AhdYyJP8oL83Fx6gNEe5owCyUt3uN4Qn",
  "key22": "5iz8SeqPjwDjsh6cPUFUmdaDjJo83E8h9sbgpEKU5krXPojdF4qjVYtYXsh4F2kxHdeEeDBaVEaRzL6CcH3q8a25",
  "key23": "RqWrXkFdDBK2qcL8jhXXpaUnXb6dDUWgYTGxfaTwwEFAswsLbGSBe2vGVr4pnpMbcHohUJ5D8gttbC6iUNbi4kj",
  "key24": "5FRBTUcUSuKWDNggyoSFagfGzmVL8Q19XjGrzGj2QMdSbbFMT6xrFeAaDQBUCtpRezCjk4weZmCBgLD3QakMxxGh",
  "key25": "gCUYgPiC9WLgb2Z5vaQSs9xiKZMtvaKdMRkuRfiregrtjgeRyJhKiPswkBHk579rfMPQsg32KD4YwUsPZHeMcDq",
  "key26": "F6u6DhzrKHpHakmzaDttNzgbSvGbfhzryAjS9ZjxJ6jxkAToq3o3x9m8SWSuEPuJco5AT1rwALFjnJfvsRDbyA4",
  "key27": "ErP8E9B9oXzBokmukShzZkHTwRvTiWcvbVZ4CD7g5bEwWwvhPbNe8o4wy4t2NHVAHYLBB4VGPPdnqmV9iBBRSDo",
  "key28": "2S15FbV1c2YNnKkggGiQMg4UuahvbZos7pjkwxbZuYHAQPbG7eeeK2MMUaTnZKq4t9Jn7sqitHoh363SAPjG1Za6"
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
