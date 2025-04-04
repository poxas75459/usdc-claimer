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
    "4eaKp4oR3h3TEvD3HXf8yGmFh3kvgjLWt52iWTKkVSggWQmjM7dFdPTieVyRdT6wdH8ukCFzQew65adBBFjs6xox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jTdBimnqifqJkphbiKMNAgqfqz9YPbSLDiQdLi6xYz9PEUqNAf82ostZ2arTvoAv5qde7iSGbCiWTpDZhGvigSN",
  "key1": "4rupCCP24jaeA5K12abnQe3MYHcuZSaM8ucLsFWRXALaSRvowTpZJKRhf1jQDhfQqrQN1Xjebut2kycFDUKi48zx",
  "key2": "3Q2WVN8reqd329uYY82Tm1V5bEtLVdJQFPZEqfeaHw4UXghjUHhz8QsCXgaQXGYohfDiSwZstJv4MMuBsTxLo9DL",
  "key3": "55xESJ9Spi44dKLJpkunoikMNR9GiE3LdQEYj6DMm63W6U5d7ikkdyQd49VvqSMDn7wNmorb8YkkCBnGLqVFo9Ph",
  "key4": "2B3Xz8BJgYrRkkk3vD3twGAvCLDrN87AyWWC1ZBsfv3EidwJDNPwXJybR7hciKKirHynAT4KgQhJcFXVp9xr2H92",
  "key5": "4mCFv3MkjDgRhunt5wApSBg482886nMqXnW817CEef7tuP8qNkphMjbKA9CwW4oewdCrEepdZtRJjhUL3r4nnQk4",
  "key6": "rKawXrGgP4aGPdoL9JQ6C4Ucib98Ehb3u9yrR8NcEFQHZgj5i9bnFSBdozVdqv3XVtQky9pkweyzZ7T4yVGqeqA",
  "key7": "2Nfefepukbkp8YjykrZriBDW2LKAofTmnDuUZgcW8B4bmuigoSoHZK6RLuExLM3MMYPe7DejNz6Day6tTYuHfBEa",
  "key8": "2Zt1KVKp5iiP8j8SRyUsbztqHBnraMo1Xmfy29sxQa6adsgRR9krzcZA7FAFxMirU9jAUVaEdhtmp3gYZ5fQcs2e",
  "key9": "5HPYUcbZWY29bPsxWGqhcTX5xAHhDxB5TXMkiMS7yUJJG3PEjov8ZFEKcDZBWZcPemtkeE6esxBxz8dxpYAbMoJs",
  "key10": "23PaedrUBycFtZ5ziqYBGDP1nfHdt47DaoCxSKMHP4pB35horWpQzyfxk4Rcz2VaxkKu4omf8SouEg5GSXFrHJm1",
  "key11": "xiX9vnEw65fhfM3ZMeyz9gfpLivYExjEaP46pWW12qVvkC4RcYsACuRa4AYGbU76nSpZwG32dupqBTxUTQzMcBX",
  "key12": "3ru7m9kZSN2c2j5Se9tfvtfFGrmGUhnTrmueXWPvooTqD1fTeL3EH48nLpFQWc4dXZfcxT9wPzvSfm9t2Xej7Unt",
  "key13": "sStmnVfXqVagjpFJvrKAYQUg4yEeh3PEYKHhBFGUmfE5AHyQexHsP5nVgxuPjLPpTT2FQ7FETGV5gBN3WWeF38J",
  "key14": "2CU91ZPUL8gAhddcdHDRtYhgim8uH9vX8yZscVvakVZiiZ4xeJPFHZeSMpASwX2X4nEgSes7Vw7BnLJbk5h3y888",
  "key15": "3VT3P84niB7S5BBwnJNN3rudUQnHF3JxrxYj6Fj1MpwYqoaM6QcfvuFxhvv6sByQgP2xAY3Kra5HsHjEsa6gwTMC",
  "key16": "5vbjeHqAxMStnVmVVNZmER5D6NaQ6kKAyezwEExMreezM6zGMPDshPbV3otR7d1Eh65wr5DMN23UxhoumFiKgTA8",
  "key17": "k35A9Hi41E6ibzHNTRcjgxvJwvqPvbEuXrEP572dgdhB28VtpQBWK5YaFfp3USZyMxMS4BjWSexid1RoGzWzuSY",
  "key18": "5sqYBtrgWqieTQtntccsyhmT4zHYmgQThqZgb1qLVz3daD5prXCedvaAikGZwTPNtFmrBPd8hgfkPqVpDRm5v22C",
  "key19": "537PT7r3VgvWvb3sQugC1KJ58NKj7fvm6oGc3m73Nkb4QRpZfwVrLftdYJoTSxnqU3hyq2Jvb48SK2JH2MYN9YqU",
  "key20": "5a5Dz5YNvGjaUBWdHiXFekX5uuRzS9JHhvfetEYVugKK7eEWixdzVECT3z7uh5dkz47o3uUwWRWyWovG7wfasvhe",
  "key21": "24SuzSgVxHHbvjfZkowG19nKUx88G7GRnfFcLQezi4kMTjgCv8cNNcibLJ47NsaYGZg3PkrjAQ9Kngx9sVdUyVVZ",
  "key22": "Z86EfynT9Snb4Q4m5sYh9Usq55mJxLakXdH2Pfh9H4rjwMXL2vXdPXcPzSfMiMRDsdR5xgEqnmNjLwZdKqpe4tg",
  "key23": "2gNsEAXzoQehrYkwVM8dA7KQoAWv6r9GTYtQobfMN1EadHx97DHpupeJRw6LNCk6fHWqX4GGw2RhCbwiADZcXuAr",
  "key24": "3B1DySDbgQ6m5oThvzsZ63Lp8oVLSf64YzrprubkKgUvYbJhc8sG9kKMCYxq6WucswHKiUB86qVNrTDcUiQSPzTe",
  "key25": "JLwnigcoKc6iMdJ3r3oveve4bKtSpWkKWqpfUXHwMjcdxkqivNsQbViG1BEt2TuyWRuD4VDu941trQX6ppxQL7u",
  "key26": "2MDLYsRXuSzpFx2aMVZmxSbdFv9jPd5xTFeNsmZbcpGTDrbG9MfMPymbD5aGgKVzaNfeqz5W85u7wCpp3mRXhFVR",
  "key27": "2BzjQXTZ7qJaiE48AXai6NfVWoq3yfTPVhnCPe2vooDRgn3q94fXLqisZQGzGohN5215tdzTpBpDh6d9E2U122ug",
  "key28": "isW32CLQGxQJdaztfR3DVF1ELxaJw8xgTvt3UV1grdx91kefPJq7v8N8bSScY531KiDxqWRuH7oZHHGKsHWKFVV",
  "key29": "2itRBPshteaPbb2WLrB1xrzFT1fAgAibG6ytVSddkypa6iDPEysFpGXg5euNnEzCdbzyAQcCi9QTAMFvUZokDkGv",
  "key30": "5rYayNF1BcskEbvXYca455psorFjYDTTnvL6x6WCwsKUrzgZKZYXtUDr1yUCYcyBeBvqsLnjHjoWvtBSZ6oBSCVz"
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
