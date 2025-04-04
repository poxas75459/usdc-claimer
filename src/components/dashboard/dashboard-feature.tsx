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
    "CGqxQF2gPTKbd5ao8oVucA9NqMsrjMfmRUgKqbRCtE1U3P3rEfV9PRhsvrP4gnN91THHF24hwHaJBqQB7tYm39o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ECLyiGkm5UjKZztqBVocepmWuvjBTqkHitcGi2S6hee1YuimtwcvuMCRxZmrhWnaUryquz8ndJ41vZ5dnY35yV",
  "key1": "5XQWYHvTyJJf4yvabT84AhzXPnoANRqHMwAfKinQWx5GLbjEvysgxR9BC6EwXwMDPBTfg5pqJCq56WXo4EAFsEXf",
  "key2": "3KepnNf1WmcDmW6QA2WLJyGaNZhBHeumXn2ZGjDEewAVVYUXxai8mzFkPuCwT4sQoiSTbYm5Mi6vpwh2ammHZJJk",
  "key3": "3pqhs1tLjLzkoGBLXtWEV2vRMNAjhVBg2wHUC7vnB5RFSYNMysi7p9SY4tBXZ5RKKxvjoKitfskYv5kGSsKMpFjG",
  "key4": "5t5uYv47MiQG3BoevQJxPYXyts1C5yYk8W5zgPdKP9JjpaU8yyuMijnnGHBuNeRXUkBuW1oDWSLPD5c8gcakF6Ru",
  "key5": "4m8MokwQfjPrinc5fHo83D1niZT23Rq6pSdwHX4m8fbLhh12FxtDyY4UY3uLJ6PCBkvvMbPjYfb5dSeZJ5BbrL9N",
  "key6": "5LMXVK4wjf4kDmXxUZBf9dzQy9M93U84vpGZfZKSGWrS7Nukawky8c9ce8vJ1Rkd8UubsF98qzcJRBHAeUZvYUMx",
  "key7": "5kdWD4JU7AfDBa7FnFtgJ5u3hfeNQVowpnT6NNvSPvDKcXJtnZKyhzSCmnphhWmitucrj19otXd7nicC3rSG543A",
  "key8": "4WccuEhuRrd2st9RKg76AWwWeUYfrrhNE5hyU6Rong2azoWWpn4GTvxUJA9C51XbqHDM8AcEKEgnoJntWVcpSqie",
  "key9": "66Ro3QtiwERoW2utC8ujGPnm9WwetAqrJcFt53KXvRL1WfGtzbtRT2FDy5jfXFVghMKkMGRc7DZugkWbxeCt82hc",
  "key10": "5pTAtgUtCWssapPUK9Xr7oCi4JA2vKGNh3KHQ6gMmpUDMPMKarJW1paZ1Z43XUgdwR9uUtVpAWEWRTbf6p6GmyNw",
  "key11": "2mKfSaycPHWPhbN5EjehDBPW9uGZYVQ1Lc3PULGZRYpuidAFpP5zrZfzXq8QBRrN2Fu5WuagemNVeXA9QX3Jsyhf",
  "key12": "2Bd8FwZRztbQ8TWAYCtx7pXsYGeszu17s89wwWgon357JP1oPwnAWNfpFbNpAZdw9GVE6jZtW6YWm485yVAjqoR",
  "key13": "4hNFJgmhdjU6eYtoREgLDGn4NsAPyvv5zwkC5iQpM24nAE1CBKvpWA2CyQaNswFZDrEH8WG2NFjtSKvQJefMLDFy",
  "key14": "2MVYj7JP3dYrCVkbCAmw34QW2DYKaPiYGPMcavKjv6QKws9GR8Qt8P99gdgoBHzavKLFYNuKEAFMBcqsB2Xcccmm",
  "key15": "5fJSZAK1o5osE5ptEACQDwSy2vCKAGt2ydHfBm741BXTnrg9nT4PgvoswkL4MfJKMjKJu8X6NPotScd3cKB2XPQN",
  "key16": "2x827jvoPFqtWFaziXTZkN9HzM4ywxRLuN6ftshcJZi9iGMYLvBjy4aHgjQ22msPUWnQAZ6wKHLGzK5VzAJm3dVf",
  "key17": "3MRZUSwoXA1PvWPmQ3k3YKrV3ka4NN89K9ANCoL6pq9WqZFWPBtnwSTgFJapVu1jYmNe5S1La6z1BC6RG5yx8pjx",
  "key18": "4UY5JxwDsEwJTDyN1uX8FNok4Wj9AXzJEJYMk2Vea4AHfCRoexoeurvPLbHU1KiHUZeTbroeGPemBUdMvWo6vTJB",
  "key19": "gyhfj3DhAZv7NXT7YAVWggpXMvC7XteKYQsrmMoxjzT88WHMgpozjpS7uEUcZkSTyU4S23pZzZ44STJimrSWDtV",
  "key20": "5ojuqUwKH83nkWdP3HmoSpbwPCU3EfsFqyh4YfYH1Z1jUxQJXMRwLoSJ29jDhSWCbsQ1kJo2R9aQa83ZamySwQvE",
  "key21": "aGLgejHxxM83f35Pv6kC9JFrCPMHo5abpSWSiZWJzwp4uALBS84RohFvpfVamNoKLvRjp6EEgVbGRWr3XauYJG2",
  "key22": "2MYjqooLW9KS3V29evVHdjDHN9huQR5JzCzGqstsMEpE3Y5sm567Mq3nwZexN7gdFvUHPfVahYGhXiCatLQoo7Lu",
  "key23": "25LXqV5cEXXf6WECP4Z6DafcvUVSdi2zixmV3TyepN1xzQHeTdgm8SG9jZLe7Z31WB7r7PjzcT2SGjBFFjJ9DjSg",
  "key24": "3FnoTHdAEy1YHg9ViAJi6PsY45C85CELufhrtTLaJiDFmwt3yrkeV6mwgxRZmYLygf1jD1zJwmn7XnBW63RNXtLr",
  "key25": "2giv7GTSXQTFkhyWXhTE5EBfhGpikTARMoVo4BqBLbcdLKUTpncS5hZScUqz5GQqeoFuWsfR7ABWtYG25RPPpHxA"
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
