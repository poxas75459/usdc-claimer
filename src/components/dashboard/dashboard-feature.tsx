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
    "2HVaqetwDeH2cdLsKEUQeTQ25yu4EmRftraNd8dxn4Da9UxXhWogVBYcy3Aq9eTgQDhvzEz5SD6ywyDnH6dW1z1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ECNUMDxWjBL9v3fo8yUB5hFXBJK1uRKJ571zgexsrEN4NFp7JCf1fNmjVBSYn6hNJJeHHpvH1s1vrYX1kfTQjRT",
  "key1": "59HwL3nijcohKfDn7u7CYAEsf53t5FbzMRX4fDdvc7Q6aPvzno4ZBJDRR7Us2Mzcp6mKhKmRYyoaa6rrDMc92Egm",
  "key2": "faPMqNyefFWYp1wqR7kPbUoD75n97KvsnwE5MUbXjxqLBBAQoXtH9gv7c2PVL3VgYqLPBqxE1wojZnmJv89NxbJ",
  "key3": "4YaFDyWdhhaT6qX5BNAtJ5tthvXQNaYjpVbHDbztBHeaGJhP7pDJxnkcZs2og133gC4rtQcQ2w8vYdrqNCY3AfTm",
  "key4": "3C2BPeqt6nANRmCvjfb8ZSyoCgNGh3EwTdAsPXzywku1CW8as8A2gaXFrMeuwCy2gWURt5kstAtgrHyJePkcX6VS",
  "key5": "5WSp38NmaWKBJoXbHBQPrw2TDqP7qKKXj8t8MYvNpzFsDzqhbfa3onVCKVepCKFhVcjpvj6uzwCJSgnmwahGDZLc",
  "key6": "4gWKUbPiaA2H1jDnNvTvsE9P8Y79bS1iDF8kw86sbzKLQrFEvhyMPbkKfzhwNsjxh4F7PRPj6M4b6cBgeb1vxrJR",
  "key7": "yCpnrn92yAZa1HxBMW2od6aCRvpG4SkzouZBUpATAzrHy6nAkDFCzt7aZinQsnhKDeGoAmvxxxxkv6ALz2PvgJy",
  "key8": "VsNrjNyDnCPsvxafCr14RwPLt3ERRdhVa5w2JKjxE6S3kXqkEwihdgYcS5fN94M1WCnDCpED2Gh6ogJnACuANmh",
  "key9": "4ekFKutwQozfc7zLLYc1mSjPCXvB3FC8w4q1pzCd3ULuCtGDTVegcMbm1DxkkVk34hg1WENMRtGsznt2kFnkY39e",
  "key10": "3piqYpX28TMnsUejWvB6B1ceKn7HLmVWwm3vipq39yHnK7ZTJ4FEtNxNt4seAgx6MDh2gL1idT8CUzWfjfXoA4TT",
  "key11": "YfUYu1v8T1RcmDMSCsGn2evjoDVoE5iUovg6vbEAvm9BJnutVSVUMmHwEk4Xm1emkFCEXaVgk4XP35A2SvFzqKc",
  "key12": "35LXxSGxf1A3XfU4sisCjZA6jZyc6Pzw8kmKbpUhjYYq2vCL4n3BbhzAEYFcV9rSsivyj6FzuN44rTjAeJSpCtyT",
  "key13": "3SVM4scdd6JG2GY9RDNvbhbEGe61cpT4cYdsjt6F6RA8uSa8WcvbRBv1yEPCYuBkXiJ6TaKp2xnyY47J5L5EpqWN",
  "key14": "2gcVC4Dmymgd8RsyzgpmRmNMzogCV55qDXVFA2rzufJWXX1J1fDMxFT2eEXRfGHKgp1mDUca2FPhJK9ncUvagn9e",
  "key15": "3KkGxyhfQm6avxdSXvCEeLi6GMmYbEdD5y99fJ4qNbpk8gPQjBQmcBJH3NwFuD5tRgV4SnniKgD2yFJZWbPtFPFv",
  "key16": "5QJmqePH33zkg1j3xrRkccaFWfMFK8fdcAcRVjGQZwQaPk4SFui2Z98LWb11YAMMbJ5ZzgGe3pFJmbxFFfDkMxkp",
  "key17": "cVDif3qwXNv66rSfGWYY77S6Ds8K5iKAdG1cs2iRkfrHgiz2JGukZUJ4fJ2cssiicN943zps3n3DF6jvsZQ44eV",
  "key18": "ePUcruXmyzQvYbwakD4ioscoUmctJqKvzagLB2ty1VGbHV9CQ7DdWhZwoGHzJv5MjCpraqKg3LkrqQXbNWVeVSx",
  "key19": "42YgAf6943ddtE4EJbnZU38aBSb7ip8k6jDJeZfhqNmiSL4ZMEF4nTwLiydVs6obC9a5c6w2FDtVer52rHogNyxn",
  "key20": "4XwJkmgnBeHN4sTvUNvpwVmERceKz8zoWFEVEZPyy7bitZeBZceM83zULkJZ33U8YKcWgaaonBuJiSieCT2tSaYR",
  "key21": "41dpju8mU4opYktxTXQZKuAVkZTDkkt4S3rEh6zabmW7Czs74mzB5hVn1FFT5XG3drbndA8D2p75fnegkPkM2zpy",
  "key22": "2Umd3hZ4qrei1rDi5EHj7xN8drRAaNe8eHjYSTa8FCEzFQ4Th3VnVWRwp2TwVyr7LDNTooFaYZhdqxdijjuLppWi",
  "key23": "3MyCngQg8SZvosaSVdvdozDMNBGek6VTe3haD2woCYuS8SDs6m5mAuqeSkra53TSixBPdL1Hj5yqpmwG7NWosmiR",
  "key24": "2QvEbUv9tB4PazZzpFZHzLxRbW7VdFkaKbCKDzFvPx7hUgZ7PvmqPfFXfaoh8XttZvBPp25Stz4NG5RY9apchkQV",
  "key25": "MvRgoNHSCgJmmRYgn2ofQsbS6PCsJvLcGCNxzJ1kfc4QL71yZtDxT8gyxr7UovTx53yK7Vvy9j8zJaLfPY5KtmL",
  "key26": "2kUACCxcbNUG6tVnxibq5qFr2WMLJtePM8wb3JkUo5woNH1FU4sFqBCEHN4y8PoqDHt8BPjpZC7eoYHKiML2TkMv",
  "key27": "2Soonn8bJbmZCed14d1pHozET4YgTR1AE4ZAwvNDgEEKZGs2jkRKc6wmXBUSZervRxhYfqLFxGdkjEEqKv6t1KQC",
  "key28": "4e69JX2DnaFwJ9agzitvxAbNEagAcPqrD1BHSufKykNFLmeSV2bFVJ8GRKsXCewMDCa4tAQxrV16cni5TrvY2K1G",
  "key29": "2rEPmvcawAjM8yzLPREG1P7TdTQazW9UbsT9PsVKKvzgZVUoo4wo2gAj5NNCy6vZUwJVZM6XTHgWUUWCBBrFGKvz"
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
