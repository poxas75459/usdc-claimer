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
    "SZKcMdbSx1pCfdt6LCFihRHan8rZYbcyGawVJWPqDqzVA9rA6yJhJ5cgr9m7K9WY3b41tvBb8EXb7jCTrdgo5n6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tD9V2HjRBwA2t9W8ab8vw9uhyw6HqXuTBazzQMHM799pHbtTevt8aiLQLsiVrgfYDMSAroDfr5e3k5WiWEcGTHw",
  "key1": "48V7Pq3Co88ihuu2N8SUA99fkSgrco4VZU9R3KwCSBQ7P4A58i476fSF8msXw2E5wTQkBbyvHqsKXuzivuXQEQmp",
  "key2": "2sdxsrKsa6qmxJLVuqPjUkdB5VZxZXa44cP63aNSwH4L4hADWEgeVs7kudH4TMrZedL28TtQxy3K4F4ZsiaQJxEi",
  "key3": "2f2jQKDQHFSh84ov1WChaQSJwHRan7CVghyWh8kNHsUUtB1pjsFmD5wtK3FJYWEPdBLzdei4NvgjSSxhEWR3aisG",
  "key4": "GY4YynJufJWiyBMrbiaStyU6x8YS6ndwKYQXH2GBhMaQNASghh65W2K6jes8daAuHhaRShccG9tn54DycAojngt",
  "key5": "UCJVoQQa6KDSULyrhbeLGEcKfGebpjUTo77cKob3J2KfovgAxh8N7PxTGLv1jk8w7Lw9QvV94jAPTpWnrfa9ErA",
  "key6": "5RRyFpMyBMY7dwFkLGpbm3wBjjnhr6YeZz8VXnvnPnGHhpzeP45W7eDpNbCMDXbf95d96usJaygLXzFT2bZEdx6t",
  "key7": "32Ki3BqDmHXNPzKkziDC6G1fYwKbVy31UbVqaSN9ksTCk91MmUDBxngYgWWnYT6T3GV7M9xL7xh52t4WxkeydwMy",
  "key8": "4jGf4UUJLDg9pgMUXcVXdJUcfgMF1gBwLivvnY1HxDVUEYKzRpdEd585kTDTD68xQxM8G8KeYCHPqXNqA41PDXTA",
  "key9": "4HKcvwrmD8mRMTkyDYQV8SVweGVY8bzEtpnJgBUtWDuaGw2sGDPihorhknehtB7JsedFvrFxw4XUG8SKrhGZPaPW",
  "key10": "3uT6o1E3LjDioTKq3i8F32C2bGujpvrWvehzvheaBrBbAjGdGHNgQZAKSs7ZsFriSyPdNLi1fALcadwcracgm8qw",
  "key11": "5Q1d68WqF6uSaeXA8aA8ioS3MkJiGTgJaHVxDkeb9LFvvfi3inq9BywYKhjjecQEcybw66YhnMhs3fjpLCBHJotK",
  "key12": "37pwUTfSbgCCADhUrUa5uJfn8EswZfHKciXVZf3agfh8rMZ4KPaMM1fSzLAvoxV7nyaqkmh4uw7bMcp2Kk8Gmxsp",
  "key13": "43mYhjE4SDCWLouVk4eaTfXkDgxRUxSBH7v4JWBoav1UNvPewTqubWypwNqci475thEm5vexbCNo6936TotkDdnK",
  "key14": "3NaJD83Rp2saLRDCtiip69oebPGRetsgYV178LTiuVxJRy1NU3CQPU26psNvM81vSCkYC8uDTxVbvbqXQwLqoDAg",
  "key15": "3Tj7Y41nb83KwiDkRHi6nmae95RPegRLfLf57GSpzaUtXiJ7usMoTdgRYjKttWwj4Gbgzb7Z3j8bdyW1yFWfRqdt",
  "key16": "2FhirhpwjapcV3HVaiHucsBUynaon1Re13wYpMq6frpYTwiCYQKNdHCJr2VvDoCGgs6BHbAwtgBZ4gWjLN6C5JRf",
  "key17": "4UoSZERMWWEryN3KiCWkdzWL3agh7karjcDYhz7pSTGhjjHVFbDS9kegMR7zx6uXx25KcL6WeBWKXGha4KXbNiiy",
  "key18": "G5o6opdeUUHCHAqSy8rCSb8XXzgNGNk5EFxJVuB7pK7kHdyA2h3aAkqo29SXmtrPifmgz7ZPMXdXQXAieHqDXZy",
  "key19": "2GyRTAWxjBetUb82YYVrdMRqdN3yc3kZw9wmykot2EHYCYgaNQwiEoHDpvXuXhYe8VnhDzi1dmgYsV1QD5qZfU5L",
  "key20": "1eAEuFtqZe8RmsVvYxSQoq3sC5XEMwoVkd7gohtbRuxDrRnaBsVK9z8ACfbmQEZLNGK2aLLiUEMX65ggB4hAtwV",
  "key21": "38vaPYYKeCT3zcVUKjZwSV4LdoHN8YbJ5PrEhSPmKqsXqHqKnQbsYpeCUj1i16Rsugb6CdqC7gjbTj9BVqhax167",
  "key22": "4vqtc44JSjHZz5BpsyvU7TEraHDxcaq1hUek1dWZYohdXwgZAm5S1HqZSeXXbZ4eH9Qgk3uSvyE6iXyE7aPEP581",
  "key23": "3d7Zd988MLC1ApSgGPYF4eFwh9FGvXQP4TmZRqEHQyPJmWjZYRu2aMzgSuNHBC5gb42BuvjhaNgbfQCDBRo7uRsa",
  "key24": "4kZ63cj5i38H8QnAQJ5UB4cethCoYAfuL4WsF7MdHUjwKiHc4tgJ5yu6njy9zBLKeoZBckBzcMVohc5bM4JkX5KW",
  "key25": "2ZibNutMgscmyKxpxrwBpRsSBmABvJ3WifPaDW4W4YDmf9ZctYf1QZ9D3vvCWG3qug4aYkVWP59MoAUwpScvHRNu"
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
