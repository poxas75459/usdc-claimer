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
    "zvsZCVHfBrvW8aXndiaUg1iojoWsJsf19PehUiLVKFtjNWTnSXwXTjV21sugCtVx8zr73VSrffDKaH5L9KWHPzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2svjtxcLRfuvjiQfoHhgQrub9snUX55oa3XTZtAySRBmzZLK7MS2TnoDfpQ7xy3aR4EqyfUL9MHcZzhyPKbGPvS8",
  "key1": "29pp6YnybTLtqZwLvR76R3iGZiD8WPUJmsDvHXYsrqCs4SJKHwsyM1P6vXGELe7kvR95rU2uh4HaKRetDUgWUuWX",
  "key2": "3yipNVUmWQEuTrHCMMsfsujZjhCrNWyPRck4jrWWuU9SvaJfKWgepBMmMkrrrbh1XNtkDun29fKrNQiQy2KHdYPX",
  "key3": "54ig3ckSPqyRNLYmMEdgxfEF6qVw2jSWR41iSCoUBWwyHsfosme4YCrtWcfRyB95jvJ7ig8gwgfpky7R2CH2mzHp",
  "key4": "2g8ExBu1whZqwHKt4Jm74YMUMKoBS1CNW8SScoUsLABB98bCCqCyg3fxmkjGJWCHZfE5TVbUjZEasoDyhfeSpvf3",
  "key5": "3gxZdogjC9RA9aBTuTbmJv1tpUxxmDdWpqA9YKUhWak8ci18K1L274Ba4ypXvBpidktzaG3siNQRW1UeUBv3PM56",
  "key6": "4tkGjvs9vjVsMLLe1vhHpMDs5qt2dJW9KdxKQ5LBmNZtiGGYLfS8hcSrpecBBfxPFkmRLDMBPJ8HF1Xb8q6ktyGb",
  "key7": "2G6raL5mtwiHVvNLF9n52WHTsk6c7HZXoFSuV3cXkSSMwpAeMLgSqaA6LQ4qKKM8cvbgXRWi8yLXZ5kAQZ73bwVn",
  "key8": "yYBRLsP53cdsPTPWLdVMSnqzmrYBXMcwqA7gtFGQT8NVZtamFG85Zg5WpVNwPHDGZeP1GNWyrPUneQZRzsuGZc9",
  "key9": "2t5YaUNkqhiXydoZ9zP1y8ia2zT2PcgTc8j1aG7sMVLGh2XqwPyjV7Ey89GkeoMUAtdEQsiVR16LPFJXLPSD9aFD",
  "key10": "52svJYKExHEKrXX9DoV7rSsDCVhhkt63u3RDMN2zxs2jcnigZpxspLLF1LsgHcFovgWZj81pkyeEBHbDJnj2qZew",
  "key11": "2cCMQkcA7gdigA4vbyc533Nh7tNFUegxKNWTv9x8YA9mWX7HbcvBBZ3a5G6vJDk3kDMAGtxeXoXPAFQir3EZrEEK",
  "key12": "4DfwstwYABpBfZmwAyE7T8psDtnGLcWAjueLruhvvFj2kzMqyZ1aiQakgbwuehHX5EbESVbUPrV7LkSb3qa1K8M9",
  "key13": "5TaFFUmr8bLNpqsXazWQxgPeGPKGFWMU6tesaWrkgrmsPDwRtsX5wtY4zcNkQcAUtWL1BJtmW9ynSBnPH3YiHQpp",
  "key14": "3A36NnXGQFYFZrfEFGMNjax6KEn74q7kbNy17aKaSAptuBVhoJ9pF4ULwBxfn3XhPnt9w5F4WeaYfE5Ce7o2ijZQ",
  "key15": "2v66PuHs4ERWycxNEHkuE6CkvRALXSoGmpFwYvLghcV1qoHh5tQsryrfndcKgnh8thHq3FCw4Pj2WFLXES1A8T8",
  "key16": "3AjeXn4PPUp2RXcLUqmiSmD5TFRPjR4PLDvzrs57w98emGuVRefznHFHugBNvkRoxP26dZproutRrxzr48nvfRuk",
  "key17": "39ERXHCyNKqDGDTaiMuPXWkcSJKEWgVN7XfmpFvo1bDFPhvxi8iQ7RG4EjSdZaiFjirL9EWcrdra7wDvPbx6rwEo",
  "key18": "2TSLVUHy4g6UDuB9CKdPmN6CdqDBe3LT5M9YJ4CswKjS64zX5HL92LAjymWYeKAxrtM5HLQV4r6VbYznV6Uecdfg",
  "key19": "3pXc1v2g6mrvAEFijhMfz78BmAtZG2PSrncrNmCh8GEWUWLTBeAtBdWSuPoEt4mbsxjG4aPgv1CmifvaLFQYubcC",
  "key20": "2rjDJ9zLeY9cyR7PTio84ZmP1X8iHSDWN3JEWQXH3e5NUefgKyEKi1TQMqaoqCyMotL5Rh91yYdNdXeQTkfCGgy4",
  "key21": "BmF1pwFVX9i3Z1F58X578V6sYoEt2pSA39tUiXukgUnne98XkumLRNTpvFGgeaqPtrxZGF2oLtq7E6TB14RBZFD",
  "key22": "5v6ZpBnPwP4afmw8cr6om8iM2kcvDsYioDnJ7VSxYbRWrwgw7UrZHR6cgwphUPmnGecR1mntcQsdB8Y8gx7ZCYg4",
  "key23": "3eyqHMa1cvuAqXW8AepWJ8MPUFwRotXSJWPGAMGPsbYirn2GN8JAmfXRMq1rAnh6ZRAEtBYG9K3sTUhvpfHoatmp",
  "key24": "2ipSQ9GzdxXraMxXyAjjN5SF5NnbBRVd5ZjrX7gdN74kc9xEbxeib4KUDiPn2FMtuFvBaxjyz6LA7WkMDYyzKZk9",
  "key25": "g7RKf4bG6d5yTYhgYaDvgY8RxAetyPoY5mN9d78tQ6fn8QomG9Q8p9ZBwxhP8W63q8z7gq1UGZpCjJYEpccgHah",
  "key26": "2MxXjKXiVJrEz1Q6hgu3zxNQYtKRvTdGbsHrwBzzpdXVqPZHDbpzXBbKPsjRzXk6sxfAWiWCEyUHeWkBjGibtDUN"
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
