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
    "5cnrYWDvvpsM1k9hnXMuSsXUSGepoQE5YxL7i3RopkLHYVGmua4AFRCCu6Mu3bYaixwWkau5Vv6mV1xx6JycDBfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sVmpD5ieCC51XNX8urC5z26jVfZsdDrfyi6VjvDX9bNnPbBkqvWz3cBGeph93ANRhHgyzqkMUc2Gko7NyhRvTiJ",
  "key1": "5ZtwTMMfwcHQbLKZccNSVehoA5Uh5jB1GsxAxCYKfkAmQAYPaPWKdaTEUG3YsaA2p9nTvYPMgRYHHnpbkWt3tKe",
  "key2": "844kbWWfriuQ8f5wx7AwGLHoBdqrerBBY5YRhXsT4QLF4B2768Nwxd2bpeJNVZ3Jj9BkzAKBpfvN9ScMCPeh3Rp",
  "key3": "33V8AwhYLJEGCfS3pvj5oYirafuiQKCbDKFPXKfBmKzfLva5zrj97ByUeu3m216bS3rWBPcnCehvuXr6hdJCrSMG",
  "key4": "2eGj9QMinErTr6rPDwqipAWYsN11HCh9DbUCxTsoAric1TrwvFJii5ZcUfXBdrCMoDzh1fzaVe3EWtQqWk3PXSTJ",
  "key5": "3i45kVRYTb1CW2ebN3vuY3MRk4cL8GhK5WbdVJYTEvqA83JzPftEpRKUHq3KbMP8LMV6jNUo4QofXcuR43NL9sfd",
  "key6": "71fa5tAawopZHDxUHDr5XnW91creD6HFawApvzztrhKB5r48ckL3hp4qn9Gn9LBFCPScisjeLunthBRe7RFeTGp",
  "key7": "j4eS5v26pXKdWNvrGwK6hVTjdpQbfmtyWByht3XSbTZev3f3FcyVytqBqwpAagD8vziXd6NqgqeAhTssTtyka96",
  "key8": "25sPWfQPDyHsnR1ZJuzZTDX8ZjGfmNm75NpMtdVqX7HpN2EKLHFc4bxgjvxwiHUuxzo9cFe1oNexage4wF6iq66R",
  "key9": "2pMrVkZTFRwnBESFsGfRq9QnuFmgYB6VXaRe47YSiKYXqPVKBMtYG8YP2CKzecarHLed3kaSy1fzCiYyoF2vY6P7",
  "key10": "66izEGoEUpqwTTbmQquAiDFovGYXCMmNEbKP7isCvGGAhJXvyYLLcQtLBtTGb9LiqcfGddj62KWRQqbQ1Mx5C4zi",
  "key11": "4hYu8gzZijCHtXVGZkymHF65SGR6RiG1TRd4XBwVgEiukE1qCXbJHgf1JnMcfQoxcZf9ns8tEGpHtfgxCCCA3Vcq",
  "key12": "2pwgENT3ZSkDUQmJmSYc1sqe8tf61c87oDiSvq6gbZrUSzAxNXfqj9DScgkTcoFsz9HCCfGvvLchd4o2xmaZgDUi",
  "key13": "66q3bsrgRJVoiXueVmMpdcTsVHovuy9iv1FdXPXrk9NnN4rHrB7La6wF5VjLXiKc8ZEjjZmNi6oMD1UQsNMCYuqR",
  "key14": "5uYB6QHEmfoDPJ9DvSDS3KaZfsmRAx1m4ds8X1cBKLmUwnKMXqATfZ4GGemjAquqpkFqMTqG2C8Fhq5ajwDC3tsx",
  "key15": "3MAPf659p46SW2VRqtGYbXgYu2pboPTEj2mCSERrLmudDeXJnm1LwfdoNkCJhqzXbTou3gmXLBynXJCaCHcZLQ2i",
  "key16": "2ziDbwcUfeLjr5uo2yYq8fuUxJCUUMWNACBo8BcUTLrmBHWshYnxxiWVscRfnjECTLJZW5ZoGwwa6WwpAbMRzwZx",
  "key17": "4o29pxKtiDjXaM8GNjrpRtrJYRUBg5HBaARsXbnexnuUhQcakmWXDHq9qxuNWF3xdbiW79BLy7FKP13GmEfNjodL",
  "key18": "4iNwEBkjd2XNhxA1chpgPs75dMLSD4hCuPd8H3REDRnqBiZMVFQ12njN1SscYuvAZ2Grkt2dF65BqZoKGoxFAPYj",
  "key19": "5ymv9p49W8K9PVKtjLST1kHPExWDhq2cqDFXkRCR1pCTKVYcVrFcNPu35ukTdsrQWDrTz3ZcLv4xCnNHqYEw3CmA",
  "key20": "4H1LW1LGYPKuucnAMRhEnbk7dFqF5fPes2MuwWxQNaASJL3B5hCttGNNeVcuXWFLmTpAAtAj8M7GQKXWzp5fvuig",
  "key21": "4Usr1Y5Hb3dpY7tjLT8xctrB1oYiWqyRAboswYX8CcD531KNU7YzNPHZ2Gr3E6AkdSLBWsSUgnKCk2eXPWyZnmNR",
  "key22": "kEcRx38KtEh5mXAFq2hTNZqqER4fiFnuYF9QESirUDyRzb2bm2MkLBYg839X3FvBg7nqn4NkAbBSxe3x7PYqT2a",
  "key23": "4u1Xi6j8ZygKpML3B97kDgmytD8GCYeNDGD4yeut1N6zkxg5a3GeJrKEBBEEV7NXjedhuJknWDxZMxD681ThiuW6",
  "key24": "3MgeAGnGVkcy4WsUQaHmGU6kd8RwqtYYMi6P9uhXSAqc59hHkpdKqMfbdqbuNyjj9AtpjkEXDg6gjW4iWuBU2k2S",
  "key25": "5ySWBu8gF2AE8Qq1jyS8HkGJ3bAQ9zhrbcfGejY91feSRVNfsVaMX1DChdnUWBLgy3n8MkwbRmLDvCDRqLA8wJFo",
  "key26": "jJrCx61JkFHY5nyyMRD4zLEHCgB3djPEoV2bp1H5px5KGVHyGrtbqS7k8WJPAarYKkpqwytbdohLvUAruP2iTBJ",
  "key27": "5zaEcwM9DXRh5PKMaCnAz8WNusHSzvk1A3M5KuscNoAnq2CNGHUbWSYmMTPduu8EUTcttHP7egkeoQmzm79Mqs2V",
  "key28": "quDBCbGwPRaTnHUdNMS9r9ESJAo2nehekLQQhYHvQrPCvie4CxAWqL2BHoRk9pgUGdRhVMtykZGPoMuVJmsEGAz",
  "key29": "3dor7YnasNkV1MTpjaLquqWnU8xm3ZhMFvyeUF5TP7v4jFizWVNTdPhF6d8WUEXK7oJif141hN15zdZet9Jz78sa",
  "key30": "2EBbJSLHfD2K7APkysW91wT8Lyt6Z1zf8PWhTfu5SQA9rBShR1aQgB3vmx2Je1kow6kMmvuREbs1QoTLgsxsEVKu",
  "key31": "uwvyXccQE4bkXfHtqXLfwU5S7vKjZp4tKX5afnpihW3XizmdaWWsfqXQRdp9yKYt3VFfbmva5VoUVd4ysw4NTs5",
  "key32": "3Hx3JMzYFcwT7cnV4a9KPjuFQ2EAe3rLvkKQg3S8QKGsNATk3Fzx1Ppqapma2vhQUeGHoN8V8T8xjEV9dhuXWs5m"
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
