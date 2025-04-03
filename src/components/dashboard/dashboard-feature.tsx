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
    "5Tfaw3onudvY39fAeNW54Rbx1JdAPXLP34g8c75eDnAei5YpSu9qHoRdPnQjXy9DfH6zjDktwwpLxfVrMCwcwD8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gn8efeUdCCwrD7joZdg353jptZT2tAKyNdnck8XnVa3gqU9BoAwLmoJp7b9vUBJcTPMTzkGnqwjq4PNkhDdW985",
  "key1": "3ZMCH2eoVXRsHGbaiZDaQXeR2sLBWDPKcQRwDyw5awfuUn9zgqAmzjkLGL6TVULx7TGh5YhAajNVkotjrjL6swvH",
  "key2": "RXbfjBDwkNhaBPhXKo8BKcneZd2JhstdzyeTdtXNbPra2UaiLcYadydMJsTtfjgSJVzGbQkhUpRBjwDZFGp9ZPL",
  "key3": "J7p4LdfCvg5PQ7ikw5UfY2BV3tcPN5SSZokwjhqjBD1Yg9b4HFEM21d6k8Ygi9yEBoatX8mXXYAmN2yDhKxr9hu",
  "key4": "3ViJ9kiFSgiTej3r1Anf1Ygvud8bXKHaKKLLvhRhuxZ1RqYrkRqBxwzGZnkkXJG8Qr8waNuhuFaca88s4eDfd3gc",
  "key5": "3nZw6GD7bjY51Y16teG5zmnzm4MnzRwbvJ1wn3ZTGsGn2J8b2D3mmvZyNRjArFRyAsJZKVNivgoCY2Lu4QmdtVq5",
  "key6": "nXDduaW45oRrD7vCk3WbCS14TRiogwpreC3jufefeBvn2QT2aCeaCZDBafXCZtSGK6MrdSN3XL6Zr4J81QBPto2",
  "key7": "5y5ddo6Loyi5qjfmf7VAGfB9tdhjXLD7WE9ztjuWng5fgLnVL1yx1uT4gq2Xo9RwoRneCFqLjixvjtjeMFRT6RLM",
  "key8": "2EpFrJBj8Z2NYj3q5JYRcmEAKPRuaVsehGzLvjzNWXZ8HNaBJgWtx73D7a3JFyNUixBRpsUX6kAwySQBG6zXriC7",
  "key9": "2Pd9NDfYjKMs7rqWD5veqEP61g9FUH8L9Mq1xAjoVWVUADsdfuuekW8TBjA2z7Vhc88CsWd1HEo2QrCRj1VmVHwE",
  "key10": "5dibDDKsjSUEDFnvnez673pqpFBwfxgS2pAqqN8ymoxy51mFdKdgqnxVe7Pyd1TVYw29Z1vevrgip2rDcwhAKsGX",
  "key11": "4SX8Z52DUPtzZYyWebSvfZgriHV8SAKsAnMNkJECqw2RCyHd7FD4PeQPQttE9QUQ66LUqppFLArM1QarK3n4hrQA",
  "key12": "5FPGLiE8W141pU2MhXgrZcegTGSwQAVZ243xcEjVb6dSK1v5ov8h5Y9r4zb8MWCGXnaRBEZZdqFaGFPHFtMJHujz",
  "key13": "2FW3zDzQUJSvTjucV1LMxzWvfjhVN53ALHi4xVjdcAZdj7EJJUzrtsgEkWWBCXUbv36Qm7m9QUqswNbSLxPMsUGD",
  "key14": "2fdPPkQHw4TPLW6oeP4UU6kFVsKzSrcchnwrF2yxizQTntUD4KUMuJ6QiKPMYqm3ZweWitEfXYNGRyieU2DoQv9c",
  "key15": "4tC9vKArWzwok4dgLaG512SH5fEVxcZdegT8ip7fx5A1daPmVQJL6MtXKcdVURcVH7DyhsnfnYWAVZv8EbbPUX61",
  "key16": "4zY7JhKA5vqmSpX5XiFd1QDqjnV5cVJSCo9b1xrgruXbAfuvMGu89cpZa27wEQwxqmnAJ1diYjPQk7qtm1HbCSqZ",
  "key17": "5SqFSiycdLkLbc3XKqRLBaoAMwQHFBenCyWab1FpXpkHf3s88ZypaQLhzu7kDtk5SuR1SnArMN3jjpZcMkqtzKUG",
  "key18": "HGKUrfhZ28ddyKskpUXSD36aGgsYSvJEoXpxNznWKMTB9wEXjNCJWJDNnw97evKS1dBrZB6B4YpJQ4GGri2t2vM",
  "key19": "5f4aj2CE724v4eB5SR2sMhYCVHxQCUc2RhvTeHhDdMCTFKNiSQRvvPmNTyfTraG2Q4w7sL2aUrzhTZQpXP21P4mR",
  "key20": "2rTHrBH8R9BTQLv2kE773Jv17ZbaVQ7e3EwFqwbnkff6z4rwM9QDhb3ooidWLuEWC9XoAvtL2Xu4QH2UpEnWXakF",
  "key21": "3eEpK2pHzzq4iBiriGWUhRH9Htrw6G9Hc4HwTK4nLAMYSUG9Du4koLf5uPY2sSoWi5GXcrAAr2bgQgDyCVyCUD5Y",
  "key22": "3xGpfJpZsvWXiGDJgKHdBt78feGMAg2LH29yj9ohLES2XHZM48utoZLfx4G4qM9YZRgCnFPnXrSiZ8oPMKMkGke",
  "key23": "ZpZ9WTf1e8c22yCVrz74RZXbeN6oLLjUSp5xgdkVPpugQSU2bgZ5JVUDJmdj3wZz1E8ya3bR2LWDFwjMe5M9xfH",
  "key24": "1UY1KEcv7yJdyoecDVudbGnRXPzn9KcyKPzeMWBm6HCbrFMszXZKbM44JGzbXynWpNzCTEZj1qmu2Lr8X8pau59",
  "key25": "b7sthTgx2jrCjUm8iDHxLVSNMQGUBH3zmcpvF2RJzUdSMzCBCVtyBgZF8FKdDui9hcvfKoJG9Zw4HGs6vTqovZf"
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
