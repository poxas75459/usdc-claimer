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
    "57CufQ5j2rmxxwRWXbt2DMnigWwnWPe35sWNTGu8Hu2eHTJqJ8y1HXuAgjG2MqSvJvudgPvnBnFV9vhRYU6z3eRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X95471wj2P6mJGqa5ddWas361YDyQdYGFpCK4rEyvTwymxP5SVtyX5cDZBAxkyYstYChGvuFEqtmK4WtwJjN5mC",
  "key1": "3da8fWuSsSmvzqcMYChShCbYNhiSbKXCEsbddTNWympfwyHw4vPuBjxZFnuUhFHpzw1pFaPR46JLVCoLrLBfLagm",
  "key2": "5ew2kdMbfcVGt86mHxnjcj4HDhRAJ9VQFf6BNX8t7BnSijMKTeT5tSK4d3M3Wz2vLrzP4fCfLjtfNep6mfMDnt1t",
  "key3": "25cYambqXFp5uG7uACLoWWEspbj7shgRBgLdwymNrnbd6LfG43hYNopCimdRCLbGzCwSb5Xs4ctaSbAgbrsmBnyh",
  "key4": "4e5mMu1mSauUMcEZMDCVyutX4M7qZ5pCs4QcEWssvqy8QnegnmnijooAMNjQ5p4vNPoArDxR4XXFAvFj12Y1YPns",
  "key5": "64J5pUKubTCVrE8LnkYAZumiyDATeUhQuy8GS4jnUkA4nmDaqMt6shdHwhHmsF91UuP8HbEezjTs3pmzNtrxmmpY",
  "key6": "Lkj2eedw6f78eP8a4N7gq6L3syu7t5VDhe6AR88cEvwVRyscjF92BuGfrBBbhFbqzCdtE9AhZuLptRppBdKPSUd",
  "key7": "6gPu14NjwZgeeimGEQCnxaRnogKKVFiscb5YvQJgmTkmhqLJ3qFYH3kg7qnL6S8eyKSosyLDGtyM5ywqYdWvfWp",
  "key8": "2BC8fiZ9j2tWNswBJtYnsLeVsPjHnH5GfsCWRGR9zihwZrYuMb9FkunnQJ5Afs8WYs4WTAG1PeBndqWvg6HGm3fM",
  "key9": "4isTjnjB6ye9DTrFVmFbyGahuHUbCLhijcGkGBtXjaBivL5TyCPuCN2nJkVh8XRi34ypHyyDgLY18v79QJjRMWja",
  "key10": "3HZSttbfC8qBFPJFtYQp8PwyR67S2qDu8oXUcErNEfDGHnk1HMnhUM7eNz74KXfozDjW4H5yCZkWmVhfxjYM5MEP",
  "key11": "2U5JyDGvBHoYcDnBLW6cMuV2WQxbbkCnBJfKaar9Uzut6MoAGgUUTim4p2BDtHERHtCmWui83cTQwpZiK3UvFb6u",
  "key12": "2cvvubpofeoeNPyh9fUSn3nLHGsha9k3XfZakcE6hyomnguGQmXzZALtyGK1tZZE6PyNzGWsG6EEzDgmwN2cij9m",
  "key13": "2jm2aFkznGW1cEmVxRVYpMLT7iKeS8ji5bYbEaoC5XgsWwyFHF4Qo1G49SkQSLqrMvoR8im93yAcT9N7u8pjBPbj",
  "key14": "3DyGx9enmPQsDkjorNzjnfxp5EZ1pRUcSHD7DuQesLSpXB82QdLbSQ8AixL8j4poLZCm9JRa68N4YJPmCXQ5wpRx",
  "key15": "37jcUhTiirqYmBfSXws1D85DhvsrmbYQ7Kxm2Q5GxMBLwpQzijmtxF3ynF7Y9anxSsRu2Y3tR4M7oVneSoWTcSRc",
  "key16": "i4uR3de8o6Kv7dHSH6jS98CWcWQDScg5FA6rMRZG9mmAbmtZHvVLP18RRGtAqNAZwhXQFiPxToMhSzbjqBWiEz6",
  "key17": "4zXrbsCP4En3GrtSwzovSLgksii3UenjcRtNpnyxRXosMuft4FrtsJhtsoXfSeamEmPAARs1GWrSKUUxfGK5b9QL",
  "key18": "44qgQp87VNhFKkxY5odoVoqCAXLohx4eBn6sR7mCywW5JD7jk8p58KckbtFaTESYU3wBVa39T7UKkrQvJBA1xjZC",
  "key19": "2tposUsmh4gvoqmqxmNkM1KuRDBXrpP5Zsrxznjy47HnLa3qEsELGFRDzepJYBQ6WpQwr6ep6jxiN8DqhcNRg49F",
  "key20": "2s1TQy2FbcBqWsmdr6sk3mEoxnZGREeabHfb25wnu2uKEHy1NiJa5XUghXgBymaGjWw7WN6dD6TSxXgKhrSEWiWm",
  "key21": "2V4PsXYuRHjVpLVruSoCLkaeLDHJqFPgXmwyeoEbMH1yduMsqSTJrtHexiPENRmAEkehHEdAHhJ2UrR19QFZ82QB",
  "key22": "67RjJjS7FmTv7BeWwk8VjRbWXz4e4kncVcNiChxYVjwKhQxmmV3rEds7r7uwq3gZErqq9LWAzXNojp4v3KRpgr5R",
  "key23": "LMi92BbQZGjYBvktF3ZxQNGvBmnokjrQacEguNQsvrYTNmc7bUsuC9x5yFSowbKzQYNpXCgdcjQkSzo296JGCBx",
  "key24": "3NgKpqbS6UJjiqwdXNzcvWtDLGDA1gJ9R8t2ZRns3kdqprD2EGx2UFV6DDcvGeAWsp5bkeb2PVMjcYeCYKccZ7C",
  "key25": "5ej397ZJ1b1cH2WsGASBR2TG85tLhGzcvdbkpJvYikSjUFZVHA5x5PJR7pwyV9c296FL2eY1FJk9Dny8Y36Q5Bn4",
  "key26": "2WdggF1xhdvHjyc3hj4nzDJh3gr4k6J63XJ1f3udsiDZr7Q1GQ6X8CJnzcVFsHuNEANAWooZ99fe54tMAS8JfFf9"
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
