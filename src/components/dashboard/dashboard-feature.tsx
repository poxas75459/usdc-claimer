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
    "44yo2RZHTgyAz1CSeNga3YyA4BFqEzpG2DeUVi7taFU3AMRGTZJfDAXrkPXGGUjpgBvE7DW7YkYqbgPSq6fsPCcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2grY17M2c2Lv11Q9iJFa5WWgWajowCtDKFAWBH9cK7qqNmb4HBqUy4aP5CayTQyBEtWTgLRZm1kQpvzVsgVvn3UC",
  "key1": "mtd7JGsXrpUSgo8mXDQJVhZ4vp1PM2tuKkxK4yHG4y8ubQnc85vWoU13TWdvKCiACjxRh3AXthFpY1gYmaWy9iL",
  "key2": "67ZcRCuzF7QfW4jtoAgQLYDoXaRFPd2fsQwMhANq8rcacZgjg7ezr6QYbA41gXs2t83FNycaNjtSfyVMQYCev4sm",
  "key3": "2TYu5beceZShF8dhXsMLMqGb7iVsPfKvgUuvxMHSR22ZwzP8iVm8v5mWTJShw6ojCjcN4gUZDbKuLvABkXpGoykP",
  "key4": "4SKu1q3fkV8SoP9HTgeyWjnFZd7gikhxU5e53S8Byrw3Mjc1DvB2CvnEtiLdW6tUTbyqmPXdS5FpXmPKk1VzweMX",
  "key5": "3o9jGq4qQ6mzrTU8kTdrS4ZAJwuBnBR3kha6xp3DHLL6ykqMBqripx79537uo3SrdhkgGCSSUnFbvJgecq7mifqR",
  "key6": "2Cu1BJ6su7simg7M15wsXbFexFnE55xuWaMq8iFQ2LT6MPDysyjC8SAomk5cwt9igSgEexfzoAEccwZy7npXjZTT",
  "key7": "44uyzryc8W8rtEyEytiVp7b9Da2e5u2tfPgcYkUe2EGGZdsug8moPioeAngS6tjBJZdzv3XnqrDDHwxxNP84tn9a",
  "key8": "4SbeXmyJan4jSvRqsSL2U6NKJGPpNqtegL97zobVHuWgedpYPqU1t29YTTd75brzBohegLqzCJQU7PsND2zsork1",
  "key9": "3QjZAfZVnspNhqtDio7XhdwJ3GknQHHZecMZgWFLMWW8EBSFsoyQwckNq755DJvsAUo97aWLji4QSoiAM8VVa5Tf",
  "key10": "7ZL5mpMq6RZr4MT4uKSS1FSEYJYUG11u5AtktVuDeod2xHssA2gUosKdUbQHzsqY1P7QVsTqm6phZMaxxeK3Wnq",
  "key11": "5GF3nQkFiDGwFrtqPQEc4n4Bzdi4N6Wt7fFXjrjuHgMDaaZM6zuwyxW7MP7s1z2xTWfN7dMBvjq4T2mH4zst4a3K",
  "key12": "kZLBbkthbCETmiZYq7EKjYcCMETyzvqvnNRUPHwYgpwKDW5HPaYxqj3dX2f3JHHAawDDXwuKxDfMW3z2LYZjHCQ",
  "key13": "22jMAz2kn9Cet7y2nVuUKyEBGa1X3GxCEpLpEvUjD5GCsdMxAPkn5Laq7QmMg3m2CTMAYiai5jtGaFCAMcLM1p4b",
  "key14": "5ZZE8JbRCHU3GWnM1nJWWFb4of8UGA57FMLZFGivLUSbUCrNyGBrAXb6zkVrZ5WURa2pUafdxFLa4pAjhPEmASqp",
  "key15": "4Qr1LerYBAPChwGfwwCTstfpzvFrGmSsmi1ZDZrCjUnVBpA8x8YgHCsK4obWXXh73T6viE4Ph4dNx1SLq1pYgvku",
  "key16": "664M1CJ5oaRvps9vgp6FGKyoXtWwms6HGtWv3bfURynPEqwiMzb3MViE52MPo2crVGwv5QMxK9KJayK4oMidiqCQ",
  "key17": "5uSLHSNGFv5KUWaZTCg4BfE9twV56aUQzAa1ydnrji9Hms7uQYsWA2DNDYTaVuCnwbbvioXhGQLE912SJk7eujbZ",
  "key18": "25Hok8mTmUxGLJ8hWw8ZsgzysRhMKdDPPGJe3931Xhw9nk9wVxgEi8DBMPPbU2XmUSWM7VXmSPdtxnsU3WN858KV",
  "key19": "5fdrttVe7GiLfkHZtNRu96Usn5KSEgMZZ6UbaGcydukscpE4kPXLJbdJcbkn3MenvTfo7RZMoxXqvDMaZasp1tBY",
  "key20": "4rNDSRPfuW1kEjQPAmX73MQvz9S4AAyd5VHwuQZUpAMgGLQHDcEbcxEPCMe9FbEBQ2D5SF7r3xR6t99Cpp9qBFgo",
  "key21": "3EQGtarMPHDu2aCqjJqz42m5G2Jr1oE4jKDDEpWsWZJSpN2qJsW1jFSJcxL8aLxwzKkzyFLxWWMPZobRdr4rFjhL",
  "key22": "3EkLjKDdbbcqPyf6yHfHpXHfnVewiNuvyQfcdTUjVcMFmMTSLEJ2SAUUMaDjhJShJRFnciY2CfvL6SmeRWbqQ4tk",
  "key23": "5cotBwFDh1px8sM1GaH6Nr133beyPui5wugMAqwL6a23ykWajHP4MPoXSWbVnFQ2AaiMswF2TZAqWzPbkUbT8MvN",
  "key24": "4NYZaKZEYM5VouvfEg33iVGA8TC2iwcXGhdFqtehtDNefz8rVVeS3LcaXuxh9evBwduzsMT53kaBykLVnrXTRyM",
  "key25": "3ccKGu1KGgKiogohNJqjWmPmFE5CfBp4G62brPRwuSiXUZaSrARZ8hc24NwWrAmkt2NBVdkmPmwiJa32Tnn1kKZm",
  "key26": "5pei2VcQKFpkKvcry4mjeddopDBU27JkQuz3BNN2oDaGUr2RKzBeGwE6p3Rt2LXEK9GALJLhtHLuozAuzomJ8wBd",
  "key27": "25khWqd1iwHGDXEje7kCGjfu91B7DYELByePKkFf6t1xTTK3mLPA6fQQkN9mGzDH2NuoD5zZ8MpgKs4mEQ76zX2E",
  "key28": "4QdY5SnGsRTQQpVBXnyDV3W9aL75CfKsiqVMBU2bty9mecdFjqAcCZ4E4YRKy8An7iMAjUr2xkp1zZ7Me3yA8HVa",
  "key29": "2LwGNLmpxZ2fe7TBVBzF55LAvpXmpLUFv8HUHiY4pcMHmPpnbrXMUpiLHAFj48EToW8aKTrZZnd4GGhDUFrPGNad",
  "key30": "4FXhEdFkgXv7qZ23G8DfC5UrCzVXkWftKmy3Tu6pbkj4kkz1UnSDSgYW6me73YaszJfM1BqKLvDjcbJukjSpVwbw",
  "key31": "3zWVB1ftSgmhWJacBkouLEPW2ARnrtBd9geUEmid7EYDBkB4YNBXagKzDMGAQpyipku9yMU1PJEFnJssJ6QhhVK6"
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
