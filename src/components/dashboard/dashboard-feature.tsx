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
    "4wqZZziPsP2Xpj4vEQHvRirz1BXGQ67Vo6CrmLF243SHdHvyfh6PUzJYpBs6cw4kXe6Wc28VEt3pQMXqGYZzFaCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sYnmogBE12ytKPPmsCAc7EZ1znqSpTZqGBfdcjzFukCE3yWeCzLZsmhWhiLr7eGMy9QDrTTv6NLtwdRmciPy2o5",
  "key1": "HE3u95dJwaTB8Y7Ry5biUfJTdYMTavZcTihfvfEPAbqFoS3PZT6h8WvxTfS1KEwBnCvRBo3TsC73thc1CrSEEp1",
  "key2": "4NtiBMqphAsmM4UXksx9VoxVpUcTFegKZLavDa5VXfMFQVD2ZqNrfH4TgFS5MgnLgVRCGnRWpRRoRJnb67HSxBR1",
  "key3": "XXrJ8Q5tWRUnhBaKkAQ9ZRrghgFXDQhA7aMdpeJAmTfsuuzZtPuohhM8AaBFjRLV8EHcoiPTBAw1c9vRYMudgXq",
  "key4": "4oamewhU2z3NiGQDSjNjrWkLxH39qVgvrkFwmP9tUvRrnfSMX58Q6x6wEKupQki8eWMX3zGgfZwomCSY1zeWborH",
  "key5": "7ZCJCV2PXSGGdCu3DjFo7AtAPiSRGPBAG9D2JfNrLQt4GTo6RkWWuKwvjtERCom3AMMwNkvrFt77nTQpu7cfRpR",
  "key6": "5AcLUMMedFkaXM1V93uQW7rMVvqcmoNDCnWJ8kDmrvWJFrtD9BXmwgecfELkiVcna23uW6EZ8wLwx9TV4xGfXbJF",
  "key7": "2xarSD32PJGY9C1Gr3p1mQ83JKX7mFjD9HT2iA4wxMxu66P6pZ34rnF3TC8o7euuCwVVpTPe9go89H5JSKVi3d5C",
  "key8": "2wAYSrVeQ9KQ6CQjiuGwaP4k9R31nfepvsu8kZRJNQAmRWP6KUAjv6JAP5GzD4iRRDbUB24oN9CidaFnJHwfJhtf",
  "key9": "3Fhy19T1FLCtXwmYyH4DHtpQv5H9VWLeSQUWgxJECnN5SRv63C5nFTRa4NJiubcPwikhbnM3bZqmk897fpWS3RVv",
  "key10": "3euo5eBzQ4ir2w3Zp3CmBLBYa13goSFqDjdBq4EmQL57YPYwngzE8i8Mx8RPKvhcZCjfYyan1cM8xN75HM4wDpqR",
  "key11": "2HfftoSrd8Wq8EzfFPf6Q4t83NirTsF8Nz6kRn79eZ2E9ce4xbjmnT479fh29BvpB2BgoyxrTFvNqqD38smvAQXP",
  "key12": "4qpeu6XCnVe5PHdKcDCv6ogzroyLsuQAyPbBQkYYc7NqBmMuZgf31bZWkNY2hciqwQLH88NX1JXAywQ1GrV5V7vj",
  "key13": "4ysrSoFUTQKpTZqzGmbbJ5tTZVAmiPapUgcT88vhJsLgofBRx3NBwLPDTFPmZcNy7ZguVabT8aqcx8k2GEVgmK1d",
  "key14": "4SvpPxhBrkEGbAcM538915yhhy7RaNrqGGx5sY96zofb8PXbnv2NfEi37apdhLoQNJAcA5x2coEm34h33bKDVYeX",
  "key15": "4jyq35bTUczC3hwjXScAELCn9xjjZgYTFUKwi48aFzSTLvDfrczpUXQRZvvGA7XiQRv2aeXfEbUxuoUdUC4wkCre",
  "key16": "JCVHtKfP5VxpP9fCz3EAJyiEpJqGxuHr1jQoT3dfja1ZUfryk4mHddbdCt4Aaro2NiiNYzZS7fFLJ4Dyd82yuhj",
  "key17": "kAJiSpRqmhPtxd2SAk96etCbx2CFXVpmZ2XcBNPu69V1yVgt851c6KujazFrJ63hGofXJyc2HUDfickHqvWK1fE",
  "key18": "3TqjhjzC6ajN1ir6akg9Wmc7UQ2kxMKLFHcKrr5EDiZLoCg49RZAmvJzP39NwhCryKotunAXysyfAhj2cfqgJavj",
  "key19": "GRg2J2n7bGXttyFLvKaFS1sJmqQx2GVhkF4hbb9W2iWB57kTHJn7jZriYqrJbxkjaj1dndVgzZJ8nWjgndNv5Fh",
  "key20": "5pY1J9UKd6TWauwZ6hDwYn4eDgmi2s5mxtXxbabh6BGAUXbaBotpvVRbr5nDh1KLLjW7H5whZJMefEfn7qB2EkY",
  "key21": "4h1AaH2mUwDVZ7EXJkCWMn7x7RsSsKWM2wNaJNtNBGxDUG3fsDmLJK319w53QzBaPA4mUvADKDuYojk6cfhYTk7o",
  "key22": "4FABQYUQDfUHWMSiJakLHGeC2R9ECbsoVTXvqTtd8eB5UDXrT8P7G5MkPncuTezmFTpLTk8qyZttNHaJeQS2YYsY",
  "key23": "2U1bGPzCdm8A7CNQhjAo4ZoVrJdnixDM2Q8whzBQcLWNLQMD6yq35FM2dMxtShVtFyWokCrJjesDsUUJTR5s1BLU",
  "key24": "4gmhuAsdEScgtVsfLgbdeQxPgS112wxBEagCPFZbSEAPccRBLdwXXRcqrubGfE3LaJug69S8bCSu2gvq1KQzrCQv",
  "key25": "2KtjJLhKhExLCfwxiu1DfGxyZEy1fyh8SHGsCD2jBSVY6UQb4yocQRkaWZYa27FYXRAXXCsscHk3hESx5DAXettN",
  "key26": "ewgXs3dMfrFE8amojXbJJuNW3ZvmsTNoPmw79bbwCMQUQSPcF9ugsxQjDiR1WMkBb4uXfVPJLsnrBrH5iyiHmR5",
  "key27": "24YV3yhGaxMx3urg6QzpTURRUVgsYbPa8TuRCRCNaEUDzrWomQJ2jCdESoRAr2Wx41eHaMX7QDmmgeE22CnGvJC6",
  "key28": "3qZWziVvyiFchMo3RV7QYUGNx1VUFRqyXK88mPkLziuFUTi9eVAoUPww1ApSquyDmuQnAbSzBibc1iRc3bJKhoXu",
  "key29": "3BAJyfpWmDCyiTEuQmp3twBM5gU5LeCKF5w2kb6vex5w8QbJKFJ73n8bKpfJrToBu3MLyoPdWS3dzPUpgwaAf882",
  "key30": "KNdCPx4EUcn5XN5P29o82jX9Xp94qbWGjsyaTUHtUHQLZgdQ2KTHVhfrJX2gXNpbVnEBQLCJpiqwKdLe36J1wu1",
  "key31": "5bzeGmtq99SPFWFtt2B2KK7weE2EcisRfRkBNSxZEEqZo4LUzy3VYv84tQb8TDbGV3gk8ubEziYGVjM67Bq52Du7"
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
