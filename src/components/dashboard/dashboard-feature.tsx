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
    "3ogHsT5e2qv2YdyZU6YAxqujhJqFNHxTCu9RP9yjsZdWyCnFkuaqLavZCmZaUtJoChvJ4gBZtdR5Wn6A9m9QqZ9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "671v4WGkPjbcTiMBMgXLjtsd9AxZqD3oK1uEKsdrNECBTHbCxCvqdcBs69wm6oXj72Vq4GziNoC2BB9vL3SkMHgd",
  "key1": "4KXpJhqUEuEyE8M8aiBg3YxjGyo8P1c721LSouWAfjfAEfktWE96KdxG39LnMRwBD3Se6irLvtSqNfsfcvdR2S57",
  "key2": "4VU6bhHvB7XHtBuEJbVwXhAVkmzS3hWfSYrzvT3KBygMi1r22YPtXpUbXQggHoQenSqULXCWuMgoVstNG5dNzdxX",
  "key3": "31pQFnawz3zxDdhpXQC1uD2a7Kpq73WkzzTZw2xM7SUxYjQXoPwT1H9gQdhGWyskjJHFvZ1qxNzt3JWLX6E2uqCG",
  "key4": "2PTTVQT8MoxXwhUA4VGJrFSXRoHcLzvXM4K1Af9U9Wx9bM1DkpBpQu89JzsiDr1YT22GxmoFrfe3okdBsueff88j",
  "key5": "2biNVZY69EPkrAmL2nc67RrWeuJMNnfT4DFhcRavXmBT6ZY4kMyGnybU8stNeMQMYAM8Thom7kJxVfL8fwp5TUrW",
  "key6": "GvPgXohsvyTDCadpoqfGGKh2y14C7zMZFqyrdXwjv8MXZaBnkTatmLVjfuY6AyFQCSDjWJ2buDt7qnc5NqiWqQT",
  "key7": "42dtokiTuk86VkscTwBtGVSt9mgZJpopj6ZRnSsjfuRtyLyryEGCHuPdM5jcWRihi1FZdEcxMxxnQMvXr9B9e3yv",
  "key8": "2TLWkAVxgKi3jReB7sjZ6S5m7Nz4yNNuJdfuryJ8iZ1pjfeKtY7FH5y8d1EKzdsWU1hc4t5ywu6TLoL4veuvjQjC",
  "key9": "BqFQkcmXH1Tq5gG7SrMKQxxf6WmH8cNWcWzbV3NCCqaezaf9vobwV7oSKtVr8q829sJgUnWjSxU2roBzFQxzt7U",
  "key10": "2NLEQaUBrwgwTpNFk1Y7ckMjjFdG3YgicmJvK8L3LjukJ1XegycWBcD7VtxS54s3XQiCTN4DZqcT9ZaqYDJahdts",
  "key11": "5GEYuv1Bqor1NAzmd7r3sZ3WYBMa6AphikFiRuVH27n85kG1M6TAugZFTbQqoxwrDUazudJVA835T38s52nBiM9q",
  "key12": "4D1GfLc9cY5trxsYT8ZwJg1xk4j28tHEBVdHqJ9RaeozgXdzU51ttuqcWLbK3RFQ9Vnk39BynfW9QYfKvsxNQUuC",
  "key13": "2Ct6zCF7ffxe2YRKoJVoqy8byvCvQK78AmTfq85iDUUFLMPUx5L5bUSvmujPXU31xs4yvJrzTWhN2Rgb3W6aESvA",
  "key14": "3ofDTZJeWiQktciDC4ep9fjmsanyT4jxNoVjcAxrcDLFvUmSFsNZvMy526cf7pVNvgZkj6Hok3L6b3UxdWSxrfSx",
  "key15": "56FNFzvpMaRZiLFe4rJya4bnso5pEASc7N5uK5YrYUD6zBPoTo4x7ELp8wKc679VLjd7QKZzZ6sNZFfjK12rnahe",
  "key16": "2GhHuW5XXsge223ubLUBhimLG97VTkfG5LE8nyqaV5nHKbLHZNyVLEzMCYVLqqDHaii48gkMMbvCDxUfqHH8Bpd1",
  "key17": "3yL6T4mpvpDFQUprJoMfXX3GJgJZ3ygwrJLEYfxCCzBLzuRFbkLq2xTuDB8iSwPGJrwjqrwi1gWCJW9qcEeHBgwY",
  "key18": "4ryp1bQGTbB7MUwu8bSoK7fpgH2pC9n5EWDcoWaZwW27fau7x5y1nwSH6Tx4uXtw2vvgjtRMiNefxp7Dk9kg9qRF",
  "key19": "5HNCjJ4wkERAkQKoAYGtXtXLzjk5EyVVedP26qJbiLPiM7oN8rUBn336Lzkj6g4hqkbVyNDJTM6uyYMmDaChtURt",
  "key20": "4ZZ5cQLC77UGWkv5Fzv4JnA3sX9aBb7M8xUXVJg241noyyjoYFQvHAUZ1eyeLPDZRUfM2HbUK6gANV6AUswm8Mfv",
  "key21": "54rp2pFUQXasFBswFbjec8rVwBwq5finZ7JnHduJrdFt52qJZhCURwzKsxGMkXqWvWaQh3AAVZd6yWB8ze338DRG",
  "key22": "23bmizyiZXA9syMPzuid4JXyU8bMkpGwdwASv8mLVEaHzXn3RrcgUEGtkUZns3LDCvcbeG9yzQAaPCp4JrcirQQX",
  "key23": "2g4znStq6nXHZDcS9qPMM6eVxyxg4Ue86CpbYX45wMuVj1kbdjX32MpfR4cpdBgvDEomaexGfJ1zQjWCnFDrRf56",
  "key24": "3zSoS3fYM2qdHHrhRq4fLuwUhax1TpGxjJoUpsAPd3A6jxSKwq9tUuE7nCVnsrhuJYeKKSJ3oewi16AqPGhCLrpt",
  "key25": "4rW3MAGcMcBSL5VynDeRBkEDMizfJocTyPeyCzAEhb6MwjCWdR1PzhMZgWtnyziPQiAm4AqMKKZHSukGqGfpfmAz"
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
