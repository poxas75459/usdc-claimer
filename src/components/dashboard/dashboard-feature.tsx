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
    "3mmETvYjRjpscQwx6DGvjKJPT2zFaheF16dWRnM4vSjaew9VPLhmXBF9doQwYyv7pHSJs95n7kNAoCLmVSBb35nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EmarpTG1xNJ2d6XyNS8PAjEQpGRcPLrUaytGAoC3vQWwgexn21ZiHoTjzKvukRfSokVjALgLmfm9MW4NnMbpegB",
  "key1": "3GZv6rDUgCkVQC6dxsSninj6GTZUktqrDoDgNm5B2n6ctoZA9pmsmKjqJ4KcuPK24c3F5JB52R1KYsCM7dj5HRmH",
  "key2": "A3WLBiWD6DpdXToczBkpRU6rPxQAdoS2e6fPJWfZYRRxrwBvMv26xh5SWLyZEKQjeRpLvaMkhp56ySosZV29t2k",
  "key3": "x3fjHCZ5N3RmSQznpepjjeWbJBbsteJKT7bQK3zk91tezv4xZfNBaKu19TkpyuCxYrucs5yxwBCRiQ9g9FyHz2x",
  "key4": "o4pZrkn6WFFrBCVwuR5EtWjxsMwkG8iUYryYRfz1EkKekQmat2gFWiy2Li18sJAcydysftjPZymryNs9942Q5Nx",
  "key5": "5LeFGDdjxzzCANBVAVhXEdHVpN52iEhAvJpPXwi7o8pKzCuQLFxPLYqR8JRQY2rR2NvXRZegwrabwygBghe7Nfuk",
  "key6": "67Gdv8SGPV4tBxa84U1GfTUBnrdBgoTHy94pUj6EqihQqZgoJCR5WaXg34zYsec5sJd176urCuk3XRDQqvQV7FBe",
  "key7": "5RCJz6EghWRNF8BHKMbZVc2TQwv47zpGjdkgH2MX9zoMt1jkmwxCYHvkWgm25MYDZad1s4h9jn99Yp7CwWbdgjXk",
  "key8": "5w47sk3XgonxzCjemKqnY3DkmFX37GjXupSihaEyMpfEVv9RyMWKvtoYhy8P1kZxZGytMM9syNiAeSq6DSpgvXZi",
  "key9": "5MVR8oFGWcJr3X1eGdctFBXJ9Aq7DsbV5TxqMHmm8FvVxhhVbHh9kjnfpegCY8D8AX7JqPTSZkHVxAWPAeKeTr2W",
  "key10": "5XKx834fzvWkNsQiSZzLc4SKsLHNMVvSsahgXnwpwQ7AA7ZnqtKTe1AEBvs18N2rqBVmyRE4cDxtH5NZviDGU9xS",
  "key11": "5RNZhpEnaY21msZDZ6KuLfYx5LdNQ2RnL2yW43TypwaafDZVns56K8HTMYgcjgnNGEwHEP8Dr3b5vca1s5t2RYis",
  "key12": "5PXmfwTK7T1z3fhMTcXTzi75QEEZjvyaeQ1iktDwkxPHCSASEy8ks76HhLCFZpVB4wms6KXwBvRNedDUW2sGuFMP",
  "key13": "4yqFgwGYZc93HFYQ59XQ6KhzBqEeVtCJi6aHMZqQqKviyLFqYTichquQXehqo8rXEwfjBY3krfwCMzDGNQPBKyZT",
  "key14": "2fBKe6XW9jUuvVBNgPiCR1r2ZhbAAxUtJ63D9ng4aU1qwDQWqAxVYLexHCuFPJTx9MzAtaQpwUoEyaAKHJEzFDSs",
  "key15": "5axUu1N6E3wBPNezpxdPJhGVhRd2mpnTX2ULoPCkTW4drhQ2xQGUptnY6zRFNnbxA8gdQEJMzPNe3n6M7HVruJv5",
  "key16": "3qYCWJr4noPo7eoLN6Bxwg7DnBvq6ZzMChh6mT3DQH9KvpMW9oTYtSYcBD3aDHq1nsLNrQJH7hVDsn1yVjckCNbo",
  "key17": "5Ba8BxzWTseZRUAXZgGmB8ZUCBqQ2TAQBaXTZha2vZbPztFAS8gMEY2QrAXbNyPb4pZGvSTAkGCNmUGrBod2jhe8",
  "key18": "qNFgrfQg7MNX3TUj4dPmkZcRPTtsca1E5LTD7Ew28kisdRp4N2fFtZTRtT7s4ajTWxLdDQz7Aafqgjt8S7SdgJD",
  "key19": "4qNitzYcU9k9Deg3KJ4DcYQpDjaYJAUzp75Skt7MBe4ag8cWHvhWVbRjqpr2UKwiQqoduUpr6xhudbwucG74fGTB",
  "key20": "53AJz62mndXJYPE83BZ52YU8dxEmbdNGQk3mx7THpUKnnq9BXZXMisnpaGwXD8kHvaydTxbRwLUGz1eE4DR5yESm",
  "key21": "2AEAKe22TbcXfNMZ218aMARqcXuFkyaPTtfep3jNP9tQuFz4EKWXnG3ZJgpDAx1ukiHS3tQNaaxwAf36jE6JoChL",
  "key22": "5puHhnqwsEvcpMxYyMbmJsDysxYgCcCG9qupQNefoWBQvqCYxgcgz25ZSg86Zs8tKRrxYbEH34BeCLEZrQgor6hh",
  "key23": "EFVvL12M7jQG3pL7E3xtJ1H4DGieibLokagX7sZtZ299BtfYpzvgNwaSFwtwbHSiroV2uJFfstiJbEW9hpeQZba",
  "key24": "43BP4ai9SWKwkRiHAWmM7FFVctx2RbZ57SMZE2WfjC8bKKVpN5AScR7K6ZHZtqPS2kiUGLMVHxMYcUZzQsPDeuPT",
  "key25": "647wCSZKKNeiSbxzcsKG5TSH8LRXrTJWk5zPJhve1BgZhC9auMLNcvk1rEXPiE2XMzmczXDXUsqcTRytnXobDT2m",
  "key26": "z4fddEmZKdHV2Bd8BsnVZAELSUZzZHxdAfFmzAQBSxgRUgsNuNtEdeexNRVR4GWemkkqnNhrci8G3BFdvwf9tFw",
  "key27": "VEuMuj1ruPXSsnHdFhizwtC4ZP1aTHYmHZ4iTyuzkLnJnJckxNFxBvXUxsDQt2kGFonYtEikCNkYab33ftZLd7h",
  "key28": "3fvFQrWUza2RZWv6WyvLyyTMCPHbA3qsrt8cQDnuQniZyHnAhvcnAxVf99ycSfHURHcPQ9N9TVh9psUG8EMJ88Xx",
  "key29": "5dwQw5gfTybm2JiChFnw2s885uXJ2wn5GKwNEkkP6FupAURH4d7sswBRhvETbsHPNHjMRpXJNEMQPkvLezm94PH"
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
