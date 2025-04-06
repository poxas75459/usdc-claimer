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
    "YrghrG6dKymuvbYAjifzK3NruUsZatJBsv3FQzFviMHKyPTDvLLkj4PbWv5Ko6LXCWLhaqEezNAiSpNyb3j8n9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KYcxjrCQqE1NLM39APU1ZCrVZ4bQtVSgNxDzvqBR4bjeBkYtFB3cpBQGE2G7zm3LDXUmaUYbqXxs3CeXvHqoNv5",
  "key1": "2okj7diRTn9AmiAhtY8XfrEDiUrmCc8P2dtAJ3nUVcjqeNZBgREuU2gPai9Eh9PJRkeYTJ1qAzCgs5sn2isAydwk",
  "key2": "3JJixUaj6Q4re17oEhYfc7RpmAJqr4XDYipossbhpX6MEzQ41BuAY2uAqkvEXCHyiwsv8wxLJxxksUNjQod451Sq",
  "key3": "5ChGUiiK75uSAkQzFt5ng1DQg6w2nykFeu2B27cQKRRhzNKFFP7VPaRhcF4G64Fr5eCEopMRnUfJT6MfL5bRqGqn",
  "key4": "5T1fH4FX24WpMEXsH49QsQcWvaXvhDMFLDE68LVioRY6V2FkvYhbBSPAcD9HcTePJkQ6LPUH36vuGRcF9naPyAug",
  "key5": "nUdHRB2c7gMCpiQjtZJEeTznmHYy2yiepu5q6cJrFUkg4VcNgSERhZiGLDgbQn2REhR4PJj5NMVV7rZiz61mYbF",
  "key6": "2MHNFEjmdt2QdynyvLSGxqngBRgaMUPmdFRoCQhzafKh9xPLNrTrzraFBTdst3eNouUy57WUNgHxVW7xWVUJqMTC",
  "key7": "4PSuQ5Q6KDK2rCzdwfPbdh3SNHa5rWnqyBFpUgYVFFmJ5KU8NJMnQKWfS2ytN6D4QDQKxVLNx2tZ4fxMF6b3qkz",
  "key8": "2GVZX5ShxQ8RKZPo17gRcXtcYFRGLzJQLcvzgkUoMrGUi5CaEoZtjEpjAqDwWn7XhsNxqvsmFiECNgytfWvMTAqG",
  "key9": "54uoRAuBSR8UbNfTAR2sXZziqTEFVRVNypc7Ss5Qz2o5aAcyKtak8GsuirbxHZmjWM5CEA2ajCJfCdxKBt42SY7K",
  "key10": "5R4skWkrsFiPUouA19X44wLFAD9a2mhX25PgaPoUmgRMBqi6z9zn88BmayFP4UrbP7BBerr8ZquugzXoDKq1rfnd",
  "key11": "3SHehThxoc42QrmD2C5LapcAhq3opp2z5cedAZvDgFzrHTh3KX3zs1WYZNFP6wdg5a5fSX9UTrhijrzwRux4Gavi",
  "key12": "29djKbb1QYkEozUMJMrvrJGqXCDM21foZtqSvCnBQGjaALKnoLNUnDMjZYuGn3orNnQ8TcS9zNG7MBV8tsyLYw78",
  "key13": "5zNLa4TCuxDJMmXpFMbgBpZr1yHM2AGnQFBoiCxeCCevXr53QWW9yN2F6xayd9Nw5XA2t5REqrmxDr5enZ9roQgD",
  "key14": "2CGxL16pDnv3qLVqJymC6xqQzR4swue7W7nTvfMk1r7ayjn4nVt8hmXxdXHwMG6oeqyZdPJKQxDJ2GMgoZ6Km58A",
  "key15": "3uUmyMqAZFAW2drCaqSUH6cF8gjpxdBGW8VDovVQPVejSzdRfaSEtT8hqJ94c9vaFTcQZh1ePcVxqxFaF8H5GaUv",
  "key16": "2YAK26LyUanJZJwrSdqVUm6C9KWMknfBNMkAuRVwcmjfCJ8T9KkLjDKQJz24hJ69RY4Ls7LB2NJ7uYBPDTYH48kS",
  "key17": "213SrZ3xcNqiLHg2NnkkkMU7rAvNnjP5q32PVGZmHW4z828t7PG79TjeQ55yuU2P12SFdkKiXSyZE14nks5AkbM9",
  "key18": "2PtDaguGHS9YJFrK2DBWwDxCznpXEh4mdBBy7b1qSpuRGoR61mik2L4LHN193VCcACPPAj7RH37tZoDUMHUPWChp",
  "key19": "Ya3TZAPxVT2WLhMKu7UMhe9CwUHuCxTMWVQeqT86eoNJZhcbqpkg7mytLLk561vvcwjda8BC2GccqiVFMfh9ZN7",
  "key20": "2KDtDQ1fE5mydb2rrzqQMbwdgTDNmDut2M7UsnzU8VazE7ywX2qgbR8Q2sxa77jyRsB6eaiiDJD9HS7zq1N1rGzq",
  "key21": "2BoYdVpebyWUTBVrHhedhwsXxvTsXuXdzmDra436gofjzWj3j1PCTSfy2BGvcxR6K9W777GLSbZDGs2NjY365EX1",
  "key22": "25RhYNnokmV4s8qBddjvwwg6C4s5boxm2ajRf1Z8e99xARK3oVbHAd32NVVrxVJKdDTNAdZMqP3ows6YDsFo57df",
  "key23": "Cpn2rfvSnWtVanfrtGPVNnyv1BHnJBbrk8ygPE5tFugpPqPkXm9Y7G2hEp7x3J64zXVgwhZhvZnD6wiTyNnTqjk",
  "key24": "4qSyA8YcZsTHMcX9mmEAcQXrduG6dD1p6vwKw5RmbuFdv2RmZxMvvnrEMCrwitGHNEHf6sDGJvQSRsyWGCeQr35",
  "key25": "2k3Dx2gWA5iFoy1GemTMNX75RMiwoDGBLKiBEh8ZMWJYthc9qcDYAeBAJMAdaUnUTrCs775kURck9mEG8Ej5SpX4",
  "key26": "2KM9CwntrTbXdtpHf7duPijMRMfDjaeusfDeDdSi2kYA7tqVJfgwZ1eN9wVS1PyuaGYYi69aPxcjKRJ9iSzgFHWA",
  "key27": "4YHU9tAfK84RsHi4VgouLHAUZ48JtDux96kWmNFY9S4MQMy9GKkCfvcEa18F8PD6KHEkR2HXNoEtwy9SfHW5Rdm1",
  "key28": "AQ6atK8BVMjyWSsoXmiuv3TfvRak8nBrt2dNgPKyPuDA3Tk86Kxpcy2pM4Q3Jvv3wEYBYu9NPWEv3ape3BtYtyX",
  "key29": "KYcEUAFVdj6hJMGsoX8eiZ66bSoTXpgGFN6TQnrg3asBmmpp1B5ZuTNsfXKqtj8gLApzXMDzb5nNA2TkhULjYpK",
  "key30": "3XksGorAH5ffQX8gP4T5YDEZ81sVwqx1SSJDWbStV6X2d1ynDpHD1FkeNqDxpBam2j3n8eXFDhoxxEjWfABCoDvx",
  "key31": "5stP5cgxHw8KDT1pv1BZopQPb4dFyt7AG97iXcG6BwzW3jYdBU9zo7VB8yWihFJ82RKR1FTZucNdLzyqEtGvDR5z",
  "key32": "2JDqJq6uyL9x2n9Zp1RPsUvNfW7EwEh4SwxBU6363HFAUgrfpwtYKZxariUWqXuT8ZanaKLNXeQDit6AXw68NUqU"
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
