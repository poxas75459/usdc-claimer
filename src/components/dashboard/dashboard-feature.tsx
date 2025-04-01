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
    "2ciqSHRxqa8iDdXPgKesxY2rSTLMByqbgDuUp8V13fhKmZkCkriRopBYmKvcYa2cf861tjg2n5VsrFJEnjZB8BDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HoSgcgzNhS83UbgTiWJYdqhQDBFpTQ87pTPt27erUQni893BPoAc9bmigVFAyWCPuCAxNRpuorMQCRQ8AnRuU1j",
  "key1": "2zaMBzyizGFoGyWYUUnmXQqXWMzUX5i5R8vX4Uh2fbmP9QFRT8JP9QMx9QRKSnzNPxKisP5crJmdJaw3tadxFuoP",
  "key2": "2nBogD69tdXcHyhWSqBw2MWuS9MwLfrXUyysGp8agirGmY7Cn2MPnEFjEgzrY4RV1FEN5JTRpawtVuQ7Rx98GtWZ",
  "key3": "3oPttju7c1RRB9dmw2yCXoaAutGVzfq1qjhXTKgmgWa5xxKueUwTQRbYFaUipvsSG3X681Gkrm8jyhaYUHaTMpoK",
  "key4": "2Rr67hiNWE3X4qQCwHDJE2pd8sTJndsvQ6diNtMuusNqfMnM5CAEJMiZppnZLYCHrTNdyrmQ9hBoepZpqU4cgAsv",
  "key5": "4MmPsD1xekrRrxncLPji3PBadcnxpNppdkjnbUVEqePeyv8RxqdWgAFr5P8mDx67wDRUDNoiFy6jhu9dJ6cv562L",
  "key6": "4wKszmsCaxYAP5r3UiMvFJ6hPHw7NsZAsibXYiJwaBL9xa7uDdQobWGDAHJxg7a3GcaEpbsnUV3RMBToWFeMpdDn",
  "key7": "2sr8yTdZMHQCVPrPDi3JYSZvW7QCt3RQ3nH3rjHLHVQpEua8uuudDrEJDPZzGxExR5dfY65UuwNvStXuCKrS5Ccp",
  "key8": "3mDLJUxNVf9nNktX4otts7tq7eB8mv1whMXSdjuJyPucXEyQCgpii6SQxxhXhh2vYWnDYJpi4J5iyw58sEFDvV37",
  "key9": "wZep14jj5DFe44eFGmD6GBj3diMb9XEzhW4hUBfXTdH544ByeHxg1yCwVe9oz7VKSdSKa8vqwbd7m5NtrDsbHf3",
  "key10": "4nDkTeGSpHqsRBaLjti2yV5xZX8qpVVsH7KanDhisrWux1LpCEA4DP2ZQrwNToX9X7P1sVeJ19ogVcJQTog6T68P",
  "key11": "GGW8aXKuPSoXbvx1mMia3fCJVXPAmbqSUknZd3BSzBQF5LgWpHtuv1tPDJ3QiwukUpCWK4WPj554vZRQEfya8ri",
  "key12": "3BvbYRVp7Bp6TSJViqo7acGbcAttuka71RH3FfdrXDzPtryTSuCjygD2LuiNubbbqfDoGW5Ybx6RQWsDZgjYn5yP",
  "key13": "2uBYno1XuqYeeD9yYAbkCwVv5t1ugLeGrvNPGAhtanxmNgbLvNKFHKtmwjg1Bfovu3fJFVTaH49aVH3j7PakKVo7",
  "key14": "4tPiCNFyyXutZdw7a3Tv26rkaW6LoodybfR78jiYsPUFkPVLKtLZ2HzhQwV622AJRA4gfR1wWMasir6DQGgLTsbp",
  "key15": "3qUniBeNkhi9doDM63XC5aPb6NLpMeM3z7SxKJ9QY6AWktpxFXyiJxPDHXjSP2WXQ5vJNeJ68GBCcuPN1QVe4Yks",
  "key16": "41QDTr1LhYTcicSTZwyMXUR1Ku1eE9R22q85yqM3CL5V2MoUARRK8uSpzVQh2yeqkCu9NStDoFd1Fns9nriFvm5i",
  "key17": "jsKCHrShz4jXMgWht2WNqzdQkKdmQLPebM9mesS3W1weo3ZyKHnYECN1UqnsnrdwHoYujWHRw1UeCQfx1ajQxGu",
  "key18": "39otSn3ZAimqQdcyT1dCJUk9mxFM9kZmxkWvxmjn3r73X6GbxqCRechZ6SpbJmbC1LXPVC4X3BkemwWrvyp4GBJe",
  "key19": "pYPYbLaSR5EnH6TEMMQoYAbsVwBTMcqdVAGVPemXFyU11WNSDqHXt9nVPAKdsvK5ooEgUhLUqBVTV5CNWmaFDWX",
  "key20": "62uBc2hQeAxix7z9n8sgeT9W3rn5ygQ3jDmEs4eHqg7U9ts6mg7bdZLCYvgVE8NfqHyLqvnTDjBkPz1hDW35qZrG",
  "key21": "S4ExrdwX99yHwH9jsDD9qQrZF2NT72gAmYxBfr8af9zodA5F3NKJ5L2LRZWAmGHKuu4dbBkG5VDddkaP8YjKDsA",
  "key22": "2sczRKExKcMUSCdf2kTXgpUd1so1NT7uFNPfJth9CnTCaYR9nKYeaKtxk2Gc8dwwxBb7WD3PYM38u5UXSEfmiosd",
  "key23": "bePWQCNFFghUq3VezhJqfQSDHfFqyMhUVGK33BHc7pkMFQrtoyeBoukEtqRMSYjybfxTUkXKvwJ2B6aw4xWjKTX",
  "key24": "3G9Cq18pn77hvTKLVUoAyLkzxBiZicEFQSL48tXoeSf3FsNwi1wYE15LBYWATRhRV5BiCnchD5NL1VvQ8e1WBMrP"
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
