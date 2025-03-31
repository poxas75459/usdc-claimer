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
    "pFdrAwmKrQgwM4gtFY8kVMfNvAyGVf9JTLyuT8LCgmsjzmgCDxSyErsQmhY9qhaF9fXmQnajS2vU8PoNNyhfXrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G8wbqNYp98forJH8rju6pknwWEgopLZjx2U7pS7Fgg6THyRoFtJy1ox2MfK98n5Q9YBb3La8aPtokgnJVTYrTjn",
  "key1": "31cq6pVK46A7EuDjHSnp8x6qbWRjuxrkH9HAxB9eeTwiYJP9S1hpHjdha9AvqtzDk9iPquBveNyUgDnjuzUYM9eG",
  "key2": "54tfHWovCRPpARr9XoejatsGf14erjiAkYYVw1dUrnpWPs5ZuSzsiVCVKj9PCS6FDr8azTBfRZ7bLHuEzDzD7usb",
  "key3": "D5CaCeQuyWRHeYCfaS6oVVKgcmD3fvsfk9AV7UurX8MsAGRr9XaVHC18K7tcSrBLd573PBFDdwbr7W1me1M8WTc",
  "key4": "55BcQawhMpENLgiYwF6Ho7FRSUoiKKzcpcXe7fYTmoctSeNdsbVwor3DKAw8yAb2XkJxi8aHNJoDuXtb78wQF9Mh",
  "key5": "DRQwkBTQJvUAFuiUXXgXfQVx4axRJPGaxzonJ9bwU9L2hG1XiTnqssiM2Ke1tjN1P55bHiKCQ5D7PFtN3izkPQV",
  "key6": "4CzCtoKY7f8EwQ74QE1TfiucX9x7NKUTUiZTJ1TAi8nwFkLuGLUszkxhmhag6v63YzVfL6LCxpGtwFdB47m58FRg",
  "key7": "2dEm7DkMwv258NJNwPLcu9uGaTLRHyNn7VpAeuoE6Htgiik5mdgcg2MsAfHP2moszJ69AxqujiWdDDmDy3kPmkY1",
  "key8": "24eRgrgBwJ5EhLwmR18agK5y3y2mnLPYXJVnA48FE11UCa43wjodrvqBEJRxRTPuRuJ2sxurBUPwyZaYYJq8MuHq",
  "key9": "4KxAePBiwhcVuxziSEVy2cSJBqt5fxF6ZSAWkoU2FHwjKQPcN9tTrepA9KL8SkEJmBMeVfSrnGTakcrch7bb7wpA",
  "key10": "4bzW6N6CDZUmscwwRKsypBkEEvWnqfrTrtoo8911b1x71nm4thH8yycSwov7sNEZGEyuop6ZvUQFxC9BF2NQNjP5",
  "key11": "9EmHLXYzjVoV9bGHaMDQbdVmb3htCLgjG833zd7qXHfsvQudRvbqU1FbSbsYnfUAVPjSHg6xMU8pTbtvMLC8hq5",
  "key12": "3rRibm27ohZNHZKmvssTcyJYTpWbvae8ko5vNC9XEomwZU7DnD56VTNoz1b6VxRkCMSF9qen9DU2xvA9Mv3dv4V6",
  "key13": "4vCrewmLQMNdtHtnrSwvJqhSTCQVTBpz8GrDzcaRQh7XWtfV2uJdL8CXwAYkZ3pUwF6h3ufZYag6mXqF3w83LwU1",
  "key14": "5weGjSLStFSHsVbQnz9XwzrXubB1Bq3zQ7b5xzD1Jqmc9TpA1U7kVjYyexgSDBAJ1RtttzuRwoyi7exL4J1HBKki",
  "key15": "53Jve97zzuAp45GzouLPbrZPAA3KHNeGtE8vztx8t578iohMMXM1RVgXVTVpMKQC3wjamNycsxRPZs3C1xV1WCmA",
  "key16": "2QuX9EbegGp4ZuZ5X7KN2nuksAky4EvCdmRAh4qHNsGN8m3nCTKc8xmy9nwpkkgFdRCuzXuVGFRWpen8BAtEougX",
  "key17": "2spHjhcXqRk8T329NiEV9EMdRmvc6dVqh8XdeuANxMeS5HcGkz9Wqohs4TPTAcTxGeQASzNcLQbtaho83zmgQb8B",
  "key18": "2zmKVDtJzbG3whwcMToCDmGvBQv6fikBjK4sVeh8KggxDLzwghAzT1dssW9MzxJdkeHg4op4qMra6Uvii95BApRu",
  "key19": "2vK3zn7tsj3yprVfgYfT3t5vkGsAJQnUuCCR6ANJuFUwsKLUN64bmLAUBK7neyr4pKHuaqapYrnLXzzKichnP8Fh",
  "key20": "4WQsb2zWh6snbtejG7njBnShvtnMhjgWkH5e4T5TMFwyi79siwVe8w1FdYCBZtNUcfxaWs3TohckGn3vGT8hGfri",
  "key21": "2iZkfnuVXGT2DBWY3tJKmUijq12AUy2LKTh6zgR8iuL78uipvK19WJvbYgEfWdsuZSa1L2h6BAFFtLz2bTZGsW2W",
  "key22": "4vbdaexgLQSu26JeAmKtk6KiNhb2xhZumAZF5ePquh3D1KGaCAfdevfJSj7NZ8Q78hnTgiQ8Ap6DLQCq3ZAQpAZa",
  "key23": "4vYZS6muTGGEh1AKEwu2moFTUk3jx3ZoNTQ63Rz8gfU3XDK4XcbNCUkSTQjdDkok9SvD162hjz5puKNN3YGdQ1R",
  "key24": "5iH5SaNCTku8CzppDM2ffaRfMv6Qmf7FuubJy4gcgGGnDK8NdgdrSY146DzmTDyGnJ6YmECqFCqUuFTntrxV3JBx"
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
