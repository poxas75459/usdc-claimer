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
    "2ocXTwZkGJU7gBw3njfLh9XTFqw25r8KCpwWSKqwdxgHwqYb32k4bntGgK4x3eMa2EZVo5JyKK91Xe2Sqatbd5yE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S6rdEaZn3jZbEpyxgwFX2mHCMxN58j1vH77RZsqSAkofPELKEzdWEQWxKQv6wsKDSm832hp98oRm2sBZUPknGz9",
  "key1": "28GNrD9jGkxxgzJksFJLxdraMG19FHqC4yPyRjSKsGUaqHK2ttwgwERcXAEJpJsnqADpF42U3CEMa9SvSDByRf1B",
  "key2": "63keezEJ6TYEeKRE9jGFxFiwK4Ja3atRKRWxzDnKEdGJa4qupWgXUTwQfNJcfQ1uEvFbGitbHEFgjNVch9x8QaVJ",
  "key3": "2qjP1w2tzv1BnjUVeJznkEgkcSFMKubrnCpSq2skr3tt9WhwGuXnfGYquBQ9Gd2u8zPkGYZFUq1nbAGEqQbcKa4Y",
  "key4": "62U2fA2yJofwRpXubjfvmWMhN82QkgieRvKbBQvNSRxGGRJBeQWVamGC91YM3kizCneWn7innkQYXwck16H869TR",
  "key5": "4tSrqg4nu5UfLzTwhKYJUxw41RTUWLKjep99zJoXcWsZE7zHQ2xA3RNtLdGvVSgPJ9ahK6wSjZXq5zNmWWUYq1mX",
  "key6": "oRKwdW16atBBBGWcxvHvdvGWG43MUktUCBfMiTPJKRDBboeEt1PhfFB8FNRpWqQay3yq752UtBnA3JLL5TtxkkJ",
  "key7": "3xSrY6tHS2UmMubCgLdqN4LxjtFcwadVerAxPBn8pM6X47RzPwhcU4hMxFQzvFXunA3oJrRQoK7qd5yYrHgd3Xd7",
  "key8": "3ETxkhfkicUYmKN4nrfVaP5ibjKK5vChmuWNeeZwdXG6NDVgcNkiL6UUei8ZcV91kuM7iD3gPoCnYG7TdUv9eybZ",
  "key9": "5U6qW19k84EsJBsGtT9uwsFC59tJtftN65Qh6AfRB8TL4xkBBo7K8ArUezpMtLzBWhf4a3xdibTMDmBbb9Lksd34",
  "key10": "2rYif3BCYUwbjgZM7ZCR2r3rddor4oyyzfhS69i4hLMPM41Moc531tNyPQftBdwZc8y4ZS4nDpxGdhCe59HAL4Lb",
  "key11": "4ghgJyQdCy79c6h32KxNtDZ4cGuEqdAjYuFHxReDvXCvFE3G1nQtQxn7y4x8oW2V9WmmgrTmQM78oKHZZY3u3dYE",
  "key12": "3LUSDgjvH36iuZ3vAYYZm23VVrBxZnM6dFYdxerwLnGACeZVUmXDTx3A75pej2s976Ba82XSRskAcauoTz6whpiS",
  "key13": "31mgLENm4dV6mSn7ikrDWRoSutJ1y9BF3AW77Xd1jPjMYq1NbttYHN1w8ER6ty9HCUDcjchPXoJ7ojUyDfhgYKDa",
  "key14": "ZxRhfeg5dqwyngZKUkqtE24yYMXyFGSJgnPgHnAZDxSDyp5ZVs2fERvEs75vFu7wKVa6Aiezxv1GzfEaJPjEz5i",
  "key15": "5PyqSCPzanAXYMS1MBRYCSWFqkBHDEcM9UdyVmpRerqiS8yUt4N1j4GFFxwoXJmcQwn2R6qy181ckmM9u6KvPt1B",
  "key16": "5C6wnNvJJvxXBZn9ssVUVHMZmgxMXKzj1EhTALjqvfSG7c8Ur7zfV56KiehBGYVKPX5MTMbZ37moi7rJohqjzhCP",
  "key17": "39NJFjdkAjfxD1ZTnFJPRHTAceHnk8pWxQfVR1B67neHKWEPhMeC1FsWdfuNFfyYpcgH7m8GeguANuS6DrhvAGLx",
  "key18": "4k5xSAkYsMMstA5QvpFB6w9m9GVWHDdEK6oz1YyzeGi7hXKehah8mgRhuMiLzRXzsL7M6VdUFe88ucNDCH1ma9C2",
  "key19": "4XksENwpw3RifptV56fXhyFYH3bwHAi3oozkxdSuymGnCj7hsf8HRYoaa7KiRRFYJC1ooDQqd1YrNguYv2zv3aPK",
  "key20": "P86XG3EV6m9Qgq7frCCnxANMR2EgqU2CcdfpuuCFdXMTfGeGzU6DZKYtWQLu1LZJTbLbrDxxCBvWdnReqTWyRCW",
  "key21": "2yTUoH7rDamNBTAh7wwwZtZkEEZ69qQfjP1pckNUqaCR5xaBmHpSzyRppi7Q2zhHbbZmoyZCnz67J9vH4Vny6Agm",
  "key22": "2QG4U3cSzqN7ab7ng1RtNhH2TKS2XFL5tChzaBUqV9yYiycu7jv3gcboBcKc2Bst3bbup7d2YKa529DRCrQiHvbC",
  "key23": "2brNPEbyUR1ws7F3kXjQz84Z5Hz51693S2aoe2cuiYMpJW44Wwzq4Qup2aBJj379Gf7V6YQXDrCsTAKgpbWJkbuc",
  "key24": "2scvM9rWDr9KVwpTyaBU3eU1Kg2oEwyjbUay5KUQ9hKCaLUXGGHajCs7gJE7LjVhoGtMADM7gEXztLn8WYGvJogb",
  "key25": "2HdFg8sVGTi5k5aeoSscjzsZcw6BW26ocWgKyVMz5ppv2KcjeHZZigjfzaeM57y67vjgechStuWVE9ebzKF6Wk39",
  "key26": "3F1RPccKoqpL8qQufQ5Us1Pn4CVsX9R2fbJ35rPzEhuN5vLgGntPSPum4Dm8bQdMQAX6Zbq64CFtXVkE2kZoeNsL",
  "key27": "4nCHXXvTdgVmF2CL7XBx6XhC17jYHNUEEAnzbsb8ZbLNm9mRkc6MtYjN3uKzXy3fVreavpxuvSQhkekUE83Ms3Kp",
  "key28": "2bMC8ffqmGvzTSswQme3BKXDqbQPKhmjjq58DngNLYRNA6Boi5wWBnMpYyHZ3Qp1eFaeYtUWGSfhfopcWq1ZuLxL",
  "key29": "5gK9XqxiSokHyFBXm4Qx58vdWGUgThmqZxWPjYUdFubcoVjA9BnaHqu7FZfokENzHNUqjL9Jea3RbngVg9naSn4V",
  "key30": "25vwisw5Ei9yNJB9gZuTRduXqZeuifnAvLdntwfcadKVPYonNb545BeDGGuepZCghppCDZJDW6trmiUPDeMYYSgj",
  "key31": "4D9BKUmmrfp6M15K747LwL6xjF4RgyZHNx4wadVqqM6Mts52mwPDoF6duFvdQkgZxAFRn8WJoXsMxmRkzJgCVncn",
  "key32": "4EhU1edMYzLKZBbZr6ZFuMiUmo2GgUY3AbcswXfhUXEdbsZBwCRipEBcsPUKv3NxEgPkxjBzX9hnVJ3w5U84UZj",
  "key33": "65grkPdBBgaDEPVZ7HosrYpiXRokz76qkYNssqjYBx5syF4sjigUAnBY3j3qL1Ph7drLAFyHwvHRSfyEyPeQAtzi",
  "key34": "4DUeYRGpUvwf3gojGrPQNPMZYTXiLVjdAGPKG9t5j2xXsGhVd3AaH6ucCig6xTZGLyJs4tppemFYBH9zQLmWznAS",
  "key35": "547g9uMSnRQqA7ub5ufwNFkeN9Cc1C8fzSqHp2igtuzBZurkmJzpfyY6PGwB3jQim4PgyGjSv9iePEiafX4rCtk8",
  "key36": "3Pg1519tVVX8yE642YoZv1aCUWhwkP2f3yUFc22VH8mRuXEMfMsQ7yM4vqzbW6cY9zCxr9qpcSNWZN3xpqPuHEEN",
  "key37": "3zx3Rs5STrGxGUJ2Sdhg765GTpiY5URapr1QMZqLfcG1YGZVpJ2cCJYfxKsQrabB5LsvUiPpzQF2HuPufh69BTDJ",
  "key38": "41bkup3WnBq1TrVEixKbPTfptLQoPhTGrUjcyhZB3PsWp2h4hgut5ku5yQ3NaNRD4BgNrjCTMejr7Lqpf5ZaP8i",
  "key39": "4VAmwD74Jpw3zo2QWiY2JxZpLZbJMNG1Yjt1VG89gsvdvLUQNgw6JZaMZZzP8wuRHNVktfXg8HvTjRByHg6riaQq",
  "key40": "iAkN1wYKtpq5r4PsvGap5y9EHAfn7w5QMLG5SsEkCyZ6UujS6y46X8tkYao6twxfJZHnvjVfxmW79CXXv7GTc2W",
  "key41": "2kcaCGS3vdfJaDDpFRfh8CN6Z5SKgxAww3howmTAZnYKHxHvRV4xtqGU7b3pyfifJnoY5YKSGMRU6s3TeUMxSm2b",
  "key42": "Y52tTjjTKC34cHqcJyVD6Eoy6xk1ntmjjW2pgCT1yUrXf3MySi4kEV6UagDy9oN55wAEBXoaVFBTio2dR1kyb6c",
  "key43": "3jEpMTeqWoJ9GHZKxb3a9iCXfHd9td1Z5d1wNQ4nMhv9ThJycB4bSx8dtkZmUHVpp8Yc9M9Q7rCc99usnkSGCVqW",
  "key44": "4VGhGA6Cam6uTyZstu3XHD4j5dJ9dquc86zuxQ7j9WfrhRkxAHFZR3xZYXgdC9U7uhZXzuY8KCLeNjxdz3fFcdkY",
  "key45": "4nSHDFMdHg9M341bwcG6vfQQs7XToSUZL4Z7dMJcMwBz9r6JsvwQFzz1PVYc3xid5C4nNakRYAEqt7NBcPzvBQJX",
  "key46": "3t5UaZRQ8PmucQ8MfJ94fLBbFG7qJ2oWuvVPtcN3uq3DpWG23pKSgaP2axjLGLfRezF7JJ9XbZgvs97aCWT1tuaH",
  "key47": "5VgqMhgEgbNftwKGxXdmBwrJFatTw3RkL12jq3RBXqYBNwNq8vkEFomctcWkagsVAnPT5GV49w3gSTJH391K7Bk4",
  "key48": "5yBZWpFms4kzuc543y7bTn1bdQn22W519d6EWSwYyd6TjpoNCEVAHLFwaCqh4RxdpvS2s5rSuPZ5Enrs7rGeMjcc",
  "key49": "yvuusnrM7CiBDD1N3XnqyCfbMdq2yEnXwvuDHfm4GoyWwQTJxd16pQvRoQMFF9Goj3ELehDqQPUnMCm7mcKZEEv"
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
