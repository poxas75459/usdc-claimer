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
    "641x6EZWyptZKYGdTTwY5BHjDRAba3e4jumQAmW7xBeqZLxYA2889mTFAV6EifQPQSUFmUnjrvgMuznydoSME8S9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "96hyRRB3KR4apPGULGV9Ns1mWZd3mSk1Zbw9vntWYLUBwVHHfiLB1geAHjfQnrc6miiY1pMmQt7NZMLxewzURNL",
  "key1": "38EDXXbqu63zgqk63Deej7dmhwFK1aCsPZqQ8YfrqNgCciyPvP19VTq2Bas6U1U24GUpFbeb4N9HMfzSb1jUKtEb",
  "key2": "ku1VCdkxDTPuybBpWCi4HrDFs5HwLYaVzGrbusVpecgdkos9rxjcwEUShWtaBoKwVhMik1TMerV3CyzDAZTJ8Ti",
  "key3": "cBJwHyknsi7eoQXRTmyXi87NdNgpZqDXvcehTVefbf6dtFUn1XGi92rKy1zf3nvDMaaEod1DSHjF361S4e2aTok",
  "key4": "51UVfnagSark25UWT3a7uxzi3rBNJy4JpHiohzJT4sJUNUq46C1Nm7WmTWM2ggF6FakWVRHEbbhFmK4n55JQXmx4",
  "key5": "36byQgsrVzzUnNBvKHXhanrxzPF5yedzrgJ4g4g6HjrZC5sJvFnB29oJcaUNM562FRJP7DBb96nGeeg9yQiyzpu7",
  "key6": "5D78LrQpisDHgeh2vB8KGDJ4mL7vLJPVBN1jwLvkuGNMSbWVsGQruioxEu9epzdupTTsQBTkgAyYUEK9F6ME8eoD",
  "key7": "5Hzgs6tmNF62P2tcdyRY33SoFh54JwsNego9wUpcAEkEo4CkXUT794g4HWxNLjdWyZzY4eB8nyGGXuVYtmWJPt2W",
  "key8": "2Fc2Jj6ZWsDu4pkPMRCQSbhEfYFyyX7YdDkTNEX2kjyhZ2u2qcTk8qoc2uRBeyWxc6hq28Wmn2w6jXh93Ppfu2fD",
  "key9": "3weGysLNprQCJ91tDPi3WQN77NKQPdxoSkPzLz2BaRRbuG8jJ4vmqmhUnnWdA4Ybon4Vu7WtTipHg1GvdCAM9b6T",
  "key10": "2QYJkaQ6voxKPMBiD4cKc3fye6GP6cAYXTVb9rQz4qZAJGGpfTvNTncmPRaSoGGZjWGTsyJd1eVFrV94n5DbGjHP",
  "key11": "3N6RZEeT2Toga1u8w4A3b1Fxjx17z76LZS72fvgLV6c9THZfhMXtX46SthCmPDQZgAW9PZaqAPw6jiWUemdUB6ZG",
  "key12": "4S2NCmVE9AYrhpDNJbcYUnhMiauzohy4Cya5HYSr2cdT73djMADm1g9qCc4Ey6NAroxgUfe5eDNaYrxmsxeJ19Hy",
  "key13": "35tQTai9RNaWTVmiNBmtKRdyJvDnNoAwrS9CWytCYKy2PfA6QqRFHxFDy361ZXvwkbQV1euysJtaXhkb2UuHed8q",
  "key14": "67TPB4dEbkZMcAmhcFFm3jbHajGitC39qvvzWakxiGH26ncQgRcE6CH5r98LT6v1E7iuezcXqNTVB4JEnzNHEZTp",
  "key15": "3Fi911vifMeRg6ZYHAUUXkRCZoJUUaaNadxnx9eMWRj68Tu4E85JeF1aX6Rxh2VpFy3ZCGGftXrVknu9MdcHrUM3",
  "key16": "62EJKwsAUH6kPYTGAmW9reMkaPE3yZPq8H8LJrS34r1CM9QoRMpxCYerh4VG2pSMHqZVeCJGs1iF5TYRUAtMeGn6",
  "key17": "3mM2A4An8JyxpMxrppF7FQSjLu12UJE4kQa57UAxw79aekAeG9m41ZbT1kvtMC2oxPw1hntKXaPafmUU5rubY3Em",
  "key18": "4wVmXGzpGoVwZg4TTVAQj2gLseSyUdpmKb7LE1RzxRKwny62wYpa6a7goQR6X2Ejdw8NRR7jfbRPRjSEmNfiobdA",
  "key19": "3JTC4mxySfsCn2eeUGeZPMVh7VS57MnyzqwupUjtqA7skHGS4dYAdcPq4Fn9LdAAxRVwxehHkZwCnFqXkscXvuy1",
  "key20": "2shAetmgemiUY8NJCJMWAsHfWgbPJ62Hujqt5i1LLaFi5xcsmpgGJRCxMnQVhJwp9mtAeTMP8Xa1AJQWPCada7uY",
  "key21": "553xPe5dPLpYQE4FYDocK3BR3Y14AVjQKJA7GHV3iimv6VRmHiVHiVa6tdFtndZY91wjPQZa5GvBzsboiiAe8rDe",
  "key22": "3DBdvdgB8hXavPctwguCtrV28ZYx4WMxQ9JmyqurBkQ5nSx9gP7WSWUW3Yk5e8pxrfeK9FkE1Uiic7mtTwWV8QfD",
  "key23": "54wF8B8GjkUcE1PR1bKxcMfRnAEbswKK7mWDHZrJamtAHaBsmFgNCe4oJ55AY6GGDLAV6r8FsxGjQmixc4iuj1Rt",
  "key24": "4649SR7DUkn8GXhgEkSJS1VsUjeLTEHD9Gvi2oBpBUAVGR1ixjp38SqysjtHtZjbCUG5KrZc1GdWGScXobTheTJe",
  "key25": "GMkt752uFFFkmA8cmgsitETiZ19DiDWKT53XKXc6AJUFsrkXtSAU9WD8Vc5B7b7MQ3H7WZ2uL6LVwZvkNZoY9aP",
  "key26": "2vpgufdbrhKHmAMScpewoWZRdEgxCDdP41sf75d2mKs2k4QVG4ovXSYfXcUfQDocvtSGSQVF869twj3d78NVN4cq",
  "key27": "3cYZm1daNsmb4mX8N9sPWuNKVvBZLBQUsteus6JAgEyExw9ffvaE4VRet6NuR5ekHFHJA1MPJdf1L3fi76LSA2mR",
  "key28": "3pckLL8tFt6NFtqupuqEo1u5sdKfP7vTkocVk6VJcBrMbakwaLTLYB8wRtvNoC4Xi7NGDvs63cEmdzLPSzF4Q6oR"
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
