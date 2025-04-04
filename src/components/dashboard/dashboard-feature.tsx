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
    "3yW6AR8tXaYUnKPhtU4ZSSe3YXVZumr72eJDhF3EJVej5XWm3U1vAWYsrzuwe9dYSZaFrCJz2mECrTNxy2bK9nGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aKk2jCeywscEp5LXfqDA7CHnmDtcC9MAnW2zm52oEXNDyaJZypxhf234c2mGxXmxqzaiMn4DY5EuLwS93mh3gnf",
  "key1": "3ZKmF1q6vQKYrLvCu4cMj8pqyLYSRTLFoPiSpo2DiZg2oyx1H1YF2zSBVvZcgExd7d6BjLeDZtEjn7LXJs9jRqP9",
  "key2": "dHMzgwQh3t8RFGfkjcdfup5Xi3rtFzNKHycePf2ShT8xiTfHbTHNucmeTqW7PEZMNZC8TFByUshwWJM1cRFyvy6",
  "key3": "5Tx6YRcWzFPRvVZF9mCoiKP9Kz5o9w6gSybf9mLRiTfdH217zTUN7in5T3oAkuJ7xdDwitRDU64whbh4VXdQ8hNF",
  "key4": "5sXpQWr2Gm9sHg3i8xXaA1if7cs5L7ZbVMoyJtzTDjjfKPC1bxxcLXwpyHVkkoicGN3Ds1Bc1cbpP7XDjJRY58VG",
  "key5": "5KsR9nFGbygWJax2iRkDAz1AKbBFAEftd3BxxP52gyrWChJtPjz13DCjeZpCB2pS58aqMQxJNT6x9FQVhk7CttLM",
  "key6": "U4ReVLSrggVLPNSrzwYQoSKNy1DUj8fZtEKEMKxQrSxvr4iWG25mrJfT1Cp4CryBqfUZU6YCmZ51p9qxHuZc8Xu",
  "key7": "51pnvZUjah9xsr4t3SabdAo3837GUzfR3fhWCBbhqwXSYRQ11MizEUHSpirARF4kHMEHLh51qPfDuLKXZ3tbamW2",
  "key8": "2QARXjHouCq86zppRgNsRyw3zQ2ykU6XwnbEiYrDpdkYTKdxtb3sHFG557RaUt7iXykYeqazdbxWmecGQ7g1uxqy",
  "key9": "4g6vHFQ5sCBsX1kZPiDUKzpejxjKWEEFt2Udi5uSNKvc4giUHzE2XyvicoSxT18VvrMXdKtFiUdnaEEiFrpKvNhR",
  "key10": "2MSixqUYrfcpag8tLHFLYYdYkvCDWL6uwmzmTnTey4fGAb3U61GBLC9TySctD1AXMexWU1WAHuQmqhVgD6fvUSJQ",
  "key11": "3xU5DSW5hcHQrNE1LcHAbZuYAyRdjjVh5pFEuFfEEfpfis8u2x2YW5yLTcMARCrEyvJUak113kT8MrpCkcpdUazQ",
  "key12": "2TCfyHrAEkbeGQHinZW5FXopvdNiS8Hu1gh1q9tyb3xJY5c3m9rFaVcvtkRjN9t12kGQAirsfdhPiP7Fcn4U75f8",
  "key13": "37bX5RTN3NrSqHtnWuqEZ851USA621kN1ftMDAX9tCKnpM3E6jpDrpqcPvZcaTfQKWcR3VyJqWRGxfPtuUJsYZ1",
  "key14": "WCV2RapAvRT3b6cXDiLCbEhtUePQLdKGV3fwinteYfp4aHbJSu4qqas3mmmzmFhaTLQL7cpxzThMjRNDyQSvF4f",
  "key15": "2dfRacMmj1Pg8aNXD8RFaEJCZAhZR8PN5zvn5wysmbAXLfJj5EKc6ChPPeTNndL8U35aCmjzXdH3TixJFPni9Wro",
  "key16": "29kCH6sZd5vcaMa73b31A35swRhKg1YVZfFQgHMR3RmJxR5yYRCWqmy3MPzzV996bKEFmUP1cCTyJWAQEqH1NDSh",
  "key17": "3ude7mb2eicupmXkYpK5DaFZpNRQrDVRM5rH63mCTfzBUpiokQYCAVzv5ksF8vB35VsXcPGzR966zWqRTYoMuybq",
  "key18": "qscPRDiXRk4EAeF5MeFmBhSQfKnPmpfE4Mu7KZyHrMsSXhTjrzW4jkuTNYAtazwXMfyqmGZyRys9fWJaU94Ppff",
  "key19": "CzZKX69tQZZvS31winR4BggpJrxtpgcngqT2GAWF1bjY8qMbKqXyF5qbNJvsFiwnYQYFzcxeTojQuwGLaYUdTvK",
  "key20": "2sAniUsHBt9K7jaus1iSunSWyo1vuR1Guyq3BzpVh9ZETc8SFVPCEL6JTDRSUbVpRoaEphnHV6BJnLwPFBcmWN3s",
  "key21": "4t7woyx8DEh56ggq4nDZpvyqd1vApsdnUj4Jt1fYNAX23Z12n6DJX6tktn5ytYFvxUjc9TDmX88tnDt3QZtoca8D",
  "key22": "2J2JhYzR6WDGjLos9VDDbueRrhERz5AVBkLKjH2cN5gjXbKXPpfpg1QMubFL9VJxUbnC7eqRrSAQ4oKYtpMfg9qJ",
  "key23": "4SDEvByRASD57JTot1CJoCGG6GWCu2dKjjMKEvzufTonFsgVzFSzeNGN9bbDCvxwLHyB8GAZpdbLMBmGNbcaEmU1",
  "key24": "2Vv17f9XWA8g6cChJRHzmED25BCvZ9jzc9mQBp7juMYeNthzJgcDNuVWzoyAUXvStjzJQctU21RmiDMYBQdA8HF7",
  "key25": "4M5wergmrsXw5AdKxQBvtsYwDTn5DVVzNKGPt8YzJtpBRvyLbBuPzvG9i87aqbkLa2Xjuk5pacZfEok3r6p9ZSTK",
  "key26": "65EPi5yq5XP3WVzqk96aPyL6f9R8wV14Jzgg7HSaVPr5XqZacdu9axo2wqAwN3Vd4cmJ8UgV9aJDt9zzRLWUsPhu",
  "key27": "54EZ89JCuyrwcnqJ4NDBsxbNkL2d3HAwa2AA8yCLzRQTwKPJ5itFxovff6B818LLTYdFE1se33gWrzwLVH1QSmn9"
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
