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
    "5cuvqwaSFDcNYJG9VZo6ctTKkdNFCkkDPGNDxNUteTTGF3Pxpyk68ZysnQU4dmS5jtkGMpYbmF6JMhR2HSAfCuEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cbvnBpixgBoc2dVCSVp3V1fsfaLqinBh98xsVjiQjQhPLydL5KtykA4FrNPJ1Pgu8EKGRzEPSV8L3KzryTD2jYd",
  "key1": "4TuoHAKxvtHAgcnyCb8XNM4mMTAAr4r34zgerZfzmykRambrbEK3thLq9omqAoQauQLEoLHfb6wRDqqnt8NBHPxT",
  "key2": "4DpgXnt8CGAzuB7s3n2JzVjsbfaAmBRWkC8FAgdibTa3YgdnQTTiuFJ8MuPAnZVV1qD6qPak7qAfxU4oYUQNRS5t",
  "key3": "WN3MbjHcz29ncjUE6NXMYAem7SyfrVV5NVfKNowL941EuZc3hCkVYcJsAHQ3C8Dc2cUwLzAHMCopTTWuruCsDox",
  "key4": "B72BTfCASWgg9Mh3PQBzgAQ1zCttQz389HC5EozeZw4cxSN1zfborLu6fDjZEsirQGz9q6fNgJjKdejUqhLX6WA",
  "key5": "4pMQPorn8xj5sZEKSCBbHQdVaW7vhfcH7vy3nQc6NRzUw6sSUsJSTZuopXfcGPRdfBuuLn17H8HxxunEvZGAR4rX",
  "key6": "3KsjNpCXJysbWyCDfDNG21FANusYGqXxbjfserZ8GjbFChGqDcyERksc4hVy5oLjDJempB7EDBjyYQNzsVasXmuw",
  "key7": "5iurG23TZYZKQ26i3ne3ormSKCy4BYsCvr3gQ6hR2VfuiVAx24AKLFoyBXzr11GhcGwbPHjGtETLa5371TeN8kC6",
  "key8": "3zEo94C7dwWVSWM2vBEA5uumkxhogqkgJvP6dW1wreaKJQKjZJE3DWNvb93bCqLipkSapsmETT36pvStk3pWnkaW",
  "key9": "s64iCt35WFCt1kSyRMqnVvEt1Q9tKLHX5gqr5AcC9ZkC1jYfXcCcabaJcmG5LuPjyZKWsmo1e3hZHr8JVsQgWoy",
  "key10": "4vqbS5HkTc4D5jyAKjuSKsid3WwLQNXzy8V9TkT299JcN1N1VD2ArFUBfZzVYpT6z337zFisYXn8o5XgpwEVzo92",
  "key11": "3K5aCzzCu349U9gUGvMgJCn3qNNuicJ1iWnAg2LXSJcqM1RjwWZArj7SsSJ213PT5w3691YXG5vJu65MZaysx3gT",
  "key12": "94FusSSdVi2QpJUdKQzVZrKVf8PvGXiqcsryXniJqwfwoFqaAfySQVVj5dLU4T2HEaakEGtNA4eDeSpQGpxuBmP",
  "key13": "4z3scHnkn5E8YLJEGucygVHWCYA2UKhwGMJWDLpwqQC5PqpLjzRnroKpX5Zoy9J65MPdqmG1iWDVJ6CoEcq99a1n",
  "key14": "2JEJHYWUwq67UWDREdqaHN4Z9Y2Z8B4r6Fb9iUbkkVKT2Vt3iFdCNc17Z7qU5Lp2J77dNLU5K6PwCzYmgG327j2E",
  "key15": "4w959T4HvZ5wgKW5mwmq8VvbffQYdogoZ58jG7WAMj62BwxUcr18B8KRNC7pPWQgHes7DtZxUSxKEyaPTLDfrpys",
  "key16": "2gjRGuBwqU5d3vCVPfXZAmQ6TgNR3ofAHkEe5YroBZgdkcfBLLcKaehKU5QPg1ShSU2pjmVetvof4f891Hjq5aca",
  "key17": "3kYzmFhUkW6ZKN5bBtA4Dv9z7tochaNnpMJcTVSiCo36Jf3cqZY4W5SbnuXZ6Ae63a2riRBDw9fc3Lf7us2VB7jW",
  "key18": "22aAgTN21mU6AmTuw5ZuMHE5ayiKYuheG1CNK6a7DZJS5toZ8y1Pzpw52xA9yDr9gPcuQ2XbjeAGiusT2bsqPyfn",
  "key19": "4SToYzKRLExQv3BzrsyLEXVq1cSdeUCnKumq1G2s3apwj9Xhgq3eLweTtodhMQ6Na2HM6j99Ci553jXUpyqSeNTV",
  "key20": "2PFWKfDXFLjH1FkqerxXdVdjRpJs5ojgM35dXuFrLKYHpx19CU5v6X35NEYVrCidyq61RF8AWxScutf68pHCFUrD",
  "key21": "wdUM9AVN1q8TApfvDvVxfgLdTbiz3xuQq2LeiB1Y4XSfRpQi6FSsEFZRAoVQWzsUyWcpb8SnSJBxVWMbZAfhQZg",
  "key22": "Q3PiKoc1mbSLzocUyTEjZN8GVXjJMsJU5vGA1Cu5aua2z7r6BzMnshctSP4Q5oqpkFtZoU6LELLarBgWsXzaiGZ",
  "key23": "23xy1EMLXxwy3cuawyrkSHfmnfv3P5xxpkwJVc2YbbVU9yuLEnxEinwMiaCkzwejqsHQ37HLEPFXNCVGR69eYJcM",
  "key24": "FaLghSzGX3cWCAYWBdcp6fX5rzs2Siojf5dTfpSGRUFRgoPNizJCZVu2kVWbSERJiWQiUhaggAxnPHSvbEa3gnV",
  "key25": "XeYv318XaZahqJKePYJtApEeppvBSYmQfukykUcigjfQpAPthDunbDzjMTiL1WrNfoppKDd821dfsW2WYBgLEf2",
  "key26": "517URd5AEBCKacGXPAA7CTBYkMgr7FoUwYd97HshYW2GeWNXH2S7z1FQf9c3JQ26RqP6KZfexj2dTg1Yp8VHNVTD",
  "key27": "2bhuafxjsR9i4qW9rLFKaxtHRPBBxRAEvD97MvxArU2uFcudANrLqW3VmxK7prfXg6s1PB318yb1AxkFao8Tj4vf",
  "key28": "2saEomoyQkNr7tDV3MvMHzLZqW1bi2pYALy2eYDfvGHNuqzrUj7H2KwLfJQoBA436PxdXhALP8MVS2TDf6joC8SU",
  "key29": "3wKsPDna3b9tU35K91shmpeoG2W9AyWZzatazWATX7UWcXaLsR33PAf59dpSsKAJYT828annxupiCDWec5y4yeZj",
  "key30": "4gqbnbeAwVK68K18W68kwLUE1jw1gBFVDJge8j1rfvuH1CAS29MWnX9kLDxPdJAyrtwRFJEWsvLBZMcaznbq2XCd",
  "key31": "37NPSMz7q8WheFmpN2w9KXiVGwPWeU6rjx7DZ81AF6jzF8FWsu1UShpRTNS2YYpLQvMNwWyyPqFH5xJ3izQjnCda",
  "key32": "2uAGhnr1row5pbpMajEC6aYVkPA4Y8AcLPvMR72CgkFcqqu5iao2RhcqWcYt8FE3QGA3zu553aPJMnngB3kXJsKi",
  "key33": "23XKQxQigTPhEkYSPRBPgi9rWjxLbghXCtRDKD2aG4XSMCTsEa4mb4QxnovcjZovkxVRfoFt2qeYkQKjmMdm6Sfb"
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
