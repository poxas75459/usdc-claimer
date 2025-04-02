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
    "rNCW6UhPjXEyquKkQBmb8dWbz7oR1eySN7ep1ri6BRZ5eWNWMrbC4vXmYo2jCNF4W4NPdsWksoEY6U3HeBL77jE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mvsnJTata9JtotRxpaBwoV2mBUPyjqYc4eNYnNP6qrAAbRQo3Fj29oro7pYpffT3ngnp9U3fNwx1SQZdfttoPgy",
  "key1": "7dr4me6VMuYzxBhRJfpuCSnSdCxxPf6iVwo4nZsBsf2aJs986cf2HXa7Rc9idpbyVpKgRUxyY2kDyuQG6akXVAb",
  "key2": "5HUH7pHSgE268UGpZTsJqkLmrMdfbmLybkfugYYYpYCzGEiqV8MN8TMWbNeV5Scvav8739ddziF1kLiyK555sEYk",
  "key3": "4R9gLSHb1rEgmYDXmYXrvXpsXeA1mqpR1cei1WoCunZTxTPQkZFjvf8NSWNFVrsFy7jxX9HH8jEH7Qkxi79gK3E9",
  "key4": "5MZgncDAU5zx8446ew6bdgK1Muy7YMtmqRnJUhSSSa99JACyBPLRu58D8yrN9yLsGCpuxRqvdVZtvnpfZwV6vmrW",
  "key5": "3NtRJ9qDwXX5xST4eQKfjYMYhLdZPduUF5ubL1XPCbcZLiunty4dxXkEv9tWkH39XMwTNFoRGVXe6kho7ozmzdEg",
  "key6": "2cUXUym8tBcutVeEoAxVWGxuCZJ6FE6gebmpMRdFkJQqDaZvo2CHQnQqbygsoUkX8ftZ5mRMHsdeXU1tsYYkS2rc",
  "key7": "5S2proKRBxqDPa1p1xdvphEs3R3bancxW98xa7SzmmWtGFbupmiijQkYmBujRZZM1F8byvt6UGj84Lysfd8jJE2u",
  "key8": "2vkKZrbwqbzmF71c4whuEWBaRsEtJC55bXZoabdiHKygBrKyQCYBXowtn9ekJymJPyXngxPcmX3wj6fNVgX27SAL",
  "key9": "3g8VUpCkAmKDqgevfJcUsrv4CLEbZN4LSTgLWiA8pALEbcHh2BWqfmWARA7PauMgyQ7868BJNT3VSSfiBod4DyCm",
  "key10": "3pSyWgEpA8duxc6nQgtwxDaxfVAieY8PDQfycaa4wQZtZfjzYHyU3B3otx11cyuURFczV4DzVT571CMsUuKKBUi3",
  "key11": "LjUD1Ua2nbyfpipLo9sQj115LTx9QbHicBL9io22WSp77CtQAtxLVrA8atQj9ZDasCWKAfyuV6np7rL7Jhozpuh",
  "key12": "49QhVmSXEaunR64M7TL3Zt4WBAgSL1BshnHcNJEWEKDTYtSEUydBmZi9LtvG4LzrrCWNJ5tZ58f6fzHck9CSZvGw",
  "key13": "AuvGCySbXirNt1t7zUJX5RNmh1LVAHp3eyBxGpv1CFiP1sKDkcEkzSRtQtbgdyM9t7kDWvsAB8Qo84gaL4NRq52",
  "key14": "4g3YjvG4zX66QnoE3pFMxSuveq9ycVsyNvpMBBc1FyCuJmaLw27VGecUgbw772ARYmSKM877Mdg6AmMLckWK9usV",
  "key15": "5gugvNv8iTifGUzt8RCK9MsCA7US3LtvQvjie8r1wva682pgMYPQKZ1qZLo7AvSEXdXSZnKyhao2YAc19SWTYPDS",
  "key16": "2hAs2j7RNFpUfva1VkuU395Vg8LsiUAHkZs4fveGChUaeU27HwxdwAGLKawib4QbRFYMpW9MSrev8NaM2R6KSHch",
  "key17": "28K2BERKLJb3PmbMJoH6PX5dkrGbwuu4ctxKcKSja3zfLdh9ptFzXSgtAT4kfyKeENpSAJh2wn6jtd674ktXAB3G",
  "key18": "xAeVtLTJWLXp28qMBe8mFikdwT4nxRonnCsYqU6RM8yQ5BLwkmSqnvV1q8CHXrZqHwkPg6mgJoK4UdCnK92rve9",
  "key19": "3gUkAwJv47T3qTMULTGD73fuUYqGb8AvktCwsnzyT3BwjQRkUYuiUuXFfhxbxG2UDmTFKcx1NRMn63iU2syR4X8b",
  "key20": "5zoEmiMQ3yPnhKMriHGjmBZWGLxTP9n9gLVpEzHv9VZ1DvP9FeZ9iS2hFb23gE8SNVHsJg1MPRz7yq1bpLQx2Yzr",
  "key21": "yg9VD4TViLKaJbPPTFNdCVHLe6bdaTshFtf95MT5FQN75m3LtrNuKcyBhj369ueSc9ysyqy2mQCjGGoxrcyx5XN",
  "key22": "3Goye6koXQcPDb4hSdeuE7VMGMK5Em4NmF4QC1jXXWnx4J3xnBrNf2MSi2zQXB7vqJWnSBTSovc5wfiA4r7LXvdn",
  "key23": "UhfWZGEqjxtLc5QxNaRurLeNoTcWT5kBp2uzFFa5Ch1zHTj6j682xVsBp1Zm5NRp9VBCvw4rEoBRQaX8kFYuxmy",
  "key24": "5nahunJNP6kfBqoX5HMc7MRmvkgdGRXGWbiLiLrgWTRwTiRKiexQaFPTDFfuxRZM26aV8YjjdZTZJCAjthKAtoyb",
  "key25": "2AfkGUcGQeoChQ1A9ELW42BmcmjDPEAW7vRn35WSb1sjYzFUTqoGYV68vKY8tdMrqZAsk2NZwpbB7YQjiwVDZaJD",
  "key26": "4oFv7pUF4dZL7eG2U5XW6WTSSARo7suqy2mLsxzJLH1zw9o7eqyAct1X1QqvSRdKgbX2G8GHNV1VtW7T21KGPn7U",
  "key27": "45L3bGJfgVESLaxzKEZQgaeVMgfEBzdMybtQxuvyGfZfpazs3mPK6a8oeqSfBL46755RJ5bM76fP3wacN2xEQBFX",
  "key28": "4ip77NPnGHP632ynFE7PHA5NcmDVbgU9QzzcCa2jx4RkaNhqqasPJYDCUHqx23qNy5Hx6YQtTrKmxrCcVMLjMWwy",
  "key29": "2NibHFGbN1g57Tju1n1ubd7Y3gt7z3AGGJ9xf5CAPCst5TDJH42hpB8qNS7hpTVD6Pf7XWJLv9PunXVfZ7mWMfCD",
  "key30": "5yChJfDcrY8b6Z1cYCW1L7J2QKFYETtTPPfWYoqerkmGfDPDJQBrPgXyPBhxf8JDpC6A78nCZgVicreQN7PBaJoM",
  "key31": "5SVgStgUDhuGF1uRN8itX1DQCwztdeTGxm87xTD5RD57mndUqpVV4vveQpD62e6x6HHsYZw4e5eausKP5r99vkDA"
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
