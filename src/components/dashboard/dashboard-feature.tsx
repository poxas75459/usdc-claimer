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
    "3W9PdGHxRGAsBqoemWmRJYkp3HxA5BUpPjfnsgxVRHpGxNoL56SWeZPd5UpcnaykXgiTQCt2u4jQ6syYqQ6bNvSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NuQpMENDtd7TFktLiRXF2gK182jXgdoHi6wbtCaycAGLgWbpZzcYnErEJ1c58bnVYytvsUYCJ7PJMadLahxQcs7",
  "key1": "2DhuaTi7jen5mbxPBmaXBsCeApRJkuJndJwBp2Kx2akLf1heBsazCqeyEhDEUhP5cstCPLcAocJ8vgnpXrPHGMn9",
  "key2": "45k26hUgJ6pxS7V686MGuPKG4zEq2GLhsK3fHvC1kWP5N2BNTmqNJ9Ppd8WNv5EsZknEYvs4Hn6yGiRVzXZSD6c",
  "key3": "4qgMiLaV8XKfRMbuQGzshkDwz4c7SZ8BcjY3AVbF2tsPPLv3rsc6MfniEsZdpujxZvxXFis6yWPH8ikXz1SFSDuL",
  "key4": "32WXUPsVVfFg6jLHYWFpt8B8nSMfMWgFELDnK3axtMoErxrFZPBoa2SEYe1NPfpgs2zrQ7QTrG75dguv2CvycKVb",
  "key5": "Rd4BXJFTo1eH6JrEyW6pchXmkvHNeakzoH1MbN6gWAGRvREcpr3FPxACt8eJtPBvUuhXCGARaxuisTtWyS7Rx8R",
  "key6": "7Fau6TEWitZvmwMF8DMTUMs2S7m7ofzZa1Ni1Bx4FSJNqAULC65EZEuamANpTVyNBPcUkDKmHNWXNbfn54BG4Uw",
  "key7": "2nir7FJSid8ozcXAcdQ5nhsySgf8BkwVbceQ1BDFW1oQMAfcNEL1kVWhPjNQ2dwPAEir3ks3MXnrMoPVqfpjbsrT",
  "key8": "4qY3oUtaZ22o9H2wM7F4c8bGsKnQBubgyQqDfnGHQHLLnCLRbY1KEYGUzahN7C72eW3Ha2rZQP2w9XzdRntuRfVa",
  "key9": "4GPtzZGL5RKY4mtXgdV8xTwVvHoqMsFyaezXMC4NCaRFeK8RYoziKrTNppw1gUE2B7Pd7NXRPmk8MxwyMFb1hgvY",
  "key10": "2a2EGJnXiaCkqzcyoz3WTdLNZahEpvtBoyGK4LCTm8CjLhonXsJCaf7xkHyzDucy1v5CDDsYSNzL9g7Jbkk2CyBY",
  "key11": "2T6kafiqYwsse6bcUpqVHTn9McPrveg8XF474WG1Xa3VCQyK9PCVbZdosGtbC3s66XERQMUFcZAUsYH37eY4UBrT",
  "key12": "3W5ETggfZBxzQNFQ4irftv8geSkPRrsMS5T6zQJ3KgGg49DbBbKpocabrSDuG34a13E1BLcaHhxGY6qf1SKRWaPG",
  "key13": "52ffYbB3AeGZWd8WEix4Z3fYEU8Je8Q8a236CLAwm8xZ4bBcKPcYdubaMwCPgic21Y4hukYRYVikyvDRr5EX3BkR",
  "key14": "27iHrujPGGLKNfjrNTGJy5mjXWTQc48B38meyTipwqjc4TtyjiXneEeU5X9wKb3NpJJR31Wge78CDqPAYrrAbmnm",
  "key15": "5fzzURNzQsL9LGm1DaJWbAd3uYK1PFczg9k5TpgQuNEWjd4z3iRrpcfJkExXsbZ7MrCMBrAKCrmxsfBLG7U4eiBc",
  "key16": "5w14jGaW1qBRJnAWB1BDWajEF1NCvm62RE9q8LE1RqsEayvq1MuHrmDLsFrpNdeJJpW4DNnpRrGuFxsp1m4Wvcjg",
  "key17": "hQwiH2qmjrF12RyoVVWd3Tex9pYZMJfqtivNTTWiHFR6XfNY27ViQxezSxn31THaNW9ZkKEAM5SMMCkpzh3sjuk",
  "key18": "2CKL4RfmoMaUQ51RTt44SKKSxmAngnquSATdYpSMXoKqVSztFzZkdzUTJghTLzFxVyBCg6uyQrXYpwsDpGZ49kxu",
  "key19": "4vhgQq3CCvvLb1Fco2CDcrBawEg6rSwUMGAXZdB6X6WKQYiWMS6BaN3oqJ7uWUsZHkdiZM4mRS71tYp4rQ6g7Emn",
  "key20": "3pgHjwjAzRjMKotb9x6HT4NNe1KYUBJZ92YnXQYzFud5GRERLLkpKVdpihJ2kRePJZhAAemw75M3qksMi9dPH1fy",
  "key21": "5vDN649rx1uvrgtDFYuBRgbDFMeSk6j1T8aA78Wkp6EouzoyuK9fLnHHbc23VFJLrWJzWLbAELACxYQZ4DcL9aWb",
  "key22": "3FhSo3oJJNRtKjQrcNwgXKLJGJLoYXXoSsTUAX8APCZdcvzrj2EG1XWX7H9Q8RfiuEQoZHGUXbUiEez2inaAtmbo",
  "key23": "5RGUoNhzG4MVh3chbjwam1PwQ9rfCNp9CGm3at8jKch1keXsPxDQh6GVhusTWSysZQkke9fqA7qAiAY2MHtZvr6L",
  "key24": "5q79XJ6Dbq7wkB2LduXRmfoX18ziCQg89LCSu7AQRXzh9zpAKQCxiEZihJK38DTRWSg4rchjQZ4wToZboqxLXUkh",
  "key25": "2d4ikMp1B9Z5JUsPJM728DNS2G1AjnUV32iYeqvitE9mSMwPpLSPcCBu8pm2sbrWhmxULA8KDY8SUX62txCKtnFB"
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
