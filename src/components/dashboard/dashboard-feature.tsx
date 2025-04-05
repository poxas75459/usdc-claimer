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
    "3LtvNKDT9qANzzNLGoDYZioZZvENbGaSLnDrqxY5kb2DtUKvVmdaxZeExuVMaLMvFXNa4eS8UyVpF4pCULFtrTU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GQ4odzKNHTJ9EVhbsUtyyRSK7enpmV5GbEzGUYC1VasE4Xe9rH43MG3uHQ8pdcso3jJqWfRZJjeQXeEvC28Vq6S",
  "key1": "PDkzfxceR7E9YPYy6PFfz2BtvaQAFwX8tgbJL2qdfXewx1Wct1hC6iVoXHN9i1kApvrApshHdSjGfDEYeZmj4y5",
  "key2": "ZKPZmWSWDgHx84zfwWzoV8KL5L6dywqHsbye8ABK43LaEKzikb7P8GP5SJ4AfDb73EUFGR64hzTV19tAGTsKu36",
  "key3": "1KTeqfzrLk61uaUwENqKtLwx7uMrWcsBa9ErUUVCvz9nha573PK3MfQgzyPjTVm7QervhZ2LTULALmiLnKpXwjN",
  "key4": "58idcu6FNCequz8n82hWJJeJGnu1SzJLy6ZiydVKcNJCjxZVYYBfqRpRXTCbgNLZVfobR9Qm66u8NFYBsWK2Hwxj",
  "key5": "gXaiSZfUn8bV55BmeLtKvf7FhCsKA9CBE3dxnJRD1in4muPBfhcEXHESev48k3cTTDnP9h4CBbV7zmTe9CVbaFK",
  "key6": "3Uzp9RUMY5Wt7ipybfbxunJbwWz1KS4ZjczLx6iStC9kWKEiQUyhePxb7NXQAxJC7pizt3b4Rx4Ub3D8zfAtga62",
  "key7": "3Pw2dmeJ1heDAMYmho4CnFgfhEhG51hqQAnLSiLdFcTphYoAfFVwntSiGct4REicGNPn4YyCfwk2uwF1f3PCPw2a",
  "key8": "3znSgpGFj3yqYHpCKTQnZevteunw7UcCp2wXYmgPCNPSVcSpDbHRmRHs8n1m4RbsyKVv9AWdnHqBAmsN3sZBMYbF",
  "key9": "Yh8LVdoUxvqHzn3qUxEmQsAKyyCp8YdQM3Cd2m6gM4GsLigSaMs3JmN4qgBaChehw9jq1qV4pWDhcaE7recKfNJ",
  "key10": "s2YNoeFcgXZswrkmwvQagrgGVZkPeE3BEV3LTC1bDgA8AHCz3WimyQm2fkmQ7ksH31P4aEVcGuSYt4Q6pUd4v7r",
  "key11": "4y93GLHF2G6XJxo6mM4diqGYavEvFs6q3XaKK8KWjYdt5yMAewiD7WrWV5FYvUAVfSEbaitDf8PBiGSB6C5YuzSF",
  "key12": "3X1tX9uvsD6MGh6ypZ7uv3w5WbMC6qnRxJ3EUyRZKHXkctimQCXBmWWiMkpgsqsNmAhqhRZ1dGKK9o92sCRQ2Xd1",
  "key13": "4WMa7Yc7U6iwiozATUUiMaCK5jiu2KnhhFrWcmrzzjG7YoAY5acXz36yWCCDE9XLzgFiiHFyZgmB1xf188LLRdzG",
  "key14": "4Z8bNk9hgceFUpo87PpdPsWgQYQ6r3JVbkr5M86B7Kb8ijhB2kyYLwmrYR4idLKWP9WeCLLZd23TwDfbPHbx3fun",
  "key15": "67dnPD7BaNR9nyxJKakPPMkCmKMnpkePigDAZ3ZVUv6N7e3P6CMGWsmWvkfNAdg3qnmSXgGRmXJcpwSHCg45eX2Q",
  "key16": "5bvRiELGhEuJ45ye4HiooAY5oUW3scNweJNZMvMhqKJVPVYCwLAQGzwqTMymj6ve1ZLSnThoztRis2GHFaENTj5p",
  "key17": "2PqF4yfv5aXW78GCgmkqXzD736kC7oRBBdEJ262zf48GmUaA3UWVktxhHTgUmMamvLoaGHmZxgTQNKDxAruiuqqA",
  "key18": "4S7opJhFLPHAfs1HK5QoKGyTjmCBeyccLYjiaJR2kmUBWLQbeEtuocNmvSUvPbwBwqUKyEwwrPsQAdqrX58yAEwP",
  "key19": "66fUzX7WABRZDNfrnCXNsLLDkgTpHkWTGGXDVAdzazB3wY6WFFRrHG2Xd8vjnySEHfNQNfUV3unzdr5tEwt9FdWX",
  "key20": "geKiqUeERDfzFvXy4Q6WTEqo8BgfyhJrDKwRtNB8YyunDpwzhVpLoNa1EBxUB9DX6ktbBSUY81frdWrgHYk497Y",
  "key21": "2EYvYvQwnxxn2vwuK9UWVrUdJ9GjPTnwBr87SnDx43gsvgUHHY1apEaiZ186qfbcyp2ZVSuzQVxACVdFWXzcLynS",
  "key22": "4pjAYrj77BKdTwqjfrpRfu6MK5JKxrJqbGvsgDQdY82Zm45zcE4YfS4LAqAeSwP6kyt8kVwe46ZYrmnd6YKEYmzA",
  "key23": "2krEnYZJrNbn3Ljp3WdLPadRcpwUjjpGC19biy8YnY3Z2MxJGAk27AzD5jx3vaVsVgjFUGBT6LpDyFgYM5bzAL4p",
  "key24": "4C8WmvKZtcNCcVxEzSH9qbAFTY26haKd6hmeCANxk4zEQs3Th5z4hYBWLJFEqRmLdM7wsxBZ8cnEPXNQ6mXX6YAV",
  "key25": "2fELYvbxUNp95ofPDgSRP4XArSxP3zAhbWvAuuLpi4KgcJiTwC2s7fDAWTjdmQ3w7BcZwjkzZAAHGkCgv4oEvT5P",
  "key26": "dcToJTAnBrNaQCJdsPd38hkkTcwe42bSN7yiv9uz1TbhsMC6JNc3bvkSjtAU4EZpYjyCRHV3RftexQkzQ6sWqub",
  "key27": "2qdEgRQzCx5LAi2h7SqwNX9DseFtcVSYJxfqmM31rajV5xwTtgsEvfYQ7BoQdthD71yEN2jR2ePaenPo5F94fMuK",
  "key28": "3hkph1oKcVWDZHR3UZShbfi57LX9AZB7EEri87GrDLcdvHw1MsugikcujcduHLebGts9UjMC2JtrzRGGgceijAh",
  "key29": "5C1JQ61jxRBK7fudPi18yoRLkUraorwvuhfYnA8uo6CtxqUZp4nFQiAC7atVgfuq3c41cLYncKbZJJHHrVdSzycq",
  "key30": "bN2eV9x4kZJE468NQq3EV7Y32P4KnkKRXfASpudJ4LaV1fHUjRU41pPU8KE457pbUebDzGGTNSpWUj3Gozyy4hY",
  "key31": "25xD1Y454da6Vdvpexjuajq6xYAAoCvHFei5uieKwUmZ3QU5Un2NgFNfHZKjeKq4B7yWfbKyREfLgSWaDKVrMXTg"
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
