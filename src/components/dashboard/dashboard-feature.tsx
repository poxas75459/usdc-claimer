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
    "3A4NAyXPZQfactAxCZ2ArLZmNvJNN236cAJrYrYSWPuWdZmKd78MiJSQ2NyGa9zpgTx57DtRELFo5GSb2c4ZWnHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uctyGMe4QYtBUPdrWNWen1C1g889VDm6R1nWgPuP1d4K1ddqmK6Us48eg9tE4wwe3rGd9L6ScLkkeikD7fwa8Nj",
  "key1": "4MougayZZiwGjPfdSsNZmnQavc9kurAxXwBQt83VSUbox6qgZCp5VKsAs3oN3ZdY7V8a7aUFfSHUSWSWNBUY18kT",
  "key2": "2uuLVFSufvxpvugwVjvDjas7XsNeyj9sDfWic3UfVQo8Pa3ggJe2dzLtE1HAJ5QnELVaCi4c7hW3hVwEE9pFBqFM",
  "key3": "2RZ9m4734kR4Ph7eGHKQQnWXMhjLAaxkzYAeVDTcgAiq4QomPSaZVNs9RAsWrMgwMFyALbgGDyALXQeJM9XYaZrU",
  "key4": "3N8h3QYBFLiidipYfDqipoLLiM1yKg4piPCZ9jbteeMNJoqudmLsdwrdeVyNdGiXgWWUEL8uoihmY4pA6HC76Q52",
  "key5": "PVDi8sB3bTqDPVmcCCadhFQSWBRFy5r6T1Mt1hXGeUFicm43rRMroDZrDKBsbL3qqVBn8sZ4j79UM9B3F41C2Jt",
  "key6": "4aN4nJPkS8mFHcuY9YQ7L8AaFfbymWTvQeSY3LHQnNyNf3fZ6aigBMeP97mHbkV5wT5aC9x7Zq3WKwope9nWnEbF",
  "key7": "2BoNGRtpX3SfekCpuBXypnMTXE4niVbK6RRTJwB4YLjGuf6RvkRkKoXiELAxQibFF1WfJ9nqyDmg1HtkBP1wY3z7",
  "key8": "pV1A7zaUwjDDtXp8FNoFLHDYSKjPHtLCH57JduVwbojvZjYZpZmu41xdrxyCbkZ8raRbTg7T1QpoaTmHja1rfvX",
  "key9": "5j6pepLdGojPQ12aZieEARRgij6W1aZPu7qvk4PCfvbJUJe1PxzMFkaRr99AfNjm5CdT2FBj4jNVJE2vVTfK5ez4",
  "key10": "5yZgQCyDzXccCf85WLEWfnGAjNYnpYA3wuhV6u78hHN7yPuqfgYAqowyBdmsqirEmrEDDzTRXpes4WXq4ReMJYcA",
  "key11": "38Yg4cYD76upiQeAYa7iScWCbNEmmFmZigfhRA5TMbaRdE2bDq6tPTAgPnySjRmfLZzEPJNeZHaJKt1WZ1JybBxc",
  "key12": "5MiDej8VN1nBWmndES2aJ7FvRv2ZuQYQEoauqwvBBXZvNEfpbMnYEeUQ7k84iGHAS9MY27JXzKDkE5qP6K8s6Xz1",
  "key13": "3wUvzeBSY9rN23U6piwvTUunpPazEi6p2hdDiVH8ouibK9x1KNmWu3xNDYmZwLE7vs6q2iM73UzQxsDV8MXLExhX",
  "key14": "fxp2Fq6iwniwMqQCFv1J4bo1cHTBjtoh34JP1SGee9JzWtQzCG9EeiVaFPvphyTpX5a8wMpz9eNaxK2Ksfg6yVi",
  "key15": "245TBGLmiYHZTWgDtZcJs9dcBgW4284tpQ9AzdfGLcEBa5CGTkvyEtoH7BouiREEgom6pUq5CnvCUffFppLhrZoS",
  "key16": "NwTePWfZZS7rq4hZ6sKwsA9ve3usZDctVeHf6XE3Mu2etCUh9TrQwKWgqhRsBm61hpehpMX3Gghcot4LcNUk5gm",
  "key17": "5QDHbg2QRch3V6MmdDkPv2CRSgBixZ9wSjWWJrH8Bf2pqa9iq4BPWq1mKJTjk85hsUzZxL2AqE4AWaAu1KuZ9sot",
  "key18": "2gim1TotBK4bbqTCxfKbDy9f7NGqzj7LLpr26MtimS2AKCYLJmbpHrkm4dSwxLy37qqGcrkj8EbzCsfBucw3Qdtu",
  "key19": "4uSrKCWJXGR3eee64g1di2NJvx1RV4FST3z8Mxwhg6vg2G4S26J2jrMVq6RSgtMWRg7L5zRAKyTDR2k2UREjYKU7",
  "key20": "k6DCt8WVoWi7KjxDkzhJQeToxcsjieC68vaKs88H1qFaH4o7WH3M7h7mDUgpv3FcQVApcRg3tNpZjqC9D1YdPqL",
  "key21": "49cVNSu3xjiHsc1RM796eCvqnSpRpBWsqL7WwLDL1kaeddgS4QU1GjCKS7421iaDxpfvQZHDRSQx4bckfJ76Ftfq",
  "key22": "3s6r2EJt3bCmKuJbVGhcx6DtwdDZPNAjgua2RJCbZB3V7SkTug3UYFHXo6gwnK2PMvNfioDPXaGbR8uG3YTw9zo9",
  "key23": "2oJxfi37G4qmhQBmJERP92temRYKJguJ88s7eTBXFNCPkS3X1fyWYA9Q6gsosxGr85H8CtZ4GFQtM3qaN1GbGjMG",
  "key24": "4oKBXDpcQ3zamZxxJ4DkUKc7CaVR3tEGhBPKvxkxvavKWJMyHUo4YWJPz9EKKhUKCMhc9JU7R6ppjGCJPWSuGeuo",
  "key25": "4tbTvGFXDXqJkzWMnN2n1ZZADV9YbWjvAp2qLK2oAvJxmsNb7a2TQhSuHc6zNGC7j3qjHCYBkBrHaAJq2T1pHuyX",
  "key26": "3uymEYDazhTZVxUnCw6g8qmTs2C6c3NpVKBTkRRdxaRJdZQT9yk4RoLLPZPBdWMDk1zz9gRPgkbLUCAPiLz8VyTX",
  "key27": "1h89pJZ8roUNj5zHdeKzff4puSi8WLJwhcihN3bDm57mRhVCBgi7MFGTzh7pbgqWhgnNoKe46GNKH69yDF2g5M1"
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
