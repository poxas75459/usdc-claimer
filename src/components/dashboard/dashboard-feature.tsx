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
    "487sgEWF4Ebi8bZgZGmBMvGP41RCVbfsM2Lpoor7Gya5wqLYYJzmuR4P9VVDkW89x7oqrWMrvt2CXwGNtwZzhHRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yEFuTg51PenkMDj9yLNtVrtLfFLDBzctnkrMorBM9vVyfobmUoA693qYgbo5XaBCqXWL2UXeb6c2iuG2mBs9cnL",
  "key1": "2HBdR7rV925Db13ATG3GXoeQdfSVQQ4YWp4SbRzQ62LANqWqg6hbipNGnKgPKTe7SnrFf41XPRnxWdHz84o7QikY",
  "key2": "64aqFmUUVxSx7SPweZ6782h17ju3Mf52g71g54Ek8wRL65jvn9f21PqnqmA55gYFTpxGfLvrhMUi8RTPcqDiMz2A",
  "key3": "2HRbmaiqJkCbnvZ6Vk55ksNTYvSAFxUcf7Bde8ozP74qq3hNt3Esq3howBYCREe1KQc7EryGt9QDuCyc3Zo1XMRZ",
  "key4": "61escfvfb1eXmfkwz7LQGuQ2AyxutZx5DGE8fTkJ1xTQNKCnCwcLmNAUSaH6kZUfWkug1KkDrFwgEm7HcwVaDhBr",
  "key5": "3Wojkiyk5VPTURAyUZGhifQdDqt8kjz5ixUBWAu1TcaCSjZrH6V3njBPSvmLrZ7oD3gn3vmQe8opKcY5nk5pwCsd",
  "key6": "5JquHEWUAXHYNKNDPw5UerZZu41Y4BQu7C1pMDknnnVgoyWCAC9Q8UpGuJ2s3rT5XfV7DVYuFdVwdyiiwHggRQW8",
  "key7": "3ETrckYdtSNBX6tQsytCpgvdUyy8BCzzw65nPueFyyuikBK5i2dFCex3D5Z3jkBtuC3mGqYcxNNvV9aCGs6Ko6vw",
  "key8": "5RFAfKjH94wxstor5kqdBS3AsktdvYzxWxKjzwByREgdVf29tBiegiaNCZbS3bzLZpn4gXw1jias8FWjNxU4ATiD",
  "key9": "3nqgCR6GdKNXGLq6X7ZgCR3bTKXYmP9p8NKzjk1TFWCqF2F4EodANTDBiQtDAzpjDahMJQLCMQuMa77yM3S9hGhR",
  "key10": "5WwLCCPp9ScSNZT61r3tdopdjNxCuqq3bij7vKrY7y5cCPUdVdr542UL6Sovw1tYV78VSGrnhwvn3kmkgp3Vez2j",
  "key11": "5AuZP8muyH6ZpMTsFHttXTWfsZeu64Wcs3ugNGxppy2fhR5mA7ZXd9Gcz2YkdQ4N9bynLP4iS574eEUDtfgdQGZz",
  "key12": "2LJep2ZZivDhD8ZiV1KuyGWzJUJmtvce8Q7HVJCZ23ELewXjvVNnK5M15TWtkNT3hBcVRCeLhJdwHBwoS6r7MpEW",
  "key13": "JDuztYJukhYFXiNFCxGWrDAJwhQvP2Z4bTFWcx9CDd3gZU28H7bstwG4PXSqsxNsTGQyh9MKGdMufzyDM9i2JWe",
  "key14": "m3qTyX8TrLYehvou3MFVJWQ1rLt7kiFFh4C2Tt2ty2xruPAYF3njsy6XEf55xoqj7h8CkUEdurEDrK7wk7EatTX",
  "key15": "61SS63yBhqy7k23sSWppr9a9gaLPtrGxCf6MsajMLBSkY5z7nDnWiwE1f1G5vPSuSgYMGSXkmTsbNRxNsHSLDJg9",
  "key16": "4JKWntvVArMx8BBp8DTrNFbN4hzeEwLFE5jvmzGkcKiFxKDk5tCqm1iRLP3rHGMk65DcXy3TcSf3YQWGiLnjqeNS",
  "key17": "4QdiK9UWM464DuCHwLGsJLX96D9qPfzB256gj4ApEDmPzXkN4YkshhLmBsJ3N4tnnVHXKLEXTQksW6fzwm4Hqd5d",
  "key18": "4itZX9F6Ev3Qgkt2HtztJNru2LHf5jDeBjqVcFBp1KDZzYuue8xRHVbAfqUkpcKRKqJyHtCZbJzeVDnhgjMyUaQs",
  "key19": "42JQgJMdXuSD14Xo56jNP9PK4ZJAnLmdqXX32sQK6M8abC14k3BkA9dSZEPYQHv6pDetBGoiQ7wSiCvACeEpwaxo",
  "key20": "63ByBhfY3BHco52wxtRL3z1pQsrWT2rH7zFF3CuuDw56Zdu3U8QRYDMhRiunePtR2hBP81S3oX2LDt84icixhUZa",
  "key21": "4zWFtw4FFuP6gqCJ9cyFz7hbkWCjmU99QnKTdaioDstqHaohD9B9cSoketRqvan8CHWmyVqM55xukRKp9SNvUFQC",
  "key22": "3HA42wjcDTpbzRGkZWCMTYRKnF2S1GgKhUtG5pgeUCwugeSxnNCeAdMGkMPE7kQL2mcYW1PuFwg6Wo1ZGW8JXA3x",
  "key23": "4YnsvtQb3Hz1uWx7pNUVSZCApV4h7x4CxiT5yphPMcmibc43PrJ1iZYrvnDELt7D3hQC1pwPyjHixU55TGHn86rM",
  "key24": "xrvkUEYwqQ2vR3ijsYKCkMnswyrTpBNovB2dGvrQQ9jGz18SjsqBzRRoArA1zyyozNRiBAkwPaVuRWLjj18L7eN"
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
