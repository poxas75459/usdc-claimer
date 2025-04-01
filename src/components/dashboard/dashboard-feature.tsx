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
    "5qoWnEPSrwGZuYMdYWxUDkEe2eKNU2KHNJzNMWVy2zM84DM3atvtrCY1t3cixnPjTNWWreB5ticJLnHppXQRPd2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5amEnLWDfA7BwDJiZAdZa2jQMXSDXw341VN21bibTa3G9ybFgsEkgCdFMYAjMuMSu4xjPM2sLdM4XX3TDiBPg8U7",
  "key1": "24puLt3UZqeTs3gW34KfwYbnKLbEZTHiccC8e45y2zq2hQMTNmHHXGmiMyFQZRXZSAFd1qSw1ETJ8CEgzx41vC5x",
  "key2": "3b5oiBEWK8g99LkZQ1gcJzYnZznGemxeMmNNkhuABW9geLL1iBPtYeRWjSfFyETc5R2doj355wHoTp8FM1Ne4JRh",
  "key3": "3XMNq2d8sUQCXiX68QmCLkEbyhSLXEi7kxxBATMK8EguPBAMrrSHyQ57Z6eonswLPKWbyQV7B1nr7Ex9WP1M1Fwc",
  "key4": "mprB9dBfZhZhTxhCawEmNgNhEMNfCMrM7WZAWV3KzRp3NT8Gfb7r9bf9nwwxG4c2nhj5JZgyvqGdWk92LTFa8pR",
  "key5": "2Po6oj1cneQEFTgeAYsUL5GeRfUBr9XSfdXcGrJB172CaabQyBwHEDDJm5YsM7RSHxUcJ2N22dY2KJ4rqNTE8onF",
  "key6": "5NDa8LPQcdKJu75Uxuc5ZyV6u2PyGTNkRmjettEqQgVdkk2u8LX46EmvZABcLsFWs6YLTVHswj6fHREDEH1mZs5v",
  "key7": "3So6WcZjX2fPfdFqrXnBy2ZPrqAzESsxKJL6NTN1DQU2vkYF2MQrJTJ75trYet3GrfP4mvFA4aXi9KXiFDqK851s",
  "key8": "uVyKFXUSNW4RdgizE1FXSK3qKCe2VonCBQ7QJq6UvYs2A7e1n8dqFSmKzDRkSKXw3SeZdA61HLzh2CiKboZcGWx",
  "key9": "5NuQR4gPHViYDoYMso7tW6h5fZPtYnRK25NimDePTNydHoqba6qwyFRGEjk6G2FyL7hJQbjcBqMKjfersa2ipqK5",
  "key10": "38VQYzQqw1vEWP3eCZxMHhz58bCLFB2L6ZfFq2E9iQ8K1NPPzsjBvPd7ssCcNRdZm8ahhRdSRypqB2kpRQfT6hGE",
  "key11": "2puB7iX1sLyw6bnfEv97WWF847gTS7rK6dTgiEMz1qud8oN98GcABiL4RnpLny8rsnvCMEsFWG6EhPwirfWoNQT3",
  "key12": "2rEszGTgYq9ycRs3dtPbxU1AzMwVoPK2TrMhzHBDNf9JPLiiQpE69TgvCSzgoBbYNYAP9qtZYyTLG6NPhpV59ch",
  "key13": "5XpG8TMAJuU969WVFEmsqTadH9LoF4CQynuhnxSgwSKGY9UccBZhuBg4svh9jqUgSNuBo63frVPuJ5n4iVo2UcDh",
  "key14": "2PBGq2r27uMwH57t13p9kEFbPJ8sHocuiFxET23ut9dwgvdsZ1Ht4SVGysyLVz9bbK8fgXSSGiuAVPDvE3Gfvx6J",
  "key15": "5PLe5mDwGNUUB8aYoHqRDWb2Meas8RLGdMtNwwJEiBHcByFnqj55u3TMGcC3QPn9EkykaXV2qM71LbeGLkWVqj5H",
  "key16": "3uDPL5GEgaFv5B47BLJZ6mPFpCHQMusMgmY5oiE3D4dJuP8oqKHmDCzwTCpp5HH1MAT3ibJK7HJADgXoG5p6Hfkf",
  "key17": "2AtMkVtqHJ4xQjBNJ9WDPfuUb3mMxSzKyzw3tg1YwZsS7DYsEPYKD6PtQ6W7xk714EXSoFVBqh2FSbSPHz1wpwP8",
  "key18": "pbb31WkpKunwnKgYGyWKYmm4fABydCdEmAZEvcgvVg1fpVw44koDhNagASeUCpbYcGuJNfkfBc5VXrVNUTo25ND",
  "key19": "2wLYv5aKsd5DGipG7Xe96bGevZtge9sQgt6JGt8dbsWSyFPwzq3XmeLuonkZo1mZQ5jRzdb2U1951e1Cnvgg35rq",
  "key20": "3WuMduhnf6ZGfyb2AAcwc9bESLTrtv1Vzv3J1Ms3bdBfs1Ufgzspy8cC9kkxrGKMQLGhzzmX7dfWPy472PqHvW3K",
  "key21": "28jqAF449z7ZaqmPvgjL8cD5ceFKYnEP51ZFvXCMsXW3cprwRxz4xuUwN9Da8SA5KrK4g8HhZ3Z6QuY3vomsjBYb",
  "key22": "37Q92Jguwr7roz37Uaof9Hyy188vTz7zPPYDSa4GocV2c9uTvk9RZ7z3aD5Xv67eVdF2WoHJAMECQCDmsA53XHPq",
  "key23": "x3Db7nktnw47VJ7AEGtFxj1Yk8z7iqvzTyw18gTjcR5nn5acgp1TBxcrienLfCPQZ4YhbjcrqXDAvVG9j1VXigU",
  "key24": "2m3rtypj6Yr9256Gi1qRtBgZeXhY3JtUT9TXXMiCLah8mnCo8S76aaqBdn62bMyUyyPu67NRaf1CKuKCGsa9pzzA",
  "key25": "5vKCKey6FQGg5d2efub72GKxr7uRkMGxph5VcBHuDZwXGTW36n39Xt3uJDJ6ttBWM27K6RJhzvUbMppSVQH2R8gR",
  "key26": "2RsmQX5ih2rakfyJRvA48qZhvy8xFF9PULMvhqkpgn5XmUcPt8dWiuFGMYynVPbVpVaMmFdvz4ABxdPB1WtMh8hJ",
  "key27": "5vhrwhoUnJgQquktrmHWw6fn9Bxv5gVeESaXyrYRQzJcD7HUkJr3S7omjXyhCriwHtqW3PzuunKfvJjV3JEX7Ncn",
  "key28": "2hCsJFqoKhVTjvqg4Jas7LMXHZQtgXjkmLd67a8yp6jyXb6UdMQc2FpdMZgq8aGc7W6UfNSRVKM7TUZ6BvGJMui5"
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
