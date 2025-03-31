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
    "4cme5Nbs6sCR1URgDafiptKxcVvUrvWqD5rsTbbmFWfj3nL86j4SSUiJohDeZZhEcSxuppcbMGPGdxvHrjw8mArj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TptPk9PeP2tTfHHCmHxGHWe4hMYRJbB8ENCsyctabDyoioGJtEngkqwzZbtL4iaNBCWErXwYWb1daVox71La1KK",
  "key1": "2GchW7NWPm2Z2Cm9brRqC95YjwAtcuebsGAuBxebyp4Lkddf9z3oAvuaxGwJB9kzFkZeursHGkgu6anmPUTYD1Xt",
  "key2": "2uEGJFYDH8uF5ZPWXYy32YVUCtAM6RL1QzQZmcac5nkd8EWzMKBy4CMtC2cBCDwi3Ns68H9pDkgjr9n7ZE1Yf8Rs",
  "key3": "3szsA3y43HfuztpSgQ2jBQGxfiJDyeCk7ngFNH7f32Nao1XWqwu4tWWpztCyTAyELeQEb1astvbJMnF5wRYkukBa",
  "key4": "3wERcL9DH6dgQ4fkJrTGRX5mQLAw5aoYarf13cFiC56P9mDU592du95aT4ajdJMipLw8C9RT1YGxPzBs2J2nmH5u",
  "key5": "53FiYbp6Jniz95DPovBDmvvKaSgYmESCV6te6ufaqxM7MmD3czaCguGtmTCLtCo2SQcTUE1nist7Jb6BbpvGZ9NU",
  "key6": "4ifwXjV9DRib8RH9JL45DJivYRGcXvVijAbQcxqZQSYvGEstdRtm4afNMXjNzqNgmZMmr1S1sd7PrZ1Y5TuTuCtJ",
  "key7": "437hrGU46zHss3LSNvZ6DcymBHbHTPMtY9tPtAv9wNo7Tz6TeHuuZ8qd8dhRm1uZfFtsPrgfDj31aafadk6AVDUH",
  "key8": "5qYeoFTGEBxzHR5RFQ5P87FNLScHN2bAn2DkFpsqW2dMUS5GgcbXPHRoWE58WsrZAJGs93GJYrbUwPKgdybapnCd",
  "key9": "5T17BZuu3B2mpKsurnsT3u79MD4LvcRGEUbmrvuGjraGLBmeqosQo6Ta65CppmZajMuihNehBbLPUkthZsJh83Re",
  "key10": "58ZswKfeTETD8jqQUwzyTXgRuF52bEvsTx939JE5dDCcnF5SWj71BWeUMtCPJaJHvTouDUACp92PBpUxGZJeKNY9",
  "key11": "2AAe53aLMxKtSj9szzBDjJ3tsVSxzQZ4RXN2HGsueBYF3YhKo3FizZZCoLW61hnWngwajTvhq3o5eRhfomSXNvZR",
  "key12": "3XYMTBJByUJ5eD5uHdvKSyDikKCxL9ka8yfPWaxwVrQe2CUwgit2cjJwAiyeP5YbW2G5aanEHsoQnYRAJWiKL7QH",
  "key13": "4zoj7SocSzTT1BntX6fkxnwSsTJtoPWifMMPHktEmxG3yFUs6venLXSv9cgk7fJZE6efU454gcMb2AtghPFWBdPT",
  "key14": "4bu4QRDN4b12R42wLvWNjzL8dAAVpJHZpmAokjvhsKRjaoLWEfsMpzxkRr7cFBdAzD3qGmoUSBk5oUTfh4cYvDFJ",
  "key15": "55b9Wxcn8cQnwRUw9EQCpB3tMAvauQ3aYrstxoszx8Gkfbm7jz7a3YVDfy5f7BkBiYhbDvzLnktoFpK4dGaQfhM8",
  "key16": "5A7mx5itpBAGaX2j8sRx1q4Qh9R2FdbVkUMiWDX2iLuwoid4dLxrbyXYWV6Y2u6zNrALt1VVneYKqKDXmAmMWhp3",
  "key17": "5cj8t3SGidsxUVZY6HFNJY5iMNyzUjkunUCRx9STZtW6tBPWiqggQeh8XMDDuJcYk35hcsTFg26gpkHxgu44TkZK",
  "key18": "4EaztKnP1cHrKibUBpxbGzaMJruKeJBWwj2VoKDNqroxa3NMgME3wfFB5k7sn76UiefJxmQvEjNbFZiYT4PzLRf8",
  "key19": "4HASEHXeJnprsGdTxmwZ3SbTPgjWFfEo5DK7MNVdUkmTrnnTSG5ubby56xBBJe2qHmUdZk26dTniKjYBgS6kWbZj",
  "key20": "5VWTfq9L7sXpsQxiQeczGSdK8kkBV9DZ5wEtLP9UNr4JG2sc7JoVTE2G5KRamkpsyU9eF4hX22JrX63hmApHPFR9",
  "key21": "2dZTDA7fRZbikxwWeEDKbDq8TLTcWXQwZRJZaBbE1V8hZXh2B2MRCTUv9R6hTBMDg1GDHaVFKhjPR4aoMKMmhyN6",
  "key22": "29W9k2hcsKLEYB5EKdUbhUQyTqgawg943F5PGNGdZgtCeZsn7RwUZGtcQMKpYehe5wVCHDKVyHKPpCMycizcoZ5q",
  "key23": "464A168NzUyb7dWChS5F3HqkTY6g5E4GLe9o3bQXA5gpcdTTQ7gr6FjhDbuVXZBkZZjE2XiZuR8Gkd5Fe8A6KLFK",
  "key24": "66tV7XDMtBjY9TDFb6sTuQGBNKUa6Yx9mkPGPAfKgjBx2hJtsE8jQpZPzunwAcRLAUgA9SVMU2xnYMxCjaiXDKZb",
  "key25": "5LCiSMeMYSkBoC2qmyjcJhrPzngbrbGHzBWvLxJhWEUrXf2tiRC3C13PPEGyNS616P439mXGWVZ9yjX5tH8AxBiG",
  "key26": "35U1BTdDQ1GhSNDKkUgG7SLc3dZqdiyoH3BhkVZjmW3JTBdnKiUfWKZnEiRr9uaNF2qz3RafwCKURV5x5Abk7Pog",
  "key27": "4MvTWtxpVRpgHSCqEC4DKmfn9a6bw5LzSf88v9pNE3XJYNFy8m3uh75iEQubM9uYaQWQqvBz2Re53HorbMSdaYfo",
  "key28": "3xA4nYqXLRDgfjBQW2BEThqBQX5yJaAoSCrF3yu7FGoM4zW6pDox9shipFgMPV6xgLHkhJg25fDVuYG8Ugdw9aL3",
  "key29": "3MvMrg59tWPRo3LGgVwUWksDm3hyxKZwYdNRnCTGvt35xCM8Ni9aznKDCP9wTQw1nGoQnvcKxzug3WS9vU8mzdQz",
  "key30": "3p9wtLPXpXHhauZVGYxktXVXnGCtawjPvNMejyuu1FQmxPkAKVbqPhMVE6gGGdo7v8yAnfaUUqfARi4HzGvJAe5N",
  "key31": "5y6BKWLxhTEEYtQdb2FEeQ7tE9mU9xZswy5KzinkfvyL8g45mYbWxb3PUwjktNUA7uJrLP5NB4xGwTaToTR2Vw7h",
  "key32": "37aLLv5bubdMsnjWAn7UBHHxyWLFJmQAVwta6cTWkfjZjU7YkFbcpd5dGMs5MfkAQNfsy5kKEAnfTPMcsRN4JnmF",
  "key33": "Y6ftAvVEfYgsoBgGGcGFHfPoA6PCQgfwC9qNH2VdY3zwSuM9bB9RemWkt8zo8JKRU6KvK8Anmi1HYoUGEKpHt8f",
  "key34": "24GUfLHKfCDuSXpcnWiRUS8bhHDqQ1aUFPqasMkesm84VA42kGuw7myxnqHkAAh7ykUrGN91b5spBC37THGgxtNn",
  "key35": "4AJvvC1uGTsbM22i4MaVvGzpapXpWAo4AZVV4jJUPhCVYNX99LcUPPRx1NYJCRPh8AcmB8kWJKYrcaEkJ7RApRQ6",
  "key36": "52HkV8rKbvpbe7tpyWdJ8WkNaTrBWjN4s2pwc6NuheHiT9mvzkoEFq37iHZVNVXmGtZTgCShmRfFai3Nq18Vc7vE",
  "key37": "3Nq3K9nEpsKRwvACY3RrhHLTSGyncUnCRW7jPjzayj6CDorLSzwLaZb5v7W2KCdcuuVu7FhDuScnzYbvfwzcFCvW",
  "key38": "4GgiyKwmDxswKF2QS6bqhotXxSpfvyFEPCAxkP9HKwEwKHr9UZaftPM8igeDu2hgTR5yp5YUPKUsMEEZhcsJbfwD",
  "key39": "3GMHue2tCcw2kYQ33PYuFfUnqQPfthYjtK3mMG6Gv3oFw6Tt1dh6AvduoqWGinQueLxRGL9rK4yJVzpbmbyHSHYb",
  "key40": "ZQpHsBQB4MSHGpmq3bx6fpvot5cmmNvPNr9uim2eN8pUkP2Nv3sCGcXDv17XXUNYBf69FGw3ih8H4Sp4U9GfpVe",
  "key41": "2huVdrsJc244fyaLdeYLfeVBbVmkfcFNRW1fP3fmikLxMk3fCz7icYukbYPU9JwR88EKobuNoS2BNCeaAP6KvfEe",
  "key42": "5YadRG5JAvRzkcjhRDkouHVNHcwQw3UwDRzDzBYS6Uc65BWJFKHu7RnQLhNawRTfwxwiAT9ybY1cY3wrcWEuRhuy"
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
