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
    "e5xqiYHcJ4jvN2JRmvc4nBphhMxKnHERqnze6cXHZjxALJgCvYWYU1rfgKkUfFxHTtrWqw3L7rkpJ3J89kgbjDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59SrFEiwSZCrLiRBC4crhzwcGsqj2QziboYFST5SNeVPgp8aACFW2fuREvVNSh4FXuokqsEmXEcUfArscmfwoUQQ",
  "key1": "3ToYbVaMDPhtMSj6EMqKgjt5oD7pSqSVnTp9WX6dUz9bvBHFCCSEj6gDdGtGHqQWrvCm7CjzSxhgHsQLwuHHrRPm",
  "key2": "2owGnsoGDoV3QNE1krrg9v7etqK1Aif5tRduQiGQpvk6zXadrGZq2PBkP5UDaBzL632DNmk8U8HoY6pJnNd3B745",
  "key3": "z4eai9iVNoVBD1WdN8aLCWvarpzD4Zw6iJJJ22ef7VaKzDUKzsEtN5MVxv3yvMnCAvtEjZFKbCETvvpnoC6879o",
  "key4": "3qVL2wBiLnjBrB5snYmwkq2xHGrUx5YRFi2ZJrRV2LNMKLxfKyTo6uDqXuvh8kc5sTTLSZb56bmj5VMrxuTdHxEW",
  "key5": "3Hm18w8VC1XrSAe1WU8pYE96wavjGKa8fBLpQY5Gb8L9iViKNDySPbyph86qvdtDxawyGY8TFGTERtZaWEtjLn16",
  "key6": "2GJzZ7n1LuFYipnG7wRg31reP8iSnxGP5LzAFmLJeg4yQ9RewcTU55huzP9TuxXAQLd1Y8ys6cRPPmazgJWjKKjb",
  "key7": "26fxX6FXWvrUEfwGtDYJsnqjiM5NxpdqH7o5CXLVduTPkk1zsXxNnxNBVrsNYc1Gc8kSnuyGqWaSh5er1uAGz6Ge",
  "key8": "3fGjQRmqvcs7acJBtxRbw4MYLNx9VeNUEV19ALYwHC24ZtvQeevejubQoHmvDw3VwaU9gsjciGBkrAzeHMZ3Wew3",
  "key9": "2TCuHmLmEvjzL7oB4rmNfpDpqnhGQcg1puporB9Y9QrrJ3QTapArv8ixyBTn9CG65opryw5dB2hdqdNQvPb9EPf8",
  "key10": "zEXicRDMPbp1Cpt5DVp7QkmW4hKZzbDtoQtZbZ6xSpxHwe5SEz5Lt6whhah7adgb4qtVrLLePnMUkdbxM33oPMm",
  "key11": "A3GCqMdHumgmv3mjUcfM2CzNespt8MvUsWGNhgBHSvBrbQuT9XGtvAjaDZxjPTusBMALYUVac848Fp4qmXLqBn5",
  "key12": "3Z2CFzXSVyCQ4Sxg4EugJxTgYLeLRkcy9t2AGoVmvrMpUKWBMWnPkSAFH5E4cEMyxc9LQiE8S1dzgSp5FaPgWYfx",
  "key13": "4F7SC3H1F8vgGxr2JTxQQqCHv5Qi2ggzYyaBiVxFb5ypAjTsUhy2a3eNYzbsJvfcYbnsanFzchnhQ76rUa4tH2wQ",
  "key14": "2yioKtZh2xNhb7s796MVssC6xC7BMHXwdeD8W9wCoe8aofkDwyfDFspoqyvoLEirE3AT8CtCCJYjzbHhZfSvnFYn",
  "key15": "PczcXKefXF2uGaRDEuUGRuespnMGmxbYDJEXvRWHWdNQjr1PFsbtwT5BA8u38DJZor1G7WZ2kYcM3kKEWzycKNG",
  "key16": "XYJV57rhXuUi396JKeP5aq4Cvz4ouDHjogGTd3VsB8mHrZT5c1EDcS9rcWomqGkjcKrPssTdagdxHdFRVwfDo5U",
  "key17": "3YaVu9Nqp8K3HvZDnU8abKm5bMj75LyfAfT1HrJkfy8PxCbCVuLJhpEpH865Rx3zYg7vbtdaYZemhGKkwQwJcVyN",
  "key18": "2tt7CFYRdbPCYXWtNAvuganfvXSBu94rTEr87vtDZbm7BJHciP4X5c5LRABnEdd1kaAMYFFiENXvZMykZ5M6QVWp",
  "key19": "3Exjy3nDyuxQD8kRrsygvASMRH3g7DrwbYFtRnU4JrFABGVcnQEjfkirTFDSc53WMS638BvTicmDJzXdLmFkqS4y",
  "key20": "5DkpjhV3BWhRnHppaRH4AWfeUxjvzVDMtiUEK6rGxLMCFsCDjLriaitvejPStfWWFtm7QGCDRZFbVhbpPqdrGwXs",
  "key21": "5xKDwPb3hFJidz7gPNMGS6RmWMeNaJHG3ZjN3yAGGdkLVKJoPRXpKhaQcY8Jz82B6mUJgExH5H7qDwQD6jVSZcji",
  "key22": "3zJn7cTaDfqTwaYjqRcZjTXRaAGoqbDY6a32i3GPPKzEY6NXfQ4K22xyuXurzdeyphw2WVPgNvf3Hds4QdinhFBM",
  "key23": "53oQtNJR43ue7yCGDFFQX4t4ryJcbaybRHsvpc4RHPWg38sYAt9iDhW8v5ak54oMZzk4ZoQcub7n1tcdZC122ssk",
  "key24": "2jmPor7o4puQEBK2PNtk8epjow41xJtsxCwVNFrtLACRd9D7hpr7PLjyRy95dPphvxox82c35ihEYHFhWcB9RjmR",
  "key25": "3w5tMJrXy9uswoMefFvU2xChe8N4PqJGqd282nGJb432R6efH8CaSZgr13w4D4s9wkKd3ced9HPxmaGm1cHCgeyT",
  "key26": "3Fhzch5XrZ4Dd3cFBUVVmtjtYeCaVrw7jRmFADjw89qmrSGtwqRSn7AFvPnuTnJotvZg1d9XoZHPhtTCqcaDPx6Q",
  "key27": "2hWCZS3umFRbSfxq6TZCu26o8StmnBRfz4dGNhY6Tod8jaX1Yoo2QRD7NxwKQByR6RDekPge2yRcsYyNLqrjVpms",
  "key28": "4XZ4a8bkaqmQR2og6y6XK8zHeFbRK3D9ZKJ38EbFAGTWAJmagg3v2sjS1cewaT7HgKegK6nTGeozqccceK5asHXk",
  "key29": "5w2av7N9FUBCspV9qdBzzxRL6bDi2EVMxqv1swGV3sQ8nmqUx56agB812MT2QsSHwqqeZNtVfHoCoupZhESXsWzQ"
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
