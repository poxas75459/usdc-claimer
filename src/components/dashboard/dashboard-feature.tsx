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
    "3WwWpxJuSg8PfrBKa1TsJpRWXQa1Lh7uvn1XcMSpMy3fvBwzX2Ad3sJLjsCjLPUEXCzoLsYs1uCvGk29paKPWCxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J4E1pcQLrCNE5JWdFMYtmPPZkFGiuHFfCEkGyBn7gxSASmWmrAciSqAfXmmF1gUfTSy3DmiE2zHvn8ne17bFn76",
  "key1": "2jeo5VxuA95bgmpwSCWv97b8YmQyFL4kVkLAf4iofuCNTQaXZfbFQBoeBqLD2kgUAwWxH57U6HHe6a49w9VGnDXo",
  "key2": "5wWUwCns4oP331Pa6988ghmApRN1LQXW7JFg91SqmWvC66Cnd4MPibaFiTCTN9XESoNeESDNzQUvRiBSUQRmQSuX",
  "key3": "4rYGuameE47HSwp2vATLWnx2svPVZAvmMiyMeaTWw1hWZqZ4K4TQVoQuC8r5tfB5sNyuFcG5qjenZcfPRjCgkBPV",
  "key4": "2imbqBpkNuKwhAJXJFxuTqxMZs7tJ9kpDu4kaVjhtYwz9jCDdQNMVumHxgNT1BjLArxmD3KJLtBc8717h1XuAtkG",
  "key5": "3PvkRRdvyEb8EJ58KBUXJvJFH8tu9iT56aZGs1cRkdzTz1v5ft2DXmVcWdUJHN4zETU7GBrccmY4CoRWVf8PaGQp",
  "key6": "5niWWekfEe3aXns2zx9zgveU8R3oHXSVMhtBEzftU3bZFU7pj8b5EWJs1aSE7Wysb168JEnFyomWzv6bdRpWjjRJ",
  "key7": "3CJ7hG8CGFWTcLFyNikHLceJcMax2baWTxNYKH8xzJevNe4d4H7GTp9z5TPxpr5AmeJK2jHAaKMp6MH6R7oWxvHM",
  "key8": "DeWqfkmWSvjvVd7HT6wxPpiNNrxKSxnAZRbWR1x3WsQTcYHGBpWE9R13EJYjQgtQ5JR9ZrQ4JnwBYKgA4Xy537w",
  "key9": "2hH6qUSPhP1AAnwqbuxNm9cGY5U1ce37QFP6aa6AesW6cACzyGBr18vMc2CJpRsh1Pu6Xb3S68nwACtDwEXDS2Nj",
  "key10": "3LpkiB3aJDGM6EqY636aNmkV5ZPaty47NnyDckSgbuLmpZ5FfEC4axwE3mMxdKYWyfy3WA2ZKpimnoNa7B9FNCBE",
  "key11": "5t1H7L1azLQj3UC6uyMmtkAxYrDEDVcQYDbUbZ3Fz5S2NjnAZQgQq7bY7JhAdcns2inwwb3A5osfRqeSku4isrZq",
  "key12": "2WQudu9Zcss2BktHJPVBTY531aCAVArmsCtdQ2CzPruLbpjSMviSGUq8NEknWwaLpuHbwEhpwXXL7KLqqd5eoN7o",
  "key13": "2TmCH55HRHiWjorNA5P9GNDD9tM8nhLfS99JP5MvSYMpd3gF1zUJp8LgcQjMZghsSZpjXM6sLh5nfzXdnHMjJTbL",
  "key14": "3oQZh7U1HJTvhBDycdEBNYBwPa1GGjAJZLr7p1KkP4fNPzESXNi2N7oFqLu9HbMh9vicjB2TDGqeE2q29BaU914i",
  "key15": "3SPNBVFXkXuhMxV8b9YzJCLA7Qa3EtCYua8uAUME9iSyPYQLVHPiZDpN8MNpDJFoPyVgWSQVP6rV5Yv4tsGpDQrt",
  "key16": "4znyqX4q1e2eiQrYzhprPXEAbnKWZ84p2oPDaSCQ9XL5p5qdNmt9rziWJyepFnzxQyEPP4cgucF4WfWPma8bbh3U",
  "key17": "UUgRKp5YCyKwpR7nBD84gvhAqrBHVs8wSCYH35EbPRGRk3xp1XdW8dCa3KomcyVc9hiWwx5JB9Xs78ALLJEmcU1",
  "key18": "3fkNFX7GSnNax2tkz5qbgPG19VuByJhGbwk2RwVfGPSCVGQSYvJ3spDEVqNAMLbt9geUW7MwaNQTgzXMy42JQAok",
  "key19": "2dxF4EsC4dJ8fu5MHfBNvz7T4obuxsiWsQWkZKDdv2XxFPabVUnDWPCkpuwTsMVRGKsVvYZdZzN16hKBnen9iRPy",
  "key20": "BCMduK9hzhXkuWmM8at2PQuQgqiYrbQAsi8o9EaLXZngXXbtk6CsiVTUEjqo9vrUXHzgWztncEUQ5esBhy5ZnSb",
  "key21": "4PdtJGkqoU83mM8T4r9TvHBnEehau8wJzNP8sYiCCQbMG8Xf1gXqkj3vuVZxgnwuNWSJ1GHgd1GGndmX2cm24A78",
  "key22": "2bpTUVXtzvbVGiFmNSL6p618rUCxyyaRL8mrwW2pgWKieG4RHHx8UG9xm3JwU6q3hZ3LsijERhUZaAqknXpt96ig",
  "key23": "2rUf4v4tZD6PcogFXgD4Lu9Rm6w5jLvCAeWnGv3jGYvmVdfzMNiPBULMtvmkSHQ18piGhwkc4sdPgs2eyNGQsexM",
  "key24": "4PTfkQZWs8pqFxBXiFXtWTpFUhvrt8MWeFxMo2o2CWaou5ZJgZFtAReaub2BwW64NWzX1SPALQYngE2rwrNXuZ9C",
  "key25": "4HmqeNjJdyLumao3iLcA1moLs2j6aQJJ5chSrcjHVX9Pbp7KrVwPcsFGJUtZNG2J887ek3rveghDwPiJL5y19tbX",
  "key26": "2na3eJZB3kSUVpVf1fCV3PAU6Z73jW12Fw72AqLNNWjuvQCGhrcpW1JUR3iFzj3tq4diRCpF8VXynGcz6C4D5CjJ",
  "key27": "2uBMKrzcKtEMD19GAJeurLJB2wp8RUHmKHBqS2Eq7PbUQTGdt8SeQZ1k1JhYJrbzwckRD51N1SRL4Q1eLVaWHvnE",
  "key28": "2UcG3pd8QVkpXTyQbnuizgGytaVQb9JRZFZ7DXNZiuC8AKVTpxwVPUCoNUNfn42wTheiYCFisgH6CB5MM5bgMv5a",
  "key29": "3BAARCQ9MNUGq2wjxhpTUB41i1k2ohrFycCu7Jh9mG8eo7d2bt2UNfyHb99SG1raLdfdxviqFYqfMCAcgvCq1mLu",
  "key30": "2aDGNrwU8G9Sr9MHzNPpikmuENMjrCB6991B8dJGaJ3qeWk4hNMcjqt4UwLD4zpyJi1TqXmFNVW7av4MRkPXYhvJ",
  "key31": "65YTsz1G7s7Tco5vKvDH8iQgDU7wBxuGVNBF5HMwp2jDD9LZqcNjHVAcab7oKh3samRSvhuYFBcL9G2rTuAJoFWp",
  "key32": "2oAEtrHAVdKtUpz4qrPs3wqUwppttiyFJr4AEyT7zU5nf9iJTnkeS9pyLJyCrmoGnVF8j39UjqCjb5C57iL4dHcf"
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
