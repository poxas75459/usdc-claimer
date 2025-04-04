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
    "HibHX7A3Z5r4xGSSVZRdUtEsFUNXUVzJvjk5BEXvG4HfmZjoXsFTA5dj6hrdvZ7TkZmYJPpF5Yfx8WQ4XqDpe7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56DbRkQzstMCigs3RYbT2EMU4zVgdC6xLhjht39CWtnF4SMU3mm3LCxJqLopnRkAptCafdDy66fZbxWX5cePP59z",
  "key1": "2ZhMJ5nuhWCnnsoGdYG7TAFV2RKymcAZ6B1yAdWPPB3DpWGZi2NbMCYsRwfoZF713t2khaep8HZcf85s2Qh6M6x8",
  "key2": "2Rn6NWfLvnbNcumNfQQcHdvYnaNc5odziPJ6XrgikAXznyJsLQisSA4Xqn5GTb2yzPe7ikxSgoehwkn4NX9bZzZ5",
  "key3": "J4dyJPoQK8FoUdjhhjQWEucQjZzAtbXhp75ygappMR5qX39Ybyk7X2HcbULXKkedb6aBybKs6dARZAhsw6ZH1FV",
  "key4": "Rkd2PjGt1EBLj2zGC85dMRzrND9nWhjcajNTmPoBN7E6U8nWdLbTVn91stjVuuM3fPgBWGRTCRzBcJGRygq14gD",
  "key5": "3brwJVqxcYNrUuGThK5HS6Q5oN7yifnWVwg4AAFnnD6YF4cgvmiNc5jxH1efC2x7H1mXn3oufkjts6kLruvzyjNv",
  "key6": "2JVDBsW9Cd3zcWGL67iaGbugbUPRmmwm1Ba2qRsFaoytNQrxbp4NNCsLUP96WKYvi36m7qzjFGkiyTPk6yXg2bif",
  "key7": "46vQJGzSeSZtTzzCf4LLUPDeoduMxfZczabqY6Ht4CjxQUeH3JqSRYUynuvR4Cbv1zoxKv2YCMbwWzqKQgDvRbS4",
  "key8": "5jdXXbRkUJAVH1RGYXr3DhQREUsQ5rhSYZe5rgboPjg2B2mCg5Si6rEYQtSLCMPH9Z2M7GnLWXWKFSMfBELEUZP",
  "key9": "oHSPmARR4ZhCQeXHu4qcXS7uUzwnV9vgUrML2JA7qtVm5jiLnKTjdFpYA1M8WHMtFN99QAAjfsabC1A3GYU3bKa",
  "key10": "2yPY61TH25DRvwxV7XEDKnt1QwLu1wkhYagCPwWoEZq9BhUcizpwCsDwNbeY5YrT5adZqfNKVDrmmpkHa3GYM9yu",
  "key11": "3htmajZ3vn8pJ74dStt8MBrvwMdWBBaJB2SRLsvmHsMK9hoMMNnkJvKY2LEcpxbXBExtbiNJ7rd1zfVvCwe29EUy",
  "key12": "AuVo21Q6ajyiQd3NSnwjH6Hjqi5CjxNFfgSnffeuNnx1iddWCMw7v5gGYqP7h1Vnzgu2yUU6pz1Fku6vnvKwWRd",
  "key13": "2AHYYVamyEDWV7DADan1kcM2BT4uy5JTKKUtZTa82n2q4QAXmzjyXYeVXzZxnKHFX7LQt1dLHbHgQ48jK5HadUqA",
  "key14": "3HtiPFnzBaApnCZVNZ1ckJkmZLvYqwBn63Zzena6JNrjKhJr3zKX5ameC8Ny4LFxNFgyhsNH81FQVjVNP6AufBge",
  "key15": "5916VzX5pAEt7Q28XeNVmguZo9As6GUr2Aqj2L6tYNfvwKefMK3ZjDnDSomnx8TdRfgn2rg6DZXrEeny8jVrxijG",
  "key16": "5D1ZmXemtJbrJjQ7gzb4a3XYZzyqvyQPBiCgFCdR6qFxL7Db95WtAe6FuER4njRZ5Cf5ioChVcZQXSorVpVpMz8x",
  "key17": "5v26FWHVTUVgob25WYzACBTpnhxsrQwB3tUHNgrrPu8oGWkD75WjFw2Wou5hw5ruSoEoESFbXW7A8wwVRkraC5Mc",
  "key18": "DgWgZpVtGpu8h1TMyTR7mnkhrrnYHkEi48dZfCDN1J1FWLhknukzwYcwPoxpfY5iavZdfw2n51hrg4dnRLWCL83",
  "key19": "4ra9kZUYv61TtPe1Vhxw1TsH6HG2FuydubVTr9MqfenRG48kTMfPX8nsjWPyokNarLRKQkhJ7z1JXhho7gnYxF9X",
  "key20": "4r3g9FZeEZadFfpu1dCKptemkpL7QUKQkvEgBuwdhcPUyF2NbfAYxnpjmJMKxE3NVZoZG4vCLQSAnFihwttssWZU",
  "key21": "2Sarfg4PCU5Fuxj3VTzLPiDW9T63Bv7ZfzJ6YhC6Z67PCDXYGA5EJviGuVJsKqRe6V9Z5778TJ3x6yBSFNYH8rop",
  "key22": "5HZh1FUMnXznBVGJL1ftcESwfcCCwTLjkmWvp1fGhEtXXitJkK88PkiUX3sQNCEQuWkRmuXh2p1GbGeMTPoJMD6K",
  "key23": "3e23Xk8AJW42umDMcQLkBMTvH4cNRNUKpYJPkidQJ3J1smc4KcRvpyvx6bGKujdtHXr1wmpED7EzjwuDwaJQ9YLQ",
  "key24": "5VjsrBxFJ4pqxYtsTNoKoXwaCN6dN5CFUEGG3MCggbg22jCs7twZz76p4oDkAmUYAdbUMYiVx2XZPKyFVNJEFrHy",
  "key25": "5FKbQZYysinjbKteXZW2UfsFQTw5RbbqVqEV7KsRBWtbeSB1YxG7DKeofMkDHU7XcC7AfRV5DR7dagsZrsuoDKBu",
  "key26": "3tzCuB4TohrePAPGham5tzL4a148zjr4WHVx4CXjLgpqXyZUYNk6QkjrCi8TRsgksMfj5n2eAxwYiJyj455jGps8",
  "key27": "4rCFMBypa6nfNKGfzno6ZV6gof7iYz4BqGukyEV9q25KHZegvMLwXdi26RbXrXJCNursoJzPbbzDNnPMTrcM3wS4",
  "key28": "dcCkqg7oRhqwonR4KvuWKLXBTh4nHXtQH2qqcfqmZJ4UBE6JTX58EpsCpTv8gbsoHvqxqxtYhY8t974cT9ecroG",
  "key29": "4AnsZwAoJwpZV1yPmvLjUPp3YwJCfqhDG19TApQHSZMRJaTwvxjJzNBhhQ1hz4h1EqzxAdDUDz29qwJAubyufKKN",
  "key30": "2DDTsmbxahp8D5LaQxB9Bj6Y2a89ip5wocv6mmdQxhN2JjGX8QWHQZGfB8CP7KAGbK54tkVzNnG57n9JdGzy6seE",
  "key31": "3vXwZmvuXLc1YQqtnBsVwJu2UdnmvD6bePnDgxctAYrnXgpzLsgGChnUK8VUKWbjQQEd2CKvuDvkFvJXoAZT6zfp",
  "key32": "3hpnSbXRL5QTSFuYBS4Ta3nLM5kgKBUvewqgraKhf1SxHmoD8K3nqtuM1Fh9yjjkxxHEpx7nMpNxny8bDDcWodjh",
  "key33": "5ANBaSpNXWg4rZNw7RVpMmgSAEUg2n3iPs4fDsns1EtU3B5QzsZJFtsAHBn9Nz3bHX1BEuiK8TYE4MUPga2Tpe4Q",
  "key34": "RizNpqdNT5yszpxXUqAknzDW2GoYJQwNNWvEHTGCuWBFgeq53urvnZconoXyvi9LR1RC3nmdhasDoDattnQXWKE",
  "key35": "4qq7j5Gc5rFPhecYLgJbNEr9Sy4BEC9KMNyMVLJxM6PrZquvSyoUThYwvkJzKSqGeEsSPKhDm7kKsCkHfNkAKUPW",
  "key36": "2fScDA6fSJe5GZWqrZFUrZ3dp8JTmQY9PZ28m27S7EKNXmgCCv962mfYE4B8ZZSVLH7Ki9svpZK2KdfmYBBBTbvq",
  "key37": "5RKtT6rfgbh82YMfX2jsisowNianZoS3fPLxBbcLivQu1AsfqsVVZzMw5unrgyp8sg34Dp5caqqS3gWFvo53dxMF",
  "key38": "3Lb3V6ybsPwvcM278CJ6HZWaabXtK3Mqi2RSTZe48YwmZAo1nteUbhxUMKiiWVK3PsYfd2LsUa9braS8VWoEsrs5",
  "key39": "48GhEaFgnFjfANYWUK4ScryYdngU9fwmwKhwRbMS2keEsh2EhEBBcRUFKwfHAXjL1oCrXinjdTaMUUu2DhfWrLQR",
  "key40": "284UU6Z8gHyAW4iENyraWcMRSUooNpK6mYNWZeoAixXiA6LTbctdMCiCJZWZGCoC9qjE4u8dbsoDyAPfTGP8bbj7",
  "key41": "2TNFg4xqBoGnrfcCWb1JcKP1GqqL2Sf3XzXfqtpQB9LzruxJMU33Yt7jxqxZCARfwWzKbEcHJpEkUngnVPybK3jo"
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
