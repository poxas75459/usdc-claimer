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
    "2R3pN7gyfVwPEdYc8zyXHQuzF9z78BfshVVvQfNYdToAYGqvz5vYC5fqRRdk1xCFSgqqB9eMPM9AX6VzzperKD7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54nu33FbDBKoNzBm5S6oEMMsQ2RF9fXxw8NArALSx8yN57GW8gf8vGxzgP7nUYz9d8sGd1iabvqyBFFoCcVEDesY",
  "key1": "2nampvPE5fU1dM2MgJRPsgGUWsSk1LkyMzjgSxGtnF5VfC8f2vmWiCyKCMwBuXy8vgQLfmfbUnDiPJ8gd56zw15i",
  "key2": "31CFaeAm5L4swNjegkRhBfG8eLwxsnn1QYaKpFN82FGnwL665Xxcp1Qjn57ymmNfy3HaJi9GwmEj2MFde46NediH",
  "key3": "2qLaYdQ73ELWd161P9sgn1dDFvUStzhigmPsTWaBhcEha5H6aryQJwH88s8E8zHjFDJ7WzuUTExr5AGpMVikA52d",
  "key4": "4ov7kJQth2PXXWpGwaLeRVNWM5X8HqLGFipsownkBRrqG6rZEtYnwq6WzGc92gt2WcSKsQwWVG9SruCnbzhavDPC",
  "key5": "3hVAs3za9ggJTAPDyipPFkFuitSwQT8BycRGXxPednwMWoGWqreZqH44q2qr1b6wY5C723rXpSRdAJgXhuckP9sM",
  "key6": "2GAfhjwG88DQV47DJj8q3tPF4tptP5J9dPBsgDGEcv7wuUomhkcAnSztbeQS8NSs9EiVhT5EY2N9woRERYgFtscd",
  "key7": "4vBpCzTXMJAZdgie9gG6UVj3XHNWcaTW8cUdzUuAxjFgwGL7zz33hN91pvXEoVxv66tgYbbrVtmgDjXpEXeG5my7",
  "key8": "3gEyp8vAPBF4TETw3dQgUwQYDKC6SAbisDfs1bwsGASthxSxFhuCUygMRj94XeCd91tFyGoA662pozqGFC7MvnxP",
  "key9": "U1Kb617qXnVtDt6sUUFJa3iX4n7UjtUq1bHYJ2kDSEQv6N5ofYcdzyWgWQ1QgzfNUyA3bYU7HBDybdbBUE9o6ph",
  "key10": "Dgi4Suj3etRW156iG7A7qUXcAzQFSTRKcBEtYs6DsbzUzBhKxKVC7bwitqpHDTQ45jN6mW1wUP2tbyVHPpUc95C",
  "key11": "4xYEDzjN9Kbc4m19q1dK77kCPzu7n6GWLtSmYqQUjuVwNrvhDNC13p6HEjo5vqx11U1gwEtg9WZbTHvHzkKTWDJQ",
  "key12": "3qXm5qKFSosiYg9Rh31P2h9UULWHgkj1YBrKkqg1gA8b2jPLGH3CgMKf539AcP4VxZHJy5RBAgaPvFVnViNqh3Ds",
  "key13": "4P56pNWpMcpbabQz9no35tcg4c68pJeKzkiX6A7cNF25o9p7PaLze4u86QZfno9hTVgmd6uyEep7ZpLoKqi81GaG",
  "key14": "5aqHfEYFAcnFshd7acGydS7DepaNNit2HK3XJuQsp3yu6Fb1A3dhmh626nZvrJCTSg6mFVJALHA717ap2K1RnTJU",
  "key15": "2Cd4hbh4FgTXKhTPPJFfbd3BK32y4Nv8gCAsxn9N7m2FPrTYV1GDhspqPrWvfeBJPrehwWVQgSEwNdu5WTKcrXhd",
  "key16": "5FkM3AGQLUKaqTXZWYiAX9KAgRuQpbFBEZrKEg2fTN5rbrE9FLbedLahVpSK5TjGrSJ9QJSUeaaSfDsvPgm2dW7m",
  "key17": "3gUzN38pDKCEL5DSZPxDR1UKUvx6sP57Bou2jQiQ5vQirQSCB4iZCfXphUh7tGJx3GdK4WsCwL7hsnk8WYsrZ3DP",
  "key18": "GfbfgEo925yHQuaF1Xd4ictj2gajHQz8Ay8xYfYyd6DUv2heYAeJvyqFTxCXxsiXmmXDYv3xkgPCiFWuMxbZFuW",
  "key19": "3gYBsuEfCEjU3zzuXufRRaYLzRSqkZvdpMzWXY6Gu4h16KoR3PtWHnMKJVbDY6v3TeyBJCDJVcWpkVUQRLushytC",
  "key20": "2r9eJU7mrcZwLQ3ucV4KRDK1AmwQnQKCDD95RDn3cguNrfq8i6Lrju5xcvE6jktavw9rm7vKSY4T6ZEGwo21g4Fx",
  "key21": "3NG9QXddyjid6woSsa8pUaUQVM2GgYa8RvBsHDDAdvGLjTq5MJX3RG1wnBQFXBrxDYJzM36bbfEjzTVETiHVg7j1",
  "key22": "5YcoBcfHJdH6gJaYYEizojRmg6Rptjwd7aFWPGJ3UjjXL4VB28fybfXcXrCHimsKjFWpULbUJTuGcVhVwdzZoWPZ",
  "key23": "WSfjvkf1ToPQV9GGh6sLXzaq4vuaXhnv9yWCxbpwyVg9nGv5hpWFK3LEPxG23zSSfsM332GkQ5pfftg5XKhT6y8",
  "key24": "4CM1gTzvCKxWByduZEeVacTxyeMTxLaGrMoJpMxYWBV3oKnnBvaBA3Wke7qCi4eDB5tocrHpKg7kBCLtNtERJdtH",
  "key25": "65ubCJet7x4WEdNzhcQW6ffLT6NcuCumU1kyPaW6PyQHc1sZA7hsi18ZAnhVkNzEiR1QgoSePCMLobLjmCxbi96Q",
  "key26": "2jTYBW2V7nRKwWzDNy17MwuZQkrGodYwRQewhAzLTdCGQpPp8NnsDFbsYkKxkobtGeWQFKgcaD2fjBmGvLLkVFBz",
  "key27": "RYUBXXtAxPMt6nW6gbp96zhfaxb4FZYuPXkyFisgjfZmQmu4zpJ1AUfixHCJxXxErwmrtHVnXZ4AZvTc5xkiZ7Y",
  "key28": "5EKuMRFGdeqtCAnVJNwGov53CyehkDDJEB6AXfeCesCgenxQoMdxitvYuDSZyQpNLjRUHe6PSrUje4f559zRMHZg",
  "key29": "2eDMHfJCn4SoMFgvfmRWUhpvSiEtBVm7RNxhkLdhPBNLQEEaDhxYyrBvwC82yJim8N9SW8FHud4C9qrFBZENxHVj",
  "key30": "avyp7GgaeSzJiW4DNZKhysKpMyxijoFBVqh9YqYZ41djU4B9qof2Zd4sX7woyVXzRp5XkqANZzgZMNa7AgH3xXK",
  "key31": "29MaoiQHTYuVrBTymRApX5PKQXZd2PhSsPks3kne2wQmyNtAr4UouHFJBM5HhtCrhAnjwo2aF9vQtUyayXZFt6ki",
  "key32": "55uAg5pGsCqE7XpSa17kxMp5xvQEDEZosWB9fiuBJqyFohvyqBm67QZgQY548Smy6RKzQj2g87KLyJjxncmfVF6s",
  "key33": "62Hu9Pb6UgRtVvffzWkM9JgbnZkznSavuPWGU3snzwLCVxctVJz73T9d521N1EY3SG7DtoowmPWt8nEBmz23RZGR",
  "key34": "2hDrMiKsftFDHnABrpEBCGgXNDwAqwCmvKc7W4ToDXGQEmoq7VwpCP2LgNFj5QCoBsM4Rx7cfngp4XVc4RzZQ2be",
  "key35": "3ZwZoQmcCriBM3mZarpGSN9wUSygrVtHEq9SWpJvjrV1rwKYgpgpsQvgXvgtmrpbMywfdft1yXpVZMrLgcVGAxcg"
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
