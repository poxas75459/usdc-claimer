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
    "2wjaWLoaELAWwtggu2hYs58HbeLbnMdPv6i3wx2oYmgzeUfCPDQzmc4rL4Ejckqh5BoGiczSUoC3z2z9HSvz6fbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3itZX2d92xRXGf38fZ1gt98wGNYNUEk3gDZib2e4mKUJFFJye4RcbtQidStScRGfe7iKrFboSxfJ8AXbJ8D4jw6H",
  "key1": "5ouqGQVtUnXya5NHtHPwubdqE2j6jAvGdxFUnDvS3LdFhUR2THG9frzwNMNJaDJBZB5JCwEafXsPJY4kh1csKsSw",
  "key2": "2WMjAp1PUBTJV7Dwuk2NRYpWfREVtUHFH3Dkt7DmNfKWa2ySUw9wuVxf8T4mavppzzJqmW4e8tTCY34qWCo7mWEG",
  "key3": "obRcrRLZwMRD7JmuBZhT5fwyg1PYfHyqTMYxUMbJx9M9QjVPwJLXYwCe9bBHLi9NH7ZfKbCXAjxLEySA6X6BYRa",
  "key4": "68A5m1sYVX77FTo2H19xK7ig1ir4ouuU2mneWJzvPP5BaeR2PvZfJHij24qFWUX17G8pjtvEsQtGeM8D6bRRwDH",
  "key5": "4wATHMThFct59FewuDLaqxYZZGNm8YcAPQDdjtfyU4eTp64MiS7Tj7xsBo4zhkrSE25JQaTTdsHf9P8JTxFK1Fie",
  "key6": "gxpzVFzRcm6L9PUYuuhsc5bERrihKcfzTssQD7drP55V23zgaDCjDJ6NRk5p259vZFSCg9syE8jb62xRqXidYVo",
  "key7": "4N9DkYd9GMXMrrzHzCDRAp3L542snX6iVSuk52jEpVGXtY3N6c3pwywgnoKCEM125QQh1ym3jS2WYWVxMegC8w77",
  "key8": "2vuJg7FZatZ2G5KNyLkvRcbQzy565DTK5twXG27JQgPktk2nDCk6CN4doGJRgWvNwWtF8GEJNWPdbkqyf5yCoWCt",
  "key9": "59fuyHfexf9hNUpz9om9MMd2JtfVWnmBQAs7CRvDcWrush7BBCHhHvbV4xcLPKRR4Wdd6xwsX5ZXwzMmiCLcZ9nF",
  "key10": "2vKZ3bPH8KRsR8v4fq2eTe9xSkm3mMyyuUTWw9unjixb6TQ9mBPXZnBZDySD1tadzdcqcS75mcsXx9q3WqYmGLKS",
  "key11": "62QWsKZGW4WQ1PJu3wt4vVg3tSXW3VJXg3o8yyzgEivgTYqCmdYCpzHxP4eZxRmefuS7QNnHwmd8EQ67xU8wnNDB",
  "key12": "3t7A76BNaAT2hguLYRHQCV1xrC74weBh3DFimJE5RBU7WTWqMiACPeBC1FgLiqYA9fkWe8N4YnEiCwusMdYsEhE",
  "key13": "5AhKGz1c5ZPhQsXwbfEjhiBwjuDcVLsynmNmLMvyaU6HfhkXqSW8xsG55zXsrD6Uo9DyySF4a3ZrgF76ew5C4H6Z",
  "key14": "DNmKWPNLMzSCitT99gwiQaGwX68bWmgrHLhCp95xtd5oLUWj8u3EDSJz8Ak6TCs7H2ss16N1HtyN6Ex3hBRpKBN",
  "key15": "4KDJU3MVxng6FKXyr7Q9HqMouHSzkXTUp8mctLJUAX8Esv3oYotJFYrWVv7B4oqCBQ29rpmmobSBjyCQHwwATkgV",
  "key16": "uEvvPtgQt4Sw79pysuydtkTgX6XA9o5s3f921BSF9uQezRJp8KUmZbVjZ2uEpZN1zyU81Sqci8ZiUncdUoXz1c4",
  "key17": "49uNTDBQLN15nL7n8rbjanDLx87coS4qfzAax2uxehU36jizuvZPPBgSVkjwDXpzuPAmtbsepvWafGktZ1vbfaED",
  "key18": "25J9fuWswKqAtxzrypzc88FYvmHC2GMy9hqar9CFtvTxrELTvdaCMDu2cFjNuAw7nR6xLgwXc8Cae97wEgvWokEs",
  "key19": "3iVFAxUvmBR2XNhbkmqYFx8TU9HMTJozfyHTEfMyyP98GDGXcHhmxi6Rtcw9zsSj399XFJwAkAn3StYYQejyNqLk",
  "key20": "57EkMc3vhLTYHCn3JfzEcvqfbZTko34ymgCriSNrSzF9iDkRe8foWqcY3NspPATND5ziYgNGayAGg3BJKx11CkcX",
  "key21": "3Y5y4ms1K2P8Ys4n7K3kZ8mqTbsvUY3jqkGztRwBMnM8mGFMK81iE74P7v7ZqYnaQzmsEfp1WesqNkLFxDjZeoNV",
  "key22": "uPkYS7trpnemXaJXqnXgN5xsPnHr5Yc5CQ2ihSVQX5Ud6n25imySrmPpDxScPe3je4mtTvESxzWSDSnKdbqNcpr",
  "key23": "4SVTm5eyMyrMu4HqXb96YD4SA8aCXXtdj1DZPV1macjRF74dsRDqChQYzmCgm7GXvWP61mwq9yq7Qt2LudSG2sQr",
  "key24": "47L66vpscRj4cAys1XS4amX5BMXWbTGBekxRcdEJqxWJx7x494Gf81D6CL4K6UPM6oA6EiYdpedgr3fUgkiibafq",
  "key25": "5JeEX8ySu8fqEQ3TcVjeFXBuUgMUKkoHX3sRadUixjAd6ff1y3gn1HzKosCBScqbE4KxT4PVg9a7m3Z48QG44Ndp",
  "key26": "5Zkrnpu6c4x8o89YLf8BpEq6b5cunuTB2sJT3e3ZiDQGtFVKKyiw2wbPE28DPaectfBDNWXzjReqTgY6L1ccFWG5",
  "key27": "4Lvbmt7Zo7y8po1u4rXJdMqsG753FhNS1fFt8odnWj7MN4juht85iXF95nNRAYNeGCRBiYQNaGVenMqsw8k2JBCa"
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
