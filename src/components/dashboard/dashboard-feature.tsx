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
    "4Dmy3uUBzi6wigp5Dj2ZDUQFoWrQjKFr3jmMnKNzX3DjXuwxQJtqU7CTMLiwCN8qMekNjTmGMAb1Lih4V7if4XhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bN8pnMvbZgVHMJDW3x7SzgYWKnP3iK7bJx1Tsi6dC1ajmSvNrZqc5ZEc4Wd1gZfF2UwW3KdRpbYGLyyAhouVjGJ",
  "key1": "3E6NLjdo6svxYhtGUkz4fCEqBaEZYqs4NZ6JXUGsDpJHxeRpxYjPfF4iFZeMFrphi5coBvPK1QdRCytudQu5WJd7",
  "key2": "5at25oP7Ybt6wuKnKqNV5k1xiw3LNUC8iDtZXGkdMEJoWTRTrewugf5P6KuFjfwduuyWPc8gcVeXgHWZWfyMczCS",
  "key3": "3HAicpcUSthMyUWsxaDSzHgVrxNJyWQFCNm12iGBtCgy3ugeXt9sSmPpxosRg1TqxZ8WRQzJJK8m8hjRqGLfvbkh",
  "key4": "4A2x5wgS35pSDx6XwfXYuZbSmXg4MeCLm1rU1qLy592QgPxaU92yGUGWKPHHpKUHKh3eSXKsJx41bKg3LAaVoH8d",
  "key5": "3B7VMxLdv8vw5cC1kVq1V8uLw8ZdXASrguxZggMGBf6wmcnTeA66Lbf6XBszkgWBPXVYzLfhV48uUy3YU53ER7Fk",
  "key6": "Jqdw4BKcZBPuzgi52fSwtVM4QX6LC6pKob8uvwseDAJYjyxCCsxsL8yFze99MUCyyinjRHvYN9QEfZ3hxSAiZfL",
  "key7": "5Bhh4pHzqtdYFsbe2AzQF8eU6SgcVQotEpVFydpFBTETRGvV5vFpe1ofDB3dHiGMZdKofC71zoiwezXt41UZUByw",
  "key8": "iEWqQzkGWarm7H3GwfGjYPKsAqsrn4x6nSoCE5y5vntPioFDaWQTVnnNrRhH25vnUo8yLCtdABWsNLnxgifzNW3",
  "key9": "fKoZ1ZrdYBnG1RpQ9dmyhKT8YVYNWctGJhsKovCE8wr3NxAEG7KYVAPPh4VDfNtQqvW7cqXezW98q1UKLpbZnqQ",
  "key10": "3xPW2VcHb2FFtCxQKnvLtBTYq9f3cHVN6eX1NewuEnztyKgKk8hYeWonTSbP347geMNNRDP4xZGW3JssQbBpM4pL",
  "key11": "TByU1Wrs1skuzrkJSMURxLpAd1oxgfg9vxYN1kBk1YKPdo54iiZGuHBzAghMB68fLrT3dwYGD3cLQLfoqZKXKUA",
  "key12": "qmZ8ZZMBu2RF4XT17RRJkdFwfdZHHGkqmdYh7LfNkCtC2GDZ8ZcWHWfDVEQxsv6C6WRvoq3f7teDyGwKGHabvDt",
  "key13": "3UygDaR4qexE3ptiLZAeuucE6Jjjx1aHmYvxtJFcRihyLfNiJFKgGWERUZDyphuzeiV1d2QzjqAptPj7dMsMTHuD",
  "key14": "2bMTTVw75Bv2EpowN2LLBvjtCX16r1kyYVh5tdZusFaviN9NR3CTwCn6oCT5nC6atL6MKpKoy4soJNgGHX2DoLPu",
  "key15": "CydRdY5NafEUJ5uHLEBTuzCYX2FJqAtN36x38BzvZgmFxa6M1QgBut3qUAjASc2NAuc2m73o5fr7B89DvaJmF9C",
  "key16": "62z4t6mdZCxhoCatecvdGh2Kj74v7Ys8SQk5CYszqKaC3ZFuyZ57yLFWocf1YPFKTDCYQpELUjkow9oT4c75PVPH",
  "key17": "eb5Su6XMkzKCZyhfeLRarTpj2xmKFZ5qTpp7X6sDpnPBNGPadC91KS6RBVfhfTpa3o4Z8c1orkdJYUFF2nLbNL9",
  "key18": "4xk7Q6jGVEKeREkZJ68daUHYc2KRLigEc6fJ8EnXe5PJTnhHZFXe9HpDo7waKsoLpZrZ3JUenhWJeZSWTgCos8Nz",
  "key19": "4WjZHwDpqsGwvQmqrPYpQtZnPFTQKP1C2ZJjhC7A5zu9JmNcUQKxeamJZzMgmw9ZfGV3XCaKJtuNA5CWy9zUYY7X",
  "key20": "RN95rMcRJBYYeMoZC4xowmaXKd3uixYXCvt3unUNjT2rgiPxJ5Qv5KTedmgzxJ3ZLtpbBah2BG67R91tkyaFQhW",
  "key21": "47XVA4np23hkCMVvJMVtd1m4NnoqrjNNtdhkSrt1DsxaTNqmUhQGota3C1xmavVvB9GoBnpo534SFv3jrwvbLxvJ",
  "key22": "5N1oEBGcwvzRzAa9FDFsPxipgwFwBry1RwzXSXAw3pdv6MKgRbRNHyr8VRe41pwCNpVn3xep5ipYjSduvrohjbPs",
  "key23": "2zJ8kAhX51fckymgpmnXno9qHBnNmhv7bcbNTPoGi6QPTU7aFSEDyQyDBjP2YAQgdvXTrkJvvX9u4LTPDMpyTXST",
  "key24": "vAjvb16JfJ9HxpSiBqUDtNs527Dew6tSwksB63bquQUF4iT2PcVZnaMjsGgWbMzVbnhv8V3Tx3vknzwHwnLQNBg",
  "key25": "3MPQuRCLSpGejKboZcSdxSvapgbTS4C2RURDBQSUvMZbdj7HLa54ArjozddxjzMqLLUrPBJYopETeFEzznAu7MGn",
  "key26": "5Uw6myJ7UDyPwbeRPXrmxV44itq6nEyFQHDRq65iw8C5Jiymp23j4oqJkxZ48cg5ua6NBSHGMnkmda9KzLZXq4Gm"
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
