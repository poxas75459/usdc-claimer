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
    "4jzKQkNFTQdZq9MU7jLC5KvZJ97X1SaunefNjfScboVfYocB8x4JnX2zYygBsNMbc6zkYrRarowD1Q1RRV8hFmnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yvwK5c3ChH2Dwv5pt9haRNTEVjzTcMcRjeV8ZEMuYHetD3TigP1dpmG44eA8qYitKHvbYNX5FrxyifSYbJScvHD",
  "key1": "aZfcpbnJ9BiVoSmRdP3wVyYWgpBHVJhDHxwsPbBC2SD6UbwK3WhxAsvCfA4ta1vvAGbM3vYSerj8oaR6JHYjgsM",
  "key2": "67C1NCF68nqh7JN9jZfyc1HiohEXGh3Gs3BDHstTEdkHg2V49YFZ7T5wKXYtdFF1LWJujimd7BQBiZ21Hanj1pxD",
  "key3": "5idbZSZtXB312yPuT6NszGArAapr1ztGcnqbtkwtLmpDgfQFkeBAMoWJN8T6FyvGFv7Q3FNdpzW6UpE2WUxvJHj9",
  "key4": "3ggA4LheaKoaFPNsR93VuNfLnCApWppKzUMpfusLEenfT9LQWLCVyoJPpVgx2t1q5micU9CsZ1gY1KMURTv6EMZd",
  "key5": "54o3gz6AkNPfGWAoHebZGm7LHCvUR8aBHdo4kiG7H8VAbVgPwVKH85big6uLHGgCfsiBphjfhEu6dVLA9d8f86z3",
  "key6": "DQit6hWq4DGdqp6a2MjPdfzU7Bh3qiKz3RAuLTapbKMotJoNy4hkhk9wiGN2UZzCgh78KL6hC1KzDgqy8WEZsPj",
  "key7": "56DucA3HBW27T3cQePYHisero9WiXrVW6Xonoxt7mai3bo4DHRkQS9HBgGgTcYbiX7ZoGcprfS8pa9EHzpCtFKef",
  "key8": "3hu3RkR6p2wKfmwatXGmfbpnsAqxw2Qif38ArAVfAFb7ebpCqkFSjVWrReBXML4sbZSUnJ5pbVS7tJkzzS3FQsvq",
  "key9": "2u8hY9TthCmEzdJL9NNnsQjqyHM2b3i7L14NMPB8G9ApQ8G3nuWjfBPxRJ3g7AEsq6CQNwG7rzFC7RG6teRCeqdX",
  "key10": "22CmgWwExpMXyvHBPCcf9Cmfyjn6XYyvQLFtM2QJ6okzQJfGg9N53cZAPKULViN2yYbUK3NuejLYZJKVTub6XQ7H",
  "key11": "kJ7XufpxvxRhpMdY6CkqGX5eK7PTVx9pEdB7GCXG1MhhQcfGngB2YasWzQYGqxMMUH7WqbBGeqHUuLLyFLoSpB1",
  "key12": "3nsXpKGvg7aXyhuef8RFLWU9UyCzDXwQwbsuPPKQGMouafDAc9DqybuEh9eXy9Ccikh3qPNWzno5aaYCX1CUdae1",
  "key13": "5DCqoQ1UhorA2gmDESowLNjxFPKXAH7drKz3RV3fEGe1oC2wyhxbba4CnPWs9XNzXPZ1ckZ72Pz6d61nM1toTtKZ",
  "key14": "2Xgqkwnedm377RwVoTUnmUQa2ww5tLF3LFASntUcaZsuMPvri9TELv3mPoeeKg1bLW3n3jA5QGZicBNCtGvHma5f",
  "key15": "25vwhGx7BYchuiaG3MUmAk8CWHvPyuRjjPWXycTu1CUEAncxkYgQ8kZBjAiTnXYmKWiGVpnYtGLq6s4V8V6qphmb",
  "key16": "346rQWFLdBYjEZFhrAejmF3LHdMKicbXzW5qQcNyzq8Uac17UxWkmkutUGktDsLda13fpswfPjAsWLX3Pb2MAsSk",
  "key17": "3AoCcv8TAU529xHWBVs7qLbDwWRhcpokeuY8NW3BCzjifb85y8jAJ9YKyRsVmJ1wT3R6ZfVWMkCv8mXB2iUxqb4J",
  "key18": "4RKzvrKVo8eEz22QJ4QHj8Uvk77YRQ97D6UrTguCno15dnWGjp3wy43yVcppyFpoDMd17QNqDrvvVajHhm1L65k8",
  "key19": "4RVmsQCnDfmXtMgb2yjxd3t4r4PJDgneXC1jNrQyWtP1mVnF3SpJphTME8q9XqvgzK5dBdWbEJCEqy2bJHTN6PtE",
  "key20": "bXZi2cSNynkxKsB4hVxKReoPdfmRDYpiJnhKcCtjPFVzeropKM25GfUqXPF4aeEz8ky1EjYUArYXBxneqkShz2K",
  "key21": "txJ4i5z389H7mmbrGJ9X17KY45ddztMoFSPt9ZXwU5eCS1KMeLyj2xuwhJQ83AyuWd3ACXvtpsspeN1tdWZZpWq",
  "key22": "4xuiwr8iFSqxgaDfrMNUNsKMYoMQpV8rHVTeoySbmN17HgsgtYtrtPXA4LWf4ck9tnV98D38i4CojeK2kXjmnfAv",
  "key23": "5Zf3vAGQkcdypCrFsMyf1pkEwLUozzVq4fP9arFxm5WeCawNTm7YhjRJJFHwAUKyJJ2qZHLGgHCiMf7Ej1ntokZ9",
  "key24": "2DY3vqWi5GfEr8YyaV6xKyUnHTXHFx6gQun8vxYdQG4EkoR2MvbbVR4Mw92Ki7W24Jk7toZZ5UD4nMT5sN7yX6QR",
  "key25": "37WSfBaCk3hYmhn2spSzbRK7URrG5c3m9odNwExhWH1p3jAMU4h6eDiFKCSumQbVT4Q5n9mWuqMshVSZpvdXLgju",
  "key26": "5NCpwhdCHr2h2d2ySz2ANvwL1wpqjAemWmXSoa7S6SXwfoMrh1kbK9ZYneEQRKLMXQbRcFgRd2KjTX3wQMtcAP9D",
  "key27": "65MyGkTmRdPyBj1MFdCutYer74HZtufhxLyLKHzt4Xa69URL95Wtp9NZ8TFnX8tNZNn2TeQ7SuFH7n8aB6FhnXQx"
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
