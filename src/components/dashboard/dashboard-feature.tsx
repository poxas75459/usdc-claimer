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
    "4coKUk2SgEV3DzJ9cxLqAfaToA89MegbNHJHRcBv7tMgmeT9Jcz6tE5FbyiHHbF2i1WepSVuF743e9Fqkd1aq8Va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CvznVaiq3hsbUuPbcGXhqKebj2xhaLaYqc2vhrJ1gC8DsEcRNUw8ZUX8xpgm1XpwG6SLpEhbf4H93nZzB6gfa5W",
  "key1": "4mtk6dra3pi9xFj5ByvLq8k3Cnm4mc4iaVKeriCPJdmNyTgi3pRswNabCw1DZeqzHrZwsTLTN7eM3F2N6kVXmpbt",
  "key2": "4KArVEyBvfXigqZCT8y1ZeCjnEjqtbFNcf6HXjbD6vJRXacx7Fyotwy5LAR3dkHFvH9g1nGJGFa1Pxt6zRSZBJKj",
  "key3": "4BHr4XAB2fSPzYe9MBA5tBUD53nQNqg1r2beJ3LryRHrUQ5LYHeTAZwFLdMu8oPK5JJUgLjMUofpgZDrKYdLbb7h",
  "key4": "38hWCJhuLWiCQMq7GAVqGP4E1RoF14g5KAY7vaeVQCeX6Xtzjc8bcMQsvPUWHKpzAKYwchtdqqGn3PxkRVdJJmTh",
  "key5": "5ic8H8cSjwCKDpaxkLP3gcuxMwcHfRpdWDT8pL4dqmav97SBVpRs3GxikVyCXofMKqB6E1R1fkRLdzCsdxbMb1CC",
  "key6": "2HMN5riq3HCGg11HjJhr6wMYyTVdo4wNDEqLqXJLH1YbN7JrVwtqwqDD5at8zn7GoFsCrwFpYuPipSpfrQCBBrLh",
  "key7": "5BfZPfm1k9e2YErz5mMcyDFHDZBv1edGLS5FzRh23Jw4xDHAtUJAokT1oMCQ4e6c7fe7525bnAxezwvdMCUTcSgs",
  "key8": "5Q1ncpHbToqN3h1232C3TLAfFMDeeeHYipXLuWNnoK34gZCWf4a3kd7gvXzLXv2Kg5pQpGfqbonhM9Bq9bgs6nbw",
  "key9": "5nhSYf43ppLtpSh8Dg4uveujJrtUauNvVrDncKd5Wv6SwKk6QGFmfMDJ6NzU7T69GDCQsqwNEk5tMde72vJZ3hJV",
  "key10": "2vKs4aNGDx7bmW5bStE1jVD2s1nih8XcZGCyQuCAV5vs9SwkKBnd3m3XgjkKkt6YRdSATSbriPCFvcE8eGj9GAvL",
  "key11": "3rfxRV5VWXTy7c66JVYhGeDsJ3C9mKBpZDPHTcNwo7o9PmFEgSXFEm36o3bdYiizTqTfnS2qLHYcuHDMcCpg21XK",
  "key12": "4A7ry5Z5oukVkKeRSrbZdWmjVVSBNfy7svcv65VEFqLxWh34e5nKjq9YpxuLpJnawtUMqV8nc1ZzKHhrHVNNKfhE",
  "key13": "4YN2Jtbj3w57kkwGR1gSWJhnUnxs2BBjyW8mwYtR6hhdXPLPyWgmAXjUmdUsWEy5CG2XZ1mxr7Dv6AEPwzv1vXyM",
  "key14": "4a6APUim9yRaSWRCkYhTQFmSdwsCPXJG2RNuMfmudfBBSEibjUrNrBS64YY3kedi1KkAP4yEz2d2M5pHRmswCXw6",
  "key15": "48cN9d47AqRzMuWNhmyTf9BLnfFVKhJogj7xKttQaFys9btaLizkF7uKVqnscpiBXAhGbXme5E8D2n7kksZfjyDJ",
  "key16": "3aBdfat1PbmW3tQ7UaWGNUFeey9U4VFbexGW52H6mjuvfP7CUb77kBiPKoHg9CW85DBo7L2SfPcPDgQYCJFvxuM3",
  "key17": "k6HDjb4FQPTiWfoidragk2cJ2Q5bJgcu36BVtzvGk729VQXKo4Ucwtq1v5spsMbq8S3qJf5C9VRSPeUSZH3mp9Q",
  "key18": "R8dJoJp7qh4UiFVtq1HJmtpuaRhxY3zKzttFPArDH6xg14ygBBHUuBpctd1MPbMqf5YaezXtvVky6GMZ2JrorTr",
  "key19": "3KonpDgztvfBPz4ijiPxXgtMXceqS6kBAc5hQqDKzBUp7P2vfdJGRoixywtdjHNFiQiss9NNmPhgX3rT89Ub125J",
  "key20": "3DKK9NTgQtuGaTvXrnjm4rMuvuxCERBDrZME7LHbX1ZydCyJM13sKxVZsCntT2My3HbQDQ8SLmrF4gAPu6YSFLMj",
  "key21": "eyQ2KShjAwtASbEzSUqVb3NzhaPuX2KAVcaHukDHeh6qbcjvQNNaGXcsgJaPNNhQFq1QRfE8maAcsyprMbnvzxW",
  "key22": "2nvQvjwZD7NVdvBzzyZDUcNAQ6ot6uVT7t71WxQ6Ty8a8TgH9SWD2ymYyBZqYXGKnbXX9aPPEuPk2znqeurMZgzS",
  "key23": "4w1cNfbFZ712BeCrHqyxWWCYfpgYpU734L7yfdpr6Z3XX2ShLWZkErGEWLjPHSQw8XG5zJqBTe2t4UWTqHXZe8Cn",
  "key24": "61bnrBe4A4L5EL5P7KjedVWfiEMPksuKD1cpiZJGTJ7pC8H4X9npB5QZmJUM4eVcBK6oG4zLLQbnYa6C9TjqnEvW",
  "key25": "3EY6cNgizCvfKTzoAhy194fTgvgNDGygW7pxfrztruT5fPEM8HqP5xqSfxRorKHJc212ywX3MmLytKJoWd5FpJ9V",
  "key26": "5W6mtXGzzG93HvBuJ5YsKw26tYc1B3unAWPZ98gaQr4Cu4kavYLygaFDkad2CWXwuajtv4wqRByYhaRBXFZfff8z",
  "key27": "5YJVKoS5i2SpQ7iN6BNdA6gTWzPsYUfxzz6Ksuw3Teun4f3EUxcxMBSSMzVBZwcGUaRJ5Fv9it2svZyRkQA7kjNw",
  "key28": "58UN6ksWdxSqFXXtSwVMcEYPVVFVysvEPygztKx6qggtfZytVNtPnqeL28h3jrp3LT4VByuQaEegtGtJL9uf2QRW",
  "key29": "2S32P2mc86tLBLMwWfiD3RcJ7JzqSx21PVpcwPNdScJQtjdKGMpVVwJs1HfExzeQcFVZEr9o58UDqVZ3rnZbEKnB",
  "key30": "5BRnXAZ1aHDufRJRBMgZHxNzhHNuA53QypPVqZLGaD1wwULjaiodwj6VBJhAuHZLTjbmj9nSXDvUFH1XfeQ33Hin",
  "key31": "3cbtJmGkvdJLmYwSZhtCbqotSPwtJanqP3k22pusRefFTLojUvYvDgfcrfX3NbNq44Y6SGuSd3nE9AuWAW2u7CEi",
  "key32": "3ihU4ZqjXNTbgeZ6X7vC77BNXKUb8961vjHLhgan43HQoXqDBeMHeHGwqBY5ME8pMkQ6wxA6pUzxaj7fZKdizvDN",
  "key33": "5m8G3am4TPQfcevFUTUja7wspnYno217qhehD1zprAWHZprSo4rqXmFC5SMk8Mk9trcruPMzA6PLjwThwfGfvzwH"
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
