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
    "5BzwfN2UGD5X6jMUeY86kVgizYnfaUAgnRRduwRRS815MMU4VRf4od3vmSKcTEUfQoDWmUmUGK4zePEUXXmK2dcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8PJptrYkgyhHN5cgXWSQDUUqjYbG25LsD3km3ne6nHjmVUsfWBHvadMmG8sZJS57Rc6DURvasprPfm7xPDmkzho",
  "key1": "4G8zUn2acxbzyL4eRBhK95EJS5JrnP29spQHaPkNneqqMwcdsi9ArmeySziCP6NtaGZpAifSnJNc7kAa9gJ4za3s",
  "key2": "sK7oUiNrENQznmVoxkBmYxq7VYDck9Tw6mEvHtG7ZW3EtEAYoXDJBqFgru4QeBGyhv789HSbX4KJQq6q6BxSjS5",
  "key3": "4C5U36nNFehTRN6yQ2f9fbnp6fHhJwNFB9iSuCVxS6uC9X98BwyomB5SEYZZjMrqmrUvXzQck5GzmdTgAU96FMeQ",
  "key4": "2zQ4uvzR6ifUyrspP9PnULqcBPYBjhq1oyPNCoBugDDsJSvacwF3Tqr7J5Ts4pqZ3mAHoyG5anqVMs3cP8jPngPj",
  "key5": "66xzbciuV7TWX48PvM3og8ivr71ghKC5ggxJf3567Peavi2g44SHPYfK3aEMRPQTRk1PYeD1xV1LF2kMQmiTpq9n",
  "key6": "3HcP9FGUQ6oCi8mD27WRXBZSy4Uhhbc2PW9DW5QaJL7jrjS22KYE6m8PTQsExXbZ1k112cTwjBuCUH5wUcxH1E8B",
  "key7": "3FSMdyASBfNcPbgbM962djsEHfzM3rftCBpvK3LByQRrYNS6WBBz9Naf6anGhrMrE5nQrrN1dcrPPzZp3Qaqs1aH",
  "key8": "3sEyLPsrFzkLMKGP4LKbhJbGSeDUaVXGJhh5ZorhDdLHN2hf1vxnDpHbteZnyFwJAJXTkHbKwvssQS6NDooVuLf",
  "key9": "2E5FEbuVK2XchgCHEUF76dFQEWxXS78D1ghGhRPBnfRqsQt7HufRuwC5RFTfKNrAQLWyP4KGZT8ki6KuM3QkoTZS",
  "key10": "3y3MZaGqgY5JUhhh2LJEAW5dp4exJ1cBaECm8mMiGFtCoH3PLMhvxyn6u19iuGcuNKyWDSWP4kqLG9rPXqz2kY7s",
  "key11": "27kvLViDKqMjuRd2VgNHBfT1c4k1PbJ4omcNGLKDWbC7FZYnxRaYbCHmH2GeyaSmbTcis6F7uBSZRbcKc5cdbKBs",
  "key12": "3pgNorqKP747eR2U6pur7UTzgBHXCGPxLkkXp6hVsxThzyavbcmLA4gdAkihMnVR42KyXj5pEbB7g4QqoiMESxGz",
  "key13": "3Fbpxsiw2U7eYTthAf86Gt43Wgpyv6waTA2cJoroXAiS766xWDec3uoM4ZJwAUAMAXDDkEYVek7LnYqf4Rv11msW",
  "key14": "HCZ6nhWoErALoAxFgEJxV2ECDsU42T2D4MCPi7mYgxPFWBfgnibfYsp8RhhBUJinNSKUyu8gyz4w89J8kd1LVBu",
  "key15": "5BYHhLnsbqE7cKh9zq3ZanWHFWeKHNenyRniMHCJNnaCaMDmqGjgSfaCqmse62EMxHWQjKag8eVYSfX3EJvXXJN7",
  "key16": "3SihUUNp5M6napb8vVpa4CADZxATsY3Emx9DZQAB8Nzgz3A4VJmWPpNBvNvCe1ye1mbHrJxnQaMRA6H3UquWeLzk",
  "key17": "BMewotA9oohHyp8NH657YiTVeaERWVFhskJKSJmY4WgvLV47uZuyvdYqAG3UVwAMGXEDcvKxiFmaJVupjWRvNqM",
  "key18": "34A8WMtWb4morbUWdyJnvVA3bjUrKoyqgfWA9zLWDGapJRxePmpvATn3HfdZ53s2U56Ep1KbMFxTwSN3WzA82bbU",
  "key19": "22GoLMojiRXD1AgPfq61caLof6YhoHcP8xP4En7uz6g5apkjf1AfM1x2E3yP893RiLicdcyfQDSPg5W4bSMdb5UP",
  "key20": "4kQXxskLCSwN8C2AXupA7FMbr9kjF87vdrmgEEuRPfGXAAV3mgXfmPnwmRg5RRkX5uuy3vEw66gNgVtUxFarcXP9",
  "key21": "5eUF8DiB59CaAbgTPVkVifiZdTga14sWRpwzgyhmgFJmxRshjTzB47vFziqA56Vm4sUthgpE4ZFrKxPZFEsLBNRT",
  "key22": "3r24ZhXTuW4mwFCcKPDTtktbyvQntsffwPna1EMNQh5ppXd5h8AQ585pvy4aNb5y8TAcJjQKRDe9ySp1hLXKsw5o",
  "key23": "3iG32JZB19WRuhSwf3TNnjFCW25q6ZfSue7pL4fjLg4fQU5XkfgHZybsrW7u76i5KCyYWfmCCcwiS2Mbu2NXFbZT",
  "key24": "2rXDcjx3WrPknYu8a4CB1hUuxdh8HPi99b3tnVJkvypLBZhpfsYiGnGffSmmLSEUtexzibP7VoqUP3q4hsC6RbCL",
  "key25": "42oYEBMYqzTBsKxek5jfeZztrZ87oLxu3uad5JHcPeHNhWCBmYCSQQjUAX3qXh4hVpsSPf53Hra4Eu7VjGrNxuH3",
  "key26": "xeQFJK78yidt1Rsg9DXP2BvPggMFaHvFzv2uEaLqrdUfPuv4ybRFg1PkLzWXTetU6MUzByVgdEk9u9JWxK4ERK8",
  "key27": "2MMiurpwcK9RZooKggiK1HwpU65NqcHsLGJ2cKwtUWpiQEBozeFoiqoLLnu7PcBmYzdK5wLtfJzj8kWuQ8fmPYhL",
  "key28": "3bhSXhkG523zbF8akdXuGa8T6KPEvBGai5Vp3HbNyYy5J4fJXCh254g3znctHwu2iq619yURtDQFDDri9q8vjR6Y",
  "key29": "5pwVKiyp1rncsZYAJ6vv5t66J1i4xijYJ8zuQB4nm8JM4BG4nykQeS39ieQ1aMerWEFk75ayWCFURDd31ReH7rV6",
  "key30": "3WW9J4a5p26yMRke3BUndNw7jKVMY9w1PcKstYK8kfz2wykZkZejTRtCyBi5nswgNJ6yhCCWNUx1K7FqoRfDG5oo",
  "key31": "5QqaZozBYSt7a83jKsyD2fD2JXv5N2evNLMCTj2UE4xPh4Rmy2t1jVK8JobkZBxwxXAa4q5fjArQ94tQC1UicZDN",
  "key32": "2EUwBfjUnhMxWQjL9LMsztmN9YRcSaSmNGinZBWBgZ68KTf76tNWmqUTxdYkTiZZPK4PUm7w6BzWCkWd5R6Ap1E9",
  "key33": "3sruJLjaj8JmnB2iv1x1kZHEpnhuYZDdXSJhTwS8E5jF8i1NafMeEmxXf6yT9cLfj38C9p37vsrLR3nJanjK3uoE",
  "key34": "2GfNxetsi2pSeU9WNAnHNdotZ6HsN82s1WJweDDApJJgQ9toqgqfXJ8jpBwge8G6xWt747xsKXAeWHHLdnBPv7T7",
  "key35": "3taojBrSftFQtRUpTo7LYtoc1WFf5A9uQnLQawAWdWpSHW7QS3nPZNjSbmhv3VxFEc8LyZuXYCkH6cFZRgEhv9dp",
  "key36": "2MB9JRmhv5c7qWnKWSVS5xh1F1obtUCYXaBaD5zcj7TQLWgVBkksWjNWJHWJeK8PVDcMdzguS66rSETCy3ZAwB6A",
  "key37": "2hcfjQLF4y5KFvdz6EkTQh2CB95gDRfLhod1oytTrzqd1qh3oXqS5mbdNwADCjNVgvGqVucX6WZEhuDEYykLqLpM",
  "key38": "pqthSsDnuRc419FbCUerySAuJQzu53zpmwH8zatKpneWqNNxSe39K5efN6vZbkBsDmNTT6qVdw78f2VSuML77eh",
  "key39": "PhNBUpFsnjg6skbpjnht3feeMjLbUzHcgohLiUwRCJG3LQw8G3yE15TqpAmu9163CQve16ukFx114CzakzbSiWM",
  "key40": "Gbtb4XW9BxycLUtcmA9aR6iLwqKbeFtnznWEbUrSyc2N5yS8ndeYAejR2T2WyTgRhMx33jBesBv5DzWNSAhB53v",
  "key41": "2RJihaErhKBux2xCybwWTEXUMFk7K9dzKyJLHBSZUd4G721qEfPL2qYkKDybP2xkNqmKdWJMssQkUT8xZTVWmX5i",
  "key42": "7oqDBQcy4QEaYFcetPzci9rQ5V4da1QQjyfPoobA76nnzwYgzBGzxbuEBeRCxPqpAjQHvVbeZtm2BZy7hN3a3s8",
  "key43": "2vGm5KE3fa8zs7UrTVQQfC7YPNebTd2GxYt2vyJtpoj2tpfzioZZGTKcc2XaCNJg7jVhMnGjAmGVQW84DBNhfKwx",
  "key44": "4nFic3GZ1BmChV6Z4XB4TV2jaCaDtTdWBDRqKgFdiCAhoexJrGc5DTQ7u43uHH8w5LV9dm72M9SU6vGfanbeeTB3",
  "key45": "4stvbSetnmgS9EBoEuoiLkXA6Hgqt9mD5vjr8q1NRzak654yNJmcCCpZAfmz6yHcdtj4R1duk2ao2fRsbFafAvmM"
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
