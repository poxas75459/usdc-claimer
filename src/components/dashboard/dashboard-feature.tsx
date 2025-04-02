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
    "4aUW8NLbmhg5YNeGJ5Q9k2oqnSy6u3U69GzpU1xXUUDunDtapnUSSu1qnH1LcsNtHovXnuCyyv4hMvHsCJmveXRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "436XQMqz3Xc24TARLgeeKdm6Wjd4dFkhz1uAU6cigmheASYJMNv9Z723he7JQWCukDkKFhG4ZkB8XQMtyj4YwkPi",
  "key1": "3ZN9oYRkmDc4FXsX6VRw2pQd4a98oUiRXqhoj1a7TCzSqAhwUyLp4MKWpHDyUK6uqYaDpykbaUppsUD1nwDZgkMf",
  "key2": "4zf4qq4gAgyTtyFKEwbNMB47GYbF41LGsHreE7sVwxG5pYhXxu2gnsP7Unui7tzuNtDKXa2pFJ4JQCrNiFNEZTtW",
  "key3": "5kbcfLWGkoqB8X5AKRR4Fb23Z27qVb75vYToA9diSrVQxpoLKhH3pUgRGaoLtXv9WXFtPnB3AN1dT2a1ZLdrHUmy",
  "key4": "4V76ne6HEcYvwmBpZtU8sB8owNX7d3mWoLtt2Ey4h5utz3hdt1wCdoKXFF5npGQNP9s3qkrN99pmMq1DuKcJmHuS",
  "key5": "4FZbPDTqec31YJ3HxEJ3Yzh3bTCui6PWZFeGEdzqPyBgS39vAqSnWrmYj8vNRkr9Lg8jYBssHrNrdoTegKyGKGZ7",
  "key6": "4Lji7LSZAmShHRp6ebCQWjEK1CVW3YjYeyMKkxDx1Mzt5CzmbR6QPoqshThr4LaiRk14nyan9kZpxsLcCpY4v19X",
  "key7": "56YTHgjz7NRop8zc53tohoSNP2vTKePRgSdfbhhpKViGi17f4kx3i6dnVDbEEZsEMJV98qFkyR2MobCeL1R5mkxD",
  "key8": "utGQu4xHPoAbNJgzMHo77R33Y7U54h6F4bUEAH5z1DnknHjbTZDtM64R8uWtmMm9RLJtppfrntWDQzVjoq4WCcu",
  "key9": "4iooJW85brkNBm6TcWDQ2RfXa6Yq9JQ1nNQiLSAX3PVhy9qoRHoRoSvEXX1oFdVHZskq3qaQV78Qzwxm2Y9Xk8Uz",
  "key10": "kJgE9yXmdr2T1Jd17iQR6KNzfEyVYpnyE2L2Ctwvfq3a6M5PdoMznJv13asTVdu4p7ovv4ykV6ZQLF1WZjaMYhT",
  "key11": "23yYC6oqNNJjrKBisCoE5t4aHmedqhB9MTDyV92MSC7XUJL6b2bFTT2WCSBf13AhtZnkYYViJSZMQ8CHNrLdCrUz",
  "key12": "3qQjpfXW1fGqPRh2L5hbngU8oqaD8qCvwdmisfS6Mt6HwJ4thUw8GFERTYEAS3xvFsfBhBLoKdfPP968PnzNyQd9",
  "key13": "4v6yqjcG9XQKhgZbQs3cXJrzMdDjFsE3Yxz64dLVMv1TxrRYAfQGo1CoJKgekesN2GF4S1ZV8Rk1YcrYbCuyvBNe",
  "key14": "3gPP7hD5FvJqXF4BNvb7B5AemhsNM85bSHnzBMKPfufeZc6rvc9CTr34vXveMztZ7xNs8wRe24GcEWs5htZbYvhS",
  "key15": "3GpY6QKjzZVF31YWqGrJffipY8h2avTeEBYU27t2SJqFL1B4LUJSNY51GFCKYXseA39geot6F3PmSbHMVHvjVYw",
  "key16": "5jaGvMVMXSk7EZBofzbmpkq4F2vvXUqzjwqRaGmctf3S5G3WFU7C5Y1aNBiira9pxwSvYmkSjkBvRA7KGJbCLAxG",
  "key17": "KjWKMLWL3EfqMQsBhwUU3Lgk4yvKx56j5ENbWoFYXomv1MdoEtAfJjRtWYWs3eiZurEvgELooxBMUqpgAyXUg4f",
  "key18": "5ufgLfK5kb42ESDPBpN2o8zdkn5NDGoSX3qL7UYL5Qkf59sSC9BwFFmDmEzuvz7N6rZrbbwhph9yfVofYWBU6hUM",
  "key19": "KMCnnTgJnBbwPUKSDGQcnULpzd3svX1EH3rQ5CE8xZckBodaRVLc3d35h4y4AXC1hW4b9Xh62sSDPhjhiDDa2Qz",
  "key20": "23jprBqehzCgjCmbTC9RGdKcNZRgWQpFiDKAtyfdENZp4p1zgGdbykb77nSNgAP2orzMiFxQfvHr1XWFZ1QXyxq6",
  "key21": "z6HUupdpkotTrw9Cu4X7zRXS375Tsezybrk5sW43BpuTGNuDTy6u1aEtHGsD9ZNP7jeydnjP8ghJy9uAuN3aBFg",
  "key22": "rNE5WuaRwETc7pCwSJhiAzMRdhiubCsypqrSDUs6xr1HgYid7daWHYr6Q25GH8dDXPXUcjUnLu9wrSE2yzJu2kg",
  "key23": "F2TQagrJ7wjNWGT2jL2svqjyM55f7EfGibdb4EN4WdGbzPLn3iMe1rmWtPwQ2Fh1JZtXKRK8F291WhAZ61iWems",
  "key24": "4dqxvUxn4dxVNKywbsaGB7AaSwsw3VGqVZ7TEjeuWPNiXyQo44CNaGpUMQnzJ77NKVLsyBPCAHFuusnE6dbX6nfA",
  "key25": "66bP9BZJDbSm51mJxL9dgsP7gmLTKuDazAixn9AYkmLrpChAA1ph9xLm5Lu6beVCFyH2a7wvuMrA1mzLWjRbThXU",
  "key26": "4LV3ngMfmCMYHwRVYhdYwxjGETZRkxXxqCoK75VEMRLEgXcthG8W9JhU7EACqS71peFRBG6jzbPt4k2kwdfiwjtj"
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
