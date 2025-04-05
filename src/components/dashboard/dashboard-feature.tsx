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
    "4W7zP3MFNcv31uSkhY2owqD6hkrPhrzr5UyFoFR8nMbx8aPWWxHZoSYTnfLSanJ3uyVYGsQgrHJMTkFBL6XTYY2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58VqmU7BTgAxPZFnnZH1jJiLGw2D2HSKepdk4tyb9pDCYDwGk9LS8BMD2BRFpx834G7Pe7SdSyxCVFe8pNC61Kwz",
  "key1": "44yQStmWqxPPDXQ7Pbc5QVu1V8mrwcwbn2gH9PTXiCadZAUDtHYZXa5ALCmXim8mwdYWvgby4GCw4MwoQtMC8KYq",
  "key2": "4pCiCQzG5s9nr6M1hy75W276ATpCyb7qL9Y8PbcpxTcyWfLrSC3W4AHh9YszggaciGVMEwRH2RzJiD4L9ckangJ5",
  "key3": "5k4rMJG2Jwtc9PQbu4HYaxDG21WczpH67ByAEdTy5VirR5SSsDVTYqtjdVQvwiCoRxtFEfUgbLh71wceesJwJxxW",
  "key4": "5fSWQYqigAnrq62M7Nf5bZdWmpGt8346zuo9VAGySSb1zooQVoHbvZWyFF9ex52CaSV9mAdizks5natHsPjEYBu1",
  "key5": "3FW1Y7vt24Qz2A5F3ENKB7oPqW9aijvYyQ5Xzw9xCPzHQA45SaNy5DR9MiUAgE3vxwDkiMh74RT9VMmThfpm517S",
  "key6": "5oubujga9dYMjQQ5MTvZQCZsskD362zYFCw2ihsbTFYZZWNLiBYSimyFJq8NFB9AH1sZBzb7umpYFJZj37BUSDiE",
  "key7": "5Wx54QW1oGakLmFtJ7LSu7YbT4PeLfDQWTLiN3kZYVa763dc83WveJcmwwhxMH5NC7mGD27HHytiHakxivR5PM5v",
  "key8": "4wVXe5xpNCqEHWY6T96ytDm64qmmpfs3nNi5oHVhV6eSXeABoJcderTmkWGDBkRHuohJayNfzR7z2weZiVw2HUSL",
  "key9": "48BvQN5oyQCUZ4Sqj1MYSuQ3rRK4RGGBa5Fo3qHeMKPRSQrdtChw99UrWtATmpeja9NMEKRfCwzsb2m8mzsFb7oH",
  "key10": "5eijwxGcJLUBVGgUyjFKnsjVnjDBJ9qAT1De9iTb9gbtQmbeXURRHHXoqD2dujh1embkcuvUntMdP3LGhNNrDhxJ",
  "key11": "KmBroaSwrUwpRuXBXMC6nLhQ7CrRNwfr4jpCw4xYz5ENYAbjE91QgCQk1WYHGpo72eRzYYtzeDLdMFzc2L5p919",
  "key12": "2D9qjke8j1giGjT42DrhMsKBZg7L4Y3ugw6p3ShUfMUG8mjrKQAbXjArCzCRDZ4J9ypv7cSQEhbcNh8bHKuJJKx2",
  "key13": "52XVgFtau5XRngXJTXkHizuqkwqZBjKg9iMhPsgQcjvsPQVNc9vyY2g7H3WxPqT4yFPsWU2Ug8Zkwf3bHYr8NwMV",
  "key14": "3BhbV8L1oEEF24hoxqBPg2JDsaBacSMyVkJXYDddhhnha8pG8VHuvX2LLffd3HLCTVx5AqTAvBTJnXdHVHCjxLKG",
  "key15": "3QN1pguisSJmi5sea7jYvwLVmDUefCkVFpgcyUv7Xr9uLKu6LA7ag6LqGywBUb1zXCAtxCzkDvt9L9eC66mNZgh5",
  "key16": "FKJPeZitxuKLd5x4uuvz4hHFXtpCbQdkQMUTK5kpUedmKan3vb1hgqmbDx6Akg7jdDbNT7vZbwqXhCzogDjSKrT",
  "key17": "2AeMdhUNhTQ8WJJroFb9VdAtc4duhtL4zko6oqoZb6HCHJqWMKihdraVDXfjEjGguQvU2fwkC8CMHrbz6eZz4j6W",
  "key18": "4WAutNByDJaQRAJcTr2TxTnTEed739jgtfvxLQZNysh1d9TmMuvi3z8yk5cCj6Az7Mh2C1mu1xokzsCFi3za7zwy",
  "key19": "4RJnnXeERVRTrVVHkRHJWwKq2yrESc5S8S4ozqMHkesasw2v2K6MQSJJpSNCPGv1TPs8homWRiECPiafz2beccCc",
  "key20": "5ruk71jHToJxQF8kq93Xwrnu1tTQVaTQAGuR8d13CKDMXEAeKXTo28obsSrwLtGmt7ayYLremrwpZnKZiXH2nabt",
  "key21": "3vofn1i6wPFjVg6u6WKHrAicid9FAhvGRoZiMCHUqCzXxexX7hhriJrwQ1SJ8vekJbXVzZD95Nf7pejiJTEpeZFa",
  "key22": "5GJJKFxf6QLDcCxJvsZ2zBQyNzABUS57JDeHcZNY3NSJW4B5589o6dvZ76dQ1jhZU2Dvxvy3arVJ7jVV851EvZJX",
  "key23": "3Keno5yS5nTYx6jsgK5QApJEDLYJ7bBPtqQGryXyj1aYUfesXu9q4G3wCoeVe7tVswoaLneozbX1ezbnDdJxFkhA",
  "key24": "2qNo175ibfccFFYvcQ41g8nDzUBQha7JVc7ir4ZKXKokZDzmzfuAnnVHfT1moAWF2bqVsmaqCVRvSJSHXC7C8525",
  "key25": "5ksu59LcNJV84XrDUwmKgJf5cDC43wcjrnkoV3rt9rCCxNjtDG3u4gemXDEHQqHcTa2mtpZKDhhPa5urvQS8NXwQ",
  "key26": "32cfRnpibH1dJUS5TMzjpsrTpX5aiQ1wk1g3pCA4JEdiPgwr4FmHuUQELZQZFoUMYS6erLPLFyKPw99zdYqcVoGW",
  "key27": "5Agh4pQpgke4J2SwMFvA9EJCan3X99ntZ9JrHKYEpxpr3eCJhRg3Gpgk74jUZFVBHR5ZBEaN3UPE3vsLaWCM9Wb3",
  "key28": "5KWmnUedA9hKaFrkrmjCNUdRjCHyEWFcfzedC6bJN6xsi4GiBqV2gtZdx5MdkH23sEEvVXAzVxHbov7Bx5Lyr4xY",
  "key29": "3GM1RWXvkPNCmEJtsWDgZGbfeVZMRHU8W1aDayTJH8WjzhGjXk2dM9znL6XgeCi62xAR2Jtb4HWFuEpwJ8bNL69W",
  "key30": "4ETJM9tvvorkWaYF6VNaGGdMfgvLhivejaVVAsWfw1sceutbsZ9pkj6DDwq6BmAzp6yZdqoo6WWpVosigdnjzRSk",
  "key31": "MVjz5ULefzEVnBvEMM4f1uV5jiuMWdu1fE8pbW5wG7ujyepSqbJdNzG2LXJ6oFpuvW2Q3Gf3uX1RFWs7EkBrq9i",
  "key32": "5AeMRZxzLPWm6xLrFybg3ozGNydB4hKCrJWDDTMBoYqQ5ttQHBYATCKF6c7jhaGmKNX5SrHfUacLZnNnbPysao7T",
  "key33": "4FySEhfD4pa4Fi5uq26YuB9nYZr3Q3ENLqv4Dhx7kgLG7sDV4okYEtkUKRVmkr7A52LrwGuXuXYZJU7ThYRi2QAk",
  "key34": "2WKwiy1KUhE68yJMoHiq94uP7XQKoo8jk5Bc3fWH6deE2xQKEbjGp4GGZbxaWw41sr2mPN3pVEi5mW1whK1s6uMx",
  "key35": "36poXVuY1qmZxH76SgZ2Ujc31QVbChE2TxGnX3GHixzyPeAmiXMFmSB6u7Jp9QEVsZndt275TECKvFvESnxvBhdD",
  "key36": "2GKNG6vaDvizXroBTXVBdQ9MSnk3xhquA4HL7EGgFpmXLVAJYfLBb7JD4D8zhM5Ac9jRdcqynFHXhG8Ze78yn8NP",
  "key37": "8mU4KNKJqTtyBi3jUwZqe7KNjz8C3dzdmm8xXLoDzRp4f7Sih79DWefDv3TGg6MqydStRGEb4RiZ6Ywoseru6t3"
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
