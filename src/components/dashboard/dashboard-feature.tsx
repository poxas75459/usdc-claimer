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
    "3QByeQytMP9MVEbLiwA7ivvCzU3eQpRPBwauiUsYn3SvY1iLBqQirpyjAhfmWKA95fC2tXeihw1kkeUTKRxkzyYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CaEcgjpTx6rGf7CGGUZfHYZDxqXUrcRK47Fws5XppeVNbT4xVkGnkYees6b3d2NDWAeGCjqekFSJAHUi3MSqFut",
  "key1": "83uJyEogcshP1Q2c1waJkdFSc4b5NcwVJRSBaSQy5wrbxo5sPBy3jctttTiR3z1BVL3zWxJ5gBaJQNK16tmbJhz",
  "key2": "LTkPM7ZiZUTdp8Ahh3hdGeYJcDBZWem973jhHVfrKEMN3VhhPywbvirYuS51gBRLDCvAa1RXSuurNRCrpPfi8Cg",
  "key3": "5iDHMnGgM2S4KtW3iFBaeuBqQRRxLZWditCyixk4Uvu1KQj2U497iwZ46Xkbk46saaatHCSTVpwfYT1Npx778Qzw",
  "key4": "PD4Z8bXWvxaGh27s5arGjCmbyPox44qpeyczZsFfLbsQLzZ7Kc1ru4XAfMnAZb4hhVKfENsbfrZvVpKfSx8kRez",
  "key5": "4NPRmjpYTCoYXhLUG9jhADyiQS52eMARzQRZPRSGDEH7JygZosXZ5WZr1rDSDgZecCw4GwoRSagUVeNBeZaYCXdL",
  "key6": "2ncwPPXZ6kt7ZzDkv9QBowyVTxWC8rvBcTKxuW8QudB2bVj7pw2f86yUE27V56HDd18tHMT1d6YsPqcXPwUDU5TA",
  "key7": "5c3icH64YnDKu5xrme813tFPHtcMkv9qBjNgRnHimELD19gGWNNuBWujGV1yuy9YY7xLEJP7uyPqftr91CLnMb82",
  "key8": "5mUmzAZ6wURVEJ8KLWot9LK1Pg31bBjncw8FZ32f6ixXb8RFzXSgvxb5mnrw3DBAbr9brn1fXQEdbkfgXEkkESRv",
  "key9": "3ngFnCTn1YJx4Ahw6voijhqtPea4TqidY2eo8Vrf4HB6YgkPKT6YcTHtamYaXTGtjqXjpsFzjxAUgzY1sLFoaYiJ",
  "key10": "5bwU8sowubXqNrodjxSCyJKucWD7yLYNUn2J4oknfeitHrxVsWphU88Py9UwXwDwe6QSEr9m5oTxD3uyV72fkXZy",
  "key11": "cu7QUNUQTzC2VvmdrJZp7LqT64d6hPMBK5G1kWubgW94EKVdat5J9VXBL65F3BPtqBiAt7iR1j4RQXDrMkKQKmR",
  "key12": "bEevmdnkUDanb97DH6sHHJPVjmz3CjBtUDAVkwSWBE4BSnPGmbh7C6FgBmjUj2NmecFMnk5nQk3wS2CPcyFRWH3",
  "key13": "3hupeJaTQ2Cv6brBnN2FVg3ccRBLXz1PdfwzAYTM3WjsiEJwjtvLxEFipKysG6LwhPc2hpWeJgT5LvXDmPg1UdMi",
  "key14": "SrWjSfXTex4CaZGKhY1sZSdqrYqEd3rkVGxztczDDhHC4DS6kTMqCHdE3i6Q5H7BqtFkDf2VZeHjC2uEcByAnEG",
  "key15": "4TSpaUfq5HxwcGZ46pPmsbjALZ2NnzP8Tn46CQFv3sDbUKX6rbrtSYZpcVSk2BbNgUaMA6a9Vd3zexavVU97bi2q",
  "key16": "Wv1UGXG4PcdfDPnKrPsL4nQjhvBkSf63LxejWwumgcVYoRyFJhg7Pa4DMkbGnxQadtvWUu6E1uWK4cG7pRPA7sT",
  "key17": "4zbe4rXCYLLJ6ihapDAiuNXpRSJpor82kmuvGEEk5q1pzPzudAKqbBWXuC5hfejbkExhQvWZAqaqSLenh4AbLn81",
  "key18": "3Y89KwXdSGaemZqjho8qX5Aih9s8wyFqnihzcSqvef1prXMbn7vji3dr55BTVKmTfhA77s7ht5EZ9sneggqPjV7N",
  "key19": "bLHDdnEfgkQ4rzusm6QJxQXXWdSuiMJV8Z6cZUJ5pw6Wunzqf8iXu42g98NmnRTxbDmhQPVvbUzZfuB6zcJRV8W",
  "key20": "41Y5ZCv8wwZ5ALGc48JxBWoMQNg1RTStaGs5HeL3Z62eTVBEAxNsh9nDFoBfkriMGDevzW536YCzxPbCf1Hfqd3P",
  "key21": "3k6SgxEFosgPUjMJXjcE5WhEGVFHQZscyx6SwhL4LcjcRM3XNV1DtpVGNaiiXcib5gXTSNRmDrVqhqwWsckDPipF",
  "key22": "5hBCxucMXaoWqXGdZkU2YTZmxxh8J2CP8VniuYKFe7w8MPrWeWdUjNMsF5PGQjQW4wYMmvVvT1aomFeTXGon9a9s",
  "key23": "hZy5yKzH9Jugfj28KXneQcsvMHJyXv2DDrSH3e7Bn5JtgTbmM2XPf3zVKR7A26tvDdAiuqn8gxCi5eaxF3k4FJu",
  "key24": "4VxoL1HEEvgbEffwMP9sfF8hXqYvNuMCghkwN7RTsH2HBPLhp62pCzvqPYu9fnhvDTg1kbaFkhmg8VMNdVGQJJ9V",
  "key25": "BZh8xgcJ2Traau4mZsnfGrBbBASHCH353qYgMePofcLfeG26YTjoJbxK6nxeZ2HCdACSpANBt8RJp2k6HjMURZ3",
  "key26": "2G4N51MBJtNDi45pEyBZqENqAnTZpPbbmjhBDf7WyQQ7NxsADKAg7zfCReakLq5nFRcB4Ezk1SYp7PreXbM9hJJS",
  "key27": "2VmpTDVRqGHGZBoGNxiPcoMtptYs8nTeTLs4ujm5gWyKWrRHvYxQ5WmPcRfKfnfwdnhriA99gzpAxMNtPAFVdPfu",
  "key28": "2bKYdAXVbR23BVRk5ZpB2uGXzPccoq1zCXvhZW2xBpjQfN7fQ9cRs1XGbY3dgePpfYiWkPnAm7p6aNWSAUsDtE38",
  "key29": "2pkHMyPjvVrHZfozYYTf3vwDuafWLwBfWKa5ZQXC37Tw8xWkJd4k1e9CERnhpTEypgTHjE7uktFgpUmV1sn9AEYn",
  "key30": "2CfS98WTb3pGPgwWo71k8K1x8eEGWZE6sBKvBNTGNHSJiTTq92TEQuLwWdnmcYhhYZTqSaY8EmVFkULJD8wdhiqe",
  "key31": "5ZcPkfq2JpdvmnSYaKgdebNPer9CDsckhCouWRFsAw6fFJoY56doRAgdan62dhxAXqmT9WZUe15uXBVc1g2UHWFs",
  "key32": "5YGT2aiSPXTUY1Xp1qC62M2UuHzUF6rMFFcckvD2oPXaL23khZRRACx2izy1SvNsTRmeFfqEG488eVmdLxTqqLNp",
  "key33": "LGLvc9p2bpNWNN7tPor534c1UFq16rRvbuBrVDb5R52nJzqvXeBma3KcW3ounguacLxNWcoz49xhDinMegLZ2RW",
  "key34": "41E4qDbcbUcuxQA65hBSmpLAfqA6vbRNhaZLdjQEc5eoW4LTqyYEUch1dWaWJC6DNxC6JT17MazDDgQcddNGyvdc",
  "key35": "2yGCWC9FxNcEqK65eoLvWJNyCvZnfwrd76EbSiZXTDVmv4pN6q1tnFDNSYZ5dVScKz9giZKDGq7yVSgYrwGdQWvs",
  "key36": "31Kus9rFhFs2DpDcC5TxJJPRGVYZZdADwwyV4RY3wYYAF9Mu5n9LFrabVdGScAvw76Xsp1oGeCbLRzmbwVpZXpuM",
  "key37": "3yK42ViYR58uzB5E7F9qx8x4sUTdLRe68Fq3E8Twryo85izMkGQR8iCuqxQfZ9Ptu3E4BR1sBCQqPD6Ts4CS4hyv",
  "key38": "3of54G1xj3dqSinfcA3w99R4zpYjwsu2tuPYCjjuKUPCWjN2VyqcSRftSn4JwPm7jFbgdQUASLoJY6AoS88a5NwB",
  "key39": "422TWVJsKFVN9dp9h3bGEj4D8bYpcf9pwrd1CptYzAKbp9SBchrqXxR8uswm8SDnfNX7Vf6z4mfgrnFo9saMoT4t",
  "key40": "4FC8wD1zZCEwcyt6jwcdRTKCGqqrigqq1CD5H3VKLB5woKYDT2FjTkC8WKWipycg371PPbgkX34phTv4mT9SiUe2"
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
