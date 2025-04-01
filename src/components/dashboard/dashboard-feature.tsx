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
    "66Z9QkDFxfQ4Lj9xryraSttTDnGQbTJ1SQtoaGf8KZG7c2ReqdZopbnieFrsvjfoqEne68xX6epxV2akpuqtTPRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GjFVjozTvypDcwTuN7RFg8ZyFZ84YwwyxxvcFhPP8QvR5v4zeMhdj9uFKdjD3WbU6yru1pKhyVPPYT794Q6EePb",
  "key1": "3LGFG5mXar1GX7BHTuNzFbrqQ8pSWscU5VJS6VFUEKpnxATw7vNfwvK3rAmqcJBJoq3F2yKRxf3a5ZwEA3Mjsmjj",
  "key2": "88KbxSEv43UbZ5sAnUNjLv2EReZjUU6S7Atc8JSLg6TY2Z4jBpCCgP1zvw7PohDarC3vs224i4u1vewq5oPbw1E",
  "key3": "Lj1fMnNiUo5nf231Juj4eKGs5gpwiJuPmBTUHYtSUzEvCcxFLeijEX6YnJaoAh7nk6q2pKo7p28bnfH6GUz1zBo",
  "key4": "4pmq7cNqDFPzxRmh3orCzvm6z6KprZzcapALpBbbcViH1vE76xUmrYhmuZimiM1ebpj5ZwUr1Cq5rveEarbmJpX",
  "key5": "XEGdrZVKNfw2RXb8yvh11UzKncd3goqJUrNwX1z8qEWZMSbWY3BSH6eryC7usAyRQnLGo9TaWAePvEYtKww8SPK",
  "key6": "43DcV3SBxJSQZ1hFdasv38Z3UBwrasyzqoL5Dr9uM5FkKH5ajf8k5CeVUDtpjjm4ftuRQxNp6GHSw7zBTaaBiz2",
  "key7": "5PUTC7J3sWemMUBdJ4fKCdqiMKKZvi2YTTj9WdYVe3EtEfJi61RsHfx6oUZGhtocjb3bF2m7qkEXUgpUuySMo5hV",
  "key8": "f9D1T9Hof5hCfu4WNAfj7PEmYC4S7twnBbcYMnPhHjukU8CBoeDJ3Ee9XkKP1neGu3shkoHm9ru1mt8cXwo5szA",
  "key9": "44x1MD2rnVbAEkJ7tJxSb8HRfcvy4GdLSnUs3VZgDDkiUQfJVjhnKjibMV4sT8GFyEGgZ3hkDTXg5oCbK3dsG4o5",
  "key10": "4v2Jf47zXM4hcy2qvYa4sj9B971wYBfVLQ3EDzwcNZVqXV5Rzz1h1vFqcKh6d44SupJXQ1SZd76fqAmzBzzDyi8v",
  "key11": "2cjcgSDimRsH2Uw9K9ioF4FH9RNfUX8T3PeQ46dqv5qJMmNziadmVVSV36EjsjXDvYcuQs3FxwPbyR8d5AdWL151",
  "key12": "i8Sxoe9fa1ywQ3LVwFAqN6grUhdJT9mywcsvme8vbvHpX2TrtSuKJ78j39C7BFicVP9h2s8Tr8LYHLoPsR3JWCU",
  "key13": "3xSeLg9CUzLQSNSPh4hQrqyExm7Dfhc7oEyuY1P8NyjKasXzucCoJgmU6C2VtGN1QWkCnwPk51Gy6FgEW62yYW3T",
  "key14": "5qz6XMYrwEzmAfmJv1xkPeJirtDaGeAnzzrZGSL7JiKFndTe45eKqXqb21D4T4Un5WZBukakLKy3rencqZLUzzzY",
  "key15": "77twWp2MtvDv7mPjjWybrBKJqzZkzkDcxwGYCXv6iysshe2XGRPZvXA781ZESqmViZVXGqm7Mi53hXA5xouJ3FZ",
  "key16": "2wh3D2Tk5nWMFopqPf62naMwikAz8iJSnm8ve5YuozPGomCJ5s3WBPdCncNC16hJLEVe2LZ8ygdoAxgcqCQUMKdJ",
  "key17": "4Ri5bauTv8EoUPzfXgfx7oSNwAmkdX6Qg191k33hQU8KnTPPL8NQ6s2hisdaiUqp67Gr6rUBMGxVUruk9LsbRpyj",
  "key18": "4idUbfXnDAGpFzkgciYEB6iC6GLcQ9f7jZy2A8mUJEZzbaf6Evcpew6ivsVMi1Vzu7ar8BKRhMorcqrXRx8umy4h",
  "key19": "v6zdKeYqZk1WnsMDqZYNAN9ruwW1dYLauP3NXoAFZHeMfYkwhB982ihMCEQ91RuuY9szP5ydXSvY698mf8sB1yc",
  "key20": "2i91L9ikDWSchYR45jTMVP1SJbAdSKPvYqHucE7GLDyNpQqP8ZJ1erdg86i6XWTatp8bwEwzPLbEvygEhpUPvYAc",
  "key21": "2LdZ7qauwd8ENkFMRujo4tFPFJdT39Ri5WgKpfT4DZWZqjnPLDsV6rFrDMZWehQM549nwXRFH8UzGNXiUxsKD9Sq",
  "key22": "LciRuVn2fgeqvEBwJQCbLiaLuu9x8o5MLW64zEUSJb7EDKPQ2m8U7jvQn2iLkcV63K2uXHE9oobTtkYzFfkpbRe",
  "key23": "4K1mLKSZfpJFy3WtE3La5bWbDX6aV8wH1zF5dT3BvFZfttyggibatULgZJ4ZrRhhu6zz4JYg9E4RReexkwmpSndJ",
  "key24": "5WjEk71W4bNSWnPxVUiUkgBuExWtCd2k9K26Vg6wamz3syYFwsdKFv5jDRrjiGSVLcD2KR7R1SrdHW7dE59VH6xQ",
  "key25": "S98LCQBdfPeDFt2DRNDbP2c1sSNk4RJSTsSXf8Dshgn6q9HwfCE9rKAD1B41692vmUq3odX1VHB976r7kr2uJ34",
  "key26": "3TQYDgjSGTCsP2a9nxbYFAFEuJt2a3gWdUhpnyAJRfHFVNf3aPn4NgvbPbeBDuMbBFzPmeRGcgLgF2uKs18GMR2K",
  "key27": "3RruwmFiqh2hweUcU8cwxFKkebBNUhWNMShoesX51L2KQmQRbJFtEqjLapVtC91pMGVfDxCs5G8SaPGyqdAPjhfS",
  "key28": "46nrGp3922TcR2TdSvCjwV3izobhqMAbKd2KS9uWJsmYGduafu5LSkutzBMTcs3cU2EvVBBDRyPdTwv6j2NvAij9",
  "key29": "5VRwq8JDw83wUMwpnesE5EpU2VyyZKQCCjscowYZ1swbcS6w9LW1uAWt842q6DhoZV8aAjEdN8fn2988fG25yVox",
  "key30": "5DuD4BRBNRM7gHyYd9C6U8L4cWDWNfZLwSbC19T5UvQv9YZMvzbN8SiPe721gz2Uy5qXkqwRcJvBq7595PNiSgkn",
  "key31": "4mNX3UiYP5HYWTw5YUame7Ku66wwra61Mg7DxtqzZQdjWJgzk6fdvDHfzGHAE1fUzieaWfRrWCoPmcAg5MwR3DaQ",
  "key32": "41gkaoaK5JwE4WuNkiQjkAyB4FqG4szT4mNNx4qT9wCCTJetaXgwZf1GfGEYN4Dy5wATt51imqwbc94Axt6FhPS9",
  "key33": "voNufcnjpNr2ebDuxeSQV7K679gzevx4DRppyaJa5tCJ9bMsNpgk1xyYBQuk4ATT7g4MqDPDM2XPzNRgBQZntUj",
  "key34": "5hAgJ91SbHKaZPdi5wq2W4ad333RFNgu88uNAAZPhTrNjUepmq2iNsr2ynmSw6DkLUo7ivkh3ntudunyvuXVXJXA",
  "key35": "5gASNpNVwWy7Uv2CH6j67poXEb2PSpxv8PaTkhzQuimgbBBe3dFX5rTqzELydD2wT7uZ3kWUHywf97GJjB3CQ5vi",
  "key36": "ZRt4kBkpDTLbjtCx5eLQtKig3DWyGznQwAVmdBHKwYRHE3CMb1LXWFa8NXv5XhCeFtyGkybnRhjsAMDGaLngpDA",
  "key37": "4ivvJ5XURUKyu78RccXnfmxrkDFY8qokHiC5sCK5mejVE6tKYWeFJsJ7PtJrGNqo8HQpHKif1wdh9FgD66BZXYU",
  "key38": "3vA9p7KjKdzbGyy4RQ7oKDGmAgHJLmSE4eMs7tMXAxNtKdyoogrogTh29BfJd1bCn5hEXdCPcikaqKef2jBE3CE6",
  "key39": "fGCRQBSZuLfE7Vs672fJHNWMzndR482XA2cHPVRgvAKVmKph4ePbsMQiJ5bJJ8ncuPk3a9z2X4xwSssJPW7wMeh",
  "key40": "4g5XHF2XJpEHa8udtGMGJ7zP6khfhqAdwESaoAf3LuEJeJ9DKi2ecN9pAuAFsuSQ9vAimrFYpS8KTVv3GH2BzTL4",
  "key41": "4z5LQ8gWJYMVQq7giS7XmRoa6w3WvMsSZ3nTWHcvfG1zbBF1KR9zzic3zgCvRT7AxLdKU5F5YxsQMKj22jrCscCG"
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
