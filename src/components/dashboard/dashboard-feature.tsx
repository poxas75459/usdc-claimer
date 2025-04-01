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
    "42tNJp88cwxUkZBL5NYakL2KNPnTgFuTT7K1CPF55iwPBN43pykN9PUhmFHKdxDiESS6kJ5eVMnzy2oSosvLe81d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ubt5vHu61mJkY274shXP2H4VAyZsLbqnUxK7GWzWAZgcQCc8fbJkyDS1YzziyfPFhVrTf4ohZKrHE46pLgFGCSc",
  "key1": "2nPdUnojuBpFZ4AJRFgJzLwpos15yEyuDbV5nrvpFTGhGtHxjwFmgTRZpvhZeR5tvVxL12PAUxUuXe4y3WEpwzdk",
  "key2": "EdnCrVhMcdz82g2oRAwXCdhtycSLQvsqUr9vSvbG9u75ybGhLTbzmUz1b5dBex5Nkm3Q9FwYLGTCy3GaXedvhrP",
  "key3": "KRSJ12cCFaLPsoLQs5gdfFuxAUof3GpFM7o73n4rDKMUJER4TqWhLECbS8rxSDYegGJm9ffmVgL5LHjJW2QT2Eh",
  "key4": "NrYF3W9RTNmoatkQsUqN6ZizZdkPgtdBmWPMyLsgwhuRWK7c25Yp6c7GGhp9GZUxnAckSUJJXfxHBYW4hBtdBkb",
  "key5": "5nae4euNHPANGkPYqvyqNgPAEzhGmCkfjMKywLkDUfTYWYKoRckGFzmRJsrEXt2BfzgHhXXjETjL3ALDBqdPgNuC",
  "key6": "446GAvoNFv7ExU86nZhrwbuxLHbweZD9VwaXhmai59DngNP4wx7UMWtVU9PM2MAoTxe1csjreG1s9n6GPKYjUg7p",
  "key7": "5JxMTUVrpdzAc2iW9NnrLjwtB1Ku57F217Nm2yMgCtLudrrySFrPSQyTSfXqFJgp6E1gwVFUDLkMxLVSgThRhiRk",
  "key8": "3bqtB3UTtLTpZDTqN1pPFk2TpCD6mFC8DWXuC2t6jKHEaJEHTUNCT76eso3Mo3U1XezGHfinZGqDuQQMrnPNih6j",
  "key9": "yKFHhrZZNaw12eanwBGFpF7vzi6XdPFJYyFfeyugvGLAMptRM1gbgVjB4Tn3FWheW7qj5aPRTxAiQYrqn47RoZg",
  "key10": "uFnq52aKoyq9PRQjDuuURijcD4RcmreCNMR1mVH5825D3uziYbcsW2De2anmpW2YoXosTViDnBnAUgVwKAPsdTu",
  "key11": "3ddGUb5dCJ2RYVYRiXMGw7Ns4rZn4bDxdjqUtDdpYeUAtT4JMqdREQpnxh8vToCLvsViBTu3p4bBaYJhJHkAv86o",
  "key12": "56oRfqfw2medXuRsBJfz6wv6rgTKQn2Lkx81kZ8HtRB1TZRfT2pJS3xoqBN53P1vnc65DWq9Wf4GzFBhyhyszhwW",
  "key13": "5aRpjEbn7YEkQXtUuFom5Dca5uf8N3W3Un4MHgZcYpUfwn1aGig53PUKZtXjyi1ruseGT8QCek74TZcLCX6b3dkm",
  "key14": "5hpGVuCkvLUzYwYHcY41haX1vZLH8nsfriFAzkSutymHDX1SXiRL1TS99tqDu2q68Jx9h5ZJ3abz1e4No5uq5qba",
  "key15": "5ZYD7rKNFBgX19XeywvT1Y6ZAjWpiLgVcxThHQ92aGAJkJx2TuTbBSP4pqQBTXCAChYkg3oQ39kFY5g3zGAdAr2P",
  "key16": "BnjAcsJ7xKhLsDHB6qhCVmn2JE1PgN1e9bu8Jkme4s7EQ6AcC6WJ4snTZLgZAMDFftpQB9cPPk1n2cLf8txnqhU",
  "key17": "4ttK7AakvzLQVPVm3AYoZJKbuRHX4ToY4KzZPAxPCaincwzTTefjeDHFbFZzBdnnKm5wMhWaVKq4Thnan7VAh5Qc",
  "key18": "5eQZWJ6yzMjvxEfjtkNpadQPuDaTjYEpj5Ac6Hi5Dko2D1LTh5tM6MfXE3N7HDBmkNS4u4DECTZWnFuHUhWJ5PoV",
  "key19": "2QePSHtjVmN4AbhAcN8iiHoWG7mNczsoAJ7orLdmKb9bLYD7u7PZzJ3wYAfWrbgkKkkQLmKAc8apPgiKG1qw9o7w",
  "key20": "AoMHnXYjE37WHmq1ovtu4iY384ULCVYVfq6SzygJ97ubJ6hoNEqHFCfyi1afN2NttDPwL24Ww3o4cP5j1kA8iqL",
  "key21": "JSfnAgBfDR5bxdBnueaB8NYzJbYVEV25ieV7gT329UJYEbR8BQxoghF6Qrsk4rWcgciqKLwqw89nsVa5uKUd6sH",
  "key22": "3TTLKfqSgrYaW4JDJzovBG1D4zaZaUUkMTouxrJ23yVQUSqWsDqLjJeHYHSfsiP4G61WazAJa5xaZq26LMxXySXS",
  "key23": "263GKcLQpWck6uSpVcTDe5z1ZfDnF4vnTFxmYzPbiBSC4b9GDEXXFowZHJTaUxtVB8AFQXt24hpLCzQ1v477NCqK",
  "key24": "29a3axCdon3QF3H93vRXiaeoDbXhHcEutkLLTkLphKbSjReu8PfJRyzDPL7iYMpogEZyjxrjSm3k5qEQLwDRFpsc",
  "key25": "5HCFvfMcrEVBxSHoBxPBJm3eGKE3GwYTbhTJqLMnffUrR7myWCGYUdvr1PQzHqqJ75Lk5Bmt9rHvntfkaYbwNshg",
  "key26": "47sZqiYAhndQQyDAFS3Gqzv45uGqaSWVcSWnLtAioLewmvAzg83kX9MjKqzKp2ARvENPbXTy1NjFoQtU9C7F2eAp",
  "key27": "2nS7BoQxAVTxMK3RBuLSYxL9Ay2sJJCLdRWTNKEEtR4Ah8dvBWuTKWZdNs45H56KFvuRpDHZYqqPa5b7S4ZpGQsi",
  "key28": "5i6WAkEm41oingpMdZ6839263gkA8HEL1M4P7V7tBU27KoN3z3EXyeqhX13ETVx4GNUycah87uhs8SmntX6p1zNA",
  "key29": "2vLDm9mNsn4ExZLm6ZhrTMaa2nCEPpUUyMLo9S5ATZFyGieA3HcCSc5SrkErtZpLRS84ywiPWkHzN2Vdc8LNxZkk",
  "key30": "5ym1dSWoenAiuPXXtxjJMXP4gs2wmQWcDMTppALCJFQnkThD51MpggZe62sGuXoHoWyHRuELnPVqmggNMn2LewPE",
  "key31": "Qva9AT5FWHHevBgZ8gGWVbu8KhiUxwHLcNnKY1Gp2zZuiCoRYFUUbNB7awoS3iqhZ7DWRMeF2Qq8z74pQmixoRZ",
  "key32": "5W33NbMKggXijhjw9pkKU4htWKWX4W4rytd26it22biibE9mvq7ZLR6qidoy15n2ZH1dugryrBaktDEUXJxjs8cU",
  "key33": "obb863HZtF84EaQMx7mDHnvQh2r2fRzk5Ta5UjnxesaEx8fjyftxtPGGJW4dttt9ZsAjcYzuNBBo3VqPyL86EX2",
  "key34": "wHtW5Xcintfz2wh8ZVdgXcd5sUKUw5ZRbyaZ7nuAb7HupLfAvFYXpAEjghCa5jCSbyx36SswENoqHnbjzJuTkdj",
  "key35": "4aLMCVoPPE8u43m8xkUzhLHTJZFhxbBAvfG2JHYqThSWTPpMtGV1Q2WgoqybZ7WGaDHbScndTnZpnDnoTpWokRBA",
  "key36": "2kzKwHHfWsUVuufnvhWvS1RrxCDy97L5BFHse1vpXq5WoBaqQgb9QiQcAfV5vr5SPQs8A1DPjuwgW4mqFH6dbwsc"
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
