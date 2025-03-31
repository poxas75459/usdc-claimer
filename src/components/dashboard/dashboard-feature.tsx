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
    "5UWAcvwHfmWNWYkUc5TJnmQty8dRMjyZFsJrieh3pYCCFXLEBzKiicbXWWpb7vwp22UQ6Mixfqs91G5jJwbbYNLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52W5x5R8uzRCoevKGMHcmSuCBjZxw1XszUpg7oatLyXWsL2hoxJNFRp3Jr9R5QAKkyCY6nxh7Nz3HQWLWFU6Qghz",
  "key1": "4S6Tc5nHSUgdU6z8rUf6jWWpDSmwWnfckXoL4qr7RCZabJaBvgypaJN5ZdzPUCqNFpQLsiff8q8sw2kgr9pGbGMp",
  "key2": "3anqFsUWi8kdNDZET75CGo4jzzkNkK6g6mJHg1WT2JA7Zq2WNZxWR4mEjLUMGRKbPfzhheWKSQ8DRpo1NiHNddCJ",
  "key3": "aqE2b5bctvWMccjSVbmtVHJdGhtV5HNohpNjPEcbfusnSYZY9YvmvrPhzd4eby8P5XYsfcYQvWqN1YSYg11t4cn",
  "key4": "4kR7pQZdfmeWzgWKuAuvrciGvybzfG1gaQQnHpqFMcquvZGio6WcCFBUPPhSt3RcUtp1P7Wq2MqqsEt9U8GDzMSn",
  "key5": "2go7UhoQz1CTMWnC8k1pM88VBoZavf8UBGtWqE9C9pGKErZfrDxX9Pgz6Sd29QdUHhLHbm2Yz6iuyWir8SuzsGZk",
  "key6": "5XqTD4qUPGutBk3VXWGNdtcyWivGsbXSkpyDDwtLDPc6m7u5DpFz7UiQoH2kYbK2wErPJn64hZJRCXnSiz86EPH9",
  "key7": "2fufjw25SMkmVa4eK9FbqyuUrxzMh8ne4SgyqwRo1qZ6YXKmDMrAwhPmkJpQcacmuVd8BxhCBWNoVuiggNp5Rku2",
  "key8": "4qbCEwTj4mDUd8AWAm9vwfLWhACyY2khx1wDB3vy7WYbWcGSttUfs6Ubu96FYg1PVFmuLXYZTNpoRVxEY8CtF96L",
  "key9": "4GurCRQiy3WNbhifAibF8xu2yA3UsoSF62bBQG9BqaH1JtqBTtMdrUeCXP9Eb7aXgcBxeZaZK65KV6azYXtzqy3K",
  "key10": "4ErdSP6TYsHsUtnuSDNRL3h9pzYusZdCgu98DMD58bGhV3qgwF63R2o97u6sueDkBEkhsLywVAqv4Pm4NvRnbdYK",
  "key11": "4vT4GfGEXwpYTtAtdpCqaAYVcuEYJfyRAB7FWMjFCB56jfuC7o1upmW6ngo8yUJRphSnqKNDSzyMtMt8K2WGq7W2",
  "key12": "5QUUzxbw24dnnUybpvLhQ1hB6ySL699N84ZEQacbc12JaYPueyW41AFDzP9ARn21Tr81PDTMraQpu7Ljd9nW2RkC",
  "key13": "24VYCqfhNsLPaRqjvc2RFZMihVz4NfPqA8Ygida4PRKgJtYyy6R3HTAFMP6d9veBgQLENjpBLLUqzSb4AX68nzAA",
  "key14": "4wfvEEQs6LndweHdr1rZFDkU2KKLDRjPQvWUL7R62E1BaCAaurp5x7tUWyPCnVqW9Kxpq1QpGatSFXBjgvsTbXHn",
  "key15": "35equbAuMCNufUsTh1wfywKRx8ocASKPQHvTRmymu1Eyv84vTHM6mqXd3rHgYaL7xbFKxG6Peucermiw1Z8FfxH8",
  "key16": "64CgHmUrvEweVxEUqThaqPjAKhmzAGgzqmcWkpekRk7zR8YmPctMeWK7eMpHoooN6Mj3BQN8j2y7ir2VVNHKmnDY",
  "key17": "3ebvVyrgU1bUotjbvT6uXhSxcUxQfFwfQN6xBjqE3nZSM4qaqkNLxUoF9HakQYoL68rQxQT971AG8cAe2rm6Cxmw",
  "key18": "2QDecg4xfAVjrEoLjgyYKmcRNoV5i4HwVMZPXSLmWjnyMzCBCrqj5ijYZBHhwL2Qo2CXi4y1nb5ojCU6j4aaoMdS",
  "key19": "4ZZxBeFDcxUpw4kskapgkCPQMKamwEXHNPFrBjgisduWhw6eJe2pfTJoQJLMFNTPTgJwi77YFPf85HhkyWicueAT",
  "key20": "2pqzqirShBZpzXTU9NCK4mdCtUrWEwjMrerwbXsA5kyJ3j9XdTR8Y2SdpcGJq6sPh7aD4P8AetaHYSmf8rYC1PTL",
  "key21": "5GxwnfCLgRyQvakrjVRFBuyRBZyyhhFoTBFutDvfBSrpnEBmWwS3QTej8AedtMeffeXt4ufepy71wbXZmXEdxjJE",
  "key22": "2NcVQFMT4CXKszq9e7uiK7PJkS6xW7YWP2AMPdsVjLcsYfRAjDKxtrsV2wvboYEDpUARZn5piQMmM1QRGQK69Hwz",
  "key23": "2QrXSLCG5vyqdXBcstbrYF4ujbDgHKMbHkSQnxtDKpe5Hyf75UjXyiELVkBBBi1a1WxnupmjACcpgARpS5H2LSJ3",
  "key24": "UMJAWqJ5wztuRzW52Q7xHdSHStPmCK1XX8wLuK6LEfnN7ZMhBp7rS1Asnumd9vtVzFiiFsHXYyFeEK459waERpJ",
  "key25": "2Uaw6dkQkVVMm7iVGFW41uhaZPdbfthW2VXBcXyRgoiqo8giNEfM1k5uVVPH5fxsEPjCZzJNWn18EjHcUm5N1s6N",
  "key26": "j1STPAiHntVcxPdWAzF9izHCLVYZZYfTTK4bUfNPS7AYz5WuKEaNJ8vEExpHWeyHsBnCwpfAebBBRR1ngdBEuL7",
  "key27": "544uMThtE7tLhnUp3TzFZWHXWEcqatnGMAgXJqKhPdpSDBHrqMtuj76zFVaCLrMW2FGH3udroZwhr8FP46bzxBgq",
  "key28": "4PaM7Jy3oJmUZ8skV5qgPWikSaKZDDuUTWf77RU8RDdzRrn6jTJWS7pYoXXoUgZU53uvsxPxxo1e8dynuxFkCmFj",
  "key29": "67m7ua5rnAEmJ2AWs6ed2wkA7XFe9HkeKyDX1MaPii64ULgT1wt5LE1cA35Z3hpXVMpMLRjNZANYj86pCkjDV4RQ",
  "key30": "4JqG2pidnUUqYUCo4GQDFrRM3khBjzuXPxHsdqyo2SS1EmSLMv1KMWpekkURTzVKs9PCNa67dfUR5VPife96VtST",
  "key31": "2jcXg156KfWm7veTmPo3U3hsfCL4tpBpkyyETDEm1oC8Bkv1Bzwsth6jthChVvcq83GTfgfQy6tbPFMpiaBnqfwP",
  "key32": "JsVt9NsdBjSn6bYDmLethRw7g3U3B3akAKrpyn5XCAZXcLS65r8tmyekizXXSqpTyfCh73N7RZLrBaG9Xi7ucXJ"
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
