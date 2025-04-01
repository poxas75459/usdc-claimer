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
    "3hywkpHKhFkNPzsjtn95AnoEjowbJ7pnDLerYAN8L6geGHCiCqFPDSyCDqykW49miQmZEMJvndstJX5EC8zCQXrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ga314DjtcHhmscVYu3vkqrKNX4j3Yw9P45DruU7GVYg4SY3s8f4NtsJEcHCTTZHd19ZdZ9cVLGTux552zjonaWK",
  "key1": "FjGShf6AZFic14idKB9AuMSGiALdHNYcpxtpyVG3qcaM2GPAcSrdujYqvwf9yWuf4gH66Le3dHSZNkthzUoG7Ce",
  "key2": "4DzVUCvKSYNKW98qNrUzmcjKkKjknG2JmcwhXZZG9GMoh4mvWFM3pK6LgvTnd7PdgAJM9eNzoTCb6VpYxb9VpjCV",
  "key3": "5dfBiL1TVLaQXuoTBGyvQi7HsD672FCpZAriHaANiEFpf9HHRxYoDLTJGPabX3p1TwCbmDKSzCnusxkZ3fT7YcRL",
  "key4": "2hSUysp5aMzspfDKa85wAwGjVrffjKbw8VUG4QSwERyR9Sjy1ifoGBz8nnjf7VNNW95N92mFEtPMBXVoZf7bBy1H",
  "key5": "iLHygwgMuvpPrGmURvCEcG1RhSbpWK5k5kBtscaZ3BKCs6WtQCRguKeC5yLGtExrkZkWPBAwxHukafviwVTAgcf",
  "key6": "5VLkYSoZskSaUoPrUfumt8AxX667AdwKVwDkGwioRL9uTBGB4abiWW1D1mynHEm5atBYRbK3D66hzJjcoXEBuQde",
  "key7": "EVzACGaZ5RoMCWPyXFZUJWrMzGepqewfEDA8LptqeMoNDjNMYyVjEMqjBKFMVdEZnrBn8nQP6CJnESscatKU5NF",
  "key8": "4HWYYgikXoV9LEZVdfqPB5dz3x2wUvTDMAHGDkdLFxwJRnmMimw6wWgdiRdgLC21ScPbvDofzAuc36B9Dhbjeh24",
  "key9": "P1hdgBnJmxQfVgVAUgT1bzW1iBpjwZW9WeiTdorGW2M3EjKPhKno9oCFeui9t5L11HXgqyABVEA4ya6sY2APLgb",
  "key10": "54u6zZ4sZzoHaEZoFejeTN5kDxrxqeRNtVMgwC7ry7HVGc3yGtxJ1rWHAA1L37XC6Z3bmcZsmXVYMVMrnmWmnP36",
  "key11": "2dTeUyWbygfH5bBQ8Ser8ih4QUnYMA87sQgnV5kJ3GSV8Xqf3egwi6uJEWdt3uuG3Zzmjo5TPg8PuiRHvC9nrsqt",
  "key12": "Dz4pdm8GqdwHwE3aSrbpwyNh8w4d641qmjqEWU6e1Cnx2KMScxJWYE3yysjs8q9RN4PZexVxJNvDnLDvaCEAGvo",
  "key13": "2SJv6ye6tzzpyKF1PG7gT8ebyqwuMwfmu8byAk8rCpQrLBcxHC7ZFWVwhBth1o2FXWge4DhRAU6sdoqytGzGWeaG",
  "key14": "4Jah7pjsBxzUc4ZW9BTPCuhuRTtZpVa8EfRnF8CciNm2CPqUoWMJyANKAAfh4rPHzsPtDhA6Saq8YUCG1417cgty",
  "key15": "32aHdKAfr4kwasac4rpx9nuGH54GVUg4WUFsgaV2a348YNS5c4iTqQZiwwEnartPL8KiUGd76XT7nzTjeXNB75n6",
  "key16": "7U4zCCE7e2wT8A3x2sLMhsz4inHFXKyuQctjU6g3MyoG5N1sGjp45hEDKFwt9mX5iX3cknhFjXwLKV1hGUoYcok",
  "key17": "8DvAFsV1jKHGvnT1uU5ZiXKg4Y24Mry8Er1aTfHMUgoZv8T7vrVQP5ToKH9GujZcZ6qU7iFqZWrivLrmW4xgmZi",
  "key18": "jaQZ7Txy1wEBNp7SsETKrLQoSoGQcBwRmepUcZGxjTxwXkhXNzSWf3X9rQTVvbjn5p9QkykJaxweFUVnvKRG4oz",
  "key19": "5qE5kM1R3eMtBZxKVbVyq1CFvyL1ZuxQBnH8M212vymWsQ7xUcDn62xmTwECAy8gkZrgV4LdyzVyf2971RQpM3Ne",
  "key20": "2xm1fbPNRH8edgx2WsGnXcD2xyo3C7aTzFEGN9vFwr4atwbmHDobPtHruxSK74XLjyub438z7AadQwMLhuvNoErg",
  "key21": "17VmmyaAfj5rDvPnJexTCkHT7fJ8jDTVe8NQAqzjU8pYwRnuqFaBHgKKNXXAfeDSMQyg3S4ya82XE8h1FnvsfuR",
  "key22": "fpWBC3DuRK5Dnjy5WRdEzjepUW6T9yEmmkhxAmmUaRiM5F6pKHnUp5vUEpQ9XFdF2QZ5utQ3EXipMmzBH8k8q39",
  "key23": "5oXmxeUHaLY6ur2S5DaDJuDzjE6qRNFLCYdqtpxrqtWARVvesdj835LynrtrwVk6mHkdtH6bo2kEvzxaBpSHqZ5x",
  "key24": "m4FALRdfDHLNASPJ2feUHRQk26W6rmnjvswgiE19QeuV8cRs4hQf5iHgcyGo84hriin1hTVnDGLpd3noctREsJq"
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
