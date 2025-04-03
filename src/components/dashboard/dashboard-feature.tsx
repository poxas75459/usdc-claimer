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
    "5BaTTMfAZZUPpSiZwixvRnP3XcD1RdzhdF6bT4sG7sMwUNQoVFqfQP1ecVgdo5bgFXQJWJf16hciULhbPQm9PNjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uaw5Wm3dxAzRFZGF9xxac7jKfV4scNduAoDwe2nQy47i9WNk8LpgrWNzXZ8Mr5XBvJCcfNyeYZLT3LEgTHoeSya",
  "key1": "4tt7ar8RH8YE8Tjaibeac9FqqNwKbRCQf7B7wTe1kipDKR1NjLxF7532h7p1bu9aq4Jk8T8jrn4ZNE95zsPLug6X",
  "key2": "5QkXDC6GqrEsbnZMAQ29McTaUPfKSTc7HCw53zqjcbKE9ZdDPQz6LrJxAad2BeCq3WxCpqpaFC5u93U5U61cHeo2",
  "key3": "4EMpj8TYqbuyhx36VwWhrowbA8E7gFv7PHrrYyRQWSJjTgmG7b4ooEvsNra1b3DGqRmwfQEyJDZsfwMB26jaEdM",
  "key4": "zbmNYmmQRg5e58SXYAqNrTBQQxrX8EAgsJqdFFtSMrmWVLS5Aob8wYhdwnqkv9gkoHCsoeNx6or53f9vKxNf7eG",
  "key5": "4pNBu5waSwVsShYpVNRnNgSog5Zvh5vBezAAscGVUmmvGyGxAaoVY35XmBfhSdZK5VhDdhKn7ZrfGxkboG34Prxk",
  "key6": "4Gwpy9kicWFH7sv4pk292V8VVuvtWTXLCzkppsdw2G1tGKG9CgdYQHtRp2XnJJWX9UatH2PEEMLszQiXMxksK2bR",
  "key7": "RnDVuCPUZbuNJSZxbeEu977m1EyuS4vi4FDsa8iXmYtS7WjqB2496ebEf8KKyJ3imbRfz9gkMq5GTisX1z65n3Z",
  "key8": "2zBA27p9SYFKS8aDZyqSBoQ6HEnnUMR5F3CkQ2SnBaS9CCMYRZBwjjE4QQBtBvmci7CZV3EsQHVQfFcMYnjfANCJ",
  "key9": "3eJbRXMGvyigQJgxvVYMitTFb1grgi9qcDH6my9PTQZHaodxWV9acoXwF6xwWkPiVjoTZRx3HQX4GrYR2EsTehy3",
  "key10": "5R2Ks5RBhXwJxsUXAe6uQyCHiob4XYzHvquMEhadjHNjHvbGoVC4cgDhmxFstBPKVfCxGfrwPQvr59rh2iMSwJQ9",
  "key11": "5mHrqfPierj6KU8wAzAT8LeSqmbu8DqUbpLPEirWjpqS82McpqRVfyESuXF1PQzwVA4ch7mWDBbZS1DYLF6c7ecr",
  "key12": "5BrBS9weFd2QFsAvXFqKrcy6nSbtjh5q1agWxriqCLDuYuv9Pm7i9Lxua2DFrot3iTZEhVuidjrkNgEvhkUD6z6w",
  "key13": "21WV7GnkFZHLzoY9N9hXS79mBK19WrHuStFHh7s2qeXGAmuUr2SXwSfc4vKvz1wWh6mMcRx4Br9pV6RW8fGN5xUD",
  "key14": "2NLFKHgxrSksGsTp9BF25deSXbKjZ4PryEiuikVZE7XcfwUTZe8tasKtyBStgbgVtaDqaW4rE49HS8SS7zTdKxkP",
  "key15": "46EqPzFqdgT3A5ynHJpELFgZenNPQqCuGC89NmV6GhwAgj647SPwWWZZ2d374HuBox7KAfJNpZFL7fruhPmLWBpL",
  "key16": "2gpFY8meJDBM4cStic4q62HAzYwbizW9URLk9tGTxREycFnuz3HqMBKP5eettE8y3W1wtz7yGt3r1XyfbZ4UoMeh",
  "key17": "2Rr5Vrbe2wPnMFQ3ejNJWEK3jd19BCW5r23u5ppX1oVFFa7RUomxdGMQW8i5St6E4fLWtrthiPfMwfta2JoR5PVx",
  "key18": "3wE2Bmx8E8cNasvqB3DYqedEDuZ8rtDVQnkL2qEqDX6FRWk35aiFm1jDyd4DvehMeYNcJ4nuTmmG6wJ98uSxGU3w",
  "key19": "KADpiq86dDKtjaFJn8x9SdAxzkJ5gQ45NGhdPRBffevXUfX1xPzsKpEsnJXLKcff3RvaZevLJmfrCqhB7kb1QeR",
  "key20": "4btcgkDitJhZE77k3gtCF4AUgb8FvUv3iehTzCTZWQ4N2Pw8GAUe3i5BgqT3nmhKtkg2J24j19CX5PJMWmKVRbM4",
  "key21": "2vkwDghWaamWbY9prtJEs2FzF7dXAjpgq6jjLKiPZZPCiTNgfEYZKFurJeouK8zQxnYP8dMzEcGf3ksjBwSU5cwR",
  "key22": "3opznaxbmRcV8jxMWum3KooVHqsjoXuSPxX6MnsScvzTQGmJYHDbvXsc3CT9L2kwW254CNnKbWbkExCmDhzDyD2J",
  "key23": "3FJ6nTswVnGrPwhcHE9sB1wGa4eywAh5PN1d8gScsQViEUSz4viqGr3g6K56VxBU1bv16uYHtdVkDczDLfxzTC89",
  "key24": "6hpyvhPmj5PEG1LTtsRc8e8F4TEQSFyPF9Nz3G7LBpiBHycAXQs2y8HLfLsWAvg5yHYT474EfrGfEBsbQYFRPcL",
  "key25": "5Nt2Z6ezM76vHc8NA3Qs5N4Zvhr1eHb2E29BkENoDUiV1wRHqLzTC1kM4BxsC1zkyNzbvXQgAe9syS3RGivoSfG5",
  "key26": "QWw6SrL4Sfivyfcx2FS2zSVmJtkhmkcXCjiqeTBwzvKKMMfQVKWANMS6zERBWxdPWDaWVPKwsrAZPPDdVgDENmR",
  "key27": "4Qi9LL1Gk74Lce8EvSQHW8S5nwC5km8aQEzpngUtWyHZpN7VnSuhyo6WiUYTPmg4Met5hnkELVxCcpZwnwAf84pE",
  "key28": "3DwJxstnKMMCDmmkpLUSxwLoJrxYvMmKG44ckpBHzgVhiLDNegz6QtrPMdf7vci7k2LSK4WdCK9x5mPpn1WbTWMS",
  "key29": "59kCjoxAhu1Ne6djCjfLAj32dWz4W4h1sZeRmdczYtoZujBHcR7jGtvLciSbnVLqbcaPLdwKvATpvbPjPKKJ4jTF",
  "key30": "5edudAKkDK5q3Bo4oP2imfHc17JBv6bpYyVmkw7wBGxsKLHB8is2qnW72X3ueiRWZ2woUGXSBfdPLQ7SrNSSPryf"
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
