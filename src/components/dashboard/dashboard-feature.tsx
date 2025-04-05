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
    "3XH8w7Gag5gdka8hoQEKSErFfWDAct3CRi7JYSdUyMgXWBgvLWLafeuUNxsUtYUzBRAJqJEK16av3VoeGtWa9cHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DhBvLUbqChGW2rEpLUunqaPGYZncFBLSnNREBoEJbTnKt2dQ8VYJmraZJkJqRVKdkRXzLaFtNUjT8UvwPTvjRPh",
  "key1": "3169A7oU1fFtpGL1X2nd8f3zEdKuUy9XujTTXderpLveW3k7QqBbRXZMG3DC8YE2YM1WYJm98ndFp9kh7qX8x5Sr",
  "key2": "5THVyGvvi6EV39M1a58D2nfWagYmEHoBNDN1kaYjRduPWz4QNNRcLB5zVrHNBgnu54XmHtnSSAiJrzMnwdqUvstS",
  "key3": "28Vk89KEy32oSzikLD7WqoMVyKBULBcntpMcvmgh3EJkcvdvZ2ui7oRefn2VxKMCrLJtHNZ8v8AeM9KzS5M4ijf5",
  "key4": "2WKNYVjYCHZouwp9aoFY6Pp7M8YvcTQVbGeggJ2ZBW8eKLmrAzhtk1dU9K2kU4SeUbsuNWeQgkQ24orjKHwDKMKD",
  "key5": "31DHoCyJDSRn2LQAHBxaygCNJwbds5reVBgNVqs9WWUijYV67gmKPstzerU4anvUMkhwp3A8gdEVWRyNtkJ4AHNe",
  "key6": "4ebo8B9vKbcbpYwNwK5PD5G4HiDps84T3cBvxNNoUJtAmCf8AtLwGTfngLvE23Ree8kr2ctR2RUBy2jLU4nyGpKE",
  "key7": "h7Jiuny9uCikDo76g7rq1SmqZtHnQ4Bx8oHv5UrrnbP3Z92HSDFyo6uzEBrwA2u1JZ7iJcsvmMAP8TWgD7sVcVf",
  "key8": "331ti4TYwPVvzGU2KTF1hR7VXk1WqKeMxHAXcPqQXSyiSQpk1pxt9PXJbsSGwqMcYS2JMyXrP2f8NpK4dYcfJi6y",
  "key9": "LXFt129wMq23m3S9gQ27xYh3tFu3mNXGoKdvYcSSx86qvAG4MfWtzE8Sk2wq2FFsmEQUyjXF2mNBbE7UDbMdBuX",
  "key10": "5vcmP1fLUcGxKYe8RnSCD7iydHYBSQApK12iRKWnpAq2iWqf9nauL1To6dg55PSerWbipiBpapd9LAqProGj4XtH",
  "key11": "4NFionKqgsN3bRiAfshe6JUMH98wpS4ApUM7wt7cUedgsDjgaannAPWn9F6MD57wuvHykYRR7wBxDQ1NJNWh2erF",
  "key12": "4UL9mmRQnS8tczhjhizW3HvsVXuDMU6Cad4BwWtzmnDBKZDuBdDgirJqdZZsF2z3funH4wWkZybGEQbAwF8pMtKU",
  "key13": "2rtGxKBC4GGqZqx7mERFmUHdf9hGmExDSghN1vGVSriTPqviYWj2vDZYPBMyfz3vLuX997G5jz5dto24NnGFbiZM",
  "key14": "5k88GqcPS9iZY6gHCEhC1NETC8q3Rd3aETjcqNGGUQkrJ3bLJfCqPgbQDr8xmQLev4NMnMhcBJt8ohhzcE73Tobm",
  "key15": "5Arnj5BsuzZnBJUScmfioupnpoVfT1mhGyfkkGDuerw669RjEr4QUhvezrEw5B77jj4EmY5uEz1KKAtXMSpuKHZB",
  "key16": "3EJbuVCPWQriDX27i7XXBiPT2ajrzqPGWEyyrKgKb1nPg4WXRviewLesRp1JJn2mCfbhmJjL41NoHQFfc8vEF3Aj",
  "key17": "2YqdPVU79zrL75QeJeXs8tM1jbSirbrmT9Wen5XkkFnZqX1ZuwzUnQQuCcin88QsBaMEjwdJRNijLx3kTj4auCXy",
  "key18": "1wrm1cwqjsPn2nGfytBuSwWCghpb9gJ2z23yV4F3uFZDU7nenBr3SdkQJdsEwbWi5WcUSZBMte1ZhdBxhp3Puhf",
  "key19": "46NxjbyJ7UadFERvH34YwyREm4E6bREnsCv9jtutFefRLx7ZinSN6xBwK6M9XQqW8fypMJ521khL4LgsK1jLDYDt",
  "key20": "3XKVVkgp7YQBDcUdWFu4yTEFkH5mJVBpSCTDvWoj9qHtacpDShKueShQJAEhavBeBcHmsZFwZgPYYoE6F5YmosMp",
  "key21": "3qnEYb8eE4fddytMeJ1NWFd2Z4Lst2ygvzZESiUfVvJFHNat16ftEGwoWYYqFnVaL3ZKLtW1LwSxKXrkYM3S4MEJ",
  "key22": "3g97oqCJP17ikFffoD5UtV8Xm9ozW1C64woRSn275YjfeE3ZouVsMTtLRZuSG8vWjHELQiPpYEdARoHS2K7VHbm5",
  "key23": "3bDXkagTyWWC7cL5oRgfgEUgVynhueixu6s94thfEsGkB654RADbm6iTvs4AxnP52k4P6gs4yDhAsA4YjS6FZJg6",
  "key24": "5ceBhJA4FDo2Tkovw7VbPKE65aiFnuRSjnuJsgymPYDCQkr4qgYh1s87MjGpkRrPAz51yzyRdB4y7XSro5EBtRQz",
  "key25": "2VSKqvjvXEaqj3cpbRyHK6ZPiA7XQMxdoQE5UKuevktY4SSU6L3WDpwMLD2qhRrVoS7o5ocwtK8shgofb9qpPz7m",
  "key26": "zPFgnYU72DH7FsVufguPUbxWe5hHUGmbq44X3GNDVoVN6meQRpqnfrDs6fhQFMGSwZtoN7UMA9hdDjbkz9QcG8D",
  "key27": "5ZNrSQ2JUUYnd91rRDV9yxwTR8DmvKKcuTJnMBHYV45gn9L89vME3CMSX5PevpJvmqWfGFw7CWVrmRpLxRL9DN54",
  "key28": "3d6A4gw2ErSeRSxH1BufVdgQ48t7ZoqrEbkJA1W7mvEwNJ8j2c8FgGcww3nfhPTrQkEY7RCezqGXu47Wxu8ZdT17",
  "key29": "4VA4yW8ckVMckDnCE6djdf9hhxJGatMRPmTA16k3zonzvjfEHcsx3TnQcsKuRP57z13jp6CoZf3q66g2SjFsqmK",
  "key30": "3PhC5cgWeLZmapqazSMZBDaqhode2QDsEu27uGRBKCuFq7A3HNEjURC6gGyyzPY4LhcfG97A1TCC6sS1AAZfSctY",
  "key31": "5UZ1rYyJrbdzppnZQKRZmyPffxzsZLVzfcFNKXa57Hg3mzdWBL9ivjrqniDJX4A8NLkR8vFm2SnqerTLQDwUwsAM",
  "key32": "474E3M48bEAJgTTEgoqUscGsW3FNksPkgYwEevzDzCGxHX99vmeSQups8qetDvSQCN2W5Mikub8Lf27P8ib1JxkH",
  "key33": "g7Z7K5pjvX94oUDP8rprFVmR2xd3ZWxixJmQEBPrYbyXjDFQc5y51TzdxttLZ6bzKYWE3JqcjCvJ9BzLLwxnuGV",
  "key34": "43LXsnxTHvmCisNqX4r4To9uBhE1R17EzKG2rcZ2h2f87Grft1QcePiCKFiPQ7765eRLcNibS5ErLRZgJZvmvrh7",
  "key35": "2EBPLZamw3adZyf2J6g4xwwnDgzB1i1Bp8YEYJcQZxrXdJAwEfrmB86tH3youTC4K9gUbiJCHHN6s42DSrZzosLh",
  "key36": "4TBZcHWqnrbYjyzyY2Zpf2fwxuEZ8mgTnNGQwYT2Nnyi9qh7Q4fkcHSmErZdgeiwoi9u74CsY6PrWg8sZ5f9xtcT"
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
