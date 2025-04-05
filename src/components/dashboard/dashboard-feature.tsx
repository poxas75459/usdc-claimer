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
    "4AUdNMNSXF4iq3BRS3HoA3foxqP2hk1vQPjF5iCrFndR3rrwcbAGiybJJu28pw34SVQD9nrhyzCTFK8LwfZD2T1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q5mmUW7Qdeia9c8Kdvi4uHCHkKPtXtMjbYtde96fffGFtiwsCPDTmVYkXMG244GiCimKF7FiH7xqgYWj3UdW7ZX",
  "key1": "5hRPKKpxWnPUb8jXnSXoRTWQBGL1xhjj9g3cboYKLjQbRrhrPcGT9P937t3BaXYUSaVwVieCoAGWBTMk2M8Z3iCZ",
  "key2": "5iUZzoSzXgD14Y9RbEBKtZVTuSzs4sgidCfVsw2MdEyE1F6degtbBKLnGG45PnDCTaapF2w33zSx8U2X6UG6w4WS",
  "key3": "K1QtcDZfahWGwGTJ5zupc7T5HeP7f7o4ySmzkjgM42SJJBkko1ayiueqpvzg8SZ9YbriqGYoPbDMKds9f3EB4yj",
  "key4": "XHxK6J28VPfpuUi2rRCMSj9p4eMxbUkL3otSw4nqKHjzBTpgoZELuPx1nqjk1TE9Ww126NSfm3fGvrKx4RuowxV",
  "key5": "seMGjzJTDc4umQkr4qWFPr9CHNqU5QFiddu3SLVy4FFKdkVQ5DXuAYar34pyekrRSWWPFJ1Jf1MY9tri9sEUBH8",
  "key6": "4wxPWmEvUFkRx1cXqa7V2HWPeg5NhGxNC95Vzzi7vRXoXVbRaupSYEenUfrWHSdzNfocfGEWui7JDRcZa7nPGwEA",
  "key7": "xeRtnLHHaHWsJkCqt9emvRjGTeF1YGM9N1p42LwHLbeU3duXWA4JoKvodnaXsZVexcwurDbuyq3vXxDCqm4yAAf",
  "key8": "iFkoDLFvztVnZwMiqZQUtwMMYzREz2iXaLQtRZHqzyZxerM8JqNreCY1Z2tKvD8axFtYZs6tRp3iEgytBYdQQg2",
  "key9": "2NqKRmxs5PaB4BSw62zVgfqoEhXZn2fpwih4RxvT4LroU8aSEhYbCFW95ibfYR7hPayd7XvD3qBcB53NkeqS6b6C",
  "key10": "2M8AxV1W53w3eSCBNbXWnHA5GuDpiDWmDRonY3R31tuU4BUwiSSzpaqTxu5NcBnyaNfU9VZaHEJGRE3x6Wf4JqSZ",
  "key11": "5SteMdX8eRx35YVhBxSYLt8ML98cVe9vacVV73pvNcwcjn5zWKmJs6gTuxxBC5CNiWqsALjR225oWBF4GBrvC2bK",
  "key12": "2aADdcsjyWdGgTozpMLBpVmoD7gbFX7tU5wcehyEiR2pDPt9UF2nPL4YFAUmnMGmUWKn7ybL48g3qA31uTuAHCvH",
  "key13": "4UCh1mB9XXKv6Nb3j6c8RcWQyL52tiQvbLk5hsi8Ui8am1UPxmoVqUQebCYzVKYfsrrG23SJzeZYtFfRmEih54ib",
  "key14": "3mabm34AMT9TZsheHbEK1Eh5F6sfS6Edcgkx4atnTFDMzBXmdbvFmarsSAWRVDT23pXmKKmKoK8kgtvo443fTdp1",
  "key15": "5UNqecyNsjMc7d9qHAvHvM1KaQPuzUCAQF2HcTEyPfFosMsQKkmyqHtTCoDjW9WYU4RKoipH789goamDL15BfKCF",
  "key16": "51ZB1kzwDtZLkCMNtn1pqEH59UmbWuMvrSccUP7Nbmxqdh5XpHHEnmVMf9eRFzxYX8opR8GgRznFMRVV6FQvNBkz",
  "key17": "5t7fzEUthHQvWsDtQT9gngF3MSNzVLNezuE6PjsrL2Rsd7EHvZGjqfi9693Wyu1L9TKxNU95C8P5M7Zzf1DpDQ8i",
  "key18": "5GFtSarPP795VkSLT4Tpe1DzkaxNrqh6vUqvHDSUU4KmrqZVRukKoVTb2sCZrvvMMbrpDCpPQ5xRbyBSfctTG2vE",
  "key19": "wmSd2aSqbSbNpzAWaXzndABkVRgcPSYfcahEieV64fqmHvMC3VtJUpN1SdkcGcXbHGxXKYEf78Cw7Wyf7QUx37k",
  "key20": "3pTozW3LuVpYZqvJcHRrNEsbRrGKSbosbBpupd3jmfxgDL76k6yarvBEDYkau3Ki5yAaGUYTD5UQ5YrzzdRfsnSH",
  "key21": "4fAc43jBu3A2Yq1GyarVZ9ePf2bBsCH6EvNrKZzbyx2DunYVvbNaWKwJtdpCEHk7qeTTe3ixfX78A1p8iZCZcdkh",
  "key22": "4LXUeSbQZD56dY5FB9JuUZiSLYgz8msE2dwoeVfwy1bdEwyS85oW7p1PKQfPY5grU5dLRqBtXgUCzgp5TeXmGVmN",
  "key23": "4igLSzTwuXYq7jtqWCDPayQ2exp95dRn75PYtetNmq66mgt533yPn3kQLWj5QaN4nhzwYp1s4QfGv5yZUvhFUn27",
  "key24": "3aTAjDUNG93Ez9pkHFvgVJYit8B9WNiREeADDGNPFmGC6cXRkLn5XLXdsoPUSbPZnBzq1GnbmHxN3q52wNYCLLsa",
  "key25": "5hPtGwcxxqLu3RpoWCwcPsKNhKS6hAVEGaQXP8WauykrL2f8Wo4wPBvLUMC1rrHB47D7dhg3RHZzraaoKwpeXiBw",
  "key26": "63aL1Ysm6m5cXL1onWv3ey7mGQ7VVWr83jAc169tdU4ubMBA8hHwsESiZwtEjXao6Ge4Pu9gp2s8QtAWhVzLJdXT",
  "key27": "ab1kkCBWDJ4o948QLuTsU1eshHharK78fSZ4hyL5w6JAuhjF7f5nEZgjhb4nu4jLJYc7VPjDsb7TKBkEcamYWi4"
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
