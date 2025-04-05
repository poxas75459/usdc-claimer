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
    "5MjxmfhbByZ8p8SJu4Kb5HUm51wMZRro7h5TWq3RqYQNTHBvWmJekfwAp53gZLovBFtWCVnqziDDg9LTVzsct1jW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PTiMRWyYm7sLfBsiB2bM2RNZTztDfHmRT4ddzyvKMZ8bJacx7bNcQoYqqUrbW15ut4zZoT3XYbN5NL3VTZmnkLF",
  "key1": "2ewS3CC1Msup1HgwrtuARKsmtAnB2puxzMgiZUv49Z1KgMia5vRMzzX9e9aHi6nqovF5qvmLP9mPuzeSXDKGUrig",
  "key2": "5cZgcbWYs2RhugaSkYwDrRQcku9bLMH1QX9fBVUbMepDVkejTb5nFNZQdqrz6AH8tr8b8nimBsH133Mtz9Qa6Ezh",
  "key3": "4Qwy1Fdg7B3joMqEf1bcBRrtXVTyQ7TDgn5ewHjyZFcaTBxhV7CpTWdpC5hCWLRGNKj8FdBHsEfW3FbDmV9cSyk3",
  "key4": "2guFHsdJCZSMBv1UYMNmTtPCFGKJ2oiYJgv9XS5jUqqeVNjrMVe5Sz4c3NU15jK2MgCRdHkFCFUTpZqLyhzxubaR",
  "key5": "5bzQthXvDTAcHM4QQ69K44G13K8y4bhpZz7eCVgPvorCyvyqAFZgVKWstUHZ8M2hLs7QME4d8wUhMkx52E18TSja",
  "key6": "5qpJX8Gw49U55ugX73Yeun7fAftx3559x6EQkENzxCdDcdKqSd2MVMCR4vgWvzRh2rAbWnvYnsyXLsDAS7FYvE13",
  "key7": "4Ek5U7FCL22N8FBnQTkaS354AFXaxsSv1Gjm5ywR2csoYXDtJqhxeyGVw3LZAZAgVQT8iJQ12yC2t5QhyUkfNjj9",
  "key8": "5Ac3jJXdDpqYV3JWV37vM8LpGzu3wXzkMweH5Kq72paQapj4Q4MjtWd6hsE4FZkaCRocLPBbfDHsSJ93BLbuFmKZ",
  "key9": "24EyhKRrEve31TUt6Pn1eihZAeZvqejBTBPgLxvezZNRZYdPqXxiXszzbisFN6hZ7NuMmdu2z54giRAxSNBEVETQ",
  "key10": "5bCsTA3upKgo53vYydBKyZsnyd75N6ukrKrXRxAjvXDR75eXS7KyRBvCmgdDmmzHK7UoW7GSVkkhQLL7QWGRpgN7",
  "key11": "2t6r4H7EBFpTu9Rp8zkHvpEYTyrmcuAEnqm2WKZCMdn5GaK23byPem6tKb4XTsHGdhxPvQuMsMqogQAY2BdCRrwU",
  "key12": "361hRANH9Bx9gdR861xQRxT4Hfy1NatqjoWyyYeyHJ59sQpwH6r5t2kwHNedqdaJrgGbGdnignBWWwJApjxkjpZb",
  "key13": "3MpoArstNVpPLcFTGZJjMZ1iPKDN6ibXXzE6XmwKdoDr87ahrnHtz6kkJzNaiURBRf6vbGf9pdSmavPZDPe2gLo",
  "key14": "67n9xL9QXkirr7ad8a9bHm5TALtocwyqE5PpthDwyuPUT6Z6tBew7bnoVrSFqDLxDMUeArz1Hj9wJQ8YbBkNkKYD",
  "key15": "5mSxJc3TLBsXe43y9mS5sr6DJWhGg2KZkz8J5midG6TPoLbTEFkBYb3RmQL84cHbrhKwW43FDFfgpD2V5ds7Viat",
  "key16": "5DA13qL8GdSLECD2LYUyUJJWL1W9rw5ZiaeygzvoYtnebDKA9MRgC5zVbAwnsUvWkrA5fNyyiiaPapEMt1N52oFv",
  "key17": "2TqMrxzsk4K8qyndiXRn5RnnALfexkcX84oeU3XcrtyWEEhfiPTd9yPCWPC947urBLJc3kV3a1jkpwCE9NWiTZKG",
  "key18": "2UTjX4LriiUT1FSvp81snn1s3wKcwHDjCEw2jmQMsgw8ieouSsSzWsbySjrCbiaBJgGKE9jMtBuPvtdtQM7NrLvU",
  "key19": "3iYP5kPrf7Ema2A3q9yPpyw4ZL5CRxBC7ZRxRJEhfLNb5VLRGEpWD3Lx4nyJNrbr58PXJAoRfLrQvtXGmuvwd8bS",
  "key20": "2GFTw7m6jZYWsspmgwwqMwWrhqcsvDRRsQwEXaMFA1LWeoNMtR55LEMFJXbV3uuuGyzz9qPw9qnzJVTJqMeApLQb",
  "key21": "54GfxigSPDZwypwBQTs4HCbaxetScDLfpvcnU3TR4qzkmKpNXaygr5RX7uoBPydQbDkzihLrh1wUB4errxgEg1aa",
  "key22": "61fZS64WtDvo118mZK8MVu4KkrquedfjG9t5dUbNrMkersYUyYAv6FKoG9xMm8aE5FPzSdrtEPDS1fAJPAyqfKzr",
  "key23": "5NVPiHo6uHUiqq9fmDFA1PANuAA6qPRbwWqy9nDojKqEs4mkoVSxrhh6fsT46xbQphyqpf2i7G2WwFiiPY76RQTZ",
  "key24": "SHM8GsYjmQUf6XA5YS948rGAMAD7GRLbsdb1NJsM9KFqDneU5Reibqit34R7E4DBVBr2CHxbSWUEdggtqQhz33y",
  "key25": "3j4PtXWHwTLKLF2VXGo6wBLEw1NQAWfmG5RK13Q3miZTtmjLmz2UnGS3QXPQT6wDPkBxFC7Fi4GJKobsRCaEgEfA"
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
