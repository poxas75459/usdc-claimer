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
    "9sCHR3379ASd1vtoN21HHd39WvfZJLhcnWHrXqQ9xTgX9oJBVL7ZAtWALBNQxoeSMMvHL6orPKnnsYxwg36oLYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CaDMsY53bGBLfC4YbjNnQLZvY5uWEqJNzGz1m4aDoozqQAxmxX9y7oAgrDwY2rPyHceNQyib3oLR444inNQp8gL",
  "key1": "37j5AL6W6wTMWU12bXamFuJYPG5XVDybhmzdiVzYvTdfXfgFgGmYXAMrxhxysRPuxFvgrhMYcjdysNaEYhoLZqjN",
  "key2": "5ejpsvDbS7RjxvjSS3mGPvKTMCDm1ubnSPJXaNgBqbfVYV2DnXJU7PUieacGiFCDcy7tT7P4u2XSApEBAMqiJeUJ",
  "key3": "2r9wbq88zmXpebxaP9HaUis3wgzixLjnNUTVi8RJDwL9rJWz8aYB3ptFhiq4pT4WJgYXnCmXGBoCALcJKEDSBbtb",
  "key4": "FLDyCppN8odS5HuLwCeTRp5bHrz8VnR74P7pQ98ETVD9PybNJnYKso6Jc2k3KbsFHsTTPcXYttmK71E4CxrKSKm",
  "key5": "2yVa33yZ1d4FGToQ6Dghi7Za2jxgKm68WgA15mi3ozwwg326rr8Mbb3YwrKtwwTPDmBeXsMi6Lk6MP1JMENohpeh",
  "key6": "fi9Ze3F2yy9za5SYMzRuLWUrtp9hYYt7Eg2zrD66QzWeXMbkuCXNNDrD5mfZNj8mqN8PzyY4SrCaVawz2ABaexL",
  "key7": "427eobY4MCCk4DATWA8LYXExB2QEeHM6dKHcAdzM7JzfT4VHC75Cr2AC3eJehJ4YW6tEPXWgKFN3jDusHFacE4MG",
  "key8": "26aWSZCd6TsT4zsop6aDp8xb92YXBkdriUKedBwyLFg2HJZRJMaAaraji7J9C5nyACUFT64eYMAsFuot79u5qkjm",
  "key9": "3LGuhy3wnEB66WkwCwimJEQptLdj4ehtEwDaBgGkezKGFHbde9oqjWuVayKcjKGBEN6n7vHZSYjbpvdEq4Ntm8z9",
  "key10": "21itUbFPyREtUQzSae5bTE4ZYsJA8X2hNSfney4xq6btug1qgNmuLzqnnKmmt4ZGqgsfTs6a4LZUYhSc2msZyfro",
  "key11": "cYvpV5LfHyiRswCZmD8QFJfWnQYDiG9Qm17MdF8beJnqhwqmsSL914rgn4HDeTc2xRv9JWYqb6mtRsEMu6oikRm",
  "key12": "2rmsp7zZzU3MVdPmLiZxPyW4aPvBE6hvZkWursS5Heq4GaQwua3KE8bsNS5rntiNaxtJM2nw8EVWtxPQ3ULbuVAz",
  "key13": "V5gKYNAfCN8pbS9qJ1QJ9YXdXugL3ZW2sz93QT98Dj4QEA52uQc8fMXsNZCzB5Qf7DYmyCVHbyUbJk1Do73jqtR",
  "key14": "4X7UqztrMkaWDHsaSvpnRLsz2Z3Cd8Ua97YLYgY2f7ciweVDpAmSWSTfwCQqm8bxS96sxWGzaLK5HpwcPTBaZZ84",
  "key15": "5zTGBhcRXRAUjfXwMJJQRZnvphJFeTUg4Y24sgYjToiDMoNsc8KLusCZPFVYbSZLkdAPDeU35YYRtFLJS87TCBdh",
  "key16": "4X91CMSHztcPPeVsjV4FEz1WPcpBh7n9zcz2vrf56rHDWmN2kAYDNwdT3o3xASnb9eEXuc65jnrrGktSyMme8y9S",
  "key17": "SeFDQLhsTHWY9UM4AGnwyj3u1G9iz3XPvBZEQ1HvaPUsXhDfaewNce6KKhBbqqWW7veYHUm6FiawpciNhBdnbKp",
  "key18": "5M3g9QFv9Lebu6HqKdbCeTjBUbW8HbptJsE7326mzvTxw392N3ivuyJ8kYn8c53FPQcbbXe9WeZv3JxdwqsjEFi4",
  "key19": "5LRBSvQd4RCt1oAVQ8zm1e3F4Yt1LMPY8kTwkQNDq9vnFJKaPsDNfmmQgDHxGf4kpFo7jT2ASVoqKp8FnhsNVYnn",
  "key20": "5X8yx85vbzE4atd1yFdcp2JcNU3f6XNURXcYxHCU4zSTogZNEeVY3XXpuwFdAHo5QrdnjR6BAkB8G1zmJQxNV8qr",
  "key21": "34c9khV72Xvz7nMnaS5dZR8jVQqpdLroibWV4usA4RcyRG1KFX5FKaHLg3dmuKEXhvfVUxnwKx4vKeL88k7bWe7j",
  "key22": "4YNPNvX9cQofnkGudngXZKzJ6qBMV41FCxsTs2mMDgLQGJ4NnVEy4f7BsCEUabcDFVU1nARUWNTPFPH6AERxpsiV",
  "key23": "3c3GeXZaRzBuifdS5goXcJLFJJG4xavkk2PAP3hgQ3VZkVwjbkH5RgCD81xC83GrF1XnCLrXAF17U4BasZAppPfY",
  "key24": "4kcuwB6VEcpcnEdukyqXtJmBNiD9UsqPFuockBn23Ziv4yRvLFSbin1GhxaG6EJhJujJUSAaXmmceXev7w9KPBDi",
  "key25": "3fj2R33D7AQLvEySohE5cYe7dFBDwPZgp5phFBsXiirkxcxzFuKc7fVCiQXghDLGF1XDNq8VrfL9zPNoqfMSajQj",
  "key26": "3ghRXJRgxs7RSN8Z2tWmLuuTUpg6KyGaKSrgmXMYEVoYW8xK7Ksj28rMGN2foo6kDuJcUJGvZMJq2T2DmPhkPxXR",
  "key27": "3DhGe6wRjziyHUFbL3Lvf7L42Wy9m9GVyxzNbafo6BG3cV9UYJSq8feFQb7btfSPwMfc3tdBP5ijq1TubgKYfGca",
  "key28": "y2enVsQk62NTCFzBX4uVT3UvNuAADrK2i2xSHrCRwCGcj3kE4RqZpYhrdRza8oZMshCdKinfqx9HsVfuYLt5eH8",
  "key29": "49UUzy26Dpzs8fBaQfAuzowriUDzBdVzxSjiVbUSGxG5PVMZZQ2XADBPP4NpuH4QAbCwbdweyzZM68EaZk29Deci",
  "key30": "3TzsrgTNrB66FSRPVQsRhXhSJ1kMYfiZxKxBZfVj541vZKaoeHgBoQtBqdT6N2sA6TCfMeJKekodrwbch6pcR3c9",
  "key31": "4pYFH3Pb2AJXNRoC1kimff5wpj1ZjHV1WxVp3fuYTTTDxtN1oLgyjf2RTJEZogE1sz8utCbFfULk1SfKXM1BJm8A",
  "key32": "3wJ5eFBnALu5YYWKRuECVf6PHDherAB6GgpimgCeWcioSay3fwRiWkNRPh8bQukNpFxVydBpFQ4mgD6kvo4kKeUh",
  "key33": "2TCaSjFTKsGnABQBPw3Pm2nmxWii8EafBHQAVaXLpzmfb6QyHgurwz96AenVYu3XUbqL31pup8Gv5wYQWL5CNbQW",
  "key34": "5uaJa7U6vUtFMECz3PHyWYnjZnC798d6peaxgZ5rb9RQ9mVXhpkEFC9g3MbwJx3LMayghkPr22T1WBUJt3jNtZpp",
  "key35": "3buV6qFbC4HteHrz7UZR3UbpMBvxrbYZeX7J7XHn7JoxTgLbzggDJ94vJNHyiBaioi85WVd3eWqp9cCdYBZYGbVv",
  "key36": "hennF4wnqkpGZYMSRMjY81K82DSx6ukLxhbyTwiN7NzFB7SHwus54J1xGzUEXNs4RkxJStFizc4iLeAPUCg699F"
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
