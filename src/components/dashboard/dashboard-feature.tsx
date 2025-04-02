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
    "5YeQ15jwe2FgwTWdQeNfgUS32YWx4g8BKc3dJowDAAWCjvNmTKBfXxd59yEb719hh3oyuYPpBATKmEP7VeUSk9r8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36xuJyr7giS48QBNF3ahQxi5thQ7mR5qhBUxHYthUJKZKg13WDtqisoe3K6mXbrZGHoem9kNsUGMBbBRzjKfSwkT",
  "key1": "534TwDXUMMbMSSFjWktestF7YHH5VDwwfLos88ffLc494uS5WJuKGd7GbGfa92ny93LRJeVQX7MdQWHfYbiT9Ejv",
  "key2": "3qQew6Kftu2bQS9PwgPEPg4ryodsc7QCHMjzNG1pXpNT1G9XUoQ6zGMCk21GhYYLpXHXBc3u7F2Pkx1ToLsfJixx",
  "key3": "2LSJKBVwikMViNZ5J6BJaooKi5PTcTQ9XYKmDuwnp5jbeDR3syKZW8tzN8ZbDcbH6vjvCbUJF3oDJYi4qzFSE175",
  "key4": "XJyUST4C6HsH76Wnni9R5EiJypCpzmEanXY6qXs8ZNPxkDCbxoQXdgrsoWrg2XQo3mMsVkZJAPziF5RRuDQVPuQ",
  "key5": "9AeQtpQQw8aLcEdfWxiq9Su8enYVJUCUiRNnubL7fcpH1DF3DKgd4P6nycJxCQhTv45MyEcRw8riMyiFLPJASTy",
  "key6": "4M95SyndXpkhF5nccUwLTE24goXudMFiQ77xtk8Q93qTf1iZPh8HSBobBWstgAmjkDLUUn8pJWc2Nhoh4Thv545o",
  "key7": "2X3typKPds2tYWbC7SKeY4MqAKTqsu7QuHE9ToEErrMXqySNXorJJYEbtBTjy4kpgeM5z6e64xgSy9fjwqAK94zp",
  "key8": "3Z1LvZtjFwFzEzFB3P8R9q727Mhj2CfM4rXvUKrRVn5VCDspYH7oSPBJHHSXwAvDGqCGCVYy3fy4SFX2MnNQ4V2W",
  "key9": "eJTQBrqM4r8YjmPvaZcFaVEATp2cPhYDewraEW5FgmknSieAtx7sDCojFiNGW3PgcQLb6wg92yDaXj1pzJwnZj5",
  "key10": "3gY6sEGRVFCCB1MUCthyKBTBzXTEt3TmbsWv93soS6mhf5Y4unLZHw5Av2F6NXH1P6y9QRPd1YmMwLGKfxbJBSGu",
  "key11": "3WkT4aeu8jo56YwA9SUAXWxx9BGrSL9nGzUK8taPUK3f3sm1ukKKFGYjduPveUmSbExdyS2poc3vuHE9JKAz2xkU",
  "key12": "32XsCUr68dDwTCPnrWKyppGeazEW9PGZoCkwrWWTi6xRtaynP1EuQWo5zBzgmEv6FVp8Bo1No26iQCRSxQLVG3G7",
  "key13": "26ya5WAjENd48ygbp2ucvT1FcnZqu4h4mrx85WFe9RfFptBjYWL1qdkWvuRycKCFyNMQkJDpqNy9ctRcTMZkt9ss",
  "key14": "55Nn1C6gLqNAspuByURDGgCyHQZCv6SJzRZR77WL1EJ5c7zaRd2AA1xCT3YVhM1B9LBs9wHxrPrfu1tWo618ME4Z",
  "key15": "eCsEjUPS8RXCzyfvzq2GA328gfHwybqwS3hY8UjwaQfVVSdo59M163wUGoqt71RY5MbGXd3cBbxcR7eKBGRSgXD",
  "key16": "368jmCkM7EaLFSqMesWH5GrACKhQqg8DndSMn8xT4JVapiRN4PKgGKX2iwn79NvWX9GZ2qpV4sBCxba3f55UFY28",
  "key17": "2SiA888EMrkatJCKC2Y3MQ7bc5r4wfEHAnvfNeDTzn1gR6iQdwAWatLVd8krHPmPe4FPmHzmFcSfFXpUeHrzds5J",
  "key18": "54KQc3NGFyRSQuJjVoPenW6eGH7gVKk9zxA2iAoudvDM8ng8jMkrgf8EEUit3c9CAFDavedPnj6X3RajK5UKcGm3",
  "key19": "4toQkpE42Kmwz9WtoD97fwAthpLKASL5T2LAFqF5DUtTufWAhbPEL8HfQ7WrSpV4MRS1LGxJ1QWFPJ7DYdfCRCiD",
  "key20": "4G8z8eSVQREW2AYoAbP9GbRtnu7M7YfyHtAaKYQWq9qvaJ6V8kPcYuJXfvE7bkTob7ttnYRiARman3dC99BvmzEf",
  "key21": "KmKfWZwHgmLzNDrd9vbgUc7aUJ1pXA599YbgAfmptPPRLzR5QpEkX473JsxmjJ5Zvgkm3wpC2XVZk1Axt371Enw",
  "key22": "61nuzM2ojotr81NKSyXbVNfehyJNuRTHvsmqzDUMKehamJWGE7cy8Lww7LMsXgsJpNCBi7nYPUZimuse1jwdH2MB",
  "key23": "4pMSjGpa1RmK5RKkFBf4gZscopoqUsYkEDjUgyVnHHpGh8aSdNt4E8PUc5U8J5zHT81qLv3XUrfzqKyZtJbLNbgJ",
  "key24": "3XDE9WGsw2FT5Ls32WkJ5m3qxxSHW2znvE13xY1ZwVmSzdR9DdUBZDeQvTiMSPzJw4Su2CbfM7TSHqwyPLym5Xi5",
  "key25": "5dWqKRahixVCpwJ83YGGwBULXjpuv2eRk3SnoLa6VP4A9ZfVNfUvr5fWG1E6XZmdYRENge45iGWVsyorPD8gGUvM"
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
