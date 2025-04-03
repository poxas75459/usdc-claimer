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
    "2q7thgbq3v1UVt6d3KNT8jhp1DsLvRy5dBFoYNVUsjcKAfhm4Zzb8QitCw4AAGWAvZCHEamqmkMasDkTW7S5SG83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bs2Mf7eSPfeHC3D8WiSpoMvxkwWR5nnnSeex8bg7SLtwV16SrgL3Qn86KFtiRub9iutTs8FQYEhiWZXFgQovV7h",
  "key1": "4Yf1FW8ycDv3Zw6hy6xboS1QGC5mrCa3gBAmhbo6kZiY7Ca8tRjLNi3xjcdRuFQBeMYGEALmZPsgWzMMYrpB9cjH",
  "key2": "3HaQ6RgWcwxq36UvE72gd5YcuFfFzkmrCaE7vxMfLshcXui6jGWLiTTTvxAGgkpbkc48vFBswmgLuaMWJ3NoCLtQ",
  "key3": "zEk3STC3w2shqnJAuJubRXxXA6RMyTkyJnifu7FryzgreS51fHeqbEeZbJqFcRaYedC7qSjT3gtHt3BqjqZujdM",
  "key4": "4oxiH3EXyAuGWc544Qr1AKoh8uQZtW6G5haasFYpQnRPrNrcvoFhGXTLbMsPguSFYGy3j4cU4YNSnRiiozmGs2fE",
  "key5": "thQzL5PejCrTxDr8jsnPeq1RD7C8r6tFoEDDJSn3LGtW6ua3DQsvPHKo4JD9PZde2HndVuHvFUmqjsD7hLXnJ8D",
  "key6": "cveQsWVH4mtUXqVbMmpPWYeQtExVc1KppHcRjeRGjEtzdmBsFiiFTScVVNkhF3MBbmu2Pk9NXaZZVVdibJ4BXmg",
  "key7": "3NwY4KfMyou5hyRD7z231DHoUaPN9i93MJaYgRxTpgmtRvEmUft6kqqM6QTwUovxG9HBHtTBepUiWiGtDCZjnRwq",
  "key8": "3c8MD7K23vRrNcxKotEwjK7i8QXhRBFGd22XAMB9eujVv7EAiSFx6gwweYrRnqkdGyq4eD3Gn7X6hpjU53PmtY3i",
  "key9": "3eTp8DHbbmnb21bP2mBPfuZe5wBFZPDJW6B9KuiHRwAEZJEdQY5uMk6FCFfeoGas8bgqyXHisy3Yi9BTThdGQ1DR",
  "key10": "5J1Qwagv71GFMnrDjYfN7wsC79C7DavNMDkLpZbPkVcgSDqbthUE4aLrTEk7hQ2NYCDtQHcnpKyUj6FaNJfHBeDe",
  "key11": "22q2jYADZoKeG9MwEPjVfTBmcjdwit4qm4jyJrHBHsA1JUiDJ5rJU3tTLJfDSqN6VFCJTUzLdhyCJ13wf2jfbwBE",
  "key12": "2mdsmv7oDFsafHxHktakd3WwNRVcsnWcrtTe7dBz7qh5yPnJSq9JC2ZKimhoMfDCkiieEs9BexivZoH3LH3U56jr",
  "key13": "2vDaKHNQx3KSv9s9okhtjBcSq3bvLow6aPj1fFWy5u7UojXioYPhMe1CXv7NU5hFzPE1312uvyuY12E6N3Wq9Tad",
  "key14": "4ZBg8y8W2K1t6NrJaVkLgNDY7t7aqa1pgZFyH62EvHDVziT6D81PBJEBvT6Em3st4KnN1wkshBjovGQEvdBhbxZ3",
  "key15": "eGeYSL2dHyrS9sdoP2ScoE1Yrx1s78cHf35PXigosK8c8nTRjKxE25oBGFMQvuC6mh7V76CaT25YFv9gWyc3di3",
  "key16": "r7npHEBPxJAoKamAQ2HEZgCf1CLGTExHr3Q2uc7Nsk4WepRgGtzHVKUdzTJYHzRwX6xAazegx9q7wLfKw3U7SUv",
  "key17": "28TxrieC8QKTDGorAwmUUQ1ayyRPDao8qEVYAWVwjFz44NNJExFiB1LwKaf4jVziZdwA6CLnyU72oVp7J1qCJVHX",
  "key18": "2g72pyxwZ64VAWG7qkQxmqDEtBy27E9HDcHArNSJLMfqwJ7bhrRzq2nqhw8Wj3qA334WSdmrht4vjmWHn6xC2W4R",
  "key19": "2gZa3kyzs5wHc5UijvDt2FXEtuefhKA78dbjrtoMevJFeh81uby1QnUBVhMZsMXmwrJ1SJNTNiDuRhAmjNbZe2Xn",
  "key20": "3AZwD7pn3yxjaLELbCa5TbVfsDQYmWcykZ8Bzj9VXeuGyJM8mTL32eeGfxF12DnBasRoXowya34TA7fNWg4ZkMwT",
  "key21": "4AgzW8o6fT5n1q6kuz2dBA4JL4f3WBszmAKhfcjvNUhVHQV4yzdTVC8BHAcTNUPgDo6yTmhxw7RTyrRbnFTXuApc",
  "key22": "fxjURCzLz9dD9YJJcggjZdowiXRQYiRSy9xb1QpHSti5hTM2KRypYybmXVoyvzZKqXcJxnNDhD1cMJmq2SRNfQa",
  "key23": "3U2KLX2k5UwSgzxpCk11xYnjG8s7FUMAYS8qtSYcPM3gKWo6SFLpNWQz5q2YV1qZwnEsfRUeQEQGmwhtcYE7kuBN",
  "key24": "4CG2dem1E741Se324rdwELnWw9RNob6axxE99RKbg4SFabKZn9nETyXbHKrhHooGJjbfAbeSfS1TAKm5NbVtkimC",
  "key25": "67QF8Y1q932myxDD6VxCZSpnWPt5PxKjqQ6UZY9TWEQ3au8yc75z7wLqd2A7Cz5iBUxJDb7AQKhgBr9kFjiH4AJ1",
  "key26": "ZhyFJ4cPVPVw7MQejfkfFDpgAeXnBW7GbJPXyNrfehiGnfLPjX8q5MYdteFMVN6VMZaTkBUT3B63BdNbpH6MhBR",
  "key27": "qZBVsWgox1FC7oRZ5woWQ2YouMG5z7PUhh2Mtyg29vVm3N31DHwnL7ajVhcU48QzYQvFCqJBHi7K7BVyE9wctSs",
  "key28": "YB8APRS1RYY66hZXtUmZ4pLCk5BfPHUDUnez3M5kVVLws14zyQJe9kFs6Qutp1D4wVXpx4MqT8EmFZqMUvKLUzD",
  "key29": "3S21Kkt7UpErtXS5GYSF4hakxdWskxvCFFYdoZmF3Cgki4hkTRPY9N3Lyeu768YcVeRLTJCc2dJVdy49XmBemDQU",
  "key30": "2EfSdWx32fA433uHou1esceXJMBQbtxyCoTKUPv9CzjxxsYQQHeT9A5y5MF5uRLc9WVqkUxHvMUvaeoA87fyB4FZ",
  "key31": "3FGK27qvs6mwimSeuBcxPtJcjH7nPxbDqKmQiGdMTyLNr4f15CipmgNzBzxWEsBVynxXxThBpNffLpKcq4CVQ8QD",
  "key32": "FJjBSqrN3AAZKJDX2zBXAktgBVCBh59qAurkLWVX61f6zjcfsFApnBQsVezJYnDCQeevWn2MhtEGFjcjm6dq1xJ",
  "key33": "5tPmyRqg1SVhmj3C8Jxoi5fm8mm4U6SLDPNx2SPuAfWYW5HU5yhuhwxUmhseqVyTM2SXzY3JQYf5hGoJ9of8swnZ",
  "key34": "5jh45txpEPdoQE2fmvdebAGdai34sDy653GUW6uLAquv5dgw4qJ1GEYSWetcapTGWmDDvuVkEb4MaUx8GG7AaP6q",
  "key35": "43w79oEGc3TpZzxk5SPDnJVZW9j3NNidSweuYu4bQUgrXP8RQG4ixtaN5DfXeReKQzcaB1njUT7ZKVix4kdKubZP",
  "key36": "64cKM9qw6kwd7WYKketNCerPEy14B3AgMpQqKbutUqmb9choVs8zxpnZLsjzJs4JRjonAm3K89MbF9ayowspKQ9C",
  "key37": "Kkc5STLy8Remibs4MgByg8fpjh6yNyNMpBSroGEsMgUcpLh4kJRg2xNVBQAFS9joUqyvmLrnWQLtTWbecrQhEPW",
  "key38": "4dWQXdLJVLZsXbjiazsXn2EoARAqC5pFRJw5dqhiEvBwnQzSkj1s8ttw9AdcivRhb3SQAdrGAnmBmd8zgQbzAUry",
  "key39": "4Ku8HAErNzyVXPDGKGEwTgZNZLS6e45vfFtysoVCGqBGyRyaBr9ux4poSv4BwE29d9xqxN9iNUnnf7f7gs5bjVPY",
  "key40": "2xuVk5QMUmK4vrFyBQGqMbGdn8VgEJYE56aELGhVMKcc6aDwc4g2gZvMZGPQZMpofurvTyJkJUeyz57hBVjBJDzF",
  "key41": "3cVg2iqFTufTLPp41NPNnZ7QcASRSiH1gmAqh64NEQLkJaR7ARh3BAMb621KzuwAxW7D33cK8AUfHGpjErP8BDyW"
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
