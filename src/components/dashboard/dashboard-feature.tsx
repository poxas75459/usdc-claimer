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
    "4nmgPGomq8F8Lu7UR3djfAPKvPNcubKXiwRX4mqpgTvmgz7DwB7cPJQPWoRuAzuoSXPfs6MdFMPLFNqjqutc7thZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kHVbTjnXbX7BY35sA77kJyCW1wGnkrLgra6vggBxs7BuLp3eNDGB6sS85G3yiCfRKzW3HevrAYNQju5ZRWgUKMT",
  "key1": "3vUjahjySCuCgTWsjxFort2bFhzEtdpGS6pVT9KwCWBtHnbkeY2CYhstFgKghSQaS35kkRh28KhLa16aWnWgtx49",
  "key2": "YDtC4U3k1QgcmZaU6RwqN8bCri3Xj7H71HAdHS9khtvhZTAPcod6RGMPv6javr7xADSvkw7qFzfWhxpt5ppTknY",
  "key3": "3GuhrpjUUJvtXbnMtsDLQMZmHVwkxb4qNxhA2EyxN9u6o6dD7sC6BmQ83zQV4b582s3yP6wGiMXJUftAcrkYgHnt",
  "key4": "38yn96MmVF8nJRKFq7K91uXsZgN6ubjgX9euxvXmtz9ig8NG19RHzM6yNUCJCMLbtH7jM564umUC3KoTzKyLRTmP",
  "key5": "5VYi9ZLTfWhg8JHPYxyxRueFCqSduRgJdKGW8LAe2FxnhhmvAwXQnPo3oXBnufAW5iRcRwVYtULBt3Us1JKrGAMN",
  "key6": "4oKRtkqLZ9oHjUVV1YfkfhvWr8N9DR5NXqHb4mjWSw25PQjVbGLPpWpzUrH3PehFPEb7uVCYoawevi1nnJB7JCaD",
  "key7": "24V9zSWqgxc2T64PaoV1y32kUd1FRqFZKqw9AwHatuCarS2CCFUTmzSsyRCauFysXdc9j5HfUjy27beMh13fDSbB",
  "key8": "3UPCXDjYCpJatXQ1hxKhW8zw2qpqsAcprBgeAdCLxqRETNQxGADxfarWmkpgxXmGGQVxDDFFgirQxAEVrin7VRWE",
  "key9": "3xyr5NbbctHXipKkjAvz6SARThXmjCvaFT6F9aHxzMRuPfso62L4dCbqx1EWJunxrHdLkVRubvZRBeQ9M8C6foqM",
  "key10": "29sxoFXnvt7eaX6EwJ8gvmvHLETc1hddrpK3McPtGKXa2xvc2tEd3PuAEGuDJ41fEWJXqck8E8QFrbtGdRsYfymD",
  "key11": "vRxTDWcVvts7dJTuFBxPRV1EAA5QUkYgZho2FbciZCHy9F2DoPQXAojL8j2Rn1XCs3G3Ab16SxRwYWxwHY21JN2",
  "key12": "4CniYswy3Zk8JtuBohJntoyVKdDpqQ5LeCRMkPLoHrbRrtUkH9jdt8MmHwotY3zf676zWQYizBS2VeevHcMeJgm4",
  "key13": "4jy2uDwbcfswXdy63ssPZ7B8sFRnCSMUEbiVXw68edsGxWghiYGoYF2BdnwSxghi5nggKmUvk737sE5rVzUscWGH",
  "key14": "4FeekN5Lgdt3k3PY9FUNhCzd1aodQTdyRsuMtq6ChheBuSiHsBhnykUPn6FovnQQr9cf9C6RuotvCbCQxfYd4KAb",
  "key15": "3jAp44seNmaD92NxCEnR4nif5mAuKFAycYuWXu9Yu4K6NjJidP7iqgfvt1aed7uYyFRoaSSLgrEYUPHryNWdrcnD",
  "key16": "4kbHnEW8uvN5PmWj1MLpzK5Zd8FLVjFh27JEGLhua1dyBhcGWAjrjpnA65fFCUcFEVnDSq88JD7t52TbhDtQw4b2",
  "key17": "4oMzCvZGsz6J3iFrUm5kKBi1ATR6XWMtrUZYnncd1jhEw7kSVdEme5FSaYiSDY8145pMZaVHvLyPDLMYqQkeKVgf",
  "key18": "4Xg89zwAGykMGbHvhFwmtanBbTT6vkWjrBHbc5yfKLgTCHfTxFkpaUosayP8Mj5X6G77yyEGqvaSNvFHn8H9tTaQ",
  "key19": "7iqGgpgEYCjGPw7eas3JfR4WeY6E2CFxNS4pcyMBnMTG9yLShhAEhehTKjQ4AF5Kmg3MzAr48zjSRXkLEGxpGpE",
  "key20": "4Gq3AXxw1xKyeedSpzFfbQEGGchk2uqUCWug25qBXonQ6Z2MiXheqBDDR8M8ffTX6m5vByR3eJsUyWG2ckBrPJub",
  "key21": "KkVpSWiXKgR3bGcKNF8fSXEJMPvGDppdk9am7vxm1LbHBvHmX4XR2v9KsrmD5L8d7EWbqRG5hrB8FBgwA5usN31",
  "key22": "3DqdeHp6ykNwEG1j96rswsSwhrpz7j56W9ZC8okMB5QPD82VrF4mdfYoYm8JjrmPA7oSAb4ysdeor5Hayms1JTjm",
  "key23": "5tEb6o6iC8tyLyy4jBfhiFyBQ2UeCjj7uYGohrWZ828ncgBiyU9hmvbt4eEbxsAGgCw6DHRGWyKVDg5pSJ7nEZew",
  "key24": "3WXnpf9qQWkGHnjGuUQW5g3z3eA63H7joNzHuzX6ZAKhLXnwPkL7Cu2dVjN1Yg8rqioBLVidfGHgMjwmzQKAMqVu",
  "key25": "2BZivBgWnzoKrgsj7MyHtFFDypvbFjr8LoaXKGK6QFCE3qoSTcdN3dK3TnZe2Pygcw1s3yvyHfPp9aLhmpC6pv5L",
  "key26": "kPVCPAAFYFu1isL1n31JSwL6vvK2bEwTCQ3iNW3J2zvuJeRVBnkiXn1qYJEMmMb7QxcurjZTiWynKG3sB1aYsvX",
  "key27": "3WEU4EXB5mh74Q7riw1iE4q1PL7Vt6RQXfrJeC6QebENKe7xJF56ewvsNNHhGeV34Na9iTFqApRBuXniHu4AMV8j",
  "key28": "NCJLHixw2TRH2pRhzM4zv3ag4MtpiQsDQeYHegD4npEbmtBFAu6W9xMTC7HjK74nWYTE6K2pCLkExh9KRw9W7h9"
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
