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
    "5n1RMVxHqmqizssNiTnxLnsUkgfuTniS4umez3Sv8eo9SWUm8r5mW1ftMWHHSRPurdwqYhBwKZaMxBATpkeyWnFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uB6zi8P4TtH15EGjLkXdV6vdCyqxitBLXxrzhfYVX36jhH5iejiLwDYvPEiNrtu5d37yD1g2PsX6YduPqMsPgRE",
  "key1": "4cSkF9w1FF7bTkp3My9NjoXgsPZxQ4vaeBfoXvQsT4FJBKrLd9EAH7zcY3hEYGmfN5QajdTAv5w5mMXNRdpn6A7j",
  "key2": "61642FL1HB2J1Gp13chnuuPK3tXZBXzY5wFqS1PF4CeJJohw9EtJewaYeZxumy9NpLd43q76cGhiLq2GTZVRDGV4",
  "key3": "2SquGTT8ycXq5cCEMkykCifPFRL8GBcZ5h2jRceET19Dmva8YYCwwoNYjLCfdxuZropysJCkiVgEavazNnatjA4d",
  "key4": "2PyFq1tvm2yjCuygEcnhEmaqW8nXtPAQkcDwmmCAJb42UgtjSc2CQZAWGF7NKk8unuCkdLMDW5AE8ZXNvEzJSHyD",
  "key5": "84ZZRzE676zhEMAA73prR3CEyMgPQa6o7xfSQ1iXCvgoPTDXJc4u3hLh9toFpzdYFWDAYFtpq8k4bkiw42v2NR7",
  "key6": "3TFdrNtoi463PHNSBKhTqX5axKQcYaP9AsWY8ABx2hpNAsmbopgFvejj2btdrE1XRym3kLdLcBNsQBvE5z7DMGZ2",
  "key7": "3Edd5LiReAa5qybMHGW7HvUsMuZnhBFhhBunBE2qcdvzziy5YEMuDwNP5NWDaA6dwjwhek2AfHNXDZgYaeaJCr8D",
  "key8": "LmudisFwbeh5L4xSQC5B1kgMr2tcKo1vRSy4KxGsqAJ3XSaU45P1qa1j76HAGrFm1Jd3TF6nSfF34fBfiVrwRnn",
  "key9": "3JhiAx118oiMK8o5CAbAjvnxvXKfLuYjxo9VTqoLTmiBVryn1j51uifRg8xM98sjMS3Jf86HzM4XAzbySvyFVgUi",
  "key10": "2zFu2zpPHULP5K1dr7rrJFbkaZase15gGbMbKtk7opSEWHAYwFU7VpFTzXjqnAuEMhUXhtjob2rJikag6WKbSBWc",
  "key11": "3sbFLhnLok7ZtiG11qac8bpFNmTUzSFV5ubWqFgqrzT6WZb7Lh3wKQvyHx9Srn5NqnRpo1F6JjG2gftd1tercPMD",
  "key12": "5LbHKLrMuikeyM8H5AoUMUsZBF91Yn78tG72fdDH8NhS2s4anf7BHBirurc5D1pEwevPtMYdafXTFxSs4EQxbL57",
  "key13": "3z9mTFSqMVQkCh23hKpMmPELcQ9BRRECYiVSymjmCQXhe5komsK4MZiMn5wgg6W9QA9XR3S5davyHUzB6sVAdFYe",
  "key14": "3hk2tN8V8yJ2Bbi9erjwuVnYKE7dmhoPUscNAFdepygGEbr1VabgfQz79rm2hHpHTVvrWajw1o3pCEwSqDtrosni",
  "key15": "4uBnKBA2UeQRi7iwVHu2avNC2KQNrAhBPL9sowhFSX9QtP6pma7XhBy3NMqAXZZYR4Vm1V4YgmN1FgSYi3UEDPvL",
  "key16": "3Qhj3fZ8BUamfcqrpVQD28sPCyBoA5EN5tWPwVnGwjkSCoioLVwbAV2Ng9iF4TxyQKLKT8DpHG4zkCFszEYLZrmd",
  "key17": "25qSRVrAMBnPpgNTHMnS9fb2BBejHrsFyqt2UQ2fE786AstvFsDnhuP96w6T34KB5hgaJQRx29YSpp6FuHNS6ZEc",
  "key18": "4v6P1psoAPVQ9XtbP2qrsaEaqAixt8kJCpfKjvpr2VJ3HuQc9Nwe2augkKoGDLqx4GQeUTvvtrLoeRB8Hn2GzL7f",
  "key19": "2SFNkTEZiNhz1kUKepQaW6hiDaV86E98va4qd565CwpFCTLneEH6tnaa9ci6Kow6ze6zKLDHBDKawe5h9rucT7Fk",
  "key20": "LLRx2ryiYUbTRfjseQEA12e2mQrgStUBTGHF6S4v68rmQPGeRbXmTohXpiaCVJcuh6YDUnV8wRs1tsdMjsMHvhw",
  "key21": "2cXE45cUbRM3BNNCq2NRTKdAKryStvnupbHoFttrLj6tqAE1a8aGwxV7uG5drG3Tx3YLQJcX9tn8PaLTebyaMw7C",
  "key22": "5khhwx3HhWioe54HEZWRzVqZSg1jVHFug5yV1mfL6E5M61by9XNamDEzM9mYLk1aHrayPG76Fe2G263ykrJgB9go",
  "key23": "26VmZPKYVaHmvwkVtmFEsnXhfaqKjUEvh2wGEfDGFJwFWUQayaiaL2PEzhqjPdyXxhfyJsCtzNW4SQnWETU83FrB",
  "key24": "dQSr6wfs39NcnMAk5EHCPR3Z1WC7c7nxiwDyEdJXGGN93kaBUVrozmTsusnxR8e7pNkR2gGERgXvZpq8rkHbEuQ",
  "key25": "3LTvFn2LvizCPHEZeKgHE5jUtXGQhXLwyywk2FzztgW3RHPE19e4CdfapbN4kkgCn71f25HzLtGs8aDRXMaFaeDS",
  "key26": "3MQGh6jjJXaYsUYdZx71XmhEpexPbzcTjbimY8MTcJah1k8diC4h5xaDFg6yrUQUKvziXVzAePtKaL74dgqDX6QB"
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
