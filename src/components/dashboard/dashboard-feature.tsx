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
    "3iqeSqicfg6gbMpWheFNeyNadoUxh16zBNrkMQV528U6QxswQ1rjtykTY27bTMN2M85qTpX88F38tGTGivj9MUwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28fvCRkk3FfrhYbTjn61cv18thMLEWZ4PrgdfcnFdfCQHUGKusVFpD4MB71YgX1ewWesno8qkbwiHmEHHrY7VomG",
  "key1": "2W2cQhTmvHFZoFcZDEAveV4taqyRCfPPeNrXDaKTDi31hJbcNwdtvbTg2hLVGM8dhSkHsg7XRiX6st9SoXgprpHK",
  "key2": "56u7R96HvS1JC3tQLddoFsX1VtFHx3RfEcdWdtomkiaPjpMPJMbMVKGbjk4VBz8dypqyhicKdfxDTsh6jFKMDm78",
  "key3": "SwbrZfeMvTyd1gd4kskw9JJbWqH2N4BS8DtaC1VELAgM3Yqbq89Jom8meVJpqgR2KfwkPkTCmC54a61WpqzN4no",
  "key4": "3eBvyFfKjZ9PrZFVXF6jGJRWRgKX7kMoko1kMrcL751dT5v6d6MVgTpDxWpyDcb5rWAToJceEJqXiRT6ow3rkfM8",
  "key5": "3oZkXs2h4XY7uVivHtNJyicLi9QQomo4dGvF4WkaospH9ovxkyUpe2HoCkB15HMx1oXD8kCZPFvxzv4n9Gw7QDq",
  "key6": "64qRayyjwnKmfrDJm7mCZa1CjuDFG6xRdEiY1DgHAN3f54HYJVcbkVzC8QCPhsd39nX3dkM6FZbreWmSCnqKQmg6",
  "key7": "5w7wyugdDdEivVUVGUxNYmqLk8vcSAn89ZynjN8BtodwqrzUbZSR1LrzDqcvQ5EHJSaZdtryxFGMciSUicpGXZW6",
  "key8": "5WFEot2GSTA7mHxMKLmmYmFAXEufiQjS9QTvPnXpk8zgHKarRSPhKeaia2hPjUwehgdZkLUTGbch9ZHnoQXWtYCi",
  "key9": "5xzSyBux9nmULeHfXLWniPNm1zg86LSwUP3DoFTgdJ7EXtyJap6djEWa6mYiewJp1NptfR1QsTGs59moUzNCYiBZ",
  "key10": "3QrJZw7RJompnY44QYUDwkkpbz21WXhVJYzp6v7rh6V2kdeqWDrvBLW6fibGhDcupVrknMiT9yw74uvx7h5RZ7qd",
  "key11": "2n3o4b3dSwXaNwYRWQaDH3NPTVDCpmREfwNRxX2ysX7AxrSSBXkP8RmA2jo4dZnCad8RncddoeKynmsPHQi2xwVR",
  "key12": "2sDjxFaccea4ewzgCqPVEmfcaQhACz6fvzgyNhfYnx7EQBYQ6gAY1coz7nATiPdYr8GcXAMzLBSsBkLR4hmYx4iE",
  "key13": "HLHWLMJWeoUbhXYffa3w1dNAt5bdj3gdKX6vDX7JzsGBdWrangjX3GAYxdnfJ4suMWhSfgT4JUP9madard6p5Ke",
  "key14": "2MV9jU4X3CMwxQaefEZJeA7Hd3wz6J9ShGo7SHR3sirsetDMkZjR57vQEx7rYY29VKj1zmB3Vyze4CtYoE1rZpdc",
  "key15": "4LnxLrDT9yL3D9nRbgtYKovqkW1US2SmEaRDnpca6GApsM6TXUgNY4oY5ZvzP5DtCZQTjc29UPPx5Kcttu6Ki7H7",
  "key16": "3h12nTws7x7kcnnT7z3F8fumuTSFFCUVNGRXxXTPXMLowVadnKhmptyaSZy1GXKdvGdF2Bduc5wP5xMnE6Yaavai",
  "key17": "54chz7RS51t1Aoh7WV1b8fgSTYF3TUbKro9D8wj1j22GsibVhy2QCZCPp1ob5RVoS5nLKd9Vw8U3bP56BRrnsTQ8",
  "key18": "3BJqcKucMRRaJbjWJZkfTqBXJZtAyEGRTKEt4u8Kf21PUmXycgPfqqMSeJr2phNdZMPYTjiKYhWR58wm4E1tdNK3",
  "key19": "28PUfJnjuSNXTsMAA24UE5aJ4M26DzwPThb8WXK3TAWAxmXZTZiHNZBhhfguh2X3bLaFUBwKDawLMD9RFHFXMwU7",
  "key20": "UfAPz8UcgGZSppVb5McZYMrGcaEyfquFhBnWm6SYRGV6rz1hNgnJTLW7umbPUiPrX9VbCDMGLWLxTm8qd2DbtaS",
  "key21": "Loso7MXiibAu1Mi2nMpNqwhss6q3NKcipU3fpAS6rf6nTZM2SqZNbFotqhc79VgAqX8b9nqrJg9v6oxgH2Npo17",
  "key22": "KLiErYXYHxyykNy4TxiBP5ovL2BAKeVxSm61ZNLYHtZHXrbTiC2F1n1Xzut95wdc4Dp4d2ZKSMftEp55qqQGJiJ",
  "key23": "3y3mdPrx2RLjS8Qx4iAmnkbPrGh8UnYbfEdAbZPTWrTaBc4cFAxWc47cp7Thy6AoiDQ7qiF6N9WP2CmbaWqnfoA6",
  "key24": "2DNbRHD5kerG71gRSQCb6rYb45PspNEhDG82RTM7Qri4o6oegU4dW21YNCyo4Wvdn2o2MoTz1xJ3KajY1iiaTfv4",
  "key25": "4GWJKf5up7ggMzCQVmPohKHPJfF9ibfrwwCcMtQZ57BAfqMDevnoctV6AfqgMtqsTSLKvCJJFEzQCrCFqDvMEVSX",
  "key26": "MX1LCMqHQfdV3qxQYfk5oBWn7WYxhQkVdnNJJAS9sviR6y6Ge7MutxQdwZ6b96k1p9ACffrAJdndcPQ1Y39s4qH",
  "key27": "28jkGpNJe3Mw8pFbd1GaFZFVrDoH3pMje38Lwju6xARf4ppk4yPCVfQVr2UJcwqVAu5crnrAn135LJwFAyKzdobR",
  "key28": "gbZ2CmxXGSj6BV6zFngYfPgD1ka7MLMznaaJ4MsDtYBCBHtnRNA1B5oAxvavTb5yMRQuHP2CSGoUdmaEHDg3t7b",
  "key29": "2m1BpmgXMFy28bZt5q8GhVDSjWPBzco7CXjYAjjndTAX9TbopfiiY8jV7ERNSYUxar1pPAJ5H2ucZCPzkWe2438o",
  "key30": "2U2PvCZbxAM84nwNXxuAYWNum1uRtABppmtmUf1XFSfkZ2vYKs3WZxu8Jhp1MhTCgvgaceGCmgiWfV4gMGmc9SnU"
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
