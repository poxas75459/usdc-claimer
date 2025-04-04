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
    "2MabmKSocyg8GcEPtNMz2E55V6TbHu2r3mXJ9XviKcaETtgX9ooVjzNv3qL5aGS1LpdpzmCYnrNUX5YBMuc2mSe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jvHAwf4V4nkjnVxtGcLwWQwHFdGemXpRfBopXFx1hpYfQsWTodfM6bBK3wJfZ7ui24NksyEvBuXsireUYYUQrRB",
  "key1": "4Yn953hDfWULaPEaGfECn4LSyzbGbbF8tr2wNx27CrQrNfk56jKFQ4bEr2nU7hEXmzye8QduE4BcDjuEWTGFZcW",
  "key2": "rxV81j6DftbzQH5KUE3Uu7dNnqv6rioqi27GFWGNC6NTqGyBtQLRpMDaenarMh5YBLWVRwjZTB1QajFN56WTZqz",
  "key3": "PVznRFc6j3bzEDt4GfbD1Qi6Ns327GyNMycJejTy8HE4TAuhaPfMNMnfQ8xJyKwxsfcTj7ne87Lvj2dvox2YtLS",
  "key4": "2uiaotTwTxy5j59DtZ58RpaTJKN9BPq5dpHFkL9hWHhiUMdp4tDNCxSz9siDsC8Dj5KE4r6D32yFVQS3BBeRfreQ",
  "key5": "4rYhX6gG2iCd7pvZQopN8pi4ATvwLaqb2eUwDUNn2ttVkxxTvY7VwmFVRxiHfLiY92dTYGfWDyjopHGSY2EaLxtt",
  "key6": "5pq7GvqNfw8CsResCsnCP6jFighC7crFdBZk3ndP4hz1GUQ4V5rUr9onNcKfz2JWwTYqCd2FPYHprUzcKsa1CoeH",
  "key7": "3QPPwMjBqdZ1AUbH1dWYLbUfsH8v92UmD3x2X1PYxZq4BJdp4jkb7rCBZ2WN63Q1PgJuy9G9zSxHNyw1yEhsenMn",
  "key8": "5pfjKL28HNgC6EtcmzxsftwKVpdyN8NegEjpCzMbfkMfsyo1RovZBEmrDX3tJVkq7bspz8fUgjDn5iqyVxdANrka",
  "key9": "2YkLMqdBZG65KFwiRvpkB4YgE5KT3NXKiZUwzHy63i8iFHY4acDCLWur7yqfsiyxnitasADw53CU8urAJkdHeXiT",
  "key10": "3XGf1RxAh53dxGYMW9eqgHnzuazUDrf5mMjRTZnsLRGtJatY2Nuoe4jBk94WDPQvSzqABwyDfRVLsJzLpnXnNQia",
  "key11": "3JxbpWGMSBbUk9UKeaDkBZdTMiHCVQM24eriu2jTVDBDBHjvTSnMSy1j1ktjkmdf5LrF9AedBWNFCzWxcR5k6qWc",
  "key12": "3fLNu3XXnbFEyZ5pKuWowkSYFdpcKb31tEAW5DtcKuFEkQYUBgkH7BrVzH6jHoaKwCKLapFbZKYZ8pk4SzUGJ3J9",
  "key13": "3fZfmMs1vNXpUFBu2s9URWrR4Gn4ei8fd15rMeDTRZFiSruPfpgu3jvpZRt5ZmPWQB3bmtCdq2mxyuL5tbnb9q3R",
  "key14": "Rc8b7kHLWru6EkURs7TGCzD4yL3JY2zZ29qdUnd7y33pXtMfriT2sYJqq5t5Mt14nTF7vK9585whyoovTCAR28o",
  "key15": "5uBZ4pNy7GRiKM2QmKZPuxAkfSz39VoWMtWy5QNCvnmzJrmpzQnNscDKVozKEDNxRT7GS7q252UTQ1MyBhmaMtzs",
  "key16": "3GxEJWTq93ZHY5G7YkE43WUHzaygAPSec5kgeh3RMkWf35DLo9yaLrP5PruY5sF9MxQFurY3AoYMoFRPaETqByv6",
  "key17": "4y4m266tqegk2hzgaRpQqjGM6xtHYtbJmMraLAVhrqkF6BnwzdtLUjXrLdKdYQtDmoSC6rUWT38SVQoerpG2PNPb",
  "key18": "4unr2E3TratGsb2W3QLegH833GwGk1yQTnass5QrztE52sXhx2KRSnBqS9qCieyWLxCVSTk4RbXYTjF8qGEsPvU4",
  "key19": "2eK6fSzNBde746H3PweKx29QEUih2fXdLKQ5p7eT2bbV6NiWpjEJNRer5zVsCzhbKs2p1wqHkrDwSvoYGaQy1PnT",
  "key20": "2NoP8rM3rZqqrw7ytvzHgGZM1dSDrxL3hpDcRQTMgr2yUcSJB3piP5ksxQNuyBvKPqc3RXGCEJbzhPMshBBJK3x9",
  "key21": "4To8yGwPD8wVJGuKs3fVw4CtvbrzH7VwCFRRrPz6Cq5xfQnVqp6RcW4Y2EnNn68eMnEuwhk42aqg7tpuXGYFs2Ye",
  "key22": "55JAPKEwX8pJvkDzZauxFwECnfLRENUkj1PgD9auXTYRSjogfH27xER9R51eGbfS4n8uq1nCUNn1bR7j81tbNAeG",
  "key23": "64o2mdn6ngHeS4Gwhm8NcZkX1Tth9FMjLAJ6qAH2zk1QWKQfhLuzpUZDPtctsihYRqvkjPYN9mFktUW1JT321sqA",
  "key24": "4gMzfWcAzVm6cGsjBfRB3PSjc979LeEXgc6zwR5hHbaAQgqamF42iGRuU347754PQVTqP7h2aV8G1xAx3sdKGXwc",
  "key25": "8T39vrMqg53CpVPboR79pQ7VWHJSVJWuyBTYwrhR2NCBan13anKcWkCNUxYZ1ykSr7wRv4oQoTzXLsZXXVVYuqu"
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
