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
    "3rMsGR1etZq5jWLmiyjXshBrq3jVQC3obRREUysdFUy6csqbFZf45J5qo7cUMxadxeX1pF87fU992iCSg2Yrndok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vrBsvQiBmRamKwcrp1eMmWiymvSYCP2CmLHKDyySwshrQ66kkAEZ3J97zMemg5uyDYfkPihs44QUvdayaEuCMA8",
  "key1": "5Yk6UKE9ySjK3ogWRNxnukr4qAtv65meT4SZd34uXQasoCXXAYRwTQXeidNyoLr2A4BjC3MF1jtospkuXMaq8eU5",
  "key2": "3wdzgd5J2f2VLaKqrfbKr8jAu2PNUwRv1YDrXea68rxZ7wJHx67kjCcENvoDs32M6fRm4ogaERVagCeQfMpTqFot",
  "key3": "25FPWU57VbBT7xhp9TfUQcaRidFUE9YZM71zmVj19uMxP6sTvhaBDeJc6gDCSmgP4ZxfgPwX3NXfaDfSsE59tRrU",
  "key4": "4ihHtxJum7nvaBoJoNtMywJ61CkUaqBzGy4GVSBQvz1hsfE57mPexZrvatrvR7JafwubtNrYVEzkk5pcpi5o7Afj",
  "key5": "4574etSURGUV9hvhew5ijZUMp6KT46rp9Rrv34fB8ChYpn9dFKeuV9r3AtAbZiDZ95Xxb55zg5iASUeyxHnwi973",
  "key6": "3SJ1XQar2wHj9eStdetUXmaHskMDXdhi8GGKYVgdwEhgPunA41TT6W3YHff4WVEsZmtTcMg9jE3JgohzxHCMrLq1",
  "key7": "2bZiihKrWcU3yxekNTg75ooVnpVB1KmWiAwnQHiwwAoxrBpCJ1bHCJypKX145LMzS5wBtfyxjJ9MZ26ZxqEXeC8C",
  "key8": "5GP6ovwAiGUQCpRXsZ7Mo8paEjEp5KYXnSXq2Gy8rbCNriDsHSB5CjxgeDMgmbgahg74aVLp6WZzmrUvtnocsNXC",
  "key9": "5MqoyrTcWQFA4GrCid9JFAEsXt6uHb2iCycvCeZaHCGhsxbor6MmyACxtKsyKGgw588pGoBShErJWk5v6mxWGBYi",
  "key10": "5vSYL2XgEdAhcyUvTGKiZW8b62ZVoWVjubdh5NEX7sHr38932Xyf7YMpA2bwCkkzGQne2G9VcGZQv8pvUiKXNBPa",
  "key11": "3tBKsw3hsBqh28ssbU4CnATiFM1jnkJ4tYhUnJF6Rz7TTDKR69Jjsbwex2o7CwyLHbmJVHWhSpkoeS7eZKh8ywmB",
  "key12": "3ZvMrGZ673DxskkEmQwiz1Mejvo5XzqmMUfFy9SfzmcEM8zwvCrxD1ZbtEzhX4kncVAbpnQRigagekkgN6DooUww",
  "key13": "5P3D4hDKetiysd4v82pMDtxrao6W8uGpa8YWEED9K18FA9kfWZcV673fuACGw5oc3kRjXz37tm8Y9nhK3rom6AYR",
  "key14": "3rfLcRGTm5BxfXCGKvPYBTR45r4aH2n9m2uD9vgxX5dha4YzE8G1Jd6YCBvSWZEYrWnBY9MwBj7yRYgFecP75Zmh",
  "key15": "5bhVZQDcewHxCBNYG24LvJymTkFWU5NjRd4G4kvVxqkdwi35aD7BMfEbQK9YPQAZote5vnSZzr3ikE7Qx5pjP9kS",
  "key16": "dxekixSHYXZSoZuVoaeaBoiE4Bv3CuJR1MNQ4Gv7615hmRT2RmFrWyttotyV8kjtcGJeYoK7JcvZxTf5sdLNojG",
  "key17": "EMQBrWBZQvCRDUoLuqV4N8ViR2NrZVWrHy2NQjiBaa9w2RiGkRCvmCdqX9t9zjVt9Sa4tVmNWvk9vVL27mT3VpK",
  "key18": "4Gn2KTdDqza2hyExw3NaLprVzsHyA4obnAP3Q5ZKtExQXBunRwCZwBmUtW5Sw5ceSg4rsQAmhterxa6ZLDtm352A",
  "key19": "Fw49uKsggqCavD3DDHbyjLZ1Jd6jvyyHrNoWDrxmizVgqN2Q7TTtt7PKs3MFETzYi5j3jXzEtnRRcEb1BwHMAqa",
  "key20": "nHw3h42NEbadJhMcFArKkb8LBbZe5muDRFoRbgrUqdW3yjZpc345Df8YNzcVfHs16uNDuTmffbp5CZ6238GoaGm",
  "key21": "3gu2afY6EzQaoSCD2pmDAPSDAQVVhJcfdfjNjsr15eoN4eWrBD5dij5YwDt6aj2v5FGp867o7en2gM8ekfJQdKem",
  "key22": "53qgZvcLVxRPnc2hZq69zVWLtPzLMNJYgR3prxWhNPv65ZFBmfdi56crWeNhtxgSEzq5MQxqbZ4fvuzTwz6FFV46",
  "key23": "3hFD1i6PmAEDqjEuU87qYugqaKHEQtSUb55h74aTDaQ2pD6GFXKm6XkW6x39oGixzv6X8Jzm9V5UcaFp12Z6Hsvm",
  "key24": "5VJuFzhvddWRKj1w7XMbXYmJRGDBcDGK6AZZJ1NX5cHVaLD5vWdagPTRYGrnuabdBC46ee1ZuZkbefoHko879aFx",
  "key25": "2pGCPEUY7e6RXNC7cT3dhTGoRn48HVPrpJDFs86zEgXfexpeiJNt6bd4hiL8doWTg5FPSP1BauM8cfJeFsFsmuek",
  "key26": "4mGPE1WwVjKhKuZ8evCqgJbpUPsZPBDaRZa2bVvuRCSLxGhEQQZzdQzG4W8Z7xhQ6FKRPktEHruFQ3jaySS4mdkR",
  "key27": "2oEqTAGwUkdaR9swmgYZZCq4xLqiz9pJT2g92nwAeayMiuMdpq6NExTYTSZQhLP47cRkLKQULVgRtDuX3XhB4i29",
  "key28": "3cG7FznVbYsumHHMaha1ToJuSj6oxwiMU7xGJQqVEAQ9c6BEvqWbHN4z4nShfD2MMTxMjzrPZxVy84vYSzEuWXDS",
  "key29": "E5DF5qM87PJeLqrMgoZj8b8y9rK6cZy1CRwU2n7aNqKZ6sr3a4cwAMM597GNLhfZHYR2zacjP5zm9PeB5N1qrdA",
  "key30": "62b4RsETbARogXr9keNguRFFhAZjLFGnpKciYgkSuiLoGfZ88BSRwDMgn3HnYZPw3urU29wzducYD14L9x7jfRLt",
  "key31": "3gjwxkGbmUQZPwr46PptuoAu6rvgMmVA2dhkH1VjEytcW9Gd8QpMQvNyg5QZUpcwSUfaM1uW5wFdRAf7tLDMAHQ4",
  "key32": "5haKiAsnuX8K9QK7X96yptr3AJavpwm5k1qyFmzr2J6N3xoB87XmJojWRwQJhmh5fR9LDQnh9RPNyVaCLiLjZn4H",
  "key33": "A2owz9Hd8fSN2nKfNnEkeFqJQZ3ia3ygx2pm1DaynLhWXQoEEubC6Xisk94w9xMF7wPoJKFmCWwyGGzMAquGeHq",
  "key34": "3dyAQWHs6Dk82K85Q4tfqRcKE7ovVaY9uXa6EVZEHQwCUs2QWu663vQyv5eeYaMszy7jc2Qiff4eGJNcJrXFsZLJ",
  "key35": "2qJEWTrNVhgVpGnCVQZW83pYN761bdzTnDm6eM1TQDaGA23EsAHca7vAY99i91uBF9x6Hi52TBcgjMTyLksLfJct"
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
