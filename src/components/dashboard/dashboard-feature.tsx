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
    "XbhsfgN4PBQNvt5kDNNLwu73eZLpAZLsKVTAshFrQ1XrK4eUisgMWVFx9MzQNAn8Su8rwaP2UtM4yX79USgYPXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jVoDmgH3PGdQph7xg19My9o235qkNYEmdzTPgLM5rX81jBwwMUZZ3xDfxypEQxkz17VDHxh6knMb4Ef6WP7kcbR",
  "key1": "44itqLWriNjQUV5xk8kktwhZddcoJ5fCkZiGvqrpVVMjeMVwpN9tXSNVKeYZi14tc6dmccN28FaRQ1woSDeqovpA",
  "key2": "2xfDQd3s3qPcZWbp3RWHG16CCUGpcMKLwk2Eigt3TeRdxDbbJzUrHvcsghrYpSTmsNhZ9ZeBvJ4wY9GJCYZhfWyB",
  "key3": "NpCzy5EM7tZh9jb248gzt12hTYUcCWFArjnQAK4ZMQZG5d1xJgfR8bvDrEDK7CJEaEsE6GH1M3Ysq1CegPB9HxJ",
  "key4": "DLf3P7j4ZhMNvuN6QCgJaX4AARMjArnmGiEr1ibMRqovncBcGjxynTKhuqbEvDJnkn9rCBY3GHs4enwRCGhdjCh",
  "key5": "46HV8TFPastAZ73Q6qbN3z8W4otTcYCY5nAU9UXK8Mf6uRwLNt2tQbE6qmCkueQFBM4CSmV2EntKYkRuhv3sqdxn",
  "key6": "5L18UArPNxY3FfZPy6NDkssCRxVeXfbHR95ZHJXX3re2hUuToyBkjtGjjwaiuea5zLUeiJBMTUv3hnu19cyb1Hz4",
  "key7": "UqkRPt3NUienb3p5f12JE75pteHHp7iS8Kg39q69ZmRD6Ait5HhxmmAnFU5fVzxZVFqTCrKLBqVUxz1j14pAMcM",
  "key8": "3s4FKXpzpFYamX9gTHDwLHQirtQ78PN5XGnN47oNbjWCqg1vQvR6feVRUEXHG728hoZKSR9x9kPEVAXQ9CZHYCcP",
  "key9": "5FrGZP5U7Ddm14D51oyFizP2MLFUNoYyTHH84XF1e915jSExXX8ER1a3UtxCuPWaEmCCkFK8cXhVw284w9psQ4Ke",
  "key10": "3E5zkoga5PQYx7VoX3pBJ4d3XKgRyRzRhriZa3rHbBKAJbM359SpCTzhapU87qvZYBtaFdEUvc6DZm1ysSSPq4rV",
  "key11": "2zmVHteK8ptya5pw7h76e2MwvBYjYqqU2X74i8Zn3UDYZd934NbXWdN5P5DeJCnMTCmtwVTetK4FNYvto5jhCELV",
  "key12": "3GyJiEkjkaUxTxsjemuj2tVgr3Eviszn6A2DxJKtdePmtigRainJJGT3L1po8VH6YmDxw9CndaBJebEr6MMv95ZT",
  "key13": "5njaYfi9rfxeU7CuqEYkxVYo7VgRj3bJPk4CxqHBUBMW5f7PHj7e7yJCknqvMVKqf2VLNNfwiXoDY5bfzhfDszTN",
  "key14": "5xCdKS56FEUD6nS4VmRmPQXwjtHa36P4FZkXci7Q7TWceUNgXMNW28ySJzT1vKBN2wZzEQNZjGMbVmygckU3661L",
  "key15": "F5JeEx7mvA62bb7XopW8P7jaDaCVpCPKWdL2iAjMTcpbV5svK8cGiRDAQecKpm3tyr79NTKf4WyYks34j5v2kWN",
  "key16": "sa7z4crea8YAxMHen4TRfd4MVcygTxPh1irdkCrQ4fMQ9TeMuKMFqN7Zyhj1geL9UzkFts3GNrCZXVmw7gnU6iu",
  "key17": "7QEgKeQUygtJTz8C13w3hE4yyDisbJjVXEcFemeey8sVVN5UPa1oKiVMyd93ydPwEFT49HbmLB2nQpae8fbx1N3",
  "key18": "2V9NFEg9vMbs4nQDXGnHxoKmsF4CZCUA3RHnp4Nnvna2EoxbwED8rJN36tBSiZ6R6RWce1vskxwwDY7e5e2iLzhC",
  "key19": "4Tgo4AvRVJipRUQPwZ3vUJxJKopr7NteQxWPuCwvahZ7HKiM31zwjvwzo8VF1hppmo2t4wL8p7FcP8W3TZW1Nykc",
  "key20": "33UzUr8d8FMLcqz1c1MeVDDF6yJnj7pH6RBzCCbFfUV9s8LCREayJ8gfyyvkCsXeXcpjFGnz8CCmwBvALLicttna",
  "key21": "3qchk9UFz2GvaHPbep8FRf1TAeoTvnaHa8BEnu2c9SQCR5AQL2dPuVNKBc7PwRYotmeoQJwGmw8CWUTZP4Qi6HUE",
  "key22": "3V744Hp23QLft9zjWF3ji7tFqGvXZVB9P3Ve6nuneDpyjAtwwbSznNeiRf9kzbw6GB2nxXqbeNtkdhCGREq5hMdm",
  "key23": "3wGMbBf7QbMhc6RndHsrWdnnM5N3DsVpj7kscyWcgxYA5u7wYVjCRJKhGSy1GKMYunN7feYVhJvirJVdUJZHJuL",
  "key24": "4dvywVq9tBwW81xSDrYyZYZJCzHnudrp8yiLvoxJo5UJzfMeBCRBTbyGnn8utXLtZ7X584id1KpBGCLk7qEwT4ju",
  "key25": "GtcEtF7gA4jsLeK3VBHfz222Z9jarzqdUS4Lm276cQBveCktEhdS3wAzD5zBHG5n6wanEdpa4C2fw6ABAGwdkyh",
  "key26": "4gRAXGiyL1ZwKrdTNqJLjzjmshr9oTjuyuNNrGT6D18ukfo1pr5cJUKFoXwhJy1U5CFRZtTMvmYq4G5yNnJQN4Au",
  "key27": "3sAQVKcQCv4USR52sAVdve7BGsypHYAKbquwiFxQwwXbnu9F7MjEY3J3eHR9hsQyAZ8YU7csWnieZezQUvmbAyA8"
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
