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
    "5T25Bsr8UsCyaPEEEFNAbvxGv22m9jj5w5ZY8NjDQGBtPp5DseL4ad5ZW76mqBNQYxbRLyPhijvN9ZTWdBuMtRC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MvLqDkw5NKY6tdFvd6zrYHf3Etxj2CyQzTHFPFTTRNTpy8NBwmzxNipvqV5NKUiF95gAPC3EGJVgsNVKpu6b26M",
  "key1": "1WJ8d4zLKqQx2B1dCm2eBM2wABDZ9oUjDjPQH98g4whPQmP74dEFD4tAFtQJojmEDEknHf4BHH38CVWhVzGxs4v",
  "key2": "4QdwPdHSAq2e9AHKpQBGZ2JHxpe24iKgmVBqBLBryLeqgtjVJwbP2nWateAVX5RsNYpRJo1wVm8YYuRgEzFmt8U4",
  "key3": "M92B7PRmJ1Gv2PHos9P6E2JJUcBXChVF4qimrcgaRutuNbTHyN4ZMCMxTbuUds6YwfHRwfqExJk1FiqX4p8D6ep",
  "key4": "3TTzKurw4FcEXthqFreqz3iyWSvUW49nmMwjshWNsvhVFWPPSn6hsqxrPwUm61eG34xn4eCSpS9BnaqJd8BakwAZ",
  "key5": "45qU8dR47ENVweiszkAERfzNJggoATMPm3nTTPV8nABKwASdXF3cnBuUaeV2NHnGyG28zLjeDM3sa9XA4n73Bjsj",
  "key6": "229Y244BoZEULACyy8fLUM7VqVTtpPbWUyhzei7E7uGUDBE3QUKFZBgRRf48hxL3yJm9sxmN2X69RZqXaDsjE2pc",
  "key7": "njA5m6Mbh9EYVbwn2tskwPXcbMoVXFotjwmsAL31XGU5GFFgpb2wVrPCRDYnnzG6Vgs1NMihKk6xSGoWNrhHrqP",
  "key8": "5SB8FMCxNZPR8XBGns6V6zwFJRNgWaLwVUjTpo9Tt7VDpjB8r8nLLH8sc3inE8nH7j3wBq6q739nKjDSs9L3hTqJ",
  "key9": "2v2JfWbXuVaJWBAA6Fm4LkGcibtYyuJzLVCDJfYUAhUFC9mKJ3fndLxXAL8W242eaBLkbFkPNoDdoeGaUkTRoS6R",
  "key10": "ZtJ9s55Zy4EmkBHGY4DNWUGhyXtQaqFBjG8iPZwL1qyf1U4GNAAUXa6aQdrpy2Ns8BkxsWYqUr6UbvHRuQ7uBNr",
  "key11": "57QEr2FTZnVNmi8eRwMoKUqrAXLSGEf3CQ6X9VmfwjdrXNcEJRmz5LHQN4kDxGuSLNF3mERyA7tpTFPo4h6oXLx3",
  "key12": "5iHTi7h3FjyD4h6jHqBq36fhxjb2aqkv3hGZAXyz6k9fPJML9Qc3KJESMi7GdEKeKT3DAa55ZimwBYMyD5HLtJ12",
  "key13": "jngZPsGCWVxzsEAD6ma5gmUk7WMZG4HdQmVnbdR1o5eN2sMewnGXEXDTJ1jDYi8dcyzg9CQGYXqwiaNAWbPLarx",
  "key14": "414APhZgs9t1YUnhqtrm1SFSmRQfRT8DmwWt1HzY37k5pZWChviF1a4fyfVG6n7ETfbdwL7JuNDeoCxScYeF8RWk",
  "key15": "3KbRVekhwMhiniXENsFcvWv8H19JE85X3ktLgDokZG81jxBGiyeBS5ic9hN3zJFbvDxeLKNEbXtj1CX68daffp5z",
  "key16": "5WytY8xLsCCANihF6HNnso5eiCZV7VWht9UEpKH7B1NEiJdyaheWaKm6StUYA63Lt9MJuSkM5wVHgb6xA2nPCvaW",
  "key17": "4B7v1U865RQsW4CNzELWoAX2gG9UsFNCDYrookgDJxL2WHv2SB6rs1J6tpxqxLQM6oDGDBmUGZfqnqvfmjitM3dw",
  "key18": "5mSW7G86m7kbUUyZhbtt4SRD6SfyqiwLEL7dYDaZ9vQpBbcbbB2QN2JKgg5caS7SnrwY53HJu91E1qcJTuUAbk8x",
  "key19": "t22p2ca9aLtr1AnbJjfpQLyZJ2sur33K8mcYssvaY9HRinCfmUmeaFq1gmYXTCbP9NkYVswaNGMJTbBSVCTKZcm",
  "key20": "PBUktfmrrPcfoPpn2WK6VfsUL4RtyYS1yxNZ4pg7mtbquNNsL6Tovq5Sz3okEhB7QqpAvfi3auWTNMc9pyPcQfS",
  "key21": "4FoBtmM38Y3cL7w6n6J63P8W1WHEkdj82wc5BbTtkqktgDRwMZzwG9Wf1xb2fT8DmHYqFquqxHotaCC4gSdjgDZa",
  "key22": "46Hehg3mmez5DLy8pG5Ug6QCtoDoXMtMdTvBJ1fPKr6yvL71xUJuBrE1FMj8LJLfyd6GA1d15YQ7GzNsD8kQ1mKQ",
  "key23": "nCiDxqpiuW2o3QsxYgkALdDUuJiSdcaZueHWWj9mM65CePkwzT66LWX8WNngC6KoRedTZcPC6Bq4nG4gaW8B3hh",
  "key24": "2BGbATjmnLYyN6DuPVZauJk9N5ktTRB2GSDiPs7om7RFJgtKDg1siourArrqH2mfHiontsZHZsQkikFvtuWqc2NG",
  "key25": "61GvkmTeWeyB9cX3zPa7WxrHDUa4xVDPttraKqTy51gptXxNogquKyynWw742A8k4vVPPjcTZXZcKdiqdUn2X3uZ"
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
