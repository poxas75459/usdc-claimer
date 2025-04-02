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
    "5L7fs2VfVkS3GCskYtxaA5V8R52Lq6BCkw8o2hZYg6JqJoq4nimCebcMrKRVn6pDTtoiVQaM78GAWR5u3AcHpm8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vSU2v8AdBCkEayov9RUAFyw2uFwaY3yMkxYtaPHKZ73sLDw9GQeVvSvhptGL3dN6fK3wPd3J7dPVoC62fJbpGdp",
  "key1": "4Cc1SWALcPBs9WfqLWmf5uZoYPwDW2yy1PFdcEdGq4XeQWtKC4uq6EVag4bPaPagwZdd5tmbXSf7mMjRYZpMXEL8",
  "key2": "4KAGiH4GXrYoEPwhkawLno4nq9PXfeff8XHZ9vAWo3RdiydjcGQMfrvcmRPkheZMGsmaBGXLVBSyKVtKfvuGUUsr",
  "key3": "4vi9wZfyGCd3agwMdWPXdhJ89GLmRub61UxbzBoHbKVo8hZP1mpJ9gy8TmW7PL9nencmn5sKivJncbpjA4ZJ17Ni",
  "key4": "55AZLXWKC5U5PtiXSM7uNiq1Vh9DG31yABcQYUFsnwQ5byDWuE7L1vGVzxrEvggWmNEWwn6feSzJrUcqk14FpsNL",
  "key5": "2rMZYiNDech8tBxCCKEzfwk2HLwLe4JBzd4Tt3TtSpMnLpsHs1fTvmTc6hxaYgvCmi67oWbwihbg4rfZ9Ymp1bt5",
  "key6": "XFyMcDDmm1Nm76qo57svTrQroHs47Cp8okLkRfRUuwQUrnsuGC94xB2JMv79wAGpLQ4KeUAq8XXuPauHpxYQL9Y",
  "key7": "2XVJ9zxbWBzZg4e7dPSmpwmaD5wL7kg7jwHkcLvfLTMQ5JGDrJcpTezGHNdhf62RUPbjwbapPARXbBWSiEgd92Z8",
  "key8": "4sSx6zJvTqnLjUgmR4VYoewthaQJTue9tAoHQ8PfBiY6o9uDnBrXdi4KugrNdEB93VsZdhPPhRVU4nYRVoaNFdWD",
  "key9": "4aoASAbnNfvgXUG6tC7R8FfjdY43VRcyMh8mpSDVEXWghDbBComFcXXZ4WA8fmVmEcHBPb6DK4ain1mJhz4rjKGB",
  "key10": "4zDuCBTWjGyeq7nT2KKt4Y5hiQRN1UFbkmk9yBSwXExREfhY88KRLKs4ehRkcbvoi2SmjB9AkAqnoryK32JSUUmk",
  "key11": "2Mwh3hsshq4a3x7PA423dBUm5ytnzfXr6BupGwkNouckLzd94FK661t34ARNygEiG3F4S82YrnwdH2rd1zFFmhKZ",
  "key12": "qVLKB2EKMCXcacHj5eUGLtvKNtZQksZmuGvgGequA9WSwaoQhWp7ZpMwQEPd3ff5j1689EV3UdYNedM1m3c47YW",
  "key13": "25DiZiJ4E6WwUnTZKgKY65zywejdYn7fHdr195cNw3HuD9QGoYn2gkBNirAUw1YdSUZEXbKD2xVSpE3R93hWQXpz",
  "key14": "22qqSCFbGfui7qSaobad2h3fSGDNitPvQBoZizPXc56UJhsBN1EZfq5HwMn7TvW1eFkQd88bBhy6X2NHVER5BU4u",
  "key15": "57ecLi5VLqwfYo1H491RXhMTkH5m3FwU4Rioa4EWVNKSGRobVwyDxYZKLJKYF77gha2taiSXoDZp1ehWTpe6XQbX",
  "key16": "2sLUQKYCKtTx6B7EukYXQGx3ZX44ZShiBy9Gss3Hz2kRCU9iA3jzYBdqcwhXwubPtWo6GKnFe2ftepuQppMyY45u",
  "key17": "3g2si3qYPhCoygFtwihR3G3YUz59shDXLRyehuXs7C1ukMHHQTBgUasSizU7PqpX6GwNvRQS1nKfphHHG1bHkvBW",
  "key18": "Gmj9iUm2XmXMAkuWsHzWpujjvgg8srtp7wpRmuFrqT6LMyACzAYVJR9QvCJNPgHmXyvyJMgaHh6VkChjpzKqhg9",
  "key19": "PLGA38ArcSfw8SPfaYM4W1LEpKu3Qa4F8p4hHVXuVbsEspq8wHimpDM2NzKAdkS3Y8tL2Zmaw1n3RuZAY6Ch6Ts",
  "key20": "3WdZAFtjD9mwxFhdmazLMwVr6LkX5fLzsPHHNTtDSC2y4PnNjxT9Hej2EHNAaVB6AyhoacMAGYMTQiMJurRq7PhW",
  "key21": "VLkXxF7puogriDLPGXeRRoEkfwxRfzX6YiShkyeoESS1v8FPz2qJcmYHW45yfuExbVREpUUeAVhaKhgN4P6N2s3",
  "key22": "2M2AMATrvS7iHFLiFonEMvgYE1rx9odUTQicPLdgXf3rE3ULXAebXQL7i6fidx1QCJzV8UGb76s4bfbP5oNSFg2g",
  "key23": "3czMrrjTtLv6eLtGaeiYAoKh9cJnrHbB5D1JojsTHdK2ENLiAEPJVe6Bodqa69hUPmV7G9sr7Uj7fuJUwS4FHLsV",
  "key24": "67paQtrHNi7XsbGCxVjR8pYGWEXG8fzjUJ7FLNwTEQLS14BuX5wuRk19N9gbbGCqwEbcDdgjpHCX6WNQ82uGarQC",
  "key25": "2DijrTeB3MdxubFuMNr2HJn9p3vrgh7bVqWvP1AvaLRnjbe3NspANSrMitgV82ZBMpSFnZk1NzEihiTgqCs63Eo3",
  "key26": "h8pg2VcTP2tsdgR3eeDuSrTf3EUQmqZrDujZyNMuYBtDviB3TYkSAhGyh71xKtDQSTrNTL7vbK2qP2K1dSahVKp",
  "key27": "RTDAJiYDkTLSus4JdR2wSoauzveHa2wzSCRu4gKi4m3QNL51CbwSee5ra9fVQ9hXqUixX2XcXnfSRFUZa7E1G1A",
  "key28": "4mxRe5429v9NvrNhRe9cfQ2UyKS9dGTVZxRQmKr6bM1WEjSupHQARx8ETpURmUVCzqMs4e9SvvnkcQZnLmLinL5b",
  "key29": "E9Q6Q4SuJPT3ztLKbApCeMSAPx5sMucPYxqJMa3hZRvAokcWMHSkHDg9TpcqYi7puG25679oZoRdMcFupVVgsy3",
  "key30": "4b8YZiCJg7GniSvVycRsJmf9e6EnAFqW5DzJiikzR6Qpm1t17pqW71Rvg1sj9cRnnAJaSEt1eCKNF8fXpiQkNjUD",
  "key31": "5yfP23y7XDrf6nTRHESiwexWqmg8NbS13fU898HwawkHrpVFFehfzKNyUsduu1KQDSD5PGE1VGTF8dbG8eEpVamc",
  "key32": "4T46iwjgh7o49cX31zPjKhoHix4BCkR5bYeH3eqqjwFFF2uyp2yFhG5ZZgBm51P6PWQ49G1L5yomp6K1dvbzTrYz"
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
