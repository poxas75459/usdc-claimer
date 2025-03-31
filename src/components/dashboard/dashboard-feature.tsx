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
    "56hWJkfrg6xwH3t3oVieLt4MUFpifDKME1dEkoUcDSKrD5CLGmqgDyQJtEWirs2wkzH29gVQ6LkYL1AAiNwvuuAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EVfTDwBhpzKMeJSAArMdgjKqKCLHWG67QnfKoRiXTPwje2dr9XfZGogwFqyj8J2gezqBpdrHjQ2c43ivMAitTMo",
  "key1": "4BLoq1aYUtARJBotVERLfjzcKhC72uddc4upCTzy93VSQswyfCuENoNPGG6XicTTUwDGfUwmBu6tsSXJUFLSKoh9",
  "key2": "62iQHd2fRYGaccCVvx2MzGiQbPHW34mL9cyH6QnE4ozDTSkyXQfFekZ9nFHSA8WNgKeM3uNJAuBsfRuUoxtk67Xp",
  "key3": "23FVBKpVpzfR7vkwvcWbqVyjM4nJCdZAsk1N7PND7uFLv92fy6T2Q9cPkUCH3dfd2uUdd78Xteiy6NvM9xQhcP3X",
  "key4": "q9dTHDbb73CmdyDHjQHKtkHgunnM7hWUr7bd89Lzdzf8PfduYGJ1F71Bso2ABs5k2UfqQkbEyYRf2AqCT91eXoS",
  "key5": "4bTXzE539ZXJEmZc3PRgFF8aCw2qho5CU9mg7ewahe7ofrWnvRYonzwvUyt5qbRtAtWhkeavEie3WyooBZp3Z4pX",
  "key6": "zMvsWJARBYJcjq5Pt5CUW3qtxk8iovPDL2iU89eRHCjtRoERqQkARsxMBZEjBFciRD45A9JjtZYSBCXKUmFBbUU",
  "key7": "4CQQkudRpZNpACXDg7b46cjxH4mZ5Wu1kP8GRTpryPYanJqMmjVSkGD57jf5CampWpHfoHHnShkMg45qJxnkNbrA",
  "key8": "2x6BQpKe4HSpuqnZCdDmbRZhMZmcpDKL8AgXGAbjBg2fQoRgwKobiDufQoBS2XNrEQhX6gyJHkvmK8BPpLbsBQYq",
  "key9": "LLZ7imWkssUp3bjme38vQAPkDRBgZE6vUkm8LrihvyRJtoKWrcashAHCoGt2SjM7NHXnowcP2XSHkX4NGhp6eXb",
  "key10": "2pcJG7LfmJaogsFWjowPcnY1Umte3EzgrWmezu4hacXjgZfca1znT5j6gYMLfvBqm1S5sYkx4YQZSb1H77hViLgJ",
  "key11": "3ryQiWhukXjDemLw76igVqYGvjMjTPBa2qwC9K1Wos7qPep18aGrDxq8bhUoVVfUcTskR94yReYzkRM81GivMKfR",
  "key12": "361BLeUSpBJ9o8Eaowp64Qu8H6e4eGQfkCxh66QnU5ZBBLSsExFT98xK4gFbdVoZj4vQKzExzxVNw6xCoDugawnw",
  "key13": "4qkiBHiVvB8EYY4SRrTpDvNrRRGB7hkpX16RsAtgVSq8bTpPrJH1tgku3mdcseyXzCTq4FyRJnVfPVihWs6HCaR9",
  "key14": "221LyjJHqfuSoZEYD32F6w8RiYbu1e3t1jjUpSNiJ9bjn4ef8WPMmT4Fg5AqG6a3JU4tLi4z2RVVoRZ8fPWEX6oC",
  "key15": "2aNodz1RV5vK1DFHUX3KE4xZhj55bzbQmfyDhb6GwrTYJ5Dnmf5LRVcCKQy6HWZzqJqthmyWpfEptpY1pXjhDDYd",
  "key16": "3AWEyAyJPd1MAJxrFPqNCxh1iPoEJpEHYhN8DPWCnYBFaDu2W4Jge8mLe36ynZxpoazrdoCZk9am2ekByjjLi4FG",
  "key17": "2ULfP1kMphxCNPq7t4VSzFhKa21fgWsXowjx8rgaz83KtHJv4fmxZgjcZ2MWWKydTHUJQJEE23zmq7N5on7mcUKn",
  "key18": "2fgX7Kfh36Vw1vULmpJ2GCoVZQm4ieNLBVzQ1BTsGzuMxUmNU6fHM6sVLftSmmSVyBvmsnvqvUrGUNDvJfxvpZam",
  "key19": "4y5ia6atoVXxrKq8acaYeQwqwYpYmeWHpGjoLY4i82PodkULwm7J1T2h26H9J9zPLNfUFjaW8CnUmYQzHXDHPgfC",
  "key20": "5VAE1m31cvr9sBo5Ajdke9yd4kDYcmMpvorifVrKbTJNr7ALkLtfPYRtDLAYz3er43CBy6FuyWNayGVdjyWbQFvQ",
  "key21": "5XGvxvqRSqmxmBXrVNAHYhs5oC6D9m7ejjTFxKWoEJ1R1ZSDzcD3KfGgLnQ7YdGTienFoRfkMUHh1LX9ECZ3h3eQ",
  "key22": "4WJkx7T5eD9ChpNzhzgd154W3NU98h8JZVSB52nAh3w5SbvxiDxVA3Lert4imGkTG3LWV9S7L1aHqTadGNdWSiUj",
  "key23": "2vgEgLn83sHrau2xewChuNh4ZejRzbJGmsPuGNQCzV9gdWe8eEmeMP5skPcwTB87JcxSK4bqZFidMPhkxHyCMNAB",
  "key24": "5RsUXBXnuZnpYwM7CdRhqHvfBSKVC7f1jrF9KizMYiXsHUobheYk4pTdYgpegjNH6QTKkGETTPmJn6oX2YB1Cy7k",
  "key25": "2EBn4YJ7hJ1dX3qDGiJvoacN81RSVJad8NixuXLEDLMJdFxjZrNUY1CNs7APmuTmBbM1G4924oAaHmmYbNxeqapu",
  "key26": "4NtiiupoaRpeEJ23CoWUAqGcfiaj2M2VQvz5MEU6WYcQCEn8awbnudrpgwdbbuUxWATVpZ7geZWQWoyi1QtFEc62",
  "key27": "5Ve9wLYBxcFMNJx6PR1bK4ELcxKWm77TqopEe1aLbLsXW9rLJjmwqWySYcUywMceMdMjVHvNQa7zjX22tsCVsaza",
  "key28": "4AcpQvExFjmZCVvXa361Jwc1WrbB9n6mN3SfxRiktjtRevwrMRbv1EkRc8f5A48k2HiHq4Z2aYmmyqaq7i7LUJnz",
  "key29": "4pUPKcK2w3Z9T778EL7ZsZEA3gNg7U95cCfPMHiHhzBc5p1v6rAMgwXdrpu3w7npFXLJ5hfpFcjPcsx9vBLWnx4P",
  "key30": "4VhTkzpfYd1LMdVHVCXV7TMrkHzeyAmpPGUaAafTCTbvqy5c134EuyRQChBBL4UmWDHNEqxirHnxQZhb4Q3bUd3N",
  "key31": "tMW6BJd77QX7ZpkpRVc4RZLWjFy57bZjRrLhjqzqutV7cB52wFS2VYUDPWKhYmdr5AVnmU9o7vBXeQTnH1xsWXk",
  "key32": "5KMa8DfaKaM6QpJMgNX6nwRqNnPPTUZyHhi2fux7sRnPUo97JRQjiDthRZuwnhS6J4VdgCRhvw8jW2JqJr4Hp4Ym",
  "key33": "xmhFgE4gQ6G8rxyDdcmDHgbo34pe2c8qYxJqc2eqiMHurJBX7SeRSgAKWgvk5PAVcDmc3d8QKTS676HuL5QkTck",
  "key34": "vEVoHWi3MKuRJEVfChgin5mbFeWDLVnSA2zGzYtXWykfNpfVsBvmbtvPwZpeaW3AkwUL3qPJk7xVTj1w5RgkG4c"
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
