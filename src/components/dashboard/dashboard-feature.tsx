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
    "BRKuxMDZGe8QBj43YJNez7io5gcEsnFxdryQW5ipSVRLa8Putfvw8bFNumrCkVoSdfZcaUMFhrE8WR3EfNEm2Ux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45CEccDVXT4QSi8Rct5hbvKCcHE9zdim5KrwKSVR8CCz7k4U7ZqiT1ZU5KpGJZXtpNSJJu3wSV8VXeFwwpts2y6y",
  "key1": "5TFGNiL9sjbrZt6c487HuZhS4DcfsrYBEhcAEGTTwYhx3k7MxjAai3EETM4NGevVUL1rSGReTzarSYM689id1gH3",
  "key2": "3jofZQXek3TAHSXAGxSF5Hc3XJKX1e7PZxoS2MLjMLtxMgKdapwJt8EEFML6t2g7cMd4Mh78RTa4zEhFpdLPCwVf",
  "key3": "4sFujBypkmmDks4jyD5JxkvyU6LmisZYfcEJnMqM44NryaeqeRZy4AJ29oyd6i2myqN1WquH8QvTo4aN2fgMwVVz",
  "key4": "3nfibF8Eizooh1wPfVcZFcHMN1GseuPt7wPBEzuEvNQcW3kYfjU3y7GqKHtCRrBZ9JqiQxqwW4kw85SpiQEfjhAj",
  "key5": "63CnN53ESUXaW9xFfQgX6upG9AbLsqWHXSgHRnbx3Wk8eXwiSKKvaKMh9HpwNL6sDaDY9escMUxiRv53A1jVGhXr",
  "key6": "2tKJYjnwQeMt2Q6w1UwfRWQijvo9Sj135HQbk1f4DvbsudYxRWXf1a4qSjtU8DxQ11fh6Ww8pzHuyVidbneFHdPD",
  "key7": "4KhRAhv6eKs4Yy3V6ZKg4Hx6AyuCp5N1kTtoHyWZ9B4nKqchWoopXCDBR1NikqK193hUTJa2Rt22JcbYQMmWRZxq",
  "key8": "4ka5qtUU54oAm4H6tdtqN97KTtok4hoiFJbuj25xbr27mpoMH2Bo1856ddcCxLG7aVqhLqJYFHxr4hnhuQtNzeT2",
  "key9": "2ErUzPeAbnkZYMsAeTFYKdTFUuzjkLaU46mu26oJHRHC5JUW3okyi5nmAst52qnMoqh4weDs8SFdv4e7fFpWMYpy",
  "key10": "2dLAo6zXJJgFCaZF3Uiamd3mRtaZB9zvUPchNPEkf8jaK72pAU5UyA6ZVHWsQ3Ue2D4P7PAa3KXTbVMTdtVynWnh",
  "key11": "5ZbregNWGaikgGcE9kn9smfEizKm2UyDBF153yXrBzm5wzo2jSZxtzG4fK6hh5SYMY3uyZFMPTeA44sKzKSxWzZ9",
  "key12": "5t2iBBiPDMdLw9FmEd6iD9DzcCyTHrRYx6rhZ9by6DcRK1M53p3F3gwBJTiMyMsS5374Q2rk54sSsHANG6kfXp4p",
  "key13": "3WowGauPNBoSb8Hj8kxrdGSXD6mzTgc7thGrhArC5uoRCjtVKr9VjKt9N6K55KSvnSqrVb5ZqEvmiuhexmWAGLQt",
  "key14": "2sL6BhRQDEyVpkWrXZXwKP4khwVqJdGCMgpMfVBLraRfhUQqwzAF5upUwSs5ZLpv1fQUmx4EuED6jhsbXBJWnJzi",
  "key15": "4qe3P7E3FFsnHNKFVvNu2tVWZuhDRdhQGgsBVH6bkXWeqe9z2eaGuWpL2Ck1jM8WbwfBDqX6ZsRCSRcGmSLXY7Th",
  "key16": "73SgbNDP3GpBtxh6KUcu33yjBwbjvFXob1DjiRZ3swjVTo3WwUn7zd5UjTAXqQ2bfQjrKqEoeesy7iiTEyDa6rW",
  "key17": "2g3rPZW9UB3gkCAfNkZ4UNAtU6w3hVjadFfY3AtLX8hFqzsVmAKUu4knSJFVjoWLfc1JiSB6eAXSGgvvfmvreDhJ",
  "key18": "2N41hD69hstzmkzUhXMAqUAWH2rXQUrSJm6YQBfFhTGcMTgpbCMjYEyBg987tEzywPfq3MqoCAumS5HGVKZoMFrb",
  "key19": "5QkuFPjgTwd6rofWx3Zkm5rTyW5eHH41G2DRbeWJDJQch6bkjQXpTUgiwM7suXJUpXSLMv4cN9BhrBrQjL5zd286",
  "key20": "3nGBtWYWbkTwBXWPD5TKdfA1brgiEihdEiraB8YPjJj7mWpRYvc5m7zNmiw82seyaLTmyUmbUNDKLCSKkgHLF2Bf",
  "key21": "3Z91AkufoN3pa49JpeEUB1PZWDouEzJXKCJxQ9gcbCFiFfdMmdG3hLvCv7WCo4xcq7cvEV6hMPLSfDoxKnLdQeLp",
  "key22": "QtBdGSpdpn4fHcdWnZJDTLtTK9vvHv2JgEvzxhz7kfopgzSExww89Ma4VYykyP3fZ8H2qZ4rWugdBh9YbMUQmJY",
  "key23": "23bGikE6ofUkZRERraM3KMkGWUTDn4rfcVCK9Eyogcoh67PVtVwVSbs9RFguuiPB42ewWFgNScxTY89wrWMicSMf",
  "key24": "37x1AxjaJsDZUtM1qdnVx1GQ2TBxWZy9ryXgm9xDTKgsoTqTZdYGbzPNeQiVNRNMDEttXf4c8bUYL1zgkVdAU1Ni",
  "key25": "255iU7cyEdZEqD1n8oCfqdaBHCWqeNCnvNjdRVcBB3WpR511mxywSSufmM84gxy8V2EhdpEq3tkUxc8wkbeNFH5N",
  "key26": "5EV2axKM21JocJKSqkDwLogja7cEWzN1j2xCPxevDSikrXYBMtmFSyr9duB3BuikRMQxMqUgpc3dXh5cqtAduVyH"
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
