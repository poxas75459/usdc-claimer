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
    "2j5KA81GhR7J3GGZqG7tZ98SaujP8G4tYCarn7zdwdtxuSgXzBbdEvFRgcFhRFDAFSf76DuQ3Y3cS56SjhGmiXZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52akDXMb9EP2dwjekoh3nVwxFycrWWkBZrhgbr3uB8zky1zWkbckMJ9xwTUfJeH7CFSrovDAdFdsZc2Bsmgsubs",
  "key1": "46ppijHUAmwNHgDv8L2DwwrpoCo6YjWDPcuHuFDdzi8parXzPxZERdKHc3ypb3648vuh9VDG3pzuYUcNm1EEAhoR",
  "key2": "s9wU8ZPzSpgFe42Sv1ip6Caf53pGgiSzNw6BJC6MJMmrtjdN92piYpL1fF8fBPCaAinp3PudZMBkatfx7ts7HGC",
  "key3": "446miy9dEAtDCHJZCTrkS4v2aJrt3gVRGgRDRfzcupUdzobVbUShYfQzRF5FY9kmrvT86V6AmXziMjmnfE4weebc",
  "key4": "4PPYDztjZEvSNbM43SMVmWvrwdWripjH5r98ggURCSdE56GAQoCiK24QY7Ef4GQsE3MEGWXuY8SVhmSgzB6VstfT",
  "key5": "644m3yWoJnSSJMZkNuPoxzjnkbmq9DkX4CdD5ERPjcubjauDCZXVTrBNTRaoVEz26CnnKeA1F3JEkARX3YfrqeU4",
  "key6": "RzoUN57aTCGu8fFwMCzUXZY6Aujp8TzCcFeKoCnQejRqkubf8AFc4ybjLUe5vvxVfMgVABpf4aPEbGQhakRXeE6",
  "key7": "39b7HdWBMH9Lqt4wbMTBFTKmjReEWLkXfZUxM6RcCRu4bVWwtTEpZnzA38sm59pKuhcMS5rAVPGWsgVasMpZVLuw",
  "key8": "5yvJCBN4CeBcRiuMAbmEVeSPeMkgE5UdK2rJJ4rZWnYPJgrBUNfFKMsA81L359woy7XCoD7xvGXXfZHk4eYGaBEh",
  "key9": "5yY2u5zVnSsZShsJ1RLtxaSVbH6eTneVFmnthEFxtP1eT4zxPdBcGjLUJpdCH3eKjzVyA68RXFJRr7F7UbQ5oAgL",
  "key10": "5NZH5guBQPC3QTkduiebtWRBx9W4zeZrRR17yWu3NFGRnsZh8bFahxq3RCECAXJtrZ57VdunsUkccPVGCEXseTtA",
  "key11": "sicgccj7L56L7TMaR2f1t3M7XQMcx9zjhsKBw4gosJ1gfEAseHbK9BjWMizFJ8KKqoL67j969PGLXRif5YpLG8S",
  "key12": "2CbHrTLntRhYkQFRaNtUCM44cW71E6tdPtjZ5sEEfAwKYS3isAcfN5xLNPjLy8ybRqyZHMwPwUQ6HwS6458eiWqq",
  "key13": "duiCDMhnsiUWobBAajtv2xWgGUAQKfs2x1rGvZWpaU2LKdMZJr1YfohnmKLBHxo5MkowDAxiSCyiH1ZsfskaD8r",
  "key14": "2xLEPPSjMgt46n9zCcYKRvwB6ctZHGSZMoqabX7qQAkEPAxx5vsHSujTXKkTCWNZGk5iwwLTd7WHGh9ANpSF43ef",
  "key15": "38MmiKc3bXcqasgYUtDPRJNcP4mwxb5P8DvtdVkCX7dJpTchffQ6XqMeTKxxa4BkzmqwVqEo3hpshmD9vk9ZZeNe",
  "key16": "4ZxHVwNgAJyAeuPnUia6LoYdZrdS5JvNGYMgUhYDuk6J9pkActPpdZiT5j2HRzAgE6HSLCE8P9gSB6sdc31upFnH",
  "key17": "dPaQ4AbNup2tGpGGMkMdo8cM16DGKYpPwWeJpcWjxsxahvEvEiwQQt2PoBbBFeXk5cHFrtheDpiCQbPahFTHFet",
  "key18": "uQ4eLXYgUdt1fV89rQpu3ZvanbTdhXpZXHUuRjgpnrvMKgSXFsTSbJyJkc2Juh3yz5pvwKnjiaBD7qcyfdJgZWZ",
  "key19": "RvSVswn7aHbjm1R6JMWm8YtKYb9SaQhd5RKZxL3xdEPsJuKnD6TgmskCFzvss6Jc5sxjcA7MtnbXcHkMMks8RCk",
  "key20": "5cqA6bUJtgHKi4UP8PvAHukdpAXZmcpNA5RBnP1sxkhMokchg6WxSCDnjPDMvwynNrrEpRKjfmvPPhXfGW879uyS",
  "key21": "5mRGEw86pbGayQrHi8WGdq8yrQp3FnDz31m1KgZG6uxeHQYd3P2mLYHEFKqiGLdxe34ptndK8cA6nWNckD8sR8ed",
  "key22": "66ofnbS4ktP52AdeDcqYgYQ5nNdr4aqPQBGk6tnvjSo6j8Cqaun9x79U3brGQ5AUN2wV1bDCgNPqb3mR1sHhcDpg",
  "key23": "4c7yNoTCR2LDioPXUDrvbT75Fk74x4j7mpGzYeCXy8NSLEd6MPpcm6drcaKSnu2ewEnNuAifC6d8D7SsTMnXGF8K",
  "key24": "3r7i2w9nupZL4JPPUeaN1vjJx7oWa4Tv2yK8RUtQUWieVCq7q5mgZ7T1oTGuL5bVXBbcoCGB2GMiFsZGd2yfZ371",
  "key25": "zWqYnFDzu5SHPg73G3uzsDCk9od9D6zcb1Z9HXhJPZ88JMsY3ctwDwc1oUpWrWnuCdLdGCDbyBktEpUCpUXEP2y",
  "key26": "35AbbzXaDvFqZ9En6gGnvUdrZGX6MJmbcbKXQ8jTWXTPJvqf8GnT4CxadGaGWn455JLpGxigBfwAYFTbwEYUhU6L",
  "key27": "sqCQdfEAMvELD81X3ZE66xbHxPZEbk9fEPDQzRWQUaTDastsRdbCrxnAEv7zNLKdpw3dyVyHMoKtWkAto4TqQig",
  "key28": "3Be9p1xjQYyGBJopQAit8LvzQeAnkJWfPavM1BKSeaJjCZfnhrCMNvSuamn46MbK8d6JYcR1e6sGAkPUW2XPuwdA",
  "key29": "d3HmVMNq6FiQkPzSrooPgqi9ynXnqExpRBwjkHbVKTE2PiBzQHt5Qpof8GGi5qkSBeJETYnrLKyzn81TwFVpcc9",
  "key30": "DhWJyRz6PXpDrCCZudcbG5pqT19hU96boV5BwEaR1M93vvura37W7ZQ5E22SpxxCnNxxYMsmuzMJMoYTqPoQGrK",
  "key31": "5jhxSPS6JkN9y9HgaMEhd3gDHUc2JY1ExtY9VQLZCB6KYo4PmMYn49BhzqbCbZtmaNTaJRA1BWtckcQU9WrfsxuG",
  "key32": "446wJxvNmSgqAckxxYexww2GMyCKYBFsBCnDB7pq7VvsMppDqc3vb2BND5cTWDU77ZyARjEsN4CwAebEmXS82QYp",
  "key33": "2gGRzD6cnQEBfvvzTAPXLvHv9EXKdd2vm7sXh2wyvTWfKqsSHP2DshszgCT9MfrrwBoNApzS5SrEP1CEuko7ttL4",
  "key34": "5xFwipcxuoUxHYc1wBTyA7pZoB8b8ogXthnDmhqeMek7HLjtde1Xh3BTWxwHm1xiuxGN6QPK59PngaTErfjst8Xd"
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
