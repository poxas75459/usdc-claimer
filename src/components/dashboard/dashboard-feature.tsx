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
    "2UPtJzuRuXm4CjcUUK3ihb4yLfByWSNmHMGoVAEJzARsRoitUfE5oVft3saD8yxzyeDBuAQKs4SY9o5xfCRy5mf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UL1wMpjEVnACpeZUAB9z9iaiA9LtXcZaiDrnKMGFgQNxuGQYAaXziXKrAFapTmh9HmEbGMCQRGeesTTromKuXhH",
  "key1": "3vSzXcgKLbsMELugYgA2Bi8aMYAxxpZXmNJ6oJmAURAxqumrZrZM3mZq5RKpRDi2obkUaCiSwZ2mSbUNYF7ZeXXs",
  "key2": "5uHUG33UXxA1Vi5PzmuesH7k93NfJam67t1WiDeg8P5gr4ZJ9rbs7t2W5Pzds6xYKh95xjU9vq3hjUShpBwdW9WS",
  "key3": "3t1ZYVqzvnc92NRKTn1dueXMS1UzqKAqdAVuGJAnWEVh1Ez692Jtgef6UVSN78AekfCMKkpdvtN2WT6UqLd15kLn",
  "key4": "5beUU2dm1JRLo8NrAAnAHKUHRGAwnMQLS9Ni1xfQjTgxLYQr6qce4fecQk6CyCbutTShGsPFL8EepwcuBfEQtxmG",
  "key5": "4xc9J9pt4SMsFtDkgs6GGF52FgRpf2VZxDUvtBnyNf3ipTbt6U9riwqZBVbNAKXDRQkjruPiSQTtQD7fdfvCTJJV",
  "key6": "NEeJdzbw65ATyGTbsU3JhAqCrGKzSCfKE1vGjdqqbmGdG9JEjkvRjC461iRWU63r4eqY5YheeVMGruYJa3Fvmdq",
  "key7": "31w9xLRBqN1kFEx9kXykwCRkgVoAA2aBktGdt6uc8EWXmzhvqkqu3oeeKu6x1BddsYcW8ZaMmggnbYaSbWQ6kQjt",
  "key8": "4EqpTm6b6E8Ew1D7fPuavjaXGtJ556FWPdbTYtTUcTa6zB5BKbYWPsWFs3mWgojXtm4BaXuPiVydjAR3L6YCn29V",
  "key9": "2bXHp5kJNefyzkqiambuUT97EabF37T8Q2fU5rqU11kxiPQyKHUp2GZqyjUGiDWbntekTBDDdkw2jeptjZ5Coy8e",
  "key10": "499j5nCj7crhGPrKKsdjL8cDKeg7GXojbfspXpEMQYFMHqqAQUMGum3pg2cizhUWNXD6aCtkZhbXxdRB6cg48tpz",
  "key11": "oT7JNFjTTSuBeWqSm16dDVSjEi4CMECa89Mr4uBKEsj7iiqZwE2okVwBPbghBnvm4arDf6s8T4NuhnRxY6TZ6i3",
  "key12": "4CiiB9LaAz5Cr6G9LXs9A7PcXdPKvC5zmKQuHWvSbBJL2jg7BGnv2Jk9KEUvz8p36XF29H7T7RkfrJu8YZ92fCj1",
  "key13": "36bqZZCf6wq6ExKN8MfzvTVMZLQxpBaZ3s2UhKatQuwanmPmv9XozS9jhisLSRt4Rn6Fa5mK5QSHfynKXWugGVLj",
  "key14": "4UaPKj1CNgTnGoqb77FfsKV2sHodLqMpiKyVamk4fUteS1jmfo9JJjk3RwaAkmx9ynzHVrTCBgMEt25Drnq7u8yY",
  "key15": "3YLXBWFGNAqqHEQaB76reoQp3PyqjnCHR5y1eiNeRuKm8cTnBiixHgJa4MCPW6iK619LnmyPckMCv3HTcX6gwfJx",
  "key16": "36x9HTqrNbsQUmcWYLRRQoFgn2pV9Ha9hNvbgL7Qo5uj1CDrYNJ9pghNNZi3gJmrAuHBgADNw4L3Dvv9WS7AePng",
  "key17": "24y94oXb89jK9Mwqsg2a43rd2vwe4od3uZxWPSJg81kATdMy9xfkRQM2jdaqay7iWvk8GzKrxR6nkBV22SxsR7Bi",
  "key18": "5cq5mXo9hG5ExgeojtG8vRVp6pznW1FXSNLFuJG7nEiA26bFin4waXTk6pDZ2KKt1qHaTRY5BDLPefk7oZcUQ25D",
  "key19": "4XCnwWiUFjTZ43Z145YdSHe7ake1YJaLX4hZPH8eeehjeUA6ntcfXssp28B84EdxxX4ted8g9BcBm632wwuULA8c",
  "key20": "4fbZGHCkyEV97BCPG6RERCQbFsJgSE4HKijzWHtAeLAAVuog3DcTi76eGV3559JEoGtzhzxrKnSvn7MWBUbKhGwD",
  "key21": "pCfJoNCcUqZmi1ueLuBHWeex7BdEqPLX1AUZXbDgCamN9YzEJqKVbrU46iqezanDd6aVsCRXJJuKBkZNpTpnP4Q",
  "key22": "4J98GtWomJoKwL5DeCikS579FcAnyxL7MRLWFaZKoBzNWSDJRBVU2c1ZqHCWWHRZj7XzxvaERgAgD3fJhqhJtWNW",
  "key23": "46RTKkQ9hsxpmJkUJKroo3w4cVm1peXc5aC92uHBxk48TqxETkQPmUpumMBA2spCJzXkDf8GGJAupvbgXSBTfTgb",
  "key24": "5KkipggWUxwBuPPqGVUuijR6WG3zWqNVSHmvozUGisUTzM3yYJeT6HjtfVv32WYzTDjxVg3A4XnfRa67AwXASnzA",
  "key25": "7cnKkYkGx8DtQyV7LH48ug9ZrJGCBQTu3W7GwAut9FtBiTS6YRxyzBGt23wxsLXZMJeM2whQ9LgLpoD3p2Sr12W",
  "key26": "B733a9MpyqBcwngmWoLg69YAyarbbQyRff1eRSFt6tJyjEG6DoiZ8ctKDCP5Zhd6NU5pFjEhYAcRKeqVzjbY19o",
  "key27": "3riTRors5zA5WdZnnfpviHmLbNWKxy1VhMnyiLNL3k6oSaQHCvUGpZCQRG3G4PzSxYWxciX6qofCJYid9DeeyZUx",
  "key28": "2wFgrkvN2ukDvuFCxu38nmK8FAiTYj3Zb3AQaLCVbA3sRTfD1gpDtYbxp1JqXbyVCkLdyhejyK21f89VqaAxQMuV",
  "key29": "3VXG5G8bz6wy82A2CbDrpiqehcihiwdsizBaRjUAwkj5VvVWxetKZiur4A7RzF22gkJjsnd1EDXTxKGYECyNDDfJ",
  "key30": "5emJ6AVjkVdxgvm7pzVuDiQ3QWuBBNhEMvFREbztUHCy2oNjVcVsHychTKNV3WrfF1dGTMQQnczpvFbnqLxyMd2Z",
  "key31": "5RctFJNSZFkhPuZbi1uDnNqzmc8sS7LcfK2EwiGRB7cF5mUZUSg43zcAL8q1eYfoQ7JxoJ4xwufXzNrf79H3Ck6i"
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
