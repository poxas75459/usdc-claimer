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
    "5LwE8ymkoTnNf9Bfm5ku6oF6V5jNQkFu44NeFjLmRcWhMQ2LRXq9xvaGvsuyFyeVJM2TWWrrMeLq4Tb5mZ7cMTvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MPriyvZWz3VzukAech74rWXjH4S7Hi5CNRxqcfWq9CXnz67dY6oRvdK1wS1vgmhE1tmyHfBazg9VUtcGzFiuMVz",
  "key1": "5CeQS53ryDzwHs4XdAV3cx3T9xu4JYdB3DoLBotMrtW4iEYMEungkWx7uUz9Li3Wp1CecjUNVJoWVLwW96XffD32",
  "key2": "2rGXXDmdi7bDkD929gUyKi8ANhr7wEwaJQYCs6GiNsg2kH7iKEyw7TJQ6rzktgyA97xKpLtk9ikCNQCS8vbmgPQp",
  "key3": "FFSos8xgPNFVtwGWzEh1VDk4bQNU1Nry6UwQjnakosqrWdTgf3HXaKD7EkCxXxFCg48WJjpX3vrdD3v6NWfnuo3",
  "key4": "z3Xohcsd42wdz9Jy9S68bRb87NZWeFboQm2CHpLwY8nu1eFjNY9xnjxVnbyc4vmchsGJaDhgoy6UhMNsH9fdx3H",
  "key5": "4AtQ8FnYBKH3emnER59Y27uyk6YFFiFaQJ8SHrFHzAY9wESnQFP9WngZ7DvZDfK22Trf8uJmjxK1bFmfw3ekpqA8",
  "key6": "qRpkn9jHcgJKPNc7ox6rjUw7ZcgXCQmuTdumRpw4WaWCSCkCVDADfwD7pS4jbwoyh2njqpZt92YjGASb7X6aRpL",
  "key7": "3rmkVxQ7msvRdyWouYcFWyc6C19TCvan4mVYBPMQDdxpvf3zjmfcWrRxQkDYimnct5wCKdATyjEqGTPZd8R1cSGU",
  "key8": "2QY722VA5kuEtLLibMAQAuGusCFEM4EzuTRCuVvas4qknTdYSUEzfJUe8oXVoKnTHdeFd839bDwENSAkoBcU7YiB",
  "key9": "4vo1hGxzCmBK8zvqB561fSUAirVfJwx6MSbXUb35SWwTtxQr5S3Eq1oHAqX6ndBgbnM62hKJBfpe7NfnvEYV4BJp",
  "key10": "TRtdyByVwDX6MkQ4Lo4ADoqyxnQc5upAw776tbVNEqy7LJuSjLrsDotsfusJawATEigiqNK61L5b8gi63rfncYB",
  "key11": "486WLcus7mziQYSijqJWAhzXBPpadGYVAdWHKtUQbtxcW4wfzQMJBKc3mPMDxvGobaeUwdTPjHJbAbZ2S8Q8gTv7",
  "key12": "3ecySZXPC3LcvBpFAPDTTcQ5aNdzWpShugnqkTQdoAMT1ewP9dSKwv1Xq4VQfztYETkWyt5vq7afUcSLUrmaUnDQ",
  "key13": "5VinPnAjmZi8BLP8VFWq3Mw4vwBQ7xHGyo7YZvYP4uPYJht4MbHX4jzHRhiZUoQv6NiBJ4o1HxqU7P1Rv7mCgiS4",
  "key14": "5ZhbPEEFPfyT9sgkNEDJWQc5qLRHnuHWknFZx47vZ8XL8ob6mFVUSD2gHhzT5peokqpZVzTNfGSJx4eTxPJUUsXZ",
  "key15": "52xwFGTUHky4mfNK7VRCpZxXQUsoVGNLBbAtSrjFLTtMZitvaaXofGZoGvPpQX4Jgn7NdATA5p3kF7Xsk1duwDFJ",
  "key16": "5uPDNcyNxrUjvQxFXH4fpQHtpoun9A7AAL3DNzAGJ4XfHypWxoAxdT6G7LSKthaQzEa7zauK9smHF8CLWvsZBSX1",
  "key17": "5Vfc34hQtzLdoWZkpNuFArSE8cA1zcQSAc8tfAgwKvA7o4aPfV2mbZTUbjFWKJTNkBQFaWYZgYjMq7bHTRVZPPsi",
  "key18": "48k4Bh4c9nen14PjU5qtETbA7Lvw4KzfT92xHerwYo82rHrM7HxExSuYX65xUs7oeZn9GGuvbwqZTEHYFX6xRNFa",
  "key19": "339raUcMF9P8aKurRwugzVp5oPQhw9RVvbkNYPxde2adbeSqoZZZYsYKHYgm4u7xMSwE7b4poDzWjPeECEAQnWnA",
  "key20": "5yBRebNV3M3zUicvNeqcpmcSwk2ia34axanXCv1ZhkRTGKskDMK1VNhXnXgxopZDqrTQRH3K4cxPar5uidBtfVsi",
  "key21": "2BX6BET8TaQMHKoCahVx7BL9ndj7M2L1Ho7vxzCpC4BjLtamAuLdppxKx8zSwxj3rpGknctdmr49iH5wc8AGwiX9",
  "key22": "4PwsFMERmMg8xPJZBQTZ411f4AMzJXk2JtirXMvkqMHpANCpGVyBCXezVaRbiSAWFVmwYAbqNAei9a4A2TTnpHCF",
  "key23": "4yqrAScBfjctdiPGe3DPqmVGTMX6Hc87UNAJfmXHNtPwLsY9LS7q8m8baMuzpZSMTPcH9EeWodha6A12ist4ttcX",
  "key24": "5LM9bk953Nf978nTcKLdxD3i7fkQAAiHJrm6Yq2UqRM5RyXn1vhGsNbPF1R6ANiB9kXuXDMsdXjcF3pLGo2Pjqkz",
  "key25": "4dipn2WtZyEwB8Poe9HMJDvXazJwLfhAicu3PACHHjggFGBjS8e4gSxKe876EKtxkjVdqeqU4b5nEVPJfRzufBug",
  "key26": "fhYqXhYjCtPqZ5hvf367QtfH5ts8NPWBZy6mfprHFRfdNgEuUu4v8Cz9Uf1FFkzEEgkkw9GQpbeoNmmch82PiRF"
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
