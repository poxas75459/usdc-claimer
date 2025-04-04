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
    "3ZFHGnVcp6btt5S8v9TAGg6bvUVpjMdiW7u6JtCXEUMnfaoYotP37knA5zZeA7TxS32kjKxhxTfmcsB3boWVy9Tx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NdkyMYYZHXbw6oMtp6fV71ZFA7AqvmCxzwtUVB7vDvcsw5Sf9H3TEuS9GNiLHkZU3ZVhAqTkmvWfAYRbLbYy4sd",
  "key1": "EzS9nX7jGQQBM1VtYoonyjyXDzY6SCrPRVwb2FGkZXEMtAK78fMExnFze48zA8ppdGPQB3ntJyJ6PhvDWNjwPa6",
  "key2": "2ZWEvHEfiNJkAEPRAgo3c2j8FZCQDB6NL35zPLQq2qoAWKtYrQ5zeJ6t3ZheJeSze51D2Y4C5DXvxkhGNNaWNoT9",
  "key3": "21nwNFaXBPBZ5wMqwT5s9GC2B7JAJAMTBr39fhH3VD1VrmbUqBTCmFRrVtC9YhEzGJCoJyCWfCShGcNwHavHa1kM",
  "key4": "3zEBwH8bW5Hcwfmn2QJK2BxaNnHUA6V1Th99LX7NiAfFnCpo69MG19AyUmUJUMB3erx3863tiuqnewiJQcr6c4LL",
  "key5": "2immCyH45TWPpE67gq2Ngz2osSkUfjvT578pCtHbJzZSeabbkn3h9c463UXKC1ZXNbqaeGSJHBw7ZZjvAc5NgpTf",
  "key6": "EdQVk2tGpYRV9bcoYVKZkdvk6RNBYLFz35d73JQA5NXKpaY7wcs7qaB1SB33PJ5d49X5BWQVwgEiU53Pd2B4kqU",
  "key7": "4J1iZTcSKBKhCn7MJucCttQhr9pPrHc1czbCoFRnBn6wXhhotsVSdok6ykKYe8WrKozTmJsYPP5d2EjnPNeJahr6",
  "key8": "4VKsUU4XhCxXMeKdLzrTqFtVezVY2eSQvxFMveLFFaYNbz1CDesk8Wyawe7LagTHwnxcXSMbx1SQkAEKkbep2d2S",
  "key9": "4rBGNDZbXgfbToRbzcS15Du6mPQZ61HdTcMpf4NF8zqYPdaTu3qEdkJQEQ5PYSpjkk8wJ8EQPb91xhLvNTjLm6t3",
  "key10": "54pECoybUvwuKqsJ8cDKxKQTJ4KE5Z5XethybwsWTEmRFcDuQPpnRg8YF2H8REsLW6St9JT93zyNkKRBbKX2KMmv",
  "key11": "s3LisC1q2Lr5eVZaXPzSnScaovXqf1yMYxaSyJNd3qEP7kWAYaGAh7Zd22C2Lhs1YsfoYZV3scEGvGnpND4eU8t",
  "key12": "4eEPmRMEnxXhXU3ord6Y1eriPwakwVH8nPCYggnKh6NoiCPt1X2e42hZtRqfskCzKpFcnPZM8FgbAjy5uooiKDNt",
  "key13": "58aTRFVPzHJFNSYzJ7FQCmETEkvpXYGArVNFhQCGTxnWsKbctGJ6EKUELrU1AJ5RWKeFTqVfADEAcPPDF8jALTLc",
  "key14": "4chsJkkXRQRBS4jZW6nUyYaou5Nt5wUhP3BoKWx7YXrKQ4GqsECv8VEYgpeHhBp9cPAqagHYNU6dRhdYP7LftvK8",
  "key15": "42Xegje7sp2x96S8oFBvrwpyh4SF8AhSTts9JxysGZdgLTpCxPmA1hwvCjBtq599Uk8dWRLoWyDgV3ePxc14PcsB",
  "key16": "29VVTnuw6kXxna5kCTo1MynEn2atwFMTz73KpwVRnoEiwzo4Gp9tM8gMjYJegtid384ERkQDuW5i4eGD7jhbg3zM",
  "key17": "4nLBx5iLrweqKQzLyL13YXhtxQ2QCaX2HwNYNdw7jX5Qz26i8R68A9d3majtxoZvMJUzZVMzYqfbGBdYSezYfQko",
  "key18": "3Jdp6jQmgV8JeUwhkXKHSb2QpyuUiXdcnWN7HTbJbeKfqndxQjJSsWW9hynWDFspMDxkVjjP7C2SJ1XdfG5c5mbG",
  "key19": "3YYdvu1DvU7R7a3aJv3nKfayFFfip7c4MmB7iFqyNcs65LDKrsTCfQN1CNhmPufBfLrdxpF9F7FzQQzAQQ5TgqVL",
  "key20": "4oi45QgKBZ3DfT8scRqNYitG3M4EYwqjYogunwRhNLQ8dsjMQKR9t5goziY5BHybCMwUepdAyjXYXA283YDyExpN",
  "key21": "3WocESKeMUmyVPTNVctNDkBNQ6mfKWmqX81eBpvhn99JmGHsK12UMGh2225hZ1eFy818oq6Df39kUYpjsgd4Dari",
  "key22": "5R75gdU2Tf4CPF6viPcGpf61fP6v7Nh963BXTD7cDnvReb1p3pknVFZ6RE2JSAmvbh12CPwKGaugKkMXm42hMvyY",
  "key23": "2TCnRLw9eBbrxFyNZ54MdTFUZtaybo8esfXH85sRmvhb2AAL6tcuJvvZPGhyKyZkwpj1vKoMxUBcK4eYaSMQ8eNH",
  "key24": "62sTb1zEM99MiuNEV3NnKfFqgg2ih8BoepL5WiESjrF7ez3RJz1ufPNVmRagqvUUjvZCRaVYs5XxASBqUNBryhth",
  "key25": "7mUfGuDFNuTycKeZgNxora9GkMHDpo5jbgCNAjdv3LVaqxv3Yz8TbUVUyqCAu6ictdQLSvEo4CFZYqzvUeqeVMu",
  "key26": "24LoMEJWyqrsBttFzroyrJLjLcoAcJBTrJdPjLQfZwFeCam4PyVUyAzfgLKHGzwg4Kb7doHzoNZdBzcQ1WRCf5cE",
  "key27": "VJN2tUT2xFSGiL33L3Gw54R1pNYMjhURo1Q7DsFQm7KvoVZsfGmxgvN2PwtC5QurcQcWC5w3Z4eWHVe6YFHY8Xs",
  "key28": "2jXtff5reS75oDG6KWWZQRmwtTtt7397ScB91BQBFiApWNmMCkH7HNtYut5bsY8m6JtEHBa43okpSXi46fRxQjHY",
  "key29": "oJXZPKjcDWxJosmEW9NMAjJb67iTMYu5PJnUrojvK9GsByHHNECj84Y578JCEfjCpSmY54Td32dDLRWEE2AUnai",
  "key30": "2KZDLMmfbFQV5RaXq7bYEeYbDjMSEzJ9dVF2RDvFSSR2CSvPTHxEnxB2wyt8QJbkAKhYz6TZkNLKUa7aRMUTicW6",
  "key31": "5FXk5PSjCxfFbjBaUPSDvLzUdVZwK3KjHy6xeBv6BKWTAeodjH8MA2YNe3yuw4qV1wYPkFMZaUUw2KG3JZgAW1rU",
  "key32": "5jZVZj3NLpm4AxKVjLVhK5GehDaxJ9eGw2fNVK1tgTe2B9q2uR2qJNxPGReszee1wUh41sVTm8SdPKDBkJjXVp4X",
  "key33": "2yv5WjpbtcQz3xbTg7nvz8Jv6ovkojzLWtKV2UuV53xrS9KbmAzRe2mvWYKkQH1gDBFQZRkW6WR324m95rMJTeJG",
  "key34": "qeiSybpBTFs7a2Wfz1E6HyGW3ac7THvKMMEFwo1BNSG9Cr7DBtPVEqZRdUQVbwcMxWNPsoDaFVerRqPFML9urjo",
  "key35": "DEBhGBQwxpjXbqFXPk8obZwGCjizeYckMiM5tYtGR9BUdcGuS4brpLLkCLkGdBiaRZaEbYuhkv9VCMQAMaB5E2a",
  "key36": "3AKArtkgajtqw5vfbR1Bsjg8zT5uUv92E1G3FuVGDKrTnbEkkLv46S1mEs4mXVqiqp2zuU6VucABZrNm6KaZLCPF",
  "key37": "2bBqjUdwTKj5kik6oRYHgZfS9L61WFiK8g7mUhvxCYi8Ht3HriPnWW7oehXLTtcZBKFJmGo1ypmN8nzFjradtWAK",
  "key38": "3WLA2CmrFN2jLixDTicYFVgXJQ4ShyR9ajvUFZa3YqdRsJ7A2qdMYtdA3KwC7RhWg1iU7T6zantyCk6u3nGXu8j1",
  "key39": "45qEdtrNdisPcNsm7QbbkFo4qZZFTuE8BJn5x7Fki83Ujw9tUwbDoa8poUyDnTqz4heEm2yFoNsTe81PoFp7jEAT",
  "key40": "4m35SJ5GecLWNFcngYuPU1qJhofH4xJrgdtP2hCigJNbPuFNFakrQX4USNtds2KVn5BJeF6eN3mwiGHdzBPAQUa7",
  "key41": "4njp4ADYJFy8bYwu1D6DLV59tKu3HVkxSf2oNctPdy4DYHBqshRFWAzdYxJq4DX23VP5nNbM3CJi9KCNVy7v8w3u",
  "key42": "3LxLHSoTjKAce3agQvW2LNCsiTjQp3mEvXtmuE6fZqGZ6a5UHnQ6Xr9tA6Btb8Q1Y2j6bnK6et5xdSqjmTkawxdU",
  "key43": "LoDFb5APWGpy79Xh259MXoNL1cAKc9RSZUbb6e363LRny4BfjXJyu3n2nQUtVuisBCqRGDevXUsPa5mxasVdsHR",
  "key44": "2k7SyEjZEF3n3SArM2YtuSVocuqFPBd4dTnXh2YQwikezQVDRJCdfcLJAr1WWHEbvguMtRisWFBrrHeHjRExPcvR",
  "key45": "eNEPb6aiw4VcsKLggV8GGAbjGibWHoGW5CS2D6egJo6ffSaKpvBMYqV7AmEftuAVZMM8LJCEiDjN2dcWXFJnM6C"
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
