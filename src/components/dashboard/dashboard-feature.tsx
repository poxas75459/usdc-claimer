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
    "5gyanRvFL48a4ppGrVMkcHQLhoZafGCsmqUub46h1YbAixkkKmY3Qj2jPjLnjx2dWANKGVDQDceqHkhk2bg2Nrvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32rt4iuiGV9J6CWsTmGEvv866SZitJeK6ApJ7wUU4pBAPFVkeWmwY2dmLnN6c8JJvZhuhDdCqKWbEA53GDEf8mBo",
  "key1": "BGHTGcAJvQSzMQBdMm625Yq5DG48FRoG2nqLEh9hwscWEyRyjjxMU2B7wfVFxq42bL1AfHLvgQ7wu36r813fR8n",
  "key2": "33XvD2jD88dDpdWvWKDrC6uoRupGBinwyJd7m7CSAj6jczaf3bkkFkypzKz2h8YG1xXXuuqPqrsn2xscShNp1Ng1",
  "key3": "5b2jPGMfiSZ7LeAfmH9yYvmwJMSH8r1Zmhs8AafJGjoua5NUfxGYw7PEhYUChDas17rWjCRdwaNqicCsRH35ufm9",
  "key4": "4pormNLZhjpcwpMsu4EY9mDxNqwEVvT1MvdGWBKP1fyppSNLof4vr5Ze8tByZhgA6Rtn4qhSZWYpPAqYhfBR56D5",
  "key5": "3bptgWe4hqXzZtDavq8hLdYuoyoFNJcQJEYf5HjEU4QQQtaJM3RmQJFDfdogm7TyW28a81mUyvsYG1797m1vTNPy",
  "key6": "4XPKm1svPJDxsmwXPraRqiJb3ecQJjQ6YfouxfXSCBvLh1hAUaEJVrGxiBrmFZwBV4aHaQam8TgfSS4M648TC79D",
  "key7": "2bEsD4tFxVApZjQEFPh2ZTBs5Xf5KBArCJBdqkkLur3e7Js2MjwSmj4FQusLfuy1xS3rg9PE8Yww8VdV11G8jrXi",
  "key8": "2cHFdy8XU9fypWzBLb3WgBP9wjpw87fHG6xus2cf6NJvmarcFx3LN6tx6xaVyWLre6RmcZs38mk3JAFC96Zq846k",
  "key9": "5hn1SMitsk6Xkf7KcVSJBuC9WVZ9fTF565uCZ3KkTGywoH92LGom2Ur1u9ykKMuST7ZJJXrQhdFZuMETiFx8syKs",
  "key10": "pVmR8JyxXMwXVYEReaYbgXEG2hQp2xaRW8xGwjory2TsA8F8X3myZj24NhoWvNw4tzZwncs7xbW8jAXNXbKHRn1",
  "key11": "3cCWepV7o1v99UxXNtCuZqvnv16LRutfQT7eyRVUnt2GxH8fspBk8ZXP4rgQr9FGZUsaUBs8kZcKd1yCNDEYZcgB",
  "key12": "5kk2PdDZdamzJz2JnDVPg99J6HMXCdmY5L4birKaWDD1X7udbJPCWv5N5yMgpR3P9EdVcmiQ2dx377VowNsbfEBt",
  "key13": "4CYNXBJMTmoJkQjfLn5zXXsQoYouAgPpRWeGRKUJ1FJ6S7nn6y1ZMozZAFaMVHo1xP5Z4t6jP4fAjhnFsaCe498r",
  "key14": "614fhZ6GL38wSDp2ZUEK8NnHEpCyerhTD1PzwNKey5qV83GKAM82n7mxNnHrEZgtctT1tGGsXBP3xqYbpdW9HiZZ",
  "key15": "4Zv5KLSetDAYdwA8MQVCp25hwm5ruxQVMsLi5e3awYA8chNsypixznS1tNoezg1uNEZve5VvGKcAZvve5wtgBjWq",
  "key16": "2cGx1LdbyMdy89J91eqaauMiz9ryZqNX9nmGSXEdnC5jh7zyuo76wXjq17xJkqF4ZCNmn41obwaUxzRM3biD8GH7",
  "key17": "5c4zCaLow4NUSJf1sDimzMZhZQCZGYTqMua5fwz2W98Y156Vqo1JnGjRj2b7nmvK2cJrYnZ4kSc7H5nZKGp2Q2fn",
  "key18": "CJZRbLBd1uKhnzcz9EKaUsgxKPZh2Etj2MnUjB15rVtTK64he3L5uc4vQoCoMTN9gGgcGpVsxKXLNxZT8MXCuJS",
  "key19": "4th2ESeHWdXwPbvyuafPvPNQb7tbE5ogbgTEQWZiVevwi1RdaoQen6F1MvoZGx3DDkrGhgQa1AuGnNbrQ2mALKVC",
  "key20": "4ttm8w3M9D6t7fWLaePEkSiXYJHxRJ2Q3vBYdy1thJV3GKincrYpueSnKTbuu8oGxCHbeVbGisqm5FxRdDsQqaym",
  "key21": "2RewAAKCtEW9yJwXQaxsGBWYx7t2sDpxmpjaow31ca6h6rLEo9upFPndVRS6iq1P9N4xYf2r1g6ow1GhS4RDZjLp",
  "key22": "51aDKwXJrrMjxPyohgWWLNkWRzdjhL9PbvyLdnKPiztaQa1BrmEXFpKGRcLAwR6z2kcAhHJ2UEp8Ktnt7z18PLFr",
  "key23": "2uaMGKMF2GUejdLC31JmoLH8LwESajkcZVZzGW55eAweDoVm9JRBVUBUTGBgFSSw2zESmPA2SDLvaQcmAp3PTpXY",
  "key24": "2EcdQpBbsTSPLcWj2LzBVbMPd7pCzarYvEfcHBMmTZtuUnLXMrRp6J6cwDV8DEvpBYAaSJ6kzHAkKSSR6TZkwtGX",
  "key25": "YLuQbkhHQdVJSP219x9rxY4uM8dMWKPk5mZgkxS3zqN1GtHbt5corie32qdeH69fH7F7ygbs4bF7qAEF4Afbww6"
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
