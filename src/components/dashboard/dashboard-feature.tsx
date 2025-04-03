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
    "35N6PykBjZKT7VhShyGTemxqmTyXfPZwUuqm9EWUQKP6YKhMjPb8rRgvC52iHMWvgxku6uDds4ipy9CjYcDbD2R9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jAee12ie462dDxhiGjXXxY7SZBiwGs6kZiTmxUVHJZjLWZWqXNveAiusNuopvDd8EZqVkJ4BaTebmJYTyLiL1N5",
  "key1": "5BErDXCVsZGCuwYksijiPSBG8CH3jbexKUdEuPEjH3FnADjtXjZK6jHnbEZSLMhLWRai5z5s8gRdupbcrgZxfG1b",
  "key2": "4QhPXQUKnxocZfZ7NN6a8wMcaoBAtpv592LpfcbJpnAShDG6KEQ3ZM76o8eRyqdWHYtg36d8WBknnehjGsG11C3L",
  "key3": "4etfawmfYxNagZ4RWvugXfcjETcRgLkDixBrNUDuCmFu6hbQWBT44nxwsSKcvQwawknSUe12wL8TG5JYLWcnEhRe",
  "key4": "37rMJo2M2fMcQoyCypuX6nKQzwpBTvTmGkeYRzSt6SPsnaqE6BwPGLR7zuvmEsPyVhWq1i5wQQoFDi9JJcb7as4r",
  "key5": "VzHsBKjTG73HBxueW4stYv86WwUwsj9bftsgLeaUmeJocXxGqULFMHcTktPn9We6vXdNkznXf2xmVJ7KeeHtizk",
  "key6": "2QaMjrY5M25zDFm1ud6zLCpSHRzUbvifnpvQrrpBYaWXLrGTueCMgYxYQ4J9ivgiEygm4ChaFzwrj8qvsTM9kkFp",
  "key7": "3GDyaRDEKH6PNqt1nrnmgqyU1kLXXWsdCyqwfMu9wLCboio9wK1PzdKCKxwKJiHTCP6jFA7ASTmpYHSU19CbrCJk",
  "key8": "Q4pGmZiU8NpuTUbTTDwoxcsSJdtTGVzn15QC2T17M5C7ePhznbbbmuXE35rh8oZYDn68ar3TBFJUJzYdRu73eDi",
  "key9": "4M4i1hZzwKbxUGrzyrhfpNnhgyBWwzAtp6MQZ1vzeFYbokCdBvS98cdwSHFUhQiTSBdL81xjZz1xYyFgQdjjEeaf",
  "key10": "47QRQGaLsNAuih844FsEHSeg5qPBQdjFShrZ6oHKpbobU11geui1NNcDjbn6dJFaJuejQrmwhNCRLcTic9qttwEy",
  "key11": "5GyAsy82bchUGoeZ8WkpFyjQdPAqEW9UDUZ3PTc64Logpxy93FvziHDKCX3wsyWcSvZgXsfZ6eDXRxFQNqVYf6h2",
  "key12": "8AYJzMx1ay5ftNZ9Joe9T8hTkd76fcMfHv6rZz1WRe8z3c6TAtpG5suzsrVzNVayrsKHF1C4zNprkgBCzNSZUFw",
  "key13": "4w5RoEyPUQhXoBpQdkHTGAUnz1Vj3RiNiWss5VP4qnmMC8KchZDyo99X9ZQZpKYm9RTYLFqTo6ZiscxHCV2VLtfM",
  "key14": "32C955pbBfdzK13aZRC82yDX6tcig2MqsyxbxJMVcZ53TsTxXgUiHsjvbBYdhF29oSjgSC9qCDxV6z3Q2f7S3nXM",
  "key15": "spGygpeH9NT3Ex1f6WwS7d9kJiCdApF3Mygy1UcRRXTnF2wDY6QjFKCtaPJTjz5zMwwEwB4HmNTs2WJ7nirELb5",
  "key16": "2bAcjhDC7T9xWRek4FPPszbnTdiiyADB88wQddo2wp7Qj5sGvVJu6AmhzicfWqXuthCs492d4DYzQSXC8UE5JSx4",
  "key17": "5rX2SJUbuGFx5FuPAmcUkuhh5oDW1xtoKGM2SBWdHiSnAoDy4gv4oYEPx5G4Tv8aoqCYTzNZpmZjTjznHehjQSmK",
  "key18": "P1upkTtG8Ly1mUkZkeja6dzkeo6JAx6ifMBCMoHwDWm2aAUtoRwE9jmDFhp5jHBybaxBXcewPVZLbaThteVcKQG",
  "key19": "43JuMTgpgYzmTRHsKv5QU6UJ6An3QDoHS85ZGm8LBRjSWj2FMDc3iuEUAp1KZ6LVLiBfSKuFeuZ1KaE7pJus3mBZ",
  "key20": "2HGSCnzmFvTeJxzybR7kgg4Axt8AGnmAQWR5WGzRXrxKh3NxSXABNzxVA9yp8ypcWSMuVs1EQhu8NXbrJWEy5qMv",
  "key21": "mwsBKfPxAAo6yKxm9ukqdABJQ1xjYNSX9vAs9PBzjWv8GRhSeNSG9ktckHt9bbKLL4zUMWEmvhbisaBBjpndzqd",
  "key22": "5vDQqnqBGYXPXVMvv3Pid5Np2S2SU2LWBPt9ihJ8zu64adwcx8jJhoNecgt59EuhS4kMsfErrz5cM3p515twBdiD",
  "key23": "2YajyMbEiBm5Nis98WGqk6jWC9wgsAfDeLc75vSKw28Cs1ig5bgL3o41o62UJ33QvafZZLqrZYm2rhLhGEVVD8dJ",
  "key24": "4ssyD5YwQwjK2vzK6iQfHJ4AHJXADJwyAkhBP5AaC2ULfY6Z5Yd3NdPSUgZ96ejSMgkLrDQ8mQYJ3zU2bUCm4ftF",
  "key25": "2Pai8HfTZcJJrvRozr2ijCcSznNCzFLZ4PtmL1GLQQoFfeG5iTBtjoVhuYKXLXb3FLuW9ZxA3vo1fFpRqa1ecEK7",
  "key26": "2gxi3QNqAzB5Su2N7dLwvL29upeVNqxMXYEVC4SuKCEcweHJrg7QBviL8QGX9hhCCoPpbkbidyojdZzqLBishgpH",
  "key27": "UU7NuD8BVMLLdg3T7zvuQ2P1AFvEjbHcQJnHXpXT3ruNiwEBPSxkpTjivwWRveniarq5NjqvufuP1Zxrwncmm4a",
  "key28": "5hCos9xcUzE8dCqC4rDVXH6hkfkMmddkCXgZgBHSYPcDFNWN55LTBLdZhugwz412Je1xu92yfzUzSooGPWbQdgR8",
  "key29": "3LgJi2XzP7TTK9xMqcdf2mYbEBHP1zyXVJ7F8ThX6RPZ56TYZAUoAgyALG2iWhoGbUG6ByFHdsUd3XYUEjtb29VJ"
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
