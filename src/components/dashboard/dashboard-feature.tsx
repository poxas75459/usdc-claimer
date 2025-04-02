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
    "61qhDBQcA79GtCoC79PyRDTpkyVgEK3mqtG3we35J81bK2ojjq64trCChi8QHvrBpeS6g4L3oBUFQwtEjUSsm6aM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zaWeh12rBpPRcGznwDsguarXUGbaogwqxk5xtSVJcpjNrzQbV65ed1uxVMVzGWadmrDXDynwF6Y1mQiC8Mywcu9",
  "key1": "3PuS4AW9qTLLR8P8QrdaxKeuMDW6DYuEM9iwqAYzZSZ4cLSfBbkyewLJK7bDiYLTfbAEMNQKSCEXCRgiqiznWFmM",
  "key2": "62e53Ch1QR8WucZc3wNBa22qDSwRM5LNbt6qcCPk958UDVap1pg6adNZgM2DvtBLgBjv6Z98s1MtyTcY9whnmwQE",
  "key3": "5cPySfK26fv3x6ycezSnFvxzqESfJgAdUXuvewF6ryQnDAUD7uVD3gZBFsNYR1mLqMTQFZq6533Q2YV7BcZo6ord",
  "key4": "4JZb7C8j42uNvACbqA9mEzGrXC4LEqrCwW37KXsvCnqmptWBzVGUx1jZYYCtzxsHinH1AsdBPeshE8FZvkZDmeG4",
  "key5": "67TTaCSj9QFtAYHsJEeQTH8heETrdjMMbq5eagQ9xAqfk16wvhV4yB9xNYptBbGuG6UoaizoAqZ1sXBVkeVCfaPW",
  "key6": "2L3FbdCdakJUCokPbSG9tRvzChKbvQVk3eC5EbgBpVNHPUF3B2UsCQaoZcuFJ5vtPWe1e2tFbTh5KX95NooiBB5Y",
  "key7": "cJkraaGgMFqudaUzRQ3YjVVcDybNsbfKhS8tLsZiHsfRpgTtLMfBeTVvQmxm241KWKagdoPzKvYpUdRoGBQPZuA",
  "key8": "2tXLvnJgys9RtBcUTa9b221VWWdneqrPa2aGvin9KdJYAaxva7R29hCAgbuLmBJVtM9U6gmm32FVgMe7bDtFSNbE",
  "key9": "4EmytRxTecoHaUjA2L7dh1UKDefPGmtnXvmQZGQs4xAKtJrtTBiNTaScQMYAEZF8Q7M1ApEUX1xJEaGP7hVJkvhF",
  "key10": "3WKiisE3Z9YhqBUN3R8YhNTKznSXLYmyw4PppxRarnTZxncSSaMLGm26txbcrT9R3NKTd1RBQ4xDAhJRpzSDRZ1E",
  "key11": "47T8MiyNVf44ZJSPn4eS6T4NiLiy2wavxVVx9H8LBUDoMpww4KUYZSuKNgmDib41vpsmWGUbAiot1y3j29n5EqdN",
  "key12": "5a7YX1YcfnAhCyRnyRag9VfGgDPAvPVm1mUwvuLhEu1eh46EndGVrHTvQLNvPNJruggACbbtiyFrCJviF1kPEjAA",
  "key13": "4B7dFcevGt6dFJeaWGgzg3wTzxLWXwWjZdDuAAH81iwuRbEKtA3CxvEW8ThN1GA2mF1z71YjmPmbmUw9srzF2quj",
  "key14": "5VyWVh5eShfn5Cv9CLqbzLhu4PA4D1oPg2vzK8ZhvGPh8nQiFqThJR22B8rK5RvKJsYKpDGnTu7ZaK6k1LrmEGG1",
  "key15": "r2fn2iSgUfkoz6xgi8iFEoQB7MKVunSEYyRgrUGYAvAE22fCRphQLeA8eDDjuToRjxKd5btNJDQHTpMAmL3VsVh",
  "key16": "4zSvej3aKXfP4u6n7ewjxQ2MdeWgkYAnzv7akMPxqsBgjo3f2naBVpMMtgi421x3eAnLWqH4siSacpopBSUbc1a4",
  "key17": "2XxuRgj5SjMXf68DFzurnQopBQiqwgJDD8DuK7B7wctZzVYs3aix2XYnig4JwN1YL7BGVuXTPKCMJhFCNkQYFNMJ",
  "key18": "3PChZwuye7GoZGeyLujZLfxPApBAvyT48Vwqx8Fg22NwZbsfE9y6hHNGkaQkgY85PMAMukUvt2kF4ozDWPwYqzW9",
  "key19": "3v2MWmfw93JMWVNDuVKXX1AmGyXePkWJvu1f7Kt3qRfvzchinpcWWfRxi5AUTiAWdWH13TiSfNaPaR1asc7dXZvm",
  "key20": "281W1ow79QVv2zVNEL5VBSXVRskgwMtPmSSejwcZwNVim78QhstvVWAJgXmThaPe4Zgp3H7a7m12jCgSAtM8poKj",
  "key21": "5e4GxBJmg8ahZfkn238AJpj7sPhFhmP61qsz4oXGLMkaduKesn9k2g8L5HBKpz66Qd1khumVUgA3kgujmnyCcUn7",
  "key22": "4WVc32jjCJpqXyNQD5WFzih3GF8E8u3CHZ6aHVgRwZ1BPZqMqtrUBKyqfCQzhayw8JxgF4WqcetVv6EKRbSavs61",
  "key23": "5uRc8GaPQ8TqxzrVbBGB4t7ZkCcbekqcZx5tN2SZRchermAKqb2Tq5MeSyfxfHwG71Ky9m7V4AnZ4vh1w7qbCT9W",
  "key24": "NXhN846dVK7LSR2PPxJUMHmoy4NF2Pse711MYW7zuYXSaUspLNoieBEDYCQL7JnAZ3h6jcNc835CTSMwRxwAU5v",
  "key25": "4uoKe1RW3d7fpDLcJrAK8kib3cMBhuFpuySxTAZEBrAMD9gvJHnUhpRgViMjXDW19EVPzk2g1mTeHGnsZUyxP5eA",
  "key26": "5z8zB5RyMhWp573mKtwSGvBTxQdCCSaigkU3uLvFWBJgQLdqMTBwqpbhDoz8g2T5FE65A3vhTiUN8qoARRNDTtsH",
  "key27": "4SiVyS5RGCG5kUfwuHW2j4wpGT5JgRTn898H3cwCXCXtL8gyDXB1Nt8YWteTJJe5JZ4Tmvf1jjY5xZn4mvY7Upbh",
  "key28": "2MvGnC3rcG7PQwAdt6tCVhimC9YYUZwSUFwAu3E27UUZKwU6FmKWePNufZJBuMKmatehgdFmCqy2cj4zsGyeHjJ2",
  "key29": "5vV95aXQGZpJdZ2GZCUjdSdhgDGAVNtsupesHCosSytqjLR4Lfd6AWKC7wkmGhZMDmqAEK9dJUH8L7fvuW6AZghn",
  "key30": "38rBv6xTUr6qTUofx7p46D3Q27g35mbwrz4Am6vtu4BtK6gV1nnyWNSix729efsN8qiD9Nxam3h4UwjzqBzEXS9V",
  "key31": "4N6dq5crWK3n8gdZLXYXwWu9u4WwFx6AdkDFNmo3ZMxvhSQY1xhsMqxcA6fW87Kx2MXboUiVFavd83CXS5omc23u",
  "key32": "3XWX4U8i5B3HSJiitWpqYbM2Doig3Q8KjrzvXXJWiz1LBdY6h98ESYrHFPV67pEMGzQtLXbUuKnNZsQe9shptyZx",
  "key33": "BFvXpMay5P6gWgKLBUjfkom1rZoMVPVrLpQmAXbm1mKuUpLfsEXrwf1uZnTHNe5hhv9E2yQPnjmrHTCVBG1v3rf",
  "key34": "5o625KtYmfvhyBGzPBaY6Jr42KBqK3b3UGaEzAbfyjRW14JUrroBEN8UkYXw5CUExENQxdg69QjaRHVwphVn63UE",
  "key35": "4E1x2tnJrPU84z3Lv6XCBcSeq33A9Q4y8epgXPcgE2kcHCdiioKWC8dK1QYnwCGBxtcFrePPXtc5nFXSL4aYMiiM",
  "key36": "2trK6g5FpNUrCK1xu17DxjpaRZ4XNhBXLdoSyGRJ23MeJ3NMga5YzbcZ4f5aEBZrN7wAVCbY585oz1xNLNPNaAzg",
  "key37": "m5hBBHWPN1MdRqwcWaqCGs1mdqzRcz7G8SyszJS6HgghvkzPFzPc8FekSSjYXq3C3rzJLdTR1o9GMpGSX6Lu2rm",
  "key38": "4TU3StvkZz4P9i5x52K2fXt9DzLT4EfMEDhaGpxU1d4Ma887EiD6T3tXjedRTKND9ddDjRkZRrvKZoFrczzg6VTn",
  "key39": "3tNE1PMvbcD6rWCU1tttF2XkL2gLCLTTJy25a5mjWJfRR8tUvp6D9GHRpWSYhovaxdTbMgmweBKY6YFeLwsMqGdS",
  "key40": "H2qTVjwqznLDWDimMSLcsU7Nj6tPjo93oEW33tunQa12UtoVvY7jgKBAXwJEdnBJS9M2vu54eLMkdyVRpTQW6R9",
  "key41": "4DFtWyFCbzfJwFkPz45MeWv5tKoxYqeKkcVPCwh1RUaG7PciwotXRaptyMQ3oekd5LRpwC1Me2pYM1GpfefnvdLj",
  "key42": "4hJTQ1BnjAhsf4yzgk3NCnkSsp6Gd8oJoHvhBsY31mUum7agDf5mEoXD2qkd14UBbSyjfcRVm4bGLu4RhC3b3D1Q",
  "key43": "4n3taFsm4FdNNo7TgbdhjfvcSNgcyk1Sz5fsnZvnGbbNaGKzBthQNy9XNdugiAidX9p4Zt5YUq6nEEpz971CEZp8",
  "key44": "4PrTnkf3KGzNfJrXzmS3ZhRmWFGGmxWrwCP8z37eZ81WGVRugVUhHbuVuc5KaK4Nb9QF2kSVNkkZu44Kb5YgK1D6",
  "key45": "2KbWbPuwZ4ayqV5GXRGjpnqePyXtcVUhgTN3pdW9ea6wob15FEChqri5qZofDAUrJrra72Df4nSR8oD9V2jniKFX"
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
