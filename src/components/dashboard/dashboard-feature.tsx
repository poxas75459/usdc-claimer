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
    "53HV3Xhx38wYzvyCsgv1yub7pqKNzErxPpuJuNJXxEN4NP2wb86sZEL1gNjD7mVs9wTS4Poboo2DVDTnTpeV61X4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27V9PwXUkuf7RCSc8dFAJhQpAKwX1ZghAUHe7jfXDYGCVKEC4XFPqGr4Aqhovii8BJzToU3rws4cMjmcLupLZw32",
  "key1": "pTrnxYC7Xr8ddwYZTkcacoKsPeDHfRf6DKjeLFo62rWZ9JVZ3PfHtj3YeSZA3fjL8Xw7bBnfsoTv3nMceyVJspE",
  "key2": "4GXtXUnCKi9QGMWzALbwKuhrb4CS9ZeFn55vanh1TThixYzAesdg869DA9Sj96WNy4NNBY2LaWzgJMQF1g5ffKkK",
  "key3": "2bjQuwncAFiU5UfstfR5SmEpU7Sc5WxFPuENF1otNfrcnKKLmo5z9JbSoNTmYBjuuajhfQHa5BgNjGWFJpSEB8m2",
  "key4": "4xkL7hk2zWVp2B9Ezt367WASvex6uMVNXAYmu2kve1a6FiA6fkaomNBcKFQckKEXUrbCbUQvgQwM44sbbmPwhKtL",
  "key5": "2H5g5RWZYpjWXuL9nWS5bkDVRHyCvsBJKRJQC7REs7iPMwSdcEavmhHTdDXW3KkJrxBaHDmEPKjDnznRpyFGqGJY",
  "key6": "54tnkGRoxAtBJizRtZntG7nnqnfaj32Y39y7LYzzFwANXP5oYMSwhF3ybfBB4GgYrEdcVsTsonTs7MLi43BuPi5h",
  "key7": "3erT25FoH7EqeYj9XfmzDKsJSoqt3kNq9iivjoqzCTZo3RpREuegGyWRswmyJwdWSu6U2vPRbo2FVYrrZuWnX3FJ",
  "key8": "dGpNHQHGeVwZJ2mCHHS2q79Xp9WNzkB6kjpYoLG7pUtBD4xVgYhLQ8dE9vmJJTdSCrqbuv7Skggon96XpYLYjsk",
  "key9": "4UkFiBwjhuP7DKfKjQVv5idUW4xAHmhybhVpBRwSgqjazf8bgWLKtcYa8m2yqYHoai1ZvwufCZCyAbGfx5tVKFwD",
  "key10": "2TzXu3EfQf5QsWVzvtx7Sikyf52hAm9i8h2F2ZBMBW3rYygeTYPithKfKBKrMKHPQe7D2eD377DvNdhGjhmxAi1h",
  "key11": "enwaosMseJHaXgx3wASy1x53NssZFiABaC37BzCnASPigkjV7Y7CfcWQuekGX6qpRWBsCjSu8BvcmPe78SJr3rh",
  "key12": "46x1faZcZFtBBduDrbjfYQKkuANqLMh714EQTCSR4CND1y791HqwBxRiwK59iZZEPcXqwKTWCokarKfuZZQcHhjD",
  "key13": "25JSGdvchtdmGin4PKsqFGsduMBMwoMok3xRyAodGP3e3cd623JMECpUb6KwvLkZ4nxRAjXrpRgPHxE7CfULqYgo",
  "key14": "3qQDuReR9wafr7ob5pGzSKNNziLE7yMQW38AkyDmB7MNVt9oFpozKfBt5ZtusYQZ5whQTvGs3vsYbruokEmkDkzQ",
  "key15": "38TbcFQAaca8j7nUBrHaqEb7codcEPho5qj7hqiPQgZRDvHX1hog9yjLTBAtegrJcCAkwgKAfMGtJ7vB5ZiutvB9",
  "key16": "BVDYW9Uf6NfNJJ2eiwyciyjULg9BupWY8suMrkwKRDNAndtbDS9SC4KJSwH5FTeQdP4V5p24vhym9wEqvhRL1Tn",
  "key17": "5zmd2oj9eNPSMQnGJCcP2S8ofb1bjQJwJAokvds4ZUmkKy6NZXfBeiETzeQQkxFfHZCfcRPwfdNW24Ndv3TykgHo",
  "key18": "5UmjZex3Jb6TypFcBPBSgm4skFDkjKjccv1tAgfPvXJ16nrHSWDQfTEeQokaNx7QSyAstYbv8GT2QWQrWfHKhKai",
  "key19": "4SRhchHJWhXyLZ62d5ASEgGyQX5EMW4NXvTTh2LEV8Z9PKcVyk1RTAzH96bsnjfnLPv2DtvwJpoFTB1BXabQzQCp",
  "key20": "2sYc3bz3fuk8poTBMGMkx7BFbxr1VVcDfvRUBHdY49Sqs1qdaTqNCCSX6RmZajXtPuVgRrmauk9vjA57Ugcy2bwL",
  "key21": "24WwgwzHniPbqehuATyb9FDoZVxmuKc1hhkuQZsPDLJGev6hJCipC1bmnLz5MuKixxKFTHakoZKeS9BPiKAuJ6Z1",
  "key22": "4VCtD3rVV9kmGUH85W7BXHpRqR5rVQcC7raZg7nwnm9nd5Fc2aNCCD4xAKAW5YnkfJdyNEpf9QYBW7fJHeifm9xo",
  "key23": "4sTdwp9JBEDAwcB72NpWEF6CepLrnQZ8kzknVyPrpEwemkzt6zW83QT25S88F1Qa9iucwdCs7tWB2igjhkoaxf8X",
  "key24": "2sQWpSyV1GxXZXs6nTFED9rS2jL185ZUvS95GnpK88HnDSTeeKX2UMioimmbweTzxc2YDJDm5hFDk3ArCgQQhSxk",
  "key25": "3GiejfSWjD6oYaqZR1eNjJLTjU7w6chqfwdUcSk3BhADMrDhwus4sPcQegtjMWWeVQBMB13EDtMiN3SmJxphzGHN",
  "key26": "375My9J1NcJzcohpgXN78fNiyXP8q3hvMJzmfW9vhrE2WybiJWFFQUkbiZHiypNy9aQLv9ZNrXHQkSaWwYigG8Lr",
  "key27": "41pqk3dLaCXmyea4DriADY2Gx7KAj21JhgRN8Bc5x9fGtfmvPQs1av2xcVHqw7rrHbLsBg3nHKp34ZQDHDcMPaHZ"
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
