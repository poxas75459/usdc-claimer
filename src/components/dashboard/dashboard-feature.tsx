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
    "5XwYU57TTBcVo1XqjBizUqKPhm5UZpdoi5PFnr6si1aHBzMJE51Li4Hi95F4rkNMyXgxbgEXkd4TNmH5MH6KYENp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nbxpsRAqbKxMTZLrhZfqFKCXB1bwM4Qu2Ef2fYsVJqrs2f4GMh6TXqVRAQZa3ajFhaL68qTmm2UcD9ZTzJvPkPF",
  "key1": "4ViNA8Dfz61z7ur8hy4L9wyP2WBvLT9fvqr8WtCpNkPRsis7fj1FmA833D2mxWDbHyBkF9FbgbRV2hvyhCDsVpFq",
  "key2": "jtrptuLKegdTYftiXXjryTSyCmaxJvnA5bwai8pxAC9PJnQ25nw8JWGsXaL6HE96n6Qz6BVb9kqVX1nb4YT9reV",
  "key3": "2L7jab65fxA1BHjXaxgGnd9vzpZokCj1t35ifEaNwqfXKEywfshsnXTULs99JG5CNvZ8V3EnrC9UQsB7PLF3EE1s",
  "key4": "29o5mRamSVo3fGQy5jRB4vxYdQvBHCMgaLvuoYpiWv8Au8CFhyPLskej3BjPMfFhdgCcALDi76v95Njfbqb1Kqva",
  "key5": "2Cb886UXoMRu5jSSjgrpnMQ94WpP7kgKrfK6DmmdWaW8GJLfqNYPAosLF1zzYbJBpydNGY911g5JvMvph3CCSyVK",
  "key6": "3TH4rUAorEubN9bbwyaaB4cZEXbfH1HD67Ki67GTqD3KvNBUEuDw8GSAzcu4io9wBRhqxadsY1HRaYec5QeF6LKX",
  "key7": "2BDyKoYrvfFpXHmxu7YQGnLNDSrFQZ9ZL6cHv9mQJ53MkbZwttCopjAEmuLgtVRZHipmz6xProT3G5k9EJtLCSPy",
  "key8": "2mdnTqReK5MeQuZq5dSEAq1vhrTkpMvKzt1F3MbvPGe4pGWUG3Zk8XNu6CAfTeFyqypwGVzJprkm6DHHGQ6AdgV",
  "key9": "4gRY7CxFVjQ99w3DnLLV8vSHT8oEAecicTHhh5YPqrPQc9Wk4V7g9AYXbT26SzfS2cJPLGmiAPvWddpXFUHniXdH",
  "key10": "5AmfRcFnkPL4vMZaEYZPxvpzu3Bgy4fwLTrt5eZHCsLgDHUZNn53ghaEhBxJFfrz4oX4d4SooWcmw1PCuXGFFtuK",
  "key11": "5BdeFLBGCKiSVXKa4XCC37yBn5MU6fJ2sHNuLP2sQ4qYY5D8SP9y5yMRzttzSUzwKXvcdqZTWtHcbSVy7LEMBbk",
  "key12": "DYixyRMB2x5cD8GUiHTSLyj23UGuH1pUvUeRVy4oFertASjkt6MWeZFWx8iVr72RR2dpC6EbxXi5FMnGJrPA4Eu",
  "key13": "4Z3H8avBB9S61qZt1CMTDTUbJ5puLWp2YVTgSazooaFieSvZRErsu5zhWJdDRMSXpzfysoodhUCfEXvCQNGFMkEr",
  "key14": "4zW4egszJExwnFdDKfksqdmhmK3y36Y7Xx3iB76tfgQXY9J5MuJkiWbCVJixCqoZNRwQwuNXr6PP9n2HfR5VCs2G",
  "key15": "Ew1XFGNRp3f1sZutkRBny5Uhtc5ey3V6YpdVbKHfYY1M5gjhqXZnUMbsHUtwUamCYSxmZppeBFMh1N9KNGKgUCU",
  "key16": "4RPrRD8CXUvjQDZntLuCmVPNo96zSdBXi6Q8T1j93fehbHpbxCZ8sydF42qM9GWKG7wYNxTr86hQ45UYZZ9WrHTD",
  "key17": "3iAXQDj6MRrV4Ab1cHczVCais6XsmSX5V6eE19Aq6NVhpfpaXgc6GfKruTK6pyXWpEQY534KNAQngwBK5GSvFvCe",
  "key18": "5ManMz1PzocyG2haY2fAAoHfbnRMd3MLTDx7mS7x59iKUQgPB6BGHFNbMoqKAW32tVg71WKJ8itjUfNFYtx5NiCH",
  "key19": "57vjtC1aQ9gJQGN4JBQ244kGvf2Z6RXMhihFiPJuPAMTdEx8y3B1MtREWCst7XFihZ88p6AgiHR7JJYDj4iGwDfv",
  "key20": "4wWBW8NAAEh59J6XYTwa1cx13xq4e1JrH1Hdw2tTg2ErccrTC66GqfoVMCwGd1jjRFP5c8inMkH8DAfRVRSGE9ez",
  "key21": "GDRmVHexd741XVXD68XRnp7X4E9kebGWr46x17EGdAKDjSWWMvosvXNXEvpUCMsLrpEynnwWBeNQUNeW6HMMncx",
  "key22": "5j7U8vTvkGz8PveQLqEcWDDZci7ZoFgTkXGjwp3QU2DaV9M3ZUNQgdqPgM5GXR1M8KTL5JFhxupMyUZdLVeX8D5d",
  "key23": "4e1cN6kvW6Uxu5nvL91PxS8GbPpVZJGe4nHWCq34LYVc1xKDE7V5uUuPd8SwRH1ef7pBrMP34VkXGggtjRbAq6HP",
  "key24": "3m7HUiGLZkkcW61nUdtxpMHHzBEjCCSYbt8TKCUmuT5hiEHxJdtJU2WK5yyWS8eXaSK7NmtRbFr68jtpBacY1FvY",
  "key25": "588vUHa7f2Y6HobLTjoqnF9VMRCaYsDGEJA6M5UTkVMxsFZdzfd6TLWP7FAnwJwWkDYFrdkRUHb9ALmaWniuwme7"
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
