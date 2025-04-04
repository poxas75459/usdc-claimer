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
    "44PnhmmpBHzbzukDTcMMrPuY1YaVERj57CNJULGwLZDgYtB42m3osifzD4McMEDCQ7EfByE3f5DgKbVJ3Q1iSRD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZLAEm8ME7oFKS8NAT2ym7kcLTuBmm3weP3QcdkZWLMKsPo2ZiCMrRMRuEaeQgu3y1WUkWGS2dZJD7u4BDhHo6rT",
  "key1": "3pZG86PhrATY2Sifn9YsaasDmeM39JpCwdcJLfU25oCXCssjeaB24xsEYdJMTjnqq8KC5jP13ajh1NcFNpS5uC3w",
  "key2": "2sYCFZ3XGTDX28E7kupiySnpzv87WQJfefcPRG28rNvcQgyDwh7LZyrqV2BzLqvhYuDTZHhk1BidbRA3tEvbnVq3",
  "key3": "ZAcbAAUT89h6YdFJY8gFKTUDQTPTsscD1JUk8gEKEtfMU8U4A5fVsQ11TrZEfEv4D7aSrdDcDi65EbNNxR7J4FQ",
  "key4": "2xUf5wZWg1NNa86QFjJpYEFJhbiZ7ihYGhy1brDtqPtN1oLLv6nffzyzXqDCBrpQwR2NhBcAr2dKmiVL115LWzLE",
  "key5": "2NhqZRPSoGbEcLxNSeBJ2Xp7Y7Lp7FjWU1ARxUUdTaPzbCSCnFpHQXuumBRKSmxkhy6Et9TZe5Uu4hoCati4JGdq",
  "key6": "4FLpJMz62E72Xj8yukQ8k5cgnjXivxfgNtEcFAFZg1J7uxVGQ1S5DJiDr7eHuEwYexmbQNEfYgp7aMypvGsM9wo2",
  "key7": "4CdXRp1Y4S5QsiGiHsnJbLH1Ga3pYQQ57ahtJpCrX4sp42aNP6RvHJ3WU9Ra2PTLHRo2CHer8CqXUxqcBkBTWvu",
  "key8": "SPQCPnvKioNRAPPV3QVtjD5ks2hAtjrziS2XzeEJmzKf9w2gaQSMg2pQnfeefDHDpiXkR2GBeQQJAYv6YV3nx6M",
  "key9": "24GSkm4keRCLewnCf1DHmApCaEtjBD9oPqrL5AVyxk95581bf9nPnmMjSJb88tW2fNey3aDevbadqSy29vbwRndQ",
  "key10": "3BXNqLzxdtXZ6xJMCY9gNncjBvRpfd5pmGoVzPMT7NmK5YVxHyUtGa7fU6ueReqcD97JoEdaTYgSMK56cXbuJPba",
  "key11": "2GzSPjiVxaqSo5EU43JYvh1oE3F8tbNybcGx46qfJDm2Ye9tXXefsMBetKXP77WWk8UWGGKmE3cEQi4hJSSRPt6A",
  "key12": "4e8rBQF9teXMmosRfEJoGtAJaJQms8RdPXE3fWgQ8LWwUuSTeAHNKtWZ7Ye7rtL7CWzbqkGy71A5dD64MZYbqKVR",
  "key13": "49t73Ybo4E2tSg57rNzdhGgftWZTaArN5o3ndAic92LuYBJCTijCwRkvtLYksBS1Ecmna7k1b5vYijpNuy3dCpmq",
  "key14": "4zYs6w6tu1gvpnfhbZKAs93GAu7dUkix3U9EjG6XSsazxVJjXATBj6YXqqiGeSB5U2nh6osSQF1uF2Cws5fxgBZH",
  "key15": "51GxW2dhxvd9JgtZG9TJdWRLXbAUFS3UjewSS5SxSqMZisMfJJARFWdkb2GEsuoHwKmfcAAqhXwUUPUi9DhCtJFS",
  "key16": "37rmsdo86CtoZvuWtMmAos4qDCcrZjMDQ6jTwkUfLkgDwgbCgubs78Lr86UthtAZ3vNwxHRyGQiDUmtxSExaG23y",
  "key17": "2Tn3YPhoksLWoyBwkZ1EbDXztyq8n6g7hBoXqb5izAkqu74rdtgbxhcT76pHD5NFeyx5D9YYhoKi4uWxYSd2uX6V",
  "key18": "mbnTrNkF3vFpZy9gCHzWv8HhTPSd7K1CNHZm2FYgy476Hmn2DZUqFALqnR8NGhnvftY8jcWkfM3q2ULTWxpTsw3",
  "key19": "5EyKsbsznxxwFYKZt7mKFRdMPgQJ289UDZByHF8uS8MMRLTa8DM85oXb3KZMruvwBqu2aDZJvhEDjXLfnT8y7rng",
  "key20": "2h6dAZ6eppKQ69BnFUrtTKL3fiaT8jbwH6MykzEt8uRTRv7BaBoAHf571bkgJYjZxhaW7dMP8uX889HH9fynjorf",
  "key21": "5yPWb2S38URrqjjJ3oEKBrAasx2U1Nyeg13Fz3YdVnSchNveX1qeGKk5HMuyMYP351KVvF9tQ64pKL54orRgpVgX",
  "key22": "AeXUpzUNay7fBLQqJw5eiD4WU4abRJGMk8rzieu3xtjk81xJ4peX6ozg5xpqBoLKv5To3NLVfqnCfu5tugduJHf",
  "key23": "4w28ioSvswoWGusX2g8SqS6rayEfZ8dMFc7pJpds2WkESALxeK431BjvXbVaGvqLPXBJnmrmrLyvA4SZtLUQ7P6u",
  "key24": "5cCCHepbp6RcvjDH4RDvqedKnixcySJKVbGUxeavsuTgauFUzASRZTcpj8HbfaW58vwhKTk9Mi97V375sVegP6PR",
  "key25": "51TVrrPwjc5q4gYFBwMK1KRxd4PtuVkJ7zoJYvKr4JwnxaVvcef5xr9cJnPFajeWt7NGz3ivCjg8XPEBKnPTGvnT",
  "key26": "5PtXejVHRdL77r9ZyiYj3kQPPXPwX5B5V36JCzhFATeCgCETReEv8EuB58oj1ZCW2sTiDvLXptnhHe3kkpVAmTU1",
  "key27": "3bnakAx9kr23J9i6QCNz6idpgeyRRYQKSQgHXjjbJfDViQcj5zxAyKhnSykZu6UmgxdyrjPdRgbF4UCby7XLPKD8",
  "key28": "4X5hYZrgNkgbMFi7HsZWAxCHaqfceYfJjmVEUu8ANr2vcNTNh7da7DtLATvN5FPJ4jSY6iJpfmQidq8pB5MYRqcZ",
  "key29": "5eESLdL1YJcpeTtK6X8Fhiwvgfg7fPfTkwW8hD4ynv75nGHFhrxqdERxNw9F9ggPoxZPFYqoMgvdYDfySXjAVUhF",
  "key30": "WvRNvYAaTT4thXH3e6no7hUSvyK4xEanytafn7fUdkGoHh92DmMpVmuGUe8f9qAKHkG7Z1L8edfxc7T7RFPMy6C",
  "key31": "3GruKDUpkD8EzqcAtpbzDwQu15Dy7NnQgTaFbogGaP4BgfGGrTu9Zi5UozmdqXX383wGALUJMAmsnVToWuzV5NeY",
  "key32": "2jSKxRFWTbtE2QQcQsDzqwAYRktULLcbfstobqaLQUCPSGa2v1EkuHgPTKLbJpBiuRjV6LygYEQTmmc5Zf9Y4RAb",
  "key33": "4HcvrUUqjWyBrFhefS5rwCVWfYny96fe29tUjKothPDxXj4LCveD1SSXguKbz326Ka58rygxmP6P8NnBevgBDhAi",
  "key34": "5XP8JKYrLrt9byStzMy1tJ1ukiB5A7YEqoC1uHw6mH5DayDajLsv87KbKyfMeZ5gbxBFLD2Hj8yTP4dJFuR5FYv",
  "key35": "orZ9FR3ssh2QTuqsWVZW8vpR4mYSBvtdW5H1qfYw7DeSEPWyjkttT42nWxK2vYi4j1ZTknH5UUdJ5wWG4Pjjnij",
  "key36": "2uVXhsswQmBkSFUD3AHnaynN5XTLvTitY8BEUQV4zPS7K1zntHqjWrzwtTEnfmiXasSMsWQeHsVfzQmar7f1NXmD",
  "key37": "5neKHhqWXDpdc5dQCXDYbk4mSAZN88r9oqLYeuxzqboaCfP4fTZQ8UkvuhTPMp1FTrXWfzSreLeCboxmJHSR5bix",
  "key38": "2ePhcj7b629vwNqYHQPtmBYXaRVLAUFaEqyQdBA4FaYpcWpU4RRwVzeYreGuBJJQZiUVuWwd9x68J1a2L3EGvVQg",
  "key39": "3N7yPuKf6H9wMZuYiTx5am1x19JpEHJyBmQ8wWpmHGZqgstBRVwuftgMz3p75oAwY96B4xMiP5wukrWmK1F9eZwA",
  "key40": "2QyQj4yAmh4caSgPQ5nfVzBPhERdagib8rUsBRyYf7mV8iRnVo4pJRBM63YzesR9verYsMy58Nnn1Ha5EhK9t7N8",
  "key41": "4EQsFiwXe1QGVBb5Lrpf22WM2QJY7fKWd93wPDQbEjs3VQ7Z22bCRKCCxBkVB1VESBV1PbMYBgwPxDs5Bza1P4dB"
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
