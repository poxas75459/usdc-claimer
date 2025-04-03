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
    "4jyxUsycXAxRKznWwoFy7URJAYoLLZPTRjp5vkHw5G8g8RgbE5KkFBdu9ppoVbwTPVq3W3s3uS79UmtdVJutoJST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AM8zSyFaS4gpBFrkxS79Q7qgKps12srwvHrwUV2MYWLxCkik5dQTyoAMAX8nD5cTdxxWdhRvcTeBtWt7kcS6MSE",
  "key1": "4X64tnjFBkeeCihZY3s6awk9hQAukwWC1akiadmdMZg4yFuQo4S871H9MG6xqcGWccJXWBBMJB5ypEkkrLpXVMzh",
  "key2": "PLWeNawkmkDWf9Xkj9hbMw7s26eQ79FX7aEXbBaxhgy93RfYdQjANGbUL7S2NRmtQ1VCcTFmpRuxcMiPpQpM6qb",
  "key3": "5Mca1PFbeJkcFXsmmRGQ7gkFutLL2AJhEi7yQAa1AppPB31j5nWz1XWrEVV5xE9VvAVEhFTXN2jPj1KyaLHNMhhg",
  "key4": "5fbDKhWJRpq23QfDsEKdPM2Cmz6FS1Z6bLH12637WH9HhAFe2rvXLqhoGkMaT3yV5HJtJE5uwYSg92Wg7GNSd9bU",
  "key5": "CNKDPVD5UjXrrXkZLE2RvpKXycGqcwvjLRPatj4kXUdHmBnrGXSxymirxAqhRaJvPBxVu69qUYUAFoHVnrQmcJ4",
  "key6": "52Xf43b5TbqBrzJrBmD4MeiG9oWJt5zDsBVjuzgH9bkyAVFR5Y7jxXwXxwCLJvgtHhoHrr7pK9LAbhkD2ED7HfxL",
  "key7": "4CeDaasgTeCXCnRsd9m5jMURg447NeZP2VKoNc3DJ7mprjM26my41HdNiv7ZYMbV4EywnUx71YHmpSLsKRcgtCR1",
  "key8": "49VmEqRpsr7QR46DNVRzJuQH6GpzrQCNf2C6Ec74Fwz79ZHmbZrgDqk41Va6HGqqFQXC3kL3ZoS4v6TPfbDLaFkU",
  "key9": "2vDeSTGsZfdoxL7CM86fVjfT3eQdmFGAgPqjYjig7MsMtjF8KEAFE7YxoZzUss3k83gW6Tyy5og8UP2TACrUkam3",
  "key10": "5yoB8DLQVccQcqjjaQZWxw4gFokZA93USXc8M517E6YCjAEYgme5X8D7VoTAEzECPKSLwTiLPSGKSh8FK75krGLH",
  "key11": "21YKsWgwCYhEptsex8uRGtxRiSo5pwnJ5HDHpzw4JydNNPCnFyyD22RS19J2p8LpNFnYJkKtPWbKzGY4u8JkXS3k",
  "key12": "3xgPhGDcCi919T4CrFFmjfLs5EoPYqcmpDmE2a8x93puSEy5vkFa2ExFbUkp9GTyErpbrpXvTFJS3h8jhnJxJdih",
  "key13": "31aks16V5Zg7awq3dNAvNqDRdmCeKzhDPfaq22kbRxHnxTdTxYE28XYBiZeYjYwydyyiDJ5CM3M9uj9zKWXUSCfn",
  "key14": "4E4vqawGkVHAtHFqA9jMga6fKmEZFMpEcxMLEykYgSG4qzj34LLjcQrcyjbV5ptc6GKxqNKLh69dDp56Fhk6gme6",
  "key15": "5VRd4ekD8bK2UaFnyAQH6gq7GLXdLkBvT8x3keC6pahaiGj8H8ru2yJa99u98J9ghjuSpUVFkLRsxQoZS59qbURp",
  "key16": "y1XhPa8FFPpMHGKjwc2tEkVc9jcEzkNx3wZKLqma22eE1FWWDwZnvULnRvQnGB71fC7Hj5oP59UuUo7ZbA5Y1K2",
  "key17": "5ydNxjVAHo4UGnx7YuibatZ23rDxRE4UHY784ZzGNidJEsvqAJrwofacvjNx7ugrtqdJ4Z3M6cAmybtrMvc2gLof",
  "key18": "rfki8zEkg6oZJxPRWewuVBA6cs4kNNu2DP3pgqgfdXSCa9EngQpafagFMWXYfnx4a6A8cvRSBjw4ARidrMjWYEa",
  "key19": "2a7WbXfRwhomzK9KvNLVh1yHXnDWqLQ2wu6it7NJeahseuzUooTwjS61tF72xa53jQWHcgc8uqAesMHevdf9FQyf",
  "key20": "4SgFP4qqtBQQmUGnBVGF3AXJmS8KNwA9pkDq12YzcjFcycwfxWa9tbK6ko6jvp98oFKYE1Kb2aq7Z95pUWkmPHgY",
  "key21": "LiFW9qt71HWvGFCg6zRLDb8VSUgm6JdnKzaiDPRwd2rKgGri3kVXsHMA7Uv1jNAbUwwYhcpZ31kSbNJL8vkfiag",
  "key22": "4MFW2Jwtrr73en8ov41TPqufcifGjYKq41qgxdZ1NPnUJQRifeZP8xsLMWeCNs1XohFWhNHmenFe7QmWUGT8SuCq",
  "key23": "4cHGkVtP1RNByaSqukV8NGG188FbbuiMbPzn6okaoPTCWv8S82bXujzEYGaXhZyRNQBjN8dUTn49BraeD2tpVctJ",
  "key24": "5txNscDKKxamceQ9obZyCM3baXJpXJDUL25USFTh91ffSgkGjgXpJPtzZLx4NyL6dxTkXDhMRkiN2sPm3wbpKwRM"
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
