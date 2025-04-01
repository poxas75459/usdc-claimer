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
    "2Axin8pqYozoVaBqAcLNLZeJu8UDrkvEMJWb7HoEm4HaDoyQ8Vh9JMQC6KSysjbxDyx7RKAP7jMXXq8XVn4Fv9PU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qxtu4V87y9DLKqTxzM9eAbnT8w3fyxFUtBdr7Va5mpZV4dLnsr8ruj4zrwbA4Q8zeKKzok5uVx4bLoetgb8UFJf",
  "key1": "aGXPSoze5gWfAcLwCCPKkEnyCVUimC8GQynrGyv67DZZPiSMi1sHZTSzwJdP7o7nini9kHxdmhxZ1a3JmWmw7WW",
  "key2": "2KkPTP5fQSWg9ZsgeocjQkJHj92BeoNaKYtkEnK66fFzKFTXoYN6o9Vi2ieWR6KyFEBuynkZtZPmgWBL7xsMyegB",
  "key3": "5cewGRS3MnMuRb3pQQ5BopELLrZiv3bQ3BNaBndmiSDefAafnUykFHjqTZKkNfNqJXLRxHAgEiVT4RUi3PGXRRSr",
  "key4": "4WAHGhyXpsGWLndokaoqYZWtxyyMzcmhuM8w9KrqM8YmGYJ61dDrvBntG3yc4KvXgMCRRE6gnr1SGg7rbQ7kEYBn",
  "key5": "5oGFMKgNbsHC6PEgrW91kmHWowAUBsWC6dFCBESQ3GQTp1b6wNvXj2gvEab2mdJxK2SaotspEBgBs3XkwgBR1A9u",
  "key6": "4PjDez58SzjWNn3scsmuysKEMUL1JUDkEcyiUPD2esYq2BfxtsKpDyMEfLwA9iSHC7C2HzWYw9jNWvwo2iNehqFK",
  "key7": "3Mg2sZS6bcZ13Wka4cyw8Ysnz3sA8jJhG13VNvhbj1ptdym33PHc662fvuDbhgkUXWSzm2MvVVWeHAgmR5q5jJ2S",
  "key8": "3Eju1TN4zntqoX3cRuUJqrQm5bsQdtNFY4jC3s9KiQ3yhL61CN2PyHH21jawnji5B2rVckDxiEXhmrq48CWDgMby",
  "key9": "KVGpjQ4j923vh8yciNCm83k2mX9m9zZCtUdyMKDJGx9XwnFDHfa9KCHVkje9NkgPxzJ8F4V3cgJ2Qip3s7rhyML",
  "key10": "28cjiiVtzorUxUV6cfRQrPgnyX5xJnAmpwuqD2j2AbkkX7hn7zNq3yNrGum7BkwvMrnEAcNAuzZ9VHB26poWwc5A",
  "key11": "hWQ2ZE56TAbK8edQBocdiQ91oCuUEdrQCAWYWuw61Nh2T51VA7UWFvaDFbPRTKXri2rvs2eKZ8t5Pwsch673b5V",
  "key12": "4iUVjB2QCpke754vUPS2J4tzBS3p6fTzo9cNCGZyP92D4mmeoKdPUXZejpQxHDACsLWdv9KattgPSqCDP7fAeefK",
  "key13": "arQh8LfKzAjMYRLEmGfeUvRjzfdX9bzffymSHybAW99awTjK5kAhaCLeBZZdAoCoxKmCGucnPgQ3rRW6z1UDGrg",
  "key14": "uNThWjpBbgr6bPhR1D68ezwki474CtEZsmpWjySeRq4d3KcT5umEvF69uzc3tFBM2rCzSStD2NvpNV738SGsmEU",
  "key15": "2cCypfDdvxP1ZSyD1rHpiuECnoXnYCPHGNVeCXFoMSRkKXqr1wX3zPAhVkw1xJCYXEchhcSHBwdM4sPk3yVDWqLM",
  "key16": "UqLg1i1Xkb7j5Eg7q3J8mCqwFTjuhLgRGAAPxSf3BR23tnNKahVToZZK9C8mobuVvB8VvUnT36gf5HfCCBJKt11",
  "key17": "5BoWffrV2g1xrh3YwHLwC9xtx2HukMM2wFo4Hpyew6AHr2ekDzXjT8q26NTYt3Hgfr2rFhod6fC4VxB9tQTUySeV",
  "key18": "54DuNH7bEk549QGNG3DbBnNX4VXiuVY9xGhjot3eqg27KTVFP5tgv2JQBcBZRa51v4sNU5JEohVDWM1LyQUpq1xC",
  "key19": "4ipi721Kf4Js3s9mVVhNiqAJn7YrF7RpbW2joxJeTDxi4VsbdZFvabaHmGvo4ScA9GnnXmNAfPAtGXG7jss6YMFv",
  "key20": "fVzHJCRsvYntXLpHZVQG79fCthF447WhPQXs36o8JKXDYGBb4ffKVPwuVsUUn2eGkbaiVMsimbbiBWnymgQWx1E",
  "key21": "Xpi6cBMVr8g8EAG3mWB9kyvtKR9VDHJZUxw6yMtRnYdbHuNDPWMvDP1S4uNZnqawYM5xsqxsXAF9cLbwhTLnRiG",
  "key22": "2BtStA95CbryyAQf2RL3Eb8x45mwSb2h9k2dWTTmYnNpDceZxQwvM2c3uHEzvs2K5Doyp84ke5nApLuo6khUZHGz",
  "key23": "5vvVf4pcPLiPov84DeakRDzM5nvNYiofvYnGpPHyUS9STQ2xcmzozU4kHK9Vo2s9rEWjMvMBcYRPokfFggjM6GVi",
  "key24": "4YWU2grJKF5tV3xs2peTBg4sk6QNv4LUjE16Ss1q8dm16pDjQQ7VyHUD9fnPoak8JRnTMS18ZT7geo91MJYtvFNR",
  "key25": "2yh1murLqXaSpdjgFPN5SDcVUfK5gpoPc3ZvbvcSfjZmZKxcCtfU8YdjH5soMRDmFKTsMFrhViYaPidoRVWGDTiR",
  "key26": "3bHSrfenvMnxF3NF2vqzGoFMnoPMQqme7Jxo3pG7LcNxFqxrmqDMn7SCZd8dC39jAkQrUq1pfpGadvRGhX3yrDHc",
  "key27": "3Pv7WaxbtghqcQftDfZ1DGjuEt6bEJ7bzVvVsSg24pT4uNUhPQuEiVs6YU3G6vJbSaHQW9m2pM2KLKD8d4UXsELE"
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
