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
    "cAXmXmyP2VEnpzQcmmXoEUM4apRXFc3r8N2jpMKjK3G3Yh2mJv5piHzPHWTU9ccB17T5c7vt2WqmJtEMJb4HxNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vsWnxvrQPcKmj7fote37Zu39oM7QxfUHXiGkEoGrESrNKnTaiPcWXHDH34P8vSU1hRSLaRPaE96KZfVmGyR1VCv",
  "key1": "3MJXaqHAcCpPU9gWdD3T98HT1WKgxXs3BDtcz9DGJpTSSwWq7NzdZb9E6dFsrx13HN2ToBAnF2toJh1pfoPxGdLS",
  "key2": "4tismikFL9DkbDrLcWKys8AxfneEz3gPg5jHSp6krdKsDnZW9BdH7FwrDvEwCWrdydKAec5gjCZuFgD4QzbU6VG1",
  "key3": "3ys34cwsZguyqjLa158V7rzsa2sckUtz3KY7Jgqq4PcbEtg64swuH3h9t3D5n8WGky3FtEWcp8yxsY9wgdZbo3sy",
  "key4": "3DwUPaCLPrnC4EpTmMa9APbt43aD3G38JPemJC9iJXzeBTxBSeMQYGjsjHVfKoVyz1ZwbmxYpjG3n5oLhT5kqcKe",
  "key5": "4qtgupWqDA8HXXopQWosRMYH4i5vFeMpvKCE2g93X7XdgonqxDvyArrGtWFH1meoepPjmNtrEwzJ9Hw6ERQatsRa",
  "key6": "2sbF3SGytJGNENwrSVCXRZ2TYH1oT7NvJZuWbiSPkeq9WqTZTcDXWuzyKabf9Ln1MoeHp13EvaSCJsv13FTBnqRM",
  "key7": "4QMA7nkwYTXcfasDcviC9AvRyC4t5eXaYso7W4w6JRxRQ5Cc3Kq67wRrUNHnRMxHdfrN86MPTCuZKLyyUDcbA98L",
  "key8": "4xUjR6c2xVPFkmbx1EHM66yEY3Q2BPBxMpNyT592gaNooP4L72FHquuVMdMU8kKkhAp9efbbLoMgczkMPcNvv4Tm",
  "key9": "4aTFV8yLLS7T2TwTHKT1oeTaQwnHKLfujSDvmFMhWKw2dw8BWznz9J8CGyTBS5WUszSDNYqkeET63VrWfo4jBrDN",
  "key10": "TgCiVVEvtT6RhqfUjSYrd92zM7R4UszJtfx4WomnMYBKReZQpeYR3TUvC4QP19KeAab68zoKpCsCaapaL1XAeyr",
  "key11": "35hx66MVtJxyqkiVwoxJnNTu9oPZ1SUZnxiWiYEiAToWkk9ZEHefSscDqSAuGWzhvVbV7toi1x9HydF1GLZ1zUwg",
  "key12": "3Fb3Ao7mA3SDA95AMpBGYYRxdtcZBAk86g8N83kdrtc9nrbjqHooce8vWADCjMCUZC5Qx4F51nvhqr6jXcJkeSkv",
  "key13": "66k9GaT9t7e8YJqVXDjduaHhBvsvV3nVWbPQUxiv38p1h3N8GC42XQ1kyoCtmfywaqqwViahe3EE3Aidb7GS2v1d",
  "key14": "2zDaHGQeoSdU1agkRESwmqivWvwkTjXtSi9pdBP5aodhRkKjAgAxixh5DgnrWkybNVezQThMHDMQshcECVzLGqKj",
  "key15": "399mMW6FiHEKAMCZfSJW3xWRsUVkgYLyevTAcRBEJVb3NYWdVuDguzcfVkahRyfsp9okSUDp8mckmBQXs5W3dkB8",
  "key16": "kn4x8oFsrTXSRfLexssH76mQjXq5YR5HLAf3aDpWqrpVKMJmCKoy5oH5DyDvdQP4NSgPyHqqYP7cG1L2Qdnp5V6",
  "key17": "3TXgREnNJEYx47FVoJqbXmL51dvhutwkGwd26cYg7ZAUqK3SpQsdC8z41vsQbopyh3RH3Bs1Npawspu8NyAN1fbr",
  "key18": "3c5hzHZL4dyuHMnFA5YLnJJc9hAVbMv2TQN2mjun7Y9yKBDUQ5ybYPzVfMQooa7Tqyoq2TvKK3rWwzdQ38XdEGAt",
  "key19": "5MH3NT25U3p3aJDVHPYA6PsFe3CPMs6L5HGh6SA33YGnuqghgxojafPqsK36RVcnMUgvk8bb7NSBneMgxKWir26H",
  "key20": "59d4Un9rNhyShNSTrKTxrLYQfbCZU9YHxZB9rPzRWqMt59EKgsp6swuEK3znLZDBwEN8rE5PKG6SvpyACzacypmN",
  "key21": "4ZhaMu7mK7jqroeJFPYAbVaoNYZAQxAfXRwCpM8Mg7GbF7WEggQPA95unpgTc4hhoFwPessCFkas44iSoCopYmJZ",
  "key22": "zZTxA56GAFJmLQjBjRGXCzEW1beDDBZsHSByanEkR83vsKkXW7P1eq46AQLewRk4n7rfR8DNTn3SxJYiUfcSPfC",
  "key23": "2AS81ieDy9Q3DQvKSGpLZDN5DKpQ8AqBxNnpVvvbCe9wrzn8pwx3GCNj4BJQhQKAoQbHu9Vv1snihxgKc1e1g1Te",
  "key24": "3rgHEXYW6cQgPq7XwEiYrmuXSqVXA9u8mRdRmu89uD6FVDoHnuxxxzh4Q2Gv4Dky7mh2fpyDvMCKnyd2TNk7x1jY",
  "key25": "Th4EWpkeUZiYhSCD8YSqrHbKGet2mNybV7p6V7vDxux13uMvczyT8PwQcTDTck8MKZuFh2p3LPaXBjAHvZPAkjE",
  "key26": "4Bw1nzMkSnCaPEsnKH98UXFTjFbbd9dyisJKf7RybiTLVBLqpZ58tmMsn1gGbawLL2HwexMvziUmU3ENACugNUta",
  "key27": "2xPbo1rqUXYVxfUmwYpb5sDiYVNjLYMipW3SYg2Hn44SQs7SaMZWDdHuhzvym7SkrpXcksGGDBiiGZaAHDkPTbAS",
  "key28": "3vwQvYWTY3ELQncYMakFebUym4Kf6xgN8vupKafQNham4hNCqKHW9ExpZy7gHjEaodRLhpr83XDcFe8pwypQbLiN",
  "key29": "4q9RzPR8qthpjKyaM44LZk1xfJffuedwuZDgcSqR7NKj13QHfu3oj63UAjVTG26KmorsfsZLtYUph5BVFcXf5oYz"
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
