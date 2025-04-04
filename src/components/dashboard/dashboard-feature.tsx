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
    "R5gqr1dfkjKowBuV1vwSyeXAjErVitumgvuJ8uG41bKJGjsgxasVru6MRLLVQWSY8ohqjFJnSUeoZ8RhLMP78JL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ELjYzK5uZs2LM984a9L2evritcjy59S9kkZwvdi2Wr7MZyLpnLo17WAniYBqSr1cEuPvJ1PnbMjp7Yhf1t4ziZh",
  "key1": "inuGrFAkRvLvs5R6M77MakVa5SqQ12pnAeNgrtFa9rJ6dvhC2ockXRpTjN5Nf6uCSoqiadQ3bwQMeuiWyMcFPwo",
  "key2": "EDgZq3D5jRqA7e7ayERUHAmWgTFaoth1aRWJXzsWMoMVjqaiqZubKYRP9xpzMGJZGGUGXfvZwg5JX2dqpsmjsJT",
  "key3": "2XmPJDnuMavevGDfkjieddLxaTMypZhArfFH1zqQJW2mGdbp6dyZCjannNdaVSkXS8nqYMCx6s6dQeAg2BwfK56k",
  "key4": "5vPftuPPPLuLLCUokn3aL1y1e6ENbJR6kUdHiWMyCg9CmcHEzxcLuUYBaxuqncS9vtKBQEy2sjZynw2SJnVLC15w",
  "key5": "3CYJggbYNP5GwFqeVkR9Bry6Hu33JFTRJmsjXwk8fHo7nUdiBv9U7namJVWc1eac9TjwvGDBDjg11GxxU9rcWzSU",
  "key6": "5cDtuXxkTrKukKFhCE9GApK8VjyAMPBdWrZBKCAWoxR5Fi4Hq7SMcnKK8KC5RT5v754DoD6xDVktzZPdeayCLcLV",
  "key7": "49mepgSUCYra2qQCU8Puzhm9KrvxdmKFjf5wCPnEvzZE3AEqpQ2BQ9CpRQbCoqS3j4inw66LsfEEoUgCGhd8uWUv",
  "key8": "Ee4BFsPMCmqdSxEWFcPCxYd2yq5KdxFiDYWze8qq8SxCyXSKyptLmErD5Z16iH2Vmk2qZfeq7n6JeBt844kvUFJ",
  "key9": "5aXXBNtWAk68HsvYkYaNTorGsjmzAn8nhBv98Q3yu255L5guvxtTFw1ZhXVqG8gcSitHBKoDqectPQTiRv4DJ3RG",
  "key10": "42kiZy9s1ZUHGzwenaYuPFySczFKBJp2DFuoDC5nSAWuv6Ujkh4iqq4PQfsZe5FDHzSgEkPrJ3nyx7rbF7y2kme6",
  "key11": "3qvwAFJbCiF22hvfzQF8AvKCE7A1G1HHa6BMhkbD1VLuycwNL21PaCkissTtqGzS3CEf5MCLkjKeLMzduNRvp5Ff",
  "key12": "41SR1ULh75Ao6m3J2wmvDUD1eEbY58QMEkp53eyXuNTx5qXVj1Z82bFrg8hdtfnQfSDnTVuTmG3WpXd5csRkScFX",
  "key13": "29vwEmW9RxE8HmGh7JZQQXr43a5xXeDK5xNBeDVUKTcqMf4uwBxRRQC1NemJJSrLmjqyf9joKJC5pi8BKPkjcKnP",
  "key14": "4QEviCV3dD7bAJZxyvWm9qZek5wWZ7BRnaRKSMjwCB4P8ZLcxn7WYMtQLAEv74HiJHDzXpLayaYfKZY8wCCKNi75",
  "key15": "31bd2usMd3G4w2884tjAGb55UE4iE5gdniiucpsV93Ku6QG9sPwoswKb781DHsBEX2uqmokG258tEnE1LB8nFPtz",
  "key16": "52sCSFwrKbbawyrCVtaY5cKSDq4zxLmDPY7sfhqerYpdEqCWnLLfMb1PM2KbTPZxV2Bs9xAAJ1Nx91uHUPTVgGE6",
  "key17": "61uHyWvV9ArVgm8ZoJhPeT2cjzJAQbwS8RKAZYW4HCJdMCBDoxNuDcLjkriyR2yRHBmYUri72Je2k51eQb44v9JC",
  "key18": "5NrQpNLKBjbRSPaQyBPihcLW1xqCZz5HYxdt14mZd47AruhctxdsZYpu24K3NVAQnui8s8HbZJNZZbRwkkHPqjvf",
  "key19": "4io2B2oXkNSE7KNe8a6EppA311RiTqnFJiFDbQyxS2dPUv1eTiD6MN897zkvFxU2UGxHFtGktdfTobk53k73Rg2L",
  "key20": "5PyCzhm2V7iCv8sRFUprLzic3qe8sc24wn76Zbrm6SEyEXNFHewrCaNNq6mtDQPCmjg5up5M7FVEUJeurcS93uAw",
  "key21": "Hj4hAzQywEZw44XbvvNBEh7UFCTNrvYNzrrwKj24m8d6XVKm4qw9KL6HZkoQ9fDdnPevxdGXJfDrxE7EfvwL3Xo",
  "key22": "3tGj3Fuz85J72AFZRcPFYj7uqx1dFjGffqqw3K83SHnK4myoW8qU9XCkXERryWE1bytPz9z1fZGuEm4beLRwzuNp",
  "key23": "2J5gLGnKRZ4i7dkd3AmkcMjWDPHh3KDDc2WvN8zZHDBbhkUsFgfD8LULbbS7bfRgU3pub8Tj4KexiFxhJnxpVvjD",
  "key24": "43hJKdSMHYokfn3GYfnPwrs5DxugkArvsiQoj86WhKkpVGnmWfVhqRwoZNQFFt9r54569LHvJN2JF6iEyCQM55W2"
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
