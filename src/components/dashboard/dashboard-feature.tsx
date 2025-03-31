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
    "3zAbPcArsPihB6r6R9qXiL2ZbnavBF8TaVfn2Gu7rmTW2dLRQxM2Ya4Tk4u7nmbDVhooNDvVLJjybozmyZojJ2F9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62SEpJwyrQNjnLZBV9CtCy2VA7peA3rVTibi64neK2uj35KSt5HrNgHQPhGfN65xKuCxNdLudZ7LuRonqyR2cVR2",
  "key1": "dWwuProrugzs6EpYzV5ixgKFhaYQER8Hja7LRKZiBZiLRESqUm46UpnHZFB8WekHV55h71SBJnGoCnc9VhSN78P",
  "key2": "4uY9d9EsarsU2Ajn352QRNYuCLMXUqZbbr9e2SRrF7TW7ZLYnETWB2TEuRXEgZ1v8iiTrXkBxuRBvtYBQfzngkMt",
  "key3": "61Qp1ezbgYaddDsMyaRG8PNRafacJSuBpQd2zDTTuhXbe5Q6pKHvN5WskJTw3ENomAPKWrtLFmFVkMzN5ESDowPj",
  "key4": "4UtNYtw5HuheXxfGQXpQg6tfWgaoAYPHvGTJWG44gFD3PwFgKZ9oF58sZmbSTCs77RPiqj4Dviso7VseWHDaeRN2",
  "key5": "5BnbAqpWnwmWpWPctm2pSh6Pgvvy1VBPUTv8aVUmCZv6FGX6yktt9ZJ1QMN5bnH76rgWRnp6Hj5bUEwLyGRx1vyT",
  "key6": "4WSxoeBSrrzyLuqbHbLfhLGjp9mQRZjUuzxjmkSMrKiqwhs33dNbgunErPQ6KC5arDqLvTZn5W4UfYmWmsNL9WXA",
  "key7": "RerTkNVMjUEFbbjgipTdjLJ323NeGiFWEFz9JyH6rXBmZWtWZTPHCW7CGm8PR2WZcooMThzaN4Ve4GBj3FV69d8",
  "key8": "tLWvY64P5EciAcpkJKpxY31ew5MjXkVUGSU8q7eeX9AfqVVCe9GVemsX5GWohzTiwtT7H3KmAai6LPCss9miEX6",
  "key9": "5GJd332pxANEmTT3qxtcXKA9GX2k2CYxXSkjzLkTj63DpVnFRqZvpE3XwjasgjoJTvduEfVWue7Ka8tT3MYrybuG",
  "key10": "3EXK9mGXn484QzNa8NCCNYhYQ97jxZYc3uXsNEut1cFDVH492p9tfyZetib8hHAWGhLxGxPY23DgVT7eRDaCzjqc",
  "key11": "CtrnedrSN6jCxGs4z9CfSbLNvguvvrRnxNRs1imwzL2gSHGSA2RzDYzjTvNHzxG3UJkzuNDWF7mDfqETKfPf8xP",
  "key12": "3FGUthxWYLxAGyVnHhJF7Pnxq8ZjYT7W9NJWyt5cVbNTn5AcYxxETLivaoTjunT63AfooUsccx2N4RwDXDBXZsm2",
  "key13": "5SKpB24o7S3grkAstW1r48FNsMEyViMvbVVjEp4hTmeUtkca9cHGuaRTyujyCpK8idhbwagjANwV1CK3C98VReFm",
  "key14": "4nqw8QYtEkCqeQrr8U93gZgWmGFPHGi98VwM5oFg8kk1XZqVKsMMEroesSzXH4L5GjGB5RaE4o3TdpgEDjsjivS2",
  "key15": "4ZLZdEhd8yMdVjhozps53ABuG1LVFtcENiotqyZqjU5ekaucezXsxwwmGGBFvSmfWzcgyZVxBLuLeMVdeDbYDLgH",
  "key16": "wqyEAw82STUYFJexzmWs914X46h3NrPh3n9FpRENGugBiooaipw2innz4jPUTHGCLUGuSD817xZmEroqEtCswi9",
  "key17": "3Zpir4myu6v5ZEeA8U71xhdknWDjNQHCymDvVeEZ8oZ9HVLpCxWghN2byC9WLdaC6Vji1VjfoMXNC8D7nD42wXfW",
  "key18": "5Nk4Y6vhw26YtKHGyYBk7yyQ41JD4GXZmuNkECwddrtEo2HBPHcn1ya2T6c6e69gKFvBc1pAtBrM9pijS2PzmVSy",
  "key19": "4d4cNYZQvbppEVB42Ec5FMNjkKFTHsYLaoXd65YC7KELQ1JgdG8PjMGEvM37Gsq3wVqnNYihLqc5hTHqM5N5qNPz",
  "key20": "22zzDYdz6FacVBCDTe4JwZ1gXdCo61b3cixvqNQrwFNdg774b7BPquPX4bNhqmm42jspTFa3uweZiEu2zp3izHPG",
  "key21": "4zAjFjB3iQA7LFh6tdM4MZt7yMkEfJjYXjrYV2gbGmSgJRBPDSe6T2xAbTJq13kxZamvVnhw3usR7TdBqdUKwSmi",
  "key22": "3w8a7hC74KBKZRe2JZEgTgXEKW6ue3Ufohp5X2uh2jXZ7qTptkspMYEsyWRqRboZAUhsvEhnNNbzFzBw6zZippK8",
  "key23": "4E3v4tPT2eKuSnqt9uT7VWxBtTu34fpZZFpt3vQJyw4ZtzFQb48Yj33Lto1pncDgoD6dMyaJBuJQvTHnvc7A9FNx",
  "key24": "4opPzxwShCcpUoi2gBwqpGJ9soKqHMsBoM8St3MvWqL1ZzUA3DrRRXMEzxnew5P5g4SkrefU2PazduUECKeEH6yX",
  "key25": "4vUK66Vxhcs5E6FGUtHYAS4MTj4VCScuzLSq63puuYkVA4YdhuZHQsD88omvHmxFrjou5VvVh95R9yYHANQ44hxP",
  "key26": "2ri8jgAcQVMxFtK1LjFWCSXLAuTWL8T223BSKbLcwFK6N97wgTpkxwKorghh2u5Htru1fimg9RFDNZD89oZQpSGV"
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
