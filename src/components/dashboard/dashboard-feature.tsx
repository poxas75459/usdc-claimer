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
    "k7ieSZSHvkXG3hXcyzCFvdcg8GGLDn8TwvmS91c9UfYFZHUBnxeyAAabGS2H3CBCwEop4W9k4AtawdVPQudu449"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wt4sywiajXS99K59YjPnrzDQB8yPXsaxnyqZBBmmraso348SfadzsGVgaivVdRPsZbUU8eZpHhouEURxhcA3Diw",
  "key1": "5fhE3QQVVVnwWiuYnJKJZj1q1n4RP5uhTTEz5UR3HubBrjT3MHnpUZv9NBfv4UsPaKJGy9NF8iBpva3pU1127T86",
  "key2": "4JK7HQxnEuD3awbkv13eUtumCnYYd6fXh7RY9PwoX9AQkPgUgQco4mtgJPgBVKAwo1k8kTqFJVcoTpGFKWnDYH1s",
  "key3": "4DMLnihY7SPFn4tV4F2ZaMrZ66juyaRTPmNLxyM8MUnSNis3TmdAQr5NvNmwfb1JPctwU4jPFZzt7bKaL2oqsvvi",
  "key4": "2EYrHLDuNjobD9sSMxJUsZuaKfvgkYRMGjAMbesFRsQcvPGb5tacohnTNAUZ5uYa3JEaDv9bY4FB6SsZCMbfqPDp",
  "key5": "4sBPFdpLZPraTPf8NvYfLBpjtnM8eWbXW2EjgEWijVJpy1xTrb1iUN1VsS7zE3U4Q35BkqhCHdxQAvzeNmfFDK2c",
  "key6": "2obBqsYpYfGsSXCUzvNvWJKPfEzEAjQexxrSpgriDLFzBMR511ZaGvsr7YkDPJt4yEtABS16XMJEMPXX711UTRaM",
  "key7": "5ohvSFW9FuzTq62E6aB8kAF1V8PDFxFSnCt51NMYgxqrzecvzT36XAAZJeW7Nak49MekxKb31duwnXSKYgpo15g7",
  "key8": "JcepSkHrMP5LvJZYwsegmR1KuXSUdHjd8KU49g5pUL9aq92efW4hBwLn2eCSjyFmPMc3D5ePPntmFeiNsM2ZkFY",
  "key9": "2t12rNE76ZfGrr1zSNVEFAD1nWJpoTZT6NAxq3wkUNPXXKbv9MEXUDo8ZxbSg1UbLzmeWhSv5HVB1Sr5mzw5sqXG",
  "key10": "3tTzv16T5uCbH79qd8FLFtt86kX6HejuyhuSQnUVmersXfuyNftQxYniPkUZy8F1HvJGPCEQ9M1Cbxw4nPeVxqD4",
  "key11": "36WEVFazksojbg8cVUNAPPNYyKdovtPMWBiT6qRva6zgPUxafCQ9HkTdAa8bucRasLm7X2jRBR4MUfjnW3zeqUDM",
  "key12": "4F2ePXX7wCVri6iG4knSL4vgosSFJE95ZTRuBX95hkZGtXMThg5uE5QrX2kng79raDm1JdFeRJTaM8X3SQWB3h29",
  "key13": "51isiSQqLErYarH4hp6TXcvRzNxE5csTDFf6XVfKCQFAvgyJyt7BVPpARqA26VD5D3oXzRMFv7jzRdHfXEnbbCeZ",
  "key14": "4tSuhmHci9d5KUtABEhvq5SWsR3qberx2mwwKmFvVtkBbzTgtafN1zm8jgQSww4aTXnk6Ud5hdHWTCg7osueGNEN",
  "key15": "7puoFdKhJ4egsHFfYLCgzGNvh6PSiUQ4atgQH2f17HMYhH64ao3xkkzV7yQXXxyuQJBgwhd7MhP2yKyZEuzDs7b",
  "key16": "5NgHNucb9HsRgBhqKMNQRmdZHqhJddfuTig7KrsD7jnHanVuLrpz2z4PiAwmr9SU4h8N7sM7e3uX8QBgZgii26sU",
  "key17": "638X94d4NWCZSXUAYcUFRTJaZ2Lj99q8udxoyYLRTprmLiZPFEAWNPMLxCcPQgo3TTCp7EXJq17aTv3nWzJbLhkm",
  "key18": "3K9Mq796bMcY7m8oEDozaQcRqGAZUSB7vJiBgjdcDnJMLTFoaBAJj36Gg6VLicrFoEn22CWLz23pEf2A2jY7E9PR",
  "key19": "nZboeJEePdwst3NKxQ79YP2Nd4ZC9zBELr5Vx6WUJVGWct3yqeZ2skCMATQ33GUoHKUkaYg5yiiMUQtHf7fmTQP",
  "key20": "4ptQFsSJ6EKfmk94oUuTf7q8NqqfBLREaJ5NJvaoA21UbvrQLCRc3VVdzckan2jYetWh8GYzmPeXP8x4DFpmmk3i",
  "key21": "38GnQDE3oJaM9eFgk5z4qjtzuR1P9adVedDfDyZU3dx12i9iRJYVXNYdv9VNMFYeTgQUSBohPbQkanbMLgwLBTXX",
  "key22": "5XNfW29rTYV3VUFJ3WG7X9gDqZ5YjT4qNs5Un4JJY9xWYsShrpQtK51WRCC7R7qoHiHeQdxPpWTUgBTxRYSigCXa",
  "key23": "5LnBbgP111V3f6en3MHdv7593bSzYHsdWuadALAVXQ3hn9ZAUhLi44YjxKmiJQ1WKAqELL3iB79a6JGLss6rFYc3",
  "key24": "2LKFoRCeTGUgtn6nVB4UkSL2q5A9XZgCrr59N2DC1kCALeJkSijNbyU5Km6JsSXQX34auEqoxFyyDDVdTLDwZdEq",
  "key25": "5ZSBMsqd9TKNzF5KW9Q5WMoDeeip798XkrcKHdMEcD1L49P9wg6UHy4ZJT8pGLX5EuqbQh764ARes1neUaN4dzcV",
  "key26": "5i9BSgzWqXKvrnr6FGdN9HmAyaVoA9BSSe8HfmHvS9LkXWw6YHSrVV8LK6rrCjy7FcyHsDesEc5nKGNPo7PFSqnB",
  "key27": "4pA6uPtHLn7AiTkvPyS8qhQxHNPEqv3mopXHANuqLPoap9m5okf8kHpUAnqAqhUt3Q4Hvo7XRBxbdbTCakCHiasH",
  "key28": "4BgbkDG8WoDfwEwkRjvZX4UYw1aMHNdM1u42hYHepDpVP36EWFhKtMGEqZ3qWqcdC1Usx9gNqeZfqRj2EsNE2Ecy",
  "key29": "5NRwsF9SzTJtnYmCSiAmRYZwYY4M5dGaxVM8yxPuo17WJpqjNcrnKgdoB5efmTbKDmmcXVz9U3v1NAR3P6x8Ax2b",
  "key30": "5rxwXs3s1Aa5eoAgBmr8Px4zRbU3ofjHHV9RnDM74KTRGoBJma19XEGJvV6svF2dySt7BoPJFyEqKUgXd7cEYDpp",
  "key31": "3KQTEfeC1MLVZNQpF9yFuAcchJrsjDzxuLUZSbkjf5EQ4cFCpbjWouDUXvSa8NDKLmSwR3XPZW3T9wKxSFxJWfwi",
  "key32": "L5oijpLSXeQypXbbsKAsCNgx6sY1GLfQkVzx4FAZbznNq68Y4iV1Pp81tRNhvjYyQCi5XQYvGa7kbL9zx8ZGGno",
  "key33": "5eMr8haTTN9xC5EcrFiHgEiVygAFAu2rdgFGzWsKh7q1Rg4xRc1P2VMZSnR8p1zJTNPQieSFWdsRszweRiC3bDqG",
  "key34": "2xUcw2A4sdfyJxiE9C5zPFYRUBgHuvAK5KGeUnK1Wcrymqe1TziJ7X8xZmtL7EG84Reu8XdwxaqZgWUxAWzC3PfN",
  "key35": "4pk1u5nUPJTzSbHS7DtXaxhJbycEZSfeKbGWEacJBMJY2x6zHvuPPsiyToLGiHTUGRxds29X73vdMkUNFAPNw9j7",
  "key36": "44oVWF62YtrKuzRwS6qqAQ599DDSnFyTQigmZKjs2uBpKWjGjkyni58Uf6wehitLVmjtaVQU2WGkAAvfAWfznzGp",
  "key37": "5xKoA2N8fb9FMPD3xAo4tN4mA7Lvmbib2axEV4WgFYo9UGfCGZav3aJ15ejA75rUXLb9CrqmhuY3M9vKUFbTZSyM",
  "key38": "TJxySLSYGLV3UeT1UmeDB5riD6MRYbVgpVD9p85QdTSPVhJitPPEvvMS8bcDtArhoNAoxxryWmZe9CNpYjtRWd2",
  "key39": "4tcBsQDbtMEwcvgTf3LN7pGBtAGmN73cpEoFnBHRmnMdhyyrRtq3fvvcFyjcsRYm2L8uGFTdgWGVSHbkML39bek9",
  "key40": "3wsC8jtv5BGWWuNqZFsSj5ic3HDpkY9gpjhpX3FFwHcNUdaXA7aAB3MVA1bEcvBKgLcw9JiwtveXuYZduVxooSW7",
  "key41": "2UPjcLqqsV9KoAJjhHJZqNzAgyhE2RxWWNTRDKqcLzmEmq348TgjZni8pjNyEfXjiZcvzH5EmsZEnEViKiwcuvc9",
  "key42": "67qjP4ZRyUTcZfuFQMCm1HFTe3xruBM5hfQpDd5MzFtjGBhZmmfuLjsM6Lik4WqGjMfaQpPjTcdnNf6HZnf3n12x",
  "key43": "2nYisQqwb985JRwgbGZVVW6bjWXFDo7qayK7wkjeQEKXgAkwuASdj57tV432zaaRCX8RiCj4EMDkhFGwGRfPcPYq",
  "key44": "a1m6kGGQyidoYoofv9Mt4Tb3SqBgL5qyx9kPpxgM32a2rXN8QZ36hbnavKjmY5jgHnYzL1QYdBXhnWYASfeL2bK"
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
