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
    "P418ZaQDHPhjwT3MDpYJFHXmCiD43BfXvPBMwmfwAKJtotxopEyqkSbc5VmLQAvdUuYV24zuTbh8oB6MF8111Pr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ghR3tX3duGYpyM5dSFoEqH2Qq4mmZGGGr95sBgKM545EdoRe938oVsm2rvvevdjZyUEZ4sLNrcd9HdbaGNisaHx",
  "key1": "3ze2GjARSqU4TUQQPjKgRiYckTWE5rLbK5ZxzYoq6rpu3WVAq1LLjPNmvUZ9yj3pbsn38T2WMKvPppuZNpq8NEQp",
  "key2": "3pT1yC8CxSZSxyofBvUo7Y4sarZbsy4iGoShizfpH2SMEzqtbJbYsKhgDj7yG7LK731b9HdGfrr1qDmpjjPC28fW",
  "key3": "zXx1UFXCyYHK7Jz4HCd4gkDx3p2etY3zNN9Y7WiGmNte8p1KNCsd99wWqedHkusANaewdNRkJRNm4CDkC84oeWA",
  "key4": "4pkZnxsXmgCUhPFZSQk4KgUrucAorFckk56YcfomW5LgnPjAXJMDoD3KR91crNpGBqwGLYFdcxywiMeYxZT2BYQv",
  "key5": "654ZscddD6LNLNfTYcBaamvoMQ5PsaDCwY9sTMABx9N2b1TqHAMjqHhynkqLhhkZv5Rv95JcTbmp6Fp7DX5VbNKW",
  "key6": "4zvEtoxFepKc8KgijgGvRJttmXyUH8M6BPSciVAL8cezfTsXMdxEPv586LK4sqQak19CXphGgGHrrkdb3zr7Hccp",
  "key7": "5jD3pmzkgKyMx9fpAVaiyHuupgGdbJeiBLdeAMWNhcuBbr54cjfW5CXtAxg8uTyidfN5zRb7tqEv75saeQWL7Anu",
  "key8": "5183v52rDrzpoD2VN4d6EoVZiE1WWpwL2Vu1tKQb46QifG6jUo9JBwMuDtNdhPhZnAFyWyR3hgASiBr5uPubCU5m",
  "key9": "4attPiAwypMMneTDFb98ZpBUFAem7c58MyW3AgG3fJATHmiDZYPJfsCSdi1cjD9LrnYhH4yyTT3vTHcNyQgQcoLR",
  "key10": "3tco5xWecwvD1fyUuxTAa733AmFLJrZGvHia6oSBVMNPqUKxu3xpbsAmZn1mMEqM3YKfQEwAhwSw8hUT2dcDUGyy",
  "key11": "ApeLKFaYiQxEeJ3LUgT9G13GKh8tJjG9FnAx5CywK7PwfmEayDgSFgVhqSEyTW7FLyd8puz7o4x23QNnZMoy53x",
  "key12": "5Lt4EQWiei4pUPDX47LYb8YDKLpco1rZ3BxaJsimwHjdY7VLJYW67ckPEctG1m1id8BWSebXYM3wmnvNLqUv4HiF",
  "key13": "5iJxGGq8VW9CmR1EH5hbMzQYEhTiAdKT1dAeoh5nZXDCAkM1BgwKYXehjX7Zv1JgyNH3i6XqcWbbLPrbRh3pGyEt",
  "key14": "NRa9tYGMfYVKvfYiRFoA9c64zHgpS4pX6aQTH4Wq1jShCeFpMduKEnhJcMux5GiVD2kaPdradczK7XqAv8JAHvc",
  "key15": "gGp5xVjhcAPVjgQdZdNv9vCXSffQ3Ei7wUqD7UU13vFUPAn43m78ZAdJsmtfQhcdMpYtCr3nhvWwp5tuXBwKm2r",
  "key16": "2xFi3jTcdjnN8F3eCi2qC6hxUQ5sqBHbgske5JopPAuzNGvrtU5yL1SixpndVkbdrvwea9YByAcqSEPemhjaViMt",
  "key17": "5HeG6SHV8KyMdETd1vm9XAU6CSHM3q7fky7cfB5DUudgPxpxyfNH5EKpQB8954VZwRW3RLkV3ctHyJiTbE4vdmyD",
  "key18": "56x6cjKAr6YinC1Bp75Gy2fz41zjKLC8zjqsQ7U9sy1WZoeYcsL9mRkjoaBQHM8vczYQDaPrHEzb4kvs1VWDKstG",
  "key19": "UQUsZ5bGAh3k2ogmXmZzFV89qReRB1YwDX1LeLhHJgcmSChTrPSMpP2MD48muSmN4pZaXLvrWh5ZXbBb3d3UKNa",
  "key20": "5RSkvsrAB26Uz9ajxbQ4TqUzWegS3TjgJ3yKH6nj6nTHVfuSX7HsR1hB3hjA3DGv67Nzdo3Hyi8bh8JwTcu8yxAv",
  "key21": "5vWASbz4BmZtkspJhS2w84rB9RMbHLTgoVSLexZgx4i7XommyEBBFkJ6SqWjAviYAuXix68PKty5fBLcM3P23Jh5",
  "key22": "3DyPLGpRnQRm2cKfyXk6d3tmfySbjWMciGpaRUFrmBQ9C6u3JQ7oJR9Vc7ZkoMTHTWDbqvYbAAucTEchB1RgCF9e",
  "key23": "AdbfTNJiXL2FJfvZqvpzgT4ci5wR1dAran1C4je2LvWkpRXPQJw2Dzv6xpZuBu9EZip1WF5M6tiunxXrdjfdWmu",
  "key24": "y1L1th1C2wD94ttg5JAEHUXj8QZrvW2UUP3FcVBzXtuQnmbtEtp8J1BuqJg7H2mG3poQJRYPgVg2FnYieDFKkJY",
  "key25": "4HjmP7bYKEEpjNdrnEgEqdYyX9k76t2piXtuLiC55dfh2qqYcBrfEz3a7oRozn5ohWFiD8x7jF5HtgxHMdLRohHn",
  "key26": "62MUJAwrnKhQjpejc24RVeiEMZFNH78XLPpmZHVVFUxAGEv3pJV2Kz9TBoeTY4HM2m1A6RttXRQWN9AJTa3bWGee",
  "key27": "671PnyRKoxPNYoidenQZpQYQwMMsZnttu6gK9WuWjL5PdWkDjbeHdqTNfWju2m4Y22ZFxaFP9tzpNKUgY8Wvjjqs",
  "key28": "mFvNMEFgz4GTKKxY2QoquaS5WmVH4imUBKrvhuFe2c4BM4EkBUT3sbko59PKFLGXi2MxBEhVEr7gErEvskYDhsA",
  "key29": "2d45wqZYrNS9JFzrUWmako12AHoeRsPaV78Ai9RWaFrWvU8trnhMNcawoRzDeQ9f7emcAHo59hHrNkb5jeMVbeeT",
  "key30": "38c1WwqYH355PJXHmZjej1Tr1Zn6dXpKZAznyxEyPSSZxQFHq75um7ZysY8d5rZUmAZ2W68pA6tD8J85Ahda9SWF",
  "key31": "4sVDEpt2xW9aPg7BkNeEQd42atLpKVZpQ1UCGkDYJ3xvPUGDxVPgc5YKSrjCjLhnzoBiFtJWrkZAgt1V2KWYfvNS",
  "key32": "4PYvk6r4C1Ls9EjCkyXz61NDjXEtm5qazhZJ963mwDBUycK3xQYZ3vgjnpjyNfjY7xrWb8RDPJmJ57i3evTmBkv9",
  "key33": "5iNFgxLuFH6epeqAFKgjQsEuhKTcUbYaj665ePe8pKeBC66bDjZFAeiAS3kavqyjvnhTdKcFprJ3RBmGqEdHWZaE",
  "key34": "2ztuqAMNN3zA4YjxT7e3qjfXENwhdZ9A3Xj2813AFnyStsxsPXFnW4eS7yPKR7yxDqJAR43Q8t1dw2tJdo3RvCvS",
  "key35": "66E7jywjYGVLi23gDFmGo1JZZgCJ76DaivNALD64k2tMuKK4HKWaA563TfeRnd4gyk9bg3TatTjzQq44ZG64HoGY",
  "key36": "9V484rJM3yUein3gBZPMXT9vur3FcjXvY1RJEv3xkQ9pceKyzSrgTTTJ26qZ7VvwKkBr7bdyd1c8cLYZpZK5utB",
  "key37": "48WkCNrSqw86R4GPrZP7ofuixMM9RAktVtvBS2XxnTNNURjmo16mfYNrYfAJJyWs9joyxeo72Tk41XFP6ZbFWhSY",
  "key38": "62qJjFyR1KCJfcAxdhJ1Q86h6uFzwWfc7X8J7s2WSFhfugdUdi9xWk7VPjBhztL2LyoD9PZTrA9JSYTossV5ezrR",
  "key39": "55fvYdBD46shA5eSDJsC5kuh6oaTfopxvfxgEtGaU1HipgCUEGJvCHUidARTJSmtfmyi7NE5yAsJejnsjf9GKfgn",
  "key40": "44r673JBMMLsiCui92UHwspKq23VGcWvsMJATB1B2M5UAzCCKUiTAWb4e8msPYrETa8zSjZ2fpHufDHipq1ECdu7",
  "key41": "2Fmx1QX98jNr7erZHtfQ1SvYbb4nhYmyoxgQEXXNms6U3xJQm7oE9r6fzR3oFShH2yQDueYypXcorJRz1e7VnViu",
  "key42": "3YFg7UXHcgY8152PYBH95hdYiEmJNq6NrQGkS4HM34imDNvoHrZaiFJNrd4ATJ2jFrted3VyXktLqs9W53jT7pxf",
  "key43": "3CMzBGTYdsiNuzpVmS28iNrcw8kRaWPW8H8tb8zZrE1DjDmCWiSDU3pFpkJrkxPA6FbNdULbKxtgXTPyPE7WCDen"
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
