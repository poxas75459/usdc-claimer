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
    "2EYWLwGWvJ8uu7ZLpuLrjWrqwbzo5fGYhz4USANYoUKox2bFb5XZWqGob5sz6BVzNQUukgpF4ji6bSU9vmV8QV6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D3uSxQDWCVGKMkLuX5WcJp7BiehKqHXTiKkqLRLeQTJacahZEMqPVs5kNcpHKZepghArLUrNTtkCVNBZjPP5qLd",
  "key1": "218VsrbNLm9yXMrhD4frwDb93s8JVn151LwTbsYmXSxF62XnVzNztZwpUQdxhvGPLqnDAyYiKGnHVMvtuVxwuoFs",
  "key2": "fXbvPqL52YbHBshRehLf4gwGjXU4pkmZAQEE7esfRCT1KF8QdAHdVTiQdRYWvq8wJwEWhZLGBFrcFkBYeHL2sRg",
  "key3": "Nf2Dmo4rxXNwm8rHnL3xgtmHjfuBrbMKp3tzL5DpDCRr74JfJkx4voMj9pZiJ7jV8CdVFNozJPAVbmrmujSPifC",
  "key4": "3pWaa1YR4yCcesvU2vjAWWHvpWydRxyqf7GNwiuA8r2ZyvcTyhpgrqvPTfD8chYut5DoshZqaURhx475UVYHYh12",
  "key5": "3ZwyskSnRaUPDkvtiGzKU4qaNCgQP3obRuYsMWxoBywqxMRAkhKXiBfoPshrJtcSmtKv3W7aiDHUd3SqrgGYo9bf",
  "key6": "51tGYnvKXvMS3jt2DH4q4TEqp28MAyGAeFx4mBeWebi6NEYaehENeg1buxS3edsxxDx7w2sQNZycg154854xSYas",
  "key7": "4SxmUvk8f9iLNB61sPmYsjXjkhwUKEcdkEng2swTZRE1t2882QmETvRSgEuJswYamxSX1Rdi8m5zu89voRFMJmeN",
  "key8": "2VHiPRTZwUdZCTnrbwF4V729qVE67Jz6Ly2EkmAbPQtrGGJDkp5Kfb14PdENxAqYCLZvRqbToFFJHk8NnFJHzfWD",
  "key9": "5tz4ARnpZ9GsaYPAvvTY2h38ptMEmo4pC47FJ7XzKRbkxG9dx3By1YiuoiVosR3TjjYW4FvA8h4i7sh6ajyxkDQm",
  "key10": "28gBAstmerzwdWKKCAXkCGqcRoUXiM7rjqUiMoWzHjbCyoPoHsJHsM4Wt28zHmzLcuN9y4DSfYrGEKFuNLG4muse",
  "key11": "4neq87GGaG3ym8K8YmX3HHq11Zb5Dc3hVUHrrHUPe7jDCLd1XErDU3RBWMe71eXoEJUyTKLx1L4Czjv4moWazK7k",
  "key12": "FwAid4Y5iMsETR4rcgpfooyAYXRPpcnQjHQ9AMUc4f8NYTLw5fznFng39tyzuYQ5eZkUEix6kbFkr7NEM1PJTXr",
  "key13": "2WofRykNVovMmWNZRwZffDs7B7TZ5LHyyJM5twvFJRGQJKe47gTu3hmmPB2s4rFNYibCsf6ePQmy6GfTsn7r1qQH",
  "key14": "3wANA2F2cyRHdvSZLKWzNY737TucpbStbQ58oAt7muJqEKUGrbrzCbSZ5P99p9SyaxHUhgHhtn65fPgZzk5sfFHp",
  "key15": "5CDXEYTBzxatXsUmErSge9LcuGNswtdCxaBnmEUFbW5v5LExThSNfqFCHQGUmyRvMGS1vGKNTpcM1EkPrdNSozhc",
  "key16": "r7wZCoBksWuzfdpdoDNxRdaiBFcj17F1aNQUjns8NmzBo9vZFJ5tk2KAB9yNpJHCgx593jKzUuRKwKasHMqghXp",
  "key17": "25UvPiyLZskXXvTAs3GnzfZ3yK5Rg4PVh7EyDArDguReYSkghh8H7moT32CR3Asctb3mzDVUPkjmgLdwkxN1GNvC",
  "key18": "gMqet9HFL62jdAEphyeFz2UeLEn7uczEsWDtrw8r9W1kUKQQngeXxm9thi1J9uVJhhDynz6a4wkevEmYPrYTVWK",
  "key19": "KW7LBiMFerhQ5PtfL21imTWZkWNcJQTXLGPobY6cqqd9zfJjJJsrYrjUQpZC3feyRy3KopCfru21kihkDj6qc5C",
  "key20": "5nkwH9P99M7WWyTignnbTYW1PtvgJak9uehRw618s2E8Z67PiMGqPBRGdDZYwCEPYDQHYLL3qkH5SWMFWzQv5Cmo",
  "key21": "3UcJNrGiog4KWg8xpaBLyF1kEiQ4P4bWkMPPxS4Z8k2Mm6WN4Jf4c722mkdcmDc8J2bZX62E8xjbVJzSg3ryhj75",
  "key22": "1Sk7WgCXPKH8JqsBVir8pU8rTwXT9bsvfFM8iqtmRb6SWiGK6oUiBuSADAht75c4gyeJaKoUohYhxfzNa1hfVHJ",
  "key23": "38kHu1qixDKUbNGmiULCMGNxTBSscgopnN6GPSmoo7Yu2frvi93BAEMRpChLcEfQu2wJGqEySZgGnNwDfhbgQtLg",
  "key24": "5uSprqKj86ZpR6Z6KGrYaKKqLEL9Dsfdw8QAghT1EpUW6bSkGUrLG5kvjzbb4bMHtkNkL74EthYECgxddjVp5orU",
  "key25": "2BUxwPiDzt2xHrP7zo6SEiJ6wPHoxygYiyX67UJLNpmvgEvkTrHwWwiSBeEHuPnmnXRu7LTcTmDtgKgnxuU365R",
  "key26": "2wJEpTjo2ATBJM6MoWUgNMaYsiwg5tA2QqmXNmdsvUaFrMWWb41dgV7SeTgohFG8MGZksfiLtC7b8Km1NH3SVguy",
  "key27": "4RQZ3hXm9CPANKeiBkxRZkTgttDDtmpVjtYEra4bAF1s1v76Co9T8kaRk8MHpj7jtTcRrkiXAzFY395EFsRit3x5",
  "key28": "59w91xBDJCYF5ddYN9UTiGi94jhpW5bpmZApYGEuk9DgpymCcN9dCP7pJrekCvpzHKDQ21EH92i4YKnaZszPQb3w",
  "key29": "kwyv8wnobbFinPfJCsL5Qwj3835L41HfmJPFehZgX6UpfoMCMhuLezbUWoGa7GogLcP97iLLHHmapf4UcDK8Hvp",
  "key30": "2eusiXD4amYZuoBdU1H4mkD8emEWx1gqkEj9KgK2PvCJwHY6LgcwdKoEvtvVQLFN5trG2EDJtA1DbqrT7AR1AomU",
  "key31": "Cz7hAzjjDgK4q9tLwnsedK1ZmugY3jy3Fq51rRqMJtU9dgXEcFC1Xsq3k6rN69FFAadF6ypA6qjQHXWzQG6b6DU",
  "key32": "2tRPHR6cUTnY3eXeJ9HUTZn3zWWEetmYtsVPti8RLh4xEcceBpqd9hZ9tjBAj3LKubMDFocTxiogdvjscx7kEyLh",
  "key33": "2RsynecDY3QALUq1kx9yVAkhijq1k2AHw3DEBt8ZvnZ4CKEdLKHMmUY5Gjuc2gpdEnJsa6PMCSdxTqr39SAG6HVg",
  "key34": "2wHeo7pDPfw4QDSYtMLQ8e1wqUgZgD4xLEFtcqkEoTCYLmX9LpuWH9qi5UVAJMusMtyKLNY3MPS2TSFoStbYBALY",
  "key35": "4ryHXRZiARKXQNwBUnjSBMkYuRFEkwuSwZtqv88E7Fyz4tdyvW6UDwYffULcnDCzZkEyv9ckvHxScUajBN88ULTU"
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
