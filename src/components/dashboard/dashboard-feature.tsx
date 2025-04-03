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
    "4Ejx1Cti8aggBcZjfw4sA8H6Qo2MaXLNWiF4Dsh2HeZKrhkMPSDdAQVShrhgCbkJEHVxpXBwQGjqKfWjFzKR4pwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65bQ452FnMbsXsGTj44aJTgP2DeBgmNgH9HpC7XHZiubwh4cpZLXNs38Y6oPPXh4kLnRGkAcbU7taZs86VaTsaSw",
  "key1": "WMWvrVnBZuy1CLJxXsApkF2qQrVtMrm4KANiFvWkiFjNca6eMUYaaY5syGkryhAPxtMJcsTJtySQ1iKqSyc4dTG",
  "key2": "NmczeAavoMj9pFvTRtLCAJFCQn9Lt6NKf8QR2BtzeyTtwq9VCSHgsUKXczsKFoerM44RehC9rMDwedSYwAddJ8d",
  "key3": "2L7kXUQs14srzxyvmYQ7M5VLTfqr81mkkYehRenhuhDv1UPvMqjRHzgCY9fXWujS36NW9Z1X22J7GofnR7PMakpP",
  "key4": "2VRSxrLSV4LWnqv5b42kyxCxk8tZvnN2mUTekLxd99fVme3c4vt8koTHpWyZv9ga34R2RzN5mXKo28MhRoPHNAP2",
  "key5": "5gTn4Gfqzmtvf2vAnHnSuq5ZGHfDXrQuMn4tH6WttzDSHWz9UfRZheKnjTcpb8kSuzxE6CAMamSTwaU1CAitjagq",
  "key6": "4PckYVx4RDM1w3jhvoWx3vCz6sUfyG3PXgmQ7DVK9ozmvWF5p4dVKGyM9oYwm7xHExUXPdhyiJVPm2LGocmV27W8",
  "key7": "5EfoVm7NYnSJD5NAiqzsRBSHfeQGWwNjYYFYbVsLaP698KcVVvytNJ2JS4drnXoCpCnGjbTFAH3DUAUPFQe3CoE9",
  "key8": "3ASX4aqHBnbN6aW1Lu9bDJ8XCV77DWL6aK9EjjagC28QwAsKZuDPfXzqzoPbW3bGcWZ4vZqcmsUNzaQJBVasArTe",
  "key9": "MVP2HvNdNLvPD5bK9hidkf9sXVUJuSREWNWaSFigLCUFu54aRN5dZVVGpezVKsRi8vsQDZMvqMMMT9qtg9Moymc",
  "key10": "1R1oy5PEU8RjQ2dbSgfDogpA2E1UX4UQfUPzThQwjvGWQgKmH6vPgGiVPUpMy5jj5f4MfCZJU3cWVgdRyR27EJz",
  "key11": "5jVRER7rDizEQP3bq1fXSaPrVFhRYMCbbtz7rv5MqTpsXkw5e8tASXFFWARLgnLGkFEu4mzHDgvdsBjjgLGQVNpP",
  "key12": "4dQgEe8mjXB3N4g4HygEMXVFZWo6HAs2nTQD4ELiRY8Sf1iUKoE82FCgMzT3zqc7HkCztnZW3uPqZEYv4zhqZtfH",
  "key13": "5o6mDzFuMqfFEjULvxJrWEVja1jPQM5E2cKJAeG5Lih3FVX7ZEko2cAv13YisQwkGwjBEvrE67tftos8VrwVuLJp",
  "key14": "2spWMnRL6oDiqMGWbETBK6EzcnHWFmZGzxEhj8j5ovSbDR9jnweMuDMYosuyeszkqqioTjsxULxqQuxafALYuQ3C",
  "key15": "RCwuqwkFLRBq5k2VhKdqCcgd3LA3nx4Ps4FurqnYGFSJ7ksa4DeomPvPPvtiZqP7gihPSZCdpn3YyUhLE1TVWZN",
  "key16": "5bpkTC6Dc72VVjFyKU4sm7vKR8NKVPvu77YLkGHbJxBqb22Pwehaaph7HLD51WsFFvAvcfGTUpCe3TTsKEur6EVF",
  "key17": "2qo5k441qY8eq5fnNHDUFcr7AA6huAwzu2eCdLja5S1vRgE3nZ2PQCpJWYC5dGETc6kT1N572dM937qhTUwuxo8e",
  "key18": "2PkGDz7foqZKHjfyvfaPMMXcNiLp4Gy47Zv2C94bKNx5c7aTZieM2Loa64XqTc6HzDKuuaEEAb1Qs9Lzji6LZ4Cg",
  "key19": "3guGSzCxrBS6iavqEb7pDWE4G6CZtJNp2LAw6Tw8yW6cRqZD3tMEN7eBJYH8TitykuSNELNsFxKZCUKcdNtVHv18",
  "key20": "2uqxYh5CRyXrgPFvG38b4esNMCxCK9x6X9GDNE1A43iEFsWM84kwULDntSNEty6Unn4hvP3bwBjf1whFtXbuiCi7",
  "key21": "3E7H1ML2zKWMTGLLxHiuEzKvWKS92VCuVVEZyyU9U3V94kvr5F83bgzgyk2J7JUGS3J4Z6SXDYuP1V1BnqshBdC",
  "key22": "tmV9Ww6UHbMHi6ZCh6Ku3xeXRt2gpDuknVxE9HzzTYu3LUKeFEjPL4hSGqNbDGV6BvJzdzaYTzdX5x3qzkrU7Jm",
  "key23": "2nuRq96LTJ3UJ7x5SSoSfwcfN8dS6vzCu4CZ2uGcNfQrtxvwUmvAg7tFX8HW9qbyAMqXnKeFfhKQj7mLrUu5meXy",
  "key24": "2n9qJYd8tFjdRVNszGwZt1AYBBJnZVgHsMUVbTx8HU15pDcPAW1Twb85qMiSH25YZcWPPoCHbf2J7qvw1wokUmjj",
  "key25": "47DDmQP9a5VTjxg1e2PRuA2q4gCLxXHhDxsAcevx92Jj4rpzbGuBRYzeHwmYUNmUiKWj2eZmYy8fG9xe3WM87zxX",
  "key26": "51SMGyo7NhDTtXe8dmAmpgULZvE6CgLWUvo9iuUyFYTMJwHQjCSt6K39pmZkGuHGt77g7CopZazadWaeDY2HFcdq",
  "key27": "5YyTS6PS1Fodp6gW2TqoXgU6uDAp2JWCjyBksQ28QFfns8hS68cLxJELeN24oHBPZEGfMiMC8P9XoyqwbFX31fHX",
  "key28": "2C8TAJs4RdddkRcsDm4vbH9qdykSznx3yZ4accH9nR8a77fmhudG81dzafYYGJDVEJdQmjAjvPeTzVobaXrHjLYQ",
  "key29": "5SeJrgGhQ9ofgu3LLC55yPyfy1KsvzdXBdv2fhwGA9BcCa9ecdQRAK3CpNZYfSi8GLzQMGtjC5P2FZnKa7krdcuN",
  "key30": "5X9bC511MaEgxsDyt3oNDTSX5U1z7Ha7ixdPAv4yjpRPvhwDDoG8DakkzxBgHpNQ8vEF9mHvPcQMH5voXc8den3n",
  "key31": "2yWTXkhXVGRNWwpf9ffdqkdJDpdNyJNmeCmyfg1Ly1waoVLfrsXxd11oPYLruL3MEKdc4HkUVuzxcVoV8ZMA6ig",
  "key32": "3RaTc8pE73tSpvk4sBhoPdkhHR7ksaqXAZqBbKb4u7DtfnxXVLoAU5nagvKdUikoT7hsiYg5Jw83tU5C3iwZzgZ4",
  "key33": "65ojtYsV4bmTUUhkDwfAantDdwycJg9r5Ex6xwXNQcR3UU5wFB1NcvjYvBbfE5DCSiAFn7qmPa3UmAmmVAtqvRPb",
  "key34": "4HZzwsM7Rsow2E324ZfEHpcvY18mihRiaidxuYExpLyDyRY8nhFeynWwp6HDRFgCT26WiAriKN6B3yXY5xrvUuG4",
  "key35": "5f4gRKqzTVUBuxe3XRpGLgiDcPj5LE4VQ2Av5xodh1cKZ3yvJfPcy6VZbvkoEb8Ga4kCx1XjEUwQia1f9n3pG1oD",
  "key36": "5u7eeRyKqvpN5Wbr2JNA7FtHiHvFUf5TXfGc91Km2TgEqDeL7oGT7q5ALvVrwCHCocc9v434ZiMVaRpbVGEf1Gc9",
  "key37": "62RfAwa2BJoP1DUWpLASc6pcdCuuxkMWXFePJE3ZYu1kBWSAEGHqWmPLvCuGkyo4jgEDZx5LBSuMSB6GPAtVfcUg",
  "key38": "pN9Mjfn1QgkshQVv31my8q5wXYihEo6qjGTHVSYhsV1MN8yUPkhmQ3kXHTtQrhAzHKYjVTNhgQNaiorT24SLCxv",
  "key39": "4HXNN2kxgQ3qeS9skxHmwQCG4kipr3KnqdUGVoGc1znkkB1JBm6cNboi6nnWUbxnExLLd4U9ex9YfPBTYU2BBDzt",
  "key40": "4pJfRXGk2UhCxNFKasmUHKcMBSksstBDfQW1Z59sJ5CYXZcJVG2BQtnosy6ukVRefUZNiwnq2SCuBqvP3o1f8oMB"
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
