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
    "21NSVfpu3moozQFpioobN6R1p73sBivaG4ZFiZpnXT5Zg1txyMWCW1oPGkg9mmrxc1fwqB4Fed9pb4x9fevQ3YMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nf4cvQ4oRgoWFSgw5aTaN2eaYACWiTbrVB4fkVynfLkhd2YVYHAXtKLXciSh1SRLQi2GGWXocdTq6X36feEPbMk",
  "key1": "3uqpeMm5ypjzLjFeXJV3nzx7K8e2xVYVZ43PRoZLvvhY685PJV25yiyBCoP96R7NYy5QkZw5KnEAc465b7pnMj2K",
  "key2": "4CHSSBsybC1wxMxphfLbxvqoFjToV1snMFNqNPPWaCEP429Zf3NRVXg93JcDg1frwGTxRxt58PHA4iW7xnQoxxu8",
  "key3": "6CXBtQEu95YeiiXvUSUugB9ghKXqrwKSaZo5cVss7Zz4q8KqPAk6mUxu1HCs4m43phYGh4xzJ3zoKHHaSs7K7Qe",
  "key4": "45e3DfZJ2VPHUrvQfmKjjBwrTuNU9QHEjzB2U2NTdZ84gEpJbXd5hdQX9Xf2pMRt5MajcH1rMr8Aaw8NZ7PPNw9J",
  "key5": "aoPuFGNaZrci5EZmxHVYB1GsWLKFLDNc35xMSGr85Gs9Zhdyotu5wihvXTicGK4p9ngzieyesaRgnRth9c7ueDP",
  "key6": "2XB7VPMF7TZW6DdJB3hhHWP6ZHz7wnVmhSChtXu7w4fZE9F1f8fkVRYVacVDt6PwPs9CDaBmBwps2HwWinyVVc83",
  "key7": "3C9riUv1moMt8iQM6S4A36sHKJRqdVgQq19EcYGH2y4LJnTv33vU2Ri7MWHZepnF5AzDQVbeLyUcTjp2jv7usa1K",
  "key8": "47JJS6jREXdnjgAxvjyLHPLVWSdJMujvTrZ7DKASSJ9H7uFi6zTjNjTJE4p89oSaqGDNngposhuoeLbRHMrAYncF",
  "key9": "2QgYCHHR3W9GuDbPHegtJmrLVboX19M5zRvg5WtDDfFAvdYms5ke3pKABYD3Ewq64wJ47YU2YfR3DDg8pJtzMDq4",
  "key10": "5PGY4xmGQzqrgVhv8HGmte7CDGY99M3gu4dPajKaGGX9aaSsqFvqNhpPcQGFfDtqvePqKm5LjFU5oYvsKUwbUtdV",
  "key11": "3VNtAoPBKWYFjSLDZMF6L7gkZhusdEQ2VabidZz93uFRksK9M2wpLkAEf9f9FJzb94wGfRZVp3k9dc1eq3pbT7p7",
  "key12": "31Mat5UYFcWk11VTk3aq8qxLW77hAh7KKZBQvgs9o2p5Y56DKY23S6RBEDBgo6se1TckH6KE1CjaUBrFaP9Hjrw9",
  "key13": "3XBD8WxZg5AvxeozjcZcRqTfJuXtWi3GgEeS3xW6cY26HPpGfBN9W5qgnBq7oD8E9hZfrzBDYg96Zryvhte6woYL",
  "key14": "4uHNfhkgzmjg1TfjS9uVXcgucsvXfiq9iqsEoaP7aGmJeNwyFmC3xPySGo9BsNpuABgNYgVstrxWQBC6EC8KEHDW",
  "key15": "ggfbHNVPC3sPhjeGYMiUMhVAftziGmFe4ov5yw5DLBZgr18K2VfucQrs3vzWHEqDUq1gWzLdtetqRtiMgkjztpL",
  "key16": "3oYnAPYt3Ytonnn5RgrDJTxk48v9TGQFcKjX8A5Nzp3SRHsfgfWxH4k7tM3b49sLaaAJJ4jU9SUGDv4fNDwQ2Msb",
  "key17": "33HQtpqgphAkAWgJEvzxcDdrwNMzcuxGViXGjNoKmreLf7B2BZjNnNBhcJu9bPmAacAGsPDZaKgzLhPUYsxYXMr2",
  "key18": "2Fn1rTmNfNAVaGP3G2xUPJyiCViPHYqPsS8AxEN2fJ6hoCv6s5M6DCM8LCCy3i141DLDVTa678NFKX7nYhbda8y4",
  "key19": "2UoxvcGRAVxSrUzrHd6dAybzaUusWt2GB7qHaiK8DA7dzQWXnoaHL3GNuVbbXG5L59CWWGFuLyLYGBogtqCVz3Px",
  "key20": "36Nx8CVmhbAHAZCenEU9hyrjUAUWSTUmELGL9QLmWKYA1DaxhwDREdSDpoUyicgaAHpgf1bvjCkFciAxvGYzzH45",
  "key21": "2ZgmFuVjq5xEnaMLFNzntYX752GyDtwsoDtjkytJY2WPyCfEGsnArwTkRjKMczwjVyBC7cp9798WcwLw5aWaJRVJ",
  "key22": "4buSiuC4PbvnF1BHW7DZnivjESZqur52wxv67QgMJMz9EtMEkRHVhioUrMSuUsGGrZniyvby93S3aGZSU2qLbgoQ",
  "key23": "4E8RsANi2Qoqwc3MhYkBUwqqE6YqLJLEP6xN6VJ8sijrUVkKh824qCd9C9WiafKZEgQP66FLyBBxk7aMGthiPZu2",
  "key24": "2sd4CwphUF9CiLw7FMbn4VYA5dvMM347m8LRpwZd32ykTZrLvpUZXjmBbrgLGACWDSh6f9BGkaYHDoHDPsaziQZD",
  "key25": "3mgNtFjXqg334DSnQH3AJXt5CmnyvnwJWQdrCm45bvMnYzNdto2mu5LCNcaDE9WdhQckKkoJqXGmQbJU83apLw5X",
  "key26": "4R6BsLuhcntLLAyi377y4bwLWDVeExmw1uG7XdkzzTiV1as4emVzhHizFh3dfYErdQ16GZkzjG9Snc1UQnPbtCiE"
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
