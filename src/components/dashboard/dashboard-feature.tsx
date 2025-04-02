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
    "gCSPE7XJ3uaRytX3ChWSXxw9Vq6fV3hTMoqvsC96TrQiaP5QiY3HNnLsqDcwN6ED5BPuQEraDvJcvAgCLxwY2Ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "568ekffjojDyznFCiCjTx5hNTBJAQtabxmJLtfE6LiHJuy4LqUoUjTuo76p2TUYnWPeL8ZAvkPf5Li93mmvBVFBe",
  "key1": "2vqe14pLxPuFp4asRUQyLsQgNnUypoMxL886oeeET8oja48Bow7UouStNK45iRS1qtTzcNyPo1HgM8MCTkk5Vkmf",
  "key2": "2HYBNxZnfyxCQYioaWds279MSrbowx8NEAy73ppUw9UPG4FkANnKeYzhAZafALvUrEmzR4GoSonLhuWFFzcyYNqk",
  "key3": "4GrcWsmNDbF8vbdgChUi4jwn6zFEe9HpLqeQfatbYWksHBUYdyDKJiUCHgeLQRrgdzXdHY9Sq1ZjqifA3SFRYxN7",
  "key4": "5sK63iJZHWqEfuyayKSRF9QMQDyQgzQ4jPkSwquCoWcpVk8v89cHWCoaypUNUHxbnoBzGyWegctTocddCCUrNDJu",
  "key5": "4KcHBmKWf56D2K8W8wiyVRmeQLnnYrkxG4v7qeVQTqog4irLjngHh7V7Nib59PMUSte5QQMP76UDRjdfGzrDEywu",
  "key6": "4mHZSt8hLJss7N3wSyEVoKUSNBrV2KP8RK5ekRqTdQv4Fb3BGW2umqwWNQA49VUbqnc7FcDuq3T76kezY9eiKJvU",
  "key7": "3dZcdVVXnZ1R7RcmQ7KCHVVBhQrnsLbD1pAot6fkdG8R4df2hm9KWkfepZUTvKGv4owfRQs4ETBGC9QaDz2psPKH",
  "key8": "3XWmwn1DbbAyJAFxnPWMS6smSXNayt9KkknJ3zpMNZdxJNhv7kac6jvjPwCTAjuAkGaLA55Pe7MU6ytM1pnBVJeE",
  "key9": "44nepebEr5szFkZmkA96DjBZAoPWV3QwnLkkHdmuXy7S51frfjT6uRDHMh4fxnefKe4cVGTiJjzc6tHoU65Vf6hF",
  "key10": "5mkuJKdNLgnMtKuHSt9Jiwh95iobvucvNjF2QP3L1N9R24vYDr2TkDdfuni4LvBjHLe8WtUHR5sFQ5UdmLCyvyp2",
  "key11": "yTJy3CLwJ6p42rWkTSg4fCc7AzcPVCrjms5YAEPXCTbLEMBxAExMN7C9vY3jyF3uAcAFGocmwxdcbzrrHTsWicK",
  "key12": "NzeV21MieV4BWeAwdbSnE5rMhkVSoDFe4fExSBjmngy7MHKEUtwkr1N4pZpuW1aZkQ11Edqcum1ECsmErTCUtHm",
  "key13": "49o9x1vUo9h8NYW12H1nQxMcqv6rvaA6chgHtFvgXSLv4dKAoTgXdk3mni1RyWBuZ5PqydGN6fNr6xaqWxZSXuuW",
  "key14": "5vSYpJAL1E9rFTDHfgrCvqWtzx3S8uBALAsTCaEJTULf8Gghs3Q1sTMVh89zd7hCwVSu1HN7qKE1JtDFNKM9NmA8",
  "key15": "36Cjuia5mnKUWzBPBpeFeK9kJ5LqUrhKYRoYXhqRDUM4Do3cM4TwKPEhZj8J45H5sB9PBSnZyBWeVGPvH342o9Uz",
  "key16": "3QNCDzrMsbfZMuaB9QBV16es7EuPEqgDsTrULHJZSmyVUzeCZjdAcmjAhv96ygGPQ7PZGZ6eQAMT8gTfy87TW7M9",
  "key17": "4ZyYi597oHCiyndR2vTA1fK7bYmX5Sdt2eEtWgpjpsBZ4jBnb9ZuE3pJ3qZtiNjDLvWuJ9d4NrGvihzYiVqapagx",
  "key18": "5zpNgwAFWVfnrFM1rhicmzAB5HM2RB6xzuNG9YyGtL2dtTpt9ZdFLp2QZbztPiqkrYrDzvy1mbm7K3wadp8K1AhD",
  "key19": "HVJquWPE229GjrdqSk4pvxxnMyyYYHK2nT9RXpTrK2LN4wGNcpS9TFsYEYYkpABx183wwft2AYefZgv7UvAA3gK",
  "key20": "3zz62fyZGFXfMu8vYi72yhTuWctWwSWjwFCLc8LtZ3dtP8icXxryqnPQRmBqKPzoxU19UsrDvgd7YCQDo1dxBYwt",
  "key21": "4owvo8aD5x1DpYm4Fy5Lx7MEzF1kymEqwDhnJ6NcgC3kdFXqy2Fz9sFVkAMeY6vnK4DTTWgumyYVjVXxJsBSuJSa",
  "key22": "PbAwJC3ZGBZv9KuFBsR3KJ9TmLNr2VcpA3hsamRkSqkTzt7pThszu8uLqaJWwRqfpVcjGSkRTtT4cRFz71eZS5Z",
  "key23": "4oe7bxTg3PjiGXvpb3jAB5cauJKbtQC5UxygwYqi5HU2xQ1HYhsJuQPNZEi5aKg9AHYqh8bNj6XD69jvHspfqXqS",
  "key24": "4HkobCQoTVCeHm47ehTxxnS2VjbGMAdV71FR4EiojM2qXSEhDCo5i7ZNBRuorReajpopbTticLPZ9GidP5YcCs1s",
  "key25": "5FH9fTfW3ycpgqbhFRHyn6fgk4zrptg65UxQtzQwCP3m7dFUxxXaRUmKkLCsk8Z157uBKoMjPgFE8KJGbDK7yoVX",
  "key26": "5pNfCa62LUnYtxCPkgRXkRGe6B9M3fcjWPwoPtvXys1b2cG5N2FiTVhBeqa1NwQRT47BAthQSZyGGjGgTjsL6rf2",
  "key27": "5eXrp9hJkr2hSBQhdXjcHikhhhrRrWcFxDUKBTYZRdZpTostNRqpyy8NMzmahurCrMKF3iC2z8v9h3HuJX3wLi71",
  "key28": "2Aodr94mmugnUhEni7XphSwKGYejhYDZkgufYQDK7yCe1GbqCaph5LFdSPJWvoLLnnuVyXGbibyo73j5xuJ1eTxC",
  "key29": "4FgzqgJYwQTQRzuRh4TRuhUZ91QFQAGc3Eu4AFaQ8gUfZgoHcZymaD8YzgPAgjVTJPX8B7tTSXLCzbLSeUx1XgWC",
  "key30": "3QhwuioS2ev8CequQqnQZvaSqoSY6WZvG1ph7SWXcHpGTRXJe2S1EPSPc1P1Zdo3FY715HLKL4VNAdYPj9ZunsCC",
  "key31": "2vmd8cU6P2DPQ53dj1P9XDMt4VdEEps8azAQ3Wd2FVRGM6xjZ6NGaa673mViY5BWc7LrGAHtd297s6jLyAnGJ6Vk",
  "key32": "5n3gasVewEShVRTHEJZLttL67jpwWNHY37VWUK5AimNoYzpTxcczkbw76pbXR3dRmg9mVmH6hyMaE5suY8vdGX9A",
  "key33": "4LEb6j6D6HQBbPMNFWEQvXnEqadT45ymRtzZ49M5pKrViKyF6qn2Soxzr9FjYNuR2wmMyoy47Yu4VVpTM32Dgk8v",
  "key34": "2NDqSocPwLq4itY52XSgbWLqUpmTA8aarQkTW2L7GT4SRZbxDu5jGVyZcRDA81f8KNG9kBhog1uKxSktALJMHif8",
  "key35": "2ABtZ5S7podLf5nLyfNafxyNrzRqa8WUyGhTG36JUmHHbhsHUeGBPerKZdRSLLSuPsb6QCgYh6KVp98XL8gu4ch9",
  "key36": "5r7wb1dFWahNGpxGUkDyx8pMFePkaxSkpobh5DadgXcL5tqVbzitkKyGSAydNz2XKpWXbkFnfF6chtBB26WJr8NU",
  "key37": "geMgudxTroiqfnMFPUPSfw3ybBDQ4xmo47BjnChnfzwZFXyoTMFhVZb2GkjPPA4hPrqQxJf8wk7a3euNKTPXFpv",
  "key38": "35sW5BACn6dL1qnXjwjWXukwhAym5duBdhUFGk5JPH4RUH7zoRMeeKXyyQECaiFUSdP9FuAMQLWgaTwRCzQNZT5h",
  "key39": "53PFeudNHg9iT9GUw7CXhedyPrGaLSiibyYcS57uiF4teNWkmgu1XBFS6Ac5RT5BaJURs6vDbUjSFgFLKY8gPq5K"
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
