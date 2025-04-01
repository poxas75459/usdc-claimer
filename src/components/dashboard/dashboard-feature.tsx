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
    "D2febJ83yZeRgQGTzs6eSUUUs1q4VfjQwioAfevvSmxqTugifNXd275WuDTw3rgbw9GhRPNNLFJff7GQXSYGRPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K5r4gyRQxMEzwArMiEAQ2z2nKYLpPTnBhiYQMgvBZC9zuGGZPLomZU14QpJQn2dFpvMqLCr317sZmCYjEMmYvMy",
  "key1": "4m2PZ9rQ6BbzLR2qr3QtFweJXCXL1UuZoCBsD6PKweNnjt1bWMK4JEPWxNJHreybeYTmyPsyrVv94RKRGQ26Rd2Z",
  "key2": "3qmGX9yvCAK695NYxYm56CpfQmtaH35QWpuHATBgJCtCV7S18zCNeAMeK5keB7QsyJqyjteijm2VQWUnbXsJhk8d",
  "key3": "3WgUWYE7UBb2MTtnPpL4XzvBp8JjCuhGjRrso1PAwQC22aPNsnRvBvMgScP24Z6PBV7iQDVxKcepuhGwQqszxvUx",
  "key4": "53vFmEe7N27Qyz6KConFV2iqbBDVAcgYAw9QQUtafsumWt38XzUTaxvesJLhGPiS5TEEYHRMw7RovyrgaVL84JqD",
  "key5": "f5cqbATH8phKeDkUVMb7gzdZC9tGGv2P64w4JRT6sDoxzb2bWGbGKVfciPpWYzMS7VXom5WHxuNPRq7fETyKNC2",
  "key6": "4q6TiZNyWZk7Bq4FR3dbXLTZNoaDZqn1BhFLi5qTqnMWv4dtF4neKE8EmjxBtjfDo3f9iSFAudDyubDYgdgHugCJ",
  "key7": "DXtGSjEDK63tNg27htxyEEUKXCmXA1D8cJtPHeiPxSVvefBQGJsNhoFVNwRXXC7zSyE1oRCAZpuHSyP3YSFBaVH",
  "key8": "2WghhLAgQEbdN3kFDmpSYv3FbS11wWJ69ncjQpQi7CPxqBYKRFtBKQwxhS1ypa3Nbkokb5537ZQbKiKNkwA5LuPL",
  "key9": "4tKtaveTxw9ARxcGSiMvGsr6rdj6ovFrahWbCEfTQy4YB3SFdaXN8MUyYxnZFkeb9YAMWBgmmr3Dv5ng179Cqfu6",
  "key10": "4mmFrTGwLy4tnSUfByYpRkbFiCqVjH4RTC6bhoFSgyJEHGz9sNLkRjGSXTYsg4jnCWwKTu8Q6NErc8u5esxfkvtD",
  "key11": "3PTq8t7UNkdU1Ne8Vmnb5GihLsfo8YX9e4JrJ53qHKMpay2pfUdg6VozbDwqAVVBNqXsbkYfg9yPkCf1pTnAoHqG",
  "key12": "4wcm9AAwshRj7Fpu3Fk4jE5WuvtehrevrBit4H3VJSNQZ4HhxRTUUjbmPzMH7X8XAwjm5HEE3dHTdAfG8ZTxgcnm",
  "key13": "YB3nSDWqBetMqmfi346VAnoM1kCVmAcgWf3RKVT6L8MA77kgpPsFDfgXhaiuWeScSTnE2UxvuBnfPqhxam8dJdJ",
  "key14": "5bzPeWoWypRgBXAFKzvcRSm9iiahzZkMhUTNfdDfWj6qcxBeJNw75ddEfCJV3iwMLpwaa3AWksdCaxJCg8ChAbfT",
  "key15": "3S8HdVpEcFT5UYcnJ8QYvbPFi42TxKqprzgk9s63moigJGeikZMbesPYpvfYdpC6qoAd5RZXuKnnSwyeRotj84Lt",
  "key16": "22A58oxL9fqrCVzcuuCt8iahmrKhZdGaxiDndb8oBYfEcSYqYXx4tpqEP5CAvYaViMyp6Ut95ZuKowaDabvG8rdY",
  "key17": "Ffvc6ieU94u7nLSg4kftdbqrJWCE5KBwyh9S7nYS3Cjob16zSJMN4TzQ9hHRHFi6U6XRDbmu8NP9xTmde9FGTWs",
  "key18": "67hNp31fwdN8vqm1Vw3gUMmis1UBUQuYVXecHX2Q2575zoRvejepAYq1wSj2dCuytWq6WtVhjEJzjSVUDwygWbfv",
  "key19": "42QBPd7fBvLi6KUs1B5iYaAFQVCfTUuRQ2CUitZrV1z1d2cpACqz2BFEj6TQu8rdzaAjuQC9MRRZHC8nhHS23h7h",
  "key20": "63UfFEsYcC6DbDW9xM42H3RQw6KqR3dgEs7FtLAJ4TgYH99UmtML25xjqaGGzVyERtEJAjHPM6ZfkUL9RbxFLBib",
  "key21": "3eb1tz5bMyvRYNUF4qjxDdoWQSK3aPLexuvtWvKb26gHB5ytCcEzpSwN6WYYAdXRpRqAjJxKwTfmj5KPWiKqZT2e",
  "key22": "2kdMfj3EfMP4XCTZvwJwcxy9PEj9muXMqPYSEysRNDRSng2KgGGohHdAeguaPGouWJ2MnbD6fmQzmtBDfYsKJdvM",
  "key23": "2MGMFgV4vPVKFEFB2eSuu774TifrhE8vtULW9AGP2B9Pj6vqHMgeN5UkfQ2PtsCPAVTGPjwpCwcBQ1tk4jZW1d5X",
  "key24": "ezEc7iQY6DCiW9CQqFFqYqMB5R58zSs8ZMG1WvAJ1ZXc18juaGZUD4arRbHF8nNAvMUo7xzMyQG53Q1TFUxzGRR",
  "key25": "4EHEUy3VfhAAxDQxjA121b8GwQdeX9PjvLdjZVHN2u9qmVzrPUSZbVShRy5W85ajBApLjF44oVEyzGALJp7fFQTN"
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
