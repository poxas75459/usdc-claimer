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
    "5CirXCB9gxmRGnxDwGfRcDmyiGFcuoPuEHYM4JbSF1Fov4wo7DMJ8srw93unvSoiJtQrsYtHoFnGmxgHUBM1ABmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6PWbdgzZEe1u3K79YJ8oNnqL9kYCxktR3w78TRxbMoVuAq1s1wDU7s3EzdeLd2qMzGn3dKABoNu83Ahk3u7bYY2",
  "key1": "4ydLg9U8o8M9aMSaCrLsv4sDYZQKWFWGjHw4C5YSCGWC3Bbmp89SuEp3nJEejnu8Q53VNaVx1WwCWbjTEa4gmDjP",
  "key2": "5SDmCCiy4Cp7dcjAgrYCczPJFEMBzyVG9KCqnejcEzuB3s7kan2M1iDFGaMvqiSyJ2PBkzELcBUUUWZDBupXn67r",
  "key3": "X4wFeEkoLAVZymejSn3Usc74if68MhhY3j3m9skdFqmyLHFNiMGBHDvorpARCuiQos6yprjq1j7MJVabeQ6HJ59",
  "key4": "2H3HhxBkwhAW7i4upwAVaW23X9Gc7rCepF4dPAoV6AEByomAAjRCNt79dVfwUAhQFbWudSpqGkUkmtjxB1H3LpBo",
  "key5": "2iRGstc8WibCfCeLhdN7W9yUg3y8CjiCBokNx97D3MZLeX37Wktrdcdiuum7p2LjzL4TsQrRdS2QmFm4QXsNNPjG",
  "key6": "2qK97KH6gpzUgbMiwLkRktLeypSrSjsufYPKmYzfHee78Z6cvpq2KZxCi7QKRdttB9Bfr58GcdebKnVGMmh2DwCo",
  "key7": "4wWEVrPVT7sscmRxZQzYqRjtG6HsmzGdkrbktzFKLvUi1Nyf3YK3RewzgUz3kjttw1qmMxHWjY4VvDM9YEtp29XE",
  "key8": "2rhyL7APGjjZmeon1dcVUJVUa5hYQBNeK1WSs3v3C2iuZSmiJyJfvTDdceXoLpj7TzEnSEgvWwZ5s67vVWPGaiLt",
  "key9": "4mGrJuKBkC2zNPrVB8aeKMauYWVf5bjGiwkDpEH7JjE9a67aMkh7sGfXc3whAiYCegjCEf9bnonKtaYoSXjCpUx1",
  "key10": "4fFK4NUTL5PW6hQFPLZo4yYnehcMEWdiQAFJfREhiwyQiPwSjN3eug6Qg8aL7ufLJP47nZJf9d1bdaiFQBN3zNNz",
  "key11": "5GEXTy8h92dkmCEv6yU3i7U7i5J9LnvBsEip6DDS4mMLxwtiSWu2a8pXT2kYRAZPp8p5MHd6Ktmieag1R3btxPPu",
  "key12": "2DUDZg96f3L5CyhMxCJUNY1nLjAnPwGVUGiHS1uMz1U5vYu35d5PuckrufKqdBUuVzwbMXCmT51baYjPgJecw2vG",
  "key13": "4T74RvwJbSuM6bzymQ4rqtFSMWdonALYTVTPLRwj2asLCTALnf8KFN9pxfMVJDHW4YPDXc2TTN79RhQKY2DbSAtX",
  "key14": "4YvygaT7TkgKhooMjHQYTfcRk3Yr9a1kpkQSVxNvE6XY1gJWDcMuD86TDZ6tJK7Rx8ZnXvaN7mUzf5didhGPT37a",
  "key15": "8Hgc4FVsrf1ZhjbPHVortEofrUku7cgB1cURVxAXF8bJF8ReJLKSroQvV5VvMChFcWJ1L9EBJCnR1V6FKsbL9iz",
  "key16": "U5ppPZyVLAsiVv8xqKfo2ZvBHooagNswaijcEFjJV2f2DcdHuzcbgSr8XHBS3EamR9v7vD6Fqqfc4pUpRLQSm8N",
  "key17": "3AiSWMABzXj9PNNbd9f9DHvfJmqNQhGb2faW8BuCqieoDMhQ264SdBmV3aJgw4kTfAbaCVUVNFXzMd3PqUChbvYB",
  "key18": "2AudgcoN5swVivByXyaLpSmWBwQHD6qFRd6tBBWnUW7uV4g2R1awHwmj3WTwC3WHRfjsx23yGkagaZTi6u44BMek",
  "key19": "5VcJwhqjnV2rasYSg1RQM8Wh8UtFxFi6p1jL5tiHWEf7iZfQoEw95mgFpNmHXssJ15Zedwtrx54y5M7MWTdETs4j",
  "key20": "s57xGkoNuFEu2wqu6h3jsm54a7KcYtDUz1GDGDbQ1edwwQteB2zG8uLzGNowEUtjjeVSo28Q3G6zULXQMDewvoZ",
  "key21": "2MfaWV5wZHde5CjknQ2XYHC5rJpgrfYNATgBi6MKd5hwJ3tV7GnVKAcc3xNkv9kJ3F6zs6ACsQ2fGUWDvdmVfYHJ",
  "key22": "4KvHdEVMWHtT1dUKDym1rhBCWCkDh2mvmPMscjLBMQhNct3zziDrUhQ4QCKKcM3bWVsoRQnutVnWmyXo36WHN5X4",
  "key23": "2WN45oLMAPUkqBe9YWULpiGv7ThypGKKqNjYU5jnfXSvrFtpqSL6FmBHrf1wHsG4FUTDcnsDeVPpMe51afPzrhxq",
  "key24": "4Mp3dksgPbhQefVYsTSWR2pMwzTk1msRCXsXZvy8xX4PVV8tmgBkgfkjUSuzFtoAP6PZFnm2vsn54fPuPmLgoJP2",
  "key25": "Hdh2VxYfATJnw6n6hiWGb47FqQ7bCbexCLvXQgPt5pZecjwPr6s4Dkpfyqcx1GiPwvNRpm7gAjKyXtHBBY1d29Z",
  "key26": "VXFAjFn1F6eyAo5hNJPNB7qNtnW898NCYxSaHm2wEzG5AjJmzEdFteGge9cYjDf3EKCfRLeE6CS1dpARi5P7wTw"
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
