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
    "ruUhyXRSf94Wg5wYB4JgYwQ66JHSfDv3VmWK8NPMRBDip8VipbfVDZdNWnHp7Qj2jVqoYs1sn8jyWPS4hkL9cx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kXCC7uUWWpkjSbAWFzkz4v34kqy5BjJkvtjRfYssAtnB9KLLWzzWRNwjKK7cgV8iHu9mYqXvREpR6Ps8fYCfayd",
  "key1": "5pYxwdLUXhoNrgHEVq9G3XGKBKpjMCtm3qk6bhztvCVHVkeBxso3BwS2fGJjeVRV4tuRNA1PWmX7LEUoPR1FgQVt",
  "key2": "4sXiWsVh63CKVdgfKxDsNd6YwmUQKD492AT3ZyAehDUoRdP4M4dKRc2tvfvdDcbyTiMjLv1DEGJvjPtUJ2PGa8eD",
  "key3": "2uUDwgHgigbhwUXvcgeysxuHxAR3T9KxefifA4LSX8EFYaziBb4GMG2GdzT7BZJaPX9AwFyKf2E6xc7iDdzUW77g",
  "key4": "5nBf5c9gPa2f7p9iTANUYzW98osGM7jMbqkzg4bzTvBuhgPTgKo78FLoHG2ipMufs8Qq6ciw7GeFnnQqu9abx9n7",
  "key5": "5yADUgP2s6RJWX3zpwcAcqq72joBi14GwVYWbQ8LdrJ6dU8JVYPH4dTTngamxtweJQAzDVm75AHgpgxHKkcpjU8w",
  "key6": "3jCo1JykN6GWHErnqYT8rL5Cm6pyNS9QdAbG4Z3DV9KiSFP6g6yW9jSBAqHFnJD5hA3vG1N5R2CiWoNHV2tCFknS",
  "key7": "5DfbndKrkHmw7wTMtAiZ41n2Jx4FwyvhSKVnwboGAxeUfTzD9N2WBduYW2uz8tbAKXfWgSpqyTQ3x7UavTCeiDhs",
  "key8": "4NGSeVY4qT5gxEh81z7ZCNQ861gtfvmtfSSvAPqBenexpjEtFCY8GfVYNuc3H9ZAKKGeymarnJKSx7PKfJG9qPME",
  "key9": "uyT91dnw9rX1PrGH5t7fiLk3UcqKZmbpH9CVwRdBYwVDMExDn1XRnpyNp6v4azBNHmsMeXKTENKuiEYMpwH2W1h",
  "key10": "4a1UR7Dsq9FFEj9mKKMx9QqoDrX1e4E7dzeYgaBuXKCJn6bXRE791KsrdP9soeZWvjQksFb2zmgQwciTXxittMxL",
  "key11": "39geLRbNxEj6MrDz7PHA6w7iZUJkJZDvrZWYCnrKJiwKkACVHfCV6biUwmSunhLc8Q7nTZcV2Yr2mwaLzEP3s5RX",
  "key12": "5iox6XSERowGb8NckbBgx44KmJWVVxUoJBeFyz8ELud7rbjzPFkSCuhE3UYRWYLDKsDGJWtLXbpwzw9yxdpx4TzB",
  "key13": "33VUVZrrhua4CEARqV9UnisavCxxg1aLxrsRndiTJs9JBr7FR1w82dQeoDj3SbnGVdLsRi1DLiGfBLCUJJwNRdQn",
  "key14": "4uL9QBF3Gxuu4YwrY66RmUUuqVFs5EEttRBuk7Vd89ZAsDtVFsynSPYYbb3dALC2qSUgP4uJEP73E6QnZRubEwQ9",
  "key15": "2NT4NEe6R5vfFQLMNY3xAnaDabeyN2ScYQj1BYBVhW6JGqC9KxpkmkRnTjCveJaSfbTKBv2NWsXca7VhyJMwsyds",
  "key16": "3Wyk535arpd14S19DDXGjSuGN3o9ghJHnX6GHSCSXWenhb5wzurwQkh8zqmuVrsuyu9NvPbdrXioyp8KEQd9vUhs",
  "key17": "UK46ZcERGoLPS3bmc4LCKDpRfVvQRhxxJNyapM5rsRiPVrSbJzHyjSVRstXrcGpa9BexBZfZ3XoiCqBkJtg9mpk",
  "key18": "Sogb9g1Q3sN5JDWxuvmuti5JUHKJbNDpCga4y86noC3L5R7XFdqVvTWHzwnEQwKcdNKbX7jF1iRJ8yzJgLWHdUG",
  "key19": "4j8kyMf9Svjz7sNSNQCJrxa8VTqkkucBeuf2Yu2RCLdmtmEBHLQe4h9md3p2pM3BKouVdiaJgFiKnvg3jsqHLDAm",
  "key20": "YT8WeTtkKcJnxzVwC9dYRUxbUUXAw5zgCiXw9JD7csKVvCfyx6yRPLY2jj7AQvdCfsTvrbTBdvhAjGjq82E9VYz",
  "key21": "XxYW94X9LicKfnmCSaoVS6idkS3FmNkDS1xzDXfhWWLdm1sx4vaus1xYjmzYY5Ww9h7Lq3V4wNuD1YSvT1qG18B",
  "key22": "dicJPv4nukmCBe82TaQGjjP3hoc8ZLrEZK6pDP87Sidtresr2LJJZDB6MTUickWU19ZvAQ2MbHHeQPWWuaHQSWf",
  "key23": "9S4uKkVzrsx4wAX1kSrPjxSBXL9U19JTNRFbdvif9Kwcec3ugRo84pp3WXYaMntj3t7wmHCkypCsYnHibuGFrAi",
  "key24": "3YtWPunaWTSidk6PR9t4QfLMDthKfgA5k9jk69y92UpiXjZzmu5rCLguPtAN5TE7ZeZ86nw7GXWQ5jsPmwggFzZo",
  "key25": "3ozdngZexDUNgbs5vybGK9mfh4vx8LRwVnnhVkooxRXE5hQmywJuhFDyAFjFPpiXZrWqLZKE3kk8KSdVnycNJrF7",
  "key26": "2Fzcx4Lcjt7nR3RSsinWdU5LHF9p6j5bfHC34CLhEzXPiJ1t7nABAf3FreCciRAhZk5rmDFf3Xg8VXou4nPxRL5r",
  "key27": "4Sc7RtfXa4pojodzpyZqQvP45kVhHCA7jALS3M5hJ92odjd9TYRApXbYsffiSzWyWPLuYFyddtdycFrqhGri4Xrm",
  "key28": "FdC1G2ZnhPjruZ3hJ3kS3dL2jjX3UeHL9eovHVFMyCsZpfv34aeGHFM6LV1muJ5JHQ1DcSvumLa6kHnJWZFe1cP",
  "key29": "53U85aDBdVAqMXNbcixaYWkXkVpcqCR2wDnPz7bqqFEUF4bzBWLGVfiygL8Hax4MmZCovt12Zbca4mduTgZGY7tT",
  "key30": "4ja9VtX242mwiuB7iqid7rTAQ3Z4S99QVSk2UivABVZv7rZfda1ZjqWy7aurL9pDs35U5mCFdCMJVPvsZ7Afk24",
  "key31": "DYMzEMJBWy3qWHzx32V8CyAZSfUhuKxnNm2DukbgqNDnShJxcvcJ2ykwqHHUP8veDJ4hMATDfxn2F6Lv7xrJd8o"
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
