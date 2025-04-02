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
    "5VyJMoTcMv4RRoVX7uVK6MAUToKwiCGV1MkKEdZvmn8FVn2DuktCh51qNgxe4vUVcaxXsxUAjMLZBqScheoLN3Ut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e9J8nzmnJUnjv22yJd2iJVadQwGctePGn5v3vtmWRsE1wNJLydr7Qq2Gj6DKW6Xc1SP1jPWDF7h9uZy312SHVsL",
  "key1": "aNuqhFwAsJBZ89nwym687wKuz6o2R1mVoC8srbCP8X5b7u2Vhf15YpuGEpsKJwEt5iaPeuacpUPPK5kKnt5qH16",
  "key2": "3ppbJjUmdi3da5Zc4ws54SfaMC3pdfAwGjp7gYCd7qsVpJ7ArmrqXJotbFmfsVEpS35N6iRLTx1N7uE97y3W5ipx",
  "key3": "3C8WS1ZAJbkoHG9FP7eD4c25SZn2yj6ZkCLTfscSKUPe9oE3oLL61MPaiB79J82KuZRaq5Z6TzjzeECMGzKTT8UY",
  "key4": "3kgxp9aoUduCJT8MfQeeFeRYZnatRuVqtu3ybay8DaRstNZ4wnvzBhniXaiPPvBQHsEtMnafUygCWwBQ345ym2Pp",
  "key5": "22mZCWR6J66asbiepUeWf2rQJoEcQSCTxXZ8hzUxjqUwKhTcsviBtYoA8q2WonMfNcU5JFKhp5WuXHnbUAyvcwYu",
  "key6": "4AF7TAJqsMfC3WNDzuRWcmBm9YA6GDerV5dcLXDL5QLwjFQx5x8qdqyNHUFnsYqzrhDtgb4ZNYhTAhAh4jTtf9No",
  "key7": "ynoSKp4VJJTN1QXqC3ZDeu9yoo8xmsW1WxEXshngqctbDDveFb9HPHvCPSoCJd4GTcdv2a9w2V89JhGV7UCjotg",
  "key8": "PkGFmztW6izNf8Jtzjc39jY2RDC7BR2iNfgBSnJDBr7J89VTuKcu2T3GqxXarvo8KArUp5zhh8BRwyVQEFmLsiT",
  "key9": "AAzT73s7yh2jRN4cR3STwoK6TK3EzPYqaHeJ3AVthR4vDCT7DkGDeWFGzz7nJuHTXtLSfx3thobukXYnEy6gar6",
  "key10": "1evbpLBJ6e7xu9vKc9XWhmEPTQwmwZSDPiLbvvp7gdTpZ7PYeg4fuBF3HeqVEi39HLr5JJfeJApSi8FpRvbzAfJ",
  "key11": "3vcC81BEw6RLePLxw2zd1Z9Q4hfkCTo4rfaQwAfse9hTNmi98eFRVLaBkP3ugF2bou957mKBAEAcRG3YTxhFRAwW",
  "key12": "48CjCrF7yvfcCn8mxCXmJhiVdhEufxeuKLbKeGqKaMUBi9VvvG962sFgGUF9967XVzVDFpwu2mFH2d9URCbcJXPg",
  "key13": "cXWN4M7mhR3rvWiZqjEu4Y3aJdZ2VfsBxE1UHZYPyYNb8DUsEbnxJkBzWuFXdd6Bc6FpE5aWQ6iDkLPbTMmAqyG",
  "key14": "2sXH7RcA9zbENiUcsEdwKZ7UbwJDsPnSv8oUxqBZ9zaPqSNMn74NCRKX3V8RiwjMvfoq5AJPt7H6AiH4r19XsN9",
  "key15": "5akUSMgybzhkDisw4sEDXmjyz532emDU7MLwofRwo7M3WddEsiaUWKGgSsUQQFSxezJC92ghCBVttsdw9FtoycDC",
  "key16": "369GqV3jC44QcdiWWovxvNNoS6LEmkVHrUi9GCyJQntnE39sDbwmnCoKdFZaedUTJUqSbQCpfmkfE9QNvccHk2f8",
  "key17": "3syQsWGJPB2KdknwiktLdEpc4rmUBB3beKGVbp2rEtjfTczL7Bt88xtaGwVfNxWsm8W9k4Dab3e5KX9ZqfFoTYBJ",
  "key18": "2Nk2zz8p9vMRhPX1B7X2aQZ4PtGoqiMh3f2Ls33Hc7Y4R4yyqCXcAvKSBBMD9GRz9tgLTS9KvQauZP2HKqDyPALy",
  "key19": "2Sg43dN2yTvVsE62s4veWd98neUKd99MdecH9WB8zGft7Ki7xYgR4yu6EvH12NUPHoA5EtRKzYZoqgxrU8Dx7ot9",
  "key20": "3RsWWMtYiUDcC1Hv91nA11GVVDzMyNttRfVoobYcAQDPcevj3DEAoGpckwTRqEFNzar5JTAnixUbNvRZoR4WrXMK",
  "key21": "2WL9gTzwX7asPw7qTaYsYi67dNMcVJ9mzM1jT1EU3BsbLRsQWqNmYaTcxAuhkBDPa78YLKfVV4C6isWSZLR9NtXo",
  "key22": "4jZq2sQ6XMYdxwpxpQNMudaA8z8nhoFLip5FPyt5neNE6cfyY8Wh7eWMwUdfohqc5YMftupwpcSaYf5W4Zv1K7kV",
  "key23": "4CjQEJxyn3FLeHqN4f1Ck2m8CCShRmWMmiEzyspRDQTqD5uBb4pKy4XfDQVg8KfF3ttESiHFFZENk2xvDqq9PaFd",
  "key24": "4om2A8eQHMh9kNbJeZ5Jt4Wh2C22bPe9rBVe5vqC5N6jSG31FYAXBStb5CqVkMCSMv8V2g9Ay4pkKADpFm4fctSh",
  "key25": "3hnVhj9Xrad8Fc2kgPqJaEhaePXstX66ZxgYXZzB9q25Ug8qdhVjcR5Hy3a367R3NEfVLzHeZvN3Zom3LMT3RJMX",
  "key26": "FBdEkB6PrwHVMxru6pbyzkC8r4S8sBtnHmBeRR2rSmcEAVALreudvthLsWJYr7m1whC63qqmc5Vc1rSrwFWnLfS",
  "key27": "61FnG7dn3qNWuX1TUyGhGsScktSW5U5pDghR44NypFwn5dKXXHB6p2CUmyTiWcfuz1p71ZSJCkWghVpsgfhasJ65",
  "key28": "hZwjCs5LfeLAjRGmuhmk7erdDa9Pb5fz19UjH5wTit9i3x2sNR9HHtBBco6xPKhygXWZQC2CKjkSMXMSCXx51AZ",
  "key29": "feX8ugimxunmSqqmYsd3Gf7jiDBLSzVKntDAboKUin3C7C7R1e1dSBF4DZY4bWdeCWvi1hSB2upoUD8y5wEMHH2",
  "key30": "62Yx8FAh833eDnJTY7tXLKyyojgwhqPwHD2MZ9uP7Y32EcLubsRQ2HzTxuebYyxzNUrf4nv9WUMawgx4bJDFSjnb",
  "key31": "2J9VGCX8scWkv61yWxW3c4kS6D96d8nHmQ8cNkjNGcoiZm19qDqyp26NppscuNxzettRb1shRd9hdBXcV1UtSG3x",
  "key32": "2wdt3L3QMNFTx696LXHkS1kMgNUK5fTSi4V3ks31n9RDov3gpL2T1FKWxuxnf6LJpzGYYsDkJ5514DmBwkXPPKgJ",
  "key33": "nzY9k3cLAUNXKoXPcYQC8gAYCwiKkzYmp6xwoWe6PSmffPfTpgaSZ7hAjhVAKzx3Xdgr1AJejNordqgvgqTW9un"
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
