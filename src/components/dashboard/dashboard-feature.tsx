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
    "2CiYXLc3cPsK4Wsq3GDEYg9PRPB2Q6UvnAhdvTomdF4bEj9piGBG61zJ79RPEvfWK6VG9zbp9CjERQAs6XjzuxQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4adfK1Zd3y7cLGN1EL4pNrChnLairqaRyiyjr7mW94Q58pqqeGcoYaAm63NeBRdHsbqB4H89LhRvK7WCoRcQiZzj",
  "key1": "2qqxZNdr5nshj76nbY6cSLngaS4r7SAnppSpJ1MXTqnzoWppsMU1nU5bwNBGx4FLueoD1D6gwpv5fVUZLkC37NUQ",
  "key2": "cakhJTjszhjVL8fYHRSZMLXvwstyGdHd4w3d3yKe9LCtm7Bz1xWtXWjAah49KoP1QcCPbpsKoNM8MDJqHVwshqY",
  "key3": "5AQ7S9Mnnf9QqyYcZ4wkwLqYdxJqS7ymQQci6M1bvUknJ4Z4PgtxzMVtJv39pbRsbX3DiMiSxbM5e4nePVYSC1DA",
  "key4": "2B4RuDrPdqGdzbgFt6LRt5zdzrcMC14gmBodX1i5TUafJWMDN5YZdi9yUYDmgGPfPdr4xUmUpEzTQR9C57sqXc9T",
  "key5": "u7bXTqxNh6dm1zhxxFJJj39tvUCnkdYonkn931nNJav7UShjRB7HPsRGh6itU3HedhSxCocE5naEuNdafMCM4qs",
  "key6": "o7XamAdHg8GBD1U35TJZug8QXTKcv4pLPqMnbCc3GKAC4czAHwFUrU9reVzgRMtevQpMBwXYKA6By2k7Dnp5ZwB",
  "key7": "ieHCV4kYMCufjd6iYd1UqtAkfxn2aCTxh28hpKToGzeuw9sAhUW6XEa6qDnAsh7zw6K45T1qddU6WTYtGiaL71j",
  "key8": "34gvnRX8Z4k2R8B56yoKA61ZSLdmycbnJMvoYoipZxkaXKMMGmuWoNcFt7DHfcf4LzM7MRM6VSCFBf22ctinBtTP",
  "key9": "EVJU8X7s5CsSf4hDtnuKpQsKvBp1Y6AwKDjxzVX4jjRYXx1oRLvrWn4Y3fGH13HFUesBg8kD6fQ2HLWmQdCVfmk",
  "key10": "57g9dcDNRJCXrkX4aauBif674ksiDSgXn2mC7eBskzgYHtVmanigfCqu3eFbeqBzPAHLrkAKz4rzaQz7jCTQra6H",
  "key11": "4KK6ZbDm2WAomA4eATYCo1fTMHyC7Hfy2uyCe5ERwHathPBDWBrBNYcDq54n3Kz7cNQghg9VoVs6Y1MmviLnuqeN",
  "key12": "5ViwbvWLwapDThDd4q9NM2RaQ9VEpGt9WcpJv2CHW9uH4DFQA3Hz2uBGgWn8F88EeieqZAULSF5eKH7RYSHjDQjM",
  "key13": "JXMFNxBUAjgnevj64oVgYmsVpMUjzJQpcZ5L7Qbc5Zv1wpEF92vwTUF938zQufQcv575PgpvnzPq2KPJJyeffuK",
  "key14": "5GJrGfR6hzDnmi8cdydGJZ2LkmgPrfys7UPUSLvJdyVhqaYbg1ydguHwmA26uMhaXhKzPfr7f3h39sut7LGNYdWX",
  "key15": "ZsngaJAnQWfRVKQkryfTiRN4NbPGTPrG9geFGnVbrJ3Ls5D4wXUVBNK1HUnyCZKCJF3zMkV86Sua8pjNJ8VD2oS",
  "key16": "2osvoQCt5dZRTE8W3wFf5k3fHsR6T69mx1GmuDHe46qwPHuJqSTLogZUpkj87u5i5fjs9id4oFq5t7zY8DbG1tRX",
  "key17": "3ctDUKEi41LfwAyaj2gToSPBbUqsdHe6E81g7Tfza1yBWqQT3MgaLSRG7d3hnanJmx197FGsyPn7KJJzP61nzTRw",
  "key18": "4UbraiWdZyCCZEvN4SHhnxgxEvx1QvvVnYv9MHGvfRwSsLpn6DnmRejdBvEAaJoUnVKUiovWTGvTX4ajy1vrEvRf",
  "key19": "5ngu9SZRs5NSX5ioGnY6oyCqB9xCiGvEF3XqvnKjVKCp9oa2kKgCgTYNH9snaE4WLJVYTMDRZzFk58c1c66WYG64",
  "key20": "3pqgp5gq3PwTSpzYrPnxbcwi3ZhBEaD6KhUvacUXwsN69B4uCDrCn6YJWbLmQQxeweuHv4Q6h7i3nagp5uFqb63Y",
  "key21": "2wxgWJ3T8LYDHY91FAhagAT1mX43AjAw2j8uf1j7oYHtpdVYwcihqj8zzkR3uJ6q6QCBHAEmcYCy1bZyQDujRFV1",
  "key22": "2YX8KvMXqd2zpCJ3pybEXF1XSE5nM2uefK9NBbKoTse9JttQ6sRYDo973ii56QWcefxchwmsMmqAj9YmeXEpthua",
  "key23": "4VeGJj2sUJFzjNFn5dYTLzrzie7reXMhFsQyW4XrQwzBSWtNEJTtMv4Yort8sHRLqX3Z5BpAzvNakqrf4oWDet51",
  "key24": "5YvaKH97YJzFAKHKzswmgYz3j3WWMwzoywA9VR7j58doRFkhHPyqNs4mFj17RtAUbnxjMmyDJqVUbpmmuTumpGVV",
  "key25": "NRxhy162wGEwZ6Bvc1taeFwx6wv1EGqp8oK9RNXeWviEjsDGXoLuhqP3Uo1p3DTcVz4VgxCs3UhSayGsSZrWk2p",
  "key26": "SVK23HJvCpmFDFdfNrjCib4zLu3S3yo9uDduFanRqsKwvCe58swGL9UdQhc112jKLMErwbC9tRs5MSVPB7PW4c3",
  "key27": "3GrCTzxzducpxYUx1xuZ6biz96iH7b8VFCV8wApZtiWpxWNSmhSmEghSPDxVB9LSFqwiprjtnJ5ea8hnhfwRzVjf",
  "key28": "YVFoq629qomC6ma3jyuqZZFBkSMy5QmYuWVoV68gKjuQtxEb2amivSVB6fxnQeFyeAsqavMiVjiQSAZHVxp7wvq",
  "key29": "4irjgJr6DvXq537MFbSJ8n3FMNzHQ3Tbyno16yPLfMGypkZuV3ENa95h1YScVQsNYE9ttPvyMVSeatLpiMxETKHK",
  "key30": "45bP3uBXhhduu1dsE6bD3zm5nYctYUw1CccE3tcFpCet7QbFG6p9vDsVpAxExHV1CWSWVujMQsesc4rbrJCxuzn3",
  "key31": "2Xw9tyD83HsVPYQgCs9K1GcDijUnrLB94qDwDefxZQLkp74sVZ7NFuP78pUikYEun6Y5ugLtQVz4dG84fGjq7DnU",
  "key32": "32jCbJtK9y7RQwgY2UGs5EKUz8Vb8ynhTM8bqRQQRmYpTxK8PEPsof3ExR8KMi6J2SHgjpR4XYMh5mXz7RymB2Ee",
  "key33": "2gXYnr62sddivUY9T2bovvTNARGCnozxip4zg6jnxXL4yEqi4mH9ZHqYfyuYEtHTnJnAWY5LVogen55VRVZe5Mus",
  "key34": "35KSXBkMG511Xpk4kCowKXsXoHNJnunuas59jWNo7fG2bM1VS64Eb7NZxzDeDMdwPLcscVtyhvHpnc3ASWUdcvei",
  "key35": "bPqgQ811xDsUKAKjEpaZRiVk72sBDRFEVdcVUaxL66PZ2ynfetKknKP7sUAWHbmYzJ7BDhER9w6QJQi4Txoj25p",
  "key36": "AtZ5X47PoQjkskX96xizfUSsGgKuVV2JDhBrb6KcfhXN9BhhmT9ES29pQBXdodUh94f91KAD2rZJBUWFLXXDF7r",
  "key37": "27U4XjPjvWv68uUQyHAoWEcqvNnUFZPKws4hKSqHGAnA2FoWqDzSqwimnGU2wDVUvgcyQCtmthyKXJLXQ8SSTQzo",
  "key38": "2CYygkVXFtgoF9jwGahZx1sfPf86EEDVjkJRuwVtRyPyNEvweSLscVJ2qYKQ15mXaTwFtUEYaLgC7ifLWhnCzCuo",
  "key39": "VzLcJp8QSkEkWiuighhqz1id2cL6v576CMnXtG1T5w74Rnn969AT8zVEqTvtcT3iSRsDNRJRc95SZiSVdEoYYmh",
  "key40": "2S9fy7Q5WW6UYfdwQS3312UGNfBu7D1ZLER1dHrzHFDkNuUvHKv3UAffGMh3gFg5DmvsAT87iWRMzYkLrmg8p1Mz",
  "key41": "4Ev6N11wWE1vg3tRUXtA3vjgaLTH7LXDxy6WCgQXwAFKA2SDhvX92Xtkxu96C597xTaeNjEkZVE15gHpeTwm63Pq",
  "key42": "4mViCsxoxkEjLKuqq5kcqQDXMJr8LHAZnmTZxgkiXty5WrdgAZHkfCETZjCNupdUtBVb1uvitYFJvKPCzBRrBcFV"
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
