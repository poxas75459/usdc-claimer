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
    "JYbCYrVCUHZhpPvR5HoQqJPCNUNAZWXPJLYTCMAwcAnLFLk8P83uq7CSCcZxZ1FQuFCy8qKPqa7wjasW451yDkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aA2ZJPrcwgUMTScSYz1HwMMk1w3kodNh7id2bUScR2xYuGXSGBAH41TTRrUTNzXcmz5sE67VteySk48wHC6rRAL",
  "key1": "5Fe85DzgvHxJmBGgjyH52XNZvKTnzwysg6MuoCE1tgzAz9xdRHwMfd1frSEJM29WkVgWtvL7A4Nk1AgoGSqCEneE",
  "key2": "3p7EtstSfqk9aUo7Cz6Tznc2cnJzUJFakLEio9SQr5FasDXNZbB2bqoTmADPibKCKwZGCJWmMffV6uiBnQfnQtgt",
  "key3": "67VjpoRTHo47Pm4UnUHbsjh4e3HLC8ZEZFyKefDuuab1YfsUqVtCihnSDEda9XqdCgpDZvnaM97f14MEgCGP3E2P",
  "key4": "21nCAxA72a16dcgxgyV7ixeow7iDxkfgZbR8mvnmxc69M7acD1y1RdXc6aVBztM39An9Q8hX2KBKQCDaNRPauWA7",
  "key5": "4WNzNLUkVypkHoRZ91EAgxvR9HYqJSEv2NPeQrcWv4yBcTmL9ugz91Tzvn59Q9ZVbJiUXE5oTCAipKqxfphTWrZZ",
  "key6": "2CELV6RUJ6s9C2TYncwMKN8NEKgz7P2pQujYPCKYygVussF57QXZgbSCiV4DMsM9aXrQGRueFVYV98kKFBGEPSiZ",
  "key7": "5PyJx5HmMzVCbVwLD5G7rBWNaR1b2LbEKmrLGpv44LP63bkPuneXAAei9Z1vMuQhzfjugcCmKrcTJ75e61eqHZf",
  "key8": "4mH8d6oTu8KfpWzfzBo5FXr4hbWxZ1VqQbKk6XVY56H9UbuHkNMCuTBBUPb4jpaJrg7ZbUnu4g35FGqKFN8hiuzH",
  "key9": "2b4Ap2saz6gwogkZia5wqruCHAtaaGfB6vuRfnnpnmE1fRvCGKCxfNaVYVecqRhpacthXMGjAnvqGNngsubjqU3U",
  "key10": "48NzfHXxnr61jEcKW6P1b7q4Wxxfco2y1Dcxg6QZJmKC5W6BQeHvorvKynY3gHbMTaEDDfPcJcq3sSnV78v5d2eQ",
  "key11": "4jhiHHS1ReUVeCiyfPsXG52rT5n6FerPDwMk6MMJ111y2w94r3jgYeccjCz3dsPg3JXqU3rGAwvnXeqw1Zmcte6h",
  "key12": "3wt89GLbrJyy7stWQqngvs286WcgmA1pFa14enfKmyaGikcPWhYznpkquy32A4JYp6LyjcPfA8bwqFXYDz1vXeCM",
  "key13": "A7YaaoG5uDG4RQdcV9kcUiJswBTvdrfYBMr8owLt7w5wTkYWyWEbxxQschqifn14P4nFkwzDjJf2tWAzfQ6yGkb",
  "key14": "2tD2ZM2jqxPJhboykyxgxeoB1paWvtLxyPN1JaP9fV3LPGQJFQxjvFtek6kqWupuzZwkVHVTKcRY1QykfMmiAMbH",
  "key15": "5u43qFihho48aimfp4xFe1NYV3EqBFchRKU9NcwnvoL3xzFFzfeUdYy1J7ZRWcowEaqHwfgUVgVnNfdMres7TpDJ",
  "key16": "2ZB5B5YZ6V8oKgNrExQVhyApePYbpNXprtjF27qvo8sHemdshM1yr6LZVrGGmPJkrFF4qsAHSG8rU6M1YwAEMtKd",
  "key17": "2td76nMvfk85roBadeQq5hHrWHAhyBjeGRHSDdWiSyGn6sKwb22Qvf9Eif91ohWvfiUTdaGGFqhBQuCgwRJP7cfH",
  "key18": "3NLph9SqR3tTwsfLyYtB8ksnCmipjo6mRH4zPGTM9pXbtBgRijDJRaFMAEUEvXbWBPYfDiJUagFDMuV3wR7Bj2n6",
  "key19": "2YHjPb5LBRpLpiHGPLARGWSQytRcdmxvfCnEjcPRir44c9gAsqXA1jG8jPned4QNjTPgr5NFnyKm5GMVLr9stVJj",
  "key20": "3TNMueCCBX6VxCoQE69Hvk9erD9Vsr612FbmNaSAJM2J9R8NxXuihLLbnBHnqVC1pi8do7jUxbR7i1ktS1NMbsVy",
  "key21": "o8EEvfiNy5yb7NNwjxZeyYrgX73nu56PxSrnH4j4z4fg6eQXL3oPWrFxt5UpqXS4vUFDgk2Bg24RULZygMsb7Cs",
  "key22": "2ZQb8jKZUJZr46nv2cPcXA9AViBNjaDPz6RGFuwX15bViycGrt4LujuMsBq3XkCgNuxmzjytdY8FjTP8eNCUYXxD",
  "key23": "2W8467Nz7PCtTDChEugjKn9rZA3haXGDXTqaSHMoKj7LvQb2VA7BBNBTCthwwer7KZPvoabi5UF4CrR58vMwuvNe",
  "key24": "4eqrGRWY6gr4EetAQq4GrSghksbNv55hX9MYJHZJoPoM86Yh93tS94ajGtKswMXXJo35yAt93joaJor2LKXGS6Eg",
  "key25": "MXvktiixxfZVnDY1ioQreByUMiRqeCVkYRnSxJNdVnkRK2qCmokQN8CxUUKQKo9WoYaobEjS4mJS71DTbXWX5ew",
  "key26": "2q6rTRV6Vx6pUUdFyere3CeekUDXiGoXWYVFxK8N3bdi8CiDEKqDiYQLrHiJ3xL77SP7YxZe91rHznLxwkbrQsLA",
  "key27": "56saG6xkYgp4E3grCRx2tW4QQ4Lv3mDes3xqJ1wRFToU2BV99VYJg9h6aeVW1c3ttjceQBmg15zNxbkirujwtoq5",
  "key28": "3j8rtJE6SKf6EyobENuShDKs5qcwRnRW1WCWgv6Ep9AbkCX3SpnZtaYLsDir6NFhL8qNoWxrHr5Qd2NeA68gzTwq"
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
