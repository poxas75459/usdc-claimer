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
    "3mEj6a3wr8txFsQTNpj7RpJAWH1frRABc9u9Y5F6iZSjbeLSq9nwka6XBVQjrxfLC1actqJh1ZDs4G2618ZNcjgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vs5jo9nUHwooJskDTAEua8NuTd4YEqXAixQMYgvLKV7xjaiXuSJjGezX45HR45CxhZLhQePt6fKoL6RKEEUsdus",
  "key1": "4ckrJsYYSY7tzXdtP2HUVgvpqW5turVDmDdgG2QAzYYSSLtN3B7wACQ7mopTuEx6iSNVpFu78nTCpJLUmSTJS4DG",
  "key2": "2fWTNN3X3Cn284htmMLKuCjrBgLTYo3TsZCQNEyjmELSGVm9VFHUQFHZQn1WqBAAx2cCeujkj2HA1y71uVazVJEM",
  "key3": "3qjs43HAZ3fX3akrm8LBJsf6PV1D4n7A21LBoGqn7nvmNZEesCAEH2Ua8PTC7oX5DQx9NaELBEE3sX9LiS9FXeKD",
  "key4": "2jEMvbyvxKyTKfZHH83U9cFdajxSiatKkinwS9j6k7eSaNfWVzr8f3qg3skZS5PXstZbrnLsbgzQLh95txwQCnPo",
  "key5": "AjQFUV5yTt29ZT3Co5ujQ9v9H4274xXrsqvdSk9tVLpSBCwTZk21PuWzmFeEV4Esj5fkLYuZXtM7TF2KLJ2PzNw",
  "key6": "xkEDeMCtvLBzKe1c5RwCNad1T7YpVvDd2Prh9aBxJkBN59T3BiiwEz4Ej4YDSAPKc1PQiGp7VRb1wosrJ9JV4ft",
  "key7": "3pW2WevD6UgZbSCZccJQ9HZPnm3VeM7dJmtTJUCVj44wVf74Ba91S3DmhmwhjcZW7236SaAJn6U21SxuisSoyvAL",
  "key8": "QPFSSvKGLasVMX7futHeZnBsozVPEKqErH12bWHqeZFkAF37VzrgKK5f1KPtBZmVen15F6mr5NLJRmLRTFEhZsv",
  "key9": "eSPdZ8PFhLne9pZ837juUAaTVfaVaaUTKdCTLP2udanTS4gQhtgP27LqWLDk9MCwDc66ozkZ49Yi2Jrp7EB6tVk",
  "key10": "5aEuCptyPLmoLKrrYPWGwCwKfqQ2qfo8gbj8som97x3P1ijfSe9uepyooqNZcEiWCr2MLqymfhs3uQGrxj4wvZ63",
  "key11": "2HFcSPsDMW7tvzfhXRGi8MmjqXo2Fui9ActdW5wQLn7nzgNGZUkeRQ2aAoN7A4ZwFGF5HLezwe1EuoxAz258CRie",
  "key12": "5jaSoL8SNwjgvnpdprrg8Gxi8KEYCgHMxWKiiXhShkQ6kF3dzAo9wuPMPxsYgrdMt5NWyv1dNX5sciVmH1LiDAwQ",
  "key13": "5HE5emuPENM8Dbr3EbWDcXHLFgAj6AGd9JxCLo3wtJV7XwVwoDgQ2hsQxwWPYppEVN8sNzvsF7VHGxg3nVcKezJU",
  "key14": "5NjWbKDC2cK58tUJPwUwqiAQs96Jsaw9uaSgN1JbHVkEvpEJhQDwDuppf11uwTaNmjJQv982jAfvSN6BRxgnXm1Y",
  "key15": "5kuXJHzoX57fCeD88aNdogDJd2m6v5NX8A3p7JkX5ozvvthLmTGQ6DSsiPMAEPiTNUhaNx318VgjUVnmNuQF3gVJ",
  "key16": "QkBk5WGNgLDNzYVH8VkFhVMkdGcyHYPZWbgiKtQsKdZoa5vvj2swtvARgmfuSnTJdnUdxcMX69WdtEfT2fDakVF",
  "key17": "t6dzdtZaungsTzMNLgH1UDfGymEzZYbhAcEBTCVAGboc3JTZRG847N8qJttcvyfVePFbRjeyiHRaVuuh7DfPL7y",
  "key18": "2RiiVYDQrY3GkDst2f57DJznVTkcYgHqJ3wEoKHE9fuZQENkxwbrKCYeZHwXyUu7ZNqREQmnWkJvszPVceJbsiZw",
  "key19": "64FHPA3mhxkQkP34M5z5fpu3sJJyhS1LD9A5nCZTcohedyYNM8pkbr6743KcH1X5ww6292DvGXgVxf3DApFjSDWa",
  "key20": "3PHBwkYeXAYW3cvq2K7Y3KdtLraaNdcKTYHW3sVCu9JL6giDLPSzXeh6YsaDHvps8Mddhk2gtA1HGX4tdi2poC7C",
  "key21": "4Yc3kRAiuEyyy9sQc8k4AtErhS1n4uzvtKCDVPDPjRf1ntczrMbL5p9ZDqT1AdF7NjnVDAwYxndJX43TKMDSMA1f",
  "key22": "4FKg8ya3Vc5Nn3XusftJihCW4nPLQLwEFWXcToZY86k5QAaUJoXxARbYyBPx98M9DRh4ky9E6cAD7MQcmXVA6KaT",
  "key23": "42rQj1AvRLw8omX1d8A83eNanZvWR7KSJCLaMkq1TePzLMPNthaHeQo6MfrNgRLUmfNx2oKLrpokeAYjqfauaEg3",
  "key24": "51jy5g2d9bNhL5biYaSddLJrMEugxHHHKfE6PvfGYcWkFgrpgFAyetbokwG6V6aGDDXcLTrjpw15tN3E4Zc9qzh1",
  "key25": "4GypzcQgH3PuuwsBEj5DVfWVFcX7YDnfjpE4nCjaLAuEKAysEKYFb8TRb5Lzwp8BXtdtciaUnHSwNKmFXYd21957",
  "key26": "26ucFRcRDPgui4zYepRiojWSn5qcXi8jNkbj9yESrY35qaB7HqV8dc8nan9f22mCrV5FaxymjewJ58c4wZeiaC1F",
  "key27": "37S6eGtjuVg8GnjxZBcFYKuK2oLp3HM7vX2YBa8fHHF3FTa8KK1GL6M3WKrBgULTWz9XSDExmAWJKPv8pry2xPue",
  "key28": "59UaCxPJtsv3htgMqbrY2aLQRqeRJFcSBecmrRV6ZoDZZAGP9LS7DseZuCdJ5UfGayQjSqkURyqg2zUJsUhd36fL",
  "key29": "3ALZ26wieVbhqwWUhu6LXQpyrdDDSxKAwxwwcQrsqYN1uhJCCJoCr5TjGigNb2wHyyKtueszPyRR6gJwuMQRK5Xn",
  "key30": "zcYMnCt2XA4UXvv2WAha7Aht6nugsMfFTaWZPusNnjA75vJMCKG6297q4njHoorydeqCdWFSuPyDmGbaNJXw86N",
  "key31": "5tMUskX9hsz9xn2yHmrMLyYsEcRYqo18nx6rj4ZtiEyoLjV8Y86X5s4H9MkxTmu1WZZsEQ4AQUSBNf1WYnW9yMmQ",
  "key32": "7f2rAnfsB6PUZ5Htj8KDKT6NzNTmGowiCPTK2Zahps34o6dsuxdFmC3xTv16VRBwFzP1FzVxKsnUdHB5gNj6dbp"
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
