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
    "3Uhshr9MuhqsshxupFv9KoWg7CL8uMZVKyMhXVh8MMquCX4C4Wcync5rr44XyeAqGaQgATMcC9d777FRgiBU773M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n8u5Ltdcya9JNRiDiqcoNoThzR9cXeKEiZ5RVv9u3TVPmWyxRuSoE7fTSwYo4nWb5Dcv2iHXkQ6XCcu2FeWpPGN",
  "key1": "419Z21apU29FcCsJdEPHrrjFhTwz2zkE8nQXAuAgcRY3kXSGriaYG8HrnHCpEk73b2FLVFRXGHpvHcuRghJtARDi",
  "key2": "3BTEar8uL24nh5gGP1R6EBG6HSJ93bTyEkVqrawvNXr7BLQVdiqFU6PdYSsXYSFEJrM9aM2gfyA72tJMgdHmXg2f",
  "key3": "52BT24noSDPbqi34DMvdAAWMEsuQ2T2s5mcUGjuvSwiVa2iGHXqGEF22JuhQ17Lf1qr8ejKrMXJbG592mwHt9gwD",
  "key4": "5mcUDRTFfYJpKghV2oEzp2Gtyi2YTcGYbjo9aa52gFJGChVZudeoKouAQFtQ68CCnUKPYqriiQ35kY9L6pTS2aww",
  "key5": "3DZ3oDkTvptPz151AJFcX6GfZuNqe6V3EhxJUnH96K9vBHfYejvn1ipPPgpbsMueU5FNXi4r5Q9dx7DzKonTiXRH",
  "key6": "4AkfjcN45ksRUGpdm59Zj8HqzZSD9uAjgC2B8PmVEYngUU9AUndYmmZMq7SKrp3K2AAzZJyFbhkYYuv2PxkP2FKR",
  "key7": "5mzWzKkB6VzSwM3yhbh7iho6r1BdUh6yQrYRDbFgNCsxBiuKxhff9JGVL8EfvFDnfcocqhs7Df4LAHWpVJAcpvFx",
  "key8": "5zfv8JCkjwGbe1uqjqS5rGuobRJyWCWfeKWu2zugyFVNBJwX5B412fegn2zh3JTBeiCpWkHR9raj69NuBykTvAXk",
  "key9": "5npbs9mjShKYKzLasFu62EZCT1kAAdhxPLzGfwgVH6o5vCkpxcCGiGWgDdVcYn8Z8WVnbCq1TKQUC5Jv6WMJZdGV",
  "key10": "4aaLE4Lxs9koee1kew46Kx6WuzNRhzZrxW31mBvv8raJeCwWLKqVhtuvcbGpTdrz533ZBub8ze9Cqx4FVKwKBE5s",
  "key11": "38EXPXd4mr3cUpjW3Bk5YGswwipKpym3zuXgw8McQHGcwyvmz38kf5knj1AkVnV2fxiu9UEdH5wpLbW3t4QpFGEg",
  "key12": "2tEQSSQM854v31v6FPdga7jzSSVje7J4uUhKVjKS6LjXmagBEUaL7ALqZ4kfgosBW22UJ2fsnXkQeM5Dsxxwkkx4",
  "key13": "2QRZWQxWbDHqhiBuV2qtq8qHMAiikcV55bKr297xMZxA8FhD6NUgaU8PnjQRk87BShLpPK2ceJezARC3DZQnRFqJ",
  "key14": "125Nmzqzd3STbUffmF85H4TuaYysFzDgZnQiFeYkANk5y9w6BH7F6ZE8t8qC7PcqoeQ7ZQXaBtCX6YxzFNnvPxib",
  "key15": "yWxYiQdzsJqbXyWv1bva2AHwVTTkTbibcKLV6PgJEAXLt82KEjW1bRZvzm4V2coS4dT6YmPgT9Wh5buDb3snDNG",
  "key16": "4veYrw1jBZM2m4fiaRzsaPuoExahVUJ3JQXaBTXH1sC5yz69L9f6dod4Msv1HWHh8fd9w1F34X7juCAWprXchEYz",
  "key17": "2qYzLrQDCqG7Fbcoz3UiyBQHQd6Uc6SYnWj7xpNjuCHcMkaYvCB8dbQueR8CxmX4LXNpzverkX9Qc75RL5oQooJQ",
  "key18": "5Nv9CwEF3A12oNwQ7EQx5AdUqm6gEG7rBVGAzymbbT26HnsfzZ4v9HZpEos3dHbQkGGsFGmvbu5Rors2v2LYNkEA",
  "key19": "2DSs5t5oJZyUAM3R1DZRjbXaWpdWaQaxrXS4cy8CM19MGRsFwJFjFZufuAnGNSLpqC7LPmdnCYHYC8w8XPoAUVHX",
  "key20": "4ntK67z4AxXpd7AXnGe5EfmFXpJmzApRr391ZjrzgncB5LikzCF5YMBUynoyjPLDXhoRmNWkCoVn664eqACoj6w6",
  "key21": "2ejCvjLMoSMz7vRHuhvWbW1WcMKGePT5rxThBArNNcFfj9DYfeNPQaQE44MDfpo7VhkBuMrtgAkGMuQu4s2m13vh",
  "key22": "3hHwryXwc6nbEJgsmLNN8hEKB4jrmY37D3BNPkAa8air9FsZe7zyAU9H5t2XqnSL9gMm7tWCreUdHDSkfHFpKV91",
  "key23": "2gwNh3DdMmY1QPYLCL7NtmBeUygCiz5TAAuXi76Pdg5B9AZHESzm6tseScBce51aYAroqP9ASPheFThZUu3c1o4k",
  "key24": "62a4V2bsgBqKkH7cRmoUcKeuf5pSBktudhC5p2cNpT3DnicyM7wTSygKm4ioE8vYaVRdSbbWR8USyANi4ed4v5MZ",
  "key25": "4ibcWshGX5JRGQALvijmHcewUdb39KeHMkHJaWSuArjCHWqVHWukV4DJwSGkhuqDZWMtG7B7msartKeNFzMX7K2w"
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
