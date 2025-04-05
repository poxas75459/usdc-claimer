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
    "43uSAw1dcKpVfmAJULpkc9ZUqfVqjTT1ZBDjycue9ZotsUTjDoD1sdw6zS5Sk44aPng6Fjt9qy41udbghZQ8qr7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67dNqtZVUjWGTSm7F13TP6BvzwaD1J8vfZx9EdK2sfuC1NeQ5EjmfLfokkwTsZ1T8Bf2aucSnGXUArE1NFQz3AKP",
  "key1": "5nnVsAGs68ZmzjgubQVk4GjSAe1sPPBWamSRSnwJULYUCEv18MrFaLuDMX5ySwqeYwdbJ8ZKyAAJ4Wmk8d7tT2Je",
  "key2": "4SLD5s1wN1BRm1YuTnmfq2BMi427jkiH7D9PfuZxWpzViSxc446fR89cEQGaj5GPs4iubQpLmUZrh3Fu4y6NMCUm",
  "key3": "54jttbiPkiGanWProQ2krfqRMNF8kHnbqYEZHL1cuhhwDPNZmsNVXWpdY7c9VmbT4QEcZLz7c7oRG5aCA295LFsd",
  "key4": "5nrw3RE8SvkA6t9QSZekb8wBq5kSZUDN3qpAf347Ay5Sqfn7kmtmsnWLGpyUkU3pWAGmBLG8VbTiq4Uk3KW4QZQT",
  "key5": "2bLJhdUNKLuTnUUfv2oVtpEs5Df1UD9G7ksrQf6z9aAowbvk4x2FBeV4vcGUrxgwPUkmL6cWSMDxjCSqw1wS4Srf",
  "key6": "2r6CV3ugyKCo7aLz2WCm9T6pgYW2okho6Q94YR5bXk7te9imqjTDd3ZXgbmjLcnXLRyoRxa9gbdAcrJEnNkaUr9Z",
  "key7": "4Hdh1ftHQpYdZv4ZJ2GkN9YYTQ9icP621Gh4YDppa3rHG6AYhzwJvu4utdanohYF29TrT3DSmZ7c7SdD5AF489ZK",
  "key8": "iT7d5MEW4Av2w1Xzq7Rakof5Vr6gKvE4eWSk99uAGULvNRSpTyiV8weQ5C1af7FAMkPRzdyXe4sy4R8v3qkaT2E",
  "key9": "2LYd5hLYGHGdnvfWYq7BZ22baGMMGn2chMtAvuhAhzrLtCHyNUnFhA9XkrGbxfgftKW9RuQU6MLKX8P2HmNBE6x3",
  "key10": "5DRojZXkaqBzEeoy4gb6RYsR74H66Hy8uiHAATcVD2yX5vsHo7Hh713wu6cqQtdMD81pk6XzP4kwczQ6Sa4FiFqy",
  "key11": "5rudvXDenUwicnrjGYC23RUyTmDYePZ1sXGbBwHBKqqnikZ51tZNPm2DWMd9zxkUqg7iDzXRvXnszW8MczVPw4ZF",
  "key12": "AXsoY1MdnY6YkesUnAHmP2R2ioWEJvtWnRS8GKJ5q9h4dZY8gLqH3pomFNBb4wXdAjvPxFGGxC2ZbwsMWe9VZbY",
  "key13": "4p8L2uEvszX86JSohShJN8gnjYb9AtXKGatEyM5FuCsTTVt1jyRp3Q1L96BnhcLH4dT2jCaDMJaP3EYCFZWC7tNb",
  "key14": "rag4Bo7gBwtev5v12NpTdqtSB4FPRRqWrtKuSrtJXGHjGntAoubZLNFBJys8mGwSgtXa6uwKK61fWejfRMwNE2S",
  "key15": "5N8KU7gWuKJXuLsaZ35jyJ8bLo982etH4KqdoKoqbzbSNSiq3NFy8ip3kXwynNjXzMr33tR5D251rZnSCfqQKX1q",
  "key16": "5pnPdD4ALKirqM7HYUUQoJMAYYfmKSvP8kfPnpiDio2EmQSnsJJKoPCJi3oyiFnJn7e9A4JPAaup5osg9JcY6QWQ",
  "key17": "62nGzDWo1Z5koqXtBiKkkjs2XzHx85auLvnNuwjxmc2ffFRBAzMsJgFHj8xgDN6FTLi96jEJez7TUDQQ3w1uzSCK",
  "key18": "5kRhsFcv8J4dMn7K47YckAqDKyeVPr9GQs338gdnUck6RbbHJsRR91dC7HFLZhSRdjqofvt9dyPrVZWfGcL2kM2B",
  "key19": "3EwteENZyyWQUc1Qqtfkt8aWWbToBjS8hwk8KAaoh4rooGV1gSBgptp89e65kmAVdy31HQy1wAjomqy84ZP3KCpL",
  "key20": "4hwMdj589HQXS5fSp93AcaKVGrbt4RCSnyhK53bPUYUto1cU79gmbm2ifKoDw9DU3khe4SgTiSXXULe4uACs4VFN",
  "key21": "8y4c9G3MigVDy6Ek81UaZd15YeXWzWyRw8Mo758dwoHSifnRAnTyAZiwLUXpJU6XGUQjmfzGnst3FSU9mtMQB13",
  "key22": "PoQ62SkQCpUgixyZEc7ae5YTnqUnTYc7gBqAPChsKQzsbzKHZxdLr4BN1Esohp5R4XfXvzranw6sPfJNVVezzfk",
  "key23": "34KGSavn7cpGq7UfRzf45N9ZP4JqJ6srLJUZKwMN3Bo9BfME7fELonCfiCsZCzzhbgvoofjPTKWBjD5brKj5zDar",
  "key24": "4z9bgrahGoy36mLJSFFW2UhPCDzbD3gzgdxWCMz5me2hg3W3KADS4cweov53JwLgTsvdAe8ATekTyxUVXNGhh3kN",
  "key25": "2CPjDzWFh3b33PYPB54aBTSo9YaUWkM3TpsUx5bTV3w7GRnMwisRVvhmY2FfevzNgSWGY9oUC6wvsLu77yp9PD6G"
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
