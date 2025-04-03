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
    "2Fgk2NJkzXjpcf1wXtYDEXm1P6DQDHy3XqwVjQ4MsBUU2GwKQGQjPMgPzx9qGh7BaXeMdiLqvu6oCtjvZEjt4Ykj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PZD8d1yhFiL8mGvkyzgWAjpgWFQqbMhcYQoCmAsdarC2Gc4ATABdL3K55Pj4E9WrpcZaK12DAPXA6ocoP9wZonM",
  "key1": "qFvAwsv6xPN25HWVLNAn3L3iowweK7UDZfdW6FtETsnZtsP9PZf9dr1d3RQivg3Ypxy8rofPFtCWKr95NpXsx1e",
  "key2": "2RYcwZmm8k2wkRBqy1RVzDWq8e5kTA4AoYQbjt3Ua5vzXyT4E852RpP3Jnv13YMeiSDvsyXsHFqa8RiZVYEEC7wc",
  "key3": "PYmfbFGtY2gsUBDrEG48hYynNoxEg9mzitPtoHaMhVqpvj7bwmC11YDySFQjcpCbEyE2A2M3Zfj77ZSetqumohm",
  "key4": "jkxbLzuy3qsu6fjuCkjK5KZuQkxWtE4wtv79WeR7ZaMYn6ZDKVUVogzxArE7Jnhpm4zKeUrysfNgARkiqygftDd",
  "key5": "2mLCGD2fcbqHQhiNfa5Dey3twy7E9LZ7FxfqbRuwa54Azo5re4RBCxCkBRo7Wsp6Tuk8othPvqSTw2c2hx4WXRpb",
  "key6": "4c55BZpvCRNHNMntCoUugmH9xarsTS7HjpYHSdCAYmdhp38iYZ5frio4z3o3crTgP1cHkn2rWV6LMjF456i3Uz3z",
  "key7": "5ACU52BoeNkwapyuGCimUp7MDBEvsgdpUYLwyRSkpZwnxhiLbGKMxLUPjkvCmM3SgcDtS5E8rDjxdx6wASEfmNg5",
  "key8": "5WdrLx1SHfXW8fizA82oLdd4ZGMgzYLfFCSSBgxVW2tKGRQXwFADixU3K2z7nuEVNoQh1c3bbd8xxQJAbme8H4Z6",
  "key9": "3qaey5gHcwGkm55xtL9r1dgFuBiV2RrJVLvayxz1p5t2KXowRGAKdkYkCdeAJ9DfHeySdPgiPsCbtTofBxhHRdjW",
  "key10": "4vLWRzHHiXfZ7rKmCSz8DVhbQdBhEkz4dkTaotRNxCpkwDQf3gq1d2n2CxkSKMJpmyiDj87Jffw8Zq8YoPZMPqKo",
  "key11": "LTKxrFAckjfvoFabPDjee5GMFtzhMfYHFssKoYrA7entfZZomjZXgwteCexYHLvFRxz9iSZ5PxVZ9oszkSsycrp",
  "key12": "s97JzKEfY6jCcMxjUxAh5K6NYT6U4P1JAUMT9weLL9U28FL36pym9SX9SMUaa3jNnRJ1vXQKJGkjrf7jyCMqbAh",
  "key13": "mvZySE8NMZQu1yqs6z6cb7jvr1AoiopPZFvC1mcT2fTja7dtQcbYvpdYh5C8zHvSKzMF8uCNc3E49uCAWa6Fey2",
  "key14": "4biaoUWizLsPS84MMY7xUyY7tbdsu9iGZ3baZd7dgeAL1aLG6XicVzQBHPTkJFBjQ4eTyW6wNe7mN4uBrd2zez9b",
  "key15": "4NPJzxTZnP4UcHFGGGnYLD7wUWWFEgBbjzWqqRJ9PG1Pk7JRu58Dgg3WZ8PmKzzYLzZBdxMfE7v2sgzf6mCFGRY2",
  "key16": "5sssCHZT3MrDBNgb34ufDWXAySyNKri9Uq4zkitrMgMkPykpsNQYYepWZC6YiQ5UYEfaz84motLyeELRTKZ8Rtjn",
  "key17": "46eiJA6ew7zCJxQ2eY58L22e6WxBizo74E1NJJizavpExvR2W5gLUtyBoGuZ5mZwfT6K2xYN2u6BQiccizVihqdj",
  "key18": "3jGmc3DoWNWd4gq14sg1ByQYrzG7YyB3RFc1Tf64jF1F2uhJc8pCG2Z2fMtA481rQx42TpQcZbDiaa9k1FJQLiDp",
  "key19": "2PpnKzFiSF4PTES74WNPKJBjVyzWo6YRz8XaKLga1r4hw5QiPiCAkMTKQzgb85MM9iKNJcinD22fTzNDa6gjwbcA",
  "key20": "23cVpf9E7Ww8B8eGzT2UGCAyjUBAH5uwzmqvaHzZENqtV4RJ4mw9xWaUJc4Th3rrf2tsouYKFaqLFj9mE4KdbvUo",
  "key21": "5KkcmLBpjgGn5ZxSktZrXPoi8sigYHSjttY99Lh6VKfvE7L3bTaaraGLyxPSxoXrPfmSaHDfUvU3DErgvaUu23et",
  "key22": "25pG1Hj9TC9TZjBtjXUVFgQ7oquLssguhaAKAXzFyZ9trVSi3BRBpe8kwEgbuXUnimxzLUqEwX9cEAQHKfgfGKVR",
  "key23": "tEcZJvCXPZ95vbKfv2DEoJurzzLa4o1p6y5aUUVocA31yWPxMMPcH69UN5yRp6vipGNwYyFPHqCGtPhwJaxEcxx",
  "key24": "2EokvRcR1jVSF36qNiM6ceDn5GodBoopZ47q8TjEYPR5W4nWAQ2p3xWPC8CxnkpkvoKTfktQfwpAXArAqxB91M1M",
  "key25": "4QYewNggQJTtw7fCsQ2Vg5yyEsTK3n9brpW1tsYBa7EFdSFw9mu92dNGnUHBCN74GRiuvga3jvSDvASx4WWLyjcJ",
  "key26": "2FrNoYxamW2kN65rZgMfMQxStiThec8XqxhgH6pb8DEAa2FpKJV6VKJFT7bxYdNHusy1C5zy4HAgXArQ1RUC3Zqb",
  "key27": "248WfVeawhKQVaC8cpqaTBJe57TFHL78DRZXc7ZEQMV7Szj5avBDH4hXBnaSVuX4TohLNBkT4yXEjzyuVc8YPdmS",
  "key28": "2FNt7DkjJgLtQA42vgwfjqY6qLYGr2RqMW3QwVruBnXE4aLFRx7Ve4au1aRYiXsGfVC8gG6Y3tGx2FsuEMnfHAPE"
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
