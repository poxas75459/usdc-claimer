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
    "5dM53fVp3hw37be3oFdLZ6BgsLF7Q7e2w4edgHYQLrgdm2ivc8vGqx4eNeDRCjEb47jjZkCz8zL3Jdbho2adop4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zHb16YLVT7dmgcrGH6dF13Q48hfsJ9dBTSGhaN4bPx2hFYuRUHG3YySuP2uhXdSpf1y8tp6XVTdjUBdxzjvqM94",
  "key1": "EWoaidq71thXnBeXEFRtA2GkYx1Lyo8YCFGCiNrv6nP88bjCsgvDCmmg8m4xZbbFffp6ojAAZDAGDDeRi3au9zL",
  "key2": "8ui73xjbNkj5iELXXP8f8tazFDaViYoJSAxJX34JF1rwDvoeSn5tJLGVwmEXeDyyGNbcS4dyZpymj9aw2g86oXt",
  "key3": "2e3Jk271LBTbSNwzc1cXG3QUD5dRWhdvKxktw13JRKu5bEWwTxkjW1s7LmEDgvUHReHae2meZTwkUGjyGVDvjeU8",
  "key4": "3oGoK78qT8arDThsQc5o79B8xwh1cJMFf44HixTpRZHNZ5CDqqZXAtBWxGEJfhXE1MRcdiSuQJ9UZ6C8zf9k5VDc",
  "key5": "4supanzzBYsk1a2iJJ78hu3HgaTBti7rHBBraAQawDRVyKVCxcrRRv5CVkzhw7G9NwuTX5RCLhS8R5kk9MZgk7mD",
  "key6": "4DsdLepf4sYcd2E8fT8NPheV1H9BLRqde9vjWcvJC6XWMMrZJhd84MCvuqtaWfWMALRMx4mfpeAzUveK7KZBpbQD",
  "key7": "zKwwYyQJxRfXeQRPhfxHXagEYXj7uQhbUtBuJFwNGLyeEMQarz2AKS18hgtydAFBiM7GcSWAULdzS2TjtkZVj9d",
  "key8": "SDxn29qVvFCjSLTvoSbKCjsNGbo2cMsqKSWhyk7peod2YTfq7rmfEEQ1GJi3peiwFQ9bkBrwQPoLuJBNBZnzoX8",
  "key9": "43Twk3E3emc5kWR3DzKjtRFQDJ461wRdR3tFxTtED78xji43b7gUiDNy1YNHh2kj9mNXNs8oDeFS3hEKiT46MNtN",
  "key10": "2LjU9Wq5v1EAbHFRaHGoMvtrtAH2i2MZLiDAC4D8QkAJ8WCn1ySeSFkQtGMrzkuUTijMHo8zjUKhvnFCTyfGrJiq",
  "key11": "2BBuhKAoUcfGVwf1DeNDJHDvsUj78e56EooBHx9NBHgosrAebFYrZ4GrPCW1ezNsA2yhhf3Rkg8yGCvdfdN9PnhM",
  "key12": "5xUKm4c8KvYCKtMaE6FGaDCh6STSuTDLDmw7Ueux4u4p6Ca9bF7vV1ihK15WmRJ9Y3NAARFon93CjUXg3vXAXnDp",
  "key13": "38y6BUvGjfDFvZKabHC4iEVSGLp5fkwYo2DTxrtXige41PMajsK8hWw2oNZdtcZSQDBnMsq1jmuYJ9AfBvmn6gJj",
  "key14": "3TrXCEpYVZMYv16ia7XSMEztjpgjNXuetGeWmj2XE1CY7YeEzig5jJAChTdRcR7mjU4VE8Hcj9XZpMVmuLbzcE5z",
  "key15": "56BFpWTqRu5GsQBqvPBXLnQToa61PFDTLop36AG4vk3P5NZNzmm9enQu19eb63SvxZ4mz4uDikrYdWw8qsZMAYFn",
  "key16": "3yyidX4SK8R8sST9L6j4hqfkBMDz1mjDzVstDioVCFPVwwqFWJLWiGWbF5wiFpMGanpq44nwNYHNfbPXmRFHDWx9",
  "key17": "5fA2tWHWaEKJfVkQCoNWX1iodLWZadnWNwEwAtLJhwvvZt3h5hUFFXkVhgWyACurgJ15pKxJLyxnD26r7q7XDcUB",
  "key18": "58sBoch5RKs3iRWv5YtSvtxZfxZqSfRm88cdLCugY9GNohA1zvaxrVTeV7AQq37ChDCFFBQLsde8H6KGqyT8U39H",
  "key19": "tYpWqfMxHxLeALpH7Cy1UbozYg15ZgJRiJqGSsUae6DskJ6FBmQ9tVk7t7umEeRaDQCCfqL4g3UmvYhQVWrPPSP",
  "key20": "4ttj6yD7YjvJyTi3XUzcuxdVpHdGtHcW6Sf1FmZoHZmFfAszwxaVpbH53gcyPP4Mk3L4hV9zhFe1u4fFCS9pFuXF",
  "key21": "46BJq1cXUmduWgDbJ6f5LTJj9cdNV9yePoeyecG1tKsQvHto5oEscU61S6bmkBViPHDg8PJhVxVMCwETF8HZCudQ",
  "key22": "hzE1LsvdaYHkHKB8XTHkgwpJJ25jVD2nUdRVeG7Hc6UtkbPxRsMB8A7WRPeuyoC6zDVqJBg5FLdGXa7eik7zy1f",
  "key23": "4UZzYKb8FiWFKnjSua4VjqpMhKoBGAsnu1qKwnWrncUtNDYjMM5mcyc69LdfpkYkoHxbbBb5f1QCfHhv1LxRP4sk",
  "key24": "bTiZfmNcNsVAVbShhK5nEBwd62FvJPtzHUctL1853Uo32BMcuXo7aiSxzFYswuYA71dMPSXBJZPBu6pe6e9AriY",
  "key25": "53TQoi6nzVjLL2htGew3d1EMaUG2Lm93XDNCA9kCcWdNJ8XUwCmJ3T6tcmxnJQWgyfN1yTBrKaYWXXDLWh6quEk5",
  "key26": "3SdUEJMrdneSsoCg2rgdjipsyW37pRcRxiR3qN7rZgSnigF8McrVDa5KcJzyc5kEr4JrK8tRFivEFBXZ6ma5coSq",
  "key27": "5Psy3JbEisAjZp2nP5rKTo7X7FNTCfMcadZF33xqTPKm68SXjk5tMpS8XvuXkJ3N7ev9pUUvqvvGeHiVgMpDdTae"
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
