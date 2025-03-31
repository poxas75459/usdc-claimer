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
    "5AjM3vyjkdHq7PadsL2NvMTuCMwKJcBaS2CtPWyHTVhbSXTDspmwxrixrrpRJF46hRbc7BDuYC3AxtFK4Ts7xBS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xEFCSbaz85acYQCgePDRGk5XA68CfFybujhqpxskgFpfmsT9oCjDTAobqA8c2mHKNxgSXeLmyiCdPQodTYDuLzE",
  "key1": "iEUZb7VT5iJigp1bqJTzAdykAJ2L6ncDwymYDQzLuvonk3CnnKUMhn1hKfgwx8kvUGYUmHJ3CvDqYqyAqK58WUo",
  "key2": "AKGD2TSix8A2hAU8KovovCVQwjqmH6fm52j8htAS67jUKcPVXFdsFED5GawiWPSmjFexZYmNsTuP7cPwg3ZSTHS",
  "key3": "2RvfVZCUYBAVusnHhkqhK2PvcecexFfiNZ5BfGnezkiNTjGDM7dCnSE6mhHMC71sn6ew8ntmJv9wJ6w4UxDw3oZz",
  "key4": "4FJeaotXZ9h9Qh4PYaHS4CkWa9WBKhXsg1evrj6oPHFZaKB8qJWCB2ctf1vFL29NGE5uxd3eG8sgDxnGnKpx3isi",
  "key5": "3bMW58eP6StwynZ7dsoSAVawxTTW7L7CXzsqcnP6Kr2hUnz4AFzMDvdEE79Q7bmYKc72KWJSGyLaCaY8PcfwwNxV",
  "key6": "XzMFF3pkrAL1ora3G5xSxJJr8HFGt85SpkffbPUQQvBsXcy68HCUyr8tw9qbuc8uo6rxB5Ph2Uaap999kGYarDG",
  "key7": "3ACNN1NY16Bve7zEJ4eZX9npDNXSnN5PzHjefyDwVeqaHWeH63GsMnNnAnacr9KuNatYroKVER9m4diu4FUsQtc2",
  "key8": "4Rjys2CNWYULPmruoAMnpvAnfkgRjbAXYKEmPoMQ3zwpFftxBUwpTgRk8QzJceuDfHQdixWFDc2h4WyZC1UagE7H",
  "key9": "2obFQamNBoU4qJLcdNKQWGMkbpoepXxBnZX8F6rpxv7ykfZdBEGqv5mkS29LBhGuntD6aLduoZY9HnJ6cAoD8N1a",
  "key10": "3jYiyCwz75iW97uXBBFoDh6Qe3aeEmXUi8c6ALNgKE2Veyz4PTy7XaTHheJU9z7XgxRQXxjcDFQ78GjPCKMk6n1T",
  "key11": "49MKFEcHEzxtoXkcVcjXhSV1VVy5wwPxYeExiiPVE5FvZ5V2kmfLaVWangZ2yN67dco12TQdyuWzpUcdn7xMZeAX",
  "key12": "kjzmszeRLzoo5zDzUfpjBewLzDuoWkv2weiLEh2fTt1Gyf7uw3MybMRw7DwemcE9Ek19wFq9KXhyT5bTgSbmj6J",
  "key13": "vYDGJAVBQBh3945jSgp7NfUd5Vnv2FwY1eUnVKWjsGmdi7sE2rBRCvUFw7gySNUwDJf6t2XQZ8fLi4eFKpxvvoj",
  "key14": "2BZJ3T7AN2qRf3YsaJ22Grqg5gFBBiBpc6efT1Deqe8AmBEggZNEv1SNi9xEzKuKbB8vZSnoQa33QpjTezgFVxEx",
  "key15": "2dmiRpBb5cm4DrYk5g5RPf6TposgqTyKG93Yi9htm7rjHAyjRnzkz6wNQpyzZ2a3f26Ejkpn1nsG4JcchgeJFp2m",
  "key16": "4wKg3zsbEWGQb3iRdj8tz29QvRbyujTPdpf1gxPGCdANfdLUWdKEmniFdYB6YgsfRfaoXUvU8tWXQwjKY8aiMP9s",
  "key17": "WrAgxjVMJCYqA6gg3EbyEyCeTD2iJfCB5VZzbPNajCjVYHpafJurh1on8gDkR9pq96qbcwstyZa1heuQQVdZqfR",
  "key18": "48M4NVGJbc3yhxrUz6vq7LaACZ92qufpiA6aohzwHFtvYrfWeUkv2QYvUyJYb6kKGm1GY2WfGvkNxi7jUHbhEm5Z",
  "key19": "4cKEQc6T4MM9ut33oiqzmzhNTAbKwyAhF7JUawdnxoqHdsbkJMVUstPUjAtsav3vMaPEwqNcSps8P8f7gQP8fVuD",
  "key20": "2jmH67DoAV4EX4aRZuiNrKeKqC5jGRZhfvAndBRYC8fudnhhMgABcRbnsjE1hcsTnwvGkwkNBg9qEL8Recpv1UEF",
  "key21": "4Mp5sYdBUxkmhmGv2AVdKydbFe5cHDhMGBXLZaqxYbK6AcHD4aHKrXkCS6WtnuGtH8xcuZsGuqQtZ8Qs43VLCawz",
  "key22": "5mzTtZN4F9x1mvvBJh92dpWGpXfBs47dr7fnhHWJaQzqL7ihXgKMA4DfcxUAuK38DN2aTL7hZEpQmUq73yVudcmn",
  "key23": "2q7UHz8XgdfJ4rTmVPdBQrRms17Q6FPHaHHhAwq1VjX3aMmCgdwzzPYwrirDm6zQRnJ8cXiDj5baTSpKgFL9Z6sx",
  "key24": "2hRUNy2gc2ofwmzRkc9KGsusPPcDbmv1JTFdLmyKtE3EDeT9nAuDwDNSkfS8jXN7m68nQF6XK9gAyBzi9s2hqj9S",
  "key25": "pTtjfAHb6B8udVtSoLcSiyYgAWsbj8uwf3XyMNJLZDKdmq7Sv2kDegmPcwuPpDaAHDTUwDEvrK8ixtuMm1uqra1"
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
