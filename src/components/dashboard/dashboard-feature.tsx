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
    "51UqRdSVyrwvstu4ZCXDe1cus1LFeE3yb4AKcQtrRSjqV1a5G65rT5MaByYninfKYj2Mr3RXqc4CwxLA2AcX8Ki6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TUoppQ5CTnLDZMV8wApoDNt8CRdbut7CXu1fjNi58mYNfjcb9oSDvS7KLYd8LrUeHPXSoWkJtgyPNfiCAt46vC",
  "key1": "659wzTCRPJ3z7jkwPu6MYyL4fn1Ar2ga5U5Z6sxKafo2K2ASrrQ58CrQdueS9XRY1ckhVr1Q4DEedwhxoHV8Zsed",
  "key2": "3xMNZmj4KcXV8VvwLk1n6kjCTHsGBdtXPagk92aixFe3Juex5jJDKd6jJbNomCCCT9ESUq1bPibnxZ1aNEDBLjoJ",
  "key3": "3S6Wr1MZmJigbMokNTKQRPNBzA1Q1P2A6isrQaFr9WQnwaqsjq6kZ5qAZxkQg9MQFRS2YiXwEC4uk2NdToHid7ij",
  "key4": "dsamhRX7YxrSEjmq8UDYDEVLukxRtwFx4y7jorSiqcD7nUgHvqPCx9C8KkX8XiWZVnZ94k2g2udvtpcsFNkwHFv",
  "key5": "5AMsFn9TDsFJwKqaoSLcBB3PbEcAuimsbKjCJ2WevRbvdxN3LvoMRb1MxDbSLXauFpLwTZ93KkzA59CDAZvdpWJQ",
  "key6": "2n58Gp2RbRTEwAnows6Nn8Hbpd6xT82r6EmuaFBYtAsfUFD6pUjBAGCTBnfsoCtHFp44N2m16GWzc7EBAbrR2WiJ",
  "key7": "4JxMuiCukUt8vLhT8zzSTTsCkH4mAmjXAkgaMsh3jbFYrfxL91VBM2rmMHAxDZCCQpNybisGJjWcDnph4kvYrcwG",
  "key8": "2TSwKV3Cxi3kpDJ5xZgNubHRdR9QLKa7Th54u2TRvatgiXLpoA3wrJ7Yx9vb9DqhsV9FmzNFByCSfWRMKCnDZqMq",
  "key9": "yYga9k59tqsmVJvghfh91DiNFD2XnNu5rUAvQgB1uXc4uEZsjDHczdHi6RRr39ijWnMUbPi1JvhonXBEZP5VL7J",
  "key10": "5G6MwL8LoTNzhGZfZJ9y7xPNkw4xQu6gnt7gnEzeucNEr7JhJG19Z9yCoVjHu66ovLfHSyo6MzVcRXXKqZBse4vh",
  "key11": "4ZEbbWPKGmEsNYUfyhYnpjTDwDoadbeCppYA5NvUqrCyXxkSoVoZFrhKQqQhoN5pc1nv7H8RT1XmEwriJyysZ914",
  "key12": "2AMXQ9pPewXv9qs7kgtTY1MpFfXgc4ZwBLqjN8T77YbnHUDoAb2DbBcS7wbW11toyNQ2kAkE4rhYxKiNp2ehHAM9",
  "key13": "4aUcU923DfHFag3rhn1DnEBZvn3VdSJargymJq68pYuNGpvZi5hd4ayD7MzJ5JG8tj6u2hYJ234VHEG3JLwqrNee",
  "key14": "2xmw5d488jtQvoq6tk5MMBwCQVrFxe8h3epQa6m9PjNrF4pRto1EPmBrAPtD1Zh6qzZbitKLix4UaZU9ewBeV6yH",
  "key15": "5ned5Bgv99ueNXU3C8QpE48LUzbrbeNmbrY8JdH9eKegyVa4f1DBuTEK3DKfa5EcA8fbJZUBSa6AHaVUFtGdaoTp",
  "key16": "65LpGTHSognNnZm9VQgz95R7t9oXKQwHxp67H7XvNpm92kCUebQdW6j6WEYF68ajbB7eomaGCWVy71XHSCK6extY",
  "key17": "5rmYXt8XbCpZpN7APYom1BG35a49AuizpVvHBXh6tpFAScohzDPiuWdJ6KDSPrPLu7F3PtNkkQYbbVS8R1ZFYxPk",
  "key18": "3NTqAp1NBEmAaHGfWg8pVwvUnyy4tzosf6bqF9PaQ1EMRnduH4d2JxpLz2NrLr8vzL73bDaLrVfwXiJdEpGQwh95",
  "key19": "4VzZ5VsyaaJ42nTK61ZXid8Ke4BCwr2tcYSaWFMsmkVMqtGSx7z7KnHVGKkN2k9yywcY9MWEWyHd5nLKH14rEBmh",
  "key20": "2ffpG7mCHozgzLUKGdBkMmgRta3H6ruQ9K2A3j8obMS5KmfjzN9zFFMuqiGs6XPKu1UiuCziNqfgf4BEEQJNgCiM",
  "key21": "5uVKtKeTpvnrLxhEedZUGE6MZQ5MyU8peSH8rtBBn5GTQYtzZZgFaQYnX5ksd7sjxcnyqGsEPEtu1FpYFdqsEfC2",
  "key22": "xovfqHYXiwrtvnJi2L9wck3fzsveAufLjEX91aGjrSGgZd6yo4qAPqeWHtKbsECULJqv8H9DRiofCCQSswwRDAV",
  "key23": "2SGsm2EJKtnE1NYbg13mPwQLSkTEZSbobM9jKgPCARBKhtx5rpAXxQGb48V4fizMQgh67nHK6RmKtQKHCSTeDRF4",
  "key24": "zuZeiVx3oD2xin6mEVoawBBSwHHvYqkEM1x9itQEESrAtJM75mL5LfQsiuMybc66Y4Kw2BwCftjBVoFGUwPGEvv",
  "key25": "57xdUkxgzVbW2rQybHqC9m6qkVAvPKuoqKEg7Ces2HtVUkXd2mZuejh98KaQq5n9YeEZXRJnuUNg5rEMAwhqpDiM",
  "key26": "2rBBD6DbSxhVLoBj9xCW5Dwz5v3MKZpcfx5GFJUnYStXxgBopjsuh3rJdKCeDkm2eJxDJmhRegrMEQ3KKQ5iYJ27",
  "key27": "CpXxQ7cXaRtmZGCiTtyC3Hu1xxpiyoyB1Ln1xZTJBnUDFkv7RN3YmX7EeMsGMtTdVcag4PJRhJ6XS8cj46WdE3c",
  "key28": "qyBMGMUGHqBSAZnhipJmfCq8HWtTdkwGazsr2VZn1L2LE4sfdo8Zv2X9MBGENu2K6zcEAXXdxvojFCaAQnEsSns",
  "key29": "rTKnwSFASTdoq5sRy2fkr4zgab7F2bhFPeQQsNZAXxtsEQ98daoL2bsMZkYNbM5MmTa6FscrTUSUSaFsGjdMm4r",
  "key30": "5WKBtfDeG13tJmQCdxbEytmWkqWeT7XBFqwuji68a9i27oc8Ld8pAhsCDjFgZjAh8CeXoUJpjtznHJyBdD1XAYXt",
  "key31": "3e9KHGu9R6mwU4NmZrybHvDDA1r4kxgh5hSSzvdSJRvmoKDqSiHH3zqbmpyBqZKjGuu1ZvNpVxeNTsuQZHHQMLyj",
  "key32": "YC5SWWP4giGBe9Pn6CNJipPnKuEP3Fmocg5BVvfECTc5DJvcBskDtqJrnkbkXozFh2SjJoxRPJftzAnwYs9SKyA",
  "key33": "2f1G12ZuUCg94YH86JkTjbeRETGMf996r4xquT9JxG7WNC1bZaSCRmKT2gk6vPGA9KBfAUtKHqHLoP7nZaLBwSn8",
  "key34": "5pBiSgGEMduLsLcRFCCaU6XQkmLM5HprtX2iKMb1s18U5xB89xg9RRFbLyHF5Gr94Pg5RsBapE81StYiphQCyBxU",
  "key35": "3WzfpVimN8BVwm7zKr45tyUquVgzvPAnC2KueF5VBbZJchMTSgTC8AGcRG19m9s2B3KNSgEznWH2NFZuhaiD1wg5",
  "key36": "3t3X77mc41Y9GgcbxCpKnP6WKuWzttdqGvRgQGZ6uYZ7ZBzu6Ue2qYgsmz6bESfYfHtNRisfAmaLA4KEDjdijzEJ",
  "key37": "4JjhJRp7eybZTHn7ZTS1m77qRdWaz3VzJnHudT8J31rU3L6SeNJowxWDf1UsRDALfKiUnrqDJF7JZGwdz1oK1n6G",
  "key38": "TxVUuqNs32dLiBDszWv1CmjyokCep7v4qzEcHorvGsXZ3sFSrpEfaoshTp2yh4t3Q7pUSdbvY9tBghmTBvfUkGv",
  "key39": "5tTB8BuCz8jdnmPXFkmbMs5mZaoxvLyyDgHftXojkwnnrWt59VMok7PFyT7xuwBvx3p95U6Kd5UXcMR6zSoeghP4",
  "key40": "3MTGVqS34rAG2eAKuSggAMm8WEL4QbKkuGnghBha88JW9Gp932kzMyNx9XK5ceAgna4mYcNmqxEKo5Dw5K25Admw",
  "key41": "FnK5ncv3ANAF7tDitznRNiNy4jupBcvue1P1Ltkpgn3z6HrtHBtheAcVVNfsZkYXkRRTZMXdTV1ckMxGhQXUrAG",
  "key42": "higUjzkxnuBxp51dX1SyTMTQ8S3DEVtgdXLZDwKPLGmtJv2EQVT41vwfV21iDG8TsjeyHYEZ5TfR9qkGoBs13HB",
  "key43": "58Z5XyYcJd12wdTN3vNcGftn3W46Sg2k7mPAzfzZbdXtzAVtHEhob5o5osF6iJ1q12pxiPV8PvZV2d1MdQ63VLH1",
  "key44": "21nfm1CGiceQVKSNDA8gkcF42iYiP3JrW96JuNTKoMxFiUmJnrJRGP3aL5LWJUebXTtgG8RFqBy6rd7sfpHtWcuY",
  "key45": "39zuVyVr2TfWa2RHBpFcE96hLxWrV9HeDhry43LavXGUKuRvjQjZ1BnNSxApXrTaRm1TNoKBx8DyhbwJ4JCdwfLf"
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
