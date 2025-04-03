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
    "2Bdjw5GN8jLW3BNTFYJgasUaVUhwN6j3MAQDG6LzQmVP2wqoHLWYJkApU1tk4dmjvsEEbbhb3x5SN56svCbWz73B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sKfAY6z7WrXkFbonsAAUMtuZ4yYyZhEHAF5Vv3WJopEJpXp6ZNKr4WBmyFzFPBuKPUZEznq3oWZ3GP4juc9ufMX",
  "key1": "5rqXSTz77d95STqP5fbRijNRXGEKs6HxQsrGnCEmfLZvoKC1vAvYF6b4bceStFjkxkWsKXNbZfM3RQuppyDhgFTb",
  "key2": "FAvKXegvWbHsucXgnXCSW9U3xKZKBFtWh5g6ZtKZGUKJbzovhN2nn3tjyim6u7UARwN6WS3ChWabgnfAMbCdGrQ",
  "key3": "5UddGRBFftBafDF4SmCqNKg59DZRQ63Nx59SLMZcuVKbXcs8n9fakujLM7WPrcQHbizSV6kPJbSd2R3MRbarbvio",
  "key4": "EiPSpVJWuFfZNZp16siNJToUSXipJskdEMTDnA5MbS28ie1DFDkm8gKULvKEQ8Ueh7ZkDFYWaEPtDcP2zMXh6ji",
  "key5": "4CGJWnEFn7fuBRpA8m54fhTJgamsdgBLaJj7G3RqLCcwvDpt5gM4P4funSVNRRG5ZSaVnezmnZXvwR9NgWwDqNPe",
  "key6": "dgyEuLfhRNziojVb69bbf87KCuo3uPHKndNrDgdsMThGCkfaX9kfstFzo6j8r6AFwMB6Z61Jj5VPNkVDhDp9ikZ",
  "key7": "4rMCbxXFqAPkreBofPiq85vgG2rZqeobnoBdSmpxmZEeXuw1CM9H8xeHyQYLCYettBq9hE6y9wiYzaBR1XyphK9G",
  "key8": "4SFAWjNNru8Ysuixy8s2WTHQY62zcebir1NsSVbjso72srHENrQmjzdAsiwjDYs5uXoDQ6HFqw4epdx8jmT3R4Z6",
  "key9": "4gookHp6hSzv99xRqaaxRZ2XmoH4cWag7sxYTq6xZjEa7D8yhoyFoNsWLda9ahPdsHufRbHbRtNENjryyji8Tj9N",
  "key10": "3wLVkRRKB4LAbQAELogqnirfbp8mkFFRzwZEKEgWQsqNqPa5EQvtZPDMs94Z3xSBeneawoapWSBTdmpgPM8LZsb5",
  "key11": "3DbzjnWE6ZAbN955t1EeCnBw8T9bad746rGqPQMZWwBeNLMzeGf5P243eV2uhCBo1GT5jKxX6jFuYyYPMeRE4Lru",
  "key12": "PAAPBeYmLUbXNFZVeY3AZ7Ykh39kFnpQJ5L4PK4iAXcy7cpoAK5HTwAeZybt64zUYjQLqn89rz2DioPd7J9X915",
  "key13": "5KXuiqJh8knjCKRhtFqgF27JtMgX5FU8u7ScjLDaVjkhYbbNz4gwCEXu59YcwtFnoYFLnWPVNdDp2EukUELiZtG3",
  "key14": "6bRBWBmYd4c4jgSbRpZERsqBtXrVYg3VPGk3FSB4uQJApB5u7uV3mjCKvaq4mbjQhuch7wQZto9LJDSVXvXymEx",
  "key15": "5mzUSj9cpTKWsrxtUQVRLz5kUvwtZYC4K4mHPGhyAnPtEWaJNgajNp2JnQtGcStpThegM3MXyzDN4NpChosAmCEa",
  "key16": "5wTeia2jxDgthFGG3vTG1r5oZzK2NUWHKs2Shm1XYq1za7KuKccGNSYPQjcxTuvyhWBQWFDHXRZiuuNN2Q7QFquT",
  "key17": "5QPcapUAkXpewp3vuEdePygWMLcWUQ7MTCrKjuxVuqJ8EKpkGNKicLTPgkcNqfmbxQCidvvNV1m8BQ3B2E6ZYBHQ",
  "key18": "4567oXz171iet68ufsSnr6y6sb9oq3d73y5x4dmBh27xXgM7MthC11oKP3GKUQVqPnZdCEaBQiUX3sbx8utWgSzQ",
  "key19": "3PoCuzkdzzrcgk6mqiZ85WcvStZieehnhuKJEjWnJVvpcaQuqkpwmXNVnNHcv7uraCk53ZwjU3QAmwRdhdjXr1cW",
  "key20": "2ns2y5KGpZzmJwQjTpApmq84LPpY5kV8Eupr3khNZhZrQj3EVKm3LyTzqccqggWQ5t6yxA4dq1er3DQpa5UadX4H",
  "key21": "42m9XGa8QoiknCRW8cWqgFxmLmE6w9rk8qyxYgj8GrTkK3mNHQMxBkQgk8MKBy4fJAgeXS2wZxakpghQuq8U7r4",
  "key22": "4x3y7Ms1MRStcZpB98ccYLvdK4H9cA1yGcmrmibtuAY19CvXExvW9x1TqNkUWEa2Q69EVcSPLMonYk8WLBuEdHka",
  "key23": "2973myfTmPkkqXPYwJy4x1QkjyHXRrsuZ7MWVYkCTTktEjMCeCsCgP4KiSpmVTLv2vq5cPvRp3qbVZvF1aeHdQwL",
  "key24": "4YQDonLJnTQghmSh1GXf3861iXegvJuH5EtFrbrHMYDkD9QwRkgPKjPeoDiMgteUHxnc5ML2jLwazjGmn2Xy3YdE",
  "key25": "KBwqpwzVo5n2jx7eXp9Lb2xNpLZb2xc9q2HVr3Zedf4XUVWejdBKsNsyC6Mjy6GcWrjGn39X3SJFNKJzWhmN4us",
  "key26": "63A4gckXo8HYdvhG6sHg2c9aei6bDTBftoTkv6HEdiMYB7nzDXkBP7fTWfp1DBPMhqtUxnemci3KyfNAAYxnTBhw",
  "key27": "5U3Xo5UhJosC5s7dFqgC1983N7oXBmELJaVYosgEhq4JG3Q88Z4sZ2kmfkkgq6b1sohqNG4hyB8KNeAxMWAXNUPJ",
  "key28": "4y7rph5rCZxr2UC3saPR8adteTs2XzVnUsfrAfMsqJPSbbb7davcLCh5G6CaQhjjhPcECBebuo4CdLLg415cVRiX",
  "key29": "5QfHpXdvFGTBcPMMcpWvp9tkYgW5DTKzPoNdCXaVSQ33tZn4WgjzhMZoBX1tyA1qzRgkeQJd35cJvijPd7THUitR",
  "key30": "2P8hdzcV2YXfNLAXVPdrmyChB3ifKWLW5HwPwvgycZiiE4hq7YW3gAVf1qGp3otMEm2eV1NTe7aCTGCUwuB59A1B",
  "key31": "4PerV4fjeWXzbG2r5VaM4jgfkgz1Exi8XT859Nj5Zbnpt9wJJc6ubgjpDjLbk9fyb8e56zFuPbyCJjtJUMDsBBfz",
  "key32": "2yaZ2MK36T6ES4SEJmnnfoL5BZ1CDEVEj8anKT6TyB5EHUqm2LFvVXuM7bHv4hiYYithBPVWVaPs7tS1oq56W1Bc",
  "key33": "4XQPnPs1VkquHPevZsmdGFA6ASbx6zTGVFFkqZN3Zagx3cRcDW2RRjZMysr1qP7DcG6fmTYKbtQzLNau4H6KW44m",
  "key34": "39kdcLrmwMees1K3AdZ7nt7yufymYiFrtYca7PQ7DzcibeqWHaVmYkfwZZHeTKtth7J1WRCDStyYjqrtXe9tXBjp",
  "key35": "2xjU6DbHG9ckL4BdNSaDeGmwDAq53DP1mFZVkt9dftbvHg5XmYMLBTahoCrASp4iWsp2XYxYVhQ5AUyB1npV5VxR",
  "key36": "3gBCdpFxUXFQsHVgTHLo7iVzhwTin7vRUbrg9vQErU7xtTCZxGP7hdb3simP9PQDiKH4okjNLGk7hh9y5iQp8am5",
  "key37": "5roQ67a9PjGPbuGc4pAHgfZVf3bkDwvKU6zpBtKGAhh1jacpn2m5RBnZ4fuErTtQdrrq1hDtYuykVAbNHGpavFF5",
  "key38": "sPB1PmXTdumPRbWw8iN3zdFkzQWLxJQXDbnXYkdJgkxtqhPTtm8US487KKkARi2f7pmmpwz5iCQAbZCJcKrv7Yz",
  "key39": "2LGNXJJVUGGTDh6hgBtEYUaZMY3k1GJuowm6P7rcQwnHNBeRbjzrS317d4uiWott7rmVaY9na55saTKJeytfBp1t",
  "key40": "4mZNkCdmiEs5QPgmRxg6UHRgGsPG8Bg1gnDRiHNEgWVGHG79pYYRDxdaSroBZ1kDGEdNsCiCDwjFCPWDqaADiLbB",
  "key41": "5C7NDqYoB3qRmdRZafW2RpqdqGTEKNuXBQeho1WTpNvBjXpKbpirFoZnpggy4fL8JGRZt3Txn47jYfNpwdQ8EFK8",
  "key42": "4HK1QJU37pnHTZvJk9B4X7xPRmwsW2JcGrMrpGdHxAPtxJaFZdrNmbs93boivbSAzgTF2umPKJgt6Mgxin4oem19",
  "key43": "3wmsy5B3DBaECv9oiUJX2rg3MLioBcZyhW5yPokDZQxep7oqzzK4eFo56hxQ1KXdwWcrWUPaVDaopsttsCD2kVB4",
  "key44": "1fyRimd9ayMAkSywg15MA41enuWMF2N7noXBaSfgfyG68R7K7GRmcRWFkJ8saJnCir42KMsNMjVP6AmT244t54N",
  "key45": "ZvvBgcZDXGJYYi2dvZz3YyuEptAxyJfttoJwVJXoRRS7Wp3xnn3sUiH23aWjaJxZynNCZrKh9JE1SfPEb52oTPy",
  "key46": "3TjXjSeqExkVDhcJ5C5ii6bFKb8HNkTACd1wny13tuDaFKJVuCp3CETVnYT193Uv6Rw56XCKJpo8Y5jXjywDiYhW"
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
