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
    "2aLXFKTayYm84P9jZqhREfHM68eK6DqULTAnVeQyu1jFdspmyLYEfDpF8jaeFoGVHDxcGXUQqZtA2ucaY3p2cxut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dtb9vEqw6JPqdt5y85Co1EwubEVSWh2iDSyG4DigwBqpYhjwK4ayVvS7V5PT1sjvT9yexVnPbgxpjgBKnCqcqWF",
  "key1": "5qqkrXFQy9GJk4qP6LpVLQbUVByhvx9n9B26duUb94wnWxgMxfcWLUT8tSwxBLt1rteLi2iaY4zhqV1tEbWf6Jdc",
  "key2": "prWeSwUv4SaQ19YaZQGCF2G6LNcPcuHbFq25P2PwGLJoHTK7VqXtJiLBqAeW3vXNC5F9hwJujdmEquL5qKwTjtn",
  "key3": "3fCkKEghi5QDCUG6Mb2G8NnGfmZsMqTKRXJ4tw22iBa7PSuiTbzUu9oFbENvwDqZ5zZNTxwFbjDNGBi6Jx2KW4bF",
  "key4": "2MJphUBkhTmo2Nkp2erQ9Bu93HJJSy8XrtgzExsEpa1XAyL1y6zorRpKyeP8YhCjNShFYeqZWpGEzaC9hda5bkGY",
  "key5": "2HqJnmvkfnfmVbQfQxttBZbxooy9rp6TzZ99RBHUBnM1eJSapJNMEvti3mZgVavt8bKmpSvKjXJhLprK4A69UbXk",
  "key6": "434ynRT7WpXbCK3Q4hwVknTxMjEK55Cso9Y52H8ULKzdb3NZeKpup3fjjRhw3bPL7VB2H4dZRFx2Z5wpL7U2a2wV",
  "key7": "47c4cHwRF2uYB47CoRgffmeEELycuPE9CMc58sbTRbCmc8WeERKTbWMzpdGVu9hrMoG6ie2YNHyoZTTEzYzwH4Hx",
  "key8": "3Rg9yZL1yvg5D27ydDZZAeMHYh1T9zpNpFcwdAhdMviAwUFoNdmjK1VoCdLCNjaKKvaskU4kEHHV7TAonLfYTsk5",
  "key9": "75DgUPA358mv3f7r6axw4UmjAneR4s9VxxfPHEmSBAxJbHXfGduvNwXiHWAVo1Cmnx8ZEGuZ2UaQEHnZbDa785H",
  "key10": "2tRuzkX3iiYHLPh9xJse8DJ4CtZ3rHNyawJ5BSHxkmncx7p5bwc8AbhbQyu7zcvtK9YyVDTapVMMU3kvPh4b9y86",
  "key11": "3jcQNMNBhr2rA3sFt4Lzz2FT2ikHn1JaCyCSKsUFuitn5PKQVJqS7QRPBQKt1echa4zRKKHpAYxUw98QWa8NLd23",
  "key12": "3NrKM5BiwM159MJ6BZj9iWHPF3CXPs6aQxtcUZVSikdwMAivhNtrJWEpybLMmzpdoN66HaJ1xd6XXT5W8mParQ87",
  "key13": "5hC68HDwDV55Uyz6fnFKBDinEM69LhtezQ55Ky5B8QYadHkUWQ4SmfsiJyJiJcs6GqTe1QSWreyV93HuVAPNeffw",
  "key14": "5ZcGQU3xRg1cVW2ZSDaMXgsjUV1bzuyW5wk687AnyiNtbvDteQ6ULbwQqwHe8WrnJU3SYEAy1WwStFA6UAyvtHdV",
  "key15": "5mvYwd7oDLx4kQxuqNMvZe6unpENfrMwxcUK49vuBbow8G78E7EccpXuW3MPfQv4tSAT9ZZjKVDpF4CGSBnRSP1C",
  "key16": "44R33DLn772j23xQdA9eCcFe2gzR94PeQrPDCEw7LKbYdTj1aLbAdThfVDGYE7EHZTJendPzcixwqhGbzxNb8ats",
  "key17": "2MRcU4nXjeoMLZxdsjM2Lk3jm6YrMzFs7PQXzS9dWtWL7ZFua9cyvuxPJov5Tg1cCu7vTpiUMKfa4u5dgU3TkmYR",
  "key18": "5qJPY7u3kJX1oVrSBhrj9mXvtF4fkoPYBjp3wjUQAQkhkrNx4UdkP8jL6fjNunHTBVXPu15s5AfmwpZCC1drvGPq",
  "key19": "5XkDX8uvYHS8FMAhxNQnfCCCE94ZhnuuebTqkqx4rqiTECZ6KR6y5Dh8aykfCq2b8Mr8ggXMUcixNWq8T8NZ2VEH",
  "key20": "5gGRBKDSh8UhRZLPj5Sh3hghy55Fz9pT3DgAEsrEeMZgV5HLA6fPh1aneNUcQAdbwNT7m43d4rUeNTCAvWHoYSL5",
  "key21": "6jqP2wJVLb5nt5ZDKByqXmZHnsXmjCNFQb4g92oiKojwzEfHbCMtDmrCMAcYSJVfZTa4vMz2SPxzAZvKxQ5dWYf",
  "key22": "4WvY54CH7Y4KKTjmXWUBLVNsUVWZMFQqjR6EATeyVuSgoVKdP4QJmFk9HrM97eofeHsetvVKAiytZBri38WM5CR8",
  "key23": "4pCUwWNHb3fQhiegPb4TmXnC8oFZXVrMf1iCFd8Ziamc5sWowRmzju1VAvKa7xE2nwtTHD8GsrhRAVu5EFMnhjEp",
  "key24": "2iEiXSVNmfJuoKGFLtjck6MLU8G3DsnxdqVuP9GEDSSFnbAoVNV2L4Mkeh1S33dStnn1zfCtgb7Wucx4pFnuCeZr",
  "key25": "37FndCjHgjYmoRGksTj94Z6Gw54qzVosJ2vkFHKQmVbyWHCBvz9zdTbnkajk2GR8bU1tY9jMzvnV1oV3gQ5gX3hY",
  "key26": "3A5iisbkPrMZKravMGx16EtFVkP7vxxiiuzK94CcU3FdKCkBcwEyjf85VzscDeUZtQjPoVzU7z4AZoZBcEFTcDs5",
  "key27": "3qPXa1VXYium7A4XyW7Y7N8FXXwyNfoFmyZNzEpYu4xQeoGMbPdQDutMnmopmuYaMPrRFUpWVUm84rBDUFCnpsQq",
  "key28": "LoSY2KsffUQWJMByx783EcQM7yKJoBAdjZTYyZJ7C9LsjsrpJPDeNH2KYnQgo9B1ZsRPteJQeCrQMTFEA2Znx1p"
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
