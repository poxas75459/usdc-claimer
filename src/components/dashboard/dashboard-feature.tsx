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
    "5vKB5DPTimr1ZMEdcm5NUQFAqVu1hdzBdxBZ8qDzaQgEFd5zpX4xwHuDBLTbHhk2FxGD58fZSVA1De6jNJgN6sRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3igspTapPNaohmk6wRyaTfyaKjDE75Tt6umAUD7WfKKJtoHSmGrVHUvkAm1mHRRyEpJg7waT8QLB9Cd1p3btbdvx",
  "key1": "5QCao3U43dPGggWtRNWV6185mUVutJuWmBFqryXGANEB6wPvpSzFXTG8dT5xmaPdVEA3eeK74d7K8AbSwXbZ3LWb",
  "key2": "3cY8GnDSSdUqaBpTjKwVvbRxT2DEoiAGZ3PhnGdANSQKLJFnfCqbx5hnNknvBhxkALYGT8gAYKRT5NZ4GCp3XYJB",
  "key3": "4JNGRHQQk3jCaWqY4LHrwdwvX2X3rkKabkfR6rZXm1kQL1LFQLkiraqoECu3USMUkZXCtp1KFaSiBpA7dwjxFnWi",
  "key4": "TqEoKASiQuqN6Wivfz6Q11xuoWt6WF2FmAVxJCiixjdB778ZLU9JzeH7XdfjHR8JdVvCom7fcr4NhnZQF22FeGR",
  "key5": "51RhN2GCAmGy2rGVDawBgNHgHkbPVLdRCHPGVKJ4FN9otdp2Qt2BuN3cQGDjLfeKTaigKyZogJG5CZGkmBttqNi3",
  "key6": "3CJbSvsNK9zNtqpdP4qNJexwdrPGepFBNLRDNUXmeR95Qo2Tsj7Lmj3naadp11gNj8hmmc2Ui1dPb4zn77NU6juT",
  "key7": "4jaTQdACLZv3o4trxv2VEb8XqYCdrPDX83krTcWnudQLY2JM3tprrGMKKy1bZTJRuAczKzeK8TeE9vL3LDRXQ7eC",
  "key8": "2QFofJ36eLnTuQr4wnawtnPTDF6oEJnFDXTDF2Ja2hZxZJtegQt2Lqr3Cazxg7iSaUr9WuL62QhyoXf1DKy9Vr9k",
  "key9": "5U6cjKmrpyMNsFWNm1aVm11dbhR8ERAvdGqfxUUqLWvNExf8wL9zddjF3NgAAaZ3mrpvQVABqVFDauKfmYfrDq2m",
  "key10": "xsQmRRu3HD8zwJLvihmpxACN5regyPvYPrigPrkHLcvMJ71JUDEzidghsH8q6khoBja1ixb6GC4gVJFcSDymfmb",
  "key11": "29ezgNrXx1yQQ2fXkwnVmYaECRDGmKefAU8At1Tv82TEZKo9a7irHpNsvtXoghok1pG3qaN2duLyqLyGJiVD2TG8",
  "key12": "5rnWVVfUfToVt4gNHpwmodzZ1dLBs9mm334JEB7pkmwmQZQA7nMBMSH3kgbi4HfWhyNiHGHq1X3hnfguz7dqswxx",
  "key13": "XpuTYM6B6f4CXCmJ4faP8NaVNbkXaVVKU2dmyZgqy5jjZ3B3LXbNNgmGFWs58Jwv7gENgaPtu85x6P7pKW4X1A4",
  "key14": "5YTH9ivJryqUKVp5gMcc4K2rDv7FEV56D3rh8qkeTq7mBxRJRvB7gaJpNokXJVwp9uydoscDjc24ab9auoxqsPzR",
  "key15": "oxA3hg1FcAvCfDfcwrzjwDV4ToVuHXdNtAifrNjVsrHSpbJm9aWBJkaEJ79VykfUwjuWikyUgKiS2F9qZzQgt8e",
  "key16": "54C4oUunyAApTXn3KwjK1a7vuVgvaPXWg3pnh5Lyuh6JGMkW3v9HoEXwiRQ3MB7XDzuMp1eWZSayqPHdtcefNAmf",
  "key17": "3ZLy4cipYtaMXYthjcWmptfjQCNA6n9BpwY6Kxo6F7qDxdQ8QU92g7fGaMSUiw96s25Kdw1L7Hp7o1JMpHMer6ih",
  "key18": "2qUR4equmDVZhEnmdasQPdepe8X6PFDJVGcaVk589YsxVcb71jHQeEiDPnjto2B4HHYBGjkKBCoWbgdAF97rVKqP",
  "key19": "rVZyUjcsP9HsNGti753Jqjftw42hrzcoQgMTQ772EVtQ8M8KRz6YsYtSVBAFz3z9adEKE2RAzJefa5kr9LoDBZW",
  "key20": "4giP9PsssvKu38fAhLNxwvyQBpkM1g6GoMhiB94mTXZGrgT2eJocP7Rph9duwH98AvU9jVxn547cPsW4d3nJFumy",
  "key21": "54gGnbnSn7Ck5SLY43rgbX8DiaDrVB2BVENpHA1cLsnXvyHijUhApxBYT2PoXnTP7pxmCSZGe33G2uaDTn76Jjzu",
  "key22": "4SQgS5ZPz21TyLAKxcnVAUYgTe5aqfZRWPdUq6inCKMrSNW4BM9qgCn3sRHyRkv78YQ6zYAJH98EdkVHckSuuCV5",
  "key23": "666ukNTjgPbYyurLudvxASMVjDFC1YPixyXYafNaP4rA6dFALTWTQPRs998TvPzNXb9eErJoFcMV8hUm4HZHUdMB",
  "key24": "b4Q84KASiWyAwidBtnHVFyMv65Zi2BxyZpcBB4ydu3kZ815aLeK8WXkvwiuiyZZHVegMYHzuF9EED7Z99585SGY",
  "key25": "3vTzNzD6KT8PkEhogXyPJfkaJeHMooErJtWA79Xtu6RpfwSAepDQ3Ajew4xXQtM6ioqPkgPCv9uHnLk9pHExRLyX"
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
