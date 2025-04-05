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
    "23m5vMTWWspj924CYRtmAj92exix2Z78rMdNGo35qUwzW9ymMpV8dTsRh4fPs1XQuXX7uNwxkC3BzsmbrVZpzds4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62dho6KZeoCzZHxh2x2VuMUw7r1jVinSBPNdZiu2rkfj1VFyi16QbhJAkM1Up365n7MdEDQXJ2p9vwPiGAhneX1N",
  "key1": "2YYgjHAevMJWkHDy657qPqwnXAM7bL6B9uKohB2rJ4bei2Rt3VZEMKCMzEwURD484UnKyXgNRHrG4ruDWfCxGGDN",
  "key2": "2gQFC5LrCXYsKdsW639zBeTCRvwQku98E1wah4J7kUSuuNamvx61Y9UaM7bLLx9tNPtWZzhsXvwvceHVVjJBmRac",
  "key3": "2FVYihPvWKGLJkoBSLJMTixX2dWMy4RhyuXbVTthR3M1NTwWQQMnmbGVMWmWHwJN3dGE3ak1emsnZ18ESj6qP6jp",
  "key4": "4uNVfWee1geFXUufir7gtj55t4PN3KGbz2K9eJFfYeNeRAvWxAAm4Vt54JJmKfmvgAE78NNkPDNHJAqYANVDA4Tf",
  "key5": "4JyZtDTSi1gCQfMBGsFasxuYCSEQ52Aix1q46kfUBqjFebWmn3tEjHvrBZkmjCzcVZbriyxYUtXbFV6GySwTVFeS",
  "key6": "Q3T7pk3rDARmDy2rEcqkhFVMfkj3b7nPkDfhdt8Z9gsLpDKcRD8a5ZTkkTV8bWAwk57iKZT1GMcthAaR1g5bPp3",
  "key7": "37xKagBRjCyHX8T9PJEKYGofDghysiG2sp9XPNxPXqjGgePCHZkm7wGs7trDkxMBDbyKxCLiCMpz71Lv6dpPbJV9",
  "key8": "38rC6runotbLJV9UBH9aTP76XRVKm9cyn5AFXpiKRsBn8of9WfZqb6QvftuQ3p8Wc498ofJGmT5JpNfhSEYMUhLK",
  "key9": "4kUFXA3e7Gwf4Sjg8zAH2ygWAfsTYeNAP5j7ehQWMKQpkbT6vZJaDuuxegkcAiCFoi2knou4vpz7ycm63qRnDpgu",
  "key10": "2YVBrkz6bK4oQrEawGwpKJdQVNSyQgCqh3SXRRfw6RdcpmJjZhUSgeicNofs6EvPvjvWsEWffwQmyumcYQgcy2Um",
  "key11": "3RjhmhSws2V6k9ojJmxLP94jy2x9V5hNQToKsechP85k3SayvjGLZYi1qGMjXZdrjrAQRNk5fm9APSjwAoWaF9Xc",
  "key12": "4B2RAuutWFYEUcK39hwqB1zJgBJUW5ty8NS3grriXSh6gyw6M2TbCXrBXCg6Joq2y47Wxtg4kStNPwBiZwdjBiLJ",
  "key13": "sdv735VCQrUYp5B1U9d3RuRrb8HGeGPRR8ANN184z78H6dAQfdw92ZABnc2ngV6xC3t9hbKkqAMnhEFzd5ZXQsb",
  "key14": "56LPAG36LXpFPuPdkX9Sdcg8MnkU2rzMt6Wi7TcMCqHpKKx2EGrzvxELgWBm1fYyCQbTMo1iFc3YzzAE52GJemYJ",
  "key15": "5ZQ8CD9Dg7hg6PNLYnpBiKCty4dxi54LAbcBpTynFNCkrAgR5rbHQMHHNtBKX8gqPVnZfovh2hKNSt4a2L51iwSK",
  "key16": "4umGAiYWQPHsCe66nwV7qGLSJcfnCgXZ5NmRUcdUa56TZxEHMfNb9y6tjBQF3rfCYSz2CjuDoPnte5gmgMsdqgss",
  "key17": "2MDYBW68u4f7KDYVQsurTSgfb8cmykFNGLTkBnLRR82fwo1uG92dLiQH6W8ht9b3of8VVGVqCoyjvh86iAhLhyPH",
  "key18": "3T4cevsQjawVWqiU2Kv8GPPmonpF3cUXvFqQ1vbKZZAmCtr6eYmKPkf8jrPge2ntx7LqxarEd869CWr9TkT49yLU",
  "key19": "4rCEXJf2fU7cetbZFdntiFvsn8B7jHSCzw8u9e9eJmZ4JFEgsS7XSpC1MiSp2WwhNY7BgbaqsvnQ1jGuCbGcCBWN",
  "key20": "2aKrGNWpEyhfbR6EiD1xWZripX8GfuARtj8fwQpowaNyUVf89uXfsDy5zVgEsWyVCjsBuc12b6TffZyyBk6mZhX8",
  "key21": "61qWtVWytiYxCPWM5fr7a1E1A1MZhudpr21dwygr5PA5w3ctT6gphdGYMVjG1mmYXzaSBGwoMeV4QmzDUyDTuwt6",
  "key22": "DPRpSHXnW8sofQfk5qixFsjZJRNGPLydSYg1qRLKJr6HEuZnpVhiRmLtCJmgcLHp3yKVYXyREBPP1pHcf6Gpnek",
  "key23": "5c7fADRtUvKKFBdHdjQmpPv5xHcfD8ky12QSCMSp2W3uW4zR2LxcneVPHbCQG2haYf7otoTfjr8BdoyRznGajh9G",
  "key24": "2qyhHRVB87EdFWQY6R89EkBexjKgMwQcoWykfaZK4Fixig8PqbdoArTUhi8a8kf6AgHs52JaMbzy5pQnHnFL5mz4",
  "key25": "K455Y2oSd32xJLwqdwqiYjAskoNTRU9u1xbDdMQKSD87CKDbCSeHZ96ZrdvnHwqWT4ZwG9u4Hzu4LDj8KKf3zFi",
  "key26": "2T7YDDJ5iG58orvgd8868kEvvaDXqBdHh4KYNdkAX7B5v7j6frX7cfPcZoaSzUQhgPkc6y35PFtcsdJZZ39Gp8pz",
  "key27": "3Gxr312mD2j3YgVhoQ5j7mwndyquD5LLTeEvt3UbHjV4NxFFL3hijB85YFcYZ9RA6wtrbzbhCxKFTF1ZTEN9tQKW",
  "key28": "3Ftwzdr4GziMibAVjAaPk6A6JPKLRgumTdxJTeA3p9VFjYtZE8QH8bnz48grj1wPyaMTYY1j3gCXJXVH4nybKRJQ",
  "key29": "5SatHL8WKMbTzirD9GaFQPT4UvrhY3x2QJfEipD1AWu8ZzqQxetLmQWLyicyVmN33gz6wSfSZUwWxP28rAWv3eUP",
  "key30": "3YoyypEMMRBon6nSH4WADkVbpgXsgzi7MESbttY8jw2qG2y2pRVk7MoKKFfuYV97uidcX5bHFseZhGJqSiQPsHnK",
  "key31": "FEGMT8YA3wNChFeqG5146xjTmw382PSouNs7AgB6MfHkVXHc2oJgrtsyaWczSKxoUzFxzbmFbDLnTAiuM5PTaZp",
  "key32": "4tcJRGw2rBUBPHAaHH8A7o94wawXbJwAgePU178Wedo7maipGZjZma1xU9W6DcLrJ1iEL82tA4Y45DUmkRRQVJFz",
  "key33": "PfDibz3Q6xcWg6iMgPPyNvMVcL4GQfmJHmbnHUKF7zSfPcW2rbnUxbfhyXUDmQVry8UukWGp8tE7SuUzaPg9B6Z",
  "key34": "dc1xQ7eGKzkqXTsNLhEGyq4C68EHuoJvJyyoxs4RHV5dEYyeh3hwiKgwfU26W12VErkWSQtKXGXnjt6AP4wAfXW",
  "key35": "2kqxFHmdYqL2aCuh8tDcijK4wLtTUmUnsqJduuSSQHvDKmM23m83MhbChT7vzGs8cR3jae7p7UbkLNmwoxPrKD3K",
  "key36": "4CGVpKDFX8bA44fib52UyrRsLPnnKduofdPTmizBVKXAZs7bLf19f6993h3BGaCRVXew2d8yQhnxJmvD9k6edF8s",
  "key37": "4qm67bC7mAwq8qkVwWWjjo85BWf7EXp4nsTvhFKjeM4gGhaz6iKLHE6oNVsRg5yyAwcjrkucUjX9x8J7o5Yjo9MW",
  "key38": "g5WRrsb5Yj2og7BR6tDLMexn4m8FtjusH2QnYntAxvArNfjBrdoufNPmDZRfSQc6nNWaG7es9k7bovF4fBpRLpT"
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
