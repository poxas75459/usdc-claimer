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
    "5pvh6BE9gE8FNuLXou19uZYXQf368Db9Dm5kCzdw6e6hhGBxgn4222aF7s2ARjKB8MpuH3S89LV1JdzNA2xzBSQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VEDCVCt2NKc6EVoCaS8fWuYUbjK8inD85qMMrXzb7iRrpLCndifpPuE3hma5vuPeaCu4oVx6QrsGYDx6ryCdWAx",
  "key1": "4fLq4ZpBjVbTW9Wz7NxkGZjPkiVWpW73HdYZ3v7oFk4MQhpPXFhZ5HCnw75HohzLQqZ64KAZ5YdDfpgvwyFRHmHc",
  "key2": "5DxpzGT7JbDaFPhnCmDhFCq6amLWh2WLWFPY3W33knwVoyk6yLmty1rUq3oMBn3bKKz3rFB5LHcoxrE3sLC5kDyt",
  "key3": "oQpnnKWL25sarWNi5L9adH1W26UECrUHZDBRkx5YkLAXopDi3sGf7m98G2uJ3dhEdeNQ6vKKA5m5frmUUMWSYSd",
  "key4": "4tWqavvpTMz8Y4jQiUidUXnr7j4icfYubPNSCoteZGsK5cgBvEo9vR9dRmmCUkNddMB5Fon3aRMfjcJcf9Zb7JAX",
  "key5": "65T6bfbhYLT3PFb7ZtffgZbFzFuJZMoELedhobfuo3GMKTrHwtavsSGExpmwjrayx8BGBjBxmTBdDY7h2iym62Zh",
  "key6": "56f9dMf1jcgN2ZVMg3po93LJQoEnEUf7UVQpakG7n1ZsFkPVFiciwfqxMTc7uJniYG1GAdRs1m1VmiMMkbCJQhM4",
  "key7": "56ZkUGyYafmFJvKWCWoykuiDaQfxghYW92cadNoyfUuFgRzzMyoRvkLJJ54b8HJigsd2EK8Kg7ZsCm2UDYJ8VWob",
  "key8": "53SUkbH2sPk9v4G5F65xF3JMAfNYSem1MU1Fgf9zRgUxXuwfw25rsMQVPwLewadEgz2Qq4xeFtZ4VqMWx67o9Kw6",
  "key9": "9thPVan8D912YjgKsqLb49amQGY6p6Myp4y1h6uzFEAumwGqwqbLRU48QKQG4wNsEe6qCcUtqc7Gd1yYAx6b4NS",
  "key10": "4kX4BPNRaoKzLRss4UfstM21pViXcwFG1o5RfAPLHD9tQmaukkKpHzsYpr7wLi1M1Enqtf8hVKrFKoFz3nykNery",
  "key11": "o55696jxwZzCuQwc78cfN2cpeJ5ASHu7c76maCZdtrJVyCEjX8rAc5vU8wQF5uspkkyBnnLMkGSReNSo3KtVsa6",
  "key12": "5SdoBrb2TqSqR4odvoWB6fy8JTQJ46fT7WfycWtDQPeEa55QLp8XrzExwYFgbH7XvptLhYZTwBuUVvUfJ9f8cQgD",
  "key13": "3F1a94MxdVRDBSb7a1Ho4sDttzkTAYNna75opUhQkW5JiebBQ8XnyuADRsRmmxJUXuh99wkjmzKZ9BV1y4aXVHBs",
  "key14": "44VwP7P78EL5pQV4oCnEy2uLHi2prNTZ8Ez2smc5MSEZixmWZkx4eS1c1678BQuZ7AebSRD3Q7WVZpVehTk5AuCX",
  "key15": "3sRjs6uPS5T7QXAK1Zwv2mwmhtJLscifSKHZyonAKn7s9Jv2nMsMTMcEFZrAvWLrGXvU9FPhm15GdbXXtrURi8YG",
  "key16": "5rs7ta1fPoYr6Q3V8QFkTPsFZG9LSXyBz57MCzCYWDQsGjv3ABhTLWATK7U5DCq2hu3j9afP6wcUHJFS6bYQ3C8a",
  "key17": "24a5WBytNV77eqcSXXp4QmoEFZsC4yYMkKRBmEkX79s4RRoQ5CYj3KmeTAJqhfR7oCAGAQJ5dRecGTeHg88TDSc9",
  "key18": "CKsbTHs4DgpEFixXfHT9Ltx7MEbWWvnbrYVhwBJ66tdMQZmwihtHomwSXebUBr6uFCvrwRDSyu9ALRRTj1UUzx2",
  "key19": "3mvKXVd5mVQyHb278B4vJqyvt2ixDdcXy3ezUSrALTVFeGjEQCRsWfdhE37Xq8n4NR4H4KyuTuXvSPP2fXUfDGbB",
  "key20": "5UkZSHXWakjit8NB3bBibMu7XUXPiHzN19TaFtN3p1j1qxmMRbmKEmiPAqp3ZpaqGXJLcHSr1d3g4ydfrin1KeVq",
  "key21": "4jwH3JqeqVbfSk4zAtpCQKe9ZaYwaWHkRmEiScavBiN5dAaNj5NfgfWk1d1woFvQALbA1PMRXLV1BDhpp18z9hfx",
  "key22": "3pVXuzN5k5GfWPUoozq9JDJJxntyN3xHB7PHcvDQbhgdjhQNLsGVfDaCcXcV1dwxDRBbbzzgWQkSb3ExxfdCsbgd",
  "key23": "47Q5txJwH17JmmB9Gi5sN9HWNSbzi2rU5QaPoc7R4o6kHH8bXnQ9WXSo1cCstjr7RfMwishRGpbt52MiSogpYRwa",
  "key24": "7vZ8hEHad58XcPArQRith7eh4gaC5ufqbUhdPDSdJghsWqxorVQ5Qc9Z1xXYZQYui16KtuRbFAgSCtBGVvJa5GB",
  "key25": "4ounGfDcYRVxczcVJ61FZUWYh4QRE9u4cqDPEK25y94DHWZT5DLdYmwJSbMx2nEw2qovk3eBBsZCezeYPwAWXsss",
  "key26": "38QnF5PoeXk2GgRBbjDT18MkxhfApcW2xNbNZV5vhhGBXb3xkdUbyTiwFRs23H2BoK4Ror1niwgpJCKuvTxYQonz",
  "key27": "4SwUxXYLS4wdsR3V6PdY3eXyPCbCrMNhECFJ7KpFGZCJB4D5ZMhSYkTViWzW5hP5Co9WWEuZW5wE4fUpXDgq9FZs",
  "key28": "4LKNK6UtxsyFEdi9Mrk9epnJVHARXbeotWvBdjLyuMWdb2za6hb47Ds3KswyjZihiXFbdP7EkYgVM3BZJxi6MqX4",
  "key29": "45k3WnGFpG6aNuwUAPoDqENxngT4rdN64z3DHHPYYgLWgU62guTibdc1PQhENiBnBLD87iDS5avdLHybmbyjWzBQ",
  "key30": "3WaTxeRcU6FKai1oD8Az831umYTeCaJwZaQcarTvK4L2ibNuXcVsLo7imhR8LG5Ur9yh7iVBCnEtzg84ffwx3Sh2",
  "key31": "5uDKJrG86FhRN7dYMftWvZJq1nTVKVpbkX6s5AE93PBvfFLihFFcWmaiysv1MAfezPpSMf7xfFX7RtkuqMJtDcXs"
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
