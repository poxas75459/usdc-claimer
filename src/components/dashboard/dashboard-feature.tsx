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
    "2vPpEikY8pjHWmuboL7GatQNkpJoSBZyQPbLwBRMmzhNSLPbJGEv2hZSJwoXyndEjaRvi94qLcr2zVcQiB9Gptu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nQcwkJcKi6fcupNFHPKP7Md4KGnijfMnQM5HBxng1WGJmvhGMftCe5Cmc8YriCMDV9ft92d3kKEg9gCSyauLaMK",
  "key1": "4UMG8ur8pxUpgLmCpt4Mw1yNymvaCzcZbPpTCjKNXvtpktyjRfxupzZGE6La96up11eBUBmhYVEaSxS7yL2FBrvp",
  "key2": "2Ftvx2ZewTr5xe8XX4vhvu8PwZLTW8Qyd6ZCd46PCd6zHox7YgVkijKmgZQqp7vPKQvYHzeL4qZvZa4UAEAC79iA",
  "key3": "5VnnH3WnZHP774i6meUhYm1LX4YMLCdMvLRqjzb1y5J4Jv4ZLEBTkhUSZMDoN3z2NPSzhy8F7SbqTGQPKAxaCPbp",
  "key4": "3ey4zeTRXsGAxg5Uy6WGTXznxQHYdq58n8uK7UeVXZkGgJ1inL8uC1aCTPwTgGmbA7YuzTyXRTmXXbNTZbPdrQXP",
  "key5": "51eNSZ6KJ8RMRCCqdCkyGtTNvA3FbkV4hQENx8eMGS51G573E4XWXhjsoXgs5nVEfMb6GAHvjUezYpvEUSL3Qzzm",
  "key6": "3G4FMQ5wgfrQhX5VezeZs8vqUqUiYHzFMLBNJSQzHa3wqkHQXrcqyYsYosUGb9qsrhdCquzbMrtoeXw7BUZ1yNE2",
  "key7": "2e84nL5eAqA31CwkivwSmvMGERJgvvCnjU3CLD98kBTeDFehdrUYhxVUWvHcujBTCCx6tcSGFWssgJH42pU5RUKC",
  "key8": "617P8wcRh1dn3iPhAL1p7G2M11Bo9Xx8WzAWQ33G5kQTD7J54DNY73dtkcJxEbv88u5Q2HFsmA46cJrhDe5NF5pT",
  "key9": "zcA4dXYwXr1bAHc653rpPdzr7W6cCPESEjvpKKyixFJxSY3ahnHV8Rt4u95L9fHLsDLta8xyt61x2fmLo8XKH6h",
  "key10": "2CvbdsdoT4Xa59zKrkKNyig4dyvxd1UZ7D3QmFJRNWscw9vLhDTsaE9KY5aEuny3mW47Jy4oXbhNFifR8BecEm8y",
  "key11": "4NWLd433boyTxyBZ256xWGVX91keNsduJeiX9QPMfb3tY8GZ5UhmXYt5igoTpBCTDkhEERt61J8ZMvMhgssvJ2pL",
  "key12": "368T8U7UgpvhSLG6F3BBNKRRWkUNeLDP3ZBEgBZrW2maKokR1rHSXwT8ejMdLWCk8jWGjqsTJETMb6G8Pi4LAcxC",
  "key13": "5xzQGxJCKBzcBFohhBRPpmZrro4shhTVga3atXqzkngp4sU8KNMetLXsHHtgidx5cm1VhYG7kAQUEGwH7xbjozfC",
  "key14": "5bR1xsPmKMbsgsSJDqwRzdqLTScHYvpUpQ1b3Ag9tCv5W3rDQAHAG7oupQ6TZ6KYWELGRo6CXd2posA7FCLkxruP",
  "key15": "4yTxvJAjjkwJU2aSvcaPvFh2o3mm6dG3UuUpLerEcuPy3ZXBwRLn7FWND2YJqvoBuRVsYiurwEXv75QFsRVmjRfD",
  "key16": "myD4VWBjyxVcF2USMvHTRCCrBPtzFGvFupsBdL3sFZdK2hHouxcZhdwsRL3iNe7jUwRP1JjY1cWPabqA7nJPaiT",
  "key17": "pUGMf9FoG9yGrPDMoqL5S24pVRxTcp5Whyftq6i7CMhFy1ATkWJgWB7igQMsAgfvPVzuyFnQefSktHsvWnpgdMn",
  "key18": "2jVNkCR6YusThgE3thmNRZN4aWX8R3AWHqDMdaFrLTvfNF4brx1YeCippw2N4moMdoDRdWVLTFQLfZC8Gg4FbcZA",
  "key19": "3yheQf9H5vfNCZ4ktXbRWomidg5bwMw8iciJRZbqje8fUcdxZ54vcygkUPYBJ8zshdceUdpwdrefyfeAcBPyYS28",
  "key20": "593nF4dtvGzNmcED3f3SEneNMHi9Csj5gjry27bMQVxHzERUUXfLKwUBm4VUBEbKY2hWTcj6PqJzN4oBmvCNEjzR",
  "key21": "662EcWgusKcabGKXkVLaVxFwNXukWfEqteNe2L8BnfU1JWwwA4Ki872uoXYGDeNe8SJLmCpYTiSA3A8NC8zrRPqy",
  "key22": "5648q9Z6K7qgxV6Z2DzAZ3r4HErrs2Q6y4KXrhRYFUHpvX8BzRgHHnMhReGyurU526tchtuDM9DNMEYERDwqrS7o",
  "key23": "4AMRMWsN1qtM6EN9SCGXXHttDY7bFSQPbZa1cwxpDSWjUtZuzDDdjya2j1rHdwBmkWejg5Gce3BefDRgR3o7MmQu",
  "key24": "2HEmDZST9Fuk8NzzrryQAxRsWLW9K74xBGUHoCyiQqRP6ftjYSr6jjFjesvugHKPakR1iaJNp6bUcv3LBygHvKiN"
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
