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
    "3uK9V3obuYhHELBfvzS6oNake6r6vrtsXt1BTP56a2DMjzuKFfZjdPLZ5BLWcX8uYQ4sfaWMfs5ETgkabY6CoPpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "217SniaNzvVhZ1vCfw3mWg6iFQW4oU9QHZqyCfWFDrm2UsLLBYwkvZhe421ueSNCAg7Dd7SiRwNdvyYZx5WSuUrs",
  "key1": "2Y84oTi9YtMUqZ13wLeHr6rs8fmq6ZzACdMB9qZtVjWduRY2XtPLPo88TPqvRBs66eCFEYWNgSHq7iJbHJg1FDCR",
  "key2": "3KmdKCLMa1x2f38v6oTT9tnC21PeiPKAnHnrKHjRaQc5ELYjco1uQvbydPU113VJQ5ra4LHP3kAvHM396estoqRm",
  "key3": "5hSaTS11KwBPKdvHSunjReXbBUHU3akAGyP7cmnpSenmNMy7WqAxq1Mt55Ys7uhbCp5E4Kot1fjtm9TtfpvdBu5J",
  "key4": "5dnbL47inu8a9C8KCaBKvuWPczobiLnaAUqieti4X9KMVeAh3TEKYKeEzGaRhNLJWtUwCpdnGjGuFwd26JVdhZQJ",
  "key5": "2WC71GXiNH6m5JzkNoiLnWhuaodBK4x3zPYr85WjyuEhv9VWSPJ3nmSRTp5vaRE9Thaa8m8CqFJskfnNBngBJH9K",
  "key6": "63baim4UkRrNpzPS3h8soT7Lb6g9Qutm7fxAcaKV7YG6wu5gxeH1bJjw59TQSq1K34y3zD7cctwP9HqrdWYtyvz4",
  "key7": "2Cz3UbcMhK4ty49RMRCPqXR9ADqct5BreDkMFPehtWGJ92cVzFobRfQjykncrWpwUz6PLFpLFnff9pWdC5PNUGHG",
  "key8": "dmC26ZmQqNMpFykbCZ1n2pUuPfwmTUnyos2upxXriHiJxDzUNtNx3a8gykgfsaTDKrNS3bYq2Zk9n1S7RdwH7vA",
  "key9": "5Wi6w3VzaRMQFxNrY8nLohTUoNcz1MCM3AaXBqbhhouto2GGmq1pfiRUJW6YHSFUmxfgstQoL5rHh7mY29SGkMf6",
  "key10": "5v66cSeyTa1puSYjsP5XQCTdEP1GRVpVBz646DP9g5JWoapDxEvQ3VUYwZ2Tt2qTRb1mY6Vt4MH22U5pXeNsBb4p",
  "key11": "5kG6H9g4sjuQwKEFudRq68rEFAVRddtKtFQL7Wg8kB8hTHbCRwqqf6fqGWPnNkhg3ct8G8vjYpBkHHvQrqbTHgSo",
  "key12": "3T5mTAvJg85XH3WSVHWw3n6T8y3A1g6i62ZVk1SLkaxiuaosAza1mbnJBHSeVV2iASrQAvqW59iBgAUrs9iEiGnL",
  "key13": "paYf8TL6fh8fNyGfBwh9fzV6edtKnmzNWPCy629xtBQQoPbDvUGCCjLKxg8ntCeww8YvXyTFpk93cAFNx8UPfmW",
  "key14": "GYs5ANGQ4kxvUnZsYW9DPFnRTQ4zXgU9my1jdGEpFCoTse7AkafdSEEDvZg1NVgc8sTtUThfZ3i1ythPyk6qGsN",
  "key15": "KYyUgevjvKXN9rwFNKpx4kXX2gFrEHwUsYhRFkjcDjNNbbTBvf1t9EpJVN1ouGN7iux4YqkB5CvmCDZYm9MQbBj",
  "key16": "5fhBQPDpj2RstyErtCYvtNkG57ibyG6LKZMfT4Z59ooVJWRiB3AENinH811Eoch1cF86K12UY9nE2LNoNeybysbT",
  "key17": "3zukJtm69CwaSfme5jSRSKeuxg4DfBHrV7vxKg9AgfuhaTqDx9yX4bDaCar48GDgm6bZyZ7K3HPeHoiC11z7USsP",
  "key18": "Ap4NMLqkzw1LKNqpedHH31xvA6gZPFoDheiZhjJqPZNFdmJHtw3xW7c1vuLXkkHwzTzMkYeRv4TtM8wFKBz7mGT",
  "key19": "5471giRUHSoW8R8qNWh9xi1Jo4W2fKS3WHfwBUa3atpVMFZTVPbATo6GUvuKU3bPSy7Y6xaMKkS5ahumijY3fdGN",
  "key20": "2cJ6jBKpe5NwdXVnq7PAMnuLBKJJLsxx1hNmKWkuWwWC27jat2kXBMR9umXrCXFPyxFfZSMGetkUmQUToXv2sjK",
  "key21": "2iDVrhr9TxovbEUncPi72Czzu7XHnK9HGyMxnCtTRzxf5S9tJjtpuQXBdj9WfuL5TyedL7KS6KKwSXpPLzQMhz7X",
  "key22": "LFmCREbmXaHYKm3oUq2ohDtyWzxyCSo3YptotjFFZyRrf6Ue8YF3a8wrjj5Rh2e96YfoUzhEiHXj5eN78pZo8o6",
  "key23": "3Fau9FUK9aP24Er5Xfj5KZgTgkwC2YD1o3VYg8hR2CoNbko3XgaGPt1vzMJZb5NYyRdP1WV5yqNzzQHgNXKxVJEd",
  "key24": "ubf5NYT7hxssZD1CkYEB24eaoYRdDPYPuFCr1By3L1U7F1Vgc8uyKqHa7wL2WccbwQcEjaQ3HdpvGdzYXAizirs",
  "key25": "5tMRb1ph6CVgpQAmn6c3H6QL4pNwHpqcg1dh25PmAQe2oYTK88Zi8zTjLHjmdWT5Gnuaq4jtUwud1s6hmx2fTyvy",
  "key26": "24u73k2QxFmcjBHG8MXYMYttEyKrxB3L2TFyEgrHLyehpeB2haFzUXBT8mbFHMHw5xaQgkGV8Mejhrcnn1Mwcw2C",
  "key27": "5qXaB7K83rQM4yxwR7EVFJwC3hcNfU7zBv8oE1ewuBuy2hMWa1LGjZmrQEEgrZXpqdi2tuya2zcYoNxEBLbnf1VR",
  "key28": "3xdHnUNTRoEEQTiTTNLDenop1m6LqmhrhkoXASR8NjkijAYm538xwsptvRAzzje8qNvzjCKM4gndwu87XgAXmVgi",
  "key29": "4NrGamwQXmZxZTDvpz2r1LLbZZcyoyHanr2yv22UDxRd1LAY8REbXejmRWvWQNM2jU3VaUy21FCPi9VUB6jM2yho",
  "key30": "5oSyKUYo44EhZL4uKyGtWnTMDQuJgxhnQv26jvGQaEZCo7u61Po5yPAomRjEWgvBUuDtTc7Zb5CdBSdnpc13Ct7m",
  "key31": "2z1EtEUJWAmgH1PAkpCnmiC1DZq88XWaeaXesDEi6pKsn1A8ooFuzMzNFgxE7nGumfkQXGR9rZ5Bp7Ddc2pr7qwG",
  "key32": "22bDTbwdnGaUjZ1iBwfvGhvZTunPioZir46D5qMm3LLhbaNkHNePAFX9M8AH2ZxBSR3B8gMVGVndNEnAD4546kdr",
  "key33": "4cgG8Sz1NdiPFgWMpvmTa1XEHogAbvfm3o7vcRPaeHy9KWZBFERfEmRtk96Tn8fuMS1UZPM5G2paVyFwGF1TPiJa",
  "key34": "6Su5kbztDMpoWoNHGtsNdzbqrCCEmEDuGZsRWqMv5cw8amPGEvaHfAtzNy7ogd9X8FrjeUhWJUhb1EbQ5swZPvJ",
  "key35": "2StYzfQ5J731BkpEDkHDeaDnMwXqUZuwJMoeArip8YQ7gUv63TGXLr2ur9xDEMJG111DiZSpJTQy5bknNsfaBprg",
  "key36": "R2ZcrGFH8HrJEtP6cTd12qqd3x2eth3kQ5mAgmDuGNkoLcnfnrUkJaJfVgn2G2jZZGkc1fFY7rQSUcRYsFt3zwo"
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
