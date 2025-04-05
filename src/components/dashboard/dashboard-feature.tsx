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
    "4cHPvV8Z1jhH5bcHS8mS3yHx8F9gSGpZiWawxBg2wEVuLYrF2549sUmfwUP6TGu4Bvx8CqLDTccw2cv1qMZxchBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UJtr786RD6ZdybtbN38bVS9z3mwgQD4SWVvKJ3xUjdJdJMnmaD3tsgJ2UQ46FFXwjUBqhqznuP3oEoCqWB1XpFs",
  "key1": "36KWkmJgtPGkump7Q4dSCRfoWBotJexzwtpMxgMSc25N5zi2MsmfHDCFCNBBXU8rG21jpQ4yghLF4jmazVWGmw6B",
  "key2": "pMdnmBTSwU2fd8hEjbSGNPYx1AyenofXer64wqZgPxkktPWWUXS9Gk2gxdEPgcxMo5NSLoSsEeAh6qRo15LX3u5",
  "key3": "55nCnphXvUa9ofVLFrgwiZWrFCEkrB9gFmBYN3bePdUKbDF52guz17KVXFtxTXvzFSh5y2AaSUctUx8KbdaGwo81",
  "key4": "2qDfyFUTqt4oKkmZsUV3aMoGEKbog5m3u9wZRj6vtmi2fc9ikYZDJXXHMiAE8RvZK2FW8Kdxr44HZ5FRA7FP7Ttj",
  "key5": "EysFY33GxFRC1xFcBrmzT6ZaPvAxmpZQqMqCYGcS4NC3mJ7iCH1RstDyP78gAJUBC1rrmMXe3kL3hT9MhSBqrbK",
  "key6": "2BFX3eEZGqB7K6LGbeUGbDEeMshHAywyiWV77QSRxd6K2MzRDQUfSfiUKTSzJ2AznQ497rrPnDf6zza8CvVmnAxR",
  "key7": "32rdw1GCvpe8FL81eUpgmRAMtnuZ4t3xHw14pA7wJDm7id8jGic9k7HYFF3iFQoAQDiaDcBWdeaavMBEjTVrSX2M",
  "key8": "4EJ4b2E17GNXk7BGnnuADhPgcJG54waJyGaKtWDbDK5iP75NgxGssUn3cWKUhpNmP4fJmnBe6R2JBPgYj2vsDR4w",
  "key9": "4HsACXKvSvmNpwKLGDK1XUZrG1D6WaV9UecTEyW7tgQjtxp7eQTkfytaF975SRczmu5BxYCNdmz4dqGQ4LHSein9",
  "key10": "ZHA9PWtPbDtvvb4rZQjaMxAg7Fc1kHtbRY9wKeW3o2ho8zneE1ejgBGtH9QCk5hYg1n3o82TZaQQo1VAqkUgKNh",
  "key11": "59xdgpQWmpZZvqfLUeXR4NrXCys5ehbKLxDXuFsdD7yqQJ5HcsMLrQnkSVBJQzLQbJtZpPv2tLwMQR3558st53ZJ",
  "key12": "27bsrgCB4Nd9xvVkKYMSr6sdPv6G7ebinq3mPyzJaGkHaz9vuCw1ok97hdjNg8JFbLqGbUTymxqPL12KwF4TqhFD",
  "key13": "573axZJWXKhjiGU1ifuE8NSvoMeitGEHLwym6J991bg7oKZRSvJFWWbuLa9cJEUsNjiW1YcDfuSK8M2FNxLX3rSA",
  "key14": "3K1qCiN7NuK7SSqbzNz7Q7QFtXeGXSyQSrY4jD9D3S6M2C6npsx9eSqMFm8pkDySuQ2qPwm6jFy8G3qJe2qJxxMW",
  "key15": "xJML8XrHRjsac3gn9SAnkYcs1AdFpmVVkdmFHnk88bRwk3xQHaS5qPNEMCBRuaQVugBCX6TeLkCNHTuoRoQ2ye4",
  "key16": "5kpyuABVCpqhysAqsVYSxfXqtognSWiAXTPyAaDmkthixrA9nKwNtAUe7f75m412AUtmuSgGS9J9Tk7NL1ByZ9c4",
  "key17": "uSZBcjPNQ1FMa88vsj5UvcysxbakXAa7vCX5AgY91d6JKvZJpHvYYHd6UYmEw3XvZgG89BfLqcWPFHhxU9PZKVz",
  "key18": "2gtX6HhwZ7pHSriAR6XjSabF4uXVMibzPH8jojBDmVsUChgU7NsrMAjRqj9RFxBmSRj9M4fRQYXHaGc1hPF14hUD",
  "key19": "43WXZqtvDpn5HPFGWYLtRJXUsbnx1HHy8mRUiX8Af8kvphnGQpWbZGf3pT1q8Z5nECmEmAhAY1v71FaWjukC1iHf",
  "key20": "5XJiWSEC3WoXFFCyUEaqPRSMMVW3Txvi9Mi2hhVAoAdCqab2J4xCNLum1QbtHb1SG7hLJnAXLkMfTCErx58mVc1B",
  "key21": "2BBPt4RvkhKW6AWHykG3vVtsYF4DVVx5EQiJPFZqtttoJwNtxpREPzuMyTko9yMjGdkgntpU3Fch12mXnL9bhdzf",
  "key22": "2Wy8xFRGuMoPhVxRrMzMqWH2TaB6UjoLrwDwJTt6CQSaQk4ext9qC8xhD9Kd5XeQvEj4eYU2ZszhbLpUHDcQy1FC",
  "key23": "26uDsJvXqWsHZnvKJY6tFBZWpFoBsVpqZUkw5tXxjuTahpWLeDQdjcT4X6mF3pyKzuZVoJ4jNd1vrmf2y7W78a7p",
  "key24": "4WiFPnw3bSVmrLTEJCC2VvWKpvN25ic7gNy58WVxq1MF6hHJXdG9HHQHXu2CEAiQ3tdBWYPhXueGeAukLgPGKZzf",
  "key25": "4HonuakJFnsG7qy5NL4k32PWRJHS9i9gZ9p1PkdboXTgdUXS3arucbh2KLqByGiWkb7x9QM62AfREAv9jr1CAU2c",
  "key26": "5wy16f718urks9wUm3eqqJ1HroZTcYEEGMZQEsoSpkFvN7aCDSuczGisKm4qTGxasoQowrszNkzw3KeSJQ69o7V9",
  "key27": "kbKzjuaaK59Fw5eyvMx2k3dnwReVuqwDCby6vP5atvT97C3FZ7getiLU1ysnSGJAFRCgJUBzBF1LmBpdryLNBht"
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
