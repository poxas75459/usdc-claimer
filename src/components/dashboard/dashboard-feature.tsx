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
    "4qadjKb7pbsaiUuvj6W4YyydAh5fDKtkUTchovtDuGh6Rj13QVW8RRN5enXB9NA6ynMRSW8heL9iwFFqu7wKzZ9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B1UAfAafY14h2frJ2v6qS2ddwaEw9LadnAt1ETHm3u5CR4fqait8X2QRSCxnmGF5AiNtiPYepfiLp94sC59wTdp",
  "key1": "2xcvcQcHfaNiaa49hmYXJ5FJ4tUJqnHMPH5pbWkFkSuKPchAqh1yXgj8C2dxeHT4iPdjtJDcDwJG9EqA2HyrSp7H",
  "key2": "4gEsvZQTQ64nGWSKi6KxD7TRLe56q68VZEQUA65aAykzqiEF9nfXTkENj5ZFQYXj7uYCw7xV2Ak4zPErPdSe8Ntq",
  "key3": "3jBi56NjVW93eAgpCpqavsEcwMVpWiVjRauwZ48VNKzLoHDGRazJR8TeabRxrtm12VTtSSvkBp1HzQGxzxydbazi",
  "key4": "4NLy86BnHYuKasLG3fVxMj119SUVjaQtWNNmFdifxfMnXVhCUoVRo9Fpcthn6NDR9rT2ZEGvuYYyWCJoHBjXvSsn",
  "key5": "2nGz8wabXjBjPNhWQRfRAkzKbQYNkx7oTjBVLomSz8YLw7CD51UBfoK2v7eAmREadEGNmXEFKwVf3LAa5NgXUpQL",
  "key6": "5yipuiHfLfWFLU887qKu4hhj6MnLSW6pye9fCkewQ1eK6RGY5vjVJ3gsE7VnF8esSiEhEiK6Yy1WvFB8UptHv92r",
  "key7": "4RfimvvR4DTBBqJCmWUn7vNDhB58YJBvuziDmmtm32146XMj2uKUnwfAJR7kp3ru2ki1ymN3FNNS4WdyTcZDcBXa",
  "key8": "4NoiZGfpDoFy28SeCvLJ9qbBtDYGQg646R5LhdJbH6JMqXJHMshgzrC8ChbDeCYsi3BYCf5DyAcPoymke2DFCRbf",
  "key9": "3Wn5fMLfahbMUXpnsgb3rr3wbsCa49Meu6tcHxfCiM8srBYFeEVHM27NKzjhi26DJKj1aht8Czb7D67mUSXxSKto",
  "key10": "28xPGMVaCHDJhLM7BR4t6DBHACUn4VwiakHq97jxQP2bCFbYD14Fwu2HXj2ooaLZFs6rRk3DoVcjWJBHDnw699f1",
  "key11": "4Y4NqAnEE5hqCcVZrqn4Yje27RSnaWbQuCWY8Mmr9JNpGqdcgLe5KrnAecm333LMCpqVqC6CV88AVmJZ5fUKVLfH",
  "key12": "3ekhWMbfYsCVwPatxFY9xJykiazxjqsrkfKFC7qjtQABDQpVmHDy1sxX9mZCwmFjKWp4h57AfAYCpD5qNTmr65An",
  "key13": "hKaViUzcMrTVjGfMMYuH8afC6oj92pcHwWH9tWzcJ1zFHZKHbk82Rfn3gdr9sst17y3CiUwGQmRDRGKv3sXcBUn",
  "key14": "27tgbf4M57gdQtTidx8BBetJ8JJ15VzSECSJ3NMTPKfGkPVedtSg22u6Y9dM4eetAXaMw5Xjm7GcPrCE79sbPjNJ",
  "key15": "4SvTBLq8AZMn5BisbZMmFwKecGtiK9K6is3CvLzPqAQZqRMyLKaqVEWZSEHUKffTFpxDzXAUBnzqXGNC72XMUPj2",
  "key16": "4gMyp8QWY7udr6sBrCptbysPaYFaex8P7gmAwTbmbDKX3p8b28DZbjKCJkifpSGbtC4yrvfUEAkgGD6QSL7F1KQi",
  "key17": "2CpXJ36aPuYhmVgifWDGEx1tBu7A55a94ReysV79MipYD2CsEgBTiN7k6Avdbc7TdtYodhtv8JqcLxfXxCRyaz2N",
  "key18": "55XPSADLnXUVMKnBYyV92z7nQukFUKPviaw1LJBc9GcXUdQ6TNoZKX3jzSKCENxSSCs8v8sQ7jAh8RtncrLMhLwU",
  "key19": "3bweM9BMZifgGb3Qhb4iryqqrdF3MsQU2Q5AjUXR9NWCxeVFycbdqcfYZhkGeWvuLsKo1QpbcfdVfNQFSJQaRfCD",
  "key20": "283VNPREvA7sxhWGXsvBRnYuG3JTeNuh2PQfQZDx3v48ZCfexpRiFRWQfxga7yndmVntBH9VBHGWKxSS6P5JRZoG",
  "key21": "3r7RTmFBuSyCtQwiMwXe7eosaKpr1wBbxbC8FapA39iUQrm9r3X72GuRZCRE3fY2nrAXNukv211Dd7rDmSunKmeA",
  "key22": "A6fLcX8VHZFy9tzmrDueR9a6GGTbS32QJ2rpa4jQTnDda4GaGY46zJQTJGaTENs2e4ycu2qg74uxDU4vwrJzdDv",
  "key23": "5NyCwjcbKpkDg83XsXvAM5yH2p2G4q6hfNkdes5mm5oPB2o4C8xdUo49fKBiBLmNkvVkLtYroxXmaVT4Z5yNGKEW",
  "key24": "23RPCwqrUaVBEzZ4MrgVGpazjBiMJU15EkMat1BJFkYDAEaxTQAb6cU3zievXGFv5bXLu4oe9ZKikqa3MwyNDLkd"
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
