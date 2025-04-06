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
    "3fEGRrFTBUn2HWpbyextCxZSRXkDWkTGXLjhdxPcpBpzS2EfuqAMediyo4ah5JEU8MHzmyzmBsE2884GzQJDpoAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "246Rf2KtwbVAJBjoCz4whzHAptV6A2NoiVcF6Unpv34nvSaguEw5B4ZiHvKAabWdVZsSQHWpEXqUeNvkKjc7nnyd",
  "key1": "SmYQGYPwy4ANEw7bdW5N2qcFs2gfEwdH9ZSfeXK2XeBSFpZv45MPvi3Z6JnWwQ9jeu8fzvheE67rNfXj3GDdGKj",
  "key2": "2EAwt9VzbBQ1a8qzzGVw6z4H9RSXCex3ZidgukRnE57ZdoSsQV85gELxYCXT7FE7rNQZHpbs6CmNs7cVTE46sGUX",
  "key3": "YkH9F5tbceQJTy4BPR2eESe74CBBsyPQNuPr2VpZwzd9yWt2Z22hZ2xRrjrzSvGzi8owii9371PWBVewtqWtWDG",
  "key4": "8YseHARk9BDu7Q2RndHJaiaKAWFmcLqAUhzgquKv8BMPTbA9vXsHj2Kmo2huu8DAWxY9caFYy3iTpnKrJa7GYwh",
  "key5": "3LqPASZdgAxYzuWW3G247FmqUyPoKb92SWJAai9cUhEuB5JW8UXviiedCy7hD1QxuSLShVGSuUXGrdQxsj95gEEp",
  "key6": "B5ztBJECbySgYkCTqqEQo8wjc2U1a6iJ7Ry1AqxwJD6dRCxk4XD6sKTjgHecexA5XycsxUT24q79AYeaj18ropv",
  "key7": "2pboSsHki8FeYVzhr4nhMfcXySbkTbzSThVXf52hgNDoqvtJ7B1frVy8Kw4ghBD8QriMAxgctvvJhfhG6eLVEZd9",
  "key8": "fusqbJQVzn7qrsnu6vpU5RAppaHZF8Ak5affe6WpE37PoQ2mWs4s4neRGTHKcq4Zqi7cAsPEvMsTX2nJhKtxdeY",
  "key9": "Rqn79dMRTyWJQxZsVHVCaYcSRGJ6MBsncXiwqtVcMrUJgnv2MCwVvqy3ZBePStnb5ap6r9Q14bNvkZdyb9F3rA5",
  "key10": "2fjyKp7i2hL5RrAu4CZX5mcypSqCbfiX2h7jLrFogKyFvKk5DE7F1jmyRtG1WKvGkYUJH9wmeuLBcwW1F94Mnz2A",
  "key11": "2f8oCjjuiDdVJrB23Y5wkWSrysqZZqLFMJ9TGSNTxqZ1K2v9FspDkFed7L7J3guBkA7GcN2V7C1USDEtssr5wHrS",
  "key12": "yR4KeaCB9fzotuCTdXB8423VaJ4qJF5apm139aA5iPJY1wANW8YW4SdKapx1nW3SAfPQ5JGeMd7U3jves4s3cUi",
  "key13": "4b14HBjx1YH2QfJPNZKybLeQeuCUKYpdXs7qm86WeZjoN4DaC5Ep63aysEKJCicK5gVhnEyrLRG943Y1Vru31vi8",
  "key14": "4EhmnefUA6BytbbzVrSmRsbJD8WJgw8pgpUfzwSrcsv2i7n5a35o7zXyJ1AkcWzugXEYRdMDcH3AYZcUdQLiP2fQ",
  "key15": "3jhhezXwZZFGg4UhNeEMq32HnVbg92bxYN9P4Ven4EiBstgb6zwcWUApBUZSohL4LXaNHSxbwghZmkKSvPm1g8Vg",
  "key16": "Z2vDufQw8RTuU9WVGJmhWuJKdYZoatXdNjty86QH7NrURH48RJyGnX2Qam8GnYYJ894tjDMhnjR9AVrrsxmrjqQ",
  "key17": "1SxmUrgsHf7yXTRQUqZzmYhtMLwy3b6LCCp4F9G9e252dYomPELay3GfwyAca4ZFcE6NH4waULUaHwgw8QNhR8o",
  "key18": "5KDtHAAxeQtVXz9UWskT723dE5FFfgFNgqJmt8Pp8wJ1bV6gHaMtfAp2kKMKM5UVPQLZZ2FW9fpCwctXPsVsrxij",
  "key19": "aFyzfMubiHwU9pMo6KjPJ5sMihcqqJWZd1LV67JtFhAS6SKKQRfvt7RGujJtY2voQf1xbuVFQxgCoyjLwb5FSU7",
  "key20": "4ULvGsaWoKmfbXsnY8cxm97s1Ymj95s3hNUqa6G8weAjoszMwYevNzJmEiioqdcAveZeu5nwAW2zPQu5vWwbhCBn",
  "key21": "5sqFjs3bnVHYPUMZUnTHEahqKnfUg49X6xWdexn3DLz1rcofhJaD9DBFEXoTjuBwdeBNb559BCQCvuM3kpvdnbkz",
  "key22": "1GiPocp7XxdwFHpwDoMyNTRn9ziqUfqwaFx6qQErSjK8R2Azv3LJx1b9mXg2FG7gXbNcmbgzqRz8rtMxD5D3U4L",
  "key23": "4DH71r9Y72cxZxcEfTQHTcjnBKSVxw97rYfazzrxuwvW1FLfPkZLUJTcBmzAUZfxEcJ5GD8DcG2irUMLDhpQKz2K",
  "key24": "465Xdj8UZ9QyBLMcxFda9pzvKeMbJC49JccjbkJkSQTfmThSq5S3jK8dkNbafzqgkqeC6S6Ar3dJN3SqetNkqbhR",
  "key25": "2Eqt4gMz4pVAaMxiKWd8tM8ewcxXL6PPTGEY197LdZossuhJcEwuEeUUN3AFpQPdSpG9jMtrdynrCRq5XjS8bFyb",
  "key26": "3QSgGygbHDb5Na5dW6TiEnDhLVPwd6L6D6vRpKgYG2UWMt7HUSySA7aXBEGUHRnBDSQ95VjhCMt3ifbEUkMQEthU",
  "key27": "2ycJhc2HS1deoVr27tNMzYSGPL37vVKDn5txTb12CtuqrkLFtE8FRqSSRyYKa3MgJZFk29tPEBEShkP6rqHiH3zX",
  "key28": "pFDfw1VDcGmANF5AtWiKQr7HqVcanBcTMJ1RA5pvWhmnpz9fSNE273H8zo89hViWQULePEjVLJoVNEqAcvmVp9G",
  "key29": "2Y2A6Eqyr2mJMAV2sQ85PNCb1ifchmVi13Jz3DA7xmD8yjgskvbaEesVeKjj9guBjcjGGvMJi21gVrXM1gYpoHzU",
  "key30": "4rb4q6kA3tP9f4PyzVFpGYGb5EbqAWW5LEmGTjRc82moW5Q2AEAwKuGPinayJEZnpSwueVPihMfEbBDpBSJ3xc2P",
  "key31": "2A2H7AqxoDYE3rcTtTWTEv4m79Ey65dgFogFYeQCXHV4xH6Z1TgNY98QSrDEks4keRum63h7RMiQXnVysjWtyFEM",
  "key32": "4AsDHXn7yyr8zSVc6DqcenV7HgphJBSpe15hDrBvXKrvriUrshXWErq3x7bycxkhUsL3a7wqt2ECJd1FPuofEr3w",
  "key33": "3z8ZBcNJBvmjkbaVLGA2sxF5f8krQFTA7MHCYZLgizUXDtUUzfjWVa9j5A63NhWTnYPmvfUouQtoCkkPuymTU9VZ",
  "key34": "3MjpWzP7W3p9t8vdRJ3ZM5DuokXY8PU3zdxpRxqo3ERxdzJnQu5ow57BoJf1TevwNySiRJ8CAjkcwDHUCLrtG57a",
  "key35": "5DpX6RhsGiDZVxcKozowVsKmvgUqj8L87GpGkeWkpwbht3U3Prig6LB5kMYDvEPVoouG53CrfVYzaSZTnw59Xsvc",
  "key36": "3jYbXM29P4gt4euJQpbmoQxcCXa3pcp1HiWgg81xKNcdS9f5oVPXFxPQXtmr5Te5WLkrNk5uWj6nm7ucV28sgcK1",
  "key37": "YaZDw3mtaW8BToLziFdj7q1VyjYhBDx2ot8whxTdUwgSG8UB4BZWo4fQb2wfG7x5Ag83SvFeajF3u6rXAVdnA4C",
  "key38": "2wKsYDTZZgDbP2J1tkDXkYQxrjZnqzjPVUfLkQGJAnvr4GgGLp8VsT1uT6tfVYRmmNKgP5tcjGs9jHL75dZLGZeA",
  "key39": "5ZCTRnNhHTAe9uBKX3QFecyk2yYeSjjdV1XUCr4gVCKL7ohcKA14okVLeQ2CU44NekKnec4iZgKCJ9pAJVp9rg2q",
  "key40": "3iqScA9YFfKubQbCuraAmhBu8P6qyKNYU8gXu7pfQ2F2rgehqU5G7bVWyerfra9rVqHLFjyfdHFkZzyfEFZ3GbYS",
  "key41": "61ZCm9QviBCaRJGU4wD6W4XdnbsJXj8AWuRpcJ5Xz8Q9jwtaTQb9MmKzZNUdbvdUsy3TcFwfGMkYpxuBMq83Dbby",
  "key42": "b83He5zNAeGz2UJnJuNQQvYRETBxLriKASpAE8xZo7YBdsRwWTP6WFUZvTGkn8ZhonmCyJH6B1evE9tbxQkhvb8"
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
