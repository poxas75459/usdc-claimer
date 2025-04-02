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
    "3b3pojFGSyS4VKEgWhAgw1TJQrph3be87RUzrCtxKWxGrJju1puLygQZ94sz12LKXAzhka3uGAYSy6YyAAm4Y9Hh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SVnu4SmpmdRVxXkoScRBPMzW9VcFPG1Y4zsStRKPNVKHekLNXbNoL9SA5FaKCG6xJVkxrfFr14SoQB1EP5vAnNw",
  "key1": "tAW5e8KkeyX12222jE78E55RztDBAosFDBs9U6Qtkymf71AcnEGBfiRD5YorZHXE1bS4V6RDHt8A3eM1A5UoaWN",
  "key2": "HBZ9EZYtXzdtE5Gw73CqbkRwMSkcMAZBwQy3K6JK19PPQbrZ4UtHzn5JH7BW3XFXd6yrNvkkzfo9ej2pgUKAHAJ",
  "key3": "5FakTHSfAUzmzTY3XBLvNBK6r5PwZ5qGsmZoRoeL7wumqbFcFSNWxL2vfJh7Y2LW5sEAQAdknopmUNHC5ap5Jk31",
  "key4": "36qbtWRqxSyXHpteZKA5ui3sqmCEVyYqPBfhpa1j4kviRZ9ath8bQ6ixN9TNkR5DRyWRDRErc2z6ZurgvEBanPHb",
  "key5": "Bm2Y3RLbZY1GyTzeX5DztLg3SPJtar3GZXPCU2TzNJjJHv5VrT6gz3KCgtSCfLRYVEDgrYvPvghig1iRL55k3EL",
  "key6": "41yaeTf1jXh4uF2371c62ocjrqHmsJ3iUcd3PGbMJBNTg5LaChcC13DUeHFDNg4gpCnKjL97aFas26ad15DXvkXR",
  "key7": "5G7HQDz3KCbT9XHR6Se54erLekcVGYapHyn9fUxqPf1S916FMzUwcjJMkmJFmGmTTcqGx5rHqJVZWQCCQdP5Z8ot",
  "key8": "3DrAC9gHmGWo2rASabJWPxWK81XPyQtSS8NFfuNJbGjFgmxRdzhgGVZK9fgaLADqnSPMEHFbioKwiiL5nTEnWCEM",
  "key9": "2yFT6JuqxG2dF5wHXaXvmVkt8meacpntqW3xVESFJ5xCSsEpNua9w9oYZruyqgKfqGUZN9QVcBMLV48CBWnwjyV",
  "key10": "4Kq7b9WVMPsU5A9rPsRRW1253jQazKqtSPJ9WLytPqVEqXXqeUPK1EGJkWcKUUAfDDg667xLXaYUCAxvEcUTjj3d",
  "key11": "DhVxA6Uet4Q5HgMcBrCwSipfJDAeutU2kD3KFSwPUoiQGYjs94wFB9HUZHLbd4anT1L5UfrJ96uKpHE4Q8a5yjp",
  "key12": "yLqXkjwtYrryJ1VTBaBSSGhs3YLTVNTdGThpTLQz1ywCp9vFQ7iEUimH7fjMAaeCTg7ihGyfVc79gH5m5qX8HKS",
  "key13": "48rBzGzk5h1tm4cSomPF6d3arfpXh1x9Ns37UJM9uKJULMZjvBvgu51AUqcZ1y939ArzRWxZxxGiUoxvyZUgYUnB",
  "key14": "4qqaHy3bL56seZUXoDWApiLWu8x9ufAiVNi4EKgHMW3YYSxLvgRXiHNiAPFQ6VAsBWsq9CDoARUSE3p9J5yHn1Rn",
  "key15": "5a7DB1SVdwXEtA2SxnULF6fK5d1SGtPDSYkDEuyaCPzcximqqAKDN3ke3KyRfR9dCnSxo5VtEnu7qXQWgcT3XpLb",
  "key16": "4wExw3Wpx7WuRRajZ1x1pAV6mbnVpW6qHBezjeJdy2ze2ssSzj13o6MhD9as7q178UCKRCtUG5fiEUKohzExBjN8",
  "key17": "2Bvpo8Luf8guVsCBYGYcrMQwzprkdVJeGkNWpyyAnbhTrmoVyF4YYsrPMndGzN2sPhkL9ALs8YgjxL3VRy76vArB",
  "key18": "2EBxEsE5o4Ay8sghcN54nwF6xuMFq352C787NGWXbe31LobGZ2rM872hKGRA3rSyDKkmxcv311vq6gM4txiAKiLx",
  "key19": "45XYmxYtHyNarGunqPws4vKoQkCVnSUCRbYqSS3Zedgs8gm8bWFeGpdyLCUXeMTZazKXSS3YgnpLrb9MdeGbz6Kq",
  "key20": "4hiH1zkgRLUfrhuNGWN9Nt7AfMDjApTb2dt9sgnMu259MCBGcBk6HkGph2bEbRsJY83EGVSyLppceMy4tugPcAui",
  "key21": "42g5vYur3cXUs31vtBdudnCA3yTFYnhbmRb2y6cB1Yz9PFAR8c9gG2o9141ogLuW92vH3V6LR416jMUVMaXs7R6E",
  "key22": "42yEngW7k7aQRd1gKyx2MTJDg32CxxKebrrZXYsPdixsZX3CmpSppkCdRCv3TUpEFp5PCDFuz8abXNLpK5mmBUdd",
  "key23": "XSvTePXt4hKMhYg5bh7d7cxkxWdJ2JgNQvwbY1sZ5gorHnDnzJSgCuGNQArHTEKRHqGftkkvsHmPaAudrHKfGbF",
  "key24": "4uRumpGVP2eiWPwcXnLDCVygeA3TBJKUxyMsfEBCsmCxpb6KMFrxicpEQJ1nQ17KFRV8Yd7zbaVUjG3VYgmnABUf",
  "key25": "5pZbdM37qY9gMSfK9NMYYTVKwgepMQ4J4qvAa7dVXwWxEpUWSriT5Hs1aPFd4sY4QX9Ur95YTiibUNMbKzP3EsZG",
  "key26": "4WqMmdqTa5MRVj1P1HZTPpN79VzdARvHJF53Pi6b4aLrGT4iVkf9W3ux7MRTRa6JbnJBtZep4NHr8A8zuiuFTpsj",
  "key27": "4thNtXFmd2FsXngmPFuZ2ZNMyZF8mENU69qD1b6Y9Q3Qhqhu12S2u3p6kpNC9LdMrrJxhnAbY1Nkhcdt47iLqVUy",
  "key28": "56h5ZcVnRtSsn2nCHDr9gyxMaXwBjr1MonUoPhGzBZQUY7Ksgta9QogtsDKUWcHWzhqkGk1FnVYuxpWsH3iF5dRN",
  "key29": "KYbCcbUYUL47HvvS6tMXx9haN9t14jw8PSD8Ym4xqWKbALmHm7qbk2bQBKLQ67wjqZc7ujHJgHZogqspYE1v3nB",
  "key30": "5yE5VjUdxCtArvSquNg7xR6GkdWLNzosiu57F5tG41VMwDwgdSZqZkVqR36VrmUjmwKvtVYXEkgiLgNhmAKZmkmn"
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
