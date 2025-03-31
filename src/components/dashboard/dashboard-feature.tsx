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
    "2ZocFxqmmnzDQko5QFakdMxmsCSccbvmcc3TchxNtbmhjYCxhVXrDmxxvtapWEqRLjunUtyyHmxTz6Ryw2jRkf8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S5Hr9yik1ckviJxHDKqaD8nAKQGzqY2VbtphzmKoV2fSGiu7p9u3LJhgypdJNKBgro3hZ2n5Z4MLYZJnf7pT44P",
  "key1": "5fVitD5n7S6XXCsRwUhsGvSfWwu9SzfbfsiPCgSZHrPFqAszJfhTYDygWspPsMBKscgCF5r1VysBr6uRJ74yTpHz",
  "key2": "31b5n5LVWXT6dnFHfMh6VqD2YdDijANwKLWDr5Lu5ffkPnSR18iaKQrawVp6TCX3y74ZKEN9YFzPVFC1HPaxMpYq",
  "key3": "5UHLFEGSqtJjqZ6tmFVo451rcCwzivAq6KHvUjBUFyXA14fBcMnC5paXxng9m4yefs9DwWPAzQjGVMKAG7CJ7EGi",
  "key4": "2roDkPtA7SyEeZJgwzBR53CkPKXrLx95cc2kmfuLbnQBcPZB3MKzMA9qzDj56XZeJWpTL1hfLfXnvVQsAzic3jkb",
  "key5": "3SVFXyXo6rHJr6quSHDNTmKk8vkgRrmo92Kz7TRsAabTdc3FEyg3UL451fEEvzejevvtGNhcxsRTCo3JFUzhmo2V",
  "key6": "LeDdYV5iZJJUvTi3kSHyP396jdcbZJVmQfWEZ2q8BBZaEoffwevcXSMNZSY7mv9sUePMM8mmybKopGajePeUkLj",
  "key7": "1Z5GHJs56dbZiwjSTgk7CEE5RTTHNk8sgNviaA7gsJK34N6PtJVyqWG1Q7jSoiKKgu9iGSvBqYZUurj9kETEPND",
  "key8": "4tn2CKyY2z13iEKdopfVxyYEfP6eWXA2CwFGWQTtPQiACTSVLKtXAkerdBGQ8DSLuxF6dpWh9R7AGm4FD87bgCGZ",
  "key9": "BJLoRoVuQLA93YzPJZkQ9e92kwpYuwhBBKYDyd3FTMnT8cEzGggTcAorsz5oW5XvLtnne3GJsAJwu15cWREtdJh",
  "key10": "3rnKF6ucgPzssgWJjHQJr8Mki7TMDLqv2BNDtnrYVsrtBoZhbm1eSqYgBzcVftrbnJx21dEDGAWDBr37GmivC6dY",
  "key11": "Fazv6Bo4H2hA5q6iAY3hyCFpQNVhtr4xYZTAbjTrm3dEzPRT9K7jVq4szjxGMXwXpcgCpp5i3YNpTYzSbbVT2gL",
  "key12": "5KfkZA8q5mrqN5tqpPm8hVGVNpLP41r1N2qYP1efctog1VEeVw7HvTGmotBb5q6DppQZEXavugBTf6z1NaKcAaKE",
  "key13": "2CEn5K6863JkpgXqCC4hx121P4nhrTWinz6EaXLEWMLHLXVou91DQBNrWZKKMTZrGWHyv15d4LFqpbGz85vTto2i",
  "key14": "oNB6H8MduUoJx9T9sDMyL2TwwYUCkeJQ4V2QA1p4BHprT2ZPKjwwiuEiXAzpY7AuMUdWfzPyYckFa7Chuq6E12v",
  "key15": "44KuAr5DXYZXeTqgKtwYigKLeyJtavWJRMR3P7FpnmJwuSB3tmZZXSnEneYuYLqy1c6gsBkbeVYS3Cdio92dkyCm",
  "key16": "2xBJwo5BAxRiAbFzLBjJRxfWATgZWWmW9gfKR3k2KMhXi3h6ExS3n4kZNjC2jBZEJo7kM3U59gNnynMvxWSRbVHv",
  "key17": "5hs9g94TVVvrr6KxmP3EqvMfp4Muq13kzqoxd1G8vqHbnWo4NvYZJJA9HwdVZV42yACxsPghhSXiLVzCFzjBSvmM",
  "key18": "3VSvqSNrHwQ9v41eLk9DAciasMakPvNLbBgdZahGhXxjqwoYAVkuogFNpyiYU1VTfbPijaLSQ6b8vWnQM4qx7Czu",
  "key19": "2LoPX37fA19saocHmgA1EoeoF4FTVDjZ4FGnUK6XFtcvB2KGNB51epTKFeBGgFSdsNcVnxw7DxGuX9k9AZs23kLa",
  "key20": "5gVicJebwX6KicjyBtv2cToJXddzM3JEdxFvSQZ3gKMoZiniki8c6Maqgn8qk8MBFMrTC6FQksUdD6nTNnbzdSQ1",
  "key21": "24YriiqoKfJu3YBr9wHZ8u41okwQj6yCqE1W1PoEpcc5NDKm2JVFXhBRvmo3VXto9edzgaL8bdrLV6TgRAdkdGjr",
  "key22": "5e8AT1LYZmUFQ7RVG5ymVSbVsVem95P86CjwZA6qS7frNG7BaEdjP7AatJVTwuxtrad7bW4zwwDmXemWaMYoF1Uk",
  "key23": "3rRNBuL2KEmPG9vauZEZ4JaBvueXLqB6RQEx8DaNhpMJHmnBsDiwHUwWg4fWafvSKNiwdkphAJH53RaxHujZSQPS",
  "key24": "2UHe7En2pf55vU78CitsvTgXXgFgaZXpFv7wrngkq6RRwmkR6uQ7hX5nQr3xpJm7UH9zVc39BtMjW1LZPigv6t7V",
  "key25": "2azGER6Gky1g5ywkvRdtpbEZH53sNvv7aVPkPcfQ86HhWtGVfqJE9nyKtT14aSseAxKmtYfCBFWxvNjt2zzsUstU",
  "key26": "4wiSEr1caiytqSuH3WMF8CrcspR5dxF3CVyHVpptYDNQ5dtKpY17UEuhJ558ug8BVUv8xe8LhJuvC9bmYUTWp78z",
  "key27": "4125vkUoRBBqpAVLiGvLZpSJ8dtckUzTv7bxxLHzXk2n2ukFzPeHJe4AuNordY1AaQg2QTt53QZvWx8ygryzge5Y",
  "key28": "5TyVtaULMhnaxctD2Jt2BaL1pWMViwYQXggn7Cft6Q8jZXqZGpXHMJNijCc5tTXVhm8xdEVmZ9LWqURGPVHWGnE9",
  "key29": "5Bapz7zPFjtRHiBEUMW32Zd6Z3hYhcpaXw8DRo4QdjW1SMF6HhniJRzdSErbNeqHi2bhvk5U1GwrdGV6Z91uoQBS",
  "key30": "BGtZKxBikn9dCRxCRnEKNSGuBfpQK3LugwENMeN19TcY8UKRhewGFMiTxq5bjAYHTb6g65fYz5TYnMuoNugwWfY",
  "key31": "5QUXhkyg8TG6CTFYNxbDd8THexUtvBpp4Hc3HunaTSCko4TiKzcGXPDNJsFQLmbpyL1ac3K2vzxfjSS7gZwen1P1",
  "key32": "8zViYF9b1BLnewr2rkcQ83dxvS9HfQu9opmN4aNDYNPd7idGMdPo9UhAL65gRiASG31mhHfsTK9qqdfFFkNbdZL",
  "key33": "3HUBcMAsh7wWe8LGyKsHCrQdZkLA8AYfeNWiVM8zb6C2s1LUTATxi694yoj9VA8TV6oCf97AxJZ1qjzPpr6ay9Yz",
  "key34": "2hMiipodTJn7t6ZrMjsxVhkPUzaiVyt3DCcvxweeU2hTTZz5SntfFQf9v1X4jmBZhv6F47nx4QQ8VC4BxNzzQ9Lo",
  "key35": "5u7qgfGEXpTdpLD4Q8HyJ7CpnYR1tjmdqCC4VrrsAYSqTps5c225Vn1QKL77am532KSj8Fcvf4zAEbbf9bjvMk7q",
  "key36": "3tDrvpaGzAmscCG5yv3c9jhxTk6whXQwcuiSLPASjVQw8b7pPsoKHPQUAubQ6oV5hSGamSfHN9MaNZ8xgkcj1mV7",
  "key37": "4pXJXXXXsnwmHCTWcSuw22tH723fYzaJ2s8aPscTcRjBHTFs5H5uLj3iJo5hAvqNujCjQJY1CNUH8HA5vgYzB29v",
  "key38": "qatnZbPaa86KNi5jmbb1wLawadjCCG14zXD6apT2MuKom5jtoy6XcwQj9XdTLEVc3jYENwyQpPpw5hAmPLyPZSM",
  "key39": "27yTr5euoYhcDuAmnj8tLhouTCH5t7DRiGTahwjPzURULRaYUqvPxieH3ZrrgsTiBm3DFs97wz8vn7YWtyEryv9d",
  "key40": "31cnRj1htRS2xcuRmbUhYppAiXZ8jdGT1WtbZ8mpjtiiU3f73pSxCJFFnDGRfrA8sAF4jvAoXabZ8WQh7v4pQcRH",
  "key41": "4UgUPcmpgPZSQf7UZDtnsPKDoUgV9SvJykLNLe2GgshAwarR46TuvVJZ7PoFkSazhy73iRZfaWahrAR9a8J2xTei",
  "key42": "4gNn85iUQfN8mVqzV8eLHtMPRBzqEcP6P9gWTMnd3QYcXiu3kpXGwCt729rqaWpN7cmY83wTBZxrNbZLRJy2z3Bo",
  "key43": "4C7g16xd1ij4fWJTBwVGfWyAi1n4cajnqa4NcwnMnnPpDaiSKCxtAtCJW2jccFXpdW869VB68ubweiojuF8Q1u1i",
  "key44": "7JX32i32DRtCfk9gKVaBTQxeSpQUJg2BTU9tSGPD6eL8csKGbkqEk4297Bw1d9DhrELDwFk47bZjACfbJvQqvne",
  "key45": "4nE1tGf2m1EnLfCjaFDPKHekTDcksgmK3mjiJrj5u8CeUh6FMtURsjpyoU7YW8gzWpUcheiFwL6WeXz8mshT3Ymc",
  "key46": "5a6ZcwoQDPdtaAnrTaCPXyLE24vAwXeCVrcMVx3WaBCzRUeHoWHfLRPR1vMxYwL4EgEuJmb1emD9R7GAvKV7oHC2"
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
