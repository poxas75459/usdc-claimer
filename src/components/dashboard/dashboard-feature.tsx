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
    "56SYZZdQpjBdaJBr2qW8R4DgJrwJtPyuiHpUam2Xymg5k7d6kB5CSYRvhZCje2FQacCoaHazbbEbYhUPy4E8asNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48aaqGMTEffoAUJa1k3pSq1uSmbkBABZNK9CCv3qEYi8nLjDfYmqNvU32BUb4VXyEp7UDexRV5X2xeqfKdQuiXLJ",
  "key1": "9Pqa6jzgjRDMeCNZGr7623pE2J74sGpeRagBpiw7JCz14EptNUXq9Fwy3JXW6D8cnAmc9hH1WUNz3Mk6MXsseiP",
  "key2": "42LnWf3inoVit9BxstK8zkQ5verrEe33H7R5b9WEZ5eeAoA46aCAq7gjiJJqHuVDk7tTfZ9bA316XJvJBWK1b58T",
  "key3": "3kPjyFMsQgPksJM934Kyr9QGpPZS2N4FRbjtYcAKh48pB3Tag36XUDKZrsRkGwuaj5yuC8kpRXCZbcmh3JgTaaAb",
  "key4": "yQ2goggVfBiWc8jsbmXZJpg8s2sM2yKHREzZxT53uyFUZmdf2fChs9kjDSGqhCBVFB8HTCWp1hMsattTieoWXDN",
  "key5": "55xVtPuxJ3sSKk2BVZKKH7cCbAEvZgxhXDS6zWjE3BXTPQjq2GsLAAd9yCsTYBRyEPJjZFLxcTiVdvyMe9XCCjQ5",
  "key6": "5BStQ6Lk22JBR8Dhog6s4fAXFzofuNcpp42jktAN6TDT2af6CPyjRYPwWeBGprdEyQLku2McET1mrQ4wURDf4ur5",
  "key7": "GyBUm2V721iWb5exNbLPvfCHmPCkQwom4Dd78FYX2qUdD3jgX4PbyfE1NDnZ7drfeMJwmPx3BbXn53qKUuQ5PWX",
  "key8": "3HE7hkbXmZW6oxsTJs3Gd4oibnrEHprtEWurBBJpeNQxtNazxyvtsSJFiVEz7tC28kDwMWj38qKJwtBj3iQXYrko",
  "key9": "2uELsH69mquNuQedQTrczRCUBCoTYVGfnxoE4kxQXajwZvPsgi8LkKbhYhhzAC95epyLxViDjZtFkDUNKizCgpM9",
  "key10": "65JywXaxHow6x66PGxmggAiSofiWxQa9STDgyt9STbp7XRcg44t3inrMxeDizbyKBwf5bfQkMSEdLNU2zYF4rhMx",
  "key11": "3aaqkV7ZxCBb8MkhuSddhKCcxbCXAvXFp8PQyFBCC4vcPU6o2gpmcWRq3beMXjjrfo4iib2ZwZmSSEb8ef795Zc9",
  "key12": "4A6nYH8GKpCqE5rmHuey69SXXzJwbjowZW8qwUTtC9xuaaKMsVHzsnrv1e8DFMjAbE8Sa1cU6yTStFbqC9iwqdqd",
  "key13": "3n6MuESdNrfCVRhEW14EiXuohNATf5t8JLsF7YQN4szDjGH9UZiL3htrnfMf5yNE11MMX4Ppv2Xkkv49TFL7uAUB",
  "key14": "EBpaKGfD5Copb7TuftjVRLHy81osCpvmYwqk3ue3KktUcmyktas5rMNHyPEN2eQ22vuTCjZnmcKbeCta1QVZybp",
  "key15": "3tzWTmmbkrUtZGbt8Zkh7gr76aBrRAE1ioTC2aq7mfbL4oJVXyB9tCSeatmz5smqVPGqub1wJRa8oeHvgVGpxsMx",
  "key16": "3nH2PM3ibUrLbrrqEdSrvmRLQTmYJ7qiBZ9waQ1uEgUNJ6izZ1hM5WJ7wq7vEJLavkUqBeC1fR63YgMvK4yec5Vq",
  "key17": "4jNSqjAGz3kFVcxviemrHntrjiDNqo3euEEnqPrY66wy6CNh2XmLWLSdqnzC1K9gv5VuDodHZWdJMQkvc5iTyGsE",
  "key18": "3nBuCHJaaQzAwnvh7WGURxYdKAM85BiziqoAqdDh1V4VNmWwT3vUmk7RyPBiAWtSVB2DvwvdaVxdki3bYvziiMXS",
  "key19": "3TruXWYynqHo5kd8p4bzmA3ozRa5atDN3t1KrNYgW5t9FHD19hAHr2d4DqYmSHuuHom9FJwynCXuSJ49FSB6Z8ZU",
  "key20": "5NUWUYnJFtBC3f6rkSiJZ8EecTspf1CSGyWGJt7sgvaAgb7mT1wZzqidaitVxix9NPC9D8f3M58GsyPcyViNPUG3",
  "key21": "47LxyD1yW6S4qfebA3fG3T1zd3NmRZgJisG7zyfZVJoPqgdJeKc6cphLVwqqrRCDnadiCFSRUrtavipiKFopdMRd",
  "key22": "3SHHYSMY9KJsYru43pegTEjBEz4yAMf2azajzL7UepkaW9sAeZ7EnLoMkAxCcUJ84vis2WVsVvbn4xP5bD5Tierb",
  "key23": "67HqUEqiWT68wdbf97BxMJwNZHeHSXKopttrZQ2acRW9AdR3jfsikLSKyzkXBwaSnoxvSKqBpqcugJwb2FB2wZ7v",
  "key24": "3M4PW1WdTsBALx5ZuvCuTL7tF3uaLFQ894FFC2Z8HiPKDqUGSvqZ3XFBgrDQ66YFBsiCs78wB9KrJaSMLGDeiT2",
  "key25": "56BBFRLF1G1qr3CwkiHNKuV7YL2nDEg3Ps9A34j8vyijRpWoxxHy2j22BeZEzc8vdW3gNdhV5DgSeC3p3pP6bz9J"
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
