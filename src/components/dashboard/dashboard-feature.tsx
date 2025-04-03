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
    "26n6wuDpKF7XQvjrM71Ee6wWdGArL12LGV4shGFtqiBJnSKezpdcDGrvT1sNzev9YpMRH9EVdwxSEnqF3bCXtY3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22GSsm4Nucm5M1bQLt7L2FG128RyVb8dBEFmrGYHkvnQcEwzjMXbyLwkPAN161cXCgCUfX3vBT4zquRvK6e4YVaT",
  "key1": "2U6Y4MSTP8c6zaKXHZa5gHvnTBxeP3yQacxsHFncoSuLgefWaT6nWTFzvhVvbPQWsxHLG9A43j8RunnUN3XFt1CN",
  "key2": "29Ks8Y9Zz5zbYkpNLFAae56FVXprH9a9zqMEVzmNiAUZcLA7dNfbXNwjwmjQAwNpEAkhLSerpu3gATvCQ2fXyJeU",
  "key3": "2A5ZV9nPLqA3cknkXM1AYYGZJtjG5yefE9QGovSxJycTAvPQdABTYLKhxzWZTFXYh3KKHxEUWDRhtq9aTEcC655F",
  "key4": "4YR3zWhWAhHJXmqBEugnmB5Mxq9pB2zfdUAAvuEgwHvojMFzbxmLYUhzxXKmTqndpLGKq5LK3HP3bCW2NqSdAM5c",
  "key5": "uB8TsK5y9RhHUVabWLtbvnqQWKxuxDLT9dyoU7rsXBQ21rhwqLcNBKnwAPtShJ8C9fe9XscQf4xSiM3G4zLUPSz",
  "key6": "4HmSWvTaDmQXgs6BeKkRzVwVKpFXcJrZcmu6Wr3YN8ecEZy14iMxKdwbB2DCZXqjHRVuUMZEsHqSozSdCT1pTVG7",
  "key7": "2o6NTAcbWsG9i6gR2eD3Uv1q6rEhWJUUjdxXNrKjWPSRC7BUdjXCAR29FbnPMKv3W3KJD5fzuFQzgFKW8b3SsiPB",
  "key8": "2RXNjLHcLnKLaMZugkhaL94jjSPmxFyF49Re3fwC4RDjmZkevddivh8fo91cYBwQNr648GZ6qsmbEaLwjgAXTwTn",
  "key9": "3ZwN8bp1CzA3vHQw322uERQVSjAdaPDSvpHYZVzYUuDJQdMM6w9Kzoy67DJRQucadHRuZEww392x6vsfr1FqcZpL",
  "key10": "3Lp9Yfc7mhV2APDAf24PTnRqeNMLTAFRScXLcjiCwBL1a4vZjjBC3sE42B4AvzeN82BDpfM4JUN9EJ1ovYzxfzwU",
  "key11": "2FA5wepCp4q7yMjafqbUb5oKUjP7Ygv9HNqD6khExLdxDrZxGdH71Hpa88jmVW14aY8EtobZKoV2JBvSAs8JCeFZ",
  "key12": "388hGnNUwDsiPKCY6LWHDZXAHypgEqriHAo6DR15yTtZQjQQ8AqAYP61MXUH31gt5bhWS2X3us3gReCD6tqS2jLN",
  "key13": "5VrBCuH1968vGSMWP1HKaEPjCC4pNejBzEpwgdfcJDbTcJqqePuHkU5grn2MTPo3tpZmSq4KPmNFcnzAJ9uS1c8V",
  "key14": "5itFZFrN7hL5CZLxpsYSfjSWXxQES3hZPoPmmPk7ZCm62Yj1pTkF8u4C7wQbfFTnRNQXeiYQHawAFHXK6MChjGzM",
  "key15": "2GTEDAgvMd523Y2APvDhnwMqSteJ8DYAtKhj89ds84fyvG41ou1gTufgzEasEncccX5joejK3cP9JAw4GCmC7Ha5",
  "key16": "N7GJ6eELFMMoTDVx1hNj3xE3M9neMhGSQjGVSmGoMgA4AyS64RzKEvHwVTXBA136SNfMWcfvZA5RfgQCKXLzDKP",
  "key17": "2mvgvcQPxbQtpmTXUEoCd2Px1YXDY92odaVtXTsnMVSEew7CkzMo93LzSW6RYBw2GRLprmDyEGx4ddWxGyVzX4C1",
  "key18": "3zEvi6Uo5uq37dRD3WuU11ovtKfz67gVJyXSfzwMS4V1fusdteSLKnoo43aAQS9kEpUYdGLXLV9YZ4Umh6CR2wum",
  "key19": "3WjXDcNBzgZCSsjP7T9ke9Wnt3VqELrEaVUZLEojFAV65vDEEXKgUkd6xLMTc3DT7bTkiysBSffGYjF2CiXgv5mL",
  "key20": "H617mYrwkUsjQunb4MDVQiZ65HU2zdpzZwZYRbHJbw42b8soPxa5jNaHNreMaaEkSfHevHGgwC56iMwmjuJnk85",
  "key21": "2MMhbGKief9pN5J1TAPv1S7cr1nTmFVahvnFhp61chae9sBdRn36s3LED4SrbhVVnqJrNQGMhjy5a4mp4cARvqBk",
  "key22": "T7pMcBsqyYgNjQjaUApcj9Ay4bhsEofmJpics5D2vpQLiB6WEe2WvniPmDYUemmyVmBoDpcXKezMWqeoegMxuLa",
  "key23": "4SsGPXnyNDspNhaKVHxEpNu4gGd173wfo1khRmfHCFn7izRespkc6QocaHiggZFyzEgAY9jaufMG8u4kLGdSHpEF",
  "key24": "5KqPUC9XUyEbMrBtPP4x1QHHboPdhqAsYsicqesq2Lo6DZUaYFrf3WaR8i5RgyW1bnr7JYkFR6jcGAw9j21WZmqA",
  "key25": "2yq3RVvmUkbdX3XY1JwsUqoAgZ3sV8VJEC2zq7su9zVqmyyWDtXkpwzyDTU4g79G7qJoTk78QpNh4bMnDiBVGc5V",
  "key26": "8KoiktMwTNWsvUBoAdRGN6qvWR9S58yXHm6wuEWkX8AV7p7fuHszmt7MSzozk5SkXQoRSzYZvupJGHmeh38XSM3",
  "key27": "kjYwpzCcti7DGqQb4nbYsVwcR51Rhe7ZwYVoUSGm3xPcpKZ66fWVPy5yq9M658e4t5K4GCdkm3XaUDy3iQK2LnE",
  "key28": "39PyHCXQvhGGkfexNRb1ZMDS6AVA4aX6bBbXxuPPykrEgJX9JEgVSooPtDNonmpp5Q4v8AYcJcqQjKtKha3Myqg9",
  "key29": "3g7uSntGF9bGf9WsNPyKoppdejXTwxLhMHUrb9spTS77ULS4AfUX2XQy4dKWHYmYSig8uAB28FTYd8NtxqdmwG9u"
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
