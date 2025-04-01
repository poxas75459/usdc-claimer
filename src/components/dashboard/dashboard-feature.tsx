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
    "2YaaqDLsn4HKQ7XhvYCNJQWscaWwddS1obfvbFUR7mM3qQSxMaW5MuEZV5o519QHFVpzAZf5dwLyVJtC4rf8Xf15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ucF2KeXj8csrozM9NPkgE53PyaF3DeVmgt6CgnE3331wHK5bR5gi3ZZXLLmVGjSu1vpoEdib17eHdBJcQcxsr2y",
  "key1": "2rhuZKuim6uxzykjk3xEfBtgP47d988gQT9jcy2YNGucY9hWTc9LD6goAzPJgV8pFbbJkt32vscxe9rQZsj7iNYt",
  "key2": "Mouks5fXnhLa8vhwUQRNZnrjkAbh9mAjQNKzNuJvLbGSDRyDXv7T8Y9N1BDdXzPhm2u38GgSdCGLs6gsMgmFbHj",
  "key3": "yTsGuaCDDTV8a9udTqiwHFdSpskEH8tLbpDuo9VWMSmtapsanENh5TW6NyF5N9tjPyzQjDM7armHwvXtBtbS85K",
  "key4": "5qFGFseodfHiM1UFyL4qrFYztbbTvKtZZi1ppoCgzuuMR2pYQZRwiAMnJ2vaxWWVkH6eFnJkRHUT9LZ8maMijKFy",
  "key5": "fcQcjQK5ge3v6WPoMj2VxU5EUtrQeDNy7x7iUbmZkkhZFdZnVxfUnvY8AE8RdiC5o5UHAwxjwX5WQgdXqFoTEfK",
  "key6": "55VHPgaXbiXUGckDungrYss6LsjEpCJDsQPG12ambgrdNvGTdR1rCnBKnkQvYhrH8zguQqazowb4bMahUNg7NN8j",
  "key7": "3CfvMHRQYtmKFqHbEFv9xFaZkyHTKFhyEPck8BzURXSyBRyy262VgdXPThLSCoCCp5oqAAKpZ8qQ1ipK98e7WMAu",
  "key8": "3dNcRLeK9MiXsq7oGDZNsdb4EPGZdXNsmP39Tp7QT3Cp5MHDcueaEk98fx7tj5A8dGRL6bU4gvUQkmSDEEXDGFyU",
  "key9": "593R4wJzoiw9w72JLRHAPpRJpNi5Xubd74NLmi9ZartwUxCzPHBTdLPmBU6Lqr6uR8SiBXUEABcMnK51UdbHVXmu",
  "key10": "4WuDZhxg9X5kJMyQcNTU152dXTtjzCAcVvnPCYLaiY41bNA7UNQdFGvYziRbEPWmbMnd8YLT4DGNF9JzLurS9vTA",
  "key11": "3biTwBYBhctGouSfwXtBWVvtUXuUx9L1HFFoEP1rLZDyqhe3YLJ3XrfpqZxEkfC3CzRWjr8yLb4VaS638faFCka7",
  "key12": "hKk8ua4fFEMEZHqjamtBjELFABoHYhcsE5cvFxQhL8PkePuUQ54141kDvXAweF5iARE74ycMxnxRbHHv6e4DcRj",
  "key13": "3VP2TduCEcFizLcmLfBPrT2PFxT5JcnGmvnvcQzYWe8qih8kvsdS9J7GW9YEeGpuKwjUZCF7i8Ku43ephoGuLnS4",
  "key14": "25nqXc2GFu6ZJASkf2uMG6zq3udTVxgts92JVYR9NquYFSPYbRE1A5ci1BRuau9ZYAGEfUUMikm4TioHS4Q5boUD",
  "key15": "34YeGeBdLZqbJ9GWVcVtMSGJyNxdJB7VTS7NqJgVo8rhXDnpy8y3J9FL7mSNFBbUxHGysLKuPLcVUed6Tynvy1Ay",
  "key16": "8HhY3sjT5Hr7gcCWaJTSBzjtvaridxg3PdtN7PwhFNSyyygcPCXGjKQ9j8zG97HZjCWS42qCizPMkkuezeqkfYt",
  "key17": "5DaVyWTnobjd37Nrfd7spCEhwcZxaGU2gSqjxnqTqFVC6zqX8KXt95emJmCCaxR1dqV4m6fTzabGFqLxKd6ELaCn",
  "key18": "5vS2LR9axeAqyrJ9NwDE928g3Bhu8fzavr4tyvF3H7AJwAPqrwngE8TcegcEYa7QUR5uAwtZAhAw2eAw5vmArrLf",
  "key19": "3wdTW89dvjEMeeEkseNPebCwSshdVxUsjfjGdu37Y45Sy9TvUHv3YG5EoLMc9oktVRXvWWPyGrsbeVgQ4nUxp7xe",
  "key20": "2RYzb8fEW3ap9MWWXLwQYf2QfkuaduakzYHAX5Fss29RhdaSPP1589kM4crnqrDqwdjBzAWXnaSE8KiJEmQhVYd2",
  "key21": "2jhZ7Lx99Kc5P9RRfmk9mCC6Sien596NCLV4rqawzrZF5MENcJQfSUhj5q82tdo7ikiyDRbt7mnc8SJtiFxNjL25",
  "key22": "416SrejkXhXxjwUdp5w7c1nHzqT8uKghuRqNQUyYS447fh2cgdEJqKquMttkeEA8ZY9Pm9surYjshShMTE3S3g89",
  "key23": "aNfx5ourZVRnJpg6fkyciwDuo3V7QtFSBAVC5cZKKew9Ee4FMjhAsgYaZ317eTC7AgmXCB5c9HdtecnHEW7isP5",
  "key24": "3mGA4wuawbuFdEqN6TVrEKe2vUgcniB2HmcvtEXQ3RwbaHjuThzcwMVquCdoUczvcc5ayFacEUepL7t2vuwxWTox",
  "key25": "4yp8gsBQ4zGC9DgwyVpw33gPwXWhSqePvt2qKtwyUFBTyhXGxphAa4VTTVWQXUhVupAXmc3stoEkGSgJ4hWHXp3n",
  "key26": "65STmzSLvEkCQv2Nth5d6ZnNKzL2sJ18LLmgVg3vbL4FKr8JywvmxPXPZCcWMHNXv9k1Ud6Kbcr3J8c4xLcAUuNm"
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
