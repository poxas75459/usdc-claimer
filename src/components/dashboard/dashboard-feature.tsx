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
    "3c5hjS56ZS47vhTX1H7bZmkebut9ErUmGymdm3QSnAoYMi6o9B3c3MUpW2ksL7VGejTuTEKm7UNVZfYjcUashVUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F82Lim6NPMgVSJYXVVoqxLpHaEBq5AAUCDjJynDw7dDBsP3dTCnUoaEegW8xZHBkcbptnnEBcSk94wCDyXRPA6M",
  "key1": "89bamvKvnhZV2MVSDpg29z6V2gofsovNVLFkoDR88vhLUh8DzLpc1JEr6X4TQAfnqsehPFUSQUgmtknS26UuwR9",
  "key2": "4w16Xr4PY342Kw1hHBLtC1Driv8tDNpLyTwKj2fpoL9kY2HMqaDKUL29y9i5eAP75rXM1G2geYDz3Uot1FKftAwG",
  "key3": "5veYi3YizMwTfgL1jYDaKd3xLHHv9WUmPrP4ESKorpgUqv52DEopWe2LHWD8ETEmpCNZihPSrvxLBai9RnFVSmnK",
  "key4": "5A3ru43os9bybjBhEdxwjtxgNU5GPM8ohahSnBjhBX9zxXXpVm9cJVSvzxCttaYjfMWP8dh9X124KAvQH1LgPi1X",
  "key5": "4SLB3R76qcgR39uFdTVdYCF1QB7LCbpKextp8fDj7BC8Ciuj8rp8nudCsNcT8wP1BCEwuWBEdqg3zYTEBv3rGQ8g",
  "key6": "5eUt4vXFN9HXihrmv2MyHhLGg3SVVnt3AfVTKJGKMAZx8kTB1PmBdCC5ZKgrrfyg8TRRacAsS2dn1VJakHou1By6",
  "key7": "5yYnAzLp8WarhsvqZafLiF5kgDJsJGQnEB3E7JTtEsmpo6BeJhsV5zZd9qGFsfy3tGe4RbUbGbzXnUEpUDnovq3Q",
  "key8": "GHs4JtkjQx4xti2PXKbw5rcjH96ehuBX761th9kEE8S2VhsnjPsKNayHSV5XfZi5ooHzfW8SnPKaDJtnR1DSTgW",
  "key9": "5YGfpugV3HxhUhgC29EyYMpeVCxjokMXb77to2a8q8e2wjhKaVeEzYug5bzPEJ7jJLQUWjq41y34mE3ba41D3BP6",
  "key10": "5SRXMKj7sEYAgzMDS5Cfrj2Vhau941H7j9B52DuSPs6y7ZmMJmeU4J3UcUiaLe1unAiYgbJgS78f3qKN5Gwwcqqx",
  "key11": "b2ipy9TZwSM2ScoFVvnC2Qo6BVon5EAUWhYmQfBfef6gm73mMC5H5xsZQEsipMhrbaYvjcK68MXrsxJFeQVJMov",
  "key12": "RWoHXkyoHCwyNt2QQ7ViGuGfNMi9Wshzxvi65UyEyUQcwqPXocKyXpb3GqkUUHe3dP7BtumXyw2pnpQvVcvVipZ",
  "key13": "CYgysvpGfbGAUXfoojJjb9cdWKxFmW2mQgZEdxZn1src28QoMh38CHyYnsurpmKvb1R9DhYhpigXYMZhDQURqsW",
  "key14": "nnjmCv9MfRPkd8Gjd7pfJe58ZpAMLw553s6fVMf1PTmv5VyXVoWCHA4r7HbaC8J1AUbbJj1je1v4YpJMvucYsDJ",
  "key15": "2zg5z7vHFpgg6AC5mssBfWqBdRk5TLJAnmBbyF8EdFpKbVnk9wBCgiFW1jbAWKf7u77aKG9R3n6PnmctMyXKMc2T",
  "key16": "3tjQL76h6S4cvMhnyWB6xPYPzVaaBAnydph4vvxGSBvwtttuKSq86z46omkFAAsCYZF2cLtaxcWvMG1e9Qv8UE7R",
  "key17": "61tUbLv3anq6dEVL8YGguwqQJKTpr86Wp3GhnkejGrjX5oUdWNRSdkT5XaQ6nhHNsgDMKx8y2t1S7iq8G1zFgS1A",
  "key18": "5uvS2arR2KXfS7JJM6TrNcZNNTjSsmcQJDN2fG8ogcSHdA1Hf67sJSZbjudbhKh9Pyt3csGPDscsSCPKC1tnvLuw",
  "key19": "4BvsEKExz435cuZMrf2RbVzAbdSWK3tNnFnQTd27MtTyEHBkso5CdN7YxA27zGH3nd3dwnKmV3BqHemxE8nCYpU6",
  "key20": "3WiFo3NowKduR6Rsie1C24GR9uuW3aJxSeFVyK6unNWxSANbgsZHAGKFSh2UjMe3YYCyoZnA7A8dpMzHebVUmDXr",
  "key21": "4A5zNyGgBDHhhetfDqfKcMRETZVuSJNukr3XjyEz3q7a1XMoVcorc3XvTaLLjne9Ygukz2ChdZns52kHKqbzpeLj",
  "key22": "RN4mkZSQDArfGgNfxKuybjBrfJuHDeaRLAvKeUZzEF6qHGjXphXFDe6SGESZh7vnwmC4rSrPssUB6YYXQSoAxUu",
  "key23": "62eggmj1tG1ywFTvAwd9TPJyYqnG6A25NVM1qxLRMCuzhQWLTyTqpAmMWobPU6XKpULENNCy7kDGVSYmXd9C8V6S",
  "key24": "3xxojeZygNFM5tPQ46AUbSXSp2hG3kdzopuSa5i8uZDVDcUsNawnNa2SLAdb98qTMju6tXsfnBfZ3LMgBnhHcQbe",
  "key25": "2U2XKmu2VBnuXDE2MS1qs2S2jfSeb4AXNxH4aoTJhek78JJcKNzeAjkcQMeqGAUYaDsY2ZqFdpr8q8RJao3wPUTq",
  "key26": "5SZBpetE6Po6pX9bMG23riqwQ8mTtMLSzwBM31s34FEgqGvwqM5hNeJPbuVu28UmeJY2r4n49Fx4gaxJnkbvECB9",
  "key27": "2ht55xJkiAaTFLtsUubPEF2hBiycEzX2jPEhq7VoMBwX7gFBoRtpQD8q73LmFe34t97BDCZnFzHYXUg3Cb67ugXQ",
  "key28": "67CDq6GPmiZ6gcpDoTXd8GYrVb7JCQhyFqDBVyA4cRRQwTJ95ej3Re5B4BY3ttzp7JwK2o1D7fkL11TVjw8EHitC",
  "key29": "RMBRwrtZ4qRUoa26G9d95vqHBCsfgVBEH9xWdS5U6JCjAXpJuVnZXjJbq5j55DuQ48CEm14mEWi5GLT617C9ZLa",
  "key30": "38jKTVQQ5KxwgKXreUNpAt3GqwfapGFxPLfittdRre2hBKbjh78XhedVTVnrNdQpBnbEfzyQ64J9xR8hmreFvkFL",
  "key31": "4ZB8YBqx6Q4N6e2iG3B2Do22SqQ3mqRtxkTa7Z1STUkYL6kNoZxUeANR5j7dU5RoKaGksPeJZDckLPuHAkAhcu9w",
  "key32": "4YGbYQZDbimpHLaX6THwfszjKd62cB2a2DxwB3fNSH9jZUnj9JdcPwRmZLGG7PkxsHbQCSfFqi2cK8KGqVv3oHS7",
  "key33": "5zucgrhtPjdya1NsiB5AstDcVGcGdnzBT2BokK1oYzK9FoPjfm6YyoT8mUP6ejAaghKo572GxMuoKLf9LXi668Ww",
  "key34": "5EwkPgcpaSm5Xz2Hdt1JCW7r8JoUdx348znuG3Fs5b6um7ECZ6fiUGyER8JFizi4dqkzH13S9NGMmdvi6yvhqS5n",
  "key35": "4bohP8W1jrcZchsPMccMWJz3NrN71uSb5qAyC7zbRQ4y9r366Qtz3TJVPzqDZxxocRnjzKUKgeUu9ZgJi2mrojog",
  "key36": "25HTQVszVRakpjAz26en9izvWNzqS4pVkXRdjkS7gsNptpf3k4B9AxdnLyAWCbFmkyn9B8e2z8aty89nxtmvu3x6",
  "key37": "5G6vBSN6bQy2V84j8QKQq59iezoU5tZugeVPfrfaAB2azYZxoZstaLy6712MPeUt1nc9iW3hstDkXnyFSCxvkds7",
  "key38": "5vPDfJufABaF2CXqJFj5HGpaTNxTvvR6izXW3JhRS8kr27XQ3jvN9XbPt2mHxJoj3i5gPTzjo69gfvRRiBtY6ong",
  "key39": "3faDctHpG9ccJhd1cJwZPnMKnqaD1ireinPx94zioxfH41uHA5Ev5nPM5LZnsYEoUFiuYWhdNeq47Vf25pNbFJAv",
  "key40": "3tuJuv22XkgB6kfDmykLePJhiVkFuNi34ymr55khB8CTps2Zwqi7uVDsf8wKcFbqEhA5s5BeAjLqR9jWhWGds3kQ",
  "key41": "4iSsPtEz6sgfZvmtM1Bd5cjiYMAMHkDqugUu5DVbJwCcfLa73P7oi6BPM4pe7PjNPbcnUd1gAfJPzrSk2W3ErfJV",
  "key42": "2raVWRsjoToWs7SNRc19U8UxCXSxm6NLJY1qRYv6Vfo7kTkGKcA6uGAud7tbXJNeM6M76NaRm7W5sy4A79Tmxq2X",
  "key43": "2QS31B6fh7RSJ6TT8VY4QVTaL6qgcXdWbz8oxRbMYW8jQk9H5gaxVtgLJsHihNwiov9GLZ6wNBwCtsdduXNVqUoP",
  "key44": "5EPUt31nA5kXoFDprQGrhyDCZJfZQEp27TdaFb5wRaSnPY7qqv1d7xVBnXBxNxpJpBw4ZimpF4pC5LdPkoefjkZG"
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
