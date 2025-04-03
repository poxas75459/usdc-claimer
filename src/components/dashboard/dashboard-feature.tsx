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
    "sAm3wxFhWbWE8fHiHoahUTF75tBYrUFYEtGPSeVcK4BZqu3B22NpYWWLWy2ZcDWvErHDpZVtcuKb4YQ8ANrsDZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54y2bfdnfyUmxHXRijYmZDR7ZzRtAiNyDoBRCigCiDw65t5apaMYivzKUtTTxcHL6Q9bTycCF7p1pDTv8gR6h7bY",
  "key1": "5jbCfM3M2f1vf3hAWW9jCrKgaMTNHTP5niQUr1TcZFv4d5HuyxDVfkyhHCtVBuwz1KWuffLA9qRmAEPgEreGA4HN",
  "key2": "213MEVc5QHojqMYFeRZDkP2b9KzaHWqFDLQiaTPwwshhQFt8XrYGYtsBPe3mVwnuTcPc2KLeC3xaw5Zy9W4bNhJk",
  "key3": "K77ox3STram7ARxYi25BePyqgm5ShJJ4BQV9TJ4zhg4aj8bVD3TPsiTgUeFsiBeFeiFYmmJW44zZ7SXHpKKtLBP",
  "key4": "3xUHzxS5jr3uFhkJWyNHtqBWCKED7KpuPiT2dp3xifw6MD6nWe9hAsDwgRHgvhRpLXK9qcfcA5hFTbNUBq2om8Jx",
  "key5": "EzisXhg5FmHMuHiJUciTKdqZwh49hD17poiEv3WNsntqYEwCdu1PLYuDcVQCuGRmnUMC2k15DjArb5uqRszoQo7",
  "key6": "4q9tcJPMcDqBAXsouWvToijSyTrzSUwCQHG97BoskLJqq7tGMx2AyAXzoHLVopHFyLuoyiu3573QeNGqNKXG9rPc",
  "key7": "475mUTsQZrvjjwZTanSvxfiunaG1gUpqq2WdeP7QU336Z3KsXCx47sRxmxVXPBnes3pPWVpv1ob5ZxajaSbzmLMG",
  "key8": "3KBLsqh4b1QaJ2qoZppcqRwTEPNoMtMhHYR2F1yDUd1Vc9qnciDXF2aqMy5oZ3YuRMezPzefQMeCU4UE2QMB9gZq",
  "key9": "3d3SUNfGHreP94H2Zm18JajMTHuC2W7Z1Vh27kLCou2QgT41cXa8LdYYgZv6xrRknCojmLvWvAxYQvzsCwSPhtf8",
  "key10": "3Bhh5nNPKLBV9Z9iwksJr2nh5MMzkwE4fXvpBp9KvdT28t9A7bgmmNRHsiajqoYvMWBLq7w7GtodYdAP8fP2NZT3",
  "key11": "4dJ4TzAKtEkjTtooFADzd4n1bthKsoCSbMWN8ii8ed14eskj57XexaJ1TxBz5wEavrYkANCxDv3iSGHNkgtFDvK2",
  "key12": "45BvSRiwd2v59wTkKzauuLRx76vvVRbdAXRGcRTJggzqbkWFwMfdGDNP2FbyAWa6YEh6ozM2R9A6a5wmdqj3W86x",
  "key13": "WsYSxpTPjrCpJ1jbTW1haAFgpHS4KpYB9ozDU1H6j3owYKvTN1sK1mud6nyqgh1865ixjxeM5M42VKoFApcttm8",
  "key14": "38sGwoe8bXiPngGwW2k2XbzcL4hiCYw59uA1a6koGinXZSyE5Tcuzinx4fSaZ4aVTsCKfXMvTezj7QCBkWUvVXr5",
  "key15": "seTvJeSUPf6te4crUuYRiyGA3xAjazoL1pQfRwJfMjwjdcmKiE5FY51Sr9BScKoicUMBjZafiiV1jCKbYPv9BXA",
  "key16": "3DLEL6VPbX38z9YnHjvMGhi7k8vCEe4AFStjvDR3wCHLAzbX58suQFAnHsCHrCgnwC9FEnj1t2xgr21SVDrm3mod",
  "key17": "VKbSewyLeuYZohNVf6LANhVfkH6ka2BUgvgTx9niiD6XJYnTmcsA1MFyDV3xFaULs66SrJmae9fkyswtGMsGzwk",
  "key18": "2TK5PsVE7CRLkQCM45vwMDnypG4gHaFg8xQjuYpXtwEZiVggVPEWiFsvVyq1CbpCwysX2Qd5saKFMjLQtUmS9KcF",
  "key19": "28XErZBoUEns7MbDaxTCz9qj1KNTz7E2CxnoHH1HXjSY729tFNJppUTAL4qM4fBned6271fTcLkX3E45S6Cf7w2z",
  "key20": "2KB25nC6NrwkfGc1SSd2U1wA5xeL7NBETVrWnGJ1KnApMiS1nXP3qKFiuxM3869Xh7pdSSGktqDpPbZ1hhLZqTXU",
  "key21": "4Z852e7gsRmQP5GDKVhVX8gspQ7LhnWijZowZBqHxHVmTk725MorNjesiQwtdtzhwUphmhoVDg2uvTezqjscyW3N",
  "key22": "4WWtMYkgrEMgU9Zfvv8eJcFQRoiZv5BfvdegZfwzqxgCVQqkJ2s98TUDzvSgktPJjr8Tyn3rueTs4RTGVLdebes5",
  "key23": "TAYSRdTARGn7jjtLcZ4GVboyesVd84aJepuNBR5Rcua6gtTMwwfLvzEd5bdWSoVx8aCDPccBTnzQqNaydj77sNE",
  "key24": "4ZkZGtWU1azHjSGks12sHWMbFaXdFBjF61GQfYdhWu79QpcwrLEAEwfdstcNRiCzv5Q9FrLN9tg98NswGrCKue57",
  "key25": "2wSXPtgfWsd3yzyLFX5VhLaLzGubdVS5ni2yzQ165Ub9DT4w5XLtbp9eY6PivPieuEZmRnTn8hVWWe9VHoRU75Kv",
  "key26": "3LWmSikcZKDh37YdDEVHHKERN7PkjhGLGa2VtW1RhzyE8fjrj4vZmTV1UMZtQ3VxNefLgnU31nHkrzmSEqyM81N3",
  "key27": "3WT5K6sE1Kri7zNahGEr5joc1Cvur7ogKjfJoLb5fBD7gANQw3Pwx73Ypb1mELTe2mLmCnMUmVBgeggaGDkUcdg1",
  "key28": "5J3d7VB8hP2zxhNUeEfKU1aNFTvnUYG2LDidBpdGwG48CbtSb8zGUACMHhnaLqtDaDrq9eiQwe4aAe22VDwJ69NG"
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
