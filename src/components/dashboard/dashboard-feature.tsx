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
    "583KLTR6MygcqhXDxTcke8DBUEkouc46KoYvNeJrRVXSBcxcdiqomkQN7B82omdbZFUH3reLzT2MjT56pvhNLuh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qjtV1aV6BpoVV6o9aqzmFYtEu4yLCG3senPgXrfEh71b4iaqT9QwMtJm6hDgNJATVPtKpqwmg8AXy6dA8ufFenh",
  "key1": "2uA5Pz8YEegpD2qCth5kytgTn5sMZdzkb6M94Fd8XSJKaUtVfZHfYvyoPGeisg3EoM6xBx5UR7KDeiZSuQHSV4gz",
  "key2": "3zPSg9ekHLjSuYHn8ya3WxyM2rDSxovbcu1VDtURvXM9tNKcH41LUxQrvP2kUZUWKP884oPRbBkuayYD3UGkVrfk",
  "key3": "4AaoLU36drEuMRvXtZNPygFCdD4fa2Xnp7zEhtcBSiSyva6B1kAAVChBfmsjeP8rfdMBJgg3dcmR6pKC5WEw4oUp",
  "key4": "5k8oPTdaG25PTgm1vX8bqwb6qqupB7iRgmTzQ1VKYtJH1zVQDD2jpbU1G9Q6QKXi7bvEKnJU38HbH2fMM4tovtkz",
  "key5": "4f8mJJn581mVaFBnTC8vUfnAZgXTHdMwHZ9taq3eQBNhf6fABXE1GbuYBBkfzRTArRWBpwCSUDtvz8c36zAA71j",
  "key6": "5qViAgV6ZRJDSskKStMCSefsaQEqWNuEaf72Dst1GNK9fTCnpBG5Pf9kiT2GCvDA4Lj3kuLr5AdaWmmsjGfVvT9t",
  "key7": "2hGeitaWFgVNm6EcqeptWNTfMwuPXynNi3YxYtc5wPdBMjiJmTzeyjBLEyfjPEei28Nz32LpFSMbHZYtuqikyFyr",
  "key8": "4b2y9N1WYCzk2UW9vuvxHJoy2wX1anTCFB8evS23KCzACfq6u9fubXkpVXdsDVL19aSqeAB8k6UbDv186jB5vQgL",
  "key9": "2ZFWMC7bKhtRYTfaR1gL6JUdXtPmT4qrzdqqyv3oauv2eMxeXzM2EfJQx4U7ZBfWsTqLskw3E3jsKdMdDnBwSz1v",
  "key10": "5Le2q5BheMJd9vjQP2WB9EofEcmjk4CK5XCfMWBPczatGSG5SftStxB565Wdoknz8fcwtgcJ7LZEAKhk9qriqsNN",
  "key11": "1JNkFzxgcWxpB29pR7SmYZcKvQcotp1EFC4cVsTQLDVLDnz7wpHv9V4NMJKcCdwUVugUdWwTiWStpr3nVgenDqF",
  "key12": "4pET9XRkx8ukwYMFHknZ22GKc2hMRStXbHTSgVj3NispgHn5RmJAkrMV5iDEyRNGzvBjEc6ZaQbwPa4sNXCYwbUK",
  "key13": "WnY53jcYZhXAn8GShFvTN6Y3NSn8BihVCnrpGnyyfHcmRSkBHHFTqqR7XmGDzvFdCjHrw42hF3xu3KVELw7kJzq",
  "key14": "31tNGC8Cup2tuqYoi9m4ZUYiGSMnPNv2PxqD5bkJB5wU6ziqhEENc43EwejfSbWTd8dw3sHMCC6NqB1N5Det2Cw4",
  "key15": "29LFryz7CWEj8u72Wrq3SWKsgEhdxX4HzXFLP5z3x1VsNehg5kUMbuhttQo4eUPHE5Dfp9avE9jjqm7KcQzc7PMJ",
  "key16": "2Z6rSV9GPQZTRA5uy5ogyJDcXzpataauiYbFk4kREfnQwunfDzt6xhHNpWdgwmfNNwKAfdWbyN7F1TKj8Dkx9Mo3",
  "key17": "4WBLMNKcMRKik5hav5GB4HeoC9DQ9GR6hGAb8S2JKeXWPFjVFsS1gTsePhq9sKd5LVVq5QarkwnEAuAcVvbpAmNH",
  "key18": "22EJkoVC7E8ZHvsNbX4QPPBJEEY8KgzjQWLTvxFDmMfcs4yrd8GdekUPztRb84LjyUjozEBLqw9GuLpbCvVr877B",
  "key19": "37snEwWXv7KLDJ1z8u8rtKk3i2fLn3nwEHuWJydTUmWgcJegJSsQ5Jp9P4fsKPFtH6n3fZTHte9QX56s5svytwqW",
  "key20": "2MwcACCw8Cv8C1Z7pwxzLnsA2H4dzXJ4k18kkujyZsmxLdht5xW7YqHReVYS8zXYrg6fDQVSGF7XV8ZpZzPsF1jK",
  "key21": "XJwFzwt9GdrKXby9KPWj5H3iztpFPoPa1UNgfyZinz4s3vfSbS55DXfDh9Q75htHac7KT7sjzxXtvy2TGwxS6uC",
  "key22": "5aY1EJCQ6SfCTkb23Ab8kMfExQVvcjyDdNaJXzVDqzERVeLQwc83gA41xT1NaeSs9Aoz5aXzkLxWiWNMWGk62458",
  "key23": "2m2LP7bNPN2eB1XNXoDjhgnwRnPXcExT5yg1cR3ubGQK425agbH6GDTFcdL1WJeZWMQFwo8ybHeVMJhD7jyVWy2j",
  "key24": "5eN5mLFjMQEu6QfFzxd5vdTv3x56w2jK2wTermdmv1Asd2VAuY6ynXidkWqEZYsEexcoaoQUw5ANcoXKSQjEZo4a",
  "key25": "RwfPGggZv8VxBVEfS336TNKcmXbbJVozcyTU9GMDvCa4L3xsjaSE9ezp3S3Hy7pePcGGbPFnNzCB7tUqFb8BGuD",
  "key26": "3MSScoydfHwfrhYCry6XaFy44zbcg1CTPQS8VXJzhqR9ZcopNDirwYkap4S59zFzofrxFyDwcMk2StnBFVk9QoPb",
  "key27": "3bSD7LHkQ4Vj6G78XWYa6N5puuUN8y6YcYHL1QEnibVfdCMV836KvUjj89LMc2QmRQ4To1ct8812sYRhtQENDxZk",
  "key28": "3QQP8asNNAF1DVSg23RWvVgcdZFMco49qXJP1cVTioY4N2fnD5KUkSH6iZd5EU35T24QpYx9joLzxRuCMdJiTRAN",
  "key29": "51r6nUuCzCQ8GCBV99Nzavi4qUw4uLcagd1N1CRmbA7u3MAfWomPZ2BsY73ZyhJEoqD4GfFpmH9A62E7XDwXj8mp",
  "key30": "43KeBRiv3JDWkbAGpnYCZpKtWhSzKABHVZZJVCLEnyVTW4TpYk7iW4byDEqREAQVVfGrHXSMS3pJnBFQn4DYf38E",
  "key31": "2prr7RHhWkAM8ebsDxXU6EfoeNgcnqNBro4s3a9gs6PA8tJY38xufwbaV3v4tePHmNcY8faFh2vkhBFtYFcfuNZU",
  "key32": "3uJQ318GJFGt98t1ay6tqqudW8ZmaNyvdoHW4bqYJYDFzMEKue4NcmZPokVcH2DtADYStn4n1PAGdzfSxYAikVNh",
  "key33": "4V6k9jBD4HwNyk9ieyqhFetmPnyJUCYJGkS5S8PTT3JCGEsVXcoBM8cmfnJRGCta2GwBH69239abLgmxwa5FbDuf"
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
