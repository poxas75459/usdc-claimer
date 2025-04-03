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
    "ZJ6RzU47WkgSWM58fD3SGysyy8bJQDpYXKkXmcqk4b9UXkmYSYm7Vi3MoAA1WmRGgYTeEB3TS155sPXxM8mPVuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31cwjjzB4g8yaHySe95UEiDxQ683BspLCAq5YSE2xLKBpa9sw2L3hzNXtak52RV34CzUDatofF5hc8KBewZYUpvD",
  "key1": "4LDnMC2JeNobgg9KzSPDAFj7R2jJZwXTMdre1mD3xfqc1jWGcfH63NiHqcCivTvxWySgV6Y1xNJLrBJVrEqjNBH9",
  "key2": "4kuRsdUDQZHLNtqD8KDUeKEAseCFnr65ED5pDqD3UNAs62ENkBTR2JuQhSkGJ7UdQ2xYkhP8m5sPvM5hSZsna3w6",
  "key3": "4p7EKjH5isQRWyNVRem2KdBkePfzoMUUFoBxESUyTRV2iy3Rytr4YMzHAjJJ2pSABTxLcyWqLPczuGHeKHLC3fco",
  "key4": "5JURbXYa3JgwoGYiR8HhM7qXp3JuKkNztUQ1sK9QjkFWF3msrHqZ9A6HxhbioeS6CFkXm1rVVYgwTALrNpKCQTat",
  "key5": "ozJnyGD3YP4dkBtu7DtowAF24FLDdsCjDPuucZAdVYaALzeo8nxezrDyKth7Q5keFzCCrSpramWo34dnGNFk22u",
  "key6": "4hmEHWh3JPH7MVtkQXoHUAqzWvTL24tozqmRMgw6WbbUcKVVzJ6uwtVsWXB7S9N9R3muduaUqmAC39Lmy5C91nZw",
  "key7": "2gseKAmyMJBeTBwMtAKYfLoemZBo5uVaj7FiN4tuMxkwnNVXsRjSbiCYpHrXqBrxNXNvSHyrJLkSw1S2eCC6GGFo",
  "key8": "4tZdpHZpsBpoDEAbjacv9cd5frX1mkQ3V7L4WUWuc9e9UzgtwaxisZtgkFyYPRUqRWiB26Q7o3QeizN64BS5XKp8",
  "key9": "yKovF3ecv4yd2s4aGFRqSkhNRZiBY2o6eK4kkHk2LEjWgrMRL4XpCBSjS7hq2tiCfXHBXdyqd7M2uN81wnMPfeC",
  "key10": "3Zggnr9kjbsdgvahrmQoWxwNfLAeY4cYaH7RB1m9ZL61iHEjQmmJfiQedyhVMPMXjQqxEdqu7ruvFMc2YKhif5cU",
  "key11": "4DZ3hU87dCpzpiPYRYAVbDJajDXaj93F9oenPh2VeLNMTHiXzXmk6w49duCLUEpKY8zu4XwQG2C7a8YAmbEE6DEC",
  "key12": "4wqgSAHec6eEqS43auXSspyrQYhzNtJna4sQfRjk9C1vu9hyavtUqrkvso7bDez6VehAKiCyyw9VJv5akxXzfEZj",
  "key13": "4aFwXXQhEMM9h583ranJwcAq1dkMGptX5em8vhqHxbbFQXbTRk3dB9mJvjiDCJd1gsczSpNEwNLZf3jV9pNeRdFD",
  "key14": "2ia7MzUkrwzB67eXyMv59auUqHUfhJByvfrQ2fXGzs3EgpEYo9Rhm7qx2HHfYNsBuznCFS16ukX5SeGoedoK6PoQ",
  "key15": "pEch1xQQNosJbQjCDg4BfP44JacrZtUSfUbyXVkoSyTVPXLxmSGmSPvuPEeRC3BnjuiQ4S6URN4jhrXmWJ7BD8d",
  "key16": "5iL5i6dgEcRqVJ1UVmcsFSTvHjMerCprRDtVEdWYcJNAAeaWYGZzkXSes1A5GESrnhWVbLoo6P4ctS8dtu7DFLVZ",
  "key17": "5smqauMiLapjfhLgPHfe2kpqrv7PA28HtYFcLDMLUciKkxBFYPMndsY9d46x6uptGaToSzuAX97FHx6aKKWCxFsp",
  "key18": "3p3LtCH1pPsUfZQedfNkYjxLbkUfEr1N4uBneT7fqhV4mja1ptsTE9NwiX5CtF9obkvjcKzK4sS5GniHCyAGBbVr",
  "key19": "5ZUTufPrdvJQ2uBYtgHcKb9JW5tYxcVkTV2g4Ff6jaqx5f8rDUgb9oegnDuViASvARZYyv1jJBo4x7T98PXaQYAd",
  "key20": "3A8bPtBRpJttqsLPU5vNXzGV7TXzXqxYMmFxtq2MX5thBLNFD2LjQE5Um1VG58svzgeU9zfCtWVebBJnY7bUpaYG",
  "key21": "4wwACCi2HQP1gECy59tH1MHcP2CSBFSvGUrNkvReA6arMVvi3QgrBXPdzbYRruVQEL21y9zRZiSjB5rYxQn857h8",
  "key22": "3Ge4787kE1PEfR7giavaUwHpU5cf27VqCBNnTBkA9aN8VT8rbuGnp1fUNnR6hefUdrtcTnzk2rHY6q1pQeZmZsWe",
  "key23": "4kGg7NwA1GsmegSLZe1s9QxHMNSNgsqWTDP5PR1RbH46keTL6VwbFxFEYPahjzoKCBRKhz5YyYsEufQKhCc6bpDM",
  "key24": "3P9GdTCB2k1TVGPvjkLk91T6adj18obnJgvEchJUbnx8wRB9Bn3tGjFnZg82TttZCgo99pCJBDKHJ63f6D3bCKXG",
  "key25": "5i94AMtH8B4JrYRymJVpWhBtigNTNGN49cRasVDXrtUrq4Dy7vvVm3ztxhq4CYGJv2AKqxVoC7MHjKmNWe1wPRdo",
  "key26": "5AfvmVPMyFeYuusWRVshzgitZFiSZyjoxQ9ELVYbQR6uyLk7b4whusPsq88cc6WJTijiA4ZapzQi4Bhzz7QHgu4a",
  "key27": "2AtcxbD6Hqm9dHehbn2FSZZHwBScqWYxc98j9g96MtjN3wUhNczUp3QHstAkJu9Rgq2qZxTNgQUPeQJEDbZhXx4Q"
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
