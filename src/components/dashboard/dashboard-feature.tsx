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
    "48wdjVPKDbgResaYQwvPkQoKEvW2GwkLa3m1xixvTvLdXMrpHtrCGvgpNAgUSEvwVFbNBkhCpHqJWwHrF9MfAh4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hcE7Avj5SNdgbVC4ozHz8q3MgSnFKJH4hGqJp8t8fAMHCMabZoi6tkUuGdvyk8c56krYDmYvpdGBERiasQSu5tr",
  "key1": "656BXU81LR1dfc2WGH5fY7mr9PL4fiBKHdr4T1WLn8nSMRB4vkXv9qgoJzXgnzmQPA5DZJ3NgWd91tvv2vXYZoCU",
  "key2": "4HfG6WdcWx67pu1oZSGjG6XZTWjshFQW5qYGh4iBarR4ozKK1Nm998DV1sJraudSjXAgM6u9fjc7JN23emHHBY1q",
  "key3": "2QFWGQVX3oQSbzHN32XCPTykrzHxGfif4SF7DWW3HpsYLVyJU8gX8oBrMq3euNUep2s3nBKyp9w4quQjrVFHV4L1",
  "key4": "2m8eyCUyPEx4p4SVEAtDvGSbRycUWhVWEXUtADi6HcYrTQqJrj7uFZDYTwvwSCSdahNqJF4PaPLvPnSHtxzAPeBB",
  "key5": "2UZ2e297TL5XUHPoTNRGywBP7dPHXRVXxP1JUhb2QkBCYLR1rWU9djQS2PbQmif7ooadU4qqn7EsC4zaBFjezKDB",
  "key6": "2DmdMpAXpBTqN5R1XCGDLyTxtthLgHfgiNFGbFYbiztuPzkzm17TnpqisjXE6WHqL1gqr1rxsg5GvNKTprqP61zf",
  "key7": "2CgCML87hZR3nVxhnTQ4ANV8edTqUWmJcwPdTf4Q8JU2vzzwsrYBUipW11AArPri6YuMFcHT6Bp34QLXCmt1ySo",
  "key8": "33JCf7T8crrf667gTaZTyqsARejkZNhiCH5eaCyXHZpydcJ6B6JrXDjSMY43FdgQmM6kPZq7GeUn3rMGPjnS84Ka",
  "key9": "62Mer6PK6NAx8LCazNuft8VHgz73kL6Hnsm8x7NEkr6dasDPvPAQ3wx1vnN2Qgxtcnrw1DfW8PL3n7jU4vYHP7UM",
  "key10": "5iWwHpMjHUCo7PLySnnxGWaeS8qFnEzRZ8MYSFS8X4LM43RPU9ipjo577AR7bTk1LqbyrAfmS5BdvEdi3ADE4Ctc",
  "key11": "3BsL6ztd1Ldwdr1ijuTPoUf7R8cumq9idev5669tb27ymx4QcGPYZZEkzEUen65GC1ssCrhkFocnBZ3W3BQwpp5N",
  "key12": "3GS26MhgBx9yvZQeJqbhs2nr5jnKbUfaLDxiutRki7ynb7HxFfCx15WBAZ1f1KEVQemcGPfBaZpYPeBCJPD6LUqf",
  "key13": "2ULGwzCFPCSv6s3VaZ75uoAgUuGr6YrpGGvUyLbjynUXaD1frfKyzoZSN9q2nvyBfYCrSwSkvtqDkZrcbCXUUVsA",
  "key14": "4jtCiCqjyy8ywGkgtqECZGFGKxix1Y2SEFn8sdySiymtP94KSvhR2h3XdD1pTgqSTeLXhpRz52SQ6b6ZHtRSneAx",
  "key15": "3Zxqviiqvr4tJJQrmPx7caEbmwxxA3WduH7eQQXTbdebR98xbeQ2NfnRjME4yg6mqrjNP1CYwnevnc78RbZ3encJ",
  "key16": "3aFBJgGwv1T6A2KCsYrHTGzEECBrPjDeXD5qxVBrXfd2AwAb4qU2bo8k8sc96Y2pytegvh1WprazWs5eM3sJCNPD",
  "key17": "4MJiFr6rSCZKDb46mQbSWtfQi4axnXf7uSagpdheZhuANmsWxkYwiH8oAALrHad7zLfpmymQQpYvuZpwLajJRQVW",
  "key18": "4GyRaXwefJqhQNuRJdvzUUw7UpBDPc71foJq7W7U1LdbkdTzYBbvCC52Gkhu3Kw3RgbxZWVMUpmsE17BUCQKHvjJ",
  "key19": "58X8pTS17qgaxiehpCkPgZGvyrAiyJ9HjNUTqFbWYmKpByvw9Fe4CL2DnzkfZSjuHo3nwdn2LuqFPERArNHDnesL",
  "key20": "wqXaKPVTbbHECukVK5fFLFkPGux8GY9RSAue1M5dzYxpsxHFjquKWHjfD8SAxN4cQHyA96C41bePvWahWkV1iFy",
  "key21": "tyB1dBfeUqR81kivTRPE8eroQ2pidPxhYo5KBJ2xceSHzVWDM6qzGBgqiQemjPyedujWSviZ5t1ZKzuBrB9zfzY",
  "key22": "33JFoY92GvJ2SKhLj96ZLjHKQ4HiF4tPVArSRSRuNtbWmadiyD5F9iE8hRRWxJ1diKAXgfEyzXcEYHccAzGdZKP5",
  "key23": "5rLUXV95xPLriEHoXWxnNehYnnzrgmwtMUbq7jipntvUwpcveNdvWL44XMgbwRx7sQFcXt16Bt4GyfjFGuiv9aNZ",
  "key24": "2p6g37SfxwNTmou6KPHVAuviDQAnNKu1LLeL6ux4DnRfnTBMyG8N7ovQchbhZZjf1rA7kjGhR8bKSbQQwYkmACgJ",
  "key25": "xqhZDYaGHeMeL9bbXNocsrEsfd8ZpSseBPiYhsVtndxwNPq438M2odpeFEtxcu1xEH8Kz94U2y6mqGLL3RbhNKW",
  "key26": "3dKLRA6BoVaDh8h6Zyk6MKpRpCDnzsToPpckDAtnHpWTbsGPFYyPNi8wUm3QEdffbRzJdLt1gfCfkMwZxePuxgJu",
  "key27": "25GBqNbvoT9FEHu1cQJM8GDEUjxwt5mw1QrcQ16DywS2PKEnFpbEvBhK52esdN8WN2x9GhUvzsiFKcPajagZVnQM",
  "key28": "5UmGSpyiEPCossqgGB1fwh4JtLuFHYnbmgrG8ScBt45u3MYRg6gwxwhSSnJvVN2m7w4k3JsjeSXdPFntPMsPR8Vu",
  "key29": "4x3hsLuxW63ERRwdeZbYFy6hp19eKooFkCATsgsxVtM5EVNAsdJiMXfdzAcbQr6mJ1dEsp33jHxwpKdttRDQpCF2",
  "key30": "VuYBK1guoCNmaL5NwncH4cj1dUQb3gYdAnUoExNQxH6nSXkqkzMvHAn5xoPMx878SHJG6FwPU5ALyWJG8Jhs44B",
  "key31": "2wFtaREKjszVe2AWAPgRNAUTBfrToouQFStWwc2S5jB8wuSrK4wwf9mkGBXaMKyP2pHavLvqYmwDrjHjYg2H3iwL",
  "key32": "4LUGHqrr5UJHwFgbFYFBgBzbUdKbCV9jJQrqEfsaDbWs8g4wcj46NQjDfL9LBNifUzL18qvxiS1jRAGL1HJ7P3rq",
  "key33": "5W8bUyqey7JeXvxovR4mwimc1ctBAfrizuPMKgZjkig8QFGdhpRLu2o1J4LAgTumtXPWuq4WuFd61TFTjnqyQkyf",
  "key34": "EnoYyLvsiWewDWNa9ojhAfJasLMnU4ySs5qQjJgukSsYt1PXFToRbTotjHYs6WesRoDjg1QhEkBrBaD4pCh2Zvk",
  "key35": "3KvDKCd4Vd5DY2ngsyGFkPLhyiRHckJKv4X7KowcpzY6eYCasDpCMQ4py3SXWwNzcgUMKo28zNQwfFr2tRpGginn",
  "key36": "56u5VMScJgy2v359v36tE9hWQrvKPPfegvCKfv7Zff4DD3rDMKQXxRQ4CdVn4MyHFxBJznekXasSXntSooyqdZDe",
  "key37": "stzWrzWewj48Cwk5ARKabGXDbaMzZ8oj86e723ox256Wq4Ev4aFd1R9AyHsTtnGcEUQG6XbmUitxuNjpqCNCK92"
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
