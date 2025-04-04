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
    "4jXcgQuQR5TohvUe7FpcmpfHDhUnPHyRUstMUXEhUFwMyxjjmdhrkYCcgQN4qEkXGdPwvKTZKTiFZXBsr7ZttJ16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rdmdenXd9rT8hSihYjj1HJEwqSXQBPkghQAJXX6Cx4wgRFycJsVt1Jc2t8QkA1nv3aq2gp3JKYwN4FJW2uMv9kZ",
  "key1": "47zqBHHjZm1i63Ted4pck8XiCVkoRhNS985r3Pv7JZPvyeuHd27DDvThB3h26ZzjjQzuWtJMCSKXaGgk3ZSTSHCP",
  "key2": "5bz8JsU8GQs4VD8TSmUb61iakYXr2DDZYk2SDakn2TVqrNpg4bMNVpBUQ6sEmy15cFnyKMKdnhRNxvrev7oth43A",
  "key3": "oMsSBkQNLQytiEBh3tk1ifKMe2EsFSoMtFjrwAzVngiDCNTdBbL62DTJEmmxJbsz3gKGHEuw7YAMNSVVdSFCeEn",
  "key4": "5MRh4BugS9Bcwed28D5hTxiyCN9iWKQfXZYtuxyLGB1qKY3GtxHB8w4zAiYXn5qvwTvtA1K5wtGtAoZ7A47Q3nND",
  "key5": "2PjPm8BJ2c5XFMX5qSnX9CqKnuQxgw1c7VZ1wa8GiUA9cKjVwTVnZrMcvcffi4Af8M5trszp83pTefL782fLERdu",
  "key6": "4Bvo6YQpU6UdpGR77AdHxdPVVrSCRWeSBxU4eoDW6JBbhPE3ndqysGC5P1oE9Ea1wkJ8CjK4Y44X69K83m79LwqD",
  "key7": "2X5bwkUih8JmWxtpHVKetoRhMuMcjNjUroGF6MXPkPTDxw4M62LqdFdMeXgAdfMASdy8iUWcB1BEmDuf3nF1mE8g",
  "key8": "5UoiiWSrPHsYgF95evhy4yxsTvH6aisn4kSHniZWxDkRSNLjEK1p3PQx12ZiF4WfFv1YdXehwpa9TuNsU1pnPXdj",
  "key9": "3fTNWZWEtpKmaBtwrUJDKGBpFd31Rre93RLXL1ThLkTLDhQMmh6ABfFBdPdh3xYkX6VpfZU6ptwMhCPtD4vh4qzF",
  "key10": "3urMko3uVvMesC4A9k9cXBfjWyY7PnfQLwZbZnZHkULXj3urUrn8MBXUNSSQEsTsyVtMPNqUBDEcwwXxpbeFEPM3",
  "key11": "67PdjFWY9LjC19APjFBT8BdNf3ZDyY2Qe9K4qR3BEEMd4ZKMQjESyv4BHjFmrAJPyxaDhmytCaMQqKAp75ci937h",
  "key12": "3kyEm7bGaL438GnR1EqQ776aUQCkyML5CLNBZ5kQ5tEQ8SRPdABvcK3cWoGmhYpHdry713cHjFCJYFsC5DpgfdfD",
  "key13": "iMaUSRZ9ovtUJg1DDRcTHGpZKR8Lo6ZVkA1bKmH9z52moMteRqCbGAtWqjohMmuMZHpjY7yo22Um3VKdA7AhyGi",
  "key14": "5b4KWLtStpUeXMPVP18EhYpiBYXuqwL8gmkfiKZCnycoDDTMt68AQEckkijPBWgCh1BhbdBzkCrp16q9o1LkgYNR",
  "key15": "4ADSwGENskt937pvMjk7ttVEz2bNe85yaLbfku3nqAQxVnbF7wPJGvveRyht9CRn9QmqL5s2KMZg5vTfxP6WvJMs",
  "key16": "4Ybe6qLhpWZDdBUAENyJ2oaapjP1rPL6cRZiBXfeC44zqPpdnA7xusM3wGjxpmFT3iMMyfQ9XBuoyz6yjAHiNLYw",
  "key17": "wYXRoT5GaJsPiYPpwaQzu4cXXu3ea4hYHYoHax5jTbsnhGZjfGCGLDb67kakrdZQJmertJHSNawPePUbofQBzFC",
  "key18": "2uc18pcFy92adagYk99U1DqdwgsAMmamGgbCgFtZSuAh5CV6ZBSJUwRmo4yNoTX5yQHgR9KH3cprMARdkTfZJisK",
  "key19": "41Dz5bwj7QuJV8pe2VWf4mn5HXaK5H9KzB5UX7etpvvnZadicpTySWGXoF6rBjdciuASwS2kTdgfzrnC5ogHo6nj",
  "key20": "52x3jjGvcgGAVWawqmdrWuS7Na2zjcFXqUq71XL2zZKWt7fofzfbEuuRv2dG3DK4LgJzdQU3AVubicEoiDUjLmtG",
  "key21": "3bL62WZ32mSc1ndbM4rHXLZerJmjDUkceBdmRmfLsG5VDtQ42eshbz1BmJ5CJyCJDjnKgLstzdwyZBkjtzYHmiWw",
  "key22": "3iShMAg1taBqt6jYv2KufbfrWnFYjoM7QLLtMJMhHbe3HdhsPF3E6UMU85HocM1CWJPsnrFidxtxSf9JWG1dn9h7",
  "key23": "3gapWhn3wzGKgvW3yTXmiifZ2teyfMsExwzr9C78Vr8eUjsJLVBa27jG62p6RM8ftWi4dzMPBc41gnRVNyUpiZWA",
  "key24": "5iEgPpPjipUWGSDYWS1HVLxLsinYZtyS8R6esAvdDhsfgwKegyHotH3t4zhZ9qbnK5gQbC4YXAcgpDfNucX3dmLw",
  "key25": "2x8JbrdBFPmKySbfVPRGydW8JfvQd2QsA6pXPdZx9P2xSKi2d9MoG4cLiy3kgcWEFWjFvdroociYJBhPXRyGYXGp",
  "key26": "45oPLsNvD9cEFivxn1mDsaA14cHSrZvr2xEhQJS8w6sPAFVX2SmmzkohaJub9KS7tWyggVTvJK9Uk3ZqhtUfYTe1",
  "key27": "fzBZha6YH4qboDuggMLLrG8nRPNuDeMMbSjvrgJhWfbnZPXBr2NJrDDexREnx99y2BpKNhj4FzP2e9fWG3AirE9",
  "key28": "4gW8pECFxJmtvumVzupjFfcjX3uNnxwWssm5EYznLy8NTKWmBX1sBHr7MbSYSjU5FDPsRtJ6MsFwkDM1yL6eKr5v",
  "key29": "4dDqLVVBmM4JTGgGXb8pFJKckpowVhuztzCoEecUuup5Rahj8hj8UgaF5Ee5yUDHh6kYLT1GzkSC4kJM959dDzRY",
  "key30": "5nbsoPuNaL9EiMfaMtoxWV1g2psndXDsrbgLJFeiNyifwMDQsLFBdUSffkWz6K8bzFghVoo6JHzUatcMck8KFAnC",
  "key31": "5VuuXwm8nip1WATj3zE838CxwFwkwk1EB9t9QWp3CSfxvA9z8PHiWhvMKJuRXF43xQBQPJuPjEt1yvh3Uy9mwnZU",
  "key32": "3n8MjNvuDjkqi8eruuEc8TGhmmNFBYQnFXzfpFHjkFc8wF48Ar1dXxvoW5BnzX78VJbD8TApR4EHz5SCUXUSSzdV",
  "key33": "59FoCqWdSnwpJxDzBgE5JruqNSSX4iXTsajYauY9LQ2i1entatiw4u8rjT7Rz1zg6iWqxXf82qSwyctpczJGqwGJ",
  "key34": "2acR5DxPJvXWe9d6Jp4WUjSpeYnajZi9yHvKEtyMSxsr7N66pYCz7tbikHr7ZDCMocs7uvfz4UERKMAM71UVo9at",
  "key35": "38z92hsUYbqVPeb72csAJrZefLMNW2gBTpYrB7bMxhhfzYWrRUUwAdMnLPTZdFqTr5uGHvx6C1zGbijrYvCNJbL3",
  "key36": "5SdD12Y7vdoWKZQGBE2itGShhefHFYPxm6VxNDLymiCxnhjmYbuq3XyfSPGuyb1DnE7pCmaAfsiJeb5oCMZzBwwV",
  "key37": "sBfXN17uVGC5sVKbWteY5ADYtfq6vaQsAQyQfYoDTAm3uhwo8WWqZwv8ACzht1vTpXTuQm8TMAkxqnpaYPmWo4Z",
  "key38": "VB9dGEZqoJYkBvhknxXrMvEjsE4GsaGemZfqzYWgDQ43Vf8h4uKZj5Avt8jW9es9CKpQcDva9RoHtyo7XdtrAFp"
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
