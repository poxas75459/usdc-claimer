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
    "4CNpC1SBtDsBXXyXqtPdMaS54oKuurdQQ3oV2vSHKBwGt629AoRgb9J8nAmdyc2VZiNbVJa8fxWrtWQAFUxFmeZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rDQ8zaF8VWcCBBgUgpTU3Vf49VFDoLQM7qtMMyqE3rUvqjyp1jJrBaXpFXEZ41poF7ECewziubvMrx4uWeEmMRM",
  "key1": "Kmn3uDESbn559EqxsZtHuRTQHgKr7nC9vavJskF5P8oBJfMf3fhiGDiCX4316EGCDw7FcwS7VTfUvHZTrknAoiZ",
  "key2": "HGFkDnwC6AzMxc3cZTMT9vnTFnuVfUkBoANWkTBPgyaVnZd1zGi6LFxBGC3Koqk8uUvBkg34w8Q62gYFJ9ASmzw",
  "key3": "2TiPtN82J6B2KUPuRCikaehz4XVj515kuz5BTvSRBJ9qWhWfhxxJE4TD8Eb2TS5Nr4njGkTs1odv5kqoifg7FpV4",
  "key4": "x4JcYa266Y4WuBS7nVybAPoDs93CWXbAxoAyqAmztn5ag9JxfR5wwNzwvQBnWzBVSJXGJGLLREPRLt287tdTbpj",
  "key5": "48TtgS4akqKWsj4cZV5GhXsTTgD62329myEUHaw9tJSMQ55MaC5SvDHhd3nNreLdmzXkoQJeef12QXw83JhbrZ1f",
  "key6": "3vCrhmrr8MExDfpyibKuVeMtiMMXFo4MrJtz4NVsN7CcBrZq6hPHcg9d7VHB5XKFSBmsxeud1nmqSWgrzE8uUYht",
  "key7": "G5PEa1MVKDs4DMCAj3MZRWrMW9PeKCGumiLKST5RFQeTpxYxPf3QouMbMPMcKXR5sjinhifgFzzgrn84tQKZq3k",
  "key8": "4BhSohRHg9Zb4c56T81YPu679oCHoKiqNp8viMhFwrhzZK8jyguofU2UzJSvwLnyBo8A3rGczfXefvGfxPQKHRwd",
  "key9": "2oxixiRfVC3CVsUjGnEmweCMVpKjCn2hzq1982eFVzDeeHbSzwNjwtQVVmAdPdu3wkrYCQqvuLSU89YvrNyEJdVz",
  "key10": "2FeV8YRdxhaNw3RKGnCA4mukhpYxgeJ7oTFDZDiUqgvPheAs1HieY1Awf4FBziDcXgWeJh9XZZuqrqgmbUx94NF7",
  "key11": "5YEDGZVz92FjxcePkBfcCnUQ6s45JnJqBKUVG4ZHDsoxUiXvUc5HKK56JXNBWrunhZJmqGdZ3A1w8cHb8Vbv7Rdx",
  "key12": "58yU6ezebWZ16YfprBUBbEbGfC8ZabMouiJyiezxdjizHyzfMpw9YyUBG1dvkMtXMe4F4eF17W7XSfvkauFToVgU",
  "key13": "3ZAvVEVzdsmDq5dRTxxDJhi16k9JX8ywoTGMfR4gs1fe3g64bYzaYYoTTLs5vZqHcWD6k4apm3YCvySpHffFEWbJ",
  "key14": "73KCDYE291umJEotdMpYKSkBystS7wtQUfQZzfr2YMTeQJiHXF6K8E2hTJk97qgZdFXi1zdN6FeRzt9w3djXMT3",
  "key15": "4Ed7FW8mpkw2j34AE1KBLLaZzxpjf4bySt2PWmUjpowW6HFMdWoccTZJKJKAZP95i7TLzHCD7JwKqHz57392DjQw",
  "key16": "3FfHiqZ6U8RVkGyZziUc3ZEGobLwZ1DNf4z4rAhkiYPXS7r88hyKMdKrdqwL4BQZCPUNyoTEm1zWKQwTRb11dxQs",
  "key17": "5XCxrTodjeypGw6se4uYBMpakA1TjKMxQcemHj4VdENxYjSGdxouLa9BhvCBu2i5nUzy71x8YXoe3XKy7pXSe9JQ",
  "key18": "41A1RkBPVEkyMiwExFQG27t3dFFgf5NqgtZeDG16sY96ZGZo5TSBZTGYw499xbPLYT5KY9DJQoBg3pbbXKmzphWw",
  "key19": "55DHipyZLH7ZeiDhWfJBeu42FDXp5vEq7U9tBmjgUVQkBqFNAgEWR9eChNcKL9PdaJafi7HoJsvE2bJwCTLFKLwf",
  "key20": "22Y2pFYfEgwr7JssavDmqMR4c7dMAzEQ2RqPG55e7ByMcaxPcvwMttDZUGfiEmA1zc4rj9fQchWGjCLcRdJgFVVh",
  "key21": "Ldxeb6RPV84DQsmksALFBmcyjCaP2xnoFJhZmP9pAXV22HoUT5811Rt3excmubtLYkDryNuZFYbBvfciNCB8GDC",
  "key22": "4A8JrMQqZGZREySp2BghVbfNkaRsLG1Bs8xAwaeWCAggp78H6ejAXVfngXAVLA1HzxKDvAJGqi5TfrPou9Th7W6j",
  "key23": "2v1wuFsYw8PSBXgrtFVdJHLpVnd7E8RhU5LoUFWakvf3fci81uQA3rsr8ATumNB6dtiZMphfpcFpjkkivNdtcMQf",
  "key24": "279J93T9ioi7vYC985GzVsULGfZ1hFz43iHUy9owb6AH9iu8j23boSTYv22zmcvSd1sN34AZFm6AQYomiB2CzAc3",
  "key25": "gFtoTPjf3RwGbycLVVTk9nvPvZc1W83VPBrL7Wz9otqJxWQLY4kJbFxqc6CaFCi394zBWi3HLBKnv77gEuPZMyE",
  "key26": "3VRZaSApAKQ2smuYf3doXCJiJYVgAutefkfYXQ8feJQJ4aAhdv8Lm18RoZUYcjgLyhYvJm3V2wZ5UnNvb1i5XXri"
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
