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
    "43hkCNeWd8N2hyxwZxajSBrPHQQSZepFTn9peTnn2zqM8xHQdjb6TERCm4Qa41WRjc1gXCc9guUpXHZazJVNZ4TC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wUL3B9EPxncEn3AXfty5TxWXEnvmiP6AGW7mp5pbV7cieSsoyjdZQy4pFZBQpK7To8WA4r29AYTut6Nh26Arq1g",
  "key1": "4hftZqHcNzMYvRE2SGnBKfd5ESk6EdJo9LH6ky966ZLTwt1QehuUMJ3ehEcSHRdACPsjZTEaSKKCvfsryQeiLWna",
  "key2": "3mmwUQD75GSPjyHXTynFEdp9FB8pSR9NEBqTww85BeqxnmcTNFD561nRKyyGPsFuW1gsCh4DJbuQdHnvF9w7KeqV",
  "key3": "nhiVWG3kkoSeHPDBtKKkLvmHq746ogBroDgKT9Ld6yf2sBA3uuQJH9PCHXGNLE3Vgp9mabYuS1Znma47JT7sibb",
  "key4": "5x5XwMmuBYtH6WcuuqKgGsW5V3yfYJxuQmsSxWGxtbYFAoj1nZpDbEaCZQ823dDkv4aetRnUtgkWKWPpB1wXzqDx",
  "key5": "2rojgoGM6Pc2MWZGA1TfrWJwfG3unpkGuqgVVyUMNJWsCbcimAVMZ4wP17e21p6XUxQufvR2vbAsM2Lj2bMwEB1c",
  "key6": "5vAdyeg3LM7LC5WJnqen2aPzisrP4ED71eFnHFaQdWmwjyrunab3SzKAGnjjSaD6pF5kT4jjBMQ38Kddus3wxARb",
  "key7": "3mmKsTSHY5HFnvhFZ5nYYAgwKGpMuwNqnXYwVizaanMMk2qjpZgToPh8DAnVPSmwT6QiwSLZCnGGt8nAWkpkgPZZ",
  "key8": "47JoeoWTWq3MicJMtTJP3H74fG65A9Fx57g2poXrcVZkwWXNnjrKYGZyKhKmEAdFAyjswV5LhiEXEzn9ENspQvxk",
  "key9": "5EdSfq145zHMDrMGJG2mxs5m9tddhz6wXEhiMryve5w1u8cPoFqrts8usk91TukkTNpywq4ARnTN6GteuFSvW8bW",
  "key10": "2zcMSAfPdDHfwPAt2ZeCvZJzU9HdVYwB9X9ifQcFXzbX25kHvNrSHywz3EuQXEYLUC41oApu7meCt5iL95gUzV5U",
  "key11": "4Ny74tbY7H6G38nnFrgbGg4HLhKUCwwvyJzmAJQsUg1D91VLEWDaFuf2zcKNZJSQgaS22U77fDp6nbFvujz26Hvh",
  "key12": "5tVRMbDBZHEnyBcpA3qwYEXEN2zLxJ7S31NpcHeVnV75YVP8qhmwfrE4AvNg61q7UmHgDYyspWLAV43X41H6VD6A",
  "key13": "4mqpPRFGdWQKik7zqantugpSzv4DviJwKVTu1TrDTbdwHp4xTTS1oErzTeDmTmn5YKsgqd9iMdYcbVuucm5j1ZvJ",
  "key14": "bsUCFiKzcDWAMGV6XHo5XtbpfKRMdTiSeQ4ixVHmVe7ZLZ54TJCuc2SoHNGX16ZS5FBjhky1UELGeBPvaiE6CwY",
  "key15": "YYyrG8iYhwZx3vH9Dz6WYurHJRpcnmPS7V71G2CTVgVXKY6MepMTh4TJsvyW3X2C85buxZ8gbtEX73dhpv9sqrT",
  "key16": "4QQ2KbmjMugZBXumZMuwCtnKPMY9CtcdywjHVw7reAfRogaWKFovj2cXQaABvvPj1WrAPCNLijjrP4pq2bbP98p1",
  "key17": "5UqfTAbShe3dDq4SzLwE95kKzMEzzYVWCcUcaoRUDHTjC4jcP25jSbgkDbiawGpHptEueUiTarb8b8qWp6TzwBfa",
  "key18": "4fBDwRYYjobWs3wx68Wf3qQvBRtUMq37eDkgt7SMxVnVXS16ydkbXSGuBszYomWvRQDJDjN9SJKe9am4TDQ6uWme",
  "key19": "2tyzwLYYu4U61V6gFK2nzucNBtXBrMjV6rRMCk4k93s1hpmEvEFuyKRTm41psVadZaTG2uXpz6ySsksM8ENDNUqD",
  "key20": "5kvmeye3xiaBgbF59mu5hJhKL5ucScpDNiU7Rp1DbTQxHmDVmwiKwRgk3jjwRgd2oUS4QGdyFsbMQso8K12wZj2y",
  "key21": "DAdfFB5Av2wAWXK1zSZoXER6jJXqh5Abyna7zAbCWQecfez6jTnjrQcJ7v6NyPkTXa3ZaGB1LyfwV3GJiZaeNWP",
  "key22": "5HGivWES3zt71sQsnAphTwJSGeFdrJxSoHaQz6RZpNbT19e4G6NGmmANv1jYX6zxcajx2gEAjSBW4wvHyPVe5mgw",
  "key23": "9cQGWN5fnfj5uqoa2KgyBFXH6MiWN4MMp2EsCRHhWtRrFJUUBi3vVHfDntis7pQQT9yxcD1fAB75YPYiPzW22QG",
  "key24": "5zkEkQpbyp53ffXgx2e49RZMq2eQt8g6t1v9J1YvedF6bRy9c8JeS23AN1P115Q6hqP6WvcAL54stQZjLiBbXx3a",
  "key25": "3TKWRzeHviibtokRcPpT3emLQydDMjS3RrLN5xMP7xdYY4sTJ42XcDj4KXmdHMtLPqhuzPHmPaUTNEszhCMr5q11",
  "key26": "49iiQii4361Ay74WcUEiprTaS8hBocgmBBdxMbcGzd1TsBVLReuUpjEFuFEDimprpHJAVT2uKkLh55Q1t126fjYS",
  "key27": "2b6s53uRfL1qbHGTsAgeX4Yz4p9vzvjfHkZHaLnCJMpbvJ2LMai41qBxZsHiQzkNUigr2xz7j5Aiif2WTndsRfEp",
  "key28": "4zixVvvDcwHEkBgFiVAkRCS8QPoMiqVuSAECxenbVkanxPZntrEauWKqvTcZZo1ghB5h7ZNbFcHQki2w5myYsFLK",
  "key29": "4Yszo3v4sDAQUZ9YBmGAWwtTWppKEhG5v6sxkuyuP4y7MzMihw9rM2iCnCjwDSNkjHMyZZAzGqTTsm67x86hu1UQ"
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
