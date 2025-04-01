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
    "4zx5ChpLyDxRfsn2HzDbuejChfMDiCNGD2bisPCZj5uqeoepMMJyhEtEG2NoBWhmbKLTMy6uuhqKb8fkGrEZyNZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QVweWdcCWULRR12NWRtySfSBa9dmD6XCBsAG1CdSaNjkPXYXXaE52NS5aQNLoTJL2rSoty7CguV7vjUuANQF4Ed",
  "key1": "4mREysimF9QcdHY7S7C1uGgi2qsxhs2o4Sbm9DKayuK1NizS74TSAZqubZ4gbTbgoAjj9ERmxCgATeBnYG2jLtUi",
  "key2": "3ER3CPrc5Ev51YmYAWFPwzh8h1NytyYFyjLkb4oHKACzxxRCzAxHM4fVqeY3WXcDzuGfh5WzjaFagcbKZxb4mkXm",
  "key3": "3dCD4cQDSbpQGPSFnFKQh2PeMowguE3vdmoWpuMGiqxjLf2wZ5iFGVeg1PyRZvGEvwwHFtZ5K7NMvmtJyb2QGTUV",
  "key4": "2KjZQfj7zNJBt3nMVRRWGNyJNxQkJrYmqGK4n3jV9R2bwD6iq4PxdNikh51F7Aj6pMg3oFgEBrsAddSnDvjVjg3t",
  "key5": "3REvLZY5NY5dsKFMhAs3XMup1bKTTtWEo6hEij2p2ZRjcoxv8gegocu4JsTyBTLEhS4J3fFG5F74hGWMiS2omEPA",
  "key6": "JNSVekBj7Dm9aAkZmHjwbfwW1L9xx8SmsUFFuMXJXUvwc9MEtcZwGdE88tSEp7AsdtV6gq41inbjVmq164nZiZ7",
  "key7": "3HANvtYKFq5VBawkKR8XHSf5oVeKwnLo65P766sw8Xs3onCAUffy6ZE6fnChrxPx3YHPGT9aj4r7KE8AApcBqsdb",
  "key8": "3NaXy3pakeGVkSoqgC3UyaB7pG4AgYWjwDVDeDWMSf1D4vKsg8pDkr4aSdhuq9f7skFD5anChpv3e8fmqyWfqVTG",
  "key9": "58dofHBJ2yQBaim2LH1uyGjiVpezeCHTvfWGhsjTiMvEizY1o2EWgCqe4hChUbdpRcs88KL69HTNaf8cUQQH8zLi",
  "key10": "2cuT1vXC1CDRs8uMg4o2WqCPpam3DVYE59CR6pRstP2Hf9236LLxDheMBhzk8PmYNugfEDV5gZSQ4jKGXxYV7QDv",
  "key11": "3yxE8yKp9ynuEBz5U114V3vPbYNZuq7zSXjcraudW6X2gL6BFLyihjpFWZTy7AZqMY9yyKwZ2Wyyr7RVUZDeufgs",
  "key12": "4tPD3pMD6CFsqED4gdHfEvv4FmYLReyuprhBotvb9Lwv8gtPv9W5VJtzyi5HoY3LSp8nN7h1torFcX7Ky4Kbq8uW",
  "key13": "2CnfoVRbbcCNKQLXeFzYg1rVscKy953G7ZqYobevH6JU71USqv2Jbmzu7XgWCpJK4UhpyV1KgrC1FGhTNo5F535G",
  "key14": "ugLFZ6j2735gWAkSCxoozDigH8MvsYwpH2py8BFqoq4wCQJkDeEW5hrHG2knHrEBpmC5uMwf7wQriXpqfj3CpQX",
  "key15": "2PRghAj9uHV5uDheX1kU8RRyyqHiMuJxGfB3qhjZsKNhxB8A1TuSgwvNDXXgxu8MbT5pAsmMZGoR275UPuzc2JeC",
  "key16": "ScrqEXiz7SefEgeWMVeubGQVny6fH36u8ZTcHpkui4Zt8VfivW3CQSjPqUTSpkS4CxWXwXZPSR7zLy9xX9scEX9",
  "key17": "4guQMpJoQEhDoFZrq3jMJp1oBXT6bbHtRV2LKqrYmT5yeYHtGtaPM5ztV6wBbbEJ3vGCYWVfMRn9SRxP1vAgqNDd",
  "key18": "4hZPnB3QmSmGNRvxmhi6uojRd4WVSaymHbdXBJf4nNzxAUfDCzg1XCCzGBMvHKcY3dhewjjCihHx5a66StDfJvEw",
  "key19": "41i47fab2dSjc8LMMBkQJ3gxhBMs4qLjtfXQhEWs2cxLhSFFLzrhNswfGq4JGE6FD31cXzytbCEoSjub82o8RMKB",
  "key20": "432bipHh2fftosGjMHgYwQti6aXg9UPBj1697CuudtsYgSW4Sa4abrQ3DJVy9VrFu8Ae73sGcTnnEXN4Q3fToh2t",
  "key21": "qVNB8kuCy6c9G4JVTvZNkDfbzcuzQcmn27hfphNyHASh4CsWfM3mTPZwVMSKxeVbwT1rnYzseVe5bR319qPZkMw",
  "key22": "4NPxkoWSNAmFXwXf7qY3BEXWb7eWaT8DgcFLcFK2HM5SxSqVJjNNE2VRPuyweaLac2hCzjYLpLjc1zzA9n6KBwgt",
  "key23": "3sZGSA4vKRYwYa63ABxcpFfFafCz2ZxaNpcJ22aUk7vz2U7PZdhsoTiBMfw9rQBaBS5FLQFpcDFinRZA5kqmktUa",
  "key24": "64WkK5vUwZyX813LZwY7BsEPy7JDLCX87bKZdDkSZKNKnhcVdDP8DsYSDw3FpYWzCRrotvg7FC6XBSeq1JF4Rkvb",
  "key25": "BmfVcnMXBc8J9RyBy9kHV2RMNLXZLFytpcY1nMf8XUjtDu2uaP7yerPuwNw5x8PwHiMsqgAvy1zpHZF29hTWQvP",
  "key26": "4vGX4BHpne6BUZkiv4o31UNuVxysNFbt16YoL7Qq9AN6zrgQn9zKkCScFQwir7FRsoC6fUF9RrRuy8TLfH2G8e6u",
  "key27": "3oNssG7NTezN4RbmQrmRDNjy9R4yXXp3xbjnxMHpaTkXr3YX6urzo4j2BMgy42qZKCu7brtPLZKMgN8kAejwJgMU",
  "key28": "3fic8C9WCxr2kjGj9U6KFVJ5HrDqpzepSMtDtGvMbRVjuWSd8QEPEi9qASjVb42MNKFHCv6qc9xeby97PWyqmici",
  "key29": "WHxPUyXSArfrusNGof7jSpHozL5awihKQgByK9RDJ6RDjMqk8RobqjD9U6ARih2N5QsMHQVXhdcRoHudTtikHta",
  "key30": "3oYLbEWB9QG3fzebTZkkZyWve69w5muQ8EKvL3uUhQQeKtvAz1W386jzP2vJVVa8CGqkvR2juUUuYp2kBK5ovDp2",
  "key31": "3be2aDatroX2uYTemtXcodqzVTdxwcVSiKyPQubcjRgRifyrCiokxEnZAKjVpZbCrdz4nQQGNBFdftJkLjmp4URm",
  "key32": "5usLirNVrBryAgSo6tPPbqsromw2YG9tTVWqNNc7YixdZV6MUGnP2roGMvbtouPpHiYby1gKmsEcS8mRbJpHz4gM"
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
