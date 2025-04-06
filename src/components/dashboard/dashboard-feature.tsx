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
    "4tDDFAWgWqnHHUfkC67tewx111dxi1XSFysxV5Gjm6RJcYsVEz2tf78RsBNMMN5PAcdWiVX5k3LeMGU4DXSqjx3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kp5Bs7tqJWfPZJsUvr6tf3nphhyTMFnupgZMJUSzWmry9ExaanoUAUxibxr8qveQCYJZaYk3EyacQPnY3jsgWH3",
  "key1": "4jSBq2csTr123nV4czjQoafj4nisTYxwc2xYP2BP8BtfuhzJZk5zFa5Y62CMxeyYCmQErYJS7q4AYus1D1gFWfWT",
  "key2": "3L28Da1P6sKHo9yAQ699QhLPZVpqKc3qeMLNgjDFBS5hCCDf237qAHxJ9KUVZSWeat3bW1FyS8okw9Ts2meWyu6b",
  "key3": "3sFQH8A5BHzcYb4JkK9Zyi9zaNq4g7GP38Qzvg8a7Z4U631Erq3qfQbbDoRpZAp3r6y9whmBmMtz3BtWac7Hqgw7",
  "key4": "3R7xyDJNfM3XtEQ2ouyFX8EEnPr5JxjKSuFx2iJR9qLSTWw41dApTMNGJcSEsVdrJwMU2zJKQ1S88sgfg8utT9gx",
  "key5": "5KBsKUoPVum5tvr6z1ZVZyVNkPFQATEv3uEVJTaqf2A56tNuJGXWFoAPEN1ph3imxTSSd3pA68mZr4TaUn8cxYRs",
  "key6": "a8GXnVDP3dDM95CSVefvxb6uwKvRaZBqvn6gSKeT7RJjaJSR7Na3KHCUMquKnj32WYhate2N3FLszbJFVJynK7R",
  "key7": "3AjxFSb6ev68vgr5bpfeMbGGJjHggzG5YaxnwbiMwFUoyS128HwbCVUA6hvHmeqyJfjPK3H4GJH5q2NvQmsqWifB",
  "key8": "3LxbjL8E5Hh2QbFkyvuVqC8TYbipm61yyY88WHLrWEXj7Cpvs2X8XhcDeFwiyEE2RcqQZBNB3gcj2SBsfZnivZ1v",
  "key9": "4mosgkdaewAFSoVTjconJjxVt4k3SyhovxevJyGdoaYdd9zGk7yJ4H6bBMQs2rqoRpdvZZqBsxdemVJf691rcURk",
  "key10": "gExTX7Bfz4UKnRJoZF9yWkCtonYWGYhdX6VBf9ZzTTTLSCkRUqgfyBjn3np6WWQ9MUrdZv7T3pKVfz3SQYF1mmo",
  "key11": "5HvKk4Bxc19WkWWg12Bk7iu58wR7RcD5GEFj5CVj3FUdWF6zWrnDwL1qE5YdFYsT3TczFp81hDAm8x8CJ2R4wUJ2",
  "key12": "4d4n1FVe8qxPrAMdUsJDNQ42Vce2qffStpAgYZCkaujt54hvkkLfBST5nmjre6mN3UQJmaLcsN2YJwKEBJ9hVrp",
  "key13": "5W5tckrBHmnQscz8Lj8CTZnX6btwM5CdCoLfaRtMRJRktHYQ8uYyjuEu3Z272Ap92ZTPrtfhKeB9fzCyg2XwcEqY",
  "key14": "3YG8e1f8YcDEPqG6rD6xo6tnQcMZ79GjzADu7zXEH5j4aA3RibQNXBQtzKpZJ2EycQVmDqNsgy2HuDgJUNREzw2M",
  "key15": "4YPhQmCL5fyrHQcjfaAS2eUKz6xYmxiPJG6frKXyLdgQAUfXti9k9Bf6c8ueMquP49jLam1ZUDZmXqz3ZXcZcuK7",
  "key16": "57txkGiPx3EY7H4MQ717W6bDJ9dW4MxT9Z8rB4eiBxxBy6dcVtusNX56hJGhw2BziDpypCnbokrzW472sEHS969G",
  "key17": "56CNCznKr8zWc9pseg3XoiJtb3z53AMzpZzreUzUEPXQNzGyavDdSxhDhM7skkU7Z1h4UuxbaG1a5VgFf9z8ZkLg",
  "key18": "52p5yQBXDrkDpbu3DpnL48Yrb8yMpZooCDBEomFcP5qPDDBtm6ciJ6H4fZoJaAJxc7bUbAkmutyyBtGWVjwbWKKp",
  "key19": "P58a5ZwPfR9pz1ETow5fhMbBm5eoMzTgsu6qVv9NuGPszpTD5Fkhfwjd1pyxorBkwCTDdj7cumaxN89DMMJPuuD",
  "key20": "2unhAV7cdYLwXtRbFrHWUwHDNVt1P6vD41LTg7UaNkLeLzpsEn2oginTR8Gek5oExR3uwnyGbG7HWVigV5DZoAAq",
  "key21": "2cwXfoVcycSCEqaRcQ1RMuNagZ4H33WYoM8VhrJsmfusQf7Ju3Y85tCQN9M99GSUa5pUtXuwyNHTSFCjNfsBy2Yt",
  "key22": "2dwpj8Ytmp156BSx44xh51QyC9yC5Ju4dybU8XNGW3KywWTE7ng18tDjFPyGn6pGtJD2VARwnrvLcogPJweHJEiy",
  "key23": "5N2gQF89ybyA6p8roA4TNxX3L3pKpDaoMsSS9p6F4NCPGdVWEtYpmp8HnsjTNXak1msoFXWdpscd2hZnKynEhNLG",
  "key24": "5TgtLmrRpUDoyH21rLmbzA4K6xAqhTn4ebnJsy1AoqH1Mi879S8hiCSHWkFfPhkGQjy7NFEjUh35qcwfG3S14WRW",
  "key25": "5V5FveQ55G5TuYrYRGGHDEjBxutrooBAQsqaz7n12Nk7gwtqk2TRNVnLLyML12iRMmMgU289rsUAAwQXx47C3Zk8",
  "key26": "jtj4HkyLAQV3kPhju471UoC6ET6LDny526vdrtQaASgzFDUhVcw7tMi8JvX9WBiWVMMf66THrBNFNQpZUeRefeu",
  "key27": "3yRv9vHQ8YFDtdvwM9BXnTob3YZrhT1NGpHGEGrCqsbRPc4MoQkm3aUgz44GJZazJooGKQcU3zS5BRvZaWFquD8P",
  "key28": "2fyaJXAUNhHw9nvxDdn5XRgNK8C4qBehTufAk62xggX91JwxsHnY6PdwEqVfinK2Un9ZhXfvGjLxAdmSFKBDgn6L",
  "key29": "4cwDknifAhp3297ie5evH7Mf31FiGgk2RF1L3zGESH1Ndas9r2M4eXhbcyP7LeweJG4RsHyBR2LnjnbKAtkcvLDV",
  "key30": "pTeTghfa11Jp1yBJYtWnFKwSsNs9XWX1XcoJJBDYivffog3NDQNwd7CSgtowggrS2gWYpbKyn5Hj5UWGdhLZiFa",
  "key31": "4Z3bo83eyNx4Sh36EGi3BgPCkX6j3fEUxjAAjUmo7LCjRU9sZBEggF8hkPJ8TZNR1b5oKNvusaExH8zE7fEUjAvL",
  "key32": "5T7PcnXMdfSBXAgT6KkHezLdh7V5FAS7dm2jjdJawJivtsB2yG9A9d1YZoD36UbqdCNr9BNfJiPND46ud6URap7V",
  "key33": "3rTjUu7MTRdyuffwueCAZRk15D93mYn6jE4CKgMn7uJiu8PKRtFfhi7U1hRahgHHpELKD9uHLLWrHJaWBV6EfVHG",
  "key34": "4hK7tEphGHCxB4NFzmuAuegZcTtGcQFk6rCZUm9TNd8eoUNT9ahovgyjcAyz9xYcCUiMJoutyyXkbXPGjGPMe5rU",
  "key35": "RxmxzutcqDRBW7kGjNW7WMMge2tgWEG7FFwKdzx8f1sYbSh6eENi5c6dorhQpTkU5J8t1NkHfTTLTPXLE1caTxr",
  "key36": "3ycxkPauy8DRJ8YSWZeVubSqEh7DVdddChmhEAumxpRscroC7pt7TkJckoTqg68Kcen1TyFptRhYtp2S18GvVR7R",
  "key37": "2wxFb6nGSc9Cf9SdaUXu5Gv6pPDKfFuMrGGBf2pazhhdnb1cWmQ9SToguJjHBn4eyAekggkAfzJg45Uyzui86ao4",
  "key38": "55mq2d7hsy4mMWAbaRyJtWA5zMAjxQRHwL8bCZBtaE6d21yq82fwXyyVGSsJH2ND4dhw1sfhKZATGfJRLWktP2kZ",
  "key39": "4asoQdewBQ7ZP2LUMsyjvT28v5R532jAzLXoK4WnJPenuKdFFbepWCgrY1vSV3G27Br2NfXTr3exs5Smdw9uLfM5",
  "key40": "2DuNpbEReScZC19oAFDVgXrkhaKW87uqNkwieYvkvLw7NDT99wyWdewMPw48e3ArJaMVLCBStd65bwFe1XFqPdoo",
  "key41": "5GVxScYQdSYyrtiehFDqNeSrLhgvkUsmmpoiXmBq4Abu1b5yTyUP9FrnY3kqDroVkTiFfrkArpBvzL3N1vxkCBZM",
  "key42": "3UoZTsHdBpDnr9wuTaSK7btmQMnK21iQUbgRvV4GpgEBK1HmPzo57QBaS9WPKJNzzMUFEL7EDUhTZ3G133Yb1RnK"
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
