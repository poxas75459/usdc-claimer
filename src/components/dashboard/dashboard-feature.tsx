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
    "4z4GutfUeRwyFFgqsRXyvv3wJPujKGbbCkSpZMPpnQqq99xyfctFKXzmrnoeUgD9wPRg1AjLyaRZq17YTgsDFuF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UfCLuGaCvFo9u5czUzstYedQ2eVkkUEcN5zWURBjyMVcuryWi6ix2TanFpdeE8UaiBN4m7ma9QRdQ15UqCM9jS4",
  "key1": "3MD4TFfwSrpK77HVC5JArZ2XDsCy9TApnpbGr9q5rn1nBPZjJmeqMAVo8ZeXTGdy9i8kFWcX4zz11Sw4D8NkJWUu",
  "key2": "4JnRqDszThJWP6dJTS5hqvJn3BTn1oDtNqzDZxeMJwLpgqjCW3aT9gFKZYkM2vSDufnrKs6xg7bbCnSkRk5ceXze",
  "key3": "1224EVRmWWyJdaJQjMNRRmPAijkYDfR1G2Uqjk2RxCrsLP96vZKKE9QpevPdu3kfpJ8baRA8cx43gCvU2AGsJhPR",
  "key4": "3pGVh9GXh42wNTZb3abQxguoVmHvhQuLQenZzvMVYEChfjQE8vW8LBF5LQzvpX8KcQf2mCMa85iHiZTyyFyDCWbn",
  "key5": "4BPckSzJNjJcobwEqyVGcLHgiss64yHbDXPh3xnhU8Cms2NxqycraYktWQSXQNx8pWYJFQQno3EU5n52pkq725RH",
  "key6": "4nubx83FfugcnupKbYhxnDFxPou3bTYQUdaBr7gqDKpSP1uhNpVKmoMZu7djFkyX655e6xgUUEiMhS9G3fHwq5F7",
  "key7": "4AFw4GNmVMY2E4SNbVpnooiuxbSicHYd84QJJS8riCc5fVfqh9SosbVKJFB446tagnnKRgDN8TmdujwEYAJX7Zox",
  "key8": "2GXGM21KyHjvthDREsdVWUm8MHYEv5xhAk8y69hMvR6cp3m3NV8mYCxCn6U2Ny9ZgoU3a1DdgPL4YbQHT7vdjMK1",
  "key9": "4Mc3mV5dSwksG5uJYRkUTtjk2pzXZUeSfvWjs2HDTGrJFNzpQ4E8pGnxk1CgEjiQoSwFzBpZUsTVMy3rseahJGyZ",
  "key10": "3FRyF8E43fK6bZgJq8XDyXN367eCCgBBhB6X1zGZgtF7zxjGnudpWrFfseSTLvtUUh8HKRCfQDg8hJKjD7Jx3Gep",
  "key11": "5ioY85Q7JXrF5Mc3ZJSYonygvWw3axdRfBD5MRfvHhoTosrpaGqrnSqxWkPJKkUC8sMRxWMkcxZcPs4pYKN953Yv",
  "key12": "5HsDLPgyZwW3ScpiEmzmPXh2Q7jMjEgKxezBB2ez1eJZwUAfhBmsMEav11K38M926XeWZhP3KwW8BPxWJvdAM3ea",
  "key13": "5ASn2exz9FQucSXCnTqxZLAt4ipuEuMTj7KnH5JncyCEzhK2XBLd8FBvs6fRCPxDMfaoWnR79LtWeb3MojzqanDt",
  "key14": "2gmgrcibVDvDAYSzdxGjiD4MjjmB86hjL7Chwk6h6qvcHgVvjCq6fjNWiSxATSggz8UVBfaZehbcXu6owVrMa8aP",
  "key15": "3R5AJupEnnEN5vJFZn6FN8245YaR6rr6eN35VZzC6pGsvYwAQNJmPcrd6H41LYtGzRf5grwY1LyauyLFJGxM7LSV",
  "key16": "38eDGnbb9bzLRc2Kp85rCMwtFh3pgE7rVGk49A8e3zg3kjHRWZmxCC632t3qTD53kDA84A2KesuASkV8ar2jLN1V",
  "key17": "3FF8g5CXYXfC9Gg9pA9kX9MXXyy99X3sdQAsJafuyDtbNaYG5US7rKf2XisYs3vuXV8WWhL3snHhAnqhwR7REpdC",
  "key18": "4MrFWVF7uf4rbppyNReDGbwUh87ML6epxq6xU4GjZjtMSdF82iHPncKxtqCXVm2B644jnECyqMsomqmQXyWbLegM",
  "key19": "53LLCHoreHCDo6DUib12hmRR9Xd9fgYGJajMqaNPYbsQnZjfx2MVvvf3yDMcXimrAEfxCYuQwEPWuQxY6ujU9qtV",
  "key20": "2UwebL9keSCn8wcjVrHoE8KUwJmkPbhhdsaVXSSYrkkWKsJ34PPWfuxRiW8qr8eErhQi2a4NMHRYp34WUSyswVL2",
  "key21": "2yUkaQw6fsA9bUw5NxvfWn8HZsqNU9Sn7MyHvTLZnNamJCXSeBvuoB2e1xABPSieWy9zrPKunHp6wSx9mA1Ts7Qn",
  "key22": "4nMKVwwfNG314ivTWvBeyhnaqgjQsy5XsraK2kfs3VHeGh7jSCAC9tpUiSmUAD2CH4aYx61hTCzwxEGgFDrjzRMN",
  "key23": "66PZjgrUxXgdpHZa7epN4fmR1Hy4LmSF4qZmNGtnHSP9SDkYWzweJhpRR4UhMkaUZhA5K4MDhFprVro1psCTaySN",
  "key24": "5KdDXZZPTdrPWwBNy4zU1K2XjW3ktMsfqpZAVeY4s7RBBbwE8pEoMRJf8oywPA3THLraFcZyiTB7K8Ta18zapXK1",
  "key25": "2VMjQosDUfqimVU5a3ZUKwcjgjp37x8zRGxojdKUPP2TFC84ofqd7yas9jcFEK2HYVSwvy9NFaePAxGw9CWvftGr",
  "key26": "31yFJH9Z53fwteMRs1hmhQD7BTh5AKL1fPFH9WYxAdaLoxzaf8CenSE5GhQ9GU4o42AH1xF94MDUqbZkMQWh5mcN",
  "key27": "55L5VCtqqpki5WgLPiHuHwwbFuaCdUj731H2ALHVGyhbT4scyFLZqznNhhtMz1mFwaZkByEe2ya8HNV7PQpaSBB9"
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
