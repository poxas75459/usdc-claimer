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
    "22DxTJuH2HAHg2uC9xDUeyCgSc4obkatbs2odysLVN3paTW2kfHYoZxFhgPa9VqVtcXW6aHcGYjEZCsQiXFErq4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qa5B6uuv4QNd4vsurfzY5imipwJpVPffqB7uuix2b6p1fgZhkbunkTV9wc2QwcFqhsXL4QK5t9fH9gbLXjDqMyp",
  "key1": "S26uDAdPD2RqVPpr4VbDn5xymG4HREtD4Tzssn9uQ19dqT5GZtDs5MVU7o6xKfKFHzJaLvaj76vd4C1NiA3Um25",
  "key2": "4gdWP6aJwwy1PXwRBw2qV4GuSbomNBCn1qrYdVZTMcVBu2fSx14jhoeWcWtGHw6JY7LofieJisTmYMbfemHpDwmE",
  "key3": "4eF6qi4g7HsoXRkGpStoH2tpwReNtVEdPDFeW1C8DZ5TThz41ign4r29eeFbVvVcY53hm7biawH9HoiLmC1LnSM4",
  "key4": "4WgYDVJqQQ28DLBc53LuKHUE9JvjtFPyndGmysBbwTb3GFDHDxLuctVPhB6ewrAyH1bh7fvSmshz3tCStAMymA3D",
  "key5": "5yhnzBwuvbCbjCQKYqp4VeC5U2SqVhHLunSaDgdqyjZ1NqdMrBojQRJun88J4aLkFDdGxyMX7ZsQU8EotEb49C2V",
  "key6": "5RopE1wEQAwgAvPpVXjYXaud9LEkLY7MNVXztJHrtQ3va15jj3J2C4u8goE35feA2MaEPHYkKm2HiCkC9wNsBi9e",
  "key7": "2qWzRXsurokn1StGd85tzEprR7DUJec3ArWvatJrW3YABTBn8e7pyARW16nPJ2YiJxadDK7A3PxXsfT4TZyZPKEK",
  "key8": "227gxW1EwX45UtHWqBh5sh8Bo1wqyTDpUWj7kAqwPeNwQgLfXHmaps7jsRadpXit6YZDzYkhLPpWDAfgQvHdGnpW",
  "key9": "A4hqGLq6WccDiaUsaABkJyMs1FtHrnJbs5wp2p8WXre2U2ym6Eyok1BmrsUrXqKJfxjNkMAntWX2nhQvpHZu5Ea",
  "key10": "4rkuYLSvL4CRiJB8cScPwLshYDrcjrqhTKpZqUiAxZwduUBzGUiwiWDntpNLYcenzCB6f4U8yZP5EQs1B5RFnpSH",
  "key11": "rpidi7Rp9Tw3zAHfXzmWaJoppENfpsgJx84YTTZKe5tb2eDbGSW9u9dsKHdcL3d6LCAt6VFTWjZhZgjejckxAkc",
  "key12": "GYQLuynhCo9A1aheLAvE1JoQeW5q5JeRJs8dWMay8Q4s28XtCxG8gyDUmR92yJ3nE1UjdWNoGd45FwVTwJMJecH",
  "key13": "3uHAJHmvJh2MRnRp2d85xWLgXHzbbdmzLCXsP52pfmk1iTVKRca8dPc5RwguivfGxapGp6bPPbjJFH9vhPDEbn5Z",
  "key14": "4CVDPzYTncZBzNxiT3WwivHWLrPiFY4mais43QgVMAE58F86CH1hsnK23RZ7dUF1aYQ4FqVgqKyHtu8PvNwzdtUM",
  "key15": "5dsbwpnhn5FosXsQFG23YTbvonqbczZ7ik7td52k2jkjtQ615zcadUx5Fuq3ZW7nXtgsR2xeoa7sbeYyxuu3xeqe",
  "key16": "2QLfMuG8fVZQ63hZErWAH3pvLnGt3WBUQZmCxFpmogr4XA6NB8UZw3ERBDcSVp8omqpLGWDByiPnLwZhFoRwVi9a",
  "key17": "3C4knhvkczYKd98BNw2Tuese2ZhhbhX8hvqrpBtjyzSEiCXyx9jSEVURbDHu7B7i738sGaLn3n1hStMK19ejHvvW",
  "key18": "3P7o6vNbgZbLv1AVhTBt3uwQSSWe149etXNiUAVwX7P1kNbdRZ7yhGPRdBeNNoFagmZZeuqGr5uPjinXhYEAwxRP",
  "key19": "22y6F1ze6NsujZ2bo8XzKi6WM2Uc1YcdsrYRJWXWJgvWV6iiVRayXn4wtSEtJMRrxKbc5kDVpcKyNU48W5EsNgMz",
  "key20": "4ZSc5LEZUZoqfiQXA6A5NjBDtTNnCXGssMfmzNkcNqgiwS8VBKchSaLnuHqwGk7WACdML69gBPH2BMbCzSVRquf7",
  "key21": "2hiU7MniwigLHkPrULphZ3ML2nSBGTH2Udf94RWtiC2gci63AuTMwRA7xw7mj5LN84gwnDiT9Y8wHrM1DcxnSFAy",
  "key22": "26y4NYZ91ESa9358FwMJAT8xUFSokWnd6MNpCG7EuYCmhd6fAFjpvMNiAxQqsYu74BHtnxe92YL6xgLy817vKgok",
  "key23": "53syKGxrHQEHL1a8JmWeUsgzyyzvHkXFnvwtZjoMNdudehtzSbKpq1uxNRk4LVzpEQgKiLQFKPdvpMhY5AdcKgJc",
  "key24": "2wBxz5A2A4axUu1ivA4ms47EZeogv8GNusF4WkQ8AKKyG2yKJE8LfaULNmmA8ywiVaUxkbVXprJQ9M2UxfhgNp9i",
  "key25": "eUuywbzMh9kZRiJFxLLDqe2nYuhGneUmGTbn5nVn5hCD6shbGFHbb1Bh4LVJwmkHN35mSe4hLcyMSwwucipvT1X",
  "key26": "54HGaNE6CAuNwSNPKSJpqHujKgd1uFmTP5mTx5xCWaqCNy6awiL9zjWTpZHtqZSYJvzPR9WMZsXCweHYSxRTWo8J"
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
