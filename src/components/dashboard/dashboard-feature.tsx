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
    "49oVWF48erLuiKWzxivL4agCrHazfjF72cRUyH5HGHgVRjcBBJsVspFVeKoE3entkWpHocWPc39vRyguSy8jF5rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uidqi9aTJCVxsVuqsAZELRiGVWGGD5XPXwNX2ycZrZffh5b73tBBPbHDwZsnCDL4w4yhDRKd4UGvis2MkrABGUQ",
  "key1": "2MbaVu9T8vkuE4mpq8YLoaaK2JV5QUE2Jy4xVXLrH4EEs4CSgVp5z4GLHzWLd57FMo9xNg9uRoAoyzKxXJqjcZhn",
  "key2": "5ED1b2LLuvV4Ctza9SCr53DGZKbb2yZkvS8i4D9myebz4rKh2AVhGeCUQ6r5SCtqEjh3g83UrA1U5tk9boBU7Z6G",
  "key3": "7sZuBtt8MwgYypNEtnySGqyTFetY3kt8sS5XJNdTYXxNbozZU5cf8z73pEM9bfyD2jMkQJnc1z8PyWfbfp4FvLD",
  "key4": "5FuvRF3xjBWPHB5AT8XpHLtSwsuHTM4vzJYpvaDRUgQfAGrFTdTmzKrPotFaCtWnBm6kcr36h8iDwP2pQQVjU5ui",
  "key5": "1LqxyMH1pC666V7amNjJ4o9MrK72L7FMcxMHDHEcGvCr4oAJ3mL9cAZ97N8crnGpKDfMnu8gtcaBSFF4qz5JNyK",
  "key6": "NdJifowbK5wD6aHDLMMmobBM2TjfH2C5xzzNDAd956YfBGFoPrQAjA2RkmuSmhPzZm5j41xj6pogJjPWn7qYdzS",
  "key7": "5h72dhnRi2DqzVgpHxTqSu8aCrisyhdwjFxDYq9FNJEHK84oFxEcCpseZGkRMwcypvJkoerLgDaQXoUmdqRqukyP",
  "key8": "5tdXT8v8j5x2a47qUrvnJz8sf63X3usz3AAuQ8oVzkQkFPndPzBaBKVAhCNGQJqBApBCA2CGkcU8j5ua2ZThpSCw",
  "key9": "3sn6LHT5jzpmsJFarmXmkSaT2KxMaxjSJ4CY6D3dFVVaQRpLdunPvZnzNZcikQwmJfew8DcZZsLorYWCHQAtFcUr",
  "key10": "4V4HqbxS8Ter9nCEDhgbBxdvKK5gX2hYwuMv8zTC2j8r7imXMQL6KrZv9TgHTQKRuTMhsaycTs3p5ncSnC1XDXZU",
  "key11": "XjBHX6bpCaBvg769Ps7VTT9QDKcL8q9kMexxMA79CbZvp1VDhPwfRdznS6qZtx93L2qbMWjehdwwMcqtngQ4Qc9",
  "key12": "3jbU5keenzjgwRzwGcv5Zuds4pigMEnimfT6sAtZjLBmnCbJTcwgm9CpJP316RLeYdPE5JdZhf1ncEB4WSTviNsK",
  "key13": "5JXB6RLBjrj9sArLxjMPWkaPv6waP7g4kthvMLwyvegtcqsiLRGfctW6TH9T4yfjn4WQaGzKZfwgeifNB8biyqii",
  "key14": "2E4oc7E5sDAWqvoDjkGFmXGckGDXgFXWPn6vPKc1EbpsGmsV4Ug6ZQWCrH2Hd9FUHhdFQqqakkJKgWDdDenQBeQA",
  "key15": "49fnV25ZY1ahK8oaHU3wrnLBtHzw933hkJwbXhTQzTvKDGBUoFGgTWw68zqp2rguVuzrsgZUvaNbzBiEmPxFexXY",
  "key16": "22q2kUWb7Z1FJAKhVHvQajhUdXy4qchqgPB7uSq83p2PXCS8inAgx9oVpCx6uqgwVTkjN84tQFuNg9TDNoko2unL",
  "key17": "5zoTAoMgmB455ZQx3atiFhMQ8SHj8S3NQf6ngGUt6L5ANCaD2SzKNnYog5v96fXijnhgCLqxy1rmYTMmGqG4dK9b",
  "key18": "5vaUXgFYcwUFJngjxmpDMztzVyVByPaHXGUkrt4kQpNEebQikiofXNjRSm7sAYNztUYDuhms86Yi56wii6vvEkaE",
  "key19": "26RZxzx5DY5WJQVrU294znjbPAtz8LmQX2kSNTUimZmTUr3ZLypSVLRoUyksnGxne2ELueWtD9SvoRSJ57VAAoma",
  "key20": "5f9cN7cXkTpYJkpeWwJC4asrthJDCnNUS7U9zVAKZuK2i4M4nRxNgdYjZ85aH9qZwvs5YXyWbPXAyGav735mabQK",
  "key21": "2ZtL5dCUxmhTXTX8joDGaZM2yVCi4fJ8cVHpgFGugM3rhrxLubw2pEAm9183zxrXt8fZd6FoXfbLpak1fupNgCVr",
  "key22": "RQtYLZYQTJDQe9a2KChwAk98p6cJ145uT93THUMQVJL8Adior4nFSMSsLboW2DaRvCgTXTu2HiJajEwuy6pbXkY",
  "key23": "32J8SKYwjUihbev1f5PRXnuUg8VWTtgLnUJ1z74sJdDfjfcp8JG5VQaTBGLrRVfxcz6d1BhRBCMLGYfeozp9bac3",
  "key24": "WvpSy5zRxNDM4EkMeXnHyqjxQQFfEVUgae2Kuy7PdbSWRgH6AnbtJwZrfRWuwAay5fUBdyu5vGZ8tTPbTXeAz8L",
  "key25": "3bm84eeLtUDEEmGqkVqFFN2bo7GB3jUx2fkac8QS6gHTQXaHPtyLnZLGNXdA5BLzStqgbAGX9Df1RvJXhxpBtngd",
  "key26": "4B1Nug7sF9dqFteixsAdMfqmUq693UX4vtPdSYFCcx3DkChaDM8MX3HJGxihQtxzZ4eHkSr4aT6zY4h8nrKdbyac",
  "key27": "5YminmovcvfqsdC8eE4jakBh4dECEfZF5RAgwCCXeTdG6QpPRiyBJSyKvF3BDZyegyPJJhUd7hQgRhSsMmFWnY1j",
  "key28": "4hUgyHP9WmpVBoxFkLNKY6mJY2EUJjnwg3WuXNAsqEY4Mq2ZgSg6E1G3byk21JaiJNp2jQfjkWfcS2q5NtY5YRyj"
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
