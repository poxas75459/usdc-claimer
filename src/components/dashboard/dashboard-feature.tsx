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
    "2hxtvYocRyqYBSpob7HhZbJar45imXkhbFX9zr6y8Dv26n2Ea8cXBWh3ZZ6pau99oAB3HTEq4WbHuQ4Dyiieywaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L9cVrPXm2wdiSGMXPoVCRaDx1vPZpxp3GkNSr9FUur2XxCWJiionq5d72pWXwusBkF8HtK2EX4xgoMHCAe2tgbb",
  "key1": "gsXcWrfDmMGAKVc23exyMgX5QNJr1Vdhr2GiXrnob9H9Xr3E9gV9twe1kq2FHJcss5dgMpH7LchG9BBtLsXSQRn",
  "key2": "3FbQKsByff75skDes84Nr1UMteWG1Qt29rXupVjfiH9SQiU3UKoU6MXu7FNM7hMfM2WKtBoS8zstHkio9SWErHAx",
  "key3": "633pRgrgX3aMPUMBaGTiyZBYNT9GmxnvcGJQ3PCWxEva7j41zNGNqKhhysYybsqxtDMxGK6ED9Uy1yUqecxUnue6",
  "key4": "4qhY3R2REzbs6WjytegwEFLbR1JBCiPomd6VbyccTU5r8N1APZLuj17gzpZruJotdYvme9YnEqb5cnDDSPCnBWRn",
  "key5": "4i8yx5tnctWULcubug7WVNYqqnatq4Nfz1xrAVCBmx3tduSzGSkSiguhuKdmq3yzsnMaYYDvwE5g35zjLHFQgLB8",
  "key6": "tbg7Q5k3fbZVP8j7Hz7bDz1ZJzELTKGdYiyBV9mxYLYa7ejsiqXfen5xmUo8paAU6SNB6epFxcfLgb97ixbEXgo",
  "key7": "543B5WeBGxeaZBKDcft6RzGdU11oXt3jRSbkAmLiDFSaGAe6t7Jaw2uzxwobVZmytxMnMKq68gc6GdM2NWvBFwfS",
  "key8": "4GqZim3E8rEPxyvZtJVYTS3MNwgdwzAg91FPqjPp6ykcsZrLUx3gLVp9yGLa7NHJngFyDxvBqv2zeCrbiPfodFmp",
  "key9": "3DALjCBF3uBvfTqAqgcKhftDFHVRq1HYvcRFDEUehHXveGegRKxjSe9NmqGq3ZHXj4Tcb6Sk5c6N74nh3WJnuUhP",
  "key10": "3nt4Pxj7fChexdJdooV7jrMDSifUU4ZwmRgFekDVgAudFUwUCJAGRKSmR2UJ4Fxy5AS1AD3dzp5qt76jnEtnNoD4",
  "key11": "4nFoPyeE1YXNpsmTpnQY1X475zcUWGZNzL9sBna8KuBL6TH2R4pBS2ULpABm7aHfhp7kKu32E7joczEij5m7AzsG",
  "key12": "3tpcrXpCZhgYSJRH7BTHVzw1SjGoxmVGWLvBQxMpjVh6ER3gViMz9944iKoR6jgCoJxKfXofjM1R1Jfoa45cVcAX",
  "key13": "2HUu8GEe1xgzs6kMjsU8UTHidER6E7MdVjf69MPUSBsH9sJQyp7xbUNsQ3sJ2Coby53T364Fa8kdQAzpidG8Zoxw",
  "key14": "5kzEJ3tLJaU7Vyj54ePSgbRQ4mm1nGTTQ3CaB7ta2fKuHMv7vdRXVWsbWjVnEzKQ2pvyeBX2dLy2GZL2iNjm2gsz",
  "key15": "kDDDTcKbdj7pdUy3TyrgLPuRsMHizAdpPHHU7irM6iyUXVf2vuSv1xGvp5p7bguoYzquqNw7CPiqGxVY4zZ8u3R",
  "key16": "3atsBQdr6F3vTxbNAUjPo8D7ZKAT8CDhhXrmyPAv9B4ChSVvZ4EtDe62uAVEykTNG8oQqwm3vhXESB2QUqbaGQvr",
  "key17": "41WM1p25DXC2tnbFeaLHFMmFJwxYTBuWySmirWe62EomXd4cMJhKQsa4QtSjEJKWu1X2Bm8Kk79r7zkGTYAkEzhF",
  "key18": "cgLghZCMoF6zBBkkenqEHXdEvpVXqBhiKo28NF74DSPWA3a4G2KhBSL3xvAUjio9drsFn1BsjquytvYXHNcSHdb",
  "key19": "5g29zExwS8VrSmZMmcQdhc57DfqQc6zNwmG7nfLxMd4CKrQwptwE5sPeMu3AXG7YQRmxtwAYi2NZJGa2WSiFtgi7",
  "key20": "2YKG4eP4qEPC2Y8gErrhosFmx1cVoQjjDJqv19wCAEwvFHixi87F5pba9ZqnCKiB6D8RZAVLHcuv5CTLd9AJH5iD",
  "key21": "66UMUTtebXakexpGA1GV111ZEidos2UAFGyuXoFwA9P73TTKpJFdVaYiHXqxu5tCYhrjYnRUGk4AP1yQKzNDEXyZ",
  "key22": "iKB79KzFkWQ2ER66jTR9VdffHQMLxNeuqBdBs9FY5mvc8ScoxdtrJd1DASRsPzgsJ3rJKoU6vx6M28wN4GhWJMn",
  "key23": "4bEygwfG9qawWvo4dvBttkFgCe4dwvTpyXes1Nwktx2spukqRdmEywXCuSkbCNh4uuQEPvxYLaDTchT7fUpzo5PE",
  "key24": "3vz7Lh64TQ9W8nKHkcEKhm5V32DMs3Jqs8TZ9Xu75vpoGrmv2wozgsg9acqVHjZDhZFsCpmUKmVAZDocy9q4jLkM",
  "key25": "3RAcp58Fuh9bzeAqQG8eyW6tMEig6pU86rGGivSKERPADCodoiqGemuXRuPTe2gdQBUW6xm3ngk7ejwNY6uXitUd",
  "key26": "5SiwZGWUcXczhcV2VcxB527vza4ZSm5KFtpebTS6WyB92A2p3CD1KNH6eYPVn9WKgvcsViUskvWC2DiK9o3boWpz",
  "key27": "5wqy9JRWWPhPZfSV2q3yqM8NgGbqhYDqW4e7YdPJnQNpZvyfCgrzYMh7KKV1vSSvgrLRHQxcThYiVdXBSM6Va7NS",
  "key28": "3yMwUjBUcvHWgVXfCKCWbY95yM8JeDZ1trM1efmxwKcqo2Eaa167wHeqsHiLvtXrDp8DCVj6UR8PMsygBieaewn1",
  "key29": "5XSKd6Thww3FU45dpxWMYTXsbYFffhFACq9koyPZ4d6GnG3MrmnTi9vD9ywsKnGXg19aNudW45c2hVRR7J87AB6H",
  "key30": "2wXgJcDgDFTWVyKUQVbEi7N8F1EaHHKCm4fbap9f13sgmosNicSUc8dYv55NZpRPAKbVSnHCB45rGJwzsvheL3Cv",
  "key31": "5QWaiNWmTyzNrbbtT3cdq2LGMpCwjHWvK9gh2ZVRNr1gpVpPeYe3mh4Dy4QcbgiBEs2VF6W7brZ87U2PpgNSR1SH",
  "key32": "5kHzxsDha5qbMH8cPAMnBEbgP9ackZT3HB6wEGj1EhRKmtQ4rFpfw6PwZNYq4x95oWSkwcU4QJbkCaFW8XCDNChb",
  "key33": "4ujEeNLGTAUvE3PqvNfXmxMs2BB7aTt7dc87ZaTc8x7aAsGLYpnH1dpfD9Fm7Ys9NxW11f5uPhCyA6XHCBFEdGmy",
  "key34": "JxUuPPoXGc5UpjDX9PrUm1zYAc9YVMPbYhYGx7oM39nbtvbvXrMXip9ojGFcUzjaZECi1ZdBRn2MDpdyqeYiB82",
  "key35": "5JqEekVjXtkonTUDQx5Xo8RV4siyi5uXGiwsEPTKeG82DRG9JquniP28rpYtioJcfnEiJecQyTcoyfQj6L6nAb6f",
  "key36": "57BJW3Vmgn6ipqiYpU51f1BND8yDmgY3gNZQoLytfWLrLgyMTdSEnDoSYXG3W5eBWuESRAD6iYFyURLeZuvpWigw",
  "key37": "wWShSYhASYQnTfHQUBcRTVZAvCweRNX1aGsyYZTCzWJWGUgaoteKM3Kh97MRSfY3N4ED9E4DZBSig2aEKYoSd9Q",
  "key38": "r7Goip343SB9uEvynEckxAXebBbgmgnvvjFGV3ZcHh4aegnb2vPvJdcgfWFSpiewspmLswzBF9xvzDhVSLYtNjJ",
  "key39": "3eD1dtXhphuEfketTW2LnsfF9ddkkjdX3RBCswHGJVoXKGMcdLeNncprNAqF11DfQ7SVFgTMzju5muS9nFRmxVPd",
  "key40": "2F3zJDNTTSSDnxpvyd1xQdrFHsYg3dLMgS4TvjnAdMmP4dVr5sRtcidxMgKRW1MFuWhcowwmEPHjNsESuQqPEQzu",
  "key41": "4q4yimUd8qXAuEqgg7tKiUQm6ooWJew3JwzWMYxZgzKrV6szNZjouUoCnJjdRgzhfySWEMqT3YgL7dPHZH1GzVUz",
  "key42": "39QDLqEB7rCS3MY3KNv1cG5qgc5GhKFpQqRbVb99sNUTBkQVeWwP2J8zJarn1hYhWtUnTqkz3h1Pe1xFCdXGubwP"
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
