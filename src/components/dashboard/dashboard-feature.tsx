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
    "2af48FNgfJPTNMYHn3164EUAYLRS4oFwMXD7pAxZFHdB6gRFUx1g9sLJXN3ZgTWnvFSzY2LnK9USjbjfFnRFTp9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bfqUWQzUcN1NndxKqDiSiLUY1sS6w4WRHceiJ7sVbxirJGNYM5SbryGyjyWHcYkZuzqaQLvhQxWRbuR263xQLsR",
  "key1": "16pKxt9iBmbAPdEX8Q9DjeV8m9GMHpPezuwHBYJEoUPSdSUpRgiS9MeRnwWhLb2GAtdbhzHdZPP4ZBSAAVxZRDA",
  "key2": "3hsRhNvHZWKPJkPYVbKHSCbAiSkerqVotTyHRoXSsW7FTZrqZZLi4fnpKwF4XSby4z3M2ePwQef9Ta7AxRXGLTxL",
  "key3": "4JbHWPBx82TD3r5ueo5aZBAxoF8WvFDGBX6zdmxFXJwBgz181CQtLaBXX5R6wr3YQsHzTNBt3RZSUzLfYHiu3kLU",
  "key4": "2MxCpP9HdhFZNTEgGstUXQNDn3oE9faE4oBVu7cXdsoBHL7tm1gdcvauBtnYjfkY8LARQ5etnuT1MyDRvoLAfqku",
  "key5": "5uHqrHBv75NrcNcT23AZvLPr1Z12TaMNsfieempGd3qjWRSNcBB6f5j9MmK24hPLo9Y3ASDqgtgFr8YN1cvfy7kG",
  "key6": "3pUUxTvzAK8aKgH3EEhtz78m5fxxFbL11eutGUDY8w7PuVTHyNLqeC8dFtMZjKyTG4mVKWtTaytRf4KuZR9u2epX",
  "key7": "4FjpR55ht4GuFALqK3A25cx1K2Bfk5Q12VX5pG2X8p4GucNuGknV7v2owWnSE8afwRAX77shoQVq3nAG2UCfewzK",
  "key8": "5WYC8x4cD7vckTmm6Ky5dtka17Z7cpkCZ6F52YXru3oQqa1jqfXR64j68poEHNzwCBEvdkRHNURz3NKzEQu8Dsdi",
  "key9": "rkJY22vHdGUZnpoL23Qo2W4Y6CCQhD5ogivBkmHqanBhbebMX2UBEHTULNpHmB1x49R5pewavDoVqK6novTSEwu",
  "key10": "4omGmt32ZAErwuMdSUJoX8N8GpgAwfRbyy3N9dxC2GbA2tSfPp976P47py54hu6u2qv8us6RLn6iBSA6j8b8dc92",
  "key11": "5sSQuTV8bFwU8HoF5GESvNV4NCGtoMY81BA5YmzTU6UKxhrawq8BagiK5F6Qp2or4ZnAnfCcjo6TExTvbjkUoeAE",
  "key12": "bNS6BSsP8VgWKHTnT9RSjFpJ3oe8wgbGiGYut4prZNyBFpG4iKE6ci9eNsFjEb4HExPVSGA1PsrtUgg9D6VmyhR",
  "key13": "3ShuMpb3PAgdMpjNariRUxKUSUKaLJRm7fB3teytnp6gfpToi8XLjqq6ceW5hWBeYMYw2dfhrZk6WFfmr9C2VSSx",
  "key14": "43We4c7ZczWCVCQsq3oAdn4vVGfrKD9Ebt4ZJZtMAabSMn6gSQu4nDZ2FsEPJBCkC6VztvwmcUqG2Nt9K6d23bt6",
  "key15": "4roTV6vuDuPke1denc2PfGiEddDju8bJESFNp37PyMkKZ1C4eZnbQhK8VjZdLDwupeubmMGWQyx1Pic2zFmaVrw5",
  "key16": "4zdXK6HjTJJqH3cNLQNdYBTAiRLBQsWtsSf2wqF6kKkoEBbxVyFwAJ2PEU4Js4DexQFdX4YVXo6rYbpZaSSWeYmi",
  "key17": "4YVFVCSjZywYie5M18EoVJWDAcvBR14UtqpC887FfCGftZSY5Vm9EbybC3xt3TgvEDXyPyAVMfYsouCYQWKkmbQu",
  "key18": "3NXB3JfCoRpNNe1C7whneRXTZac1svgKGEA5AjFPoo5iZ8PimLGST6BRYQSqA4BJDDKy8uqhiXGmRRYoDtgotAyy",
  "key19": "3FDyv9NP6kB6JBb2rNGSvsPmcXnUAZgNtPiRAFtz79XQzdFzM1CVWejjLXiTtqVSFSLnfarc6aM2ZzgiSgkGYsUk",
  "key20": "4YTSxxRG2A5ze6Ke2ihHF6pjvDmUzhBzmBDoVokgQJFd4ayTec8wQrU9tXA4j9wU3WyrbHgtFCrJi3xpDvvVv6Lp",
  "key21": "2uoycRFsBrSs41zGbQ9GBmfKbnsZvMANRhy1JtCu5aBZ6csNyQy4RXqQ24bNpNp1Rr7LXjvqFMt7rRdECAocU7Cv",
  "key22": "5KxiTKsDuTX195HzSXf2GuQCqvEDjcrs6zmUqwBAJJZAKdddY9wFc7eSsbKWkWbqHDY2uhxNpwfu2PgHPSSuZmr5",
  "key23": "4LfyA34iNRJUDeqC4qcthSGG92UXC8tMZTxxPBCj13v6vgeUX7EDZL1iKMBCTrjYSrG7nZNxzQYGpw6dtTmE9nhp",
  "key24": "5dm7sBkk7pqLDQhnQ1QgnbYrgDpx4D8tKWHPjnmY2ecEv1bf2osc3cAwGmWqUKH1GU7znH5WnFtpbChgFUL57cQF",
  "key25": "xpxneQ4SNke9wko7uuF7TDSUmqiLy72hHMS2gN2nb8Dvv52R9Jv7VXHE7gVXkJ2jfwHVhzUbZmqEsDFM4m4BKLC",
  "key26": "5DqndyA5CFuW7VosVPK4kbAZ1SGD3JJBCsMDDeucvzW8PnHh6RT8sKSzckbW2omnF3bx5Jbnj8Au5cEn2YrnJmHQ",
  "key27": "487HLX8rADJ76WeErPvUoEi2Eg3bq9uKAnjKjNoxrX9bi35q6qCKk63p4XQuRtSRnDE3Eb9H84R9hb4zHvJV6BSP",
  "key28": "SgAkKPHK8dknNoA8Ax9rZZMFA1DwtDsd5ntwNMGmAe7JysndtywwcCjxF6fsicyWeL3oSawuyqZYqid3rRmU5kR",
  "key29": "5fkxjHaSdSPa2xgkTdBvNjjhbtUnYhsRTGxh1GNxbbfAfBtrRTJNtyJ2XCUFtXGBzhby9V8gYpunrbGRrjbZHQbW",
  "key30": "3F1x7tbtF4pcvHq4kmccL1nx82Xd28uuEreMHfaz1mxv5DWipi9ec9g6i18FX1V3mtAjoYPTHv6pDhf8XSqFbdmZ",
  "key31": "3tUqqzvqa9AoKnJLDTgvhLXFNaA5HV9GeAuv7T4JdsRFEy5yLiLK1zixKDP1AnceiPfVpSjN6FUrsiNdszJjCyGP",
  "key32": "K9seffhdoqNr59DwmA62rHuiBWtdbYG3qbgzZpswJNm3QnPFfYRoTMyiJZfiBc1NToUUAFMQxfUf1oDV8qHAmy3",
  "key33": "4S31cR8pKCRtZXwZrt1BArQhHPz3mw7iSQjRUgL69bZKWVNmbaiwsQ8s6Whx7hhufHPD6QH9fmESNuSRkTMmU2h9",
  "key34": "NDL7cTG2W29ngVAiuvR9eUWCGAP7gB15Xn6n5W36uafYEfr7qSwUEzcwGDSHvUphNwiDjZzruz2LeQLMhNnheg3"
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
