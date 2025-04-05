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
    "4EoE5YVeGTzRQ1E6mja6NK411RVjA53sF1NtBa6UKHxPwSMYQXM36n2MGG84MH4pSmbnVBoq4eoD74gWFdxmQRaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LssN94v9TdgW7Af22WPxYxdNaWT5auK5s32U2tnhxBLmc5GHSRQeRT5n4QAhGCiF5FqdtWvPhAYsmLHAxwy8WMz",
  "key1": "3Wf6jS3TvkBn6ep3qXQA7t44sGjhvf2sdNPSRrPPFLbSEPyv2ex849PzKCfZiCpitE5e1CX7ERyyFGMkf9zaatzL",
  "key2": "wNQ9fuqnfzRJgBiCpMx2xRQ9TCyppMkz7GCbRcQaY2MbwJDzy3kueae5ffQmK8VrX8KbRWRwyYswBWV81ycebMn",
  "key3": "5GjFXdrhS6kSuDPM4umyBW3mHRRRogxsptCo8xKwuyoFKjRQAtSf2Vw8TPPBwXztDxQyar8tXJyRcXp4nTs71DtG",
  "key4": "sMUtSGzPMb9jFhhkap33wiMb99p2DLxtEZMAdwgopL6Zs1ZhF8CeEeaubQRmqsepCnL1s6hW6CjHDUH3BDt4sKC",
  "key5": "4fWgn29uHCTqVnPGuMoVR1FgEdoAaSDnpTfY2z8na6DZ6pQsj8qLRZUc7FMEEvkZHVmDewFJjC9jf1P5s5XDbbJ6",
  "key6": "5mWF2bGWDjWQqWqEE8pMNwMEBMMHNSb9g5qXj13jgoHcX56B7vnAa21vW58xxsy6abD3hdJKWwf32GsNSpzVvFBd",
  "key7": "49sEvrXoU2d45pKupfovyS7J9nXJBpDa4Suk5niCt7qh6BRZ9aAYZoSAr56wfGYS9s8ojFZLL43FqV9g6mFBc9FR",
  "key8": "2fPWvW2VmMuk6bEXiafh8uningHwyQy2pc9stNqz5p3H6YpY3R45vpaRyPJche8u9MwkoErdYfXRnNUJnqYUEp84",
  "key9": "337ahZHwHQbCB7iC7iX7PAAftXbXrv5roHGdP8sgp8Qd8QWi5HArwZRcYckuSdwwzB75SzGrUetKnyunG9LcBY5c",
  "key10": "3JFL8jDK4GGUEZFEJgZUiHcymzJNgSEdeY5AD3sY65PtbqcjGH5utnS5btbmHhcREek8FWPkJ54ELTVG8A45zeff",
  "key11": "5QufuoFTiBKKDFw6a34nvBBVRdbFp7PQaEWyWg5BYqNLCK2mdirEu2cmPBdW284Skf8C5RKjd7SoGuGVKBV3BtQy",
  "key12": "hMNG25XCvVZWDpu8iCqPHnfDnL6rQ6TAiRTMNMASRDaHA6PwsAw5uhNGeuHd4CioxtDy78tyb59WyoLdB9kMo46",
  "key13": "21AjeD1yr4dPuUU6xDEvN9QcL8HbLdmoYiWdJK5f613f76cbYzfBUaXg7WEopTFL5FaHaJs54SfLMGTJBHrcewkJ",
  "key14": "64NaTTbvnr7ekzWEFs8ikCTGdAnjeAYEeDQaLm28RFFjF3unvoakc1GzXKHWNuTv9cjd93bxWz3PQCNnMgiirc6z",
  "key15": "3RsHXcAJPEwoxgMBHnmMqNA8HtSXtgeq8YJsRG3AHQTBieKHEyE35MH7YxXF2qiog3kpqfTkP7ER5DZWFc7xQWEu",
  "key16": "4eLKSgjPrR8Up3iKfjjQzH1RRk5aSxd4vwRZzFsZhScAwFrGYdCB1b6CpfBgYgQZiAEWbqg1xW3vE23XEuYwST8o",
  "key17": "3nkgE3YhCfmq1G7598yLFadphcKifxyxZy5VJtAn3bdarg7E8JBiseP2edxRXLQRr2Y6E2U5rXqmWvLyAxRjgYvr",
  "key18": "4raMdZZdnChtoQyRmhV35B7haK4EwdH2HqXuS92muripGVno4No17HBcAtjZQt3RvsreGsNtB3jenoqHdDM9N8Jn",
  "key19": "4fhF8TBR3yknv9b8GgMQd2gubb27BbgU95miLRjCuztFd7N13NWSsajewjsytLva6KP5q57SeeeP4kMqWmZgkojF",
  "key20": "5VmF53ihTeeHAburiYnRTHx9gFfZfoYmPykf1QPU9N2gorhkXt4i88ddpzECeV8mKV57e1M3sEByCp2oUWJJvrsR",
  "key21": "2GoG3AL2m13uxAFUqnzjRyZ5tCytQbr9vk6NnTAtZ3tbfjzA1ABjQmDFhJs1YPuFKGYNSqPqsJPq6bxtntUsLN1m",
  "key22": "5C395yg9oPccfYysb6XMBmB6rkYLGYCjjMHZ82UJPGejJ3nmbwSBbJnSMrhw9f9QtZ29mAqdVSucvBPtuVqBdPCT",
  "key23": "4JZH4Lj16hP4KRGZ7TmaEC5rUmK4rpF8C9Pjdh1C6bx1HwLkfHZWkUr7bD6eyeoqETNBiLBSMyd7qx4DVgWhUCHC",
  "key24": "5SKKqpt6n7md4L8pdzLk1LpBeHyy5mex2p1KFox8hLNkUyDxvrkvXsxXeCgAMY8iU6wWWUDH58o69fqE2ih9Z4yA",
  "key25": "HzpGS3XmXnfdyAgWyEokv75PAhhkBPfbUKppcwzLryyvgR7gUbjPv97sBwRFBMBR2zXxwLc3VUCBovsCjzBsWb8",
  "key26": "5UhGJU1D1yhsjDsVuWWnnS47fohvjqTwJqdhYShZAsuHgjce4JbhqkWTcWTbDQ52TFG55nVh7oQgHwrvADoATe8P",
  "key27": "32W75zcHGLeZvKXCZqvbRiqkCgSjmag7VBurFvvrgee7iCagHqnm9DsiL7Lcm2WtFEohBjitU7NieThSe6mhpox9"
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
