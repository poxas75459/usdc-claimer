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
    "5j7ekZVQwBEtaJmoWrUqadiwecSau176oMfpZzFXS3isEQNReUat4v8yUThWMdLFMdDNwLHDTSct2mfkHRiKgkCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o1BqyB1VHxfDAkDKRJ3zKQqbpYfgFy83Dtu8KttYhevCa95GTfWDt71RJw8XosjnMsaagFw79kQZ7QwSsouVeT7",
  "key1": "3PWeKgAsaTDFhFkGuT5ihg8vpBFNgTP4SGjh1FHHQrNdvJfcNJ7a67FqAyyWxWcT9quJ1hHaGPRv3wUyV6mETnqa",
  "key2": "3UQ6V7UYAsb2Pe5vS1MbQV6vz6S7VkaeBAW9SczwF6ZB5ox7dXitM1Y2is9N53b7EfEdRMSL8ruJJSNzB3e6jd9a",
  "key3": "wFdN6uRi3QFAidyPqJsGvAztATvDjJswbn76cq8Fx7Cm6YwSKHruivQNJzq3FuAFZRpSVMUtyPmVSrdrKVPip3u",
  "key4": "3xZwQsJUZu9orBVatyP8d1JCEY1SDrn9fZ43uG49LPwdptWmVambgTYeCgwrQcm6rHzqgMCJhgm5fZ6qUQQegRp9",
  "key5": "4cpWygHSfM2L2N1Cjyo4jH4zYAXmqMCgPWEtj6CZpKHFz33mmKm54rV8sj8rU9FQAVdq22jNztdDNWhDHGry6JMv",
  "key6": "4kzsUJQrfCYgKMmmHta3T9FEFq85zFqfUiumKyonTAttxVG7MGxrLXA1pEFJVqNWtMYay7NWM1VyM9ffJ4jJdTD",
  "key7": "2zVtqz7URqvW5V4BX88wA8rRXSBefRWiRo83cC5P9ukYRnaMysh1eAYAsBYAxQXZE5FZHGW4rKWJgpbfrGTaScDN",
  "key8": "vxngrbG6gQgQ6fv63iQNdfQee6LUGKMQj9WdGGRQ3QyeQqJM5WGuMw2gS2kXvzSXTRzoExd9PyWqWp5RsXfah8s",
  "key9": "3AyRY4cUhzfGkk6aokSXWWn3VwRLB1678tLaLRetWTA1bbdgg1oTMAwS3HZkyP2P9ZTuqhXzmG6kbXYEFfSzYAPC",
  "key10": "3bgwNjZjEMfNFTJbxgvMrWQusYjCNK8P9cMfn2oRCGoxi9aA9NyJ4HSqC3HBY7Dtzx26vxrYPF17C1nEoE9CNft6",
  "key11": "2ZsdjK7kEuS1gVGDk7nwp8HQQoRsjanmJV17WX8QukKipf6cC5fD5qfbThP2qukV77xVSa9G5rpcHaXHTQmwJas7",
  "key12": "3sBGRUpqZcJ72pxtLAA7zmYKu1aiZ36mjZeJNRLfY3noZkMsCGfXowmANpo7LEtd6ekEDU6egn9RvzkMLnA8n4tN",
  "key13": "31fDBem9MLcsdebUBRRsQcokwddN8z271aWJVQ1rGQNyUHwgwNJwn15q4QB98jVp2ePadv69JvirejeBFwfPYB37",
  "key14": "3LXckhgsG1cmNeKSKQJGDAb2ouuisLYFA71TxnjfRnRmg9m4tHouTKvTxK6RhEqm4ZrtZuVEYw7DrqSWR8A3NGGw",
  "key15": "44QuKLZQJzcDz67dZUkmDmhn6oBadbgcSfYwDZGGBCDxJDiUpUnY7QXXKLbueon38go11GkRG9bEvXheEdrxSTfr",
  "key16": "5m7thL7GUF8NGyatuQbeX71WsQifDSSqwKhgJvmPTFaV8rrfzBfmWwHztAJdCiW7uj7b1FxhPaP8QaLuWmMx1CEf",
  "key17": "2pjd3UFhpEEUgJ2Ss2p2EjBjcgwiGPaXUfqnZiqs7u9PKp8T6pdLcw2ue6hXNbAqWyabQZTmpy9E1jTfDNP8gx6J",
  "key18": "4ajBrmiMKazJhZDk9xWafyZyMK8WsFXQ3mojSj3vowNJWBkcS5TbpYc5tYAhbCeCxLTnTPM7i1GiQswHkSwtmamD",
  "key19": "3H8Tj2tJurRT1m765ZzAKXXDuos2bEjCqyCvUVxbiWWbusfVwyY7qp3TK2ReLDjZDZeJhevC9MLzaianjGKXWFDx",
  "key20": "44bsQue8HPp1FKWUMaCaPmXy9CwnjQoSmTTgzmiB6hcmwauj4Tx17cTyfFquUDBVzHe4SNWGRmA12WfFqg6D6bfG",
  "key21": "5RBAVn5jao6Yp4BhumoFKrZ4CzcJYgnBU7dfAiHPWv19EvmNxUvNydCSnBXiQ7drwjvYMx2eAhycuRfmP4zFCVKG",
  "key22": "4QpgS5yKY9zyrLfVunWFFsCer9oQ2dbjLvgqbBBoXcszVSxPsqVoa6YKRN9nT3aHAMRYz2PzP7EqUrtYPiyLQyfN",
  "key23": "5ZQBoWm8y3yskx881mid4V4AzJvcvWMV3JKNLdUMakDxgNWf4gkXa4ZtVkzCgzUFmFdYrREsvtvHTW8MRtyzTqZ6",
  "key24": "iCt8BcHVJxdSHb41BmhDF3QQoxiqRmRWfCZXaDxvSc7vuCm5VWbiq32pxJCHFQopvewcZ7G7JHXv5KLj9zRnFb9",
  "key25": "MCtoG3QoW2dCgxsZU6ziZyuYR6jZvbCtVVtiP59CZQu8kpFadk2u5RsxFvJvuaGLUWPsXYmMAQuWqiCzYpPH81m",
  "key26": "3v3WUh5iSn1wMNnJ6cLUDvrNhahgPP8cYySimNbhnFPVKP1Bd1E7gZGPyf8fsMf3G9VJzgdQ51pKToKL2xuUec9E",
  "key27": "2Fm8JVWtSXq9YuMnn3PymKGSNrhCnkHsMNMaLTuUzMhuCLBjNRMCGgRJ7Gu6v9KbhcQ91YnT2iJSXV7ijs2jmUHR",
  "key28": "3zwajk4q3rXSroSPpFEq5Av76kidr2hJye84Xp46L17raNvgysGfqxxsbawvtUvviR2NTHBhseRG3vwriyeftHFc"
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
