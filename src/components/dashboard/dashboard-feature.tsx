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
    "2L6gCWobTvY5mmcJgYQVXYMkuwEWc6p7pFJHeteAb2uJwT9mkYRm9BhjUSBvi6ZEcqwXQzWKEPambyjvSecMEjrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PPNG3vcC7kqSwCAqkEzGGmJbcFJFHpABHM1B7kHhLzBEd2vmABQaR8qvc3rHgCQWdyBEBowhCCE7MK9dtjg4tmP",
  "key1": "2DxgjQuP4Yeyk8UvwyVPf1P3DiZ8YwHKZzGojh8A1p4aHo3RQ1P1vKTCVUWBKwQYg3WVqrArBobpGV9YNdtAdgR5",
  "key2": "5JyjHG2LeUbohrdmvmX244qk9DwdfWic2e2BEFEvW19MMQNmVVLdpwUbBGQHdJCPteui761BLuZvCx52LVjJc6kB",
  "key3": "4FZUowLtGgXf1HQkCZeNbVMan4KhxC4o3YZUtdPbEHf4ec5K73jF2tPJ94jbMbtW19fGJ5YErpEtGQFoqBRoRWqa",
  "key4": "4yUdESdQhWJ4Y4WXinncCz819YtreiNg57bwyRtASnnumeZaoWQvvBmuhDmKKw4M5Gi5JttMQBsfPGs9o9Rz8rJ2",
  "key5": "5Pe24huGagwJjadWCZkTxodjCBZn6RyyV8T5wFrARhfV34DA5RNMPL35FnDTgJ9hHpqoS9Po8P7BwFycq7K8JFAE",
  "key6": "m4QFzXK4qxhUKPHBbcZ8em2mLF5LSoQeJVqMnADs4mPdnsdewswSSHNoJUZyVK5dHs5rnNYusMpSAaYZ6Wtc52e",
  "key7": "mwPBZw1xxBbyCc8VgLSk4Av1AN6wmgpcnz2yZ4si55VvCMG44EoS6BjitJgbfw3NpLiAUkKRBx8GsZP4kwtukcT",
  "key8": "2DnfYRfHtLTd212DyeWNPxY5qj1rU4C2xzrtkNTc9MmRDxe1dbeuisv6Vqs3mdCVMDp2FJCtAvhr9XmHMtsPqdxC",
  "key9": "5mfTfzJhpQundj4iEmWqEYz64GAYBYqcSTVBYzAsNwZPJ6uSZeXEnRaBxqMQneKmxRHstYpwKysjvKn4bLvEeS6T",
  "key10": "61MP7zxxX6cGcjoB2CqBfvAodYw7DXaixE5KcFUCdLzkWrfsWDyZxZzC3voUF7nnMeqi2ckkbUjivU33w5pFsJEi",
  "key11": "bRos3aMQcMgMyJigXHfr1BWQJLyafrcGjdvxTmGZq5Fu6p2yRFGha7sCgBozMCKnDXCeuRuP1dYbWM88zsqWR3q",
  "key12": "53bfWuNf7NoD2BEBNUJ19HerCji2DLjLeqyL5nL4t6qiwhQsqgQA9R1q1TvapXwWdGESKcLU3eCw94DM4bYB6Brf",
  "key13": "5gFZpf7hCQsbugXgzsV6E32teB8S97Eshq2M3iqJRQtcZ2PavvMRKLdPRJaqJnKetm7RUfN6hicSJNaK24K8oNHG",
  "key14": "5xVZawdy64Z5EmFWiBw3ZiNBr55Q8S4Lgg3fn6QNFnD9kuALYbfV4p4bzawXQ4UHKSQtPi4J7KJo3bMLfeiQqMAt",
  "key15": "3zNVPDxS8wb5aacpePRmnaBhfDrbuuzWX6NGCVGMmD5HQcSaKTfHEJS5Xb3T2mCvMHhAgqjo59s5hCDXcnpkwNDL",
  "key16": "4BmWBwJhYnMm6nVLP7E4VzFXm4kxvvXBkCjYZG6kDpgxrqeg9KTojZnDAMiEuJn4xcJ9Cpw85E7MA7G6y92qmkFS",
  "key17": "4EinDny2q4i5WXPXbDi87S6UopirFdXPUqvCAu8JYs8MV3uJtcXfUi14Z679eFehQc3dTWwdWBvkhygYCA8Ns2dv",
  "key18": "musxFuUvGUjiUUDArTwsw8ZSq9iYbS5LFzC12gZ5txb5wLX2YW1fXNZS7hQBHaAWZSXnZkd9ptWoUfmpXjTy15S",
  "key19": "21iujTyeqayEaC9tZEQnEvHUhKadYKNAPG4V7q4XJzZyDQPZm5DNL4yC5Q9TBMqqkVMusG3GQqqcZNfoRrWsXPNG",
  "key20": "vR479cZEgRPEqmkrH3uYC26zh3Xp9ZwSqkPseU1KyJE23mh5x8JgwmaKAXQLp1TfR1kcadkRQNohBvSSmnqxq7a",
  "key21": "2y1pcCu3xYJBji4fRnt3EVLDjJ7cw5jMpGa7PZLGofZeRQa1AtLVgz1qCcnX6Hjpvvk7QeMEZKouJ3u7X7bVUXmY",
  "key22": "4jnpkkLibRo3YnxyNLJJdoL7vLQE8eRvYBpgFNdBxBcmn1JZH2vLrNKAkCLVxkcqko4UMkfhhmiiLwKfWoYBLZoL",
  "key23": "3aCJSLBmyRf2pD1jBEWFEfu9MZW6Z34ciABTnZ4fo34SvrAwpu1kXyxCnwmT58WxFGod8FTrsHQCfCnJgqUpGCyq",
  "key24": "2VNZ2nSJUtMSenHWn4aWLMC1vBPTEPUaxgzTg1tQuVDZj5J9Atfq92tcMAZe2QWD72WXeyWzDjw3cc63xKAcGkSC",
  "key25": "2RSBa9dpvZb7nSBp6EJMzx5VAvXjxPNhq1ZjPApALanpe7YQygfti2DZ7tVZ9BmCQRsyGA3BarkHNzLWWgpVmAYF",
  "key26": "2wUP1j4fKCaQJc6wZzfFD15QHZNxjFwdr2GQpDvuzntwHDAux32qAi1YNC9A4duw1tNRzpwuGwVMxZ7AGHjwwURZ",
  "key27": "4rxVRAb7JPyg9mN91561SvC1Gb6m99AYrFj1M6kLCmo7ViPkrqSn5T1ejaiSXUVJJVU7ytFKAKPB3p4YRDp4JX5y",
  "key28": "5ZNJCvWfNLpP6qLLQVJfkXWkdgJBGXaXatYeJRiPDRtucNoR47Yh1Eji7FgKzQg4H3w234iNabF3FaAXTCVWQdHw",
  "key29": "MT2ESf3bAvw4atqzLDdDWaFnGCs1qhbptGyWZzjxnroAsGwfm2AhmJmq7mSrCBba2v7EC9Sg7utdiKcy4yE7H2h",
  "key30": "jEP1WK4FYJLvyQ3fU76XhNZFxyLgC5dtiqGViYudTTZJLphNkTE4JkKhDWiM8juKLMGL3xzr2G772ZacktGNQoG",
  "key31": "PjJ1a6uBcvjtFF1hmjVSrwZBo8DAG6P5CVrho5xoe8VDuksKAF6RLQ7vMBCJfBqaULjbPhhCBGzNhmQVn38Wzpa",
  "key32": "eZtzWNyWw3e2iAJDSwp4B7P2jPnn4qfAeLqyioEAhASR4hQhZ8E1M6TMUf7pDZPNNPpy3zA2Cv43vK5nCnpi5R3",
  "key33": "2KakDpjGtkm6e8FVLmvoKY4gkZwrWkKtRPrPToRN3wuhAY4dHMnJHDxbRNcDe4JwzK24H8tbeaFLdBhm6Dfrhav4",
  "key34": "4gP8EkiWCz3PbvYrm6nHHGmkYpjeUze2ivKr67LB5hbub8At892CyJ2sTCaRkPJboVnfS1K1GxtkyxNj1QtPj827",
  "key35": "2R1Ui9VDM6pZHPJ7q8D9krizNTxSLzRCBFKxhbFu28ukVjjFzSyqa11iKUH3mt5mEoQahYbarrRNwbPS9dFBWbPS",
  "key36": "3kAmKvTdh8WyKP86tcymKowfjGbbVDiPYio7txFxmh3jGxogZeLPHckfBk76Fno9KmKGztqF2oLLF95JhwUyJMnu",
  "key37": "5EpcXezdYLaaLp3i7uyoWbG7R2sBubQknnSjntCuMJtsDSfaARyrf96SnYRsgB8jdeMC2M14fyXL6NWkv1ARM1vz"
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
