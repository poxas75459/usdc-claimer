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
    "3noweDSZMn8cXJF4gUQ7vbaburF2zN5vPitBM6ntrXFaYuRxDYH5pZdeBDiaKpaeVT79W49JNWH9RY1iFeVBdDmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RrA4UNNcrTFUE6dPujvSbDZX4XVHGqpkiN5yB78qiSwH27gkwg9HoDBeeuodYN3hFFCjLMKTHMV3fFEpsE3mjMa",
  "key1": "5xoVRm1fEGKTghzcivtzmnEweX5uRDCsLtsFUWqvkPNz95Vx9evFoj79Dbf6M6V4rnyqqUMJwa12bKjZEmakmfEP",
  "key2": "4JkqFcCjwt7amxNJiZFJkdSRGo13vD64ufkATiKoAvTGXKgqQxZXAeTs243TwNoNWrVZrfq6cskphFuTPPZUvfVJ",
  "key3": "3x77hy6JDp4MNskVxzggmUhHrQhkVooLB93GeFJ9SPqJgQFAshxsY9oGMv8X9i5yLUApwrGejZtWSw9152qUtr21",
  "key4": "2ACXbfczXzsWeSeQRSqMuYtkb7oFJmdGpH54Hp1aYzamwiZAWWirtKLc6NnhGBvBw3BFm8M4UFUA4WNCjEAqteU8",
  "key5": "3L9Muzp5f734zRvzKMnNpzmvvDHr2y7sMp9L6BGucRa37qWxEazHzisPwzbvBrGUoQQ69ysc72DSDs8tqi4tdqZV",
  "key6": "5bwSxMSwnsEfjz9c7ktwDTQwAF2FE9JFZ7uyZzVccTc74ZryWoc74YKQwHy8twrzAXgGZnfTRAnNyHpcXcg3QuLV",
  "key7": "4yCcPJHQP4pgtGadoGaNorrEAbCS8PnNgmMVPKD8FgAa7vDBN2D6ZsQq3kKsY7EES9RJCMrBJXUm5uE7rHodQf6t",
  "key8": "j2UsoPg1hkqZrjn9nmmXUU7eocX35wbYCjnNYooT9M5EDo2XCiNfqCuhha2XkjgXzmeDWEHSps1r2eQvvDFXsCR",
  "key9": "45LxTHsahq4BcW94iDmPpGgZqCtFVg8ypCKNRS5awjEikSFkergJcsE8w3eu76bh3MdNP3XaKZxs9Cj8V8kn4xdq",
  "key10": "444xRDU1KfXRZJg15YGXRfX4qRwppgRyuhGLpXsQCRdXboRiCMRjWC2u6eJKw8pP3Np8PTMJWehAHMgWiDDVbHEz",
  "key11": "3Aw8WbX4zAAyPTGXzvBhpKPWyYapsyizuJzuZ3NwcN7jayc6oD4gNKgJ1xoVsbH6rxJk1smEN3cbzoRLhauZBf6Z",
  "key12": "4AaezG1Eh6C484hbtTfvjor32FvFBEemJ4H4RBv7q4ztdgLvxZh7D7cAiMatxGsjAcK8RQZEdEsyQNcPVR6mwiFW",
  "key13": "5a1M9FzVz7eJCMbNGaZ6aW2Pbobe9L8oY8SC2FiyoDfnrxy3MjPb383ZaqohrXHLKFZStpAUaWpGxxL73B4s1j4m",
  "key14": "5Hi4MWN9AMKZYsrycS7LdsAkvzAp1wP9q4TvbS7ZWKTFJC73YYVhsNC1ND2PA4fYiFp21gYMBZJ4ZEmBXGdPjJvg",
  "key15": "nBwebpk1nzRk3UpjwU49dT1E4GovYiohPTrX69JUZhpjQ1vzNUpddSbM9XT7cKry462qpuUMVeUJYp67yod7qjc",
  "key16": "59ruZv2WGrw9BAMCHhje5HkXsks6DWeqsLW6wxHK7CeDtT2RQAZeQS8KzZjSu2aZL1mDJBnjhJKmLMyfVKyaedQC",
  "key17": "3aebf7odUqzdzoEj7MhKox2QFY39cAwtsJekRKTtnv3JhJCFMXpWLBeR1ipqHttAvFPHCmRxjT7cx7dMDyq4ZZ8j",
  "key18": "36Qjgg7Nbwcc5MnLxuB2VvX8L7crZxhPWHBTQJ92T3QNeTArxPa5uvrBmYzqxq6Fxx2X4wK2tVdj1rSfabfgVD8m",
  "key19": "2xbVE7FB43tuQmfjFUHYf36PS3jnkQ7tNhk2MwcmQ3xQDFyQpLwxUAQRSmX9DFnE1SFbmXyX1sgkT4rLiZEWxHe2",
  "key20": "3jtN9Eiyg9KFVYp2J95XDF62TJt9qqNqi6LS2uSvHGzMzDMtod4wWGUEDdV6VcwSw7y15fuq86zGRuSMMTYqv7pe",
  "key21": "3ihRdj4bBw8XdbnehUMahgP5FgqkpVYVmVDgTVSys7hZkNFqZdMmWbK1HuB3Sp9rtGYrkoh8P68xpdQ9yKi7r2MG",
  "key22": "5RBFSGmQjANCnyBwmXtu14BitQtNRyik9rmVYCys2Q1xjentA9Se7rd5U9spyt7RQVrk93fFR3im3aFzucLDaU39",
  "key23": "3QPaqBgkwTPCyVK1w58WGYTBnM9fSSSEX11vh3euq6fzAfDVh7EoiK99RiC3C5T4TnPAJ8rXTqR1yhQhLxfswSRW",
  "key24": "4D77Fm6h6WUJ6UoJHH7vVMtQ2r5pfPVbhjEnhwvkiB5RpWdA8G5WVtmdgCGnUwUQMjLgg5cXkGxhj8dbHdAZCTkD",
  "key25": "5zC31TsqKXvCQhZsE49LvS2hMKnXPvdAT8xk9DCY2Y6d6i4YthedsgACSDGq2VAFQcNLCK22g8CT2kkyY7SS2nLF",
  "key26": "4GDjjnR1E3Rg1H9z67wAB49xTyHManirvBd6XTz52WrpPPHBvyeAXAKbs11aaNBNHJxcxMzVcR9phy24S8UANtab"
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
