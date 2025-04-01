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
    "4rTTak85KoH4Ch8pBjaYsFefbkAceGydKoJxmhiZXs9gArmgcTZkqMjAtu12pk7snW45CRU8qjfP8DVD1M2gHPqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mGrNsbekVwMHcBDJSQ2dCHiBmpCtJTPGSvbLYwt3eWs8bwznRqKaEzcg5QV64VbtWWgnWhr1dxMkVh5A7UA37Ho",
  "key1": "3QULJfERK5RVwwsDbGpEuWSfHCDQG7iCYkC7xjnyuD42uPs2xfmpwNBuRWnHahJMfC3zpT58ghiCdaKqmqGHQuJs",
  "key2": "3T4oVNmrCMCnm4S9DBVvJGqk6wAG6csWsTiQkEjzmbjVSFgugnZ3oLA2g3SLgNNywFcYY1FgKs6vnsgmhyYmHYb",
  "key3": "3X2cUTY5P4MrBiMhzL6w59sbMqxT2weu2WvwNuvgt2GWsWdGotjDASCVG2W8wGzciYgbndaMfrCEvEc4sJ1QGaGt",
  "key4": "5onuhZ8AHZxBtSMTC6L816RVQUEKQE71Bj8xTZoBXQrVP6Yhv2oCKnYncXE81UBmb4JkE8ECxJS4i7JFMLjdr2bk",
  "key5": "5N7RvZy9TxtyxAWbYRM9Mt8UEbF9k83zdoFnDSrPraU4df4Rkcu6ip8PZRqcnn7dTf9MMnjAAw7Gee2v7c47uvy1",
  "key6": "65FJJWXda2sHYCJUBWhfZsaxVJhDD8NuJH187Gue1AFYFBfqxZgwHYxTzXydMGoLmHKfDhtGXeKFW1rKVr1Qiw19",
  "key7": "39c9pPTWJr2rwZ8NZhTvkEKhVCfZeZVQiZLTW4ci9jwaqHHqYmy3dJAPEeq6a8yks9n2yKZK8vZDxERpx7uW8gsk",
  "key8": "PKQTGnhngs4QcaRaU4vVyXwkne17BYPmPgk7Lix2tfDX9ohvcxo1ZfAcag7AyKaTXqmnze3oUdMHzhFLy1Tic73",
  "key9": "23S5VNGDFm62WrV2GH6xznVQuM29S7Kx9jyUm6NeQigJQFDn4yR6BKFRPriN7zS8CFiqyWkNugWqdXjFwTC556sK",
  "key10": "3AbKxNczX1rp3hjtNNCweNfpirfbDLUYQVAJyki3xCgE8Dr3jRZX1jGhFwvcvdximRGUmw7jyVQMrQWEMoWda1zC",
  "key11": "4pQCYvJRcsHZ7MAuXaqHSkyd5nv9HuB7Zn8bUkbBYEJqDPQfmXgGsKgPLLA8ztWu2GKBPRMQ51CBawYJo21ccLWp",
  "key12": "PDuzmgwKsssAd6HLyUcH7SutEXFkv7bwt6AZdxo6vnnoAWz7y9tcEvLGh3kBqeZwyd4bkhCpw5ZsPhrQ8MkaUb9",
  "key13": "2u5tMcxmpumUVbd2LsLyMaAJeSnXNxMCN4AJ4VXVNAoj8gK4DPjL4gTeX1WUg8WsayTYudcYDpsED6ZLQW7A6Lmu",
  "key14": "2EqW61hotFNe5oLAqvNZGis3VginybT4VoRvPv6beWh2LHKkjRQWKpPpsNSMgtHe7F3KMh8Vz1nj9EEUCfkCZroe",
  "key15": "4YWUH2f7se1zXXTnskVVF4YDbWDY8Y7WLGSfUMfxQiVMrJgfSdpKPLHnquQkfrL4GNnvafrU6NFGeRsgEDNivwqg",
  "key16": "3PhSa38cAtVtukBa5spE2kaVGVNRsHrVBf5y2Bjq8CQrDtgER1Y6212KzhhE3ZfDMfg1JcFB777AshsRbKDHbCTG",
  "key17": "3MXEqLY9JoWset3rrFh79pow6y2Z55ENDSKKFvheXh7JAayC4an7vsVXBoVTViYZZubvWg6yWckpGUQqxooNkXjz",
  "key18": "4bLKCfYUfRNeaBFZhbPQnD5aCUqa4gn65zbFSMdKa6EoaNp5cCWasmtMd4yoA5Sz7GFznnDrqaQVd2ku2XarZGcq",
  "key19": "5ZCCWrvieqkkqiaJRgeWiqBZ8JDzY7TPcqYiiX9ohXgieqoMRqv9bkcNB2tgDVkYWtVics21kBx7e8KWPCzaMeka",
  "key20": "3ocDB87LUVztxRPrZ29TSHpizXLcK6tJxjPNyHqk4rqw7iik8mX8HACaTkD161ZXWrHsgtpJjZWjjcnJZ97H9SJx",
  "key21": "2mQmcv79JdTKRTMecyKtPYN2as1KwbeSM7UH3Dh3C76QmVhh4UBomy4obM9B1ALAypxoGKcYrBGZA2VT6LZTgkmP",
  "key22": "66V8rwbKi7QvFTgy58Ejkkw6iUkR3a7NGUtZE7vjUayPi9hn39C2Wi1VnXEaRkTQfUW6uXZxZQwK2E4aB9EmwGQ4",
  "key23": "22QdZGdqEXtsjBLXozjGK59qnY4ePC4L66hmrKwvrGwZDGRzsTdfM8fUqS1uhd8k9jW7t2XLMVdBxcA5uUFwmSSE",
  "key24": "55mf5tU2nPQfJogn6HjFP5WvvnU9eKPAbXhnoeKZwun1x3jiaYTtSnD8v4mfMcfqFpoqkyrsgqSAZEoQyykpQQ6q",
  "key25": "4zFepdFbUHnTGvzrUfdeGULnteg9b7kN5bkipwGsmEjdaezH3S6vGiyV9yfGhbywvcGV9KpCHjqvWFTM7TpfeJ7b",
  "key26": "5TYmh7rwTTcYkY4iLe8YjDPwMfqoTQtMaEpvSe12WFV9mfVqKyWQXf8EQfVhbF269HrMRQrjYqPhYHzX14ESvuk7",
  "key27": "4CFu5FtzNgkDhbrdsZe66NtfvjZWp97ozv5FKNEyTs194A67zddtUabXAG7RgBoTKuGP6SZ6aqL2h2fffLy7fjyF",
  "key28": "7P2xhwSZXLhDHSf8FSr4W94ZtW4vx35EtBN45d12Jk5kKEjTTczj6HubK5L6xtFFARNAta46vPms2sQ4FtLH3G8",
  "key29": "3bkpZX3NwskCvUMrdMyRoNyc9srjP7psHEVi3ivRCKto6mG1dfzoXwLgAbBaUR1B4oxtnJwbWdfeq35b6QtRmij3",
  "key30": "48AgwC5mxKkkbwTUdBmNe9eQEH3eq25c7oozSYmPPSD2KXeySVffGCviN2v4sx5th2R3DjLfnSKHj4waQzGQ9oYp",
  "key31": "34rjsS39CxXwKuoV2UMwsaqhNqDd7866fsA3ea387rTkwszaDD8WbbtzhczkVNm1Rx4C7VDZHJjRuq87wbNpxsR7",
  "key32": "1WMFJpZMfpfE4XXsNfECzpSVtPx4v5MCx1MPkZyECnegQsHdP9da6i6xQCaynhyTpJ8AzJWa4D9nnk4rZR98RCz",
  "key33": "5iyZULFR8fBEyT1HCXuHD7sG6TcH2bPbqmn5N9eQWNn4mjG9LL36ZkvciKrAEU72JcEmMb7Xq3AzQJDxUHPEiEih",
  "key34": "5RztzGVqvZxfYd4fW2sFv2NsFsrFgqrcoXMaJoq89wEr7WnL2WtTEa3k3LC2cvfNfn7qysHuAzxX1JEQ4Yje22A",
  "key35": "CitcqNwCpDsBeFs5NAULaA8PAUSDh7YESueKKEyWG1yS4ebNqXaHM6fGjg41HC5iHYrwnsB4jXNL6gxMKxiHQCu",
  "key36": "3ET2E82WSNWes4MUqp8zREQZeSUykCX8XCzvje7SympU18DksKKR3J3kFjwaeLV5bcHoxmQj5W1thZsWQZyyBwso",
  "key37": "44VaSeJaSsogJpkqtvSsVGwVvtvt7UwFF7qtnVpVkfDQryFkUxmf1sKQ9FgEywpRXrg6YjQeoU8knqjvurTJ8NCK"
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
