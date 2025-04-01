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
    "4WkHhcELy5y8wTk8NKgo8nxhvjnyM5zJPHc7T4Dm7U6HExX5cU3eYvUP7tBd4JKtcgUgkN9rxDv9U1XJEoLxpkZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8h7Lru4Eo2HdRXHxTbDB2GBqfkMgLY9EKNpJg3HFsw9Zxy1voxwz7x14jXCNUZYhbGFitDc7aEu32bi6MepP5fq",
  "key1": "4zvtdLRZfmJRY9K5RQzDpan9RcF44HEzt1CJGXSVpMnEipyTPLmxNv6kHuGP5EP6Ay8EDyVfK4xgKVxSkupZiUBQ",
  "key2": "5xrFLLra8nJ7EfW4Poua7cMXdu3sfXb5yse5Y2BgDg8Uycp16hNwh8nHy21ounun1BMaLFx2ZavzjJHBYTGTgFhu",
  "key3": "vyrHtuFZRepCaENJyJqZAKRgscov7gD2fAfVFv1KQ5Nnk82uKz3GpeoRXwPumQDnHBkF4BuZnt2Q1p2RchLDh1A",
  "key4": "5aoA3vAtdYVrZEVt6rAGaDEFTwXUuRAQESrauNp2wWTkLbxWjmkTbpmH5euCY3EBqLU4UC1XsdQANwMrEQjNfysx",
  "key5": "3L93yYrCwaMtBaDfSgrA7FNPyiFLdytRUFz2jjfhRkXMxk46cz5z2hq3tWHwDUMRscjRpjJEsjMxDpgLV2MMvasG",
  "key6": "4U39qR8iFTs8s7T9jjiDr3WwnTqbPuYAiVTSSu7FSA5pWxdciJV1mM322KD1GHWZ5xicodgUWDTZsCtknmfcX7Rn",
  "key7": "3tGabeHX4jgbavRZA6EueTSBCbGUaExoPzg53BxyZL4YkCA7w62F9vNYLdHQcUXk7zdMYM7iPRuo3Z6rTkjrfgzT",
  "key8": "m9Bze8HJttyfVPFMu4nzomXKtCX4bDmd1imUmbXhrJaXQgXQZQpMkJAmLDwZiyFtvuYoDg88ApYGkQ6Fg95FCSM",
  "key9": "4pTrDufrSm8uAZghRiyb724fs4N8RBQtrznNKdMSGLsW9X8jC7eySZ5MUixkU6JFL5bBrNyE5MxXATAGre7tDv6E",
  "key10": "4DidXbQyfEJd1c2AqNhBb2ex21fdZ3JCvmrQ4Jrnrh26iVPGb1EZ7AuhyQG6p3pFyzZzpJhifkgLc1pg6uyS6n1C",
  "key11": "3pNGi2WZCGgF7BSPMvATYyggR9zQAJJcRCp6v8XipCv9GK8Uvi79mNakpdoFywhNgL9riWQ5GLxS14kAjTxRZEFf",
  "key12": "43hYmAnWCDfHh7SJ97fTiXTZxQHNtDJBicrhyFrFZiHiZZpahBGhXeiaVm7Z5YxGpZjGussJwx8sp2gKHcYCpujp",
  "key13": "4UkorRCook9rmGJ9j6DyUgHDqCMRKUXGhmkj9DouW4vLKqJ8jELcPQaHPP3u4CJDviqDStSvHycHqS24vfV4f5Aa",
  "key14": "4Bp4cr67pvV8TEDef3fYwey5Q4QYFj2D1GLLf6wmLTsx4DvZLYYknys9UzRjisPgp1jZTabTtRwbdfc4Fy1gskWi",
  "key15": "3KrwiqZWKV2kyn4ie4nCD6KRoRcUXjadEZge1iKjAfFbNiJ8aoprGxRFHPPzgKZUdrcm5pWH325GNEjH8iuWyp76",
  "key16": "1hFmpXeMSRx9VVSB2m3gTPTmE3YUx5g5vdgZMmxx8jKi36UDgnEbxG7PRgz1GWwCQR6i4Gn7ZNSMCo1hbqUsSCq",
  "key17": "1w131p9LPWp3vm2TH8gvEzbCHSgUDvVTiTJRukSXJLXhDGmNdBRtLbGWXm29UCCfAXTL9sEKob5mapUAN8GQoty",
  "key18": "3KyAjS2z5Gz9QUYkc1TCFS75HKcw3s5qt2CuaDg4rXt9EoHXna1y6a9VTgG75nypbomCha3miYBhbFayP4EsyNa",
  "key19": "3UuqiWQTEQJZ8eYwe6as3viFGjVvM2VebEhdXdbeiPibCApHmBV3FVyP1cp2DKFK3ESWL8Tkfoh97qod2nrsCBes",
  "key20": "2AA3Q6shezX8pHinDYf5d8o7FUpo9WnEkD7ypVY7Y6jHtDQ6xr4WyEsxVN4Exgtv3aUXRFqQdB2khcyG1TjyrxNy",
  "key21": "23NJSwdveHPgpt1jhFqxxUSsiV8CQo7mTjHG18q3TqY1FoPdUo4sBJ3AsNTMoBXdZeBmadz6biAjzETfBrWnKSNj",
  "key22": "HaXLqwwDfUakrRYPtjdEZpsgpqne7Q7kJHpGWW93SZEbR8MzEKirT5tGLKSQRHyYuRs8HWra7UmiBEW4pXb4nNu",
  "key23": "4GozAaCaU2f4ikpoBKLF5AVD13oPGDPpSyJTvXcUPYwo9Q2Asto7vMKcWkNY1KksNc2jGUWb2PZAjAbt3F5krtPs",
  "key24": "35dD41NcnYVsepT8bVNMwd3nhdD6pgkwvoDtf3AAubpivXGZ9qQLb4iuNcfVmNoxVvwu9wyF2JKv5YaD3uTZ4feX",
  "key25": "3jAzJ2pJbsNVG8LqG5y7gqXCJm5R2FSwSCXk14f9edSg7mUBpm3oMEnqvzZu98XkSRAoWY7H46A2VbZGuhVfaB1U",
  "key26": "3ya1AdDLKkLvamx3YudtEz5zp83PEF6bVzBvagbaPpFHNxoR4RJe4qZza2i5MrAHYLfPUxduvGifscaXXZbZubv3"
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
