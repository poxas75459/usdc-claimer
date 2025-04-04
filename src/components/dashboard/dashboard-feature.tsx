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
    "4LNdbc5DpVpJBDRwf9tcVrWoKUE812hmUHT79BfQ5fXgcSbSsZY8qZzbNcGgVEwDMRKjLrZ4A5MHk11hQ43FbbjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tEVFzZaW5fL7AFmmzTSmYpLC9prL1SzVvBsaveZT1VXxpzm6wokZ1BnLkKgPVs8WKWLLRqtwbR9dQF9ot65Nd1f",
  "key1": "4VMgbUYqvb2zhF2dNUgbq1zd5CzyuTN6QZjsTtpXVxw4ZZnRp8FWnLaaRkEB6jpxXrEWohyM3ptv3oaVJ2nftkSU",
  "key2": "5PmJprQRL656hb2DnAdAxeZWMiqGt49PUzBxruF75Pt7EbQkM3wATvkbRuqChYsaXCkreWPeyjfCYX9Vp69oTqLQ",
  "key3": "2o3Fzxe4kyXVfXCZmv233E6puapGz751AcrjeLc3BoDvNu29xHoAH4q5UwQnfemoKYye9qC418EGG7YSZvBb8W9T",
  "key4": "4BM9f3wFarqkn63vtG6NECQdrL8vdN1gyYLqqPxcdbTu7t73TD7VRMVnX2cCqbZMi3p8PiPSo2iqxZ4NxeYgH871",
  "key5": "57712wkZWVidTUzBivwn5ofM9FWdPqnVJMxxeStBoBM7x7c14gR8LFXnCfsQEjxFPvbUE3mAuJAXorFuffLzjgzN",
  "key6": "5TeUJSk8fqnhEmULuADLzRDqoE7xJHVMH8z3HoZVznHMn9BZWdZeMrmWyvNjaq6dQe4P1BaJ6fpPsPBepwUjmgFu",
  "key7": "D1jw7Vz9VL9yNL9weYmgq6thxRY3CfCnrX1NmW9nsvYsH52p8EP7qnZmdxS8sFLpZMk8esj88d3gSsCP1HG7jqN",
  "key8": "5H77KicBkZuBSjVLboeSeSaR5dkGrdB87kgsGtJvdFxNTyknYQXyjba6hZssAyBUHQP4cv9Ehe5XiEVAp25fGmM6",
  "key9": "3PVRUaWwwAWeJh2PvPfumJPAXmwuMm8Lxekw5TCxQ6weGZLGX6TBJ48pfgY3K2uFTAAdxS8YmfmgPmXQGcDXL2ai",
  "key10": "23d1bFx3A9fUqNUaK32cnb1L7E9idkTQbwetRpMDwoG1dczg9MjsZX4GAWQ9Lsoy5iQWr8bv46PnBFoNL4NftnhE",
  "key11": "EgcHkq63mAbYH7xdUAq3WnD4c5iFCJmFixauxiN1iUYEAk7fA5LyXK5SctLFataDhUzVNoFauNBb9bZhf2RGMBv",
  "key12": "2BoRtWjkQzhuGdYayyaWv9wPjhCr6Vd7c8xgFFJWg71HqYP91JsAdE9LsQBiUf8iR5KKH7xk2wdmZoadyHBDkkrC",
  "key13": "2xR8xYwizwKSKFvCbJntDrj2jKyf9p1yshJQGNWcCtRp89pR8dEoUgvh3V6YvySAGHHSWXnwX7FK8ua1AxqgWXGm",
  "key14": "3GNQs68He9qsvqtoYmSoQck5anbBYCjeUzjJajf3m5EnhR8UUo5fBe1UTBBpGMsR76hHyM1rqPqdJS8t2c25uwBu",
  "key15": "25S9UHFnqzjerHKyUXSxPzZkSWRLFPLc59GM2i42mcod3tLzjSyfSKFgsFNnxsh5MFJHTTwLeNyp4h9JhSGK1biG",
  "key16": "59GkyDwdeyAaS5ELeprytPQhfDYvYfNPSwShyHWU9vnQt3WDj6yTQCDqGtkpd4WKmJTjf9APFzRC4bQ9Ne9xK2eU",
  "key17": "3tG88oXxTNAUMWSW86yzX1gbGtG9RCuegGjzJFY1TLp7zLsJN6pLzG95AUMLftvpU5MLHcvnMsMutkpacPmsQMhh",
  "key18": "2c687VgVmq5qQCej4KSUfKV5jj2Sq7RJ6ekWHUMx2dtXQKZ1S4uVn8N4Vom7ANvUrADaFVTUTCj13EXhYAmGUf4a",
  "key19": "qBVCfoDA8AwehBePVPu1JpaZpXHA3aN6xUc22MBmNJFZVJEXQoeJNtHwQXa4bSq9UQ6MGspHvG84QuJhFWBSJp5",
  "key20": "5tMYuBQWTMR21ep7UrdtrAL9yrNigbtDfiqpNF5a4yp8rwyZ3kK67RRsRzXYxbtBtwH8KocHmNgGHxoUaALJCnMM",
  "key21": "4dKLsCELqP7XcEFNpyEx4bvuESgaaVZhbFp922eSpCHT5w3s5fu55UuyaHFy6wU14aqEztvDFDGZXLQXDsdXpzm3",
  "key22": "3Jb9RJRqq13TqYTn21gdLS1xR1sHqLLhTQhDQXZCUbymDbYjsSTREfKSejzdCUWwKgejnAaTpvhcoBAWXcakxXRm",
  "key23": "5veP2zo4FZtsYYQ3CHiXLDxoLqXirXwxT4sjaTNGK6d1zWNXdSjsirxd9HBGNF5t3gmSr97VEQyjQVnNhLNVKqSj",
  "key24": "5rszq9gWRhF4zQTqd2zK3oUsAd7ai9NH5B12uSKXsCXURmAACBs2thiHanfsKhUNg83yZ5jpCQhWife15gZrebKh",
  "key25": "5DoVwFxkSwDZF1muXRfhpgXZMR9JfFonNoB4PiW1249JnZKc2SXd8F9JnD4b1UxzbxQKq9iPtG88p1FXKJQHbuSQ",
  "key26": "3JuQ1NmGRsnnCRsFgU1jpzua3Kdbjq1U3oxdMWVNZwUBUTsijqPEC738C3m2qbUyv1FpfHhcp9wRsu7naLaTc9Ec",
  "key27": "3nhWRo5zE85yr1SvAw2kXHB444AN9qNT7QXE95cfzXQAUP2zmUBnDqdgRiBS5zdJRGGKAcWdi2NLbUjy8wYQcDo9",
  "key28": "3Y4mYydm7u7L2kgfhANiXY9pGwUvg9Pmntc3oBgJtS4rCtoQg1YrTumv7V5zqrvJ3xdrNdeoXCsQRzQkYedXhmN8"
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
