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
    "4do6SWkXnwsNjvEfKbkVUTay8EsioB3v5YFcAEVZ3UHLFs3c288xYxpDsrp8o4RLYXRFBbg3BJ8vPT75Cdqo9xCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NSs3hy7eBGUpAtWkRGn8TeMxhc2iNF7xtX7xmwQxaeSL53UarndHcbBLsBm2HkPQ4J5J6kNrYwk44zXSAWSjAH2",
  "key1": "5LLJvX9bg4a48ggrNNy4DErZejWBeeDXmy35KQCFZdWMGFhN4to6ek9M9yfhwdUox9UBNnbM3T1684EjjRgDHuep",
  "key2": "3qpGkTCQkf9rLsuFrBP2RxNYQuaDAcWXFDaQz2PSLthDNjvWuQi8keikzqk9LK3HyMvSDRH4AjkT4QFHXHFresGa",
  "key3": "3s2qpkNDBMiUUqQg42xbmF8ktneqVRGZZ6SBH8bppeuC3BRQAparzfYQhYTtBMYTvuCxpME7HSR4pmN7y3hp5rnU",
  "key4": "i8u6TJ2uLFt3XCt2QbKRAinPnNYMvXBUQB6D9XFLHxqaWhVxHdjBGREuSioxcQfki8qbF9iAErpU3VH2LHXS5ae",
  "key5": "3i419VwdmGcPs5vFh6UByF6q8XhC8Bat64N2g6VVmo9Yu89EqWxS2af7rQnQgSSpdyuGNJkWuigcyNR9mtL1SWqY",
  "key6": "ZhLxwwWBWVoo39GzZLRm2TpzCfEtmJWUjAxn9GpDGca2rDXZZMoqUAuiJXYxGwJb1mdMq4KT6oFj1mCJixw8L33",
  "key7": "4kFzHYgYsUKgvkxBe2mMH2GWE5ZnczXC6vuHYuGg3ZGnVoXnhCAXFABvbyzxaXFKSxqgPyrfLJr9QhtTGVeq3eDz",
  "key8": "2QLPSnSsKmRQ8xudRDGtCjikuiS6ww7Zpewb1cmvw94ZurrxBTeNT3ox7Mwk2B23ZdmxDzYcu6uWHbpHC12dzsVE",
  "key9": "64b5ojvF8xAJ24uEr1EU1zjW9yw4938Ptt49ka5WVzY181iyg5xi4YD1BSEnUGFJ2qC7rZ3cuLYGBggJ2b9Q4ArA",
  "key10": "3fbNdEHSW5YkRL5AMhMnvoEvw4aDX8aZZBL4kFE9weeop3ibbLfVDgtkkjQf6vAjpSYBrPivw8Gx6wpfzdDMg7rE",
  "key11": "22JFuULtyFZzNvcpXEH31Sg3i4eHrUA1yGX7nHfZB2YkzoYbK5SoDHdXSeeWhGp4QobfTPaZDw4BiuBA4LDLTKqv",
  "key12": "54TBNVLiRdXQz3iYXGCmXwC3TXC7qzbSLDFXDYzYCFbDf5gyN15vcP1VCxN6u3qtF8fuyGMz1Ukrud6L72tGWSzb",
  "key13": "2hAvKyK33L33W1jcXQyEkaVAcAELsJX8VfewrZypzZ1DYhQsgLWQ8S5V8JP29N6f9Niw7rzAukFpMn9x4tAXZUg2",
  "key14": "3BdzaeQ2BWbFPhk55BTYn6YdKf3ie6mcpmXySXSarhyd6Bz2KWtaK1DYZL28iCE3zFGHRpGyonYwwVw9i1i45b4G",
  "key15": "321rrbthujNnrstgnfmi8styGBTST25ik5okc3swZBYvo69VXz6PbYSFgnrs5eHCLtvEiKdiiavGcTsujwkor7dE",
  "key16": "3iegnYoHqmz7vi2RUWQTS9Rc4nAreznnwrVDrXujbQobyx3R2uriSyEgBCBzmYhk1QCLb7EUkVPvWPXpaZutB5zd",
  "key17": "3fuSLDWuz859YczqbVy9KmCRZMqEe3PHVURhDGRr6YFSkBhTnVDvuSyKdxAUGutzWqnztizvJKypcX9hnDZPDDr7",
  "key18": "5yYFEb6r9eNgyQqRqSRJdsfJzWWmJB5WNSnH1U1SgkEdiNi3vCesBcQboTsXYbdxMitActrVn7AS5nSAkkmSmdt2",
  "key19": "5EKJtinTH6YRKchvULo9dxJ5UcjhYD5gtRYTPn9mjdjytVrzRzjnhiX4DoajidcqG8AFCLF3j5kkVr5QgtvLiF9T",
  "key20": "HbsAnZZp78KevEdYSF3eDebtRzSSSXN2NYnBMZJotH49Zw4g8Mfys5pH2sDYF1wQ5xJGZnot1MZrKRVQihaTM1X",
  "key21": "yr21Fk3Q3ox129u45Qpy2ScZMBs8SFttKfy6VugcpQw9zyYvMWodErnEqZSXd5j1n65cs5UnytWMrjsrxpyVZnh",
  "key22": "2Rd9757LA9D8GGZi4D9V8e9J7gH376AmqRyx8s5SS6STHq9geGARk9F478kiJCMe7H4e9V4VuAqMYU4dHabHPxuy",
  "key23": "33wyxpjWxD87nSgURB4hzhJP7jP6D1CMSx21CdJLSbcBs3dk7kTDraShUJBMQvzME6kKsLgcDnKxH3sTeqXyPJ3R",
  "key24": "HkGq82kFfECMwyFyAymdXr514A6qkmwJkArxQ6vx7dk3bBTrWaT3WYsUUYr3v43juMdUWiofCfL94hnQsVy2cP6",
  "key25": "2kExxJGkYyZi3XS5QunL2854zWBHu4H8PKQzuv14n6FAwnDoyvEEm1qnZrRE7mVNPuAGvVyCepcMA6V9QNPEVCEm"
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
