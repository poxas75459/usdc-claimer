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
    "3Jk9AT1nNsDKYxti22FcwAyLCyqKehhR3TdouWprk9upnY51pWPNUbdkVFM8aFv2c44x1NpD1Bj2T3b4JjKVPirM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GtwuKCWkKcB4DCUGzp8Eju5gvsqvsNA9GrCqzUv3jrznZ1E9A2V1iRYFSdi8rmWzp4wEBK6hEqswYj4ZPtx8sLn",
  "key1": "5wVnp37dsVwTiyUa3gZipfJnUq6Tk4BgcCx7YWSiC9ivnyaup2Bg6tFJBxfJShABoySt1pdj9Pa1qoxRhZYUyxa8",
  "key2": "36SfxS19s5JMNpKMpnSRhwHp5AbUS2jCj7BxqAHdfXQs2mcmHcXCiCdrAqehdTNHarbFdSB1u3B3ayn75Wz4YZRV",
  "key3": "5x74ScENizgDrU8RWsVQ3juVL1nL9EtRoS914LVZFQzG4gWUadcsJvykLdQiT4H6yuEzCq7zY2RfuaF5Vy4s9tUh",
  "key4": "3wgb192qo5iKhv8QvNFm3fW9B9UzFp97mgrXG83PPR2yeweGPqDzNhg8EKLpKLesv4BtFDbQqWf58zNW6k5Sfjzb",
  "key5": "4x1CC1GxjFKfyXX68SGzZPEEF8YESiSo1t1nHmWfVdCERkVaG84j46axeEVveZy1eamgr61KPAHyB1CeecHnnsXK",
  "key6": "cANiidb6bvL8XwJh2AcRkwvDMa4ejfm6wPujwDe5i4W827aT7v1iCrTQcMHMPWGKqg9FAuuHrjCMugp1tcCoyHR",
  "key7": "FWWw5ugsnNTVVMHjGUrbjCqcw6kTcYeY7W6FowEs867SP8TjidcSn3J8E26d1umVJVoMuvQEx7Pt3RgJmDvaFpw",
  "key8": "7aDbCSGNiLbZL74Rnx8oCLWZ2z5XoKySfsSjWXam4WCNK4FFH58uscbgRukioMtqdRQzg4zKwPX14f7AM5BGLxR",
  "key9": "578r9JWQCKtJzRLRQ5b7jcgFqV88FbytPiCnTdAuWF459uUVP79Ct99Wtpo3KxsrgJejQiMYM8598sbqYHHADdtv",
  "key10": "3wuxjLxqmUw9JiFMJC4wsv4W2N1LksexPDXZ2vqPJW1frehauiq1j5E6V2tDdxAvtD6BvLhwVSg7mxKmWHKm5u4P",
  "key11": "2q9k5rDeLkdUWDdHBCM4dR2Lc2KkfvPHS1kpSNo3pczqF4MrTrafw3PXaV2CfFuGcauvnBZ33mv68SWy1AWSYs52",
  "key12": "5ZZPsXcUKTqmmtJWdwTVW58sM69WrWzvf9rDM2BQ59QzgfNavhA3rnu7q48GeaEnNX6wgYYP4iZLxSzW4Nvycw9S",
  "key13": "2isweNSaGyzRo3AWsfimgCm1qh8G6wxFbLhwqgFviAUSDKV4ToBdGKtXTGppXqgQQQEcrP5SuL9GoY8rNC17qNos",
  "key14": "xStgeo4DzSMeCHyskYbGMYk5bckJmYFKHRJqpoENiQMDEbHrB5DWK84aNo9PgkEghCWVbNM4kAqpJYbBNLQvhpQ",
  "key15": "3WNbfzmRHmFm7gJPbuabfoyotsuvxqb31wZghGpsqVkbftknE2VJn7cUyyXMsFuUFFmG5tBB3YDtzZ7XLa8G6KN8",
  "key16": "5zFEvkk5PcrLcvyPqm6KT3Ltq4Jpjp6o6P3Ryma6z5bcGRDqCF3cnsLaq6yPgbsJAkrSSFoeqMCUQrqCLMdjNmVd",
  "key17": "4btLTgBZN1RTpVSf7oiG6ExxTte3TXZSzueueSvj1qyykYBT9fcfbAKnhEXauKMYbbnaMdUGFQrsN83rhxY5ieTg",
  "key18": "EsCP8PNXuPmQznTJV27wHxM2uxnAXBEC6LuKBc7vvJnvo2ccVMcMCHqB25nL9cDLCZKJGX6TiYQmeQKfQaapMHk",
  "key19": "2oCjvFhzhFVMYjFvKMsuKsqgJUPmKheQwnHAAXGGgCb8y7jBbxhcym6fWJ7x9f97sb4bAi3aKNqMkWHT3CcZ7xut",
  "key20": "3MNCeCSN913zU6sKG8MvgALiqyMpt73h6uffLYYDk7GSXPFM9ABAFV73HeUUMCGuswuaryDWa5FA5jreRe8ZQafQ",
  "key21": "LKfGc7bN5sbHZtuE73ApJC43Qt9HwTAGU95pmqfvzhaxbFJ8zgRFstKNr5uXVrQ3j8VPUdFQRQfsUJLFWhA2jGj",
  "key22": "3bUkwPAztFefceVMVpguSLRTndKESBGDEc46cgBnw5VW4b72y8Lxh9jERtNEMcxevn4znbDwCCG6STdCVLFVyCLf",
  "key23": "pFRNoKmxzZMUn1seiTwKkVcPW9sCur7ymjPRbaY1RYzyicZ2QhGQKPCoMf4hG2m56sPkvbAk5FrRvc812E3jSu5",
  "key24": "29i12JMLa8b7YL2ekb8dJvktPPWsw3E6K1aekgZTMKvLaiU8P3hVw3zqruVi8xF5HQhiwuKYFY1vysGjFyHRvzof",
  "key25": "4KAcZTXtjEjbfYBxTD48ZYNXeGAsFYoFuciQfV2vVAjBRb1MLMMTnTtDLG5oGJqLftii3VVzLnXNANiPknQd4Lef",
  "key26": "5wU68kd5Ho2BLvXFKkzHADXzoYKtGnuiSiu5mwsDPtiF2FrR11vbA4m5t6tqfhQWaJc1CaKXysTWD9gjc9JVuJW3",
  "key27": "4Dwk2yWXqSsx1puhhAMgqZBYcNUpo5sJVc86yFZ6qCuJJqXzQLJnBc98vN4g5w9mdaZZWV1BjiDJfF2o85sSr1xk",
  "key28": "4wr52RE5zR7LWurvkGdP3xYLJW1wjHtFv92AEs5JLW2YST9SJEXzczJfTQtAbwxthQvwQ5pcq3p2EodTBjnmFsJi",
  "key29": "2h9QYzGmLkweExGi4Tzu8acHWBq7fMBxc9cXpUPgzt5UFQghKHyGEa7AgT5igskns7SvNFQEvSChj25i74EvhmJb",
  "key30": "2JiAB1h1WLrWeSQypQTumfdLFXEMHvwBdDaAdGzUC8niS7TLD1398NTP88fkJHejk4UQ2XJ63QhpvoKQHfSQnKXm"
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
