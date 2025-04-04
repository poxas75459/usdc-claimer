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
    "3LZpTpx84HFaZ1aRnSZKjFD8AXz4QSNNR55wGZKWsFs4BUd2BCM3PqMuXuM6wGo95vQR2WnA7oqMtbj1o4TUj6CA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25tcpuRfacED3nwQoua3eQyYFxenqe3kaDMPPe7SA1NUVr4e8J56FGpqnXJTiYQi5KWrZoF5rQTc2yko4iAWoF9S",
  "key1": "2Z5bwTmizbfcD2XBBr1F4peVQ9GZd2W6wyB64yu5jYsPrs6fDgQLjaM69rXexL3WXKsqxhxdL5sWtB9e2hZDTa9r",
  "key2": "4hdDMg4GPJGHnFfubgBBwNNYoQyjeADcWkrWpqanLHViSy1Z8ovn4iW2Rba5PG56a9AFLA5hdaXoVz7NXapQcPPS",
  "key3": "5heCRLMEeT8FkG7kBCcQrAL8ejHiyFyrE3KzzZRx87oTfyyCBFoaNFZ6iCiovTUBTshBJCH6EnHmsXqHFRKzDqLx",
  "key4": "2321zJSBSJbfoSWuah4ZANiJyBSaBiYo1ooSkypeFWbosQyTLhu7nAXCVGYTMrzMjKdQgMxY55DQTD9MfqLMHpcG",
  "key5": "31T8SsUmBzUDkFFSEGxB8EDs1VmxCP5DFV8X2JBwC3i8U2cjTkszaDRhtbHxJW3BkvNMSknEQwKVE5ZFJsXU9sx4",
  "key6": "hrSWCtTQKAhuMbjhKTEc59vrB4frh9HsUPJSSezFJ23WLM2J74pRXSAs9oExtMppxSfd4KqGYJCs8thaqr8824Y",
  "key7": "2iWx6UM3UT4tw4HwomS1SdhnFzKiavTHwDaa2NW4VquEABCF67pEWBCe9JAzz8xUHzwV8iBHYuvMKJD6t7cuscsh",
  "key8": "442wA2pzmaAnJKu7sHmby6MFd2CcaqVkwhEPbBNdEeDtLcSPgJqXHG96YAiXejvbSptgikCCAiefLex2HZGxmEC6",
  "key9": "5JzYcr6ghp4oBTAJsYaTmSEnF4pPacdQ3YcxLRXM97KTfQP9breLBgHKK3kx9U4BGF3NmoC8EcKxMiTih7zmGHrr",
  "key10": "413KnkX9x3u84j1vJUYH7ExStYdZXPquvMhRgPX6F1vLHjML966U647VPZxWQ2E4JZF55c2SW8AayUH9hQWLi5Su",
  "key11": "3ScSYJVqKpB3qvnixmFxipZqyViNGKRMY9uiuq6b3SWcMDpJmucz8wt1BJ8LE3o6FFvNkEuEX8iBQJaCLfbm7dtx",
  "key12": "5xXNMepc2i25KfSyNP6DBSBSBgMbAh7ayMLT5qAMRWt5Ym24dRmeCnGYvDbuDTnhhvfFRKpxpEE4naXq2JnPc3aW",
  "key13": "2KyC7mAmEpztR5X3ciJDvBMo9FELHG7k8zpsSo784jK2PbX7EQxfhZdFGcUYVYRss48FJYqwc5hzm2yZ8rkXJRbC",
  "key14": "5uBsiHrxfLPswV2U1fPerf53bwwU2w4LHfznxGni93vQnWGCS59DehHchjCqLbJq9hbmbwsBHYezzE6jaazBpePa",
  "key15": "5M3kKX9tjiA1n7BCSZr8dGk88dGZVpZ19bXxHyicF7nEs9qCFAmk2sz3aj31c2tYh33C4XJ427zvkvn4viVFeNQe",
  "key16": "3dbMGJhaW87Girk5oNao9S5Q9vz5kuQKEAcyWBAFj7bibY5bBqRP4Uom14LUxWC6z6i5cr6FnLDMiq7WLFBrHa4w",
  "key17": "5PrHfp56QAMULZdfpX3cXtYTMywS1LvdCY31aqamVn1o8TbWYNrVnjxgGqfzrUVPTPZJLkxwaor5c4V7Hmz8Rmja",
  "key18": "4Z62KuotRgUZgdVwGBu7uKBtCHEW2n6fCCykfVT5ZjuiHPVkaFjSzZJ1LRnRtKL8AgGZdhBJiDe1XpTZiLqdg7iU",
  "key19": "4hs7iT1m3i4Z6jfJCYPtbRYbAWT1Qbib8f7wMJFHqe5oV67RyFoaEat3LajpRhktjNBZ3YKWRR3BZk64My2xGMsL",
  "key20": "ttGbAFUeTRd2Q4uLE8Ycz7qmApYMYuLgMien13Lvwa6iDZEmSFyc8vRiW8oRMEav5wxeJo7FNoHEd4Duo5m45MN",
  "key21": "2UKnpFkzckC8Mtfacw48M61wmqmdz5wqbWByuwjzA4f6cNgDc9jBdxTDfjzMsQhPP1ZeWpLbGfAeM4ZqxeWvmWag",
  "key22": "3Wdb8s9pxvFAkS3TvDmeN3SnYDBrLYjcmv14qkjAzY7euBUvBhwRLuk5VnYgGfsmUXqVtFdgw1Ztk65H4vjQcdN7",
  "key23": "3WgHRzv65LqaDJi8h5JYtXVURYharUxwv8jCrSKujjDziqvChrtQx1qKxRW7ibaP3kvHKzmsotRQLhiB7cjKmBi6",
  "key24": "4exhrDg1zEWX9cYVKpevn2yE1XQgRPRUZbYfhMNPJDU2iM8vruFSp439or2c8DSEWpAVLK14f1kkDxyDnhDRBCTG",
  "key25": "4YZy4xDQXnLUmq5zixT1p7zGA7ABgABCM87pUKFZ1z9wKfjMfyoxiiA22BaJCL3CiJ83AiRzjXdjRnXTpsEx2AQ1",
  "key26": "5yvTyuwcMWMJ8hY2WTW9RVGTjufH1MChzjTfSRuRRYNTQaVgDAp791GsoRUhrvyjddfrVjqay1U53oAeBqubWACq",
  "key27": "2g8svzjf5z9fCQeEbsHkST29knxdjhcBm1EXAauUur3irffYG2Ny2KLuEPpf7WaPV5KLFgcbiG6NzpCLTzL1SsWU",
  "key28": "G7keeLbpwAXLmRNByWk4zB4mwhenvr7tjDzBxywuRTq4XpnkLJ334S9xVnBXA8ECyw6nnVi4N4QX3MXEbxVgoEp",
  "key29": "2Jdo8qt5M4vNk8bb9C71yfvRXeMLALdjmdH5mHXcVPPpBi11gd4aiUW6wvJ3r2eywEEdC1Y4DrDv6of7qEbwgavo",
  "key30": "ufrrbvNGkvmS9ac3AFzvnGNWfh3ZsscqC4kbTigdFdssZpbzwBuy1AFa3zUwEssZWqnbfWvkmUuxYhXTVX26KqS"
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
