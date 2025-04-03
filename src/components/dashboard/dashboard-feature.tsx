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
    "2jdyUBwxZNmvHio3UAsvitBkGo4SPsHy8ydjKJjPFV1gxPbZpkS5NymBA3hph5DHuUfu4pcEwSdLRTtbxkFrJmaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tFQJwwDEaVoMAFXk2HL5F9wrjEzPrKkn18VBbuCCfubzZVDHenT37MyrYTukWEyHgnoiad7As8rY69JvXConyWK",
  "key1": "kCX8xt3vfNcXNpwhuUHYA7V41zo3gw13F8d7PNCP2Nw1cMyWB7Gs5NwLStfkM25bwtv16gwHN8upDkhzvjttvWW",
  "key2": "w3oUXpATQMcmZzbfFFFpnmJ2HC4jRkrK44ve523hxpey7bayhEMTTHcmsyS7jWnnLSnUs933YotBbDuf6GUMowR",
  "key3": "43x16ApV2J3mjq2Lyk22JbJdp3ezLHarXvJQyqKd5AWEdz6mBH3pjv8wsN5JS32TfKNDAvYgQe6aHFTC2uxt5wTf",
  "key4": "4A7nCa571fw5asT8tDt2nR9EXYBXgpSw2iB1qzpQ5PGU3QZr11fAn3q1FkWoFzsti9UPKvxEMu7FeX6HSXqserYG",
  "key5": "A44ufNh5pBSNj9HyuxbyFjtgvQwWDNEH6m7mdi6WNdznnHZWWUaLNAypNdLzDawRbidDcxkReuiYtYgyMYh5cZG",
  "key6": "3xt1RrpFi9z3UZZN8uMmJaSGE5dDbPFTFwjpVvGScq3hUfZJNcFkn648RDHjA8uW4dfwrmvX22bKh6RbxLzhWq2u",
  "key7": "xuHLDikrfi7inttGXdVxCJBCeHbdFTBguVb68DRSAc4kBf4ih7ewR6NB2LAFzKeuJ6Xj6kbT7Z4mfUDjKTdqy2M",
  "key8": "A6r49RQJ7PPRLnYpWwmrtFtwdeTeAD3vNkNmoux4sFgUv1mf4LsabQ2R9HSDkodrk9Amz5PuGL8WvekRW85t17f",
  "key9": "5EcQFgLwJTDrJEwQ4waLJE5KJQrUx2pNgi7hio6fJcEvK1tWNXEQ6NrhaRYaU36ygJhGLib6QzFHvVtKjoHf1tTr",
  "key10": "5EExgycB9pK67tMXuNrQTuDk9yJ7fpXtrNp4gJDiZ4bn6Y2VqbCE7Vz4Fif1UQDEjgvcYyDmS18rvEZNnpgEkDWm",
  "key11": "3e11pS9WcZ4kBEA7njQ1nHp1K8YH9G6u8gB4HnJuVKJLU7KZsYDYQcWfM4UraKFYHp5zv8V8V8XMfBXigttWDXa5",
  "key12": "3RqqehnPaBaxcH4DDUSESYEH3pubiZLKtGGvHnFKcRvNUQStpA6RJmqCbNdj8twZCtMNhkiSAWuDFMiB45FeZ4Du",
  "key13": "4FnTEDhTog9rhz5ic7NenfqDMoFVvW7rAQm584uW4p8XTQ3HN62AVG11Y6U86j92ig6K2t8SXJUfKqG5y5ZrWUpy",
  "key14": "2dEeWU55rWQwpyJYnpLJ9HM1HSg9wkhimR1qzf3LRzKRRoC14wZhnf9BEErZeAb5kbLYPZ7zddsTMCSqRv8SdXEZ",
  "key15": "5DZqEFo3jtGdVhRTWwbTCj9wrvPHkqh2boj3xjug9fysPstUmKj455moRUcS2DT1SEWd3XQytZh4nm4REY7UugrJ",
  "key16": "3vSAU4txbFDeJcwSg7k8bB8wNozBKmQRLeRPrFkMk1zokQKqihH1hg5yqjz7AeQss7TiXFCABBWmF6uk3FqR4JVd",
  "key17": "3UcobqJTvBhuqfGYdQW9VKw31q6g9U6NTVC7SxtpT6Yjs5SkBrJY8RYE3yp9hqhcdHwS5bsMnxfoKJNV18rzKcNY",
  "key18": "634hmwTvneRCXsKagsUEKvVaqS8Cp9igtzTHB7z2rmAayFUHbu8VtDoQMyxtYK4tsfsBoenWbwrJiCDmRsfhMXFe",
  "key19": "3KE3P1TeYeubzU1AEH2k86o9zPV15gWMeMaSqM22jgLHaWnhArcE3eh5XdQQxF1b2mahXc31YWDmSt6rJB1zSz5h",
  "key20": "3tu9Fa3JyMPiJ3eZvDwcjbibTX6BdRp43LxkQx33vm9KAoFKuYPrcXaEVRQ53jsQUmHVXBcuzPhXUzvfka5vX5x8",
  "key21": "u8Reu3Wvjoam5nB8L2hBx6x6vkoGS2x12sBXso7q4CRPuecZJ8zXRBJobVCdqoMhPHjm5xtxBD4AadKciPeqfYi",
  "key22": "2243FSPGA4u9Zn3aavhVeErMmj4Q5sZhp3XSV4RWkFYV28KbWoPcNks69hJE55L28BFbGKUJ6AFzRUg42hVQdHnn",
  "key23": "4WP89qnisbNHjcxMpnRfhvQ6gN7gk31mKRJiAc1DYES74j6rHhUBPac3HFoqFQicX4rdRihKF2SeESC2REhrixuc",
  "key24": "5mTSD7vr5oYRBqDojT4Pmxb7FuQED4TRqLtxB1SqvuQQ7kCXgBqRYhmmeLM8iZjrvMknLE1gYpSqpJ3MKZjCryBF",
  "key25": "2GPze353iqo4EjigtGhpFuDqqbduyMisU9gJMhhsy8NGrkm1iSqPzPwFvwMxuzacw4Bph5iwjYfZfnPbP21kh8JC",
  "key26": "2ZeaZE7AyFXvvJ6depEf4s3VHb2xG5m2ZdLKVJo95V5BFbp2eE4DpuBqULTczaYdovTtxSK5S2uGtyWTnf1r9T4X",
  "key27": "4sD17Uws12BRNzHr3UoPkDZm5MsiPaAubX1moZZjWi2FgVrwaQBxNRT5mmE34DS9FBqWfgsRE4kCKRAHdJEnEqm1",
  "key28": "3oGa8fpwYd9fh7bBzEA78PbsXHykmc4rHy2f7KKLkUYEHuUjCjuB3dSm3WqtfAsi5sj6AcPDTBCq4DcRhyPfYbaq",
  "key29": "3NjsGrnY2BDYpHHAgLYyP2rnLMxKzuBJaLXHHkBjPdL9Qt7Upxtg2WRfoqytfGprH12NBKzp9SELqELeTTpzkXiF",
  "key30": "4ppcuXDbxy5rwKtiD5xkDz9ZNq6w96J3rjysJziSH42it1Q2Hk2mUjRvy13REL3LYTn6LgXdTUx5AY5hipbCFqGB",
  "key31": "4BLpE4q1jn8eJxydL3jauNFFGvY13iz4XVFFKLNd96hjae4QouXcaJCEJ7mF8JAFK21hhKxNSHCUwA4Vcnq4jy35"
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
