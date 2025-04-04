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
    "3J1HYVgShg1ye2tMqaaib3LPjiKD6FwXrhxjj9Uu8YJUpvMAWyQGqumjPGW3sDAWrVhT3TKTnwLM5dmvsNoTFP3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DapHkBPLohzdTHoYQwZnvdjfEzmbyLbUQ265ne5nHmaCMbGc2UY88rPywPeqU9eBbV9J8osznSC7aZt314NYmrE",
  "key1": "596cnQ7MYNY95yT9CjKmPakjaNsW6UShXSxaMac85ejuxfhbBqwPS49ZnqEfKAV9A1zgqRH3KnxWdwetVJndD1PH",
  "key2": "5jNnLVEh8yKqy3Sc7QWGs27AAsfmaBRLuHowxoyu1vrzk8mjVzMdfVL8mnkiHhBfVnnRyY3D6qD4HMzYAbo5hbn3",
  "key3": "255ehAV9y2oMXpYJmDQmrxMQ8c6s5ZY4ECCGJWy5LNFgjy9zrb4xPksMBCpwr2p4oq1jaDF81VmBCWGVQ13V52Dm",
  "key4": "54c1kdLxvSYG1oCbbgMBzWjU2s92JqvYKAq1zVroVU2AYVoHVwW8vSDLrJdTSBPnZW7cnxk2UmsWzZWbtxjhb7MZ",
  "key5": "3kuqAGEw7LdW2Ttes4cK48w1uKb77ZYTB5rksPDrtU3Me2YFoRimyFWPLBU22izvceo37FZZFiPD57ksdajT9eLu",
  "key6": "5Zk14H3RKL6k7WQgc1LPHV77GEMB1NfNQgn8j4qWdmjKi7Mh4vYUKPJL3pFzJWXZoHrg5tbxmMDDc7PTDfoh7cKF",
  "key7": "4o6ziM6VVGY16upuG6NN5SaUxnyNir3Agqv3WfUdzSk1gTiATXkXcwr6VrxtZoiF8fo4d1coHaYDZKjH8Ui8zGUr",
  "key8": "3EAQWfxnVv327JtfVmXJmGfXfKtF8KFFwPDpND2JL5Niew3keDNqVqqqp5jPYX6jBybcj3ADvAbw4C1pGTw6zWEw",
  "key9": "26srYPQq88V3zMtE39fAyGRwQCizkFDYTS7G83rPJGtXZ1Gwev9pyHYw4aLRHTDAqi1P5jMb6gGaiw8r2MEWvqmd",
  "key10": "ghtKSqKJCVibG7PS1PmSHPK8iLHZYoQaAZNsEyLhmK3GRSyADgw62WobySc94RZjLJ6Y8AyLxrP4iDqxvJS83Zu",
  "key11": "FMAfsr4VLwETLFxtCYt8wP9mttxK7dBnuEYUL88RjTux9PMvrbvYFsXdDcAAzHsPYT2i74NgL8LjSibhC7w1B2u",
  "key12": "2AngUgiiUgM9YBn6AqsyermxWbGrakXrF7jKiT3pw9JfhWBynwrk7gnJD8aU5jYeJzBuVAuFMK9srHVUGHnbDvrz",
  "key13": "3FE5cC9k2pUtgMVhU78Kmq5YsALRnGTZmr76iXvNGF38qehNjzo2JpnGcHTQc74KwV1EsvZVRFHQ6ktTJPnyJ3gY",
  "key14": "hznwTBjfk1XwwnbTvHytLXfsyvXCyC1wZkHCHV1aKdGMhhVi7NtTg9tmNDxnUHSBfxELeM8MjbiRjV2Vtar4i2o",
  "key15": "5JBqWBjvXbnir7XEdF2a9rrgcUTYFtb81d762F6eC2S5hcZVTk6fq5xUFjpaBP3XWfnu8P2qZS6TvmFPaxULhbou",
  "key16": "wjqXTF5bd5nHYncL5AdcaSzYoqw8SczGmDcBFeBdnphS5KaQaQgoSLsBV1m6itBe33DmS2uY9roLoaJWCg1RWA7",
  "key17": "KRzfw95UD1JNPStRwxsU21KKNYJ87yEKC4DZSYF5sithZhnNVSkxy1gLWPad65kf2wowLHZf5nyXKRo5Hi6DWR2",
  "key18": "5thWKSjcu15Vtn87APACUnvDMt3Kr7uVAK9dAYrNYKovjx6aZqPDWjLYae8bYChxDfptuaJA3H1LCSCdLBZao4H",
  "key19": "4ksYYJU5BahHdAPjyTMzdpBwQ5U5RHBijjzVShsBj7zWxYa8YfaiE85QG42ELyjB5FJ1XW1wfqFU1PukohwmxdMb",
  "key20": "4TZZ5em9qVGPGrr9Z3e5eT8QDcP8MqLTFJHfDCqXbjRmAeEN7x5zuaQcYT6cFsXiQa9xmNEk7TkK5Sj7BktMHUNa",
  "key21": "5a3rfH9ay5SW9jC321EYU2PvtSGqZFdEbxypQmuqkjkhX1PNrspNrn3kaXzQukSUtyehqfiWvATmKbKiJ3zT1XPq",
  "key22": "6nWyNC1KJMShmuFbEWX3UEhfJemNdzHMCvEPeG5gYtgqgFrauKZPZQBob8NorLuYX4AqK6bi4D8vCVW2sPgtKPC",
  "key23": "Fpt1yVoHwe2ibnZPXAqDnGL3qNSnYiamUJc8Z27d3CYnj3Hpzk8SRvdBD2oXtrM6ECnjydfQAzSdzn8gybk3Mje",
  "key24": "4L7cEQkQEWxW4eec16r7VhdMwFFbLKGAQsC7LkBWTRwxJ5C6eSam4NGv5jUd9GBDPbNuZATf4Hva5WDES5rCqXaG",
  "key25": "4rJhk8e6WniPXn252SimXyFHd6GQroddNtVjmycfuSitpdvRJ8b5pe2YwPzPukZMYV4hhB2PeMxce5Vm58spLt5i",
  "key26": "3VpCYWRtEmbyTpNLqXzRqLxe5qerSSZVA5oL6DmCYBJajwoML85zud5Gi4wSADh9wiN7xKN6SK6WJQUTYikkKPyR",
  "key27": "4iUTH6ccvgyiGQNHk14ky7XTugTJgYwkvHpb5H1iDvYrdBi5YoVx5GPxCZbi2fawkJPb6cHMAqGfwWex62Ej2mMG",
  "key28": "2UkxYNnY53fqwFGqJtSNHbfngzcJTbohaBadUrztVko4dvNMnhGNBpAidjiMrpq1GGfJrwThVkpX6TyV8gPTPqAs",
  "key29": "3UFkREBRHRyJQsQiwMiJy9ePeezL7seQimGS1s7c1qLUkWMy9QC43wvunrZNXNc5pXYQXu5k8sjh485QkcUiSeZx",
  "key30": "3V7amHg9J9oEzK6XnVqpD3cDgF9ew5nwVpqpMPh35mYnzj7K7dkhzKpmgMFKnE3F3EHphvJkPzHuEEb8gFkzhBnV",
  "key31": "4u76puQGLkzhujAViADETBPYfZnYcrTDyiWFh6sVhmNxeLfE3bUgVoesfnJyC2TZLi15aSbnxpjUDmV39oVnLFKE",
  "key32": "4CXH2yeHdk4dhRn6mr38Mg3wTdLzstNCDsSaTmurL3sMzYppvM56zwPnjiF1hv9rxJkDnvgDcJaJWFBP5wc5A3at",
  "key33": "2SQFZVHgXKTP74fHkPmAZ6T4crMM9KFBdQEUb6NpqKHGnYFFZT59TQAaHHHqtv6t8rgkovKo1WaSdC1mzBCteM6c",
  "key34": "3yBKZtk5VJ4qfobrz4rEHdotQR6DF5y3WnkVyeX2pWZnNW9fehkC9yvhJfbXEtzgVevFMPNKAd1Svpe5nYqR5jpf",
  "key35": "3XijS2xfV7Ve18ra2ZTM4fDHeXMtxwHDTiT6kt8qxNnX3ZFB5fFViREbSU63yxJ9fudg685Y49YKCPJqzLFRFtxd",
  "key36": "7cXpHQuspsUXpjYcTXt4pfx4cpCgLh435QdaF5AYyAi6ZBrPmZ3Lzt6nYNaFMWHeWqphGL21A5o4yXh3vgGbAb9"
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
