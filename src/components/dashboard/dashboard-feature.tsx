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
    "3oA3nYxtXBmyRHTQ1tCY8JLJLGp67FKr6QpSE7757JAhvPSnxJ4ysRpMYFmCkzkJ7eCrny6DvqCEqZK7me8ZFiHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qFwGPhwtnesnYKKFU3ijjr6KLeFs2mTYGM7toxPqozeW7j4Ujenmi3snv8XptGu5ugPeTCr2XXcBEscfeeemSMq",
  "key1": "49yAmwqViBEU1dSrkcs2XEjJucUkr9HUW4rFv4J5ykVkNePxYfVHFJCvfysNBBEPy2aogTQ5pogJKDLmtrvBgU6B",
  "key2": "2wpVhgZtwiZVTgwcZ9SwPRqQ7kM6YBPz3HUBkQX9CQyFjbUNMy5vCBT76wRafTnsuxrog462ByVjG82HLP8vurgg",
  "key3": "5z2YW9z8ESYaEzL4ydkU1RtMM7FhzQiRNt3V9xXBCd1858Z2SD7nxQ1Vx66fWbdQw6amP8KQWCuL4mSAt6EcznET",
  "key4": "2BgYGSobqCLHf1tJDHSJusTanzPBKoaLJHsMRgP8emDh4MqfXuUtmPEXsKktPPBcYVSzJg6UYPXndwKbDJehcwGB",
  "key5": "3cD7y7kEb6qwvpHY7sEZ7zf7JjydFQ3DHqcowo5GTbicn5BQCFnbdoFLdohUnNFgdcgT7LVS6zar2YhbfbpEpQcu",
  "key6": "4XHL4whGLMZQzQAJKx95YZ3Fz1NW18mEF2pTYhUcYyKCzanDWySCsUENXLiCVqawUVW6BioiA4EwaptJeMdoXf74",
  "key7": "4SzMo9mnTwU532NDjRbuJNArwLBzRuM2sWFHUVFrgoNvGRhwTtyLYWXn7Uzc6hvzgwLpYkfhmwptLbB7UkMr76gD",
  "key8": "3X6NEmSmBzUCQu2WDCqmncQjbcaHtXrW2376Cj1LxryPyrgEW2bxX2FHqqEgXvXYRUShHLgGxWTJ58zESgfbaAwH",
  "key9": "3sBp8Cs5YkEHRab81g6sTAV3Br3ug2DHUZ8rcaLYX7qpamkEyXPUkNDafYiqFeqmqvwz9KhXSBk3mv4cUnCNbxUn",
  "key10": "4TbrKTQeZPb7XzRrVyKoYsnWHBU9aEFx2hwqoArQJXYNVYUNgG4hWWKSomfchqsGvDzFHAvwbgk44qKqUGrhfaHR",
  "key11": "JqxxsUgzrzBpBhQzKpZFSNkqFvWApecA7krS7KHX3o1v5bB4hUayApCEPPMG8FCiWJ6eSiN6P9kyNK2NFW5Hzhc",
  "key12": "48PSGcK9m1vtx9TipdhzyZuExppKs2vBVq3hPHXBArf7WHMNeohi1QJtg3me3x2u4UfAYoz4zkmJKqgfxdxyNA68",
  "key13": "5J6tJdbJzoYJAowxDH8pHmsmP52LWsmRTY7E2kiUtiuDRCu6qpFhTbkG811C9gKGPaCyxqZYhznAty2rmALHUkAZ",
  "key14": "492FtVvPhrrdGS9fozc5arCtyt51CZbefNmAFJpdQAcoUf4AbBdPx9vQtZjM2Z4oTJF1YYe6PMAiKJyE6ntnPCzk",
  "key15": "4jc1fAEbQaKX1YthCnoYsDb242U66w527gkiomzZKTpKajHdRJ4FFUE6DAL7gkkUkM4wyiyQE4MmMKcYXpvk7YEA",
  "key16": "4es36WfcumMV7etQit1JKPeZTy2d1Yby9iHEdYUWpcn3qMTpoQfi2mc4puZAaV4Pf7QysQPC7s3DP2S2VVzZfth",
  "key17": "4f96CTUWuxU8etEZyMdUNWGJJuN4yN5QGgMLQV2LvhUAMwmdwdYj963CbAdTQZe1qkg7rYyzVu4AqTCGHVt14xfz",
  "key18": "3twrPzyxzsSqBdvK7nANrVs6wLXta45rjH7JozZddxi3bYzkG6mUGFurW7S6Y2keC1qZZZuHBB5mHsFaj24JBmJ6",
  "key19": "5aWkW1jrJgz9dxDoBQpMdJnj2GMy6fgf9iXqe2nmDeW2qWeGSdPnBinppGWfQLN4yBbdQzWHyzhphKiqWzP4QGCQ",
  "key20": "549H5rgMV59ejsrznmyk8RdPZJa39qcbWAG2bxuGb5m8L3mB4x88zTmYuT4prh32JEoMj8KKKK6jBLdbsE4wbgAT",
  "key21": "5E2CzM69QvjpXMyRN5dmYxrFHe9WYc7NLpPnYZA4SFY3zUswv3qztraERmTUo3N8xMWxrV4wWqoBXCwQdG5ApygQ",
  "key22": "3cJsco8UfHqYs8ozydZ7xgCNMMn79zk3vjDAPV9SPSUNZMggJuZ9hFNjEN16dNigKUDhbQxFeorKyPEcBq3RyFmP",
  "key23": "5DePLd18yXdCffZfzekyYjiZetAGRCXxWD7Mcq8bGaDJY9r7XgvqjHSQ8nqLhBu4TNgoEd3PpQSpu4gMEtNxZvtP",
  "key24": "2LDKKeRu3FCm54Q1CZ6LsH4dKwdAwdcEtSC99joH6DwBZ9RmwEZPRPHN9wSzjy5PM8WASVV2gqyAQKMuhgFTGhTe",
  "key25": "65Kyt53jVDX66VvUSnQ8KBQx2UuNC1U1R3nrUqcEMiSHBFoPF87cNQ7TFqXEAg2QoaEWw2r7oCyNMFK3WpRC4vuL",
  "key26": "fDJ4N9SrDpXRUz3Lr74V8FDKwvT686enSSc16VdCif6w45VfSoNH289kFR5tAAzvR5qskFhWVkmZnrcvPwjNffs",
  "key27": "3x4WQqBDgD1xT1ZduQbJeeUXW2jJ2qoWW48ivxPtWYqg4BwGBGVG6DaiirmNRxY17a1KJSwefSu26rSc3zxKfLnQ",
  "key28": "vvn4dcUfDyZtuUpxAbycb1NFjVZuGEnnhmukWUD4Sj543nKykuAj4BWnm6hxxsP2qQVC5hYiWiSK1riDPbQBw4y",
  "key29": "3kRWasFhHcCbLTunMSdAMXZsbjn1uGJYqu4aPAeexRR8httgHZqP2NfmNr6t8m8J7hruenMuzuNcUZZ2avdDVYjh",
  "key30": "wJUSsuHXittm3NjmEj3iLftRc8g7abqMe9L7bGkX8CpqSeawPxkzjf1rkoReuSe9C2KnmQg3heTcuzpQr3Gv22u",
  "key31": "KyVBFUT1hjLVrsZUsYb6VhW8msSfwP1qevKRKxECqA2jixV63ucayRzWDLVgDPqpNg6DD4VLKCq2QGxHtNQ6NWK",
  "key32": "51vACnUv84CUwbTJUMPTRJjs6EApr5KcHVodx4uGP72FeyYcgVYC41biyHmwFZEverTbdEaBWTGxXAvjbrtxqVwY",
  "key33": "63Xt8nCV2wur8cjWmVvNJ7CPtCSeS9enkdSWGio4zcPTUfvoC5wmozeTJn49qUNeWHqfw4KPYwtNUx87m7pf2ETv",
  "key34": "5ie4tf7wAkx4adqsUoAwuEpgiECKn2nHnncEaqLxVqJV2JWvwEuZVQ9AewESDEXuCjQsRRcvAJZRGZ73Wc9wJ3sL",
  "key35": "aZwHwPF1e3KnGhGMj8HaEmra2ELc5ujAxbYtCye9fh2RF7zxNTGMH9XrPMZ4sBd9ghDwPpifHM1ozZ3KYhVDX2s",
  "key36": "3eeRjB2zuwTRat8c2RZn14hMpNAkQsVRv3L5ifJGagmmfJ6HEzZsbkzPMr6XMNmxA5Jtcd7qKUdFVzDpkxADzHMa",
  "key37": "46RaTuz6Zpj1WNwL3fafJeavCxeifmxDJKmMxGvB8GinF3KSC7Sgpxk6UseBxAaaqLiDjkwWwz5aLyhksoVZXMwZ",
  "key38": "P6ivtb9UH25QD9zVFCrx6VNMNwXNFMByXMNWtKNU6aAF6pwVD9oNFzKrcrN1wbrS9qYbL1bZxv5rfzf5dmw9H2b",
  "key39": "2uhLWhxMEYZffJvbpovQhbRgHn7xi22ZoxnRxwxmmUMrP3MUT95ZyRentqrHaJZFLqKCaSD9vbjGZG2rSo2qaUi5",
  "key40": "ABrpLtw8f32KJc9oaB4jZRvxNXvYNKu2b7t2aHuQstmTxKzLctiZv2eVHf8GRJ9rZRj5TstfMvwFRNkaqfm3S1L"
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
