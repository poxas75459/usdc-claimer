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
    "2DA3CsH6irkAkquuUJHCofQRgikgV5JC8jKoMsL7comU88mLz8aC12cmxu7N1bFpzKJDnKybyKUGqC7464qK8uYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aDGx73Hy1bshV2LPZnzZF1yzcPVB1BdCmYDv7j7o8DLUtwCWhffqA8vzoduoSsXwQ5WfEkELioXeCnQGgNJt6Hf",
  "key1": "5g6rHur2GbNM1DhXFDfLPjXjNcGaNUSnxZHCDQfdESJFxxRWEb1g5o62Ree8M5aaSpnFMJPtdkwvW5Zj8BGpJtJz",
  "key2": "3x8SUPCCw4gR9JXbiiNvcSbCFbTx5FHhpGtnXgkkrH3Ra8AqNRpLne9L2pQ6ereQ8N3FnBk4dKx5L1wBdn22cny5",
  "key3": "2JAMKS6no5jZo1yE6j5P3HFtUyKaVfvjVAFtZwNxDc9jqe7vZBjfBZMSzzojNvMHfpE7JKsQjVpz39CbXr8N7bjV",
  "key4": "3amxvmBDRSK4dDDdZysw3Evxyshxc2JyAveMDvjvX38V5dV7bmCUAyujDKm9ooBDwh7oEokvQQ8e4cQSBN2jhzoM",
  "key5": "3uA3hmkH67c43GjfTQ3MkV8XGJQHHFH1rmgXXKfVQhbiq8UFbSk8vT6fo3ARDx6JCafuqyHNcUubHSDpJPnDMzw2",
  "key6": "64dwv4DKLMgNWQAi9f3VJGP1uXbsY6vji3WfMk2htsTkMbSXVPyEhcNX3UjGd8chLWG7GqKxKTgqi3fh28KRsegy",
  "key7": "t7wu8w8RWT3EtcdxcQfxAEFNNp6o3HwVfpWRBa2bXNfSY85j5knucMk4xSUy1C3hRot9uuDh5wQXv52p9xbgaVa",
  "key8": "cKndrtyKCtseaBF22xDJbiqBoB8g1xYgBXqRAeZRPHNFDtqhvoGaVvW69atbQxo8hMSz7z3sLBTZp8XsczEUrtW",
  "key9": "2k5zY1xBTs5CqL3DKsAPsDgN1SER6tzm8P3VPsh4b8A2ToG9uewoPfiAdvsb1V9pFwujREgXtqvQH3umnMVba127",
  "key10": "4N8m7GLEX5DYCdxsaVCygRMmXWvESn5qB3EfWxcmf1N5XsvbFjzeDYp2AeJaKpfRK22dgf4ZU9A57C1oKjLQaMT",
  "key11": "24TuhNQqAtNxF7NJqWYFwLw9WrEqKN9byiuwX2c81KLqK4ymzG4y29zgok8eCbYJLKDmbkkmR5Y8MSTCKkSAnWUM",
  "key12": "3CvgNqV1RWt5n8thHwVVxeQW62DT6o5E6JrqTm4TK7gNMRzGWPxDxatk6USB2E7yfTpkA2bBX6dncReqmh3NhtT6",
  "key13": "bBWQp45EHsugGoRYSyQGsZSqCQgpgTjka587Yv5WzytRAk6AGn7h39uZ9AnEWAxjsnzQJPRKJEBgq3AhofV9hD4",
  "key14": "2KnaF6CM5J2931RiELpdbxubdAkSc75Ra7ghScSXG8wPLD2Wn7hwUNLTySGJHffzfHRQC26VcyDj2ZhhAgszgp9X",
  "key15": "62yNaYmJKNH6iEPhGib6ZM7xRuczRXRYXC5ErY4Xdxcq7v1SxY5gr8Nz29HBQusNL32tynw8FAqHverjUuMhVasY",
  "key16": "28woZoVfQg2m6SDMNSthHy1BdumY9aFVhsYkPAhUDrUFgpuHcZ1GuhSS6ULNidt2S69AsbP5uAfwp32fCfd71sZh",
  "key17": "5XQkBNNkhgHUd79HrNTFjpoCoyXJedCtzh2w6vT7uzdAubwq97mPGaggb8V6vJsQ2gxU3VyaZWsfaTzsMGwdf26Q",
  "key18": "3tM8TK7Jd1Wnffme8Zyun1ci2nZV9uojAkAsPhczaXxK5Zr4TPZjLqAwuHHSC7ncZRgL55ysGEMA64A8kH7X4Wc3",
  "key19": "5jDrCkCR7oe6vVu7Es6x2A5hiA3RHP9Bc8gw1vyQpi9hGx5FLhKXF2K77iPQr3R9DfSWP8myLv2pgRsW5APbwXTF",
  "key20": "2EGwmxDdcvh6EtTHzrAsPfzqNwVKzyDUQKjmKzJZ8UMkkQFvyky35ba59TaSPsDjRJKoXpLx1UEPV1oge9V5Bf4S",
  "key21": "4rxkXY5aCnWxwajEKF9M1jLubWSG4WWBQ5vgfMVUXokpswH6BZAw7QpyuLvG6pTqNXswkVjgKsccozpLiQoe1Jmc",
  "key22": "49CfbhDzonCa5AeyfPmJ59ysiJ1AWLkUEkRdE5oHk8KpDYK4BMXYdzg7uefpqQg9rbrFSwtLpuSgRfJjRrJK2nBQ",
  "key23": "4TVppGo9yGuom6scagh2T5kvbrUo7rriSoZmR2ydKjfgQbdK4Ju8iwc2BcvCmVfCY2zMNKSuj5AcGx3k3YQcR3Yh",
  "key24": "3XjD9tx4TeKyYZLvGa5ittmcnuNNcNNtsL5gRN5ABLYN8DiunZ7ooa337LTc916Pk9qRufipzpQhYPr73GfAENho",
  "key25": "3TcoTgKJsHLijcjik4WBAEyD2L4YPufm7YW6ZW1h7FzUj1cytPKaegyabdMp644tqc1XC45EEmFvyDPBUeh2F6er",
  "key26": "45ArtB2aujk2knFHKSzk1xhxgrgKDWskCEHsrGnNoZqaqkbzAGozPq5FrWcQ3BonMNWYey3aKj2X16EtNAYBbcUY",
  "key27": "4zu5sLP1KyBPVUTYxaD3NDkg1roxJwczfVSEhGPxpAPvRgKynw1tNfxhPknXFeVnpkcuo8QU9GXsczpYticzVe86"
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
