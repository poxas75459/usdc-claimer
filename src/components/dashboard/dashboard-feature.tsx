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
    "2MbVcsoLk8Yv5erbnAAMackFuF2dSuhDXqPXyxiHMVpwK8aCGhsV191MKMV3agRKqDw5qPFF5EoQYR2w9BedamLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uS9iCTc9FSWaBgDhj93SkPHevjf3QAJjxeF9RkXfewbMrzJcGhZ6arAVBGtz4W6Z5GhMFmoMt69WHKysEbxHNqH",
  "key1": "2ufYJDkAumuH7kgJSP9wrtz2Ujro6A6dQ3bsBiA5cqHM2z6q4qcWY87iYD3U156VxLsZnepTXZo5KeBGZSnaeixK",
  "key2": "sSYJ5hYfJuZLH2rbpzNA7ZDUs3SZG4wPJqTLqTksuFsBAuNyBWCMP7qHTN58WYGYHDq86TkofyBBnSE6cL2nKWM",
  "key3": "NZpD1e5eSAHdvqjawfbcPGPrB474tXzDU5FcujGh9fRZSmNbp9hh4jbmudRuhyndCuUFpCtfYLXZZes8jjxXjCZ",
  "key4": "5scD5LGgSkdb3VrXjBuDZHCvk3fbh4XQTWEggtHVZskG1pP8dGtiVyVipSZPkdCqumiLDs1nfvU4pPXMiKWQ8A24",
  "key5": "2Y1KFGUWD2my7Rzwi4qH17pmfT3KxbjfRHXkPWLD94vmbCceczL1jc3hKpj5ypTLmHL1BvzdPycXn6iP6c4Mvzdv",
  "key6": "61La1TnuV1WhV7FUQPhPBSEdPSocGhXGrKzJVWZgm2g7Faod2WgDM8KEacpNVzi1b64m2kY3t6FspUpRvhTrWwMj",
  "key7": "2Z9v6XHzjxWiJPkxjb3KY9tpEuqvn3NPhEURPxic5FRuR4m3pPYctVpPuGihtgowqcmqCHfaUfEmfStP1Y9Nzmia",
  "key8": "MHyW1ubCEYhTkiZDHE9oyCs3cmsFMmFCXosysGyWLXnkNxdk9z3fnVTDFwrnDL6QS7DZAN7hva78bfeEXevydKP",
  "key9": "42RWYhiiude1FzH4517HfGvxPX3WHabYXbN42pM9VZevU9HzsKXqFRyFJXvmfz5Vow2xeFjPorALqFWxvYqTtmqc",
  "key10": "gnrJFi6C11u9CPUD9MPdBLk99Qy28bh6stmPD4F4v5FWwpfmSWrFi9zKShYgAfJSmAADQRQpnW8ESjt75Ht9Rse",
  "key11": "3Gp427JKyvDtzpbXfzhQDSDrPZTUjZ8SGdNW1G8NPQczWPUseYhdobYXHJptsE7kVNYYPHkYKrnFEyyQRAHck6UM",
  "key12": "5e5XgfHjWJYZ2Vuny2F1GhgM4HpKbUy1VrFDRwuAqhmucMZ6L6G65xQzHp6G97U5pFsQP4r2Bnmt3Y9oJ7JH5Krp",
  "key13": "oZd1UsitdLHERj4k3MRfEsmoeQCG8HXBaTZDha85zmBTJGXbmp6V2LpLHxokHu3vuodGg96JmXxyporHfZTKom7",
  "key14": "4H3MU7PSf8fenajcrAXgBC7gBWVhdaBeFD1nibfMjYmdMaVwNXYQFMAaP2djQFieipYvma2mHk3VE3KUceGYF5mv",
  "key15": "Tgdam3aEh4vYWsQjyYHDZmDsSGRxj9S1Wy6JJjP91awEa735EBV1cJasVDhyWrrZWvZL5YzAbrTN2WXA4ix3wib",
  "key16": "5SD6mQ1gvSdMsqQoKLXPXCcHafBMsD5fx3YAd74cGR5irsBAYscw3yUB2GpbZFc5R4T8yesrxfdRaeRhzkZK16iD",
  "key17": "3p6P1jWvkCA2Tm8shHN4wB64HwiLtVpSGuMVHYUpQzdxBdTwGMYG5CttZNbVuFBk9kA9TvGmQgsw555bq6QNGwhp",
  "key18": "5HsuSjkNxyLRbyiktGY4JUkdFT81uf1y4wXJFzj59bkDNWVG8USDDxQBBWGLVvwBiDo4zHxs1rv4AVwtAJ6R38SD",
  "key19": "2K9a4hasjUaFmXyoWqg16fmmnLdBMAiFGpLpaSX4hhNHuQg6Hm8pY4CwrJLvspwacL81Zi65kMircvW9e68vVWqV",
  "key20": "RNXtv1Cd4KJtNuD5mkUCd2G6u9oyBS3k1TJfDtbmLP8sKKP3CJwy3TSghAdrAsb361Tkd547ztXJXdRE8LButZ4",
  "key21": "53sL3okWEuW2KTweWgrTfVYtLT14Qy3QxktyxigahWgvRzXdcEUh6UUSHVBJrg1itetiqCG1jgs2Wwp4kpaZiyat",
  "key22": "2BdGtXGtCH5dD7zZmuPs8REJ5hvWaD2NDCCMhE4bVht41zmeWKWAbSX5AuqpQoS6f6g6D4SbBm5d1Zuz7iKau3TL",
  "key23": "5sqayL9wDjN6c28TiuLQF32hKVcAx5SpJmYuXM3BKRZEGeqAozuUgh9rBjFfp7Bs9S96sFM4Y2SNNBNc2TaCjyZf",
  "key24": "44aoZEPmDyQRGMzwnQXTb76k1rsNgKEEfQmhoiPVy4dmGoVRmsntuw72KjJj9LxsgHz5ZA8FoLmeJv6mB28NYiY3"
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
