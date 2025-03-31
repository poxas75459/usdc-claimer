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
    "3K4Zmvs6GuTc2uXPjzbRip5Bijq1EjcwWRvNE2PpZZN4YVjPyZEAB4xbD3mKWT5mVJxWDHKGV2baHsnCig2qqLd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3efgev4E3ruWdkdZSWfaLge2imaaQbCaxPV8tEmUK7EKcpgVsbbY9D3rHf9m3pWe8MWDHTsftQ4VbBTmbXHV8xqT",
  "key1": "t2qRk6L5ANY8TZqzfcMYCWKo18VvvWucE7RCCSYqXSpXegZWyf9EaCp4jzPFWZ9V7dJiecCvLMTE2Pa5RY1F4G4",
  "key2": "2ST6UwM9WyvKeajjsMbvnTr9CohJHAwPqZYxupdVEMJB6e3MGf4sfgtnerEQf9o9u2EXkCc7QkgkPWiSBb2QQoZs",
  "key3": "5iowWS4YnoDZyHyKJo7HTcA7mYL12M4VrS2hqMKVvx7jhYfZmEneaS4eKCxGTmA4VtrcjWQ3JbtqdZpWyZJsd4em",
  "key4": "2S9dmn8JCBMZWcPFFGbUf3Fcp5zyj77drQwu5FzYd8zJBwXD7AZtXqcxEv5XrBqHSHJzdoQJVJTgAp1nc88KPgKi",
  "key5": "5nfp6rSffJeA9G5QHjjiopLPWdZ24JTLx3bL8X6GKG97SAX6hcfA7uGQDBm7kGhtSt7zM9d7bxdUDoYpZAARi1hz",
  "key6": "ha1qXK1wVfjJjHwSADtJQHbh3Em8BRSLL5H3pkyvQWivispVnGEhx9N3dRmLKRSqHjkP5sek3fJu11drAodb3zs",
  "key7": "2VGMYDysuRRBcwpKxrccPYcp6aqrGjdgcKB787U8GP5yJtiWueNWZBvV9XEFRen2zL9mNi1BLpXfRVf6FCnJ5xzA",
  "key8": "4mGLKrYRGQFCX17Jf4o1rhp2gARsyENZQsLAEyNPc2MhjUJfqkM6oSnFL9F4PKNT7GJZA5DH4yFnza5CKNvXeBKx",
  "key9": "3Yhs8zx3FE35X2dJGH5Yv4i5YsFD2CWzN22gUVpHuyouyu5FutkEYiaqXu64eGeZ53jUqRBiHsa1QhQsyXBVPL7f",
  "key10": "oMaJ2oqmJPTYa5FHRWDmuM1g24P6kJK1B4cnzAarLNUtV6DGxw7DicWpDU9KLapjvh4ieKeexCyQddGgtZEoWEb",
  "key11": "NcAfpL7Uhz1WC32jWghTaJnqhJ6DrSNvFiJiei69RAFBybd59HCjRcM48qwcgqQAThJSZZDyGStU3QyDbEDK3rz",
  "key12": "33eAQNt5hGbRsEzBDbZaoLv9e5f9EQiFGtJxUqD7fxoAw9GueQCqoM7tSYPHDqA4SM6EBooqu5zHbsQ8CCRzDinR",
  "key13": "2migNn4aFeeP7MGMkWNJSCUtSMXy4CadoaXL4PBtqKRjhArrwo66ZBknC3MQ8r48MA4a7SLgpcJNP77R1ezk4ASi",
  "key14": "3ygS3ivEB77Nn8eyJRyd23PchuEKSahGdPC4EewTLRmCHDZomUxt7jei2XG3uXxsJG6h5FUrNDr7ziddAaNiAcsx",
  "key15": "65ZXdQyoRE4qzCmWwLPCwLcRjSMzUdbMrFUPWSCecUDd83ZkvpH8hrTeE97eWzp8haUtSWREbjnsKf4n7LVmeKmP",
  "key16": "4egSVMffVT7FDVBnH8nrA85JBhKUwaevq3oAwrnLkDvdBoHo6ayRuZfFGrVKhWNg1RyfXzKZj69UK2Ske2kbdPwz",
  "key17": "pMR5DFv5r4nXLSKoFQBN5TudZBquGR5gPKBBTGLf5Gj5BnpCJM2jr7wvtKHMhhiPajsXSymuxKEQ5c1gVLWgwVc",
  "key18": "3H6pn4Axz2zzHZ4Dwt8dDBDeRW1tdb3Urgak1FcnDQxiVkZfa3xAECnF5UD5K3QBFMsz4PH3fHUkKP75eX2kuzdE",
  "key19": "29gQdJ8Agz6uN7xkLn3NY2rPFQ54gP87d7zTvKA4gdPhCdt68XZ4CJBoYSNojsELuncCT9mQ6iwBSp1ze4MW6WgN",
  "key20": "2ufNhYLteDoKDokNKZ8W6dZoDrgVYqtb2qG87QLRfBivfCVmQ4kmhRRjGFHjxQRYqAFwrewMQS3K8kik6AJDjBBQ",
  "key21": "416dxbNXWEWiqC2SLY8tfPtjvdPFFJMmu8AVTM4WHyeWoU3eV8kgTdgVSBoTEFx7oNG5V64kZJMx4KfyHuTa9Xeq",
  "key22": "47zCv1HTkC1ZmpaqDHAu13GfEssfnoqUW2EkYZXDqBmzB5d55LAAretAwURg4vdqNznFvA2s4QwTAQppV26WATTy",
  "key23": "3rU9GQfNTBSLmRf5U6Xkore4f2pWK59hZqVUYVcMUJ2tRwLkCpLqBCymB1RPvVu4SzbLhHMKFfHTfXD6pvREH43r",
  "key24": "2Y7eYvGrq9o7NrwqiWg2DQjwP4vue8a7QZzjspKxMTnXD4BZzWqJu228boodQXiZHLTU9ZJwXfVfdP85WMuByCSX",
  "key25": "3rDZPR9UwR5x2h1tTfjPXR4aYMireRpq5iiJzAv7qgwDy3ttfqFR6kZwhztAYk3YGibvyj5hKhprnsMGVpsrndHK",
  "key26": "3LX9ufnJ6PxcA8z45kyykFrfgDQNtXWtGrNjp68NmHCL5f6cMjjBJWgedKjQKgSnrVs1ma9Pwibw5EysauEiPiP1",
  "key27": "3ZQc6irv62UtsMQfjovh5QjX17LkYVeG9zkyTBPXuU1BmPxQi4yxtXthdGghX2dKwhDuvHutYKfkYgAGGEDRCeBn",
  "key28": "3QoXUwHbuBdEbSCC7CLSBHpxcjS8WuoktDndRCNf7qUSZcLFDk2noCKbjo1ZFnSf5cU4TF5mMFPmboMqfJMdAgvs",
  "key29": "2tV3B9Xy94R1NqGDNuiYNdqbCSJfrKSGWSZPPdDFqDV6wBxB6KgGPeLjxNaWuqxeX3JYvEiJrRAwTDATYr4M8qR7",
  "key30": "5XDAB45cizkRM1gy8uAWgq82i8n32EA6sEs3kyFpx8qz7n8guHhuzSwAwUoNUG7hynQuMHDjfr6suya36T1Dft5b",
  "key31": "4CLUch5coHz1hWs9R5g7dhUoaGAnh3ENBKhMUJmDqBLkyv5XWyYRzJ8bKDhh1tGTRqAtRZfVKkVwS14H8Y6Wt1zh",
  "key32": "MQN7zjqWkwmvDXz5CKYXB1hkUrCFRcMib3JugHRyQJFryqaiEazZ5BvRf6oCjziFjVa6Dccj5usRJ6kb9QH6xcf"
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
