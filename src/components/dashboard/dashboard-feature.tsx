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
    "2nQY7X2iNmJvVsMsKwVd7LoaPf3eASJJwwPtsEY5eoKYxxaDJVP7A2Y1TS3fNKVkDgvaThMtrovM3Z3CfZTbPLE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CAaKqkgA57vb7nhq1aXg6YTT2Wzb7ESdZBUVVWakP8TngzfVYtFDorzEPxwASz3T8BbBmeAihZKDpoZGbRezt2J",
  "key1": "3aGmS1WTTsCbQREF2r4iJKbNxDo4MFHR7aes6KyJ6uWxJmzPWnPDELHzVMMWLtHGwR4B3gtZzFMs2bGGqtkjUbwa",
  "key2": "24JeprLxDUwgStZEexwXmsmZSpfLm3rVsiP2kEfMXCxJ7weeRcYYUjDncz1rQR9aD8Jz6oxetBfNV5ifHfvyy9FV",
  "key3": "31qjp2Js54zVXc7dAF8Vuvm4j2ZWajvgUf7UuNFty9GEXWf9UakRYA4GTwf1ogjzmvtFH7j1mc5oc4krKKQa91wT",
  "key4": "kXNhR3g3qqkyC9LPo7ze1vWiQA6tx3PSC5XnHvYVPVDJceh3R2PuS1AfPz5TBsQFNTTmED7anEtwvWQtQsxPdB7",
  "key5": "51m5FSCpUjrZP3N7XXH19vcNYRt2cbj6eUHF4uZKqimAgG7WsKrobPj2sxNJNtF3MaCe1iWRqJqcQVwiEpg1UtaW",
  "key6": "4DbXodgBMMPFiCEiLb8DnAanx4ZUCsDQHRxPGV23StgYQVZS8BBtrLX8krKQ6SLwe8y4BSG1wthbR9ZPwsHmrbSq",
  "key7": "2FN4wJmfKxV1CYtXwXhDpfkNuDVStYFZK7f8M8gi47nBf1kYtHMbMgkyoHij6YtihEGJUA6gNSQoCWcjHCarDmQ8",
  "key8": "5xCAsRGu7paHgr5D73HcHER3g5TPzvcNTYNraTc8tyBCjLoqqpbuyFrGemTDsph3XGN6S45HNQaVJiFy6Ze5o6Se",
  "key9": "4y1hZnZW2CufWmpvAT2TQC24DPNjUdCvd14Mkxdc938HLtnEQXhnomdPgKa9cpREuSdPRwSsFnp1s1xL7rDU6sUM",
  "key10": "5Qjgh8r5LQRQKXuH61ouX1JrjfcgZs34CsrcaFirLbmgianhEPw4WTcoptre7Ev967RNxx7hy5NZzhnZVyHbjoYz",
  "key11": "5TmW76j49hn4vz4tP1qEmnzPJQ3z1NdW2LBrm7YE538mR5aZx5cdarcTTLJTkQfstDMYScePgMLonXLo5LXvAYxe",
  "key12": "2SUaTVhqsBtK8nKF96qoNmtHRVgenWWHxJKvfbE9oxskqcsrbjMdy1umKDUKBaWXiwjH4cToV3nk3bNE3tkKMyBc",
  "key13": "62zQGL7JYt772CNFzmo92yQv4GCUbcnhHsmF8iePTUrqeij5RVqo8sYAm3Fbvj6BM3ZRjkY1THnksckJF6m14yfg",
  "key14": "5bqMyKAnqhQx7AaCN2osGJMzzppXbTvLGo2gJbxph9ZiAwKSHmNuKMb5E2D5FJLhXtHpTdBatxasSzVYazRFj24T",
  "key15": "2Z7rWUhRuBPWft7AL6ojUMLni1eijMx7eKaLMnTtb4KDisK1tR9uM6y7RT8FitLx6XAHnoyihYDqUTpqFhxsMeDR",
  "key16": "4f7gQNAmRoEeaAoa7d9GuVPXgXXT7URUj9gQkAFDwUmYzF1jkp6tM4GooxohaimebsW5oCYhpQ2QYovrUswxnRhP",
  "key17": "4MHNZUGMjeQ1vtzot2BE3uaMTdDkHHDKGUofvDHYZngV2vmaqTa749A2uNsEnavBdfvNuYDCKiEjP7oyYFjztnrj",
  "key18": "4DTuQjbKtrbjGPhRUvJuDRFFzaHE65HqEkhE3pNakn7QEC1ipKwkSQtr64WoxpW9sg9kLP95ngkVXFQYeR9VdLss",
  "key19": "qrPgMeBrcuWZxCXgFoYUsrXL3XfaPiLRK1CX5a88uhr5ZqvaZGfSN4kpdXQsET1C8VthP3QemaR9R17b3NCbSPk",
  "key20": "49NMctebgizScRAEvmXtwApCJH5z5GrGoMLkHsJU4LX1t9uhcjcBX5LwW7XjruZE3CagiwkweH6C7CWQag5gkwFi",
  "key21": "37VUqBrkrhstZbFxCXVVkaixwcrXPQ3GtpvmBweZxws73DgjjpXWZDbt631VRVCv6tNSeCriWHwkWi4JJLwod9GR",
  "key22": "5AiX2qtAm4hM1k8ZKVTv93u212964NvHVJaJKkpj67NdZtwPPo7wjq6DsddHbuWSN3cFaB9jfiK3zV8qedTrv6jq",
  "key23": "4DLm9zi1yPGgQesFyJKL6VFCeJd7KbqSWDtUzzhVY5RsVKE7zohoEmQEQaBtzFHw4SQdxqAfsaRkovhBvJYbqcXQ",
  "key24": "sSDTRGGLhraqD6PrFHb6A4o3d1JJoEKhvPmSgdscNk5h28YRKUjY1u5MYuSzczyrPJe5PTay4E7mNaMZdRjjgMt",
  "key25": "4Wgpxm1ptyahdT1TBdBxpALqf3GdKhjbJhziYL6B75R8zABPFMaSi6cQHwVBiRU2vqJWwx557B1yAuRdqF97jtPt",
  "key26": "5To3ZK2kju8ston2ZkNHYCXNALJ4N2Vx3yFA6EGXWKewD7m5bWSQ5uZYPYEQtCLD9hwPK4FESrhyhq1sjcdCyQeE",
  "key27": "2N8sCZie7mRJ2ztztaDZhsBAB1dmssYkr1zdHGz14zBL7zFA2G1aw1LXDEceYUY1R6BPBsUSpxNdv8DHRNKRfPrv",
  "key28": "5tskwXSWVFLmF1aHcjs2fNGE1TPsHXysLF8Cj7xjmhSPgYpfP4zteu6zjVMBu4E7PQV1r7pgV6BmsVksKXwb7pbo",
  "key29": "3hBy5mSt9g3XRSGJFF74Zgp17AUTfkDxGbKh8ScvAmf863YtDVBBXmzMTVHMYcFXuiCyUE9BgD2hMeCozH6dtGKq",
  "key30": "2e4Vd5355ug5hv7UVB6QQcdT6troBRdpRuEEUNBJmeNt3zT3Uhn9vz6dwFtKedurvnJiBKneM6uxi1DZweTmE8Nr"
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
