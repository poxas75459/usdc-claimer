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
    "4TLdMFnKQPkMHCXaovVAER2bJkyTYqtY1G7iGSYda8H3pcE12KzRuBZecPKyMM1R9ZJkXid7PoMtFbWHRtNNBYCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Guqgx4FCUqhdU7xNKCs73twgwnPvof3hykQEvhEZ2cNKLkDpjVAvQES7vi5knmwHeGW3c2oPy8xCTGPC7SefNpn",
  "key1": "4dcSR4YQNTXysnYhr82X7gFcrRS98Tsx2SwnuzLPcSDrdihz2EKgyocrLhHd5imuxqPr6omWtf7vpW3wkibTT9Pa",
  "key2": "pm8kbNNMuZPcgE9ohot441n358e3UYuqaQGCLhDdQ2U6B3DJKRujxk5cgADsnG7atZjHSGFizDjwXVtCiUnjCRN",
  "key3": "4avEA7WZdu1gBbyUxeMYcjmKZ9H71d1MTariF1wXSYdZVngEnr5Bd8Xsp5v7ChSSxfHXhAJdHFQZjq85YkcuHezB",
  "key4": "3KJpd1fy2T37dNQFokyv38bSu4bhTUZe3bkYWAnBiEMr1S3RUtE8tJFhVBaUzUMJRfikX9FFP6cKew4tyzET7C9D",
  "key5": "3tji71tLGwYSBepMBRqxLUbo7yCLVQey82L9oDmkWbJq1xm1v62Mx98nBziKnr8kR4FFnggfLvbUVHFBwLqc733n",
  "key6": "EiWoXAgYqZ2o1Wi4KGiR1pr9ULbB6HPai2wWhmvpMKNqnc4SGYGrnJstu8aj86pCrfQTNxLXJdMMEnXF6Zr3YdM",
  "key7": "2EKRVXknwUooJrvcE8AhgZ5hdPSj2Wq2XDDBnjsZgPhFg7TAFm48wAicF44SwFmda7CWmtxXf9Ew3b5wXgD8ZECq",
  "key8": "48e9dR2QQp6ugjprHyHeK9b8f5BQuvDBboHNKnZMYLu13Z2UW2CvPvpRM3Cr5U1WZbeKqbYTMSxKuXVQNUYN9Q5w",
  "key9": "2YX4ru9pEeN7b9fn23Wo1B7bvGsPxvYKzLWyprUhmf7f9GmmEfdcnAZKymqw2EcD112zdZWdonWsoja6Pk9zCacF",
  "key10": "4EohQTCoJzXaoE78BCtxseJttLF4zFr1toEpkCPycvu7YUz9jpYGsPoJb36FHEn7TmcSYq8KKUKoPmgU5tQ6Go49",
  "key11": "5kbGQaxPZZPnaqW2JJuLesh6bn49z8bqJMVi3ZuPyBvXuLP6hKFwzmAoNf8oavGVvRrdKPQRPGe6DP14rutAypss",
  "key12": "2P2VuMcATq4GHkGHPKWrzFKeWtNrnExwe9hcHHoA7hCVvQwEBVrJSg1fj9xgS3W8QAg2eWwuKysvHuEimpzoFiYC",
  "key13": "3bJMgFRyMPqGZYtisUAVBymBABP6uvAAxa7dmvJSegwneqiWmXMX6hu5iZZk9K1doF5oWwNdjYCpTvgjv152TzDK",
  "key14": "5c1EMcagAyEbgHiBXVAzEk7kCbGJp85h598MmBG6P9BcXguBpeJ8w8GqbZEuQECSqruFz9kax7tN5eeNW25SWZ66",
  "key15": "4VTHqMpLiGktyUQ1nQgGBbiLnf96xQSYTB8YqVgVHB9rnLXagk4yvMmgK8HoxuWBTMiQKBJxT4uY9zEaooBtCBSr",
  "key16": "5Zd1yzcXg6i84UNYmjZ7rFmD9rrxyESajEeszRvkd3VtixVwiAHPSyrXbrP5Xfw7NN57Uc6nhzGYrveAdPdi1unx",
  "key17": "2j54shHw8eJnSSJfk1sZs6Dk6U4JxJMQsvw3fPRYzNWJGUhfCdERee8EAH1n8BAxSrX6UpaihCKBYdBGsrMPXDHc",
  "key18": "43kjB1c68zydSLykKi459syHste5xDRjwAdyD2hJJzfMXbCNv2Ur7Y6DATcPYYsfESPTA9GsDRdUDfDdjBNA69aE",
  "key19": "4XJ7NVj54iZmmHmfoqk4LAwDcf4rT9m6MdWAV45o5ZdooNdkzmRj5o2c4dBwMDBGx2TPE1zUg7kHkfZbjHiSQx1K",
  "key20": "4cDmv9uhFEBS9pZaed5m5dTsCx975MgGZVCRHCzw1W6Jm5eQtwbbCWVPdsmnQLT37Rvh4bXt83FSmfPBYZHuVVjA",
  "key21": "4sXD9boSnt3DkPn2ajuqNmjiMUqPhKaYzCb9wv83DRsknoCB392R4MsScGNkNj9oTFiQHTZdRY6TqELYUuR5ss5P",
  "key22": "4DmbZNvck33we242K4uD6Cnb8hvC83Lrb7SJnMFSq9TMNAVtygqBHtLtuUFehbJnhqEVb25SbjyFdr733ns1ghfJ",
  "key23": "2QYpd5NmGX7PGgY5wTGkcUtxkhf3NywbgA3o6cjE6adMK7ECUnuUPJmh2CKc4KWVvE5f9V1Q2yXPjthPiFbBDJSw",
  "key24": "2Zf3K9EqHnDTzmg8nU57VUUcUAtSUja6y7Qy46pLcTFyX3gZNTmyVg5kFQGcbxndjYXqyBaBFiTsLkTcVpHvRT9B",
  "key25": "2qCZXEEbWGhjfoNEzbDDMbsJFpR5L7zpe2ZxeJnFfM9BuByB5tPdyEyuP6ByubLuspAEWpfcyi1GndFuGBzsbLR",
  "key26": "2ReHrf1HzKx8Jbyr3SyrNCwMebNwKDMENXS6skfqaLHeTQFpgAX2JxchWLTGh1Rop2Gakt76Tby679GnpMt8wVbH",
  "key27": "3Xw4WCGraAocDZuhXMs1tGuSL2aGxPBGm3BvLSWLrn11sc3VfBePYgTZzS6tzD5NUUrhnXezQCrvGuQZZqQsB5ux"
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
