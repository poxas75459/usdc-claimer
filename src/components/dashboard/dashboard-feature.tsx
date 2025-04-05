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
    "rEw24Rvx4kRdmL2Mz1xgSJ9cA2zBUwDpG4gufToWHeBN4eC1pULt7LzAZCeH67DwygKiV6Ksac3foP3aJUiycPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xyGzvyq9X6fcvaYKF4vEomU3PTQdYapQroFnn7DMKPVn67zTJLHMezbkxnacYRkcJsFcyFm3f43VuNSwNYVLntG",
  "key1": "4nKzDpUTTuADAZEVb2ZGRWxyW9XXNE42iRijqajrAiPE74TuGyTSj9DtSKFrYQemruD1ELqUvu11ksgCNLurq5wU",
  "key2": "35Q8tSRtNkhwvpKN2EVY1mDVV4YPrqZDiyHx4HzTqh1EyDZnmZncB37vPz9gnYivnnkmkcXgdjdA7sp1zESmhGHH",
  "key3": "23z8pkihGtHrVaDsNkkwJvHQTd2inZJRtQgjf8kKkjTMt6bg71xQ5btxmXaTP5UnwS8djgUFe7ko38Nj37HrNHnB",
  "key4": "sHafCy3iikSPNPLdhNai7UEHC8P5g2JAEyRtMebShKJkzuu5HAa4wr7GWnheZTrHJeqcbqk4Ddk1gJRGc6DT3r6",
  "key5": "3351fGm7J8WGzbLcCpJDYVHqH3K7o89BgB6bDPA7L7Gbz3YUtko4FAnQkSynRFz3YqjTS85rkBY6zd7VGzkThf6F",
  "key6": "B4sWxwYBFJ5i96MwiB1921xaMqVbEGq698XPDfQcXeftDVD2asR6KUFy7FKv4G398ovfWgEEmC6PuTrMhqQ6cAT",
  "key7": "NWSEsZQ17iB9cwpUpxTYotZzjuCRzZ18nfCDpT9kbeJDfLhgajNc3gFuuTxXYX5ah3U1cSDVCU6wqPL39PHa3ox",
  "key8": "3f3RHaHEGAxw6oJuabfWZLqRtJqMrBb1ypTHf3WERm8Xjb3ufm14nMhzSxW1Y3y5diTzANeDFgZEpVAmyiGCAjWf",
  "key9": "5uQTPhr2XNcE1Uo5cgxpLHz6h297Z19Nz6D72BosApKg7HqzQViBpQQjwFHtC4wtwFqA7kH3BDbEmMDNvDJ5Qdxa",
  "key10": "VrUvgazSPaa16dz4wbJ96hKKzRqzk7957CtnXvPxwM6C6gZ1VhxC7DE1w51JjVaVjp3G3eCzr9CfyfQT3ubo5oh",
  "key11": "3h25hTAt38CMErCW4Pi7moegcj7G64MGidJBjj9zYWtiGGhpo7PPA7kZdwGNRTvNkMuw8e8HWF7VthDGeaBH98d4",
  "key12": "3feiG8BcfwPztvjziAdXxgBtTVCNsusoJuTgRVtHXeSQC7GzBVETDrYPmXvT3z882V8gWrij9QyFTnboVKR9SVRL",
  "key13": "5cTEJSkG34YoHYeteZakWgVbcY8UB74SvrN8od9PxSP71XNBaba7H5JEh7SFBWebjkmHG6UczLEn7DbrBRi9LyS9",
  "key14": "4KSjt27aDSv4cNMugFj15dQQPUMe5MafVzGAvCKYGx6UEPvMz7r8s4YRoopyD23C74nj2nn7orgH3LBiFhLJdkfG",
  "key15": "2p95YNbnEHAD2LQvmyLMyX5wvoGfyWL5NpeshiB7tcUQ1SrpL1haG6roqJjFrGXhmGFTkAWoTvGW2JZ2Coz9F8DJ",
  "key16": "2qYxvfpYEGcbR2SWSxQWNk17wN6xRxBtcYgV4xon93vBmUPiaFUbHzbCKRVSeXZ29u3asCSc6CtQieepgpehE8xs",
  "key17": "3RTVg76UTVoPv11f7ujnT7R2UJmRCFhMgK1hM8YBxciUegztDeFVhHiNzjMEKXZxUwaenDns73HZznYFnyiC47Lu",
  "key18": "2YAJVdmyhq7Sfgk4HmAXTrKS3Qcs8KA8KofhrhWxQpScepoZrUq74CuKtXA5HV3VoFaa5DNZPx2PBzDqNFbiFGC7",
  "key19": "5KTMuF8yPiCksaMT7M3gjmx4hpYP1e7L1msAzhvH11pc7jggtj311iPbgZ3rHdX5hHUcEvs6UGwfx2HbWygBWqW8",
  "key20": "2Acq9ULtQgsujSAUMoLHcGjsy1jz3frUzvV6cgK4uFF9ehKnsMbr5wEQJMyYT1NWj99DE8p4LDrVTfpNmEbVfeZi",
  "key21": "65n3qo1jFqEpMaDy4Ju46h4q3sKVsULBeueWHi1FYuz59jzMqoWqjeDeDPy5TXPatxwTpPZPsZ1wm22HniSzzZpC",
  "key22": "2cncW9voHYsF3H6JdBVrfKcsTz2hKxB99UWetqytdMbyyYvsAyMCDNUuTqm9MACCbirZPZnnQRqZiXo7D8Aqgbve",
  "key23": "57hmqt2CQnT4JCW3LCGW6ST7oPrV9m33YuKJ8EixhPgJi9LLLLeHcwC2bckNWC9PcXSiYnVG32AcKhi5cmQH6fTp",
  "key24": "3qxKx9yLtw41PTd7YE187j2iiHPeJu6Ef8q3iqKG3XocvN3DhEgXzdzDARfT3Yk1b1WNMmWu3efHHT7aLoiitkxu",
  "key25": "5SkFuNRiwpp6L5UnaNHqphjEvZZjj8YJXhtgE5sujE1ZUMtA2UJiPfTEUqDnbMQ8jtyFekEdiN8jTqaLFA4cq15U",
  "key26": "5t333Rc7aVCpoGr2C2de4f3qt1P19b28e9F7EfFRQ8aeZaSRr8ocxz7fAuA89BBG58RAnFy1zAxAeD3dCQTJPJiF",
  "key27": "gk4J6MzVd768TQSxvraoJXFB5xgpamLQc3JW3ahVQuC1PWq89TNgtb5QDvR3gwEPMfKr1itzZH7dBSBU92bXWPP"
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
