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
    "DsBJdjytEa4eNtqu5omdTgbk4C16QRURKmZgxgqY7Tw6KgkNJCRyiSg2cQ8TaXhdTDd9C62gDCGR4qTEwMrCJm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NqBgdu2tcbebZsVrL5K5oRRbyepCzqAbcPrvohGNkfT13FB6x5SRxiFxXMKXnFAZoCuUFC3y2ehojmCEH6KNstw",
  "key1": "5dSa3Vkwmt7iuad4JL78qbXmR3VS4MCsxD2hmZitPQY48hmZZxWpkD9aC5U1Z9up2rGz8thDumCjUP8gHd2MQxiv",
  "key2": "63P1GuAU4PJabcdSh7Z2MJSVpAoN2j8QvtQNp15QtSDZtUtpJyNNePZ7abhfS3sBnJ8tTHpWbgh3dkoYE226sepK",
  "key3": "3tsV3yY7SMHkRVL7Xcg9ZQZZP7V7h23Rc13wj1CA38enECCKAaG6JReK4hzN4jiithPz8r5Qm1fjLCSm5JU83TQy",
  "key4": "3JveHeYYbdZ5wpuEFzpzyLS3r3NvVjAe7n8F4RpmzLsx6HCLeTAPqCkEkADuppozbymKdRZZqdp7xXExQf2Yv22H",
  "key5": "5mo8QP3w2qxoUn9VGT3hEr5mHGexmjricvDML1gRPmjRS7z2AxKUFyioRTN8ovP2NTyjEoZTaEkcD6txPV77qF5w",
  "key6": "3ros4xgQAiEMQBVHRM4kjAGW6wYNP8EgDYNdtMx2BX3aL97GeV1AJvxkF4cmxhx5DkFHfhs3Y84LpxpC4SbFdDec",
  "key7": "3hnsrBAQx4EBmzVRbUChdwp5rVmxwu7DmfzyTYmNQpcCuYbNSfkqrcw4MRQBsQVJNc8N8v4AtNGYVwvU5ntmgdbD",
  "key8": "3GRbUbcLQozXBBptEeCprGdqaMiyeWPYn7453Xz8LPBBmGcrTYBHZtTzDGFUzjCFpDyJXsYXAAFWT67ocY48SSmv",
  "key9": "3o6c97k5sqjAprd9GvyY7LNBbByGBZajYVCYudeEDhEV5fp4Btui5LwHfeaexXzz8qcgKyQYbEntMmqccRFrpTxd",
  "key10": "UWMTZZm8nBabP8mwZqj3khBnFMVR6HaC1sipjZH1ExRwupSrxMj7jp7P1KmY1QJHJQABa6gbdTtuNjQRcR69S3r",
  "key11": "56rcBjkz3yRYAj8hNYJgXUufkhHNWmRzTwRbvnkJebKn8kccyHeuPHzJYTRUGdvUibwykkp1ysGEW2tgwBNcKTgV",
  "key12": "3dh4BX32MWjLR4oSbK5ddogK2ESEmM5mvh3N7XMU5qFjwUzMpb1vaLQfaGdm4yqNPtC9wGUJSQ7ouY7YymEsgaVn",
  "key13": "5mD1YqJQ8QWUJNyPjyoByR1hkcyDMia8S1Gq8AAEWbAyTYPkGedVGztbe43ySZrRZPr5zB2ZU5REvbaLfuPWY56e",
  "key14": "4GApNLPYYFQkF7wbPtbHLa9JvmrFkvCu7cqo8Kg5K1hWv6CLvR2UiuHu5Vi3HZJt3mwFFMcbHMh6ajYdb1h636YD",
  "key15": "Li9ihyDmfPyBhAtkdaNNbd1KAxNYw2h1CaHKyaSj3fHwvsf2HVdwVLsFFSjJWEUjRemLnJsUZKD79acah75sF71",
  "key16": "3HPB6GPNC5KHptzYi8VEuuoHvFj6CKGRd5XwCdHhTxiEQgehY1ehcDJxebGPDpGqgL78npjxbGKEYFErXq9gCfRs",
  "key17": "2uoxSNYnBMT2aBjULKSf33Jkspbt5N6dQsTdyAZR9EG6J42NFUa33DpdEGwTg4E1ugZJS1rUbjsYwZtW5aQBEvjX",
  "key18": "47w9QFvkEqBu91mfzVwtrewFdA4LZvUsx3n4Yrgd1r1D6QsR5S9xBjzvjWBoUqLTHdLo6an2NgtWHKBysuaDg5uu",
  "key19": "29aoDRUbzxmSPE31cD8vibYtMmjTxhwHo9i6gca5K2cVicSvwaPcCnjPZZ6dRMNHnnbyQgiN5C6fs6HLKRaKRZWy",
  "key20": "8aTqFX895gGjumrGkUSEDQSb3R7Wm6t1RzgdkoY46LQFaHqKGkeNTCYUsqBFe8gtgu7wcbEvHn6isBdNzApREGF",
  "key21": "4ryrkouh3PHbRzVSuFPJtjp2QggdXDiHYDq6DULJBfFVsR67Zdh7WP9pfZqj9K9FH1m55E6mEnBuoc3Q82Sh2Ssa",
  "key22": "FUE21wukEfJk7p5yK61rEAQoSBPo5zZVfXCuQAePRFsw2jouy7w2WXw7yw9EeoQEwRNePdWeSZC42NDnSXHZWxx",
  "key23": "44xUxsTAQFhgoZG6NKUGn5W7Q7Kjzp7sykGbzwfFmqNpv5oqWs5Eyq2Qn8S8eN15EM9HcxF3cFcfEYjgBLj9GAf3",
  "key24": "2Qf9LDWVhHi8UDy59rqWgDWYQshcj2KM1cDvAnSn8ugAgoNGyWdaGoYSHv3XruHMXT9thv59cGewPK1L811fVzTB",
  "key25": "62poN5Kprmk2dtLuRPgVhbsYmd32G422SXnUbLccez8AKe38CkniJAqr8xUvAvfSKiDvJi67fBL7da7d8B97ztC1",
  "key26": "4ZEW42k9s9KLc5UYzTp8kf4MwKaJXoVCJA8NtPN4hcMtKXhNEHDGGFJAo2ddSijLR1JpP9VujkLN7hKf2etWcNrX",
  "key27": "4uQMBynWoL3gMTs1QUHeBC3MUPm6T4MeFt3jqBEwPzzYdexRcTxrwEMu4BGsRQzwiSSp9VGYArPw4uvdtenrax9H",
  "key28": "dYSktarXooEFkUThA6ZRFRyDZCZGSdf4zPuBnCXe5vHhaVuVCv8Jtdnx6AWxvHfFrxapuPaQEXum81wxPiwZ5YG",
  "key29": "3B9yYNxk5h2tD4STioF8rFffjroGq1gGTnaNX3wgmCwS1KFQcujYDoU575sE1ES8Js6PzxnkZzw5BJUcWMQJZEmP",
  "key30": "4Mpnxf6GFtkRWQjpbwafnKLu3wP8Lp37DQW1ByMoo8tr1UzHNH8ghomTnhF6sdJHHDCxkr5pmr89nZMyE3i1gxXv",
  "key31": "2hRe15ZNXZeMD83QifA6VDZLAGy2RNhMnHuscmVXACVv49YsCGFjfpASZBLJzCak5TDaXooCHT6Sc6LRAWyy45Pn",
  "key32": "61tJsKHBJGt8jypkEmXRBGUbE1yMeuQF4URGfW1Uqkjry27aa6A2xxGEqrkJM3GLfT3yDhFaqcoQEnn5PxUVXTGi",
  "key33": "2PxSVREcXpsAZb9APT7P9C3t4Kj6bSCv2j1EkSVUXpmKTEn4aiFS6cp5B2TdpBq8K4Kw5cd9maA1ypnx9VVWJYjS",
  "key34": "67mk1SXkS4sdzAzm1DsLK3fDrppVaMnuJ3CqwNvuydi1aADtJQJTiV2gVNkV3bnSt12TpcCasz3VQ9w7AdH83boz",
  "key35": "2sGW8zbDkNiGgKVngt9aymFXT9kPXuUaW8tepcqk41etscBfZ1UKNzXGWTzRDjxoT2iW6TJhdfS6hXJMwiLuhYzg",
  "key36": "4EJUhnoFQUZey6aNsjB1XmLjz8y4MaQFbr2Kd9FuQJqM7DNXYm8np21KM5T8QbVZRvvAaiurT6z9gUVct5qGxwZe",
  "key37": "4ZZGutYwjaXE4dU28ymj7X9iFeGqwQKj1Yn6JU7QtaiNnd5dMaFkqpSwPpmJ4iaTMTxmo1S3BDVXEDcv3CWGrCNR",
  "key38": "61HbnLodY4iedh5TfwXErs6wDxLXUcMjfCt1aktdVgRi8NJFqw4TYqFtJP8wSPtdKMPQE8WHtWvPZ4KaJY4RzJz3",
  "key39": "6LWgkimruHEw7G7wLrUj7qxAT4NuYCjNqMXCh9nZtnKGfwKHr3QQHMQAtujvN914ahR65haANL3rQPayymz7xvo",
  "key40": "57yfxpQBbzMuSBnte3ceCBAYWnpr2Ja5X2UkZg9Qi9UfGH4Te9S7V6bPVbRWYEaS7HZAiSJ2cAtEFRso1gbK4dfk",
  "key41": "2hELgGKmwx1WVd7YREBx6vTTTWM5L4yPXwpDV1CPeLGzhWrB4gKveUQPZhZ7QFHcFgqC154HppN62kaCNvG6GhNf",
  "key42": "4A9EMQfpoyMnvQ9XFErbfP1AyCmUYLgNZUTzjvnkDVa3oJN98aYK5nnUGyQqJ46HmAUywB7rLR6kxGGpELKL4kcj",
  "key43": "42Gg5yb8yWPANLuHxC23BPk87rJ73wdq5kbbdgnYv5xfxL1mtEhDgH4GYBihDnX2YhmdEvnzRAAYSXdBnkV7WNQ",
  "key44": "5SMzSunJL1i7Uia8BDjvrAwxLZgNsPDP7v6hTbMC52N9phBh65STrUkMg4AkcCEwKryEgR2ZzQBPA7xAiy6iJxjA",
  "key45": "2B1fxddKNrphbvGKZk3uATrbwnSQRF53iF7QjkXrt9fYjEzJe8kYfRiiVfnHGSbTXLA5StGS27KrGrkawc6wgHrj",
  "key46": "2QtHNyrH94EryCTwTRmZqYQuBMXsSoLHgfcAGa2mhkN8zUu3HDLAXRqb8efwFR6zqAS7egqD5EVMXSfaYHZuNj5p",
  "key47": "4hVKE9bd2C2H2DpfTf4p1HHcGdMaXtzPPTCEwy9R7kkkRHcG1Fbp1keVAFPEyDxqJrTu6JpeSVZfHsrL32CmxfzG"
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
