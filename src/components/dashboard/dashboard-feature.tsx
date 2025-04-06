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
    "22myVmQ9S36S9UrLopRGML97gscfzAAEF3fz9JgZCcfnj7EbYGcGndrK1xBEbmzaQ5KwGzrTYsKKztwDTjZBMrqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Wy7qZYPzGsK8kaqPtcW4JewKnktyPFD38pQVe3gxEkyRe7xi6YwvjA3tZivY6h1vTTAsQANAAXCEFssBHe4CLR",
  "key1": "3S9q9LpZfCMdcA1YWSrmM7AoAReBrjPv7KnQsag7kYQpBFd715os1CzA3ZNEEHDsxaH1vsNywJh45LnKnKUk4m3j",
  "key2": "DdNpsn6SxXirE3HUw31fASMg9gZ9Es3HA8LkU2z8Sp9yizPQNUyT2DuSUC9Xf6yFZZYH2VkG7w9cXfiVx9fDYsg",
  "key3": "3QfC11y94QPvcsJbtn7WPTYAeCEghVZi7C6PbmD8cViw3DMqx29MrS5N8nFSgvRvvHrV6wBiLQxYpD2vV3ggsb1H",
  "key4": "5aBN3NxuArBd3Jm8WiynFkc9bgR4x6MBzDiP5xG9A7nieuaPgop3dCW5Mnxt5DfUR5MUpWqW1Em6tmgTbSauXNhw",
  "key5": "629aypkCMgrPS1CPkUWnqsSTfD4MnNbaZcBgpZmhfTfQJ6BsbsJB7zSr8a4XrGDW6u1BKTpxzQ9JXR66tAM5jXgW",
  "key6": "3vNesqSbVdSuzCpBEh9nPFDJPEG93axW2tGUBP4vinkuM4B4zduYJ4wTqCEhVokUeFRqmC78EEcYryhBr4uXft6",
  "key7": "4u2BCeMtsqs3sXusnHSWj1857wxguE3WZ9Q42pGXgWP8KL8bbsfqyApRTrpHwTGsZDgt683cH6rgw1AZ8x2F1SL7",
  "key8": "5RnCLo3GsNGrATetzY945saaxBRz4SVdm4UU7dQ91bWrrHTmnkMvoXUcymmmCzbpkfDq9mdymYoyTKFBv2gACeDQ",
  "key9": "66mZ1UWAcPsHw71di9SNdNfi4SnWoKRZpdA24gbYe3nf7dNSXGp5W8eHtLg8ztpd9pcoZkX5ovjHH9eww4aGFGkY",
  "key10": "5t5BqwHSEAhNvA3tHx8awJyE9uP2ixmRsY1qRiJJn9Wy4u86LVbBcJmQKnE867wNyY4UTz3oX54eqt7KKXBeANX5",
  "key11": "2qUWEeFh8kQG7gDhbhmkPHiDaLB1jTbA33t9zgaJ9HDeM6y9KedqKJ1AsTsSwmMg1mHitj9xM3Xc3e7BkrvjcGus",
  "key12": "2BtdQjKmyieBVsdZQoZHtkYfTiKJY4ceb2RrUwyPs6NihR6E1JWEraYfc5VdsNLFjphGbZHrSbDatWqfKtfYYg6y",
  "key13": "2j2xXKZ78LY1q8FnYrQPHLwoApXUhYCwz82Xnh61wpzZqgALgZnrgGy5sNDSe4xW1heKAWUYoynVSXrDZtrPgaWt",
  "key14": "2yhig33Mf47xSScevLtVELTokmDYB4ZJDX7yDgjGJZsKExbnoX6nrsV8c2eLEQamshn2HgZJJz2om3DsazJyZ19S",
  "key15": "f1t69PRxSG61bKNyN7bsUppvopDyExer99yRrDH66giU4aiseWc47NKe4VSwLcZvoC8Gjsq3nW3zBg3EKFfXCtU",
  "key16": "5vUvg3mdiaFFEnimNtMwtUo3hKUs4Q36z9UwqXVW22KcsnapDoT2KYBUxfFs2pViVQRCwm4KtoRQ3Z5fDgMgSsVx",
  "key17": "7bQtJURjC7Fa8jV6pmn5PhzAVxYUBykJyrGsYcXqt59vDNVFQbrNkcWqe6vrFZ2xRC2CuZqdKUUgU2QayPxVVj5",
  "key18": "4PMVKir7gE6Kq8gzkTTeQNWUW7GQa84DfAqtafiKBkX3a4YYJQrs5Phrmr7UBpBSpViFC1XEtaQvtCSxs9V2XrZD",
  "key19": "57bbAowgB6CP4JGtft32fxFpikZdAv7Adozh6RFBY54afChH3GpkAzu1MjPiW4BcanG9Z9Y4Q658KcxXiioYFcFW",
  "key20": "26D1intArtkh8CKcpct94RZQYUqNta92zqw1fqJpf7B9sTuMdrszWfEYxmiFx5DwbyXyyLam7pT1iAh3rNa2kquF",
  "key21": "5qWxVTCLgwX6ZFKT6N8cMZ5CJgA5SkdaMVTAqUB7qwxncnhMDK5DE4nbDQnhURuAFkxNfM3D6Ph8qRrHHSngrKXY",
  "key22": "35rytVhqhfkkjTxRhuXwGTkDUCJS2R3LywxFyKkVhUhGZ1mCH6dW8VpMGUBHuMs11WVFmFXoen2YrVJ3eVKYruUm",
  "key23": "5mdJf6sG4WFh2EDEM4kZFAVeifwfJ8cGkfXG9yTFkcEDznumprFqSCLQa4mDbv9ZarBxwSYDmho8aF9NvK4B97eS",
  "key24": "3dcEWfbSaXLgT41WTFGtTAbTLod4mgCd3BpGZ4xkPzpkXcYg3tfxpNt2aYKW7nBH8fiV8xtyviPTVi7FMQhMR32E",
  "key25": "4xo3uGcuuE6ThG53QkhK2Hfmd4sZZ61c2Td54imEFEkGBBg8cEa3f38s6UwFSCfejXncQuxBvdNhpXFXZNkNNsK4",
  "key26": "2Vaa8hXQkZML3ep52bdVdJRQwdNGP8cScHDMo25eP6cysMnU38z6waQ2EKnMjZhtcJa2hzmAx7sHMprihGrgGzA6",
  "key27": "4jMZMH5ZQzPmf9eTYiWBJwXtNxjHyAwEv6Ni9bAw19dHFH9MHA8NAKE5ryNZfDnuQm5yt7uoxHjNbpSuVEQnXc6m",
  "key28": "9wMEKdnfgGfRoniJ4RyVdEm2cuBdXpFkEU4vRfZNw5iddkvuSNhEaWNdsZbgh4UpaUJmPmLHdhtPxoQL4byymyD",
  "key29": "4C4wF56fqScdC3vXLVL6FAbgYuNawhtNr27bMGLwuFG6H3vgLnmRogGqz4X5LLG4HJuFEmKo9GKZtrScqpYSAYRq",
  "key30": "3SJVfcTPNqSZArYGLeXBtWniuYrKi4mMq2ffAZ57MuWdfcEzXgZhrBxgyEuQARKkx8Nm7cW6S5ywzqnH7UfyfUJa",
  "key31": "3TFm2SuiZJxHwpWdAPb4fYRH2jVq9uYXZxumLpSHRVxX1Yid7k5aNt5whwCHRb1nqHPKuqFo6HBea19uGn1w5zrL",
  "key32": "5oyyyPDKXUhWdzeRG87hBmnJh32TUc9gN3Mmqy4TifTdaimsRqFieGe5Re49xK6aZ1q1JeT3rkziy9nt2DLKMVqa",
  "key33": "y78xF6vwFiQfjdgoPjxVHKxXNaJMENWSJHzTbCCVpBhAkfJjMmnihfJW1WvBtAtJ7gvTcZSRxqwGyAwomtXVWAH",
  "key34": "hRzhe7BkwrJwzw3CKio1maaFBVd2DC5U71MjWoGQ1QiRfsaKBxFvS8hgj1n3c9z15qNRAduEfRc4bWx92oH7qMH",
  "key35": "4ZKsmxpFc3cb7qUwdPuMtpsWyKHArQoGQb2JkHyAqJvsdczuzBPnGnCMuh5p1xXi1H8vxQboCi4u9QuFhnJfuDn4",
  "key36": "u8ToEWKBELnJPwY5TuhPycrcYCrVQN1sL3kjPrASwBzqPmKokn6T6VM339zJ1DPkL6E7sDkuy4KPTXsoNmwgjZ5",
  "key37": "3ZHtD3xqFpyHA7PdMpn4bXuUBpNKfqFnBXttDJsgKtexcuLZWYGMigM6twHUMsSmAnk1LBQJLvQnHUmU3JkYaENL",
  "key38": "2qe5jtUH4NjxjPv4RK9zStZvaZyjNH8DwwWbbudKpMsEXinwyRjfMZZtoWAx66G2RjPPGH46oP8Kg5AGX8SPUzFm",
  "key39": "36cdrVx27oBYcwAR8jSgJV8zcjqvmcSJeAf6LhQ7d3PuFn9zyLyYjasNCt1voKKyYZUZwgc3yGRBsGakVNzyWzGo",
  "key40": "FWXeQ2HYgtKxKeWGSPSwy3QQhe4nq2oXKHMEtApUXqKZ4gcHXUsJpunb5TJZ8rd3P9y633FeQ9wcaGD3c8ZPVdn",
  "key41": "5851iLtiLc623ASXbaXrpSEagh8gKesrVQqHXHGPFfy2cVaywe251SR4tiryZSqXjsmPXwhUFgw1Upo8EKyyt32M",
  "key42": "2YLxeXeos6t9Cx4D8A18MfYTW2Dms4SPe6dACxGwLnvzegmxcuJrEGwMndym4hYxcqKX9vrUHXkr7fppeKBUwTyq",
  "key43": "vTW4ZnS5zwcnGmczvaf7SspP47FAJVWUXJ1zm127U2zh5Era6eBXBoZromRrJW5DG69NwaVU7GmvtKAsiMxc7xf",
  "key44": "4ToCNMsy5kjUdfVqZk7ygwakseYXbdbbY5o7rwC9GU2hvtcEmc4KXbm1cMfGMLqTLVLFdQNQ9Dub821w3xgNWwtZ"
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
