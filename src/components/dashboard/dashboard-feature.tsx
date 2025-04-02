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
    "26hzSC7diKvW7RMaUXRDMtdCTNYxJ6QwQmpCFozqwJpv3vEytm2qZxhr3bmbShSLwUqpkjngVQzBA8rkFfqYFQNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ECckbMcZw8vAWK73rJydVz7EVWPEx6KfdFpWwXh4fecmFVHftNrUu5QWtexAJtWUCFzBJARy1Z2QnrtmMSEuv7A",
  "key1": "4NBdcorGTjjCvfycwDGZuDP4U47tzgAff83cyPpeEtGA3rsWRBZLd3KgNUhENfSiiqJKz99AS5tjXwruVPtftoDi",
  "key2": "5X1J1ZKyUkAvuajwuRLJF8hbczuM9cMY25984LYPM1cXBu6cLy5ANJQAcficZVtpqwnV6rXttgDZofPG2tVoX89S",
  "key3": "2tyxpFHQFpecPiHdcSeunoDV1HaRghQ5EMZ8rt5UPqkoenij3NT4vQ6sSME5FCGyUynQHjSz9DTyQ3G9RcRtzhdp",
  "key4": "4kCWXvrAGR48YjhHU7UUyUQ7R7QPJxiyn4Ku8PU7nfUwRH9XczvV9oRD5yJDTUWDy5UKUFrjKgE65Ede6LQrXb93",
  "key5": "3cZTffZrzcEhUwMhJYaqywdG7ZgWWnx89SvgmnJhYm2uJu8ADD6Lyu2rktJHS9Rk3ShhYrGt4EXrG8Pd9B9doduH",
  "key6": "5AQAnUG6KXPwj6SLmQUeev9dp7t3Mu3yX5zJpErPzToJki7ToJAse8tLx5VfFe6vDniJs73stJAbBQSVFUbZtR4P",
  "key7": "3iBJ1XRtTwSjgwsRtPdjVBBsV2bf6foQaa7NHmLcQrm1H4syZmbLxMhapkFRF8ArDc9AMTFqDsidDWYicnvPLE98",
  "key8": "4tbgXwewYNjucBFF12266NPJkjUzF7zQ16U2J6ozeYx5pSVpURL1vTk2jpf4w2WitCZsSfxN6meG6heHstoKqdKm",
  "key9": "3i1o2uuWENAfEuhwvqiSJZDh4HhcxL26xW4k5TaRuvyQRnUKZQKw4V7gNPWs8Wrt1A7VzY7EuMVmTZodVeHpYzWk",
  "key10": "5D8eHBf2qdTS1ahoig6KUSTRPijwruPDyqgSuB1EuzBVLzGCYkmVUvmkxdcAcuWbP8b7hiYnGgbZawwA3ctBifPC",
  "key11": "47pCUaHGM6H4Rv59r6WgwniKDSBPyzicMu7M5BXh5UvtHye6CgSvWgj78fKxwtRYuU7k4jvRUiX7bbfnhuYbnoe6",
  "key12": "3emgg85uMLp8oS4AGjRd8x52tqohDrGdXhr6oRnGqbHSd51qmAFXvBhGQkDAsojArZdWAHfZUkPMrJnLpFBJ8WU2",
  "key13": "3tbSee8sgGdbvP8aYNBmrAon7ZjYuedTDoqQ5WNFnMjeEr9WZrVRHgfSUULoMchSEhsG2s58FG1R4KKJejF2iqm",
  "key14": "3ofaqeLWuLrKmyiuBzPKRvD6vBmQ9NuT9TVnXsh3xnE1PjhZtuCm4f2UP2y48gPAjqjKQGWKiadzY15RTsM7uxsn",
  "key15": "3bD8r8srUXh7sKxPJ2TheQeHGcLacb3P4FW4tZoRehVSApo9PwhGpWyA1SQRnPPXuX9337hh8jGMsk471eXGH7kp",
  "key16": "2pLdVxWw1V2ZHD6L5YsDKrs45iK3VEJvM7LKRCUxa6ga9LchoCsnPfBu6Erx1owqrtgq77cLg7152y6F4ivdW9PX",
  "key17": "3pWJtvqJ4sjeGZFvhNpQ8oCSfBAGVzgSsKxMwtu8gm5HAhQXvC8Z2NdWAAarMmntj1vE6QaXD7DDGiFAiRLrkKMx",
  "key18": "4QRU3W9n51HxrpuN2piV29YjHojppNjtEVii2kfQtq45XpUGpHqxKEG16GzfyoPdArbUG6cbexSujQykHxmvLfcK",
  "key19": "3TVS7McNfHQFYsYDfvXikH1rzhXMYmFod7Gu567fKHxkyU69hiijJvrUciy1d9eH21r2tSz5zx37SGhd1rrCG95a",
  "key20": "3UKreVP2zX7fDS5N9wQ7vXLXPaqyPYFc4Y6Gi1AzcD7Df7HGWVkvwuJ35L3VpFtqcnUYF1bWbSh4bR9HPr1J5kkY",
  "key21": "4GUC6j3YQwa15XoxMWmBeZQU2zhnxYy8MHsKRoA87PPLb5E24EkucRh7c3Gsunu73mycdkKDABFRDqrczRsip8BA",
  "key22": "4Kx3qpUWxFFLJhP4j51WUihJAVi5UsHp8xwm4rseo6iJzMYf6pKSqYmzDAX3EQkhVpmbtf5uvtZuecfvA3cgUoBW",
  "key23": "31YD814j6NBqNqyfTHGhJ8wfa3o8NZKfEZhT85b8fTPCCFwwxdK6C7ZDhyedWcWvQuQDVNLrixSqWmwzLhK4373w",
  "key24": "1bzR3iyoGJum3F3qa2intN8K9VXMH1AmvLi5DwsFUEF3755goWeiAXci5t6oJr2mHafWB471Fhm5yCNy9UcfshQ",
  "key25": "36tNr6vqxdnDCVxnP5YscJXb7b2h4uPSr24h8Sycx8Z9DA5UfUkdgZ3qnfBqhcGWMaNDgJy6GiP3VoiXheTAJLiZ",
  "key26": "3xqkj9aYEy3zfP4vqVE8B5YEPwjEnQ6hGUT8cX8pKubBGWp5bPMQtsj5A2QJc8t7e51srnVRHoYB6N2q5X63g8Po",
  "key27": "5HiQB9s2k53s4MhTu9SRvTALRCxkbExSzNTLN48zpTQcDTq5B4djq2Nck7ZnxMnVGuHNju71VqRLvrdzN4nzCKw6",
  "key28": "226cHhUnDYRgzxbfCBmF9hTijfG5j5QFE4qL72xVBsv6hzRcniS1UZgVLnpopMNknyYZ4WfeFp9pgXppkRZgv49w",
  "key29": "63SV3rhYP1DXKoJuLS26ehsfBk2KCLppaWL1MkMmcwcF9AKQXDsxdSLUb2pXun96ExbutDndivWfg2GDAxG7Tx25",
  "key30": "SjJ2r7jL3m5x1Yorv35iRz9KhGKSSzT2JnzgA1xA9fCZj5BVj2rGFWgm2yyqiKGj6bVjk5acAVYA7MrviA9PKqJ",
  "key31": "2hwwvnMC1oTP7EpQ2McmPnjRFLkfUbLKWZeSAdNASDBogAWamzdhnnFnhHHnspbgZMak7n48S7aJPaJdmaVFbZZj",
  "key32": "3zhyE7PkXux1hHyaohHzUnNDacTuNPf1NUEGRvpRMiEDcXmhvP3CCMQf4XE6XwGEnvvr87AXYxRczhg8DN2ozcUs",
  "key33": "2ZevKiuRZNaJXqowhoievMYwwhAGu3tf742bhU3rzwr6uqCn7ayxGym8JSTBkiMGXTELSHQWHvNsPvAZZoLQf1ep",
  "key34": "568GdC5mf4RHK3LWZnZvYqkQKL3aVFB3wdRiXb9hPVtbcaHcngexAdY1AZgAQUYy7hQo5YMp4AJxYRVkfJUzS2NC",
  "key35": "5k1KdAZMa8urbbZFrFAw1jDNajvXjuGon1tL3G2wNV13tK6PSrViuua1L7UmjhxVd7a6YNMoXJhN9LsVjjp7Qe5S"
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
