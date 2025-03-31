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
    "5sYBzH6A5sfpN98oCqFE5BtYUKQaD4zZ9eCuWLTehJq1tZB96jL7ncT1XmSxQADDRi8YDTVRLxMSH38FmHaDFs2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w2r9PcaiY9b3wfZGmkGYzXKcMw7T8gREASs1NCrHF9pEyq6eCdR8zpWunzMTxsfYrMC5pYXPWpENUA2FrJJ6HNk",
  "key1": "36WaPRyidLn9yZSDWJj6JepyDD5bF7yUYvjHEnxjPYfrd3YHq5fb61roPTZh3agCJ6BpUKr6vs7c54adEyfT6tNn",
  "key2": "3VSyi2WVme3sBAESqhYBmypny6hzLLZKJ4FV46aFMPHFbJex8H9dzV4sbUApXotw78UQsg2M1MR9xPF1McfUHU7X",
  "key3": "3Yt8bKry7t2tELGVoH4fUtrTug93Jer7kmf2kxudSsPTpHTjraN9pVwVGFvdam5cpa37u6EzweKoPMsW6KShwLsA",
  "key4": "4DKqCGX4cUQtz8eupn4BYstgvpaomRruXEd7Dhn9jthZN8Br55RwoyjY1Q3MM7Jh65mQLXrkJxKvLVYj1HnLGpHa",
  "key5": "34uh9EZKH3PBQDqvTBeJY3gZbpbe2r5nkZVGZKdm9FKsRxQJUh7n6sEhBufoA1KXsojy9e9sx4aKbWaXfPC1HXUh",
  "key6": "5sLoKbKmhmgWF5NeHVsZT5WZ9siZbnrNdVCfh4cnpegmFHy618jPEQbfV3jL69SM7hG41m5STaQ8vEm2PZX91GEn",
  "key7": "MBHpxc6PMfwLgXUrtKcotGWedYgSU9yTRViTPiQzTNb1ZrpcAepCv944BPofhWxw96isLozk1tgbFNWCNDzwL2R",
  "key8": "534Jq2e254THVUusNthscKqjCbi9XTiTz3WzFUWzDCUoieQtX3VCd3ATyN7uzPKvECWYiz1no9nJLnqDqUQnvpBa",
  "key9": "63akKRpZnzPnptT3mt9mvhyDT5dfZEyfeWcaRmeh1yj6c3i5qxLgvh9Cx3FcQn4Jej3XbQJ9FTTCPWcbz2M6BGEy",
  "key10": "3fhwE9yufX2g5SYiqnttpF7j5ta9xgGxRyJVcfZ8kgsex4x6ty8F4KRGkSN9PzyDVdRgzoGr42SYeqqTvaFcGZPM",
  "key11": "5SE7vd1oVABCq1nA3T4HeA4LJhbvBuXNhqCQumiPUSkenGq9vKSVfGmB9AoYSj4KeQ3JvrovL5k1qQEZ5pc2SsGK",
  "key12": "2bfmahu9fNU7ez4d5jEFqbYRZKdagwef9dxgew1fXaVdQv4WSxbH7oMtUgKpSo3Z7K2jvHBAwb9udnC6u3mwRqWy",
  "key13": "5dFgD7aNLJ3dp9xdVTAqZQkAuaJGDf66NJUBGMwHHZjPUttWAbis6QgZJKPLduPeTjUgRLVLXNBho2dsBc6cZpLz",
  "key14": "2ZfsiJx6Jfj3X4baN76u2eB27aYJoGAWCEVBF2ro6kFdPdCw3HvEi1Cm2Ee8BaWjZgLqY1yFnP7RrMc5BTNXmfVr",
  "key15": "2rdKyhPr52voZFFN5JDTY51Gqn7ZX5oTG6yFKAdPukiseEp9CtVHhuunXKhWhEp968PpWhoGrhVndusV4SJuPYg1",
  "key16": "2pC8jLKBgTaQc3jr3FRDotD6bbxxcuTiK7ChvbgFypjg944Q9Wy9YbJiaaHBGrRYMHocTk433Ex6YYxUYfzEzFPD",
  "key17": "cYZgdAiH6eSKNvr7aKkCBzcbTpYmG2RcssBeFCf8vUzqVEEh1vqUooNGTV3mV6MZnYo5TXohkovWkm6K8w4wGNf",
  "key18": "rom6XuJTMYB1y8RFhp45S17LYpP8Cs55Q4BdiAaTgZQxhm7nDyM1LDaUQuFQXA6gTmRh4LaF7WAuQ6qwXwKxgo3",
  "key19": "25N3b8c3L8gXip4eaQjXNEn9QRVXi9tARTGGstSahTGJpGhcmZdzzBoRs8MndbB1Uc83YDcNQdnEFkecNpXLQtwq",
  "key20": "3vWcPAVNgkYndswoNMYF4L1Uex1NKa4ed45eZgHSTnjN7z9MVCWy1z37n1y6HJQfQtiecJAeZbqEUiPZtQybyWRk",
  "key21": "2KASbzjZw9h9dCJtK54nVX6RteUvJVd7GqXK4r9C8zSaErAbtJDw4rMBJDUFPHZC2aGUmdppUY2htspNdie2VphL",
  "key22": "TZdu1sCpNq7A185UX5pZunPBNzFtAJ2yA7WdmV9vD82f1KPwiNBVU4fzz79oY5nQpzd9sRqMczmNEeWbVKbCe3c",
  "key23": "62Mrkvw4MvExaXtzFmvaA9RzQLkeVY4p3xj48CD6Jm8qX3ciSdLkrTeW4c4WsoCDstMMDdLKVLyJ991oGANiiC6C",
  "key24": "Hep6UV1otLjpDNvee5mro8v7Wzjcbx3XYRzcGt8rLQ57K1oLDt7H9Rf76uRJAqyC46QxkESye5WcCK7eb6VwZrV",
  "key25": "cUJ5D4JpGYt2TeDdXXhDMtxkNLBgnTAmXYomTJCDmyCD7B3ShUAzLZQBNC4JhUYHHxHrQNPyuomNsMZcNBCnRWY",
  "key26": "3FqtcTvBtAXGjhaxSUM15Wb1xqiogfxDdFb5NHqr8EieWGX9y5ebT9bU2JgHvtmqjFMGp26iaxpxSGZmB3HvDf1X",
  "key27": "5h7Qyt4G4ZgWms33numRPmnTHp7BjcUmKJpWpQLYv4jDxNHkLCkEaSQMNMzusJ9DffAB9QfK3nv3jnKG1xEuqyhB",
  "key28": "o3jns9qj31SLsR4xKtDi3wqgW4hR2ChNzYqaMwZBStxTtyToMCuxFGDLeQHK541qhAmN46WRFyL5uoScTsyjZHH",
  "key29": "5UUWbfxtapV38EyXpK36p45xDXvkektj7U1FEinCk2XKw4as58PYgAQQi9mFxnEABrBvfmhiwdtY22YNQVB9MBwE",
  "key30": "VUgpiF1qLL876XL8MwqzKzPQH15VVS2onLAgVCmZTFdBmmBeouxuw6zeGH5Ef3GFtVQEu1dWRpJu7LW18zzx5So",
  "key31": "5c7JAN9ADsLMDRGzth9cCXMLLrs5Aa7iQ1ymwDX3W9sXm3Q7Gfh5WpfhvZHnPd6FuUUdMZxV8bfH7jN2dP32S2et",
  "key32": "49r2Rh1EJWvajCYAMZPPXcHGXriSWa1zSmoYxrzBUMc9AXuu93c8HaE73mCVuGLjqQxZANRiwgeAqsfxJWGgqHB2",
  "key33": "3b9GiKERVhp6FoJV9aLFS2sKudYNLZahAW3prPHZkBwo1rVjP5eRUZPk3UbWYFhh54VkeHSEJdvCyRMVR5WLhkmX",
  "key34": "4VHyoJV3C44suzXWGWEBDqzEbp1qBdCt4uXxWgHozUfwGV9YCK5dugFamSdm5DFuyTMHZnVhCHxkYmPd6iV2bmea",
  "key35": "265E1PdVvwi9EMwHwVWdJN17tKaVhYKhtiU7SHYWafL7QapeM1A1b6gTsKRAPVkF8NV7q7YYwAcU5o7diynvpzQj",
  "key36": "4rxHJFgrNLk1gNvqUUYKKUkmbzi8euwBvwhhP9yjoh7wkexTb6sCYc8RCoE16QTUT16TfbPTsCskiJCVbUWeuAWr",
  "key37": "3KCNtm2DJnCz33hUnbEGhkgn1E94wEZAYUP8KqnPXSYCFV56RFv9Y22NzJFDAU67ZdiAN6Pa4YomUWWkCZjpUDgC",
  "key38": "3GZE7Aiv68VKgMHR74oCwXYf59ZB4cXFFvFdcXLL3GiPp9UvdjsgHihgvMmTAdP1CUX4GVXwGEHY4J21AqWTg8LA",
  "key39": "2DXfyy4VMXAicH654LDPQW393BNaXxUskNL5GArtB4jZtWHSCs1YHrBpVgWRKSyLB8FFQrA4Pg7E7bmqnRAXVgbZ",
  "key40": "4JykL1e377CmVjNGQt2xyuwoAP1rTpUYe4jvVrkmj8rb4hCDngJ44RK4DHvbj2Ee9GrcNrvKgWPW1ieiZsTbPWk7",
  "key41": "5bMAnaufsh6bA1VCaZt5HV4ztAAFgs5KcnZtwDG6dRZiuhjW7yoaFPw1h8u2G3EFQojtyTSXAUJs9gv2Ewv1oBC2",
  "key42": "j8Vo8HKHeGLYy9zocfGXHYNyGeC1yEFscb2TFHYjdjLG5FEFGRucjiGdhXftjQ5yhwy37V7hXgCRyBxcFQky4wn",
  "key43": "bh3nLQs86VvbdxKJBQd41CfiSosw5aXEVRV3usbZhxBpwYtJvEKzxAnyjD6mxgvxesjdVaGoHC3bvcC3d9PZ87G",
  "key44": "39KRjAu5GiDqvoEAYW62TrdG5ApuJXegtUYwm3rREzzicyTJx7BEZFc7AWySsXEmejjvcBCFKxJDuWYnso1CSLd3",
  "key45": "24JwgRS7gwVws3F4qWfTGyRmDY5hu7qsCDDCfBfvBVcMLiHsuPvDcu86Fdn9M5aQdvs7QitxUGDDLNi6M8U1FowB",
  "key46": "4X5kmgdQkF5ZExxEVgVSsYjzxFfH6g1zujz29VLFVhEcV6bYHFQyySvnR7YgjM6uZkxkracYAdkxYhXriNCkhvjp",
  "key47": "YgxDSKudy4qRUibyFiT565y4zbQnmMnPnMEFADrzB3Do6BKhk9opHqChAUMaY6oxeTpvFBrjczw96aoL5Sdve53",
  "key48": "aEybdt89EBuQo7yFRQQHDsiMHeWqxcJgPVTziWagdCEm2RXatoHJJqaPAe5iTX6yDWW7taD4W1fD5QUfP1qiTeh",
  "key49": "5X38FYq2oup5Y2AfSjW3QVrubM8tSzVfJi6qV5zue1NVVq6nLQennAKDMJGgoEbMSuH1BwSbDABdQFJ9vkXP4b3y"
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
