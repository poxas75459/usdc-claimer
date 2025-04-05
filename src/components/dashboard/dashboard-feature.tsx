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
    "3q519i8KbJ8oTYhtXkSh5L8YcWG7ZvbY2rDLbwVYYcH3XMGZqjDg5GHqBYa5yh3yDNcgfhqr7dAt7rxzAsETd91c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jUebq9snuBM9m1TmnCShtKhCcbpMrCgoRKb5upx7bX3EPeJ1LPKJidDeHv23RbrJtbnK5JxMKswkZya7MtDnHuq",
  "key1": "4JyKt5m8zwkVagPDwYecHJZUBJr9XHHeTF7rpCc34dZ8s74mMEwmAec2rMjxNCHPKiyNgPoGJDgVqaUCMwxbGwNG",
  "key2": "5jwzFSRRvB3xWRmxuGApugJFrzoxFvNACLmbj7uraRjuQEampQj3nuAkFmqc1gJbrVQqARP5WmCZCPaL7g6hcCWR",
  "key3": "2MqX7vSkpE5dx7nHX9pWtyXQXbxTMUWQY7jwFECRMFyGremjFmk2s4PNfwG625jrW9AHvBq1AkbBKd4QJxEDBK5y",
  "key4": "57ymDQigTF9LK8MizQXe1YVLQCAekCs4PL7cZhHBeyeec6dAYiuhxizs2Hc6SByVJuGu3mZEUMzqkfP5e3HnLx3D",
  "key5": "2ydgFFjE3rwuW7ssAvTwqx5CXHPmBtkqRzqJSV1VAyiX9e81pereLvzvTiTz8Ysto49Mh3h92uVm9eT9KbVauoGP",
  "key6": "2BGnpFWZBv2fDVmo5sNGfvKviLT7rnG8xXuUnAHdbKjJoVY8VTmSTZSt9nHYranzERdcnGwdfiRgcJmxKp73Pkwm",
  "key7": "2DA6Ro67TfHqWoBSnvuzjP22drzGrei6MGngcerEUFgAPHjySxskYZYnTGc5hsyPDa8r8mzEWPgw8LNttHa3QuXH",
  "key8": "53nXmHaf6oowN5y7G6wtFpg79WkHy78cYAzeGMkCDMHCktZvTwwwH5U852BpWkt7P1ZqNu1Fsb7U2wSdotBCTAZy",
  "key9": "2iyFjz25cMWsKj82Q7ufhEJth6QopoBn45JomZGpKfVofg2sWEWvyFUYM2n8apL8hBVsUWc7njU66hURi7f23KKt",
  "key10": "4ESq1JbjW73CPyVm8hbmqCJpAnYKhNEQP2BygTyDZKJ26gYKGc4CWLpe7bwFfbbKGiPjVZm5w3KajMxLgFSzsK4j",
  "key11": "2joejLPWo9aFMcbRVhpBUuQ63vUDfXMRxtGHzHUFgf474EmfkpDBaSgvV6QCHPaEjaMfowbqg9PrkPpqmbg1gFo3",
  "key12": "3qm6SQubtZxaucdjNGkYDVUsHwGuBFvz2GpUbDZaGV73gDUFEUvWEaw5mdmsebv1KYzDEfMTE7KpiMX4SKdj9hgU",
  "key13": "2Jxq19s6GocBMhq2GSaCwiZp8A7LNvvntLykd9nXqBhuwVLonnHSdUc6UJtvUR4RfhCVyFAz9xuCdv3YuUv15dAp",
  "key14": "4rRHg8rbrLkXGpn3MLwumNpVqMBdVJDDDRFQpporXa79S4isXiuwwFWPCfREochnAnjtVm3F7U39YpSQgunGVbPH",
  "key15": "iEpeXAX6mUK7Jtufb5aWF1mBMaa4hC7JcL9LV33UyE2qWssXCqzpdnuxVdvKQpvbEibr381pToA4CBzFWHEJSfh",
  "key16": "2MdVt3bG96zRd3e1LmRbncEukw4pCLLKN8bXkhbSy7kXqgkZYQewxcjrWFZtwTdJac1tGGDPDTqtx1xKEAuPvfJe",
  "key17": "4rPrw75cnqYKNCNuVZRZX6DQiNSB4w1b5KPjN8T4mY1dDbmaP5LhNEyy4eshHDLbpGEM5L3iHWQJNNbgj4RS9qVu",
  "key18": "ZYib4VRh1zx2ZprngUAk6LfNfyeo1zdYmWjAwHfvfSc2pZTZXcAVdPk3v9sYq4YHuhJpMpcLEyo1WbKeofNY7mW",
  "key19": "4a5qsFb7zBHdpEFE5As4dsG3Dt6FJ88NX225Fojmdsj8DVAxPP7mGBo5xjgJpbKJgd5J5uaAakq27CQK2s3CLssj",
  "key20": "2f6hpnX8uuDgdPbFZaZhgqsDjQkA72E1TG6p2K3xH88C4bJXiqE8hTPc6q4rcPssZR3Xg69qWgVCf2KFGi67zmh9",
  "key21": "4YzaQ47Jp7ySa7nickWLqgZpEfQp4KX2wwWwzgAnJhdTgmH49Yejb8mdFed2oJoy2QLU18ytSEfBDizyYGUxydt1",
  "key22": "5twVHSgor1Aw8Gwzns3BhMTAXNd8u89j1e9P3kHcFiuh4UabQeaTgSx8fFXRrRz1UYqhqneQ6pc9WHGHSK6yeq1G",
  "key23": "xbmuKsPc5SWZHPrDqvpbWvACsi3ixouhVsTBxKMibrRRgvaDxzaioh1KoZ3dQyDwVuwTCbcbaghP9b2SPyz5nds",
  "key24": "3gqA7edyyPH8g8BCZDpVcNxJtUhsDDBtx7UwcBS7Rr2AWhfo4KtQ2w2W96U5ZxNzebeyQnEBugsrx5CDnySwa4No"
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
