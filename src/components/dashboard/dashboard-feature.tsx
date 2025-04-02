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
    "67BogtRKjKXpBZ52eA9D4De3Hf1GQCXMqzQyyKXRSLZTCVtFMW2iGtvBEcuzfyVMzfqBdX1kYzMuKbiRRgFHnLL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qfQ9QhZmAmdKFrbuA1Gqfccbno91etzrdALVaKqaG9gcajhp74zXG7wTRFDCMfMH4ijnFex7rcnKpWT7E3Excg2",
  "key1": "7ribRU767PSrC28zhUCLEF1TrYtuCgGz4xdkPsmB7oj5m2jcRyPJJ64giu5kRJXugAGLSrUQyaW8VLudqjR2L4h",
  "key2": "5hoyw9zkZ9YP8kekC6Xm8wzFV1nM2sRrqQeZKjPgenADryCPwSuxegghEaazLjafvsUT8pXsN81fwBTHDLmW6bY7",
  "key3": "8v3nz8ogYepcn5xt64kxs9on5E7PtS656B8Q75PckFdwqDtdQ2TWJ9ScsKJ7rPfAmGG2bpT2Yi1fNrphLm1zFkA",
  "key4": "gYYeHUXkfxGLEycrYzMxPynvubFjhEnExq4EmrXG4BoLQntFXvubhZT8KXbMRfcAJb6rj1GjZWckV77Y5TF97gp",
  "key5": "65sSVht2qeX6e8avZdy97yWjeUeFJ3kqgrGssYi5EAA3CidEPpWpwNnSrfzx96WCSjN4YZ32eAFJ9dQgqSYufo8c",
  "key6": "2ZFVAdFp84A2Y6kfFibSLg1h2a1HcxrtwnAsZp4eVhrEWusCkAcpAp8pSyFop5H9TyFfzYkbW18BNdaFthditPvW",
  "key7": "4AiALou2dtSgGD7nunh2dppBMuB3uitm3gfhVSp8CdvD88gBaxnpZchj3DbLfq6ujP611w488256pJbog9Zn4dyd",
  "key8": "4FkWjK3oTy9hma5dGKBKcHWoEynVALQMTqVmMcUEeqng4wBC5mh3yo7wtqqH6kCEXAnqRtqQSVsKBwqZuLaepdLY",
  "key9": "ZdvgynL8v3q2FiBXH1e9WFFnf2QHXUWEZaUD7CH4eTgah2kEH4xyca4LkGCyg3G6RBZueDX82qexgPE7kAMvTXo",
  "key10": "jv5ah7mT3zJ43FboyhNPaGsBmvv2P5ZiyXXZEZnt69RY1ASRwV6YWdn8fUbUpsvocerXTS3qQL6zdenpuTFvYAd",
  "key11": "2KTpo537Cy3M7m8KVmkmY1pcR4CdnpUzTjerxzjpJP22nz8UBwFDTekrv58B7fYNBEJxtcxL1914f2eAEJHQVdey",
  "key12": "4Ehy5a1DH57pocrQmpjtcMkJrxR6f5rjVBwTynPHhfUKc2HFm2vcJAxevCFDq7WnHGMhogREFRqSemQmRbMsAJ2q",
  "key13": "aNo1D3EGmsTw3ryonbYBJ1MZnQZnsdVKfVHH454hxpe5o2YV7oWaG77Zp82swDsYtR7fTgZ7s51jhhTB6LfTwtM",
  "key14": "63tf2BUMrLWamVe1C5W9XYQ54uKZHaPKXBXqWcnT7mbUjcEBXM4gddfWfYedRLKHJhc1Dc7c73fd9ziVnb2GGyZy",
  "key15": "3kZCL6mymWkbn441ZiYJMpkpupP6WByvdf9S5fkxuDaqRzRrmh7RPRtAKUFR7VndFu4dYgAxAYVi6G92b44JZE2Q",
  "key16": "3PhyW4HWuaZaSiCdJSefb4fidh5NC4ha4oSdzkUJ2imzFTYLuqSRsDyhv7gRfkJbnup6C5VRACkz8gYr9AC1m6xk",
  "key17": "64i3fWzKqbU4cvq7FY6z6zVD6iYBv6ph1D9Nf16fLA3fL5MrFyz5CLakapTA3xwFWkZUhc9w3gZQM7rMhZxS1auf",
  "key18": "4mtZn9KhfzpuT589VgyP4atKnAdLy7yUzdd4odF9C4VnkZAh6GhG94xStz1hJVnksNNSK7RnUkjTdqgZA87z78Hk",
  "key19": "5RcuYLN6pYdiev6ex1r9dGzppKrMYg2XPFwuWFZoJjjavE4pf4vjkEUqXvS4WoHKcteauFZv6ak6fzyKkrnxAASK",
  "key20": "8GASFN4iAitscS2Gu7Py4gepdfsixtE6pSJDt7VBk36WnGuoGYAbHwejpBJXTN83KvfVDBY1LthPzt57XPavWg3",
  "key21": "5BkEX6vcUAg3wwQbK2BDWEHFPuXHACSioVMYgxTZSKJ9XV3Zy8yM5eB3xLh2EPaBsSscs216CJresas7umDvPR5c",
  "key22": "2ibxMnppPNVVu4VZKht6KtrPtDDBiepmokAUkFfnAA4WcJSVPAcdSixKUa3XxhAomwrGYvQCWSWChV9C3yd9jjjm",
  "key23": "4aUS74NqQSZKEKnWh4A97Y5YGMXym67s1XDJFkEodn7ZsDN4chRN7oFK6kv3o9W1Yk5JRQTWhr4Ap8DHZAHT7Lx8",
  "key24": "2p1N49s6Vyb8UpcdTxMJMK5vt3ako7CxSNnSPSYHSgxS5g7jWzqh1jskxVMvs8uZtfGtHot1oRvxugsXd4KjVHYK",
  "key25": "2eLTmdSEHpTGnJm6JJWdFZJo7iCX53HoAaHfmQvagWMqLaLRs2SwL5D19GbzrWVy6MNPJRS2JZk3KL8sxaHWxtyQ",
  "key26": "4xeeJvrVfsKjnmms4CwMSAPTR1xBdNrn8UqU468tQ4BPMdzdzX7A7zmG3XQLtDcox8Z1chb8vX8UsaNzu1FvQxSK",
  "key27": "5GRPKRp93Uj1UYTW8ehSWBSH8rp9jsYa4CTTPpD1j7iHcstCDHfWu8V4YRSy5gmCWRFc13Fna5x3yg9nFW3QJSb4",
  "key28": "2qhUNqMNsYFbkhUipqSPfniMNsCar4Npq3cb7hZTvY3RQgDNkGTBSFcZoYSyxGLbu7wdYDz6ouMXtCKAWByU4sfu",
  "key29": "7ragYnRujgdmMk2w1qG3mnLRdnBK61uDcdtsrXBCMD5eUpcFqN2XEKUtEMk6ayYaFSpog5MoUGE9dj179B9rp2N"
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
