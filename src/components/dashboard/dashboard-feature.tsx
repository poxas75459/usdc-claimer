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
    "2wRSADLzsthhTgB8HtoR1WrrSYDko6WQDWoNCh7MbZJjtQ6Z417p95ZrC8NZRkJEM3NsRiw1VyDNXaUL5wmaYZMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QkCbEVhj2RnSe7cgPu4RMcs9Z42qHmN4gEvwoGZb8dgHU3ksGoRZWcE1X6X517sueXYpw27av9GTmkUYouVzSJk",
  "key1": "3NTRfrfTSacTSmQ3MDxsJki1LSYbJwykM28kNpTTpMNFwwz3nsRKjkvjzpEdADuHH9pZQrire89TvREywjWCxwp2",
  "key2": "4W9VUVpF4NdjFpJWu72LpxXhGyNakrTcqZWhDLTqMP9yfowAf4YXryQUB1CspeM2WXm8hhLb3FNeZfpaMvrEHab6",
  "key3": "59QmxzhMPVEy1Bc6ciSoYv14ybf1qEYJ1D8S81Cgzj967FnMopa5xkXrRfMR9qi7P1z99rMX4in34gWz8ichzZ67",
  "key4": "5b8fvexZmrKV6MzsLgKBWP64EWsKqhQoAfZAuYPeMzAvzhG9jDLz2QzM8caDo5PnGLXyMiu6Hc3qg9Hjgpfar1fM",
  "key5": "3qDAyhyucUA6TvB2azWRNP83JjmgDqX6W5u5vXTTgbopMPXAW3ygUfAMyuds3mmYGSiTXZipd7dAacjEzqNpPDGL",
  "key6": "2MWFo5E3aoNwSGr472wRE2ed3NNTeBWnPmZRAZLMJMytxPutXLhHKweKS4NYJFKrcJjddYuSt3j7DVVRaaLH5vfp",
  "key7": "2Ygek7VZxRr3gKPvMrpgCAM2MQjpwLxSHJ4wmkkZNwjer9ZmKCRQ7smwtTmmf6CEUwv6jj2Lq1Z6HFUmTtAZjbx5",
  "key8": "4AaTSiXW42fHTvcgEJ9VUQTsvMi8R9oyKbkyPfe3T2B7X8h49etLn8PtxPrVbmNMK591PqmTyNCKLtQhZaA5cRcL",
  "key9": "2Qnu5QcVhvuqvLkGyhfRf2MXU2K2eXEsForoH3Vr4uWgVVCnmkWptoyMEnBnKtNYpbhpqTWf4hWqvsh3PynhsEti",
  "key10": "2Q1T1t6v8NZhZsa2jCRkGaMQwZMDxDV9kJQU23j61hc6Bj4oS1wHsA2KNrZRczbTvj969yBaoZffcy1UccdZ1ujB",
  "key11": "3NyirQMFs3tfSQePe6RBXrDvhncyS1kW3ShX2axTfDe6sSx9L2HbvLhZPCJ9B4xnSUP2ow91BXrCJAmrwp5436fd",
  "key12": "avtKc51VVMyLw3mCSzDGscCctDjWm16cJkkDfK2EEYDdbrRaN9sk8xiduykZxnFeJ9B6gHHmP4w9ApjVomkxZEA",
  "key13": "azqB83z81pseFbf4EzWf8mVRMeDSWb6cjXLcfaXZUuvFeuNAeNEwtrgUiW7GtgAQga9SxMwLV3cpyVydJ3vyyd6",
  "key14": "4ahwCXoLNp54Kupaxu86z6Z3bVAryFQn8Rhg35BwiFFYJLS8dR6MvQNgToBKZ81vEbVbyYVgR2HjEcT7dAKHn8sy",
  "key15": "4hrvsQmoa6axpWnG58yQpqxD9XcXz3HWYtpjKHaJRZxfBA7FChkMJwxFwrcznc4RPLVQTKP2huakdfHdKgtuMTi9",
  "key16": "2CpQQMavDJxtwMaAKofYCMdQYbPnDvgb9wmVhMWJkwz3aFiCZkNaZ5gxPugPzQu993yf9bzQBU4jH9W6bW77nW67",
  "key17": "56j2B6N8XZXUSXwmv93g5rMhu8VGdHGTgcLaNMtJ4morzFm8SfNmoU48NVRWnPjhSFqJfAZ5dASWTWs56RBbjp4p",
  "key18": "5E3x2YRX4d4NQB1FDcM7oa4kM43hQ2nhKjHeBPBymqRZeG6sBVcGAiJrZaHMDyNRrWsdtqroHA4K7orLubybSAWx",
  "key19": "2STXRdr41Rn2XaXZjA3iBM2CmC3cj1F46d41hXjzKgadi1pCLPwqHzCPQcx6RiYiBeHt52KA2Y5AqGoXeFzPBQgS",
  "key20": "2Q7rWTx8XAafKWo1VETwnMRBxb7NEbEQiPr6XZMKoGU7CEG8BVbYiqfhWMVFmwV4DxcjDeqSXTTb7cPtBCa4qSU2",
  "key21": "23EQxbpLkt5NJTS1LYBZK2PiZFhx8RAogSbVZZ6BBetBH2gaMW4kHon3rPssDUd25C9KT1964ky62sNQjCoKG1fg",
  "key22": "4mPhvKohEzs5uFaQXL51zdmyoYUVjX2tiYSwiYjCx9iZL9poyoCMvW5J1yH2UrJeStHDvpx1CmpSpsg5G2tRW1mb",
  "key23": "2eEuqXzH1DymHm8YmEdCUL4T7btKapk4d3yR5Euj2S8EqXnodzo4pDf3ubexyLvDheckgAd6fzGrWPNkMY3M8pmG",
  "key24": "2dQWmDXxPAy6YiK3rPb2Lb8nPiUscTfQTQkpQWUaoq9FDwRNBucgcUKwKKDs9J8LtuqvmV2h6Pqt6goAwvWJiZzd",
  "key25": "2CnFccC8UsRtDyEx5UcemaPmSpx3ekFXHeoEkYy8if4Yvd2iJXUnXbxRTvK4JuY2PMQcpm5j5CgJiSNX4tE2roo1",
  "key26": "2JRgfidHLcnwUwUwfFrjvtMEroTXqiAd2b7PFLNCQ5HnoWRS2ShXXEbXjC6m5GPGDGTywdyGay8MrKrTaPWjbkJV"
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
