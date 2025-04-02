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
    "3iexp8MP2PwCA5o6w9FvkL5XPD5VkSqqeLy8tbJsA5wh9Rn84Mtnh36TQZcNXQsrtwENV2YFwGykq6tkC8Kts6qn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QogzojyH16r1xTc5MuAiVQeRDWDLj1e3NHD59Umuwvqhr9BMyVBhwd31exBTeCDdWNVdSnCEpKxCjsihpPSHPkZ",
  "key1": "24mWH4vy7xij3RBmtRXZtHtbvbpkL9uwoLaAGntqUasMGQ17wq4xJCgrGHXPKsBnK6usaE7njb9gvQ4jyq5FiUM1",
  "key2": "2hkKpER2JwZdyVzDVtLEhJQUSLg1VHQhnoRxKCLVEWMSo6FfHCEYDiPttKF1n5fK7fukhqBrpvJiiFukNAJbsXEZ",
  "key3": "w1X239skrVwgRwQp1Z9sNC9FeEq1iUKq8SZ2pyGUf54KSPuC1eYSi9Nzq2ritRKshX6cqbkq1dKKxWWek6rHbji",
  "key4": "AQLyzev5fzedwEhKAcTiis3FCD3WsKMQ5zQEvkfsS28rTVeXnEAdiAVQ6MhEDMN9LZmDvkBzPwUmXUgjCHCwCQR",
  "key5": "3kprw8jbC9ZYtWwfC9Nz5ijdRZ2cc27cSbtyUs3yNSVXSJeQuLTRoku5HAy7t53Yk4w4gQAu7Rn5s3oUPoh1dgA1",
  "key6": "3AYHaS4vFNDs5scGw43TRcXV51ekzRq2j57FirUch2ecnDJd3EngfByZicQNuCfufA1EnPd9EHto1KTuH1D7VbJp",
  "key7": "2evwQRSAc12TiGwkSfDQ4FL6D3aTpTsejAozNLV8SGEQdp79mvB7A94kzsBeFYxpDm3Rfu7JYkicKpfnjCVEgTTk",
  "key8": "4oPYf2dFfL9JVbw99cF1Qguno8EV79jPv77WyeqtAF8RNtoT673xKxbuQP42qjoHAerTBmGJmyt9B76dtQjRjXAD",
  "key9": "LYFiB4wuqQbEvXNRmEhbESGPbqj8gGFzRfkFHrsuq6BVY817z819SRj4Mjsxs8BehLkrrGKSqGGzNbvmvMvLxVt",
  "key10": "3pL196ukcGQ8cHCRq6kJh9qE6BCjYdCzmzpejRLuskguSTj5bdMcxa7igK62aLAZeZ5osNF2RPCNZsLdJhNx7PEW",
  "key11": "6U8xTK8G8ztVoaRETUxWwVNsqfNnmrnd3vd9ZydAB6iSR2DxKTaTGLuoTcjgJuG3JoaQHwsSsgbPjd8WzWSZRru",
  "key12": "5gF8EYEM24Kaz58S8bNVkwJm97QJT9kCyHdfs8RCprDtErT8EDcvnU7622PCJEJv7RDjgSr6ebCsVdKrxy8Fh5JK",
  "key13": "4UhuKxCCzjX22dXUweaJK8ZexfEZsswyv7eTSL6TscUmW2eMuNHL99m48wURUWUZwXsyDvfZyLEbq16KJhD7g7Yg",
  "key14": "2bd8XXWbNy2enwfgjsGyphkgM6A3ogVpXGvRoygdWcdFEyQBZcsWN1qy4erxna2wWatXk8D4QoKXBcMfAUu6neRG",
  "key15": "2yNwJmR3xsu9YwvA8D8cXn6BRMzb4daqhxss6B5bJWK9RkR3tqLFuyTtJguE8FpVE1HWk1MCGAyQS2Q6nmpP4dfV",
  "key16": "5owzisGcvfiFNWsKzMjASDFWLFD7ScCqyS4nGv5QkFUihN3ar3cdGVgVviCJ3qzbipnXwfLjYVmfa41BFSbKFZme",
  "key17": "21WVVLSKUCcPHGjxQ7sW7Fmzmp7o3Gx3Nci9XEz33AH2DYzq2dEGiMz1qyu9fZcof7UGqZGotyE8aKHKuJY6AJC3",
  "key18": "5PB9VxM68mgGEtx2SKzbcFsk1CkoUEX5e7ToGj5qTRzuLZ84sSuvnNm5hbV6qvw3xMS9wFnTwBoaqmiUgQqYiUpX",
  "key19": "2MzZqNocFp92JS5dL6X4Wr4Xvw6XtDYyhCHL8wrvvxeMoU9eURgAW4yzztrx5Pi6Xd4wRHSAfqeT9ufD4R4a5dYJ",
  "key20": "3dQyzaBKQ97tBwtEAxhev2M8zapbTPDMoNAjXoMJbhegPaDssdpktKRYazZNJuY1PF1nCrZDCwP8nFvy81XFbshv",
  "key21": "3HLFmu9tKmK6MhAUK4XsxHvFWD7ZXiBHvHHACogJWYhHY4gYjaqRN7n3zz5n5jD8AXLvLZ5LkXyBG4dub9hBJ78A",
  "key22": "2JmKektjeSdd1Jh55NRAEnTNUPxrRbibtTogCFH5wdd59xbvEvMTipwYxTnnCykNDUEtv1zQZgGhoctVxVhR4Yhi",
  "key23": "2QonMnvzgFWPuzJ2z5qXX8yYo9YhxvEVWgmBK45VLAiFKe5QCypfosySbe86iug9PA6LJLDxBK7sKP1uKYztnPG",
  "key24": "2BpzJE2z5RNKXUpi6yBAX2big7kcwS2Hp43VjhzibAc28nvysbByzGTYRVLhfUxDkKWbL8VBUgQybW4mxbnwoiaP",
  "key25": "5WLYffdGEtgeoCEHpUxXCB4NAmpMyMEzE3PGhzYgHUQztgzHVvztQHbcQ2t2EzRMjrdHwCp7PnFsFH7trN7ztmi"
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
