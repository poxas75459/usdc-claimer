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
    "5HHUo46q23GMRu8B5o4ShuEDUKSny941CVaB8nxSLkDxmBZiAnrFkhBmNUaQCBDKt82wttnmWJavmriKjQJJsUfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SsbAiw2pVLKkpdF8hxH2W7kHNWbkWa6X3H96UqWiUSyEHK8gprKYDd8eTiah5cAeXnUF24idNTmgphi9Vi1yNcr",
  "key1": "5dZkW3xihWEhyfpqXv8vjAFDmkTE71pxDqzXk9PdLK6VGxttHXq3ce3vYjeGAYV16erXjyMdJ9yDjt5BRh2L431b",
  "key2": "4MgxMxGmAGyCXX8F5BTZnTrLMXysZSBnw8zhMXZi2wi9RoTpVak3mDbNUMWziF86QiSq11LhDssodN4zH1uKXKip",
  "key3": "4p6ZsL86SYmLgbrKhuFGoL84wwVVRfGtdTaUyumzrDMCH86SCFxwx4oeqrZrJGUBLcNkF95oXmAYK8rjDHkWQtbk",
  "key4": "4qAKR8LU5e7GMQ1LdCDjH2gER9rBBTCbzBkqhpQRjUMEB233wvycES92x9UjJJZ2aut2Mx3nBjru1VCwPZ2ZSYnf",
  "key5": "5tWrM8HKBxnEBGtM8mUgpGyvC9uWjdqhMMF3GFTm5HGMysYhguXEHszi8GccxXsXmVkERVv3daQP1jj7NGZtCzZg",
  "key6": "669WoxWvnUtF7T8b6qtkf81xZN2EpAFYoUkqqWhw4Nx3jiN8wMqy2Msmsw9EXt8uiVFk3iSLthqSxzPgKy73Nso3",
  "key7": "4Xw5ezUt4Y9XoVgKfXejFPPMAaYxY45KJKPaCAuA1wapvvzJoZk93XG4jTBGR59vg1EtcZ11RAsBh1vwd4V8WghT",
  "key8": "3hyW3eZG4q8DAhQy6XnTa9ecAuY37258RCuVX3XbdGA9FmZvqgVCu6KzGN4ZRhChfTcoHDpS9bx5kKtxmWZ8kH9a",
  "key9": "58NzsV4dVcSMhuvgNHnR6RSqjpQJo9EC6waNT6FrsGJLZZtpoWrN4fbNEVrtscKSHJp9orwSGrJmLYxLBitNm6JT",
  "key10": "MJNBWWRtSvEKZJmDnZa5RxZniZhM8FPKLFKbuwAfobw61PEJY2wmnTHz363ZdeuztMTGL6KjSbCHFEBqnbXZMPX",
  "key11": "4X1a2gdKrWyucUHDToWSN95gTTX7kubdDasJvwRmMDGBDG4RLqCxLobrNppQJprvyn9yDWSgZdx3FVtV2juqUVgU",
  "key12": "3w4EFRSde5DBkX4pSvn3JYNLpi772C2PpbhTqDqhsmQeZfckHpGQ8g5QBL1uV9c5baR2jDr8AQmRV4NebZfgu8D5",
  "key13": "2xrkTsQzrvtorRTxHURJzFrV3dyWVREYnUoniipNZ37NggEJCDwarqUGqyZGmUJnGHWtvzAbFLTtcektBcYcM5Po",
  "key14": "3w2Mr7Z9dKf1SGr3GCAATBCQbQsqnPU5eRH3WPuqfFJkuiv1hSepcieQkr4wARmzjLBH5d9yaWkxGSHkDtMBQa2Z",
  "key15": "bv3jdGit8vHDgLpb27iEh51FoumgzCF5QRaTaaVSUrEru1qjT2idjXYVBmL2V9gWZDPfRuqfXJpTv6zRaBoEPyR",
  "key16": "3DppkwGnkWzZ2amBnAxMGhsykhkwkckD5gihsEv2bxfgK3XtVjKUxcjfFSqXshBpDpGocLCbtEjiunZiuunZ4x3t",
  "key17": "5CqoCMrkmWoa9GqoSpJHyTdUbVUWaaRbMwJ8V4Gj6w8fvquTbM4Cps5GHX1fGsAf8gYVngYfkdjKc8iVtvXUp4Sa",
  "key18": "3qYDa8rZG8xFDFcD3eYjZTtmctuTsMJMBbYHMzaJ9149akYzQ7YyukwPyTRCVN743GZysCCMt8YggsedeB3d9auq",
  "key19": "5nuk8yTsa4WScHNdzfhHPSt9ovn3kx6Bm3cifksi38JKNAi2vTrfuhDmp3UTJY9phGybcMZpY7vQpcpgBe7544up",
  "key20": "5rWEJmGMJVbBa5rNddNZHDFMtiosarq3VC5JMx3qtuuntrRBfk9ERdYMjZAHP2zG3vXa3V48geiWmPjwEznB58g1",
  "key21": "51H8Enxyeaj1accaTSv5iapboYpbcptwiwTwN8JcKCJu5ahBai1jgmCHaiZ2hKsvnHNyTEa5gXWmMb4moHfv1qL8",
  "key22": "36nLAhACKsfF1Zs3tFkmZmuE3FPiuXhWknFkgNvYHdRSvJFZLXFjvy18YsGw5tWUGLifZ8WApHU2asHfU3uWFakE",
  "key23": "5XprBZzjBqoYZWEdDqJmnfa5wknsqZThGkLcix52cEgo7aaUYRdQ69gnkXCjUMBpv4MLqqvAaUrTwmLaaCJdgKt7",
  "key24": "4csB23Sn4uFKgoEKi2hTssvrTbdZqGBXbJwMc3uDmnJxSmU7oT49jSi9PCoWh1RN81GQmBTnumfXahjkTeysmpdD",
  "key25": "2nqAVqdm64uFT2uQEprz9bXhmoPah4jzviDDyccVJ18WQbW1CrVDXsVPgkzV2TCF5eM13bJC1oNsvps7GxsBeMbS",
  "key26": "3CFYGbzQRZ8Ub3iLBB9RdGB72EJzei3MKC7zbKkwaBiTUFaKk3STZD5XJwuTzqLDNr7RmX9pxZpEP8ESWcJYXyU",
  "key27": "5T7DJ4i6vfQ1KGoqQVxvsXH6Qh3XV7zrCifa3ypUZek4fKnPJFdnQvLYTDQ5YN4DKxjqE83rXh6qtbwk97qVKe95",
  "key28": "5u9LX7TwW3MMzRhc7444EetZDaLM8UGaY1wFxN5NaBe5CnrPNomq3aR5toetEziEaThyGv6koVvSqVR3rC4fRxgw",
  "key29": "2z4Exmz1AcBRBNfKe4Sob8SbPLnfpr25VkTL2LJmT1GBYq1shqppeZTA4faQpDpV5qp8PNiaL6wtSAUXWfVFiBNQ",
  "key30": "UmMsR9xeXpb5K2SJjC1fhyn5s3VJSiaYB349F2UTUk6RottYHejpSnZmTWK6o43p5AcCP1gq4KfuTG8p4EV6Mzi",
  "key31": "5c49Bbr6nGVtPiXZmGDuxzTB9hyoedNqvcy9BBgXKtm3A5ZkDguRnw6Z5WnVi8noAhwCST3VavzWoMh6fZS5aVrs",
  "key32": "5u5b7DW6P5LCVhHKBn7cqtQAP2oyUXjTYZWYxq8M8pBEHuDmbZzksD4xjRK6JUrK8HpqL1K3bj6UtHT7mDkXauQd",
  "key33": "2bsXoBeseCFMYsXZR2qA9bqckDvuKDAdEMor4ACkjj3tsKCciWh4i5gHeF5GEp2EwK3NRYGeBRGPKGRQqnWrKAF7",
  "key34": "4aEjcUAjMWFBuzwU175q5RW8iaUaajdP6VsE7bnfb9KfnWxMdJahG1uc6F46FR7MgWCt3xVf6fsmwMhb8GYLbBu9",
  "key35": "31v8v5Q5qA4Tyshzsi3b7Ni6sid5tksbHdHiH1jrmE8FyWjUu3SV9NfnY3cbe99gyCcgDxpdwYhZAHAp4m2PmgDc",
  "key36": "24UW8ijMchXE4o99nvzd5cimrgQpBr2N3PnE1f7V3UqahRhYHsRaR9ii82vy1WZWxN9e9bMt7KTxd9C6JpGuYUw6",
  "key37": "2JA8rqTzkjuJxaWeqCJkakUEtBD1GHAjZVd7wdA2gJGBevjYfeDWbegHCy7q6wQwcWBHg52tk2B6Xp5pTrFjbWjB",
  "key38": "3wkiXbCSCwhAxmwgxHGobAVYgwp81Dw96GRbiXv3LRjAGdUtWrGrrpXXx2Z5dF4shiSvbajDesNnmjncTnZAgfpg",
  "key39": "2KxEKYuG7xgypGorctga8DR39TmvbudwzhVs3jNYEfexcNQJfnYXYNM2kbiwsAnXtoFyFP7P6gK8wXSNJGDkXkRr",
  "key40": "5V6JWudbXCr1spMXpLCnqdtQbX2QEd1tssAURQNA3sdG3Px3AhzX6A4Q5c8SXAsLUQjxAgqZvQ2o16kGEAqAvCCs",
  "key41": "21Um3BPDositd4jcMXabEDz6n55QkBo2YvqVUJier48MMESCZQ3UCw4Kiy5DSxETSn3X5mWLQAMgBLBj7wCnGxRz",
  "key42": "LCFAaWwKcbgAbEnnjQNkof2vSZpJ8vkQXuuhKR8SZzYcXtD1AxHrJHr1dFc8PThroFb1a6sFw3v9YpA8vkVrwVF",
  "key43": "3zDP7NHyvXXF5KDwnebumLisviK8WNJpWRRCmFngS9G37XgCrAJtzyYR2ijhrVBx5r9mTWjQopegPixRr1dj3Kav",
  "key44": "4by62aFtycN14jN2WCzYdtTEBRqvNckoZBySPhhTp318iR4o73R8xANf3jQPxb2KaV4j4kQm6XDhVcjtzmD7kCVM",
  "key45": "ZncdgqD5D3urrAdr4h1rr4u5Z3pwn6XG2rTvkAsaEnBduDCUrpRD8sTe7m4NSTVdDGGtLosammse814HTU3BXZ3",
  "key46": "2aX45URaBWWnQrikrTxGRkweoSS9sonNf4vfw9jj862YXrrASGzVYCSRsthbhqLFYyqsRrhG2iPSpLqJVn4HTKCA",
  "key47": "td66FxHSRMVaCJxsBGVbUPMxkavvHr6BGEDgXRJKaL3AzyoFK5oMuvEo15JqqwjBroeuEidsda5MayybQfY2WWh",
  "key48": "67Xg7x5xr5GQThbFiu91uwLdTjhgPHXCvNoE86VR7W1jTNLwTfGxVcwmEctCM5kukmTvLB1AvyDhYYtQPtYxe9hG"
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
