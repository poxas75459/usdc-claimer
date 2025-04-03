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
    "56bTxZ5vs55q8hV8ofZc1WaBB3Ue2Cyg9kabXpCz89hsGFTAM62wvGLhRY8KZRKwKCHxNjPdJaBQBoz9NVQcEz54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bZrt66JeZSAT9mLEjaT8Shopsam2H4p51vAk5JnSDXy3yG2uugnvsX4nuyG1wQwB6ajJgFfiZBFvcirxDufuJrU",
  "key1": "2iR9EK3ToSmeJ1mpAHm7W9mxqAfDZ52UKEmBGNNwiYcAdEd6i4YNDNcP2j5yeVka4CECbBpYjpxghXDvuG73gaGs",
  "key2": "4sgzS8jQovYvEwnuszSSvn7wxQXe7Ce7pUdAgiwJkK7AfES22mPDeBhej9BkLWMb4CTczM8GUAxuJytmc36eE994",
  "key3": "4XRtrgJSkdFtqYLr9Dhp8LddzBzHJNTGHFUeTwZFwgSDHfMfV6jhUaEfEq9tirvhUa8LFJ2Anc9iZKDqMxTJ3yi7",
  "key4": "2fnwBA9ihHkYCmepmT7Gt1hqZi5pzZUzYYtHQRWCpyGSEa68fCVcCjnvTsvfAvDKBuF28n2NBUtcL5rw3oejG483",
  "key5": "8WwtT6Ex6o1DXJhbBNBSweCFTd9Zrs7iS217A9J2qTJqyFPwLkwP2m6Wz4qQdxWFGsDCmaXpsyUBUuhX6JdnjaY",
  "key6": "3vKG5UtdT3TxUzFMneQKKZtCkmPEZeedGRj1L22XyLMiVQbGWfXBi6phMcP95LSuuWGukwwrB3DbbtpF2gWKkZ89",
  "key7": "4rXvuBGnm2PUaqtTmCzfDSmjwgTExPXY5wytNXM5A5paVHK1ePrN3oQS7VFyUn2FVB8dvvezEW9mpbjcAR7dTqkk",
  "key8": "451vdEKcAgD1zimr32gaiE5rB6HGrH3bWCsPDz4z8MRrh9rE5pRjJZre2EzK6kkNpmdzYs8oUqVHvtoevUXPefQn",
  "key9": "4rB519eNHQmAJVVr3VcodK1414NAzwbvx4tzCLW5paS8BHccHC9Rr4ZknM2JjXKhMe3WJrBMMpBnTSVcnWCNZ7b",
  "key10": "2kiacVs4LQGnyiskfC4cSN1s1nAWivdUvfc8BRzucRo7Qj1t38f2vwCFRWogb51vdCnYhQw9xf9JjLLdsxCCJtPo",
  "key11": "48Yf1bKJytvr9tGirVyc6CM9Pb17FqL8HLa1Gcksws5E7ZRYRykydLUJheLi9pb1UDJJASHCYAbmySitXV4E6bn",
  "key12": "3dmBfudWVgLy5G8YBmAbwU6f8upxZe5a9ffv6tkUScGrZ1bcWKvrf23vy9veNQxEsyEXqjpm1njWPusRsaN95xfC",
  "key13": "2RpBUdKLrZSyAbDsADCGNTn4oBuTD6sQhYtC9VU6iNwycEhob7ufN4AYfsqyYafkmLTMJPadpEzR33WWZSFdqiQW",
  "key14": "2Kr9bcPd2D3i8kuZ2qz7WrTWRyhhGroxuKJF9LBw33TeyUfXzZYBrYHktTJqSA3dELzJnPHHAKvnKRgyMXbxkAGP",
  "key15": "5S4tcKk169S3yjDUnr2bd7iyZ59ijHPrEQWd3smAj8ocpNYsjBybUiRhHM7YWA5vcroF9ofNBASabq3dwpS7AKZU",
  "key16": "3jxWNjt1jXzjCMbsTQrDLmniEp5TbNzRcdv1NmYWJzeEo5eAP4qmMtqh8ctM8yRSRvsCK7AwiRFh9nHgoLyqoDCT",
  "key17": "5vurF3p8VRSTdzcxtNSSip2NsxHCmfUzZmSLaXADsKSAPUKZBAcj4r8jzHVLSjEucHbWQcrUMLVwPRyAq2z4zT8D",
  "key18": "61yoQmZVVNmMYvPEcsDSuk13TehGhqgf7YEDD8txi27KXKAkRdoZDYdkf8umjvh7Yt4UAP6iW2f4gdw2QoncpfVY",
  "key19": "PigpqUWsVFBySak4jj8WdxA7oVHboT67NjERhqWE1AG2fXxNucVKpgNAcsqMFFsfABr4eM7RA8H4cSyUspqXrhF",
  "key20": "5caJ7LtgNSiL37RCqbWSArgLBgqrckWWuJ1uGD239MudjngyEQnTpkRwwoNwtj8vNkFnSNkBFzXy6PLqyTaz9Nqc",
  "key21": "2JSGgAnHJnhTzJbKbVkyEzi4FrhhrcpxqK5WCrt6LCQngejCSfXQqC1gNQQ3TqtoALUFSUdNCrZ5yyPTMy598vuh",
  "key22": "61D64WiEZ6nrtBe5NBkhFEPkproQV6zYyDe1QjvPzNyrxUa9mtNGL4a8WFnR9cHCoNtEMbmJ7u2gZN1nPw3ewxnw",
  "key23": "3Sc4QrKpJqn2fipUyapYMorrKPX7yod69joo3jNJhf8ZyND54uhpiQhUiFoEZo8Gnn1yrviPpPccKeKihU842cVu",
  "key24": "4zHGP2vToUN7Ue82pC6dSye4EyACVL2w2Bv2cYHJj3nbxkzWRHNhd2FoFKzh8UAuQiETNGntQNqbbkE5PkBZWR4D",
  "key25": "3gUyvNng6d8k5uL4m6gMFzx1ABBjvppuMAem4utUoJV7rNqYBF8CMhG1D4nCCF7T8yYJEHUoUu6tXw5KkZymjmLH",
  "key26": "9YM8wg8CKrjJqVko7d39hdD5JrWHnjV7VUJJMpZiT5qpnz1FtV2oYonUedeVKX9EcDRdMmwjUtF5JvFdKN8LkcQ",
  "key27": "43vtgjHUAqxT6zHbZoKhWCMXXfKJTKmPScHTAky1Kyq1KGJbyoQ6qJDcVGup1f1duXfXkuLnqrbXySJLhwabgLhv",
  "key28": "4DjtXGt1tYyJuq2AvZ9T3hMZU59rKBd2Wf5omhQuSYEiKuDd8usi1uXf1QRe9LTGodrwEPrD2uH8VHhEYuoGSvzd",
  "key29": "3jaPEoDCH2Y1Kfrs5fh2QQp3pjbbCSUrxzCwBwW29BUj4LDj2536Lw1wuFaaqoraG4AX2BShKkTL8SrG8MHihBYz",
  "key30": "dWETg3c34esoQNqpjbicWttF2ouz4v6Y9sSySzjajA8Wk2TbjYguwBaNF5ZfCQXSpB44mr7K42J9iysKtzZfGJf",
  "key31": "22f6s9Bc2TFBGqLko7bWRo77fRAGzFWUWcSRSmEvTuBP89rkQaj9onfXVJjqymgTvBr11oFZAy3EytDRi6bTVegS",
  "key32": "2WN5k75HDTgGrZQaR4wYEBabrJNskCxmVxQDtwji8kf48YJfpFJBRMbw1BKRBcfB4AQuK8VJ8u5gZ6agqTBSkUQz",
  "key33": "2m4D2oW5LohMaqDNWn3e4oXz1UjU1HsMWqRFzM96hPY8Q9eK68Y9ECRpMFApZLSVzBUXMvCnmFYoDSNpyzQvytff",
  "key34": "3AdZtVguhHYU4PRKA5T6kbC9QRahqycgEECVw37xQ2rEuyfCaEWkJPeCRLisDHpZKyiuWnpssqFSmpKbXr2HCyvV",
  "key35": "65mFp6iTMrNGM6mFhbjVpGC9Vtxt1oxrhMdSWPjjgzXCx9sG7i1byknsqiYHAGTArTyCHwRWYsJwUyPwhr55uUkC",
  "key36": "gfHGxMs3iuxEu5jUWDXU2EyUwuKwkYRu99K2MPyVMzkgYgLv6TVi3zHJPmbbaDMTRApL8nZULQTTpmjW42maaLU",
  "key37": "3uCeF49kT3ZDKtCCY6e35vNRSQNKsjgP4V8F7A1iWCyAZTJbbeYDdscRXkBpeWA6oe9bHPAdnhLekp7z7iHvZcDU"
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
