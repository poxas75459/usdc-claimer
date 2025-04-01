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
    "5FBikGjJ5McxxgWzPSVKknFfX71EQHNW2UpadekSzcMSPgjEjM8Pcu56YWSFjgT2bD6aicz5A2tvzQj314rxmekv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66iz7YheFw9V2U3QJ62rGDUup4J8NTZySDuAiF2p4sfAuYTrzPzRqboahvNsJKc6W2e8eRQB4keJ3zKFcDapNktU",
  "key1": "55YRajRG2g33Uu1AUJNTGiMFUKrpo2CKxYspfjwZR75VbMcXnoikhExLNhsePZMD4vbbJdnn8Sw48jwHwwCDHjpb",
  "key2": "fpaHU9BP4NqsDQxHejHVRRdd2ii8A19FaxiBPxJM7mTTcpj6eykmDxAJQfXwd4pkN7AuiybHxS7DtLxeTkXSduy",
  "key3": "yT1SKi8We19fcVboZjuS5VvatR8RzyTvuigMDGRKU5xP8nQnHtceuqHT55oTNDuviSDtrtoq34HMv9L6H5o9kJ9",
  "key4": "4TUz9czQcdvrQ6CE6NN4kfEz7kMihREtQWJ9viWTDqtznKNc7fiLzMxvZFJbvrYuaXuCq42NZZCCf2zPFLP7P8kL",
  "key5": "98cxH752Y4dhyzNEDj8qxoWRYDVpBhGFMoBsrC2fcpiEvN6x6ZbZB1CWJjkzP1iuxkUDpTANx2hv7TnB4pySWLP",
  "key6": "24VeEfsmctko7s8AvBhYtJorsDuSkNE8GUkGH41VtHBhcfqW25GuJfiS8WtnkKh13Ln3f5YVELRhuxR6znxQdrcq",
  "key7": "4d8mp2Dd5eTpziof4mkXjkRtqYvxK2kG7HFLnUT5a9XLCn2bN3EyRK7A9e7jarLi9NARZ9LJsXHU6mZqisgaNg1F",
  "key8": "iCLkrCpKsR3zH9ZLZHZcQgP1eeVkwqvqTfNJVguqPAMtTxPw6g3ppRBuexqYUAwH7Qi4erhhtGfKc8aGZaR4YNN",
  "key9": "2S2vJu3SUuso2TTq2otjd81yceDZCRA7W1QEgbiWhuR1EYnBiHe9SgJruhUfyzfEw5zsryFMRZXSpPVhrGe8wTxo",
  "key10": "3w6HGWG9Bj7zLArC7T4NQWfaxGobSYx75CRKeYQDtCoZ2YpDqZ7gFoXuW16vvGPhfxKQaPRbdMa2gW3LxAixtwtk",
  "key11": "5YRRSpegusvab3UVjQ5NtF2BGCfAP5FFV5KJYX7gToe4PT1XZggFVjNoRAQ6gGoTLBWE2Fe6ZBKUxVU8rdsnapcA",
  "key12": "5ScCxqUiHMkwkfUvr1A9YHvpD7stRxf2iXrzdQqXqpFsVWvbUQBv9zLvLAexqhnwDq5cqdG2LhKjX4VSXA9yiRDn",
  "key13": "34HLi7mi9npbFpKEaCyuitwYVi68v6UWWUaPTPmbKvMNCpivMpXnXHN9JaMfhiwLowfoq2vrTaRckVt3K2A3BeDL",
  "key14": "wLZyPpW4z1MJzaxS1GrzKyGwjdYftvAk2MZ6oaeU5FVqNYNxG64bezHSqEmnxh3zzfnUCcvXDM6vAsA9xkGDzm3",
  "key15": "3wkmojZBBRD4TPqUMBxnW71ZWssaap2cJVm9JXtF5eDP5EkTyNMT1nXkEwq12v1sbeN3xgnsuAEyiXzUVuyjdtmq",
  "key16": "4mSzV4BMzqwMyLapLNjwzozWGJ85XBfJYKEZDWXTF8PADXSFezbzsAKT1gG5uVWC5QwMtsC23FWP5fVeRCJmAzu5",
  "key17": "28SUQNaqJpAaV2Sf3tYT35hd4eKpTWRJzEau8PJFQmAtvJrAp8JB5QmQuLLs7E19z89TjZEhmpSz9J4v4ggWNBGs",
  "key18": "387nLUW9Jnzzes8w5UQkymqGmaBQ4psGoMmNGAwQyoyzyf1M8SrE1G7Ag7E8T9ksXHx9Nu8U68LP5w6DHBumghpN",
  "key19": "3K6FPNsY5kMpGxRCQ4Uv7Vsbb3rgyp72eedw7C4jhbV9BEyaAnDcQ5eMhYisZnMXHcwwF5MvXGE4QFtQTrEEsr47",
  "key20": "2Ndy1M4KxPuoMcqtuPHFENQvyKzbLnbB76MQKrkSzedwfMcFt3STBS8kCt73fWYk8RnrJxRce4dAF9eDuWP9xBjc",
  "key21": "4f4KuTDJf7QWhbkUCAvybvFyx2yoZEq1VXNBxCp8n4pkGb1mFp7qQ9ZMB8EpSoxyEwknkm2S2vu5aeexFkJuzGV1",
  "key22": "fkzet63SRn7iWNZsj9JpxBtFNbQRSq3yg6oqRLv3ZbSrsWzbAfrDnHorWVKjD6HymTes2F2iqNAfTvZVRSsH5L1",
  "key23": "2zdqsJKf5pLi6USBnYJWPBiRTRnmsB7aXzvdvoWXDaPBmarQC3xwGnRcGAUi9WqqiBV7F7BbzdRJmpcTTuDmz1dn",
  "key24": "2gV8T8DjHukw9xhZwji4Bg5VG1iSsZVAfGJNKLByp1oM4ciyAnj1jy1mmiQ6e8cP9GokUGwmeLJc6vvET2mQWnHQ",
  "key25": "4j1Cfxd3RLEGsZjAxSTmPvk5Ei4fATnHzauJGfFb4b2r8NDXjqCpqkYRFi6ejXneFF3C2i4j4kizBU3TMU9Wdydr",
  "key26": "4646tnmgcaJKYYr26DncuoPSUYr6zCZVYjE6YajxXRhm38potZ6YcPniqaetvk64AZiDSkcUAavTwawcNMNZjubp",
  "key27": "vwaWfVGxaxP2Rg68qNZ2KMrLmkKEqay2Dktjnhkg45HarL8aEjCXJ1JhY3khw7kN5QywVwMDBK554RRRjctbFtx",
  "key28": "5RaBYo2wx9fNoS6BvRqKr8aStx95EA7wzKEjTfajuR4VAd8dr6M47TKywd7yD4RugvfoTeKWLXdfE3QY17qRwrUk",
  "key29": "3gGC1YCkXANWDEDLuBeFyGUDX3jW7LD2TsmWftWe7KCj1aCgXZa1XNsuhJFQYomXoAf6XqPQ847XyQCbpkroPBSh",
  "key30": "5C6ctg49qpzZFcAasydn774Lcwzmws42bBLzq51gN9oMQ93QyvRbU3eNyKGNEgSwN9ZWpa3dB8JjZLrwUmuWpww9"
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
