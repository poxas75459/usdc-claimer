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
    "4SDPizfBgaLFcJkfGg8eHHCC97vGnBp9s7fqxqU2iPE3izX1fMA5qSDnfcoEqxafGQV9vjb1GZ2tbS24erNVQQaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WNVzQNdjvQQXCLyYnujDiPCH9N6KR1bKhL1N86pTFnZixyMFSaHEofSkx1bovikZEuFdZQB2NDrPmQK7etDDkuR",
  "key1": "5m7WTAmCt6wApz2GEfQ9jXfptxMZ1xPMFByR16ABYj5xNqQ21hDYzotQGo2nbiaLFSaKhNiG8bTK9rVS7Fmmx73J",
  "key2": "4diQjSpcuE9LQABRJ6oGKZvKKM66dUF51LDugevT5oeXY2YwYJobrkCGr19KX7Jc6ZTokYSmmL4hCS3ufWuszx73",
  "key3": "66uk4B7ZcgGqHW47b1Z1ZFyyVPfzeKBHDSgG1NqgxqodAzSKfKC3DoAACJf6sTFG6rnWxTV5bAzeDn1pochBzmCp",
  "key4": "4ffoMmwXfjTJKcSCExLvPBVmNSyHwKs3o4YhnNBqSrnXiUMyCkLCELzk3U8cPvYfDtswaWm4GdM1DSnJ4VX2vVi",
  "key5": "J8zzadBpgzcoyoHWzQ8baKxgEi7HERkJnRkaGhJo3PsWXKDw1TGyfDPwCr7EdUszBP232sZhvNjQNroGVPfsLbQ",
  "key6": "1sUPpoab1MCyTckdMZBW1iU42V4ib5KDP4okA3stfiqGGHvBb1fPfHmm13VdLd4jDuzaSEeknryhtYNhoe7Md8u",
  "key7": "4ji5T9JFjQzk3sDSmBEYGHZk9dWU1ZXNUQbF72JpJT7aJSFKjPzdGrpYk62mqnFNt6vmr452kcWr4ZtU3DFqkQp3",
  "key8": "21hhvXoHr2FwNpHmS4fp7sdzqb2ZcrMEk8rXtZ6vjSwEabp7az8vC2aa8VjAdN4EPGK3h6rgkp2s8m63StT8RtXz",
  "key9": "5TkeqFu4KGT2nhP7XGTQ7xpXe2C82AEYVoYUdUc6S1wip9W5xaz522HZpWX5NP5fhsvYManRzGTHirHBGDEsT4TN",
  "key10": "3bHjHo8xUwqS1SMFgSucHn5ALL3w8U2kABpAAMcXd8X5Py5BHdSgUVJAS5BQivsoYrWMxcrZprAMNJX7DQpaoQyF",
  "key11": "LczqWDZXty65wxQpp7wYHvFNQtRpp7t6d8x1dN3dYexTvPPYfrrEyb6833STXgzTVSDHnDNdQQ9XpU1tDAk2Sgo",
  "key12": "2f6DhGLz1pwd8cvLB9zmv3pMRFv4LRMAf7VUPnxswhVfjo1dqqCk66JEqcxiBXydb6obrsykbNneQvDzcKQEXhh5",
  "key13": "63FgmQDWAaAGYSSQKFdZHKRJ9kc81gsnN1kDgVeW9kdxAktWKuRSSt4AWmrFwqXMTY8Ew3hbC4wXT4BkZe1McQFC",
  "key14": "66k7eR52YKph1A6aPmEgyFYGWgpBEF96rVft8YrPV7FHjiBxfTMAiF2xgp1A11VFmyhZQhxgKsjbwUj6ksqgsvuq",
  "key15": "2aRFB5kE8djwWHjqUWEHt7mqVeRRWG6mhFrDPgopKRkc6WznBNqgfzvZSadhwD36Yz1LCjLYozzB1VExDv8vWcv1",
  "key16": "5bEbBFsJV87nsdKyJR37f2mzKj3CkpXL5HuJi3MviqGYnTfa17a4HQDGURd8Bs3YT642u2qChkQe9CMUv2nd93Gj",
  "key17": "Je46dT4a3mMMZfogcXicHhGJ5YqZr1CL1yMQq5tReBCeWAyZLdzQqtTvYBUvTDUaqxiViA7ooiFvDMMAfa3RSjL",
  "key18": "665G8esxT6vRxkLJX299tLokknR9nSdAjCw1GXcGSYBPsMr8HQ8DgpcxHY4uX676sYGtE4SSNMmmrUkiDV8HnBzE",
  "key19": "2gChmqjPQbHstj7bSRxvVPRFskzJ6GoNqKkuT2kfi3LQsSbxCt512wPNDd1Zc8roMSZa1y9GWKeN1HVX3c7h6j5m",
  "key20": "2yAGR19KaSBazLo21JdQJXfGznTg2wgSKXWhCs6Y1hFzMXZFRTMF4UPGZ9EZwjP8Hw6Xa5SKcJDrFejvMgRCHKSP",
  "key21": "5pTsoBRr9ipzQfSNhZbz3CSpsmh5dUc2rsJdsEEuka1sdHdphQC7oLRu4gR5gyZAbej8wrH3yxdBZVddtqMRsxqT",
  "key22": "3k4m1uhC5aBe3dSt9dNDAVNGNUMEU5FhUpMfbdNZ5WUF1Qz36DYqENM5qPSo375VP7eNx1nYphYj6fEnPsvgKhW1",
  "key23": "3eue2kXZ4upp3dnGzHUyLe1mQsknNG7m4Ng88kBiC4QA2qLwC5JzWbXND6gADg3q9EK3K9Tk6BHMYVD1VvB1MU9p",
  "key24": "38UvTE4ge2TZ7wVvZ7f2iD96dxoKdvmCyfVJeKxeZFgovRs19QMGxhLUqM9uD4EHbHTxczLYNi64pMQ7fsBG3rrZ",
  "key25": "3P1TmzwQ55MxLjEN9LEJw61vj9f9S6cGnh6Coxri357UG8F3AuXVXQLAW117decqcaouWYCVY7m4CPPf2vdj6EMa",
  "key26": "5sfEnbou2W7cpGmJXg2Qxtybqwm9ZudyYBvcKys7WMaANGXwLq4BaAY2AqTr3rbfERov4wECW7CJh2C8ECGnTg6x",
  "key27": "3tCgd5FBfnM4NrS3xRGrwRadpcAfgDgAfy7XdvGEBQiSEuunnmAPxvH5CwQUsstzQZinZ617iTfKRiugHStTwgqs"
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
