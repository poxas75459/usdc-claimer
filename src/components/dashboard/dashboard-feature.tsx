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
    "4yBsu1HEnnU55FkxHLHA4qjRQEADHbatnbTcopQZ79eZqX7QbU6PQDDgdWZHeN5GcR94rRyMMNKVqfPXcwwda94d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u1i5JxLppWtZ2yP65b78sLmETy63jDLZJ1qm7n4b3eR3PQvhhLk85kccfbvjpSQ58TYbh8yB4iM2Dr7H6gR857q",
  "key1": "pe7k5cmGTa1wFhy1M1k4Q2UJFBr5nQo5ktSMHaX415Dbv3oMsJ8bYj7R4BUBTi6baAWWVj7JvZbD2SKk8xC986Q",
  "key2": "5a7w2XxZzA9UEonEbAcVvexGUs49Rx18ETWquwSVKpMfRJHeg1eKHHRvG75MuUXcwtuWFmXaDMT5YkyYoow4y3a",
  "key3": "nvQiK5mYttUBiv6ihSpE5SgeEr6XXaEtgBonYWnMxitnQ1qbru4c5pmqSZiwu1JS9bgv1ZFomdXzThVS1ErTZzZ",
  "key4": "31LWWTcSGjdPwdME6MiM2KBEpCXUkrd1PygpMJq7i84vhKq3CAQ6kGTtJj1zLmoQ3TYQD9AoxarqwqTWfmrB3RCK",
  "key5": "5yYkyDVEBHFdJAvq6hVKxZfPXe1JZm9sB7vZ4UPprL74RzLmXoQr7o3YpF9TaYQDx5VhCaUiphRnSqokDt9nebpM",
  "key6": "1JpJKHDA9szmDCrM1MJebVTGnPaBzdvjrDXvC2PiJLLZkfWmMZdoBwKAgeDfh6z9CY7EvSvMWV1x7qNmW1aXn3z",
  "key7": "4HKvLZnveNMjD9A4hTX5yV76Nm6uQ8JyGLJv5Xg1jevwbxkxR3xdtprvi4oSb9ua5aMpECtM4udEGwWNMkxJiegE",
  "key8": "2pEBfEBFzuC2WnwwXGsZXGoSUer5U2rW4ntyMj5DAkdzKpdb9CXv4ECezQfYXBb7qqRdR5zZz627N2MoJ3JEX2pY",
  "key9": "5WFzFLd7tRBy6VEg5FHuSC6ZdbJqsbaN73UFRvPLrHFVDbY3qnwS2h5hAK5VTA1tYzwhB31w48ywr3JQvzcnJVXM",
  "key10": "2pfzJXkqfSH4FsVjYcjMYkwSR27j9SfA64Poxs2qfx8civSC5S77CL2zWBvFHwq1HMk61KnNKtzuT3wJq874armt",
  "key11": "5mQcw525HQiNcnjbzNdSy4Bcuium59MiZ7sy5bbpUXFD8EczHHKuVhQGLf736sjLE7PHbUqqW3u1Aa1ZwtCf43km",
  "key12": "Ap2LySXd8Yz4giJAgYoxFG3MdHpAkQynSFpfGeyHn1eqXmNNnog5YaPuDHZawAmkBhwLg1P1ibix4GKntwREWC7",
  "key13": "58zvuYo1Lq9KrRhtoWhFgMtfhMtDvb3sY4iTkbnb4vo73MgXLDa7v6bVYqjvxknTHPsXxPew5qt1RfAoUQ5kf2ve",
  "key14": "2Req7p3Ps5QiTwvXz5bN4BdM2oWMFa7Gn2sCqL6viz7SpUK3P97p19jMdsoyJHcgx9yEEZhymMd3kc1tR2HCfqZA",
  "key15": "4cqdguYPwhocC7PNL5sfyxDTndZdzgs7RX36H4VPfmH1ehjssXvXEkPqnFEyjGpfLm8FK3Vk7zR2brH1XFzhMTFk",
  "key16": "5tttT6Cb8ZfPMPRJ7mRqh5npLWJuwL2NXVKqJuh1dQ8J6Er9BZSAYAH5miZcrEr3feFBeWxAK2YV6uMnRQNi8M6q",
  "key17": "3zrkTD1ZKvEu3o6WvPEupooUjSftSrfdRkXHLxp7kxnsbNiCjKJnnQRDzveim3Dge87L61DtaYiP9jW5Wvgk9yEz",
  "key18": "4omJ9ZPkbnZuCMesfX9sXrjNvDoDYsxoYny538s6fPmTWUF5beRGEzUiZHKWSxPASeq69pj5gfhV6vyqMCumobwK",
  "key19": "26T3Cy4HrvZ1nbLkkYB3t3Z3LMCP57DwEA6iHQpiak6XmE5ZH5K9cVpTh7bkbfDnQH68kmg8cNf7r1ZoVD4KuxVk",
  "key20": "9NHyY367SJQvS3y16gG6d3o27Q7fJXRfPadQXCyoKs8BJGzc88UcmJsDxznm1MFE2YeJ5CSxHmXMrRnmu5w7gJZ",
  "key21": "5L7aVBaAH1WSDUAxGwNvzLECV1uh6of8VwSiq9y163gAXEnt8wtarDLQ1FXyjLrdZe17YwWjZraSyFNsr7z7n5vd",
  "key22": "XgvJTETfvrZVdvaodXYDN1AQYG2nKVh9AJUQBhuzFW5HY6rPswQsph2Kh1czJU1JP3sqo3wDV1uEWSHqUUii23g",
  "key23": "2BeM7b6jQjtXKsHjh5hxNXRTzFsrzudgz7TXqFFnM2k9yFiZAURi93dUha2PouspGw9Dbc3Df9N6CNhmyWSvihb2",
  "key24": "35eFbBA1f2Mqdypk4JFjeUWc1QyrzHvu5ZKHPZTQ4qAoQmL9BXuNnekSUN12SyznLDrQGEcpYo7Lhc5QCMUEuTaE",
  "key25": "PX8oNXQUq9euPuCs24PyULciQ7dKPxY9a2uK9XVfnFGmfoGQYfpDddeNv5yTwX5mzs3WjJbkEjgqMN4DR76qXot",
  "key26": "3AvchBMGgx5Jqiw6Kq4wrQYwmMtXnPBSMwzZWaBCkco8GKSsWFrAZwZboefvN2JAKK5us4vCCKePLufBhvgJguF2",
  "key27": "4uga1pBQosEwsFFgY11LNAtfnUEwJHJ6a2NcWJX1WLV2YooL1V9ofyQKKp62F5oWPgnfLm9JTUmiYDZ7WbKHkNfT",
  "key28": "4GkREfm1UM51W2cvDHe44snA5gw6yatpH3TEwtPtBXYHcGffXS91GjZtGsnvLGNVZcNpRLdfbVBcXehnzUkQTy1p",
  "key29": "64dERDYvwGb4NW9957gLEBgUZA2VkhMLQPBLnP22vMxULh7ntmzCva29SZyyg2Y77ot2mt9FqCXnAcJ2BZKSuGnR",
  "key30": "ELmDzwHRW4Ggc5DF9oLsTnX9QnY4WqNDtsoTYdUZEjXvvNU6LTcwBVB9R2dDEmXVSskbkXRpMdTHaWvVVbvjXBh",
  "key31": "4S6zTPKMZauKs4zeFPfz5yYu2JcFb6yGmqq9HQrtfSV8jJA8x7h8H14e3kKm83Ti2GnY6nDiNEHkw5VHBC3qk3Sn",
  "key32": "22NzrLtPFbBvxyUF4U1j4Feau6U6XADfa4JB9JLHrn2Qu2MNR6ggqjDtypWpaDezXVXHzLzkmbCzBqnNfSqoDBMZ",
  "key33": "4iRue1yRgosBf9r7ZBAGB6eJFMonzh69M8dv5nNFZf9QpBrVGjD342uXGpfbhDcjjBLYXgh6x49uYYntxoT8t3vw",
  "key34": "44Zswh4xwKoicRdD1BH796D6JhCHwXFdDaZruVx239d3vuguFdfbYp9yhBzm62HnFgoTgHCFgyNoqZg9k3XfJ3JE",
  "key35": "5sgzito7oogxutGoNNCr5fUVyXTSjRdx2ZwPRAPrNvLXvXKNKfhjgDyKoi4dcCENGYqiVYtfQXcMrtPTg2Rr2vqF",
  "key36": "Dii3fMDNmN8tc4627YcfsQpkTzJpSmD5m8xs5eEw6spKzCdgbDNgacUm2reMihC24Pn6u5CaYFkeYL7bk2vD1jp",
  "key37": "4JpNwC54qtuhQR4rzDtu5HV1pCvTLuNPCFpRHwATyDwerDTDdTPemw5Q3HwwG32FUFTjKxGvR8u4fnccbVpnXUc6",
  "key38": "2gfu1w69nzMsxp4W98TLpfP1ugdTBCLiwU2g5HaKdGzsnqNPcqxmZzQW56vXz9ymQYiCZm2mFwErofNKRXgo1wmk",
  "key39": "5b1z871q5xqe6L5aPWW7VWRATZJfx6fvaemTwFFkXwvTV8VBJ7TmCpA9pEj7ND12es5r4oXsiazVxpq8JnNSzHFy",
  "key40": "3H12sr1T8UF4bLWpHx6ChmWNSbATFzxc2Lg5fN9ho2s4NeNWsAiX5XW1v4EzjfKz6T7vB9d5siPn8CV2vzwfm2Nh",
  "key41": "2pTF4FtrUNrBWEmob1kSA6PUGusxFLgZRUKVubJBVjY3HzJHSzXGFBZvVXLDzBSRJM8GJEBqaxABjcaoRV7qD2Dg",
  "key42": "41NkqCzGxesokPW5SYHgJeWLMzVLo5kTPkDLta2qjioQtCNv9nmSMapuMzWpd8SU8ofhLRqBGJUt5WMQdJAzBV13",
  "key43": "41o7oNtcQ7DGjgVgGUMYX3RNXvQ1MrZW3Fu8nevrVHpy4UNY2cqYz5PaKp5L711hMFV96Ak4uwsvVTdtFQ2k1sdk"
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
