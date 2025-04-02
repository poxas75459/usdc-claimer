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
    "5heyTp4pGULwvJzLzonufqWL5PFVTTq6XdgidzThsiHVmYLzTnBs43wEJiGZq4HrY85WqEvhmaRM5WNMDhwMBUq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g8F5SARq26194VeoP83iwBYgSfUL1BLwu53EvB4X44dapop3okqdJd9G97RGLqopEeRaFtna3bZ7XXvnv4cNtXK",
  "key1": "hi9kgpq8mZiBTA9EPzoaLTcER3m99so6GHNTJWC3LeYxYy82P3kKzBXmSLxBMGPDuZ2KwXTbHW3uKkMErh34jEi",
  "key2": "pwyEiSTBQchtNeqcSGav8UcepjbaBNewdYWuzXsL1h67MXm3mhRMwtAXsu8WAg3dzAdcRv1eEvbtU2sQc2F3jTG",
  "key3": "xLrGjBptTpSufx6U6nqD7eriri8swj34a47ZfskoTMHPczqeoMTbpPQfTNwgE7XWw51YTby2V3thujSTk47eaTz",
  "key4": "3HfhUJZ2fmk2SdXw8Gr1ZorMfaAjsoMfaAo4MUNEKnHwNigmb1mgX3qAGxrHkc3VM9eQzJ1hjVnsUVy18uhY7rrD",
  "key5": "2h9kzU5znVRdfYj5Sj7LWAmH8DxB17HN9msg9uCkSFjtnAW8aSnSeAkPFdNKEbi5w4p4gnfwg7CUKLckSXUfj2BA",
  "key6": "377RAzRhayZkA1M5U2Tbk6fNATnbCTkUfJxCBK7EZX7CnmwFgrh4Ui3qJLN19a38JLQU21LGD16JnP4r4Hf38s1j",
  "key7": "2tbNfuRRZW5TwxTTBkv7A7ewKeySauJd7nDXyTayJtTiEQNVH4aa8wU3mQFtcWqD1pT1JdQb3xbKsDxRS7vDD2zy",
  "key8": "2R6hvdf4GPPUpEnnPrMvbxRdUKTxT9iybyCj6NiD7U72dDpkFdPm48xvTEEy7gmp6r3qbCKxVpVazZA6hAv2pvXV",
  "key9": "mVBLhTZkPM7ek9q4qZvEgLdvqv4DLP9jtwNtpYS5GZd5zWXVt7rgkZxvVWPxqPZmwg35urvzF7utQSGfEvFeVqy",
  "key10": "5NLZaAXXsiXYKNihDWiT1R1pQywqTTP4fpAdF4oJdDJBngRRFnKUhX1hpVrh6VZ2Dg18r9NuRVrgrkuA3fEkLYCy",
  "key11": "3yU6ACufRey5Ky8zSV5vrkYPi7oBFyBb7cJgBf54k3fCLnzXmfWTTyxmS3mYjCRpUYDUMUsy4umgWPQxra8s11Wj",
  "key12": "KUbTPfR3sepcd95fpuv1LpTqwdqxfbtUi39yLsYzMrS2wwZZ3tierNztiGuiSFnN2fjCtW6R8LJmTTzi5GGLA7Y",
  "key13": "oyDte8tVUcghKb8fqak7dBheQwnuzN59H4Dm7fW2TCGc4e7FuPMXVXRDkgMnY5w4JdaeSwYFDjwZazEz2jT1c9w",
  "key14": "4JNfE5Khtd3eR6AhfARda5Zyr4sk5Z8stYZ5ZyUcnuembdwvCcfhpw4Nt1r82ZJsS2vRqSWDKQsrW8gJzZyXdSeT",
  "key15": "ZgvGHJXMNkQtkgqDz861eYiN9ivSARLFcmcc5FqHts1P7cYR2aKfkZ3LQ7uGdMZvT8j89yBivVxd3PoUMaGSdKy",
  "key16": "mox4a7SLTibR2brZ1mKpryaWWSBptGfc4TkBL5YuY2jgcKPZYUrVbKnbRJvz6is2ZPfmvALmsKR4ygdcdZMxxYD",
  "key17": "54uZaQuMK5uz3dPHkKFeQQMMpqMMrSdWize2Aqd9EQ1ZGBKvm1fnsbiMkE6y2DNJ8jsX1pAFvrzJ1N78SvgkHcMT",
  "key18": "5GmHoD6Fiqg3rkZ68Y3GmobT2dTkRm8vKHxWmorZSYXnUQZGLZdpZsN4WzKDbyVLGu3HSXmciyk7qK8CtnJcVHZD",
  "key19": "2LU7GDTzXFnRypTaNMfmne5j6nLo91zVfUdJ9smCwTaxWsyJmezxMvt7kyFBYgWZfCZFRUUDBZhdtyFZnYJm4qdt",
  "key20": "YC4YJKfBguL9nVezPEYdwg4KtX6LPfpFGW79q1Yw3iQaxV92rNvgW2pKgdWV3ca7q6N4ZESrNYqkanqFA4S67Sk",
  "key21": "5o5t7HiipJE1AVJ9sRC2xYYXFPfaMRXcV3uenfaC3KiC7FfHJJBBWsB36mCnakuaGydftiLyczmRtkPpfmxAxX34",
  "key22": "3dxNPgCSahcu7tk3nzr4tytqPvU1mDYFGfgbtXCrW1U4ebt6TF5PmkYuZzi1KEj4jmDp4QwaQHPTidC66vtBAJ42",
  "key23": "4r98uv7gAmWxGNWLNC3ie5GgtfQsXtmgARhgqK3yxkRtHzBwFZc3a99iySmnGqhi3J3byxZSMV743UWuXivtcGyN",
  "key24": "2A9sv6QFejNmRM35BTBn1fSQSFYXJSPJzvfUqdvAxPpjoSqyxYTXr139zTSvSRrRppKDLnMuAbwfNqW5xMxRJFk3",
  "key25": "VnRWiBhsgqWeqEXTFCNjejWh9q9kpGUykSAB5BVgzptJoLPdbLybp81qzFAY4uQuNtVC4aHPhfPeUMdwLWYJc3n",
  "key26": "3Rh8xWNUCvFfBhsqdGgBLFZGopq6oVR8Q3j7U1TQtFzU2uY6HV7eVqFmV8mnq43xFPscoS5kePPPthZ29J77rETT",
  "key27": "W17ZbNzEQAgFvaFog3oUYzvLBfmujnpfn4fp4gD66dbY38oAkTbrGbaft9gzjLZDuTJdmcER3gsBJ7yMQak8tUG",
  "key28": "4GwirChbqGpddMchZpf33Hbw9UKvtSjhs9SKYNa7iQSzm3NrfjXSTAn9aSzAq6j8nkcRr9G8Swi1JiJiVtkL9rM7",
  "key29": "2mf3VuQDE5zbtHAKGzQxRWuMRtbSuYJFBa5ReNYAgDSj5oQZ6STrHrMFGv4N61v1LK4g1uUyEsYBJ7Uh2GhTgrGM",
  "key30": "5wsj4j5zEbhNqrMBh7UeTrSU3LbznXJQjCoCGusEeNbiJkKRSx3Q3wU53kh9C5cQ7fabNJfGMTyFsbU6B68GJwrH",
  "key31": "nqV2XhkHgvijJTvDTixwBDKE7ygPpC36doLdusSGa2vRjnxyjJxMXJZhKMdJtx2Muy7FQTUroa88XHPgyJF58iV",
  "key32": "UX3dw25KcXRH9yTvNX86j57a8GMZ4gVgxmCfiUfqpQdiA44erf81usnztT7k4QS7GHXyZxCg8WC89zcx4aGiMBQ",
  "key33": "3rvWq3bZUGXPMtyPh6kMWG2bdMKzAvk4vtVpSWBnpVBg8xSAiRkGxZDD1ZNpcJJaVzVANGJMNUqhB6bPc9NbEv2x",
  "key34": "3ZkWxs75py7v5QsuVDKTwhKQ7ztmY5Nigq5gfSo82NuTcURLjnqfs8Z5zmthasZD3WEnckqKZg3iRF7VphY1Qyb7",
  "key35": "2Ye2RrPhE259Ze97ibLq3VmT2V5PrCNPmVAWVvbVQpTa3uNxHbjSugVdHt41P3DMicaBSLq6RxGYGCWmaYpKxgXz",
  "key36": "4cqrbrzoNorRZ9XfJ6uLe6Fh6t6TwBffPNzXEwd6buLHQmisWWDsfYUYtb1qgaPiBsK4okbnqH1cvnNFDWU3gCRy",
  "key37": "4HbrS92bWMCDiyYJtH32x8KfCBEGkq4BgMT8tx1amQNfCFY8yjNrKMKGyewZiuNBmXrJbCH7fAwdn5WrQEqcHJx6",
  "key38": "65LwkS8zxdsUcGdosCsuV56ntjx2e73BK97NMmeZPKkM5zz4zKjtXs5xPa6c9vqwnYjsUD4muQDFZNCpJKiSSKdA"
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
