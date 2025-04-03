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
    "FEkyhbjnVvaN9juQPfCcgDVyzw27GMhYLj34orMJkb195f9tWyiQUxpr6G1BUZWnGr1fKSnAjWH8bZ3qqhSXhiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31NynmVYzzLrhs2owTso9b93echtKpvVYnTRWaD6kA6jkVPWBD4zrvqRJvtejDshyhF6bZZPfrk8uWSTjV7QcTdQ",
  "key1": "4a9KXSqQYQDqgzPuiVtsP6CmoDztvnS8ZkAb7V5xJP1Xzp8XdMpqzPBDa8pQXaRU4pm7cYyh7Jfd18VutujKbZDQ",
  "key2": "DGbukDzwRVcc3k66tKRRRGqTRzyPuT2y9xHn4fdhFxxzzZEanxRKSewyGYJEY4N9cnxDsk4Z3q7jyCtMxgB7jYp",
  "key3": "57EMpjXCn71KC7ayk44pXMpJ4cZ9N8UqqsorxEEnwtDR86MfXkJTbBM1zWVuxamUsd2LPAcpWownNopy638y1piu",
  "key4": "ZLejmQW9AwnMMvZcHrjUiaQ4Uy1rtR782nycVp79SYS66DgBT7nmBctZDLyxu4dT1fDySo8RCiMhxqiq6RNYocM",
  "key5": "48igD5ph52BRAyK8KAQJG2Ci7u1coNLtAoiJm9jp7xai7sw4xGUnN4EtMHmZNFZ4fAdXmLUrmctK8gE6XCDZ8VDp",
  "key6": "Y5q56nH7pxjXJMoTLLNNN9RrerA5bLmFQqUdNy3XshgYdSLiB7rVcKr4XCQEncq9Xu18bYAQ36tucDHRWaFp43c",
  "key7": "2guLGm3FsReWaDwiUNi3hbDKw8hyK812FbepTDf7tKGQyfWfzQKYQG7aUFpmNNbowpBHyd5RkSUTUKLDcf8ZMF7i",
  "key8": "3mA8FZqPoQUfxPy3FPULHHNYE5LSG6Xj8T6Lm5xPdhjbYWRVtb1ZnFneq2tBgKfsTFBEriECnR3ac69whduNCrrE",
  "key9": "4xTd1Y5EXjuv2bh3UzQHyosXeRKqFWx7DvUU7pypEHSfv7g7aVBRZmFHPd4FatJdBpVgXr96jkkec8h8ith85ks3",
  "key10": "43smyvFU978KTrBdRmS8hfNat5Wb1Gjn2ng9K7RhSeC5R1RBLXVghyzB8Bd8AjkPGVdJSXUixu2UNeKZd36fKU2x",
  "key11": "2WjnPoMi1v6iAx4Pc7nE9SkfWggxztCmZfQWRHmegwyjon2aUt54CnXAydxq6ZPnuny4t1A4rjYzKCJQB1z5oJek",
  "key12": "k6a7f77d6Z6RSwuecCCnh46vCafTrket17KWwDQCH3cJVwF4zHo4RaJvHcgnSx59s3W4rmN55HE5VsY2sp6BeCR",
  "key13": "28N4rLKMQ7RZneJBKUcDWFsVk9bBEEagXXBnaM7osnnf2g1SXCXL7Lwd3vmB5zwrmbzJQfr7vYXQJMkaoLACnzCj",
  "key14": "5p8n525TXs8tUZcyUQiKSQB9QnXS33X134yoEZHor34zKjsgLmtXfAzC6SxKfxro5yhofKsusgKBWdamFfDSwwwc",
  "key15": "4Leqqm6WBUvkFaiCJJngio6akhPnsq4zdRw5d1FjF2GdCkcZPTpihHEWc2QPkzXYf2YofukZ5ZAzxv3Mw41FR1m5",
  "key16": "5KASyhVJQ4ZPLPKN53iqoEjY7mZ6E8HnXk6zbeGB1VodTZxDjf7SxH5zt4yGLfXjejvAKXaS2Sd9SzFFpqhxVtoy",
  "key17": "Z9nSB5bak2TQF2gnbF8G5bzu27FLs51skmTpYwVGxjKWdeQ619Kbp8JmXFXEZaEpGXLeyty6dEMyoDLyQTbyXPC",
  "key18": "3uscdi3ZBeCig4jGEYwVJ4TH6WkpusToEdCAAuZY8NAqdCfGCE4fjd3JB6WNzaHSxUsJP7kjPHgLcJxAZcQiRg7i",
  "key19": "4b5JuQXn72896rAH9zQe6nhARzNbzCZqznsYcuwAkMrFZecpU3qK5BJ8knWKnEEyoMxm7mBy8jP4rzsyxHveKr2B",
  "key20": "3qBfFnXJTgZWg4RRXpKrS1bMahjitJeiGdb9mbvghohqp1DJXe9kwhNUJAQnWkoRh8BhFmnByoqSvcqYPkEGbThy",
  "key21": "2KS4grtnG7mJWoM5KZuXeAu5A9htcvVZD8ykbHLmHGQBw9SHXwiWEoUgh9FijB5Hn4yY3EFahB59ScsAj5PCB9WH",
  "key22": "Cd7cLmMdckUMRHh45VE6wh2GLTVnhudGoWqtG5No1esfy5Js93eN7DVtkmH8zbDF5rnCfhbd9EZSFUs1xp2k4e6",
  "key23": "SKkpE6BEX2T3QprSpPFgjEci86ymFsrVDfbMvqYU5DriigJ6umeeFSyUBCzQBgw24mQ8WN6cMZLwdkhs9UCkn7E",
  "key24": "35NugLKsgjQQ7hFhwhYQe9Kto969qjd4h4vxJD9Yte1eidc55w8DCVnTLK3XfesdxWLBjmE1DEaxbkrQkVN85YGA",
  "key25": "5Qm528eXXNm6LQ83eDt2fSaCL8UdEKTTNEFYLubBcGo8ccSPJSMJPyvqLZynuCDAD6bfkp9A1BbtJ8ZeXYD4UMZQ",
  "key26": "jVVFWfP8FhdQ6NYab2nah2wSaxWVihpbXAreSHbik7FeUbhGBJ1LgDospgP72H4MM6qJBAj84hx9FUWxWbNtLGo",
  "key27": "YU3C47myXcAaNe6Rt74iVS1o2Wvq4VyYEuzoQ7tcFxjSaN9et5xXLgcXXLKsjyaKKvKg6UpvzpqXq9ZA4XEhD46",
  "key28": "2aFrDSEGcfdFUFH7RGBJq6jAf59XpK4CCQggTfysng5gnB98fKHGX9YN8gg8XH8TecQyLVHE8bNrux68eWZ4q7mR",
  "key29": "4VQB2YSiNhc7m6YBXHeLErbbfXZG5E5gJazV8tT4U6ayfLL5PJpLpy9n7M4CsAVkmoAJGXMyY9uEBSEvjXTPeTzX",
  "key30": "2Rr3HSuHvoocbNmA6ZfAbSBqhubehtueTMttQDgRUY1qiNH6FYqmFqQdhtZFhEWQ5kLFNFmuvSg4ecLrMpHBWh7K",
  "key31": "43g1g9TTab59NthE1dZE27uhd7Y8p71HK3kfwNBtHQNzurVnNqPEy7mYvGr7rKGxB2dhczsxcLHnjXzaDK4Lwgff",
  "key32": "5LCquXo6tEDQbwPzf3MMqvQkiJghfN2cR2zdQgnCFVa2p5X7J9wZupYtFgqMjhhcJE4ETGY3Rb8PD8DRwSqdsohL",
  "key33": "3x6qyKUfrYdnbuztbjPMvCxQKChiUBqTddaHfqRdiMUqewVUqXutksUsp2VHQU16YL9HbsqXpDbspWP12rR5xeoL",
  "key34": "2iFnVE6fHBxG5sodeJdX2G3Sk5H5LTmxMECCBAwfj6MEohUC3jNfMZTYEHPVh1FUXmezBQLtZVW8o6LoyjzMYbWD"
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
