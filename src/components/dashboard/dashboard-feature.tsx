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
    "3XabvCrtm72oJaQMxvpFeSubsqxr1yARK2xdzHteQQy3theMPdeFXYJZhWNbsnwemqF7fcwhpABU5PCs3SncMLFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TBGSLG2xaek9ZiNKRNoDSoBp4XyqaWJVAtGPSwL8AX4AgxmLMaR1jWGUB9xVo6h5YLNdj9UbEq2dS7eQX1Dg4Sd",
  "key1": "49tZW452jpW9xgcmm67WQuNGkmrR6MEegzy7kYkF1MQ9qN1QWe4gDrK1zb4tGcYaEzY9hr8Ttfyt9ZbERCyrptPb",
  "key2": "SWk7zxJMDgC81VNQgXzCcJth8rGWUeNAM3FzNexqsCW4GqrkXQeRVtjy2rTHGTZDpB8gi8bgU1KXSE3Sjygptuc",
  "key3": "5DB4uXCkGiA3ZiT9qLuS2xa55sYknzRTs5Tzwf2jrPcMDkJfDZ6qrgWsNGhWrrue6veUeoothFrdn481pSw6kR9M",
  "key4": "ncodqT7LYqRGPp4Z6B3VDSg4i4aA1TdvZvsR9eGGyV75zrui7ybDmqcJfzqLCAScHpbr4YphSCy9stYcHZQJK6r",
  "key5": "AqjyUuRLwZavR9S8aUu7SmC1DQzKetwpg64kHRw7PyQP3q8VeWUvjwntQeZNEjDZiechdhcn7ZTA6zkEWBsKdQr",
  "key6": "iGSmz4P1zRzueSCfg16Uk26ytGQ8p2cnf8geNVEpnwjjjMSBMUBDVxGfozdc7VwgNpDYrcvWsdMixPeJhLC1hyU",
  "key7": "NJhWXqZ9amkFuvNH9e8EWL1dVSGN4ThBNmqNvoqzDmSutRgBsdHiwi81xp4SPvXjt2kMbmAGmBzzUCPLxouSRpu",
  "key8": "jZ27QrhQtJjpeECPx4TAsQSBrvPNjhdnpfj6wwVTtxmJnFcFccq5TarNSapFfEAy6adB8dZh8ojp3edXR2MnvAq",
  "key9": "3XDV811uwFiaVoDiDj9xrkmvkQBDwiQF4WUeRnih84gs3PFGEMskYDdBuz85MV96RdxsvckuafZXvnas555MTjGm",
  "key10": "4oCL4bKDGjvUcJvwX6AXHgwEkFadMgLnp5Q6cHnndDxuKwSQ8AqUEDQ3T9SGoYye4Lf7kkHaS42hcgoENRmA4XnA",
  "key11": "FjAtaesX1zoM26DWpLUnSS37QFhn7uZF4LHeDnWVJuNyhXHGQPF3WXhRLFqn43asWajZfDih29U7k4YqRZXCifJ",
  "key12": "48i64UfAehefAKLUrij4Jmei54jrxo2tLKt1W7UCSWNM8H4KiXJuFzpx1jgPYjZgdQfmDMNWrMubeistWq1V6Zuh",
  "key13": "61shrD2MjqB8i1LqYMVWVW4GwCX8164sMMeoPt4rGMKSdwbwRy2HrqZzVq8JVQ8GpkWGgTUa14kiiCFj8pbxaP5E",
  "key14": "2HabX6vf3JWhuYxSF1p1qq1iFZAp3xRrSKEn3L3bc69XzYiejBgEW2R8rS78LT5GLtpVAmLmrrvkLtFfSEr7DQR5",
  "key15": "2w2RfuwDjmmtqM6DGcMpADLKbgvFuknNYYuQXMtbo8cBEUHYMvgGmG2YftxiWUyksBcka5XwRBdFAnb8jQydpoUq",
  "key16": "2yWz8yyDQ16Bgur5v6vKCL3aUHKf4C69svkpCA7Meok7CWdc3x4x9zNByoeAoKyE7NzweVD4xxQu71cps4US1XN6",
  "key17": "5fhXQ2VmSLVEVKCCopbDTT45neRZVJnRE9BPczrEQKRsoNxKKqBEcChsAt7taqQcZ2yXmbTq9QbUPfRAZCxQtrqk",
  "key18": "3rY7MwfMWhGs7Es6nmZg8t17hcyq4Th8ij2xFoMaX5Ug9TdLQnFD8jfdKCcvoiQAudv6DWUSqxtfN8rp49LT4hU4",
  "key19": "2NnaUfT6D7fFsdrYXm3YGFNnnbdWZQqnKSnF1mED17Msj3Gg3XN5tJKsatUdyH4P2YW6uNkABGF3NAejY5Z9PAae",
  "key20": "3XedHTAfdP3Ubnf8KMhSSNyKCV26mchox8Krt4pzRhEz5jVAAVWsk9uXj6FS5Vq3CcuUSF5dj5STAAShg1FjXbWD",
  "key21": "3dj7XjhTbQtNTJ734WZF3GjFavB7ch5VzwrLdhkLk8Z3QfjJju4uB7QxYh1CeGfUhpPWkFczznYYDgceFpXjk6Nx",
  "key22": "4oNt8TLxD1DraoVB3J7WZWhZ3sxVEoKep2ECv6kHM2obwdnx3oRawGpxwSCPVUfgia4RGek3ynpXHouZgqqpQCZA",
  "key23": "5s1HDRybkvdBKTvhfkLnZkbb6WquA4L7HRuE9P3FjDCApF6bZyakUSWDf1jgFbeRdB2gAU2gd6Rb3JQdTxsf5JAW",
  "key24": "2anCj7YkdYMsVsjRkDucLBKK3MqdzbtoMCdkiZatTyJgrkAtNATnQEsCgmMCZHtd7AWPakfLEBjb12aVcvck4gGv",
  "key25": "4ZKKosHAPJi8ADuRhu95XefhkmUFv8Mw1fta7rH65CtaUmGmecSuKps8KNs1KSvurjxnfYnniLbniQhtMoEkqtff",
  "key26": "3nMum28S4jvbrYTmR8Um9Kg83qFKK5Rcdvi7nmwoBapRdhC49cK3rhL8mwnskvQo6RS3uZ2jWwybKzevcjkefPy9",
  "key27": "2R1S1RfJ43crathEfKEPo7VHPxYXqNYAaz4kSezs7QR4mgyCgPFQSbpebXpuJRLM5dZ3rJiZNJnUvft45MM8JrH7",
  "key28": "5t6oB6hHjnSNW1KABfX3jY6PEs1cWC2grRd2E3RGASVwZYaVCwdohCpStZzZnc8T7vqHp4Mo4KHYF7dzC457jyYe",
  "key29": "3VUirFTSNbQLuH8qWWjfWC5XmEQGTP9EByFnCZV4ZWbyxG4noZfVBPon67CHhwxaraXQ7UcsHnmrtaCCLxaUquaH",
  "key30": "24pQgHJXkdat3HTuZC1A46JaCMHkKDLELSWjJYbWBRzT7puz2yPUtJTa5SXn6cXcanAxcuACn3kNXeZsu4G7NhpD",
  "key31": "2c8TEKCzdkFBhrJ8LAKPsffVk8QcX7vM3wScCD7rZyFKEHf7XXuHTimTYtHXFQQnvVEi3Cxt7pKTwTrKGw4CcFn8",
  "key32": "DEU2ajHqJYNykAfx7igzodbSe33zF1ef23CBB1UUDt32uZRHy8DbffUjhYFJSZNjDtrZEP1rw4EWupXPkS1WYcj"
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
