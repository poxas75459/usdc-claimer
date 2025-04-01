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
    "4vq7eQSMvy3bV5HWGYhfhdEHjGPk7PerKm3QiaBXeUgZZ6hNeqiDaTbYWHsxYSAGuPzVa3zWNCHqMu3kJ2m6bMqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sQHYyTXsZz1JXTsTKpVKELyuShnTuWd5dgp2zBrnWjuvngr1yMhfY56hH6RPAtizh7V7gubhzhGSi1embn251RJ",
  "key1": "3T4sYvTuK1fQjDAA5MQKMj6nAPLBCEL6qmeS2wvqApKaaaHMXsLmML55JrUD5e1keaGTxq1ZYJDhkuZuoCKczrWi",
  "key2": "3vFvDs5NhkHVBG1cpFfpn5b2FTkdaTm9eVicKnjAHDgFeTPZMgQyxUhgUjDoYhoVjB3Pv2CJM32HvUzW5nWd5DwN",
  "key3": "541eCw9kH6uNGV2xotTHR8MKJ8YRX34DD7J4zbg7RT9JgzJdLLBbVyFMF1BNnu6VnR4uMU3tErXwD8zZxkVoXCFx",
  "key4": "JDoENucJ2RPpKqQmnn886b8nDwFZr5yF7EY7diotNpc6NLdgfKBrkUQLEM6sDJbgusoYDuhPRzD5XuZNzirV3hQ",
  "key5": "wWh8CSvLbFJy1j7HheMPTy7w8NLpC5WVkAeU92vcSftaaZh5GQH5ekWFr36Ka8geDqeifRDPvFgc5Qdf7GqZEVK",
  "key6": "48jFNTs8n76LMmPwTpcncgiaMQcvMHRrmTYnGzqnWiDyfTXBJjPKXYcgueS7MFxamVKoGvzE3Yq3KvUvDTJwAyCT",
  "key7": "4cSytLyhrF5aquxh7FSaEibF6CrSvZCeJnpN7NRbxo7VGS7iKdoTMGhPi4iuAjQnrtGdF2voJitkbWFCpZTJQcfu",
  "key8": "7VYWVMcjgNCQ2UQtgut95cS89Aohym4SRX6T5YRs2KVbcEkvbdtUwXhktgnSMw7BWoSpCT4N1KvQMXVJrx8wsQB",
  "key9": "41KhF6fyZfabKh92aLZvTuJTkKV5bra5xJRPmFfSy53ZLJXcnJAMD5u1Am9bMxAffNw8Uezj9m3EEwVqgD5y2Vmt",
  "key10": "5ALCntwRrBeURP5BfmMFvgscGxsod9xboVq5xVAhRXnJ5q4LGxMcFSToJghsag7RU3PCUyJ6BcrswsSPfSCZpvT8",
  "key11": "2xeBBRGgkxbnk7LBuD7REjLMuPJZHF5Uh6uBaeNAhirqaMMCKGN5ZvJTBXKFGZZREurLo2uDnUsPyKodcUwCBEc4",
  "key12": "q3GUHgfbscBVu7najF5xDkQrhRBGttDWZwnTMyEwDwfN6sqFwQH74cGe3YpjExtu8Gw3TTp3U1YEU82HPUPq4c2",
  "key13": "53xCKtEDsPoB1U26S5Ze29LniKNuZwRuqyzgffJrWJVmGZSD92PFMrDyeErfxpDzeZpEbyDQ1EDb9XLwT4REDdjH",
  "key14": "3qvB45HE2uTRkiw1eVrq58PyFP6KRjNKtPxxSuDVe51ewt2vRBw7Q5pihk6emb8oZvptxyaQ32L9E7RUw5bG1oHY",
  "key15": "LfFAyVEzE7mdGoDSA6f5b1HL4ckHXripFdNNM6ncYLDzvcepRE2Qtw8Jh9eoTT4Zx7YNDZPCN8UbvAYPakhYWKy",
  "key16": "5EBPenTywHRTfU9JHCFVasDoSXdhjEouZek2gcmEFRo69WDeMcEzVTZ6c9yZrmUMbfQWyTgQwgyYXaXbGdxahdKs",
  "key17": "2oQaNGGQT8WGZZiApLWRZNteVcsC3u3PuZbtsqWmf27dCVKzVD5NbzEYqCgxXm3qSfp3XA1djrRPxtii8rNb6HG8",
  "key18": "2SoCGUtGwxj3xYDMoztUaRwGBY1hbJyACWj7GkLBezMy7juCVsYM1k1vQDdhemXT1cFTC9ATKeHrrhauyFjXsTXp",
  "key19": "5SZjSnZf19xrqQycVorBpXSvhtFdhvtjmWtC9u1AxAzh56kYe4zWuAzeumMNXstDBAHUgMm4hZiqhWZ7yV8Qvq4t",
  "key20": "5ZQt8XpgMcWbn592MJMztryqmm1hzX5xxv823S9awqCPgtoEpTSvvPtxcFYogFUoLQPyrpPbEuttJHBSRYXMMLht",
  "key21": "5H7UDqg6ANo5MDucSd7GqrPZAmhqVByxZwFn5eZRQ6VmnBAyhZ51DxzCE72S7SGvPffUrXoWiRsf1vTCpvoVFqbZ",
  "key22": "4QxooWBSLUzFExuB9WfnaHDZgGe7f5HnQ4bPiZbqgHXhJFLtd3XPiZYr3UdtDtcXLRvPothSLbbAx5sBWiAkV1tV",
  "key23": "5L3SunLvhX658FJkM8YCg6NkdTc7fqMd1zNYeZCtfivizM9ZrwApUnsimG9eZh3TNUXbmoSfUVoLpKZ7rq8teXaU",
  "key24": "37813vDjmQHSXrWb91knR5eTZk49UWoD1p3Vka6baRU8E4iUGVLBETSXkEv9wx1QxtFHrNdGGHdwgwSfzw5WaNN3",
  "key25": "4UGNJGX636SiggiAghHVDBFKRDV5JtSX7SN8jPGjczPe2JmFjeVXsDuLRsGdPZbPkRNea63dAWudBabcxwKC3mxv",
  "key26": "4pbjasx71JcqEXZbV4veNkLbop4gKCuCAeFkadvWCDhu4VKHvWzJRYuuvgGP5fREPRVoQTP8tzFvp72mgqHgcfct",
  "key27": "58TZFXsfMEMd7v2APfhGcPUJajBUdokWAJSu9E53igPiAhEzwyT8uZ75e1447mtBnDhmCEjTXUGfqd54rTfTkd9u",
  "key28": "2MUmwAzUojbMRhaTEumxmz7u2WVtwHFLVGR6vYYhSxrvs4GRoAPSaXKofadE8YWEHD6cqformUGzgxmM85wu1jCE"
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
