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
    "3gDRdaKUXLxwMFD1mncsnjvyxLJuZXURT59qy8huGDVRPPJxV9yxEEJRm8hfqQbSbGAvCbLuPdm86YFPjTYUEK1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5My4yfXgoCtEbKzaeJMUPLtUaw3gZB36izUYm9z2qL4D898LmegQz2rA2HddtiH5gDntLB1nvYhtZsWZsVDfVrht",
  "key1": "4FjpRmk66GFDQ1AX4SSvn9tbJk4ikFTKJuGei7SizhVMsa7kMDPPt7EtHPinFBCjc2kUirfFXPeW4UHniQJxcsE2",
  "key2": "2vng7y7WpjUjNXrHyURGEr9qLR2GDHmapK9nua8iRcrMCjw489SXpi9TjRMAaqLb7sc82ru4cYYpDQV83WK28PXD",
  "key3": "63sHFojQhFhXP1ehNLzGtNb9bDvaPLwShKaVKoyXexqK1fQ4FnDLpRJ3pdc81iqPHoXfrab2mNxPD5nM6tP3BXon",
  "key4": "2g8wQLHU7Cb1TGjKKmT5NGPTgC5g5rLpso4TjE8azCfrFx9egN2EEVRzsi6yRzDbZLJgFTAwzj4ukJvhadfb95q7",
  "key5": "3gqcS2UfCbe7WY666CdTN91pz9Lv6DaV8bGwL2rDiSbrmnSuKVahz5wiGmhRdLGzcFpxdpxEn5LPwUh6CbD2Wwi8",
  "key6": "iMpbSCyFooGGPNXER1VAoieQA1aoiZ7g43aF47eqhKKNFp97ECvoMk3zUSVQuTwSMj9jiR7dx9ubwzTuWcnPaNd",
  "key7": "3aDC1fopMB6nJZe6Xvbc3Msgye9YdBUs8HvVcAzLrVuS5L4Ker9ghvtn3DgkqowUyVTCkUdutrQ9KjS2P77LwEaq",
  "key8": "5fTx7KWeuE4j56qDrbKXTX8D4kVwn4XfSjPjnaXFjkAGt4AWFa3z5vCmgoVxtMCfK5gXJqyipUoCQ1P9wJQrhsAC",
  "key9": "2mF9jSktYWrxfF82nrhwBj8yUDaDxFZhot6S7JzF3W6sakfYfuWHXoN9eqeKa59Ltg9gyJuoZoeEaWs16UrjKSVX",
  "key10": "64Vu4vY6p2McsSczphAMzegEbkvqcUpWgPcsG81kzGAokcC1RFKFY62YceUzFyCG1p6CxdCkS5uHWDwBaAA1JAHf",
  "key11": "4itprTGuq6D4uthn4GCN5vurMbotFjBbHcD4qz7kgr849GqX5i5qvFYdyugHHECnpih8CuRmtSxCkbMFuG4N14bf",
  "key12": "3JVWJDSiindS4wyKco7Bzfx5mRupyDsfrZZv1BHSENzC5bNh3JfTUUhnK3JmGQsHAhPWPWqixbtv4HfK5PBG4F2F",
  "key13": "5XMS2D2WwdKR1XkBAdzXhLyiKXxYGj5F6FBz443X64PcgH8bfQijLBXCG2m8QPfWkv4wjvuvmdspseUKTdnV9tTZ",
  "key14": "2uygNEWJ1etJPSaBfQsPjg3p3Y1W1MXMwueLHoSCRA2auDSfgPjLXxqgboJLDuJkK4dvpvuNJ25xCg8fKgGg99ew",
  "key15": "ZUjThZdY7kcHtCeY9PX2sYnxAUKt3UBL7Ru9uaULGqiwH2PSBEGh5uqMDmw15DrQnfcpUu4yChrDdTJgq7GcWLk",
  "key16": "4LDFTokwTn9GLz7RaJJ16rJrPzkhm9shgQ8ARHWe9H2wmrVBthU4KzhHASaov2GYPPUuENwxCPNQ9SCv8Xa7mAuZ",
  "key17": "63fDGcSXJx5BfUZ3RwvU99EVsHHxuanZmEHASE92HTq4Ks2Rw3aVztszyNc3wCeM4yjkpFXoEkSztpL6WyNJcWbv",
  "key18": "4m1ZTw6TQfCNVZqvxnyLpzaqfxu5jEdHi7GEvXjBfkQkdjkPzRznjZhBLVGwoCuosNwgtNNDeXcnhf4DN61wbQ57",
  "key19": "4DKd2GzM6gmWxMHgJi5hQiCRLmdsNtEBP9FUCtyvoaNUpZzTH7bwjL76SY3Pr1oJRe7WhmPKH7wzr1YccT7jMAgJ",
  "key20": "5VUFnfZyf3mgEAiRfZqSLwXUDN16WAC63es46eZAmpQayHsG3bWVhszob2TrrsNaehbWHQr8oA53KTSdFvHZcNtk",
  "key21": "6kNC5KqGjS9ZfzQGqpo8CUu4NHFRf7CdAD4RgcYNuhu3vQycEXzmm1ktyAvbui1CNQKYEL6f8rMFESQAAW9AZc2",
  "key22": "673GXs8yr85uNHfF7VXueUxdysG1HXZuzsKwRtW13efZDDNe86SToBh8cpnNTiUsWWmBz1Vio2MXg3DKfdEtZVhw",
  "key23": "Mvbxh9GerK98V8H7mYbtUvf3hdYKfTvR1TJqprQJ2zuk75AcVDjWpRrqcuwdu2C6ys2Vkud8PUKwhMYpJ4SKJHz",
  "key24": "HgAU3LLTtHAd2VGg9A1hGavpV5KEPWj3x3bbPqKPSoEBV9goCpmNVe4m5MbVjdEoY7wFH1ZZZerFE6ceyVqntGM",
  "key25": "5t64fL4XXbpsZh6t8D1CQtCZZiofaJGMHBFoupcouBsTQsihx5fzfGUr5UBcscRRe8eTzZHxD32kvSFSSVw9emrQ",
  "key26": "2LZJbp4JpJSFpA8PR83t5taME3s4VFYp3cq7tqp3JmouPEbt8245yLYNUQUDhA3VAHem7a64wnMcCTXHiYhMvXCJ",
  "key27": "2QqxVZ51H2i3Er7mxqHk3Ybby4rznoNBCWcXK8tbozs2xTFkBF1NoHYegHMsVNyFXDB1L3NaH8YihLfcQUFv4Sti",
  "key28": "2xfKcHypwuaE2vcax6W7vwxt4GNbyZZNh9FA37fRwNg3iPeHNE3rS5skeVwDrc7VjBCQjfR9Y2ZVrKofwMDQmnkE",
  "key29": "5sUh2MeUzChwRpNnuQQN1yVYieSEDpVsfwYQz82LBVkRh2whJxQaY7Y4f5ctnRLFrDP3wRBF2segexiA3Y2rBtXk",
  "key30": "3uyfpgaCnNTzYzUpQR6dUYaBiKtbMBJB7eSYpypk38g82L7KR7bfkxGHbvhASQTPc5LgignUaBTGDFBKUKDeKbLh",
  "key31": "3YxtaMeY25MWLWEgn2uknXjkJpiHJ9mBt7g2diJuhZTAV94bSJ6oLAc6rkgNFErymVDT8SsYwe6yi2RDHrB7EpgG"
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
