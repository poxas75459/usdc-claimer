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
    "5tXXibhzB8TzHi6ZVjCJP5N7XqAcep7RpG6nVvPtHE2ivDs8oCekPwdUAr5Z48SdYjHc8VhcexfC5yAiv6dPcd53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iPkDtsYTpCE5vtABsdmcUyZU3H2AJD4UZoGnNcqTnE12YqpYvbvE7Kb4VtiGxekqTabJEi4kZbQ7iqUdzVhocDB",
  "key1": "5n6BA5PihmxdBuC5ehfUySRNnotXCb9y8SnsVGJ9qRTiyUsxiZfz1F1TqesMiqp23uSAaTNSRb15KNWCcMDx2g9i",
  "key2": "3MDTuws1dVFgg65KA4YaG2AcyETBgxBxZpdhSvTRRwC1ThSWA3Eueh1i3RhQRq7L386rziQqQLoBPs5XC88TYbdc",
  "key3": "3xigEznq9Sdc8GRLgo3Hi2os7TxnuDEp1Z7U8o3kFNzE2yiBGXhke5dBrszaMoqcSmV47BpciDT4JpV2pDYqV4f3",
  "key4": "2Q5RCWdwHn4gnEr41LiC9sFyV5N8cDSGtbLAui9wREn89vChj1XzhbsgSatSSeA4YZXBUmJXyWWjrTNVXxdM87Fw",
  "key5": "qippVr6gewhYX5qU7SNR2y1DD28W5Gw3p38Bmxy2SZyhM3fZchpF3G6ZmXyVw9qvovCKiVi7B4whPh9Gw48WZ6S",
  "key6": "3dgpr4RbVqMAJoej9SropqYTZoTytvTTzu8srh8AGcD6cGFdRSWjjYZB71aBsCLvWaX3nUSg7ZEmyCjbtC2irHbs",
  "key7": "4KebTGoEBnMrKa11fybxQhzKAUCuCMETS6xxyJy3jsRbpGNEb7iHFhA94uXVLnJeegnXejMor2LxnZsMogz1sYnQ",
  "key8": "2LmcUqmyyAaXwABz5KcbTWiQdGCsDxdVBauojqsTPg27PkxmqCHfimK5Lxnowt1z7jZpBeXhGmyFbPCwmVdHVKz5",
  "key9": "2cKskAhAZYnhu5fyfDf32jeNo5ZtsdMi1hLb7aWqkLSrccXLY3roy1PzZ7sBeZjzHXGaQej8E8aZpBxvuBS5DXt7",
  "key10": "34KLq6XkswxsoDuvk9Dke2W8QDgzyB96yYqpULv8J6XQBHPaV4GhjX21ao7oZ7hk5B72DSFcUu8n4ecVngXdA9Si",
  "key11": "5HkxxmBnebQozWdiHCqshjbhBNYVpq1RgfTzBTkff2DCmjMX3G3hHkqVsW2HbrHU9BHjT9L3UMfbhbfAk81ZZpeN",
  "key12": "5CndkFW9ze9G9fkGst5hMMka8baTQs12CNNGs73d16bnxWp8biZ7PJL7UaCdffEGUbTHupWdMTYbSffHnSJ6wHSC",
  "key13": "4GV48vfkbdq3pb5fx4fkdEPkuwHRAymquEeyanqgWwGRyFwA5JWeFNKqkXccGyVjeXaosFMdmmqEY2HrdevcKnEo",
  "key14": "4NLTqok1YhVuhzgpJym4Tbtxe9DvJjgr9rzyrRwhcB6rszVwL4rFoEzuvrvrjo6ZB2W2ojjMh6RwsT6dyh6uaDY8",
  "key15": "4iqf2PKvAtWwEGGL1HP4w3rSjb2NoQimzi1VNuUPpDLXoU3H7AnZAaTsB5RDANZek3qZKdfq3xAfxa8osjU6scXa",
  "key16": "45LB5DXK2gtrHRCe6iWxoUNtEXamU7rsV4FVMSrC9NtiKYEWCqN9zuRgQpncSeWtfbM5DDwURUVjdBG3ugCtA9Dg",
  "key17": "678yyuba33pHWfQ54dWFGDQV9k43KK8g6V7sVP8bSPvRo5TcTHm3nd5WWSfftcAZ81NrzwSQgu8hEk4pAwy8iHMR",
  "key18": "vC9Zybf2B2nUmpTai4XVdyLbN3qvZzQpcH95cjx1RSkc17QdMVoHw1vckWTHAMXQQC5HiVUMpUZ679LhXkt1EFi",
  "key19": "3h5eKWkjpndSQTqwjh8sVdCdpnLU8XBtXoXSJvRugjphiydiAwMKKcit45h9hvFYu38ei6YrdSWeLm2pxQeUBHzt",
  "key20": "2dTQ7bXntrtGtwAcCMoJMuBE6vDz1o5AH6ycTW7YyuBAtvKKvnp1efH29ojndFaXjL8fkLLUoXURfDGYmUsaRYSi",
  "key21": "3bfGwY6Knr4HzkDjhzvbqrh65YgdzvznftySLhim9dteMHrAZAWbzhNiYtmYYY2CkduB9enRHpTBgSKvDMnpbnJg",
  "key22": "KP9ykqX31rAxEbV5bhJQSR8hMv68bGg6SdFaqPZvuPgMZecQPJbCQY7rAdzTJexUgncRcuiq5RHsPe4nhDtUff1",
  "key23": "3XTytRoyM7h6n9eH1tE6UKZ9XqKZdn8PMPuypuZbb1tJRhLcj5EkPiSAgUmA8D7KZheSMXZPeDgDCmcUm4q1y9SY",
  "key24": "4ZYvgmht1YJkiJmJk7HBmfk97xkYwVTJp3UxWhXcg6VFJT2cgLU3CMzvNnUyAkXsrGX5xQBVw5aGDC7iagF5zg5u",
  "key25": "4DFkZYgQTrbcJLzngCdqhnCC2WfJaRLscErycF73XG97HksBnxp4xan8yfbftAXPcp957VN1Vn8Y7siJ7DW9E3FN",
  "key26": "5HUnkZDU5ykisx5xzJ9DmU1WaRNZ4wyzVvdsrQcGwE1t7b9jdCLqvwybgfprFpPRhGXzXZw2eJgQrtZGh4eQ3w2h"
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
