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
    "4sKh2hyQxBuq6J61JkAwwC1AVMQLbDKQKz3BomvS4EAiuyRVHcwZKo7rEbm2Az759SscqsDAmykNPN585hiauLg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tzMtNjmjBpW9DiprFGHC8ttRGLcLqZyU7F7h92YQx1EsqYSVia7CKXR9iGkFFQuARJSPrbeHTvac59gUca2DEGP",
  "key1": "5ivjoGuC64TZ2NKQXzBCobwyMuAHikASnCGR9sYhZ9MYrNmkpsNobUFLnf4ggfY3TnscC1s1myRbU7LQ3UYbk4Wp",
  "key2": "vce6xmrG57n9TS7M7YYD2H6swfaTWNtDSCLT4sru23ay5si43NPhtyGttQxq2tkAK2gUVj6XG6hPqmTHJa2Yy8m",
  "key3": "MyXguofQcCZWqoYstwRAxMdq86f1DThLTzdVjF9vZFwKvH7PYDbzry7iCzo1c9i464DwyQmYaZKLeUCD1gzHE8d",
  "key4": "3MAQbLSBzmoaLi7a4Mn9FNUVWcN7LCD44FgHD97s2tkWi1iSWRUt4ZwzFAjFFf9ZswcR7Z1M25jdaoi2wBWHp7Zy",
  "key5": "3QKsnYDZmVNsbPfyJ5JxJeMLDLxGgsNtRx6uZDGjW7Je9vbvfUDSvk8F7K2WrPf9ga7ehcMRfHYFPiE5nz411gcf",
  "key6": "5wVsRcr2YtpFJD9hRpb9obH2oyyctR1HeaGEU5ryeP69PUEeF356ekF6Da1JD8jXFEvECiw4KxBijjNe41ECueVE",
  "key7": "5nQmUBazZVgLAKZVKPdDW15269q8NCG879fcyvnYM2sgbigKuvyPWmh1AWVfsedgPWeuuxQ9sRHTohvK6X7RaVV5",
  "key8": "5QNTGpoyNvTHgzTgGRHym2pXZE4A3YE9Xd17qPdxrbbsHgN4EPbJ5JLGh1NY68jt6JhZLUTxMg1HpN7w2woizFD8",
  "key9": "34mgui6SBsGyEsiD35hCtiDjEAubbj6556PG4r6SEshoMJYQThUapAvAsv1Z16MYtNv4sZXjrKu5gqbXedfxqAMT",
  "key10": "25DoSxZjE9D2JnMkt9mpX9ZaLfXiRRkKpJLZBRv1NYxsd6YMmhLES3ffVyu3LjAu3RY8nUR343PAGWnTgqJZBXTs",
  "key11": "hUigCD9SYBycK6v3CPibAGyCFyVdh2HBchdbtDDjeEG1HNHoAackG2Z2qCKPocKG1AsM6jX7AEfZY3Ax3B4PBzv",
  "key12": "2eeTU42dGUhXVTGL2aQQQ3k5JShwm9aa7Rg47Fde9A5fVnpZbhYqZEuPPpLuKNAgvfaAPSGvi2DSV57YSuMGM2A3",
  "key13": "5HPpbaQdxRFXRya6FLJDEq9ZBbJYBsgzXczbCSnwZMuy3YgLD9kKw3FMsDYXTarMkKBJEL7Lhss3Fx81XVZY7LHe",
  "key14": "4r2JS33LQQJsjJirt4orRNZChYjUQjE1DdZ2nxcw6tor3wcM5eXR9mTUMDVtwHmeV6kiRNNXrfWFaQqN3KK6zcAZ",
  "key15": "4i1JBGBQqSFSTJwnjpm4R6eVJ9X1MZ9Es231Vu8uJCP1TrNqa5Wswf6XW6d8sfQbDg9Rqfy22anaUNv5gB9VwrUJ",
  "key16": "5xjbHhkFQoAQAbTQYwQFyawXXju9bGB7WPB5YWTAaoit1GjYkHKd87BuZMbrSEvroLH1WsrJsKBLe3QqoDgkia9g",
  "key17": "3GjniiLFFYPeSKh3DftHC4WENGSmCwyBarnG5QtdRp8a35J1VjRE5vtANnPgY7b9R1DkBnrVccLojVCUbrAmtXWf",
  "key18": "4CpsGsQC823htu3bPWKHs1JFw7Jdxf7kHooZczU2bvsBXHzzrkQuV5ddoYDfUfK9Wi6aT7PTnzhknAxTwDsD1JCE",
  "key19": "5Q5sm2VjJunbBJPy8yd7Uqh6fejAtZzvgTD2sMjtiDS6K3ZPzqyPw2FWLBDC47DUQJYXJ4EApX4FeVPoNEhwi2tq",
  "key20": "5ydyNATPPkRWyhmjymhewQ52S223WeoswiDdpJgBxcTCeAeM5nbCZSe5qKDuFwwAdGHeLaU52DTD3zJmUPb8xxy9",
  "key21": "5fR8QsrM9CtxXBpWTBknPHc6yG5Shxj1zjeWpL5ZP3gSLXRv6k7XPDvnVomSgxXNJdYBd2dZ4QaothXR9tzP7YbX",
  "key22": "4Kx8WVjSVnNjUjmsHgwFA8AXgd8YjuuEGivohoyjn8jadK7BLXq1z7jfnckHuFADUz3ienC5g4q5K2VgXuSAwkQK",
  "key23": "4b2roAyNuKVZLcgfMD35GDoAKM2MdevXs5jmvSWm28234xW6926yVLcUbsASuL63ZQe9i86khvXV1pBNi31ecjV",
  "key24": "5cNx6sMDaTp6p3rtunA5jGS3R7Q4qfK5jfoLiK1Ytrm1A3t7rdqtw4k4jojWQQDxT2mMNi3nExzyPMbkWr17FGJ8",
  "key25": "61hwKddDT1uXhyViqGgeUrDxzCEonkGponDXnUYQhTz7xcZ9tRFM53oiatypKYDD6q34haMYBRcx6rUyn7FA2rEr",
  "key26": "1RzEyXC8MnkSUm1tH4a1yu5q3muBHcfwkPkRTLzeCJX73W84j8iN4nJK8wZb7zyUC57RiaaQcFjFwxkN9m9fWqA",
  "key27": "5xt6ihqcJgR21eusiBY15PFDouoxcw5vbZCp9xksg91JZZRiX1xCVU7WLVvmUoDFz3ce1xULvNHQwrsY6pFeAxDg",
  "key28": "61ySTu4XmZdwvLyjJmUeoRmuC369EPNmgWLAcAzfKuosSTLnmqM4hLoLqRJ5Zyw2bHsRtjcphRrTsgeMeNbcn8fA",
  "key29": "56DFZFb8PX7srudVoiYDEuKJkBRAyi9HFhtgb6XH2QeAbVNmLVf7jjfJEgWaXzPocDUCyZ19k5DdDmYr6LtuGGYC",
  "key30": "3QC1dkWvW8zJLdtkqd18TdFEqjjhcNGHXi5gUwgyGTyjcAk5CkMnaRnycUF3mj3CB2ACnoG9sukDdk3STGvZ37b",
  "key31": "emoqXdEeGsLBJfFojRdNC6wnkZeamrgDh5ng1Zs9vpNXFbpsf5uimP3ahAae84gp22yVsHQs6To5SxJkXK1hJYz"
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
