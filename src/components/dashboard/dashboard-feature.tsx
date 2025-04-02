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
    "52XhJ5WzdrCGJbHgmmenJ35G5QnuxjjWsyX3RJVhbXxUr2sGNYYLpTbmAVarCNyYZ43gPwdKScVbA3Yzso5R7AVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FvgZWAGeFPH2BfLRKgxtkNaM37Q7DYB8zo8WPjykNeoLML2o9sNHedrrvd4m59LEa8af93tGdbj8h1S8VGDpPKE",
  "key1": "8TgkjgJuiZJibbbocGf9Tx5Uokk4R1S4VvBo5xThn8WxkpTXc89LCNwLZu4SXjcAXtBJx5DejkECVMH66jAGb5J",
  "key2": "21CmPNuT7YzxCmyF6jUTsNsebe2SjPMtYZPMvHnL444gcocYCfCeyjTAjXMcmihv3eyets56Yn7g2tYMd2qAQVzU",
  "key3": "24oCfv9SFphTuLCvaeJ2DNdKbRkLnt6CavyQYdBDzvwfBP47fhoGzBR8vzsCoUBdwmEoEYH4eQaLnNmKnXDJecH1",
  "key4": "vBaZPDro83QfVfAXGW6SWngZnohRHc6GrxVegZeYUfypZHCKCEwRxQhexsPNjTWLESBji6YokNA8ydB37xhGzfH",
  "key5": "4dMsyKhs7BkQgEjN9gAHtV5y2RXnpoCU1qAQU4G86aS3898zvnfcT2krwmsHPPFfoS4FuC8FituQckn1DzjZC81n",
  "key6": "3EZtZT9G29S3VxYyoNhzPDyQGGFDNbcjowPhvQ3vhUVd9Rc1G7tLBrfUDDdi5WV1pYUXiJ5Zjq4xnda4upKNWEvo",
  "key7": "2pbahmLSTsu5gYkF4txnCxR2rbG2UMYwBsqfMEr2QjaGeoy4HS6JoEupLAeoP4CX2B487zvDXu3tj2G4uGwHAYmA",
  "key8": "5f1s4bmUvAu5qZRVjkUFWS2SdWsMwe1hB6UmfcDXPWSXhybQYqNo67eX927WWqeZ5os5GF5LWUsUH31YiRpwXYiS",
  "key9": "2stQEQxqWrkbufxvUQvC3u5PMbT6Rrc9eMopo9N1Cx7ckGUm3AqgxxsZGBF1Xewm8Z7psTcGBBiuEVFw3fH6UyrA",
  "key10": "2xF7BM9hT2uBaAFwpcK6zprpP8gW4ZdJcAjtqeaJjWKqTGZH3CU82xAC2fH4oRoQwStqGdumW1EoTtmgGFicmJgA",
  "key11": "3aq6XZx9VCUBuNjtK94MQWf29JWCgsNaAMkjAJP6D84ESsTVXFhTSVAAZVFbimTahx7tJ4DHsTP9szybmTv2FzXv",
  "key12": "2G4HDqNnNCXUEZyZYELehs7MWo4XN8HgFz1NjYSVbaHxKoyLKk1eNtLpZgy3aYe4SjkLgm9oA8Tiqy4YwAU5MPhg",
  "key13": "7DqJYnhA2JcsHQjZccYVMiKCjc6wXmQMsSUBLi5xhTDWpVnHZqn4GMFh8QcQrrhVCWLfaSnLg4T5JyfFSWp4Hkf",
  "key14": "sdBhWSCwkfF8tti8jwT8qRAEg6mAHmfcs8cuftC4AvoAjHAhn9ibxrMkE9KihE3bVkNcbVJaoLcsdmb7aeB6hDf",
  "key15": "2FaoHxwr5tGBd3C1vHBThf4eYP3UaNADDd6zozStBZrhqZ3HdzEkCzViZBNS9ptpbBNxj5dFB9N6qQKzbJcVzH9x",
  "key16": "4mkgk8KwgpTLvuzg1GmfEMe9c6tCxFUCgdQaLi4zjXE37tqFTVr1ZmmAtzFL2n82cDhp2kCKraTktvQHFhnWz6if",
  "key17": "4ty3pJKuELYpvYzMzB35HnN7prszoVfTr8qL4ZWXYUgmZM7zNcoYSdiYZ7SoGAhtTnjGfcp3XBTda2LqnF6KhaM4",
  "key18": "3cUL5q2MBy3qPQtbxxFLR58W1YToQ3LG2p4Wa7uLMMru56xVFuSMsssFUfXXDK6Qwp3UpZHMrmbtb5epnK8LwBzq",
  "key19": "4q25wYFB4XJBExeC3tqXTPESfvfu5hXhWn1Gb5SKqqny162ugQdfWmNg1jtc6EqDjvDdyi5A7yfca9uSd4R1EEcU",
  "key20": "4qRsWHfmDfdXeh8ypZ4svtWawc2r7zEucbFvvrGFD6WKyZCvkZowVLYqDqeX6TbshN4WnR1xQrk9Rwi1gErJXfgS",
  "key21": "5bpd81Rozy3nMonZG9KDWvACrsYM2dWjrhcPNQwM3fWVbSZTwStuHV8C22mSSr7a6akL5oCMtZyrC14RKsdbwzEa",
  "key22": "4KZPf5kaXSwgzUJvbg5TnvyAPQekUMDrfVDuebJSc6irTRMXszjo7q9Z3RBX8RgLu8qamY3ovYezFKSoaxnNgfoa",
  "key23": "3K5ZQRLyZxRAJ7CuZah3tTqeT2kqUVVzcZtVrF2JZG1txDp7XypUunbzHZzJ79MoSh9DGvdyiN5qcuSsbowcqBau",
  "key24": "5YYGR1ZfYbRFGyDcb7segZBqBbzZc4D6GaSqY9HXWbXQbd6jevYXN3Tgb8MT4P3J2xBqjm6PCXF9K9pTDnHH1cz9"
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
