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
    "3FQzHH6uCfRDrm7oxUbFLdL7FrUZihGPUZhXxwNTGwYh7iY7AtZdmh6hNCVoGPcgztDxX4NhD7k3w4FqsedhuAbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fK8D9d9wzh6fgQhFo2eQLD3q7TeEdeEwZfLDwcDEKDrQZ8bS1ez9scZL3gn14WReG3e6W26H9uQrmHqVNfq2t8c",
  "key1": "563kdbcLwRmNzWv5m6cSSjpfU7kAHSviEBw1w1waeRmSi9tBMg3GAwShwNnBcCZGKiCoCB9in2NQaTXajtEZuhP4",
  "key2": "3vi44Q4unGTyUjrw3XVqas4MEeMpAyQp73sDTj6z8KuViLPFsCPBGwV5sVxmzpJWi9zimXaQKYwJMdR7gvXDndB3",
  "key3": "4xJb77npyCST73cxBmAf66e4GBzkKaMYzqPML2nvXVxahJswMXTvPshLPxVbtoQrtReSgGJBHLR49Rf8a5RpocHN",
  "key4": "24woHtraEMLUJ8xm7eAAntPUmueGeLBCtcNLTdCEFLM8D6L7kUJS8LMxuAtAiAFMFr7fvFgibABc4oRdau2FZZcT",
  "key5": "5HeWLDKpR53q4SVs7dToVC7H97DebpTbpC5ZQt3nQb47T8KRLDzVnhxnaqxQWZNBd85Cungg376JEcjFK6TRcuP6",
  "key6": "hYp4sac4L9BrWSSvgWncpv7RQ73eU4ZMZFcDS7XpFag4sSLMjm7iRhFaz5Caba1Y7PnzmW5FbrJYtwcMA6PBXJW",
  "key7": "AE4WarAJppVqDFyWooqeppD25J6NTwP1mUD5NzYUdEMCNukgVYGPppgnfSbEtuQCVETq72qQmyxgq2AVTbXrzkG",
  "key8": "rYrmhp8y3yEiq1w6PsEHcraq8WUzdtj5ZuWzb8hotgkoK8rMbKsiw5BciEoPyJGyR937Pp7Eyegm6UBdpNFQ1dX",
  "key9": "eu1QgmyxfnMF4Mt9Lv9zr7jbmSTz3ZAJQwWbbq6y8w1B6j4x3sndDFHmjEQ18Uisn3WRE2yw5Lpr82uquCTok5g",
  "key10": "61FmNqxoj8XCp5Az3fvHb8i78idSixcnTt2znyesFUb9LRGujxo63wd9PW1na2FwqCMkPET8tNkkNotkd2Mj8EpK",
  "key11": "42fkLZPNjyCiR8Eg35XAwfWkHxne8Rc1C6ASfqGAEBa9wsHKTxcwjjkatud6KnVNX2emY423ATtaLHAqPgH9NRF7",
  "key12": "5JzHDCg4XLNk2SQnDPKemFfXW2XS5hi4grg3K8sMWFC5jNiAtaaDcLKgstgq1GskkapZbuRo4uhFXUPZo97FLCFV",
  "key13": "4DYtYJATbnZHVqQnpqjuGYWvVCZRqf8XYpLD6JkuSJ4hf8s3ukoj8c13sPJHhZxCsK2XKqqKcJnB3GJjToWEXdG7",
  "key14": "58VpPm7XAK1Vbh8sqxx3K3BjWigUjeDhUiUWfVtpuu7SRVaiVcZsWnxFxWoBgBMoqWsH6dqjRnLkKJnntAy131oD",
  "key15": "4ZHJ5ETKdm4xTHqFCwKpjiutcSpzWQuK2zMLNkw8mbYP8i9KBJJmozW3JW8pmfbQKBZ4afer5Ac1Ym4G8mFfewjv",
  "key16": "623sP8dpMxoeXJdzsSEBSQmGpJ4godri5ybe73t19BEvc1n1pqro58QJyRtBDWBz3YoHnmzx1y47PSW6z44gAprv",
  "key17": "5XnBh92uX1JzXh1hDjaZjmduUnchsr6wTTu2tSUDX1tXBEb3vZQXesRfyGriVEKQykca8mSNtRHxnep43inLWyhM",
  "key18": "5CdpBwwngoMrMVsv2NY81vW6Dx22Uhmc8nCy6gD9j4kQ49h9hkScUfxJccBK3SzzE862NawkSgZB9bwcuzE7fhFr",
  "key19": "o8fh7gLcAdXdnbChqQrK4nV96X2HeBKEopkwNnYnzzRiCYRXJBwCzZkLZK1gTDBCDzEsKsgS2oJgVTYJ1UhnPAq",
  "key20": "3G8Vq1Moro1qyaTRv9kLe8bFKcVUSrvSYC2vbcYKjjmKz1fw2eFEbweCN1MW95R1X6HYTJqCjk1tk2GPijfeqty9",
  "key21": "3Q2253cNHPqQjfpy8FtVH9RXeXkZLNKvc7A5rmqLTRSDfjCm4zawUth99JQKoqcvVEqmbhrcU8piFDpFmPRtxygA",
  "key22": "LUgqt6W8pFovnvrPdLhHwnBUTRaL7kscLRjkBZ632FMbuUCpD5iJy6151PRyfFFkPapmye5vEG6ZSCgiL1HekZo",
  "key23": "5bBhBZAi3P76MxRixBjdc4rzA3RAcJuzLFdjbqrAKG9tj1mJT5FRGJsdrpCbbHM4vcqdz63Y2UTCs1v3cvaeuoz4",
  "key24": "5Y2iDrhyYbZ4XjT9Riwvn9g1hLhn8jFSMtmC7h6P6SuichU6E8zUHMdfMTreLsX6rK31FRywsGYcyoxWDFhoE7LB",
  "key25": "4QS1Q8zgxdi6BMh65tpPwWkwPtTr8CyFSCV1mgvoLaSrScPjqWhMk2f48iiukVSvhYyzxwDMVb47FL36CTwixcFf",
  "key26": "GtA1xn76aaps7GwAA28Tmuw8KHsM7Fm9v4HFtPz2J8km4p4CtikrNyct6vn8XKxbTohc3GCPbeEJkXMM4Wjsrqz",
  "key27": "KSPJQjCw3cF5CYYYc3Ybk7tVqYoQXKiP73LyXhcAMQfiQhpuXuDVVVdAYHV8YcB9V2kV4qWWEQ4t8EBYwNrRXGK",
  "key28": "5McwbqsZDLSG4qsTGtMCrh19JM1TT5yA8cxa2f79hL7kGnhGhWAeTCiukzJXfvGRsxVEpTnFuY5nJknLbrscgs7L",
  "key29": "5TovrDLToN87CgEfue6b1HXPqDzqVmjMKBBJYXi5Au4sVuwT5rDjWWxriCthZ9RgydVWfpM5nZuTVSt935hk5GFj",
  "key30": "4C1QR34mtjBE9cd6imjNxZ4weratU639gCeaaDFxW9w2kp4uxrncDZXP1TSW9nKV8MYNNdiXq78gRdFkJkvgWh9j",
  "key31": "4hp5eXYBuXfmp1EDn17YjCXRRr2m9yoZ7xHTWm1NG3iF6E8sdDmBpk3rebNjYGX3JNGHpXywPeZV3J9UGxhGdu9m",
  "key32": "5UPSnZACQz6UVpnEXDZYG5he7dG9mUGnNceorHQRP4zFeqUA49f4qYNk1349auC7EBLURW3ZJaLkgWpnSzrgmSRt",
  "key33": "2CadZ9cEkGTftWMXuzYYSNQ1um1cgqnL8CcVzmxNaqgdxr6XonPXP13zZqqMGQdvvgpyDxK1Qdbmsze64f2uBarN",
  "key34": "44G9WHyW3Ebjjo24c4ViHqMRt5dmLEnYZy4QcMgyF2v3i91XMvSQYJnYj7RUKKJstzbbjHYdYJRnFkhH7YMWFDy3",
  "key35": "N9ewX6fqnH17CpUi2eKovz3s5EVLkYvFg74aJocYX3B6oVMkWAo5k7t2vMLLT8rJE1Ad7VTXr7QZhysSoNkaVK3",
  "key36": "2X1kHp7gNqqvZv4Hr6uyTe46Jhogv9kyczVJvrPfKMsmfciid9XhdH8fxYi4Uzu26bKPgbMaNonw1Zi6qw5tc8k",
  "key37": "356TECQrbmmPyYaweqB7Y5qcb75EBjx6zUMb7eMSV8EZHmiea8LwLyKjGfvPgcHnCjo7pUoaYkLmK2EW4e6SQ2nn",
  "key38": "59uqjU6DaFVvJK8Vw6QGRc7tgPoee5DNikam4BUNKxZZPdKbcmQXPBSBQYkBAtGQ9k2cK3E92YngmdGKHXKHTFXX",
  "key39": "3FNBFKKNCPFL8HJrwni3HVf3TUYDRYPXi5HZJQC9WKDBha5NeEKLWDHzXEVUxMaZgWwitxxXCXL36NcxAQvGPsWk"
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
