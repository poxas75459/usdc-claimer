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
    "4EFxk9ZXzKvmaDRBz2BX3W6xZTV3T1cA2ij5KRDigjzXdMYyxmCbUVky3PbbNCeUtm2VuaYxxJSHfQHNtxkRsDBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pyiBCHegxV2AVEJKEu7CFExpbjc2NvwWrCy8wNJjgE6stTH18kRs4TN3JS7JfQSJT3Dp65aauKjDtG9cMCVzQe1",
  "key1": "5DqzXsg7SVVDaBVHBR1SdxwcE2Cn82EE9aydwmiscwzy8Rk2avi2HANnHFZuPyiYxipkUsdWq22PHwQ5F5kgJ3vh",
  "key2": "3w4CmjYAaaAVoxzzQPXeQg6XaVCKj6BkpaQmSpPYcgPNUp8zBYfxEPJ775xPzGobtgEmCRsPopCEbBjsS3gZgKgv",
  "key3": "3zSitFzjUknHaN39NbaENMw9YaZ9VJx2JkQ1cz54SsTPJMuz36Y9Xc5DNu3E68Z6jgz2x2AYiip8Ptsg6gqJfjiy",
  "key4": "2ak95GTrt4ATaVxTe2MJ9bToDg1VdC4p8PZxd3KuaaZuBMV7g9BGHrgxC7xua95sroYV1RRRY6sTTJXqrC53WQA9",
  "key5": "RoF15eiJXxxbR2f3uxVeztCmHZcRzvQCkyWTeHYz4UnEuRCunNY4PexYFiBKLeAM3vKVdyZ18HU8jKzvMKg7QYy",
  "key6": "24xGoGMR24RWxpAUbiFbJydgao3DiEbRT7x8kbnThYZ8jS3B7d7i7GSUcCEwGkG7WhpZ4ZcSXRhkw4dwd7yoTAGJ",
  "key7": "3PtyXQwMqEN7o8tneEK2b9uCKPW4G1RXbECErV5idMxLwc5MwvtkvqVNvum27PRhC1McWs8MBx2oQRWRA2v74Ynm",
  "key8": "2BaSiqbgdG6tNzgc7fD33U2ZG4T4h7ra8NwHLxs8oi9mCZp3kVSHC37zoks2dzJa68n3x9LTKZNCh85cXDgpM4s9",
  "key9": "3o6RFfPGCyeSnwin9vB5T7qhckuurCL2DWRYRC3TQiCKwRFMZUss4uHdcAgjAhYzu4Sdr8cwYKfFBRaMjpqCAxp2",
  "key10": "2HhnoutFTZ3VJ1MYfruMwfPHeVX6AFx7EWjdcuMWXyrZn8hf3t11EUM2xQ6pJM1CdKpRhNCPSuAgc5oWyW4G3MGT",
  "key11": "4d5zkd1PfwWQYUdKi2bQkPF1esJCAjsH1n1yxRmrjpMfxmN8e5SXCxbZWdEVPFsP5XormtmF9YYg7xPRZ5JLscpH",
  "key12": "2zMpt4cGjTV2YJadaB5md1Uk47jgzisuNTBXpT6RVKK8EQSP54Pkkj3zkLeZiiZWyFVHGGELMQN9XwinkTrQZs8X",
  "key13": "D928NdEAfrrnof1jn9zaCHyQEnAdCkhBf7Sni3Wmq2y39mBwUyXSBqAkkxgZRz2xQzozzXgLEdkazJGqucdtEeE",
  "key14": "egrsYY49QPX57LBssH7BuV5WQgR7fBby3XrKyZmGio4QA4UupnJirFdSK4TmP2XTqiojeTw7WRBN74RXXy2HjSR",
  "key15": "3SC2BLevcL6nziZTJ75MkQszLDK8Wzj4kG8nrGaigQHWtVZXr2KpmNThkFkJwGRf5YpYHdSe6LwHVSSqy2Gjg9rq",
  "key16": "3PtqvNt3LRRd8E2tDPSx66aiAJ5egweodwsFagC6fwueAWN8NdyQTVCRxS7ciE2EXYrBgDa8zXL7aBaWJAtAi1xd",
  "key17": "59QJ1TFXnHrYLvWyteXUGfp7iidpZQzaB6xheAc6do5GotsbGwaM5PZhgiNTaozE775uK4bStn2HE7XMJkFJmQaZ",
  "key18": "nJ6HahjkeeFMRg27NLdM4wsq56TpzLFC7myTWFdZGPF8G6RcnJdA69CuxojffhuiewCmdtcK2UMv4ETybt1wd1N",
  "key19": "5kZTNhyQ6vGBQdHfxNFQ4mXMccnWt69ukEzjosDhd2we7pNocVCG2t4Y2NofDFASv2MHh3KL6bXQNjymCMkShR4E",
  "key20": "4N5CV2Kcoh6MX42wNH7Ke5pixPFMuooQLuuaCj3NATLSmEDsEYJ4Jk73kYJ6CPh8dY4jquGpCmY83J7AzGrmQV8c",
  "key21": "4ZWV1Z9ftGggU3dFWb2ujXmrmLAHSWtCmb6AE3LiuuywEnPZU4shHdh3V7JLJ9Q3W6WLWBGE8um5pGqPE7a2DaLc",
  "key22": "ynYsZ4KPNiaZvXbmGRna39WBVHUgojJUu99vNsYtd9LmJqa8xgXTcYmiaSMTWd9qWhT9CpnaUkN2UWHNpSTgdT9",
  "key23": "4JH74wNXHCdyHN9qABXJSKXQzE22QCMv5g1ezdMrGpVAfZei9WXb5gAMqR6DqJASDHQ8DwaHPZfXLmwfsPcSsSY",
  "key24": "4hvD1BJBJPALFsUd8cBJFkVSJGwfX36sP2uSLrMhCKSWkcCvRTnardTEpNsKLQ76Ev1NigJbpwkrH9KZtfEYbfys",
  "key25": "bA4B4kiMf6iCjbtjoat6H1B5ActmXgmHLC1BBDTqG37gDR3wenZm4XGVBpiTio9RTKKYe4HTr6kvuxzwgQZKEGp",
  "key26": "5rZr3S4ttPFY8ZFgdPQRHG8dZPcQLYPicUtLoQxBiytnPuTaU4iJN4ZPshYLitmix5BsQ3AtXC1vgmC5ccfjxayL",
  "key27": "xVfNVfmtPZyeHveUeevTbydheNwR6nLY8LJwNJvEHkdBNruzMtyiXaRV2yVAMntWdgtk5FJ8jyHM1LPt3cTEpW1",
  "key28": "i4Md3XEJc3wuis24xKUz1swgFatXpQV58bLvjdiMmhcQsPsvv3Fjjo2io3YFBDtUiDMWqHguXNkD12XgUjuJX4o",
  "key29": "62a5AopPgdQhzNp7b2V1udqnfnjazXXXnTRLvxhUojZgutRaj4tmxGGp8b2EdrP2SgbpHpUFcTiNbJhUGDekN8Ph",
  "key30": "3P3PPyjf7wKn7krM2K7o2ZZYuhhRpojGAaD43TzdtsMNhLyQtiw8H4QydPzM3edTnkswh5GPk15sUzHwZggqA2ph",
  "key31": "367SwSuTaeRiJXDR83UfJRopnWXUr6dK4h9HEHNmKhfCpgq1DvcpLEvoquvUPZjyfkkCNyBPihdc3AncR5tVZ71Y"
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
