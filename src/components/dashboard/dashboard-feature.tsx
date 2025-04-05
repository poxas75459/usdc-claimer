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
    "4MyApm4EdrN91aau5FPBjLobqs3QKSFvGg6gLsWb7EbrdP42LJR3QTHMMQ2sjHSCt1G14jBmR5gv6UMhXjdQ4K3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UwfKRpHkUD3f4B7VYTQT7dVoLUhEgMxtm7sFSm8H94VYuTPixoJnz73wBnwMC451HMjtd7cV12twCTdwY79PxDD",
  "key1": "5jmYardPDVuckERExPWoZtFQfKASmFEC39sBi5rDKd12bFudU8LshTY2cBbZb7D172y9wTyG3UJrCRku9PGMQzDn",
  "key2": "223vtyJwyFqsVW1V5rYtySdwqN2kfYLpS46Yadhsm7CffwnKfUtMgqKCL6YY2VpR7mGTMXE9xUMJQaZxNDf9DJYA",
  "key3": "4t1jXFfTptdS1ppCqWgRiqVWf8W7AeSZzeWJ83FGiK1H8P7NRmBJs9qAuHewtgPDLZaD8boT43msA52FdawnqW6p",
  "key4": "5ayAfZ49kSrJyed8sHPicwP5KBnRVCYt3R9tvpQs44YxcrN3ndXPbgCtUt5q9SXbDFTws5LTUdAWgYk1wEX3EQTU",
  "key5": "32fsVEwFFMthihmRuZUoYFSJumZuvAr5pQZYFsp4sDDJq2CvhDD8ESXVfXfRqTZwSFpSLoisDifMtZvjB6cJqShi",
  "key6": "2recrZD9wkWz9zwXJcpCYhbrjPX5RRPHf9k1KdegNwowiqb7nfsfEM3PNqWsosy5V3zzYVZygsnBryM55XBVGq1t",
  "key7": "LDkkJq5jWLAr1ReaAqtKggzU65MJekmTK7DvJrban2EHXJrqVRzHkfrgNnbYuXzJ1YrerGvZtd12wZ6tNoNtpiZ",
  "key8": "5WLq4GJ4KZUnxYVU6T4inhL1g5DnhqhmB8drSc1Lq5e7P8Y4NbagnTyYBKsfLfTQXjhGoNUSeUuv4C5u5e4Sj2cW",
  "key9": "5iRtkRGCPwWcWGSTH5n3w8NVtfB9h85Kz9ZJEd69Gm2DjypBuH1dUZbPwctx1AeUmPe5DbfHzgnWy7pprPke52q2",
  "key10": "vcePD7pSCLm7HoTHbc1G1HDUP1UM4Xw1jLN9Z7jhDjZcSMf8a218cYFF2HFCuDP66KMnEVuXHqdwt1xmkRov3Cm",
  "key11": "3STC6Qu792QJ5ptzR8zNgZrBRZo2z9DFNNcWGz6wChuZ2t2fwd5HTPa6ZGGvCsWmubPmFva24xmSSrGSHk2gHNJ",
  "key12": "32V3fGu5tbuXpsnuuYaKrTv6PEwNRshwnqEcy9irS6WcMGDo5Xi7ac7rxUngJdWceM4mzfuxmaqYdetnkHvKr5Kk",
  "key13": "61kNDWqoqSaRUmYRusp4vBfhpRtY67B1gxX6y7TBzTCvEJVHh9HZ7tdJtrVDKxhXQzAQtWhrrc3CdStkNhrASfub",
  "key14": "4nkMHuo8eykS6NdKxi9oH7GAs7HBZETszJPXAPf52T8LCnfuHmYURTC4Z6tLRrAr81McydgnYPRZyYMKEKXoQhJU",
  "key15": "39XcwCCMsSeHCTZ8eWTVBqGVC3ChJDPMdLd9BASK8nr1iy9S7spB66v1kAkgY8DdJ4PTE2tQLvWHXUdoAupY1tGE",
  "key16": "23r4bxsj3gB5sFZjnSKsWzfY9AuFeqjGjTPZDjeEDrmoqH6xNZtedvwWYz3XnhFeDcTWx6fUmCvF2t3rM8TVkCK5",
  "key17": "56DsuHDMMMkKzxCqin348L4SXQbx9RB6VQvx9eVaxbxDPZkC7TMwdRk12XBmoW6Apff8vopz7xsySCYVucMN8ihX",
  "key18": "3rF2icQPjvDSedQDxa5MoThbf16FX3xtP5hUSMunLSF4oC6CqUoRM1hfJfdMhzkut25vq8iMkeLyVqRcuLKbgpUi",
  "key19": "3KLNx3BKJFQF1zDELCxKb6yRs7WyQPPothy5PM75KNUegotvwzbLVeFUxPd3LNpuf3BLpjHBx9R88bCUFG4p48By",
  "key20": "43PL8PgymPp6yJsK8YKM7WpEuJ1vApSwRWCbZiy9GVKYW5Ftaha1uG4Ejab3GAqq2c7tKCtq6ig79FqYydy6baKy",
  "key21": "36xEq4PhzdgDZnjDttdDmvdhhADRxBpPzp9rNVF9SHrMmVrefUf9tE8gTVUdZZjnSzcwmECRB9bubhNgdhvGjpMS",
  "key22": "3Foh14f29DjCv7q9T9fnf4LWU1ZxBkiT44HuQ3fQsrRYMit8mp3P6wkuPyziFhNw82vKSbai1912qaQeymz8vrPL",
  "key23": "4g8toxALJH4j8Sd7GPdtftvUpkYLW1LC3Em3MgyZUAohTZAK9C6gk5nj4beRsTTh4byS6Fax1otHHrGo1SCS5h5a",
  "key24": "4uBSnQ94LSbiAzZhjhmyjYWSjiiqiksyth4YqoDXuwDTrwACh2BiLXNvnRkLerQNXAp99Uqzoc3eLgvqyA3DDAwc",
  "key25": "3yQYUFcT4ofcrXfoSnkZ7CvnCfLZdmWpi4Tq7LnXKU7ooJVbGGUQwGd84hw8Krbk8QDyfexnrkY9z5XgMivwNXuM"
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
