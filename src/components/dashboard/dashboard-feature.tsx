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
    "4JpJATJFb1LGyPGxEVfCzdEC7ZqdiCPm15hZGEMhTgpfpa2jP9Ex6F8pzQPGAJH4sE1gWyZhFo4R7SDsKY6GjqCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WR5PcP2hUxfeAyD5Y6MKcCRoF3eUUkxVH5TNYWQQGoyacgu8wJ3NoWnjQEqdrWckdbh3ajkxg1Cgu7n8h1vSVJR",
  "key1": "3h17vkNR2Rf4Kv1EUxx2Eb4YTTapyAzrKb5EVVwHeSttebNZwdNXDNxzYDMTYMDrU9b2T3fWArGeZ2G2ADHA2jDW",
  "key2": "56spa1huFiZZwrc1kgDGNUwJCKXzqtriwPHMjHPk4gYacVVjFMjeufcP2BQ1SRyE3kidX1DcaCgS71aQN3CmDMkW",
  "key3": "2quejtt7R33Y7gXRqBU7jLJhPNMY5hu47rbqiLyEvRG3SA7SGpwxfGXzWBnkLY6dNzpSRvTU22t4XekhULGkPcnN",
  "key4": "5DTiVZ2kqQPS82duYEeExFiUUvu1VfHitLpX2LSeRwiyeYL58oXrEKFD5HxZCzRNo8eiCwK7HosmXCYJrLHLQKeJ",
  "key5": "3LEScSikZi6XpJh3LdeCTFtS9yM4jbNdZX3BYUQhvrTL1y1bPynyeCdA9VQCiR8XLtCzkghKhSnF4bZpmmcYgZ1b",
  "key6": "uNg3hUVv1gbTje44BieDXakq4VLsvxZ5JTeXuc5aSGLtQ5SnVxYRcCVudV6uKmyhKK9FZGtGTVmjtv9VSbbg43E",
  "key7": "61tEDKDceoAPjm1sRcTfCM2pcCpRPnGuo55PH6wf8kBBxW11vEkb14JdfBxgoHbLALVgMucBFcf6PD4r7pAsiLEx",
  "key8": "5FHLkQQNi3Rm1RU4USjrYNvNiU7KVFwr5uAs3LBDpuzyFXzRwXT7AJNS59F7Z18kCStKRnMFgnvUu8cS2g1Djadw",
  "key9": "7L42BwuopwSD76Umv4nXnorLMTjHwfXQG79724KD984eyUUtAuNoTTSZ57pZ5eC6tVZANRfc4zW2A5ErAGwo7gB",
  "key10": "T3s4b4TEjujfht68G6rxX5TawCq5TgtFnbGb6Ynzc3q127jnZc2aF4xZfTDwJEkMyqp8VeK6eKud72gfiBjVDSc",
  "key11": "3oMh9mZjvQmdJB8pfGBypNfoVuCQzoFWncv6bocLW4Ji2nQ2JVeH8fjeMcbvBrxkxqHB7Vm5K1ywxC9ma5ij93tZ",
  "key12": "5HpiXy3mYkwRKJPHrNEebocwGxoy55kCM1XvzJ2uc3mCAtmyXm3YfFAbBh3E1vCWH3CtF61xPrvZoDDXWWwoqVsR",
  "key13": "3W4zchHNwKuXAaPmSbokAzaHuMaB3NTQCsdBjobvVzisRKZDHYw9hnV7ZBr7zLfustwRwi7MiuEragGqe7NSiQSq",
  "key14": "63hCJRezeU74kHjwX5mmxSpuZgmkpR1rZtCCYLU6v68nGQUNKipMjZ7iyZ8GFCDxHU9uwH9eBRmayWGGC9d7kBwr",
  "key15": "5fJQCUjeaqzchk3YF97P6CsGyy981rUgMFUFGLFkNfqYG5RQTVnMroDJMs2rxp5jmNyGBkQWacUfBWPnSQsyjHbC",
  "key16": "3XVfxF6HQySdLBZXs45yp9LchN6XdotKLuf7k5fVsMgmqn2vq8QFA6bBjZtqMmv2LWmwBBVfuDBc7rejcFhL1E6x",
  "key17": "5dAXCqWVoCBNdFnqrufFZ1Jscz5k3VNiiyTYaGQdkNYmNjziuGpTYtCGYhh18ZavHnwAVAZ7Yzayrh6BWPwdkz36",
  "key18": "3wdCGcAmzZXuQAVKdFiYb6zEPHGMJuofVqTtQqEZ3C4irSnERwwCvjxxX3rgmQSxWseyikwRwMtVzm1CfmzfvkSx",
  "key19": "5j5fvovCXV1nvooScpdJJUbvsVTcm2WXrsUrMqbVLEVEgQhep65z76VW1k3xCefswN7xwNfeNKt4B12yFpJhNA4e",
  "key20": "5uyNs3k1nZc1aByNMuApPyz9m2kAysnyM9RFYB4Dv8xcVgcNNra2V7qpy6YAn9S9AtTNBJdtM72vFLGzySVNeM2F",
  "key21": "uWekG3VP2uvNiLFWiQ8D5f6b5RMqmw7qbyvzAj9r43zjE3NPmewaNKxrL1qm7BTYvyGeSB2FNTMnfMaWLsXfgGN",
  "key22": "3c4fSxbzfJYJ2QeCRASR5mFtoUDAqieX6SuVz4dHH5LCRqqeCZ9yVXQwYubSFtG1Ww6pRvPpke97NbZhm8KnvGgF",
  "key23": "JeJLBsyecYVyCUqz3jj2VZkCaJPZxAr1UMHQ6eQs5FRSFVresVrB7DpqMmEJMim5dx8ZrkqTU8q4VYWGtCEM47C",
  "key24": "48ViAUGUVftr1CpmxESuLdVc93Nvnx7UBWPoNxtUgvBtC16ZzysW5NpM2FhYZJ1jRjTvMof6sEQ58B38R8r1U7N"
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
