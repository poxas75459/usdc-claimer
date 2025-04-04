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
    "2tHXtyd9xVFyviAP3XFGU9FwpUjjiby7NJjqKLFARa8Rdnuyt52eGTAjsHdG4M2sJ47qZy8DmZJjs8c51HyWx5Fd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CB42tpYA6p1XA9Huy8ZvbZwB74JzogBsBoPkjR498nCzNagzoEiA9DEeznwxeBmU4AV7JvR9UBbENmRxNLPWu2a",
  "key1": "6qU1ngC6X78yzPPrvRSuYvrVPZFJpB2WeNh56woZRuwE1DgqgJtv1msZ99xFVtkgqCduheS7HNzHyZC51faSHXV",
  "key2": "36T8mHDYvYs1Aw7pD56wS8KHKnat2qYT7gYRMbzRQFDUtfC59QnJQUibqhnwtHy4xgrjEDP7mtVjGGaUMPFhYbMJ",
  "key3": "2nE3WqonUjpCF6ogXFVGyLyYcob97Hy9qEV6vNaSu1GFnpZotb9Y6qPeop87y64WrnVtz9DWi2hPav9e8G6BPsKm",
  "key4": "5mzKiyppmvyxiwFtzbroCziDZz8o2vcU1BQ8D1Pfh4PYorx2JTqQ9ExmNddYaNKLLD4b2D1XixeFLopeBsR3g7Ag",
  "key5": "2KUqYniC9ztLAS4h6B5U52dR2THtuGJns21KDAJA4gWidEoqVepmQLp7fsq7vYyynpjk6YphDd6yXUMHjxjCvDvr",
  "key6": "3rimCugVg42hzp7vHWa7SHTsnSZD534M3NanaZ7zS6CCqh1yAyMVh4adLJDh3pLmJznVYvoirg2DgSGqZhcw87tG",
  "key7": "3bm5RRA54dyv7pQopQSJhmbNYcXQvtLybWavBR34KSmWV6DDfuubhwyk9W7H91kCnncMei9SEmjiwze63EB25nJ7",
  "key8": "YDZ1BVg5u7THsZcqPY3iaq2cZtuPgE4Ma5KHhgps2GLqRLozRaRUJEUR7NLNCEdFWFM9DGo2oJ1VYp9dkmqUG2Y",
  "key9": "4kjRitvkHsDqWjN41yF97Q5ucHdDFbCsYLiBKpjLUPYdWw9SgrFQY98R8ir6jcXvSpax6fpTDis8EX6esRjsEomN",
  "key10": "5eBHNDjHJy4DnME7VQTcWvYAYKi7YqGgqSvcT7ZmDzcMM5xBs7wg3FKe157ySHioBkaNqU29Ew4wAq3feZZCnZxx",
  "key11": "4NPrPKZrfWXhi8Cfvdn4Y5XASzJBaH61pHzzWvKMHs2q3bRVGBEpVhYUkRfRsvJLLQJVzrsPNVpDQiJtQuqbjZyT",
  "key12": "5dSgRycfyYjV2rTmjHYMLCybkkdB8W1hdhTSM4NpZuimeNJJEd8TUAFh4jnNxtDKbzFKUEbXTcs4hoTPvshrUqo1",
  "key13": "4feiovE15XCWmgMEzofamjYevFZJbLeDmoKLmUAh51aAgQxefXMyv2tiddppkppH7rFy1LvJAaVRaCg8rX2TDgX4",
  "key14": "58bxVHQXmnbqww9SBxR7w1mKdDj1dTfisFRQf8rKimnhtNvYPLMeaoaGVv8UxpQEuuFxjGiwykDXmWDTKCFxDxrd",
  "key15": "49wURHoPd1YkJCHCz8ioir7WLGA5V7TfbJkNVKRWhuThHKaAGZ1UWWagEckPPBBwfY5je3HFyj62N514SFYgEWbq",
  "key16": "5Ni5aWsrmGz9dg6JohQPMr27hPVo7BeTBcffr36n8a1qcXphTMo6JgF86Gmwd2qDGNryxi3MRNe8a8UoYpEfaEK6",
  "key17": "5VSaWqnFBpRT1KwfP9Gux9r67FMLJtcE8GPpARu22BCenG6WYzpV2czfowhktktYXX44zDrEafeDcmtb8guF1SVy",
  "key18": "5dHACndcf3bQSgiyUSLE6uqQMvNnhPoLVErbqUytC1KnHVStU6kh5F9TQhMTQVMsxzQ23DFWyPDLRkT8JTn1vmRu",
  "key19": "3BE5o8xuJwo7xE6K4uLWmt5nTVs5qDxFFthk2p4fe1fi9XP1rtG8GLXQsm6fFZ6BN27goHPr3UsfnULmLSzVXXmV",
  "key20": "2EuZCphMbzMWddPSoajkde6Bb84tHCJhakR89hcQNcCDqNRaXLKkEWugHgNCcXEy7ba6fZB2f7o6VgG4MQmAsKZH",
  "key21": "3SRNy3Cm3pDmRZmMUHWioHTZRWGjuDBazQkSzpTjtfijTqEZnatmNntfpSpxEaJnVB8JJdeYMm3oTrp9JjUZP6jD",
  "key22": "5vq1g6cxxp1qPNiSRsYPgcbQUeGTRtePr4kGor7Xob6ozWCRxzQFHFPDP2rn18hsEyQtsgMGsSTW3HkbKQp3oXxv",
  "key23": "dMzpuyuCQYhZF9zStqY72XGP4U4rJckq8zyeinunZWhXFSER2txJcRGJPrihSKoMZftpFs7izsNhNHH9u8UyX3k",
  "key24": "4EwXuPaEpks5krHYNr5c6pb1SSxUwD5LVJEZ47WfPEHSeTWRDZRwmWsLmkTJEeK3qA8FdEa3MrXx4kGkkEtso62u",
  "key25": "2Dm8xuWuVgsKQ4bzx31fakGDi5V2izZygMgxu8qDPpCT833xk3NvE1NkqKJCDjWQDBYfW4RKTRLBVZ8E8q85xzuH",
  "key26": "5JEquv4vfR8WNLy1m5WvRR24sRrqiDDCfnmyra8wzsZC9GfeGkR9w9sTWiN6JNP9Swik57vGBWhZQFBFK6kteKan",
  "key27": "43tY5T8GXU3BZnu2nbeZC8GviavKAVCZsbkBDks6s3zVEwyiuLwYXHatfFK1i1wQnUVzvgMGnwLNpAzAK9zvKEck"
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
