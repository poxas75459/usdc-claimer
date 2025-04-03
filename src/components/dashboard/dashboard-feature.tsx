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
    "zPuhaYnJV5iYdZUuCWALoAjKaSrPu15VkwKAvpwdWZttyLSjWxnDbSu3feGFbtfmFC9rxLUHnxAHZRu31YPzCEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wfTYWCMgXoFcwWZB1CfCNSGNq6eBxKTBz5vf5iYYH5fgV4u4KULoxSsqDfy7eHBPhoTWVf3U6xjT3ThQzBE3omL",
  "key1": "3uu58xfEKywNwoMmA5NZLYuphd2MrYkkXp78xyW2fdxJuf6h6tUT4PkQXuW3XfMFu92WMM24vRZqL6P2LwahGV47",
  "key2": "5eMpSLfhdo2X5ptL4GkpTpan3Bvp9V8HJhRoUoTWA8RiPzqKhTTe9FvYt9okqGg5cgSbmvJikFQ4r8uJ4duDvD7p",
  "key3": "3pdvvvtrwLDQWWND5QpQpMLrXPRkM6QxEEH4xAcTDyK6i6UXkidzUy7gpcdyVh3Dg4e4yj9PiaixvFxkMWBpJxjq",
  "key4": "64EGrV1UGx5VAS8NmBqnKz2EDUi5KPBSpv4JMmbcAZ3Rq2zraL3rNCUV4DSqSA5cLedow65JSGVem9USEiU2MebF",
  "key5": "3dGVAn1waQuYEKaAeaN8GRq4X8isNGcWqRCxsAqisZzeXdyRb6h9kCMvbix319VviKxejir35YZt9cW2igwHhcvP",
  "key6": "2TdfK9qCSgkCDBhMY1m5ej4u4C8n7yreNWzKuDSXcPK3HpxqYPezAp3Y8wLFNSgpiBNr5FdoyqdoPZoxEWeUz5MP",
  "key7": "5hQb6NqJ5n7giVZghqCwoVBdx3Z9cn1UnmogUbDZRLpDn22T1QQd746JU7yF8FSqnpNCAZeKBfdfk2NdRe56E7Yp",
  "key8": "cYXo2AygCSPv4t1VzPnnhmF5rkZpMKaJ22JCyJuKD1j1tiNFsvu7jRSzNqBbSzHp9trd5UYJpkGrxPssBJ3upgc",
  "key9": "7X8TJNbjxsiTUUJfzZXUKfEaw8se9vYDm5hfiax6jB4tRyUQBtVPXQKxuG1MWtoUhzq3zymSdQHryyeRTiRdSCE",
  "key10": "4sm38Gk2xSMkseqFAEGDTbjJZR3Cn8fhbA2BkqtdcxwKWTKx8jtenqsYUZ1kaiKv5qzJ5ACQkkTBALtrnjefYSEQ",
  "key11": "33Tie3v2m5PtVJuTme5giTfjuJ9L3tu7sKwrQ2FkStriNNgBSVVPUADW67YnpWaYhpTK1DvjhkYgXMHfAR6maDqP",
  "key12": "2yPNScTpVX74DLJpm6BQyJH392u3tnYedwdbCxGbYF5k5ZkKAQCABCYAsfcADvizYGtMwtj38J5abD2FRMNJjBYc",
  "key13": "7PWoaBewnF5WQpA7Esq6RPxc3FUAgdJbTpqvgR8vBqNi9xGt84KjgtUYhfQ49o6anVrEf3N1qrpqd43sd1eAudv",
  "key14": "4PedSsFTz6Cz2wv3Wxa1rsyoCnuSMS6mihYXnPujTgFX7ynoqY5hWDyMcXPnjKHo3rc7PvGq8xsJSmDgLDtA5m1T",
  "key15": "E4x5wu43EihU6adYhr7gRatbmEd5GcUsZ5fr2unQ7XmEvP2ERPGs48jVAvdCNnAnWbvCmBTNeajKKnbW4mVbKqP",
  "key16": "22FQcQjx2j9Wyvva2nBSP48q6fMhzeXe4kRkYVSLZQVeYhKPnAcdyP8bJu26WmQp6un6NzeXL7CxFFzV5KiFwDtU",
  "key17": "5aEWorx7pxJ5iL4D1PXK1aXFoSCuNntW7p7ommtU9vsU7MJAKYLjY9gGccV5tThfgmVB8o7icTSSHEimqeAZT986",
  "key18": "ST1Y6iJa8oVqLcb16mJ2er4CyjEbvJMCfK4odrD9fYHgVe8h37gJMkEur3toe3JmJFjshBBDTrALpFp3qsMNmH6",
  "key19": "mHb6pS1XYn43Voa2f5rMqah19KtHV3WNNjCLboncrBXmyaJEzyQstUTnLT36kARNiaZuVQEeW3E83xU9xByjbFv",
  "key20": "3V6o6WBNk1pT9GjmbvL6ZwH6GpJyDFKSXpnrhQqGAGXQQExY2zpNGguRUgFWf1apurFY2FABMNQCMgFTWVMkEPPT",
  "key21": "45ysba66ACtzs2vcxFHi3pnKfdtqG7QR5Q81p62pWsYnvBA2fATcBo1BvsugVHzr2R1Zgb6phG9trauojSypYyW3",
  "key22": "2w1H8sZM3aU3EFScikxUQxKaDkCVtLDrp3QTVEhNb9KiJDJ41W6npWpPipL4QUFeEMeRkYu37bagJ3LPw6QyoZCi",
  "key23": "2GAQeXPUpgSdehFWyzdJe7LWawpgCU1f2xD9chh1ZdyPWyMcKjax2pLey8T7tCTMtTsZ4RmmL28y78rQcYbMbwVw",
  "key24": "9jAU1Fcq4nZEBcHknWBRBwNxYQbiRYEyzqKtBJM3SL7gSkDsVCqup1MxWV33RD6GauyTDuWjHdiTop4MxLC2EuQ",
  "key25": "5kXoYYqMVS1cqkb2E9U3ywqMZjiBABCY96QyNtaZEGf97u7aDVP3rHDULSQ4wCoC42Ygp7JYJWd1RFeYmpLCJKfD",
  "key26": "xLsNjNAhMoPkno61U3FMWpijcDYmy5WdcVWgjT1tbxiw4gRe3jXEvuPEHrHXm1tuw1J7JEe1DGsi65XbKpvBoBG"
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
