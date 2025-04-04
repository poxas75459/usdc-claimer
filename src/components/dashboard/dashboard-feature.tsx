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
    "2tSwaWugT8intS8dpyb812qecL81PaACG19XyjWadMKNzNaqoqNYmK14ohVjcacYk44y3ynkocrF5Za9FbLbAz2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WdMxGV87W3Z2syYCU1qmkA98HtLFBDZteo9G4Kfm92rfKQvqW5vBK29caBgA2L6XKUcHwStUE6rf7QocHNgANSA",
  "key1": "67mMAZ63GPcBd1RjXYKYNKYCijPBBVzPcXD6vNeg5r6beDZdRPHwBh7ryDEu6tQD7uXRnpDdf7nkvHHDbsLYYBfK",
  "key2": "3uWCkNYa8kXaApsqZR3AbCmdcJUJJkFvLi27UAfWaqqSpcy5ugSMBoa4uedjFWXwE468hLsRk9GdXKmMFuMG5ZYi",
  "key3": "5BFft65PnvYHzRjf4kAwQwdbrT1qadYAgtFEFc46V7Ztm4XBCZ6WENeyc5LHrnve7NXNPkgJ7tcaRZ5uRfabgaxn",
  "key4": "5344EcsG7b6De6asvi9Sj6s6afwujbutnX8Lv7Sscek4F7mUdjzjGLJXMTrKSFEJ1hXXqbN2z76Pz1fATuHnKEPM",
  "key5": "24EcJJ8eYdsEAcK76bz3o2iorM7xU1i8A5A6wFFo3f58moLNmrZVAJinv6DWkibi3RtBFNT2s4ZzovXsGoemUcFR",
  "key6": "2MDopLPJ7xKESysGfcQB3yuTdPqD229Pd9kabCxjfgWwscaANr9n6qmhbkFVfk6zJitpqQgVF9vJ14iVrZg2wM8",
  "key7": "1bjv8D93FBVN5owZHVWEY8tgTJVSz7bN5nQoeQYLMqwPLjZkt3yizBxNLGhq12ZUX1eBYLPZ3MqLdZB7PUiZ2G",
  "key8": "5heutvfZ5QhKvdYxc9vMRQiZr2QbMLfFBYZQjYswGs2c9FaYj7ZKkNFieX5zcfJtjhrhRUUbnt1Kk6njpHzS7tMA",
  "key9": "5pBQoqBT1TH4vPinRakpmLCuYryNS1kKjkFBLwEzCJMwPfDNgdRjFR3SQegZfqyqetHg7jj9KwnCmQHFAhZfHsBm",
  "key10": "5bNQJ9AMfDhNinnwtFxc4SFciB59nCvCdN5Yef6PepJkRPaYoQZgsq6rqwE7Bc4sKiCiXNHKHQoTjgUceWYHao4d",
  "key11": "3M1sjUYgLMU5hvRSuGvbBxKsDZqhmyrXUq61it64y3sAJbeE5ZEWTggYLp27ya7e8R9TmSpp6i58zbJFTwH2poaY",
  "key12": "2WCbfU7EYMsQxc3bAcnbsp8DRDqsMyRRr9ocsNLj9tnRt36aTt93FDQ8rztDajgysrSWWY9NW6Nq8FE9aCeufai8",
  "key13": "zaDCYyJaUFYJKozYZ3hdmP3skyx3wcNpyR9cwXEmJqFutpdHbr656Tok2W6kBYzgHZMa24QZNuCwAvbQxL98y8V",
  "key14": "5rqJuGA7SsmKjbtKiUWBxjnP2yMBfmRrs7JPHtery7HwPkpJLfGTiwzm4UBavQXZVhucAxNDYcDezDEX9dpex3VK",
  "key15": "cz9isAxdohMkUBsU2fgeV4oSMceRrDAdQjUrkvjbN2rTYREvjpNnXbuA7WcpeXbZidWQLWDQFQYiqQg5BvmAZZA",
  "key16": "4hqi3XuHXHXFFPj7MTEvC1MroadbbRYuQcYb4YVc7zRxHsXAcCXkobcJgCKRmDiN3ZYV7ik6hgEJpNDj9PLBQ12e",
  "key17": "3Ps397YjjN1yFBuicSnxLXSngB1j3DE4yWyCdRw3rReaf4vgAtpjYZ8yqEwJLA5TmDMp21WPvtHXiyeG22JDZkD3",
  "key18": "4fKcCevHKsen8heRMXru1CQdRpWYyDkVEBf3ibsT4icRvB41FwPcni2pJxtWaT5XZfj5E2cL1YScnzssjsnTwLDU",
  "key19": "2jNSgMmbq8f56PNYJUqPdvw7DiCN4rVBnyHyAu4VtsnMtys8WwQnH6eiy82Z7b5PxjJbEGYtxvqAJX1Mxy7iPTXV",
  "key20": "3J7SfQrfw6yEmo3EphfQUiz8hyRGsi3oqEGPvgcujQvSNWBfqMPEyS9tki1YRY9BRXsBzD5kLkjqtLxv9CK6rwFS",
  "key21": "5v9J2guGRJxa2JHT12KDyCbqrpgePH4DMzbjRBif6zGEEj9jmLxzMNhyd8TmxM7NYPxQxiPkj8MZsyFa4YvPWxsW",
  "key22": "jjZd7FZPz1rH9eHKhvjD5Xjjpsi1Z2Bo4Lqo3NMdjnyFhw9izZBFhkTofHPb6jB4gfY92i8SW4A2mtcaC1vgXeZ",
  "key23": "52UUP6UxKCSx52BbFvuN5eWz4Rnxgai4etmwzZPzYo2hr7gd6EYPn9FcGndijka5oFZpgb6swefnhV1i5eMknW1V",
  "key24": "52ktbQ8tbKt7q3rrwJfq4Ymz1FymbttYPrhW4k6kJ1VfJg1VPqRGFGMSTwDg2jTJoADUtEScVexgvsKp9Ur5vWiC",
  "key25": "56XHTHuL1a31ZbL31ro1SkAUYhRUWUX681apG5QguaDHERXXaHLoKnsB2WQZzCrC7PQTAVTDbSom6SXjfZYHm796",
  "key26": "YeM4Zgc27SuefWvitUzQ1MQdCh4MWh168DTESKgSYYAcFbGLfHtznuQ76WLSUNM3xFppribL52qAuByAcLuBwnU",
  "key27": "2cSaU7Zy1FgtsLeSiCJS8go6pLFTmT8GdzApPbLA9oVPo8g1YLGq5XZysLTiBtdWWZgeRCaW7D4mCZNvnW15CMWx",
  "key28": "3S3TABb1QXrMjY95TFrva6fsUWVF7xZpLRiEg1P332btq9sjmYxNKP3eyFxkRf9uuLqJgF7LAvgQcdDCJ15szGG4",
  "key29": "5N3ffFeyeoVTTBc1eTTXmmSc9boPpVGsYqJ1T35ajsxDbgh2Js8DZFgt6b2hBJGJNipcDARgVdNtdCPNEByN74w8",
  "key30": "2PshhC2SVtubtQuGZdLzWxTPE9DzPJE8vNnQ98KgvLDejJF3W69jYxf4VQ7hjFQqk9qqN2NQmZvdX5KYcyzf4rij",
  "key31": "5VW2MKqUsYMZB728qW8QXCnfbR96r4RKFMYin1DnMyGpptEFe7BHcF8tPZxr6AQf73A9WQaQptq84zveSf28DurC"
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
