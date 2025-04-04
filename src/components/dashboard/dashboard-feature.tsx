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
    "GXmQ8p2EVX1U2dkPa9S3YCjpgGQbJsTnwt6scMUu55iz3NsYzH493LNmvq7LmncgcHFkHdonnGsqkxoptmPdAyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R4dKuER4B7c22nXw5ZQAWkcTbv2tonh96JXckKr4RJX4v1PaMHH7xYPoVgPkstzuPZHttc2s5Zb27s1EHsLHGf5",
  "key1": "2PgfSKnjNVTnVuotwGa66pEUGzariJCmSoAXxNpruZAT8QuEWDHrQ5gvxMbaAJ2j7XndF1TQKTS2pGtJRe74dbUT",
  "key2": "TQYQ6cEfD5Xu7HPsqJRycEBMz9iTiRjJ3BuKSzFviJ1DQmRaTo191QtPMu9qP5XZ748FPHTJdemB4tVWGrH931c",
  "key3": "2dw2XVqGJ9wFd8U5MABPEK8SUYcgKgC7caShW28H1ZTRw8ygv3gQcEp5H3dhMK1A4P65PVfMbbx1962v959UdpJk",
  "key4": "26ZD35KnzTJykLavrwfGyKWDM1XxCe4ovZ4yFyrhVuVF6mXydcWjkSzQenbe7eSDVuyVTuVdo5wnEELzTFtpPGux",
  "key5": "4fh1czkAoYbf3FgTcHNm5aWQTpG3GfqaZCPWccAJLprQ4wi6k5Fo4cp386sJbCfYJrvLk1FiXjQYbuSTRVkNgNvm",
  "key6": "66KipkJPmCxaPDTuGieoctSHw8FxH6g8DbNKiD1a583GV9cEPe9zg5bzDjDqzk31MZHTQ5gpxCkqePocoTzr362F",
  "key7": "5dAx5AhmtPLiZjCGHUc48tV3iGuY9M6xbFv4vttVVY8TmBhfY8w4x2PuTDKMfG5r2S6AinmtTjxNes8jpNhesH7T",
  "key8": "62S2U7ijeB8Hxh7jjDvDyBqfZv8Xty28pbL69W7Q7fSq1cRuWw3NrJtG9mTsqfpBET43M2tfq1Dj6SEtA6QGsW3i",
  "key9": "52zYMtfdUwAzBzLT1J59qvD4JqYV685WfoGXrjqeuZwyQ9LfBogUaYXK4MMoQ1SG6DRRVp3zCV91aJK2gjKaoeFT",
  "key10": "k3DKrWNEcUqMpp7fL4WS2Z5ZxsLGA9CseZuxUP5CXJJztF9rr4DNZCLpfKke4TQSFE54TJVpMFUDvQnnJf5tDLY",
  "key11": "3kNxTLZo6MLk9vod17xtjTDqyP7EJnLNxNg4R69mBkSyTB1bK4BCKebLPuc6dKnyBoknNY78xR9ubEVBqtLSND8J",
  "key12": "78MeD55VaB6HEV84wvZ1WdTtoNRHcQk5otrxFUKHNgmLwwsLhYrexiA5UygATER7ftzj9VxPr1e7vWxkGoTcWsu",
  "key13": "4SpX5EjMJmfHn5SGCFG5JzWfuTLRGzmB38oKpwHnEJRFEmNsMhjgjp4AdE1FGXFAoUvfCwkvxrLTZzdALTp8zjsY",
  "key14": "3JuZgc4WYRGRHAJ2EzZ7vikmAUVRv5M38bcMVNC79j1G5vd6FrvwH3NnPb8didoXZMwEmiUK3cQT9Jp4jC8WnQJd",
  "key15": "PirK9GsB6SM7whxmtEncxsk3g1CmQthikJg7N9P5w6iTA7L2JRGZQyUB6J4vn3pi1xPz6pZcgUGMR5cVRRBwbRa",
  "key16": "5WMPFQyxdm2bkDfrRZxmR1za43hFbP7Wt2APund3Nu8YspyKFw5xcPJ6Fk7F1xAHPU6yvE1qjrnRo46GZjcwhdaH",
  "key17": "2j1iZf1BKmtYYvTPjsgm2Js7j5pRaHhnYBB4e6GVtTLPH2o1SuD9KgjWybzUK5fpbjBE7MWsPgsAEoKrAXKnooJm",
  "key18": "61Rf8AxbxKQV42WAeHcrXKBaN76cYZ25htrV8fnGVNFcBKFp2nSYGn9PxvSpKoyiG5ZMzJfkmRSiNFMxPHvQrcmW",
  "key19": "3xvjHAGeq11S1QkXVd9MknUXRZm5ge4ZrkcE9JuM7L4ifDjkKSA1dsKvanctRtaMgvJquxH97Z3m9YqrXQpXHre1",
  "key20": "5GkqQsQzPBke4iVSeN2hkkKmFR3UK3XDQoHRzYt6uGWQLQZmH2RQXGqMNRvqsrQ3C19xUaQk4pfMLoeXP9BGE1if",
  "key21": "4bnWuxpHV3z51Fm5YyGXV7dQCjpKEwz24oienavh52pyUiDBJeH2MHBbqGuGnBpUsqhJjSnNbGQm1FDLGVMHSnAp",
  "key22": "61K4ckHjEevGp8wF8newa6FMjSBMiQTi9xUqvz6LsqUZiHAMgizxvNtQvVabpqs1zQxTocz2ZdHAKgL7n1Diw92F",
  "key23": "3Fy8LZT56jjHJUYadzdTHDSNYdfaLEnigCrc1XMPnDxe1jtcKyfWNsCxdirxQ59sKnp7wDczsGVkBCAdR2wD1qi3",
  "key24": "3yLJA1K91JV87rMqA2oQmfzSr4o89BEaneB1i8S44uDsLSivHmgFC7uB3CBMCe4iskQTXnsMcm1LKAFE9bHu3cyC",
  "key25": "3fuAs3DSgTYW9u81sfH2dKenYjDQ3nZdqFV4togDBk354wDAkSEfZnjgEc3PA8fVErUTMG7sdSNQs3UmqxeE41QB",
  "key26": "4m3VM7MdwYgavdGvn1yD19hJhprSKtEXEuKsokAA2dxL6w8uNApYXizKWiC61mhzbeqJkAp8XPdwXv5DrRFSZgpJ",
  "key27": "47D5NsSwBUFfFGtqjBUvtNH1w19XpmvTv6tyFegnQ7jFCvbUtFXxLQTmUJmRxitLdMJDQfi1gJ6wUAZtcCSaEuZ9",
  "key28": "2W8CuroZuVaKTRPnBN3QRtP9Lb9QebeV2aVF6mqfYpzeWzy7UTzuWTWnXsscsxnz8wC5KXhQQ7BGTfyZAsNS5F8P",
  "key29": "26eLGGrm5cW6SFrRbFMnxFHRwx514bRdrJLtMspmYo3DQPbyRSmxzpVzxdH1ZPjFq9Ba4X2v4ygmUmScnxYcA9ju",
  "key30": "PR2xAVV53wrdPMQMYGLrsA2xi67sFxCrqhuCBQqtFddyVTXpf8K4sN1XPHk4gtngVR5awWGMMfqBxEsLo5LcDJc",
  "key31": "5xb7HHfyMoWeoLq7P4UduocW9z4BmSF4ZoUtLBoNHUmtFCqZY6hyTtXa4T997PKxCfvgdFGTVvzY1u7Su9hoAD33",
  "key32": "59dXhhuJ4fYYNmefxGdsUW4r7eNJcM4K9vCJn1vp6NoJmCnpfmf1miqqwzizoYwQjurp7wQvLBqw32JVhQMcc3eX",
  "key33": "nUJYeMaVY6KLoHyYACSq7iKjbKw1dbNU6rKPGV21BBpfepFptxQsscf9fYube27qFELvxcw9uaG7so9zBhW7nmx",
  "key34": "hAsoRjYM4VRHk27dmnXGCunw5uECuj2TEJKfhZw8n5PdbSwh6ScWg93n52VzY14TSvw8dABfKLiFxLL6S3Wtmfc",
  "key35": "trAZNKYPSTHj9dUckYy4LE8m7YDNsaMXvMzDUNDXqm1M1ASgdY53TEGoD5aZNjx921eXjEC9g3K6cCpTNJuH2jC",
  "key36": "3V1poQjymzELhqXvYX2uUD1b99PBr9YoNa7yQ5HnFcDeDUoovARhqrfkDffCCSJVzzrc2xWMxRUGTwd3ZM99J3rd",
  "key37": "1Jg8hPfUwTkX3BCHybdTms7zH8WWV8JnrpkWZSXYnhREzHuGX4UBN7W2XvdeVNmzMADbWNebzsuij4tvsedunsT",
  "key38": "5D7sGxKsUaqvRh3ZspUwG5bAtuZdvKNC4xXwN2HHKBFBAmVUDdxwva4aW4hxCkwGAihdteF1sVQHPFV1rHyZ9tFr",
  "key39": "5dgiBe5Gp7vca8UMEPJL4M2q659ZVvD3xqQqBLMAk4NyW2hnkoC2T2dEdY743vEoRTVEWoJ1fuXit1hBpZWH6enN",
  "key40": "4U1Chuuh5PX4k6fvExk4PTjy5536qtZagfXrDK2nLcTtL4schYo8zhZzUo3MtTR1ePUMftq7Vjos2jya9382mfE9"
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
