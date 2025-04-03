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
    "4jh9f8gYRemWrbMsdBbRd7T6dRarBMpCKhbe3wfkLPAs2RiWHwPCTFvvTzuzPSupGuAiB8pwweMyG7L7G2vFZaQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mkCyN72K7ftswBvdwB5BdSQjtRyknTKpWoVxnCQHukYveGuVy3nSQBJnBiEBEmfv5pYBUYupcFtpZ2LVpGVWgES",
  "key1": "239htGUBPeD2fkvyomunB7Db3UsKi56ppGeMPHE7y4YTXuneo5MozWpTY3WLCU6pXqMQE4yyMBouv7qFyH7N6cMj",
  "key2": "4tM8t9jrSoRwYARx4J7QbfmRTX5VoLfnyZqyEvYkJ3gQPoqPsDr8nBzjfqjdcMxtoeR2Pnh9qpmLFjhDsvh6Mnmq",
  "key3": "5RHFZnnr9X1k8HXnxCncyGnYSCNsZZJBBbTY5rPWFddXNsfk1FHKqdTAw2AZKwksbXqSQXnjK6kFy94anhpwWxuu",
  "key4": "oyxZBtMdLf1VWPL516zYHeSXigHC9i5FgCdpUhm7Lzf2f1L2Lr6KEVnNmm9svyn9XUAPgSSmDbBEmUen1SQUDjq",
  "key5": "d7E2APjb4nrCvWnCPDZ4J35H9UWzu2hwM3SiiYJA7NwhyMvJgLqcnHP4a3obtBnV2Gn6rGpTpMop7Y4aocBSTD4",
  "key6": "4nWx67hAyBKcdcajJz3b39jt2naP7kDH8z56EGcCUBQbaZrfyRpqr7GEm6UHc41EjB3Hc8D63MYwmaigE2BD4AQ2",
  "key7": "33Fx1a2jAp53KqFcCwpLFUDSZDJ6g68MpLi6ERHbnHeR17x6tgcVVE57Wtmebdwt5QDCDP8CNZJFqZV71hAU1bdU",
  "key8": "3dH4N5qTvLNL8QgdGQzKvieaFg5sYwTv2nswoMGUUvjk4fBXf6xZHDU4rmUBKxUvhNxuzb9SFoCAzAugezzMzexT",
  "key9": "2AQ9W6PavVCJgqAQAg22MPFNQgszFLVBufgvaLfxZge7PLTqw66TPGhswuvs4GU8joCSNofnmpPcN535mLo89jXn",
  "key10": "2Jq9vuuiSx6yH9MSdieJfJifzsh351doGLb4sKHuUHxdd2RJF9HFKZLdbpojMadq23oZBzsoSbW6DAzSFGvTNfSq",
  "key11": "ktJ3vPEgBdrm8iWmqoASDtQdnCtztpGi8zpwxoomhzqD1zwT8kh9HvhCmZda6oJ8EZcAU2PbfMP6yJ3ikRs3iCH",
  "key12": "4H3E8zgEHaxC25Jr6n2VdVBpPBRXA2489mFtKYmm5cJ9i9YkpqvEwJfjUPHQjx68ETdQuN71bdBqKmgqdbJoiQ2k",
  "key13": "48DA5SehQb8hdF8fnGWqkknc8Ea8TQdMoJpLmhKnHG1bUvRNQ8JmkBZ6rJ6SPdpHmtENDxiA2QU2k7hp5HMFLc4C",
  "key14": "3MuqPLEBMgBR7fhpy1F1siNLW7ni1Zw5TuiGW6B25hS3rqHgDYYuQxXGM1EM35ViGaBWLXkZTZNcBdLTyZdt7S8W",
  "key15": "39AuvyaKNNYnv5XTocSfkpxHBARphRacM1u42XZgbUMKLqp3FuDYepZ1W6QF9UqBu4xRKwmzEru1pyNFiMCajpju",
  "key16": "5gerdMT4dACrrLhtDLGG7SRFbykF8DCzJVxszDntkdqmmHtowci1yfMWMQRuEPb5b7m128mw6qBC73qHzSXStUig",
  "key17": "Ay4cM9nHo4JmwoX3uVRBViBGguorVmz87JAWLyukwyVgsjXq7ky77jSEgmXQCZPLbLhuGSQBKD65MTJ8FTfcgFn",
  "key18": "2ugXbM4VFKD7C1GGAPGbALhmuHY4SfQFZYwY5apSsJbATkLkETebi4Y9WrMTp56H6t3oMchfAA7mqbG9gBPEgSfu",
  "key19": "3HaDGUqGfmtbfCatcZgTRJ312KNeb9SM3BssUFwr4nik1jXmkWydx1zvtfQF9uoQZvq4w5SatbZBhZVvbmMMckX2",
  "key20": "24HBXVPhJtAQruHWYvkyvKX3CttXzTKscShDppvHw9gmD9mFtLwH4dXyg2Qn6V1mz1nXKYDsYHENCb2D6CuBi2A7",
  "key21": "5YSbE9EAWLhd18GrASxWfjnqFzbptp1kxB8eJGHdcEe1kdk7VEL7tpTpLRY9GbwLg7t3C7Y7Xn7YVCDLELSVDyYZ",
  "key22": "3haK28AU7w4FgMVV6YCjRM4vxnZebLbdbhhubHpiwzmvQjucobGAqU3Y7uS9hms4pDvpR5rrnQ6R52PzN97huaXG",
  "key23": "4YFWzwtxqirkq9YUSeZTqcqZ31a6hRAvBWMSJdb1hknH7DaTmMRYm1JRS6jf1cwysAr3RebTwuxDouNNPCEwohJR",
  "key24": "2kyWgcBH7WDMTdXoy5JQ8h3KV9pcSvB9oohEzxHoDokkeNrf4tEM17oZajAUGVTvQ3mY9Bg9dehSWzBVJqa5EPJN"
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
