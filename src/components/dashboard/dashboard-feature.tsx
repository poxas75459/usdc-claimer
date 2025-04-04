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
    "kwx9FYdPtQFSsGdmK2Pz3mRZqxdRQmnZRAx7tj3ae98pskz5WKTkgbE6PmftNxsebeniVvA3hNokpKspviX9wp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55G3arQcVthGzyYZTkpDU1VE3cMKBSi2JhQtwgHaEj6vw4XnySoDJ8Pmick7V177ChSKeUGsnFB9YD4mWfo2w31S",
  "key1": "UnmxUZdm9FodF1BYNhUHS5EZQaJFwTUundhVjM75Vy6hhx8cTgT1a7RwSs7y18nmgzAFUeJaS5UwCPYHWGePaDN",
  "key2": "2zHJcXTQjXCZFNbr1jeB8deGztRcQsynvdWnrxwFtrnYYQRfZVWHpkNkQUATmH1nqkVRk6YnygKScWRnJ4ASHStn",
  "key3": "62RF1kFAzhgQLahoti3gvPzfftHGcYmx7DwrDYJ3Acxvb4qGu5zJYXjaJBZtcDFBz8gDvLQ2be127VyRxxFG3qVi",
  "key4": "4hrbRL3ZGjMDwFnFcARRgCDVLRBFrNCpeG3YjXyc4mx7Ty8kvxGHhTmT9MRxfhtwGCtUop32LrcLCmMEtUuM74Co",
  "key5": "4LWtxfhrNWMUQYecySGjb34qXAuWRf1DfQosHPTwshyrWuY4Jnvb6KnBpN3q7pPUXSA36rxTrkEkJcNtD4oUNztF",
  "key6": "2EABFFWbCWDbW2DVj3w4fxriueadFHMFpPdsKvrJuAMsSow8RXvvxd31nEQgcsDieHe9KvSBgtAWF3sxYY6cv1F2",
  "key7": "nXqZai9jcKE8hd75w3MB1jwAoZgJ5LL63uVZmFnreSzdLDsSusBneU5b73rmJaQ75Ur6F6m6jJD3veDY8tkfVH6",
  "key8": "5WctbbDNEwsd9YLBZKonrnMNXBPzzByEbKwcxoxd3axN41HLj89duNCoS6we4HwjThbpSiUC7Rzg5r8cWC9p2gid",
  "key9": "dTrm4cRVMEmwJrK3Q5j2MwgCv4M94FZixgwTcwGHbvq5d3NF1XxXHhpRqbTzG1wXg4DFgk7oTtYdWcTp5HBhiqJ",
  "key10": "tXnfDh3QW2nm4DdU8Qez7fKqLccuofFmhKauWoboLwE1VUyhpUbDW2iJt6g8VA6H93Xw2GmfBFpuEidxdUuyFYj",
  "key11": "n7uear2FDf1qhLE3paLJ8esvBTYXVkogAicGVEySBP6p33qjmRFzY8DTmzujjxfLPA9JbJ674kuniPLjnwaJSWC",
  "key12": "2tP6V8aU1dtCryTiZp6e921DmVLp4XfRs59SmD7tbEiL4eoYwkWwPmY1Vdo2NmEYmzj1HCW8dEa7e8v3XZonS3Xx",
  "key13": "iYXgacg4smTngKu1Ko4g95nKV5BbS1RseQ3EHsRktivKQ5EUK6dqbJ3AdkgU6USp7YpnMnaXnBvgpaDbNrLnnU9",
  "key14": "5gr5djiVS8qFTpLQZYhv9Eh42wrXUNaok57yZGXvtUPt6WLRb1TG4YW9jsZRTCjsUFdH9w6mUhoYsHd55r4VADBT",
  "key15": "4NR4YXAfK1LdyYveR1F5QqWS9tQbMyjNBh8jv6nVH35VE9qQfy2VaEd8q8csvPpPQ6D86ec6f78cjbcXc3ekXWPC",
  "key16": "3UMfcjsPNocHsg8ZEJG2XyJf2M173s6m7y4NCJD2GKgENrfBqHNecPW2TJPiK5E6yH4Wk5ekWB8zQjoDDRB6DX5n",
  "key17": "4mgzgktAMrRUb9mqN1E2GXPPL8hLGWTYZDtENSZtiPJedaoKESTDvUBhcxJxB999pqweBi1N5GuqiDyiztCkarFZ",
  "key18": "3Xjk5pBis5KRdvPbhjhSnQVnR3JjijXHcHhFhRrpmxpRxBkVJ4PTGepNdjbKeqxQJhMw8wkLzgELanMcVxX6A4Ff",
  "key19": "3d95yNciMBGZBi7mXifN9eXt9bnEbh9UoxJywpEyVdPn4NDviSBGL99dPuxdajgjpBRsnod4yY9HDYFWQRU1g2QB",
  "key20": "Y3GVf3hmpWpEVawftDDaD8GXPy5hvWsQevcatB38of4V7eRxe92cRMgYNEkKNWv3rcYe6DHZ6BVTQ4rrcSCZNRA",
  "key21": "4JgPh4jfceFerKEdA5cP9WeRkSvvEPzVSosQ7HBvG5kFkY3jG5TwQzQg3iDDEmfkHHxsa2gByEW7ErpFFqqyjZkt",
  "key22": "bWyt2gxvxkLawoDZSN3bYDjXPeXh1TQy4jA16pVZFoUUUWps7LBtWyZXqAV6V7Zvc84ejZankhqnneUToxrwhB3",
  "key23": "afM3UC5wDx1FNtEfCm1yuPJvFYqf7M1kEmNkFivHo4hieTh56oqWHYuoyahmJh4sC4FnVA7td2oCPfwwosL5NFk",
  "key24": "5RHGYzbNt3iNY2xyEGiUYM6PwxJLEo4v4W7qQZX8TKxXYYN1rMcEUNpzGTzbGakeGcM3keFNTB6bBkT9Z5QNZioJ",
  "key25": "5gRzEA2CW1rBwkrK3LtxvbDgtkbDeaquzPrxbYWjSMwxsjUD3m8aTQ33wYtwykUUKYo8WLBACq2Fz6FyxLjYpga6",
  "key26": "vxPdD9fpi9yQRnz7dviwnyWXF5HJTaaobaS4Phuxqe1XXxqzNfYEXpYx9yMJpLemA5569eNK2wYenyQXWZyjXDg",
  "key27": "3V6KAhXEcUS6kGPkfzSdwtnQxJpMyXVav2VVZEYnEBGxxWTJtqVRcyuepLxWzhLVKoj9F19EP2F6TfgRQ8uZMJFy",
  "key28": "3CDEqj6UkpBjqycdxPUJjNhDKZvFsGQDM7Na8qhiP8opfTE3weXC7zN6p2AVEJr9pSTsBKByAZcVecJ7y112fkvN",
  "key29": "3gJQCAQcCPhrTMpobhaDXBpeeTpi4vKJFaiXRLNENt84GYCbmxDMvwM1BQMVra1Lb7qLiJBJHJAQrobk66U9bTuu",
  "key30": "3pHzLw4tPiLQAZjJDmzqsNfGM1JLEx7KubbFVuuubxnwKesW4ikC45RNgkkkjgzBguzEnXBUTE9nAKTh8AwsuQen",
  "key31": "CgM9emaME2pGcCUUJPo5TGNPjLeAWDQM3sYsDdXHQ6rb4pWs3j83eyqD5oZATr3P6fgPGQvXHeXffgnn7DqRNFr"
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
