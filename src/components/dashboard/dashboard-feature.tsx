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
    "48Hq1XiFPg9GGaYC5zp2q1sTKa5kWtEMcPfsuvA9bWsycSs6SKxmYH7FRuirSx1B9eW1ENLb5MgN3TU25i7K4rZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33qRFCTVfpCquQSpJDvoqenYTgFqRwfsjYECvPZ5wWp4RCyCiRLtoSS3oA3udTL8nb56QX5QnRSWTyiMvFk8aNT2",
  "key1": "5ev8VRquPTk8YHmx1T1DemdHiXC67wYsMuLZiaU2efHZC4DfSB8ZeQ7f2FXXQYqswAuWX4To4cQqgE311ZfBuq5y",
  "key2": "2NaEtj57vuMjM4PG8q552uHGHBYEibUVErfaYhYDmUzdsixXUwiMAyZPDLmV9ew61B1B6U7TTcsLTJ9UyBQ9NqF9",
  "key3": "Y78rz2KMGAAqJb9MEwti3KzKdUHcgyiYxpdPDibHTNYGH9QNWcBnhiUgN8QHAN5kLJiAPZChLAByKgvtmhWEZ3e",
  "key4": "3BH6b5sAvxZwRngzYmHkCyQNbsAH2wpPEGYfakbWAEQ676cLs17QpDSX5quoSg8By1kgtACNXSB15eTHufkGyhKd",
  "key5": "5wWToN53LGdnPy8bPf2h9MThYgGMi1onNYnVvxTGdvqeNo9QLVppVdAAHLbPSr5YrxaCJ5apmxrproqA2G41ebZJ",
  "key6": "4EDnzGQdbVezGRsLoz8eayxoJvsiHhgvsUMTbxoqA2V664wZ4AtXJoyEWy537FnmBZpGvUu356LqCqF6Q53TbQ8B",
  "key7": "64DjAPWy7eCg6LTzFHPekvLxXcck9r5uvRRUgSAUFQ8y4dtqf5hiFQn9c7EbenoWyd17kH9pqULVN7JHYJ9ro34U",
  "key8": "428HAyd6F8dBD2Pzbtvqv67U15YEvG1ypWe6fmfziX5ydYbDztkwwcPiAdVX5hB76AmMjsYUjqtcYnQqHoaBy5f1",
  "key9": "3Ccs4zT7xU1SZuw3289ZJxQw1CgXojzHAyCTAR3Q9rKzUcGnEz1CcyfiMvYdavrsJRc32egtY6uCk8e7LtoDDP67",
  "key10": "3EBGsf448FmppYzTa9jS614Gk5Edb1NWpCmBs4aGQW9TbPSxSyQzuuSAV3MJaxFMSCdDhdccaGXE8ZqMy8bEJfMr",
  "key11": "3TZLTauFBe3niHUjtsH4GUcJRgjwMZwwohiNiFSnYCRnf1h5sMPM1Bd9jYf92d8Hn3E2djcRtDA9WzM21i9nSfeg",
  "key12": "2NfG2nx3scTgxVSoYvmuA5jgbZMFoh46Hr9mVbcN5TAnWbCQAYgwDDnz3JYLwyqU2m4yYjjstJsdGdrgMFMy4xNB",
  "key13": "BsxC7ATZRvJKiutDo14rS7LkLA8XXq6owV8gV67HkLP9qQwzBjzQKKH9MXpZFmkSgSqpiRVQPzxFYoN4EzKBu8x",
  "key14": "7AvL4kwoUpNA28sey2Z83K12zehnwn9bkc5XnXsbT2EcE6fKg7QsT9cZ1FePzsXfzg4KyQoZKkjR8S9sTfczXQ9",
  "key15": "3dpFiXYNPopHSuW5c87VZBJcrJi2ADJAugEBqhFZ4D3abTQaAkiFBNfRKMTGLy5XUaN3znzktRAcbHSduupbSnq1",
  "key16": "3URtgw4mNZSJSWbW5qis35f2FKATDrP1qJhh6XTF99gqLtQ42k9GBdUJeDz8D3cYxrrsacfSyoUibgxuUJuhY78A",
  "key17": "4QJ7fA15z3NTZxoeb3MHgiYrhtcMWie1QFkMxn8MkKQobhafDGALAn824ovZdUibyduhet7L2oDw8y6jM8bYr1Ms",
  "key18": "2EnGhdBZxE9owGRKiMmPG5exLj5XCp9pAoHpras94bR7VJ11n4EUY2RLjoQqbvrrChDxnWraKuMjmRpvus59MxA5",
  "key19": "4JQ8i77tpcZEnrfvs4UMrfjdDwvXRxhfhHcakER2qeoSC5kCr7FKJUKU5TZR62zJTnjvDdghkPuJdkFcCoRixn5h",
  "key20": "3qsVtaDpVG7QiPFSH8hrRJY4CvYgxixiq7w8bEDNXhQgFSPxopap1oh3Htiiin1D4kjvFBdShafNC9zPsiHdRqeV",
  "key21": "5YTNfq6rg1iXBB19c28ihZEEYoxikg14rbM7cWoHQBkErDVPFQYuBJSNJC5aAE4EDiga6pGmdPGZYYX7fMg9Np4z",
  "key22": "51NLx9Uf96xaCpFjaatYjU5rXp2wqauGppMtHpFmckDyeTSGqD6nHYfxRFyezGz8dfUm3pUHRee5BRxbwF27Ms4F",
  "key23": "4YdwYgM6G7dgTnczhLG8MFdjZrgVX5871ypegRvDzgtKNz2wJJYgQBk67RdF9zLArqcwqkMhwpX8m5Ku6QCt7GSg",
  "key24": "124CXpSQosKz2aRVb9jpmZAdbtu99ec5iJp2CzYHb3mjU2D7PVbTtmxpHHm9VXwdTZ7zcKHG4hfCAVpVZjekotmz"
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
