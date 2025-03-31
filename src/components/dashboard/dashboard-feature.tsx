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
    "3ug7ygus5dkpbJGxo7KxybiTKXupxf936vYPUpUs9HFkvaYocGDB1vq6QZKtsfcjbysamrE4ZnAP4trK3rqvT81e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VCgc9r49afFMRA4gtKP5mpUxqXEWJhNWW6ev7phEuGjcChY9szLz4TpRcGFZgz8wuTrvbdHbpzXbzFtkkYnPcxi",
  "key1": "39BRKSVpJbYHiw8Qj7anzCoy2UTvXkCCjgqZak1faBZAJn88vcEt2Qx7hY7sYk2NAXpJUxz7dH3saREhJBppTx4L",
  "key2": "5zrCErdazxeD27fqQtj6fnFn6XcMfstq24teZ2oj38ug48gsxBss3QQmhbv1mED3qMH9ogxuPG6P1dPJB3W3GusV",
  "key3": "2B9nfga9rLo1Qi4XZF9Va3fPdd3gXTxTq5zZSrysDmYmqVckZVEdATE3GK1uQoDpDqaaL5QimU8Reoj5yNz3116a",
  "key4": "SZKAPPB9SvDM2Aimt4o5iZqBwNvkaxLURf9gTds3zNgznCePEvLetTHZ9Stj59dq4StYL4R57ja39cdZLfj3eJK",
  "key5": "w3aq8yFGaUrTkPbncp7qokDzbQUY3cezFUiQmaqWeCyxB5ujUYLxk2QgVdgPe9CE8jJsgxsjEgsiMgGfFahz59H",
  "key6": "5ZNwin52yb4RLpQY9r5bFxGYnDLNxGi7fBLBdXuK7NibFFccKqc7UDWb34e8i4626xuhtRsU6iEifk8uHGYZALje",
  "key7": "35D61cu1SktijMA9zVZDF6WzL8R3wWmMhR3DjJVF2gixRQQvSc3m8kRKrGFVvhbPDQZkuucHrKSJ9a7bKGcQEb1B",
  "key8": "51feS4kwVMwTugRsQhA3wz9BQgNMAD5TSHossB5kayHxJAYn41wDuTTsQ4FQsvf3QNxBB6K9K4cSLrnsA5sMzfQG",
  "key9": "4PfXdKYKUssQ9gSzUft57NrhoTotxEeTQUpfxEe1Qbth6ez1akkDMTTckPWUqZWd4kvRsuLT9gcwZrxYwmQkSQmT",
  "key10": "5PB6s9XWKiUfgcr4x92boveq4F9eS4TzRoECRTPDQMjMemiK23utKgQLy5Rq6b8bSNrLosbm8U7xYmtveJCrwDUg",
  "key11": "28CDRQzATBgxnw2XvR3BNnLUzLe81GP3LqmACFTCZQxP8z79nB68NzBG3qtmBfsExiLaZqMaMkwew1bbMVrZxDzD",
  "key12": "4AXJ2T27efPZ9WcodnNmn6hC4xW7t5pFi5k2DfLSKnpT83tpsqJUtADv8kQvFtvaM3LpqF3Fi6k2utLipZNmYDnp",
  "key13": "22QhzMY7ihYUTdaZDzXvZSN8aMwVUnpjE7XgQHTaPE2RRcaSynyzS8Mqjnxx4XoyLV7rTtDWxvhVE5sCpTDUsXFj",
  "key14": "sqKAezZwqxHogtobKuDwQeyHUjsdxgTuDshfaYU7GeNgco4eXbmybhZDvG79Rub8J9mzhWGWGeDbhiuCoWwErEM",
  "key15": "2YFwMgmUcVEtvAhQhDi9qLBM1CZn3Zjdkyz5qWWSCghDk9jtvo7tbZnwieKBFDW2s1BEjg1cGPaJXomX5ooSCced",
  "key16": "45MfZdEBUVQEWJMqN4eQgSJwXQJpM6Libqb2x3n21PuxzZaJxLt45wYZdx6CfnKs7JNpcE3ioKNEjzLWrFAJmNSJ",
  "key17": "5UnuiAZVCEVMZJutsXriDWqwnsj738w4TTWtC1S8L1e3BhbDW5gphUxUgahwz5VaS3UdGWpnAXQfpA591dL69hDb",
  "key18": "BZ4AWGb8KeKds3hiuuLJiaUH5L8HoTNT6odKKcwzcN34v98BYqni7HmsMbMuvNLp7jBoVzgzDV4cGUaEdyCVvGu",
  "key19": "31otg7nv7sMnvizotoBJPz2T5riPBC4jFyYCvfRvdaFC1NXJFzTk1HgcmVEhxyyXzHRfP1onR38so3hVF7UBDS7s",
  "key20": "6eoDTX8ycoj9NBLN5iorfcZBrstomEXAYbAM7fqLdSat7f2kjT7RDSmBkinBEgCy6LFa9G4BhMh3UVZRDpiPYL8",
  "key21": "4QKYUxUkgm4YJzB9YrP7L1GoAfJRnGyfE1WracJ3tpyKrnZZWoRg34fRomxDnHh1A8NhbeVK383n36ABXm1KQChH",
  "key22": "3e2MGSAwAj3tTgtvNdXSeZiw9qEReaEpvvRCj38mMGMbdnAt6Hw7Bvwthift6k1AhaVpfVDCLSETdyGK3pdmghrx",
  "key23": "3TM1SVywvWn2rcvDqMH3v7vMdRBPUFbVVf4Fie2MkyGcM2H6r8s2u7GPJHzfec23hwhMk6AuBHweUdhdiSs7ukMo",
  "key24": "65zEia57KMnG8heT3r6eaJBbBEGGHANUL8FmJDdo1sPztfBWNNXG8GoiP6ZhhWCSCrZqBiqos5wEPEbeQREJd4Em",
  "key25": "31svWNDwfx4dVvZqYQftMPqFkkMeBZRKMMmdKUpYswaujPiBiA7VLkgqxCfHFW1wEWNMGbpLC2X9pQtVENas94io",
  "key26": "5X6r8Z8QfwxFQbqmbzQb2QnEEJ9jLTDpkuQhSKhXwD9yxnL3uS7X6ShSg9qbsXhELAHwahsDhc3SBriz2zCGaJyr",
  "key27": "4Fv5sXuyq4fv5j3EzZnBnZt7aarWk6yZMgHofrVYb3H5veCWie4NVJZmuPpj1bUcC3TXxthB1SQ5oo4drp4eKbSn"
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
