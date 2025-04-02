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
    "5qz5GqWiVR53hEaEFuqaj3WMtubwgLCy5V5g39FcrL25GFqrvtPcbUmT2yJSNkRgu6kNTuL5rzjjCeae2u3hhSzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sQ2JwsxE2kqF68hEaCNLqFMmkt9e6r8TJitfbje23cv5ZLvnoHybxZHBUeZLZpmuoQJB92dPZxodDwYP8mr6baK",
  "key1": "2vEYnE21qz3b236qmFj9geLcNBTtu2463GHDjhGVzwzY7xx2FThdbJ2Y6PD64GqLea7u8KPB2FghbqNEofQNzxqU",
  "key2": "39rgWHWPPCe7xvk8ujDpmEbnYykGtwzBDSam5epK1hwrS3e4j5n8bex35EDhNAQptkk5br9Ate1NEVM8HLqTiAm3",
  "key3": "5eAXzyv83a6DxjafksPHPZ8eJqWGjXLsJXXpP4u9Tvy9RfM1fEyA2VCHWZxZRBQx1K3nJrTsYMPn1PpzsRzB9DMm",
  "key4": "3TeeT8GWBE9kCw9xjcAEkCvvFpTqzbcgyFsTUmdXaoumHDgqaZUqsJgRsjZ7QzymsGBh4QPHBK6C8Q5NMoSmMMmM",
  "key5": "GkEJ3EmmtZyQd1pFCGLo1AxBK1STTaxPEMebor8QqRchMHvsDzgrskUvwcDe7oZpQsrE47dVYbW3GZq5YuWTUxg",
  "key6": "36RJ2ZjCRYNbpGGKkX7C8KXiBY8hWJHdrGE9TVzH3Xcd6tUu2grzu77cm1AyXCPctsgiJq2VRD4heacVYLc9AQp8",
  "key7": "3GTE6rrJiNrFXgNa6DSw5eevThKfmD9LmKTAfCfSmy4DTfnt2D96jm6MckPXQXMU6uTSgurDsUH7ecd7Yo17emPG",
  "key8": "4sw2qmi1b45eJZ1aB73YcAfzqfHwjix7TR7F37LzMsU5KctvjL6CS3Vb5xRt87XwwGfVdPz92cE2r9j2eBr95Mtt",
  "key9": "5mHX264om7fvppAAZYeqCyu14N6twcXL2nWo8rHHCzQoP9usDGk6QbbytQ1ztKnzGBLhTi15o6z9LWA44u26SBPn",
  "key10": "42ArAU8R1Fq5DQCyGVHRHc66t1URpz5DXZnozvGYrSn6WFMB6YoY7FVdc3pkgAYmnLQLcaUJeNW6Awvjrh9yj7em",
  "key11": "4mymXagoFtVQDPkhR8cz9mz6xfjYRf5KVCwNi9fPs9MTKejrhzYYxLxVZ5CokGZm2aUX1ZmwB7YAZa3yv41eBDun",
  "key12": "6exVY3SFC1Ktz28pihxvbwyhyHtktwxKiToYDj6Eedc3m8v4Rmfi4GufsmSpyDqMuFHNbmPBbW4n6EdQKdkfP9n",
  "key13": "X8JnVEjdrA4im6uFGRR5BXHjCf5MHe46wdNQ3qS8D18aGDqSpST3W9YKWfy6ZDAe9EvwBZpQTc4PGiYdooPZ2em",
  "key14": "2KtKvt1kR9eiMYP2Novk9H31xufiXkiFtUu6wcTXxcRQNHJs5YC7J97rxo8JXwGe5MvCNmaeDCWHM349j9PZxktv",
  "key15": "3KBBSEqGDSzNx5fZwb5zFZBAZFw4AGfHYBro9sfVVzMS9KaCYoA298etX9AKoQGesHN6EuMpKJ9FR4n3NXb1Uj6u",
  "key16": "3ZZDUFfdstsJLBZmPmg6XB6UikFSJhp1F5Ezy6N6JZ7wDSCt7kkp2mzzHJ31br82D79BAXZiMtTJfBpbS7dBrTm3",
  "key17": "7eA4QHZyV7ng4bUV9CBXCA8Pd3AJqSeNbV4ArAy6qT4QzVaQDEzuuWpyJEJSCHFZUyn5rKupYJ8RMkbqsxCXNWK",
  "key18": "saBGTmwZvZYrqd9wfvDDPbcKGVssr6WYiWEenpyjjNuZikbgspYwdNukhTWtoPurfSEfQBq9WSgWcBEP9aNyjQo",
  "key19": "217f9ACbNN87s7q7xQeVaKkk5QQn6mTKXqLo4sHRXanUwp76BK6G5qpg3sg4PeoqoxpjGEvAmRFMaxJPGvMftXAk",
  "key20": "47u6rn8P9EfEt7UQMUYcsq7hNcAekK7tPBJorizg4cSvFCMV5ok2SVvbXy2iwVuBuvFBvw5mtChQF1wRA3QmV9Js",
  "key21": "5iGJvKyY7yosyFeDdmfK6SKxorzJjNi5s1JrqApmpWAw1DSVskRpu4wCqSr3SvVHCucef5K1jYsQtX2MXAS4WD3F",
  "key22": "4VgSiwBhfcrM2bNiEKHLajbHXCrt9hdS6BZPYXb5sGFdQTCW7TUGKB3mRwyazvq1ee8PDFyvsYLjrgbpRzfkQoMN",
  "key23": "5MUV4Gba39rARqJ3RhC3QgtoxJVb6LCRbXXLWazQ9Y8abNypEanZw7PRuAE69ZpRDj1ciDgEdg3FbsFQV8BWyCnb",
  "key24": "3T7SBgueLLT4Sci2DS6AL29M4jw1qQDV1iS5yvASVsh2SQcQKKHJN7D2LEVUrZxwbLQiv2ZFcf2SdgK9xntZQxHA",
  "key25": "FMfZzLxXwX378ZYSqbcYZGU8XT5D3FiSYziB8HoC6GxcZahPVZTTZPpJTPFRJpaXjDQfJjT33tNZLt39VRcxdgh",
  "key26": "3izGsAAkfghUX5shqhGue2ChrcLkepESZ74frRjhcwCDidUX4FZeT35U2q6ZKXHYQ5ZpwmjzE7oVjUtLgiD2cAJ5",
  "key27": "59h6Mycb9sCovUp1JXNpu7zkui9nweu4sP6nEqrJsBJJzmMFmZqMHfjn2Kn2NTPky4HMgWCCzSFzPWrUt5Lp27bM",
  "key28": "4CENdgTKXdq8re6P834YnA3xYDqN3UL6kBn9dNYca4icuUtLZgdCUDFEc6b92W6v7c964fsc5y2JghMexQVHsN1y",
  "key29": "42bUTV5uwEhiwMBBqYAAg2kFft6vPq4R7b3H64XaKTqVxPkdhpyaikFu3hS5C1m9ZiwvgVk6bQeQhwbNRydv56du",
  "key30": "4CvGWTwxtwcvZDq8dWE32J3DgzGSQNStDBkCKbiTVYmCk9ja7gEtxoWWDezrZm7DH7F8MZ6hpXpgfjQVwzMNwjEE",
  "key31": "3HsiiEF6SVierwPN1Kuukh4jAuXG9dQjPurx2WzbXAzzNsUU7wLe4KY62Pu3ALpN5R94vxW29Wm6uBVrJBnAeZug",
  "key32": "3e7PitDC1RJmm5j2QqyoSmpNRahknRLb1VvCe7cT2UUtcsj3fyKkFG9tDsgS1WJLiQ4L2FFcNv3HCcsvhX464h3e",
  "key33": "4VtYsrFvfEUwMN8Qvma3Qg9LvhD7DCKBmZFpcLWTRevC7pMg4n123puTVviwVYGJuDt72zhsAwn5DWaHorsMZF1m",
  "key34": "4SvugQSsQcAmYN5fTLkQRrLMmb3gCSBKvBS8Wpn833jQiSxA5jJrvjPSgKBLRKgaTr4vpTRUi5nr4EXJZyH5Q8r2",
  "key35": "3aNrvkHJ5dwVfLb15maYXk5HnnnAHz6Ak3dF7jBGh8qjVWgmsC7mcHhee17wsSzCkhToL1Z91b3h5wV8AD7RjPfp",
  "key36": "5tMNfAkDu1wK2xN5WsBQcqcQqku5czRq7x1mziq5p3Tpmr2q5Abjr42K4q2SeA9opZNUmgYwjBDorSy2DsLwtWks",
  "key37": "2oNQpDRF1JQSXPxCphygyRiN95uKYx38hvgLE7bAYKaeQHmukEhoC4RjEWSfnnRPSzjxQTB7UfHnnx1KxaZziz91",
  "key38": "4pzFzVjoBvpjnsQCnvrnBYjX2webb9Ybi97SVBNozm5nAuhKMV8Bt8tKZLpwWNnWzJc3gUQsyjLuKMRycpBY8Vfk",
  "key39": "xifvrWUgZFiokVKCTVV66yuT7NaKdFQPEdWPMYFt3zzv5uS38uLfei6R1gQTuwBUjQLZr6h9qCJJjq54WQ8iLK2",
  "key40": "3VGRHMYRcRwFdXHBw7y9qom9Uv948afKJUAcFTn4Y8pq5esdLzkWg5afwdNFbUPThDcYed1U2WkNbqALxoFw7Yyr",
  "key41": "5jMRRwRZjm2qpJzDjx1beCdfrQ9C6yeXgmZeLMHjb1xyVgZG7AcUScUPFS4oDirpTpkwWc9mEeubLZt22cyPTmiC",
  "key42": "23Tdk66Avs54tScsT7bF6p4xS7W6qGXzsWoH6wWmazgyNfKaC2y6Uf446Z218CAxNdMKKhNghQdgS8x4y6csutve",
  "key43": "CuXpzu34jUuqqkQsGbVcScZc1KKdGmMo54sXD8gdML59xyThqnzUPasGGADZ7uo8V7kGJTFx1hPAn2ckPeYTy7P",
  "key44": "3KC6Eg2HeZBpaiA3MuRDc3WTqPYR6kwxzG68ZiA4htFckB64vmMF6JUSyPJXWK8BCNX8tnerf9cPFXgJ8Ub8Q3rn",
  "key45": "5bpkPQm66aRNuFGP2uJp1aovvyCV1o9hbj1HqjaXRx51ABXgCpLi4XwtdHWNSBXhzZNTw5ReMrhm9Yg8inLNMfaj"
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
