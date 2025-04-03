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
    "iRSs85HjFQPiw8Zva7tWxjR3KbQhD87gtBY4U2sTfUGy6YNrwWsu8JEC5LjtBoFCNxK3Qt8d8cbRERoMVJTX7bv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aa4Gs5uXy8bHwxKScTSMnwAdyanL4y3kZHqrpu82FDhb92Uq4VfJ38sLx6x7hUekJ1QUYYz2wyF2zXeNWBcm6uo",
  "key1": "3E1ZYCXXkayiAJRxSrNcJUYZbgYHxq8hJz5qhvupsdi5ZBmS2jpPDU7GBVSvSejfoeArrWaKgPuZnpKm6Yk1g1VW",
  "key2": "3KEytpxxXxu6cQkUCe8RbRxoRL4hn1raWzENvgfHN7Wi5GWvZMDEKdJimZ161GX38Pe4QryrkBd72Q4JapDWLb7C",
  "key3": "31XkPEidZLtdxYBHncHg2AtU1khXQg3HULKW3byNgowQRJNZm8Rq6WDB2zquGAppjAi9tQFREAeG54ZqmkqKtsCx",
  "key4": "65K7bxb4ZeBYi7DrMNMu8XFDG9pMMFXH3f2Fr4S1HdNfGfhGimVp9Fk55HnRETD8ZfeNSRftaQ1wVpxp2BPfmp5h",
  "key5": "37qnD4W4jxRFHn2iwigcCh7fUJH1K5m2E8AtMTkrqbbp5nJhuiZq8fpAjGxwziiEQBxPb94Xxw8sKDoyJfZM7bEv",
  "key6": "3j9w8Fh1KiCEvt8dQDpecG1rM6F9zgLFiaim4oLng6bacDbEF6PM3V8jRT5vsqxus1mqEXUCzuZkYgRSLogLSr4V",
  "key7": "4LEahEVBBg51x5yPAdrkvEkRrTZCH3FEisr6EJpDtjKCzfwM4HFQq5rdEtH12DLaFt8rXKCzb2hYKohbkJ4TLywb",
  "key8": "4qWwAABNU8YPbTsUqHb27kHSkq1hzATzPzMeXhauN58E3xCcAJ1bVkvSdx99nr2DgaKXBr5jSLvdkJmGAfqEUiQX",
  "key9": "mU9J3AvdSVMwuCJWkr484UCtR79cMqnNhfyrng9yZkvG82GdixXpy5FGTS3z9x9Y6hEZSkbL3XbnVGk47gjN3s3",
  "key10": "wwEXSkkbeR2L5xMGcYEijCEjyL3DbMkvmns1xiEuS1R5BTmgjTq3rRdKf4cJekhtgAU9cUU22n3tjaKDLgKmd8E",
  "key11": "4j9X3yXP3jmKBa3UYvj7W5cm818qSLbiatogoaJU9fXz2XQsZ9U5Vpuj8e6F4AdZZwPDKZgbj8Fe3Un8hQjj72be",
  "key12": "34SJVsj1aF7mkT1iwvfTFurDcfVddMiuSH4iEs2ipAs4tDmxdqSvJHDH6GC5P79iKYe4rBmD1nfwWQWLZ2vpxDg5",
  "key13": "26wWNQ3bMNhXzrdgyTXypPDksJJ7UdLbgBbSU9HzSjnjNThV6EjApNBoFBNLkv9i2D8LL7631U6uMaiRpk1ebLAS",
  "key14": "4UNUmLPdYKjNPKWia7ks6R5spEVaWtFXU4dSFmpTBzKfzvgEZV1r9a9FsbSbJWeAGwo3Yfd32TePLKCWUUo1LKbm",
  "key15": "TN3gs7tXLPxyiKAmmZhbCKC56E23goqhd4mKHEpgDfwirA1NU5Ws2uMeE2f8wDcSYvvyLAne2U3o5GGnCzu3tj1",
  "key16": "5Br31Nix1QewwaTJ8UtGzvNvKwefHfv6a7b6ujPbYdyiQhWwXcgFSjfT5DBx6Jsw9T812kMJSzE8hLDU4YfTQco6",
  "key17": "2ay9hgq5kVatU3WNNAD73WZTrFG1VnoSvSUppVxDXUHJnysGpZf33vEJMtMzyp2hawAmpuuVVaAivKWNLvcYQghh",
  "key18": "2JTeLVGoP1zDmNQWMSSbNhM7NszHqGDQW44yQQAbSp8F4tH31PCUJKhavDAYzuiozR1doCmGoyhk4U1nZEujbxw1",
  "key19": "wuGKWup4qRWs7GWaHgLdnHTvv6k6R8hsMrcdAkG2C9XuMHoXvxLcyL5dtezU7yKFqhyGxa4gAFyRYQMZfEhUoo6",
  "key20": "6115vwrqHqTVv2KHNLFwtRX1YKXWaBs2S9c94Dr8Dv1pzwN7btmzNVLTpomyZ6t8rVrd1PFd2WGzEb7uUcudVmYS",
  "key21": "2VL774GjmcqmupcqC5qBxELcK6tKojrrN5dm1G4iWC5uamKdkQhhJPBW2GXzruzXnY6qke9so1huKJjpRQDNZBZs",
  "key22": "2jH8MywQhgG6HDH3t2E791FcXEbwRwGUdhJ44zhici5GWiJas27J5kbPLh3DwUxeNon89cYckiYTF8D4Mgj8X4wD",
  "key23": "3tWVkEQBn2F1Jy1zRLAeWviUEaJJvMueGUXmSUbouU7BWYDve6MLPitMjtN1HnXsBSFowNuCaxsUsGZQnLEzGtGA",
  "key24": "4FqKk6WvCohnppktCNRjUe5issW28vDfDzwsHByrtjRAy2p5yhRotqUGsvYLF7m6xZ5Ea2hz1cMXtuhvXzcYyJ7z",
  "key25": "5ZF8YH8bHA5caZsRArCXMChzasxdTsJ3zKugwUk2VoNQZzLqQ7uKGaR5GaY6ygBqrPF7UUoMdwKTqE96wPESKaJe"
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
