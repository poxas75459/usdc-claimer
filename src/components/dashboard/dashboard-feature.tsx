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
    "yBvCzTAi9eG4V1fxQfTVBZ6gi6JfcK2VBfWHo8AyFwcKe4J8HzQqPk6CKzeTufGPWrMmCbufn9LzsKHPgGtRhVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GUYZGBHAX9S3yzqjv35hQ4vZ8MaJvzbiuN114MCZ9Eo6gF9Mkr8QJ81NevnVvFPMiYj5mA4dRxCegCF6bnRDkb1",
  "key1": "R42cdD7nB51bDaBXKGtZGSQ6xwkLp23LGcB5bjRf5t7Wjsz4ZLfnhyzV2UXhpoaHSBfKSEaRqGtFP52DhHYwyqZ",
  "key2": "64E2rKhoa9tZG3UGFwaehqdPpPShCV4i3pxVJkVZri6cqaTMNqMKraB1xdUE3ax3GsYP8cPBSX3RdKMEetoEd1c2",
  "key3": "2f2xhyGJ1LcXBLKpSfXs4dVUXzdyb4Ci9jDeGX2ifY2q4ShPqxiMyX4bxAxnxD4YQMfpcAZ1Yhag6HFwFQ8EfcrD",
  "key4": "2KxXuQPnNj5AKqtHaYLynxqYnoKL4zxRT2KMhSkRsq2SgLgff16Fxs39QKLzDXiDqLtg5hf9KbDuMkJw9n9MVhwg",
  "key5": "5ZygMVn7q3XFjEehBX14GRMzGErogW2f4aovz8ZKHwPMf6oGVK6SFCZDX5rJEToCEWGpBWxu46ErA184B3mtTkJ4",
  "key6": "44gCXu7g5LMcVWKkRD2eF3Jmr3c7knTuqkXrDkXEYSuekz7wnUV9iqtXyp7fvcwhFM7KccotsZhDRrob9QxRt4Sj",
  "key7": "4MDErvtemoAgLnG5ipHNPPDykrnpebqh9HDNyK5abenvmTsaik3gUGxuiR7WhCbPPyTgPPW3R3aAUiuR1MfdB2M8",
  "key8": "2zJeC9Q3cxfWgAugf8YFoNdrGKB4yNKsi6PxBwACFES4Qx2byqc4dejadMWDDRj3DfazadjvqanLQE3gRKM4tHtU",
  "key9": "sCVc3T42MpJYbYCRqREtssntQf5xrzrRp2646gACsPK9ydwc92ZxKGitZdQpSoKu8YzBbEyq4wNxNsPJz7jjt6x",
  "key10": "XnkvLwbY2iUrZ44a5vorYgZRcirPqwiViS13F3VaRbPN78fbf5tFZs9D65odGWp27pmKwmrTDR5wduGuRb5HUmF",
  "key11": "2HL9q2rNe54UxNxKHtZ5XLXzWKa23noaQHxjfqwHjgDnCBCjNfDAyWqkFjiGDJbjEy8RTqBivDJ52hVZYV7T5Bog",
  "key12": "5Ws5syXnPRHqjYrtFzdur7B3kPS7be6LpoEMyGkxFE67Gu8hQSE8agxpW3Y515Ax3rketUdoLCrjf37kbmpQwQqC",
  "key13": "pdpBFH3S2Hbt1E3EAKBddVaa4YX27MhbYKo8NXX4uXKK2sRpXDrciHiYqaor4GiERcsH9ZSEZvP3CUkKxFYFiwR",
  "key14": "5hG4RRBCe7hkYBrHc6JRrgb93pTkdGabGUNVmKxxSSYp1DPoUdK7feQTPNTWtQzEvHFwuC81J36YM1WuNknJkrJU",
  "key15": "58fyUno79Ca17DphPQf8xyiAFoerGCWTt1Q6HdSfp8ms8FQQQq9cmLfAHzDKDGvH5Eq9eX3P6teg4bKrE3hxs1yQ",
  "key16": "mam3kZ3W64pMJuamgq6hh2T7m1B5CqtQdNKr8PMsiZmS2BCmX12WWXeaLh5oBnVinhdTydSkpFSP7df7oCCQPnt",
  "key17": "aaPSf5EJgajYfCCoUGU5sB2GCn3vXDW16tUoXxoQvrfYAmaZqxFgspdDdKBG1u8i68g9imR4TmzXeGww8nskP1A",
  "key18": "2NWGbS5z49ZeVe6SKoCg8a5zpCb1ptADZUK76ig1KYW9A3hWQnTiR92fz75dcH8WZFZPXcWWH5ZWbq7PTjPzMgng",
  "key19": "4LHxT6azXfZzbqKhQW9wmsR6Lgw7HeYKxQVixetpjTmRornuwfUcR5bYNmKpaNa3rWuSDbY1CCJSzLF1Wdm381tz",
  "key20": "4iGdqix47SXFPUFfw3fPJGAarDTa37QkWZKz6hczGhBXUh4hnbRnhVZ2nKipRYwHKRbzFum68P7DBs9BfCjCtjgU",
  "key21": "3W7HNALd5ZFFhBaMqVCmPTWECAYzyZXN18RCdkCne3ozJk2ReTH1FXjP1P429Vmm98ubeR32tVoMV18q5uJaVw5",
  "key22": "2tNjMmXNKtMvNmk82EwoRmhtqYPkJjeWjqDyodh4P3XiSRAa921PAzy3B65DCfnY23EKHp1btjhTWmnsBS263j6m",
  "key23": "3Eygzod9e4aH3f2VpsAoR5j4H9CGis8YAmGMpPb9M3wRbQsDE4TtwXToXwg1tik6L4LAGEqsDrkqswa8L667johk",
  "key24": "55zGUbHLUQUci9m9T35o3XuDEb1FRyYtNm3CbpqMDbnk4Jqy9qh9rMKbLrmG321UvSJvGKgX9Xv2vASnKV1v2XiZ",
  "key25": "5ieYnBnDrNXSiKiUkvbj7NSm5ZUG5jEfjVSHvoFv1hj6ExFN7jqKmiuYJLiVrnQFQ6FV5mDy2E7heZ6hC8uXeuns",
  "key26": "3CZgTjAQVCzsxLmw6ZMpz4gJBE1W7NwVDxTfGu8s2mRgbJz9cnZ58xjAYcS4ZZrsSkCRq6nFiAyfcxVCYCW9KXy2",
  "key27": "2WfdNPnt18qJs5mexbrPV9Y3imRqao4ysV3kowt3ju2MPpFS5ACByrCdNdPdqmBqfSsPgsbDZSCGkvKf2jqQ1FfH",
  "key28": "etaV1VxmTQggvpJ2E3d3fFKAMQJrbYcknANYSLo3xqEVV3GT8PbhYEnNFWR6AFARkyS8BewpGoqVP21G4Gvj77s",
  "key29": "2YBrwCzgbzmCQiUhxxMVLsRq4UTSR1Pryo8shyurizhCfj8sbXjXf15kd6a6DJyUb4ZzJBmWgQ5Pe7k5cSdnJPKW",
  "key30": "44fhzDA963kSR7CFErai6zqcpAPhidWSzfihkmGAnBQMftUZr4TL9DMiopWbrWt2cucsZJXG51ntAruWNeTi95CZ",
  "key31": "2FAhurkLCgz3mo452yoxw9Ctwe3MoofXoPLTpWBsqvz5oDCrkE6uwP3ffD1btZZwEm7B2tVS1XqurE13wfZo5reC",
  "key32": "4CNrar2YDL5AVNnRNw2wKPfQA6RdtSidspFLhA7p9siVYpX3KYMqt1rTsMf41CJfTR74xDARN5F4prZRRQyPuz8y",
  "key33": "5LCMhG5moaiwcBvtQMUFLvtP1K8Lgz6mR8gf5SDGXVn2Ss7nh26WZAyXRNVY3r3khHmyVYj8w424EkhHUDdM3WCG",
  "key34": "4JsTAqJmAvHpnf2482rKvccsKRdNySQPhvyRZfxbmcv8Wmr8PCFvemTa3EYZN2WnZkh6gRQ99b8VgZrwXmdE81mS",
  "key35": "5667oceddKiuyytJnDyp9nb2crc89hfwadE5GcEGbes2aTXsoXVefUZZGe4XnK1VPWV177YbhbF3Jkuw3bw4TZb5",
  "key36": "2eUadmEcWdDQvZ6b2VLYC5VXFH2xjqfXZk1NbZHVxHVdxuc8Jz9GsvWGmcMuWpBLSGC75zTtysBohJaPDrZiBQ69",
  "key37": "4F1eUbeSWpZAvfxAgEogiXuGLfhJozTBS2S6Na1ks1f4xUngg3DZyVtD3Z4PXfGpaXjYFPUnu8KhkVsGnEWUMTty",
  "key38": "58uDJFbSBnkuj4EX3YtJZWB7VHtu52ttiUeXfsTh4UCULraLSQ22bKvrBpmGWv7LYMvYtuHp4Fq6TYuNs915kXRf",
  "key39": "3DyycQZh9ST6pdTKEvwgwN8tEaGZaMYms14Z3gNP88CDYHTJAJ7pksGUeoWbXhKprsY2ArYvvhWQgAy2uBths6kL",
  "key40": "3FSedpKKpTcNSp3m9PwBPNpVXPYLg6SufmsRqqoupi1DeVvfj6wCw38DeEDQWUzwy3cT143KkH4TeyEf2orjTP3m",
  "key41": "4TfGEAMKjzwXS5FUD3WSsm4FPcsfGAia1s4os1c4gMgyL9hHb41aLuWNmnNaW2VeMW1A7NQc8bnCeKB7vsUxzHHi"
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
