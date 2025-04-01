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
    "4rBfQ5zj2HXkZK8qK6X6BJLPyJDFzR1pZU7BoMsCKMfMuzEzkxDdkwbheaP6M9CeAWwUMZ7JUBpNHegodsp3SKPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FBuqykQYpmRSFKx3UfXyiVchwRbt4QBvSGYB75emqQrD9cmSUyQV1c57vcoP8QRaNM2ktensWydaVB9Fz2GSPj5",
  "key1": "5sa8vkTWzsv5Lm9Z1AuaDSuCRspDXKx6wuf8iE6fnL2koanhMubYVCKGLLK2bJ4QXsFNVPsY6qgHSeYxBaTjFb9E",
  "key2": "2pKN4BAbr1Ubm4hbJda5zkDr6LwevSKbUjB1NpPsYCywPXvAp2vBpePNSXYHVb1RP2TTF4eAvX5bcG3dL7f8D1eD",
  "key3": "3c2Em88rkbVRGQYjf5aMqrhbPKrQnqAq3baFLYpbHboA8wexeXFifXbALoXD5obzuGzaPdrDZURpDmaaKj6jxvJg",
  "key4": "2romfQuhS71Yw9skNNL55F8ba6Tqzh5vicazRLbHh6FGpzjWyniFLFapj6P2BYr4xhFRXM1ATUS66Aay3QC2A1ff",
  "key5": "3QQFMQcrp8bqCVuMRedjn7bfh2Y7JsNR87NdRbPSPhBQdnpbq4eKzRrihk5WeJ1sUTdoQadNHbpQYMBGYtfnS1F5",
  "key6": "PaByv8pWxBDAVfYRFeSb25ce99eg9qBdQfiDWGMv2JBtH6A55oPZSvLuwscaMcueqjCGN5mFqPikhZu5VtTZUm1",
  "key7": "Jr7kATAJMpEzxRWUwVm67nqQbHLudAzVPLLxYsiNaxLYnw3KJXBRtTEpZaqbgJpqKjxNvttPxMFmH8ax449PUSG",
  "key8": "3NpqkepNV3ijw915DLEAgVvBS6tdPJi7re3UjUTcoCVLnbFhL9PzdqG4wKsMbW9CbFoDJ9gFfZCo5ST9L6Xodb9L",
  "key9": "Cg8jGEgT36ncLagPpgEUqZxX2VGcXJwnnLs8KcyaxLSh7XUMdimngQyfvHJi237ybqcYZnHHvHWtta1ebKoZrSD",
  "key10": "4R1oJqcFmJCXbmfpt66VdgXweBgN5q2E3nrhio8aZC38vVEDP5hAV9U6aFJEANGdec698mdRXQMPJeuUut2rsTnV",
  "key11": "4XhWzNCXrjfjVXcrvvZMR3iuaGJkDmT8NBLWHnrrVQkUPUccQMvHoJuJJspTMjdBowz22EfcAeuZJFHtxY5ueB9Q",
  "key12": "22KWu2awf89Nv7NWzcM4fetSZjncZTwj8vY1MdmhWFoz1H3Nyzn6Gr2wK3DhdB2sXN8ET2GSAyBKAiV8qBq2cNiM",
  "key13": "4nGwub2j5EHoMzBJUwjR8PXd1F3nYDF1kBHLaokscELn3su7JjuyjmTRVDegzfn82tNdq3To3SMcSGXZXrJc5NTo",
  "key14": "2D27Z3UMrwseuvRa1emXmegeL8uD3frfUpcEJbkMvVCAyyTgHeEDPBT1HaLdChtVMM5GibqLb6mDL9YTUonoHr5z",
  "key15": "51rG45vsFPAe5pBj1EXqe8NScMqBthvL3HZmr1zhyrGrMFyVkoP6NEBRyzEwfcH83FJVbQdpWXGcBvvQDLEARYFq",
  "key16": "2FdAmrz6mYXybfdh9jPLDChbMU6KE6P35E1Pb4Hfa51EAQmF5i5LFjHQanmFYAHw6hr7kS86kCa8BEkrWQdjJmqp",
  "key17": "3N793A8LpUWRwDcCfqLun12bLsDGYN4c42iTfxEj2RZrnWXbacyM7XxgDjPDAJ6UL9YwNuqyyoyg2LQZPqMQzVZw",
  "key18": "2Y7y649GNY7seGBiFVx7VBna5fS3FqFcT7fSZ69ERDnVkWwTWMXQSum2ZreL1cbX6az9bTMnvAZhjARQrjNR1LDi",
  "key19": "sTSax9576R3jD6A19B7bVupSWQHtJed2ZSiZVaPQqx2BZejkSMwAjXj5qCDNBfFudinHLT4fmdha7PJRkuqtnHm",
  "key20": "5kNvHbna5dNdcz6YwtV5Ajma43Lg9LZ2JHwdwxj7UHGZDYZ8bCG3zqxyYZCUqPvP4SctrgmwkfS7T9oBC7Gk4AjE",
  "key21": "4QbmFw2dXQM6RFuc557x6xnKrGbBNsRoFTi243JjNosgsm1u53AQCM3ZbTF1ZR2esehYSiXr2E9K4S1C26Gsj93y",
  "key22": "x3oDGMYqqPN8U1Psi4n7MgfFkXphdXLPPGGdHWxyzYTHpoVwzsfBN11sty7cndrSEgRvoZTecZQsahQRcEMG7xb",
  "key23": "24rLfxVnK6Jn3pa26mNSLHBdsrw6gLSA9GrPgepsjon4FHaEM7Rxmpgs7AubxfEDPDEmKt859nB7WtGxkgruCyJ3",
  "key24": "5J4vAstqvqHWFL4chCvEy9MgFd1MYssvgu566YpfQ7Ja6L518E8RU2tQN9K3Hb134SPTNB3V1GxSEz2crCJurytg"
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
