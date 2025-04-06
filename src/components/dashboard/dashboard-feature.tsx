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
    "2anx3qJDL4vMVhgZR353XXrVEdP4K7ZYmzhXLW3dk5E5yoGcmTMZHCAQb4GVRfNPCK4gZLmyhVhU4C2QUrgZQks5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nduK51YX9qmCd3iSv8bvQQyJ8rcW6DU5ubagLdKtyjFNCsABsv3bVU737jHVRKzbjw7DmfWC4xqQA3AnKKKq6Kd",
  "key1": "5NUTqXXDPA71jwkotRp67aP4GAyDgZzFp1rriqYUKDB3pmj8j1kASR3jNPqoavCChfCdYX4fJsCKco4z4DtCYCev",
  "key2": "5Ex7d97D3DYE5RqytZdUd1HfHMtAh5zxcyXHLrybxkbEkZb14M1Wb4Sa8SgzqdtHhrcjoSpSsgLPG86ECCiphDAX",
  "key3": "53Mp4PsRys19T3gJTz5qjqDZj3d62k9hSqRsKKqxQonSp8tJbnmQey4poh1TiCnpZSYjFKkjADMRHJ7rpawE1w7P",
  "key4": "47oQ8XFGiiLfkc2oj8Aj4R3FwyPPXAFT1BXxugeMs4zsoY3SfVPGH4eyciJNw6bBVVg8oCtvSJnG2QUYBoUQrggo",
  "key5": "4ZGj1gHnAY4Dk8z4819jAZh7nf5LCY45YorBtf5bFFNSC4mUHiGHEsKhrzo4hcbzRVW4qpAQg1GZ3riH97yFNKdc",
  "key6": "fen2CA93HZbnwTJayNaw8LkoTNmHWbcbgELYNAfJcDXzXWZAxVw5aPWngbxk3A3N7B7k7pQL1GgPbPhAFvDNJca",
  "key7": "3TYZKv5rBME6wKkXVCBMQMuYcUQk6cA6aDJHSUDZsNi9waqZtodt83BfG5K9G3wvPfiZdJUQmN85iA4ahQUgpTmN",
  "key8": "5KYUT5ucDqdpcESiN2WCvfsUgGBgXuvAuETX1GoJ89aVcGrpZFMHjwD5Xjgsym3TVaU83aWjsRopPvQQrwT5qVmx",
  "key9": "2L3bk1MpZ3Fvreo33hUzTCB6ijRifnFgTucYLoFzm1fhbqARasPHbjdRNdtowVRfiwBAGYRaWuBgXmwcXf8sMkGr",
  "key10": "5Zacd5f5GmVky6eQnAKA5Qjsck4GhzzMJMpAKrbiL1rhvF2qasPoZeRcmULHrSRgBp4t14X1KMuevjwoqPrftCRk",
  "key11": "2PYRtAYYatrRoUeqtRBdkoi5F1HZ4ghKWds4HYJpF66rRkzQR5hB3hf3Firg9RQU1A96v81Qzutgdgav9mDG7C71",
  "key12": "5UDkZygFPL5hyBU7FPRPGAs8DuzzZcV3KVGLwxfE2f79SgnTNVPsRJnF3UW1m2yRtnjLANwUFaZMKoovpHTu1n4E",
  "key13": "4uddnjd34rQ8nzqi1o5Zc9nTBepgfGWbV6JuSiyMQB9mp8Lqbp1uPniBiMFzofJinCF74toa9HytVmE3Ld5E4WS7",
  "key14": "2LxxLFtZ1JH3fjVsPt1r19HURFZG54T692jcEyEvPNcQvYeuE4BjHVmemTfChiRGRHv4oMYhDdzM84qXh5jCB64k",
  "key15": "v8Lza5BoYdExeBsM4MRm4Q2koE2YhdUHM8PMRjGo933J3uanNoeuNRFj6tdGS3XDVE8EVvLkj6r2NBwtRyUkf7N",
  "key16": "2HDc3PKZGJMeR2nbtnF3pu7wdBTNrfop9Vx3C2xfRKkPfvQAKWa6MF64GZrQTJoHQ2WBTMNRtqui4W1rF8VyW2V2",
  "key17": "2CHbQEtpKrmp6jnVBqLLDd8ExHQFswRDdoLyezcxBP77xc3uKD8MMJTKosFTkCk43BvPgJaBxGqfGbKG4GPQddWh",
  "key18": "2xKKfotehsFQaJBbvL7jzfTKEXS7j6utXU9LJkChLTHjs4YJezmrTdFNBjZwhJVgu5431T7fWhj5cS2mJTy2W3HQ",
  "key19": "3jqxXJtCnJFHmYuSbbdV4kx8uWZFmkefQqzkpA8baJ9CGaxkoWT3GCyPNMrCMy8ptzJjteDgAHPhFeE9gKVmgBhp",
  "key20": "7G87cPeVt8a57abWHkMgbXUL6iux4Jxe74TmzArCdZhaB3JSLmrQaGitadTxUHbVsaASYNLb4zMPbqCvvLo57jp",
  "key21": "2vt1ZsX4zhGvfrcqDeU3JRcwsyRQAhZ5v8iAo5buGFM1h14ULXRVYnz5LY7UYd7Sf75bZkopCizUAiKprBjqe8s1",
  "key22": "5yWMYEgmVk6Mr8aSvogzMCmx88buUoKp6LRr8cWGULkzgQYi98QGJW2sdYTsmbCbQTU6azTJKC4sDRM4Tz6NgXPw",
  "key23": "4RHqmFiBV5tjeDu56M3mjDKczQH7ZY8kkiJ1VBC5hMAjVZb6MiB3xonDUKtiQe9wCcDXFeDuatyUruDrs1JE2vD1",
  "key24": "dL4CXm59i4JAyCPtqV5EkmkKS2sho5v3CBnKarQFMdjSC1dQbHHmo2atFqRcdhw2nz2wxuMxyZYv551AwJH6KfW",
  "key25": "2vyGYQqyCGNWuvF1vY8e3k7NyFUXHYyj85VeBDqJinW6iF75PRQj7QeiZtZ8s5AP2np6QNWpKPFrsHs4UVA2DVRy",
  "key26": "4CFRaKshGXepo3u9uGMCRYn6GycThdUrdCZG99XPyP3nWmLgTWGbRweJWmezAnszJU6Q4goVVKLCm3LRAAjm2Rr9",
  "key27": "bjob3QSHYKaeoNBCCr4QPqgAPBDfBhyFvoaJCbm1SdUUnhL5QMae18TeNJfjeVbs9zgnKRp9tmVtaHSe7tNpRva",
  "key28": "Crb8mxVVkXGLUb9nnXiHn939obLMXgxBqccfqwCHej9nU1WH2XmXeUFmk9stNrj65kGkn2mfRw343PTUoqct4Tk",
  "key29": "3NmtBczsjZDmD1BvJfzKP9jMgse4AZBpE1p1BgpnxNLt2y7ApkiaQXNq95weHJQt3ayNNtMggm4BHpoN5oY6Vsgv",
  "key30": "2PCJBtqNtBchWuGQruqN3M9V5KkqsXrhB8swoGFfpm4EfmSbZuxeHzgcsjR4BAk8kmCnMEKNF2qUPBDi9KKaPX4n",
  "key31": "3DuqY49c3vs3DRqWjD3ZxXk9pL8UGBBgz1fYKJa63AsMPHRAFh4TuYYtu4ezCECM1hbzccaqvW273EyiekW4yynN",
  "key32": "3hiuyNiW8Ww6zP38ty8xjNPCzMg6xypQPfMae6dsJ9EqGUc9ytnokjWkefrqhMfjrwAk41QBGg3jzyVKbUiPVcQo",
  "key33": "5jfzvicRo6MvdEwhpY9BA2Eo8hmkLFhuFSP69NPvQ5rwBXxDWHmyeKLZ7iroGy1rf3fJe6qobwBU5YmbGwmynKBy",
  "key34": "4L9tMyj8pwhF3H45DZjBsoqgYskTQy1AbtGNucHeZUNX894XqsejXLvnx8eM6iYgWfjjaGj1xVtnzsPH1YFy5kug",
  "key35": "atASbkFJAMTzv5Jzj8M6ijjNKmT6K3Nkynp4UkK2NAVLdaQsG887DtbG95jGNiuF5U8QzvvUp65wVLAvmWwJumo"
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
