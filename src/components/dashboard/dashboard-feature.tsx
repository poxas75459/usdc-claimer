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
    "5262wv5sYHXQt6pTRvoVViXAgDwzA8vDrwPGnSHqydT8vYLPovUnh5pCroWfLemJzcfGibwdmrL2rE2xsqpLydX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hFrZMmV62Ux8t2JyyexTJFLpQ4ndys4giBj5GExNswVcR3cz1K88qDTgZtfrPazUGctMS6ECKQhz4enHtN7HdGj",
  "key1": "LJ93Qme6HMu3vghiHvge89NsSYwH3oBF4FcpqdZd42rvFBZUBi6ZPUmXUEt1r3ZLGDwBmUR1SpjTqasCj6eiNq8",
  "key2": "koHyyjHrJU8VQk7nyt3UWdjEN3eXdppkEPyfRr89zTkm9DHxW6obeC86WtWcHAXdkrjFzSa8Y4sz7ueJw3pzRL8",
  "key3": "2cwdH6T48wifq2dvn6RdZTWGV2FfDGoSgJszuCgHq6HaAZaWTC3jZwv7e9yEiDDMDkC9h8CBzgV2faTqtppiPjez",
  "key4": "aenSc7AsVVj2mDVdaL48kCejsTsNB7q1LsHYKgmCprtuEP9iyjdngW8NMY2iEZPxfLbxysyjPzm8g28uYH7abAj",
  "key5": "2C2ngDNj22rQLiwdrMN8RJUEcZySQnMijsg5PgvsX9YKYowQARHxhGuWM8zDs3sdUu3pxTNUnC1faaedAmVSLj5n",
  "key6": "63hBpM4w26rHkmyg2DaTz8WzmjJoLuLtJYcLSEit6oYmXXwxAqqLzA1836FZLKq7inDAUs2KPcUYtVPfviNdxow2",
  "key7": "LuSQ3wXq7XA6KNtzQ5ftLqdaqeVvQ2kv1LzYArwhJgz8QJoHVpGpoGoDYBNcbktjbirrakdUwHre73kLhB15MU6",
  "key8": "3Bu5JRvEqGxTgPQ9WWghcPMyrHJdXHTe68eR9G34ZnhyL1JRB4nvy1GqDWzmgHysKnhPxR9cNaVyLhAJYkCb2i5B",
  "key9": "2iRjXexiXDcM2hqyT8fFiM9AGC6DJzxUUzdiMUcAVcmySQNxHpv5tmY1fnGLer5tZCCwqKPWxyTSzgEopW4P63Hn",
  "key10": "4nay3dPzD77fard16s6SP6saYWUG1ikP7dXcHW9jr768FGW9E478kKmDtbgjkQGELBN4wTfXH2FtWyjRiuA9zAdL",
  "key11": "8H9kNBZ45QiCKMPBghwjmFUyxuwK8pSrd7SMudYNXQXzEu4zDahbkxdHAWjRqbc8zpuDApZGwUL5yXRQrwdJryz",
  "key12": "FbCGPyomexf44cSu1k8kEAGqawGiKgBPkJMVDiRUe4fYD2GKECdvkyhSFeW4TLYEMZdv7YswG42sys764Sk8oPF",
  "key13": "4j6W7Xtjbi6BCEGf3abAz8rXyd5rhS4W9CnLpeyysRfV2NmAh585sWqr3y1raBE71YrYFukyTyhynDR6ebJE7GAn",
  "key14": "5f698HCAk91E5BfPgh3zuCDobqaKvdhVaMfB9QaRqU2eQR1m1rV5jovAT2yNo8AAddJWFuYKYNTy21pwt6tyRhe3",
  "key15": "2fwzu16YnGCnHdNJ3phNNfxt7dg57B59ZKZ38fnoTnWYZfGedn3RKFLznn1pqk53heCGxyqZFgsaop4aiuECaCtM",
  "key16": "DZTPJ35LHjajxN9Pdw5Y4ovuUj9NLPdKHJddxrtRqumMuRvQx6mQEDBNqq5YYyiSdhYYZwXi5eD3j4jME5SKWtA",
  "key17": "4Qfn498VZA97u8wfKmzgq5X3VDTeNW5iPETtuejSMNW23BDBJabvR3FNsGbfdqik1C8BpuvaM3x6MrLCnPCKsqM2",
  "key18": "652X4Zdtq9M4QEH8jyhWvtmeutjsiJTnUP2oyeUgTkaUr5FxkdjJoZ2GLnwjMQBAbEJUkkLwRD6zzjDtMFtYyy7B",
  "key19": "29wBieqewgJLPXvTQzbB4tMxDxsWSifhKatGh3PUV5XXkMhuF9Dhq1Nnd5JTtaMadaLzk8HyenRYjyYMMDBcthK5",
  "key20": "5oSDqg2KbsEJjcHbf59kMGK3Rc2buFEbc8F9oKjPwBCZTvWYJ7mNkRVp3brVdcDMing3ZLCa9wfUKNaxNM86a9CU",
  "key21": "2VyqPNXG1GmTxPL5mzFiuwGQ2UmcddJMEWbBZFKuQ7XsZJbHB344zh7BRtwGA4izkwqadPAWYncZQBHzj2tfVPRx",
  "key22": "xh4qLygxu7WNY5GzGJkhbVdCoDBNBFxDvAeFKXUGeWTiZmQLj9JufysWqi5G1vJDinCi5sYz7vPN9HPafM9TgEZ",
  "key23": "5HDKbogDibYa4THEgGgWnXM1ybfoVyL8fS2agUPwc4k1jfUHSuqdgogJNkmZMZkTdovrYkWu7xMisuMTcNCyDxsU",
  "key24": "GQ5Pqo2jA3Y3iiNiqVM8EX7YWt5QVsfeG4SSSGjWCpLHRJkUTk8LMKZfVAz6ETJ8qc4heoo2ov4QgAQQYBcGSUd",
  "key25": "3RaJe7Rckj5JypL9ngRYo9zHUdKVWryrjABHPeG5Hi8SBqvSC3QxGXiHp5L7A1uKSuUNcZX8HR96QBHBhSiPPFSw",
  "key26": "47np5jAzh6jXNXRhuEQJE2o7ygPsviWhxsxXJpHVDUmAu6jpS5msnmKQgfJPf6w8hNngt1CYxAgCBJxKgT7FpkJB",
  "key27": "49SYQuhbikjwbGzsFQAXceuHFACZ1RU74AScJcKrQ35dS4LqAxh2ziPdYfHPWxHgpuxVpShZH4U3SoodhTpoevFf",
  "key28": "5tdd1sx4yLTGB1ExmAR4wBd8BJnZHyABvvJ2DKcszTzAotsxoD2Dy9ZNp6R57y99ujxta7oKjRgzSFgAbiF8RZbv",
  "key29": "eBThSLGZ8jZeks7XmaoNUnZT7LT6VxWWHSYQeo78h3QrqnVtQEmZKpGWbqhat2xWDmncgZ1GuiXRqaSnQTYEsz8",
  "key30": "3kCcurFBpkrromiQ3wSoRU5g9U1q2bJXKfFpHyH5sVpNM2Rqndt48A74Xc5pzpdyhZMGpXBoFtzanozoDe3f1pEz",
  "key31": "2puVRqZhM6k2jJgPnyaQUPS6Lx3TeVxtq6G1KwCFZJf49Qw2r1bY2TKbRddBLKA4Dh2Q8yUXMuo9Vang6ycrscdD"
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
