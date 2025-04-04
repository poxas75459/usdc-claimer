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
    "125VBgk7A3BJzE9JaFDDGk8mASifdsBjyp86njKcdp7bd9p6E54sTgFqL8fuC2GEft3rGtJTLopadoeVLF4HfQip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TMMLeunARBtcTJ84WqdAD3Z1ZdWq2Pyu18G2QzmBhC3hhmycmUUrKsc393QDMmZ9nQQENLmmp5PDaRq4JkUKJdv",
  "key1": "2BMZy9q8TcwhvWAK18Chy9aa2g9HjZo6moJDJxs8dbwPEuWwxYyXfVBFzYGD3wkEhpwoTkhPUZgnm6CJ6eh7UD2M",
  "key2": "FDtKTeZqQTtRsAXCLh4t4odhmztNiBDQBLCkNBjFTe5uNASJWabmsX5K2PnpDw5pej5Wyjj9dk9hiArBU1S6s1j",
  "key3": "5N3FHMetZ4NFWAjC9kFSXY6tDW1v2TSwtvD8XF5RN9z2pdZ2Mf7sC4xXypQUT17dydb35dGrVmcZ12iFkKR7qbWA",
  "key4": "4c9vYeAvqLW63THQGfKbt8utctAp98eYjTFRoUyjQSK4Ci5umU6P27u1km1UEMouLzxD4BqPrH7uQsoapgbj1Q3E",
  "key5": "64XpP53B9bd4NpV9diPm2dz89e4tVidFdc6cpXngjzeszW6CY5LcTa4WgdQsicTqYVbrdChr9RDfk3sNJsLtZ1iV",
  "key6": "3VegPngJ46FTToSWPZHQSdJTCFGoiKm4D24A25Hw1yYdFVc3iMUePosrpY13HdaTQVUrhJmQovXCfNvazf1LqkJG",
  "key7": "yGPeucYPkiuDdopazbFCzV4kwEvARMCCrBG6MvZprU45Zm3G1RSyzziZJaC1HXg7cCZAhrmZmW3uzukPhLotKsF",
  "key8": "2dSRVQmtDf6aGtySQoDLHmgXJeZUv6YtJ5LqWnS9hydeWAmyoWB1vcnWtHkEggGRrvNozNcBDuw75Hyzm7NPNEP8",
  "key9": "37c711UQST39fkGFqocdHEDLnQN6hfMzpdhcFtojFseZzW4NESBDhkZFfsfVxGeQR9T9suZo6bzPB6sz91x1fiX4",
  "key10": "xbapYbt7PCjsuvYdVKABapTcbyW1vwuuHG2MQhbaUhDwct9Vz5W3tE9f5MMhwFiweyghEGx4HQqyvNmxkJdyEQw",
  "key11": "4xrQ18x3szMCKK2w2b2to9Tmt5KFt2E38j8pz7qm5wvZ35gaSwsm4BX9tKpzVSPiXnw3KjUBAWyAqXV534vmSECM",
  "key12": "4bekkvwejSC6T8nPkajdjnT5bFFyQ2wWd3bFtQ3woLNMistZJpZhD9SBtN5hBwzswSDkiJfYgR4L9WaUzFEQUVCC",
  "key13": "DmDB7SZiyXRuPiNRfiaZcYLk33UR2gqjcQoz4KrpoCGmSMQDVz445QcisZrXh4dN1zt1Bq2F2r79mYEb93BYSdB",
  "key14": "2WiBkiAkmyW75tCBV4HWkubbNGMUdJf2yJnphJwWLSNQrrVuiHj7JHhQ6KFnVyhFApXt6VbQ6vu7VYSvD3PPnwxG",
  "key15": "61i54ejqmRzmi8nVw1f96gbTJifKrzQiw4Bf4DWHNLQBADC3drJgznFKgwd2XMmHG89x4xGTWtqoxveNrSsYssRv",
  "key16": "2KDAqArDPVDpzPDY22XrjoAZ9GKSLa2rQ5n89zqG7HyejjHaXX8UX4AMEouzi1fhBn4gewUkQsDTVdyvcC2RBkgt",
  "key17": "3QqcNaDAfSafdrdBMGMeyQFVihizB6GZJEdJEHkx4nnz78tMhQ8MzrGpFvYMcimUDYtMSWqcBAztntqGgo7vkY9R",
  "key18": "3WKZVYY7wRw3Ye1osEN6uoRDLLPhPxCQidNGEUcVa2UGEHXaoHkidcARMCAP7n3WfuFoDQ6AxxEVYpBo5QexTbBX",
  "key19": "4R9gsd7HNdtvyEEVgdtE7iqxbTikKyfqxUhzbpQ9XKbitg1AkoMDJC8nsAFwFRJJ5ny1NM7AeLGbn8owan89m22F",
  "key20": "47iEkrn8vpXRZozn2mtUBUDfwX6UXr3B2rqsJtsEPEVZaGkdJ2iqo4XDBx6FGXcTYeDpu3vcN9TfoWGcuE6iyht1",
  "key21": "XDBt8dWksCsYm9g5kiMRU2ktB8Y3d2ny7vqRnTz65L88AqBXCKkX36V2BJ3fniS3PgmwKSwEqBohDSwp37Z2CLJ",
  "key22": "36qxBGum3dy6ePjp4CYBP1cKGPj6XQNmAHr8UjKnau4P1pxNt8ygBmpw3g7Han6X2nXFDrxDu4usaU2TrjHZbrQG",
  "key23": "3uAoXgrSW6ckw8ACh2u4wjJ2bgXmyA1Su9CjX33o7UbjVHY33XbRyATsU42Xwrh5DyWbozqDhb37845ECgYSi62x",
  "key24": "5GzfzDA2NoZ3BjJDceKcxQ6mKezANR2vjDG9S98bvoEnajCwGjyYyHqKJRyzsVbNG35cX5wV1JphQyrAVMxudw3x",
  "key25": "aPS5aRsNPNyhQUELJEe47sYcPjSu7RLtP6NXqhNeZtRtV9WSAgoPvwYesj7rFhVD8xpAASoQbySmVBYhTWLC3gP",
  "key26": "2mogGcrjPpUWRM3TdZngi1fyaNktUDN4CVpcxZsPDd89pPwAL37Cq2EayEQjoQJwqMujxF2dbZjgdqBrmjf697Yh",
  "key27": "3apzFvisDuaYofDMRZURVkzRUXVfo93WzyX3j9V8bXMZYe91Kq82gt22AgFWGFPR1wckpEHTP5KzjvZGFcNNQ4wU",
  "key28": "5qToMLgpYHPwUF2DWRQReXHmEvtN7kxnsXs3nGtBhUmaq6vscmDyaByDiT1PFSpX639S3WuZaUUeuu9f2zTnKAJi",
  "key29": "4EJK9vKidtop5Lt2K3KbuKRTSXxKpc2twGDZtvwYkvRXHr461WmZ4uRUXXEXx3cU8f4smuvLt1BTKEVYnNpt4c4a",
  "key30": "467AYZZXEueyjYJsY42qNronD7kfC8UqeB1Ao144Na9tSwVDzxvZ82fjhGptTEFsqTZKVgHfeJecEHzggXgvdtEh",
  "key31": "SUMShPrjp6igFmFR9c8KLYjeDtc2P1DEgQ9JxnLVVwpfQGziX4aWGpcMWBiYHo6dxaLp9v8aUSXvnXuZWeNHBvQ",
  "key32": "j5MB6xYB7QTRb9GSH19ei7jQjmB8vcg5YaNfDnA1MB1QZHwQt717NYVjvdUYhnDb9zTeWd2vyPmoyhqDcdHrEu9",
  "key33": "5BKiGqPAaKHM6V93yMRdRc8JDzpFXc4nAHH48PGGzETsjVyRvftDFN8rnCAWkst7tmjVVEVyWsAm14VGosktGWMb",
  "key34": "2XAA8qRmeptpu5KF9tdDYLokR8RE2i4gbtf9jXDYQq7TvJkzwCvqwKuYPXnB5EuNz7vCFMANdTnbxmMXSCu1FsqE",
  "key35": "QgqfFvcecQKeg5Q458m63Nt3GteC14vVmbwNoj99oGQMYRQYnwCSxnfE3MyBA8wwsNyeEM53cXhruUXUStabUfT",
  "key36": "4ALXaVUMP23nEiKQwYv1XeqNVNJHatU4cpBHkosPQ3ANDW4TkNH259L7b2F7WWZStvTs24uPBeWwydMRZdf3bXKX",
  "key37": "5hMWvXvHmUaGJoRefFe85we85RaDKpMZwBAZ147qvttKswSN21GnKHWnirdBzswLKHd9jpwGqF5XTbWXuwgvqKiw",
  "key38": "5xvdfb7qwLE9A5ReR1YCjSvdgGVzGTYr9aVAdHxJ8M7Fbm11Ah3zs8UkKD5oLQaKGsYjU6rDaKaEH6jxamP1ayeq",
  "key39": "5hCcxHUPRr97j5Fkn2m768BBQ3YFP6nCGsftZtK4hd7Tc6LNFpNAaxfnLyhE7Wcc9a4GR6eormTPJ4bKkDgdWNFN",
  "key40": "2rKx4ojSu95hkBW4PWyQBxTCrqVgQG4zfxyiEgbtWKG8urjWitiHifu4aqyr4cTUtAZhkFb9817esa9XMtVDjR6R"
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
