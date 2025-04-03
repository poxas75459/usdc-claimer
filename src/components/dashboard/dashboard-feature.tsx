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
    "2wqV5RSFsaRzNu9EUoBoF5WyJd5hcsWeddvLvcyqhWATAwLxAqfTERrGoS2GXtQZAKqfAMGUQsxxMNyyxqFrkfoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6P23Gsdtr3RRUuv6zVghPcHjBwjhTptrZv3mzbEP6731d68HMyP1pJ7BP3NgN9Mic76gBM76h4YLR1PdPQ8AjBG",
  "key1": "2rL6wB4uhrTLa37HZdZAwoHxqT4KGhGAN1bJemSbGY8G3jkfpToqVwve9jKoniMAJeVsDD3mNhHkaPUtegBNi6pm",
  "key2": "5BwmWP3tyVV79ASAQ4GEphQrMvQobXwbmJDjCgQyvz4Phi9i43SFp3RmKAVdd3bEBYZRdcBBMVmq3cKg58w7xXmG",
  "key3": "2TVtJW7FtVGZgGGcGG6MBE84gQw5gNHY82DYXvLtCttZreZd2jPB6HCBkNjpfPVWRXc64CLBgKYhGtyMjDe1jyJM",
  "key4": "4r7me6Se9cNe6V2dbHTyEggCDoabBNN8LTyrrJn5CGvwesZEN7bZg7MZ84uB1v76QkpXjWTWDW1epH3wX5oxyxtD",
  "key5": "4aGuvDGqXqidULo5A6QZdqrZJY2e5P4yS1F6m4NX4GAtBn5SCzrmrPuvum6szcptCPfhH7yh5213K8io1oSa9ZCV",
  "key6": "3fmLdFNQxoFb1tiLb48Yj9P6PQXpNa33gwvp7sxDUqf3rM1Gyq8uymJC71rZyY4wmEWpEi6xdAmEtDaUmdE6zC9e",
  "key7": "3PEtz45YuRQupGhGTStueJRrfU8NJzXVbBcmy1EVRSuKZ99iBjqYsTpswLzVvEM8ZbP4Uj47vSHCruJNqJ89Mz5D",
  "key8": "3pXMMu5ZZ4nRsAk3jTQj1ZxAqKKAjfaCauz3EFueevPKtoZDiFMt8VbXbVFNAiUA5wP9ypfG95gTPCNSPVLKCHCM",
  "key9": "2jczNMKNnTyTvWCAFnZKnG1WFuvUXkQxSY8ine38pFf58pU2xXkPzbwsQFP1kkV5cNNkvXQuDGGM5RD7TC4AsVV1",
  "key10": "3sUmQWSZgKcVrqEcJ5aUzsUkTJKPHX5UmdgJMkpksY7EiMzZGi4EdMhZo1BM2WHqLz1Mb8peetUoEcyGJ4XThpMp",
  "key11": "2XzxMHcCo529nWkN5WMHW3yR7SwpDtHRdBa31ELYQFq3c2SaKHnfiHy3nmu2fY4PvyvbVMaufoczQqPpmvXprtGP",
  "key12": "F6RVDRFAjSn8mzsmTwzJ6dViCS4FtVLL9JXrvcKcPW5yvmU4ma8Cy4jnbx3Bd64YzWaUftFBGs4m8nxb59yrLt3",
  "key13": "3yGgwCPZv9ZcCJhF6CSMykM2raoqzenY8idGSq6LYrwPxUaQDrNuk58oPkF8Xtuc1PuJBPHaUKg4BN6csrStmxx8",
  "key14": "4amttiH1jRqDow2p3QbjhJEuKbyQQYE8VtB6RXB8fE2sCn98geU8o4qJg2yhoV1hEkQoeaor5hZyjTLovC19uvm9",
  "key15": "5uSbL2XfWEg5chvJ2rUUcfHReiH3ScaVr54atDD5iMj9C2YAcy9UMX9M2Gz3xYx14pNtkbaSV1moT4knAvBevvxS",
  "key16": "4uo1LhzuWa5jZn4kVP5GzvqZ8GqRju4YcnHyajiupRmrCoS8cWAN66xXfMWhePYZ9bbtYV9ps6qYVvjndq8cPSgo",
  "key17": "51is7AXXm83dhqXq7g1WLyQSh71CnLr1g5EwZ8Jc9mtRVDrW4vP4wm48Jrd669Mbz91kMAHa4peqi9ggT5jH7t8G",
  "key18": "3pJ52pV6sej6peXwBq3rMMmEyaZ9fSZroj19VzbAkvEBvAnJBSDsJSrBk2SDrAn6zjeY5QiB4mXUb2DW5M5Fq1Gs",
  "key19": "3qphLsnZ8e9jz7kKGycc9RhePg6W4eCdcT9RoXTvjz7EqYK5rm3zJKNMUGs111fAwE69PRkM4McBrUeT8GsGVKpk",
  "key20": "5LmzsiQjRh7tRqEKLTBthi3hD5HUkSYj78QHi3yXNza24ji5rv5opSU8LWL2SM8du9KABGGcUZmK2NC8a48XNr6V",
  "key21": "38Pqu4DUFMMRcWHwNbs6bBff7SdQFqkBBygESMedwuBKJzXSyMrUY7mLgxWpF7tGjMMTJnSBom3uSvwH8ftpEwph",
  "key22": "su7BqNHPGQFqzDF3mGK2V22anbYoXRmf1XsmbBWRoM28cAocWF8snmZC6DHQ24NMFFLhg247Lmd1UppQwLs9AYs",
  "key23": "4GhWUTNDzhXi88r4EZwuKd2Ao6zaemkkVNysVgsPu8KZP47aDnrcmJoJeLNQRWiaCnom5GB45MHJbQzQruvDUTya",
  "key24": "3A8ZDGDFsJPZ7r7TDBF37BwVCSLqcFQto6BwKE4qAKRZVm5rGzUzWP6MUiUU8EHPLZB2ndHkotXgTS9CYujqTbED",
  "key25": "53ecn7QXb13VNA87QBifNqBe9XsuFrsx9xu3WkBX3mKDuuKfXmCfRj4VWvbYyjzJ1GdT1VLK1aA6YgtQS27r8Bva",
  "key26": "ETy4A5LXD3jFsjtQ4VX9MLoWBMq7KMkXKJBohLdoCK7pwM2NdVmT9hZRhaPNiU8bmh4gum4NLUbt57iNE2ks37w",
  "key27": "HufEJNwHRH3F7Fhf9hqtuu7zrBtsesSUrwAJtA978bCF7aw5YZgkkzVFC29fXxU9hefA53uWN94aJk1JCwGaF49",
  "key28": "2vXCuyzU338HFPq8Ere9yM2EbSsbiD44Pab8gpvewVAAbXDobzgCmhqSPGZb3jKYNfRSnrkFTY2vz27eLqv1Yhwf",
  "key29": "2zTJKNQixvoaHcC74iV35E3KkVvHuFdfLixwd3XaxLb1cyGLaoT9rNLCAsfgkCG7UVaAdHaKpmGGDpQwrgjPMRnn",
  "key30": "47jgaaLghkL8T9odhCSRyqxYEvnhFZdAbwxCSqwmJPdfPWFd6WyfkXGfUH2DKmQ3M5gP1dhwmDvU431J2xEUVrt3",
  "key31": "4oPuUU3UCSDUjJU55YP1BndqJKvY24foL9aw3thmTHiWD9rM3R7caC1qPsySqxgZ89gLhjukAZ7NNvFxRLYXU9yW",
  "key32": "2DjtwH9Kmdh55xC94eJMBuYLFv3pd4k9pbEJAqV3GT336JsWVdUqzQ8QGTyYhL1JLDz8AArjf7R2DVetcJgMcVXk",
  "key33": "3thu1sN1fk9hcsFcFVYiswTCT7AyVyNtCk3ntzjqR6kE1p9bY31ogwk4i3MWrQRe1bMERL6wPafYVbCzGNwrCbn4",
  "key34": "37n9jkxHbLJJ9N8aQLSpAZ39TipA7773Uw2Qkft6py5CQdP18LD3hFWzUdEJM24v6tQ6PkrRmA97mrgt8gTtQqCR",
  "key35": "2DWia5D9GfbKSZApGz4uRpkh5nYd73DDJKijFuMbwJdoYnJgQFfTZX4Pw936oNMJ7dLW4EToG5UDPC2UJMS5eepz"
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
