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
    "2LZZEF1Hy9ujUxHzCECzSwLukZgQZ7NbJb2heBHkfctS11vVpH3ZBbP8JWoyVjacQm6LGtSqgTBTZ6Q8ZRXDfMjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K5TWrEH2HfxiGRnjUYiwjvmSESJwxx8sFKFQADGSVZAgHhLYZieVWWEyzZbxcXm3c5ET5uj655rxEN6HvUQfnwq",
  "key1": "63tHoRgM1xkQ7HMe4B6mcefYd4e4Vdxt4FGbQLhcmcSDi9ZPCo95pvZb5eSNkvSNfCJJMetYmzuybhS3gRcBAaUh",
  "key2": "5S3QKcvkTaRDjeSyhF4h3WbbQt8cEvCLCPMX2nPdCkHkiNxNdRw4bNQAtWuMcxcQnrzsndFoNPkzEBoLByUyKr8A",
  "key3": "5KVMHRwHGJ4PcgTYba5qa814equLtKGNHGn7B5GRyG4ceKfWZNp1xn5BwrKMjKvX6EXPiZCyL2V8EJ8ELNCpmP13",
  "key4": "4Ge5yP72KRYNL6JEGXic9zEPjey7T9eG3U45tSkaRLkCJGCeknrK1nFnYPGAWnbGZkMYKednYEudjJAkWWm1fN3i",
  "key5": "2MQrpZKC4ArUPUUDt6JziseYTpt4yeuhdQJeotm9jqgzLCw8fUmmZYxmsZZBmyv7QfE7oWsuxyTaniCoyvyTfetP",
  "key6": "3uxFTxCrRwm5JvJkWsRiwPAgAnGn3sBstskj7cRHjfJv7nr8eegE5p7Lca14QEbjLHFDP5ve3c1YMdeLP71yTxTb",
  "key7": "5jCGJh19U5LvsymG2VboXhNvsdH92iPgBfBuemuVQSQnYeVWCrJPVhLufFAkazScRaCYi9o4CpMU1fQbKGw3V22g",
  "key8": "R2tJrGVfdu58Eu7CXc9N8ZJK5nHDYB2ffoDYtzEEn3U2rFrcE7U6ZGLNH5zjNA7QVZFi4hEe9unXsT1JtM1q5bZ",
  "key9": "5He9moxjqNXQqA8WJVcbRMYwxizk1jgZ34mYPdyD8jKiJ4B81dmrmAGKk7xgVTBfEt8zeRCHVxzmYxF3rShRbd1U",
  "key10": "5G27CKdEoosDX3iV2rsmcYDQXg2aa36XLuEa75xa2d33V7zmm1kFLyFpUANjWmt7jA3rWTDBsn9uSw5Mcxs3GqDS",
  "key11": "4cWusKGoskuxNfRDBM7zuZGBE41QQqQJdLMQbVxPB3KXHbPVZFt7SbxyT1FUfYS5faaAd18vB93rmu9s8PyF59SM",
  "key12": "5EwLNV8ECJX6DkhsyJd6MksBb21nzGboHsYq5mMDEwyWbZSEPvp2hQKRQ9UPzzD9SQwRspXqjjBjoAyH4LQfjuGz",
  "key13": "2UszozwzjQag4zpLRGRXKUAWxSzwCPZcivzLtaUdcHXR3R7YWippAfur2KgbS8xPdnKdm6PNK71XLwYSaTxQryLx",
  "key14": "8wh9RyVhXZas4THQ6VBg9bs1sJb59v1AMtgeQqadMadSDrpvaJaJEXZkuE1PgDoBZsgpp3N5DENcWYhAPPvP8hh",
  "key15": "28vmxE3cbWwmbfJMXxq8BeqwDb2zwaba3jENYyAeQNNHpAU37huAwwuwYyzTtzVZkGEk33M419bqpicotrggLCiK",
  "key16": "3ZAWLe51HtovQLQFeYvc4AVjNNT62LHP3HFmzDfe4XohhjQvPeiSxBHnJ8BxRPqwxM8fueziD3Wota67HJq33tTc",
  "key17": "4bvTgE27AC6p3io77k8uq58QajM5AVDBSY2a9aHGxBak4tPneY8Lh2HFCWBrTf8c7YRmPfRgbf7QdPXn1Jo28vLv",
  "key18": "2qoUbfMWuzxsT4QRhDkweJ35nGMtvC7DMdPoPbws2iDfuxeFVJvTVYVAM4JAF9R36fK316gy6jLDkQeZ8u7nAJZ6",
  "key19": "4LH2G2w1zLxeGjzBTNzokmheycYtEcXPrgfSsyFv4eVm5NB9RH4dShiDnTYLQA3VHNg1z7UnjXRHDMH66oHf77FB",
  "key20": "5vNd3b53PxnRyr7pdJt3d4JMEjm8WnKHfBE5VQkSyY56qk4YjcLQFyivAJ4pik3SnktFeYSri6qAHBmyrEczQ7DJ",
  "key21": "4xJBywQDGRCSh7E63SKf7WBhnWSThwtGZji5rsnmTt95tqWLhoMuu2Pe3xKjWBVgeZVaMmsD391onFoHDGhbKgSB",
  "key22": "5m4Jimj5gjkKakJnBbY1tMEu8tJCTyoEYwNYJGgooEFWGUkjirMfc3DGLiWK5fpdVpt1sJRRHAxcowbNzoeQBzY2",
  "key23": "UQ1uBeBq8pyxEQ7HmJshSv9hCdLCzw2EuHQNaoUYs2gFvsPNPJM9mKiGax3eikApkY3UnEEkPFJuuKYMi7zQ8t2",
  "key24": "3URPujybpQ8K96oxiZzi5QSX2wzZhKMmhfbS5KWdUDD3BVSKUP9cjquAGqYXNMMg8s2BVbffPA4pXh157GnvnCom",
  "key25": "PbxiP1EmenSumdZx5m6UbCh5rGbkqcE5A6DZ1DeA4XKzrcJTuYLEgzaD3x1Jpb98GH73xcgKbkMcYAum1pJQhdP"
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
