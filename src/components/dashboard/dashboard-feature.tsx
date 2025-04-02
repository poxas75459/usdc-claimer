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
    "2mM6UUUgXwrNQN92ZVFygYcxLQFXm5BdhV1cqqGeSRzcqrwQaU1BBr9RSKMQtSvmsX44FYVniVZTGAvxdPCrR75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i2mPeMYcHeczcSqct1Dfemrfoq47g7ThQf4XLWtsa9fM3nUTb8srBS3eTTX2vf158uiZsoHfTvv6BL9B6e5YwsA",
  "key1": "WqNjGdwMTX7rR378G2x5xXrAdTLqeKggg6yiB2P3s5cLnpHmSLdT9Udnucicuet3weE5hC5cdSHYguPtDEjo7aw",
  "key2": "5hJaU2PYuUo4ci9M1FdWkCMU3Wn73Ca9VMiGAPoXFrrxcxQCu3qkg8G7YEeW7JBYH836pCMPJ4kKWjLiyM53biCr",
  "key3": "3HCD82yHs82tBajqiKyVyiwUwdh1w4gtoRDgfNecdFZHTbf2j5MR92QMQypNj2yMVsVRRLkL2tbg1f5AVvub1spg",
  "key4": "5vKmEGA86Jx7o6HuL1agMJpDAr2oSPihx9ZRT5hxmNLruXzco8shkE7s1DWXUhJZf4dMVT5yoMaUXAkVwBjrRpUZ",
  "key5": "c8TT4PEfkqitRBLvZhgq5f42m3ot8ga5GCsYbBMwKkJuSwuoiN5zhSDhyZaUZ9Zcvqv1VtzGsf8vbTeRd4R2229",
  "key6": "3sY6og1Xbh9zSr8xnfDs4xRVYUecxxvjdfUq3zU6Zo5mB2z1wH15Utugg39jaS8quoQ5ALcobMP9Zj64vTCUon2z",
  "key7": "2QDANTcg72kWryz7HKJVWX2E3brZjPtBARP3zgvRPQbpV6S7prQWGVn9dU5Fbb2qvQCN5orpHHJVwS9SoR5bn7J4",
  "key8": "4mxnBsFSU4HztqBYoBWj1JDdy6ckDjSkyRTezG7AnAXYjWsm4UdkPgLk6d5HmTonsQbXv8RGK1DkcyfFB9T5HAtx",
  "key9": "67Vvabh9Y5esSoMdQcGg1ZVbb3e99CNAmtWJMbhRiLC2D2KtVjVSpsRdfWVQKVPHdsiZK3Y5E81r6ZsEVJFjkgdq",
  "key10": "2WY6bip6su4jXBgQ25iPJftzb5fu4qZtHFZH6aZNwZQf1VbcFJeUxRBNvk9XKqkYhzDFghR3dqmSuifqQV4zLF7T",
  "key11": "5mWr5hGgQBh6KR7jC75MZTy5VQ5vR9ZwQpsyrDMfRFLkaareLtiYneR2KmUUssLgoFhbCmbmBvA6JdU5P4tU7DUd",
  "key12": "hDYMxx4JG7LLU4GP9i5xcZxK5w3iwwCxNfCk1egTKLUkBnTbR8rAX41Poh3xCoE1fSUijDF6EGUSVC5eap4wgWF",
  "key13": "Kr6qYpjrQGxZqnrAeQuN4nR1oTyfW9dKJbi7qDZkiB5aPn1wLzZdLd83kfLPxpbA77HErQygoP5cEDQ1jFXhkS5",
  "key14": "3WC8hNtvVLQ4pzGTDvTh6YMFMWFTS9P77sPCTL5iwdwWFddYVeGzGzMQFFr86xUgohJsw1ZWZFab2fEekTq8evLa",
  "key15": "3Uoe5SL43gwRLjsrhF6iuJVZLkSB3Pb3E1sP9HBP7wUDVmgkrBTnbEcKuEVW73AMd88q5wEmZbrPBdbqzXCToQc1",
  "key16": "5CXi6fJ7viTNdbHfUJdJwehPUtnnMJXcL9HYf9VZYj1w349ZMMwCSkRf18QUPYqehf7x9afJbMYdcEBMfohczutU",
  "key17": "fo4o1He3Sfszg7DKqavustzy7QP3tg8yzM3y2yvsxTUXz4XG1N6xRY46zwu9VzBLUxJUmVAXwa77kjUvn1VHvCY",
  "key18": "3ypGTN4tnx1F6qFQFni2T9qjcB4ueFzNhi2ehV6RyAJZNwPkZRg42pBKRoSiZggHYQSFHffv5RnEYRXsJGwyQ21d",
  "key19": "5ngCvY7oSQmNvFvciwHmejCsssEN1vfMvvbgCSUwLX1RNW2EQzjb8h9qCDjgtQofVxhBacEntmAdsysqf4y5zomR",
  "key20": "5ismCmhs3AWnfyasZYVsu7GKNz5iMt9cSgY77CKGcMBZrbvQtY9J2ba5kgW26gQ4MoPWSmMkHVTnXTyLRK6d4diN",
  "key21": "47TgrG1td66dyckpY7sc4notwqyoK1KEgw9XaDidYJ1oJBzcpFwxN7rMYW5cRxwGTQzUCrC27Xi9ephkkFj9qwNX",
  "key22": "5yXK1bSywMckJsVFbBwAyihyTRK6GdM51DD36Hm7LLaL8dnVzPxk3DcshshdddBBhsAyQFsmRUunt83vhXo9Ro4G",
  "key23": "SSfWeDtpfaYkPCTtf7mXpQnuo26ffNApgy9yfbGxTGUN8ZWzuzuGy6vHLHqdHYwd8oWARhqRNy5kAcaAzMb4toy",
  "key24": "3XN1AADnthQJbfb1cgg6i6WtwWy56PkMGmM113fNfu5ckxLxp1oMVXbud1Un7Enw7jbuubnxsp89XQwU84k1gPhu",
  "key25": "5FA4yYtbtAEtccwb9cBaMQ6n3P97DSUfQtWATxVo8Cq99Mq5jNkspioHvFcyRp8fdkmxevH4wqQXLxUYZeHCcLKU",
  "key26": "3SoFhY6TTRBb8WYece1WFNCNuibE3C3SYAVnm2XXD15aik9DZcN2d6Jw9gc838FutujtvFwMZJDXkKBSLSX9vxC",
  "key27": "2mWZwRKf2wHFURhJaGMFrg5sssbM5ufgpCw22vxnTq1ZUFMhQbnRhL8jnuyKkT3jaVf2uPgSG1Qged9KEyqSYcyL",
  "key28": "48J1cHHcc7ZNLnPG7scxnCsgBAaZJiepjAs5UPSSnVZSocueXn9ioN97ADJuK4XkJhQXuK3PbAH2CuK6Mg5arRZC",
  "key29": "V8d4w55n5cFTr4fruRMBqKiizAG5TPRMME1J9vT3SjoWZG3xtKcmbNiy34XF6mDgM7D9ZGWMcNH7DpWkGpKWLgN",
  "key30": "2JYrRH6kXz2iz6L2J4J5Bxa7x7JtpGuxGhAWVYR9V3g2QUTigm9CW7z5o12yUYFG79kTuVgnFbEDHPYKvUfsGCLj",
  "key31": "31YTs5Dgez3vmcTonvf7ehjtPMnVbgq4c6UKWLYWgDVWAMWNJ3H7puCEStt5SX1bBymAsRwwMa5KLApx1W1NJKJv",
  "key32": "3szosptYgd4FBzBBru6snf5GpWvJ7i8Z4FSB15LzdqfrNuSiAm6cCez91N96PHLcFragnn9KPeSih5Pt7EbMxQ3v",
  "key33": "3DYhr56xSTW59UDTMzP3sEoFRbaW8P5hDv5eUnKxuNrSzzo2fNoBxbwZoTDxKHwE9GGtEqAtAkbFaVSe4PLTKbAj",
  "key34": "3y3XgrMhQVMUkJh3cRhZzDzbtVKuenUtgvkuRE29fEPaWwL5RhuPgRCyJyJhhhYSzciGngwG2ZMiueWhXfZP74TT",
  "key35": "5KoLfmWhkyk8S221nBfGs9ZUfGGa3qoNJGo6Hqn9QZ3st7thGWynHn6U8isaLK4PYbd5Bm4jgh3xEda7vCEnkKQJ",
  "key36": "kKU4ZnwtTP8ogJEgLLHKvH7Fda67TjvBunBNp9vyPkqyN4JHjy9JfnZAQB85otATEFhHTipxSq5egJAJbqsD2kG",
  "key37": "3kectGyVyNazaUQj2BkFopS2oBENfkZtnS1X1s6ceFd8QaBwttC6zhzFPCCKS9nhbyxxGbSGtzMDL2e4zAkDv9AR",
  "key38": "3bHJFsxshUukWtC1jGjbu7eRVeqgJ5hJnxSYteYLHJFqRRmR9mQfKjXE86DNtmF8r5i1wJBLa5EKStJuWKRWnkNC",
  "key39": "4aWKY3LrLbr5viLoK3qyUTvm67NKsnhFFPE3FHFMRk4Lka4fKfwmSDk9rkpMVsH5ttXL4PeP8xQg33nAb4386eCx",
  "key40": "4zmo1mLTxmBX1wXAE546MnA1AWPuQDtZgFFshQm2QK8Fr5wYDDtW8NYjubRJCFogwEUR2GPiVPggJVpc7jsXr2R",
  "key41": "X9fL6uuRYGmstJHao7q2RoPPVWxBrEmxmRBj1WdQS2EA5BmpjmPYjUJYW222PhyRHSB1h696V78MBtxvFBzTHo1",
  "key42": "3GM1T9jwXSz34ayC56pv7LUkPes2PcXLnS9pU87DwEe8VKMzkPK71RJSc1sC3gUMDpMPC6EMoJN4rZPU99rQp6Lk",
  "key43": "3QhuB9dxPkA16yC1PJBceDerfF8TsquwV9RWw2xgcLCRLSDCKUiFmhL5qKPFGbzUQkfDZhHHLvnH3UGHsEVdFYzG",
  "key44": "5BmARbtfudV6WZ5qoBpytrGvDjJeG7K3nC9p4dnXz3vkc84bu3fkGWJNySPmgQEPfQZfGZjpL382sY6KnihS5w6P",
  "key45": "E6wGGsnEa14WjMXvjkNhKoyPpArjNu3a7HkS1oEQ4eRyXiyuotoFhb3HfC3wv4K9aEHyJLpTgnKbrw1yjdfh2jc",
  "key46": "4rfMQab6yrDeUUaMHyAsJEBKCeAciLGkUGNUEvo8JUjEv3SUG46ViMnUGdci4CqUgF6pYycnA7puxQjNQM1iqgGH",
  "key47": "Vjo4aBDnbif7dqpvWtBBy5CNHcPCQo1iVKPbAkamjvNV1nDMHKNcDCUiGc3N4xREN773NERh834Ehg5qNeowTbo",
  "key48": "2h8sAr8byy6HkTxLs9BNK6vy7FeBfJ7xZPtH38pMZCcYkLbd7P26oxGFJZeEHAFXUJEeXayVb4iG2ydzxMUKepHa"
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
