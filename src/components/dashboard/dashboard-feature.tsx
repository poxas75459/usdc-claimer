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
    "5uuA1KGK8UUbFLDd9eftJM4d6rLoM6e6Lp5FYfKuXzmiQPD1nbE3QpcMDjzdhNXFDahZjXVoYaRey2rk7wQGjFod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DF7B4METu7MWJP6eDki3LgPAstGfX7YYXC6bGx9A7DdZG43Y2chu9d8brSQX5fWFrZc1ucdr4Sw3komKYYza9qJ",
  "key1": "33g6kXmVncZSZqWtbncWReeihvjXcN1d8m5eeHvknHNCask4twiF7NXKqarcmehoabZkerGESjW8M4fZU5XQ3uk7",
  "key2": "4RwfMs6SkknhuoZf3gjm13NybwXQ9GxRVP3CdPFxP22v9zV3wGmuggWUDCSHCDkLEJXGywJ3XHX3S4n3cNwXRd3x",
  "key3": "4cSJ4UdgoD8ypTpeHwLUuKnn5aScQEksKcDnBAd5QrAwdyi4j3853mSKVzeYnpvKfprmqhaDvMV59tpGWjuSccbx",
  "key4": "kLdviiRBZDHSSopUP3B5ajSxUXoW38XRyRpUp1YLDevPNfSZRqVwnmSAirnhvg3VW7nGZC1n8Ea4J1emhvLZs67",
  "key5": "5wYQZfQe2qRrcR6QifS3nutsBhy7mcz5Ef7stQ6brqG7JUnxEqyU5bGaDjykAadLF4B6ZwujqjV4WZXjbNt4eKWr",
  "key6": "CADqDdBVfcpTp5sVpqSG3ovj9hgEAjeMubqgk6m1HsKZHbG7Wy7f2ofEGE9a5ahVY9dbEhitNJzo24SSn2RURNe",
  "key7": "ovPmPFW9rGkspCodoNtgUVVsejxJPyimf86JFDinddhe8uAt59yM5swi5axXKn9G7SgWtrvijfQvYU2UP2bW2zA",
  "key8": "2cBhwXQ8NQj9MBDoqAU4JuXSpf3X7SotKGFE22khmpjrHk2N7ddBhN9oWz7UTiqUFMbg2WNsDnhLACba2J76tjTP",
  "key9": "F7BP41YWyGScCkgJ6inZrytSkpmWnAFkmrCEMzRd8ZXmLoj2aLN7Y6kfjrZgSJ7h9Dt2WDBsLc6MoSEh1YW3nvd",
  "key10": "gPYHPGceJpfMSh4fUDhRACEGqnuyvjHAzDPCFyXP7Rbmm9fSZUC4thZx5d7HeBADcqoBHcroSfiWKFR7BE1G4N8",
  "key11": "3PbwWrhtQv9xj95uBjrtRCXrMVTXdb5JVngPCy3NLnRnC5V8zSGkpJuvTsWCWMcjdV9tJ4NzoCXMiKRp5kYoodZD",
  "key12": "3pzmivFuubRMHmRp8pCeDCF8UTLw6YTZEQ2psCRWzxudJFSdnb8HaK9GkXKymTeLQVVMr9FkXEqHRZBpXp8aULxX",
  "key13": "4VSFmtkxwBTZThm7hbdDLzW3q8pqzKWrVs6ym3qhhG4CPrWwp5aUhqFEydmLDGUA8FudLA5GRU9iTotEBBFBjmG",
  "key14": "4NsavVBXBUnZFbG8xnX2sauYFzg3zhTPtyxS2tQGBReHbm18zmH9w1XAzmcr9WWNvpkZLJzAqkjqwqBcdF1qPMR7",
  "key15": "2rbxN4gE25MnZxCf4Z6ptxpaK2uJGcbK8MzcNjuXXVpcnEnKE4CrZAGA2eCjvQHfCZX3g1egKGobUZ93UBa3kvU8",
  "key16": "5S6iAGS9THjc55Q3xCVDfvsrAz3pniwHrAd5krJm1XjEuzA97cAiRB9nhKhLhpBTwRp7JraV3nydYA8MZSq4D1ML",
  "key17": "24AwibgL3Dzbzkbd4MLLSjvkj1y4SBBFNf8X3L2L66SJA8suyPsGap61xcy3SfZ9zu2jP2Vgr2db6ZgXRQFohTi9",
  "key18": "58bPTyujwSXgoFU2RndfzQ9wWetZvrWH3GJqa6NFfkVsTojZTkeRtPhPbSqnrFqSuBcXoTT2H6ou4EW4zsTbV8wR",
  "key19": "3sWmcUxpDrFtDacyrKczgQ3iDTyQ6ekiCdjoQ8fZQAGNhS5ikrgAtJGdERzTkukGzoCzPZcW8uzJyNqFYDY1PDuj",
  "key20": "2bSFn17smZpwVHwgBjqxLbycHeqBwD8xxNQgnEdKgeR5WsGJARCCjRgp5WyciF2hctxC9M2AqfcgUjaffx6oxjMh",
  "key21": "2vwsbcUn7m4kBpJDAH4ybHjXciD9ptTCMtsJaCdXLV7WHjLqr2Fkw2FBH2QaDYhdgi7dQmArTzagxLh9zRRfe7Wa",
  "key22": "62b2pWcZEc63Cq6iuqgA47zrycBzrqyZPh5qxxBSnbmwd4xg5i1i8hATgyDW8icRdjxWKfpBfR6BehBFJRa1PdH1",
  "key23": "3iFZ3iMsF7dS2sXiG6HCEE8UEAcrLcqp3qc9f235CBLhvMmWyvdZRh3CC9bK9pH9GZ1eJ6MN1sdW7KuK59B5AMCg",
  "key24": "319vPWRBqDG3xtaGoZ2VCiVeCen9nGfHcTS6YFUiqxL7YHhr98YFR9rcjaGG4xaB8UnXdwgZwH9Vk9YLmSY68LCE",
  "key25": "5rzCzBzNTTFQtWNrtu3A7jL6UNKXJ57r3QpB2gcYagpDk2hpYicpf22TWgm7LAwNxB486tr1t4GjrVfHWn9xbWbQ",
  "key26": "AjkvYSiYwjnaEQz4vssfGSFikUBwG9zL1fWfLfcVAVo3keXJ62ytQEKYDwBNpyUg75e7qBj8TeBcXYnMZvwfmem",
  "key27": "39toAbQha2icMXCbQucFVaUaBh5uAYre8nzdsTAs9zCJyWdJYgMxeCqzgRVu6QxPVfuX6CWphphTGu6GMGxXbtf5",
  "key28": "3yBkEF4nhDVWQUwri63dh1czzwyuMgj65gAWcFh31UU9PFgfrVJ5HY7YbztgadykSfnoVhuMZTg5eTnStcqb8SMT"
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
