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
    "37NE1GgbRbWy7GRf5cYyr8gfwMPeMD8MquQXpeL7ZFr9GYCH1PvSMJrCWpjD9X5s6HkNZWefQXoLhjpDpyq8ro1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VLNYub66QZNJUp1sM5UF68X9SUpLhTBRot78Cp4QBxaraGbrTjHt4u9LriXjscoGeNeqPqxdkZkj4rJ1PazaiRm",
  "key1": "3SDwiJYKJqfigTmxBYvfuNR67cagDKtFCszxpXi5CgYApxE7HG3jtBZiM5xhPsHv4F18Hs3JwnyWBa9J4HkVkiww",
  "key2": "4FzbRiSjDZ9SYybe66UhkzTwxYH3rJbLGvftZmC8kNTA4hR2HNix7yuhQzn9CLv37WN1o2YKrTaGs2BUf4378iF7",
  "key3": "5cGDiDMwLGCoD7nvuSMU4x8zeSgMqj3CKQvQHduRuKZmgeKNMwp5at649ZtDQVVpFs1yg2pMVPWDo7xfz9CxMiZd",
  "key4": "DoYwEJ7kF4U5CBrEktYMUJuKq2vs5NoyhgXbHhzZGWc81KUzpYHwVbhf4ihw1gz3gcqB1oCZdYvR38e6KRqoPS9",
  "key5": "4VXBgZU5Fyt1Mqw99d67EA9G7N36z9gieS5ETBathXFMAi135LQfZtTdvjbjPq3abisNQ7tMtCFxxgUvB7xTVaDe",
  "key6": "35XKi6QCH4KQYqB1zfp7s4xqztuE11wLsfpb16TNCicSW3goDFUdWgxXDQGvx5ubu4pKBdymADZ3tjcbQtXk2pgD",
  "key7": "4r35joTp3rPkAuPXpFuvihdWfaFFMKzY2nbw2q8DqjpfEDvt1nmZFi4QfTmjnQRC5NAm1h6dKhsHVAd9yBgf3ttw",
  "key8": "5xBo6mWcNuTMEPgzGAcmwBZNQcU2vJ3J1ncxLw5HBCgdfawbwwUVgRHQYAA4DeNEqy7f45CioC7H4y19XznW9Mv6",
  "key9": "5YD6Mzg8wPGns78mBDeJUt1bYuatsUQvDS1L3Hw4tSjpKHZ8MRt8iVcnNifsYXsRU33QigAyLZhy894cpfwgNRWd",
  "key10": "4rcUi8hrDRCrxSHYrPWYtBXGKywRhn4YVBoYu7n7G1G238w86GSK7LyaqqQVJQEdHyQwWzJ11oKQf83jyo7FDJLJ",
  "key11": "4UqFFxVYBDA18TcWvhHoW17PDimEZfrKp3e4VM6ZMSnLdrV9hbw8F25jzipN9WimZmYvNF9Y624CaNsWa7zPHZTc",
  "key12": "L1iLfLm5K2X2UQob8t6WRqBtyEJLjCvy4AhbbXSBwLwmzME7UFUNpDdfYwWBPVyx5PytgvAKencZnMHsfLSWBqZ",
  "key13": "4wpY5aTzvm28EXw3xqMtE83YcRc8XuKe7cPLJaNa7wjSNGetXKdbNuLqvDzuxE3JQEhdyFMkVMAcr4HotT9MPjEF",
  "key14": "4LiYKssiBj8J2Z5wM5YVKDHyNdj68xstu4MRQieR9uMaNVJTMARMuTe33MCTUvQ3ZJDftNCoosQrVMW2ScwNedqx",
  "key15": "5JWcYPFJ5p7VETa3RdiJ9UF4yhFfY2BdLATMorE94QHtGefECi5zFxCSbBXxJ9BUefStBxcrr7nLn3E55uanVerh",
  "key16": "tvn9Bdd8PU4qrun98B9Tpn15utq6LgJmQcUJBrvJan6efmHDwe4bbXRbMqpPiA1L9oQAQ1yUhes4dUQdiXvDtFH",
  "key17": "4ZNHMRiRbBQwHu3r9YzY656Qaq7KSqay5fEegtvtcwWkbcXAEjdkzKnE6kh94K7L1iNpcgCX3cFK9CaZCFb7TDhk",
  "key18": "2ZCiCAA2tLhNWzJbBXpHEUprrTTsTYdAQdxkJTTFsv11Zje4oNQmU7q2hhYGsahx3FeUDkyUDeMYCKUuxfRe3FMG",
  "key19": "yBds6mW2y1ihBwCj2L6vDmRkpMLgD77A422vhjbg1Hkh7QCnGgADumw7ZYdZeCnv7Syp7xb1fGD5xeVNn7eHidp",
  "key20": "35U65345ajJytY3CiJeDJvTCvjQsPF2muxu7wocPxcr8Kqiyr8qnRECg2ZK5onexFFRqrEA1YHU2dHqrARnvuTES",
  "key21": "32H6V5ejv1k9jKX3cYUFnRhSpi2HBpn99awqtDeTCGajg7eJ427xASqiZzdXKFtc8ihVG6yMvdGTnovb2ET1nbAL",
  "key22": "2JzbZFWYx9g5XRbWTWQ6ZovJ8FW9Af1XHt1GtoD5YpuCy68QkggWcc4mNjRz9X8ASZqhUfJWNzveZN1S1R8RnUPk",
  "key23": "63eKEjXGzk9hX37YKwGizSybuxx16minBa3HwhQ9tKdVvpgJX3BAKyDWXqTwqe6Em17tbHBzamDbgPkK15jo2RzK",
  "key24": "5w95X88UoMtEpzf7aSJzdNe3X7KVfvBxH5sbNnXTUcMXSwuphr9vwnbU9hw485B39ARw834xgsecphJXAdeL2cmr",
  "key25": "2ZHmR5cNjSkpY8g7L1wPTnrJNPeAN9YZv4tNgFt7czrS51ZoBdYqUDadKh8Hmg6AHv4Q73oaJoG5AshSxDpQQP5J",
  "key26": "46NbaXmp9vroVxvSTrbqoNwRTveiaR6JApZ4kx5GHXf31edfoWQHVfBsYWRsKbVoq87bVYf1qnezbhmrSCAk2EKh",
  "key27": "2C5oDkRuCbQdyj3WbdHVPxziVGYXuhbYbhicf3GiwGFUcTZoY15YbBgCuug93gwXPZxVhKSjTgRjckKEfdjSCtEm",
  "key28": "4UWSh7d269GfJc8ywu7cyAFgUJLNH63ixGpZ6mf6YGcePYTcgHjdwZfXmq3FuoYpiyJ8NibyzeceuceUgoyfiHj4",
  "key29": "39X1q1sJwLzwAkfXC7WFHt68iZ6dhuccvLgUut2umSb1VPtnAovU3KuADstaWAW13DTXXwn7ZwR3wonuvjhkqng5",
  "key30": "3jyCYDML3DFYBATTZxo7Et7r2eSuSLtyybYp4ejp2r3zFDZaCh5znLidoDeAYV6b4Fg2qMyUBE4kV7BP9vakX1KY",
  "key31": "s69Lzdv8V1tfYKC5hMfgHmv3hAA2rX62v6rRtYDMS4gvfXxedSUPb2Tx53a18cmd7GWmfZRzU5P7bNkaqJSQTnH",
  "key32": "5TcGcWEvWUAuWN4E2MJqFRMMZspC5B7yaWynzD1mBEZNoTUB9dEv13Tkn9qX4opkUJGg2B3erirp67VLFPtyTbQR",
  "key33": "FYt8DwGa8DRiKc95q3YeCUATk5j7Ca9PWjXDVxj9UEMt17DnWY6x4TWjT1xEtFgpvHdFSmmatJvYrnT4RSRpvmV",
  "key34": "4rLTmXj3T51XMHjWveNiiVc9DmSpKUWYvrnV7h1THxDg2Q2Ufcbhw2wMsLVTD6sigQfAWzR2h1dBjgBLyCTsPCED",
  "key35": "3bUmw8CkUZ7pTjH2oUKYbJr1iMqc2HiRUqn7GyDuMzPTnrH5tZzVA58Qpw9Uc47Yh3ZWFSejxdSkzyfFovqd8x4p",
  "key36": "33JzN2iFnsaWkkgyiNwp8gGsYUwJyPSzWCQRn45f1uMB7CunJN1X1eerBw3MHGZ44wvQ3hs7tGbXEM1c7mYScvEW",
  "key37": "64PdBSRCouYSrSQNTMz4jzdXM4Nb2LBRsizKLcnNTFjwmnMAzSEeZr2w3jk9dt7cWiYcKBtw2wfn6vevLwbin7nw",
  "key38": "5QSWYWT7bLj37Qm7pKmNPDBX7Phy2LUDVQ3a21fk3D5Gh976JAtDWennRVdUZ6ocSc1HW9seyavVbTeArNSZoxix",
  "key39": "59tfWLwX2Lsw8vmeAQM4DVKjHtSXEbi8RgBz1jv1UCUBVAno3vbKVLy9SnRoiSEU7EqwAF3ffAHMjSDbdUUARLQf",
  "key40": "1f2qVgFJ4LmQSprBbqc3Cx7BMvDR2G3cBrzoqbTLnBRtfiKS8fD29ywjP2zuKwxCoomwNEuLYpC3U5aGVLDQCrN",
  "key41": "2u7wuco1njETi441bami527P5oYeL5yXg7SwAcVWTRxhDZjY6dSszAuWHXLBaubK1PTbf7FLadXdhRzWWc8xDk5w",
  "key42": "4LUoJ3bKT2xjin3XxEe7sKiMHR2qACZVjTMZikjsZEa4fhbN3nJTPMPx49p9Dbuazp9hLxUZ5ajMmBgbWBjRwGdX",
  "key43": "s8hZQrm7xmGmACamdkGVyVwnArqVF9D3yQmjMzCG1qE6gkSQbYfAwbBDMdWbAn9XxUaSm62vMa8y6gDVMm6xhV2",
  "key44": "2qv66NU2vPBTqerkHyywR6ZKDWbEMqTYjX4hgfe7oYDs4h1CdZ9WdvGtK9ct4D71mk3YZ5D2ATXJMGTU5wUZnie8",
  "key45": "8pqrrVSE19WB1QLsHaTWUxqgoakqBrhLAQKJjuWPDxfbsWC22MmbrMAr6nMzxqNC2m4KwWgEWdc9cLW9hRrALaR",
  "key46": "53EMjrX6SEoxAAREkePvNCXVQDCqrH31VUUJBLAuxujf4R6N2TzNnYCwer84W7BwG3qV48EJ3xYWoAKAWyqETiRQ",
  "key47": "2nu2qwNMCAXnKauqQNordPEiZ4zG5vGQn7Vaq7mG5MBM3oBqpUWwVUiDG4XWBoVDm4zuu8eSvmRC9WSoCV1tdh6s",
  "key48": "YBEhPXwG5SC6o3Q71p4HPTnr5EBd3kkL9QSXSLaB8GCEQAdKVc8coxeW1gqXGubH7cgCLjRnLg4VYFV2SLnskzx",
  "key49": "63YBuM742Rgc44WCqkVSHKTYQqeGuFw2bW8PyXQzseyzy8ots24Kjk4DRPN54JG4xvgbMvsH9uSFq9kpLAUtaSPN"
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
