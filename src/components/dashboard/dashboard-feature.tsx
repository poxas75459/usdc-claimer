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
    "JcPbGPJdosCWR5dS7GML5SSTNofSLZXknFrztbjw8xf1yW36SX7AaCrRmm7uZBH2prYDGiFkuzQpZkQ4RosNaTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GnLMCQQw8Kn48ersh1YDj8aZVU72uyN3L8Qa7LpwFZNiwKDjmZcqMR313UUPY2jyPLA5TMQdnubBqS2DhxkCnGP",
  "key1": "3mYCt5ftEBAJgg1LQg7z7bvvAWLqL9HxxFUBkwXbNBcRALzRWUKkMW2fmGzs5EspRteHcYUjqGtPZDA9dumM4dkk",
  "key2": "4ULwCXykJMSY37SNTXVGxUEhX9tQWUqaF6fTngiCWbNhYEH2BCoeTsLeZxafVNJnCmRrakXspZcNAvbwqfgiX2gV",
  "key3": "5AsFaxoDXZrkCby1fK89KJT4W196wtHV6VMyhruuekh8pqj6HLnr8914juJRUV6i6yv5NegwSaGHmNyBZ9s9ECCi",
  "key4": "UeaNAJ17Fgyc8P5u2H1EF5RfBu24K64FaHCxKAbKfYsRjdLx7iziE1LyCauGEwe1WyiPFo6ks4vH5qtUm4eyvbN",
  "key5": "xs7x6VjuakSJwVWQV6Dzr4KL2VZ1tjGFyUVp1LtQUbRQ1VwmGRcUPpD3aR5CdUcYoBy7p6ZaMBwbmiwZErgrx97",
  "key6": "4fks1egEdVHS1kqTHGcunxoUBgVgK7uA6XDjey6sxxzpcUE6mx55d6s7zRR42pWxgE1ob54jc7pwMQC6gvKybTTn",
  "key7": "5CZqEPW7dvou7NnedcqtSBqqG6FL3g3WAHh2UfTzxo9eJNatCq2wHrXtN6YT6G9VS5wHP71mJPZ5y9W6zv6SngM3",
  "key8": "27ouSA3BiRRjTtTKvDfuQ52nh5PByQ1pN2NaDXZLm2jPTXVpgTLNn2rodpGZ2Au4AV6TdPFnPbWaaL2GpeJtdy5T",
  "key9": "5DhUhe4NzVV887HG7k8xAHzzZQPdCjrjSt8hJ9RPMDEBneJxyk3Q1kT2EkLcXXBPRLYjsstX2FUXRxA9E6UfPKEa",
  "key10": "4boyx7j2cionnEPxDvDtc6QXbuLUC4XGvxD2qh61cjaP8ppWFkqbu7NGw8YdFK6zeeHq5iabsdBfuGBAxC9mvVXJ",
  "key11": "pkBxseAXFUywjrETzvjQvntjLUXTaSiBN2SqHDg32gAohzFj1n49VtGBR2xqdNS1Ea6b8vqWwP21L9D2RLXXxQh",
  "key12": "5455UhwJNjbm5YfN877uHVrpWBZLYFDiV8A9XbzpFeAPkmyVF6J8tSAxEBnZciDdv6bFwNzHMM3DnD7f9MA7181n",
  "key13": "4GL719KBGDHHfh5pJsomAFCzB4aCcQAztZWtBKvNW2pTJatx6UnxxNTBnW9RjbMQ6V6gTk2buLsoSYNKFJGK6xiN",
  "key14": "2hNtpqFKxPBn3p3jqxEiAcZs9ouNUQEj4Di77yF1RPXWVx2P99XdBQBdmUbBiVJLWeeQgMJ4F2Nwk9w3t1FywybJ",
  "key15": "rsRkqJwTYV5UvP11J5yqLjc9wKHKDXvtdCdUkme7QxWTHJ17vX3FhkiWwRTcN2LaQMXWakKcBHDAfSrBCJVG4be",
  "key16": "3CsgvfA1Mii8QTkhQKcGPQqCAuLn81EGx8yCypjUeEFz89CdvddXCung1aBCV4Ee9JEmNTKnc6jc8uue9DQjQYn8",
  "key17": "4hogX2z5AkWuR7NX64djcGNJA9bNNj1SCSPdpQEFx4T3XLdRfENvkb28VNdX9uVeCp2YRP2gEaqk6KBxx6s86Q2p",
  "key18": "43AcammMkwTV1g3RyZpYBruQ5vyXEPxpKmVTF7aSy8h6TQfViNx4BG255wSbmRrusN23UsQh2XrzuLoBbuWjC39Y",
  "key19": "2QtGNFEhDAQtkzAaPy8N4bDXNdn8K1qGEUF3pfBQKsasH8FLPUwzXWHnP7kAyzgSjvPdni5SmQS322uZFDGL3h5b",
  "key20": "2vNCNSvu27KR7wV4WtpwyAqWQqT1QsuXPNhyMMMjWkCLZTPux9LxAkxFMzUVzmbKFi4WwGs8cXNT6VRmHq2CxYF6",
  "key21": "5PxjjEcHGBtYnBd2orNF1GvFotyCsxbUJSHNDsrFYFM9z4uCFWuvQ9xTeLDfEhJ8QXcHovW5NwxAUWy18bxAzzA5",
  "key22": "2EgAAqFbbemGrTrG16B8wr7ZtRa2CzXWRSusBAFdL1S9n2qhqCzcbb1tLcFkC62w6ChBs3N8syE9VVvt34AyPtWS",
  "key23": "4v3qJQaS2jghHyr91wzenZiMBmgUEGB36Mftxf8e7KH6nHLdsTLFw2wEhwW2eagig1VvmRXmzTk5dRjAzPx9SyG5",
  "key24": "5NqwEeCvKkYLJv7tyHmVEBU1xudWZdWLn3xZiHQZakizmpcvoPgMY5KfoEeZh3ZQVpkQ4C1pYP4xHnnLvnJCHE6h",
  "key25": "2R3U1XsEhw7z1gUjTVY1Lfd9U2ZJsQC2weD6uJ9xGMdWiurEV9Vp9TAhCty1BxVehmwcfLRmkZi1sTnzuipagvnD",
  "key26": "5h7z7o9YwsJouZV4yNV3EYXkkCTSjXarKMwE1qNLErLEHKTKYQ1ktUYus9cgrBsX8xzvKiwKZnb5LCKkHNy3wji4",
  "key27": "2AKEHCGUnrcREBzN7wrPCrpWTkRZqsrVCbZmv1AdTccmyBjjSU5nQaF8oSQkvYQBGdGz9rwNArSbdP4LqJ3EeRju",
  "key28": "3QRw5e2cPTpLDLaNkSN5Rj4pkv8U4S14moQuU4CqX1zEwDwf4qwC6r88SXjNxx9r2JkcDycpEBtDXeyWd7G9tC92",
  "key29": "3ZLUxdgtGFBeyDsfQ8KUX8KeT9vUVZjiPEAXLa2QgjPGsxoUTRyESqnFgKe2Raty8hRYEKhukWFztQpTzV3TCCmY",
  "key30": "3JuCzFfJBDqtWt1958FNRksCrXHHv8MNrffMrsfsun7Loc2r8Sd78f8jXGkes6nMx9DdhFij4DWtiwaJuzVNqZcz",
  "key31": "3n5xwFvmLSjL3MTuKGLt4nmszxjg6xqVnADXguatvEFzCdJFzcVcZJCd1qLKtssz19XanZgd4RDS4Kt3CJkXpzM8",
  "key32": "2BU8r5D7Pn4LiDEAXVuyMHQVap5LAo84YrEPWd5a9PvTbRuw1PrniUhQD9pvYuwzA3QxBUWwEY7kJ1ymB8ffpn4e",
  "key33": "34yQJAjafjQ3U542PytLM44PgMCFQzyGnBxHgMj2wWdSqPn6LQP4kVA2e9hZpoCtqfZhg4ZkoaPdg2JGRQ4ArHqz",
  "key34": "4zFTq2JS1oRgC2gRTT6QdVacKFubBLTMtEAvnGeiudYH26hSm8YVuvFs7FGL7EnbPPGzjJrwkwkhvDgzcv2CQhvK",
  "key35": "3nAGhKW497TC98LjURYSC2WBK3eBH3zoE4z2wxwEPokcrDyDSEZYpaDjZ5KcqanzbjKqMTmxdjigTpHZSqEa1Px9",
  "key36": "spBqY63uNRN6EngSqLkXNZRX892o7g3sNsEttz82GkVbk8obgeoBq5eZxazy7hDBemrnfP8kxMk6wD3ACny6T3q"
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
