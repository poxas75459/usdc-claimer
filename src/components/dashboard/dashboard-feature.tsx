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
    "n6hGPsWaAZa5DXn1vQEaEgX6P4NiJJiUGfiZ8LPtuqV6LrJy3E9LskE6MKPz7Xm85ZBNNzRwwAxYhC37AZ9w29S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H8DrhqSeEymok1DHwQiQtqfQyNMbSGzcy4QZCWaUxFxswXrr2AMpNrPMBx5gB2UcTWJSBux5716TuuJGk5TeKuS",
  "key1": "5fWRSAz1F5anFwHDZGVbfmJ2goBZLLXfMCuxG7Bkx3okKCwMD2srVEcpMhrh3fDKkxV8DKNVRyRGaJS2qKhaLWmv",
  "key2": "4FgW5iNzRvGnS1b61D8JF2WVeyRgbXoeiV3jVpKwMsZDqCsQJFDmNd9LnAWgBEXmcXS2ZBAfrzfmcYsTV6EVo9zU",
  "key3": "sKvoZbN9WVsjwwBA9GYtyy1VuvwdEetRPzZmADPnyZMY92gEDbSuTfj6DvbzJECaAnRVuX76hugpFeY9cDVW2dB",
  "key4": "BGjSbDd9trCZivq1Q5SnjJ3a6BKtiyEFmcRTgrBfzAChtrqtCa7hptgEsiMfVPtfUbSneMJReLrzGZtEgNNy2jS",
  "key5": "toxGYZQNikd2FbFRdspyq4oHChFewtkv4SXhrYLRWTDz1LDcP2Y6LrVgq7ZhgaUtqe1tiYHFEci1hKHpadPhd6R",
  "key6": "F7je2QjbxAyhDPiF2Fbh3P44tzooDNbEdEUadtHNo5ZyFQwfy9rpy9C9E9QzgzzRC3rUe39YB15fpJKX8fKTAbh",
  "key7": "3RUneDmDo1jtA9ED42r2KiES3kjhGEuhNoH1v14v55bqG6appSUzmYaqpYsJGZhVbNeYE97cwApwRo9qBfhsWUZ",
  "key8": "5n158ePaEumFWvdryjjc117TErnEDbEtPP7VdoyBF3cv6D6xmrv6hPAkBTNSRTS2NqthsiqmHSFnYFjNswqfZYAb",
  "key9": "3KnapCZni77WwuBumV4dKedVZtCEwroppQPo5sxTkbaz9tQm5TQpZ8itmgqaXR3jtzbZ6C9NrSG3y5wsm1phiHqY",
  "key10": "5hi6n6evmiB1C9m9yTqv9omFrzWqALoMvdbXv5SL2ZFdAgyoG5iTSr8HJoohUqdcXkxJxDJ6ubjDLRiFfn6Dph7B",
  "key11": "4o69e2KRmbCkxftDfF5Y8p2AqBL2xnnBqgFuuAhb9rcLTuvBaL34XoCVqT5uGoCaUofQsQtswDMf1mzns38ro91A",
  "key12": "YCH4xCynbdEREtTgrs8jyxdjeWqhwQwjX3VvqgQbmctsSsCW2WERYYr2PDRn5a7R8NJYma5rusDn9a7uWzYZy3d",
  "key13": "2AzupwR5Cxy1vnokUawduhs4dsxau2oyYZJKBk9UGFSV3k17A2gr1M8p82UVpAzPk1SXxKeHW2S13QsAEkruaA2X",
  "key14": "4cUmRT4TdZHhhQeGo2WZm8baTwoMUugHVs95EAPy8JvQ3CPTBXsZ54R8iRG1KB8FdTxB4aw6wAck1Bv5g7igJZ5R",
  "key15": "2YpyySddNX5qKYZaZFamkVC1oNxHigBNeQScJSiXQpxDBawTW4godDYKbiPHuN7eX5AsBvN5UA1eWKJVLhzzdV8U",
  "key16": "4k5R9CneHbtFWeJToLjES92XtNpzwzuNLcxKQrXdxgAFeoFLf1sXZaWSF4QRvHnNvyM5GFKusMsLoPmNhoWPFyXd",
  "key17": "66WaHWZWwVgL3WoawZz5Guijy9CHvcTwr3tRz6n6fkr3EJDmVRs8CGy6JWJ7qarv4xqfetoavNjCv7dWRj9dpknS",
  "key18": "5VEdJbuvmN4EuVZCZCHTrL1LoGLeuS2YMfcKS4Hs4HTVpRyZZwxw5bbxgvDF35pdpQqRTPg81Q3GqwPRNiRKYqXs",
  "key19": "26sb5xgaVjeUzmNt7r33ss5ud4b6uYVvhQWcXUWAYHnE93PHu6JZSMF41b3xzeNP6WC9HHTMhzm9AwV273btpYL6",
  "key20": "bZ6ru8ZSJDv74SgviSWdvA1JB156VqyPL7WoAF91oyVE1r99p1KpPtMtVivouoiACVpiEDSo94WfyAMZxo1N21G",
  "key21": "5gEN8G3shbspqgqg3mXYyJGBM6vtQ8QsCoA9ixahNjj2h4WWmsRiCEyaJb8msfP2EeV9UfMBCNA5wcMW6auvt3q8",
  "key22": "4bovEzG8YD1sg2Twq26RqKQpyqgriihs7jLjJHpYMuU2wTBF17q4f48inxbu5pYU72AuyFByJoDmSpC1651DdBGe",
  "key23": "2JZKx6tadDxW6bVvKXngCxiV17F1GWhbURHKou2CQr3JnNAV3iS8uE9hXbVc9KGYXZ9UP8FF2UDfD1U1LoLFzg5w",
  "key24": "5hjBUHPMfbAi9ps2gBctwDL1mdtkrjTFQgeBNfpric8CbxkfNJt9oFuN6fVWJKRZNG3Q2mFqznJGrTKf3vStnjy7",
  "key25": "5DveJesgGF8Uxx2hkgwSnSVNAD7YNxm5Lfd7uejrT6u7sVeCzJAkFYjXLMSSVjvh5zq634caPTrcBvewne5PbtkN",
  "key26": "4qxqGMy27P2etCWJ7zb8g1NNFirqmNzmLy9zReFtTnNd46NGNozMGrDkzRWtSeFVT2gER3guNtQLjorU8fcTJdm9",
  "key27": "5sBY8d1HKfPTxNE6BhcgbCCHjM2A75rmJyU3tNv9MoF8Va65fQF6jP1eL9PVegUZh5HKgVCW4aZmBBxs4AaCsT4B",
  "key28": "4guUX8zF15bV8pNBBdPZe4AmYiFCq2j9yzQxbg58iTrm3CguhDdQz2xBF7pfnUBKyLB3gdtfRqGZYraNzgKkUtCM",
  "key29": "37qW5yxX5efiF8e5EYha3ivdRpQ8jmqV6HnkBhPXd2y4ph88Spp7hi8Zn4Zvx1yCY9j5XB9QgCtSvWNpjvVBKAUc",
  "key30": "BWSrjXZ747T3Zkasq9ouCJaNUezvi4qeBgfXV65gmLV4ohVqJ6VQwthv89ygbNRechMCkgsxmWjNpFhNK8nPFeT",
  "key31": "4TzMUYFyAmjyZsSmEM4YYzohWMb2mbb3K9gB4qvaQb2zVj3Yhm7Gj8X7QKm3u1ECoK2SgfAthgxqjUmrRmUV19p6",
  "key32": "49KCAAvKqDiKLyCnaPkVyxaLWhAWWxVzEiHoP9ne1kktpooWXPKBpDHHrKfyFohjGXM8GjZbCApwB14uc1oJP3BA"
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
