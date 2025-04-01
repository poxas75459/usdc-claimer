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
    "2KjhLriZ2tV4rMoYUtGoouSWtndrBbeSJbtp1xXepvYgrQnBWmBbPkXCsywAiv7MRDaTH7zXw23UMj7duQVP5kpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67FGUzoz411AffXdvsNfVp9foe9P6UUfYFqaPyfhSnr6BxdaMXBcRWtoRSRVGLQ7LQdmaWpz2VaJEyT6EtYHG7zm",
  "key1": "4nVb6RFEsZHyGx7hdRz1r2MD5ut6SdseYsChMh4qp4syHgi2wrCNKLxo5UZWEoLoVYYSSN3hyyY213vAus2RvzNY",
  "key2": "42A8MVEpj8to1gaGCQo7YFA3P9bhKR9rEM1CyuFjs55Q9WyK4wEw3deBprfg4iRLvvgzntkKJcP4nTYrRbnrucs7",
  "key3": "56TwTEULsh88TK8cDZrXx4y1Was3VmYuk37GhhBSXtH5LtHzn57UQbsGNQGqongzfZm5B9tSkkT6LtYSpabrWMps",
  "key4": "XvsVpxyj3kdxTRpSHsicjs1aj6ZyFaAdMTbLKJzGLhEjjx8xgn7HwRzdpunMJeCNssaFG7wUdovn4fUVuVZf5CV",
  "key5": "4FoY2mpq64xubBKWPF2ELnMwLaRwJ2xstyuvUcgvSA9wa5CXZVDCVnwWj1Ek18ZachohMFbjaxnsLu1eJc4hjjRK",
  "key6": "4i5ue6vi5RBvpaE7NLS1BWBRiMVLLUgQvVsnzM7ch4QTjPF1hiPqvexnnG1ytqbPzn2wAXFEwGqqRQgKyvCCiG4T",
  "key7": "sYFDb2Gjd5wP2FLvRTCAWqatyBwJYsNu92qax3xvu6VdNhbtsg8gKx3HfsnVueydkbjLbRviyupQqEKqDnVUYMG",
  "key8": "5k2pxY6PtkyvRNEAj1t7NNVjG1A5GE2FAYqrwxStWKwB6cCptNELhgBH4kQjFUzKi2gNvHP6teZ74HNnvfSdqe3Z",
  "key9": "3J6tDUdJmSnB1cXhMPCnRZzbx5vFQ7yLzLvaLP5U9px7pGZj3ac1ojT5KBwaoGbpr6hQk2MNEJYovc6dP4XEP6u4",
  "key10": "5StUY7i1jG1K6NyXAfkcHWDY9ineGK9qw2MH6iz1MMeSCp2xTpD2Ag79KgpAeGpo6QpLmMQJcuHkgt4oEUwsvbXB",
  "key11": "3ovqZFiyBvJMgQ1a5tsU482ukZoyJaWBCdBCtMHkThP4dV5P15rffBxt1EBCiGZBJNYpx4WpwMKijZ4Xn1Jivw5x",
  "key12": "62qHLjXUww2KJ33PprkHm3afVrUKwJJLKocThQnsW7ws8Xt66T44VgxVChuC24rFHxG5txwRALLC4Ax9SQQXnBr2",
  "key13": "3uxRJ7UmfYHfbK7st71U3vjwHKoMXckzNJFhsFi83XYVFejQFL6J99tGqPhjAqayqxEELvLqi25wKCkvNFd9r7vK",
  "key14": "47MmWXDmNFxXSRE5sWUZW4ELZ53dp5nZJG7ZbbRfvuidP5jiLGve8Rog3uFYfccF2Xr2ZgxGHetyHRp9UEVw7Sfg",
  "key15": "5we4KgfLw22PfvLPR3REtqtSHZeFXF1SHAV6iGvgBCx5bRFZEA7kXVAHBz6cPPYy2jEyGaucX8m7R53yGqn13Y7o",
  "key16": "4SoMC8dYxovgVZiwd3TNRZh4xNw1nxJxrpXBG2e3czXYgBSjck7rWqsu3CResXZ9VSf9eV9UCMc8m3gBANXW2ifL",
  "key17": "3hksk342yiNRbgzfKT8hbjTPnD6X6hdfS6MF5iWh7eZHCgGGDNeDnUiah3cpijTk5Hd3xVuh48SB59qBsZTG1t7X",
  "key18": "221skApLfQseLbf6g4dTtKs1eTadWeqUmpAuZRDZPkU4ZSQpow5fH9ejjXeLqYv8dnNTuMj4CbLXCVCjWiKG8fTs",
  "key19": "5XoroLCgRPypGmoEsMBNJdY18aN8yNpuE2JgUm5AFtB4zX13SjaYic8oZ12edvaub8A81ZKvqpXSQB8P81fBtBb",
  "key20": "MYSGLDxSYmBz7TVd79tNjw3qa1wtVmk96VBPHEMhipAN9XmBy7629YnwYuHCK7PcyFaMjXwfCEzk2hecTMvmAot",
  "key21": "hYguEaWy5FLFGRQSP8CcMozBj4ArxBTPtK1MZX4EVTYvwD2bfy7pkNAJdijc7nR8SPdMhY8xMAGAmBeAbzzgKMN",
  "key22": "3LRPMUZxiu8EKStyCFJpP3M6MAYRX3QhYJGtqG8GVcYDLKGcY356twk8vRk13hCpW9xUwykMh1mP8KfqqPgVcinc",
  "key23": "Ad55vtrJN3ecGizYaKNzN4qLQM3eRWqFKzDi16tzeCQ3GwCGb8ZPugN1kQ4a2T6SpfM213Y4FX8KdyaP4yNdkk1",
  "key24": "4xfEq7vky26iNAnT8gahNB8BsvbqH1KZkoJkY4FZgdCwSHhwqG1Nir9Hd6S454wh8qB9waxzScHNL2iuf7BnXy1X",
  "key25": "meqAyw9XR5mNCYBiiwBZiBB4Q9JRcMvw1H8ydWaDWTcm7gCeWF8kNF3rsRtQ13vaeWNny5e2W3eJkoDQfGeYZwP",
  "key26": "2Y15TgySK5eqAsJ2zHBbB4ZNNzzugKifQvp6nW4xRtsEYQfMQXPMwHkgW6nAjAECHnKPGuh7qzDjj4N1Vz1tMjti",
  "key27": "2tm9JPkCWc1Z8699zQ8BkCapJ8c4kY4VMqEUTDy7XfQhc2XtGdHGJRGBkSkpNwN8Aq3LWfuU1LKYk7S2xEf6hhbK",
  "key28": "3agYE9UyncZzwTNBgTK5y7KPMsP1ibfqGZgc1uTFVSa93ULY6ZfCTJUjdNBGR6cF4zqJwHtX3iF1V9y7K7JWhkYu"
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
