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
    "4YjGALiFz6iRvtBwUQw4gsEQZWv2xzm3mbGJxGp3SQK9z2wc1WraUQWMDwU5oC8knAt1JN61SghwfRvS1hooG2Y3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P5QrKkXdrvfsiucEa22zFXuGGjNXT7vnpTPnsdixEyucskMcPrBNby3HHaBYAMLtvn373MegggYXb2VghwCb5PB",
  "key1": "2iEXhH7RCUQPbk98jqRBzoByqV1goHBpqY5z6pTWpdatN5H5jG2hWUpsfxC4cnGpaFrubgMdkGGa59VEaVFvKjY7",
  "key2": "5veR5PwXoU1Ff2YR6P6isTYAoLfMvSrNmJZJiReB9L36TnVgqP8JVJ1ob9Taw3m6RezLH4i9HnxNkaoH3fAYUJKh",
  "key3": "4ntaFhiqeKNVf1Jpn4hFM4wEcYwdyHSrcv7YfvVkc8ydWa8ett4fvF47LaWPm1g9UNo5teX3MCY5tXCyEo8V9H29",
  "key4": "53hSR26QUSG2uVtgK3NdaDdMhmEeRn45YJ7xGagYYatzb5rXuuLPN54sL73JdHVRzcSr8T6DaNmYeGuWgxRKyfV7",
  "key5": "4L5kTxXnwCa3dAjR3ALwUW1jFcAfbt9GFLNfwCUJW42HSgwqS3jAzvfAH6UpdCWqCSfvVDVfjwgNJtdnWSLEaJjS",
  "key6": "4752uWSg2WFf24QhB9oX56nGqwQep2pznBNcsWmTDEg6zwt7cURXPdDCkZzKdyDmSeBQXyU6RYF1WuwtaHEefhzZ",
  "key7": "5RmGKmUpvGCszy87nveFGE96xnsTBPexnDSLRij9sCVL5ucsaFDEUmXzYsqTaC9Lro1k5mzKMFJbVBZgwEnC79id",
  "key8": "48m1iJnQC1CHWzC5mhb5pYahgYCoP12h8tMUeyqEZGszZdK73sMQDWVv689oGqpMZJM8nsGTEfjgs9djtdRpWvBL",
  "key9": "558WUbvgwGRyPGKpHQ7DqZEwxJD7Jr9fnHQYYn2ic6u3CzfE6gA3ZrZVmiHxuiyEGM5i2BJZttkoagYVZiCCPga1",
  "key10": "t56Xtd1JxUz5GEbWW3cx8dFsusDbrjwh2ceAc6QtZxjXqgTEwZ63HdBMoQ33Fqp3qzEJNxvgodZMSdpUEzWJfJF",
  "key11": "53wFa7NFykoZfhYmJwU7MkY5qR7VwAXtthrbS4dMogHZFXWcjdoxvVqrAwJArtmPw59Mdr3o6kSbpDaZfojostHB",
  "key12": "5UXniChmB7DTo2kfYahdheBG1koiP4P3VcDYLS42ww8ku181ffYVss3AQ2fS9AUD8vibT375RScva95vyxhQtMev",
  "key13": "3n6SCgAe2qDRxeSskZrxqAHsri3E51KnRcD1KbcGx7GinRYrADNChAfhQZoEN7juzyDzLaSXtTQaU377jJj6GtpY",
  "key14": "4wdpsqCYezAPvbyTDUPWdxSV88YBENL1a2hao5PtSVnK9ikS7ZcdNNcnxDw8Vc6oTRyFBad95s4fDGbxVsRpSmCc",
  "key15": "2Ujcm9vZm2kgrN5G3ZWgkm89WYiWpx9Wk7Vx6JuF2r5sN7CFkVacjo1ezh11DnLAftn5GD1GQK5SQdHSngnR9mFB",
  "key16": "3eR7kHC4pFegPSG3hCTEai46ogMLTj2kwm4ZzAU38ZKLU7KFwNsMLnm7U4mdYMi4Z7ggLe4Pshi9tPQ1SCNuCqDi",
  "key17": "4e1PtvNxQRwhGdC1opA1kv9Re7VCkhLRgkwY6Ao2296m52dpwi7e9i4DnNE6JUoA37bdmzYCUP7QReHP13eZXLoF",
  "key18": "3jxnYyMyjEHm4qZ1NJmdrfEmCCx12JRQxpa2niX9EmgGGX6DcPEiDb7P5mzFQ5ErWa3TaFPTHEjB2vvDyLVTcJZa",
  "key19": "3fdufbRTK9HaGh2cv8YwR1JHBE5z8EZsqRkJn2sLyckJnwmcRHQSfWcE8GN9xMbfz4KiQ2duGMhYY9jZ5GT1oVCA",
  "key20": "5wHDYgGeemULFnEKtex9swVGDaj4DTT1jgpYUeFz73F6XRiUaeT2zEEydJyFiAciqbBP6CSULh9KuH2L7dA9Wj7y",
  "key21": "3hy4RQ2HhjpWfXhXrt4UP9u6Ndqkb5M4KrRAzpNwpwJGUJomgvW5pAR1T1ao5kbhVoJh2V1EZQ1sfDWP72Eox43k",
  "key22": "4TdtzKm36j3TMa2zqSJjhEjeArQ6tbe3H755iDzNXot4CzMzrbf1iAkfrXBpqKrM9kcTNYmpu4DQFv18L2DXrav1",
  "key23": "2pBSpvwQJ5jdJu3Gipa5eMEDQyyPsTcEvggqJqDG7jkuDMi4ukkzXtzGBbqsdPbXdDzR16EXZerRKwtFZLhJdME4",
  "key24": "2Uawo6pEAK3PXkhSVpvA8X31whicsB9yxggsGe2svX39tSY9tNbyBcsro3RBsPpj4fvihCZov7dWA6Wgkow7wijb"
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
