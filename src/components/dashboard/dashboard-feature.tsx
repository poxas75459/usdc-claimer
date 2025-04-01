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
    "5zWJL927zhjm1ouoVrSMpgg3AFf6QCvFSxiXnFc9KzKzBZzyB3MEipc4DgucahGMQHejHxDEE4SU7zK4DduhT726"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oUmTEUZdDWtRXV7a8MxdVvT49AqDEEo6aEnUVLkFVPW8wTXscksY6ffY7CwWkdWuqCfDSDBBmRc4yg8FoSj5H5p",
  "key1": "QbEttxY1gbverDunM4eHycseXyyaybX1MdgkNWj7jTXqYgxYwF5Cm1uw9aCgQEVyu7K6PF9oT8h7ULNHpVkWAL2",
  "key2": "3q3NFYABUM7EM8GRmaU3Q2tbqHHmuwG9YbgeuVqg5ELQfL6tyWJEsmvy5aQNks5erH6FUofjvFRM7DmsGpfFTYxG",
  "key3": "3dAEo4tdtDutvw5EMqguC6zWB6zWFfqYDejGx2Av2LJNvNbSR626pa7LRrK6G5vg9x9V767htvt1QYDQc77oLxuM",
  "key4": "4Zz2JQ1HevBM8yaGkgGtfsH13RvCS4EXAstPoFtbMsvK8gZ7yekGKgg3rZtuCqH6dp798ncGtbLRz8qtbBzVjfnL",
  "key5": "4jwqUfz6hX2gtjVDG56FYbAXsdFJQQijrs5rM5MM8mQuRPeFNAM1PdaHHBGEfE2xDAjum1dTaKDzUiCfQqay4B7s",
  "key6": "J83VpisTNRmshYVCscgeaRfRfRK26uu4jiPn5thoHBbTY4H6kY8vJZ2vy2GrAszD4VSG9Cik4v2pTieozogKweo",
  "key7": "4dQf6BJMrXb1YR8N4vQqrB8vxib5srMjiVfGtGQRSWFKKjYucrrraCPKaGtEZgBAQ1WqSjgVfXngFSfW5osaemKA",
  "key8": "4LRGZKdPU1MqNSiYX9qNzmDVZkxL7p2MfH2mHWFK8rSBZc9w4kZs2aHLYwGRX9Xb6DqmyNdjC4vPfFkDe3axrUYd",
  "key9": "2K5VpCj14Mbr6ByqSjZ6TsH8NW2GjAoRpdqrdmeobTWFT9rGesRJro1N7WBFKTcaydgWxCWFyMAAdzEHHj2qxztw",
  "key10": "wnDUsB2PHqb78zdp2U6jyKGAqDCSdgS8GJ1k6UUCpN2vWMf2yragPA215o559h8BVUgVgdhqchvJiyXkLJgkdW5",
  "key11": "3R8h8MtNY5F5YfhgSwt7ZkSrnwPuAd9u3EeBuRmh1cijRpH8g5baX1W2299bzbwm6sC4bUj6pMNq8h46DLDZqAzs",
  "key12": "ezvz8w8tEVNDwziqYLB2BKQLnS9C7KWDMxz9poacAoDvUwF3KHhRMomD4wo2aZb2Wa9oEmaXXMnd1iUbeDTdoVY",
  "key13": "3febjmPxW8wuyA791EyLS7zUj1v73vKWxmsQVhMo6Z2tPYTbvZDbP4PDjcJVCkeTYPK9EVf2ZLiPgAWEQhbAw2jA",
  "key14": "2Www52VzT1pUhk63uHnMREnPVRsEJ63EqYMAgvv2dCfgB7WMtNeLPVCZFWsLebY5L4wVnSq9EtWXj1psnHgLesGd",
  "key15": "qWTPSeJLpnGpafiAkGrW8bbwUgW45tzNmgw8GiKHyMZMoeQFrLNcKZ5KGKz2rF31Trab2qY2k8XJr1Jk5Zjeej2",
  "key16": "3xKfs4xnDBZvY76SfD1fdddRbeEJu3rtLobmRxsrzYL3wem8976GxMEtsiXjmQsgEZyF5f98zoXFf2XTrBFJFpjD",
  "key17": "4MRP6dLkuCr1ytVx34aqcXR9UUc2LfzJqdGVxoq1E9KhC5onds9CGUsCcTVCopa6dk2zPquacKj6caMM7JJkfmra",
  "key18": "4L27K3FT5bx4pHAqGLpF1EDvgoKKAZn7wAK6HkQUTMMkPNrdy22cV7kM43j7uPAp5vuovZBpG28rHc6mTryiHjU3",
  "key19": "uTy6jnKFm5xyeV9wKxn5smBF9Hc37HYVp6EeXEicYqMTTRpANKQdqcT7QoxR6SM3Qb8CLxAkqEP6uVpHt8Qp8TX",
  "key20": "5MEd1dfQgCtd1jvhY5sPXdHqEdd7kzVMZCPMTkJUEbSqgebmQoAp3L1P9E2TLVqc4Nr4DWqCjzJL3fH1FQBph9Ud",
  "key21": "5HdaDYG6DfP2ujUQsuSpE92JSzP8bdbu3TFWZrzDZtmXL4g1eSS547noTnGdvhA5U5JSP8ja7A1r4FKmDDNCEAbF",
  "key22": "3GfHeDfJNdwQZk9S4xSpSbwttwsdr8YvEop1CgCznm8chYrju6q6Rs93TzpDFqVXjxuPqNybU1uAEALXXaVZ28cf",
  "key23": "5mpwiWGZMSJnfjQTVFJfqVifUfzqDbTEPrhKJmbcyRMzrrDoXw9Mou7CijD7XTnKa5UXSeAHpdXFyZjgj6xB3RYu",
  "key24": "55AWAnrgqkkKGW68iUirVjWCLm5xya5wTAkWaGQc6uudHh12V8QVepaAJ9A69dRU6UyG5ndawkZFJwNNc9jfF87L",
  "key25": "28c6JAUQQ1KaPrRPBS6gJaiocg1LKvxNLjKViaFLAEG7kgjKJWvndVXLMzBWBaXhqm2PgNutiygMPf8aa4fiWF3x",
  "key26": "3CFLBBpBeRYqMVTCLxhtKC5Y8EVTnUpXj9oQqSQKkb3KNBaNApRyViLtcPwGdAt8ADMaCKzAPn8EnoFaUGXSPaxJ",
  "key27": "2w1eiGWaa5PbGfzVtvXXNAp622aUzgNBz1dn3oiF8tcNoV5JV1MQ7qExqZzrKvJzXhqNCEC8sjQ2Q42Xn91G7UJm",
  "key28": "4dCoEYiavzV2DmHcBbFbNNoCLf6Caf9KuL3G7H5v7PCbmbfW2kQq4WnnZtteKBenrMYwDNyLG5dqDoRdnF87UMu3",
  "key29": "5g6GsYdk2NyEo89n7tcrzac8m4n15bgedjT8GNj6DX6LQYnHMrEQS9cixE896KPfjBL4sgSn7GkQxbfXS8r4qojZ",
  "key30": "MQw7r8AtTn9urnSWHqTqLiLg2r8c42LmrLjqGFvw5jrCSv3Xu36UUsbSc46RowRKvGkXGvjNvRztnVda8nkPoPK",
  "key31": "4URERVUWPsAemBESK8xp8gLiKcGBcM1Md6pptxGWk5wXvkFXbViWiGEDgurjueKv1knrYoeW5wX3GJQ7zQC4qTg4",
  "key32": "jGbyCxUD7pkfHRyJumZ26zHyQ6GrVdQdPyzkd71yMPZ2azgPGH3UH1g8quMr97J62DGZvTqLNgexnwwZCeHYTi2",
  "key33": "3BbfCEma6sNcDxonArTeG4PEsfQttAkzcbTeYVWyfNaWf9zGmjNMyTPAarCUv4rocLc76qXHmyEdTEk3UiozHHpo",
  "key34": "Ang9RKedTcMGfdaP6xaWSWyrSbwdBHofQVbbhrwcXEyohCKYJnWZeAsAuY86XbXZHTzKRHKmLjmi7TcNwBJzWjT"
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
