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
    "5rgSgrkRRAKoRWvJ9tLqHJgYpUcFVjmvKd124k5mitCKhTUy57FL93man2v9jR2ESpQGoVsLwmaKQRL7KPJQh8aZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L7T2KQ8Hpg1JL3fRbdL6a5KGERZMmSVgRpNSY83yRyB3pAgRqEwJiKj5c4MqjKVDL981JorvHRjbEJkxDDw1zXL",
  "key1": "3MVKmGhyD3ZoXX2ddkqdydwC52rk3Zp7na5aaBtcnz7cJdMbFwairvKQ2n9rKJnz3vcGp38jLa5eosVRc3qMQuG6",
  "key2": "5ACbfLuF3RqiRNDg9LDCBfdea8MAMyzGM6saLucADUmCzosTxCwnFXBEx2FJ5RPp6D5vWPHeRc1kteD4kjgJ3hyE",
  "key3": "4C7wCLbqCTJGc2xpwnv1CkkHYLPx5LFYc7AFVPdVHAictqZLeoMCsWX53EjnCr5dJhSmESj7DBscbi4STJ94gTgf",
  "key4": "3zuq8rPD5ipPNcfSfwRaPuDcY1tYrg6HP2NnEtft7FZJydLWB2jMVpH1uf9z7QrCvxEJ8iEp4LtqHWMTfSdN7fpx",
  "key5": "5YLHPN99QgvAih36UbZUPBFfcbqL4WrbQXTKgTxiMYKokod9zQ8cJDbLgwQi6czAQw3zJ1peR9WgUn4reAzLzLMs",
  "key6": "5HJmNjWqK3Nbj6BT4d4ceySrEPSxMWgNSgMVjRjrEjPDatAhfNm7PUMgpVVSwg4wn5Rix2mrzHJbCb1pB5mSgwDw",
  "key7": "48uqqkFtJa3Q2D2MQp43odgbqhSpgGujTgtkKUwmj3y3FBnsGQVdxnbRKexdQ8PYRHGzjmvJ1TkmoyqtnpKJZRUH",
  "key8": "3qujijTyafHJhrHzdgfnmjrtEgYNvEWCAACe4XFfwkSSpusHXTdCcHo93vw5tGEeUBEFN2R5KMbQfe9cWaDao1Yx",
  "key9": "42Wcarck9323GB9Mcwwuy3nYfttSPYikARaxTjqp5GFzwjgFJoNsGgGwrBWNbDRBvA5TvdW1GVFqfnTYYJpRuFHe",
  "key10": "4AgUexS49MDMZsUdHShRuZ3Ys6mmNAr7QcHup48P1aZahViAD7DsqZSg2y8SATBMao2otHJEeTtupGPNmGymmaSz",
  "key11": "4vFqgX559ftrWeMDzCX8GXdLPxzNFx3kFXc6RMw6XFATKQSuva4uwzHdWsmVfWupb92FF7MaBuZuuH59EWvvVWqj",
  "key12": "S5xEcrFmsfn7o4qRJtcJ9gLtVi7SXYpXHfXELMgbiz3xDVSU8M4jb8EcTKPzUxnSC22Jajvm7iRaHAbT5MHWx1p",
  "key13": "5A8s6gcwEnfvnnfuhbUW1N7AeKtgogoia5jzSzemQMfSmmetpsBdYYvgFRXMW6ydV9aJVsojTBpohtP6C2jvtVRr",
  "key14": "3m2Sbz85crwqQ8TdxFynAG4DSgV1F8wP7DPDWxUb7RPyMTmB478zcNWmt8DoZyNmn4pV5E5K3xNRYCRZeKzyVLHS",
  "key15": "2qcbsdJy8GbLe1oCdbjMWFM7K8iDA1mLz1oQ7xQ27ZCaQDacnAcJeBUxSsoc5UZqjNKPug472S6XuQXcU7xvAUXT",
  "key16": "2M3mSkEZTsZuxpx4cJXNB4RHMFVmuzzy4pUiN2foaQsSUVX97RDR7zW79SBcwNEcj4r1iuNRmDMaQe8B7k5EZBaT",
  "key17": "5vZLZgenDVaooJNLE8vb5gSWaSezYLifBfQCM5nfhaRgGj1UtW7V2CAQ6Q3yEpiSEcormUyx52oGH7gTLiED5TKu",
  "key18": "xKgvy564mWffrjrKDF2GP5YHb7jLAfK2fsEC912WUfKTJcQdKAqaKjfqgVfQmmcMw62fcLPfQbScfXGqD3zKtan",
  "key19": "8mPeFrRwZrPcdjR8Mb7sRsW18zVN2czcorQDJ4tiAqTTMb73VZLKmhGgdXQE7R3iTzvmYUawxkkewih5bsR9tCK",
  "key20": "4xA2yotEgD5yXaZ4STxntdkd3D4gWUVVRS3UFMAdd2r3JWWKSCM3LvHLJkCS4vqrDgNk2CEG9fHnd8U8c4VQWkgQ",
  "key21": "2zKwE3aZ8uittPq5TGbdpbuoe426jEuEJXFkFfK92yo9EoEg4qPj6jjep4Yvdx2BQCBqcGRueYC8PLXDaXkNDULH",
  "key22": "33bzDya7wssrSJaV9jbit4wdy7kpTDgLyHdNQnBKTegmSkud4cdtHEJMpgjwQQYj3AnrzZEkPpFmATXkd2B1foqy",
  "key23": "3svPS5HfXLcxt8bxZXbZm5rsjTdTaLbJcSNnEnaH6pedJunVkxYmBqBGHcZQ7VjVXRKBwbnhKrUmg1EEDJWQLrEN",
  "key24": "38pbFmvpLwz6XaudzcNRHEqYrCpyNQtWgNY9bHwYmtow16yimXhN2p2xseuWUXPzLUuSz8YNCPYsNgduAhuCTQz8"
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
