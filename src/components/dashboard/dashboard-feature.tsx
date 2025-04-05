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
    "5JFAueAnfTZwi8m42DKZa4RRgyBybKrrkavojsLFqC9dGBefRoyCKjQiBBg2VnjVUL3WQyJie3apRwA9mVUfEq3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WULNbFZoY84mke2XP4sZxRg6VpQFJqHNrhmxDxY2T5hkeKYLTRDii2wvqUgsLMa9hyHyRs2nxwoFTmF7DdM4byJ",
  "key1": "46MszT4btqqMmTFdKEVu5Y54SmcQxj58XMy9ppU8QWmT7qL2DN2WX5PC2rHxrHW291Z8q4xsmxWbCNkiA5QYpVJ3",
  "key2": "63hDcL3SwzFDuKRninFGjf6H6EYZQirPen6wLqdBJeLYTLrFsBQkgvyLhFospTg6aJ4kKaN2fbHEuyn167JyHaW3",
  "key3": "2m1hJgJBxFLRCGWUiufEW8UhpBih8gskXNZ7esewy966a9FkBt4wHxEjVTDv6bpAUnHHWeFb38LbCR3KgD2nactk",
  "key4": "3kWemPp3mVspkka1o1ZCLjvryiiJbztX7ukC3BXw4Bxup9Ku1apFQrtAQXBgMP1ZTW7sF85ieqpXgTUYvfoqkf5Z",
  "key5": "2ywcuX8xj3k5YECfBjH6EtqF4MdSSgincytjQAQgL6AuDx2UNCtReY3gWAxHWAxFZKxTLxahABnSRfDdiNCroooq",
  "key6": "4RxcyLRhjX48CNmy9yDRo18rssnW5MmkSvapbFbawpQB4SBRHcwvmRWxX4RFKekjkzy5FvvidjHMvkQHw8JcZCeg",
  "key7": "iRp7bsYXogudb4kktbXycjpddEQsAXYS7Gn7ZLbdJu4jDbuLqRFVFC7iW3YFWtmq6AUVkEPboezdM2RyTXuGLyc",
  "key8": "DCcHGXD7qrG8xcpEChsjEMSZjg5eMzvhky72KQcjVuAKr8ANPckzk4zTCcLvgyNYk4TYFuUVE2jXvxtFWoVuEcY",
  "key9": "3QtwCNv766HX3KEQ51nTrfMXZAxRp4BGgUDzQqCsiVmkdcHjajcxXuM2Kqn9friLH7nMKqaSRWRny1aLbaWkQrPX",
  "key10": "2wY6r8nEu2pvM5EXfb3QiKnLHqsfr2hzyzz6Mfey3TYzz7mr5XPqz87fPD6sKca4otah6ujUDeU8XZpHwdcwzmuo",
  "key11": "5M6GQmAiFTe2T4ZHYfZm8KoLtsRfL1Gup9eZ61aEa6cpMVbrnC8CV6mwQDnJdHJVyPRPHxVi4pAejscppXBa4DaA",
  "key12": "3sFxjhr9EQ6oKMUCtbNeum8tATTWUx8A4Hygwxyg4syRNsperh6PwNBT6DrA7LnBHwEvVfsyRmEBoCsZ2GNBziC5",
  "key13": "4GNfHDp8im63XZ6QDWUzVcrmXCkWG4rVoJiFFdxVbwZBekyZXmwpXMbR3yoMDeZHoVijvHZGES9fcCX9JS6WcP28",
  "key14": "2shf5uZd4X9ctHzEaVdwKLyfHQCkPzeMfTmCfzqUKVWCyn37a964jHFcAy7vbKX122sZuzuJUuM8yTwNntVdDrDV",
  "key15": "o3JtSvy1ujEtBT2ifPNP3RL577GzfiydYj5FbvZnsYuDRgLYjngjm7CyC7tgQtsHWLA4w9S1GBLB9UyoYipQpzs",
  "key16": "3sAngfaDcQEQA4JbkPziMo6Tu1xbcKfN6QsGMpt7bYB6hd3no5yBMeh51CrCPjGHPGatNgLSofRQBypMjwdSKYZv",
  "key17": "4p8YmXj6DUFj2FZ1yYMvcVSkMEoDsZ1nQSgwSiDKwynXLgoEM7S5WoJbG4tFQweDeKqpr69SWsNTsH772VHe1bjB",
  "key18": "5X2GdR2WFtFaJiATKdJCHfcnN6Jnkshsf9WvnhnDPYAyiTFxWDQK7NUuoxvdYrQ9NqKP8CcdHLPqvuuh7PLDj6gk",
  "key19": "4T7XC6epvnpUoNWfJ9stqEYRgKHd36zEFS59fgYmf14T9undUS7Wrspa95TS924A2z3vgeBScxHTxcCrwvgpnPxq",
  "key20": "4Z6E5856VGg2RCXhxKvkjHxNcRhFkxUktj9LwwhkQLcVFLXBXQCvmNAR45tK9nBQ1QQFpRERiNmjt6EnirPMrsRH",
  "key21": "4BX8XAUtgW8mokDQQsBogN7xhjvqgx9cMMc8WGjA8SVZr6wNdCiEDTAUkfQNRiSePEbDQMLRefj2n1tPBew15feD",
  "key22": "CDEVSsxmz7YbGBMk9ecBVxthSmTJeggckxBfFB8xaxFvgUBS5fA3ew2tXP9Qxysd2T2CtcgDc1jkUjEwPeyEZbZ",
  "key23": "RCQA77CHr5yApom9d3nahHdciJc3rCCaPKM7rXHvAfCKStBGHs2vayZmUNvWzKBTc1yYGUutTZJ5coswHPWqokT",
  "key24": "4xUghSMVzGR73tm7rmjaqTNmpWt97A9qXNC5pY98xnbsM8YrJzPsiWYd5GBbuj8Wu3TAsxXRD9wLEERfX7kBc5QG",
  "key25": "4ezwYCs7cvzEez8MjBJbJ8Q9q5ythxqhdZ2Z6uHwec6QLDb58eaXM2bZCecXP4orQm82dFaXguSjzbcyRto2D8AA",
  "key26": "2ybWxcjUWwtoRdTHn5rn7XgaiguYSTJZ8b24a3b3zkspWkRdKdQUepZm4gXLwvh47dPPNgZMv1B18JZcbEnHerkP",
  "key27": "4468rc4YipYXDQiM5gXpqV4awWGcFHPnVT1mrScsjRCzuMw776ZwzWsQysFkbya3nzHDHY3omxKkrpnwyCotqqoK"
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
