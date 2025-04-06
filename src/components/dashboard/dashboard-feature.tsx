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
    "1rDs67q2bMY7ywchsttLjXvEeRBQMNwiYPc8iDGDKeSvjhfZxg9DmhjUY4g72fXWVCuCkwFjGB56ezUPnR1Mzyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fDtW3Wrp2gmTDAw5MCtbZKfXPGfy1tZj6bX4MnrqUbyDTwX5sGrXW7JBDdDS6mhiKoXiZUJRxusmZtffeAasRG6",
  "key1": "3sM5BQHhxm7cNeudoNi8EY9aXWcmeGWqowzBmj4trH5sPsDutFRrmCh52seuPMS1j6YFyJUQR9WeMcJuBSMi8XBu",
  "key2": "GHbchYoEWvQenrysLWm4rhVJ6bsMiZC8NqUTbCXFGEtCPujjjbRkZtFtnpZhre8kkPYRL8FxobZCiz3ojaGKVP6",
  "key3": "2kJHGwUxGZY416GaiGPWZK8yBMKvfGi2yWMXoG7pzDUhV7SpD1capue3iArQUH5gYrWkHh2bRKT25G5PuDZWRjbr",
  "key4": "24ExmkFbAn77qCgQazFZzjQQAbGdLR5L7DEFiM98Lnivi9N9ZxBDh8rwcZD4YygXR3UNvwbzxbofyzp9akv5ZxjL",
  "key5": "4ZPnuWokHkaPxokbLhxEhKER1BEBiREEw9mjsjy93B6QEReiG1DQCg7M3pJjBMGbM3Y5SnakZyefKHfxyvZR976m",
  "key6": "31aqKWUxYj7EYtsVNWjWf4A9ZyuNv6pZ2y17Zky3nowmwfm2Pnem2xkJZPebFhkH1Cp9giessZjdzwwTYdopvwZn",
  "key7": "3YNz85bGMQWxsbznNyj8q64CnqqUv7CAd6CRBQAdY5Hgwm9juFznYo6RknsMMga6EqvAgkgmwcACdDr8uo39qg32",
  "key8": "31Vapaa6VUHrgVG2EoYdkEU76JXRMts4ovPLWQBMVriGUsRmAKuujhaLbqWBrKLo8TDqZFWA1GiJCBdLtFR7cTWZ",
  "key9": "4hFSUEZ7BPgceSiNy5QFnb9oPykx7vViNVT7TrxH4d85Vz3JCEWGibmCxhX6ZBKbRhixHXp5jbJxjwMj9QwyiCP5",
  "key10": "3byaf1DPDkHLLNLwC8JGnxc979PR5eKGnj5ap8SeRaP9nD9hiYBjeqdPFJA64REUk4LNZCMLtixbn4aQiMm8C1Vo",
  "key11": "4LvH26VUYVVp9K5VTepQN6LL8f6wr5ispvdQEwhSfcyEAMAsxjXpAcFqHCP5yuuLEbuYK9N7Na3UXKxG9vTnDbe1",
  "key12": "5kjPH8K48PR8XQbfpQbNjV9kaMqHCrxtbWj6zL9RTp7cWgbjmTYL1Re4VYxLehgcuSmzUUVsPtNQetfWndNTTZB7",
  "key13": "n7vgAkUJpm5X2XyBiBYtCKbyG3zrtKybPvGNLKkV9p4dTm46YsXxuJbdHEEKr1T3pGSru4fNsYyyjsmNX8WW5Hk",
  "key14": "s9k5JenoEkjMRCSGMBrLUfqgGpguQkXPtqN54RMcP2wAnJ9pNY3ueNxCEhR7j1FfAQ6nmnk1VN8mDUgSpmDES9U",
  "key15": "5fQBNosfEUGpt7b31ZkF62TYDKrEfevpmQ2Yv9hKEdeAxMyhojYkLRMTgQGX8CYH1aJRVUMYrTECTuEzidXZYVf7",
  "key16": "5LFsVCzdAxvbsGq1wx5LUPjjZEo2DfBYfh745e1ghdLTUmHssa82E9kvu7rs32hypMGDnPUvon1MczPCf1oTpqJ6",
  "key17": "eSp3xopkruQm6LqeYKgdYWAkvVvUYvpqNWmd4pgEq2DkNn4mzUo97PrRVDDLz52HpZuQNdTNa6uCjJ5SHX5R9oo",
  "key18": "5zvzBYEiK2cLLmoEwhttVwUx9mNyP5U7PEFPcUNb1ojYWbAUULBECGGLSP6LcmjYRxnnov7S54Fgryb8ALdS9rWp",
  "key19": "33zbZzuNfQnGM2phyJc2F1JaZrm2ufFGspcDoJw3U5WDk8zXoAtZxasccQny6JkpzfqVFfsML6UQ7NgsHvzCAUpM",
  "key20": "4dE5HGfs9zubCUSwmgvHLJoZ1mBjy6rPoJHkjcjRSkG6bCTTpb1TpXUnRYNioq54zBaEKagfYBZc4fjPwfctB1aw",
  "key21": "krwMrVMQhjQ8znypb2hCXxJY82sSV2VswohVGSoc5Lu3CgzZnURgQAA4cQt54y1XpcgPgMemi8m9zjNw2r7xidG",
  "key22": "4Pwv4y3mgHQhWHHM2cpCb5up47yS5o9xZJ1mjuESVorAjPFa7H8hDZ8xXrAHcnZDY7zGrXDACUDF5HhAgF68rq4o",
  "key23": "4vp4acStsxY4EiCtVfn4NG2j5uQsrWZiUWihbMpsqrW3sakGqK3wiudVudxZkLxrntfrL9jt5FBmRTaAmAhEVep3",
  "key24": "5NrMYLDyRo9AbhdP6K56hA3bEayRCHgbmJKdwmx4RTPnKd9S75FJbWSxSEpWNVZjMqeSLSLGqzH45KNXM2UvUp8u",
  "key25": "5F6hTapQz7xH6Hf2An3VKX5yYB46TPDq9PFHybaPxvmCoUkC3GHjiQWP8WGFqFcE3uJPEyqPZx3kTxg1WdfxU6fB",
  "key26": "5KNzz47mdhdjJu2WhGTcf3vzy8rdCC2anx6xVVoNhxgepvw3ZLwUApjB4YExuGWCH4JxHuCFUxzfSoDM9UB5e2R6",
  "key27": "3Ygb6csEyv7Hs3Kg6kps2fC2sGDMsKwEBSCu2y3aiyQvtCXdMDjwWSdmnoBsJMUBCbcvf4Mgr1U4yVREiaXEh1bN"
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
