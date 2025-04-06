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
    "3NnWjT31m7GzhbChaF82jysTGMW4GEpGDpHac7WZya3CuMeeiHXN9Q99bGes6gjbCYKjvKp27ERRACLLSpC95xeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kGseGNXz9JuNZvXWzRRsFZZRbDTi7NcEuyi8XJLG6o6RzFo1QKcJzpyL3ZybLxZ284gmYk5GPQwvPhks15vhVSd",
  "key1": "BY8cdC9LhdV3zUhnfaQYxbq5PLTsFfWHfEPP5kKXBoxLEsPGf1C8f2ZfjvaSs3PqNEyuvEWRgz5hRQM37Jjo8Wc",
  "key2": "5FnjLjjeNXvNRV4fkg6xVnhohXqsobDk6WS4t31vuDD5MkKzQjQpSiCkBiRw9Twjmbv5pdXGWkuuB8PJXW8vWFwc",
  "key3": "3zykb4zoPy7rtYnU8GcWu4LPje2QzJV9orwFHH23Fodax9EdQgjbjxh1kEWgHwxULRan87bRjXZWVWHEx4uvmprw",
  "key4": "3BUDKu7oy73u42WNaLAoE3vBzphkGEbtx8vBG71c69TaT2C7KS7d9QLZwVhJAhdgZDwYXRzmUxBWLRAQU3WquLKB",
  "key5": "4iBZjsV9Woyah813AygxhRPzKfAjVgRe6rmicYJv9q8N6tTDfRo2YKYDabSYHdpP5x1gHwwgoQUnScfLJVi2y2nY",
  "key6": "4rB1evBzUVf7GAjuzwUMmnVGHt199z7FEoVypUeP4y2wWNAp2Kf2AUC7GaWbwnaynt9gB3sPnt2g6mWJyzRbhTtT",
  "key7": "ZZSJJq7N3YZRqgKz44me6JErRRtqVkeo77vRW2PxZhDpo2H7HZqUu5Ctfs7DLcev55GBQk9K2pGfVF2RJRbwFXw",
  "key8": "2cVwN2nB3hn2QrQymKZ1zsCfn2UVrFUtqibzQ34gLM1wGTQfELtJ3s7xxximpbwJW96qNt5gPWwEwhzzW2zFRGWM",
  "key9": "bizsDrss8FBK6futedX7UMJHpiVjci83K2LxxQi3yYysPEEtRTZhsL1jCDDb95pADWw7bqaQ3YiXsrwjUxy31dC",
  "key10": "5v5KHCSDDKkXLpsDCwVeyBqrSZGu5scTpPbArUvh5my7kcm79pTYJLt7bWzj2u3UbJAQYwqxLF7yf57EZYJk5WMz",
  "key11": "scSpGSsJahtPxBmc7Lq7NtGoD7rTmpw4DHb2AcZzGHU7HFcj3ayLCyNGF9PzycBFj6s6NQJRcUAQKwA8wtw4shu",
  "key12": "2egEKXzzUHVNKWPg2ET6rrfGPEgqpDJ5zJLG2QmdbPduL9wRWgz9xtKahsy4jqzrh8awxfPg6PGAgdn2b9qZjuWV",
  "key13": "wVQoRHbaAF5qBe9PVYaKAYMu4e3zCxo9LM9vuPSz2FE2FMNGWRJnU2sVfmYCs1NUU2NT2E6BJA462PbkpHzEM42",
  "key14": "2gCc1yvMazpNkP4MarhRb9R7V8Dp7SMnczyMrftNWqiKEW6Bq9y49zpF4auyLh8tvzMQoJXLvB1KToM1Bh93UMYv",
  "key15": "5JLQc9YG2mpd8A6EMKVBVfYqziSZKE2MCudsbcufErXARREinLj5YKJWgUZJHLL6YRFWAHqYiZZLrF3Kd9qNChUK",
  "key16": "4pSLCpdJLiyhFFhr9XZp23wkmncoVRgA2BCXqLPfCSBFDV5YQ1KmhNKzZQyQXMAYYmWDmKbF9VX2uvopyV3KQ4aV",
  "key17": "59u4wkT4vWZqLiASe1UkEvPk6XLuMn27GY6w3WNtajoAxGhKs3f5RmAnSpskAt6US4dkrSmfNAnJLLGX4VmCA9GZ",
  "key18": "VFqus89DVcC4KGtNMPXTgVj1QkvYNZ3X2XvQhy7QPyJ94AKdiKTK7ni2AHpdKfDAXUisiMCH48CMaJR7SDNS2dR",
  "key19": "4GmSySbMJbtEKavdviM9Hh7rTMaBRmHxBi7X3eP6LaJBYjkgz83sD5xUmBHF5aoW8Vx5aSAUgw6JwcVuAExf7Cxs",
  "key20": "4xWEmactwtYXLavHBNj2X9Q8UqC67QUKKvnpwap7Q8Q7suRqqYisCNky6aDHLejxUbfjwBAjacyxV4LvWR4n3msk",
  "key21": "2dUMuKcKGFsn68NCYrhz7EtKdhAaAa9VV76GW9dLykcoitDEF1udEKGLu35es8YWato5MPRxjs3Kxg4gGLbAVW4U",
  "key22": "2Kvos3pdmoM2jSdH8rG6mY2F1we2EbugkSjGjCdPQptCBVCqk8zyuULHXuMDajxGkPjc4keRhzmJvfd31my2jdM",
  "key23": "eWrejY2wH8TNftXBdH9ekh2xyQz7kZxvUhtoTZpQef9UfwecnwkGNQQzdqFb9P4QfDZYSQSqRVCBWihuSK1ygHg",
  "key24": "EG5yQkLC7ERVmx284PWC2rMvijxTrvq3ge9oWsHt2N5mTWgoYoLTKAEfYCtYRtnRFQxqVegdoRW2B83wketuDaA",
  "key25": "UAqLCYMsH7K4QLWUcF2XCCdz1pUdfq5ayu7wJwTrmPxLV6Uk2ZE7g74SpTdcyBfsaEZL1sRgnEhDyPUpjPQfmkz",
  "key26": "2LSckyMD7degfPpos7Xv1JGGMoUUQH2A9MiUcmqL1A6ttWtDYssL1BDNsgF8HCDKGvt5QetPUEVyafPXv6sgPUMp",
  "key27": "4FoDEZ8mTPhfPLoQDgSEPZybQKyz6W6hGQQQUzLGMDqV6zQxQPq2FJsk4nUJwDwoL3pojuG9kwrfvWTq29g7mcit",
  "key28": "3FdiLk4tD5XsbNXmkR18hVyuTgHkgqDKziafheaWWorNv5D9RZR4HQMjwsfXSWpfsT2LJnKRmpFgAzC6mK3ts2wg",
  "key29": "2NjSCznwqVWMYAF5pMzUfGPJci21cpjnpgr79DJX9rCQSxqeUU4BG5QWZ8aPWQjnmKkUfGEQXZSrHcHsvycVgnX7"
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
