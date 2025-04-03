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
    "33bUKq31TCF25kJkZR4xxqbx1obTgmmNXrnEVj4Z9U1v6MDU3DaotVD7979xPm4vXQzcNmxfzhX72HkqrkJyKbqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HXkDiPgqBpbXbpWEsE6yeNhFN4eP1frv8g7anAbkhtmCFwLMLaXik3W2Vz7KdSUsVSwm3zkB1HMFS7LhK8znj9t",
  "key1": "N6kuPYryQYoSJ1wHVB9ztUFAr8TbQicZFRF9HznNnbVpg34pJbJcdZDnu8RPKwtJ4PRoVn85jY5UfRwVf2r2jUV",
  "key2": "4q1VC4Vzww7suJm2Pu4cKBuJrUqcdK3znJfT6vmBGQRy99WVEwaodHihXDH6557BUfpBtztEc5HJDquAzxuJUicv",
  "key3": "5XaF6s2Ae7xrTWshHD7YGJKE5UgRerDxYhPB5fFDa7gj97cWx3YUpy8vifWBafcmCPEFEowjxUEHwTY92kFfS8RW",
  "key4": "27Tv1PuDxtEi8McGabYcktMg8UBPEki59KspYgBCsLaqy8zNKkVKDpuS5nJp4uiNHtNhuEUAJuHANgAQ6V9EGaR2",
  "key5": "NKN3kqTyEx43BrWHUSueWbTmtygjBPMAUYnwCnFjbhcU5gvMmBAQFuxSUEtHw2Q4hWQ8JkCS1jWD3Dp5mz4SQP9",
  "key6": "3CRcy46zddvmZFEB9ZzuMV5tmZBM4WVoaifc7wkscCfQpP3GdcEZdfqP5M31nWzu3biELPxaQLZV37vvvnMPevmy",
  "key7": "5MLGY6pdkBMpanaVfqcLjMAC6j1TChdQZjSxk9pRC6RyGL1SjQurnhYZ13npr96wo7ug2KZK8k8VMygi4DhMYtF5",
  "key8": "43xPnsSeJ3iznDMZbLA8sau4y7BwaV9iFTPdrJCi2HErjpoi6tVqtFn1heXR9VkpGt5JLgki2vRASCRR8MpfQMc",
  "key9": "4LK7k9Uc3f5zjpeziAhoYeTuF4eThzS8wb4Vb5ntr5JhFBy8QrL1gErqcTurctufDKAGxazV2WQkgNQoXcf3KkmJ",
  "key10": "2gAt1HS2m2faQuPFiZBVp3xuerU38S72qv6joYim5bLY4HUUWBVEyv6A2A7X2wp3Hu1cQhoQCKQm9EhoRfd8FrRz",
  "key11": "3ByqbN1PsfRudYR9akyc4jpZKWXV9FCBnfc4MkN1AM7AghC2xBDAyhjSLbUNEngRFNnkHnQbgRbzEirLpZqTezdH",
  "key12": "4wEY6dP8f9H7QsgUokRvYB2MCZnwXKSMLYpiihHpLwdD3UAXthDUnosCh7vpLNpbi9F3YFtFzHh3yZDFXN4BigYi",
  "key13": "3F3q78xfNJjqwBGcLDoL15ed7dBSvUQwDSS2K7h7Pz3c8RXatWvC5yg4cwBjhX75upgzRnKoXvrv7d21iJ71BDiW",
  "key14": "2f2f86DJzuAYv8YDqrGxozXHZ9c1nt8PoHTeQvLgV4ah8kWuEjM2f4DZ3WP2WC1j2ahNX1f9iDjMSFR6zTFRwKCs",
  "key15": "4wzNjy7agfmLkpTAZmaAe2ZUyZu6bCz4ZKztGJGgNmLdD8mBk1k2jsxmkgH923W2ZYE86qCZc8RfLZCQAmYjVh8",
  "key16": "ySSAEC1Y7FhEnntTZuxLh1sJcGS7b378EWQ9EqUv9wB2TL1DbHKEqeqBkR3Grs24Stvboq86M6XJsXk6Zs3gWtS",
  "key17": "yFwvibCys7TeAjV6A4yJgCeabkf3na4FKmN9kCQud4JZcsz1pczDMoHkEcRGt1N3Pk57rb7fSaiWn5be5ftvijL",
  "key18": "5DNBQTpUXJEmFaxByBdYUDzaBySVoXmngC9SbQhFhnF1wvG7Z5YaM3vxsJ9tMqeo5CAeX8FwokseB4b7YaXiBjZN",
  "key19": "2GoKNvCdZckxcNCR2yzo5LHZ57tZ7arY3ZMYwTEKwaeQ1AyUJm6eAZHm6QncmJ6keDFaY9JtZnYJ3jXZYBDDPXN9",
  "key20": "4VbiYWAmqVTshkQYCXUKPgEdz2Yp8AmYg6ZAASkTZ4aaaCYczCyW9UugahjLYszJNpABScbNTXwUQY8UqknWbajo",
  "key21": "39rSHcGNyFoaDEhFTk85iXfPMzyDXvifWnLXqJnqWeqsVEUcQv7jpAqwvGgFxPx4eCYvffRbatid8fdkPBUM75rL",
  "key22": "ztZEP614AQcFqr3ps3TafaPYnCUr5DtDxoUsJHPffXMW9GsoJrgrvKLqdv97e7rTooTAc7w4dZRxZAznagaeypi",
  "key23": "o6Sa3gUdbdb2bxRVLygQrvKgC2tYp1hz4GcERD6rQEr1k7PZ3S65hc7PvgpJV6ofiyQDVzr9icsEgqVAqKwqKke",
  "key24": "4fXtJFtDZQ6cr3te1npgemynkASXc73XWyDS5yM5oYHvzuCjr3R4ucANm4JBUCTgcDSsG7zp1iAUjy5nE6Y6nhxt",
  "key25": "5aUYVRA4um727rVZy8go3s53ZpXYHn3jcAUdHLK4GyuuScrmaRfgNDPNkNysCmQ36bp7Rs14Z6RwwfsTKYhGowwr",
  "key26": "4nPPuFSGjht4XEdd7QUSoWpZzg63ZEYaJVqW3sBsyTegYkvniJq7x2zkyiFqaqcbz7Zy8u4DaowxLF7u5K1pmDpT",
  "key27": "4u3Fo9Rd46M8TwtbuxeFzsg8ySDzcgpDiTLwrbvyFz9XM1nxmPYFYeWtHcVk29j6LqKkxrZNnk9YV3GGyNmC5vXW",
  "key28": "2CWrzvFEqcUsqogpSNqhHafx4wp1o7rZnpc5JGv6hbzh7JkdWmGevGxxEBo2dwLupY6E3bsjoPk7avVZ5nsqf2tq",
  "key29": "42k2QDLxdc1Ub2F8Ndan2mgqC6E5TxaYXJgYxcUVmJsCzr7cVernUgQLxanzMarVWWBDfFEphySEYGWL427skTAv",
  "key30": "5ech2NM8NRbRSR2cxiRFS8rFbXdMHVp7RhkZAjerNyyJifrrsGE7cNCCd4MUqMRTEqdzbsPhcgSh9uQPpSiYCKxj",
  "key31": "3zCAMUQi3iXTtAUroMn32xwKbpz71scesYZPgg8Sj4oq1KftpJ9pJhyTGMpSvhw1z5pGNSGYzCtparcP6J1ajMKq",
  "key32": "3CY1MPKSrmrrbpKHZdoBphj7BHzBRzvvvvN9WEqrYZP3kYvtTqHcTCQfdzfBAKyEbrLm83hT2irWRjGWQuj11TEE",
  "key33": "MYSy5voUjSKkSKCPQ15XAHLyhURF7jvMaF69f8NzLR1Ru3PLCCCxgoME4Tg2GdGBTgMRkzqbzf3BUd7B8vUtajp",
  "key34": "bK2LiwhXww6ScpVzjpvVcqRLYVmnWbPsUXpYoPi59kuHAUkis9XfYAV8Kw2xHD83oWXbm33NGrwMjqtzNr3beEr"
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
