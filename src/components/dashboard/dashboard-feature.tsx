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
    "3ca6uCn8GmTkcMAmsfHxYqVzuScUxpBvzeQAPWvuFd2Sowi2npDox1kfweuJ9YuqtvEoVdDKvsVLGJaq2hNjebEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TB3WEnRjrVkKvusC6Eo62biHxdXEAKYFcskayAZ5bee8SnwcGvKrsTwE3gPRXUYmTKnwTAGYCZ9LM8ihqMqgqYe",
  "key1": "3Azyz3sKeWdGXrBV99FmRcN3SADBobu5Ev8C3kK66MeX6ExmSqeoj1QYEW9bkBzcZUB9WAUNM3dBBF8JrQRLUJUR",
  "key2": "43wV1riKtS3k1uQj17RDznj4WQYBHsV4kV64z8ESC6Mvp1xGJEuw7wPYXddcRDzMhk4G3WdZtLYYVtM439iCqUEs",
  "key3": "xPNdtrpjB9khkuUc3nuFbaZHHwHC5r7kGWHTD2ci7wDpts2uuvpW1jQEeh1bSRstWrh6whzjkrEhe5zwT9GxxQf",
  "key4": "4JyxsdR48ExJinviXLHvtkinFJ5VrXrnSxCzMiuWiCJd2QzooGAoM774HS2vmpKasoeEqD6aUNmTuBPYwXKfLNcc",
  "key5": "42CNV6xnP1hLTraD42XMUjLDFy4NZHk9zStJ99hZVPqioDcbZ2uBjWk7F7pqgLDtA43Zg3ai7xEfdbmxUaKD5ViU",
  "key6": "54AgAB7uiDf59rgSySWuyovbh8LkhhoQgSbYxu4dzD528prrNpmGwA1aQBnTUPreQUStyBT5ZNWGuGizBuAW7nv6",
  "key7": "37e3uH1fsxWhQpTnvi3G6aSuK4ZiBqnr5qFKCXaBGJfdj1QNZhPQhzeRgfecBeytgiQTXTqxYoARwVXXcMymy7E8",
  "key8": "RLAT3nya6YVtRzjSa8QqpZC2EuosaMqBGAFswdKsxQgzQf7j3k636tDYZFYv3uKaWmxWfP6oZAj66D1WYg3Hqw7",
  "key9": "ZdNF2SzQJZ3sqQ8PhZnt62TqrsQ9TjGCB7bXxw7nontgXfDy35qFZZ2DNESTaP7SYAiNEWnjXJMDsMYvwyKZRXu",
  "key10": "5TD4DonKjqviEUuGhc2KJriynNYmsYvytrYvW1bYh7RCzLBj7thAn6TCduZQSas6iE5MBFZ1Kum3ukxbFMbazkVW",
  "key11": "59js5tZYEjdnaNF46U8iGLUULCeQqyhCmWEFTNJS8wKn2qgp2vR8umEsjYumgVbQycN41SM7Db2nEDo3vfcV129D",
  "key12": "3T2JPA3iziYFBWgoRCeFnvo4APQizma7XUn9CHHHqRwS3ki1fznVXFw3bJTgHrJWrTi3eBdJ3eA53HphsXSYuQ1f",
  "key13": "4fXaRq1yTfyCvM8MzSkBeBiPw9sspLmuabTXh8g3RF5UNsikUAbMM6xxmRKNaSYWYrPQLdZb5py4WmFvEG2SSu8U",
  "key14": "4kwo1odra3L8UcQiXTCHMWpB7pGdwETYBQXBo5Kz4oGB88g7xw9YxVMKeCopSLigTYHP6GpKsSY8snRo1tPJEtpi",
  "key15": "3rCnMZB3CamVhuN8FDZveCEyEvngvUS44TmXTUwMpdQPSqCZETua45xuwUzcuCRpuMiDjF6fLUFBscoEw1Vcvrt6",
  "key16": "4YLHAb8VF5jMdrSd32MdaW3yEJdQZ4kJ3LhFNwo7oEiJqaUMoctXonU33oAZEqdCT7ByS3QaZq11BKGJmWKhtr3f",
  "key17": "23x5LziFwbPPT6D7UjGxcB7WCt9vConZTA4nQSjm4Kw4kLSnco7FnezDnLEPpua4Mnkyhn8pXNQuM6R79P4zhjbt",
  "key18": "isgxHFz5bdSeTVnPFLCWQfZKt8GVZ2JD7em4rfAT3BEVM9k9jKnfSPEgtniuPJK95spSiVP9cohA8BwM86b6Aet",
  "key19": "5dfvinkY12xQ7FxSPHRKvxs7C3iZqcx12MqXbzbVX4hDrAh7L3EoTLhGehRZbr6Co73rHrNwaifv4YUTdjHY6BFU",
  "key20": "4UfgMXtiDiKztnLs3r4ZdEuW6CzGCrNxQHQhizZLjd22qC7hA3qJyMexmYmqetZPTiD63b8CTnxmqMtqqhMKqwqF",
  "key21": "3LoatbKubKsEqPzjMoMvmYLhz7txcXcPaLGaS5kVa5bJ3LCRbZwMeRk1onNrqNeFssumLNur95zozzGHXrNk2KFZ",
  "key22": "SPu5qVykdzaMxPqXymuPLBL9MdPGYn6gMy6HNwrTj8CB1skXVzKHMLo6zgBnPwLqvKEmaC9Kuqpp88bWLBBCsQ5",
  "key23": "4Z28BGEQPjcz9rJnomJXd5DAgX7K7aF3Ytspd6pK3jEFEFJmmjQJEP63o9NWkfE11Gi69DtKWMZoBMTwtKyxt36x",
  "key24": "39BBbj4Umg77Trj715TxZ7JuVnEijTz9Ln8uAdZNwJtBwh8y4Mw7r4yjAd9jfcGyZ1b92HMyNNyKkGdFScvZgGET",
  "key25": "4WobHAFFaaguFHLxwmmPF9tJaLzLhE7hDCbE9aTWtFKQ7ri6ePC9x3mZPA5QCihiAthqk3DH9MqhespUcjJqM6kG",
  "key26": "3DYDr4t9hD4p4Mib3kTepRenekXG4ianj5Zdt4jooU79ntjCAeQfa8gZQr6i3vUL76HfyhEHWvX1puQTYAQefo1p",
  "key27": "41ddNBkQge7YpJN3jffdKRBS7EPD4ZJDoWbnU782M5eCdk5xmeLQ5ZYFb8GVzojZJ1TbzVXJUuiUtsVJCv7N4ogW",
  "key28": "66aKgbtsBQ55BKYt4MbT5ocsxyXRQQrRkbyhuxYB1WsPcBuvyo5baBYeCkWQfJm2LfXAfdysoMPYV342szWZv5om",
  "key29": "4Vbadfdgh63zMJKA72ovSEQ1ZUURLPXpxpV5bVnwjqmWbqRBwJCNsHx6WP72HGyQeBEQQmjBqSL6FyRgM49MpZod",
  "key30": "2KZ63H7WCWZFXvcf1ZLYg1NsfcGsVGxKeN1enksUF4Nw6UFoQg2Esbbtic9urt6GkDNgnBVWvauG2nSu8P3ppmDe",
  "key31": "5jrPCeqxewwoSomKStjKrFb1ZHo5akhdt5ghJ7oNypHNvgroxrkDSFWsJcq9XRFbhwdVMASqu8aRaggAE6CXRp4U",
  "key32": "3FzRMZQTRPaaxoHt3s8hLAEcAd3USixSUpx5YSP23Cx7W6U79kLQUeTWMGy5RZrDnBkCpADPD3pp2kqhH9fp8ici",
  "key33": "PaXKMPxajF8E1a9Q67vLCWpEnhtFtXACAXLRwr3wnaJwk4rcz16ChuVpRukPgSvhewj1DeTmKPsuqhmJ5ym4bL6",
  "key34": "65qzuDqMK4aEwKX5xvB68S2HixKqYwpyPez86oExPK4tB1ABBBdYuqKxDmypoETNaJDWsT6MR1YLqe2nNuCn26rk",
  "key35": "57SC9anDA5eehUfTUoGLBjo3UcBwgDne6EQ3V5mjkY34DNyowBdrRTHwvGHCgBTv71puvRq1KFWeNYzaQLn1dWA9",
  "key36": "q7VpDL6ybhgSyKorSfdeXKq547rXR3FLFy9sDhcyrCBB17CbN1pkqGhN9zRzXLfgsKbaGzMWGCibEABnWGvj9QG",
  "key37": "5rGuXttpUNo6MJq2kkJgjtYPSzhmQyzVPFj8oYW8tauHVuTyEUXhHqhASBQ83JQci37sLPaAZqsMxkkfVvaiSciF",
  "key38": "GfgKNKmFA3pLZB6RbyC6tgZedyJqdUbdDBrSMjxRA6bujsqjawCNgwwcg4eSuEyeaaFMngzxSR6BtgkCfhkqFqf",
  "key39": "5RZA5PwEr5vZXD2rJaLQMxqYsGj5EDZW3wfXMhASAmUEASENuQEG7L1Ae1NwhefBasJu22Kx1bjiJDF5JaLVLeXx",
  "key40": "27J3XJFUAEZqhZwvJQ6LViCo8wECaJJ5cDugrRARLUY9b2vf61QRvhJq2ZsCXh6Q786bayHxahuojWMG2n3H3s6R",
  "key41": "yznYxTkvN83P61gegcTcYD7gvZtMtGFFmBw4qhZNZmz66bifpgHr1sNuhWVFkMjssGoMn9QenWXvYqwL9t5yqyw",
  "key42": "3L7s4zhdo1RDghRwtY3JEt77mNbFHCHeWGbdozmrjQmAbEixKTz4sdEMdwehEepuXx4TJ3u4wcjPK5Gu5XJ8W6xa",
  "key43": "5Tg2pgcK7qXvCRLr4cfpiS9czNUzfuTREnncsYP6m4SPXV2kMbjXBATnYW1vF4Nd4MDjyhZAriyYH9FnLGLmJHTd",
  "key44": "5fzgRTZhfKgENuh8qYYBp23LnJFvRDFWJbcYE15oKJ6tFjxdsZcXAARP6ZvR3harBdn3CQ6mXuZ8RXffiFbBC3q1",
  "key45": "vkM8QSQS8Kz5whqpVXqkKwnXcnk7qjhjHZJDo1mNxjyMDf8WqV3BbwjRUANeG4aJdAtF37DPtwFCgm9NamYAoyD",
  "key46": "3nQug3WGjtrJYFo2RWsV1R1gY51uVmdUxTohtNBDsoZe7yEUxc2MqyATtzaejoMMtvNRpJcFNmZWZbrrKcBdEak6"
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
