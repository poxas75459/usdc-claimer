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
    "3YPn6RKJuUk9ENeoYn9nANrLqRXAwMrGKe1fwNYgvm8t5zAYGp57raZ7KkXZ4BiujGjndpLEvrVZ7Vvi4grnbNm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NEcfaw89vdwYdeXjJ17YYGKt73oERQmWvqKuE2SWazjPZATo9XE5469TRHhDFNDv3CQUuuLBUrye2W8mEkUA1Tm",
  "key1": "4etanzatVosoZJ6LmCebXuLUJXKQ43KiqvcX9GMoZi2HWiyVUiMAWy1FW6wymv3FdpUXGjyDvMksfNKbmFvpkSUG",
  "key2": "Px53ZZeD7pE8GCfDuEmiga4inRwK1GNezoB6EpBughNEqyDjERPCUdwFYRLhBLXZmtxXqPBqUtdQj68cTYGmb8W",
  "key3": "5v66g6L4BVymfCNnVfm6k7zRaTCR8A1MdNkRu9bDxZW9XikhijSTj18ANR7zFtfUraxMCm8ksg21Gc4vMCWDQpq4",
  "key4": "5HwyEwrbw369v3W4eXi2BqcobKxRzjdhJaPwmdjzX83WQQEbFAdYda99moBoXGpMrQjkxS3FLtG5TEq822U2rxBL",
  "key5": "2wrQkqUJG8bjAsyMdGrJ6Y7AypakVRUmZVB9ad1NWjvrf3JXqAvmDDy9GJqR3pbKPWFWYoHHJznjXgggahVTEQHK",
  "key6": "5bVboj2Qxipv2EBPNTbwqXcFV5tteD1kyejb35VYEC7QbcUccmnUZcc3fWPY9w114snAU7RwDJP6Mf57Yq2oyYQy",
  "key7": "35XNvPnQMou6X4u6GYgBDvG97hUN8j13x5A5QZJstXSHbGuh2Rgpif1Eg3ZGPv9wP21W5acHPNw7GWw8XoYGE5qf",
  "key8": "ZVmvtpCi494xR6KHVDALK58ymQS1Pxyy67hyJmzeoY1rnRvGB2UcQQGrV6BpnQcm9ATczFZB6cgxtVNXGrxTxK8",
  "key9": "2mUWnVnyQgdwNDLbvRs6S5jE7nQUovsmCjayTmhcuMoNAV2JoMFxHgjX9YMAAN1kSYrwLWaFdDegqReySfHB3aQ6",
  "key10": "3F73EBVsKBJ3wApDSncSvg6nWivvwV9FF6bhcXu4VAGgQzeh9LZ9D7rmDihB4CnwnvmnW7fq5qECdziiPTWUzTz3",
  "key11": "5eVhta9uxLic6ARTjNAKf5Bn3mynEXfYx9Po8M5hV1yV31o6J8wbHei66YbgLeQv1Dt4k6t29bxLz1c91ep9hDaV",
  "key12": "3NuJhfv46iTQCaX4usGd45HyGTUsbLDLrXpYwp8HYjf3QQBQp4Jpydm7F4XiuwjfGWnyGzmyPJQJfKxd31XueQBP",
  "key13": "3UaWoM9X6RXrTEC2BHynpYCTdHL9QpT92xPAgcHJh2N5CU5BK6yAfKXtrgKmKvozQxLLYcqaZrHrUdetLVyt8RKR",
  "key14": "3HiRvon3ig7xz7dqoazMHNdRuNoicNneJXGWNTAT2cBaYGHa1bqeorM8WXnxR2SerFHoxfHUkt9cE6ZZYNu7YB22",
  "key15": "3HguBzqKXxTD7ErUGSCXNfq8AhUqZBpXNdd2mZwAhFvEcgSdTU3XpB2XbSoFRbxKjXLzx7Lyqs7SwqcUcgAjJYSk",
  "key16": "5FhyFuKfyF8ZSZnrHeQACzkVpfyPsm5fLK7TWey617ENYENmQyxGQQV6LD1dssnWXdNQVK1vQ69EvQEWeqyC2C55",
  "key17": "61TtGBwTytgqmvCPMAwLchzPamgrY5sATDnYNDVon5kAtfGWWjwLyDsci2xDQZ2P37otVBZuCLY5vbtduXzKKg3t",
  "key18": "3JwQQPiNedb8ijGjikCAABPddurMkJ3kAfZ7DoLUdCPpRrrAfG5y5oJGSNCgWHWvuENweBDRyTR4tJWKBzqehLjk",
  "key19": "5mt4kQkcj7sH4QvauU5io4sRLGH8Zv5qoYwcjva7XrGfiH2kMxqf5bJC9EEYJf6SRXPze6h5GeDco8iPcD8TfV4S",
  "key20": "23XybFqHp4VntpjL7A2Q3iDhKuWp9WypBZr71zjwBDh8PSevkcfTQfGv54fLTdTg5fGr3PmzT2H7LdHHvAd66J1Z",
  "key21": "35cpa6LrwJEzAEBKKeGMPHVPLSdStresVJgRpKFxWbBq7fCSc4sTwFYSq4QGTRhVBFbmZKsru5wTQLsFW1JoLvoc",
  "key22": "MkgsFgLEWT2M9WDM98tcGTudg2f6DLiDebo6F6zoWzxZ4CWs6QCQqzisonrgqrWS6CMTvLTZaQrHxDveopRpe6B",
  "key23": "4SqhX38K5nnQXnbHTuxUyiVtvj3JdhrwFWAm8RWScb67wiNH874tCAfgP2L2wyMAgycZRijYoGdW1cUfiJwcsLHF",
  "key24": "47gv1mGfWvzUDmuv2Huq5n2HJozvu74NExcCabRAxpfgNvLGfzqi71FPpW2maeGTWPhJEtA4zz756q165hR5kbZz",
  "key25": "48wHMasZ7MAy7r8QsF4TtX3ThazYq7MtQPVG5BN8sM4j3wFXRzKFcs7quYVdLE4dKhozDHa2g2ge7AdvgkSitbKq",
  "key26": "Rp6npaTCmMbJZ3KABwr7sT3YCpk7R6PwofNQTC9H6oTGtowW2BEqqm8vUQxwhZ2LYBAgQzojMcNdaXs4WX5Bf47",
  "key27": "5H5pUtSqSmD1jkseNjQ15rYJfEQv6UtxT4kBJgv3Wh1H3Uu2VJszZ9Fjri3Gfx5U5nGsxTwZW7qfPtkz32756PuM"
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
