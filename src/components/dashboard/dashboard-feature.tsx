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
    "njtGhibx48Z1rg7huqs94gJiR3iFL8Wn7XeS57Mz9G2uD4NoQc3JCvbULrH2NVcRWYgoAGWPWVZepps1nDBX5v6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qWn2MtAbNDr659u8bqVYghhMWSmWDcXf8fQbbYi8PQaRnqVXAHd69DHWUk8EokV6zqUy6HV8yLeqTBoSiGVpurx",
  "key1": "64FYBTqDVMgrTGYBAMHFk96SfZeTZRKQnAzKUcRrDHyChuAgPWi6gJ6x6UpXEZbnv5y1N6eLN2tyYN1m3521bK1M",
  "key2": "Umrt5Mx6FAWXywHFoxuX2tyejKjr2AWUDPbk5XXkTPki3vATxhRpJTybW1bNnPui7Frq3AtqP43XihZuWcBGLVY",
  "key3": "4sQcWgDEdNB3jnj8uWdFmntJJG64NosSgYkF6SHJycYpaUnDcY5BfLxoPv1GqwsMJX5j87Gyi77Y5y7ez4AfxwA3",
  "key4": "4tNm2WRFsLUnzUy4hZKBsuHfYUsSdRuMVqnawZU1oENM7VFYPzvMgMfVZwoD4vtZyHc8xJ3h6MdTBxgRhXT6sHND",
  "key5": "4i7Ec2JyBFLsbpUk8HXZzKAQFMvLA1NeVeeTXtqSJfcgcKdQMTufUdvwds4MxQBCFdVAGN9evV6epDbPtCe3YjhB",
  "key6": "MasdrAdNcTqjyvn1Xtqf3A8ziBy8RnxKZ7wEMSEaJR8EJa3DE792MrzwcDWG8DCWf2Zu8kHkvkmURysunL2Ffvr",
  "key7": "2Nkc7wEU7gn9Rur5W4YRgWdRMq6yHk6TcqN4A5Bu7rJbspDij27ny6aqGtcsAjkTLhZ3ZYQsWqNaY4JCcGqK9itM",
  "key8": "J4rEALEwKifRkVPcMERuSCRYvRRbbBcosRKaYc8cBDuEVgWawT7KVQppD5JeUt6Y5GfEpUaiGtYXiDEhR9zgDcY",
  "key9": "3FWRisfjLhBzY8xmSYHapN2WP4ZCj5152v3agwPfV9vchsEAUTJ2ggJfFMhwu3nhw9uZwkmAq3VLVnSd31rYpRC3",
  "key10": "2D7GuhmQuwQXZ2Y7yQqtbNsSb46jXxCGJvfVERQox8D2CZKHJAwD4tkgB2JBiHkEMncs91imzSbF9PLrZBC2zcjJ",
  "key11": "3yTKwStEusgj1KN5F8GUCiH76TmqTwuHWfUwUN2oph7KDn4mCmPwogqQzveYZB1dDiYkByekkR8SD3WrWqKxZAd3",
  "key12": "5FMsuFaLKfuUzdLMg9cvPDttCx9Kz55ZqikLJNSLbejbaDRR5MbJ49fA6yLg9cD2F1ugbnfrKghEmdYR2tPX9SDd",
  "key13": "5qmtfeiSshXJrcd18VTgxcGHn4ds7ABBw13qwiEqyxFqVET2uu3u5xtkc83sJEycr5r4vjwBFodzQvGh9GVYwdTg",
  "key14": "4YF6PcAsRemw9Mk71jYb2ij13atiaRm4J5HTF2j46gYYBRtGf2eYT8xheHmADnFuvjNQUckGw7hKxzBv7nmUrypi",
  "key15": "35ebGb52g1nd36MqXxEnctPxEgjPscCHHcxjyL8FKrGb5hday12bgMz6ANN3fxUruU6GzNZS8yWkA3QsJ1umCGdz",
  "key16": "47vUS2tZS9evCySj5UovLu5krJ3rPdEXYmAxc3gvQERCiGZ78hpmTs2rUsWkNkxCJhAXF1bWBujW4P5wGDEDEMje",
  "key17": "2Je5tG1bYuktYMsVWxQMgEFj3SRW589XNtWZagEwA4S8b55oZaySQ1rDb6mMAj8chkb3mWBMoHtUjiD2fysk6KYE",
  "key18": "413uoLRz5c1aspS72gzjpq7cbaHeE8pUUSZkf5aRhTiotpQKq6o6Y1CYfGPm1fNgqakLqrRExkfmUn25ESgJhb3V",
  "key19": "CWBghzN8paLKVUdGQCqZe3VjJWJJQ1WMbW3CTPHFEe2uARTu78wQknMPEUQVMDSrwBz8auLyvU5aXegPCsw2pLk",
  "key20": "575Po71ceRdD5n7VeetdHUyYyer8Cea8vB6teKbs35gdzpeb5KbYj6ksw3HqGLP3Lz26VNMzzYpGc8KehFPruHD7",
  "key21": "59oHuiYECwqBsMGYM6EweyKuzcNUoCVtptERAhwBDNCBqHdj6xW6VVaBGM3gsejT5g3vsQ9vEEpjdJews9trDZp1",
  "key22": "2Wy7NkBhEBCiKE82HJQ26pJprHwTAkHcaX55ke8hxUDeNXrDpUtSF53SQV8HvRu8sAwQJMttwvGb3J9STJxKT8QW",
  "key23": "bU2vUEXgmsPH1KPjMyYeTHe13hGfgbFoQW2DcR3TJvfSdxKBUFFfQaXdkkuD5Z9R6uKV1stJXpj3jzGgdh8yAUq",
  "key24": "4W4yBGqUixtsAqq6Mor3A9GkrMDoV3xDScriAJDNBt9ddFHucy9GBeFyt7MeFtofYGJu9cw6d4ZfCT49W3q7sZ5r",
  "key25": "46xswEH1T6tuhd1MyURkNg5E9JG4LuGSHz5njKiazrHXd8KLD6FuBFHKCknrQT6QutmpoPRNcCcpbbuJ3ULpgcEp",
  "key26": "5G9RbZJ2phidzsCmkFHq5vrSw3tJCM38G9LpCE3MTJdCAuHwM8rW6SCwwA9qVesRLee1khAfFcQqhBNwP5HKb344"
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
