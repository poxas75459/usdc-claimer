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
    "2SexYnMyXZASocdpXqSCzf5bSrfHYA4oexHJXeo1dMivHwnMwv2KVPxwppYY8Dndm5Rzts17pzFUqfXzFabFN1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RBExH587UbWHLz59Ntad8duzmgyxTCRAmckBFjazzq6hJan5gr7gtCDoeW3fPM5xKMDFdz84RxPpozfXbzBw1uY",
  "key1": "5drGSsRMkj26ufy7mAWzzwu4v8mgBGgbneRpEUnvCM2hffaqTt2KLzvq8FH7zNXadqfQaf7pxYYE2ksB88XdDSN6",
  "key2": "ogWsxyxEP2Knok9WRq1MMP8YeNWgaHUwVpycnUMP4M3oQogzhM3Eb3NH24EtXYexauAqHZJBLsL82JYaKfXZhwU",
  "key3": "3gbnDhV8Pb6syT8FGrPsyNyzbL9XazTnrKkeFscgVkU6WvAFWEneJz6H9YCtvZMKyC81iz4aBgNXVDXrBLzrB5QT",
  "key4": "32fkRZEbrjtG9pSg5fkx79vyjq8JjADb19GThmj9Mzjxi8F5kgNuLKx1YUBqhg3zeXjEJKxKvV7jW4zHEXCp31W2",
  "key5": "9yxpbHDPienF55x1qcnsMUhoAUgXw2KHYrnv1Q4AE7aEaR4baW4z3E7kyGkakifFzKWgQNmRS2ZeWisJccyYPAL",
  "key6": "3KixMkhDY9uCopLvW6jw4Z4xsUQkURqfNprVSyJpaADHFzL3MFcWDBbwwjNYLTVosbxWN8f26hH4SU8J5yzHuNfY",
  "key7": "5VJHWHMVsU7nL2eHdXAcdoErUs5vQMzv4FuGPxPwpJg87Mecq9fj9t2xPbuYUfLk1ztBtgoLjvciT1vXMs5UPevM",
  "key8": "4Z5imKbUG8JBaEF4qmYeC5kBTuTU1vvejKT9kiScYbKwH64Yx7wE3bdbmxijrsmiiFephUagk1cLHd9nhFYaqYdJ",
  "key9": "bkYLJAGqGCfzSE18cEFHMf9KqTHLf9eYdCkaWFBo73EXaDtNspCjgJrcM16gRcXquxhPTKeVmhryxAqitPXaPgp",
  "key10": "3H2HLCL8hGYSQ4ZjvF8HX7UMKoaQLZCGa2TfRzQeZNShm3yERyYJVSvxKNtDL3TkNz2jJhUTLLzvmzghq2G52EZR",
  "key11": "3z2FPCRPkvvtgs2yvPtdz2PR6rpdvkv8KNyuhStyUQecP57iudPtq6Vig5YCLBqy43q6sXmnPJ8oeCh2jetsy9u9",
  "key12": "sRz5kiux8SMjuaVDWjtXvsrQPhwtMP6qpnau2iDB7hALTpsGisVFe8DnCFgHRMhFHF1GpWxdKxbJ3C33C7UTEwG",
  "key13": "3zFxGyoPGuPbUAYyFzANhBuTNzTT9VQbDsoZehawHcuDp1Kyq4QjR28iwQ82HH8jAzGkh7XYirqUdJtwRs8Fbo5a",
  "key14": "4sK8zT4XiUP578m5UsduTWASBZaTFwgwBStQM8DTmw5E3bHBrRnVCt3vagdWSUGcw1oMHTSoX14GkGwRRfXNW2ti",
  "key15": "aGvjA2ggt9noXMJnNHNSajonKuBgPEMsqBBeFDpoVBQBxfkkhaXwKkT2i5En5s5VrcMnZjJ6pSYf7qwrGgc8Jz7",
  "key16": "H9Q94wL6vPJiuMAbPiArNAYqEjsmf5JLXYA2rXJdU5FnE5QjWD5odYZM932weUY2FxA1wfTf7t4tSjVjwraQZxc",
  "key17": "2Kr1X1LFncT15ZaPhPDoQQH6e8J2bw52jtQpJqsdwVDzwzqj4jL5KP3cVzfbKzKXNDLj3GyzQSsDENUBpBhsjNWK",
  "key18": "5UAZdHN2hHsF8ZJTdYhVzK6Z45shz1Goan6pfshowHqCpFEDd8FzS8yiNuTaPCBXfnwKXNXCQiS8JyYmAGKvBNGw",
  "key19": "3nWc4LdFJAWpDrANSGZEmuMV8uQPYooAPQoqrE4nxSdJgpbq39aWydysHdf9LY7phrfyqtkWpULHLqadhjNYLM1a",
  "key20": "2gep4wmrs7jgZehroW1CgN5fmECeKiBnU5L2NAzTU2vWud9mmwqhEFzo36tyqHDmwd565io15z8tPEW6jcdWzR43",
  "key21": "2mPx5YxepjWjmiMfcwBFAyZggfrsMoUodtbB5wyY21eZyjCgvGaNMY2qobpo7Y29G4Zt52oa9xgQbqcXP7hGEC13",
  "key22": "2XMmRYK1C8YvSzx57uWSMVkM1w9xCB7qNdeswRJBC8G6TgkFTvbWQsKPGWMTWaToE75tuBuWuKJYBLFQiYNPTb1n",
  "key23": "vh21inTBpZAZMouASLiBXkBBdGmaBog8pYeNJjGUdTqmhDvKWWazFcmuNz25rgsyTCtRQmueQ9PXJocwhCJ7G9D",
  "key24": "5WTTREb1SX3S4NxCtZXoSWHwdLNGq3s1nzwXXgiKZk5F46bMekMwxwPCwL1Dt2fpvtuaChhTeGjkpzjCjCibVhVw",
  "key25": "4WkEhpc8tdQef2s2ZT54knWtrueBEWtQQ7YjsV28GPWUH9FgoHuxH9FsGXmCkkQy3fUQLwdWP5GMLr9zFvYFfN3A",
  "key26": "2zUFSg1vbDrBXZQpNnTpPzLV5b2ihNdVc4mSC7R4RrKd9ciCjiieLdhuSQiE4vJtGTN9gKqjxa9G74GgPKeJLcX2",
  "key27": "4MUgujEZMgckRtLefD63J6ZTRxv9FsPfcmQugJCg8zyKUJU25sB28waExnRd1ko5ubceoiguPp2b1FCwYVVjb53X"
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
