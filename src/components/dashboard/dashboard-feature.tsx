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
    "4nGdg4N8UYinGV7Jk4GvVrg9mqpq8AEAkHzNdq9Xy1YjF7F3kr8pS8LWQeXkTAkwdjvmnghwbqDWfA5F7bAF611e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TxzRwPph9od7Ue7D9uGJBnfbxBZ9LsDFuNDqccidZbRPbELLCvmhXdUdUE7bbWkhhsWJNRQyLr1kgsiCdf3yzDB",
  "key1": "x9HeeYpf3xM42E4pUbqkBauD4qQESLqFjjjxVh5h1n3zx1LmtV27JyjRjX4yWR9PyVbZ6nuGoZZRY4g69pFUKat",
  "key2": "5b5PwwouzRz9427oN5fhE4skjeqGn743z1fBF5YmUTUSzvducEk3wNsmc7ea9qZb5i9742b3CSeH85RURionH2QG",
  "key3": "3qYxFBAwqgxz6NL2Z2cdwYjj7GzkrnEegfZWSGqYyW9mwgw5vKoDCZhMPPf3ouHSVimHpUihGjHpYM899soBZnQu",
  "key4": "HtxRUTn2xbqRTe4ZdcjyiESeMsB6N1sd4n75gH88S27JSrwmMnXwMAv1T3z1LcfhjpZAC11VrLj6zKNKcQWxwr3",
  "key5": "25zKsTfPhjP7p1R6r7ow3s4R98LnvwTrfXpVEUsdZoNKwfBbx1oaM3iztBdSxeKouCDnjscE5rgwQsaQziEZTSgn",
  "key6": "5NFyC3THTCrNRgfgAYsi3WRj755eZM6RUduiTbxkoLUFkZzRECFoihqpiXuTHaEb4Rv2DpierqVM2UG5tDYfLsDb",
  "key7": "5fGzSzJTXHGQDmTCzr9XUUAphLFWDGukKWdwTLKwTQproF4aNkXr8LP5H9ijLCiFXsq3ChoYWV6h8HhWda67uEXH",
  "key8": "5MQkx8a6SxzSNua33ff5EeA9fnmAnGLYsde2Z9E1Y9U1qqQ52HsCcumEzciLnjbPWQLK9w637YWYywQipdbLh8dy",
  "key9": "2BJTQteX1x1W7eghpMAH8eVFDb3k8pHL52KUVMHF299PeQfHnfKLvqHThbzjmHvT94KWnDrU9L7V3TBMb4Fyr8DQ",
  "key10": "W7SKfakbiFPzVTxzrnoGnFktKzM3spKiM6gJAb8hswvXYYY4M4BWdnpRa41bGH5Ms8UVms8koFAEUrfdzTY3HvG",
  "key11": "RtGJ9x13sT3PkdCdGSfvx9G1RZk1gC3KepZZXJ6GKr5o3QnRxNWAMX7564HhJHGcuZh3feMwnRAHED4fxsDA4jk",
  "key12": "5M24N1WAaQ6yWfupP8Z9AQFoF1k1yNp7Zvh8TPkcJTzGzTrJNqeKsXWPcTNxbJTj6g1roZooag8e6TwwQ5Sv3Tnp",
  "key13": "3pCFGGLP3UCw18qsxa7uGz7AGmkPojBmQAb6FhPW6ppctgwtX41wtGwvcwnrkR5o4Nh6rxBzLTL9G7DwQ7EjUXEZ",
  "key14": "43SWYC5oo8j9BEDXL5CSJxibrS2b1c1RxMACuewUEtdAks9q9psRj8jwaDp62CrpSM1FFHp1UqPutdWKnGyvXN2b",
  "key15": "dfu9VkDredbRnWsjRw6LCbYd8Hbn9zUASTERy2HRp1JAaGneqkvVYkAWMCc6JGuPJZSS63gqBnUhLk4yApniDtX",
  "key16": "64nvhxMugddb3opKvvWqdRjCvHgb5dpuovLChLFrUfZAoBdAnGGGodmQFkabo3equPNMFVEyLacpipHBtY8V85qz",
  "key17": "3YNJPki6LHVjPycU9cPnKJ6kX6juHqbMtdTWbdJH7LS1brFk2yYJLHZn6Am5YFfqC9f94b2NzsKTtwyBWEWX63Po",
  "key18": "5igGd3qgKq2GFHTzbMe52cUqr2hGMoqDrE5DXuPcDFgcE5yKhfesZvKu7oScSzyfRVGpmynmwJctPQQ6SwSpiAgL",
  "key19": "3F1RUX4dbfbKoXEEhY6m1sfAG9xXAiEgj8px3otYdTPocnZbBrD2WfKZbSicnfrCrhg53Lej6w3msKCJnethjAou",
  "key20": "rEj1QcvPi77boELKG4C6qw7UgYDfBGG9ziXor8WpeXcf2warN5qnhnatF7jFRytEhftbfEiLdBNuktx45TwAYca",
  "key21": "4w9EFJwtxVvyoMm6Cc6H7uv1Lg2GUzpZaUJjT49r2BQE7Rx2xNe4Kbpzpt1MXwLXG38oGkBo8gk9ZTG5unJGSh4P",
  "key22": "5Dh8sq1p2ehHKLiaW996aF23bxmAKZWft3zxXqETv9QTz8U2EDCpFoozV48DFBUTeDnZsaCfopg7WtH3kTEnnQiv",
  "key23": "2wNBqMCwMugyjkqnpjpm2PxbSdHAw7KHm5bk4hBfyueBJttL6Nn7Sfx5mYRyvaPz1AHU3BJiYAY4bDJRuJSLnuwK",
  "key24": "3T8RH5D4LXoxUHLjw8KnyWqZiDBA6kvJaFtnmTFycFvtmSWnoTxhr3nPsd36auK7YBr29p8K1g3tiWbKWYUGQp36",
  "key25": "5N3pCedaJDrr5fvB9f3DfqJTF2qKenoVdRrhD43r4sTeS5LZFkekfF1G3eCrx3HNs1mjea94gNxjR2dWWBgL2qLZ",
  "key26": "S24uUu6U8qeGJ7GuULUoFEZPmRbJP9vxjfS5rqroM2mYvLHdGgovLavoai36cV1kFkrjPRXj48bbGvjd2rfeRfU",
  "key27": "3QmafW1TxHsHqpp3NzfDd3vUk6N7WYWkjcNKZWN2p1tkVUaSFSvJret1PDxLutUQGpUutUm6JGns4DxA5WLhSV7J",
  "key28": "2U2ozuV2gAnbFiUDdrrkgGBFj4ypXuEEL2KuNrs4iKVZSHYDCTEh5w1ou2HbMq9F6trNcivHZYQ3azEy6oBMgwoC",
  "key29": "3cWpBSfEzVy7rZsp3JnQFzLdyH58ZRyF4rYa7HX38JHc3CKRkzbAmLSwuDRVTe7JHGQ39GNvKau69L1ufCYGWk6q"
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
