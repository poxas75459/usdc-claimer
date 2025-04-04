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
    "7Shk6maQQvZR8fZxybDegXKcEBmkAaP14sQXipMfYmS57ky2nuJwmJr1assQYpJZKJe332BE4E2J74pXeSJTJ4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "omQXrTxhWvigT3Eto6XCERistdmZeEGWBBWiFv6bPNnsu9MYVXTz2Fjc2Z6Z85EN1PBU2DTWniZxufXpWWAjpgs",
  "key1": "67RTFGhtApmiSSAvvPpQTDyw6YRZeYKanAuJZnUrMGKRGcAMd3UN1KMVT5aRA2xVRhrEzPEjmvGGfHXoMGmEPdyA",
  "key2": "2BNEYPywKcjSr3BY3sJVTBMmmpihaatN79h3KXNs41zwVvchEd4n8kdFNhEDoExJM21P97A7vvxXt2KH3UycxTS8",
  "key3": "ixZKZf36kB1zyKCFT3V56Cw5V6X7KLftsF422FvC96LrQpkQeAFJo7vzaqmGJovTF3r2stndfW7JgTWVrfJpJ5x",
  "key4": "4z9HpSKAHPwuoLcNqS3GvcD44shBz2qZB5fK48HtUV3s2EytwNYPpeBh5c1fjeyurSvjd3ek2rPU7XeXfsKFmMTY",
  "key5": "2nqQWLHAnhzGGdxHvrbgiZgzWbYCzjQZC4VCStzvPwT8k1b9xGjocfg9nmxosRNZzc42LXksHrE13pCwFB6Q7sxt",
  "key6": "4CK6N3sZMkd226jMaHXnbwXC9XPURtYCuPUExpkwKY3Z1gygKPJmDyfqseoNdab1hV2DDyKEF8vfVmVzbdCiNuvc",
  "key7": "ahdH3otVunm7WFuBPfGokXjZHW9xohdBbuDJJ9AQzaWszLV9rRNRprHe33AHUdxyVXXfHgZsEGeUznTJ7VW5oZ7",
  "key8": "3hS5VHQDBif33vwR2BLYDbwxXNpGBL1xGZejzbjyfWiGpNoptP7fwmzKRZwnTEEoqthp6dgPsYHcHbVust4tvNnT",
  "key9": "3konm9dJYZPrHrgbxbVAUoHqE6fHutxy8Y8994CqRJa1zT7nEHEskdu8xioKX6nszcqhXpwwbrGutYLycBWhAuPW",
  "key10": "5Q8vgeBGGLhCoqLyGF8LYawZdBC4yVb1xR4mzAEBua5dmqzioVZLq4n5M7qRX53sXkNNVL6QMf4Muq3VmGqh2Pdg",
  "key11": "23VBnueEnycvdtkzKmx3LEivndLsM4LawNbjxE1pr7ACTHp4yfY2ey9uvqdV2wubvpisWJyUPYg5vNzSH3X84xvy",
  "key12": "2zPRrfZG7EeZEHCV8kwGPkFfGoKu69dFAH5M5fshK1BaYSX2cvfVRF9SXaqnnBkST6T9qd7PMy3N5jfP8g897SS5",
  "key13": "qcrus7zmA9L2FXzsA9uTG5fi9ueMdDtRW9qVqXEMHZQvQh4VTNKmAbNMjnx4MS9DKexbC2TDTpHVoxL8yfiZ2hi",
  "key14": "3VBdM2T5tmy5o9kyu8AnAQbSt3xy3ZZyzJgAcbJ9fACBLh3S4A6yVxTRG7wccRGasKS8rx3RYazySNBJMYVDnL4J",
  "key15": "Kfdo9P8UNfTvTwh4kNYxK8DX4rQ6Mk8FnagY7KYkZLRWpPcEycm4JFp97tP5S95kXKsXkTrhYS2Cqwf92dCGJWJ",
  "key16": "j7RaCaA7bAgyEfbVskpG8GpPx79qypnefPkWpbiK3GRJoxWx4AzGAkQuTHGpynuifYzkm1rdinchr4r3Yg2Tnwx",
  "key17": "4FQ2jyuNu4ETn41BUhwCZTi7DMjrJue8HJj4ARyWwDnk9ScNkm3TbWnnqg3yw7U61s3wmghpbJJHMyWSJ2QD7DAQ",
  "key18": "47jwaxuoHuGGeHEYWkYhmbsadEYzeHJZ4DRQuvyChXAFHEnv5DGoJLuyPoM7g6YmRgHZTQsY1T1gjLiQUAGP4jjD",
  "key19": "3f5Sn2TUQJfkRpci29p6yoM8hrtmxWRt9C37YW4HdibYywTpVmCNL5v3RaXz2C7P1z2bcEgGzDbAtuD3mGRWHXzg",
  "key20": "4n3AYPNDgLBSiSLJxVgFxoJ9atpPC4f4e3t43C1KaoKtDY2foTmXRfKMRvqv1bWAmopSQGzXQv1Lg6ihDz3stmKJ",
  "key21": "2CiWJcKMPLx63axbY9jXsoBp2o4QJxJwa6v11hMYAa4XLwq8uX2ArQhv6JpYAestuhwLVyxA35fnHjEFQPbXYSNk",
  "key22": "4txk9jsZQ8qEuHkErEopdttaAkiWTxTN1hVDaQJb39Ex4GneDDBMMZYK74DESJ3VEZ3Fuct3jQ2GpqKz3FD6Gxy7",
  "key23": "56NZ3ucyD6uNGhbVbKYkqgD2qxDhsR8f46feptqqPKnUPRv6CCAfqCZQmwmWWn2F3twJj59SgyQiNgXv9NxbDqrc",
  "key24": "2qGVPtEtvzCoEfZVmRKoSfGrfs5VSzRJ4iYyo5vmoLGSH7brnzQhAFipxJ2DnRd3iQCgeS3ioxWg6knS1j63AA3i",
  "key25": "2SDcT6d5kno1ZzjFjngZamcSkfYrNtqX3gSmZQPv2Q6fiziiXZtifW9x8V6Tyad8veYhkPXTrttKJor95oAGzWHV",
  "key26": "5RQj9Did17C7UrSgyVR2rLqjfW1aEABgZ8qKvGYs4mACjYactjNWFdQW27SDSEkdRpPc14JoFWyfzSyDnKecYUUr",
  "key27": "5SnVwYEtCMzmVk4MzeCss6MH2ew7CXYYPUbiPEAHZuz8D9epkNAKgBGzWyqdvzAkrRRVKDn2Dprw1WrSw4FTgHPG"
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
