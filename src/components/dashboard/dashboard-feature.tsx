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
    "3DRTy7xdu89ED6doYswtFvC1T6RwH787CKAAf3q7deiGwHCPq13hbrnHvcGZnRMasoLGwkH9onzzJUeLErq36K8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xjBH5avRAQ8HGbRgSJZfCvE576NVg4mDKAuC1PAFPzWtAFxH7pNLMwc1K31atoYstv1nHfh4KTwxDELCRRiybra",
  "key1": "2xchaBWGdCVENp5k2RzfU47pG4hkdJB36Kn2BMDM3SjSMKhPz7HfJuTZCpc51psrybNbbYY5yd2Ae7VmWBnnWisZ",
  "key2": "2cUSAjE6uRYcQfk7avUithuTUXcY5kvgPibF6TTCMy4NZxZLAq1gmZKSpJe6Ug4SBSXaM31VYxmHDyaBwCE1sW8u",
  "key3": "4EAPNhTwwT249h7wLWcbavDdhEZDY7ar9XN3nBs5ck14SfPkR2VLqaCRDLwcRiDBo7thysDsCKnSdDLdwMhieHxY",
  "key4": "2G5gW433Usejs6mWRbAkQ6Hb8dfAgbFrsa4jTFZ3SnkPzzo4nbkZeAgrKYxDfRZ7NTHt4CM9YZT1ZyuPG9fPiXcZ",
  "key5": "4TBrdfw3n48Ab5iqN9QKq8ADurHpASHHDXTngFKHgXv39K8kKjsf1npaiqj4evYA22TkNdLqbHupNQ8uu5RvWosn",
  "key6": "27Nn5axDabLEGFj8ZXaTwGnqhixbFJBp4HhshWzNnwM2FqURoWx6wn2QXxmRJUoFPpudA3sx4rCeXJJ1x78svHjS",
  "key7": "58T4Qe7ucRvkwpV39UtrNm8pf69yiaEJ97FD65xvrew3uiT7CEdzkgZd6Tuy3Dbw84LsjWPdYqE4x3LLcgQsHtcz",
  "key8": "7RvtVpYX942AoY73Gpi9LGhuVCV5HmfvNMr99PtYgwh7ETQtiGaW1WSJ9h3AfuRVPMcwHHWosvgZMHG8GiUMUvm",
  "key9": "2wWviitBeZ7UJJ579PGD9UejQhvo7UtMKkyNVYLq5JrVBQy6HYsGBkjQiQYFSTGDzZs6nvYvhJEA4UXJ7qpa1h8r",
  "key10": "4CNi6LwwLZyeHcSaQ2ZkCta4XXtg5sMrEoXMUgx6o867BEQ9TUMDbwzmqtzCUJdmN5vm4pWob6p3DirftfYvUPj8",
  "key11": "GYGFsCc9jgWV3FS4WcaaFiT8Ph73xwcoJWgkLEMnY2yTqadmwjDdh5pYFXG5bk2a9ZV7J3CKXgS7K9d92RGyJcf",
  "key12": "4SVtTn1x4SooyqDJMtp8VN2sfS6ncDAuyDoHoMk1w8EVTKk5NRuA25qDVuUFK4WpWo84BcU5eqgcPL2Bi5sCzix9",
  "key13": "R4KivoKkDnvxU3TuHaewKLzHsMyiTo67zgjPAyDV3EfUM1bd5L7Vbgg6hjXRk8zZ7pEdZgJCUaJHhfGN1ghNCBX",
  "key14": "3grHQjZ85Zm86FiDXztVDn2e2H3U98tEU48epTWCxEQiUtzmDxX7jvsaw76oLJQPBx87rCkySNyyS2EPDn7U3f6j",
  "key15": "5rdSocEoNcRfd9K4mhc1ukMxjULL8TjqvsrSq5EXBn1Q8xbFqJivVfNiHTFHBuFj52wXLwYKRVxF1MuaVAQ2ARPv",
  "key16": "59ZNfxGhpwcTNpjxSemNW3hnSzkvFMbmPC8asQnxx8XmXmMfihZpWibXNQ1oYkkyzDNbrdJ9dvwTHoCE4p1iShY5",
  "key17": "wiUuqCGpzHiuw6oZaPH3bwgdodCnaz6Auzmp6aT9GPjAMkcegoTUnYdnX19nELCs3DY6tQYJ4GQ4NS2hKpQChTz",
  "key18": "4yJ6wt88faaFwGHUGHWqtiJph4CAe8qZkt42i9YmEXHy9RxHGpPTM1KDTbr4bXwAAe3kuS4TZewbgDKTkX6ZSqKC",
  "key19": "2dTFcz1m16h4fh5f2SNnFWLchKKFNmhLkeod2aDZHMPDptHbcdwL8Fu6HqSWbxCsLkz8Tp7X6mZ7fy5krvYWbhck",
  "key20": "61k6rYvvZHPTSfsgXhd23hrwejDqeVRMDDjRyBrKNPHeMi9BME9Pi75adSnCSUX9BQoxts9g3PiszaD19xdQUqpm",
  "key21": "3S4LR9u8i6D5iBR4yYYphpam4peDBJhrdH4yn7fDqsrsn6CtvskusdR9rPebdv6aoBP1cMX4McYJdgY5ohu5heKy",
  "key22": "BfqX7dKT8yUt162fNYqAzcxkKSoYJs5LGm2Qk9Up4w1GcmiFriiCjFjLwCJQTQscJTH1CT3NPwwDwZy8AMA4Gmq",
  "key23": "EnvMyFMuGzzKegAHMGVYujHoS4zjcJ99CxgzehHvW21qkg4VQbH1DeaMPGAT1sn25zpWRJLyhMYndscrmJHJR3o",
  "key24": "48R9sTM8CL3nnW9nMkB9UYvKJFb7FVvhgSFPXvuiy5wzyfTxWXTDBd8ipXj2LNJUGu7zV2DwRaUBYfiAcvoFPQJw",
  "key25": "JtEqL2oXYuPZaPJ6wZFvbg4gYvNkzSSyjLeHmac3e3fJyguXyfD4PPkeGmQPGXtHkrNd5N35yisFhVUFakxQwjV",
  "key26": "5euHf7xihja63hrjWugsNYopH1CuebNNjexZdT4YT7xDFkUJZFjECNsysHBBdF5eML5JpgyD9WrbLy9BbKABAimT",
  "key27": "32ZgtS2gACNPRLAtnVHRpDeNQNVH5LC9dTa7ohn5tJQBiKUuoYuspy376xqvSRn5G4ALjPwUxmuXGLr9S4Ju58AZ",
  "key28": "4kpZc9E1huH3mPjb6NzgkV6rLMpLXVKYuMKp1vN92DstXgMsN2D7dgw8ufNahFvAGLoZJDfipveX6frm18f3W66R",
  "key29": "A4RTnaekBLk61wrnpAFCtzcwAWu3wCEMNFwhoEgksx1ed4YJRwjYCfjCRJaHyQfEYw4K4emWucizYNMHpTcPV2T",
  "key30": "2E2UG5UyGhHUsjJwfNCGj5hprPqF6ryD7nwpAMZYRzupiamL8cSuP2xnzYP7f16Rs9qBcRs4qhYCuePAe4thzyDH",
  "key31": "2wnWCdSFF1uCWLw31Aegf9FexqnaqVSR43xV1HPSiBCUqXeFd1nbP6RLQ9Vu5urtv95ds6J3uzTFciCwZ2gBznmV",
  "key32": "3GUXU8EB2Jpex6ehVq9LeLdv5Sk9GGw8fowhHB3ZqpSVzGEu2MJeZ8BuMLQtKtG3BC1Hseco6tyPwPCGiFsCWk3u",
  "key33": "4748cpDFCC17Mj2q6htpHz8JA92BXZ1hTmHbgbuD1AXPooVUmmXimjACUokkHgMTgVuuCmX9dBmMLUbEUhUraXSv",
  "key34": "3VAtzPSniWpsABkhHBKdoGeNDCB8m4YkFyL5FNjwULno2K1LfgEj2sRgndSK9KP6CZhq7pDbysU2WDZ963hAaYVf",
  "key35": "49wZqimtBtKtkFRJHJPWbh3auDtckJ8zEBd4LKp2hfE2cy3Fha6ofeNQut7VXaU1ki42NTdvTAoEJ8oQXvoVSF89",
  "key36": "7X7Hd4dGuRFiyfU97NNEGX5giZVCERFb6MX9yoHERsCDAbBWUipAJNPHkmDwd29eThjZ5sCvx9XewUp5jP5rn97"
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
