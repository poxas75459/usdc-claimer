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
    "4vjQvzojqZyCCKavtpfTDGgUvQRt3hEbubWveVFr7dm2hTx2brKxGaEQx7NeY3CvhXqfZiPzXWeTZFD42oC1jqfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fmE4XgwHAG6wf7PNmdhziwwbS89waJMZpCTSpAn4kYh3Hi19FxLovZXUGL4GqqQcxtR1mmvSkcZnS3vuagw1VxW",
  "key1": "5uPJoNi8wSEFqA7pYidCyPBCH8R3fPSPiBNkE3BDp7jBykmKdzpJJ1Zdrch94Q8idowtfZFNbdiJD7ADVTjdGTyc",
  "key2": "3Q5dzAVaZpXoe3jWRpnHXgSawYTboS8VbyyHPBrachrdPFQXwjqwZATgatZia7hzQLowUpgNw6fbeGm6rba5tNxz",
  "key3": "esnum9WmgAhdLKvH2Q265rUXxbBELQKUjc1dLifXFSbEeKgSLsMGDuEnhiFi7VMyUmUuqsx8PVtZ2a9KHj5nSf4",
  "key4": "54Q7iJcqh9Xi8urhd89TvF6FY4J9ZgfZsbFLkqwZZBmbPiMnoKtCpkp1bQ6zdiPBYB8eAvAQdGsH1Q9giddsPBtD",
  "key5": "4Sj2LZ6rtaS2cuagU6stkMWeZVdCgJFFcz6R33cq7k8w7gqQWivxyK61NJqPmhjsWdEB628pHNLxt5EA8RLXQ41h",
  "key6": "4Tgs3WKbBv1oGZdc9Gv5xZD3DqcbnPw8M25MmqG4rfJCNoiTxARTPNkGvdi8JTGgG34ZsFy3PSgvBXFzyVn6ayCr",
  "key7": "46furMh4Fbs2nobo5E6ADhFyPGfLrfjssxd4LptYxjT289wCp926UX1iScq6QBwwg2TxoNvTYvAqB2BpwG4DMhw3",
  "key8": "5MBvc5xcoHgougjiw4vkgiVjLgm6F1pkLmUpsv24Uo8GPA7eYR1sGvtmyKtmaMPbqKL2gWhRdGRhyT3ftrJn1kQV",
  "key9": "3uj947FTkYDvXWGPHLE1jF4gPFyGkoFpMre6D5Zy5daWn38ttYRU4wJXa1jVH1EL3WhU9fCjhDr5imwE362ZvNu6",
  "key10": "4ayWg8QstmiETfrN2s9ocT2ZZj7c9vh7BBd4xm5PKoEVaEiXQvhH65YsYAqqDLi6hsEEUhjbN3HRJxiuE5TLFGVG",
  "key11": "2L1xqKNnXYV8CZHNxczoRtWnz9UK5RgDGSftN5y4KDmFLbPsLAu6S3tiLgcBf1nMDYVi3ody1nieHNAE7Y36S6xo",
  "key12": "5WqJdBrrJhBC7W9Ny3VuNKZsoSAJ2ZihixsspVNgLgAmKc2PDUZ3ZxthWJ1fnikv1KwzZw8HTqrTDAL7Ysuy19aA",
  "key13": "3qp5p2SjmVaz4mduL3ZogTCxAFYDcA9adsgtNSnxAiEmA2vAgfQdqMuhRyrxibBLCf2onNrgATmmDpJpsuinyKzy",
  "key14": "4t7MYDMksD6RV2ewMs9dFJpr2WfHT6hgv1FaoMjL1bHUEJgmY5X5t5nC4ZRQDEXb5uFfeCXbTAsr8ox67yWDJext",
  "key15": "49kPJjcockBh7EL4QbBSifdPmW9mUd8vTNCE9F8tZ3Fn3ezpTwTag8KEC6Dx5WjWsXBWhL5b2XTwELqfcVF5pttd",
  "key16": "62j5ZUwJdvE6nzkNdAPbJfG3Xr2wQDLaz76WeVVa9DtDAQeN3LhkrY1TuF3UXTy2Bd6Wk7XdCTsqd5tvGKugqaMf",
  "key17": "3X7JtdqychVTktH1nfSPCZBMdt3a9iEWWmit8iGExjpxyN2CDEb82ac5SQQG6Rk7jXdMggfWQedHCg2qvMPVcAt5",
  "key18": "2rPb9JSs72UoRTb372yTZLyLScBYV1Dubhr1Ert5kTQLH6ooKFLBgVEEubPsNoGsRPEnPouTquWX6WGDXvhdmzDC",
  "key19": "49iuFhEHqxmKincSuHJ2YrszuF9Ld64vSpDc2WLmS1DfRZ95xYgHXdSMWfWZKDgFfTFq1MQisN9V837bZvro4KQx",
  "key20": "4dm3WK6XiqbkNbmdEiNMSKRfjGowedaiwfeHoRNc9hWoduSb8VaZuBYTiNYKvEnE9HAmuj5KzLJaukAjhfRchmZC",
  "key21": "dvaFJrYnBPkqzj9p1Wmh23BNtHKjpJGJUNALA4Gc1pwKaTpRgwauEatEu3xoGindnBordsZjkH4PM6aDgchsbyh",
  "key22": "3SGrGBUcpVSMJEQBqxETkCcaTjBJDJdSN2FjUKLgJLACG1CTKh9EZ4LEQJ8abJ3KPNcp5AnA5pBBvvVfVSEns5Td",
  "key23": "5KjDqRGR16B4aK7AdqUvv5Rb71YPUMyyUQx8rDdxzp45hH3shwNpsXD8SMCvcGW2oQgDcwPxsjZdigGtBHeTe29v",
  "key24": "51r66F36SgKyK7utHU5FfmZXamLU5x3qNTYYj6j8qN2Xxq2HoUqFA8hHH7fEk2x783Q5rwwUYUu3jifKcrH9sKUH",
  "key25": "3mfPLHMC8LzM32i5o2EjWuJcVon4jnF3xGz8q8GXawAr8Av2ZYi1SA2zayXL3cRK9WQCETfRfdZyE1NaBWYNyikc",
  "key26": "5aSdjsHfLVavNJd9C5vPS63DQqoPiee9Rc3UhGBvrxVPNJ1ZGC56y8H7k9WbARxiZTFwaSgWfiPDpGsfdYvaADmC",
  "key27": "o7ffgTFU9fwt94Z1JBR9ynqniFV9q3qwZwuJHenuVr3wNvxihDaGetkn9C2pt6icGsNKstq7VcsdNT6vyp5YygY",
  "key28": "5wcPL6C7nF3bbvmV5E1Q4jqSyuUdqoMMy9ua4V1ZntLXpMn44VQJSk9QSX5ySkoicTN5fP9KtcfnMcoGBpmb5mdm",
  "key29": "46jVmTzoaV1PN54nRAKBHXvjMoS3L9VZxDTp2s9KoRCh8vZWMYPT231xwNNY21PANnK3J7hXzoEVHBSECeYXdmok",
  "key30": "Tukpcz2HWBfpH22UpFUXH5UZj32sNCaw6ynfzKU4wpTkiVx73rKyWABFNMrg4VPiLcFR9ezCWdjSDiwt3qYoBbj",
  "key31": "2pERRCXynBSWcUdvw1TznzTRG4D8Ra5De1torhS85SntWRxcwsuHUodQh6wFFWCoBYJVCxyQqXK7yf99CafnkXFz",
  "key32": "KSp32WhzapuZAYHi7Z5He5ctfYRzFi8NcDJFnJffoc7jkixWAe7nJCreXpZvxC71RLpjzcSxhaXi9mWLsJewc4n",
  "key33": "2kJJUDGsZfSt1nGKw5vvZwd1wdP4e1zX1jxHwr7LhvPRnVfixp29YRDA8c1JLWDPqkHzLStBwBUua5SYsthwMG6d",
  "key34": "2qUZFUtecSLKtJZZMZRvpJ7aiPh6GRPweAyCoNy8tF67T1eCzJgZ7DAzKtBjM5v1whTQbo3e8LoMZ8qhUBdAhYxA"
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
