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
    "4hSiLPsTaAh43dzCR5pS8bhc3pjJxXkLcMAGtybeqNu4ctfG9R8qRQzX1xhd5aLpkFBPCSdRdDsjMwxWDF6HPGdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gmjZS7cFPDe4yvJa5jxHL4HkSsvsm2bvPzVLCbzfUrVCj5regx1mgsMhPvVEnniruacuawo865MJFRHw6sYkuXe",
  "key1": "4FZmYXqH22CfaabHYM3Se2ZQhm11H6uxbYsKUstjRVdcUEwJeuuNkKiFVrQw7dFJ7mePCMy46jLECUFsE1sAQWgw",
  "key2": "28AnpGqLMM2dW3gCjN5catLhwnpFNMzLmvozHNdypN51G1pueehhS78ZynSrsxpqiQy3uM7am8t6aVgPYFh6LGvv",
  "key3": "64zCFyEBMNsbPFA7DBHsQ6rNceDseM72xrgCPpNNavWGv4K3du9iSxfDGhPNjMaW4HEGb3fLAsBYJqgEMVXqKJ7t",
  "key4": "4nqg5htUP8ihsBbtpQLsVA6HY4pmu61zL8bnkrmqursqeNV3nCXHw9UFs13Gnjswz65uDZLNaAVYR1yPxWJMzn26",
  "key5": "7EPGg6UhyMY5j5NfU28iW2MvjHwaP5jAeVWpaV2fDYFy5fE9xHGSamvfw34yjsUxpukXoDqhWuTbcGX1ASfaEwQ",
  "key6": "ds78KCmrAeGaD5hCNqnQtbniG1zDcuUfGoj7KFDppx3BehV2jnuE4RmHLDha8CLLCyWXs9igvpxvR1mzFrEv1X7",
  "key7": "49RmFCAdXNCjuerCM4jmxzTd8E8xK79hzKfJUC6vL7uNst9FcxYBJy2WHdgN7gqkf6g8png2GHAKiHT89oxqTV7T",
  "key8": "25DVN2Bk5HtuehTfiuC23rdAheVUBSgFGBiV3B5SaTvGMJ7odHJzBc7XeBYNmwQDTWTLbPRB66Ui6LmuoxPyUxR1",
  "key9": "4FeThKWNtwVuCcyriYSXzGGGNCJraPxoJFgrLrbhTSZTKoWpXWFoqqpt5A7aBngiJjtz86TsZT1Zu59HzwkMaR2v",
  "key10": "21LBiW5vZAJ64jNAcF6X4L9z8yEHxRYESkUNuuNGKaDcZp4CZziUFp9D5XWCQCFYNHCzePg7tJU8bctnCUTBTTTM",
  "key11": "UwkCS6Wyq7usnXPvZHZz34MksKH6ZxuZeWpSUAV5zEAgbm8wBACGkuCvSM8RKr61678Dffz9VAv3ea82B9VJntr",
  "key12": "2jn9Ask9LNPsdAjgL6a1gYsxEvJWWGXn9nomZ41TJ5hjqUUFp7HnxfsUd5cDRECzyUVmZNRtcd3b9mcWj87X5wq1",
  "key13": "46ho9o7Qr4Y1dUiGn3Fv8VHYypZFX6ab7gMeBJLGdDdez3obJPGqc4CWFVx78EdQj1p1N2owkdLPpuu7WJgCrXW5",
  "key14": "4CTApck23nw6CxjrS9H2uQBCDzgo7JVbzmKXgYnPW6JcLgTBb9cpR1otKCJYLeHs72qjzZqjAzSB4f94DBcj82AA",
  "key15": "4HY274Qek8sw5WtmGTrf3wyWUn9mPVwFcSM9cXrvdYoHrBuj2amkYMDRhcWfkpfsohatQjr5Q5pgSmLy1M7pVW53",
  "key16": "2UQ7gGnpxjkAtfrFqSLdyXTfrLyAvaUQ9yqcBYm1BaeD8tqcmgvQAeZdMo4sAi5N1wjuKpVAQTzN9iSVW84NBehU",
  "key17": "5xoDXYJxyJcsep4YWBpQkzJpwbmJhtRKrjHWrymy9vc6vpRe6qU9nB25oRNRVkxru5Gz1zYbiN8EzPb4RK2X1QvD",
  "key18": "4DQY1D7np36nf7W6baTKmNFqqAKFRPbiz3pGZjMd82WaHJCyjDkVjSmXLXRKbGjx5YsmM1rc8srvmpSfio5rXxL3",
  "key19": "5amo8jhpX2YYid8fo8Eoq4eyGb5DnUqjoEEqD9D35DW2uujumRJbRbMTJ6QKZAZWUbpHVgopuTWy3Rpme7Kx17KN",
  "key20": "3ZcRnJLsNcNNxqp36xxnj1wUqZKahrChvbeeqFC6jtRrakXZcvJdx2tMEAZip2rxqEH7MX2TQYwGyzwrRzfqR4W8",
  "key21": "3C83McMbTSmVW7NQgxpar8kvxdKBZ96SuCvncdsMmKAQUtaCzZKGoWtJeWwe3jDDrBpjGaGrfaiuimKkh7bCAsF2",
  "key22": "2tr3Fwy3qRKteGFffddhwNYWQ328Ve2PQA2aZm21YJeR9fWEFMvELhqYQCWqSChEJ4nKW9YHxP6fVdFEmDDbGiSy",
  "key23": "2C4eqUry8ZGaah4ijGaPBaHxEz1mRk6vjUCsLfPA74L9JYDFm1Fxvye7e5tEwDhD818gEzt2hsLCykwyz6WNVEqE",
  "key24": "4sp2vQ45RYKUb8XgvMgCVSBK81CATCWbJM9BuVRiatyn51UfShcT91QeDbohfZeiDfpNWkLeJFNRBfVUGwg1ZiUL"
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
