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
    "3WXGH7iZztueiFq5QFQzGZrB3nS1bRndNuphrbPdrPVvDDbH8FtoVYG9yvcHkTHx6nJZwqCa4VT3PMHHK9uaBNCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PKV8aBP1mQWuaF4peMyANQ6DZ1DTjs1S3JU5mqVMH5cFB7tTUckFykEotGned7hN97GNxKH17MpaCvPUfNpccxK",
  "key1": "2LUhALeLHLxyK3meVmkx4NvkFD6X65JsV9oPPY5stZBuAbXuRcorEXcyH8KKSdBDV5y56Y8CFpXWGrTWNomtz7YE",
  "key2": "zQ4bUongVTBNuNQoJi398rg8EBn4x6GwUMi1BHcsc8aSkjNFKq4kfbYAg8JYmDEk6mDSD6TT6tsJM2xJJ7pawvE",
  "key3": "5aUH9ryUSoMEcFbHaJTS2nXcFhpU9gX86rwzg4UXqi2XWLYEFgTJBqC1a91vkonneXnkHEmE1JymRVbfiGYLxawZ",
  "key4": "2kKrvQ4pQfAxGiseXh3oWCnC6XVgv8EwFtQuozUZazhLMgXy6oyrrshiALSqVkpAcAdkkjVdBGViVb2YHvX9hTkN",
  "key5": "2zLX2rX5WzaSiLkbZ2kw98ph5pNoxFzFXEEKc82rzQSHmGXtgA8AemtANfUhSEzkDVBBSdsa6wiefC7NU7WLxUVm",
  "key6": "UjA1ibgrT7NeCtVSgYR4rXvcEywtfQLH4ApVFcPLb4etSJ2azbHcKKYzQasQNVEzTEPstbTbSww9mXB3fDvD6so",
  "key7": "23AckwS3dYuaLqiworRW5rKPmvHoZqbbepf6jZn2N3XpuSX49dXrCvFcukEqL4vbY8n8d6rfSNAVxNpWAu1qgPsn",
  "key8": "3Pv1TqjzHr5CqxtzPws3TpzyjVJEeTTWNUFNiCJd2xeL6DVx6KWPPtGvaQGueo4vRzRZfEkd8WNt6agesHDeXCRV",
  "key9": "2BSKBnGg4rD6sMa7ZUsezBZH8cPUjAfrSqjB9MVkPGa4RNjLGLZCCGiM4PgeDpw5YqzqK5d3gXnwWd7gu8DLxgxb",
  "key10": "cfvWVG5w43jcve21uoVvSqdiLQNdNYAH3xFt1BF14GucCsWZnU2GKhPPrk3aFNSChBSUYUrZSkuVC1PBY8zWT5C",
  "key11": "4f8YwygSEFdzi7gySoNJyoWRcoXUAUi3aWLbv1H1Qjap5rdQXRjW4r9detuhzhmZzy2gj8TRTzbfu5RAdpekBSwD",
  "key12": "3uHijnezEmMyUXPvyNxZygM8TXaBH52YoBEWS5zLvHy8EWQh1h2nSzCB24K5S3tq2ssJbJdb63gNaDfHnd9urasn",
  "key13": "23SrtZWGG8bYotPmJRfjqxoyMux6HENAEQdVfBXQYNRkYHYBQVdkMSvcCv5PHW287D8aqsAoTtXCjUq7Fp8AEUj3",
  "key14": "4rmna7awziyZ93SfasMb3zQbdNaWmDpfDZ2WhUutGANkg5j1JdgWoZUqaGXhsFFTka9Mg323N4BRBDBJe3joLp69",
  "key15": "3TnV4mPZbLq5oPHQ9bW5DePY2wh1ci76JYcgVuV1L6uSsqwjmgVSJqtfydiFSJYvosJoRACkQUVdEtgDHVP3h9Bc",
  "key16": "2XJ6CszkgsceiLMZQ8sfUP49v3XURTNhtfz7dhhonbp2k9tutdQw6juVVnC6Jsuu8WLtzqWc54Lt68hD4rmphZeV",
  "key17": "2Cfz4CNSJ7onJhkfYz69R1DoUshRM71FeJaQEyWZSDcxamkNYG9fptNZNo3TvUMyQLnBQq95PXyHPpAKBeSg8oW1",
  "key18": "4pG5wyQ9bqR3chXCUnnnTyipdpovkfvwov5BTfFDZineHBJ4PkcmGSMGgLdxuUDyNTTQvu85eAJs9zf1H9EuiZqx",
  "key19": "4VFY14MiKxbSdMCfAfBxBk8bNxt8fAVwwwu1QP8uWSqnzPZu1CCCi1Ba1MdDyQ1ftBc9botKvMfahRYYsGxGvNby",
  "key20": "39bzaroVAYsLJf7iLTrHseDwPMG5PYwN5vWtXceM5kRYTZEzo76p2BYy74deWSmaFWX1xCsLZx8BvEHiv89bg7ih",
  "key21": "J8zP9zyfUAZmcxutZkKZ32T3fAndz5ZS58VHUEbFjYFYWrYKuDEtTRbnn86jB6XHMcR5SgrhsRw7Y3icbUC9boj",
  "key22": "2ULXKr9M1sY2vL5pph7CixhXKZvuvedVFKuo3XuHfUtoLDK63LrPQAwvDpvcVrAdkY3zbqjPcApZevyritNowR9e",
  "key23": "57WwC3MengiqRWd315KMNSjXTNS7tPEzGhj1RzjU7bEQjujjDsMnzFh2t4bEtNpqEj6zURwvSucmQEGGCNSS61P3",
  "key24": "ATX3ErttiT6T7juZz27yfsqdg6bwSe4RmhMKNjnqJhc5YiqrRfaKQRhZsQp2n87Er1sQvceDr9PkVBwbuzuir8B",
  "key25": "2goDExduqGmJkjYVN6RUYJazjtrsqN9Sw18ie988EPMDSf41zP5THBEbbi9djhh13cAnedS1ii2DY5bzAfcP4GB6",
  "key26": "3A3hkZKZC79bfLVheH2YMJ3NpKQpyBhpHFk7AiMvqzpGU6LFoZ85dJZ9eA5dL52F5bfdAZhJpKhTw3jU43WKw8ap",
  "key27": "eNoLWdyfgX3KR13eGAAUCfVJrU6MkMSFxYtNciiRgQAe7EuJ1Z57mZu8YYx5GeRYXd87xf6WDSPuZ8uZXmHTS6F",
  "key28": "5kVmCwoNACafeyGKVjqtH4iVFw2AJ1sQBfHWVVbddkcg9hCWyioqRrtXCgp9nTPBYMmM5MjxpGfn35fom3waXZmC",
  "key29": "4SB3umaGEBtmkPWXwmDArpRW2t2aYXCwcBrSdgt1vSYhZhZMhYwYh7QTeHrUSUK4rzMbweRgVZ8XqDKc5HvUoi4H",
  "key30": "4CsfUse25b2ScbsmQ9ALGMvTnm94kmqLCfXRKaPybhUYErLqEKgX6M1Um9ppHwAsGKqj4uYsy7YKQRzniGN2EZqv",
  "key31": "2FAozXESwEhM41e1VzfbrvpLdjSWv6icTsVSVSFq1uCRR6qvb65UygGeAN97ZvsNFYEdKJH5yDkCX3yaQ1XAWmrZ",
  "key32": "64GXmBNgc6NM38T2Wns9RUaFrbodmLdyRb6wo2J3bYXdseouexHDzDip6WE1JdBguuA7v8MMrkwh2kYG36Yg9KdQ"
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
