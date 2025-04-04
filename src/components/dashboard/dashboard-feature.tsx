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
    "5SvitEL4QgBz4TFeoNRrv44FTQcKLbKnbCHBoBqRMAMzR7z4evdL6UwJxF3Bzt2kYR9NK2pz1pU4Xc7pqJ4z27si"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nMXarwXC8CkMv8ETDf8grztbyUzdMao7egyr7GZGTcWR9yNAdzPYn6q8sH4RvteRytcRPKB8yK2HTaiiMAQKUbG",
  "key1": "1QarSznbh2nQA3nhgixiPuQLkBTyrMwk7tDgrEYmN4miJ7iB4sWRnWLYRf4HvHJnpftWbhSDAiDzA8NGNhP7Y9G",
  "key2": "3uEQDaiQpJJP8CL3GAReRVHm1e9DqnxWVakPRWJeac46FgeC4cEFSqVSSpDmw8WgkKnUfdBvYomb9PRoCiACcJkp",
  "key3": "39FERgYZV7NwwTxotT2zu3DWmuk7kLFpzUzokgpKeSRnxoB1MvNudbgfwoSVAgByfXvUHyY1amnEG6re5VhfDXXw",
  "key4": "3M2QKrvyukWKBa5dX8x1kJzgoQP89TyaSi38BfYsXZepnP1sNkhb1QRTyXegxMCorcaKPPV4JsegEW1geWtVWrmR",
  "key5": "5eXZMU1ubw4V3WSmk2gNQfrqKpW7isc2qYeBXrmrURvif4ihkX8pyWTX4afkyL4vxJcSxLbu2gQfxWTtGa84hDnD",
  "key6": "3gBTPBNBbpw8eMjE6AaFCJx7YMPSKVkR9L4cEPwEkfpmUbuXCFe3z6q3fWpcNjmT623cCCVAxFupPbJQvb4NaKY3",
  "key7": "35xb4XeYky3Zi1hcAuSZoxuNTEVBbtgfpaMhXUfjsWkY3tm7es7Kwhtkv3NWwHQSEWt7nP4BAtWsusZfAwFcYFVk",
  "key8": "66PyTG7VpMCE8h4Z7rSLbYXYVuPeZzpK3eb4m9oowE2vJhUMm1GKoDs5CaqTUEde3Qr14jACeny2jnHg3RfZnUeM",
  "key9": "4k7ziRDwE83f3rjgEeKDgfFRnqQkbMSRM8XuYkKKkPAAKePDXt6rAs7umYYkegGCPMshEgQxDQYFjnK5VCpqH8vn",
  "key10": "5Exa6H8TgEiEjthjJLB2Z5W5inA2NM3EYc39rKi9BmDWS1SLE7inotbYmFEB6KbNJ3Tp1rwnUxsRfjfop838a5Ro",
  "key11": "93qtTFLNu6KneXrN51nCzy1ozt5brYX27NLdDYYY583L8ygCQ6roegNpB83zohKZqh175azaE7meDVcWEwUUS3L",
  "key12": "2xMYMoVnhhtXXrdqwpMYr4kwXUDvmmGiVrcpUsRusXz638u7M6LABm4iPqMiumrh7rAmXgZMWEc41GbmaVwk9dAg",
  "key13": "5KKEU77h5DTNwby9sn7eNJ8nsp58VAwEkVBtx5gJcC3HuwjA8jYxG1oppXKAkgFGHq9waDRJ1ggDvP5wzjRRWDwt",
  "key14": "3drKVg3wB6YAUtf2uPN4ZvRcUWQ45u548ALXwZFY98UjzRY5vfScJgbxodpKvnRgEf21yLi1ShubP3ZfPTsSEH8c",
  "key15": "4si25G6bCurYc7LdE9Xx7njtSg2pU2FhQFREtMUoRCAVr7fUKY93YMBjvMVbZRgBT6Q8xdpTd3TqJQnqLAARrbJu",
  "key16": "5kk1mHaGtJQVQ51V3iQ9V2kPkF3xxcTTvV5Z41s5JukUiUhcijdJjzPhuP8rwi4Lw8Ypy84SAiLgUtEAfxihbXwg",
  "key17": "FiwCz7WGNt6dAbYzRiiSfCFZhojNY937VdnBgoHzgFWucfvaugLAqTwKuXph8j9o5ZUKk7Ln6eUS7iC6N5keYmY",
  "key18": "5sYGnHEm1Zz5juCE5k3YJzgMcX9rng1g4txSX9qUMMpCgLR9udqh6TYQVGBYsPiZChMsQZqRf7oXMtSqzR84dwoE",
  "key19": "4okKsercPKrJ3v1Artdh5D5Lv9CMqanfb2gVXNMbUNEo6TmWnjgJLDjPiAHonzsHtyc3Tn9nTUqz4dUVUnwRKGN8",
  "key20": "3pBCQXwWCXMReAbFUnYgmwHCLxvdErK3cAZqWYBi3w4hpb3K6jw8oSri7VYFRwhPDrLz1iX2n8odQo2kRiVmDxts",
  "key21": "3yUSsADd8EutPmjLXqD8PW9EvRZ8azhXDovv2yWVwKHruXCFbEGeF5kWVyCyYmkdQWGi4cYDknoDmhgPgE7RD7Fe",
  "key22": "5w6biXxUeZ3VrcKwPqWY8nbPRSNH7duJRnP9RKffenjP2GaKp4KM3kKA8G7s2aV8fZjD55SPqeZabMTbjHwGxY5k",
  "key23": "3RTfx5din16nDHuAB67yRoyP331oZPUie913NGchj6rHAMn9BHrDC7jCqodhzv9TVP1Rv4iLUimgX6qxBXGa2UiC",
  "key24": "5wUfmXZeK2xzkuMipm7Ws6grsa2KtHaCcMJgoZSKPnbR3Bh6Zw7tvwtNB6sDY8UBF4yJ7G9bre21rEkMpS5R1css"
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
