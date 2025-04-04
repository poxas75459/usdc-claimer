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
    "5nFJjkSnHfeuqi6Q9wKiiFHFcWW1qYM3pn9rHR5s3EWjRMpHD3VLVEYeAv27zuUE9YDptKkxsApteBXRujbZC6Mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wcr47s2Mj6TjM86oTrYSMjoF1D311t9QR8N14698z6uyTHMQU8dTn3QzGogAxXyhxtyUpBz6JUN5BBRd7DRpxnx",
  "key1": "VxZPUhU6hK8fKytDSSgvTzMgCxVdjzrSDyA7sUZdgSuJ4XvURaKmGUupn5RfBB7C4dCeaHnirWgTcsjrDAHsb87",
  "key2": "4e7y6pNtxBQCw3xNwC3rFDetMcjQJeJB6fAo4wi6YkLGf3ruXBUq9TWLiJQZG2oHTtXJhv5eMKEyuVJ3s33Ly3jR",
  "key3": "3bwJK8qVcbUbn29oipYxtD6yeowzLimkZUtBsTz4gdGKQFt4Hr5MCQNP3A82P4EAZN56M1VZ3CgS9V3ktP5UP8k9",
  "key4": "3Tevf1hkFonsRgqFa1ZbxpTKeKAPKhz8Kd2B74kFLJ2WBtuTfqQ2XWtBE7aFD3biJP5NteYPtsznFQfnpWfWEwsX",
  "key5": "5WT5DMVo4viv9q8fmcHyeFqufzpYJ1ohRcpqZfVHw4tSj6KbjpQxnnXaf5FTCaawtMh3Xsx2QwkK9bUEBYv26qMA",
  "key6": "5TWesvshGZNGbpagPigAjpv5xhjAqgmpjiN1QZ6G92P2bTp5Kf6pwa6LFKtbNQNwTBNjsjbmGtiWdXvMLcdwMcGV",
  "key7": "4jhk2owC18XYpPhNSxa5vRCLWepeRHUYzDVpgNW3ueeZnkC4Tm5J5xwrX8Ms17erexqkPGhLEkExu14YK76fhMcQ",
  "key8": "2mUzN2PHFMzvhorTZF63ECxNYsXeB4Fcn4Rx1wkGaj64bLBrzxnVezzCUDyjJ1dNijyUMYZ6MuEi3JAsjHsGhYiL",
  "key9": "4t1A6DHZXX43CFczoDHuepAMmQN2xpxzKMeeeeSA7Uw9TjrkLB2q7aUNjZsTgrwqRJfKGX4p4B3x72ZiRHcoZp5i",
  "key10": "47NCzTzN64AFhxJyAaMN94doEQSwQF4UWXEMWhpw7DEv9skXe45i214wYBTYNeKgzsrYCWmTHB7tTprTuMSQMa9u",
  "key11": "5uv3SvpTzbAL67DsnkgKhmBipzjnXGRmeyqte4FPmKaffAsJPAn5fXk1ZrPQWzMmMi79ecYJ1CtARHMpetTuQQNw",
  "key12": "wWoCSDYmbft8bGBJGkcBgxbETuDmGs2MwpcGUJwkrPzXTuVTWu55NNnsK3zJwSfSvqobiayyejFDo4WUtZGtVvq",
  "key13": "2KJkcDev2n7NhWagbUU3XcT8eDXtnQEvvUTedqmGGoCBo2p6iPrYHrprjbx79B2bgmvp9cmHMAbcWLH5EqEAyKWa",
  "key14": "2LkPHmy7Q66BffaBsWSjndjWdLJbPazATn9wrGYjREKRK87Zwfm98qAfLtGs4DzFPVMiFGKowjzzcR9eP5xvvbva",
  "key15": "636wZ2q3vKmWSBDnBztrJ5KPLMDyioWyq6HhYA8trXLcV1gGU87zzLkYuvhf2q9c2mkAec5mZXhPQ6AbboiU5x4W",
  "key16": "4UwGqoBVgaRSFrCAcx5vn6yVWSCtQ8R2Aq8RkxeZdASPFnebEKFH8zipbeRC5fUEknxzDZidaMAPVzW2D9Qmb2fj",
  "key17": "2qEtEYemV5xnyoA8VMGMVSUjF835rJK4tsUZ1QkKMWca8c6PpnXGUyBeimvDUhDdycbroZFPgtepxeLcEjSuWt2V",
  "key18": "49E6dcAJzMZJxJpCgZri4woKjuyPUn46yY7S4juuJSeHsKh2Jz2oW5xS3R9fmupFt9c4N4cRKPiS9yNchjjkHHfc",
  "key19": "4F4DZg4nR84aBJJkv7rdhMoNMQ3BABNwqXn1tu7ZaGLvsyX2Znd1w7QhpWQg5CTD3C5sJrbsKLwEbcjDwWJuPHZn",
  "key20": "5vy6k4geCnU5XFqxB1cpW73qvrfJUWzPhqGzQDzNU7zSJT87PVJQAcXHaFW5LiDWJiRhTsgkMEybAfYUq8BZHKaa",
  "key21": "2mkNg4NkeAu8mTehV966aaD8akLjTXQyNc3hvNneocLiLSa54r4Yodi4b5FnZCogv7JPwRuHjmrktBUd9PRXe414",
  "key22": "5vYhe927oA9HVL7ZTQ2ZuKMgBCaA577ZjW6AYvfhJU4QDtLQd8T7UdxJ1TaSschpULmpAXxpMLTRb1yJUALuaNFi",
  "key23": "3584h9XvSm9TfFM3bSP9SSyLDw8FtGVEyXetx5o2LHWAdy8JeBYc4em3vzQss2DxuKoRDQSVX4iZJPRufmeZXdQM",
  "key24": "5ZKHyY6kaggWg7UtBdARXPsMpqrbprt5N1WA5hyPbFrp4xTyvqRPHYLjroDju4FZNum4ugownJRQ6WDoL5LwVRgu",
  "key25": "26T9vpaZiyupATiQ2D3ayGrnLfNT9YSZrcPRV9hRkzM7vYksbHgE2KFR2EAEQZaRGEVc6wpVTGtLTjhP6ogYrUHY",
  "key26": "UESbtptUzwcdiMizfHy8ppg4Hi1SAJYY6ZtfSyHMYFCXnVoA1D5U5XojzuFr8W1iB5NPYhKRzaNh6jBcSjqC1uX",
  "key27": "5Tf5VbJRUqAn5W96YVW7hKnQzYEpCYCL3enudZW5De1FXzLZSQPDZLQeb4fvJaPxk3cbQumdLbYNp8PgtEVz52aD",
  "key28": "5D4uvB1Nd142kMRA9ebdzDh1bewnzhiP1We3mYXB9oB7KtzxnQUJGMRd93pA2Fzwj54cAC4B5Pv6yDZcLjckrzr"
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
