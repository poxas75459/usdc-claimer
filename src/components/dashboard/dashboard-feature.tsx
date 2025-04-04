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
    "3KXeELcuVETyfTpm1cAJDaCnBHQdRAkjBsqf2jYWCjXzexcHeoQ8qazXdLXqf5Hjp9CmbxWUspwPa5Egw2ksQN9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "624RcwZx1cVsm4ZsmeeoK8thjFvdzqsEvxSEjLCtyV78h8CirjYCYF6f75ciMhMF2VLeB5ru8pJMDdJ98vgjvYQr",
  "key1": "3TkUWo1kqBr3J46ogJJukVkopGNbrUUTDrq83RrnVJEwtiSuFN9EkfJURbMMqX244RuNcyiVD9bbhx3oq3i5BeZS",
  "key2": "51ktJSiNuofJS6J4aPwptDF9P9S3GxR7AiznvHm6FMfvthQxjADXh4m26zX3sbCDM5T9J2yLyZRr7GAD6B1W27wi",
  "key3": "4pjxw51YEUue5BgoiX1xdniZyn7ohSo18TP7mc6kvhq6B9BFmKstAcySXvN2pV6NfZCJ771EsxBRgk1dpweNtaah",
  "key4": "NR6VVVz8Dso6KusZagCQ7DZW9ictKny1A9A2Wnnw1d2ix8w1DLGP3MN8u6QS3QEL9S71iSrPko3EYb7H1oSaBoK",
  "key5": "2gioGbaJAYuWNHnoFUpp9kPpSRCV1TJPFyFcgM2d79q1LRbgSfmFp1Kzg3EPFD7JxMSAqxeiWNY3yMfYXtWbYPHu",
  "key6": "egWtAxJVgTXb5WwxsQa56oTFVEf5a48pAgg3ujr77QUWXWqss8LjgNzqCrFCLo1z5wfhUZj6TRPD4CE1kvB5XWE",
  "key7": "4srpEcJ6yg78xxfZSxfbmZSBCp5THAjH7Wfcamm3BaTni8odaBDjmxhProLDZ69tkoksYRvwoEGwQt5Lja8WrB4i",
  "key8": "4Rv6xHYiXo2Cvn6ChddzAtFThfby9iWJUSxxEzB1xvVSasRyLd5zQgadHCFC2feCMWCAmTnCKpm8thWNvatXWdM9",
  "key9": "4naEVpC7q8ycERvpGG9V4PiT1x91ES5kQsaRw51sw9ApeaYL4vBBidshqz6e3bAsCESD1EymbVLLHsoU71vSLTd8",
  "key10": "y1jasPRVF2fPpjV9EH4psJWgheYTx8gxD2AYJcG9JYuy6JWAXmWMsUE7J4gAYjQ8xKuQatp5UPmJJM8Q3dWrMoP",
  "key11": "DreAdXsHXVHuaEoQjHMbxMfS5XdtVC8rbca92bMTf56qPgQmtTQffA8yLdtAzxYf5xTwyb8quVtS7gHTyMPFAHX",
  "key12": "4qVMi4w59aPLeZ7HVz8hvB8NgizqCmiRxaPAoELny8B3ohB9utU9E5BYP6Sy3cHfwLxHb2vM2ppqRfnBxmrbV13s",
  "key13": "fVNj98YYxMuNm5yoHWyTwtsi55ABdgNsgPZWLogku31YSLZsxkyeQ7GcaBqiLyZpgvPTVdk7iwcXYmwariQbkXp",
  "key14": "hQDpytqvjX15guNW9L2z4axrcPJUyh1zghsGDqqRWCLT1QXSBNwUp94a9Kcg86ZPkeYMPmzxU3FeK9c5qDJp3u6",
  "key15": "AUbexAKQfZf95aRxUXwC6VUqRLV4KYC6qLrwqj9tkRc8Q5VX7r28AJGCPNGeosDdvLx5mBp1E4kRsKbxLjgTh5w",
  "key16": "3NUDccaPwPJoWn1xjo9G6LbXjbhvgkc5dpCFEWLzRCa18LjUXHR9jWh25FivaKyndkiKfaw9FExUr1upSP5fqiyK",
  "key17": "35KxudJ6k3J8uMQ88AZuvCCnU8k4CZLSJBKZshKPxuhWqdpksvF75brn8meJpaYBnrHUobg4DyhvrKHSRSU1Eh8K",
  "key18": "3NCK81tKLwRFA1XCjSZDKGf2W2Zf5rPTSjM6vXQq5wH1RcMWdSps2o9PNyWTRvxCiAyTJyz9xc74p5JLkH3VQL5a",
  "key19": "2RJy2M1eu8estzAWVwWFeBSc8cbLQjg7CQEU3uan9DSHNdyxaHjaVE1ud4uJN4NqKHYBS8eFLRsYRDNx3dXCtsih",
  "key20": "24dP1ioAXem6HKEDYTqeWPmoZkVjQJzVBVVKnykz7e3qTBqWdKQF8sf6Q698EziJcdwk9T8hCXJb1fXcibHYRgcF",
  "key21": "CQrncoohr8No4tPKNDt7CLjVRfFQmSaqgNBrTJbtwGW8MPWTJKSsZHwwSsbnQ5eYRmEk2UrfXjfQYFwRrvaDENu",
  "key22": "5TZjMc8Dt4MvYnyZJySohStfYsu9b2vimJ89xWwGJKZoEzuPpXw5hh1GNai8fK9afox9mauJE74zVTUrbTeHytBN",
  "key23": "2GCcWwxW6gVKqKKSi72i9tovTCdWxTLFfBZ7q5H2fN8ZesBJNpFH8QfCDYHUW9kGqwKB7Agkw5SLeK2Zn6PdAwWj",
  "key24": "2Cg6B1GzQ73S6oDBvVWFPBCupt4qDBcNuxkEDfemK1kPLLxiUwwMJjw2dDMkFD4yaHMpjRLbnYDMZBrF2mJa3Bk9",
  "key25": "3gBbrZZPgFRBXCqGVms17JSATLMFcjuZFj7LjDHmeQqy4U44MdRjHQHQfjW2JfMdamSawjkhJQv4RmkxAnm1nF9G"
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
