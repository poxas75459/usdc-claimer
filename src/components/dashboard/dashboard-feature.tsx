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
    "3EG7STzCwj2G74G8J3rQeC5wHX4MSQcmUMad5TS9VGq7JSHbaMXzASatMQhBAyxHxbZNjA8ZaVUTvxE1rVai67ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "442QDPYursBjeTWh9ZGMLwTMtHXPkPGzgicYQjDY1Hym6zqL9KrHJynXDBv5TJVHUTJ5DEnjwBBxGUemRuG7ha7s",
  "key1": "4ZgCRqmcHtCSUvHtSfSHRkkL9j8KPwp1PgXfUhtFYfq2GGmqwQpGnHsSQZx5qnWL13cAr8DVFsUATFG3AwWk25Yb",
  "key2": "47gAC9RSxnnT8XAzKNgU8zKQdFQqAmhxFeDjjj2EnFzSxeK9DHYipQ1b2QJr94mgMDCbY56fUusZL4cB2Gvm2dA3",
  "key3": "2mt6kYRxZCFSro6x9UyNQhwCvPPVyPWsDiNV8FRSA6fDh7rsyX74znP5jVHic7QhyuY7yNR8PDFbUn3tghYaofAa",
  "key4": "Ae4wh2pzvmC1Sa1jVtUXmizLqMUvZwK5nB4UUCMatGonsRVjfzyv76eTstQfX6ch8QdLX6XqBxwR8X2f1TBTEzT",
  "key5": "2mBRZg6yRiemskNK18VeoK6xZFT6ThkVKcdr4HQuWY8ZRLQ9m219LQF4YW2Jry7PdfyfNN4k1YtXFi2zuaQdNNK5",
  "key6": "sC5r4LwrHCwMeLRCA1ZqRL5kiSosG7BSLkTjRNk8kGkcXUEWFeEuA7DRE4FNhmbiMy87SEufZy7hGdCw7hr9855",
  "key7": "51Fjxj2Sa9JpVFecSMGJfGGazQLy35oMnw8RzcqZTML6QcCkgR33KArMfPSpvRjVR5DxZeLaHYWMXXA76Q7is6jU",
  "key8": "5ovfzASgHF8BCkCL3y8Um3wsN8cCpMYQmGC5ANfyQ7YfmhykBnSBfhXWP6KMvPMYS8gnHP25kFhZGeLTCA7LP1d4",
  "key9": "3Ywx2ZVZuTxTPkE7ZTXDiVu3DKGU2HeXx1SBRR6aiTXvUTFRHUkh5voTpBzo4NQ9ho4yCpoJd8yA6ArRxsByLph3",
  "key10": "2PajFPgGmPtRSTP1Qy1YaYuX1rYn63a9BCde9hQuceGsc8Fe9Begupz9LCtpyMgH2VYwiDUaizvzEnFDBQ6xnnvL",
  "key11": "2oMCCBLeFXDxqFXkXzhQxxHTTQKaydpytVLu4Y3gNToiga2VwC2BjpzPgkX6VH6bBsXFQy2NCjTX4He3AjnnTVmi",
  "key12": "5iKekbFbmbfPbxvtFCFvvmQ6PwLrLyWC2vEA84fThaW6jX83tkk4zF9AGdovqGrQQ2mUiHMuJpWnimwA2of1HG1k",
  "key13": "U7mNtbyPDB9VuWC7yxajcy4JYewdGNxzJcXVMpmAHDXaFmp26T48xWykSFGTm8FYkt3oCmzcZwwuG7u8GzsHLYs",
  "key14": "62tcurSoeG9MAcQtaDCf7XpyVSdLpcED6K5Hmb7GwUEhjEf6cAHWssmDrUjUwFxsTGzQ6ppY51wZPxNDm9Bh79Tc",
  "key15": "2sjCXLQNrarp5t8jAdPwb6BX4NMBt7hvcc54Y6pYsRFoqAgonEtCp1tAhRAijVkGWjjv5iNEev5E27vCMEguekgi",
  "key16": "4G1pr8Qyzw8bpVUUodPe5KVFk5SzhxCK6XPa6XGmyqLYNdZDr6e5aJh1nZDyJnWfSsjEzs4kD5tHM9PfBxXTHd6d",
  "key17": "5pEvKs3teDMFs1ag37gEFjHdqYVzEZMCux1USs9u7gAGB1B74bpng4UbKTjotNVDtPYxESKfQBep3MsJXefaezJM",
  "key18": "3sL1VUK3owFK4SexEDKyn8P9E35eyLvzT59WZQYSgiSxGDtMiBcjRjrEK8rwUuegbCYRHsqEvdcsxZ3NZEaXkgNp",
  "key19": "3JoAp9HocNg9B8J6MD6yzLa4gHmKvnz3QU4TCTcVaKdJdKvk2btfS6vGs39vAzRRYPG7Dqp2EfyugyrjPvPVvwHX",
  "key20": "39LjZbbPrDtV4W21DFjXxFV3FKvCBi2PJxqJvjKHDBkypHGsGukrTQ3Ak7kuzRdJUjTorDmRBw6ytkziVSLvD8cU",
  "key21": "251urzsLYguEEnATDddiRmoaDmmS7CXtuuVQCBsiNepo178F2rYNkXj4ryLANdaAyyyTS6ZDVYdbcYRyGwzV2orE",
  "key22": "4yZgqkSBzrvrphcaNS359J8BudrfCqpCrGswsop7EeWX4xqDzphcgy9KqPg3T4xn1ne5w2ziGQM1x4GZWS1jWBy7",
  "key23": "37o61NhkRhhmGqgB9f8JYb1R4bMDtw7Phn9rsExB7tdniyVejtc1NiGeFcMqVk8LE4gAMKJx7nKALK6N2bN8YcFZ",
  "key24": "5BD451s4b4GDpZQ1fDQ8N6LEGhj1wpsyVGH2MCk7Tbz3HG9Bf8HmMcHUgVMydFb9ED7B8SpSNEzEYMbyPGLV1bgb",
  "key25": "5oKEdFVG6TeEzcXdGD9rfx5gQkAMTWzo2EjL4DWNWPoPAresPTMppFpyfY7BzAKpvYvXjgJGXCckgBLHcLo4ruVG",
  "key26": "pyTj3pBt7i9JDmsE6gAQ2yMA6j3PM3PPGAX49f4Kbm9PJPAkukDzDvpse91iZh7PD7syLLWRfC7v6J5GbJidYQo",
  "key27": "WuagwRGWNCi4b98J9TJe5ctENSiETdZn3PzuL3xRoQF1kZgP2U8HWu1NYih4FERe1UQ5cXaEiov6wFV4sxmUwuM",
  "key28": "5dAVSJCrBRgpmGnrEM4Cnm1p7GaWD1eudT356tz1Pat2GUdGEx9x1D1rS6v2FCmFeWwGAx4QuEjVo9cU9yZvzUoH",
  "key29": "4XfSJinWL6PpauSr8GqP5jvzmaKjpFkpKy9pFpP4w6LWG9VNQSGJ47YYzBSt2PYA762jJ896CbNY512oAr7o9LX8",
  "key30": "2cZm9UQeSRwyenWPWYcQxRv1RcDGL1e4APXiQLmgqHXATGyvVoBP7eK5ddzeESkjnmekmBwd13v9zxZUmc5mrw6U",
  "key31": "KKVfeUhWcJnEdVcxSYb9YqupQtZhG7w1rmQpV7z5bbH3G1PEyii2rxAGq78eFE7UQzvUZY1iRLouSUUtfeCNTC4",
  "key32": "27JkdYqjwHG33CtHuCpq1dQrLog7ZsYPPWbRcxnWeT7iEqFoU5GNYzHP4D8TADYHP4ntPTSexzncZi8tcqH9HFDP",
  "key33": "35MDJbLJm12PyZAYQ5ZBv283y7WJ4R3264pcSNYyrt7RUbF9yJeS9Ri4JkRRGGDTKJ4Xm3Bsygr3bVoGMgSAH1fB",
  "key34": "3tVbLVzKWru53LPtke21VL76hnodo78n9hugMGNVNLg2RuGjt3cnrTpniRkLfX8zprAETvxkJ4k15W2tn8gSmMV8",
  "key35": "3DQzjCNGhJNvH7ZizvKYB13h843Sh4j36F6Y3KpPuSvuo39QwFj7yFxPNvnq6cWcAkhAYiNqUvywwnaXqgPfVnA4",
  "key36": "38jAQmmGajfT2hJos2wYQtbp4HLW68FzvbAncxn9yFEj9KL4UjemRMcx1hrGEjiVKPoazmUVrTv78bH3FgVESuUA",
  "key37": "5rx4pGSRGYu7ZNfLaUMGBeCB6kt9xnZMwyvTgEJSfCC2KWH9kawszuUJTXXuiN5ncdwvWY25pqeha3ArbkYcEJTj",
  "key38": "5KtSz31KkRoZS1XqdXzJMiT3NwacaUFpT2aC4gidEfnWSDRwEf3zFFdXsjKeMmpmnN7SCQxwiip4P2QmERgb1QQC",
  "key39": "4fEFGLMCnBfHn66rXGbfTK21Y1tujtZESEvuTqXxea86p8w3eM8JbE7upj9gRCKmp2DaiNDpSFtTnYbYjbnheewT",
  "key40": "3e1zaR8yqFukGVCCrgxMPzjC9NqYT6aozzSxsmRSkZJbMsn4mWo49NdsCJAxsQDXqVCRM91rUghokE7aMUvLPkjA",
  "key41": "3mATyqnGcDb2s2HiGeUxfFRVPLoEQwTk6MfPtsPcrPtRUqiMJM2egTCQBCyBHJ35yrKr8FWkRUZfQpcUZNJKQqLc",
  "key42": "2cEbegdu8YeJKbbbM2nxo9G4Jet7HXU3MFd14DJZfjT9WGsk5BYNMAe6ma3yR16sdgyatsk3tpu3aZWjBPi9Aukm",
  "key43": "k4LQNAZbvUJzazsA9Ef56kgsn6AouLXFktonHttHm4rimR5V1eXUDjLkbXof5UWNA9hpK58TtJ99wDH7XgaGHc3",
  "key44": "56DBa68RVjyox6WL98UppgvC9xfvnq1bfmWQA2Y3hngpMSG5UJsQvFa3PVrUsZgrDSLokQeqc5HSsrbHM2zhsUDT",
  "key45": "2tcJG2Q2ymPmRSemadyoVEdHjNTRsEMCfKjk9LrgotGGJbvh1SPxXDxPAA8WBnMw9hAyPGm1KRgkeRst4xR6pwRL",
  "key46": "37whAKmeVrbaPf76ehGNb6H9yhf2g5EUZCTQeRr6xfDSpPhKo7WJNXNCwLW5wFjRypWQLj3QMFRvbykuWAcRWW2b"
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
