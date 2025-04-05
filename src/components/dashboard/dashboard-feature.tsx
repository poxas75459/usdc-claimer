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
    "5ntQ7HHQHvycCrGppQyDSQKxZgEesvugBcUKiiSJbPtsuHLxVgjs6SezMKYVFRjCvvrv3thcUfQ1EPbypQX4KwtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BZrBFudDhoSpaGyxaiFjQUzVYwNe4C3GmYGoqhNpTfSnuF2KwFwxxNAgN5g9djsSFZD4ky5KTNRCxJAmz8RtaHs",
  "key1": "2zPGV8LrcuiE6hasCcNGiisZqTkZVRHDXEzmx7T3VejtCMF8eDsFKYVr4odAX3xvg5LN6LVFLSchnEp9iD4PjJNW",
  "key2": "7vyhppFUoVaokcd8izLizp5enuco8sHAGGk9ZCXz6fdymVRu5bj9ftpEJrY7xy6pWfmYbgA7KozU1X1DdvSwc8g",
  "key3": "3qYgH8ix2VyULc2vyr6u2KEFUQ8nsfjCFJsDk5CNyTe4SccgHiKXCWq97MwU2dKd28oH9rnn9RkZkZYicTnNQ19v",
  "key4": "2WHxGXptdnpN6xLiqtUVeevs5Upxq4stW5nqTLBCvmBYgHBX5oHT7nZRt2G3hvZfgXV1CUx1eDx1nq2CDTCAcTUW",
  "key5": "VTZ7PEuhN1bt7qcmFTjEmBX9WnJau6c2tRJWAUpWGp1x64MZaKKugSuUvbaPzvj5o9F7nhU6yXcg9ExrTb97hcw",
  "key6": "4UTukedwMEV6HDar8LHEyg2bgevSuPnTHJfhQKu7zvCkqnF4GpTkkYYQN4wXmuDMRQ7XirT6jwexLzTEiUZwuZbw",
  "key7": "5V5VJgVCYEevAtXkjwitTLdZMgsUC4rL1eBkMgDWae7CFxo6DbwqhziafzCcqcShfk4T7NDLhnrRL7uthLg4BVgA",
  "key8": "5TMm7vWjtDdSg3kV7urmhYaFBGDYnSoYwJC4KBVqfXhpg18xaf74bRyVjay29y33CyqXZV6QqLGQMESqtykPJb7c",
  "key9": "5VNtsYcCDBgArcwbHUqAo71e6tnVrkGfg6FyMMpSCCEWESCeaWbomeh4t7d2GiM3aXzFHJTDnkBVVPW1Ly2iH6Xn",
  "key10": "4ri2yyXPQdfSmZ3J6v2qGCca5Hpcf3dSnBiMvkCBXJcKDWwW9mAaccjqWGpTpvHTiB2X3bzHeUzLDbnNoWGTNAq",
  "key11": "4MkS2T1JvivBkiHMRup4LqLMUxdbySJHEMCvzJYkqnjZqsS7ZqDvsYMHM4Z8wm5caa2KiK7dcDxrACGtjcAF7wcN",
  "key12": "t4wcSjhkHpvcyGmxVEHHPnwST4M78cUu1aTMBojAiVp815XGxwGJxJ9JegG4hUeCWqSgJAgtwCXEJbthQNAyvBz",
  "key13": "2xbQXjxvR9QoF5yezBRR9eVPPQ7sVqjzNridE9SfBdJpUTA4ZYSS7VxkN9hpSphBcs4nJ9o1dsvf5Yo3fUZ18mJG",
  "key14": "3khPXh3h3iNFQbU6zBQGCdvAxoSy2MW78EViioMHa46zFmwCXCocDFqtvGezy99EzFfNR6jTpethwD5DtFxZEeAn",
  "key15": "2ehb7w6ZiqoqunRFVhcdpnaFTTSNCCYF9U73utWGLHc3niFdcE73Lm619WFmBxF2hvNgUEH8beudjtzxGdEMvmFq",
  "key16": "4Kk1J673V7MuV7jMpb6TjwvfxgJG95tjRa754PfPRXdwiqw59sNF5NLvcAh7XQwSDSYJ2zhtZ4bUAF7pxVPbJ7L",
  "key17": "61FhFQWXYkq3D627ikGLgWoWU2qPrKhGE6Nbq4tdq4UEv9xzvfs6u69Rtux5wTfyfapsKnzau1yak23NiKdzn1Zq",
  "key18": "FSqeyXFkmdQzc8UBHD5HtriBRnNkZALGjbiw7buXi4dmqJVA4nGgiEkKXZaLGNCWdu1ptwovkmGQsEYeg2K23VA",
  "key19": "4yGze7wciAchDfHttxisZzUtP54sZVM1gu5Th32mpaZpxFEVtDQMvhstwr8Fuehnn8iaiN2sS4wmJzkDzgf7EwCv",
  "key20": "4NbWsfmTHHyy4EsRuic2fqED1kRrxJpSS1UrDARDYKavZh6hrGk1xahRfLXDA82dmqsxCc46pkCAzbBkDxTEQ4v3",
  "key21": "3cQ6gGhznEd1damD6Xd3iAU6CxMAzUKX9XestLxkfge2EF3bHBbzNHtDYDpB53V1p2JxeQM88vcyRr35BwTdhzPd",
  "key22": "2kzWckp9hEq4qt28ApCxE4fbgkp2ZaNG7Y1G4hAVkjDd1d4FUSr1KsGgmNrprYzTWihDSLYFQPADQSEuyiE7Jqc7",
  "key23": "2S4ifVLx31EBB3Rc3CsrPphnrAPHhmhRsdgeBRu4aGed8t18Q5PaycqWAjEW9J6e9oYw1gofHaiD3ypUhdChBCB2",
  "key24": "2wKPLqycZDfCoQf74H1SxHYHoqXHiwuptdZr4WxysrwXXqiSVsktV57oVsjgFXPzEyvTF6LBfbinKqZRofY4vb5D",
  "key25": "2g8UJwR41GESamqMRBFUE8S8cKGgaCSC5Ey5dMNk71uVmha4EoBSvQ2ebZKkEaHdJame5k1tqo2bB8R1L2h7HCik",
  "key26": "8wPkaxoWNtuJQi8k6HAAKkykLaHCrDeyPyEG6FR6SLXqcaF4nAUqg2b63Ue4y3EVk8YhXHtk2KcdaFyWdP8yu9U",
  "key27": "3qe1KUKV4E1zoCMs9JnGXsrgewC8aAUG9RtHaa7abSjaKT3LQnMsu8bVSwzmkgVoWHgsajXy2hKjszfYyYVU1bvW",
  "key28": "3rNiodX19NsKApxpuMVyd5Fh6wL57YfWJK6tFZasbYuFg6zWw7cAKHcjtTrX4cmf8anRfXvTGo2fHwwiFxpWCari",
  "key29": "5A7vbWhGYKhoepsuX4A583Jetxfp3NKt9dk793665pJKUP8SPaLPmrt1KvTwwjArnPxBdP44to2BxhvjKY6Bd2gD",
  "key30": "3VQhTi6L8iF63KsvFDVS9zES2j29o9YhtK1BESf5KwyNLeXGQYUD3GWuMJNUGVQ5SUGGKPe5bYxEoTN2n1FBfr6D",
  "key31": "7gC9dKw6QxDVRoqxuqMQU3F3Nz8RVeAKF3xb3bfb73FyU1KN6LHpJHjcza3AtCEP7aHoAMJZmJf2ZQ887nuM51Q",
  "key32": "2yszgHTWu7au2RtRTvQ9nxu6GMjXUgfykSBfTUuGRdidVV3RJndXaULzh6Ltw8rreyNGafwszJq5owMUCEPKW8Sa",
  "key33": "hjCWYHTRVdVzoHuftSch12DoNXjt58fGfFrzHJh23JL8SrBu9RzG5cfLiF59VDNzZqhBynN4dkYDXeVqHsYgraG",
  "key34": "5pPYoog9egyuBMb4Xyw2Q5McHnLa5ZVU8xm69Z28k2zSyr9zB2zgPGWqhhq1EEoA1esSFE5ThuvQoRt6vDNqbfcp",
  "key35": "2UQiw2gm9rr48K4vbCuByYk79vUTK8Xwk8ZH2yMxSvx7HSC8aJbqL5GKgbtDiNzAptuZewVtgB4wNooLKdwhB4Ku"
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
