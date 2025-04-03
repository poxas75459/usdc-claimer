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
    "38HS5JFW89gddmKNQNdsTwNs2CD45BTdyC27WLUDxsHe3qSQLKoQ7wzjjF2z4vQrrwXDt4dh9ZttiW3agNbG4ctv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k6Z9W3tiSqfXVjRmFQgtbFouGjBV1bUpEkBdHEP9Sg1Gis6FTREQiDp7SwX6jTjxcbz9VWDC9Z8W3bENcznykpo",
  "key1": "4brndeCF1WRURutouoZgQHP53fakxJ89S939guVN8W7zUPCxyseHK7fjjb5X9GxfKr6LZhfX4NPnN6QXrhogfGNd",
  "key2": "qS7B11ZcpvwuKJ4SMxe5aHH1G6dsLfbcLLiPrLcuvUobjUa2Vj8ufSnV5YNSHeDNXYy86MKi6gTr5vGkSbXKHB2",
  "key3": "4iRgtq7E7KmzCKpn32eo8hLSE2JgayFaQzRk2UsJPSc5F26qudrcZbRoLL2CcWbL2m5HjBGAjaCqWbyEa5FcJ8Su",
  "key4": "432VQrMHQssiDkrNQyAFM4zZbW9rTspM1xG1ucvVJtu3UmKuvXjSqb2rv4y85fCCn3knm9r5odWsvjgj3GKS1i3P",
  "key5": "66TZYdK5EB7czuvK8FbJWtXQpvPC7upTQgg8pi4psJJu7TpkkhjWD4N8ez6XyYAYH8bbTHX6s9iuvt9QWTt6GFyz",
  "key6": "4bqww28dsbPzTh8QBpbPMppGEYRku1h67iGdnQZkvtXDkzBucrLHYN43bkqTorphd1fYtJLa6dfqJi9TxEV8p9ZH",
  "key7": "VGaueEYAe7URVdLyPs9Hgd57mYPdWqJJv2wUAowU1cStoQdQqnrmYqhjWfBFwqbuGedCPFtdnUdxMTFosP38U9d",
  "key8": "672raJSrHfk7AeM14aHkb3QiJe9C2cDGNvRSWwVeXPA1A7ZUTrrqQQPzDrDZ4dt5hVF9cLP3TkW1mGH9fTgWGmDk",
  "key9": "3xtgfhSy7xS1ktRbsHSXXu6upkANLKpY5tQxyMsuPhPtYTVTjoCxPuqP3fiNx5rX3jQEfPh1PKLxHWHoBe3RTtEF",
  "key10": "4RXFP6TVBVXTQXFKED7mKnnsdfv9mhJyK9c91iEa8C7QeQRTduHqDDbp6Cc8UgVj9AVWhv57Cy6t4PLswhdGRM8J",
  "key11": "3AdHXEiGtoDqaTeGSjnGV2JJQQiApZG4uPRN1W6pmUSXLu6hmbQN7e1JCnmPmfuJWCD8znPJuVzN783xhwbu88FC",
  "key12": "2JjcYkf3XTgHiAx5h8fko7FL22go9q2J8b9jqmtuczKdpzPiaxnzVEtjJKVXKN5mSBhBinwaLZe6rR1mYZkDTHpE",
  "key13": "3YoSpzzM3f1o3jTfbk8Wi46BmD4ojFjHV7kjFMphUoaraWNR55Jv2USmifW151vMT5rpJ1uxrCjeknVEDaeYsHse",
  "key14": "3xYgXXiZwCQdbTnFjAkcPuKKKReA8KvBKn1utJUeLo9ntLXPc6fx6DHKz3orGA26brQ2QnAHojcBAifaZKxd2Gdj",
  "key15": "24cHERzG719QV8dbJHdc9Z5iNWuAsMEcFTR63gkn9Xv83JJmEkcYU1kgij5abmdYUDo9GXVUznfdfpBFx1RPKkQA",
  "key16": "3ZkMVn9rVpx98L1sss9WaUXb4hBAxRYGRrrATwHVMxMkRDv1ApttGjm3NJgauwxgSkz1oKNmhZSJiXKmCcKpcuit",
  "key17": "2oFynrEE3AU2QCQ7CufbtQNLkY7s5Ux8K3dQ521NMqKrfeqxVRJqrT2dUEbGQNSEzyrFQcyQwZrCpDKtzxSQSPvJ",
  "key18": "3KaMhago4t9rGLb7ER4ufRYMfnBJaRp5dvhME7W262d6qZtwuyLZShc9rdc4RcygAeHSdDuTfPba4ZctMWRqE81Q",
  "key19": "27AstLKG2MaqDLQHY67m5HeGw7UBayyY6G9WbXBBDE13eNtTcYLcemv8cWP9trQuT7mBxx8Gb5XXBu4JwwCLxTWm",
  "key20": "2U9hrhhfNEePg18VKoeaua8drziTp38UtoGCvEfhga2FZfs1r1sa3He2cFBJWc7qypHzxC7oJo3cGmJQD4pRaAZW",
  "key21": "5xQrDyMQ5xcZYgYpBJmyCT2bgVvBR47HwAPVUiQ6wxh75M2hsPSGa3WqsGuzgJHgxLHYUmLZG6QGRCJBvfNq6Nhv",
  "key22": "4EEJufwodYM2pwtBk2YBXC1nffWz9ZiRVTqi9HkzQhNvifNJuoCTGAV4GeMMhgB7n1vCMAF6cXAEFzWqQmV8J2q4",
  "key23": "CqtVfibGdrMvSCQi4Yr6dx53ciqBpTYDytFo89LYMfFuw5uTrjHsx8q5Vx7tdfMZNSmxk5fp37BruYRgxpxxQBi",
  "key24": "3Mg7KUQYSCe1J5P5C5Fq2PH5DrRLca3w8nK9ZmXUEtWgU3HsTiUbdMTeMhGTJjJMWf5R3f61r1vFHa8iEsyocq7v",
  "key25": "4m29S2yyX16htuPJwETyjLNHwvKfZkQoGAsGseDua3KYCE7dF2Vcgnso4iGkRAU35DPmtQADJ5s7c4cKh5t4685z",
  "key26": "3nuzgEdACCovy4t9z1fARWx9yDgpNMGzdoKMgHFBXKzpBR1WAHeksyRsfEqvQhF9t2ahAVTRMNpVYoA9iN7gZrPo",
  "key27": "2FUj1w8X731dbmpn1448voztY88aHSX7DwfVnmBp23vx8m6iT3AV3eRqFCzuuMYhA3V2LCnzBXgSnFY1YBVaJK8Z",
  "key28": "2QV25B6JMW2fQG5yaqfAPDGPMtyXFnrNuFhqxaezjEwRLy5uGXPoKWYPCaGbFc25KGWVUwYbz5QS3grNyE7CQn9D",
  "key29": "55JDWwrGjC2dTMZsLg4MhkHCNSjhZT8QxCxgXMYy2zt4d3uHG1XTvEWXm2SNMnscoSduT8hPcHNwrHSALgqJqT3V",
  "key30": "tEFjpPV1ZSaj31SeEpN5a2f4UxfQTdchbwTLVTb4HKi2gAPUXkKzR9yuLtterDRtjuQt2CeEmqUuaiPiMpAm3iA",
  "key31": "3Wuz6GBC8doump3a57xmSGWkpPTtpPxSWUasBe93gPyjdnHE3ecuJVY1rsU3jkhar3CbkDU3XU725W6CbaCVbwRG",
  "key32": "3emgM4Uh8PhhPbKdcSrX7wYTrGPMnf7mBWfEFbTMzTdTZ7JHpDmnmigaZjG2AUzntRWaE1vS4pPDvztfDVn7re29",
  "key33": "bFjmEmg6gmcEVCh57iVhmZjDmWNWyNX9kHweYttZfJFDwknTaKr1C5tgTfBi8J2mCBBMYaoUBHSgYQ2dvDy224A",
  "key34": "2hDNJReFSacVXsHV1mbcBwKHJx5cSxFKYTGRG1sn6BdwQAaK6uFwG2PChpj2CTNxZ2XaYnZyNWCdYq4LvnTy3jgD",
  "key35": "3xvpfEUQvDGYvgLK1A73gRbncgsyawqbnpbYZguhRcN7aTadpJL4hAgjZ3Qw18D66o3Rubmkohyw72CW3WXnJDq5",
  "key36": "3catvAC9GCTgDiGMUiHk1d3qGEfBSUuviSrk9UShBNrNgqcE8QZLaMn2KSKFJugtyo1XeYRREDc8mVhUxpJmkPKL",
  "key37": "2t4qYnvYJPykXCHeCBKQuKzqHMDFtvXKo1nV3h6DfuKChBkT8gahitYs4MYPDMa5bjGoiZcHy1qPd4EHAARdxso8",
  "key38": "42fQUBCXSH5EagyQ8ZZnRXN21wrcArX1hxwjD8PJqW4A7RtZQtxV8Pt9kDSSeNq4Zcaoy93tdrVswPma8MpmLjbR",
  "key39": "5x5XEZvhx8JwhDV1zyCvFwfLfoR3cvyL2pos6GW9ja37r7vmEyVkDYN49KKuLUW8CMKLko4UYNXgHkkjqqgXMsL8",
  "key40": "Fd5DTTffDUKJc698zoUwTXbdNKtiqtoQRbxSf3Z49rpVFQTZuvU4KU3jGnzQ924Q8cbczeY716Az3CCScJRBkBP"
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
