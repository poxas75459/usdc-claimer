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
    "4U6iQmNMXf9VB2rMQSWUHFDMEpfvYz2xFFu7oxS1aU2XL7dGxE4vCoq927YB4FDbruudU3nRD9mxpnhJR7FH39rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KKZkqYTgViVQuUeaEdHnguG9KxBy1XcrRJRVp4m7BhWqY2WoWaSZmFrkGLKNgs6wP6aLAULG9RFiLegxqXjFJnb",
  "key1": "3zrzV8sgirJjMsPy9QsnkmmaNF5cdba9M5xBDHftPQCkyW7183AMgzKL6tUho4FBynodLHqNJvtJBDrCypEsChzz",
  "key2": "5B6e87yN3gf2iYanV8WySGR9vvEnFobo75g8bMyomWzpGgghPMrSvpD5hzKiST4DmUF6zo5tqDVd8tkeWgQDrsgx",
  "key3": "3EAmpaEn3GCTQ2pR2GzARg55gNjQh3E4FWJGXF2Z2H4j68ku924qZBXb99YcG5taEEJJrd2nAu3wMDLHJPHXFHEv",
  "key4": "227JSKojbD5mL9m495XWXkAany8mRbHrfFVsuUzFF7gNj6ntZAoTd4qVAZSwHVthwU2CTG4jbuCraXktZc2dywjs",
  "key5": "3UCBTtvScmnJZf2rTWVCr511YB7rzSw3zb2EVz9VCgKUy31zDeYZwoaxnmnYYJtMF6v1HTz9MTjqQsxv6U81QDNq",
  "key6": "5vCUDucs5mBZm36czuB9XFV2TsXEfbt1bZbuqtFtBPxj61j3mXJPh3uWYyV4EGrX5Ttv7ia9tKAKrk3cyyZgtpcF",
  "key7": "5j4t7Ue4bwvB5fwiri5NCZaxVQ5peTHDEuh1Ev4TxsHkdHSYXYv8E6DSAbs6piCtW7vzni7LuTxegFiHAxCJ3vYr",
  "key8": "4G5npdRA4HM3NbrwFYMUq2ZGEp57724poFbhhDz3aqViMhxyGFZ3LJkDmZGKHDGYia8grmEqNQGajhNN42i1FoYK",
  "key9": "Ai8cMHViy5B9SfJpNSAGEB7ud9rcRvUfcvbAxjaabwfSrD3c6dDywdRBLjzPL9YYG6TJvfibxSQBtuFNQDBZ7w6",
  "key10": "5BBkkHdpMJPV8MtaG3T37KcZCLCA5LtpXKs75zNjEv1hze5jZNSFdi3TwX9PAvNLhTiZ8rFaByeR9b9jw9W2BT5H",
  "key11": "2ZGH3bZSnnq7nAgBFZzmuk9dDufuWsCkunCckgrgz8R8W1ihAJyiTDAr9UsHeVnnKtbK2HNPfDy6P2ZafFyugz5c",
  "key12": "5mAVqfXzLgyBS2irjPgiWfqoaWWHSm3xCtYptbjuADXuGB5YnrRyNisM9pKv9GoSgRN1ggCQNYZSTe29P5wjWZqV",
  "key13": "4TCgmuKiELeEP2qhpogj5mTF2CfCVPFEFKaX5hxMCrfDWyXcVCEKpVtkxM1z5GXWzBgd7pyF8tZUsRJ87w7srFsc",
  "key14": "53tFRaMTu4KMqqytsipL76BTbUYXi3mUABNJafTMGmJ9nEW2MctKqxY9fsbSAkW7rx3mS4mPMeH3C9S6Vk76qZto",
  "key15": "4XaME6dRscrR1JmurVs8uN9BygGaTkZc7KcHkQsGNwSHvJpAqUNFoAwuU1KCaBsw16ccN5thMB3BxnPKjyH2yv6Q",
  "key16": "5BM8xPs1L1e2nJiUNCQSvYXCDqPBqMwj3vs53MzZ8EHAHYcNoBMkr1y5x3v1G1S4wb9Tu7ZDTqHFtSQV3fy4hXT7",
  "key17": "wEGKYK55BbonJxyyuhyohK45LKphiumr5LufctNYhxAyMvxSPRkwpXSTpnsUtu7kf2FXYHmi9CtgT7TGBcib7YJ",
  "key18": "g3iR9VUojrq1TESJmMiPoqx6NNfWRGCUr7veLDJqRy1ZPqYBM2ucp3nMZP6KrciqWCZ18jpzorkLoXTtKy8WZLy",
  "key19": "3UndadQkunc9KEziEdxS4GsVrPzYuj38RYCSHpdUP9tgSiKhBBuo2A795jDHmsmVJhxMxiKoqZQXwEd7wTkMxbz3",
  "key20": "MbdtYTrHmPZw2GQo95qcYqpqJeyCwgQ5QKjzhznmrKePNsWAVuLCSQsJs7U7uLuw5fpMSaGz4nQsHT5e5sNXzPG",
  "key21": "4PNP8xV7MoEQoT5WMW2a3sLBoYGbZB796Txqcdnrr6oQTTK9sdPqETS252VT1jHsz9tgMuYSRQCDxZKUdGgR9hot",
  "key22": "2PywT29qJQHtBa866EfqmKEHmZZviHQBWvGa8jTf59NP93BHn419b6cQp754iFBHiqu1q1JHKzS82EUopQDXvnpb",
  "key23": "2A9c3mhhphrDyBMbXWc2cK7AB3eGnYgeCvLg5q6LPFHjsqhpypAA5cFEGnH2Vfg35WyMLRu3iiYhGexCGjGcKrad",
  "key24": "2fwdy1r1qGsfkMriraE9ojkpgh2gjDWG1GAj349sqVof6zz8oE3JTRTFGe813XypTgzB9v1V8ruAjJjGd11Kq2xA",
  "key25": "5kNdnSQyU36HVEMt1YP8cVgmr7pBXpbn58QwGVtHFmyM4nSeijs63waKTNTBz3YzZ89RyVTNYat5KSEoBKX6TXng",
  "key26": "3hy6fgpzXH3g8F3E3YMW34xpzsPSWPqfrjsiJNJMJAZYZE9EYMzLoT2YSvabdRFLFYHrC5ABtQGDagKbZ9LKkTsi",
  "key27": "4jhDVSyv588BcPo59LAxgNA11mMLnUQGBEdCnSreet8wZtCEQaXN4L4Wr5emoea75ik9LNbJqwF9dDx8pGLUXbGt",
  "key28": "2LqqL8bZSKEUnjLudTp4RquetN1yWcMziy3CvhbTFoRKmXwTKARacHLGbifwjDAHfQXmC8XNWeEhbyETHYo2XQSp"
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
