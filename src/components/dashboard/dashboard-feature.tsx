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
    "4QiLe7388GGKojMNNrpukpFMjYaJkwikbrYtqdWmchAbdtfscURJWP7uSUpcAkQn14T2oL5L7BmC21XpvgBX5Jo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P6LW9EkeM3iEPVWoR3P4A82AbpK2cwZbdLUUGJajJ9UGP6P5mgmf68qZXyfwvSeBCrZeTEJgHdygtRUnG9PQ5PC",
  "key1": "51oynrZHBj7JB9YMUEQ4481us6ae834jW78xyejDVSGqutXGayxTRDgr3VnwnKkdYo7m4GzhpzNgYcnQnNLd1kcc",
  "key2": "5rNKipKMMf4x2yXVnWoY3vgFs3hfhuB9ogtULsRnakVECr1YmSsqbiegqLk5wbM8QDqNZwfhTmsZjedzX5PVEvuy",
  "key3": "XqPojMWNexS3R7HZBtTmi4AcLBLFaHWkTwEGmUVwFzYazMCQCopDHZPELrxJ7f4TbDUQ5BRyeHHyCsNEZ3h1jry",
  "key4": "5rfZgFboEtcsVY2RJ1RVvAcDGpi3C2vNV4J4dnRegb88yWfmYXbncw2rbdcYQajeXneYksz85sZk7E6JGPZank5W",
  "key5": "4ZZJaFGQi234TmM3dcgpVDr5ScJZChX1zdhTuQg8uLLKXxN5LKydpq9VjVSXLEUvUtyCigLCs4evxEGjwLjcmWq8",
  "key6": "2V1eCZBZUQJy4WZoZWdjN6QkdLZQ2ZoUVodiwJyYBCUYxcUyStYCyEEgzGn4dJxefbWKcT3QhvzX3gnmyUXPQ7fP",
  "key7": "jZTimcKALt2yLYNMvFNkmMQ3svcwg9BfoeZ3PczMdCg6u4qEgTHzfYNdjGWcfGJEzA9BHnrrmN2SFDW2zkiU3ge",
  "key8": "5JEw966K3z6NXpugZ21i1jvWmsingaLkPTGekeYTAfkGTXaSjc28YzwLPNWriEQBYru6EsWnYPCjFHbDS4xUULc1",
  "key9": "2dZMem6fRAUr7LzLtJcZ5EW9m6YrxKnH4AiPwV3NUTrCVgZ1oVW2Az6Y8p67EKZ4FKQ323K3h427aMY22DT8dHFV",
  "key10": "5CdTb5GCf3mJGzp4iS691dAjxuhZSSXYKPTjSMuqyxPzhDRSLM4dBCCLE8hfxrZydLYrREmkTSoosHy6DUjoe9Br",
  "key11": "xQCzmJGNtzWKK7yNttKo8vq63eTZhwwmVBnWC7dVukBy3DcvAAEwqr8rsPQFZ9J9hyWcTRdJv5X8eGEeUqQN1L1",
  "key12": "kSF6bG9wBWcMZHTVf3SGB5Cf38HqgqKSR9bTd1cytBXsnAqwX7oZXGvmD1jjAh12881vgsoxXJZtgkZB9FHb7g2",
  "key13": "4sVnjLKaBG6xESYtryEEhj4hPA7AVx4ET7Cj4NPQ678qc8hSmTuMzJRcnPXDJnG8pceWdV41ytxCeMy5WkKfyMfY",
  "key14": "61dM1XPpj284a7VudBDRdWcQfch2hhRAP7YaHG8bwwEE6LrWvF53idm1PgpBX4DjLANyDTkL822FfSW1esC8gAsE",
  "key15": "3NmRd1rQAjJ39degGqCmFuPBtKk6DomAmhGc9NEW8dxTnpMv7Sf24jQkwJmChxgX7qPjN8t13kQxKTJGNPyg9T34",
  "key16": "5S8xV8oaPuZ97cfQugtSKx98cfL18CPg5mEGvUeBhDuFB6xej4p7Rcv8toch25oY2P7zWnk2eLHeJZjYrKP1CFJe",
  "key17": "3MSkkVUuJbCJXGJyFbkXvPSGNLjMtw5TwsWtoCNy6keAUbgcAQzW2d5g2TqAaAC1AzP3dKXq6Lstxedk4ZsnUHZD",
  "key18": "fPPKUihu8UQ9qswVzifGu7EgHZSnbei1Pj3EBHiHav1LKG4MXZxnWAgebn89Ss3fyw1KdzKjxnaRVpU6FmJrPmG",
  "key19": "39T6AZHJRCtaNneGq3HZom2MEnhRi2uyzQAtjFJQWYEsKs7ms9dxHW6ANU2spVa8DZxVSELp6osZyxpg7YaFgapE",
  "key20": "k6wySZPCs1aDGEZpqd2gr2hpCS1PxdA1b358HTCQwvoar9ZBrcrNE5t7vqFZg9rDdQdfh75wba73bch1fRYrBd8",
  "key21": "4tDKTzfSjA59puSeDKT1eGd1YbJUY47gdntDr2a6Q8yC3HWzYL5JvMb2g2Zw5BVZoFn8Zq6t1AWXTsemxCBG7A3s",
  "key22": "5iVpHC1rvqMygz4tp2zEWqmDpNopbKYyUFoxmbyaBo59SGjxcY4zLTamkYWQ62ihNdaDAUuKK9vGttxGqt9JKa1v",
  "key23": "4DRbdwpUdAuJn8LyujEsC4FSgYXA12iMMJboaQvDonqouk2kp5gNyaetS7c8C2Ag9nQgB76ZgccC7wroPGodHDcw",
  "key24": "31rErzUiAfJXiySQJ24yDaQkc67yEUYczggyECGmem6T1xViwBhzJUTzBbmyPbkvYquaybu44nTTS16YLq8XBDpq",
  "key25": "5A3VZ4Tb1gMzDGRZg4dDUhntXV6uGsyzYBcC2azCdwda52di284ngZr5BrvzC9yL5tp2AFF2YTdTWBeFsXXmDMz9",
  "key26": "2xb2WQ19jVH1yxYRESpakUhGPXytrstuKgVsoePjdx4v3ZQfaykHg6se7txY8uAVgRRsHzxmoHc7FS4Txgr6RmTP",
  "key27": "2o8ZpCaSspDBYWJHZsqxgcRRXcdsYPtdVbxUJYqMBKzkR4EhEmzXPSFqoApZwEY59yEa85UYnD1ZAc5zv4FRKb3F",
  "key28": "4UbSA1UgNezvCnwj2s1gBKmm9mddJUhot4URMRaSkCELFzQrj96oRt9vqPzACiwPuHdzXNiPSdBii2ZoKHTZUzra"
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
