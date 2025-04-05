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
    "4fVdM4BxrNr16yLFy64sxDRnar9dNk2mgcWSYDqWomrU9cZDJf5gjTFsYJux1ayZT5J4uyVzvc1Tw2Vt6cMkaDhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KjfqniqQFsEYddzPADHAHvzzFocutK98obTZPhq5HYqKqfFh7Fh5uNgnJ76Rgjeawp4QcYF7Ss4EpnNhkDg7fdw",
  "key1": "4oRHnb7f55uic1gjgn76xieTxLJGhLzoYLJNetuv3aJYLnXLp58Xg1VAXKZR87mRuVATUExzmZmm5MverpM1r5dd",
  "key2": "3c1hjoifHuKB57wETMSKw1MZNciCpTaedntRorU4DMdkUM1oJeY1UNsL2Xh7gkWs33XLQFb33HD8ZZsvhnpP5MBn",
  "key3": "RDRbstqfNKZMENcU4dCNZktZJMt4b8Xdr9SWusVF392mT4h8bLroDnR6R6Huri5CeimMgQCuCBv6X8TrV64VYMT",
  "key4": "2kC5hZzgUhs9Gqqt4QWZVnM22cesqaWHVoZT8PjSMkJVzKBT6cPiooEBQxy1gceWSwZXbZ5EPDk2v7K31bdkCKFZ",
  "key5": "5K3WQ9xTBV8NhwVfaMxWTKqqCup2DQwd76nm8YG5LoygD7pwfD8cwzJh7DxKARnERgNYdYbwKztqueiKqf1ThnwY",
  "key6": "3DSrNrWnSfGqV3aa2oieqvcizZ1TpNGoCwC6UcjtB9LS3xc3WoZsDofUKC7N5RDyzaa9vGVuT5LsfzrHkwMDuwZf",
  "key7": "5TggEPkjqSPEfxQVHUxMT8BXRdn4GbLcxnKSrYThiR4hoj74jMkRez62uRTZKQkmLBRCmn4ukLWfpkELey6zsepR",
  "key8": "9Qh3aqVb5A1jdwFqRdLJLqbVkrHTGkq5PULFW4G2PSqidVsDfUzrw57SL9uNVUqE8GHvnLqmd2n9TFqK4uyhL5p",
  "key9": "3MmpPaBSPpGYxoKievS4EtRcnkPQ3BRv5McRgaoCbbY98mATYbFrbRc15FBVpDwLBcQxcx6jcgSrp6asYBNw3qZ2",
  "key10": "2a5He4AcPs8uYKVSmYDggr5pVPSUP4XpDJSYhX5KEitfYc9tcRfMTN5M2FXJ9AuirzeN9nesqCvidL9WwjpRTgHQ",
  "key11": "3NFSeR1ii7HaPZJec5jCzBDxPgQDb3TpDzvuvEZnvMNj6cGmJ1hP5si6dyy2We8BenERb65sEfCX1hVYSXBSj4ib",
  "key12": "3wgtVMaHE8B17BGqrVBrEcx2q3C3ehdZ6PzK25tGACXBW5SjrzQwgCfYW8uCjy6ij7dRPSZrzkiQjefniq6J3BSi",
  "key13": "THFCWmeYuV68DL35NojMcjq9aDe3E5tJKsr8QPUAS4a55ZKP9kgfCYAsK63qTyYejb3MMxQZS6vuVfW6jWtcahJ",
  "key14": "5Ue9gxmFNgBoDLXUM2vQqFG8xsuvuKhEBevdWcNJjuMuKAR4G2sReh3AiQ7L9oDJfKGkkXmR3LTaJiqdyBWD6xor",
  "key15": "2czwj8VPis3qYhrD2UMxpjp74sDzRvA3iiGkEZoF512Ba8LsAW1rFLHM7F9JXcQh5TrRbdcUrwU1S3ESgZQv44at",
  "key16": "2CKV5z3uYo4aGx7bJWqedSTWuGw1BHrVUJgS9PT24c1oYLigj6oNKMquM5sovdLirW5HThVh5n1wtG7oKbiT5TTi",
  "key17": "48UKE1vUR3LkreoM6VXfdsCWnkZuRs1PvZ3dDNjwUeGULDYRNjcdc15mDNVZqSuPjCUs1Dx4Hx3ePC1EG65J4ibi",
  "key18": "3FRRAmRMZnW3BBwASgZcNtjEFesD5Q9iXTnjssMq1RngijcwTSuNb64rSVAVBSZL5TqJkqZxWdV9xgxKxf4XANAS",
  "key19": "EPWYgACcp32ocvbkDfqU8urnEADUfL76Q5jc1u8AyPSXQgc9dK2DxUyRcN9yfJfcCktPkK2ma3HFa5z8Jt2L5BF",
  "key20": "P6wDmmJ8EakhPjERwsG7HbFwLCtJdiyHLWieGFEK3siDQ1fGpLSXikq3bVtV27dRCSJAFsRUhkqBTaFi4GaUyU5",
  "key21": "4s3mYibpHEyevUje4GLi4wm4GpQbny1NdELpXKaUcLi2nWPECF5bk21xU9sUYjwqQb9UxK8Wkd8Q5bDDA35LmSNQ",
  "key22": "QwQRmad1tbbzWhEKeQGK5Zpk1WjxyftQUpSX88DfkpNxGca3hY9g2Zab1em7N1b6Hnqupr2jec488hDck2ntDYL",
  "key23": "4KgRuRdebMjerJDEy8yaEcx3qV3EVTrrZCvEcGRRJ3EJt8TSHdXvx4VrGHTeJH7SBZNRquDCTvpCaVVmPCja86jW",
  "key24": "hd3S652ZVnVpUzdZFUgjGwPBHL8UhFgYwKqo4NnonNW77VA76yCczqUWWhZizof92t3Fe1jAzLkL7An6kLLoZhJ"
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
