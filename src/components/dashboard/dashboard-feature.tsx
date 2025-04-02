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
    "5r919Rg49soqzBzGLtcJnJn5oDC4zsSkyvPNWTAVmLeDx7ZW3xJ86wwUxUWxkEY3WqMuBEhpdEsu9FGZ48Yr7HEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rr9wF6TTMiMEQdjxYzUA2RLSccjtMKe7MyqGAsHqZBgJfR4VctgCr1TTXwuduBbKbPHJ5MFZxddUDxkd2NPHn4V",
  "key1": "3Tkq9zcrzEy2zQzgsv1zg5CKrGbgap3aZkNahagXp4zbLitceEdVLDHisW8XePtxZfao43DGsyyP12fJLZJ1F3HK",
  "key2": "4JxsVwksdGonMDbD18Hk8QXzVTKPhtJqyE9QpcD5Vx2hbxSpZ4ZkXE4HfwB3jKZhTrA63F6GmkxuGiqGaBeF3vGf",
  "key3": "QBdzSQrx1XQgF2mZeY7EbGL6GSvdboZbefEKuZcvBCiRLq1M4vTntYyJKBULiTdm6PnW7ceGrCf9r6AszZVC6eP",
  "key4": "3cYToLRdGSKUCjB4y3PaN7cmW5MxmpBLBZ12LnVVmqCiFX8pNNZsphtPv6E42yFKxoqWMGXEeiPVDeQJoDsAq4kN",
  "key5": "21SsvqgSMuXWMRUkfdMjA9LQVNB29jtzBXBAEVpJoAuhjv7LKAHdjinttUWJRk718bcGXToo4qtrjhY4p5HBQu1o",
  "key6": "65u937bLHU1p3HTTVhHhWsCB9jX86ddKkPgXaUHiADCGqKRW7oCjV1yFJXBS5bXXtHBJ7JJfJDZYhtq28BWAnPyY",
  "key7": "nNsYF6Foz2g9dgz2eAYoKPwgJ468YDr5mYsKn2S1JNhNkHTdFKB8kj4FwzMmAgMPVN4tazwN12VUtwiGYca7QJZ",
  "key8": "5FvowTXz6tTefZW14cQFpQoiQxRZAD5UYADuVWHZWuhJ44U5Pq37jqZN3ny3XHCLKj3LZ8HuJ6aj7ZZRWDYva9Ma",
  "key9": "SYXYvsfwtLgbYCKo3pvTYXYcRaUg4Ts3oKmmUqcvYmH6TymrRw8KLQ4j8yfrsbizEJ4Jkurx4YxStBWc9YeB4Rb",
  "key10": "2hYgYs17UgkmRKX9VFrad98EWVMEATo2w5vxmmk7rsdUsMEDGiEQd2YQ1dFMehWUNZRERon1ZCUFfaP9C8yW6EW6",
  "key11": "4cBAotoaN6whYPBLHgJE4jGuQimkR912EZcka7Mi4AqJrwnaU67oM37ouQewysdpUcDiBmY8UsjiZVtqCZRYL3DF",
  "key12": "46kYAvAqMCKMKaReDvVKWGRj7D1QTA1y4zh6H3sMk2TsHgDBe54LAiRroksbXkLfkSQyXwPRZ7k7SCnfc5GVBPBg",
  "key13": "3gPaetiDje21sVtaB8SLTYGD63g3oGrtb8JSLHqT7nC3zXLhqbpB6C4E27gdu9P9qpR4z3mygRyL8nts7cfUpfVL",
  "key14": "5MVmPh4dFdca9xYxjEWK1tfMrHQ2AsZzLxPrzcAV4c7LygjWax2htjr5sx3Xh5MzeC7mYdNFDozK1eb9kGJA2XK6",
  "key15": "4N7aLLoD5hueqpczDZwgawS4noYHxyfcvssfRsMVrgggJdnLPkzEcX1FTMKMCiVk4EY8zdZ1f5aG1QLRF3VC2Wg",
  "key16": "2kyjB1KFVgzi2VBuGcjjVHjY7teQNYH8GMSJKH12QMkwLhmXpY9k13KaaWHAj5BqL1d8dChH8JHbGnHQtvoKQt34",
  "key17": "3FaRP27Pq41c26v2hRkkuBpszSFUyCAKxxKmdGbXxWkAHtohNEv62YcV1n8c7RLgBswwRa6TLxysyetPA6d1KQAj",
  "key18": "4Vg3sCixu4yXp6BohKUkPNEYLkyz4daEhnc6ovntL2bkAKyybexGBZgHzQsrY8C1Rpb6T7LZ1oi4Q865LUQ8HDFM",
  "key19": "3M1GRk3ZWp52smta8v2M2bVeLXaDehonRzBuSidsddGxDZuZQ4EJgzLwho4pjY8wMoT7vSFetTcazGvne3DAqvH",
  "key20": "2SnVidH18okaV68gfuPz6wGov39CzBmV7MDUB1Gavt8UBrvE4s4FXvSYhHpGEo8Wu8ihw5knM7ExxBa55xSS266z",
  "key21": "3y5eijCb8KsbsuXZ3Y6E1RC8JKKVi2psHTG4HRdptnW7DoPGXCty5hBx2Ej9vRA4vh7vsCuQLcgCyYBcw6ZXvLTY",
  "key22": "5GQPFQpLDYe7Xab5ZgxKYebuwwBn4aMCSivFCS6HdH4Au1gLEibcpVJpcpsVD4UTgbDMSxhRdN9cxP115RyGGiLs",
  "key23": "3dwA9U3zujLxCqmvUKXfr1QwGPvYvE2ZJ2Ty8nUz7o6mHAmubgardYJbLmRkfTjnuopMMu8axYRwekax1norybTv",
  "key24": "3EdcKBQ3hWPAaKpsBx7np3Jo3EtLEzwDV6J5C3479f3xdKEaaBkRF7XkckGDFHAjKBGmELSeJvHVAbJfBofjFZob"
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
