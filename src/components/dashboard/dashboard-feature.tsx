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
    "PCUZ9SDVa3BqCu4PMhoCj114YCBHkJZrJQs5KDAaGSiqrsz8Ek5Uh6AqmNmouuyjUzznsH8eet2b76RVyERa1EC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HULvk1RS1hNHsDd4XRBic2mN8p2fYtbWvRXZ8PDLDCgxeQ9g3ap3XM1mBfKCY8SPnKKuR52Bzu6bWARN2gizbqu",
  "key1": "6ogW3GfaCuHJcnXqeGH1BNvySMpqz3BYp6SqGCJwQkHoJrDN6FiwMNmLnBabKnu4ZivosKEivrgncCUi9Yic9na",
  "key2": "4NqnWY4wmyZgW4bb3evmKxhqov58RrLeQ8vXHwuNFwo5ubRBVsf7vNM3arfj51TR8nixfEcfSSyEqAF91z2Anb4R",
  "key3": "3ZQRdxfYrrEpGGg3oazpHH9aXB6ppEcHdTFfEzYoN2T9f5NWVb8NrkBHYfB4TxbxrxwM4UJbaUtvgF3i2eQHKTQ6",
  "key4": "4KgfiBPEKTzHfUy1wzLJT7QaLvj3pMX23JdVLCZ5J1d15XGBHgkZNFCcMcezGMftnsH6nzLaAra4mTGi1P8TAmuq",
  "key5": "jQwV2X7TZGWWhfGVZ8cR3vK4wZ2XH1xHztwukA9KEsJVZygXPybWXMwHuP4qKprpKLWjhbSmDVcrdaL47sj765i",
  "key6": "27bBGMzNoACKxhw2h9jMdaw2KdH8E9LLGr1MjE6fRvohNJRyXsXgyyP838zq9WRndeeK47yrbEYoRn6TqUjDK32r",
  "key7": "4s9Se1jehpk2bYcLmLMQGF4bvcyuZAY9S9JqN4Fhfmxw1Vrq9bNAEarFVCQTNLMAd1h8auDBwh7HN8ovR9Sn7sq3",
  "key8": "5PrhkSKCRu6BEXZBLXxUBwZjzkmAg3q2ZUsE2pzzLrfNjgJrkegpcN2E9dreWGyFbD8P8D3DAAgC6tuh4637XAis",
  "key9": "4m1q1FNie6Fx6tjMLhNBhYKK2LrSLuWSh8wMw7htuJ5RLNX2mcTPqgbFUEN1Fe96gAS5TdjuPKwxwxJ6jvgQKwzw",
  "key10": "5WNZpWsSHoBCMCc4CQPiFkk4o9CAiXbfXXVyCSJA1r641rj1SAUCzzNKj4pvHjogaziJ7Ao5DB2f7sN1f1vbgYh4",
  "key11": "qTddvaP2tbYJkYrUoMQAApjZs1Wq3Jc9cdo4MSbduZCJUEVbdSp44zmYdxcupZyRm45fAtSS75dPTHFP8fBwAEw",
  "key12": "2ryDNzMggjUciQAwV9afuXAbyBpxSeE5sKaC6sG2AdCTbbHia853xiXTPbJDKgQFCEAxyNGxuBepefpBEBncN3dj",
  "key13": "3sqvo2W8KihEU7gEBuHutoSSyUP9CvKstM5vVoNXaPxyC8hG57VfUv8LQePBJBfjNDUhxw7c4qdieMEvUZ3he3QT",
  "key14": "5fYNTe7JpdXZ4DbXB1eRYXC9kiXZJcifxX3UWYRmTZPsYF5hDav7YCL9KQHWnM1WC2W7d6AgXqWzKwX67ue38pMG",
  "key15": "3UBHEa5oJqX9y4z7cmxL8KY4bWB9swTyFwYW25rzPe1An5GE9Uy857SskfTibHKLoGCpPAgJuHGZ7LrgCotA1T4U",
  "key16": "4c1W2WPqw14RDMnykVqAMdESHYj1nnXKfz9xwSbv62uEoGY14F5iEk8V5S9DsuVnprc3fKNLVnPAjcCrLBBCtRrV",
  "key17": "5A4AZaMRRhnDcJgF4zFsq9U2NC3VT4e683jEU8mJ4N3o18whEppz3gp4vDGfRmKnUHHD6VUcNaFi3SzUwBw1DQxx",
  "key18": "57c3tUJnXeHeUioM2wQvknxtK7vdF1y5vMd9tFMNu1pWc3F8B6GyLwdLK6MVDrhdrARjvQARtxYVCh2uDT3cugpk",
  "key19": "2jpLz9WhwHNmbV4Lzpoik9dadxk6bN3gQX271CVeU4MgaKyAMNuNJEjA6S4Hy5i9F7ZR4cZo8WJyckmUzVrXSgsB",
  "key20": "3r8pAiorka67gLfG92BD2WHLV66oxUWzZEeHGu5E6Lm7ox6XrYdBv7uSZQAok5hUC6di7g7qzDnunJnPrndBFje5",
  "key21": "35yQgi79iamCuw9mgYCvMSoezeMjdFP1kJjcgGrcrmvfi8ihD3X25ydQcNdiMhfmiUpevANLxGhg97NxomaZycz6",
  "key22": "29GLAoVi4zQtnqxBRp5BT3NruaYzLopUD1PPHJBoN2KrCfogxw7VZAM2VD6vZaHTtBZcAFM4rnkNksgM16aWExQN",
  "key23": "6gKUmisFuHt2eoDRNALEK4462XoWqEf1KCG4Xghaajk6v4YGzzaYHrj7TkfQcwUSZ1AjZDcfnh2opVMauJNUw4E",
  "key24": "dDpCqF4tTfWcZSL1xBNBDEVTJAE15dHe32TC7rWGjqexSdjsfQnWP76h28p9atKA9fxXHFBq4XUYrcHVaQ4sdpa",
  "key25": "45dx51tsV5GUPt4jzeDvRyLMYocT8KedzcYUEQdF25avs5fxdU7rM4EL8gBcLdYmtSXFG6R2ETpPCGq4JsPxoWXd",
  "key26": "5ixfThYgLPPgsaX4NM5AcFdZBhHeNuZqNkLRWcPVfsnCvxuX4RJbaVfJeWksZci7kFYNytvrZxSeRMvSrkUZCdQ4",
  "key27": "3TSX722wieiz6o4cVLjSmm62uqkMrumBKCCSe5YFrkCXsgcTykDeRLNci5JVa6GftKVrnbPQmyELwZPs5xXM2YL4",
  "key28": "4XT8PZnT8vQjgc3f9rPdCRcAegc2cfc2J1mqoMY5JdUoRsbekV1r73Cp1XgUGYovuEWVT3PU2tUqvdz6KGMDGPB6",
  "key29": "4oikcSLa55yfSHVDGb6ZcWxJMY3fTFTxeNy5s8Zs5mih4J9xbM5occu3akJ7SRAU12KhF3bAnL9daR5cLdZFqn7U",
  "key30": "4DaraCDAyVU56NA87SgfBq2rCQDuSZQXV7sqq6MJAtQyAizAF8nVLuq7u2htoEMm7esmGSTDxQ9mM7cLN5FhDKXf",
  "key31": "4kv5gfmpZXVjN4aFNSoGUcDYFRToXL2HkhgNd2DAzcLuZi7ftWXzpeieHNDtE3R4E82767VmsUhCN2neFnMrdp2K"
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
