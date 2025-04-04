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
    "66s5fkDEraRvRvU8vWoQMb8zo6a7rsHWp1fSXfGykhbK44uABpQLvi1wX1vvxebQsJoJUhx29TRXCnm7AR5SK3oa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iM2jmK6CyA6oQrj2KDhUJHBunq3BY78UX3AscgLUbTYwwfC3P5wMkyhnZVpWNUkkMKWQfULQ39V1oezshUKJumw",
  "key1": "4YQhGB8nFwqLak7mkXqu4sSbyJDShhpZgQSM22YNtt9buqgKMc4vx4KHQazKEupEs7GrrCzpEizZ28AU5YomKxAw",
  "key2": "8aCTjV8ZdaeCBp5EWyagTAcZHLPs8XeWjCpSL6naCvNWaNJ3kAmko9aCpL8rsveTqkrmqKizeLrnQaT9AxtMK27",
  "key3": "2DMMFSVfTkmbTnFRHCZEoPdWeeNaEdjadBBxG8MupfbyZ5erMextsiaM8fTSLHXVEKrH3u1K9ZVPWUvdyM1FAzBy",
  "key4": "64reSowuDiwXvx6ruY3SijrLGACSYyh2gUi9VPEjCgtQs2gxbsyytYLQS775rQJXckr5vd86ips1n8NZZrwMVSzt",
  "key5": "2U9zM7Rak6kPAfr9Ux8V88tqEjmjGbjUa7SgcZ2XKbchYgRnjhNGW9TC1R83sRorfHTBS2BxWgf1QberywCuJwBW",
  "key6": "4W4Wfjr9cE5zEef8xTQjdiPvXP7KEDXC33mgi8Eon9GiCocvrt22xDJUjYjovvvR4eX6XLBpA2B5EkTGmJx9zB5m",
  "key7": "2LS2cgCWZC2fr6anGzAJtZdx7oiAiTpFfBFYvD8KbRSyLiZdxbbg2eiLKPuQsT7vu1d8PJQbRLjL45nz4rQax3tD",
  "key8": "3bjyKNAdtGzavHs5moTD3QZMAr3CgQb62mdUn6fpa25yDXVp6TgKfY7SWYbJCTWq173DhB9EJbweySsryQjc35m",
  "key9": "5Ms8RKT67huRmGBfUJDNbAUMpaa3G6J1rQe8vhPzGhXguGmZ6tktekokqkjMLdgkYUEcaVfg4nt7qeWX4tsrqkKm",
  "key10": "3dTx1HQvrSq28Rv4SAc9mkQvsKjQ9c8ajojEsypHgQmTazfyLpuFZXn9Bw3jAnRU2CwvN7LpyLjsiixc4GufVSRU",
  "key11": "UL3Eg6C3d6MuPtMnXq1pMiWybmkhGvTvNioZvLbY5HPeCGG5jeVcbN5A2p9dbasnWZkRAKYwJAav9d5Gu219HvL",
  "key12": "4doMWYS3bYt3Ut28fcoDF4RErd8o2LX5mj4eJp7oU2oQ8DshFbLuDLxHmwtaqz3wztxDYmhtca7ms8szpbviwgFM",
  "key13": "67kF62cRXYK1a1oF8eJdh1NU1LLFuQYsMferPoiUSr1WohWuSK1PjJvqFYbyH9n5oZ5YeUKKGeaTcxsVk3S3gX3o",
  "key14": "4axUrAvVHbgsb2qM8Z33WkbwqTnEEM1odRVfpVAWDLoNbpyLXUCCMaTpiiLPRuKPkrqm7WgFWzCrNU2o3ZLrQo7f",
  "key15": "4vgRDJ192GFuNkr2nnJy5Sye9cLHeQT9jnEVHASvtscVouxmLcNztH23mnADoEJBJZcKynooMoEC6sJW7uYNDd21",
  "key16": "3RppNPqcbWkNbFRo5SRNSZRvJMSyJqWR9B7qo4nHkJzd35avMRNKLP2yZidbZH1QdMWzq1HKBgzqBirPu4JQu4pA",
  "key17": "3piwMG58fz86zPFzaAAkLKPnoK1WFjtCGeEvAaENoxEiWbfsN5qt5dShgsUPznUi1uYxRmyVgPVETf7phxZvbPyT",
  "key18": "2TRigBHWdsbZv2Vditp7RW1usBsoMhdU5bQY7Ayg1xQKzuX7tbt2d28xt3HAmxG8dxe2xe1MbF2PSypTkiz4qVG4",
  "key19": "ANgfRWRGpCHgDK7PiE7B1h9JbNscHwvBmEuzJShsAppTiuPABb6vWTX4WyYSS3m3SbQnaknuQbRDWJibQEK45un",
  "key20": "vJGxCQP4EKqNQJNfnMgxvb2jgH3sLHm9VqHgnLUk5MUDuo5e8AoUbACyJscCddWeZhPDzghgntkM4nNMA87vYoH",
  "key21": "2tsrF9GQkiAsa6Wkei689ezFYmjzPa1urn8Y9KvQWPWCt1cTnmJcxwnAaNjAr48oavW7xMn2kwhzBEbTLJhfLkGn",
  "key22": "RoTKepjmjdHPtRcNRKvZn8Ug8V2stKs8uQ1QdAzZjbz46dmCzpsdB4LN6boKUf74VxHCv5ao3UmCnB756DJKTS5",
  "key23": "SaKSqBjCH3BC44fBPdto2FpqkmSXji4DveVKLC4m5VUmyDwR1R3yCPTpDoJ8YBwaY5YrPfFXXKr297UgUBSRsRQ",
  "key24": "5Bdr9f663aRyxowiuqzS2cyctNQ4Tc7EvVPgvth7Mq8Uk2xEmoUUAMJ9tP83nQ2PBvaoTUfTyGaLzvMof2Lhg77",
  "key25": "4qVF2tMSDsb7ntKHobAg58RJrorcKMBsR6Hbt5ftdB4oR7hChSTDiomabpqA9MFnKTojjmeqHiCWTXN3oeNAN9zj"
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
