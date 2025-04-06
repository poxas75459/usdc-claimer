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
    "2zQsxjhy6cFT52a87CH4dWrnJpp5Rnx8e2vGTEUtUnMFuv7dKZRgdjnXadxVZn5ScvW6GCPveJK7dq9WenDec9q7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vyxEnJdjAACk464KQBjKmMPsuvKFYoE4xqZbBCKFCbZTqpTV9W4XoiYhdxJvLs5NpHPnKprHm87f4S4uxyntsWV",
  "key1": "4WBLzYgaLFBvWLPEuAbQ9VLHLhpTDEpWXrLLpGXAK24pkzwwubnhoNexA6oRvvMCCbLeW8nMjC5A8V4f7g9quHNt",
  "key2": "3Fno5WVRTMo37Rea2srzjDxUQsZ8uuXKATmQKhQg2q4iEmBC38hRLnW7jjxSue4T4mSLEMrbt91pwDKp8JTr35bH",
  "key3": "3qjPdW5ySKg996gmtU3KSMfvdYpLZKFWFPuz9jte6S4xNdwnxtC7UQ5Hud91VhYmiYa72QETACCbWTfa7sCVmqnD",
  "key4": "3H2Mh3TSVEQ8ooBVZnJ3dnczTsgxcHJLs5KYnCahyzqgg9m7P4M1HKhQK8EF6Mh7KCTg8Bb6qggvuLACC43sEbFv",
  "key5": "414HY5MJmXBuuQpsVH4xNpx1mUPqiSHbemmaMaKZg62JptEX214uR4xYE76XB2CW9iz3bAB5JVoU8ohyenGgL1vF",
  "key6": "5em1u8fua9fwLTdjVJb12jXqqqttJ53SkeYxKYgpqqSmzasesGvpLgYsitXmbSZqZjkqKyVsYyu53mi11XwcHWgx",
  "key7": "3853aZ9oPVcvSWWvryUD3obQdfbzTrdpnJFm4Xf8ngmAsTo37V2MmRAxEtEsXHqb5BiWeFzSjLstntSL4p13K11f",
  "key8": "KmcSwSGkMju7pa9fukzwZWmL4fTCm2RWHnzv3jksiRPzxZhJdcHCGh6KNeeuKauiJkdHzGv4dkqiiQsQvXnGphH",
  "key9": "2Aav4JMHKfTWtCSGyd5npao6MiAqan4WCbXHbpNgiior2vpb18hR7JPo2ZZNs1Bfsh853ajiJpvSVVXmnPDYKsRe",
  "key10": "2BbPqqBEFL9NAp7qQ65sGFZcHcBYtkGfPALLnx5eYAoZAbxVdjkKpQ9xj4i2skVS9RXtb4xeUvAUvXLWhF1dctjL",
  "key11": "2JT9FFtptB2zEskGSD8iXSZrU2Cr85fyggb6CZ5azA74xf9SA7Dy1TXAawxcbsjPJ9ctqGFBujWbFo6x8yjkwkGu",
  "key12": "91JdQoiyQA8oaWQ4FpzHLozgbS1doSCgudkm3eeTiaXKc7a8EZEjGyyBCB8Ptwt1dqVQoVmVZgDs8vXM1meaYtz",
  "key13": "gvjmpxjR3ZUqKaV2132FUrFVy6NFtSYEiQtZ8C3C5WmDPBLRaZupscxVudQSe1nTpQcvp2GoEMTQoJeYWCMsJJX",
  "key14": "5o3ub8DZCcNbttizYX3GMaVeboa57pjzGC1TtNSENhheEBYaVLagZamMvSFJ2JLxY5Y51HYKQM1AmaFuWdoi3Qu",
  "key15": "42yTzW1Dv3SKDbZ8VSAMvmRKz88BdSR1KMei7mL2tsXtKEmWPNV5fjJonkbFgwCjuY7fy4c83QvmuQH5Z38epdjU",
  "key16": "22fpXGKzWipFhfBwiNuPaTDvNoFkoHm5D1CxZN3vuAXXwViXKUNFUrRsKJ3duvdqPXkDBQfMiL7t9J6dQ9bDUevC",
  "key17": "5HfhFTRjnXLwvSMjHzApLMyzmfi3Axjayf9Aos5UvcTSKurYVQTwbXJGts4S3U28GbZQHnVjHcvaFRPjGvLFd8pG",
  "key18": "4r1fLJJ66PHgFmmQt2dCaUbGYjSWGvHzgLxywZiuUcFy6aGaKm5UitaALHx3TToCWKwLw1LgjmM57HmmTEiZSgaZ",
  "key19": "5peSkqcN5hRAnsUnwgit9gFVgMuy7zc4VbWHbzSqSyKmjTJ7geJUsJAdDZuT76NjGedWSQSXMrnTtqa2n9nPPfo6",
  "key20": "5ipzAdMPHfkBHFWzFZPdWeFjyBgU6ddzhq4xaMn5MKsQWhUMogC7Q51u3mCKu7jCRkcwdoYH3Vc6DRT3RR1hVG21",
  "key21": "42sy73FQJTQoXAR3je1fY1zm6skTfnnfP6GFE4Z1xcUxxHgS2JRc3nTTVQ6rGGE7Adn5UQYBmVSS3BckpfJREXvP",
  "key22": "1DqTYpNgijtwKz97YYRGR8rNZYP7jCx64u5miSDRyDfYjdUFMdm76QKCYEnRNy7E5Sx3RRNjWmC7e39ULgoxusP",
  "key23": "4GZSrStQ11avdvvQiB8FZJib4EE5wnUwL5VqghQ5txpfM4FDb7KwFL2ZPDKQ1roS9A63ZKzyX6kiNCoCKspcx5MF",
  "key24": "TWJhwX2GnsMuHt5zGdDzEGriHs1EFCpT1Pp7gqojfn2iqgcXB5LD1GF62JSx4RprLBoJSugc8Pj6zhc92iEwTeJ",
  "key25": "3UL484TD26vEmXN4916VSBBXRGq2Q8DXqre7wwmdC5bAkK5fq97BhjcZKE9NXd4S9gRhPv5W2nNnhJbrupNrB4gV",
  "key26": "5myH2MQbyN1UZrfoQ4YE45jobM5Hzc5rQdMQue5cjezYXYnDCjpjmsRdcWm7XjzeYEiaogNC4DASDd4NyrL1xEmo",
  "key27": "3dsBFc78jGQkj1NCGh6VbWj7X9D6yihESbdPntbAETFRDQ7BGGoMQ5xRjZyu8NWrLTFnwk7mi8ReJBBiC8gSLRUh",
  "key28": "5d7u4Kg2ia5kngUPJCfMMeHfWhYz5G2LQr7VJqRkae6NZ1az4A8Eqm1SCo29C4fKzg1umgtC84vspySL1JMKnt4n",
  "key29": "4cu21TVYAYJVsk1qzPsq8hdmhff7hfUJGF86tHnujYZLYzYZCjErbLFujCGohb3MKKingVetypLKqExbiMMmsMih"
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
