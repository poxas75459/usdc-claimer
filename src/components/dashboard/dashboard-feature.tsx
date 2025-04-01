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
    "4wkPc2FBLJmQeyNSo65ABwgAwxq9FbrTnFaih1MuUKYLZas1iqA6vtHqoyygGAeqjkrRrpoSrq5gnTCymNXZgv4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5De8iUU6fKqMAp4LbtqYDgoAciHhnqdnmnQXvQoPPef1y7AiBvpLhq4SnQW6tm6cGaVT56dUHhNtqCBELXyK6CMN",
  "key1": "2Jo6ssjrP54BUsAMqq9KLZC55LQ3ebq6mNHRuiHHwerPBZuw9X6pfr74KDaXuadBiEbawKyFfpa4zL9SPYKBA9XF",
  "key2": "63kYmTEFWo5x2TQPTi8fvdfZYzxzxCx5CxEqqmeCFkx6SKuVFWsSUU6jEAZCWHDgpu5aKc3mEZkGbBTzuuA6V347",
  "key3": "5h9sspWWT5JAcpfjZzQH6Hq5tTcPR2HNKaHuz9dTe54XvMWEz6XiFPUc5j95hv281pAaY56cHB9nQdQqjn7qd9un",
  "key4": "is7YG3yn4HGwNdWeqcMrPKF1xrM86SSqaJFYtr2wcPFcDt6n1shTDpfGEzBsXaxC3RHJUcGfVjX99BM9MzQsorq",
  "key5": "2LVXCks1f2CYkNycmS1rGtcks3a6f1ViRiHza7cUen6yVw2eVLCaJGucrwDDPB2YurerAKCVSsx86Eg8Zvb1WuJs",
  "key6": "6S1EPM5w3extongPf7xPkBNnHuLiDsbWztNVBEMJya7Rt1q1cfzxyTZSR9fHqmmfFPGFZFoKuo8JLue9qyp642c",
  "key7": "4WMvgBbyRuznaZLyMZZXKqPxfFz7vugWFJESxLNANE5PW46GBSXECWjnTFNhgixVFrzv26J3bFm5eezgCaVjBXiB",
  "key8": "CFZTntsjnX8esDqnJDcq8W3X6oqaoUnyFHcX9nzzGssV64jqTjgCH91innEAoFQpYfUZnEaXHQycso9Kg32NMev",
  "key9": "5DcvrmgAqD1TJQvbC1KfoQg8nP7tYPDGMWAxZUwmDUZnS527gEraun8ggwsm2gcjeybNFkpauziqXQxyqDLFAmLk",
  "key10": "NdCuyBExyZ11DVijJEgirNCLF8Re4SrLLmEuZe7QNW1a9EqorWQyvT4ktr9bCRtMd5veoGMnB4Xb73rBjo1htvh",
  "key11": "DF4pnfwx4FqXoi7nNMfzSMVPWzbugJtkyvRKcN5ZMBgDxKVyTwB77HjBK3qc2NSE6MS4NS3hwE4Ye9EKCE3HLF1",
  "key12": "58UjuXysYe5aZEuhn9gmdwvktSgUq4nf6jxtUyusBdBNow8eUnH28xNxaFeSvfRTGgifER7MWEcYUwVoaz2LnQk7",
  "key13": "4Dgxmc9kkrLHQeeWwLL9JyWsUYMczBTTxgVfpkL5axDSuQ9JrCi2LpeUCVBTEME7DPFz691jsqDsKAfB2hEPxT6X",
  "key14": "boLMPUcJhqhkrmED8jQvRkQArmTXpQsLjHYDfsq5yUezyCtfn7YsMUXhps3prfqHmmRm2SFVgaBXKwjqHbEWp3E",
  "key15": "21wosGBXUm7fj3cn6y8qr67LRrewLSkcQEpYxTvyPKU55C6dL61tXDVPdQ24X1yUF8Kh1acV65NAe1ewsNj2dmBi",
  "key16": "41S59SGT6hoGNHnysvpoVcR2UGT5s74Xf3yJnit1BQFvqvasnKM7U7TpSh8Pn2YxFzGVEzkhZewNKt9STgRNcmdR",
  "key17": "3SobpddBXDx73kCi3mBHFvAxBHuWWfRGaPCsSFZTGPykT6fmyjR6aebi96RqGDhuw4ncfMYPuR57WCHzbPk5n7CD",
  "key18": "5Kb2HpHCpozPDf3PLJV9uAwmCKjukCi78DsMzutyBgybz2Azf5iYiMjBXqgyVuDiTA2P5dYBVM71qpFAJez1JKd1",
  "key19": "5yJooYP29hP5DtnKePGthsuYykWeQvyuh1CT5wgdHYeqdAFkGtZe6NVrneJJsRZ9RSEC229HPzLbmZCTmHsMyUXC",
  "key20": "34o7eFNSbXnAWxyfEH1axNtvvmMTRisKieVJgMVQxDLEsbb8Mj3WmS6ivTAydxHGfYr3rWZ4XJRw9EMfupiYFPyx",
  "key21": "2ptrSH4aJhJ4uHzgywSAYRnRdHQETi1btxTgtrYohD19qRwgFHZrPegowXuRbNRHHegp8aux25vgKAR9knS1xRCT",
  "key22": "5ZPpLj91j9viHVhKR1E3q5vQFtYtVugQPwzx1D4gAP5REF5f9rJSjPeUXrm9jcc5Lx1gHK3KeV2mBnziWjTcXd8c",
  "key23": "5RFbsQeb3ZTyyTq8fCjCPNMrzUVFFkHziEfUWLhPFg2ek8tZiyoXsVb57XvJ8NkzvDePqxcLjS2LdeCCYBEECMVi",
  "key24": "26CiwgC9pYJpcQcWum1or495rvvegRwsn1uZdxRbsubkvuVz8NxVqdL3RL4aSsvt1HTC8mxFM8xLBAeQKYGcXwuh",
  "key25": "5aGnhGm9ZL5VCeDcrvMbKjdWvBoS7SEKLSThwKn9YN3XBoWQa6JAPEHQCzjcB1oT5SYKJe1ghFbUxKeR5wGj2EPc",
  "key26": "2GhZfghG1Ly8J5mhLa9i7PubBG36SADyenTG96E2x6X2A2HTCGH4mep7APMrR4HXkUvUVKmQ2A9SdwnnTFQ4t2ms",
  "key27": "4otxddb9MLoePtNacG4j3nxocxspzkRMNxcjTw9dQePt3KjcFX2TDEiJ7VJgXwYDesGnChoEoDYwXj9zJjp9BvNL",
  "key28": "2etRNJ3B562wQRFAFuBvtXiKDD5Kcunj6PxcZFxjMdyyyDmEkLZ1NzRQqyMqL29KrLLKjxrVFzjXxC7bxBsJfuKy"
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
