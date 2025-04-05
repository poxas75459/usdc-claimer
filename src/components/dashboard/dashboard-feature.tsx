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
    "5uNoeVetrwSy7fA36a7BRCBFWYXGDmtCoiyTvr6SHz3gMERwXzYRTThrtAQ1bkNSahgvkQxzaF3zeNbick28B9DA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r917GakKDNehtYhMzMLPq6i1d7dPXv2UAHii6kzP63g68hu7WgJeM7rcJeYcno3pa7dyWXkWcfpHoRWuXJGLxKE",
  "key1": "cEwHKBy3CdKNYiro5jRheZeKNp9PTaKe4fFyvMo6haGjJ6XDvjTiCiDJFkuEfvQgHSMhwGxp7wi2eBy8eieQ8Kb",
  "key2": "2mN5dgFZpfMnDRx29JPLRGVLKsTtH1casu74iuERy8dJkGrBJjbZyHEw9t3e45AcS2yJsNAWYfPymFsE2A5UANxK",
  "key3": "5zK9PPjJmoKnpdrGMsTMpQRCoTi9i81aqU5aZ11qvNeRoWrmYZQErzyeCAxLmF1cbfTZwGaMLCB6yKq3A5qbV8i3",
  "key4": "4AM9gTZc9vpzTU3R4Mp59Gzi6vSsqrAJ6Jxw12hCTg4o7DEHPsdr5JAV1YYbixE2brWYwcDnCA4qrYASaaLwWF2N",
  "key5": "5L6LRKbK5Yn1vRTU4mgFRTiPQySvunFCXiNZf5idNHJMCX2WC7mWgdjZBnw3jWQ4vdEgyryaDQVWKbim66CHpNDY",
  "key6": "MHuZN6hJN7TcnzFVQUGLpeuTzReC81f8h84nrzbk9tXzeQMGnknSNn5VhCryxbyLGGbM4KWLfwucZdYo3viAZGz",
  "key7": "3HXsDREtH4frfnEoVxLe7qW7FsNitqpQmVKPZXtwqnrsyUqkxfrtukiB22F6NDx77wk9yeLAmmFreBUgJ2NTeq5V",
  "key8": "5eWEZ2ZeAH2fid9Y75BPVXeuBV9cKUZvmFysiWWTGbpLv1Ak5AwQCjteCvjqWr4KWV3Vo6Gf25FzKgCufBizdwMd",
  "key9": "4Nj4EaPkgbpp3Ldu2yaCSy2j1sTPu2i69Kvx4PH4pH363G961usdHdCycbYkw1JGzW3p282smDVo8fcEWtwTJT44",
  "key10": "3V4ArJ7iMgtpv9q5bxh9XGK7dg6sP8kGDceVvDMAQiTfQ8HEpBpKCvpYTDByXv288fHauNyYmXTVFqJWzjwFAQfw",
  "key11": "4MSuP4WPusBRGKvBGGws6ifhLfiTNvAFuaXzAnaeYdVRZjswFy3yuTDeLvpAEkEmiv5xYESCFiigmbrrC5Z3N6KG",
  "key12": "5XJtojjjakBkLXYYHsxnSbeZhXJFYLSaq6x54GHG5Ms7kvwYvUdYpkDsnXsvqf52LkqZUmkzsgejZg9JbMLBRqnq",
  "key13": "4p5kWJK9HJiKCj7JK4c5pkBgHKQoE3kvopdtuWArHsJZN95cSGQgnGGhn7xyPjT6dpU9HnMdwwYy9YDq5whDrn6a",
  "key14": "27A9HpDUttvuLtXfwFh5xScLgPY4PsVtFHtN4U4DySBpRFCUzVaSkFM4HRZCzSMkvfNmZrxZxPFzdCqiDN2Cf85i",
  "key15": "58DWeg2FNP2WhPwxi5MKCF5up3zcpwU5t5yXqP6MdRvaKJ8RcuoB6EF1V6KjVmoA5m1mCc8qBCkMzXuoAvWPJyau",
  "key16": "wZt91dVm8YvVqRUzSJ7HH42nZUsPKtFT9GxooqEskuYZGBExN87pEyCbnCgNA3aGjvpN9KFdQZUvLfVpnA2ispu",
  "key17": "3n78XapfvapZeY3MQkMzA9zz9YCoDWiEoc7uxCwva17e76f6w97tjATQz7rFcJwfejTHEXpqwjivF1HkT7eUdgyJ",
  "key18": "45hMacjC9V3XJWMjqjAxdbz2NACd6Q9D5up9wR9L6aTBqj7Un9xTaYPJXG4oMtaMjoCNcSNceGAwF5EhSFkJdXC1",
  "key19": "4JGDmo4wZkohcw4ghjYqcTArcpxQCbqPSzj29p8hZTK4bvjq6iUiamZv6nCmDGR9iJURdo1JbDn8acsmTHakd18Y",
  "key20": "2fa6NEWnDSnArafV9MW4id1xSusznvCGDC6ZSP3JkVDswUU7NFj5LnY2eZ1dXaAguu9iEfUAQgrXVLTV9cXRWHar",
  "key21": "5nMRJmDBbaUUbJmvYjsrW6oUVyNa2SFnd6Syan7tXzbSP2stDmQHMcmQ35WcEmrtrKWaBz4XWQ67fwBtaiEj3tjN",
  "key22": "4BiQZV5ZABYR9j4UEz8HZPpP3AQWQbMof8k76nmYgBMuevLjzxUuUM5iVmgrsouE6bpsNTnEQKeoLQFguHYvyL8D",
  "key23": "M7Uw3aQWNzp2dHePq3UHJ34JXMNENPnUJ6FrQj96EUrvNh458gETtEpdDzzFminHnm3oqpFS36jEhp6EqgFrt95",
  "key24": "4RJzJxkcnuJkcLS7dVm9s1exCXx7dff1EZXY9yyXmniQcKxg9cNKedZFEwX2W4k4bP84PUBQJasGLjPPaiE7z91K",
  "key25": "3VGtBDTnZnzQWdmp8xiLV91QP5F4657bG8uysPhH2LzkJ8Nv5VsUJqK8QL5QLQQT9w2UTZrunE3GPLcywQQWrWzF",
  "key26": "3k3BWP3yFbnN3AtVB49KKM1q2MCdoN49UQtm25CA4X8Vd8ebTJBRoZuGp1buJWErzWW8K8TBeB1QozSjRvdRoN3v",
  "key27": "v6ejgww5x5sLwTEYB74T9it2FBnk5wESdSQhfQVLeU7vaqufQushjuhZjRQm3iSbjMJq4jSDjjE2nh9jSx1EQUw",
  "key28": "3WgbsLF5W1pxBS9BAkFkBiScvq3TMZKQmGL2GXV6ASKU1zXEnBWMqvQ25bGQ2Ra3rVhNfhwwr8g2ZLXRn7p8tYb8",
  "key29": "4vFJFdij3yT7yXYqG7DL6ii338mfHujxhmu7gb2ha52XRJEcsDmvw8z99sa7aGt8m7S8LcbsQWdeVKaqfyuxoL9R",
  "key30": "5BfpzRRvxTzjAXNTZEAZfiQhVsSiAhRaawWYmM9WH9U4hAKZSnm7KBrj2Ra6tZ2Nhp8WNHJhgdFwSTPddL6HsT44",
  "key31": "4swUxkDrFW3s8pu7B3jccd6tVGTbXtbEfngBnYvFuCtvZjc51rxE4BMBE6hXvKxF8sAW3db4pMGSJdNWggB6Yi1D",
  "key32": "2nMtgN5hqPxm7c5f4GW6PEMD6cas6xgrt1L7XKc7aXUbU6PcGoc3Grir52cYBK6gTHkmNCvJqfrtzmg6Tf2DUmTu",
  "key33": "3UBWzTaZmYeNB9rY1p7EBRHi673UueVQwbeycj4697HZBJnZ2yWL7uWtrLak6BEnkum4tQQuCzpGgjyWCNvVRRew",
  "key34": "2gbpLBVsTW3KHVnruoVFKsYDj5vE6t3Uy3t9Rg15Cxy66UhpNDwZDWk2GD71vnJCzu78szTG45KCqkByWeHk2eGW"
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
