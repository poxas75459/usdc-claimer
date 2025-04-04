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
    "kDVzpin3KwNhZJZ1g5WwQENg4YniJHTmvQ37DXiXCBYTbE1fWTZJUJWRyPAgTgL85q3PFf1cHBLuFZTqpngo621"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NqnuccudFWJBYXooAvkfQxnyjSaMNMmVy4wJ9wJVc8EvoU5aY8JPUUhRdPd6xEs8Woe5UqJ2n2U6gTE78hVVuUT",
  "key1": "3WdV9wRmk9LVRb2iSF9fanm3uHxf5aLsJeuRBxPiUvsuRFT4J7QUnRvj9srZTdmdKycUkUgTkMDNQWbCYx8tfLzv",
  "key2": "W3Y7Dr8TcuX23UU1efeM57fKySMNS1CZJJde4ZRn9MNT189Hg7EGtJ7N3yqutrtJSBbG8MzMEGAYEN22cw9AXhf",
  "key3": "5fg22ckoogYaA5QjPHXda1R3EdBUF17gapZgMdw8brhARhtcfE9NpNFF6LjP79F15ye8ChU1a4tTu5pCxkzsKEL5",
  "key4": "uTswYC7z4C9gbbNyjXiMeCXeFLhRrN8MUjxYA2w4285XbEAbAiC7iZgJYT3WQv9FDuZLhtxFNfGCPKozRUL22Pi",
  "key5": "4gewrcoZFCTBbeGgoN8J5EdUnbANdstB4ZNFncneo272d4gr7ggso9PoVFCuumWx4uK72mp7bf98eDqiuDJDtK8y",
  "key6": "46VvnmL9Bxt82hMZE7Porvafa6azz3vCc8tAhMYLnyRWUu1h2VNfK9QvfvpjcEmV3EVCtRD16D4pbe9oDCTjJDM1",
  "key7": "42qSTHddrvBfMuk3JRBVnsFBQgi5QyF5Lm66o7Ps9jC3MepisQNLN1NgVu9pWTMcxgLFP6ZDjxdgecpV1LgwqHQW",
  "key8": "3WsrZEwpph96UNzEq8nbKegNpVpiULFPQHpvGTcJDE8ExKX1nUKAjvVQ2Uj2BEfGX7oF62EddZb8kioCMVKc6eKJ",
  "key9": "25dxTP1RC3fE4i6WPnjMD7f6YEAsJHuwVeZEywpXd2P1bC242DpLaSrKHJq6wC6d1w8iTEwmfcyhBBHe6zd18wpu",
  "key10": "3JTwUwD3aRSk5wZZsrKGamTcVoNV1w3XJLrNgxXvCaRMddYCnq24JoSkY6FMRosKNPBZyC3ocgYGYJ74pGSFB7LE",
  "key11": "4FcQKGkDNPMzREgTggDRfjDUwyLo6TEUHX4TmNioN5maQH8aVPyYVKaWXtfJvnNkLJfRnbDzzcZVJY7QWmxHVwPs",
  "key12": "rtrNjoZUDRhzrjWbD2hAiUGKMpTW9HR5kt6ywXvkfV4TWZG2zzHbrev5Gp9u1fTzeKok1tfjbfY6GLHtEWVhfFc",
  "key13": "2pXbHrivGrxUkTPsfMaz3rbMee3ia8jD84sLa8z2VApCHJpoSNcnurVC5B2BVh6xgRz349Y8fikZAdeBKpbcTAmr",
  "key14": "4Ec1HxZFTGMWe8GqphnRM8HQdutn9bp5LgsYKdZT7G5HKX2uKXQHer57zZL6R3iELhGGesNLWmEjpB1kPP2CkFpy",
  "key15": "3mCWqH425qxNWzZ1CJDBFmttmdv4YqyyEKx8Ufw5u6UyBTMB6HeQ1iF6CzN2sd859rsQi3dDrEmtmzw43orTb4CW",
  "key16": "66b3t3F3wGosv1XY1RQ2JGi3ddmT2Gp4ADp5sbGEwNuSsqzC15Yk8VFvar6aKAkhFQ2SMY9ae3NaF4sqMEdhuB6N",
  "key17": "5nVKmLBPjw6B2giNKCQUPep2QxzndQHeqFWSuAndDAogF6Lf8PaNuQYjo1rSFD2FsYwv1MWpx8EEnNwR63vVombt",
  "key18": "4ndEpxug6mfTn7XB6BQkNyaP1SaLGxXuKjNAEBrJ2YjV3EyFkaxHmRZ1fwBFh5q1abwibAsLrArb12NUDQHKatr4",
  "key19": "LePMpAMUc4wFUKQCyhCUSJAmPhHCjjZnsrZMJuj9PChVHh1za1NYEVBjfuABaaiVgaRJbyAXFpcbvk6ikXr5Unv",
  "key20": "55oMbrkbaoJuox9X4RrQdAQXo5xf1s3E3kRVR6ukrMpVmmGtrrQMZBXhqT41NfbQCJnV2LPSYXerb1xvSTESqVSZ",
  "key21": "4XYMnjo4UWW5D2Z1Jb4P77YVFjmVqcdCNoiLCy1rufGHfJEP5R8Az8KUJPDp7eTnnfUi1Ybhxd9Ced3rxz5FgPaS",
  "key22": "3EFPJke4Se75c3671LYcLrERv9GH8CttiunWYhoG9rqirbNoVMRoohrPemg612dCAWJer1ibFFYVNxSC7izCfrMw",
  "key23": "ynREkpLY8MbzG88c4RzSyzYTH7L46VPYiwiQ5BBDz4dsPgCnHVtWncEDLBLCWkYKnmkGkeU8zmq27L4pkzTF2Uj",
  "key24": "4qcWE7DnEdAcTmJHfBqCaa3ztemvYeJ46VVES3rA51gGBtZoPWFVkC9aaTx6JNcAZ6Zyrgd4TfVfsEXYiCModv2U",
  "key25": "4Bivp5KCw6SKFQsibaUf1eyowywZXn422obrPmRa16VjutTxtnVUBouceVBmxVEQYtD7bfpinq1JZLnHg3viXpEF"
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
