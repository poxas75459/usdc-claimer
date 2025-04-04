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
    "3MmTsNsCvL8wWjuMKWnHyghLRt2fM8Um2UryYgJ947T9DcFgFsSLxwmC3V4EhLmprXPM7NKXKGRVsr75UM7Kt38T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D6pTa7nJwRRQPvXMUrDiquL6reLNdYcVx3DgfpNTL56cEYyLYNUsPrBVr3yHucCPXMGvrqhAmMmqVd9Dzn76A8",
  "key1": "2k8URQQ6EobSop4XA54TZcZevevKs9fK7DengBezPpJBVJ8e1yxyK3fpSFjc3EvmvHg1g2GpDgNZ2WUKmdb9L1LH",
  "key2": "3yRXpLQ8k8KveDLsn2VxD7q768G18udiCbwqiV9jmWKaPMSfUb7FkVR94ebgsPSmoPcrL37cEexf9b7YecLy8kBx",
  "key3": "126Nnep1JcxYdAZuQcrA7AEDQ8Vi7nuAQKnhoU3upXz3ewdyMqnUjKSoR8q9Hn7Z61issJF7UVSdjUKLx8NkYP93",
  "key4": "4Y9pnyknV8ZufVoVzmTQ5Gb5Yg4oNKKVqRB93gSZNpemMFLNA4kxSVjuoNRU6UEVot8V2kB1MzgrmvYxnP9krLYE",
  "key5": "4y2nnHUcp63yqjaSfrrB5Z2F5knvgvDkkWzBG1Mry929DW1nRgRZYxxkcjowKtLrc7brKyjUcfeKmyuVZMDpYv8H",
  "key6": "7GVHMQEXiuvjye1ii417Gt9PF8PXUX2oPrfLvvCGcnQhFqpCpzbeg1DApBeRbN6cLr4MvuqumZ59HVVFBerz5Jm",
  "key7": "3ybKzzsVCffgSeQYMMJDHNDmyhfDEApaaUWX8hAi6NPgHDSasock81CzkFWHYug3SMD9mHAv9qGFsw32URRnmZgL",
  "key8": "5gLei6vxaWobzbyy2sXdshEyLYaPCZsdySCFQ9Sj5mYcL4rV4e6L9PHAmeGUzj1d53A2wda5bykoirKzPYDxVfPL",
  "key9": "5eyvyGecE1X1MhrR5Vp2DBiQxFqXeJp5ZuwJSw3o4HE9dCaoisVQqzGhfjWfvXcAjWjzPgwuiHGDzE4x6HsCc3n3",
  "key10": "3mRUNBEoQ833hx9yjf9eyBjNxsqEcVLd5RsaDfrvEug8eLfaHBVhB6njDWSuCiMp3qvr8H91GY81unVQejRx9SZr",
  "key11": "kUvgQnnFFNUfRA3BvfngCJYDpydvLno46P1HS5KDjeXTjkcgfJpXKhkxoN51A2ea8ZFv6SmN2J3esrR2HQxZhjZ",
  "key12": "3us2gqHVcvEj5KXu1R66vEuVrkzzZekKB2XVeqsVxEY3HBMcdhmxT16VwdezdDsvdDhaRgjQiBH9Xm7QVB9DQxtr",
  "key13": "4T5vwr825p1T3yeTw4H4EPYJhDUVsTNdANS8NaBJcvNy9Fts2ZwCqzjGKx3LS37ELJqeisvAKNnETKkf1f5A3VLT",
  "key14": "qijrh5ie8XiTxELURZdReAdPNytQBXQeWaCYuZkHUpoJKqPwetsKwpWndkjL55sqJDwhAokVSuDfLvHksTKReRq",
  "key15": "2AYmrrjAbupmvXFV2tUkSDVZTh6Kt6YdevBwxcUZMKwkKenoi7BU18Xyub4sQH8sEL1AZ9nQvtAmgeKnyj715FKQ",
  "key16": "67qFVbvKkmLkeFMFRgBj84YCp8TTj9oekAAGfuraSqXpgUdRvmjVX2yyaHURMQDQcoX5NpYY3PGaHPpXzhZSgM3K",
  "key17": "4WXAw5jHAN95LNjcZDP9sgozrM8YBM9oriYj87dSFiRpDL8kKeg6WyyJMqoHH5ULdM47BSDzqpHUfp5s71pXjWq3",
  "key18": "2eJUAyRN7pwSsKYn7J6RKwsdGiPDHdKvBAxWJU4LpQ8kRncEyNGtXwj4dgVLqxJ2XsAhU3N2672DGNUmtCU44cFW",
  "key19": "3XsTdsZHjC48FdU7QegVXoMnD1zp3EY4n9jGy6qoTbjTQ8ccxTutjyYUJKrf24gSYpfmbCkos5EnLsrZZb3bbmLa",
  "key20": "SMQNeCsBKMi2L53SyFpXjBdeGJvoqNQRPwk8YNjzPDUQ42SGgnNGJ7be5BcegLzD2LUAbuqpzNM2KgQdBxt3QyG",
  "key21": "57MdosGhrAEQMDYDWTtrfw2bRpYKmUEBuRdzzDktRcxhL48exBpXDcpWSfpzSHjHbuYYBQ8cZyZCue9XG7UU6L2A",
  "key22": "2SgikgZZdX8GgqyUDtFT5B5JXAxJFUQK666o7hQdUwA8VuWvKSWrpaKpyjktHTGPuuBXwigKJJTJBBzw8ceFjkL5",
  "key23": "3tX1z3CJ4Tr6cJrvuZuVWJNCFWfM89CPgjwPFXFURJ6gdGgk3LbmZ1vc9ZumbPdcqWJ5QX7e3vnEn41EqAPwYCB5",
  "key24": "5WmqSc72b7KaHPVDxjscKnACssDELEvwfMpK9xcaeo4aSQSYxY1DfTBwmKfXiY6oWwDqskUAcvJytFacLZtYL1HP",
  "key25": "D15rtNinY9xgktJNnaeZn2bfrcKWpATGGtutL74nEHpTQ7eCKXrdfSsooh3RwNPx5BnCwZg2rD7j9fyRy7NDw9C",
  "key26": "2oame2vetqbLyjJM4YHymZsXp1TpTTAdaoZpALoFSJ3AY5cy2nkNU5cyryKBggSgbqGBeKSKHwqzhZSoyjwV7c1C",
  "key27": "2m2wHA3ENAh5SAj6n2AAUZRMTgkwpkdz7nfahxidZa4721ZKbmb61hxqSWwBLnFJNScUibGKRwntwCi9rth79W1a",
  "key28": "2DYvMnfy1pCTiVZ6PTJhHYEYuP9okF483N1DGirmxoD95ews1Xk3PXGVYXRt1HSQ5jP7yUTBdux1TS7SibzLvSgz",
  "key29": "25Gg5HgQeyXFn33c6jMR3aBQbXpnWmCw9MyEzqHEbuu1JfEnzuVauWHsKMEQzHcSTkNkFZza4vmtjQYTMK3rqsQb",
  "key30": "47Bbyc7nLzNvkMF97vv7SaVJAMXbTnQtNY9DX1HVLikKwUnx98dJXHfd9vVGob71RqHoV2MMWjhfAWeBrV4diecm",
  "key31": "5EbvSaXv8rXgvaaP2cXcwHmL3Ybend8pykEnNa7EvgBYJtDqY5EqVbWL4G6Tnx7faco6B2i1Xq2EcePW14XcGLW1",
  "key32": "rXNfU7T7yYe4Y4V7TJDzDtBaBUu6SeUS8aPUTuNDNVXai7KXPf8WPxA6erBCnh1uYtXca8W2nmoSM4MST1gnsEX",
  "key33": "3s1hphVrqwjbpt6ub8dbYneLGTchTrK3xgdvshtEtgnrFpAx49sC6P4MvtTH7rA2N6m4YJRGR3enXaLQB4ip4yiY",
  "key34": "BZzHnnWwD5aLbQ9TbFF3EeWWjR4hxeWHmaDXsVficRrp7EMeHCVYEeJvYgmhi5PgGX1nZjYbQ6waEDuFsXmS5ox",
  "key35": "4D7z4Mh2PkzuTKS1Dqbjfo89zTbnz8QaHQGy1m8CzE78X6U4a5WPbnXuyLj8figKZpkBoZwxnKPE4miH29Ntby85",
  "key36": "Spn4CHhnhGoC4bvECDuKA2tJFo2EGKsENzNAQmja8ybRJdw2otRXUDCtg3NQx3pdud2ZA8tqBR7cupoAPGLoorn",
  "key37": "3aZ2Eg7mP6M27T6h7Vf8crr8PXVfkGkGYoX9wzC6UVfQVX5gDb8hEDoEEXAT5rZthrNi91uP9hxf2jn1VjNc8itM",
  "key38": "GSaiV6HdaCjzZdaZRMVKBhNjMhudDVjJpewp2RoWwmQake8f3MimR4LGdGgf3Nz4LmcuLRjRDV2rSEfzQeQokSm",
  "key39": "qGZJ2a3jsTtyDwxXL8vU28jVQME7Bk38zFgo7StnjwzBoMuznJdg1zL99JeGj7wf8EC52j6kqdwY6phv5Bm6AJB",
  "key40": "5crySc8317AX5Mrb94J2mP8yAAJaWFbLyVpTSsztNxo5gdssgCiXXZDKAxU4WpsLwjnguJtrP9BdKf3viKCWr4kr",
  "key41": "2Aw3oummYdvWQVWMHb5qsn2yHxKWQjrq2Ms6WMuBkeMYUwMqeoxH8AtyCQyGjUbARJugnojpXjVb79bWXMBh2W6f",
  "key42": "3mV7JPD6Yi4DT7DW84kV76cB7KrpiZRbVF4HSidHnsbhQoX7dw1rRLkMjPKy9tuN1ZKbZTLPHC1jPvkjKgJVaS3",
  "key43": "2hwQPncusTAe4HguP4rbBgrM7vMsdEYjUu9frdiwyyQHw3WKxEvL6ynCMPgGhxEor7vwi9QgsPzLWRHxP9MWFgZA"
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
