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
    "3RwtXKx7kLuiy9Axzh1Mex8kfwASSG5tdZ3QtQHr2f5eu8VjYM84A7SKkPC5vSAW7K8ZW2S1so6o8UzZ41FHWJZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T1GtxuQuSpyaSFXJqPK5HNaZxznBTyMqdE2zyZxS9ErNfavyPjN5jMhH5vnHuQ17543hKiSn8dGFp9WNvXSs8Vi",
  "key1": "4EDZVMc5y5jXuA6G9LVpX8MgwGmSW7PgXG9MvPoZnyFLcdPGFCHJZCDpEvVTdwz2WSoWeb2fUTAZFEdc47mPfhav",
  "key2": "5v6bszDYs9FHrvpbHSCz1QiwULVCKRYMUDZz8nSiD2u4rG4Mae3WUqQtgweab9K5FNKAmrFqFuXcprYfSfiMBq5t",
  "key3": "385hYg1ZL4PzxPTEf1BYACgK1WK3CxyNxQfmxFUFHGyMsE35m5mrj5erz5dj79TMXG9oFoxDvj1tha6QcwdwoQbr",
  "key4": "2BQkgtaKWKsuGFtKnspYPLBimi4dUeWdSxHL2GDfUucs1iTLHnqqqDGWvG4krr9unv8Ztmi73bRboj4JKBm5C8qf",
  "key5": "3DCsai23a8rjAWv2RyTqFTY2QGSwdQgKRBiVnXb9afVVNh3nP69RDQXAttb7G4EDSKAnUHV6PUeDRuFh2nuyAKT5",
  "key6": "62iPWsNj8kjUzTEVJX1NtiJyBGy3T9ddirKotvnVLoGBUN2JMYPPfyt4oewxKBP41HH2JjdoJKhksv519o9AkacY",
  "key7": "5rREmJKfLPNFFjLuaysDc1FVGBqeMepK113gzirB11ZVBLp1sQrLdc6zPRBPMSB4anEKU8XhJ7LmdVm5E2jh2Jbo",
  "key8": "5f2AGfvtKC9Wu97LuNVpsb53WHVJMFQj2h2ANL7tzunYyQPyfh5nH7FLYkzFHcrYrquoK5DqcczhTg8YBkDQuMNu",
  "key9": "46KW3CfxDyuJ3n38zTcF8VSYeaj2QpbfbVrZSjSoqB3m4mge6xf8XggAG4yLMiQG8E4kxfnPGQVv65UQ814weDFn",
  "key10": "32F8281fmLrzkyWKXRh9fEEH2KBeG98gxkp6t6hX7F8Z7A3KQkgKT6213iTakZYiT57jUNopR4dvc5ozBUb4UF2K",
  "key11": "5YtUYDbHtRtVDD2P3CKKxz6orv4Couo9MXUbFK6Ff17VEJD6VmU4uxuQ5YNUxgK8nRpxEtzxNvG69dwP7G5mbPAE",
  "key12": "2qtr4LESwYHUG3D9Vr1jAwd3tC1k5kaWYbARZ8y7djJQ9EL2c7yQ1MUEFp2JHh8fhkgDkQ7e47iKAua75D7qu4Wk",
  "key13": "3xmqqKdfAXccF86snSaDapyAavYKuVzcuUzC5QbFtJvzNEJwC6cqZJ38GhhYWqrDy5fBotvvSkUqZqNPrWmFe7DW",
  "key14": "2yvDD9hrEk3kvhqgVtJqfbxC4CxTLLzJR7TJuQVXzUTSM5dpS7HduaYSjtFjTQSugJ89ZBAHomL18YDh8pDomEP2",
  "key15": "3FruKsNKFHpZd1VwuhsJsha8WbypTTd2jWvGKGczhXLp79TiqC8sBQcKmLs1ow3DkbGqfGB6iqJWSiHficCTQHT6",
  "key16": "4uKYpCEfiJ3PY6e3Sz24yFpYA8a6PqqLwHFAK2cXM6gzuHFgC2bryD9egTj1Kc1ZEf7Dzm9vVRLhwsbi3VimqMVX",
  "key17": "548qR34CNtrHMKNKtfVNKdCAJScRZNKxt96hP4onkYxtwiPG7CmjcHEdLFrAFL379Qo1bcSG9wuyiwBju6eqaGku",
  "key18": "3NmWyW4fsoqChY95pvTKR7jPxtaVcn1ySRJjFH8gEj1pJbo4S6LBuMgFk26DJqa7SZGQPr2YVLeoxBre7aMUpkXy",
  "key19": "5uEiqq4SiUrPKrDWPUhpbCv6S89n3TtmD1CyoMpgamXbj7qbFAegMjpqUdDxUzizpSzddFdLR9WftEiKSgV7TvSp",
  "key20": "aycP5a1nVc3Vrv9Ezo1UUNmLEDhjW4mnRbQHV1vMRMRx1EZurxRVFGndoQAuXNjeqpLKLD3t4NfgbeDWDzj8FBc",
  "key21": "3NWJfD4FdjAYriBxJX289jeuCBmYYSRK5NbBGaR2dAXBFmBMQ7KDxzZJ7ssPqZLdYKCCjTSgikbMXE2q3QwuZDcC",
  "key22": "5RSVVreWEJRnhCNLhkiQfJfwmsxmqkQebK7kDXhHJeHDSUz76vAv42r3U1VmpmCDcsEzSoUQr9xQWEV65P49EdM2",
  "key23": "5PdAyjCa1WKQRMZset4qnoVJGk6iyWTBxrcxSvizya86QxcvAQ2QGJrqtrbF8iAH1xa8f5HtJjiwPW5vbZhKTePr",
  "key24": "4dLjMxqfh4bd4qdHTkUBF8GcdsE4kSjHDBiaDMAgN6Jp3danfcgNH2d6n5UkjhFAuD2QXwmnCVY9D1foPmTgJkHJ",
  "key25": "52SHCSdPTceuRYjhZ7FSXan4hcuhab6CerLDP7iss1P4op96opyAUDAsPi64jmwsUSHLADs8gDfem74GuTQ65iTC",
  "key26": "veAy2bQaq67DyjmZMYuKr2vPPG4qydC98CT7MKydmWGVA9nTz1k4vjrrVDEcpCovUJ9XZsmWJ42hAcurtAkJNpq",
  "key27": "36432FELBusYXtgymKshTMVKXP8K6McxswJ2PAPSe1nxWfiV3LsQr3ePfRJLUrgbz547jR6sVBKNbj11iBB7i2xA",
  "key28": "EhfuicsxxFof9pNKXFQLartMEAKPbcSs2PcoeMkBQdEH7wobAAjRHYWFM9XZN5kiAGSUf9F11gAqmdNN6bUEhVu",
  "key29": "2Wpf6NWsC5gPxHVCyhStFkKhDs264UNxAY84G4XdZg1P5NFaM9UoQ39xsGyUvcu6Rcyzz2CnsWLc2QHxi53NkkwM",
  "key30": "4LgrcQcraTvPMSziRtgvEQ51djJuWrxrRyUq47WD2woFTg7YpSba8sXbqxGevwzhHUZjjCgzEpsexCLqGhT6moZ2",
  "key31": "4oQoqNmJaEUUuePRuDUJEFoHBiL6FztE5wfLqXaP5c68TBVUnjve8HgaMRaG7JmreCuBEyQXkQPg1DnEC2fRx392",
  "key32": "2w8xkhyqvugFXtL9gudtmHUjDY3yqjRHQrpamYtMzt1eQm2aum9Xa3592QBRJ1Lu67XNhjEneNyX2FmUuJHFTFdq",
  "key33": "5W6wwwVaVPcJNGchDkKZ8i3kLopF5XhuMBj2Zp5deqpDMKeoLSnZ2QbRTJX6ygfamkUda7jfviVhFfVtH6d8cfJn",
  "key34": "5gXJ4qGCUAujPcUz1QKLousrNqqGytHS7QSCAfjtJeUogcsqAgCQhG1ovkCkbin4ZsxDbaF16gcM5qi2AtBx8kMp",
  "key35": "5DD9mBzVXVicJaVMn1WJKopfjM84JXbKRWb69oTvSvUtJKXUbXuNLcXGrDttk5T4KtXZrV6qwYCnDZTTSnCnYVHs",
  "key36": "rn5GRE4m6icNsXWb9Qxwk6fNCf8TQDGgaVEoysNRD9Ah4JLD6oq84Sqy9SrQVjFmPiWJikEmbdT2tAWyQ9krTjZ",
  "key37": "3PoXbwfsRrBy41QBn5P1KujoQV5cUQ7Nns3yaS5aD6JtqqxDmRWQrxifBAu94LwEcLA7o88nntn8LEgB5Gd7y9fn",
  "key38": "2ytKHwMjzymHM8vp1GigkUvdrpFgKAVB1s7DBG7BQDjuzw8Xr1M2PMseMCNbSoksxKru7AZtwQKGSpDzH61DZEfX",
  "key39": "4jvKLCw5SajnbwVuaunfyr8ctQdDzCqCaMDcWqA5viUUP1efU2nnxirVxeLQEmth9QdjmZveAJTwFUcnGLwmeYpi",
  "key40": "46RAYueiovreAx5B8P5ALZqi1B5wDt3HMc92yxAiofrLgSifxjab8U1faimC9rmyhgyMq4fZiVCRMJoCj2KxZkVn",
  "key41": "4sNrJXNBE5n2qqSYsC1KFq5T6rQ2RcPQ7AgSAjLDTUZzMQBB7i31U1HbNQPMtX8Ki3e8zLa6STKLodGqNFbre2Sa",
  "key42": "4pBFmPSr1wxGMyFQCxMPWPg44tfPLMgGVv48b7uu5eEQX6ZAyxDWt7tYLxHYV6x312MWNeRB3ortA4tB9CfPRg2d",
  "key43": "33vq3MHvfPwkyW3rGrtueFswrhkrsryxKjD8cFUwikNwtjJNusqt3d2nWHayriKrxPahvgFB4g25tPJBkA3shKWS"
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
