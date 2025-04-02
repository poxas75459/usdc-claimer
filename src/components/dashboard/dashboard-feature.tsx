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
    "379gtgfzbwJ3aYw6RXoAwBvB6fSGV8hchz67SPJtuHafmEoS3RhGskvTm8UyTD928vn2Rs7NL9ZQ6zHNM8XfiAZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kvDK94ZBmBBqe9VXtq3cGdjYdYDPkyNNeqCVzu3SqhWuxr9n5THw7tfKX3jbSK5bBjRvQVHDrTauGPesc7eGs84",
  "key1": "3LKUJA1yJuS2FeUzKFF7i4MeaczkL7HFBq1oRDGvN4QW182t7wwpzjd8Win1xDGGaQnktBjFet284nS79vrmDyth",
  "key2": "4q8qaPPgFniXJmMSfm9Uf6k3DriCyKo67EoDjApVMLLHcNrdj93J2ni4PDEwx9Hn8wESwju6TSuwsMVvMm7bc2oE",
  "key3": "94RirzqVjBkcTuNpjTwJnd4Bv91B4ksfjU8zhVVrtuTcscUoEZb3FWU24j6aX1M5H5bie6FQncK7JEbBGtegqMB",
  "key4": "32kZE81QEAMA69Vhw3nbnx869wNQqaxvbEtU7suYxE1zi8QEEE11iWqbUFz67MsqdGPmmqwimtQrsBDDbdgM9g1r",
  "key5": "4GQzW2mhMAC5evm3LnDf5SoDXDvsCG3boiQUxe1hprHkrcQikhgoKB81oFkEaokq9z4rZ767KSg8Hoc7mNo8tf7x",
  "key6": "4759TFj2K2ZXkBxEnSNXLZPEfLL6pQnZSnzoEqYag2Zt3SgDmP4MuuMcospSymkAPsmmjEbqzp6ftoBwnaURMmV9",
  "key7": "nmtQmA6JGia53VQLbXgeNN91ohnLPN2yH1LeEPzSmeHACUKiPPD7pxmCUBMkwPDWvmQSVd1uVw4yy9ckpZg7Hxe",
  "key8": "4RgLvzFPUd6yBneegSodaDzq6TuTJYWdqQTynMHdME6oxezcfAcyWQDHicEVsx3rHwSmej4koD2BwWJTZL9PWm4n",
  "key9": "2rw3nRXQznXD4CpB8YzaGXXD19HdBZuNdLeNrg4vUDLQRg3R53o2siWg7nuWVg3JyqjR6ogaFmR8oEBbsYGUGV9s",
  "key10": "47qHcZoWQeZDeiSkKWJ5TmjQmHsqBpkKpvWH4PveaLUaDbe4SRSeAYVvcZR8vsrW6ZPqMTyCwyWoPhZg4ccYRqHs",
  "key11": "3fdzNxavezeWrh2Y9Vkr2FhxFraH4BfPa7R7fQ3rZoCVzNdSKijhdDcNrve2ruJykAdWHREQPAHvjgHyin3N6xpB",
  "key12": "4EQSinFaFmbiAq6muyaeb6GMUi8Vt9WaSW4Qy1bfQixZZQ4o5i7hGkZ4puHc1xXFYP2omd4TofpnTdZStteiQNTd",
  "key13": "4mN8XLGG4pWMPvsyHVHeCkX2EvvWPbmvkzMTQ2Sd4VmN6NphPDPv8kDG21iL25X91TUBg7DcUGwFE5Ku8uxb1jm3",
  "key14": "2Gfcb3vw2FNjnv7oYJZyw8cYRzWWRizEfRv71QebYuqkbGReKKDtQNmCrG1CRPqHeoFf6goxFjHh1ZdyG71mB6jk",
  "key15": "vj9fgbzNkU5BWXgfU9HiiEGb223fxdhUzEc5HDGiC4EjEXJ3bVKnTHosjomW5WnknrEJKD56KLhZUffdfNML2jr",
  "key16": "iTNKwKsT8LRjV3nC282tzTFm6QaLCvoSkZMsRvH9uZcXrFRoUPvgE9SToNasca9cUwvATfWaub8FZB3V2zDRwNB",
  "key17": "3xhQ7gG6KN5L6Wkt4ncMQ1ZzAkEb5qeDxXL85gr73oR8LRNcCTLDLkmQBfYLjTG9xprCy5yS76z5sZDayMhCejZ2",
  "key18": "VVAnun2xLt7dJ46HUhHjMreMyrvC7dpuWeai6q6U5EP4eHeCAswFc1uLHz21bE46tMhAjU3NcMU1y4FZKdetjQZ",
  "key19": "4uVFts9qgNasT4bCLQC7hobfBQr2mJNJqzxs36w3oJ7DbvA4AF6nQmAe2rSeLEGF7w8b4VJgikYZPJxGir4bRgoK",
  "key20": "2mMUcDV19E1RkHdjDNmejQbDZghF6zDSBKTMkpn22pKn2ShuCNo7fSicvXAHUDQwKtqMw5sfV3EAEFbH5ac8c2VN",
  "key21": "4gjtyagUJ5yUuy6wdiz8MHRPNwnsf8Fs1duRqnWjgEo9kbknRMaxVwUJ5oyxqbWYhuur1icJqzin2P3SH1B2DUwF",
  "key22": "4HQcFDN1S7jKcybQsypLye6N5fa7ScgaXSSp8XWZdrAPFw7EbnSRojHr7CF1mKFEb5KBjGK4swU81kteRuvYEj8L",
  "key23": "4838pbaJDFyLMAK9C3Q3vfNLNASskfnZAS5Mp4NyFwPuydaHXRGKvhLeh6yzavSNfUpCkvr2R89NMc7bNcfLQxqE",
  "key24": "5WbvsZMx4b8tBq4eoHc7NsmmuXmNC6aqKFTBWtzWU6kqLQ6EEoGdhZo98N9BcxXuBo7G2M9RoDuHux2goyPya8BJ",
  "key25": "5RU6bJTWXEpcdLjaH7DcsPutWRWyTJa5pqVHKkyA6P6uJg2VwPq8QpZufyoJYPmus7cLo792WfwNfLND9dyyuT7x",
  "key26": "35AdfjMJiHHbX2DAyWL8sk9ksNuEvJDq34zR1M7PYNi6MPcRCkwW2dZBXwPWC9Tzr7BX8HqE1vT5yB8Q4QXqaeMb",
  "key27": "4CvYZHPW2YpQbnsfSG14gTuZAncAmVU8pmYufkh27ScZcP9LqKxUPmaCuK86hcqWDeHbfRRSGTLkExPcuirVSb3s",
  "key28": "4GcVdnsWVce4C884Btujdgfr7ztd8vDStsDanuuekWgYTqNTdELgyFvtdNbU2YWmujf5UJjUvStFfB16dtrPYiDf",
  "key29": "Sbm1hYBg5vCPtwb2YvuWSPrzGDzVAEVgewx1sPwHs122gpiqioFeJEhzy6xfJqzYRbCzotypdS6VUsUoDwTjTNc",
  "key30": "miqixv5PRdsG271UDFuCXx7kj5ZCkL75nTKWuprFe1iWf55wqcKeFcfBeSbhZuMhSmrd9TxRs1rNRd5m4ZwBoDm",
  "key31": "4mqJgaL2bLUAdmjdCcDi1Uz5s4ZMr5voE7AwfdvRrC1eNBinxuTArs3xUjxH6tyX9KF1UcyrmSoHsA3EPUiuQW79",
  "key32": "5SUHrUeCjdHDvPVkdoUtiUSJhUrwEfhjBfUFT4Qt2ZEpZbUeozz6bcgxGrS3YBpqa8PrzXDgRVdc3YdAoijV9E95",
  "key33": "2okCXNMMGc2CuesMrweCV24Q85BFFHEuWKRTD49wKj9WH2hJbZzZvSfQ66xDV7nKJNLTS6r9FJ2bFejJdpohmn6t",
  "key34": "rqAKWw9hsHct26ZmgxEN7fsNNTNSocm6qjuFbG29V4NCMAqHtLe8FtdmcqJaeE9QFxMErDtoEQC6KgDbYvRFyZ5",
  "key35": "5XatKAHAr5Ym4YFTrc9KTAHwFy8TkSX8JMYUxipKQUoM9Qqiytm5SxWWkd6TWF5jYKNsWcwMRMkdDgd9WAd57YUE",
  "key36": "3quEP3ULe6cdxK9DsZrxweu5cVW7NzER7oydcXppfVAEnhvoirrqkZ3mMJGa3AFkWr8e3AFCqk8wPPiVMbtCetx1",
  "key37": "3RVzXv1W8HJ7udSf9g9gT7Q8tFP72yu7UzZk8jHjMjKjqnV4iWS8ihvehW8evUKRoAc14YxZaFY9DqQ7yghsyXS5",
  "key38": "4z9jv3UwpisUJtkv42v8ZLXuT8tVmqbZCNS5S5KRHQ55FvhjFwwW7oVKaqUmegxJsFEzirtAtNJ93hL5CWFPhiAj",
  "key39": "219t3Cib9vFb7iAFS7V6BidTrakWJL6FHt7s9d69a4MwBV7To4QUtAqnXSKgLuQbH2kxjSJkbzLY7Smj6P3JC8rz",
  "key40": "a4hiJ6JQSjwKF3NyqkCQjsbo7FqMcq3sdF1xgzedxHmEVudTM6heqKnjT5EMwnq7Fzv4dnAqkjDMKNjk96D3Pfs",
  "key41": "2zScGgpgQYjXeXyGYq7AjNKvWUHF4iSnLwds33voanM1NhML7X8dJ9rbL4SXgGprWmoMmMw4P3k6CqjQz5kR6X5P"
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
