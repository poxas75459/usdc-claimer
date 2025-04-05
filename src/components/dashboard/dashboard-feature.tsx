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
    "53CJnuqbJ9BRw9vw2b41PoB2XUqYGw9gWwJua7CFwUYXDSfHRyqP318wp6J8Lsvbokpez3NxfUBStaR16Rbz8hrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B5ksSUbn3yoTN6YJrESMphxTkJM3BWJunGDJTDgCChngXCQm8zVBaq7ZZAkHhcTKgeCgEzSaBQBbyHaiR2c8pHu",
  "key1": "2cR3hyRnYb7VmssVQ3szpsy3V681jyQ5Gqo2qr5vbzV9dhYzTeKuGPHZ1a3RH5ttAJPAndinTV6sLn9V9hUmfHpc",
  "key2": "5mTgatmsQ8nczSqSfj3Evj8eF9iTvF6CVJorE5KQhvqGDMVuskdeehReAKHG9FmYuEuR7DUTAMAFYYJZ8wUqU2Cu",
  "key3": "2wgVTwgK1czSrpCdWgn6hURGnYT7mrMWuah5Doi427p2q55ivPzBrZwcog7SSZiwxJjUd5Wojrr3EbLavnrpEieQ",
  "key4": "5ki1FJCDZ92gk3USN4ipuuMqgiNttCzfmVbX4QUMnTFHXKDwUM2R75BpRPLQEtCHNvVEyki6Rvq23JVndXCfQ72a",
  "key5": "3inMB7vkYA9t7BrCntscnxJEftU74oJezcbx1nFjGoYXFjQ2kw7xjHiPu53ZGh1WSvxq6GR5q96GVjpUXFdfCipP",
  "key6": "3GondiMphTsCopK4aLS7qGjhXFEgRJX9nEetRC4h14Jo1PiMBnYMzwNr4NrrYdRni7LXvJbvYNzwqVoRXA6BWKs9",
  "key7": "3EguiYGV2ra39GbZwiVxs7nNVf7jQcaPT49BJRFDwVZ1MTJ22RPhDv2oKnVjwHkbcMMSwx8t92rPXj5qtKKtoTjn",
  "key8": "3mcavvBUu8EgdE4Lj7uBPnrETVb1jg4xLiSMzMrXnmXAhnfH5Cnrj5zmfTDiL7uZWQvfNRViqZUYxdTgunrJujy2",
  "key9": "hH6oNDn7MC2XNjKzDLwUWPx6qUTRXsGXzXpYBGAfackYHpu2tparNARgF2K7biAXcFiK4S856WyVBrgszV8sHnJ",
  "key10": "e7en7FxdvhRcGFWXF1VzUn83y88oRLGWSGN7Emp7pS3WsArX8f9p9PFCs5SpMMjVT9Kmmf7LxKNXo9C1Z7J7XD7",
  "key11": "5B1AHVFJD8o5cAsFBSk8P5s3G8BmPgJssh4gYJxw3QFjynyKUtryYewRgcrZC1MudRvHQYWMmSsNBu5KiDs5cmDj",
  "key12": "4Ee15A1SiU3bNSbxRZYtxvYhrobWdJKGa5Pgf8yRv7cnHubKL4xLzJ5811rXY3rLH24uz4xdtPnQrtTXXd4tsPMa",
  "key13": "3BpJYCFRcg4KVGR7V1AxittyziLJJRCCWotT76KYCqNatZCciVeLYfpv5GFYCLMSutbKp8xgobbX2kGh65xDtsBx",
  "key14": "5Jj1T3uCo7MJunyaYywAMsp8AVTEnb8CCTtdiysq9VWVPizxKG4v5fLRttCsKANHb2hs2HindoPUk5fisbinrT7D",
  "key15": "3G8dWFpUkj4vuCmTNjx3PMBX5LWcy2Th8Bbn4KvHFHpQbj1WysyZkgY8Qog6Fa6j1Q8x6jqArWkYcLCFCyJrECC",
  "key16": "62yDjAjqArRM2TgLZqRCnZjLGksoPyXYz9ibH3U7qCoimN5gnczcAWHitSFRGT71sJXbiWRPQSERjT2JJL965ZBy",
  "key17": "3iVWNH29YvpbsZed5ZU32YtRUREpsyvBTPhfoYoKY2D5krdepkcbDETRk7zaTPHrPCy9m4obA4oK1o7fE2pn9kjV",
  "key18": "3bg75nqpUraA2rynnpA5ZkusjnfmjQEdkmDyi6e1UkwxLf7YHch54bstJqQUTAAakpPhMtYULbVGPTp8FhLmgAcv",
  "key19": "56yP51Pk3tBy8L5CKrkVQVCJq6F6H2cgTkw4rqb9Mv3fAQwk9rrWyfxVdyfcaQZe2Uf5paSn52wgFoktMu62JBcr",
  "key20": "5mbxy4VbTCzMWJwCkkWHKcMcN5JmbwsmyyxaxRfWhQrZ1MeVFt11qYVSxh3PJEpKEnB6JU1mMLujaHPjXzhQwhoW",
  "key21": "5oDquZwLPrDFrLazx2TEDtJL2fdGj5bRvuwL8qTteXodrEBGCd9cUGnEVHMPbvbmekvH4oeo1Fr7QaNig1k8boNU",
  "key22": "2N5zjkRhUAAXfEYyA7YJrdCxFpWm3feGvDXghbg5STF46KQqZbmr7vgZHWvnixX3uYbsifAEXXr9YJA84sBrk5u3",
  "key23": "4Cb4qCdD1HZb7PdZ42T9zntQtMfXn93QC2AUG27RoUnphwcmfN8yoEXNCoFtaSshabGexcSxjSgJPxg1uGGr3R1n",
  "key24": "dt9nqPtGQ8ZLX9CkNAbGbhtuzHWKY7khQ5YkYnt16dtZEmk6dhTFg6pnmLUs8NfdPfqtLRQ9cnPCqiTwobQ5JY2",
  "key25": "4Mues5RzEsbAFiJT16GMURVjGSqfPhqWYeEA7ytnd8YFgi3z3uvZzCnNbZ9fNuXGk5NXnye82NdK3Pc5uLMCNaTm",
  "key26": "5n5ZJg3DBYWWeYAv3aeV44MUvvxYkGqzu6EbB4SqvvBCZQWyyGkuhdD4CAZoSA5JhKYFBSG5VKYiW37oB6juhsFG"
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
