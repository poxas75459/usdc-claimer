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
    "3dr7WCF9ndWidvxs3tgxisEEjirvZCH7LJW3G5Hs7RRMhuwt1ABjpx3C9mvMVB3rL7ob98E4xpxW3PD4RUoJW4m8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UmvS5weYM2mqhueVYQDwcx7zoYTBbzy2JGbQmHdPLub4kmYoM8YhuxareSK8YHMZnL9nYdvyPguLGruLh6m2ZFm",
  "key1": "4BBLCRSAasot2tFJqnxAqgarpJe3ETHuGYCVv1qkw3DtWRQH7fs5xf3CwPruvu8hXxMAqUA5pvs4YDWanLNJG8ci",
  "key2": "VpVLm5LbMXG7BcQPRw9A5M11LLeqjtQsyadsind82u4oSMWFchxe2kkRbzgARHxNPSb5Dy5ZVjFTQ9yzVAEXgUa",
  "key3": "388i6fC7tdjRfDCMvfpKsFW9cQz2HrxJ6jiNJYp7ZJjzhSVLu8eomQK5oLRwPva85ccphZJ3Ass2eQVkpKqYTGii",
  "key4": "391BESjqLstMLLLkjSTRMgY3uQgaqR3pyiXSFCniR97pmEh4kdR71oQtroBptycy25B8PLtuGwDrPiEbNgTBaL5s",
  "key5": "FNQ7fM5iQZtRYGehWRtBqDGqSsii2Cx8q6i2G11F8iLig9oUa8Eb5SFnzZ5a8WFLJrVAB2TPW2wX2YVdF2exZzn",
  "key6": "5uUSbinmnxmudmgcM9vxT6i2YRj9VpzRdNsZn9Y1ybKc7bFmHQpJ3hhjj1NRKnC31wJVzHeWUFaSNTo4s7Vkrvi3",
  "key7": "4s7qMViYN6ZQ3sREBmKTX897bUAecx1fK9Ec4mDJtL7QgQ1RWutbHAz1eatVr7RCWVzi54gYooKqavYorXrR2L7n",
  "key8": "63qJ7fHFmtn7AqoQjQLeNkPhvvNRQLT2VvhVaeHHDZy3e96Jja3nzZqQ2KZyJArdjYtAD9oporv4TwCD3h8HGDPQ",
  "key9": "4dGAQgrYJH4fS3yRZ1vNsRF8CDzuXAjWUVVv5HGCFXrw9Pe7oT5ZKHFfHAb52m3JcykqVcJAhTcmGiTRt1Vs34eT",
  "key10": "Z7qkPKYfEfRFJreqi6F94cEQsWEWMbXQP8hC42D9F9Tdecd2kt1qpGRDbwY7TUrGQ7cmTBdvf8VLpgv14uB4MRk",
  "key11": "3DQpWbc27uL8dk2VrCNC2fDUJVVY7B5W9KnExK4YFNNyeo8anSx6iwvCdyTjYyt9sLCncrqsbeB2LvNgPwHpkhfC",
  "key12": "kiXWoqDXeajBw6Rn5mj5h8BZh2KQxLfP1NnY18TpYqm4xChfgxk7i9k7T5Pf5SZ1dNARo7Jn4PxnejATMtBwTHf",
  "key13": "5mLsNnoFEzPCsBAhdH8fAx9Afd6ekBmvM8BdDDL6E5RezUiqpPEM1tCWjh7TwKVJLxtQa9DP44FaBBUYy5YpsoGd",
  "key14": "51oHFyUbqAUPHxhRp6pjLKLziyQduaoW3PrThbqYVs1UDEj1jT96VaVuDDZ9sNUQRCeFBzSWeaASaXgrgMYoofRq",
  "key15": "4MT7CvGGBmMepKLVDLCLMXpZakorsmY4YyGTgvsdPRHSdb427ZFfG83KxJA9NWvEJkiiFTytmpx6QMzpq64eGDrH",
  "key16": "mRip9MscDMKtWBiZD8tCd3GidSLroqGcYztGBbbtpRtNiNbtnbtyL1AbVnPV3aBqVV8Xj8LKkXYyTz56LYWNpfh",
  "key17": "36kx6QfNuJuFTjycXWR57dYRomd2qpAsVFPLfHCB1PzniQnpDtxDFLBuYprGgDskNW23CW1yphtckGqaUF3xcsHZ",
  "key18": "4dSvyQp6ziXoTnUC6Am5cNwHRz1fFdS2FJKGWD5ezuGBxXFtR5dd8amyQWWApryL99xCz8XiMqodJ5Y7KfNgAzGH",
  "key19": "4tQa2GXgVxJnkB238BERA2HHKDt8oRpArUzbVNszU2Q4CFoBSKd27hnhDX51THacUaCMHMru9JKRmHSNY5qKn8oG",
  "key20": "UpLnRXaxzeLXQ94bPRWksKYBu4Xr9cA3BNbPZ1oQkQs9sThwBRtMYiR2ygZReNBdKqTtCaTURGrgHdsrDoAYdNZ",
  "key21": "TzQqEY8utEC2p6qwBhi4LCQorozGftrBPSNPtGt6hc9sQ1ommjy8KxwSn1kJS3woi8hK9yyDTNrV4wL227XPGoK",
  "key22": "3UURP6R5xnqqdx1LSBaBDQzRABL4cesnDZLGDgi7mSLsj4oRCnzFd8FjXq8U7WzUtKEcNmc1ePk2chKgiGwVQwZF",
  "key23": "4W3DywvcuLNB3ei9zV2jSdJpBiE59fXgnQW1w8zZowtKKehjKDEdvFiSzWSWDTLznP1uvGjB9m1YuKYqgrTNeRAt",
  "key24": "q9imZbP7T6zcoWvxGkFVNetLRsvJexfYgytxag6t6fNSpb67AgdcNt5iNq12Y5mqXJFsKzAgZHEtBvHWoN2pqkg"
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
