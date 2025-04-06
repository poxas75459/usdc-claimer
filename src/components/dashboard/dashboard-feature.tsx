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
    "djQthKJ9vqEermiTbAMPBx63PDSZ4dKHhh7xfjQvLh4R179EWh64vmPE5vBiXbnmcoXSr5NpHFx95GzmjcMVjjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xfznw5hqrwfd9SzzqYshkUeLUqfWc9q1j6Pcuc4n1uMqpKmFJtngRFpmGvTXuxyB97w6Guj9LtjYAj3sxjyjiUi",
  "key1": "DNLXK261C2kkiSSTaDmTAZ4qxXLX1LEsBfErqMR48Krt2nMJvWatTNupx54n264Myef7zMbL64dcR7fEf28vwwQ",
  "key2": "5eqfhYZAsFsyTVKYm9MW9tnh9WYYFQfX6V7esMTzoQopxKWwjgA83RyVHGFJqM4YhvRuWuf9JJBPcq5RRKMTRXbf",
  "key3": "2CZBY38amapdoD7b2dZK8NsfySZ5RACe1BzLQojUgRTzRnRTm4K4BKkeHED3dBoKGv33kKAuAA2V6gdwxyJjGzu9",
  "key4": "T6i2eqC1mZCB1H7UwiXoEga8iikupzBwRYdqj5VQybFi4UMjMHhDKqM563wUGTzVhsdB4sVeq1c1ZCpVt6MyyQa",
  "key5": "3ec7hmWUbgJJvcRDBw5RCNhZ2tcPbtrg8ifB8jUK3Pq6hq3gkqQNeVUVKH2uFuWggUMbya1cvbVQ8B2o5DYTti5x",
  "key6": "4RrxXS6UfXEpftxsErXCExaAm7KfJNzf5ePuvmvrZoSudneSke1H8GWw78txNdCw18sa6aE2155i3d9PT2Ac4F5c",
  "key7": "3SzZkszJfPKcfNwjYoy7pcpQSZnmF8xkrpLvg97gRWKsR1Roif7pBmSanmriXUDPwEmMyDS12gVoepFHCtGQ9Fdi",
  "key8": "5tzEyoq4bAHyZysFfgeCAffVDcgc4N5EcNHeGKALf4H3gZ29GZuV2d3W6bjwyBkY3rjvZZ5ouhECuHTdtLStSJeD",
  "key9": "4goQ6HyWxnZPo7iH8CCKJjXm8qPbKedKjDorne4kDr5H783CMzcKMTX4nvSugbTEUogrMwTvLvLhCSDgwoj3wdun",
  "key10": "3QA1473AQ8pFFQbrav7UNwn2ZG57H1mCCsd2qAf1crKTiA1y5Yr3ThBSyvXQL7UL9WRbSExoyzMRWcSUwWjdezyo",
  "key11": "3bKmWUuVRWPeTn1SqAKi6mHMaZLXxCRdjbxxBGu98ct8LDBocDrWtHFEFQ1nwh5YD7jqRh1nj1xhb2sVLA7dUkhT",
  "key12": "5AuBjfikh4AoxMSZL7yU9zkk8Fw9nuypeigZbLoARhPeQ6GjCXHAwb9TKcxky72WNM7W6ZykVc5yGQPeCfgeQqJK",
  "key13": "2Ez88XJ4wkfzTdSj3VyLmPmPHwZpKWXNBEzCafa8Cxga92ntfucYwYVTzdXrCx8mvtQPpfUsrmtPkFh2RaumsXCC",
  "key14": "3kWQ6Az7VicmDBHUcPAjcg6A1jUnCxP7nmeuUpJNYGVMHUArP6Sdc97GskTrxzcc6gj3NADmosUHTvRLRuc8jYq5",
  "key15": "5GrVHsVzBeVbybqkiTeeYAbxUzC6uAX3yWpwBufvQYcxX9M32Dpen9hTK2kQgBekdCvZBfQ1QjAvHsEob3ccWktt",
  "key16": "btubmtPmqweD7BfnPuNi4NYj9gv5L3up64SLzRbZDZuauQzF3PBLjN6n3cDYzvSHMCAkCqVLux4sk92unuSZxXh",
  "key17": "RadFpzJw7r4TxFyumXfABERXwckuAHucEhRAMtR9HBFJDrk3Kkht2zffZ9KdhkaMwcfzveQxKqGkFepU6CNYyst",
  "key18": "2TAXxHZU8uUJfnLACevqXNr2xw85w24omw6j3YBGzBhLgNga1hFwLP7t8gKCW6dE1ztrXEvXWbXDeK1bbkKXcgbR",
  "key19": "3euEiyUvHEs3MnCZtbi1QdvY5QdP4GUFq2JSuu6mvWSUoXZgP4Yc3TWdLTwTR6kuHtcR7VuMkXPkg33y5v6GQUS3",
  "key20": "4o4KyS1DfE1bBY4UVNTM3SySuYLSy4PnaVybFT4279ZRm7EkgscDPGGCjQpzGyz6oABhomm6EYETefmiUQryRT2Z",
  "key21": "2anv4KEDCStYtMy7q6JQVPmbzadSXJ7JvHkwsiQDrj9vopZc6QLKWEks8vCm1F23rmwDEUXPUuQCptXFSsMsU13i",
  "key22": "4qmD3Q7HdBAUGa9gN8FF31Vn6ryx34waLMLeuDniHNNzZXHC6T8SL2rxmZqX4xJHsk2BPgZvFwaysT9AEt3Yyt2j",
  "key23": "2TJRp95E7S1cZobAaXedbk3oUTJTpc8YqrGREHCF7TH3SFnRixttM3eRVWzxcRUnXTKoHiQXPtKYmgKT2PQMya42",
  "key24": "kkaHKHjnsKsPrkqDZwuyxWGHgJsWQS7hpzEe3UUSWWo2qHFYTZK53bbnBS1d3iGup1U1BuB79F2KieKdkwqYUpa",
  "key25": "5sBntm1XvRNtwBuqkwd3YxrMTZ66FxwbPrj8zrd1akWcPwev9QdrdW8AaU9ivD88XbF4UjEhYwwFhHrqHrE7KY2R",
  "key26": "rU6fLUtBCuuiLrCr7wEg3AaNgG7FNdA69yq2EnTEJpvtujVLVrJ8u2c4YM1gxTJ9meW6WniHUMLtLXvznX5qHLP",
  "key27": "2vu1ek1d194epSaCcPY9WxjDR3diD8Q5bvMP7nZqBjpjGhutp25bv7eFjX33KBzunwFXiV2ACFscU8Vn3LeFWpcb"
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
