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
    "4uUoYRzZkQMkMs3vdCfnCss5vTf2GjForoWbkaRMiyszG8CgZoa7uBBW9k3G9EZVG4Ya1gFqbk4oYeei4rPTAaUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s4owXEX5y8Upc5n8NZQbpB4qEFo1DDtdRPyGddoZPVXpbzfRM5k8BNK5bEVdqTiSXCbdD6QWtCyX16qcV2xqnEm",
  "key1": "5Cbce1xcnmpTqkGK8qUkHN8FVQufXNk6jQKg7bAHqWavjrokozjPGuiNKy68iVkyHsVLHCb2g1uuaf2vWP7HzjbX",
  "key2": "yrfyoJtZcma62rNfqKrdxUiRiQYm5eGwNcXqBtg1ysjJ5rJcrksUcgvBoQBkdXE1DhvrhQoj3G1akSjokTPdpZ3",
  "key3": "5Ha1HJ4YZHFCuofR4y3ZndiY7omK5wfC4xgzCbrf5HRGkKv7i951z2yPyK3LTFs3C8yrroTB2aSrhLQ67CB1Fmwt",
  "key4": "4e6UodRhUkMCSMkMS36FLaYt7neXBcydTRTaRzdrBuZWASjMcggX7Ruyv5LeeSJ7KTtnAnYkNPUpxH4VwVBXww2Q",
  "key5": "4bd6917oLck1M7YfY1sAdCW5ZFbgvniXJBSxNr2nSu1gwrrsdJjx29sJGn3FfLzoa1XkEPVTF2da9P7fb6R4m4JA",
  "key6": "3YM6beWpZrcnLM7fTPpqh96toBw282m8b54rrWepQvvycbm2jHZMSJb65xB6hJVmgmrEZcVdvXD7vC1foMgTNDZu",
  "key7": "3mC4zjUbKiKFAnVJkqRectHvRzvPd1s5f53g7VnA7iwqdwDyTKeKR2NhJXH87Y8uz5Go7yY6puxjcYCrRYavNEcC",
  "key8": "3eoVhTFLn6CW4XExnnsSZ5WJu2qgQGuvYjTPYAYFhuHW15ou6wue8t5fc2njwErPzipoDb6aVVUmEUpibhWshU7b",
  "key9": "4H1o5KwuGkL1MWmVnBGHPtikmKfxeDtUG3fPorFmFdTnAP1UUWcMPegmeVTHMfcEcGrt2wW3nYp41kCwfDbJTisV",
  "key10": "5hA5RbY3dNWTcX8N3pM7aNHewtNGp3t9P68x6hEWcsKBJMcfScaYts5pCti5ifHm1bvavHJZgFgHi5JgvqNFTbaq",
  "key11": "4Qsu7xCg1ha9MUAhbCqVZ4Nzz4DGdtL2PHji7QLDPxitK9XP6JBc1YnpkmJHKsXAfc4RsHppmXhSHrRzEWgsozNk",
  "key12": "VWcbPCZavWtnAD2stx5arhodR5mZoUsRWYM8BibhMJZs8RmvBSqfdy9mMQ8FykgWBCr4K769Xg2XbQEguHDWrh1",
  "key13": "5Ps9x5ZuAXDC6ciMsupzxDjwc8JGWn1DBTfAPEvmjCigXeWm6mTMXxZWPwFXMt4scjzAfnWsUknPAXR1p4XJpL4W",
  "key14": "4BULzHPPNF6x6SwkbtQk8z6Jv9YsJc3jYTCc7ty6GXJNpAKg8WXM8AhrAryovbHZEKdAHMp3EPVXKhfGkC7NEmK6",
  "key15": "2Wr6ezDaee3Sy8uuuctgJjY17Bbn1geWo9yeCKnhciv2yviuHPt8AJnMPKfvwpEmJgoVay6ZsCnR5hxRnf4QH6oM",
  "key16": "4pRe1t1cjWqNjWms8trGka8QXedczWpMzqSj9pJxFGrPyRtrSTgHk1yRBTrkYLSpfRUUjsSK6t1SUhpYfhtCkp2Q",
  "key17": "3LyqGL886Hwk1jjRdKS3r5U8XLsiCwoQeDttT1D9kPtVZJtyU1wngFz7LNuGZdNgjem2KD6kkkrb7gnD2cjUHnYa",
  "key18": "5hyCjURKdXmVfB7aPojWBTnxr8h7ynmE4AHRqnA5JgYwLgXfxjAuDiuVX3YqMTdBjKzP9jrZtYQF4K6c423qcWc",
  "key19": "2g4yFJ2DSv1wGFczp6iLkjDcvLrorzoTuLAgL3Zy2ADmVyND4KpFFXHpPcZFadwyNdjQKedfroSzZZq9mSqz3jYY",
  "key20": "QWrv9Vaqcsg9YKysJZPuFzT9RDgJnuEdfsH7RZ3Kp77cJwaLtp95f18g7yf2GCyee4RFa9gHHLgGKpUHUrYGFfP",
  "key21": "2Y27hgXoJ4emiiTWEZhyQNWdyZQc8Vh4QMteG8sfFRePhw9RjVWRHdRw3KdfACCJjgmYhtXBt66EQukeQn2CG3WE",
  "key22": "BG9epxQXBYpQ2SQzhTiWhKM83AjWSYGNxbbcXJ2wr1sUZ7GFKRGDBp1ci5oa5X3WGKi7z6mt2RGy1VShfh6iZW8",
  "key23": "5xcRGaVY53SrwfQW3jXi1SRWzpK2NhvbhYeCeveQZjZ1sxEnGjLJT2g1EuywPQ3ahRVhDXnHcnuXjtg3ja7nesUX",
  "key24": "4eqXVb9XDsjDK3FqcWvJ1CZxXUY1B1pkTNwuuqi2qa2kDSnvqsPPQrF679Yp1vQcYGYbmTrSqmpCrDd1XubB7NLF",
  "key25": "659gugeF8MBA6m4agKd2BEiKMSwWcW7fUGtPdJTzKYwLsQWSgcV5Qx2Faka1UorRcXFgqUnRReNV97stVnafne3d",
  "key26": "K6SHXPJ4jtEzbPuD9BYudr2iNqmqJtbnYEYN7me15L9yKSAhdJsrEdTpetKtdGgJxyo2FPELWEb7GZ32TSxbmCE",
  "key27": "24UHumqNSryqLxq4uWgAyyyBiYS8mWsDn91sMsEcZRExY9sfNoE7Ude63ZswSYvyeSRgEFgbbaLpjpsUcWAgdaRP"
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
