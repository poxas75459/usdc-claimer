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
    "4sDDM7uTRz5dbDekYqw2Tdpr8V9KBM5Bgo7yXnbQKzdyq82E9qa4HXvLitkgUZRn2hDDXz9mnKxe5ZAiMLXJAQCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8goH3j9oSpMxzAwHHS9CTSt1cLwMgpMzS6zaLonmU2heaLoJWaFxBcEC3JfL1PMGVtYexxPzxefH24QHvBvbwGW",
  "key1": "41PnZgyHnGG3KhrGarUJbpbSy5cnXoyCUinwn352pCNvFAdNDaQdQpuzu2Mr6TV1jWgapWkoye65xeK7zU1snuoz",
  "key2": "3eeXXe8XxJB69kX4M6Jut5f4K4ULjnGxfcH2HApXLsXmnLsh5CgAiq74nTzdAAnU4PX3o86AdaHoJYg7BLgzJXWk",
  "key3": "2gQE4CtKpWzUG4dDK1xFgzpkrw2YWKRdspaWaj7zW575pYuvDMpz2gACYLhZmR6HbxMUw3yPJbPC9vC7TZEgdTLA",
  "key4": "46SxxyCPYApfjVokSHzAfvdGPPVs8vtF7AGsCiwW9tZgPQY6vfJ61tyxRwhkoHi4JCGtwrn6fy93nJVY1ixUeWMg",
  "key5": "2YqUauT9R4vK97vHvEmTqj3bQEjtpTZbqijUCwn4xBY2dfRZwpGAXvkSModh3t6xLuBebuWVnui5MkFsTEX8C63p",
  "key6": "46EAEatwffQjhgYBB37EPX4GswTW8Sz7RiRrSGK25NZ3eTpYoLSiWUJYsz4LvCPhZjM7bpvkZzjtATdS4DisgqWf",
  "key7": "5szbGqxApm5jbLxPdkRJ9aDgqxDqzb7shMcx5w1CQpqR2WpXXcVjPYAgbPveTPTzD5eGGubfzTUu1HNVmAzNiHe5",
  "key8": "7KpnX8c1qEnxryBYjg2MatawF5EYChw5bN3CPZBTvEiWpFD6JPkTi1qbWQAjqbphU8wYGQAWzkHnWJKyr7t7cPV",
  "key9": "2XMHjjVkwGAnokrbpK7TywbBZ71dfMBUEndh7iSQbHH1z1Jya8BM21D65GwoeppjGVcV4Ko1tixNnP7gfGugRzE9",
  "key10": "5EgbeiF79F1Rf6chtuWGNqa4nA46iuTevxRPkzPgW7Jy2euSV7kuzPJPXXzJkdPZuChgkiPx5MtknpZsqf3yx9UZ",
  "key11": "5Tyn7XgcBwReFXmF4jxcLswkVv6uLrXNRzvBX6RRACdCJ3C3oZSfrdmHsppTtmR6aCBaHFzxGXaYH5kSHMhpqb1V",
  "key12": "4QDJZ8viL7ueFy3gBHG7pTynxCw7VcW4wuZHpM1BGXRtzyNifXP6wd34zdbaHYrxRBP4WLTr6tmJpcsz4EeEhp22",
  "key13": "o6ybL4wNLcPW9DnUZu73Qu6t1Gef3xYjpvSy6HxVgmTVRWejPziQ5DhhAMekXGJFnkjsx9C2HqwMCAK4GK69cUY",
  "key14": "2Ufv7s52EkVyzuZ5tk9bW7eEgeWX7RxPzRV7aVUNNoTtqKizn2MtQhPjCaj5SdcCAhuRpnsVb85U8coxeB1wTxVL",
  "key15": "2aqPB6w2VzTHTgCBNcysZwc4XTZ2iMBtSEsp9Fgq1j1XuYAgSUPeLxaSUZyV3CHsQeXXJneA5FNvFXXE8SLamSeN",
  "key16": "64tTHhxpuWH6sHvwaibnXXBEQvZhjVzSXfSRwW1WMmq8QiAa1ja5S2yXbWZ1hub78PrYHeyArD6QcT6GJxG3U9JQ",
  "key17": "5qJi62UaxuKJiCWRD2cthQGUVPDcGZjbRgn36Uah46sqYYRSLPDvqc7qzg2xqQh8Ceo46pygvHzh8Xa1W1Pzjz4d",
  "key18": "3uYXq2crMHzz7CNYaTXgKUjbEUJBXPxnGmmbAG1ZZSZsQBWckEdRE6givJUB6LqeM5X5p7QwEK35AoKXVEHijNHQ",
  "key19": "SmAcLsdUuP1BMQbSRvZiYLigG9z6sfg3pQWPHvLTQrJypnw4i9eN7dFekJ3mXiXQHLHhzoa6t9jPBk7qeRC39WL",
  "key20": "3beAj51WPXGthxWfGha54EaRQbcy326dQ24kNAGpWPs5dLysKYCUSGkRaHTGMdJ6nrXJY7X98HaxykM1YHBt8jp3",
  "key21": "5DFE5jJmu8rejc7GENtvuqdjamsQBshrSaHCRPR6Cp5GXYVZwd8gfFQeyWptxtFB2LdjwjvW1FJtZGLS87bjD9ps",
  "key22": "5JHXBipzpAxzJGg3uM9MxYC6qM9dA5rF1wmRPx5S9E7XoRBo1B7C9mgH1mm65dqWVGB3ZSei73p3t9s5xJSPcfUu",
  "key23": "2bf3U6x1uhYoEh7XLgfDQxuiQd2EcsDLmRm3AfYkLJLSoSQQobdCKmxAgVPwE68hQSmCCkPup1trqiXVPJEDaqhV",
  "key24": "5QmAfCogYbM1qYF454MCkMpVLHuQ2V4V1qhzc4uW89fo6B371HziCDFWrqY3f8YQa2PFWn5UCqujc3n7XVPMToSJ",
  "key25": "4E7yCozHUHj1kDkDcdx5W8eWpELfMDU2wzb7ifSsknpiaBF4TbkoVK2tQp57b7nTMkHGEwznbgSkxn55HnMWg1nJ",
  "key26": "vY4tK1EvfiSTQeSg8emi3hLWLotRkQKKzNVsv6JfCD4wwUUJncVaBr7tPZNpPgrBo3oKwiZAEKQLUDZ7a5F1s1F"
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
