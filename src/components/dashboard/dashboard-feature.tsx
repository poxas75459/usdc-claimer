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
    "2EHswu2zJt2jH22WvQW99KQmwsdqDJdyxGWDZSzTxEsgLbwnpyWKmu5Kw16M9moLhR5NYrC6rTAMGBUDkCXwHoyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xbRnGqecc4dfz454Hfeh5uSvYpxy27XtnHFehWCVSHhWTWKbdKxiZbYD8h74Frdn7zbepGY17tV1636XZpsNffj",
  "key1": "eMbRcyuW8UJa2XwCtUauD4nLiecBDokphmvzGnKN51jhMmaMWBifC7SHNtUfRvX5n2cXXjmqmMmMpS1fMfEShPB",
  "key2": "56xcteDnB2CAXyqWU3kfPj1F9qrZScsruj7rxVfmfzhad1dV6H2TGZuWCwtRYnfJA9cR4fXkpcdBPxVtN3wjjVvK",
  "key3": "22rJn9dZgUQY4KM1cJrnwJra73MvttKuHgFz2e56Sdsg8LusgRieh7uVg4ZgugwdMzpVKaCgNwCezG4UNMfterEh",
  "key4": "4pf9B79TjvrSEH4rW8uQSfGX9rMp3Cnh8zCXp6JanuR48aQoYbeMZuoyZiQpP5SQqm44v4MBKk5WvGhHmzHweQZX",
  "key5": "2KNFJnFQ2gqDHWLjuxCiYtnoFTdB2ofR6hHBfsQ4aWGJ2u5RbAkViQENvXodVT1KDYhxTjbbqtaY49ynRmXUbrwE",
  "key6": "5UAZy1c6FY2ymn46Ztt9Uj5bdQCgcj8bxAYBovnNxrah4Wz77Jc3DcsRXShpBbM3NcVjhHF5fp6T5ZtaLGtH3q4s",
  "key7": "23DhZfk3D5enugzmBkxiT8YcJWdbV3RDppKXZftZon24qtasZ4w77epAQFsR4GUC2PU8BfUoxZacyLK6tG7GsTrL",
  "key8": "4ZAj4915uFLiwiKpKb1q7tR2MakJY2K9jbYF9BkKdzUHDAj6TBCuNSzgh64q2wiFEwdanCavfYKFLJSQfg97ktSA",
  "key9": "5U814wCEz5tsE4tS4tateFD26F5vMdWGPDGimFPEyticqV3afLBkp6fKVHbGdmvax1ztUhd3Q2WgsdFfkRvAtc1h",
  "key10": "uGpXnfW8AsVX55E5eRv9xy2DhSJ4kFenVeMY8v21JeQ2t8Nz7whpnjgHDXFkaLTD7p6jJYuWjFM8CvKbUAimzdf",
  "key11": "5QkjCmg3o4Uy21hnFsm4T9vicm11Q4XazBz4wjRmNHiL8v5dGSN9bEFo4upFfAAYkCnXzo5h3WpQYJqxdBHiWAVs",
  "key12": "2Yx7gJ1977WbzGjQungcMBpQ5BvW2ascSidVoLp7TcjvVkgFQNGd1VyLxpQef8DviX9ZMZTgBoyxYykFWmn3xYmQ",
  "key13": "3p1z12AgbtCdcQZ3FdWjNsVyE43CdJFEKu7STgC4Drc1AAFAY31wHbcd1RF95Qn9RDXAk2s7HcuS9UG88xaRVnaG",
  "key14": "3FM5PgTLVaHkZAccGyNiGC26gC352yiyb5Crv4NSbxLm6ef8o4B2dMe7Dcm4CqfwnpXMGopt2TiT5tCLExgcVnDX",
  "key15": "Cewe3FEL6W6Vbau5TBDxg5TaiaZzwdUAmxBPnhUiSdXF9qkptA5oMe8LCEPmWwDB8R2kHtovqpMkXSNS4NeHJdR",
  "key16": "3gAaFBqnvrDeAY9M4V7NuQ9Nw2vJcfMi24icZU1UMshC6y1SyJqC8gLi8wPyU8m7ENbAetz9vM59sCazwWTFf2JZ",
  "key17": "38yp1coo5maAzHrEx72UiB3seWN7AEMu93L6UUomx6pJHrGkuUVwSfGoVv9pGKZg4iRJqV1qekG9nLXNEvucEng5",
  "key18": "DWtGFmksDaScFKmL7vmfryquSXR83h3HRoezfhxWm93Qe1j3ANKXgpu6Zgentmnz9ig38uiPxTaq29HS3nbmx9R",
  "key19": "4UNKbVLmf67nEPeRRN1bVZriAkg7hDALvpv7Q3W7VHG54cddUMnVhHKMQ7XTyxWYEwPxaFbN7faoSiuq67JBZzVU",
  "key20": "4jRXpsKmYiSAUDiMhm4nBXhTYaEmVqVxtUFt7p1UjZC8fMy4kYhCHS6FGFKAktwnE5MQNqEo9o2ScExszUBPS2Fm",
  "key21": "4SSZUmP6huUTr3m1SRpWud8s1suA5wecVnZmeRc3qxMNSzncX3r6YRYSzwUnh5QJLvAx1tcYCJUy8KDD7MoDenH8",
  "key22": "3PvTMgQm8sUDYw4kjqm1qwjE7n372RU3P5Vh5yMTqbVrvyodTCrFbjYKgre9wKdPWXmGkmcCwY9QwHT8o5b4nE1Z",
  "key23": "3FJJU6oyqaiHci7ys7JvCEiHzSYRMSwSmKy8ssm1sE2mAroU65xtobQ5HavLRFyxN9ERzHactiT2TUFgRcPJF69f",
  "key24": "54d23sdKoqwRpoC3AvttwS3qJ6Kk27wAVppShXG9KbNNa8v889gQTbM2iXTAYbRhH9Sp6RBKrxucYu9HUwiZ1GpF",
  "key25": "3g6vLxG5pePzCoqCUVNFyeoSM6KZ2HjMUegt2bKHyh3UFzh6rxH3fuhmkKsGLEKhfSmXqv4sFNE4ckg7HFsW5nGb",
  "key26": "4D5HmmMr4CLBGXbzT5wVj3jhsT7FAbVL8xuDyLiUGLMA1kU4vJD8PcoYjiGM7qQygzFM7sghkmhHKFBnfo9sGApM",
  "key27": "4UUaKfhQq3hseXptCsWTSN4KH8GidDV1769sRVqZoXxm4LRhPMysyK6jvypaVyCgdChVEwdjypFSi64Db5Me1p93",
  "key28": "2owGsKdZkps4WT2edEz9c5DutGWYgZGJNLagK14QdMntzVzNEP14eBujuzRKb7owptoy4dbSPjEwqoV94FL2dDzK",
  "key29": "9dQE11RhczixzkjPj2ezWmK6ixCKtjpycBUkWsJHd2CYZQiuQd3JpawadjDZrpnrFutoNeuCRr6SzRik3htSunJ",
  "key30": "3pCRfWgaubJwm1bNBCvEkEcGtSLZX6CXNQXTTSLqQwrwk9AcftQzkyvwxXLHmH9FMkreciLdD11ghUWzBpkh5Geg",
  "key31": "KdqUUso4CWBrpTPTRAmQ6t7PjyZ6p1DNZ3t9xNyTRqDrqQaHaQEgdFp8zVr4HQLiEFGwHz4NQD4UAGAEmkd56Vh",
  "key32": "24wqXEb8EhZX7VmpjVtmAnc1JcbCNF2qrnFDqFgSXTYMAEZh2sAPRwGhig3yb3eWvgVDY9WpvMSuHriDY2NFauMr",
  "key33": "53yDvUP1j46hmbmDTs6SehMzugnLikudjmZtKHn37kDCt8iwh77iJZjaKZ2htjAamEpCH8sosXzrSfgCZMvapyDM",
  "key34": "3noEhmJTNn18VSVwGyGhdVekSfQuHmsi96WVAPmtJdZT5rCf3kNYry9ngtUu5T1bNwc4jLHsKHCzy97MxTSZjRLe",
  "key35": "4YjR5Tg1zXqgP8PPhgZtPFcZmgZmV5LKf5iymudUWzLH4ExNrNyte6kpfZGxLU18HscBDAfLZM6u2Wg2Y9GSKQut",
  "key36": "5tLTZp4JaM2E45FgS6mL3gxNQw26YNsppsJqLqaMreWu1YaQsgjZbkSBumRUcAGciEpcZnwfaXiryWrT117xkkd7",
  "key37": "3YfYtaqF2n5diHeqSdEf8rE1Pm4ndRtt61RoDD5urcDXx9mNg6tQ7MUXJgX36wZSGPTpbpGHUvyJuik4x65yBjx9"
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
