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
    "3VBxGEGiQQeJQJ6fFWZqgEpKN9eCBZPwfyEoUs3vtbpXd7DeZXLE9hnnGEUXfzMjs6UvTjgZSMhHZXHaAtmFH3Cb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zLynFujn3MEHHBVz4FE6pW3HQU9VT5x8PJUr23oNXxQzesATyK12DVR12tMMDTdX7i3QB59K1CNSTFPzWzkATnn",
  "key1": "3zFPZL76GRqEq14mH2ct5YEZioWSdwxxzqXmhz2yYCth9UyRJBb1X2dHFzuC552RCEvaLfDnm8XyrB5GuV6kgb2",
  "key2": "kwUTkiGExkwRbArLf4ewvyfCz8CbvwHR7kh6vbUeH1SGJhMphDqPMsfyfDvuywTdbaML46QiYyAz9Npq3RvxxUM",
  "key3": "jhvWLtKagdJoaPDZNnY19gKBDaFMDwtJdqZqxq6AcXuAh7oQw1ZErk9r6PcsW9R1Z3PgHpAFHoCTPmi76fxFped",
  "key4": "gWF8p4ToediGidHNqx7j6yvGRKCxQsc8QXqDeV92JVcNVGC7zte4JwbmReMAMcHeJ8Lge2rfuK833LFTSsm1Gyr",
  "key5": "4xNf615g4eRbXr2nz4Nf8PjojSdSndYYG9j7sSyuvgEjmL3KAwJbpejxAGUzjSLcBsn3ufucFsg5XX7ssLgKdynQ",
  "key6": "3QJ92YAuxqx4rRWzS7XLczCkHymd8MWWZvybKoffqEkKoMyHP1gfHB832st4h74senfqi8fKTRADKURys8xkFJKG",
  "key7": "5U6mdJVHx3EuBwmUm6bcRfnJciqCmdrEbKCC62Hd1JjwQXBUbdgXC9dkecgePwwpL5b12Z3LW8nrjdhgHAT9sHEk",
  "key8": "3PJeoxhNhLDFoznnZPf1UGmCs57qaanm1QcSXkEMjSxzKso63LSweKfFjWtPxo3g2WN9F7v51BguLk4Z591g1kAM",
  "key9": "2CRrW4ZwA9kt8MLA31T2txHoTiiDrWXv1zwLT3vPEprvMmETEGdPrFXhHmd231meiCtj7EsQDVDMnxrSc3m5EEUW",
  "key10": "3zosWqv7x8cVNSBsFQDEQqt95c4JY5iHVdr1XkmBnA2HQruobjQx85gkqNyvrYx6VvbHLfB9m6Qmc73NbWp4Jvpf",
  "key11": "3RKkTtJ71JZiWy9jJzYKSESp9MpjDrcqPoHN4eGHwm2sm5Exp6GGJjg9JfUmCBB7dtbDhVKThTdCcZRGU9CyC8ok",
  "key12": "3buVSArBLEHZrmcJk5GveAuSL2Bughu4iTtiGwjLWz2vozjiNL4RgwyaR14u43c69K66L1hfHniohCdg91KB7vp2",
  "key13": "89RHkkvaCcckVidrJSqSA4CnKpm7LdHR1oSh4efWkQJUyMZ4phxdmeuaFF2JRThYsvAY5qPE1yNMcmN2cQzkL6h",
  "key14": "5i8YxB87DtC1Vx9nPHywm4DjmBTe8fMUiqYZqZM98TwFaLhJWTYSsQUdu6UA1CYHRUYykdBhiKM3PjQo91nGLQuX",
  "key15": "2MS8d1hBbsHCekjVNXxfYU8Cexwd1KoERCjKhkFezdttfbgy7DqXpBYVLUqAn6HpAch7B9jttA3rYWfkxgjFaRst",
  "key16": "cTA2x12DnuEed82uYpuZdR32zKu3AXvybNceMknswF1MAJHhQm7FHL6BDSMNXQetTPSTKQTdCdz2Ds7pgALqmMF",
  "key17": "3P6mdV1Xr5xRXviU5cDm9xoMbNSQgaPWRThZHCWMP2xtSrncJzbPCqDPfRxrBHdjgektTB736JKkqwkVVfqeUJod",
  "key18": "4V2XbDmB7jyF8C44GstpM4gcGcjXUTrnU9WPkH6bzZNg3bz5pjGa48RWe9WtgZztnS2pQVq5Q93XVh3c5jVSogTv",
  "key19": "2WcmRG1WBNFV5amFTLpV2ib12cinsobfytoBTJN9gHdeBw1ejjGSQbA1gysCVfTCCiQ8BzCgCyicYgfv5FVgufj",
  "key20": "JEzVCAEcLxvNF7PiCDxi3jZeyPEWMJqRsjFw26bD1N6SPp1tdE5rGdykjuqMHC5ZZ2cAzF65j9LoiCs2h3dc2Jx",
  "key21": "4FxUbwLqfTYZqZkG3pQpXwcP3aELWXGGU9vNANyfCqw8H9Vo5AggiDrHUV9XDDeK73bJ6fF9U6YBkxNRdVa97GCu",
  "key22": "bX5Qvo526QLxvLeJ9Cbd29VWAyqt9VxyD3z9DoQgL6uTYYYYnANxZmkp4Tx2LdDuKnSBoE1MTiB8dAys7LUz2wx",
  "key23": "2dG1C4LN51cSCWtUZG9kBjSVMUN51VUn7WdrK69V4ymARFMCCfee9h2TDH6o4jhfws8AeEEze29WHy7KiBdGVYNJ",
  "key24": "2Laf4NU1ikVizR5WWeHxn5sL6NxBMxSCDffg5uDvc8NhqQ9CgAdbxikvGAfbxab4MqqaHLqbNq1gzmkdJkfUD7Zd",
  "key25": "axT67dnJwX3agFYt4aN3EisS6ZRkdaYrLxzabz3wNsqUeAHWXbkzSW5BUwfij3iXMjvdk2X5uUY5j6fSsWAjcob",
  "key26": "4sppjNPAFGFDhkywgfWuuYdGSDvhYvv3LHz4BhyBc1DxU21ouMzhBHdB7ckFxxa7911FCm2wWcmDBV4Tu49mUEDK",
  "key27": "2pLxuSNwvFDRYPYypdAALrU8pzu2Kmhskwr7t6R5d5BmxFLPx5bMva9XSkH9fKnSdgqzrDjMRZzkm1YZ2gRykFvg",
  "key28": "3vG4j8Ln56msTwCnDihMshHSLCZAB7Z7asd7kN5ECyzyD4ZHBriGqexpsMDKoYn6EURVvt7owfDuksXHwHQjZhQY",
  "key29": "5FZu7r8YpDU6eK6GKzmuGDCzKyKmWux5mNEQsvUvo1ztRfzJ54i1KVdMSCfMg4TNJEVw8QgeC6NEdXsmr8mQnpd3",
  "key30": "erSK9BVTCQHwsqoR9SBAuqWkvqx2LrT4BPuP7D39pahhDVWCsiTWQU3sUzSEHVYZ6Vvwro1vs81UPvChgk3Zf6Q",
  "key31": "vBYDLgmZFYwqDH1jJDPhzFASDpLcZcChMxHtfVrAYG8Pj8SwyrboASLnG17dz5dwQC5sJjxNRqimPFFsMYfRDyU"
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
