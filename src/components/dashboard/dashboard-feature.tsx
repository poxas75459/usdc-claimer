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
    "5xCAyAroKVtXvDSJ9SwZi5BfyXwd3tsMGt2fpLmFinRQaHqBABTpaNgLnP4e6yD3fXSJLWNx2CmMHrTkgLfREaf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61YjU5XDssm4ehF177AZQ92A1MYM8wq5dzTAoVY3btW6xMVuVY1ALJodsYAxAb8y8hHovFQXpQWtzGLcqGtmxWnS",
  "key1": "57VuzK27u9MRxbKPc2QQ272jqW5rZ3bZ2yJVU5G7RiHUds4Nn2dm2ZQwHRR33ES78yF1kjqT1yJD5cJuntfi6EXg",
  "key2": "5gGEosUZsYELYvsFRwa4pTUmESzkKtvqvNncT97hUJDZKuPi4TpjBbK7Gmokqujc4BmDdyFYp5YZNPoDK2SZtD3p",
  "key3": "5q8UdVYm9rjfNhweYVEZ8qrns1cnxkYH8qvZhj3jxJazQjQWRgvUVUckNG5JmpYy3CBWMrzVAFHZzHyWqdVDS2Yg",
  "key4": "4Fp6u4f2QGGib6pDDFJXqSMJhxMZv5AGJy2W3wR6TD2ZNvAZ8xBUMpMG6bSTQzcAuVXHNrrYXTJVv8AZgJ26YZec",
  "key5": "49MuN1bU8vihjPgUDptj1DaFvUoF5DKXz5pxpgiC6edTXwi42rKbF2vXaKmit5M3NNaPPB4f6UQaUFbzrQtkENXh",
  "key6": "2WdkjKnRGKJNyNrZtUNytigQirkpuacirZSmbJ9ypCdWZCt7JWuGBeR9B4c1JCknaiUPtuVKe1XcU4QR75wz53kX",
  "key7": "5eGvKHJQxBgQATvdy1LVUNQ5dZMRBUnGB5tpW8iFpBtaYP8W7QHgw6eEtNDU4SyASFBU8xxNgC7soQvM6fm8qkqa",
  "key8": "5Z8trimv7fpGcFyhRx8S3MNMEWEmNCE2c2f6peZdwqe1BuMxJMdF8iUWeubBSRZfGmNm9rWDsWgfybXFXSWysvc8",
  "key9": "ucgrVQ1rArz1au7tS9UPmdiCnfmLWJjvVREjShsdNKZe68oPxyy6GvwTmr8c2k3U6Zp6VTbxZPSECEWqQi11p4b",
  "key10": "4suGcL7WSH55pVxXcrVDd6DTQQax9d9octzXJgNgAB24vtCjWwRWKWphEyGDbDR8CxXGRHNqn5sHtTDYvtHB1Mi1",
  "key11": "3JPfwNiF5yEieCJp7ghCWmoUExScP34eHDaywvbKt3WDjNACWjFHhipx8hYWmLoNfcMyeeRLztmF6oN2mwyGbhdo",
  "key12": "2R9nBbDe8FTEp9veBLCiVGGCX8Qhs8aMDtLN5Q7FC2h681MEDQUmuMzjrjebRrq7xwfFkG2WPVLzkeSsaYVbjQBX",
  "key13": "2TxeVs348CkDfFM9H9wYyktTjSJb34MEztjU88gBK6cWaXGK6yJZ1XaoGQQQV4sgFmV3dfjDmuHXoFrCgdK2nefq",
  "key14": "5zbmc8uFfb9pRm9xZ7Zn3UNwjyaBN6EuDksE1ZhNXUprXdfAUQzg6CXwGwTKZWqwjFv4EHVow68RFGMrbsuXdST8",
  "key15": "29K7FchcopS3xFPjSuP6GtSMcWkQ1FzRKexSG6gVTyCMKC8bA3KzPwBs6iQ8ogWTtYP4VPCWtCYMzgDbgpaEuuQY",
  "key16": "42dKFqZH7va18knWirDkfrqwXjtJgoubkotCw5hCScnHhnxjLSCzyAa2dMWBjhUA9mVgdTtdiw8xAVVrYbRCpss9",
  "key17": "5Z1xcMLfLnugMLkQGZF7M9JcCK6NHnCcHDN5mfmnei61ckj1p8QKNKYfiDyBLMtHwzQrSN7JaN6eUnA9WmARgVjc",
  "key18": "5KAGPLzo5QrCPQ51Ji8Avubcq6znZNLob2G51LqbKBiNZxUtJM9WbDTpCztt4UoWJpTn6SNznTSs7gH4ah84yzSC",
  "key19": "Kd6fWidSGjtggfvme9QG3f99385rUT3BuVBR1ZoDfoQqxdoaBc9hNHZCmzyWgk4yXRLq1Zqnxuyo6KhWUeUEY9T",
  "key20": "4ZVBVyNLpe2GyB4qDMPsUPGz6DkydkvosYL8vpELVBDrRUtNLiu8X8HR92Ni9PyxpMMAiz8BS5AenE5DWacoHmNH",
  "key21": "3Vtt9pwDL316BRj7QfvqqrXRfJb6m2QsbSqgcGK4b9LakT4wo29AGkmPpCFnyAuNa7xGyeDG8y4wV7XtVTqD2tmE",
  "key22": "k1LDgsVibrMnAXrWd2yX76e9zRnuxzwJuhx9o6PPUaJhFtTMCfbAZ9pLVE5DmddJLuZVXzLV2SYgDNS9eL4WryL",
  "key23": "43LvKZjvxSDCjaKf1VbLxtz8R3sLh9HJ4DBs3iLXzw2n19t9GjvqEjJ2mvtP2k9naq6mGQzJrLCjxFemZYpGVSUc",
  "key24": "Z7d6GxpuK4waet3ccuPjszwiKYbduxXwUN36bC8mib5dywdPN5mABeyfbdLad9rfhJE5xeDWfeLzfEwspZGzRpS"
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
