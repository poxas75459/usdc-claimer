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
    "3CbucZU5fNDSZvEGQrZBuPVWbdHsZHBB9Q9QAReBkSQ5eFXg9F7PH5eSxAbwo6K12SMTnUdq86HokNCe24PD5WEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hxv8hPzRJrDYFjxUnVA6yn5StvbyYDPCPyb5b6DfZ6t7Vz1iDVUjwhtrm5Qkw55VaY1LgRDx3MFdba4pNy1sXXv",
  "key1": "2beh7cohdC4mTvuApAo7jNhNTALZzddFGvP7vgyMEjqKSbMQbb6D5gjRJP2S2KARaatd1V8uNs5VdL3UjxNMJ1Yq",
  "key2": "2xFcGENggu7edHHdcjEHC2rMBdKVr3uddMSAUtf2wJDyGWwMW4RndTusaKX34MRpFDquRNPv3ErnK2Nnf9sg7fYz",
  "key3": "5Ccg47x3kDkRWtvkae8cyEhauAABQ4aXhLtDW49de58TcZNWGHAHcSntCArHwespmwiHZfZi8vrkFXjvNgfg8W8w",
  "key4": "S1fLwGk3siaVXGmcuzrNvpcSwLh4ptjxjUskpgt5tmcJ1aM2SNRwfvmNXZnrbSNu1SVvcgkxPvziewy9Nis5nww",
  "key5": "mC6JwDdJM3jybRMVyVwAbxpYkeShbg9Tqq64Ko8fEeanK4HV2SGGrqHRqrxUaeeYsYGzVngrNRwa8M8itzXdsSr",
  "key6": "4nqZZPimgRWSAYFaatUvKkoEX8vDC1cN2BSFhBJdbyDtY8cezkeFwQyH4TZd7vBVndwE6VGEHs7Cpvq9ZRj4Jzf2",
  "key7": "5NFute8Z6Ki9Sn7NcmVkYnJce6DAaaTByBmD8HdhNL83aVEevpnzfCvQgFMo9BRUYu7R3aSykJtyKaPcGNkz2LeX",
  "key8": "4iYT2jgfYyWDoMbaaLhGcy6TXVcMW3oxqUL9EDGDUNjaPkVejvinZuvfokUsEkZ5FERPcmWcA7KbfNn2rHmzXCt5",
  "key9": "4LTU8EUmsPkJuHut3xv1c2ZnavQRvVCgJyVfacCGKDbv1DDKZcsESmfrcvqH2xFE1jMrdL2pGxu8TbGZ7DSGKGyS",
  "key10": "2VB2DpQhG7LeJxcoQJiivbcEYDvXDwQ6QvxbCiU7X7WKn62Bkz9Ny9Wm2qSeHyeYttfNdZh56dvEDeDHQUnEqug5",
  "key11": "165nv1Dwssf1ie1SMkpk5iiU5VhnbeLakLAANTxkxWPNXukcja5RPvQ5fruLHUkwepGeuYjGNde3wp9KMeKCL8g",
  "key12": "3hCho7LXreTTw3hcvCKWM4k18NnYYqvMk9nrD3jF9ps8E4f9g4Win8PTqTtN5jSZj8WJcm4hFdJvWy28JW8PLwzz",
  "key13": "YwfSPuvF4jdvNCoGdkyEUo8werpdBcooYFsUVTfVLDmAWVeLja3SD8Hnpmj2SPmFjRL7oc9vb2s76RJatpQLzUA",
  "key14": "4Y9XNssLegQcJrukKBLgAoBSAML9oyiMYqfgEBrTKyQvVpQWJ1g2gd7LeZUfcf9FiXV8mvMVrFj62NbU4vUzqNyt",
  "key15": "5X3i3ey1FZ39aFTnJRXU8gpvnEhc3hhusXRto1enSzsEbaeatN5dwvse6YpuCtthXXgZGT9neMrVzBDMtRM3g1Sq",
  "key16": "3WqyBcxjcXu2LrbG9jg9e2U2uw9uxwbv1K8iUXy8jtXr8HkwddHosqoWhtcpFAJjJT49zHhCdxsoUeUwpG126jsW",
  "key17": "Y3Dc8nu61rY6soFAVx9TFoS9WB8LmDUKDXnuhtC9iGz7EzESrYeZvNN1GkLVYazwdKEXi7HZBwGnLdodVLvCmix",
  "key18": "3qwJ2HYmnG3gbNYhhZg71hhphPUcqmZQN8gBXJrG5X2uN56TmT6bLcwyJkASpoaSTz57kLBFgZ6UmxQM9GhfdwQ6",
  "key19": "UjK3yd9hsE2dagNBQHNsoKBStXPWcBFQySWQx5tER7ircNkrxfe5P4i7nJ24TYFDJP26gnUwEfmZxrKiS9iA1cU",
  "key20": "4nZzAZDm1FZCnu7Bor5V3thPX9cCWxk1qWQrvezuWQnMgKcsNDL9D5hJSJSFYiM5RfCEo39n8e2XY4WeNwutBoiM",
  "key21": "5b1BmdjjGpKuVXd1wUWfw3GP1YDLEe5Yu6CFRkFs4k62HawEiQLnNeiBos4FrSgrjwRfMPzti6Uk4BNMzAdUv9JJ",
  "key22": "5Xakie4U2cD6U6QUdDCue5huUtPZ3SEECEBZX4JxGNNGBFfkv5vPHL6pSEQboeCNNcKkpVuWRBFnbGmWFqciriX5",
  "key23": "5oQ8MaF8F8TVWi26JT7VSppdN8DgQvDvL1i8kAsiVp6CvBQSbDwh3tfEi3xBRZgB6XxCNyr4K9VadmBwSMPHX3jK",
  "key24": "2iBtuy9SFySDd483aW9hkRSQDL92tsobhSrtK7PzgYqwREKEA3rKEmwU7LGuguoFU5jrAfY1kFNR7MpiSmLw3a9j",
  "key25": "uDqs1YygrdsUfhs3a1PAoPKiUwmYmV25w5cPmkG4eW6VqvVfbmJ39rsaNXNt3cZWcFY8emBKn5hFnuBMcNJ3Vn1",
  "key26": "3T2Ykhv8BZEt4V8z8B4q6TkbxFGSu886wQhtwqUmeke3vpw3iHe8jAMifnYpX7PSL7f4yPQ4pYMKf9Ln8DMq6Rmo",
  "key27": "hUdG8KEcBE26xgm41WGRzxwiLKTvotcRZZjWdLLnYTGN9y6yrEu89tfd9uQbZujhGL1fhuu9FD7C3FMyTbvhnv6",
  "key28": "2MnPAtGppV1za4jBK1gAhGPYXBPQ6Lr6v6Nm6veoKFGVn3pgXEnT9QuxtEEkokvtMrwYYnLRPcpx2CTkChJrKMWn"
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
