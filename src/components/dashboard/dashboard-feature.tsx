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
    "j3LZsTtMSyVXJnzTTWSY6u2s3QENb1UfPZ9ANf37gmf8ZJ2n3zo4eoV1tAscSThmfVoPSruS6ptMd7sp2xNNpmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YQCVRByAu87tgfgouwjQeSCrZuVKryjEGVmuqcL3eUU2RBMJjxZtTAnxQ2TemneeeUHdZGn7zVdR8YQ6yeZcHbF",
  "key1": "2h4uxx5kGpS1qBin8NTn4VS4zwyM93C9Sw9QWD8sJ611MXB1bYyGDrcH7kkMsVzqSQgpwH84cpWW8TAgCu8qLa22",
  "key2": "4FqqQFLxFvoeyNrua5QXw4raa2vvnhN17Xz1fvpJPqUYSpLa2AtzSZ56sCjqr1aj25zE5nCqaU2XkcuNfL8CYNyJ",
  "key3": "2c1Yq9WTvn66S5Cv1dQVsYXGqNxMMLZUBVEtPZy7rifHGLDDAhpqoJdTMR2ZQ7AsMeU4r6B8cEE6mAh4SoC6c6Er",
  "key4": "3nwJkdbUGizGDzSja5Jy927cbKkGms9VAxBUrZ6Are6PTEjX7daio1jUtuyPTkrihLXQexkfcXvdTkr6Yetw2MKL",
  "key5": "tCBfsNCA1WLoGXDDK1LiXydjyKjbp2yAMYxGHZLRCizbi4XzfrHomYbtWtqsTxR8owFHM3ibRKtugitRQoybcyY",
  "key6": "iaDa3jkPMZ7RRsUw2qgcL8P4oYUJuQyaCkVWPQbQNv98Nb4gh9Jdp3rcjp5kWmH5bNhV2UMjvTdVJ5YcFy9depg",
  "key7": "3gCqoMzZcABzpfkRbadz2fWftfmxy798m1Bp9EXGbQFKSRo55NetWyMDXnNsjmFmNsYQuQd9xLrsf7AAjHjy3WJD",
  "key8": "48W7HkAi2M1dhibnNtqTrTkm4Y5cGmfBKSF14hQbNUsyjR23ZiaB2RjTfkAE3YFJ85RZhfUD4oodewFp3LnkfrfY",
  "key9": "4i3Gc7CTPiJPqdNAa1pmGioep4zNwdJz7t6eKtDzVLEe7A41i71jfWzD4cP1K3Hrh6P9tGsA5sjmdiQnZn5Uap9G",
  "key10": "3yS8xmjNeVxHRXwQDKhw7sxwi3DJE2m2XtmiKb22W2eciBa5qMDTQXcwvwniunFWTnhoBByCWdHXqeHJ4fgaFeuo",
  "key11": "6r6x2dhMXj8pTpadKRdD4LVQzXBhdNoCnb6hj88NQCSGPLAsnDaoFyS1swCuL4UMFEMbTnf6SksxoRnzYc47sFh",
  "key12": "M69CYi1TtUCPLNSPGrorRQiC9jLoNS2roWFE68DMfByncVgJyXWDURuuaqazzqrc5oDzGveRidyAKwWb8AZ2waG",
  "key13": "5CRRZia4WwSaXAUv92ir6ycMFTBPHqxiA8YjBkoxUSPgweoVCN7vAFSG5eR9rrh67u1aTvmXx3LrZZwx6PvKJFmZ",
  "key14": "31oUrWMuRRSuziCThgE4SpcUE3H3amNvmP6oWLYNpj5sHqVyeB7RhFqLMfjAhVUiPHA33haC2zNQAaCHosY3Zdci",
  "key15": "2Um99rabtQYEvLr4CGgd9CWiaSQ6RS8Wpw6BB7Mb7EZCgnBR7XgwUnP7rDU9CTeBxB8Dm7r1NqC8BykUACfqy9Gv",
  "key16": "5i9UANjLCcZntykbR7CXtRUyvtTsBgihgTYNzDqk3hAUsLCZXRydHiCLJTmsatqcC4ejazu5io8ZupkqhUXXXjzV",
  "key17": "55UhL3hoqZGsdaM9p2ZvaJgkPAFCLZBWQv7g55iyGafj9sYVVku8Fxvz7H5t5gQSPciMyGooD1cqYnMrTNC8FEQk",
  "key18": "5oB6hMd1dZGf9JXKwbbh3Tai34iGphVC5pQaP9auaBhwpkNYk3T8yHAnniy2QN1t6nL2HbaVhiyR58fxyqPVHidB",
  "key19": "4dJTdxjYPH9PBgYarvxQK5uNMzzSp1fNwP5n9wcLxek5uP5iTGR24RkUBGbtB46ZLg6Rgy2ibnpPBjG4NgxkA3zw",
  "key20": "65rFHrSXs29dZR8euapfDh5CXvygZPJTEmPuRCdD6bRFR7DgdcCJsv2PbnuFHstCepQ4MNrUDn7kEGaNu8Yo4KBx",
  "key21": "2tXByfxeeWMjLpokdi9NvkLzRirXSogrJD4eFm2dMHH3dHB6KctxACcFF8p378FDtSm7uTBjKDXdGQPcu5CjJy4t",
  "key22": "2zgUZA7hWV7SLjnUeNtbDsEfk8kDNBa1LVGsDdjynJiV2ejbpDXb6RJDoNxLWkU2w1RfToUntmX4DusjEh1E5LtT",
  "key23": "6799LNdWK3GW32SP2aiGNKNMhpsirUPisNas8uuyhBo8zxdgLBGxoCMMzXyKimiefLMPyrRmYbK67GX8CibKhwZb",
  "key24": "Pj3jQAH2B7aQRTeVNYfgwNVyauD2whrPmQ8vnePvr6w2nqUoRMpJvmRJTmYUTLYsYCyv7zv8mK4CmEegQ4pJjNc",
  "key25": "568g7RdSEFPLBts3aMkdBVxv11bXSEdUtpWcJxTZwGpJvtcZg4vMjJLShUpJ3XkmFSJRBKYqqqrbFxiidWSFF1G4",
  "key26": "2QaUMGjvpTwPkUoWmbirqWCQXNHeYDammaKQf2DVYXUDDWwdUpbZMJpx6JTRfz5p9vCZmWP1RVotfJv4Rj7tfLa4",
  "key27": "34D3ctUVcEuKjUhsm6nvUFZqbJnHUWqAwSkGYJmNZ1DPNy62D7xzwxKTMtAppSo8MtgK8QSZ9bMT8WkFRsFVEBU1",
  "key28": "3ppMHkrxVoEJgH2LZqZpALrZsHkXb2DcYZTGggzh8kfXCZK4XkteAdrsGPhFJhwKkhNB1Jy4Fzb5YXwb3ZZDxvcJ",
  "key29": "3ABQtgbPBvuKAQaLAe1RcyXZYexQBHzahdaGLjzpNzkHPNNapBeVUZV72sVgjZqqDsZ5m2oHVxMhFBTj7u6P877F",
  "key30": "24NAm1XT6w7HuSQUdiwLzgy9RqwYXY1yGkGhJNG5KZK7mj9RAARASd9U9Gg51hfWmCgZzN81MVkvoQf2dSz6Yxu8",
  "key31": "a2SPAsc7wduGh5aUBmvfpNSifTvAX5ahkoPBerANoGCzkiHgerdB8Woj3sfAv1eUJVzSLYCpupHMrxZzUBXtRhq",
  "key32": "iwvuTqi5zUq7jYBqJxdnULvZk7uCS35YYp41BspLziMVdSPthT5VYPwDTKjSyTCqu79pxJdyf7eWYcG8Bvi7os6",
  "key33": "3ykcwdkbYn1ojsrbwPi4WHPF4VqbYhQVaTotRUpGME13bhoUpds1uDGzTQy7fmnuUCbdAf2szHKcRJ29PPdaNNyr",
  "key34": "2ePBrpEXbkK6Hhc6cTABuqGaXAdyujxwDMdoeXrfX8ya9X5SNv5Gj2oPf8fuWrTWf5JkE9iDWW16zoJcdSSsDHev",
  "key35": "2jSwtWVCjx9NBpLnoCK4JBcNWqUxjShZryS3eRckc8Jn2ic6NHMgfhw8JKvzLxVvCRbg7qmvz56vp1EYoBpaFuwq"
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
