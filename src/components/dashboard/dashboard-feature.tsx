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
    "5Yicr6y4k2FHgb3zMVrHbDS2UCCJjdfKnDh4BPpuu6Ldukq3Q8pnTm8eMYQqvLmQsEgPQpLNTYpPjan2ioopK7L7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "438YCM5wjXGKCR69hmuML5mR4D7o5J5ZRqSKQ9EJo1rn8Ey68TyVCxH3TqiXaQJfpVcvfwbkcBwFVR1XzXgMGdRR",
  "key1": "4B6nHq234wcboeKt8LWYqEeZ5GLqHiNBkD8FNPgLtpETc7qXxx17pz8x6HLyWT6dP7ZKoxeDmAdx7GPNraG9p6yx",
  "key2": "DV4Gx5NhBBfM2FvBJqj42aBq7FYNYRyWK5aJZfdnkxAE5XtMqYDwZcLGgxx6SYW8c8WRB3r3JTsQgidH2o2cgoP",
  "key3": "33AcdYNAowHYZCKYoFnrmhVccc6oWKr9vTkokW8ZPEZhhSL4NaCX6tKxiA7Z4fsqxEDGwqGiyEfxcsjxNCwbCCqW",
  "key4": "2ytCUpqiAjpJmiYbV4ZYj91igzLv5aFAwyPsU7R8eVFDYi87k3oKwabbDSWE8z9s7QWhcUxsVwmzedavh9pE36Ph",
  "key5": "5KyWQky68dMegJ6r4oAWb5qy3JJzhwesaogh4gAv5SW6T48bcJL1C1g1eCgDiUxJ6CdbAXWBE3uwPyoo8HCbbvHU",
  "key6": "28vCswrJXupR5DHk8vuqHc8p9VNKnuqSsH3yRA9i1AjUnfZWWHqqd8Gsde8UN3zA1JqA6XRNtsU57xnG6viTgx8U",
  "key7": "mW8LTXdDrYLhMztHCazwQGyU311VgCW1EZuL1mtNByxZi8v8wjtj1PLnsqQSjU9okjoc9LTUKa2EpVBsK5E3TgX",
  "key8": "4LQVexZnLboc8ixMSMmJNV2biwg2bNqt6YSBRs8ub35TpfKEaYj4pByKZzoeRfgGWaPg3puheMiLkLZB1X4oUvA4",
  "key9": "3oUM2Jwz3Yn9fqrd2p4wazmNyAeK3VaZM3BXzj9yST96iT4Cp6yNQbdF78UNr3Qn3jVa7FVM7NFczL4HsbYpW2FT",
  "key10": "5J6FgnPM1sbvJFvpAYFpK1SANo2YeiY4gitHj6kDC69Wfa4zV8SGxuM54KxctAr141PoVyT3kZQkNfF2asFhh5aJ",
  "key11": "3KABjtLst6YFTxfBtbWFGVosh31FzqPzSEE65SiJozgZKpFbBnLWPxHDpTSdzWWPhntCAo5Tay7QLtXkBJz56AZZ",
  "key12": "3zLGVfAxzWUibrvsWyEkVTzS9C5YBkKC58dZ5NfdxCFNGmi2EMzdzGSW7SLyGB4iZcNFTpqF1EAoSprop39kYnTY",
  "key13": "5uFLi6CwrYo3mmtjii1SjmjbJvMSRjHcTBkNw61wzwpiTQ6gKqN2te6mNiTWE9KUo9ur2pPahfb3LRZwvThcDNeV",
  "key14": "etxqytmsrtho8k6ezdFgiJAC9ZhywUiL7VvRxzRY2VF1oSYtuhz9mPCQAF6UXVCo59CypEuN8WgKJ3F3NBELeEe",
  "key15": "yDwygTaxAwGYGTBFWLs8u6Fy6k94vQWMPoZuuR3RGYybC6KurcTZuaaeDq3gRBGLiioT1zjvJmPoTFLFJYan2qV",
  "key16": "2ZnekHwVNXHNUcRTtUSRsAKAekWmwSAVfmun4a1Qy6vrxb5Xzyie6zN5joepE4uvYSZZoR8kpfb1oEDReHTqVDpB",
  "key17": "5fQND3RyXFTyD9RwR3V8uawJGez7uTFiEwXzkPdkaiCbqcoRhGKr3ZL3EXrjX3D4nrbWv6KvqxZeChgVSZsCC9rM",
  "key18": "2SJ6VaKDDfHNUqtSv6spxpjmrGWnFavDw1MepAda9P2gw3HN8Zg2G4bfzb1Jvnzx8ZLse1JUdV5iCmFWbutfRXv7",
  "key19": "4j4Bppc1xygQVTuwM9RW8V5SzbadDGwdbo7rP3S2QL5HRivKEvsud9g2ZdrDUPYH37JkM9aKmp3q58m9ViYqcQBw",
  "key20": "3gMtCT1WdVUJf9UcgcstcHjP6v3FM9Ew8qmXqc3GJwVcvBnfAAde6WQqK38aPNNaJDqxqKbKGZrZ3UETebAdwVKG",
  "key21": "5MfqCLaUeX6iD73Fh5C1M5B2gmegVHeV3dEaBmPdS3mYZLrm15doPdWhbR4mt8jEB5DLAkybRCJLgFwk3c171KYU",
  "key22": "1qJp6YWPSTTN68cceAC6fudT1yq7Cxqbq34dWyoeWuyM4BtY6YKuQMdXoqihjWxLyEqyw2RiWX7WSNv1naE49o6",
  "key23": "36q62iia9QSzM4UkcGxQNsWikPk9zcMX644BEVkrSgbNyzm8d5D4tEv66GKtP94NE9gZXPaecJUTAtn6PxdCdGZr",
  "key24": "21cRzXDsqZXmbvo5KyrkExbSFjyqkGugKv1d9paH1ZnQPbH2L98TMrh3wWdgYKA7Zze1iFrho5pzQgjvUoQZbWya",
  "key25": "44rUcjavLZjWgrvxdieKUQB6WN14Yk9mePEUerYjWui1sVznmZ4aHnnJMRe1v1KamjcuuHuv4A5WRhiRud3LCWY1",
  "key26": "5AcKhyb6u7iducEYrQb2Gq1a2gVGXUGA7J2cbA6XFLFtm8FPHLLi9WCcGmamrtwsB3J935Xm3YsKWHbMUquz9m1G",
  "key27": "2142ZtuS8xeJRMsFsJbTpMAGPezRsGUnuZiJCeGD3FmsT5gkFd48YprxAptSbq4zCnCYF43gCGyRxQDndyBLZxiZ",
  "key28": "4s4T8oKnaZ1JZJo14H5LRepBKbVAdBBBbyxfobmq51PcJuWuz6syNpmnki8j1Xopae1sBhzgUozA5doroFxYAG53"
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
