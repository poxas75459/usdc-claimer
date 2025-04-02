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
    "3ZsCBbAjaN9DamYFGZzFycAUnmNXa7jRfq3f8SGvSYkPHbt624KEwQS9uQ1e6gnNqdCVN3RGsSQJk3Tw1yvtaysB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26WvQRMzNrbirNsiFSKFzCS9dFDk9rkbxp7HoqDNWFHgZkA4GQhg2M9VCCGRrYTx9TTfRLpJb2JuQhD6fwRUUUaG",
  "key1": "D6EYRWdMT56DtjtkVoPYpNnakhDTTiBXKHhTo7VFW5GWKPM6tmPeCqPTaf51wcbv3LPCKby435HtcTgnLBm8KMh",
  "key2": "v4kFFEYTJ5DzSvxAmp2UPUN2yKXyAw1GMmvvJQKMzLsMfk3fuF12raJ3H815z1RGj4zxxDWLa6UR9nVZbpQKoMz",
  "key3": "sPdUa2KV9DSGzjhqn3zb7cbFuAukHsAsTgWwbCQhxiJ8iJ2BCNmdrQWovqJGXSvchnpyt8rhSqAX67oYSgz85nb",
  "key4": "wEJebMiW67pj8Yv1TgnKGMxDNdGoGqug6ysuKUSSZk7TsAkYRFycC99jVfkumC1aKqYXQoyAoLVVqGV3RKzUQf2",
  "key5": "2fB4QVrx9zfK7ZiWjwNdzWZb2hCCNXev9q9WG7YzoEFePprYmS9238x3t89oWMJN144pj7aaUo8qipzUEys4pAry",
  "key6": "4dh19j4KPyfaECLctBb5hg29EoF6YHRXxRKHyZVcUVBqCDkW72RS9euMgmVdUGvS7yi2LcCqjBjoLXowTnMbELwr",
  "key7": "5KYwpPDCpWD4B7ae1AkjbR6ufLVWfwbkPu7rrqbGk1qMm1U9MuJRxv2aq4vjfQS9doN7eMV4iFazQEaiyHMfQJ69",
  "key8": "5LBzYUNBfttCTmRbagpqGcUkwk1PCy5b6RQ9Gu67ZMYWSAj7fhyAAmegroSeNGSMKrwvPSDpumzcxJyAX1iTMWi9",
  "key9": "mpCsWGtxFyfF2n3mCEhcZHKQxsVupTNv9dFEhh7Zqgy1UNDQe7iouXGh9MmCHBD1ctCACQGhAp27bg4bz58jyiM",
  "key10": "4b1VhFUGWVz8pY8um3UWWJt1seDPLP7u7G9ooAjg5SfDPRsAwCPjXjDk1vJC6UkPmPQSvGbXt28LDV7cmsujE5iA",
  "key11": "2btCQzTdyCPHNWdbnfdeMB2EqnUyQg9o6hUz8S59RmzPaB8FGP1Pk3y6GGuvft4vKzSMz1MKKos1BJknvtq5veLY",
  "key12": "5FXaMKQbWCQdXcbp5Jwex2itSqof8b9ykWebdMzdgzrz1X9p4kDo3Y6n8PW8uQ6LaX9f1mSHryTkhzdohcjsNGPz",
  "key13": "3BQc3GDVCAJfawpHx3C4S2VefS9btDR27UMRbp7zKSm7hoYDYeiue1PD4cUsn12UyaoapgcpLNc1KnCeNQkzkNSa",
  "key14": "38yMZP5PqxUNx3GTJuiDWyXAbNBedzVuPbYYaPJS3NgPGv2t5vP5Rh1msPJCBhjg2hdNFEoDJyUrNbK5kwVq6qNm",
  "key15": "256Yqo3aLfRT1VRGn67HRf3F4JN8cstFZ7CtMvY2HnPPbP7cb73DcunUPe6vZA1cCFL4PncZDn6hVYp9EC5bKfrP",
  "key16": "3stwgmqbAvP1z9ZiEwMWWkb83YyeXKiErknE35KCzn7CAXU25iworVFnf9YUknZTLPC4PbRab5Cne9saXUPc4gtE",
  "key17": "3p4KUBEGXiDiCYE7CGaXJQZ1vYWLy5bUdrJRAHG2cxM5JXw1BBMsvoSstniaiCSzVzmHhR4jDyjkkkDAnCnTrFXQ",
  "key18": "5ioenanada9Z14uPpmbNJJxtHYrx7qYSjDZu7x3MXNPxkazcu7AN7dmAwe6Ndk7xMY8dfNUHkgHRoGLBMTeymiDf",
  "key19": "4i1M6QKjoVXyRBCwgU3mNFEyuUNUQPV97UVLCMY6Aq73aTLYvz2fP3bUR4WVvFTfj8ibonLUCUJfqU5dmXDYiDRV",
  "key20": "4oXdh6jTGrLALGDdXDHDyut3R5i5PFc8cH7xyJWh6Wp1nmuHexBkQCcp6fPu8XeL2U9SP6TmyLSmM5Ck6DKM3gv5",
  "key21": "2VPZy8BNcBcipUBWQDS47ShfDFrjuvFpjg32k1nHWmzNrmcqNHi7UHRBD5qKK6NAcXXSJXqtYETxccbD8ozNTXvL",
  "key22": "3QjAJj9i1NthxJspDC6hRkNTVFKSboGJZ44dWG5X66qihR1gxnqVXN4rfkriZ7rEu7kjdG44tKtXXdTTiJP9ghh1",
  "key23": "1gRkDTByMccM8Z6mR7nZ8uk2VGnQo1fYYCPhWP61jfbL7t32eqWfFWsUC5MtpHgZtWE2J5mJhgYnVAz4NKwXvAF",
  "key24": "5SiHf5Du9N7QFpmH6RLLmgkfMGcNGE4etmi8T6cDaaXbxQHxfXTpeQzyUN5Y9DMBdnWobVYqntf4uJ2Z7nfq1RX4",
  "key25": "4MxdNHMrofqoEwgt8G9tZWXnsv4eX2ky95Jxo4x2umxGB49wYP7kSaYsQpN9stph5ghdKFpszg3SVgJyGHGdKNv5",
  "key26": "4MHJBdmWHBSDXHTgssz3BW7TVRzintyLf4AaoRqYF6sikmSr7VVLasw3xT5p4RSkD8VHH9zZbPov41xC3AuLtey3",
  "key27": "3yRWu5HbY2QNY9SMU5S52ktttbf5fHV7VyN7sQdj2fHZnW7opFGSwCxrLFNWVtdsBWqZCbpngNmFCFcz9KERMi2v",
  "key28": "3A5qqgqwc6GRKBWXGJdWnVSVcMceGT6mybZnpVCUE2pteQqNZabTkGqi3YDzdAo7AYRbJKbFXcTcMLRet8mw1TFT",
  "key29": "2Hp5P8muJkj8Mnjxd3dTg19oPorJJP6cFMKWubJKoyrUeZmhvy9jWGQxZAexpLbbpP2Y7nRV1wtiU9HzCYCEAK9W",
  "key30": "2H4Qp8WT6B4Lpkv8aV1XM7tm4dPYEDPMNQDHWvs8ToUMx8K59sNdC5nZTkgbmUeW3d2JrgwY9cyEmQi3yXBGrCiV",
  "key31": "36SndE9oXQFUZsxcJVCaCzS74ohYnuGvc8jv5YU42DjUd6rE5ozuDgtoqDWibP9KuyTtyoESqNSzkrJ8tpLtWqKR",
  "key32": "2fNoqwt27n4nHbt5bZ7bYNRf7zxpgBjrJgwmG4cuGqCdL8GSwwnuR63NGv1b5HDubWFJCifQsfR98r13bt6QA6zj",
  "key33": "2z7qTdig42RRx7i3UCms5vvugZXAFG1D3pzToJQxhTVB14BGFGaLr4GqheHVaihJEpetABB2oJEvKfzTvs2dkket",
  "key34": "54VN6nuMBfsYFT2HcyrxUtzRvF7qdrkkh3QTVvCU5sRALJmaf67zgg5PURofpk3T6eqtm2oAoMTinhnrkpUk2z9c"
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
