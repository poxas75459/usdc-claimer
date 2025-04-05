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
    "5TN4Sk3NwD8jao6imSuv8hY1H6n8wkVvi9N4ChaRaRJvAoEJBPCEi1bq5K5K5YExoRjngypN3SrLxKWdsCNcP6T7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dVTUhmXN6MV2J6vLPVH1hBPTYcievA3grE9Lg4CRKYWtPVJdvBuEZG33ZzAoU4coPSZQHVuxmgjQmdarjuHpDmF",
  "key1": "54yFTMRjxGAxhVEzLHuaxD5WgRVXNUKrozEh3NJTy3LsyfPekB2aBAoqzTnKyBrBCWcKeZ8M9Qoz7KAwimsLgTAW",
  "key2": "4NkqmLr9i2ZbvGQyUfdEMZM6eTPuJqPgmcda6QThkC8CYq5FJFUadB2iKvrcnnvxN2Lz98qAGMsb1mLVeyQq3cTB",
  "key3": "xJjY1tB8BJDbV7d39EZ3dNdUzT5rPgvP1htFbMWkXbtSa3hAy3ZWH41YJbA8UGyEPgWPDoxRb6eSfzuNzFL6HMn",
  "key4": "5HF6uvQKnh9cusihenAAtyciopaKDs4W9qKb2dTxF8yWh2bdxU3Ezc1UAfvuB16cyr83zQT11ptTR1nJZqCnn2Zp",
  "key5": "3YMVdFcbx1bgR71b1LkCzPTNr1WxJqjyVEJFgtBGXqVYz6KQo777ZXajjkpZnUWMXnXZVadgQJG9q4RvoTfZe8ZN",
  "key6": "5bkey8YWB6wNRQbuDu6djEEBeQExrHrVc3q16KvKcM3jh7gnxsKNf7Ea6rgXG4y4MF3nKYrqqrF3qjVNqGzjZ1Ec",
  "key7": "3ykMejJoJT1cB2xi8deBRnmHphGDp5S4C5YXZb5soB88bdp44L36zmYX3z79b63B9cXKUQgpTgJTwHja3qc2JKDG",
  "key8": "5uS1PgrinJvgXxXptuVr8fFRdhxmLNMiLJNev4yirPFfZSzx92NHWPqEuptgy7pujUZFtnmRzLpAiAM2ADWQCycd",
  "key9": "48P5h4xbk2cYF4ZK2SC6v5ZgoYD3Pb6xKLE4FwbkrTw3yjq2ENdL4jx6V2q6yxhqry7wgrZMX1f47oaF4M3ALm1z",
  "key10": "2wTnQTYDRgpHHfpgReZ272NmdY8obhXU2qUUYgMQ95Q77h8dfgtdrfHqDH9VdgQ6PBzAVm6XWRoeANxJiHsLH18z",
  "key11": "49cdZ2Q3AkDLBszcSpxyzrj2i4iDoqB1rHBhghRayrGtUaPw14duXEwBetvejWR7izKdFg7pUGejbUZrqinHXHz4",
  "key12": "4iNLnw7UbrNuDGdexTFBrFyLQ2bwHEbSnsPHCLvwwYawYBPxQgDNPZrHMS9yyQQazX42EEVvsbXF5rni9uNYxuof",
  "key13": "5kMeoEYwZHPaNeJw7W8p2Rey7XHPfHG4sh7NTooBKpNdEyocJiYMsZ7uPJR9qqDBYNFNUEoArG6WxWjkpsVaNfex",
  "key14": "61aRpZayRmX7Zq58jaXZ2F6cYGjtWpXMJHgrWsa9WqoJYNF7CPY5onDqAqexgkHD1tymoN3ciDbbsskSHSKrAuCU",
  "key15": "ALPyU9j3WnVLt2nDwJpEkiJxdtqgjEuXwDWXtkYH64PbuTvrHA8FhhrpFNoJWFZuua5vKFChFzNkzgtxHrsyHdb",
  "key16": "2uK84GWTuWSTTudzdYKqKZJph1Jm4eqNig79wYkTz4LJp55BvrrpnhdF4bwdACbv32HwYtCmxQTMGNZRLACHshWp",
  "key17": "4nDk1LRuzzXEfxXynqQKBHZk1z1ZxYnh6nKjDSHfsiwpJi53Y5PXfxiE9SkCXfrf8xejUKBJVE4Wv6d9HvAGbCaT",
  "key18": "4P1ULAUJwjdT7wmXagRzMRFkMohMxPVLsecxERAkmnknB5YRzShzRNNBucSxZfCyHxDwHd5RuspeEAeYSBbvgN8o",
  "key19": "4f9bJepukquTeydavTfUtbZLdYnbdWcxNAeCWZBfEkdPTCfPagwfmdjYbv24wNC5y3kEWuEgrfCP5wZdT6uzQCJV",
  "key20": "5cC5BrmazsUJHVVQB5dwEmnhUmZRcD6WKzjSyjtwQpyT2NSo14Qd2aqqZyghhyVd5c3nMkZPCGPbTJt3wTTe5p3Q",
  "key21": "3rWpEVsXo1JFspoAh3qM99RspVcephiPNsCVJfKvceb1CzvabT2Qedb1svhvqrrng8qibaUVvSggXMPQjKkUSMdk",
  "key22": "5mnwWtm9KQ4UsPR5CkW1QT8MJpUisv6JjV4MuD5n9kTVrLLZM1LuA7yzt8JyoEpZvRDk71njNXXd1VbczbCF8S9v",
  "key23": "4j3cJjoTWd2C4EWhRJtZXoPjZa6hphPn6eyq3hjAgP7Aa94vwyFf2aZqWEoo6pxYkc1n559ocHHXCGTybqgN4M84",
  "key24": "5AD1tLdYfWJMdSpHG9cC7sNtTRa1fTvCmc2UTMTu2Lo7B3H758WCZwqdmGjiBV4U5N8d2E5bWeqXxG47moNP6bna",
  "key25": "5KHSNZiDibR6t3nY1uPADWhRbPg6PkFy3fVDXBg2Hu9TkdQiKFtpdVkbbXXzJHAoim9wab8k8kzt5PCQPqHGfNi4",
  "key26": "WqhaNmUf45WHvjTzYbSFrf1iSpvqn6JXdRj8avbyTeEKPH4DYgJhHbkxrE3EARUTsprViT82zFonZqmdYTrogT9",
  "key27": "35FjVnC4C9thXh8vFM3swtR2JZUdnsXrPygvKtRqEiZseSB1k7pVU2vZR2Pf9iK6RKo267j63haZqJwkmzkaQWGz",
  "key28": "8NHVxhAatiVwu878S6YPiJ5r3VHH6rh67RSmP7k5vFdb4SdJZgsqw8jQ52AiJBH2TYEP7aMvUrxBawEVLs4dWhn",
  "key29": "3ZkkJdqR4MMxXqv6ZgkLXj8boPMkNwyitQVRo6boEntg7HTc28MnimjW24TbQXNMBnz2vFwTyinLS8d8MWthTacm",
  "key30": "KrSL4nD4JqQ27pjBvt4Z4dmrPNRzBXYWLBxKiahWy2vks9Q7avg3AYW6StWeEUzn1VJHQUR4yVUCYU2n3fS4qgc",
  "key31": "5Cjkf6wqiP4fATncQHu6qH9NWAHBy12E3zBMLQPVjSyb7AvjQSuT6RtW82gFQHjLhdsezUpXkjTSVEoiD7ZyzhK",
  "key32": "DCyJMzHHRMvVM39RBRGfTExi8d5uNLxkBjTwhNYac3EsPbgmPq7FwzjygVRo3k7oTeH7NmjcU5BGdCiwM1LziFb",
  "key33": "54bgTa93RFpU31C5W6qW2zCsNzZUtub7UtWorJLNGWnQ7WrX7EUFe8zou8syagXvZKtNQDLhQHzEiuEHRNVjA5W1",
  "key34": "3ezuMEeUyjBqwfrD3Aysf4RzECf8mfmCXVMY7JGzQfzKatvY1Zna6hU9X6XDDiVZ42tezHcumnXsx829X14D3tyD"
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
