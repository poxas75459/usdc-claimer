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
    "2sUHXnfrtyGwX5R3JQ1dJTbaA7mkxEm8LrkNUfgrpPnB7duvcQ67Ue1EniW6xyTbp5JiUcZPmCH1zJEgHR8zYjFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27jocTuhtp873D68YN8xv3WfPKFx1mSet4rENjSELYoj5TiFeAgybwGQDaU7AcMFkCvsAaVFHBHfUYvemsjQMF8d",
  "key1": "Gw23s3p63VX6cwGstQjrLhYLtJcAsR4hpcYa8vRWRApqUgT37u4b2PVZwcjz32FpLPuEf6D5u84z1Dk7S1eRj1v",
  "key2": "2a5hkaRTw5bH1bRQaoqK5GqWu8Cxd7K64MAN6XsxUm1L7ToxPDA1Bs9ztUoT76B2soefbjCVowYMMQj8CmpU7VhY",
  "key3": "2ZC3sJZvUUd9naMd1jLCyTv1jf59zzLEbgdnscw5jYdZtLadVAbh8udvTDiUQ2bWQYxRLvWi9sepihQX9eTaUAMT",
  "key4": "5EnK1fUcq7eHviiS1PxWQ7nDnNziZJkQ9uTLSwyj1UuXd687857NzoupxCy3XjUhMHsBvTJuJx65axRoFy9Xwn4z",
  "key5": "LwTz8bXVV8GNtdoBtHGUVEcx2tgLkcMhakrN5AtubyWTw5LjCXnbxMdkhr9DZRbus3tBeytvgebT84XrPV8if9e",
  "key6": "4GogrgDVMVx2kn7VCDmdfsTK2Bu9VvioVyWEZYRSXLDiZBRZZEoMbgMew9skte9QWJ1PFPcy3TVoUjxM7JERYQVc",
  "key7": "2pKdmsP6rWceyd4keKg7zCU4LdS945L3qFrmJz1MNoni9WHKCTiwusUCvbQ7rpLpnU8VscT9ipy7jxWanJGkoR1r",
  "key8": "2m1DWwG36ghfbzRLm5NftwE52nhNiJ1MjWPMdZmPMDLQadQDQvJ48Mupo1QZHmq9Vs8cBDQDeBbQy8QzjUgrX8F7",
  "key9": "2snoybJV7RQFPgz1osdNSRTX6r9ppJ1rzJnKTrqKCys7iYRxeGxq6aPYFHAHwWLgjsmudNaRGao5vUiaYBDqb1Yj",
  "key10": "2NmVuEJLwCwnPSS9iYiacdXcNCHtfr2isbQ4cfUeGv1ffFp7PEE6SCxsv44WGu8F5ursazzwSpqfooECMGtiVCgy",
  "key11": "2UDBCGegrDtr5m9hXimLKPQaU36hPd6RuduHHY5H4RAfMLWpe1gMwy5uMC2srRaYLY1Q3L4GS1Pg9kbaxzAK2qBH",
  "key12": "oyq3tAnwj1ScGGgWjbimPqUMs4uaj2UFQMtKFaMxKi8BNd6jxzjJGRqCyW9VJ3CVn5X98SKr2TkPArbFDsouNZY",
  "key13": "39HBh8ZwX9ghvKksfGCYFKYMMFkxxAP8qZuybdRdEmu96y3ahq6oRQ7GRjt4JKs9858tWkkPqNCFQg54uLzwF7D2",
  "key14": "535eec2XoUodd9tiXzgja1u6yjgf9MB2P2zUP1z4NgqThd8aDYzjhDUbBozHLT7dLXUtFP2XGnYKS5gnQVM5ygPZ",
  "key15": "2PaEjeMpXmYnWNU97zmHfvnBwh2QxYLRHzC4qyNMcMFPjvvnamqHR83jsKNDD7iqfHRzVvfdf3R3NDTvSfRA43hj",
  "key16": "2miAvXryGePr4u7eD57eGv3QoQL8MTHtFQJEZk8RtKV8L7d1nJnf6jELdJzcPpgqRNBst8iKYyrQKhJPf7nWDQtV",
  "key17": "21kgrmDm4GQYTT6FSMajztFpM3cKwD9tVFUcyeComzmM98GKkWzKStda4tQ27abWZ2seR18mDpD3YU5A5TCx3CsM",
  "key18": "omGfuxHeSxFHfYTm2wytLycmfczf1JA1N2fARY3yzsJ24j8MC7vYjsBo4tjuLQYnPTnVahGa3DwpkEsBj6fHneL",
  "key19": "3iggz2vqzsMuLvmZXc459rabKukY52hshwDipMRUpDDveMfJX5EZq2RWFfBEe7hZRaQhf23DVnREdoCnb7DnqUwz",
  "key20": "5kLMMo9rAjSwBq3jKEGwtzDiX3p78AYxjJvJ9gQjuyZxBqKDMD1ndLx9UPH9vb1oXMg7taXsnqDZN6436DKXQNdp",
  "key21": "5yb8h5V19hZhRDaRm5kCoWhQwgYB6594EPHqJHHbox4stvCFkFb4cRJ2wWBigx3d4jc8X5UKrYSmSeycYQ5z6RQz",
  "key22": "3WnH2zG71yA7Pf39iWZFiEqLYkyYQb7akeMJtyg3oST6ABuUgoYRDHXVd3UW3uqgNSgkgxnW29oYb5yjVz8idGeK",
  "key23": "uWLHQfmSEYehaJvP1NhG2fCjrXGSDXPnbxuw6hotkrDbPs6kVRxgzCYpSUSi5jLzKpRkrKZQftq5mkzwQjCh2He",
  "key24": "AxctyAe67MNxvC6cEfZezuoMgUuQfzr8NuYbNLSQ8Qy6VSFypFfudtKzkm2fezRr9MLQK95Paox9J55bq81HQvb",
  "key25": "3WfGDtFiwP74Tcmu1v3TjGrtx1DmnYsCQGsXXgepgGmFv8ecjHC2YDeacanTxiiYV5tBdQ6ZHC6BvPzLDaAXH5EP",
  "key26": "JQZh13A27scjxKHfqqFvmHKsmD1woYPCm9UbZk68inDPna1G6LKjbrd5M7xMFNh5DuN3gGSt3HvqNvsNAxErcUg",
  "key27": "5cF9MoaPrN1zeiuFK8d6LEnYr1Ezzwei2qwkVHWBLmrygCFnLL4caFMXnqUmjBEL4uPZKGdma5sNhQH4LyjLCSVs",
  "key28": "3KYY7zUfq3j3sfrUSfNpo4C4CynUGUNXEoZhfk6VMoX9T6wuZjZri3cwfa79jpRMiJPuAj7RVgQfsK5HH9SEjqWU",
  "key29": "2NGsgokgpoPAFCry6kHrfHeSu2fSrG8rSASKn7QuwNvzFiocMi4ky1nsKbEM1TqrmpqS3gw7acafMhv3W2d7AsXC",
  "key30": "2CWMq3UmCxVmJdT1aTa5xN1hyvw8TiqZmTvakyVv2RUXkqUUejhQn3c9DvAc51KmTAti3ewqbpr85k8LADjBZVjr",
  "key31": "35RtmnykkXc1WTQHDjWJnoEFTa6HyREnLFAahvMGNzK6KGEGmLu8kiMXxGWjwJtUPCV5nqoSX29jvi65fRpWGCYY",
  "key32": "GXDECn44cmo8MLpZ88bufMW7Gk4x8GE5qTu9sjEG7A73k4XCr6mjqxjsndQYRByHDXp6vxzttd2B15jXJAmkWAp",
  "key33": "4D8zzRC36u1hX7tTzBexYau5DibhPHwWWX5812fwsJ6FveQswueX7ioE6HHYJQx8iKyvhBXsmbkeqFCUJuBroeeE"
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
