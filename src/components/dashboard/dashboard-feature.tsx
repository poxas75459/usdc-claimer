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
    "4k8aiMis1k18v3VCezm3HukT7akY3RwACqdtCGyPcoA3Ce8gqKRqv15nMj9Z2kexgbZrCGq3N2jupuYDoVxoSjws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5auUyKkV78ocYEXzQxc3iKg2FweoJrU3TtnRAoDfWZ2nhddk8unL6Dd9ADcW4xCvmeYh9rWnxgGxRZtj7QFUhE2V",
  "key1": "dKAHoGYEgcq2TzBzopk4JvFucGe6AFftnCVMFCFkmHaznXcFw1WDqSZLp8fwwZDJR6ZSLQkAVRoc5oCJbri4S2w",
  "key2": "2vaQZvhSCL2NTanqV5YDSduooqFkq9wmqS358PGchJCwZy78WhwvydkFXgtYNAgrUmsYbJtqH6dvuKQq2sAFatLq",
  "key3": "5jgxrC85YkMTzfsXQUzxoFttmbchYKxF7hVfkcFAtnEmT9LRwXh9orTSph6rTQX3Z6YmKfv9ZS2Fy6X9wbneqVKz",
  "key4": "4Lrp3ArNLKBisa8gG1F5wntgkFE277Shx1kbJ8Tuph4HPccKt1DCVCGbjomNpkmXAHD8fKTMy3KGcw4ZUwnfC8z3",
  "key5": "2DSg6ujBvAq4CkjgXBZZYJ6bmwnyzYPqX6Fx7Kx7HP9ctxqdNbJCMaXKt7Hc7hCTKnTjDuY5Cs3eR97Pp5YTwnKH",
  "key6": "3zHkHforHfv3PvAebadFZ287WLgZcABcQvagovhFdsMyeypk7mqH29vRjwBQFYsfyxoxB1inLiUpzPH1siKByhSp",
  "key7": "2SmzmJhNde1rGZ5BPxn631Kw9hfVWkPVzNh9c6LeAH67babHo97xJQ4eLWXBfNdzSx9umthWL51Sg2XTwAHgFpoT",
  "key8": "iAXfC8rrwMe2pFgo19xDwYEs22gebC9pgGm7dDK8F9NcGyteGFPTJZQAtmDrvcNTVRbvRue4kDHFg6SVmNBCqhk",
  "key9": "5qTmLZ6hePeRtShjpzrF8HSTYZoi21T2sjEV8wr7GBKGQD9VkXZBVxxwrs5PW6UrVuPk2W9EsyA5w2XfKnZvvTYe",
  "key10": "bvy9N4bnMSNBjyUpdJjwyswn1NQoVb6ibcQu67upBej9H5oZh7EDmh5Q9geeizin3XB5Z5dAR4fMjjiDn8eFJz6",
  "key11": "fVQAcZozvbvYgCfjsFoCe8EFh11oa5pKDpYiPC4hSKQWr3SDUYdHNxKXdSh1cLQP2vZQbVPCMcNGAtVXpJSMz8f",
  "key12": "2F5xVFKeYB38DfnuQiufYSkTRii7sUqKA8rxq1uKz3xdEvoQBsPqsQVLYdL13hptv6Bf4C4Gc6JyN5KwMdk41Vv6",
  "key13": "e9F9oF2uHWXG9yf2FbkysZ2EZST4Jx8pcZk8NVzQ8pNAN62PXazpp1qkHnMiAFiAfzn4yNSjRE82nBMQnmkjgig",
  "key14": "56CY4WzoBf48wHZLR5sEim3XR5Zfasje7o9dqmiKGgsmXNL5dmemd12sXqXYnGve9bnijqsXtcLXjR5JwFfduDHd",
  "key15": "5vhMdGQNoGdJhmsp9YNRUHaHZZYzWEXHBPjQhrPUN4T8kjHdYNThyXBYso59AUMXDQHvy6LxtZqkXwCmGLBGuMKq",
  "key16": "2Xt5Z114DBCcHZDS2e4RgoA1ePJFmGu9exfkdXkEnAgjGzxwVrYxyWwpgpQu835oDKzvXJX27UhpLKHNgJaBvfnG",
  "key17": "2J5LgDSjKufFML1GkztxVJmwLRCfq7xkCyaLqbwLrXMRMwYj6D2XE3yNNGP613Ypz2d6WHRH7KNNEdKdCzdd4Mgq",
  "key18": "63CaY4oWkAu4wQyVu8nhMb1jcN2u4kpYNJVCoroinjkbSgvHVg1wbWcvFzhD4GomeHxNtTvpzFwcS6X7C2xzQ371",
  "key19": "4fGQic41u73TyBakBchfJjg99E7K4AM2pFHcbJb8zbkY8avE6a6zPUyCWPfLemEvkfTMwWw34Wa4bfo1yiLQWjjT",
  "key20": "3ndCFKmKWonRpzFW3RNWoFN7ZU6fpTqZ7q8rsxttEE13wdM5WGkVSuhgMo1He7yrcSJybsacrJMjfB7RFR8sdUca",
  "key21": "4XBfcG2C1jsmXp4riTZQKwxRxLV2EMNNqZEKu9nueiuPSgavKaMTS3NSTYkzXndm8cAyoTtc3ApVLv52rMjAvxJ2",
  "key22": "2s7g3srhct4e5MvfE4BKHGadnhCqm9u1oWBZmKC78q3vYB2r8GPJ1HKsNuDsNWnPB7V69RJp6kh5AAfLMoGnA8a3",
  "key23": "K7VseKUCE1XGaooJ7dq39kpBc1XfVEtTyK5mdgN7PkKXUT1TCaP9gZWAP3Y171WJ6tH9rruK6hCd33JRhRGhaEc",
  "key24": "3oBeCfKoe17GjNXpJDzhhDU6bbdDYYLhouYyp49534JBghVcQwwbcsXTkGaqnfvpLmGkjMyZqL1DRoLQnvzRwiJR",
  "key25": "3bPVdgmtcuB9xg7WR7edZwKgAYU2Ds1o72Wpo5Jv8digX5JweNgsZAt5inustdmffEEPiTQTBKAxKZGWEFo3GHKN",
  "key26": "2PnopGgrnJxr2v9amr83DeVu2dFuY1txLaPj8bwENFkboGdTpMN7EknBh2mDJDPzGJjSZYksbUkN8gnieYRaaLRv",
  "key27": "5sXfpt1uNHqSWz18tvMo3VRrcxLbTQ252CEvvJeac6qNvjvQQhkkxDkufYhXFHFXFyMumNrVmXo5pAv934fgDwMs"
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
