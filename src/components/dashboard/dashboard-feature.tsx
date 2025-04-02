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
    "3LAjuxsE9SyyAhsLQSVJTaGFwNndNq2iTDZz36YrC8CnxXP1WWASdmAAWt5a8ZoB7rSBKKngos9KnPCyuCEH7HK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JNLrqz3vNBY2KsoDVZb8poCd759EcvUibmU3THbyQiAdR3jAEZmnJx7uP78u9wRP9Y4e1kxZSzaMG34EzL9X8TT",
  "key1": "d6SbBVv7GiEx8MyZEEhhWU1FbHrqTXUxfdMN6fFqwUD9qpZ7NcPCcahjcjw59dPnVNDVR7JfMC3gVqakchukMAQ",
  "key2": "5vYzRycBB2HB9bb5RTPFVy2vg26xTvQZCeqmEvGkd9avgspgMX9SM2c5E9wmQ7ppXKQmzxQ1eBmK4FvYGTJdUohS",
  "key3": "2JGZLXauEticg2yfyB41snBB1NRmfkT9N6mNNteoJ2rR26qRexKARauKmwdqHaJoN7DGm7cwBwtjCepiBECQ92hJ",
  "key4": "2tq6HG1DX8E83MHkwhZ6uWrAk1GVyPXBoo7MbPVeRARoQDZ88ZWKPNnmRVjwUc8fic7V57wGHwwSH2QoGTsK4BaX",
  "key5": "24xm1XGMur5Bx1Xbqgb7H1tN9QDT2S4fg8Gxz83rAjvaFcF8J4cHAcfX8ggLZRaUGqv1MMRNU854XgYHt9WB2r15",
  "key6": "5jCixxBzQb74i8HJmooYczHWNcyRgPDkZyCrdepCgyQdvXjbVdMBDwh7RBchZMvSrAs6ZtK3EgZbbjDWsesAs7hj",
  "key7": "3d9zG4S93ovYfuiszPAktovEVARWQxGxvsYrp6MYzX4dX7f3MLbV3dreHG4mC87aXSs5JcCkn4d1txLWLZpa65dY",
  "key8": "3Z3QLQqFHMoHX1ytvP8ZEzk7iNFFu6tc2cuUFL5GPu1yTtwXKrhz5A6opRgvqmYMBzBkrrE5k3u4syXePqkf9nHC",
  "key9": "5vj3D4jDSSt8hkQ3qeWyh4aXFVhD3WedcCaPvw5HmUZyHFii6gdCbruKxswq2K4PBfcdNaUhoGKn7S6mk9y5DSLV",
  "key10": "2H8JBG2TYMduUmGUM86WFbQ7eKYs523MUh9cMGomSMxgM4WSHgtCMB18Xq2mhzfgZDjxpCQdhaePSM7t3hSNLZUW",
  "key11": "Fqdj5Yf3keeQS5AZLpuh8juLXvap6AGGwqyBmXkKFCoYT2gGrjURTfKNerJxV5xRURAbUg5LoU71ufmsQuLZLTC",
  "key12": "vGX5quBcKM7368HZaVdnqYfL8RtNobWw5crUkX3LXAxJF14siTUWnD4zodA6Tb6jAymP5fFZmheGwVxZoLHwKbq",
  "key13": "3vLvP6vwYsv8Nsc2PoebbBPzuLwM8p9pKC7qkfo96Aj2wYabFT4BQY9YZzGwCZNFsuxw4WN553e1QdctRwrzJT5S",
  "key14": "xLCDohdHTYjPdbsymPqoMG8VctybMgmbLRuW8JkpDRvNVXcv48TjnKhe5CYu9YxffhFiYriYzbsDiSeMxTWQ9gv",
  "key15": "CeHcEayMXpysATsSs4XAhV6dPu6g1EZeUVrEfK4p1HHmdascV2kYnGCiDofejCiqxw6qgg56qbSLB6h4Kx9bd9m",
  "key16": "L8d8XumjXz3thFdscKKUyUcwbfi2NifGCfbs6SLwhGMgJDyRQqZsrF64D6YU1p8NgbFLvmsosnPi7LCsvyL3fQ4",
  "key17": "42jEwNvvCjA2zMdzCgMF7RADp2dUEHhH9NfMEW9So2g1C93gm7CgJAb9ERV5rx9yoY8NST7svHPGsxpQecLo4L8G",
  "key18": "2auF8WT8XN3uTRK4yzzB1MucBcusY8aYix8HmZhrMsHMeSqyVbw6XmmkZfZFAN2NFXfead482z4dXCoX4CNVdH7K",
  "key19": "3v9sk7ekJEUx3cPzYAKrvu49cWcffcLPssdeTXQsCerC4ZDAKfBdtrJ1djz8wiAKrmhHxjVcHjcTJYsqt2r5R4M1",
  "key20": "2bB7PEJhqMshQwvUwcPZioA23Eek58RaMFqJxVqFng69oJE5i5ujMoKYwKnkuKfrDpGTy19WMTSXuMhCSSiPesou",
  "key21": "4k5aYHfrqsvFfzq4ABswcBeftAJBoZMhsfESvSUvvhWN6TFayLyLHEDqstUidvBg3iYjE9dnfukNKZkqFPQH81J9",
  "key22": "5mNsfiq3L7ve9NoNEYsq2rmWSwaj2DVMAgPiyCHSuhfDxjiPWKy8mm7Hjxirp3QUstUUPNCXmCQZd6Srx4dXMGLD",
  "key23": "2nBEAkgdENRj3T3L1d9mgf6df6Ht9pKWYnCWFsCvJSqg6ucwExrUNCti2CxLYiS83tCYskKxCkAqYKDL3BQ84A9Q",
  "key24": "2UZGFCy2QCL6yQT6LkGwgqV7s95TUiRp2T9VkcDxANoorVFi53UQ9vRDS85LrJKc1LaPy9QtS8BKA53wAE6jDx3k"
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
