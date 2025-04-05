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
    "3GNyZjYrqT5LriM4Hgi48tPMbw4nGAJyRhGKmvcLSTwGhWRCJct9nZEYhGvxs5vdWVfMzXvjgGcZVqAHWCwr446j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63KbRVntiSkK5BCFM96gwHnfbJBdPzUTBuf8RYoZ7yQpKjioQ715v2av45pQbB33gSL3RmLAoRj4YvRqqhnXt6hJ",
  "key1": "62W6Xk6BrueKPt1eX7VieYsaAKdDvesCRcCGF4z4uQL22pdMyZRVigeKpr1iqX3mZsLsWXrbRZat3TGYfA9mYmDo",
  "key2": "3XpdbJPx5j5rLUQxa7yo1UUWRbYUT5jNfHyehGbi5JswPKq6jWcSytcZJSSaZzKuC84V1bg452z7qmLDp1X3mL8j",
  "key3": "CEYyCYSwKHNVxnexoKDteaJmaAdFpnv8C8u96hHCJt7DVRzoWaYTXUX7hay48z1xC1GJREvbx14o9g5mr8FT7cW",
  "key4": "2cPmRoozLbwm9RWya92J55JfSvsw9DPvvrnG3ooMKtRLxZbNkwkeYPhQF1hYHbTXiSDca7yuTwXCT4wF6uCcigs1",
  "key5": "4AJWPL291SFpsvuNdMkydAwpBWY6YFVrMuQSF4L7AahJvkJVDB67i1MEQ6zXePEh56LwPtoR3aMRueJtp7Wd7cVD",
  "key6": "3etLFcxJGHfofnzaqr9rUUdhBTHcB9SeNWrxe5xgWYEsAVSEtN5aJR3AhtqRnwe7XyiTfPjhP12GpJhpXxF3WD9M",
  "key7": "4MxeQT2RRkAufN2S3YooYYjMzTCbnqgoGPjEFGXWdrUNhaXtdMwRqXqrWEMsNyuBu1hbihWYX8xm1cbnYrKqp8sg",
  "key8": "3TUezsgiWZyvE2hwdaxUiez58XSwGUqym2VAEQZky5494ohBZqBVA8GWHdhU6EVKqYocKKBNpFzmiDoEgvW9Wt3e",
  "key9": "4sFpNmS23Eayz9zZiQpw3TsVmP1LvfR9P2uXV71czUS1ZLEx75oFYhVjJbFe2Z1VVHS5hda6rZjNAUDQEzt6o7Wf",
  "key10": "66KFfTUDgcX1iM45T4hex8oHXGGyF4HgWYd94Yh5jwc8NDuae92LywWHWtso85pSnncwnRzT8ridg6jRLYNzQ9Nq",
  "key11": "2N24F2xPS4kfDHt43MQnSpgA3EtChBDG68XW52yXaA6WQbgq7rMuPqWWJs2iToRJGateLZETbVVE2UwYoeV58f1d",
  "key12": "66Wo5zgjrJMFFytfnm4351xe3qt3ee9cJNiJEJzXLUU4x39p5zQMyHrYHtkTC7B2RXmGzkAEen5mMjMczANZZwoy",
  "key13": "449V6pf1S59PjN3PvPMAqvxF47dL6LYJFZhPk47jZVtSTX9xp7SafwxxsJePWLGJaMP89pzCEUMpuLNukkJqVLKr",
  "key14": "46KqLKxvgkRX6AqiH5jgX2gWjBtY1WmSe8Vk6n1f97TxAJuGjmZmCXgZgjSnydPjEDjPmr1dZtDeSHiAJTw7JzaB",
  "key15": "259Gd9awBNXEifquqLNXCQikRha45gcHtmED45sbgPv8xQn9TB8LeBaK4pBAss7kGodyJSxX93AezqWrTus4cxeJ",
  "key16": "4QCdZFWLReJGm1BFA4szZTcecgLrQmAEft46ZXfrDxqoWiCZgh7RZKaDFpnpXjkmpukv7xXGvYg4n5wrgEBU8vqi",
  "key17": "2Xw7pNJBCyUUShhbdCiSv7Ga2FuEdxLB739j8G67xSFen97pbLEcbbxWisHajJuN8ynNyaugWXWRfLN321kGKRK6",
  "key18": "53hhVLP3n1UcS1PS6BifZ3StV9AEV8Sye8BEutEMYtNhPZUF9LsKE2ytUFQiNo4gtfr1J9B7ktUzXDcCqkvRbHuY",
  "key19": "TeL9yXszgik44Bf11hCEoU89ADyZRC6PCkJPtxzvpWa5VwuM2ZwWjW14iw9UKA4E2EFb3CGCh2BkgPuZcQCbELk",
  "key20": "4mZDj1ybKjkMrADq9LmqytKbchuBHNMTZZHiXJ3XnQitWRYZ2r8mTXrZH3NVQVaQjzQskVhkWoDGBRYBFtdxotQh",
  "key21": "2TVT2gsU3cpt2Ry128LMCgK5uXhJY829NmuFEcKHSehtnUs8kxFTumEymRK7AZjs8TW3S483zhPH8NaBiHTn8uDp",
  "key22": "4xi8b7M5Asu5Bt6BxRjatWXWN1a8Dm1AXDojarKYVUjgp8pPBaVMYuKvRjYeWQQNGPAMhGbs4Fz9ZDwxmBbP5DQn",
  "key23": "49EQUfVuaeFTJJZatsgctxe8U1eJfz9m8Wg2GHP76WfMuGJUhZfhrobNu36thFaGa1dGEpLvj5EvU47SsRf9y5KP",
  "key24": "gNweQGjQPsBmNGgNW2pQSEGHL2rGG8naFTRoRKGAchBSGh766nhxbqjy7RDJeHFUoitqhRhKbqXnktf3ApVnvBb",
  "key25": "67QfNHrFLgsgid6wqttWXoKk7knkRBGYCgFF8TQ9yLGFPpjuxUHa8gfo9WuyHYNRwR1EaKMthFv6oRPpDGVWkf8b",
  "key26": "2mpeNrDL8cn5SWotjbcvNqVxhamijxbTRFXgWvktyEdDUgVEFQKByxU8hcB4Y1dU2o49CLhLsVitDc6XVzBu9HiC"
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
