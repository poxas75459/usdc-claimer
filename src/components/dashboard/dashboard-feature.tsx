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
    "4zKADz3V26bjpdAzXWHXzyfRSQgRmR5gDzSBZZcFndhdvkZdfX5MmnpKA7dgBsVPxJSdULNVxDy4X2zmonXBcezW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z9hfSWU42RRyLymTLe9P3bLbVT2Txa9pf8HMxWUZRTX8QVmzjWBgZUpGjwFh7ZojuKQEPQtoGCLnmbbnLaRm67s",
  "key1": "4GdSsmTkq7QGeWYGUcxjWKSVrRhvn4ZDXegcyjeN93VBZehpbCeAy5QgaMguXVe1PVo4Eoe38LdFLnSHaHVxqqpv",
  "key2": "5XPWguP8tDSZeG2mj1sPg3DFKELsNNzzgQ2DqzqmrWegvsUmzcTknbCMvmdAcrDwSWB3tyeD4QLppCdn2uzEkdP9",
  "key3": "3AAQoA6DgbdcoGxnL8MNDefwtvrv8ZqLBsFM3d5K763XLjvr62igg1iyLBuCdE5nBjYB4otFuXjBQPMn8dG9XMcR",
  "key4": "61GFntujXWgANEDsRBpDWhGBZeJgsmxKFznjJBGXK5TsMnd99ZkPFAv8ongeYm3DykhRh3me5nPz5WZX9g51zKSt",
  "key5": "4n61xp2Eh2MFeszdTB8LzSvw81vGkiEwKLGAsNvTPAY93zyX2smSDnqJ3j5agVw9yDewFCbpshUXPWPuRf39biGS",
  "key6": "26TNFNgFfwxBTQQFh6cq7k9gb3upnaTp8gsgXzTGRft7q6STGXdUrwoj39gz2xbhpifp8tvWLdVesBGgYHhtrBeR",
  "key7": "QmA6yrEmxVfp6Udeq2ytNUnXKcKymLvaBGbbSVQme3ZcVDxTcshLeQGxxKC8msFe2YuVGUtYnWmFGVBPQpuXJiU",
  "key8": "2yrEZWBHkDYJVTF3Z4xQbFMmVoGc9gvum4peBph4ps49SNqVKpAtUuT7b2XhtknRHxA5Zo237R2u4B23aJ3UZeK7",
  "key9": "2UqcZMwmLKSBPE4nWoEf1yDu1PnGeZjeWtrdjQxT1KCd8KFfaZMjmAGkMLbSnXqK4CGADcTBfd499Nv9TRzSXd1S",
  "key10": "3Rp9DcYpHnqrGtZp36Jg5N7qLRvRBqrgYykkHWg66fhC6pd9SsW188n3CuhciXKNwtEJsA2rAYDaoLL7XSdHt7p9",
  "key11": "2Hm4GxnTrgcYdUJW64kh3YdCHHENSs72Zb9N7ZXF1WYjLm5GKiNnYL41QDP6p9XAsHiXuQ7nPADuiXLVXhhryURf",
  "key12": "3C83FGtPfpMP7ADwmueP2GZ7agnmWLZhSb7sYYfeydkAhjw2qjkr7peh7WYAh8RiHMTH4MKzazYdADJr39B3pBEJ",
  "key13": "26cGuvJWCF3CDJiF4FszfQEo26wzhg5yxpnEso2LgfBggC25to91jZT5V4DGN8xiSYuct25G46FTNTBgc6QsWvjS",
  "key14": "2QHnHPx3BhQ7GvNCTXW3bnr3ChCZkZorEwe8TuJuSs9if9U7fuSTe4KqzjNxnegmn19gzV3aLqFfEop3RwXpRPw6",
  "key15": "eY6x9WFdqzA66dJ9jnxFFuN3pLXcx1eaPmb7uZEVHDB39cLSAh51BcdDz2DjWSE7ftnBBdDiFsphJcirWdhiXJt",
  "key16": "Y5uYeChPCS4cPTRDuXX2SCKNWkGX9ZnHyR7b41LAhP82cFbjSgZR7guQnvraBaN2hDs3y6T74bnDmVKSR1KGTry",
  "key17": "5UzL3QtMvsxHVTi1EXKWnotyWs2wXNwBS6sWZQYfUN3xEvsR4HQahA41KNVQD73RDXN9FZWFWqqdJXJSbdGvsJVW",
  "key18": "4Z43Qg8sJxwXeE21p21ZAighaQvZCCvtA1sFR2cPTCXUU2FHeEhF48HoDwuRpn9L9gUh3pJ2HMuYDzHjiAxDUACe",
  "key19": "3KzfMVsWXfE1U4wnKzZt55rfAiZWPptVd2Kgjz6yV4im6rAqwFGyMBM4wsvBfLKNvYLDqDqjfwcG1CEAHt7duoWj",
  "key20": "3Vki8kpYhJ2y5m5eWo9utxHjf8pFE2feQksqJTYrXQrAUCT8s77PT6dtajwcrZ1Sakbyp81voKKzmjkw6ibprhJg",
  "key21": "62iK9wZ8LhPikeqJwwunjjMFcvFSej8bnLFWEX1E73YJbj3r1F4QZUbqU5jSPzSDXMmGp2JSjjXecC45TwUFb2ET",
  "key22": "27TUCnerVnkwxBht76prZsrnwiWog26MRKGEtiCmy3PQ981ovmo8cHDNfbBe5JZtnTPihWyCwS3vjwUGdn8nB1dx",
  "key23": "5JWVkMWUgPD8nxBYUUNmyZLkSETzExDEQnirCPKFvVMunkfa5pm1GR7UwRbNJBwSneheGgQr1C7jymQ4EpvEiU3K",
  "key24": "5D6NzTs4Wtu1Ke9ZpnBr1Jcd2yay56bT9V6zNbVRcjGEbc4jDGjhwkpsNcdcyR6usVYJ2vvtLEuQLBhW3h6uXyG",
  "key25": "2JRmcwKHyPao4jgiwwcAeHiVFFhEPc7EUXEUeAZQXsiKqhMBFd9wVsM6iiqSpCWuLm34QFuQV44xfHk4Eedg7Ksq"
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
