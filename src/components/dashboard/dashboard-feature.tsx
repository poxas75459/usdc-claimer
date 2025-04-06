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
    "3CiwnM16bRtjzKeGuCz3zSi9tsVcKvafSNUoaeymMchMvcMi9iEJvUQMnPrzVcn59x5HYiWhWZdegXRBf1Ztm2FJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kKT725MctByyDVPbBZJMxx8eLGJZKwzzkjS9xGQhzjSn5R1Mk42aYXzuHtHQ36anGckRNxXqDC7ki12312A9vHu",
  "key1": "2txXMDchRtNQtj6ijnPQrHcaWoxrFHdhCEuvkdEyYgSdSMYsuVaLo7HzGSKb53CBuz9PhDiBD3sU2pmMXn4rJnS3",
  "key2": "shUJApFKv7y3BYhmzCnWBvPnFjkFQeECFLzqnDdnqHz2eBsa7i9Zzvqj5v8kuVCKKBth9sm2Avhh83WtaGWZ3yh",
  "key3": "3XZWxn9Wq4ZHWUsEbTuEKbtv6npmtaU1scs7y4HNV24wf9CpsATeiNzJAty1Wr6QCj8zzdxt8ikpCTBGqMadZiFp",
  "key4": "3zdPnHsfm12y4TYxJiQoF2afm6FLYf1QzuPAW3Px26Zb4xfTzvQsV27eFxRgwQVqJZnUqSZ7LzjPHgTZ4sVHpK2a",
  "key5": "1tyL83GHMpmSTRbP64HuQEDWZ898nbn82P74x8A1H1zY6ByRwhAA1YUSYF5D3au2aUavVgxmAUbskT1GgkGCoDm",
  "key6": "TjrkmQ5yqAqoS5cEDNjJwhgS3UwrJfky71GTUhjdo6kaoZwkYK9McreNWUYfYStzHBnaFNkoBSHCvE2GTxzLSKH",
  "key7": "51BCQe7FYRddFVeZmAJhaR6Q53S7VXCCN66gfnm34wZfdTXhtZxS9uaganwyVtqE6USx82ueACmy8Rsyrq5EQQJ8",
  "key8": "2kBhWz5akktsa5NPsU96Y7TLtqD9p2ZuCVhtHCoNNueQW4vfK8YdzhT1bDRxCWYW5SEFNuXcwhw2YC6f9dhyLEsk",
  "key9": "SxNWC1tWzJ7kBnEr12rTNzNgJ2ATzHUV5HUxi9rhRwssYQhbEmHCcZuvMBURhPZW2iyVqCnfaqSdAt5yg5Lf29J",
  "key10": "3nbNvsD8bMC4iGXu7tqKTkYAEryHFuDKhCGVudKmxDFZCeYneHm68erSVNmEnz5ZnXrPrGhPMqX7nGiJqR6621TR",
  "key11": "zJei6N4SikwKvhEqyQG2zy5ywRQCrosabv6N8dxXtPqVPXpm9AL3CFFJxMLr15avygrqKvJX3DtWCNZFagBzk7y",
  "key12": "43PZWmJZ8PtV8E7VU7GqECp7WhcvJTrNBMocFSufPUwvTv5kKP3DXDMhjzrAFAMnf955WqfSzyneAtyfTCJdHXT4",
  "key13": "My1gADLDZijxcDqXRhGDRrC3hCqMtGKAMcARjaEVYpcie3sQjVPRcJkB1UwzTnoqWU5M9w4JwJN7WUZ1CKyiNRg",
  "key14": "7iqATwRcXSnB9PS7SMXDw9ZSnFy38aqVTod6QyPhPykrYX8oQEtCpqWD2q9NFaS3YfADMjthRdQPLNZvcfEwEC1",
  "key15": "5vrmqf6GHLyAUwryxCpDu4evwxeeznFtHBtsbWqm5NBoHbjF3SAHZCT6t116qqSvDTZiJCd8VSdPVWfr26z6XEjF",
  "key16": "4QRTVi2f77ivK6CnmXzzaZgdjT94SaqLdgGqP76rcxzKcwTqBVLY7RZBCZhBxta81ZdJZb6JaaPwLyaZEGa3nFxf",
  "key17": "3LZR5H71kkpbmvRazhJBX63mkQ3bBPNzgqB3SVkmjSvqyyyi8qQFbtrojt31B5t8ygLhTsTVDJzCN23iBEnyKaKy",
  "key18": "wRg6JHDknykLzsZJ1UzURzekaydgkuCfr1VgRo2hCsKyKy3C37M7xFG1yC91NUUH7cR7mRYy6HqWQDhjbydWBTT",
  "key19": "n8JfbWNesHK4XJVUUnUDXRWaZrMww9DDohZ2MTq7MrkhYtm9gZLNqyqz1NeMJKh9FtZKvoqakJDHUn6PCcFRNyk",
  "key20": "3uycyeXKGbtinbRtuVFCKzQ6vaeo5ECavGzvXWiV7orDW8KqT1PQR4eC2hk52y8uoJUnLvf4TVBf7DfzCvEJk9xG",
  "key21": "3pMUUuBgbNzhiYRfXPs3Tivm97F4PucFprPfHLTgg1U3tTnvMFGAxj4trjsncHSnMLHbmbuqdDRHuN4UALLSFKoq",
  "key22": "z86wXabtYpo1QyNe1QGYDmLyV82wUTjUNWcKkxTHCUtKHmVUjTN1hxHoTeAwDyZy5T6FNqN4cSKYjci2ekpAKny",
  "key23": "h5JXHTm7kukCsjA2XpnipA7zPhgaTTvLEoYizWFCRnPZW2uPcoCJBoqa3iB8GQ9gdNBHZbmNxRcQuhTb5hVsm4D",
  "key24": "4qQEhLkuz8ycFELAqJAvqM5khoq2BsA2g5yDP6gd5cMFNC6V9dJiWtR3FiyYExJdAJo8XDuesFfDr7uBPB6ZEcbc"
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
